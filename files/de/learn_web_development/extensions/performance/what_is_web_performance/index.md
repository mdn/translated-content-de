---
title: Was ist Web-Performance?
slug: Learn_web_development/Extensions/Performance/What_is_web_performance
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Fähigkeit, langsame Prozesse _schnell_ erscheinen zu lassen. Lädt die Website schnell, ermöglicht sie dem Benutzer, schnell mit ihr zu interagieren, und bietet sie beruhigendes Feedback, wenn etwas länger zum Laden braucht (z. B. ein Lade-Spinner)? Sind das Scrollen und Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in die objektive, messbare Web-Performance\*, und erläutert, welche Technologien, Techniken und Werkzeuge bei der Web-Optimierung eingesetzt werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegendes Verständnis darüber zu gewinnen, was zur Web-Performance gehört.
      </td>
    </tr>
  </tbody>
</table>

_\* im Gegensatz zur subjektiven [wahrgenommenen Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance), behandelt im nächsten Artikel_

## Was ist Web-Performance?

Web-Performance ist die objektive Messung und die wahrgenommene Nutzererfahrung einer Website oder Applikation. Dies umfasst folgende Hauptbereiche:

- **Reduzierung der gesamten Ladezeit**: Wie lange dauert es, bis die Dateien, die nötig sind, um die Website darzustellen, auf den Computer des Benutzers heruntergeladen werden? Dies wird typischerweise von der [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency), der Größe Ihrer Dateien, der Anzahl der Dateien und anderen Faktoren beeinflusst. Eine allgemeine Strategie besteht darin, die Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Ladeverfahren einzusetzen (wie z. B. [preload](/de/docs/Web/HTML/Reference/Attributes/rel/preload)), um die Dateien so schnell wie möglich verfügbar zu machen.
- **Schnellstmögliche Nutzbarkeit der Website**: Dies bedeutet im Wesentlichen, dass Sie die Website-Ressourcen in einer sinnvollen Reihenfolge laden, damit der Benutzer anfangen kann, diese wirklich schnell zu nutzen. Andere Ressourcen können im Hintergrund weiter laden, während der Benutzer mit primären Aufgaben beginnt, und manchmal laden wir Ressourcen nur, wenn sie tatsächlich benötigt werden (dies wird [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) genannt). Die Messung, wie lange es dauert, bis die Seite nach dem Beginn des Ladens in einen nutzbaren Zustand kommt, wird als {{Glossary("Time_to_interactive", "Time to interactive")}} bezeichnet.
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung verlässlich und angenehm zu nutzen an? Ist das Scrollen flüssig? Sind Buttons anklickbar? Öffnen sich Pop-ups schnell und animieren sie flüssig, während sie es tun? Es gibt viele Best Practices, die es zu beachten gilt, um Anwendungen flüssig wirken zu lassen, wie z. B. die Nutzung von CSS-Animationen anstelle von JavaScript für Animationen und die Minimierung der Anzahl von UI-Neuzeichnungen, die durch Änderungen im DOM erforderlich sind.
- **[Wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)**: Wie schnell eine Website vom Benutzer wahrgenommen wird, wirkt sich stärker auf die Benutzererfahrung aus als die tatsächliche Geschwindigkeit der Website. Wie der Benutzer Ihre Performance wahrnimmt, ist genauso wichtig oder vielleicht wichtiger als jede objektive Statistik, aber es ist subjektiv und nicht so leicht messbar. Wahrgenommene Performance ist die Benutzerperspektive, keine Metrik. Selbst wenn ein Vorgang lange dauern wird (aufgrund von Latenz oder ähnlichem), ist es möglich, den Benutzer während der Wartezeit mit einem Lade-Spinner oder einer Reihe nützlicher Tipps und Tricks (oder Witzen oder was auch immer Sie für angemessen halten) zu beschäftigen. Ein solcher Ansatz ist viel besser, als einfach nichts anzuzeigen, was das Gefühl verstärkt, dass es viel länger dauert, und möglicherweise dazu führt, dass Ihre Benutzer denken, es sei defekt und aufgeben.
- **[Performance-Messungen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)**: Web-Performance beinhaltet das Messen der tatsächlichen und wahrgenommenen Geschwindigkeiten einer Anwendung, deren Optimierung wenn möglich und dann das Überwachen der Performance, um sicherzustellen, dass das, was Sie optimiert haben, optimiert bleibt. Dies beinhaltet eine Reihe von Metriken (messbare Indikatoren, die auf Erfolg oder Misserfolg hinweisen können) und Werkzeuge, um diese Metriken zu messen, auf die wir in diesem Modul eingehen werden.

