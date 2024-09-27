---
title: Das "Warum" der Web-Performance
slug: Learn/Performance/why_web_performance
l10n:
  sourceCommit: 95b616378ae463831754e5c16f2018c77d3f56e3
---

{{LearnSidebar}}{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Optimierung langsamer Prozesse, sodass sie _schnell erscheinen_. Dieser Artikel bietet eine Einführung, warum Web-Performance sowohl für die Besucher Ihrer Website als auch für Ihre geschäftlichen Ziele wichtig ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse in
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Grundlegende Vertrautheit darüber erlangen, warum Web-Performance für eine gute Benutzererfahrung wichtig ist.
      </td>
    </tr>
  </tbody>
</table>

Web-Performance bezieht sich darauf, wie schnell Website-Inhalte in einem Webbrowser **laden** und **gerendert** werden und wie gut sie auf Benutzerinteraktionen reagieren. Schlecht performende Websites sind langsam in der Darstellung und Reaktion auf Eingaben. Schlechte Performance erhöht die Abbruchrate der Seiten. Im schlimmsten Fall macht schlechte Performance Inhalte vollständig unzugänglich. Ein gutes Ziel für Web-Performance besteht darin, dass Benutzer die Leistung nicht bemerken. Während die Wahrnehmung der Performance einer Seite subjektiv ist, können Laden und Rendern gemessen werden. Gute Performance ist den meisten Website-Besuchern möglicherweise nicht offensichtlich, aber die meisten erkennen sofort eine träge Seite. Deshalb interessiert es uns.

## Warum ist Performance wichtig?

Web-Performance — und die damit verbundenen Best Practices—sind entscheidend dafür, dass Ihre Website-Besucher eine gute Erfahrung machen. In gewisser Hinsicht kann Web-Performance als Teilmenge der [Web-Accessibility](/de/docs/Learn/Accessibility) angesehen werden. Bei der Leistung wie bei der Accessibility berücksichtigen Sie, welches Gerät ein Website-Besucher zum Zugriff auf die Seite verwendet und wie schnell die Geräteverbindung ist.

Ein Beispiel: Betrachten Sie die Ladeerfahrung von CNN.com, das zum Zeitpunkt dieses Schreibens über 400 HTTP-Anfragen mit einer Dateigröße von über 22,6 MB hatte.

- Stellen Sie sich vor, dies auf einem Desktop-Computer zu laden, der mit einem Glasfaser-Netzwerk verbunden ist. Dies würde relativ schnell erscheinen und die Dateigröße wäre weitgehend irrelevant.
- Stellen Sie sich vor, dieselbe Seite mit mobilen Daten auf einem neun Jahre alten iPad beim Pendeln mit öffentlichen Verkehrsmitteln zu laden. Die Seite wird langsam geladen, möglicherweise unbenutzbar je nach Netzabdeckung. Sie könnten aufgeben, bevor die Seite vollständig geladen ist.
- Stellen Sie sich vor, dieselbe Seite auf einem kostengünstigen Gerät in einem Gebiet mit eingeschränkter Abdeckung zu laden. Die Seite wird sehr langsam laden—falls überhaupt—, blockierende Skripte könnten auslaufen und die CPU-Belastung kann potenziell Browser-Abstürze verursachen, falls sie lädt.

Eine 22,6 MB Seite könnte auf einem 3G-Netz bis zu 83 Sekunden zum Laden benötigen, wobei [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) (d.h. die Basis-HTML-Struktur der Seite) bei 31,86 Sekunden liegt.

Und es ist nicht nur die zum Herunterladen benötigte Zeit, die ein großes Problem darstellt. In einigen Regionen werden Internetverbindungen pro Megabyte abgerechnet, wodurch große Downloads prohibitiv teuer werden. Unser Beispiel mit den 22,6 MB CNN.com könnte einen signifikanten Teil des täglichen Datenlimits eines Mobilfunknutzers kosten oder sogar hohe Gebühren in bestimmten internationalen Roaming-Plänen verursachen. (Sehen Sie, [wie viel das Herunterladen Ihrer Seite kostet](https://whatdoesmysitecost.com/).)

### Konversionsraten verbessern

Die Verringerung der Download- und Renderzeit einer Seite verbessert die Konversionsraten und die Benutzerbindung.

Eine **Konversionsrate** ist die Rate, mit der Website-Besucher eine gemessene oder gewünschte Aktion durchführen. Dies könnte z.B. ein Kauf, das Lesen eines Artikels oder das Abonnieren eines Newsletters sein. Die zu messende Aktion als Konversionsrate hängt von den Geschäftszielen der Website ab.

Performance beeinflusst die Konversion; die Verbesserung der Web-Performance verbessert die Konversion. Website-Besucher erwarten, dass eine Seite in zwei Sekunden oder weniger lädt; manchmal sogar weniger auf dem Handy (wo es im Allgemeinen länger dauert). Dieselben Besucher beginnen langsame Websites nach 3 Sekunden zu verlassen.

Die Geschwindigkeit, mit der eine Seite lädt, ist ein Faktor. Wenn die Seite langsam auf Benutzerinteraktionen reagiert oder ruckelig erscheint, verlieren die Besucher Interesse und Vertrauen.

Hier sind einige Praxisbeispiele für Performance-Verbesserungen:

- [Tokopedia reduzierte die Renderzeit von 14s auf 2s für 3G-Verbindungen und verzeichnete einen Anstieg der Besucherzahlen um 19%, einen Anstieg der gesamten Sitzungen um 35%, einen Anstieg der neuen Benutzer um 7%, einen Anstieg der aktiven Benutzer um 17% und einen Anstieg der Sitzungen pro Benutzer um 16%.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Der Neuaufbau der Pinterest-Seiten für Performance führte zu einer 40%igen Verringerung der Wartezeit, einem 15%igen Anstieg des SEO-Traffics und einem 15%igen Anstieg der Konversionsrate zur Anmeldung.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten, um Besucher anzuziehen und zu halten, müssen Sie eine zugängliche Website erstellen, die eine gute Benutzererfahrung bietet. Der Bau von Websites erfordert HTML, CSS und JavaScript, typischerweise einschließlich binärer Dateitypen wie Bildern und Videos. Die Entscheidungen, die Sie treffen, und die Werkzeuge, die Sie wählen, während Sie Ihre Website erstellen, können die Performance des fertigen Werks erheblich beeinflussen.

Gute Performance ist ein Vermögenswert. Schlechte Performance ist eine Belastung. Die Geschwindigkeit einer Seite beeinflusst direkt Absprungraten, Konversion, Umsatz, Benutzerzufriedenheit und das Suchmaschinen-Ranking. Performante Seiten haben sich gezeigt, die Besucherbindung und Benutzerzufriedenheit zu erhöhen. Langsame Inhalte haben sich als Grund für den Seitenabbruch erwiesen, wobei einige Besucher nie zurückkehren. Die Verringerung der Datenmenge, die zwischen dem Client und dem Server übermittelt wird, senkt die Kosten für alle Beteiligten. Die Verringerung der HTML-/CSS-/JavaScript- und Mediendateigrößen reduziert sowohl die Ladezeit als auch den Energieverbrauch einer Website (siehe [Performance-Budgets](/de/docs/Web/Performance/Performance_budgets)).

Das Verfolgen der Performance ist wichtig. Mehrere Faktoren, einschließlich der Netzwerkgeschwindigkeit und der Gerätefähigkeiten, beeinflussen die Performance. Es gibt keine einzige Leistungskennzahl; unterschiedliche Geschäftsziele können bedeuten, dass unterschiedliche Metriken relevanter für die Ziele der Website oder der unterstützenden Organisation sind. Wie die Performance Ihrer Website wahrgenommen wird, ist Benutzererfahrung!

## Fazit

Web-Performance ist wichtig für die Barrierefreiheit und auch für andere Website-Metriken, die die Ziele einer Organisation oder eines Unternehmens unterstützen. Gute oder schlechte Website-Performance korreliert stark mit der Benutzererfahrung sowie der Gesamteffektivität der meisten Seiten. Deshalb sollten Sie sich um Web-Performance kümmern.

{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}
