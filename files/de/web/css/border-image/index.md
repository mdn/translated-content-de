---
title: border-image
slug: Web/CSS/border-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`border-image`** [CSS](/de/docs/Web/CSS) Eigenschaft zeichnet ein Bild um ein gegebenes Element. Sie ersetzt den normalen [Rand](/de/docs/Web/CSS/border) des Elements.

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> [!NOTE]
> Sie sollten einen separaten {{cssxref("border-style")}} angeben, falls das Rahmenbild nicht geladen werden kann. Obwohl die Spezifikation dies nicht strikt erfordert, rendern einige Browser das Rahmenbild nicht, wenn {{cssxref("border-style")}} auf `none` oder {{cssxref("border-width")}} auf `0` gesetzt ist.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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

Die `border-image`-Eigenschaft kann mit einem bis zu fünf der unten aufgeführten Werte spezifiziert werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/computed_value) von {{cssxref("border-image-source")}} `none` ist oder das Bild nicht angezeigt werden kann, wird der {{cssxref("border-style")}} stattdessen angezeigt.

### Werte

- `<'border-image-source'>`
  - : Das Quellbild. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Dimensionen zum Zerschneiden des Quellbilds in Regionen. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Rahmenbildes. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Der Abstand des Rahmenbildes vom äußeren Rand des Elements. Es können bis zu vier Werte angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Definiert, wie die Randregionen des Quellbilds angepasst werden, um die Dimensionen des Rahmenbildes auszufüllen. Es können bis zu zwei Werte angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Hilfstechnologie kann Rahmenbilder nicht interpretieren. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des gesamten Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | Verständnis für WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel wenden wir ein Diamantmuster auf die Ränder eines Elements an. Die Quelle für das Rahmenbild ist eine ".png"-Datei von 81 mal 81 Pixeln, mit drei Diamanten vertikal und horizontal:

![ein Beispiel für ein Rahmenbild](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe eines einzelnen Diamanten zu treffen, verwenden wir einen Wert von 81 geteilt durch 3, also `27`, um das Bild in Eck- und Randregionen zu zerschneiden. Um das Rahmenbild mittig an der Kante des Elementhintergrunds zu platzieren, gleichen wir die Versatzwerte mit der Hälfte der Breitenwerte ab. Schließlich sorgt ein Wiederholungswert von `round` dafür, dass die Rahmenschnitte ohne Abschneiden oder Lücken gleichmäßig passen.

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

{{cssxref("border-radius")}} hat keine Wirkung auf das Rahmenbild. Dies liegt daran, dass {{cssxref("border-image-outset")}} das Bild außerhalb der Rahmenbox platzieren kann, sodass es keinen Sinn macht, das Rahmenbild durch den Rahmenbereich zu schneiden. Um abgerundete Rahmen bei der Verwendung eines Rahmenbilds zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken erstellen oder im Fall eines Verlaufs es als Hintergrund zeichnen. Unten zeigen wir einen Ansatz, um dies zu tun, indem wir zwei {{cssxref("background-image")}} verwenden: eines, das die Rahmenbox erweitert, und ein weiteres für die Polsterungsbox.

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
> Es wird ein neuer `{{cssxref("background-clip")}}: border-area`-Wert [vorgeschlagen](https://github.com/w3c/csswg-drafts/issues/9456), um dieses Anwendungsfall zu adressieren.

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
- [Rahmenbilder in CSS: Ein Schwerpunktgebiet für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
