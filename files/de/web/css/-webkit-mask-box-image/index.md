---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardmäßige, mit Präfix versehene **`-webkit-mask-box-image`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt das Maskenbild für das Randfeld eines Elements.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und gehört zu keinem Standardtrack. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}} Eigenschaft.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für folgende CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrand verwendet werden soll, und optional vier Randabstandswerte und bis zu zwei Randwiederholungsstile.

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
  - : Der Ort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}}, oder ein anderer {{cssxref("&lt;image&gt;")}} Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Randfeld kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen Prozentwert relativ zur entsprechenden Dimension (Breite oder Höhe) des Randfelds.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es nötig ist, um das Randfeld zu überspannen. Kann ein partielles Bild enthalten, wenn das Maskenbild nicht gleichmäßig in das Randfeld passt.
- `stretch`
  - : Das Maskenbild wird so gedehnt, dass es exakt in das Randfeld passt.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, so dass es am Ende des Randfeldes kein partielles Maskenbild gibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Dehnung wiederholt. Es gibt kein partielles Maskenbild am Ende des Randfeldes.

Die Versatzwerte oder Randabstandsversätze definieren die Abstände von den oberen, rechten, unteren und linken Rändern des Bildes in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} gesetzt werden, wobei Zahlen als Pixelangaben interpretiert werden.

Randwiederholungsstile, falls einbezogen, werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert deklariert wird, gilt dieser für beide Achsen. Im Gegensatz zu {{cssxref("background-repeat")}} werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value): `none`
- Gilt für: alle Elemente
- [Vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value): wie angegeben

## Formale Syntax

```plain
-webkit-mask-box-image: <mask-image-source> [<mask-image-offset>{4} <mask-border-repeat>{1,2} ]

Where:

<mask-image-source> = {{cssxref("url_value", "&lt;url&gt;")}} | <gradient> | none

<mask-image-offset> = <length> | <percentage> | <number>

<repeat-style> = repeat | stretch | round | space
```

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
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## Spezifikationen

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{ cssxref("mask-border") }} Eigenschaft
- CSS {{ cssxref("border-image") }} Eigenschaft
- [Safari CSS Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
