---
title: <feMorphology>
slug: Web/SVG/Reference/Element/feMorphology
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

Das **`<feMorphology>`** [SVG](/de/docs/Web/SVG) Filter-Primitiv wird verwendet, um das Eingabebild zu erodieren oder zu verdicken. Seine Nützlichkeit besteht insbesondere in der Erzeugung von Verbreiterungs- oder Verdünnungseffekten.

Wie andere Filter-Primitiven behandelt es Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}}. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("operator")}}
- {{SVGAttr("radius")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement) Schnittstelle.

## Beispiele

### SVG-Inhalt filtern

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180">
  <filter id="erode">
    <feMorphology operator="erode" radius="1" />
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="2" />
  </filter>
  <text y="1em">Normal text</text>
  <text id="thin" y="2em">Thinned text</text>
  <text id="thick" y="3em">Fattened text</text>
</svg>
```

#### CSS

```css
text {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 3em;
}

#thin {
  filter: url("#erode");
}

#thick {
  filter: url("#dilate");
}
```

{{EmbedLiveSample("Filtering_SVG_content", 340, 180)}}

### HTML-Inhalt filtern

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
  <filter id="erode">
    <feMorphology operator="erode" radius="1" />
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="2" />
  </filter>
</svg>

<p>Normal text</p>
<p id="thin">Thinned text</p>
<p id="thick">Fattened text</p>
```

#### CSS

```css
p {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 3em;
}

#thin {
  filter: url("#erode");
}

#thick {
  filter: url("#dilate");
}
```

{{EmbedLiveSample("Filtering_HTML_content", 340, 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
