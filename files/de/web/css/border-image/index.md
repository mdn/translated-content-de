---
title: border-image
slug: Web/CSS/border-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`border-image`** [CSS](/de/docs/Web/CSS) Eigenschaft zeichnet ein Bild um ein bestimmtes Element. Es ersetzt den regulären [Rahmen](/de/docs/Web/CSS/border) des Elements.

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> [!NOTE]
> Sie sollten einen separaten {{cssxref("border-style")}} angeben, falls das Rahmenbild nicht geladen werden kann. Obwohl es die Spezifikation nicht strikt verlangt, rendern einige Browser das Rahmenbild nicht, wenn {{cssxref("border-style")}} `none` oder {{cssxref("border-width")}} `0` ist.

## Bestehende Eigenschaften

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

Die `border-image` Eigenschaft kann mit einem bis zu fünf der unten aufgeführten Werte angegeben werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/computed_value) von {{cssxref("border-image-source")}} `none` ist, oder wenn das Bild nicht angezeigt werden kann, wird der {{cssxref("border-style")}} stattdessen angezeigt.

### Werte

- `<'border-image-source'>`
  - : Das Quellbild. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Abmessungen zum Schneiden des Quellbilds in Bereiche. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Rahmenbilds. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Der Abstand des Rahmenbilds von der äußeren Kante des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Definiert, wie die Kantenbereiche des Quellbilds angepasst werden, um die Abmessungen des Rahmenbilds zu passen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Hilfstechnologien können Rahmenbilder nicht interpretieren. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel werden wir ein Rautenmuster auf die Ränder eines Elements anwenden. Die Quelle für das Rahmenbild ist eine ".png"-Datei von 81 mal 81 Pixeln, mit drei Rauten vertikal und horizontal:

![Beispiel eines borderimage](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe einer einzelnen Raute anzupassen, verwenden wir einen Wert von 81 geteilt durch 3, also `27`, um das Bild in Eck- und Kantenbereiche zu schneiden. Um das Rahmenbild auf die Kante des Hintergrunds des Elements zu zentrieren, machen wir die Werte für das Vorstehen gleich der Hälfte der Breitenwerte. Schließlich sorgt ein Wiederholungswert von `round` dafür, dass die Rahmenteile gleichmäßig passen, d.h. ohne Zuschneiden oder Lücken.

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

{{cssxref("border-radius")}} hat keinen Einfluss auf das Rahmenbild. Das ist der Fall, weil {{cssxref("border-image-outset")}} in der Lage ist, das Bild außerhalb der Rahmenbox zu platzieren, sodass es keinen Sinn macht, dass das Rahmenbild durch den Rahmenbereich abgeschnitten wird. Um abgerundete Ränder beim Verwenden eines Rahmenbilds zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder, im Falle eines Verlaufs, es stattdessen als Hintergrund zeichnen. Unten zeigen wir einen Ansatz, um dies zu tun, indem wir zwei {{cssxref("background-image")}}s verwenden: eins, das sich auf die Rahmenbox erstreckt, und ein weiteres für die Auffüllungsbox.

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
> Es gibt einen neuen `{{cssxref("background-clip")}}: border-area` Wert, der [vorgeschlagen wird](https://github.com/w3c/csswg-drafts/issues/9456), um diesen Anwendungsfall zu lösen.

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
- Verlauf Funktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Rahmenbilder in CSS: Ein Schlüsselbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN Blog (2023)
