---
title: Flexbox
slug: Learn/CSS/CSS_layout/Flexbox
l10n:
  sourceCommit: 07f80557969d0e30aa294bdf4603be05c3a61a50
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine ein dimensionale Layout-Methode, um Elemente in Reihen oder Spalten anzuordnen. Elemente _flexen_ (expandieren), um zusätzlichen Raum zu füllen, oder schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a>), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man das Flexbox-Layout-System verwendet, um Weblayouts zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS Flexible Box Layout ermöglicht Ihnen:

- Einen Block von Inhalten vertikal innerhalb seines Elternteils zu zentrieren.
- Alle Kinder eines Containers so viel wie möglich vom verfügbaren Platz einnehmen zu lassen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem mehrspaltigen Layout auf die gleiche Höhe zu bringen, auch wenn sie unterschiedliche Mengen an Inhalt enthalten.

Vielleicht sind Flexbox-Funktionen die perfekte Lösung für Ihre ein dimensionalen Layout-Bedürfnisse. Lassen Sie uns das genauer untersuchen!

## Einfache Beispielvorstellung

In diesem Artikel arbeiten Sie eine Reihe von Übungen durch, um Ihnen zu helfen, zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie der ersten Starter-Datei — [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html) aus unserem GitHub-Repo machen. Laden Sie diese in einem modernen Browser (wie Firefox oder Chrome) und werfen Sie einen Blick auf den Code in Ihrem Code-Editor. Sie können es auch [hier live sehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html).

![Bild zeigt den Ausgangspunkt des Flexbox-Tutorials](bih741v.png)

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Hauptüberschrift darin und ein {{htmlelement("section")}}-Element mit drei {{htmlelement("article")}}s haben. Wir werden diese verwenden, um ein ziemlich standardmäßiges dreispaltiges Layout zu erstellen.

## Spezifizieren, welche Elemente als flexible Boxen angelegt werden sollen

Zu Beginn müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} beim Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall wollen wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf dem {{htmlelement("section")}}:

```css
section {
  display: flex;
}
```

Dies bewirkt, dass das `<section>` Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Elementen**. So sieht es aus:

![Ein zweireihiger Container, der eine Einzelspalte in der ersten Reihe und ein 3-Spalten-Layout in der zweiten Reihe enthält, zeigt, wie eine Webseite in verschiedene Layouts unterteilt werden kann, abhängig von den Inhalten](flexbox-example2.png)

Diese eine Erklärung gibt uns alles, was wir brauchen. Unglaublich, nicht wahr? Wir haben ein mehrspaltiges Layout mit gleich großen Spalten, und die Spalten sind alle gleich hoch. Das liegt daran, dass die Standardwerte, die den Flex-Elementen (den Kindern des Flex-Containers) zugewiesen sind, eingerichtet wurden, um häufige Probleme wie dieses zu lösen.

Lassen Sie uns zusammenfassen, was hier passiert. Einem Element einen {{cssxref("display")}}-Wert von `flex` hinzuzufügen, macht es zu einem Flex-Container. Der Container wird im Sinne, wie er mit dem Rest der Seite interagiert, als [Block-Level-Inhalt](/de/docs/Glossary/Block-level_content) angezeigt. Wenn das Element in einen Flex-Container konvertiert wird, werden seine Kinder in Flex-Elemente umgewandelt und angeordnet.

