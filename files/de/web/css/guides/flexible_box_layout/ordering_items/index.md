---
title: Reihenfolge von Flex-Elementen
slug: Web/CSS/Guides/Flexible_box_layout/Ordering_items
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

Layout-Methoden wie Flexbox und Grid ermöglichen es, die Reihenfolge von Inhalten zu steuern. In diesem Artikel betrachten wir Möglichkeiten, die visuelle Reihenfolge Ihrer Inhalte bei der Verwendung von Flexbox zu ändern. Außerdem untersuchen wir, wie sich das Umordnen von Elementen auf die Barrierefreiheit auswirkt.

## Die Anzeige der Elemente umkehren

Die Eigenschaft {{cssxref("flex-direction")}} kann einen von vier Werten annehmen:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

Die ersten beiden Werte behalten die Elemente in derselben Reihenfolge bei, in der sie in der Dokumentquellreihenfolge erscheinen, und zeigen sie nacheinander ab der Startlinie an.

![Die Elemente werden in einer Zeile angezeigt, die links beginnt.](basics1.png)

![Die Elemente werden als Spalte angezeigt, die oben beginnt.](align10.png)

Die zweiten beiden Werte kehren die Reihenfolge der Elemente um, indem sie die Start- und Endlinien vertauschen.

![Die Elemente werden in umgekehrter Reihenfolge angezeigt, beginnend an der rechten Linie.](align9.png)

![Die Elemente werden als Spalte in umgekehrter Reihenfolge angezeigt, beginnend an der unteren Linie.](align11.png)

Beachten Sie, dass sich die Startlinie auf Schreibrichtungen bezieht. Die obigen zeilenbezogenen Beispiele zeigen, wie `row` und `row-reverse` in einer von links nach rechts geschriebenen Sprache wie Englisch funktionieren. Wenn Sie mit einer von rechts nach links geschriebenen Sprache wie Arabisch arbeiten, würde `row` rechts beginnen, `row-reverse` dagegen links.

![Flex-Container mit arabischen Buchstaben, die zeigen, wie row auf der rechten Seite und row-reverse auf der linken Seite beginnt.](order-rtl.png)

Dies kann wie eine einfache Möglichkeit wirken, Dinge in umgekehrter Reihenfolge anzuzeigen. Sie sollten jedoch beachten, dass die Elemente nur _visuell_ in umgekehrter Reihenfolge angezeigt werden. Die Umordnungsfunktionen des Flex-Layouts betreffen nur die visuelle Darstellung. Die Tab-Reihenfolge und die Reihenfolge der Sprachausgabe folgen der Reihenfolge des Quellcodes. Das bedeutet, dass sich nur die visuelle Darstellung ändert; die Quellreihenfolge bleibt gleich. Dies führt zu einer anderen Benutzererfahrung für User-Agents ohne CSS (wie Siri oder Alexa) und für Nutzende assistiver Technologien. Wenn Sie die Reihenfolge einer Navigationsleiste ändern, entspricht die Tab-Reihenfolge weiterhin der Dokumentquellreihenfolge und nicht Ihrer visuellen Reihenfolge, was kognitiv verwirrend sein kann.

Wenn Sie einen umgekehrten Wert verwenden oder Ihre Elemente auf andere Weise umordnen, sollten Sie überlegen, ob Sie tatsächlich die logische Reihenfolge im Quellcode ändern sollten.

Die Spezifikation für das Flexible-Box-Layout warnt davor, Umordnungen zur Behebung von Problemen im Quellcode zu verwenden:

> „Autoren _dürfen nicht_ `order` oder die `*-reverse`-Werte von {{cssxref("flex-flow")}}/`flex-direction` als Ersatz für eine korrekte Quellreihenfolge verwenden, da dies die Barrierefreiheit des Dokuments beeinträchtigen kann.“

