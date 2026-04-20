---
title: "`reading-order` CSS property"
short-title: reading-order
slug: Web/CSS/Reference/Properties/reading-order
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`reading-order`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, die Reihenfolge zu ändern, in der ein Kind eines {{Glossary("Reading_order#reading_flow_container", "Lesefluss-Containers")}} im Vergleich zu seinen Element-Geschwistern gelesen wird.

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
  - : Repräsentiert die Ordinalgruppe, zu der das Element gehört.

## Beschreibung

Wenn ein {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Elternelement-Container eine {{cssxref("reading-flow")}}-Eigenschaft hat, die auf einen anderen Wert als `normal` gesetzt ist, kann die `reading-order`-Eigenschaft verwendet werden, um die {{Glossary("Reading_order#reading_flow", "Lesefluss")}}-Position des Elements im Vergleich zu seinen Geschwistern festzulegen.

Für das Lesen und Navigieren werden die Elemente innerhalb eines Block-, Flex- oder Grid-Containers nach aufsteigendem `reading-order`-Wert sortiert. Wenn mehrere Geschwister denselben `reading-order`-Wert haben, werden diese Elemente gemäß dem `reading-flow` des Containers sortiert. Geschwister, denen kein expliziter `reading-order`-Wert zugewiesen ist, erhalten den Standardwert `0`, wodurch alle Kinder eines Lesefluss-Containers standardmäßig in derselben Ordinalgruppe landen.

Geschwisterelemente werden von der niedrigsten zur höchsten nummerierten Ordinalgruppe geordnet. Um zu erreichen, dass ein Element nach seinen Geschwistern gelesen wird, könnten Sie einen `reading-order`-Wert von `1` oder mehr darauf setzen. Um zu bewirken, dass ein Element vor seinen Geschwistern gelesen wird, könnten Sie einen `reading-order`-Wert von `-1` oder weniger darauf setzen.

Der `reading-order` definiert die Lese- und Tab-Reihenfolge, hat jedoch keinen Einfluss auf die visuelle Reihenfolge.

### Interaktion mit `tabindex`

Wenn eine Gruppe von nicht-fokussierbaren Kindern eines Lesefluss-Containers mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attributen fokussierbar gemacht wird, wird ihre Lesereihenfolge wie erwartet durch die Eigenschaften `reading-flow` und `reading-order` geändert, auf die gleiche Weise wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jedoch wird jeder Versuch, die Tab-Reihenfolge des Inhalts eines Lesefluss-Containers durch positive `tabindex`-Werte zu ändern, ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Sie sollten diese ohnehin nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten eine viel bessere Möglichkeit, die Tab-Reihenfolge bei Bedarf zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Grid-Reihenfolge

Dieses Beispiel demonstriert die Verwendung von `reading-order`, um die Positionen einzelner Gitterelemente innerhalb der Lesereihenfolge eines Gittercontainers zu kontrollieren. Ein Gitterelement hat einen `reading-order`-Wert, der niedriger als der Standardwert `0` ist, und wird daher vor seinen Geschwisterelementen gelesen. Ein anderes hat einen höheren `reading-order`-Wert, so dass es nach den anderen, unabhängig von Quell- oder Anzeigereihenfolge, gelesen wird.

#### HTML

In unserem Markup haben wir sechs {{htmlelement("a")}}-Elemente, die sich innerhalb eines Wrapper-{{htmlelement("div")}} befinden.

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

Auf dem `<div>` setzen wir die [grid-auto-flow](/de/docs/Web/CSS/Reference/Properties/grid-auto-flow)-Eigenschaft auf `dense`, daher könnten Elemente außerhalb der Quellreihenfolge angezeigt werden. Die `reading-order`-Eigenschaft auf dem `<a>`-Element mit einer Klasse von `top` ist auf `-1` gesetzt, daher wird "Item 4" das erste Element im Lesefluss sein. Die `reading-order`-Eigenschaft auf dem `<a>`-Element mit einer Klasse von `bottom` ist auf `21` gesetzt, daher wird "Item 4" das letzte Element in der Lesereihenfolge sein. Die verbleibenden Elemente werden dazwischen in der Grid-Reihenfolge besucht, da die {{cssxref("reading-flow")}}-Eigenschaft des `<div>`-Elements auf [grid-rows](/de/docs/Web/CSS/Reference/Properties/grid-row) gesetzt ist.

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

Das obige Demo wird wie folgt dargestellt:

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben. Beachten Sie, wie "Item 4" zuerst und "Item 2" zuletzt getabbt wird, aufgrund ihrer geänderten `reading-order`-Werte. Dazwischen werden die Elemente in der Grid-Reihenfolge getabbt.

### Quellreihenfolgen-Überschreibung

In diesem Beispiel haben die ungeraden Elemente einen niedrigeren `reading-order`-Wert, daher werden sie vor den anderen in einer Gruppe gelesen, unabhängig von Quell- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir fünf `<a>`-Elemente, die sich innerhalb eines Wrapper-{{htmlelement("div")}} befinden.

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

Die `reading-flow`-Eigenschaft des `<div>`-Elements ist auf `source-order` gesetzt, was es ermöglicht, die Standard-Quell-Lesereihenfolge durch `reading-order` zu überschreiben. Die ungeraden `<a>`-Elemente haben einen `reading-order`-Wert von `-1`, daher werden sie vor den geraden Elementen gelesen.

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

Das obige Demo wird wie folgt dargestellt:

{{EmbedLiveSample('Source order override', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben, und beachten Sie, wie "Item 1", "Item 3" und "Item 5" zuerst getabbt werden, aufgrund ihres geänderten `reading-order`. Danach werden die Elemente in der Quellreihenfolge getabbt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
