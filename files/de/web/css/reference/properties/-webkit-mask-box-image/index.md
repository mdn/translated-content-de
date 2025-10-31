---
title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{ Non-standard_header() }}

Die nicht-standardisierte, mit Präfix versehene **`-webkit-mask-box-image`** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) Eigenschaft legt das Maskenbild für den Rahmenbereich eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht auf einem Standardweg. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}} Eigenschaft.

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/Reference/Properties/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/Reference/Properties/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat)

Die Werte beinhalten das `<image>`, das als Maskenrand genutzt werden soll, und optional vier Werte für den Randabstand sowie bis zu zwei Stile für das Wiederholen des Randes.

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
  - : Wird verwendet, um anzugeben, dass ein Rahmenbereich kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen Prozentwert relativ zur entsprechenden Dimension des Rahmenbereichs (Breite oder Höhe).
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es notwendig ist, um den Rahmenbereich zu überspannen. Ein teilweise Bild kann enthalten sein, wenn das Maskenbild sich nicht gleichmäßig in den Rahmenbereich aufteilt.
- `stretch`
  - : Das Maskenbild wird gestreckt, um den Rahmenbereich genau zu umschließen.
- `round`
  - : Das Maskenbild wird leicht gestreckt und wiederholt, so dass es kein teilweises Maskenbild am Ende des Rahmenbereichs gibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Streckung wiederholt. Es gibt kein teilweises Maskenbild am Ende des Rahmenbereichs.

Die Offset-Werte oder Randabstände definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}}, oder {{cssxref("percentage")}} gesetzt werden, wobei Zahlen als Pixelgrößen interpretiert werden.

Rand-Wiederholungsstile, wenn sie enthalten sind, werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben wird, gilt dieser für beide Achsen. Während ähnlich wie {{cssxref("background-repeat")}}, werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value): `none`
- Gilt für: alle Elemente
- [Vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance): nein
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

- CSS {{ cssxref("mask-border") }} Eigenschaft
- CSS {{ cssxref("border-image") }} Eigenschaft
- [Safari CSS-Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
