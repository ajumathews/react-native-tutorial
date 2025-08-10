import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();

client.setProject("689907cb0016c5ed5111").setPlatform("com.test.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
