---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layout-Methode, um Elemente in Reihen oder Spalten anzuordnen. Elemente _flexen_ (dehnen sich aus), um zusätzlichen Raum zu füllen, oder schrumpfen, um in kleinere Bereiche zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schrift-Styling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Zweck von Flexbox — ein Set von Block- oder Inline-Elementen in einer Dimension flexibel anzuordnen.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Item, Hauptachse und Querachse.</li>
          <li>Verstehen, was <code>display: flex</code> standardmäßig bietet.</li>
          <li>Wie man Inhalte in neue Reihen und Spalten umbricht.</li>
          <li>Flexible Größenanpassung und Anordnung von Flex-Items.</li>
          <li>Rechtfertigung und Ausrichtung von Inhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

Das CSS Flexible Box Layout ermöglicht Ihnen:

- Ein Block von Inhalten innerhalb seines Elternteils vertikal zu zentrieren.
- Alle Kinder eines Containers die gleiche Menge an verfügbarer Breite/Höhe einnehmen zu lassen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem Mehrspaltenlayout gleich hoch zu machen, auch wenn sie unterschiedliche Mengen an Inhalt enthalten.

Flexbox-Features könnten die perfekte Lösung für Ihre eindimensionalen Layout-Bedürfnisse sein. Lassen Sie uns eintauchen und es herausfinden!

## Einführung in ein einfaches Beispiel

In diesem Artikel werden Sie durch eine Reihe von Übungen gehen, um zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie der ersten Starterdatei — [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html) aus unserem GitHub-Repo erstellen. Laden Sie sie in einem modernen Browser (wie Firefox oder Chrome) und schauen Sie sich den Code in Ihrem Code-Editor an. Sie können es auch [hier live sehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html).

![Bild, das den Ausgangspunkt des Flexbox-Tutorials zeigt](bih741v.png)

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Überschrift der obersten Ebene darin haben und ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Wir werden diese verwenden, um ein ziemlich standardmäßiges Drei-Spalten-Layout zu erstellen.

## Angeben, welche Elemente als flexible Boxen angeordnet werden sollen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf das {{htmlelement("section")}}:

```css
section {
  display: flex;
}
```

Dies bewirkt, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Items** werden. So sieht es aus:

![Ein zwei Reihen Container, der eine einzelne Spalte in der ersten Reihe und ein 3-Spalten-Layout in der zweiten Reihe enthält, das zeigt, wie eine Webseite je nach Inhalt in verschiedene Layouts unterteilt werden kann](flexbox-example2.png)

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein Mehrspaltenlayout mit gleich großen Spalten und alle Spalten haben die gleiche Höhe. Dies liegt daran, dass die Standardwerte für Flex-Items (die Kinder des Flex-Containers) so eingerichtet sind, dass sie häufige Probleme wie dieses lösen.

Lassen Sie uns zusammenfassen, was hier passiert. Das Hinzufügen eines {{cssxref("display")}}-Wertes von `flex` zu einem Element macht es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Level-Inhalt")}} angezeigt in Bezug auf seine Interaktion mit dem Rest der Seite. Wenn das Element zu einem Flex-Container gemacht wird, werden seine Kinder zu Flex-Items (und als solche angeordnet).

