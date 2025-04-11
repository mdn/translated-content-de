---
title: Größenanpassung von Elementen in CSS
short-title: Sizing
slug: Learn_web_development/Core/Styling_basics/Sizing
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In den verschiedenen Lektionen, die Sie bisher durchlaufen haben, sind Ihnen mehrere Methoden begegnet, um Elemente auf einer Webseite mithilfe von CSS zu dimensionieren. Das Verständnis, wie groß die verschiedenen Merkmale in Ihrem Design sein werden, ist wichtig. Daher werden wir in dieser Lektion die verschiedenen Möglichkeiten zusammenfassen, wie Elemente eine Größe über CSS erhalten, und einige Begriffe zur Größenanpassung definieren, die Ihnen in Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studienmaterial
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS-Grundsyntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen des Konzepts der intrinsischen Größe.</li>
          <li>Festlegen von absoluten und prozentualen Größen.</li>
          <li>Festlegen von maximaler und minimaler Breite und Höhe.</li>
          <li>Verstehen von Viewport-Einheiten und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, festgelegt, bevor sie durch CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, beschrieben als ihre **intrinsische Größe**. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch irgendwelche Formatierungen, die wir zufällig anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und nicht seine Höhe oder Breite ändern, entweder durch die Verwendung von Attributen im `<img>`-Tag oder durch CSS, wird es mit dieser intrinsischen Größe angezeigt. Wir haben dem Bild im folgenden Beispiel einen Rahmen hinzugefügt, damit Sie das Ausmaß seiner in der Datei definierten Größe sehen können.

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

{{EmbedLiveSample("intrinsic-image")}}

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} ohne Inhalt zu Ihrem HTML hinzufügen und diesem, wie beim Bild, einen Rahmen geben, sehen Sie eine Linie auf der Seite. Dies ist der zusammengebrochene Rahmen des Elements — es gibt keinen Inhalt, um ihn offen zu halten. In unserem Beispiel unten erstreckt sich dieser Rahmen über die Breite des Containers, da es sich um ein Block-Element handelt, ein Verhalten, das Ihnen mittlerweile vertraut vorkommen sollte. Es hat keine Höhe (oder Größe in der Block-Dimension), da kein Inhalt vorhanden ist.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text")}}

Versuchen Sie im obigen Beispiel, etwas Text in das leere Element einzufügen. Der Rahmen enthält jetzt diesen Text, weil die Höhe des Elements durch den Inhalt definiert wird. Daher stammt die Größe dieses `<div>` in der Block-Dimension von der Größe des Inhalts. Auch dies ist die intrinsische Größe des Elements — seine Größe wird durch seinen Inhalt definiert.

## Eine bestimmte Größe festlegen

Natürlich können wir den Elementen in unserem Design eine bestimmte Größe geben. Wenn einem Element eine Größe gegeben wird (deren Inhalt dann in diese Größe passen muss), sprechen wir von einer **extrinsischen Größe**. Nehmen Sie unser `<div>` aus dem obigen Beispiel — wir können ihm bestimmte {{cssxref("width")}}- und {{cssxref("height")}}-Werte geben, und es wird jetzt diese Größe haben, unabhängig davon, welchen Inhalt man hineinlegt. Eine festgelegte Höhe kann dazu führen, dass der Inhalt überläuft, wenn mehr Inhalt vorhanden ist als Platz im Element ist (mehr über [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) erfahren Sie in einer späteren Lektion).

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

Aufgrund dieses Überlaufproblems müssen wir bei der Festlegung der Elementhöhe mit Längen oder Prozentsätzen im Web sehr sorgfältig vorgehen.

### Verwendung von Prozentsätzen

In vielerlei Hinsicht verhalten sich Prozentsätze wie Längeneinheiten, und wie wir in der [Lektion über Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages) besprochen haben, können sie oft mit Längen ausgetauscht werden. Bei der Verwendung eines Prozentsatzes müssen Sie darauf achten, wovon es ein Prozentsatz _ist_. Im Fall einer Box, die sich in einem anderen Container befindet, wird deren Prozentbreite ein Prozentsatz der Breite des übergeordneten Containers sein.

