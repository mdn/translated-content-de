---
title: Elemente in CSS dimensionieren
short-title: Sizing
slug: Learn_web_development/Core/Styling_basics/Sizing
l10n:
  sourceCommit: d2317ab6c4301c3774f1f319fa3a532e94ba82f6
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In den verschiedenen Lektionen bisher sind Sie auf mehrere Möglichkeiten gestoßen, um Elemente auf einer Webseite mit CSS zu dimensionieren. Das Verständnis darüber, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Methoden zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zu Größen, die Ihnen in Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Den Begriff der intrinsischen Größe verstehen.</li>
          <li>Absolute und prozentuale Größen festlegen.</li>
          <li>Maximale und minimale Breite und Höhe festlegen.</li>
          <li>Viewport-Einheiten verstehen und deren Nützlichkeit erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, die vor der Wirkung von CSS festgelegt ist. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Angaben zur Größe, die als **intrinsische Größe** beschrieben werden. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch jegliche Formatierung, die wir möglicherweise anwenden.

Wenn Sie ein Bild auf eine Seite legen und weder seine Höhe noch seine Breite ändern, sei es durch `<img>`-Attribute oder CSS, wird es in seiner intrinsischen Größe angezeigt. Wir haben dem Bild im folgenden Beispiel einen Rahmen gegeben, damit Sie das Ausmaß seiner Größe sehen können, wie es in seiner Datei definiert ist.

```html live-sample___intrinsic-image
<img
  alt="star"
  src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
```

```css live-sample___intrinsic-image
img {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-image","100%", "80")}}

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} ohne Inhalt zu Ihrem HTML hinzufügen und ihm einen Rahmen geben, wie wir es mit dem Bild gemacht haben, sehen Sie eine Linie auf der Seite. Dies ist der eingeklappte Rahmen des `<div>` — es gibt keinen Inhalt, um ihn offen zu halten.

In unserem Beispiel unten deckt dieser Rahmen die gesamte Breite des Containers ab, weil es sich um ein Block-Element handelt, ein Verhalten, das Ihnen vertraut vorkommen sollte. Es hat keine Höhe (oder Größe in der Blockdimension), weil es keinen Inhalt gibt.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text","100%", "60")}}

Versuchen Sie, im obigen Beispiel etwas Text in das leere Element einzufügen. Sie werden sehen, dass sich der Rahmen öffnet, da die Höhe des Elements durch den Inhalt definiert ist. Auch dies ist die intrinsische Größe des Elements — seine Größe wird durch seinen Inhalt definiert.

## Eine spezifische Größe festlegen

Natürlich können wir den Elementen in unserem Design eine spezifische Größe geben. Wenn einem Element eine Größe zugewiesen wird (in die der Inhalt dann passen muss), sprechen wir von einer **extrinsischen Größe**.

Im nächsten Beispiel geben wir zwei `<div>`s spezifische {{cssxref("width")}} und {{cssxref("height")}} Werte, und sie werden nun diese Größe haben, unabhängig vom Inhalt, der in sie eingefügt wird. Wie das rechte `<div>` zeigt, kann eine festgelegte Höhe dazu führen, dass der Inhalt überläuft, wenn mehr Inhalt vorhanden ist, als in das enthaltene Element passt (Sie werden mehr über [Overflow](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) in einer späteren Lektion erfahren).

```html live-sample___height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a height set, this box has content in it which will
    need more space than the assigned height, and so we get overflow.
  </div>
</div>
```

```css live-sample___height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("height", "", "200px")}}

Aufgrund dieses Overflow-Problems müssen wir beim Fixieren der Höhe von Elementen mit Längen oder Prozentangaben im Web sehr vorsichtig sein.

### Prozentsätze verwenden

Prozentsätze verhalten sich in vielerlei Hinsicht wie Längeneinheiten, und wie wir [in der Lektion zu Werten und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages) diskutiert haben, können sie oft austauschbar mit Längen verwendet werden. Wenn Sie einen Prozentsatz verwenden, müssen Sie darauf achten, wovon er ein Prozentsatz ist. Im Falle eines Box-Modells innerhalb eines anderen Containers, wenn Sie der untergeordneten Box eine prozentuale Breite geben, ist dies ein Prozentsatz der Breite des übergeordneten Containers.

```html live-sample___percent-width
<div class="container">
  <div class="box">I have a percentage width.</div>
</div>
```

```css live-sample___percent-width
body {
  font: 1.2em sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 50%;
}
```

{{EmbedLiveSample("percent-width")}}

