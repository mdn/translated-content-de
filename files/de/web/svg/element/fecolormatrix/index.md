---
title: <feColorMatrix>
slug: Web/SVG/Element/feColorMatrix
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **`<feColorMatrix>`** SVG-Filterelement ändert die Farben basierend auf einer Transformationsmatrix. Der Farbwert jedes Pixels `[R,G,B,A]` wird durch eine 5x5-Farbmatrix [matrix-multipliziert](https://en.wikipedia.org/wiki/Matrix_multiplication), um neue Farben `[R',G',B',A']` zu erzeugen.

> [!NOTE]
> Das Prim-Zeichen **`'`** wird in der Mathematik verwendet, um das Ergebnis einer Transformation anzuzeigen.

```plain
| R' |     | r1 r2 r3 r4 r5 |   | R |
| G' |     | g1 g2 g3 g4 g5 |   | G |
| B' |  =  | b1 b2 b3 b4 b5 | * | B |
| A' |     | a1 a2 a3 a4 a5 |   | A |
| 1  |     | 0  0  0  0  1  |   | 1 |
```

Vereinfacht ausgedrückt, wird unten gezeigt, wie jeder Farbkanal im neuen Pixel berechnet wird. Die letzte Zeile wird ignoriert, da ihre Werte konstant sind.

```plain
R' = r1*R + r2*G + r3*B + r4*A + r5
G' = g1*R + g2*G + g3*B + g4*A + g5
B' = b1*R + b2*G + b3*B + b4*A + b5
A' = a1*R + a2*G + a3*B + a4*A + a5
```

Nehmen Sie die Menge des Rots im neuen Pixel, oder `R'`:

Es ist die Summe von:

- `r1` mal das Rot des alten Pixels `R`,
- `r2` mal das Grün des alten Pixels `G`,
- `r3` mal das Blau des alten Pixels `B`,
- `r4` mal das Alpha des alten Pixels `A`,
- plus eine Verschiebung `r5`.

Diese angegebenen Mengen können jede reelle Zahl sein, obwohl das finale **R'** zwischen 0 und 1 geklammert wird. Das Gleiche gilt für **G'**, **B'** und **A'**.

```plain
R'      =      r1 * R      +        r2 * G      +       r3 * B      +       r4 * A       +       r5
Neues Rot = [ r1 * altes Rot ] + [ r2 * altes Grün ] + [ r3 * altes Blau ] + [ r4 * altes Alpha ] + [ Verschiebung um r5 ]
```

Wenn wir zum Beispiel ein komplett schwarzes Bild röter machen möchten, können wir das `r5` zu einer positiven reellen Zahl _x_ machen, wodurch alle Pixel des neuen Bildes um _x_ rötlicher werden.

Eine **Einheitsmatrix** sieht so aus:

```plain
     R G B A W
R' | 1 0 0 0 0 |
G' | 0 1 0 0 0 |
B' | 0 0 1 0 0 |
A' | 0 0 0 1 0 |
```

Darin ist jeder neue Wert genau 1-mal sein alter Wert, ohne dass etwas hinzugefügt wurde. Es wird empfohlen, die Matrixmanipulation von hier aus zu beginnen.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("in")}}: Werte umfassen `SourceGraphic`, `SourceAlpha`, `BackgroundImage`, `BackgroundAlpha`, `FillPaint`, `StrokePaint` oder einen Verweis auf eine andere Filterprimitive.
- {{SVGAttr("type")}}: Werte umfassen `matrix`, `saturate`, `hueRotate` und `luminanceToAlpha`.
- {{SVGAttr("values")}}: Der Wert für den im `type`-Attribut festgelegten Matrixtyp.

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("SVGFEColorMatrixElement")}}-Schnittstelle.

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
  <text x="70" y="50">Referenz</text>

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
  <text x="70" y="120">Einheitsmatrix</text>

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

- [SVG-Filter-Primitive-Attribute](/de/docs/Web/SVG/Attribute#filter_primitive_attributes)
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
