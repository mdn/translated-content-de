---
title: Größe von Elementen in CSS
slug: Learn/CSS/Building_blocks/Sizing_items_in_CSS
l10n:
  sourceCommit: 14f294a447447b484ec1589636d04af1a5794288
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}

In den bisherigen Lektionen haben Sie verschiedene Möglichkeiten kennengelernt, wie Sie Elemente auf einer Webseite mit CSS dimensionieren können. Zu verstehen, wie groß die unterschiedlichen Funktionen in Ihrem Design sein werden, ist wichtig. Deshalb werden wir in dieser Lektion die verschiedenen Möglichkeiten zusammenfassen, wie Elemente über CSS eine Größe erhalten, und einige Begriffe zur Größenbestimmung definieren, die Ihnen in Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie die
        <a href="/de/docs/Learn/CSS/First_steps">ersten Schritte in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen der verschiedenen Möglichkeiten, Dinge in CSS zu dimensionieren.</td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, die eingestellt wird, bevor sie von CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, die als **intrinsische Größe** beschrieben werden. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch irgendeine Formatierung, die wir möglicherweise anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und seine Höhe oder Breite nicht ändern, entweder durch Attribute auf dem `<img>`-Tag oder durch CSS, wird es in dieser intrinsischen Größe angezeigt. Wir haben dem Bild im folgenden Beispiel einen Rahmen gegeben, damit Sie die Ausdehnung seiner Größe sehen können, wie sie in seiner Datei festgelegt ist.

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

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} zu Ihrem HTML hinzufügen, ohne Inhalt, und ihm dann einen Rahmen geben, wie wir es beim Bild getan haben, sehen Sie eine Linie auf der Seite. Dies ist der zusammengefallene Rahmen auf dem Element — es gibt keinen Inhalt, um ihn offenzuhalten. In unserem Beispiel unten erstreckt sich dieser Rahmen über die Breite des Containers, da er ein Block-Level-Element ist, ein Verhalten, das Ihnen allmählich vertraut sein sollte. Er hat keine Höhe (oder Größe in der Blockdimension), weil es keinen Inhalt gibt.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text")}}

Versuchen Sie im obigen Beispiel, etwas Text in das leere Element einzufügen. Der Rahmen enthält nun diesen Text, da die Höhe des Elements durch den Inhalt definiert wird. Daher wird die Größe dieses `<div>` in der Blockdimension durch die Größe des Inhalts bestimmt. Dies ist wiederum die intrinsische Größe des Elements — seine Größe wird durch seinen Inhalt definiert.

## Eine spezifische Größe festlegen

Wir können natürlich den Elementen in unserem Design eine spezifische Größe geben. Wenn einem Element eine Größe zugewiesen wird (dessen Inhalt dann in diese Größe passen muss), sprechen wir von einer **extrinsischen Größe**. Nehmen wir unser `<div>` aus dem obigen Beispiel — wir können ihm spezifische {{cssxref("width")}}- und {{cssxref("height")}}-Werte geben, und es wird nun diese Größe haben, unabhängig davon, welcher Inhalt hineingelegt wird. Wie wir in [unserer vorherigen Lektion über Overflows](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) entdeckt haben, kann eine festgelegte Höhe dazu führen, dass der Inhalt überläuft, wenn es mehr Inhalt gibt, als das Element Platz bietet.

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

Aufgrund dieses Überlaufproblems müssen wir die Höhe von Elementen mit Längen oder Prozentsätzen im Web sehr sorgfältig festlegen.

### Verwendung von Prozentsätzen

In vielerlei Hinsicht verhalten sich Prozentsätze wie Längeneinheiten, und wie wir in der [Lektion zu Werten und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages) besprochen haben, können sie oft austauschbar mit Längen verwendet werden. Wenn Sie einen Prozentsatz verwenden, müssen Sie wissen, wovon er ein Prozentsatz ist. Im Fall eines Kastens in einem anderen Container, wenn Sie dem Kindkasten eine prozentuale Breite geben, wird es ein Prozentsatz der Breite des übergeordneten Containers sein.

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

Dies liegt daran, dass Prozentsätze sich auf die Größe des enthaltenden Blocks beziehen. Ohne angewendeten Prozentsatz würde unser `<div>` 100% des verfügbaren Platzes einnehmen, da es sich um ein Block-Level-Element handelt. Wenn wir ihm eine prozentuale Breite geben, wird dies zu einem Prozentsatz des Raums, den es normalerweise füllen würde.

### Prozentsatzliche Abstände und Auffüllungen

Wenn Sie `margins` und `padding` als Prozentsatz festlegen, bemerken Sie möglicherweise ein seltsames Verhalten. Im untenstehenden Beispiel haben wir einen Kasten. Wir haben dem inneren Kasten einen {{cssxref("margin")}} von 10% und einen {{cssxref("padding")}} von 10% gegeben. Die Auffüllung und der Abstand oben und unten im Kasten haben die gleiche Größe wie die Auffüllung und der Abstand links und rechts.

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

Sie könnten erwarten, dass beispielsweise die prozentualen Abstände oben und unten ein Prozentsatz der Höhe des Elements sind, und die prozentualen Abstände links und rechts ein Prozentsatz der Breite des Elements sind. Das ist jedoch nicht der Fall!

Wenn Sie Auffüllung und Abstand in Prozenten festlegen, wird der Wert von der **Inline-Größe** des enthaltenden Blocks berechnet — also die Breite, wenn Sie in einer horizontalen Sprache arbeiten. In unserem Beispiel sind alle Abstände und Auffüllungen 10% der Breite. Das bedeutet, dass Sie gleich große Abstände und Auffüllungen rund um den Kasten haben können. Dies ist eine Tatsache, die es wert ist, sich zu merken, wenn Sie Prozentsätze auf diese Weise verwenden.

