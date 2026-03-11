---
title: background-repeat-y
slug: Web/CSS/Reference/Properties/background-repeat-y
l10n:
  sourceCommit: 739c9994ad2e83809110f601d8941f61d6785f29
---

Die **`background-repeat-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Hintergrundbilder entlang der vertikalen Achse wiederholt oder nicht wiederholt werden.

Die Eigenschaften {{cssxref("background-repeat-x")}} und `background-repeat-y` können auch mittels der Kurzform-Eigenschaften {{cssxref("background-repeat")}} oder {{cssxref("background")}} festgelegt werden.

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

Die Eigenschaft `background-repeat-y` wird als ein oder mehrere durch Kommas getrennte Werte angegeben.

## Werte

- `repeat`
  - : Der Standardwert. Das Bild wird so oft wie nötig wiederholt, um die gesamte Höhe des Bereichs der Hintergrundbildmalerei abzudecken. Das Randbild wird abgeschnitten, wenn mehrere Bilder nicht exakt in die Hintergrundhöhe passen.

- `no-repeat`
  - : Das Bild wird nicht wiederholt. Die Position des nicht wiederholten Hintergrundbildes wird durch die CSS-Eigenschaft {{cssxref("background-position")}} definiert.

- `space`
  - : Das Bild wird so oft wie möglich ohne Abschneiden wiederholt. Die ersten und letzten Bilder sind an der Ober- und Unterseite des Elements fixiert, und der Weißraum wird gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref("background-position-y")}} wird ignoriert, es sei denn, es können ein oder mehrere Bilder ohne Abschneiden angezeigt werden. Wenn das Bild größer als das Element ist, wird es abgeschnitten, da nicht genug Platz vorhanden ist, um es anzuzeigen.

- `round`
  - : Das Bild wird vertikal wiederholt. Wenn der verfügbare Platz an Größe zunimmt, werden die wiederholten Bilder gestreckt (ohne Lücken zu lassen), bis es Platz für ein weiteres gibt, das hinzugefügt werden kann. Wenn mehrere Bilder nicht genau in den Hintergrund passen, werden sie skaliert, um zu passen.

## Beschreibung

Die Eigenschaft `background-repeat-y` akzeptiert eine durch Kommas getrennte Liste mit [`<repetition>`](#werte)-Schlüsselbegriffen, die definieren, wie Hintergrundbild(er) vertikal wiederholt oder überhaupt nicht wiederholt werden sollen.

Der Standardwert ist `repeat`. Mit diesem Wert wiederholt sich das Hintergrundbild vertikal und deckt die gesamte Höhe des Hintergrundmalbereichs ab, wobei Randbilder auf die Größe des Elements beschnitten werden. Ob die oberen, unteren oder beide Kanten beschnitten werden, hängt vom Wert der entsprechenden {{cssxref("background-position")}}-Eigenschaft ab. Wie oft Bilder wiederholt werden und wie stark die Bilder an den Rändern beschnitten werden, hängt von der Größe des Hintergrundmalbereichs und dem Höhenwert der entsprechenden {{cssxref("background-size")}}-Eigenschaft ab.

Die wiederholten Bilder können gleichmäßig verteilt werden, um sicherzustellen, dass die wiederholten Bilder in der vertikalen Richtung nicht beschnitten werden. Mit dem Wert `space` wird, wenn die Höhe des Hintergrundmalbereichs kein Vielfaches der Höhe des Bildes ist oder aus einem anderen Grund nicht die Größe eines Vielfachen der Hintergrundgröße entlang der y-Achse hat, es Bereiche geben, die nicht vom Hintergrundbild abgedeckt sind.

Alternativ kann das wiederholte Hintergrundbild gestreckt werden, um die gesamte Höhe des Hintergrundbereichs ohne Abschneiden abzudecken. Mit `round` wird, wenn die Höhe des Hintergrundmalbereichs kein Vielfaches der Höhe des Hintergrundbildes ist, das wiederholte Bild gestreckt, um den gesamten verfügbaren Raum zu füllen, bis Platz ist, um ein zusätzliches, wiederholtes Bild hinzuzufügen.

Zum Beispiel wird bei einem Hintergrundbild, das 100px x 100px groß ist, und einem Hintergrundmalbereich, der 1099px hoch ist, das Bild 10 Mal in der vertikalen Richtung wiederholt, wobei jedes Bild auf 109,9px Höhe gestreckt wird, was möglicherweise das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes ändert und es verzerrt. Wenn die Höhe des Malbereichs um 1px zunimmt und 1100px hoch wird, passt ein 11. Bild vertikal, wobei jedes Bild bei 100px Höhe gemalt wird und nicht mehr in der vertikalen Richtung gestreckt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von background-repeat-y

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

- {{cssxref("background-repeat-x")}} und die Kurzform {{cssxref("background-repeat")}}.
- Komponenten der {{cssxref("background")}} Kurzform: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} und {{cssxref("background-position-x")}}), und {{cssxref("background-size")}}
- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) Modul
- [Verständnis des Seitenverhältnisses](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
