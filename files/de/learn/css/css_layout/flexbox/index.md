---
title: Flexbox
slug: Learn/CSS/CSS_layout/Flexbox
l10n:
  sourceCommit: 07f80557969d0e30aa294bdf4603be05c3a61a50
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine ein-dimensionale Layout-Methode zum Anordnen von Elementen in Reihen oder Spalten. Elemente _flexen_ (erweitern sich), um zusätzlichen Platz auszufüllen, oder schrumpfen, um in kleinere Bereiche zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lesen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und ein Verständnis dafür, wie CSS funktioniert (lesen Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie das Verwenden des Flexbox-Layout-Systems, um Weblayouts zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

Das flexible Box-Layout von CSS ermöglicht es Ihnen:

- Vertikales Zentrieren eines Inhaltsblocks innerhalb seines übergeordneten Elements.
- Alle Kinder eines Containers den gleichen Anteil der verfügbaren Breite/Höhe einnehmen zu lassen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem Mehrspalten-Layout auf die gleiche Höhe zu bringen, auch wenn sie unterschiedliche Inhaltsmengen enthalten.

Flexbox-Funktionen könnten die perfekte Lösung für Ihre ein-dimensionale Layout-Bedürfnisse sein. Lassen Sie uns eintauchen und es herausfinden!

## Ein einfaches Beispiel einführen

In diesem Artikel werden Sie eine Reihe von Übungen durchgehen, um Ihnen zu helfen, zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie der ersten Startdatei — [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html) aus unserem GitHub-Repo — erstellen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und sehen Sie sich den Code in Ihrem Code-Editor an. Sie können es auch [hier live sehen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html).

![Bild, das den Ausgangspunkt des Flexbox-Tutorials zeigt](bih741v.png)

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Hauptüberschrift darin und ein {{htmlelement("section")}}-Element haben, das drei {{htmlelement("article")}}s enthält. Wir werden diese verwenden, um ein recht standardmäßiges Drei-Spalten-Layout zu erstellen.

## Festlegen, welche Elemente als flexible Boxen angeordnet werden sollen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dafür setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf das {{htmlelement("section")}}:

```css
section {
  display: flex;
}
```

Dies führt dazu, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Items** werden. So sieht es aus:

![Ein zwei-zeiliger Container, der eine einzelne Spalte in der ersten Zeile und ein 3-Spalten-Layout in der zweiten Zeile enthält, das zeigt, wie eine Webseite abhängig vom Inhalt in verschiedene Layouts unterteilt werden kann](flexbox-example2.png)

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, nicht wahr? Wir haben ein Mehrspaltenlayout mit gleich großen Spalten, und die Spalten sind alle gleich hoch. Das liegt daran, dass die Standardwerte, die den Flex-Items (den Kindern des Flex-Containers) gegeben werden, so eingerichtet sind, dass sie häufige Probleme wie dieses lösen.

Lassen Sie uns zusammenfassen, was hier passiert. Das Hinzufügen eines {{cssxref("display")}}-Werts von `flex` zu einem Element macht es zu einem Flex-Container. Der Container wird als [Block-Level-Inhalt](/de/docs/Glossary/Block-level_content) angezeigt, in Bezug darauf, wie er mit dem Rest der Seite interagiert. Wenn das Element in einen Flex-Container konvertiert wird, werden seine Kinder in (und angeordnet als) Flex-Items konvertiert.

Sie können den Container inline machen, indem Sie einen [außenliegenden `display`-Wert](/de/docs/Web/CSS/display#outside) (z.B. `display: inline flex`) verwenden, der beeinflusst, wie der Container selbst auf der Seite angeordnet wird.
Der veraltete `inline-flex`-Anzeigewert zeigt den Container ebenfalls inline an.
Wir konzentrieren uns in diesem Tutorial darauf, wie sich die Inhalte des Containers verhalten, aber wenn Sie den Effekt eines Inline- gegenüber eines Block-Layouts sehen möchten, können Sie sich den [Wertevergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display`-Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären ausführlicher, was Flex-Items sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Items angeordnet sind, sind sie entlang zweier Achsen angeordnet:

![Drei Flex-Items in einer von links nach rechts verlaufenden Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in die Richtung, in der die Flex-Items angeordnet sind — ist horizontal. Die Enden der Achse sind Hauptstart und Hauptende und liegen jeweils links und rechts. Die Kreuzachse ist vertikal; senkrecht zur Hauptachse. Die Kreuzstart- und Kreuzendpunkte befinden sich oben und unten. Die Länge des Flex-Items entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Items entlang der Kreuzachse, in diesem Fall die Höhe, wird als Kreuzgröße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Items angeordnet sind (zum Beispiel als Reihe über die Seite oder als Spalte nach unten). Der Anfang und das Ende dieser Achse werden als **Hauptstart** und **Hauptende** bezeichnet. Die Länge vom Hauptstart-Rand bis zum Hauptende-Rand ist die **Hauptgröße**.
- Die **Kreuzachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Items angeordnet sind. Der Anfang und das Ende dieser Achse werden als **Kreuzstart** und **Kreuzende** bezeichnet. Die Länge vom Kreuzstart-Rand bis zum Kreuzende-Rand ist die **Kreuzgröße**.
- Das Elternelement, bei dem `display: flex` gesetzt ist (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die als flexible Boxen innerhalb des Flex-Containers angeordneten Elemente werden als **Flex-Items** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Hinterkopf, wenn Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie zu irgendeinem Zeitpunkt über die verwendeten Begriffe verwirrt sind.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welcher Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist dies auf `row` gesetzt, was dazu führt, dass sie in einer Reihe in der Richtung angeordnet sind, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout bringt, ähnlich wie es war, bevor wir irgendein CSS hinzugefügt haben. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Items auch in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass schließlich Ihre Flexbox-Kinder ihren Container überlaufen und das Layout dadurch kaputtgeht. Sehen Sie sich unser [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox-wrap0.html)-Beispiel an und versuchen Sie, es [live anzuzeigen](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (machen Sie jetzt eine lokale Kopie dieser Datei, wenn Sie diesem Beispiel folgen möchten):

![Das Beispiel zeigt alle Flex-Items, die in einer einzigen Zeile des Flex-Containers angeordnet sind. Das achte Flex-Item überläuft das Browserfenster, und die Seite hat sichtbare horizontale und vertikale Bildlaufleisten, da es nicht innerhalb der Breite des Fensters untergebracht werden kann, da die vorherigen sieben Flex-Items den innerhalb der Ansicht verfügbaren Raum eingenommen haben.](flexbox-example3.png)

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Items in einer einzigen Zeile anzupassen, wenn die `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn die `flex-direction` auf `column` gesetzt ist. Eine Möglichkeit, dies zu beheben, besteht darin, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-wrap: wrap;
```

Fügen Sie auch die folgende Deklaration zu Ihrer {{htmlelement("article")}}-Regel hinzu:

```css
flex: 200px;
```

Versuchen Sie es jetzt. Sie werden sehen, dass das Layout mit diesem eingeschlossenen Deklarationen viel besser aussieht:

![Die Flex-Items sind in mehreren Zeilen im Flex-Container angeordnet. Die Eigenschaft „flex-wrap“ ist im Flex-Container auf „wrap“ gesetzt, wodurch die Flex-Items in einer neuen Zeile angezeigt werden, wenn die Flex-Items in der vorherigen Zeile außerhalb des Flexbox-Containers überlaufen. Jedem Flex-Item wird eine Breite von 200 Pixeln zugewiesen. Alle Elemente werden gleich hoch gestreckt, so hoch wie das Flex-Item mit dem meisten Inhalt.](flexbox-example4.png)

Wir haben jetzt mehrere Zeilen. Jede Zeile hat so viele Flexbox-Kinder, wie sinnvoll ist. Jeglicher Überlauf wird in die nächste Zeile verschoben. Die `flex: 200px`-Deklaration, die auf die Artikel gesetzt ist, bedeutet, dass jeder mindestens `200px` breit sein wird. Wir werden diese Eigenschaft später ausführlicher besprechen. Möglicherweise bemerken Sie auch, dass die letzten paar Kinder in der letzten Zeile breiter gemacht werden, sodass die gesamte Zeile immer noch gefüllt ist.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zuerst, Ihren {{cssxref("flex-direction")}}-Eigenschaftswert in `row-reverse` zu ändern. Nun werden Sie sehen, dass Sie immer noch Ihr Mehrzeilenlayout haben, es beginnt jedoch von der gegenüberliegenden Ecke des Browserfensters und fließt rückwärts.

## flex-flow Kurzform

An dieser Stelle ist es wichtig zu beachten, dass es eine Kurzschreibweise für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. Sie können also zum Beispiel:

```css
flex-direction: row;
flex-wrap: wrap;
```

durch

```css
flex-flow: row wrap;
```

ersetzen.

## Flexibles Größen von Flex-Items

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und betrachten, wie wir kontrollieren können, welchen Anteil des Platzes die Flex-Items im Vergleich zu den anderen Flex-Items einnehmen. Öffnen Sie Ihre lokale Kopie von [flexbox0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox0.html), oder nehmen Sie eine Kopie von [flexbox1.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flexbox1.html) als neuen Ausgangspunkt ([siehe es live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Fügen Sie zunächst die folgende Regel am Ende Ihres CSS hinzu:

```css
article {
  flex: 1;
}
```

Dies ist ein einheitenloser Proportion-Wert, der bestimmt, wie viel verfügbaren Raum entlang der Hauptachse jedes Flex-Item im Vergleich zu den anderen Flex-Items einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element den gleichen Wert (einen Wert von `1`), was bedeutet, dass sie alle einen gleichen Anteil des verbleibenden Raums einnehmen, nachdem Eigenschaften wie Paddings und Margins festgelegt wurden. Dieser Wert wird proportional unter den Flex-Items geteilt: Wenn Sie jedem Flex-Item einen Wert von `400000` geben, hätte dies genau denselben Effekt.

Fügen Sie nun die folgende Regel unter der vorherigen hinzu:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Jetzt, wenn Sie aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es gibt jetzt insgesamt vier Proportionseinheiten verfügbar (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Items haben je eine Einheit, also nehmen sie jeweils 1/4 des verfügbaren Raums ein. Das dritte hat zwei Einheiten, also nimmt es 2/4 des verfügbaren Raums ein (oder die Hälfte).

Sie können auch einen Mindestgrößenwert innerhalb des Flex-Wertes angeben. Versuchen Sie, Ihre bestehenden Artikelregeln wie folgt zu aktualisieren:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

Dies besagt im Wesentlichen: "Jedes Flex-Item erhält zuerst `200px` des verfügbaren Raums. Danach wird der Rest des verfügbaren Raums gemäß den Proportionseinheiten geteilt." Versuchen Sie, zu aktualisieren, und Sie werden einen Unterschied sehen, wie der Raum verteilt wird.

![Ein Flex-Container mit drei Flex-Items. Das dritte Flex-Item ist etwas größer als die ersten beiden.](flexbox-example1.png)

Alle Flex-Items haben eine Mindestbreite von 200 Pixeln - eingestellt mit 'flex'. Der Wert von flex für die ersten beiden Flex-Items beträgt 1 und für das dritte Element 2. Dadurch wird der verbleibende Platz im Flex-Container in 4 Proportionseinheiten aufgeteilt. Eine Einheit wird jedem der ersten beiden Flex-Items zugewiesen und 2 Einheiten dem dritten Flex-Item, wodurch das dritte Flex-Item breiter wird als die anderen beiden, die gleich breit sind.

Der wahre Wert von Flexbox zeigt sich in seiner Flexibilität/Anpassungsfähigkeit. Wenn Sie das Browserfenster ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzform versus Langform

{{cssxref("flex")}} ist eine Kurzform-Eigenschaft, die bis zu drei verschiedene Werte spezifizieren kann:

- Der einheitenlose Proportion-Wert, den wir oben besprochen haben. Dieser kann separat unter Verwendung der {{cssxref("flex-grow")}}-Langform-Eigenschaft angegeben werden.
- Ein zweiter einheitenloser Proportion-Wert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Items ihren Container überfüllen. Dieser Wert gibt an, wie stark ein Element schrumpfen wird, um einen Überlauf zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion und wir werden es in diesem Artikel nicht weiter behandeln.
- Den oben besprochenen Mindestgrößenwert. Dieser kann separat unter Verwendung des {{cssxref("flex-basis")}}-Langformwerts angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, sie müssen es wirklich (zum Beispiel um etwas vorher Eingestelltes zu überschreiben). Sie führen oft dazu, dass viel zusätzlicher Code geschrieben wird und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Funktionen verwenden, um Flex-Items entlang der Haupt- oder der Kreuzachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen: [flex-align0.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/flex-align0.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)). Wir werden dies in eine saubere, flexible Schaltflächen-/Toolbar verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen links oben eingeklemmt.

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Die Schaltflächen sind in der oberen linken Ecke eingeklemmt, was nicht ordentlich aussieht.](flexbox-example5.png)

Zuerst erstellen Sie eine lokale Kopie dieses Beispiels.

Nun fügen Sie das folgende am Ende des Beispiels CSS hinzu:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Die Flex-Items sind vertikal zentriert positioniert und gleichmäßig horizontal verteilt.](flexbox_center_space-around.png)

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Wir haben dies durch zwei neue Eigenschaften erreicht. Die Flex-Items sind mit der `align-items`-Eigenschaft in der Mitte der Kreuzachse positioniert. Die Flex-Items sind mit der `justify-content`-Eigenschaft gleichmäßig entlang der Hauptachse verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Items auf der Kreuzachse sitzen.

- Standardmäßig hat dieser Wert `normal`, der sich in Flexbox als `stretch` verhält. Dies streckt alle Flex-Items, um das Elternelement in der Richtung der Kreuzachse auszufüllen. Wenn das Elternelement keine feste Größe in Richtung der Kreuzachse hat, werden alle Flex-Items so hoch (oder breit), wie es das höchste (oder breiteste) Flex-Item ist. So hatten unsere ersten Beispielspalten standardmäßig gleiche Höhe.
- Der `center`-Wert, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Dimensionen beibehalten, aber entlang der Kreuzachse zentiert werden. Deshalb sind die Schaltflächen unseres aktuellen Beispiels vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` verwenden, die alle Items jeweils am Anfang und Ende der Kreuzachse ausrichten. Die `baseline`-Werte richten die Flex-Items an ihrer Basislinie aus; im Wesentlichen wird die untere Linie des ersten Textes jedes Flex-Items mit der unteren Linie der ersten Textlinie des Elements mit dem größten Abstand zwischen dem Kreuzstartpunkt und dieser Basislinie ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Items durch Anwendung der {{cssxref("align-self")}}-Eigenschaft darauf überschreiben. Beispielweise, versuchen Sie, das folgende zu Ihrem CSS hinzuzufügen:

```css
button:first-child {
  align-self: flex-end;
}
```

![Fünf Schaltflächen sind in einer Reihe in einem Flex-Container angeordnet. Alle Flex-Items außer dem ersten sind in der Mitte der Kreuzachse, oder vertikal zentriert, positioniert. Das erste Element ist bündig gegen den Boden des Flex-Containers, am Ende der Kreuzachse Die Flex-Items sind gleichmäßig entlang der Hauptachse, oder Breite, des Containers verteilt.](flexbox_first-child_flex-end.png)

Sehen Sie sich an, welcher Effekt dies hat und entfernen Sie es wieder, sobald Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Items auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich als `start` verhält, was bewirkt, dass alle Items am Anfang der Hauptachse sitzen.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu platzieren.
- Die Werte `left` und `right` verhalten sich als `start` oder `end`, abhängig von der Schreibrichtung.
- `center` ist auch ein Wert für `justify-content`. Dadurch sitzen die Flex-Items in der Mitte der Hauptachse.
- Der von uns oben verwendete Wert, `space-around`, ist nützlich – er verteilt alle Items gleichmäßig entlang der Hauptachse mit ein wenig Platz an jedem Ende.
- Es gibt einen weiteren Wert, `space-between`, der dem `space-around` sehr ähnlich ist, außer dass er an beiden Enden keinen Platz lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Reihenfolge von Flex-Items

Flexbox bietet auch eine Funktion, um die Anordnungsreihenfolge von Flex-Items zu ändern, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layout-Methoden unmöglich zu tun ist.

Versuchen Sie, das folgende CSS zu Ihrem Schaltflächenleisten-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass die "Smile"-Schaltfläche an das Ende der Hauptachse verschoben wurde. Lassen Sie uns darüber sprechen, wie dies im Detail funktioniert:

- Standardmäßig haben alle Flex-Items einen {{cssxref("order")}}-Wert von `0`.
- Flex-Items mit höheren angegebenen Ordnungswerten erscheinen später in der Anzeigereihenfolge als Elemente mit niedrigeren Ordnungswerten.
- Flex-Items mit dem gleichen Ordnungswert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Elemente haben, deren Ordnungswerte als `2`, `1`, `1` und `0` festgelegt wurden, wäre ihre Anzeigereihenfolge 4., 2., 3. und dann 1.
- Das 3. Element erscheint nach dem 2., weil es den gleichen Ordnungswert hat und später in der Quellreihenfolge ist.

Sie können negative Ordnungswerte festlegen, um Elemente früher als Elemente erscheinen zu lassen, deren Wert `0` ist. Zum Beispiel könnten Sie die "Blush"-Schaltfläche mit der folgenden Regel an den Anfang der Hauptachse setzen:

```css
button:last-child {
  order: -1;
}
```

Obwohl Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorenreihenfolge die gleiche wie die Reihenfolge im Code. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzerfreundlichkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist vollkommen in Ordnung, ein Flex-Item auch zu einem Flex-Container zu machen, sodass seine Kinder auch wie flexible Boxen angeordnet sind. Sehen Sie sich [complex-flexbox.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/flexbox/complex-flexbox.html) an ([sehen Sie es auch live](https://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![Das Beispiel zeigt drei Flex-Item-Kinder, die in einer Reihe angeordnet sind. Die ersten beiden haben die gleiche Breite, das dritte ist etwas breiter. Das dritte Flex-Item ist auch ein Flex-Container. Es hat eine Reihe von Schaltflächen in zwei Reihen, gefolgt von Text. Die erste Reihe von Schaltflächen hat 4 Schaltflächen, die in einer Reihe angeordnet sind; die Schaltflächen sind gleich breit und nehmen die volle Breite des Containers ein. Die zweite Reihe hat eine einzelne Schaltfläche, die alleine die gesamte Breite der Reihe einnimmt.](flexbox-example7.png)

Dieses komplexe Layout hat einige Flex-Items, die auch Flex-Container sind. Das HTML dafür ist recht einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Sehen wir uns den Code an, den wir für das Layout verwendet haben.

Zuerst setzen wir die Kinder des {{htmlelement("section")}} so, dass sie als flexible Boxen angeordnet sind.

```css
section {
  display: flex;
}
```

Als nächstes, setzen wir einige Flex-Werte auf die {{htmlelement("article")}} selbst. Beachten Sie besonders die zweite Regel hier: Wir setzen das dritte {{htmlelement("article")}} so, dass seine Kinder ebenfalls als Flex-Items angeordnet sind, diesmal ordnen wir sie jedoch wie eine Spalte an.

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

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Zuerst verwenden wir `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann setzen wir seine Kinder (die {{htmlelement("button")}}s), so, dass sie auch wie Flex-Items angeordnet sind. Hier ordnen wir sie in einer umwickelnden Reihe an und zentrieren sie im verfügbaren Raum, wie wir es mit dem individuellen Schaltflächenbeispiel zuvor gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir einige Größeneinstellungen auf die Schaltfläche. Diesmal indem wir ihr einen Flex-Wert von `1 auto` geben. Dies hat einen sehr interessanten Effekt, was Sie sehen werden, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz ein, wie sie können. So viele, wie bequem auf eine Linie passen, werden überlaufen; darüber hinaus fallen sie auf eine neue Linie.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Prüfen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox_skills).

## Zusammenfassung

Das schließt unsere Tour durch die Grundlagen von Flexbox ab. Wir hoffen, dass Sie Spaß hatten und beim weiteren Lernen ein gutes Spiel damit haben werden. Als nächstes werden wir uns einen weiteren wichtigen Aspekt der CSS-Layouts ansehen: [CSS-Raster](/de/docs/Learn/CSS/CSS_layout/Grids).

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elements in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Reihenfolge von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Verhältnisse von Flex-Items entlang der Hauptachse steuern](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — Ein Artikel, der alles über Flexbox auf eine visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — Ein Lernspiel, um die Grundlagen von Flexbox besser zu verstehen

{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}
