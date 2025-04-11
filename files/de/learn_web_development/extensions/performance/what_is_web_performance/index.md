---
title: Was ist Web-Performance?
slug: Learn_web_development/Extensions/Performance/What_is_web_performance
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Darstellung langsamer Prozesse als scheinbar schnell. Lädt die Seite schnell, ermöglicht dem Benutzer eine schnelle Interaktion und bietet beruhigendes Feedback, wenn etwas länger lädt (z.B. ein Lade-Spinner)? Sind Scrollen und Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in die objektive, messbare Web-Performance\*, wobei Technologien, Techniken und Werkzeuge zur Web-Optimierung betrachtet werden.

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
          >Client-seitige Webtechnologien</a
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

_\* im Gegensatz zur subjektiven, [wahrgenommenen Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance), die im nächsten Artikel behandelt wird_

## Was ist Web-Performance?

Web-Performance ist das objektive Messen und die wahrgenommene Benutzererfahrung einer Website oder Anwendung. Dazu gehören die folgenden Hauptbereiche:

- **Verkürzung der gesamten Ladezeit**: Wie lange dauert es, bis die für das Rendern der Website erforderlichen Dateien auf den Computer des Benutzers heruntergeladen sind? Dies wird in der Regel durch [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency), die Größe Ihrer Dateien, die Anzahl der Dateien und andere Faktoren beeinflusst. Eine allgemeine Strategie besteht darin, Ihre Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Ladeverfahren einzusetzen (wie z.B. [Preload](/de/docs/Web/HTML/Reference/Attributes/rel/preload)), um Dateien früher verfügbar zu machen.
- **Die Website so schnell wie möglich nutzbar machen**: Dies bedeutet im Wesentlichen, die Website-Ressourcen in einer sinnvollen Reihenfolge zu laden, sodass der Benutzer sie schnell nutzen kann. Andere Ressourcen können weiterhin im Hintergrund geladen werden, während der Benutzer mit den Hauptaufgaben fortfährt, und manchmal laden wir Ressourcen nur dann, wenn sie tatsächlich benötigt werden (dies nennt man [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading)). Das Messen, wie lange es dauert, bis die Seite nach Beginn des Ladevorgangs nutzbar ist, nennt man {{Glossary("Time_to_interactive", "Time to Interactive")}}.
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung zuverlässig und angenehm in der Nutzung an? Ist das Scrollen flüssig? Sind Schaltflächen anklickbar? Öffnen sich Pop-ups schnell und animieren sie sich dabei flüssig? Es gibt viele bewährte Verfahren, um Anwendungen flüssig erscheinen zu lassen, zum Beispiel durch die Verwendung von CSS-Animationen anstelle von JavaScript für Animationen und die Minimierung der Anzahl der Neuzeichnungen, die die Benutzeroberfläche aufgrund von Änderungen im DOM erfordert.
- **[Wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)**: Wie schnell eine Website dem Benutzer erscheint, hat einen größeren Einfluss auf die Benutzererfahrung als wie schnell die Website tatsächlich ist. Wie ein Benutzer Ihre Performance wahrnimmt, ist ebenso wichtig, wenn nicht wichtiger, als jede objektive Statistik, jedoch ist sie subjektiv und nicht so leicht messbar. Wahrgenommene Performance ist die Perspektive des Benutzers, keine Metrik. Selbst wenn ein Vorgang lange dauern wird (wegen Latenz oder aus anderen Gründen), ist es möglich, den Benutzer zu beschäftigen, indem man einen Lade-Spinner oder eine Reihe von nützlichen Hinweisen und Tipps (oder Witze oder alles andere, was Sie für geeignet halten) anzeigt. Ein solcher Ansatz ist viel besser, als einfach nichts zu zeigen, was es viel länger erscheinen lässt und möglicherweise dazu führt, dass Ihre Benutzer denken, es sei kaputt, und aufgeben.
- **[Performance-Messungen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)**: Web-Performance umfasst das Messen der tatsächlichen und wahrgenommenen Geschwindigkeiten einer Anwendung, die Optimierung, wo möglich, und das Überwachen der Performance, um sicherzustellen, dass das, was Sie optimiert haben, auch optimiert bleibt. Dies umfasst eine Anzahl von Metriken (messbare Indikatoren, die Erfolg oder Misserfolg anzeigen können) und Tools, um diese Metriken zu messen, die wir im Verlauf dieses Moduls besprechen werden.

