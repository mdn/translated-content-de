---
title: Der "Warum" der Web-Performance
slug: Learn_web_development/Extensions/Performance/why_web_performance
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{LearnSidebar}}{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Tatsache, langsame Prozesse schnell _erscheinen_ zu lassen. Dieser Artikel bietet eine Einführung, warum Web-Performance für Website-Besucher und für Ihre Geschäftsziele wichtig ist.

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
          >clientseitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegendes Verständnis darüber zu erlangen, warum Web-Performance für eine gute Nutzererfahrung wichtig ist.
      </td>
    </tr>
  </tbody>
</table>

Web-Performance bezieht sich darauf, wie schnell Website-Inhalte in einem Webbrowser **geladen** und **gerendert** werden und wie gut sie auf Benutzerinteraktionen reagieren. Schlecht performende Websites sind langsam im Anzeigen und langsam im Reagieren auf Eingaben. Schlecht performende Websites erhöhen die Abbruchrate. Im schlimmsten Fall führt schlechte Performance dazu, dass Inhalte völlig unzugänglich sind. Ein gutes Ziel für die Web-Performance ist es, dass Benutzer die Performance nicht bemerken. Während die individuelle Wahrnehmung der Website-Performance subjektiv ist, können Laden und Rendern gemessen werden. Gute Performance mag den meisten Website-Besuchern nicht offensichtlich sein, aber die meisten werden sofort eine träge Website erkennen. Deshalb ist es uns wichtig.

## Warum ist Performance wichtig?

Web-Performance — und die damit verbundenen Best Practices — sind entscheidend dafür, dass Ihre Website-Besucher eine gute Erfahrung machen. In gewissem Sinne kann Web-Performance als ein Teilbereich der [Web-Accessibility](/de/docs/Learn_web_development/Core/Accessibility) betrachtet werden. Sowohl bei der Performance als auch bei der Barrierefreiheit berücksichtigen Sie, welches Gerät ein Website-Besucher verwendet, um auf die Seite zuzugreifen, und die Verbindungsgeschwindigkeit des Geräts.

Betrachten Sie als Beispiel das Ladeerlebnis von CNN.com, das zum Zeitpunkt dieses Textes über 400 HTTP-Anfragen mit einer Dateigröße von über 22,6 MB hatte.

- Stellen Sie sich vor, dies auf einem Desktop-Computer zu laden, der an ein Glasfaser-Netzwerk angeschlossen ist. Dies würde relativ schnell erscheinen, und die Dateigröße wäre weitgehend irrelevant.
- Stellen Sie sich vor, dieselbe Website mit mobilen Daten über ein neun Jahre altes iPad beim Pendeln mit öffentlichen Verkehrsmitteln zu laden. Dieselbe Website wird langsam geladen, möglicherweise an der Grenze zur Unbenutzbarkeit, abhängig von der Netzabdeckung. Sie könnten aufgeben, bevor sie fertig geladen ist.
- Stellen Sie sich vor, dieselbe Website auf einem kostengünstigen Gerät in einem Gebiet mit begrenzter Abdeckung zu laden. Die Website wird sehr langsam laden—wenn sie überhaupt geladen wird—, blockierende Skripte könnten möglicherweise einen Timeout verursachen, und negative CPU-Auswirkungen könnten möglicherweise Browser-Abstürze verursachen, falls sie doch geladen wird.

Eine 22,6 MB große Website könnte auf einem 3G-Netzwerk bis zu 83 Sekunden zum Laden benötigen, mit [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) (das bedeutet die Basis-HTML-Struktur der Seite) bei 31,86 Sekunden.

Und es ist nicht nur die Zeit, die für das Herunterladen benötigt wird, die ein großes Problem darstellt. In einigen Regionen werden Internetverbindungen pro Megabyte berechnet, was große Downloads verbotenerweise teuer macht. Unsere Beispiel-22,6-MB-CNN.com-Erfahrung würde einen erheblichen Teil des täglichen Datenvolumens eines mobilen Nutzers kosten oder sogar hohe Gebühren in bestimmten internationalen Roaming-Plänen verursachen. (Siehe [was Ihr Website-Download kostet](https://whatdoesmysitecost.com/).)

### Conversion-Raten verbessern

Die Reduzierung der Download- und Renderzeiten einer Website verbessert die Conversion-Raten und die Benutzerbindung.

Eine **Conversion-Rate** ist die Rate, mit der Besucher der Website eine gemessene oder gewünschte Aktion durchführen. Beispielsweise könnte dies ein Kauf sein, das Lesen eines Artikels oder das Abonnieren eines Newsletters. Die Aktion, die als Conversion-Rate gemessen wird, hängt von den Geschäftsziele der Website ab.

Performance beeinflusst die Conversion; die Verbesserung der Web-Performance verbessert die Conversion. Website-Besucher erwarten, dass eine Seite in zwei Sekunden oder weniger geladen wird; manchmal sogar noch weniger auf mobilen Geräten (wo es generell länger dauert). Diese Website-Besucher beginnen, langsame Seiten schon nach 3 Sekunden zu verlassen.

Die Geschwindigkeit, mit der eine Seite geladen wird, ist ein Faktor. Wenn die Seite langsam auf Benutzerinteraktionen reagiert oder ruckelig erscheint, führt dies dazu, dass Besucher das Interesse und Vertrauen verlieren.

Hier sind einige reale Beispiele für Performance-Verbesserungen:

- [Tokopedia reduzierte die Renderzeit von 14s auf 2s für 3G-Verbindungen und verzeichnete einen 19%igen Anstieg der Besucher, einen 35%igen Anstieg der gesamten Sitzungen, einen 7%igen Anstieg neuer Benutzer, einen 17%igen Anstieg aktiver Benutzer und einen 16%igen Anstieg der Sitzungen pro Benutzer.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [Der Neuaufbau von Pinterest-Seiten für die Performance führte zu einer 40%igen Reduzierung der Wartezeiten, einem 15%igen Anstieg des SEO-Traffics und einem 15%igen Anstieg der Conversion-Rate zu Anmeldungen.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten; um Besucher anzuziehen und zu binden, müssen Sie eine zugängliche Website erstellen, die eine gute Benutzererfahrung bietet. Der Bau von Websites erfordert HTML, CSS und JavaScript, typischerweise einschließlich binärer Dateitypen wie Bilder und Video. Die Entscheidungen, die Sie während des Erstellens Ihrer Website treffen, und die Werkzeuge, die Sie wählen, können die Performance des fertigen Projekts erheblich beeinflussen.

Gute Performance ist ein Vorteil. Schlechte Performance ist eine Belastung. Die Geschwindigkeit einer Website beeinflusst direkt Absprungraten, Conversion, Umsatz, Benutzerzufriedenheit und das Ranking in Suchmaschinen. Performante Websites haben gezeigt, dass sie die Besucherbindung und Benutzerzufriedenheit erhöhen. Langsamer Inhalt führt nachweislich zu Abbrüchen von Websites, wobei einige Besucher die Seite verlassen und niemals zurückkehren. Eine Reduzierung der Datenmenge, die zwischen Client und Server übertragen wird, senkt die Kosten für alle Beteiligten. Die Reduzierung der HTML/CSS/JavaScript- und Mediendateigrößen reduziert sowohl die Ladezeiten als auch den Energieverbrauch einer Website (siehe [Performance-Budgets](/de/docs/Web/Performance/Guides/Performance_budgets)).

Das Verfolgen der Performance ist wichtig. Mehrere Faktoren, einschließlich Netzwerkgeschwindigkeit und Geräteleistungen, beeinflussen die Performance. Es gibt keine einzelne Performance-Metrik; und unterschiedliche Geschäftsziele können bedeuten, dass unterschiedliche Metriken relevanter für die Ziele der Website oder der unterstützenden Organisation sind. Wie die Leistung Ihrer Website wahrgenommen wird, ist Nutzererfahrung!

## Fazit

Web-Performance ist wichtig für die Barrierefreiheit, sowie für andere Website-Metriken, die die Ziele einer Organisation oder eines Unternehmens unterstützen. Gute oder schlechte Website-Performance korreliert stark mit der Nutzererfahrung sowie der Gesamteffektivität der meisten Websites. Deshalb sollten Sie sich um die Web-Performance kümmern.

{{NextMenu("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance")}}
