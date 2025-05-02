---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: 3cadf20927ebd10ad19cbd87b92aaf17358b9edd
---

{{CSSRef}}

Die **`mask-clip`**-Eigenschaft in [CSS](/de/docs/Web/CSS) bestimmt den Bereich, der von einer Maske betroffen ist. Der bemalte Inhalt eines Elements muss auf diesen Bereich beschränkt werden.

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
  - : Der bemalte Inhalt wird auf die Content-Box zugeschnitten.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Padding-Box zugeschnitten.
- `border-box`
  - : Der bemalte Inhalt wird auf die Border-Box zugeschnitten.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektbegrenzungsbox zugeschnitten.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Umrissbegrenzungsbox zugeschnitten.
- `view-box`
  - : Verwendet die nächstliegende SVG-Ansicht als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut für das Element, das die SVG-Ansicht erstellt, angegeben ist, wird die Referenzbox an der Ursprungsposition des durch das `viewBox`-Attribut festgelegten Koordinatensystems platziert, und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox`-Attributs eingestellt.
- `no-clip`
  - : Der bemalte Inhalt wird nicht zugeschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich wie `content-box`.
- `text`
  - : Dieses Schlüsselwort schneidet das Maskenbild auf den Text des Elements zu.

## Beschreibung

Die `mask-clip`-Eigenschaft definiert den Bereich des Elements, der von der angewendeten Maske betroffen ist.

Für Maskenschichtbilder, die kein SVG {{svgElem("mask")}}-Element referenzieren, definiert die `mask-clip`-Eigenschaft den Maskenbemalungsbereich oder den von der Maske betroffenen Bereich. Der bemalte Inhalt des Elements wird auf diesen Bereich eingeschränkt.

Die `mask-clip`-Eigenschaft hat keinen Einfluss auf ein Maskenschichtbild, das ein `<mask>`-Element referenziert. Die Attribute {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} des `<mask>`-Elements bestimmen den Maskenbemalungsbereich, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte in der `mask-image`-Eigenschaft bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-clip`-Wert in der durch Kommas getrennten Liste der Werte wird in der Reihenfolge den `mask-image`-Werten zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist und überschüssige `mask-clip`-Werte nicht verwendet werden, oder wenn `mask-clip` weniger Werte als `mask-image` hat, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zuschneiden einer Maske auf die Border-Box

Dieses Beispiel demonstriert drei `mask-clip`-Werte.

#### HTML

Wir fügen drei Elemente ein, jedes mit einem anderen `<coord-box>`-Wert als Klassenname.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert das Element mit einem Hintergrund, einem Rahmen, einem Innenabstand und einem Außenabstand, zusammen mit einem Maskenbild, wobei jedes `<div>` eine andere `<coord-box>` hat. Wir generierten Inhalt mit dem Namen der Klasse und verschoben diesen Text um 10px nach oben, um zu verhindern, dass er aus dem Sichtbereich maskiert wird.

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

- [Zuschneiden und Maskieren in CSS](https://css-tricks.com/clipping-masking-css/)
