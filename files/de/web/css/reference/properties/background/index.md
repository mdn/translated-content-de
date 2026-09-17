---
title: CSS-Eigenschaft `background`
short-title: background
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: 3f221b9845703eb21db70cdc321f843d5c1c072b
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`background`** legt alle Stileigenschaften für Hintergründe gleichzeitig fest, beispielsweise Farbe, Bild, Ursprung, Größe und Wiederholungsmethode.

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

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

### Nur-zurücksetzbare Untereigenschaften

Diese Eigenschaft setzt die folgenden CSS-Eigenschaften auf ihre Anfangswerte zurück:

- {{cssxref("background-blend-mode")}}

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
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Standard: jeweils `border-box` und `padding-box`.
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

Die Kurzform-Eigenschaft `background` ermöglicht es Ihnen, alle CSS-Hintergrundeigenschaften in einer einzelnen Deklaration festzulegen. Der Hintergrund befindet sich unterhalb des Inhalts eines Elements. Bei mehreren durch Kommas getrennten Hintergrundwerten ist jeder Wert eine Hintergrundebene, die über den vorherigen Ebenen gezeichnet wird.

Die Eigenschaft `background` wird als eine oder mehrere, durch Kommas getrennte Hintergrundebenen angegeben. Jede Ebene kann null, eine oder zwei `<visual-box>`-Komponenten sowie null oder eine `<attachment>`-, `<bg-image>`-, `<bg-position>`-, `<bg-size>`- und `<repeat-style>`-Komponente enthalten. Wenn zwei `<bg-position>`-, `<bg-size>`- oder `<repeat-style>`-Komponenten angegeben werden, ist der erste Wert der horizontale und der zweite der vertikale Wert. Wenn nur ein einzelner Wert festgelegt ist, wird dieser Wert auf beide Dimensionen angewendet.

Die Komponente `<'background-color'>` darf nur in der zuletzt angegebenen Hintergrundebene enthalten sein.

Komponenteneigenschaften, die in der Wertdeklaration der Kurzform-Eigenschaft `background` nicht festgelegt werden, werden auf ihre Standardwerte gesetzt.

### Reihenfolge der Komponenteneigenschaften

Da einige der Komponenteneigenschaften gemeinsame Werttypen haben, ist die Reihenfolge dieser Komponenteneigenschaften innerhalb der Kurzform wichtig.

Der Wert `<bg-size>` darf nur direkt nach `<bg-position>` stehen und muss durch das Zeichen `/` getrennt werden. Beispielsweise bedeutet `10px 10px / 80% 80%`, dass das Hintergrundbild `80%` so hoch und breit wie das Element ist und `10px` vom oberen sowie `10px` vom linken Rand der oberen linken Ecke des Elements positioniert wird. Wenn innerhalb von `<bg-position>` beide Werte Längen sind oder einer eine Länge und der andere `center` ist, bezieht sich der erste Wert auf die horizontale Position und der zweite auf die vertikale Position.

Jede Hintergrundebene kann null, einen oder zwei [`<visual-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#visual-box)-Werte enthalten. Wenn nur ein Wert enthalten ist, legt dieser sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}} fest. Wenn zwei Werte vorhanden sind, gibt das erste Vorkommen `background-origin` und das zweite den Wert für `background-clip` an. Wenn keine `<visual-box>`-Werte vorhanden sind, ist der Standardwert für `background-origin` `padding-box` und der Standardwert für `background-clip` `border-box`.

Obwohl für die anderen Hintergrundeigenschaften keine Reihenfolge erforderlich ist, wird aus Gründen der Konsistenz und Lesbarkeit die folgende Reihenfolge empfohlen; beachten Sie, dass keiner der Werte erforderlich ist:

`<bg-image> <bg-position> / <bg-size> <repeat-style> <attachment> <bg-clip> <bg-origin> <'background-color'>`

Das folgende `background` legt in dieser Reihenfolge explizit alle Standardwerte fest:

```css
background: none 0% 0% / auto auto repeat scroll border-box padding-box
  transparent;
```

Die folgenden drei CSS-Zeilen sind dem oben genannten äquivalent, auch wenn die Reihenfolge unterschiedlich ist:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### Reihenfolge beim Zeichnen von Bildern

Wenn mehrere durch Kommas getrennte Hintergründe enthalten sind, erzeugen sie mehrere übereinanderliegende Hintergrundebenen. Der erste Hintergrund in der Liste erzeugt die oberste Ebene. Wenn die oberste Ebene keine transparenten Bereiche enthält, ist dies die einzige sichtbare Ebene.

Die letzte Ebene ist die unterste Ebene. Die Hintergrundfarbe ist immer in dieser Ebene enthalten.

### Auf das gesamte Dokument angewendeter Body-Hintergrund

Wenn der berechnete Wert von `background-image` des `:root`-Elements {{htmlelement("html")}} des Dokuments `none` und sein `background-color` `transparent` ist, überträgt der Browser die auf dem Element {{htmlelement("body")}} festgelegten `background`-Stile auf `:root` und behandelt `<body>`, als wäre `background: initial` festgelegt. Mit anderen Worten: Das Element `<html>` erhält alle auf dem Element `<body>` festgelegten `background`-Stile, und die Hintergrundeigenschaften des Elements `<body>` werden auf ihre Anfangswerte gesetzt.

Aufgrund dieses Verhaltens empfehlen die Autoren der Spezifikation, die Hintergrundstile Ihres Dokuments in Ihrem `body`-Stilblock statt in Ihrem `html`-Stilblock festzulegen. Es ist jedoch wichtig zu beachten, dass die Verwendung von Containment dieses Verhalten deaktiviert. Wenn die Eigenschaft {{cssxref("contain")}} auf dem Element `<html>` oder `<body>` auf einen anderen Wert als `none` gesetzt ist, werden die Eigenschaft `background` und alle Longhand-Komponenten nicht vom Element `<body>` an das Root-Element `<html>` weitergegeben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser stellen assistiven Technologien keine speziellen Informationen über Hintergrundbilder bereit. Dies ist vor allem für Screenreader wichtig, da ein Screenreader deren Vorhandensein nicht ankündigt und seinen Nutzern daher keine Informationen vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN-Erklärungen zum Verständnis von WCAG, Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Hintergründe mit Farbschlüsselwörtern und Bildern festlegen

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
