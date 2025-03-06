---
title: <menclose>
slug: Web/MathML/Element/menclose
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}{{Non-standard_header}}

Das **`<menclose>`** [MathML](/de/docs/Web/MathML) Element rendert seinen Inhalt in einer umgebenden Notation, die durch das `notation`-Attribut angegeben wird.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `notation` {{Non-standard_Inline}}

  - : Eine Liste von Notationen, getrennt durch Leerzeichen, die auf die Kindelemente angewendet werden sollen. Die Symbole werden jeweils gezeichnet, als ob die anderen nicht vorhanden wären, und können daher überlappen. Mögliche Werte sind:

    | Wert                 | Beispiel-Rendierung                                                   | Darstellung im Browser                                                                                                                       | Beschreibung                                                                                                           |
    | -------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (default)  | ![Beispiel-Rendering für Longdiv.](longdiv.svg)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Symbol für lange Division                                                                                              |
    | `actuarial`          | ![Beispiel-Rendering für Actuarial.](actuarial.svg)                   | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [Versicherungssymbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                                |
    | `box`                | ![Beispiel-Rendering für Box.](box.svg)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Box                                                                                                                    |
    | `roundedbox`         | ![Beispiel-Rendering für Roundedbox.](roundedbox.svg)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | Abgerundete Box                                                                                                        |
    | `circle`             | ![Beispiel-Rendering für Circle.](circle.svg)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreis                                                                                                                  |
    | `left`               | ![Beispiel-Rendering für Left.](left.svg)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Linie links vom Inhalt                                                                                                 |
    | `right`              | ![Beispiel-Rendering für Right.](right.svg)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Linie rechts vom Inhalt                                                                                                |
    | `top`                | ![Beispiel-Rendering für Top.](top.svg)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Linie über dem Inhalt                                                                                                  |
    | `bottom`             | ![Beispiel-Rendering für Bottom.](bottom.svg)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Linie unter dem Inhalt                                                                                                 |
    | `updiagonalstrike`   | ![Beispiel-Rendering für Updiagonalstrike.](updiagonalstrike.svg)     | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Durchstreichlinie von unten links nach oben rechts                                                                     |
    | `downdiagonalstrike` | ![Beispiel-Rendering für Downdiagonalstrike.](downdiagonalstrike.svg) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Durchstreichlinie von oben links nach unten rechts                                                                     |
    | `verticalstrike`     | ![Beispiel-Rendering für Verticalstrike.](verticalstrike.svg)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | Vertikale Durchstreichlinie durch den Inhalt                                                                           |
    | `horizontalstrike`   | ![Beispiel-Rendering für Horizontalstrike.](horizontalstrike.svg)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Horizontale Durchstreichlinie durch den Inhalt                                                                         |
    | `madruwb`            | ![Beispiel-Rendering für Madruwb.](madruwb.svg)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabisches Faktorialsymbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Beispiel-Rendering für Madruwb.](updiagonalarrow.svg)               | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | Diagonaler Pfeil                                                                                                       |
    | `phasorangle`        | ![Beispiel-Rendering für Phasorangle.](phasorangle.svg)               | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | Zeigerwinkel                                                                                                           |

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

Beispiel-Rendering:

![Kreis und Box-Werte gleichzeitig angewendet.](circle-box.svg)

Darstellung im Browser:

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

Das `<menclose>`-Element ist in keiner browserorientierten Spezifikation definiert, aber Sie finden eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_menclose).

## Browser-Kompatibilität

{{Compat}}
