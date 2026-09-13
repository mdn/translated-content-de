---
title: "`background` CSS-Eigenschaft"
short-title: background
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`background`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) definiert alle Hintergrund-Stileigenschaften auf einmal, wie z.B. Farbe, Bild, Ursprung, Größe und Wiederholungsmethode.

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

## Bestandteile der Eigenschaft

Diese Kurzschreibweise steht für folgende CSS-Eigenschaften:

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
  - : Siehe {{cssxref("background-attachment")}}. Standardwert: `scroll`.
- `<visual-box>`
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Standardwerte: `border-box` und `padding-box`.
- `<'background-color'>`
  - : Siehe {{cssxref("background-color")}}. Standardwert: `transparent`.
- `<bg-image>`
  - : Siehe {{Cssxref("background-image")}}. Standardwert: `none`.
- `<bg-position>`
  - : Siehe {{cssxref("background-position")}}. Standardwert: `0% 0%`.
- `<repeat-style>`
  - : Siehe {{cssxref("background-repeat")}}. Standardwert: `repeat`.
- `<bg-size>`
  - : Siehe {{cssxref("background-size")}}. Standardwert: `auto`.

## Beschreibung

Die `background` Kurzschreibweise ermöglicht es, alle CSS-Hintergrund-Eigenschaften in einer einzigen Deklaration anzugeben. Der Hintergrund liegt unter dem Inhalt eines Elements. Wenn Sie mehrere, durch Kommas getrennte Hintergrundwerte haben, ist jeder ein Hintergrund-Layer, der auf den vorherigen Layern gemalt wird.

Die `background`-Eigenschaft wird als einer oder mehrere Hintergrund-Layer beschrieben, die durch Kommas getrennt sind. Jeder Layer kann null, eins oder zwei `<visual-box>`-Komponenten und null oder eins `<attachment>`, `<bg-image>`, `<bg-position>`, `<bg-size>` und `<repeat-style>` Komponenten enthalten. Wenn zwei `<bg-position>`, `<bg-size>` oder `<repeat-style>` Komponenten angegeben sind, ist der erste Wert der horizontale Wert und der zweite Wert ist der vertikale Wert. Wenn nur ein einzelner Wert gesetzt ist, wird dieser Wert auf beide Dimensionen angewendet.

Die `<'background-color'>`-Komponente darf nur im letzten angegebenen Hintergrund-Layer enthalten sein.

Komponenteneigenschaften, die nicht in der `background`-Kurzschreibweise-Deklaration gesetzt sind, werden auf ihre Standardwerte zurückgesetzt.

### Reihenfolge der Komponenten-Eigenschaften

Da einige der Komponenten-Eigenschaften denselben Wertetyp teilen, ist die Reihenfolge dieser Komponenten-Eigenschaften innerhalb der Kurzschreibweise wichtig.

Der `<bg-size>` Wert darf nur unmittelbar nach `<bg-position>` enthalten sein, getrennt durch das `/` Zeichen. Zum Beispiel: `10px 10px / 80% 80%` bedeutet, dass das Hintergrundbild `80%` so hoch und so breit wie das Element ist und `10px` von oben und `10px` von der linken oberen Ecke des Elements positioniert wird. Innerhalb von `<bg-position>`, wenn beide Werte Längen sind, oder wenn einer eine Länge und der andere `center` ist, bezieht sich der erste Wert auf die horizontale Position und der zweite Wert auf die vertikale Position.

Jeder Hintergrund-Layer kann null, eine, oder zwei [`<visual-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#visual-box) Werte enthalten. Wenn nur ein Wert enthalten ist, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Sind zwei Werte vorhanden, spezifiziert der erste die `background-origin` und der zweite den `background-clip` Wert. Sind keine `<visual-box>` Werte vorhanden, ist die `background-origin` standardmäßig `padding-box` und der `background-clip` standardmäßig `border-box`.

Während es keine Reihenfolgenanforderung für die anderen Hintergrund-Eigenschaften gibt, wird folgende Reihenfolge aus Konsistenz- und Lesbarkeitsgründen empfohlen; denken Sie daran, dass keiner der Werte erforderlich ist:

`<bg-image> <bg-position> / <bg-size> <repeat-style> <attachment> <bg-clip> <bg-origin> <'background-color'>`

Das folgende `background` setzt explizit alle Standardwerte in dieser Reihenfolge:

```css
background: none 0% 0% / auto auto repeat scroll border-box padding-box
  transparent;
```

Die folgenden drei Zeilen CSS sind äquivalent zu obigem, auch wenn die Reihenfolge anders ist:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### Reihenfolge der Bilder

Wenn mehrere, durch Kommas getrennte Hintergründe enthalten sind, erzeugen diese mehrere Hintergrundschichten übereinander. Der erste Hintergrund in der Liste erstellt die oberste Schicht. Wenn die oberste Schicht keine transparenten Bereiche enthält, ist dies die einzige sichtbare Schicht.

Die letzte Schicht ist die unterste. Die Hintergrundfarbe ist immer in dieser Schicht enthalten.

### Hintergrund des Body auf das gesamte Dokument anwenden

Wenn der berechnete `background-image` Wert des `:root` Elements für das Dokument {{htmlelement("html")}} `none` ist und seine `background-color` `transparent` ist, überträgt der Browser die auf das {{htmlelement("body")}} Element gesetzten Hintergründe auf das `:root` und behandelt das `<body>`, als wäre `background: initial` gesetzt. Mit anderen Worten, das `<html>`-Element erhält alle auf das `<body>` Element gesetzten Hintergrundstile, und die Hintergrund-Eigenschaften des `<body>` Elements werden auf ihre Anfangswerte gesetzt.

Aufgrund dieses Verhaltens empfehlen die Autoren der Spezifikation, die Hintergrundstile des Dokuments im `body`-Stilblock zu setzen, anstatt im `html`-Stilblock. Es ist jedoch wichtig zu beachten, dass die Verwendung von Containment dieses Verhalten deaktiviert. Wenn die {{cssxref("contain")}}-Eigenschaft auf etwas anderes als `none` entweder auf dem `<html>` oder `<body>` Element gesetzt ist, wird die `background`-Eigenschaft und ihre Langform-Komponenten nicht vom `<body>` Element auf das Wurzelelement `<html>` übertragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien an. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und somit den Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es im Dokument semantisch zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Hintergründe mit Farbstichwörtern und Bildern setzen

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
