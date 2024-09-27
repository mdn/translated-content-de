---
title: shape-rendering
slug: Web/SVG/Attribute/shape-rendering
l10n:
  sourceCommit: 10c719061d0f21f1b6ff4457a624e9dd49083d3f
---

{{SVGRef}}

Das **`shape-rendering`**-Attribut liefert dem Renderer Hinweise darauf, welche Kompromisse eingegangen werden sollen, wenn Formen wie Wege, Kreise oder Rechtecke gerendert werden.

> [!NOTE]
> Als Präsentationsattribut kann `shape-rendering` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('shape-rendering')}} für mehr Informationen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Hinweise zur Nutzung

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
  - : Dieser Wert gibt an, dass der User-Agent entsprechende Kompromisse eingehen soll, um Geschwindigkeit, scharfe Kanten und geometrische Präzision auszugleichen, wobei der geometrischen Präzision mehr Bedeutung als der Geschwindigkeit und den scharfen Kanten beigemessen wird.
- `optimizeSpeed`
  - : Dieser Wert gibt an, dass der User-Agent das Rendering-Tempo über geometrische Präzision und scharfe Kanten stellen soll. Diese Option wird manchmal dazu führen, dass der User-Agent die Kanten-Glättung der Formen deaktiviert.
- `crispEdges`
  - : Dieser Wert gibt an, dass der User-Agent versuchen soll, den Kontrast zwischen scharfen Kanten von Kunstwerken über die Rendering-Geschwindigkeit und die geometrische Präzision zu betonen. Um scharfe Kanten zu erreichen, könnte der User-Agent die Kanten-Glättung für alle Linien und Kurven oder möglicherweise nur für gerade Linien, die fast vertikal oder horizontal sind, deaktivieren. Außerdem könnte der User-Agent die Positionen und Breiten von Linien anpassen, um Kanten an Gerätepixel auszurichten.
- `geometricPrecision`
  - : Gibt an, dass der User-Agent geometrische Präzision über Geschwindigkeit und scharfe Kanten betonen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref('shape-rendering')}} Eigenschaft
