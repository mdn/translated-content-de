---
title: Was ist Web-Performance?
slug: Learn/Performance/What_is_web_performance
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}

Web-Performance dreht sich darum, Websites schnell zu machen, einschließlich der Fähigkeit, langsame Prozesse _schnell_ erscheinen zu lassen. Lädt die Seite schnell, ermöglicht sie dem Benutzer, schnell mit ihr zu interagieren, und bietet sie beruhigendes Feedback, falls etwas Zeit zum Laden benötigt (z. B. ein Lade-Spinner)? Sind Scrollen und Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in die objektive, messbare Web-Performance\*, wobei auf die Technologien, Techniken und Tools eingegangen wird, die an der Web-Optimierung beteiligt sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >client-seitige Web-Technologien</a
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

_\* im Gegensatz zur subjektiven, [wahrgenommenen Performance](/de/docs/Learn/Performance/Perceived_performance), die im nächsten Artikel behandelt wird._

## Was ist Web-Performance?

Web-Performance ist die objektive Messung und wahrgenommene Benutzererfahrung einer Website oder Anwendung. Dies umfasst folgende Hauptbereiche:

- **Reduzierung der gesamten Ladezeit**: Wie lange dauert es, bis die zum Rendern der Website erforderlichen Dateien auf den Computer des Benutzers heruntergeladen sind? Dies wird stark durch [Latenz](/de/docs/Web/Performance/Understanding_latency) beeinflusst, davon, wie groß Ihre Dateien sind, wie viele Dateien es gibt und andere Faktoren. Eine allgemeine Strategie besteht darin, Ihre Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Lade-Techniken anzuwenden (wie z. B. [preload](/de/docs/Web/HTML/Attributes/rel/preload)), um Dateien früher verfügbar zu machen.
- **Die Seite so schnell wie möglich nutzbar machen**: Dies bedeutet im Wesentlichen, Ihre Website-Assets in einer sinnvollen Reihenfolge zu laden, sodass der Benutzer schnell damit arbeiten kann. Alle anderen Assets können weiterhin im Hintergrund geladen werden, während der Benutzer seine Hauptaufgaben ausführt, und manchmal laden wir Assets nur, wenn sie tatsächlich benötigt werden (dies nennt man [lazy loading](/de/docs/Web/Performance/Lazy_loading)). Die Messung, wie lange es dauert, bis die Seite nach Beginn des Ladevorgangs einsatzbereit ist, wird {{Glossary("Time_to_interactive", "time to interactive")}} genannt.
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung zuverlässig und angenehm in der Nutzung an? Ist das Scrollen flüssig? Sind Schaltflächen anklickbar? Öffnen sich Pop-ups schnell und animieren sie sich dabei flüssig? Es gibt viele Best Practices, die berücksichtigt werden müssen, um Apps flüssig zu gestalten, z. B. die Verwendung von CSS-Animationen statt JavaScript für Animationen und die Minimierung der Anzahl an Neuzeichnungen, die die Benutzeroberfläche aufgrund von Änderungen im DOM erfordert.
- **[Wahrgenommene Performance](/de/docs/Learn/Performance/Perceived_performance)**: Wie schnell eine Website dem Benutzer erscheint, hat einen größeren Einfluss auf die Benutzererfahrung als die tatsächliche Geschwindigkeit der Website. Wie ein Benutzer Ihre Performance wahrnimmt, ist ebenso wichtig oder vielleicht wichtiger als jede objektive Statistik, aber es ist subjektiv und nicht so leicht messbar. Wahrgenommene Performance ist die Benutzerperspektive, keine Metrik. Selbst wenn ein Vorgang lange dauern wird (aufgrund von Latenz oder Ähnlichem), ist es möglich, den Benutzer beschäftigt zu halten, während er wartet, indem ein Lade-Spinner oder eine Reihe von nützlichen Hinweisen und Tipps (oder Witze oder was auch immer Sie für angemessen halten) angezeigt werden. Ein solcher Ansatz ist viel besser, als einfach nichts zu zeigen, was den Eindruck erweckt, dass es viel länger dauert, und möglicherweise dazu führt, dass Ihre Benutzer denken, es sei kaputt und aufgeben.
- **[Performance-Messungen](/de/docs/Learn/Performance/Measuring_performance)**: Web-Performance beinhaltet das Messen der tatsächlichen und wahrgenommenen Geschwindigkeit einer Anwendung, die Optimierung, wo möglich, und die Überwachung der Performance, um sicherzustellen, dass das, was Sie optimiert haben, weiterhin optimiert bleibt. Dies umfasst eine Vielzahl von Metriken (messbare Indikatoren, die Erfolg oder Misserfolg anzeigen können) und Werkzeuge, um diese Metriken zu messen, die wir in diesem Modul diskutieren werden.

