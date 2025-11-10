---
title: Anordnung von Flex-Elementen
slug: Web/CSS/Guides/Flexible_box_layout/Ordering_items
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Layout-Methoden wie Flexbox und Grid ermöglichen die Steuerung der Reihenfolge von Inhalten. In diesem Artikel werden wir uns Methoden ansehen, wie Sie die visuelle Reihenfolge Ihrer Inhalte bei der Verwendung von Flexbox ändern können. Wir werden auch betrachten, wie die Neuordnung von Elementen die Barrierefreiheit beeinflusst.

## Umkehren der Anzeige der Elemente

Die {{cssxref("flex-direction")}}-Eigenschaft kann einen von vier Werten annehmen:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

Die ersten beiden Werte belassen die Elemente in der gleichen Reihenfolge, in der sie im Quelltext des Dokuments erscheinen, und zeigen sie sequentiell von der Startlinie an.

![Die Elemente werden in einer Reihe angezeigt, die links beginnt.](basics1.png)

![Die Elemente werden in einer Spalte angezeigt, die von oben beginnt.](align10.png)

Die zweiten beiden Werte kehren die Elemente um, indem sie die Start- und Endlinien wechseln.

![Die Elemente werden in umgekehrter Reihenfolge dargestellt, beginnend an der rechten Linie.](align9.png)

![Die Elemente werden in einer Spalte in umgekehrter Reihenfolge angezeigt, beginnend an der unteren Linie.](align11.png)

Denken Sie daran, dass sich die Startlinie auf Schreibrichtungen bezieht. Die oben gezeigten Beispiele für Zeilen demonstrieren, wie `row` und `row-reverse` in einer von links nach rechts verlaufenden Sprache wie Englisch funktionieren. Wenn Sie in einer von rechts nach links verlaufenden Sprache wie Arabisch arbeiten, würde `row` rechts beginnen, `row-reverse` links.

![Flex-Container mit arabischen Buchstaben, die zeigen, wie die Zeile von der rechten Seite und row-reverse von der linken Seite beginnt.](order-rtl.png)

Dies kann wie eine einfache Methode erscheinen, um Dinge in umgekehrter Reihenfolge darzustellen. Sie sollten sich jedoch bewusst sein, dass die Elemente nur _visuell_ in umgekehrter Reihenfolge angezeigt werden. Die Neuordnungsfähigkeiten des Flex-Layouts betreffen nur die visuelle Darstellung. Die Tab-Reihenfolge und die Sprachreihenfolge folgen der Reihenfolge des Quellcodes. Das bedeutet, dass nur die visuelle Präsentation sich ändert; die Quellreihenfolge bleibt gleich, was eine andere Benutzererfahrung für nicht-CSS-basierte Benutzeragenten (denken Sie an Siri oder Alexa) und Benutzer von unterstützender Technologie bietet. Wenn Sie die Reihenfolge einer Navigationsleiste ändern, bleibt die Tab-Reihenfolge die Dokumentquellreihenfolge, nicht Ihre visuelle Reihenfolge, was kognitiv verwirrend sein kann.

Wenn Sie einen umgekehrten Wert verwenden oder Ihre Elemente anderweitig neu ordnen, sollten Sie überlegen, ob Sie wirklich die logische Reihenfolge im Quelltext ändern sollten.

Die Flexiblen Box-Layout-Spezifikationen warnen uns davor, die Neuordnung nicht als Methode zur Behebung von Quellproblemen zu verwenden:

> "Autoren _dürfen nicht_ Order oder die \*-Reverse-Werte von {{cssxref("flex-flow")}}/`flex-direction` als Ersatz für die korrekte Quellordnung verwenden, da dies die Barrierefreiheit des Dokuments ruinieren kann."

Wenn Sie im folgenden Live-Beispiel von Link zu Link weitergehen, wird der Fokusstil hervorgehoben, was zeigt, dass das Ändern der Reihenfolge von Flex-Elementen mit `flex-direction` die Tab-Reihenfolge nicht verändert, die weiterhin der Quellcode-Reihenfolge folgt.

```html live-sample___flex-direction
<div class="box">
  <div><a href="#">One</a></div>
  <div><a href="#">Two</a></div>
  <div><a href="#">Three</a></div>
</div>
```

```css live-sample___flex-direction
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.box > * a:focus {
  background-color: yellow;
  color: black;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row-reverse;
}
```

{{EmbedLiveSample("flex-direction")}}

Ähnlich wie das Ändern des Wertes von `flex-direction` die Tab-Reihenfolge nicht ändert, ändert dieser Wert auch nicht die Malreihenfolge. Es ist nur eine visuelle Umkehrung der Elemente.

