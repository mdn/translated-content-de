---
title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: 1b3165b1717bbd0bfc1c90ad68c80a84e0b4fc8c
---

Die **`background-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achse wiederholt oder überhaupt nicht wiederholt werden.

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei [`<repeat-style>`](#werte)-Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Wenn zwei Werte angegeben sind, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei, wiederholt sich sowohl horizontal als auch vertikal, um den gesamten Hintergrundbemalungsbereich zu bedecken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder zugeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}}-Eigenschaft ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundbemalungsbereichs und dem entsprechenden {{cssxref("background-size")}}-Wert ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, um sicherzustellen, dass das wiederholte Bild sein Seitenverhältnis behält, ohne zugeschnitten zu werden. Mit dem `space`-Wert, wenn der Hintergrundbemalungsbereich ein anderes Seitenverhältnis als das Bild hat oder anderweitig keine Größe hat, die ein Vielfaches der Hintergrundgröße in einer Richtung ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt werden.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Zuschneiden zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis es Platz gibt, ein zusätzliches wiederholtes Bild hinzuzufügen, wenn das Seitenverhältnis des Hintergrundbildes nicht mit dem Seitenverhältnis des Bemalungsbereichs übereinstimmt. Zum Beispiel, bei einem Hintergrundbild, das 100px x 100px groß ist, und einem Bemalungsbereich von 1099px x 750px, wird das Bild 10 Mal in der horizontalen Richtung und 7 Mal vertikal wiederholt, insgesamt also 70 Wiederholungen, wobei jedes Bild in beide Richtungen auf 109,9px x 105px gestreckt wird, was das Seitenverhältnis des Bildes verändert und es potenziell verzerrt. Wenn die Breite des Bemalungsbereichs um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal für insgesamt 77 Bildwiederholungen hinein, wobei jedes Bild 100px breit und 105px hoch gemalt wird, nur in vertikaler Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei `<repeat-style>`-Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die zwei Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt wird, wird dieser Wert auf beide Achsen angewendet. Die Werte umfassen:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wiederholt, wie nötig, um den gesamten Hintergrundbemalungsbereich zu bedecken, wobei das Randbild zugeschnitten wird, wenn die Dimension des Bemalungsbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbemalungsbereich möglicherweise nicht vollständig bedeckt). Die Position des nicht wiederholten Hintergrundbildes wird von der CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Zuschneiden wiederholt. Die ersten und letzten Bilder sind an beiden Seiten des Elements fixiert, und Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("background-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Zuschneiden angezeigt werden. Der einzige Fall, in dem beim Verwenden von `space` ein Zuschneiden erfolgt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`
  - : Wenn der verfügbare Raum größer wird, dehnen sich die wiederholten Bilder (ohne Lücken), bis Platz für ein weiteres hinzugefügt werden kann. Dies ist der einzige `<repeat-style>`-Wert, der zur Verzerrung des Seitenverhältnisses des Hintergrundbildes führen kann, was der Fall sein wird, wenn das Seitenverhältnis des Hintergrundbildes vom Seitenverhältnis des Hintergrundbemalungsbereichs abweicht.

- `repeat-x`
  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wiederholt sich nur horizontal, wobei das Randbild zugeschnitten wird, wenn die Breite des Bemalungsbereichs kein Vielfaches der Breite Ihres Hintergrundbildes ist.

- `repeat-y`
  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wiederholt sich nur vertikal, wobei das Randbild zugeschnitten wird, wenn die Höhe des Bemalungsbereichs kein Vielfaches der Höhe Ihres Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben wird, ist der Wert die Kurzform für die folgende Zwei-Wert-Syntax:

| Einzelunter wert | Zwei-Wert-Äquivalent  |
| ---------------- | --------------------- |
| `repeat-x`       | `repeat no-repeat`    |
| `repeat-y`       | `no-repeat repeat`    |
| `repeat`         | `repeat repeat`       |
| `space`          | `space space`         |
| `round`          | `round round`         |
| `no-repeat`      | `no-repeat no-repeat` |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundwiederholung einstellen

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

In diesem Beispiel wird jedem Listenelement ein anderer Wert von `background-repeat` zugeordnet.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}}-Kurzform-Komponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}) und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
