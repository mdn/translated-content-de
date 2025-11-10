---
title: <textPath>
slug: Web/SVG/Reference/Element/textPath
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<textPath>`** [SVG](/de/docs/Web/SVG) Element wird verwendet, um Text entlang der Form eines {{SVGElement("path")}} Elements zu rendern. Der Text muss im `<textPath>` Element eingeschlossen sein und das {{SVGAttr("href")}} Attribut wird verwendet, um das gewünschte `<path>` zu referenzieren.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zu dem Pfad oder der Grundform, auf dem der Text gerendert werden soll. Wenn das `path` Attribut gesetzt ist, hat `href` keine Wirkung.
    _Werttyp_: [**\<URL>**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wo die Längenanpassung beim Text angewendet werden soll: der Raum zwischen den Glyphen oder sowohl der Raum als auch die Glyphen selbst.
    _Werttyp_: `spacing` | `spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("method")}}
  - : Die Methode, um einzelne Glyphen entlang des Pfades zu rendern.
    _Werttyp_: `align` | `stretch`; _Standardwert_: `align`; _Animierbar_: **ja**
- {{SVGAttr("path")}} {{Experimental_Inline}}
  - : Der Pfad, auf dem der Text gerendert werden soll.
    _Werttyp_: [**\<path_data>**](/de/docs/Web/SVG/Reference/Attribute/path#path-data); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("side")}} {{Experimental_Inline}}
  - : Welche Seite des Pfades der Text gerendert werden soll.
    _Werttyp_: `left` | `right`; _Standardwert_: `left`; _Animierbar_: **ja**
- {{SVGAttr("spacing")}}
  - : Wie der Raum zwischen den Glyphen gehandhabt werden soll.
    _Werttyp_: `auto` | `exact`; _Standardwert_: `exact`; _Animierbar_: **ja**
- {{SVGAttr("startOffset")}}
  - : Wie weit der Anfang des Textes vom Anfang des Pfades versetzt werden soll.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Die Breite des Raumes, in den der Text gerendert wird.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: _auto_; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement) Schnittstelle.

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
  <!-- to hide the path, it is usually wrapped in a <defs> element -->
  <!-- <defs> -->
  <path
    id="MyPath"
    fill="none"
    stroke="red"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  <!-- </defs> -->

  <text>
    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
  </text>
</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
