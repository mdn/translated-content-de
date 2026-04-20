---
title: "`background-repeat` CSS property"
short-title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die CSS-Eigenschaft **`background-repeat`** legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen wiederholt werden oder überhaupt nicht.

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei Schlüsselbegriffen [`<repeat-style>`](#werte) oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Wenn zwei Werte angegeben werden, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder überhaupt nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird sowohl horizontal als auch vertikal wiederholt, um den gesamten Hintergrundmalbereich abzudecken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder zugeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}}-Eigenschaft ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem entsprechenden {{cssxref("background-size")}}-Wert ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, um sicherzustellen, dass das wiederholte Bild sein Seitenverhältnis beibehält, ohne beschnitten zu werden. Mit dem Wert `space`, wenn der Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder anderweitig keine Größe hat, die ein Vielfaches der Hintergrundgröße in eine Richtung darstellt, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gedehnt werden, um den gesamten Bereich ohne Zuschnitt abzudecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis Platz für ein zusätzliches wiederholtes Bild entsteht, wenn das Seitenverhältnis des Hintergrundbildes nicht mit dem Seitenverhältnis des Malbereichs übereinstimmt. Zum Beispiel, wenn ein Hintergrundbild 100px x 100px groß ist und ein Hintergrundmalbereich 1099px x 750px beträgt, wird das Bild 10 Mal in horizontaler Richtung und 7 Mal vertikal wiederholt, insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen auf 109,9px x 105px gestreckt wird, wodurch das Seitenverhältnis des Bildes verändert und möglicherweise verzerrt wird. Wenn die Breite des Malbereichs um 1px vergrößert wird, d.h. 1100px breit wird, passt ein 11. Bild horizontal für insgesamt 77 Bildwiederholungen, wobei jedes Bild bei 100px Breite und 105px Höhe gemalt wird und nur in der vertikalen Richtung gestreckt wird.

## Werte

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei `<repeat-style>`-Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Der erste Wert gibt die horizontale Wiederholung an. Der zweite Wert gibt das vertikale Verhalten an. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Achsen angewendet. Die Werte beinhalten:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundbildmalbereich abzudecken, wobei das Randbild abgeschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbildmalbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wie möglich wiederholt, ohne beschnitten zu werden. Die ersten und letzten Bilder werden auf beiden Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("background-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschnitt angezeigt werden. Der einzige Fall, in dem es beim Verwenden von `space` zu einem Zuschnitt kommt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild darzustellen.

- `round`
  - : Wenn der zur Verfügung stehende Raum größer wird, werden die wiederholten Bilder gestreckt (ohne Lücken), bis genügend Platz für ein zusätzliches Bild vorhanden ist. Dies ist der einzige `<repeat-style>`-Wert, der zu einer Verzerrung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Hintergrundbildes führen kann, was der Fall ist, wenn das Seitenverhältnis des Hintergrundbildes vom Seitenverhältnis des Hintergrundmalbereichs abweicht.

- `repeat-x`
  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`
  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>`-Schlüsselbegriff bereitgestellt wird, ist der Wert eine Kurzform für die folgende Zwei-Wert-Syntax:

| Einzelwert  | Zwei-Wert-Äquivalent  |
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

### Hintergrund-Wiederholung einstellen

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

In diesem Beispiel wird jedes Listenelement mit einem anderen Wert von `background-repeat` verknüpft.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}}-Kurzformkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
