---
title: "`-webkit-mask-box-image` CSS-Eigenschaft"
short-title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{ Non-standard_header() }}

Die nicht standardisierte, mit einem Präfix versehene **`-webkit-mask-box-image`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt das Maskenbild für den Rahmen eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich auf keiner Standardspur. Erwägen Sie stattdessen die Verwendung der {{CSSXref("mask-border")}}-Eigenschaft.

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("mask-border-source", "-webkit-mask-border-source")}}
- {{cssxref("mask-border-outset", "-webkit-mask-border-outset")}}
- {{cssxref("mask-border-repeat", "-webkit-mask-border-repeat")}}

Die Werte umfassen das `<image>`, das als Maskenrahmen verwendet werden soll, und optional vier Abstände zum Rand sowie bis zu zwei Wiederholungsstile für den Rahmen.

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
  - : Die Position der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("gradient")}} oder ein anderer {{cssxref("image")}}-Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass ein Rahmenfeld kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Offsets der Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Das Offset des Maskenbildes hat einen Prozentwert relativ zur entsprechenden Dimension (Breite oder Höhe) des Rahmenfeldes.
- {{cssxref("number")}}
  - : Die Größe des Offsets der Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es notwendig ist, um das Rahmenfeld zu überspannen. Es kann ein Teilbild enthalten, wenn das Maskenbild nicht gleichmäßig in das Rahmenfeld passt.
- `stretch`
  - : Das Maskenbild wird gedehnt, um das Rahmenfeld genau zu enthalten.
- `round`
  - : Das Maskenbild wird etwas gedehnt und wiederholt, sodass am Ende des Rahmenfeldes kein Teilbild vorhanden ist.
- `space`
  - : Das Maskenbild wird so oft wie möglich wiederholt, ohne gedehnt zu werden. Am Ende des Rahmenfeldes gibt es kein Teilbild.

Die Abstands- oder Randversatzwerte definieren die Abstände von den oberen, rechten, unteren und linken Rändern des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixellängen interpretiert werden.

Rahmen-Wiederholungsstile werden bei Angabe in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert erklärt wird, gilt dieser für beide Achsen. Während sie {{cssxref("background-repeat")}} ähneln, werden die `cover`- und `contain`-Werte nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value): `none`
- Gilt für: alle Elemente
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

### Ein Bild versetzen und ausfüllen

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
