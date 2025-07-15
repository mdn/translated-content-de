---
title: reading-order
slug: Web/CSS/reading-order
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`reading-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die Reihenfolge zu ändern, in der ein Kind eines {{Glossary("Reading_order#reading_flow_container", "Leseablaufcontainers")}} im Verhältnis zu seinen Elementgeschwistern gelesen wird.

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

Wenn ein Element einen {{Glossary("Block/CSS", "block")}}, [flex](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [grid](/de/docs/Web/CSS/CSS_grid_layout) Elternelement hat, das eine {{cssxref("reading-flow")}} Eigenschaft auf einen Wert ungleich `normal` gesetzt hat, kann die `reading-order` Eigenschaft verwendet werden, um die {{Glossary("Reading_order#reading_flow", "Leseablauf")}} Position des Elements relativ zu der seiner Geschwister festzulegen.

Für das Lesen und die Navigation werden Elemente innerhalb eines Block-, Flex- oder Grid-Containers nach aufsteigendem `reading-order` Wert sortiert. Wenn mehrere Geschwister den gleichen `reading-order` Wert haben, werden diese Elemente gemäß dem `reading-flow` des Containers sortiert. Geschwister, denen kein expliziter `reading-order` Wert zugewiesen ist, erhalten den Standardwert `0`, was standardmäßig alle Kinder eines Leseablaufcontainers in die gleiche Ordnungsgruppe einordnet.

Geschwisterelemente werden beginnend von der niedrigst nummerierten Ordnungsgruppe zur höchsten geordnet. Um also ein Element nach seinen Geschwistern lesen zu lassen, könnte ein `reading-order` Wert von `1` oder mehr darauf gesetzt werden. Um ein Element vor seinen Geschwistern lesen zu lassen, könnte ein `reading-order` Wert von `-1` oder weniger darauf gesetzt werden.

Die `reading-order` Eigenschaft definiert die Lese- und Tabreihenfolge, hat aber keinen Einfluss auf die visuelle Reihenfolge.

### Interaktion mit `tabindex`

Wenn eine Gruppe von Kindelementen eines Leseablaufcontainers, die normalerweise nicht fokussierbar sind, mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attributen fokussierbar gemacht wird, wird ihre Leseordnung wie erwartet durch die `reading-flow` und `reading-order` Eigenschaften modifiziert, genauso wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jedoch wird jeder Versuch, die Tabreihenfolge des Inhalts eines Leseablaufcontainers mit positiven `tabindex` Werten zu ändern, ignoriert — übersteuert durch die Auswirkungen von `reading-flow` und `reading-order`. Diese sollten generell ohnehin nicht verwendet werden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die `reading-flow` und `reading-order` Eigenschaften bieten eine weit bessere Möglichkeit, die Tabreihenfolge bei Bedarf zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Grid-Reihenfolge

Dieses Beispiel demonstriert die Verwendung von `reading-order`, um die Positionen einzelner Grid-Elemente innerhalb der Leseordnung eines Grid-Containers zu steuern. Ein Grid-Element hat einen `reading-order` Wert, der niedriger als der Standardwert `0` ist, daher wird es vor seinen Geschwistern gelesen. Ein anderes hat einen höheren `reading-order` Wert gesetzt, daher wird es nach den anderen gelesen, unabhängig von der Quelldatei oder Anzeigeordnung.

#### HTML

In unserem Markup haben wir sechs {{htmlelement("a")}} Elemente, die in einem Wrapperelement {{htmlelement("div")}} enthalten sind.

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

Auf dem `<div>` setzen wir die [grid-auto-flow](/de/docs/Web/CSS/grid-auto-flow) Eigenschaft auf `dense`, daher können Elemente außerhalb der Quellreihenfolge angezeigt werden. Die `reading-order` Eigenschaft auf dem `<a>`-Element mit der Klasse `top` wird auf `-1` gesetzt, daher wird "Item 4" das erste Element im Leseablauf sein. Die `reading-order` Eigenschaft auf dem `<a>`-Element mit der Klasse `bottom` wird auf `21` gesetzt, daher wird "Item 4" das letzte Element in der Leseordnung sein. Die verbleibenden Elemente werden dazwischen in Grid-Reihenfolge besucht, da die `reading-flow` Eigenschaft des `<div>` Elements auf [grid-rows](/de/docs/Web/CSS/grid-row) gesetzt ist.

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

Die obige Demo rendert wie folgt:

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben. Beachten Sie, wie "Item 4" zuerst und "Item 2" zuletzt tabbed wird, aufgrund ihrer modifizierten `reading-order` Werte. Dazwischen werden die Elemente in Grid-Reihenfolge angetabbt.

### Quellreihenfolge überschreiben

In diesem Beispiel haben die ungeraden Elemente einen niedrigeren `reading-order` Wert gesetzt, daher werden sie vor den anderen in einer Gruppe gelesen, unabhängig von Quell- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir fünf `<a>` Elemente, die in einem Wrapperelement {{htmlelement("div")}} enthalten sind.

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

Die `reading-flow` Eigenschaft des `<div>` Elements ist auf `source-order` gesetzt, was ermöglicht, dass `reading-order` verwendet wird, um die standardmäßige Quellenlesereihenfolge zu überschreiben. Die ungeraden `<a>` Elemente haben einen `reading-order` Wert von `-1`, daher werden sie vor den geraden Elementen gelesen.

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

Die obige Demo rendert wie folgt:

{{EmbedLiveSample('Source order override', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben, und beachten Sie, wie "Item 1", "Item 3" und "Item 5" zuerst tabbed werden, aufgrund ihrer modifizierten `reading-order`. Danach werden die Elemente in Quellenreihenfolge angetabbt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
