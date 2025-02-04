---
title: text-rendering
slug: Web/SVG/Attribute/text-rendering
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`text-rendering`** Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Text gemacht werden sollten.

> [!NOTE]
> Als Präsentationsattribut kann `text-rendering` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS {{cssxref("text-rendering")}} Eigenschaft.

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
  - : Dieser Wert gibt an, dass der Benutzeragent geeignete Kompromisse machen soll, um eine Balance zwischen Geschwindigkeit, Lesbarkeit und geometrischer Präzision zu finden, wobei der Lesbarkeit mehr Bedeutung beigemessen wird als der Geschwindigkeit und der geometrischen Präzision.
- `optimizeSpeed`
  - : Dieser Wert gibt an, dass der Benutzeragent die Rendergeschwindigkeit gegenüber Lesbarkeit und geometrischer Präzision betonen soll. Diese Option wird manchmal einige Benutzeragenten dazu veranlassen, die Text-Anti-Aliasing abzuschalten.
- `optimizeLegibility`
  - : Dieser Wert gibt an, dass der Benutzeragent die Lesbarkeit gegenüber Rendergeschwindigkeit und geometrischer Präzision betonen soll. Der Benutzeragent wird häufig entscheiden, ob Anti-Aliasing-Techniken, eingebaute Font-Hinweise oder beides angewendet werden, um den lesbarsten Text zu erzeugen.
- `geometricPrecision`
  - : Dieser Wert gibt an, dass der Benutzeragent die geometrische Präzision gegenüber Lesbarkeit und Rendergeschwindigkeit betonen soll. Diese Option führt in der Regel dazu, dass der Benutzeragent die Verwendung von Hinweisen aussetzt, sodass {{Glossary("glyph", "Glyphen")}}-Umrisse mit vergleichbarer geometrischer Präzision zum Rendern der Pfaddaten gezeichnet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("text-rendering")}} Eigenschaft
