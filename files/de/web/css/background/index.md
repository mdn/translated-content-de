---
title: background
slug: Web/CSS/background
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **`background`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt alle Hintergrund-Stileigenschaften auf einmal fest, wie Farbe, Bild, Ursprung und Größe oder Wiederholungsmethode. Komponenten-Eigenschaften, die im `background`-Shorthand-Wert nicht gesetzt sind, werden auf ihre Standardwerte zurückgesetzt.

{{EmbedInteractiveExample("pages/css/background.html")}}

## Zusätzliche Eigenschaften

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

Die `background`-Eigenschaft wird als eine oder mehrere Hintergrundschichten angegeben, getrennt durch Kommata.

Die Syntax jeder Schicht ist wie folgt:

- Jede Schicht kann null oder einmalig jede der folgenden Werte enthalten:

  - `<attachment>`
  - `<bg-image>`
  - `<position>`
  - `<bg-size>`
  - `<repeat-style>`

- Der Wert `<bg-size>` darf nur direkt nach `<position>` enthalten sein und muss mit dem '/'-Zeichen getrennt werden, zum Beispiel: `center/80%`.
- Der Wert `<box>` kann null, einmal oder zweimal enthalten sein. Wenn er einmal enthalten ist, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Wenn er zweimal enthalten ist, setzt der erste Vorkommens {{cssxref("background-origin")}}, und der zweite setzt {{cssxref("background-clip")}}.
- Der Wert `<background-color>` darf nur in der zuletzt angegebenen Schicht enthalten sein.

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

Die folgenden drei CSS-Zeilen sind gleichwertig:

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

Browser stellen keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien bereit. Dies ist hauptsächlich für Bildschirmlesegeräte wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des allgemeinen Zwecks der Seite sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Hintergründe mit Farbstichwörtern und Bildern festlegen

#### HTML

```html
<p class="topbanner">
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

.topbanner {
  background: url("starsolid.gif") #99f repeat-y fixed;
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
