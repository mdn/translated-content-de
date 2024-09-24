---
title: shape-rendering
slug: Web/SVG/Attribute/shape-rendering
l10n:
  sourceCommit: 10c719061d0f21f1b6ff4457a624e9dd49083d3f
---

{{SVGRef}}

Das **`shape-rendering`**-Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken zu machen sind.

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

## Anwendungshinweise

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
  - : Dieser Wert gibt an, dass der Benutzer-Agent geeignete Kompromisse eingehen soll, um Geschwindigkeit, scharfe Kanten und geometrische Präzision auszugleichen, wobei der geometrischen Präzision mehr Bedeutung beigemessen wird als Geschwindigkeit und scharfen Kanten.
- `optimizeSpeed`
  - : Dieser Wert gibt an, dass der Benutzer-Agent die Rendering-Geschwindigkeit über die geometrische Präzision und scharfe Kanten stellen soll. Diese Option kann dazu führen, dass der Benutzer-Agent die Form-Anti-Aliasing ausschaltet.
- `crispEdges`
  - : Dieser Wert gibt an, dass der Benutzer-Agent versuchen soll, den Kontrast zwischen klaren Kanten von Kunstwerken gegenüber der Rendering-Geschwindigkeit und geometrischen Präzision zu betonen. Um scharfe Kanten zu erreichen, könnte der Benutzer-Agent das Anti-Aliasing für alle Linien und Kurven oder möglicherweise nur für gerade Linien, die fast vertikal oder horizontal sind, abschalten. Außerdem könnte der Benutzer-Agent die Linienpositionen und Linienbreiten anpassen, um Kanten an Gerätepixel auszurichten.
- `geometricPrecision`
  - : Gibt an, dass der Benutzer-Agent die geometrische Präzision gegenüber Geschwindigkeit und scharfen Kanten betonen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref('shape-rendering')}}-Eigenschaft
