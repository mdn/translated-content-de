---
title: SVG `<text>`-Element
slug: Web/SVG/Element/text
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{SVGRef}}

Das SVG **`<text>`**-Element zeichnet ein Grafikelement, das aus Text besteht. Es ist möglich, einen Farbverlauf, ein Muster, einen Clipping-Pfad, eine Maske oder einen Filter auf `<text>` anzuwenden, wie bei jedem anderen SVG-Grafikelement.

Wenn Text in SVG enthalten ist, aber nicht in einem `<text>`-Element, wird er nicht gerendert. Dies unterscheidet sich davon, standardmäßig verborgen zu sein, da das Festlegen der {{SVGAttr('display')}} Eigenschaft den Text nicht anzeigt.

> [!NOTE]
> Das `<text>`-Element bricht standardmäßig nicht um. Um dies zu erreichen, muss es mit der CSS-Eigenschaft {{CSSXRef("white-space")}} gestaltet werden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
  <style>
    .small {
      font: italic 13px sans-serif;
    }
    .heavy {
      font: bold 30px sans-serif;
    }

    /* Beachten Sie, dass die Farbe des Textes mit der     *
     * fill-Eigenschaft gesetzt wird, die color-Eigenschaft *
     * ist nur für HTML.                                     */
    .Rrrrr {
      font: italic 40px serif;
      fill: red;
    }
  </style>

  <text x="20" y="35" class="small">My</text>
  <text x="40" y="35" class="heavy">cat</text>
  <text x="55" y="55" class="small">is</text>
  <text x="65" y="55" class="Rrrrr">Grumpy!</text>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Attribute

- {{SVGAttr("x")}}
  - : Die x-Koordinate des Ausgangspunkts der Textbasislinie oder die x-Koordinate jedes individuellen Glyphs, wenn eine Liste von Werten angegeben ist.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate des Ausgangspunkts der Textbasislinie oder die y-Koordinate jedes individuellen Glyphs, wenn eine Liste von Werten angegeben ist.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("dx")}}
  - : Verschiebt die Textposition horizontal von einem vorherigen Textelement oder verschiebt die Position jedes individuellen Glyphs, wenn eine Liste von Werten angegeben ist.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)) ; _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("dy")}}
  - : Verschiebt die Textposition vertikal von einem vorherigen Textelement oder verschiebt die Position jedes individuellen Glyphs, wenn eine Liste von Werten angegeben ist.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)) ; _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("rotate")}}
  - : Dreht die Ausrichtung jedes individuellen Glyphs. Kann Glyphen einzeln drehen.
    _Wertetyp_: [**\<list-of-number>**](/de/docs/Web/SVG/Content_type#list-of-ts) ; _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wie der Text gestreckt oder gestaucht wird, um die durch das `textLength`-Attribut definierte Breite anzupassen.
    _Wertetyp_: `spacing`|`spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Eine Breite, auf die der Text skaliert werden soll.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: _none_; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandte Themen

- Andere SVG-textelemente: **{{SVGElement("tspan")}}**, {{SVGElement("tref")}}

## Siehe auch

- {{CSSXRef("white-space", "", "#multiple_lines_in_svg_text_element")}}
