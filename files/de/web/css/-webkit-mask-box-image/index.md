---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, vorangestellte **`-webkit-mask-box-image`** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) legt das Maskenbild für den Rahmenkasten eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und gehört zu keinem Standard. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrand verwendet werden soll, sowie optional vier Werte für den Rahmenversatz und bis zu zwei Stile für den Rahmenwiederholungsmodus.

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
  - : Der Ort der Bildressource, die als Maskenbild verwendet wird, {{cssxref("&lt;gradient&gt;")}}, oder anderer {{cssxref("&lt;image&gt;")}}-Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Rahmenkasten kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen prozentualen Wert, der relativ zu der entsprechenden Dimension (Breite oder Höhe) des Rahmenkastens ist.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie nötig, um den Rahmenkasten zu überbrücken. Kann ein Teilbild enthalten, wenn das Maskenbild nicht gleichmäßig in den Rahmenkasten passt.
- `stretch`
  - : Das Maskenbild wird gestreckt, um den Rahmenkasten genau zu enthalten.
- `round`
  - : Das Maskenbild wird etwas gestreckt und wiederholt, so dass am Ende des Rahmenkastens kein Teilmaskenbild vorhanden ist.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Dehnung wiederholt. Es gibt kein Teilmaskenbild am Ende des Rahmenkastens.

Die Versatzwerte oder Kantenversätze definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}}, oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixelweiten interpretiert werden.

Rahmenwiederholungsstile, falls enthalten, werden in der Reihenfolge von `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben ist, gilt dieser Wert für beide Achsen. Während es {{cssxref("background-repeat")}} ähnelt, werden die Werte `cover` und `contain` nicht unterstützt.

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

### Ein Bild einstellen

```css
.exampleone {
  -webkit-mask-box-image: url("mask.png");
}
```

### Ein Bild versetzen und füllen

```css
.exampletwo {
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
