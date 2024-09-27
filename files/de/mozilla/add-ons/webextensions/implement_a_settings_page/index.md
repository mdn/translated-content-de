---
title: Implementieren Sie eine Einstellungsseite
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Eine Einstellungsseite bietet den Nutzern die Möglichkeit, Einstellungen (manchmal auch "Präferenzen" oder "Optionen" genannt) für die Erweiterung anzuzeigen und zu ändern.

Mit den WebExtension-APIs werden Einstellungen im Allgemeinen mit der [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API gespeichert.
Die Implementierung einer Einstellungsseite erfolgt in drei Schritten:

- Schreiben Sie eine HTML-Datei, die die Einstellungen anzeigt und dem Benutzer ermöglicht, diese zu ändern.
- Schreiben Sie ein Skript, das aus der HTML-Datei eingebunden wird, um die Einstellungsseite aus dem Speicher zu füllen und die gespeicherten Einstellungen zu aktualisieren, wenn der Benutzer sie ändert.
- Setzen Sie den Pfad zur HTML-Datei als [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel in `manifest.json`. Dadurch wird das HTML-Dokument im Add-on-Manager des Browsers zusammen mit dem Namen und der Beschreibung der Erweiterung angezeigt.

> [!NOTE]
> Sie können diese Seite auch programmatisch mit der [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) Funktion öffnen.

## Eine einfache Erweiterung

Zunächst schreiben wir eine Erweiterung, die allen vom Benutzer besuchten Seiten einen blauen Rand hinzufügt.

Erstellen Sie ein neues Verzeichnis mit dem Namen `settings`, und erstellen Sie darin eine Datei namens `manifest.json` mit folgendem Inhalt:

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

Dies fügt der Seite einfach einen blauen Rand hinzu.

Nun [installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und testen Sie die Erweiterung.

## Hinzufügen von Einstellungen

Lassen Sie uns nun eine Einstellungsseite erstellen, um dem Benutzer die Möglichkeit zu geben, die Farbe des Randes festzulegen.

Aktualisieren Sie zuerst `manifest.json`, damit es diesen Inhalt hat:

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
      "id": "addon@example.com"
    }
  }
}
```

Wir haben drei neue Manifest-Schlüssel hinzugefügt:

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui):
  - : Dies legt ein HTML-Dokument als Einstellungsseite (auch Optionsseite genannt) für diese Erweiterung fest.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions):
  - : Wir werden die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API verwenden, um die Einstellungen zu speichern, und müssen um Erlaubnis bitten, diese API zu nutzen.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings):
  - : Sie müssen eine Erweiterungs-ID angeben, um Einstellungen aus dem synchronisierten Speicher zu speichern und abzurufen.

Als nächstes erstellen wir `options.html`, da wir versprochen haben, diese bereitzustellen. Erstellen Sie eine Datei mit diesem Namen im Verzeichnis `settings` und geben Sie ihr folgenden Inhalt:

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

Dies definiert ein {{htmlelement("form")}} mit einem beschrifteten Text-{{htmlelement("input")}} und einem {{htmlelement("button")}} zum Absenden. Es enthält auch ein Skript namens `options.js`.

Erstellen Sie `options.js` ebenfalls im Verzeichnis `settings` und geben Sie ihm folgenden Inhalt:

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

Dies erfüllt zwei Aufgaben:

- Beim Laden des Dokuments wird der Wert von `"color"` aus dem Speicher mit [`storage.sync.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) abgerufen. Falls der Wert nicht gesetzt ist, wird der Standardwert `"blue"` verwendet. Dies ruft die Werte aus dem `sync` Speicherbereich ab.
- Wenn der Benutzer das Formular durch Klicken auf Speichern absendet, wird der Wert des Textfeldes mit [`storage.sync.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set) gespeichert. Dies speichert den Wert im `sync` Speicherbereich.

> [!NOTE]
> Es ist notwendig, eine separate `.js` Datei anzugeben. Sie können kein Inline-JavaScript verwenden.

Sie könnten die Einstellungswerte stattdessen auch im lokalen Speicher ablegen, falls dies für Ihre Erweiterung vorzuziehen ist.

> [!NOTE]
> Die Implementierung von `storage.sync` in Firefox basiert auf der Add-on-ID. Wenn Sie `storage.sync` verwenden, müssen Sie in `manifest.json` eine ID für Ihre Erweiterung mit dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel festlegen, wie im obigen Beispielmanifest gezeigt. Siehe [Firefox Bug 1323228](https://bugzil.la/1323228) für weitere Informationen.

Zuletzt aktualisieren Sie `borderify.js`, um die Rahmenfarbe aus dem Speicher auszulesen:

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

An diesem Punkt sollte die vollständige Erweiterung so aussehen:

```plain
settings/
    borderify.js
    manifest.json
    options.html
    options.js
```

Jetzt:

- [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on)
- laden Sie eine Webseite
- besuchen Sie "`about:addons`", um die Einstellungen zu öffnen, und klicken Sie auf die Schaltfläche Präferenzen neben dem Eintrag der Erweiterung, um die Rahmenfarbe zu ändern.
- laden Sie die Webseite neu, um den Unterschied zu sehen.

## Erfahren Sie mehr

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel der `manifest.json` Referenzdokumentation
- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API Referenzdokumentation
- Öffnen Sie die Einstellungsseite direkt aus Ihrer Erweiterung mit der [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) API
- Einstellungsseiten-Beispiel:

  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
