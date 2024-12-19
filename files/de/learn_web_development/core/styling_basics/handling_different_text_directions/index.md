---
title: Umgang mit verschiedenen Schreibrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernprozess behandelt haben, sind an die physischen Dimensionen unseres Bildschirms gebunden. Wir erstellen zum Beispiel Rahmen oben, rechts, unten und links an einem Kasten. Diese physikalischen Dimensionen lassen sich besonders gut auf Inhalte anwenden, die horizontal dargestellt werden. Standardmäßig neigt das Web dazu, Sprachen von links nach rechts (z. B. Englisch oder Französisch) besser zu unterstützen als Sprachen von rechts nach links (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um unterschiedliche Inhaltsrichtungen besser zu unterstützen, einschließlich rechts-nach-links und auch oben-nach-unten-Inhalten (wie Japanisch) – diese verschiedenen Richtungen werden als **Schreibmodi** bezeichnet. Wenn Sie im Studium fortschreiten und beginnend Layouts entwickeln, wird ein Verständnis der Schreibmodi für Sie sehr hilfreich sein, daher werden wir sie Ihnen jetzt vorstellen.

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
        >, Grundkenntnisse in HTML (studieren Sie
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

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal läuft. Die {{cssxref("writing-mode")}}-Eigenschaft ermöglicht es uns, von einem Schreibmodus in einen anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen – Sie könnten auch den Schreibmodus von Teilen Ihres Layouts aus kreativen Gründen ändern.

Im Beispiel unten haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text läuft nun vertikal. Vertikaler Text ist im Grafikdesign üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

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

- `horizontal-tb`: Oben-nach-unten Blockflussrichtung. Sätze verlaufen horizontal.
- `vertical-rl`: Rechts-nach-links Blockflussrichtung. Sätze verlaufen vertikal.
- `vertical-lr`: Links-nach-rechts Blockflussrichtung. Sätze verlaufen vertikal.

Die `writing-mode`-Eigenschaft legt tatsächlich die Richtung fest, in der Block-Elemente auf der Seite angezeigt werden – entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der Text in Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) besprochen und die Tatsache, dass einige Dinge als Block-Elemente und andere als Inline-Elemente angezeigt werden. Wie oben beschrieben, sind Block und Inline an den Schreibmodus des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal darstellt, wie Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies klarer. In diesem nächsten Beispiel habe ich zwei Kästen, die eine Überschrift und einen Absatz enthalten. Der erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten geschrieben wird. Der zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links geschrieben wird.

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

Wenn wir den Schreibmodus wechseln, ändern wir die Richtung von Block und Inline. In einem `horizontal-tb`-Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl`-Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Block-Dimension** ist also immer die Richtung, in der Blöcke in dem verwendeten Schreibmodus auf der Seite angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in der ein Satz verläuft.

Dieses Bild zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Zeigt die Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Dieses Bild zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Zeigt die Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie anfangen, sich mit dem CSS-Layout zu beschäftigen, und insbesondere mit den neueren Layout-Methoden, wird diese Idee von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Neben dem Schreibmodus haben wir auch die Textausrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist wahrscheinlich nichts, das Sie aus kreativer Sicht nutzen — wenn Sie etwas rechtsbündig ausrichten wollen, gibt es andere Möglichkeiten, dies zu tun — aber es ist wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Aufgrund der Tatsache, dass sich Schreibmodus und Textrichtung ändern können, beziehen sich neuere CSS-Layoutmethoden nicht auf links und rechts sowie oben und unten. Stattdessen wird von _Anfang_ und _Ende_ zusammen mit dieser Idee von Inline und Block gesprochen. Machen Sie sich jetzt keine allzu großen Gedanken darüber, aber behalten Sie diese Ideen im Kopf, wenn Sie mit dem Layout beginnen; Sie werden es äußerst hilfreich finden, um CSS besser zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, warum wir an diesem Punkt Ihres Lernens über Schreibmodi und Richtung sprechen, ist, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind, und diese machen mehr Sinn in einem horizontalen Schreibmodus.

Werfen wir einen Blick auf unsere beiden Kästen — einen mit einem `horizontal-tb` Schreibmodus und einen mit `vertical-rl`. Ich habe beiden Kästen eine {{cssxref("width")}} zugewiesen. Sie können sehen, dass der Kasten im vertikalen Schreibmodus immer noch eine Breite hat und dies dazu führt, dass der Text überläuft.

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

Was wir in diesem Szenario wirklich wollen, ist im Wesentlichen, die Höhe mit der Breite entsprechend dem Schreibmodus zu tauschen. Wenn wir in einem vertikalen Schreibmodus sind, möchten wir, dass der Kasten in der Block-Dimension genauso expandiert wie im horizontalen Modus.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften – Dinge wie `width` und `height` – durch **logische**, oder **flussbezogene** Versionen.

Die Eigenschaft, die `width` in einem horizontalen Schreibmodus zugeordnet ist, wird {{cssxref("inline-size")}} genannt – sie bezieht sich auf die Größe in der Inline-Dimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Block-Dimension. Sie können sehen, wie dies im Beispiel unten funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

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

### Logische Rand-, Rahmen- und Polsterungseigenschaften

In den letzten beiden Lektionen haben wir das CSS-Boxmodell und CSS-Rahmen gelernt. In den Rand-, Rahmen- und Polsterungseigenschaften werden Sie viele Instanzen von physischen Eigenschaften finden, z.B. {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, und {{cssxref("border-bottom")}}. In der gleichen Weise, wie wir Zuordnungen für Breite und Höhe haben, gibt es Zuordnungen für diese Eigenschaften.

Die `margin-top`-Eigenschaft wird zu {{cssxref("margin-block-start")}} zugeordnet – dies bezieht sich immer auf den Rand am Anfang der Block-Dimension.

Die {{cssxref("padding-left")}}-Eigenschaft wird zu {{cssxref("padding-inline-start")}} zugeordnet, der Polsterung, die am Anfang der Inline-Richtung angewendet wird. Dies wird dort sein, wo Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft wird zu {{cssxref("border-block-end")}} zugeordnet, was der Rahmen am Ende der Block-Dimension ist.

Unten sehen Sie einen Vergleich zwischen physischen und logischen Eigenschaften.

Wenn Sie den Schreibmodus der Kästen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` zu `vertical-rl` ändern, werden Sie sehen, wie die physischen Eigenschaften ihrem physischen Richtung treu bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.

Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} ein schwarzes `border-bottom` hat. Können Sie herausfinden, wie Sie diesen unteren Rahmen immer unter dem Text in beiden Schreibmodi anbringen können?

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

