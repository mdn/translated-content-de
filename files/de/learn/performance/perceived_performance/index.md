---
title: Wahrgenommene Leistung
slug: Learn/Performance/Perceived_performance
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}

**[Wahrgenommene Leistung](/de/docs/Glossary/Perceived_performance)** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Mit anderen Worten, wie schnell eine Website dem Benutzer erscheint. Es ist schwieriger zu quantifizieren und zu messen als die tatsächliche Ausführungsgeschwindigkeit, aber vielleicht sogar noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, sowie eine Reihe von Tools zur Bewertung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit der Nutzerwahrnehmung der Web-Performance zu erlangen.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die Wahrnehmung, wie schnell (und reibungslos) Seiten laden und auf Benutzerinteraktionen reagieren, ist noch wichtiger als die tatsächliche Zeit, die benötigt wird, um die Ressourcen abzurufen. Auch wenn Sie Ihre Seite möglicherweise nicht physisch schneller laufen lassen können, können Sie vielleicht verbessern, wie schnell sie sich für Ihre Benutzer _anfühlt_.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist, dass es in der Regel besser ist, eine schnelle Antwort und regelmäßige Statusaktualisierungen zu geben, anstatt den Benutzer warten zu lassen, bis ein Vorgang vollständig abgeschlossen ist (bevor Informationen bereitgestellt werden). Zum Beispiel ist es besser, den Text anzuzeigen, wenn er ankommt, als auf alle Bilder und andere Ressourcen zu warten. Auch wenn der Inhalt nicht vollständig heruntergeladen ist, kann der Benutzer sehen, dass etwas passiert, und er kann beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Zeit scheint schneller zu vergehen für Benutzer, die aktiv eingebunden, abgelenkt oder unterhalten werden, als für diejenigen, die passiv auf etwas warten. Wo möglich, binden Sie aktiv ein und informieren Sie Benutzer, die auf den Abschluss einer Aufgabe warten.

Ebenso ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um eine lang laufende Operation durchzuführen. Auch wenn dies die Ausführungszeit nicht ändert, fühlt sich die Site reaktionsschneller an, und der Benutzer weiß, dass an etwas Nützlichem gearbeitet wird.

## Leistungsmetriken

Es gibt keine einzige Metrik oder keinen Test, der auf einer Site durchgeführt werden kann, um zu bewerten, wie ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Metriken, die als "hilfreiche Indikatoren" dienen können:

- [First paint](/de/docs/Glossary/First_paint)
  - : Die Zeit bis zum Beginn des ersten Malvorgangs. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann eine einfache Hintergrundfarbaktualisierung oder etwas noch Unauffälligeres sein.
