---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layoutmethode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente _flexen_ (dehnen sich aus), um zusätzlichen Raum zu füllen oder ziehen sich zusammen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftstilgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — eine Reihe von Block- oder Inline-Elementen flexibel in einer Dimension zu layouten.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Item, Hauptachse und Querachse.</li>
          <li>Verstehen, was <code>display: flex</code> standardmäßig bietet.</li>
          <li>Wie man Inhalte auf neue Zeilen und Spalten umbricht.</li>
          <li>Flexible Größen- und Anordnungssteuerung von Flex-Items.</li>
          <li>Inhalte rechtfertigen und ausrichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

Das CSS flexible Box Layout ermöglicht Ihnen:

- Ein Blockelement vertikal in seinem Elternteil zu zentrieren.
- Alle Kinder eines Containers gleichmäßig den verfügbaren Breiten-/Höhenraum aufzuteilen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem Mehrspalten-Layout dieselbe Höhe annehmen zu lassen, selbst wenn sie eine unterschiedliche Menge an Inhalt enthalten.

Flexbox-Funktionen könnten die perfekte Lösung für Ihre eindimensionalen Layoutanforderungen sein. Lassen Sie uns eintauchen und es herausfinden!

> [!NOTE]
> Scrimbas einführender [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim bietet einen interaktiven Leitfaden, der erklärt, wie verbreitet Flexbox im Netz ist und warum es so wichtig ist, es zu lernen. Er führt Sie durch einen typischen Anwendungsfall, der die Leistungsfähigkeit von Flexbox demonstriert.

## Ein einfaches Beispiel einführen

In diesem Artikel werden Sie durch eine Reihe von Übungen arbeiten, die Ihnen helfen, zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTML und CSS erstellen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und schauen Sie sich den Code in Ihrem Code-Editor an. Alternativ öffnen Sie das Beispiel in {{LiveSampleLink("flexbox_0", "open the playground")}}.

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

Sie werden sehen, dass wir ein {{htmlelement("header")}} Element mit einer Hauptüberschrift darin haben und ein {{htmlelement("section")}} Element, das drei {{htmlelement("article")}}s enthält. Wir werden diese verwenden, um ein ziemlich standardmäßiges Dreispalten-Layout zu erstellen.

## Festlegen, welche Elemente als flexible Boxen layoutet werden sollen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen layoutet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall wollen wir die {{htmlelement("article")}} Elemente layouten, daher setzen wir dies auf das {{htmlelement("section")}}:

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

Dies bewirkt, dass das `<section>` Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Items**. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration gibt uns alles, was wir benötigen. Unglaublich, oder? Wir haben ein Mehrspaltenlayout mit gleich großen Spalten, und die Spalten haben alle dieselbe Höhe. Dies liegt daran, dass die Standardwerte, die den Flex-Items (den Kindern des Flex-Containers) zugewiesen werden, so eingerichtet sind, dass sie häufige Probleme wie dieses lösen.

Lassen Sie uns zusammenfassen, was hier passiert. Wenn man einem Element einen {{cssxref("display")}} Wert von `flex` hinzufügt, wird es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Level-Inhalt")}} angezeigt in Bezug darauf, wie er mit dem Rest der Seite interagiert. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in Flex-Items umgewandelt (und layoutet).

Sie können den Container auch inline machen, indem Sie einen [außerhalb `display` Wert](/de/docs/Web/CSS/display#outside) verwenden (z.B. `display: inline flex`), was beeinflusst, wie der Container selbst auf der Seite layoutet wird.
Der Legacy-`inline-flex` Display-Wert zeigt den Container ebenfalls inline an.
Wir werden uns in diesem Tutorial darauf konzentrieren, wie sich die Inhalte des Containers verhalten, aber wenn Sie den Effekt von Inline-gegen-Block-Layout sehen möchten, können Sie sich den [Wertvergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display` Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären detaillierter, was Flex-Items sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Items layoutet werden, sind sie entlang zwei Achsen angeordnet:

![Drei Flex-Items in einer von links nach rechts Sprache sind nebeneinander in einem Flex-Container layoutet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Items layoutet sind — ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Die cross-start und cross-end sind oben und unten jeweils. Die Länge des Flex-Items entlang der Hauptachse, in diesem Fall die Breite, wird main size genannt, und die Länge des Flex-Items entlang der Querachse, in diesem Fall die Höhe, wird cross size genannt.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Items angeordnet sind (zum Beispiel eine Zeile über die Seite, oder eine Spalte die Seite hinunter.) Der Anfang und das Ende dieser Achse werden als **Main Start** und **Main End** bezeichnet. Die Länge vom Main-Start-Edge zum Main-End-Edge ist die **Main Size**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Items angeordnet sind. Der Anfang und das Ende dieser Achse werden als **Cross Start** und **Cross End** bezeichnet. Die Länge vom Cross-Start-Edge zum Cross-End-Edge ist die **Cross Size**.
- Das Elternelement, das `display: flex` auf sich gesetzt hat (das {{htmlelement("section")}} in unserem Beispiel) wird als **Flex-Container** bezeichnet.
- Die Elemente, die als flexible Boxen innerhalb des Flex-Containers layoutet sind, werden als **Flex-Items** bezeichnet (die {{htmlelement("article")}} Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Kopf, während Sie durch die nachfolgenden Abschnitte gehen. Sie können jederzeit darauf zurückgreifen, wenn Sie bei einem der verwendeten Begriffe verwirrt sind.

## Spalten oder Zeilen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die festlegt, in welche Richtung die Hauptachse verläuft (welche Richtung die Flexbox-Kinder layoutet sind). Standardmäßig ist dies auf `row` gesetzt, was bewirkt, dass sie in einer Zeile entsprechend der Richtung Ihrer Browsersprachvoreinstellung layoutet sind (von links nach rechts, im Falle eines englischen Browsers).

Versuchen Sie die folgende Deklaration zu Ihrer {{htmlelement("section")}} Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Items zurück in ein Spaltenlayout versetzt, so wie sie vor dem Hinzufügen von CSS waren. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Items auch in umgekehrter Richtung anordnen, indem Sie die Werte `row-reverse` und `column-reverse` verwenden. Experimentieren Sie auch mit diesen Werten!

## Umbrüche

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass schließlich Ihre Flexbox-Kinder ihren Container überlappen und somit das Layout zerstören. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}s, die nicht passen, da sie eine `min-width` von `400px` haben, sodass ein Horizontal-Scroll vorhanden ist.

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

Hier sehen wir, dass die Kinder tatsächlich ihren Container sprengen. Standardmäßig versucht der Browser, alle Flex-Items in einer einzigen Zeile zu platzieren, wenn `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn `flex-direction` auf `column` gesetzt ist.

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

Eine Möglichkeit, dies zu beheben, besteht darin, folgende Deklaration zu Ihrer {{htmlelement("section")}} Regel hinzuzufügen:

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

Sie werden sehen, dass das Layout viel besser aussieht, wenn dies eingeschlossen ist:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Zeilen. Jede Zeile hat so viele Flexbox-Kinder darin, wie sinnvoll ist. Ein Überlauf wird auf die nächste Zeile verschoben.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zunächst, Ihren Wert von {{cssxref("flex-direction")}} auf `row-reverse` zu ändern. Nun werden Sie sehen, dass Sie immer noch Ihr Mehrzeilenlayout haben, aber es beginnt von der gegenüberliegenden Ecke des Browserfensters aus und läuft umgekehrt ab.

## flex-flow-Schreibweise

An dieser Stelle ist es erwähnenswert, dass es eine Kurzfassung für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. Also, zum Beispiel, können Sie

```css
flex-direction: row;
flex-wrap: wrap;
```

ersetzen mit

```css
flex-flow: row wrap;
```

## Flexible Größenanpassung von Flex-Items

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und schauen, wie wir steuern können, welchen Anteil an Raum Flex-Items im Vergleich zu anderen Flex-Items einnehmen.

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

Fügen Sie in Ihrer lokalen Kopie die folgende Regel am Ende Ihres CSS hinzu:

```css live-sample___flexbox_2
article {
  flex: 1;
}
```

{{EmbedLiveSample("flexbox_2", "100", "210")}}

Dies ist ein einheitsloser Proportionswert, der bestimmt, wie viel verfügbaren Raum entlang der Hauptachse jedes Flex-Item im Vergleich zu anderen Flex-Items einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}} Element denselben Wert (einen Wert von `1`), was bedeutet, dass sie alle einen gleichen Anteil am verbleibenden Raum einnehmen, nachdem Eigenschaften wie Padding und Margin gesetzt wurden. Dieser Wert wird proportional unter den Flex-Items aufgeteilt: Wenn jedes Flex-Item einen Wert von `400000` hätte, hätte dies genau denselben Effekt.

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

Fügen Sie nun die folgende Regel unterhalb der vorherigen hinzu:

```css live-sample___flexbox_3
article:nth-of-type(3) {
  flex: 2;
}
```

{{EmbedLiveSample("flexbox_3", "100", "210")}}

Nun, wenn Sie aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Nun gibt es vier Proportions-Einheiten insgesamt (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Items haben jeweils eine Einheit, also nehmen sie jeweils 1/4 des verfügbaren Raums ein. Das dritte hat zwei Einheiten, also nimmt es 2/4 des verfügbaren Raums (oder die Hälfte) ein.

Sie können auch einen Mindestgrößenwert innerhalb des Flex-Werts angeben. Versuchen Sie, Ihre bestehenden Artikelregeln wie folgt zu aktualisieren:

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

Dies besagt im Wesentlichen: "Jedes Flex-Item erhält zunächst `100px` des verfügbaren Raums. Danach wird der Rest des verfügbaren Raums entsprechend der Proportions-Einheiten aufgeteilt." Sie werden einen Unterschied sehen, wie der Raum geteilt wird.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Items haben eine Mindestbreite von 100 Pixel — eingestellt mit 'flex'. Der Wert von Flex für die ersten beiden Flex-Items ist 1 und für das dritte Item ist 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 Proportions-Einheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Items zugewiesen und 2 Einheiten dem dritten Flex-Item, wodurch das dritte Flex-Item breiter ist als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox kann in seiner Flexibilität/Anpassungsfähigkeit gesehen werden. Wenn Sie das Browserfenster ändern oder ein weiteres {{htmlelement("article")}} Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Schreibweise versus Langfassung

{{cssxref("flex")}} ist eine Kurzschreibweise, die bis zu drei verschiedene Werte angeben kann:

- Der einheitslose Proportionswert, den wir oben besprochen haben. Dieser kann separat mit der {{cssxref("flex-grow")}} Langform-Eigenschaft angegeben werden.
- Ein zweiter einheitsloser Proportionswert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Items ihren Container überlaufen. Dieser Wert gibt an, um wie viel ein Item schrumpfen wird, um Überläufe zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion, und wir werden sie in diesem Artikel nicht weiter behandeln.
- Der Mindestgrößenwert, den wir oben diskutiert haben. Dieser kann separat mit dem {{cssxref("flex-basis")}} Langform-Wert angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, Sie müssen wirklich (z.B. um zuvor gesetzte Werte zu überschreiben). Sie führen zu viel zusätzlichem Code und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Funktionen verwenden, um Flex-Items entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen:

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

Wir werden dies in eine saubere, flexible Schaltflächen-/Symbolleiste verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen in die obere linke Ecke gequetschten Schaltflächen.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

Erstellen Sie zunächst eine lokale Kopie dieses Beispiels.

Fügen Sie nun das Folgende am Ende des Beispiels-CSS hinzu:

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

Aktualisieren Sie die Seite, und Sie werden sehen, dass die Schaltflächen nun schön horizontal und vertikal zentriert sind. Wir haben dies über zwei neue Eigenschaften erreicht. Die Flex-Items sind über das Zentrum der Querachse positioniert, indem die `align-items` Eigenschaft auf `center` gesetzt wird. Die Flex-Items sind gleichmäßig entlang der Hauptachse positioniert, indem die `justify-content` Eigenschaft auf `space-around` gesetzt wird.

Die {{cssxref("align-items")}} Eigenschaft steuert, wo sich die Flex-Items auf der Querachse befinden.

- Standardmäßig ist der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Dies streckt alle Flex-Items, um den Eltern in der Richtung der Querachse auszufüllen. Wenn der Elternteil keine feste Größe in der Richtung der Querachse hat, dann werden alle Flex-Items so hoch (oder breit) wie das höchste (oder breiteste) Flex-Item. So hatte unser erstes Beispiel standardmäßig Spalten gleicher Höhe.
- Der `center` Wert, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Items ihre intrinsic Dimensionen beibehalten, aber entlang der Querachse zentriert sind. Deshalb sind die Schaltflächen im aktuellen Beispiel vertikal zentriert.
- Es gibt auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end`, die alle Items am Start bzw. Ende der Querachse ausrichten. Die `baseline` Werte werden die Flex-Items nach ihrer Baseline ausrichten; im Grunde wird der Boden jeder Flex-Items ersten Textzeile mit dem Boden der ersten Zeile des Elements mit dem größten Abstand zwischen dem Cross-Start und dieser Baseline ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Items überschreiben, indem Sie die {{cssxref("align-self")}} Eigenschaft auf sie anwenden. Zum Beispiel versuchen Sie folgendes zu Ihrem CSS hinzuzufügen:

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

Schauen Sie, welchen Effekt dies hat und entfernen Sie es, wenn Sie damit fertig sind.

{{cssxref("justify-content")}} steuert, wo sich die Flex-Items auf der Hauptachse befinden.

- Der Standardwert ist `normal`, das sich wie `start` verhält und alle Items am Anfang der Hauptachse platziert.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu platzieren.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end` abhängig von der Schreibrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Es sorgt dafür, dass die Flex-Items im Zentrum der Hauptachse platziert sind.
- Der von uns oben verwendete Wert, `space-around`, ist nützlich — er verteilt alle Items gleichmäßig entlang der Hauptachse mit etwas Platz an jedem Ende.
- Es gibt einen weiteren Wert, `space-between`, der sehr ähnlich zu `space-around` ist, außer dass er keinen Platz an den Enden lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Ihnen ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Flex-Items anordnen

Flexbox bietet auch eine Funktion, um die Anordnung der Flex-Items zu ändern, ohne die Quellordnung zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layoutmethoden unmöglich ist.

Versuchen Sie, die folgende CSS zu Ihrem Schaltflächenleisten-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass die "Smile"-Schaltfläche ans Ende der Hauptachse verschoben wurde. Lassen Sie uns besprechen, wie dies im Detail funktioniert:

- Standardmäßig haben alle Flex-Items einen {{cssxref("order")}} Wert von `0`.
- Flex-Items mit höheren festgelegten Order-Werten erscheinen später in der Anzeigereihenfolge als Items mit niedrigeren Order-Werten.
- Flex-Items mit demselben Order-Wert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Items haben, deren Order-Werte als `2`, `1`, `1` und `0` festgelegt sind, wäre deren Anzeigereihenfolge 4., 2., 3. und 1.
- Das 3. Item erscheint nach dem 2., da es denselben Order-Wert hat und danach in der Quellordnung kommt.

Sie können negative Order-Werte setzen, um Items früher erscheinen zu lassen als Items mit dem Wert `0`. Zum Beispiel könnten Sie die "Blush"-Schaltfläche am Anfang der Hauptachse erscheinen lassen, indem Sie die folgende Regel verwenden:

```css
button:last-child {
  order: -1;
}
```

Obwohl Sie die Order mit `order` ändern können, bleibt die Tab-Reihenfolge dieselbe wie in der Code-Reihenfolge. Das Ändern der Fokusreihenfolge von fokussierbaren Elementen kann sich negativ auf die Benutzerfreundlichkeit für Ihre Tastaturbenutzer auswirken!

## Verschachtelte Flex-Boxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist völlig in Ordnung, ein Flex-Item auch zu einem Flex-Container zu machen, damit seine Kinder ebenfalls wie flexible Boxen layoutet werden.

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

Dieses komplexe Layout hat einige Flex-Items, die auch Flex-Container sind. Das HTML dafür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}} Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zunächst setzen wir die Kinder des {{htmlelement("section")}} so, dass sie wie flexible Boxen layoutet werden.

