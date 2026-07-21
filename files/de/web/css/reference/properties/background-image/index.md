---
title: "`background-image` CSS property"
short-title: background-image
slug: Web/CSS/Reference/Properties/background-image
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`background-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

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

### Werte

Diese Eigenschaft wird entweder als Stichwort `none` oder als durch Kommas getrennte Liste von {{cssxref("image")}}-Werten angegeben.

- `none`
  - : Ist ein Stichwort, das das Fehlen von Bildern kennzeichnet.
- `<image>`
  - : Ist ein {{cssxref("image")}}, das das darzustellende Bild bezeichnet.

## Beschreibung

Die Eigenschaft `background-image` legt Hintergrundbilder für ein Element fest.

Sie können [mehrere Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) für ein Element definieren, indem Sie eine durch Kommas getrennte Liste von Bildern angeben. Die Hintergrundbilder werden in Stapelkontext-Ebenen übereinander gezeichnet. Die zuerst angegebene Ebene wird so gezeichnet, als wäre sie dem Benutzer am nächsten.

Die [Ränder](/de/docs/Web/CSS/Reference/Properties/border) des Elements werden dann darüber gezeichnet, und die {{cssxref("background-color")}} wird darunter gezeichnet. Wie die Bilder relativ zur Box und deren Rändern gezeichnet werden, wird durch die CSS-Eigenschaften {{cssxref("background-clip")}} und {{cssxref("background-origin")}} definiert.

Wenn ein angegebenes Bild nicht gezeichnet werden kann (zum Beispiel, wenn die durch die angegebene URI bezeichnete Datei nicht geladen werden kann), behandeln Browser es so, als wäre der Wert `none`.

> [!NOTE]
> Auch wenn die Bilder undurchsichtig sind und die Farbe unter normalen Umständen nicht angezeigt wird, sollten Webentwickler immer eine {{cssxref("background-color")}} angeben. Wenn die Bilder nicht geladen werden können – zum Beispiel, wenn das Netzwerk ausgefallen ist – wird die Hintergrundfarbe als Fallback verwendet.

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für assistive Technologien. Dies ist vor allem für Bildschirmleseprogramme wichtig, da ein solches Programm das Vorhandensein nicht ankündigen und daher nichts an seine Benutzer übermitteln wird. Wenn das Bild Informationen enthält, die zum Verständnis des Hauptzwecks der Seite entscheidend sind, sollte es besser semantisch im Dokument beschrieben werden.

- [MDN zur Erklärung von WCAG, Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Darüber hinaus ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen dem Hintergrundbild und dem Vordergrundtext hoch genug ist, damit Personen mit eingeschränktem Sehvermögen den Seiteninhalt lesen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtdichte der Text- und Hintergrundfarbenwerte bestimmt. Um die [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für den Inhalt des Fließtexts und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 24px oder größer oder [fettgedruckt](/de/docs/Web/CSS/Reference/Properties/font-weight) 18,66px oder größer.

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [Verstehen von WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), W3C (2023)

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Hintergrundbilder übereinander legen

Beachten Sie, dass das Sternbild teilweise transparent ist und über dem Katzenbild liegt.

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
- [CSS-Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients)
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
  - {{cssxref("background")}} Kurzform
- [Lernen: Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Verwendung mehrerer Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [Hintergrundbilder skalieren](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
