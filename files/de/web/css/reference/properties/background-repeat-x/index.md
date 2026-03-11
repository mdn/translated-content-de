---
title: background-repeat-x
slug: Web/CSS/Reference/Properties/background-repeat-x
l10n:
  sourceCommit: 739c9994ad2e83809110f601d8941f61d6785f29
---

Die **`background-repeat-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder entlang der horizontalen Achse wiederholt werden oder nicht.

Die Eigenschaften `background-repeat-x` und {{cssxref("background-repeat-y")}} können auch durch die Kurzschreibweisen {{cssxref("background-repeat")}} oder {{cssxref("background")}} festgelegt werden.

{{InteractiveExample("CSS Demo: background-repeat-x")}}

```css interactive-example-choice
background-repeat-x: repeat;
```

```css interactive-example-choice
background-repeat-x: space;
```

```css interactive-example-choice
background-repeat-x: round;
```

```css interactive-example-choice
background-repeat-x: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") no-repeat
    center / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

## Syntax

```css
/* Keyword values */
background-repeat-x: repeat;
background-repeat-x: space;
background-repeat-x: round;
background-repeat-x: no-repeat;

/* Global values */
background-repeat-x: inherit;
background-repeat-x: initial;
background-repeat-x: revert;
background-repeat-x: revert-layer;
background-repeat-x: unset;
```

Die Eigenschaft `background-repeat-x` wird als eine oder mehrere Werte angegeben, getrennt durch Kommas.

## Werte

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um die gesamte Breite des Hintergrundbild-Malbereichs abzudecken. Das Randbild wird abgeschnitten, wenn mehrere Bilder nicht genau in die Hintergrundbreite passen.

- `no-repeat`
  - : Das Bild wird nicht wiederholt. Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Abschneiden wiederholt. Die ersten und letzten Bilder sind am linken und rechten Rand des Elements fixiert, und der Leerraum wird gleichmäßig zwischen ihnen verteilt. Die Eigenschaft {{cssxref("background-position-x")}} wird ignoriert, es sei denn, ein oder mehrere Bilder können ohne Abschneiden angezeigt werden. Wenn das Bild breiter als das Element ist, wird es abgeschnitten, da nicht genügend Platz vorhanden ist, um es anzuzeigen.

- `round`
  - : Das Bild wird horizontal wiederholt. Wenn der verfügbare Platz wächst, werden die wiederholten Bilder gestreckt (ohne Lücken zu lassen), bis Platz für ein weiteres Bild vorhanden ist. Wenn mehrere Bilder nicht genau in den Hintergrund passen, werden sie skaliert, um zu passen.

## Beschreibung

Die Eigenschaft `background-repeat-x` akzeptiert eine durch Kommas getrennte Liste von [`<repetition>`](#werte) Schlüsselbegriffen, die definieren, wie das/die Hintergrundbild/-er horizontal wiederholt werden soll/en oder gar nicht wiederholt werden soll/en.

Der Standardwert ist `repeat`. Mit diesem Wert wird das Hintergrundbild horizontal wiederholt, um die gesamte Breite des Hintergrundmalbereichs abzudecken, wobei Randbilder auf die Größe des Elements abgeschnitten werden. Ob die linken, rechten oder beide Ränder abgeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} Eigenschaft ab. Wie oft Bilder wiederholt werden und wie stark die Bilder an den Rändern abgeschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem Breitenwert der entsprechenden {{cssxref("background-size")}} Eigenschaft ab.

Die wiederholten Bilder können gleichmäßig auseinandergesetzt werden, sodass die wiederholten Bilder in horizontaler Richtung nicht abgeschnitten werden. Mit dem `space` Wert, falls die Breite des Hintergrundmalbereichs kein Vielfaches der Bildbreite ist oder eine andere Größe hat, die ein Vielfaches des Hintergrundes in der Breitenrichtung ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um die gesamte Breite des Hintergrundbereichs ohne Abschneiden zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Platz zu füllen, bis Platz für ein zusätzliches wiederholtes Bild vorhanden ist.

Zum Beispiel, bei einem Hintergrundbild, das `100px` x `100px` groß ist, und einem Hintergrundmalbereich, der `1099px` breit ist, wird das Bild auf `109,9px breite` skaliert und 10 Mal in der horizontalen Richtung wiederholt. Dies wird das Seitenverhältnis {{Glossary("aspect_ratio", "aspect ratio")}} des Bildes verändern und es verzerren. Wenn die Breite des Malbereichs um `1px` auf `1100px` zunimmt, wird ein elftes Bild horizontal passen, wobei jedes Bild mit `100px` Breite gezeichnet wird und nicht mehr horizontal verzerrt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von background-repeat-x

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
  background-repeat-x: no-repeat;
}
.two {
  background-repeat-x: repeat;
}
.three {
  background-repeat-x: space;
}
.four {
  background-repeat-x: round;
}
```

```css hidden
@layer no-support {
  @supports not (background-repeat-x: repeat) {
    body::before {
      content: "Your browser doesn't support the `background-repeat-x` property.";
      background-color: wheat;
      display: block;
      padding: 1em;
      text-align: center;
    }
  }
}
```

#### Ergebnis

In diesem Beispiel wird jeder Listeneintrag mit einem anderen Wert von `background-repeat-x` abgeglichen.

{{EmbedLiveSample('Setting_background-repeat-x', 240, 460)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat-y")}} und die {{cssxref("background-repeat")}} Kurzschreibweise.
- {{cssxref("background")}} Kurzschreibkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
