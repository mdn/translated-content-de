---
title: Hintergrund
slug: Web/CSS/background
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`background`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Hintergrundstil-Eigenschaften auf einmal, wie Farbe, Bild, Ursprung und Größe oder Wiederholungsmethode. Komponenteneigenschaften, die im `background` Kurzschreibwelleneigenschaftswert nicht angegeben sind, werden auf ihre Standardwerte gesetzt.

{{EmbedInteractiveExample("pages/css/background.html")}}

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

## Syntax

```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <box> and <background-color> */
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

Die `background`-Eigenschaft wird als eine oder mehrere Hintergrundebenen angegeben, die durch Kommas getrennt sind.

Der Syntax jeder Ebene ist wie folgt:

- Jede Ebene kann null oder einmalige Vorkommen der folgenden Werte enthalten:

  - `<attachment>`
  - `<bg-image>`
  - `<position>`
  - `<bg-size>`
  - `<repeat-style>`

- Der `<bg-size>`-Wert kann nur unmittelbar nach `<position>` enthalten sein, getrennt durch das Zeichen '/', so: `center/80%`.
- Der `<box>`-Wert kann null, einmal oder zweimal enthalten sein. Wenn einmal enthalten, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Wenn er zweimal enthalten ist, setzt das erste Vorkommen {{cssxref("background-origin")}} und das zweite {{cssxref("background-clip")}}.
- Der `<background-color>`-Wert kann nur in der zuletzt angegebenen Ebene enthalten sein.

### Werte

- `<attachment>`
  - : Siehe {{cssxref("background-attachment")}}. Standard: `scroll`.
- `<box>`
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Standard: `border-box` und `padding-box` jeweils.
- `<background-color>`
  - : Siehe {{cssxref("background-color")}}. Standard: `transparent`.
- `<bg-image>`
  - : Siehe {{Cssxref("background-image")}}. Standard: `none`.
- `<position>`
  - : Siehe {{cssxref("background-position")}}. Standard: 0% 0%.
- `<repeat-style>`
  - : Siehe {{cssxref("background-repeat")}}. Standard: `repeat`.
- `<bg-size>`
  - : Siehe {{cssxref("background-size")}}. Standard: `auto`.

Die folgenden drei Zeilen CSS sind äquivalent:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für assistive Technologien an. Dies ist besonders wichtig für Screenreader, da ein Screenreader dessen Vorhandensein nicht ankündigt und daher den Benutzern nichts übermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Festlegen von Hintergründen mit Farb-Keywords und Bildern

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
  background: url("star-solid.gif") #99f repeat-y fixed;
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
- [Verwendung von Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
