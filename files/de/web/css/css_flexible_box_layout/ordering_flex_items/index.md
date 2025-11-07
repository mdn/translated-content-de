---
title: Anordnung von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Ordering_flex_items
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Layout-Methoden wie Flexbox und Grid ermöglichen die Kontrolle der Reihenfolge von Inhalten. In diesem Artikel werfen wir einen Blick darauf, wie Sie die visuelle Reihenfolge Ihrer Inhalte ändern können, wenn Sie Flexbox verwenden. Wir werden auch berücksichtigen, wie das Umordnen von Elementen die Barrierefreiheit beeinflusst.

## Umkehren der Darstellung der Elemente

Die {{cssxref("flex-direction")}}-Eigenschaft kann einen von vier Werten annehmen:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

Die ersten beiden Werte behalten die Elemente in derselben Reihenfolge bei, wie sie in der Dokumentquellenreihenfolge erscheinen, und zeigen sie nacheinander ab der Startlinie an.

![Die Elemente werden in einer Zeile angezeigt, die links beginnt.](basics1.png)

![Die Elemente werden als Spalte angezeigt, die oben beginnt.](align10.png)

Die zweiten beiden Werte kehren die Elemente um, indem sie die Start- und Endlinien tauschen.

![Die Elemente werden in umgekehrter Reihenfolge ab der rechten Linie angezeigt.](align9.png)

![Die Elemente werden in einer Spalte in umgekehrter Reihenfolge angezeigt, beginnend an der unteren Linie.](align11.png)

Denken Sie daran, dass sich die Startlinie auf Schriftsysteme bezieht. Die obigen zeilenbezogenen Beispiele demonstrieren, wie `row` und `row-reverse` in einer von links nach rechts geschriebenen Sprache wie Englisch funktionieren. Wenn Sie in einer von rechts nach links geschriebenen Sprache wie Arabisch arbeiten, würde `row` rechts beginnen und `row-reverse` links.

![Flex-Container mit arabischen Buchstaben, die zeigen, wie die Zeile von rechts anfängt und die umgekehrte Zeile von links.](order-rtl.png)

Dies kann wie ein einfacher Weg erscheinen, um Dinge in umgekehrter Reihenfolge anzuzeigen. Sie sollten jedoch bedenken, dass die Elemente nur _visuell_ in umgekehrter Reihenfolge angezeigt werden. Die Umordnungsmöglichkeiten des Flex-Layouts betreffen nur die visuelle Darstellung. Die Tabulator-Reihenfolge und die Sprachreihenfolge folgen der Reihenfolge des Quellcodes. Das bedeutet, dass sich nur die visuelle Präsentation ändert; die Quellreihenfolge bleibt gleich, was eine andere Benutzererfahrung für nicht-CSS-Benutzeragenten (denken Sie an Siri oder Alexa) und Benutzer von unterstützender Technologie bietet. Wenn Sie die Reihenfolge einer Navigationsleiste ändern, bleibt die Tabulator-Reihenfolge die Dokumentquellenreihenfolge und nicht Ihre visuelle Reihenfolge, was kognitiv verwirrend sein kann.

Wenn Sie einen umgekehrten Wert verwenden oder Ihre Elemente anderweitig neu anordnen, sollten Sie überlegen, ob Sie wirklich die logische Reihenfolge im Quellcode ändern sollten.

Die Spezifikation des flexiblen Box-Layouts warnt uns davor, Umordnungen als Lösung für Quellprobleme zu nutzen:

> "Autoren _dürfen nicht_ `order` oder die \*-reverse-Werte von {{cssxref("flex-flow")}}/`flex-direction` als Ersatz für die korrekte Quellreihenfolge verwenden, da dies die Barrierefreiheit des Dokuments zerstören kann."

Wenn Sie in dem Live-Beispiel unten von Link zu Link tabben, wird der Fokusstil hervorgehoben und zeigt, dass das Ändern der Reihenfolge von Flex-Elementen mit `flex-direction` die Tabulator-Reihenfolge nicht ändert, die weiterhin der Quellcode-Reihenfolge folgt.

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

In derselben Weise, wie das Ändern des Werts von `flex-direction` die Tabulator-Reihenfolge nicht ändert, ändert das Ändern dieses Werts auch nicht die Mal-Reihenfolge. Es ist nur eine visuelle Umkehrung der Elemente.

## Die `order`-Eigenschaft

Zusätzlich zur Umkehrung der Reihenfolge, in der Flex-Elemente visuell angezeigt werden, können Sie einzelne Elemente gezielt ansprechen und mit der {{cssxref("order")}}-Eigenschaft ändern, wo sie in der visuellen Reihenfolge erscheinen.

Die {{cssxref("order")}}-Eigenschaft ist darauf ausgelegt, die Elemente in _Ordnungsgruppen_ anzuordnen. Das bedeutet, dass den Elementen eine Ganzzahl zugewiesen wird, die ihre Gruppe repräsentiert. Die Elemente werden dann in der visuellen Reihenfolge entsprechend dieser Ganzzahl angezeigt, wobei die niedrigsten Werte zuerst kommen. Wenn mehr als ein Element den gleichen Zahlenwert hat, werden innerhalb dieser Gruppe die Elemente gemäß der Quellreihenfolge angeordnet.

Beispielsweise werden fünf Flex-Elementen folgende `order`-Werte zugewiesen:

- Quellenelement 1: `order: 2`
- Quellenelement 2: `order: 3`
- Quellenelement 3: `order: 1`
- Quellenelement 4: `order: 3`
- Quellenelement 5: `order: 1`

Diese Elemente würden auf der Seite in folgender Reihenfolge angezeigt:

- Quellenelement 3: `order: 1`
- Quellenelement 5: `order: 1`
- Quellenelement 1: `order: 2`
- Quellenelement 2: `order: 3`
- Quellenelement 4: `order: 3`