Zusammenfassend lässt sich sagen, dass viele Funktionen die Performance beeinflussen, einschließlich Latenz, Anwendungsgröße, Anzahl der DOM-Knoten, Anzahl der angeforderten Ressourcen, JavaScript-Performance, CPU-Auslastung und mehr. Es ist wichtig, Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um Latenzen zu kaschieren, indem die Erfahrungen so schnell wie möglich verfügbar und interaktiv gemacht werden, während die längeren Teile der Erfahrung asynchron nachgeladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeiten, Frames pro Sekunde und {{Glossary("Time_to_interactive", "Time to Interactive")}} als auch subjektive Erfahrungen davon, wie lange es sich anfühlt, bis der Inhalt geladen ist.

## Wie Inhalte gerendert werden

Um die Web-Performance effektiv zu verstehen, die dahinterliegenden Probleme und die oben genannten Hauptthemen, sollten Sie einige Details darüber verstehen, wie Browser funktionieren. Dazu gehören:

- **Wie der Browser funktioniert**. Wenn Sie eine URL anfordern und <kbd>Enter</kbd> / <kbd>Return</kbd> drücken, findet der Browser heraus, wo der Server ist, der die Dateien dieser Website enthält, stellt eine Verbindung zu ihm her und fordert die Dateien an. Siehe [Die Seite füllen: wie der Browser funktioniert](/de/docs/Web/Performance/Guides/How_browsers_work) für einen detaillierten Überblick.
- **Quellreihenfolge**. Die Quellreihenfolge Ihrer HTML-Indexdatei kann die Performance erheblich beeinflussen. Das Herunterladen zusätzlicher Ressourcen, die von der Indexdatei verlinkt sind, erfolgt im Allgemeinen sequentiell, basierend auf der Quellreihenfolge, kann jedoch manipuliert und definitiv optimiert werden, wodurch erkannt wird, dass einige Ressourcen das Herunterladen zusätzlicher Ressourcen blockieren, bis sie geparst und ausgeführt wurden.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser verwendet, um das Webdokument zu erstellen, sobald die Dateien vom Server heruntergeladen wurden. Der Browser folgt einer klar definierten Abfolge von Schritten, und die Optimierung des kritischen Rendering-Pfades zur Priorisierung der Anzeige von Inhalten, die mit der aktuellen Benutzeraktion in Verbindung stehen, führt zu signifikanten Verbesserungen der Renderzeit des Inhalts. Weitere Informationen finden Sie unter [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Guides/Critical_rendering_path).
- Das **Document Object Model**. Das Document Object Model oder DOM ist eine Baumstruktur, die den Inhalt und die Elemente Ihres HTMLs als Baum von Knoten darstellt. Dies beinhaltet alle HTML-Attribute und die Beziehungen zwischen den Knoten. Umfangreiche DOM-Manipulationen, nachdem die Seiten geladen sind (z.B. Hinzufügen, Löschen oder Verschieben von Knoten) können die Performance beeinträchtigen, daher lohnt es sich zu verstehen, wie das DOM funktioniert und wie solche Probleme gemindert werden können. Weitere Informationen finden Sie unter [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir erwähnten dies kurz zuvor, aber kurz gesagt, Latenz ist die Zeit, die es dauert, bis Ihre Website-Ressourcen vom Server auf den Computer eines Benutzers transportiert werden. Es gibt einen Overhead beim Aufbau von TCP- und HTTP-Verbindungen und einige unvermeidbare Latenzen beim Hin- und Herübertragen der Anforderungs- und Antwort-Bytes über das Netzwerk, aber es gibt bestimmte Möglichkeiten, die Latenz zu verringern (z.B. die Anzahl der HTTP-Anfragen, die Sie machen, indem Sie weniger Dateien herunterladen, die Verwendung eines {{Glossary("CDN", "CDN")}}, um Ihre Website weltweit leistungsfähiger zu machen, und die Verwendung von HTTP/2, um Dateien effizienter vom Server bereitzustellen). Sie können alles darüber in [Latenz verstehen](/de/docs/Web/Performance/Guides/Understanding_latency) lesen.

## Fazit

Das war's für den Moment; wir hoffen, dass unser kurzer Überblick über das Thema Web-Performance Ihnen geholfen hat, eine Vorstellung davon zu bekommen, worum es geht, und Sie dazu inspiriert hat, mehr zu lernen. Als nächstes werden wir die wahrgenommene Performance betrachten und wie Sie einige clevere Techniken nutzen können, um einige unvermeidliche Performance-Einbußen für den Benutzer weniger schwerwiegend erscheinen zu lassen oder sie vollständig zu kaschieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions/Performance/Perceived_performance", "Learn_web_development/Extensions/Performance")}}
