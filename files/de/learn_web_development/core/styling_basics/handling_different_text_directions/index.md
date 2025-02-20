---
title: Umgang mit unterschiedlichen Textrichtungen
slug: Learn_web_development/Core/Styling_basics/Handling_different_text_directions
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{LearnSidebar}}

Viele der Eigenschaften und Werte, die wir bisher in unserem CSS-Lernprozess behandelt haben, stehen in Zusammenhang mit den physischen Abmessungen unseres Bildschirms. Zum Beispiel erstellen wir Ränder oben, rechts, unten und links eines Kastens. Diese physischen Dimensionen lassen sich sehr gut auf Inhalte übertragen, die horizontal angezeigt werden. Standardmäßig unterstützt das Web Sprachen, die von links nach rechts verlaufen (z. B. Englisch oder Französisch), besser als solche, die von rechts nach links geschrieben werden (wie Arabisch).

In den letzten Jahren hat sich CSS jedoch weiterentwickelt, um unterschiedliche Inhaltsrichtungen besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch). Diese unterschiedlichen Richtungen werden als **Schreibrichtungen** bezeichnet. Während Sie Ihr Wissen vertiefen und beginnen, mit Layouts zu arbeiten, wird ein Verständnis der Schreibrichtungen für Sie sehr nützlich sein. Daher werden wir sie nun einführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im Umgang mit
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >), und ein Verständnis dafür, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis der Bedeutung von Schreibrichtungen für modernes CSS.</td>
    </tr>
  </tbody>
</table>

## Was sind Schreibrichtungen?

Eine Schreibrichtung in CSS bezieht sich darauf, ob der Text horizontal oder vertikal verläuft. Mit der {{cssxref("writing-mode")}}-Eigenschaft können wir zwischen verschiedenen Schreibrichtungen wechseln. Es ist nicht notwendig, in einer Sprache zu arbeiten, die eine vertikale Schreibrichtung verwendet, um dies tun zu wollen — Sie könnten die Schreibrichtung auch aus kreativen Gründen für Teile Ihres Layouts ändern.

Im folgenden Beispiel wird eine Überschrift mithilfe von `writing-mode: vertical-rl` dargestellt. Der Text verläuft jetzt vertikal. Vertikaler Text ist im Grafikdesign gängig und kann eine Möglichkeit sein, Ihrer Webgestaltung ein interessanteres Erscheinungsbild zu verleihen.

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

Die `writing-mode`-Eigenschaft legt in Wirklichkeit die Richtung fest, in der blockartige Elemente auf der Seite angezeigt werden — entweder von oben nach unten, von rechts nach links oder von links nach rechts. Dies bestimmt dann die Richtung, in der der Text in Sätzen fließt.

## Schreibrichtungen und Block- sowie Inline-Layout

Wir haben bereits das [Block- und Inline-Layout](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) besprochen und erklärt, dass einige Dinge als Blockelemente und andere als Inline-Elemente dargestellt werden. Wie oben beschrieben, ist Block und Inline an die Schreibrichtung des Dokuments gebunden und nicht an den physischen Bildschirm. Blöcke werden nur von oben nach unten auf der Seite angezeigt, wenn Sie eine Schreibrichtung verwenden, die Text horizontal anzeigt, wie z. B. Englisch.

Ein Beispiel macht dies deutlicher. Im nächsten Beispiel habe ich zwei Kästen, die jeweils eine Überschrift und einen Absatz enthalten. Der erste verwendet `writing-mode: horizontal-tb`, eine Schreibrichtung, die horizontal geschrieben wird und von oben nach unten verläuft. Der zweite verwendet `writing-mode: vertical-rl`, eine Schreibrichtung, die vertikal geschrieben wird und von rechts nach links verläuft.

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

Wenn wir die Schreibrichtung ändern, ändern wir die Richtung, die Block ist, und diejenige, die Inline ist. In einer horizontalen Schreibrichtung mit `horizontal-tb` verläuft die Blockrichtung von oben nach unten; in einer vertikalen Schreibrichtung mit `vertical-rl` verläuft die Blockrichtung horizontal von rechts nach links. Die **Blockdimension** ist also immer die Richtung, in der Blöcke auf der Seite in der aktuellen Schreibrichtung angezeigt werden. Die **Inline-Dimension** ist immer die Richtung, in der ein Satz fließt.

