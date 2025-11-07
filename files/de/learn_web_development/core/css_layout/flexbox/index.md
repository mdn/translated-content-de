---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) ist eine ein-dimensionale Layout-Methode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente _flex_ (erweitern), um zusätzlichen Platz zu füllen oder schrumpfen, um in kleinere Bereiche zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftartformatierung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Ziel von Flexbox — flexibel eine Reihe von Block- oder Inline-Elementen in einer Dimension anzuordnen.</li>
          <li>Flex-Terminologie — flex container, flex item, main axis und cross axis.</li>
          <li>Verstehen, was <code>display: flex</code> Ihnen standardmäßig bietet.</li>
          <li>Wie man Inhalte in neue Zeilen und Spalten umbricht.</li>
          <li>Flexibles Größenskalieren und Anordnen von Flex-Elementen.</li>
          <li>Inhalte rechtfertigen und ausrichten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS Flexible Box Layout ermöglicht Ihnen:

- Ein Block von Inhalten vertikal im übergeordneten Element zu zentrieren.
- Alle Kinder eines Containers eine gleiche Menge an verfügbarer Breite/Höhe einnehmen zu lassen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem Mehrspalten-Layout die gleiche Höhe annehmen zu lassen, selbst wenn sie eine unterschiedliche Menge an Inhalten enthalten.

Flexbox-Funktionen könnten die perfekte Lösung für Ihre ein-dimensionalen Layout-Anforderungen sein. Lassen Sie uns eintauchen und herausfinden!

