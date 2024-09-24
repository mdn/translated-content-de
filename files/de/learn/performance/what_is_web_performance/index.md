---
title: Was ist Web-Performance?
slug: Learn/Performance/What_is_web_performance
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich Prozesse, die langsam sind, _schnell_ erscheinen zu lassen. Lädt die Seite schnell, ermöglicht sie dem Benutzer, schnell mit ihr zu interagieren, und bietet sie beruhigendes Feedback, wenn etwas Zeit zum Laden benötigt (z. B. ein Ladespinner)? Sind Scrollen und Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in die objektive, messbare Web-Performance\*, indem er untersucht, welche Technologien, Techniken und Tools an der Web-Optimierung beteiligt sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegendes Verständnis für das, was mit Web-Performance zu tun hat, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

_\* im Gegensatz zu subjektiver, [wahrgenommener Performance](/de/docs/Learn/Performance/Perceived_performance), die im nächsten Artikel behandelt wird_

## Was ist Web-Performance?

Web-Performance ist die objektive Messung und wahrgenommene Benutzererfahrung einer Website oder Anwendung. Dies umfasst die folgenden Hauptbereiche:

- **Reduzierung der gesamten Ladezeit**: Wie lange dauert es, bis die Dateien, die zum Rendern der Website erforderlich sind, auf den Computer des Benutzers heruntergeladen werden? Dies wird häufig durch [Latenz](/de/docs/Web/Performance/Understanding_latency) beeinflusst, durch die Größe der Dateien, die Anzahl der Dateien und andere Faktoren. Eine allgemeine Strategie besteht darin, Ihre Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Ladetechniken (wie zum Beispiel [Preload](/de/docs/Web/HTML/Attributes/rel/preload)) einzusetzen, um Dateien früher verfügbar zu machen.
- **Die Website so schnell wie möglich nutzbar machen**: Dies bedeutet im Wesentlichen, die Website-Ressourcen in einer sinnvollen Reihenfolge zu laden, sodass der Benutzer schnell damit beginnen kann, sie tatsächlich zu verwenden. Andere Ressourcen können im Hintergrund weiter laden, während der Benutzer mit den Hauptaufgaben fortfährt, und manchmal laden wir Ressourcen nur dann, wenn sie tatsächlich benötigt werden (dies nennt man [Lazy Loading](/de/docs/Web/Performance/Lazy_loading)). Die Messung, wie lange es dauert, bis die Seite nach dem Start des Ladens einen nutzbaren Status erreicht, nennt man [time to interactive](/de/docs/Glossary/Time_to_interactive).
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung zuverlässig und angenehm zu benutzen an? Ist das Scrollen flüssig? Sind Schaltflächen klickbar? Öffnen sich Pop-ups schnell und animieren sie flüssig, wenn sie dies tun? Es gibt viele Best Practices, um Anwendungen glatt erscheinen zu lassen, zum Beispiel die Verwendung von CSS-Animationen anstelle von JavaScript für Animationen und das Minimieren der Anzahl der Neuzeichnungen, die die Benutzeroberfläche aufgrund von Änderungen im DOM erfordert.
- **[Wahrgenommene Performance](/de/docs/Learn/Performance/Perceived_performance)**: Wie schnell eine Website dem Benutzer erscheint, hat einen größeren Einfluss auf die Benutzererfahrung als wie schnell die Website tatsächlich ist. Wie ein Benutzer Ihre Performance wahrnimmt, ist genauso wichtig, oder vielleicht sogar wichtiger, als jede objektive Statistik, aber es ist subjektiv und nicht so leicht messbar. Wahrgenommene Performance ist die Benutzerperspektive, kein Messwert. Selbst wenn ein Vorgang lange dauern wird (aufgrund von Latenz oder anderem), ist es möglich, den Benutzer während des Wartens zu beschäftigen, indem ein Ladespinner, eine Reihe nützlicher Tipps (oder Witze, oder was auch immer Sie für angemessen halten) gezeigt wird. Ein solcher Ansatz ist viel besser als nichts zu zeigen, was es viel länger erscheinen lässt und möglicherweise dazu führt, dass Ihre Benutzer denken, dass es kaputt ist und aufgeben.
- **[Performance-Messungen](/de/docs/Learn/Performance/Measuring_performance)**: Web-Performance umfasst die Messung der tatsächlichen und wahrgenommenen Geschwindigkeiten einer Anwendung, die Optimierung, wo möglich, und dann die Überwachung der Performance, um sicherzustellen, dass das, was Sie optimiert haben, optimiert bleibt. Dies umfasst eine Reihe von Metriken (messbare Indikatoren, die Erfolg oder Misserfolg anzeigen können) und Tools zur Messung dieser Metriken, die wir in diesem Modul diskutieren werden.

