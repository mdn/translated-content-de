---
title: Umgang mit verschiedenen Schreibrichtungen
short-title: Mehrfache Schreibrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

Viele der Eigenschaften und Werte, die wir bisher beim Erlernen von CSS behandelt haben, sind an die physischen Dimensionen unseres Bildschirms gebunden. Wir erstellen zum Beispiel Rahmen oben, rechts, unten und links an einer Box. Diese physischen Dimensionen passen sehr gut zu horizontal angezeigten Inhalten, und standardmäßig unterstützt das Web tendenziell Sprachen, die von links nach rechts verlaufen (z. B. Englisch oder Französisch), besser als solche, die von rechts nach links gelesen werden (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch so weiterentwickelt, dass es die unterschiedliche Richtung von Inhalten besser unterstützt, einschließlich von rechts nach links und auch von oben nach unten verlaufender Inhalte (wie z. B. Japanisch) — diese unterschiedlichen Richtungen werden als **Schreibmodi** bezeichnet. Wenn Sie im weiteren Verlauf Ihres Studiums beginnen, mit Layouts zu arbeiten, wird ein Verständnis der Schreibmodi sehr hilfreich für Sie sein, weshalb wir sie jetzt einführen.

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
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
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

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Die {{cssxref("writing-mode")}}-Eigenschaft ermöglicht es uns, von einem Schreibmodus in einen anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies zu tun — Sie könnten den Schreibmodus auch aus kreativen Gründen für Teile Ihres Layouts ändern.

Im folgenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text verläuft jetzt vertikal. Vertikaler Text ist in der Grafikdesign-Welt üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

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

Die drei möglichen Werte für die {{cssxref("writing-mode")}}-Eigenschaft sind:

- `horizontal-tb`: Oben-nach-unten-Blockflussrichtung. Sätze verlaufen horizontal.
- `vertical-rl`: Rechts-nach-links-Blockflussrichtung. Sätze verlaufen vertikal.
- `vertical-lr`: Links-nach-rechts-Blockflussrichtung. Sätze verlaufen vertikal.

Die `writing-mode`-Eigenschaft legt in Wirklichkeit die Richtung fest, in der Blocklevel-Elemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der Text in Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits das [Block- und Inline-Layout](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) besprochen und die Tatsache, dass einige Dinge als Blockelemente und andere als Inline-Elemente angezeigt werden. Wie oben beschrieben, sind Block und Inline an den Schreibmodus des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie im Englischen.

Wenn wir uns ein Beispiel ansehen, wird dies klarer. In diesem nächsten Beispiel habe ich zwei Boxen, die eine Überschrift und einen Absatz enthalten. Die erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten verläuft. Die zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links verläuft.

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

Wenn wir den Schreibmodus wechseln, ändern wir, welche Richtung Block und welche Inline ist. In einem `horizontal-tb`-Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl`-Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Blockdimension** ist also immer die Richtung, in der Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inlinedimension** ist immer die Richtung, in der ein Satz verläuft.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.

![Anzeige der Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Anzeige der Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie beginnen, sich mit CSS-Layouts zu befassen, insbesondere mit den neueren Layoutmethoden, wird diese Idee von Block und Inline sehr wichtig. Wir werden darauf später noch einmal zurückkommen.

### Richtung

Neben dem Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist wahrscheinlich nichts, was Sie kreativ nutzen würden — wenn Sie etwas rechtsbündig ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun — aber es ist wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Da sich Schreibmodus und Textrichtung ändern können, beziehen sich neuere CSS-Layout-Methoden nicht auf links und rechts sowie oben und unten. Stattdessen sprechen sie von _Start_ und _Ende_ zusammen mit diesem Konzept von Inline und Block. Machen Sie sich darüber jetzt noch nicht zu viele Sorgen, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie anfangen, sich mit Layouts zu beschäftigen; Sie werden es wirklich hilfreich finden, um CSS zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, warum wir an diesem Punkt Ihres Lernens über Schreibmodi und Richtung sprechen, ist der, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind, und diese machen mehr Sinn bei einem horizontalen Schreibmodus.

Schauen wir uns unsere beiden Boxen noch einmal an — eine mit einem `horizontal-tb`-Schreibmodus und eine mit `vertical-rl`. Ich habe beiden Boxen eine {{cssxref("width")}} zugeordnet. Sie können sehen, dass, wenn sich die Box im vertikalen Schreibmodus befindet, sie immer noch eine Breite hat, was dazu führt, dass der Text überläuft.

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

Was wir in diesem Szenario wirklich wollen, ist im Wesentlichen, die Höhe mit der Breite gemäß dem Schreibmodus zu tauschen. Wenn wir uns in einem vertikalen Schreibmodus befinden, möchten wir, dass sich die Box in der Blockdimension ausdehnt, genau wie im horizontalen Modus.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften — Dinge wie `width` und `height` — durch **logische** oder **flussrelativierte** Versionen.

Die Eigenschaft, die `width` im horizontalen Schreibmodus zugeordnet ist, wird {{cssxref("inline-size")}} genannt — sie bezieht sich auf die Größe in der Inlinedimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Blockdimension. Sie können sehen, wie dies im folgenden Beispiel funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

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

### Logische Rand-, Rahmen- und Auffülleigenschaften

In den letzten beiden Lektionen haben wir das CSS-Boxmodell und CSS-Rahmen gelernt. Bei den Rand-, Rahmen- und Auffülleigenschaften finden Sie viele Fälle von physischen Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}} und {{cssxref("border-bottom")}}. Genau wie wir Zuordnungen für Breite und Höhe haben, gibt es auch Zuordnungen für diese Eigenschaften.

Die `margin-top`-Eigenschaft wird {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Rand am Anfang der Blockdimension.

Die {{cssxref("padding-left")}}-Eigenschaft wird zu {{cssxref("padding-inline-start")}} zugeordnet, der Auffüllung, die zu Beginn der Inlinerichtung angewendet wird. Dies wird dort sein, wo Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft wird zu {{cssxref("border-block-end")}} zugeordnet, was dem Rahmen am Ende der Blockdimension entspricht.

Sie können unten einen Vergleich zwischen physischen und logischen Eigenschaften sehen.

Wenn Sie den Schreibmodus der Boxen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` auf `vertical-rl` umschalten, werden Sie sehen, wie die physischen Eigenschaften an ihrer physischen Richtung bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.

Sie können auch sehen, dass die {{htmlelement("Heading_Elements", "h2")}} ein schwarzes `border-bottom` hat. Können Sie herausfinden, wie dieser untere Rahmen immer unter dem Text in beiden Schreibmodi verlaufen kann?

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

Es gibt eine große Anzahl von Eigenschaften, wenn Sie alle einzelnen Rahmen-Langschreibweisen betrachten, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) sehen.