Sie können den Container auch inline machen, indem Sie einen [externen `display`-Wert](/de/docs/Web/CSS/display#outside) verwenden (z.B. `display: inline flex`), was beeinflusst, wie der Container selbst auf der Seite angeordnet wird. Der Legacy-Wert `inline-flex` zeigt den Container ebenfalls inline an. In diesem Tutorial konzentrieren wir uns darauf, wie sich die Inhalte des Containers verhalten, aber wenn Sie den Effekt des Inline-gegen-Block-Layouts sehen möchten, können Sie einen Blick auf den [Wertvergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display` Eigenschaften Seite werfen.

Die nächsten Abschnitte erklären im Detail, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente angeordnet werden, werden sie entlang zweier Achsen angeordnet:

![Drei Flex-Elemente in einer von links nach rechts Sprache werden nebeneinander in einem Flex-Container angeordnet. Die Hauptachse - die Achse des Flex-Containers in Richtung, in die die Flex-Elemente angeordnet sind - ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Die cross-start und cross-end sind jeweils oben und unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als main size bezeichnet, und die Länge des Flex-Elements entlang der Querachse, in diesem Fall die Höhe, wird als cross size bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in Richtung verläuft, in dem die Flex-Elemente angeordnet sind (zum Beispiel als Reihe über die Seite, oder als Spalte entlang der Seite). Der Anfang und das Ende dieser Achse werden als **main start** und **main end** bezeichnet. Die Länge von der Main-Start-Kante bis zur Main-End-Kante ist die **Main Size**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Elemente angeordnet sind. Der Anfang und das Ende dieser Achse werden als **cross start** und **cross end** bezeichnet. Die Länge von der Cross-Start-Kante bis zur Cross-End-Kante ist die **Cross Size**.
- Das Elternelement, das `display: flex` darauf gesetzt hat (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die als flexible Boxen angeordneten Elemente innerhalb des Flex-Containers werden als **Flex-Elemente** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Hinterkopf, während Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie bei einem der verwendeten Begriffe unsicher werden.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welche Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist dies auf `row` gesetzt, was dazu führt, dass sie in einer Reihe in der Richtung Ihrer Browsersprache angeordnet werden (von links nach rechts im Fall eines englischen Browsers).

Versuchen Sie, die folgende Erklärung zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spalten-Layout bringt, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie weitermachen, löschen Sie diese Erklärung aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung mit den `row-reverse` und `column-reverse` Werten anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass irgendwann Ihre Flexbox-Kinder ihren Container überlaufen und das Layout brechen. Werfen Sie einen Blick auf unser Beispiel [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox-wrap0.html) und versuchen Sie, es [live zu betrachten](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (nehmen Sie jetzt eine lokale Kopie dieser Datei mit, wenn Sie diesem Beispiel folgen möchten):

![Das Beispiel zeigt, dass alle Flex-Elemente in einer einzelnen Zeile des Flex-Containers angeordnet sind. Das achte Flex-Element überläuft das Browser-Fenster, und die Seite hat sichtbare horizontale und vertikale Scrollleisten, da es nicht innerhalb der Breite des Fensteraus Bereichs angepasst werden kann, da die vorhergehenden sieben Flex-Elemente den innerhalb des Ansichtsbereichs verfügbaren Platz eingenommen haben.](flexbox-example3.png)

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container herausbrechen. Standardmäßig versucht der Browser, alle Flex-Elemente in einer einzigen Zeile zu platzieren, wenn die `flex-direction` auf `row` gesetzt ist, oder in einer einzelnen Spalte, wenn die `flex-direction` auf `column` gesetzt ist. Eine Möglichkeit, wie Sie dies beheben können, ist die folgende Erklärung zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-wrap: wrap;
```

Fügen Sie auch die folgende Erklärung zu Ihrer {{htmlelement("article")}}-Regel hinzu:

```css
flex: 200px;
```

Versuchen Sie es jetzt. Sie werden sehen, dass das Layout mit dieser enthaltenen Erklärung viel besser aussieht:

![Flex-Elemente sind in mehreren Zeilen im Flex-Container angeordnet. Die flex-wrap-Eigenschaft ist im Flex-Container auf 'wrap' gesetzt, wodurch die Flex-Elemente in einer neuen Zeile angezeigt werden, wenn die Flex-Elemente in der vorherigen Zeile den Flexbox-Container überschreiten. Jedes Flex-Element hat eine Breite von 200 Pixeln. Alle Elemente werden auf die gleiche Höhe gestreckt, so hoch wie das Flex-Element mit dem meisten Inhalt.](flexbox-example4.png)

Wir haben jetzt mehrere Zeilen. Jede Zeile enthält so viele Flexbox-Kinder, wie sinnvoll ist. Ein Überlauf wird zu der nächsten Zeile verschoben. Die `flex: 200px` Erklärung, die bei den Artikeln gesetzt ist, bedeutet, dass jeder mindestens `200px` breit sein wird. Wir werden diese Eigenschaft später noch genauer besprechen. Sie haben vielleicht auch bemerkt, dass die letzten paar Kinder in der letzten Zeile jeweils etwas breiter gemacht werden, sodass die gesamte Zeile noch gefüllt ist.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zuerst, Ihre {{cssxref("flex-direction")}}-Eigenschaft auf `row-reverse` zu ändern. Jetzt sehen Sie, dass Sie immer noch Ihr mehrzeiliges Layout haben, aber es beginnt in der gegenüberliegenden Ecke des Browserfensters und fließt umgekehrt.

## Flex-flow-Shorthand

An dieser Stelle ist es erwähnenswert, dass es eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. So können Sie zum Beispiel

```css
flex-direction: row;
flex-wrap: wrap;
```

durch

```css
flex-flow: row wrap;
```

ersetzen.

## Flexible Größenanpassung von Flex-Elementen

Kehren wir jetzt zu unserem ersten Beispiel zurück und schauen wir, wie wir kontrollieren können, wie viel Raum Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen. Öffnen Sie Ihre lokale Kopie von [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html), oder nehmen Sie eine Kopie von [flexbox1.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox1.html) als neuen Ausgangspunkt ([sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Fügen Sie zuerst die folgende Regel am Ende Ihres CSS hinzu:

```css
article {
  flex: 1;
}
```

Dies ist ein proportionaler Wert ohne Einheit, der bestimmt, wie viel verfügbarer Platz entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element den gleichen Wert (einen Wert von `1`), was bedeutet, dass sie alle den gleichen Anteil des verbleibenden Platzes einnehmen, nachdem Eigenschaften wie Padding und Margin gesetzt wurden. Dieser Wert wird proportional unter den Flex-Elementen geteilt: jedem Flex-Element einen Wert von `400000` zu geben, hätte genau den gleichen Effekt.

Fügen Sie jetzt folgende Regel unter der vorherigen hinzu:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Nun, wenn Sie die Seite aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es gibt jetzt vier proportionale Einheiten im Gesamtwert (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, also nehmen sie jeweils 1/4 des verfügbaren Raums ein. Das dritte hat zwei Einheiten, also nimmt es 2/4 des verfügbaren Raums ein (oder die Hälfte).

Sie können auch einen Minimalwert für die Größe innerhalb des Flex-Werts angeben. Versuchen Sie, Ihre bestehenden Artikel-Regeln wie folgt zu aktualisieren:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

Dies besagt im Grunde: "Jedes Flex-Element erhält zunächst `200px` des verfügbaren Platzes. Danach wird der restliche verfügbare Platz nach den proportionellen Einheiten geteilt." Versuchen Sie, die Seite zu aktualisieren, und Sie werden einen Unterschied darin sehen, wie der Platz geteilt wird.

![Ein Flex-Container mit drei Flex-Elementen. Das dritte Flex-Element ist etwas größer als die ersten beiden.](flexbox-example1.png)

Alle Flex-Elemente haben eine Mindestbreite von 200 Pixeln — festgelegt mit 'flex'. Der Wert von flex für die ersten beiden Flex-Elemente ist 1 und für das dritte Element ist 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 proportionale Einheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugeordnet und 2 Einheiten werden dem dritten Flex-Element zugeordnet, wodurch das dritte Flex-Element breiter ist als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in seiner Flexibilität/Anpassungsfähigkeit. Wenn Sie das Browserfenster skalieren oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## Flex: Shorthand versus Longhand

{{cssxref("flex")}} ist eine Kurzschreibweise, die bis zu drei verschiedene Werte angeben kann:

- Der oben diskutierte proportionale Wert ohne Einheit. Dies kann separat mit der Langform-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter proportionale Wert ohne Einheit, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, wie viel ein Element schrumpfen wird, um ein Überlaufen zu verhindern. Dies ist eine ziemlich erweiterte Flexbox-Funktion, und wir werden sie in diesem Artikel nicht weiter behandeln.
- Der oben diskutierte Mindestgröße-Wert. Dies kann separat mit der Langform-Eigenschaft {{cssxref("flex-basis")}} angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, Sie müssen es wirklich (zum Beispiel, um etwas zuvor Festgelegtes zu überschreiben). Sie führen dazu, dass viel zusätzlicher Code geschrieben wird und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können Flexbox-Funktionen auch verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen: [flex-align0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flex-align0.html) ([sehen Sie es live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)). Wir werden dies in eine saubere, flexible Schaltflächen-/Werkzeugleiste umwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen in die obere linke Ecke gequetschten Schaltflächen.

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Die Schaltflächen sind in die obere linke Ecke gequetscht, was nicht ordentlich aussieht.](flexbox-example5.png)

Nehmen Sie zuerst eine lokale Kopie dieses Beispiels.

Fügen Sie nun folgendes am Ende der CSS-Datei hinzu:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Die Flex-Elemente sind vertikal zentriert und sie sind gleichmäßig auf der Haupt-Achse verteilt.](flexbox_center_space-around.png)

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Wir haben dies über zwei neue Eigenschaften erreicht. Die Flex-Elemente sind in der Mitte der Querachse positioniert, indem die `align-items` Eigenschaft auf `center` gesetzt wird. Die Flex-Elemente sind gleichmäßig entlang der Hauptachse durch die `justify-content` Eigenschaft auf `space-around` verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Elemente auf der Querachse positioniert sind.

- Standardmäßig hat diese den Wert `normal`, welcher sich in Flexbox wie `stretch` verhält. Dies streckt alle Flex-Elemente, um den Elternteil in Richtung der Querachse zu füllen. Wenn der Elternteil in Richtung der Querachse keine feste Größe hat, werden alle Flex-Elemente so hoch (oder breit) wie das höchste (oder breiteste) Flex-Element. So hatten in unserem ersten Beispiel die Spalten standardmäßig die gleiche Höhe.
- Der `center`-Wert, den wir in unserem obigen Code verwendet haben, sorgt dafür, dass die Elemente ihre intrinsischen Dimensionen beibehalten, aber entlang der Querachse zentriert werden. Deshalb sind in unserem aktuellen Beispiel die Schaltflächen vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` haben, die alle Elemente am Anfang oder Ende der Querachse ausrichten. Die `baseline`-Werte richten die Flex-Elemente an ihrer Basislinie aus; im Grunde wird die Unterseite der ersten Textzeile jedes Flex-Elements mit der Unterseite der ersten Zeile des Elements mit dem größten Abstand zwischen der Quer-Start-Linie und dieser Basislinie ausgerichtet. Siehe {{cssxref("align-items")}} für alle Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Elemente auch überschreiben, indem Sie darauf die {{cssxref("align-self")}}-Eigenschaft anwenden. Zum Beispiel, versuchen Sie folgendes zu Ihrem CSS hinzuzufügen:

```css
button:first-child {
  align-self: flex-end;
}
```

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Alle Flex-Elemente außer dem ersten sind in der Mitte der Querachse oder vertikal zentriert. Das erste Element liegt eng am unteren Rand des Flex-Containers, am Ende der Querachse. Die Flex-Elemente sind gleichmäßig entlang der Haupt-Achse oder Breite des Containers verteilt.](flexbox_first-child_flex-end.png)

Schauen Sie sich an, welche Wirkung dies hat und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Elemente auf der Hauptachse positioniert sind.

- Der Standardwert ist `normal`, welcher sich wie `start` verhält, was alle Elemente am Anfang der Hauptachse platziert.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende auszurichten.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end`, abhängig von der Schreibrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Es sorgt dafür, dass die Flex-Elemente in der Mitte der Hauptachse angeordnet werden.
- Der oben verwendete Wert `space-around` ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit etwas Platz an den Rändern.
- Es gibt noch einen weiteren Wert, `space-between`, welcher `space-around` sehr ähnelt, außer dass er keinen Platz an den Rändern lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie weitermachen.

## Reihenfolge von Flex-Elementen

Flexbox verfügt auch über eine Funktion zum Ändern der Anzeigereihenfolge von Flex-Elementen, ohne die Quellreihenfolge zu ändern. Dies ist etwas, das mit traditionellen Layoutmethoden unmöglich ist.

Versuchen Sie, die folgende CSS zu Ihrem Button-Leisten-Beispiel hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie die Seite und Sie werden sehen, dass sich die "Smile"-Schaltfläche an das Ende der Hauptachse bewegt hat. Lassen Sie uns im Detail darüber sprechen, wie dies funktioniert:

- Standardmäßig haben alle Flex-Elemente den {{cssxref("order")}}-Wert von `0`.
- Flex-Elemente mit höheren angegebenen Order-Werten werden später in der Anzeigereihenfolge als Elemente mit niedrigeren Order-Werten erscheinen.
- Flex-Elemente mit dem gleichen Order-Wert erscheinen in ihrer Quellreihenfolge. Wenn Sie vier Elemente haben, deren Order-Werte `2`, `1`, `1` und `0` sind, wäre ihre Anzeigereihenfolge 4., 2., 3. und 1.
- Das 3. Element erscheint nach dem 2., weil es den gleichen Order-Wert hat und im Quellcode danach kommt.

Sie können negative Order-Werte festlegen, um Elemente früher als Elemente mit einem Wert von `0` erscheinen zu lassen. Zum Beispiel könnten Sie die "Blush"-Schaltfläche mit der folgenden Regel an den Anfang der Hauptachse bringen:

```css
button:last-child {
  order: -1;
}
```

Obwohl Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorderung die gleiche wie die Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzbarkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist völlig in Ordnung, ein Flex-Element auch als Flex-Container festzulegen, sodass seine Kinder ebenfalls als flexible Boxen angeordnet werden. Werfen Sie einen Blick auf [complex-flexbox.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/complex-flexbox.html) ([Live ansehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![Das Beispiel zeigt drei Flex-Elemente, die in einer Reihe angeordnet sind. Die ersten beiden haben die gleiche Breite, das dritte ist etwas breiter. Das dritte Flex-Element ist auch ein Flex-Container. Es enthält eine Gruppe von Schaltflächen in zwei Zeilen, gefolgt von Text. Die erste Reihe von Schaltflächen hat 4 Schaltflächen, die in einer Reihe angeordnet sind; die Schaltflächen haben die gleiche Breite, dass sie die gesamte Breite des Containers einnehmen. Die zweite Reihe hat eine einzelne Schaltfläche, die die gesamte Breite der Reihe alleine einnimmt.](flexbox-example7.png)

Dieses komplexe Layout hat einige Flex-Elemente, die auch Flex-Container sind. Das HTML dafür ist ziemlich unkompliziert. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zuerst setzen wir fest, dass die Kinder des {{htmlelement("section")}} als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Dann setzen wir einige Flex-Werte auf die {{htmlelement("article")}}s selbst. Beachten Sie insbesondere die zweite Regel: Wir setzen das dritte {{htmlelement("article")}} so fest, dass seine Kinder ebenfalls wie Flex-Elemente angeordnet werden, aber diesmal als Spalte.

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

Dann wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann setzen wir seine Kinder (die {{htmlelement("button")}}-Elemente) so, dass sie ebenfalls als Flex-Elemente angeordnet werden. Hier ordnen wir sie in einer umbrechenden Zeile an und richten sie in der Mitte des verfügbaren Platzes aus, wie wir es mit dem einzelnen Button-Beispiel bereits gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Zum Schluss setzen wir einige Größen bei den Schaltflächen. Diesmal geben wir ihnen einen Flex-Wert von `1 auto`. Dies hat einen sehr interessanten Effekt, den Sie sehen, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz ein, wie sie können. So viele Schaltflächen passen in eine Zeile, wie angenehm ist; darüber hinaus fallen sie in eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox_skills).

## Zusammenfassung

Das war unser Überblick über die Grundlagen von Flexbox. Wir hoffen, dass es Ihnen Spaß gemacht hat und Sie es weiter mit Flexbox ausprobieren, während Sie Ihr Lernen fortsetzen. Als Nächstes schauen wir uns einen weiteren wichtigen Aspekt von CSS-Layouts an: [CSS-Grids](/de/docs/Learn/CSS/CSS_layout/Grids).

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lernspiel, um die Grundlagen von Flexbox zu erlernen und besser zu verstehen

{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}
