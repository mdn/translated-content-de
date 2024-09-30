---
title: Überlaufender Inhalt
slug: Learn/CSS/Building_blocks/Overflowing_content
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

Überlauf tritt auf, wenn es zu viel Inhalt gibt, um in ein Elementkasten zu passen. In diesem Leitfaden lernen Sie, was Überlauf ist und wie man ihn verwaltet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundlagen des
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgangs mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) sowie eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, was Überlauf ist und wie man ihn verwaltet.</td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

In CSS ist alles ein Kasten. Sie können die Größe dieser Kästen einschränken, indem Sie Werte für {{cssxref("width")}} und {{cssxref("height")}} zuweisen (oder {{cssxref("inline-size")}} und {{cssxref("block-size")}}). **Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in einen Kasten zu passen.** CSS bietet verschiedene Werkzeuge zur Verwaltung von Überlauf. Mit zunehmender Erfahrung in CSS-Layout und Schreiben von CSS werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf demonstrieren.

Das erste Beispiel ist ein Kasten, der durch die Einstellung einer `height` eingeschränkt wurde. Dann fügen wir Inhalt hinzu, der den zugewiesenen Platz überschreitet. Der Inhalt läuft über den Kasten hinaus und fällt in den darunterliegenden Absatz.

{{EmbedGHLiveSample("css-examples/learn/overflow/block-overflow.html", '100%', 700)}}

Das zweite Beispiel ist ein Wort in einem Kasten. Der Kasten wurde zu klein für das Wort gemacht und es bricht aus dem Kasten aus.

{{EmbedGHLiveSample("css-examples/learn/overflow/inline-overflow.html", '100%', 600)}}

Vielleicht fragen Sie sich, warum CSS so unordentlich arbeitet und Inhalt außerhalb des vorgesehenen Containers anzeigt. Warum nicht den überlaufenden Inhalt verstecken? Warum nicht die Größe des Containers skalieren, um allen Inhalt aufzunehmen?

Wo immer möglich, versteckt CSS keinen Inhalt. Dies würde einen Datenverlust verursachen. Das Problem mit Datenverlust ist, dass Sie es möglicherweise nicht bemerken. Website-Besucher bemerken es möglicherweise nicht. Wenn der Abschickbutton auf einem Formular verschwindet und niemand das Formular abschließen kann, könnte dies ein großes Problem sein! Stattdessen zeigt CSS Überläufe auf sichtbare Weise. Es ist wahrscheinlicher, dass Sie bemerken, dass es ein Problem gibt. Im schlimmsten Fall wird Ihnen ein Besucher mitteilen, dass sich Inhalte überschneiden.

Wenn Sie einen Kasten mit einer `width` oder `height` einschränken, verlässt sich CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf managen. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn der Kasten Text enthält. Beim Entwerfen der Website könnte es mehr Text geben als erwartet, oder der Text könnte größer sein (zum Beispiel, wenn der Benutzer die Schriftgröße erhöht hat).

Die nächsten beiden Lektionen erklären verschiedene Ansätze zur Steuerung der Größenbestimmung auf eine Weise, die weniger anfällig für Überlauf ist. Wenn Sie jedoch eine feste Größe benötigen, können Sie auch steuern, wie der Überlauf sich verhält. Lesen Sie weiter!

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft hilft Ihnen, den Überlauf von Inhalten eines Elements zu verwalten. Mit dieser Eigenschaft können Sie einem Browser mitteilen, wie er mit überlaufendem Inhalt umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value) Wertetyps ist `visible`. Mit dieser Standardeinstellung kann man Inhalt sehen, wenn er überläuft.

Um Inhalt abzuschneiden, wenn er überläuft, können Sie `overflow: hidden` setzen. Das tut genau das, was es sagt: Es versteckt Überlauf. Seien Sie sich bewusst, dass dadurch einige Inhalte unsichtbar werden können. Sie sollten dies nur tun, wenn das Verbergen von Inhalten keine Probleme verursacht.

{{EmbedGHLiveSample("css-examples/learn/overflow/hidden.html", '100%', 700)}}

Vielleicht möchten Sie stattdessen Bildlaufleisten hinzufügen, wenn Inhalte überlaufen? Mit `overflow: scroll` werden Browser mit sichtbaren Bildlaufleisten diese immer anzeigen, auch wenn nicht genügend Inhalte vorhanden sind, um einen Überlauf zu verursachen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Bildlaufleisten je nach Inhalt im Container erscheinen oder verschwinden.

