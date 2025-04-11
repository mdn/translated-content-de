---
title: Umgang mit verschiedenen Textrichtungen
short-title: Mehrere Textrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernen kennengelernt haben, sind mit den physischen Abmessungen unseres Bildschirms verbunden. Wir erstellen beispielsweise Ränder oben, rechts, unten und links eines Kastens. Diese physischen Abmessungen passen sehr gut zu Inhalten, die horizontal angezeigt werden, und standardmäßig unterstützt das Web tendenziell Sprachen, die von links nach rechts gelesen werden (z. B. Englisch oder Französisch), besser als Sprachen, die von rechts nach links gelesen werden (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um eine bessere Unterstützung für unterschiedliche Ausrichtungen von Inhalten zu bieten, einschließlich von rechts nach links, aber auch von oben nach unten verlaufender Inhalte (wie Japanisch) – diese unterschiedlichen Ausrichtungen werden als **Schreibmodi** bezeichnet. Wenn Sie in Ihrem Studium voranschreiten und beginnen, mit Layouts zu arbeiten, wird Ihnen ein Verständnis von Schreibmodi sehr hilfreich sein, daher werden wir sie jetzt einführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >), und ein Verständnis davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die Bedeutung von Schreibmodi in modernem CSS verstehen.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Die {{cssxref("writing-mode")}}-Eigenschaft ermöglicht es uns, von einem Schreibmodus in einen anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen – Sie könnten den Schreibmodus von Teilen Ihres Layouts auch zu kreativen Zwecken ändern.

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

Die drei möglichen Werte für die [`writing-mode`](/de/docs/Web/CSS/writing-mode)-Eigenschaft sind:

- `horizontal-tb`: Blockflussrichtung von oben nach unten. Sätze verlaufen horizontal.
- `vertical-rl`: Blockflussrichtung von rechts nach links. Sätze verlaufen vertikal.
- `vertical-lr`: Blockflussrichtung von links nach rechts. Sätze verlaufen vertikal.

Die `writing-mode`-Eigenschaft legt tatsächlich die Richtung fest, in der Blockelemente auf der Seite angezeigt werden – entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der der Text in den Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits über das [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) gesprochen und darüber, dass einige Dinge als Blockelemente und andere als Inline-Elemente angezeigt werden. Wie oben beschrieben, sind Block- und Inline-Darstellungen an den Schreibmodus des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie im Englischen.

Wenn wir uns ein Beispiel ansehen, wird dies deutlicher. Im nächsten Beispiel habe ich zwei Kästchen, die eine Überschrift und einen Absatz enthalten. Das erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten geschrieben wird. Das zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links geschrieben wird.

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

