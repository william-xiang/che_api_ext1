import * as vscode from 'vscode';
import * as che from "@eclipse-che/plugin";

export async function activate(context: vscode.ExtensionContext) {
	const user = await che.user.getCurrentUser();
	vscode.window.showInformationMessage(`User is: ${user.name}`);
}