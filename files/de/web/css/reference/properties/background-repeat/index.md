---
title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`background-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen oder gar nicht wiederholt werden.

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei [`<repeat-style>`](#werte)-Schlüsselwörtern oder ein Schlüsselwort als Kurzform für die beiden Werte. Wenn zwei Werte angegeben sind, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird sowohl horizontal als auch vertikal wiederholt, um den gesamten Bereich zu bedecken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder beschnitten werden, hängt vom Wert des entsprechenden {{cssxref("background-position")}}-Werts ab. Wie oft sie wiederholt werden und wie viel die Bilder an den Rändern beschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem entsprechenden {{cssxref("background-size")}}-Wert ab.

Die wiederholten Bilder können gleichmäßig beabstandet sein, wodurch sichergestellt wird, dass das wiederholte Bild sein Seitenverhältnis ohne Beschnitt beibehält. Mit dem Wert `space`, wenn das Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder ansonsten keine Größe hat, die ein Vielfaches der Hintergrundgröße in eine Richtung ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Beschnitt abzudecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Platz auszufüllen, bis Platz für ein zusätzliches wiederholtes Bild vorhanden ist, wenn das Seitenverhältnis des Hintergrundbilds nicht mit dem Seitenverhältnis des Malbereichs identisch ist. Zum Beispiel, bei einem 100px x 100px großen Hintergrundbild und einem 1099px x 750px großen Hintergrundmalbereich wird das Bild 10 Mal in horizontaler Richtung und 7 Mal vertikal wiederholt, insgesamt also 70 Wiederholungen, wobei jedes Bild sowohl horizontal als auch vertikal auf 109,9px x 105px gestreckt wird, was das Seitenverhältnis des Bildes verändert und es möglicherweise verzerrt. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, würde ein 11. Bild horizontal passen, was insgesamt 77 Bildwiederholungen ergibt, wobei jedes Bild in der Breite 100px und in der Höhe 105px groß ist, nur in der vertikalen Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei `<repeat-style>`-Schlüsselwörtern oder ein Schlüsselwort als Kurzform für die beiden Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einziger Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Achsen angewendet. Die Werte umfassen:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wiederholt, wie nötig, um den gesamten Hintergrundbildmalbereich zu bedecken, wobei das Randbild beschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbilds ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbildmalbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die {{cssxref("background-position")}}-CSS-Eigenschaft definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Beschnitt wiederholt. Die ersten und letzten Bilder sind an jeder Seite des Elements befestigt, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}}-Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Beschnitt angezeigt werden. Der einzige Fall, in dem ein Beschnitt mit `space` auftritt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`
  - : Während der verfügbare Platz in der Größe zunimmt, werden die wiederholten Bilder gestreckt (ohne Lücken), bis Platz für ein weiteres hinzugefügt wird. Dies ist der einzige `<repeat-style>`-Wert, der zu einer Verzerrung des Hintergrundbilds aufgrund unterschiedlicher {{Glossary("aspect_ratio", "Seitenverhältnisse")}} führen kann, wenn das Seitenverhältnis des Hintergrundbilds vom Seitenverhältnis des Malbereichs abweicht.

- `repeat-x`
  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild beschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbilds ist.

- `repeat-y`
  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild beschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbilds ist.

Wenn ein `<repeat-style>`-Schlüsselwort angegeben ist, ist der Wert eine Kurzform für die folgende Zwei-Wert-Syntax:

| Einzelwert  | Äquivalent mit zwei Werten |
| ------------ | -------------------------- |
| `repeat-x`   | `repeat no-repeat`         |
| `repeat-y`   | `no-repeat repeat`         |
| `repeat`     | `repeat repeat`            |
| `space`      | `space space`              |
| `round`      | `round round`              |
| `no-repeat`  | `no-repeat no-repeat`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von background-repeat

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

In diesem Beispiel ist jeder Listeneintrag mit einem anderen Wert von `background-repeat` zugeordnet.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}}-Kurzform-Komponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwenden mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
