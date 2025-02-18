---
title: clip
slug: Web/SVG/Attribute/clip
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}{{deprecated_header}}

Das **`clip`**-Attribut definiert den sichtbaren Bereich eines Elements. Sie sollten stattdessen {{svgattr("clip-path")}} verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `clip` auch ein entsprechendes CSS-Property: {{cssxref("clip")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Priorität.

Dieses Attribut hat die gleichen Parameterwerte wie für die CSS-{{cssxref("clip")}}-Eigenschaft definiert. Einheitenlose Werte, die aktuelle Benutzerkoordinaten angeben, sind für die Koordinatenwerte im `rect()` erlaubt. Der Wert `auto` definiert einen Clipping-Pfad entlang der Grenzen des Viewports, der durch das angegebene Element erstellt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Verwendungshinweise

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

Der Wert `auto` definiert einen Clipping-Pfad entlang der Grenzen des Viewports, der durch das angegebene Element erstellt wird. Der Wert `rect()` definiert ein Clipping-Rechteck nach folgendem Syntaxschema: `rect(<top>, <right>, <bottom>, <left>)`. Die Werte `<top>` und `<bottom>` geben die Offsets von der _oberen Randkante_ des Element-Viewports an, während `<right>` und `<left>` die Offsets von der _linken Randkante_ des Element-Viewports angeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
