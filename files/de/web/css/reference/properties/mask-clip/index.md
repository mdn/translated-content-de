---
title: mask-clip
slug: Web/CSS/Reference/Properties/mask-clip
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

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

Die Eigenschaft akzeptiert eine durch Kommata getrennte Liste von Schlüsselwortwerten. Jeder Wert ist ein `<coord-box>` oder `no-clip`:

- `content-box`
  - : Der bemalte Inhalt wird auf den Inhaltsbereich begrenzt.
- `padding-box`
  - : Der bemalte Inhalt wird auf den Innenabstand begrenzt.
- `border-box`
  - : Der bemalte Inhalt wird auf den Randbereich begrenzt.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektbegrenzungsbox begrenzt.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Strichbegrenzungsbox begrenzt.
- `view-box`
  - : Verwendet den nächsten SVG-Viewport als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird die Referenzbox an den Ursprung des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breite- und Höhenwerte des `viewBox`-Attributs gesetzt.
- `no-clip`
  - : Der bemalte Inhalt wird nicht abgeschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich genauso wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich genauso wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich genauso wie `content-box`.
- `text`
  - : Dieses Schlüsselwort schneidet das Maskenbild auf den Text des Elements zu.

## Beschreibung

Die Eigenschaft `mask-clip` definiert den Bereich des Elements, der von der angewandten Maske beeinflusst wird.

Für Maskenschicht-Bilder, die sich nicht auf ein SVG {{svgelement("mask")}}-Element beziehen, definiert die Eigenschaft `mask-clip` den Malbereich der Maske oder den Bereich, der von der Maske betroffen ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die Eigenschaft `mask-clip` hat keinen Einfluss auf ein Maskenschicht-Bild, das sich auf ein `<mask>`-Element bezieht. Die {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} Attribute des `<mask>`-Elements bestimmen den Malbereich der Maske, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Komma getrennten Werte im `mask-image` Eigenschaftswert bestimmt (auch wenn der Wert `none` ist). Jeder `mask-clip` Wert in der durch Komma getrennten Liste der Werte wird den `mask-image` Werten in Reihenfolge zugeordnet. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-clip` Werte nicht verwendet, oder, wenn `mask-clip` weniger Werte als `mask-image` hat, werden die `mask-clip` Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zuschneiden einer Maske auf die Randbox

Dieses Beispiel demonstriert drei `mask-clip` Werte.

#### HTML

Wir fügen drei Elemente ein, jedes mit einem anderen `<coord-box>` Wert als Klassennamen.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert das Element, sodass es einen Hintergrund, eine Grenze, Innenabstand und einen Rand hat, zusammen mit einem Maskenbild, wobei jedes `<div>` eine andere `<coord-box>` hat. Wir haben Inhalt mit dem Namen der Klasse generiert und diesen Text 10px nach oben verschoben, um zu verhindern, dass er aus dem Sichtbereich der Maske ausgeblendet wird.

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
- [Einführung in CSS Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [Einführung in CSS Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) Modul
