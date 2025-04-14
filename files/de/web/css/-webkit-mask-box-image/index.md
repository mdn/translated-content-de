---
title: -webkit-mask-box-image
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 0d43b58f31f30e5dbafd9c117a467e389cc8b176
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, mit Präfix versehene **`-webkit-mask-box-image`** [Kurzschrift-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das Maskenbild für das Rahmenfeld eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich in keiner Standardspur. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}} Eigenschaft.

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrahmen verwendet werden soll, und optional vier Rahmenabstandswerte und bis zu zwei Rahmenwiederholungsstile.

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
  - : Der Speicherort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}}, oder ein anderer {{cssxref("&lt;image&gt;")}}-Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Rahmenfeld kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Maskenbildes Versatzes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen Prozentwert im Verhältnis zur entsprechenden Dimension (Breite oder Höhe) des Rahmenfeldes.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie nötig, um das Rahmenfeld zu überspannen. Kann ein partielles Bild enthalten, wenn das Maskenbild nicht gleichmäßig in das Rahmenfeld passt.
- `stretch`
  - : Das Maskenbild wird so gedehnt, dass es das Rahmenfeld genau enthält.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, sodass am Ende des Rahmenfeldes kein partielles Maskenbild vorhanden ist.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Dehnung wiederholt. Es gibt kein partielles Maskenbild am Ende des Rahmenfeldes.

Die Abstands- oder Kantenversatzwerte definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}}, oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixellängen interpretiert werden.

Rahmenwiederholungsstile, wenn sie einbezogen werden, werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben ist, gilt der Wert für beide Achsen. Während sie den {{cssxref("background-repeat")}} ähneln, werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Initialer Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value): `none`
- Gilt für: alle Elemente
- [Vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value): wie angegeben

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## Beispiele

### Ein Bild einstellen

```css
.example-one {
  -webkit-mask-box-image: url("mask.png");
}
```

### Versatz und Füllung eines Bildes

```css
.example-two {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{ cssxref("mask-border") }} Eigenschaft
- CSS {{ cssxref("border-image") }} Eigenschaft
- [Safari CSS Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
