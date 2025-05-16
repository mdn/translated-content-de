---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: 15a768b7d90550b0d90811a52d031674a3b84011
---

{{CSSRef}}

Die **`mask-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Bereich, der von einer Maske betroffen ist. Der bemalte Inhalt eines Elements muss auf diesen Bereich beschränkt werden.

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
  - : Der bemalte Inhalt wird auf die Inhaltsbox abgeschnitten.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Polsterbox abgeschnitten.
- `border-box`
  - : Der bemalte Inhalt wird auf die Rahmenbox abgeschnitten.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektbegrenzungsbox abgeschnitten.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Strichbegrenzungsbox abgeschnitten.
- `view-box`
  - : Verwendet die nächstgelegene SVG-Ansichtsfenster als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox) Attribut für das Element angegeben ist, das das SVG-Ansichtsfenster erstellt, wird die Referenzbox an den Ursprung des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert, und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox`-Attributs eingestellt.
- `no-clip`
  - : Der bemalte Inhalt wird nicht abgeschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich wie `content-box`.
- `text`
  - : Dieses Schlüsselwort schneidet das Maskenbild an den Text des Elements ab.

## Beschreibung

Die `mask-clip`-Eigenschaft definiert den Bereich des Elements, der von der angewendeten Maske beeinflusst wird.

Für Maskenschichtbilder, die nicht auf ein SVG {{svgelement("mask")}}-Element verweisen, definiert die `mask-clip`-Eigenschaft den Maskenbemalungsbereich oder den von der Maske betroffenen Bereich. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die `mask-clip`-Eigenschaft hat keine Auswirkung auf ein Maskenschichtbild, das auf ein `<mask>`-Element verweist. Die Attribute {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} des `<mask>`-Elements bestimmen den Maskenbemalungsbereich, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im `mask-image` Eigenschaftswert bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-clip`-Wert in der durch Kommas getrennten Liste der Werte wird mit den `mask-image`-Werten in der Reihenfolge abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige Werte von `mask-clip` nicht verwendet, bzw., wenn `mask-clip` weniger Werte hat als `mask-image`, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abschneiden einer Maske auf die Rahmenbox

Dieses Beispiel zeigt drei `mask-clip`-Werte.

#### HTML

Wir schließen drei Elemente ein, jedes mit einem anderen `<coord-box>`-Wert als Klassenname.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert das Element mit einem Hintergrund, Rahmen, Polsterung und Rand sowie einem Maskenbild, wobei jedes `<div>` eine andere `<coord-box>` hat. Wir haben Inhalte mit dem Namen der Klasse erzeugt und diesen Text um 10px nach oben verschoben, um zu verhindern, dass er aus dem Blickfeld maskiert wird.

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
- [CSS masking](/de/docs/Web/CSS/CSS_masking) Modul
