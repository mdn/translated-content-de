---
title: shape-rendering
slug: Web/SVG/Attribute/shape-rendering
l10n:
  sourceCommit: 10c719061d0f21f1b6ff4457a624e9dd49083d3f
---

{{SVGRef}}

Das **`shape-rendering`** Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken eingegangen werden sollen.

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

{{EmbedLiveSample("Beispiel", "420", "220")}}

## Nutzungshinweise

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
  - : Dieser Wert gibt an, dass der Benutzeragent geeignete Kompromisse eingehen soll, um Geschwindigkeit, scharfe Kanten und geometrische Präzision auszugleichen, wobei der geometrischen Präzision mehr Bedeutung beigemessen wird als Geschwindigkeit und scharfen Kanten.
- `optimizeSpeed`
  - : Dieser Wert gibt an, dass der Benutzeragent die Rendergeschwindigkeit gegenüber geometrischer Präzision und scharfen Kanten betonen soll. Diese Option kann dazu führen, dass der Benutzeragent das Kantenglätten von Formen ausschaltet.
- `crispEdges`
  - : Dieser Wert gibt an, dass der Benutzeragent versuchen soll, den Kontrast zwischen sauberen Kanten von Kunstwerken gegenüber der Rendergeschwindigkeit und der geometrischen Präzision zu betonen. Um scharfe Kanten zu erreichen, kann der Benutzeragent das Kantenglätten für alle Linien und Kurven oder möglicherweise nur für nahezu vertikale oder horizontale Geraden ausschalten. Außerdem kann der Benutzeragent gegebenenfalls Linienpositionen und -breiten anpassen, um Kanten mit Gerätepixeln auszurichten.
- `geometricPrecision`
  - : Gibt an, dass der Benutzeragent die geometrische Präzision gegenüber Geschwindigkeit und scharfen Kanten betonen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref('shape-rendering')}} Eigenschaft
