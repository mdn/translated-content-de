---
title: "`mask-clip` CSS property"
short-title: mask-clip
slug: Web/CSS/Reference/Properties/mask-clip
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`mask-clip`** bestimmt den Bereich, der von einer Maske betroffen ist. Der gezeichnete Inhalt eines Elements muss auf diesen Bereich beschränkt werden.

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

Die Eigenschaft akzeptiert eine durch Kommata getrennte Liste von Schlüsselwortwerten. Jeder Wert ist ein `<coord-box>` oder `no-clip`:

- `content-box`
  - : Der gezeichnete Inhalt wird auf die Inhaltsbox zugeschnitten.
- `padding-box`
  - : Der gezeichnete Inhalt wird auf die Innenabstandsbox zugeschnitten.
- `border-box`
  - : Der gezeichnete Inhalt wird auf die Rahmenbox zugeschnitten.
- `fill-box`
  - : Der gezeichnete Inhalt wird auf die Objektbegrenzungsbox zugeschnitten.
- `stroke-box`
  - : Der gezeichnete Inhalt wird auf die Strichbegrenzungsbox zugeschnitten.
- `view-box`
  - : Verwendet den nächstgelegenen SVG-Viewport als Referenzbox. Wenn für das Element, das den SVG-Viewport erstellt, ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut angegeben ist, wird die Referenzbox am Ursprung des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert, und die Abmessungen der Referenzbox werden auf die Breiten- und Höhenwerte des `viewBox`-Attributs gesetzt.
- `no-clip`
  - : Der gezeichnete Inhalt wird nicht zugeschnitten.
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

Für Maskenebenbilder, die nicht auf ein SVG-{{svgelement("mask")}}-Element verweisen, definiert die Eigenschaft `mask-clip` den Maskenzeichnungsbereich oder den von der Maske betroffenen Bereich. Der gezeichnete Inhalt des Elements wird auf diesen Bereich beschränkt.

Die Eigenschaft `mask-clip` hat keine Auswirkung auf ein Maskenebenenbild, das auf ein `<mask>`-Element verweist. Die Attribute {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} des `<mask>`-Elements bestimmen den Maskenzeichnungsbereich, wenn die Quelle von {{cssxref("mask-image")}} ein `<mask>` ist.

Auf ein Element können mehrere Maskenebenen angewendet werden. Die Anzahl der Ebenen wird durch die Anzahl der durch Kommata getrennten Werte im Eigenschaftswert von `mask-image` bestimmt, selbst wenn ein Wert `none` ist. Jeder `mask-clip`-Wert in der durch Kommata getrennten Werteliste wird der Reihe nach den `mask-image`-Werten zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überzählige Werte von `mask-clip` nicht verwendet. Falls `mask-clip` weniger Werte als `mask-image` hat, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Maske auf die Rahmenbox zuschneiden

Dieses Beispiel demonstriert drei `mask-clip`-Werte.

#### HTML

Wir fügen drei Elemente ein, die jeweils einen anderen `<coord-box>`-Wert als Klassennamen haben.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert für das Element einen Hintergrund, einen Rahmen, Innenabstand und Außenabstand sowie ein Maskenbild, wobei jedes `<div>` ein anderes `<coord-box>` hat. Wir haben Inhalt mit dem Namen der Klasse erzeugt und diesen Text um 10px nach oben verschoben, damit er nicht aus dem sichtbaren Bereich maskiert wird.

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

- Kurzform {{cssxref("mask")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask-border")}}
- {{cssxref("clip-path")}}
- {{cssxref("background-clip")}}
- [Einführung in das CSS-Zuschneiden](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Eigenschaften `mask`](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Mehrere Masken deklarieren](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Modul [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)
