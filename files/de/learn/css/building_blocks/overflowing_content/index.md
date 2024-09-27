---
title: Überlaufender Inhalt
slug: Learn/CSS/Building_blocks/Overflowing_content
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

Überlauf tritt auf, wenn zu viel Inhalt in ein Elementfeld passt. In diesem Leitfaden lernen Sie, was Überlauf ist und wie Sie ihn verwalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Basissoftware installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Überlauf verstehen und wie man damit umgeht.</td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen einschränken, indem Sie Werte für {{cssxref("width")}} und {{cssxref("height")}} (oder {{cssxref("inline-size")}} und {{cssxref("block-size")}}) zuweisen. **Überlauf passiert, wenn zu viel Inhalt in eine Box passt.** CSS bietet verschiedene Werkzeuge, um Überlauf zu verwalten. Wenn Sie weiter mit CSS-Layout und CSS-Schreiben voranschreiten, werden Sie auf mehr Überlaufsituationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf demonstrieren.

Das erste Beispiel ist eine Box, die durch das Setzen einer `height` eingeschränkt wurde. Dann fügen wir Inhalt hinzu, der den zugewiesenen Platz überschreitet. Der Inhalt läuft über die Box hinaus und fällt in den darunterliegenden Absatz.

{{EmbedGHLiveSample("css-examples/learn/overflow/block-overflow.html", '100%', 700)}}

Das zweite Beispiel ist ein Wort in einer Box. Die Box wurde zu klein für das Wort gemacht und daher bricht es aus der Box aus.

{{EmbedGHLiveSample("css-examples/learn/overflow/inline-overflow.html", '100%', 600)}}

Sie fragen sich vielleicht, warum CSS auf so unordentliche Weise arbeitet und Inhalte außerhalb ihres beabsichtigten Containers anzeigt. Warum nicht überlaufenden Inhalt verstecken? Warum nicht die Größe des Containers anpassen, um allen Inhalt aufzunehmen?

Wo immer möglich, versteckt CSS keinen Inhalt. Dies würde zu Datenverlust führen. Das Problem bei Datenverlust ist, dass Sie es möglicherweise nicht bemerken. Website-Besucher bemerken es möglicherweise nicht. Wenn der Absende-Button in einem Formular verschwindet und niemand das Formular ausfüllen kann, könnte das ein großes Problem sein! Stattdessen läuft CSS auf sichtbare Weise über. Es ist wahrscheinlicher, dass Sie sehen, dass ein Problem vorliegt. Im schlimmsten Fall wird Ihnen ein Website-Besucher mitteilen, dass Inhalte überlappen.

