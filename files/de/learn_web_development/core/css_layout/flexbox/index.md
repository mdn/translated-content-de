---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) ist eine eindimensionale Layout-Methode zur Anordnung von Elementen in Reihen oder Spalten. Elemente _flexen_ (vergrößern sich), um zusätzlichen Raum zu füllen oder verkleinern sich, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes zu Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden CSS-Layout-Konzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — flexibel eine Reihe von Block- oder Inline-Elementen in einer Dimension anordnen.</li>
          <li>Flex-Terminologie — flex container, flex item, main axis und cross axis.</li>
          <li>Verstehen, was <code>display: flex</code> standardmäßig bietet.</li>
          <li>Wie man Inhalte auf neue Zeilen und Spalten umbricht.</li>
          <li>Flexible Größenanpassung und Anordnung von Flex-Elementen.</li>
          <li>Inhalte rechtfertigen und ausrichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS Flexible Box Layout ermöglicht Ihnen:

- Einen Inhaltsblock innerhalb des übergeordneten Elements vertikal zu zentrieren.
- Alle Kinder eines Containers gleichmäßig den verfügbaren Breite/Höhe einnehmen zu lassen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem mehrspaltigen Layout auf die gleiche Höhe zu bringen, auch wenn sie eine unterschiedliche Menge an Inhalt enthalten.

Flexbox-Features können die perfekte Lösung für Ihre eindimensionalen Layout-Bedürfnisse sein. Lassen Sie uns eintauchen und es herausfinden!

