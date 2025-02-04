---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 9709687fcb0f0ac83f859c80f118b87980191659
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layoutmethode zur Anordnung von Elementen in Reihen oder Spalten. Elemente _flexen_ (dehnen sich aus), um zusätzlichen Raum zu füllen oder schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturieren von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Styling von Text und Schriftarten</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten von CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — ein flexibles Layout einer Reihe von Block- oder Inline-Elementen in einer Dimension erstellen.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Element, Hauptachse und Nebenachse.</li>
          <li>Verstehen, was <code>display: flex</code> standardmäßig bietet.</li>
          <li>Wie man Inhalte auf neue Reihen und Spalten verteilt.</li>
          <li>Flexible Größenanpassung und Anordnung von Flex-Elementen.</li>
          <li>Rechtfertigen und Ausrichten von Inhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

Das CSS-Flexible-Box-Layout ermöglicht es Ihnen:

- Ein Blockelement vertikal im Inneren seines übergeordneten Elements zu zentrieren.
- Alle Kinder eines Containers so einzurichten, dass sie unabhängig von der verfügbaren Breite/Höhe die gleiche Menge an verfügbarer Breite/Höhe einnehmen.
- Alle Spalten in einem mehrspaltigen Layout auf die gleiche Höhe zu bringen, auch wenn sie unterschiedliche Inhaltsmengen enthalten.

Die Features von Flexbox können die perfekte Lösung für Ihre Anforderungen an ein eindimensionales Layout sein. Lassen Sie uns eintauchen und es herausfinden!

## Einführung in ein einfaches Beispiel

In diesem Artikel arbeiten Sie an einer Reihe von Übungen, die Ihnen helfen sollen zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTML und CSS erstellen. Laden Sie es in einen modernen Browser (wie Firefox oder Chrome) und sehen Sie sich den Code in Ihrem Code-Editor an. Alternativ können Sie das Beispiel in {{LiveSampleLink("flexbox_0", "dem Playground öffnen")}}.

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

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Überschrift der obersten Ebene darin haben und ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}-Elemente enthält. Wir werden diese verwenden, um ein ziemlich standardmäßiges dreispaltiges Layout zu erstellen.

## Bestimmen, welche Elemente als flexible Boxen gestaltet werden sollen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen gestaltet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das übergeordnete Element der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente layouten, daher setzen wir dies auf die {{htmlelement("section")}}:

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

Dies hat zur Folge, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Elementen** werden. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, richtig? Wir haben ein mehrspaltiges Layout mit gleichgroßen Spalten, und die Spalten haben alle die gleiche Höhe. Dies liegt daran, dass die Standardwerte, die Flex-Elementen (den Kindern des Flex-Containers) zugewiesen werden, so eingestellt sind, dass häufige Probleme wie dieses gelöst werden.

Lassen Sie uns zusammenfassen, was hier passiert. Das Hinzufügen eines {{cssxref("display")}}-Werts von `flex` zu einem Element macht es zu einem Flex-Container. Der Container wird in Bezug auf die Interaktion mit dem Rest der Seite als {{Glossary("Block-level_content", "Block-Content auf Blockebene")}} angezeigt. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in Flex-Elemente umgewandelt (und als solche layoutet).

