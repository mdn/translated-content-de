---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, vorangestellte Eigenschaft **`-webkit-mask-box-image`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das Maskenbild für den Randbereich eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht auf einem Standard-Track. Ziehen Sie stattdessen in Betracht, die Eigenschaft {{CSSXref("mask-border")}} zu verwenden.

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrahmen verwendet werden soll, und optional vier Maskenabstände und bis zu zwei Maskenwiederholungsstile.

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
  - : Wird verwendet, um anzugeben, dass ein Randbereich keine Maskenfelder haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbilds. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbilds hat einen Prozentwert relativ zur entsprechenden Dimension (Breite oder Höhe) des Rahmenbereichs.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbilds in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wie nötig wiederholt, um den Rahmenbereich zu überspannen. Kann ein Teilbild enthalten, wenn das Maskenbild nicht gleichmäßig in den Rahmenbereich passt.
- `stretch`
  - : Das Maskenbild wird gestreckt, um den Rahmenbereich genau zu enthalten.
- `round`
  - : Das Maskenbild wird etwas gestreckt und wiederholt, sodass es am Ende des Rahmenbereichs kein Teilmaskenbild gibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Strecken wiederholt. Es gibt kein Teilmaskenbild am Ende des Rahmenbereichs.

Die Voraussetzungswerte oder Randabstände definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixellängen interpretiert werden.

Wiederholungsstile von Rändern, wenn sie eingeschlossen sind, werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben ist, gilt er für beide Achsen. Im Gegensatz zu {{cssxref("background-repeat")}} werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value): `none`
- Anwendbar auf: alle Elemente
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

- CSS {{ cssxref("mask-border") }} Eigenschaft
- CSS {{ cssxref("border-image") }} Eigenschaft
- [Safari CSS-Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
