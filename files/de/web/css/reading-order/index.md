---
title: reading-order
slug: Web/CSS/reading-order
l10n:
  sourceCommit: 295ba1fd21904ca1abc56ff7f120a398d411fe87
---

{{CSSRef}}{{SeeCompatTable}}

Die **`reading-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das Ändern der Reihenfolge, in der ein Kind eines {{Glossary("Reading_order#reading_flow_container", "Reading Flow Containers")}} im Verhältnis zu seinen Element-Geschwistern gelesen wird.

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
  - : Repräsentiert die Ordnungsgruppe, zu der das Element gehört.

## Beschreibung

Wenn der {{Glossary("Block/CSS", "Block")}}, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid](/de/docs/Web/CSS/CSS_grid_layout) Elterncontainer eines Elements eine {{cssxref("reading-flow")}} Eigenschaft hat, die auf einen anderen Wert als `normal` eingestellt ist, kann die `reading-order` Eigenschaft verwendet werden, um die {{Glossary("Reading_order#reading_flow", "Reading Flow")}} Position des Elements relativ zu der seiner Geschwister festzulegen.

Für das Lesen und die Navigation werden Elemente innerhalb eines Block-, Flex- oder Grid-Containers in aufsteigender `reading-order`-Reihenfolge sortiert. Wenn mehrere Geschwister denselben `reading-order`-Wert haben, werden diese Elemente entsprechend dem `reading-flow` des Containers sortiert. Geschwister, die keinen expliziten `reading-order`-Wert haben, erhalten den Standardwert `0`, wodurch alle Kinder eines Reading Flow Containers standardmäßig in der gleichen Ordnungsgruppe platziert werden.

Geschwisterelemente werden beginnend mit der am niedrigsten nummerierten Ordnungsgruppe zur höchsten geordnet. Daher könnten Sie, um ein Element nach seinen Geschwistern auslesen zu lassen, einen `reading-order`-Wert von `1` oder mehr einstellen. Um ein Element vor seinen Geschwistern auslesen zu lassen, könnten Sie einen `reading-order`-Wert von `-1` oder weniger einstellen.

Der `reading-order` definiert die Lese- und Tab-Reihenfolge, hat jedoch keinen Einfluss auf die visuelle Reihenfolge.

### Interaktion mit `tabindex`

Wenn eine Gruppe von nicht normalerweise fokussierbaren Kindern eines Reading Flow Containers mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attributen fokussierbar gemacht wird, wird ihre Lesereihenfolge wie erwartet durch die `reading-flow`- und `reading-order`-Eigenschaften modifiziert, genau wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jedoch wird jeder Versuch, die Tab-Reihenfolge des Inhalts eines Reading Flow Containers mit positiven `tabindex`-Werten zu modifizieren, ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Sie sollten diese ohnehin nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die `reading-flow`- und `reading-order`-Eigenschaften bieten eine wesentlich bessere Möglichkeit, die Tabulatorreihenfolge bei Bedarf zu modifizieren.

## Formale Definition

{{cssinfo}}

## Beispiele

### Grid-Reihenfolge

Dieses Beispiel demonstriert die Verwendung von `reading-order`, um die Positionen einzelner Gitterelemente innerhalb der Lesereihenfolge eines Gitters zu steuern. Ein Gitterelement hat einen `reading-order`-Wert, der niedriger als der Standardwert `0` ist, daher wird es vor seinen Geschwistern gelesen. Ein anderes hat einen höheren `reading-order`-Wert, daher wird es nach den anderen gelesen, unabhängig von Quell- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir sechs {{htmlelement("a")}} Elemente in einem Wrapper {{htmlelement("div")}} enthalten.

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

Auf dem `<div>` setzen wir die [grid-auto-flow](/de/docs/Web/CSS/grid-auto-flow) Eigenschaft auf `dense`, daher können Elemente außerhalb der Quellreihenfolge angezeigt werden. Die `reading-order`-Eigenschaft auf dem `<a>`-Element mit der Klasse `top` ist auf `-1` gesetzt, daher wird "Item 4" das erste Element im Reading Flow sein. Die `reading-order`-Eigenschaft auf dem `<a>`-Element mit der Klasse `bottom` ist auf `21` gesetzt, daher wird "Item 4" das letzte Element in der Lesereihenfolge sein. Die verbleibenden Elemente werden dazwischen besucht, in Gitterzeilenreihenfolge, da die {{cssxref("reading-flow")}}-Eigenschaft des `<div>`-Elements auf [grid-rows](/de/docs/Web/CSS/grid-row) gesetzt ist.

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

Die obenstehende Demo rendert wie folgt:

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben. Beachten Sie, wie "Item 4" zuerst getabt wird und "Item 2" zuletzt wegen ihrer modifizierten `reading-order`-Werte. Dazwischen werden die Elemente in Gitterzeilenreihenfolge getabt.

### Quellreihenfolge überschreiben

In diesem Beispiel haben die ungeraden Elemente einen niedrigeren `reading-order`-Wert gesetzt, daher werden sie vor den anderen einer Gruppe gelesen, unabhängig von Quell- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir fünf `<a>` Elemente in einem Wrapper {{htmlelement("div")}} enthalten.

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

Die `reading-flow`-Eigenschaft des `<div>`-Elements ist auf `source-order` gesetzt, was erlaubt, dass `reading-order` verwendet wird, um die standardmäßige Quelllesereihenfolge zu überschreiben. Die ungeraden `<a>`-Elemente haben einen `reading-order`-Wert von `-1`, daher werden sie vor den geraden Elementen gelesen.

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

Die obenstehende Demo rendert wie folgt:

{{EmbedLiveSample('Source order override', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben, und beachten Sie, wie "Item 1", "Item 3" und "Item 5" zuerst getabt werden wegen ihrer modifizierten `reading-order`-Werte. Danach werden die Elemente in Quellreihenfolge getabt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) via chrome.dev
