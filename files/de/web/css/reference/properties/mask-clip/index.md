---
title: mask-clip
slug: Web/CSS/Reference/Properties/mask-clip
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-clip`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt den Bereich, der von einer Maske betroffen ist. Der bemalte Inhalt eines Elements muss auf diesen Bereich beschränkt sein.

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

Die Eigenschaft akzeptiert eine durch Kommata getrennte Liste von Schlüsselwörtern. Jeder Wert ist ein `<coord-box>` oder `no-clip`:

- `content-box`
  - : Der bemalte Inhalt wird auf die Content-Box begrenzt.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Padding-Box begrenzt.
- `border-box`
  - : Der bemalte Inhalt wird auf die Border-Box begrenzt.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektbegrenzungsbox begrenzt.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Strichbegrenzungsbox begrenzt.
- `view-box`
  - : Verwendet die nächstgelegene SVG-Ansicht als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut für das Element, das das SVG-Viewport erstellt, spezifiziert ist, wird die Referenzbox am Ursprung des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox`-Attributs gesetzt.
- `no-clip`
  - : Der bemalte Inhalt wird nicht beschnitten.
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

Für Maskenebenenbilder, die nicht auf ein SVG-{{svgelement("mask")}}-Element verweisen, definiert die `mask-clip`-Eigenschaft den Maskenbemalungsbereich oder den Bereich, der von der Maske betroffen ist. Der bemalte Inhalt des Elements wird auf diesen Bereich beschränkt.

Die `mask-clip`-Eigenschaft hat keine Auswirkungen auf ein Maskenebenenbild, das auf ein `<mask>`-Element verweist. Die Attribute {{svgAttr("x")}}, {{svgAttr("y")}}, {{svgAttr("width")}}, {{svgAttr("height")}} und {{svgAttr("maskUnits")}} des `<mask>`-Elements bestimmen den Maskenbemalungsbereich, wenn die Quelle des {{cssxref("mask-image")}} ein `<mask>` ist.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Komma getrennten Werte in der `mask-image`-Eigenschaft bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-clip`-Wert in der durch Komma getrennten Liste von Werten wird mit den `mask-image`-Werten in der Reihenfolge abgeglichen. Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-clip`-Werte nicht verwendet oder, wenn `mask-clip` weniger Werte hat als `mask-image`, werden die `mask-clip`-Werte wiederholt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abschneiden einer Maske auf die Border-Box

Dieses Beispiel zeigt drei `mask-clip`-Werte.

#### HTML

Wir inkludieren drei Elemente, jedes mit einem anderen `<coord-box>`-Wert als Klassenname.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Das CSS definiert, dass das Element einen Hintergrund, Rahmen, Padding und Margin hat, zusammen mit einem Maskenbild, wobei jedes `<div>` ein anderes `<coord-box>` hat. Wir haben Inhalt mit dem Namen der Klasse generiert und diesen Text 10px nach oben verschoben, um zu verhindern, dass er aus dem Sichtbereich maskiert wird.

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
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
