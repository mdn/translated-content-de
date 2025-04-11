---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine ein-dimensionale Layout-Methode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente _beugen sich_ (erweitern sich), um zusätzlichen Raum zu füllen oder schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftstile</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — das flexible Layout einer Reihe von Block- oder Inline-Elementen in einer Dimension.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Item, Hauptachse und Querachse.</li>
          <li>Verstehen, was <code>display: flex</code> standardmäßig bietet.</li>
          <li>Wie man Inhalte in neue Zeilen und Spalten umbricht.</li>
          <li>Flexible Größenanpassung und Anordnung von Flex-Items.</li>
          <li>Inhalte rechtfertigen und ausrichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS-Flexibles Box-Layout ermöglicht Ihnen:

- Ein vertikales Zentrieren eines Inhaltsblocks innerhalb seines übergeordneten Elements.
- Alle Kinder eines Containers so darzustellen, dass sie einen gleichen Anteil der verfügbaren Breite/Höhe einnehmen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem Mehrspaltenlayout auf die gleiche Höhe zu bringen, selbst wenn sie unterschiedliche Inhaltsmengen enthalten.

Flexbox-Features könnten die perfekte Lösung für Ihre ein-dimensionalen Layout-Bedürfnisse sein. Lassen Sie uns tiefer eintauchen und es herausfinden!

## Einführung in ein einfaches Beispiel

In diesem Artikel werden Sie durch eine Reihe von Übungen arbeiten, um zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTML und CSS erstellen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und schauen Sie sich den Code in Ihrem Code-Editor an. Alternativ können Sie das Beispiel in {{LiveSampleLink("flexbox_0", "open the playground")}} öffnen.

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

Sie sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Überschrift auf oberster Ebene darin und ein {{htmlelement("section")}}-Element haben, das drei {{htmlelement("article")}}s enthält. Wir werden diese verwenden, um ein ziemlich standardmäßiges Dreispaltenlayout zu erstellen.

## Angeben, welche Elemente als flexible Boxen layoutet werden sollen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen layoutet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das übergeordnete Element der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente layouten, also setzen wir dies auf das {{htmlelement("section")}}:

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

Dies bewirkt, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Items** werden. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein Mehrspaltenlayout mit gleich großen Spalten, und die Spalten sind alle gleich hoch. Dies liegt daran, dass die Standardwerte, die den Flex-Items (den Kindern des Flex-Containers) gegeben werden, so eingerichtet sind, dass sie häufige Probleme wie dieses lösen.

Lassen Sie uns rekapitulieren, was hier passiert. Durch das Hinzufügen eines {{cssxref("display")}}-Werts von `flex` zu einem Element wird es zu einem Flex-Container. Der Container wird in Bezug auf die Interaktion mit dem Rest der Seite als {{Glossary("Block-level_content", "Block-Content")}} angezeigt. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in (und als) Flex-Items umgewandelt.

