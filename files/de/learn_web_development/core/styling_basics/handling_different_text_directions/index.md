---
title: Umgang mit verschiedenen Schreibrichtungen
short-title: Mehrere Schreibrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernen kennengelernt haben, sind an die physikalischen Dimensionen unseres Bildschirms gebunden. Wir erstellen zum Beispiel Rahmen oben, rechts, unten und links an einem Kästchen. Diese physikalischen Dimensionen passen sehr gut zu Inhalten, die horizontal betrachtet werden, und standardmäßig unterstützt das Web von links nach rechts laufende Sprachen (z. B. Englisch oder Französisch) besser als von rechts nach links laufende Sprachen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um die unterschiedliche Richtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) – diese unterschiedlichen Richtungssysteme werden als **Schreibmodi** bezeichnet. Während Sie in Ihrem Studium fortschreiten und beginnen, mit Layouts zu arbeiten, wird Ihnen ein Verständnis der Schreibmodi sehr hilfreich sein, daher werden wir sie jetzt einführen.

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
        >), und ein Verständnis dafür, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Bedeutung von Schreibmodi für modernes CSS erlangen.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal läuft. Die {{cssxref("writing-mode")}}-Eigenschaft ermöglicht es uns, von einem Schreibmodus zu einem anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen – Sie könnten den Schreibmodus von Teilen Ihres Layouts auch aus kreativen Gründen ändern.

Im untenstehenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text läuft jetzt vertikal. Vertikaler Text ist in der Grafikdesignwelt weit verbreitet und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

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

- `horizontal-tb`: Blockflussrichtung von oben nach unten. Sätze laufen horizontal.
- `vertical-rl`: Blockflussrichtung von rechts nach links. Sätze laufen vertikal.
- `vertical-lr`: Blockflussrichtung von links nach rechts. Sätze laufen vertikal.

Die `writing-mode`-Eigenschaft legt also in Wirklichkeit die Richtung fest, in der Blockelemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der der Text in den Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits über [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) gesprochen und die Tatsache, dass einige Dinge als Blockelemente und andere als Inline-Elemente angezeigt werden. Wie wir oben gesehen haben, ist Block und Inline an den Schreibmodus des Dokuments gebunden, nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie z. B. Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies deutlicher. In diesem nächsten Beispiel habe ich zwei Kästchen, die eine Überschrift und einen Absatz enthalten. Das erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten verläuft. Das zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links verläuft.

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

