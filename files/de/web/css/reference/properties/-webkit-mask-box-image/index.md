---
title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

{{ Non-standard_header() }}

Die nicht standardisierte, prefixed **`-webkit-mask-box-image`** [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft legt das Maskenbild für den Randbereich eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht auf einem Standard-Track. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/Reference/Properties/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/Reference/Properties/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrahmen verwendet werden soll, und optional vier Rand-Abstandswerte sowie bis zu zwei Rand-Wiederholungsstile.

## Syntax

```css
/* default */
-webkit-mask-box-image: none;

/* image */
-webkit-mask-box-image: url("image.png");

/* image edge-offset */
-webkit-mask-box-image: url("image.png") 10 20 20 10;
-webkit-mask-box-image: url("image.png") 10px 20px 20px 10px;

/* image repeat-style */
-webkit-mask-box-image: url("image.png") space repeat;

/* image edge-offset repeat-style */
-webkit-mask-box-image: url("image.png") 10px 20px 20px 10px space repeat;

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
  - : Wird verwendet, um anzugeben, dass ein Randkasten kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen prozentualen Wert relativ zur entsprechenden Dimension (Breite oder Höhe) des Randkastens.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wie nötig wiederholt, um den Randkasten zu überspannen. Kann ein Teilbild beinhalten, wenn sich das Maskenbild nicht gleichmäßig in den Randkasten aufteilt.
- `stretch`
  - : Das Maskenbild wird gedehnt, um den Randkasten genau zu füllen.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, sodass am Ende des Randkastens kein Teilmaskenbild verbleibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Dehnung wiederholt. Es gibt am Ende des Randkastens kein Teilmaskenbild.

Die Versatzwerte, oder Randversätze, definieren die Abstände von den oberen, rechten, unteren und linken Rändern des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixelabstände interpretiert werden.

Rand-Wiederholungsstile, wenn enthalten, werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert deklariert wird, gilt der Wert für beide Achsen. Ähnlich wie bei {{cssxref("background-repeat")}} werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value): `none`
- Gilt für: alle Elemente
- [Vererbt](/de/docs/Web/CSS/Guides/Cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value): wie angegeben

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

Teil keiner Normen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{ cssxref("mask-border") }}-Eigenschaft
- CSS {{ cssxref("border-image") }}-Eigenschaft
- [Safari CSS Reference: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