![Elemente haben eine Nummer, die ihre Quellreihenfolge zeigt, welche neu angeordnet wurde.](order-property.png)

Probieren Sie mit den Werten in diesem Live-Beispiel unten aus und sehen Sie, wie sich die Reihenfolge ändert. Versuchen Sie auch, `flex-direction` auf `row-reverse` zu ändern und sehen Sie, was passiert — die Startlinie wird umgeschaltet, sodass die Anordnung von der gegenüberliegenden Seite beginnt.

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

Flex-Elemente haben einen Standardwert von `order` `0`. Daher werden Elemente mit einem Ganzzahlwert größer als `0` nach allen Elementen angezeigt, die keinen expliziten `order`-Wert erhalten haben.

Sie können auch negative Werte mit `order` verwenden, was ziemlich nützlich sein kann. Wenn Sie ein Element zuerst anzeigen lassen möchten und die Reihenfolge aller anderen Elemente unverändert lassen möchten, können Sie diesem Element den Wert `-1` geben. Da dies niedriger ist als `0`, wird das Element immer zuerst angezeigt.

Im Live-Code-Beispiel unten werden die Elemente mit Flexbox angeordnet. Indem Sie im HTML ändern, welchem Element die Klasse `active` zugewiesen ist, können Sie ändern, welches Element zuerst angezeigt wird und dadurch voll breit oben im Layout wird, während die anderen Elemente darunter angezeigt werden.

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

Die Elemente werden in der _order-modified document order_ angezeigt, was bedeutet, dass der Wert der `order`-Eigenschaft berücksichtigt wird, bevor die Elemente angezeigt werden.

`Order` ändert auch die Mal-Reihenfolge der Elemente; Elemente mit einem niedrigeren `order`-Wert werden zuerst gemalt und Elemente mit einem höheren `order`-Wert danach.

## Die `order`-Eigenschaft und Barrierefreiheit

Die Verwendung der `order`-Eigenschaft hat die gleichen Auswirkungen auf die Barrierefreiheit wie das Ändern der Richtung mit `flex-direction`. Die Verwendung von `order` ändert die Reihenfolge, in der Elemente gemalt werden, und die Reihenfolge, in der sie visuell erscheinen. Es ändert nicht die sequentielle Navigationsreihenfolge der Elemente. Wenn ein Benutzer also eine Tastatur verwendet, um durch den Inhalt auf der Seite zu tabben, kann er sich auf verwirrende Weise durch Ihren Inhalt bewegen.

Indem Sie durch eines der Live-Beispiele auf dieser Seite tabben, können Sie sehen, wie `order` potenziell eine seltsame Erfahrung für jeden erzeugt, der kein Zeigegerät wie eine Maus verwendet. Um mehr über diese Diskrepanz zwischen visueller Ordnung und logischer Ordnung und einige der möglichen Probleme zu erfahren, die sie für die Barrierefreiheit aufwirft, siehe die folgenden Ressourcen.

- [Flexbox und die Tastaturnavigation-Diskrepanz](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) über tink.uk (2016)
- [HTML-Quellreihenfolge vs. CSS-Anzeigeordnung](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) über adrianroselli.com (2015)
- [Der Responsive Order Konflikt für Tastaturfokus](https://alastairc.uk/2017/06/the-responsive-order-conflict/) über alastairc.uk (2017)

## Anwendungsfälle für `order`

Es gibt einige Anwendungsfälle, bei denen der Umstand, dass die logische und damit die Lesereihenfolge von Flex-Elementen von der visuellen Reihenfolge getrennt ist, nützlich ist. Bei vorsichtiger Anwendung kann die `order`-Eigenschaft es ermöglichen, einige nützliche Standardmuster einfach zu implementieren.

Sie könnten ein Design haben, vielleicht eine Karte, die einen Nachrichtenartikel anzeigt. Die Überschrift des Nachrichtenartikels ist das wichtigste Element, das hervorgehoben wird und das Element, zu dem ein Benutzer springen könnte, wenn er zwischen Überschriften tabbt, um den Inhalt zu finden, den er lesen möchte. Die Karte hat auch ein Datum; das fertige Design, das wir erstellen möchten, sieht wie folgt aus.

![Ein Designbaustein mit einem Datum, dann einer Überschrift und dann Inhalt.](order-card.png)

Visuell erscheint das Datum oben in der Überschrift, im Quellcode jedoch nicht. Wenn die Karte von einem Screenreader vorgelesen würde, würde ich bevorzugen, dass zuerst der Titel und dann das Veröffentlichungsdatum angekündigt werden. Wir können dies mit der `order`-Eigenschaft erreichen.

Die Karte ist unser Flex-Container, mit `flex-direction` auf `column` gesetzt. Wir geben dem Datum eine `order` von `-1`, wodurch es über die Überschrift platziert wird.

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

Diese kleinen Anpassungen sind die Art von Fällen, in denen die `order`-Eigenschaft sinnvoll ist. Halten Sie die logische Reihenfolge mit der Lese- und Tabulatorreihenfolge des Dokuments gleich und bewahren Sie dies auf die zugänglichste und strukturierteste Weise. Verwenden Sie `order` dann für rein visuelle Designanpassungen. Ordnen Sie keine Elemente um, die Tastaturfokus erhalten. Stellen Sie sicher, dass Sie Ihren Inhalt immer nur mit einer Tastatur und nicht mit einer Maus oder einem Touchscreen testen; dies wird aufdecken, ob Ihre Entwicklungsentscheidungen es komplexer machen, durch den Inhalt zu navigieren.

## Siehe auch

- [Grundkonzepte der Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Kontrollieren von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Beherrschen des Umbrechen von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
