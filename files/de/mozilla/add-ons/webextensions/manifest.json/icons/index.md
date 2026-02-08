---
title: icons
slug: Mozilla/Add-ons/WebExtensions/manifest.json/icons
l10n:
  sourceCommit: 2b872ea9a3ef7dbf72ec06bc9e410755dc2254fe
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
  </tbody>
</table>

Der `icons` Schlüssel gibt Symbole für Ihre Erweiterung an. Diese Symbole repräsentieren die Erweiterung in Komponenten wie dem Add-ons-Manager (`about:addons`).

Der Schlüssel besteht aus Schlüssel-Wert-Paaren, die die Bildgröße in Pixeln und den Bildpfad relativ zum Stammverzeichnis der Erweiterung angeben.

Wenn `icons` nicht angegeben wird, wird ein Standardsymbol für Erweiterungen verwendet.

Es wird empfohlen, ein Erweiterungssymbol anzugeben, idealerweise in der Größe 32x32 px. Dies ist das Standardsymbol, das im Add-ons-Manager verwendet wird. Sie können Symbole jeder Größe angeben, und Firefox verwendet dasjenige, das am besten zu einer Komponente passt.

Firefox berücksichtigt die Bildschirmauflösung bei der Auswahl eines Symbols. Um den bestmöglichen visuellen Eindruck für Benutzer mit hochauflösenden Bildschirmen wie Retina-Displays zu bieten, stellen Sie doppelt so große Versionen Ihrer Symbole bereit.

## Beispiel

Die Schlüssel im `icons` Objekt geben die Symbolgröße in Pixeln an, und die Werte geben den relativen Pfad zur Symboldatei an. Dieses Beispiel enthält ein 32px-Erweiterungssymbol und eine größere Version für hochauflösende Bildschirme.

```json
"icons": {
  "32": "icon.png",
  "64": "icon@2x.png"
}
```

## SVG

Sie können SVG verwenden, und der Browser skaliert Ihr Symbol entsprechend. Es gibt zwei Einschränkungen:

1. Sie müssen ein `viewBox` im Bild angeben, z.B.:

   ```html
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 32 32"
     width="32"
     height="32">
     <!-- your svg content -->
   </svg>
   ```

2. Auch wenn Sie eine SVG-Datei verwenden können, müssen Sie Symbolgrößen in Ihrem Manifest angeben, z.B.:

   ```json
   "icons": {
     "32": "icon.svg",
     "64": "icon.svg"
   }
   ```

> [!NOTE]
> Auf Chromium-basierten Browsern wird diese Funktion nicht unterstützt. Siehe [Chromium-Bug 29683](https://crbug.com/29683).

> [!NOTE]
> Denken Sie daran, das `xmlns` Attribut einzuschließen, wenn Sie das SVG erstellen. Andernfalls zeigt Firefox das Symbol nicht an.

> [!NOTE]
> Wenn Sie ein Programm wie Inkscape verwenden, um SVG zu erstellen, sollten Sie Ihre Datei als "plain SVG" speichern. Firefox kann die speziellen Namensräume möglicherweise nicht verarbeiten und zeigt möglicherweise ein Symbol, das sie enthält, nicht an.

## Browser-Kompatibilität

{{Compat}}
