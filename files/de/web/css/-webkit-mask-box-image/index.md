---
title: -webkit-mask-box-image
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardmäßige, vorangestellte **`-webkit-mask-box-image`** [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt das Maskenbild für die Umrandungsbox eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht auf einem Standardisierungspfad. Erwägen Sie stattdessen die Verwendung der Eigenschaft {{CSSXref("mask-border")}}.

## Zuordnende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte schließen das `<image>` ein, das als Maskenrand verwendet werden soll, und optional vier Randabstandswerte sowie bis zu zwei Randwiederholungsstile.

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
  - : Der Ort der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}} oder anderer {{cssxref("&lt;image&gt;")}}-Wert.
- `none`
  - : Wird verwendet, um anzugeben, dass eine Umrandungsbox kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe der Offset-Maskenbildgröße. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Offset des Maskenbilds hat einen Prozentwert relativ zur entsprechenden Dimension (Breite oder Höhe) der Umrandungsbox.
- {{cssxref("number")}}
  - : Die Größe des Offsets des Maskenbilds in Pixel.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie es notwendig ist, um die Umrandungsbox zu überspannen. Es kann ein Teilbild enthalten sein, falls das Maskenbild sich nicht gleichmäßig in die Umrandungsbox teilen lässt.
- `stretch`
  - : Das Maskenbild wird gestreckt, um die Umrandungsbox genau zu enthalten.
- `round`
  - : Das Maskenbild wird etwas gestreckt und wiederholt, sodass es kein Teilmaskenbild am Ende der Umrandungsbox gibt.
- `space`
  - : Das Maskenbild wird so oft wie möglich wiederholt, ohne gestreckt zu werden. Es gibt kein Teilmaskenbild am Ende der Umrandungsbox.

Die Abstands- oder Kantenoffsets definieren die Distanzen von den oberen, rechten, unteren und linken Kanten des Bildes, in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}} oder {{cssxref("percentage")}} gesetzt werden, wobei Zahlen als Pixellängen interpretiert werden.

Randwiederholungsstile, wenn eingeschlossen, werden in der Reihenfolge von `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert deklariert ist, ist der Wert für beide Achsen der gleiche. Ähnlich wie {{cssxref("background-repeat")}}, werden die `cover` und `contain` Werte nicht unterstützt.

## Formale Definition

- [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value): `none`
- Anwendbar auf: alle Elemente
- [Vererbt](/de/docs/Web/CSS/CSS_cascade/Inheritance): nein
- [Berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value): wie angegeben

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
.example-one {
  -webkit-mask-box-image: url("mask.png");
}
```

### Ein Bild absetzen und füllen

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
