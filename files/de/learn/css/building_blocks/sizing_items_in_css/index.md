---
title: Größe von Elementen in CSS
slug: Learn/CSS/Building_blocks/Sizing_items_in_CSS
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}

In den bisherigen Lektionen sind Sie auf verschiedene Möglichkeiten gestoßen, Elemente auf einer Webseite mit CSS zu dimensionieren. Zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe über Größen, die Ihnen in Zukunft helfen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Installation grundlegender Software</a
        >, Grundkenntnisse über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis der verschiedenen Möglichkeiten, wie wir Dinge in CSS dimensionieren können.</td>
    </tr>
  </tbody>
</table>

## Die natürliche oder intrinsische Größe von Dingen

HTML-Elemente haben eine natürliche Größe, die festgelegt ist, bevor sie von CSS beeinflusst werden. Ein einfaches Beispiel ist ein Bild. Eine Bilddatei enthält Informationen zur Größe, beschrieben als ihre **intrinsische Größe**. Diese Größe wird durch das Bild _selbst_ bestimmt, nicht durch eine Formatierung, die wir eventuell anwenden.

Wenn Sie ein Bild auf einer Seite platzieren und seine Höhe oder Breite nicht ändern, weder durch Attribute im `<img>`-Tag noch durch CSS, wird es mit dieser intrinsischen Größe angezeigt. Wir haben das Bild im folgenden Beispiel mit einem Rahmen versehen, damit Sie das Ausmaß seiner Größe sehen können, wie es in seiner Datei definiert ist.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-image.html", '100%', 600)}}

Ein leeres {{htmlelement("div")}} dagegen hat keine eigene Größe. Wenn Sie ein {{htmlelement("div")}} ohne Inhalt zu Ihrem HTML hinzufügen und ihm einen Rahmen geben, wie wir es mit dem Bild getan haben, sehen Sie eine Linie auf der Seite. Dies ist die zusammengebrochene Grenze des Elements — es gibt keinen Inhalt, der es offen hält. In unserem Beispiel unten erstreckt sich diese Grenze über die Breite des Containers, da es sich um ein Block-Element handelt, ein Verhalten, das Ihnen bekannt vorkommen sollte. Es hat keine Höhe (oder Größe in der Blockdimension), da es keinen Inhalt gibt.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-text.html", '100%', 500)}}

Probieren Sie im obigen Beispiel, etwas Text in das leere Element einzufügen. Der Rahmen enthält jetzt diesen Text, da die Höhe des Elements durch den Inhalt definiert ist. Daher resultiert die Größe dieses `<div>` in der Blockdimension aus der Größe des Inhalts. Auch hier ist die Größe dieses Elements seine intrinsische Größe — seine Größe wird durch seinen Inhalt definiert.

## Eine spezifische Größe festlegen

Wir können natürlich den Elementen in unserem Design eine spezifische Größe geben. Wenn einem Element eine Größe zugewiesen wird (deren Inhalt dann in diese Größe passen muss), sprechen wir von einer **extrinsischen Größe**. Nehmen Sie unser `<div>` aus dem obigen Beispiel — wir können ihm spezifische {{cssxref("width")}}- und {{cssxref("height")}}-Werte geben, und es wird jetzt diese Größe haben, unabhängig davon, welcher Inhalt hineingefügt wird. Wie wir in [unserer vorherigen Lektion über Overflowing Content](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) festgestellt haben, kann eine festgelegte Höhe dazu führen, dass Inhalt überläuft, wenn mehr Inhalt vorhanden ist, als das Element Platz hat.

{{EmbedGHLiveSample("css-examples/learn/sizing/height.html", '100%', 600)}}

Aufgrund dieses Problems mit dem Überlauf müssen wir die Höhe von Elementen mit Längen oder Prozentsätzen im Web sehr sorgfältig festlegen.

### Verwendung von Prozenten

