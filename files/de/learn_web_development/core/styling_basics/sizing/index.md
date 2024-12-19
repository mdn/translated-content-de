---
title: Größenbestimmung von Elementen in CSS
slug: Learn_web_development/Core/Styling_basics/Sizing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In den bisherigen Lektionen sind Ihnen bereits mehrere Möglichkeiten begegnet, wie Sie Elemente auf einer Webseite mithilfe von CSS dimensionieren können. Zu verstehen, wie groß die verschiedenen Elemente in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Arten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zur Größenbestimmung, die Ihnen in der Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basis HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS-Grundsyntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Konzept der intrinsischen Größe verstehen.</li>
          <li>Absolute und prozentuale Größen festlegen.</li>
          <li>Maximale und minimale Breiten und Höhen festlegen.</li>
          <li>Viewport-Einheiten verstehen und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, die festgelegt ist, bevor sie durch CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, die als ihre **intrinsische Größe** beschrieben werden. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch irgendeine Formatierung, die wir zufällig anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und weder seine Höhe noch seine Breite ändern, sei es durch Attribute im `<img>`-Tag oder durch CSS, wird es mit dieser intrinsischen Größe angezeigt. Wir haben dem Bild im folgenden Beispiel einen Rahmen gegeben, damit Sie den Umfang seiner in der Datei definierten Größe sehen können.

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

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} in Ihr HTML einfügen, ohne Inhalt, und dann ihm wie beim Bild einen Rahmen geben, sehen Sie eine Linie auf der Seite. Dies ist der eingestürzte Rahmen des Elements — es gibt keinen Inhalt, der ihn offen hält. In unserem Beispiel unten erstreckt sich dieser Rahmen auf die Breite des Containers, weil es sich um ein Blocklevel-Element handelt, ein Verhalten, das Ihnen vertraut sein sollte. Es hat keine Höhe (oder Größe in der Blockdimension), da kein Inhalt vorhanden ist.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text")}}

Im obigen Beispiel versuchen Sie, etwas Text in das leere Element einzufügen. Der Rahmen enthält nun diesen Text, weil die Höhe des Elements durch den Inhalt definiert ist. Daher kommt die Größe dieses `<div>` in der Blockdimension von der Größe des Inhalts. Wieder ist dies die intrinsische Größe des Elements — seine Größe wird durch seinen Inhalt definiert.

## Eine spezifische Größe festlegen

Wir können natürlich den Elementen in unserem Design eine spezifische Größe zuweisen. Wenn einem Element eine Größe zugewiesen wird (deren Inhalt dann in diese Größe passen muss), sprechen wir von einer **extrinsischen Größe**. Nehmen Sie unser `<div>` aus dem obigen Beispiel — wir können ihm spezifische {{cssxref("width")}} und {{cssxref("height")}} Werte geben, und es wird jetzt diese Größe haben, unabhängig davon, welcher Inhalt hineingelegt wird. Eine festgelegte Höhe kann dazu führen, dass Inhalte überlaufen, wenn mehr Inhalt vorhanden ist, als das Element Platz hat, um ihn aufzunehmen (Sie werden mehr über das [Überlaufen](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) in einer nachfolgenden Lektion erfahren).

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

Aufgrund dieses Problems des Überlaufens müssen wir sehr vorsichtig sein, wenn wir die Höhe von Elementen mit Längen oder Prozentangaben im Web festlegen.

### Verwendung von Prozentangaben

