---
title: shape-rendering
slug: Web/SVG/Attribute/shape-rendering
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`shape-rendering`**-Attribut gibt dem Renderer Hinweise darauf, welche Kompromisse beim Rendern von Formen wie Pfaden, Kreisen oder Rechtecken eingegangen werden sollen.

> [!NOTE]
> Als Präsentationsattribut hat `shape-rendering` auch ein entsprechendes CSS-Eigenschaftspendant: {{cssxref("shape-rendering")}}. Wenn beides angegeben ist, hat die CSS-Eigenschaft Vorrang.

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
  - : Dieser Wert gibt an, dass der User Agent geeignete Kompromisse eingehen soll, um Geschwindigkeit, scharfe Kanten und geometrische Präzision auszugleichen, wobei der geometrischen Präzision mehr Bedeutung beigemessen wird als Geschwindigkeit und scharfen Kanten.
- `optimizeSpeed`
  - : Dieser Wert gibt an, dass der User Agent die Rendergeschwindigkeit über geometrische Präzision und scharfe Kanten stellen soll. Diese Option kann dazu führen, dass der User Agent die Kantenglättung (Anti-Aliasing) deaktiviert.
- `crispEdges`
  - : Dieser Wert gibt an, dass der User Agent den Kontrast zwischen sauberen Kanten eines Kunstwerks gegenüber Rendergeschwindigkeit und geometrischer Präzision betonen soll. Um scharfe Kanten zu erreichen, könnte der User Agent die Kantenglättung für alle Linien und Kurven deaktivieren oder möglicherweise nur für gerade Linien, die fast vertikal oder horizontal verlaufen. Außerdem könnte der User Agent Linienpositionen und -breiten anpassen, um Kanten an Gerätepixeln auszurichten.
- `geometricPrecision`
  - : Gibt an, dass der User Agent die geometrische Präzision über Geschwindigkeit und scharfe Kanten stellen soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref('shape-rendering')}}
