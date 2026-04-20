---
title: "`mask-origin` CSS property"
short-title: mask-origin
slug: Web/CSS/Reference/Properties/mask-origin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-origin`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Ursprung einer Maske fest. Diese Eigenschaft bestimmt den Maskenpositionierungsbereich: der Bereich, innerhalb dessen ein Maskenbild positioniert wird. HTML-Elemente können Masken enthalten, die sich innerhalb ihres Inhaltsrahmens, des Padding-Rahmens oder des Inhaltsrahmens befinden, während SVG-Elemente (die keine zugehörigen CSS-Layoutboxen haben) Masken innerhalb ihres Füll-, Strich- oder Ansichtsrahmens enthalten können. Für Elemente, die als mehrere Boxen gerendert werden, wie ein {{htmlelement("span")}} von Text, der sich über mehr als eine Zeile erstreckt, gibt die Eigenschaft `mask-origin` an, auf welche Boxen die {{cssxref("box-decoration-break")}}-Eigenschaft wirkt, um den Maskenpositionierungsbereich zu bestimmen.

## Syntax

```css
/* Keyword values */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Multiple values */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Global values */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

### Werte

Die Eigenschaft `mask-origin` ist eine kommagetrennte Liste von `<coord-box>` Schlüsselwortwerten, einschließlich:

