---
title: Hintergrund
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: 17fe7cfd4967960c9ee8ec2c423aaf27c66575ba
---

Die **`background`** [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft setzt alle Hintergrundstil-Eigenschaften auf einmal, wie Farbe, Bild, Ursprung, Größe und Wiederholungsmethode.

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

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Standard: `border-box` und `padding-box`.
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

Die `background`-Kurzform-Eigenschaft ermöglicht es Ihnen, alle CSS-Hintergrund-Eigenschaften in einer einzigen Deklaration zu definieren. Der Hintergrund liegt unter dem Inhalt eines Elements. Wenn Sie mehrere, durch Kommas getrennte Hintergrundwerte haben, ist jeder davon eine Hintergrundschicht, die auf den vorherigen Schichten angebracht wird.

Die `background`-Eigenschaft wird als eine oder mehrere Hintergrundschichten angegeben, die durch Kommas getrennt sind. Jede Schicht kann null, eines oder zwei `<visual-box>`-Komponenten und null oder eine `<attachment>`, `<bg-image>`, `<bg-position>`, `<bg-size>` und `<repeat-style>`-Komponenten enthalten. Wenn zwei `<bg-position>`, `<bg-size>` oder `<repeat-style>`-Komponenten angegeben sind, ist der erste Wert der horizontale Wert und der zweite der vertikale Wert. Wenn nur ein einzelner Wert gesetzt ist, wird dieser Wert auf beide Dimensionen angewendet.

Die `<'background-color'>`-Komponente kann nur in der letzten angegebenen Hintergrundschicht enthalten sein.

Eigenschaften von Komponenten, die in der `background`-Kurzform-Eigenschaft-Deklaration nicht gesetzt sind, werden auf ihre Standardwerte gesetzt.

### Reihenfolge der Komponenten-Eigenschaften

Da einige der Komponenten-Eigenschaften gleiche Werttypen teilen, ist die Reihenfolge dieser Komponenten-Eigenschaften innerhalb der Kurzform wichtig.

Der `<bg-size>`-Wert darf nur unmittelbar nach `<bg-position>`, getrennt mit dem `/`-Zeichen, enthalten sein. Zum Beispiel: `10px 10px / 80% 80%` bedeutet, dass das Hintergrundbild `80%` so hoch und breit wie das Element ist und `10px` vom oberen und `10px` vom linken oberen Eckpunkt des Elements positioniert wird. Innerhalb der `<bg-position>`, wenn beide Werte Längen sind oder einer eine Länge und der andere `center` ist, bezieht sich der erste Wert auf die horizontale Position und der zweite auf die vertikale Position.

Jede Hintergrundschicht kann null, eines oder zwei [`<visual-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#visual-box)-Werte enthalten. Wenn nur ein Wert enthalten ist, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Wenn zwei Werte vorhanden sind, gibt der erste das `background-origin` und der zweite die `background-clip`-Wert an. Wenn keine `<visual-box>`-Werte vorhanden sind, wird `background-origin` standardmäßig auf `border-box` und `background-clip` auf `padding-box` gesetzt.

Obwohl es keine Reihenfolge für die anderen Hintergrund-Eigenschaften gibt, wird die folgende Reihenfolge für Konsistenz und Lesbarkeit empfohlen; beachten Sie, dass keiner der Werte erforderlich ist:

`<bg-image> <bg-position> / <bg-size> <repeat-style> <attachment> <bg-clip> <bg-origin> <'background-color'>`

Der folgende `background` setzt explizit alle Standardwerte in dieser Reihenfolge:

```css
background: none 0% 0% / auto auto repeat scroll border-box padding-box
  transparent;
```

Die folgenden drei Zeilen CSS sind gleichbedeutend mit dem oben, selbst wenn die Reihenfolge unterschiedlich ist:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### Reihenfolge der Bildmalerei

Wenn mehrere durch Kommas getrennte Hintergründe enthalten sind, erstellen sie mehrere Hintergrundschichten, die übereinander liegen. Der erste Hintergrund in der Liste erstellt die obere Schicht. Wenn die obere Schicht keine transparenten Bereiche enthält, ist dies die einzige sichtbare Schicht.

Die letzte Schicht ist die unterste Schicht. Die Hintergrundfarbe ist immer in dieser Schicht enthalten.

### Hintergrund des Bodys auf das gesamte Dokument angewendet

Falls der berechnete `background-image`-Wert des Dokument-`<html>`-`:root`-Elements `none` und seine `background-color` `transparent` ist, überträgt der Browser die auf dem {{htmlelement("body")}}-Element gesetzten `background`-Stile auf das `:root` und behandelt das `<body>` so, als ob `background: initial` gesetzt wäre. Mit anderen Worten, das `<html>`-Element erhält alle auf dem `<body>`-Element gesetzten `background`-Stile, und die Hintergrund-Eigenschaften des `<body>`-Elements werden auf ihre Anfangswerte gesetzt.

Aufgrund dieses Verhaltens empfehlen die Autoren der Spezifikation, die Hintergrundstile Ihres Dokuments in Ihrem `body`-Stilblock statt in Ihrem `html`-Stilblock zu setzen. Es ist jedoch wichtig zu beachten, dass die Verwendung von Containment dieses Verhalten deaktiviert. Wenn die {{cssxref("contain")}}-Eigenschaft auf etwas anderes als `none` auf dem `<html>`- oder `<body>`-Element gesetzt ist, propagiert die `background`-Eigenschaft und ihre Einzelelemente nicht vom `<body>`-Element zum Wurzel-`<html>`-Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine besonderen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät dessen Anwesenheit nicht ansagt und somit den Benutzern nichts übermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Erklärung der WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung zum Erfolgsmaßstab 1.1.1 | W3C Erklärung zu WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Hintergründe mit Farbschlüsselwörtern und Bildern einstellen

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
