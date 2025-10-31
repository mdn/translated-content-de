---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layout-Methode zur Anordnung von Elementen in Zeilen oder Spalten. Elemente _flexen_ (erweitern sich), um zusätzlichen Platz zu füllen oder schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Inhalte mit HTML strukturieren</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstilierung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden CSS-Layout-Konzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — flexibel eine Menge von Block- oder Inline-Elementen in einer Dimension anordnen.</li>
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

CSS Flexible Box Layout ermöglicht Ihnen:

- Vertikales Zentrieren eines Inhaltsblocks innerhalb seines Elternelements.
- Alle Kinder eines Containers nehmen einen gleichen Anteil der verfügbaren Breite/Höhe ein, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem mehrspaltigen Layout adoptieren die gleiche Höhe, auch wenn sie eine unterschiedliche Menge an Inhalt enthalten.

Flexbox-Funktionen könnten die perfekte Lösung für Ihre eindimensionalen Layoutbedürfnisse sein. Lassen Sie uns eintauchen und es herausfinden!

> [!NOTE]
> Scrimbas einführender [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) <sup>[_MDN Lerngruppen-Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim bietet einen interaktiven Leitfaden, der erklärt, wie verbreitet Flexbox im Web ist und warum es so wichtig ist, es zu lernen. Es führt Sie durch einen typischen Anwendungsfall, der die Leistung von Flexbox demonstriert.

## Einführung in ein einfaches Beispiel

In diesem Artikel arbeiten Sie durch eine Reihe von Übungen, um zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTML und CSS erstellen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und werfen Sie einen Blick auf den Code in Ihrem Code-Editor. Alternativ klicken Sie auf die Schaltfläche "Play", um es im Playground zu öffnen.

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

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Überschrift auf oberster Ebene darin und ein {{htmlelement("section")}}-Element haben, das drei {{htmlelement("article")}}s enthält. Wir werden diese verwenden, um ein ziemlich standardmäßiges Dreispalten-Layout zu erstellen.

## Angeben, welche Elemente als flexible Boxen ausgelegt werden sollen

Um zu beginnen, müssen wir auswählen, welche Elemente als flexible Boxen angelegt werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf das {{htmlelement("section")}}:

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

Dies bewirkt, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Items** werden. So sieht das aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein Mehrspalten-Layout mit gleich großen Spalten, und die Spalten sind alle gleich hoch. Das liegt daran, dass die Standardwerte, die den Flex-Items (den Kindern des Flex-Containers) zugewiesen werden, so eingestellt sind, dass sie übliche Probleme wie dieses lösen.

Lassen Sie uns rekapitulieren, was hier passiert. Durch das Hinzufügen eines {{cssxref("display")}}-Werts von `flex` zu einem Element wird es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Level-Inhalt")}} angezeigt, was den Rest der Seite betrifft. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder zu Flex-Items umgewandelt und so angeordnet.

Sie können den Container inline machen, indem Sie einen [Outside-`display`-Wert](/de/docs/Web/CSS/Reference/Properties/display#outside) verwenden (z. B. `display: inline flex`), der beeinflusst, wie der Container selbst auf der Seite angeordnet wird. Der Legacy-`inline-flex`-Display-Wert zeigt den Container ebenfalls als inline an. Wir werden uns in diesem Tutorial darauf konzentrieren, wie sich die Inhalte des Containers verhalten. Wenn Sie jedoch die Auswirkungen des Inline- im Vergleich zum Block-Layout sehen möchten, können Sie sich den [Wertvergleich](/de/docs/Web/CSS/Reference/Properties/display#display_value_comparison) auf der `display`-Eigenschaften-Seite ansehen.

Die nächsten Abschnitte erklären ausführlicher, was Flex-Items sind und was passiert, wenn Sie ein Element in einen Flex-Container verwandeln.

## Das Flex-Modell

Wenn Elemente als Flex-Items angelegt werden, werden sie entlang zweier Achsen angeordnet:

![Drei Flex-Items in einer von links nach rechts-laufenden Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Items angeordnet sind — ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Der cross-start und der cross-end befinden sich jeweils oben und unten. Die Länge des Flex-Items entlang der Hauptachse, in diesem Fall die Breite, wird als main size bezeichnet, und die Länge des Flex-Items entlang der Querachse, in diesem Fall die Höhe, wird als cross size bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Items angeordnet sind (zum Beispiel als Zeile über die Seite oder als Spalte entlang der Seite). Der Anfang und das Ende dieser Achse werden als **main start** und **main end** bezeichnet. Die Länge vom main-start Rand zum main-end Rand ist die **main size**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Items angeordnet sind. Der Anfang und das Ende dieser Achse werden als **cross start** und **cross end** bezeichnet. Die Länge vom cross-start Rand zum cross-end Rand ist die **cross size**.
- Das Elternelement, auf dem `display: flex` gesetzt ist (das {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die im Flex-Container als flexible Boxen angeordneten Elemente werden als **Flex-Items** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Denken Sie an diese Terminologie, während Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie über die verwendeten Begriffe verwirrt sind.

## Spalten oder Zeilen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welche Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist dies auf `row` eingestellt, was dazu führt, dass sie in einer Zeile in der Richtung angeordnet sind, in der die Standard-Sprache Ihres Browsers funktioniert (von links nach rechts im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in ein Spaltenlayout versetzt, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie fortfahren, entfernen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Items auch in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder schließlich ihren Container überlaufen und das Layout zerstören. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}s, die nicht passen, da sie eine `min-width` von `400px` haben, so dass ein horizontaler Bildlauf vorhanden ist.

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

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Items in einer einzigen Zeile zu platzieren, wenn die `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn die `flex-direction` auf `column` gesetzt ist.

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

Sie werden sehen, dass das Layout mit dieser Deklaration viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Jetzt haben wir mehrere Zeilen. Jede Zeile enthält so viele Flexbox-Kinder, wie es sinnvoll ist. Jeglicher Überlauf wird in die nächste Zeile verschoben.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zunächst, Ihren {{cssxref("flex-direction")}}-Wert auf `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie immer noch Ihr mehrzeiliges Layout haben, aber es beginnt in der anderen Ecke des Browser-Fensters und fließt umgekehrt.

## `flex-flow` Kurzform

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

## Flexible Größenanpassung von Flex-Items

Kehren wir nun zu unserem ersten Beispiel zurück und sehen uns an, wie wir kontrollieren können, welchen Anteil des Raums die Flex-Items im Vergleich zu den anderen Flex-Items einnehmen.

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

Dies ist ein einheitsloser Proportionswert, der bestimmt, wie viel verfügbarer Platz entlang der Hauptachse jedes Flex-Item im Vergleich zu anderen Flex-Items einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element denselben Wert (einen Wert von `1`), was bedeutet, dass sie alle den gleichen Anteil des verbleibenden Platzes nach der Festlegung von Eigenschaften wie Polsterung und Rand einnehmen. Dieser Wert wird proportional unter den Flex-Items aufgeteilt: jedem Flex-Item einen Wert von `400000` zu geben, hätte genau den gleichen Effekt.

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

Jetzt, wenn Sie aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel von der verfügbaren Breite einnimmt wie die anderen beiden. Es sind jetzt insgesamt vier Proportions-Einheiten verfügbar (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Items haben jeweils eine Einheit, daher nehmen sie jeweils 1/4 des verfügbaren Platzes ein. Das dritte hat zwei Einheiten, also nimmt es 2/4 des verfügbaren Platzes ein (oder die Hälfte).

Sie können auch einen Mindestgrößen-Wert innerhalb des Flex-Werts angeben. Versuchen Sie, Ihre vorhandenen Artikelregeln wie folgt zu aktualisieren:

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

Dies gibt im Wesentlichen an: "Jedes Flex-Item erhält zuerst 100px des verfügbaren Raums. Danach wird der verbleibende Raum gemäß den Proportionseinheiten aufgeteilt." Sie werden einen Unterschied darin sehen, wie der Raum aufgeteilt wird.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Items haben eine Mindestbreite von 100 Pixeln—gesetzt mit `flex`. Der Wert von Flex für die ersten beiden Flex-Items ist 1 und für das dritte Item 2. Dies teilt den verbleibenden Platz im Flex-Container in 4 Proportionseinheiten auf. Eine Einheit wird jedem der ersten beiden Flex-Items zugeordnet, und 2 Einheiten werden dem dritten Flex-Item zugeordnet, wodurch das dritte Flex-Item breiter als die anderen beiden wird, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in ihrer Flexibilität/Reaktionsfähigkeit. Wenn Sie das Browserfenster skalieren oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## `flex`: Kurzform versus Langform

{{cssxref("flex")}} ist eine Kurzform-Eigenschaft, die bis zu drei verschiedene Werte spezifizieren kann:

- Der einheitslose Proportionswert, den wir oben besprochen haben. Dies kann einzeln mit der {{cssxref("flex-grow")}}-Langform-Eigenschaft angegeben werden.
- Ein zweiter einheitsloser Proportionswert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Items ihren Container überlaufen. Dieser Wert gibt an, wie stark ein Element schrumpft, um einen Überlauf zu verhindern. Dies ist ein ziemlich fortgeschrittenes Flexbox-Feature, das wir in diesem Artikel nicht weiter behandeln werden.
- Der Mindestgrößenwert, den wir oben besprochen haben. Dies kann einzeln mit der {{cssxref("flex-basis")}}-Langform-Wert angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, Sie müssen wirklich (zum Beispiel, um etwas Überschriebenes aufzuheben). Sie führen dazu, dass viel zusätzlicher Code geschrieben wird und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Features verwenden, um Flex-Items entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen:

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

Wir werden dies in eine saubere, flexible Schaltfläche/Toolbar verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gestopft sind.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

Erstellen Sie zunächst eine lokale Kopie dieses Beispiels.

Fügen Sie nun Folgendes am Ende des CSS des Beispiels hinzu:

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

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Dies haben wir über zwei neue Eigenschaften erreicht. Die Flex-Items sind durch das Setzen der `align-items`-Eigenschaft auf `center` auf der Querachse zentriert. Die Flex-Items sind gleichmäßig entlang der Hauptachse durch das Setzen der `justify-content`-Eigenschaft auf `space-around` verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Items auf der Querachse sitzen.

- Standardmäßig hat sie den Wert `normal`, der sich wie `stretch` in Flexbox verhält. Dies streckt alle Flex-Items aus, um den Eltern in der Richtung der Querachse zu füllen. Wenn der Elternteil keine feste Größe in der Richtung der Querachse hat, werden alle Flex-Items so hoch (oder breit) wie das höchste (oder breiteste) Flex-Item. So hatten wir in unserem ersten Beispiel standardmäßig gleich hohe Spalten.
- Der `center`-Wert, den wir in unserem oben stehenden Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Dimensionen beibehalten, aber entlang der Querachse zentriert werden. Aus diesem Grund sind die Schaltflächen unseres aktuellen Beispiels vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` verwenden, die alle Elemente am Anfang und Ende der Querachse ausrichten. Die `baseline`-Werte richten die Flex-Items an ihrer Basislinie aus; im Wesentlichen wird der Boden der ersten Textzeile jedes Flex-Items mit dem Boden der ersten Zeile des Elements mit dem größtem Abstand von cross-start zu dieser Baseline ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für einzelne Flex-Items überschreiben, indem Sie die {{cssxref("align-self")}}-Eigenschaft auf sie anwenden. Versuchen Sie zum Beispiel, Folgendes zu Ihrem CSS hinzuzufügen:

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

Schauen Sie sich an, welche Wirkung dies hat und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Items auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, was sich wie `start` verhält, was alle Items am Anfang der Hauptachse sitzen lässt.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu platzieren.
- Die Werte `left` und `right` verhalten sich je nach Schreibrichtungsmodus wie `start` oder `end`.
- `center` ist ebenfalls ein Wert für `justify-content`. Er zentriert die Flex-Items auf der Hauptachse.
- Der Wert, den wir oben verwendet haben, `space-around`, ist nützlich — er verteilt alle Items gleichmäßig entlang der Hauptachse mit etwas Platz an beiden Enden.
- Es gibt einen weiteren Wert, `space-between`, der sehr ähnlich zu `space-around` ist, außer dass er keinen Platz an beiden Enden lässt.

Die [`justify-items`](/de/docs/Web/CSS/Reference/Properties/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu experimentieren, um zu sehen, wie sie funktionieren, bevor Sie fortfahren.

## Reihenfolge von Flex-Items

Flexbox enthält auch eine Funktion, um die Anordnungsreihenfolge von Flex-Items zu ändern, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit herkömmlichen Layoutmethoden unmöglich ist.

Versuchen Sie, den folgenden CSS Ihrem Button-Bar-Beispiel-Code hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie die Ansicht, und Sie werden sehen, dass die "Smile"-Schaltfläche zum Ende der Hauptachse verschoben wurde. Lassen Sie uns im Detail besprechen, wie dies funktioniert:

- Standardmäßig haben alle Flex-Items einen {{cssxref("order")}}-Wert von `0`.
- Flex-Items mit höheren angegebenen Ordnungswerten erscheinen später in der Anzeigereihenfolge als Items mit niedrigeren Ordnungswerten.
- Flex-Items mit dem gleichen Ordnungswert erscheinen in ihrer Quellreihenfolge. Wenn Sie vier Elemente haben, deren Ordnungswerte auf `2`, `1`, `1` und `0` festgelegt sind, wäre ihre Anzeigereihenfolge 4., 2., 3., dann 1.
- Das dritte Element erscheint nach dem zweiten, da es den gleichen Ordnungswert hat und in der Quellreihenfolge nach ihm kommt.

Sie können negative Ordnungswerte setzen, um Elemente früher erscheinen zu lassen als Elemente mit einem Ordnungswert von `0`. Zum Beispiel könnten Sie die "Blush"-Schaltfläche mit der folgenden Regel am Anfang der Hauptachse erscheinen lassen:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorreihenfolge gleich wie die Code-Reihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann sich negativ auf die Bedienbarkeit für Ihre Tastaturnutzer auswirken!

## Verschachtelte Flex-Boxen

Es ist möglich, mit Flexbox einige ziemlich komplexe Layouts zu erstellen. Es ist absolut in Ordnung, ein Flex-Item auch zu einem Flex-Container zu machen, sodass seine Kinder auch wie flexible Boxen angeordnet werden.

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

Dieses komplexe Layout hat einige Flex-Items, die ebenfalls Flex-Container sind. Das HTML hierfür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zuerst setzen wir die Kinder des {{htmlelement("section")}} so, dass sie als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Als Nächstes setzen wir einige Flex-Werte an den {{htmlelement("article")}}-s selbst. Beachten Sie insbesondere die zweite Regel hier: wir setzen das dritte {{htmlelement("article")}} so, dass seine Kinder ebenfalls wie Flex-Items angeordnet werden, aber diesmal legen wir sie wie eine Spalte aus.

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

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um ihm effektiv eine Mindesthöhe von `100px` zu geben. Dann setzen wir seine Kinder (die {{htmlelement("button")}}-Elemente) auch so, dass sie wie Flex-Items angeordnet werden. Hier legen wir sie in einer umbrochenen Zeile aus und zentrieren sie im verfügbaren Raum, wie wir es mit dem einzelnen Schaltflächenbeispiel getan haben, das wir früher gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich setzen wir einige Größenangaben an der Schaltfläche. Dieses Mal, indem wir ihr einen Flex-Wert von `1 auto` geben. Dies hat eine sehr interessante Wirkung, die Sie sehen werden, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz ein, wie sie können. So viele werden in eine Zeile passen, wie es angenehm ist; wenn darüber hinaus, werden sie in eine neue Zeile springen.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Zusammenfassung

Damit endet unsere Einführung in die Grundlagen von Flexbox. Wir hoffen, Sie hatten Spaß und werden damit intensiv experimentieren, während Sie mit Ihrem Lernen weiter voranschreiten. Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie alle diese Informationen verstanden und behalten haben.

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Flex-Items anordnen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Kontrollieren der Verhältnisse von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout]-Modul(/de/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf attraktive Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lernspiel, um die Grundlagen von Flexbox zu verstehen und zu erlernen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox", "Learn_web_development/Core/CSS_layout")}}
