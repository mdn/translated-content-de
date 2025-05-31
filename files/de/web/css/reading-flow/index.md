---
title: reading-flow
slug: Web/CSS/reading-flow
l10n:
  sourceCommit: f1113cf25440d058956cfae2a9e44e8c86182d43
---

{{CSSRef}}{{SeeCompatTable}}

Die **`reading-flow`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die {{Glossary("reading_order", "Lesereihenfolge")}} von Kindelementen eines {{Glossary("Block/CSS", "Block")}}, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid](/de/docs/Web/CSS/CSS_grid_layout) Layouts zu ändern. Dies beeinflusst die Reihenfolge, in der sie in Sprache gerendert werden und zu denen navigiert wird, wenn eine sequentielle Navigation wie das Tabben zu Links oder Schaltflächen verwendet wird.

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

Die `reading-flow` Eigenschaft nimmt einen der folgenden Schlüsselwörter als Wert an:

- `normal`

  - : Der Standardwert. Die Lesereihenfolge folgt der Reihenfolge der Elemente im DOM.

- `flex-visual`

  - : Beeinflusst nur {{Glossary("Flex_Container", "Flex-Container")}}. Die Lesereihenfolge folgt der visuellen Ordnung der `flex` Elemente unter Berücksichtigung des {{cssxref("writing-mode")}}. Ein Dokument in Englisch mit `flex-direction: row-reverse` und `reading-flow: flex-visual` würde daher eine Lesereihenfolge von links nach rechts haben.

- `flex-flow`

  - : Beeinflusst nur Flex-Container. Die Lesereihenfolge folgt der {{cssxref("flex-flow")}} Richtung.

- `grid-columns`

  - : Beeinflusst nur {{Glossary("Grid_Container", "Grid-Container")}}. Die Lesereihenfolge folgt der visuellen Ordnung der Grid-Elemente, Spalte für Spalte, unter Berücksichtigung des Schreibmodus.

- `grid-rows`

  - : Beeinflusst nur Grid-Container. Die Lesereihenfolge folgt der visuellen Ordnung der Grid-Elemente, Zeile für Zeile, unter Berücksichtigung des Schreibmodus.

- `grid-order`

  - : Beeinflusst nur Grid-Container. Wenn die {{cssxref("order")}} Eigenschaft auf eines der Container-Kindelemente angewendet wird, folgt die Lesereihenfolge der modifizierten Elementreihenfolge. Wenn die `order` Eigenschaft nicht auf die Grid-Elemente angewendet wird, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Beeinflusst Grid-, Flex- und Block-Container. Hat keine eigene Wirkung — die Lesereihenfolge des Containers folgt weiterhin der Reihenfolge der Elemente im DOM — erlaubt jedoch die Änderung der Lesereihenfolge durch Setzen der {{cssxref("reading-order")}} Eigenschaft für die Kindelemente des Containers.

## Beschreibung

Die `reading-flow` Eigenschaft ändert die {{Glossary("reading_order", "Lesereihenfolge")}} von Elementen innerhalb eines {{Glossary("Block/CSS", "Block")}}, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid](/de/docs/Web/CSS/CSS_grid_layout) Containers, wenn sie auf einen Wert anders als `normal` gesetzt ist. Ein solcher Container wird als {{Glossary("Reading_order#reading_flow_container", "Lesefluss-Container")}} bezeichnet.

Standardmäßig wird Web-Inhalt in der DOM-Quellenreihenfolge gelesen. Im Allgemeinen sollte die Quellenreihenfolge eine sinnvolle Lesereihenfolge für den Inhalt ausdrücken, und dies sollte sich auch in der visuellen Reihenfolge im Inhaltslayout widerspiegeln. Es gibt jedoch manchmal Unterschiede zwischen der visuellen und der Quellenreihenfolge oder Tab-Reihenfolge. Zum Beispiel, wenn ein flexibles oder Grid-Layout mehrmals in einem Dokument über [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) angewendet wird, um verschiedene Geräte- oder Benutzeranforderungen zu erfüllen, kann sich die Inhaltsreihenfolge basierend auf der Breite des Ansichtsfensters unterscheiden. In einem solchen Fall kann `reading-flow` verwendet werden, um sicherzustellen, dass die Lese- und Tab-Reihenfolge der visuellen Reihenfolge entspricht.

