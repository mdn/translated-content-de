---
title: clip
slug: Web/SVG/Reference/Attribute/clip
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`clip`** Attribut definiert den sichtbaren Bereich eines Elements. Sie sollten stattdessen {{svgattr("clip-path")}} verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `clip` auch ein entsprechendes CSS-Eigenschafts-Gegenstück: {{cssxref("clip")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut hat dieselben Parameterwerte wie für die CSS {{cssxref("clip")}} Eigenschaft definiert. Einheitlose Werte, die aktuelle Benutzerkoordinaten angeben, sind für die Koordinatenwerte in der `rect()`-Funktion zulässig. Der Wert `auto` definiert einen Clipping-Pfad entlang der Begrenzungen des vom gegebenen Element erzeugten Viewports.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("marker") }}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Auto clipping -->
  <svg x="0" width="10" height="10" clip="auto">
    <circle cx="5" cy="5" r="4" stroke="green" />
  </svg>

  <!-- Rect(top, right, bottom, left) clipping -->
  <svg x="10" width="10" height="10" clip="rect(1, 9, 8, 2)">
    <circle cx="5" cy="5" r="4" stroke="green" />
  </svg>
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Verwendungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>auto</code> | <code>rect()</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Der Wert `auto` definiert einen Clipping-Pfad entlang der Begrenzungen des vom gegebenen Element erzeugten Viewports. Der Wert `rect()` definiert ein Clipping-Rechteck nach folgendem Syntax: `rect(<top>, <right>, <bottom>, <left>)`. Die Werte `<top>` und `<bottom>` geben Offsets von der _oberen Begrenzungskante_ des Element-Viewports an, während `<right>` und `<left>` Offsets von der _linken Begrenzungskante_ des Element-Viewports angeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
