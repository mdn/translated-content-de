---
title: shape-rendering
slug: Web/SVG/Reference/Attribute/shape-rendering
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`shape-rendering`**-Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken eingegangen werden sollen.

> [!NOTE]
> Als Präsentationsattribut hat `shape-rendering` auch eine entsprechende CSS-Eigenschaft: {{cssxref("shape-rendering")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" shape-rendering="geometricPrecision" />
  <circle cx="320" cy="100" r="100" shape-rendering="crispEdges" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>crispEdges</code> | <code>geometricPrecision</code>
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
  - : Dieser Wert bedeutet, dass der Benutzeragent geeignete Kompromisse eingehen soll, um Geschwindigkeit, scharfe Kanten und geometrische Präzision auszugleichen, wobei der geometrischen Präzision mehr Bedeutung beigemessen wird als Geschwindigkeit und scharfen Kanten.
- `optimizeSpeed`
  - : Dieser Wert bedeutet, dass der Benutzeragent die Rendering-Geschwindigkeit gegenüber geometrischer Präzision und scharfen Kanten betonen soll. Diese Option kann dazu führen, dass der Benutzeragent das Anti-Aliasing von Formen deaktiviert.
- `crispEdges`
  - : Dieser Wert bedeutet, dass der Benutzeragent versuchen soll, den Kontrast zwischen sauberen Kanten der Grafik gegenüber Rendering-Geschwindigkeit und geometrischer Präzision zu betonen. Um scharfe Kanten zu erzielen, könnte der Benutzeragent das Anti-Aliasing für alle Linien und Kurven oder möglicherweise nur für fast vertikale oder horizontale gerade Linien deaktivieren. Außerdem könnte der Benutzeragent die Positionen und Breiten von Linien anpassen, um Kanten mit Gerätepixeln auszurichten.
- `geometricPrecision`
  - : Bedeutet, dass der Benutzeragent die geometrische Präzision gegenüber Geschwindigkeit und scharfen Kanten betonen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref('shape-rendering')}}-Eigenschaft
