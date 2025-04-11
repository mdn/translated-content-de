---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
l10n:
  sourceCommit: ec3eb1bcf4566f47cb04b959cae9ae1c79f1d4b3
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) ist eine eindimensionale Layoutmethode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente _flexen_ (dehnen sich aus), um zusätzlichen Platz zu füllen, oder schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftarten-Styling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Flexbox — das flexible Layout eines Satzes von Block- oder Inline-Elementen in einer Dimension.</li>
          <li>Flex-Terminologie — Flex-Container, Flex-Element, Hauptachse und Querachse.</li>
          <li>Verstehen, was `display: flex` Ihnen standardmäßig bietet.</li>
          <li>Wie man Inhalte in neue Zeilen und Spalten umbricht.</li>
          <li>Flexible Größenanpassung und Anordnung von Flex-Elementen.</li>
          <li>Inhalte ausrichten und rechtfertigen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum Flexbox?

CSS Flexible Box Layout ermöglicht es Ihnen:

- Ein Block von Inhalten vertikal innerhalb seines Elternteils zu zentrieren.
- Alle Kinder eines Containers dazu zu bringen, die gleiche Menge des verfügbaren Breiten-/Höhenraums einzunehmen, unabhängig davon, wie viel Breite/Höhe verfügbar ist.
- Alle Spalten in einem Mehrspalten-Layout dazu zu bringen, die gleiche Höhe anzunehmen, auch wenn sie unterschiedliche Mengen an Inhalten enthalten.

Flexbox-Features können die perfekte Lösung für Ihre eindimensionalen Layout-Anforderungen sein. Lassen Sie uns eintauchen und es herausfinden!

## Ein einfaches Beispiel einführen

In diesem Artikel werden Sie eine Reihe von Übungen durchlaufen, um Ihnen zu helfen, zu verstehen, wie Flexbox funktioniert. Um zu beginnen, sollten Sie eine lokale Kopie des HTML und CSS erstellen. Laden Sie es in einem modernen Browser (wie Firefox oder Chrome) und sehen Sie sich den Code in Ihrem Code-Editor an. Alternativ öffnen Sie das Beispiel in {{LiveSampleLink("flexbox_0", "open the playground")}}.

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

## Bestimmen, welche Elemente als flexible Boxen angeordnet werden sollen

Zunächst müssen wir auswählen, welche Elemente als flexible Boxen angeordnet werden sollen. Dazu setzen wir einen speziellen Wert von {{cssxref("display")}} auf das Elternelement der Elemente, die Sie beeinflussen möchten. In diesem Fall möchten wir die {{htmlelement("article")}}-Elemente anordnen, also setzen wir dies auf die {{htmlelement("section")}}:

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

Dies führt dazu, dass das `<section>`-Element zu einem **Flex-Container** wird und seine Kinder zu **Flex-Elementen** werden. So sieht es aus:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

Diese einzelne Deklaration gibt uns alles, was wir brauchen. Unglaublich, oder? Wir haben ein Mehrspalten-Layout mit gleich großen Spalten, und die Spalten haben alle die gleiche Höhe. Dies liegt daran, dass die Standardwerte, die Flex-Elementen (den Kindern des Flex-Containers) gegeben werden, so eingerichtet sind, dass sie gängige Probleme wie dieses lösen.

Lassen Sie uns zusammenfassen, was hier passiert. Das Hinzufügen eines {{cssxref("display")}}-Wertes von `flex` zu einem Element macht es zu einem Flex-Container. Der Container wird als {{Glossary("Block-level_content", "Blockinhalte")}} angezeigt, wie es mit dem Rest der Seite interagiert. Wenn das Element in einen Flex-Container umgewandelt wird, werden seine Kinder in Flex-Elemente umgewandelt und als solche angeordnet.

