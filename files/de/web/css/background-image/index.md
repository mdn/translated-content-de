---
title: background-image
slug: Web/CSS/background-image
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`background-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

{{InteractiveExample("CSS Demo: background-image")}}

```css interactive-example-choice
background-image: url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background-image:
  url("/shared-assets/images/examples/lizard.png"),
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background-image:
  url("/shared-assets/images/examples/star.png"),
  url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background-image:
  linear-gradient(rgb(0 0 255 / 0.5), rgb(255 255 0 / 0.5)),
  url("/shared-assets/images/examples/lizard.png");
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

Die Hintergrundbilder werden in der Stapelkontextschicht übereinander gezeichnet. Die zuerst angegebene Schicht wird so gezeichnet, als ob sie dem Benutzer am nächsten ist.

Die [Rahmen](/de/docs/Web/CSS/border) des Elements werden dann auf ihnen gezeichnet, und die {{cssxref("background-color")}} wird darunter gezeichnet. Wie die Bilder relativ zur Box und ihren Rändern gezeichnet werden, wird durch die CSS-Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} definiert.

Wenn ein angegebenes Bild nicht gezeichnet werden kann (zum Beispiel, wenn die Datei, auf die durch die angegebene URI verwiesen wird, nicht geladen werden kann), behandeln Browser es, als hätte es den Wert `none`.

> [!NOTE]
> Auch wenn die Bilder opak sind und die Farbe unter normalen Umständen nicht angezeigt wird, sollten Webentwickler immer eine {{cssxref("background-color")}} angeben. Wenn die Bilder nicht geladen werden können—beispielsweise wenn das Netzwerk ausgefallen ist—wird die Hintergrundfarbe als Fallback verwendet.

## Syntax

```css
/* single image */
background-image: linear-gradient(black, white);
background-image: url("cat-front.png");

/* multiple images */
background-image:
  radial-gradient(circle, #0000 45%, #000f 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);

/* Global values */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

Jedes Hintergrundbild wird entweder als Schlüsselwort `none` oder als {{cssxref("&lt;image&gt;")}} Wert angegeben.

Um mehrere Hintergrundbilder anzugeben, geben Sie mehrere Werte an, die durch ein Komma getrennt sind.

### Werte

- `none`
  - : Ein Schlüsselwort, das das Fehlen von Bildern kennzeichnet.
- `<image>`
  - : Ein {{cssxref("&lt;image&gt;")}}, das das anzuzeigende Bild bezeichnet. Es können mehrere davon vorhanden sein, getrennt durch Kommata, da [mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) unterstützt werden.

## Barrierefreiheit

Browser bieten assistiven Technologien keine speziellen Informationen zu Hintergrundbildern. Dies ist vor allem für Screenreader wichtig, da ein Screenreader das Vorhandensein von Hintergrundbildern nicht ankündigt und daher den Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite kritisch sind, sollte es besser semantisch im Dokument beschrieben werden.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 verstehen | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Zusätzlich ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen dem Hintergrundbild und dem Vordergrundtext hoch genug ist, damit Menschen mit Sehschwäche den Seiteninhalt lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Text- und Hintergrundfarben verglichen wird. Um die [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte im Fließtext und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 24px oder größer, oder [fettgedruckt](/de/docs/Web/CSS/font-weight) 18.66px oder größer.

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [Verständnis von WCAG, Richtlinie 1.4 Erklärung](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.3 verstehen | Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundbilder schichten

Beachten Sie, dass das Sternbild teilweise transparent ist und über dem Katzenbild geschichtet wird.

#### HTML

```html
<div>
  <p class="cats-and-stars">This paragraph is full of cats<br />and stars.</p>
  <p>This paragraph is not.</p>
  <p class="cats-and-stars">Here are more cats for you.<br />Look at them!</p>
  <p>And no more.</p>
</div>
```

#### CSS

```css
p {
  font-weight: bold;
  font-size: 1.5em;
  color: white;
  text-shadow: 0.07em 0.07em 0.05em black;
  background-image: none;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.cats-and-stars {
  background-image: url("star-transparent.gif"), url("cat-front.png");
  background-color: transparent;
}
```

#### Ergebnis

{{EmbedLiveSample('Layering_background_images')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("img")}}
- Bildbezogene Funktionen:
  - {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{cssxref("url_value", "&lt;url&gt;")}}
- [Verwendung von CSS-Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Implementierung von Bild-Sprites in CSS](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul

- Hintergrundbezogene Eigenschaften
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("background")}} Kurzschreibweise
- [Lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Größenänderung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
