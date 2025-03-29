---
title: Das "Warum" von Web-Performance
slug: Learn_web_development/Extensions/Performance/why_web_performance
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich langsamer Prozesse, die _schnell_ wirken sollen. Dieser Artikel bietet eine Einführung in die Bedeutung der Web-Performance für Seitenbesucher und für Ihre Geschäftsziele.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegendes Verständnis dafür zu erlangen, warum Web-Performance wichtig für eine gute Benutzererfahrung ist.
      </td>
    </tr>
  </tbody>
</table>

Web-Performance bezieht sich darauf, wie schnell Webseiteninhalte in einem Webbrowser **geladen** und **gerendert** werden und wie gut sie auf Benutzerinteraktionen reagieren. Schlecht performende Seiten sind langsam beim Anzeigen und langsam bei der Reaktion auf Eingaben. Schlecht performende Seiten erhöhen die Abbruchrate einer Seite. Im schlimmsten Fall führt schlechte Performance dazu, dass Inhalte vollständig unzugänglich sind. Ein gutes Ziel für die Web-Performance ist es, dass Benutzer die Performance nicht bemerken. Während die Wahrnehmung der Performance einer Seite subjektiv ist, können Laden und Rendern gemessen werden. Gute Performance mag den meisten Seitenbesuchern nicht offensichtlich sein, aber die meisten erkennen sofort eine träge Seite. Das ist der Grund, warum es uns wichtig ist.

## Warum auf Performance achten?

Web-Performance — und die damit verbundenen Best Practices — sind entscheidend dafür, dass Ihre Website-Besucher eine gute Erfahrung machen. In gewissem Sinne kann die Web-Performance als Teilbereich der [Web-Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) angesehen werden. Bei der Performance wie auch bei der Zugänglichkeit berücksichtigt man, welches Gerät ein Seitenbesucher verwendet, um auf die Seite zuzugreifen, und mit welcher Geschwindigkeit die Verbindung aufgebaut wird.

Als Beispiel betrachten wir das Ladeerlebnis von CNN.com, die zum Zeitpunkt des Schreibens über 400 HTTP-Anfragen mit einer Dateigröße von über 22,6 MB hatten.

- Stellen Sie sich vor, dies auf einem Desktop-Computer zu laden, der mit einem Glasfasernetzwerk verbunden ist. Dies würde relativ schnell erscheinen und die Dateigröße wäre weitgehend irrelevant.
- Stellen Sie sich vor, dieselbe Seite mit mobilen Daten auf einem neun Jahre alten iPad zu laden, während Sie mit öffentlichen Verkehrsmitteln nach Hause pendeln. Die gleiche Seite wird langsam laden, möglicherweise unbrauchbar werden, abhängig von der Netzabdeckung. Sie könnten aufgeben, bevor es fertig geladen ist.
- Stellen Sie sich vor, dieselbe Seite auf einem kostengünstigen Gerät in einem Gebiet mit eingeschränkter Abdeckung zu laden. Die Seite wird sehr langsam laden—wenn sie überhaupt lädt—mit blockierenden Skripten, die möglicherweise ablaufen, und nachteiligen Auswirkungen auf die CPU, die zu Browserabstürzen führen können, wenn sie lädt.

Eine 22,6 MB große Seite könnte bis zu 83 Sekunden benötigen, um in einem 3G-Netzwerk zu laden, mit [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) (was die Basis-HTML-Struktur der Seite bedeutet) in 31,86 Sekunden.

Und es ist nicht nur die Zeit, die zum Herunterladen benötigt wird, die ein großes Problem darstellt. In einigen Regionen werden Internetverbindungen pro Megabyte abgerechnet, wodurch große Downloads unerschwinglich teuer werden. Unser Beispielerlebnis mit 22,6 MB für CNN.com würde einen erheblichen Teil des Tageslimits eines mobilen Datennutzers kosten oder sogar zu hohen Gebühren in bestimmten internationalen Roaming-Plänen führen.

### Konversionsraten verbessern