```css
section {
  display: flex;
}
```

Als nächstes setzen wir einige Flex-Werte auf die {{htmlelement("article")}}s selbst. Beachten Sie besonders die zweite Regel hier: Wir setzen das dritte {{htmlelement("article")}} so, dass seine Kinder ebenfalls wie Flex-Items layoutet werden, aber diesmal werden sie wie eine Spalte layoutet.

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

Dann wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann legen wir fest, dass seine Kinder (die {{htmlelement("button")}} Elemente) ebenfalls wie Flex-Items layoutet werden. Hier layouten wir sie in einer umhüllenden Zeile und zentrieren sie im verfügbaren Raum wie wir es mit dem einzelnen Schaltflächen-Beispiel gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir eine Größenanpassung auf die Schaltfläche. Diesmal indem wir ihr einen Flex-Wert von `1 auto` geben. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz wie möglich ein. So viele passen auf eine Zeile, wie bequem ist; darüber hinaus fallen sie auf eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen vor Ihrem nächsten Schritt behalten haben — siehe [Testen Sie Ihre Fähigkeiten: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox).

## Zusammenfassung

Damit endet unsere Tour durch die Grundlagen von Flexbox. Wir hoffen, Sie hatten Spaß und werden es weiter erforschen, während Sie mit Ihrem Lernen fortfahren. Als Nächstes werden wir uns einen weiteren wichtigen Aspekt von CSS-Layouts ansehen: [CSS Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Anordnen von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Kontrolle der Verhältnisse von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Guide zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lehrspiel, um die Grundlagen von Flexbox zu lernen und besser zu verstehen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
