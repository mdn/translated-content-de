---
title: "`mask-origin` CSS property"
short-title: mask-origin
slug: Web/CSS/Reference/Properties/mask-origin
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die **`mask-origin`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Ursprung einer Maske fest. Diese Eigenschaft bestimmt den Maskierung-Positionsbereich: den Bereich, innerhalb dessen ein Maskenbild positioniert wird. HTML-Elemente können Masken innerhalb ihres Inhaltsrahmenkastens, Polsterrahmenkastens oder Inhaltskastens enthalten, während SVG-Elemente (die keine zugehörigen CSS-Layout-Boxen haben) Masken innerhalb ihrer Füllung, ihres Strichs oder ihres Ansichtsrahmens enthalten können.
Für Elemente, die als mehrere Boxen dargestellt werden, wie ein {{htmlelement("span")}} eines Textes, der sich über mehr als eine Zeile erstreckt, gibt die `mask-origin`-Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}} Eigenschaft angewendet wird, um den Maskierungs-Positionsbereich zu bestimmen.

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
  - : Die Position ist relativ zum [Inhaltskasten](/de/docs/Web/CSS/Guides/Shapes/From_box_values#content-box).
- `padding-box`
  - : Die Position ist relativ zum [Polsterkasten](/de/docs/Web/CSS/Guides/Shapes/From_box_values#padding-box).
- `border-box`
  - : Die Position ist relativ zum [Rahmenkasten](/de/docs/Web/CSS/Guides/Shapes/From_box_values#border-box).
- `fill-box`
  - : Die Position ist relativ zum Begrenzungsrahmen des Objekts.
- `stroke-box`
  - : Die Position ist relativ zum Begrenzungsrahmen des Strichs.
- `view-box`
  - : Verwendet den nächsten SVG-Ansichtsfenster als Referenzbox. Wenn ein {{svgattr("viewBox")}} Attribut für das Element spezifiziert ist, das das SVG-Ansichtsfenster erstellt, wird die Referenzbox am Ursprung des durch das `viewBox` Attribut etablierten Koordinatensystems positioniert, und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox` Attributs gesetzt.

Es gibt drei nicht standardisierte Werte als Abkürzungen für die standardmäßigen `<coord-box>` Werte: `content` ist ein Alias für `content-box`, `padding` ist ein Alias für `padding-box`, und `border` ist ein Alias für `border-box`.

## Beschreibung

Die `mask-origin`-Eigenschaft ist der {{cssxref("background-origin")}}-Eigenschaft sehr ähnlich, jedoch hat sie einen anderen Satz von Werten und einen anderen Anfangswert. Der Anfangswert hängt davon ab, ob es eine zugehörige CSS-Layout-Box gibt; wenn ja, ist der Standardwert `border-box`. Im Vergleich dazu ist der Standardwert für `background-origin` `padding-box`.

Für SVG-Elemente ohne zugehörige CSS-Layout-Box berechnen sich die Werte `content-box`, `padding-box` und `border-box` (der Standardwert) zu `fill-box`, was bedeutet, dass die Position relativ zum Begrenzungsrahmen des Objekts ist. Für HTML-Elemente, wenn ein SVG-bezogener Wert wie `fill-box`, `stroke-box` oder `view-box` festgelegt ist, wird der Wert zu `border-box` berechnet.

Ein Element kann mehrere Maskenschichten haben, die angewendet werden. Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte in der {{cssxref("mask-image")}} Eigenschaftswert bestimmt (auch wenn einer oder mehrere dieser Werte `none` sind). Jeder `mask-origin` Wert in der durch Kommas getrennten Liste der Werte wird mit einem durch Kommas getrennten `mask-image` Wert, in der gleichen Reihenfolge, abgeglichen.

Falls sich die Anzahl der Werte in den beiden Eigenschaften unterscheidet, werden überschüssige `mask-origin` Werte nicht verwendet, wenn `mask-origin` mehr Werte als `mask-image` hat. Wenn `mask-origin` weniger Werte als `mask-image` hat, werden die `mask-origin` Werte wiederholt.

Für Elemente, die als einzelnes Kästchen gerendert werden, gibt diese Eigenschaft den Maskierungs-Positionsbereich an — oder die Ursprungsposition — des Bildes, das von der `mask-image` Eigenschaft referenziert wird.

Für Elemente, die als mehrere Kästchen gerendert werden, wie Inline-Boxen, die sich über mehr als eine Zeile erstrecken, gibt die `mask-origin` Eigenschaft an, auf welche Boxen die {{cssxref("box-decoration-break")}} Eigenschaft angewendet wird, um den Maskierungs-Positionsbereich zu bestimmen.

Die `mask-origin` kann dazu führen, dass das Maskenschichtbild abgeschnitten wird. Zum Beispiel, wenn die {{cssxref("mask-clip")}} Eigenschaft auf `padding-box` gesetzt ist, die `mask-origin` auf `border-box`, die {{cssxref("mask-position")}} auf den `top left` Rand, und das Element einen Rahmen hat, wird das Maskenschichtbild am oberen linken Rand abgeschnitten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich von Inhalt, Polsterung und Rahmen

Dieses Beispiel demonstriert die grundlegende Verwendung, während es drei Werte der `mask-origin` Eigenschaft vergleicht.

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

Wir wenden {{cssxref("border")}}, {{cssxref("padding")}}, und {{cssxref("margin")}} auf jedes `<div>` an. Diese schaffen die Referenzpunkte für den Ursprung des Maskenbildes. Die `border` Kurzform enthält eine {{cssxref("border-color")}}. Wir fügen auch eine {{cssxref("background-color")}} hinzu. Diese bieten einen grünen Hintergrund und einen blauen Rahmen zur Maske. Schließlich werden alle unsere `<div>` Elemente mit einem {{cssxref("mask-image")}} ausgestattet.

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

Wir generieren auch etwas Text in jedem `<section>`, um den Maskenursprung für jeden `<div>` Container anzuzeigen.

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

{{EmbedLiveSample("Vergleich von Inhalt, Polsterung und Rahmen", "", "200")}}

Beachten Sie den Unterschied zwischen den drei Werten. In den ersten drei Boxen stammt die Maske jeweils von:

- Der äußeren Kante des Rahmens.
- Der inneren Rahmenkante, die die äußere Kante des Polsterrahmens ist.
- Der inneren Polsterkante, die die äußere Kante des Inhaltskastens ist.

Die vierte Box hat keine `mask-image` spezifiziert: sie ist ein Referenzbild, das es Ihnen ermöglicht, das Ausmaß der Inhalts- und Polsterbereiche leicht zu visualisieren.

### Mehrere Werte

Dieses Beispiel demonstriert die Verwendung unterschiedlicher `mask-origin` Werte für verschiedene `mask-image`s, die auf ein einzelnes Element angewendet werden.

#### HTML

Wir fügen ein einzelnes `<div>` ein.

```html
<div></div>
```

#### CSS

Wir wenden drei Maskenbilder anstelle eines an, jedes mit einer unterschiedlichen {{cssxref("mask-position")}}. Wir setzen auch die Maskenbilder so, dass sie sich nicht wiederholen.

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

Wir haben drei `mask-image` Werte, aber nur zwei `mask-origin` Werte. Dies bedeutet, dass die `mask-origin` Werte wiederholt werden, als ob wir `mask-origin: content-box, padding-box, content-box;` gesetzt hätten. Der `border-box` Stern, die einzige Maske, die den Rahmen überlappt, ist der oben rechts Stern.

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