In vielerlei Hinsicht verhalten sich Prozentangaben wie Längeneinheiten, und wie wir in der [Lektion über Werte und Einheiten](https://developer.mozilla.org/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages) besprochen haben, können sie oft austauschbar mit Längen verwendet werden. Wenn Sie ein Prozent verwenden, müssen Sie wissen, wovon es ein Prozent _ist_. Im Fall einer Box in einem anderen Container wird die Breite der Kinderbox ein Prozent der Breite des übergeordneten Containers sein.

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

Dies ist der Fall, weil Prozentwerte anhand der Größe des umschließenden Blocks aufgelöst werden. Ohne Prozentangabe würde unser `<div>` `100%` des verfügbaren Platzes einnehmen, da es sich um ein Blocklevel-Element handelt. Wenn wir ihm eine prozentuale Breite geben, wird dies zu einem Prozentsatz des Raums, den es normalerweise füllen würde.

### Prozentuale Abstände und Abstände

Wenn Sie `margins` und `padding` als Prozentsatz festlegen, kann es zu seltsamem Verhalten kommen. Im untenstehenden Beispiel haben wir eine Box. Wir haben der inneren Box einen {{cssxref("margin")}} von 10% und ein {{cssxref("padding")}} von `10%` gegeben. Der Abstand und die Polsterung an der Ober- und Unterseite der Box sind gleich groß wie die Abstände und Polsterungen an den linken und rechten Seiten.

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

Sie könnten erwarten, dass beispielsweise die prozentualen oberen und unteren Abstände ein Prozentsatz der Höhe des Elements sind und die prozentualen linken und rechten Abstände ein Prozentsatz der Breite des Elements. Dies ist jedoch nicht der Fall!

Wenn Sie Margin und Padding in Prozent angeben, wird der Wert basierend auf der **Inline-Größe** des umgebenden Blocks berechnet — daher auf der Breite, wenn Sie in einer horizontalen Sprache arbeiten. In unserem Beispiel sind alle Abstände und Polsterungen `10%` der Breite. Dies bedeutet, dass Sie rund um die Box gleich große Abstände und Polsterungen haben können. Dies ist erwähnenswert, wenn Sie auf diese Weise Prozentsätze verwenden.

## min- und max-Größen

Neben der festen Größenzuweisung können wir CSS anweisen, einem Element eine minimale oder maximale Größe zu geben. Wenn Sie eine Box haben, die eine variable Menge an Inhalt enthalten kann, und Sie möchten, dass sie _mindestens_ eine bestimmte Höhe hat, können Sie die {{cssxref("min-height")}} Eigenschaft festlegen. Die Box wird immer mindestens diese Höhe haben, wird aber bei mehr Inhalt größer als die Höhe, für die sie bei Minimumhöhe Platz hat.

Im Beispiel unten sehen Sie zwei Boxen, beide mit einer definierten `min-height` von 100 Pixeln. Die Box links ist 100 Pixel hoch; die Box rechts hat Inhalte, die mehr Platz benötigen, und daher ist sie größer als 100 Pixel.

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

Dies ist sehr nützlich, um Überläufe bei variablen Mengen von Inhalten zu vermeiden.

Ein häufiger Gebrauch von {{cssxref("max-width")}} ist, um Bilder zu skalieren, wenn nicht genügend Platz vorhanden ist, um sie in ihrer intrinsischen Breite anzuzeigen, während sichergestellt wird, dass sie nicht größer als diese Breite werden.

Wenn Sie beispielsweise `width: 100%` auf einem Bild setzen und seine intrinsische Breite kleiner als sein Container ist, würde das Bild gezwungen, sich zu strecken und größer zu werden, wodurch es verpixelt erscheinen würde.

Wenn Sie stattdessen `max-width: 100%` verwenden und seine intrinsische Breite kleiner als sein Container ist, wird das Bild nicht gezwungen, sich zu strecken und größer zu werden, wodurch eine Verpixelung verhindert wird.

Im folgenden Beispiel haben wir dasselbe Bild dreimal verwendet. Dem ersten Bild wurde `width: 100%` gegeben, und es befindet sich in einem Container, der größer als es ist, daher erstreckt es sich auf die Containerbreite. Dem zweiten Bild wurde `max-width: 100%` zugewiesen und es streckt sich daher nicht, um den Container zu füllen. Die dritte Box enthält dasselbe Bild erneut, ebenfalls mit `max-width: 100%`; in diesem Fall sehen Sie, wie es sich verkleinert hat, um in die Box zu passen.

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

Diese Technik wird verwendet, um Bilder _reaktionsfähig_ zu machen, sodass sie bei Betrachtung auf einem kleineren Gerät entsprechend skaliert werden. Sie sollten jedoch nicht diese Technik verwenden, um wirklich große Bilder zu laden und sie dann im Browser herunterzuskalieren. Bilder sollten so dimensioniert sein, dass sie nicht größer sind, als sie für die größte Größe sein müssen, in der sie im Design angezeigt werden. Das Herunterladen übergroßer Bilder führt dazu, dass Ihre Seite langsam wird, und es kann Benutzer mehr Geld kosten, wenn sie eine gemessene Verbindung nutzen.

## Viewport-Einheiten

Der Viewport — der sichtbare Bereich Ihrer Seite im Browser, den Sie zum Betrachten einer Website verwenden — hat ebenfalls eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw` Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mithilfe dieser Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht 1% der Viewport-Höhe, und `1vw` entspricht 1% der Viewport-Breite. Sie können diese Einheiten verwenden, um Boxen zu dimensionieren, aber auch Schrift. Im folgenden Beispiel haben wir eine Box, die als 20vh und 20vw dimensioniert ist. Die Box enthält den Buchstaben `A`, dem eine {{cssxref("font-size")}} von 10vh zugewiesen wurde.

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

Wenn Sie die `vh` und `vw` Werte ändern, ändert dies die Größe der Box oder Schrift; auch das Ändern der Viewport-Größe wird ihre Größen ändern, da sie relativ zum Viewport dimensioniert sind. Um das Beispiel zu ändern, wenn Sie die Viewport-Größe ändern, müssen Sie das Beispiel in einem neuen Browserfenster laden, das Sie ändern können (da das eingebettete `<iframe>`, das das angezeigte Beispiel enthält, dessen Viewport ist). Öffnen Sie das Beispiel, ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe der Box und des Textes passiert.

Dinge entsprechend dem Viewport zu dimensionieren, kann in Ihren Designs nützlich sein. Zum Beispiel, wenn Sie einen ganzseitigen Heldenabschnitt anzeigen möchten, bevor der Rest Ihres Inhalts kommt, indem Sie diesen Teil Ihrer Seite `100vh` hoch machen, wird der restliche Inhalt unter den Viewport geschoben, was bedeutet, dass er erst erscheint, wenn das Dokument gescrollt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Größenbestimmung](/de/docs/Learn_web_development/Core/Styling_basics/Sizing_tasks).

## Zusammenfassung

Diese Lektion hat Ihnen einige wichtige Themen aufgezeigt, auf die Sie beim Größen von Elementen im Web stoßen könnten. Wenn Sie zum [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) übergehen, wird die Größenbestimmung von entscheidender Bedeutung sein, um die verschiedenen Layoutmethoden zu meistern, daher ist es sinnvoll, die Konzepte hier zu verstehen, bevor Sie fortfahren.

Im nächsten Artikel werden wir uns ansehen, wie Hintergründe und Ränder in CSS manipuliert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
