---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achse wiederholt werden oder gar nicht.

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei [`<repeat-style>`](#werte) Schlüsselbegriffen oder einen Begriff als Abkürzung für die beiden Werte. Wenn zwei Werte angegeben sind, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschafts-Werte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird sowohl horizontal als auch vertikal wiederholt, um den gesamten Hintergrundfarbbereich zu bedecken, wobei Randbilder auf die Größe des Elements abgeschnitten werden. Welche Ränder abgeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} Eigenschaft ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern abgeschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem entsprechenden {{cssxref("background-size")}} Wert ab.

Die wiederholten Bilder können gleichmäßig voneinander getrennt sein, sodass das wiederholte Bild sein Seitenverhältnis beibehält, ohne abgeschnitten zu werden. Mit dem `space`-Wert, wenn der Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder nicht die Größe hat, die ein Vielfaches der Hintergrundgröße in einer der Richtungen ist, gibt es Bereiche, die nicht vom Hintergrundbild bedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Abdeckung zu füllen. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis Platz für ein zusätzliches wiederholtes Bild vorhanden ist, wenn das Seitenverhältnis des Hintergrundbildes nicht mit dem Seitenverhältnis des Malbereichs übereinstimmt. Zum Beispiel, wenn ein Hintergrundbild 100px x 100px groß ist und der Hintergrundmalbereich 1099px x 750px beträgt, wird das Bild 10 Mal in der horizontalen Richtung und 7 Mal vertikal für insgesamt 70 Wiederholungen wiederholt, wobei jedes Bild in beiden Richtungen gestreckt wird, um 109,9px x 105px und dabei das Seitenverhältnis des Bildes verändert und möglicherweise verzerrt. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal für insgesamt 77 Bildwiederholungen, wobei jedes Bild in der vertikalen Richtung auf 100px Breite und 105px Höhe gemalt wird.

## Werte

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei `<repeat-style>` Schlüsselbegriffen oder einen Begriff als Kurzschreibweise für die zwei Werte. Der erste Wert beschreibt die horizontale Wiederholung. Der zweite Wert beschreibt das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt wird, wird dieser Wert auf beide Eckpunkte angewendet. Die Werte umfassen:

- `repeat`

  - : Der Standardwert. Das Bild wird so oft wiederholt, wie nötig, um den gesamten Hintergrund-Bildmalbereich zu belegen, wobei das Randbild abgeschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`

  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrund-Bildmalbereich möglicherweise nicht vollständig bedeckt). Die Position des nicht wiederholten Hintergrundbilds wird durch die {{cssxref("background-position")}} CSS-Eigenschaft definiert.

- `space`

  - : Das Bild wird so oft wie möglich ohne Zuschnitt wiederholt. Die ersten und letzten Bilder werden an beiden Seiten des Elements fixiert, und Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}} Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschnitt angezeigt werden. Der einzige Fall, bei dem das Zuschneiden bei Verwendung von `space` auftritt, ist, wenn nicht genug Platz ist, um ein Bild anzuzeigen.

- `round`

  - : Wenn der erlaubte Raum größer wird, strecken sich die wiederholten Bilder (ohne Lücken), bis Platz für ein weiteres zur Verfügung steht. Dies ist der einzige `<repeat-style>` Wert, der zur Verzerrung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Hintergrundbilds führen kann, was passiert, wenn das Seitenverhältnis des Hintergrundbildes von dem des Hintergrundmalbereichs abweicht.

- `repeat-x`

  - : Kurzschreibweise für `repeat no-repeat`, das Hintergrundbild wiederholt sich nur horizontal, wobei das Randbild abgeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`
  - : Kurzschreibweise für `no-repeat repeat`, das Hintergrundbild wiederholt sich nur vertikal, wobei das Randbild abgeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben wird, ist der Wert eine Kurzschreibweise für die folgende Zwei-Werte-Syntax:

| Einzelwert  | Zwei-Werte-Äquivalent |
| ----------- | --------------------- |
| `repeat-x`  | `repeat no-repeat`    |
| `repeat-y`  | `no-repeat repeat`    |
| `repeat`    | `repeat repeat`       |
| `space`     | `space space`         |
| `round`     | `round round`         |
| `no-repeat` | `no-repeat no-repeat` |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### background-repeat festlegen

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
  background-image:
    url(star-solid.gif), url(/shared-assets/images/examples/favicon32.png);
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

- Die anderen {{cssxref("background")}} Kurzhandfunktionen: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
