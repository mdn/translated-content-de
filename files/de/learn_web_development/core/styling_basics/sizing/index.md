---
title: Größenanpassung von Elementen in CSS
short-title: Sizing
slug: Learn_web_development/Core/Styling_basics/Sizing
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In den bisherigen Lektionen sind Sie verschiedenen Möglichkeiten begegnet, wie man Elemente auf einer Webseite mit CSS größenmäßig anpasst. Zu verstehen, wie groß die unterschiedlichen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zur Größenanpassung, die Ihnen in der Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Getting_started">Grundlegende CSS-Syntax</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Konzept der intrinsischen Größe verstehen.</li>
          <li>Absolute und prozentuale Größen festlegen.</li>
          <li>Maximale und minimale Breite und Höhe festlegen.</li>
          <li>Viewport-Einheiten verstehen und warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, die festgelegt ist, bevor sie durch CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, die als ihre **intrinsische Größe** beschrieben werden. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch irgendeine Formatierung, die wir eventuell anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und dessen Höhe oder Breite nicht ändern, weder durch Attribute im `<img>`-Tag noch durch CSS, wird es in dieser intrinsischen Größe angezeigt. Wir haben dem Bild im folgenden Beispiel einen Rahmen gegeben, damit Sie das Ausmaß seiner in der Datei definierten Größe sehen können.

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

