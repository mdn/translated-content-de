---
title: <textPath>
slug: Web/SVG/Element/textPath
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<textPath>`** [SVG](/de/docs/Web/SVG) Element wird verwendet, um Text entlang der Form eines {{SVGElement("path")}} Elements darzustellen.
Der Text muss im `<textPath>` Element eingeschlossen sein und sein {{SVGAttr("href")}} Attribut wird verwendet, um den gewünschten `<path>` zu referenzieren.

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
  - : Die URL zum Pfad oder zur Grundform, auf der der Text dargestellt werden soll. Wenn das `path` Attribut gesetzt ist, hat `href` keine Wirkung.
    _Wertetyp_: [**\<URL>**](/de/docs/Web/SVG/Content_type#url) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Wo der Längenausgleich auf den Text angewendet werden soll: der Abstand zwischen Glyphen oder sowohl der Abstand als auch die Glyphen selbst.
    _Wertetyp_: `spacing`|`spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("method")}}
  - : Welche Methode verwendet werden soll, um individuelle Glyphen entlang des Pfades darzustellen.
    _Wertetyp_: `align`|`stretch` ; _Standardwert_: `align`; _Animierbar_: **ja**
- {{SVGAttr("path")}} {{Experimental_Inline}}
  - : Der Pfad, auf dem der Text dargestellt werden soll.
    _Wertetyp_: [**\<path_data>**](/de/docs/Web/SVG/Attribute/path#path-data) ; _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("side")}} {{Experimental_Inline}}
  - : Auf welcher Seite des Pfades der Text dargestellt werden soll.
    _Wertetyp_: `left`|`right` ; _Standardwert_: `left`; _Animierbar_: **ja**
- {{SVGAttr("spacing")}}
  - : Wie der Abstand zwischen den Glyphen gehandhabt werden soll.
    _Wertetyp_: `auto`|`exact` ; _Standardwert_: `exact`; _Animierbar_: **ja**
- {{SVGAttr("startOffset")}}
  - : Wie weit der Anfang des Textes vom Anfang des Pfades versetzt werden soll.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Die Breite des Raums, in den der Text dargestellt wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/de/docs/Web/SVG/Content_type#number) ; _Standardwert_: _auto_; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