> [!NOTE]
> Scrimbas einführender [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim bietet einen interaktiven Leitfaden, der abdeckt, wie häufig Flexbox im Web ist und warum es so wichtig ist, es zu lernen, und führt Sie durch ein typisches Anwendungsfallbeispiel, das die Leistungsfähigkeit von Flexbox demonstriert.

## Einführung eines einfachen Beispiels

In diesem Artikel werden Sie eine Reihe von Übungen durchgehen, die Ihnen helfen werden, zu verstehen, wie Flexbox funktioniert. Um zu starten, sollten Sie eine lokale Kopie der HTML- und CSS-Dateien machen. Laden Sie diese in einem modernen Browser (wie Firefox oder Chrome) und betrachten Sie den Code in Ihrem Code-Editor. Alternativ können Sie den "Play"-Button drücken, um ihn im Playground zu öffnen.

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

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Überschrift der obersten Ebene darin haben und ein {{htmlelement("section")}}-Element mit drei {{htmlelement("article")}}s. Wir werden diese verwenden, um ein ziemlich standardmäßiges dreispaltiges Layout zu erstellen.

## Festlegen, welche Elemente als flexible Boxen angeordnet werden sollen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das übergeordnete Element der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf das {{htmlelement("section")}}:

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

Dies bewirkt, dass das `<section>`-Element ein **flex container** wird und seine Kinder zu **flex items** werden. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein mehrspaltiges Layout mit gleich großen Spalten und die Spalten sind alle gleich hoch. Das liegt daran, dass die Standardwerte, die den Flex-Elementen (den Kindern des Flex-Containers) gegeben werden, so eingerichtet sind, dass sie gängige Probleme wie dieses lösen.

Lassen Sie uns rekapitulieren, was hier passiert. Wenn wir einem Element einen {{cssxref("display")}}-Wert von `flex` hinzufügen, wird es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Level-Inhalt")}} in Bezug darauf angezeigt, wie es mit dem Rest der Seite interagiert. Wenn das Element in einen Flex-Container konvertiert wird, werden seine Kinder in (und angeordnet als) Flex-Elemente umgewandelt.

Sie können den Container inline machen, indem Sie einen [outside `display`-Wert](/de/docs/Web/CSS/Reference/Properties/display#outside) verwenden (z. B. `display: inline flex`), was beeinflusst, wie der Container selbst auf der Seite angeordnet wird. Der veraltete `inline-flex` Display-Wert zeigt den Container ebenfalls inline an. Wir werden uns in diesem Tutorial darauf konzentrieren, wie sich die Inhalte des Containers verhalten, aber wenn Sie den Effekt von inline versus Block-Layout sehen möchten, können Sie einen Blick auf den [Wertvergleich](/de/docs/Web/CSS/Reference/Properties/display#display_value_comparison) auf der `display`-Eigenschaftsseite werfen.

Die nächsten Abschnitte erklären detaillierter, was Flex-Elemente sind und was passiert, wenn Sie ein Element in einen Flex-Container umwandeln.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente ausgelegt sind, werden sie entlang zweier Achsen ausgelegt:

![Drei Flex-Elemente in einer von links nach rechts gerichteten Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Elemente angeordnet sind — ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Kreuzachse ist vertikal; senkrecht zur Hauptachse. Die cross-start und cross-end befinden sich oben bzw. unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Elements entlang der Kreuzachse, in diesem Fall die Höhe, wird als Kreuzgröße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in die Richtung verläuft, in der die Flex-Elemente ausgelegt sind (zum Beispiel als Reihe über die Seite oder als Spalte nach unten). Der Anfang und das Ende dieser Achse werden als **main start** und **main end** bezeichnet. Die Länge von der main-start Kante zur main-end Kante ist die **Hauptgröße**.
- Die **Kreuzachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Elemente ausgelegt sind. Der Anfang und das Ende dieser Achse werden als **cross start** und **cross end** bezeichnet. Die Länge von der cross-start Kante zur cross-end Kante ist die **Kreuzgröße**.
- Das übergeordnete Element, bei dem `display: flex` gesetzt ist (das {{htmlelement("section")}} in unserem Beispiel), wird als **flex container** bezeichnet.
- Die Elemente, die als flexible Boxen innerhalb des Flex-Containers angeordnet sind, werden als **flex items** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Denken Sie an diese Terminologie, während Sie die nachfolgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückkommen, wenn Sie irgendwelche Begriffe verwirren.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welcher Richtung die Hauptachse verläuft (in welcher Richtung die Flexbox-Kinder ausgelegt sind). Standardmäßig ist dies auf `row` eingestellt, was bewirkt, dass sie in einer Reihe in der Richtung ausgelegt werden, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts, im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout bringt, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung auslegen, indem Sie die Werte `row-reverse` und `column-reverse` verwenden. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass irgendwann Ihre Flexbox-Kinder ihren Container überlaufen, was das Layout bricht. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}s, die nicht passen, da sie eine `min-width` von `400px` haben, also gibt es ein horizontales Scrollen.

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

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Elemente in eine einzelne Reihe zu setzen, wenn `flex-direction` auf `row` eingestellt ist, oder in eine einzelne Spalte, wenn `flex-direction` auf `column` eingestellt ist.

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

Sie werden sehen, dass das Layout mit dieser enthalten viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Reihen. Jede Reihe hat so viele Flexbox-Kinder, wie es sinnvoll ist, hineinpasst. Jeglicher Überlauf wird in die nächste Zeile verschoben.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zuerst, Ihren {{cssxref("flex-direction")}}-Eigenschaftswert in `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie immer noch Ihr mehrreihiges Layout haben, aber es beginnt in der entgegensetzten Ecke des Browserfensters und verläuft rückwärts.

## flex-flow Kurzform

An dieser Stelle ist es wichtig zu beachten, dass eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} existiert: {{cssxref("flex-flow")}}. So können Sie zum Beispiel

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

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und sehen, wie wir steuern können, welchen Anteil an Raum Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen.

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

Dies ist ein einheitsloser proportionswert, der bestimmt, wie viel verfügbarer Raum entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnehmen wird. In diesem Fall geben wir jedem {{htmlelement("article")}} dasselbe Wert (ein Wert von `1`), was bedeutet, dass sie alle den gleichen Anteil des freien Raums einnehmen, nachdem Eigenschaften wie Polsterung und Rand gesetzt wurden. Dieser Wert wird proportional zwischen den Flex-Elementen aufgeteilt: jedem Flex-Element einen Wert von `400000` zu geben, hätte genau die gleiche Wirkung.

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

Jetzt, wenn Sie aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel von der verfügbaren Breite einnimmt wie die anderen beiden. Es gibt jetzt insgesamt vier Proportionseinheiten (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, sodass sie jeweils 1/4 des verfügbaren Raums einnehmen. Das dritte hat zwei Einheiten, also nimmt es 2/4 des verfügbaren Raums ein (oder die Hälfte).

Sie können auch einen Mindestgrößenwert innerhalb des Flex-Werts angeben. Versuchen Sie, Ihre bestehenden Artikel-Regeln so zu aktualisieren:

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

Dies besagt im Grunde: "Jedes Flex-Element wird zuerst `100px` des verfügbaren Raums gegeben. Danach wird der Rest des verfügbaren Raums gemäß den Proportionseinheiten aufgeteilt." Sie werden einen Unterschied sehen, wie der Raum aufgeteilt wird.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Elemente haben eine Mindestbreite von 100 Pixeln—festgelegt mit 'flex'. Der Wert von flex für die ersten beiden Flex-Elemente ist 1 und für das dritte Element ist 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 Proportionseinheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugewiesen und 2 Einheiten werden dem dritten Flex-Element zugewiesen, wodurch das dritte Flex-Element breiter als die anderen beiden wird, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in seiner Flexibilität/Anpassungsfähigkeit. Wenn Sie das Browserfenster neu skalieren oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzform versus Langform

{{cssxref("flex")}} ist eine Kurzform-Eigenschaft, die bis zu drei verschiedene Werte angeben kann:

- Der einheitslose Proportionwert, den wir oben besprochen haben. Dieser kann separat mit der Langform-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter einheitsloser Proportionwert, {{cssxref("flex-shrink")}}, der dann ins Spiel kommt, wenn die Flex-Elemente ihren Container überfüllen. Dieser Wert gibt an, wie stark ein Element schrumpfen wird, um ein Überlaufen zu verhindern. Dies ist ein recht fortgeschrittenes Flexbox-Feature und wird in diesem Artikel nicht weiter behandelt.
- Der Mindestgrößenwert, den wir oben besprochen haben. Dieser kann separat mit dem Langform-Wert {{cssxref("flex-basis")}} angegeben werden.

Wir empfehlen, die Langform-Flex-Eigenschaften nur zu verwenden, wenn wirklich erforderlich (zum Beispiel, um etwas vorher Festgelegtes zu überschreiben). Sie führen dazu, dass viel zusätzlicher Code geschrieben wird und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Features verwenden, um Flex-Elemente entlang der Haupt- oder Kreuzachse auszurichten. Lassen Sie uns dies erforschen, indem wir uns ein neues Beispiel ansehen:

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

Wir werden dies in eine saubere, flexible Schaltfläche/Toolsleiste verwandeln. Im Moment werden Sie eine horizontale Menüleiste mit einigen Schaltflächen in die obere linke Ecke gedrängt sehen.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

Nehmen Sie zuerst eine lokale Kopie dieses Beispiels.

Fügen Sie nun folgendes am Ende des CSS des Beispiels hinzu:

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

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Dies haben wir über zwei neue Eigenschaften erreicht. Die Flex-Elemente sind mit { `align-items` } auf der Kreuzachse zentriert. Die Flex-Elemente sind entlang der Hauptachse mit { `justify-content` } auf { `space-around` } gleichmäßig verteilt.

Die {{cssxref("align-items")}}-Eigenschaft kontrolliert, wo die Flex-Elemente auf der Kreuzachse sitzen.

- Standardmäßig ist der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Dies dehnt alle Flex-Elemente aus, um den Elternteil in der Richtung der Kreuzachse auszufüllen. Wenn der Elternteil keine feste Größe in der Richtung der Kreuzachse hat, wird alle Flex-Elemente so hoch (oder breit) wie das höchste (oder breiteste) Flex-Element. So hatte unser erstes Beispiel standardmäßig gleich hohe Spalten.
- Der `center`-Wert, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Dimensionen beibehalten, jedoch entlang der Kreuzachse zentriert sind. Dies ist der Grund, warum die Schaltflächen des aktuellen Beispiels vertikal zentriert sind.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` verwenden, die alle Elemente an den Start- und Endpunkten der Kreuzachse ausrichten. Die `baseline`-Werte richten die Flex-Elemente an ihrer Grundlinie aus; im Grunde wird die Unterkante der ersten Textzeile jedes Flex-Elements mit der Unterkante der ersten Zeile des Elements mit dem größten Abstand zwischen Kreuzbeginn und dieser Grundlinie ausgerichtet. Siehe {{cssxref("align-items")}} für alle Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Elemente überschreiben, indem Sie die Eigenschaft {{cssxref("align-self")}} auf sie anwenden. Versuch, das Folgende zu Ihrem CSS hinzuzufügen:

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

Schauen Sie sich an, welchen Effekt dies hat und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Elemente auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich wie `start` verhält, was bewirkt, dass alle Elemente am Anfang der Hauptachse sitzen.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende sitzen zu lassen.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end`, abhängig von der Schreibrichtungsrichtung.
- `center` ist auch ein Wert für `justify-content`. Er lässt die Flex-Elemente in der Mitte der Hauptachse sitzen.
- Der Wert, den wir oben verwendet haben, `space-around`, ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit etwas Platz an beiden Enden.
- Es gibt einen weiteren Wert, `space-between`, der dem Wert `space-around` sehr ähnlich ist, außer dass er keinen Platz an den Enden lässt.

Die Eigenschaft {{cssxref("justify-items")}} wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Anordnung von Flex-Elementen

Flexbox hat auch eine Funktion zum Ändern der Anordnungsreihenfolge von Flex-Elementen, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layoutmethoden unmöglich ist.

Versuchen Sie, das folgende CSS zu Ihrem Schaltflächenleisten-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass die "Smile"-Schaltfläche an das Ende der Hauptachse verschoben wurde. Lassen Sie uns besprechen, wie dies im Detail funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}}-Wert von `0`.
- Flex-Elemente mit höher angegebenen Ordnungswerten erscheinen später in der Anzeigenreihenfolge als Elemente mit niedrigeren Ordnungswerten.
- Flex-Elemente mit demselben Ordnungswert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Elemente mit den Ordnungswerten `2`, `1`, `1` und `0` haben, wäre ihre Anzeigereihenfolge 4., 2., 3. und dann 1.
- Das 3. Element erscheint nach dem 2., da es den gleichen Ordnungswert hat und nach ihm in der Quellreihenfolge kommt.

Sie können negative Ordnungswerte setzen, damit Elemente früher erscheinen als Elemente, deren Wert `0` ist. Zum Beispiel könnten Sie die "Blush"-Schaltfläche mit der folgenden Regel an den Anfang der Hauptachse verschieben:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Ordnung mit `order` ändern können, bleibt die Tab-Reihenfolge gemäß der Codelogik gleich. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzerfreundlichkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist völlig in Ordnung, ein Flex-Element auch als Flex-Container einzustellen, sodass seine Kinder ebenfalls wie flexible Boxen angeordnet werden.

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

Dieses komplexe Layout hat einige Flex-Elemente, die auch Flex-Container sind. Das HTML hierfür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zunächst legen wir die Kinder des {{htmlelement("section")}} als flexible Boxen an.

```css
section {
  display: flex;
}
```

Als nächstes legen wir einige Flex-Werte auf die {{htmlelement("article")}}s selbst. Beachten Sie besonders die zweite Regel hier: Wir legen fest, dass das dritte {{htmlelement("article")}} auch seine Kinder als Flex-Elemente auslegt, diesmal jedoch in einer Spalte.

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

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;` um es effektiv auf eine Mindesthöhe von `100px` einzustellen, dann legen wir fest, dass seine Kinder (die {{htmlelement("button")}}-Elemente) auch wie Flex-Elemente ausgelegt werden. Hier legen wir sie in einer sich umschließenden Reihe an und richten sie in der Mitte des verfügbaren Raums aus, wie wir es mit dem einzelnen Schaltflächenbeispiel zuvor gemacht haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Zum Schluss legen wir einige Größen auf die Schaltflächen. Diesmal geben wir ihnen einen Flex-Wert von `1 auto`. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie versuchen, die Breite Ihres Browserfensters zu ändern. Die Schaltflächen nehmen so viel Platz ein, wie sie können. So viele wie bequem passen, werden in einer Zeile sein; darüber hinaus werden sie in eine neue Zeile fallen.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Zusammenfassung

Damit endet unsere Einführung in die Grundlagen von Flexbox. Wir hoffen, dass es Ihnen Spaß gemacht hat und Sie sich intensiv damit beschäftigen, während Sie weiter lernen. Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf eine visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein lehrreiches Spiel, um die Grundlagen von Flexbox besser zu verstehen und zu lernen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}
