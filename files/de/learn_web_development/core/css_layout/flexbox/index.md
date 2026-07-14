---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: c55a38c71a356502e6d3df5e246b6e89f9e83498
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) ist eine eindimensionale Layout-Methode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente _flexen_ (dehnen sich aus), um zusätzlichen Platz zu füllen, oder schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — flexibel eine Reihe von Block- oder Inline-Elementen in einer Dimension anzuordnen.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Element, Hauptachse und Querachse.</li>
          <li>Verstehen, was <code>display: flex</code> Ihnen standardmäßig bietet.</li>
          <li>Wie man Inhalte in neuen Zeilen und Spalten umbricht.</li>
          <li>Flexible Größenanpassung und Anordnung von Flex-Elementen.</li>
          <li>Inhalte rechtfertigen und ausrichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS Flexibler Box-Layout ermöglicht Ihnen:

- Einen Block von Inhalten vertikal innerhalb seines Elternteils zu zentrieren.
- Alle Kinder eines Containers eine gleiche Menge der verfügbaren Breite/Höhe einzunehmen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- In einem Layout mit mehreren Spalten alle Spalten die gleiche Höhe annehmen zu lassen, selbst wenn sie eine unterschiedliche Menge an Inhalt enthalten.

Flexbox-Funktionen könnten die perfekte Lösung für Ihre eindimensionalen Layout-Bedürfnisse sein. Lassen Sie uns darauf eingehen und es herausfinden!

