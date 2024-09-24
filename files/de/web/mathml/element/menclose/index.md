---
title: <menclose>
slug: Web/MathML/Element/menclose
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{MathMLRef}}{{Non-standard_header}}

Das **`<menclose>`** [MathML](/de/docs/Web/MathML) Element rendert seinen Inhalt innerhalb einer umschließenden Notation, die durch das `notation`-Attribut spezifiziert wird.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `notation` {{Non-standard_Inline}}

  - : Eine Liste von Notationen, getrennt durch Leerzeichen, die auf die Kindelemente angewendet werden. Die Symbole werden jeweils gezeichnet, als ob die anderen nicht vorhanden wären, und können sich daher überlappen. Mögliche Werte sind:

    | Wert                | Beispielhafte Darstellung                                   | Darstellung in Ihrem Browser                                                                                                                  | Beschreibung                                                                                                       |
    | -------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (standard) | ![longdiv](default.png)                                     | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Langes Divisionssymbol                                                                                             |
    | `actuarial`          | ![actuarial](actuarial.png)                                 | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [Aktuarialsymbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                                |
    | `box`                | ![box](box.png)                                             | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Box                                                                                                                 |
    | `roundedbox`         | ![roundedbox](roundedbox.png)                               | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | Abgerundete Box                                                                                                     |
    | `circle`             | ![circle](circle.png)                                       | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreis                                                                                                               |
    | `left`               | ![left](left.png)                                           | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Linie links vom Inhalt                                                                                              |
    | `right`              | ![right](right.png)                                         | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Linie rechts vom Inhalt                                                                                            |
    | `top`                | ![top](top.png)                                             | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Linie oberhalb des Inhalts                                                                                         |
    | `bottom`             | ![bottom](bottom.png)                                       | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Linie unterhalb des Inhalts                                                                                        |
    | `updiagonalstrike`   | ![updiagonalstrike](updiagonalstrike.png)                   | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Durchstreichlinie von unten links nach oben rechts über den Inhalt                                                 |
    | `downdiagonalstrike` | ![downdiagonalstrike](downdiagonalstrike.png)               | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Durchstreichlinie von oben links nach unten rechts über den Inhalt                                                 |
    | `verticalstrike`     | ![verticalstrike](verticalstrike.png)                       | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | Vertikale Durchstreichlinie durch den Inhalt                                                                       |
    | `horizontalstrike`   | ![horizontalstrike](horizontalstrike.png)                   | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Horizontale Durchstreichlinie durch den Inhalt                                                                     |
    | `madruwb`            | ![madruwb](madruwb.png)                                     | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabisches Faktorialsymbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Pfeil, der nach oben und rechts zeigt.](updiagonalarrow.png) | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | Diagonaler Pfeil                                                                                                    |
    | `phasorangle`        | ![Screenshot der Phasorwinkel-Notation](phasorangle.png)   | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | Phasor-Winkel                                                                                                       |

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

Das `<menclose>` Element ist in keiner browserorientierten Spezifikation definiert, aber Sie können eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_menclose) finden.

## Browser-Kompatibilität

{{Compat}}
