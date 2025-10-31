---
title: Umgang mit unterschiedlichen Schreibrichtungen
short-title: Mehrere Schreibrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernen kennengelernt haben, sind an die physischen Dimensionen unseres Bildschirms gebunden. Wir erstellen zum Beispiel Ränder oben, rechts, unten und links um ein Kästchen. Diese physischen Dimensionen passen sehr gut zu Inhalten, die horizontal betrachtet werden, und standardmäßig unterstützt das Web tendenziell links-nach-rechts-Sprachen (z. B. Englisch oder Französisch) besser als rechts-nach-links-Sprachen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um unterschiedliche Richtungen von Inhalten besser zu unterstützen, einschließlich rechts-nach-links, aber auch von oben nach unten verlaufende Inhalte (wie Japanisch) — diese unterschiedlichen Richtungen werden als **Schreibmodi** bezeichnet. Ein Verständnis dieser Schreibmodi wird sehr hilfreich für Sie sein, wenn Sie mit Layouts arbeiten, daher werden wir sie jetzt vorstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die Bedeutung von Schreibmodi für modernes CSS zu verstehen.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Mit der {{cssxref("writing-mode")}}-Eigenschaft können wir von einem Schreibmodus in einen anderen wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen — Sie könnten auch den Schreibmodus von Teilen Ihres Layouts aus kreativen Gründen ändern.

Im folgenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text verläuft jetzt vertikal. Vertikaler Text ist in Grafikdesigns üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen zu verleihen.

```html live-sample___simple-vertical
<h1>Play with writing modes</h1>
```

```css live-sample___simple-vertical
body {
  font-family: sans-serif;
  height: 300px;
}
h1 {
  writing-mode: vertical-rl;
  color: white;
  background-color: black;
  padding: 10px;
}
```

{{EmbedLiveSample("simple-vertical", "", "350px")}}

Die drei möglichen Werte für die [`writing-mode`](/de/docs/Web/CSS/Reference/Properties/writing-mode)-Eigenschaft sind:

- `horizontal-tb`: Blockflussrichtung von oben nach unten. Sätze verlaufen horizontal.
- `vertical-rl`: Blockflussrichtung von rechts nach links. Sätze verlaufen vertikal.
- `vertical-lr`: Blockflussrichtung von links nach rechts. Sätze verlaufen vertikal.

Somit legt die `writing-mode`-Eigenschaft in Wirklichkeit die Richtung fest, in der Blockelemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der Text in Sätzen fließt.

## Schreibmodi und Block- sowie Inline-Layout

Wir haben bereits über [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) gesprochen und die Tatsache, dass einige Dinge als Blockelemente und andere als Inline-Elemente dargestellt werden. Wie oben beschrieben, sind Block und Inline an den Schreibmodus des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal darstellt, wie z. B. Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies klarer. Im folgenden Beispiel habe ich zwei Kästchen, die eine Überschrift und einen Absatz enthalten. Das erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten verläuft. Das zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links verläuft.

```html live-sample___block-inline
<div class="wrapper">
  <div class="box horizontal">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
  </div>
  <div class="box vertical">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
  </div>
</div>
```

```css live-sample___block-inline
body {
  font-family: sans-serif;
  height: 300px;
}
.wrapper {
  display: flex;
}

.box {
  border: 1px solid #cccccc;
  padding: 0.5em;
  margin: 10px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("block-inline", "", "350px")}}

Wenn wir den Schreibmodus wechseln, ändern wir die Richtung, die Block und Inline ist. In einem `horizontal-tb`-Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl`-Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Somit ist die **Blockdimension** immer die Richtung, in der Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inlinedimension** ist immer die Richtung, in der ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Anzeige der Block- und Inlinesachse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Anzeige der Block- und Inlinesachse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie beginnen, sich mit CSS-Layouts zu beschäftigen, insbesondere den neueren Layoutmethoden, wird dieses Konzept von Block und Inline sehr wichtig. Wir werden darauf später noch einmal eingehen.

