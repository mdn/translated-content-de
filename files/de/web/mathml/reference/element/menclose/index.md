---
title: <menclose>
slug: Web/MathML/Reference/Element/menclose
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{Non-standard_header}}

Das [MathML](/de/docs/Web/MathML)-Element **`<menclose>`** stellt seinen Inhalt innerhalb einer durch das Attribut `notation` festgelegten Umrandung dar.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

- `notation` {{Non-standard_Inline}}
  - : Eine durch Leerzeichen getrennte Liste von Notationen, die auf die Kindelemente angewendet werden. Jedes Symbol wird so gezeichnet, als wären die anderen nicht vorhanden. Daher können sie sich überlappen. Mögliche Werte sind:

    | Wert                 | Beispielhafte Darstellung                                   | Darstellung in Ihrem Browser                                                                                                                 | Beschreibung                                                                                                           |
    | -------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (Standard) | ![Beispiel für longdiv.](longdiv.svg)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Symbol für die schriftliche Division                                                                                   |
    | `actuarial`          | ![Beispiel für actuarial.](actuarial.svg)                   | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [versicherungsmathematisches Symbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                 |
    | `box`                | ![Beispiel für box.](box.svg)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Rechteck                                                                                                               |
    | `roundedbox`         | ![Beispiel für roundedbox.](roundedbox.svg)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | abgerundetes Rechteck                                                                                                  |
    | `circle`             | ![Beispiel für circle.](circle.svg)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreis                                                                                                                  |
    | `left`               | ![Beispiel für left.](left.svg)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Linie links vom Inhalt                                                                                                 |
    | `right`              | ![Beispiel für right.](right.svg)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Linie rechts vom Inhalt                                                                                                |
    | `top`                | ![Beispiel für top.](top.svg)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Linie oberhalb des Inhalts                                                                                             |
    | `bottom`             | ![Beispiel für bottom.](bottom.svg)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Linie unterhalb des Inhalts                                                                                            |
    | `updiagonalstrike`   | ![Beispiel für updiagonalstrike.](updiagonalstrike.svg)     | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | diagonale Durchstreichung von links unten nach rechts oben                                                             |
    | `downdiagonalstrike` | ![Beispiel für downdiagonalstrike.](downdiagonalstrike.svg) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | diagonale Durchstreichung von links oben nach rechts unten                                                             |
    | `verticalstrike`     | ![Beispiel für verticalstrike.](verticalstrike.svg)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | vertikale Durchstreichung des Inhalts                                                                                  |
    | `horizontalstrike`   | ![Beispiel für horizontalstrike.](horizontalstrike.svg)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | horizontale Durchstreichung des Inhalts                                                                                |
    | `madruwb`            | ![Beispiel für madruwb.](madruwb.svg)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [arabisches Fakultätssymbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Beispiel für updiagonalarrow.](updiagonalarrow.svg)       | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | diagonaler Pfeil                                                                                                       |
    | `phasorangle`        | ![Beispiel für phasorangle.](phasorangle.svg)               | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | Phasorwinkel                                                                                                           |

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

![Die Werte circle und box werden gleichzeitig angewendet.](circle-box.svg)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('examples', 700, 200, "", "") }}

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

Das Element `<menclose>` ist in keiner browserorientierten Spezifikation definiert. Eine Beschreibung finden Sie jedoch in [MathML 4](https://w3c.github.io/mathml/#presm_menclose).

## Browser-Kompatibilität

{{Compat}}
