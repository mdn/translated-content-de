---
title: Größen von Elementen in CSS
short-title: Sizing
slug: Learn_web_development/Core/Styling_basics/Sizing
l10n:
  sourceCommit: 38397b7418708bd0a7c5ee8e69b16e985c85de33
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics")}}

In den bisherigen Lektionen sind Ihnen verschiedene Möglichkeiten begegnet, um Elemente auf einer Webseite mit CSS zu dimensionieren. Zu verstehen, wie groß die verschiedenen Elemente in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zum Thema Größenbestimmung, die Ihnen in Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
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
          <li>Viewport-Einheiten verstehen und wissen, warum sie nützlich sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Elementen

HTML-Elemente haben eine natürliche Größe, die festgelegt ist, bevor sie durch CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, die als ihre **intrinsische Größe** beschrieben werden. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch eine Formatierung, die wir eventuell anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und dessen Höhe oder Breite nicht ändern, entweder durch Verwendung von `<img>` Attributen oder CSS, wird es mit dieser intrinsischen Größe angezeigt. Wir haben dem Bild im untenstehenden Beispiel einen Rahmen gegeben, damit Sie das Ausmaß seiner Größe sehen können, wie es in seiner Datei definiert ist.

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

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} zu Ihrem HTML hinzufügen, ohne Inhalt und es genau wie das Bild mit einem Rahmen versehen, sehen Sie eine Linie auf der Seite. Dies ist der zusammengebrochene Rahmen des `<div>` — es gibt keinen Inhalt, der ihn offenhält.

In unserem Beispiel unten deckt dieser Rahmen die gesamte Breite des Containers ab, da es sich um ein Block-Element handelt, ein Verhalten, das Ihnen langsam vertraut werden sollte. Es hat keine Höhe (oder Größe in der Blockdimension), weil es keinen Inhalt hat.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text","100%", "60")}}

Im obigen Beispiel versuchen Sie, etwas Text in das leere Element einzufügen. Sie werden sehen, dass sich der Rahmen öffnet, weil die Höhe des Elements durch den Inhalt definiert wird. Auch dies ist die intrinsische Größe des Elements — seine Größe wird durch seinen Inhalt bestimmt.

## Eine spezifische Größe festlegen

Wir können natürlich den Elementen in unserem Design eine spezifische Größe geben. Wenn einem Element eine Größe zugewiesen wird (deren Inhalt dann in diese Größe passen muss), sprechen wir von einer **extrinsischen Größe**.

Im nächsten Beispiel geben wir zwei `<div>`s spezifische {{cssxref("width")}} und {{cssxref("height")}} Werte, und sie haben jetzt diese Größe, unabhängig davon, welcher Inhalt in sie eingebracht wird. Wie das rechte `<div>` zeigt, kann eine festgelegte Höhe dazu führen, dass Inhalt überläuft, wenn mehr Inhalt vorhanden ist, als in das enthaltene Element passt (über [Overflow](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) lernen Sie mehr in einer späteren Lektion).

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

Aufgrund dieses Überlaufproblems müssen wir die Höhe von Elementen mit Längen oder Prozentsätzen im Web sehr vorsichtig festlegen.

### Verwendung von Prozenten

In vielerlei Hinsicht verhalten sich Prozentangaben wie Längeneinheiten, und wie wir [in der Lektion über Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages) besprochen haben, können sie oft austauschbar mit Längen verwendet werden. Wenn Sie einen Prozentsatz verwenden, müssen Sie sich bewusst sein, wovon er ein Prozentsatz _ist_. Im Fall einer Box innerhalb eines anderen Containers, wenn Sie der Kindbox eine prozentuale Breite geben, wird sie ein Prozentsatz der Breite des übergeordneten Containers sein.

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

Dies liegt daran, dass Prozentsätze in Bezug auf die Größe des umgebenden Blocks aufgelöst werden. Ohne angewendete Prozentsätze nimmt unser `box` `<div>` `100%` des verfügbaren Platzes ein, da es sich um ein Block-Element handelt. Wenn wir ihm eine prozentuale Breite geben, wird dies ein Prozentsatz des Raums, den es normalerweise ausfüllen würde.

Versuchen Sie, das obige Beispiel zu bearbeiten:

1. Entfernen Sie die `width`-Deklaration des `box` `<div>`, um zu überprüfen, dass es standardmäßig `100%` der verfügbaren `width` einnimmt.
2. Machen Sie Ihre vorherige Änderung rückgängig — geben Sie dem `box` `<div>` erneut eine `width` von `50%`.
3. Geben Sie dem `container` `<div>` eine `width` von `50%`. Sie werden sehen, dass die `width` des `box` `<div>` kleiner wird, da sie relativ zur `width` ihres Containers ist.

### Prozentuale Margins und Padding

Wenn Sie `margins` und `padding` als Prozentsatz setzen, können Sie ein merkwürdiges Verhalten bemerken.

Im folgenden Beispiel haben wir eine Box, der wir eine {{cssxref("margin")}} von 10% und eine {{cssxref("padding")}} von `10%` gegeben haben. Das Padding und der Rand oben und unten der Box sind gleich groß wie das Padding und der Rand links und rechts.

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

Man könnte erwarten, dass die prozentualen Ränder oben und unten ein Prozentsatz der Höhe des Elements sind und die prozentualen Ränder links und rechts ein Prozentsatz der Breite des Elements sind. Das ist jedoch nicht der Fall!