Wenn Sie eine Box mit einer `width` oder `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das potenzielle Überlaufproblem verwalten. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn die Box Text enthält. Es kann mehr Text geben, als Sie bei der Gestaltung der Seite erwartet haben, oder der Text kann größer sein (zum Beispiel, wenn der Benutzer seine Schriftgröße erhöht hat).

Die nächsten beiden Lektionen erklären verschiedene Ansätze zur Kontrolle von Größen, die weniger anfällig für Überlauf sind. Wenn Sie jedoch eine feste Größe benötigen, können Sie auch steuern, wie sich der Überlauf verhält. Lassen Sie uns weiterlesen!

## Die Überlauf-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft hilft Ihnen, den Inhalt von Elementen bezüglich Überlauf zu verwalten. Mit dieser Eigenschaft können Sie dem Browser mitteilen, wie er mit überlaufendem Inhalt umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value)-Werttyps ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

Um Inhalt abzuschneiden, wenn er überläuft, können Sie `overflow: hidden` setzen. Dies tut genau das, was es sagt: es versteckt den Überfluss. Seien Sie sich bewusst, dass dies einige Inhalte unsichtbar machen kann. Sie sollten dies nur tun, wenn das Verstecken von Inhalten keine Probleme verursacht.

{{EmbedGHLiveSample("css-examples/learn/overflow/hidden.html", '100%', 700)}}

Vielleicht möchten Sie stattdessen bei überlaufendem Inhalt Scrollleisten hinzufügen? Mit `overflow: scroll` werden Browser mit sichtbaren Scrollleisten diese immer anzeigen – auch wenn nicht genug Inhalt zum Überlaufen vorhanden ist. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt Scrollleisten abhängig von der Menge des Inhalts im Container erscheinen oder verschwinden zu lassen.

**Entfernen Sie etwas Inhalt aus der Box unten. Beachten Sie, wie die Scrollleisten bleiben, auch wenn kein Scrollen erforderlich ist.**

> [!NOTE]
> Die Sichtbarkeit von Scrollleisten hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um Scrollleisten immer anzuzeigen, damit die Scrollleisten in den folgenden Beispielen immer angezeigt werden.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll.html", '100%', 700)}}

Im obigen Beispiel müssen wir nur auf der `y`-Achse scrollen, jedoch erhalten wir Scrollleisten auf beiden Achsen. Um nur auf der `y`-Achse zu scrollen, könnten Sie die Eigenschaft {{cssxref("overflow-y")}} verwenden, indem Sie `overflow-y: scroll` setzen.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-y.html", '100%', 700)}}

Sie können auch das Scrollen entlang der x-Achse mit {{cssxref("overflow-x")}} aktivieren, obwohl dies keine empfohlene Methode ist, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einer kleinen Box haben, sollten Sie stattdessen die Eigenschaften {{cssxref("word-break")}} oder {{cssxref("overflow-wrap")}} in Betracht ziehen. Darüber hinaus können einige der in [Größenbestimmung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) behandelten Methoden Ihnen helfen, Boxen zu erstellen, die bei variierenden Inhaltsmengen besser skalieren.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-x.html", '100%', 600)}}

Wie bei `scroll` erhalten Sie eine Scrollleiste in der Scroll-Richtung, unabhängig davon, ob genug Inhalt vorhanden ist, um eine Scrollleiste zu verursachen.

> [!NOTE]
> Sie können das Scrollen entlang der x- und y-Achse mit der `overflow`-Eigenschaft angeben, indem Sie zwei Werte übergeben. Wenn zwei Schlüsselwörter angegeben sind, gilt das erste für `overflow-x` und das zweite für `overflow-y`. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

Wenn Sie möchten, dass Scrollleisten nur erscheinen, wenn mehr Inhalt vorhanden ist, als in die Box passt, verwenden Sie `overflow: auto`. So kann der Browser entscheiden, ob er Scrollleisten anzeigen soll.

**Im Beispiel unten, entfernen Sie Inhalt, bis er in die Box passt. Sie sollten sehen, dass die Scrollleisten verschwinden.**

{{EmbedGHLiveSample("css-examples/learn/overflow/auto.html", '100%', 700)}}

## Überlauf etabliert einen Block-Format-Kontext

Wenn Sie die `<overflow>`-Werte `scroll` und `auto` verwenden, erstellen Sie einen [**Block-Format-Kontext** (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Dies bedeutet, dass der Inhalt einer Elementbox mit diesen `overflow`-Werten ein eigenständiges Layout erhält. Inhalt außerhalb einer solchen Elementbox kann nicht in die Elementbox eindringen, und nichts aus der Elementbox kann in das umgebende Layout eindringen. Dies ermöglicht ein Scrollverhalten, da alle Boxinhalte enthalten sein müssen und sich nicht überschneiden dürfen, um ein konsistentes Scrollerlebnis zu schaffen.

## Unerwünschter Überlauf im Webdesign

Moderne Layout-Methoden (beschrieben in [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)) verwalten Überlauf. Sie arbeiten größtenteils ohne Annahmen oder Abhängigkeiten davon, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Seiten mit Containern fester Höhe erstellt, um Boxunterseiten auszurichten. Diese Boxen hatten möglicherweise ansonsten keine Beziehung zueinander. Dies war fragil. Wenn Sie eine Box in Legacy-Anwendungen finden, wo Inhalt über andere Inhalte der Seite überlagert, erkennen Sie jetzt, dass dies mit Überlauf passiert. Idealerweise werden Sie das Layout umgestalten, um nicht auf Container mit fester Höhe zu setzen.

Wenn Sie eine Seite entwickeln, behalten Sie stets den Überlauf im Auge. Testen Sie Designs mit großen und kleinen Inhaltsmengen. Erhöhen und verringern Sie Schriftgrößen um mindestens zwei Stufen. Stellen Sie sicher, dass Ihr CSS robust ist. Änderungen von Überlaufwerten, um Inhalt zu verstecken oder Scrollleisten hinzuzufügen, sollten auf einige ausgewählte Anwendungsfälle beschränkt sein (zum Beispiel, wenn Sie beabsichtigen, eine scrollbare Box zu haben).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflow_Tasks).

## Zusammenfassung

Diese Lektion führte das Konzept des Überlaufs ein. Sie sollten verstehen, dass CSS standardmäßig vermeidet, überlappenden Inhalt unsichtbar zu machen. Sie haben entdeckt, dass Sie potenziellen Überlauf verwalten können und dass Sie Arbeiten testen sollten, um sicherzustellen, dass sie nicht versehentlich problematischen Überlauf verursachen.

Im nächsten Artikel werden wir uns die häufigsten [Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) in CSS ansehen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}