- `content-box`
  - : Die Position ist relativ zum [Inhaltsrahmen](/de/docs/Web/CSS/Guides/Shapes/From_box_values#content-box).
- `padding-box`
  - : Die Position ist relativ zum [Padding-Rahmen](/de/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box).
- `border-box`
  - : Die Position ist relativ zum [Rahmenrahmen](/de/docs/Web/CSS/Guides/Shapes/From_box_values#border-box).
- `fill-box`
  - : Die Position ist relativ zur Begrenzungsbox des Objekts.
- `stroke-box`
  - : Die Position ist relativ zur Strichbegrenzungsbox.
- `view-box`
  - : Verwendet die nächstgelegene SVG-Ansichtsbox als Referenzrahmen. Wenn ein {{svgattr("viewBox")}}-Attribut für das Element, das den SVG-Ansichtsrahmen erstellt, angegeben ist, wird der Referenzrahmen an der Ursprungsposition des vom `viewBox`-Attribut festgelegten Koordinatensystems positioniert und die Dimension des Referenzrahmens auf die Breite und Höhe des `viewBox`-Attributs eingestellt.

Es gibt drei nicht standardisierte Werte, die Abkürzungen für standardmäßige `<coord-box>`-Werte sind: `content` ist ein Alias für `content-box`, `padding` ist ein Alias für `padding-box` und `border` ist ein Alias für `border-box`.

## Beschreibung

Die `mask-origin`-Eigenschaft ist der {{cssxref("background-origin")}}-Eigenschaft sehr ähnlich, hat jedoch einen anderen Satz von Werten und einen anderen Anfangswert. Der Anfangswert hängt davon ab, ob es eine zugehörige CSS-Layoutbox gibt; wenn ja, ist der Standardwert `border-box`. Im Vergleich dazu ist der Standardwert für `background-origin` `padding-box`.

Für SVG-Elemente ohne zugehörige CSS-Layoutbox werden die Werte `content-box`, `padding-box` und `border-box` (der Standardwert) zu `fill-box` berechnet, was bedeutet, dass die Position relativ zur Begrenzungsbox des Objekts ist. Für HTML-Elemente, wenn ein SVG-bezogener Wert von `fill-box`, `stroke-box` oder `view-box` festgelegt ist, wird der Wert zu `border-box` berechnet.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte in der {{cssxref("mask-image")}}-Eigenschaft bestimmt (auch wenn einer oder mehrere dieser Werte `none` sind). Jeder `mask-origin`-Wert in der kommagetrennten Liste von Werten wird mit einem kommagetrennten `mask-image`-Wert in der gleichen Reihenfolge abgeglichen.

Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-origin`-Werte nicht verwendet, wenn `mask-origin` mehr Werte als `mask-image` hat. Wenn `mask-origin` weniger Werte als `mask-image` hat, werden die `mask-origin`-Werte wiederholt.

Für Elemente, die als eine einzelne Box gerendert werden, gibt diese Eigenschaft den Maskenpositionierungsbereich an — oder die Ursprungsposition — des Bildes, das von der `mask-image`-Eigenschaft referenziert wird.

Für Elemente, die als mehrere Boxen gerendert werden, wie Inline-Boxen, die sich über mehr als eine Zeile erstrecken, gibt die `mask-origin`-Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}}-Eigenschaft wirkt, um den Maskenpositionierungsbereich zu bestimmen.

Die `mask-origin`-Eigenschaft kann dazu führen, dass das Maskenschichtbild abgeschnitten wird. Wenn beispielsweise die {{cssxref("mask-clip")}}-Eigenschaft auf `padding-box` gesetzt ist, `mask-origin` auf `border-box`, die {{cssxref("mask-position")}} auf die `top left`-Kante gesetzt ist und das Element einen Rahmen hat, wird das Maskenschichtbild an der oberen linken Kante abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Inhalt, Padding und Rahmen

Dieses Beispiel zeigt die grundlegende Verwendung und vergleicht drei Werte der `mask-origin`-Eigenschaft.

#### HTML

Wir fügen vier {{htmlelement("section")}}-Elemente ein, die jeweils ein {{htmlelement("div")}}-Element enthalten.

```html
<section class="content">
  <div></div>
</section>
<section class="padding">
  <div></div>
</section>
<section class="border">
  <div></div>
</section>
<section class="comparison">
  <div></div>
</section>
```

#### CSS

Wir wenden {{cssxref("border")}}, {{cssxref("padding")}} und {{cssxref("margin")}} auf jedes `<div>` an. Diese erstellen die Referenzpunkte für den Ursprung des Maskenbilds. Die `border`-Kurzschreibweise enthält eine {{cssxref("border-color")}}. Wir fügen auch eine {{cssxref("background-color")}} hinzu. Diese bieten einen grünen Hintergrund und einen blauen Rahmen zur Maskierung. Schließlich werden alle unsere `<div>`-Elemente mit einem {{cssxref("mask-image")}} versehen.

```css
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
section {
  border: 1px solid black;
}
```

Wir geben jedem `<div>` einen anderen `mask-origin`-Wert.

```css
.content div {
  mask-origin: content-box;
}

.padding div {
  mask-origin: padding-box;
}

.border div {
  mask-origin: border-box;
}

.comparison div {
  mask-image: none;
}
```

Wir erzeugen auch etwas Text in jedem `<section>`, um den Maskenursprung für jeden `<div>`-Container anzuzeigen.

```css
section::before {
  content: attr(class);
  display: block;
  text-align: center;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
```

#### Ergebnis

{{EmbedLiveSample("Vergleich von Inhalt, Padding und Rahmen", "", "200")}}

Beachten Sie den Unterschied zwischen den drei Werten. In den ersten drei Boxen kommt die Maske jeweils von:

- Der äußeren Kante des Rahmens.
- Der inneren Rahmenecke, was die äußere Kante des Padding-Rahmens ist.
- Der inneren Padding-Kante, was die äußere Kante des Inhaltsrahmens ist.

Die vierte Box hat kein `mask-image` angegeben: Es ist ein Referenzbild, das eingefügt wurde, um Ihnen zu ermöglichen, das Ausmaß der Inhalts- und Padding-Bereiche leicht zu visualisieren.

### Mehrere Werte

Dieses Beispiel zeigt die Verwendung unterschiedlicher `mask-origin`-Werte für verschiedene `mask-image`s, die auf ein einzelnes Element angewendet werden.

#### HTML

Wir fügen ein einzelnes `<div>` hinzu.

```html
<div></div>
```

#### CSS

Wir wenden drei Maskenbilder anstelle eines an, jedes mit einer anderen {{cssxref("mask-position")}}. Wir setzen auch die Maskenbilder so, dass sie sich nicht wiederholen.

```css
div {
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-position:
    top left,
    top right,
    bottom center;
  mask-repeat: no-repeat;
  mask-origin: content-box, border-box;
}
```

#### Ergebnisse

{{EmbedLiveSample("Mehrere Werte", "", "200")}}

Wir haben drei `mask-image`-Werte, aber nur zwei `mask-origin`-Werte. Dies bedeutet, dass die `mask-origin`-Werte wiederholt werden, als hätten wir `mask-origin: content-box, padding-box, content-box;` gesetzt. Der `border-box`-Stern, die einzige Maske, die sich über den Rahmen hinweg erstreckt, ist der obere rechte Stern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-origin")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} Kurzform
- [Einführung in CSS-Masking](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) Modul
