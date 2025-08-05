---
title: border-image
slug: Web/CSS/border-image
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Die **`border-image`** [CSS](/de/docs/Web/CSS) Eigenschaft zieht ein Bild um ein gegebenes Element. Sie ersetzt den normalen [Rand](/de/docs/Web/CSS/border) des Elements.

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

> [!NOTE]
> Sie sollten einen separaten {{cssxref("border-style")}} angeben, falls das Randbild nicht geladen werden kann. Auch wenn die Spezifikation es nicht strikt erfordert, rendern einige Browser das Randbild nicht, wenn {{cssxref("border-style")}} `none` ist oder {{cssxref("border-width")}} `0` ist.

## Bestandteil-Eigenschaften

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

Die `border-image` Eigenschaft kann mit einem bis fünf der unten aufgeführten Werte angegeben werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) von {{cssxref("border-image-source")}} `none` ist oder wenn das Bild nicht angezeigt werden kann, wird der {{cssxref("border-style")}} stattdessen angezeigt.

### Werte

- `<'border-image-source'>`
  - : Die Quellbild. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Dimensionen für das Zerteilen des Quellbildes in Regionen. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Randbildes. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Die Entfernung des Randbildes von der äußeren Kante des Elements. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Definiert, wie die Randbereiche des Quellbildes angepasst werden, um in die Dimensionen des Randbildes zu passen. Bis zu zwei Werte können angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Hilfstechnologien können Randbilder nicht verarbeiten. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtszwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel wenden wir ein Rauten-Muster auf die Ränder eines Elements an. Die Quelle für das Randbild ist eine ".png"-Datei mit 81 mal 81 Pixeln, die drei Rauten vertikal und horizontal hat:

![Acht Rauten: vier rote Rauten, eine in jeder Ecke, und vier orange Rauten, eine auf jeder Seite. Die Mitte ist leer.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe einer einzelnen Raute zu entsprechen, verwenden wir einen Wert von 81 geteilt durch 3, oder `27`, um das Bild in Eck- und Kantenbereiche zu zerteilen. Um das Randbild auf der Kante des Hintergrunds des Elements zu zentrieren, machen wir die 'outset'-Werte gleich der Hälfte der Breitenwerte. Schließlich sorgt ein Wiederholwert von `round` dafür, dass die Randstücke gleichmäßig passen, d.h. ohne Schnitt oder Lücken.

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

### Gerundete Ränder

{{cssxref("border-radius")}} hat keine Wirkung auf das Randbild. Das liegt daran, dass {{cssxref("border-image-outset")}} in der Lage ist, das Bild außerhalb des Randrahmens zu platzieren, sodass es keinen Sinn ergibt, dass das Randbild durch den Randbereich abgeschnitten wird. Um gerundete Ränder bei Verwendung eines Randbildes zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder, im Fall eines Verlaufs, ihn stattdessen als Hintergrund zeichnen. Unten zeigen wir einen Ansatz, dies zu tun, indem zwei {{cssxref("background-image")}}s verwendet werden: eins, das den Randrahmen erweitert, und ein anderes für den Innenabstandsrahmen.

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
> Es gibt einen neuen `{{cssxref("background-clip")}}: border-area` Wert, der [vorgeschlagen wird](https://github.com/w3c/csswg-drafts/issues/9456), um diesen Anwendungsfall zu adressieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} type
- Verlauf-Funktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Randbilder in CSS: Ein wichtiger Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