Zusammengefasst gibt es viele Merkmale, die die Performance beeinflussen, einschließlich Latenz, Anwendungsgröße, Anzahl der DOM-Knoten, Anzahl der Ressourcensuchen, JavaScript-Performance, CPU-Auslastung und mehr. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu kaschieren, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gestaltet wird, während die längeren Teile der Erfahrung asynchron geladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Frames pro Sekunde und {{Glossary("Time_to_interactive", "time to interactive")}} als auch subjektive Erfahrungen darüber, wie lange es sich für den Benutzer anfühlte, bis der Inhalt geladen war.

## Wie Inhalte gerendert werden

Um die Web-Performance, die dahinter stehenden Probleme und die erwähnten Hauptthemen effektiv zu verstehen, sollten Sie einige Details darüber wissen, wie Browser funktionieren. Dazu gehören:

- **Wie der Browser funktioniert**. Wenn Sie eine URL anfordern und <kbd>Enter</kbd> / <kbd>Return</kbd> drücken, ermittelt der Browser, wo sich der Server befindet, auf dem die Dateien dieser Website gespeichert sind, stellt eine Verbindung zu diesem her und fordert die Dateien an. Siehe [Populating the page: how the browser works](/de/docs/Web/Performance/How_browsers_work) für eine detaillierte Übersicht.
- **Quellreihenfolge**. Die Quellreihenfolge Ihrer HTML-Indexdatei kann die Performance erheblich beeinflussen. Der Download von zusätzlichen Assets, die aus der Indexdatei verlinkt sind, erfolgt in der Regel sequentiell, basierend auf der Quellreihenfolge, kann jedoch manipuliert und sollte definitiv optimiert werden, wobei zu beachten ist, dass einige Ressourcen weitere Downloads blockieren, bis ihr Inhalt geparst und ausgeführt wurde.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser zur Konstruktion des Webdokuments verwendet, nachdem die Dateien vom Server heruntergeladen wurden. Der Browser folgt einer gut definierten Reihe von Schritten und die Optimierung des kritischen Rendering-Pfades zur Priorisierung der Anzeige von Inhalten, die sich auf die aktuelle Benutzeraktion beziehen, führt zu erheblichen Verbesserungen der Ladezeit der Inhalte. Siehe [Critical rendering path](/de/docs/Web/Performance/Critical_rendering_path) für weitere Informationen.
- Das **Document Object Model**. Das Document Object Model oder DOM ist eine Baumstruktur, die den Inhalt und die Elemente Ihres HTMLs als Baum von Knoten darstellt. Dies umfasst alle HTML-Attribute und die Beziehungen zwischen den Knoten. Umfangreiche DOM-Manipulationen nach dem Laden der Seiten (z. B. Hinzufügen, Löschen oder Verschieben von Knoten) können die Performance beeinflussen, daher lohnt es sich, zu verstehen, wie das DOM funktioniert und wie solche Probleme gemindert werden können. Erfahren Sie mehr unter [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir haben dies zuvor kurz erwähnt, aber kurz gesagt, ist Latenz die Zeit, die Ihre Website-Assets benötigen, um vom Server auf den Computer eines Benutzers zu gelangen. Es gibt Overhead beim Aufbau von TCP- und HTTP-Verbindungen und eine gewisse unvermeidbare Latenz beim Hin- und Herschieben der Anfragen und Antwort-Bytes über das Netzwerk, aber es gibt bestimmte Möglichkeiten, die Latenz zu verringern (z. B. die Anzahl der HTTP-Anfragen zu reduzieren, indem weniger Dateien heruntergeladen werden, die Nutzung eines {{Glossary("CDN", "CDN")}}, um Ihre Seite weltweit leistungsfähiger zu machen, und die Nutzung von HTTP/2, um Dateien effizienter vom Server aus zu bedienen). Sie können alles über dieses Thema in [Understanding Latency](/de/docs/Web/Performance/Understanding_latency) nachlesen.

## Fazit

Das war's fürs Erste; wir hoffen, dass unser kurzer Überblick über das Thema Web-Performance Ihnen geholfen hat, eine Vorstellung davon zu bekommen, worum es geht, und Sie motiviert hat, mehr darüber zu lernen. Als Nächstes werden wir uns mit der wahrgenommenen Performance befassen und wie Sie einige clevere Techniken verwenden können, um einige unvermeidbare Performance-Probleme für den Benutzer weniger schwerwiegend erscheinen zu lassen oder sie vollständig zu verbergen.

{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}
