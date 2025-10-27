---
title: <feConvolveMatrix>
slug: Web/SVG/Reference/Element/feConvolveMatrix
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

Das **`<feConvolveMatrix>`** [SVG](/de/docs/Web/SVG) Filterprimitive wendet einen Matrix-Faltungseffekt an. Eine Faltung kombiniert Pixel im Eingabebild mit benachbarten Pixeln, um ein resultierendes Bild zu erzeugen. Eine Vielzahl von Bildoperationen kann durch Faltungen erreicht werden, einschließlich Weichzeichnung, Kantenerkennung, Schärfung, Prägung und Abkantung.

Eine Matrixfaltung basiert auf einer n-mal-m-Matrix (dem Faltungskern), die beschreibt, wie ein bestimmter Pixelwert im Eingabebild mit seinen benachbarten Pixelwerten kombiniert wird, um einen resultierenden Pixelwert zu erzeugen. Jeder resultierende Pixel wird bestimmt, indem die Kernmatrix auf den entsprechenden Quellpixel und seine benachbarten Pixel angewendet wird. Die grundlegende Faltungsformel, die auf jeden Farbwert für einen bestimmten Pixel angewendet wird, ist:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><msub><mi>color</mi><mrow><mi>X</mi><mi>,</mi><mi>Y</mi></mrow></msub><mo stretchy="false">=</mo><mrow><mfrac><mrow><mrow><mrow><munderover><mo stretchy="false">∑</mo><mrow><mrow><mi>i</mi><mo stretchy="false">=</mo><mn>0</mn></mrow></mrow><mrow><mrow><mi>orderY</mi><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></munderover><mrow><munderover><mo stretchy="false">∑</mo><mrow><mrow><mi>j</mi><mo stretchy="false">=</mo><mn>0</mn></mrow></mrow><mrow><mrow><mi>orderX</mi><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></munderover><msub><mi>source</mi><mrow><mrow><mrow><mi>x</mi><mo stretchy="false">−</mo><mi>targetX</mi></mrow><mo stretchy="false">+</mo><mi>j</mi></mrow><mi>,</mi><mrow><mrow><mi>y</mi><mo stretchy="false">−</mo><mi mathvariant="italic">targetY</mi></mrow><mo stretchy="false">+</mo><mi>i</mi></mrow></mrow></msub></mrow></mrow><mo stretchy="false">⋅</mo><msub><mi>kernelMatrix</mi><mrow><mrow><mrow><mi>orderX</mi><mo stretchy="false">−</mo><mi>j</mi></mrow><mo stretchy="false">−</mo><mn>1,</mn></mrow><mrow><mrow><mi>orderY</mi><mo stretchy="false">−</mo><mi>i</mi></mrow><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></msub></mrow></mrow><mrow><mi>divisor</mi></mrow></mfrac><mo stretchy="false">+</mo><mrow><mi>bias</mi><mo stretchy="false">⋅</mo><msub><mi>alpha</mi><mrow><mi>x</mi><mi>,</mi><mi>y</mi></mrow></msub></mrow></mrow></mrow></mrow><annotation encoding="TeX">\left(color\right)_{X , Y} = \frac{\sum_{i = 0}^{orderY - 1} \sum_{j = 0}^{orderX - 1} \left(source\right)_{x - targetX + j , y - \mathit{targetY} + i} \cdot \left(kernelMatrix\right)_{orderX - j - 1, orderY - i - 1}}{divisor} + bias \cdot \left(alpha\right)_{x , y}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

wobei „orderX“ und „orderY“ die X- und Y-Werte für das [`order`](/de/docs/Web/SVG/Reference/Attribute/order) Attribut darstellen und die anderen Variablen sich auf die Attribute [`targetX`](/de/docs/Web/SVG/Reference/Attribute/targetX), [`targetY`](/de/docs/Web/SVG/Reference/Attribute/targetY), [`kernelMatrix`](/de/docs/Web/SVG/Reference/Attribute/kernelMatrix), [`divisor`](/de/docs/Web/SVG/Reference/Attribute/divisor) und [`bias`](/de/docs/Web/SVG/Reference/Attribute/bias) beziehen.

Beachten Sie in den obigen Formeln, dass die Werte in der Kernmatrix so angewendet werden, dass die Kernmatrix relativ zu den Quell- und Zielbildern um 180 Grad gedreht wird, um mit der Faltungstheorie übereinzustimmen, wie sie in vielen Computer-Grafik-Lehrbüchern beschrieben wird.

Um dies zu veranschaulichen, nehmen Sie an, Sie haben ein Eingabebild, das 5 Pixel mal 5 Pixel groß ist, dessen Farbwerte für einen der Farbkanäle wie folgt sind:

```plain
0    20  40 235 235
100 120 140 235 235
200 220 240 235 235
225 225 255 255 255
225 225 255 255 255
```

und Sie definieren einen 3-mal-3-Faltungskern wie folgt:

```plain
1 2 3
4 5 6
7 8 9
```

Konzentrieren wir uns auf den Farbwert in der zweiten Reihe und der zweiten Spalte des Bildes (Quellpixelwert ist 120). Unter Annahme des einfachsten Falls (bei dem das Pixelraster des Eingabebildes perfekt mit dem Pixelraster des Kerns übereinstimmt) und Annahme von Standardwerten für die Attribute [`divisor`](/de/docs/Web/SVG/Reference/Attribute/divisor), [`targetX`](/de/docs/Web/SVG/Reference/Attribute/targetX) und [`targetY`](/de/docs/Web/SVG/Reference/Attribute/targetY), wird der resultierende Farbwert sein:

```plain
(9*0   + 8*20  + 7*40 +
 6*100 + 5*120 + 4*140 +
 3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)
```

Wie bei anderen Filter-Primitives werden die Farbkomponenten standardmäßig im `linearRGB` {{Glossary("color_space", "Farbraum")}} behandelt. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu nutzen.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}
- {{SVGAttr("order")}}
- {{SVGAttr("kernelMatrix")}}
- {{SVGAttr("divisor")}}
- {{SVGAttr("bias")}}
- {{SVGAttr("targetX")}}
- {{SVGAttr("targetY")}}
- {{SVGAttr("edgeMode")}}
- {{SVGAttr("kernelUnitLength")}}
- {{SVGAttr("preserveAlpha")}}
- [Filterprimitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement) Schnittstelle.

## Beispiel

### SVG

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="emboss">
      <feConvolveMatrix
        kernelMatrix="3 0 0
                      0 0 0
                      0 0 -3" />
    </filter>
  </defs>

  <image
    href="mdn.svg"
    x="0"
    y="0"
    height="200"
    width="200"
    filter="url(#emboss)" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 210)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes_presentation_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG Anleitung: Filter-Effekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
