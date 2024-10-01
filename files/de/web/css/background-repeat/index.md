---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen wiederholt werden oder überhaupt nicht.

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

Die Eigenschaft akzeptiert zwei [`<repeat-style>`](#werte) Schlüsselbegriffe oder einen Schlüsselbegriff als Kurzform für die beiden Werte. Wenn zwei Werte angegeben werden, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder überhaupt nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird sowohl horizontal als auch vertikal wiederholt, um den gesamten Hintergrundbereich abzudecken, wobei Randbilder auf die Größe des Elements abgeschnitten werden. Welche Kanten abgeschnitten werden, hängt vom Wert des {{cssxref("background-position")}} ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern abgeschnitten werden, hängt von der Größe des Hintergrundmalbereichs und der {{cssxref("background-size")}} ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, sodass das wiederholte Bild sein Seitenverhältnis ohne Abschneiden beibehält. Mit dem Wert `space`, wenn der Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder nicht anderweitig eine Größe hat, die ein Vielfaches der Hintergrundgröße in einer Richtung ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Abschneiden abzudecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum auszufüllen, bis Platz für ein zusätzliches wiederholtes Bild vorhanden ist, wenn das Seitenverhältnis des Hintergrundbildes nicht das gleiche ist wie das Seitenverhältnis des Malbereichs. Angenommen, ein Hintergrundbild ist 100px x 100px groß und ein Hintergrundmalbereich ist 1099px x 750px groß, wird das Bild 10-mal in horizontaler Richtung und 7-mal vertikal wiederholt, insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen auf 109,9px x 105px gestreckt wird. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal für insgesamt 77 Bildwiederholungen, wobei jedes Bild 100px breit und 105px hoch gemalt wird und nur in vertikaler Richtung gestreckt wird.

## Werte

Die Eigenschaft akzeptiert bis zu zwei `<repeat-style>` Schlüsselbegriffe. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einziger Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt wird, wird dieser Wert auf beide Vertices angewendet. Die Werte beinhalten:

- `repeat`

  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundbildmalbereich abzudecken, wobei das Randbild abgeschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`

  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbildmalbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`

  - : Das Bild wird so oft wie möglich wiederholt, ohne dass es zu einem Abschneiden kommt. Die ersten und letzten Bilder sind an den Seiten des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("background-position")}} wird ignoriert, es sei denn, es kann nur ein Bild ohne Abschneiden angezeigt werden. Der einzige Fall, in dem es zu einem Abschneiden bei Verwendung von `space` kommt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`

  - : Während der zur Verfügung stehende Platz größer wird, werden die wiederholten Bilder gestreckt (wobei keine Lücken gelassen werden), bis Platz für ein weiteres Bild vorhanden ist. Dies ist der einzige `<repeat-style>` Wert, der zur Verzerrung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Hintergrundbildes führen kann, was auftritt, wenn das Seitenverhältnis des Hintergrundbildes von dem des Hintergrundmalbereichs abweicht.

- `repeat-x`

  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`

  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben wird, ist der Wert die Kurzform für die folgende Zwei-Werte-Syntax:

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

### Festlegen von background-repeat

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
  background-image: url(starsolid.gif);
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
  background-image: url(starsolid.gif), url(favicon32.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

#### Ergebnis

In diesem Beispiel wird jedem Listeneintrag ein anderer Wert von `background-repeat` zugeordnet.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}} Kurzformkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
