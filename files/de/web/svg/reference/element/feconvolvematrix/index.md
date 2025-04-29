---
title: <feConvolveMatrix>
slug: Web/SVG/Reference/Element/feConvolveMatrix
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

Die **`<feConvolveMatrix>`** [SVG](/de/docs/Web/SVG) Filterprimitive wendet einen Matrix-Faltungseffektfilter an. Eine Faltung kombiniert Pixel im Eingabebild mit benachbarten Pixeln, um ein resultierendes Bild zu erzeugen. Eine Vielzahl von Bildbearbeitungen kann durch Faltungen erreicht werden, einschließlich Weichzeichnen, Kantendetektion, Schärfen, Prägen und Abschrägen.

Eine Matrixfaltung basiert auf einer n-mal-m-Matrix (dem Faltungskern), die beschreibt, wie ein gegebener Pixelwert im Eingabebild mit den benachbarten Pixelwerten kombiniert wird, um einen resultierenden Pixelwert zu erzeugen. Jeder Ergebnis-Pixel wird bestimmt, indem die Kernel-Matrix auf den entsprechenden Quellpixel und seine benachbarten Pixel angewendet wird. Die grundlegende Faltungsformel, die auf jeden Farbwert für einen gegebenen Pixel angewendet wird, lautet:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><msub><mi>color</mi><mrow><mi>X</mi><mi>,</mi><mi>Y</mi></mrow></msub><mo stretchy="false">=</mo><mrow><mfrac><mrow><mrow><mrow><munderover><mo stretchy="false">∑</mo><mrow><mrow><mi>i</mi><mo stretchy="false">=</mo><mn>0</mn></mrow></mrow><mrow><mrow><mi>orderY</mi><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></munderover><mrow><munderover><mo stretchy="false">∑</mo><mrow><mrow><mi>j</mi><mo stretchy="false">=</mo><mn>0</mn></mrow></mrow><mrow><mrow><mi>orderX</mi><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></munderover><msub><mi>source</mi><mrow><mrow><mrow><mi>x</mi><mo stretchy="false">−</mo><mi>targetX</mi></mrow><mo stretchy="false">+</mo><mi>j</mi></mrow><mi>,</mi><mrow><mrow><mi>y</mi><mo stretchy="false">−</mo><mi mathvariant="italic">targetY</mi></mrow><mo stretchy="false">+</mo><mi>i</mi></mrow></mrow></msub></mrow></mrow><mo stretchy="false">⋅</mo><msub><mi>kernelMatrix</mi><mrow><mrow><mrow><mi>orderX</mi><mo stretchy="false">−</mo><mi>j</mi></mrow><mo stretchy="false">−</mo><mn>1,</mn></mrow><mrow><mrow><mi>orderY</mi><mo stretchy="false">−</mo><mi>i</mi></mrow><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></msub></mrow></mrow><mrow><mi>divisor</mi></mrow></mfrac><mo stretchy="false">+</mo><mrow><mi>bias</mi><mo stretchy="false">⋅</mo><msub><mi>alpha</mi><mrow><mi>x</mi><mi>,</mi><mi>y</mi></mrow></msub></mrow></mrow></mrow></mrow><annotation encoding="TeX">\left(color\right)_{X , Y} = \frac{\sum_{i = 0}^{orderY - 1} \sum_{j = 0}^{orderX - 1} \left(source\right)_{x - targetX + j , y - \mathit{targetY} + i} \cdot \left(kernelMatrix\right)_{orderX - j - 1, orderY - i - 1}}{divisor} + bias \cdot \left(alpha\right)_{x , y}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

wobei "orderX" und "orderY" die X- und Y-Werte für das [`order`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute) Attribut darstellen, "targetX" den Wert des [`targetX`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetXAttribute) Attributs darstellt, "targetY" den Wert des [`targetY`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetYAttribute) Attributs darstellt, "kernelMatrix" den Wert des [`kernelMatrix`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementKernelMatrixAttribute) Attributs darstellt, "divisor" den Wert des [`divisor`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementDivisorAttribute) Attributs darstellt, und "bias" den Wert des [`bias`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementBiasAttribute) Attributs darstellt.

Beachten Sie in den obigen Formeln, dass die Werte in der Kernel-Matrix so angewendet werden, dass die Kernel-Matrix um 180 Grad relativ zu den Quell- und Zielbildern gedreht wird, um die Faltungstheorie wie in vielen Computergrafik-Lehrbüchern beschrieben zu entsprechen.

Um zu veranschaulichen, nehmen wir an, Sie haben ein Eingabebild, das 5 mal 5 Pixel groß ist und dessen Farbwerte für einen der Farbkanäle wie folgt sind:

```plain
0    20  40 235 235
100 120 140 235 235
200 220 240 235 235
225 225 255 255 255
225 225 255 255 255
```

und Sie definieren einen 3-mal-3 Faltungskern wie folgt:

```plain
1 2 3
4 5 6
7 8 9
```

Konzentrieren wir uns auf den Farbwert in der zweiten Reihe und zweiten Spalte des Bildes (Quellpixelwert ist 120). Angenommen, der einfachste Fall (wo das Pixelgitter des Eingabebilds perfekt mit dem Pixelgitter des Kernels ausgerichtet ist) und es werden Standardwerte für die Attribute ['divisor'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementDivisorAttribute), ['targetX'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetXAttribute) und ['targetY'](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetYAttribute) angenommen, dann wird der resultierende Farbwert sein:

```plain
(9*0   + 8*20  + 7*40 +
 6*100 + 5*120 + 4*140 +
 3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)
```

Wie andere Filterprimitiven behandelt es Farbkomponenten im `linearRGB` {{Glossary("color_space", "Farbraum")}} standardmäßig. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu verwenden.

## Verwendungskontext

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
    style="filter:url(#emboss);" />
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", 200, 210)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filter_primitive_attributes)
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
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
