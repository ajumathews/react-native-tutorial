import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client();

client.setProject("689907cb0016c5ed5111").setPlatform("com.test.shelfie").setEndpoint("https://nyc.cloud.appwrite.io/v1");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
