---
title: Das Web und Webstandards
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{learnsidebar}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web — wie es entstanden ist, was Webstandard-Technologien sind, wie sie zusammenarbeiten, warum "Webentwickler" ein großartiger Beruf ist, den man wählen sollte, und welche Arten von Best Practices Sie im Laufe des Kurses lernen werden.

## Kurze Geschichte des Webs

Wir halten dies sehr kurz, da es viele (detailliertere) Berichte über die Geschichte des Webs gibt, auf die wir später verlinken werden (versuchen Sie auch, "Geschichte des Webs" in Ihrer bevorzugten Suchmaschine zu suchen und zu sehen, was Sie erhalten, wenn Sie an mehr Details interessiert sind.)

Ende der 1960er Jahre entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des Webs betrachtet werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) arbeitete und die erste Implementierung des [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollstapels aufwies. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb Tim Berners-Lee (oft als TimBL bezeichnet) ein Notizprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knoten enthielt. Kommt Ihnen das bekannt vor?

Spulen wir vor ins Jahr 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen zusammen boten den Hintergrund dafür, wie das Web funktionieren würde. Sie erhielten ein beachtliches Interesse, genug, um TimBL's Vorgesetzte zu überzeugen, ihm die Erlaubnis zu geben, ein globales Hypertext-System zu schaffen.

Ende 1990 hatte TimBL alle notwendigen Dinge geschaffen, um die erste Version des Webs zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen HTTP-Server und einige Webseiten zum Anschauen.

In den folgenden Jahren explodierte das Web, mit mehreren veröffentlichten Browsern, tausenden aufgesetzten Webservern und Millionen erstellten Webseiten. Das ist eine sehr einfache Zusammenfassung dessen, was passiert ist, aber wir hatten Ihnen eine kurze Zusammenfassung versprochen.

Ein letzter wichtiger Datenpunkt, den es zu teilen gilt, ist, dass TimBL 1994 das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) gründete, eine Organisation, die Vertreter vieler verschiedener Technologieunternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologie-Spezifikationen zu arbeiten. Danach folgten andere Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript), und das Web begann, mehr wie das Web auszusehen, das wir heute kennen.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, die Spezifikationen genannt werden und genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb gibt es Seiten wie MDN Web Docs), sondern sind dazu gedacht, von Software-Ingenieuren verwendet zu werden, um diese Technologien zu implementieren (in der Regel in Webbrowsern).

