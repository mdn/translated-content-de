---
title: Flexbox
slug: Learn/CSS/CSS_layout/Flexbox
l10n:
  sourceCommit: 07f80557969d0e30aa294bdf4603be05c3a61a50
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layoutmethode zum Arrangieren von Elementen in Reihen oder Spalten. Elemente _flexen_ (dehnen sich aus), um zusätzlichen Platz zu füllen oder schrumpfen, um in kleinere Bereiche zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis dafür, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man das Flexbox-Layoutsystem zur Erstellung von Weblayouts verwendet.
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

Der flexible Box-Layout von CSS ermöglicht Ihnen:

- Ein Blockelement innerhalb seines Elternteils vertikal zu zentrieren.
- Alle Kinder eines Containers die verfügbare Breite/Höhe gleichmäßig einnehmen zu lassen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem Layout mit mehreren Spalten die gleiche Höhe haben zu lassen, auch wenn sie unterschiedliche Inhaltsmengen enthalten.

Flexbox-Funktionen könnten die perfekte Lösung für Ihre eindimensionalen Layoutbedürfnisse sein. Lassen Sie uns eintauchen und es herausfinden!

## Einführung in ein einfaches Beispiel

In diesem Artikel werden Sie eine Reihe von Übungen durchgehen, die Ihnen helfen, zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie der ersten Starterdatei — [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html) aus unserem GitHub-Repo erstellen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und werfen Sie einen Blick auf den Code in Ihrem Code-Editor. Sie können es auch [live hier sehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html).

![Bild, das den Ausgangspunkt des Flexbox-Tutorials zeigt](bih741v.png)

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Überschrift der obersten Ebene und ein {{htmlelement("section")}}-Element mit drei {{htmlelement("article")}}s haben. Wir werden diese verwenden, um ein ziemlich standardmäßiges Drei-Spalten-Layout zu erstellen.

## Festlegen, welche Elemente als Flexible Boxen layouten

Zuerst müssen wir auswählen, welche Elemente als flexible Boxen ausgelegt werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente layouten, also setzen wir dies auf das {{htmlelement("section")}}:

```css
section {
  display: flex;
}
```

Dies führt dazu, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Items**. So sieht es aus:

![Ein zweireihiger Container, der eine einspaltige erste Reihe und ein dreispaltiges Layout in der zweiten Reihe enthält und zeigt, wie eine Webseite in verschiedene Layouts unterteilt werden kann, abhängig von den Inhalten](flexbox-example2.png)

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein Layout mit mehreren Spalten mit gleich großen Spalten, und die Spalten haben alle die gleiche Höhe. Dies liegt daran, dass die Standardwerte, die den Flex-Items (den Kindern des Flex-Containers) zugewiesen werden, so eingestellt sind, dass sie häufige Probleme wie dieses lösen.

Lassen Sie uns rekapitulieren, was hier passiert. Wenn Sie einem Element einen {{cssxref("display")}}-Wert von `flex` hinzufügen, wird es zu einem Flex-Container. Der Container wird als [Block-Level-Inhalt](/de/docs/Glossary/Block-level_content) angezeigt, in Bezug auf die Interaktion mit dem Rest der Seite. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in Flex-Items umgewandelt und als solche ausgelegt.

