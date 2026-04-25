---
title: "`background-repeat-x` CSS property"
short-title: background-repeat-x
slug: Web/CSS/Reference/Properties/background-repeat-x
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

{{SeeCompatTable}}

Die **`background-repeat-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder entlang der horizontalen Achse wiederholt oder nicht wiederholt werden.

Die Eigenschaften `background-repeat-x` und {{cssxref("background-repeat-y")}} können auch über die Kurzform-Eigenschaften {{cssxref("background-repeat")}} oder {{cssxref("background")}} festgelegt werden.

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

Die Eigenschaft `background-repeat-x` wird als ein oder mehrere durch Kommas getrennte Werte angegeben.

## Werte

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wiederholt, wie nötig, um die gesamte Breite des Hintergrundbild-Malbereichs abzudecken. Das Randbild wird abgeschnitten, wenn mehrere Bilder nicht genau in die Hintergrundbreite passen.

- `no-repeat`
  - : Das Bild wird nicht wiederholt. Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Abschneiden wiederholt. Die ersten und letzten Bilder sind links und rechts am Element fixiert, und der Leerraum wird gleichmäßig zwischen ihnen verteilt. Die Eigenschaft {{cssxref("background-position-x")}} wird ignoriert, es sei denn, ein oder mehrere Bilder können ohne Abschneiden angezeigt werden. Wenn das Bild breiter als das Element ist, wird es abgeschnitten, da nicht genügend Platz zur Verfügung steht, um es anzuzeigen.

- `round`
  - : Das Bild wird horizontal wiederholt. Wenn der verfügbare Platz größer wird, werden die wiederholten Bilder gedehnt (ohne Lücken), bis Platz für ein weiteres vorhanden ist. Falls mehrere Bilder nicht genau in den Hintergrund passen, werden sie neu skaliert, um zu passen.

## Beschreibung

Die Eigenschaft `background-repeat-x` akzeptiert eine durch Kommas getrennte Liste von [`<repetition>`](#werte) Schlüsselbegriffen, die festlegen, wie das/die Hintergrundbild(er) horizontal wiederholt oder überhaupt nicht wiederholt werden soll(en).

Der Standardwert ist `repeat`. Mit diesem Wert wird das Hintergrundbild horizontal wiederholt und deckt die gesamte Breite des Hintergrundmalbereichs ab, wobei Randbilder auf die Größe des Elements zugeschnitten werden. Ob die linke, rechte oder beide Ränder zugeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} ab. Wie oft Bilder wiederholt und wie sehr die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem Breitenwert der entsprechenden {{cssxref("background-size")}} Eigenschaft ab.

Die sich wiederholenden Bilder können gleichmäßig verteilt werden, um sicherzustellen, dass die wiederholten Bilder in horizontaler Richtung nicht zugeschnitten werden. Mit dem Wert `space`, wenn die Breite des Hintergrundmalbereichs kein Vielfaches der Breite des Bildes ist oder anderweitig keine Größe hat, die ein Vielfaches der Hintergrundgröße in der Breitenrichtung ist, wird es Bereiche geben, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um die gesamte Breite des Hintergrundbereichs ohne Abschneiden abzudecken. Mit `round` wird das wiederholte Bild gedehnt, um den gesamten verfügbaren Platz auszufüllen, bis genügend Platz für ein zusätzliches wiederholtes Bild vorhanden ist.

Zum Beispiel wird bei einem `100px` x `100px` großen Hintergrundbild und einem `1099px` breiten Hintergrundmalbereich das Bild auf `109.9px` Breite skaliert und 10-mal horizontal wiederholt. Dies wird das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes ändern und es verziehen. Vergrößert sich die Breite des Malbereichs um `1px` auf `1100px`, passt ein 11. Bild horizontal hinein, wobei jedes Bild mit `100px` Breite gemalt wird und nicht mehr horizontal verzerrt ist.

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
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

In diesem Beispiel wird jeder Listeneintrag mit einem anderen Wert von `background-repeat-x` übereinstimmen.

{{EmbedLiveSample('Setting_background-repeat-x', 240, 460)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat-y")}} und die Kurzform {{cssxref("background-repeat")}}.
- {{cssxref("background")}}-Kurzformkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}), und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
