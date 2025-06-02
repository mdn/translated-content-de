---
title: reading-flow
slug: Web/CSS/reading-flow
l10n:
  sourceCommit: 295ba1fd21904ca1abc56ff7f120a398d411fe87
---

{{CSSRef}}{{SeeCompatTable}}

Die **`reading-flow`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, die {{Glossary("reading_order", "Lesereihenfolge")}} der untergeordneten Elemente eines {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Layouts zu verändern. Dies beeinflusst die Reihenfolge, in der sie in Sprache wiedergegeben und bei der sequenziellen Navigation, wie beim Tabben zu Links oder Schaltflächen, angesteuert werden.

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

  - : Beeinflusst nur {{Glossary("Flex_Container", "Flex-Container")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der `flex`-Items unter Berücksichtigung des {{cssxref("writing-mode")}}. Ein Dokument in Englisch mit `flex-direction: row-reverse` und `reading-flow: flex-visual` hätte demnach eine Lesereihenfolge von links nach rechts.

- `flex-flow`

  - : Beeinflusst nur Flex-Container. Die Lesereihenfolge folgt der {{cssxref("flex-flow")}}-Richtung.

- `grid-columns`

  - : Beeinflusst nur {{Glossary("Grid_Container", "Grid-Container")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Items, Spalte für Spalte, unter Berücksichtigung des Schreibmodus.

- `grid-rows`

  - : Beeinflusst nur Grid-Container. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Items, Zeile für Zeile, unter Berücksichtigung des Schreibmodus.

- `grid-order`

  - : Beeinflusst nur Grid-Container. Wenn die {{cssxref("order")}}-Eigenschaft auf eines der Kinder des Containers angewendet wird, folgt die Lesereihenfolge der modifizierten Item-Reihenfolge. Wenn die `order`-Eigenschaft nicht auf die Grid-Items angewendet wird, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Beeinflusst Grid-, Flex- und Block-Container. Hat allein keine Wirkung — die Lesereihenfolge des Containers folgt weiterhin der Reihenfolge der Elemente im DOM — erlaubt jedoch, die Lesereihenfolge zu modifizieren, indem die {{cssxref("reading-order")}}-Eigenschaft auf die Kinder des Containers gesetzt wird.

## Beschreibung

Die `reading-flow`-Eigenschaft modifiziert die {{Glossary("reading_order", "Lesereihenfolge")}} von Elementen innerhalb eines {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Containers, wenn sie auf einen anderen Wert als `normal` gesetzt ist. Ein solcher Container wird als {{Glossary("Reading_order#reading_flow_container", "Reading Flow Container")}} bezeichnet.

Standardmäßig wird Webinhalt in der Reihenfolge gelesen, in der er im DOM vorliegt. Generell sollte die Quellreihenfolge eine sinnvolle Lesereihenfolge für den Inhalt darstellen, und dies sollte auch durch die visuelle Reihenfolge im Layout des Inhalts widergespiegelt werden. Manchmal unterscheidet sich jedoch die visuelle Reihenfolge oder die Tabulatorreihenfolge von der Quellreihenfolge. Zum Beispiel, wenn mehrere Flexbox- oder Grid-Layouts auf ein Dokument über [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) angewendet werden, um verschiedene Geräte- oder Benutzeranforderungen zu erfüllen, kann sich die Inhaltsreihenfolge je nach Ansichtsfensterbreite unterscheiden. In einem solchen Fall kann `reading-flow` verwendet werden, um sicherzustellen, dass die Lese- und Tabulatorreihenfolge die visuelle Reihenfolge widerspiegelt.

In einigen Fällen möchten Sie die Lesereihenfolge innerhalb eines Reading-Flow-Containers weiter verfeinern. Sie können {{cssxref("reading-order")}}-Eigenschaftswerte auf die Kinder des Containers anwenden, indem Sie sie in ordinale Gruppen einordnen, die dann in numerischer Reihenfolge gelesen werden.

### Interaktion mit `tabindex`

Wenn eine Menge von Kind-Elementen in einem Reading-Flow-Container, die normalerweise nicht fokussierbar sind, durch [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribute fokussierbar gemacht werden, wird ihre Lesereihenfolge wie erwartet durch die `reading-flow`- und `reading-order`-Eigenschaften modifiziert, auf die gleiche Weise wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jede Bemühung, die Tabulatorreihenfolge des Inhalts eines Reading-Flow-Containers mit positiven `tabindex`-Werten zu ändern, wird jedoch ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Sie sollten diese ohnehin nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die `reading-flow`- und `reading-order`-Eigenschaften bieten eine wesentlich bessere Möglichkeit, die Tabulatorreihenfolge bei Bedarf zu modifizieren.

## Formale Definition

{{cssinfo}}

## Beispiele

### Vergleich der Flex-Werte

In diesem Beispiel zeigen wir die Effekte verschiedener `reading-flow`-Werte auf einen Flex-Container mit umgekehrten Flex-Elementen.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zur Auswahl verschiedener `reading-flow`-Werte und ein umschließendes {{htmlelement("div")}}, das drei {{htmlelement("a")}}-Elemente umfasst.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `flex`, um das `<div>` in einen Flex-Container zu verwandeln, und zeigen die Flex-Elemente in einer Reihe in umgekehrter DOM-Reihenfolge mit einem {{cssxref("flex-direction")}}-Wert von `row-reverse`. Anfangs setzen wir einen `reading-flow` von `normal`, sodass die Elemente in der DOM-Quellenreihenfolge gelesen oder durchgetabbt werden.

Wir setzen auch einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element, um es im Flex-Flow nach dem zweiten und dritten Element anzuzeigen. Die resultierende visuelle Reihenfolge der Flex-Elemente von links nach rechts ist "Item 1", "Item 3", dann "Item 2", aber die DOM-Reihenfolge bleibt unverändert.

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

In unserem Skript holen wir Referenzen zum `<select>`-Element und dem umschließenden `<div>`, dann fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Eventlistener zum `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow`-Eigenschaftswert auf dem Umschlag gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo rendert so:

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

Versuchen Sie zunächst, mit `reading-flow: normal` durch die Links zu tabben. Die Tabulatorreihenfolge ist "Item 1", "Item 2", dann "Item 3", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den `reading-flow`-Wert und tabben Sie erneut durch die Links:

- Ein Wert von `flex-visual` verursacht, dass die Elemente in der Reihenfolge "Item 1", "Item 3", dann "Item 2" durchgetabbt werden, was der visuellen Anzeigeordnung entspricht, die durch die angewandten Flexbox-Eigenschaften resultiert.
- Ein Wert von `flex-flow` verursacht, dass die Elemente in der Reihenfolge "Item 2", "Item 3", dann "Item 1" durchgetabbt werden, was der Richtung des `flex-flow` entspricht — in diesem Fall `row-reverse`. Hier ist die Tabulatorreihenfolge die umgekehrte der Anzeigeordnung.

### Vergleich der Grid-Werte

In diesem Beispiel zeigen wir die Effekte verschiedener `reading-flow`-Werte auf einen Grid-Container.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zur Auswahl verschiedener `reading-flow`-Werte und ein umschließendes {{htmlelement("div")}}, das vier {{htmlelement("a")}}-Elemente umfasst.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `grid`, um das `<div>` in einen Grid-Container zu verwandeln, und zeigen die Grid-Elemente in drei Spalten mit {{cssxref("grid-template-columns")}}. Wir setzen auch {{cssxref("grid-template-areas")}}, um verschiedene Platzierungsbereiche in diesen Spalten zu beschreiben, und platzieren die `<a>`-Elemente in diesen Bereichen mit {{cssxref("grid-area")}}. Anfangs setzen wir einen `reading-flow` von `normal`, sodass die Elemente in der Standard-DOM-Quellenreihenfolge gelesen oder durchgetabbt werden.

Schließlich setzen wir einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element; dies hat keine Auswirkung auf das Layout, da es die Grid-Bereichsplatzierung nicht überschreibt, hat aber eine Auswirkung, wenn ein bestimmter `reading-flow`-Wert gesetzt ist, wie Sie später sehen werden.

Von links nach rechts gelesen, ist die resultierende Anzeigeordnung der Grid-Elemente "Item D", "Item B", "Item C", dann "Item A".

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

In unserem Skript holen wir Referenzen zum `<select>`-Element und dem umschließenden `<div>`, dann fügen wir einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Eventlistener zum `<select>`-Element hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow`-Eigenschaftswert auf dem Umschlag gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo rendert so:

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

Versuchen Sie zunächst, mit `reading-flow: normal` durch die Links zu tabben. Die Tabulatorreihenfolge ist "Item A", "Item B", "Item C", und "Item D", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den `reading-flow`-Wert und dann tabben Sie erneut durch die Links:

- Ein Wert von `grid-rows` verursacht, dass die Elemente in der visuellen Anzeigeordnung pro Reihe durchgetabbt werden. Dies ist "Item D", "Item B", "Item C", dann "Item A".
- Ein Wert von `grid-columns` verursacht, dass die Elemente in der visuellen Anzeigeordnung pro Spalte durchgetabbt werden. Dies ist "Item D", "Item C", "Item B", dann "Item A".
- Ein Wert von `grid-order` verursacht, dass die Elemente in der DOM-Reihenfolge durchgetabbt werden, berücksichtigt aber alle `order`-Wertänderungen. Da wir `order: 1;` auf das erste `<a>`-Element gesetzt haben, ist die Tabulatorreihenfolge "Item B", "Item C", "Item D", dann "Item A".

### Anpassung der Lesereihenfolge bei Block-Containern

In diesem Beispiel zeigen wir die Effekte des `reading-flow: source-order`-Werts auf einen Block-Container.

#### HTML

Das Markup enthält ein umschließendes {{htmlelement("div")}}, das vier {{htmlelement("a")}}-Elemente umfasst.

```html
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

Wir setzen einen `reading-flow` von `source-order`, sodass die Elemente in der DOM-Quellenreihenfolge gelesen oder durchgetabbt werden, jedoch Anpassungen an der Lesereihenfolge über {{cssxref("reading-order")}} erlaubt sind. Wir setzen einen `reading-order`-Wert von `1` auf das erste `<a>`-Element.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Ergebnis

Die Demo rendert so:

{{EmbedLiveSample('Reading flow adjustment on block containers', '', '100px')}}

Versuchen Sie, durch die Links zu tabben: die Tabulatorreihenfolge ist "Item B", "Item C", "Item D", dann "Item A" — die Reihenfolge der Elemente im DOM wird befolgt, aber Item A wurde in eine höhere Lesereihenfolge-Gruppenordnung als die anderen platziert (der Standardwert von `reading-order` ist `0`), daher wird es zuletzt getabbt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
