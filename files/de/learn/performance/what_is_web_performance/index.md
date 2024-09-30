---
title: Was ist Web-Performance?
slug: Learn/Performance/What_is_web_performance
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich des schnellen Erscheinens langsamer Prozesse. Lädt die Seite schnell, lässt sie den Benutzer schnell interagieren und bietet sie beruhigendes Feedback, wenn etwas Zeit zum Laden benötigt (z.B. ein Ladespinner)? Sind Scrollen und Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in objektive, messbare Web-Performance\*, indem er sich die Technologien, Techniken und Tools ansieht, die an der Web-Optimierung beteiligt sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse von
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Web-Technologien</a
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

_\* im Vergleich zu subjektiver, [wahrgenommener Performance](/de/docs/Learn/Performance/Perceived_performance), behandelt im nächsten Artikel_

## Was ist Web-Performance?

Web-Performance ist die objektive Messung und die wahrgenommene Benutzererfahrung einer Website oder Anwendung. Dies umfasst die folgenden Hauptbereiche:

- **Gesamtladedauer reduzieren**: Wie lange dauert es, bis die Dateien, die zum Rendern der Website benötigt werden, auf den Computer des Benutzers heruntergeladen werden? Dies wird tendenziell durch [Latenz](/de/docs/Web/Performance/Understanding_latency), die Größe Ihrer Dateien, die Anzahl der Dateien und andere Faktoren beeinflusst. Eine allgemeine Strategie besteht darin, Ihre Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Lademethoden (wie z.B. [preload](/de/docs/Web/HTML/Attributes/rel/preload)) zu verwenden, um Dateien früher verfügbar zu machen.
- **Die Website so schnell wie möglich benutzbar machen**: Dies bedeutet im Grunde genommen, Ihre Website-Materialien in einer sinnvollen Reihenfolge zu laden, damit der Benutzer schnell mit der Nutzung beginnen kann. Andere Materialien können im Hintergrund weitergeladen werden, während der Benutzer mit den Hauptaufgaben fortfährt, und manchmal laden wir Materialien erst, wenn sie tatsächlich benötigt werden (dies wird [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) genannt). Die Messung, wie lange es dauert, bis die Website nach dem Starten des Ladevorgangs nutzbar ist, wird [Time to Interactive](/de/docs/Glossary/Time_to_interactive) genannt.
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung zuverlässig und angenehm in der Nutzung an? Ist das Scrollen flüssig? Sind Schaltflächen anklickbar? Öffnen sich Pop-ups schnell und animieren sie sich dabei flüssig? Es gibt viele Best Practices, die bei der Herstellung einer glatten Erfahrung berücksichtigt werden sollten, z.B. die Verwendung von CSS-Animationen statt JavaScript für Animationen und die Minimierung der Anzahl von Repaints, die die Benutzeroberfläche aufgrund von Änderungen im DOM erfordert.
- **[Wahrgenommene Performance](/de/docs/Learn/Performance/Perceived_performance)**: Die Geschwindigkeit, mit der eine Website vom Benutzer wahrgenommen wird, hat einen größeren Einfluss auf die Benutzererfahrung als die tatsächliche Geschwindigkeit der Website. Wie ein Benutzer Ihre Leistung wahrnimmt, ist genauso wichtig oder vielleicht sogar wichtiger als jede objektive Statistik, aber es ist subjektiv und nicht so leicht messbar. Wahrgenommene Performance bezieht sich auf die Perspektive des Benutzers, nicht auf eine Metrik. Auch wenn ein Vorgang lange dauern wird (wegen der Latenz oder was auch immer), ist es möglich, den Benutzer bei Laune zu halten, indem man einen Ladespinner anzeigt oder eine Reihe nützlicher Hinweise und Tipps (oder Witze oder was auch immer Sie für angemessen halten) zeigt. Ein solcher Ansatz ist viel besser, als nur nichts zu zeigen, was den Eindruck erwecken würde, dass es viel länger dauert, und möglicherweise dazu führt, dass der Nutzer denkt, es sei kaputt, und aufgibt.
- **[Performance-Messungen](/de/docs/Learn/Performance/Measuring_performance)**: Web-Performance umfasst die Messung der tatsächlichen und wahrgenommenen Geschwindigkeiten einer Anwendung, die Optimierung, wo möglich, und dann die Überwachung der Performance, um sicherzustellen, dass das, was Sie optimiert haben, optimiert bleibt. Dies beinhaltet eine Anzahl von Metriken (messbare Indikatoren, die Erfolg oder Misserfolg anzeigen können) und Werkzeuge, um diese Metriken zu messen, die wir im Verlauf dieses Moduls besprechen werden.

