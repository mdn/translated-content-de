---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
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
  - : Der bemalte Inhalt wird auf die Content-Box zugeschnitten.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Padding-Box zugeschnitten.
- `border-box`
  - : Der bemalte Inhalt wird auf die Border-Box zugeschnitten.
- `fill-box`
  - : Der bemalte Inhalt wird auf das Objektbegrenzungsfeld zugeschnitten.
- `stroke-box`
  - : Der bemalte Inhalt wird auf das Umrissbegrenzungsfeld zugeschnitten.
- `view-box`
  - : Verwendet den nächsten SVG-Viewport als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox) Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird die Referenzbox am Ursprung des durch das `viewBox` Attribut festgelegten Koordinatensystems positioniert, und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox` Attributs gesetzt.
- `no-clip`
  - : Der bemalte Inhalt wird nicht beschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich genauso wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich genauso wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich genauso wie `content-box`.
- `text`
  - : Dieses Schlüsselwort schneidet das Maskenbild auf den Text des Elements zu.

## Beschreibung

Die Eigenschaft `mask-clip` definiert den Bereich des Elements, der von der angewendeten Maske betroffen ist.

Für Maskenschichtbilder, die sich nicht auf ein SVG-{{svgelement("mask")}}-Element beziehen, definiert die Eigenschaft `mask-clip` den Bemalungsbereich der Maske oder den durch die Maske betroffenen Bereich. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die Eigenschaft `mask-clip` hat keine Auswirkungen auf ein Maskenschichtbild, das sich auf ein `<mask>`-Element bezieht. Die Attribute {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}}, und {{svgAttr("maskUnits")}} des `<mask>`-Elements bestimmen den Bemalungsbereich der Maske, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der Eigenschaft `mask-image` bestimmt (auch wenn der Wert `none` ist). Jeder `mask-clip`-Wert in der durch Kommas getrennten Liste von Werten wird den `mask-image`-Werten der Reihe nach zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-clip`-Werte nicht verwendet, oder, wenn `mask-clip` weniger Werte als `mask-image` hat, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Maske auf die Border-Box zuschneiden

Dieses Beispiel demonstriert drei `mask-clip` Werte.

#### HTML

Wir fügen drei Elemente ein, die jeweils einen anderen `<coord-box>`-Wert als Klassennamen haben.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert das Element mit einem Hintergrund, Rahmen, Abstände und einem Maskenbild, wobei jedes `<div>` einen anderen `<coord-box>` hat. Wir haben Inhalte mit dem Namen der Klasse generiert, wobei dieser Text um 10px nach oben verschoben ist, um zu verhindern, dass er aus der Ansicht maskiert wird.

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
- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [Einführung in das CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
