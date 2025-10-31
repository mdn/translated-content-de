---
title: reading-order
slug: Web/CSS/Reference/Properties/reading-order
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`reading-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die Reihenfolge zu ändern, in der ein Kind eines {{Glossary("Reading_order#reading_flow_container", "Leseflusscontainers")}} relativ zu seinen Elementgeschwistern gelesen wird.

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

Wenn ein Element's {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Elterncontainer eine {{cssxref("reading-flow")}} Eigenschaft hat, die auf einen anderen Wert als `normal` gesetzt ist, kann die `reading-order` Eigenschaft verwendet werden, um die Position des Elements im {{Glossary("Reading_order#reading_flow", "Lesefluss")}} relativ zu der seiner Geschwister festzulegen.

Für das Lesen und die Navigation werden Elemente innerhalb eines Block-, Flex- oder Grid-Containers nach aufsteigendem `reading-order`-Wert sortiert. Wenn mehrere Geschwister denselben `reading-order`-Wert haben, werden diese Elemente gemäß des `reading-flow` des Containers sortiert. Geschwister, denen kein expliziter `reading-order`-Wert zugewiesen wurde, erhalten den Standardwert `0`, was alle Kinder eines Leseflusscontainers von vornherein in derselben Ordnungsgruppe platziert.

Geschwisterelemente werden beginnend mit der niedrigsten Ordnungsgruppe bis zur höchsten geordnet. Um ein Element nach seinen Geschwistern lesen zu lassen, könnte man ihm einen `reading-order`-Wert von `1` oder mehr zuweisen. Um ein Element vor seinen Geschwistern lesen zu lassen, könnte man ihm einen `reading-order`-Wert von `-1` oder weniger zuweisen.

Der `reading-order` definiert die Lese- und Tab-Reihenfolge, hat jedoch keinen Einfluss auf die visuelle Reihenfolge.

### Interaktion mit `tabindex`

Wenn eine Gruppe von Leseflusscontainer-Kindelementen, die normalerweise nicht fokussierbar sind, mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) fokussierbar gemacht wird, wird ihre Leserichtung wie erwartet durch die Eigenschaften `reading-flow` und `reading-order` geändert, genauso wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jedoch wird jeder Versuch, die Tab-Reihenfolge des Inhalts eines Leseflusscontainers mit positiven `tabindex`-Werten zu ändern, ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Sie sollten diese im Allgemeinen ohnehin nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten eine weitaus bessere Möglichkeit, die Tab-Reihenfolge bei Bedarf zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Grid-Reihenfolge

Dieses Beispiel demonstriert die Verwendung von `reading-order`, um die Positionen einzelner Gitterelemente innerhalb der Lesereihenfolge eines Gittercontainers zu steuern. Ein Gitterelement hat einen `reading-order`-Wert, der niedriger ist als der Standardwert `0`, daher wird es vor seinen Geschwistern gelesen. Ein anderes hat einen höheren `reading-order`-Wert festgelegt, somit wird es nach den anderen gelesen, unabhängig von Quell- oder Anzeigereihenfolge.

#### HTML

In unserem Markup befinden sich sechs {{htmlelement("a")}} Elemente in einem umschließenden {{htmlelement("div")}}.

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

Auf dem `<div>` setzen wir die [grid-auto-flow](/de/docs/Web/CSS/Reference/Properties/grid-auto-flow) Eigenschaft auf `dense`, daher können Elemente außerhalb der Quellreihenfolge angezeigt werden. Die `reading-order` Eigenschaft auf dem `<a>`-Element mit der Klasse `top` ist auf `-1` gesetzt, daher wird "Item 4" das erste Element im Lesefluss sein. Die `reading-order` Eigenschaft auf dem `<a>`-Element mit der Klasse `bottom` ist auf `21` gesetzt, daher wird "Item 4" das letzte Element in der Lesereihenfolge sein. Die restlichen Elemente werden dazwischen, in der Gitter-Reihenfolge besucht, da die {{cssxref("reading-flow")}} Eigenschaft des `<div>`-Elements auf [grid-rows](/de/docs/Web/CSS/Reference/Properties/grid-row) gesetzt ist.

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

Die obige Demo rendert sich wie folgt:

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben. Beachten Sie, dass "Item 4" zuerst getabt wird und "Item 2" zuletzt, aufgrund ihrer geänderten `reading-order`-Werte. Dazwischen werden die Elemente in der Gitter-Reihenfolge getabt.

### Quellreihenfolge-Override

In diesem Beispiel haben die ungeraden Elemente einen niedrigeren `reading-order`-Wert festgelegt, daher werden sie innerhalb einer Gruppe vor den anderen gelesen, unabhängig von Quell- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir fünf `<a>` Elemente in einem umschließenden {{htmlelement("div")}}.

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

Die `reading-flow` Eigenschaft des `<div>`-Elements ist auf `source-order` gesetzt, was ermöglicht, dass `reading-order` verwendet wird, um die standardmäßige Quellenreihenfolge zu überschreiben. Die ungeraden `<a>` Elemente haben einen `reading-order`-Wert von `-1`, daher werden sie vor den geraden Elementen gelesen.

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

Die obige Demo rendert sich wie folgt:

{{EmbedLiveSample('Source order override', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben, und beachten Sie, wie "Item 1", "Item 3" und "Item 5" zuerst getabt werden, wegen ihrer geänderten `reading-order`. Danach werden die Elemente in der Quellreihenfolge getabt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) via chrome.dev
