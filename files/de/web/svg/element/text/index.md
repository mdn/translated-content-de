---
title: <text>
slug: Web/SVG/Element/text
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{SVGRef}}

Das SVG **`<text>`**-Element zeichnet ein Grafikelement bestehend aus Text. Es ist möglich, einem `<text>`-Element wie jedem anderen SVG-Grafikelement einen Farbverlauf, ein Muster, einen Schnittpfad, eine Maske oder einen Filter zuzuweisen.

Wenn Text in SVG außerhalb eines `<text>`-Elements enthalten ist, wird er nicht gerendert. Dies ist nicht dasselbe wie ausgeblendet zu sein, da das Festlegen der {{SVGAttr('display')}}-Eigenschaft den Text nicht anzeigt.

> [!NOTE]
> Das `<text>`-Element bricht den Text standardmäßig nicht um. Um dies zu erreichen, muss es mit der {{CSSXRef("white-space")}} CSS-Eigenschaft gestylt werden.

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

    /* Note that the color of the text is set with the    *
     * fill property, the color property is for HTML only */
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
  - : Die x-Koordinate des Startpunkts der Textgrundlinie oder die x-Koordinate jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben ist.
    _Werttyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate des Startpunkts der Textgrundlinie oder die y-Koordinate jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben ist.
    _Werttyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("dx")}}
  - : Verschiebt die Textposition horizontal von einem vorherigen Textelement oder verschiebt die Position jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben ist.
    _Werttyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)) ; _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("dy")}}
  - : Verschiebt die Textposition vertikal von einem vorherigen Textelement oder verschiebt die Position jedes einzelnen Glyphs, wenn eine Liste von Werten angegeben ist.
    _Werttyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)) ; _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("rotate")}}
  - : Dreht die Ausrichtung jedes einzelnen Glyphs. Kann Glyphen individuell drehen.
    _Werttyp_: [**\<list-of-number>**](/de/docs/Web/SVG/Content_type#list-of-ts) ; _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wie der Text gedehnt oder komprimiert wird, um die durch das `textLength`-Attribut definierte Breite anzupassen.
    _Werttyp_: `spacing`|`spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Eine Breite, auf die der Text skaliert werden soll.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: _none_; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Verwandt

- Andere textbezogene SVG-Elemente: **{{SVGElement("tspan")}}**, {{SVGElement("tref")}}

## Siehe auch

- {{CSSXRef("white-space", "", "#multiple_lines_in_svg_text_element")}}
