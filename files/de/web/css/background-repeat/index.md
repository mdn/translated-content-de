---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: cd2020d95f4b278f3d462aaf88c5ff953e791908
---

{{CSSRef}}

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achse wiederholt oder überhaupt nicht wiederholt werden.

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

Die Eigenschaft akzeptiert eine durch Komma getrennte Liste von zwei [`<repeat-style>`](#werte) Schlüsselwörtern oder ein Schlüsselwort als Kurzform für die beiden Werte. Wenn zwei Werte angegeben werden, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Die Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder überhaupt nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei, indem es sowohl horizontal als auch vertikal wiederholt wird, um den gesamten Hintergrund-Malbereich zu bedecken, wobei die Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder zugeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} Eigenschaft ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrund-Malbereichs und dem entsprechenden {{cssxref("background-size")}} Wert ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, sodass das wiederholte Bild sein Seitenverhältnis beibehält, ohne zugeschnitten zu werden. Mit dem Wert `space`, wenn der Hintergrund-Malbereich ein anderes Seitenverhältnis als das Bild hat oder anderweitig keine Größe hat, die ein Vielfaches der Hintergrundgröße in eine der beiden Richtungen ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild ohne Zuschneiden gestreckt werden, um den gesamten Bereich zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Platz zu füllen, bis Platz für ein weiteres wiederholtes Bild vorhanden ist, wenn das Seitenverhältnis des Hintergrundbildes nicht mit dem Seitenverhältnis des Malbereichs übereinstimmt. Beispielsweise wird ein Hintergrundbild, das 100px x 100px misst und ein Hintergrund-Malbereich von 1099px x 750px aufweist, 10-mal horizontal und 7-mal vertikal wiederholt, insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen auf 109,9px x 105px gestreckt wird, wodurch das Seitenverhältnis des Bildes verändert und möglicherweise verzerrt wird. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal für insgesamt 77 Bildwiederholungen, wobei jedes Bild mit einer Breite von 100px und einer Höhe von 105px gemalt wird, nur in vertikaler Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert eine durch Komma getrennte Liste von zwei `<repeat-style>` Schlüsselwörtern oder ein Schlüsselwort als Kurzform für die beiden Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen Wert ungleich `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Achsen angewendet. Die Werte umfassen:

- `repeat`

  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundbild-Malbereich zu bedecken, wobei das Randbild abgeschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`

  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbild-Malbereich nicht unbedingt vollständig bedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die {{cssxref("background-position")}} CSS-Eigenschaft definiert.

- `space`

  - : Das Bild wird so oft wie möglich ohne Zuschnitt wiederholt. Die ersten und letzten Bilder sind an beiden Seiten des Elements fixiert, und der Abstand zwischen den Bildern wird gleichmäßig verteilt. Die {{cssxref("background-position")}} Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschnitt angezeigt werden. Der einzige Fall, in dem bei der Verwendung von `space` ein Zuschnitt erfolgt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`

  - : Wenn der verfügbare Raum zunimmt, werden die wiederholten Bilder gedehnt (ohne Lücken zu hinterlassen), bis Platz für ein weiteres hinzugefügt werden kann. Dies ist der einzige `<repeat-style>` Wert, der zur Verformung des Hintergrundbildes führen kann {{Glossary("aspect_ratio", "Seitenverhältnis")}}, was passiert, wenn das Seitenverhältnis des Hintergrundbildes nicht mit dem Seitenverhältnis des Hintergrund-Malbereichs übereinstimmt.

- `repeat-x`

  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`

  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselwort angegeben wird, ist der Wert die Kurzform für die folgende Zwei-Werte-Syntax:

| Einzelner Wert | Zwei-Wert-Äquivalent  |
| -------------- | --------------------- |
| `repeat-x`     | `repeat no-repeat`    |
| `repeat-y`     | `no-repeat repeat`    |
| `repeat`       | `repeat repeat`       |
| `space`        | `space space`         |
| `round`        | `round round`         |
| `no-repeat`    | `no-repeat no-repeat` |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundwiederholung festlegen

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

- Die anderen {{cssxref("background")}} Kurzformkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Backgrounds und Borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
