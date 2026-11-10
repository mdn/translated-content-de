---
title: "`reading-flow` CSS property"
short-title: reading-flow
slug: Web/CSS/Reference/Properties/reading-flow
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{SeeCompatTable}}

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`reading-flow`** lässt sich die {{Glossary("reading_order", "Lesereihenfolge")}} von Kindelementen eines {{Glossary("Block/CSS", "Block-")}}, [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) oder [Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout) ändern. Dies beeinflusst die Reihenfolge, in der die Elemente von einer Sprachausgabe wiedergegeben und bei sequenzieller Navigation, etwa beim Wechseln zwischen Links oder Schaltflächen mit der Tabulatortaste, angesteuert werden.

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

Die Eigenschaft `reading-flow` akzeptiert eines der folgenden Schlüsselwörter als Wert:

- `normal`
  - : Der Standardwert. Die Lesereihenfolge entspricht der Reihenfolge der Elemente im DOM.

- `flex-visual`
  - : Wirkt sich nur auf {{Glossary("Flex_Container", "Flex-Container")}} aus. Die Lesereihenfolge entspricht der visuellen Reihenfolge der `flex`-Elemente, wobei {{cssxref("writing-mode")}} berücksichtigt wird. Daher verläuft die Lesereihenfolge in einem englischsprachigen Dokument mit `flex-direction: row-reverse` und `reading-flow: flex-visual` von links nach rechts.

- `flex-flow`
  - : Wirkt sich nur auf Flex-Container aus. Die Lesereihenfolge folgt der durch {{cssxref("flex-flow")}} festgelegten Richtung.

- `grid-columns`
  - : Wirkt sich nur auf {{Glossary("Grid_Container", "Grid-Container")}} aus. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, Spalte für Spalte, unter Berücksichtigung des Schreibmodus.

- `grid-rows`
  - : Wirkt sich nur auf Grid-Container aus. Die Lesereihenfolge folgt der visuellen Reihenfolge der Grid-Elemente, Zeile für Zeile, unter Berücksichtigung des Schreibmodus.

- `grid-order`
  - : Wirkt sich nur auf Grid-Container aus. Wenn die Eigenschaft {{cssxref("order")}} auf eines der Kindelemente des Containers angewendet wird, folgt die Lesereihenfolge der dadurch geänderten Elementreihenfolge. Wird die Eigenschaft `order` nicht auf die Grid-Elemente angewendet, verhält sich `grid-order` wie `normal`.

- `source-order`
  - : Wirkt sich auf Grid-, Flex- und Block-Container aus. Hat für sich genommen keine Wirkung – die Lesereihenfolge des Containers entspricht weiterhin der Reihenfolge der Elemente im DOM –, ermöglicht aber, die Lesereihenfolge durch Festlegen der Eigenschaft {{cssxref("reading-order")}} für die Kindelemente des Containers zu ändern.

## Beschreibung

Die Eigenschaft `reading-flow` ändert die {{Glossary("reading_order", "Lesereihenfolge")}} von Elementen innerhalb eines {{Glossary("Block/CSS", "Block-")}}, [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) oder [Grid-Containers](/de/docs/Web/CSS/Guides/Grid_layout), wenn sie auf einen anderen Wert als `normal` gesetzt wird. Ein solcher Container wird als {{Glossary("Reading_order#reading_flow_container", "Reading-Flow-Container")}} bezeichnet.

Standardmäßig werden Webinhalte in der Reihenfolge vorgelesen, in der sie im DOM-Quelltext stehen. Im Allgemeinen sollte die Reihenfolge im Quelltext eine sinnvolle Lesereihenfolge für den Inhalt ergeben, die sich auch in dessen visueller Anordnung widerspiegelt. Manchmal weicht jedoch die visuelle Reihenfolge oder die Reihenfolge bei der Tabulatortasten-Navigation von der Reihenfolge im Quelltext ab. Werden beispielsweise mithilfe von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) verschiedene Flexbox- oder Grid-Layouts auf ein Dokument angewendet, um unterschiedlichen Geräten oder Anforderungen von Benutzern gerecht zu werden, kann sich die Anordnung des Inhalts je nach Viewport-Breite unterscheiden. In einem solchen Fall kann `reading-flow` dafür sorgen, dass die Lese- und Tabulatorreihenfolge der visuellen Anordnung entspricht.

In manchen Fällen möchten Sie die Lesereihenfolge innerhalb eines Reading-Flow-Containers genauer anpassen. Dazu können Sie die Eigenschaft {{cssxref("reading-order")}} für die Kindelemente des Containers festlegen. Die Elemente werden dadurch Ordnungsgruppen zugewiesen, die anschließend in numerischer Reihenfolge gelesen werden.

