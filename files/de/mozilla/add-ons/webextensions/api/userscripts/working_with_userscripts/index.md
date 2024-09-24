---
title: Arbeiten mit userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts
l10n:
  sourceCommit: 0b956178ef19e8fc3981ed97dc6659d5a63f59a6
---

{{AddonSidebar}}

Durch die Implementierung von userScripts können Erweiterungsentwickler anpassen, wie Websites aussehen und/oder funktionieren, um den Benutzeranforderungen besser gerecht zu werden.

Implementieren Sie userScripts in Ihrer Erweiterung mit den folgenden Schritten:

1. Definieren Sie das Skript im Manifest der Erweiterung mit dem Schlüssel `"user_scripts"`.
2. Registrieren Sie das userScript
3. Implementieren Sie die userScript-Funktionen

Lassen Sie uns die Prozesse anhand einer kleinen Beispiel-Web-Erweiterung durchgehen, die diesen Prozess veranschaulicht. Das Beispiel ist im [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub verfügbar.

## userScripts Manifest

Ein User-Skript wird durch den Inhalt des [user_scripts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) Schlüssels des Manifests der Erweiterung identifiziert. Die Mindestinformationen für den `user_scripts` Schlüssel wären:

```json
  "user_scripts": {
    "api_script": "customUserScriptAPIs.js"
  }
```

Die Eigenschaft "api_script" gibt den Pfad zur JavaScript-Datei an, die den Code für das `userScript` enthält.

## Laden Sie die Beispiel-Erweiterung

Sobald Sie das Beispiel heruntergeladen haben:

Navigieren Sie zu about:debugging, klicken Sie auf **Load Temporary Add-on…** und doppelklicken Sie auf das Manifest der Erweiterung.

Der im Beispiel enthaltene Standardcode ermöglicht es Ihnen, ein `userScript` zu laden, das den Inhalt von Seiten "verschlingt", die dem Eintrag Hosts entsprechen. Nehmen Sie alle gewünschten Änderungen vor, bevor Sie unten im Panel auf die Schaltfläche **Register script** klicken.

Im folgenden Bild wird die Erweiterung den Inhalt von Seiten "verschlingen", deren Domainname auf .org endet. Dies ist das Standardverhalten für diese Erweiterung.

![User-Skript-Beispiel](userscriptexample.png)

Nichts wird passieren, bis Sie auf die Schaltfläche **Register script** klicken. Die Schaltfläche implementiert das User-Skript entsprechend den Einstellungen in diesem Dialog. Das bedeutet, dass Sie mit dem Verhalten des Skripts experimentieren können, ohne selbst eine Erweiterung implementieren zu müssen.

## Registrieren Sie das userScript

Bevor ein userScript ausgeführt werden kann, muss es mit der Methode `userScripts.register()` registriert werden. Hier ist der Code zum Registrieren der Beispiel-Erweiterung:

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

Dieser Code initialisiert zuerst das Objekt `params`, um Werte an die [userScripts.register](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/register) Methode zu übergeben.

## Implementieren Sie die userScript-Funktionen

Sobald das Skript registriert ist, navigieren Sie zu einer Seite, deren Domainname auf .org endet, und Sie werden so etwas sehen:

![Statusmeldung, die anzeigt, dass Websites, die auf .org enden, "verschlungen" wurden: "This page has been eaten. {"OldStoredValue:" "website address", "NewStoredValue:" "website address"}"](user_script_in_action.png)

## Siehe auch

- {{WebExtAPIRef("userScripts")}}
- {{WebExtAPIRef("userScripts.register()", "userScripts.register()")}}
- {{WebExtAPIRef("userScripts.onBeforeScript")}}