Zusammengefasst: Viele Faktoren beeinflussen die Performance, einschließlich Latenz, Anwendungsgröße, Anzahl der DOM-Knoten, Anzahl der Ressourcenzugriffe, JavaScript-Performance, CPU-Last und mehr. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während die länger dauernden Teile der Erfahrung asynchron geladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Bilder pro Sekunde und {{Glossary("Time_to_interactive", "Time to interactive")}} als auch subjektive Erfahrungen, wie lange es sich anfühlte, bis der Inhalt geladen war.

## Wie Inhalte gerendert werden

Um die Web-Performance effektiv zu verstehen, die zugrundeliegenden Probleme und die oben erwähnten Hauptthemenbereiche, sollten Sie einige spezifische Informationen darüber verstehen, wie Browser funktionieren. Dazu gehört:

- **Wie der Browser funktioniert**. Wenn Sie eine URL eingeben und <kbd>Enter</kbd> / <kbd>Return</kbd> drücken, findet der Browser heraus, wo der Server ist, der die Dateien der Website enthält, stellt eine Verbindung zu diesem her und fordert die Dateien an. Siehe [Seitenfüllung: Wie der Browser funktioniert](/de/docs/Web/Performance/Guides/How_browsers_work) für eine detaillierte Übersicht.
- **Quellcode-Reihenfolge**. Die Quellcode-Reihenfolge Ihrer HTML-Indexdatei kann die Performance erheblich beeinflussen. Der Download zusätzlicher Ressourcen, die von der Indexdatei verlinkt sind, erfolgt in der Regel sequentiell, basierend auf der Quellcode-Reihenfolge, kann aber manipuliert und sollte definitiv optimiert werden, da manche Ressourcen zusätzliche Downloads blockieren, bis ihr Inhalt analysiert und ausgeführt wurde.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser verwendet, um das Webdokument zu konstruieren, sobald die Dateien vom Server heruntergeladen wurden. Der Browser folgt einer festgelegten Reihe von Schritten, und die Optimierung des kritischen Rendering-Pfads, um die Anzeige von Inhalten zu priorisieren, die sich auf die aktuelle Benutzeraktion beziehen, führt zu erheblichen Verbesserungen der Rendering-Zeit von Inhalten. Siehe [Critical rendering path](/de/docs/Web/Performance/Guides/Critical_rendering_path) für weitere Informationen.
- Das **Document Object Model**. Das Document Object Model, oder DOM, ist eine Baumstruktur, die den Inhalt und die Elemente Ihres HTMLs als Baum von Knoten darstellt. Dies umfasst alle HTML-Attribute und die Beziehungen zwischen den Knoten. Umfangreiche DOM-Manipulationen, nachdem die Seite geladen ist (z. B. Hinzufügen, Löschen oder Verschieben von Knoten), können die Performance beeinflussen, deshalb lohnt es sich zu verstehen, wie das DOM funktioniert und wie solche Probleme gemindert werden können. Erfahren Sie mehr unter [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir erwähnen dies kurz zuvor, aber kurz gesagt ist die Latenz die Zeit, die es dauert, bis Ihre Website-Ressourcen vom Server zum Computer eines Benutzers gelangen. Es gibt einen Overhead bei der Einrichtung von TCP- und HTTP-Verbindungen und eine unvermeidliche Latenz bei der Übertragung der Anfrage- und Antwortbytes über das Netzwerk, aber es gibt bestimmte Möglichkeiten, die Latenz zu reduzieren (z. B. durch Reduzierung der Anzahl der HTTP-Anfragen durch das Herunterladen weniger Dateien, Verwendung eines {{Glossary("CDN", "CDN")}}, um Ihre Website weltweit leistungsfähiger zu machen, und Verwendung von HTTP/2, um Dateien effizienter vom Server aus bereitzustellen). Alles darüber können Sie im Thema [Understanding Latency](/de/docs/Web/Performance/Guides/Understanding_latency) nachlesen.

## Fazit

Das war's für jetzt; wir hoffen, dass unser kurzer Überblick über das Thema Web-Performance Ihnen geholfen hat, eine Vorstellung davon zu bekommen, worum es geht, und Sie dazu anregt, mehr darüber zu lernen. Als nächstes schauen wir uns die wahrgenommene Performance an und wie Sie einige clevere Techniken nutzen können, um unvermeidbare Performance-Einbrüche für den Benutzer weniger schwerwiegend erscheinen zu lassen oder sie komplett zu kaschieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}
