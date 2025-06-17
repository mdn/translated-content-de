---
title: Umgang mit unterschiedlichen Schreibrichtungen
short-title: Mehrere Schreibrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: e47ecbb9beee1f7f6b22376686be75b15bb73638
---

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernprozess kennengelernt haben, sind an die physikalischen Dimensionen unseres Bildschirms gebunden. Wir erstellen zum Beispiel Ränder oben, rechts, unten und links eines Kastens. Diese physikalischen Dimensionen passen sehr gut zu horizontalem Inhalt, und standardmäßig unterstützt das Web tendenziell Sprachen von links nach rechts (z. B. Englisch oder Französisch) besser als Sprachen von rechts nach links (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um die unterschiedliche Richtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) — diese unterschiedlichen Richtungen werden als **Schreibmodi** bezeichnet. Wenn Sie sich in Ihrem Studium weiterentwickeln und anfangen, mit Layouts zu arbeiten, wird ein Verständnis der Schreibmodi sehr hilfreich für Sie sein, daher führen wir sie jetzt ein.

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
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen der Gestaltung</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis der Bedeutung von Schreibmodi für modernes CSS.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal läuft. Die {{cssxref("writing-mode")}}-Eigenschaft ermöglicht es uns, von einem Schreibmodus zu einem anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen — Sie könnten den Schreibmodus auch für kreative Zwecke in Teilen Ihres Layouts ändern.

Im folgenden Beispiel haben wir eine Überschrift mit `writing-mode: vertical-rl` dargestellt. Der Text läuft jetzt vertikal. Vertikaler Text ist im Grafikdesign üblich und kann eine Möglichkeit sein, Ihrem Webdesign einen interessanteren Look zu verleihen.

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

Die drei möglichen Werte für die [`writing-mode`](/de/docs/Web/CSS/writing-mode)-Eigenschaft sind:

- `horizontal-tb`: Blockfließrichtung von oben nach unten. Sätze laufen horizontal.
- `vertical-rl`: Blockfließrichtung von rechts nach links. Sätze laufen vertikal.
- `vertical-lr`: Blockfließrichtung von links nach rechts. Sätze laufen vertikal.

Die `writing-mode`-Eigenschaft legt also in Wirklichkeit die Richtung fest, in der Block-Elemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der der Text in Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits das [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) besprochen und die Tatsache, dass einige Dinge als Block-Elemente und andere als Inline-Elemente dargestellt werden. Wie oben beschrieben, sind Block und Inline an den Schreibmodus des Dokuments und nicht an den physischen Bildschirm gebunden. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal darstellt, wie Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies klarer. In diesem nächsten Beispiel habe ich zwei Kästen, die eine Überschrift und einen Absatz enthalten. Der erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben auf der Seite nach unten geschrieben wird. Der zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links geschrieben wird.

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
  border: 1px solid #ccc;
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

Wenn wir den Schreibmodus ändern, ändern wir, welche Richtung Block ist und welche Inline. In einem `horizontal-tb`-Schreibmodus verläuft die Block-Richtung von oben nach unten; in einem `vertical-rl`-Schreibmodus verläuft die Block-Richtung horizontal von rechts nach links. Die **Block-Dimension** ist also immer die Richtung, in der die Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in der ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Visualisierung der Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Visualisierung der Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie mit CSS-Layouts beginnen, insbesondere mit den neueren Layoutmethoden, wird dieses Konzept von Block und Inline sehr wichtig. Wir werden es später noch einmal behandeln.

### Richtung

Zusätzlich zum Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist wahrscheinlich nichts, was Sie kreativ nutzen würden — wenn Sie etwas nach rechts ausrichten wollen, gibt es andere Möglichkeiten, dies zu tun — es ist jedoch wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts dargestellt werden!

Da sich der Schreibmodus und die Richtung des Textes ändern können, beziehen sich neuere CSS-Layoutmethoden nicht auf links und rechts sowie oben und unten. Stattdessen sprechen sie von _Start_ und _Ende_ zusammen mit der Idee von Inline und Block. Machen Sie sich darüber jetzt nicht zu viele Sorgen, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie anfangen, sich mit Layouts zu befassen; es wird Ihnen sehr helfen, CSS zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, warum wir zu diesem Zeitpunkt Ihrer Ausbildung über Schreibmodi und Richtung sprechen, ist, dass wir bereits viele Eigenschaften betrachtet haben, die an die physikalischen Dimensionen des Bildschirms gebunden sind, und diese machen mehr Sinn in einem horizontalen Schreibmodus.

