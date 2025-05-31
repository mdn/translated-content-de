---
title: reading-order
slug: Web/CSS/reading-order
l10n:
  sourceCommit: f1113cf25440d058956cfae2a9e44e8c86182d43
---

{{CSSRef}}{{SeeCompatTable}}

Die **`reading-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die Reihenfolge, in der ein Kind eines {{Glossary("Reading_order#reading_flow_container", "Lesefluss-Containers")}} im Verhältnis zu seinen Element-Geschwistern gelesen wird, zu ändern.

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

Wenn ein Element einen {{Glossary("Block/CSS", "block")}}, [flex](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [grid](/de/docs/Web/CSS/CSS_grid_layout) Elternelement-Container hat, dessen {{cssxref("reading-flow")}} Eigenschaft auf einen anderen Wert als `normal` gesetzt ist, kann die `reading-order` Eigenschaft verwendet werden, um die {{Glossary("Reading_order#reading_flow", "Lesefluss-")}}Position des Elements relativ zu seinen Geschwistern zu bestimmen.

Zum Lesen und Navigieren werden Elemente innerhalb eines Block-, Flex- oder Grid-Containers in aufsteigender Reihenfolge des `reading-order`-Werts sortiert. Wenn mehrere Geschwister denselben `reading-order`-Wert haben, werden diese Elemente gemäß dem `reading-flow` des Containers sortiert. Geschwister, denen kein expliziter `reading-order`-Wert zugewiesen ist, erhalten den Standardwert `0`, was alle Kinder eines Lesefluss-Containers standardmäßig in dieselbe ordinale Gruppe einordnet.

Geschwister-Elemente werden beginnend von der niedrigsten zur höchsten ordinalen Gruppe geordnet. Daher können Sie ein Element, das nach seinen Geschwistern gelesen werden soll, mit einem `reading-order`-Wert von `1` oder mehr versehen. Um ein Element vor seinen Geschwistern lesen zu lassen, können Sie einen `reading-order`-Wert von `-1` oder weniger setzen.

Der `reading-order` definiert die Lese- und Tab-Reihenfolge, hat jedoch keinen Einfluss auf die visuelle Reihenfolge.

### Interaktion mit `tabindex`

Wenn eine Gruppe von Kindern eines Lesefluss-Containers, die normalerweise nicht fokussierbar sind, mithilfe des [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attributs fokussierbar gemacht wird, wird deren Lesereihenfolge wie erwartet durch die Eigenschaften `reading-flow` und `reading-order` geändert, genauso wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jeder Versuch, die Tab-Reihenfolge des Inhalts eines Lesefluss-Containers mit positiven `tabindex`-Werten zu modifizieren, wird jedoch ignoriert — überschrieben von den Effekten von `reading-flow` und `reading-order`. Sie sollten diese ohnehin nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten eine weitaus bessere Möglichkeit, die Tab-Reihenfolge bei Bedarf zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Grid-Reihenfolge

Dieses Beispiel zeigt, wie `reading-order` verwendet wird, um die Positionen einzelner Gitterelemente in der Lesereihenfolge eines Gitter-Containers zu steuern. Ein Gitterelement hat einen `reading-order`-Wert, der niedriger als der Standardwert `0` ist, und wird daher vor seinen Geschwisterelementen gelesen. Ein anderes hat einen höheren `reading-order`-Wert und wird daher nach den anderen gelesen, unabhängig von der Quellen- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir sechs {{htmlelement("a")}} Elemente innerhalb eines Wrapper-{{htmlelement("div")}}.

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

Am `<div>` setzen wir die [grid-auto-flow](/de/docs/Web/CSS/grid-auto-flow)-Eigenschaft auf `dense`, sodass die Elemente möglicherweise außerhalb der Quellreihenfolge angezeigt werden können. Die `reading-order`-Eigenschaft auf dem `<a>` Element mit einer Klasse von `top` ist auf `-1` gesetzt, daher wird "Item 4" das erste Element im Lesefluss sein. Die `reading-order`-Eigenschaft auf dem `<a>` Element mit einer Klasse von `bottom` ist auf `21` gesetzt, daher wird "Item 4" das letzte Element in der Lesereihenfolge sein. Die verbleibenden Elemente werden zwischendrin in Gitterreihenfolge besucht, da die {{cssxref("reading-flow")}}-Eigenschaft des `<div>` Elements auf [grid-rows](/de/docs/Web/CSS/grid-row) gesetzt ist.

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

Versuchen Sie, die Links zu tabben. Beachten Sie, wie "Item 4" zuerst und "Item 2" zuletzt getabt wird, aufgrund ihrer modifizierten `reading-order`-Werte. Dazwischen werden die Elemente in Grid-Reihenfolge getabt.

### Überschreibung der Quellenreihenfolge

In diesem Beispiel haben die ungeradzahligen Elemente einen niedrigeren `reading-order`-Wert, daher werden sie innerhalb einer Gruppe vor den anderen gelesen, unabhängig von der Quellen- oder Anzeigereihenfolge.

#### HTML

In unserem Markup haben wir fünf `<a>` Elemente innerhalb eines Wrapper-{{htmlelement("div")}}.

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

Die `reading-flow`-Eigenschaft des `<div>` Elements ist auf `source-order` gesetzt, was ermöglicht, dass `reading-order` verwendet wird, um die Standard-Quellen-Lesereihenfolge zu überschreiben. Die ungeradzahligen `<a>` Elemente haben einen `reading-order`-Wert von `-1`, daher werden sie vor den geradezahligen Elementen gelesen.

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

Versuchen Sie, durch die Links zu tabben, und beachten Sie, wie "Item 1", "Item 3" und "Item 5" zuerst getabt werden, aufgrund ihres modifizierten `reading-order`. Danach werden die Elemente in Quellenreihenfolge getabt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-flow")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
