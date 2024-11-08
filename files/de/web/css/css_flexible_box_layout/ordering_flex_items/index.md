---
title: Anordnung von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Ordering_flex_items
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

Layout-Methoden wie Flexbox und Grid ermöglichen die Steuerung der Reihenfolge von Inhalten. In diesem Artikel werden wir uns Möglichkeiten ansehen, wie Sie die visuelle Reihenfolge Ihrer Inhalte ändern können, wenn Sie Flexbox verwenden. Wir werden auch berücksichtigen, wie das Umordnen von Elementen die Zugänglichkeit beeinflusst.

## Die Anzeige der Elemente umkehren

Die Eigenschaft {{cssxref("flex-direction")}} kann einen von vier Werten annehmen:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

Die ersten beiden Werte behalten die Elemente in der gleichen Reihenfolge, in der sie in der Dokumentenquelle erscheinen, und zeigen sie nacheinander von der Startlinie an.

![Die Elemente werden in einer Reihe von links beginnend angezeigt.](basics1.png)

![Die Elemente werden als Spalte von oben beginnend angezeigt.](align10.png)

Die zweiten beiden Werte kehren die Elemente um, indem sie die Start- und Endlinien vertauschen.

![Die Elemente werden in umgekehrter Reihenfolge beginnend an der rechten Linie angezeigt.](align9.png)

![Die Elemente werden in einer Spalte in umgekehrter Reihenfolge beginnend an der unteren Linie angezeigt.](align11.png)

Denken Sie daran, dass die Startlinie sich auf Schreibmodi bezieht. Die obigen reihenbezogenen Beispiele zeigen, wie `row` und `row-reverse` in einer von links nach rechts geschriebenen Sprache wie Englisch funktionieren. Wenn Sie in einer von rechts nach links geschriebenen Sprache wie Arabisch arbeiten, würde `row` auf der rechten Seite beginnen, `row-reverse` auf der linken Seite.

![Flex-Container mit arabischen Buchstaben, die zeigen, wie Zeilen von der rechten Seite beginnen und row-reverse von der linken Seite.](order-rtl.png)

Dies kann wie eine einfache Möglichkeit erscheinen, Dinge in umgekehrter Reihenfolge anzuzeigen. Sie sollten jedoch bedenken, dass die Elemente nur _visuell_ in umgekehrter Reihenfolge angezeigt werden. Die Umordnungsfähigkeiten des Flex-Layouts betreffen nur die visuelle Darstellung. Die Tab-Reihenfolge und Sprachausgabe folgen der Reihenfolge des Quellcodes. Das bedeutet, dass nur die visuelle Darstellung sich ändert; die Quellenreihenfolge bleibt gleich und bietet ein anderes Benutzererlebnis für nicht-CSS-Benutzeragenten (denken Sie an Siri oder Alexa) und Benutzer von unterstützender Technologie. Wenn Sie die Reihenfolge einer Navigationsleiste ändern, bleibt die Tab-Reihenfolge die Dokumentenquellenreihenfolge, nicht Ihre visuelle Reihenfolge, was kognitiv verwirrend sein kann.

Wenn Sie einen umgekehrten Wert verwenden oder die Anordnung Ihrer Elemente anders ändern, sollten Sie überlegen, ob Sie wirklich die logische Reihenfolge in der Quelle ändern sollten.

Die Flexbox-Spezifikation warnt uns davor, das Umordnen als Mittel zum Beheben von Quellproblemen zu verwenden:

> "Autoren _dürfen nicht_ `order` oder die \*-reverse-Werte von {{cssxref("flex-flow")}}/`flex-direction` als Ersatz für die korrekte Quellreihenfolge verwenden, da dies die Zugänglichkeit des Dokuments beeinträchtigen kann."

Wenn Sie im folgenden Live-Beispiel von Link zu Link springen, wird der Fokusstil hervorgehoben, der zeigt, dass das Ändern der Reihenfolge von Flex-Elementen mit `flex-direction` die Tab-Reihenfolge nicht ändert, die weiterhin der Quellcode-Reihenfolge folgt.

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

Ebenso wie das Ändern des Wertes von `flex-direction` die Tab-Reihenfolge nicht ändert, ändert dieser Wert auch nicht die Zeichenreihenfolge. Es ist nur eine visuelle Umkehrung der Elemente.

## Die order-Eigenschaft

Zusätzlich zur Umkehrung der Reihenfolge, in der Flex-Elemente visuell angezeigt werden, können Sie mit der Eigenschaft {{cssxref("order")}} einzelne Elemente ansprechen und ändern, wo sie in der visuellen Reihenfolge erscheinen.

Die Eigenschaft {{cssxref("order")}} ist dafür konzipiert, die Elemente in _ordinalen Gruppen_ anzuordnen. Das bedeutet, dass die Elemente einer Ganzzahl zugewiesen werden, die ihre Gruppe darstellt. Die Elemente werden dann in der visuellen Reihenfolge entsprechend dieser Ganzzahl angezeigt, beginnend mit den niedrigsten Werten. Wenn mehr als ein Element denselben Ganzzahlwert hat, werden die Elemente innerhalb dieser Gruppe entsprechend der Quellreihenfolge angeordnet.

Als Beispiel werden fünf Flex-Elementen folgende `order`-Werte zugewiesen:

- Quell-Element 1: `order: 2`
- Quell-Element 2: `order: 3`
- Quell-Element 3: `order: 1`
- Quell-Element 4: `order: 3`
- Quell-Element 5: `order: 1`

Diese Elemente würden auf der Seite in folgender Reihenfolge angezeigt:

