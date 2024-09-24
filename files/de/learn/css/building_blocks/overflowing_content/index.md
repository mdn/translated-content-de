---
title: Überlaufende Inhalte
slug: Learn/CSS/Building_blocks/Overflowing_content
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in ein Elementfeld zu passen. In diesem Leitfaden lernen Sie, was Überlauf ist und wie Sie ihn verwalten können.

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
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS-Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis von Überlauf und wie man ihn verwaltet.</td>
    </tr>
  </tbody>
</table>

## Was ist Überlauf?

Alles in CSS ist eine Box. Sie können die Größe dieser Boxen einschränken, indem Sie Werte für {{cssxref("width")}} und {{cssxref("height")}} (oder {{cssxref("inline-size")}} und {{cssxref("block-size")}}) zuweisen. **Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in eine Box zu passen.** CSS bietet verschiedene Werkzeuge, um Überlauf zu verwalten. Je weiter Sie mit dem CSS-Layout und dem Schreiben von CSS fortschreiten, desto öfter werden Sie auf Überlaufsituationen stoßen.

## CSS versucht "Datenverlust" zu vermeiden

Betrachten wir zwei Beispiele, die das Standardverhalten von CSS bei Überlauf demonstrieren.

Das erste Beispiel ist eine Box, die durch die Einstellung einer `height` eingeschränkt wurde. Dann fügen wir Inhalt hinzu, der den zugewiesenen Raum überschreitet. Der Inhalt überläuft die Box und fällt in den darunter liegenden Absatz.

{{EmbedGHLiveSample("css-examples/learn/overflow/block-overflow.html", '100%', 700)}}

Das zweite Beispiel ist ein Wort in einer Box. Die Box wurde zu klein für das Wort gemacht und es bricht aus der Box aus.

{{EmbedGHLiveSample("css-examples/learn/overflow/inline-overflow.html", '100%', 600)}}

Sie fragen sich vielleicht, warum CSS auf so unordentliche Weise arbeitet und Inhalte außerhalb ihres vorgesehenen Containers anzeigt. Warum nicht überlaufende Inhalte verbergen? Warum nicht die Größe des Containers skalieren, um allen Inhalt aufzunehmen?

Wo immer möglich, verbirgt CSS keine Inhalte. Dies würde zu Datenverlust führen. Das Problem beim Datenverlust ist, dass man ihn möglicherweise nicht bemerkt. Website-Besucher bemerken ihn möglicherweise nicht. Wenn der Absendebutton eines Formulars verschwindet und niemand das Formular abschließen kann, könnte dies ein großes Problem darstellen! Stattdessen sorgt CSS für sichtbaren Überlauf. Sie bemerken eher, dass es ein Problem gibt. Im schlimmsten Fall wird ein Website-Besucher Sie darauf hinweisen, dass sich Inhalte überlappen.

Wenn Sie eine Box mit einer `width` oder `height` einschränken, vertraut CSS darauf, dass Sie wissen, was Sie tun. CSS geht davon aus, dass Sie das Potenzial für Überlauf verwalten. Im Allgemeinen ist das Einschränken der Blockdimension problematisch, wenn die Box Text enthält. Möglicherweise gibt es mehr Text als erwartet, als Sie die Website entworfen haben, oder der Text ist größer (zum Beispiel, wenn der Benutzer seine Schriftgröße erhöht hat).

Die nächsten zwei Lektionen erklären verschiedene Ansätze, um die Größenbestimmung auf eine Weise zu steuern, die weniger anfällig für Überlauf ist. Wenn Sie jedoch eine feste Größe benötigen, können Sie auch steuern, wie der Überlauf sich verhält. Lesen wir weiter!

## Die overflow-Eigenschaft

Die {{cssxref("overflow")}}-Eigenschaft hilft Ihnen beim Verwalten des Inhaltsüberlaufs eines Elements. Mit dieser Eigenschaft können Sie einem Browser mitteilen, wie er mit überlaufendem Inhalt umgehen soll. Der Standardwert des [`<overflow>`](/de/docs/Web/CSS/overflow_value)-Wertetyps ist `visible`. Mit dieser Standardeinstellung kann man den Inhalt sehen, wenn er überläuft.

Um Inhalt abzuschneiden, wenn er überläuft, können Sie `overflow: hidden` setzen. Dies tut genau das, was es sagt: Es verbirgt Überlauf. Seien Sie sich bewusst, dass dies einige Inhalte unsichtbar machen kann. Sie sollten dies nur tun, wenn das Verbergen von Inhalten keine Probleme verursachen wird.

{{EmbedGHLiveSample("css-examples/learn/overflow/hidden.html", '100%', 700)}}

Vielleicht möchten Sie stattdessen Scrollleisten hinzufügen, wenn der Inhalt überläuft? Mit `overflow: scroll` zeigen Browser mit sichtbaren Scrollleisten diese immer an—auch wenn nicht genug Inhalt vorhanden ist, um einen Überlauf zu verursachen. Dies bietet den Vorteil, das Layout konsistent zu halten, anstatt dass Scrollleisten je nach Inhaltsmenge im Container erscheinen oder verschwinden.

**Entfernen Sie etwas Inhalt aus der Box unten. Beachten Sie, wie die Scrollleisten bleiben, auch wenn kein Bedarf zum Scrollen besteht.**