Zum Beispiel beschreibt der [HTML Living Standard](https://html.spec.whatwg.org/multipage/) genau, wie HTML (alle HTML-Elemente, und ihre zugehörigen APIs und andere umliegende Technologien) implementiert werden sollten.

Webstandards werden von Normungsorganisationen erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darüber zu einigen, wie die Technologien am besten funktionieren sollten, um alle ihre Anwendungsfälle zu erfüllen. Das W3C ist die bekannteste Organisation für Webstandards, aber es gibt andere wie die [WHATWG](https://whatwg.org/) (die die lebenden Standards für die HTML-Sprache pflegen), [ECMA](https://ecma-international.org/) (die den Standard für ECMAScript veröffentlichen, auf dem JavaScript basiert), [Khronos](https://www.khronos.org/) (die Technologien für 3D-Grafiken veröffentlichen, wie WebGL) und andere.

### "Offene" Standards

Eines der Schlüsselelemente von Webstandards, dem TimBL und das W3C von Anfang an zugestimmt haben, ist, dass das Web (und Webtechnologien) frei sowohl zur Mitgestaltung als auch zur Nutzung sein sollten, und nicht durch Patente/Lizenzen belastet. Daher kann jeder den Code schreiben, um eine Website kostenlos zu erstellen, und jeder kann zum Prozess der Standarderstellung beitragen, bei dem die Spezifikationen geschrieben werden.

Da Webtechnologien offen, in Zusammenarbeit mit vielen verschiedenen Unternehmen erstellt werden, bedeutet das, dass kein Unternehmen sie kontrollieren kann, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einziges Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stellen, oder eine neue Version von HTML herausbringt, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder noch schlimmer, einfach entscheidet, dass es kein Interesse mehr hat und es einfach ausschaltet.

Dies ermöglicht es, das Web als frei verfügbares öffentliches Gut zu erhalten.

### Brechen Sie das Web nicht

Ein weiterer Satz, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist "Brechen Sie das Web nicht" — die Idee ist, dass jede neue Webtechnologie, die eingeführt wird, rückwärtskompatibel mit dem sein sollte, was davor war (d.h. alte Websites werden weiterhin funktionieren) und vorwärtskompatibel (zukünftige Technologien werden wiederum mit dem kompatibel sein, was wir derzeit haben). Während Sie das hier präsentierte Lernmaterial durchgehen, werden Sie lernen, wie dies durch sehr clevere Design- und Implementierungsarbeit ermöglicht wird.

## Webentwickler zu sein ist gut

Die Webbranche ist ein sehr attraktiver Markt, wenn Sie nach einem Job suchen. Kürzlich veröffentlichte Zahlen besagen, dass es derzeit etwa 19 Millionen Webentwickler auf der Welt gibt, und diese Zahl soll sich im nächsten Jahrzehnt mehr als verdoppeln. Gleichzeitig gibt es einen Fachkräftemangel in der Branche — was für eine bessere Zeit, Webentwicklung zu erlernen?

Es ist jedoch nicht alles Spaß und Spiel — Websites zu erstellen ist ein komplizierteres Unterfangen als früher, und Sie müssen ein bisschen Zeit investieren, um all die verschiedenen Technologien, die Sie verwenden müssen, alle Techniken und bewährten Verfahren, die Sie kennen müssen, und alle typischen Muster, die Sie umsetzen sollen, zu studieren. Es wird ein paar Monate dauern, bis Sie wirklich anfangen, sich damit auseinanderzusetzen, und dann müssen Sie weiter lernen, damit Ihr Wissen mit all den neuen Tools und Funktionen, die auf der Webplattform erscheinen, aktuell bleibt, und weiter üben und Ihre Kunst verfeinern.

_Das einzige Beständige ist der Wandel._

Klingt das schwer? Keine Sorge — wir geben Ihnen alles, was Sie wissen müssen, um anzufangen, und es wird leichter werden. Sobald Sie den ständigen Wandel und die Unsicherheit des Webs akzeptieren, werden Sie beginnen, es zu genießen. Als Teil der Web-Community haben Sie ein ganzes Netz von Kontakten und nützlichem Material, das Ihnen hilft, und Sie werden beginnen, die kreativen Möglichkeiten zu genießen, die es bietet.

Sie sind jetzt ein digitaler Kreativer. Genießen Sie die Erfahrung und die Möglichkeit, Ihren Lebensunterhalt zu verdienen.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien zu lernen, wenn Sie ein Frontend-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben. Für eine detailliertere Erklärung, wie einige von ihnen zusammenarbeiten, lesen Sie unseren Artikel [Wie das Web funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Browser

Sie lesen wahrscheinlich gerade in diesem Moment diese Worte in einem Webbrowser (es sei denn, Sie haben es ausgedruckt oder verwenden unterstützende Technologien wie einen Bildschirmleser, um es sich vorlesen zu lassen). Webbrowser sind die Softwareprogramme, die Menschen verwenden, um das Web zu konsumieren, und umfassen [Firefox](https://www.mozilla.org/en-US/firefox/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/) und [Edge](https://www.microsoft.com/en-us/edge).

### HTTP

Hypertext Transfer Protocol oder [HTTP](/de/docs/Web/HTTP) ist ein Nachrichtenprotokoll, das es Webbrowsern ermöglicht, mit Webservern (wo Websites gespeichert sind) zu kommunizieren. Ein typisches Gespräch verläuft in etwa so:

```plain
"Hello web server. Can you give me the files I need to render bbc.co.uk"?

"Sure thing web browser — here you go"

[Downloads files and renders web page]
```

Die tatsächliche Syntax für HTTP-Nachrichten (Requests und Responses genannt) ist nicht sehr menschenlesbar, aber dies gibt Ihnen die grundlegende Idee.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie verwenden, um eine Website zu erstellen:

- HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte umgeben (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht so aus:

  ```html
  <h1>This is a top-level heading</h1>

  <p>This is a paragraph of text.</p>

  <img src="cat.jpg" alt="A picture of my cat" />
  ```

  Wenn wir eine Hausbau-Analogie einführen, wäre HTML wie die Fundamente und Wände des Hauses, die es strukturieren und zusammenhalten.

- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die zur Anwendung von Stilen auf Ihr HTML verwendet wird — zum Beispiel das Festlegen von Text- und Hintergrundfarben, das Hinzufügen von Rahmen, das Animieren von Dingen oder das Gestalten einer Seite auf eine bestimmte Weise. Als Beispiel würde der folgende Code unseren HTML-Absatz rot färben:

  ```css
  p {
    color: red;
  }
  ```

  In der Hausanalogie ist CSS wie die Farbe, Tapeten, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.

- **JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischen Stilwechseln über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript wird eine Referenz zu unserem Absatz im Speicher speichern und den Text darin ändern:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "We changed the text!";
  ```

  In der Hausanalogie ist JavaScript wie der Herd, TV, Mikrowelle oder Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionen geben.

### Werkzeuge

Sobald Sie die "rohen" Technologien gelernt haben, die zum Erstellen von Webseiten verwendet werden können (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die Ihre Arbeit erleichtern oder effizienter machen können. Beispiele sind:

- Die [Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools), die in modernen Browsern enthalten sind und mit denen Sie Ihren Code debuggen können.
- [Testwerkzeuge](/de/docs/Learn/Tools_and_testing/Cross_browser_testing), die verwendet werden können, um Tests durchzuführen, um zu zeigen, ob Ihr Code so funktioniert, wie Sie es beabsichtigt haben.
- Bibliotheken und Frameworks, die auf JavaScript aufbauen und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- Sogenannte "Linters", die eine Reihe von Regeln nehmen, Ihren Code ansehen und Stellen hervorheben, an denen Sie die Regeln nicht richtig befolgt haben.
- Minifiers, die alle Leerzeichen aus Ihren Code-Dateien entfernen, um sicherzustellen, dass sie kleiner sind und daher schneller vom Server heruntergeladen werden.

### Server-seitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder clientseitige) Sprachen, das heißt, sie werden vom Browser ausgeführt, um ein Website-Frontend zu erzeugen, das Ihre Benutzer verwenden können.

Es gibt eine weitere Klasse von Sprachen, die als Backend- (oder serverseitige) Sprachen bezeichnet werden, das heißt, sie werden auf dem Server ausgeführt, bevor das Ergebnis dann zum Anzeigen an den Browser gesendet wird. Ein typischer Anwendungsfall für eine serverseitige Sprache ist es, Daten aus einer Datenbank abzurufen und etwas HTML zu generieren, das die Daten enthält, bevor dieses HTML dann an den Browser gesendet wird, um es dem Benutzer anzuzeigen.

Beispielhafte serverseitige Frameworks sind ASP.NET (in C#), Django (in Python), Laravel (in PHP) und Next.js (in JavaScript).

## Beste Praktiken für das Web

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden werden. Lassen Sie uns nun die besten Praktiken besprechen, die Sie anwenden sollten, um sicherzustellen, dass Sie diese Technologien auf die bestmögliche Weise verwenden.

Beim Webdevelopment ist die Hauptursache für Unsicherheit, dass Sie nicht wissen, mit welcher Kombination von Technologie jeder Benutzer Ihre Website ansehen wird:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm ansehen.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbildmonitor ansehen.
- Benutzer 3 könnte blind sein und einen Bildschirmleser verwenden, um sich die Webseite vorlesen zu lassen.
- Benutzer 4 könnte einen sehr alten Desktop-Computer verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, welcher Technologie Ihre Benutzer verwenden werden, müssen Sie defensiv entwerfen — machen Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Benutzer sie verwenden können, auch wenn sie möglicherweise nicht alle die gleiche Erfahrung machen. Kurz gesagt, wir versuchen, das Web für alle so gut wie möglich nutzbar zu machen.

Sie werden auf die folgenden Konzepte zu einem bestimmten Zeitpunkt in Ihrem Studium stoßen.

- **Browser-Kompatibilität** ist die Praxis, zu versuchen, sicherzustellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dies beinhaltet die Verwendung von Technologien, die alle Browser unterstützen, das Bereitstellen besserer Erlebnisse für Browser, die sie verarbeiten können (progressive Verbesserung), und/oder das Schreiben von Code, damit er auf eine einfachere, aber dennoch nutzbare Erfahrung in älteren Browsern zurückfällt (sanfte Verschlechterung). Es erfordert auch viel Testen, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Responsives Webdesign** ist die Praxis, Ihre Funktionalität und Layouts flexibel zu gestalten, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die auf einem Desktop-Browser auf eine Weise angeordnet ist, aber in mobilen Browsern als kompakteres Layout mit einer einzigen Spalte angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters zu ändern, und sehen Sie, was passiert.
- **Performance** bedeutet, Websites so schnell wie möglich zu laden, aber sie auch intuitiv und einfach zu bedienen zu machen, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Barrierefreiheit** bedeutet, Ihre Websites für so viele verschiedene Arten von Menschen wie möglich nutzbar zu machen (verwandte Konzepte sind Vielfalt und Inklusion sowie inklusives Design). Dies schließt Menschen mit Sehbehinderungen, Hörbehinderungen, kognitiven oder körperlichen Behinderungen ein. Es geht auch über Menschen mit Behinderungen hinaus — was ist mit jungen oder alten Menschen, Menschen aus verschiedenen Kulturen, Personen, die mobile Geräte verwenden, oder Personen mit instabilen oder langsamen Netzwerkverbindungen?
- **Internationalisierung** bedeutet, Websites für Menschen aus verschiedenen Kulturen nutzbar zu machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen (wie das Anpassen Ihres Layouts, damit es für von rechts nach links gelesene oder sogar vertikale Sprachen funktioniert) und menschliche Überlegungen (wie die Verwendung einfacher, nicht umgangssprachlicher Sprache, damit Menschen, die Ihre Sprache als zweite oder dritte Sprache haben, eher Ihren Text verstehen).
- **Datenschutz & Sicherheit**. Diese beiden Konzepte sind verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen zu ermöglichen, ihre Geschäfte privat zu führen und nicht auszuspionieren oder mehr Daten zu sammeln, als unbedingt notwendig. Sicherheit bezieht sich darauf, Ihre Website auf sichere Weise zu konstruieren, damit bösartige Benutzer keine Informationen, die darauf enthalten sind, von Ihnen oder Ihren Benutzern stehlen können.

## Siehe auch

- [Geschichte des World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [Wie funktioniert das Internet?](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
