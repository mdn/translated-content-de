---
title: Implementieren einer Einstellungsseite
slug: Mozilla/Add-ons/WebExtensions/Implement_a_settings_page
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Eine Einstellungsseite gibt den Benutzern die Möglichkeit, Einstellungen (manchmal auch "Präferenzen" oder "Optionen" genannt) für die Erweiterung anzuzeigen und zu ändern.

Mit WebExtension-APIs werden die Einstellungen in der Regel mithilfe der [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API gespeichert.
Die Implementierung einer Einstellungsseite ist ein dreistufiger Prozess:

- Schreiben Sie eine HTML-Datei, die Einstellungen anzeigt und es dem Benutzer ermöglicht, sie zu ändern.
- Schreiben Sie ein Skript, das von der HTML-Datei aus eingebunden wird, um die Einstellungsseite aus dem Speicher zu befüllen und gespeicherte Einstellungen zu aktualisieren, wenn der Benutzer sie ändert.
- Setzen Sie den Pfad zur HTML-Datei als den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel in `manifest.json`. Dadurch wird das HTML-Dokument im Add-Ons-Manager des Browsers angezeigt, zusammen mit dem Namen und der Beschreibung der Erweiterung.

> [!NOTE]
> Sie können diese Seite auch programmatisch mit der Funktion [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) öffnen.

## Eine einfache Erweiterung

Zuerst schreiben wir eine Erweiterung, die jedem besuchten Benutzer eine blaue Umrandung hinzufügt.

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

Erstellen Sie als Nächstes eine Datei namens `borderify.js` im `settings`-Verzeichnis und geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "10px solid blue";
```

Dies fügt der Seite lediglich eine blaue Umrandung hinzu.

Nun [installieren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und testen Sie die Erweiterung.

## Hinzufügen von Einstellungen

Nun erstellen wir eine Einstellungsseite, um dem Benutzer zu ermöglichen, die Farbe der Umrandung festzulegen.

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
  - : Wir verwenden die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API, um die Einstellungen zu speichern, und müssen die Erlaubnis einholen, diese API zu verwenden.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
  - : Sie müssen eine Erweiterungs-ID einfügen, um Einstellungen aus synchronisiertem Speicher zu speichern und abzurufen.

Da wir versprochen haben, `options.html` bereitzustellen, erstellen wir es als Nächstes. Erstellen Sie eine Datei mit diesem Namen im `settings`-Verzeichnis und geben Sie ihr folgenden Inhalt:

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

Erstellen Sie `options.js`, ebenfalls im `settings`-Verzeichnis, und geben Sie ihm den folgenden Inhalt:

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

Dies macht zwei Dinge:

- Wenn das Dokument geladen wird, ruft es den Wert von `"color"` aus dem Speicher ab, indem es [`storage.sync.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get) verwendet. Wenn der Wert nicht gesetzt ist, wird der Standardwert `"blue"` verwendet. Dies ruft die Werte aus dem `sync`-Speicherbereich ab.
- Wenn der Benutzer das Formular durch Klicken auf "Speichern" sendet, speichert es den Wert des Textfeldes mit [`storage.sync.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set). Dies speichert den Wert im `sync`-Speicherbereich.

> [!NOTE]
> Die Angabe einer separaten `.js`-Datei ist erforderlich. Sie können kein Inline-JavaScript verwenden.

Sie könnten die Einstellungswerte auch im lokalen Speicher speichern, wenn Sie der Meinung sind, dass lokaler Speicher für Ihre Erweiterung vorzuziehen ist.

> [!NOTE]
> Die Implementierung von `storage.sync` in Firefox hängt von der Add-on-ID ab. Wenn Sie `storage.sync` verwenden, müssen Sie eine ID für Ihre Erweiterung mithilfe des [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssels in `manifest.json` festlegen, wie im obigen Manifest-Beispiel gezeigt. Siehe [Firefox-Bug 1323228](https://bugzil.la/1323228) für weitere Informationen.

Schließlich aktualisieren Sie `borderify.js`, um die Farbe der Umrandung aus dem Speicher zu lesen:

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

- [Aktualisieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on)
- Laden Sie eine Webseite
- Besuchen Sie `about:addons`, um die Einstellungen zu öffnen, und klicken Sie auf die Schaltfläche "Einstellungen" neben dem Eintrag der Erweiterung und ändern Sie die Farbe der Umrandung.
- Laden Sie die Webseite neu, um den Unterschied zu sehen.

## Mehr erfahren

- [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel der `manifest.json` Referenzdokumentation
- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API Referenzdokumentation
- Öffnen Sie die Einstellungsseite direkt von Ihrer Erweiterung aus mit der [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) API
- Einstellungsseitenbeispiel:
  - [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)