Wenn Sie Rand und Padding in Prozenten angeben, wird der Wert von der **Inline-Größe** des umgebenden Blocks berechnet — daher die Breite, wenn in einer horizontalen Sprache gearbeitet wird. In unserem Beispiel sind alle Ränder und das Padding `10%` der Breite. Das bedeutet, Sie können gleich große Ränder und Padding um die gesamte Box haben. Dies ist ein Fakt, den Sie sich merken sollten, wenn Sie Prozentsätze auf diese Weise verwenden.

## min- und max-Größen

Zusätzlich zur Festlegung einer festen Größe können wir CSS bitten, einem Element eine minimale oder maximale Größe zu geben. Wenn Sie eine Box haben, die eine variable Menge an Inhalt enthalten kann und Sie immer möchten, dass sie _mindestens_ eine bestimmte Höhe hat, könnten Sie die {{cssxref("min-height")}} Eigenschaft darauf setzen. Die Box wird immer mindestens diese Höhe haben, aber dann größer werden, wenn mehr Inhalt vorhanden ist, als die Box bei ihrer minimalen Höhe Platz hat.

Im nächsten Beispiel sehen Sie zwei Boxen, beide mit einer definierten `min-height` von 100 Pixeln. Die Box auf der linken Seite ist 100 Pixel hoch; die Box auf der rechten Seite enthält Inhalt, der mehr Platz benötigt, und deshalb ist sie höher als 100 Pixel geworden.

```html live-sample___min-height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a min-height set. This box has content in it, which
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

Dies ist sehr nützlich, um Überlauf zu vermeiden, wenn mit variablen Mengen an Inhalt gearbeitet wird.

### `max-width` bei Bildern

Eine häufige Verwendung von {{cssxref("max-width")}} besteht darin, Bilder zu verkleinern, wenn nicht genug Platz vorhanden ist, um sie in ihrer intrinsischen Breite anzuzeigen, während sichergestellt wird, dass sie nicht größer als diese Breite werden.

Zum Beispiel, wenn Sie `width: 100%` auf einem Bild setzen würden und dessen intrinsische Breite kleiner als der Container ist, würde das Bild gezwungen werden, sich zu dehnen und größer zu werden, was dazu führt, dass es pixelig aussieht.

Wenn Sie stattdessen `max-width: 100%` verwenden und seine intrinsische Breite kleiner als der Container ist, wird das Bild nicht gezwungen, sich zu dehnen und größer zu werden, was Pixeligkeit verhindert.

Im Beispiel unten haben wir dasselbe Bild dreimal eingebettet:

- Das erste Bild wurde mit `width: 100%` angegeben und befindet sich in einem Container, der größer ist als es, daher dehnt es sich auf die Containerbreite aus.
- Das zweite Bild hat `max-width: 100%` gesetzt und dehnt sich daher nicht aus, um den Container zu füllen.
- Die dritte Box enthält dasselbe Bild erneut, ebenfalls mit `max-width: 100%` gesetzt; in diesem Fall können Sie sehen, wie es verkleinert wurde, um in die Box zu passen.

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

Diese Technik wird verwendet, um Bilder _responsive_ zu machen, sodass sie beim Betrachten auf einem kleineren Gerät entsprechend verkleinert werden. Sie sollten jedoch diese Technik nicht verwenden, um wirklich große Bilder zu laden und sie dann im Browser zu verkleinern. Bilder sollten angemessen dimensioniert sein, dass sie nicht größer sind als sie für die größte Größe, in der sie im Design angezeigt werden, sein müssen. Das Herunterladen von übermäßig großen Bildern wird dazu führen, dass Ihre Seite langsam wird, und es kann Benutzer mehr Geld kosten, wenn sie für Daten pro Megabyte bezahlen.

## Viewport-Einheiten

Der Viewport — der sichtbare Bereich Ihrer Seite im Browser, den Sie zur Anzeige einer Seite verwenden — hat ebenfalls eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw` Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` ist gleich `1%` der Viewport-Höhe und `1vw` ist gleich `1%` der Viewport-Breite. Sie können diese Einheiten verwenden, um Boxen zu dimensionieren, aber auch Text. Im Beispiel unten haben wir eine Box, die als `20vh` und `20vw` dimensioniert ist. Die Box enthält einen Buchstaben `A`, der eine {{cssxref("font-size")}} von `10vh` hat.

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

Das Ändern der `vh` und `vw` Werte wird die Größe der Box und der Schriftart, jeweils ändern; die Änderung der Viewport-Größe wird auch die Größen von Box und Schriftart ändern, da sie relativ zum Viewport dimensioniert sind. Um die Größenänderung von Box und Text zu sehen, wenn Sie die Viewport-Größe ändern, {{LiveSampleLink("vw-vh", "laden Sie das Beispiel in einem neuen Tab")}} und ändern die Größe des Browserfensters.

Das Dimensionieren von Elementen in Bezug auf den Viewport kann in Ihren Designs nützlich sein. Zum Beispiel, wenn Sie möchten, dass ein vollseitiges Banner vor dem Rest Ihres Inhalts angezeigt wird, können Sie diesen Teil Ihrer Seite `100vh` hoch machen, um den restlichen Inhalt unter den Viewport zu schieben, sodass er erst erscheint, wenn das Dokument gescrollt wird.

## Zusammenfassung

Diese Lektion hat Ihnen eine Übersicht über einige Schlüsselprobleme gegeben, die Ihnen beim Dimensionieren von Elementen im Web begegnen könnten. Wenn Sie zu [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) übergehen, wird die Dimensionierung sehr wichtig, um die verschiedenen Layout-Methoden zu beherrschen. Daher ist es wert, die hier dargestellten Konzepte zu verstehen, bevor Sie weitermachen.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie prüfen können, wie gut Sie die Informationen, die wir zur CSS-Dimensionierung bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics")}}
