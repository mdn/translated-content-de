---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}} {{ Non-standard_header() }}

Die nicht standardisierte, vorangestellte **`-webkit-mask-box-image`** [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt das Maskenbild für den Rahmenkasten eines Elements fest.

> [!NOTE]
> Diese Eigenschaft ist nicht standardisiert und befindet sich nicht auf einem Standards-Pfad. Erwägen Sie stattdessen die Verwendung der Eigenschaft {{CSSXref("mask-border")}}.

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`-webkit-mask-box-image-source`](/de/docs/Web/CSS/mask-border-source)
- [`-webkit-mask-box-image-outset`](/de/docs/Web/CSS/mask-border-outset)
- [`-webkit-mask-box-image-repeat`](/de/docs/Web/CSS/mask-border-repeat)

Die Werte umfassen das `<image>`, das als Maskenrand verwendet werden soll, und optional vier Abstands- und bis zu zwei Wiederholungsstile für den Rand.

## Syntax

```css
/* Standard */
-webkit-mask-box-image: none;

/* Bild */
-webkit-mask-box-image: url(image.png);

/* Bild Randabstand */
-webkit-mask-box-image: url(image.png) 10 20 20 10;
-webkit-mask-box-image: url(image.png) 10px 20px 20px 10px;

/* Bild Wiederholungsstil */
-webkit-mask-box-image: url(image.png) space repeat;

/* Bild Randabstand Wiederholungsstil */
-webkit-mask-box-image: url(image.png) 10px 20px 20px 10px space repeat;

/* Globale Werte */
-webkit-mask-box-image: inherit;
-webkit-mask-box-image: initial;
-webkit-mask-box-image: revert;
-webkit-mask-box-image: revert-layer;
-webkit-mask-box-image: unset;
```

### Werte

- {{cssxref("&lt;image&gt;")}}
  - : Die Position der Bildressource, die als Maskenbild verwendet werden soll, {{cssxref("&lt;gradient&gt;")}}, oder ein anderer {{cssxref("&lt;image&gt;")}}-Wert.
- `none`
  - : Gibt an, dass ein Rahmenkasten kein Maskenbild haben soll.
- {{cssxref("length")}}
  - : Die Größe des Randabstands des Maskenbildes. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
- {{cssxref("percentage")}}
  - : Der Randabstand des Maskenbildes hat einen Prozentwert relativ zur entsprechenden Dimension des Rahmenkastens (Breite oder Höhe).
- {{cssxref("number")}}
  - : Die Größe des Randabstands des Maskenbildes in Pixeln.
- `repeat`
  - : Das Maskenbild wird so oft wiederholt, wie nötig, um den Rahmenkasten zu überspannen. Es kann ein unvollständiges Bild enthalten, wenn das Maskenbild nicht gleichmäßig in den Rahmenkasten passt.
- `stretch`
  - : Das Maskenbild wird gestreckt, um den Rahmenkasten genau einzuschließen.
- `round`
  - : Das Maskenbild wird etwas gestreckt und wiederholt, sodass am Ende des Rahmenkastens kein unvollständiges Maskenbild vorhanden ist.
- `space`
  - : Das Maskenbild wird so oft wie möglich ohne Streckung wiederholt. Am Ende des Rahmenkastens gibt es kein unvollständiges Maskenbild.

Die Abstands- oder Randeinstellungen definieren die Abstände von den oberen, rechten, unteren und linken Bildrändern in dieser Reihenfolge. Die Werte können als {{cssxref("length")}}, {{cssxref("number")}}, oder {{cssxref("percentage")}} festgelegt werden, wobei Zahlen als Pixellängen interpretiert werden.

Randeinstellungswiederholungen, falls vorhanden, werden in der Reihenfolge `<repeat-x> <repeat-y>` interpretiert. Wenn nur ein Wert angegeben ist, gilt dieser für beide Achsen. Im Gegensatz zu {{cssxref("background-repeat")}} werden die Werte `cover` und `contain` nicht unterstützt.

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

### Ein Bild einstellen

```css
.exampleone {
  -webkit-mask-box-image: url("mask.png");
}
```

### Ein Bild absetzen und ausfüllen

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

- CSS {{ cssxref("mask-border") }} Eigenschaft
- CSS {{ cssxref("border-image") }} Eigenschaft
- [Safari CSS-Referenz: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