> [!NOTE]
> Scrimbas einführendes [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim bietet einen interaktiven Leitfaden, der abdeckt, wie häufig Flexbox im Web vorkommt und warum es so wichtig zu lernen ist, und führt Sie durch ein typisches Anwendungsbeispiel, das die Leistungsfähigkeit von Flexbox demonstriert.

## Einführung in ein einfaches Beispiel

In diesem Artikel werden Sie eine Reihe von Übungen durcharbeiten, um zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTMLs und CSSs anfertigen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und sehen Sie sich den Code in Ihrem Code-Editor an. Alternativ klicken Sie auf die Schaltfläche „Play“, um es im Playground zu öffnen.

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

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Überschrift der obersten Ebene darin und ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält, haben. Wir werden diese verwenden, um ein ziemlich standardmäßiges Drei-Spalten-Layout zu erstellen.

## Festlegen, welche Elemente als flexible Boxen ausgelegt werden sollen

Um zu beginnen, müssen wir auswählen, welche Elemente als flexible Boxen ausgelegt werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente auslegen, daher setzen wir dies auf die {{htmlelement("section")}}:

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

Dies führt dazu, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Elementen**. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein Layout mit mehreren Spalten mit gleich großen Spalten, und die Spalten haben alle die gleiche Höhe. Dies liegt daran, dass die Standardwerte, die den Flex-Elementen (den Kindern des Flex-Containers) gegeben werden, so eingerichtet sind, um häufige Probleme wie dieses zu lösen.

Lassen Sie uns zusammenfassen, was hier passiert. Das Hinzufügen eines {{cssxref("display")}}-Wertes von `flex` zu einem Element macht es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Level-Inhalt")}} in Bezug auf die Interaktion mit dem Rest der Seite angezeigt. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in Flex-Elemente umgewandelt (und als solche angeordnet).

Sie können den Container mithilfe eines [außen `display`-Wertes](/de/docs/Web/CSS/Reference/Properties/display#outside) (z. B. `display: inline flex`) inline machen, was beeinflusst, wie der Container selbst auf der Seite angeordnet wird. Der ältere `inline-flex`-Anzeige-Wert zeigt den Container ebenfalls inline an. Wir konzentrieren uns in diesem Tutorial darauf, wie sich die Inhalte des Containers verhalten, aber wenn Sie die Wirkung von Inline- versus Block-Layout sehen möchten, können Sie sich den [Vergleich der Werte](/de/docs/Web/CSS/Reference/Properties/display#display_value_comparison) auf der `display`-Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären im Detail, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente ausgelegt werden, werden sie entlang von zwei Achsen angeordnet:

![Drei Flex-Elemente in einer von links nach rechts ausgerichteten Sprache werden nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Elemente angeordnet sind — ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Die Kreuz-start und Kreuz-end liegen jeweils oben und unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Elements entlang der Querachse, in diesem Fall die Höhe, wird als Quergröße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in die Richtung verläuft, in der die Flex-Elemente angeordnet sind (zum Beispiel als Zeile über die Seite oder als Spalte nach unten). Die Start- und Endpunkte dieser Achse werden als **Hauptanfang** und **Hauptende** bezeichnet. Die Länge eines Flex-Elements entlang der Hauptachse wird als **Hauptgröße** bezeichnet.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Elemente angeordnet sind. Die Start- und Endpunkte dieser Achse werden als **Queranfang** und **Querende** bezeichnet. Die Länge eines Flex-Elements entlang der Querachse wird als **Quergröße** bezeichnet.
- Das Elternelement, auf das `display: flex` gesetzt ist (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die als flexible Boxen im Flex-Container angeordneten Elemente werden als **Flex-Elemente** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Denken Sie an diese Terminologie, während Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie verwirrt über die verwendeten Begriffe sind.

## Spalten oder Zeilen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welcher Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist dies auf `row` gesetzt, was dazu führt, dass sie in einer Zeile in der Richtung ausgelegt werden, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts, im Falle eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout bringt, ähnlich wie bevor wir irgendein CSS hinzugefügt haben. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass schließlich Ihre Flexbox-Kinder ihren Container überlaufen und das Layout brechen. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}s, die nicht passen, weil sie eine `min-width` von `400px` haben, weshalb es einen horizontalen Bildlauf gibt.

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

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Elemente in einer einzigen Zeile zu platzieren, wenn die `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn die `flex-direction` auf `column` gesetzt ist.

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

Sie werden sehen, dass das Layout mit dieser Einschließung viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Zeilen. Jede Zeile hat so viele Flexbox-Kinder, die hineinpassen, wie es vernünftig ist. Jeder Überlauf wird auf die nächste Zeile verschoben.

Aber es gibt noch mehr, das wir hier tun können. Versuchen Sie zunächst, den Wert Ihrer {{cssxref("flex-direction")}}-Eigenschaft auf `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie immer noch Ihr Layout mit mehreren Zeilen haben, aber es beginnt von der gegenüberliegenden Ecke des Browserfensters und fließt in umgekehrter Richtung.

## flex-flow Kurzschreibweise

An dieser Stelle sei darauf hingewiesen, dass eine Kurzschreibweise für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} existiert: {{cssxref("flex-flow")}}. So können Sie zum Beispiel

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

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und untersuchen, wie wir kontrollieren können, welchen Anteil des Raums Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen.

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

Dies ist ein proportionsloser Wert, der bestimmt, wie viel verfügbarer Platz entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnehmen wird. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element denselben Wert (einen Wert von `1`), was bedeutet, dass sie alle den gleichen Anteil des verfügbaren Raums einnehmen, nachdem Eigenschaften wie Padding und Margin festgelegt wurden. Dieser Wert wird proportional unter den Flex-Elementen geteilt: Wenn jedem Flex-Element ein Wert von `400000` gegeben würde, hätte dies genau denselben Effekt.

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

Jetzt, wenn Sie aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es sind jetzt insgesamt vier proportionale Einheiten verfügbar (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, also nehmen sie jeweils 1/4 des verfügbaren Raums ein. Das dritte hat zwei Einheiten, also nimmt es 2/4 des verfügbaren Raums ein (oder die Hälfte).

Sie können auch einen minimalen Größenwert innerhalb des flex-Wertes angeben. Versuchen Sie, Ihre vorhandenen Artikel-Regeln wie folgt zu aktualisieren:

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

Dies bedeutet im Wesentlichen: "Jedes Flex-Element erhält zunächst `100px` des verfügbaren Raums. Danach wird der restliche verfügbare Raum gemäß den proportionslosen Einheiten aufgeteilt." Sie werden sehen, dass sich die Aufteilung des Raums ändert.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Elemente haben eine Mindestbreite von 100 Pixeln - festgelegt durch 'flex'. Der Wert von flex für die ersten beiden Flex-Elemente beträgt 1 und für das dritte Element 2. Dies teilt den restlichen Raum im Flex-Container in 4 proportionale Einheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugeordnet und 2 Einheiten dem dritten Flex-Element, wodurch das dritte Flex-Element breiter wird als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in seiner Flexibilität/Anpassungsfähigkeit. Wenn Sie das Browserfenster vergrößern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzschreibweise versus Langschreibweise

{{cssxref("flex")}} ist eine Kurzschreibweise, die bis zu drei verschiedene Werte spezifizieren kann:

- Der proportionslose Wert, den wir oben diskutiert haben. Dieser kann separat mit der Langschreib-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter proportionsloser Wert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, um wie viel ein Element schrumpfen wird, um Überlauf zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion, die wir in diesem Artikel nicht weiter behandeln werden.
- Der minimale Größenwert, den wir oben diskutiert haben. Dieser kann separat mittels des Langschreibwertes {{cssxref("flex-basis")}} angegeben werden.

Wir raten davon ab, die Langschreib-Flex-Eigenschaften zu verwenden, es sei denn, es ist wirklich notwendig (zum Beispiel, um etwas zuvor Festgelegtes zu überschreiben). Sie führen zu vielen zusätzlichen Codezeilen und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Funktionen verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies durch einen Blick auf ein neues Beispiel erkunden:

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

Wir werden dies in eine elegante, flexible Schaltfläche/Toolbar verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gequetscht sind.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

Zuerst nehmen Sie eine lokale Kopie dieses Beispiels.

Fügen Sie nun das folgende am Ende des CSS-Beispiels hinzu:

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

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Das haben wir durch zwei neue Eigenschaften erreicht. Die Flex-Elemente sind durch das Setzen der `align-items`-Eigenschaft auf `center` auf der Querachse zentriert. Die Flex-Elemente sind gleichmäßig entlang der Hauptachse verteilt, indem die `justify-content`-Eigenschaft auf `space-around` gesetzt wird.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Elemente auf der Querachse sitzen.

- Standardmäßig verhält sich der Wert `normal` wie `stretch` in Flexbox. Das streckt alle Flex-Elemente, um das Elternteil in der Richtung der Querachse zu füllen. Wenn das Elternteil keine feste Größe in der Querrichtung hat, werden alle Flex-Elemente so hoch (oder breit) wie das höchste (oder breiteste) Flex-Element. So hatten unsere ersten Spaltenbeispiele standardmäßig gleich hohe Spalten.
- Der `center`-Wert, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Dimensionen beibehalten, jedoch entlang der Querachse zentriert sind. Deshalb sind die Schaltflächen in unserem aktuellen Beispiel vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` haben, die alle Elemente am Anfang bzw. Ende der Querachse ausrichten. Die `baseline`-Werte richten die Flex-Elemente nach ihrer Baseline aus; im Wesentlichen wird der Boden der ersten Textzeile jedes Flex-Elements mit dem Boden der ersten Zeile des Elements mit der größten Entfernung zwischen Queranfang und dieser Baseline ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Elemente überschreiben, indem Sie die Eigenschaft {{cssxref("align-self")}} darauf anwenden. Versuchen Sie, das folgende zu Ihrem CSS hinzuzufügen:

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

Schauen Sie sich an, welchen Effekt das hat und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Elemente auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, was sich wie `start` verhält, was alle Elemente am Anfang der Hauptachse sitzen lässt.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende sitzen zu lassen.
- Die `left` und `right`-Werte verhalten sich je nach Schreibmodusrichtung wie `start` oder `end`.
- `center` ist ebenfalls ein Wert für `justify-content`. Dadurch werden die Flex-Elemente auf der Hauptachse in der Mitte platziert.
- Der oben verwendete Wert `space-around`, ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit etwas Platz an beiden Enden.
- Es gibt einen weiteren Wert, `space-between`, der `space-around` sehr ähnlich ist, außer dass er keinen Platz an den Enden belässt.

Die Eigenschaft {{cssxref("justify-items")}} wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu experimentieren, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Flex-Elemente anordnen

Flexbox hat auch eine Funktion zum Ändern der Layout-Reihenfolge von Flex-Elementen, ohne die Quellreihenfolge zu beeinflussen. Dies ist etwas, das mit traditionellen Layout-Methoden unmöglich ist.

Versuchen Sie, das folgende CSS zu Ihrem Button-Bar-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass die "Smile"-Schaltfläche an das Ende der Hauptachse verschoben wurde. Lassen Sie uns darüber sprechen, wie das im Detail funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}}-Wert von `0`.
- Flex-Elemente mit höher angegebenen Bestellwerten erscheinen später in der Anzeigereihenfolge als Elemente mit niedrigeren Bestellwerten.
- Flex-Elemente mit demselben Bestellwert erscheinen in ihrer Quellreihenfolge. Wenn Sie vier Elemente haben, deren Bestellwerte mit `2`, `1`, `1` und `0` angegeben sind, wäre ihre Anzeigereihenfolge 4., 2., 3., dann 1.
- Das 3. Element erscheint nach dem 2., weil es den gleichen Bestellwert hat und im Quellcode danach kommt.

Sie können negative Bestellwerte setzen, um Elemente früher erscheinen zu lassen als Elemente, deren Wert `0` ist. Zum Beispiel könnten Sie die "Blush"-Taste am Anfang der Hauptachse erscheinen lassen, indem Sie die folgende Regel anwenden:

```css
button:last-child {
  order: -1;
}
```

Obwohl Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorsatzreihefolge dieselbe wie die der Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzerfreundlichkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist völlig in Ordnung, ein Flex-Element auch zu einem Flex-Container zu machen, so dass dessen Kinder ebenfalls wie flexible Boxen ausgelegt sind.

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

Dieses komplexe Layout hat einige Flex-Elemente, die ebenfalls Flex-Container sind. Das HTML dafür ist relativ einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Lassen Sie uns den Code ansehen, den wir für das Layout verwendet haben.

Erstens setzen wir die Kinder des {{htmlelement("section")}} so, dass sie als flexible Boxen ausgelegt werden.

```css
section {
  display: flex;
}
```

Als nächstes setzen wir einige flex Werte für die {{htmlelement("article")}}s selbst. Beachten Sie besonders die zweite Regel hier: Wir setzen das dritte {{htmlelement("article")}} so, dass seine Kinder ebenfalls wie Flex-Elemente angeordnet werden, diesmal aber als Spalte.

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

Weiter wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann setzen wir dessen Kinder (die {{htmlelement("button")}}-Elemente) ebenfalls so, dass sie wie Flex-Elemente angeordnet werden. Hier legen wir sie in einer umschlagenden Reihe aus und richten sie in der Mitte des verfügbaren Raums aus, wie wir es mit dem individuellen Button-Beispiel, das wir zuvor gesehen haben, getan haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich geben wir den Schaltflächen einige Größenanpassungen. Diesmal, indem wir ihnen einen flex Wert von `1 auto` geben. Dies hat eine sehr interessante Wirkung, die Sie sehen werden, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz ein, wie möglich. So viele passen in eine Zeile, wie es angenehm ist; darüber hinaus fallen sie in eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Zusammenfassung

Damit endet unsere Einführung in die Grundlagen von Flexbox. Wir hoffen, Sie hatten Spaß und werden gut damit spielen, während Sie mit Ihrem Lernen fortschreiten. Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Flex-Elemente anordnen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Verhältnisse der Flex-Elemente entlang der Hauptachse kontrollieren](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS Flexibler Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Tricks-Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox anschaulich erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Bildungsspiel, um die Grundlagen von Flexbox besser zu verstehen und zu lernen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}
