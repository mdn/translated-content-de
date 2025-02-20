---
title: text-rendering
slug: Web/SVG/Attribute/text-rendering
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`text-rendering`**-Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Text zu machen sind.

> [!NOTE]
> Als Präsentationsattribut hat `text-rendering` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("text-rendering")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("text")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
  <text y="15" text-rendering="geometricPrecision">Geometric precision</text>
  <text y="35" text-rendering="optimizeLegibility">Optimized legibility</text>
</svg>
```

{{EmbedLiveSample("Example", "420", "140")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>optimizeLegibility</code> | <code>geometricPrecision</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Dieser Wert gibt an, dass der User-Agent geeignete Kompromisse eingeht, um Geschwindigkeit, Lesbarkeit und geometrische Präzision auszugleichen, wobei Lesbarkeit eine höhere Priorität als Geschwindigkeit und geometrische Präzision eingeräumt wird.
- `optimizeSpeed`
  - : Dieser Wert gibt an, dass der User-Agent die Rendergeschwindigkeit gegenüber Lesbarkeit und geometrischer Präzision bevorzugt. Diese Option kann dazu führen, dass einige User-Agents das Text-Anti-Aliasing deaktivieren.
- `optimizeLegibility`
  - : Dieser Wert gibt an, dass der User-Agent die Lesbarkeit gegenüber Rendergeschwindigkeit und geometrischer Präzision bevorzugt. In der Regel entscheidet der User-Agent, ob Anti-Aliasing-Techniken, integrierte Schriftanpassung oder beides verwendet werden, um den lesbarsten Text zu erzeugen.
- `geometricPrecision`
  - : Dieser Wert gibt an, dass der User-Agent die geometrische Präzision gegenüber Lesbarkeit und Rendergeschwindigkeit bevorzugt. Diese Option sorgt normalerweise dafür, dass der User-Agent auf Schriftanpassung verzichtet, sodass die {{Glossary("glyph", "Glyphen")}}-Umrisse mit ähnlicher geometrischer Präzision wie die Darstellung von Pfaddaten gezeichnet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("text-rendering")}}-Eigenschaft
