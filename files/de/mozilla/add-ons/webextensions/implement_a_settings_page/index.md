---
title: Implementieren einer Einstellungsseite
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

Eine Einstellungsseite gibt den Benutzern die Möglichkeit, Einstellungen (manchmal auch als "Vorlieben" oder "Optionen" bezeichnet) für die Erweiterung anzuzeigen und zu ändern.

Mit den WebExtension-APIs werden Einstellungen im Allgemeinen mit der [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API gespeichert. Die Implementierung einer Einstellungsseite erfolgt in drei Schritten:

- Schreiben Sie eine HTML-Datei, die Einstellungen anzeigt und es dem Benutzer ermöglicht, sie zu ändern.
- Schreiben Sie ein Skript, das von der HTML-Datei eingebunden wird, um die Einstellungsseite aus dem Speicher zu füllen und gespeicherte Einstellungen zu aktualisieren, wenn der Benutzer sie ändert.
- Legen Sie den Pfad zur HTML-Datei als [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel in `manifest.json` fest. Dadurch wird das HTML-Dokument im Add-on-Manager des Browsers neben dem Namen und der Beschreibung der Erweiterung angezeigt.

> [!NOTE]
> Sie können diese Seite auch programmatisch mit der Funktion [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) öffnen.

## Eine einfache Erweiterung

Zuerst schreiben wir eine Erweiterung, die auf jeder Seite, die der Benutzer besucht, einen blauen Rand hinzufügt.

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

Erstellen Sie als nächstes eine Datei namens `borderify.js` im Verzeichnis `settings` und geben Sie ihm diesen Inhalt:

```js
document.body.style.border = "10px solid blue";
```

Dies fügt der Seite einfach einen blauen Rand hinzu.

Installieren Sie nun die Erweiterung und testen Sie sie [installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).

## Hinzufügen von Einstellungen

Jetzt erstellen wir eine Einstellungsseite, die es dem Benutzer ermöglicht, die Farbe des Randes festzulegen.

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
      "id": "addon@example.com"
    }
  }
}
```

Wir haben drei neue Manifest-Schlüssel hinzugefügt:

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
  - : Dies legt ein HTML-Dokument als Einstellungsseite (auch Optionsseite genannt) für diese Erweiterung fest.
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
  - : Wir werden die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API verwenden, um die Einstellungen zu speichern, und wir müssen die Erlaubnis anfordern, diese API zu verwenden.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
  - : Sie müssen eine Erweiterungs-ID angeben, um Einstellungen aus synchronisiertem Speicher speichern und abrufen zu können.

Als nächstes, weil wir versprochen haben, `options.html` bereitzustellen, erstellen wir es. Erstellen Sie eine Datei mit diesem Namen im Verzeichnis `settings` und geben Sie ihr den folgenden Inhalt:

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

Dies definiert ein {{htmlelement("form")}} mit einem beschrifteten Textfeld {{htmlelement("input")}} und einem Absende-{{htmlelement("button")}}. Es enthält auch ein Skript namens `options.js`.

Erstellen Sie `options.js`, ebenfalls im Verzeichnis `settings`, und geben Sie ihm den folgenden Inhalt:

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

- Wenn das Dokument geladen wurde, wird der Wert von `"color"` aus dem Speicher abgerufen mit [`storage.sync.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get). Wenn der Wert nicht gesetzt ist, wird der Standardwert `"blue"` verwendet. Dies ruft die Werte aus dem `sync` Speicherbereich ab.
- Wenn der Benutzer das Formular durch Klicken auf Speichern absendet, wird der Wert des Textfeldes mit [`storage.sync.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set) gespeichert. Dies speichert den Wert im `sync` Speicherbereich.

> [!NOTE]
> Es ist erforderlich, eine separate `.js` Datei anzugeben. Sie können kein Inline-JavaScript verwenden.

Sie könnten die Einstellungswerte stattdessen im lokalen Speicher speichern, wenn Sie der Meinung sind, dass der lokale Speicher für Ihre Erweiterung vorzuziehen ist.

> [!NOTE]
> Die Implementierung von `storage.sync` in Firefox basiert auf der Add-on-ID. Wenn Sie `storage.sync` verwenden, müssen Sie eine ID für Ihre Erweiterung über den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel in `manifest.json` festlegen, wie im obigen Beispielmanifest gezeigt. Siehe [Firefox Bug 1323228](https://bugzil.la/1323228) für verwandte Informationen.

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
- besuchen Sie `about:addons`, um die Einstellungen zu öffnen, und klicken Sie neben dem Eintrag der Erweiterung auf die Schaltfläche "Einstellungen" und ändern Sie die Randfarbe.
- laden Sie die Webseite erneut, um den Unterschied zu sehen.

## Erfahren Sie mehr

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel der `manifest.json` Referenzdokumentation
- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API Referenzdokumentation
- Öffnen Sie die Einstellungsseite direkt über Ihre Erweiterung mithilfe der [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) API
- Beispiel für eine Einstellungsseite:

  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