### Zusammenspiel mit `tabindex`

Wenn Kindelemente eines Reading-Flow-Containers, die normalerweise nicht fokussierbar sind, durch [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribute fokussierbar gemacht werden, ändern die Eigenschaften `reading-flow` und `reading-order` ihre Lesereihenfolge wie erwartet – genauso wie bei interaktiven Elementen wie {{htmlelement("a")}} oder {{htmlelement("button")}}.

Jeder Versuch, die Tabulatorreihenfolge des Inhalts eines Reading-Flow-Containers mit positiven `tabindex`-Werten zu ändern, wird jedoch ignoriert: Die Wirkung von `reading-flow` und `reading-order` hat Vorrang. Solche Werte sollten Sie ohnehin im Allgemeinen nicht verwenden; siehe [Verwenden Sie keine `tabindex`-Werte größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Die Eigenschaften `reading-flow` und `reading-order` bieten bei Bedarf eine deutlich bessere Möglichkeit, die Tabulatorreihenfolge zu ändern.

## Formale Definition

{{cssinfo}}

## Beispiele

### Vergleich der Flex-Werte

In diesem Beispiel zeigen wir, wie sich verschiedene `reading-flow`-Werte auf einen Flex-Container mit umgekehrt angeordneten Flex-Elementen auswirken.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zur Auswahl verschiedener `reading-flow`-Werte und ein umschließendes {{htmlelement("div")}}-Element mit drei {{htmlelement("a")}}-Elementen.

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

Mit dem {{cssxref("display")}}-Wert `flex` machen wir das `<div>` zu einem Flex-Container. Durch den {{cssxref("flex-direction")}}-Wert `row-reverse` zeigen wir die Flex-Elemente in einer Zeile in umgekehrter DOM-Reihenfolge an. Anfangs setzen wir `reading-flow` auf `normal`, sodass die Elemente in der Reihenfolge gelesen beziehungsweise mit der Tabulatortaste angesteuert werden, in der sie im DOM-Quelltext stehen.

Außerdem setzen wir für das erste `<a>`-Element den {{cssxref("order")}}-Wert `1`, sodass es im Flex-Flow nach dem zweiten und dritten Element angezeigt wird. Daraus ergibt sich von links nach rechts die visuelle Reihenfolge „Item 1“, „Item 3“, „Item 2“. Die DOM-Reihenfolge bleibt jedoch unverändert.

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

In unserem Skript holen wir Referenzen auf das `<select>`-Element und das umschließende `<div>`. Anschließend fügen wir dem `<select>`-Element einen Event-Listener für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis hinzu. Wenn ein neuer Wert ausgewählt wird, legen wir ihn als Wert der Eigenschaft `reading-flow` für das umschließende Element fest.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo wird wie folgt dargestellt:

{{EmbedLiveSample('Flex value comparison', '', '100px')}}

Versuchen Sie zunächst, bei `reading-flow: normal` mit der Tabulatortaste durch die Links zu navigieren. Die Tabulatorreihenfolge lautet „Item 1“, „Item 2“, „Item 3“, da dies der Reihenfolge der Elemente im DOM entspricht.

Ändern Sie nun den `reading-flow`-Wert und navigieren Sie erneut mit der Tabulatortaste durch die Links:

- Bei `flex-visual` lautet die Tabulatorreihenfolge „Item 1“, „Item 3“, „Item 2“. Dies entspricht der visuellen Reihenfolge, die sich aus den angewendeten Flexbox-Eigenschaften ergibt.
- Bei `flex-flow` lautet die Tabulatorreihenfolge „Item 2“, „Item 3“, „Item 1“. Dies entspricht der Richtung von `flex-flow` – in diesem Fall `row-reverse`. Die Tabulatorreihenfolge ist hier die Umkehrung der Anzeigereihenfolge.

### Vergleich der Grid-Werte

In diesem Beispiel zeigen wir, wie sich verschiedene `reading-flow`-Werte auf einen Grid-Container auswirken.

#### HTML

Das Markup enthält ein {{htmlelement("select")}}-Element zur Auswahl verschiedener `reading-flow`-Werte und ein umschließendes {{htmlelement("div")}}-Element mit vier {{htmlelement("a")}}-Elementen.

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

Mit dem {{cssxref("display")}}-Wert `grid` machen wir das `<div>` zu einem Grid-Container und zeigen die Grid-Elemente mithilfe von {{cssxref("grid-template-columns")}} in drei Spalten an. Außerdem legen wir mit {{cssxref("grid-template-areas")}} verschiedene Platzierungsbereiche in diesen Spalten fest und platzieren die `<a>`-Elemente mithilfe von {{cssxref("grid-area")}} darin. Anfangs setzen wir `reading-flow` auf `normal`, sodass die Elemente in der standardmäßigen Reihenfolge im DOM-Quelltext gelesen beziehungsweise mit der Tabulatortaste angesteuert werden.

Schließlich setzen wir für das erste `<a>`-Element den {{cssxref("order")}}-Wert `1`. Dies hat keine Auswirkungen auf das Layout, da es die Platzierung in den Grid-Bereichen nicht außer Kraft setzt. Wie Sie später sehen werden, wirkt es sich jedoch aus, wenn ein bestimmter `reading-flow`-Wert festgelegt wird.

Von links nach rechts ergibt sich für die Grid-Elemente die Anzeigereihenfolge „Item D“, „Item B“, „Item C“, „Item A“.

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

In unserem Skript holen wir Referenzen auf das `<select>`-Element und das umschließende `<div>`. Anschließend fügen wir dem `<select>`-Element einen Event-Listener für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis hinzu. Wenn ein neuer Wert ausgewählt wird, legen wir ihn als Wert der Eigenschaft `reading-flow` für das umschließende Element fest.

```js
const selectElem = document.getElementById("reading-flow");
const wrapperElem = document.querySelector(".wrapper");

selectElem.addEventListener("change", () => {
  wrapperElem.style.readingFlow = selectElem.value;
});
```

#### Ergebnis

Die Demo wird wie folgt dargestellt:

{{EmbedLiveSample('Grid value comparison', '', '100px')}}

Versuchen Sie zunächst, bei `reading-flow: normal` mit der Tabulatortaste durch die Links zu navigieren. Die Tabulatorreihenfolge lautet „Item A“, „Item B“, „Item C“, „Item D“, da dies der Reihenfolge der Elemente im DOM entspricht.

Ändern Sie nun den `reading-flow`-Wert und navigieren Sie erneut mit der Tabulatortaste durch die Links:

- Bei `grid-rows` folgt die Tabulatorreihenfolge der visuellen Anordnung Zeile für Zeile: „Item D“, „Item B“, „Item C“, „Item A“.
- Bei `grid-columns` folgt die Tabulatorreihenfolge der visuellen Anordnung Spalte für Spalte: „Item D“, „Item C“, „Item B“, „Item A“.
- Bei `grid-order` folgt die Tabulatorreihenfolge der DOM-Reihenfolge, berücksichtigt aber Änderungen durch `order`-Werte. Da für das erste `<a>`-Element `order: 1;` festgelegt ist, lautet die Tabulatorreihenfolge „Item B“, „Item C“, „Item D“, „Item A“.

### Anpassen der Lesereihenfolge in Block-Containern

In diesem Beispiel zeigen wir, wie sich der Wert `reading-flow: source-order` auf einen Block-Container auswirkt.

#### HTML

Das Markup enthält ein umschließendes {{htmlelement("div")}}-Element mit vier {{htmlelement("a")}}-Elementen.

```html
<div class="wrapper">
  <a class="a" href="#">Item A</a>
  <a class="b" href="#">Item B</a>
  <a class="c" href="#">Item C</a>
  <a class="d" href="#">Item D</a>
</div>
```

#### CSS

Wir setzen `reading-flow` auf `source-order`, sodass die Elemente in der Reihenfolge im DOM-Quelltext gelesen beziehungsweise mit der Tabulatortaste angesteuert werden. Über {{cssxref("reading-order")}} lässt sich die Lesereihenfolge jedoch ändern. Für das erste `<a>`-Element setzen wir `reading-order` auf `1`.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Ergebnis

Die Demo wird wie folgt dargestellt:

{{EmbedLiveSample('reading_order_adjustment_on_block_containers', '', '100px')}}

Navigieren Sie mit der Tabulatortaste durch die Links: Die Reihenfolge lautet „Item B“, „Item C“, „Item D“, „Item A“. Grundsätzlich wird die Reihenfolge der Elemente im DOM beibehalten. Da „Item A“ jedoch einer höheren Lesereihenfolge-Ordnungsgruppe zugewiesen wurde als die übrigen Elemente (der Standardwert von `reading-order` ist `0`), wird es zuletzt angesteuert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("reading-order")}}
- [Beispiele für CSS `reading-flow`](https://chrome.dev/reading-flow-examples/) auf chrome.dev
