---
title: Größenanpassung von Elementen in CSS
slug: Learn/CSS/Building_blocks/Sizing_items_in_CSS
l10n:
  sourceCommit: 033285c99a8e1bc05b646ff19b70d2e8b86dff46
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}

In den verschiedenen Lektionen bisher haben Sie verschiedene Möglichkeiten kennengelernt, wie man Elemente auf einer Webseite mit CSS größenmäßig anpassen kann. Es ist wichtig zu verstehen, wie groß die verschiedenen Elemente in Ihrem Design sein werden. In dieser Lektion fassen wir die verschiedenen Methoden zusammen, mit denen Elemente durch CSS eine Größe erhalten, und definieren einige Begriffe zur Größenanpassung, die Ihnen in der Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >dem Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis der verschiedenen Möglichkeiten zur Größenanpassung in CSS.</td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, die vor der Beeinflussung durch CSS festgelegt ist. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, die als seine **intrinsische Größe** beschrieben werden. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch irgendeine Formatierung, die wir anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und seine Höhe oder Breite weder über Attribute im `<img>`-Tag noch durch CSS ändern, wird es mit dieser intrinsischen Größe angezeigt. Wir haben dem Bild im folgenden Beispiel einen Rahmen hinzugefügt, damit Sie das Ausmaß seiner Größe, wie es in der Datei definiert ist, sehen können.

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

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} ohne Inhalt zu Ihrem HTML hinzufügen und dann, wie beim Bild, einen Rahmen geben, sehen Sie eine Linie auf der Seite. Dies ist der zusammengefallene Rahmen des Elements — es gibt keinen Inhalt, der ihn offen hält. In unserem Beispiel unten erstreckt sich dieser Rahmen über die Breite des Containers, weil es sich um ein Blockelement handelt, ein Verhalten, das Ihnen vertraut vorkommen dürfte. Es hat keine Höhe (oder Größe in der Blockdimension), weil es keinen Inhalt gibt.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text")}}

Im obigen Beispiel versuchen Sie, dem leeren Element Text hinzuzufügen. Der Rahmen enthält nun diesen Text, weil die Höhe des Elements durch den Inhalt definiert ist. Die Größe dieses `<div>` in der Blockdimension ergibt sich also aus der Größe des Inhalts. Auch dies ist die intrinsische Größe des Elements — seine Größe wird durch seinen Inhalt definiert.

## Eine spezifische Größe festlegen

Natürlich können wir auch den Elementen in unserem Design eine spezifische Größe geben. Wenn einem Element eine Größe zugewiesen wird (in die der Inhalt dann passen muss), sprechen wir von einer **extrinsischen Größe**. Nehmen Sie unser `<div>` aus dem obigen Beispiel — wir können ihm spezifische {{cssxref("width")}} und {{cssxref("height")}} Werte geben, und es wird nun diese Größe haben, unabhängig davon, was für Inhalt hineingefügt wird. Wie wir in [unserer vorherigen Lektion über Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) entdeckt haben, kann eine festgelegte Höhe dazu führen, dass der Inhalt überläuft, wenn mehr Inhalt vorhanden ist, als das Element aufnehmen kann.

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

Dieses Problem des Überlaufs macht es notwendig, die Höhe von Elementen sehr vorsichtig mit Längenangaben oder Prozentangaben im Web zu fixieren.

### Verwendung von Prozentangaben

In vielerlei Hinsicht verhalten sich Prozentangaben wie Längeneinheiten, und wie wir [in der Lektion über Werte und Einheiten besprochen haben](/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages), können sie oft austauschbar mit Längen verwendet werden. Wenn Sie einen Prozentsatz verwenden, müssen Sie sich bewusst sein, worauf sich dieser Prozentsatz _bezieht_. Im Fall eines Kastens innerhalb eines anderen Containers, wenn Sie dem inneren Kasten eine prozentuale Breite geben, bezieht sich dieser Prozentsatz auf die Breite des übergeordneten Containers.

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

Dies liegt daran, dass sich Prozentsätze auf die Größe des umgebenden Blocks beziehen. Ohne angewendeten Prozentsatz würde unser `<div>` 100% des verfügbaren Platzes einnehmen, da es ein Block-Element ist. Wenn wir ihm eine prozentuale Breite geben, wird dies zu einem Prozentsatz des Raums, den es normalerweise füllen würde.

### Prozentuale Außenabstände und Auffüllungen

Wenn Sie `margins` und `padding` als Prozentangaben festlegen, können Sie einige merkwürdige Verhalten bemerken. Im folgenden Beispiel haben wir einen Kasten. Wir haben dem inneren Kasten einen {{cssxref("margin")}} von 10% und einen {{cssxref("padding")}} von 10% gegeben. Der Abstand und die Auffüllung oben und unten am Kasten sind genauso groß wie der Abstand und die Auffüllung links und rechts.

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

Sie könnten erwarten, dass z.B. die prozentualen oberen und unteren Abstände ein Prozentsatz der Höhe des Elements sind, und die prozentualen linken und rechten Abstände ein Prozentsatz der Breite des Elements. Dies ist jedoch nicht der Fall!

Wenn Sie Abstand und Auffüllung in Prozent festlegen, wird der Wert von der **Inline-Größe** des umgebenden Blocks berechnet — daher die Breite bei der Arbeit in einer horizontalen Sprache. In unserem Beispiel sind alle Abstände und Auffüllungen 10% der Breite. Dies bedeutet, dass Sie gleichgroße Abstände und Auffüllungen um den ganzen Kasten haben können. Dies ist eine Tatsache, die es wert ist, sich zu merken, wenn Sie Prozentsätze auf diese Weise verwenden.

