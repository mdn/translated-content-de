---
title: "`background-repeat` CSS property"
short-title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achse wiederholt werden oder gar nicht.

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

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei [`<repeat-style>`](#werte) Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Wenn zwei Werte angegeben sind, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird sowohl horizontal als auch vertikal wiederholt, um den gesamten Hintergrundbereich abzudecken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder zugeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundbereichs und dem entsprechenden {{cssxref("background-size")}} Wert ab.

Die sich wiederholenden Bilder können gleichmäßig beabstandet sein, um sicherzustellen, dass das wiederholte Bild sein Seitenverhältnis beibehält, ohne zugeschnitten zu werden. Mit dem Wert `space`, wenn der Hintergrundbereich ein anderes Seitenverhältnis als das Bild hat oder ansonsten keine Größe, die ein Vielfaches der Hintergrundgröße in beide Richtungen ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild ohne Zuschnitt gestreckt werden, um den gesamten Bereich abzudecken. Mit `round` wird das wiederholte Bild so gestreckt, dass es den gesamten verfügbaren Raum füllt, bis Platz für ein zusätzliches wiederholtes Bild ist, wenn das Seitenverhältnis des Hintergrundbilds nicht mit dem des Malbereichs übereinstimmt. Zum Beispiel, bei einem Hintergrundbild von 100px x 100px und einem Hintergrundbereich von 1099px x 750px wird das Bild 10 Mal in horizontaler Richtung und 7 Mal vertikal wiederholt, was insgesamt 70 Wiederholungen ergibt, wobei jedes Bild in beide Richtungen auf 109,9px x 105px gedehnt wird, das Seitenverhältnis des Bildes ändert und es möglicherweise verzerrt. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal, was insgesamt 77 Bildwiederholungen ergibt, wobei jedes Bild nur in vertikaler Richtung auf 100px Breite und 105px Höhe gestreckt wird.

## Werte

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei `<repeat-style>` Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Richtungen angewendet. Die Werte umfassen:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundbild-Malbereich abzudecken, wobei das Randbild zugeschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbilds ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbild-Malbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wie möglich wiederholt, ohne zugeschnitten zu werden. Die ersten und letzten Bilder werden an beiden Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("background-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Zuschnitt angezeigt werden. Das einzige Szenario, in dem mit `space` zugeschnitten wird, ist, wenn nicht genug Platz ist, um ein Bild anzuzeigen.

- `round`
  - : Wenn der verfügbare Platz größer wird, werden die wiederholten Bilder (ohne Lücken) gedehnt, bis Platz für ein zusätzliches hinzugefügt werden kann. Dies ist der einzige `<repeat-style>` Wert, der zur Verzerrung des Hintergrundbildes führen kann {{Glossary("aspect_ratio", "Seitenverhältnis")}}, was der Fall sein wird, wenn das Seitenverhältnis des Hintergrundbilds von dem des Malbereichs abweicht.

- `repeat-x`
  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild zugeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbilds ist.

- `repeat-y`
  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild zugeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbilds ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben ist, ist der Wert eine Kurzform für die folgende Zweifach-Wertsatz-Syntax:

| Einzelwert  | Zweifach-Wert-Äquivalent |
| ----------- | ------------------------ |
| `repeat-x`  | `repeat no-repeat`       |
| `repeat-y`  | `no-repeat repeat`       |
| `repeat`    | `repeat repeat`          |
| `space`     | `space space`            |
| `round`     | `round round`            |
| `no-repeat` | `no-repeat no-repeat`    |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### `background-repeat` festlegen

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

In diesem Beispiel wird jeder Listeneintrag mit einem anderen Wert von `background-repeat` abgeglichen.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}} Kurzformkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwenden mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
