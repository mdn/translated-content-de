---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: cb7e7fde9b942001d6acef7d9868fbf622d71636
---

{{CSSRef}}

Die **`mask-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Bereich, der von einer Maske beeinflusst wird. Der bemalte Inhalt eines Elements muss auf diesen Bereich beschränkt sein.

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
  - : Der bemalte Inhalt wird auf den Content-Bereich beschnitten.
- `padding-box`
  - : Der bemalte Inhalt wird auf den Padding-Bereich beschnitten.
- `border-box`
  - : Der bemalte Inhalt wird auf den Randbereich beschnitten.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektbegrenzungsbox beschnitten.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Strichbegrenzungsbox beschnitten.
- `view-box`
  - : Verwendet den nächstgelegenen SVG-View-Port als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox) Attribut für das Element angegeben ist, das den SVG-View-Port erstellt, wird die Referenzbox an der Ursprungskoordinate des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox auf die Breiten- und Höhenwerte des `viewBox`-Attributs gesetzt.
- `no-clip`
  - : Der bemalte Inhalt wird nicht beschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich genauso wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich genauso wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich genauso wie `content-box`.
- `text`
  - : Dieses Schlüsselwort beschneidet das Maskenbild auf den Text des Elements.

## Beschreibung

Die Eigenschaft `mask-clip` definiert den Bereich des Elements, der von der angewendeten Maske betroffen ist.

Für Maskenschichtbilder, die kein SVG {{svgElem("mask")}}-Element referenzieren, definiert die `mask-clip` Eigenschaft den Maskenbemalungsbereich oder den von der Maske betroffenen Bereich. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die `mask-clip` Eigenschaft hat keine Wirkung auf ein Maskenschichtbild, das ein `<mask>`-Element referenziert. Die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} Attribute des `<mask>`-Elements bestimmen den Maskenmalbereich, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenschichten aufgetragen bekommen. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte in der Eigenschaft `mask-image` bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-clip`-Wert in der durch Kommas getrennten Liste von Werten wird der Reihe nach mit den `mask-image`-Werten abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden alle überschüssigen Werte von `mask-clip` nicht verwendet oder, wenn `mask-clip` weniger Werte hat als `mask-image`, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beschneiden einer Maske auf die Randbox

Dieses Beispiel demonstriert drei `mask-clip` Werte.

#### HTML

Wir fügen drei Elemente ein, jedes mit einem unterschiedlichen `<coord-box>` Wert als Klassenname.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert, dass das Element einen Hintergrund, Rand, Padding und Margin hat, zusammen mit einem Maskenbild, wobei jedes `<div>` eine andere `<coord-box>` hat. Wir haben Inhalte mit dem Namen der Klasse generiert und diesen Text um 10px nach oben verschoben, um zu verhindern, dass er verdeckt wird.

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
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
