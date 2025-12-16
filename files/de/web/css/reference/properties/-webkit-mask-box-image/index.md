---
title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{ Non-standard_header() }}

Die nicht-standardisierte, mit Präfix versehene **`-webkit-mask-box-image`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft legt das Maskenbild für den Rahmenkasten eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht auf einem Standardpfad. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("mask-border-source", "-webkit-mask-border-source")}}
- {{cssxref("mask-border-outset", "-webkit-mask-border-outset")}}
- {{cssxref("mask-border-repeat", "-webkit-mask-border-repeat")}}

Die Werte umfassen das `<image>`, das als Maskenrahmen verwendet werden soll, und optional vier Rahmen-Ausgangswerte und bis zu zwei Rahmen-Wiederholungsstile.

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

- {{cssxref("image")}}
  - : Der Speicherort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("gradient")}} oder ein anderer {{cssxref("image")}}-Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Rahmenkasten kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Versatzes des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Versatz des Maskenbildes hat einen Prozentwert relativ zur entsprechenden Dimension (Breite oder Höhe) des Rahmenkastens.
- {{cssxref("number")}}
  - : Die Größe des Versatzes des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wie nötig wiederholt, um den Rahmenkasten zu überspannen. Kann ein Teilbild enthalten, wenn das Maskenbild nicht gleichmäßig in den Rahmenkasten passt.
- `stretch`
  - : Das Maskenbild wird so gedehnt, dass es genau in den Rahmenkasten passt.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, sodass es kein Teil-Maskenbild am Ende des Rahmenkastens gibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Dehnung wiederholt. Es gibt kein Teil-Maskenbild am Ende des Rahmenkastens.

Die Ausgangswerte oder Randversätze definieren die Abstände von den oberen, rechten, unteren und linken Kanten des Bildes in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixellängen interpretiert werden.

Rahmen-Wiederholungsstile werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert deklariert wird, gilt dieser Wert für beide Achsen. Während ähnlich zu {{cssxref("background-repeat")}}, werden die Werte `cover` und `contain` nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value): `none`
- Anwendbar auf: alle Elemente
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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{ cssxref("mask-border") }}-Eigenschaft
- CSS {{ cssxref("border-image") }}-Eigenschaft
- [Safari CSS-Dokumentation: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
