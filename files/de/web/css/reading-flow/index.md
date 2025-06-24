---
title: reading-flow
slug: Web/CSS/reading-flow
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{SeeCompatTable}}

Die **`reading-flow`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Modifikation der {{Glossary("reading_order", "Lesereihenfolge")}} von Kind-Elementen in einem {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Layout. Dies beeinflusst die Reihenfolge, in der sie für Sprachausgaben gerendert und bei sequentieller Navigation wie dem Springen zu Links oder Schaltflächen mit der Tabulatortaste navigiert werden.

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

Die `reading-flow`-Eigenschaft nimmt einen der folgenden Schlüsselwörter als Wert:

- `normal`

  - : Der Standardwert. Die Lesereihenfolge folgt der Reihenfolge der Elemente im DOM.

- `flex-visual`

  - : Betrifft nur {{Glossary("Flex_Container", "flex containers")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der `flex`-Elemente und berücksichtigt dabei das {{cssxref("writing-mode")}}. Ein Dokument auf Englisch mit `flex-direction: row-reverse` und `reading-flow: flex-visual` eingestellt, hätte somit eine Lesereihenfolge von links nach rechts.

- `flex-flow`

  - : Betrifft nur Flex-Container. Die Lesereihenfolge folgt der {{cssxref("flex-flow")}}-Richtung.

- `grid-columns`

  - : Betrifft nur {{Glossary("Grid_Container", "grid containers")}}. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, Spalte für Spalte, unter Berücksichtigung des Schreibmodus.

- `grid-rows`

  - : Betrifft nur Grid-Container. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, Zeile für Zeile, unter Berücksichtigung des Schreibmodus.

- `grid-order`

  - : Betrifft nur Grid-Container. Wenn die {{cssxref("order")}}-Eigenschaft auf eines der Kind-Elemente des Containers angewendet wird, folgt die Lesereihenfolge der modifizierten Elementreihenfolge. Wenn die `order`-Eigenschaft nicht auf die Grid-Elemente angewendet wird, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Betrifft Grid-, Flex- und Block-Container. Hat keinen Effekt allein — die Lesereihenfolge des Containers folgt weiterhin der Reihenfolge der Elemente im DOM — erlaubt jedoch, die Lesereihenfolge durch Setzen der {{cssxref("reading-order")}}-Eigenschaft auf den Kind-Elementen des Containers zu modifizieren.

## Beschreibung

Die `reading-flow`-Eigenschaft modifiziert die {{Glossary("reading_order", "Lesereihenfolge")}} von Elementen innerhalb eines {{Glossary("Block/CSS", "Block")}}-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- oder [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Containers, wenn sie auf einen anderen Wert als `normal` gesetzt ist. Ein solcher Container wird als {{Glossary("Reading_order#reading_flow_container", "Leseflusscontainer")}} bezeichnet.

Standardmäßig wird Webinhalt in der Reihenfolge der DOM-Quelldatei vorgelesen. Normalerweise sollte die Quelldatei eine sinnvolle Lesereihenfolge für den Inhalt ausdrücken, und diese sollte auch in der visuellen Reihenfolge im Inhaltslayout widergespiegelt werden. Manchmal jedoch unterscheidet sich die visuelle Reihenfolge oder Tabulatorreihenfolge von der Quellreihenfolge. Beispielsweise, wenn mehrere Flexbox- oder Grid-Layouts mithilfe von [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) auf ein Dokument angewendet werden, um unterschiedlichen Geräte- oder Benutzeranforderungen gerecht zu werden, kann die Inhaltsreihenfolge basierend auf der Viewport-Breite variieren. In einem solchen Fall kann der `reading-flow` verwendet werden, um sicherzustellen, dass die Lese- und Tabulatorreihenfolge die visuelle Reihenfolge widerspiegelt.

In einigen Fällen möchten Sie vielleicht die Lesereihenfolge innerhalb eines Leseflusscontainers weiter verfeinern. Sie können die {{cssxref("reading-order")}}-Eigenschaft auf die Kind-Elemente des Containers anwenden, um sie in ordinale Gruppen zu setzen, die dann in numerischer Reihenfolge vorgelesen werden.

### Interaktion mit `tabindex`

Wenn eine Gruppe von Kind-Elementen eines Leseflusscontainers, die normalerweise nicht fokussierbar sind, mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributen fokussierbar gemacht wird, wird ihre Lesereihenfolge modifiziert, wie es durch die Eigenschaften `reading-flow` und `reading-order` erwartet wird, genau wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jeder Versuch jedoch, die Tabulatorreihenfolge des Inhalts eines Leseflusscontainers mithilfe positiver `tabindex`-Werte zu ändern, wird ignoriert — überschrieben durch die Effekte von `reading-flow` und `reading-order`. Sie sollten diese sowieso nicht verwenden; siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten eine viel bessere Möglichkeit, die Tabulatorreihenfolge zu modifizieren, falls erforderlich.

## Formale Definition

{{cssinfo}}

## Beispiele

### Vergleich von Flex-Werten

In diesem Beispiel demonstrieren wir die Effekte verschiedener `reading-flow`-Werte auf einen Flex-Container mit umgekehrten Flex-Elementen.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zum Auswählen verschiedener `reading-flow`-Werte und ein Wrapper-{{htmlelement("div")}} mit drei {{htmlelement("a")}}-Elementen.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `flex`, um das `<div>` in einen Flex-Container zu transformieren, und zeigen die Flex-Elemente in einer Zeile in umgekehrter DOM-Reihenfolge mit einem {{cssxref("flex-direction")}}-Wert von `row-reverse` an. Anfangs setzen wir einen `reading-flow` von `normal`, sodass die Elemente in der DOM-Quelldatei-Reihenfolge gelesen oder durchgetabbed werden.

Wir setzen auch einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element, um es nach dem zweiten und dritten Element im Flex-Fluss anzuzeigen. Die resultierende visuelle Reihenfolge der Flex-Elemente von links nach rechts ist "Item 1", "Item 3", dann "Item 2", aber die DOM-Reihenfolge bleibt unverändert.

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

In unserem Skript holen wir Referenzen zum `<select>`-Element und Wrapper-`<div>`, und fügen dann dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow`-Eigenschaftswert auf dem Wrapper gesetzt.

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

Versuchen Sie zuerst, mit `reading-flow: normal` durch die Links zu tabben. Die Tabulatorreihenfolge ist "Item 1", "Item 2", dann "Item 3", da dies die Reihenfolge der Elemente im DOM ist.

Versuchen Sie nun, den `reading-flow`-Wert zu ändern und erneut durch die Links zu tabben:

- Ein Wert von `flex-visual` bewirkt, dass die Elemente in der Reihenfolge "Item 1", "Item 3", dann "Item 2" durchgetabbed werden, was der visuellen Anzeigereihenfolge entspricht, die sich aus den angewendeten Flexbox-Eigenschaften ergibt.
- Ein Wert von `flex-flow` bewirkt, dass die Elemente in der Reihenfolge "Item 2", "Item 3", dann "Item 1" durchgetabbed werden, was der Richtung des `flex-flow` entspricht — in diesem Fall `row-reverse`. Hier ist die Tabulatorreihenfolge das Gegenteil der Anzeigereihenfolge.

### Vergleich von Grid-Werten

In diesem Beispiel demonstrieren wir die Effekte verschiedener `reading-flow`-Werte auf einen Grid-Container.

#### HTML

Das Markup beinhaltet ein {{htmlelement("select")}}-Element für die Auswahl verschiedener `reading-flow`-Werte und ein Wrapper-{{htmlelement("div")}} mit vier {{htmlelement("a")}}-Elementen.

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

Wir verwenden einen {{cssxref("display")}}-Wert von `grid`, um das `<div>` in einen Grid-Container zu transformieren, und stellen die Grid-Elemente in drei Spalten mit {{cssxref("grid-template-columns")}} dar. Wir setzen auch {{cssxref("grid-template-areas")}}, um verschiedene Platzierungsbereiche in diesen Spalten zu beschreiben, und platzieren die `<a>`-Elemente in diesen Bereichen mithilfe von {{cssxref("grid-area")}}. Anfangs setzen wir einen `reading-flow` von `normal`, sodass die Elemente in der Standard-DOM-Quelldateireihenfolge gelesen oder durchgetabbed werden.

Schließlich setzen wir einen {{cssxref("order")}}-Wert von `1` auf das erste `<a>`-Element; dies hat keine Auswirkungen auf das Layout, da es die Grid-Bereichsplatzierung nicht überschreibt, aber es hat eine Wirkung, wenn ein bestimmter `reading-flow`-Wert gesetzt ist, wie Sie später sehen werden.

Lesend von links nach rechts ist die resultierende Anzeigereihenfolge der Grid-Elemente "Item D", "Item B", "Item C" und dann "Item A".

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

In unserem Skript holen wir Referenzen zum `<select>`-Element und Wrapper-`<div>`, und fügen dann dem `<select>`-Element einen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener hinzu. Wenn ein neuer Wert ausgewählt wird, wird er als `reading-flow`-Eigenschaftswert auf dem Wrapper gesetzt.

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

Versuchen Sie zuerst, mit `reading-flow: normal` durch die Links zu tabben. Die Tabulatorreihenfolge ist "Item A", "Item B", "Item C" und "Item D", da dies die Reihenfolge der Elemente im DOM ist.

Ändern Sie nun den `reading-flow`-Wert und versuchen Sie dann erneut, durch die Links zu tabben:

- Ein Wert von `grid-rows` bewirkt, dass die Elemente in der visuellen Anzeigereihenfolge nach Zeile durchgetabbed werden. Dies ist "Item D", "Item B", "Item C" und dann "Item A".
- Ein Wert von `grid-columns` bewirkt, dass die Elemente in der visuellen Anzeigereihenfolge nach Spalte durchgetabbed werden. Dies ist "Item D", "Item C", "Item B" und dann "Item A".
- Ein Wert von `grid-order` bewirkt, dass die Elemente in DOM-Reihenfolge durchgetabbed werden, wobei alle `order`-Wertänderungen berücksichtigt werden. Da wir `order: 1;` auf das erste `<a>`-Element gesetzt haben, ist die Tabulatorreihenfolge "Item B", "Item C", "Item D" und dann "Item A".

### Anpassung der Lesereihenfolge auf Block-Containern

In diesem Beispiel demonstrieren wir die Effekte des `reading-flow: source-order`-Wertes auf einen Block-Container.

#### HTML

Das Markup beinhaltet ein Wrapper-{{htmlelement("div")}} mit vier {{htmlelement("a")}}-Elementen.

```html
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

Wir setzen einen `reading-flow` von `source-order`, so dass die Elemente in der DOM-Quelle-Reihenfolge gelesen oder durchgetabbed werden, aber Modifikationen der Lesereihenfolge über {{cssxref("reading-order")}} erlaubt sind. Wir setzen einen `reading-order`-Wert von `1` auf das erste `<a>`-Element.

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

Versuchen Sie, durch die Links zu tabben: Die Tabulatorreihenfolge ist "Item B", "Item C", "Item D" und dann "Item A" — die Reihenfolge der Elemente im DOM wird befolgt, aber Item A wurde in eine höhere Lesereihenfolge in der ordinalen Gruppe als die anderen gesetzt (der Standard-`reading-order`-Wert ist `0`), daher wird es zuletzt getabbed.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [CSS `reading-flow`-Beispiele](https://chrome.dev/reading-flow-examples/) über chrome.dev
