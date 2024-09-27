---
title: Was ist Web-Performance?
slug: Learn/Performance/What_is_web_performance
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}

Web-Performance dreht sich alles darum, Websites schnell zu machen, einschließlich langsamer Prozesse, die _schnell_ erscheinen. Lädt die Seite schnell, ermöglicht es dem Benutzer, schnell mit ihr zu interagieren, und bietet sie beruhigendes Feedback, wenn etwas Zeit zum Laden benötigt (z.B. ein Lade-Spinner)? Sind das Scrollen und die Animationen flüssig? Dieser Artikel bietet eine kurze Einführung in objektive, messbare Web-Performance\*, und untersucht, welche Technologien, Techniken und Tools bei der Weboptimierung involviert sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse von
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
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

_\* im Gegensatz zur subjektiven [wahrgenommenen Leistung](/de/docs/Learn/Performance/Perceived_performance), die im nächsten Artikel behandelt wird_

## Was ist Web-Performance?

Web-Performance ist die objektive Messung und die wahrgenommene Benutzererfahrung einer Website oder Anwendung. Dazu gehören die folgenden Hauptbereiche:

- **Reduzierung der gesamten Ladezeit**: Wie lange dauert es, bis die Dateien, die zur Darstellung der Website erforderlich sind, auf den Computer des Benutzers heruntergeladen werden? Dies wird in der Regel durch [Latenz](/de/docs/Web/Performance/Understanding_latency), die Dateigröße, die Anzahl der Dateien und andere Faktoren beeinflusst. Eine allgemeine Strategie besteht darin, Ihre Dateien so klein wie möglich zu machen, die Anzahl der HTTP-Anfragen so weit wie möglich zu reduzieren und clevere Ladetechniken (wie [preload](/de/docs/Web/HTML/Attributes/rel/preload)) einzusetzen, um Dateien früher verfügbar zu machen.
- **Die Website so schnell wie möglich nutzbar machen**: Dies bedeutet im Wesentlichen, Ihre Website-Ressourcen in einer sinnvollen Reihenfolge zu laden, damit der Benutzer wirklich schnell anfangen kann, sie zu nutzen. Andere Ressourcen können im Hintergrund weiterhin geladen werden, während der Benutzer mit den Hauptaufgaben fortfährt, und manchmal laden wir Ressourcen nur, wenn sie tatsächlich benötigt werden (dies wird als [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) bezeichnet). Die Messung, wie lange es dauert, bis die Website nach dem Starten des Ladevorgangs benutzbar ist, wird als [Time to Interactive](/de/docs/Glossary/Time_to_interactive) bezeichnet.
- **Flüssigkeit und Interaktivität**: Fühlt sich die Anwendung zuverlässig und angenehm zu verwenden an? Ist das Scrollen flüssig? Sind Buttons anklickbar? Öffnen sich Pop-ups schnell und animieren sie sich dabei flüssig? Es gibt viele Best Practices, um Anwendungen flüssig zu gestalten, zum Beispiel die Verwendung von CSS-Animationen anstelle von JavaScript für Animationen und die Minimierung der Anzahl der Neuzeichnungen, die die Benutzeroberfläche aufgrund von DOM-Änderungen erfordert.
- **[Wahrgenommene Leistung](/de/docs/Learn/Performance/Perceived_performance)**: Wie schnell eine Website dem Benutzer vorkommt, hat einen größeren Einfluss auf die Benutzererfahrung als die tatsächliche Geschwindigkeit der Website. Wie ein Benutzer Ihre Leistung wahrnimmt, ist ebenso wichtig wie jede objektive Statistik, wenn nicht sogar wichtiger. Die wahrgenommene Leistung ist eine Benutzerperspektive, keine Metrik. Selbst wenn ein Vorgang lange dauern wird (aufgrund von Latenz oder anderen Faktoren), ist es möglich, den Benutzer zu beschäftigen, während er wartet, indem ein Lade-Spinner oder eine Reihe nützlicher Hinweise und Tipps (oder Witze oder alles andere, was Sie für geeignet halten) angezeigt wird. Ein solcher Ansatz ist viel besser, als nichts anzuzeigen, was den Eindruck erweckt, dass es viel länger dauert und möglicherweise dazu führt, dass der Benutzer denkt, es sei kaputt und aufgibt.
- **[Leistungsmessungen](/de/docs/Learn/Performance/Measuring_performance)**: Web-Performance umfasst die Messung der tatsächlichen und wahrgenommenen Geschwindigkeiten einer Anwendung, die Optimierung, wo möglich, und das anschließende Monitoring der Leistung, um sicherzustellen, dass das, was Sie optimiert haben, optimiert bleibt. Dies beinhaltet eine Reihe von Metriken (messbare Indikatoren, die Erfolg oder Misserfolg anzeigen können) und Tools zur Messung dieser Metriken, die wir in diesem Modul besprechen werden.

