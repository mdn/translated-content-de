---
title: Optionsseite
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Auf einer Optionsseite können Sie Einstellungen für Ihre Erweiterung festlegen, die Ihre Nutzer ändern können.

Wie Nutzer auf die Seite zugreifen und wie sie in die Benutzeroberfläche des Browsers integriert ist, unterscheidet sich je nach Browser. In Firefox öffnen Nutzer die Optionsseite einer Erweiterung über den Add-ons-Manager.

![Die Optionsseite des Beispiels „favourite-colour“ auf dem Tab „Einstellungen“ seines Eintrags im Firefox-Add-ons-Manager](options_page.png)

Ihre Erweiterung kann die Seite programmatisch öffnen, indem sie [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) aufruft.

Für Optionsseiten gilt eine Content Security Policy, die einschränkt, aus welchen Quellen sie Ressourcen laden können, und bestimmte unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) untersagt. Weitere Informationen finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Optionsseite festlegen

Um eine Optionsseite zu erstellen, schreiben Sie eine HTML-Datei, die die Seite definiert. Wie eine normale Webseite kann sie CSS- und JavaScript-Dateien einbinden. Diese Seite aus dem Beispiel [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) bindet eine JavaScript-Datei ein:

```html
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="color-scheme" content="dark light" />
  </head>

  <body>
    <form>
      <label for="color">Favorite color</label>
      <input type="text" id="color" name="color" />
      <button type="submit">Save</button>
    </form>
    <script src="options.js"></script>
  </body>
</html>
```

Beachten Sie die Verwendung von `<meta name="color-scheme" content="dark light">`. Dadurch kann die eingebettete Benutzeroberfläche anhand der Browsereinstellungen des Nutzers automatisch zwischen einem hellen und einem dunklen Design wechseln. Weitere Informationen finden Sie unter [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme).

JavaScript, das auf der Seite ausgeführt wird, kann alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die das Add-on [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzt. Insbesondere können Sie mit der [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage)-API Einstellungen dauerhaft speichern.

Nehmen Sie die Dateien der Seite in Ihre Erweiterung auf.

Außerdem müssen Sie den Schlüssel [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) in Ihre manifest.json-Datei aufnehmen und darin die URL der Seite angeben.

```json
"options_ui": {
  "page": "options.html"
},
```

Wie Sie **Optionen zwischen Ihrer Optionsseite und Hintergrund- oder Content-Skripten gemeinsam nutzen**, erfahren Sie auf der Seite zu [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui).

## Gestaltung der Optionsseite

Wie Sie den Inhalt Ihrer Optionsseite passend zum Stil von Firefox gestalten, erfahren Sie im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält das Beispiel [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour), das Funktionen einer Optionsseite implementiert.
