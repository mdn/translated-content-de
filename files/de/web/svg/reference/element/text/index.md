---
title: <text>
slug: Web/SVG/Reference/Element/text
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<text>`** [SVG](/de/docs/Web/SVG)-Element zeichnet ein Grafikelement, das aus Text besteht. Es ist möglich, einen Verlauf, ein Muster, einen Clipping-Pfad, eine Maske oder einen Filter auf `<text>` genauso anzuwenden wie auf jedes andere SVG-Grafikelement.

Wenn Text in SVG enthalten ist, aber nicht innerhalb eines `<text>`-Elements, wird er nicht gerendert. Dies unterscheidet sich davon, standardmäßig versteckt zu sein, da das Setzen der {{SVGAttr('display')}}-Eigenschaft den Text nicht anzeigen wird.

> [!NOTE]
> Das `<text>`-Element umbrecht standardmäßig nicht; um dies zu erreichen, muss es mit der {{CSSXRef("white-space")}}-CSS-Eigenschaft gestylt werden.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("x")}}
  - : Die x-Koordinate des Ausgangspunkts der Textbasislinie oder die x-Koordinate jedes einzelnen Zeichens, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Die y-Koordinate des Ausgangspunkts der Textbasislinie oder die y-Koordinate jedes einzelnen Zeichens, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("dx")}}
  - : Verschiebt die Textposition horizontal von einem vorherigen Textelement oder verschiebt die Position jedes einzelnen Zeichens, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)); _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("dy")}}
  - : Verschiebt die Textposition vertikal von einem vorherigen Textelement oder verschiebt die Position jedes einzelnen Zeichens, wenn eine Liste von Werten angegeben wird.
    _Wertetyp_: Liste von ([**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage)); _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("rotate")}}
  - : Dreht die Ausrichtung jedes einzelnen Zeichens. Kann die Zeichen einzeln rotieren.
    _Wertetyp_: [**\<list-of-number>**](/de/docs/Web/SVG/Guides/Content_type#list-of-ts); _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wie der Text gestreckt oder komprimiert wird, um in die durch das `textLength`-Attribut definierte Breite zu passen.
    _Wertetyp_: `spacing` | `spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Eine Breite, in die der Text skaliert werden soll, um zu passen.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage); _Standardwert_: _none_; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGTextElement`](/de/docs/Web/API/SVGTextElement)-Schnittstelle.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("white-space", "", "#multiple_lines_in_svg_text_element")}}
- {{SVGElement("tspan")}}
