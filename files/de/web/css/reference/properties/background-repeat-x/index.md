---
title: "`background-repeat-x` CSS property"
short-title: background-repeat-x
slug: Web/CSS/Reference/Properties/background-repeat-x
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`background-repeat-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder entlang der horizontalen Achse wiederholt werden oder nicht.

Die Eigenschaften `background-repeat-x` und {{cssxref("background-repeat-y")}} können auch mithilfe der Kurzschreibweisen {{cssxref("background-repeat")}} oder {{cssxref("background")}} festgelegt werden.

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
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um die gesamte Breite des Hintergrundmalbereichs abzudecken. Das Randbild wird abgeschnitten, wenn mehrere Bilder nicht genau in die Hintergrundbreite passen.

- `no-repeat`
  - : Das Bild wird nicht wiederholt. Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so weit wie möglich wiederholt, ohne abgeschnitten zu werden. Die ersten und letzten Bilder sind am linken und rechten Rand des Elements fixiert und der Weißraum wird gleichmäßig dazwischen verteilt. Die Eigenschaft {{cssxref("background-position-x")}} wird ignoriert, es sei denn, es können ein oder mehrere Bilder ohne Abschneiden angezeigt werden. Wenn das Bild breiter als das Element ist, wird es abgeschnitten, da nicht genug Platz vorhanden ist, um es anzuzeigen.

- `round`
  - : Das Bild wird horizontal wiederholt. Wenn der verfügbare Platz größer wird, werden die wiederholten Bilder gestreckt (ohne Lücken), bis Platz für ein weiteres Bild vorhanden ist. Wenn mehrere Bilder nicht genau in den Hintergrund passen, werden sie skaliert, um zu passen.

## Beschreibung

Die Eigenschaft `background-repeat-x` akzeptiert eine kommagetrennte Liste von [`<repetition>`](#werte) Schlüsselbegriffen, die definieren, wie das/die Hintergrundbild(er) horizontal wiederholt werden oder gar nicht wiederholt werden sollen.

Der Standardwert ist `repeat`. Mit diesem Wert wird das Hintergrundbild horizontal wiederholt und deckt die gesamte Breite des Hintergrundmalbereichs ab, wobei Randbilder auf die Größe des Elements beschnitten werden. Ob die linken, rechten oder beide Ränder beschnitten werden, hängt vom Wert des entsprechenden Werts von {{cssxref("background-position")}} ab. Wie oft die Bilder wiederholt werden und wie stark die Randbilder beschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem Wert der entsprechenden {{cssxref("background-size")}} Eigenschaft ab.

Die wiederholten Bilder können gleichmäßig voneinander entfernt werden, um sicherzustellen, dass die wiederholten Bilder nicht horizontal beschnitten werden. Mit dem `space` Wert, wenn die Breite des Hintergrundmalbereichs kein Vielfaches der Breite des Bildes ist oder nicht anderweitig eine Größe hat, die ein Vielfaches der Hintergrundgröße in der Breitenrichtung ist, wird es Bereiche geben, die nicht durch das Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um die gesamte Breite des Hintergrundbereichs ohne Abschneiden zu bedecken. Mit `round` wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis Platz ist, um ein zusätzliches wiederholtes Bild hinzuzufügen.

Zum Beispiel wird bei einem Hintergrundbild, das `100px` x `100px` groß ist, und einem Hintergrundmalbereich, der `1099px` breit ist, das Bild auf `109.9px Breite` verkleinert und 10-mal horizontal wiederholt. Dies verändert das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes und verzerrt es. Wenn die Breite des Malbereichs um `1px` auf `1100px` zunimmt, passt ein 11. Bild horizontal hinein, wobei jedes Bild bei `100px` Breite gemalt wird und nicht mehr horizontal verzerrt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von background-repeat-x

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

In diesem Beispiel wird jedem Listenelement ein anderer Wert von `background-repeat-x` zugewiesen.

{{EmbedLiveSample('Setting_background-repeat-x', 240, 460)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat-y")}} und die {{cssxref("background-repeat")}}-Kurzform.
- {{cssxref("background")}}-Kurzform-Komponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Using multiple backgrounds](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS backgrounds and borders](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) module
- [Understanding aspect ratios](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
