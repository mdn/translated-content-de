---
title: Der "Warum" von Web-Performance
slug: Learn_web_development/Extensions/Performance/why_web_performance
l10n:
  sourceCommit: 87adaa5384b1015690f3435ce0ba64ac097764eb
---

{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich langsamer Prozesse, die _schnell_ erscheinen. Dieser Artikel gibt eine Einführung, warum Web-Performance für die Besucher Ihrer Website und für Ihre geschäftlichen Ziele wichtig ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse von
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein grundlegendes Verständnis dafür zu erlangen, warum Web-Performance für eine gute Benutzererfahrung wichtig ist.
      </td>
    </tr>
  </tbody>
</table>

Web-Performance bezieht sich darauf, wie schnell der Inhalt einer Website in einem Webbrowser **lädt** und **gerendert** wird und wie gut er auf Benutzerinteraktionen reagiert. Schlecht performende Seiten sind langsam beim Anzeigen und langsam bei der Eingabe-Reaktion. Schlecht performende Seiten erhöhen die Seitenabbruchrate. Im schlimmsten Fall führt schlechte Performance dazu, dass Inhalte völlig unzugänglich sind. Ein gutes Ziel für Web-Performance ist es, dass die Benutzer die Performance nicht bemerken. Während die Wahrnehmung der Website-Performance subjektiv ist, können Laden und Rendern gemessen werden. Gute Performance mag den meisten Website-Besuchern nicht auffallen, aber die meisten werden sofort eine langsame Seite erkennen. Deshalb kümmern wir uns darum.

## Warum liegt uns die Leistung am Herzen?

Web-Performance und die damit verbundenen Best Practices sind entscheidend für Ihre Website-Besucher, um eine gute Erfahrung zu haben. In gewisser Weise kann Web-Performance als Teilmenge der [Web-Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) betrachtet werden. Bei der Performance sowie bei der Zugänglichkeit berücksichtigen Sie, welches Gerät ein Website-Besucher verwendet, um auf die Website zuzugreifen, und die Geschwindigkeit der Geräteverbindung.

Ein Beispiel: Betrachten Sie die Ladeerfahrung von CNN.com, das zum Zeitpunkt des Schreibens über 400 HTTP-Anfragen mit einer Dateigröße von über 22,6 MB hatte.

- Stellen Sie sich vor, dies auf einem Desktop-Computer zu laden, der mit einem Glasfasernetzwerk verbunden ist. Dies würde relativ schnell erscheinen, und die Dateigröße wäre weitgehend irrelevant.
- Stellen Sie sich vor, dieselbe Seite mit einem getetherden mobilen Daten auf einem neun Jahre alten iPad beim Pendeln auf öffentlichen Verkehrsmitteln zu laden. Die gleiche Seite wird langsam laden, möglicherweise an der Grenze zur Unbenutzbarkeit je nach Mobilfunkabdeckung. Sie könnten aufgeben, bevor es fertig geladen ist.
- Stellen Sie sich vor, dieselbe Seite auf einem kostengünstigen Gerät in einem Gebiet mit begrenzter Abdeckung zu laden. Die Website wird sehr langsam laden – wenn sie überhaupt lädt – wobei blockierende Skripte möglicherweise auslaufen und der nachteilige Einfluss auf die CPU potenziell zu Browser-Abstürzen führen kann, wenn sie lädt.

Eine Website mit 22,6 MB könnte bis zu 83 Sekunden auf einem 3G-Netzwerk zum Laden benötigen, wobei [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) (bedeutet die Basis-HTML-Struktur der Website) bei 31,86 Sekunden liegt.

Und es ist nicht nur die Zeit, die zum Herunterladen benötigt wird, das ein großes Problem darstellt. In einigen Regionen werden Internetverbindungen nach Megabyte abgerechnet, was große Downloads unerschwinglich teuer macht. Unser Beispielerlebnis auf CNN.com mit 22,6 MB würde einen erheblichen Teil des täglichen Datenvolumens eines mobilen Nutzers kosten oder sogar zu hohen Gebühren bei bestimmten internationalen Roaming-Tarifen führen.

### Conversion-Raten verbessern

Das Reduzieren der Download- und Renderzeit einer Website verbessert die Conversion-Raten und die Benutzerbindung.

Eine **Conversion-Rate** ist die Rate, mit der Website-Besucher eine gemessene oder gewünschte Aktion ausführen. Zum Beispiel könnte dies der Kauf eines Produkts, das Lesen eines Artikels oder das Abonnieren eines Newsletters sein. Die als Conversion-Rate gemessene Aktion hängt von den Geschäftszielen der Website ab.

Die Performance beeinflusst die Conversion; eine Verbesserung der Web-Performance verbessert die Conversion. Website-Besucher erwarten, dass eine Website in zwei Sekunden oder weniger geladen wird; manchmal sogar weniger auf mobilen Geräten (wo es generell länger dauert). Dieselben Website-Besucher beginnen, langsame Websites nach 3 Sekunden zu verlassen.

Die Geschwindigkeit, mit der eine Website lädt, ist ein Faktor. Wenn die Website langsam auf Benutzerinteraktionen reagiert oder sprunghaft erscheint, verliert dies das Interesse und das Vertrauen der Website-Besucher.

Hier sind einige Beispiele aus der Praxis für Leistungsverbesserungen:

- [Tokopedia reduzierte die Renderzeit von 14 s auf 2 s für 3G-Verbindungen und verzeichnete eine Steigerung von 19 % bei den Besuchern, 35 % bei den gesamten Sitzungen, 7 % bei den neuen Benutzern, 17 % bei den aktiven Nutzern und 16 % bei den Sitzungen pro Benutzer.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Der Neuaufbau von Pinterest-Seiten zur Verbesserung der Performance führte zu einer Reduktion der Wartezeit um 40 %, einem Anstieg des SEO-Verkehrs um 15 % und einer Steigerung der Conversion-Rate zur Anmeldung um 15 %.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten; um Website-Besucher anzuziehen und zu halten, müssen Sie eine zugängliche Website erstellen, die eine gute Benutzererfahrung bietet. Das Erstellen von Websites erfordert HTML, CSS und JavaScript, typischerweise inklusive binärer Dateitypen wie Bildern und Videos. Die Entscheidungen, die Sie treffen und die Werkzeuge, die Sie wählen, während Sie Ihre Website erstellen, können die Performance des fertigen Werks stark beeinflussen.

Gute Performance ist ein Vorteil. Schlechte Performance ist eine Belastung. Die Geschwindigkeit der Website beeinflusst direkt die Absprungraten, die Conversion, den Umsatz, die Benutzerzufriedenheit und das Ranking in Suchmaschinen. Es wurde gezeigt, dass performante Websites die Besucherbindung und die Benutzerzufriedenheit erhöhen. Langsame Inhalte haben gezeigt, dass sie zum Abbruch von Websites führen, wobei einige Besucher einmal gehen und nie wiederkommen. Die Reduzierung der Datenmenge, die zwischen dem Client und dem Server übertragen wird, senkt die Kosten für alle Parteien. Die Reduzierung der Größe von HTML/CSS/JavaScript und Mediendateien verringert sowohl die Ladezeit als auch den Stromverbrauch einer Website (siehe [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)).

Das Verfolgen der Performance ist wichtig. Mehrere Faktoren, einschließlich der Netzwerkgeschwindigkeit und der Gerätefähigkeiten beeinflussen die Performance. Es gibt keine einzelne Performance-Kennzahl; und unterschiedliche Geschäftsziele können bedeuten, dass verschiedene Kennzahlen für die Ziele der Website oder der Organisation, die sie unterstützt, relevanter sind. Wie die Leistung Ihrer Website wahrgenommen wird, ist Benutzererfahrung!

## Fazit

Web-Performance ist wichtig für die Zugänglichkeit und auch für andere Website-Metriken, die die Ziele einer Organisation oder eines Unternehmens unterstützen. Gute oder schlechte Website-Performance korreliert stark mit der Benutzererfahrung sowie der Gesamteffektivität der meisten Websites. Aus diesem Grund sollten Sie sich um die Web-Performance kümmern.

{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}
