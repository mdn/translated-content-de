---
title: <tspan>
slug: Web/SVG/Element/tspan
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{SVGRef}}

Das SVG-Element **`<tspan>`** definiert einen Untertext innerhalb eines {{SVGElement('text')}}-Elements oder eines anderen `<tspan>`-Elements. Es ermöglicht die Anpassung des Stils und/oder der Position dieses Untertexts bei Bedarf.

> [!NOTE]
> Das `<tspan>`-Element umbricht standardmäßig nicht; um dies zu erreichen, muss es mit der CSS-Eigenschaft {{CSSXRef("white-space")}} gestylt werden.

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

## Attribute

- {{SVGAttr("x")}}
  - : Die x-Koordinate des Startpunkts der Textgrundlinie oder die x-Koordinate eines jeden individuellen Zeichens, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate des Startpunkts der Textgrundlinie oder die y-Koordinate eines jeden individuellen Zeichens, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("dx")}}
  - : Verschiebt die Textposition horizontal ab einem vorherigen Textelement oder verschiebt die Position eines jeden individuellen Zeichens, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)); _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("dy")}}
  - : Verschiebt die Textposition vertikal ab einem vorherigen Textelement oder verschiebt die Position eines jeden individuellen Zeichens, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)); _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("rotate")}}
  - : Dreht die Orientierung jedes individuellen Zeichens. Kann Zeichen individuell drehen.
    _Wertetyp_: [**\<list-of-number>**](/de/docs/Web/SVG/Content_type#list-of-ts); _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wie der Text gedehnt oder gestaucht wird, um in die Breite zu passen, die durch das `textLength`-Attribut definiert wird.
    _Wertetyp_: `spacing`|`spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Eine Breite, auf die der Text skaliert werden soll.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage); _Standardwert_: _none_; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("white-space", "", "#multiple_lines_in_svg_text_element")}}
