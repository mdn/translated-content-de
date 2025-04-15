---
title: <textPath>
slug: Web/SVG/Reference/Element/textPath
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

Das **`<textPath>`**-[SVG](/de/docs/Web/SVG)-Element wird verwendet, um Text entlang der Form eines {{SVGElement("path")}}-Elements darzustellen. Der Text muss im `<textPath>`-Element eingeschlossen sein und das {{SVGAttr("href")}}-Attribut wird verwendet, um auf den gewünschten `<path>` zu verweisen.

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

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zum Pfad oder zur Grundform, auf der der Text gerendert werden soll. Wenn das `path`-Attribut gesetzt ist, hat `href` keine Wirkung.
    _Wertetyp_: [**\<URL>**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wo die Längenanpassung auf den Text angewendet werden soll: der Abstand zwischen den Glyphen oder sowohl der Abstand als auch die Glyphen selbst.
    _Wertetyp_: `spacing` | `spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("method")}}
  - : Welche Methode verwendet werden soll, um einzelne Glyphen entlang des Pfads darzustellen.
    _Wertetyp_: `align` | `stretch`; _Standardwert_: `align`; _Animierbar_: **ja**
- {{SVGAttr("path")}} {{Experimental_Inline}}
  - : Der Pfad, auf dem der Text gerendert werden soll.
    _Wertetyp_: [**\<path_data>**](/de/docs/Web/SVG/Reference/Attribute/path#path-data); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("side")}} {{Experimental_Inline}}
  - : Welche Seite des Pfads der Text gerendert werden soll.
    _Wertetyp_: `left` | `right`; _Standardwert_: `left`; _Animierbar_: **ja**
- {{SVGAttr("spacing")}}
  - : Wie der Abstand zwischen den Glyphen gehandhabt werden soll.
    _Wertetyp_: `auto` | `exact`; _Standardwert_: `exact`; _Animierbar_: **ja**
- {{SVGAttr("startOffset")}}
  - : Wie weit der Anfang des Textes vom Anfang des Pfads versetzt sein soll.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Die Breite des Raumes, in den der Text gerendert wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: _auto_; _Animierbar_: **ja**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
