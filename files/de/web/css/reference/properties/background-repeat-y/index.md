---
title: background-repeat-y
slug: Web/CSS/Reference/Properties/background-repeat-y
l10n:
  sourceCommit: 76e6e5407fd7cb49fb54dc51c7790a8b71ecec7f
---

{{SeeCompatTable}}

Die **`background-repeat-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder entlang der vertikalen Achse wiederholt werden oder nicht.

Die Eigenschaften {{cssxref("background-repeat-x")}} und `background-repeat-y` können auch mit den Kurzschreibweisen {{cssxref("background-repeat")}} oder {{cssxref("background")}} festgelegt werden.

{{InteractiveExample("CSS Demo: background-repeat-y")}}

```css interactive-example-choice
background-repeat-y: repeat;
```

```css interactive-example-choice
background-repeat-y: space;
```

```css interactive-example-choice
background-repeat-y: round;
```

```css interactive-example-choice
background-repeat-y: no-repeat;
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
background-repeat-y: repeat;
background-repeat-y: space;
background-repeat-y: round;
background-repeat-y: no-repeat;

/* Global values */
background-repeat-y: inherit;
background-repeat-y: initial;
background-repeat-y: revert;
background-repeat-y: revert-layer;
background-repeat-y: unset;
```

Die `background-repeat-y` Eigenschaft wird als eine oder mehrere durch Kommas getrennte Werte angegeben.

## Werte

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um die gesamte Höhe des Hintergrundbild-Malbereichs abzudecken. Das Randbild wird abgeschnitten, wenn mehrere Bilder nicht genau in die Hintergrundhöhe passen.

- `no-repeat`
  - : Das Bild wird nicht wiederholt. Die Position des nicht wiederholten Hintergrundbilds wird durch die {{cssxref("background-position")}} CSS-Eigenschaft definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Abschneiden wiederholt. Die ersten und letzten Bilder werden an der Ober- und Unterseite des Elements befestigt, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die {{cssxref("background-position-y")}} Eigenschaft wird ignoriert, es sei denn, ein oder mehrere Bilder können ohne Abschneiden angezeigt werden. Wenn das Bild höher als das Element ist, wird es abgeschnitten, da nicht genug Platz vorhanden ist, um es anzuzeigen.

- `round`
  - : Das Bild wird vertikal wiederholt. Wenn der verfügbare Platz größer wird, werden die wiederholten Bilder gestreckt (ohne Lücken zu lassen), bis Platz für ein weiteres Bild vorhanden ist. Wenn mehrere Bilder nicht genau in den Hintergrund passen, werden sie angepasst, um zu passen.

## Beschreibung

Die `background-repeat-y` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von [`<repetition>`](#werte)-Schlüsselbegriffen, die definieren, wie Hintergrundbilder sich vertikal wiederholen sollen oder gar nicht.

Der Standardwert ist `repeat`. Mit diesem Wert wiederholt sich das Hintergrundbild vertikal und deckt die gesamte Höhe des Hintergrundmalbereichs ab, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Ob die oberen, unteren oder beide Ränder zugeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} Eigenschaft ab. Wie oft Bilder wiederholt werden und wie sehr die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem Höhenwert der entsprechenden {{cssxref("background-size")}} Eigenschaft ab.

Die wiederholenden Bilder können gleichmäßig voneinander entfernt sein, um sicherzustellen, dass die wiederholten Bilder in vertikaler Richtung nicht abgeschnitten werden. Mit dem `space` Wert, wenn die Höhe des Hintergrundmalbereichs kein Vielfaches der Bildhöhe ist oder aus anderen Gründen keine Größe hat, die ein Vielfaches der Hintergrundgröße auf der y-Achse ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt werden.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um die gesamte Höhe des Hintergrundbereichs ohne Abschneiden abzudecken. Mit `round`, wenn die Höhe des Hintergrundmalbereichs kein Vielfaches der Höhe des Hintergrundbilds ist, wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum auszufüllen, bis Platz vorhanden ist, um ein zusätzliches wiederholtes Bild hinzuzufügen.

Zum Beispiel wird bei einem Hintergrundbild, das 100px x 100px groß ist, und einem Hintergrundmalbereich, der 1099px hoch ist, das Bild 10 Mal in vertikaler Richtung wiederholt, wobei jedes Bild auf 109,9px Höhe gestreckt wird, möglicherweise das {{Glossary("aspect_ratio", "Seitenverhältnis")}} ändernd und es verzerrend. Wenn die Höhe des Malbereichs um 1px zunimmt und 1100px hoch wird, passt ein 11. Bild vertikal hinein, wobei jedes Bild mit 100px Höhe bemalt wird, ohne in vertikaler Richtung gestreckt zu werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrund-Wiederholung y einstellen

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
    space
    <div class="three"></div>
  </li>
  <li>
    round
    <div class="four"></div>
  </li>
</ol>
```

#### CSS

```css
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
  background-repeat-y: no-repeat;
}
.two {
  background-repeat-y: repeat;
}
.three {
  background-repeat-y: space;
}
.four {
  background-repeat-y: round;
}
```

```css hidden
@layer no-support {
  @supports not (background-repeat-y: repeat) {
    body::before {
      content: "Your browser doesn't support the `background-repeat-y` property.";
      background-color: wheat;
      display: block;
      padding: 1em;
      text-align: center;
    }
  }
}
```

#### Ergebnis

In diesem Beispiel wird jedem Listenelement ein anderer Wert von `background-repeat-y` zugeordnet.

{{EmbedLiveSample('Setting_background-repeat-y', 240, 460)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat-x")}} und die Kurzschreibweise {{cssxref("background-repeat")}}.
- Komponenten der Kurzschreibweise {{cssxref("background")}}: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
