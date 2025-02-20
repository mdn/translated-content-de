---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: bd609af0677bd806dc7f97161f0a016e9a0484c7
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layout-Methode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente _flexen_ (dehnen sich aus), um zusätzlichen Platz zu füllen oder ziehen sich zusammen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Fundamentale Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — flexible Anordnung einer Reihe von Block- oder Inline-Elementen in einer Dimension.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Element, Hauptachse und Querachse.</li>
          <li>Verstehen, was <code>display: flex</code> Ihnen standardmäßig bietet.</li>
          <li>Wie man Inhalte auf neue Zeilen und Spalten umbricht.</li>
          <li>Flexible Größen- und Anordnungsanpassung von Flex-Elementen.</li>
          <li>Rechtfertigung und Ausrichtung von Inhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS Flexible Box Layout ermöglicht Ihnen:

- Ein Block von Inhalten vertikal innerhalb seines Elternteils zentriert zu positionieren.
- Alle Kinder eines Containers einen gleichen Teil der verfügbaren Breite/Höhe einnehmen zu lassen, unabhängig davon, wie viel Breite/Höhe zur Verfügung steht.
- Alle Spalten in einem mehrspaltigen Layout auf die gleiche Höhe zu bringen, selbst wenn sie unterschiedliche Inhaltsmengen enthalten.

Flexbox-Funktionen könnten die perfekte Lösung für Ihre eindimensionalen Layout-Bedürfnisse sein. Lassen Sie uns genauer hinsehen und herausfinden!

## Ein einfaches Beispiel einführen

In diesem Artikel werden Sie eine Reihe von Übungen durchführen, um Ihnen zu helfen, zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTML und CSS anfertigen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und sehen Sie sich den Code in Ihrem Code-Editor an. Alternativ öffnen Sie das Beispiel in {{LiveSampleLink("flexbox_0", "open the playground")}}.

```html live-sample___flexbox_0
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css live-sample___flexbox_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* Add your flexbox CSS below here */
```

{{EmbedLiveSample("flexbox_0", "100", "415")}}

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einem Top-Level-Heading darin und ein {{htmlelement("section")}}-Element haben, das drei {{htmlelement("article")}}s enthält. Wir werden diese verwenden, um ein ziemlich standardmäßiges dreispaltiges Layout zu erstellen.

## Festlegen, welche Elemente als flexible Boxen angeordnet werden sollen

Zuerst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir es auf das {{htmlelement("section")}}:

```html hidden live-sample___flexbox_1
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* Add your flexbox CSS below here */
```

```css live-sample___flexbox_1
section {
  display: flex;
}
```

Dies lässt das `<section>`-Element zu einem **Flex-Container** werden und seine Kinder zu **Flex-Elementen**. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einfache Deklaration gibt uns alles, was wir brauchen. Unglaublich, nicht wahr? Wir haben ein mehrspaltiges Layout mit gleich großen Spalten, und die Spalten haben alle die gleiche Höhe. Das liegt daran, dass die Standardwerte für Flex-Elemente (die Kinder des Flex-Containers) eingerichtet sind, um häufige Probleme wie dieses zu lösen.

Lassen Sie uns zusammenfassen, was hier passiert. Einem Element einen Wert von {{cssxref("display")}} von `flex` hinzuzufügen, macht es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Level-Inhalt")}} angezeigt hinsichtlich seiner Interaktion mit dem Rest der Seite. Wenn das Element in einen Flex-Container konvertiert wird, werden seine Kinder in (und als) Flex-Elemente konvertiert und angeordnet.

