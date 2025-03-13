---
title: <menclose>
slug: Web/MathML/Reference/Element/menclose
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{Non-standard_header}}

Das **`<menclose>`** [MathML](/de/docs/Web/MathML)-Element rendert seinen Inhalt innerhalb einer umschließenden Notation, die durch das `notation`-Attribut angegeben wird.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

- `notation` {{Non-standard_Inline}}

  - : Eine Liste von Notationen, durch Leerzeichen getrennt, die auf die Kindelemente angewendet werden. Die Symbole werden jeweils unabhängig voneinander gezeichnet und können sich daher überlappen. Mögliche Werte sind:

    | Wert                 | Beispielhafte Darstellung                                                    | Darstellung in Ihrem Browser                                                                                                                 | Beschreibung                                                                                                             |
    | -------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
    | `longdiv` (Standard) | ![Beispielhafte Darstellung von Longdiv.](longdiv.svg)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Langdivisionssymbol                                                                                                      |
    | `actuarial`          | ![Beispielhafte Darstellung von Actuarial.](actuarial.svg)                   | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [Versicherungsmathematisches Symbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                   |
    | `box`                | ![Beispielhafte Darstellung von Box.](box.svg)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Kasten                                                                                                                   |
    | `roundedbox`         | ![Beispielhafte Darstellung von Roundedbox.](roundedbox.svg)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | Abgerundeter Kasten                                                                                                      |
    | `circle`             | ![Beispielhafte Darstellung von Circle.](circle.svg)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreis                                                                                                                    |
    | `left`               | ![Beispielhafte Darstellung von Left.](left.svg)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Linie links vom Inhalt                                                                                                   |
    | `right`              | ![Beispielhafte Darstellung von Right.](right.svg)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Linie rechts vom Inhalt                                                                                                  |
    | `top`                | ![Beispielhafte Darstellung von Top.](top.svg)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Linie oberhalb des Inhalts                                                                                               |
    | `bottom`             | ![Beispielhafte Darstellung von Bottom.](bottom.svg)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Linie unterhalb des Inhalts                                                                                              |
    | `updiagonalstrike`   | ![Beispielhafte Darstellung von Updiagonalstrike.](updiagonalstrike.svg)     | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Diagonale Durchstreichung von unten links nach oben rechts                                                               |
    | `downdiagonalstrike` | ![Beispielhafte Darstellung von Downdiagonalstrike.](downdiagonalstrike.svg) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Diagonale Durchstreichung von oben links nach unten rechts                                                               |
    | `verticalstrike`     | ![Beispielhafte Darstellung von Verticalstrike.](verticalstrike.svg)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | Vertikale Durchstreichung                                                                                                |
    | `horizontalstrike`   | ![Beispielhafte Darstellung von Horizontalstrike.](horizontalstrike.svg)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Horizontale Durchstreichung                                                                                              |
    | `madruwb`            | ![Beispielhafte Darstellung von Madruwb.](madruwb.svg)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabisches Faktoriellesymbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Beispielhafte Darstellung von Updiagonalarrow.](updiagonalarrow.svg)       | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | Diagonaler Pfeil                                                                                                         |
    | `phasorangle`        | ![Beispielhafte Darstellung von Phasorangle.](phasorangle.svg)               | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | Phasorwinkel                                                                                                             |

## Beispiele

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html
<math display="block">
  <menclose notation="circle box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </menclose>
</math>
```

Beispielhafte Darstellung:

![Kreis- und Kastenwerte gleichzeitig angewendet.](circle-box.svg)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('menclose_example', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

Das `<menclose>`-Element ist in keiner browserorientierten Spezifikation definiert, aber Sie können eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_menclose) finden.

## Browser-Kompatibilität

{{Compat}}
