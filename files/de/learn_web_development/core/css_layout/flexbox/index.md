---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layout-Methode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente _flexen_ (dehnen sich aus), um zusätzlichen Platz zu füllen oder schrumpfen, um in kleinere Räume zu passen. In diesem Artikel werden alle Grundlagen erklärt.

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
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden CSS-Layoutkonzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — eine flexible Anordnung einer Menge von Block- oder Inline-Elementen in einer Dimension.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Element, Hauptachse und Querachse.</li>
          <li>Verstehen, was <code>display: flex</code> standardmäßig bietet.</li>
          <li>Wie man Inhalte in neue Zeilen und Spalten umbricht.</li>
          <li>Flexible Größenzuordnung und Sortierung von Flex-Elementen.</li>
          <li>Rechtfertigung und Ausrichtung von Inhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

Der flexible Box-Layout von CSS ermöglicht Ihnen:

- Ein Block von Inhalten vertikal innerhalb seines Elternteils zu zentrieren.
- Alle Kinder eines Containers so viel verfügbaren Breiten-/Höhenraum einnehmen zu lassen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem Layout mit mehreren Spalten gleich hoch zu machen, auch wenn sie unterschiedliche Inhalte haben.

Flexbox-Funktionen könnten die perfekte Lösung für Ihre eindimensionalen Layoutanforderungen sein. Lassen Sie uns tief eintauchen und es herausfinden!