### Logische Werte

Wir haben uns bisher logische Eigenschaftsnamen angeschaut. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` nehmen. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Zum Beispiel können Sie ein Bild nach links fließen lassen, um den Text um das Bild herum verlaufen zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel auf `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um das Float zu ändern:

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

Hier verwenden wir auch logische Randwerte, um sicherzustellen, dass der Rand an der richtigen Stelle ist, egal welcher Schreibmodus verwendet wird.

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Entsprechungen und wurden daher erst kürzlich in Browsern implementiert. Sie können jede Eigenschaftsseite auf MDN überprüfen, um zu sehen, wie weit die Browserunterstützung zurückgeht. Wenn Sie nicht mehrere Schreibmodi verwenden, bevorzugen Sie möglicherweise vorerst die physischen Versionen. Letztendlich erwarten wir jedoch, dass die Leute zu den logischen Versionen für die meisten Dinge übergehen werden, da sie viel Sinn machen, wenn Sie auch beginnen, sich mit Layoutmethoden wie Flexbox und Grid zu beschäftigen.

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS immer wichtiger. Ein Verständnis der Block- und Inlinerichtung — und wie sich der Textfluss mit einem Wechsel des Schreibmodus ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen beim Verständnis von CSS helfen, selbst wenn Sie nie einen anderen Schreibmodus als einen horizontalen verwenden.
