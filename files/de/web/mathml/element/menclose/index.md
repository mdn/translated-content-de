---
title: <menclose>
slug: Web/MathML/Element/menclose
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{MathMLRef}}{{Non-standard_header}}

Das **`<menclose>`**-Element von [MathML](/de/docs/Web/MathML) rendert seinen Inhalt innerhalb einer Umrandungsnotation, die durch das `notation`-Attribut festgelegt wird.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `notation` {{Non-standard_Inline}}

  - : Eine Liste von Notationen, getrennt durch Leerzeichen, die auf die Kindelemente angewendet werden sollen. Die Symbole werden jeweils gezeichnet, als ob die anderen nicht vorhanden wären und können daher überlappen. Mögliche Werte sind:

    | Wert                 | Beispiel Rendering                                        | Darstellung in Ihrem Browser                                                                                                                 | Beschreibung                                                                                                           |
    | -------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (Standard) | ![longdiv](default.png)                                   | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Langdivision-Symbol                                                                                                    |
    | `actuarial`          | ![actuarial](actuarial.png)                               | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [Aktuar-Symbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                                      |
    | `box`                | ![box](box.png)                                           | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Kasten                                                                                                                 |
    | `roundedbox`         | ![roundedbox](roundedbox.png)                             | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | Abgerundeter Kasten                                                                                                    |
    | `circle`             | ![circle](circle.png)                                     | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreis                                                                                                                  |
    | `left`               | ![left](left.png)                                         | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Linie links vom Inhalt                                                                                                 |
    | `right`              | ![right](right.png)                                       | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Linie rechts vom Inhalt                                                                                                |
    | `top`                | ![top](top.png)                                           | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Linie über dem Inhalt                                                                                                  |
    | `bottom`             | ![bottom](bottom.png)                                     | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Linie unter dem Inhalt                                                                                                 |
    | `updiagonalstrike`   | ![updiagonalstrike](updiagonalstrike.png)                 | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Diagonaler Strich durch den Inhalt von unten links nach oben rechts                                                    |
    | `downdiagonalstrike` | ![downdiagonalstrike](downdiagonalstrike.png)             | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Diagonaler Strich durch den Inhalt von oben links nach unten rechts                                                    |
    | `verticalstrike`     | ![verticalstrike](verticalstrike.png)                     | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | Vertikaler Strich durch den Inhalt                                                                                     |
    | `horizontalstrike`   | ![horizontalstrike](horizontalstrike.png)                 | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Horizontaler Strich durch den Inhalt                                                                                   |
    | `madruwb`            | ![madruwb](madruwb.png)                                   | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabisches Fakultätssymbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Pfeil nach oben rechts gerichtet.](updiagonalarrow.png) | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | Diagonaler Pfeil                                                                                                       |
    | `phasorangle`        | ![Screenshot der Phasorwinkel-Notation](phasorangle.png)  | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | Phasorwinkel                                                                                                           |

## Beispiele

```html
<math display="block">
  <menclose notation="circle box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </menclose>
</math>
```

{{ EmbedLiveSample('menclose_example', 700, 200, "", "") }}

## Spezifikationen

Das `<menclose>`-Element ist in keiner browserorientierten Spezifikation definiert, aber Sie finden eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_menclose).

## Browser-Kompatibilität

{{Compat}}
