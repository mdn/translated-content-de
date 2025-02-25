---
title: Was ist Web-Performance?
slug: Learn_web_development/Extensions/Performance/What_is_web_performance
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Beschleunigung langsamer Prozesse _scheinbar_ schnell erscheinen zu lassen. Lädt die Seite schnell, ermöglicht es dem Benutzer, schnell mit ihr zu interagieren, und bietet beruhigendes Feedback, wenn etwas länger zum Laden braucht (z. B. ein Ladespinner)? Sind das Scrollen und die Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in die objektive, messbare Web-Performance\*, und betrachtet, welche Technologien, Techniken und Werkzeuge bei der Web-Optimierung eingesetzt werden.

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
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegende Vertrautheit mit dem Thema Web-Performance zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

_\* gegenüber subjektiver, [wahrgenommener Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance), die im nächsten Artikel behandelt wird_

## Was ist Web-Performance?

Web-Performance ist die objektive Messung und wahrgenommene Benutzererfahrung einer Website oder Anwendung. Dazu gehören folgende Hauptbereiche:

- **Reduzierung der gesamten Ladezeit**: Wie lange dauert es, bis die zum Rendern der Website erforderlichen Dateien auf den Computer des Benutzers heruntergeladen werden? Dies wird tendenziell durch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency), die Größe Ihrer Dateien, die Anzahl der Dateien und andere Faktoren beeinflusst. Eine allgemeine Strategie besteht darin, Ihre Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Lademethoden zu verwenden (wie z. B. [preload](/de/docs/Web/HTML/Attributes/rel/preload)), um Dateien früher verfügbar zu machen.
- **Die Website so schnell wie möglich nutzbar machen**: Dies bedeutet im Wesentlichen, Ihre Website-Ressourcen in einer sinnvollen Reihenfolge zu laden, damit der Benutzer sie schnell nutzen kann. Andere Ressourcen können währenddessen im Hintergrund weitergeladen werden, während der Benutzer mit den Hauptaufgaben fortfährt, und manchmal laden wir Ressourcen erst, wenn sie tatsächlich benötigt werden (dies wird als [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) bezeichnet). Die Messung, wie lange es dauert, bis die Seite nach Beginn des Ladevorgangs nutzbar wird, nennt man {{Glossary("Time_to_interactive", "Time to Interactive")}}.
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung zuverlässig und angenehm zu bedienen an? Ist das Scrollen flüssig? Sind Schaltflächen anklickbar? Öffnen sich Pop-ups schnell und animieren sie sanft? Es gibt viele Best Practices, um Apps flüssig erscheinen zu lassen, zum Beispiel die Verwendung von CSS-Animationen anstelle von JavaScript für Animationen und die Minimierung der Anzahl der Neuzeichnungen, die die Benutzeroberfläche aufgrund von Änderungen im DOM erfordert.
- **[Wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)**: Wie schnell eine Website dem Benutzer erscheint, hat einen größeren Einfluss auf die Benutzererfahrung als die tatsächliche Geschwindigkeit der Website. Die Leistung aus Benutzersicht zu wahrnehmen, ist ebenso wichtig, oder sogar wichtiger, als jede objektive Statistik. Wahrgenommene Performance ist die Benutzerperspektive, keine Metrik. Selbst wenn ein Vorgang lange dauern wird (wegen Latenz oder ähnlichem), kann es möglich sein, den Benutzer beschäftigt zu halten, während er wartet, indem ein Ladespinner oder eine Serie nützlicher Hinweise und Tipps (oder Witze, oder was auch immer geeignet erscheint) angezeigt werden. Eine solche Herangehensweise ist viel besser als einfach nichts zu zeigen, was das Gefühl erhöhen würde, dass es länger dauert und möglicherweise dazu führt, dass der Benutzer denkt, es sei defekt und aufgibt.
- **[Performance-Messungen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)**: Web-Performance beinhaltet die Messung der tatsächlichen und wahrgenommenen Geschwindigkeiten einer Anwendung, die Optimierung, wo möglich, und dann die Überwachung der Performance, um sicherzustellen, dass das, was optimiert wurde, optimiert bleibt. Dies beinhaltet eine Reihe von Metriken (messbare Indikatoren, die Erfolg oder Misserfolg anzeigen können) und Werkzeuge zur Messung dieser Metriken, die wir in diesem Modul besprechen werden.

