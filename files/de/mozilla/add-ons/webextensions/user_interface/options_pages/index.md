---
title: Optionsseite
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Eine Optionsseite ermöglicht es Ihnen, Präferenzen für Ihre Erweiterung festzulegen, die von Ihren Nutzern geändert werden können. Nutzer können auf die Optionsseite einer Erweiterung über den Add-ons-Manager des Browsers zugreifen:

{{EmbedYouTube("eODy24csH5M")}}

Die Art und Weise, wie Nutzer auf die Seite zugreifen, und wie sie in die Benutzeroberfläche des Browsers integriert ist, variiert von Browser zu Browser.

Sie können die Seite programmatisch öffnen, indem Sie [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) aufrufen.

Optionsseiten haben eine Content Security Policy, die die Quellen einschränkt, von denen sie Ressourcen laden können, und einige unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Siehe [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für weitere Details.

## Festlegen der Optionsseite

Um eine Optionsseite zu erstellen, schreiben Sie eine HTML-Datei, die die Seite definiert. Diese Seite kann CSS- und JavaScript-Dateien enthalten, wie eine normale Webseite. Diese Seite, aus dem [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) Beispiel, enthält eine JavaScript-Datei:

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

Beachten Sie die Verwendung von `<meta name="color-scheme" content="dark light">`. Dies ermöglicht das automatische Umschalten zwischen hellen und dunklen Themes in der eingebetteten Benutzeroberfläche basierend auf den Einstellungen des Nutzers im Browser. Für weitere Informationen siehe [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme).

JavaScript, das auf der Seite läuft, kann alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die das Add-on [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Insbesondere können Sie die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API verwenden, um Präferenzen zu speichern.

Packen Sie die Dateien der Seite in Ihre Erweiterung.

Sie müssen auch den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel in Ihrer manifest.json Datei einfügen und ihm die URL zur Seite geben.

```json
"options_ui": {
  "page": "options.html"
},
```

Siehe die [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Seite für **Sharing-Optionen** zwischen Ihrer Optionsseite und Hintergrund- oder Inhalts-Skripten.

## Design des Optionsinhalts

Für Details, wie Sie Ihren Optionsinhalt gestalten, um dem Stil von Firefox zu entsprechen, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) Beispiel, das die Optionseiten-Funktionen implementiert.