## Min- und Max-Größen

Neben dem Festlegen einer festen Größe können wir CSS auch anweisen, einem Element eine Mindest- oder Maximalgröße zu geben. Wenn Sie einen Kasten haben, der eine variable Menge an Inhalt enthalten könnte, und Sie wollen immer, dass er _mindestens_ eine bestimmte Höhe hat, könnten Sie die Eigenschaft {{cssxref("min-height")}} darauf setzen. Der Kasten wird immer mindestens diese Höhe haben, wird aber bei mehr Inhalt wachsen, als der Kasten bei seiner Mindesthöhe aufnehmen kann.

Im Beispiel unten sehen Sie zwei Kästen, beide mit einer definierten `min-height` von 100 Pixeln. Der Kasten auf der linken Seite ist 100 Pixel hoch; der Kasten auf der rechten Seite hat Inhalt, der mehr Platz benötigt, und ist daher größer als 100 Pixel geworden.

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

Dies ist sehr nützlich, um mit variierenden Mengen von Inhalten umzugehen und einen Überlauf zu vermeiden.

Eine häufige Verwendung von {{cssxref("max-width")}} ist es, Bilder zu verkleinern, wenn nicht genug Platz vorhanden ist, sie in ihrer intrinsischen Breite anzuzeigen, und sicherzustellen, dass sie nicht größer als diese Breite werden.

Als Beispiel, wenn Sie `width: 100%` auf ein Bild setzen und seine intrinsische Breite kleiner als sein Container ist, wird das Bild gezwungen sein zu strecken und größer zu werden, was dazu führt, dass es pixelig aussieht.

Wenn Sie stattdessen `max-width: 100%` verwenden und seine intrinsische Breite kleiner als sein Container ist, wird das Bild nicht gezwungen zu strecken und größer zu werden, wodurch Pixelbildung verhindert wird.

Im folgenden Beispiel haben wir dasselbe Bild dreimal verwendet. Das erste Bild wurde mit `width: 100%` versehen und befindet sich in einem Container, der größer ist als es selbst, daher streckt es sich zur Containerbreite. Das zweite Bild hat `max-width: 100%` und streckt sich daher nicht, um den Container zu füllen. Der dritte Kasten enthält dasselbe Bild erneut, auch mit `max-width: 100%` gesetzt; in diesem Fall sehen Sie, wie es herunterskaliert wurde, um in den Kasten zu passen.

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

Diese Technik wird verwendet, um Bilder _responsiv_ zu machen, sodass sie auf einem kleineren Gerät entsprechend herunterskalieren. Sie sollten diese Technik jedoch nicht verwenden, um wirklich große Bilder zu laden und dann im Browser herunterzuskalieren. Bilder sollten angemessen dimensioniert sein, um nicht größer als nötig zu sein für die größte Größe, in der sie im Design angezeigt werden. Das Herunterladen von übermäßig großen Bildern wird dazu führen, dass Ihre Website langsam wird, und es kann die Benutzer mehr Geld kosten, wenn sie eine volumenabhängige Verbindung haben.

> [!NOTE]
> Erfahren Sie mehr über [Techniken für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Viewport-Einheiten

Der Viewport — das ist der sichtbare Bereich Ihrer Seite im Browser, den Sie verwenden, um eine Website anzusehen — hat ebenfalls eine Größe. In CSS gibt es Einheiten, die sich auf die Größe des Viewports beziehen — die `vw`-Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht 1% der Viewport-Höhe und `1vw` entspricht 1% der Viewport-Breite. Sie können diese Einheiten verwenden, um Kästen zu dimensionieren, aber auch Text. Im folgenden Beispiel haben wir einen Kasten, der als 20vh und 20vw dimensioniert ist. Der Kasten enthält einen Buchstaben `A`, der eine {{cssxref("font-size")}} von 10vh hat.

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

Wenn Sie die `vh`- und `vw`-Werte ändern, ändert sich die Größe des Kastens oder der Schriftart; auch das Ändern der Viewport-Größe wird ihre Größen ändern, da sie relativ zum Viewport dimensioniert sind. Um das Beispiel zu sehen, wenn Sie die Viewport-Größe ändern, müssen Sie das Beispiel in einem neuen Browserfenster laden, das Sie anpassen können (da das eingebettete `<iframe>`, das das oben gezeigte Beispiel enthält, sein Viewport ist). Öffnen Sie das Beispiel, ändern Sie die Größe des Browserfensters, und beobachten Sie, was mit der Größe des Kastens und des Textes passiert.

Dinge nach dem Viewport zu dimensionieren, kann in Ihrem Design nützlich sein. Wenn Sie beispielsweise einen vollständigen Hero-Bereich anzeigen möchten, bevor der Rest Ihres Inhalts erscheint, bedeutet das, diesen Teil Ihrer Seite 100vh hoch zu machen, dass der Rest des Inhalts unter den Viewport gedrückt wird, was bedeutet, dass er nur erscheint, wenn das Dokument gescrollt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Größenbestimmung](/de/docs/Learn/CSS/Building_blocks/Sizing_tasks).

## Zusammenfassung

Diese Lektion hat Ihnen einen Überblick über einige Schlüsselthemen gegeben, denen Sie bei der Größenbestimmung von Elementen im Web begegnen könnten. Wenn Sie sich in Richtung [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) bewegen, wird die Größenbestimmung sehr wichtig, um die verschiedenen Layout-Methoden zu meistern. Es lohnt sich, die hier beschriebenen Konzepte zu verstehen, bevor Sie weitermachen.

Im nächsten Artikel werden wir uns ansehen, wie [Bilder, Medien und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements) in CSS behandelt werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}