## Min- und Max-Größen

Neben der Festlegung einer festen Größe können wir CSS bitten, einem Element eine Mindest- oder Maximalgröße zu geben. Wenn Sie einen Kasten haben, der eine variable Menge an Inhalt enthalten könnte, und Sie möchten, dass er _mindestens_ eine bestimmte Höhe hat, könnten Sie die {{cssxref("min-height")}}-Eigenschaft darauf setzen. Der Kasten wird immer mindestens diese Höhe haben, wird dann aber größer, wenn mehr Inhalt vorhanden ist, als der Kasten bei seiner Mindesthöhe Platz bietet.

Im folgenden Beispiel sehen Sie zwei Kästen, beide mit einer definierten `min-height` von 150 Pixel. Der Kasten links ist 150 Pixel hoch; der Kasten rechts hat Inhalt, der mehr Platz benötigt, und ist daher höher als 150 Pixel geworden.

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

Dies ist sehr nützlich, um mit variablen Inhaltsmengen umzugehen und Überlauf zu vermeiden.

Eine häufige Nutzung von {{cssxref("max-width")}} besteht darin, Bilder zu verkleinern, wenn nicht genug Platz vorhanden ist, um sie in ihrer intrinsischen Breite anzuzeigen, während gleichzeitig sichergestellt wird, dass sie nicht größer werden als diese Breite.

Als Beispiel, wenn Sie die `width: 100%` auf ein Bild setzen, und seine intrinsische Breite kleiner ist als sein Container, wird das Bild gezwungen, sich zu strecken und größer zu werden, was zu einer verpixelten Darstellung führt.

Wenn Sie stattdessen `max-width: 100%` verwenden und seine intrinsische Breite kleiner ist als sein Container, wird das Bild nicht gezwungen, sich zu strecken und größer zu werden, wodurch eine Verpixelung verhindert wird.

Im folgenden Beispiel haben wir das gleiche Bild dreimal verwendet. Das erste Bild hat `width: 100%` erhalten und befindet sich in einem Container, der größer ist, weshalb es sich auf die Containerbreite streckt. Das zweite Bild hat `max-width: 100%` gesetzt und streckt sich daher nicht, um den Container zu füllen. Der dritte Kasten enthält dasselbe Bild erneut, ebenfalls mit `max-width: 100%` gesetzt; in diesem Fall sehen Sie, wie es verkleinert wurde, um in den Kasten zu passen.

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

Diese Technik wird verwendet, um Bilder _responsiv_ zu machen, sodass sie auf einem kleineren Gerät entsprechend verkleinert werden. Sie sollten diese Technik jedoch nicht verwenden, um wirklich große Bilder zu laden und dann im Browser zu skalieren. Bilder sollten in der Größe angemessen sein, damit sie nicht größer sind, als sie für die größte Größe, in der sie im Design angezeigt werden, benötigt werden. Das Herunterladen von übermäßig großen Bildern wird Ihre Seite verlangsamen und kann für Benutzer teurer sein, wenn sie eine tariflich abgerechnete Verbindung verwenden.

> [!NOTE]
> Erfahren Sie mehr über [responsive Bildtechniken](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Viewport-Einheiten

Der Viewport — der sichtbare Bereich Ihrer Seite im Browser, den Sie zum Betrachten einer Website verwenden — hat ebenfalls eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw` Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht 1% der Viewport-Höhe, und `1vw` entspricht 1% der Viewport-Breite. Sie können diese Einheiten verwenden, um Kästen, aber auch Text zu dimensionieren. Im folgenden Beispiel haben wir einen Kasten, der in 20vh und 20vw dimensioniert ist. Der Kasten enthält einen Buchstaben `A`, der eine {{cssxref("font-size")}} von 10vh hat.

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

Wenn Sie die `vh`- und `vw`-Werte ändern, ändert sich die Größe des Kastens oder der Schrift; auch das Ändern der Viewport-Größe wird ihre Größe ändern, weil sie relativ zum Viewport dimensioniert sind. Um das Beispiel zu sehen, ändern Sie die Größe des Viewports, indem Sie das Beispiel in einem neuen Browserfenster laden, das Sie in der Größe ändern können (da das eingebettete `<iframe>`, das das oben gezeigte Beispiel enthält, sein eigener Viewport ist). Öffnen Sie das Beispiel, ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe von Kasten und Text passiert.

Elemente entsprechend dem Viewport zu dimensionieren kann in Ihren Designs nützlich sein. Wenn Sie beispielsweise einen vollflächigen Hero-Abschnitt anzeigen möchten, bevor der Rest Ihres Inhalts erscheint, bewirkt das Festlegen dieses Abschnitts Ihrer Seite auf 100vh Höhe, dass der Rest des Inhalts unterhalb des Viewports bleibt, was bedeutet, dass er erst erscheint, wenn das Dokument gescrollt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber erinnern Sie sich an die wichtigsten Informationen? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Größenanpassung](/de/docs/Learn/CSS/Building_blocks/Sizing_tasks).

## Zusammenfassung

Diese Lektion hat Ihnen einen Überblick über einige Schlüsselthemen gegeben, die bei der Größenanpassung von Dingen im Web auftreten können. Wenn Sie zum [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) übergehen, wird es sehr wichtig sein, die unterschiedlichen Layout-Methoden zu beherrschen, daher lohnt es sich, die hier besprochenen Konzepte vor dem Weitergehen zu verstehen.

Im nächsten Artikel werfen wir einen Blick darauf, wie [Bilder, Medien und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements) in CSS behandelt werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}