**Entfernen Sie etwas Inhalt aus dem Kasten unten. Beachten Sie, wie die Bildlaufleisten bleiben, auch wenn kein Scrollen erforderlich ist.**

> [!NOTE]
> Die Sichtbarkeit der Bildlaufleisten hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um die Bildlaufleisten immer anzuzeigen, damit sie in den folgenden Beispielen immer sichtbar sind.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll.html", '100%', 700)}}

Im obigen Beispiel müssen wir nur entlang der `y`-Achse scrollen, aber wir bekommen Bildlaufleisten in beiden Achsen. Um nur entlang der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` setzen.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-y.html", '100%', 700)}}

Sie können auch das Scrollen entlang der x-Achse mit {{cssxref("overflow-x")}} aktivieren, obwohl dies nicht der empfohlene Weg ist, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einem kleinen Kasten haben, sollten Sie die {{cssxref("word-break")}}- oder {{cssxref("overflow-wrap")}}-Eigenschaft verwenden. Darüber hinaus können einige der Methoden, die in [Größenbestimmung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) besprochen werden, Ihnen helfen, Kästen zu erstellen, die sich besser an unterschiedliche Inhaltsmengen anpassen.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-x.html", '100%', 600)}}

Wie bei `scroll` erhalten Sie eine Bildlaufleiste in der scrollenden Dimension, unabhängig davon, ob genug Inhalt vorhanden ist, um eine Bildlaufleiste zu verursachen.

> [!NOTE]
> Sie können das Scrollen auf der x- und y-Achse mithilfe der `overflow`-Eigenschaft spezifizieren, indem Sie zwei Werte angeben. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

Wenn Sie nur möchten, dass Bildlaufleisten erscheinen, wenn mehr Inhalt vorhanden ist, als in den Kasten passt, verwenden Sie `overflow: auto`. Dies ermöglicht es dem Browser zu bestimmen, ob er Bildlaufleisten anzeigen sollte.

**Im folgenden Beispiel entfernen Sie so viel Inhalt, bis er in den Kasten passt. Sie sollten sehen, dass die Bildlaufleisten verschwinden.**

{{EmbedGHLiveSample("css-examples/learn/overflow/auto.html", '100%', 700)}}

## Überlauf erzeugt einen Block Formatting Context

Wenn Sie die `<overflow>`-Werte `scroll` und `auto` verwenden, schaffen Sie einem [**Block Formatting Context** (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Das bedeutet, dass der Inhalt eines Elementkastens mit diesen `overflow`-Werten ein eigenständiges Layout erhält. Inhalt außerhalb eines solchen Elementkastens kann nicht in den Elementkasten eindringen und nichts aus dem Elementkasten kann in das umgebende Layout eindringen. Dies ermöglicht ein Scrollverhalten, da alle Kasteninhalte enthalten sein müssen und nicht überlappen dürfen, um ein konsistentes Scroll-Erlebnis zu schaffen.

## Unerwünschter Überlauf im Webdesign

Moderne Layout-Methoden (beschrieben in [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)) verwalten Überlauf. Sie arbeiten weitgehend ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Seiten mit Containern fester Höhe erstellt, um die Unterseiten von Kästen zu gestalten. Diese Kästen könnten ansonsten keine Beziehung zueinander gehabt haben. Dies war fragil. Wenn Sie auf einen Kasten stoßen, in dem sich Inhalt in Altsystemen über andere Inhalte der Seite überlagert, erkennen Sie jetzt, dass dies bei Überlauf passiert. Im Idealfall werden Sie das Layout so überarbeiten, dass es nicht auf Container fester Höhe angewiesen ist.

Denken Sie beim Entwickeln einer Website immer an Überlauf. Testen Sie Designs mit großen und kleinen Inhaltsmengen. Erhöhen und verringern Sie die Schriftgröße um mindestens zwei Schritte. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern der Überlaufwerte, um Inhalte zu verstecken oder Bildlaufleisten hinzuzufügen, bleibt einigen wenigen ausgewählten Anwendungsfällen vorbehalten (zum Beispiel, wenn Sie beabsichtigen, einen scrollbaren Kasten zu haben).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren - siehe [Testen Sie Ihre Fähigkeiten: Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflow_Tasks).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Sie sollten verstehen, dass Standard-CSS vermeidet, überlaufende Inhalte unsichtbar zu machen. Sie haben entdeckt, dass Sie potenziellen Überlauf verwalten können, und sollten auch Ihre Arbeiten testen, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursachen.

Im nächsten Artikel werden wir uns die häufigsten [Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) in CSS anschauen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}