Diese Abbildung zeigt die beiden Dimensionen in einer horizontalen Schreibrichtung.![Block- und Inline-Achse in einer horizontalen Schreibrichtung.](horizontal-tb.png)

Diese Abbildung zeigt die beiden Dimensionen in einer vertikalen Schreibrichtung.

![Block- und Inline-Achse in einer vertikalen Schreibrichtung.](vertical.png)

Sobald Sie beginnen, sich mit CSS-Layouts und insbesondere mit den neueren Layoutmethoden zu befassen, wird dieses Konzept von Block und Inline sehr wichtig. Wir werden es später wieder aufgreifen.

### Richtung

Zusätzlich zur Schreibrichtung gibt es auch die Textausrichtung. Wie oben erwähnt, werden einige Sprachen wie Arabisch horizontal, aber von rechts nach links geschrieben. Dies ist etwas, das Sie wahrscheinlich nicht aus kreativen Gründen verwenden werden — wenn Sie etwas rechtsbündig ausrichten möchten, gibt es andere Möglichkeiten, dies zu tun. Dennoch ist es wichtig, dies als Teil der Funktionsweise von CSS zu verstehen. Das Web ist nicht nur für Sprachen gedacht, die von links nach rechts angezeigt werden!

Da Schreibrichtung und Textausrichtung sich ändern können, beziehen sich neuere CSS-Layoutmethoden nicht mehr auf Links und Rechts, Oben und Unten. Stattdessen sprechen sie von _Start_ und _Ende_ sowie von Inline- und Block-Dimensionen. Machen Sie sich jetzt noch nicht allzu viele Gedanken darüber, aber behalten Sie diese Konzepte im Hinterkopf, wenn Sie sich mit Layout befassen; sie werden Ihnen wirklich hilfreich sein, um CSS besser zu verstehen.

## Logische Eigenschaften und Werte

Der Grund, warum wir Schreibrichtungen und Textausrichtung an diesem Punkt Ihres Lernens ansprechen, liegt darin, dass wir bereits viele Eigenschaften betrachtet haben, die an die physischen Dimensionen des Bildschirms gebunden sind und die im horizontalen Modus mehr Sinn ergeben.

Werfen wir erneut einen Blick auf unsere beiden Kästen — einen mit einer horizontalen Schreibrichtung (`horizontal-tb`) und einen mit einer vertikalen (`vertical-rl`). Ich habe beiden Kästen eine {{cssxref("width")}} zugewiesen. Sie können sehen, dass der Kasten in der vertikalen Schreibrichtung dennoch eine Breite hat, was dazu führt, dass der Text überläuft.

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

Was wir in diesem Szenario wirklich wollen, ist, Breite und Höhe entsprechend der Schreibrichtung im Wesentlichen zu tauschen. Im vertikalen Modus möchten wir, dass der Kasten genauso in der Blockdimension erweitert wird wie im horizontalen Modus.

Um dies zu erleichtern, hat CSS kürzlich eine Reihe zugeordneter Eigenschaften entwickelt. Diese ersetzen physische Eigenschaften — wie `width` und `height` — durch **logische**, oder **flussabhängige** Versionen.

Die zu `width` zugeordnete Eigenschaft für den horizontalen Modus heißt {{cssxref("inline-size")}} — sie bezieht sich auf die Größe in der Inline-Dimension. Die für `height` zugeordnete Eigenschaft heißt {{cssxref("block-size")}} und gibt die Größe in der Blockdimension an. Wie das funktioniert, sehen Sie im folgenden Beispiel, in dem wir `width` durch `inline-size` ersetzt haben.

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

### Logische Rand-, Rahmen- und Abstands-Eigenschaften

In den letzten zwei Lektionen haben wir über das CSS-Boxmodell und CSS-Rahmen gelernt. Bei den Rand-, Rahmen- und Abstandseigenschaften gibt es viele Beispiele für physische Eigenschaften, wie {{cssxref("margin-top")}}, {{cssxref("padding-left")}} und {{cssxref("border-bottom")}}. Genau wie wir Zuordnungen für Breite und Höhe haben, gibt es auch Zuordnungen für diese Eigenschaften.