```html live-sample___percent-width
<div class="box">I have a percentage width.</div>
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

Dies liegt daran, dass Prozentsätze im Verhältnis zur Größe des umschließenden Blocks aufgelöst werden. Ohne einen angewendeten Prozentsatz würde unser `<div>` `100%` des verfügbaren Raums einnehmen, da es sich um ein Block-Element handelt. Wenn wir ihm eine Prozentbreite geben, entspricht dies einem Prozentsatz des Raums, den er normalerweise einnehmen würde.

### Prozentuale Ränder und Abstände

Wenn Sie `margins` und `padding` als Prozentsatz festlegen, bemerken Sie möglicherweise ein merkwürdiges Verhalten. Im folgenden Beispiel haben wir eine Box. Wir haben der inneren Box einen {{cssxref("margin")}} von 10% und ein {{cssxref("padding")}} von `10%` gegeben. Das Padding und der Rand oben und unten der Box haben die gleiche Größe wie das Padding und der Rand links und rechts.

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

Man könnte erwarten, dass beispielsweise die Prozentsätze für den oberen und unteren Rand ein Prozentsatz der Höhe des Elements und die Prozentsätze für den linken und rechten Rand ein Prozentsatz der Breite des Elements sind. Das ist jedoch nicht der Fall!

Wenn Sie Ränder und Abstände mit Prozentsätzen festlegen, wird der Wert aus der **Inline-Größe** des umschließenden Blocks berechnet – also der Breite in einer horizontalen Sprache. In unserem Beispiel sind alle Ränder und Abstände `10%` der Breite. Das bedeutet, dass Sie gleiche Ränder und Abstände rund um die Box haben können. Dies ist ein Fakt, an den Sie sich erinnern sollten, wenn Sie Prozentsätze auf diese Weise verwenden.

## min- und max-Größen

Neben der Festlegung einer festen Größe können wir CSS anweisen, einem Element eine minimale oder maximale Größe zu geben. Wenn Sie eine Box haben, die eine variable Menge Inhalt enthalten kann, und Sie möchten, dass sie immer _mindestens_ eine bestimmte Höhe hat, können Sie die {{cssxref("min-height")}}-Eigenschaft darauf setzen. Die Box wird immer mindestens diese Höhe haben, wächst aber höher, wenn mehr Inhalt vorhanden ist, als die Box bei ihrer minimalen Höhe Platz hat.

Im Beispiel unten sehen Sie zwei Boxen, beide mit einer definierten `min-height` von 100 Pixeln. Die Box auf der linken Seite ist 100 Pixel hoch; die Box auf der rechten Seite hat Inhalt, der mehr Platz benötigt und ist daher höher als 100 Pixel.

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

Dies ist sehr nützlich, um Überlauf bei variabler Inhaltsmenge zu vermeiden.

Ein häufiger Gebrauch von {{cssxref("max-width")}} ist, dass Bilder verkleinert werden, wenn nicht genügend Platz vorhanden ist, um sie in ihrer intrinsischen Breite anzuzeigen, während sichergestellt wird, dass sie nicht größer als diese Breite werden.

Wenn Sie beispielsweise `width: 100%` auf ein Bild setzen und seine intrinsische Breite kleiner als sein Container ist, wird das Bild gezwungen zu strecken und größer zu werden, was es pixelig aussehen lässt.

Wenn Sie stattdessen `max-width: 100%` verwenden und seine intrinsische Breite kleiner als der Container ist, wird das Bild nicht gezwungen, sich zu strecken und größer zu werden, wodurch Pixelbildung verhindert wird.

Im folgenden Beispiel haben wir das gleiche Bild dreimal verwendet. Das erste Bild hat `width: 100%` und befindet sich in einem Container, der größer ist als das Bild, daher streckt es sich auf die Containerbreite. Das zweite Bild hat `max-width: 100%` und streckt sich daher nicht, um den Container zu füllen. Die dritte Box enthält dasselbe Bild erneut, auch mit `max-width: 100%` gesetzt; in diesem Fall sehen Sie, wie es verkleinert wurde, um in die Box zu passen.

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
  width: 50px;
}
.width {
  width: 100%;
}
.max {
  max-width: 100%;
}
```

{{EmbedLiveSample("max-width", "", "260px")}}

Diese Technik wird verwendet, um Bilder _responsiv_ zu machen, sodass sie auf einem kleineren Gerät entsprechend verkleinert werden. Diese Technik sollte jedoch nicht dazu verwendet werden, wirklich große Bilder zu laden und sie dann im Browser zu verkleinern. Bilder sollten angemessen dimensioniert werden, um nicht größer zu sein, als sie für die größte Größe, in der sie im Design angezeigt werden, benötigt werden. Das Herunterladen zu großer Bilder führt dazu, dass Ihre Seite langsamer wird, und es kann Benutzer mehr Geld kosten, wenn sie eine Nutzung basierte Verbindung haben.

## Viewport-Einheiten

Der Viewport — der sichtbare Bereich Ihrer Seite im Browser, den Sie verwenden, um eine Seite anzusehen — hat ebenfalls eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw`-Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht 1% der Viewport-Höhe und `1vw` entspricht 1% der Viewport-Breite. Sie können diese Einheiten verwenden, um Boxen, aber auch Text zu dimensionieren. Im folgenden Beispiel haben wir eine Box, die als 20vh und 20vw dimensioniert ist. Die Box enthält einen Buchstaben `A`, der eine {{cssxref("font-size")}} von 10vh hat.

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

Wenn Sie die `vh`- und `vw`-Werte ändern, ändert sich die Größe der Box oder der Schrift; das Ändern der Viewport-Größe wird auch deren Größen ändern, da sie relativ zum Viewport dimensioniert sind. Um zu sehen, wie sich das Beispiel ändert, wenn Sie die Viewport-Größe ändern, müssen Sie das Beispiel in einem neuen Browserfenster öffnen, das Sie in der Größe ändern können (da das eingebettete `<iframe>`, das das oben gezeigte Beispiel enthält, sein Viewport ist). Öffnen Sie das Beispiel, ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe der Box und des Textes passiert.

Die Dimensionierung nach dem Viewport kann in Ihren Designs nützlich sein. Wenn Sie beispielsweise einen ganzseitigen Hero-Bereich anzeigen möchten, bevor der Rest Ihres Inhalts sichtbar wird, schieben Sie durch das Setzen dieses Bereichs auf Ihrer Seite auf `100vh` Höhe den Rest des Inhalts unter den Viewport, was bedeutet, dass er nur erscheint, wenn das Dokument gescrollt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Größenanpassung](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing).

## Zusammenfassung

Diese Lektion hat Ihnen einen Überblick über einige wichtige Themen gegeben, auf die Sie stoßen könnten, wenn Sie Dinge im Web dimensionieren. Wenn Sie mit [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) weiter fortfahren, wird die Größenbestimmung sehr wichtig werden, um die verschiedenen Layout-Methoden zu meistern, daher ist es sinnvoll, die Konzepte hier zu verstehen, bevor Sie weiter gehen.

Im nächsten Artikel werden wir einen Blick darauf werfen, wie Hintergründe und Rahmen in CSS manipuliert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
