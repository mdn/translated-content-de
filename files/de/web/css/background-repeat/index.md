---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: f88d6efd23c56c8017351b06903ce3192d6dc73c
---

{{CSSRef}}

Die **`background-repeat`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen wiederholt oder überhaupt nicht wiederholt werden.

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

Die Eigenschaft akzeptiert eine durch Kommata getrennte Liste von zwei [`<repeat-style>`](#werte)-Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Wenn zwei Werte angegeben sind, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Die Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird sowohl horizontal als auch vertikal wiederholt, um den gesamten Hintergrundbereich abzudecken, wobei die Randbilder auf die Größe des Elements beschnitten werden. Welche Ränder beschnitten werden, hängt vom Wert des entsprechenden {{cssxref("background-position")}}-Werts ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern beschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem entsprechenden {{cssxref("background-size")}}-Wert ab.

Die wiederholten Bilder können gleichmäßig verteilt sein, wobei das wiederholte Bild sein Seitenverhältnis beibehält, ohne beschnitten zu werden. Mit dem Wert `space` bleiben Teile frei, wenn der Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder anderweitig nicht eine Größe hat, die ein Vielfaches der Hintergrundgröße in einer Richtung ist.

Alternativ kann das wiederholte Hintergrundbild so gestreckt werden, dass es den gesamten Bereich ohne Beschneiden abdeckt. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Platz auszufüllen, bis Platz für ein weiteres wiederholtes Bild vorhanden ist, falls das Seitenverhältnis des Hintergrundbildes nicht mit dem Seitenverhältnis des Malbereichs übereinstimmt. Zum Beispiel wird bei einem Hintergrundbild von 100px x 100px und einem Hintergrundmalbereich von 1099px x 750px das Bild 10 Mal in horizontaler Richtung und 7 Mal in vertikaler Richtung wiederholt, insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen gestreckt wird, um 109,9px x 105px zu erreichen, wodurch das Seitenverhältnis des Bildes verändert und möglicherweise verzerrt wird. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein elftes Bild horizontal, insgesamt 77 Bildwiederholungen, wobei jedes Bild mit 100px Breite und 105px Höhe gemalt wird, nur in vertikaler Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert eine durch Kommata getrennte Liste von zwei `<repeat-style>`-Schlüsselbegriffen oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Achsen angewendet. Die Werte sind:

- `repeat`

  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundmalbereich abzudecken, wobei das Randbild beschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`

  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundmalbereich nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbilds wird durch die {{cssxref("background-position")}}-CSS-Eigenschaft definiert.

- `space`

  - : Das Bild wird so oft wie möglich wiederholt, ohne beschnitten zu werden. Die ersten und letzten Bilder sind an beiden Seiten des Elements befestigt, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}}-Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Beschneiden angezeigt werden. Das einzige Szenario, in dem ein Beschneiden bei `space` auftritt, ist, wenn nicht genug Platz vorhanden ist, um ein einzelnes Bild anzuzeigen.

- `round`

  - : Wenn der erlaubte Raum größer wird, dehnen sich die wiederholten Bilder (ohne Lücken zu lassen) aus, bis Platz für ein weiteres hinzugefügt werden kann. Dies ist der einzige `<repeat-style>`-Wert, der zur Verzerrung des Seitenverhältnisses des Hintergrundbildes führen kann, was passiert, wenn das Seitenverhältnis des Hintergrundbildes vom Seitenverhältnis des Hintergrundmalbereichs abweicht.

- `repeat-x`

  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild beschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`

  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild beschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>`-Schlüsselwort angegeben ist, ist der Wert eine Kurzform für die folgende Zwei-Werte-Syntax:

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

In diesem Beispiel wird jedem Listenelement ein anderer Wert von `background-repeat` zugeordnet.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}}-Kurzform-Komponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