## Die Order-Eigenschaft

Zusätzlich zur Umkehrung der Reihenfolge, in der Flex-Elemente visuell angezeigt werden, können Sie einzelne Elemente ansprechen und ändern, wo sie in der visuellen Reihenfolge erscheinen, mit der {{cssxref("order")}}-Eigenschaft.

Die {{cssxref("order")}}-Eigenschaft ist dafür konzipiert, die Elemente in _geordneten Gruppen_ anzuordnen. Das bedeutet, dass den Elementen eine Ganzzahl zugewiesen wird, die ihre Gruppe repräsentiert. Die Elemente werden dann in der visuellen Reihenfolge gemäß dieser Ganzzahl platziert, beginnend mit den niedrigsten Werten. Wenn mehr als ein Element den gleichen ganzzahlig Wert hat, werden innerhalb dieser Gruppe die Elemente in Quellreihenfolge angeordnet.

Ein Beispiel: Fünf Flex-Elementen werden `order`-Werte wie folgt zugewiesen:

- Quellelement 1: `order: 2`
- Quellelement 2: `order: 3`
- Quellelement 3: `order: 1`
- Quellelement 4: `order: 3`
- Quellelement 5: `order: 1`

Diese Elemente würden auf der Seite in folgender Reihenfolge angezeigt:

- Quellelement 3: `order: 1`
- Quellelement 5: `order: 1`
- Quellelement 1: `order: 2`
- Quellelement 2: `order: 3`
- Quellelement 4: `order: 3`

![Elemente haben eine Zahl, die ihre Quellreihenfolge anzeigt, die neu angeordnet wurde.](order-property.png)

Experimentieren Sie mit den Werten im folgenden Live-Beispiel und sehen Sie, wie sich die Reihenfolge ändert. Versuch auch, `flex-direction` in `row-reverse` zu ändern und sehen Sie, was passiert — die Startlinie wird gewechselt, sodass die Anordnung von der gegenüberliegenden Seite beginnt.

```html live-sample___order
<div class="box">
  <div><a href="#">1</a></div>
  <div><a href="#">2</a></div>
  <div><a href="#">3</a></div>
  <div><a href="#">4</a></div>
  <div><a href="#">5</a></div>
</div>
```

```css live-sample___order
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row;
}
.box :nth-child(1) {
  order: 2;
}
.box :nth-child(2) {
  order: 3;
}
.box :nth-child(3) {
  order: 1;
}
.box :nth-child(4) {
  order: 3;
}
.box :nth-child(5) {
  order: 1;
}
```

{{EmbedLiveSample("order")}}

Flex-Elemente haben einen Standardwert für `order` von `0`. Daher werden Elemente mit einem ganzzahligen Wert größer als `0` nach allen Elementen angezeigt, denen kein expliziter `order`-Wert zugewiesen wurde.

Sie können auch negative Werte mit `order` verwenden, was sehr nützlich sein kann. Wenn Sie möchten, dass ein Element zuerst angezeigt wird und die Reihenfolge aller anderen Elemente unverändert bleibt, können Sie diesem Element den `order`-Wert `-1` zuweisen. Da dieser niedriger als `0` ist, wird das Element immer an erster Stelle angezeigt werden.

Im Live-Code-Beispiel unten sind die Elemente mit Flexbox angeordnet. Indem Sie ändern, welches Element die Klasse `active` im HTML zugewiesen bekommt, können Sie ändern, welches Element zuerst angezeigt wird und damit die volle Breite am oberen Layoutrand einnimmt, während die anderen Elemente darunter angezeigt werden.

```html live-sample___negative-order
<div class="box">
  <div><a href="#">1</a></div>
  <div><a href="#">2</a></div>
  <div class="active"><a href="#">3</a></div>
  <div><a href="#">4</a></div>
  <div><a href="#">5</a></div>
</div>
```

```css live-sample___negative-order
* {
  box-sizing: border-box;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.active {
  order: -1;
  flex: 1 0 100%;
}
```

{{EmbedLiveSample("negative-order")}}

Die Elemente werden in der _order-modified document order_ dargestellt, was bedeutet, dass der Wert der `order`-Eigenschaft berücksichtigt wird, bevor die Elemente angezeigt werden.

`Order` ändert auch die Malreihenfolge der Elemente; Elemente mit einem niedrigeren Wert für `order` werden zuerst gemalt und Elemente mit einem höheren Wert für `order` werden danach gemalt.

