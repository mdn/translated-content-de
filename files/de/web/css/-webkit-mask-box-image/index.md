---
title: -webkit-mask-box-image
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{ Non-standard_header() }}

Die nicht standardisierte Präfix-Eigenschaft **`-webkit-mask-box-image`** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt das Maskenbild für den Rahmenbereich eines Elements.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht in einer Standardisierungsspur. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}} Eigenschaft.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das zu verwendende `<image>` als Maskengrenze, optional vier Rand-Vorsprungswerte und bis zu zwei Rand-Wiederholungsstile.

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
  - : Der Speicherort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}}, oder ein anderer {{cssxref("&lt;image&gt;")}} Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Rahmenbereich kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen prozentualen Wert relativ zur entsprechenden Dimension des Rahmenbereichs (Breite oder Höhe).
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es erforderlich ist, um den Rahmenbereich zu überspannen. Es kann ein teilweises Bild enthalten, wenn das Maskenbild nicht gleichmäßig in den Rahmenbereich passt.
- `stretch`
  - : Das Maskenbild wird gestreckt, um den Rahmenbereich genau zu enthalten.
- `round`
  - : Das Maskenbild wird leicht gestreckt und wiederholt, sodass kein teilweises Maskenbild am Ende des Rahmenbereichs verbleibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Strecken wiederholt. Es gibt kein teilweises Maskenbild am Ende des Rahmenbereichs.

Die Randversatzwerte oder Kantenvorstände definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixel-Längen interpretiert werden.

Rand-Wiederholungsstile, wenn eingeschlossen, werden in der Reihenfolge von `<repeat-x> <repeat-y>` interpretiert. Falls nur ein Wert deklariert ist, gilt dieser Wert für beide Achsen. Ähnlich wie bei {{cssxref("background-repeat")}}, werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value): `none`
- Gilt für: alle Elemente
- [Vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value): wie angegeben

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## Beispiele

### Setzen eines Bildes

```css
.example-one {
  -webkit-mask-box-image: url("mask.png");
}
```

### Versetzen und Füllen eines Bildes

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

- CSS {{ cssxref("mask-border") }} Eigenschaft
- CSS {{ cssxref("border-image") }} Eigenschaft
- [Safari CSS-Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
