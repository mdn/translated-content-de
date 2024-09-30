---
title: text-rendering
slug: Web/SVG/Attribute/text-rendering
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`text-rendering`** Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Text eingegangen werden sollen.

> [!NOTE]
> Als Präsentationsattribut kann `text-rendering` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie unter der CSS-Eigenschaft {{cssxref("text-rendering")}}.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Dieser Wert gibt an, dass der Benutzeragent geeignete Kompromisse zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision eingehen soll, wobei der Lesbarkeit eine höhere Wichtigkeit beigemessen wird als der Geschwindigkeit und der geometrischen Präzision.
- `optimizeSpeed`
  - : Dieser Wert gibt an, dass der Benutzeragent die Rendergeschwindigkeit über Lesbarkeit und geometrische Präzision stellen soll. Diese Option wird in manchen Fällen dazu führen, dass einige Benutzeragenten die Text-Anti-Aliasing-Funktion ausschalten.
- `optimizeLegibility`
  - : Dieser Wert gibt an, dass der Benutzeragent die Lesbarkeit über Rendergeschwindigkeit und geometrische Präzision priorisieren soll. Der Benutzeragent entscheidet oft, ob Anti-Aliasing-Techniken, eingebaute Schriftartenhinweise oder beides angewendet werden, um den lesbarsten Text zu erzeugen.
- `geometricPrecision`
  - : Dieser Wert gibt an, dass der Benutzeragent die geometrische Präzision über Lesbarkeit und Rendergeschwindigkeit betonen soll. Diese Option führt in der Regel dazu, dass der Benutzeragent auf die Verwendung von Hinting verzichtet, sodass [Glyphe](/de/docs/Glossary/glyph)-Umrisse mit vergleichbarer geometrischer Präzision zum Rendern von Pfaddaten gezeichnet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-rendering")}}
