---
title: Das "Warum" der Web-Performance
slug: Learn/Performance/why_web_performance
l10n:
  sourceCommit: 95b616378ae463831754e5c16f2018c77d3f56e3
---

{{LearnSidebar}}{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}

Web-Performance dreht sich rund um die Schnelligkeit von Webseiten, einschließlich der Fähigkeit, langsame Prozesse _schnell_ erscheinen zu lassen. Dieser Artikel bietet eine Einführung, warum Web-Performance sowohl für die Besucher Ihrer Seite als auch für Ihre Geschäftsziele wichtig ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, und grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web">clientseitige Web-Technologien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundkenntnisse darüber zu erlangen, warum Web-Performance für eine gute Benutzererfahrung wichtig ist.
      </td>
    </tr>
  </tbody>
</table>

Web-Performance bezieht sich darauf, wie schnell Seiteninhalte in einem Webbrowser **geladen** und **gerendert** werden und wie gut sie auf Benutzerinteraktionen reagieren. Schlecht performante Seiten sind langsam beim Anzeigen und langsam beim Reagieren auf Eingaben. Sie erhöhen die Abbruchrate. Im schlimmsten Fall führt eine schlechte Performance dazu, dass Inhalte gar nicht zugänglich sind. Ein gutes Ziel für die Web-Performance ist, dass Benutzer die Performance nicht bemerken. Während die Wahrnehmung der Geschwindigkeit einer Webseite subjektiv ist, können das Laden und Rendern gemessen werden. Gute Performance mag für die meisten Seitenbesucher nicht offensichtlich sein, aber die meisten werden eine träge Seite sofort erkennen. Deshalb ist es uns wichtig.

## Warum auf die Performance achten?

Web-Performance — und die zugehörigen Best Practices — sind wichtig, damit Ihre Website-Besucher eine gute Erfahrung haben. In gewisser Weise kann Web-Performance als Teilmenge der [Web-Zugänglichkeit](/de/docs/Learn/Accessibility) betrachtet werden. Bei der Performance wie auch bei der Zugänglichkeit berücksichtigen Sie, welches Gerät ein Besucher verwendet, um auf die Seite zuzugreifen, und die Verbindungsgeschwindigkeit des Geräts.

Betrachten Sie als Beispiel die Ladeerfahrung von CNN.com, die zum Zeitpunkt der Erstellung dieses Textes über 400 HTTP-Anfragen mit einer Dateigröße von über 22,6 MB hatte.

- Stellen Sie sich vor, Sie laden dies auf einem Desktop-Computer, der mit einem Glasfasernetzwerk verbunden ist. Dies würde relativ schnell erscheinen, und die Dateigröße wäre weitgehend irrelevant.
- Stellen Sie sich vor, dieselbe Seite mit getethertem mobilen Datenverkehr auf einem neun Jahre alten iPad zu laden, während Sie im öffentlichen Nahverkehr nach Hause pendeln. Die gleiche Seite wird langsam laden, möglicherweise unbenutzbar je nach Mobilfunkabdeckung. Sie könnten aufgeben, bevor es vollständig geladen ist.
- Stellen Sie sich vor, dieselbe Seite auf einem kostengünstigen Gerät in einem Gebiet mit eingeschränkter Abdeckung zu laden. Die Seite wird sehr langsam laden – wenn sie überhaupt lädt – mit blockierenden Skripten, die möglicherweise zeitlich ablaufen, und einer möglichen erheblichen CPU-Auslastung, die zu Browserabstürzen führen kann, falls sie doch lädt.

Eine 22,6 MB große Seite könnte auf einem 3G-Netzwerk bis zu 83 Sekunden zum Laden brauchen, wobei [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) (was die Basis-HTML-Struktur der Seite bedeutet) bei 31,86 Sekunden liegt.

