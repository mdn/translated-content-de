---
title: Clip
slug: Web/SVG/Attribute/clip
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{deprecated_header}}

Das **`clip`**-Attribut ist ein Präsentationsattribut, das den sichtbaren Bereich eines Elements definiert.

Dieses Attribut hat dieselben Parameterwerte wie die für die CSS-Eigenschaft {{cssxref("clip")}}. Einheitlose Werte, die aktuelle Benutzerkoordinaten anzeigen, sind für die Koordinatenwerte auf dem `rect()` zulässig. Der Wert `auto` definiert einen Clipping-Pfad entlang der Begrenzungen des vom angegebenen Element erstellten Ansichtsfensters.

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

## Hinweise zur Verwendung

> [!WARNING]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen {{cssxref("clip-path")}}.

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

Der Wert `auto` definiert einen Clipping-Pfad entlang der Begrenzungen des vom angegebenen Element erstellten Ansichtsfensters. Der Wert `rect()` definiert ein Clipping-Rechteck nach folgendem Syntax: `rect(<top>, <right>, <bottom>, <left>)`. Die Werte `<top>` und `<bottom>` geben Versätze von der _oberen Rahmenecke_ des Element-Ansichtsfensters an, während `<right>` und `<left>` Versätze von der _linken Rahmenecke_ des Element-Ansichtsfensters angeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