Wenn wir den Schreibmodus wechseln, ändern wir, welche Richtung Block und welche Inline ist. In einem `horizontal-tb`-Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl`-Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Blockdimension** ist immer die Richtung, in der Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inlinedimension** ist immer die Richtung, in der ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Die Block- und Inlinachsen in einem horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Die Block- und Inlinachsen in einem vertikalen Schreibmodus.](vertical.png)

Sobald Sie beginnen, sich mit CSS-Layouts und insbesondere mit den neueren Layoutmethoden zu befassen, wird diese Idee von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Zusätzlich zum Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist nichts, was Sie wahrscheinlich kreativ nutzen werden – wenn Sie etwas rechtsbündig ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun – dennoch ist es wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen gedacht, die von links nach rechts angezeigt werden!

Aufgrund der Tatsache, dass der Schreibmodus und die Textrichtung sich ändern können, beziehen sich neuere CSS-Layoutmethoden nicht auf links und rechts, oben und unten. Stattdessen sprechen sie über _Anfang_ und _Ende_ zusammen mit dieser Idee von Inline und Block. Machen Sie sich darüber jetzt noch keine Sorgen, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie beginnen, sich mit Layouts zu beschäftigen; Sie werden wirklich hilfreich sein, um CSS zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, über Schreibmodi und Richtung zu sprechen, liegt darin, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Abmessungen des Bildschirms gebunden sind, und diese machen in einem horizontalen Schreibmodus mehr Sinn.

Sehen wir uns unsere beiden Kästchen noch einmal an – eines mit einem `horizontal-tb`-Schreibmodus und eines mit `vertical-rl`. Ich habe beiden Kästchen eine {{cssxref("width")}} zugewiesen. Sie können sehen, dass das Kästchen im vertikalen Schreibmodus immer noch eine Breite hat, was dazu führt, dass der Text überläuft.

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

Was wir in diesem Szenario wirklich wollen, ist im Wesentlichen die Höhe mit der Breite im Einklang mit dem Schreibmodus zu tauschen. Wenn wir in einem vertikalen Schreibmodus sind, möchten wir, dass sich das Kästchen in der Blockdimension ausdehnt, genau wie es im horizontalen Modus der Fall ist.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften – wie `width` und `height` – durch **logische** oder **flussabhängige** Versionen.

Die der `width` zugeordnete Eigenschaft im horizontalen Schreibmodus wird {{cssxref("inline-size")}} genannt – sie bezieht sich auf die Größe in der Inlinedimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Blockdimension. Sie können in dem folgenden Beispiel sehen, wie das funktioniert, wenn wir `width` durch `inline-size` ersetzen.

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

### Logische Margin-, Border- und Padding-Eigenschaften

In den letzten beiden Lektionen haben wir das CSS-Boxmodell und CSS-Ränder kennengelernt. Bei den Margin-, Border- und Padding-Eigenschaften finden Sie viele Instanzen von physischen Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, und {{cssxref("border-bottom")}}. Auf die gleiche Weise, wie wir Zuordnungen für Breite und Höhe haben, gibt es Zuordnungen für diese Eigenschaften.

Die `margin-top`-Eigenschaft wird zu {{cssxref("margin-block-start")}} zugeordnet – dies verweist immer auf den Margin am Anfang der Blockdimension.

Die {{cssxref("padding-left")}}-Eigenschaft wird zu {{cssxref("padding-inline-start")}} zugeordnet, dem Padding, das an den Anfang der Inlinerichtung angewendet wird. Dies ist der Punkt, an dem Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft wird zu {{cssxref("border-block-end")}} zugeordnet, welches die Grenze am Ende der Blockdimension ist.

Sie können unten einen Vergleich zwischen physischen und logischen Eigenschaften sehen.

Wenn Sie den Schreibmodus der Kästchen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` zu `vertical-rl` ändern, werden Sie sehen, dass die physischen Eigenschaften mit ihrer physischen Richtung verbunden bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.

Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} eine schwarze `border-bottom` hat. Können Sie herausfinden, wie Sie diese untere Grenze immer unter dem Text in beiden Schreibmodi setzen können?

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

Es gibt eine große Anzahl von Eigenschaften, wenn Sie alle einzelnen Border-Longhands berücksichtigen, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Wir haben bisher logische Eigenschaftsnamen betrachtet. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom`, und `left` annehmen. Diese Werte haben auch Zuordnungen zu logischen Werten – `block-start`, `inline-end`, `block-end`, und `inline-start`.

Zum Beispiel können Sie ein Bild nach links floaten lassen, um den Text um das Bild herumlaufen zu lassen. Sie könnten `left` mit `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel zu `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um die Float-Richtung zu ändern:

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

Hier verwenden wir auch logische Margin-Werte, um sicherzustellen, dass der Margin unabhängig vom Schreibmodus an der richtigen Stelle ist.

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Äquivalente und wurden daher erst kürzlich in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN nachsehen, wie weit die Browser-Unterstützung zurückreicht. Wenn Sie keine mehreren Schreibmodi verwenden, ziehen Sie es möglicherweise vor, derzeit die physischen Versionen zu verwenden. Letztendlich erwarten wir jedoch, dass die meisten Menschen zu den logischen Versionen wechseln werden, da sie viel Sinn machen, sobald Sie auch mit Layoutmethoden wie Flexbox und Grid arbeiten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich das Wichtigste merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Schreibmodi und logische Eigenschaften](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Writing_modes).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS immer wichtiger. Ein Verständnis der Block- und Inlinerichtung – und wie sich der Textfluss mit einem Schreibmoduswechsel ändert – wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, selbst wenn Sie niemals einen anderen Schreibmodus als einen horizontalen verwenden.