Es gibt eine große Anzahl von Eigenschaften, wenn Sie alle einzelnen Langformen der Rahmen in Betracht ziehen, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite zu [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Bisher haben wir uns logische Eigenschaftsnamen angesehen. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom`, und `left` verwenden. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end`, und `inline-start`.

Zum Beispiel können Sie ein Bild nach links schweben lassen, um Text um das Bild herumfließen zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel auf `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um die Schweberichtung zu ändern:

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

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Entsprechungen und wurden daher erst kürzlich in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN nachsehen, wie weit die Browserunterstützung zurückreicht. Wenn Sie keine mehreren Schreibmodi verwenden, dann ziehen Sie möglicherweise vorerst die Verwendung der physischen Versionen vor. Jedoch erwarten wir letztendlich, dass die Menschen zu den logischen Versionen für die meisten Dinge übergehen, da sie sehr sinnvoll sind, insbesondere wenn Sie auch Layout-Methoden wie Flexbox und Grid verwenden.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Schreibmodi und logische Eigenschaften](/de/docs/Learn_web_development/Core/Styling_basics/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte gewinnen zunehmend an Bedeutung für CSS. Ein Verständnis der Block- und Linerichtung und wie sich der Textfluss mit einer Änderung des Schreibmodus ändert, wird in Zukunft sehr nützlich sein. Es wird Ihnen beim Verständnis von CSS helfen, selbst wenn Sie nie einen anderen Schreibmodus als einen horizontalen verwenden.