### Richtung

Zusätzlich zum Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist nichts, was Sie wahrscheinlich kreativ nutzen werden — wenn Sie etwas rechtsbündig ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun — es ist jedoch wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die links nach rechts angezeigt werden!

Da sich Schreibmodus und Textrichtung ändern können, beziehen sich neuere CSS-Layoutmethoden nicht auf links und rechts sowie oben und unten. Stattdessen wird von _Anfang_ und _Ende_ im Zusammenhang mit Inline und Block gesprochen. Machen Sie sich jetzt noch nicht zu viele Gedanken darüber, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie mit Layouts beginnen; Sie werden es als sehr hilfreich erachten, um CSS zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, warum wir an diesem Punkt Ihres Lernens über Schreibmodi und Richtung sprechen, ist, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind, und diese machen in einem horizontalen Schreibmodus mehr Sinn.

Werfen wir einen Blick auf unsere beiden Kästchen — eines mit einem `horizontal-tb`-Schreibmodus und eines mit `vertical-rl`. Ich habe beiden Kästchen eine {{cssxref("width")}} gegeben. Sie können sehen, dass das Kästchen im vertikalen Schreibmodus immer noch eine Breite hat, und dies führt dazu, dass der Text überläuft.

```html live-sample___width
<div class="wrapper">
  <div class="box horizontal">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
    <p>These boxes have a width.</p>
  </div>
  <div class="box vertical">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
    <p>These boxes have a width.</p>
  </div>
</div>
```

```css live-sample___width
body {
  font-family: sans-serif;
  height: 300px;
}
.wrapper {
  display: flex;
}

.box {
  border: 1px solid #cccccc;
  padding: 0.5em;
  margin: 10px;
  width: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("width", "", "350px")}}

Was wir in diesem Szenario wirklich wollen, ist im Wesentlichen die Höhe mit der Breite in Übereinstimmung mit dem Schreibmodus zu tauschen. Wenn wir uns in einem vertikalen Schreibmodus befinden, möchten wir, dass sich das Kästchen in der Blockdimension ausdehnt, genauso wie es im horizontalen Modus tut.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften — Dinge wie `width` und `height` — durch **logische** oder **flussverwandte** Versionen.

Die Eigenschaft, die `width` im horizontalen Schreibmodus zugeordnet ist, heißt {{cssxref("inline-size")}} — sie bezieht sich auf die Größe in der Inlinedimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Blockdimension. Sie können sehen, wie dies im folgenden Beispiel funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

```html live-sample___inline-size
<div class="wrapper">
  <div class="box horizontal">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
    <p>These boxes have inline-size.</p>
  </div>
  <div class="box vertical">
    <h2>Heading</h2>
    <p>A paragraph demonstrating writing modes in CSS.</p>
    <p>These boxes have inline-size.</p>
  </div>
</div>
```

```css live-sample___inline-size
.wrapper {
  display: flex;
}

.box {
  border: 1px solid #cccccc;
  padding: 0.5em;
  margin: 10px;
  inline-size: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("inline-size", "", "300px")}}

### Logische Rand-, Geometrie- und Auffüllungseigenschaften

In den letzten beiden Lektionen haben wir das CSS-Boxmodell und CSS-Ränder kennengelernt. In den Rand-, Geometrie- und Auffüllungseigenschaften finden Sie viele Instanzen physischer Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}} und {{cssxref("border-bottom")}}. Ebenso wie wir Zuordnungen für Breite und Höhe haben, gibt es auch Zuordnungen für diese Eigenschaften.

