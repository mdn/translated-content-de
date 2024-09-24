---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achse oder überhaupt nicht wiederholt werden.

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Zwei-Wert-Syntax: horizontal | vertikal */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Globale Werte */
background-repeat: inherit;
background-repeat: initial;
background-repeat: revert;
background-repeat: revert-layer;
background-repeat: unset;
```

## Beschreibung

Die Eigenschaft akzeptiert zwei [`<repeat-style>`](#werte) Schlüsselbegriffe oder einen Schlüsselbegriff als Abkürzung für die zwei Werte. Wenn zwei Werte angegeben sind, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder überhaupt nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{glossary("Seitenverhältnis")}}, indem es sowohl horizontal als auch vertikal wiederholt wird, um den gesamten Hintergrundfarbbereich zu decken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder zugeschnitten werden, hängt vom Wert der {{cssxref("background-position")}} ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundbemalungsbereichs und der {{cssxref("background-size")}} ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, wobei das wiederholte Bild sein Seitenverhältnis beibehalten kann, ohne zugeschnitten zu werden. Beim Wert `space` gibt es, wenn der Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder ansonsten keine Größe hat, die ein Vielfaches der Hintergrundgröße in irgendeiner Richtung ist, Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Zuschneiden zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den ganzen verfügbaren Raum zu füllen, bis Platz für ein zusätzliches wiederholtes Bild ist, wenn das Seitenverhältnis des Hintergrundbildes nicht dasselbe wie das Seitenverhältnis des Malbereichs ist. Zum Beispiel wird bei einem 100px x 100px Hintergrundbild und einem 1099px x 750px großen Malbereich das Bild 10 Mal in horizontaler Richtung und 7 Mal vertikal für insgesamt 70 Wiederholungen wiederholt, wobei jedes Bild in beide Richtungen auf 109,9px x 105px gestreckt wird. Wenn die Breite des Malbereichs um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal hinein für insgesamt 77 Bildwiederholungen, wobei jedes Bild auf 100px Breite und 105px Höhe gemalt wird, nur in vertikaler Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert bis zu zwei `<repeat-style>` Schlüsselbegriffe. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt wird, wird dieser Wert auf beide Vertizies angewendet. Die Werte umfassen:

- `repeat`

  - : Der Standardwert. Das Bild wird so oft wiederholt, wie nötig ist, um den gesamten Bereich des Hintergrundbildes zu bedecken, wobei das Randbild zugeschnitten wird, wenn die Dimension des Malbereichs kein Vielfaches der Dimension Ihres Hintergrundbildes ist.

- `no-repeat`

  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundmalbereich möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird von der {{cssxref("background-position")}} CSS-Eigenschaft definiert.

- `space`

  - : Das Bild wird so oft wie möglich wiederholt, ohne zugeschnitten zu werden. Die ersten und letzten Bilder sind an beiden Seiten des Elements fixiert, und der freie Raum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}} Eigenschaft wird ignoriert, es sei denn, es kann nur ein Bild ohne Zuschneiden angezeigt werden. Die einzige Situation, in der beim Verwenden von `space` eine Zuschneidung erfolgt, ist, wenn nicht genug Platz ist, um ein Bild anzuzeigen.

- `round`

  - : Während der erlaubte Platz größer wird, dehnen sich die wiederholten Bilder (ohne Lücken zu hinterlassen), bis Platz für ein zusätzliches Bild ist. Dies ist der einzige `<repeat-style>` Wert, der zu einer Verzerrung des Seitenverhältnisses des Hintergrundbildes führen kann, was passiert, wenn das Seitenverhältnis des Hintergrundbildes vom Seitenverhältnis des Hintergrundmalbereichs abweicht.

- `repeat-x`

  - : Abkürzung für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild zugeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`

  - : Abkürzung für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild zugeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben wird, ist der Wert eine Abkürzung für die folgende Zwei-Wert-Syntax:

| Einzelwert   | Zweiwert-Äquivalent        |
| ------------ | -------------------------- |
| `repeat-x`   | `repeat no-repeat`         |
| `repeat-y`   | `no-repeat repeat`         |
| `repeat`     | `repeat repeat`            |
| `space`      | `space space`              |
| `round`      | `round round`              |
| `no-repeat`  | `no-repeat no-repeat`      |

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
    repeat-x, repeat-y (mehrere Bilder)
    <div class="seven"></div>
  </li>
</ol>
```

#### CSS

```css
/* Gemeinsam für alle DIVs im Beispiel */
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

/* Hintergrundwiederholungen */
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

/* Mehrere Bilder */
.seven {
  background-image: url(starsolid.gif), url(favicon32.png);
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

- Die anderen {{cssxref("background")}} Abkürzungskomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}) und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Umrandungen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
