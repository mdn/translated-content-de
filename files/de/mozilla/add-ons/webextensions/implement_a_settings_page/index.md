---
title: Implementieren Sie eine Einstellungsseite
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
l10n:
  sourceCommit: 673a473ab4b40c5f6787b2d3438370269fff31c7
---

Eine Einstellungsseite ermöglicht es den Benutzern, die Einstellungen (manchmal auch "Präferenzen" oder "Optionen" genannt) der Erweiterung zu sehen und zu ändern.

Mit den WebExtension-APIs werden Einstellungen im Allgemeinen mithilfe der [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage)-API gespeichert. Die Implementierung einer Einstellungsseite erfolgt in drei Schritten:

- Schreiben Sie eine HTML-Datei, die Einstellungen anzeigt und es dem Benutzer ermöglicht, diese zu ändern.
- Schreiben Sie ein Skript, das aus der HTML-Datei eingebunden wird und die Einstellungsseite aus dem Speicher auffüllt und die gespeicherten Einstellungen aktualisiert, wenn der Benutzer sie ändert.
- Setzen Sie den Pfad zur HTML-Datei als Schlüssel [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) in `manifest.json`. Dadurch wird das HTML-Dokument im Add-on-Manager des Browsers angezeigt, zusammen mit dem Namen und der Beschreibung der Erweiterung.

> [!NOTE]
> Sie können diese Seite auch programmgesteuert mit der Funktion [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) öffnen.

## Eine einfache Erweiterung

Zuerst schreiben wir eine Erweiterung, die jeder besuchten Seite des Benutzers einen blauen Rahmen hinzufügt.

Erstellen Sie ein Verzeichnis namens `settings` und dann eine Datei namens `manifest.json` darin mit diesem Inhalt:

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ]
}
```

Diese Erweiterung weist den Browser an, ein Inhalts-Skript namens "borderify.js" in alle vom Benutzer besuchten Webseiten zu laden.

Erstellen Sie als Nächstes eine Datei namens `borderify.js` im Verzeichnis `settings` und geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "10px solid blue";
```

Dadurch wird der Seite einfach ein blauer Rahmen hinzugefügt.

Nun [installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und testen Sie die Erweiterung.

## Hinzufügen von Einstellungen

Nun erstellen wir eine Einstellungsseite, die dem Benutzer erlaubt, die Farbe des Rahmens festzulegen.

Aktualisieren Sie zuerst `manifest.json`, sodass es diesen Inhalt hat:

```json
{
  "manifest_version": 2,
  "name": "Settings example",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["borderify.js"]
    }
  ],

  "options_ui": {
    "page": "options.html"
  },

  "permissions": ["storage"],

  "browser_specific_settings": {
    "gecko": {
      "id": "@addon-example"
    }
  }
}
```

Wir haben drei neue Manifest-Schlüssel hinzugefügt:

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
  - : Dies legt ein HTML-Dokument als die Einstellungsseite (auch Optionsseite genannt) für diese Erweiterung fest.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
  - : Wir werden die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage)-API verwenden, um die Einstellungen zu speichern, und müssen die Erlaubnis einholen, diese API zu nutzen.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
  - : Sie müssen eine Erweiterungs-ID angeben, um Einstellungen aus synchronisiertem Speicher zu speichern und abzurufen.

Da wir versprochen haben, `options.html` bereitzustellen, erstellen wir dies als Nächstes. Erstellen Sie eine Datei mit diesem Namen im Verzeichnis `settings` und geben Sie ihr den folgenden Inhalt:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <form>
      <label>Border color <input type="text" id="color" name="color" /></label>
      <button type="submit">Save</button>
    </form>

    <script src="options.js"></script>
  </body>
</html>
```

Dies definiert ein {{htmlelement("form")}} mit einem beschrifteten Text-{{htmlelement("input")}} und einem Senden-{{htmlelement("button")}}. Es bindet auch ein Skript namens `options.js` ein.

Erstellen Sie `options.js`, wieder im Verzeichnis `settings`, und geben Sie ihm den folgenden Inhalt:

```js
function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    color: document.querySelector("#color").value,
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
```

Dies tut zwei Dinge:

- Wenn das Dokument geladen ist, ruft es den Wert von `"color"` aus dem Speicher mit [`storage.sync.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) ab. Falls der Wert nicht gesetzt ist, wird der Standardwert `"blue"` verwendet. Dies ruft die Werte aus dem `sync`-Speicherbereich ab.
- Wenn der Benutzer das Formular durch Klicken auf Speichern absendet, speichert es den Wert des Textfeldes mit [`storage.sync.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set). Dies speichert den Wert im `sync`-Speicherbereich.

> [!NOTE]
> Die Angabe einer separaten `.js`-Datei ist erforderlich. Sie können kein Inline-JavaScript verwenden.

Sie könnten die Einstellungswerte in lokalem Speicher speichern, wenn Sie das für Ihre Erweiterung für vorzuziehen halten.

> [!NOTE]
> Die Implementierung von `storage.sync` in Firefox basiert auf der Add-on-ID. Wenn Sie `storage.sync` verwenden, müssen Sie eine ID für Ihre Erweiterung mit dem Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in `manifest.json` festlegen, wie im obigen Beispielmanifest gezeigt. Siehe [Firefox-Bug 1323228](https://bugzil.la/1323228) für verwandte Informationen.

Aktualisieren Sie schließlich `borderify.js`, um die Rahmenfarbe aus dem Speicher zu lesen:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  let color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.border = `10px solid ${color}`;
}

const getting = browser.storage.sync.get("color");
getting.then(onGot, onError);
```

Zu diesem Zeitpunkt sollte die vollständige Erweiterung so aussehen:

```plain
settings/
    borderify.js
    manifest.json
    options.html
    options.js
```

Nun:

- [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on)
- laden Sie eine Webseite
- besuchen Sie `about:addons`, um die Einstellungen zu öffnen, und klicken Sie auf den Präferenzbutton neben dem Eintrag der Erweiterung, um die Rahmenfarbe zu ändern.
- laden Sie die Webseite neu, um den Unterschied zu sehen.

## Mehr erfahren

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)-Schlüssel der `manifest.json` Referenzdokumentation
- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API-Referenzdokumentation
- Öffnen Sie die Einstellungsseite direkt aus Ihrer Erweiterung mit der [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) API
- Einstellungsseite Beispiel:
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
