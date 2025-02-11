---
title: border-image
slug: Web/CSS/border-image
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`border-image`**-[CSS](/de/docs/Web/CSS)-Eigenschaft zeichnet ein Bild um ein gegebenes Element. Sie ersetzt den regulären [border](/de/docs/Web/CSS/border) des Elements.

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> [!NOTE]
> Sie sollten eine separate {{cssxref("border-style")}}-Eigenschaft angeben, falls das Border-Bild nicht geladen werden kann. Obwohl die Spezifikation dies nicht streng vorschreibt, rendern einige Browser das Border-Bild nicht, wenn {{cssxref("border-style")}} auf `none` oder {{cssxref("border-width")}} auf `0` gesetzt ist.

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-image-outset`](/de/docs/Web/CSS/border-image-outset)
- [`border-image-repeat`](/de/docs/Web/CSS/border-image-repeat)
- [`border-image-slice`](/de/docs/Web/CSS/border-image-slice)
- [`border-image-source`](/de/docs/Web/CSS/border-image-source)
- [`border-image-width`](/de/docs/Web/CSS/border-image-width)

## Syntax

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;

/* Global values */
border-image: inherit;
border-image: initial;
border-image: revert;
border-image: revert-layer;
border-image: unset;
```

Die `border-image`-Eigenschaft kann mit einer bis fünf der unten aufgeführten Werte angegeben werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/computed_value) von {{cssxref("border-image-source")}} `none` ist oder wenn das Bild nicht angezeigt werden kann, wird die {{cssxref("border-style")}} angezeigt.

### Werte

- `<'border-image-source'>`
  - : Das Quellbild. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Maße zum Zuschneiden des Quellbildes in Regionen. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Border-Bildes. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Der Abstand des Border-Bildes von der Außenkante des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Definiert, wie die Randregionen des Quellbildes an die Maße des Border-Bildes angepasst werden. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Assistive Technologien können Border-Bilder nicht interpretieren. Falls das Bild Informationen enthält, die entscheidend für das Verständnis der Seite sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel wenden wir ein Rautenmuster auf die Ränder eines Elements an. Die Quelle für das Border-Bild ist eine ".png"-Datei mit einer Größe von 81 x 81 Pixel, wobei drei Rauten vertikal und horizontal verlaufen:

![Acht Rauten: vier rote Rauten, jeweils in den Ecken, und vier orangefarbene Rauten, jeweils auf den Seiten. Die Mitte ist leer.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe einer einzelnen Raute anzupassen, verwenden wir einen Wert von 81 geteilt durch 3, also `27`, um das Bild in Ecken- und Kantenregionen zu teilen. Um das Border-Bild auf den Rand des Hintergrunds des Elements zu zentrieren, setzen wir die `outset`-Werte gleich der Hälfte der `width`-Werte. Schließlich macht ein `repeat`-Wert von `round`, dass die Border-Stege gleichmäßig passen, d. h. ohne Zuschneiden oder Lücken.

```css
#bitmap {
  width: 200px;
  background-color: #ffa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    round;
}
```

#### Ergebnis

{{EmbedLiveSample('Bitmap', '100%', 200)}}

### Verlauf

#### HTML

```html
<div id="gradient">
  This element is surrounded by a gradient-based border image!
</div>
```

#### CSS

```css
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
```

#### Ergebnis

{{EmbedLiveSample('Gradient')}}

### Abgerundete Rahmen

{{cssxref("border-radius")}} hat keine Auswirkung auf das Border-Bild. Dies liegt daran, dass {{cssxref("border-image-outset")}} das Bild außerhalb der Rand-Box platzieren kann, sodass es keinen Sinn ergibt, dass das Border-Bild durch den Bereich des Rahmens abgeschnitten wird. Um abgerundete Rahmen beim Verwenden eines Border-Bildes zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder, im Fall eines Verlaufs, diesen stattdessen als Hintergrund zeichnen. Unten wird ein Ansatz dafür gezeigt, indem zwei {{cssxref("background-image")}}s verwendet werden: eines, das sich auf die Rahmen-Box ausdehnt, und eines für die Padding-Box.

#### HTML

```html
<div id="rounded">
  This element is surrounded by a border image with rounded corners!
</div>
```

#### CSS

```css
#rounded {
  width: 200px;
  /* Use transparent so the background image is visible */
  border: 10px solid transparent;
  padding: 20px;
  border-radius: 20px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, cyan, lime);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
```

#### Ergebnis

{{EmbedLiveSample('rounded_borders')}}

> [!NOTE]
> Es gibt einen neuen `{{cssxref("background-clip")}}: border-area`-Wert, der [vorgeschlagen](https://github.com/w3c/csswg-drafts/issues/9456) wird, um diesen Anwendungsfall zu behandeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- Verlauf-Funktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Border-Bilder in CSS: Ein zentraler Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