Wenn Sie im folgenden Live-Beispiel von Link zu Link tabben, wird der Fokusstil hervorgehoben. Dies zeigt, dass das Ändern der Reihenfolge von Flex-Elementen mit `flex-direction` die Tab-Reihenfolge nicht verändert, die weiterhin der Quellcodereihenfolge folgt.

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

Ebenso wie das Ändern des Werts von `flex-direction` die Tab-Reihenfolge nicht verändert, ändert es auch nicht die Zeichenreihenfolge. Es handelt sich lediglich um eine visuelle Umkehrung der Elemente.

## Die Eigenschaft `order`

Zusätzlich zum Umkehren der Reihenfolge, in der Flex-Elemente visuell angezeigt werden, können Sie einzelne Elemente gezielt ansprechen und mit der Eigenschaft {{cssxref("order")}} ändern, wo sie in der visuellen Reihenfolge erscheinen.

Die Eigenschaft {{cssxref("order")}} ist dafür vorgesehen, Elemente in _Ordinalgruppen_ anzuordnen. Das bedeutet, dass den Elementen eine ganze Zahl zugewiesen wird, die ihre Gruppe repräsentiert. Die Elemente werden dann entsprechend dieser ganzen Zahl in visueller Reihenfolge platziert, wobei die niedrigsten Werte zuerst kommen. Wenn mehr als ein Element denselben ganzzahligen Wert hat, werden die Elemente innerhalb dieser Gruppe gemäß der Quellreihenfolge angeordnet.

Beispielsweise werden fünf Flex-Elementen die folgenden `order`-Werte zugewiesen:

- Quellelement 1: `order: 2`
- Quellelement 2: `order: 3`
- Quellelement 3: `order: 1`
- Quellelement 4: `order: 3`
- Quellelement 5: `order: 1`

Diese Elemente würden auf der Seite in der folgenden Reihenfolge angezeigt:

- Quellelement 3: `order: 1`
- Quellelement 5: `order: 1`
- Quellelement 1: `order: 2`
- Quellelement 2: `order: 3`
- Quellelement 4: `order: 3`

![Elemente haben eine Zahl, die ihre Quellreihenfolge zeigt, welche umsortiert wurde.](order-property.png)

Experimentieren Sie im folgenden Live-Beispiel mit den Werten und sehen Sie, wie sich dadurch die Reihenfolge ändert. Versuchen Sie außerdem, `flex-direction` in `row-reverse` zu ändern, und beobachten Sie, was passiert — die Startlinie wird vertauscht, sodass die Anordnung auf der gegenüberliegenden Seite beginnt.

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

Flex-Elemente haben standardmäßig den `order`-Wert `0`. Daher werden Elemente mit einem ganzzahligen Wert größer als `0` nach allen Elementen angezeigt, denen kein expliziter `order`-Wert zugewiesen wurde.

Sie können mit `order` auch negative Werte verwenden, was sehr nützlich sein kann. Wenn Sie ein Element zuerst anzeigen und die Reihenfolge aller anderen Elemente unverändert lassen möchten, können Sie diesem Element den Wert `-1` zuweisen. Da dieser kleiner als `0` ist, wird das Element immer zuerst angezeigt.

Im folgenden Live-Codebeispiel werden die Elemente mit Flexbox angeordnet. Indem Sie ändern, welchem Element im HTML die Klasse `active` zugewiesen ist, können Sie ändern, welches Element zuerst angezeigt wird und daher oben im Layout die volle Breite einnimmt, während die anderen Elemente darunter angezeigt werden.

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

Die Elemente werden in _durch `order` modifizierter Dokumentreihenfolge_ angezeigt. Das bedeutet, dass der Wert der Eigenschaft `order` berücksichtigt wird, bevor die Elemente angezeigt werden.

`order` verändert auch die Zeichenreihenfolge der Elemente: Elemente mit einem niedrigeren Wert für `order` werden zuerst gezeichnet, Elemente mit einem höheren Wert für `order` anschließend.

