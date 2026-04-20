---
title: "`mask-clip` CSS property"
short-title: mask-clip
slug: Web/CSS/Reference/Properties/mask-clip
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

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
  - : Der bemalte Inhalt wird auf die Inhaltsbox (content box) zugeschnitten.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Padding-Box zugeschnitten.
- `border-box`
  - : Der bemalte Inhalt wird auf die Rahmenbox (border box) zugeschnitten.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektbegrenzungsbox zugeschnitten.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Umrandungsbox (stroke bounding box) zugeschnitten.
- `view-box`
  - : Verwendet die nächstgelegene SVG-Ansichtsportbox als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut für das Element, das den SVG-Ansichtsport erstellt, angegeben ist, wird die Referenzbox am Ursprung des Koordinatensystems positioniert, das durch das `viewBox`-Attribut etabliert wird, und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox`-Attributs festgelegt.
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

Für Maskenebenenbilder, die keine SVG {{svgelement("mask")}}-Elemente referenzieren, definiert die `mask-clip`-Eigenschaft den Maskenmalbereich oder den Bereich, der von der Maske betroffen ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die `mask-clip`-Eigenschaft hat keinen Einfluss auf ein Maskenebenenbild, das ein `<mask>`-Element referenziert. Die `<mask>`-Elemente {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} Attribute bestimmen den Maskenmalbereich, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenebenen angewendet haben. Die Anzahl der Ebenen wird durch die Anzahl der durch Kommas getrennten Werte im `mask-image`-Eigenschaftswert bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-clip`-Wert in der Liste der kommagetrennten Werte wird mit den `mask-image`-Werten verglichen, in der Reihenfolge. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden alle überzähligen Werte von `mask-clip` nicht verwendet, oder, wenn `mask-clip` weniger Werte hat als `mask-image`, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskierung auf die Rahmenbox zuschneiden

Dieses Beispiel demonstriert drei `mask-clip`-Werte.

#### HTML

Wir fügen drei Elemente ein, jedes mit einem anderen `<coord-box>`-Wert als Klassenname.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert das Element mit einem Hintergrund, Rahmen, Padding und Margin und einem Maskenbild, wobei jedes `<div>` eine andere `<coord-box>` hat. Wir haben Inhalt mit dem Namen der Klasse generiert und diesen Text um 10px nach oben verschoben, um zu verhindern, dass er aus der Sicht maskiert wird.

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

- {{cssxref("mask")}} Kurzschreibweise
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-clip")}}
- [Einführung in das Zuschneiden mit CSS](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [Einführung in CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) Modul