> [!NOTE]
> Scrimbas einführender [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Hinweis bietet einen interaktiven Leitfaden darüber, wie verbreitet Flexbox im Web ist und warum es so wichtig ist, es zu lernen. Er führt Sie durch ein typisches Anwendungsbeispiel, das die Leistungsfähigkeit von Flexbox demonstriert.

## Ein einfaches Beispiel vorstellen

In diesem Artikel arbeiten Sie durch eine Reihe von Übungen, die Ihnen helfen zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTML und CSS erstellen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und schauen Sie sich den Code in Ihrem Code-Editor an. Alternativ klicken Sie auf die Schaltfläche "Play", um es im Playground zu öffnen.

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

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer oberen Überschrift darin und ein {{htmlelement("section")}}-Element mit drei {{htmlelement("article")}}s haben. Wir werden diese verwenden, um ein ziemlich standardmäßiges drei-Spalten-Layout zu erstellen.

## Festlegen, welche Elemente als flexible Boxen angeordnet werden sollen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das übergeordnete Element der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, daher setzen wir dies auf das {{htmlelement("section")}}:

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

Dies bewirkt, dass das `<section>`-Element zu einem **flex container** wird und seine Kinder zu **flex items** werden. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein Mehrspalten-Layout mit gleich großen Spalten, und die Spalten haben alle die gleiche Höhe. Dies liegt daran, dass die standardmäßigen Werte, die Flex-Elementen (den Kindern des Flex-Containers) zugewiesen werden, so eingerichtet sind, dass sie häufige Probleme wie dieses lösen.

Lassen Sie uns rekapitulieren, was hier passiert. Wenn Sie einem Element einen {{cssxref("display")}}-Wert von `flex` hinzufügen, wird es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-level content")}} in Bezug auf seine Interaktion mit dem Rest der Seite angezeigt. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in (und als) Flex-Elemente umgewandelt und angeordnet.

Sie können den Container mit einem [outside `display` value](/de/docs/Web/CSS/Reference/Properties/display#outside) (z.B. `display: inline flex`) inline machen, was beeinflusst, wie der Container selbst auf der Seite angeordnet ist.
Der veraltete `inline-flex`-Display-Wert zeigt den Container ebenfalls inline an. Wir konzentrieren uns in diesem Tutorial darauf, wie sich die Inhalte des Containers verhalten, aber wenn Sie den Unterschied zwischen inline- und Block-Layout sehen möchten, können Sie sich die [Wertvergleich](/de/docs/Web/CSS/Reference/Properties/display#display_value_comparison) auf der `display`-Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären ausführlicher, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente angeordnet werden, werden sie entlang zweier Achsen angeordnet:

![Drei Flex-Elemente in einer von links-zu-rechts-Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in die die Flex-Elemente angeordnet sind — ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Querachse ist vertikal, senkrecht zur Hauptachse. Die cross-start und cross-end befinden sich jeweils oben und unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als main size bezeichnet, und die Länge des Flex-Elements entlang der Querachse, in diesem Fall die Höhe, wird als cross size bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Elemente angeordnet sind (zum Beispiel als Zeile über die Seite oder als Spalte abwärts der Seite). Der Start und das Ende dieser Achse werden als **main start** und **main end** bezeichnet. Die Länge von der main-start Kante zur main-end Kante ist die **main size**.
- Die **Querachse** ist die Achse, die sich senkrecht zur Richtung verläuft, in der die Flex-Elemente angeordnet sind. Der Start und das Ende dieser Achse werden als **cross start** und **cross end** bezeichnet. Die Länge von der cross-start Kante zur cross-end Kante ist die **cross size**.
- Das übergeordnete Element mit `display: flex` (das {{htmlelement("section")}} in unserem Beispiel) wird als **flex container** bezeichnet.
- Die Elemente, die als flexible Boxen im Flex-Container angeordnet sind, werden als **flex items** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Kopf, während Sie die folgenden Abschnitte durchgehen. Sie können immer darauf zurückkommen, wenn Sie von einem der verwendeten Begriffe verwirrt werden.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welche Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist dies auf `row` gesetzt, was bewirkt, dass sie in einer Reihe in der Richtung, in der die Standardsprache Ihres Browsers funktioniert (von links nach rechts im Fall eines englischen Browsers), angeordnet werden.

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente zurück in ein Spaltenlayout versetzt, ähnlich wie sie waren, bevor wir irgendein CSS hinzugefügt haben. Bevor Sie weitermachen, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umschlagen

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder schließlich ihren Container überlaufen und das Layout zerbrechen. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}, die nicht passen, da sie eine `min-width` von `400px` haben, gibt es einen horizontalen Scroll.

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

Sie werden sehen, dass das Layout mit diesem enthalten viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Zeilen. Jede Zeile hat so viele Flexbox-Kinder darin, wie es sinnvoll ist. Überschüssiges wird in die nächste Zeile verschoben.

Aber es gibt noch mehr, was wir hier tun können. Probieren Sie zuerst, den Wert Ihrer {{cssxref("flex-direction")}}-Eigenschaft auf `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie immer noch Ihr Mehrzeilen-Layout haben, aber es beginnt aus der gegenüberliegenden Ecke des Browserfensters und fließt rückwärts.

## flex-flow Kurzform

An dieser Stelle sei darauf hingewiesen, dass es eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. Zum Beispiel können Sie ersetzen

```css
flex-direction: row;
flex-wrap: wrap;
```

mit

```css
flex-flow: row wrap;
```

## Flexible Größenanpassung von Flex-Elementen

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und untersuchen, wie wir steuern können, welchen Anteil des Raums Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen.

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

Dies ist ein proportionaler Wert ohne Einheit, der bestimmt, wie viel des verfügbaren Raums entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element den gleichen Wert (einen Wert von `1`), was bedeutet, dass sie alle einen gleichen Anteil des freigegebenen Raums einnehmen, nachdem Eigenschaften wie padding und margin gesetzt wurden. Dieser Wert wird proportional unter den Flex-Elementen geteilt: Einem Flex-Element einen Wert von `400000` zu geben, würde genau den gleichen Effekt haben.

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

Jetzt werden Sie beim Aktualisieren sehen, dass das dritte {{htmlelement("article")}}-Element doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es gibt jetzt insgesamt vier proportionale Einheiten (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, sodass sie jeweils 1/4 des verfügbaren Raums einnehmen. Das dritte Element hat zwei Einheiten, sodass es 2/4 des verfügbaren Raums einnimmt (oder die Hälfte).

Sie können auch einen minimalen Größenwert innerhalb des Flex-Wertes angeben. Versuchen Sie, Ihre bestehenden Artikel-Regeln so zu aktualisieren:

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

Dies besagt im Grunde: "Jedem Flex-Element werden zuerst `100px` des verfügbaren Raums gegeben. Danach wird der Rest des verfügbaren Raums nach den proportionierten Einheiten aufgeteilt." Sie werden einen Unterschied in der Aufteilung des Raums sehen.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Elemente haben eine Mindestbreite von 100 Pixeln, die mit 'flex' gesetzt wurde. Der Wert von flex für die ersten beiden Flex-Elemente ist 1 und für das dritte Element ist 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 proportionale Einheiten. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugewiesen und 2 Einheiten dem dritten Flex-Element, wodurch das dritte Flex-Element breiter wird als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in seiner Flexibilität/Ansprechbarkeit. Wenn Sie das Browserfenster ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzform versus Langform

{{cssxref("flex")}} ist eine Verkürzungs-Eigenschaft, die bis zu drei verschiedene Werte spezifizieren kann:

- Der oben besprochene proportionale Wert ohne Einheit. Dies kann getrennt durch die Langform-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter proportionale Wert ohne Einheit, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, wie viel ein Element schrumpfen wird, um Überlauf zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion und wir werden sie in diesem Artikel nicht weiter behandeln.
- Der oben besprochene minimale Größenwert. Dieser kann separat über den Langform-Wert {{cssxref("flex-basis")}} angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, es ist wirklich notwendig (z.B. um etwas vorher Setztes zu überschreiben). Sie führen dazu, dass eine Menge zusätzlicher Code geschrieben wird und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können Flexbox-Funktionen auch verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen:

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

Wir werden dies in eine ordentliche, flexible Schaltfläche/Toolbar verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gedrängt sind.

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

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön zentriert horizontal und vertikal sind. Wir haben dies durch zwei neue Eigenschaften erreicht. Die Flex-Elemente sind entlang der Querachse in der Mitte positioniert, indem die Eigenschaft `align-items` auf `center` gesetzt wird. Die Flex-Elemente werden gleichmäßig entlang der Hauptachse durch das Setzen der `justify-content`-Eigenschaft auf `space-around` verteilt.

Die {{cssxref("align-items")}} Eigenschaft steuert, wo die Flex-Elemente auf der Querachse sitzen.

- Der Standardwert `normal`, der in Flexbox als `stretch` funktioniert. Dies dehnt alle Flex-Elemente aus, um den Elternteil in der Richtung der Querachse auszufüllen. Wenn das Elternteil in der Richtung der Querachse keine feste Größe hat, werden alle Flex-Elemente so hoch (oder breit) wie das höchste (oder breiteste) Flex-Element. So hatte unser erstes Beispiel standardmäßig Spalten mit gleicher Höhe.
- Der Wert `center`, den wir in unserem obigen Code verwendet haben, sorgt dafür, dass die Elemente ihre intrinsischen Maße behalten, aber entlang der Querachse zentriert werden. Deshalb sind die Schaltflächen unseres aktuellen Beispiels vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` haben, die alle Elemente am Anfang und Ende der Querachse entsprechend ausrichten. Die `baseline`-Werte richten die Flex-Elemente an ihrer Basislinie aus; im Grunde wird die unterste Linie des ersten Textes jeder Flex-Elemente mit der untersten Linie des Elements mit dem größten Abstand zwischen dem quer Start und dieser Basislinie ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für individuelle Flex-Elemente durch Anwenden der {{cssxref("align-self")}} Eigenschaft auf sie überschreiben. Versuchen Sie zum Beispiel das folgende zu Ihrem CSS hinzuzufügen:

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

- Der Standardwert ist `normal`, der sich wie `start` verhält, wodurch alle Elemente am Anfang der Hauptachse sitzen.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu platzieren.
- Die Werte `left` und `right` verhalten sich je nach Schreibrichtungsmodus Richtung als `start` oder `end`.
- `center` ist ebenfalls ein Wert für `justify-content`. Es wird die Flex-Elemente in der Mitte der Hauptachse platzieren.
- Der von uns oben verwendete Wert `space-around` ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit etwas Platz an beiden Enden.
- Es gibt einen weiteren Wert, `space-between`, der dem `space-around` sehr ähnlich ist, außer dass er keinen Platz an den Enden lässt.

Die [`justify-items`](/de/docs/Web/CSS/Reference/Properties/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Sortierung von Flex-Elementen

Flexbox hat auch eine Funktion zum Ändern der Layout-Reihenfolge von Flex-Elementen, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layout-Methoden nicht möglich ist.

Versuchen Sie, die folgende CSS zu Ihrem Button-Bar-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass die "Smile"-Schaltfläche zum Ende der Hauptachse verschoben wurde. Lassen Sie uns besprechen, wie dies im Detail funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}} Wert von `0`.
- Flex-Elemente mit höheren angegebenen Reihenfolgenwerten erscheinen später in der Display-Reihenfolge als Elemente mit niedrigeren Reihenfolgenwerten.
- Flex-Elemente mit dem gleichen Reihenfolgenwert erscheinen in ihrer Quellreihenfolge. Wenn Sie also vier Elemente haben, deren Reihenfolgenwerte `2`, `1`, `1` und `0` sind, wäre ihre Anzeigereihenfolge 4., 2., 3., dann 1.
- Das 3. Element erscheint nach dem 2., weil es den gleichen Reihenfolgenwert hat und im Quellcode danach kommt.

Sie können negative Reihenfolgenwerte setzen, um Elemente früher erscheinen zu lassen als Elemente mit einem Wert von `0`. Zum Beispiel könnten Sie die "Blush"-Schaltfläche am Anfang der Hauptachse erscheinen lassen, indem Sie die folgende Regel verwenden:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorreihenfolge dieselbe wie die Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann sich negativ auf die Benutzerfreundlichkeit für Ihre Tastaturnutzer auswirken!

## Verschachtelte Flexboxen

Es ist möglich, ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist völlig in Ordnung, ein Flex-Element auch zu einem Flex-Container zu machen, sodass seine Kinder ebenfalls wie flexible Boxen angeordnet sind.

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

Zuerst ordnen wir die Kinder des {{htmlelement("section")}}-Elements als flexible Boxen an.

```css
section {
  display: flex;
}
```

Als nächstes setzen wir einige Flex-Werte auf die {{htmlelement("article")}}-Elemente selbst. Beachten Sie besonders die zweite Regel hier: Wir setzen das dritte {{htmlelement("article")}} so, dass seine Kinder ebenfalls wie Flex-Elemente angeordnet werden, aber dieses Mal ordnen wir sie wie eine Spalte an.

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

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann setzen wir seine Kinder (die {{htmlelement("button")}}-Elemente), damit sie ebenfalls als Flex-Elemente angeordnet werden. Hier ordnen wir sie in einer umschlagenden Zeile an und richten sie in der Mitte des verfügbaren Raums aus, wie wir es mit dem individuellen Schaltflächenbeispiel gesehen haben, das wir zuvor gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir einige Größen auf die Schaltflächen. Dieses Mal geben wir ihm einen Flex-Wert von `1 auto`. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie versuchen, die Breite Ihres Browserfensters zu ändern. Die Schaltflächen werden so viel Platz einnehmen, wie sie können. So viele wie bequem auf einer Linie passen, darüber hinaus fallen sie auf eine neue Linie.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Zusammenfassung

Das schließt unsere Tour über die Grundlagen von Flexbox ab. Wir hoffen, dass Sie Spaß hatten und Lust darauf haben, damit weiterzuspielen, während Sie Ihr Lernen fortsetzen. Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und beibehalten haben.

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Sortieren von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- [Kontrollieren von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf eine visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lernspiel, um die Grundlagen von Flexbox besser zu verstehen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}
