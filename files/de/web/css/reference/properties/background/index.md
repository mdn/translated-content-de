---
title: CSS-Eigenschaft `background`
short-title: background
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: 8c21ceeff860d7b9f64b177115e3897543e7fcab
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`background`** legt alle Hintergrund-Stileigenschaften gleichzeitig fest, etwa Farbe, Bild, Ursprung, Größe und Wiederholungsmethode.

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

## Enthaltene Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

### Nur zurückgesetzte Untereigenschaften

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
  - : Siehe {{cssxref("background-attachment")}}. Standardwert: `scroll`.
- `<visual-box>`
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Die jeweiligen Standardwerte sind `border-box` und `padding-box`.
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

Mit der Kurzschreibweise `background` können Sie alle CSS-Hintergrundeigenschaften in einer einzigen Deklaration festlegen. Der Hintergrund liegt unter dem Inhalt eines Elements. Wenn Sie mehrere durch Kommas getrennte Hintergrundwerte angeben, bildet jeder Wert eine Hintergrundebene, die über den vorherigen Ebenen dargestellt wird.

Die Eigenschaft `background` wird durch eine oder mehrere durch Kommas getrennte Hintergrundebenen angegeben. Jede Ebene kann null, eine oder zwei `<visual-box>`-Komponenten sowie jeweils null oder eine `<attachment>`-, `<bg-image>`-, `<bg-position>`-, `<bg-size>`- und `<repeat-style>`-Komponente enthalten. Werden zwei `<bg-position>`-, `<bg-size>`- oder `<repeat-style>`-Komponenten angegeben, ist der erste Wert der horizontale und der zweite der vertikale Wert. Wird nur ein Wert angegeben, gilt er für beide Dimensionen.

Die Komponente `<'background-color'>` darf nur in der letzten angegebenen Hintergrundebene enthalten sein.

Komponenteneigenschaften, die in der Wertedeklaration der Kurzschreibweise `background` nicht festgelegt werden, erhalten ihre Standardwerte.

### Reihenfolge der Komponenteneigenschaften

Da einige Komponenteneigenschaften dieselben Wertetypen verwenden, ist ihre Reihenfolge innerhalb der Kurzschreibweise wichtig.

Der Wert `<bg-size>` darf nur unmittelbar nach `<bg-position>` stehen, getrennt durch das Zeichen `/`. Beispielsweise bedeutet `10px 10px / 80% 80%`, dass das Hintergrundbild `80%` der Höhe und Breite des Elements einnimmt und jeweils `10px` vom oberen und linken Rand der oberen linken Ecke des Elements entfernt positioniert wird. Wenn innerhalb von `<bg-position>` beide Werte Längen sind oder ein Wert eine Länge und der andere `center` ist, bezeichnet der erste Wert die horizontale und der zweite die vertikale Position.

Jede Hintergrundebene kann null, einen oder zwei [`<visual-box>`](/de/docs/Web/CSS/Reference/Values/box-edge#visual-box)-Werte enthalten. Wird nur ein Wert angegeben, legt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}} fest. Sind zwei Werte vorhanden, legt der erste den Wert für `background-origin` und der zweite den Wert für `background-clip` fest. Sind keine `<visual-box>`-Werte vorhanden, ist der Standardwert für `background-origin` `padding-box` und für `background-clip` `border-box`.

Für die übrigen Hintergrundeigenschaften ist keine bestimmte Reihenfolge vorgeschrieben. Für Einheitlichkeit und Lesbarkeit wird jedoch die folgende Reihenfolge empfohlen; keiner der Werte ist erforderlich:

`<bg-image> <bg-position> / <bg-size> <repeat-style> <attachment> <bg-clip> <bg-origin> <'background-color'>`

Die folgende `background`-Deklaration legt alle Standardwerte ausdrücklich in dieser Reihenfolge fest:

```css
background: none 0% 0% / auto auto repeat scroll border-box padding-box
  transparent;
```

Die folgenden drei CSS-Zeilen sind trotz unterschiedlicher Reihenfolge gleichwertig mit der obigen Deklaration:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### Reihenfolge beim Zeichnen der Bilder

Werden mehrere durch Kommas getrennte Hintergründe angegeben, bilden sie mehrere übereinanderliegende Hintergrundebenen. Der erste Hintergrund in der Liste bildet die oberste Ebene. Enthält diese Ebene keine transparenten Bereiche, ist nur sie sichtbar.

Die letzte Ebene ist die unterste. Die Hintergrundfarbe ist immer Teil dieser Ebene.

### Anwendung des Body-Hintergrunds auf das gesamte Dokument

Wenn der berechnete `background-image`-Wert des `:root`-Elements {{htmlelement("html")}} im Dokument `none` und sein `background-color`-Wert `transparent` ist, überträgt der Browser die für das {{htmlelement("body")}}-Element festgelegten `background`-Stile auf `:root` und behandelt `<body>` so, als wäre `background: initial` festgelegt. Mit anderen Worten: Das `<html>`-Element erhält alle für das `<body>`-Element festgelegten `background`-Stile, und die Hintergrundeigenschaften des `<body>`-Elements werden auf ihre Anfangswerte gesetzt.

Aufgrund dieses Verhaltens empfehlen die Autoren der Spezifikation, die Hintergrundstile Ihres Dokuments im Stilblock für `body` statt im Stilblock für `html` festzulegen. Beachten Sie jedoch, dass Containment dieses Verhalten deaktiviert. Wenn die Eigenschaft {{cssxref("contain")}} entweder für das `<html>`- oder das `<body>`-Element auf einen anderen Wert als `none` gesetzt ist, werden die Eigenschaft `background` und ihre einzelnen Komponenten nicht vom `<body>`-Element auf das Wurzelelement `<html>` übertragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser stellen Hilfstechnologien keine besonderen Informationen über Hintergrundbilder bereit. Dies ist vor allem für Screenreader wichtig: Ein Screenreader kündigt ein Hintergrundbild nicht an und vermittelt seinen Nutzern daher keine Informationen darüber. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, sollten Sie diese im Dokument semantisch beschreiben.

- [MDN: WCAG verstehen – Erläuterungen zu Leitlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
- [Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- [Mehrere Hintergründe verwenden](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
