---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`background-repeat`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achse wiederholt werden oder überhaupt nicht wiederholt werden.

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

Die Eigenschaft akzeptiert eine kommagetrennte Liste von zwei [`<repeat-style>`](#werte)-Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die zwei Werte. Wenn zwei Werte angegeben werden, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder überhaupt nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wiederholt sich sowohl horizontal als auch vertikal, um den gesamten Hintergrundbereich abzudecken, wobei Randbilder auf die Größe des Elements beschnitten werden. Welche Ränder beschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}}-Eigenschaft ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern beschnitten werden, hängt von der Größe des Hintergrundbereichs und dem entsprechenden {{cssxref("background-size")}}-Wert ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, wobei sichergestellt wird, dass das wiederholte Bild sein Seitenverhältnis behält, ohne beschnitten zu werden. Mit dem Wert `space`, wenn der Hintergrundbereich ein anderes Seitenverhältnis als das Bild hat oder nicht anderweitig eine Größe hat, die ein Vielfaches der Hintergrundgröße in irgendeiner Richtung ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Beschnitt zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Platz zu füllen, bis Platz ist, ein weiteres wiederholtes Bild hinzuzufügen, falls das Seitenverhältnis des Hintergrundbildes nicht mit dem Seitenverhältnis des Malbereichs übereinstimmt. Zum Beispiel wird ein Hintergrundbild, das 100px x 100px groß ist, und ein Hintergrundmalbereich von 1099px x 750px, in der horizontalen Richtung 10 Mal und vertikal 7 Mal wiederholt, insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen auf 109,9px x 105px gestreckt wird, was das Seitenverhältnis des Bildes verändert und es möglicherweise verzerrt. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal rein, insgesamt 77 Bildwiederholungen, wobei jedes Bild 100px breit und 105px hoch gemalt wird, nur in vertikaler Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert eine kommagetrennte Liste von zwei `<repeat-style>`-Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die zwei Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt wird, wird dieser Wert auf beide Achsen angewendet. Die Werte umfassen:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wiederholt, wie erforderlich ist, um den gesamten Hintergrundbildbereich abzudecken, wobei das Randbild beschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wiederholt, wie es ohne Beschnitt möglich ist. Die ersten und letzten Bilder sind an beiden Seiten des Elements verankert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}}-Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Beschnitt angezeigt werden. Der einzige Fall, in dem bei Verwendung von `space` Beschnitt vorkommt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`
  - : Wenn der erlaubte Raum größer wird, werden die wiederholten Bilder gestreckt (ohne Lücken), bis Platz für ein weiteres Bild ist. Dies ist der einzige `<repeat-style>`-Wert, der zur Verzerrung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Hintergrundbildes führen kann, was vorkommt, wenn das Seitenverhältnis des Hintergrundbildes vom Seitenverhältnis des Hintergrundmalbereichs abweicht.

- `repeat-x`
  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild beschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`
  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild beschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>`-Schlüsselbegriff angegeben wird, ist der Wert eine Kurzform für die folgende zweiwertige Syntax:

| Einzelwert  | Zweiwertige Entsprechung |
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

In diesem Beispiel wird jedem Listenelement ein anderer Wert für `background-repeat` zugeordnet.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen Kurzkomponenten von {{cssxref("background")}}: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}) und {{cssxref("background-size")}}
- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