> [!NOTE]
> Die Sichtbarkeit der Scrollleisten hängt vom Betriebssystem ab.
> Möglicherweise müssen Sie Ihre Browsereinstellungen ändern, um Scrollleisten immer anzuzeigen, damit die Scrollleisten in den folgenden Beispielen immer angezeigt werden.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll.html", '100%', 700)}}

Im obigen Beispiel müssen wir nur auf der `y`-Achse scrollen, wir erhalten jedoch Scrollleisten in beiden Achsen. Um nur auf der `y`-Achse zu scrollen, könnten Sie die {{cssxref("overflow-y")}}-Eigenschaft verwenden und `overflow-y: scroll` setzen.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-y.html", '100%', 700)}}

Sie können auch das Scrollen entlang der x-Achse mit {{cssxref("overflow-x")}} aktivieren, obwohl dies keine empfohlene Methode ist, um lange Wörter unterzubringen! Wenn Sie ein langes Wort in einer kleinen Box haben, sollten Sie die {{cssxref("word-break")}}- oder {{cssxref("overflow-wrap")}}-Eigenschaft in Betracht ziehen. Zudem können einige der Methoden, die im Abschnitt [Größen von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) behandelt werden, Ihnen helfen, Boxen zu erstellen, die sich besser an verschiedene Mengen von Inhalten anpassen.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-x.html", '100%', 600)}}

Wie bei `scroll` erhalten Sie eine Scrollleiste in der Scrollrichtung, unabhängig davon, ob genug Inhalt vorhanden ist, um eine Scrollleiste zu verursachen.

> [!NOTE]
> Sie können das Scrollen auf der x- und y-Achse mit der `overflow`-Eigenschaft spezifizieren, indem Sie zwei Werte übergeben. Wenn zwei Schlüsselwörter angegeben sind, wird das erste auf `overflow-x` und das zweite auf `overflow-y` angewendet. Andernfalls werden sowohl `overflow-x` als auch `overflow-y` auf denselben Wert gesetzt. Zum Beispiel würde `overflow: scroll hidden` `overflow-x` auf `scroll` und `overflow-y` auf `hidden` setzen.

Wenn Sie nur möchten, dass Scrollleisten erscheinen, wenn mehr Inhalt vorhanden ist, als in die Box passt, verwenden Sie `overflow: auto`. Dies ermöglicht dem Browser zu bestimmen, ob Scrollleisten angezeigt werden sollen.

**Im nachstehenden Beispiel entfernen Sie Inhalt, bis er in die Box passt. Sie sollten sehen, dass die Scrollleisten verschwinden.**

{{EmbedGHLiveSample("css-examples/learn/overflow/auto.html", '100%', 700)}}

## Überlauf etabliert einen Block-Formatierungs-Kontext

Wenn Sie die `<overflow>`-Werte `scroll` und `auto` verwenden, erzeugen Sie einen [**Block-Formatierungs-Kontext** (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context). Das bedeutet, dass der Inhalt einer Elementbox mit diesen `overflow`-Werten ein in sich geschlossenes Layout erhält. Inhalt außerhalb einer solchen Elementbox kann nicht in die Elementbox eindringen, und nichts aus der Elementbox kann in das umgebende Layout eindringen. Dies ermöglicht Scroll-Verhalten, da aller Box-Inhalt enthalten sein und nicht überlappen muss, um ein konsistentes Scroll-Erlebnis zu schaffen.

## Unerwünschter Überlauf im Webdesign

Moderne Layout-Methoden (beschrieben im Abschnitt [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)) verwalten Überlauf. Sie arbeiten weitgehend ohne Annahmen oder Abhängigkeiten darüber, wie viel Inhalt auf einer Webseite vorhanden sein wird.

Das war nicht immer die Norm. In der Vergangenheit wurden einige Seiten mit Containern fester Höhe gebaut, um Boxböden auszurichten. Diese Boxen hatten möglicherweise sonst keine Beziehung zueinander. Das war fragil. Wenn Sie auf eine Box stoßen, in der Inhalt in einer Legacy-Anwendung andere Inhalte auf der Seite überdeckt, werden Sie jetzt erkennen, dass dies mit Überlauf geschieht. Ideal wäre es, das Layout umzustrukturieren, um nicht auf Container mit fester Höhe angewiesen zu sein.

Beim Entwickeln einer Website sollten Sie immer den Überlauf im Auge behalten. Testen Sie Designs mit großen und kleinen Mengen an Inhalt. Erhöhen und verringern Sie Schriftgrößen um mindestens zwei Schritte. Stellen Sie sicher, dass Ihr CSS robust ist. Das Ändern von Überlaufwerten zum Verbergen von Inhalten oder zum Hinzufügen von Scrollleisten ist auf einige wenige ausgewählte Anwendungsfälle beschränkt (zum Beispiel, wenn Sie eine scrollbare Box haben möchten).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflow_Tasks).

## Zusammenfassung

Diese Lektion führte in das Konzept des Überlaufs ein. Sie sollten verstehen, dass CSS standardmäßig vermeidet, überlaufende Inhalte unsichtbar zu machen. Sie haben entdeckt, dass Sie den potenziellen Überlauf verwalten können und auch, dass Sie die Arbeit testen sollten, um sicherzustellen, dass sie nicht versehentlich zu problematischem Überlauf führt.

Im nächsten Artikel werfen wir einen Blick auf die häufigsten [Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) in CSS.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}
