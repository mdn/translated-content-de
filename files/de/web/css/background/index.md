---
title: background
slug: Web/CSS/background
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`background`**-[Shorthand](/de/docs/Web/CSS/Shorthand_properties)-[CSS](/de/docs/Web/CSS)-Eigenschaft legt alle Hintergrundstileigenschaften gleichzeitig fest, wie beispielsweise Farbe, Bild, Ursprung und Größe oder Wiederholungsmethode. Nicht in der Wertedeklaration der `background`-Shorthand-Eigenschaft gesetzte Komponenten-Eigenschaften werden auf ihre Standardwerte gesetzt.

{{EmbedInteractiveExample("pages/css/background.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Shorthand-Eigenschaft für die folgenden CSS-Eigenschaften:

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

Die `background`-Eigenschaft wird als eine oder mehrere Hintergrundebenen angegeben, die durch Kommata getrennt sind.

Die Syntax jeder Ebene ist wie folgt:

- Jede Ebene darf jeweils null oder einmal folgende Werte enthalten:

  - `<attachment>`
  - `<bg-image>`
  - `<position>`
  - `<bg-size>`
  - `<repeat-style>`

- Der `<bg-size>`-Wert darf nur unmittelbar nach `<position>` eingeschlossen werden, getrennt durch das '/'-Zeichen, wie folgt: `center/80%`.
- Der `<box>`-Wert kann null-, einmal oder zweimal eingeschlossen werden. Wenn er einmal eingeschlossen wird, legt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}} fest. Wenn er zweimal eingeschlossen wird, legt das erste Vorkommen {{cssxref("background-origin")}} fest, und das zweite legt {{cssxref("background-clip")}} fest.
- Der `<background-color>`-Wert darf nur in der letzten angegebenen Ebene enthalten sein.

### Werte

- `<attachment>`
  - : Siehe {{cssxref("background-attachment")}}. Standard: `scroll`.
- `<box>`
  - : Siehe {{cssxref("background-clip")}} und {{cssxref("background-origin")}}. Standard: `border-box` und `padding-box` entsprechend.
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

Die folgenden drei CSS-Zeilen sind äquivalent:

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

Browser stellen keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologie bereit. Dies betrifft vor allem Screenreader, da ein Screenreader das Vorhandensein nicht ankündigt und daher keine Information an seine Nutzer weitergibt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtsinns der Seite entscheidend sind, sollte es besser semantisch im Dokument beschrieben werden.

- [MDN WCAG-Leitfaden, Erläuterungen zu Leitlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Umsetzung Erfolgskriterium 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Festlegen von Hintergründen mit Farb-Schlüsselwörtern und Bildern

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
- [Verwendung von mehrfachen Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
