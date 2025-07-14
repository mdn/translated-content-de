---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: e0f97a8a4e8a2fc45f1a7bdc8d1e3f524ccb627d
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layout-Methode zur Anordnung von Elementen in Reihen oder Spalten. Elemente _flexen_ (erweitern sich), um zusätzlichen Platz zu füllen oder schrumpfen, um in kleinere Bereiche zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes text- und schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden CSS-Layout-Konzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — das flexible Anordnen einer Reihe von Block- oder Inline-Elementen in einer Dimension.</li>
          <li>Flex-Terminologie — flex container, flex item, main axis und cross axis.</li>
          <li>Verstehen, was `display: flex` Ihnen standardmäßig bietet.</li>
          <li>Wie man Inhalte auf neue Reihen und Spalten umbricht.</li>
          <li>Flexible Größenanpassung und Anordnung von Flex-Elementen.</li>
          <li>Das Ausrichten und Justieren von Inhalten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS Flexible Box Layout ermöglicht Ihnen:

- Ein Block von Inhalten vertikal in seinem Eltern-Element zu zentrieren.
- Alle untergeordneten Elemente eines Containers gleichmäßig auf die verfügbare Breite/Höhe zu verteilen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Bei einem Mehrspaltenlayout alle Spalten auf die gleiche Höhe anzupassen, selbst wenn sie unterschiedliche Inhaltsmengen enthalten.

Flexbox-Eigenschaften können die perfekte Lösung für Ihre eindimensionalen Layout-Anforderungen sein. Lassen Sie uns eintauchen und herausfinden!

