---
title: <symbol>
slug: Web/SVG/Element/symbol
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<symbol>`** Element wird verwendet, um grafische Vorlagenobjekte zu definieren, die durch ein {{SVGElement("use")}} Element instanziiert werden können.

Die Verwendung von `<symbol>` Elementen für Grafiken, die mehrmals im selben Dokument verwendet werden, fügt Struktur und Semantik hinzu. Dokumente, die reich an Struktur sind, können grafisch, als Sprache oder als Braille dargestellt werden, was die Zugänglichkeit fördert.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg">
  <!-- Our symbol in its own coordinate system -->
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>

  <!-- A grid to materialize our symbol positioning -->
  <path
    d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20"
    fill="none"
    stroke="pink" />

  <!-- All instances of our symbol -->
  <use href="#myDot" x="5" y="5" style="opacity:1.0" />
  <use href="#myDot" x="20" y="5" style="opacity:0.8" />
  <use href="#myDot" x="35" y="5" style="opacity:0.6" />
  <use href="#myDot" x="50" y="5" style="opacity:0.4" />
  <use href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attribute

- {{SVGAttr("height")}}
  - : Dieses Attribut bestimmt die Höhe des Symbols.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("preserveAspectRatio")}}
  - : Dieses Attribut definiert, wie das svg-Fragment verzerrt werden muss, wenn es in einem Container mit einem anderen [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) eingebettet ist.
    _Werttyp_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Standardwert_: `xMidYMid meet`; _Animierbar_: **ja**
- {{SVGAttr("refX")}}
  - : Dieses Attribut bestimmt die x-Koordinate des Referenzpunkts des Symbols.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)|`left`|`center`|`right` ; _Standardwert_: None; _Animierbar_: **ja**
- {{SVGAttr("refY")}}
  - : Dieses Attribut bestimmt die y-Koordinate des Referenzpunkts des Symbols.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage)|`top`|`center`|`bottom` ; _Standardwert_: None; _Animierbar_: **ja**
- {{SVGAttr("viewBox")}}
  - : Dieses Attribut definiert die Begrenzung des SVG-Anzeigebereichs für das aktuelle Symbol.
    _Werttyp_: **[\<list-of-numbers>](/de/docs/Web/SVG/Content_type#list-of-ts)** ; _Standardwert_: none; _Animierbar_: **ja**
- {{SVGAttr("width")}}
  - : Dieses Attribut bestimmt die Breite des Symbols.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `auto`; _Animierbar_: **ja**
- {{SVGAttr("x")}}
  - : Dieses Attribut bestimmt die x-Koordinate des Symbols.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**
- {{SVGAttr("y")}}
  - : Dieses Attribut bestimmt die y-Koordinate des Symbols.
    _Werttyp_: [**\<length>**](/de/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/de/docs/Web/SVG/Content_type#percentage) ; _Standardwert_: `0`; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

> [!NOTE]
> Ein `<symbol>` Element selbst ist nicht zur Darstellung gedacht. Nur Instanzen eines `<symbol>` Elements (d.h. eine Referenz zu einem `<symbol>` durch ein {{SVGElement("use")}} Element) werden dargestellt. Das bedeutet, dass einige Browser sich weigern könnten, ein `<symbol>` Element direkt anzuzeigen, selbst wenn das CSS {{cssxref('display')}}-Eigenschaft etwas anderes angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
