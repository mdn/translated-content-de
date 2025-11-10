---
title: <ellipse>
slug: Web/SVG/Reference/Element/ellipse
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<ellipse>`** [SVG](/de/docs/Web/SVG)-Element ist eine grundlegende SVG-Form, die verwendet wird, um Ellipsen basierend auf einer Mittelpunktkoordinate sowie deren x- und y-Radius zu erstellen.

> [!NOTE]
> Ellipsen können die genaue Ausrichtung der Ellipse nicht angeben (zum Beispiel, wenn Sie eine um 45 Grad geneigte Ellipse zeichnen möchten), aber sie können durch das Attribut {{SVGAttr("transform")}} rotiert werden.

## Verwendungszusammenhang

{{svginfo}}

## Attribute

- {{SVGAttr("cx")}}
  - : Die x-Position des Mittelpunkts der Ellipse.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("cy")}}
  - : Die y-Position des Mittelpunkts der Ellipse.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("rx")}}
  - : Der Radius der Ellipse auf der x-Achse.
    _Wertetyp_: `auto` | [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("ry")}}
  - : Der Radius der Ellipse auf der y-Achse.
    _Wertetyp_: `auto` | [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Dieses Attribut erlaubt es, die Gesamtlänge des Pfades in Benutzereinheiten anzugeben.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: _none_; _Animierbar_: **ja**

> [!NOTE]
> Beginnend mit SVG2 sind `cx`, `cy`, `rx` und `ry` _Geometrie-Eigenschaften_, was bedeutet, dass diese Attribute auch als CSS-Eigenschaften für dieses Element verwendet werden können.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere grundlegende SVG-Formen: **{{ SVGElement('circle') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
