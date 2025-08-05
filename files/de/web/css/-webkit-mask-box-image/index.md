---
title: -webkit-mask-box-image
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{ Non-standard_header() }}

Die nicht standardisierte, mit Präfix versehene **`-webkit-mask-box-image`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das Maskenbild für den Rahmenkasten eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich auf keiner Standardspur. Erwägen Sie stattdessen die Verwendung der Eigenschaft {{CSSXref("mask-border")}}.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrahmen verwendet werden soll, und optional vier Rahmen-Außensetzwerte und bis zu zwei Rahmen-Wiederholstile.

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
  - : Der Speicherort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}}, oder ein anderer {{cssxref("&lt;image&gt;")}} Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Rahmenkasten kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen Prozentwert relativ zur entsprechenden Dimension des Rahmenkastens (Breite oder Höhe).
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixel.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie erforderlich, um den Rahmenkasten zu überspannen. Kann ein Teilbild einschließen, wenn das Maskenbild nicht genau in den Rahmenkasten passt.
- `stretch`
  - : Das Maskenbild wird gedehnt, um den Rahmenkasten genau zu enthalten.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, sodass kein Teilmaskenbild am Ende des Rahmenkastens vorhanden ist.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Dehnung wiederholt. Es gibt kein Teilmaskenbild am Ende des Rahmenkastens.

Die Versatzwerte oder Kantenversätze definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixellängen interpretiert werden.

Rahmen-Wiederholstile, wenn sie enthalten sind, werden in der Reihenfolge von `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert deklariert ist, gilt der Wert für beide Achsen. Ähnlich wie bei {{cssxref("background-repeat")}} werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value): `none`
- Anwendbar auf: alle Elemente
- [Vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value): wie angegeben

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## Beispiele

### Ein Bild setzen

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
