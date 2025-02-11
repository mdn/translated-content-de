---
title: background-image
slug: Web/CSS/background-image
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`background-image`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt ein oder mehrere Hintergrundbilder für ein Element fest.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

Die Hintergrundbilder werden auf Stapelebenen übereinander gezeichnet. Die erste angegebene Ebene wird so gezeichnet, als ob sie der Benutzerin oder dem Benutzer am nächsten wäre.

Die [Ränder](/de/docs/Web/CSS/border) des Elements werden dann darauf gezeichnet, und die {{cssxref("background-color")}} wird darunter gezeichnet. Wie die Bilder relativ zur Box und zu deren Rändern gezeichnet werden, wird durch die CSS-Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} definiert.

Wenn ein angegebenes Bild nicht gezeichnet werden kann (zum Beispiel, wenn die Datei, auf die durch die festgelegte URI verwiesen wird, nicht geladen werden kann), behandeln die Browser dies so, als wäre der Wert `none` angegeben.

> [!NOTE]
> Auch wenn die Bilder opak sind und die Farbe unter normalen Umständen nicht angezeigt wird, sollten Webentwicklerinnen und Webentwickler immer eine {{cssxref("background-color")}} festlegen. Wenn die Bilder nicht geladen werden können – beispielsweise, wenn das Netzwerk nicht verfügbar ist –, wird die Hintergrundfarbe als Fallback verwendet.

## Syntax

```css
/* single image */
background-image: linear-gradient(black, white);
background-image: url("cat-front.png");

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

Jedes Hintergrundbild wird entweder als das Schlüsselwort `none` oder als ein {{cssxref("&lt;image&gt;")}}-Wert angegeben.

Um mehrere Hintergrundbilder anzugeben, geben Sie mehrere Werte durch ein Komma getrennt an.

### Werte

- `none`
  - : Ist ein Schlüsselwort, das das Fehlen von Bildern bezeichnet.
- `<image>`
  - : Ist ein {{cssxref("&lt;image&gt;")}}, das das anzuzeigende Bild angibt. Es können mehrere davon durch Kommata getrennt angegeben werden, da [mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) unterstützt werden.

## Barrierefreiheit

Browser stellen unterstützenden Technologien keine speziellen Informationen zu Hintergrundbildern bereit. Dies ist vor allem für Screenreader wichtig, da diese die Anwesenheit eines Bildes nicht verkünden und daher nichts an die Benutzerinnen und Benutzer weitergeben. Falls das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Erklärung zur WCAG-Richtlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung zu Erfolgskriterium 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Zudem ist es wichtig sicherzustellen, dass der Kontrast zwischen dem Hintergrundbild und dem Vordergrundtext hoch genug ist, damit Personen mit eingeschränktem Sehvermögen den Seiteninhalt lesen können.

Das Kontrastverhältnis wird bestimmt, indem die Helligkeitswerte von Text und Hintergrundfarbe verglichen werden. Um die [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Fließtext und 3:1 für größere Schriftarten wie Überschriften erforderlich. Große Schriftarten sind definiert als 24px oder größer oder [fett](/de/docs/Web/CSS/font-weight) mit mindestens 18,66px.

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Erklärung zu WCAG-Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung zu Erfolgskriterium 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überlagerung von Hintergrundbildern

Beachten Sie, dass das Stern-Bild teilweise transparent ist und über das Katzen-Bild geschichtet wird.

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
- [CSS-Übergänge verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Bildsprites in CSS implementieren](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
- [CSS-Bilder](/de/docs/Web/CSS/CSS_images)-Modul

- Hintergrundbezogene Eigenschaften:
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("background")}}-Kurzschreibweise
- [Leitfaden: Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Verwendung von mehreren Hintergründen](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Hintergrundbilder skalieren](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)-Modul