> [!NOTE]
> Scrimbas einführendes [Flexbox](https://scrimba.com/learn-html-and-css-c0p/~017?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Scrim bietet einen interaktiven Leitfaden, der erklärt, wie häufig Flexbox im Web vorkommt und warum es so wichtig ist, es zu lernen. Außerdem führt es Sie Schritt für Schritt durch einen typischen Anwendungsfall, der die Leistungsfähigkeit von Flexbox demonstriert.

## Einführung in ein einfaches Beispiel

In diesem Artikel werden Sie eine Reihe von Übungen durchgehen, um zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie von HTML und CSS erstellen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und schauen Sie sich den Code in Ihrem Code-Editor an. Alternativ klicken Sie auf die Schaltfläche "Play", um es im Playground zu öffnen.

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

Sie werden sehen, dass wir ein {{htmlelement("header")}}-Element mit einer Hauptüberschrift darin haben und ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Wir werden diese verwenden, um ein ziemlich standardmäßiges Drei-Spalten-Layout zu erstellen.

## Festlegen, welche Elemente als flexible Boxen angeordnet werden sollen

Zuerst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf das {{htmlelement("section")}}:

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

Dies führt dazu, dass das `<section>`-Element zu einem **flex container** wird und seine Kinder zu **flex items**. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration liefert uns alles, was wir brauchen. Unglaublich, richtig? Wir haben ein Mehrspalten-Layout mit gleich großen Spalten, und die Spalten sind alle gleich hoch. Das liegt daran, dass die Standardwerte, die Flex-Elementen (den Kindern des Flex-Containers) zugewiesen werden, darauf ausgelegt sind, häufige Probleme wie dieses zu lösen.

Lassen Sie uns zusammenfassen, was hier passiert. Wenn einem Element ein {{cssxref("display")}}-Wert von `flex` hinzugefügt wird, wird es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Block-Level-Content")}} angezeigt, in Bezug darauf, wie er mit dem Rest der Seite interagiert. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in Flex-Elemente umgewandelt und als solche angeordnet.

Sie können den Container inline machen, indem Sie einen [außerhalb `display`-Wert](/de/docs/Web/CSS/display#outside) verwenden (z.B. `display: inline flex`), was beeinflusst, wie der Container selbst auf der Seite angeordnet wird.
Der veraltete `inline-flex` Display-Wert zeigt den Container ebenfalls inline an.
Wir werden uns in diesem Tutorial darauf konzentrieren, wie sich der Inhalt des Containers verhält, aber wenn Sie den Effekt von Inline- gegenüber Block-Layout sehen möchten, können Sie sich den [Wertvergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display`-Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären detaillierter, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente angeordnet werden, werden sie entlang von zwei Achsen angeordnet:

![Drei Flex-Elemente in einer Sprache, die von links nach rechts gelesen wird, sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers, in der Richtung, in der die Flex-Elemente angeordnet sind — ist horizontal. Die Enden der Achse sind main-start und main-end und befinden sich jeweils links und rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Die cross-start und cross-end befinden sich jeweils oben und unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall die Breite, wird als main size bezeichnet, und die Länge des Flex-Elements entlang der Querachse, in diesem Fall die Höhe, wird als cross size bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Elemente angeordnet sind (zum Beispiel als Reihe über die Seite oder als Spalte nach unten). Der Anfang und das Ende dieser Achse werden als **main start** und **main end** bezeichnet. Die Länge von der Main-start-Kante zur Main-end-Kante ist die **Main size**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung verläuft, in der die Flex-Elemente angeordnet sind. Der Anfang und das Ende dieser Achse werden als **cross start** und **cross end** bezeichnet. Die Länge von der Cross-start-Kante zur Cross-end-Kante ist die **Cross size**.
- Das übergeordnete Element, dem `display: flex` zugewiesen ist (das {{htmlelement("section")}} in unserem Beispiel), wird als **flex container** bezeichnet.
- Die als flexible Boxen im Flex-Container angeordneten Elemente werden als **flex items** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Hinterkopf, während Sie die folgenden Abschnitte durchgehen. Sie können jederzeit darauf zurückgreifen, wenn Sie über die verwendeten Begriffe verwirrt sind.

## Spalten oder Reihen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welche Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist diese auf `row` gesetzt, was dazu führt, dass sie in einer Reihe in der Richtung angeordnet werden, in der die Standard-Sprache Ihres Browsers arbeitet (von links nach rechts, im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente wieder in einem Spaltenlayout anordnet, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie weitermachen, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass Ihre Flexbox-Kinder irgendwann ihren Container überlaufen und das Layout zerstören. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}s, die nicht passen, weil sie eine `min-width` von `400px` haben, sodass es einen horizontalen Scroll gibt.

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

Eine Möglichkeit, wie Sie dies beheben können, besteht darin, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

Sie werden sehen, dass das Layout damit viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Reihen. Jede Reihe hat so viele Flexbox-Kinder, wie es sinnvoll ist. Jeder Überlauf wird in die nächste Zeile verschoben.

Aber es gibt noch mehr, was wir hier tun können. Versuchen Sie zuerst, Ihren {{cssxref("flex-direction")}} Eigenschaftswert in `row-reverse` zu ändern. Jetzt sehen Sie, dass Sie immer noch Ihr mehrzeiliges Layout haben, aber es beginnt in der gegenüberliegenden Ecke des Browser-Fensters und fließt in umgekehrter Richtung.

## flex-flow Kurzform

Es ist erwähnenswert, dass es eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} gibt: {{cssxref("flex-flow")}}. Zum Beispiel können Sie

```css
flex-direction: row;
flex-wrap: wrap;
```

ersetzen durch

```css
flex-flow: row wrap;
```

## Flexibles Größenmanagement von Flex-Elementen

Kommen wir nun zu unserem ersten Beispiel zurück und schauen uns an, wie wir steuern können, welchen Anteil an Platz Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen.

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

Dies ist ein maßloser Proportionswert, der bestimmt, wie viel verfügbarer Platz entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnimmt. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element denselben Wert (einen Wert von `1`), was bedeutet, dass sie alle denselben Anteil des überschüssigen Raums nach dem Setzen von Eigenschaften wie padding und margin einnehmen werden. Dieser Wert wird proportional unter den Flex-Elementen aufgeteilt: Einem jedes Flex-Element einen Wert von `400000` zu geben, hätte genau denselben Effekt.

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

Wenn Sie jetzt aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} den doppelten Anteil des verfügbaren Platzes einnimmt wie die anderen beiden. Es sind jetzt insgesamt vier Proportionseinheiten verfügbar (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, also nehmen sie jeweils 1/4 des verfügbaren Platzes ein. Das dritte hat zwei Einheiten, sodass es 2/4 des verfügbaren Platzes einnimmt (oder die Hälfte).

Sie können auch einen Mindestgrößenwert innerhalb des Flex-Werts angeben. Versuchen Sie, Ihre bestehenden Artikeldaten wie folgt zu aktualisieren:

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

Dies gibt im Wesentlichen an: "Jedes Flex-Element erhält zuerst `100px` des verfügbaren Platzes. Danach wird der verbleibende verfügbare Platz nach den Einheiten proportional aufgeteilt." Sie werden einen Unterschied sehen, wie der Platz aufgeteilt wird.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Elemente haben eine Mindestbreite von 100 Pixeln — festgelegt mit `flex`. Der Wert von flex für die ersten beiden Flex-Elemente ist 1 und für das dritte Element ist es 2. Dies teilt den verbleibenden Raum im Flex-Container in 4 proportionale Einheiten. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugewiesen und 2 Einheiten werden dem dritten Flex-Element zugewiesen, wodurch das dritte Flex-Element breiter ist als die anderen beiden, die die gleiche Breite haben.

Der wahre Wert von Flexbox zeigt sich in seiner Flexibilität/Reaktionsfähigkeit. Wenn Sie das Browserfenster ändern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin problemlos.

## flex: Kurzform versus Langform

{{cssxref("flex")}} ist eine Kurzform-Eigenschaft, die bis zu drei verschiedene Werte spezifizieren kann:

- Der maßlose Proportionswert, den wir oben besprochen haben. Dieser kann separat mit der Langform-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter maßloser Proportionswert, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, wie stark ein Element schrumpfen soll, um Überlauf zu verhindern. Dies ist eine ziemlich fortgeschrittene Flexbox-Funktion, und wir werden sie in diesem Artikel nicht weiter behandeln.
- Der Mindestgrößenwert, den wir oben besprochen haben. Dieser kann separat mit dem Langform-Wert {{cssxref("flex-basis")}} angegeben werden.

Wir raten davon ab, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, es ist wirklich notwendig (zum Beispiel, um etwas, das zuvor gesetzt wurde, zu überschreiben). Sie führen zu viel zusätzlichem Code und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Funktionen verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir ein neues Beispiel betrachten:

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

Wir werden dies in eine ordentliche, flexible Schaltflächen- oder Symbolleiste verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gedrängt sind.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

Nehmen Sie zuerst eine lokale Kopie dieses Beispiels.

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

Aktualisieren Sie die Seite, und Sie werden sehen, dass die Schaltflächen jetzt schön horizontal und vertikal zentriert sind. Wir haben dies über zwei neue Eigenschaften erreicht. Die Flex-Elemente sind durch die Einstellung der `align-items`-Eigenschaft auf `center` in der Mitte der Querachse positioniert. Die Flex-Elemente sind entlang der Hauptachse mit der Einstellung der `justify-content`-Eigenschaft auf `space-around` gleichmäßig verteilt.

Die {{cssxref("align-items")}}-Eigenschaft steuert, wo die Flex-Elemente auf der Querachse sitzen.

- Standardmäßig ist der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Dies streckt alle Flex-Elemente, um das Elternelement in der Richtung der Querachse auszufüllen. Wenn das Elternelement keine feste Größe in der Richtung der Querachse hat, werden alle Flex-Elemente so hoch (oder breit) wie das höchste (oder breiteste) Flex-Element. So hatten unsere ersten Beispiele standardmäßig gleich hohe Spalten.
- Der `center`-Wert, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Abmessungen beibehalten, aber entlang der Querachse zentriert werden. Dies ist der Grund, warum die Schaltflächen unseres aktuellen Beispiels vertikal zentriert sind.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` haben, die alle Elemente am Anfang und am Ende der Querachse entsprechend ausrichten. Der `baseline`-Wert richtet die Flex-Elemente an ihrer Grundlinie aus; im Wesentlichen wird die unterste Zeile des ersten Texts jedes Flex-Elements mit der unteren Zeile der ersten Zeile des Elements mit dem größten Abstand zwischen cross-start und dieser Grundlinie angepasst. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten der {{cssxref("align-items")}}-Eigenschaft für einzelne Flex-Elemente außer Kraft setzen, indem Sie die {{cssxref("align-self")}}-Eigenschaft auf diese anwenden. Versuchen Sie zum Beispiel, das Folgende zu Ihrem CSS hinzuzufügen:

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

{{cssxref("justify-content")}} steuert, wo die Flex-Elemente auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich wie `start` verhält, was dazu führt, dass alle Elemente am Anfang der Hauptachse sitzen.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende sitzen zu lassen.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end`, abhängig von der Schreibrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Dadurch werden die Flex-Elemente in der Mitte der Hauptachse positioniert.
- Der Wert, den wir oben verwendet haben, `space-around`, ist nützlich — er verteilt alle Elemente gleichmäßig entlang der Hauptachse mit etwas Platz an beiden Enden.
- Es gibt einen weiteren Wert, `space-between`, der `space-around` sehr ähnlich ist, außer dass es keinen Platz an den Enden lässt.

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir möchten Sie ermutigen, mit diesen Werten zu spielen, um zu sehen, wie sie funktionieren, bevor Sie weitermachen.

## Reihenfolge von Flex-Elementen

Flexbox hat auch eine Funktion zum Ändern der Anordnungsreihenfolge von Flex-Elementen, ohne die Quellreihenfolge zu beeinflussen. Dies ist etwas, das mit traditionellen Layout-Methoden unmöglich ist.

Versuchen Sie, dem Codebeispiel Ihrer Schaltflächenleiste folgendes CSS hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie die Seite, und Sie sehen, dass die Schaltfläche "Smile" an das Ende der Hauptachse verschoben wurde. Lassen Sie uns ein wenig detaillierter darüber sprechen, wie dies funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}}-Wert von `0`.
- Flex-Elemente mit höheren festlegten order-Werten erscheinen später in der Anzeigereihenfolge als Elemente mit niedrigeren order-Werten.
- Flex-Elemente mit demselben order-Wert erscheinen in ihrer Quellreihenfolge. Wenn Sie vier Elemente mit den order-Werten `2`, `1`, `1` und `0` haben, wäre ihre Anzeigereihenfolge 4., 2., 3. und dann 1.
- Das 3. Element erscheint nach dem 2., weil es denselben order-Wert hat und in der Quellreihenfolge nach ihm kommt.

Sie können negative order-Werte festlegen, um Elemente früher erscheinen zu lassen als Elemente mit dem Wert `0`. Zum Beispiel könnten Sie die Schaltfläche "Blush" mit der folgenden Regel am Anfang der Hauptachse erscheinen lassen:

```css
button:last-child {
  order: -1;
}
```

Während Sie die Reihenfolge mit `order` ändern können, bleibt die Tabulatorreihenfolge gleich der Quellreihenfolge. Die Änderung der Reihenfolge von fokussierbaren Elementen kann die Benutzerfreundlichkeit für Ihre Tastaturnutzer negativ beeinflussen!

## Verschachtelte Flex-Boxen

Mit Flexbox können Sie einige ziemlich komplexe Layouts erstellen. Es ist durchaus akzeptabel, ein Flex-Element auch als Flex-Container festzulegen, sodass seine Kinder ebenfalls wie flexible Boxen angeordnet sind.

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

Dieses komplexe Layout hat einige Flex-Elemente, die ebenfalls Flex-Container sind. Das HTML hierfür ist recht einfach. Wir haben ein {{htmlelement("section")}}-Element mit drei {{htmlelement("article")}}s. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zuerst legen wir die Kinder des {{htmlelement("section")}} fest, dass sie als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Als Nächstes legen wir einige Flex-Werte auf die {{htmlelement("article")}}s selbst fest. Beachten Sie besonders die zweite Regel hier: Wir legen fest, dass das dritte {{htmlelement("article")}} seine Kinder ebenfalls wie Flex-Elemente anordnet, dieses Mal aber wie eine Spalte.

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

Dann wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;`, um effektiv eine Mindesthöhe von `100px` zu geben, und dann legen wir fest, dass seine Kinder (die {{htmlelement("button")}}-Elemente) ebenfalls wie Flex-Elemente angeordnet werden. Hier legen wir sie in einer einhüllenden Reihe aus und richten sie in der Mitte des verfügbaren Raums aus, wie wir es mit dem individuellen Schaltflächenbeispiel, das wir zuvor gesehen haben, gemacht haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich legen wir einige Größen für die Schaltfläche fest. Diesmal, indem wir ihr einen Flex-Wert von `1 auto` geben. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz wie möglich ein. So viele wie angenehm in eine Zeile passen; darüber hinaus fallen sie in eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox).

## Zusammenfassung

Das schließt unsere Tour durch die Grundlagen von Flexbox ab. Wir hoffen, Sie hatten Spaß und werden sich damit vertraut machen, während Sie mit Ihrem Lernen weiter fortschreiten. Als nächstes werfen wir einen Blick auf einen weiteren wichtigen Aspekt von CSS-Layouts: [CSS-Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf visuell ansprechende Weise erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Bildungsspiel, um die Grundlagen von Flexbox besser zu verstehen und zu lernen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
