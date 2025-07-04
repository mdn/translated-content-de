---
title: mask-origin
slug: Web/CSS/mask-origin
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt den Ursprung einer Maske fest. Diese Eigenschaft bestimmt den Maskenpositionierungsbereich: den Bereich, in dem ein Maskenbild positioniert wird. HTML-Elemente können Masken innerhalb ihrer Inhalt-Border-Box, Padding-Box oder Inhaltsbox haben, während SVG-Elemente (die nicht die zugehörigen CSS-Layout-Boxen haben) Masken innerhalb ihrer Füll-, Strich- oder Ansichtsbox enthalten können. Für Elemente, die als mehrere Boxen dargestellt werden, wie ein {{htmlelement("span")}} von Text, der sich über mehr als eine Zeile erstreckt, gibt die `mask-origin`-Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}}-Eigenschaft wirkt, um den Maskenpositionierungsbereich zu bestimmen.

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

Die `mask-origin`-Eigenschaft ist eine durch Kommas getrennte Liste von `<coord-box>` Schlüsselwortwerten, einschließlich:

- `content-box`
  - : Die Position ist relativ zur [Inhaltsbox](/de/docs/Web/CSS/CSS_shapes/From_box_values#content-box).
- `padding-box`
  - : Die Position ist relativ zur [Padding-Box](/de/docs/Web/CSS/CSS_shapes/From_box_values#padding-box).
- `border-box`
  - : Die Position ist relativ zur [Border-Box](/de/docs/Web/CSS/CSS_shapes/From_box_values#border-box).
- `fill-box`
  - : Die Position ist relativ zur Begrenzungsbox des Objekts.
- `stroke-box`
  - : Die Position ist relativ zur Strichbegrenzungsbox.
- `view-box`
  - : Verwendet den nächstgelegenen SVG-Viewport als Referenzbox. Wenn ein {{svgattr("viewBox")}} Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird die Referenzbox an der Ursprungsposition des Koordinatensystems positioniert, das durch das `viewBox`-Attribut festgelegt ist, und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox`-Attributs gesetzt.

Es gibt drei nicht standardisierte Werte, die Kurzformen für standardmäßige `<coord-box>` Werte sind: `content` ist ein Alias für `content-box`, `padding` ist ein Alias für `padding-box`, und `border` ist ein Alias für `border-box`.

## Beschreibung

Die `mask-origin`-Eigenschaft ist der {{cssxref("background-origin")}}-Eigenschaft sehr ähnlich, hat jedoch eine andere Menge an Werten und einen anderen Anfangswert. Der Anfangswert hängt davon ab, ob es eine zugehörige CSS-Layout-Box gibt; falls ja, ist der Standardwert `border-box`. Der Standard für `background-origin` ist zum Vergleich `padding-box`.

Für SVG-Elemente ohne zugehörige CSS-Layout-Box werden die Werte `content-box`, `padding-box` und `border-box` (der Standardwert) als `fill-box` berechnet, was bedeutet, dass die Position relativ zur Objektbegrenzungsbox ist. Für HTML-Elemente, wenn ein SVG-bezogener Wert von `fill-box`, `stroke-box` oder `view-box` gesetzt ist, wird der Wert als `border-box` berechnet.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte in der {{cssxref("mask-image")}}-Eigenschaft bestimmt (auch wenn einer oder mehrere dieser Werte `none` sind). Jeder `mask-origin`-Wert in der durch Kommas getrennten Liste von Werten wird in derselben Reihenfolge mit einem durch Kommas getrennten `mask-image`-Wert abgeglichen.

Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden bei mehr `mask-origin`-Werten als `mask-image`-Werten die überzähligen `mask-origin`-Werte nicht verwendet. Wenn `mask-origin` weniger Werte als `mask-image` hat, werden die `mask-origin`-Werte wiederholt.

Für Elemente, die als eine einzelne Box gerendert werden, legt diese Eigenschaft den Maskenpositionierungsbereich oder den Ursprungsort des Bildes fest, das durch die `mask-image`-Eigenschaft referenziert wird.

Für Elemente, die als mehrere Boxen gerendert werden, wie z.B. Inline-Boxen, die sich über mehr als eine Zeile erstrecken, gibt die `mask-origin`-Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}}-Eigenschaft wirkt, um den Maskenpositionierungsbereich zu bestimmen.

Die `mask-origin` kann bewirken, dass das Maskenschichtenbild abgeschnitten wird. Zum Beispiel, wenn die {{cssxref("mask-clip")}}-Eigenschaft auf `padding-box` gesetzt ist, `mask-origin` auf `border-box` gesetzt ist, {{cssxref("mask-position")}} auf den Rand `oben links` gesetzt ist und das Element eine Umrandung hat, dann wird das Maskenschichtenbild am oberen linken Rand abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Inhalt, Padding und Border

Dieses Beispiel demonstriert die grundlegende Nutzung und vergleicht drei Werte der `mask-origin`-Eigenschaft.

#### HTML

Wir fügen vier {{htmlelement("section")}}-Elemente hinzu, von denen jedes ein {{htmlelement("div")}}-Element enthält.

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

Wir wenden {{cssxref("border")}}, {{cssxref("padding")}} und {{cssxref("margin")}} auf jedes `<div>` an. Diese bilden die Referenzpunkte für den Ursprung des Maskenbildes. Der `border`-Shorthand umfasst eine {{cssxref("border-color")}}. Wir fügen auch eine {{cssxref("background-color")}} hinzu. Diese bieten einen grünen Hintergrund und eine blaue Border zur Maske. Schließlich werden allen `<div>`-Elementen ein {{cssxref("mask-image")}} zugewiesen.

```css
div {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

Wir erzeugen auch etwas Text in jedem `<section>`, um den Maskenursprung für jeden `<div>`-Container anzugeben.

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

{{EmbedLiveSample("Vergleich von Inhalt, Padding und Border", "", "200")}}

Beachten Sie den Unterschied zwischen den drei Werten. In den ersten drei Boxen, jeweils beginnt die Maske von:

- Der äußeren Kante des Borders.
- Der inneren Border-Kante, die die äußere Kante der Padding-Box ist.
- Der inneren Padding-Kante, die die äußere Kante der Inhaltsbox ist.

Die vierte Box hat kein `mask-image` angegeben: Es ist ein Referenzbild, das hinzugefügt wurde, um Ihnen die Möglichkeit zu geben, das Ausmaß der Inhalts- und Padding-Bereiche leicht zu visualisieren.

### Mehrere Werte

Dieses Beispiel zeigt die Verwendung unterschiedlicher `mask-origin`-Werte für verschiedene `mask-image`s, die auf ein einzelnes Element angewendet werden.

#### HTML

Wir fügen ein einzelnes `<div>` hinzu.

```html
<div></div>
```

#### CSS

Wir wenden anstelle von einem drei Maskenbilder an, jedes mit einer anderen {{cssxref("mask-position")}}. Wir setzen auch die Wiederholung der Maskenbilder auf "nicht wiederholen".

```css
div {
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
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

Wir haben drei `mask-image`-Werte, aber nur zwei `mask-origin`-Werte. Dies bedeutet, dass die `mask-origin`-Werte wiederholt werden, als ob wir `mask-origin: content-box, padding-box, content-box;` gesetzt hätten. Der `border-box` Stern, die einzige Maske, die den Rand überlappt, ist der obere rechte Stern.

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
- {{cssxref("mask")}} shorthand
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
