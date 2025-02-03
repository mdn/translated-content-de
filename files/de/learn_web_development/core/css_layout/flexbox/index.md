---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: ea832563653731a7bf7c0b74ec33dd436635807d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine ein-dimensionale Layout-Methode zur Anordnung von Elementen in Zeilen oder Spalten. Elemente _flektieren_ (erweitern sich), um zusätzlichen Platz zu füllen, oder schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle grundlegenden Konzepte.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">CSS-Layout-Grundkonzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — eine flexible Anordnung einer Reihe von Block- oder Inline-Elementen in einer Dimension.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Element, Hauptachse und Querachse.</li>
          <li>Verständnis, was <code>display: flex</code> Ihnen standardmäßig bietet.</li>
          <li>Wie man Inhalte auf neue Zeilen und Spalten erweitert.</li>
          <li>Flexible Größenanpassung und Reihenfolge von Flex-Elementen.</li>
          <li>Inhalte rechtfertigen und ausrichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS Flexible Box Layout ermöglicht Ihnen:

- Einen Block von Inhalten vertikal im übergeordneten Element zu zentrieren.
- Alle Kinder eines Containers nehmen den gleichen Betrag an verfügbarer Breite/Höhe ein, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem mehrspaltigen Layout übernehmen die gleiche Höhe, auch wenn sie eine unterschiedliche Menge an Inhalten enthalten.

Flexbox-Funktionen können die perfekte Lösung für Ihre ein-dimensionale Layout-Anforderungen sein. Lassen Sie uns genauer hinschauen!

## Ein einfaches Beispiel einführen

In diesem Artikel werden Sie eine Reihe von Übungen durchgehen, um zu verstehen, wie Flexbox funktioniert. Um anzufangen, sollten Sie eine lokale Kopie der ersten Starterdatei erstellen — [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html) aus unserem GitHub-Repo. Laden Sie es in einen modernen Browser (wie Firefox oder Chrome) und sehen Sie sich den Code in Ihrem Code-Editor an. Sie können es auch [hier live sehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html).

![Bild zur Darstellung des Startpunkts des Flexbox-Tutorials](bih741v.png)

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer übergeordneten Überschrift darin und ein {{htmlelement("section")}}-Element mit drei {{htmlelement("article")}}s haben. Wir werden diese verwenden, um ein ziemlich standardmäßiges dreispaltiges Layout zu erstellen.

## Festlegen von Elementen, die als flexible Boxen angeordnet werden sollen

Zuerst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das übergeordnete Element der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf das {{htmlelement("section")}}:

```css
section {
  display: flex;
}
```

Dies führt dazu, dass das `<section>`-Element ein **Flex-Container** wird und seine Kinder werden **Flex-Elemente**. Und so sieht es aus:

![Ein zweizeiliger Behälter, der eine einzelne Spalte in der ersten Zeile und ein 3-Spalten-Layout in der zweiten Zeile enthält, welches zeigt, wie eine Webseite in verschiedene Layouts je nach dem Inhalt geteilt werden kann.](flexbox-example2.png)

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein mehrspaltiges Layout mit gleichgroßen Spalten, und die Spalten sind alle gleich hoch. Das liegt daran, dass die Standardwerte, die Flex-Elementen (den Kindern des Flex-Containers) zugewiesen werden, so eingestellt sind, dass sie häufige Probleme wie dieses lösen.

Lassen Sie uns wiederholen, was hier passiert. Wenn Sie einem Element einen {{cssxref("display")}}-Wert von `flex` hinzufügen, wird es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Level-Inhalt")}} angezeigt, wie er mit dem Rest der Seite interagiert. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in Flex-Elemente umgewandelt (und angeordnet) bzw. als solche.

