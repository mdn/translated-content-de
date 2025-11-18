---
title: reading-flow
slug: Web/CSS/Reference/Properties/reading-flow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`reading-flow`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die {{Glossary("reading_order", "Lesereihenfolge")}} von Kindelementen eines {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Layouts zu ändern. Dies beeinflusst die Reihenfolge, in der sie beim Vorlesen und in der sequentiellen Navigation, wie dem Tabben zu Links oder Schaltflächen, angesprochen werden.

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
  - : Betrifft nur {{Glossary("Flex_Container", "Flex-Container")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der `flex`-Elemente, wobei der {{cssxref("writing-mode")}} berücksichtigt wird. Ein Dokument in Englisch mit `flex-direction: row-reverse` und gesetztem `reading-flow: flex-visual` hätte daher eine Lesereihenfolge von links nach rechts.

- `flex-flow`
  - : Betrifft nur Flex-Container. Die Lesereihenfolge folgt der {{cssxref("flex-flow")}}-Richtung.

- `grid-columns`
  - : Betrifft nur {{Glossary("Grid_Container", "Grid-Container")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, spaltenweise, wobei der Schreibmodus berücksichtigt wird.

- `grid-rows`
  - : Betrifft nur Grid-Container. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, zeilenweise, wobei der Schreibmodus berücksichtigt wird.

- `grid-order`
  - : Betrifft nur Grid-Container. Wenn die {{cssxref("order")}}-Eigenschaft auf eines der Kinder des Containers angewendet wird, folgt die Lesereihenfolge der modifizierten Elementreihenfolge. Wenn die `order`-Eigenschaft nicht auf die Grid-Elemente angewendet wird, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Betrifft Grid-, Flex- und Block-Container. Hat keinen Effekt von sich aus — die Lesereihenfolge des Containers folgt weiterhin der Reihenfolge der Elemente im DOM — ermöglicht aber die Modifikation der Lesereihenfolge durch Setzen der {{cssxref("reading-order")}}-Eigenschaft auf die Kinder des Containers.

## Beschreibung

Die `reading-flow`-Eigenschaft verändert die {{Glossary("reading_order", "Lesereihenfolge")}} von Elementen innerhalb eines {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/Guides/Grid_layout)-Containers, wenn sie auf einen anderen Wert als `normal` gesetzt wird. Solch ein Container wird als {{Glossary("Reading_order#reading_flow_container", "Lesefluss-Container")}} bezeichnet.

Standardmäßig wird Web-Inhalt in der DOM-Quellenreihenfolge vorgelesen. Im Allgemeinen sollte die Quellenreihenfolge eine sinnvolle Lesereihenfolge für den Inhalt ausdrücken, und dies sollte auch in der visuellen Ordnung im Inhaltslayout widergespiegelt werden. Manchmal jedoch unterscheidet sich die visuelle Ordnung oder Tab-Reihenfolge von der Quellenreihenfolge. Zum Beispiel, wenn mehrere Flexbox- oder Grid-Layouts über [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) auf ein Dokument angewendet werden, um unterschiedliche Geräte- oder Benutzeranforderungen zu erfüllen, kann sich die Inhaltsreihenfolge basierend auf der Ansichtsfensterbreite unterscheiden. In einem solchen Fall kann `reading-flow` verwendet werden, um sicherzustellen, dass die Lese- und Tab-Reihenfolge die visuelle Ordnung widerspiegelt.

In einigen Fällen möchten Sie möglicherweise die Lesereihenfolge innerhalb eines Lesefluss-Containers weiter verfeinern. Sie können die {{cssxref("reading-order")}}-Eigenschaftswerte auf die Kinder des Containers anwenden, um sie in ordinale Gruppen zu unterteilen, die dann in numerischer Reihenfolge vorgelesen werden.

### Interaktion mit `tabindex`

Wenn ein Satz von nicht standardmäßig fokussierbaren Elementen innerhalb eines Lesefluss-Containers mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) fokussierbar gemacht wird, wird ihre Lesereihenfolge erwartungsgemäß durch die `reading-flow`- und `reading-order`-Eigenschaften geändert, genau wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jeder Versuch, die Tab-Reihenfolge des Inhalts eines Lesefluss-Containers mittels positiver `tabindex`-Werte zu ändern, wird jedoch ignoriert — sie wird von den Effekten von `reading-flow` und `reading-order` überschrieben. Solche Änderungen sollten ohnehin vermieden werden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die `reading-flow`- und `reading-order`-Eigenschaften bieten eine viel bessere Möglichkeit, die Tab-Reihenfolge bei Bedarf zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Flex-Wertvergleich

In diesem Beispiel demonstrieren wir die Auswirkungen unterschiedlicher `reading-flow`-Werte auf einen Flex-Container mit umgekehrten Flex-Elementen.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zum Auswählen unterschiedlicher `reading-flow`-Werte und einen Wrapper-{{htmlelement("div")}}, der drei {{htmlelement("a")}}-Elemente enthält.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `flex`, um das `<div>` in einen Flex-Container zu verwandeln, und zeigen die Flex-Elemente in einer Zeile in umgekehrter DOM-Reihenfolge mit einem {{cssxref("flex-direction")}}-Wert von `row-reverse`. Anfangs setzen wir einen `reading-flow` von `normal`, damit die Elemente in der DOM-Quellenreihenfolge gelesen oder durch Tabben angesprochen werden.

Wir setzen auch einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element, damit es nach dem zweiten und dritten Element im Flexfluss angezeigt wird. Die resultierende visuelle Anordnung der Flex-Elemente von links nach rechts lautet "Element 1", "Element 3" und dann "Element 2", aber die DOM-Reihenfolge bleibt unverändert.

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

In unserem Skript greifen wir auf das `<select>`-Element und den Wrapper `<div>` zu und fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zum `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird dieser als `reading-flow`-Eigenschaftswert auf den Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo rendert wie folgt:

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

Versuchen Sie zunächst, mit `reading-flow: normal` durch die Links zu tabben. Die Tab-Reihenfolge ist "Element 1", "Element 2" und dann "Element 3", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den `reading-flow`-Wert und tabben Sie erneut durch die Links:

- Ein Wert von `flex-visual` bewirkt, dass die Elemente in der Reihenfolge "Element 1", "Element 3" und dann "Element 2" durchgetabbt werden, was der visuellen Anzeigeordnung entspricht, die sich aus den angewendeten Flexbox-Eigenschaften ergibt.
- Ein Wert von `flex-flow` bewirkt, dass die Elemente in der Reihenfolge "Element 2", "Element 3" und dann "Element 1" durchgetabbt werden, was der Richtung des `flex-flow` entspricht — in diesem Fall `row-reverse`. Hier ist die Tab-Reihenfolge das Gegenteil der Anzeigeordnung.

### Grid-Wertvergleich

In diesem Beispiel demonstrieren wir die Auswirkungen unterschiedlicher `reading-flow`-Werte auf einen Grid-Container.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zum Auswählen unterschiedlicher `reading-flow`-Werte und einen Wrapper-{{htmlelement("div")}}, der vier {{htmlelement("a")}}-Elemente enthält.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `grid`, um das `<div>` in einen Grid-Container zu verwandeln, und zeigen die Grid-Elemente in drei Spalten mit {{cssxref("grid-template-columns")}} an. Wir setzen auch {{cssxref("grid-template-areas")}}, um unterschiedliche Platzierungsbereiche in diesen Spalten zu beschreiben, und platzieren die `<a>`-Elemente in diesen Bereichen mithilfe von {{cssxref("grid-area")}}. Anfangs setzen wir einen `reading-flow` von `normal`, damit die Elemente in der Standard-DOM-Quellenreihenfolge gelesen oder durch Tabben angesprochen werden.

Schließlich setzen wir einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element; dies hat keinen Einfluss auf das Layout, da es die Grid-Bereichsplatzierung nicht überschreibt, aber es hat einen Effekt, wenn ein bestimmter `reading-flow`-Wert gesetzt ist, wie Sie später sehen werden.

Von links nach rechts gelesen, lautet die resultierende Anzeigeordnung der Grid-Elemente "Element D", "Element B", "Element C" und dann "Element A".

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

In unserem Skript greifen wir auf das `<select>`-Element und den Wrapper `<div>` zu und fügen einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener zum `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird dieser als `reading-flow`-Eigenschaftswert auf den Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo rendert wie folgt:

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

Versuchen Sie zunächst, mit `reading-flow: normal` durch die Links zu tabben. Die Tab-Reihenfolge ist "Element A", "Element B", "Element C" und "Element D", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den `reading-flow`-Wert und dann versuchen Sie erneut, durch die Links zu tabben:

- Ein Wert von `grid-rows` bewirkt, dass die Elemente in der visuellen Anzeigeordnung pro Zeile durchgetabbt werden. Das ist "Element D", "Element B", "Element C" und dann "Element A".
- Ein Wert von `grid-columns` bewirkt, dass die Elemente in der visuellen Anzeigeordnung pro Spalte durchgetabbt werden. Das ist "Element D", "Element C", "Element B" und dann "Element A".
- Ein Wert von `grid-order` bewirkt, dass die Elemente in DOM-Reihenfolge durchgetabbt werden, aber jegliche `order`-Wertänderungen berücksichtigt werden. Da wir `order: 1;` auf das erste `<a>`-Element gesetzt haben, ist die Tab-Reihenfolge "Element B", "Element C", "Element D" und dann "Element A".

### Anpassung der Lesereihenfolge auf Block-Containern

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

Wir setzen einen `reading-flow` von `source-order`, damit die Elemente in DOM-Quellenreihenfolge gelesen oder durch Tabben angesprochen werden, aber Änderungen an der Lesereihenfolge über {{cssxref("reading-order")}} zulässig sind. Wir setzen einen `reading-order`-Wert von `1` auf das erste `<a>`-Element.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Ergebnis

Die Demo rendert wie folgt:

{{EmbedLiveSample('Reading flow adjustment on block containers', '', '100px')}}

Versuchen Sie, durch die Links zu tabben: Die Tab-Reihenfolge ist "Element B", "Element C", "Element D" und dann "Element A" — die Reihenfolge der Elemente im DOM wird befolgt, aber Element A wurde in eine höhere Lesereihenfolge-Gruppe als die anderen gesetzt (der Standardwert für `reading-order` ist `0`), daher wird es zuletzt angegangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) via chrome.dev
