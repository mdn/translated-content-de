---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, mit **`-webkit-mask-box-image`** [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt das Maskenbild für das Randfeld eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht in einer Normierungsphase. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft.

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrand verwendet werden soll, optional vier Randverlies-Abstandswerte und bis zu zwei Wiederholungsstile des Randes.

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
  - : Der Speicherort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}} oder andere {{cssxref("&lt;image&gt;")}}-Werte.
- `none`
  - : Wird verwendet, um zu spezifizieren, dass ein Randkasten kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe der Abweichung des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Die Abweichung des Maskenbildes hat einen Prozentwert relativ zur entsprechenden Dimension (Breite oder Höhe) des Randkastens.
- {{cssxref("number")}}
  - : Die Größe der Abweichung des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es erforderlich ist, um den Randkasten zu überspannen. Es kann ein Teilbild enthalten, wenn das Maskenbild nicht gleichmäßig in den Randkasten passt.
- `stretch`
  - : Das Maskenbild wird gedehnt, um den Randkasten exakt zu enthalten.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, sodass es am Ende des Randkastens kein Teilbild gibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich wiederholt, ohne es zu dehnen. Am Ende des Randkastens gibt es kein Teilbild.

Die Aussetzwert- oder Kantenversatzwerte definieren die Abstände von den oberen, rechten, unteren und linken Rändern des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} gesetzt werden, wobei Zahlen als Pixellängen interpretiert werden.

Randwiederholungsstile werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben ist, gilt dieser Wert für beide Achsen. Anders als bei {{cssxref("background-repeat")}} werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/initial_value): `none`
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

### Einstellen eines Bildes

```css
.exampleone {
  -webkit-mask-box-image: url("mask.png");
}
```

### Verschieben und Füllen eines Bildes

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
