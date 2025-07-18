---
title: Implementieren einer Einstellungsseite
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Eine Einstellungsseite gibt den Benutzern die Möglichkeit, Einstellungen (manchmal auch "Präferenzen" oder "Optionen" genannt) für die Erweiterung einzusehen und zu ändern.

Mit WebExtension-APIs werden Einstellungen in der Regel unter Verwendung der [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API gespeichert. Die Implementierung einer Einstellungsseite ist ein dreistufiger Prozess:

- Schreiben Sie eine HTML-Datei, die die Einstellungen anzeigt und dem Benutzer ermöglicht, sie zu ändern.
- Schreiben Sie ein Skript, das von der HTML-Datei eingebunden wird, um die Einstellungsseite aus dem Speicher zu füllen und die gespeicherten Einstellungen zu aktualisieren, wenn der Benutzer sie ändert.
- Legen Sie den Pfad zur HTML-Datei als Schlüssel [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) in `manifest.json` fest. Dadurch wird das HTML-Dokument im Add-on-Manager des Browsers zusammen mit dem Namen und der Beschreibung der Erweiterung angezeigt.

> [!NOTE]
> Sie können diese Seite auch programmatisch mit der Funktion [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) öffnen.

## Eine einfache Erweiterung

Zuerst schreiben wir eine Erweiterung, die jeder Seite, die der Benutzer besucht, einen blauen Rahmen hinzufügt.

Erstellen Sie ein neues Verzeichnis namens `settings`, und erstellen Sie dann eine Datei namens `manifest.json` darin mit folgendem Inhalt:

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

Diese Erweiterung weist den Browser an, ein Inhaltsskript namens "borderify.js" in alle Webseiten zu laden, die der Benutzer besucht.

Erstellen Sie als nächstes eine Datei namens `borderify.js` im Verzeichnis `settings` und geben Sie ihr folgenden Inhalt:

```js
document.body.style.border = "10px solid blue";
```

Dies fügt der Seite einfach einen blauen Rahmen hinzu.

Installieren Sie nun die Erweiterung und testen Sie sie gemäß dieser [Anleitung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).

## Hinzufügen von Einstellungen

Jetzt erstellen wir eine Einstellungsseite, die es dem Benutzer ermöglicht, die Farbe des Rahmens festzulegen.

Aktualisieren Sie zuerst `manifest.json`, damit es folgenden Inhalt hat:

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

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
  - : Dies legt ein HTML-Dokument als Einstellungsseite (auch Optionsseite genannt) für diese Erweiterung fest.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
  - : Wir verwenden die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API zur Speicherung der Einstellungen und müssen die Berechtigung zur Nutzung dieser API einholen.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
  - : Sie müssen eine Erweiterungs-ID einschließen, um Einstellungen aus dem synchronisierten Speicher zu speichern und abzurufen.

Da wir versprochen haben, `options.html` bereitzustellen, erstellen Sie nun eine Datei mit diesem Namen im Verzeichnis `settings` und geben Sie ihr folgenden Inhalt:

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

Dies definiert ein {{htmlelement("form")}} mit einem beschrifteten Text-{{htmlelement("input")}} und einem Senden-{{htmlelement("button")}}. Es enthält auch ein Skript namens `options.js`.

Erstellen Sie `options.js`, ebenfalls im Verzeichnis `settings`, und geben Sie ihr folgenden Inhalt:

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

- Wenn das Dokument geladen ist, wird der Wert von `"color"` aus dem Speicher mit [`storage.sync.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) abgerufen. Wenn der Wert nicht gesetzt ist, wird der Standardwert `"blue"` verwendet. Dies ruft die Werte aus dem `sync`-Speicherbereich ab.
- Wenn der Benutzer das Formular durch Klicken auf Speichern übermittelt, wird der Wert des Textfeldes mit [`storage.sync.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set) gespeichert. Dies speichert den Wert im `sync`-Speicherbereich.

> [!NOTE]
> Es ist erforderlich, eine separate `.js`-Datei anzugeben. Inline-JavaScript kann nicht verwendet werden.

Sie könnten die Einstellungswerte stattdessen im lokalen Speicher speichern, wenn Sie der Meinung sind, dass der lokale Speicher für Ihre Erweiterung vorzuziehen ist.

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

An diesem Punkt sollte die vollständige Erweiterung so aussehen:

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
- besuchen Sie `about:addons`, um die Einstellungen zu öffnen und klicken Sie auf die Schaltfläche "Einstellungen" neben dem Eintrag der Erweiterung, um die Rahmenfarbe zu ändern.
- laden Sie die Webseite neu, um den Unterschied zu sehen.

## Mehr erfahren

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel der `manifest.json` Referenzdokumentation
- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API-Referenzdokumentation
- Öffnen Sie die Einstellungsseite direkt aus Ihrer Erweiterung mit der [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) API
- Einstellungsseitenbeispiel:
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
