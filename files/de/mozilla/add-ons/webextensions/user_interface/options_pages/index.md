---
title: Optionsseite
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
l10n:
  sourceCommit: a3f3d029ddd98553160f20b927b1c5bc0c90d46b
---

{{AddonSidebar}}

Eine Optionsseite ermöglicht es Ihnen, Präferenzen für Ihre Erweiterung zu definieren, die Ihre Benutzer ändern können. Benutzer können auf die Optionsseite einer Erweiterung über den Add-ons-Manager des Browsers zugreifen:

{{EmbedYouTube("eODy24csH5M")}}

Die Art und Weise, wie Benutzer auf die Seite zugreifen und wie sie in die Benutzeroberfläche des Browsers integriert ist, variiert von einem Browser zum anderen.

Sie können die Seite programmgesteuert öffnen, indem Sie [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) aufrufen.

Optionsseiten haben eine Content Security Policy, die die Quellen einschränkt, von denen sie Ressourcen laden können, und unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Weitere Details finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Festlegen der Optionsseite

Um eine Optionsseite zu erstellen, schreiben Sie eine HTML-Datei, die die Seite definiert. Diese Seite kann CSS- und JavaScript-Dateien enthalten, wie eine normale Webseite. Diese Seite, aus dem Beispiel [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour), enthält eine JavaScript-Datei:

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

Beachten Sie die Verwendung von `<meta name="color-scheme" content="dark light">`. Dies ermöglicht in der eingebetteten Benutzeroberfläche das automatische Umschalten zwischen hellen und dunklen Themen basierend auf den Browserpräferenzen des Benutzers.

JavaScript, das auf der Seite ausgeführt wird, kann alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die das Add-on [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Insbesondere können Sie die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API verwenden, um Präferenzen zu speichern.

Paketieren Sie die Dateien der Seite in Ihrer Erweiterung.

Sie müssen auch den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel in Ihrer manifest.json-Datei einfügen und ihm die URL zur Seite geben.

```json
"options_ui": {
  "page": "options.html"
},
```

Sehen Sie sich die Seite [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) für **gemeinsame Optionen** zwischen Ihrer Optionsseite und Hintergrund- oder Inhalts-Skripten an.

## Gestaltung des Optionsinhalts

Für Details, wie Sie Ihre Optionsinhalte gestalten können, um den Stil von Firefox anzupassen, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält das Beispiel [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour), das die Funktionen der Optionsseite implementiert.
