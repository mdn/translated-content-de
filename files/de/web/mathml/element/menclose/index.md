---
title: <menclose>
slug: Web/MathML/Element/menclose
l10n:
  sourceCommit: 1053ac81eea471efe2f59f7056af830e422abb52
---

{{MathMLRef}}{{Non-standard_header}}

Das **`<menclose>`** [MathML](/de/docs/Web/MathML)-Element rendert seinen Inhalt innerhalb einer umschließenden Notation, die durch das Attribut `notation` angegeben wird.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `notation` {{Non-standard_Inline}}

  - : Eine Liste von Notationen, getrennt durch Leerzeichen, die auf die Kindelemente angewendet werden. Die Symbole werden jeweils gezeichnet, als ob die anderen nicht vorhanden wären, und können daher überlappen. Mögliche Werte sind:

    | Wert                 | Beispielhafte Darstellung                                              | Darstellung in Ihrem Browser                                                                                                                 | Beschreibung                                                                                                           |
    | -------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (Standard) | ![Beispieldarstellung von Longdiv.](longdiv.svg)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Symbol für lange Division                                                                                              |
    | `actuarial`          | ![Beispieldarstellung von Actuarial.](actuarial.svg)                   | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [Aktuarialsymbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                                    |
    | `box`                | ![Beispieldarstellung von Box.](box.svg)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Kasten                                                                                                                 |
    | `roundedbox`         | ![Beispieldarstellung von Roundedbox.](roundedbox.svg)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | Abgerundeter Kasten                                                                                                    |
    | `circle`             | ![Beispieldarstellung von Circle.](circle.svg)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreis                                                                                                                  |
    | `left`               | ![Beispieldarstellung von Left.](left.svg)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Linie links vom Inhalt                                                                                                 |
    | `right`              | ![Beispieldarstellung von Right.](right.svg)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Linie rechts vom Inhalt                                                                                                |
    | `top`                | ![Beispieldarstellung von Top.](top.svg)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Linie über dem Inhalt                                                                                                  |
    | `bottom`             | ![Beispieldarstellung von Bottom.](bottom.svg)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Linie unter dem Inhalt                                                                                                 |
    | `updiagonalstrike`   | ![Beispieldarstellung von Updiagonalstrike.](updiagonalstrike.svg)     | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Durchstreichlinie von unten links nach oben rechts                                                                     |
    | `downdiagonalstrike` | ![Beispieldarstellung von Downdiagonalstrike.](downdiagonalstrike.svg) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Durchstreichlinie von oben links nach unten rechts                                                                     |
    | `verticalstrike`     | ![Beispieldarstellung von Verticalstrike.](verticalstrike.svg)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | Vertikale Durchstreichlinie durch den Inhalt                                                                           |
    | `horizontalstrike`   | ![Beispieldarstellung von Horizontalstrike.](horizontalstrike.svg)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Horizontale Durchstreichlinie durch den Inhalt                                                                         |
    | `madruwb`            | ![Beispieldarstellung von Madruwb.](madruwb.svg)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabisches Fakultätssymbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Beispieldarstellung von Updiagonalarrow.](updiagonalarrow.svg)       | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | Diagonaler Pfeil                                                                                                       |
    | `phasorangle`        | ![Beispieldarstellung von Phasorangle.](phasorangle.svg)               | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | Phasorwinkel                                                                                                           |

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

Beispieldarstellung:

![Circle and box values applied at the same time.](circle-box.svg)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('menclose_example', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizierte ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

Das `<menclose>`-Element ist in keiner browserorientierten Spezifikation definiert, aber Sie finden eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_menclose).

## Browser-Kompatibilität

{{Compat}}
