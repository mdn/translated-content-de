---
title: Größenanpassung von Elementen in CSS
slug: Learn/CSS/Building_blocks/Sizing_items_in_CSS
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}

In den verschiedenen Lektionen bisher sind Sie auf eine Reihe von Möglichkeiten gestoßen, wie Sie Elemente auf einer Webseite mit CSS in ihrer Größe anpassen können. Zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zur Größenanpassung, die Ihnen in Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>Die verschiedenen Möglichkeiten verstehen, wie wir Dinge in CSS größenmäßig anpassen können.</td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, die festgelegt ist, bevor sie von CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Größeninformationen, beschrieben als ihre **intrinsische Größe**. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch irgendeine Formatierung, die wir möglicherweise anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und seine Höhe oder Breite nicht ändern, sei es durch Attribute im `<img>`-Tag oder durch CSS, wird es mit dieser intrinsischen Größe angezeigt. Wir haben dem Bild im unten stehenden Beispiel einen Rahmen gegeben, damit Sie das Ausmaß seiner Größe erkennen können, wie es in der Datei definiert ist.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-image.html", '100%', 600)}}

Ein leeres {{htmlelement("div")}} hingegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} ohne Inhalt zu Ihrem HTML hinzufügen und ihm dann wie beim Bild einen Rahmen geben, sehen Sie eine Linie auf der Seite. Dies ist der eingeklappte Rahmen des Elements – es gibt keinen Inhalt, der ihn offen hält. In unserem unten stehenden Beispiel streckt sich dieser Rahmen in die Breite des Containers, weil es sich um ein Block-Element handelt, ein Verhalten, das Ihnen langsam vertraut sein sollte. Es hat keine Höhe (oder Größe in der Block-Dimension), weil es keinen Inhalt gibt.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-text.html", '100%', 500)}}

Versuchen Sie im obigen Beispiel, Text in das leere Element hinzuzufügen. Der Rahmen enthält jetzt diesen Text, weil die Höhe des Elements durch den Inhalt definiert ist. Die Größe dieses `<div>` in der Block-Dimension ergibt sich also aus der Größe des Inhalts. Auch dies ist die intrinsische Größe des Elements – seine Größe wird durch seinen Inhalt definiert.

## Eine spezifische Größe festlegen

Wir können natürlich den Elementen in unserem Design eine spezifische Größe zuweisen. Wenn einem Element eine Größe gegeben wird (in die der Inhalt dann passen muss), sprechen wir von einer **extrinsischen Größe**. Nehmen wir unser `<div>` aus dem obigen Beispiel – wir können ihm spezifische {{cssxref("width")}}- und {{cssxref("height")}}-Werte geben, und es wird jetzt diese Größe unabhängig von dem Inhalt haben, der hineingegeben wird. Wie wir in [unserer vorherigen Lektion über Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) entdeckt haben, kann eine feste Höhe dazu führen, dass Inhalt überläuft, wenn mehr Inhalt vorhanden ist, als das Element an Platz dafür hat.

{{EmbedGHLiveSample("css-examples/learn/sizing/height.html", '100%', 600)}}

Aufgrund dieses Überlaufproblems müssen wir die Höhe von Elementen mit Längen oder Prozentangaben im Web sehr sorgfältig fixieren.

### Verwendung von Prozentangaben

In vielerlei Hinsicht verhalten sich Prozentangaben wie Längeneinheiten, und wie wir [in der Lektion über Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages) besprochen haben, können sie oft austauschbar mit Längen verwendet werden. Bei der Verwendung eines Prozentsatzes müssen Sie darauf achten, wovon es ein Prozentsatz ist. Im Falle einer Box innerhalb eines anderen Containers, wenn Sie der Kinderbox eine Prozentbreite geben, ist es ein Prozentsatz der Breite des übergeordneten Containers.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-width.html", '100%', 600)}}

Dies liegt daran, dass Prozentangaben gegen die Größe des umschließenden Blocks aufgelöst werden. Wenn kein Prozentsatz angewendet wird, würde unser `<div>` 100% des verfügbaren Raums einnehmen, da es sich um ein Block-Level-Element handelt. Wenn wir ihm eine Prozentbreite geben, wird dies zu einem Prozentsatz des Raums, den es normalerweise ausfüllen würde.

### Prozentabstände und -abstände

Wenn Sie `margins` und `padding` als Prozentsatz festlegen, kann es zu seltsamem Verhalten kommen. Im unten stehenden Beispiel haben wir eine Box. Wir haben der inneren Box eine {{cssxref("margin")}} von 10% und eine {{cssxref("padding")}} von 10% gegeben. Der Abstand und die Füllung oben und unten in der Box sind genauso groß wie der Abstand und die Füllung links und rechts.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-mp.html", '100%', 800)}}

Man könnte erwarten, dass zum Beispiel die oberen und unteren Prozentabstände ein Prozentsatz der Höhe des Elements sind, und die linken und rechten Prozentabstände ein Prozentsatz der Breite des Elements. Das ist jedoch nicht der Fall!

Wenn Sie Abstand und Füllung in Prozentangaben verwenden, wird der Wert aus der **Inline-Größe** des umschließenden Blocks berechnet – daher die Breite bei der Arbeit in einer horizontalen Sprache. In unserem Beispiel sind alle Abstände und Füllungen 10% der Breite. Dies bedeutet, dass Sie gleich große Abstände und Füllungen rund um die Box haben können. Dies ist ein Fakt, den Sie sich merken sollten, wenn Sie Prozentsätze auf diese Weise verwenden.

## Minimal- und Maximalgrößen

