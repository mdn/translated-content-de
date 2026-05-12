---
title: "`background-repeat` CSS property"
short-title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: 3d7f42187a7b92addbcf8b35a8e382b79da00dfe
---

Die **`background-repeat`**-Eigenschaft in [CSS](/de/docs/Web/CSS) legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen oder gar nicht wiederholt werden.

{{InteractiveExample("CSS Demo: background-repeat")}}

```css interactive-example-choice
background-repeat: repeat-x;
```

```css interactive-example-choice
background-repeat: repeat;
```

```css interactive-example-choice
background-repeat: space;
```

```css interactive-example-choice
background-repeat: round;
```

```css interactive-example-choice
background-repeat: no-repeat;
```

```css interactive-example-choice
background-repeat: space repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") center /
    120px;
  min-width: 100%;
  min-height: 100%;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("background-repeat-x")}}
- {{cssxref("background-repeat-y")}}

## Syntax

```css
/* Keyword values */
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Global values */
background-repeat: inherit;
background-repeat: initial;
background-repeat: revert;
background-repeat: revert-layer;
background-repeat: unset;
```

## Beschreibung

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei [`<repeat-style>`](#werte) Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Wenn zwei Werte angegeben sind, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite das vertikale Verhalten. Mit den Eigenschaftswerten kann festgelegt werden, ob das Bild nur horizontal, vertikal oder gar nicht wiederholt wird.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird sowohl horizontal als auch vertikal wiederholt, um den gesamten Hintergrundbereich abzudecken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder beschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}}-Eigenschaft ab. Wie oft sie wiederholt werden und wie stark die Bilder am Rand beschnitten werden, hängt von der Größe des Hintergrundbereichs und dem entsprechenden {{cssxref("background-size")}}-Wert ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, wobei sichergestellt wird, dass das wiederholte Bild sein Seitenverhältnis beibehält, ohne beschnitten zu werden. Mit dem `space`-Wert, wenn der Hintergrundbereich ein anderes Seitenverhältnis als das Bild hat oder nicht anderweitig eine Größe hat, die ein Vielfaches der Hintergrundgröße in einer der Richtungen ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gedehnt werden, um den gesamten Bereich ohne Zuschneiden abzudecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Platz auszufüllen, bis Platz für ein weiteres Bild vorhanden ist, wenn das Seitenverhältnis des Hintergrundbilds nicht dasselbe ist wie das Seitenverhältnis des Malbereichs. Beispielsweise, wenn ein Hintergrundbild 100px x 100px und ein Hintergrundbereich 1099px x 750px ist, wird das Bild 10-mal in horizontaler Richtung und 7-mal vertikal wiederholt, insgesamt 70 Wiederholungen, wobei jedes Bild in beiden Richtungen auf 109,9px x 105px gedehnt wird, was das Seitenverhältnis des Bildes verändert und möglicherweise verzerrt. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal für insgesamt 77 Bildwiederholungen, wobei jedes Bild nur in vertikaler Richtung auf 100px Breite und 105px Höhe gestreckt gemalt wird.

## Werte

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei `<repeat-style>` Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Achsen angewendet. Die Werte umfassen:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundbereich abzudecken, wobei das Randbild abgeschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbereich nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die {{cssxref("background-position")}}-Eigenschaft bestimmt.

- `space`
  - : Das Bild wird so oft wie möglich ohne Zuschneiden wiederholt. Das erste und letzte Bild sind an beiden Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}}-Eigenschaft wird ignoriert, es sei denn, nur ein Bild kann ohne Zuschneiden angezeigt werden. Die einzige Situation, in der bei Verwendung von `space` beschnitten wird, ist, wenn nicht genug Platz ist, um ein Bild anzuzeigen.

- `round`
  - : Wenn der verfügbare Platz zunimmt, werden die wiederholten Bilder gestreckt (und hinterlassen keine Lücken), bis Platz für ein weiteres hinzugefügt werden kann. Dies ist der einzige `<repeat-style>`-Wert, der zu einer Verzerrung des Hintergrundbild-Seitenverhältnisses führen kann, die auftreten wird, wenn das Seitenverhältnis des Hintergrundbilds von dem des Hintergrundmalbereichs abweicht.

- `repeat-x`
  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`
  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben ist, ist der Wert eine Kurzform für die folgende Zweitwertsyntax:

| Einzelwert  | Zweitwert-Entsprechung |
| ----------- | ---------------------- |
| `repeat-x`  | `repeat no-repeat`     |
| `repeat-y`  | `no-repeat repeat`     |
| `repeat`    | `repeat repeat`        |
| `space`     | `space space`          |
| `round`     | `round round`          |
| `no-repeat` | `no-repeat no-repeat`  |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundwiederholung setzen

#### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="one"></div>
  </li>
  <li>
    repeat
    <div class="two"></div>
  </li>
  <li>
    repeat-x
    <div class="three"></div>
  </li>
  <li>
    repeat-y
    <div class="four"></div>
  </li>
  <li>
    space
    <div class="five"></div>
  </li>
  <li>
    round
    <div class="six"></div>
  </li>
  <li>
    repeat-x, repeat-y (multiple images)
    <div class="seven"></div>
  </li>
</ol>
```

#### CSS

```css
/* Shared for all DIVS in example */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url("star-solid.gif");
  width: 160px;
  height: 70px;
}

/* Background repeats */
.one {
  background-repeat: no-repeat;
}
.two {
  background-repeat: repeat;
}
.three {
  background-repeat: repeat-x;
}
.four {
  background-repeat: repeat-y;
}
.five {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* Multiple images */
.seven {
  background-image:
    url("star-solid.gif"), url("/shared-assets/images/examples/favicon32.png");
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

#### Ergebnis

In diesem Beispiel erhält jedes Listenelement einen anderen Wert für `background-repeat`.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}}-Kurzformkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Mehrere Hintergründe verwenden](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