Sie können den Container inline machen, indem Sie einen [außenliegenden `display`-Wert](/de/docs/Web/CSS/display#outside) (z.B. `display: inline flex`) verwenden, der beeinflusst, wie der Container selbst auf der Seite angeordnet wird. Der Legacy-Wert `inline-flex` zeigt den Container ebenfalls inline an. In diesem Tutorial konzentrieren wir uns darauf, wie sich die Inhalte des Containers verhalten, aber wenn Sie den Effekt von Inline gegenüber Blocklayout sehen möchten, können Sie sich den [Wertvergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display`-Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären ausführlicher, was Flex-Items sind und was in einem Element passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Items angeordnet werden, werden sie entlang von zwei Achsen angeordnet:

![Drei Flex-Items in einer von links nach rechts verlaufenden Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse – die Achse des Flex-Containers in der Richtung, in der die Flex-Items angeordnet sind – ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich links bzw. rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Die Queranfangs- und Querendachsen befinden sich oben und unten. Die Länge des Flex-Items entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Items entlang der Querachse, in diesem Fall die Höhe, als Quergröße.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Items angeordnet sind (zum Beispiel als Reihe über die Seite oder als Spalte nach unten auf der Seite). Der Anfang und das Ende dieser Achse werden als **Hauptanfang** und **Hauptende** bezeichnet. Die Länge von der Hauptanfangs-Kante zur Hauptend-Kante ist die **Hauptgröße**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Items angeordnet sind. Der Anfang und das Ende dieser Achse werden als **Queranfang** und **Querende** bezeichnet. Die Länge von der Queranfangs-Kante zur Querend-Kante ist die **Quergröße**.
- Das Elternelement, das den Wert `display: flex` gesetzt hat (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die Elemente, die als flexible Boxen innerhalb des Flex-Containers angeordnet sind, werden als **Flex-Items** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Hinterkopf, wenn Sie die nächsten Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie sich über einen der verwendeten Begriffe nicht sicher sind.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (welche Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist dies auf `row` gesetzt, was dazu führt, dass sie in einer Reihe in der Richtung angeordnet werden, wie sie bei der Standardsprache Ihres Browsers funktioniert (von links nach rechts, im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout zurückversetzt, so wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Items auch in einer umgekehrten Richtung anordnen, indem Sie die Werte `row-reverse` und `column-reverse` verwenden. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder irgendwann ihren Container überlaufen und das Layout zerstören. Werfen Sie einen Blick auf unser [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox-wrap0.html) Beispiel und versuchen [Sie es live anzusehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (nehmen Sie jetzt eine lokale Kopie dieser Datei, wenn Sie diesem Beispiel folgen möchten):

![Das Beispiel für Flexbox zeigt alle Flex-Items in einer einzigen Reihe des Flex-Containers angeordnet. Das achte Flex-Item läuft über das Browserfenster hinaus und die Seite hat sichtbare horizontale und vertikale Scroll-Leisten, da es nicht innerhalb der Breite des Fensters untergebracht werden kann, da die vorhergehenden sieben Flex-Items den im Viewport verfügbaren Raum eingenommen haben.](flexbox-example3.png)

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Items in einer einzigen Reihe anzuordnen, wenn die `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn die `flex-direction` auf `column` gesetzt ist. Eine Möglichkeit, dies zu beheben, besteht darin, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-wrap: wrap;
```

Fügen Sie auch die folgende Deklaration zu Ihrer {{htmlelement("article")}}-Regel hinzu:

```css
flex: 200px;
```

Versuchen Sie es jetzt. Sie werden sehen, dass das Layout mit diesem enthaltenen Code viel besser aussieht:

![Flex-Items sind in mehreren Zeilen im Flex-Container angeordnet. Die Eigenschaft flex-wrap ist auf 'wrap' im Flex-Container gesetzt, was die Flex-Items in einer neuen Reihe anzeigt, wenn die Flex-Items in der vorherigen Reihe über den Flexbox-Container hinausgehen. Jedem Flex-Item ist eine Breite von 200 Pixeln zugewiesen. Alle Elemente sind so gestreckt, dass sie die gleiche Höhe haben, so hoch wie das Flex-Item mit dem meisten Inhalt.](flexbox-example4.png)

Wir haben jetzt mehrere Zeilen. Jede Zeile hat so viele Flexbox-Kinder aufgenommen, wie sinnvoll ist. Jeder Überlauf wird auf die nächste Linie verschoben. Die `flex: 200px`-Deklaration, die auf die Artikel gesetzt ist, bedeutet, dass jedes mindestens `200px` breit sein wird. Wir werden später ausführlicher auf diese Eigenschaft eingehen. Sie werden vielleicht auch bemerken, dass die letzten Kinder in der letzten Reihe jeweils breiter gemacht werden, sodass die gesamte Reihe noch gefüllt ist.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zuerst, Ihren {{cssxref("flex-direction")}}-Eigenschaftswert auf `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie noch Ihr Mehrzeilenlayout haben, aber es beginnt in der gegenüberliegenden Ecke des Browserfensters und fließt in umgekehrter Richtung.

## flex-flow Kurzform

An dieser Stelle ist es erwähnenswert, dass eine Abkürzung für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} existiert: {{cssxref("flex-flow")}}. So können Sie beispielsweise

```css
flex-direction: row;
flex-wrap: wrap;
```

ersetzen durch

```css
flex-flow: row wrap;
```

## Flexible Größenanpassung von Flex-Items

Kehren wir nun zu unserem ersten Beispiel zurück und untersuchen, wie wir kontrollieren können, welchen Anteil am Platz Flex-Items im Vergleich zu anderen Flex-Items einnehmen. Öffnen Sie Ihre lokale Kopie von [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html) oder kopieren Sie [flexbox1.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox1.html) als neuen Ausgangspunkt ([sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu:

```css
article {
  flex: 1;
}
```

Dies ist ein einheitsloser Proportionswert, der diktieren, wie viel verfügbarer Platz entlang der Hauptachse jedes Flex-Item im Vergleich zu den anderen Flex-Items einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element den gleichen Wert (einen Wert von `1`), das bedeutet, dass sie alle den gleichen Anteil am überschüssigen Raum einnehmen, der nach Einstellungen wie Padding und Margin übrigbleibt. Dieser Wert wird proportional unter den Flex-Items geteilt: jedem Flex-Item einen Wert von `400000` zu geben, hätte genau denselben Effekt.

Fügen Sie nun die folgende Regel unterhalb der vorherigen ein:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Wenn Sie jetzt aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel von der verfügbaren Breite einnimmt wie die anderen beiden. Es gibt jetzt insgesamt vier Proportionseinheiten (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Items haben jeweils eine Einheit, also nehmen sie jeweils 1/4 des verfügbaren Raums ein. Das dritte hat zwei Einheiten, also nimmt es 2/4 des verfügbaren Raums ein (oder die Hälfte).

Sie können auch einen Mindestgrößenwert innerhalb des Flex-Wertes angeben. Versuchen Sie, Ihre bestehenden Artikel-Regeln so zu aktualisieren:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

Dies besagt im Wesentlichen: "Jedes Flex-Item erhält zuerst `200px` des verfügbaren Raums. Danach wird der Rest des verfügbaren Raums entsprechend den Proportionseinheiten aufgeteilt." Versuchen Sie, zu aktualisieren, und Sie werden einen Unterschied in der Art und Weise sehen, wie der Raum aufgeteilt wird.

![Ein Flex-Container mit drei Flex-Items. Das dritte Flex-Item ist etwas größer als die ersten beiden.](flexbox-example1.png)

Alle Flex-Items haben eine Mindestbreite von 200 Pixeln—gesetzt mit 'flex'. Der Wert von flex für die ersten beiden Flex-Items ist 1 und für das dritte Element ist es 2. Dies teilt den verbleibenden Platz im Flex-Container in 4 Proportionseinheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Items zugewiesen und 2 Einheiten werden dem dritten Flex-Item zugewiesen, wodurch das dritte Flex-Item breiter wird als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in seiner Flexibilität/Responsivität. Wenn Sie das Browserfenster in der Größe ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzform versus Langform

{{cssxref("flex")}} ist eine Kurzform-Eigenschaft, die bis zu drei verschiedene Werte angeben kann:

- Der einheitslose Proportionswert, den wir oben besprochen haben. Dies kann separat mit der Langform-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter einheitsloser Proportionswert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Items ihren Container überlaufen. Dieser Wert gibt an, wie stark ein Element schrumpft, um ein Überlaufen zu verhindern. Dies ist ein ziemlich fortgeschrittenes Flexbox-Feature und wir werden es in diesem Artikel nicht weiter behandeln.
- Der oben besprochene Mindestgrößenwert. Dieser kann separat mit dem Langform-Wert {{cssxref("flex-basis")}} angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, Sie müssen es wirklich (zum Beispiel, um etwas zuvor Festgelegtes zu überschreiben). Sie führen dazu, dass viel zusätzlicher Code geschrieben wird und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können Flexbox-Features auch verwenden, um Flex-Items entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen: [flex-align0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flex-align0.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)). Wir werden dies in eine ordentliche, flexible Schaltfläche/Toolbar verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gequetscht sind.

![Fünf Buttons sind in einer Reihe in einem Flex-Container angeordnet. Die Buttons sind in der linken oberen Ecke gequetscht, was nicht ordentlich aussieht.](flexbox-example5.png)

Erstellen Sie zuerst eine lokale Kopie dieses Beispiels.

Fügen Sie nun Folgendes am Ende des Beispiels in das CSS ein:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

![Fünf Buttons sind in einer Reihe in einem Flex-Container angeordnet. Die Flex-Items sind vertikal zentriert und sie sind horizontal gleichmäßig verteilt.](flexbox_center_space-around.png)

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Wir haben dies durch zwei neue Eigenschaften getan. Die Flex-Items sind in der Mitte der Querachse positioniert, indem die `align-items`-Eigenschaft auf `center` gesetzt wird. Die Flex-Items sind entlang der Hauptachse durch Setzen der `justify-content`-Eigenschaft auf `space-around` gleichmäßig verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Items auf der Querachse sitzen.

- Standardmäßig ist der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Dadurch werden alle Flex-Items gedehnt, um den Elternteil in der Richtung der Querachse auszufüllen. Wenn der Elternteil nicht eine feste Größe in der Richtung der Querachse hat, dann werden alle Flex-Items genauso hoch (oder breit) wie das höchste (oder breiteste) Flex-Item. So hatte unser erstes Beispiel standardmäßig gleich hohe Spalten.
- Der `center`-Wert, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsische Dimensionen beibehalten, aber entlang der Querachse zentriert sind. Deshalb sind die Schaltflächen im aktuellen Beispiel vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` haben, die alle Elemente am Anfang und Ende der Querachse entsprechend ausrichten. Die `baseline`-Werte richten die Flex-Items an ihrer Grundlinie aus. Grundsätzlich wird die Unterseite der ersten Textzeile jedes Flex-Items mit dem untersten Punkt der ersten Zeile des Elements mit der größten Entfernung zwischen dem Queranfang und dieser Grundlinie ausgerichtet. Weitere Details finden Sie unter {{cssxref("align-items")}}.

Sie können das {{cssxref("align-items")}}-Verhalten für einzelne Flex-Items überschreiben, indem Sie ihnen die {{cssxref("align-self")}}-Eigenschaft zuweisen. Fügen Sie beispielsweise Folgendes zu Ihrem CSS hinzu:

```css
button:first-child {
  align-self: flex-end;
}
```

![Fünf Buttons sind in einer Reihe in einem Flex-Container angeordnet. Alle Flex-Items außer dem ersten sind in der Mitte der Querachse zentriert oder vertikal zentriert. Das erste Element befindet sich bündig an der Unterseite des Flex-Containers, am Ende der Querachse Die Flex-Items sind entlang der Hauptachse oder Breite des Containers gleichmäßig verteilt.](flexbox_first-child_flex-end.png)

Sehen Sie sich an, welche Auswirkungen dies hat und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Items auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich wie `start` verhält, was alle Elemente am Anfang der Hauptachse platziert.
- Sie können `end` oder `flex-end` verwenden, um sie ans Ende zu setzen.
- Die Werte `left` und `right` verhalten sich als `start` oder `end`, abhängig von der Schreibrichtungsrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Es bringt die Flex-Items, um in der Mitte der Hauptachse zu sitzen.
- Der oben verwendete Wert, `space-around`, ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit etwas Platz am Anfang und Ende.
- Es gibt einen weiteren Wert, `space-between`, der dem `space-around` sehr ähnlich ist, außer dass er keinen Platz am Anfang oder Ende lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Anordnung von Flex-Items

Flexbox hat auch eine Funktion zur Änderung der Layout-Reihenfolge von Flex-Items, ohne die Quellordnung zu beeinflussen. Dies ist etwas, das mit traditionellen Layout-Methoden unmöglich ist.

Versuchen Sie, den folgenden CSS zu Ihrem Button-Leisten-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass sich der "Smile"-Button an das Ende der Hauptachse verschoben hat. Lassen Sie uns besprechen, wie dies im Detail funktioniert:

- Standardmäßig haben alle Flex-Items einen {{cssxref("order")}}-Wert von `0`.
- Flex-Items mit höheren angegebenen Order-Werten erscheinen später in der Anzeigereihenfolge als Items mit niedrigeren Order-Werten.
- Flex-Items mit demselben Order-Wert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Items haben, deren Order-Werte `2`, `1`, `1` und `0` sind, wäre ihre Anzeigereihenfolge 4., 2., 3., dann 1.
- Das 3. Item erscheint nach dem 2., weil es denselben Order-Wert hat und sich danach in der Quellordnung befindet.

Sie können negative Order-Werte setzen, um Elemente früher als Items erscheinen zu lassen, deren Wert `0` ist. Zum Beispiel können Sie den "Blush"-Button mit der folgenden Regel an den Anfang der Hauptachse verschieben:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Order mit `order` ändern können, bleibt die Tabulatorreihenfolge dieselbe wie die Quellreihenfolge. Das Ändern der Reihenfolge der fokussierbaren Elemente kann die Benutzerfreundlichkeit für Ihre Tastaturbenutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist völlig in Ordnung, ein Flex-Item auch zu einem Flex-Container zu machen, sodass seine Kinder auch als flexible Boxen angeordnet werden. Werfen Sie einen Blick auf [complex-flexbox.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/complex-flexbox.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![Das Beispiel für Flexbox hat drei Flex-Item-Kinder, die in einer Reihe angeordnet sind. Die ersten beiden sind gleich breit, das dritte ist etwas breiter. Das dritte Flex-Item ist ebenfalls ein Flex-Container. Es hat eine Reihe von Schaltflächen in zwei Reihen gefolgt von Text. Die erste Reihe von Schaltflächen hat 4 Schaltflächen, die in einer Reihe angeordnet sind; die Schaltflächen haben die gleiche Breite und nehmen die gesamte Breite des Containers ein. Die zweite Zeile hat eine einzelne Schaltfläche, die die gesamte Breite der Zeile für sich alleine einnimmt.](flexbox-example7.png)

Dieses komplexe Layout hat einige Flex-Items, die auch Flex-Container sind. Das HTML hierfür ist ziemlich geradlinig. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Der dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Schauen wir uns den Code an, den wir für das Layout verwendet haben.

Zuerst setzen wir die Kinder des {{htmlelement("section")}} so, dass sie als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Als nächstes setzen wir einige Flex-Werte auf die {{htmlelement("article")}} selbst. Beachten Sie insbesondere die zweite Regel hier: Wir setzen den dritten {{htmlelement("article")}}, die Kinder so anzuordnen, wie Flex-Items auch, aber diesmal legen wir sie als Spalte an.

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
```

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um effektiv eine Mindesthöhe von `100px` zu geben, dann setzen wir seine Kinder (die {{htmlelement("button")}}-Elemente), um auch als Flex-Items angeordnet zu werden. Hier legen wir sie in einer umbruchenden Zeile an und ordnen sie in der Mitte des verfügbaren Raums an, so wie wir es mit dem individuellen Button-Beispiel, das wir zuvor gesehen haben, gemacht haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir einige Größen auf den Button. Diesmal indem wir ihm einen Flex-Wert von `1 auto` geben. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie versuchen, Ihre Browserfensterbreite zu ändern. Die Buttons nehmen so viel Platz wie möglich ein. So viele wie bequem sind werden in einer Linie passen; darüber hinaus fallen sie auf eine neue Linie.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox_skills).

## Zusammenfassung

Damit endet unser Rundgang durch die Grundlagen von Flexbox. Wir hoffen, Sie hatten Spaß und werden damit spielen, während Sie mit Ihrem Lernen weiter fortfahren. Als nächstes werden wir einen weiteren wichtigen Aspekt von CSS-Layouts betrachten: [CSS Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Anordnung von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Kontrollieren der Proportionen von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf eine visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lehrspiel, um die Grundlagen von Flexbox zu lernen und besser zu verstehen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
