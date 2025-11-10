---
title: background
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`background`** [Kurznotierung](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt alle Hintergrundstileigenschaften auf einmal fest, wie Farbe, Bild, Ursprung und Größe oder Wiederholungsmethode. Komponenten-Eigenschaften, die nicht in der `background`-Kurznotierung Wertedeklaration festgelegt sind, werden auf ihre Standardwerte gesetzt.

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

Diese Eigenschaft ist eine Kurznotierung für die folgenden CSS-Eigenschaften:

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

Die `background`-Eigenschaft wird als ein oder mehrere Hintergrundschichten, getrennt durch Kommas, angegeben.

Die Syntax jeder Schicht ist wie folgt:

- Jede Schicht darf null oder eine Vorkommen von einem der folgenden Werte enthalten:

  - `<attachment>`
  - `<bg-image>`
  - `<bg-position>`
  - `<bg-size>`
  - `<repeat-style>`

- Der `<bg-size>`-Wert darf nur unmittelbar nach `<bg-position>`, getrennt durch das '/'-Zeichen, enthalten sein, wie folgt: `center/80%`.
- Der `<visual-box>`-Wert kann null, einmal oder zweimal enthalten sein. Wenn er einmal enthalten ist, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Wenn er zweimal enthalten ist, setzt das erste Vorkommen {{cssxref("background-origin")}}, und das zweite setzt {{cssxref("background-clip")}}.
- Der `<'background-color'>`-Wert darf nur in der zuletzt angegebenen Schicht enthalten sein.

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
  - : Siehe {{cssxref("background-position")}}. Standard: 0% 0%.
- `<repeat-style>`
  - : Siehe {{cssxref("background-repeat")}}. Standard: `repeat`.
- `<bg-size>`
  - : Siehe {{cssxref("background-size")}}. Standard: `auto`.

Die folgenden drei Zeilen CSS sind gleichwertig:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Zugänglichkeit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologie. Dies ist vor allem für Bildschirmleseprogramme wichtig, da ein Bildschirmleseprogramm seine Anwesenheit nicht ankündigt und daher seinen Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des allgemeinen Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Hintergründe mit Farbkeywords und Bildern festlegen

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
