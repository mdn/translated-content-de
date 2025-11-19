---
title: mask-clip
slug: Web/CSS/Reference/Properties/mask-clip
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

Die **`mask-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Bereich, der von einer Maske betroffen ist. Der gemalte Inhalt eines Elements muss auf diesen Bereich beschränkt werden.

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

Die Eigenschaft akzeptiert eine kommaseparierte Liste von Schlüsselwortwerten. Jeder Wert ist entweder ein `<coord-box>` oder `no-clip`:

- `content-box`
  - : Der gemalte Inhalt wird auf die content box beschnitten.
- `padding-box`
  - : Der gemalte Inhalt wird auf die padding box beschnitten.
- `border-box`
  - : Der gemalte Inhalt wird auf die border box beschnitten.
- `fill-box`
  - : Der gemalte Inhalt wird auf die Bounding-Box des Objekts beschnitten.
- `stroke-box`
  - : Der gemalte Inhalt wird auf die Stroke-Bounding-Box beschnitten.
- `view-box`
  - : Verwendet den nächsten SVG-Viewport als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox) Attribut für das Element, das den SVG-Viewport erzeugt, angegeben wird, wird die Referenzbox an den Ursprung des durch das `viewBox` Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breite und Höhe der `viewBox` Attributwerte gesetzt.
- `no-clip`
  - : Der gemalte Inhalt wird nicht beschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich wie `content-box`.
- `text`
  - : Dieses Schlüsselwort schneidet das Maskenbild auf den Text des Elements zu.

## Beschreibung

Die `mask-clip` Eigenschaft definiert den Bereich des Elements, der von der angewendeten Maske betroffen ist.

Für Maskenebenenbilder, die sich nicht auf ein SVG {{svgelement("mask")}} Element beziehen, definiert die `mask-clip` Eigenschaft den Bereich, der gemalt wird, oder den Bereich, der von der Maske betroffen ist. Der gemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die `mask-clip` Eigenschaft hat keine Auswirkungen auf ein Maskenebenenbild, das auf ein `<mask>` Element verweist. Die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} Attribute des `<mask>` Elements bestimmen den Malbereich der Maske, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenebenen haben. Die Anzahl der Ebenen wird durch die Anzahl der kommagetrennten Werte in der `mask-image` Eigenschaftenwert (selbst wenn ein Wert `none` ist) bestimmt. Jeder `mask-clip` Wert in der kommagetrennten Liste von Werten wird der Reihe nach den `mask-image` Werten zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige Werte von `mask-clip` nicht verwendet, oder, wenn `mask-clip` weniger Werte als `mask-image` hat, werden die `mask-clip` Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Maske auf die Border-Box zuschneiden

Dieses Beispiel demonstriert drei `mask-clip` Werte.

#### HTML

Wir fügen drei Elemente ein, jedes mit einem anderen `<coord-box>` Wert als Klassennamen.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert das Element mit einem Hintergrund, Rahmen, Padding und Margin, zusammen mit einem Maskenbild, wobei jedes `<div>` einen anderen `<coord-box>` hat. Wir haben Inhalt mit dem Namen der Klasse generiert, wobei dieser Text um 10px nach oben verschoben wird, um zu verhindern, dass er aus dem Sichtfeld maskiert wird.

```css live-sample___mask-clip-example
div {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 10px;
  border: 20px solid #8ca0ff;
  padding: 20px;
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mdn.svg");
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
- [Einführung in CSS Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [Einführung in CSS Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS Masking](/de/docs/Web/CSS/Guides/Masking) Modul
