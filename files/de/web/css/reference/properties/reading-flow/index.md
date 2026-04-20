---
title: "`reading-flow` CSS property"
short-title: reading-flow
slug: Web/CSS/Reference/Properties/reading-flow
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

Die **`reading-flow`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht das Ändern der {{Glossary("reading_order", "Lesereihenfolge")}} von Kinderelementen in einem {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Layout. Dies beeinflusst die Reihenfolge, in der sie für Sprachausgaben gerendert und bei sequentieller Navigation, z.B. beim Tabben zu Links oder Buttons, angesteuert werden.

## Syntax

```css
/* Keyword values */
reading-flow: normal;
reading-flow: flex-visual;
reading-flow: flex-flow;
reading-flow: grid-columns;
reading-flow: grid-rows;
reading-flow: grid-order;
reading-flow: source-order;

/* Global values */
reading-flow: inherit;
reading-flow: initial;
reading-flow: revert;
reading-flow: revert-layer;
reading-flow: unset;
```

### Wert

Die `reading-flow`-Eigenschaft nimmt einen der folgenden Schlüsselwörter als Wert an:

- `normal`
  - : Der Standardwert. Die Lesereihenfolge folgt der Reihenfolge der Elemente im DOM.

- `flex-visual`
  - : Beeinflusst nur {{Glossary("Flex_Container", "Flex-Container")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der `flex`-Elemente unter Berücksichtigung des {{cssxref("writing-mode")}}. Ein Dokument in Englisch mit `flex-direction: row-reverse` und gesetztem `reading-flow: flex-visual` hätte daher eine Lesereihenfolge von links nach rechts.

- `flex-flow`
  - : Beeinflusst nur Flex-Container. Die Lesereihenfolge folgt der Richtung von {{cssxref("flex-flow")}}.

- `grid-columns`
  - : Beeinflusst nur {{Glossary("Grid_Container", "Grid-Container")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, spaltenweise, unter Berücksichtigung des Schreibmodus.

- `grid-rows`
  - : Beeinflusst nur Grid-Container. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, zeilenweise, unter Berücksichtigung des Schreibmodus.

- `grid-order`
  - : Beeinflusst nur Grid-Container. Falls die Eigenschaft {{cssxref("order")}} auf eines der Kinder des Containers angewendet wurde, folgt die Lesereihenfolge der geänderten Reihenfolge der Elemente. Wenn die `order`-Eigenschaft nicht auf die Grid-Elemente angewendet wurde, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Beeinflusst Grid-, Flex- und Block-Container. Hat für sich genommen keine Wirkung — die Lesereihenfolge des Containers folgt weiterhin der Reihenfolge der Elemente im DOM —, ermöglicht es jedoch, die Lesereihenfolge durch Setzen der Eigenschaft {{cssxref("reading-order")}} auf die Kinder des Containers zu ändern.

## Beschreibung

Die `reading-flow`-Eigenschaft ändert die {{Glossary("reading_order", "Lesereihenfolge")}} von Elementen innerhalb eines {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containers, wenn sie auf einen anderen Wert als `normal` gesetzt ist. Ein solcher Container wird als {{Glossary("Reading_order#reading_flow_container", "Reading Flow Container")}} bezeichnet.

Standardmäßig wird Webinhalt in der DOM-Quellenreihenfolge vorgelesen. Im Allgemeinen sollte die Quellenreihenfolge eine sinnvolle Lesereihenfolge für den Inhalt ausdrücken, und dies sollte auch durch die visuelle Reihenfolge im Inhaltslayout widergespiegelt werden. Manchmal unterscheidet sich jedoch die visuelle Ordnung oder Tab-Reihenfolge von der Quellenreihenfolge. Zum Beispiel, wenn beim Anwenden mehrerer Flexbox- oder Grid-Layouts auf ein Dokument mittels [media queries](/de/docs/Web/CSS/Guides/Media_queries/Using) zur Anpassung an unterschiedliche Geräte- oder Benutzeranforderungen die Reihenfolge des Inhalts je nach Ansichtsfeldbreite abweichen kann. In einem solchen Fall kann `reading-flow` verwendet werden, um sicherzustellen, dass die Lese- und Tab-Reihenfolge der visuellen Reihenfolge entspricht.

In einigen Fällen möchten Sie möglicherweise die Lesereihenfolge innerhalb eines Reading Flow Containers weiter optimieren. Sie können Werte der Eigenschaft {{cssxref("reading-order")}} auf die Kinder des Containers anwenden, um sie in ordinale Gruppen zu setzen, die dann in numerischer Reihenfolge vorgelesen werden.

### Interaktion mit `tabindex`

Wenn eine Gruppe von Kindern eines Reading Flow Containers, die normalerweise nicht fokussierbar sind, durch [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) fokussierbar gemacht werden, wird ihre Lesereihenfolge wie erwartet durch die Eigenschaften `reading-flow` und `reading-order` geändert, genauso wie dies bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}} der Fall ist.

Jedoch wird jeder Versuch, die Tab-Reihenfolge des Inhalts eines Reading Flow Containers mit positiven `tabindex`-Werten zu ändern, ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Diese sollten generell vermieden werden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten eine viel bessere Möglichkeit, die Tab-Reihenfolge zu ändern, falls erforderlich.

## Formale Definition

{{cssinfo}}

## Beispiele

### Flex-Wertvergleich

In diesem Beispiel demonstrieren wir die Auswirkungen verschiedener `reading-flow`-Werte auf einen Flex-Container mit umgekehrten Flex-Elementen.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zur Auswahl verschiedener `reading-flow`-Werte und einen Wrapper-{{htmlelement("div")}}, der drei {{htmlelement("a")}}-Elemente enthält.

```html
<form>
  <label for="reading-flow">Choose reading flow:</label>
  <select id="reading-flow">
    <option>normal</option>
    <option>flex-visual</option>
    <option>flex-flow</option>
  </select>
</form>
<div class="wrapper">
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
</div>
```

#### CSS

Wir verwenden einen {{cssxref("display")}}-Wert von `flex`, um das `<div>` in einen Flex-Container zu verwandeln, und zeigen die Flex-Elemente in einer Zeile in umgekehrter DOM-Reihenfolge mit einem {{cssxref("flex-direction")}}-Wert von `row-reverse` an. Zunächst setzen wir ein `reading-flow` von `normal`, damit die Elemente in der DOM-Quellenreihenfolge gelesen oder durchgetabt werden.

Wir setzen auch einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element, damit es nach dem zweiten und dritten Element im Flex-Flow angezeigt wird. Die resultierende visuelle Reihenfolge der Flex-Elemente von links nach rechts ist "Item 1", "Item 3", dann "Item 2", aber die DOM-Reihenfolge bleibt unverändert.

```css
.wrapper {
  display: flex;
  flex-direction: row-reverse;
  reading-flow: normal;
  gap: 1em;
}

a:first-child {
  order: 1;
}
```

#### JavaScript

In unserem Skript greifen wir auf die Referenzen des `<select>`-Elements und des Wrapper-`<div>` zu und fügen dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als Wert der `reading-flow`-Eigenschaft auf dem Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo rendert folgendermaßen:

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

Versuchen Sie zuerst, durch die Links zu tabben, während `reading-flow: normal` gesetzt ist. Die Tab-Reihenfolge ist "Item 1", "Item 2", dann "Item 3", da dies die Reihenfolge der Elemente im DOM ist.

Versuchen Sie nun, den Wert von `reading-flow` zu ändern und erneut durch die Links zu tabben:

- Ein Wert von `flex-visual` bewirkt, dass die Elemente in der Reihenfolge "Item 1", "Item 3", dann "Item 2" durchgetabt werden, was der visuellen Anzeigereihenfolge entspricht, die durch die angewandten Flexbox-Eigenschaften resultiert.
- Ein Wert von `flex-flow` bewirkt, dass die Elemente in der Reihenfolge "Item 2", "Item 3", dann "Item 1" durchgetabt werden, was der Richtung des `flex-flow` entspricht — in diesem Fall `row-reverse`. Hier ist die Tab-Reihenfolge das Gegenteil der Anzeigereihenfolge.

### Grid-Wertvergleich

In diesem Beispiel demonstrieren wir die Auswirkungen verschiedener `reading-flow`-Werte auf einen Grid-Container.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zur Auswahl verschiedener `reading-flow`-Werte und einen Wrapper-{{htmlelement("div")}}, der vier {{htmlelement("a")}}-Elemente enthält.

```html
<form>
  <label for="reading-flow">Choose reading flow:</label>
  <select id="reading-flow">
    <option>normal</option>
    <option>grid-rows</option>
    <option>grid-columns</option>
    <option>grid-order</option>
  </select>
</form>
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

Wir verwenden einen {{cssxref("display")}}-Wert von `grid`, um das `<div>` in einen Grid-Container zu verwandeln, und zeigen die Grid-Elemente in drei Spalten mit {{cssxref("grid-template-columns")}} an. Wir setzen auch {{cssxref("grid-template-areas")}}, um verschiedene Platzierungsbereiche in diesen Spalten zu beschreiben, und platzieren die `<a>`-Elemente in diesen Bereichen mithilfe von {{cssxref("grid-area")}}. Zunächst setzen wir ein `reading-flow` von `normal`, damit die Elemente in der Standard-DOM-Quellenreihenfolge gelesen oder durchgetabt werden.

Schließlich setzen wir einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element; dies hat keinen Einfluss auf das Layout, da es die Grid-Bereichsplatzierung nicht überschreibt, aber es hat einen Effekt, wenn ein bestimmter `reading-flow`-Wert gesetzt ist, wie Sie später sehen werden.

Von links nach rechts gelesen, ist die resultierende Anzeigereihenfolge der Grid-Elemente "Item D", "Item B", "Item C", dann "Item A".

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-areas:
    "d b b"
    "c c a";
  reading-flow: normal;
}

.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}

a:first-child {
  order: 1;
}
```

#### JavaScript

In unserem Skript greifen wir auf die Referenzen des `<select>`-Elements und des Wrapper-`<div>` zu und fügen dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als Wert der `reading-flow`-Eigenschaft auf dem Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo rendert folgendermaßen:

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

Versuchen Sie zuerst, durch die Links zu tabben, während `reading-flow: normal` gesetzt ist. Die Tab-Reihenfolge ist "Item A", "Item B", "Item C", und "Item D", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den Wert von `reading-flow` und versuchen Sie dann erneut durch die Links zu tabben:

- Ein Wert von `grid-rows` bewirkt, dass die Elemente in der visuellen Anzeigereihenfolge zeilenweise durchgetabt werden. Dies ist "Item D", "Item B", "Item C", dann "Item A".
- Ein Wert von `grid-columns` bewirkt, dass die Elemente in der visuellen Anzeigereihenfolge spaltenweise durchgetabt werden. Dies ist "Item D", "Item C", "Item B", dann "Item A".
- Ein Wert von `grid-order` bewirkt, dass die Elemente in der DOM-Reihenfolge durchgetabt werden, berücksichtigt jedoch alle `order`-Wertänderungen. Da wir `order: 1;` auf das erste `<a>`-Element gesetzt haben, ist die Tab-Reihenfolge "Item B", "Item C", "Item D", dann "Item A".

### Anpassung der Lesereihenfolge bei Block-Containern

In diesem Beispiel demonstrieren wir die Auswirkungen des Wertes `reading-flow: source-order` auf einen Block-Container.

#### HTML

Das Markup enthält einen Wrapper-{{htmlelement("div")}}, der vier {{htmlelement("a")}}-Elemente enthält.

```html
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

Wir setzen ein `reading-flow` von `source-order`, sodass die Elemente in der DOM-Quellenreihenfolge gelesen oder durchgetabt werden, aber Anpassungen der Lesereihenfolge über {{cssxref("reading-order")}} erlaubt sind. Wir setzen einen `reading-order`-Wert von `1` auf das erste `<a>`-Element.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Ergebnis

Die Demo rendert folgendermaßen:

{{EmbedLiveSample('Reading flow adjustment on block containers', '', '100px')}}

Versuchen Sie, durch die Links zu tabben: Die Tab-Reihenfolge ist "Item B", "Item C", "Item D", dann "Item A" — die Reihenfolge der Elemente im DOM wird befolgt, aber Item A wurde in eine höhere ordinale Lesereihenfolge-Gruppe als die anderen (der Standard-`reading-order`-Wert ist `0`) gesetzt, daher wird es zuletzt getabt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
