---
title: "`background-repeat-y` CSS property"
short-title: background-repeat-y
slug: Web/CSS/Reference/Properties/background-repeat-y
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`background-repeat-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder entlang der vertikalen Achse wiederholt werden oder nicht.

Die Eigenschaften {{cssxref("background-repeat-x")}} und `background-repeat-y` können auch mit den Kurzschreibweisen {{cssxref("background-repeat")}} oder {{cssxref("background")}} eingestellt werden.

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
  - : Der Standardwert. Das Bild wird so oft wiederholt, wie nötig, um die gesamte Höhe des Bereichs für die Hintergrundbilddarstellung zu bedecken. Das Randbild wird abgeschnitten, wenn mehrere Bilder nicht genau in die Hintergrundhöhe passen.

- `no-repeat`
  - : Das Bild wird nicht wiederholt. Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Abschneiden wiederholt. Die ersten und letzten Bilder werden an der Ober- und Unterseite des Elements fixiert, und der Leerraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("background-position-y")}} wird ignoriert, es sei denn, ein oder mehrere Bilder können ohne Abschneiden angezeigt werden. Wenn das Bild größer als das Element ist, wird es abgeschnitten, da nicht genügend Platz vorhanden ist, um es anzuzeigen.

- `round`
  - : Das Bild wird vertikal wiederholt. Wenn der verfügbare Platz größer wird, werden die wiederholten Bilder gedehnt (ohne Lücken zu hinterlassen), bis Platz für ein weiteres Bild geschaffen ist. Wenn mehrere Bilder nicht genau in den Hintergrund passen, werden sie skaliert, um zu passen.

## Beschreibung

Die `background-repeat-y` Eigenschaft akzeptiert eine durch Kommas getrennte Liste von [`<repetition>`](#werte) Schlüsselbegriffen, die festlegen, wie Hintergrundbild(er) vertikal wiederholt oder überhaupt nicht wiederholt werden sollen.

Der Standardwert ist `repeat`. Mit diesem Wert wird das Hintergrundbild vertikal wiederholt, wobei die gesamte Höhe des Hintergrundanstrichbereichs abgedeckt wird, und Randbilder werden auf die Größe des Elements zugeschnitten. Ob die oberen, unteren oder beide Ränder zugeschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}} Eigenschaft ab. Wie oft Bilder wiederholt werden und wie stark die Bilder an den Rändern zugeschnitten werden, hängt von der Größe des Hintergrundanstrichbereichs und dem Höhenwert der entsprechenden {{cssxref("background-size")}} Eigenschaft ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, sodass die wiederholten Bilder in vertikaler Richtung nicht abgeschnitten werden. Mit dem `space` Wert, wenn die Höhe des Hintergrundanstrichbereichs kein Vielfaches der Bildhöhe ist oder ansonsten keine Größe hat, die ein Vielfaches der Hintergrundgröße entlang der y-Achse ist, wird es Bereiche geben, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um die gesamte Höhe des Hintergrundbereichs ohne Abschneiden zu bedecken. Bei `round`, wenn die Höhe des Hintergrundanstrichs kein Vielfaches der Höhe des Hintergrundbilds ist, wird das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis Platz vorhanden ist, um ein zusätzliches wiederholtes Bild hinzuzufügen.

Beispielsweise wird bei einem Hintergrundbild von 100px x 100px und einem Hintergrundanstrichbereich, der 1099px hoch ist, das Bild zehnmal vertikal wiederholt, wobei jedes Bild auf 109,9px Höhe gestreckt wird, was möglicherweise das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes ändert und es verzerrt. Wenn die Höhe des Anstrichbereichs um 1px zunimmt und 1100px hoch wird, passt sich ein elftes Bild vertikal ein, wobei jedes Bild wieder auf 100px Höhe gemalt wird und nicht mehr in vertikaler Richtung gestreckt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von `background-repeat-y`

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

In diesem Beispiel wird jedem Listenelement ein anderer Wert von `background-repeat-y` zugewiesen.

{{EmbedLiveSample('Setting_background-repeat-y', 240, 460)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-repeat-x")}} und die {{cssxref("background-repeat")}} Kurzschreibweise.
- {{cssxref("background")}} Kurzschreibkomponenten: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}) und {{cssxref("background-size")}}
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