Zusammenfassend lässt sich sagen, dass viele Merkmale die Performance beeinflussen, einschließlich Latenz, Anwendungsgröße, der Anzahl der DOM-Knoten, der Anzahl der angeforderten Ressourcen, der JavaScript-Performance, der CPU-Auslastung und mehr. Es ist wichtig, die Lade- und Reaktionszeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu kaschieren, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während die längeren Teile der Erfahrung asynchron nachgeladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Frames pro Sekunde und [interaktive Zeit](/de/docs/Glossary/Time_to_interactive) als auch subjektive Erfahrungen, wie lange es sich anfühlte, bis die Inhalte geladen wurden.

## Wie Inhalte gerendert werden

Um die Web-Performance, die dahinter stehenden Probleme und die oben genannten Hauptthemen effektiv zu verstehen, sollten Sie einige spezifische Details darüber wissen, wie Browser funktionieren. Dazu gehören:

- **Wie der Browser funktioniert**. Wenn Sie eine URL anfordern und die

  <kbd>Eingabetaste</kbd>

  /

  <kbd>Return</kbd>

  drücken, findet der Browser heraus, wo sich der Server befindet, der die Dateien dieser Website hält, stellt eine Verbindung zu ihm her und fordert die Dateien an. Siehe [Die Seite bevölkern: Wie der Browser funktioniert](/de/docs/Web/Performance/How_browsers_work) für einen detaillierten Überblick.

- **Quellreihenfolge**. Die Quellreihenfolge Ihrer HTML-Indexdatei kann die Performance erheblich beeinflussen. Das Herunterladen zusätzlicher Ressourcen, die von der Indexdatei verlinkt sind, erfolgt in der Regel sequentiell und basiert auf der Quellreihenfolge, aber dies kann manipuliert und definitiv optimiert werden, indem erkannt wird, dass einige Ressourcen zusätzliche Downloads blockieren, bis ihr Inhalt analysiert und ausgeführt wird.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser verwendet, um das Webdokument zu erstellen, nachdem die Dateien vom Server heruntergeladen wurden. Der Browser folgt einer gut definierten Reihe von Schritten, und die Optimierung des kritischen Renderpfads zur Priorisierung der Anzeige von Inhalten, die mit der aktuellen Benutzeraktion in Zusammenhang stehen, wird zu erheblichen Verbesserungen der Inhaltsrendite führen. Siehe [Kritischer Renderpfad](/de/docs/Web/Performance/Critical_rendering_path) für mehr Informationen.
- Das **Document Object Model**. Das Document Object Model, oder DOM, ist eine Baumstruktur, die den Inhalt und die Elemente Ihres HTMLs als Baum von Knoten darstellt. Dies umfasst alle HTML-Attribute und die Beziehungen zwischen den Knoten. Umfangreiche DOM-Manipulationen nach dem Laden der Seiten (z. B. Hinzufügen, Löschen oder Verschieben von Knoten) können die Performance beeinträchtigen, daher ist es sinnvoll, zu verstehen, wie das DOM funktioniert und wie solche Probleme gemildert werden können. Erfahren Sie mehr unter [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir haben dies bereits kurz erwähnt, aber kurz gesagt, Latenz ist die Zeit, die es dauert, bis Ihre Website-Ressourcen vom Server zu einem Benutzercomputer gelangen. Es gibt einen Overhead, der mit der Herstellung von TCP- und HTTP-Verbindungen verbunden ist, und einige unvermeidbare Latenzen beim Hin- und Herschieben der Anforderungs- und Antwortbytes über das Netzwerk, aber es gibt bestimmte Möglichkeiten, die Latenz zu reduzieren (z. B. die Anzahl der HTTP-Anfragen zu verringern, indem weniger Dateien heruntergeladen werden, die Nutzung eines [CDNs](/de/docs/Glossary/CDN), um Ihre Website weltweit performanter zu machen, und die Verwendung von HTTP/2, um Dateien effizienter vom Server zu senden). Sie können alles über dieses Thema im Artikel [Latenz verstehen](/de/docs/Web/Performance/Understanding_latency) nachlesen.

## Fazit

Das war's vorerst; wir hoffen, unsere kurze Übersicht über das Thema Web-Performance hat Ihnen geholfen, eine Vorstellung davon zu bekommen, worum es geht, und Sie dazu gebracht, mehr lernen zu wollen. Als Nächstes werden wir die wahrgenommene Performance betrachten und wie Sie einige clevere Techniken verwenden können, um unvermeidbare Performanceeinbußen für den Benutzer weniger schwerwiegend erscheinen zu lassen oder sie vollständig zu verbergen.

{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}
