---
title: "`background-repeat` CSS property"
short-title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`background-repeat`** legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achse oder überhaupt nicht wiederholt werden.

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

## Zugehörige Eigenschaften

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

### Werte

Die Eigenschaft akzeptiert zwei durch ein Komma getrennte `<repeat-style>`-Schlüsselwörter oder ein Schlüsselwort als Kurzschreibweise für beide Werte. Der erste Wert bestimmt die horizontale, der zweite die vertikale Wiederholung. Wird nur ein einzelner Wert angegeben, der weder `repeat-x` noch `repeat-y` ist, gilt er für beide Richtungen. Folgende Werte sind möglich:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Zeichenbereich des Hintergrundbilds abzudecken. Bilder am Rand werden abgeschnitten, wenn die Abmessung des Zeichenbereichs kein Vielfaches der entsprechenden Abmessung des Hintergrundbilds ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt. Daher wird der Zeichenbereich des Hintergrundbilds möglicherweise nicht vollständig abgedeckt. Die Position des nicht wiederholten Hintergrundbilds wird durch die CSS-Eigenschaft {{cssxref("background-position")}} festgelegt.

- `space`
  - : Das Bild wird so oft wie möglich wiederholt, ohne abgeschnitten zu werden. Das erste und das letzte Bild liegen an den gegenüberliegenden Seiten des Elements; der freie Raum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("background-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Abschneiden angezeigt werden. Bei `space` wird ein Bild nur dann abgeschnitten, wenn nicht genügend Platz für ein einziges Bild vorhanden ist.

- `round`
  - : Wenn der verfügbare Platz größer wird, werden die wiederholten Bilder gestreckt, sodass keine Lücken entstehen, bis Platz für ein weiteres Bild vorhanden ist. Dies ist der einzige `<repeat-style>`-Wert, der das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Hintergrundbilds verändern kann. Das geschieht, wenn das Seitenverhältnis des Hintergrundbilds vom Seitenverhältnis des Zeichenbereichs abweicht.

- `repeat-x`
  - : Kurzschreibweise für `repeat no-repeat`: Das Hintergrundbild wird nur horizontal wiederholt. Das Bild am Rand wird abgeschnitten, wenn die Breite des Zeichenbereichs kein Vielfaches der Breite des Hintergrundbilds ist.

- `repeat-y`
  - : Kurzschreibweise für `no-repeat repeat`: Das Hintergrundbild wird nur vertikal wiederholt. Das Bild am Rand wird abgeschnitten, wenn die Höhe des Zeichenbereichs kein Vielfaches der Höhe des Hintergrundbilds ist.

Wird ein einzelnes `<repeat-style>`-Schlüsselwort angegeben, entspricht der Wert der folgenden Schreibweise mit zwei Werten:

| Einzelner Wert | Entsprechung mit zwei Werten |
| -------------- | ---------------------------- |
| `repeat-x`     | `repeat no-repeat`           |
| `repeat-y`     | `no-repeat repeat`           |
| `repeat`       | `repeat repeat`              |
| `space`        | `space space`                |
| `round`        | `round round`                |
| `no-repeat`    | `no-repeat no-repeat`        |

## Beschreibung

Die Eigenschaft akzeptiert zwei durch ein Komma getrennte [`<repeat-style>`](#werte)-Schlüsselwörter oder ein Schlüsselwort als Kurzschreibweise für beide Werte. Bei zwei Werten bestimmt der erste das horizontale und der zweite das vertikale Wiederholungsverhalten. Mit den Eigenschaftswerten lässt sich das Bild nur horizontal, nur vertikal oder überhaupt nicht wiederholen.

Der Standardwert ist `repeat repeat`. Dabei behält das Hintergrundbild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird horizontal und vertikal wiederholt, um den gesamten Zeichenbereich des Hintergrunds abzudecken. Bilder am Rand werden an den Grenzen des Elements abgeschnitten. Welche Ränder abgeschnitten werden, hängt vom entsprechenden Wert von {{cssxref("background-position")}} ab. Wie oft das Bild wiederholt wird und wie stark Bilder am Rand abgeschnitten werden, hängt von der Größe des Zeichenbereichs des Hintergrunds und dem entsprechenden Wert von {{cssxref("background-size")}} ab.

Wiederholte Bilder können gleichmäßig voneinander beabstandet werden, sodass sie ihr Seitenverhältnis beibehalten und nicht abgeschnitten werden. Bei `space` bleiben Bereiche frei, wenn der Zeichenbereich des Hintergrunds ein anderes Seitenverhältnis als das Bild hat oder seine Abmessungen in einer der beiden Richtungen kein Vielfaches der entsprechenden Hintergrundbildgröße sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Abschneiden abzudecken. Bei `round` wird das wiederholte Bild so gestreckt, dass es den verfügbaren Platz ausfüllt, bis Platz für ein weiteres Bild vorhanden ist. Wenn das Seitenverhältnis des Hintergrundbilds nicht mit dem des Zeichenbereichs übereinstimmt, kann sich dadurch das Seitenverhältnis des Bilds ändern. Angenommen, ein Hintergrundbild ist 100px × 100px groß und der Zeichenbereich des Hintergrunds misst 1099px × 750px. Das Bild wird dann horizontal 10-mal und vertikal 7-mal wiederholt, insgesamt also 70-mal. Jedes Bild wird dabei in beide Richtungen auf 109,9px × 105px gestreckt, wodurch sich sein Seitenverhältnis ändert und es möglicherweise verzerrt wird. Erhöht sich die Breite des Zeichenbereichs um 1px auf 1100px, passt horizontal ein elftes Bild hinein. Dadurch ergeben sich insgesamt 77 Bildwiederholungen. Jedes Bild wird dann mit einer Breite von 100px und einer Höhe von 105px dargestellt und nur vertikal gestreckt.

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

In diesem Beispiel erhält jedes Listenelement einen anderen Wert für `background-repeat`.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Bestandteile der {{cssxref("background")}}-Kurzschreibweise: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}) und {{cssxref("background-size")}}
- [Mehrere Hintergründe verwenden](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Modul [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [Seitenverhältnisse verstehen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
