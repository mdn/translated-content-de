---
title: mask-origin
slug: Web/CSS/mask-origin
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung einer Maske fest. Diese Eigenschaft bestimmt den Maskenpositionierungsbereich: den Bereich, innerhalb dessen ein Maskenbild positioniert wird. HTML-Elemente können Masken enthalten, die sich innerhalb ihres Inhaltsrandbereichs, des Auffüllbereichs oder des Inhaltsbereichs befinden, während SVG-Elemente (die keine zugehörigen CSS-Layout-Boxen haben) Masken innerhalb ihres Füll-, Streich- oder Ansichtsbereichs enthalten können. Bei Elementen, die als mehrere Boxen gerendert werden, wie ein {{htmlelement("span")}} von Text, das sich über mehr als eine Zeile erstreckt, gibt die `mask-origin`-Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}}-Eigenschaft angewendet wird, um den Maskenpositionierungsbereich zu bestimmen.

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

Die `mask-origin`-Eigenschaft ist eine kommagetrennte Liste von `<coord-box>` Schlüsselwortwerten, darunter:

- `content-box`
  - : Die Position ist relativ zur [content box](/de/docs/Web/CSS/CSS_shapes/From_box_values#content-box).
- `padding-box`
  - : Die Position ist relativ zur [padding box](/de/docs/Web/CSS/CSS_shapes/From_box_values#padding-box).
- `border-box`
  - : Die Position ist relativ zur [border box](/de/docs/Web/CSS/CSS_shapes/From_box_values#border-box).
- `fill-box`
  - : Die Position ist relativ zur Objektumrandungsbox.
- `stroke-box`
  - : Die Position ist relativ zur Strichumrandungsbox.
- `view-box`
  - : Verwendet den nächsten SVG-Viewport als Referenzbox. Wenn ein {{svgattr("viewBox")}}-Attribut für das Element angegeben ist, das den SVG-Viewport erstellt, wird die Referenzbox am Ursprung des Koordinatensystems positioniert, das durch das `viewBox`-Attribut festgelegt wird, und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox`-Attributs gesetzt.

Es gibt drei nicht-standardmäßige Werte, die Abkürzungen für standardmäßige `<coord-box>` Werte sind: `content` ist ein Alias für `content-box`, `padding` ist ein Alias für `padding-box` und `border` ist ein Alias für `border-box`.

## Beschreibung

Die `mask-origin`-Eigenschaft ist der {{cssxref("background-origin")}}-Eigenschaft sehr ähnlich, aber sie hat eine unterschiedliche Menge an Werten und einen anderen Standardwert. Der Standardwert hängt davon ab, ob es eine zugehörige CSS-Layout-Box gibt; falls ja, ist der Standardwert `border-box`. Im Vergleich dazu ist der Standard für `background-origin` `padding-box`.

Für SVG-Elemente ohne zugehörige CSS-Layout-Box, rechnen sich die Werte `content-box`, `padding-box` und `border-box` (der Standardwert) zu `fill-box`, was bedeutet, dass die Position relativ zur Objektumrandungsbox ist. Für HTML-Elemente, wenn ein SVG-bezogener Wert von `fill-box`, `stroke-box` oder `view-box` festgelegt wird, wird der Wert zu `border-box` berechnet.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte im Wert der {{cssxref("mask-image")}}-Eigenschaft bestimmt (selbst wenn einer oder mehrere dieser Werte `none` sind). Jeder `mask-origin`-Wert in der kommagetrennten Liste von Werten wird in der gleichen Reihenfolge mit einem kommagetrennten `mask-image`-Wert abgeglichen.

Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige Werte von `mask-origin` in Fällen, in denen `mask-origin` mehr Werte als `mask-image` hat, nicht verwendet. Wenn `mask-origin` weniger Werte als `mask-image` hat, werden die `mask-origin`-Werte wiederholt.

Für Elemente, die als eine einzelne Box gerendert werden, gibt diese Eigenschaft den Maskenpositionierungsbereich - oder den Ursprungsbereich - des Bildes an, auf das durch die `mask-image`-Eigenschaft verwiesen wird.

Für Elemente, die als mehrere Boxen gerendert werden, wie Inline-Boxen, die sich über mehr als eine Zeile erstrecken, gibt die `mask-origin`-Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}}-Eigenschaft angewendet wird, um den Maskenpositionierungsbereich zu bestimmen.

Die `mask-origin` kann dazu führen, dass das Maskenschichtbild beschnitten wird. Wenn zum Beispiel die {{cssxref("mask-clip")}}-Eigenschaft auf `padding-box` gesetzt ist, die `mask-origin` auf `border-box` gesetzt ist, die {{cssxref("mask-position")}} auf den `top left` Rand gesetzt ist und das Element einen Rahmen hat, dann wird das Maskenschichtbild am oberen linken Rand beschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Inhalt, Polsterung und Rand

Dieses Beispiel demonstriert die grundlegende Verwendung und vergleicht drei Werte der `mask-origin`-Eigenschaft.

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

Wir wenden {{cssxref("border")}}, {{cssxref("padding")}} und {{cssxref("margin")}} auf jedes `<div>` an. Diese schaffen die Bezugspunkte für den Maskenbildursprung. Die `border`-Kurzform enthält eine {{cssxref("border-color")}}. Wir fügen auch eine {{cssxref("background-color")}} ein. Diese sorgen für einen grünen Hintergrund und einen blauen Rand zum Maskieren. Schließlich erhält jedes unserer `<div>`-Elemente ein {{cssxref("mask-image")}}.

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

Wir erzeugen auch etwas Text innerhalb jedes `<section>`, um den Maskenursprung für jeden `<div>`-Container anzuzeigen.

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

{{EmbedLiveSample("Vergleich Inhalt, Polsterung und Rand", "", "200")}}

Beachten Sie den Unterschied zwischen den drei Werten. In den ersten drei Boxen stammt die Maske jeweils von:

- Der Außenkante des Rahmens.
- Der Innenkantenkante des Rahmens, die die Außenkante der Polsterungsbox ist.
- Der Innenkante der Polsterung, die die Außenkante der Inhaltsbox ist.

Die vierte Box hat kein `mask-image` angegeben: es ist ein Referenzbild, das eingefügt wurde, um Ihnen das Ausmaß der Inhalts- und Polsterungsbereiche leicht zu visualisieren.

### Mehrere Werte

Dieses Beispiel demonstriert die Verwendung verschiedener `mask-origin`-Werte für verschiedene `mask-image`, die auf ein einzelnes Element angewendet werden.

#### HTML

Wir fügen ein einzelnes `<div>` ein.

```html
<div></div>
```

#### CSS

Wir wenden drei statt eines Maskenbildes an, jeweils mit einer anderen {{cssxref("mask-position")}}. Wir setzen auch fest, dass die Maskenbilder nicht wiederholt werden.

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

Wir haben drei `mask-image`-Werte, aber nur zwei `mask-origin`-Werte. Das bedeutet, dass die `mask-origin`-Werte wiederholt werden, als hätten wir `mask-origin: content-box, padding-box, content-box;` gesetzt. Der `border-box`-Stern, der einzige Maskenstern, der den Rand überschreitet, ist der obere rechte Stern.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