In einigen Fällen möchten Sie möglicherweise die Lesereihenfolge innerhalb eines Lesefluss-Containers weiter abstimmen. Sie können dazu die Werte der {{cssxref("reading-order")}} Eigenschaft an den Kindelementen des Containers verwenden, um sie in numerische Gruppen zu bringen, die dann in nummerischer Reihenfolge gelesen werden.

### Interaktion mit `tabindex`

Wenn Elemente eines Lesefluss-Containers, die normalerweise nicht fokussierbar sind, durch [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribute fokussierbar gemacht werden, wird ihre Lesereihenfolge wie erwartet durch die `reading-flow` und `reading-order` Eigenschaften verändert, genauso wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jeder Versuch, die Tab-Reihenfolge des Inhalts eines Lesefluss-Containers mithilfe von positiven `tabindex` Werten zu verändern, wird jedoch ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Sie sollten diese ohnehin nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die `reading-flow` und `reading-order` Eigenschaften bieten eine wesentlich bessere Möglichkeit, die Tab-Reihenfolge gegebenenfalls zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Vergleich der Flex Werte

In diesem Beispiel demonstrieren wir die Effekte verschiedener `reading-flow` Werte auf einen Flex-Container mit invertierten Flex-Elementen.

#### HTML

Das Markup enthält ein {{htmlelement("select")}} Element zum Auswählen verschiedener `reading-flow` Werte und ein Wrapper-{{htmlelement("div")}} mit drei {{htmlelement("a")}} Elementen.

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

Wir verwenden einen {{cssxref("display")}} Wert von `flex`, um das `<div>` in einen Flex-Container zu verwandeln, und zeigen die Flex-Elemente in einer Zeile in umgekehrter DOM-Reihenfolge mit einem {{cssxref("flex-direction")}} Wert von `row-reverse`. Zunächst setzen wir einen `reading-flow` von `normal`, sodass die Elemente in DOM-Quellenreihenfolge gelesen oder durchlaufen werden.

Wir setzen auch einen {{cssxref("order")}} Wert von `1` auf das erste `<a>` Element, sodass es nach dem zweiten und dritten Element im Flex-Flow angezeigt wird. Die resultierende visuelle Reihenfolge der Flex-Elemente von links nach rechts ist "Item 1", "Item 3" und dann "Item 2", aber die DOM-Reihenfolge bleibt unverändert.

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

In unserem Skript greifen wir auf das `<select>` Element und das Wrapper-`<div>` zu, und fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener dem `<select>` Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow` Eigenschaftswert auf den Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Das Demo wird wie folgt gerendert:

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

Versuchen Sie zuerst, mit `reading-flow: normal` durch die Links zu navigieren. Die Tab-Reihenfolge ist "Item 1", "Item 2", dann "Item 3", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den `reading-flow` Wert und navigieren Sie erneut durch die Links:

- Ein Wert von `flex-visual` bewirkt, dass die Elemente in der Reihenfolge "Item 1", "Item 3", dann "Item 2" durchlaufen werden, was der visuellen Anzeigereihenfolge entspricht, die aus den angewendeten Flexbox-Eigenschaften resultiert.
- Ein Wert von `flex-flow` bewirkt, dass die Elemente in der Reihenfolge "Item 2", "Item 3", dann "Item 1" durchlaufen werden, was der Richtung des `flex-flow` entspricht — in diesem Fall `row-reverse`. Hierbei ist die Tab-Reihenfolge die umgekehrte der Anzeigereihenfolge.

### Vergleich der Grid Werte

In diesem Beispiel demonstrieren wir die Effekte verschiedener `reading-flow` Werte auf einen Grid-Container.

#### HTML

Das Markup enthält ein {{htmlelement("select")}} Element zum Auswählen verschiedener `reading-flow` Werte und ein Wrapper-{{htmlelement("div")}} mit vier {{htmlelement("a")}} Elementen.

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

Wir verwenden einen {{cssxref("display")}} Wert von `grid`, um das `<div>` in einen Grid-Container zu verwandeln, und zeigen die Grid-Elemente in drei Spalten unter Verwendung von {{cssxref("grid-template-columns")}}. Wir setzen auch {{cssxref("grid-template-areas")}}, um verschiedene Platzierungsbereiche in diesen Spalten zu beschreiben, und platzieren die `<a>` Elemente in diesen Bereichen unter Verwendung von {{cssxref("grid-area")}}. Zunächst setzen wir einen `reading-flow` von `normal`, sodass die Elemente in der Standard-DOM-Quellenreihenfolge gelesen oder durchlaufen werden.

Schließlich setzen wir einen {{cssxref("order")}} Wert von `1` auf das erste `<a>` Element; dies hat keinen Einfluss auf das Layout, da es die Grid-Flächen-Platzierung nicht überschreibt, aber es hat einen Effekt, wenn ein bestimmter `reading-flow` Wert gesetzt ist, wie Sie später sehen werden.

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

In unserem Skript greifen wir auf das `<select>` Element und das Wrapper-`<div>` zu, und fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener dem `<select>` Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow` Eigenschaftswert auf den Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Das Demo wird wie folgt gerendert:

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

Versuchen Sie zuerst, mit `reading-flow: normal` durch die Links zu navigieren. Die Tab-Reihenfolge ist "Item A", "Item B", "Item C" und "Item D", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den `reading-flow` Wert und navigieren Sie erneut durch die Links:

- Ein Wert von `grid-rows` bewirkt, dass die Elemente in der visuellen Anzeigereihenfolge nach Zeilen durchlaufen werden. Dies ist "Item D", "Item B", "Item C", dann "Item A".
- Ein Wert von `grid-columns` bewirkt, dass die Elemente in der visuellen Anzeigereihenfolge nach Spalten durchlaufen werden. Dies ist "Item D", "Item C", "Item B", dann "Item A".
- Ein Wert von `grid-order` bewirkt, dass die Elemente in DOM-Reihenfolge durchlaufen werden, jedoch werden Änderungen von `order` berücksichtigt. Da wir `order: 1;` auf das erste `<a>` Element gesetzt haben, ist die Tab-Reihenfolge "Item B", "Item C", "Item D", dann "Item A".

### Anpassung der Lesereihenfolge bei Block-Containern

In diesem Beispiel demonstrieren wir die Effekte des `reading-flow: source-order` Wertes auf einen Block-Container.

#### HTML

Das Markup enthält ein Wrapper-{{htmlelement("div")}} mit vier {{htmlelement("a")}} Elementen.

```html
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

Wir setzen einen `reading-flow` von `source-order`, sodass die Elemente in DOM-Quellenreihenfolge gelesen oder durchlaufen werden, Modifikationen der Lesereihenfolge über {{cssxref("reading-order")}} jedoch erlaubt sind. Wir setzen einen `reading-order` Wert von `1` auf das erste `<a>` Element.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Ergebnis

Das Demo wird wie folgt gerendert:

{{EmbedLiveSample('Reading flow adjustment on block containers', '', '100px')}}

Versuchen Sie, durch die Links zu navigieren: die Tab-Reihenfolge ist "Item B", "Item C", "Item D", dann "Item A" — die Reihenfolge der Elemente im DOM wird befolgt, aber Item A wurde in einer höheren Lesereihenfolgegruppe platziert als die anderen (der Standardwert von `reading-order` ist `0`), daher wird es zuletzt gefokussiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) via chrome.dev