In vielerlei Hinsicht verhalten sich Prozentsätze wie Längeneinheiten, und wie wir [in der Lektion über Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units#percentages) besprochen haben, können sie oft austauschbar mit Längen verwendet werden. Wenn Sie ein Prozent verwenden, müssen Sie sich bewusst sein, wovon es ein Prozentsatz ist. Im Fall einer Box innerhalb eines anderen Containers, wenn Sie der inneren Box eine prozentuale Breite geben, wird es ein Prozentsatz der Breite des übergeordneten Containers sein.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-width.html", '100%', 600)}}

Dies liegt daran, dass Prozentsätze sich anhand der Größe des umgebenden Blocks auflösen. Ohne angewandten Prozentsatz würde unser `<div>` 100% des verfügbaren Raums einnehmen, da es sich um ein Block-Element handelt. Wenn wir ihm eine prozentuale Breite geben, wird dies zu einem Prozentsatz des Raums, den es normalerweise ausfüllen würde.

### Prozentuale Ränder und Abstände

Wenn Sie `margins` und `padding` als Prozentsätze festlegen, können Sie auf seltsames Verhalten stoßen. Im untenstehenden Beispiel haben wir eine Box. Wir haben der inneren Box eine {{cssxref("margin")}} von 10% und ein {{cssxref("padding")}} von 10% gegeben. Der Abstand und die Polsterung oben und unten in der Box sind gleich groß wie der Abstand und die Polsterung links und rechts.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-mp.html", '100%', 800)}}

Sie könnten erwarten, dass beispielsweise die prozentualen oberen und unteren Ränder einen Prozentsatz der Höhe des Elements ausmachen, und die prozentualen linken und rechten Ränder einen Prozentsatz der Breite des Elements. Dies ist jedoch nicht der Fall!

Wenn Sie Ränder und Polsterungen in Prozenten festlegen, wird der Wert aus der **inline size** des umgebenden Blocks berechnet — daher der Breite beim Arbeiten in einer horizontalen Sprache. In unserem Beispiel sind alle Ränder und Polsterungen 10% der Breite. Das bedeutet, dass Sie gleich große Ränder und Polsterungen rund um die Box haben können. Dies ist ein Merkmal, das man sich merken sollte, wenn man Prozentsätze auf diese Weise verwendet.

## min- und max- Größen

Zusätzlich zur Vorgabe einer festen Größe können wir CSS bitten, einem Element eine Mindest- oder Maximalgröße zu geben. Wenn Sie eine Box haben, die möglicherweise eine variable Menge an Inhalt enthält, und Sie möchten, dass die Box _mindestens_ eine bestimmte Höhe hat, können Sie die Eigenschaft {{cssxref("min-height")}} darauf anwenden. Die Box wird immer mindestens diese Höhe haben, wächst aber weiter, wenn mehr Inhalt vorhanden ist, als die Box in ihrer Mindesthöhe Platz hat.

Im folgenden Beispiel sehen Sie zwei Boxen, beide mit einer definierten `min-height` von 150 Pixeln. Die Box auf der linken Seite ist 150 Pixel hoch; die Box auf der rechten Seite hat Inhalt, der mehr Platz benötigt, und ist daher größer als 150 Pixel.

{{EmbedGHLiveSample("css-examples/learn/sizing/min-height.html", '100%', 800)}}

Dies ist sehr nützlich, um mit variablen Inhaltsmengen umzugehen und Überläufe zu vermeiden.

Eine häufige Verwendung von {{cssxref("max-width")}} ist, Bilder so zu skalieren, dass sie verkleinert werden, wenn nicht genügend Platz vorhanden ist, um sie in ihrer intrinsischen Breite anzuzeigen, dabei aber sicherzustellen, dass sie nicht größer als diese Breite werden.

Wenn Sie beispielsweise `width: 100%` auf ein Bild setzen und dessen intrinsische Breite kleiner als sein Container ist, würde das Bild gezwungen, sich zu dehnen und größer zu werden, wodurch es pixelig aussieht.

Wenn Sie stattdessen `max-width: 100%` verwenden und dessen intrinsische Breite kleiner als der Container ist, wird das Bild nicht gezwungen, sich zu dehnen und größer zu werden, wodurch eine Pixelierung vermieden wird.

Im folgenden Beispiel haben wir das gleiche Bild dreimal verwendet. Das erste Bild wurde mit `width: 100%` versehen und befindet sich in einem Container, der größer ist, daher dehnt es sich auf die Containerbreite aus. Das zweite Bild hat `max-width: 100%` gesetzt und dehnt sich daher nicht aus, um den Container zu füllen. Die dritte Box enthält dasselbe Bild erneut, ebenfalls mit `max-width: 100%` gesetzt; in diesem Fall können Sie sehen, wie es verkleinert wurde, um in die Box zu passen.

{{EmbedGHLiveSample("css-examples/learn/sizing/max-width.html", '100%', 800)}}

Diese Technik wird verwendet, um Bilder _reaktiv_ zu machen, sodass sie bei Betrachtung auf einem kleineren Gerät entsprechend verkleinert werden. Sie sollten diese Technik jedoch nicht verwenden, um wirklich große Bilder zu laden und sie dann im Browser zu verkleinern. Bilder sollten entsprechend dimensioniert sein, sodass sie nicht größer sind als für die größte Größe, in der sie im Design angezeigt werden. Das Herunterladen von zu großen Bildern führt dazu, dass Ihre Website langsam wird, und es kann Benutzer mehr Geld kosten, wenn sie eine datenabhängige Verbindung nutzen.

> [!NOTE]
> Erfahren Sie mehr über [reaktive Bildtechniken](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Viewport-Einheiten

Der Viewport — das ist der sichtbare Bereich Ihrer Seite im Browser, den Sie verwenden, um eine Site anzuzeigen — hat auch eine Größe. In CSS haben wir Einheiten, die sich auf die Größe des Viewports beziehen — die `vw`-Einheit für die Viewport-Breite und `vh` für die Viewport-Höhe. Mit diesen Einheiten können Sie etwas relativ zum Viewport des Benutzers dimensionieren.

`1vh` entspricht 1% der Viewport-Höhe, und `1vw` entspricht 1% der Viewport-Breite. Sie können diese Einheiten verwenden, um Kästen zu dimensionieren, aber auch Text. Im Beispiel unten haben wir einen Kasten, der auf 20vh und 20vw dimensioniert ist. Der Kasten enthält einen Buchstaben `A`, dem eine {{cssxref("font-size")}} von 10vh gegeben wurde.

{{EmbedGHLiveSample("css-examples/learn/sizing/vw-vh.html", '100%', 600)}}

**Wenn Sie die Werte für `vh` und `vw` ändern, ändert dies die Größe des Kastens oder der Schrift; auch die Änderung der Viewport-Größe ändert ihre Größen, da sie relativ zum Viewport dimensioniert sind. Um das Beispiel zu sehen, wenn Sie die Viewport-Größe ändern, müssen Sie das Beispiel in einem neuen Browserfenster laden, das Sie in der Größe ändern können (denn das eingebettete `<iframe>`, das das oben gezeigte Beispiel enthält, ist sein Viewport). [Öffnen Sie das Beispiel](https://mdn.github.io/css-examples/learn/sizing/vw-vh.html), ändern Sie die Größe des Browserfensters und beobachten Sie, was mit der Größe des Kastens und des Textes geschieht.**

Die Dimensionierung von Dingen nach dem Viewport kann in Ihren Designs nützlich sein. Wenn Sie beispielsweise einen ganzseitigen Hero-Bereich anzeigen möchten, bevor der Rest Ihres Inhalts angezeigt wird, wird durch die Dimensionierung dieses Teils Ihrer Seite auf 100vh die restlichen Inhalte unterhalb des Viewports verschoben, sodass sie erst erscheinen, wenn das Dokument gescrollt wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Dimensionierung](/de/docs/Learn/CSS/Building_blocks/Sizing_tasks).

## Zusammenfassung

Diese Lektion hat Ihnen einen Überblick über einige zentrale Probleme gegeben, auf die Sie bei der Dimensionierung von Dingen im Web stoßen könnten. Wenn Sie mit [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) fortfahren, wird die Dimensionierung sehr wichtig, um die verschiedenen Layout-Methoden zu meistern. Daher ist es sinnvoll, die hier beschriebenen Konzepte zu verstehen, bevor Sie weitergehen.

Im nächsten Artikel werden wir uns ansehen, wie [Bilder, Medien und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements) in CSS behandelt werden.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}
