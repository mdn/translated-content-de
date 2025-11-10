---
title: mask-origin
slug: Web/CSS/Reference/Properties/mask-origin
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung einer Maske fest. Diese Eigenschaft bestimmt den Maskierungspositionierungsbereich: den Bereich, innerhalb dessen ein Maskenbild positioniert wird. HTML-Elemente können Masken innerhalb ihres Inhaltsrahmenkastens, des Auffüllrahmenkastens oder des Inhaltskastens enthalten, wohingegen SVG-Elemente (die keine zugehörigen CSS-Layout-Kästen besitzen) Masken innerhalb ihres Füll-, Strich- oder Anzeigefeldkastens enthalten können.
Für Elemente, die als mehrere Kästen gerendert werden, wie ein {{htmlelement("span")}}-Element von Text, das sich über mehr als eine Zeile erstreckt, gibt die `mask-origin` Eigenschaft an, auf welche Kästen die {{cssxref("box-decoration-break")}} Eigenschaft angewendet wird, um den Maskierungspositionierungsbereich zu bestimmen.

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

Die `mask-origin` Eigenschaft ist eine kommaseparierte Liste von `<coord-box>` Schlüsselwortwerten, einschließlich:

- `content-box`
  - : Die Position ist relativ zum [Inhaltskasten](/de/docs/Web/CSS/Guides/Shapes/From_box_values#content-box).
- `padding-box`
  - : Die Position ist relativ zum [Auffüllrahmenkasten](/de/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box).
- `border-box`
  - : Die Position ist relativ zum [Rahmenkasten](/de/docs/Web/CSS/Guides/Shapes/From_box_values#border-box).
- `fill-box`
  - : Die Position ist relativ zum Objektrahmenkasten.
- `stroke-box`
  - : Die Position ist relativ zum Strichrahmenkasten.
- `view-box`
  - : Nutzt das nächstgelegene SVG-Anzeigeelement als Referenzkasten. Wenn ein {{svgattr("viewBox")}} Attribut für das Element angegeben ist, das das SVG-Anzeigefeld erstellt, wird der Referenzkasten am Ursprung des Koordinatensystems positioniert, das durch das `viewBox` Attribut festgelegt wird, und die Dimension des Referenzkastens wird auf die Breiten- und Höhenwerte des `viewBox` Attributs gesetzt.

Es gibt drei nicht-standardisierte Werte, die Abkürzungen für Standard-`<coord-box>`-Werte sind: `content` ist ein Alias für `content-box`, `padding` ist ein Alias für `padding-box` und `border` ist ein Alias für `border-box`.

## Beschreibung

Die `mask-origin` Eigenschaft ist der {{cssxref("background-origin")}} Eigenschaft sehr ähnlich, aber sie hat einen anderen Satz von Werten und einen anderen Anfangswert. Der Anfangswert hängt davon ab, ob ein zugehöriger CSS-Layout-Kasten vorhanden ist; wenn ja, ist der Standardwert `border-box`. Dagegen ist der Standard für `background-origin` `padding-box`.

Für SVG-Elemente ohne zugehörigen CSS-Layout-Kasten werden die Werte `content-box`, `padding-box` und `border-box` (der Standardwert) zu `fill-box` berechnet, was bedeutet, dass die Position relativ zum Objektrahmenkasten ist. Für HTML-Elemente wird, wenn ein SVG-bezogener Wert von `fill-box`, `stroke-box` oder `view-box` festgelegt ist, der Wert zu `border-box` berechnet.

Ein Element kann mehrere Maskenschichten haben. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im Wert der {{cssxref("mask-image")}} Eigenschaft bestimmt (auch wenn einer oder mehrere dieser Werte `none` sind). Jeder `mask-origin` Wert in der durch Kommas getrennten Liste von Werten wird mit einem durch Kommas getrennten `mask-image` Wert in der gleichen Reihenfolge abgeglichen.

Wenn die Anzahl der Werte in den beiden Eigenschaften unterschiedlich ist, werden überschüssige `mask-origin`-Werte nicht verwendet, wenn `mask-origin` mehr Werte hat als `mask-image`. Wenn `mask-origin` weniger Werte hat als `mask-image`, werden die `mask-origin`-Werte wiederholt.

Für als einzelner Kasten gerenderte Elemente gibt diese Eigenschaft den Maskierungspositionierungsbereich — oder die Ursprungsposition — des Bildes an, auf das von der `mask-image` Eigenschaft verwiesen wird.

Für als mehrere Kästen gerenderte Elemente, wie Inline-Kästen, die sich über mehr als eine Zeile erstrecken, gibt die `mask-origin` Eigenschaft an, auf welche Kästen die {{cssxref("box-decoration-break")}} Eigenschaft angewendet wird, um den Maskierungspositionierungsbereich zu bestimmen.

Die `mask-origin` kann dazu führen, dass das Maskenschichtbild abgeschnitten wird. Wenn beispielsweise die {{cssxref("mask-clip")}} Eigenschaft auf `padding-box` festgelegt ist, die `mask-origin` auf `border-box`, die {{cssxref("mask-position")}} auf den `oberen linken` Rand und das Element eine Umrandung hat, wird das Maskenschichtbild am oberen linken Rand abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Inhalt, Auffüllung und Rahmen

Dieses Beispiel zeigt die grundlegende Verwendung beim Vergleich von drei Werten der `mask-origin` Eigenschaft.

#### HTML

Wir fügen vier {{htmlelement("section")}} Elemente ein, die jeweils ein {{htmlelement("div")}} Element enthalten.

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

Wir wenden {{cssxref("border")}}, {{cssxref("padding")}} und {{cssxref("margin")}} auf jedes `<div>` an. Diese schaffen die Bezugspunkte für den Ursprung des Maskenbildes. Die `border` Kurzform enthält eine {{cssxref("border-color")}}. Wir fügen auch eine {{cssxref("background-color")}} hinzu. Diese bieten einen grünen Hintergrund und eine blaue Umrandung zum Maskieren. Schließlich erhalten alle unsere `<div>` Elemente ein {{cssxref("mask-image")}}.

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

Wir geben jedem `<div>` einen anderen `mask-origin` Wert.

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

Wir erzeugen auch etwas Text in jedem `<section>`, um den Maskenursprung für jeden `<div>` Container anzuzeigen.

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

Beachten Sie den Unterschied zwischen den drei Werten. In den ersten drei Kästen stammt die Maske jeweils von:

- Der äußeren Kante des Rahmens.
- Der inneren Rahmenkante, die die äußere Kante des Auffüllrahmenkastens ist.
- Der inneren Auffüllkanten, die die äußere Kante des Inhaltskastens ist.

Der vierte Kasten hat kein angegebenes `mask-image`: es ist ein Referenzbild, das es Ihnen ermöglicht, den Umfang der Inhalts- und Auffüllungsbereiche leicht zu visualisieren.

### Mehrere Werte

Dieses Beispiel zeigt, wie man verschiedene `mask-origin` Werte für verschiedene `mask-image`s anwendet, die auf ein einzelnes Element angewendet werden.

#### HTML

Wir fügen ein einzelnes `<div>` ein.

```html
<div></div>
```

#### CSS

Wir wenden drei Maskenbilder anstelle von einem an, jedes mit einer anderen {{cssxref("mask-position")}}. Wir setzen die Maskenbilder auch so, dass sie sich nicht wiederholen.

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

Wir haben drei `mask-image` Werte, aber nur zwei `mask-origin` Werte. Das bedeutet, dass die `mask-origin` Werte wiederholt werden, als ob wir `mask-origin: content-box, padding-box, content-box;` angegeben hätten. Der `border-box` Stern, die einzige Maske, die den Rahmen überlappt, ist der obere rechte Stern.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
