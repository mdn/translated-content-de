---
title: Umgang mit verschiedenen Textausrichtungen
short-title: Mehrere Textausrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernen kennengelernt haben, sind an die physischen Dimensionen unseres Bildschirms gebunden. Wir erstellen beispielsweise Rahmen oben, rechts, unten und links um ein Feld. Diese physischen Dimensionen passen sehr gut zu Inhalten, die horizontal betrachtet werden, und standardmäßig neigt das Web dazu, von links nach rechts geschriebene Sprachen (z.B. Englisch oder Französisch) besser zu unterstützen als von rechts nach links geschriebene Sprachen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um eine bessere Unterstützung für unterschiedliche Ausrichtungsrichtungen von Inhalten zu bieten, einschließlich von rechts nach links sowie von oben nach unten verlaufende Inhalte (wie Japanisch) — diese verschiedenen Ausrichtungen werden als **Schreibmodi** bezeichnet. Wenn Sie im Rahmen Ihrer Studien fortschreiten und beginnen, mit Layouts zu arbeiten, wird Ihnen das Verständnis von Schreibmodi sehr hilfreich sein. Deshalb führen wir sie jetzt ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Bedeutung von Schreibmodi im modernen CSS.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibmodi?

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal läuft. Die Eigenschaft {{cssxref("writing-mode")}} ermöglicht es uns, von einem Schreibmodus zu einem anderen zu wechseln. Sie müssen nicht in einer Sprache arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen — Sie könnten den Schreibmodus von Teilen Ihres Layouts auch aus kreativen Gründen ändern.

Im nachstehenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text verläuft jetzt vertikal. Vertikaler Text ist im Grafikdesign üblich und kann dazu beitragen, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

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

Die drei möglichen Werte für die [`writing-mode`](/de/docs/Web/CSS/writing-mode) Eigenschaft sind:

- `horizontal-tb`: Blockfließrichtung von oben nach unten. Sätze verlaufen horizontal.
- `vertical-rl`: Blockfließrichtung von rechts nach links. Sätze verlaufen vertikal.
- `vertical-lr`: Blockfließrichtung von links nach rechts. Sätze verlaufen vertikal.

Die Eigenschaft `writing-mode` legt also in Wirklichkeit die Richtung fest, in der Blockelemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der der Text in den Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits das [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) besprochen und die Tatsache, dass einige Dinge als Blockelemente und andere als Inline-Elemente angezeigt werden. Wie oben beschrieben, sind Block und Inline an den Schreibmodus des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie es bei Englisch der Fall ist.

Wenn wir uns ein Beispiel ansehen, wird dies klarer. Im nächsten Beispiel habe ich zwei Boxen, die eine Überschrift und einen Absatz enthalten. Die erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten auf der Seite geschrieben wird. Die zweite verwendet `writing-mode: vertical-rl`, ein Schreibmodus, der vertikal und von rechts nach links geschrieben wird.

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

Wenn wir den Schreibmodus ändern, ändern wir die Richtung, die Block- und Inline-Elemente einnehmen. In einem `horizontal-tb` Schreibmodus verläuft die Blockrichtung von oben nach unten; in einem `vertical-rl` Schreibmodus verläuft die Blockrichtung horizontal von rechts nach links. Die **Blockdimension** ist also immer die Richtung, in der Blöcke in dem verwendeten Schreibmodus auf der Seite angezeigt werden. Die **Inlinedimension** ist immer die Richtung, in der ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einem horizontalen Schreibmodus.![Darstellung der Block- und Inlinachsen für einen horizontalen Schreibmodus.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Darstellung der Block- und Inlinachsen für einen vertikalen Schreibmodus.](vertical.png)

Sobald Sie beginnen, sich mit CSS-Layout und insbesondere den neueren Layoutmethoden zu beschäftigen, wird dieses Konzept von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Zusätzlich zum Schreibmodus gibt es auch die Textrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist wahrscheinlich nichts, was Sie aus kreativen Gründen verwenden würden — wenn Sie etwas rechtsbündig anordnen möchten, gibt es andere Möglichkeiten, dies zu tun — aber es ist wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für von links nach rechts angezeigte Sprachen!

Da sich Schreibmodus und Textrichtung ändern können, beziehen sich neuere CSS-Layoutmethoden nicht auf links und rechts und oben und unten. Stattdessen sprechen sie von _Anfang_ und _Ende_ zusammen mit diesem Konzept von Inline und Block. Machen Sie sich darüber jetzt nicht zu viele Sorgen, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie mit Layouts beginnen; Sie werden es als sehr hilfreich für Ihr Verständnis von CSS empfinden.

