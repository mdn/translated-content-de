---
title: reading-flow
slug: Web/CSS/reading-flow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`reading-flow`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Änderung der {{Glossary("reading_order", "Lesereihenfolge")}} von Kindelementen eines {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Layouts. Dies beeinflusst die Reihenfolge, in der sie für Sprachausgaben gerendert und bei sequenzieller Navigation, wie z.B. dem Tabben zu Links oder Schaltflächen, angesprochen werden.

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

Die `reading-flow`-Eigenschaft nimmt eines der folgenden Schlüsselwörter als Wert an:

- `normal`
  - : Der Standardwert. Die Lesereihenfolge folgt der Reihenfolge der Elemente im DOM.

- `flex-visual`
  - : Betrifft nur {{Glossary("Flex_Container", "Flex-Container")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der `flex`-Elemente unter Berücksichtigung des {{cssxref("writing-mode")}}. Ein Dokument in Englisch mit `flex-direction: row-reverse` und `reading-flow: flex-visual` würde daher eine Lesereihenfolge von links nach rechts haben.

- `flex-flow`
  - : Betrifft nur Flex-Container. Die Lesereihenfolge folgt der Richtung von {{cssxref("flex-flow")}}.

- `grid-columns`
  - : Betrifft nur {{Glossary("Grid_Container", "Grid-Container")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, Spalte für Spalte, unter Berücksichtigung des Schreibmodus.

- `grid-rows`
  - : Betrifft nur Grid-Container. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, Zeile für Zeile, unter Berücksichtigung des Schreibmodus.

- `grid-order`
  - : Betrifft nur Grid-Container. Wenn die {{cssxref("order")}}-Eigenschaft auf eines der Kindelemente des Containers angewandt wird, folgt die Lesereihenfolge der modifizierten Elementreihenfolge. Wird die `order`-Eigenschaft nicht auf die Grid-Elemente angewandt, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Betrifft Grid-, Flex- und Block-Container. Hat allein keine Wirkung — die Lesereihenfolge des Containers folgt weiterhin der Reihenfolge der Elemente im DOM — ermöglicht jedoch die Modifikation der Lesereihenfolge durch Setzen der {{cssxref("reading-order")}}-Eigenschaft auf die Kindelemente des Containers.

## Beschreibung

Die `reading-flow`-Eigenschaft modifiziert die {{Glossary("reading_order", "Lesereihenfolge")}} von Elementen innerhalb eines {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Containers, wenn sie auf einen anderen Wert als `normal` gesetzt ist. Ein solcher Container wird als {{Glossary("Reading_order#reading_flow_container", "Lesefluss-Container")}} bezeichnet.

Standardmäßig wird Webinhalt in der Quellreihenfolge des DOM vorgelesen. Im Allgemeinen sollte die Quellreihenfolge eine sinnvolle Lesereihenfolge für den Inhalt ausdrücken, die auch in der visuellen Anordnung des Inhalts widergespiegelt wird. Manchmal unterscheidet sich jedoch die visuelle Reihenfolge oder Tab-Reihenfolge von der Quellreihenfolge. Beispielsweise kann bei der Anwendung mehrerer Flexbox- oder Grid-Layouts auf ein Dokument über [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um unterschiedlichen Geräte- oder Nutzeranforderungen gerecht zu werden, die Inhaltsordnung je nach Ansichtsfeldbreite abweichen. In einem solchen Fall kann `reading-flow` verwendet werden, um sicherzustellen, dass die Lese- und Tab-Reihenfolge die visuelle Reihenfolge widerspiegelt.

In einigen Fällen möchten Sie die Lesereihenfolge innerhalb eines Lesefluss-Containers weiter anpassen. Sie können dazu die Werte der {{cssxref("reading-order")}}-Eigenschaft auf die Kindelemente des Containers anwenden und sie in ordinale Gruppen einteilen, die dann in numerischer Reihenfolge vorgelesen werden.

### Interaktion mit `tabindex`

Wenn eine Gruppe von Kindelementen eines Lesefluss-Containers, die normalerweise nicht fokussierbar sind, mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributen fokussierbar gemacht wird, wird ihre Lesereihenfolge erwartungsgemäß durch die Eigenschaften `reading-flow` und `reading-order` modifiziert, ebenso wie interaktive Elemente wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jeglicher Versuch, die Tab-Reihenfolge des Inhalts eines Lesefluss-Containers durch positive `tabindex`-Werte zu ändern, wird jedoch ignoriert — überschrieben von den Effekten von `reading-flow` und `reading-order`. Sie sollten diese ohnehin nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten eine viel bessere Möglichkeit, die Tab-Reihenfolge bei Bedarf zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Vergleich der Flex-Werte

In diesem Beispiel demonstrieren wir die Effekte verschiedener `reading-flow`-Werte auf einen Flex-Container mit umgekehrten Flex-Elementen.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zur Auswahl verschiedener `reading-flow`-Werte und ein Wrapper-{{htmlelement("div")}} mit drei {{htmlelement("a")}}-Elementen.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `flex`, um das `<div>` in einen Flex-Container zu verwandeln, und zeigen die Flex-Elemente in einer Zeile in umgekehrter DOM-Reihenfolge mit einem {{cssxref("flex-direction")}}-Wert von `row-reverse` an. Anfangs setzen wir einen `reading-flow`-Wert von `normal`, sodass die Elemente in DOM-Quellreihenfolge gelesen oder durchlaufen werden.

Wir setzen auch einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element, um es nach dem zweiten und dritten Element im Flex-Fluss anzuzeigen. Die resultierende visuelle Reihenfolge der Flex-Elemente von links nach rechts ist "Element 1", "Element 3", dann "Element 2", aber die DOM-Reihenfolge bleibt unverändert.

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

In unserem Skript holen wir Referenzen zum `<select>`-Element und Wrapper-`<div>`, dann fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Listener zum `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird dieser als `reading-flow`-Eigenschaftswert auf den Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo rendert sich wie folgt:

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

Versuchen Sie zuerst, mit `reading-flow: normal` durch die Links zu tabben. Die Tab-Reihenfolge ist "Element 1", "Element 2" und dann "Element 3", da dies die Reihenfolge der Elemente im DOM ist.

Versuchen Sie nun, den `reading-flow`-Wert zu ändern und erneut durch die Links zu tabben:

- Ein Wert von `flex-visual` führt dazu, dass die Elemente in der Reihenfolge "Element 1", "Element 3", dann "Element 2" durchgetabt werden, was der visuellen Anzeigereihenfolge entspricht, die sich aus den angewendeten Flexbox-Eigenschaften ergibt.
- Ein Wert von `flex-flow` führt dazu, dass die Elemente in der Reihenfolge "Element 2", "Element 3", dann "Element 1" durchgetabt werden, was der Richtung des `flex-flow` — in diesem Fall `row-reverse` — entspricht. Hier ist die Tab-Reihenfolge das Gegenteil der Anzeigereihenfolge.

### Vergleich der Grid-Werte

In diesem Beispiel demonstrieren wir die Effekte verschiedener `reading-flow`-Werte auf einen Grid-Container.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zur Auswahl verschiedener `reading-flow`-Werte und ein Wrapper-{{htmlelement("div")}} mit vier {{htmlelement("a")}}-Elementen.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `grid`, um das `<div>` in einen Grid-Container zu verwandeln, und zeigen die Grid-Elemente in drei Spalten mit {{cssxref("grid-template-columns")}} an. Wir setzen auch {{cssxref("grid-template-areas")}} fest, um verschiedene Platzierungsbereiche in diesen Spalten zu beschreiben, und platzieren die `<a>`-Elemente in diesen Bereichen mit {{cssxref("grid-area")}}. Anfangs setzen wir einen `reading-flow`-Wert von `normal`, sodass die Elemente in der Standard-DOM-Quellreihenfolge gelesen oder durchlaufen werden.

Abschließend setzen wir einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element; dies hat keinen Einfluss auf das Layout, da es die Grid-Bereichsplatzierung nicht überschreibt, aber es hat einen Effekt, wenn ein bestimmter `reading-flow`-Wert gesetzt wird, wie Sie später sehen werden.

Von links nach rechts gelesen ist die resultierende Anzeigereihenfolge der Grid-Elemente "Element D", "Element B", "Element C", dann "Element A".

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

In unserem Skript holen wir Referenzen zum `<select>`-Element und Wrapper-`<div>`, dann fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Listener zum `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird dieser als `reading-flow`-Eigenschaftswert auf den Wrapper gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo rendert sich wie folgt:

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

Versuchen Sie zuerst, mit `reading-flow: normal` durch die Links zu tabben. Die Tab-Reihenfolge ist "Element A", "Element B", "Element C", und "Element D", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den `reading-flow`-Wert und versuchen Sie dann erneut, durch die Links zu tabben:

- Ein Wert von `grid-rows` sorgt dafür, dass die Elemente in der visuellen Anzeigereihenfolge nach Reihen durchgetabt werden. Dies ist "Element D", "Element B", "Element C", dann "Element A".
- Ein Wert von `grid-columns` sorgt dafür, dass die Elemente in der visuellen Anzeigereihenfolge nach Spalten durchgetabt werden. Dies ist "Element D", "Element C", "Element B", dann "Element A".
- Ein Wert von `grid-order` sorgt dafür, dass die Elemente in DOM-Reihenfolge durchgetabt werden, berücksichtigt aber Änderungen der `order`-Werte. Da wir `order: 1;` auf das erste `<a>`-Element gesetzt haben, ist die Tab-Reihenfolge "Element B", "Element C", "Element D", dann "Element A".

### Anpassung der Lesereihenfolge bei Block-Containern

In diesem Beispiel demonstrieren wir die Effekte des Wertes `reading-flow: source-order` auf einen Block-Container.

#### HTML

Das Markup enthält ein Wrapper-{{htmlelement("div")}} mit vier {{htmlelement("a")}}-Elementen.

```html
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

Wir setzen einen `reading-flow`-Wert von `source-order`, sodass die Elemente in DOM-Quellreihenfolge gelesen oder durchlaufen werden, aber Änderungen an der Lesereihenfolge über {{cssxref("reading-order")}} erlaubt sind. Wir setzen einen `reading-order`-Wert von `1` auf das erste `<a>`-Element.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Ergebnis

Die Demo rendert sich wie folgt:

{{EmbedLiveSample('Reading flow adjustment on block containers', '', '100px')}}

Versuchen Sie, durch die Links zu tabben: Die Tab-Reihenfolge ist "Element B", "Element C", "Element D", dann "Element A" — die Reihenfolge der Elemente im DOM wird beibehalten, aber Element A wurde in eine höhere Lesereihenfolgen-Ordinalsgruppe als die anderen (der Standardwert für `reading-order` ist `0`) gesetzt, daher wird es zuletzt getabt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
