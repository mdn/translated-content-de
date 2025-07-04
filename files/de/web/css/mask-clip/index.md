---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Die **`mask-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Bereich, der von einer Maske betroffen ist. Der bemalte Inhalt eines Elements muss auf diesen Bereich beschränkt sein.

## Syntax

```css
/* <coord-box> values */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Keyword values */
mask-clip: no-clip;

/* Multiple values */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* Global values */
mask-clip: inherit;
mask-clip: initial;
mask-clip: revert;
mask-clip: revert-layer;
mask-clip: unset;
```

### Werte

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Schlüsselwortwerten. Jeder Wert ist ein `<coord-box>` oder `no-clip`:

- `content-box`
  - : Der bemalte Inhalt wird auf die Content-Box beschränkt.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Padding-Box beschränkt.
- `border-box`
  - : Der bemalte Inhalt wird auf die Border-Box beschränkt.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektbegrenzungsbox beschränkt.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Strichbegrenzungsbox beschränkt.
- `view-box`
  - : Nutzt den nächsten SVG-Viewport als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox) Attribut für das Element angegeben ist, das den SVG-Viewport erzeugt, wird die Referenzbox am Ursprung des durch das `viewBox` Attribut festgelegten Koordinatensystems positioniert. Die Abmessungen der Referenzbox entsprechen den Breiten- und Höhenwerten des `viewBox` Attributs.
- `no-clip`
  - : Der bemalte Inhalt wird nicht beschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich wie `content-box`.
- `text`
  - : Dieses Schlüsselwort beschneidet das Maskenbild auf den Text des Elements.

## Beschreibung

Die `mask-clip` Eigenschaft definiert den Bereich des Elements, das von der aufgetragenen Maske betroffen ist.

Für Maskenebenenbilder, die kein SVG {{svgelement("mask")}} Element referenzieren, definiert die `mask-clip` Eigenschaft den Maskenmalbereich, oder den Bereich, der von der Maske betroffen ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die `mask-clip` Eigenschaft hat keinen Einfluss auf ein Maskenebenenbild, das ein `<mask>` Element referenziert. Die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} Attribute des `<mask>` Elements bestimmen den Maskenmalbereich, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenebenen aufgetragen haben. Die Anzahl der Ebenen wird durch die Anzahl der durch Kommas getrennten Werte in der `mask-image` Eigenschaft bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-clip` Wert in der durch Kommas getrennten Liste wird in der Reihenfolge mit den `mask-image` Werten abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-clip` Werte nicht verwendet. Wenn `mask-clip` weniger Werte hat als `mask-image`, werden die `mask-clip` Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Maske auf die Border-Box beschneiden

Dieses Beispiel demonstriert drei `mask-clip` Werte.

#### HTML

Wir fügen drei Elemente ein, die jeweils einen anderen `<coord-box>` Wert als Klassennamen haben.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert, dass das Element einen Hintergrund, Rahmen, Polsterung und Rand hat, zusammen mit einem Maskenbild, wobei jedes `<div>` eine andere `<coord-box>` hat. Wir erzeugen Inhalt mit dem Namen der Klasse und verschieben diesen Text um 10px nach oben, um zu verhindern, dass er aus dem Sichtbereich maskiert wird.

```css live-sample___mask-clip-example
div {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 10px;
  border: 20px solid #8ca0ff;
  padding: 20px;
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
  mask-size: 100% 100%;
}
.content-box {
  mask-clip: content-box;
}
.border-box {
  mask-clip: border-box;
}
.padding-box {
  mask-clip: padding-box;
}
div::before {
  content: attr(class);
  position: relative;
  top: -10px;
}
```

```css hidden live-sample___mask-clip-example
body {
  display: flex;
  flex-flow: row wrap;
}
```

#### Ergebnisse

{{EmbedLiveSample("mask-clip-example", "", "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} Kurzschreibweise
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-clip")}}
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
