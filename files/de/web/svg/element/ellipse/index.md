---
title: <ellipse>
slug: Web/SVG/Element/ellipse
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<ellipse>`** [SVG](/de/docs/Web/SVG)-Element ist eine grundlegende SVG-Form, die verwendet wird, um Ellipsen anhand eines Mittelpunktes und sowohl ihres x- als auch ihres y-Radius zu erstellen.

> [!NOTE]
> Ellipsen können die genaue Ausrichtung der Ellipse nicht angeben (wenn Sie beispielsweise eine Ellipse in einem 45-Grad-Winkel zeichnen möchten), sie kann jedoch durch Verwendung des {{SVGAttr("transform")}}-Attributs gedreht werden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Attribute

- {{SVGAttr("cx")}}
  - : Die x-Position des Mittelpunkts der Ellipse.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("cy")}}
  - : Die y-Position des Mittelpunkts der Ellipse.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("rx")}}
  - : Der Radius der Ellipse auf der x-Achse.
    _Werttyp_: `auto`|[**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("ry")}}
  - : Der Radius der Ellipse auf der y-Achse.
    _Werttyp_: `auto`|[**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut ermöglicht das Festlegen der Gesamtlänge des Pfades in Benutzereinheiten.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: _none_; _Animierbar_: **ja**

> [!NOTE]
> Ab SVG2 sind `cx`, `cy`, `rx` und `ry` _Geometry Properties_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Verwendungszusammenhang

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere grundlegende SVG-Formen: **{{ SVGElement('circle') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
