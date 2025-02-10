---
title: <feColorMatrix>
slug: Web/SVG/Element/feColorMatrix
l10n:
  sourceCommit: 332c4375206089fa38609d6d9e3fe2cd7a502f22
---

{{SVGRef}}

Das **`<feColorMatrix>`** [SVG](/de/docs/Web/SVG)-Filterelement ändert Farben basierend auf einer Transformationsmatrix. Die Farbwerte `[R,G,B,A]` jedes Pixels werden durch eine 5x5-Farbmatrix [matrix-multipliziert](https://en.wikipedia.org/wiki/Matrix_multiplication), um neue Farbwerte `[R',G',B',A']` zu erzeugen.

> [!NOTE]
> Das Prime-Symbol **`'`** wird in der Mathematik verwendet, um das Ergebnis einer Transformation anzuzeigen.

```plain
| R' |     | r1 r2 r3 r4 r5 |   | R |
| G' |     | g1 g2 g3 g4 g5 |   | G |
| B' |  =  | b1 b2 b3 b4 b5 | * | B |
| A' |     | a1 a2 a3 a4 a5 |   | A |
| 1  |     | 0  0  0  0  1  |   | 1 |
```

Vereinfacht gesagt, wird jeder Farbkanal im neuen Pixel wie folgt berechnet. Die letzte Zeile wird ignoriert, da ihre Werte konstant sind.

```plain
R' = r1*R + r2*G + r3*B + r4*A + r5
G' = g1*R + g2*G + g3*B + g4*A + g5
B' = b1*R + b2*G + b3*B + b4*A + b5
A' = a1*R + a2*G + a3*B + a4*A + a5
```

Nehmen wir den Anteil des Rotwerts im neuen Pixel, also `R'`:

Dieser ergibt sich durch die Summe von:

- `r1` multipliziert mit dem Rotwert des alten Pixels `R`,
- `r2` multipliziert mit dem Grünwert des alten Pixels `G`,
- `r3` multipliziert mit dem Blauwert des alten Pixels `B`,
- `r4` multipliziert mit dem Alphawert des alten Pixels `A`,
- plus einer Verschiebung `r5`.

Diese angegebenen Werte können beliebige reelle Zahlen sein, jedoch wird der finale **R'** auf Werte zwischen 0 und 1 begrenzt. Dasselbe gilt für **G'**, **B'** und **A'**.

```plain
R'      =      r1 * R      +        r2 * G      +       r3 * B      +       r4 * A       +       r5
New red = [ r1 * old red ] + [ r2 * old green ] + [ r3 * old Blue ] + [ r4 * old Alpha ] + [ shift of r5 ]
```

Wenn wir beispielsweise ein komplett schwarzes Bild röter machen möchten, können wir `r5` eine positive reelle Zahl _x_ zuweisen, wodurch die Rottöne in jedem Pixel des neuen Bildes um _x_ verstärkt werden.

Eine **Einheitsmatrix** sieht so aus:

```plain
     R G B A W
R' | 1 0 0 0 0 |
G' | 0 1 0 0 0 |
B' | 0 0 1 0 0 |
A' | 0 0 0 1 0 |
```

Dabei entspricht jeder neue Wert genau 1-mal dem alten Wert, ohne dass etwas hinzugefügt wird. Es wird empfohlen, bei der Manipulation der Matrix von hier aus zu beginnen.

Wie andere Filterprimitive verwendet dieses Element standardmäßig die Farbräume `linearRGB`. Sie können {{svgattr("color-interpolation-filters")}} verwenden, um stattdessen `sRGB` zu nutzen.

## Einsatzkontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}: Werte umfassen `SourceGraphic`, `SourceAlpha`, `BackgroundImage`, `BackgroundAlpha`, `FillPaint`, `StrokePaint` oder eine Referenz auf ein anderes Filter-Primitive.
- {{SVGAttr("type")}}: Werte umfassen `matrix`, `saturate`, `hueRotate` und `luminanceToAlpha`.
- {{SVGAttr("values")}}: Der Wert für den Matrixtyp, der im `type`-Attribut festgelegt wurde.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Schnittstelle.

## Beispiel

### SVG

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 150 500"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- ref -->
  <defs>
    <g id="circles">
      <circle cx="30" cy="30" r="20" fill="blue" fill-opacity="0.5" />
      <circle cx="20" cy="50" r="20" fill="green" fill-opacity="0.5" />
      <circle cx="40" cy="50" r="20" fill="red" fill-opacity="0.5" />
    </g>
  </defs>
  <use href="#circles" />
  <text x="70" y="50">Reference</text>

  <!-- identity matrix -->
  <filter id="colorMeTheSame">
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 1 0" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 70)"
    filter="url(#colorMeTheSame)" />
  <text x="70" y="120">Identity matrix</text>

  <!-- Combine RGB into green matrix -->
  <filter id="colorMeGreen">
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="0 0 0 0 0
              1 1 1 1 0
              0 0 0 0 0
              0 0 0 1 0" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 140)"
    filter="url(#colorMeGreen)" />
  <text x="70" y="190">rgbToGreen</text>

  <!-- saturate -->
  <filter id="colorMeSaturate">
    <feColorMatrix in="SourceGraphic" type="saturate" values="0.2" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 210)"
    filter="url(#colorMeSaturate)" />
  <text x="70" y="260">saturate</text>

  <!-- hueRotate -->
  <filter id="colorMeHueRotate">
    <feColorMatrix in="SourceGraphic" type="hueRotate" values="180" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 280)"
    filter="url(#colorMeHueRotate)" />
  <text x="70" y="330">hueRotate</text>

  <!-- luminanceToAlpha -->
  <filter id="colorMeLTA">
    <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" />
  </filter>
  <use href="#circles" transform="translate(0 350)" filter="url(#colorMeLTA)" />
  <text x="70" y="400">luminanceToAlpha</text>
</svg>
```

### Ergebnis

{{EmbedLiveSample("Example", "100%", "700")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Filterprimitive-Attribute](/de/docs/Web/SVG/Attribute#filter_primitive_attributes)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
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
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
