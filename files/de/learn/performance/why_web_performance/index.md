---
title: Der 'Warum' der Web-Performance
slug: Learn/Performance/why_web_performance
l10n:
  sourceCommit: 95b616378ae463831754e5c16f2018c77d3f56e3
---

{{LearnSidebar}}{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Beschleunigung langsamer Prozesse, sodass sie _schnell erscheinen_. Dieser Artikel bietet eine Einführung dazu, warum Web-Performance für Webseitenbesucher und Ihre Unternehmensziele wichtig ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >client-seitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegendes Verständnis dafür zu erlangen, warum Web-Performance für eine gute
        Benutzererfahrung wichtig ist.
      </td>
    </tr>
  </tbody>
</table>

Web-Performance bezieht sich darauf, wie schnell der Inhalt einer Website im Webbrowser **geladen** und **gerendert** wird und wie gut sie auf Benutzereingaben reagiert. Schlecht performende Seiten zeigen sich langsam an und reagieren langsam auf Eingaben. Schlecht performende Seiten erhöhen die Abkehr von der Seite. Im schlimmsten Fall führt eine schlechte Performance dazu, dass Inhalte völlig unzugänglich sind. Ein gutes Ziel für die Web-Performance ist es, dass Benutzer die Performance nicht bemerken. Während die Wahrnehmung der Seitenperformance bei Individuen subjektiv ist, können Laden und Rendern gemessen werden. Gute Performance mag den meisten Seitenbesuchern nicht offensichtlich sein, aber die meisten werden sofort eine träge Seite erkennen. Das ist der Grund, warum wir darauf achten.

## Warum sich um Performance kümmern?

Web-Performance – und die dazugehörigen Best Practices – sind entscheidend dafür, dass Ihre Webseitenbesucher eine gute Erfahrung haben. In gewisser Weise kann Web-Performance als Teilmenge von [Web-Accessibility](/de/docs/Learn/Accessibility) betrachtet werden. Sowohl bei der Performance als auch bei der Accessibility berücksichtigen Sie, welches Gerät ein Seitenbesucher verwendet, um auf die Seite zuzugreifen, und die Verbindungsgeschwindigkeit des Geräts.

Ein Beispiel: Betrachten Sie die Ladeerfahrung von CNN.com, das zum Zeitpunkt der Erstellung dieses Artikels über 400 HTTP-Anfragen mit einer Dateigröße von über 22,6 MB hatte.

- Stellen Sie sich vor, Sie laden dies auf einem Desktop-Computer, der mit einem Glasfasernetzwerk verbunden ist. Dies würde relativ schnell erscheinen und die Dateigröße wäre weitgehend irrelevant.
- Stellen Sie sich vor, Sie laden dieselbe Seite mit mobilen Daten auf einem neun Jahre alten iPad während der Heimfahrt in öffentlichen Verkehrsmitteln. Dieselbe Seite wird langsam geladen, möglicherweise nahe der Unbenutzbarkeit, abhängig von der Mobilfunkabdeckung. Sie könnten aufgeben, bevor es fertig geladen hat.
- Stellen Sie sich vor, Sie laden dieselbe Seite auf einem kostengünstigen Gerät in einem Gebiet mit eingeschränkter Netzabdeckung. Die Seite wird sehr langsam geladen - falls sie überhaupt lädt - mit blockierenden Skripten, die möglicherweise zeitlich überschreiten, und negativer CPU-Auswirkung, die im Falle des Ladens Browser-Abstürze verursachen könnte.

Eine 22,6 MB große Seite könnte bis zu 83 Sekunden auf einem 3G-Netzwerk zum Laden benötigen, mit `DOMContentLoaded` (was die grundlegende HTML-Struktur der Seite bedeutet) bei 31,86 Sekunden.

Und es ist nicht nur die benötigte Zeit zum Herunterladen, die ein großes Problem darstellt. In manchen Regionen werden Internetverbindungen pro Megabyte berechnet, was große Downloads unerschwinglich macht. Unser Beispiel von CNN.com mit 22,6 MB würde einen wesentlichen Teil des täglichen Datenvolumens eines Mobildaten-Nutzers kosten oder sogar hohe Gebühren in bestimmten internationalen Roaming-Tarifen verursachen. (Siehe [wie viel das Herunterladen Ihrer Seite kostet](https://whatdoesmysitecost.com/).)

### Verbesserte Konversionsraten

Die Reduzierung der Download- und Renderzeit einer Seite verbessert die Konversionsraten und die Benutzerbindung.

Eine **Konversionsrate** ist die Rate, mit der Seitenbesucher eine gemessene oder gewünschte Aktion ausführen. Zum Beispiel könnte dies ein Kauf sein, das Lesen eines Artikels oder das Abonnieren eines Newsletters. Die gemessene Aktion als Konversionsrate hängt von den geschäftlichen Zielen der Website ab.

Performance beeinflusst die Konversion; die Verbesserung der Web-Performance verbessert die Konversion. Seitenbesucher erwarten, dass eine Seite in zwei Sekunden oder weniger lädt; manchmal sogar weniger auf mobilen Geräten (wo es in der Regel länger dauert). Dieselben Seitenbesucher beginnen, langsame Seiten nach 3 Sekunden zu verlassen.

Die Geschwindigkeit, mit der eine Seite lädt, ist ein Faktor. Wenn die Seite langsam auf Benutzereingaben reagiert oder holprig erscheint, verlieren die Seitenbesucher das Interesse und Vertrauen.

Hier sind einige Praxisbeispiele für Performance-Verbesserungen:

- [Tokopedia reduzierte die Renderzeit von 14s auf 2s für 3G-Verbindungen und verzeichnete einen 19% Anstieg der Besucherzahlen, einen 35% Anstieg der gesamten Sitzungen, einen 7% Anstieg neuer Nutzer, einen 17% Anstieg aktiver Nutzer und einen 16% Anstieg der Sitzungen pro Nutzer.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Der Neuaufbau der Pinterest-Seiten für Performance führte zu einer 40% Verringerung der Wartezeit, einem 15% Anstieg des SEO-Traffics und einem 15% Anstieg der Konversionsrate zur Anmeldung.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Um Websites und Anwendungen zu bauen, die Menschen nutzen möchten, um Besucher anzuziehen und zu halten, müssen Sie eine zugängliche Seite erstellen, die eine gute Benutzererfahrung bietet. Der Bau von Websites erfordert HTML, CSS und JavaScript, typischerweise einschließlich binärer Dateitypen wie Bilder und Video. Die Entscheidungen, die Sie während des Aufbaus Ihrer Seite treffen, und die Werkzeuge, die Sie wählen, können die Leistung des fertigen Werks erheblich beeinflussen.

Gute Performance ist ein Vorteil. Schlechte Performance ist eine Belastung. Die Geschwindigkeit der Seite beeinflusst direkt die Absprungraten, die Konversion, den Umsatz, die Benutzerzufriedenheit und das Ranking in Suchmaschinen. Leistungsfähige Seiten haben gezeigt, dass sie die Besucherbindung und die Benutzerzufriedenheit steigern. Langsame Inhalte haben gezeigt, dass sie zu Seitenverlassen führen, wobei einige Besucher nie zurückkommen. Die Reduzierung der Datenmenge, die zwischen Client und Server ausgetauscht wird, senkt die Kosten für alle Beteiligten. Die Reduzierung der Größen von HTML/CSS/JavaScript und Mediendateien reduziert sowohl die Ladezeit als auch den Stromverbrauch einer Seite (siehe [Performance-Budgets](/de/docs/Web/Performance/Performance_budgets)).

Es ist wichtig, die Leistung zu verfolgen. Mehrere Faktoren, einschließlich der Netzwerkgeschwindigkeit und der Gerätefähigkeiten, beeinflussen die Leistung. Es gibt keine einzige Leistungskennzahl; und unterschiedliche geschäftliche Ziele können bedeuten, dass verschiedene Metriken relevanter für die Ziele der Seite oder der Organisation sind, die sie unterstützt. Wie die Leistung Ihrer Seite wahrgenommen wird, ist Benutzererfahrung!

## Fazit

Web-Performance ist wichtig für die Zugänglichkeit und auch für andere Website-Metriken, die den Zielen einer Organisation oder eines Unternehmens dienen. Gute oder schlechte Website-Performance korreliert stark mit der Benutzerfreundlichkeit sowie der Gesamteffektivität der meisten Seiten. Dies ist der Grund, warum Sie sich um Web-Performance kümmern sollten.

{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}
