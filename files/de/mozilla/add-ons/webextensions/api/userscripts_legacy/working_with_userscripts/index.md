---
title: Arbeiten mit userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Für die Funktionalität mit Benutzerskripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Durch die Implementierung von userScripts können Erweiterungsentwickler ändern, wie Webseiten aussehen und/oder funktionieren, um besser den Bedürfnissen der Benutzer gerecht zu werden.

Implementieren Sie userScripts in Ihrer Erweiterung mit den folgenden Schritten:

1. Definieren Sie das Skript im Manifest der Erweiterung mithilfe des Schlüssels `"user_scripts"`.
2. Registrieren Sie das userScript
3. Implementieren Sie die Funktionen des userScripts

Gehen wir die Schritte anhand einer kleinen Beispiel-Webextension durch, die den Prozess veranschaulicht. Das Beispiel ist im [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub verfügbar.

## userScripts Manifest

Ein Benutzerskript wird durch den Inhalt des [user_scripts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) Schlüssels des Manifests der Erweiterung identifiziert. Die Mindestinformationen für den `user_scripts` Schlüssel wären:

```json
  "user_scripts": {
    "api_script": "customUserScriptAPIs.js"
  }
```

Die Eigenschaft "api_script" gibt den Pfad zur JavaScript-Datei an, die den Code für das `userScript` enthält.

## Laden der Beispielerweiterung

Nachdem Sie das Beispiel heruntergeladen haben:

Navigieren Sie zu about:debugging, klicken Sie auf **Temporäres Add-on laden…** und doppelklicken Sie auf das Manifest der Erweiterung.

Der standardmäßig mit dem Beispiel enthaltene Code ermöglicht es Ihnen, ein `userScript` zu laden, das den Inhalt von Seiten frisst, die dem Hosteintrag entsprechen. Nehmen Sie alle gewünschten Änderungen vor, bevor Sie unten im Panel auf die Schaltfläche **Skript registrieren** klicken.

Im folgenden Bild wird die Erweiterung den Inhalt von Seiten "fressen", deren Domainname mit .org endet. Dies ist das Standardverhalten für diese Erweiterung.

![Beispiel für ein Benutzerskript](userscriptexample.png)

Nichts wird passieren, bis Sie auf die Schaltfläche **Skript registrieren** klicken. Die Schaltfläche implementiert das Benutzerskript gemäß den Einstellungen in diesem Dialog. Das bedeutet, dass Sie mit dem Verhalten des Skripts experimentieren können, ohne selbst eine Erweiterung implementieren zu müssen.

## Registrieren des userScripts

Bevor ein userScript ausgeführt werden kann, muss es mithilfe der Methode `userScripts.register()` registriert werden. Hier ist der Code zum Registrieren der Beispielerweiterung:

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

Dieser Code initialisiert zuerst das Parameterobjekt, um Werte an die [userScripts.register](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/register) Methode zu übergeben.

## Implementieren der Funktionen des userScript

Sobald das Skript registriert ist, navigieren Sie zu einer Seite, deren Domainname mit .org endet, und Sie werden etwas Ähnliches sehen:

![Statusmeldung, die angibt, dass Websites, die mit .org enden, "gefressen" wurden: "This page has been eaten. {"OldStoredValue:" "website address", "NewStoredValue:" "website address"}"](user_script_in_action.png)

## Siehe auch

- {{WebExtAPIRef("userScripts_legacy","userScripts")}}
- {{WebExtAPIRef("userScripts_legacy.register()", "userScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}
