---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen wiederholt werden oder gar nicht wiederholt werden.

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

Die Eigenschaft akzeptiert zwei [`<repeat-style>`](#werte) Schlüsselbegriffe oder einen Schlüsselbegriff als Kurzschreibweise für die beiden Werte. Wenn zwei Werte angegeben werden, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches [Seitenverhältnis](/de/docs/Glossary/aspect_ratio), indem es sowohl horizontal als auch vertikal wiederholt wird, um den gesamten Hintergrundbemalungsbereich zu bedecken, wobei Kantenbilder auf die Größe des Elements zugeschnitten werden. Welche Kanten zugeschnitten werden, hängt vom Wert der {{cssxref("background-position")}} ab. Wie oft sie wiederholt werden und wie viel die Bilder an den Kanten zugeschnitten werden, hängt von der Größe des Hintergrundbemalungsbereichs und der {{cssxref("background-size")}} ab.

Die wiederholten Bilder können gleichmäßig beabstandet sein, wodurch das wiederholte Bild sein Seitenverhältnis beibehält, ohne zugeschnitten zu werden. Mit dem Wert `space`, wenn der Hintergrundbemalungsbereich ein anderes Seitenverhältnis als das Bild hat oder sonst keine Größe hat, die ein Vielfaches der Hintergrundgröße in irgendeiner Richtung ist, gibt es Bereiche, die nicht vom Hintergrundbild bedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um das gesamte Gebiet ohne Zuschneiden zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum auszufüllen, bis es Raum gibt, ein zusätzliches wiederholtes Bild hinzuzufügen, wenn das Seitenverhältnis des Hintergrundbildes nicht dasselbe ist wie das des Bemalungsbereiches. Beispielsweise, wenn ein Hintergrundbild 100px x 100px und ein Hintergrundbemalungsbereich 1099px x 750px misst, wird das Bild 10 Mal in horizontaler Richtung und 7 Mal vertikal wiederholt, für insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen gestreckt wird, um 109.9px x 105px zu sein. Wenn die Breite des Bemalungsbereichs um 1px zunimmt und 1100px breit wird, wird ein 11. Bild horizontal hineinpassen, für insgesamt 77 Bildwiederholungen, wobei jedes Bild mit 100px Breite und 105px Höhe gemalt wird, nur in der vertikalen Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert bis zu zwei `<repeat-style>` Schlüsselbegriffe. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Vertikalen angewendet. Die Werte umfassen:

- `repeat`

  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundbildbemalungsbereich zu bedecken, wobei das Kantenbild zugeschnitten wird, wenn die Dimension des Bemalungsbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`

  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundbildbemalungsbereich nicht unbedingt vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die {{cssxref("background-position")}} CSS-Eigenschaft definiert.

- `space`

  - : Das Bild wird so oft wie möglich ohne Zuschneiden wiederholt. Die ersten und letzten Bilder sind auf beiden Seiten des Elements fixiert, und Leerzeichen werden gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}} Eigenschaft wird ignoriert, es sei denn, es kann nur ein einzelnes Bild ohne Zuschneiden angezeigt werden. Der einzige Fall, in dem mit `space` Zuschneiden auftritt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`

  - : Wenn der erlaubte Raum an Größe zunimmt, werden die wiederholten Bilder gestreckt (lassen keine Lücken), bis es Raum für ein weiteres gibt. Dies ist der einzige `<repeat-style>` Wert, der zu einer Verzerrung des Seitenverhältnisses des Hintergrundbildes führen kann, was auftritt, wenn das Seitenverhältnis des Hintergrundbildes sich vom Seitenverhältnis des Hintergrundbemalungsbereiches unterscheidet.

- `repeat-x`

  - : Kurzschreibweise für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Kantenbild zugeschnitten wird, wenn die Breite des Bemalungsbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`

  - : Kurzschreibweise für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Kantenbild zugeschnitten wird, wenn die Höhe des Bemalungsbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben wird, ist der Wert eine Kurzschreibweise für die folgende Zwei-Wert-Syntax:

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

### Setting background-repeat

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

In diesem Beispiel wird jedem Listenelement ein anderer `background-repeat`-Wert zugeordnet.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}} Kurzschreibkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
