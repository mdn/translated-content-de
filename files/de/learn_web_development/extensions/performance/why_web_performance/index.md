---
title: Das "Warum" der Web-Performance
slug: Learn_web_development/Extensions/Performance/why_web_performance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Möglichkeit, langsame Prozesse _schnell_ erscheinen zu lassen. Dieser Artikel bietet eine Einführung, warum Web-Performance sowohl für die Besucher Ihrer Website als auch für Ihre Unternehmensziele wichtig ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein grundlegendes Verständnis dafür zu erlangen, warum Web-Performance wichtig für eine gute Benutzererfahrung ist.
      </td>
    </tr>
  </tbody>
</table>

Web-Performance bezieht sich darauf, wie schnell Inhalte einer Website in einem Webbrowser **geladen** und **gerendert** werden und wie gut sie auf Benutzerinteraktionen reagieren. Schlecht performende Websites sind langsam beim Anzeigen und Reagieren auf Eingaben. Schlecht performende Websites erhöhen die Abbruchrate der Seite. Im schlimmsten Fall führt schlechte Performance dazu, dass Inhalte völlig unzugänglich sind. Ein gutes Ziel für Web-Performance ist es, dass Benutzer die Performance nicht wahrnehmen. Während die Wahrnehmung der Website-Performance subjektiv ist, können Laden und Rendern gemessen werden. Gute Performance mag den meisten Seitenbesuchern nicht auffallen, aber die meisten erkennen sofort eine träge Seite. Daher ist es uns wichtig.

## Warum ist Performance wichtig?

Web-Performance - und die damit verbundenen Best Practices - sind entscheidend, damit Ihre Website-Besucher eine gute Erfahrung machen. In gewisser Weise kann Web-Performance als Teilmenge der [Barrierefreiheit im Web](/de/docs/Learn_web_development/Core/Accessibility) betrachtet werden. Sowohl bei der Performance als auch bei der Barrierefreiheit berücksichtigen Sie, welches Gerät ein Seitenbesucher verwendet, um auf die Seite zuzugreifen, sowie die Verbindungsgeschwindigkeit des Geräts.

Betrachten Sie zum Beispiel die Ladeerfahrung von CNN.com, die zum Zeitpunkt dieses Schreibens über 400 HTTP-Anfragen und eine Dateigröße von über 22,6 MB hatte.

- Stellen Sie sich vor, diese Seite auf einem Desktop-Computer zu laden, der mit einem Glasfasernetz verbunden ist. Dies würde relativ schnell erscheinen, und die Dateigröße wäre weitgehend irrelevant.
- Stellen Sie sich vor, dieselbe Seite mit geteilten mobilen Daten auf einem neun Jahre alten iPad zu laden, während Sie mit öffentlichen Verkehrsmitteln nach Hause pendeln. Dieselbe Seite wird langsam geladen und könnte je nach Mobilfunkabdeckung unbrauchbar werden. Möglicherweise geben Sie auf, bevor das Laden abgeschlossen ist.
- Stellen Sie sich vor, dieselbe Seite auf einem kostengünstigen Gerät in einem Gebiet mit begrenzter Abdeckung zu laden. Die Seite wird sehr langsam laden - falls sie überhaupt lädt - mit der Möglichkeit, dass blockierende Skripte zeitlich begrenzt ausführen und negative CPU-Auswirkungen möglicherweise Browserabstürze verursachen, falls sie lädt.

Eine 22,6 MB große Seite könnte bis zu 83 Sekunden benötigen, um in einem 3G-Netzwerk zu laden, wobei [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) (was die Basis-HTML-Struktur der Seite bedeutet) bei 31,86 Sekunden liegt.

