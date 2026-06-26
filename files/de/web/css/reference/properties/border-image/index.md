---
title: "`border-image` CSS-Eigenschaft"
short-title: border-image
slug: Web/CSS/Reference/Properties/border-image
l10n:
  sourceCommit: 0cf00ab40deebad90225815e1881ae89bbca085b
---

Die **`border-image`** [CSS](/de/docs/Web/CSS) Eigenschaft zeichnet ein Bild um ein gegebenes Element. Sie ersetzt den regulären [Rand](/de/docs/Web/CSS/Reference/Properties/border) des Elements.

> [!NOTE]
> Sie sollten einen separaten {{cssxref("border-style")}} angeben, falls das Randbild nicht geladen werden kann. Obwohl die Spezifikation dies nicht strikt verlangt, rendern einige Browser das Randbild nicht, wenn {{cssxref("border-style")}} `none` oder {{cssxref("border-width")}} `0` ist.

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

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}

Diese Kurzschreibweise wird zurückgesetzt, indem die Langschreibweisen auf ihre Initialwerte durch die CSS {{cssxref("border")}} Kurzschreibweise gesetzt werden.

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
> Wenn der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) von {{cssxref("border-image-source")}} `none` ist oder wenn das Bild nicht angezeigt werden kann, wird der {{cssxref("border-style")}} stattdessen angezeigt.

### Werte

- `<'border-image-source'>`
  - : Das Quellbild. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Dimensionen zum Zerschneiden des Quellbildes in Regionen. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Randbildes. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Der Abstand des Randbildes von der Außenkante des Elements. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Definiert, wie die Randbereiche des Quellbildes angepasst werden, um die Dimensionen des Randbildes zu erfüllen. Bis zu zwei Werte können angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Assistive Technologien können Randbilder nicht analysieren. Wenn das Bild Informationen enthält, die zum Verstehen der gesamten Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis der Erfolgskriterium 1.1.1 | Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel werden wir ein Diamantmuster auf die Ränder eines Elements anwenden. Die Quelle für das Randbild ist eine ".png"-Datei von 81 mal 81 Pixeln, mit drei Diamanten vertikal und horizontal:

![Acht Diamanten: vier rote Diamanten, einer in jeder Ecke, und vier orange Diamanten, einer auf jeder Seite. Die Mitte ist leer.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe eines einzelnen Diamanten anzupassen, verwenden wir einen Wert von 81 geteilt durch 3, also `27`, um das Bild in Eck- und Randregionen zu schneiden. Um das Randbild auf der Grenze des Hintergrunds des Elements zentriert zu halten, setzen wir die Überstandswerte gleich der Hälfte der Breitenwerte. Schließlich lässt ein Wiederholungswert von `round` die Randstücke gleichmäßig passen, d.h. ohne Zuschneiden oder Lücken.

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
  border-image: repeating-linear-gradient(45deg, #ff3333, #33bbff, #ff3333 30px)
    60;
  padding: 20px;
}
```

#### Ergebnis

{{EmbedLiveSample('Gradient')}}

### Abgerundete Ränder

{{cssxref("border-radius")}} hat keine Auswirkung auf das Randbild. Dies liegt daran, dass {{cssxref("border-image-outset")}} das Bild außerhalb des Randbereichs platzieren kann, sodass es keinen Sinn macht, dass das Randbild durch den Randbereich abgeschnitten wird. Um abgerundete Ränder zu erstellen, wenn ein Randbild verwendet wird, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder im Falle eines Verlaufs es als den Hintergrund zeichnen. Unten zeigen wir einen Ansatz, um dies zu tun, indem zwei {{cssxref("background-image")}}s verwendet werden: eines, das die Kante des Randkastens erweitert, und ein weiteres für den Innenabstandskasten.

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
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- Gradientenfunktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Randbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN Blog (2023)