Zusammenfassend lassen sich viele Merkmale auf die Performance auswirken, einschließlich der Latenz, der Anwendungsgeschwindigkeit, der Anzahl der DOM-Knoten, der Anzahl der gestellten Ressourcenanfragen, der JavaScript-Performance, der CPU-Auslastung und mehr. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verdecken, indem das Erlebnis so schnell wie möglich verfügbar und interaktiv gemacht wird, während die längeren Teile des Erlebnisses asynchron geladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Frames pro Sekunde und {{Glossary("Time_to_interactive", "Time to Interactive")}} als auch subjektive Erfahrungen, wie lange es sich für den Benutzer angefühlt hat, dass der Inhalt zum Laden benötigt hat.

## Wie Inhalte gerendert werden

Um die Web-Performance, die Probleme dahinter und die oben erwähnten Hauptthemen effektiv zu verstehen, sollten Sie einige Details darüber wissen, wie Browser funktionieren. Dazu gehören:

- **Wie der Browser funktioniert**. Wenn Sie eine URL anfordern und die Eingabetaste <kbd>Enter</kbd> / <kbd>Return</kbd> drücken, findet der Browser heraus, wo sich der Server befindet, der die Dateien der Website enthält, baut eine Verbindung zu ihm auf und fordert die Dateien an. Siehe [Die Seite ausfüllen: wie der Browser funktioniert](/de/docs/Web/Performance/Guides/How_browsers_work) für eine ausführliche Übersicht.
- **Quellreihenfolge**. Die Quellreihenfolge Ihrer HTML-Indexdatei kann die Performance erheblich beeinflussen. Der Download zusätzlicher, aus der Indexdatei verlinkter Assets erfolgt im Allgemeinen sequenziell, basierend auf der Quellreihenfolge, dies kann jedoch manipuliert und optimiert werden, wobei zu beachten ist, dass einige Ressourcen zusätzliche Downloads blockieren, bis ihr Inhalt analysiert und ausgeführt wurde.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser verwendet, um das Webdokument zu erstellen, nachdem die Dateien vom Server heruntergeladen wurden. Der Browser folgt einem klar definierten Satz von Schritten, und die Optimierung des kritischen Renderingpfads zur Priorisierung der Anzeige von Inhalten, die sich auf die aktuelle Benutzeraktion beziehen, führt zu erheblichen Verbesserungen der Inhaltsrenderezeit. Siehe [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path) für weitere Informationen.
- Das **Document Object Model**. Das Document Object Model oder DOM ist eine Baumstruktur, die die Inhalte und Elemente Ihres HTML als Baum von Knoten darstellt. Dies schließt alle HTML-Attribute und die Beziehungen zwischen den Knoten ein. Umfangreiche DOM-Manipulationen nach dem Laden der Seiten (z. B. Hinzufügen, Löschen oder Verschieben von Knoten) können die Performance beeinträchtigen. Es lohnt sich also, zu verstehen, wie das DOM funktioniert und wie solche Probleme gemindert werden können. Erfahren Sie mehr im [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir erwähnten dies kurz zuvor, aber kurz gesagt, ist Latenz die Zeit, die Ihre Website-Ressourcen brauchen, um vom Server zum Computer eines Benutzers zu reisen. Es gibt einen Overhead beim Aufbau von TCP- und HTTP-Verbindungen und eine unvermeidbare Latenz beim Hin- und Herübertragen der Anfrage- und Antwortbytes über das Netzwerk. Es gibt jedoch bestimmte Möglichkeiten, die Latenz zu reduzieren (z. B. die Anzahl der HTTP-Anfragen reduzieren, indem weniger Dateien heruntergeladen werden, ein {{Glossary("CDN", "CDN")}} verwenden, um die Leistung Ihrer Website weltweit zu verbessern, und HTTP/2 verwenden, um Dateien effizienter vom Server bereitzustellen). Sie können alles über dieses Thema unter [Verständnis der Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) lesen.

## Fazit

Das war's fürs Erste; wir hoffen, dass unsere kurze Übersicht über das Thema Web-Performance Ihnen geholfen hat, eine Vorstellung davon zu bekommen, worum es dabei geht, und Sie dazu angeregt hat, mehr zu lernen. Als nächstes werden wir uns mit der wahrgenommenen Performance befassen und schauen, wie Sie einige clevere Techniken verwenden können, um unweigerliche Performance-Einbußen für den Benutzer weniger schwerwiegend erscheinen zu lassen oder sie gar vollständig zu kaschieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}
