---
title: <tspan>
slug: Web/SVG/Reference/Element/tspan
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<tspan>`** [SVG](/de/docs/Web/SVG)-Element definiert einen Teiltext innerhalb eines {{SVGElement('text')}}-Elements oder eines anderen `<tspan>`-Elements. Es ermöglicht die Anpassung des Stils und/oder der Position dieses Teiltexts nach Bedarf.

> [!NOTE]
> Das `<tspan>`-Element umbricht standardmäßig nicht; um dies zu erreichen, muss es mit der {{CSSXRef("white-space")}} CSS-Eigenschaft gestylt werden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
  - : Die x-Koordinate des Startpunkts der Textbasislinie oder die x-Koordinate jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate des Startpunkts der Textbasislinie oder die y-Koordinate jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("dx")}}
  - : Verschiebt die Textposition horizontal von einem vorherigen Textelement oder verschiebt die Position jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)); _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("dy")}}
  - : Verschiebt die Textposition vertikal von einem vorherigen Textelement oder verschiebt die Position jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)); _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("rotate")}}
  - : Dreht die Ausrichtung jedes einzelnen Glyphs. Kann Glyphen individuell drehen.
    _Wertetyp_: [**\<list-of-number>**](/de/docs/Web/SVG/Guides/Content_type#list-of-ts); _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wie der Text gedehnt oder komprimiert wird, um in die Breite zu passen, die durch das `textLength`-Attribut definiert ist.
    _Wertetyp_: `spacing` | `spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Eine Breite, an die der Text angepasst werden soll.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: _none_; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement)-Schnittstelle.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
  <style>
    text {
      font: italic 12px serif;
    }
    tspan {
      font: bold 10px sans-serif;
      fill: red;
    }
  </style>

  <text x="10" y="30" class="small">
    You are
    <tspan>not</tspan>
    a banana!
  </text>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("white-space", "", "#multiple_lines_in_svg_text_element")}}
