---
title: <textPath>
slug: Web/SVG/Reference/Element/textPath
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Das **`<textPath>`**-Element von [SVG](/de/docs/Web/SVG) wird verwendet, um Text entlang der Form eines {{SVGElement("path")}}-Elements darzustellen.
Der Text muss vom `<textPath>`-Element umschlossen sein. Dessen {{SVGAttr("href")}}-Attribut verweist auf den gewünschten `<path>`.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("href")}}
  - : Die URL zum Pfad oder zur Grundform, entlang derer der Text dargestellt werden soll. Wenn das `path`-Attribut gesetzt ist, hat `href` keine Wirkung.
    _Wertetyp_: [**\<URL>**](/de/docs/Web/SVG/Guides/Content_type#url); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("lengthAdjust")}}
  - : Legt fest, worauf die Längenanpassung des Textes angewendet wird: auf den Abstand zwischen den Glyphen oder sowohl auf den Abstand als auch auf die Glyphen selbst.
    _Wertetyp_: `spacing` | `spacingAndGlyphs`; _Standardwert_: `spacing`; _Animierbar_: **ja**
- {{SVGAttr("method")}}
  - : Legt fest, mit welcher Methode einzelne Glyphen entlang des Pfads dargestellt werden.
    _Wertetyp_: `align` | `stretch`; _Standardwert_: `align`; _Animierbar_: **ja**
- {{SVGAttr("path")}}
  - : Der Pfad, entlang dessen der Text dargestellt werden soll.
    _Wertetyp_: [**\<path_data>**](/de/docs/Web/SVG/Reference/Attribute/path#path-data); _Standardwert_: keiner; _Animierbar_: **ja**
- {{SVGAttr("side")}} {{Experimental_Inline}}
  - : Legt fest, auf welcher Seite des Pfads der Text dargestellt werden soll.
    _Wertetyp_: `left` | `right`; _Standardwert_: `left`; _Animierbar_: **ja**
- {{SVGAttr("spacing")}}
  - : Legt fest, wie der Abstand zwischen Glyphen gehandhabt wird.
    _Wertetyp_: `auto` | `exact`; _Standardwert_: `exact`; _Animierbar_: **ja**
- {{SVGAttr("startOffset")}}
  - : Legt fest, wie weit der Textanfang vom Anfang des Pfads versetzt sein soll.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("textLength")}}
  - : Die Breite des Bereichs, in dem der Text dargestellt wird.
    _Wertetyp_: [**\<length>**](/de/docs/Web/SVG/Guides/Content_type#length) | [**\<percentage>**](/de/docs/Web/SVG/Guides/Content_type#percentage) | [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number); _Standardwert_: _auto_; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement).

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