Sie können den Container inline machen, indem Sie einen [außen `display` Wert](/de/docs/Web/CSS/display#outside) verwenden (z.B. `display: inline flex`), was beeinflusst, wie der Container selbst auf der Seite angeordnet wird. Der legacy `inline-flex` display Wert zeigt den Container ebenfalls als inline an. Wir werden uns darauf konzentrieren, wie sich die Inhalte des Containers in diesem Tutorial verhalten, aber wenn Sie den Effekt von Inline- gegenüber Block-Layout sehen möchten, können Sie sich die [Wert-Vergleichung](/de/docs/Web/CSS/display#display_value_comparison) auf der `display`-Eigenschaftsseite anschauen.

Die nächsten Abschnitte erklären detaillierter, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente angeordnet werden, werden sie auf zwei Achsen angeordnet:

![Drei Flex-Elemente in einer von links nach rechts Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Elemente angeordnet sind — ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Cross-start und cross-end sind oben und unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Elements entlang der Querachse, in diesem Fall die Höhe, wird als Quergroße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Elemente angeordnet sind (zum Beispiel als eine Zeile über die Seite oder als eine Spalte die Seite hinunter). Der Anfang und das Ende dieser Achse werden als **main start** und **main end** bezeichnet. Die Länge von der main-start-Kante zur main-end-Kante ist die **main size**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Elemente angeordnet sind. Der Anfang und das Ende dieser Achse werden als **cross start** und **cross end** bezeichnet. Die Länge von der cross-start-Kante zur cross-end-Kante ist die **cross size**.
- Das Elternelement, das `display: flex` gesetzt hat (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die Elemente, die als flexible Boxen innerhalb des Flex-Containers angeordnet sind, werden als **Flex-Elemente** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Kopf, während Sie die folgenden Abschnitte durchgehen. Sie können immer darauf zurückgreifen, wenn Sie sich über die verwendeten Begriffe verwirren.

## Spalten oder Zeilen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (welche Richtung die Flexbox-Kinder angeordnet werden). Standardmäßig ist dies auf `row` eingestellt, sodass sie in einer Reihe in der Richtung angeordnet sind, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts, im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in eine Spaltenanordnung versetzt, ähnlich wie sie vor dem Hinzufügen von CSS waren. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Reihenfolge mit den `row-reverse` und `column-reverse` Werten anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass irgendwann Ihre Flexbox-Kinder ihren Container überlaufen und das Layout zerstören. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}s, die nicht passen, weil sie eine `min-width` von `400px` haben, sodass es einen horizontalen Scroll gibt.

```html hidden live-sample___flex-wrap_0
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Fourth article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Fifth article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

{{EmbedLiveSample("flex-wrap_0", "100", "230")}}

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container herausbrechen. Standardmäßig versucht der Browser, alle Flex-Elemente in einer einzigen Reihe zu platzieren, wenn die `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn die `flex-direction` auf `column` gesetzt ist.

```html hidden live-sample___flex-wrap_1
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Fourth article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Fifth article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

Eine Möglichkeit, dies zu beheben, besteht darin, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

Sie werden sehen, dass das Layout mit dieser enthalten Deklaration viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Reihen. Jede Reihe hat so viele Flexbox-Kinder enthalten, wie es sinnvoll ist. Ein Überlauf wird auf die nächste Zeile verschoben. Die `flex: 200px`-Erklärung, die auf die Artikel gesetzt wird, bedeutet, dass jedes mindestens `200px` breit ist. Wir werden diese Eigenschaft später ausführlicher besprechen. Sie werden vielleicht auch bemerken, dass die letzten paar Kinder in der letzten Reihe breiter gemacht werden, sodass die gesamte Reihe trotzdem ausgefüllt wird.

Aber es gibt hier noch mehr, das wir tun können. Versuchen Sie zunächst Ihre {{cssxref("flex-direction")}}-Eigenschafts-Wert auf `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie immer noch Ihr mehrreihiges Layout haben, es aber von der gegenüberliegenden Ecke des Browserfensters ausgeht und umkehrt verläuft.

## flex-flow Kurzschreibweise

An dieser Stelle ist es erwähnenswert, dass es eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. So können Sie zum Beispiel

```css
flex-direction: row;
flex-wrap: wrap;
```

ersetzen durch

```css
flex-flow: row wrap;
```

## Flexible Größenanpassung von Flex-Elementen

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und sehen, wie wir steuern können, welchen Anteil am Platz Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen.

```html hidden live-sample___flexbox_2
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_2
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

Fügen Sie in Ihrer lokalen Kopie die folgende Regel am Ende Ihres CSS ein:

```css live-sample___flexbox_2
article {
  flex: 1;
}
```

{{EmbedLiveSample("flexbox_2", "100", "210")}}

Dies ist ein anteiliges, einheitenloses Größenanpassungswert, der festlegt, wie viel verfügbaren Platz entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}} Element den gleichen Wert (einen Wert von `1`), was bedeutet, dass sie alle den gleichen Anteil am übriggebliebenen Raum einnehmen, nachdem Eigenschaften wie Padding und Margin gesetzt wurden. Dieser Wert wird proportional unter den Flex-Elementen aufgeteilt: Wenn jedem Flex-Element ein Wert von `400000` gegeben wird, hätte dies genau denselben Effekt.

```html hidden live-sample___flexbox_3
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_3
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
article {
  flex: 1;
}
```

Jetzt fügen Sie die folgende Regel zu Ihrer bisherigen Regel hinzu:

```css live-sample___flexbox_3
article:nth-of-type(3) {
  flex: 2;
}
```

{{EmbedLiveSample("flexbox_3", "100", "210")}}

Nun, wenn Sie aktualisieren, sehen Sie, dass das dritte {{htmlelement("article")}} doppelt so viel Platz einnimmt wie die anderen beiden. Es gibt jetzt insgesamt vier proportionale Einheiten verfügbar (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, also nehmen sie je 1/4 des verfügbaren Platzes ein. Das dritte hat zwei Einheiten, also nimmt es 2/4 des verfügbaren Platzes ein (oder die Hälfte).

Sie können auch einen minimalen Größenwert innerhalb des Flex-Werts angeben. Versuchen Sie Ihre bestehenden Artikelregeln wie folgt zu aktualisieren:

```html hidden live-sample___flexbox_4
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_4
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

```css live-sample___flexbox_4
article {
  flex: 1 100px;
}

article:nth-of-type(3) {
  flex: 2 100px;
}
```

Dies besagt im Wesentlichen: "Jedes Flex-Element erhält zunächst `100px` des verfügbaren Raumes. Danach wird der übrige Raum entsprechend der Proportionseinheiten aufgeteilt." Sie werden einen Unterschied in der Art und Weise sehen, wie der Raum zugeteilt wird.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Elemente haben eine Mindestbreite von 100 Pixeln durch 'flex' festgelegt. Der Wert von flex für die ersten beiden Flex-Elemente beträgt 1 und für das dritte Element 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 proportionale Einheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugewiesen und 2 Einheiten dem dritten Flex-Element, wodurch das dritte Flex-Element breiter ist als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox kann in seiner Flexibilität/Reaktionsfähigkeit gesehen werden. Wenn Sie die Browserfenstergröße ändern oder ein weiteres {{htmlelement("article")}} Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzform versus Langform

{{cssxref("flex")}} ist eine Kurzform-Eigenschaft, die bis zu drei verschiedene Werte angeben kann:

- Der anteilig einheitenlose Größenwert, den wir oben besprochen haben. Dieser kann separat mit der Eigenschaft {{cssxref("flex-grow")}} in Langform angegeben werden.
- Ein zweiter einheitenloser Größenwert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, wie stark ein Element schrumpfen wird, um einen Überlauf zu verhindern. Dies ist eine recht fortgeschrittene Flexbox-Funktion und wir werden sie in diesem Artikel nicht weiter behandeln.
- Der oben besprochene Mindestgrößenwert. Dieser kann separat mit dem {{cssxref("flex-basis")}}-Langformwert angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, Sie müssen wirklich (z.B. um etwas zuvor Festgelegtes zu überschreiben). Sie führen zu viel zusätzlichem geschriebenem Code und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können Flexbox-Funktionen auch verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns das erkunden, indem wir uns ein neues Beispiel ansehen:

```html live-sample___flex-align_0
<div>
  <button>Smile</button>
  <button>Laugh</button>
  <button>Wink</button>
  <button>Shrug</button>
  <button>Blush</button>
</div>
```

```css live-sample___flex-align_0
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* Add your flexbox CSS below here */
```

Wir werden dies in eine saubere, flexible Schaltfläche/Toolleiste umwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gequetscht sind.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

Nehmen Sie zuerst eine lokale Kopie dieses Beispiels.

Fügen Sie nun das Folgende am Ende des CSS des Beispiels hinzu:

```html hidden live-sample___flex-align_1
<div>
  <button>Smile</button>
  <button>Laugh</button>
  <button>Wink</button>
  <button>Shrug</button>
  <button>Blush</button>
</div>
```

```css hidden live-sample___flex-align_1
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* Add your flexbox CSS below here */
```

```css live-sample___flex-align_1
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

{{EmbedLiveSample("flex-align_1", "100", "125")}}

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Dies haben wir durch zwei neue Eigenschaften erreicht. Die Flex-Elemente sind zentriert auf der Querachse, indem die `align-items`-Eigenschaft auf `center` gesetzt wird. Die Flex-Elemente werden gleichmäßig entlang der Hauptachse verteilt, indem die `justify-content`-Eigenschaft auf `space-around` gesetzt wird.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Elemente auf der Querachse sitzen.

- Standardmäßig ist der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Dies dehnt alle Flex-Elemente so aus, dass sie den Eltern in Richtung der Querachse füllen. Wenn der Elternteil keine feste Größe in der Richtung der Querachse hat, dann werden alle Flex-Elemente so hoch (oder breit) wie das höchste (oder breiteste) Flex-Element. So hatte unser erstes Beispiel standardmäßig gleich hohe Spalten.
- Der `center`-Wert, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Dimensionen beibehalten, aber entlang der Querachse zentriert werden. Deshalb sind die Schaltflächen in unserem aktuellen Beispiel vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` haben, die alle Elemente am Anfang bzw. Ende der Querachse ausrichten. Die `baseline`-Werte richten die Flex-Elemente nach ihrer Basislinie aus; grundsätzlich wird die untere aller erste Textzeile jedes Flex-Elements mit der unteren Zeile des Elements mit der größten Distanz zwischen dem Querstart und dieser Basislinie ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Elemente außer Kraft setzen, indem Sie die Eigenschaft {{cssxref("align-self")}} auf sie anwenden. Probieren Sie zum Beispiel aus, das folgende zu Ihrem CSS hinzuzufügen:

```html hidden live-sample___flex-align_2
<div>
  <button>Smile</button>
  <button>Laugh</button>
  <button>Wink</button>
  <button>Shrug</button>
  <button>Blush</button>
</div>
```

```css hidden live-sample___flex-align_2
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/* Add your flexbox CSS below here */
```

```css live-sample___flex-align_2
button:first-child {
  align-self: flex-end;
}
```

{{EmbedLiveSample("flex-align_2", "100", "125")}}

Sehen Sie sich an, welche Auswirkungen das hat und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} kontrolliert, wo die Flex-Elemente auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich wie `start` verhält, was alle Elemente am Anfang der Hauptachse platziert.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu platzieren.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end`, je nach Schreibrichtung.
- `center` ist auch ein Wert für `justify-content`. Er platziert die Flex-Elemente in der Mitte der Hauptachse.
- Der Wert, den wir oben verwendet haben, `space-around`, ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit etwas Platz am Anfang und Ende.
- Ein weiterer Wert `space-between` ist sehr ähnlich zu `space-around`, außer dass er am Anfang und Ende keinen Raum frei lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Anordnung von Flex-Elementen

Flexbox verfügt auch über eine Funktion zum Ändern der Layout-Reihenfolge von Flex-Elementen, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layout-Methoden unmöglich war.

Versuchen Sie, den folgenden CSS-Code zu Ihrem Button-Bar-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass die "Smile"-Schaltfläche an das Ende der Hauptachse verschoben wurde. Lassen Sie uns darüber sprechen, wie dies im Detail funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}} Wert von `0`.
- Flex-Elemente mit höheren angegebenen Ordnungswerten erscheinen später in der Anzeige-Reihenfolge als Elemente mit niedrigeren Ordnungswerten.
- Flex-Elemente mit dem gleichen Ordnungswert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Elemente haben, deren Ordnungswerte als `2`, `1`, `1` und `0` angegeben sind, wäre ihre Anzeigereihenfolge 4., 2., 3. und dann 1.
- Das 3. Element erscheint nach dem 2., weil es den gleichen Ordnungswert hat und in der Quellreihenfolge nach ihm liegt.

Sie können negative Ordnungswerte festlegen, um Elemente früher erscheinen zu lassen als die Elemente, deren Wert `0` ist. Beispielweise könnten Sie die "Blush"-Schaltfläche mit der folgenden Regel an den Anfang der Hauptachse setzen:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Reihenfolge mit `order` ändern können, bleibt die Tab-Reihenfolge dieselbe wie die Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann sich negativ auf die Usability für Ihre Tastaturbenutzer auswirken!

## Verschachtelte Flex-Boxen

Es ist möglich, mit Flexbox ziemlich komplexe Layouts zu erstellen. Es ist völlig in Ordnung, ein Flex-Element auch zu einem Flex-Container zu machen, sodass seine Kinder ebenfalls als flexible Boxen angeordnet sind.

```html hidden live-sample___flex-nesting
<header>
  <h1>Complex flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <div>
      <button>Smile</button>
      <button>Laugh</button>
      <button>Wink</button>
      <button>Shrug</button>
      <button>Blush</button>
    </div>
    <div>
      <p>Paragraph one content…</p>
    </div>
    <div>
      <p>Paragraph two content…</p>
    </div>
  </article>
</section>
```

```css hidden live-sample___flex-nesting
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  zoom: 0.8;
}
article {
  flex: 1 170px;
}
article:nth-of-type(3) {
  flex: 3 170px;
  display: flex;
  flex-flow: column;
}
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

{{EmbedLiveSample("flex-nesting", "100", "290")}}

Dieses komplexe Layout hat einige Flex-Elemente, die auch Flex-Container sind. Das HTML hierfür ist recht einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zuerst legen wir die Kinder des {{htmlelement("section")}}-Elements als flexible Boxen an.

```css
section {
  display: flex;
}
```

Als nächstes setzen wir einige flex-Werte auf die {{htmlelement("article")}}-Elemente selbst. Beachten Sie besonders die zweite Regel hier: Wir stellen das dritte {{htmlelement("article")}} ein, damit seine Kinder ebenfalls wie Flex-Elemente angeordnet werden, diesmal aber in einer Spalte.

```css
article {
  flex: 1 100px;
}

article:nth-of-type(3) {
  flex: 3 100px;
  display: flex;
  flex-flow: column;
}
```

Als nächstes wählen wir das erste {{htmlelement("div")}}. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann setzen wir seine Kinder (die {{htmlelement("button")}}-Elemente) ebenfalls als Flex-Elemente an. Hier legen wir sie in einer umgebrochenen Reihe aus und zentrieren sie im verfügbaren Raum, wie wir es mit dem individuellen Button-Beispiel, das wir zuvor gesehen haben, gemacht haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Zum Schluss setzen wir eine Größenanpassung auf dem Button. Dieses Mal durch das Geben eines flex-Werts von `1 auto`. Dies hat einen sehr interessanten Effekt, der sich zeigt, wenn Sie die Breite Ihres Browserfensters ändern. Die Buttons nehmen so viel Platz ein, wie sie können. So viele werden in einer Zeile passen, die bequem ist; darüber hinaus fallen weitere in eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox_skills).

## Zusammenfassung

Damit endet unser Rundgang durch die Grundlagen von Flexbox. Wir hoffen, dass Sie Spaß hatten und es ausgiebig nutzen werden, während Sie Ihr Lernen fortsetzen. Als Nächstes werden wir uns einen weiteren wichtigen Aspekt von CSS-Layouts ansehen: [CSS-Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lernspiel, um die Grundlagen von Flexbox besser zu verstehen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