## Logische Eigenschaften und Werte

Der Grund, zu diesem Zeitpunkt Ihres Lernens über Schreibmodi und Richtung zu sprechen, liegt darin, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind und mehr Sinn ergeben, wenn sie in einem horizontalen Schreibmodus verwendet werden.

Sehen wir uns unsere beiden Boxen noch einmal an — eine mit einem `horizontal-tb` Schreibmodus und eine mit `vertical-rl`. Ich habe beiden Boxen eine {{cssxref("width")}} gegeben. Sie können sehen, dass die Box im vertikalen Schreibmodus immer noch eine Breite hat, was dazu führt, dass der Text überläuft.

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

Was wir in diesem Szenario wirklich wollen, ist, im Wesentlichen Höhe und Breite in Übereinstimmung mit dem Schreibmodus zu tauschen. Wenn wir uns im vertikalen Schreibmodus befinden, möchten wir, dass die Box sich in der Blockdimension genauso ausdehnt wie im horizontalen Modus.

Um dies zu erleichtern, hat CSS kürzlich einen Satz von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften — Dinge wie `width` und `height` — durch **logische** oder **fluss-relative** Versionen.

Die Eigenschaft, die zu `width` zugeordnet ist, wenn sich der Schreibmodus horizontal befindet, wird als {{cssxref("inline-size")}} bezeichnet — sie bezieht sich auf die Größe in der Inlinedimension. Die Eigenschaft für `height` heißt {{cssxref("block-size")}} und ist die Größe in der Blockdimension. Sie können sehen, wie dies im folgenden Beispiel funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

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

### Logische Rand-, Rahmen- und Auffüllungseigenschaften

In den letzten beiden Lektionen haben wir das CSS-Boxmodell und CSS-Rahmen kennengelernt. In den Rand-, Rahmen- und Auffüllungseigenschaften finden Sie viele Instanzen physischer Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, und {{cssxref("border-bottom")}}. In derselben Weise wie bei Breite und Höhe gibt es Zuordnungen für diese Eigenschaften.

Die Eigenschaft `margin-top` wird zu {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Rand am Anfang der Blockdimension.

Die Eigenschaft {{cssxref("padding-left")}} wird zu {{cssxref("padding-inline-start")}} zugeordnet, dem Auffüllung, die am Anfang der Inline-Richtung angewendet wird. Dies wird dort sein, wo Sätze in diesem Schreibmodus beginnen. Die Eigenschaft {{cssxref("border-bottom")}} wird zu {{cssxref("border-block-end")}} zugeordnet, was dem Rahmen am Ende der Blockdimension entspricht.

Sie können unten einen Vergleich zwischen physischen und logischen Eigenschaften sehen.

Wenn Sie den Schreibmodus der Boxen ändern, indem Sie die Eigenschaft `writing-mode` auf `.box` auf `vertical-rl` umschalten, sehen Sie, wie die physischen Eigenschaften an ihre physische Richtung gebunden bleiben, während sich die logischen Eigenschaften mit dem Schreibmodus ändern.

Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} eine schwarze `border-bottom` hat. Können Sie herausfinden, wie Sie diesen unteren Rahmen immer unter den Text bringen können, egal in welchem Schreibmodus?

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

Es gibt eine Vielzahl von Eigenschaften, wenn Sie alle einzelnen Rahmenlangformen in Betracht ziehen, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) ansehen.

### Logische Werte

Bisher haben wir uns logische Eigenschaftsnamen angesehen. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` nehmen. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Zum Beispiel können Sie ein Bild nach links floaten, um den Text herumwickeln zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel zu `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um das Float zu ändern:

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

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Äquivalente und daher erst kürzlich in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN nachsehen, wie weit die Browserunterstützung zurückreicht. Wenn Sie keine mehreren Schreibmodi verwenden, könnten Sie vorerst die physischen Versionen bevorzugen. Wir erwarten jedoch, dass die meisten Leute letztendlich auf die logischen Versionen umsteigen, da sie viel Sinn machen, sobald Sie auch anfangen, mit Layoutmethoden wie Flexbox und Grid zu arbeiten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie sich diese Informationen eingeprägt haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Schreibmodi und logische Eigenschaften](/de/docs/Learn_web_development/Core/Styling_basics/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte sind im CSS zunehmend wichtig. Ein Verständnis der Block- und Inlinedirection — und wie sich der Textfluss mit einer Änderung des Schreibmodus ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, selbst wenn Sie nie einen anderen Schreibmodus als einen horizontalen nutzen.
