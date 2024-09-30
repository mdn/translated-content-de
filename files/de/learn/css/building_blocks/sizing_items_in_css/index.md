---
title: Größenänderung von Elementen in CSS
slug: Learn/CSS/Building_blocks/Sizing_items_in_CSS
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}

In den bisherigen Lektionen sind Sie auf verschiedene Möglichkeiten gestoßen, um Elemente auf einer Webseite mit CSS zu dimensionieren. Es ist wichtig zu verstehen, wie groß die verschiedenen Merkmale Ihres Designs sein werden. In dieser Lektion werden wir die verschiedenen Möglichkeiten zusammenfassen, wie Elemente über CSS eine Größe erhalten, und einige Begriffe zur Größenänderung definieren, die Ihnen in Zukunft von Nutzen sein werden.

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
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Zu verstehen, auf welche verschiedenen Arten wir Dinge in CSS dimensionieren können.</td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Elementen

HTML-Elemente haben eine natürliche Größe, die festgelegt ist, bevor sie durch CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, die als **intrinsische Größe** beschrieben werden. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch eine Formatierung, die wir möglicherweise anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und seine Höhe oder Breite nicht ändern, sei es durch Attribute im `<img>`-Tag oder durch CSS, wird es mit dieser intrinsischen Größe angezeigt. Wir haben dem Bild im folgenden Beispiel einen Rahmen gegeben, damit Sie das Ausmaß seiner Größe sehen können, wie es in der Datei definiert ist.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-image.html", '100%', 600)}}

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} zu Ihrem HTML ohne Inhalt hinzufügen und ihm dann einen Rahmen geben, so wie wir es mit dem Bild getan haben, sehen Sie eine Linie auf der Seite. Dies ist der eingeklappte Rahmen des Elements — es gibt keinen Inhalt, der es offen hält. In unserem Beispiel unten erstreckt sich dieser Rahmen bis zur Breite des Containers, da es sich um ein Block-Element handelt; ein Verhalten, das Ihnen allmählich vertraut sein sollte. Es hat keine Höhe (oder Größe in der Block-Dimension), da es keinen Inhalt gibt.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-text.html", '100%', 500)}}

Im obigen Beispiel versuchen Sie, etwas Text in das leere Element einzufügen. Der Rahmen enthält jetzt diesen Text, weil die Höhe des Elements durch den Inhalt definiert ist. Daher stammt die Größe dieses `<div>` in der Block-Dimension von der Größe des Inhalts. Dies ist wieder die intrinsische Größe des Elements — seine Größe wird durch seinen Inhalt definiert.

## Eine spezifische Größe festlegen

Wir können selbstverständlich Elementen in unserem Design eine spezifische Größe geben. Wenn einem Element eine Größe zugewiesen wird (in die der Inhalt dann passen muss), sprechen wir von einer **extrinsischen Größe**. Nehmen Sie unser `<div>` aus dem obigen Beispiel — wir können ihm spezifische {{cssxref("width")}} und {{cssxref("height")}} Werte geben, und es wird jetzt diese Größe haben, unabhängig davon, was sich darin befindet. Wie wir in [unserer vorherigen Lektion über Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) entdeckt haben, kann eine festgelegte Höhe dazu führen, dass Inhalt überläuft, wenn mehr Inhalt vorhanden ist, als das Element Platz bietet.

{{EmbedGHLiveSample("css-examples/learn/sizing/height.html", '100%', 600)}}

Aufgrund dieses Überlaufproblems müssen wir beim Festlegen der Höhe von Elementen mit Längen oder Prozentwerten im Web sehr vorsichtig sein.

### Verwendung von Prozentwerten

In vielerlei Hinsicht verhalten sich Prozentwerte wie Längeneinheiten, und wie wir [in der Lektion über Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages) besprochen haben, können sie oft mit Längen austauschbar verwendet werden. Wenn Sie einen Prozentwert verwenden, müssen Sie sich bewusst sein, auf was er einen Prozentsatz _ist_. Im Falle einer Box in einem anderen Container, wenn Sie der Kinderbox eine prozentuale Breite geben, wird es ein Prozentsatz der Breite des übergeordneten Containers sein.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-width.html", '100%', 600)}}

