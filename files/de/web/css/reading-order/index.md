---
title: reading-order
slug: Web/CSS/reading-order
l10n:
  sourceCommit: 7dda25db814fed5ae7498baaee80009b3569a8dc
---

{{CSSRef}}

Die **`reading-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Änderung der Reihenfolge, in der ein Kind eines {{Glossary("Reading_order#reading_flow_container", "Leseablaufcontainers")}} im Vergleich zu seinen Element-Geschwistern gelesen wird.

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

Wenn ein {{Glossary("Block/CSS", "Block")}}, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid](/de/docs/Web/CSS/CSS_grid_layout) Elternelement eines Containers eine {{cssxref("reading-flow")}} Eigenschaft hat, die auf einen anderen Wert als `normal` gesetzt ist, kann die `reading-order` Eigenschaft verwendet werden, um die {{Glossary("Reading_order#reading_flow", "Leseablaufposition")}} des Elements relativ zu seinen Geschwistern festzulegen.

Für das Lesen und Navigieren werden Elemente innerhalb eines Block-, Flex- oder Grid-Containers nach aufsteigendem `reading-order` Wert sortiert. Wenn mehrere Geschwister denselben `reading-order` Wert haben, werden diese Elemente gemäß dem `reading-flow` des Containers sortiert. Geschwistern, denen kein expliziter `reading-order` Wert zugewiesen wurde, wird der Standardwert von `0` zugewiesen, was alle Kinder eines Leseablaufcontainers standardmäßig in dieselbe Ordnungsgruppe einordnet.

Geschwisterelemente werden ab der niedrigstnummerierten Ordnungsgruppe zur höchsten nummeriert. Daher können Sie einem Element, das nach seinen Geschwistern gelesen werden soll, einen `reading-order` Wert von `1` oder mehr zuweisen. Um ein Element vor seinen Geschwistern lesen zu lassen, können Sie ihm einen `reading-order` Wert von `-1` oder weniger zuweisen.

Die `reading-order` Eigenschaft definiert die Lese- und Tab-Reihenfolge, hat jedoch keinen Einfluss auf die visuelle Reihenfolge.

### Interaktion mit `tabindex`

Wenn eine Gruppe von Kindern eines Leseablaufcontainers, die normalerweise nicht fokussierbar sind, mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attributen fokussierbar gemacht wird, wird ihre Lesereihenfolge durch die `reading-flow` und `reading-order` Eigenschaften wie erwartet modifiziert, genauso wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jedoch wird jeder Versuch, die Tab-Reihenfolge der Inhalte eines Leseablaufcontainers mit positiven `tabindex` Werten zu ändern, ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Generell sollten Sie diese ohnehin nicht verwenden; siehe [Verwenden Sie keine Tabindex-Werte größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die `reading-flow` und `reading-order` Eigenschaften bieten einen viel besseren Weg, die Tab-Reihenfolge zu ändern, wenn erforderlich.

## Formale Definition

{{cssinfo}}

## Beispiele

### Reihenfolge der Grid-Zeilen

Dieses Beispiel demonstriert die Verwendung von `reading-order`, um die Positionen einzelner Gitterelemente innerhalb der Lesereihenfolge eines Gittercontainers zu steuern. Ein Gitterelement hat einen `reading-order` Wert, der niedriger als der Standardwert `0` ist, daher wird es vor seinen Geschwisterelementen gelesen. Ein anderes hat einen höheren `reading-order` Wert gesetzt, daher wird es nach den anderen gelesen, unabhängig von Quell- oder Anzeigereihenfolge.

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

Auf dem `<div>` setzen wir die [grid-auto-flow](/de/docs/Web/CSS/grid-auto-flow) Eigenschaft auf `dense`, daher können Elemente außerhalb der Quellreihenfolge angezeigt werden. Die `reading-order` Eigenschaft auf dem `<a>` Element mit einer Klasse von `top` wird auf `-1` gesetzt, daher wird "Item 4" das erste Element im Leseablauf sein. Die `reading-order` Eigenschaft auf dem `<a>` Element mit einer Klasse von `bottom` wird auf `21` gesetzt, daher wird "Item 4" das letzte Element in der Lesereihenfolge sein. Die verbleibenden Elemente werden dazwischen in der Reihenfolge der Gitterzeilen besucht, da die {{cssxref("reading-flow")}} Eigenschaft des `<div>` Elements auf [grid-rows](/de/docs/Web/CSS/grid-row) gesetzt ist.

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

Das obige Beispiel wird wie folgt gerendert:

{{EmbedLiveSample('Grid row order', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben. Beachten Sie, wie "Item 4" zuerst getabbt wird und "Item 2" zuletzt wegen ihrer geänderten `reading-order` Werte. Dazwischen werden die Elemente in der Reihenfolge der Gitterzeilen getabbt.

### Quellreihenfolge-Override

In diesem Beispiel haben die ungeraden Elemente einen niedrigeren `reading-order` Wert, daher werden sie vor den anderen in einer Gruppe gelesen, unabhängig von Quell- oder Anzeigereihenfolge.

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

Die `reading-flow` Eigenschaft des `<div>` Elements ist auf `source-order` gesetzt, was erlaubt, dass `reading-order` verwendet wird, um die Standard-Quell-Lesereihenfolge zu überschreiben. Die ungeraden `<a>` Elemente haben einen `reading-order` Wert von `-1`, daher werden sie vor den geraden Elementen gelesen.

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

Das obige Beispiel wird wie folgt gerendert:

{{EmbedLiveSample('Source order override', '100%', '100px')}}

Versuchen Sie, durch die Links zu tabben, und beachten Sie, wie "Item 1", "Item 3" und "Item 5" zuerst getabbt werden aufgrund ihrer geänderten `reading-order`. Danach werden die Elemente in der Quellreihenfolge getabbt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
