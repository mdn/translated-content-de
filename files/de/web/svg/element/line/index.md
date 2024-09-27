---
title: <line>
slug: Web/SVG/Element/line
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<line>`** Element ist eine SVG-Grundform, die verwendet wird, um eine Linie zu erzeugen, die zwei Punkte verbindet.

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

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere SVG-Grundformen: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('polygon') }}, **{{ SVGElement('polyline') }}**, {{ SVGElement('rect') }}
