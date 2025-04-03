---
title: Umgang mit verschiedenen Textausrichtungen
short-title: Mehrere Textausrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernen kennengelernt haben, sind an die physischen Dimensionen unseres Bildschirms gebunden. Wir erstellen beispielsweise Ränder oben, rechts, unten und links an einem Kasten. Diese physischen Dimensionen passen sehr gut zu horizontal betrachteten Inhalten, und standardmäßig neigt das Web dazu, Sprachen, die von links nach rechts laufen (z. B. Englisch oder Französisch), besser zu unterstützen als solche, die von rechts nach links laufen (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) besser zu unterstützen — diese unterschiedlichen Ausrichtungen werden **Schreibmodi** genannt. Wenn Sie in Ihrem Studium Fortschritte machen und beginnen, mit Layouts zu arbeiten, wird ein Verständnis der Schreibmodi sehr hilfreich sein, daher werden wir sie jetzt einführen.

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

Ein Schreibmodus in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Die {{cssxref("writing-mode")}}-Eigenschaft ermöglicht es uns, von einem Schreibmodus zu einem anderen zu wechseln. Es ist nicht notwendig, in einer Sprache zu arbeiten, die einen vertikalen Schreibmodus verwendet, um dies tun zu wollen — Sie könnten auch den Schreibmodus von Teilen Ihres Layouts aus kreativen Gründen ändern.

Im folgenden Beispiel haben wir eine Überschrift, die mit `writing-mode: vertical-rl` angezeigt wird. Der Text läuft nun vertikal. Vertikaler Text ist im Grafikdesign üblich und kann eine Möglichkeit sein, Ihrem Webdesign ein interessanteres Aussehen und Gefühl zu verleihen.

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

- `horizontal-tb`: Von oben nach unten Blockflussrichtung. Sätze verlaufen horizontal.
- `vertical-rl`: Von rechts nach links Blockflussrichtung. Sätze verlaufen vertikal.
- `vertical-lr`: Von links nach rechts Blockflussrichtung. Sätze verlaufen vertikal.

Die `writing-mode`-Eigenschaft legt in Wirklichkeit die Richtung fest, in der Blockelemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der Text in Sätzen fließt.

## Schreibmodi und Block- und Inline-Layout

Wir haben bereits [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) besprochen, und die Tatsache, dass einige Dinge als Blockelemente und andere als Inline-Elemente angezeigt werden. Wie oben beschrieben, sind Block und Inline an den Schreibmodus des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie einen Schreibmodus verwenden, der Text horizontal anzeigt, wie Englisch.

Wenn wir uns ein Beispiel ansehen, wird dies klarer. Im nächsten Beispiel habe ich zwei Kästen, die eine Überschrift und einen Absatz enthalten. Der erste verwendet `writing-mode: horizontal-tb`, einen Schreibmodus, der horizontal und von oben nach unten geschrieben wird. Der zweite verwendet `writing-mode: vertical-rl`; dies ist ein Schreibmodus, der vertikal und von rechts nach links geschrieben wird.

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

