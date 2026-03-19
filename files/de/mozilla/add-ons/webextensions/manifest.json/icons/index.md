---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
l10n:
  sourceCommit: 1ba0755482292cd52e89cf96fda34000c8e60c91
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
  </tbody>
</table>

Der Schlüssel `icons` legt die Symbole für Ihre Erweiterung fest. Diese Symbole repräsentieren die Erweiterung in Komponenten wie dem Add-ons-Manager (`about:addons`).

Der Schlüssel besteht aus Schlüssel-Wert-Paaren, die die Bildgröße in Pixeln und den Bildpfad relativ zum Stammverzeichnis der Erweiterung angeben.

Wenn `icons` nicht angegeben wird, wird ein Standarderweiterungssymbol verwendet.

Sie sollten ein Erweiterungssymbol bereitstellen, idealerweise in der Größe 32x32 px. Dies ist das Standardsymbol, das im Add-ons-Manager verwendet wird. Sie können Symbole jeder Größe bereitstellen, und Firefox verwendet dasjenige, das am besten zu einer Komponente passt.

Firefox berücksichtigt die Bildschirmauflösung bei der Auswahl eines Symbols. Um den besten visuellen Eindruck für Benutzer mit hochauflösenden Displays wie Retina-Displays zu bieten, sollten doppelt so große Versionen Ihrer Symbole bereitgestellt werden.

## Beispiel

Die Schlüssel im `icons`-Objekt geben die Symbolgröße in Pixeln an, und die Werte geben den relativen Symboldateipfad an. Dieses Beispiel enthält ein 32px Erweiterungssymbol und eine größere Version für hochauflösende Displays.

```json
"icons": {
  "32": "icon.png",
  "64": "icon@2x.png"
}
```

## SVG

Sie können SVG verwenden, und der Browser skaliert Ihr Symbol entsprechend. Es gibt zwei Vorbehalte:

1. Sie müssen ein `viewBox` in dem Bild angeben, z.B.:

   ```html
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 32 32"
     width="32"
     height="32">
     <!-- your svg content -->
   </svg>
   ```

2. Obwohl Sie eine SVG-Datei verwenden können, müssen Sie Symbolgrößen in Ihrem Manifest angeben, z.B.:

   ```json
   "icons": {
     "32": "icon.svg",
     "64": "icon.svg"
   }
   ```

Sie können eine Media Query zu `prefers-color-scheme` verwenden, um das Symbol für helle und dunkle Themen zu aktualisieren. Zum Beispiel:

```html
<style>
  #outside {
    fill: black;
  }
  #inside {
    fill: red;
  }
  @media (prefers-color-scheme: dark) {
    #outside {
      fill: white;
    }
    #inside {
      fill: black;
    }
  }
</style>
```

Für weitere Informationen siehe das Beispiel [themed-icons](https://github.com/mdn/webextensions-examples/tree/master/themed-icons).

> [!NOTE]
> Auf Chromium-basierten Browsern wird dieses Feature nicht unterstützt. Siehe [Chromium Bug 29683](https://crbug.com/29683).

> [!NOTE]
> Denken Sie daran, das `xmlns`-Attribut hinzuzufügen, wenn Sie das SVG erstellen. Andernfalls zeigt Firefox das Symbol nicht an.

> [!NOTE]
> Wenn Sie ein Programm wie Inkscape zur Erstellung von SVG verwenden, speichern Sie Ihre Datei als "Plain SVG". Firefox garantiert nicht, dass spezielle Namensräume verarbeitet werden und zeigt möglicherweise ein Symbol, das solche enthält, nicht an.

## Browser-Kompatibilität

{{Compat}}
