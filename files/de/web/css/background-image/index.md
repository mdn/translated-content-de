---
title: background-image
slug: Web/CSS/background-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`background-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

Die Hintergrundbilder werden in einem Stapelkontext als Schichten übereinander gezeichnet. Die zuerst angegebene Ebene wird so gezeichnet, als ob sie der Benutzeroberfläche am nächsten ist.

Die [Ränder](/de/docs/Web/CSS/border) des Elements werden dann darüber gezeichnet, und die {{cssxref("background-color")}} wird darunter gezeichnet. Wie die Bilder im Verhältnis zur Box und ihren Rändern gezeichnet werden, wird durch die CSS-Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} definiert.

Wenn ein angegebenes Bild nicht gezeichnet werden kann (zum Beispiel, wenn die durch die angegebene URI bezeichnete Datei nicht geladen werden kann), behandeln Browser es so, als hätte es den Wert `none`.

> [!NOTE]
> Auch wenn die Bilder undurchsichtig sind und die Farbe unter normalen Umständen nicht angezeigt wird, sollten Webentwickler immer eine {{cssxref("background-color")}} angeben. Falls die Bilder nicht geladen werden können – beispielsweise, wenn das Netzwerk ausgefallen ist – wird die Hintergrundfarbe als Fallback verwendet.

## Syntax

```css
/* single image */
background-image: linear-gradient(black, white);
background-image: url("catfront.png");

/* multiple images */
background-image: radial-gradient(circle, #0000 45%, #000f 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);

/* Global values */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

Jedes Hintergrundbild wird entweder als das Schlüsselwort `none` oder als ein {{cssxref("&lt;image&gt;")}} Wert angegeben.

Um mehrere Hintergrundbilder anzugeben, geben Sie mehrere Werte getrennt durch ein Komma an.

### Werte

- `none`
  - : Ist ein Schlüsselwort, das das Fehlen von Bildern bezeichnet.
- `<image>`
  - : Ist ein {{cssxref("&lt;image&gt;")}} Wert, der das anzuzeigende Bild bezeichnet. Es können mehrere davon vorhanden sein, durch Kommas getrennt, da [mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) unterstützt werden.

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien an. Dies ist besonders wichtig für Screenreader, da ein Screenreader deren Anwesenheit nicht ansagt und somit nichts an die Benutzer vermittelt. Wenn das Bild Informationen enthält, die wesentlich für das Verständnis des übergeordneten Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Darüber hinaus ist es wichtig, sicherzustellen, dass der Kontrast zwischen dem Hintergrundbild und dem Vordergrundtext hoch genug ist, damit Menschen mit Sehschwäche den Seiteninhalt lesen können.

Der Farbkontrast wird durch den Vergleich der Leuchtdichte der Text- und Hintergrundfarbwerte bestimmt. Um die [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Fließtext erforderlich und 3:1 für größeren Text wie Überschriften. Großer Text ist definiert als 24px oder größer, oder [fett](/de/docs/Web/CSS/font-weight) 18.66px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Verständnis von WCAG, Richtlinie 1.4 Erklärung](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überlagerung von Hintergrundbildern

Beachten Sie, dass das Sternbild teilweise transparent ist und über dem Katzenbild überlagert wird.

#### HTML

```html
<div>
  <p class="catsandstars">This paragraph is full of cats<br />and stars.</p>
  <p>This paragraph is not.</p>
  <p class="catsandstars">Here are more cats for you.<br />Look at them!</p>
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

.catsandstars {
  background-image: url("startransparent.gif"), url("catfront.png");
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
- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Implementierung von Bildsprites in CSS](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul

- Hintergrundbezogene Eigenschaften
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("background")}} Kurzform
- [Lernen Sie CSS: Hintergrund und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Größenänderung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
