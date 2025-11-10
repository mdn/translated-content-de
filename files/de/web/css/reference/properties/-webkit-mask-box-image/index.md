---
title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ Non-standard_header() }}

Die nicht standardmäßige, mit einem Präfix versehene **`-webkit-mask-box-image`**-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das Maskenbild für den Randbereich eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht auf einem Standardweg. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/Reference/Properties/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/Reference/Properties/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/Reference/Properties/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrand verwendet werden soll, und optional vier Randabstandswerte und bis zu zwei Wiederholungsstile für den Rand.

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
  - : Der Ort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}} oder ein anderer {{cssxref("&lt;image&gt;")}}-Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Randbereich kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbilds. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbilds hat einen Prozentwert relativ zur entsprechenden Dimension (Breite oder Höhe) des Randbereichs.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbilds in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es notwendig ist, um den Randbereich zu überbrücken. Ein Teilbild kann enthalten sein, wenn das Maskenbild nicht gleichmäßig in den Randbereich passt.
- `stretch`
  - : Das Maskenbild wird gedehnt, um den Randbereich genau zu füllen.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, sodass es am Ende des Randbereichs kein Teilmaskenbild gibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Dehnung wiederholt. Es gibt kein Teilmaskenbild am Ende des Randbereichs.

Die Versatzwerte oder Kantenabstände definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixelwerte interpretiert werden.

Die Randwiederholungsstile, falls enthalten, werden in der Reihenfolge von `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert deklariert ist, gilt dieser Wert für beide Achsen. Während sie {{cssxref("background-repeat")}} ähnlich sind, werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value): `none`
- Gilt für: alle Elemente
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value): wie angegeben

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## Beispiele

### Ein Bild einstellen

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{ cssxref("mask-border") }}-Eigenschaft
- CSS {{ cssxref("border-image") }}-Eigenschaft
- [Safari CSS-Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