Und es ist nicht nur die benötigte Zeit zum Herunterladen, die ein großes Problem darstellt. In einigen Regionen werden Internetverbindungen pro Megabyte abgerechnet, was große Downloads unerschwinglich teuer macht. Unser Beispiel mit den 22,6 MB auf CNN.com würde einen signifikanten Teil des täglichen Datenvolumens eines mobilen Anwenders verbrauchen oder sogar zu hohen Gebühren in bestimmten internationalen Roaming-Tarifen führen. (Siehe [wie viel das Herunterladen Ihrer Seite kostet](https://whatdoesmysitecost.com/).)

### Konversionsraten verbessern

Die Reduzierung der Download- und Renderzeit einer Seite verbessert die Konversionsraten und Benutzerbindung.

Eine **Konversionsrate** ist die Rate, mit der Seitenbesucher eine gemessene oder gewünschte Aktion durchführen. Zum Beispiel könnte dies ein Kauf, das Lesen eines Artikels oder das Abonnieren eines Newsletters sein. Die gemessene Aktion als Konversionsrate hängt von den Geschäftszielen der Website ab.

Die Performance beeinflusst die Konversion; die Verbesserung der Web-Performance verbessert die Konversion. Besucher erwarten, dass eine Seite innerhalb von zwei Sekunden oder weniger lädt; manchmal sogar noch weniger auf Mobilgeräten (wo es in der Regel länger dauert). Dieselben Besucher beginnen, langsame Seiten nach 3 Sekunden zu verlassen.

Wie schnell eine Seite lädt, ist ein Faktor. Wenn die Seite langsam auf Benutzereingaben reagiert oder ruckelig erscheint, verliert der Besucher das Interesse und Vertrauen.

Hier sind einige Beispiele aus der Praxis für Leistungssteigerungen:

- [Tokopedia reduzierte die Renderzeit von 14s auf 2s für 3G-Verbindungen und erreichte eine 19%ige Zunahme bei Besuchern, 35% mehr Sitzungen insgesamt, 7% mehr neue Benutzer, 17% mehr aktive Benutzer und 16% mehr Sitzungen pro Benutzer.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Pinterest-Seiten für Performance neu zu gestalten führte zu einer 40%igen Verringerung der Wartezeit, einem 15%igen Anstieg des SEO-Verkehrs und einer 15%igen Erhöhung der Konversionsrate zur Anmeldung.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten; um Besucher zu gewinnen und zu halten, müssen Sie eine zugängliche Seite erstellen, die eine gute Benutzererfahrung bietet. Der Bau von Websites erfordert HTML, CSS und JavaScript, einschließlich binärer Dateitypen wie Bilder und Videos. Die Entscheidungen, die Sie treffen und die Werkzeuge, die Sie wählen, während Sie Ihre Seite erstellen, können die Performance des fertigen Werks erheblich beeinflussen.

Gute Leistung ist ein Vorteil. Schlechte Leistung ist eine Belastung. Die Geschwindigkeit einer Seite wirkt sich direkt auf Absprungraten, Konversion, Umsatz, Benutzerzufriedenheit und Suchmaschinen-Ranking aus. Leistungsstarke Seiten haben gezeigt, dass sie die Besucherbindung und Benutzerzufriedenheit erhöhen. Langsamer Inhalt führt dazu, dass Benutzer die Seite verlassen, wobei einige nie zurückkehren. Die Reduzierung der Datenmenge, die zwischen Client und Server übertragen wird, senkt die Kosten für alle Beteiligten. Die Reduzierung von HTML/CSS/JavaScript und Mediendateigrößen verkürzt sowohl die Ladezeit als auch den Energieverbrauch einer Website (siehe [Performance-Budgets](/de/docs/Web/Performance/Performance_budgets)).

Die Überwachung der Leistung ist wichtig. Mehrere Faktoren, einschließlich der Netzwerkgeschwindigkeit und der Geräteleistung, beeinflussen die Leistung. Es gibt keine einzelne Leistungsmetrik; und unterschiedliche Geschäftsziele können bedeuten, dass verschiedene Metriken relevanter für die Ziele der Website oder der unterstützenden Organisation sind. Wie die Leistung Ihrer Seite wahrgenommen wird, ist Benutzererlebnis!

## Fazit

Web-Performance ist wichtig für die Zugänglichkeit und auch für andere Website-Metriken, die den Zielen einer Organisation oder eines Unternehmens dienen. Gute oder schlechte Website-Performance korreliert stark mit der Benutzererfahrung sowie der Gesamteffektivität der meisten Websites. Deshalb sollten Sie sich um die Web-Performance kümmern.

{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}
