---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-clip`**-[CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt den Bereich, der von einer Maske betroffen ist. Der bemalte Inhalt eines Elements muss auf diesen Bereich beschränkt sein.

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
  - : Der bemalte Inhalt wird auf die Content-Box beschnitten.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Padding-Box beschnitten.
- `border-box`
  - : Der bemalte Inhalt wird auf die Rahmen-Box beschnitten.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Begrenzungsbox des Objekts beschnitten.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Strich-Begrenzungsbox beschnitten.
- `view-box`
  - : Verwendet den nächstgelegenen SVG-Ansichtsbereich als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut für das Element angegeben ist, das den SVG-Ansichtsbereich erstellt, wird die Referenzbox am Ursprung des vom `viewBox`-Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox`-Attributs festgelegt.
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

Die `mask-clip`-Eigenschaft definiert den Bereich des Elements, der von der angewandten Maske betroffen ist.

Für Maskenschichtbilder, die nicht auf ein SVG-{{svgelement("mask")}}-Element verweisen, definiert die `mask-clip`-Eigenschaft den Maskenmalbereich oder den von der Maske betroffenen Bereich. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die `mask-clip`-Eigenschaft hat keinen Einfluss auf ein Maskenschichtbild, das auf ein `<mask>`-Element verweist. Die Attribute {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} des `<mask>`-Elements bestimmen den Maskenmalbereich, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im `mask-image`-Eigenschaftswert bestimmt (selbst wenn ein Wert `none` ist). Jeder `mask-clip`-Wert in der durch Kommas getrennten Liste der Werte wird in der Reihenfolge den `mask-image`-Werten zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige Werte von `mask-clip` nicht verwendet oder, wenn `mask-clip` weniger Werte hat als `mask-image`, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Maske auf die Rahmen-Box beschneiden

Dieses Beispiel zeigt drei `mask-clip`-Werte.

#### HTML

Wir fügen drei Elemente ein, jedes mit einem anderen `<coord-box>`-Wert als Klassenname.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert das Element mit Hintergrund, Rahmen, Auffüllung und Rand sowie mit einem Maskenbild, wobei jedes `<div>` eine andere `<coord-box>` hat. Wir haben Inhalt mit dem Namen der Klasse generiert, und diesen Text um 10 Pixel nach oben verschoben, um zu verhindern, dass er aus Sicht maskiert wird.

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

- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-clip")}}
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking)-Modul
