---
title: Was ist Web-Performance?
slug: Learn_web_development/Extensions/Performance/What_is_web_performance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Darstellung langsamer Prozesse als _schnell_. Lädt die Seite schnell, ermöglicht sie es dem Benutzer, schnell mit ihr zu interagieren, und bietet sie beruhigendes Feedback, wenn etwas Zeit zum Laden benötigt (z.B. ein Lade-Spinner)? Sind Scrollen und Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in objektive, messbare Web-Performance\* und untersucht, welche Technologien, Techniken und Werkzeuge bei der Web-Optimierung zum Einsatz kommen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >Client-seitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegende Vertrautheit mit den Aspekten der Web-Performance zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

_\* im Vergleich zur subjektiven, [wahrgenommenen Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance), die im nächsten Artikel behandelt wird_

## Was ist Web-Performance?

Web-Performance ist die objektive Messung und wahrgenommene Benutzererfahrung einer Website oder Anwendung. Dazu gehören folgende Hauptbereiche:

- **Reduzierung der Gesamtladezeit**: Wie lange dauert es, bis die Dateien, die zum Rendern der Website benötigt werden, auf den Computer des Benutzers heruntergeladen sind? Dies wird in der Regel durch die [Latenz](/de/docs/Web/Performance/Understanding_latency), die Größe Ihrer Dateien, die Anzahl der Dateien und andere Faktoren beeinträchtigt. Eine allgemeine Strategie besteht darin, Ihre Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Ladetechniken anzuwenden (wie [preload](/de/docs/Web/HTML/Attributes/rel/preload)), um Dateien früher verfügbar zu machen.
- **Bereitstellung der Nutzbarkeit der Seite so schnell wie möglich**: Im Grunde bedeutet dies, Ihre Website-Ressourcen in einer sinnvollen Reihenfolge zu laden, damit der Benutzer anfangen kann, die Seite schnell zu nutzen. Andere Ressourcen können im Hintergrund weitergeladen werden, während der Benutzer mit den primären Aufgaben fortfährt, und manchmal laden wir Ressourcen nur, wenn sie tatsächlich benötigt werden (dies wird als [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) bezeichnet). Die Messung, wie lange es dauert, bis die Seite nach Beginn des Ladevorgangs nutzbar wird, wird als {{Glossary("Time_to_interactive", "Time to Interactive")}} bezeichnet.
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung zuverlässig und angenehm zu nutzen an? Ist das Scrollen flüssig? Sind Knöpfe klickbar? Öffnen sich Pop-ups schnell und animieren sie dabei flüssig? Es gibt viele Best Practices, die man beachten sollte, um Apps flüssig wirken zu lassen, z.B. CSS-Animationen statt JavaScript für Animationen zu verwenden und die Anzahl der Neuzeichnungen der Benutzeroberfläche durch Änderungen im DOM zu minimieren.
- **[Wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)**: Wie schnell eine Website dem Nutzer erscheint, hat einen größeren Einfluss auf die Benutzererfahrung als die tatsächliche Geschwindigkeit der Website. Wie ein Nutzer Ihre Performance wahrnimmt, ist ebenso wichtig oder vielleicht wichtiger als jede objektive Statistik, aber es ist subjektiv und nicht so leicht messbar. Wahrgenommene Performance ist die Perspektive des Nutzers, keine Metrik. Selbst wenn ein Vorgang lange dauern wird (aufgrund von Latenz oder Ähnlichem), ist es möglich, den Nutzer zu beschäftigen, während er wartet, indem Sie einen Lade-Spinner anzeigen oder eine Reihe nützlicher Hinweise und Tipps (oder Witze oder was auch immer Sie für angemessen halten). Ein solcher Ansatz ist viel besser, als einfach nichts zu zeigen, was den Eindruck erwecken könnte, es dauere viel länger, und möglicherweise dazu führt, dass Ihre Nutzer denken, es sei kaputt und aufgeben.
- **[Performance-Messungen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)**: Web-Performance umfasst die Messung der tatsächlichen und wahrgenommenen Geschwindigkeiten einer Anwendung, die Optimierung, wo möglich, und dann die Überwachung der Performance, um sicherzustellen, dass das, was Sie optimiert haben, optimiert bleibt. Dies umfasst eine Reihe von Metriken (messbare Indikatoren, die Erfolg oder Misserfolg anzeigen können) und Werkzeuge zur Messung dieser Metriken, die wir im Laufe dieses Moduls besprechen werden.