Die Eigenschaft `margin-top` wird zu {{cssxref("margin-block-start")}} zugeordnet — dies bezieht sich immer auf den Rand am Anfang der Blockdimension.

Die {{cssxref("padding-left")}}-Eigenschaft wird zu {{cssxref("padding-inline-start")}}` zugeordnet, was dem Abstand entspricht, der am Anfang der Inline-Richtung angewendet wird. Dies ist der Punkt, an dem Sätze in dieser Schreibrichtung beginnen. Die {{cssxref("border-bottom")}}-Eigenschaft wird zu {{cssxref("border-block-end")}} zugeordnet, was dem Rahmen am Ende der Blockdimension entspricht.

Im Folgenden sehen Sie einen Vergleich zwischen physischen und logischen Eigenschaften.

Wenn Sie die Schreibrichtung der Kästen durch Umschalten der `writing-mode`-Eigenschaft auf `.box` auf `vertical-rl` ändern, werden Sie feststellen, dass die physischen Eigenschaften an ihrer physischen Richtung gebunden bleiben, während die logischen Eigenschaften mit der Schreibrichtung wechseln.

Sie können auch sehen, dass das {{htmlelement("Heading_Elements", "h2")}} ein schwarzes `border-bottom` hat. Können Sie herausfinden, wie der untere Rahmen immer unter dem Text bleibt, unabhängig von der Schreibrichtung?

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

Es gibt eine Vielzahl von Eigenschaften, wenn man alle langen Rahmen-Eigenschaften berücksichtigt. Sie können alle zugeordneten Eigenschaften auf der MDN-Seite zu [Logischen Eigenschaften und Werten](/de/docs/Web/CSS/CSS_logical_properties_and_values) einsehen.

### Logische Werte

Bis jetzt haben wir uns logische Eigenschaftsnamen angesehen. Es gibt auch einige Eigenschaften, die physische Werte von `top`, `right`, `bottom` und `left` haben. Diese Werte haben ebenfalls Zuordnungen zu logischen Werten — `block-start`, `inline-end`, `block-end` und `inline-start`.

Sie können zum Beispiel ein Bild nach links verschieben, um Text dazu zu bringen, das Bild zu umfließen. Sie könnten `left` durch `inline-start` ersetzen, wie im folgenden Beispiel gezeigt.

Ändern Sie die Schreibrichtung in diesem Beispiel zu `vertical-rl`, um zu sehen, was mit dem Bild geschieht. Ändern Sie `inline-start` zu `inline-end`, um das Floating zu ändern:

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

Hier verwenden wir auch logische Randwerte, um sicherzustellen, dass der Abstand unabhängig von der Schreibrichtung an der richtigen Stelle ist.

### Sollten Sie physische oder logische Eigenschaften verwenden?

Die logischen Eigenschaften und Werte sind neuer als ihre physischen Äquivalente und wurden daher erst vor kurzem in Browsern implementiert. Sie können auf jeder Eigenschaftsseite auf MDN überprüfen, wie weit die Unterstützung in Browsern zurückreicht. Wenn Sie nicht mehrere Schreibrichtungen verwenden, könnten Sie vorerst die physischen Versionen bevorzugen. Langfristig erwarten wir jedoch, dass die meisten Menschen auf die logischen Versionen umsteigen, da sie sehr sinnvoll sind, insbesondere wenn Sie auch Layoutmethoden wie Flexbox und Grid verwenden.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Weitere Tests, um zu prüfen, ob Sie die Informationen behalten haben, finden Sie unter [Testen Sie Ihr Wissen: Schreibrichtungen und logische Eigenschaften](/de/docs/Learn_web_development/Core/Styling_basics/Writing_Modes_Tasks).

## Zusammenfassung

Die in dieser Lektion erklärten Konzepte werden in CSS zunehmend wichtiger. Ein Verständnis der Block- und Inlinerichtung — und wie sich der Textfluss mit einer Änderung der Schreibrichtung ändert — wird in Zukunft sehr nützlich sein. Es wird Ihnen helfen, CSS besser zu verstehen, auch wenn Sie niemals eine andere Schreibrichtung als die horizontale verwenden.