Das Reduzieren der Download- und Renderzeit einer Seite verbessert die Konversionsraten und die Benutzerbindung.

Eine **Konversionsrate** ist die Rate, mit der Besucher einer Seite eine gemessene oder gewünschte Aktion ausführen. Beispielsweise könnte dies ein Kauf sein, das Lesen eines Artikels oder das Abonnieren eines Newsletters. Die Aktion, die als Konversionsrate gemessen wird, hängt von den Geschäftszielen der Website ab.

Performance beeinflusst die Konversion; die Verbesserung der Web-Performance verbessert die Konversion. Seitenbesucher erwarten, dass eine Seite in zwei Sekunden oder weniger lädt; manchmal sogar noch weniger auf mobilen Geräten (wo es in der Regel länger dauert). Dieselben Seitenbesucher beginnen bei 3 Sekunden langsame Seiten zu verlassen.

Die Geschwindigkeit, mit der eine Seite lädt, ist ein Faktor. Wenn die Seite langsam auf Benutzerinteraktionen reagiert oder ruckelig erscheint, verlieren Seitenbesucher das Interesse und das Vertrauen.

Hier sind einige Beispiele aus der Praxis für Leistungsverbesserungen:

- [Tokopedia reduzierte die Renderzeit von 14s auf 2s für 3G-Verbindungen und verzeichnete einen Anstieg der Besucherzahlen um 19%, einen Anstieg der Gesamtsitzungen um 35%, einen Anstieg neuer Nutzer um 7%, einen Anstieg aktiver Nutzer um 17% und einen Anstieg der Sitzungen pro Nutzer um 16%.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Der Neuaufbau von Pinterest-Seiten für Performance führte zu einer Verringerung der Wartezeit um 40%, einem Anstieg des SEO-Traffics um 15% und einer Erhöhung der Konversionsrate zur Anmeldung um 15%.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten, um Besucher anzuziehen und zu halten, müssen Sie eine zugängliche Seite erstellen, die eine gute Benutzererfahrung bietet. Der Bau von Websites erfordert HTML, CSS und JavaScript, typischerweise einschließlich binärer Dateitypen wie Bilder und Videos. Die Entscheidungen, die Sie treffen, und die Werkzeuge, die Sie beim Erstellen Ihrer Seite wählen, können die Leistung des fertigen Werks erheblich beeinflussen.

Gute Performance ist ein Vorteil. Schlechte Performance ist eine Belastung. Die Geschwindigkeit einer Seite hat direkte Auswirkungen auf Absprungraten, Konversion, Umsatz, Nutzerzufriedenheit und das Ranking in Suchmaschinen. Performante Seiten haben nachweislich die Besucherbindung und Nutzerzufriedenheit erhöht. Langsamer Inhalt hat gezeigt, dass es zu einem Abbruch der Seite führt, wobei einige Besucher nie zurückkehren. Die Reduzierung der Datenmenge, die zwischen dem Client und dem Server übermittelt wird, senkt die Kosten für alle Beteiligten. Die Reduzierung der HTML/CSS/JavaScript- und Mediendateigrößen verringert sowohl die Ladezeit als auch den Stromverbrauch einer Seite (siehe [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)).

Das Verfolgen der Performance ist wichtig. Mehrere Faktoren, einschließlich der Netzwerkkapazität und der Gerätfähigkeiten, beeinflussen die Performance. Es gibt keine einzige Leistungskennzahl; und unterschiedliche Geschäftsziele können bedeuten, dass verschiedene Metriken relevanter für die Ziele der Seite oder der unterstützenden Organisation sind. Wie die Performance Ihrer Seite wahrgenommen wird, ist die Benutzererfahrung!

## Fazit

Web-Performance ist wichtig für die Zugänglichkeit und auch für andere Website-Metriken, die die Ziele einer Organisation oder eines Unternehmens unterstützen. Gute oder schlechte Website-Performance korreliert stark mit der Benutzererfahrung sowie der Gesamteffektivität der meisten Seiten. Aus diesem Grund sollten Sie sich um die Web-Performance kümmern.

{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}
