---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen wiederholt werden oder überhaupt nicht.

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei [`<repeat-style>`](#werte) Schlüsselbegriffen oder einen Schlüsselbegriff als Abkürzung für die beiden Werte. Wenn zwei Werte angegeben sind, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten. Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder überhaupt nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wird sowohl horizontal als auch vertikal wiederholt, um den gesamten Hintergrundmalbereich zu bedecken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Ränder zugeschnitten werden, hängt vom Wert des entsprechenden {{cssxref("background-position")}} Wertes ab. Wie oft sie wiederholt werden und wie viel die Bilder an den Rändern zugeschnitten werden, hängt von der Größe der Hintergrundmalfläche und dem entsprechenden {{cssxref("background-size")}} Wert ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, wodurch sichergestellt wird, dass das wiederholte Bild sein Seitenverhältnis beibehält, ohne zugeschnitten zu werden. Mit dem Wert `space`, wenn die Hintergrundmalfläche ein anderes Seitenverhältnis als das Bild hat oder nicht anderweitig eine Größe hat, die ein Vielfaches der Hintergrundgröße in einer Richtung ist, gibt es Bereiche, die nicht vom Hintergrundbild bedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gedehnt werden, um die gesamte Fläche ohne Zuschneiden zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis Platz für ein zusätzliches wiederholtes Bild ist, falls das Seitenverhältnis des Hintergrundbildes nicht mit dem Seitenverhältnis der Malfläche übereinstimmt. Zum Beispiel, gegeben ein Hintergrundbild von 100px x 100px und eine Hintergrundmalfläche von 1099px x 750px, wird das Bild 10-mal in horizontaler Richtung und 7-mal vertikal wiederholt, für insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen auf 109,9px x 105px gestreckt wird, wodurch sich das Seitenverhältnis des Bildes ändern und es möglicherweise verzerrt wird. Wenn die Breite der Malfläche um 1px zunimmt und 1100px breit wird, passt ein 11. Bild horizontal für insgesamt 77 Bildwiederholungen, wobei jedes Bild bei 100px Breite und 105px Höhe gemalt wird, nur in vertikaler Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von zwei `<repeat-style>` Schlüsselbegriffen oder einen Schlüsselbegriff als Abkürzung für die beiden Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein Wert auf einen anderen als `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Richtungen angewendet. Die Werte sind:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Hintergrundmalbereich zu bedecken, wobei das Randbild abgeschnitten wird, wenn die Abmessung der Malfläche kein Vielfaches der Abmessung Ihres Hintergrundbildes ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt (und daher wird der Hintergrundmalbereich nicht unbedingt vollständig bedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Zuschnitt wiederholt. Die ersten und letzten Bilder werden an beiden Seiten des Elements fixiert, und Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("background-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Zuschnitt angezeigt werden. Der einzige Fall, in dem bei Verwendung von `space` ein Zuschnitt erfolgt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`
  - : Wenn der verfügbare Raum größer wird, werden die wiederholten Bilder gestreckt (lassen keine Lücken), bis Platz für eines mehr hinzugefügt werden kann. Dies ist der einzige `<repeat-style>` Wert, der zur Verzerrung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Hintergrundbildes führen kann, was passieren wird, wenn das Seitenverhältnis des Hintergrundbildes vom Seitenverhältnis der Hintergrundmalfläche abweicht.

- `repeat-x`
  - : Abkürzung für `repeat no-repeat`, das Hintergrundbild wird nur horizontal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Breite der Malfläche kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`
  - : Abkürzung für `no-repeat repeat`, das Hintergrundbild wird nur vertikal wiederholt, wobei das Randbild abgeschnitten wird, wenn die Höhe der Malfläche kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben ist, ist der Wert eine Abkürzung für die folgende Zwei-Werte-Syntax:

| Einzelner Wert | Zwei-Werte-Äquivalent |
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

In diesem Beispiel wird jedem Listenelement ein anderer Wert von `background-repeat` zugewiesen.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}} Kurzschreibungs-Komponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
