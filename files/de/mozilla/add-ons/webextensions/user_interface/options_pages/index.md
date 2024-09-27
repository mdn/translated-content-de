---
title: Options-Seite
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
l10n:
  sourceCommit: a3f3d029ddd98553160f20b927b1c5bc0c90d46b
---

{{AddonSidebar}}

Eine Options-Seite ermöglicht es Ihnen, Präferenzen für Ihre Erweiterung zu definieren, die Ihre Benutzer ändern können. Benutzer können auf die Options-Seite einer Erweiterung über den Add-ons-Manager des Browsers zugreifen:

{{EmbedYouTube("eODy24csH5M")}}

Die Art und Weise, wie Benutzer auf die Seite zugreifen und wie diese in die Benutzeroberfläche des Browsers integriert ist, variiert von Browser zu Browser.

Sie können die Seite programmgesteuert öffnen, indem Sie [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) aufrufen.

Options-Seiten haben eine Content Security Policy, die die Quellen einschränkt, aus denen sie Ressourcen laden können, und unsichere Praktiken wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) verbietet. Weitere Einzelheiten finden Sie unter [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Optionen-Seite spezifizieren

Um eine Optionen-Seite zu erstellen, schreiben Sie eine HTML-Datei, die die Seite definiert. Diese Seite kann CSS- und JavaScript-Dateien enthalten, ähnlich wie eine normale Webseite. Diese Seite aus dem [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) Beispiel enthält eine JavaScript-Datei:

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

Beachten Sie die Verwendung von `<meta name="color-scheme" content="dark light">`. Dies ermöglicht das automatische Umschalten zwischen hellen und dunklen Themes in der eingebetteten Benutzeroberfläche basierend auf den Präferenzen des Benutzers im Browser.

JavaScript, das auf der Seite ausgeführt wird, kann alle [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, für die das Add-on [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Insbesondere können Sie die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) API verwenden, um Präferenzen zu speichern.

Packen Sie die Dateien der Seite in Ihre Erweiterung.

Sie müssen auch den [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Schlüssel in Ihrer manifest.json-Datei einfügen und ihr die URL zur Seite geben.

```json
"options_ui": {
  "page": "options.html"
},
```

Siehe die [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) Seite für **Sharing-Optionen** zwischen Ihrer Options-Seite und Hintergrund- oder Inhaltsskripten.

## Design des Options-Inhalts

Details zur Gestaltung des Option-Inhalts im Stil von Firefox finden Sie im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) Beispiel, das Funktionen der Options-Seite implementiert.