Sie können den Container inline machen, indem Sie einen [außenliegenden `display`-Wert](/de/docs/Web/CSS/display#outside) verwenden (z.B. `display: inline flex`), der beeinflusst, wie der Container selbst auf der Seite angeordnet wird. Der alte `inline-flex` Display-Wert zeigt den Container ebenfalls inline an. Wir konzentrieren uns in diesem Tutorial darauf, wie sich die Inhalte des Containers verhalten, aber wenn Sie den Effekt eines Inline- versus Blocklayouts sehen möchten, können Sie sich den [Wertvergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display`-Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären ausführlicher, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flexmodell

Wenn Elemente als Flex-Elemente angeordnet sind, werden sie entlang zweier Achsen angeordnet:

![Drei Flex-Elemente in einer links-nach-rechts-Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Elemente angeordnet sind — ist horizontal. Die Enden der Achse sind main-start und main-end, jeweils links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Cross-start und cross-end sind oben bzw. unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Elements entlang der Querachse, in diesem Fall die Höhe, wird als Quergroße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Elemente angeordnet sind (z.B. als eine Zeile über die Seite oder eine Spalte nach unten auf der Seite). Der Anfang und das Ende dieser Achse werden als **main start** und **main end** bezeichnet. Die Länge von der main-start-Kante zur main-end-Kante ist die **Hauptgröße**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Elemente angeordnet sind. Der Anfang und das Ende dieser Achse werden als **cross start** und **cross end** bezeichnet. Die Länge von der cross-start-Kante zur cross-end-Kante ist die **Quergroße**.
- Das übergeordnete Element, auf dem `display: flex` gesetzt ist (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die Elemente, die als flexible Boxen innerhalb des Flex-Containers angeordnet sind, werden als **Flex-Elemente** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Beachten Sie diese Terminologie, während Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie bei einem der verwendeten Begriffe verwirrt sind.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welche Richtung die Flexbox-Kinder angeordnet werden). Standardmäßig ist dies auf `row` eingestellt, was dazu führt, dass sie in einer Zeile in der Richtung angeordnet werden, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout zurückversetzt, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie weitermachen, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung anordnen, indem Sie die Werte `row-reverse` und `column-reverse` verwenden. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder schließlich ihren Container überlaufen und das Layout brechen. Sehen Sie sich unser [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox-wrap0.html) Beispiel an und versuchen Sie es [live anzusehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (nehmen Sie jetzt eine lokale Kopie dieser Datei, wenn Sie diesem Beispiel folgen möchten):

![Das Beispiel mit Flexbox hat alle Flex-Elemente in einer einzigen Zeile des Flex-Containers angeordnet. Das achte Flex-Element überläuft das Browserfenster, und die Seite hat sichtbare horizontale und vertikale Scrollleisten, da es nicht innerhalb der Breite des Fensters untergebracht werden kann, da die vorherigen sieben Flex-Elemente den Platz im Ansichtsfenster eingenommen haben.](flexbox-example3.png)

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Elemente in einer einzigen Zeile anzuordnen, wenn die `flex-direction` auf `row` eingestellt ist, oder in einer einzigen Spalte, wenn die `flex-direction` auf `column` eingestellt ist. Eine Möglichkeit, dies zu beheben, besteht darin, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-wrap: wrap;
```

Mit dieser Regel geben wir jeder `article` ein spezifisches Maß, das sicherstellt, dass sie innerhalb des Containers gut angeordnet ist, wenn sie sich nebeneinander befinden. Fügen Sie nun die folgende Deklaration zu Ihrer {{htmlelement("article")}}-Regel hinzu:

```css
flex: 200px;
```

Versuchen Sie das jetzt. Sie werden sehen, dass das Layout mit diesem Zusatz viel besser aussieht:

![Die Flex-Elemente sind im Flex-Container in mehreren Zeilen angeordnet. Die `flex-wrap`-Eigenschaft ist im Flex-Container auf 'wrap' eingestellt, was die Flex-Elemente so anzeigt, dass sie in einer neuen Zeile erscheinen, wenn die Flex-Elemente in der vorherigen Zeile den Flexbox-Container überlaufen. Jedes Flex-Element erhält eine Breite von 200 Pixeln. Alle Elemente werden so gestreckt, dass sie die gleiche Höhe haben wie das Flex-Element mit dem meisten Inhalt.](flexbox-example6.png)

Wir haben nun mehrere Zeilen. Jede Zeile hat so viele Flexbox-Kinder aufgenommen, wie es sinnvoll ist. Ein Überlauf wird auf die nächste Linie verschoben. Die `flex: 200px`-Deklaration, die auf die Artikel gesetzt wird, bedeutet, dass jedes mindestens `200px` breit sein wird. Diese Eigenschaft werden wir später noch detailliert besprechen. Vielleicht bemerken Sie auch, dass die letzten paar Kinder in der letzten Zeile jeweils breiter gemacht werden, sodass die gesamte Zeile immer noch gefüllt ist.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zunächst, Ihre {{cssxref("flex-direction")}}-Eigenschaft in `row-reverse` zu ändern. Jetzt sehen Sie, dass Sie immer noch Ihr mehrreihiges Layout haben, aber es beginnt in der gegenüberliegenden Ecke des Browserfensters und fließt umgekehrt. Das folgende Bild zeigt das aktualisierte Layout.

![Die Flex-Elemente sind im Flex-Container in mehreren Reihen angeordnet, mit der `flex-direction`-Eigenschaft auf `row-reverse` eingestellt. Die Elemente fließen nun in umgekehrter Reihenfolge und beginnen am gegenüberliegenden Ende des Containers. Jede Zeile hat so viele Elemente wie möglich, wobei der Überlauf zur nächsten Zeile wandert.](flexbox-example4.png)

## Flex-Flow Shorthand

An dieser Stelle sei erwähnt, dass es eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. So können Sie zum Beispiel

```css
flex-direction: row;
flex-wrap: wrap;
```

ersetzen durch

```css
flex-flow: row wrap;
```

## Flexible Größenanpassung von Flex-Elementen

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und sehen, wie wir steuern können, welchen Anteil des Platzes Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen. Öffnen Sie Ihre lokale Kopie von [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html), oder nehmen Sie eine Kopie von [flexbox1.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox1.html) als neuen Ausgangspunkt ([sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Fügen Sie zunächst die folgende Regel am Ende Ihres CSS hinzu:

```css
article {
  flex: 1;
}
```

Dies ist ein einheitsloser Verhältniswert, der festlegt, wie viel verfügbaren Platz entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element den gleichen Wert (einen Wert von `1`), was bedeutet, dass sie alle den gleichen Anteil des verfügbaren Raumes einnehmen, der nach dem Setzen von Eigenschaften wie `padding` und `margin` übrig bleibt. Dieser Wert wird proportional unter den Flex-Elementen aufgeteilt: Wenn Sie jedem Flex-Element einen Wert von `400000` zuweisen würden, hätte dies exakt denselben Effekt.

Nun fügen Sie die folgende Regel unter der vorherigen Regel hinzu:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Jetzt, wenn Sie die Seite aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es stehen jetzt vier Verhältnis-Einheiten insgesamt zur Verfügung (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, sodass sie jeweils 1/4 des verfügbaren Raumes einnehmen. Das dritte hat zwei Einheiten, sodass es 2/4 des verfügbaren Raumes einnimmt (oder eine Hälfte).

Sie können auch einen minimalen Größenwert innerhalb des Flex-Wertes angeben. Versuchen Sie, Ihre bestehenden Artikelregeln zu aktualisieren, wie folgt:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

Dies besagt im Wesentlichen: "Jedes Flex-Element wird zuerst `200px` des vorhandenen Platzes erhalten. Danach wird der restliche verfügbare Raum entsprechend den Verhältnis-Einheiten aufgeteilt." Versuchen Sie, die Seite zu aktualisieren, und Sie werden einen Unterschied in der Verteilung des Raumes sehen.

![Ein Flex-Container mit drei Flex-Elementen. Das dritte Flex-Element ist leicht größer als die ersten beiden.](flexbox-example1.png)

Alle Flex-Elemente haben eine Mindestbreite von 200 Pixeln, die mit `flex` festgelegt ist. Der Wert von `flex` für die ersten beiden Flex-Elemente ist 1 und für das dritte Element 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 Verhältnis-Einheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugewiesen und 2 Einheiten dem dritten Flex-Element, wodurch das dritte Flex-Element breiter wird als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox wird in seiner Flexibilität/Anpassungsfähigkeit gesehen. Wenn Sie das Browserfenster in der Größe ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## Flex: Shorthand gegenüber Langform

{{cssxref("flex")}} ist eine Kurzform-Eigenschaft, die bis zu drei verschiedene Werte spezifizieren kann:

- Der diskussionswürdige einheitslose Verhältniswert. Dieser kann separat mit der Langform-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter einheitsloser Verhältniswert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, wie stark ein Element schrumpfen wird, um einen Überlauf zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion und wird in diesem Artikel nicht weiter behandelt.
- Der oben diskutierte minimale Größenwert. Dieser kann separat mit dem Langform-Wert {{cssxref("flex-basis")}} angegeben werden.

Es wird empfohlen, die Langform-Flex-Eigenschaften nur dann zu verwenden, wenn es wirklich notwendig ist (z.B. um etwas zuvor Festgelegtes zu überschreiben). Dies führt zu einer Menge zusätzlichen geschriebenen Codes und kann etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Funktionen verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen: [flex-align0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flex-align0.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)). Wir werden dies in eine ordentliche, flexible Schaltflächen-/Symbolleiste umwandeln. Derzeit sehen Sie eine horizontale Menüleiste mit einigen in die obere linke Ecke gequetschten Schaltflächen.

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Die Schaltflächen werden in die obere linke Ecke gequetscht, was nicht ordentlich aussieht.](flexbox-example5.png)

Nehmen Sie zunächst eine lokale Kopie dieses Beispiels.

Fügen Sie nun das Folgende am Ende des CSS der Beispiele hinzu:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Die Flex-Elemente sind vertikal zentriert und horizontal gleichmäßig verteilt.](flexbox_center_space-around.png)

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Wir haben dies über zwei neue Eigenschaften erreicht. Die Flex-Elemente sind durch das Setzen der `align-items`-Eigenschaft auf `center` in der Querachse zentriert. Die Flex-Elemente sind gleichmäßig entlang der Hauptachse durch das Setzen der `justify-content`-Eigenschaft auf `space-around` verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert die Position der Flex-Elemente auf der Querachse.

- Standardmäßig hat der Wert `normal`, der sich in Flexbox als `stretch` verhält. Dies streckt alle Flex-Elemente aus, um das Elternteil in Richtung der Querachse zu füllen. Wenn das Elternteil keine feste Größe in Richtung der Querachse hat, werden alle Flex-Elemente so groß wie das höchste (oder breiteste) Flex-Element. Dies ist, wie unser erstes Beispiel standardmäßig gleich hohe Spalten hatte.
- Der `center`-Wert, den wir in unserem obigen Code verwendet haben, führt dazu, dass die Elemente ihre intrinsische Dimension beibehalten, jedoch in der Querachse zentriert sind. Daher sind in diesem Beispiel die Schaltflächen jetzt vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` verwenden, um alle Elemente jeweils am Anfang und Ende der Querachse auszurichten. Die `baseline`-Werte richten die Flex-Elemente an ihrer Basislinie aus; im Wesentlichen wird der Boden jeder ersten Textzeile der Flex-Elemente mit dem Boden der ersten Zeile des Elements mit dem größten Abstand zwischen der Queranfang und dieser Basislinie ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Elemente überschreiben, indem Sie ihnen die Eigenschaft {{cssxref("align-self")}} zuweisen. Fügen Sie zum Beispiel Folgendes zu Ihrem CSS hinzu:

```css
button:first-child {
  align-self: flex-end;
}
```

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Alle Flex-Elemente außer dem ersten sind vertikal zentriert. Das erste Element liegt bündig an der unteren Seite des Flex-Containers und ist am Ende der Querachse ausgerichtet. Die Flex-Elemente sind gleichmäßig entlang der Hauptachse verteilt.](flexbox_first-child_flex-end.png)

Sehen Sie sich an, welche Auswirkungen dies hat, und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Elemente auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, was sich ähnlich wie `start` verhält, was bedeutet, dass alle Elemente am Anfang der Hauptachse sitzen.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu platzieren.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end`, abhängig von der Schreibrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Es bringt die Flex-Elemente in die Mitte der Hauptachse.
- Der von uns oben verwendete Wert `space-around` ist nützlich, da er alle Elemente gleichmäßig entlang der Hauptachse mit etwas Platz an beiden Enden verteilt.
- Es gibt einen weiteren Wert, `space-between`, der dem `space-around` sehr ähnlich ist, außer dass er keinen Platz an beiden Enden übrig lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu experimentieren, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Anordnung von Flex-Elementen

Flexbox hat auch eine Funktion zum Ändern der Layout-Reihenfolge von Flex-Elementen, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layout-Methoden nicht möglich ist.

Versuchen Sie, den folgenden CSS zu Ihrem Schaltflächenleisten-Beispiel hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie die Seite, und Sie werden sehen, dass die "Smile"-Schaltfläche an das Ende der Hauptachse verschoben wurde. Lassen Sie uns im Detail darüber sprechen, wie das funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}}-Wert von `0`.
- Flex-Elemente mit höheren Order-Werten erscheinen später in der Anzeigereihenfolge als Elemente mit niedrigeren Order-Werten.
- Flex-Elemente mit demselben Order-Wert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Elemente haben, deren Order-Werte als `2`, `1`, `1` und `0` festgesetzt sind, wäre die Anzeigereihenfolge 4., 2., 3. und dann 1..
- Das 3. Element erscheint nach dem 2., da es denselben Order-Wert hat und in der Quellreihenfolge nach ihm kommt.

Sie können negative Order-Werte festlegen, um Elemente früher erscheinen zu lassen als Elemente mit dem Wert `0`. Zum Beispiel könnten Sie die "Blush"-Schaltfläche mit der folgenden Regel an den Anfang der Hauptachse setzen:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorreihenfolge dieselbe wie die Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzbarkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist völlig in Ordnung, ein Flex-Element auch als Flex-Container zu setzen, sodass seine Kinder ebenfalls wie flexible Boxen angeordnet werden. Werfen Sie einen Blick auf [complex-flexbox.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/complex-flexbox.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![Das Beispiel mit Flexbox hat drei Flex-Element-Kinder, die in einer Reihe angeordnet sind. Die ersten beiden haben die gleiche Breite, das dritte ist etwas breiter. Das dritte Flex-Element ist ebenfalls ein Flex-Container. Es hat eine Reihe von Schaltflächen in zwei Reihen, gefolgt von Text. Die erste Reihe von Schaltflächen hat 4 Schaltflächen, die in einer Reihe angeordnet sind; die Schaltflächen haben die gleiche Breite und nutzen die gesamte Breite des Containers aus. Die zweite Reihe hat eine einzelne Schaltfläche, die die gesamte Breite der Zeile allein einnimmt.](flexbox-example7.png)

Dieses komplexe Layout hat einige Flex-Elemente, die ebenfalls Flex-Container sind. Der HTML-Code dafür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zuerst legen wir fest, dass die Kinder des {{htmlelement("section")}} als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Als nächstes setzen wir einige Flex-Werte auf die {{htmlelement("article")}}s selbst. Beachten Sie insbesondere die zweite Regel hier: Wir setzen das dritte {{htmlelement("article")}} so, dass auch seine Kinder als Flex-Elemente angeordnet werden, aber dieses Mal legen wir sie als Spalte an.

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

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm im Wesentlichen eine Mindesthöhe von `100px` zu geben, dann setzen wir seine Kinder (die {{htmlelement("button")}}-Elemente) ebenfalls so, dass sie als Flex-Elemente angeordnet werden. Hier legen wir sie in eine umhüllende Reihe, zentrieren sie im verfügbaren Raum wie in dem einzelnen Schaltflächen-Beispiel, das wir zuvor gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir einige Größenangaben für die Schaltfläche. Dieses Mal, indem wir ihr einen Flex-Wert von `1 auto` geben. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz ein, wie sie können. So viele wie komfortabel auf eine Reihe passen; darüber hinaus werden sie zu einer neuen Zeile wechseln.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu bestätigen, dass Sie diese Informationen behalten haben, bevor Sie weiterziehen — siehe [Testen Sie Ihr Wissen: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox_skills).

## Zusammenfassung

Damit endet unsere Tour durch die Grundlagen von Flexbox. Wir hoffen, dass Sie Spaß hatten und es Ihnen ein Vergnügen sein wird, damit weiterzuspielen, während Sie Ihr Lernen fortsetzen. Als Nächstes schauen wir uns einen weiteren wichtigen Aspekt von CSS-Layouts an: [CSS-Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Ordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Kontrollieren des Verhältnisses von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf eine visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein edukatives Spiel, um die Grundlagen von Flexbox besser zu verstehen und zu lernen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
