---
title: border-image
slug: Web/CSS/border-image
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`border-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft zeichnet ein Bild um ein gegebenes Element. Sie ersetzt den regulären [border](/de/docs/Web/CSS/border) des Elements.

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> [!NOTE]
> Sie sollten eine separate {{cssxref("border-style")}}-Deklaration angeben, falls das Randbild nicht geladen werden kann. Obwohl die Spezifikation dies nicht ausdrücklich vorschreibt, rendern einige Browser das Randbild nicht, wenn {{cssxref("border-style")}} auf `none` oder {{cssxref("border-width")}} auf `0` gesetzt ist.

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `border-image`-Eigenschaft kann mit einem bis zu fünf der unten aufgeführten Werte angegeben werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) von {{cssxref("border-image-source")}} `none` ist, oder wenn das Bild nicht angezeigt werden kann, wird stattdessen die {{cssxref("border-style")}} angezeigt.

### Werte

- `<'border-image-source'>`
  - : Die Bildquelle. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Dimensionen zum Zerschneiden des Quellbilds in Regionen. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Randbilds. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Der Abstand des Randbilds von der Außenseite des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Definiert, wie die Randbereiche des Quellbilds angepasst werden, um die Dimensionen des Randbilds zu erfüllen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Assistive Technologie kann Randbilder nicht interpretieren. Wenn das Bild Informationen enthält, die für das Verständnis des Hauptzwecks der Seite entscheidend sind, sollte es besser semantisch im Dokument beschrieben werden.

- [MDN Understanding WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel wird ein Rautenmuster auf die Ränder eines Elements angewendet. Die Quelle für das Randbild ist eine ".png"-Datei mit 81 x 81 Pixeln, die drei Rauten vertikal und horizontal enthält:

![Acht Rauten: vier rote Rauten, eine in jeder Ecke, und vier orangefarbene Rauten, eine auf jeder Seite. Die Mitte ist leer.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe einer einzelnen Raute anzupassen, verwenden wir einen Wert von 81 geteilt durch 3, also `27`, um das Bild in Ecken- und Kantenbereiche zu schneiden. Um das Randbild auf dem Rand des Hintergrunds des Elements zu zentrieren, setzen wir die Abstandswerte gleich der Hälfte der Breitenwerte. Schließlich sorgt ein Wiederholungswert von `round` dafür, dass die Randabschnitte gleichmäßig passen, d.h. ohne Abschneiden oder Lücken.

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

### Abgerundete Ränder

{{cssxref("border-radius")}} hat keine Wirkung auf das Randbild. Dies liegt daran, dass {{cssxref("border-image-outset")}} in der Lage ist, das Bild außerhalb der Randbox zu platzieren, sodass es keinen Sinn ergibt, dass das Randbild durch den Randbereich abgeschnitten wird. Um abgerundete Ränder bei der Verwendung eines Randbilds zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder, im Falle eines Verlaufs, es stattdessen als Hintergrund zeichnen. Unten zeigen wir einen Ansatz, wie dies erreicht werden kann, indem zwei {{cssxref("background-image")}}s verwendet werden: eines, das sich über die Randbox hinaus erstreckt, und ein anderes für die Padding-Box.

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
  background-image:
    linear-gradient(white, white), linear-gradient(to right, cyan, lime);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
```

#### Ergebnis

{{EmbedLiveSample('rounded_borders')}}

> [!NOTE]
> Es wird ein neuer Wert `{{cssxref("background-clip")}}: border-area` [vorgeschlagen](https://github.com/w3c/csswg-drafts/issues/9456), um diesen Anwendungsfall zu lösen.

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
- Gradientenfunktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Border-Bilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
