---
title: border-image
slug: Web/CSS/border-image
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

Die **`border-image`**-[CSS](/de/docs/Web/CSS)-Eigenschaft zeichnet ein Bild um ein gegebenes Element. Sie ersetzt den regulären [border](/de/docs/Web/CSS/border) des Elements.

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> [!NOTE]
> Sie sollten einen separaten {{cssxref("border-style")}} angeben, falls das Rahmenbild nicht geladen werden kann. Obwohl die Spezifikation dies nicht strikt verlangt, rendern einige Browser das Rahmenbild nicht, wenn {{cssxref("border-style")}} auf `none` oder {{cssxref("border-width")}} auf `0` gesetzt ist.

## Untergeordnete Eigenschaften

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

Die `border-image`-Eigenschaft kann mit einer bis zu fünf der unten aufgeführten Werte spezifiziert werden.

> [!NOTE]
> Wenn der [berechnete Wert](/de/docs/Web/CSS/computed_value) von {{cssxref("border-image-source")}} `none` ist oder das Bild nicht angezeigt werden kann, wird der {{cssxref("border-style")}} stattdessen angezeigt.

### Werte

- `<'border-image-source'>`
  - : Die Quelle des Bildes. Siehe {{cssxref("border-image-source")}}.
- `<'border-image-slice'>`
  - : Die Dimensionen für das Zerschneiden der Bildquelle in Bereiche. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-slice")}}.
- `<'border-image-width'>`
  - : Die Breite des Rahmenbildes. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-width")}}.
- `<'border-image-outset'>`
  - : Der Abstand des Rahmenbildes vom äußeren Rand des Elements. Bis zu vier Werte können angegeben werden. Siehe {{cssxref("border-image-outset")}}.
- `<'border-image-repeat'>`
  - : Legt fest, wie die Randbereiche des Quellbildes angepasst werden, um mit den Dimensionen des Rahmenbildes übereinzustimmen. Bis zu zwei Werte können angegeben werden. Siehe {{cssxref("border-image-repeat")}}.

## Barrierefreiheit

Hilfstechnologien können Rahmenbilder nicht interpretieren. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erklärung zu Leitlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis der Erfolgskriterien 1.1.1 | Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bitmap

In diesem Beispiel wenden wir ein Rauten-Muster auf die Ränder eines Elements an. Die Quelle für das Rahmenbild ist eine ".png"-Datei mit 81 x 81 Pixeln, mit drei Rauten vertikal und horizontal:

![Acht Rauten: vier rote Rauten, je eine in jeder Ecke, und vier orange Rauten, je eine an jeder Seite. Die Mitte ist leer.](border.png)

#### HTML

```html
<div id="bitmap">
  This element is surrounded by a bitmap-based border image!
</div>
```

#### CSS

Um die Größe einer einzelnen Raute anzupassen, verwenden wir einen Wert von 81 geteilt durch 3, also `27`, um das Bild in Eck- und Randbereiche zu zerschneiden. Um das Rahmenbild auf den Rand des Hintergrunds des Elements zu zentrieren, setzen wir die Werte für die Erweiterung auf die Hälfte der Breitenwerte. Schließlich sorgt ein Wiederholungswert von `round` dafür, dass die Rahmenschnitte gleichmäßig passen, d. h. ohne Beschneidung oder Lücken.

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

### Gradienten

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

{{cssxref("border-radius")}} hat keine Auswirkung auf das Rahmenbild. Dies liegt daran, dass {{cssxref("border-image-outset")}} das Bild außerhalb des Rahmenkastens platzieren kann, sodass es keinen Sinn ergibt, dass das Rahmenbild vom Rahmenbereich abgeschnitten wird. Um abgerundete Ränder bei der Verwendung eines Rahmenbildes zu erstellen, sollten Sie das Bild selbst mit abgerundeten Ecken gestalten oder, im Fall eines Gradienten, es stattdessen als Hintergrund zeichnen. Unten zeigen wir einen Ansatz, um dies zu tun, indem wir zwei {{cssxref("background-image")}}s verwenden: ein Bild, das sich über den Rahmenkasten hinaus erstreckt, und ein weiteres für den Padding-Bereich.

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
> Es gibt einen neuen Wert `{{cssxref("background-clip")}}: border-area`, der [vorgeschlagen wird](https://github.com/w3c/csswg-drafts/issues/9456), um diesen Anwendungsfall zu behandeln.

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
- Gradient-Funktionen: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [Rahmenbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
