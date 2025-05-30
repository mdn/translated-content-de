---
title: reading-flow
slug: Web/CSS/reading-flow
l10n:
  sourceCommit: 7dda25db814fed5ae7498baaee80009b3569a8dc
---

{{CSSRef}}

Die **`reading-flow`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, die {{Glossary("reading_order", "Lese-Reihenfolge")}} der Kindelemente eines {{Glossary("Block/CSS", "block")}}, [flex](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [grid](/de/docs/Web/CSS/CSS_grid_layout) Layouts zu ändern. Dies beeinflusst die Reihenfolge, in der sie für Sprachwiedergaben gerendert werden und bei sequenzieller Navigation, wie dem Tabben zu Links oder Schaltflächen, angesprungen werden.

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

Die `reading-flow` Eigenschaft kann einen der folgenden Schlüsselwörter als Wert annehmen:

- `normal`

  - : Der Standardwert. Die Lese-Reihenfolge folgt der Reihenfolge der Elemente im DOM.

- `flex-visual`

  - : Betrifft nur {{Glossary("Flex_Container", "Flex-Container")}}. Die Lese-Reihenfolge folgt der visuellen Reihenfolge der `flex` Elemente unter Berücksichtigung des {{cssxref("writing-mode")}}. Ein Dokument in Englisch mit `flex-direction: row-reverse` und `reading-flow: flex-visual` würde daher eine Lese-Reihenfolge von links nach rechts haben.

- `flex-flow`

  - : Betrifft nur Flex-Container. Die Lese-Reihenfolge folgt der Richtung von {{cssxref("flex-flow")}}.

- `grid-columns`

  - : Betrifft nur {{Glossary("Grid_Container", "Grid-Container")}}. Die Lese-Reihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, Spalte für Spalte, wobei der Schreibmodus berücksichtigt wird.

- `grid-rows`

  - : Betrifft nur Grid-Container. Die Lese-Reihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, Zeile für Zeile, wobei der Schreibmodus berücksichtigt wird.

- `grid-order`

  - : Betrifft nur Grid-Container. Falls die {{cssxref("order")}} Eigenschaft auf eines der Elemente des Containers angewendet wird, folgt die Lese-Reihenfolge der modifizierten Elementereihenfolge. Wird die `order` Eigenschaft nicht auf die Grid-Elemente angewendet, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Betrifft Grid-, Flex- und Block-Container. Hat keine Wirkung für sich — die Lese-Reihenfolge des Containers folgt weiterhin der Reihenfolge der Elemente im DOM — ermöglicht jedoch, dass die Lese-Reihenfolge durch Setzen der {{cssxref("reading-order")}} Eigenschaft auf die Kindelemente des Containers modifiziert wird.

## Beschreibung

Die `reading-flow` Eigenschaft ändert die {{Glossary("reading_order", "Lese-Reihenfolge")}} der Elemente innerhalb eines {{Glossary("Block/CSS", "block")}}, [flex](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [grid](/de/docs/Web/CSS/CSS_grid_layout) Containers, wenn sie auf einen anderen Wert als `normal` gesetzt wird. Ein solcher Container wird als {{Glossary("Reading_order#reading_flow_container", "reading flow container")}} bezeichnet.

Standardmäßig wird Webinhalt in der Quellreihenfolge des DOMs vorgelesen. In der Regel sollte die Quellreihenfolge eine sinnvolle Lese-Reihenfolge für den Inhalt ausdrücken, und dies sollte sich auch in der visuellen Reihenfolge im Inhaltslayout widerspiegeln. Manchmal unterscheidet sich jedoch die visuelle Reihenfolge oder Tab-Reihenfolge von der Quellreihenfolge. Beispielsweise, wenn mehrere Flexbox- oder Grid-Layouts auf ein Dokument über [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) angewendet werden, um unterschiedlichen Geräte- oder Benutzeranforderungen gerecht zu werden, kann sich die Inhaltsreihenfolge basierend auf der Ansichtsfensterbreite unterscheiden. In einem solchen Fall kann `reading-flow` verwendet werden, um sicherzustellen, dass die Lese- und Tab-Reihenfolge die visuelle Reihenfolge widerspiegelt.

In einigen Fällen möchten Sie die Lese-Reihenfolge innerhalb eines reading flow containers weiter verfeinern. Sie können die {{cssxref("reading-order")}} Eigenschaftswerte auf die Kindelemente des Containers anwenden und sie in ordinale Gruppen einteilen, die dann in numerischer Reihenfolge vorgelesen werden.

### Interaktion mit `tabindex`

Falls eine Gruppe von Kindelementen eines reading flow containers, die normalerweise nicht fokussierbar sind, anhand von [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attributen fokussierbar gemacht werden, wird ihre Lese-Reihenfolge wie erwartet durch die `reading-flow` und `reading-order` Eigenschaften geändert, genauso wie interaktive Elemente wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jedoch wird jeder Versuch, die Tab-Reihenfolge des Inhalts eines reading flow containers mit positiven `tabindex` Werten zu ändern, ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Sie sollten diese ohnehin generell nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die `reading-flow` und `reading-order` Eigenschaften bieten eine viel bessere Möglichkeit zur Änderung der Tab-Reihenfolge, wenn erforderlich.

## Formale Definition

{{cssinfo}}

## Beispiele

### Flex-Wertvergleich

In diesem Beispiel demonstrieren wir die Auswirkungen verschiedener `reading-flow` Werte auf einen Flex-Container mit umgekehrten Flex-Elementen.

#### HTML

Das Markup enthält ein {{htmlelement("select")}} Element zur Auswahl verschiedener `reading-flow` Werte und einen umschließenden {{htmlelement("div")}} mit drei {{htmlelement("a")}} Elementen.

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

Wir verwenden einen {{cssxref("display")}} Wert von `flex`, um das `<div>` in einen Flex-Container zu verwandeln und die Flex-Elemente in umgekehrter DOM-Reihenfolge mit einem {{cssxref("flex-direction")}} Wert von `row-reverse` in einer Reihe anzuzeigen. Anfangs setzen wir einen `reading-flow` Wert von `normal`, sodass die Elemente in der Quellordnungsreihenfolge des DOMs gelesen oder getabbt werden.

Wir setzen auch einen {{cssxref("order")}} Wert von `1` auf das erste `<a>` Element, um es nach dem zweiten und dritten Element im Flex-Fluss anzuzeigen. Die resultierende visuelle Reihenfolge der Flex-Elemente von links nach rechts ist "Item 1", "Item 3", dann "Item 2", aber die DOM-Reihenfolge bleibt unverändert.

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

In unserem Skript greifen wir auf Referenzen zu dem `<select>` Element und dem umschließenden `<div>` zu und fügen dem `<select>` Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow` Eigenschaftswert auf das umschließende Element gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo sieht so aus:

{{EmbedLiveSample('Flex-Wertvergleich', '', '100px')}}

Versuchen Sie zuerst, mit `reading-flow: normal` durch die Links zu tabben. Die Tab-Reihenfolge ist "Item 1", "Item 2", dann "Item 3", da dies der Reihenfolge der Elemente im DOM entspricht.

Versuchen Sie nun, den `reading-flow` Wert zu ändern und nochmals durch die Links zu tabben:

- Ein Wert von `flex-visual` führt dazu, dass die Elemente in der Reihenfolge "Item 1", "Item 3", dann "Item 2" durchgetabbt werden, was der visuellen Anzeigereihenfolge entspricht, die sich aus den angewendeten Flexbox-Eigenschaften ergibt.
- Ein Wert von `flex-flow` führt dazu, dass die Elemente in der Reihenfolge "Item 2", "Item 3", dann "Item 1" durchgetabbt werden, was der Richtung des `flex-flow` entspricht — in diesem Fall `row-reverse`. Hier ist die Tab-Reihenfolge das Gegenteil der Anzeigereihenfolge.

### Grid-Wertvergleich

In diesem Beispiel demonstrieren wir die Auswirkungen verschiedener `reading-flow` Werte auf einen Grid-Container.

#### HTML

Das Markup enthält ein {{htmlelement("select")}} Element zur Auswahl verschiedener `reading-flow` Werte und einen umschließenden {{htmlelement("div")}} mit vier {{htmlelement("a")}} Elementen.

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

Wir verwenden einen {{cssxref("display")}} Wert von `grid`, um das `<div>` in einen Grid-Container zu verwandeln und die Grid-Elemente in drei Spalten mit {{cssxref("grid-template-columns")}} anzuzeigen. Wir setzen auch {{cssxref("grid-template-areas")}}, um verschiedene Platzierungsbereiche in diesen Spalten zu beschreiben, und platzieren die `<a>` Elemente in diesen Bereichen mit {{cssxref("grid-area")}}. Anfangs setzen wir einen `reading-flow` Wert von `normal`, sodass die Elemente in der Standard-DOM-Quellordnungsreihenfolge gelesen oder getabbt werden.

Schließlich setzen wir einen {{cssxref("order")}} Wert von `1` auf das erste `<a>` Element; dies hat keine Auswirkung auf das Layout, da es die Gridbereichsplatzierung nicht überschreibt, aber es hat eine Auswirkung, wenn ein bestimmter `reading-flow` Wert eingestellt wird, wie Sie später sehen werden.

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

In unserem Skript greifen wir auf Referenzen zu dem `<select>` Element und dem umschließenden `<div>` zu und fügen dem `<select>` Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow` Eigenschaftswert auf das umschließende Element gesetzt.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo sieht so aus:

{{EmbedLiveSample('Grid-Wertvergleich', '', '100px')}}

Versuchen Sie zuerst, mit `reading-flow: normal` durch die Links zu tabben. Die Tab-Reihenfolge ist "Item A", "Item B", "Item C", und "Item D", da dies der Reihenfolge der Elemente im DOM entspricht.

Ändern Sie nun den `reading-flow` Wert und versuchen Sie, nochmals durch die Links zu tabben:

- Ein Wert von `grid-rows` führt dazu, dass die Elemente in der visuellen Anzeigereihenfolge nach Zeilen durchgetabbt werden. Dies ist "Item D", "Item B", "Item C", dann "Item A".
- Ein Wert von `grid-columns` führt dazu, dass die Elemente in der visuellen Anzeigereihenfolge nach Spalten durchgetabbt werden. Dies ist "Item D", "Item C", "Item B", dann "Item A".
- Ein Wert von `grid-order` führt dazu, dass die Elemente in der DOM-Reihenfolge durchgetabbt werden, aber berücksichtigt Änderungen am `order` Wert. Da wir `order: 1;` auf das erste `<a>` Element gesetzt haben, ist die Tab-Reihenfolge "Item B", "Item C", "Item D", dann "Item A".

### Anpassung der Lese-Reihenfolge bei Block-Containern

In diesem Beispiel demonstrieren wir die Auswirkungen des `reading-flow: source-order` Werts auf einen Block-Container.

#### HTML

Das Markup enthält einen umschließenden {{htmlelement("div")}} mit vier {{htmlelement("a")}} Elementen.

```html
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

Wir setzen einen `reading-flow` Wert von `source-order`, sodass die Elemente in der Quellreihenfolge des DOMs gelesen oder getabbt werden, aber Modifikationen der Lese-Reihenfolge über {{cssxref("reading-order")}} erlaubt sind. Wir setzen einen `reading-order` Wert von `1` auf das erste `<a>` Element.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Ergebnis

Die Demo sieht so aus:

{{EmbedLiveSample('Anpassung des Lese-Flusses bei Block-Containern', '', '100px')}}

Versuchen Sie, durch die Links zu tabben: Die Tab-Reihenfolge ist "Item B", "Item C", "Item D", dann "Item A" — die Reihenfolge der Elemente im DOM wird befolgt, jedoch wurde Item A in eine höhere Lese-Ordnung gebracht als die anderen (der Standardwert für `reading-order` ist `0`), daher wird es zuletzt getabbt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [CSS `reading-flow` Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