Und nicht nur die zum Herunterladen benötigte Zeit ist ein großes Problem. In einigen Regionen werden Internetverbindungen pro Megabyte abgerechnet, was große Downloads prohibitiverweise teuer macht. Unser Beispiel mit der 22,6 MB großen CNN.com-Erfahrung würde einen erheblichen Teil des täglichen Datenlimits eines mobilen Nutzers kosten oder sogar hohe Gebühren in bestimmten internationalen Roaming-Plänen verursachen. (Sehen Sie, [wie viel Ihr Site-Download kostet](https://whatdoesmysitecost.com/).)

### Konversionsraten verbessern

Das Reduzieren der Download- und Renderzeit einer Seite verbessert die Konversionsraten und die Benutzerbindung.

Eine **Konversionsrate** ist die Rate, mit der Seitenbesucher eine gemessene oder gewünschte Aktion ausführen. Beispielsweise könnte dies der Kauf eines Produkts, das Lesen eines Artikels oder das Abonnieren eines Newsletters sein. Die Aktion, die als Konversionsrate gemessen wird, hängt von den Geschäftszielen der Website ab.

Performance hat Einfluss auf die Konversion; die Verbesserung der Web-Performance verbessert die Konversion. Seitenbesucher erwarten, dass eine Seite in zwei Sekunden oder weniger lädt; manchmal sogar noch weniger auf mobilen Geräten (wo dies generell länger dauert). Diese gleichen Seitenbesucher beginnen bei 3 Sekunden, langsame Seiten zu verlassen.

Die Geschwindigkeit, mit der eine Seite lädt, ist ein Faktor. Wenn die Seite langsam auf Benutzerinteraktionen reagiert oder ruckelig erscheint, verlieren die Seitenbesucher das Interesse und Vertrauen.

Hier sind einige Beispiele aus der Praxis für Leistungsverbesserungen:

- [Tokopedia reduzierte die Renderzeit von 14s auf 2s für 3G-Verbindungen und verzeichnete einen Anstieg der Besucheranzahl um 19%, einen Anstieg der gesamten Sitzungen um 35%, einen Anstieg der neuen Nutzer um 7%, einen Anstieg der aktiven Nutzer um 17% und einen Anstieg der Sitzungen pro Nutzer um 16%.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Das erneute Aufbauen der Pinterest-Seiten zur Leistungssteigerung führte zu einer Verringerung der Wartezeit um 40%, einer Steigerung des SEO-Verkehrs um 15% und einem Anstieg der Konversionsrate zur Anmeldung um 15%.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten; um Besucher zu gewinnen und zu halten, müssen Sie eine zugängliche Seite schaffen, die eine gute Benutzererfahrung bietet. Websites werden mit HTML, CSS und JavaScript erstellt, typischerweise einschließlich binärer Dateitypen wie Bilder und Videos. Die Entscheidungen, die Sie treffen, und die Werkzeuge, die Sie bei der Erstellung Ihrer Website wählen, können einen großen Einfluss auf die Performance des fertigen Werks haben.

Gute Performance ist ein Vorteil. Schlechte Performance ist eine Belastung. Die Seitengeschwindigkeit beeinflusst direkt die Absprungraten, Konversion, Einnahmen, Benutzerzufriedenheit und Suchmaschinenranking. Leistungsfähige Websites haben gezeigt, dass sie die Besucherbindung und Benutzerzufriedenheit erhöhen. Langsame Inhalte haben gezeigt, dass sie zu Seitenabbruch führen, wobei einige Besucher die Website verlassen und nie mehr zurückkehren. Die Reduzierung der Datenmenge, die zwischen Client und Server ausgetauscht wird, senkt die Kosten für alle Beteiligten. Das Reduzieren von HTML/CSS/JavaScript und Mediadateigrößen reduziert sowohl die Ladezeit als auch den Stromverbrauch einer Seite (siehe [Leistungsbudgets](/de/docs/Web/Performance/Performance_budgets)).

Das Verfolgen der Performance ist wichtig. Mehrere Faktoren, einschließlich Netzgeschwindigkeit und Gerätefähigkeiten, beeinflussen die Performance. Es gibt keine einzige Performance-Metrik; und unterschiedliche Geschäftsziele können bedeuten, dass verschiedene Metriken für die Ziele der Website oder der unterstützenden Organisation relevanter sind. Wie die Performance Ihrer Seite wahrgenommen wird, ist Benutzererfahrung!

## Fazit

Web-Performance ist wichtig für die Barrierefreiheit und auch für andere Website-Kennzahlen, die den Zielen einer Organisation oder eines Unternehmens dienen. Gute oder schlechte Website-Performance korreliert stark mit der Benutzererfahrung sowie der Gesamteffektivität der meisten Websites. Deshalb sollten Sie sich um die Web-Performance kümmern.

{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}
