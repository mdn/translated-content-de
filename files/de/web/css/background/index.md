---
title: background
slug: Web/CSS/background
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`background`** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt alle Hintergrundstil-Eigenschaften auf einmal fest, wie z. B. Farbe, Bild, Ursprung und Größe oder Wiederholmethode. Komponenteneigenschaften, die nicht in der Deklaration des `background`-Kurzform-Eigenschaftswerts festgelegt sind, werden auf ihre Standardwerte gesetzt.

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
  #eee 35% url("/shared-assets/images/examples/lizard.png");
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

## Bestandteil-Eigenschaften

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

Die `background`-Eigenschaft wird als eine oder mehrere Hintergrundebenen, getrennt durch Kommas, angegeben.

Die Syntax jeder Ebene ist wie folgt:

- Jede Ebene kann null oder eine Vorkommen von einem der folgenden Werte enthalten:

  - `<attachment>`
  - `<bg-image>`
  - `<bg-position>`
  - `<bg-size>`
  - `<repeat-style>`

- Der `<bg-size>`-Wert darf nur direkt nach `<bg-position>` enthalten sein, getrennt durch das '/'-Zeichen, so: `center/80%`.
- Der `<visual-box>`-Wert kann null, einmal oder zweimal enthalten sein. Wenn er einmal enthalten ist, setzt er sowohl {{cssxref("background-origin")}} als auch {{cssxref("background-clip")}}. Wenn er zweimal enthalten ist, setzt das erste Vorkommen {{cssxref("background-origin")}}, und das zweite setzt {{cssxref("background-clip")}}.
- Der `<'background-color'>`-Wert darf nur in der zuletzt angegebenen Ebene enthalten sein.

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

## Barrierefreiheit

Browser stellen keine besonderen Informationen über Hintergrundbilder für unterstützende Technologien bereit. Dies ist insbesondere für Bildschirmleseprogramme wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Hauptzwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Hintergründe mit Farb-Schlüsselwörtern und Bildern festlegen

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
- [Verwendung von Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
