---
title: Umgang mit verschiedenen Schreibrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{LearnSidebar}}

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernprozess kennengelernt haben, sind an die physischen Dimensionen unseres Bildschirms gebunden. Wir erstellen beispielsweise Ränder oben, rechts, unten und links von einem Kasten. Diese physischen Dimensionen passen sehr gut zu Inhalten, die horizontal betrachtet werden, und standardmäßig neigt das Web dazu, Links-nach-rechts-Sprachen (z.B. Englisch oder Französisch) besser zu unterstützen als Rechts-nach-links-Sprachen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um verschiedene Richtungen von Inhalten besser zu unterstützen, einschließlich Rechts-nach-links, aber auch von oben nach unten (wie im Japanischen) — diese verschiedenen Richtungen werden als **Schreibmodi** bezeichnet. Wenn Sie in Ihrem Studium fortschreiten und beginnen, mit Layout zu arbeiten, wird Ihnen das Verständnis der Schreibmodi sehr nützlich sein, deshalb stellen wir sie jetzt vor.

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
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die Bedeutung von Schreibmodi im modernen CSS zu verstehen.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Die {{cssxref("writing-mode")}}-Eigenschaft ermöglicht es uns, von einem Schreibmodus zu einem anderen zu wechseln. Es ist nicht notwendig, in einer Sprache zu arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen — Sie könnten auch den Schreibmodus von Teilen Ihres Layouts aus kreativen Gründen ändern.

