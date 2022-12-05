import { AppRegistry, LogBox } from "react-native";

import App from 'src/App'
import { name as appName } from "app.json";

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

AppRegistry.registerComponent(appName, () => App);
