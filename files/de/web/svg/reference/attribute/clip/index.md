---
title: clip
slug: Web/SVG/Reference/Attribute/clip
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{deprecated_header}}

Das **`clip`**-Attribut definiert den sichtbaren Bereich eines Elements. Sie sollten stattdessen {{svgattr("clip-path")}} verwenden.

> [!NOTE]
> Als Präsentationsattribut hat `clip` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("clip")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut hat dieselben Parameterwerte wie für die CSS-{{cssxref("clip")}}-Eigenschaft definiert. Werte ohne Einheit, die aktuelle Benutzerkoordinaten angeben, sind bei den Koordinatenwerten auf dem `rect()` erlaubt. Der Wert `auto` definiert einen Clipping-Pfad entlang der Begrenzungen des vom gegebenen Element erzeugten Ansichtsfensters.

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

Der Wert `auto` definiert einen Clipping-Pfad entlang der Begrenzungen des vom gegebenen Element erzeugten Ansichtsfensters. Der Wert `rect()` definiert ein Clipping-Rechteck gemäß der folgenden Syntax: `rect(<top>, <right>, <bottom>, <left>)`. Die Werte `<top>` und `<bottom>` geben Verschiebungen von der _oberen Randkante_ des Elementansichtsfensters an, während `<right>` und `<left>` Verschiebungen von der _linken Randkante_ des Elementansichtsfensters angeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