Sie können den Container inline machen, indem Sie einen [außenliegenden `display`-Wert](/de/docs/Web/CSS/display#outside) verwenden (z.B. `display: inline flex`), wodurch beeinflusst wird, wie der Container selbst auf der Seite angeordnet wird. Der Legacy-Wert `inline-flex` zeigt den Container ebenfalls inline an. In diesem Tutorial konzentrieren wir uns darauf, wie sich der Inhalt des Containers verhält, aber wenn Sie den Effekt des Inline-gegen-Block-Layouts sehen möchten, können Sie sich den [Wertvergleich](/de/docs/Web/CSS/display#display_value_comparison) auf der `display`-Eigenschaftsseite ansehen.

Die nächsten Abschnitte erklären ausführlicher, was Flex-Elemente sind und was innerhalb eines Elements passiert, wenn Sie es zu einem Flex-Container machen.

## Das Flex-Modell

Wenn Elemente als Flex-Elemente angeordnet werden, werden sie entlang zweier Achsen angeordnet:

![Drei Flex-Elemente in einer von links nach rechts Sprache sind nebeneinander in einem Flex-Container angeordnet. Die Hauptachse — die Achse des Flex-Containers in der Richtung, in der die Flex-Elemente angeordnet sind — ist horizontal. Die Enden der Achse sind Hauptanfang und Hauptende und befinden sich links bzw. rechts. Die Querachse ist vertikal; senkrecht zur Hauptachse. Der Queranfang und das Querende befinden sich oben bzw. unten. Die Länge des Flex-Elements entlang der Hauptachse, in diesem Fall, die Breite, wird als Hauptgröße bezeichnet, und die Länge des Flex-Elements entlang der Querachse, in diesem Fall, die Höhe, wird als Quergröße bezeichnet.](flex_terms.png)

- Die **Hauptachse** ist die Achse, die in der Richtung verläuft, in der die Flex-Elemente angeordnet sind (zum Beispiel als eine Zeile über die Seite oder eine Spalte abwärts). Der Anfang und das Ende dieser Achse werden als **Hauptanfang** und **Hauptende** bezeichnet. Die Länge von der Hauptanfangskante zur Hauptendkante ist die **Hauptgröße**.
- Die **Querachse** ist die Achse, die senkrecht zur Richtung, in der die Flex-Elemente angeordnet sind, verläuft. Der Anfang und das Ende dieser Achse werden als **Queranfang** und **Querende** bezeichnet. Die Länge von der Queranfangskante zur Querendkante ist die **Quergröße**.
- Das Elternelement, das `display: flex` darauf gesetzt hat (die {{htmlelement("section")}} in unserem Beispiel), wird als **Flex-Container** bezeichnet.
- Die als flexible Boxen im Flex-Container angeordneten Elemente werden als **Flex-Elemente** bezeichnet (die {{htmlelement("article")}}-Elemente in unserem Beispiel).

Behalten Sie diese Terminologie im Kopf, während Sie die folgenden Abschnitte durchgehen. Sie können immer darauf zurückgreifen, wenn Sie verwirrt über einige der verwendeten Begriffe sind.

## Spalten oder Zeilen?

Flexbox bietet eine Eigenschaft namens {{cssxref("flex-direction")}}, die angibt, in welche Richtung die Hauptachse verläuft (in welche Richtung die Flexbox-Kinder angeordnet sind). Standardmäßig ist dies auf `row` gesetzt, wodurch sie in einer Zeile in der Richtung der Standard-Sprache Ihres Browsers angeordnet werden (von links nach rechts, im Fall eines englischen Browsers).

Versuchen Sie, die folgende Deklaration zu Ihrer {{htmlelement("section")}}-Regel hinzuzufügen:

```css
flex-direction: column;
```

Sie werden sehen, dass dies die Elemente zurück in ein Spaltenlayout versetzt, ähnlich wie sie waren, bevor wir CSS hinzugefügt haben. Bevor Sie fortfahren, löschen Sie diese Deklaration aus Ihrem Beispiel.

> [!NOTE]
> Sie können Flex-Elemente auch in umgekehrter Richtung mit den Werten `row-reverse` und `column-reverse` anordnen. Experimentieren Sie auch mit diesen Werten!

## Umbruch

Ein Problem, das auftritt, wenn Sie eine feste Breite oder Höhe in Ihrem Layout haben, ist, dass schließlich Ihre Flexbox-Kinder ihren Container überlaufen und das Layout brechen. Im folgenden Beispiel haben wir 5 {{htmlelement("article")}}s, die nicht passen, da sie eine `min-width` von `400px` haben, sodass ein horizontaler Scrollbereich entsteht.

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

Hier sehen wir, dass die Kinder tatsächlich aus ihrem Container ausbrechen. Standardmäßig versucht der Browser, alle Flex-Elemente in einer einzigen Zeile anzuordnen, wenn die `flex-direction` auf `row` gesetzt ist, oder in einer einzigen Spalte, wenn die `flex-direction` auf `column` gesetzt ist.

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

Sie werden sehen, dass das Layout mit diesem Einschluss viel besser aussieht:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

Wir haben jetzt mehrere Zeilen. Jede Zeile hat so viele Flexbox-Kinder, wie es sinnvoll ist. Jeglicher Überlauf wird auf die nächste Zeile verschoben.

Aber hier gibt es noch mehr zu tun. Versuchen Sie zuerst, Ihren {{cssxref("flex-direction")}}-Eigenschaftswert in `row-reverse` zu ändern. Jetzt werden Sie sehen, dass Sie immer noch Ihr Mehrzeilenlayout haben, aber es beginnt in der entgegengesetzten Ecke des Browserfensters und fließt rückwärts.

## flex-flow Kurzform

An dieser Stelle ist es erwähnenswert, dass eine Kurzform für {{cssxref("flex-direction")}} und {{cssxref("flex-wrap")}} existiert: {{cssxref("flex-flow")}}. Zum Beispiel können Sie

```css
flex-direction: row;
flex-wrap: wrap;
```

ersetzen durch

```css
flex-flow: row wrap;
```

## Flexible Größenanpassung von Flex-Elementen

Lassen Sie uns nun zu unserem ersten Beispiel zurückkehren und uns ansehen, wie wir kontrollieren können, welchen Raumanteil Flex-Elemente im Vergleich zu anderen Flex-Elementen einnehmen.

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

Dies ist ein proportionale Einheit ohne Maßeinheit, die bestimmt, wie viel verfügbarer Raum entlang der Hauptachse jedes Flex-Element im Vergleich zu anderen Flex-Elementen einnehmen wird. In diesem Fall geben wir jedem {{htmlelement("article")}}-Element denselben Wert (einen Wert von `1`), was bedeutet, dass sie alle eine gleiche Menge des übrig gebliebenen Raumes einnehmen, nachdem Eigenschaften wie Polsterung und Ränder gesetzt wurden. Dieser Wert wird proportional zwischen den Flex-Elementen geteilt: jedem Flex-Element einen Wert von `400000` zu geben, hätte genau denselben Effekt.

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

Jetzt, wenn Sie aktualisieren, werden Sie sehen, dass das dritte {{htmlelement("article")}} doppelt so viel der verfügbaren Breite einnimmt wie die anderen beiden. Es gibt jetzt insgesamt vier proportionale Einheiten (da 1 + 1 + 2 = 4). Die ersten beiden Flex-Elemente haben jeweils eine Einheit, so dass sie jeweils 1/4 des verfügbaren Raums einnehmen. Das dritte hat zwei Einheiten, daher nimmt es 2/4 des verfügbaren Raums ein (oder die Hälfte).

Sie können innerhalb des Flex-Werts auch einen Minimalwert angeben. Versuchen Sie, Ihre bestehenden Artikelregeln wie folgt zu aktualisieren:

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

Dies bedeutet im Wesentlichen: "Jedes Flex-Element erhält zuerst `100px` des verfügbaren Raums. Danach wird der restliche verfügbare Raum gemäß den proportionellen Einheiten aufgeteilt." Sie werden einen Unterschied in der Raumaufteilung feststellen.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

Alle Flex-Elemente haben eine Mindestbreite von 100 Pixeln—gesetzt mithilfe von 'flex'. Der Wert von flex für die ersten beiden Flex-Elemente ist 1 und für das dritte Element ist es 2. Dadurch wird der restliche Raum im Flex-Container in 4 proportionale Einheiten aufgeteilt. Eine Einheit wird jedem der ersten beiden Flex-Elemente zugewiesen und 2 Einheiten dem dritten Flex-Element, wodurch das dritte Flex-Element breiter als die anderen beiden ist, die dieselbe Breite haben.

Der wirkliche Wert von Flexbox zeigt sich in ihrer Flexibilität/Anpassungsfähigkeit. Wenn Sie das Browserfenster vergrößern oder ein weiteres {{htmlelement("article")}}-Element hinzufügen, funktioniert das Layout weiterhin einwandfrei.

## flex: Kurzform versus Langform

{{cssxref("flex")}} ist eine Kurzform, die bis zu drei verschiedene Werte angeben kann:

- Der oben besprochene proportionale Wert ohne Maßeinheit. Dieser kann separat mit der Langform-Eigenschaft {{cssxref("flex-grow")}} angegeben werden.
- Ein zweiter proportionale Wert ohne Maßeinheit, {{cssxref("flex-shrink")}}, der ins Spiel kommt, wenn die Flex-Elemente ihren Container überlaufen. Dieser Wert gibt an, wie stark ein Element schrumpfen wird, um ein Überlaufen zu verhindern. Dies ist ein ziemlich fortschrittliches Flexbox-Feature, und wir werden darauf in diesem Artikel nicht weiter eingehen.
- Der oben besprochene Minimalwert. Dieser kann separat mit dem Langform-Wert {{cssxref("flex-basis")}} angegeben werden.

Wir würden davon abraten, die Langform-Flex-Eigenschaften zu verwenden, es sei denn, Sie müssen wirklich (zum Beispiel, um etwas vorher Festgelegtes zu überschreiben). Sie führen dazu, dass viel zusätzlicher Code geschrieben wird und können etwas verwirrend sein.

## Horizontale und vertikale Ausrichtung

Sie können auch Flexbox-Features verwenden, um Flex-Elemente entlang der Haupt- oder Querachse auszurichten. Lassen Sie uns dies erkunden, indem wir uns ein neues Beispiel ansehen:

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

Wir werden dies in eine ordentliche, flexible Schaltfläche/Toolleiste verwandeln. Im Moment sehen Sie eine horizontale Menüleiste mit einigen Schaltflächen, die in die obere linke Ecke gedrängt sind.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

Zuerst erstellen Sie eine lokale Kopie dieses Beispiels.

Fügen Sie nun das Folgende ans Ende des CSS des Beispiels hinzu:

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

Aktualisieren Sie die Seite und Sie werden sehen, dass die Schaltflächen nun schön horizontal und vertikal zentriert sind. Dies haben wir durch zwei neue Eigenschaften erreicht. Die Flex-Elemente sind über `align-items` auf `center` auf der Querachse positioniert. Die Flex-Elemente sind entlang der Hauptachse durch `justify-content` auf `space-around` gleichmäßig verteilt.

Die Eigenschaft {{cssxref("align-items")}} steuert, wo die Flex-Elemente auf der Querachse sitzen.

- Standardmäßig ist der Wert `normal`, der sich in Flexbox wie `stretch` verhält. Dies dehnt alle Flex-Elemente aus, um die Eltern in der Richtung der Querachse auszufüllen. Wenn die Eltern keinen festen Wert in der Querachse haben, werden alle Flex-Elemente so hoch (oder breit) wie das höchste (oder breiteste) Flex-Element. So hatten unser erstes Beispiel standardmäßig Spalten gleicher Höhe.
- Der Wert `center`, den wir in unserem obigen Code verwendet haben, bewirkt, dass die Elemente ihre intrinsischen Dimensionen beibehalten, aber auf der Querachse zentriert werden. Daher sind die Schaltflächen unseres aktuellen Beispiels vertikal zentriert.
- Sie können auch Werte wie `flex-start`, `self-start` oder `start` und `flex-end`, `self-end` oder `end` verwenden, die alle Elemente am Anfang bzw. Ende der Querachse anordnen. Die `baseline`-Werte richten die Flex-Elemente nach ihrer Basislinie aus; im Wesentlichen wird die unterste Zeile des ersten Textes der Flex-Elemente mit der untersten Zeile des ersten Textes des Elements mit dem größten Abstand zwischen Queranfang und dieser Basislinie ausgerichtet. Siehe {{cssxref("align-items")}} für die vollständigen Details.

Sie können das Verhalten von {{cssxref("align-items")}} für individuelle Flex-Elemente überschreiben, indem Sie die Eigenschaft {{cssxref("align-self")}} auf sie anwenden. Zum Beispiel versuchen Sie, das Folgende zu Ihrem CSS hinzuzufügen:

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

Sehen Sie sich an, welche Wirkung dies hat, und entfernen Sie es wieder, wenn Sie fertig sind.

{{cssxref("justify-content")}} steuert, wo die Flex-Elemente auf der Hauptachse sitzen.

- Der Standardwert ist `normal`, der sich wie `start` verhält, was alle Elemente am Anfang der Hauptachse positioniert.
- Sie können `end` oder `flex-end` verwenden, um sie am Ende zu positionieren.
- Die Werte `left` und `right` verhalten sich wie `start` oder `end` in Abhängigkeit von der Schreibrichtung.
- `center` ist ebenfalls ein Wert für `justify-content`. Es positioniert die Flex-Elemente in der Mitte der Hauptachse.
- Der oben verwendete Wert `space-around` verteilt alle Elemente gleichmäßig entlang der Hauptachse mit etwas Raum an beiden Enden.
- Ein weiterer Wert, `space-between`, ist dem `space-around` sehr ähnlich, außer dass er keinen Raum an beiden Enden lässt.

Die [justify-items](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

Wir ermutigen Sie, mit diesen Werten zu experimentieren, um zu sehen, wie sie funktionieren, bevor Sie weitermachen.

## Anordnung von Flex-Elementen

Flexbox hat auch ein Feature, um die Layout-Reihenfolge von Flex-Elementen zu ändern, ohne die Quellreihenfolge zu beeinflussen. Dies ist eine weitere Sache, die mit traditionellen Layout-Methoden nicht möglich ist.

Versuchen Sie, das folgende CSS zu Ihrem Button-Bar-Beispielcode hinzuzufügen:

```css
button:first-child {
  order: 1;
}
```

Aktualisieren Sie und Sie werden sehen, dass die "Smile"-Schaltfläche ans Ende der Hauptachse verschoben wurde. Lassen Sie uns darüber sprechen, wie dies im Detail funktioniert:

- Standardmäßig haben alle Flex-Elemente einen {{cssxref("order")}}-Wert von `0`.
- Flex-Elemente mit höheren festgelegten Order-Werten erscheinen später in der Anzeigereihenfolge als Elemente mit niedrigeren Order-Werten.
- Flex-Elemente mit demselben Order-Wert erscheinen in ihrer Quellreihenfolge. Wenn Sie vier Items haben, deren Order-Werte auf `2`, `1`, `1` und `0` festgelegt sind, wäre ihre Anzeigereihenfolge 4., 2., 3. und 1.
- Das 3. Element erscheint nach dem 2., weil es denselben Order-Wert hat und im Quellcode danach kommt.

Sie können negative Order-Werte festlegen, um Elemente früher erscheinen zu lassen als Elemente mit dem Wert `0`. Zum Beispiel könnten Sie die "Blush"-Schaltfläche mithilfe der folgenden Regel am Anfang der Hauptachse erscheinen lassen:

```css
button:last-child {
  order: -1;
}
```

Obwohl Sie die Order mit `order` ändern können, bleibt die Tab-Reihenfolge gleich wie die Codereihenfolge. Das Ändern der Reihenfolge von fokussierbaren Elementen kann die Benutzerfreundlichkeit für Ihre Tastaturnutzer negativ beeinträchtigen!

## Verschachtelte Flex-Boxen

Es ist möglich, einige ziemlich komplexe Layouts mit Flexbox zu erstellen. Es ist vollkommen in Ordnung, ein Flex-Element auch zu einem Flex-Container zu machen, sodass seine Kinder ebenfalls wie flexible Boxen angeordnet werden.

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

Dieses komplexe Layout hat einige Flex-Elemente, die auch Flex-Container sind. Das HTML dafür ist ziemlich einfach. Wir haben ein {{htmlelement("section")}}-Element, das drei {{htmlelement("article")}}s enthält. Das dritte {{htmlelement("article")}} enthält drei {{htmlelement("div")}}s, und das erste {{htmlelement("div")}} enthält fünf {{htmlelement("button")}}s:

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

Zuerst legen wir fest, dass die Kinder der {{htmlelement("section")}} als flexible Boxen angeordnet werden.

```css
section {
  display: flex;
}
```

Als nächstes legen wir einige Flex-Werte auf den {{htmlelement("article")}}s selbst fest. Beachten Sie besonders die zweite Regel hier: wir setzen, dass das dritte {{htmlelement("article")}} seine Kinder ebenfalls wie Flex-Elemente anordnet, diesmal aber in einer Spalte.

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

Als nächstes wählen wir das erste {{htmlelement("div")}} aus. Wir verwenden zuerst `flex: 1 100px;` um ihm effektiv eine Mindesthöhe von `100px` zu geben, dann legen wir fest, dass seine Kinder (die {{htmlelement("button")}}-Elemente) ebenfalls wie Flex-Elemente angeordnet werden. Hier ordnen wir sie in einer umbrochenden Zeile an und richten sie im Zentrum des verfügbaren Raums aus, wie wir es mit dem individuellen Button-Beispiel gesehen haben.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Schließlich legen wir einige Größen auf dem Button fest. Diesmal, indem wir ihm einen Flex-Wert von `1 auto` geben. Dies hat einen sehr interessanten Effekt, den Sie sehen werden, wenn Sie die Breite Ihres Browserfensters ändern. Die Schaltflächen nehmen so viel Platz wie möglich ein. So viele passen bequem in eine Zeile; darüber hinaus fallen sie in eine neue Zeile.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigste Information merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen vor dem Weitergehen behalten haben – siehe [Test your skills: Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox_skills).

## Zusammenfassung

Damit endet unsere Tour durch die Grundlagen von Flexbox. Wir hoffen, Sie hatten Spaß und werden viel mit Flexbox experimentieren, während Sie mit Ihrem Lernen fortfahren. Als nächstes werden wir uns einen weiteren wichtigen Aspekt von CSS-Layouts ansehen: [CSS Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids).

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Anordnen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Tricks Leitfaden zu Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — ein Artikel, der alles über Flexbox auf eine visuell ansprechende Art erklärt
- [Flexbox Froggy](https://flexboxfroggy.com/) — ein Lernspiel, um die Grundlagen von Flexbox besser zu verstehen

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
