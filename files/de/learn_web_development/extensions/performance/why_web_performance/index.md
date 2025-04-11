---
title: Das "Warum" der Web-Performance
slug: Learn_web_development/Extensions/Performance/why_web_performance
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich langsame Prozesse _schnell_ erscheinen zu lassen. Dieser Artikel bietet eine Einführung darin, warum Web-Performance wichtig für Seitenbesucher und für Ihre Geschäftsziele ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundwissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein grundlegendes Verständnis dafür zu erlangen, warum Web-Performance
        für ein gutes Benutzererlebnis wichtig ist.
      </td>
    </tr>
  </tbody>
</table>

Web-Performance bezieht sich darauf, wie schnell Webseiten-Inhalte in einem Webbrowser **laden** und **gerendert** werden und wie gut sie auf Benutzerinteraktion reagieren. Schlecht performende Websites sind langsam beim Anzeigen und bei der Reaktion auf Eingaben. Schlecht performende Websites erhöhen den Seitenabbruch. Im schlimmsten Fall führt schlechte Performance dazu, dass Inhalte vollständig unzugänglich sind. Ein gutes Ziel für die Web-Performance ist, dass Nutzer die Performance nicht bemerken. Obwohl die Wahrnehmung der Seitenperformance subjektiv ist, können Laden und Rendern gemessen werden. Gute Performance mag den meisten Seitenbesuchern nicht auffallen, aber die meisten erkennen sofort eine träge Seite. Deshalb ist es wichtig.

## Warum ist Performance wichtig?

Web-Performance — und die damit verbundenen Best Practices — sind entscheidend, damit Ihre Webseitenbesucher ein gutes Erlebnis haben. In gewisser Hinsicht kann Web-Performance als Teilmenge der [Web-Accessibility](/de/docs/Learn_web_development/Core/Accessibility) betrachtet werden. Wie bei der Barrierefreiheit berücksichtigt man auch bei der Performance, welches Gerät ein Seitenbesucher nutzt, um auf die Seite zuzugreifen, und die Verbindungsgeschwindigkeit des Geräts.

Als Beispiel: Überlegen Sie sich das Ladeerlebnis von CNN.com, das zum Zeitpunkt des Schreibens über 400 HTTP-Anfragen mit einer Dateigröße von über 22,6 MB hatte.

- Stellen Sie sich vor, dies auf einem Desktop-Computer zu laden, der mit einem Glasfasernetzwerk verbunden ist. Dies würde relativ schnell wirken, und die Dateigröße wäre größtenteils irrelevant.
- Stellen Sie sich vor, dieselbe Seite mit mobil geteilten Daten auf einem neun Jahre alten iPad zu laden, während Sie mit öffentlichen Verkehrsmitteln nach Hause pendeln. Dieselbe Seite wäre langsam zu laden, möglicherweise unbenutzbar je nach Mobilfunkabdeckung. Sie könnten aufgeben, bevor es vollständig geladen ist.
- Stellen Sie sich vor, dieselbe Seite auf einem kostengünstigen Gerät in einem Gebiet mit eingeschränkter Abdeckung zu laden. Die Seite wird sehr langsam geladen—wenn sie überhaupt geladen wird—wobei blockierende Skripte möglicherweise Zeitlimits überschreiten und negative CPU-Auswirkungen potenziell zu Browserabstürzen führen könnten, wenn sie geladen wird.

Eine 22,6 MB große Seite könnte auf einem 3G-Netzwerk bis zu 83 Sekunden zum Laden benötigen, wobei [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) (was die Basis-HTML-Struktur der Seite bedeutet) bei 31,86 Sekunden liegt.

Und es ist nicht nur die Zeit, die für das Herunterladen benötigt wird, die ein großes Problem darstellt. In einigen Regionen werden Internetverbindungen pro Megabyte abgerechnet, was große Downloads unerschwinglich macht. Unser Beispielerlebnis mit 22,6 MB von CNN.com würde einen erheblichen Teil des täglichen Datenvolumens eines Mobilfunknutzers kosten oder sogar zu hohen Gebühren in bestimmten internationalen Roaming-Tarifen führen.

### Konversionsraten verbessern

