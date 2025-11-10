---
title: reading-order
slug: Web/CSS/Reference/Properties/reading-order
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`reading-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die Reihenfolge zu ändern, in der ein Kind eines {{Glossary("Reading_order#reading_flow_container", "Lesefluss-Containers")}} relativ zu seinen Element-Geschwistern gelesen wird.

## Syntax

```css
/* <integer> values */
reading-order: 1;
reading-order: -1;

/* Global values */
reading-order: inherit;
reading-order: initial;
reading-order: revert;
reading-order: revert-layer;
reading-order: unset;
```

### Wert

- {{cssxref("&lt;integer&gt;")}}
  - : Repräsentiert die ordinale Gruppe, zu der das Element gehört.

## Beschreibung

Wenn ein {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) oder [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Elterncontainer eines Elements eine {{cssxref("reading-flow")}} Eigenschaft auf einen Wert ungleich `normal` gesetzt hat, kann die `reading-order` Eigenschaft verwendet werden, um die {{Glossary("Reading_order#reading_flow", "Lesefluss-")}} Position des Elements relativ zu seinen Geschwistern festzulegen.

Für das Lesen und Navigieren werden Elemente innerhalb eines Block-, Flex- oder Grid-Containers nach aufsteigendem `reading-order`-Wert sortiert. Haben mehrere Geschwister denselben `reading-order`-Wert, werden diese Elemente gemäß dem `reading-flow` des Containers sortiert. Geschwister ohne expliziten `reading-order` Wert erhalten den Standardwert `0`, was alle Kinder eines Lesefluss-Containers standardmäßig in dieselbe ordinale Gruppe einordnet.

Geschwisterelemente werden beginnend mit der niedrigsten nummerierten ordinalen Gruppe bis zur höchsten geordnet. Um ein Element nach seinen Geschwistern auslesen zu lassen, kann man ihm einen `reading-order`-Wert von `1` oder mehr zuweisen. Um ein Element vor seinen Geschwistern auslesen zu lassen, kann man ihm einen `reading-order`-Wert von `-1` oder weniger zuweisen.

Der `reading-order` definiert die Lese- und Tab-Ordnung, hat aber keinen Einfluss auf die visuelle Ordnung.

### Interaktion mit `tabindex`

Wenn eine Gruppe von nicht-fokussierbaren Kind-Elementen eines Lesefluss-Containers mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributen fokussierbar gemacht wird, wird deren Leseordnung wie erwartet durch die Eigenschaften `reading-flow` und `reading-order` modifiziert, ähnlich wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jedoch wird jeder Versuch, die Tab-Reihenfolge von Inhalten eines Lesefluss-Containers mithilfe positiver `tabindex`-Werte zu ändern, ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Sie sollten diese ohnehin generell nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten einen weit besseren Weg, die Tab-Reihenfolge zu ändern, falls erforderlich.

## Formale Definition

{{cssinfo}}

## Beispiele

### Grid-Reihenfolge

Dieses Beispiel demonstriert die Verwendung von `reading-order`, um die Positionen einzelner Gitterelemente innerhalb der Leseordnung eines Grid-Containers zu steuern. Ein Grid-Element hat einen `reading-order`-Wert, der niedriger als der Standardwert `0` ist, daher wird es vor seinen Geschwisterelementen ausgelesen. Ein anderes hat einen höheren `reading-order`-Wert, daher wird es nach den anderen ausgelesen, unabhängig von Quell- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir sechs {{htmlelement("a")}} Elemente, eingeschlossen in einem Wrapper {{htmlelement("div")}}.

```html
<div class="wrapper">
  <a href="#">Item 1</a>
  <a class="bottom" href="#">Item 2</a>
  <a href="#">Item 3</a>
  <a class="top" href="#">Item 4</a>
  <a href="#">Item 5</a>
  <a href="#">Item 6</a>
</div>
```

#### CSS

Auf dem `<div>` setzen wir die [grid-auto-flow](/de/docs/Web/CSS/Reference/Properties/grid-auto-flow) Eigenschaft auf `dense`, daher können Elemente außerhalb der Quell-Reihenfolge angezeigt werden. Die `reading-order` Eigenschaft auf dem `<a>` Element mit der Klasse `top` ist auf `-1` gesetzt, daher wird "Item 4" das erste Element im Lesefluss sein. Die `reading-order` Eigenschaft auf dem `<a>` Element mit der Klasse `bottom` ist auf `21` gesetzt, daher wird "Item 4" das letzte Element in der Leseordnung sein. Die restlichen Elemente werden dazwischen besucht, in Grid-Reihenfolge, da die {{cssxref("reading-flow")}} Eigenschaft des `<div>` Elements auf [grid-rows](/de/docs/Web/CSS/Reference/Properties/grid-row) gesetzt ist.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-auto-flow: dense;
  reading-flow: grid-rows;
}

.top {
  reading-order: -1;
}

.bottom {
  reading-order: 21;
}
```

#### Ergebnis

Das obige Demo rendert wie folgt:

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben. Beachten Sie, wie "Item 4" zuerst getabbt wird und "Item 2" zuletzt, aufgrund ihrer modifizierten `reading-order` Werte. Dazwischen werden die Elemente in Grid-Reihenfolge getabbt.

### Quellreihenfolge überschreiben

In diesem Beispiel haben die ungeradzahligen Elemente einen niedrigen `reading-order`-Wert, so dass sie vor den anderen in einer Gruppe ausgelesen werden, unabhängig von Quell- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir fünf `<a>` Elemente, eingeschlossen in einem Wrapper {{htmlelement("div")}}.

```html
<div class="wrapper">
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
  <a href="#">Item 4</a>
  <a href="#">Item 5</a>
</div>
```

#### CSS

Die `reading-flow` Eigenschaft des `<div>` Elements ist auf `source-order` gesetzt, was es ermöglicht, die `reading-order` zu verwenden, um die Standard-Quellleseordnung zu überschreiben. Die ungeradzahligen `<a>` Elemente haben einen `reading-order`-Wert von `-1`, daher werden sie vor den geradzahligen Elementen ausgelesen.

```css
.wrapper {
  reading-flow: source-order;
}

.wrapper > a {
  display: block;
}

.wrapper a:nth-child(odd) {
  reading-order: -1;
}
```

#### Ergebnis

Das obige Demo rendert wie folgt:

{{EmbedLiveSample('Source order override', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben, und beachten Sie, wie "Item 1", "Item 3" und "Item 5" zuerst getabbt werden, wegen ihrer modifizierten `reading-order`. Danach werden die Elemente in Quellreihenfolge getabbt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
