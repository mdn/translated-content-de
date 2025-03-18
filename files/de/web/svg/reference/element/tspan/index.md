---
title: <tspan>
slug: Web/SVG/Reference/Element/tspan
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<tspan>`** [SVG](/de/docs/Web/SVG)-Element definiert einen Untertext innerhalb eines {{SVGElement('text')}}-Elements oder eines anderen `<tspan>`-Elements. Es ermöglicht die Anpassung des Stils und/oder der Position dieses Untertextes nach Bedarf.

> [!NOTE]
> Das `<tspan>`-Element umbricht standardmäßig nicht. Um dies zu erreichen, muss es mit der CSS-Eigenschaft {{CSSXRef("white-space")}} gestylt werden.

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
  - : Die x-Koordinate des Startpunkts der Text-Basislinie oder die x-Koordinate jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben wird.
    _Werttyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate des Startpunkts der Text-Basislinie oder die y-Koordinate jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben wird.
    _Werttyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("dx")}}
  - : Verschiebt die Textposition horizontal von einem vorherigen Textelement oder verschiebt die Position jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben wird.
    _Werttyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)) ; _Standardwert_: _keiner_; _Animierbar_: **ja**
- {{SVGAttr("dy")}}
  - : Verschiebt die Textposition vertikal von einem vorherigen Textelement oder verschiebt die Position jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben wird.
    _Werttyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)) ; _Standardwert_: _keiner_; _Animierbar_: **ja**
- {{SVGAttr("rotate")}}
  - : Dreht die Ausrichtung jedes einzelnen Glyphs. Kann Glyphen individuell drehen.
    _Werttyp_: [**\<list-of-number>**](/de/docs/Web/SVG/Guides/Content_type#list-of-ts) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wie der Text gedehnt oder komprimiert wird, um die durch das `textLength`-Attribut definierte Breite zu passen.
    _Werttyp_: `spacing`|`spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Eine Breite, auf die der Text skaliert werden sollte, um sie zu passen.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) ; _Standardwert_: _keiner_; _Animierbar_: **ja**

## Verwendungszusammenhang

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("white-space", "", "#multiple_lines_in_svg_text_element")}}