Zusammengefasst gibt es viele Merkmale, die die Leistung beeinflussen, einschließlich Latenz, Anwendungsgröße, Anzahl der DOM-Knoten, Anzahl der gestellten Ressourcenanforderungen, JavaScript-Leistung, CPU-Auslastung und mehr. Es ist wichtig, die Lade- und Antwortzeiten zu minimieren und zusätzliche Funktionen hinzuzufügen, um die Latenz zu verbergen, indem die Erfahrung so schnell wie möglich verfügbar und interaktiv gemacht wird, während die langwierigen Teile der Erfahrung asynchron geladen werden.

> [!NOTE]
> Web-Performance umfasst sowohl objektive Messungen wie Ladezeit, Frames pro Sekunde und [Time to Interactive](/de/docs/Glossary/Time_to_interactive), als auch subjektive Erlebnisse, wie lange es sich für den Benutzer angefühlt hat, bis der Inhalt geladen wurde.

## Wie Inhalte gerendert werden

Um Web-Performance, die dahinter stehenden Probleme und die oben genannten Hauptthemen effektiv zu verstehen, sollten Sie wirklich einige spezifische Details darüber kennen, wie Browser funktionieren. Dazu gehört:

- **Wie der Browser funktioniert**. Wenn Sie eine URL eingeben und

  <kbd>Enter</kbd>

  /

  <kbd>Return</kbd>

  drücken, findet der Browser heraus, wo sich der Server befindet, der die Dateien dieser Website enthält, stellt eine Verbindung zu ihm her und fordert die Dateien an. Siehe [Die Seite füllen: Wie der Browser funktioniert](/de/docs/Web/Performance/How_browsers_work) für einen detaillierten Überblick.

- **Quellreihenfolge**. Die Quellreihenfolge Ihrer HTML-Indexdatei kann die Leistung erheblich beeinflussen. Das Herunterladen zusätzlicher Ressourcen, die von der Indexdatei verlinkt sind, erfolgt in der Regel nacheinander, basierend auf der Quellreihenfolge, kann jedoch manipuliert und definitiv optimiert werden, unter dem Verständnis, dass einige Ressourcen das Herunterladen zusätzlicher Inhalte blockieren, bis ihr Inhalt geparst und ausgeführt ist.
- **Der kritische Pfad**. Dies ist der Prozess, den der Browser verwendet, um das Web-Dokument zu erstellen, nachdem die Dateien vom Server heruntergeladen wurden. Der Browser folgt einer gut definierten Abfolge von Schritten, und die Optimierung des kritischen Rendering-Pfads, um die Anzeige von Inhalten, die sich auf die aktuelle Benutzeraktion beziehen, zu priorisieren, führt zu erheblichen Verbesserungen der Inhaltsrenditezeit. Siehe [Kritischer Rendering-Pfad](/de/docs/Web/Performance/Critical_rendering_path) für weitere Informationen.
- Das **Document Object Model**. Das Document Object Model oder DOM ist eine Baumstruktur, die den Inhalt und die Elemente Ihres HTMLs als Baum von Knoten darstellt. Dies umfasst alle HTML-Attribute und die Beziehungen zwischen den Knoten. Umfangreiche DOM-Manipulationen nach dem Laden der Seiten (z.B. Hinzufügen, Löschen oder Verschieben von Knoten) können die Leistung beeinträchtigen, daher lohnt es sich zu verstehen, wie das DOM funktioniert und wie solche Probleme gemildert werden können. Finden Sie mehr heraus bei [Document Object Model](/de/docs/Web/API/Document_Object_Model).
- **Latenz**. Wir haben dies bereits kurz erwähnt, aber in Kürze, Latenz ist die Zeit, die es dauert, bis Ihre Website-Ressourcen vom Server zu einem Benutzercomputer reisen. Es gibt einen Overhead beim Aufbau von TCP- und HTTP-Verbindungen und einige unvermeidliche Latenzen beim Hin- und Herschicken der Anfrage- und Antwort-Bytes über das Netzwerk, aber es gibt bestimmte Möglichkeiten, die Latenz zu reduzieren (z.B. die Anzahl der HTTP-Anfragen zu reduzieren, indem weniger Dateien heruntergeladen werden, die Nutzung eines [CDN](/de/docs/Glossary/CDN), um Ihre Website weltweit leistungsfähiger zu machen, und die Verwendung von HTTP/2, um Dateien effizienter vom Server zu liefern). Sie können alles über dieses Thema bei [Latenz verstehen](/de/docs/Web/Performance/Understanding_latency) lesen.

## Fazit

Das war's für den Moment; wir hoffen, dass unser kurzer Überblick über das Thema Web-Performance Ihnen geholfen hat, eine Vorstellung davon zu bekommen, worum es geht, und Sie dazu ermutigt hat, mehr zu lernen. Als nächstes werden wir die wahrgenommene Leistung betrachten und wie Sie einige clevere Techniken verwenden können, um unvermeidbare Leistungseinbußen für den Benutzer weniger schwerwiegend erscheinen zu lassen oder sie vollständig zu verbergen.

{{PreviousMenuNext("Learn/Performance/why_web_performance", "Learn/Performance/Perceived_performance", "Learn/Performance")}}
