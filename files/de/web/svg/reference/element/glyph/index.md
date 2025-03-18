---
title: <glyph>
slug: Web/SVG/Reference/Element/glyph
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{deprecated_header}}

Das **`<glyph>`** [SVG](/de/docs/Web/SVG) Element definiert ein einzelnes Glyph in einer SVG-Schriftart.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("d")}} {{Deprecated_Inline}}
- {{SVGAttr("horiz-adv-x")}} {{Deprecated_Inline}}
- {{SVGAttr("vert-origin-x")}} {{Deprecated_Inline}}
- {{SVGAttr("vert-origin-y")}} {{Deprecated_Inline}}
- {{SVGAttr("vert-adv-y")}} {{Deprecated_Inline}}
- {{SVGAttr("unicode")}} {{Deprecated_Inline}}
- {{SVGAttr("glyph-name")}} {{Deprecated_Inline}}
- {{SVGAttr("orientation")}} {{Deprecated_Inline}}
- {{SVGAttr("arabic-form")}} {{Deprecated_Inline}}
- {{SVGAttr("lang")}} {{Deprecated_Inline}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGGlyphElement`](/de/docs/Web/API/SVGGlyphElement) Schnittstelle.

## Beispiel

### SVG

```html
<svg
  width="400px"
  height="300px"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Example copied from https://www.w3.org/TR/SVG/fonts.html#GlyphElement -->
  <defs>
    <font id="Font1" horiz-adv-x="1000">
      <font-face
        font-family="Super Sans"
        font-weight="bold"
        font-style="normal"
        units-per-em="1000"
        cap-height="600"
        x-height="400"
        ascent="700"
        descent="300"
        alphabetic="0"
        mathematical="350"
        ideographic="400"
        hanging="500">
        <font-face-src>
          <font-face-name name="Super Sans Bold" />
        </font-face-src>
      </font-face>

      <missing-glyph><path d="M0,0h200v200h-200z" /></missing-glyph>
      <glyph unicode="!" horiz-adv-x="80" d="M0,0h200v200h-200z"></glyph>
      <glyph unicode="@" d="M0,50l100,300l400,100z"></glyph>
    </font>
  </defs>
  <text
    x="100"
    y="100"
    style="font-family: 'Super Sans', Helvetica, sans-serif;
             font-weight: bold; font-style: normal">
    Text using embedded font!
  </text>
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 400, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("font")}}
- {{SVGElement("missing-glyph")}}
- [SVG-Leitfaden: SVG-Schriftarten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_fonts)