Zusammenfassend beeinflussen viele Merkmale die Performance, einschließlich Latenz, Anwendungsgröße, der Anzahl der DOM-Knoten, der Anzahl der Ressourcennachfragen, JavaScript-Performance, CPU-Auslastung und mehr. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verschleiern, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während asynchron die längeren Teile der Erfahrung geladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Bilder pro Sekunde und [Time to Interactive](/de/docs/Glossary/Time_to_interactive), als auch subjektive Erfahrungen, wie lange es sich angefühlt hat, dass das Laden des Inhalts gedauert hat.

## Wie Inhalte gerendert werden

Um Web-Performance, die dahinter stehenden Probleme und die wichtigen Themenbereiche, die wir oben erwähnt haben, effektiv zu verstehen, sollten Sie wirklich einige Details über die Funktionsweise von Browsern verstehen. Dies umfasst:

- **Wie der Browser funktioniert**. Wenn Sie eine URL anfordern und drücken 

  <kbd>Enter</kbd>

  /

  <kbd>Return</kbd>

  , findet der Browser heraus, wo sich der Server befindet, der die Dateien der Website enthält, stellt eine Verbindung zu ihm her und fordert die Dateien an. Weitere Informationen finden Sie unter [Befüllung der Seite: Wie der Browser funktioniert](/de/docs/Web/Performance/How_browsers_work).
  
- **Quellreihenfolge**. Die Quellreihenfolge Ihrer HTML-Indexdatei kann die Performance erheblich beeinflussen. Der Download zusätzlicher Materialien, die in der Indexdatei verlinkt sind, erfolgt normalerweise der Reihenfolge nach, kann jedoch manipuliert und definitiv optimiert werden, indem realisiert wird, dass einige Ressourcen weitere Downloads blockieren, bis ihr Inhalt analysiert und ausgeführt wurde.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser verwendet, um das Web-Dokument zu erstellen, nachdem die Dateien vom Server heruntergeladen wurden. Der Browser folgt einer gut definierten Reihe von Schritten, und die Optimierung des kritischen Rendering-Pfades zur Priorisierung der Anzeige von Inhalten, die sich auf die aktuelle Benutzeraktion beziehen, führt zu erheblichen Verbesserungen der Inhaltsrenditezeit. Siehe [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) für weitere Informationen.
- **Das Dokument-Objekt-Modell**. Das Dokument-Objekt-Modell oder DOM ist eine Baumstruktur, die den Inhalt und die Elemente Ihres HTML als Baum von Knoten darstellt. Dazu gehören alle HTML-Attribute und die Beziehungen zwischen den Knoten. Umfangreiche DOM-Manipulation nach dem Laden der Seiten (z.B. Hinzufügen, Löschen oder Verschieben von Knoten) kann die Performance beeinträchtigen, daher ist es sinnvoll, zu verstehen, wie das DOM funktioniert und wie solche Probleme vermieden werden können. Weitere Informationen finden Sie unter [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir haben dies bereits kurz erwähnt, aber kurz gesagt, Latenz ist die Zeit, die es dauert, bis Ihre Website-Materialien vom Server zu einem Benutzer-Computer gelangen. Es gibt einen Overhead für die Herstellung von TCP- und HTTP-Verbindungen und eine gewisse unvermeidbare Latenz beim Hin- und Herschieben der Anfrage- und Antwortbytes über das Netzwerk, aber es gibt bestimmte Möglichkeiten, um die Latenz zu reduzieren (z.B. die Reduzierung der Anzahl der HTTP-Anfragen durch Herunterladen weniger Dateien, die Verwendung eines [CDN](/de/docs/Glossary/CDN), um Ihre Website weltweit leistungsfähiger zu machen, und die Verwendung von HTTP/2, um Dateien effizienter vom Server zu bedienen). Sie können alles über dieses Thema bei [Verständnis der Latenz](/de/docs/Web/Performance/Understanding_latency) lesen.

## Fazit

Das war's für den Moment; wir hoffen, dass unser kurzer Überblick über das Thema Web-Performance Ihnen geholfen hat, eine Vorstellung davon zu bekommen, worum es geht, und dass Sie motiviert sind, mehr zu lernen. Als nächstes werfen wir einen Blick auf die wahrgenommene Performance und wie Sie einige clevere Techniken einsetzen können, um unvermeidbare Performance-Einbußen für den Benutzer weniger schwerwiegend erscheinen zu lassen oder sie vollständig zu verbergen.

{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}
