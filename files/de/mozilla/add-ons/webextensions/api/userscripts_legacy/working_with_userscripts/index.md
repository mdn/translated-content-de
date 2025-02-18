---
title: Arbeiten mit userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die Legacy-API `userScripts`. Sie ist in Firefox für Manifest V2 verfügbar. Für Funktionalität mit Benutzer-Skripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Durch die Implementierung von `userScripts` können Erweiterungsentwickler steuern, wie Websites aussehen und/oder funktionieren, um besser den Bedürfnissen der Benutzer zu entsprechen.

Implementieren Sie `userScripts` in Ihrer Erweiterung mithilfe der folgenden Schritte:

1. Definieren Sie das Skript im Manifest der Erweiterung mithilfe des Schlüssels `"user_scripts"`.
2. Registrieren Sie das `userScript`.
3. Implementieren Sie die Funktionen des `userScript`.

Gehen wir die Prozesse anhand einer kleinen Beispiel-Web-Erweiterung durch, die den Vorgang veranschaulicht. Das Beispiel ist im [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub verfügbar.

## userScripts Manifest

Ein Benutzer-Skript wird durch den Inhalt des Schlüssels [user_scripts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) im Manifest der Erweiterung identifiziert. Die Mindestinformationen für den Schlüssel `user_scripts` wären:

```json
  "user_scripts": {
    "api_script": "customUserScriptAPIs.js"
  }
```

Die Eigenschaft `"api_script"` gibt den Pfad zur JavaScript-Datei an, die den Code für das `userScript` enthält.

## Laden der Beispiel-Erweiterung

Nachdem Sie das Beispiel heruntergeladen haben:

Navigieren Sie zu `about:debugging`, klicken Sie auf **Temporäres Add-on laden…** und doppelklicken Sie auf das Manifest der Erweiterung.

Der im Beispiel enthaltene Standardcode ermöglicht Ihnen das Laden eines `userScript`, das den Inhalt von Seiten "verschlingt", die mit dem Hosts-Eintrag übereinstimmen. Nehmen Sie die gewünschten Änderungen vor, bevor Sie unten im Panel auf die Schaltfläche **Register script** klicken.

Im folgenden Bild wird die Erweiterung den Inhalt von Seiten verschlingen, deren Domainname auf .org endet. Dies ist das Standardverhalten dieser Erweiterung.

![Beispiel für ein Benutzer-Skript](userscriptexample.png)

Es passiert nichts, bis Sie die Schaltfläche **Register script** drücken. Die Schaltfläche implementiert das Benutzer-Skript gemäß den Einstellungen in diesem Dialog. Dadurch können Sie mit dem Verhalten des Skripts experimentieren, ohne selbst eine Erweiterung implementieren zu müssen.

## Registrieren des userScript

Bevor ein `userScript` ausgeführt werden kann, muss es mithilfe der Methode `userScripts.register()` registriert werden. Hier ist der Code, um die Beispiel-Erweiterung zu registrieren:

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

Dieser Code initialisiert zuerst das `params`-Objekt, um Werte an die Methode [userScripts.register](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/register) zu übergeben.

## Implementieren der userScript-Funktionen

Sobald das Skript registriert wurde, navigieren Sie auf eine Seite, deren Domainname auf .org endet, und Sie sehen etwas wie dies:

![Statusnachricht, die anzeigt, dass Webseiten mit der Endung .org "verschlungen" wurden: "This page has been eaten. {"OldStoredValue:" "website address", "NewStoredValue:" "website address"}"](user_script_in_action.png)

## Siehe auch

- {{WebExtAPIRef("userScripts_legacy","userScripts")}}
- {{WebExtAPIRef("userScripts_legacy.register()", "userScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.onBeforeScript")}}
