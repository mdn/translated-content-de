---
title: text-rendering
slug: Web/SVG/Attribute/text-rendering
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`text-rendering`** Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Text eingegangen werden sollen.

> [!NOTE]
> Als Präsentationsattribut kann `text-rendering` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-{{cssxref("text-rendering")}} Eigenschaft.

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

## Hinweise zur Nutzung

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
  - : Dieser Wert gibt an, dass der Benutzeragent geeignete Kompromisse eingehen soll, um Geschwindigkeit, Lesbarkeit und geometrische Präzision auszubalancieren, wobei der Lesbarkeit mehr Bedeutung als der Geschwindigkeit und der geometrischen Präzision zugemessen wird.
- `optimizeSpeed`
  - : Dieser Wert gibt an, dass der Benutzeragent die Rendergeschwindigkeit gegenüber der Lesbarkeit und der geometrischen Präzision betonen soll. Diese Option führt manchmal dazu, dass einige Benutzeragenten das Text-Anti-Aliasing deaktivieren.
- `optimizeLegibility`
  - : Dieser Wert gibt an, dass der Benutzeragent die Lesbarkeit über die Rendergeschwindigkeit und die geometrische Präzision betonen soll. Der Benutzeragent wählt oft aus, ob Anti-Aliasing-Techniken, integriertes Schriftartenhinweise oder beides angewendet werden sollen, um den lesbarsten Text zu erzeugen.
- `geometricPrecision`
  - : Dieser Wert gibt an, dass der Benutzeragent die geometrische Präzision über die Lesbarkeit und die Rendergeschwindigkeit betonen soll. Diese Option führt in der Regel dazu, dass der Benutzeragent die Verwendung von Hinweisen aussetzt, sodass {{Glossary("glyph")}}-Konturen mit einer vergleichbaren geometrischen Präzision wie bei der Darstellung von Pfaddaten gezeichnet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-rendering")}}
