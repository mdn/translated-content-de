---
title: <ellipse>
slug: Web/SVG/Element/ellipse
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<ellipse>`**-Element ist eine SVG-Grundform, die verwendet wird, um Ellipsen basierend auf einem Mittelpunkt und sowohl ihrem x- als auch y-Radius zu erstellen.

> [!NOTE]
> Ellipsen können nicht die genaue Ausrichtung der Ellipse angeben (wenn Sie beispielsweise eine um 45 Grad geneigte Ellipse zeichnen möchten), können aber mit dem {{SVGAttr("transform")}}-Attribut rotiert werden.

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
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("cy")}}
  - : Die y-Position des Mittelpunkts der Ellipse.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("rx")}}
  - : Der Radius der Ellipse auf der x-Achse.
    _Wertetyp_: `auto`|[**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("ry")}}
  - : Der Radius der Ellipse auf der y-Achse.
    _Wertetyp_: `auto`|[**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut erlaubt es, die Gesamtlänge für den Pfad in Benutzereinheiten anzugeben.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: _none_; _Animierbar_: **ja**

> [!NOTE]
> Ab SVG2 sind `cx`, `cy`, `rx` und `ry` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere SVG-Grundformen: **{{ SVGElement('circle') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
