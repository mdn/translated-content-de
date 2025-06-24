---
title: style
slug: Web/SVG/Reference/Attribute/style
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`style`**-Attribut ermöglicht es, ein Element mit {{Glossary("CSS", "CSS")}}-Deklarationen zu gestalten. Es funktioniert identisch wie [das `style`-Attribut in HTML](/de/docs/Web/HTML/Reference/Global_attributes/style).

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="80"
    height="40"
    x="10"
    y="10"
    style="fill: skyblue; stroke: cadetblue; stroke-width: 2;" />
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;style></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<style>`
  - : Die Syntax der Stil-Daten hängt von der Stylesheet-Sprache ab. Standardmäßig ist die Stylesheet-Sprache [CSS](/de/docs/Web/CSS).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("style")}}
- [HTML `style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style)
