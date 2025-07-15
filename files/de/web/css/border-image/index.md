---
title: border-image
slug: Web/CSS/border-image
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft zeichnet ein Bild um ein gegebenes Element. Sie ersetzt den regulären [Rand](/de/docs/Web/CSS/border) des Elements.

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
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

> [!NOTE]
> Sie sollten einen separaten {{cssxref("border-style")}} angeben, falls das Rahmenbild nicht geladen wird. Obwohl die Spezifikation dies nicht strikt verlangt, rendern einige Browser das Rahmenbild nicht, wenn {{cssxref("border-style")}} `none` oder {{cssxref("border-width")}} `0` ist.

## Zusammengesetzte Eigenschaften

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

Die `border-image`-Eigenschaft kann mit einem bis fünf der unten aufgeführten Werte angegeben werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) von {{cssxref("border-image-source")}} `none` ist oder wenn das Bild nicht angezeigt werden kann, wird stattdessen der {{cssxref("border-style")}} angezeigt.

### Werte

- `<'border-image-source'>`
  - : Die Quell-Bilddatei. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Abmessungen zum Zerteilen des Quellbildes in Regionen. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Rahmenbilds. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Der Abstand des Rahmenbilds von der äußeren Kante des Elements. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Definiert, wie die Randregionen des Quellbildes angepasst werden, um die Abmessungen des Rahmenbilds zu füllen. Bis zu zwei Werte können angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Assistive Technologien können keine Rahmenbilder verarbeiten. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Erklärung der Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel wenden wir ein Diamantmuster auf die Ränder eines Elements an. Die Quelle für das Rahmenbild ist eine ".png"-Datei von 81 x 81 Pixeln, mit drei Diamanten vertikal und horizontal:

![Acht Diamanten: vier rote Diamanten, einer in jeder Ecke, und vier orange Diamanten, einer auf jeder Seite. Die Mitte ist leer.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe eines einzelnen Diamanten anzupassen, verwenden wir einen Wert von 81 geteilt durch 3, oder `27`, um das Bild in Eck- und Randregionen zu schneiden. Um das Rahmenbild am Rand des Hintergrunds des Elements zu zentrieren, machen wir die Werte für den Außensatz gleich der Hälfte der Werte für die Breite. Schließlich sorgt ein Wiederholungswert von `round` dafür, dass die Rahmenschnitte gleichmäßig passen, d.h. ohne Zuschneiden oder Lücken.

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

### Runde Kanten

{{cssxref("border-radius")}} hat keinen Effekt auf das Rahmenbild. Dies liegt daran, dass {{cssxref("border-image-outset")}} das Bild außerhalb des Randrahmens platzieren kann, sodass es keinen Sinn macht, das Rahmenbild durch den Randbereich abzuschneiden. Um runde Kanten bei Verwendung eines Rahmenbilds zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder, im Falle eines Verlaufs, es stattdessen als Hintergrund zeichnen. Unten zeigen wir einen Ansatz, dies zu erreichen, indem zwei {{cssxref("background-image")}}s verwendet werden: eines, das den Randrahmen erweitert, und ein weiteres für den Innenabstand.

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
> Es gibt einen neuen `{{cssxref("background-clip")}}: border-area`-Wert, der [vorgeschlagen wird](https://github.com/w3c/csswg-drafts/issues/9456), um diesen Anwendungsfall zu adressieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}}-Typ
- Verlauf-Funktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Rahmenbilder in CSS: Ein Schlüsselbereich für das Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
