---
title: background-image
slug: Web/CSS/background-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`background-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt ein oder mehrere Hintergrundbilder auf einem Element fest.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

Die Hintergrundbilder werden auf Stapelkontextschichten übereinander gezeichnet. Die zuerst angegebene Schicht wird gezeichnet, als ob sie dem Benutzer am nächsten wäre.

Die [Ränder](/de/docs/Web/CSS/border) des Elements werden dann darüber gezeichnet, und die {{cssxref("background-color")}} wird darunter gezeichnet. Wie die Bilder relativ zur Box und ihren Rändern gezeichnet werden, wird durch die CSS-Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} definiert.

Wenn ein angegebenes Bild nicht gezeichnet werden kann (zum Beispiel, wenn die durch den angegebenen URI bezeichnete Datei nicht geladen werden kann), behandeln Browser es so, als wäre es ein `none`-Wert.

> [!NOTE]
> Selbst wenn die Bilder undurchsichtig sind und die Farbe unter normalen Umständen nicht angezeigt wird, sollten Webentwickler immer eine {{cssxref("background-color")}} festlegen. Wenn die Bilder nicht geladen werden können - beispielsweise wenn das Netzwerk ausgefallen ist - wird die Hintergrundfarbe als Rückfall verwendet.

## Syntax

```css
/* einzelnes Bild */
background-image: linear-gradient(black, white);
background-image: url("catfront.png");

/* mehrere Bilder */
background-image: radial-gradient(circle, #0000 45%, #000f 48%),
  radial-gradient(ellipse farthest-corner, #fc1c14 20%, #cf15cf 80%);

/* Globale Werte */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

Jedes Hintergrundbild wird entweder als das Schlüsselwort `none` oder als ein {{cssxref("&lt;image&gt;")}} Wert angegeben.

Um mehrere Hintergrundbilder zu spezifizieren, geben Sie mehrere Werte, getrennt durch ein Komma, an.

### Werte

- `none`
  - : Ist ein Schlüsselwort, das das Fehlen von Bildern anzeigt.
- `<image>`
  - : Ist ein {{cssxref("&lt;image&gt;")}}, das das anzuzeigende Bild bezeichnet. Es können mehrere von ihnen vorhanden sein, die durch Kommata getrennt sind, da [mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) unterstützt werden.

## Barrierefreiheit

Browser bieten assistiven Technologien keine besonderen Informationen über Hintergrundbilder. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht bekannt gibt und Nutzern daher nichts mitteilt. Wenn das Bild Informationen enthält, die für das Verständnis des allgemeinen Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Zusätzlich ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen dem Hintergrundbild und dem Vordergrundtext hoch genug ist, dass Menschen mit Sehschwäche den Seiteninhalt lesen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtdichte der Text- und Hintergrundfarbwerte verglichen wird. Um die [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) einzuhalten, ist ein Verhältnis von 4.5:1 für den Haupttextinhalt und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text wird definiert als 24px oder größer oder [fettgedruckt](/de/docs/Web/CSS/font-weight) 18.66px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Verständnis WCAG, Leitlinie 1.4 Erklärung](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.3 | Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schichtung von Hintergrundbildern

Beachten Sie, dass das Sternenbild teilweise transparent ist und über dem Katzenbild geschichtet wird.

#### HTML

```html
<div>
  <p class="catsandstars">Dieser Absatz ist voller Katzen<br />und Sterne.</p>
  <p>Dieser Absatz nicht.</p>
  <p class="catsandstars">Hier sind mehr Katzen für Sie.<br />Schauen Sie sie sich an!</p>
  <p>Und keine mehr.</p>
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
- [Implementierung von Bildspritzen in CSS](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
- [CSS Bilder](/de/docs/Web/CSS/CSS_images) Modul

- Hintergrundbezogene Eigenschaften
  - {{cssxref("background-attachment")}}
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
  - {{cssxref("background")}} Kurze Schreibweise
- [Lernen Sie CSS: Hintergrund und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Größenänderung von Hintergrundbildern](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