> [!NOTE]
> Scrimbas einleitendes [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Beispiel bietet einen interaktiven Leitfaden, der erklärt, wie verbreitet Flexbox im Web ist und warum es so wichtig ist, es zu lernen. Es führt Sie durch einen typischen Anwendungsfall, der die Leistungsfähigkeit von Flexbox demonstriert.

## Einführung eines einfachen Beispiels

In diesem Artikel werden Sie eine Reihe von Übungen durchgehen, um Ihnen zu helfen, zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTML und CSS erstellen. Laden Sie es in einen modernen Browser (wie Firefox oder Chrome) und sehen Sie sich den Code in Ihrem Code-Editor an. Alternativ klicken Sie auf die Schaltfläche "Play", um es im Playground zu öffnen.

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

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das übergeordnete Element der Elemente, die Sie anpassen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf das {{htmlelement("section")}}:

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

Das führt dazu, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Elementen**. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzige Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein Layout mit mehreren Spalten und gleich großen Spalten, und die Spalten haben alle dieselbe Höhe. Das liegt daran, dass die Standardwerte, die Flex-Elementen (den Kindern des Flex-Containers) zugewiesen werden, so eingerichtet sind, um häufige Probleme wie dieses zu lösen.

Fassen wir zusammen, was hier passiert. Das Hinzufügen eines {{cssxref("display")}}-Wertes von `flex` zu einem Element macht es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Inhalt")}} dargestellt, was betrifft, wie er mit dem Rest der Seite interagiert. Wenn das Element zu einem Flex-Container gemacht wird, werden seine Kinder zu (und werden als) Flex-Elemente angeordnet.

Sie können den Container inline machen, indem Sie einen [outside `display` Wert](/de/docs/Web/CSS/display#outside) verwenden (z.B. `display: inline flex`), was beeinflusst, wie der Container selbst auf der Seite angeordnet wird.
Der veraltete `inline-flex` Display-Wert stellt den Container ebenfalls inline dar.
Wir werden uns in diesem Tutorial darauf konzentrieren, wie sich die Inhalte des Containers verhalten. Wenn Sie jedoch den Effekt einer Inline- versus Block-Anordnung sehen möchten, können Sie sich den [Wertvergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der Seite der `display` Eigenschaft ansehen.

Die nächsten Abschnitte erklären im Detail, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente angeordnet werden, werden sie entlang zweier Achsen angeordnet:

![Drei Flex-Elemente in einer von links nach rechts gerichteten Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Elemente angeordnet sind — ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Das kreuz-start und kreuz-end befinden sich oben und unten bzw. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Elements entlang der Querachse, in diesem Fall die Höhe, wird als Kreuzgröße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Elemente angeordnet sind (z.B. als Zeile über die Seite, oder als Spalte die Seite hinunter). Die Start- und Endpunkte dieser Achse werden als **main start** und **main end** bezeichnet. Die Länge von der Main-Startkante bis zur Main-Endkante ist die **Main Size**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Elemente angeordnet sind. Die Start- und Endpunkte dieser Achse werden als **cross start** und **cross end** bezeichnet. Die Länge von der Cross-Startkante bis zur Cross-Endkante ist die **Cross Size**.
- Das übergeordnete Element, bei dem `display: flex` gesetzt ist (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die Elemente, die als flexible Boxen im Flex-Container angeordnet sind, werden **Flex-Elemente** genannt (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Merken Sie sich diese Begriffe, während Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie verwirrt sind über einen der verwendeten Begriffe.

## Spalten oder Zeilen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welcher Richtung die Flexbox-Kinder angeordnet werden). Standardmäßig ist dies auf `row` gesetzt, was bewirkt, dass sie in der Richtung angeordnet werden, in der die Standardsprache Ihres Browsers verläuft (von links nach rechts, im Falle eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in eine Spaltenanordnung bringt, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung anordnen, indem Sie die Werte `row-reverse` und `column-reverse` verwenden. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder irgendwann ihren Container überlaufen und das Layout zerstören. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}s, die nicht passen, weil sie eine `min-width` von `400px` haben, sodass es einen horizontalen Bildlauf gibt.

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

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container brechen. Standardmäßig versucht der Browser, alle Flex-Elemente in einer einzigen Zeile anzuordnen, wenn `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn `flex-direction` auf `column` gesetzt ist.

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

Eine Möglichkeit, dies zu beheben, ist, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

Sie werden sehen, dass das Layout mit diesem hinzugefügten viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Zeilen. Jede Zeile hat so viele Flexbox-Kinder, wie vernünftig ist. Jeglicher Überlauf wird auf die nächste Zeile verschoben.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zuerst, den Wert Ihrer {{cssxref("flex-direction")}}-Eigenschaft auf `row-reverse` zu ändern. Jetzt sehen Sie, dass Sie immer noch Ihr Layout mit mehreren Zeilen haben, aber es beginnt von der gegenüberliegenden Ecke des Browser-Fensters und fließt rückwärts.

## flex-flow Shorthand

An dieser Stelle ist es erwähnenswert, dass es eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. Zum Beispiel können Sie

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

Kehren wir nun zu unserem ersten Beispiel zurück und schauen, wie wir kontrollieren können, welcher Anteil des Platzes Flex-Elemente im Vergleich zu den anderen Flex-Elementen einnehmen.

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

Dies ist ein einheitsloser Proportionswert, der bestimmt, wie viel Platz entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnehmen wird. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element den gleichen Wert (einen Wert von `1`), was bedeutet, dass sie alle einen gleichen Anteil des verbleibenden Raums einnehmen, nachdem Eigenschaften wie `padding` und `margin` festgelegt wurden. Dieser Wert wird proportional unter den Flex-Elementen aufgeteilt: Wenn Sie jedem Flex-Element einen Wert von `400000` geben, hätte das exakt den gleichen Effekt.

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

Wenn Sie jetzt aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel von der verfügbaren Breite einnimmt wie die anderen beiden. Jetzt gibt es insgesamt vier Proportionseinheiten (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, sodass sie jeweils 1/4 des verfügbaren Raums einnehmen. Das dritte hat zwei Einheiten, sodass es 2/4 des verfügbaren Raums einnimmt (oder die Hälfte).

Sie können auch einen Mindestgrößenwert innerhalb des flex-Wertes angeben. Versuchen Sie, Ihre bestehenden article Regeln wie folgt zu aktualisieren:

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

Dies bedeutet im Wesentlichen: "Jedes Flex-Element erhält zunächst `100px` des verfügbaren Raums. Danach wird der restliche verfügbare Raum entsprechend den Proportionseinheiten aufgeteilt." Sie werden einen Unterschied sehen, wie der Raum aufgeteilt wird.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Elemente haben eine Mindestbreite von 100 Pixeln — festgelegt mit `flex`. Der Wert von `flex` für die ersten beiden Flex-Elemente ist 1 und für das dritte Element ist 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 Proportionseinheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugewiesen und 2 Einheiten dem dritten Flex-Element, wodurch das dritte Flex-Element breiter ist als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in ihrer Flexibilität/Anpassungsfähigkeit. Wenn Sie das Browserfenster ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Shorthand versus Langform

{{cssxref("flex")}} ist eine Kurzform-Eigenschaft, mit der bis zu drei verschiedene Werte angegeben werden können:

- Der oben besprochene einheitslose Proportionswert. Dieser kann einzeln mit der Eigenschaft {{cssxref("flex-grow")}} in Langform angegeben werden.
- Ein zweiter einheitsloser Proportionswert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, wie stark ein Element schrumpfen wird, um ein Überlaufen zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion und wir werden sie in diesem Artikel nicht weiter behandeln.
- Der oben besprochene Mindestgrößenwert. Dieser kann einzeln mit dem Wert {{cssxref("flex-basis")}} in Langform angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, Sie müssen wirklich (zum Beispiel, um etwas zuvor Festgelegtes zu überschreiben). Sie führen zu viel zusätzlichem Code und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Funktionen verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen:

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

Wir werden dies in eine saubere, flexible Schaltfläche/Toolbar verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit ein paar Schaltflächen, die in die obere linke Ecke gequetscht sind.

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

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Wir haben dies über zwei neue Eigenschaften erreicht. Die Flex-Elemente sind durch das Setzen der `align-items`-Eigenschaft auf `center` in der Mitte der Querachse positioniert. Die Flex-Elemente sind durch das Setzen der `justify-content`-Eigenschaft auf `space-around` gleichmäßig entlang der Hauptachse verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Elemente auf der Querachse sitzen.

- Standardmäßig verhält sich der Wert `normal` wie `stretch` in Flexbox. Dies streckt alle Flex-Elemente, um das übergeordnete Element in der Richtung der Querachse auszufüllen. Wenn das übergeordnete Element in der Richtung der Querachse keine feste Größe hat, werden alle Flex-Elemente so hoch (oder breit) wie das höchste (oder breiteste) Flex-Element. So hatte unser erstes Beispiel standardmäßig gleich hohe Spalten.
- Der Wert `center`, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Abmessungen beibehalten, aber entlang der Querachse zentriert sind. Deshalb sind die Schaltflächen in unserem derzeitigen Beispiel vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` verwenden, die alle Elemente am Anfang und Ende der Querachse ausrichten. Die `baseline`-Werte richten die Flex-Elemente nach ihrer Grundlinie aus. Im Wesentlichen wird die Unterseite der ersten Textzeile jedes Flex-Elements mit der Unterseite der Zeile des Elements mit dem größten Abstand zwischen Kreuzanfang und dieser Grundlinie ausgerichtet. Siehe {{cssxref("align-items")}} für alle Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Elemente überschreiben, indem Sie die Eigenschaft {{cssxref("align-self")}} auf diese anwenden. Versuchen Sie zum Beispiel, folgendes zu Ihrem CSS hinzuzufügen:

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

- Der Standardwert ist `normal`, was sich wie `start` verhält, was alle Elemente anfangen lässt, an der Hauptachse zu sitzen.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende sitzen zu lassen.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end` je nach Schreibrichtungsmodus.
- `center` ist ebenfalls ein Wert für `justify-content`. Es wird die Flex-Elemente in die Mitte der Hauptachse setzen.
- Der Wert, den wir oben verwendet haben, `space-around`, ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit ein wenig Raum an jedem Ende.
- Es gibt einen weiteren Wert, `space-between`, der `space-around` sehr ähnlich ist, außer dass er keinen Raum an jedem Ende lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu experimentieren, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Anordnung von Flex-Elementen

Flexbox hat auch eine Funktion, um die Anordnungsreihenfolge von Flex-Elementen zu ändern, ohne die Quellordnung zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layoutmethoden unmöglich zu tun ist.

Versuchen Sie, die folgende CSS zu Ihrem Button-Bar-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie die Seite und Sie werden sehen, dass der "Smile"-Button an das Ende der Hauptachse verschoben wurde. Sprechen wir darüber, wie das im Detail funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}}-Wert von `0`.
- Flex-Elemente mit höheren angegebenen Ordnungswerten erscheinen später in der Anzeigereihenfolge als Elemente mit niedrigeren Ordnungswerten.
- Flex-Elemente mit dem gleichen Ordnungswert erscheinen in ihrer Quellreihenfolge. Wenn Sie vier Elemente haben, deren Ordnungswerte `2`, `1`, `1`, und `0` sind, wäre ihre Anzeigereihenfolge 4., 2., 3., dann 1.
- Das dritte Element erscheint nach dem zweiten, weil es den gleichen Ordnungswert hat und nach ihm in der Quellreihenfolge steht.

Sie können negative Ordnungswerte festlegen, damit Elemente früher erscheinen als Elemente mit dem Wert `0`. Zum Beispiel könnten Sie den "Blush"-Button mit der folgenden Regel an den Anfang der Hauptachse setzen:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorreihenfolge dieselbe wie die Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzerfreundlichkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flexboxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist vollkommen in Ordnung, ein Flex-Element auch zu einem Flex-Container zu machen, sodass seine Kinder auch wie flexible Boxen angeordnet sind.

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

Dieses komplexe Layout hat einige Flex-Elemente, die auch Flex-Container sind. Der HTML-Code dafür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zuerst legen wir fest, dass die Kinder des {{htmlelement("section")}}-Elements als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Als nächstes legen wir einige Flex-Werte auf den {{htmlelement("article")}}-Elementen selbst fest. Beachten Sie besonders die zweite Regel hier: Wir legen fest, dass das dritte {{htmlelement("article")}} seine Kinder ebenfalls als Flex-Elemente anordnet, diesmal jedoch als Spalte.

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

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann setzen wir seine Kinder (die {{htmlelement("button")}}-Elemente) ebenfalls so, dass sie wie Flex-Elemente angeordnet sind. Hier legen wir sie in einer Zeile mit Umbruch an und zentrieren sie im verfügbaren Raum, wie wir es mit dem individuellen Button-Beispiel zuvor gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir einige Größenangaben für die Button. Diesmal geben wir ihm einen Flex-Wert von `1 auto`. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz ein, wie sie können. So viele wie bequem auf eine Zeile passen, werden angeordnet; darüber hinaus fallen sie in eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Zusammenfassung

Das schließt unsere Einführung in die Grundlagen von Flexbox ab. Wir hoffen, Sie hatten Spaß und werden viel damit herumspielen, während Sie Ihr Lernen fortsetzen. Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu prüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks-Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf eine visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Bildungsspiel, um die Grundlagen von Flexbox zu erlernen und besser zu verstehen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}