Dies liegt daran, dass Prozentsätze im Verhältnis zur Größe des umgebenden Blocks aufgelöst werden. Ohne angewendeten Prozentsatz nimmt unser `box` `<div>` `100%` des verfügbaren Raums ein, da es ein Block-Element ist. Wenn wir ihm eine prozentuale Breite geben, wird dies zu einem Prozentsatz des Raums, den es normalerweise füllen würde.

Versuchen Sie, das obige Beispiel zu bearbeiten:

1. Entfernen Sie die `width`-Deklaration des `box` `<div>`, um zu überprüfen, dass es standardmäßig `100%` der verfügbaren `width` einnimmt.
2. Setzen Sie Ihre vorherige Änderung zurück — geben Sie dem `box` `<div>` wieder eine `width` von `50%`.
3. Geben Sie dem `container` `<div>` eine `width` von `50%`. Sie werden sehen, dass die `width` des `box` `<div>` kleiner wird, da sie relativ zur `width` ihres Containers ist.

### Prozentuale Ränder und Abstände

Wenn Sie `margins` und `padding` als Prozentsatz festlegen, können Sie ein merkwürdiges Verhalten feststellen.

Im unten stehenden Beispiel haben wir eine Box, bei der wir einen {{cssxref("margin")}} von 10% und einen {{cssxref("padding")}} von `10%` festgelegt haben. Das Padding und der Rand oben und unten der Box sind gleich groß wie das Padding und der Rand links und rechts.

```html live-sample___percent-mp
<div class="box">I have margin and padding set to 10% on all sides.</div>
```

```css live-sample___percent-mp
body {
  font: 1.2em sans-serif;
}
.box {
  border: 5px solid darkblue;
  width: 200px;
  margin: 10%;
  padding: 10%;
}
```

{{EmbedLiveSample("percent-mp", "", "380px")}}

Sie könnten erwarten, dass die prozentualen oberen und unteren Ränder ein Prozentsatz der Höhe des Elements sind und die prozentualen linken und rechten Ränder ein Prozentsatz der Breite des Elements. Dies ist jedoch nicht der Fall!

Wenn Sie Rand und Padding in Prozentsätzen festlegen, wird der Wert basierend auf der **Inline-Größe** des umgebenden Blocks berechnet — daher die Breite, wenn Sie in einer horizontalen Sprache arbeiten. In unserem Beispiel betragen alle Ränder und das Padding `10%` der Breite. Dies bedeutet, dass Sie gleich große Ränder und Paddings rund um die Box haben können. Dies ist ein Fakt, den es sich zu merken lohnt, wenn Sie Prozentsätze auf diese Weise verwenden.

## Min- und Max-Größen

Neben der Festlegung einer festen Größe können wir CSS auch bitten, einem Element eine Mindest- oder Höchstgröße zuzuweisen. Wenn Sie eine Box haben, die möglicherweise eine variable Menge an Inhalt enthält und Sie möchten, dass sie _mindestens_ eine bestimmte Höhe hat, könnten Sie die {{cssxref("min-height")}}-Eigenschaft darauf setzen. Die Box wird immer mindestens diese Höhe haben, wächst aber höher, wenn mehr Inhalt vorhanden ist, als bei ihrer minimalen Höhe Platz hat.

Im nächsten Beispiel sehen Sie zwei Boxen, beide mit einer definierten `min-height` von 100 Pixeln. Die Box auf der linken Seite ist 100 Pixel hoch; die Box auf der rechten Seite enthält Inhalt, der mehr Platz benötigt, und daher ist sie größer als 100 Pixel.

```html live-sample___min-height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a min-height set, this box has content in it which
    will need more space than the assigned height, and so it grows from the
    minimum.
  </div>
</div>
```