Wenn wir den Schreibmodus wechseln, ändern wir, welche Richtung Block und welche Inline ist. In einem `horizontal-tb` Schreibmodus läuft die Blockrichtung von oben nach unten; in einem `vertical-rl` Schreibmodus läuft die Blockrichtung von rechts nach links horizontal. Die **Blockdimension** ist also immer die Richtung, in der Blöcke auf der Seite im verwendeten Schreibmodus angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in der ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen im horizontalen Schreibmodus.! [Der Block- und Inline-Achse in einem horizontalen Schreibmodus](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einem vertikalen Schreibmodus.

![Der Block- und Inline-Achse in einem vertikalen Schreibmodus](vertical.png)

Sobald Sie beginnen, sich mit CSS-Layout zu befassen, und insbesondere mit den neueren Layout-Methoden, wird diese Idee von Block und Inline sehr wichtig. Wir werden später darauf zurückkommen.

### Richtung

Neben dem Schreibmodus haben wir auch die Textrichtung. Wie oben erwähnt, sind einige Sprachen wie Arabisch horizontal geschrieben, aber von rechts nach links. Dies ist nicht etwas, das Sie wahrscheinlich kreativ verwenden werden — wenn Sie etwas rechtsbündig ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun — jedoch ist es wichtig, dies als Teil der Natur von CSS zu verstehen. Das Web ist nicht nur für Sprachen, die von links nach rechts angezeigt werden!

Aufgrund der Tatsache, dass sich Schreibmodus und Textrichtung ändern können, beziehen sich neuere CSS-Layout-Methoden nicht mehr auf links und rechts sowie oben und unten. Stattdessen wird von _Start_ und _Ende_ im Zusammenhang mit dieser Idee von Inline und Block gesprochen. Machen Sie sich jetzt keine zu großen Sorgen darüber, aber behalten Sie diese Ideen im Hinterkopf, wenn Sie anfangen, sich mit Layout zu befassen; Sie werden es als sehr hilfreich für Ihr Verständnis von CSS empfinden.

## Logische Eigenschaften und Werte

Der Grund, warum wir in dieser Phase Ihres Lernens über Schreibmodi und Richtung sprechen, ist, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind, und diese machen mehr Sinn, wenn sie in einem horizontalen Schreibmodus sind.

Lassen Sie uns unsere beiden Kästen noch einmal ansehen — einen mit einem `horizontal-tb` Schreibmodus und einen mit `vertical-rl`. Ich habe beiden Kästen eine {{cssxref("width")}} gegeben. Sie können sehen, dass der Kasten im vertikalen Schreibmodus immer noch eine Breite hat, was dazu führt, dass der Text überläuft.

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

In diesem Szenario möchten wir im Wesentlichen die Höhe mit der Breite in Übereinstimmung mit dem Schreibmodus tauschen. Wenn wir in einem vertikalen Schreibmodus sind, möchten wir, dass der Kasten in der Blockdimension expandiert, genau wie im horizontalen Modus.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe von zugeordneten Eigenschaften entwickelt. Diese ersetzen im Wesentlichen physische Eigenschaften — Dinge wie `width` und `height` — durch **logische**, oder **flussbezogene** Versionen.

Die Eigenschaft, die `width` in einem horizontalen Schreibmodus zugeordnet ist, wird {{cssxref("inline-size")}} genannt — sie bezieht sich auf die Größe in der Inline-Dimension. Die Eigenschaft für `height` wird {{cssxref("block-size")}} genannt und ist die Größe in der Block-Dimension. Sie können sehen, wie dies im folgenden Beispiel funktioniert, in dem wir `width` durch `inline-size` ersetzt haben.

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

In den letzten beiden Lektionen haben wir über das CSS-Boxmodell und CSS-Rahmen gelernt. In den Rand-, Rahmen- und Auffüllungseigenschaften finden Sie viele Instanzen von physischen Eigenschaften, zum Beispiel {{cssxref("margin-top")}}, {{cssxref("padding-left")}}, und {{cssxref("border-bottom")}}. In ähnlicher Weise wie wir Zuordnungen für Breite und Höhe haben, gibt es Zuordnungen für diese Eigenschaften.

Die `margin-top` Eigenschaft ist zugeordnet zu {{cssxref("margin-block-start")}} — dies bezieht sich immer auf den Rand am Anfang der Block-Dimension.

Die {{cssxref("padding-left")}} Eigenschaft ist zugeordnet zu {{cssxref("padding-inline-start")}}, die Auffüllung, die am Anfang der Inline-Richtung angewendet wird. Dies wird dort sein, wo Sätze in diesem Schreibmodus beginnen. Die {{cssxref("border-bottom")}} Eigenschaft ist zugeordnet zu {{cssxref("border-block-end")}}, was den Rahmen am Ende der Block-Dimension ist.

Sie können einen Vergleich zwischen physischen und logischen Eigenschaften unten sehen.

Wenn Sie den Schreibmodus der Kästen durch Wechsel der `writing-mode` Eigenschaft auf `.box` zu `vertical-rl` ändern, werden Sie sehen, wie die physischen Eigenschaften an ihrer physischen Richtung gebunden bleiben, während die logischen Eigenschaften mit dem Schreibmodus wechseln.

Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} eine schwarze `border-bottom` hat. Können Sie herausfinden, wie dieser untere Rahmen immer unter dem Text in beiden Schreibmodi bleibt?

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

Es gibt eine riesige Anzahl von Eigenschaften, wenn man all die einzelnen Rahmen-Schreibweisen betrachtet, und Sie können alle zugeordneten Eigenschaften auf der MDN-Seite für [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) sehen.

### Logische Werte

Wir haben bisher logische Eigenschaftsnamen betrachtet. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` annehmen. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Zum Beispiel können Sie ein Bild nach links verschieben, um Text um das Bild herumfließen zu lassen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie den Schreibmodus in diesem Beispiel zu `vertical-rl`, um zu sehen, was mit dem Bild passiert. Ändern Sie `inline-start` zu `inline-end`, um die Ausrichtung zu ändern:

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

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Äquivalente und daher erst kürzlich in Browsern implementiert. Sie können jede Eigenschaftsseite auf MDN überprüfen, um zu sehen, wie weit die Browserunterstützung zurückreicht. Wenn Sie keine mehrere Schreibmodi verwenden, ziehen Sie es für den Moment möglicherweise vor, die physischen Versionen zu verwenden. Letztendlich erwarten wir jedoch, dass die Leute zu den logischen Versionen für die meisten Dinge übergehen, da sie viel Sinn machen, sobald Sie auch mit Layout-Methoden wie Flexbox und Grid arbeiten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Schreibmodi und logische Eigenschaften](/de/docs/Learn_web_development/Core/Styling_basics/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden im CSS zunehmend wichtig. Ein Verständnis der Block- und Inline-Richtung — und wie sich der Textfluss mit einem Wechsel des Schreibmodus ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS zu verstehen, selbst wenn Sie nie einen anderen Schreibmodus als einen horizontalen verwenden.
