---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
l10n:
  sourceCommit: abe8b2a8e5cf51787ac64a9defaac1d1a34d6561
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Objekt</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatorisch</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
  </tbody>
</table>

Der `icons`-Schlüssel spezifiziert Symbole für Ihre Erweiterung. Diese Symbole repräsentieren die Erweiterung in Komponenten wie dem Add-ons-Manager (`about:addons`).

Der Schlüssel besteht aus Schlüssel-Wert-Paaren, die die Bildgröße in Pixel und den Bildpfad relativ zum Stammverzeichnis der Erweiterung angeben.

Wenn `icons` nicht angegeben wird, wird ein Standardsymbol für die Erweiterung verwendet.

Sie sollten ein Erweiterungssymbol angeben, idealerweise in der Größe 32x32 px. Dies ist das Standardsymbol, das im Add-ons-Manager verwendet wird. Sie können Symbole in beliebiger Größe angeben, und Firefox verwendet das, das am besten zu einer Komponente passt.

Firefox berücksichtigt die Bildschirmauflösung bei der Auswahl eines Symbols. Um das beste visuelle Erlebnis für Nutzer mit hochauflösenden Displays, wie Retina-Displays, zu bieten, stellen Sie doppelt große Versionen Ihrer Symbole bereit.

## Beispiel

Die Schlüssel im `icons`-Objekt geben die Symbolgröße in Pixel an, und die Werte geben den relativen Dateipfad des Symbols an. Dieses Beispiel enthält ein 32px Erweiterungssymbol und eine größere Version für hochauflösende Displays.

```json
"icons": {
  "32": "icon.png",
  "64": "icon@2x.png"
}
```

## SVG

Sie können SVG verwenden, und der Browser skaliert Ihr Symbol entsprechend. Es gibt zwei Einschränkungen:

1. Sie müssen ein viewBox im Bild angeben, z.B.:

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

> [!NOTE]
> Es ist nur bekannt, dass Firefox SVG-Symbole unterstützt. Chromium hat einen Fehler bezüglich [nicht unterstützter SVG-Symbole](https://crbug.com/29683).

> [!NOTE]
> Denken Sie daran, das `xmlns`-Attribut hinzuzufügen, wenn Sie das SVG erstellen. Andernfalls wird das Symbol von Firefox nicht angezeigt.

> [!NOTE]
> Wenn Sie ein Programm wie Inkscape verwenden, um SVG zu erstellen, speichern Sie Ihre Datei als "plain SVG". Es ist nicht garantiert, dass Firefox spezielle Namensräume verarbeitet und ein Symbol, das solche enthält, anzeigt.

## Browser-Kompatibilität

{{Compat}}