- Quell-Element 3: `order: 1`
- Quell-Element 5: `order: 1`
- Quell-Element 1: `order: 2`
- Quell-Element 2: `order: 3`
- Quell-Element 4: `order: 3`

![Elemente haben eine Nummer, die ihre stark überarbeitete Quellreihenfolge anzeigt.](order-property.png)

Experimentieren Sie mit den Werten in diesem Live-Beispiel unten und sehen Sie, wie sich die Reihenfolge ändert. Versuchen Sie auch, `flex-direction` auf `row-reverse` zu ändern und sehen Sie, was passiert — die Startlinie wird vertauscht, sodass die Anordnung von der gegenüberliegenden Seite beginnt.

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

Flex-Elemente haben einen Standardwert von `order` von `0`. Daher werden Elemente mit einem ganzzahligen Wert größer als `0` nach allen Elementen angezeigt, denen kein expliziter `order`-Wert zugewiesen wurde.

Sie können auch negative Werte mit `order` verwenden, was ziemlich nützlich sein kann. Wenn Sie möchten, dass ein Element zuerst angezeigt wird und die Reihenfolge aller anderen Elemente unverändert bleibt, können Sie diesem Element `order: -1` zuweisen. Da dies niedriger als `0` ist, wird das Element immer zuerst angezeigt.

Im folgenden Live-Code-Beispiel werden die Elemente mit Flexbox angeordnet. Indem Sie ändern, welches Element in dem HTML die Klasse `active` zugewiesen bekommt, können Sie ändern, welches Element zuerst angezeigt wird und daher in voller Breite oben im Layout erscheint, während die anderen Elemente darunter angezeigt werden.

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

Die Elemente werden in _ordermodifizierter Dokumentenreihenfolge_ angezeigt, was bedeutet, dass der Wert der `order`-Eigenschaft berücksichtigt wird, bevor die Elemente angezeigt werden.

`Order` ändert auch die Zeichenreihenfolge der Elemente; Elemente mit einem niedrigeren Wert für `order` werden zuerst gezeichnet und Elemente mit einem höheren Wert für `order` anschließend gezeichnet.

## Die order-Eigenschaft und die Zugänglichkeit

Die Nutzung der `order`-Eigenschaft hat dieselben Implikationen für die Zugänglichkeit wie das Ändern der Richtung mit `flex-direction`. Die Nutzung von `order` ändert die Reihenfolge, in der Elemente gezeichnet werden, und die Reihenfolge, in der sie visuell erscheinen. Sie ändert jedoch nicht die sequentielle Navigationsreihenfolge der Elemente. Wenn ein Benutzer also eine Tastatur verwendet, um durch die Inhalte auf der Seite zu springen, könnte er feststellen, dass er sich in einer sehr verwirrenden Weise durch die Inhalte bewegt.

Indem Sie in irgendeinem der Live-Beispiele auf dieser Seite herumspringen, können Sie sehen, wie `order` potenziell eine seltsame Erfahrung für jeden schafft, der kein Zeigegerät wie eine Maus verwendet. Um mehr über diesen Konflikt zwischen visueller und logischer Ordnung und einige der potenziellen Probleme, die er für die Barrierefreiheit aufwirft, zu erfahren, siehe die folgenden Ressourcen.

- [Flexbox und die Trennung von Tastaturnavigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) über tink.uk (2016)
- [HTML-Quellreihenfolge vs. CSS-Anzeigereihenfolge](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) über adrianroselli.com (2015)
- [Der responsive Ordnungs-Konflikt bei Tastaturfokus](https://alastairc.uk/2017/06/the-responsive-order-conflict/) über alastairc.uk (2017)

## Anwendungsfälle für `order`

Es gibt einige Anwendungsfälle, bei denen es von Vorteil ist, dass die logische und damit die Lesereihenfolge von Flex-Elementen von der visuellen Reihenfolge getrennt ist. Bei sorgfältiger Anwendung kann die `order`-Eigenschaft es ermöglichen, einige nützliche Muster einfach zu implementieren.

Sie könnten ein Design haben, vielleicht eine Karte, die einen Nachrichtenartikel anzeigt. Die Überschrift des Nachrichtenartikels ist das Hauptelement, das hervorgehoben werden sollte, und wäre das Element, zu dem ein Benutzer springen könnte, wenn er zwischen Überschriften navigiert, um den gewünschten Inhalt zu finden. Die Karte hat auch ein Datum; das endgültige Design, das wir erstellen möchten, sieht folgendermaßen aus.

![Ein Design-Element mit Datum, dann Überschrift und dann Inhalt.](order-card.png)

Visuell erscheint das Datum oberhalb der Überschrift, in der Quelle. Wenn die Karte jedoch von einem Screenreader vorgelesen wird, hätte ich lieber, dass der Titel zuerst und dann das Veröffentlichungsdatum angesagt wird. Dies können wir mit der `order`-Eigenschaft erreichen.

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

Diese kleinen Anpassungen sind die Art von Fällen, in denen die `order`-Eigenschaft sinnvoll ist. Halten Sie die logische Reihenfolge gleich der Lese- und Tab-Reihenfolge des Dokuments und bewahren Sie diese auf die zugänglichste und strukturierteste Weise. Verwenden Sie dann `order` für rein visuelle Designanpassungen. Ordnen Sie keine Elemente um, die Tastaturfokus erhalten. Stellen Sie sicher, dass Sie Ihre Inhalte immer nur mit einer Tastatur anstelle einer Maus oder eines Touchscreens testen, dies wird aufdecken, ob Ihre Entwicklungsentscheidungen das Navigieren der Inhalte verkomplizieren.

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meisterung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