## Die Order-Eigenschaft und Barrierefreiheit

Die Verwendung der `order`-Eigenschaft hat die gleichen Implikationen für die Barrierefreiheit wie das Ändern der Richtung mit `flex-direction`. Die Verwendung von `order` ändert die Reihenfolge, in der die Elemente gemalt werden, und die Reihenfolge, in der sie visuell erscheinen. Es ändert jedoch nicht die sequentielle Navigationsreihenfolge der Elemente. Daher könnte ein Benutzer, der eine Tastatur verwendet, um durch den Inhalt der Seite zu navigieren, feststellen, dass er sich verwirrenderweise durch Ihre Inhalte bewegt.

Indem Sie sich in einem der Live-Beispiele auf dieser Seite durch die Inhalte klicken, können Sie sehen, wie `order` potenziell eine seltsame Erfahrung für jeden schaffen kann, der kein Zeigegerät wie eine Maus verwendet. Um mehr über diese Diskrepanz zwischen visueller Reihenfolge und logischer Reihenfolge und einige der potenziellen Probleme, die sie für die Barrierefreiheit mit sich bringt, zu erfahren, lesen Sie die folgenden Ressourcen.

- [Flexbox und die Diskrepanz bei der Tastaturnavigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) über tink.uk (2016)
- [HTML Quellreihenfolge vs. CSS Anzeigereihenfolge](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) über adrianroselli.com (2015)
- [Das Responsive-Order-Problem für Tastaturfokus](https://alastairc.uk/2017/06/the-responsive-order-conflict/) über alastairc.uk (2017)

## Anwendungsfälle für `order`

Es gibt einige Anwendungsfälle, für die die Tatsache, dass die logische und daher die Lesereihenfolge von Flex-Elementen von der visuellen Reihenfolge getrennt ist, nützlich ist. Sorgfältig eingesetzt, kann die `order`-Eigenschaft einige nützliche allgemeine Muster leicht umsetzbar machen.

Sie könnten ein Design haben, vielleicht eine Karte, die einen Nachrichtenartikel anzeigt. Die Überschrift der Nachricht ist das zentrale Element, das hervorgehoben werden sollte, und das, zu dem ein Benutzer möglicherweise springen könnte, wenn er zwischen Überschriften navigiert, um den Inhalt zu finden, den er lesen möchte. Die Karte hat auch ein Datum; das fertige Design, das wir erstellen möchten, sieht ungefähr so aus.

![Ein Designbestandteil mit Datum, dann Überschrift und dann Inhalt.](order-card.png)

Visuell erscheint das Datum über der Überschrift, im Quelltext. Wenn die Karte jedoch von einem Bildschirmleser vorgelesen wird, würde ich es bevorzugen, dass der Titel zuerst angekündigt wird und dann das Veröffentlichungsdatum. Wir können dies mit der `order`-Eigenschaft erreichen.

Die Karte ist unser Flex-Container, mit `flex-direction` auf `column` gesetzt. Wir geben dem Datum eine `order` von `-1`, um es oberhalb der Überschrift zu platzieren.

```html live-sample___usecase-order
<div class="wrapper">
  <div class="card">
    <h3>News item title</h3>
    <div class="date">1 Nov 2017</div>
    <p>This is the content of my news item. Very newsworthy.</p>
  </div>
  <div class="card">
    <h3>Another title</h3>
    <div class="date">6 Nov 2017</div>
    <p>This is the content of my news item. Very newsworthy.</p>
  </div>
</div>
```

```css live-sample___usecase-order
body {
  font-family: sans-serif;
}

.wrapper {
  display: flex;
  flex: 1 1 200px;
  gap: 1em;
}

.card {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.date {
  order: -1;
  text-align: right;
}
```

{{EmbedLiveSample("usecase-order", "", "220px")}}

Diese kleinen Anpassungen sind die Art von Fällen, in denen die `order`-Eigenschaft sinnvoll ist. Halten Sie die logische Reihenfolge gleich der Lese- und Tab-Reihenfolge des Dokuments und bewahren Sie diese auf die zugänglichste und strukturierteste Weise. Verwenden Sie `order` nur für rein visuelle Designänderungen. Ordnen Sie keine Elemente neu, auf die mit der Tastatur fokussiert wird. Stellen Sie sicher, dass Sie Ihre Inhalte immer nur mit einer Tastatur anstelle einer Maus oder eines Touchscreens testen; dies wird aufzeigen, ob Ihre Entwicklungsentscheidungen es schwieriger machen, den Inhalt zu navigieren.

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Beherrschung der Umbrüche von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