Ein leerer {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie einen {{htmlelement("div")}} zu Ihrem HTML hinzufügen, ohne Inhalt, und ihm einen Rahmen geben, wie wir es mit dem Bild gemacht haben, werden Sie eine Linie auf der Seite sehen. Dies ist der zusammengefallene Rahmen des Elements — es gibt keinen Inhalt, der ihn offen hält. In unserem Beispiel unten dehnt sich dieser Rahmen auf die Breite des Containers aus, da es sich um ein Block-Element handelt, ein Verhalten, das Ihnen inzwischen vertraut sein sollte. Es hat keine Höhe (oder Größe in der Block-Dimension), weil kein Inhalt vorhanden ist.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text")}}

Im obigen Beispiel versuchen Sie, etwas Text in das leere Element einzufügen. Der Rahmen enthält jetzt diesen Text, da die Höhe des Elements durch den Inhalt definiert wird. Daher stammt die Größe dieses `<div>` in der Block-Dimension von der Größe des Inhalts. Dies ist wiederum die intrinsische Größe des Elements — seine Größe wird durch seinen Inhalt definiert.

## Eine bestimmte Größe festlegen

Wir können natürlich Elementen in unserem Design eine bestimmte Größe geben. Wenn einem Element eine Größe gegeben wird (dessen Inhalt dann in diese Größe passen muss), sprechen wir von einer **extrinsischen Größe**. Nehmen Sie unser `<div>` aus dem obigen Beispiel — wir können ihm spezifische {{cssxref("width")}}- und {{cssxref("height")}}-Werte geben und es wird diese Größe haben, unabhängig davon, was für ein Inhalt hineingefügt wird. Eine festgelegte Höhe kann zu einem Überlauf führen, wenn es mehr Inhalt gibt, als in das Element passt (mehr über [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) erfahren Sie in einer späteren Lektion).

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

Aufgrund dieses Überlaufproblems müssen wir auf dem Web sehr vorsichtig sein, wenn wir die Höhe von Elementen mit Längen oder Prozentwerten festlegen.

### Verwendung von Prozentwerten

In vielerlei Hinsicht verhalten sich Prozentsätze wie Längeneinheiten, und wie in der [Lektion über Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages) besprochen, können sie oft austauschbar mit Längen verwendet werden. Wenn Sie einen Prozentsatz verwenden, müssen Sie wissen, von was er ein Prozentsatz ist. Im Fall eines Kastens innerhalb eines anderen Containers, wenn Sie dem Kasten eine prozentuale Breite geben, wird sie ein Prozentsatz der Breite des übergeordneten Containers sein.

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

Dies liegt daran, dass sich Prozentsätze auf die Größe des umschließenden Blocks beziehen. Ohne angewendete Prozentsätze würde unser `<div>` `100%` des verfügbaren Raums einnehmen, da es ein Block-Element ist. Wenn wir ihm eine prozentuale Breite geben, wird dies zu einem Prozentsatz des Raums, den es normalerweise ausfüllen würde.

### Prozentuale Ränder und Abstände

Wenn Sie `margins` und `padding` als Prozentsätze festlegen, können Sie ein seltsames Verhalten bemerken. Im untenstehenden Beispiel haben wir einen Kasten. Wir haben dem inneren Kasten einen {{cssxref("margin")}} von 10% und ein {{cssxref("padding")}} von `10%` gegeben. Das padding und der margin oben und unten auf dem Kasten sind genauso groß wie das padding und der margin links und rechts.

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

Sie könnten erwarten, dass beispielsweise die prozentualen Ränder oben und unten ein Prozentsatz der Höhe des Elements und die prozentualen Ränder links und rechts ein Prozentsatz der Breite des Elements sind. Dies ist jedoch nicht der Fall!

Wenn Sie margin und padding in Prozent festlegen, wird der Wert aus der **inline size** des umschließenden Blocks berechnet — also aus der Breite, wenn in einer horizontalen Sprache gearbeitet wird. In unserem Beispiel sind alle margin und padding `10%` der Breite. Dies bedeutet, dass Sie gleich große Ränder und Abstände um den gesamten Kasten haben können. Dies ist ein wichtiger Punkt, wenn Sie Prozentsätze auf diese Weise verwenden.

## min- und max-Größen

Zusätzlich zur Festlegung einer festen Größe können wir CSS anweisen, einem Element eine Mindest- oder Maximalgröße zu geben. Wenn Sie einen Kasten haben, der eine variable Menge an Inhalt enthalten könnte, und Sie immer möchten, dass er _mindestens_ eine bestimmte Höhe hat, könnten Sie die {{cssxref("min-height")}}-Eigenschaft darauf setzen. Der Kasten wird immer mindestens diese Höhe haben, wächst aber höher, wenn es mehr Inhalt gibt als der Kasten bei seiner Mindesthöhe verstauen kann.

Im folgenden Beispiel können Sie zwei Kästen sehen, die beide eine definierte `min-height` von 100 Pixeln haben. Der Kasten auf der linken Seite ist 100 Pixel hoch; der Kasten auf der rechten Seite hat Inhalt, der mehr Platz benötigt, und ist daher höher als 100 Pixel gewachsen.

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

Dies ist sehr nützlich, um Überläufe zu vermeiden, wenn Sie mit variablen Inhaltsmengen zu tun haben.

Eine häufige Verwendung von {{cssxref("max-width")}} besteht darin, Bilder zu verkleinern, wenn nicht genug Platz vorhanden ist, um sie in ihrer intrinsischen Breite anzuzeigen, während sichergestellt wird, dass sie nicht größer werden als diese Breite.

Wenn Sie beispielsweise `width: 100%` auf ein Bild setzen und seine intrinsische Breite kleiner als sein Container ist, wird das Bild gezwungen, sich zu strecken und größer zu werden, was dazu führt, dass es pixelig aussieht.

Wenn Sie stattdessen `max-width: 100%` verwenden und die intrinsische Breite ist kleiner als sein Container, wird das Bild nicht gezwungen, sich zu strecken und größer zu werden, wodurch eine Pixelbildung vermieden wird.

Im folgenden Beispiel haben wir dasselbe Bild dreimal verwendet. Das erste Bild hat `width: 100%` und befindet sich in einem Container, der größer ist als es selbst, daher dehnt es sich auf die Containerbreite aus. Das zweite Bild hat `max-width: 100%` gesetzt und dehnt sich daher nicht aus, um den Container zu füllen. Das dritte Box enthält dasselbe Bild noch einmal, auch mit `max-width: 100%` gesetzt; in diesem Fall können Sie sehen, wie es sich verkleinert hat, um in die Box zu passen.

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

Diese Technik wird verwendet, um Bilder _reaktionsfähig_ zu machen, so dass sie bei Betrachtung auf einem kleineren Gerät angemessen verkleinert werden. Sie sollten jedoch diese Technik nicht verwenden, um wirklich große Bilder herunterzuladen und dann im Browser zu verkleinern. Bilder sollten passend groß sein, um nicht größer zu sein als nötig für die größte Größe, die im Design angezeigt wird. Das Herunterladen übermäßig großer Bilder wird dazu führen, dass Ihre Website langsam wird, und es kann für Benutzer mehr kosten, wenn sie eine gemessene Verbindung verwenden.

## Viewport-Einheiten

Der Viewport — der sichtbare Bereich Ihrer Seite im Browser, den Sie verwenden, um eine Seite zu betrachten — hat ebenfalls eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw`-Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers skalieren.

`1vh` entspricht 1% der Viewport-Höhe und `1vw` entspricht 1% der Viewport-Breite. Sie können diese Einheiten verwenden, um Boxen zu skalieren, aber auch Text. Im Beispiel unten haben wir eine Box, die mit 20vh und 20vw skaliert wurde. Die Box enthält einen Buchstaben `A`, dem eine {{cssxref("font-size")}} von 10vh gegeben wurde.

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

Wenn Sie die `vh`- und `vw`-Werte ändern, ändert sich die Größe der Box oder der Schrift; das Ändern der Viewport-Größe ändert auch deren Größen, da sie relativ zum Viewport skaliert werden. Um zu sehen, wie sich das Beispiel ändert, müssen Sie das Beispiel in einem neuen Browserfenster laden, das Sie in der Größe ändern können (da das eingebettete `<iframe>`, das das oben gezeigte Beispiel enthält, seinen eigenen Viewport hat). Öffnen Sie das Beispiel, ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe der Box und des Textes passiert.

Größenanpassung nach dem Viewport kann in Ihren Designs nützlich sein. Wenn Sie beispielsweise einen vollflächigen Hero-Bereich anzeigen möchten, bevor der Rest Ihres Inhalts erscheint, wird er durch die Festlegung dieses Teils Ihrer Seite auf `100vh` Höhe den Rest des Inhalts unterhalb des Viewports schieben, was bedeutet, dass er erst erscheint, wenn das Dokument gescrollt wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Größenanpassung](/de/docs/Learn_web_development/Core/Styling_basics/Sizing_tasks).

## Zusammenfassung

Diese Lektion hat Ihnen eine Zusammenfassung einiger wichtiger Probleme gegeben, auf die Sie stoßen können, wenn Sie Dinge im Web größenmäßig anpassen. Wenn Sie zu [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) übergehen, wird Größenanpassung sehr wichtig, um die verschiedenen Layout-Methoden zu beherrschen, daher ist es wert, die Konzepte hier zu verstehen, bevor Sie fortfahren.

Im nächsten Artikel betrachten wir, wie Hintergründe und Rahmen in CSS manipuliert werden.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