Im folgenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` dargestellt wird. Der Text verläuft jetzt vertikal. Vertikaler Text ist in der Grafikgestaltung üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

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

- `horizontal-tb`: Von oben nach unten verlaufende Blockflussrichtung. Sätze verlaufen horizontal.
- `vertical-rl`: Von rechts nach links verlaufende Blockflussrichtung. Sätze verlaufen vertikal.
- `vertical-lr`: Von links nach rechts verlaufende Blockflussrichtung. Sätze verlaufen vertikal.

Die `writing-mode`-Eigenschaft legt also tatsächlich die Richtung fest, in der Blockelemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der Text in Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits über das [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) gesprochen und darüber, dass einige Dinge als Blockelemente und andere als Inline-Elemente angezeigt werden. Wie oben beschrieben ist Block und Inline an den Schreibmodus des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der den Text horizontal darstellt, wie z.B. Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies deutlicher. In diesem nächsten Beispiel habe ich zwei Kästen, die eine Überschrift und einen Absatz enthalten. Der erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten verläuft. Der zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links verläuft.

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

Wenn wir den Schreibmodus wechseln, ändern wir die Richtung, die Block und die Inline Richtung sind. In einem `horizontal-tb` Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl` Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Blockdimension** ist also immer die Richtung, in die Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in die ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.! [Anzeige der Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Anzeige der Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie beginnen, sich mit CSS-Layout zu beschäftigen, und insbesondere mit den neueren Layout-Methoden, wird diese Idee von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Zusätzlich zum Schreibmodus haben wir auch die Textausrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal geschrieben, jedoch von rechts nach links. Dies ist wahrscheinlich nicht etwas, das Sie kreativ nutzen — wenn Sie etwas rechtsbündig ausrichten möchten, gibt es andere Möglichkeiten dies zu tun — dennoch ist es wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen gedacht, die von links nach rechts angezeigt werden!

Da Schreibmodus und Textausrichtung sich ändern können, beziehen sich neuere CSS-Layout-Methoden nicht mehr auf links und rechts sowie oben und unten. Stattdessen sprechen sie von _Start_ und _Ende_ zusammen mit dieser Idee von Inline und Block. Machen Sie sich im Moment keine großen Gedanken darüber, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie mit dem Layout beginnen; das wird Ihnen wirklich helfen, CSS zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, warum wir an diesem Punkt Ihrer Schulung über Schreibmodi und Ausrichtung sprechen, ist, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind, und diese machen mehr Sinn, wenn sie in einem horizontalen Schreibmodus verwendet werden.

Sehen wir uns unsere beiden Kästen noch einmal an — einen mit einem `horizontal-tb` Schreibmodus und einen mit `vertical-rl`. Ich habe beiden Kästen eine {{cssxref("width")}} gegeben. Sie können sehen, dass der Text beim Kasten im vertikalen Schreibmodus immer noch eine Breite hat und dies zum Überlaufen des Textes führt.

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

In diesem Szenario möchten wir in Wirklichkeit die Höhe mit der Breite entsprechend dem Schreibmodus austauschen. Wenn wir uns in einem vertikalen Schreibmodus befinden, möchten wir, dass der Kasten in der Blockdimension expandiert, genauso wie er es im horizontalen Modus tut.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von abgebildeten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften — Dinge wie `width` und `height` — durch **logische** oder **flussrelative** Versionen.

Die Eigenschaft, die `width` im horizontalen Schreibmodus zugeordnet ist, wird {{cssxref("inline-size")}} genannt — sie bezieht sich auf die Größe in der Inline-Dimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und beschreibt die Größe in der Blockdimension. Sie können sehen, wie dies im folgenden Beispiel funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

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

### Logische Rand-, Rahmen- und Füllungseigenschaften

In den letzten beiden Lektionen haben wir über das CSS-Boxmodell und CSS-Rahmen gelernt. Bei den Rand-, Rahmen- und Füllungseigenschaften finden Sie viele Instanzen physischer Eigenschaften, z.B. {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, und {{cssxref("border-bottom")}}. Auf die gleiche Weise, wie wir Zuordnungen für Breite und Höhe haben, gibt es auch Zuordnungen für diese Eigenschaften.

Die `margin-top`-Eigenschaft wird zu {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Rand am Start der Blockdimension.

Die {{cssxref("padding-left")}}-Eigenschaft wird zu {{cssxref("padding-inline-start")}} zugeordnet, also der Füllung, die am Start der Inline-Dimension angewendet wird. Dies ist der Ort, an dem Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft wird zu {{cssxref("border-block-end")}}, dem Rahmen am Ende der Blockdimension.

Sie können unten einen Vergleich zwischen physischen und logischen Eigenschaften sehen.

Wenn Sie den Schreibmodus der Kästen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` auf `vertical-rl` setzen, werden Sie sehen, wie die physischen Eigenschaften an ihrer physischen Richtung bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.

Sie können auch sehen, dass die {{htmlelement("Heading_Elements", "h2")}} ein schwarzes `border-bottom` hat. Können Sie herausfinden, wie Sie den unteren Rand immer unterhalb des Textes in beiden Schreibmodi machen können?

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

Es gibt eine große Zahl von Eigenschaften, wenn Sie alle einzelnen Rahmen-Langformen in Betracht ziehen, und Sie können alle Zuordnungseigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](https://developer.mozilla.org/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Wir haben bisher logische Eigenschaftsnamen betrachtet. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` annehmen. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Zum Beispiel können Sie ein Bild links schwimmen lassen, um Text um das Bild herumfließen zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel auf `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um das Schwimmen zu ändern:

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

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Gegenstücke und wurden daher erst kürzlich in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN nachsehen, wie weit die Unterstützung in Browsern zurückreicht. Wenn Sie keine mehreren Schreibmodi verwenden, bevorzugen Sie möglicherweise vorerst die Verwendung der physischen Versionen. Allerdings erwarten wir letztendlich, dass die Leute zu den logischen Versionen für die meisten Dinge wechseln, da sie viel Sinn machen, wenn Sie auch beginnen, sich mit Layoutmethoden wie Flexbox und Grid zu beschäftigen.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Schreibmodi und logische Eigenschaften](/de/docs/Learn_web_development/Core/Styling_basics/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS zunehmend wichtig. Ein Verständnis der Block- und Inline-Richtung — und wie sich der Textfluss mit einem Wechsel des Schreibmodus ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, selbst wenn Sie nie einen anderen Schreibmodus als einen horizontalen verwenden.