Zusammenfassend lässt sich sagen, dass viele Faktoren die Performance beeinflussen, einschließlich der Latenz, der Anwendungsgröße, der Anzahl der DOM-Knoten, der Anzahl der gestellten Ressourcenanfragen, der JavaScript-Performance, der CPU-Auslastung und mehr. Es ist wichtig, Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während asynchron die längeren Teile der Erfahrung geladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Frames pro Sekunde und {{Glossary("Time_to_interactive", "Time to Interactive")}}, als auch subjektive Erfahrungen, wie lange es sich anfühlte, bis der Inhalt geladen war.

## Wie Inhalte gerendert werden

Um die Web-Performance effektiv zu verstehen, die dahinter liegenden Probleme und die oben erwähnten Hauptthemenbereiche, sollten Sie wirklich einige Details darüber verstehen, wie Browser funktionieren. Dazu gehört:

- **Wie der Browser funktioniert**. Wenn Sie eine URL anfordern und <kbd>Enter</kbd> / <kbd>Return</kbd> drücken, findet der Browser heraus, wo der Server ist, der die Dateien dieser Website hält, stellt eine Verbindung zu ihm her und fordert die Dateien an. Sehen Sie [Das Befüllen der Seite: wie der Browser funktioniert](/de/docs/Web/Performance/How_browsers_work) für eine detaillierte Übersicht.
- **Quellenreihenfolge**. Die Quellenreihenfolge Ihrer HTML-Indexdatei kann die Performance erheblich beeinflussen. Der Download zusätzlicher Ressourcen, die von der Indexdatei verlinkt sind, erfolgt in der Regel sequentiell basierend auf der Quellenreihenfolge, aber dies kann manipuliert und sollte definitiv optimiert werden, in dem Bewusstsein, dass einige Ressourcen weitere Downloads blockieren, bis ihr Inhalt analysiert und ausgeführt wird.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser verwendet, um das Webdokument zu konstruieren, nachdem die Dateien vom Server heruntergeladen wurden. Der Browser folgt einem klar definierten Satz von Schritten, und die Optimierung des kritischen Rendering-Pfads zur Priorisierung der Anzeige von Inhalten, die sich auf die aktuelle Benutzeraktion beziehen, führt zu erheblichen Verbesserungen der Inhaltsdarstellungszeit. Siehe [Kritischer Renderpfad](/de/docs/Web/Performance/Critical_rendering_path) für mehr Informationen.
- Das **Document Object Model**. Das Document Object Model oder DOM ist eine Baumstruktur, die den Inhalt und die Elemente Ihres HTML als Baum von Knoten darstellt. Dies umfasst alle HTML-Attribute und die Beziehungen zwischen den Knoten. Umfangreiche DOM-Manipulationen nach dem Laden der Seite (z.B. Hinzufügen, Löschen oder Verschieben von Knoten) können die Performance beeinflussen, daher lohnt es sich, zu verstehen, wie das DOM funktioniert und wie solche Probleme gemildert werden können. Erfahren Sie mehr im [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir haben dies kurz zuvor erwähnt, aber kurz gesagt, Latenz ist die Zeit, die es dauert, bis Ihre Website-Ressourcen vom Server zu einem Computer des Nutzers reisen. Es gibt Overhead beim Einrichten der TCP- und HTTP-Verbindungen und eine gewisse unvermeidbare Latenz beim Hin- und Herschicken der Anforderungs- und Antwort-Bytes über das Netzwerk, aber es gibt bestimmte Möglichkeiten, die Latenz zu reduzieren (z.B. die Anzahl der HTTP-Anfragen zu reduzieren, indem Sie weniger Dateien herunterladen, die Verwendung eines {{Glossary("CDN", "CDN")}}, um Ihre Seite weltweit besser performen zu lassen, und die Verwendung von HTTP/2, um Dateien effizienter vom Server bereitzustellen). Sie können alles darüber im [Verstehen der Latenz](/de/docs/Web/Performance/Understanding_latency) nachlesen.

## Schlussfolgerung

Das war's fürs Erste; wir hoffen, dass unser kurzer Überblick über das Thema der Web-Performance Ihnen geholfen hat, eine Vorstellung davon zu bekommen, worum es geht, und Sie dazu angeregt hat, mehr zu lernen. Als nächstes werden wir uns die wahrgenommene Performance anschauen und wie Sie einige clevere Techniken nutzen können, um einige unvermeidbare Performance-Probleme für den Nutzer weniger schwerwiegend erscheinen zu lassen oder sie vollständig zu verschleiern.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}
