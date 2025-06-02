---
title: -webkit-mask-box-image
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, mit Präfix versehene **`-webkit-mask-box-image`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das Maskenbild für den Rand eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht in einem Standardprozess. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft.

## Komponenten-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrand verwendet werden soll, und optional vier Randversatzwerte und bis zu zwei Randwiederholungsstile.

## Syntax

```css
/* default */
-webkit-mask-box-image: none;

/* image */
-webkit-mask-box-image: url(image.png);

/* image edge-offset */
-webkit-mask-box-image: url(image.png) 10 20 20 10;
-webkit-mask-box-image: url(image.png) 10px 20px 20px 10px;

/* image repeat-style */
-webkit-mask-box-image: url(image.png) space repeat;

/* image edge-offset repeat-style */
-webkit-mask-box-image: url(image.png) 10px 20px 20px 10px space repeat;

/* Global values */
-webkit-mask-box-image: inherit;
-webkit-mask-box-image: initial;
-webkit-mask-box-image: revert;
-webkit-mask-box-image: revert-layer;
-webkit-mask-box-image: unset;
```

### Werte

- {{cssxref("&lt;image&gt;")}}
  - : Der Ort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}} oder ein anderer {{cssxref("&lt;image&gt;")}}-Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Randkasten kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen Prozentwert, der relativ zur entsprechenden Dimension (Breite oder Höhe) des Randkastens ist.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es notwendig ist, um den Randkasten zu spannen. Ein teilweises Bild kann enthalten sein, wenn das Maskenbild sich nicht gleichmäßig in den Randkasten teilen lässt.
- `stretch`
  - : Das Maskenbild wird gedehnt, um den Randkasten genau zu enthalten.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, sodass am Ende des Randkastens kein teilweises Maskenbild vorhanden ist.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Dehnung wiederholt. Es gibt kein teilweises Maskenbild am Ende des Randkastens.

Die Versatzwerte oder Randabstände definieren die Abstände von den oberen, rechten, unteren und linken Rändern des Bildes in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} gesetzt werden, wobei Zahlen als Pixellängen interpretiert werden.

Randwiederholungsstile, wenn enthalten, werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben wird, gilt derselbe Wert für beide Achsen. Während ähnlich wie {{cssxref("background-repeat")}}, werden die `cover`- und `contain`-Werte nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value): `none`
- Gilt für: alle Elemente
- [Verändert sich nicht von sich aus](/de/docs/Web/CSS/CSS_cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value): wie angegeben

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## Beispiele

### Ein Bild festlegen

```css
.example-one {
  -webkit-mask-box-image: url("mask.png");
}
```

### Ein Bild versetzen und füllen

```css
.example-two {
  -webkit-mask-box-image: url("logo.png") 100px 100px 0px 0px round round;
}
```

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{ cssxref("mask-border") }}-Eigenschaft
- CSS {{ cssxref("border-image") }}-Eigenschaft
- [Safari CSS-Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
