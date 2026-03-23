---
title: background-repeat-x
slug: Web/CSS/Reference/Properties/background-repeat-x
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{SeeCompatTable}}

Die **`background-repeat-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder entlang der horizontalen Achse wiederholt werden oder nicht.

Die Eigenschaften `background-repeat-x` und {{cssxref("background-repeat-y")}} können auch mithilfe der Kurzschreibweise {{cssxref("background-repeat")}} oder {{cssxref("background")}} festgelegt werden.

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

Die Eigenschaft `background-repeat-x` wird als ein oder mehrere Werte angegeben, die durch Kommas getrennt sind.

## Werte

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wiederholt, dass es die gesamte Breite des Bereichs für die Hintergrundbildbemalung abdeckt. Das Randbild wird abgeschnitten, wenn mehrere Bilder nicht genau in die Hintergrundbreite passen.

- `no-repeat`
  - : Das Bild wird nicht wiederholt. Die Position des nicht wiederholten Hintergrundbildes wird durch die {{cssxref("background-position")}} CSS-Eigenschaft definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Abschneiden wiederholt. Die ersten und letzten Bilder werden an die linke und rechte Seite des Elements geheftet, und der Leerraum wird gleichmäßig dazwischen verteilt. Die Eigenschaft {{cssxref("background-position-x")}} wird ignoriert, es sei denn, ein oder mehrere Bilder können ohne Zuschneiden angezeigt werden. Wenn das Bild breiter als das Element ist, wird es abgeschnitten, da nicht genug Platz ist, um es anzuzeigen.

- `round`
  - : Das Bild wird horizontal wiederholt. Wenn der verfügbare Platz größer wird, strecken sich die wiederholten Bilder (ohne Lücken zu lassen), bis Platz ist, ein weiteres hinzuzufügen. Wenn mehrere Bilder nicht genau in den Hintergrund passen, werden sie skaliert, um zu passen.

## Beschreibung

Die Eigenschaft `background-repeat-x` akzeptiert eine durch Kommas getrennte Liste von [`<repetition>`](#werte) Schlüsselbegriffen, die definieren, wie das oder die Hintergrundbilder horizontal wiederholt oder gar nicht wiederholt werden sollen.

Der Standardwert ist `repeat`. Mit diesem Wert wird das Hintergrundbild horizontal wiederholt und deckt die gesamte Breite des Hintergrundbemalungsbereichs ab, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Ob die linken, rechten oder beide Ränder zugeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} ab. Wie oft Bilder wiederholt werden und wie viel die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundbemalungsbereichs und dem Breitenwert der entsprechenden {{cssxref("background-size")}} Eigenschaft ab.

Die wiederholten Bilder können gleichmäßig voneinander entfernt sein, um sicherzustellen, dass die wiederholten Bilder nicht in horizontaler Richtung zugeschnitten werden. Mit dem Wert `space`, wenn die Breite des Hintergrundbemalungsbereichs kein Vielfaches der Breite des Bildes ist oder anderweitig keine Größe hat, die ein Vielfaches der Hintergrundgröße in Breitenrichtung ist, gibt es Bereiche, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um die gesamte Breite des Hintergrundbereichs ohne Zuschneiden abzudecken. Mit `round` wird das Wiederholungsbild gestreckt, um den gesamten verfügbaren Raum auszufüllen, bis Platz ist, ein weiteres Wiederholungsbild hinzuzufügen.

Zum Beispiel wird bei einem Hintergrundbild, das `100px` x `100px` groß ist, und einem Hintergrundbemalungsbereich, der `1099px` breit ist, das Bild auf `109.9px Breite` skaliert und 10 Mal in der horizontalen Richtung wiederholt. Dadurch wird das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes geändert und verzerrt. Falls die Breite des Bemalungsbereichs um `1px` auf `1100px` anwächst, passt horizontal ein 11. Bild hinein, wobei jedes Bild in `100px` Breite gezeichnet wird und nicht mehr horizontal verzerrt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von background-repeat-x

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

In diesem Beispiel wird jedes Listenelement mit einem anderen Wert von `background-repeat-x` abgeglichen.

{{EmbedLiveSample('Setting_background-repeat-x', 240, 460)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat-y")}} und die {{cssxref("background-repeat")}} Kurzschreibweise.
- {{cssxref("background")}} Kurzschreibweise Komponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
