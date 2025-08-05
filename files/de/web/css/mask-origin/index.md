---
title: mask-origin
slug: Web/CSS/mask-origin
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`mask-origin`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Ursprung einer Maske fest. Diese Eigenschaft bestimmt den Maskenpositionierungsbereich: den Bereich, in dem ein Maskenbild positioniert wird. HTML-Elemente können Masken enthalten, die innerhalb ihrer Inhaltsrandbox, Polsterbox oder Inhaltsbox liegen, während SVG-Elemente (die nicht die zugehörigen CSS-Layoutboxen haben) Masken in ihrer Füllung, Umrandung oder Ansichtsbox enthalten können. Für Elemente, die als mehrere Boxen gerendert werden, wie ein {{htmlelement("span")}} von Text, das mehr als eine Zeile umfasst, gibt die `mask-origin`-Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}}-Eigenschaft angewendet wird, um den Maskenpositionierungsbereich zu bestimmen.

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

Die `mask-origin`-Eigenschaft ist eine durch Kommas getrennte Liste von `<coord-box>` Schlüsselwortwerten, darunter:

- `content-box`
  - : Die Position ist relativ zur [Inhaltsbox](/de/docs/Web/CSS/CSS_shapes/From_box_values#content-box).
- `padding-box`
  - : Die Position ist relativ zur [Polsterbox](/de/docs/Web/CSS/CSS_shapes/From_box_values#padding-box).
- `border-box`
  - : Die Position ist relativ zur [Randbox](/de/docs/Web/CSS/CSS_shapes/From_box_values#border-box).
- `fill-box`
  - : Die Position ist relativ zur Begrenzungsbox des Objekts.
- `stroke-box`
  - : Die Position ist relativ zur Begrenzungsbox des Strichs.
- `view-box`
  - : Verwendet den nächstgelegenen SVG-Ansichtsbereich als Bezugsbox. Wenn ein {{svgattr("viewBox")}}-Attribut für das Element, das den SVG-Ansichtsbereich erstellt, angegeben ist, wird die Bezugsbox an der Ursprungsstelle des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert, und die Dimension der Bezugsbox wird auf die Breite und Höhe des `viewBox`-Attributs eingestellt.

Es gibt drei nicht standardisierte Werte, die Abkürzungen für standardisierte `<coord-box>` Werte sind: `content` ist ein Alias für `content-box`, `padding` ist ein Alias für `padding-box` und `border` ist ein Alias für `border-box`.

## Beschreibung

Die `mask-origin`-Eigenschaft ist der {{cssxref("background-origin")}}-Eigenschaft sehr ähnlich, hat jedoch einen anderen Satz von Werten und einen anderen Anfangswert. Der Anfangswert hängt davon ab, ob es eine zugehörige CSS-Layoutbox gibt; falls ja, ist der Standardwert `border-box`. Im Vergleich dazu ist der Standard für `background-origin` `padding-box`.

Für SVG-Elemente ohne zugehörige CSS-Layoutbox werden die Werte `content-box`, `padding-box` und `border-box` (der Standardwert) zu `fill-box` berechnet, was bedeutet, dass die Position relativ zur Begrenzungsbox des Objekts ist. Für HTML-Elemente, wenn ein SVG-bezogener Wert von `fill-box`, `stroke-box` oder `view-box` festgelegt ist, wird der Wert zu `border-box` berechnet.

Ein Element kann über mehrere Maskenschichten verfügen. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im {{cssxref("mask-image")}}-Eigenschaftswert bestimmt (selbst wenn einer oder mehrere dieser Werte `none` sind). Jeder `mask-origin`-Wert in der durch Kommas getrennten Liste von Werten wird mit einem durch Kommas getrennten `mask-image`-Wert in derselben Reihenfolge abgeglichen.

Wenn sich die Anzahl der Werte in den beiden Eigenschaften unterscheidet, werden überschüssige Werte von `mask-origin` nicht verwendet, wenn `mask-origin` mehr Werte hat als `mask-image`. Wenn `mask-origin` weniger Werte hat als `mask-image`, werden die `mask-origin`-Werte wiederholt.

Für Elemente, die als einzelne Box gerendert werden, gibt diese Eigenschaft den Maskenpositionierungsbereich – oder die Ursprungsposition – des durch die `mask-image`-Eigenschaft referenzierten Bildes an.

Für Elemente, die als mehrere Boxen gerendert werden, wie Inline-Boxen, die mehr als eine Zeile umfassen, gibt die `mask-origin`-Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}}-Eigenschaft angewendet wird, um den Maskenpositionierungsbereich zu bestimmen.

Die `mask-origin`-Eigenschaft kann bewirken, dass das Maskenschichtbild abgeschnitten wird. Zum Beispiel, wenn die {{cssxref("mask-clip")}}-Eigenschaft auf `padding-box` gesetzt ist, die `mask-origin`-Eigenschaft auf `border-box` gesetzt ist, die {{cssxref("mask-position")}} auf die `obere linke` Kante gesetzt ist und das Element eine Umrandung hat, wird das Maskenschichtbild an der oberen linken Kante abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Inhalt, Polsterung und Rand

Dieses Beispiel demonstriert die grundlegende Verwendung, während drei Werte der `mask-origin`-Eigenschaft verglichen werden.

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

Wir wenden {{cssxref("border")}}, {{cssxref("padding")}} und {{cssxref("margin")}} auf jedes `<div>` an. Diese erschaffen die Referenzpunkte für den Maskenbildursprung. Die `border`-Kurzform enthält eine {{cssxref("border-color")}}. Wir fügen auch eine {{cssxref("background-color")}} hinzu. Diese bieten einen grünen Hintergrund und eine blaue Umrandung zum Maskieren. Schließlich erhalten alle unsere `<div>`-Elemente ein {{cssxref("mask-image")}}.

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

Wir erzeugen auch etwas Text innerhalb jedes `<section>`, um den Maskenursprung für jeden `<div>`-Container anzugeben.

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

{{EmbedLiveSample("Comparing content padding and border", "", "200")}}

Beachten Sie den Unterschied zwischen den drei Werten. In den ersten drei Boxen, jeweils, stammt die Maske von:

- Der äußeren Kante des Randes.
- Der inneren Randkante, die die äußere Kante der Polsterbox ist.
- Der inneren Polsterkante, die die äußere Kante der Inhaltsbox ist.

Die vierte Box hat kein spezifiziertes `mask-image`: Es ist ein Referenzbild, das eingefügt wurde, um Ihnen das Ausmaß der Inhalts- und Polsterflächen leicht zu veranschaulichen.

### Mehrfache Werte

Dieses Beispiel zeigt die Verwendung unterschiedlicher `mask-origin`-Werte für unterschiedliche `mask-image`s, die auf ein einzelnes Element angewendet werden.

#### HTML

Wir fügen ein einzelnes `<div>` ein.

```html
<div></div>
```

#### CSS

Wir wenden drei Maskenbilder anstelle von einem an, jedes mit einer unterschiedlichen {{cssxref("mask-position")}}. Wir setzen auch, dass die Maskenbilder nicht wiederholt werden.

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

{{EmbedLiveSample("Multiple values", "", "200")}}

Wir haben drei `mask-image`-Werte, aber nur zwei `mask-origin`-Werte. Das bedeutet, dass die `mask-origin`-Werte wiederholt werden, als hätten wir `mask-origin: content-box, padding-box, content-box;` gesetzt. Der `border-box`-Stern, die einzige Maske, die den Rand überlappt, ist der oben rechts positionierte Stern.

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
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
