---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, mit einem Präfix versehene **`-webkit-mask-box-image`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt das Maskenbild für die Rahmenbox eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und gehört nicht zu einem Standard-Track. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrahmen verwendet werden soll, und optional vier Rahmen-Außensätze und bis zu zwei Rahmen-Wiederholungsstile.

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
  - : Der Ort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}} oder ein anderer {{cssxref("&lt;image&gt;")}} Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass eine Rahmenbox kein Maskenbild hat.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbilds. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbilds hat einen Prozentsatzwert relativ zur entsprechenden Dimension der Rahmenbox (Breite oder Höhe).
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbilds in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wie nötig wiederholt, um die Rahmenbox zu überspannen. Es kann ein Teilbild enthalten, wenn das Maskenbild nicht gleichmäßig in die Rahmenbox unterteilt werden kann.
- `stretch`
  - : Das Maskenbild wird gestreckt, um die Rahmenbox genau zu umfassen.
- `round`
  - : Das Maskenbild wird etwas gestreckt und so wiederholt, dass es kein Teilmaskenbild am Ende der Rahmenbox gibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Streckung wiederholt. Es gibt kein Teilmaskenbild am Ende der Rahmenbox.

Die Außensätze oder Randversätze definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixellängen interpretiert werden.

Rahmen-Wiederholungsstile, wenn vorhanden, werden in der Reihenfolge von `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben ist, gilt der Wert für beide Achsen. Während sie {{cssxref("background-repeat")}} ähneln, werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Initialwert](/de/docs/Web/CSS/initial_value): `none`
- Gilt für: Alle Elemente
- [Vererbt](/de/docs/Web/CSS/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/computed_value): wie angegeben

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{ cssxref("mask-border") }} Eigenschaft
- CSS {{ cssxref("border-image") }} Eigenschaft
- [Safari CSS Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