## Die Eigenschaft `order` und Barrierefreiheit

Die Verwendung der Eigenschaft `order` hat dieselben Auswirkungen auf die Barrierefreiheit wie das Ändern der Richtung mit `flex-direction`. Die Verwendung von `order` verändert die Reihenfolge, in der Elemente gezeichnet werden, sowie die Reihenfolge, in der sie visuell erscheinen. Sie verändert nicht die Reihenfolge der sequenziellen Navigation durch die Elemente. Wenn eine Person also mit der Tastatur durch den Inhalt der Seite tabbt, könnte sie auf sehr verwirrende Weise durch Ihre Inhalte springen.

Indem Sie durch eines der Live-Beispiele auf dieser Seite tabben, können Sie sehen, wie `order` möglicherweise eine ungewöhnliche Erfahrung für Personen schafft, die kein Zeigegerät wie eine Maus verwenden. Weitere Informationen über diese Diskrepanz zwischen visueller und logischer Reihenfolge sowie einige der möglichen Probleme für die Barrierefreiheit finden Sie in den folgenden Ressourcen.

- [Flexbox und die Diskrepanz bei der Tastaturnavigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) über tink.uk (2016)
- [HTML-Quellreihenfolge im Vergleich zur CSS-Anzeigereihenfolge](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) über adrianroselli.com (2015)
- [Der Konflikt responsiver Reihenfolgen beim Tastaturfokus](https://alastairc.uk/blog/2017/06/the-responsive-order-conflict/) über alastairc.uk (2017)

## Anwendungsfälle für `order`

Es gibt einige Anwendungsfälle, für die es hilfreich ist, dass die logische und damit die Lesereihenfolge von Flex-Elementen von der visuellen Reihenfolge getrennt ist. Sorgfältig eingesetzt kann die Eigenschaft `order` die einfache Implementierung einiger nützlicher gängiger Muster ermöglichen.

Möglicherweise haben Sie ein Design, etwa eine Karte, die einen Nachrichtenbeitrag anzeigt. Die Überschrift des Nachrichtenbeitrags ist das wichtigste hervorzuhebende Element und wäre das Element, zu dem eine Person springen könnte, wenn sie zwischen Überschriften tabbt, um den gewünschten Inhalt zum Lesen zu finden. Die Karte enthält außerdem ein Datum; das fertige Design, das wir erstellen möchten, sieht etwa so aus.

![Eine Designkomponente mit einem Datum, dann einer Überschrift und dann Inhalt.](order-card.png)

Visuell erscheint das Datum im Quellcode über der Überschrift. Wenn die Karte jedoch von einem Screenreader vorgelesen würde, wäre es vorzuziehen, dass zuerst der Titel und dann das Veröffentlichungsdatum angesagt wird. Dies können wir mit der Eigenschaft `order` erreichen.

Die Karte ist unser Flex-Container, wobei `flex-direction` auf `column` gesetzt ist. Wir geben dem Datum einen `order`-Wert von `-1`, wodurch es über der Überschrift platziert wird.

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

Diese kleinen Anpassungen sind die Art von Fällen, in denen die Eigenschaft `order` sinnvoll ist. Behalten Sie die logische Reihenfolge entsprechend der Lese- und Tab-Reihenfolge des Dokuments bei und bewahren Sie diese auf die barrierefreieste und strukturierteste Weise. Verwenden Sie `order` dann für rein visuelle Designanpassungen. Ordnen Sie keine Elemente um, die Tastaturfokus erhalten. Stellen Sie sicher, dass Sie Ihre Inhalte stets nur mit einer Tastatur statt mit einer Maus oder einem Touchscreen testen; dadurch wird sichtbar, ob Ihre Entwicklungsentscheidungen die Navigation durch die Inhalte komplexer machen.

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Verhältnisse von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [Umbruch von Flex-Elementen meistern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases)
- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