Die Reduzierung der Download- und Renderzeit einer Seite verbessert die Konversionsraten und Benutzerbindung.

Eine **Konversionsrate** ist die Rate, mit der Seitenbesucher eine gemessene oder gewünschte Aktion ausführen. Zum Beispiel könnte dies ein Kauf sein, das Lesen eines Artikels oder das Abonnieren eines Newsletters. Die Aktion, die als Konversionsrate gemessen wird, hängt von den Geschäftszielen der Website ab.

Performance wirkt sich auf die Konversion aus; Verbesserung der Web-Performance verbessert die Konversion. Seitenbesucher erwarten, dass eine Seite in zwei Sekunden oder weniger lädt; manchmal sogar weniger auf Mobilgeräten (wo es in der Regel länger dauert). Diese gleichen Seitenbesucher beginnen, langsame Seiten nach 3 Sekunden zu verlassen.

Die Geschwindigkeit, mit der eine Seite lädt, ist ein Faktor. Wenn die Seite langsam auf Benutzerinteraktion reagiert oder ruckelig wirkt, verlieren die Seitenbesucher Interesse und Vertrauen.

Hier sind einige Beispiele aus der Praxis für Performance-Verbesserungen:

- [Tokopedia hat die Renderzeit von 14s auf 2s für 3G-Verbindungen reduziert und sah einen Anstieg der Besucher um 19%, eine Erhöhung der Gesamtsitzungen um 35%, einen Zuwachs von neuen Benutzern um 7%, eine Steigerung der aktiven Nutzer um 17% und 16% mehr Sitzungen pro Nutzer.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Der Neuaufbau der Pinterest-Seiten für Performance führte zu einer 40%igen Reduzierung der Wartezeit, einer 15%igen Erhöhung des SEO-Traffics und einer 15%igen Steigerung der Konversionsrate bei Anmeldungen.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten; um Seitenbesucher anzuziehen und zu halten, müssen Sie eine zugängliche Seite schaffen, die ein gutes Benutzererlebnis bietet. Der Bau von Websites erfordert HTML, CSS und JavaScript, typischerweise einschließlich binärer Dateitypen wie Bilder und Videos. Die Entscheidungen, die Sie treffen, und die Werkzeuge, die Sie wählen, während Sie Ihre Seite erstellen, können die Performance des fertigen Werks stark beeinflussen.

Gute Performance ist ein Vorteil. Schlechte Performance ist eine Belastung. Die Geschwindigkeit der Seite beeinflusst direkt Absprungraten, Konversion, Einnahmen, Benutzerzufriedenheit und das Ranking in Suchmaschinen. Leistungsstarke Seiten haben sich als vorteilhaft zur Erhöhung der Besucherbindung und Benutzerzufriedenheit erwiesen. Langsame Inhalte haben sich als Ursache für Seitenabbrüche herausgestellt, wobei einige Besucher die Seiten verlassen und nie zurückkehren. Die Reduzierung der Datenmenge, die zwischen Client und Server übertragen wird, senkt die Kosten für alle Beteiligten. Durch die Reduzierung von HTML/CSS/JavaScript und Mediendateigrößen wird sowohl die Ladezeit als auch der Stromverbrauch der Seite reduziert (siehe [Leistungsbudgets](/de/docs/Web/Performance/Guides/Performance_budgets)).

Die Verfolgung der Performance ist wichtig. Mehrere Faktoren, einschließlich Netzgeschwindigkeit und Gerätefähigkeiten, beeinflussen die Performance. Es gibt keine einzelne Performance-Metrik; und unterschiedliche Geschäftsziele können bedeuten, dass unterschiedliche Metriken relevanter für die Ziele der Seite oder der unterstützenden Organisation sind. Wie die Performance Ihrer Seite wahrgenommen wird, ist Benutzererfahrung!

## Fazit

Web-Performance ist wichtig für die Zugänglichkeit und auch für andere Website-Metriken, die den Zielen einer Organisation oder eines Unternehmens dienen. Gute oder schlechte Website-Performance korreliert stark mit der Benutzererfahrung sowie der Gesamtwirksamkeit der meisten Seiten. Aus diesem Grund sollten Sie sich für Web-Performance interessieren.

{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}
