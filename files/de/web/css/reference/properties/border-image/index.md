---
title: "`border-image` CSS-Eigenschaft"
short-title: border-image
slug: Web/CSS/Reference/Properties/border-image
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`border-image`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zeichnet ein Bild um ein gegebenes Element. Sie ersetzt den regulären [Rand](/de/docs/Web/CSS/Reference/Properties/border) des Elements.

> [!NOTE]
> Sie sollten einen separaten {{cssxref("border-style")}} angeben, falls das Randbild nicht geladen werden kann. Obwohl die Spezifikation dies nicht strikt erfordert, stellen einige Browser das Randbild nicht dar, wenn {{cssxref("border-style")}} auf `none` oder {{cssxref("border-width")}} auf `0` gesetzt ist.

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

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}

Diese Kurzform-Eigenschaft wird durch die CSS {{cssxref("border")}} Kurzschreibweise zurückgesetzt, wobei alle Langform-Eigenschaften auf ihre Anfangswerte gesetzt werden.

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

Die `border-image`-Eigenschaft kann mit ein bis fünf der unten aufgeführten Werte spezifiziert werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) von {{cssxref("border-image-source")}} `none` ist oder das Bild nicht angezeigt werden kann, wird stattdessen der {{cssxref("border-style")}} angezeigt.

### Werte

- `<'border-image-source'>`
  - : Die Quelle des Bildes. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Abmessungen zum Schneiden des Quellbilds in Regionen. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Randbilds. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Die Entfernung des Randbilds von der äußeren Kante des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Definiert, wie die Kantenregionen des Quellbilds angepasst werden, um die Abmessungen des Randbilds anzupassen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Hilfstechnologien können Randbilder nicht interpretieren. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel werden wir ein Diamantmuster auf die Ränder eines Elements anwenden. Die Quelle für das Randbild ist eine ".png"-Datei mit 81 x 81 Pixeln, mit drei Diamanten vertikal und horizontal:

![Acht Diamanten: vier rote Diamanten, einer in jeder Ecke, und vier orange Diamanten, einer auf jeder Seite. Die Mitte ist leer.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe eines einzelnen Diamanten anzupassen, verwenden wir einen Wert von 81 geteilt durch 3 oder `27`, um das Bild in Eck- und Kantenbereiche zu schneiden. Um das Randbild in der Mitte der Kante des Hintergrunds des Elements zu zentrieren, setzen wir die Überstandswerte gleich der Hälfte der Breitenwerte. Schließlich wird ein Wiederholungswert von `round` die Randschnitte gleichmäßig passen, d.h. ohne Abschneiden oder Lücken.

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

{{cssxref("border-radius")}} hat keine Auswirkung auf das Randbild. Dies liegt daran, dass {{cssxref("border-image-outset")}} in der Lage ist, das Bild außerhalb der Randbox zu platzieren, sodass es keinen Sinn macht, dass das Randbild durch den Randbereich abgeschnitten wird. Um abgerundete Ränder bei Verwendung eines Randbilds zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder, im Falle eines Verlaufs, es stattdessen als Hintergrund zeichnen. Unten zeigen wir einen Ansatz, dies zu tun, indem zwei {{cssxref("background-image")}}s verwendet werden: eines, das die Randbox erweitert, und ein weiteres für die Polsterbox.

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
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
- Verlauf-Funktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Randbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
