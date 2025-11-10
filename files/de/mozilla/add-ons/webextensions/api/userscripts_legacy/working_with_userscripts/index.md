---
title: Arbeiten mit userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Um Funktionen mit Benutzerskripten in Manifest V3 zu verwenden, siehe die neue {{WebExtAPIRef("userScripts")}} API.

Durch die Implementierung von userScripts können Erweiterungsentwickler die Darstellung und/oder Funktionsweise von Websites an die Bedürfnisse der Benutzer anpassen.

Implementieren Sie userScripts in Ihrer Erweiterung mit den folgenden Schritten:

1. Definieren Sie das Skript im Manifest der Erweiterung mit dem Schlüssel `"user_scripts"`.
2. Registrieren Sie das userScript.
3. Implementieren Sie die Funktionen des userScripts.

Lassen Sie uns die Prozesse anhand einer kleinen Beispiel-Web-Erweiterung durchgehen, die den Prozess veranschaulicht. Das Beispiel ist im [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub verfügbar.

## userScripts Manifest

Ein Benutzerskript wird durch den Inhalt des [user_scripts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) Schlüssels des Erweiterungs-Manifests identifiziert. Die Mindestinformation für den `user_scripts` Schlüssel wäre:

```json
  "user_scripts": {
    "api_script": "customUserScriptAPIs.js"
  }
```

Die "api_script"-Eigenschaft gibt den Pfad zur JavaScript-Datei an, die den Code für das `userScript` enthält.

## Laden Sie die Beispielerweiterung

Sobald Sie das Beispiel heruntergeladen haben:

Navigieren Sie zu about:debugging, klicken Sie auf **Load Temporary Add-on…** und doppelklicken Sie auf das Manifest der Erweiterung.

Der mit dem Beispiel enthaltene Standardcode erlaubt es Ihnen, ein `userScript` zu laden, das den Inhalt von Seiten "verschlingt", die dem Eintrag der Hosts entsprechen. Nehmen Sie alle gewünschten Änderungen vor, bevor Sie auf die **Register script** Schaltfläche unten im Panel klicken.

Im folgenden Bild wird die Erweiterung den Inhalt von Seiten "verschlingen", deren Domainname auf .org endet. Dies ist das Standardverhalten für diese Erweiterung.

![Benutzerskript-Beispiel](userscriptexample.png)

Es passiert nichts, bis Sie auf die **Register script** Schaltfläche klicken. Die Schaltfläche implementiert das Benutzerskript gemäß den Einstellungen in diesem Dialog. Das bedeutet, dass Sie mit dem Verhalten des Skripts experimentieren können, ohne selbst eine Erweiterung implementieren zu müssen.

## Registrieren Sie das userScript

Bevor ein userScript ausgeführt werden kann, muss es mit der Methode `userScripts.register()` registriert werden. Hier ist der Code, um die Beispielerweiterung zu registrieren:

```js
async function registerScript() {
  const params = {
    hosts: stringToArray(hostsInput.value),
    code: codeInput.value,
    excludeMatches: stringToArray(excludeMatchesInput.value),
    includeGlobs: stringToArray(includeGlobsInput.value),
    excludeGlobs: stringToArray(excludeGlobsInput.value),
    runAt: runAtInput.value,
    matchAboutBlank: stringToBool(matchAboutBlankInput.value),
    allFrames: stringToBool(allFramesInput.value),
    scriptMetadata: { name: scriptNameInput.value || null },
  };

  // Store the last submitted values to the extension storage
  // (so that they can be restored when the popup is opened
  // the next time).
  await browser.storage.local.set({
    lastSetValues: params,
  });

  try {
    // Clear the last userScripts.register result.
    lastResultEl.textContent = "";

    await browser.runtime.sendMessage(params);
    lastResultEl.textContent = "UserScript successfully registered";
    // Clear the last userScripts.register error.
    lastErrorEl.textContent = "";

    // Clear the last error stored.
    await browser.storage.local.remove("lastError");
  } catch (e) {
    // There was an error on registering the userScript,
    // let's show the error message in the popup and store
    // the last error into the extension storage.

    const lastError = `${e}`;
    // Show the last userScripts.register error.
    lastErrorEl.textContent = lastError;

    // Store the last error.
    await browser.storage.local.set({ lastError });
  }
}
```

Dieser Code initialisiert zuerst das params-Objekt, um Werte an die [userScripts.register](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/register) Methode zu übergeben.

## Implementieren Sie die Funktionen des userScripts

Sobald das Skript registriert ist, navigieren Sie zu einer Seite, deren Domainname auf .org endet, und Sie werden etwas wie das Folgende sehen:

![Statusmeldung, die angibt, dass Websites mit der Endung .org verschlungen wurden: "Diese Seite wurde verschlungen. {"OldStoredValue:" "website address", "NewStoredValue:" "website address"}"](user_script_in_action.png)

## Siehe auch

- {{WebExtAPIRef("userScripts_legacy","userScripts")}}
- {{WebExtAPIRef("userScripts_legacy.register()", "userScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}
