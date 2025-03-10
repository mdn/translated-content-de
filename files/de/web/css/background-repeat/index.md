---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achse wiederholt oder gar nicht wiederholt werden.

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
  background: #ccc url("/shared-assets/images/examples/moon.jpg") center / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

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

Die Eigenschaft akzeptiert zwei [`<repeat-style>`](#werte) Schlüsselwörter oder ein Schlüsselwort als Kurzform für die beiden Werte. Wenn zwei Werte angegeben werden, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei, wiederholt sich sowohl horizontal als auch vertikal, um den gesamten Hintergrundbereich zu bedecken, wobei Randbilder an die Größe des Elements angepasst werden. Welche Ränder beschnitten werden, hängt vom Wert der {{cssxref("background-position")}} ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern beschnitten werden, hängt von der Größe des Hintergrundmalbereichs und der {{cssxref("background-size")}} ab.

Die sich wiederholenden Bilder können gleichmäßig auseinander platziert werden, wodurch das wiederholte Bild sein Seitenverhältnis beibehält, ohne beschnitten zu werden. Mit dem Wert `space`, wenn das Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder aus einem anderen Grund keine Größe, die ein Vielfaches der Hintergrundgröße in einer der Richtungen ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das sich wiederholende Hintergrundbild gedehnt werden, um den gesamten Bereich ohne Kürzung zu bedecken. Mit `round` wird das wiederholte Bild gedehnt, um den gesamten verfügbaren Platz zu füllen, bis es Raum gibt, um ein weiteres wiederholtes Bild hinzuzufügen, wenn das Seitenverhältnis des Hintergrundbilds nicht dasselbe wie das Seitenverhältnis des Malbereichs ist. Zum Beispiel, wenn ein Hintergrundbild 100px x 100px groß ist und ein Hintergrundmalbereich von 1099px x 750px vorhanden ist, wird das Bild 10-mal in horizontaler Richtung und 7-mal vertikal wiederholt, insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen auf 109.9px x 105px gedehnt wird. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein 11tes Bild horizontal für insgesamt 77 Bildwiederholungen, wobei jedes Bild 100px breit und 105px hoch bemalt wird, nur in vertikaler Richtung gedehnt.

## Werte

Die Eigenschaft akzeptiert bis zu zwei `<repeat-style>` Schlüsselwörter. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt wird, wird dieser Wert auf beide Vertices angewendet. Zu den Werten gehören:

- `repeat`

  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundbild-Malbereich zu bedecken, wobei das Randbild beschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbilds ist.

- `no-repeat`

  - : Das Bild wird nicht wiederholt (und daher wird der gesamte Hintergrundbild-Malbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbilds wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`

  - : Das Bild wird so oft wie möglich wiederholt, ohne beschnitten zu werden. Die ersten und letzten Bilder sind an beiden Seiten des Elements fixiert, und der Weißraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}} Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Kürzung angezeigt werden. Der einzige Fall, in dem es mit `space` zu einem Beschnitt kommt, ist, wenn nicht genug Platz ist, um ein Bild anzuzeigen.

- `round`

  - : Wenn der verfügbare Raum größer wird, dehnen sich die sich wiederholenden Bilder (ohne Lücken zu lassen), bis Platz für ein weiteres Bild vorhanden ist. Dies ist der einzige `<repeat-style>` Wert, der zur Verzerrung des Seitenverhältnisses des Hintergrundbilds führen kann, was auftritt, wenn das Seitenverhältnis des Hintergrundbilds von dem des Hintergrundmalbereichs abweicht.

- `repeat-x`

  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild beschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbilds ist.

- `repeat-y`

  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild beschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbilds ist.

Wenn ein `<repeat-style>` Schlüsselwort angegeben wird, ist der Wert Kurzform für die folgende Zwei-Werte-Syntax:

| Einzelwert  | Entsprechende Zwei-Wert-Syntax |
| ----------- | ------------------------------ |
| `repeat-x`  | `repeat no-repeat`             |
| `repeat-y`  | `no-repeat repeat`             |
| `repeat`    | `repeat repeat`                |
| `space`     | `space space`                  |
| `round`     | `round round`                  |
| `no-repeat` | `no-repeat no-repeat`          |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von background-repeat

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
  background-image: url(star-solid.gif);
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
  background-image: url(star-solid.gif), url(favicon32.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

#### Ergebnis

In diesem Beispiel wird jedem Listenelement ein anderer Wert von `background-repeat` zugewiesen.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}} Kurzform-Komponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
