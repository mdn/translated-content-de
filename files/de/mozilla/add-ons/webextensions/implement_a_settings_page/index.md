---
title: Implementieren einer Einstellungsseite
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Eine Einstellungsseite gibt den Benutzern eine Möglichkeit, Einstellungen (manchmal auch als "Präferenzen" oder "Optionen" bezeichnet) für die Erweiterung zu sehen und zu ändern.

Mit den WebExtension-APIs werden Einstellungen in der Regel über die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API gespeichert. Die Implementierung einer Einstellungsseite erfolgt in drei Schritten:

- Schreiben Sie eine HTML-Datei, die Einstellungen anzeigt und dem Benutzer ermöglicht, diese zu ändern.
- Schreiben Sie ein Skript, das von der HTML-Datei eingebunden wird, um die Einstellungsseite aus dem Speicher zu füllen und gespeicherte Einstellungen zu aktualisieren, wenn der Benutzer sie ändert.
- Setzen Sie den Pfad zur HTML-Datei als den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel in `manifest.json`. Dadurch wird das HTML-Dokument im Add-on-Manager des Browsers neben dem Namen und der Beschreibung der Erweiterung angezeigt.

> [!NOTE]
> Sie können diese Seite auch programmgesteuert mit der [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) Funktion öffnen.

## Eine einfache Erweiterung

Zuerst schreiben wir eine Erweiterung, die jeder Seite, die der Benutzer besucht, einen blauen Rand hinzufügt.

Erstellen Sie ein neues Verzeichnis namens `settings` und dann darin eine Datei namens `manifest.json` mit folgendem Inhalt:

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

Diese Erweiterung weist den Browser an, ein Inhalts-Skript namens "borderify.js" in alle Webseiten zu laden, die der Benutzer besucht.

Erstellen Sie als nächstes eine Datei namens `borderify.js` im Verzeichnis `settings` und geben Sie ihr folgenden Inhalt:

```js
document.body.style.border = "10px solid blue";
```

Dies fügt der Seite lediglich einen blauen Rand hinzu.

Nun [installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und testen Sie die Erweiterung.

## Einstellungen hinzufügen

Erstellen wir nun eine Einstellungsseite, die es dem Benutzer erlaubt, die Farbe des Randes festzulegen.

Aktualisieren Sie zunächst `manifest.json`, sodass es diesen Inhalt hat:

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
  - : Dies legt ein HTML-Dokument als Einstellungsseite (auch als Optionsseite bezeichnet) für diese Erweiterung fest.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
  - : Wir nutzen die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API, um die Einstellungen zu speichern, und müssen um Erlaubnis bitten, diese API zu verwenden.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
  - : Sie müssen eine Erweiterungs-ID angeben, um Einstellungen aus dem synchronisierten Speicher speichern und abrufen zu können.

Da wir versprochen haben, `options.html` bereitzustellen, erstellen wir es als Nächstes. Erstellen Sie eine Datei mit diesem Namen im Verzeichnis `settings` und geben Sie ihr folgenden Inhalt:

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

Erstellen Sie `options.js` ebenfalls im Verzeichnis `settings` und geben Sie ihr folgenden Inhalt:

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

- Wenn das Dokument geladen ist, ruft es den Wert von `"color"` aus dem Speicher mit [`storage.sync.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) ab. Wenn der Wert nicht gesetzt ist, wird der Standardwert `"blue"` verwendet. Dies ruft die Werte aus dem `sync` Speicherbereich ab.
- Wenn der Benutzer das Formular durch Klicken auf "Speichern" absendet, speichert es den Wert des Textfeldes mit [`storage.sync.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set). Dies speichert den Wert im `sync` Speicherbereich.

> [!NOTE]
> Es ist erforderlich, eine separate `.js` Datei anzugeben. Sie können kein JavaScript inline verwenden.

Sie könnten die Einstellungswerte stattdessen im lokalen Speicher speichern, wenn Sie der Meinung sind, dass der lokale Speicher für Ihre Erweiterung vorzuziehen ist.

> [!NOTE]
> Die Implementierung von `storage.sync` in Firefox stützt sich auf die Add-on-ID. Wenn Sie `storage.sync` verwenden, müssen Sie eine ID für Ihre Erweiterung mit dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel in `manifest.json` festlegen, wie im obigen Beispielmanifest gezeigt. Siehe [Firefox Bug 1323228](https://bugzil.la/1323228) für verwandte Informationen.

Aktualisieren Sie schließlich `borderify.js`, um die Randfarbe aus dem Speicher zu lesen:

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

An diesem Punkt sollte die vollständige Erweiterung wie folgt aussehen:

```plain
settings/
    borderify.js
    manifest.json
    options.html
    options.js
```

Jetzt:

- [laden Sie die Erweiterung erneut](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on)
- laden Sie eine Webseite
- besuchen Sie "`about:addons`", um die Einstellungen zu öffnen, und klicken Sie auf die Schaltfläche "Einstellungen" neben dem Eintrag der Erweiterung, um die Randfarbe zu ändern.
- laden Sie die Webseite erneut, um den Unterschied zu sehen.

## Mehr erfahren

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel der `manifest.json` Referenzdokumentation
- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API Referenzdokumentation
- Öffnen Sie die Einstellungsseite direkt von Ihrer Erweiterung mit der [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) API
- Einstellungsseitenbeispiel:

  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