```css live-sample___min-height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  min-height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("min-height", "", "220px")}}

Dies ist sehr nützlich, um Overflow zu vermeiden, wenn man mit variablen Inhaltsmengen umgeht.

### `max-width` für Bilder

Eine häufige Verwendung von {{cssxref("max-width")}} besteht darin, dass Bilder verkleinert werden, wenn nicht genügend Platz vorhanden ist, um sie mit ihrer intrinsischen Breite anzuzeigen, während sichergestellt wird, dass sie nicht größer werden als diese Breite.

Wenn Sie beispielsweise `width: 100%` für ein Bild festlegen würden und seine intrinsische Breite kleiner als sein Container ist, würde das Bild gestreckt und vergrößert werden, wodurch es pixelig aussieht.

Wenn Sie stattdessen `max-width: 100%` verwenden und seine intrinsische Breite kleiner als sein Container ist, wird das Bild nicht gezwungen, zu strecken und größer zu werden, wodurch eine Pixelierung verhindert wird.

Im folgenden Beispiel haben wir das gleiche Bild dreimal eingebettet:

- Das erste Bild wurde mit `width: 100%` versehen und befindet sich in einem Container, der größer ist als es selbst, daher dehnt es sich auf die Container-Breite aus.
- Das zweite Bild hat `max-width: 100%` gesetzt und dehnt sich daher nicht aus, um den Container zu füllen.
- Der dritte Kasten enthält dasselbe Bild nochmals, auch mit `max-width: 100%` gesetzt; in diesem Fall sehen Sie, wie es verkleinert wurde, um in den Kasten zu passen.

```html live-sample___max-width
<div class="wrapper">
  <div class="box">
    <img
      alt="star"
      class="width"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="mini-box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
</div>
```

```css hidden live-sample___max-width
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box,
.mini-box {
  border: 5px solid darkblue;
}
```

```css live-sample___max-width
.box {
  width: 200px;
}
.mini-box {
  width: 30px;
}
.width {
  width: 100%;
}
.max {
  max-width: 100%;
}
```

{{EmbedLiveSample("max-width", "", "260px")}}

Diese Technik wird verwendet, um Bilder _reaktionsfähig_ zu machen, sodass sie beim Betrachten auf einem kleineren Gerät entsprechend skalieren. Sie sollten diese Technik jedoch nicht verwenden, um wirklich große Bilder zu laden und sie dann im Browser zu verkleinern. Bilder sollten so dimensioniert sein, dass sie nicht größer sind, als sie für die größtmögliche Anzeige im Design benötigt werden. Das Herunterladen übermäßig großer Bilder verlangsamt Ihre Website und kann den Benutzern mehr Geld kosten, wenn sie für Daten pro Megabyte zahlen.

## Viewport-Einheiten

Der Viewport — der sichtbare Bereich Ihrer Seite im Browser, den Sie zum Anzeigen einer Website verwenden — hat auch eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw`-Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht `1%` der Viewport-Höhe und `1vw` entspricht `1%` der Viewport-Breite. Sie können diese Einheiten verwenden, um Boxen zu dimensionieren, aber auch Text. Im unten stehenden Beispiel haben wir eine Box, die als `20vh` und `20vw` dimensioniert ist. Die Box enthält einen Buchstaben `A`, der eine {{cssxref("font-size")}} von `10vh` hat.

```html live-sample___vw-vh
<div class="box">A</div>
```

```css live-sample___vw-vh
body {
  font-family: sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 20vw;
  height: 20vh;
  font-size: 10vh;
}
```

{{EmbedLiveSample("vw-vh")}}

Wenn Sie die `vh`- und `vw`-Werte ändern, ändert sich die Größe der Box und der Schrift; auch das Ändern der Viewport-Größe ändert deren Größe, da sie relativ zum Viewport dimensioniert sind. Um das Beispiel zu sehen, wenn Sie die Viewport-Größe ändern, müssen Sie das Beispiel in einem neuen Browserfenster laden, das Sie ändern können (da das eingebettete `<iframe>`, das das hier gezeigte Beispiel enthält, sein Viewport ist). Öffnen Sie das Beispiel, ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe der Box und des Textes passiert.

Elemente nach dem Viewport zu dimensionieren, kann in Ihren Designs nützlich sein. Wenn Sie beispielsweise eine vollständige Hero-Sektion Ihrer Seite zeigen möchten, bevor der restliche Inhalt angezeigt wird, wird durch das Festlegen dieses Teils Ihrer Seite auf `100vh` die restlichen Inhalte unterhalb des Viewports verschoben, sodass sie erst erscheinen, wenn das Dokument gescrollt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Größendimensionierung](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing).

## Zusammenfassung

Diese Lektion hat Ihnen einen Überblick über einige wichtige Fragen gegeben, auf die Sie stoßen könnten, wenn Sie Dinge im Web dimensionieren. Wenn Sie zum [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) übergehen, wird die Dimensionierung sehr wichtig, um die verschiedenen Layoutmethoden zu meistern. Daher lohnt es sich, die hier vorgestellten Konzepte zu verstehen, bevor Sie weitermachen.

Im nächsten Artikel werden wir uns damit befassen, wie Hintergründe und Rahmen in CSS manipuliert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
