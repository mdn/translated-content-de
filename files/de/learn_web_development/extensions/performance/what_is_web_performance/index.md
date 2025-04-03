---
title: Was ist Web-Performance?
slug: Learn_web_development/Extensions/Performance/What_is_web_performance
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich langsamer Prozesse, die _schnell_ erscheinen. Lädt die Seite schnell, ermöglicht sie es dem Nutzer, schnell mit ihr zu interagieren, und bietet sie beruhigendes Feedback, wenn etwas Zeit zum Laden benötigt (z. B. ein Lade-Spinnrad)? Sind das Scrollen und die Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in die objektive, messbare Web-Performance\*, und betrachtet, welche Technologien, Techniken und Werkzeuge an der Weboptimierung beteiligt sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegende Vertrautheit mit den Aspekten der Web-Performance gewinnen.
      </td>
    </tr>
  </tbody>
</table>

_\* im Vergleich zu subjektiver, [wahrgenommener Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance), die im nächsten Artikel behandelt wird_

## Was ist Web-Performance?

Web-Performance ist die objektive Messung und wahrgenommene Nutzererfahrung einer Website oder Anwendung. Dazu gehören die folgenden Hauptbereiche:

- **Reduzierung der gesamten Ladezeit**: Wie lange dauert es, bis die Dateien, die zum Rendern der Website erforderlich sind, auf den Computer des Benutzers heruntergeladen werden? Dies wird in der Regel durch [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency), die Größe Ihrer Dateien, die Anzahl der Dateien und andere Faktoren beeinflusst. Eine allgemeine Strategie besteht darin, Ihre Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Ladestrategien (wie [Preload](/de/docs/Web/HTML/Attributes/rel/preload)) einzusetzen, um Dateien früher verfügbar zu machen.
- **Schnelle Benutzbarkeit der Seite**: Dies bedeutet grundsätzlich, Ihre Website-Ressourcen in einer sinnvollen Reihenfolge zu laden, sodass der Nutzer wirklich schnell anfangen kann, sie zu nutzen. Andere Ressourcen können im Hintergrund weitergeladen werden, während der Nutzer mit primären Aufgaben fortfährt, und manchmal laden wir Ressourcen erst, wenn sie tatsächlich benötigt werden (das nennt sich [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)). Die Messung, wie lange die Seite bis zu einem nutzbaren Start braucht, nachdem sie begonnen hat zu laden, wird als {{Glossary("Time_to_interactive", "Time to Interactive")}} bezeichnet.
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung zuverlässig und angenehm zu nutzen an? Ist das Scrollen flüssig? Sind Schaltflächen anklickbar? Öffnen sich Pop-ups schnell und animieren sie sich dabei flüssig? Es gibt viele Best Practices, um Anwendungen flüssig zu gestalten, zum Beispiel die Verwendung von CSS-Animationen anstelle von JavaScript für Animationen und die Minimierung der Neuzeichnungen, die die Benutzeroberfläche aufgrund von Änderungen im DOM erfordert.
- **[Wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)**: Wie schnell eine Website den Nutzern erscheint, hat einen größeren Einfluss auf die Nutzererfahrung als die tatsächliche Geschwindigkeit der Website. Wie der Nutzer Ihre Performance wahrnimmt, ist genauso wichtig oder vielleicht sogar wichtiger als jede objektive Statistik, aber es ist subjektiv und nicht so einfach messbar. Wahrgenommene Performance ist Benutzerperspektive, kein Messwert. Auch wenn ein Vorgang lange dauert (aufgrund von Latenz oder ähnlichem), ist es möglich, den Nutzer zu engagieren, während er wartet, indem Sie einen Lade-Spinnrad oder eine Reihe von nützlichen Hinweisen und Tipps zeigen (oder Witze oder alles andere, was Sie für angemessen halten). Ein solcher Ansatz ist viel besser, als einfach nichts zu zeigen, was den Eindruck erweckt, dass es viel länger dauert und möglicherweise dazu führt, dass Ihre Nutzer denken, es sei kaputt und aufgeben.
- **[Performance-Messungen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)**: Web-Performance umfasst die Messung der tatsächlichen und wahrgenommenen Geschwindigkeiten einer Anwendung, die Optimierung, wo möglich, und dann die Überwachung der Performance, um sicherzustellen, dass das, was Sie optimiert haben, optimiert bleibt. Dies beinhaltet eine Reihe von Metriken (messbare Indikatoren, die Erfolg oder Misserfolg anzeigen können) und Werkzeuge, um diese Metriken zu messen, die wir im Verlauf dieses Moduls diskutieren werden.