Die `margin-top`-Eigenschaft ist {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Rand am Anfang der Blockdimension.

Die {{cssxref("padding-left")}}-Eigenschaft wird auf die {{cssxref("padding-inline-start")}} abgebildet, die Auffüllung, die am Anfang der Inlinerichtung angewendet wird. Dies wird dort sein, wo Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft wird auf {{cssxref("border-block-end")}} abgebildet, was die Grenze am Ende der Blockdimension ist.

Sie können unten einen Vergleich zwischen physischen und logischen Eigenschaften sehen.

Wenn Sie den Schreibmodus der Kästchen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` in `vertical-rl` ändern, werden Sie sehen, wie die physischen Eigenschaften an ihrer physischen Richtung gebunden bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.

Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} eine schwarze `border-bottom` hat. Können Sie herausfinden, wie Sie diese untere Grenze immer unter dem Text in beiden Schreibmodi platzieren können?

```html live-sample___logical-mbp
<div class="wrapper">
  <div class="box physical">
    <h2>Physical Properties</h2>
    <p>A paragraph demonstrating logical properties in CSS.</p>
  </div>
  <div class="box logical">
    <h2>Logical Properties</h2>
    <p>A paragraph demonstrating logical properties in CSS.</p>
  </div>
</div>
```

```css live-sample___logical-mbp
.wrapper {
  display: flex;
  border: 5px solid #cccccc;
}

.box {
  margin-right: 30px;
  inline-size: 200px;
  writing-mode: horizontal-tb;
}

.logical {
  margin-block-start: 20px;
  padding-inline-end: 2em;
  padding-block-start: 2px;
  border-block-start: 5px solid pink;
  border-inline-end: 10px dotted rebeccapurple;
  border-block-end: 1em double orange;
  border-inline-start: 1px solid black;
}

.physical {
  margin-top: 20px;
  padding-right: 2em;
  padding-top: 2px;
  border-top: 5px solid pink;
  border-right: 10px dotted rebeccapurple;
  border-bottom: 1em double orange;
  border-left: 1px solid black;
}

h2 {
  border-bottom: 5px solid black;
}
```

{{EmbedLiveSample("logical-mbp", "", "200px")}}

Es gibt eine große Anzahl von Eigenschaften, wenn man all die einzelnen Randvarianten berücksichtigt, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Bisher haben wir uns logische Eigenschaftsnamen angesehen. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` annehmen. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Sie können beispielsweise ein Bild nach links fließen lassen, damit der Text um das Bild herumläuft. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel in `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` in `inline-end`, um den Fluss zu ändern:

```html live-sample___float
<div class="wrapper">
  <div class="box logical">
    <img
      alt="star"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
    <p>
      This box uses logical properties. The star image has been floated
      inline-start, it also has a margin on the inline-end and block-end.
    </p>
  </div>
</div>
```

```css live-sample___float
.wrapper {
  display: flex;
}

.box {
  margin: 10px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  inline-size: 200px;
  writing-mode: horizontal-tb;
}

img {
  float: inline-start;
  margin-inline-end: 10px;
  margin-block-end: 10px;
}
```

{{EmbedLiveSample("float", "", "200px")}}

Hier verwenden wir auch logische Randwerte, um sicherzustellen, dass der Rand unabhängig vom Schreibmodus an der richtigen Stelle ist.

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Äquivalente und wurden daher erst kürzlich in Browsern implementiert. Sie können die Browserunterstützung für jede Eigenschaftsseite auf MDN überprüfen, um zu sehen, wie weit die Unterstützung zurückreicht. Wenn Sie keine mehreren Schreibmodi verwenden, bevorzugen Sie möglicherweise vorerst die physischen Versionen. Auf lange Sicht erwarten wir jedoch, dass die meisten Menschen zu den logischen Versionen für die meisten Dinge übergehen, da sie viel Sinn ergeben, wenn Sie auch mit Layoutmethoden wie Flexbox und Grid arbeiten.

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS zunehmend wichtig. Ein Verständnis der Block- und Inlinerichtung — und wie sich der Textfluss mit einer Änderung des Schreibmodus ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, selbst wenn Sie niemals einen anderen Schreibmodus als einen horizontalen verwenden.
