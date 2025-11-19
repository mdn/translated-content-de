---
title: border-image
slug: Web/CSS/Reference/Properties/border-image
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`border-image`** [CSS](/de/docs/Web/CSS) Eigenschaft zeichnet ein Bild um ein gegebenes Element. Sie ersetzt die normale [Border](/de/docs/Web/CSS/Reference/Properties/border) des Elements.

> [!NOTE]
> Sie sollten einen separaten {{cssxref("border-style")}} angeben, falls das Grenzbild nicht geladen werden kann. Obwohl die Spezifikation es nicht strikt verlangt, rendern einige Browser das Grenzbild nicht, wenn {{cssxref("border-style")}} auf `none` oder {{cssxref("border-width")}} auf `0` gesetzt ist.

{{InteractiveExample("CSS Demo: border-image")}}

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30 /
  19px round;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
  fill / 30px / 30px space;
```

```css interactive-example-choice
border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
```

```css interactive-example-choice
border-image: repeating-linear-gradient(30deg, #4d9f0c, #9198e5, #4d9f0c 20px)
  60;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-image-outset`](/de/docs/Web/CSS/Reference/Properties/border-image-outset)
- [`border-image-repeat`](/de/docs/Web/CSS/Reference/Properties/border-image-repeat)
- [`border-image-slice`](/de/docs/Web/CSS/Reference/Properties/border-image-slice)
- [`border-image-source`](/de/docs/Web/CSS/Reference/Properties/border-image-source)
- [`border-image-width`](/de/docs/Web/CSS/Reference/Properties/border-image-width)

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

Die `border-image` Eigenschaft kann mit einem bis fünf der unten aufgelisteten Werte angegeben werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) von {{cssxref("border-image-source")}} `none` ist oder das Bild nicht angezeigt werden kann, wird der {{cssxref("border-style")}} stattdessen angezeigt.

### Werte

- `<'border-image-source'>`
  - : Das Quellbild. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Abmessungen zum Zerschneiden des Quellbildes in Regionen. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Grenzbildes. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Der Abstand des Border-Bildes von der Außenseite des Elements. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Bestimmt, wie die Randregionen des Quellbildes angepasst werden, um die Dimensionen des Grenzbildes zu erreichen. Bis zu zwei Werte können angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Assistive Technologien können Grenzbilder nicht interpretieren. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es im Dokument semantisch zu beschreiben.

- [MDN Verständnis WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel wenden wir ein Rautenmuster auf die Ränder eines Elements an. Die Quelle für das Grenzbild ist eine ".png"-Datei mit 81 mal 81 Pixeln, mit drei Rauten vertikal und horizontal:

![Acht Rauten: vier rote Rauten, eine in jeder Ecke, und vier orange Rauten, eine an jeder Seite. Die Mitte ist leer.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe einer einzelnen Raute anzupassen, verwenden wir einen Wert von 81 geteilt durch 3, also `27`, um das Bild in Eck- und Kantenregionen zu zerschneiden. Um das Border-Bild in der Mitte am Rand des Hintergrunds des Elements auszurichten, setzen wir die outset-Werte gleich der Hälfte der Breitenwerte. Schließlich sorgt ein Wiederholungswert von `round` dafür, dass die Grenzabschnitte gleichmäßig passen, d.h. ohne Abschneiden oder Lücken.

```css
#bitmap {
  width: 200px;
  background-color: #ffffaa;
  border: 36px solid orange;
  margin: 30px;
  padding: 10px;

  border-image: url("border.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    round;
}
```

#### Ergebnis

{{EmbedLiveSample('Bitmap', '100%', 200)}}

### Gradient

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
  border-image: repeating-linear-gradient(45deg, #ff3333, #33bbff, #ff3333 30px)
    60;
  padding: 20px;
}
```

#### Ergebnis

{{EmbedLiveSample('Gradient')}}

### Abgerundete Ränder

{{cssxref("border-radius")}} hat keinen Einfluss auf das Grenzbild. Dies liegt daran, dass {{cssxref("border-image-outset")}} in der Lage ist, das Bild außerhalb der Border-Box zu platzieren, sodass es keinen Sinn macht, dass das Grenzbild vom Grenzbereich abgeschnitten wird. Um abgerundete Ränder bei Verwendung eines Border-Bildes zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder im Fall eines Gradienten diesen stattdessen als Hintergrund zeichnen. Unten zeigen wir einen Ansatz, dies zu tun, indem zwei {{cssxref("background-image")}}s verwendet werden: eines, das die Border-Box erweitert, und ein weiteres für die Padding-Box.

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
> Es wird ein neuer `{{cssxref("background-clip")}}: border-area` Wert [vorgeschlagen](https://github.com/w3c/csswg-drafts/issues/9456), um dieses Anwendungsfall anzugehen.

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
- Gradient-Funktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Border-Bilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
