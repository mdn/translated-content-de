---
title: "`mask-clip` CSS property"
short-title: mask-clip
slug: Web/CSS/Reference/Properties/mask-clip
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`mask-clip`** bestimmt den Bereich, auf den sich eine Maske auswirkt. Der gezeichnete Inhalt eines Elements wird auf diesen Bereich begrenzt.

## Syntax

```css
/* <coord-box> values */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Keyword value */
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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von Schlüsselwortwerten. Jeder Wert ist entweder ein `<coord-box>` oder `no-clip`:

- `content-box`
  - : Der gezeichnete Inhalt wird auf die Inhaltsbox begrenzt.
- `padding-box`
  - : Der gezeichnete Inhalt wird auf die Padding-Box begrenzt.
- `border-box`
  - : Der gezeichnete Inhalt wird auf die Border-Box begrenzt.
- `fill-box`
  - : Der gezeichnete Inhalt wird auf die Begrenzungsbox des Objekts begrenzt.
- `stroke-box`
  - : Der gezeichnete Inhalt wird auf die Begrenzungsbox der Kontur begrenzt.
- `view-box`
  - : Verwendet den nächstgelegenen SVG-Viewport als Referenzbox. Wenn für das Element, das den SVG-Viewport erstellt, ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut angegeben ist, liegt der Ursprung der Referenzbox am Ursprung des durch das `viewBox`-Attribut festgelegten Koordinatensystems. Die Abmessungen der Referenzbox entsprechen den Werten für Breite und Höhe des `viewBox`-Attributs.
- `no-clip`
  - : Der gezeichnete Inhalt wird nicht begrenzt.
- `border`
  - : Dieses Schlüsselwort verhält sich wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich wie `content-box`.
- `text`
  - : Dieses Schlüsselwort begrenzt das Maskenbild auf den Text des Elements.

## Beschreibung

Die Eigenschaft `mask-clip` definiert den Bereich des Elements, auf den sich die angewendete Maske auswirkt.

Bei Maskenebenenbildern, die nicht auf ein SVG-Element {{svgelement("mask")}} verweisen, definiert die Eigenschaft `mask-clip` den Zeichenbereich der Maske, also den Bereich, auf den sich die Maske auswirkt. Der gezeichnete Inhalt des Elements wird auf diesen Bereich begrenzt.

Die Eigenschaft `mask-clip` hat keine Auswirkung auf ein Maskenebenenbild, das auf ein `<mask>`-Element verweist. Wenn die Quelle von {{cssxref("mask-image")}} ein `<mask>`-Element ist, bestimmen dessen Attribute {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} den Zeichenbereich der Maske.

Auf ein Element können mehrere Maskenebenen angewendet werden. Die Anzahl der Ebenen richtet sich nach der Anzahl der durch Kommas getrennten Werte der Eigenschaft `mask-image` (auch wenn ein Wert `none` ist). Jeder `mask-clip`-Wert in der durch Kommas getrennten Werteliste wird der Reihe nach einem `mask-image`-Wert zugeordnet. Unterscheidet sich die Anzahl der Werte der beiden Eigenschaften, werden überzählige `mask-clip`-Werte nicht verwendet. Hat `mask-clip` weniger Werte als `mask-image`, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Maske auf die Border-Box begrenzen

Dieses Beispiel zeigt drei `mask-clip`-Werte.

#### HTML

Wir verwenden drei Elemente, die jeweils einen anderen `<coord-box>`-Wert als Klassennamen haben.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS legt für die Elemente einen Hintergrund, einen Rahmen, Innen- und Außenabstände sowie ein Maskenbild fest. Jedes `<div>` erhält einen anderen `<coord-box>`-Wert. Wir erzeugen Inhalt mit dem jeweiligen Klassennamen und verschieben diesen Text um 10px nach oben, damit er nicht durch die Maske ausgeblendet wird.

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

- Kurzschreibweise {{cssxref("mask")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-clip")}}
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [Einführung in CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Mehrere Masken deklarieren](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Modul [CSS-Masking](/de/docs/Web/CSS/Guides/Masking)
