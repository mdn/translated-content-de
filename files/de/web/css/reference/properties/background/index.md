---
title: CSS-Eigenschaft `background`
short-title: background
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`background`**-Eigenschaft ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) von [CSS](/de/docs/Web/CSS), die alle Hintergrund-Stileigenschaften auf einmal festlegt, wie Farbe, Bild, Ursprung, Größe und Wiederholmethode.

{{InteractiveExample("CSS Demo: background")}}

```css interactive-example-choice
background: green;
```

```css interactive-example-choice
background: content-box radial-gradient(crimson, skyblue);
```

```css interactive-example-choice
background: no-repeat url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background: left 5% / 15% 60% repeat-x
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background:
  center / contain no-repeat
    url("/shared-assets/images/examples/firefox-logo.svg"),
  #eeeeee 35% url("/shared-assets/images/examples/lizard.png");
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

## Syntax

```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <visual-box> and <'background-color'> */
background: border-box red;

/* A single image, centered and scaled */
background: no-repeat center/80% url("../img/image.png");

/* Global values */
background: inherit;
background: initial;
background: revert;
background: revert-layer;
background: unset;
```

### Werte

- `<attachment>`
  - : Siehe {{cssxref("background-attachment")}}. Standard: `scroll`.
- `<visual-box>`
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Standard: `border-box` und `padding-box` jeweils.
- `<'background-color'>`
  - : Siehe {{cssxref("background-color")}}. Standard: `transparent`.
- `<bg-image>`
  - : Siehe {{Cssxref("background-image")}}. Standard: `none`.
- `<bg-position>`
  - : Siehe {{cssxref("background-position")}}. Standard: `0% 0%`.
- `<repeat-style>`
  - : Siehe {{cssxref("background-repeat")}}. Standard: `repeat`.
- `<bg-size>`
  - : Siehe {{cssxref("background-size")}}. Standard: `auto`.

## Beschreibung

Die Shorthand-Eigenschaft `background` ermöglicht es Ihnen, alle CSS-Hintergrund-Eigenschaften in einer einzigen Deklaration festzulegen. Der Hintergrund liegt unter dem Inhalt eines Elements. Wenn Sie mehrere, durch Kommas getrennte Hintergrundwerte haben, ist jeder ein Hintergrund-Layer, der über den vorherigen Layern gemalt wird.

Die `background`-Eigenschaft wird als eine oder mehrere Hintergrund-Layer angegeben, getrennt durch Kommas. Jeder Layer kann null, ein oder zwei `<visual-box>` Komponenten sowie null oder eine `<attachment>`, `<bg-image>`, `<bg-position>`, `<bg-size>`, und `<repeat-style>` Komponenten enthalten. Wenn zwei `<bg-position>`, `<bg-size>`, oder `<repeat-style>` Komponenten angegeben werden, ist der erste Wert der horizontale Wert und der zweite Wert der vertikale Wert. Wenn nur ein einziger Wert festgelegt ist, wird dieser Wert auf beide Dimensionen angewendet.

Die Komponente `<'background-color'>` kann nur im zuletzt angegebenen Hintergrund-Layer enthalten sein.

Komponenteneigenschaften, die in der Shorthand-Eigenschaft `background`-Deklaration nicht gesetzt sind, werden auf ihre Standardwerte gesetzt.

### Reihenfolge der Komponenteneigenschaften

Da einige der Komponenteneigenschaften gemeinsame Wertetypen aufweisen, ist die Reihenfolge dieser Komponenteneigenschaften innerhalb der Shorthand wichtig.

Der `<bg-size>`-Wert darf nur unmittelbar nach `<bg-position>` enthalten sein, getrennt durch das `/`-Zeichen. Beispiel: `10px 10px / 80% 80%` bedeutet, dass das Hintergrundbild `80%` so hoch und breit wie das Element sein soll und `10px` von oben und `10px` von der linken oberen Ecke des Elements positioniert wird. Innerhalb der `<bg-position>`, wenn beide Werte Längen sind oder einer eine Länge und der andere `center` ist, bezieht sich der erste Wert auf die horizontale Position und der zweite Wert auf die vertikale Position.

Jeder Hintergrundlayer kann null, ein oder zwei [`<visual-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#visual-box)-Werte enthalten. Wenn nur ein Wert enthalten ist, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Wenn zwei Werte vorhanden sind, gibt der erste das `background-origin` und der zweite den `background-clip`-Wert an. Wenn keine `<visual-box>`-Werte vorhanden sind, ist der Standard für `background-origin` `padding-box` und für `background-clip` `border-box`.

Obwohl keine Reihenfolge für die anderen Hintergrund-Eigenschaften erforderlich ist, wird die folgende Reihenfolge aus Konsistenz- und Lesbarkeitsgründen empfohlen; denken Sie daran, dass keiner der Werte erforderlich ist:

`<bg-image> <bg-position> / <bg-size> <repeat-style> <attachment> <bg-clip> <bg-origin> <'background-color'>`

Der folgende `background` setzt explizit alle Standardwerte in dieser Reihenfolge:

```css
background: none 0% 0% / auto auto repeat scroll border-box padding-box
  transparent;
```

Die folgenden drei Zeilen CSS sind äquivalent zu oben, auch wenn die Reihenfolge unterschiedlich ist:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### Reihenfolge der Bildbearbeitung

Wenn mehrere, durch Komma getrennte Hintergründe enthalten sind, erzeugen sie mehrere Hintergrund-Layer, die übereinander liegen. Der erste Hintergrund in der Liste erzeugt den obersten Layer. Wenn der oberste Layer keine transparenten Bereiche enthält, ist dies der einzige sichtbar.

Der letzte Layer ist der unterste Layer. Die Hintergrundfarbe ist immer in diesem Layer enthalten.

### Hintergrund des Body auf das gesamte Dokument anwenden

Wenn der berechnete `background-image`-Wert des Dokument-Elementes {{htmlelement("html")}} `:root` `none` ist und seine `background-color` `transparent` ist, wird der Browser die auf das {{htmlelement("body")}}-Element gesetzten `background`-Stile auf `:root` übertragen und das `<body>` so behandeln, als ob `background: initial` gesetzt wäre. Mit anderen Worten, das `<html>`-Element erhält alle auf das `<body>`-Element gesetzten `background`-Stile, und die Hintergrund-Eigenschaften des `<body>`-Elements werden auf ihre Anfangswerte gesetzt.

Aufgrund dieses Verhaltens empfehlen die Autoren der Spezifikation, die Hintergrundstile Ihres Dokuments im Stilblock von `body` statt im Stilblock von `html` festzulegen. Es ist jedoch wichtig zu beachten, dass die Verwendung von Containment dieses Verhalten deaktiviert. Wenn die Eigenschaft {{cssxref("contain")}} auf entweder dem `<html>`- oder `<body>`-Element auf etwas anderes als `none` gesetzt ist, wird die `background`-Eigenschaft und ihre Langform-Komponenten nicht vom `<body>`-Element auf das Root-`<html>`-Element übertragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologie. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher nichts an seine Benutzer weitergibt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Setzen von Hintergründen mit Farb-Schlüsselwörtern und Bildern

#### HTML

```html
<p class="top-banner">
  Starry sky<br />
  Twinkle twinkle<br />
  Starry sky
</p>
<p class="warning">Here is a paragraph</p>
<p></p>
```

#### CSS

```css
.warning {
  background: pink;
}

.top-banner {
  background: url("star-solid.gif") #9999ff repeat-y fixed;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_backgrounds_with_color_keywords_and_images")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("box-decoration-break")}}
- [Verwendung von Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