Schauen wir uns unsere beiden Kästen erneut an — einen mit einem `horizontal-tb`-Schreibmodus und einen mit `vertical-rl`. Ich habe beiden Kästen eine {{cssxref("width")}} gegeben. Sie können sehen, dass, wenn der Kasten im vertikalen Schreibmodus ist, er immer noch eine Breite hat, was dazu führt, dass der Text überläuft.

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
  border: 1px solid #ccc;
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

Was wir in diesem Szenario wirklich wollen, ist im Wesentlichen, die Höhe mit der Breite im Einklang mit dem Schreibmodus zu tauschen. Wenn wir in einem vertikalen Schreibmodus sind, möchten wir, dass sich der Kasten in der Block-Dimension ausdehnt, genau wie er es im horizontalen Modus tut.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physikalische Eigenschaften — Dinge wie `width` und `height` — durch **logische** oder **fluss-relative** Versionen.

Die Eigenschaft, die der `width` im horizontalen Schreibmodus zugeordnet ist, wird {{cssxref("inline-size")}} genannt — sie bezieht sich auf die Größe in der Inline-Dimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Block-Dimension. Sie können sehen, wie dies im folgenden Beispiel funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

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
  border: 1px solid #ccc;
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

### Logische Rand-, Rahmen- und Polstereigenschaften

In den letzten beiden Lektionen haben wir das CSS-Boxmodell und CSS-Rahmen kennengelernt. Bei den Rand-, Rahmen- und Polstereigenschaften finden Sie viele Instanzen von physikalischen Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}} und {{cssxref("border-bottom")}}. Auf die gleiche Weise, wie wir Zuordnungen für Breite und Höhe haben, gibt es Zuordnungen für diese Eigenschaften.

Die `margin-top`-Eigenschaft wird zu {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Rand am Anfang der Block-Dimension.

Die {{cssxref("padding-left")}}-Eigenschaft wird zu {{cssxref("padding-inline-start")}}, dem Polster, das am Anfang der Inline-Richtung angewendet wird. Dies ist der Punkt, an dem Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft wird zu {{cssxref("border-block-end")}}, was den Rahmen am Ende der Block-Dimension darstellt.

Unten sehen Sie einen Vergleich zwischen physikalischen und logischen Eigenschaften.

Wenn Sie den Schreibmodus der Kästchen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` zu `vertical-rl` ändern, werden Sie sehen, wie die physikalischen Eigenschaften an ihre physikalische Richtung gebunden bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.

Sie können auch sehen, dass die {{htmlelement("Heading_Elements", "h2")}} eine schwarze `border-bottom` hat. Können Sie herausfinden, wie Sie diesen unteren Rahmen immer unter den Text in beiden Schreibmodi verschieben können?

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
  border: 5px solid #ccc;
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

Es gibt eine große Anzahl von Eigenschaften, wenn Sie alle einzelnen Rahmen-Langhands berücksichtigen, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Bisher haben wir logische Eigenschaftsnamen betrachtet. Es gibt auch einige Eigenschaften, die physikalische Werte von `top`, `right`, `bottom` und `left` nehmen. Diese Werte haben auch Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Zum Beispiel können Sie ein Bild links flottieren lassen, um Text darum herum zu fließen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel zu `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um die Float-Änderung zu bewirken:

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
  border: 1px solid #ccc;
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

### Sollten Sie physikalische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physikalischen Entsprechungen und wurden daher erst vor kurzem in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN überprüfen, wie weit die Browser-Unterstützung zurückreicht. Wenn Sie keine mehreren Schreibmodi verwenden, ziehen Sie es möglicherweise vor, für den Moment die physikalischen Versionen zu verwenden. Letztendlich erwarten wir jedoch, dass die Menschen für die meisten Dinge zu den logischen Versionen wechseln, da diese viel Sinn machen, wenn Sie auch anfangen, mit Layoutmethoden wie Flexbox und Grid zu arbeiten.

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS zunehmend wichtiger. Ein Verständnis der Block- und Inline-Richtung und wie sich der Textfluss mit einer Änderung des Schreibmodus ändert, wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, auch wenn Sie niemals einen anderen Schreibmodus als einen horizontalen verwenden.