Sie können den Container inline machen, indem Sie einen [außenstehenden `display`-Wert](/de/docs/Web/CSS/display#outside) verwenden (z.B. `display: inline flex`), was beeinflusst, wie der Container selbst auf der Seite angeordnet wird. Der veraltete `inline-flex`-Displaywert zeigt den Container ebenfalls inline an. Wir werden uns in diesem Tutorial darauf konzentrieren, wie sich der Inhalt des Containers verhält, aber wenn Sie den Effekt von Inline- versus Block-Layout sehen möchten, können Sie sich den [Wertvergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display`-Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären detaillierter, was Flex-Items sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Items layouten, werden sie entlang zweier Achsen angeordnet:

![Drei Flex-Items in einer von links nach rechts-Sprache werden nebeneinander in einem Flexcontainer angeordnet. Die Hauptachse — die Achse des Flexcontainers in der Richtung, in der die Flex-Items angeordnet sind — verläuft horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Querachse verläuft vertikal, senkrecht zur Hauptachse. Die cross-start und cross-end befinden sich jeweils oben und unten. Die Länge des Flex-Items entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Items entlang der Querachse, in diesem Fall die Höhe, wird als Quergröße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Items angeordnet sind (zum Beispiel als Reihe über die Seite oder als Spalte nach unten über die Seite). Der Anfang und das Ende dieser Achse werden **main start** und **main end** genannt. Die Länge von der main-start-Kante zur main-end-Kante ist die **Hauptgröße**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Items angeordnet sind. Der Anfang und das Ende dieser Achse werden **cross start** und **cross end** genannt. Die Länge von der cross-start-Kante zur cross-end-Kante ist die **Quergröße**.
- Das Elternelement, auf dem `display: flex` gesetzt ist (das {{htmlelement("section")}} in unserem Beispiel), wird **Flex-Container** genannt.
- Die als flexible Boxen innerhalb des Flex-Containers angeordneten Elemente werden **Flex-Items** genannt (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Hinterkopf, während Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie bei den verwendeten Begriffen verwirrt sind.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welcher Richtung die Flexbox-Kinder angeordnet werden). Standardmäßig ist diese auf `row` gesetzt, wodurch sie in einer Reihe in der Richtung ausgelegt werden, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts im Falle eines englischen Browsers).

Versuchen Sie dem {{htmlelement("section")}}-Stil die folgende Deklaration hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout zurückversetzt, ähnlich wie sie vor dem Hinzufügen von CSS waren. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können auch Flex-Items in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder schließlich ihren Container überfüllen und das Layout brechen werden. Werfen Sie einen Blick auf unser [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox-wrap0.html) Beispiel und versuchen Sie [es live zu sehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (erstellen Sie jetzt eine lokale Kopie dieser Datei, wenn Sie diesem Beispiel folgen möchten):

![Das Beispiel flexbox hat alle Flex-Items in einer einzigen Reihe des Flexcontainers angeordnet. Das achte Flex-Item überläuft das Browserfenster, und die Seite hat sichtbare horizontale und vertikale Scrollleisten, da es nicht innerhalb der Breite des Fensters untergebracht werden kann, da die vorherigen sieben Flex-Items den verfügbaren Platz innerhalb des Ansichtsfensters eingenommen haben.](flexbox-example3.png)

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Items in einer einzigen Reihe zu platzieren, wenn `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn `flex-direction` auf `column` gesetzt ist. Eine Möglichkeit, dies zu beheben, besteht darin, die folgende Deklaration Ihrem {{htmlelement("section")}}-Stil hinzuzufügen:

```css
flex-wrap: wrap;
```

Fügen Sie auch die folgende Deklaration Ihrem {{htmlelement("article")}}-Stil hinzu:

```css
flex: 200px;
```

Versuchen Sie es jetzt. Sie werden sehen, dass das Layout mit diesem Zusatz viel besser aussieht:

![Flex-Items sind in mehreren Reihen im Flex-Container angeordnet. Die flex-wrap-Eigenschaft ist im Flex-Container auf 'wrap' gesetzt, was die Flex-Items in einer neuen Reihe anzeigt, wenn die Flex-Items in der vorherigen Reihe außerhalb des Flex-Containers überlaufen. Jedes Flex-Item erhält eine Breite von 200 Pixeln. Alle Items sind so gedehnt, dass sie die gleiche Höhe wie das Flex-Item mit dem meisten Inhalt haben.](flexbox-example4.png)

Jetzt haben wir mehrere Reihen. Jede Reihe hat so viele Flexbox-Kinder, wie es sinnvoll ist. Jedes Überlaufen wird in die nächste Zeile verschoben. Die `flex: 200px`-Deklaration, die auf die Artikel gesetzt wurde, bedeutet, dass jedes mindestens `200px` breit sein wird. Wir werden diese Eigenschaft später noch genauer besprechen. Sie werden vielleicht auch bemerken, dass die letzten paar Kinder in der letzten Reihe jeweils breiter gemacht werden, damit die gesamte Reihe weiterhin gefüllt ist.

Aber es gibt noch mehr, was wir hier tun können. Zuerst versuchen Sie, Ihre {{cssxref("flex-direction")}}-Eigenschaft auf `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie immer noch Ihr Layout mit mehreren Reihen haben, aber es beginnt in der gegenüberliegenden Ecke des Browserfensters und fließt umgekehrt.

## flex-flow Kurzform

An dieser Stelle ist es erwähnenswert, dass eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} existiert: {{cssxref("flex-flow")}}. So können Sie beispielsweise

```css
flex-direction: row;
flex-wrap: wrap;
```

ersetzen durch

```css
flex-flow: row wrap;
```

## Flexible Größenanpassung von Flex-Items

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und sehen, wie wir steuern können, wie viel Platz Flex-Items im Vergleich zu anderen Flex-Items einnehmen. Öffnen Sie Ihre lokale Kopie von [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html), oder machen Sie eine Kopie von [flexbox1.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox1.html) als neuen Ausgangspunkt ([sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Zuerst fügen Sie die folgende Regel am Ende Ihres CSS hinzu:

```css
article {
  flex: 1;
}
```

Dies ist ein proportionaler Wert ohne Einheit, der bestimmt, wie viel verfügbaren Platz entlang der Hauptachse jedes Flex-Item im Vergleich zu anderen Flex-Items einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element den gleichen Wert (einen Wert von `1`), was bedeutet, dass sie alle eine gleiche Menge des überschüssigen Platzes einnehmen, der nach Festlegung von Eigenschaften wie Polsterung und Rand übrig bleibt. Dieser Wert wird proportional unter den Flex-Items geteilt: jedem Flex-Item einen Wert von `400000` zu geben, hätte genau den gleichen Effekt.

Jetzt fügen Sie die folgende Regel unter der vorherigen ein:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Nun werden Sie beim Aktualisieren sehen, dass das dritte {{htmlelement("article")}}-Element doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es gibt jetzt insgesamt vier proportionale Einheiten (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Items haben jeweils eine Einheit, sodass sie jeweils 1/4 des verfügbaren Platzes einnehmen. Das dritte Element hat zwei Einheiten, sodass es 2/4 des verfügbaren Platzes einnimmt (oder die Hälfte).

Sie können auch einen Mindestgrößenwert innerhalb des Flex-Werts angeben. Versuchen Sie, Ihre vorhandenen Artikelregeln wie folgt zu aktualisieren:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

Dies besagt im Wesentlichen: "Jedes Flex-Item bekommt zuerst `200px` des verfügbaren Platzes. Danach wird der Rest des verfügbaren Platzes entsprechend den Proportionseinheiten aufgeteilt." Versuchen Sie zu aktualisieren und Sie werden einen Unterschied in der Aufteilung des Platzes sehen.

![Ein Flexcontainer mit drei Flex-Items. Das dritte Flex-Item ist etwas größer als die ersten beiden.](flexbox-example1.png)

Alle Flex-Items haben eine Mindestbreite von 200 Pixeln—festgelegt mit 'flex'. Der Flex-Wert für die ersten beiden Flex-Items ist 1 und für das dritte Item 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 proportionale Einheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Items zugewiesen und 2 Einheiten dem dritten Flex-Item, was das dritte Flex-Item breiter macht als die anderen beiden, die die gleiche Breite haben.

Der eigentliche Wert von Flexbox zeigt sich in seiner Flexibilität/Anpassungsfähigkeit. Wenn Sie das Browserfenster ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzform gegenüber Langform

{{cssxref("flex")}} ist eine Kurzformeigenschaft, die bis zu drei verschiedene Werte angeben kann:

- Der erwähnte, proportionale Wert ohne Einheit. Dieser kann separat mit der Langform-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter Einheitsloser Proportionenwert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Items ihren Container überlaufen. Dieser Wert gibt an, um wie viel ein Element schrumpfen wird, um ein Überlaufen zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion und wir werden nicht weiter darauf eingehen in diesem Artikel.
- Der oben diskutierte Mindestgrößenwert. Dieser kann separat mit dem Langformwert {{cssxref("flex-basis")}} angegeben werden.

Wir raten von der Verwendung der Langform-Flex-Eigenschaften ab, es sei denn, Sie müssen wirklich (z.B. um etwas zuvor Festgelegtes zu überschreiben). Sie führen zu viel zusätzlichem Code und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können Flexbox-Funktionen auch verwenden, um Flex-Items entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erforschen, indem wir uns ein neues Beispiel ansehen: [flex-align0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flex-align0.html) ([siehe es auch live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)). Wir werden dies in eine ordentliche, flexible Schaltfläche/Toolbar umwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gequetscht sind.

![Fünf Schaltflächen sind in einer Reihe in einem Flexcontainer angeordnet. Die Schaltflächen sind in die obere linke Ecke gequetscht, was nicht ordentlich aussieht.](flexbox-example5.png)

Zuerst erstellen Sie eine lokale Kopie dieses Beispiels.

Fügen Sie nun das folgende am Ende des Beispiels-CSS hinzu:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

![Fünf Schaltflächen sind in einer Reihe in einem Flexcontainer angeordnet. Die Flex-Items sind vertikal zentriert und gleichmäßig horizontal verteilt.](flexbox_center_space-around.png)

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Wir haben dies mit zwei neuen Eigenschaften erreicht. Die Flex-Items sind in der Mitte der Querachse positioniert, indem die Eigenschaft `align-items` auf das `center` gesetzt wird. Die Flex-Items sind entlang der Hauptachse mit gleichmäßigem Abstand angeordnet, indem die `justify-content`-Eigenschaft auf `space-around` gesetzt wird.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Items auf der Querachse sitzen.

- Standardmäßig ist der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Er dehnt alle Flex-Items aus, um das Elternteil in Richtung der Querachse zu füllen. Wenn das Elternteil keine feste Größe in Richtung der Querachse hat, dann werden alle Flex-Items so hoch (oder breit) wie das höchste (oder breiteste) Flex-Item. Dies ist, wie unser erstes Beispiel standardmäßig Spalten gleicher Höhe hatte.
- Der Wert `center`, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Items ihre intrinsischen Dimensionen beibehalten, aber in der Querachse zentriert werden. Deshalb sind die Schaltflächen unseres aktuellen Beispiels vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` verwenden, die alle Items am Anfang bzw. Ende der Querachse ausrichten. Die `baseline`-Werte richten die Flex-Items nach ihrer Basislinie aus; im Grunde wird die Unterkante der ersten Textzeile jedes Flex-Items mit der Unterkante der ersten Zeile des Elements mit dem größten Abstand zwischen dem Kreuzanfang und dieser Basislinie ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Items überschreiben, indem Sie ihnen die {{cssxref("align-self")}}-Eigenschaft zuweisen. Fügen Sie zum Beispiel folgendes Ihrer CSS hinzu:

```css
button:first-child {
  align-self: flex-end;
}
```

![Fünf Schaltflächen sind in einer Reihe in einem Flexcontainer angeordnet. Alle Flex-Items außer dem ersten sind in der Mitte der Querachse oder vertikal zentriert. Das erste Item ist bündig gegen den Boden des Flexcontainers, am Ende der Querachse Die Flex-Items sind gleichmäßig entlang der Hauptachse oder Breite des Containers verteilt.](flexbox_first-child_flex-end.png)

Sehen Sie sich an, welche Auswirkungen dies hat, und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Items auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich wie `start` verhält, was alle Items am Anfang der Hauptachse anordnet.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu platzieren.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end`, abhängig von der Schreibrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Er macht die Flex-Items in der Mitte der Hauptachse.
- Der oben verwendete Wert, `space-around`, ist nützlich — er verteilt alle Items gleichmäßig entlang der Hauptachse mit etwas Platz an beiden Enden.
- Es gibt einen weiteren Wert, `space-between`, der sehr ähnlich zu `space-around` ist, außer dass er an beiden Enden keinen Platz lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Anordnen von Flex-Items

Flexbox hat auch eine Funktion zum Ändern der Layoutreihenfolge von Flex-Items, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layoutmethoden nicht möglich ist.

Versuchen Sie, den folgenden CSS-Code zu Ihrem Button-Bar-Beispiel hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass die "Smile"-Taste an das Ende der Hauptachse verschoben wurde. Lassen Sie uns ein wenig detaillierter darüber sprechen, wie das funktioniert:

- Standardmäßig haben alle Flex-Items einen {{cssxref("order")}} Wert von `0`.
- Flex-Items mit höheren angegebenen Ordnungswerten erscheinen später in der Anzeigereihenfolge als Items mit niedrigeren Ordnungswerten.
- Flex-Items mit dem gleichen Ordnungswert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Items haben, deren Ordnungswerte als `2`, `1`, `1` und `0` festgelegt wurden, wäre ihre Anzeigereihenfolge 4., 2., 3., dann 1.
- Das 3. Item erscheint nach dem 2., weil es den gleichen Ordnungswert hat und danach in der Quellreihenfolge kommt.

Sie können negative Ordnungswerte festlegen, damit Items früher als Items mit einem Wert von `0` erscheinen. Zum Beispiel können Sie die "Blush"-Taste mit der folgenden Regel am Anfang der Hauptachse erscheinen lassen:

```css
button:last-child {
  order: -1;
}
```

Obwohl Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorreihenfolge die gleiche wie die Code-Reihenfolge. Die Reihenfolge fokussierbarer Elemente zu ändern, kann die Benutzerfreundlichkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, mit Flexbox einige ziemlich komplexe Layouts zu erstellen. Es ist vollkommen in Ordnung, ein Flex-Item zu einem Flex-Container zu machen, damit seine Kinder ebenfalls als flexible Boxen angeordnet werden. Schauen Sie sich [complex-flexbox.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/complex-flexbox.html) an ([siehe es auch live](https://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![Das Beispiel flexbox hat drei Flex-Item-Kinder, die in einer Reihe angeordnet sind. Die ersten beiden sind gleich breit, das dritte ist etwas breiter. Das dritte Flex-Item ist auch ein Flex-Container. Es hat eine Reihe von Schaltflächen in zwei Reihen gefolgt von Text. Die erste Reihe von Schaltflächen hat 4 Schaltflächen, die in einer Reihe angeordnet sind; die Schaltflächen sind gleich breit und nehmen die volle Breite des Containers ein. Die zweite Reihe hat eine einzelne Schaltfläche, die die gesamte Breite der Reihe alleine einnimmt.](flexbox-example7.png)

Dieses komplexe Layout hat einige Flex-Items, die auch Flex-Container sind. Der HTML-Code dafür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Werfen wir einen Blick auf den Code, den wir für das Layout verwendet haben.

Zuerst legen wir fest, dass die Kinder des {{htmlelement("section")}} als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Als nächstes legen wir einige Flex-Werte für die {{htmlelement("article")}}s selbst fest. Beachten Sie besonders die zweite Regel hier: Wir legen fest, dass das dritte {{htmlelement("article")}} seine Kinder ebenfalls wie Flex-Items anordnet, diesmal aber wie eine Spalte.

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

Dann wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann legen wir seine Kinder (die {{htmlelement("button")}}-Elemente) fest, die auch wie Flex-Items angeordnet werden sollen. Hier legen wir sie in einer umbruchfähigen Reihe an und richten sie in der Mitte des verfügbaren Raums aus, wie wir es bei dem individuellen Schaltflächenbeispiel, das wir zuvor gesehen haben, gemacht haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir einige Größen auf die Taste. Dieses Mal, indem wir ihr einen Flex-Wert von `1 auto` geben. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie die Breite Ihres Browserfensters anpassen. Die Tasten werden so viel Platz einnehmen, wie sie können. So viele werden in eine Zeile passen, wie es bequem ist; darüber hinaus werden sie auf eine neue Zeile fallen.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie sich diese Informationen eingeprägt haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox_skills).

## Zusammenfassung

Damit endet unsere Tour durch die Grundlagen von Flexbox. Wir hoffen, dass Sie Spaß hatten und viel damit herumspielen, während Sie Ihr Lernen fortsetzen. Als nächstes werden wir einen weiteren wichtigen Aspekt von CSS-Layouts ansehen: [CSS-Raster](/de/docs/Learn/CSS/CSS_layout/Grids).

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Sortieren von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Steuerung der Verhältnisse von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lernspiel, um die Grundlagen von Flexbox zu erlernen und besser zu verstehen

{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}
