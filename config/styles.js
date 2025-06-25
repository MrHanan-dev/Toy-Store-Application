import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.dark,
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: colors.secondary,
    textAlign: "center",
    marginVertical: 5,
  },
  textCenter: {
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    color: colors.dark,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardDetailsContainer: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.dark,
  },
  cardSubtitle: {
    fontSize: 16,
    color: colors.secondary,
    marginTop: 5,
  },
  smallText: {
    fontSize: 14,
    color: colors.medium,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light,
    marginVertical: 10,
  },
});
