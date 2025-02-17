---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, mit Präfix versehene **`-webkit-mask-box-image`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt das Maskenbild für die Randbox eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich auf keinem Standardisierungspfad. Ziehen Sie in Betracht, stattdessen die Eigenschaft {{CSSXref("mask-border")}} zu verwenden.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrand verwendet werden soll, sowie optional vier Rand-Abstandswerte und bis zu zwei Wiederholungsstile für den Rand.

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
  - : Der Speicherort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}} oder ein anderer {{cssxref("&lt;image&gt;")}}-Wert.
- `none`
  - : Gibt an, dass die Randbox kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen Prozentsatzwert relativ zur entsprechenden Dimension (Breite oder Höhe) der Randbox.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es notwendig ist, um die Randbox zu füllen. Ein teilweise abgeschnittenes Bild kann enthalten sein, wenn das Maskenbild nicht gleichmäßig in die Randbox passt.
- `stretch`
  - : Das Maskenbild wird gestreckt, um die Randbox genau zu füllen.
- `round`
  - : Das Maskenbild wird etwas gestreckt und wiederholt, sodass kein teilweise abgeschnittenes Maskenbild am Ende der Randbox verbleibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Stretching wiederholt. Es gibt kein teilweise abgeschnittenes Maskenbild am Ende der Randbox.

Die Werte für den Abstand, oder die Kanten-Versätze, definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} angegeben werden, wobei Zahlen als Pixelwerte interpretiert werden.

Wenn Wiederholungsstile des Randes angegeben sind, werden diese in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben wurde, gilt dieser für beide Achsen. Während sie {{cssxref("background-repeat")}} ähneln, werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value): `none`
- Gilt für: alle Elemente
- [Vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/computed_value): wie angegeben

## Formale Syntax

```plain
-webkit-mask-box-image: <mask-image-source> [<mask-image-offset>{4} <mask-border-repeat>{1,2} ]

Where:

<mask-image-source> = {{cssxref("url_value", "&lt;url&gt;")}} | <gradient> | none

<mask-image-offset> = <length> | <percentage> | <number>

<repeat-style> = repeat | stretch | round | space
```

## Beispiele

### Festlegen eines Bildes

```css
.example-one {
  -webkit-mask-box-image: url("mask.png");
}
```

### Versetzen und Füllen eines Bildes

```css
.example-two {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{ cssxref("mask-border") }}-Eigenschaft
- CSS {{ cssxref("border-image") }}-Eigenschaft
- [Safari CSS-Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