- [First Contentful Paint](/de/docs/Glossary/First_contentful_paint) (FCP)
  - : Die Zeit bis zur ersten signifikanten Darstellung (z. B. von Text, Vorder- oder Hintergrundbild, Canvas oder SVG, usw.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder sinnvoll ist.
- [First Meaningful Paint](/de/docs/Glossary/First_meaningful_paint) (FMP)
  - : Die Zeit, zu der nützlicher Inhalt auf dem Bildschirm gerendert wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten sichtbaren Inhaltselements im Ansichtsfenster.
- [Speed index](/de/docs/Glossary/Speed_index)
  - : Misst die durchschnittliche Zeit, bis die Pixel auf dem sichtbaren Bildschirm gezeichnet werden.
- [Time to interactive](/de/docs/Glossary/Time_to_interactive)
  - : Zeit bis die Benutzeroberfläche für Interaktionen bereitsteht (d. h. die letzte [lange Aufgabe](/de/docs/Glossary/Long_task) des Ladeprozesses abgeschlossen ist).

## Leistungsverbesserung

Hier sind ein paar Tipps und Tricks, um die wahrgenommene Leistung zu verbessern:

### Minimieren der anfänglichen Ladezeit

Um die wahrgenommene Leistung zu verbessern, minimieren Sie das ursprüngliche Laden der Seite. Mit anderen Worten, laden Sie den Inhalt herunter, mit dem der Benutzer sofort interagieren wird, und laden Sie den Rest danach im "Hintergrund". Die Gesamtmenge des heruntergeladenen Inhalts kann tatsächlich zunehmen, aber der Benutzer _wartet_ nur auf eine sehr kleine Menge, sodass der Download schneller erscheint.

Trennen Sie interaktive Funktionen vom Inhalt und laden Sie Texte, Stile und Bilder, die beim ersten Laden sichtbar sind. Verzögern Sie das Laden oder laden Sie Bilder oder Skripte nach, die beim ersten Seitenaufruf nicht verwendet oder sichtbar sind. Außerdem sollten Sie die geladenen Ressourcen optimieren. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe serviert werden.

### Verhindern von springendem Inhalt und anderen Layoutverschiebungen

Bilder oder andere Elemente, die dazu führen, dass Inhalte nach unten gedrückt werden oder an eine andere Stelle springen, wie das Laden von Werbung von Drittanbietern, können den Eindruck erwecken, dass die Seite noch lädt, und sind schlecht für die wahrgenommene Leistung. Inhaltsverschiebungen sind besonders schlecht für die Benutzererfahrung, wenn sie nicht durch Benutzerinteraktion initiiert werden. Wenn einige Ressourcen langsamer geladen werden als andere, mit Elementen, die geladen werden, nachdem anderer Inhalt bereits auf dem Bildschirm gerendert wurde, planen Sie im Voraus und lassen Sie Platz im Layout für sie, damit Inhalte nicht springen oder sich neu ausrichten, insbesondere nachdem die Seite interaktiv geworden ist.

### Vermeiden von Verzögerungen bei Schriftdateien

Die Schriftwahl ist wichtig. Die Auswahl einer geeigneten Schriftart kann die Benutzererfahrung erheblich verbessern. Aus der Sicht der wahrgenommenen Leistung können "suboptimale Schriftimportierungen" zu einem Flackern führen, wenn Texte gestylt werden oder auf andere Schriften zurückgegriffen wird.

Wählen Sie Ersatzschriften, die dieselbe Größe und Gewichtung haben, sodass die Seitenänderung weniger auffällt, wenn die Schriften geladen werden.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsschnell sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer in der Lage sein, ohne Verzögerung damit interagieren zu können. Benutzer haben das Gefühl, dass etwas träge ist, wenn es mehr als 50 ms dauert, um zu reagieren. Sie haben das Gefühl, dass eine Seite schlecht funktioniert, wenn Inhalte langsamer als alle 16,67 ms (oder 60 Bilder pro Sekunde) neu gezeichnet werden oder dies in unregelmäßigen Abständen geschieht.

Machen Sie Dinge wie Eingabevorausschau zu einer progressiven Verbesserung: Verwenden Sie CSS, um ein Eingabemodal anzuzeigen, JS, um Autovervollständigung hinzuzufügen, sobald sie verfügbar ist.

### Aufgabeninitiatoren erscheinen interaktiver

Eine Inhaltsanfrage bei `keydown` statt beim Warten auf `keyup` kann die wahrgenommene Ladezeit des Inhalts um 200 ms verkürzen. Das Hinzufügen einer interessanten, aber unaufdringlichen 200ms-Animation zu diesem `keyup`-Ereignis kann weitere 200ms der wahrgenommenen Ladezeit reduzieren. Sie sparen keine 400 ms Zeit, aber der Benutzer hat nicht das Gefühl, auf Inhalte zu warten, bis sie tatsächlich warten.

## Fazit

Indem Sie die Zeit reduzieren, die ein Benutzer auf _nützliche_ Inhalte warten muss, und die Site reaktionsschnell und ansprechend halten, wird es den Benutzern so vorkommen, als ob die Site besser funktioniert – auch wenn die tatsächliche Zeit zum Laden von Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}