Zusammenfassend lässt sich sagen, dass viele Merkmale die Performance beeinflussen, einschließlich Latenz, Anwendungsgröße, Anzahl der DOM-Knoten, Anzahl der angeforderten Ressourcen, JavaScript-Performance, CPU-Auslastung und mehr. Es ist wichtig, Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während die längeren, nachgelagerten Teile der Erfahrung asynchron geladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Frames pro Sekunde und {{Glossary("Time_to_interactive", "Time to Interactive")}} als auch subjektive Erfahrungen darüber, wie lange es sich anfühlte, bis der Inhalt geladen war.

## Wie Inhalte gerendert werden

Um die Web-Performance, die dahinter liegenden Probleme und die wichtigsten Themenbereiche effektiv zu verstehen, sollten Sie einige Besonderheiten darüber verstehen, wie Browser funktionieren. Dazu gehören:

- **Wie der Browser arbeitet**. Wenn Sie eine URL anfordern und die <kbd>Enter</kbd>-Taste oder <kbd>Return</kbd> drücken, findet der Browser heraus, wo sich der Server befindet, der die Dateien dieser Website enthält, stellt eine Verbindung her und fordert die Dateien an. Einen detaillierten Überblick finden Sie unter [Populating the page: how the browser works](/de/docs/Web/Performance/Guides/How_browsers_work).
- **Quellreihenfolge**. Die Quellreihenfolge Ihrer HTML-Indexdatei kann die Performance erheblich beeinflussen. Der Download zusätzlicher Ressourcen, die von der Indexdatei verlinkt sind, erfolgt in der Regel sequentiell auf Basis der Quellreihenfolge, aber dies kann manipuliert und definitiv optimiert werden. Es ist zu beachten, dass einige Ressourcen zusätzliche Downloads blockieren, bis ihr Inhalt geparst und ausgeführt wurde.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser zur Konstruktion des Webdokuments verwendet, nachdem die Dateien vom Server heruntergeladen wurden. Der Browser folgt einem wohl definierten Satz von Schritten, und die Optimierung des kritischen Rendering-Pfads zur Priorisierung der Anzeige von Inhalten, die mit der aktuellen Benutzeraktion zusammenhängen, führt zu erheblichen Verbesserungen der Inhaltsrenderzeit. Weitere Informationen finden Sie unter [Critical rendering path](/de/docs/Web/Performance/Guides/Critical_rendering_path).
- Das **Document Object Model**. Das Document Object Model oder DOM ist eine Baumstruktur, die den Inhalt und die Elemente Ihres HTML als Baum von Knoten darstellt. Dies umfasst alle HTML-Attribute und die Beziehungen zwischen den Knoten. Umfangreiche DOM-Manipulation nach dem Laden der Seite (z. B. Hinzufügen, Löschen oder Verschieben von Knoten) kann die Performance beeinflussen, daher ist es sinnvoll zu verstehen, wie das DOM funktioniert und wie solche Probleme gemindert werden können. Weitere Informationen finden Sie unter [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir haben dies bereits kurz erwähnt, aber kurz gesagt, ist Latenz die Zeit, die Ihre Website-Ressourcen benötigen, um vom Server zum Computer eines Nutzers zu gelangen. Es gibt einen Overhead beim Aufbau von TCP- und HTTP-Verbindungen sowie eine unvermeidliche Latenz beim Hin- und Herschicken der Anfrage- und Antwortbytes über das Netzwerk, aber es gibt bestimmte Möglichkeiten, die Latenz zu reduzieren (z. B. Reduzierung der Anzahl der HTTP-Anfragen, die Sie stellen, indem Sie weniger Dateien herunterladen, Verwendung eines {{Glossary("CDN", "CDN")}} zur Verbesserung der Performance Ihrer Website weltweit und Verwendung von HTTP/2, um Dateien effizienter vom Server zu liefern). Sie können alles zu diesem Thema unter [Understanding Latency](/de/docs/Web/Performance/Guides/Understanding_latency) nachlesen.

## Schlussfolgerung

Das war's fürs Erste; wir hoffen, dass unser kurzer Überblick über das Thema Web-Performance Ihnen geholfen hat, sich ein Bild davon zu machen, worum es geht, und Sie dazu inspiriert, mehr darüber zu lernen. Als Nächstes behandeln wir die wahrgenommene Performance und wie Sie einige clevere Techniken verwenden können, um unvermeidliche Performance-Einbußen für den Nutzer weniger gravierend erscheinen zu lassen oder sie vollständig zu verschleiern.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}
