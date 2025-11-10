---
title: Umgang mit verschiedenen Textrichtungen
short-title: Mehrere Textrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernen behandelt haben, sind an die physischen Abmessungen unseres Bildschirms gebunden. Zum Beispiel erstellen wir Ränder oben, rechts, unten und links von einem Kasten. Diese physischen Abmessungen passen sehr gut zu Inhalten, die horizontal angezeigt werden, und standardmäßig neigt das Web dazu, links-nach-rechts Sprachen (z. B. Englisch oder Französisch) besser zu unterstützen als rechts-nach-links Sprachen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um die unterschiedliche Richtungsorientierung von Inhalten besser zu unterstützen, einschließlich rechts-nach-links, aber auch oben-nach-unten Inhalten (wie Japanisch) — diese unterschiedlichen Richtungen werden als **Schriftmodi** bezeichnet. Wenn Sie Ihr Studium fortsetzen und mit Layouts arbeiten, wird ein Verständnis der Schriftmodi sehr hilfreich sein. Deshalb führen wir sie jetzt ein.

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
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Bedeutung von Schriftmodi in modernem CSS.</td>
    </tr>
  </tbody>
</table>

## Was sind Schriftmodi?

Ein Schriftmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Die {{cssxref("writing-mode")}} Eigenschaft ermöglicht es uns, von einem Schriftmodus zu einem anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schriftmodus verwendet, um dies tun zu wollen — Sie könnten den Schriftmodus auch aus kreativen Gründen in Teilen Ihres Layouts ändern wollen.

Im folgenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text verläuft jetzt vertikal. Vertikaler Text ist in der Grafikgestaltung üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

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

Die drei möglichen Werte für die [`writing-mode`](/de/docs/Web/CSS/Reference/Properties/writing-mode) Eigenschaft sind:

- `horizontal-tb`: Block-Flussrichtung von oben nach unten. Sätze verlaufen horizontal.
- `vertical-rl`: Block-Flussrichtung von rechts nach links. Sätze verlaufen vertikal.
- `vertical-lr`: Block-Flussrichtung von links nach rechts. Sätze verlaufen vertikal.

Die `writing-mode` Eigenschaft legt also tatsächlich die Richtung fest, in der Blocklevel-Elemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der Text in Sätzen fließt.

## Schriftmodi und Block- und Inline-Layout

Wir haben bereits über [Block- und Inline-Layout](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) gesprochen und darüber, dass einige Dinge als Blockelemente angezeigt werden und andere als Inline-Elemente. Wie oben beschrieben, hängt Block und Inline vom Schriftmodus des Dokuments ab und nicht vom physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schriftmodus verwenden, der Text horizontal anzeigt, wie Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies klarer. Im nächsten Beispiel habe ich zwei Kästen, die eine Überschrift und einen Absatz enthalten. Der erste verwendet `writing-mode: horizontal-tb`, einen Schriftmodus, der horizontal und von oben nach unten geschrieben wird. Der zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schriftmodus, der vertikal und von rechts nach links geschrieben wird.

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

