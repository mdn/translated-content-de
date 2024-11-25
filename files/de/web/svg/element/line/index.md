---
title: <line>
slug: Web/SVG/Element/line
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<line>`** [SVG](/de/docs/Web/SVG)-Element ist eine grundlegende SVG-Form, die verwendet wird, um eine Linie zwischen zwei Punkten zu zeichnen.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- If you do not specify the stroke
       color the line will not be visible -->
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attribute

- {{SVGAttr('x1')}}
  - : Definiert die x-Achsen-Koordinate des Startpunkts der Linie.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr('x2')}}
  - : Definiert die x-Achsen-Koordinate des Endpunkts der Linie.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr('y1')}}
  - : Definiert die y-Achsen-Koordinate des Startpunkts der Linie.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr('y2')}}
  - : Definiert die y-Achsen-Koordinate des Endpunkts der Linie.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("pathLength")}}
  - : Definiert die gesamte Pfadlänge in Benutzereinheiten.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: _none_; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere grundlegende SVG-Formen: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('polygon') }}, **{{ SVGElement('polyline') }}**, {{ SVGElement('rect') }}