Wenn wir den Schreibmodus wechseln, ändern wir, welche Richtung Block und welche Inline ist. In einem `horizontal-tb`-Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl`-Schreibmodus verläuft die Blockrichtung von rechts nach links horizontal. Die **Blockdimension** ist also immer die Richtung, in der Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inlinedimension** ist immer die Richtung, in die ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen bei einem horizontalen Schreibmodus.![Darstellung der Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Darstellung der Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie damit beginnen, sich CSS-Layouts anzusehen, und insbesondere die neueren Layout-Methoden, wird dieses Konzept von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Zusätzlich zum Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, jedoch von rechts nach links geschrieben. Dies ist wahrscheinlich keine kreative Verwendung — wenn Sie etwas rechtsbündig ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun — es ist jedoch wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Aufgrund der Tatsache, dass sich der Schreibmodus und die Textrichtung ändern können, beziehen sich neuere CSS-Layout-Methoden nicht auf links und rechts sowie oben und unten. Stattdessen wird von _Anfang_ und _Ende_, zusammen mit dem Konzept von Inline und Block, gesprochen. Machen Sie sich jetzt keine Sorgen darüber, behalten Sie diese Ideen jedoch im Kopf, während Sie beginnen, sich mit Layouts zu beschäftigen; Sie werden es wirklich hilfreich finden, um CSS zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, warum wir zu diesem Zeitpunkt Ihres Lernens über Schreibmodi und Richtungen sprechen, ist, dass wir bereits viele Eigenschaften betrachtet haben, die an die physikalischen Dimensionen des Bildschirms gebunden sind, und diese machen mehr Sinn in einem horizontalen Schreibmodus.

Schauen wir uns unsere beiden Kästchen noch einmal an – eines mit einem `horizontal-tb`-Schreibmodus und eines mit `vertical-rl`. Ich habe beiden Kästchen eine {{cssxref("width")}} gegeben. Sie können sehen, dass das Kästchen im vertikalen Schreibmodus immer noch eine Breite hat, und dies verursacht, dass der Text überfließt.

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

Was wir in diesem Szenario wirklich wollen, ist im Wesentlichen, die Höhe mit der Breite in Übereinstimmung mit dem Schreibmodus zu tauschen. Wenn wir uns in einem vertikalen Schreibmodus befinden, möchten wir, dass das Kästchen in der Blockdimension expandiert, so wie es im horizontalen Modus der Fall ist.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von abgebildeten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physikalische Eigenschaften — Dinge wie `width` und `height` — durch **logische** oder **flussbezogene** Versionen.

Die Eigenschaft, die `width` bei einem horizontalen Schreibmodus zugeordnet ist, wird {{cssxref("inline-size")}} genannt — sie bezieht sich auf die Größe in der Inlinedimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Blockdimension. Sie können sehen, wie dies funktioniert, im Beispiel unten, in dem wir `width` durch `inline-size` ersetzt haben.

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

### Logische Rand-, Rahmen- und Auffüllungseigenschaften

In den letzten zwei Lektionen haben wir über das CSS-Boxmodell und CSS-Rahmen gelernt. Bei den Rand-, Rahmen- und Auffüllungseigenschaften finden Sie viele Instanzen physikalischer Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, und {{cssxref("border-bottom")}}. In ähnlicher Weise wie wir Abbildungen für Breite und Höhe haben, gibt es Abbildungen für diese Eigenschaften.

Die `margin-top`-Eigenschaft wird zu {{cssxref("margin-block-start")}} abgebildet — dies bezieht sich immer auf den Rand am Anfang der Blockdimension.

Die {{cssxref("padding-left")}}-Eigenschaft wird zu {{cssxref("padding-inline-start")}} abgebildet, der Auffüllung, die am Anfang der Inlinerichtung angewendet wird. Dies wird der Ort sein, an dem die Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft wird zu {{cssxref("border-block-end")}} abgebildet, dem Rahmen am Ende der Blockdimension.

Sie können unten einen Vergleich zwischen physikalischen und logischen Eigenschaften sehen.

Wenn Sie den Schreibmodus der Kästchen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` auf `vertical-rl` setzen, werden Sie sehen, wie die physikalischen Eigenschaften an ihre physikalische Richtung gebunden bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.

Sie können auch sehen, dass die {{htmlelement("Heading_Elements", "h2")}} einen schwarzen `border-bottom` hat. Können Sie herausfinden, wie man diesen unteren Rahmen immer unter den Text in beiden Schreibmodi setzen kann?

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

Es gibt eine große Anzahl von Eigenschaften, wenn man alle einzelnen Rahmen-Longhands berücksichtigt, und Sie können alle abgebildeten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Bisher haben wir uns logische Eigenschaftsnamen angesehen. Es gibt auch einige Eigenschaften, die physikalische Werte von `top`, `right`, `bottom` und `left` nehmen. Auch diese Werte haben Abbildungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Zum Beispiel können Sie ein Bild nach links floaten lassen, um Text um das Bild herumlaufen zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im untenstehenden Beispiel gezeigt.

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

Hier verwenden wir auch logische Randwerte, um sicherzustellen, dass der Rand in jedem Schreibmodus an der richtigen Stelle liegt.

### Sollten Sie physikalische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physikalischen Äquivalente und wurden daher erst kürzlich in Browsern implementiert. Sie können jede Eigenschaftsseite auf MDN überprüfen, um zu sehen, wie weit die Browserunterstützung zurückreicht. Wenn Sie nicht mehrere Schreibmodi verwenden, ziehen Sie es vielleicht vor, vorerst die physikalischen Versionen zu verwenden. Letztendlich erwarten wir jedoch, dass die meisten Leute zu den logischen Versionen übergehen werden, da sie viel Sinn ergeben, sobald man auch mit Layoutmethoden wie Flexbox und Grid arbeitet.

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS immer wichtiger. Ein Verständnis der Block- und Inlinerichtung — und wie sich der Textfluss mit einem Wechsel des Schreibmodus ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, selbst wenn Sie niemals einen anderen Schreibmodus als einen horizontalen verwenden.