Wenn wir den Schriftmodus wechseln, ändern wir, in welcher Richtung Block- und Inlineelemente verlaufen. In einem `horizontal-tb` Schriftmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl` Schriftmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Blockdimension** ist immer die Richtung, in der Blöcke auf der Seite im verwendeten Schriftmodus angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in der ein Satz verläuft.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schriftmodus.![Die Block- und Inlinachse für einen horizontalen Schriftmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schriftmodus.

![Die Block- und Inlinachse für einen vertikalen Schriftmodus.](vertical.png)

Sobald Sie anfangen, sich mit dem CSS-Layout zu befassen, und insbesondere mit den neueren Layout-Methoden, wird diese Idee von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Zusätzlich zum Schriftmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist wahrscheinlich nichts, was Sie aus kreativen Gründen verwenden würden — wenn Sie etwas auf der rechten Seite ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun — es ist jedoch wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Da sich Schriftmodus und Textrichtung ändern können, beziehen sich neuere CSS-Layout-Methoden nicht auf links und rechts sowie oben und unten. Stattdessen wird von _Start_ und _Ende_ gesprochen, zusammen mit der Idee von Inline und Block. Machen Sie sich darüber jetzt keine Sorgen, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie anfangen, sich mit Layouts zu beschäftigen; es wird Ihnen sehr bei Ihrem Verständnis von CSS helfen.

## Logische Eigenschaften und Werte

Der Grund, warum wir an diesem Punkt Ihres Lernens über Schriftmodi und Richtung sprechen, ist, dass wir bereits viele Eigenschaften behandelt haben, die an die physischen Abmessungen des Bildschirms gebunden sind, und diese ergeben mehr Sinn in einem horizontalen Schriftmodus.

Schauen wir uns unsere beiden Kästen noch einmal an — einen mit einem `horizontal-tb` Schriftmodus und einen mit `vertical-rl`. Ich habe beiden Kästen eine {{cssxref("width")}} gegeben. Sie können sehen, dass der Kasten im vertikalen Schriftmodus immer noch eine Breite hat und dies dazu führt, dass der Text überläuft.

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

Was wir in diesem Szenario wirklich wollen, ist im Wesentlichen die Höhe mit der Breite in Übereinstimmung mit dem Schriftmodus zu tauschen. Wenn wir in einem vertikalen Schriftmodus sind, möchten wir, dass der Kasten sich in der Blockdimension ebenso ausdehnt wie im horizontalen Modus.

Um dies zu vereinfachen, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften — Dinge wie `width` und `height` — durch **logische** oder **flussrelative** Versionen.

Die Eigenschaft, die `width` im horizontalen Schriftmodus zugeordnet ist, heißt {{cssxref("inline-size")}} — sie bezieht sich auf die Größe in der Inlinedimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Blockdimension. Sie können sehen, wie dies im folgenden Beispiel funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

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

### Logische Margin-, Border- und Padding-Eigenschaften

In den letzten beiden Lektionen haben wir über das CSS-Box-Modell und CSS-Ränder gelernt. In den Eigenschaften für Margin, Border und Padding finden Sie viele Fälle von physischen Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}} und {{cssxref("border-bottom")}}. In gleicher Weise wie bei der Zuordnung von Breite und Höhe gibt es Zuordnungen für diese Eigenschaften.

Die `margin-top` Eigenschaft wird zu {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Margin am Anfang der Blockdimension.

Die {{cssxref("padding-left")}} Eigenschaft wird zu {{cssxref("padding-inline-start")}} zugeordnet, das Padding, das am Anfang der Inlinerichtung angewendet wird. Dies wird der Punkt sein, an dem Sätze in diesem Schriftmodus beginnen. Die {{cssxref("border-bottom")}} Eigenschaft wird zu {{cssxref("border-block-end")}} zugeordnet, was der Rand am Ende der Blockdimension ist.

Unten sehen Sie einen Vergleich zwischen physischen und logischen Eigenschaften.

Wenn Sie den Schriftmodus der Kästen ändern, indem Sie die `writing-mode` Eigenschaft auf `.box` auf `vertical-rl` umstellen, werden Sie sehen, wie die physischen Eigenschaften an ihrer physischen Richtung gebunden bleiben, während die logischen Eigenschaften mit dem Schriftmodus wechseln.

Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} eine schwarze `border-bottom` hat. Können Sie herausfinden, wie Sie diesen unteren Rand immer unter den Text bringen können, egal in welchem Schriftmodus?

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

Es gibt eine große Anzahl von Eigenschaften, wenn man alle einzelnen langen Border-Eigenschaften in Betracht zieht, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) sehen.

### Logische Werte

Wir haben bisher logische Eigenschaftsnamen betrachtet. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` annehmen. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Zum Beispiel können Sie ein Bild nach links floaten lassen, um Text um das Bild herumwickeln zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schriftmodus in diesem Beispiel auf `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um das Float zu ändern:

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

Hier verwenden wir auch logische Margin-Werte, um sicherzustellen, dass das Margin unabhängig vom Schriftmodus an der richtigen Stelle ist.

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Äquivalente und wurden daher erst kürzlich in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN nachsehen, wie weit zurück die Browserunterstützung reicht. Wenn Sie keine mehrfachen Schriftmodi verwenden, ziehen Sie es möglicherweise vor, vorerst die physischen Versionen zu verwenden. Auf lange Sicht erwarten wir jedoch, dass die meisten Menschen zu den logischen Versionen übergehen, da sie sehr sinnvoll sind, sobald Sie auch mit Layout-Methoden wie Flexbox und Grid arbeiten.

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS zunehmend wichtig. Ein Verständnis der Block- und Inlinerichtung — und wie sich der Textfluss mit einem Wechsel des Schriftmodus ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, auch wenn Sie niemals einen anderen Schriftmodus als einen horizontalen verwenden.