Dies liegt daran, dass Prozentwerte auf die Größe des umschließenden Blocks bezogen sind. Ohne Prozentwert würde unser `<div>` 100% des verfügbaren Platzes einnehmen, da es ein Block-Element ist. Wenn wir ihm eine prozentuale Breite geben, wird dies zu einem Prozentsatz des Raumes, den es normalerweise ausfüllen würde.

### Prozentuale Ränder und Abstände

Wenn Sie `margins` und `padding` als Prozentsätze festlegen, können Sie auf ein merkwürdiges Verhalten stoßen. Im folgenden Beispiel haben wir eine Box. Wir haben der inneren Box einen {{cssxref("margin")}} von 10% und einen {{cssxref("padding")}} von 10% gegeben. Die Abstände und Ränder oben und unten in der Box sind genauso groß wie die Abstände und Ränder links und rechts.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-mp.html", '100%', 800)}}

Sie könnten zum Beispiel erwarten, dass die prozentualen oberen und unteren Ränder ein Prozentsatz der Höhe des Elements sind, und die prozentualen linken und rechten Ränder ein Prozentsatz der Breite des Elements. Das ist jedoch nicht der Fall!

Wenn Sie Abstände und Polsterungen in Prozenten festlegen, wird der Wert aus der **Inlinegröße** des umschließenden Blocks berechnet — daher die Breite bei der Arbeit mit einer horizontalen Sprache. In unserem Beispiel sind alle Abstände und Polsterungen 10% der Breite. Das bedeutet, dass Sie gleich große Ränder und Abstände rund um die Box haben können. Dies ist eine Tatsache, die man sich merken sollte, wenn man Prozentsätze auf diese Weise verwendet.

## Min- und Max-Größen

Neben der Vergabe einer festen Größe können wir CSS auch bitten, einem Element eine Mindest- oder Maximalgröße zu geben. Wenn Sie eine Box haben, die möglicherweise eine variable Menge an Inhalt enthalten kann, und Sie möchten, dass sie immer _mindestens_ eine bestimmte Höhe hat, könnten Sie die Eigenschaft {{cssxref("min-height")}} darauf anwenden. Die Box wird immer mindestens diese Höhe haben, wächst jedoch dann, wenn es mehr Inhalt gibt, als die Box in ihrer minimalen Höhe Platz hat.

Im Beispiel unten sehen Sie zwei Boxen, beide mit einer definierten `min-height` von 150 Pixeln. Die Box auf der linken Seite ist 150 Pixel hoch; die Box auf der rechten Seite hat Inhalt, der mehr Platz benötigt, und daher ist sie höher als 150 Pixel geworden.

{{EmbedGHLiveSample("css-examples/learn/sizing/min-height.html", '100%', 800)}}

Dies ist sehr nützlich, um mit variablen Mengen von Inhalten umzugehen und gleichzeitig Überläufe zu vermeiden.

Ein häufiger Einsatz von {{cssxref("max-width")}} ist, um Bilder skalieren zu lassen, wenn nicht genug Platz vorhanden ist, um sie in ihrer natürlichen Breite anzuzeigen, während sichergestellt wird, dass sie nicht größer werden als diese Breite.

Zum Beispiel, wenn Sie `width: 100%` auf ein Bild setzen und seine natürliche Breite kleiner als sein Container ist, wird das Bild gezwungen, zu strecken und größer zu werden, was dazu führt, dass es pixelig aussieht.

Wenn Sie stattdessen `max-width: 100%` verwenden und seine natürliche Breite kleiner als sein Container ist, wird das Bild nicht gezwungen, sich zu strecken und größer zu werden, wodurch eine Pixelbildung verhindert wird.

