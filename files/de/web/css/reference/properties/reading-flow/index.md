---
title: reading-flow
slug: Web/CSS/Reference/Properties/reading-flow
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

Die **`reading-flow`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die {{Glossary("reading_order", "Lesereihenfolge")}} von Kindelementen eines {{Glossary("Block/CSS", "block")}}-, [flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [grid](/de/docs/Web/CSS/CSS_grid_layout)-Layouts zu ändern. Dies beeinflusst die Reihenfolge, in der sie für Sprachwiedergabe gerendert und beim Verwenden der sequentiellen Navigation wie dem Tabben zu Links oder Buttons navigiert werden.

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

Die `reading-flow`-Eigenschaft nimmt eines der folgenden Schlüsselwörter als Wert:

- `normal`
  - : Der Standardwert. Die Lesereihenfolge folgt der Reihenfolge der Elemente im DOM.

- `flex-visual`
  - : Betrifft nur {{Glossary("Flex_Container", "flex containers")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der `flex`-Items unter Berücksichtigung des {{cssxref("writing-mode")}}. Daher hätte ein Dokument in Englisch mit `flex-direction: row-reverse` und `reading-flow: flex-visual` eine Lesereihenfolge von links nach rechts.

- `flex-flow`
  - : Betrifft nur flex containers. Die Lesereihenfolge folgt der {{cssxref("flex-flow")}}-Richtung.

- `grid-columns`
  - : Betrifft nur {{Glossary("Grid_Container", "grid containers")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Items, Spalte für Spalte, unter Berücksichtigung des Schreibmodus.

- `grid-rows`
  - : Betrifft nur grid containers. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Items, Reihe für Reihe, unter Berücksichtigung des Schreibmodus.

- `grid-order`
  - : Betrifft nur grid containers. Wenn die {{cssxref("order")}}-Eigenschaft auf eines der Kinder des Containers angewendet wird, folgt die Lesereihenfolge der modifizierten Elementreihenfolge. Wenn die `order`-Eigenschaft nicht auf die Grid-Items angewendet wird, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Betrifft Grid-, Flex- und Block-Container. Hat allein keine Wirkung — die Lesereihenfolge des Containers folgt weiterhin der Reihenfolge der Elemente im DOM — erlaubt aber die Modifikation der Lesereihenfolge durch Setzen der {{cssxref("reading-order")}}-Eigenschaft auf die Kinder des Containers.

## Beschreibung

Die `reading-flow`-Eigenschaft modifiziert die {{Glossary("reading_order", "Lesereihenfolge")}} von Elementen innerhalb eines {{Glossary("Block/CSS", "block")}}-, [flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [grid](/de/docs/Web/CSS/CSS_grid_layout)-Containers, wenn sie auf einen anderen Wert als `normal` gesetzt wird. Ein solcher Container wird als {{Glossary("Reading_order#reading_flow_container", "Reading Flow Container")}} bezeichnet.

Standardmäßig wird Webinhalt in der DOM-Quellenreihenfolge vorgelesen. Im Allgemeinen sollte die Quelldateireihenfolge eine sinnvolle Lesereihenfolge für den Inhalt ausdrücken, die sich auch in der visuellen Reihenfolge des Inhaltslayouts widerspiegelt. Manchmal unterscheidet sich jedoch die visuelle Reihenfolge oder die Tab-Reihenfolge von der Quellenreihenfolge. Zum Beispiel, wenn mehrere Flexbox- oder Grid-Layouts über [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) auf ein Dokument angewendet werden, um unterschiedlichen Geräte- oder Benutzeranforderungen gerecht zu werden, kann sich die Inhaltsreihenfolge basierend auf der Breite des Viewports unterscheiden. In solchen Fällen kann `reading-flow` verwendet werden, um sicherzustellen, dass die Lese- und Tab-Reihenfolge die visuelle Reihenfolge widerspiegelt.

In einigen Fällen möchten Sie die Lesereihenfolge innerhalb eines Reading Flow Containers weiter feinabstimmen. Sie können Werte der {{cssxref("reading-order")}}-Eigenschaft auf die Kinder des Containers anwenden, um sie in ordinale Gruppen einzuteilen, die dann in numerischer Reihenfolge vorgelesen werden.

### Interaktion mit `tabindex`

Falls bei einem Satz von Kinder-Elementen eines Reading Flow Containers, die normalerweise nicht fokussierbar sind, durch (`tabindex="0"`) fokussierbar gemacht werden, wird deren Lesereihenfolge wie erwartet durch die Eigenschaften `reading-flow` und `reading-order` verändert, genauso wie interaktive Elemente wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jedoch wird jeder Versuch, die Tabulator-Reihenfolge des Inhalts eines Reading Flow Containers durch positive `tabindex`-Werte zu ändern, ignoriert — überschrieben von den Effekten von `reading-flow` und `reading-order`. Sie sollten diese ohnehin nicht verwenden; siehe [Keine Verwendung von Tabindex größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten eine weitaus bessere Möglichkeit, die Tabulator-Reihenfolge bei Bedarf zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Vergleich von Flex-Werten

In diesem Beispiel demonstrieren wir die Effekte verschiedener `reading-flow`-Werte auf einem Flex-Container mit umgekehrten Flex-Items.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `flex`, um das `<div>` in einen Flex-Container zu verwandeln, und stellen die Flex-Items in einer Reihe in umgekehrter DOM-Reihenfolge mit einem {{cssxref("flex-direction")}}-Wert von `row-reverse` dar. Zunächst setzen wir einen `reading-flow` von `normal`, damit die Elemente in der DOM-Quellenreihenfolge gelesen oder durchgetabbt werden.

Wir setzen auch einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element, um es nach dem zweiten und dritten Element im Flex-Flow anzuzeigen. Die resultierende visuelle Reihenfolge der Flex-Items von links nach rechts ist "Item 1", "Item 3", dann "Item 2", aber die DOM-Reihenfolge bleibt unverändert.

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

In unserem Skript erfassen wir Referenzen zum `<select>`-Element und zum Wrapper-`<div>`, und fügen dann eine [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zur `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow`-Eigenschaftswert auf den Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo sieht wie folgt aus:

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

Zuerst versuchen Sie, durch die Links zu tabben, wenn `reading-flow: normal` gesetzt ist. Die Tab-Reihenfolge ist "Item 1", "Item 2", dann "Item 3", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den Wert von `reading-flow` und tabben Sie erneut durch die Links:

- Ein Wert von `flex-visual` bewirkt, dass die Elemente in der Reihenfolge "Item 1", "Item 3", dann "Item 2" durchgetabbt werden, was der visuellen Anzeigereihenfolge entspricht, die sich aus den angewendeten Flexbox-Eigenschaften ergibt.
- Ein Wert von `flex-flow` bewirkt, dass die Elemente in der Reihenfolge "Item 2", "Item 3", dann "Item 1" durchgetabbt werden, was der Richtung des `flex-flow` entspricht — in diesem Fall `row-reverse`. Hier ist die Tab-Reihenfolge das Gegenteil der Anzeigereihenfolge.

### Vergleich von Grid-Werten

In diesem Beispiel demonstrieren wir die Effekte verschiedener `reading-flow`-Werte auf einem Grid-Container.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `grid`, um das `<div>` in einen Grid-Container zu verwandeln, und stellen die Grid-Items in drei Spalten mit {{cssxref("grid-template-columns")}} dar. Wir setzen auch {{cssxref("grid-template-areas")}}, um verschiedene Platzierungsbereiche in diesen Spalten zu beschreiben, und platzieren die `<a>`-Elemente in diesen Bereichen mit {{cssxref("grid-area")}}. Zunächst setzen wir einen `reading-flow` von `normal`, damit die Elemente in der Standard-DOM-Quellenreihenfolge gelesen oder durchgetabbt werden.

Schließlich setzen wir einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element; dies hat keinen Einfluss auf das Layout, da es die Gitterflächenplatzierung nicht überschreibt, aber es hat einen Effekt, wenn ein bestimmter `reading-flow`-Wert gesetzt ist, wie Sie später sehen werden.

Von links nach rechts gelesen, ist die resultierende Anzeigereihenfolge der Grid-Items "Item D", "Item B", "Item C", dann "Item A".

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

In unserem Skript erfassen wir Referenzen zum `<select>`-Element und zum Wrapper-`<div>`, und fügen dann eine [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zur `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow`-Eigenschaftswert auf den Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo sieht wie folgt aus:

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

Zuerst versuchen Sie, durch die Links zu tabben, wenn `reading-flow: normal` gesetzt ist. Die Tab-Reihenfolge ist "Item A", "Item B", "Item C" und "Item D", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den Wert von `reading-flow` und tabben Sie erneut durch die Links:

- Ein Wert von `grid-rows` bewirkt, dass die Elemente in der visuellen Anzeigereihenfolge Zeile für Zeile durchgetabbt werden. Dies ist "Item D", "Item B", "Item C", dann "Item A".
- Ein Wert von `grid-columns` bewirkt, dass die Elemente in der visuellen Anzeigereihenfolge Spalte für Spalte durchgetabbt werden. Dies ist "Item D", "Item C", "Item B", dann "Item A".
- Ein Wert von `grid-order` bewirkt, dass die Elemente in DOM-Reihenfolge durchgetabbt werden, aber Änderungen des `order`-Wertes berücksichtigt werden. Da wir `order: 1;` auf das erste `<a>`-Element gesetzt haben, ist die Tab-Reihenfolge "Item B", "Item C", "Item D", dann "Item A".

### Anpassung der Lesereihenfolge bei Blockcontainern

In diesem Beispiel demonstrieren wir die Effekte des `reading-flow: source-order`-Wertes auf einem Blockcontainer.

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

Wir setzen einen `reading-flow` von `source-order`, damit die Elemente in der DOM-Quellenreihenfolge gelesen oder durchgetabbt werden, aber Modifikationen der Lesereihenfolge über {{cssxref("reading-order")}} erlaubt sind. Wir setzen einen `reading-order`-Wert von `1` auf das erste `<a>`-Element.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Ergebnis

Die Demo sieht wie folgt aus:

{{EmbedLiveSample('Reading flow adjustment on block containers', '', '100px')}}

Versuchen Sie, durch die Links zu tabben: Die Tab-Reihenfolge ist "Item B", "Item C", "Item D", dann "Item A" — die Reihenfolge der Elemente im DOM wird befolgt, aber Item A wurde in eine höhere Lesereihenordnung eingeteilt als die anderen (der Standardwert von `reading-order` ist `0`), daher wird es zuletzt getabbt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
