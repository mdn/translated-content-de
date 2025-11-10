---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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

Der `icons`-Schlüssel spezifiziert Symbole für Ihre Erweiterung. Diese Symbole repräsentieren die Erweiterung in Komponenten wie dem Add-ons-Manager (`about:addons`).

Der Schlüssel besteht aus Schlüssel-Wert-Paaren, die die Bildgröße in Pixeln und den Bildpfad relativ zum Stammverzeichnis der Erweiterung angeben.

Wenn `icons` nicht angegeben wird, wird ein Standardsymbol für die Erweiterung verwendet.

Sie sollten ein Erweiterungssymbol bereitstellen, idealerweise in der Größe 32x32 px. Dies ist das Standardsymbol, das im Add-ons-Manager verwendet wird. Sie können Symbole in beliebiger Größe bereitstellen, und Firefox verwendet dasjenige, das am besten zu einer Komponente passt.

Firefox berücksichtigt die Bildschirmauflösung bei der Auswahl eines Symbols. Um die beste visuelle Erfahrung für Benutzer mit hochauflösenden Bildschirmen, wie Retina-Displays, zu bieten, stellen Sie doppelt so große Versionen Ihrer Symbole bereit.

## Beispiel

Die Schlüssel im `icons`-Objekt geben die Symbolgröße in Pixeln an, und die Werte geben den relativen Dateipfad des Symbols an. Dieses Beispiel enthält ein 32px-Erweiterungssymbol und eine größere Version für hochauflösende Displays.

```json
"icons": {
  "32": "icon.png",
  "64": "icon@2x.png"
}
```

## SVG

Sie können SVG verwenden, und der Browser skaliert Ihr Symbol entsprechend. Es gibt zwei Einschränkungen:

1. Sie müssen ein viewBox im Bild angeben, z. B.:

   ```html
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 32 32"
     width="32"
     height="32">
     <!-- your svg content -->
   </svg>
   ```

2. Auch wenn Sie eine SVG-Datei verwenden können, müssen Sie Symbolgrößen in Ihrem Manifest angeben, z. B.:

   ```json
   "icons": {
     "32": "icon.svg",
     "64": "icon.svg"
   }
   ```

> [!NOTE]
> Nur Firefox ist bekannt dafür, SVG-Symbole zu unterstützen. Chromium hat einen Fehler im Zusammenhang mit [nicht unterstützten SVG-Symbolen](https://crbug.com/29683).

> [!NOTE]
> Denken Sie daran, das `xmlns`-Attribut einzuschließen, wenn Sie die SVG erstellen. Andernfalls wird Firefox das Symbol nicht anzeigen.

> [!NOTE]
> Wenn Sie ein Programm wie Inkscape verwenden, um SVGs zu erstellen, speichern Sie Ihre Datei als "Plain SVG". Firefox kann möglicherweise spezielle Namensräume nicht verarbeiten und zeigt ein Symbol, das diese enthält, möglicherweise nicht an.

## Browser-Kompatibilität

{{Compat}}