Sie können den Container inline machen, indem Sie einen [outside `display` value](/de/docs/Web/CSS/display#outside) verwenden (z. B. `display: inline flex`), welcher beeinflusst, wie der Container selbst in der Seite layoutet wird.
Der veraltete `inline-flex` display-Wert zeigt den Container ebenfalls inline an.
Wir konzentrieren uns in diesem Tutorial darauf, wie sich der Inhalt des Containers verhält, aber wenn Sie den Effekt von inline im Vergleich zu Block-Layout sehen möchten, können Sie sich den [Wertevergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display` Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären ausführlicher, was Flex-Items sind und was in einem Element passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flexmodell

Wenn Elemente als Flex-Items layoutet werden, werden sie entlang zweier Achsen layoutet:

![Drei Flex-Items in einer Sprache, die von links nach rechts gelesen wird, sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Items angeordnet sind — ist horizontal. Die Enden der Achse sind Haupt-Start und Haupt-Ende und befinden sich links bzw. rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Quer-Start und Quer-Ende befinden sich oben und unten. Die Länge des Flex-Items entlang der Hauptachse, in diesem Fall die Breite, wird Hauptgröße genannt, und die Länge des Flex-Items entlang der Querachse, in diesem Fall die Höhe, wird Quergöße genannt.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Items layoutet sind (z. B. als Reihe über die Seite oder als Spalte nach unten). Der Anfang und das Ende dieser Achse werden als **Haupt-Start** und **Haupt-Ende** bezeichnet. Die Länge von der Haupt-Start-Kante zur Haupt-Ende-Kante ist die **Hauptgröße**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Items layoutet sind. Der Anfang und das Ende dieser Achse werden als **Quer-Start** und **Quer-Ende** bezeichnet. Die Länge von der Quer-Start-Kante zur Quer-Ende-Kante ist die **Quergöße**.
- Das übergeordnete Element, auf das `display: flex` gesetzt ist (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die Elemente, die innerhalb des Flex-Containers als flexible Boxen angeordnet sind, werden als **Flex-Items** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Kopf, während Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie sich über die verwendeten Begriffe unsicher sind.

## Spalten oder Zeilen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welcher Richtung die Hauptachse verläuft (in welche Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist dies auf `row` gesetzt, was dazu führt, dass sie in einer Reihe in der Richtung angeordnet sind, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts, im Falle eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout versetzt, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie weitermachen, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Items auch in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umwickeln

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder schließlich ihren Container überlaufen und das Layout zerbrechen. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}, die nicht passen, da sie eine `min-width` von `400px` haben, sodass es einen horizontalen Scroll gibt.

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

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container herausbrechen. Standardmäßig versucht der Browser, alle Flex-Items in einer einzigen Reihe zu platzieren, wenn die `flex-direction` auf `row` gesetzt ist oder in einer einzigen Spalte, wenn die `flex-direction` auf `column` gesetzt ist.

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

Eine Möglichkeit, wie Sie dies beheben können, besteht darin, die folgende Deklaration Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

Sie werden sehen, dass das Layout mit diesem Einschluss viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Reihen. Jede Reihe enthält so viele Flexbox-Kinder, wie es sinnvoll ist. Ein Überlauf wird auf die nächste Zeile verschoben.

Aber hier gibt es noch mehr, das wir tun können. Versuchen Sie zuerst, den {{cssxref("flex-direction")}} Ihrer Regel zu `row-reverse` zu ändern. Jetzt sehen Sie, dass Sie immer noch Ihr Mehrreihenlayout haben, aber es beginnt in der gegenüberliegenden Ecke des Browserfensters und verläuft umgekehrt.

## flex-flow Abkürzung

An dieser Stelle lohnt es sich zu beachten, dass es eine Abkürzung für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. So können Sie zum Beispiel

```css
flex-direction: row;
flex-wrap: wrap;
```

durch

```css
flex-flow: row wrap;
```

ersetzen.

## Flexible Größenanpassung von Flex-Items

Lassen Sie uns jetzt zu unserem ersten Beispiel zurückkehren und uns ansehen, wie wir kontrollieren können, welchen Anteil eines Raumes Flex-Items im Vergleich zu anderen Flex-Items einnehmen.

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

Dies ist ein einheitenloser Proportionswert, der bestimmt, wie viel verfügbarer Raum entlang der Hauptachse jedes Flex-Item im Vergleich zu anderen Flex-Items einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element denselben Wert (einen Wert von `1`), was bedeutet, dass sie alle denselben Anteil des übrigen Raumes nach Eigenschaften wie Padding und Margin einnehmen. Dieser Wert wird im Verhältnis unter den Flex-Items geteilt: Jedes Flex-Item mit einem Wert von `400000` würde genau denselben Effekt haben.

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

Fügen Sie nun die folgende Regel unter der vorherigen hinzu:

```css live-sample___flexbox_3
article:nth-of-type(3) {
  flex: 2;
}
```

{{EmbedLiveSample("flexbox_3", "100", "210")}}

Wenn Sie jetzt aktualisieren, sehen Sie, dass das dritte {{htmlelement("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es gibt jetzt insgesamt vier Proportionseinheiten (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Items haben jeweils eine Einheit, sodass sie jeweils 1/4 des verfügbaren Raumes einnehmen. Das dritte hat zwei Einheiten, sodass es 2/4 des verfügbaren Raumes einnimmt (oder die Hälfte).

Sie können auch einen Mindestgrößenwert innerhalb des flex-Werts angeben. Versuchen Sie, Ihre vorhandenen Artikelregeln wie folgt zu aktualisieren:

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

Dies besagt im Grunde: "Jedes Flex-Item bekommt zuerst `100px` des verfügbaren Raumes. Danach wird der übrige Raum proportional laut der Proportionseinheiten geteilt." Sie werden einen Unterschied sehen, wie der Raum geteilt wird.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Items haben eine Mindestbreite von 100 Pixeln, die mit 'flex' eingestellt wird. Der Wert von flex für die ersten beiden Flex-Items ist 1 und für das dritte Item ist 2. Dies teilt den restlichen Raum im Flex-Container in 4 proportionale Einheiten. Eine Einheit wird jedem der ersten beiden Flex-Items zugewiesen und 2 Einheiten werden dem dritten Flex-Item zugewiesen, wodurch das dritte Flex-Item breiter ist als die anderen beiden, die dieselbe Breite haben.

Der tatsächliche Wert von Flexbox kann in seiner Flexibilität/Anpassungsfähigkeit gesehen werden. Wenn Sie das Browserfenster in der Größe ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Abkürzung vs. Langform

{{cssxref("flex")}} ist eine Abkürzung, die bis zu drei verschiedene Werte spezifizieren kann:

- Der einheitenlose Proportionswert, den wir oben diskutiert haben. Dies kann separat mit der {{cssxref("flex-grow")}}-Langform-Eigenschaft spezifiziert werden.
- Ein zweiter einheitenloser Proportionswert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Items ihren Container überlaufen. Dieser Wert gibt an, wie viel ein Element schrumpfen wird, um Überläufe zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion und wir werden sie in diesem Artikel nicht weiter behandeln.
- Der oben diskutierte Mindestgrößenwert. Dies kann separat mit dem {{cssxref("flex-basis")}}-Langform-Wert spezifiziert werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, es ist wirklich notwendig (z. B. um etwas zu überschreiben, was zuvor gesetzt wurde). Sie führen zu viel zusätzlichem geschriebenem Code und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Mit Flexbox-Features können Sie auch Flex-Items entlang der Haupt- oder Querachse ausrichten. Lassen Sie uns dies untersuchen, indem wir uns ein neues Beispiel ansehen:

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

Wir werden dies in eine ordentliche, flexible Schaltfläche/Toolbar verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit ein paar Buttons, die in die obere linke Ecke gedrückt sind.

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

Aktualisieren Sie die Seite, und Sie werden sehen, dass die Buttons jetzt schön horizontal und vertikal zentriert sind. Wir haben dies durch zwei neue Eigenschaften erreicht. Die Flex-Items sind durch Setzen der `align-items`-Eigenschaft auf `center` in der Mitte der Querachse positioniert. Die Flex-Items sind durch Setzen der `justify-content`-Eigenschaft auf `space-around` gleichmäßig entlang der Hauptachse verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Items auf der Querachse sitzen.

- Standardmäßig ist der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Dadurch werden alle Flex-Items so gedehnt, dass sie das übergeordnete Element in Richtung der Querachse ausfüllen. Wenn das übergeordnete Element keine feste Größe in der Richtung der Querachse hat, werden alle Flex-Items so hoch (oder breit) wie das höchste (oder breiteste) Flex-Item. Dies ist der Grund, warum unser erstes Beispiel Spalten mit gleicher Höhe standardmäßig hatte.
- Der Wert `center`, den wir im obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Dimensionen beibehalten, aber entlang der Querachse zentriert sind. Deshalb sind die aktuellen Beispielbuttons vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` haben, die alle Elemente am Anfang bzw. Ende der Querachse ausrichten. Die `baseline`-Werte richten die Flex-Items an ihrer Basislinie aus; im Grunde wird die Unterkante jeder ersten Textzeile der Flex-Items mit der Unterkante der ersten Zeile des Elements mit dem größten Abstand zwischen dem Quer-Start und dieser Basislinie ausgeglichen. Weitere Details finden Sie unter {{cssxref("align-items")}}.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Items überschreiben, indem Sie die {{cssxref("align-self")}}-Eigenschaft auf diese anwenden. Beispielweise, versuchen Sie, das Folgende zu Ihrem CSS hinzuzufügen:

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

Sehen Sie sich an, welche Auswirkungen dies hat, und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Items auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich wie `start` verhält, sodass alle Elemente am Anfang der Hauptachse angeordnet werden.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende anzubringen.
- Die Werte `left` und `right` wirken wie `start` oder `end`, abhängig von der Schreibrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Er sorgt dafür, dass die Flex-Items in der Mitte der Hauptachse sitzen.
- Der von uns oben verwendete Wert `space-around` ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit einem kleinen Abstand an beiden Enden.
- Es gibt einen weiteren Wert, `space-between`, der `space-around` sehr ähnlich ist, außer dass er keinen Abstand an den beiden Enden lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu experimentieren, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Anordnung von Flex-Items

Flexbox verfügt auch über eine Funktion zum Ändern der Anordnung der Flex-Items, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layout-Methoden unmöglich ist.

Versuchen Sie, das folgende CSS zu Ihrem Buttonbar-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie, und Sie werden sehen, dass die "Smile"-Schaltfläche ans Ende der Hauptachse verschoben wurde. Lassen Sie uns darüber sprechen, wie das im Detail funktioniert:

- Standardmäßig haben alle Flex-Items einen {{cssxref("order")}}-Wert von `0`.
- Flex-Items mit höher angegebenen Ordnungswerten erscheinen später in der Display-Reihenfolge als Elemente mit niedrigeren Ordnungswerten.
- Flex-Items mit dem gleichen Ordnungswert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Elemente mit den Ordnungswerten `2`, `1`, `1` und `0` haben, wäre ihre Anzeigereihenfolge 4., 2., 3. dann 1.
- Das 3. Element erscheint nach dem 2., weil es denselben Ordnungswert hat und in der Quellreihenfolge später kommt.

Sie können negative Ordnungswerte setzen, damit Elemente früher erscheinen als Elemente, deren Wert `0` ist. Zum Beispiel könnten Sie die "Blush"-Schaltfläche mit der folgenden Regel an den Anfang der Hauptachse setzen:

```css
button:last-child {
  order: -1;
}
```

Obwohl Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorreihenfolge dieselbe wie die Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzerfreundlichkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist vollkommen in Ordnung, ein Flex-Item auch zum Flex-Container zu machen, sodass seine Kinder ebenfalls wie flexible Boxen layoutet sind.

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

Dieses komplexe Layout hat ein paar Flex-Items, die ebenfalls Flex-Container sind. Das HTML dafür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Lassen Sie uns einen Blick auf den Code werfen, den wir für das Layout verwendet haben.

Zunächst legen wir fest, dass die Kinder des {{htmlelement("section")}} als flexible Boxen layoutet werden.

```css
section {
  display: flex;
}
```

Als Nächstes setzen wir einige Flex-Werte auf die {{htmlelement("article")}}s selbst. Beachten Sie besonders die zweite Regel hier: Wir setzen das dritte {{htmlelement("article")}}, damit seine Kinder auch als Flex-Items layoutet werden, aber diesmal layouten wir sie als Spalte.

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

Als Nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, und setzen dann seine Kinder (die {{htmlelement("button")}}-Elemente) so, dass sie auch als Flex-Items layoutet werden. Hier layouten wir sie in einer umschließenden Zeile und zentrieren sie im verfügbaren Raum, genau wie wir es mit dem einzelnen Button-Beispiel, das wir zuvor gesehen haben, gemacht haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir einige Größen auf den Button. Dieses Mal, indem wir ihm einen Flex-Wert von `1 auto` geben. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie versuchen, die Breite Ihres Browserfensters zu ändern. Die Schaltflächen nehmen so viel Platz ein, wie sie können. So viele wie angenehm auf eine Zeile passen; darüber hinaus fallen sie auf eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox).

## Zusammenfassung

Damit endet unsere Tour durch die Grundlagen von Flexbox. Wir hoffen, dass Sie Spaß hatten und es gründlich ausprobieren werden, während Sie Ihr weiteres Lernen fortsetzen. Als Nächstes werfen wir einen Blick auf einen weiteren wichtigen Aspekt von CSS-Layouts: [CSS-Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Objekten in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Anordnung von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Kontrollieren der Verhältnisse von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf ansprechende visuelle Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein pädagogisches Spiel, um die Grundlagen von Flexbox zu lernen und besser zu verstehen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
