---
title: "`background-image` CSS property"
short-title: background-image
slug: Web/CSS/Reference/Properties/background-image
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

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

## Syntax

```css
/* single image */
background-image: linear-gradient(black, white);
background-image: url("cat-front.png");

/* multiple images */
background-image:
  radial-gradient(circle, transparent 45%, black 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);

/* Global values */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

Jedes Hintergrundbild wird entweder als Schlüsselwort `none` oder als {{cssxref("image")}}-Wert angegeben.

Um mehrere Hintergrundbilder festzulegen, geben Sie mehrere Werte an, getrennt durch ein Komma.

### Werte

- `none`
  - : Ein Schlüsselwort, das das Fehlen von Bildern bezeichnet.
- `<image>`
  - : Ein {{cssxref("image")}}, das das anzuzeigende Bild bezeichnet. Es können mehrere davon vorhanden sein, getrennt durch Kommas, da [mehrere Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) unterstützt werden.

## Beschreibung

Die Hintergrundbilder werden auf Stapelebenen übereinander gezeichnet. Die zuerst angegebene Ebene wird so gezeichnet, als wäre sie dem Benutzer am nächsten.

Die [Ränder](/de/docs/Web/CSS/Reference/Properties/border) des Elements werden dann darüber gezeichnet, und die {{cssxref("background-color")}} wird darunter gezeichnet. Wie die Bilder im Verhältnis zur Box und ihren Rändern gezeichnet werden, wird durch die CSS-Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} definiert.

Wenn ein angegebenes Bild nicht gezeichnet werden kann (zum Beispiel, wenn die durch die angegebene URI bezeichnete Datei nicht geladen werden kann), behandeln Browser es so, als wäre es ein `none`-Wert.

> [!NOTE]
> Auch wenn die Bilder undurchsichtig sind und die Farbe unter normalen Umständen nicht angezeigt wird, sollten Webentwickler immer eine {{cssxref("background-color")}} angeben. Wenn die Bilder nicht geladen werden können—beispielsweise, wenn das Netzwerk ausgefallen ist—wird die Hintergrundfarbe als Fallback verwendet.

## Barrierefreiheit

Browser liefern keine speziellen Informationen über Hintergrundbilder an unterstützende Technologien. Dies ist hauptsächlich für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät seine Anwesenheit nicht ankündigt und daher den Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Zwecks der Seite entscheidend sind, sollte es besser semantisch im Dokument beschrieben werden.

- [MDN-Verständnis der WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C-Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Darüber hinaus ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen dem Hintergrundbild und dem Vordergrundtext hoch genug ist, damit Menschen mit eingeschränktem Sehvermögen den Seiteninhalt lesen können.

Das Farbkontrastverhältnis wird ermittelt, indem die Leuchtdichte der Text- und Hintergrundfarbwerte verglichen wird. Um die [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für den Haupttextinhalt und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 24px oder größer oder [fettschrift](/de/docs/Web/CSS/Reference/Properties/font-weight) 18.66px oder größer.

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [Verständnis der WCAG, Richtlinie 1.4 Erklärung](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hintergrundbilder schichten

Beachten Sie, dass das Sternenbild teilweise transparent ist und über dem Katzenbild geschichtet ist.

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
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- [Implementierung von Bild-Sprites in CSS](/de/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
- [CSS-Bilder](/de/docs/Web/CSS/Guides/Images) Modul

- Hintergrundbezogene Eigenschaften
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("background")}} Abkürzung
- [Lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
