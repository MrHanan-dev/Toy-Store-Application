import * as SQLite from 'expo-sqlite';

export const DatabaseConnection = {
  getConnection: () => {
    const db = SQLite.openDatabaseSync('myapp.db');
    console.log('Data Base:', db);
    return db;
  },
  createTable: () => {
    const db = DatabaseConnection.getConnection();
    try {
      db.closeAsync(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT);',
          [],
          (tx, result) => {
            console.log("Table created or already exists.");
          },
          (tx, error) => {
            console.error("Error creating table: ", error);
          }
        );
      });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  },

  insertUser: (name, address) => {
    const db = DatabaseConnection.getConnection();
    try {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO users (name, address) VALUES (?, ?);',
          [name, address],
          (tx, result) => {
            console.log("User inserted successfully:", result);
          },
          (tx, error) => {
            console.error("Error inserting user:", error);
          }
        );
      });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  },

  getUsers: () => {
    const db = DatabaseConnection.getConnection();
    return new Promise((resolve, reject) => {
      try {
        db.databasePath(tx => {
          tx.executeSql(
            'SELECT * FROM users;',
            [],
            (tx, result) => {
              console.log("Users fetched:", result.rows._array);
              resolve(result.rows._array);
            },
            (tx, error) => {
              console.error("Error fetching users:", error);
              reject(error);
            }
          );
        });
      } catch (error) {
        console.error("Unexpected error:", error);
        reject(error);
      }
    });
  },

  deleteUser: (userId) => {
    const db = DatabaseConnection.getConnection();
    try {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM users WHERE id = ?;',
          [userId],
          (tx, result) => {
            console.log("User deleted successfully:", result);
          },
          (tx, error) => {
            console.error("Error deleting user:", error);
          }
        );
      });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  }
};
