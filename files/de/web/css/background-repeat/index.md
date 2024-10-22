---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen wiederholt werden oder überhaupt nicht wiederholt werden.

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

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

Die Eigenschaft akzeptiert zwei [`<repeat-style>`](#werte) Schlüsselbegriffe oder einen Schlüsselbegriff als Kürzel für die beiden Werte. Wenn zwei Werte angegeben werden, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei, indem es sowohl horizontal als auch vertikal wiederholt wird, um den gesamten Hintergrundbereich zu bedecken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder zugeschnitten werden, hängt vom Wert von {{cssxref("background-position")}} ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundmalbereichs und der {{cssxref("background-size")}} ab.

Die wiederholten Bilder können gleichmäßig verteilt sein, wobei das wiederholte Bild sein Seitenverhältnis beibehält, ohne zugeschnitten zu werden. Mit dem Wert `space`, wenn der Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder anderweitig keine Größe, die ein Vielfaches der Hintergrundgröße in eine der Richtungen ist, gibt es Bereiche, die nicht vom Hintergrundbild bedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Zuschneiden zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis Platz ist, um ein zusätzliches wiederholtes Bild hinzuzufügen, falls das Seitenverhältnis des Hintergrundbildes nicht das gleiche ist wie das Seitenverhältnis des Malbereichs. Zum Beispiel wird bei einem Hintergrundbild von 100px x 100px und einem Malbereich von 1099px x 750px das Bild 10 Mal horizontal und 7 Mal vertikal wiederholt, insgesamt also 70 Wiederholungen, wobei jedes Bild in beiden Richtungen auf 109,9px x 105px gestreckt wird. Wenn die Breite des Malbereichs um 1px erhöht wird und somit 1100px breit ist, passt ein 11. Bild horizontal, insgesamt also 77 Bildwiederholungen, wobei jedes Bild 100px breit und 105px hoch gemalt wird, nur in vertikaler Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert bis zu zwei `<repeat-style>` Schlüsselbegriffe. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einziger Wert auf einen anderen als `repeat-x` oder `repeat-y` festgelegt wird, wird dieser Wert auf beide Achsen angewendet. Die Werte umfassen:

- `repeat`

  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundmalbereich zu bedecken, wobei das Randbild zugeschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`

  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundmalbereich möglicherweise nicht vollständig bedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die {{cssxref("background-position")}} CSS-Eigenschaft definiert.

- `space`

  - : Das Bild wird so oft wie möglich ohne Zuschneiden wiederholt. Die ersten und letzten Bilder werden an beiden Seiten des Elements fixiert und der Zwischenraum gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}} Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschneiden angezeigt werden. Der einzige Fall, in dem beim Verwenden von `space` ein Zuschnitt erfolgt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`

  - : Wenn der verfügbare Platz größer wird, werden die wiederholten Bilder gestreckt (ohne Lücken), bis es Raum für ein weiteres Bild gibt. Dies ist der einzige `<repeat-style>` Wert, der zur Verzerrung des Seitenverhältnisses des Hintergrundbildes führen kann, was auftritt, wenn das Seitenverhältnis des Hintergrundbildes vom Seitenverhältnis des Hintergrundmalbereichs abweicht.

- `repeat-x`

  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild zugeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbilds ist.

- `repeat-y`

  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild zugeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff bereitgestellt wird, ist der Wert eine Kurzform für die folgende Zwei-Wert-Syntax:

| Einzelwert  | Äquivalent mit zwei Werten |
| ----------- | -------------------------- |
| `repeat-x`  | `repeat no-repeat`         |
| `repeat-y`  | `no-repeat repeat`         |
| `repeat`    | `repeat repeat`            |
| `space`     | `space space`              |
| `round`     | `round round`              |
| `no-repeat` | `no-repeat no-repeat`      |

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

- Die anderen Komponenten der {{cssxref("background")}} Kurzform: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}) und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
