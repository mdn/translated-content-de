---
title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`background-repeat`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder wiederholt werden. Ein Hintergrundbild kann entlang der horizontalen und vertikalen Achsen wiederholt oder gar nicht wiederholt werden.

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

Die Eigenschaft akzeptiert eine komma-separierte Liste von zwei [`<repeat-style>`](#werte) Schlüsselbegriffen oder einem Schlüsselbegriff als Kurzform für die beiden Werte. Wenn zwei Werte angegeben werden, definiert der erste Wert das horizontale Wiederholungsverhalten und der zweite Wert das vertikale Verhalten.
Eigenschaftswerte können verwendet werden, um nur horizontal, vertikal oder gar nicht zu wiederholen.

Der Standardwert ist `repeat repeat`. Mit diesem Wert behält das Hintergrundbild sein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} bei und wiederholt sich sowohl horizontal als auch vertikal, um den gesamten Bereich der Hintergrundmalerei zu bedecken, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Welche Kanten beschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} Eigenschaft ab. Wie oft sie wiederholt werden und wie stark die Bilder an den Rändern beschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem entsprechenden {{cssxref("background-size")}} Wert ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, um sicherzustellen, dass das wiederholte Bild sein Seitenverhältnis ohne Beschnitt beibehält. Mit dem `space`-Wert, wenn der Hintergrundmalbereich ein anderes Seitenverhältnis als das Bild hat oder nicht anderweitig eine Größe hat, die ein Vielfaches der Hintergrundgröße in eine der beiden Richtungen ist, werden Bereiche nicht vom Hintergrundbild abgedeckt.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um den gesamten Bereich ohne Beschnitt zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis genügend Platz vorhanden ist, um ein zusätzliches wiederholtes Bild hinzuzufügen, wenn das Seitenverhältnis des Hintergrundbildes nicht dasselbe wie das des Malbereiches ist. Zum Beispiel: Bei einem Hintergrundbild von 100px x 100px und einem Hintergrundmalbereich von 1099px x 750px, wird das Bild 10 Mal in der horizontalen Richtung und 7 Mal vertikal wiederholt, insgesamt 70 Wiederholungen, wobei jedes Bild in beide Richtungen auf 109.9px x 105px gestreckt wird, wodurch das Seitenverhältnis des Bildes verändert und möglicherweise verzerrt wird. Wenn die Breite des Malbereichs um 1px zunimmt, auf 1100px Breite, passt horizontal ein 11. Bild für insgesamt 77 Bildwiederholungen, wobei jedes Bild in der Breite auf 100px und in der Höhe gestreckt auf 105px gemalt wird, nur in der vertikalen Richtung gestreckt.

## Werte

Die Eigenschaft akzeptiert eine komma-separierte Liste von zwei `<repeat-style>` Schlüsselbegriffen oder einem Schlüsselbegriff als Kurzform für die zwei Werte. Der erste Wert ist die horizontale Wiederholung. Der zweite Wert ist das vertikale Verhalten. Wenn nur ein einzelner Wert auf einen anderen Wert als `repeat-x` oder `repeat-y` gesetzt ist, wird dieser Wert auf beide Richtungen angewendet. Die Werte umfassen:

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um den gesamten Bereich der Hintergrundmalerei zu bedecken, wobei das Randbild abgeschnitten wird, wenn die Abmessung des Malbereichs kein Vielfaches der Abmessung Ihres Hintergrundbildes ist.

- `no-repeat`
  - : Das Bild wird nicht wiederholt (und daher wird der Bereich der Hintergrundbildmalerei möglicherweise nicht vollständig abgedeckt). Die Position des nicht wiederholten Hintergrundbildes wird durch die {{cssxref("background-position")}} CSS-Eigenschaft definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Beschnitt wiederholt. Die ersten und letzten Bilder sind an den Seiten des Elements verankert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position")}} Eigenschaft wird ignoriert, es sei denn, nur ein Bild kann ohne Beschnitt angezeigt werden. Das einzige Szenario, bei dem `space` zu einem Beschnitt führt, ist, wenn nicht genug Platz vorhanden ist, um ein Bild anzuzeigen.

- `round`
  - : Während der verfügbare Platz größer wird, werden die wiederholten Bilder gestreckt (ohne Lücken), bis Platz für ein weiteres hinzugefügt werden kann. Dies ist der einzige `<repeat-style>` Wert, der zur Verzerrung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des Hintergrundbildes führen kann, was auftritt, wenn das Seitenverhältnis des Hintergrundbildes vom Seitenverhältnis des Hintergrundmalbereichs abweicht.

- `repeat-x`
  - : Kurzform für `repeat no-repeat`, das Hintergrundbild wiederholt sich nur horizontal, wobei das Randbild abgeschnitten wird, wenn die Breite des Malbereichs kein Vielfaches der Breite des Hintergrundbildes ist.

- `repeat-y`
  - : Kurzform für `no-repeat repeat`, das Hintergrundbild wiederholt sich nur vertikal, wobei das Randbild abgeschnitten wird, wenn die Höhe des Malbereichs kein Vielfaches der Höhe des Hintergrundbildes ist.

Wenn ein `<repeat-style>` Schlüsselbegriff angegeben wird, ist der Wert eine Kurzform für die folgende Zwei-Wert Syntax:

| Einzellwert | Zwei-Wert Äquivalent  |
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

In diesem Beispiel wird jeder Listeneintrag mit einem anderen Wert von `background-repeat` abgeglichen.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die anderen {{cssxref("background")}} Kurzform-Komponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
