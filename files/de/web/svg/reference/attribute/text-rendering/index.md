---
title: text-rendering
slug: Web/SVG/Reference/Attribute/text-rendering
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`text-rendering`**-Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Text eingegangen werden sollen.

> [!NOTE]
> Als Präsentationsattribut hat `text-rendering` auch ein entsprechendes CSS-Property: {{cssxref("text-rendering")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

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

## Verwendungshinweise

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
  - : Dieser Wert zeigt an, dass der Benutzeragent geeignete Kompromisse eingehen soll, um Geschwindigkeit, Lesbarkeit und geometrische Präzision auszugleichen, wobei der Lesbarkeit mehr Bedeutung beigemessen wird als der Geschwindigkeit und der geometrischen Präzision.
- `optimizeSpeed`
  - : Dieser Wert zeigt an, dass der Benutzeragent die Rendering-Geschwindigkeit über die Lesbarkeit und die geometrische Präzision stellen soll. Diese Option führt manchmal dazu, dass einige Benutzeragenten das Text-Anti-Aliasing deaktivieren.
- `optimizeLegibility`
  - : Dieser Wert zeigt an, dass der Benutzeragent die Lesbarkeit über die Rendering-Geschwindigkeit und die geometrische Präzision stellen soll. Der Benutzeragent wählt oft, ob Anti-Aliasing-Techniken, eingebaute Schriftarten-Hinting oder beides angewendet werden, um den lesbarsten Text zu erzeugen.
- `geometricPrecision`
  - : Dieser Wert zeigt an, dass der Benutzeragent die geometrische Präzision über die Lesbarkeit und die Rendering-Geschwindigkeit stellen soll. Diese Option führt normalerweise dazu, dass der Benutzeragent die Verwendung von Hinting aussetzt, damit die {{Glossary("glyph", "glyph")}}-Umrisse mit vergleichbarer geometrischer Präzision zur Wiedergabe von Pfaddaten gezeichnet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("text-rendering")}}-Property