Zusätzlich zur festen Größe können wir CSS bitten, einem Element eine minimale oder maximale Größe zu geben. Wenn Sie eine Box haben, die eine variable Menge an Inhalt enthalten kann und Sie immer möchten, dass sie _mindestens_ eine bestimmte Höhe hat, könnten Sie die {{cssxref("min-height")}}-Eigenschaft darauf setzen. Die Box wird immer mindestens diese Höhe haben, wird dann aber höher, wenn es mehr Inhalt gibt, als die Box an Platz für ihre Mindesthöhe hat.

Im unten stehenden Beispiel sehen Sie zwei Boxen, beide mit einer definierten `min-height` von 150 Pixeln. Die Box links ist 150 Pixel hoch; die Box rechts hat Inhalt, der mehr Platz benötigt, und ist deshalb größer als 150 Pixel.

{{EmbedGHLiveSample("css-examples/learn/sizing/min-height.html", '100%', 800)}}

Dies ist sehr nützlich, um mit variablen Mengen an Inhalt umzugehen und gleichzeitig Überlauf zu vermeiden.

Eine häufige Verwendung von {{cssxref("max-width")}} besteht darin, Bilder schrumpfen zu lassen, wenn nicht genug Platz vorhanden ist, um sie in ihrer intrinsischen Breite anzuzeigen, und dabei sicherzustellen, dass sie nicht größer als diese Breite werden.

Zum Beispiel, wenn Sie `width: 100%` auf ein Bild setzen und seine intrinsische Breite kleiner als sein Container ist, würde das Bild gezwungen, sich zu strecken und größer zu werden, was dazu führen kann, dass es pixelig aussieht.

Wenn Sie stattdessen `max-width: 100%` verwenden und seine intrinsische Breite kleiner als sein Container ist, wird das Bild nicht gezwungen, sich zu strecken und größer zu werden, wodurch eine Pixelierung verhindert wird.

Im unten stehenden Beispiel haben wir dasselbe Bild dreimal verwendet. Das erste Bild wurde mit `width: 100%` versehen und befindet sich in einem Container, der größer als es selbst ist, daher streckt es sich auf die Breite des Containers. Das zweite Bild hat `max-width: 100%` gesetzt und streckt sich daher nicht, um den Container zu füllen. Die dritte Box enthält dasselbe Bild erneut, ebenfalls mit `max-width: 100%` gesetzt; in diesem Fall sehen Sie, dass es sich verkleinert hat, um in die Box zu passen.

{{EmbedGHLiveSample("css-examples/learn/sizing/max-width.html", '100%', 800)}}

Diese Technik wird verwendet, um Bilder _responsiv_ zu machen, sodass sie bei Betrachtung auf einem kleineren Gerät entsprechend verkleinert werden. Sie sollten jedoch nicht diese Technik verwenden, um wirklich große Bilder zu laden und sie dann im Browser zu verkleinern. Bilder sollten angemessen dimensioniert sein, um nicht größer zu sein, als sie für die größte Größe, in der sie im Design angezeigt werden, sein müssen. Das Herunterladen von übermäßig großen Bildern führt dazu, dass Ihre Website langsam wird und es kann Benutzer mehr Geld kosten, wenn sie eine datenbegrenzte Verbindung haben.

> [!NOTE]
> Erfahren Sie mehr über [Techniken für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Viewport-Einheiten

Der Viewport — der sichtbare Bereich Ihrer Seite im Browser, den Sie verwenden, um eine Website anzuzeigen — hat ebenfalls eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw`-Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht 1% der Viewport-Höhe und `1vw` entspricht 1% der Viewport-Breite. Sie können diese Einheiten verwenden, um Boxen, aber auch Text zu dimensionieren. Im unten stehenden Beispiel haben wir eine Box, die auf 20vh und 20vw dimensioniert ist. Die Box enthält einen Buchstaben `A`, der eine {{cssxref("font-size")}} von 10vh hat.

{{EmbedGHLiveSample("css-examples/learn/sizing/vw-vh.html", '100%', 600)}}

**Wenn Sie die `vh`- und `vw`-Werte ändern, wird sich die Größe der Box oder der Schrift ändern; auch die Änderung der Viewport-Größe wird ihre Größen ändern, weil sie relativ zum Viewport dimensioniert sind. Um zu sehen, wie sich das Beispiel ändert, wenn Sie die Viewport-Größe ändern, müssen Sie das Beispiel in einem neuen Browserfenster laden, das Sie in der Größe ändern können (da das eingebettete `<iframe>`, das das oben gezeigte Beispiel enthält, sein Viewport ist). [Öffnen Sie das Beispiel](https://mdn.github.io/css-examples/learn/sizing/vw-vh.html), ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe der Box und des Texts passiert.**

Elemente gemäß dem Viewport zu dimensionieren, kann in Ihren Designs nützlich sein. Zum Beispiel, wenn Sie möchten, dass ein vollständigseitiger Hero-Abschnitt angezeigt wird, bevor der Rest Ihres Inhalts erscheint, können Sie diesen Teil Ihrer Seite 100vh hoch machen, sodass der restliche Inhalt unter den Viewport gedrückt wird und erst erscheint, wenn das Dokument gescrollt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Größenanpassung](/de/docs/Learn/CSS/Building_blocks/Sizing_tasks).

## Zusammenfassung

Diese Lektion hat Ihnen eine Übersicht über einige wichtige Themen gegeben, auf die Sie stoßen könnten, wenn Sie Dinge im Web dimensionieren. Wenn Sie zu [CSS Layout](/de/docs/Learn/CSS/CSS_layout) übergehen, wird die Größenanpassung sehr wichtig, um die verschiedenen Layout-Methoden zu meistern, daher ist es sinnvoll, die hier vorgestellten Konzepte zu verstehen, bevor Sie weitermachen.

Im nächsten Artikel werden wir uns ansehen, wie [Bilder, Medien und Formelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements) in CSS behandelt werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}
