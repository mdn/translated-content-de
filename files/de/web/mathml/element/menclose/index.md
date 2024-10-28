---
title: <menclose>
slug: Web/MathML/Element/menclose
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}{{Non-standard_header}}

Das **`<menclose>`** [MathML](/de/docs/Web/MathML) Element rendert seinen Inhalt innerhalb einer umschließenden Notation, die durch das `notation` Attribut angegeben wird.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `notation` {{Non-standard_Inline}}

  - : Eine Liste von Notationen, getrennt durch Leerzeichen, die auf die Kindelemente angewendet werden. Die Symbole werden gezeichnet, als ob die anderen nicht vorhanden sind, und können sich daher überlagern. Mögliche Werte sind:

    | Wert                 | Beispieldarstellung                                               | Darstellung in Ihrem Browser                                                                                                                 | Beschreibung                                                                                                           |
    | -------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (Standard) | ![longdiv](default.png)                                           | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Symbol für lange Division                                                                                              |
    | `actuarial`          | ![actuarial](actuarial.png)                                       | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [Aktuarialsymbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                                    |
    | `box`                | ![box](box.png)                                                   | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Kasten                                                                                                                 |
    | `roundedbox`         | ![roundedbox](roundedbox.png)                                     | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | Abgerundeter Kasten                                                                                                    |
    | `circle`             | ![circle](circle.png)                                             | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreis                                                                                                                  |
    | `left`               | ![left](left.png)                                                 | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Linie links von den Inhalten                                                                                           |
    | `right`              | ![right](right.png)                                               | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Linie rechts von den Inhalten                                                                                          |
    | `top`                | ![top](top.png)                                                   | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Linie über den Inhalten                                                                                                |
    | `bottom`             | ![bottom](bottom.png)                                             | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Linie unter den Inhalten                                                                                               |
    | `updiagonalstrike`   | ![updiagonalstrike](updiagonalstrike.png)                         | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Durchstreichen von unten links nach oben rechts                                                                        |
    | `downdiagonalstrike` | ![downdiagonalstrike](downdiagonalstrike.png)                     | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Durchstreichen von oben links nach unten rechts                                                                        |
    | `verticalstrike`     | ![verticalstrike](verticalstrike.png)                             | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | Vertikale Durchstreichungslinie durch den Inhalt                                                                       |
    | `horizontalstrike`   | ![horizontalstrike](horizontalstrike.png)                         | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Horizontale Durchstreichungslinie durch den Inhalt                                                                     |
    | `madruwb`            | ![madruwb](madruwb.png)                                           | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabisches Faktorialsymbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Diagonalpfeil zeigt nach oben und rechts.](updiagonalarrow.png) | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | Diagonaler Pfeil                                                                                                       |
    | `phasorangle`        | ![Bild der Phasorangle-Notation](phasorangle.png)                 | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | Phasorwinkel                                                                                                           |

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

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

Das `<menclose>` Element ist in keiner browserorientierten Spezifikation definiert, aber Sie können eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_menclose) finden.

## Browser-Kompatibilität

{{Compat}}
