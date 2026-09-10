---
title: <menclose>
slug: Web/MathML/Reference/Element/menclose
l10n:
  sourceCommit: d65519931193d5324b1751ea291824f465f4643f
---

{{Non-standard_header}}

Das [MathML](/de/docs/Web/MathML)-Element **`<menclose>`** rendert seinen Inhalt innerhalb einer umschließenden Notation, die durch das Attribut `notation` festgelegt wird.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

- `notation` {{Non-standard_Inline}}
  - : Eine durch Leerzeichen getrennte Liste von Notationen, die auf die Kindelemente angewendet werden sollen. Die Symbole werden jeweils so gezeichnet, als wären die anderen nicht vorhanden, und können sich daher überlappen. Mögliche Werte sind:

    | Wert                 | Beispielrendering                                                    | Rendering in Ihrem Browser                                                                                                                   | Beschreibung                                                                                                           |
    | -------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (Standard) | ![Beispielrendering für Longdiv.](longdiv.svg)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | Symbol für schriftliche Division                                                                                       |
    | `actuarial`          | ![Beispielrendering für Actuarial.](actuarial.svg)                   | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [versicherungsmathematisches Symbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                 |
    | `box`                | ![Beispielrendering für Box.](box.svg)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Rahmen                                                                                                                 |
    | `roundedbox`         | ![Beispielrendering für Roundedbox.](roundedbox.svg)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | abgerundeter Rahmen                                                                                                    |
    | `circle`             | ![Beispielrendering für Circle.](circle.svg)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Kreis                                                                                                                  |
    | `left`               | ![Beispielrendering für Left.](left.svg)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | Linie links vom Inhalt                                                                                                 |
    | `right`              | ![Beispielrendering für Right.](right.svg)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | Linie rechts vom Inhalt                                                                                                |
    | `top`                | ![Beispielrendering für Top.](top.svg)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | Linie oberhalb des Inhalts                                                                                             |
    | `bottom`             | ![Beispielrendering für Bottom.](bottom.svg)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | Linie unterhalb des Inhalts                                                                                            |
    | `updiagonalstrike`   | ![Beispielrendering für Updiagonalstrike.](updiagonalstrike.svg)     | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | Durchstreichungslinie durch den Inhalt von links unten nach rechts oben                                                |
    | `downdiagonalstrike` | ![Beispielrendering für Downdiagonalstrike.](downdiagonalstrike.svg) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | Durchstreichungslinie durch den Inhalt von links oben nach rechts unten                                                |
    | `verticalstrike`     | ![Beispielrendering für Verticalstrike.](verticalstrike.svg)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | vertikale Durchstreichungslinie durch den Inhalt                                                                       |
    | `horizontalstrike`   | ![Beispielrendering für Horizontalstrike.](horizontalstrike.svg)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | horizontale Durchstreichungslinie durch den Inhalt                                                                     |
    | `madruwb`            | ![Beispielrendering für Madruwb.](madruwb.svg)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [arabisches Fakultätssymbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Beispielrendering für Updiagonalarrow.](updiagonalarrow.svg)       | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | diagonaler Pfeil                                                                                                       |
    | `phasorangle`        | ![Beispielrendering für Phasorangle.](phasorangle.svg)               | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | Zeigerwinkel                                                                                                           |

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

Beispielrendering:

![Die Werte Circle und Box werden gleichzeitig angewendet.](circle-box.svg)

Rendering in Ihrem Browser:

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

Das Element `<menclose>` ist in keiner browserorientierten Spezifikation definiert, aber Sie finden eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_menclose).

## Browser-Kompatibilität

{{Compat}}