Sie können den Container inline gestalten, indem Sie einen [outside `display` value](/de/docs/Web/CSS/display#outside) verwenden (z. B. `display: inline flex`), was beeinflusst, wie der Container selbst in der Seite layoutet wird. Der alte `inline-flex` Displaywert zeigt den Container ebenfalls inline an. Wir konzentrieren uns in diesem Tutorial darauf, wie sich die Inhalte des Containers verhalten, aber wenn Sie den Effekt von Inline- gegenüber Blocklayout sehen möchten, können Sie sich den [Wertvergleich anzeigen](/de/docs/Web/CSS/display#display_value_comparison) auf der Seite mit der `display`-Eigenschaft.

Die nächsten Abschnitte erklären ausführlicher, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente layoutet werden, werden sie entlang von zwei Achsen layoutet:

![Drei Flex-Elemente in einer von links nach rechts lesenden Sprache sind nebeneinander in einem Flex-Container layoutet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Elemente layoutet sind — ist horizontal. Die Enden der Achse sind Hauptanfang und Hauptende und befinden sich jeweils links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Der Queranfang und das Querende befinden sich oben und unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet und die Länge des Flex-Elements entlang der Querachse, in diesem Fall die Höhe, wird als Quergröße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Elemente layoutet sind (z. B. als Reihe über die Seite, oder eine Spalte nach unten auf der Seite). Anfang und Ende dieser Achse werden als **Hauptanfang** und **Hauptende** bezeichnet. Die Länge von der Hauptanfang-Kante zur Hauptende-Kante ist die **Hauptgröße**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Elemente layoutet sind. Anfang und Ende dieser Achse werden als **Queranfang** und **Querende** bezeichnet. Die Länge von der Queranfang-Kante zur Querende-Kante ist die **Quergröße**.
- Das übergeordnete Element, das `display: flex` darauf gesetzt hat (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die Elemente, die als flexible Boxen innerhalb des Flex-Containers layoutet werden, werden als **Flex-Elemente** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Beachten Sie diese Terminologie, wenn Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie mit einem der verwendeten Begriffe verwirrt sind.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welche Richtung die Flexbox-Kinder layoutet sind). Standardmäßig ist dies auf `row` gesetzt, was dazu führt, dass sie in einer Reihe in der Richtung angeordnet sind, in der die Standardsprache Ihres Browsers arbeitet (von links nach rechts im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout versetzt, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder schließlich ihren Container überlaufen und das Layout zerstören. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}-Elemente, die nicht passen, weil sie eine `min-width` von `400px` haben, sodass es einen horizontalen Bildlauf gibt.

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

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Elemente in eine einzelne Reihe zu platzieren, wenn die `flex-direction` auf `row` gesetzt ist, oder in eine einzelne Spalte, wenn die `flex-direction` auf `column` gesetzt ist.

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

Sie werden sehen, dass das Layout mit dieser enthaltenen Deklaration viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Reihen. Jede Reihe hat so viele Flexbox-Kinder, die hineinpassen, wie sinnvoll ist. Jeder Überlauf wird in die nächste Zeile verschoben. Die `flex: 200px` Deklaration, die auf die Artikel gesetzt ist, bedeutet, dass jedes mindestens `200px` breit sein wird. Wir werden diese Eigenschaft später im Detail besprechen. Sie könnten auch feststellen, dass die letzten Kinder in der letzten Reihe jeweils breiter gemacht werden, damit die gesamte Reihe noch gefüllt ist.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zunächst, Ihren {{cssxref("flex-direction")}}-Eigenschaftswert auf `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie immer noch Ihr mehrzeiliges Layout haben, aber es beginnt von der gegenüberliegenden Ecke des Browserfensters und fließt in umgekehrter Richtung. Das folgende Bild zeigt das aktualisierte Layout.

## flex-flow Kurzschreibweise

An diesem Punkt ist es erwähnenswert, dass es eine Kurzschreibweise für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. Sie können beispielsweise

```css
flex-direction: row;
flex-wrap: wrap;
```

durch

```css
flex-flow: row wrap;
```

< ersetzen.

## Flexible Größenanpassung von Flex-Elementen

Kehren wir nun zu unserem ersten Beispiel zurück und sehen wir uns an, wie wir steuern können, welchen Anteil an Raum Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen.

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

Dies ist ein einheitenloser Proportionswert, der diktiert, wie viel Verfügungsraum entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnehmen wird. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element denselben Wert (einen Wert von `1`), was bedeutet, dass sie alle den selben Anteil des übrig gebliebenen Raums einnehmen, nachdem Eigenschaften wie Innenabstand und Rand gesetzt wurden. Dieser Wert wird proportional unter den Flex-Elementen geteilt: Wenn jedem Flex-Element ein Wert von `400000` gegeben würde, hätte dies genau den gleichen Effekt.

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

Fügen Sie nun die folgende Regel unter der vorherigen ein:

```css live-sample___flexbox_3
article:nth-of-type(3) {
  flex: 2;
}
```

{{EmbedLiveSample("flexbox_3", "100", "210")}}

Jetzt, wenn Sie aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es sind jetzt insgesamt vier Verhältnis-Einheiten verfügbar (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, also nehmen sie jeweils 1/4 des verfügbaren Raums ein. Das dritte hat zwei Einheiten, daher nimmt es 2/4 des verfügbaren Raums ein (oder eine Hälfte).

Sie können auch einen Minimalgrößenwert innerhalb des Flex-Werts angeben. Versuchen Sie, Ihre vorhandenen Artikel-Regeln wie folgt zu aktualisieren:

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

Dies besagt im Wesentlichen: "Jedes Flex-Element erhält zunächst `100px` des verfügbaren Raums. Danach wird der restliche verfügbare Raum entsprechend den Verhältnis-Einheiten verteilt." Sie werden einen Unterschied in der Aufteilung des Raums bemerken.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Elemente haben eine Mindestbreite von 100 Pixeln — gesetzt mit 'flex'. Der Wert von Flex für die ersten beiden Flex-Elemente ist 1 und für das dritte Element ist 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 Verhältnis-Einheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugeordnet, und 2 Einheiten werden dem dritten Flex-Element zugeordnet, sodass das dritte Flex-Element breiter ist als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in seiner Flexibilität/Anpassungsfähigkeit. Wenn Sie das Browserfenster ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiter einwandfrei.

## flex: Kurzschreibweise versus Langschreibweise

{{cssxref("flex")}} ist eine Kurzschreibweise, die bis zu drei verschiedene Werte angeben kann:

- Der oben besprochene einheitenlose Proportionswert. Dieser kann separat mit der Langschreibweise {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter einheitenloser Proportionswert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, wie stark ein Element schrumpfen wird, um ein Überlaufen zu verhindern. Dies ist ein ziemlich fortgeschrittenes Flexbox-Feature, das wir in diesem Artikel nicht weiter behandeln werden.
- Der oben besprochene Minimalgrößenwert. Dieser kann separat mit dem Langschreibwert {{cssxref("flex-basis")}} angegeben werden.

Wir würden davon abraten, die Langschreib-Flex-Eigenschaften zu verwenden, es sei denn, es ist wirklich notwendig (zum Beispiel, um etwas zuvor festgelegtes zu überschreiben). Sie führen zu vielen zusätzlichen Codezeilen und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können Flexbox-Features auch verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen:

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

Wir werden dies in eine saubere, flexible Schaltflächen-/Symbolleiste verwandeln. Derzeit sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gequetscht sind.

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

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Wir haben dies über zwei neue Eigenschaften erreicht. Die Flex-Elemente sind durch Setzen der `align-items`-Eigenschaft auf `center` an der Querachse zentriert positioniert. Die Flex-Elemente sind entlang der Hauptachse durch Setzen der `justify-content`-Eigenschaft auf `space-around` gleichmäßig verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Elemente auf der Querachse sitzen.

- Standardmäßig hat der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Dadurch werden alle Flex-Elemente so gestreckt, dass sie die Eltern in Richtung der Querachse ausfüllen. Wenn das Elternteil keine feste Größe in Richtung der Querachse hat, werden alle Flex-Elemente so groß (oder breit) wie das höchste (oder breiteste) Flex-Element. Dies ist der Grund, warum unser erstes Beispiel standardmäßig Spalten mit gleicher Höhe hatte.
- Der Wert `center`, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Abmessungen beibehalten, aber entlang der Querachse zentriert werden. Aus diesem Grund sind die Schaltflächen in unserem aktuellen Beispiel vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` verwenden, die alle Elemente am Anfang bzw. Ende der Querachse ausrichten. Die `baseline`-Werte richten die Flex-Elemente anhand ihrer Grundlinie aus; im Grunde wird die Unterkante jeder ersten Textlinie des Flex-Elements an der Unterkante der ersten Linie des Elements mit dem größten Abstand zwischen dem Queranfang und dieser Grundlinie ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Elemente überschreiben, indem Sie die {{cssxref("align-self")}}-Eigenschaft darauf anwenden. Fügen Sie zum Beispiel das Folgende zu Ihrem CSS hinzu:

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

Sehen Sie sich an, welchen Effekt dies hat, und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Elemente auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich wie `start` verhält, was dazu führt, dass alle Elemente am Anfang der Hauptachse sitzen.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu positionieren.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end`, abhängig von der Schreibrichtungsrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Dadurch werden die Flex-Elemente in der Mitte der Hauptachse positioniert.
- Der von uns oben verwendete Wert `space-around` ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse und lässt an jedem Ende etwas Platz.
- Es gibt noch einen anderen Wert, `space-between`, der dem `space-around` sehr ähnlich ist, außer dass er keinen Platz an den Enden lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir würden Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Anordnung von Flex-Elementen

Flexbox verfügt auch über eine Funktion zum Ändern der Layout-Richtung von Flex-Elementen, ohne die Quellreihenfolge zu beeinträchtigen. Dies ist etwas, das mit traditionellen Layout-Methoden unmöglich ist.

Versuchen Sie, den folgenden CSS zu Ihrem Schaltflächenleisten-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie die Anzeige und Sie werden sehen, dass die Schaltfläche "Lächeln" an das Ende der Hauptachse verschoben wurde. Lassen Sie uns im Detail besprechen, wie dies funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}}-Wert von `0`.
- Flex-Elemente mit höheren angegebenen Ordnungswerten erscheinen später in der Anzeigereihenfolge als Elemente mit niedrigeren Ordnungswerten.
- Flex-Elemente mit demselben Ordnungswert erscheinen in ihrer Quellreihenfolge. Wenn Sie beispielsweise vier Elemente haben, deren Ordnungswerte als `2`, `1`, `1` und `0` festgelegt wurden, wäre ihre Anzeigereihenfolge 4., 2., 3. und dann 1..
- Das 3. Element erscheint nach dem 2., weil es den gleichen Ordnungswert hat und im Quellcode nach diesem steht.

Sie können negative Ordnungswerte festlegen, um Elemente früher erscheinen zu lassen als Elemente, deren Wert `0` ist. Beispielsweise könnten Sie die Schaltfläche "Erröten" durch die folgende Regel an den Anfang der Hauptachse stellen:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorreihenfolge gleich wie die Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzbarkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, mit Flexbox einige ziemlich komplexe Layouts zu erstellen. Es ist vollkommen in Ordnung, ein Flex-Element so einzustellen, dass es auch ein Flex-Container ist, sodass seine Kinder ebenfalls wie flexible Boxen layoutet werden.

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

Dieses komplexe Layout hat einige Flex-Elemente, die auch Flex-Container sind. Der HTML-Code dafür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}-Elemente enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Lassen Sie uns den Code anschauen, den wir für das Layout verwendet haben.

Zuerst legen wir fest, dass die Kinder des {{htmlelement("section")}} als flexible Boxen layoutet werden.

```css
section {
  display: flex;
}
```

Als nächstes setzen wir einige Flex-Werte auf die {{htmlelement("article")}}-Elemente. Beachten Sie besonders die zweite Regel hier: Wir setzen das dritte {{htmlelement("article")}} so, dass seine Kinder ebenfalls wie Flex-Elemente layoutet werden, aber diesmal layouten wir sie wie eine Spalte.

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

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, und dann setzen wir seine Kinder (die {{htmlelement("button")}}-Elemente) so, dass sie ebenfalls wie Flex-Elemente layoutet werden. Hier layouten wir sie in einer umbruchenden Reihe und richten sie in der Mitte des verfügbaren Raums aus, wie wir es mit dem individuellen Schaltfeldbeispiel gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Abschließend legen wir einige Größen auf die Schaltfläche fest. Diesmal geben wir ihr einen Flexwert von `1 auto`. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie die Breite Ihres Browserfensters anpassen. Die Schaltflächen nehmen so viel Platz wie möglich ein. So viele wie angenehm auf eine Zeile passen, werden platziert; darüber hinaus fallen sie in eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox_skills).

## Zusammenfassung

Damit endet unser Überblick über die Grundlagen von Flexbox. Wir hoffen, dass Sie Spaß hatten und damit weiterspielen werden, während Sie Ihr Lernen weiter vertiefen. Als Nächstes schauen wir uns einen weiteren wichtigen Aspekt von CSS-Layouts an: [CSS Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf eine visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lehrspiel, um die Grundlagen von Flexbox besser zu verstehen und zu lernen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
