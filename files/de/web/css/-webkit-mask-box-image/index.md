---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, mit einem Präfix versehene **`-webkit-mask-box-image`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties)-Eigenschaft legt das Maskenbild für die Rahmenbox eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich in keiner Standardspur. Ziehen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft in Betracht.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrand verwendet werden soll, und optional vier Werte für die Rahmenabstände sowie bis zu zwei Wiederholungsstile des Rahmens.

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
  - : Wird verwendet, um anzugeben, dass eine Rahmenbox kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Sehen Sie {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen Prozentwert relativ zu den entsprechenden Dimensionen der Rahmenbox (Breite oder Höhe).
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es erforderlich ist, um die Rahmenbox abzudecken. Kann ein unvollständiges Bild enthalten, wenn das Maskenbild sich nicht gleichmäßig auf die Rahmenbox aufteilt.
- `stretch`
  - : Das Maskenbild wird so gestreckt, dass es die Rahmenbox exakt enthält.
- `round`
  - : Das Maskenbild wird etwas gestreckt und wiederholt, sodass am Ende der Rahmenbox kein unvollständiges Maskenbild vorhanden ist.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Streckung wiederholt. Am Ende der Rahmenbox gibt es kein unvollständiges Maskenbild.

Die Versatzwerte oder Kantenabstände definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixellängen interpretiert werden.

Rahmenwiederholungsstile, falls angegeben, werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben ist, gilt derselbe Wert für beide Achsen. Obwohl diese Funktion ähnlich wie {{cssxref("background-repeat")}} ist, werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Initialwert](/de/docs/Web/CSS/initial_value): `none`
- Gilt für: alle Elemente
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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{ cssxref("mask-border") }}-Eigenschaft
- CSS-{{ cssxref("border-image") }}-Eigenschaft
- [Safari CSS-Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
