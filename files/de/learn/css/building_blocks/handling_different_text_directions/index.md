---
title: Umgang mit unterschiedlichen Textausrichtungen
slug: Learn/CSS/Building_blocks/Handling_different_text_directions
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernprozess kennengelernt haben, sind an die physischen Dimensionen unseres Bildschirms gebunden. Wir erstellen zum Beispiel Ränder oben, rechts, unten und links einer Box. Diese physischen Dimensionen passen sehr gut zu horizontal angezeigten Inhalten, und standardmäßig tendiert das Web dazu, linksläufige Sprachen (z. B. Englisch oder Französisch) besser zu unterstützen als rechtläufige Sprachen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten besser zu unterstützen, einschließlich rechtläufiger, aber auch von oben nach unten laufender Inhalte (wie Japanisch) – diese unterschiedlichen Ausrichtungen werden **Schreibmodi** genannt. Während Sie in Ihrem Studium fortschreiten und anfangen, mit Layouts zu arbeiten, wird ein Verständnis von Schreibmodi sehr hilfreich für Sie sein. Daher werden wir sie jetzt vorstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (Studium von
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (Studium von
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Bedeutung von Schreibmodi im modernen CSS.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal läuft. Die Eigenschaft {{cssxref("writing-mode")}} ermöglicht es uns, von einem Schreibmodus in einen anderen zu wechseln. Es ist nicht notwendig, in einer Sprache zu arbeiten, die einen vertikalen Schreibmodus verwendet, um dies zu tun – Sie könnten den Schreibmodus von Teilen Ihres Layouts auch aus kreativen Gründen ändern wollen.

Im untenstehenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text läuft nun vertikal. Vertikaler Text ist im Grafikdesign üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

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

Die Eigenschaft `writing-mode` legt also tatsächlich die Richtung fest, in der Blockelemente auf der Seite angezeigt werden – entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der Text in Sätzen fließt.

## Schreibmodi und Block- sowie Inline-Layout

Wir haben bereits über das [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) gesprochen und darüber, dass einige Dinge als Blockelemente und andere als Inline-Elemente angezeigt werden. Wie wir oben beschrieben haben, ist Block und Inline an den Schreibmodus des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie beispielsweise Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies klarer. In diesem nächsten Beispiel habe ich zwei Boxen, die eine Überschrift und einen Absatz enthalten. Die erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von der oberen Seite zur unteren geschrieben wird. Die zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links geschrieben wird.

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

Wenn wir den Schreibmodus wechseln, ändern wir die Richtung des Blocks und der Inline-Position. In einem `horizontal-tb`-Schreibmodus läuft die Blockrichtung von oben nach unten; in einem `vertical-rl`-Schreibmodus läuft die Blockrichtung horizontal von rechts nach links. Die **Block-Dimension** ist also immer die Richtung, in der Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in der ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Darstellung der Block- und Inline-Achse für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Darstellung der Block- und Inline-Achse für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie anfangen, CSS-Layout anzusehen, und insbesondere die neueren Layout-Methoden, wird diese Idee von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Zusätzlich zum Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist nichts, was Sie wahrscheinlich in einem kreativen Sinne verwenden werden – wenn Sie etwas rechts ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun –, aber es ist wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Aufgrund der Tatsache, dass der Schreibmodus und die Textrichtung sich ändern können, beziehen sich neuere CSS-Layout-Methoden nicht auf links und rechts, oben und unten. Stattdessen wird von _Start_ und _Ende_ zusammen mit dieser Idee von Inline und Block gesprochen. Machen Sie sich darüber jetzt nicht zu viele Gedanken, aber behalten Sie diese Ideen im Kopf, wenn Sie beginnen, sich mit Layout zu befassen; Sie werden es wirklich hilfreich finden, um CSS zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, warum zu diesem Zeitpunkt über Schreibmodi und Richtung gesprochen wird, ist, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind, und diese ergeben mehr Sinn, wenn sie in einem horizontalen Schreibmodus verwendet werden.

Schauen wir uns unsere beiden Boxen erneut an – eine mit einem `horizontal-tb`-Schreibmodus und eine mit `vertical-rl`. Ich habe beiden Boxen eine {{cssxref("width")}} gegeben. Sie können sehen, dass die Box bei Verwendung eines vertikalen Schreibmodus immer noch eine Breite hat, wodurch der Text überläuft.

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

In diesem Szenario möchten wir im Grunde genommen die Höhe mit der Breite in Übereinstimmung mit dem Schreibmodus tauschen. Wenn wir in einem vertikalen Schreibmodus sind, möchten wir, dass sich die Box in der Block-Dimension ausdehnt, genauso wie sie es im horizontalen Modus tut.

Um dies zu erleichtern, hat CSS vor Kurzem einen Satz von abgebildeten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften – Dinge wie `width` und `height` – durch **logische** oder **flussrelative** Versionen.

Die Eigenschaft, die in einem horizontalen Schreibmodus `width` entspricht, wird {{cssxref("inline-size")}} genannt – sie bezieht sich auf die Größe in der Inline-Dimension. Die Eigenschaft für `height` wird {{cssxref("block-size")}} genannt und entspricht der Größe in der Block-Dimension. Sie können sehen, wie dies im untenstehenden Beispiel funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

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

### Logische Eigenschaften von Margin, Border und Padding

In den letzten beiden Lektionen haben wir über das CSS-Boxmodell und CSS-Ränder gelernt. In den Eigenschaften von Margin, Border und Padding finden Sie viele Instanzen physischer Eigenschaften, z. B. {{cssxref("margin-top")}}, {{cssxref("padding-left")}} und {{cssxref("border-bottom")}}. Auf die gleiche Weise, wie wir Abbildungen für Breite und Höhe haben, gibt es Abbildungen für diese Eigenschaften.

Die Eigenschaft `margin-top` wird {{cssxref("margin-block-start")}} zugeordnet – dies bezieht sich immer auf den Rand am Anfang der Block-Dimension.

Die Eigenschaft {{cssxref("padding-left")}} wird {{cssxref("padding-inline-start")}} zugeordnet, das Padding, das am Anfang der Inline-Richtung angewendet wird. Dies ist dort, wo Sätze beginnen in diesem Schreibmodus. Die Eigenschaft {{cssxref("border-bottom")}} wird {{cssxref("border-block-end")}} zugeordnet, dem Rand am Ende der Block-Dimension.

Unten sehen Sie einen Vergleich zwischen physischen und logischen Eigenschaften.

Wenn Sie den Schreibmodus der Boxen ändern, indem Sie die `writing-mode`-Eigenschaft auf `.box` auf `vertical-rl` umstellen, werden Sie sehen, wie die physischen Eigenschaften ihrer physischen Richtung treu bleiben, während die logischen Eigenschaften mit dem Schreibmodus mit wechseln.

Sie können auch sehen, dass die {{htmlelement("Heading_Elements", "h2")}} einen schwarzen `border-bottom` hat. Können Sie herausfinden, wie Sie diesen unteren Rand immer unter den Text in beiden Schreibmodi setzen können?

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

Es gibt eine große Anzahl von Eigenschaften, wenn Sie all die einzelnen Border-Kurzformen in Betracht ziehen, und Sie können alle abgebildeten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) einsehen.

### Logische Werte

Wir haben bisher logische Eigenschaftsnamen betrachtet. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` annehmen. Diese Werte haben ebenfalls Abbildungen zu logischen Werten – `block-start`, `inline-end`, `block-end` und `inline-start`.

Zum Beispiel können Sie ein Bild nach links floaten lassen, damit der Text um das Bild herumläuft. Sie könnten `left` durch `inline-start` ersetzen, wie im unteren Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel auf `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` auf `inline-end`, um das Float zu ändern:

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

Hier verwenden wir auch logische Margin-Werte, um sicherzustellen, dass der Margin unabhängig vom verwendeten Schreibmodus an der richtigen Stelle ist.

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Entsprechungen und wurden daher erst kürzlich in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN nachsehen, wie weit die Browserunterstützung zurückreicht. Wenn Sie keine mehreren Schreibmodi verwenden, bevorzugen Sie möglicherweise im Moment noch die physischen Versionen. Letztendlich erwarten wir jedoch, dass die Menschen für die meisten Dinge zu den logischen Versionen wechseln, da sie viel Sinn machen, sobald Sie auch anfangen, mit Layout-Methoden wie flexbox und grid umzugehen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen gespeichert haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Schreibmodi und logische Eigenschaften](/de/docs/Learn/CSS/Building_blocks/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden im CSS immer wichtiger. Ein Verständnis der Block- und Inline-Richtung – und wie sich der Textfluss mit einer Änderung des Schreibmodus ändert – wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, selbst wenn Sie nie einen anderen als einen horizontalen Schreibmodus verwenden.

Im nächsten Artikel werden wir einen genauen Blick auf das [Überlaufen](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) in CSS werfen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}