Im Beispiel unten haben wir dasselbe Bild dreimal verwendet. Das erste Bild wurde mit `width: 100%` versehen und befindet sich in einem Container, der größer ist als es, daher dehnt es sich auf die Containerbreite aus. Das zweite Bild hat `max-width: 100%` eingestellt und dehnt sich daher nicht aus, um den Container zu füllen. Der dritte Behälter enthält dasselbe Bild nochmals, ebenfalls mit `max-width: 100%` eingestellt; in diesem Fall können Sie sehen, wie es sich verkleinert hat, um in die Box zu passen.

{{EmbedGHLiveSample("css-examples/learn/sizing/max-width.html", '100%', 800)}}

Diese Technik wird verwendet, um Bilder _reaktionsfähig_ zu machen, sodass sie sich bei Betrachtung auf einem kleineren Gerät entsprechend verkleinern. Sie sollten jedoch nicht diese Technik verwenden, um wirklich große Bilder zu laden und dann im Browser zu verkleinern. Bilder sollten angemessen dimensioniert sein, um nicht größer zu sein, als sie für die größte Größe sein müssen, in der sie im Design angezeigt werden. Das Herunterladen von übergroßen Bildern verlangsamt Ihre Website und kann Benutzer mehr Geld kosten, wenn sie eine gemessene Verbindung verwenden.

> [!NOTE]
> Erfahren Sie mehr über [Techniken für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Viewport-Einheiten

Der Viewport — das ist der sichtbare Bereich Ihrer Seite im Browser, mit dem Sie eine Website betrachten — hat auch eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw`-Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht 1% der Viewport-Höhe und `1vw` entspricht 1% der Viewport-Breite. Sie können diese Einheiten verwenden, um Boxen, aber auch Text zu dimensionieren. Im Beispiel unten haben wir eine Box, die als 20vh und 20vw dimensioniert ist. Die Box enthält einen Buchstaben `A`, der eine {{cssxref("font-size")}} von 10vh hat.

{{EmbedGHLiveSample("css-examples/learn/sizing/vw-vh.html", '100%', 600)}}

**Wenn Sie die `vh`- und `vw`-Werte ändern, ändert dies die Größe der Box oder Schriftart; das Ändern der Viewport-Größe ändert auch deren Größen, da sie relativ zum Viewport dimensioniert sind. Um das Beispiel zu sehen, wenn Sie die Viewport-Größe ändern, müssen Sie das Beispiel in einem neuen Browserfenster laden, das Sie ändern können (da das eingebettete `<iframe>`, das das oben gezeigte Beispiel enthält, sein Viewport ist). [Öffnen Sie das Beispiel](https://mdn.github.io/css-examples/learn/sizing/vw-vh.html), ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe der Box und des Textes passiert.**

Die Dimensionierung von Dingen nach dem Viewport kann in Ihren Designs nützlich sein. Wenn Sie beispielsweise einen ganzseitigen Heldenbereich vor Ihrem restlichen Inhalt anzeigen möchten, sorgt das Einrichten dieser Seite auf 100vh Höhe dafür, dass der restliche Inhalt unter dem Viewport bleibt, sodass er erst erscheint, wenn das Dokument gescrollt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Dimensionierung](/de/docs/Learn/CSS/Building_blocks/Sizing_tasks).

## Zusammenfassung

Diese Lektion hat Ihnen einen Überblick über einige Schlüsselprobleme gegeben, die Ihnen bei der Größenänderung von Dingen im Web begegnen könnten. Wenn Sie zu [CSS Layout](/de/docs/Learn/CSS/CSS_layout) übergehen, wird die Dimensionierung sehr wichtig, um die verschiedenen Layout-Methoden zu meistern, daher lohnt es sich, die Konzepte hier zu verstehen, bevor Sie weitermachen.

Im nächsten Artikel werden wir uns ansehen, wie [Bilder, Medien und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements) in CSS behandelt werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}
