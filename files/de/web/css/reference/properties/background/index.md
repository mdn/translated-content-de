---
title: Hintergrund
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: 8e7f97c52ea28a2f02b035ca2f3a8a42d41d9e9f
---

Die **`background`**-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft setzt alle Hintergrundstil-Eigenschaften auf einmal, wie Farbe, Bild, Ursprung, Größe und Wiederholungsmethode.

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Standard: `border-box` und `padding-box` bzw.
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

Die `background`-Kurzschreibweise ermöglicht es Ihnen, alle CSS-Hintergrund-Eigenschaften in einer einzigen Deklaration festzulegen. Der Hintergrund liegt unter dem Inhalt eines Elements. Wenn Sie mehrere, durch Kommas getrennte Hintergrundwerte haben, ist jeder davon eine Hintergrundebene, die über den vorherigen Schichten gemalt wird.

Die `background`-Eigenschaft wird als eine oder mehrere Hintergrundschichten angegeben, die durch Kommas getrennt sind. Jede Schicht kann null, ein oder zwei `<visual-box>`-Komponenten und null oder eine `<attachment>`, `<bg-image>`, `<bg-position>`, `<bg-size>` und `<repeat-style>`-Komponente enthalten. Werden zwei `<bg-position>`, `<bg-size>` oder `<repeat-style>`-Komponenten angegeben, ist der erste Wert der horizontale Wert und der zweite Wert der vertikale Wert. Wenn nur ein einzelner Wert gesetzt ist, wird dieser Wert auf beide Dimensionen angewendet.

Die `<'background-color'>`-Komponente darf nur in der letzten angegebenen Hintergrundschicht eingeschlossen sein.

Nicht gesetzte Komponenten-Eigenschaften in der `background`-Kurzschreibweise werden auf ihre Standardwerte gesetzt.

### Reihenfolge der Komponenten-Eigenschaften

Da einige der Komponenten-Eigenschaften gemeinsame Wertetypen haben, ist die Reihenfolge dieser Komponenten-Eigenschaften innerhalb der Kurzschreibweise wichtig.

Der `<bg-size>`-Wert darf nur direkt nach `<bg-position>` einschließlich des `/`-Zeichens enthalten sein. Zum Beispiel: `10px 10px / 80% 80%` bedeutet, dass das Hintergrundbild `80%` so hoch und breit wie das Element ist und `10px` von oben und `10px` von links von der oberen linken Ecke des Elements positioniert wird. Innerhalb der `<bg-position>`, wenn beide Werte Längen sind oder einer eine Länge und der andere `center` ist, bezieht sich der erste Wert auf die horizontale Position und der zweite Wert auf die vertikale Position.

Jede Hintergrundschicht kann null, ein oder zwei [`<visual-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#visual-box)-Werte enthalten. Wenn nur ein Wert enthalten ist, legt dieser sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}} fest. Wenn zwei Werte vorhanden sind, gibt das erste Vorkommen den `background-origin` und das zweite den `background-clip`-Wert an. Wenn keine `<visual-box>`-Werte vorhanden sind, ist der Standard für `background-origin` `padding-box` und für `background-clip` `border-box`.

Zwar gibt es keine Reihenfolgenanforderung für die anderen Hintergrund-Eigenschaften, aber die folgende Reihenfolge wird zur Konsistenz und Lesbarkeit empfohlen; denken Sie daran, dass keiner der Werte erforderlich ist:

`<bg-image> <bg-position> / <bg-size> <repeat-style> <attachment> <bg-clip> <bg-origin> <'background-color'>`

Der folgende `background` setzt alle Standardwerte in dieser Reihenfolge explizit:

```css
background: none 0% 0% / auto auto repeat scroll border-box padding-box
  transparent;
```

Die folgenden drei Zeilen CSS sind äquivalent zu dem oben genannten, auch wenn sich die Reihenfolge unterscheidet:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### Reihenfolge der Bildmalerei

Wenn mehrere durch Kommas getrennte Hintergründe enthalten sind, erzeugen sie mehrere Hintergrundschichten übereinander. Der erste Hintergrund in der Liste erzeugt die oberste Schicht. Wenn die oberste Schicht keine transparenten Bereiche enthält, ist dies die einzige sichtbare Schicht.

Die letzte Schicht ist die unterste Schicht. Die Hintergrundfarbe ist immer in dieser Schicht enthalten.

### Anwendung des Body-Hintergrunds auf das gesamte Dokument

Wenn der berechnete `background-image`-Wert des Dokument-{{htmlelement("html")}} `:root`-Elements `none` ist und seine `background-color` `transparent` ist, überträgt der Browser die auf das {{htmlelement("body")}}-Element gesetzten `background`-Stile auf das `:root` und behandelt den `<body>`, als ob `background: initial` gesetzt wäre. Mit anderen Worten, das `<html>`-Element erhält alle auf das `<body>`-Element gesetzten `background`-Stile und die Hintergrund-Eigenschaften des `<body>`-Elements werden auf ihre Anfangswerte gesetzt.

Aufgrund dieses Verhaltens empfehlen die Autoren der Spezifikation, die Hintergrundstile Ihres Dokuments in Ihrem `body`-Stilblock anstelle Ihres `html`-Stilblocks festzulegen. Es ist jedoch wichtig zu beachten, dass durch die Verwendung von Containment dieses Verhalten deaktiviert wird. Wenn die {{cssxref("contain")}}-Eigenschaft auf etwas anderes als `none` auf entweder dem `<html>`- oder `<body>`-Element gesetzt ist, wird die `background`-Eigenschaft und alle Langform-Komponenten nicht vom `<body>`-Element auf das Root-`<html>`-Element übertragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologie. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen und daher den Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Hintergründe mit Farbbegriffen und Bildern einstellen

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
