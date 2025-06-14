---
title: Einstellungsseite
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
l10n:
  sourceCommit: ca5054c2f698df5e949d9d5754e3e573b26b8588
---

{{AddonSidebar}}

Eine Einstellungsseite ermöglicht es Ihnen, Präferenzen für Ihre Erweiterung zu definieren, die Ihre Benutzer ändern können. Benutzer können auf die Einstellungsseite einer Erweiterung über den Add-ons-Manager des Browsers zugreifen:

{{EmbedYouTube("eODy24csH5M")}}

Die Art und Weise, wie Benutzer auf die Seite zugreifen und wie sie in die Benutzeroberfläche des Browsers integriert ist, variiert von Browser zu Browser.

Sie können die Seite programmatisch öffnen, indem Sie [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) aufrufen.

Einstellungsseiten haben eine Content Security Policy, die die Quellen einschränkt, von denen sie Ressourcen laden können, und einige unsichere Praktiken, wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), verbietet. Weitere Details finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Festlegen der Einstellungsseite

Um eine Einstellungsseite zu erstellen, schreiben Sie eine HTML-Datei, die die Seite definiert. Diese Seite kann CSS- und JavaScript-Dateien enthalten, wie eine normale Webseite. Diese Seite aus dem [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)-Beispiel enthält eine JavaScript-Datei:

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

Beachten Sie die Verwendung von `<meta name="color-scheme" content="dark light">`. Dies ermöglicht das automatische Umschalten zwischen hellen und dunklen Themen in der eingebetteten Benutzeroberfläche basierend auf den Browserpräferenzen des Benutzers. Weitere Informationen finden Sie unter [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme).

JavaScript, das auf der Seite ausgeführt wird, kann alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) nutzen, für die das Add-on [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Insbesondere können Sie die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage)-API verwenden, um Präferenzen zu speichern.

Paketieren Sie die Dateien der Seite in Ihrer Erweiterung.

Sie müssen auch den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)-Schlüssel in Ihre manifest.json-Datei aufnehmen und ihm die URL zur Seite geben.

```json
"options_ui": {
  "page": "options.html"
},
```

Sehen Sie sich die [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)-Seite für **gemeinsame Optionen** zwischen Ihrer Einstellungsseite und Hintergrund- oder Inhaltsskripten an.

## Design der Einstellungsinhalte

Details dazu, wie Sie Ihre Einstellungsinhalte gestalten, um dem Stil von Firefox zu entsprechen, finden Sie im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour)-Beispiel, das Funktionen von Einstellungsseiten implementiert.
