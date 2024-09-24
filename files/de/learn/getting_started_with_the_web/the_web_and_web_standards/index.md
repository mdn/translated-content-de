---
title: Das Web und Webstandards
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{learnsidebar}}

Dieser Artikel bietet nützliche Hintergrundinformationen zum Web – wie es entstanden ist, was Webstandard-Technologien sind, wie sie zusammenarbeiten, warum "Web-Entwickler" ein großartiger Beruf ist und welche Best Practices Sie im Laufe des Kurses kennenlernen werden.

## Kurze Geschichte des Webs

Wir halten dies sehr kurz, da es viele (detailliertere) Berichte über die Geschichte des Webs gibt, auf die wir später verweisen werden (versuchen Sie auch, in Ihrer bevorzugten Suchmaschine nach "Geschichte des Webs" zu suchen, um mehr Details zu erfahren, wenn Sie interessiert sind).

Ende der 1960er Jahre entwickelte das US-Militär ein Kommunikationsnetzwerk namens [ARPANET](/de/docs/Glossary/Arpanet). Dies kann als Vorläufer des Webs betrachtet werden, da es auf [Paketschaltung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung des [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollstapels beinhaltete. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb Tim Berners-Lee (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knoten enthielt. Kommt Ihnen das bekannt vor?

1989 schrieb TimBL [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen gemeinsam bildeten den Hintergrund für die Funktionsweise des Webs. Sie erhielten einiges Interesse, genug, um TimBLs Vorgesetzte davon zu überzeugen, ihm die Erlaubnis zu geben, ein globales Hypertext-System zu erstellen.

Ende 1990 hatte TimBL alle notwendigen Dinge geschaffen, um die erste Version des Webs zu betreiben – [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen HTTP-Server und einige Webseiten zum Anschauen.

In den nächsten Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung tausender Webserver und der Erstellung von Millionen von Webseiten. OK, das ist eine sehr einfache Zusammenfassung dessen, was passiert ist, aber wir haben Ihnen ja eine kurze Zusammenfassung versprochen.

Ein letzter bedeutender Punkt ist, dass TimBL 1994 das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) gründete, eine Organisation, die Vertreter vieler verschiedener Technologieunternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologie-Spezifikationen zu arbeiten. Danach folgten andere Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript), und das Web begann, mehr so auszusehen, wie wir es heute kennen.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau beschreiben, wie die Technologie funktionieren soll. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb gibt es Seiten wie MDN Web Docs), sondern sollen Software-Ingenieure dabei unterstützen, diese Technologien zu implementieren (gewöhnlich in Webbrowsern).

Zum Beispiel beschreibt der [lebende HTML-Standard](https://html.spec.whatwg.org/multipage/) genau, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs sowie andere umgebende Technologien) implementiert werden sollte.

Webstandards werden von Normungsorganisationen erstellt – Einrichtungen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und darüber zu entscheiden, wie die Technologien am besten funktionieren sollten, um alle ihre Anwendungsfälle zu erfüllen. Das W3C ist die bekannteste Web-Normungsorganisation, aber es gibt andere wie die [WHATWG](https://whatwg.org/) (die die lebenden Standards für die HTML-Sprache pflegen), [ECMA](https://ecma-international.org/) (die den Standard für ECMAScript veröffentlichen, auf dem JavaScript basiert), [Khronos](https://www.khronos.org/) (die Technologien für 3D-Grafiken, wie WebGL, veröffentlichen) und andere.

### "Offene" Standards

Einer der Schlüsselaspekte von Webstandards, auf den sich TimBL und das W3C von Anfang an einigten, ist, dass das Web (und Webtechnologien) sowohl zur Mitwirkung als auch zur Nutzung kostenlos sein sollten, und nicht durch Patente/Lizenzen belastet werden. Daher kann jeder kostenlos den Code schreiben, um eine Website zu erstellen, und jeder kann am Standardschaffungsprozess mitwirken, bei dem die Spezifikationen geschrieben werden.

Da Webtechnologien offen in Zusammenarbeit zwischen vielen verschiedenen Unternehmen erstellt werden, bedeutet dies, dass kein einziges Unternehmen die Kontrolle über sie hat, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einziges Unternehmen plötzlich beschließt, das gesamte Web hinter einer Bezahlschranke zu verstecken, oder eine neue Version von HTML herauszubringen, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder schlimmer noch, einfach entscheidet, dass es nicht mehr interessiert ist und es einfach abschaltet.

Dies ermöglicht es dem Web, als frei zugängliche öffentliche Ressource erhalten zu bleiben.

### Brechen Sie das Web nicht

Ein weiterer Ausdruck, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist "Brechen Sie das Web nicht" – die Idee ist, dass jede neue Webtechnologie, die eingeführt wird, rückwärtskompatibel mit dem sein sollte, was davor war (d. h. alte Websites werden weiterhin funktionieren), und vorwärtskompatibel (zukünftige Technologien werden wiederum mit dem kompatibel sein, was wir derzeit haben). Wenn Sie das hier vorgestellte Lernmaterial durcharbeiten, werden Sie anfangen zu verstehen, wie dies mit sehr cleverer Design- und Implementierungsarbeit möglich gemacht wird.

## Webentwickler zu sein ist gut

Die Webindustrie ist ein sehr attraktiver Markt, wenn Sie auf der Suche nach einem Job sind. Aktuelle veröffentlichte Zahlen sagen, dass es derzeit weltweit etwa 19 Millionen Webentwickler gibt, und diese Zahl sich im nächsten Jahrzehnt mehr als verdoppeln soll. Gleichzeitig gibt es einen Fachkräftemangel in der Branche – also was könnte ein besserer Zeitpunkt sein, um Webentwicklung zu lernen?

Es ist jedoch nicht alles nur Spaß und Spiele – das Erstellen von Websites ist eine kompliziertere Angelegenheit als früher, und Sie müssen einige Zeit investieren, um all die verschiedenen Technologien, die Sie verwenden müssen, all die Techniken und Best Practices, die Sie kennen müssen, und all die typischen Muster, die Sie umsetzen müssen, zu studieren. Es wird einige Monate dauern, bis Sie wirklich anfangen, sich einzuarbeiten, und dann müssen Sie ständig weiterlernen, damit Ihr Wissen mit all den neuen Werkzeugen und Funktionen, die auf der Webplattform erscheinen, auf dem neuesten Stand bleibt, und Ihre Fähigkeiten weiter üben und verfeinern.

_Die einzige Konstante ist der Wandel._

Klingt das schwer? Machen Sie sich keine Sorgen – wir möchten Ihnen alles geben, was Sie wissen müssen, um anzufangen, und die Dinge werden einfacher. Sobald Sie den ständigen Wandel und die Unsicherheit des Webs akzeptieren, werden Sie anfangen, es zu genießen. Als Teil der Web-Community haben Sie ein ganzes Netz von Kontakten und nützlichem Material, das Ihnen hilft, und Sie werden anfangen, die kreativen Möglichkeiten zu genießen, die es mit sich bringt.

Sie sind jetzt ein digitaler Kreativer. Genießen Sie die Erfahrung und das Potenzial, damit Ihren Lebensunterhalt zu verdienen.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen müssen, wenn Sie Front-End-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben. Für eine ausführlichere Erklärung, wie einige von ihnen zusammenarbeiten, lesen Sie unseren Artikel [Wie das Web funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Browser

Sie lesen diese Worte wahrscheinlich gerade in einem Webbrowser (es sei denn, Sie haben sie ausgedruckt oder verwenden eine unterstützende Technologie wie einen Bildschirmleser, um sie sich vorlesen zu lassen). Webbrowser sind die Softwareprogramme, die Menschen verwenden, um das Web zu nutzen, und umfassen [Firefox](https://www.mozilla.org/en-US/firefox/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/) und [Edge](https://www.microsoft.com/en-us/edge).

### HTTP

Hypertext Transfer Protocol, oder [HTTP](/de/docs/Web/HTTP/Basics_of_HTTP), ist ein Nachrichtenprotokoll, das es Webbrowsern ermöglicht, mit Webservern zu kommunizieren (wo Websites gespeichert sind). Ein typisches Gespräch verläuft ungefähr so:

```plain
"Hallo Webserver. Können Sie mir die Dateien geben, die ich benötige, um bbc.co.uk anzuzeigen"?

"Klar, Webbrowser — hier, bitte sehr"

[Dateien werden heruntergeladen und die Webseite angezeigt]
```

Die tatsächliche Syntax für HTTP-Nachrichten (sogenannte Anfragen und Antworten) ist nicht so menschenlesbar, aber das gibt Ihnen eine grundlegende Vorstellung.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie verwenden werden, um eine Website zu bauen:

- HyperText Markup Language, oder **HTML**, ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, in die Sie Inhalte einbetten (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht so aus:

  ```html
  <h1>Dies ist eine Überschrift der höchsten Ebene</h1>

  <p>Dies ist ein Absatz Text.</p>

  <img src="cat.jpg" alt="Ein Bild meiner Katze" />
  ```

  Wenn wir eine Hausbau-Analogie übernehmen, wäre HTML wie das Fundament und die Wände des Hauses, die ihm Struktur geben und es zusammenhalten.

- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stile auf Ihr HTML anzuwenden – zum Beispiel, um Text- und Hintergrundfarben festzulegen, Rahmen hinzuzufügen, Dinge zu animieren oder eine Seite auf eine bestimmte Weise anzuordnen. Ein einfaches Beispiel: Der folgende Code würde unseren HTML-Absatz rot färben:

  ```css
  p {
    color: red;
  }
  ```

  In der Haus-Analogie sind CSS wie die Farben, Tapeten, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.

- **JavaScript** ist die Programmiersprache, die wir verwenden, um Websites Interaktivität hinzuzufügen, von dynamischen Stilwechseln über das Abrufen von Aktualisierungen vom Server bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript speichert eine Referenz auf unseren Absatz im Speicher und ändert den darin enthaltenen Text:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "Wir haben den Text geändert!";
  ```

  In der Haus-Analogie ist JavaScript wie der Herd, der Fernseher, die Mikrowelle oder der Haartrockner – die Dinge, die Ihrem Haus nützliche Funktionalität geben.

### Werkzeuge

Sobald Sie die "rohen" Technologien gelernt haben, mit denen man Webseiten erstellen kann (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die Ihre Arbeit erleichtern oder effizienter machen können. Beispiele sind:

- Die [Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die zum Debuggen Ihres Codes verwendet werden können.
- [Testwerkzeuge](/de/docs/Learn/Tools_and_testing/Cross_browser_testing), die verwendet werden können, um Tests durchzuführen, die zeigen, ob Ihr Code wie beabsichtigt funktioniert.
- Bibliotheken und Frameworks, die auf JavaScript aufgebaut sind und es ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte "Linter", die eine Reihe von Regeln nehmen, Ihren Code betrachten und Stellen hervorheben, an denen Sie die Regeln nicht korrekt befolgt haben.
- Minifizierer, die alle Leerzeichen aus Ihren Code-Dateien entfernen, um sie kleiner zu machen und sie daher schneller vom Server herunterzuladen.

### Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Front-End- (oder Client-Seiten-) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Frontend zu produzieren, das Ihre Nutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, sogenannte Back-End- (oder Server-Seiten-) Sprachen, die auf dem Server ausgeführt werden, bevor das Ergebnis dann an den Browser gesendet wird, um es anzuzeigen. Eine typische Anwendung für eine serverseitige Sprache besteht darin, einige Daten aus einer Datenbank abzurufen und etwas HTML zu generieren, das die Daten enthält, bevor das HTML dann an den Browser gesendet wird, um es dem Nutzer anzuzeigen.

Beispielhafte serverseitige Frameworks umfassen ASP.NET (in C#), Django (in Python), Laravel (in PHP) und Next.js (in JavaScript).

## Web-Best-Practices

Wir haben kurz die Technologien besprochen, die Sie zum Erstellen von Websites verwenden werden. Jetzt besprechen wir die Best Practices, die Sie anwenden sollten, um sicherzustellen, dass Sie diese Technologien bestmöglich einsetzen.

Beim Webentwickeln stammt die Hauptursache für Unsicherheit oft von der Tatsache, dass Sie nicht wissen, welche Kombination von Technologie jeder Nutzer verwenden wird, um Ihre Website anzusehen:

- Nutzer 1 könnte es auf einem iPhone mit einem kleinen, schmalen Bildschirm betrachten.
- Nutzer 2 könnte es auf einem Windows-Laptop mit einem angeschlossenen Breitbildmonitor ansehen.
- Nutzer 3 könnte blind sein und einen Bildschirmleser verwenden, um sich die Webseite vorlesen zu lassen.
- Nutzer 4 könnte einen sehr alten Desktop-Computer verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Nutzer verwenden werden, müssen Sie defensiv gestalten – machen Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Nutzer sie verwenden können, auch wenn sie möglicherweise nicht alle dieselbe Erfahrung machen. Kurz gesagt, wir versuchen, das Web für alle so gut wie möglich funktionieren zu lassen.

Sie werden während Ihres Studiums auf die folgenden Konzepte stoßen.

- **Cross-Browser-Kompatibilität** ist die Praxis, sicherzustellen, dass Ihre Webseite auf so vielen Geräten wie möglich funktioniert. Dies umfasst die Verwendung von Technologien, die alle Browser unterstützen, das Bereitstellen besserer Erfahrungen für Browser, die sie handhaben können (progressive Verbesserung), und/oder das Schreiben von Code, der auf eine einfachere, aber immer noch nutzbare Erfahrung in älteren Browsern zurückfällt (Gleitender Rückschritt). Es umfasst auch viele Tests, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann weitere Arbeit, um diese Fehler zu beheben.
- **Responsives Webdesign** ist die Praxis, Ihre Funktionalitäten und Layouts flexibel zu gestalten, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die auf einem Breitbildbrowser auf dem Desktop auf eine bestimmte Weise angeordnet ist, aber in mobilen Browsern in einem kompakteren einspaltigen Layout angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters anzupassen, und sehen Sie, was passiert.
- **Performance** bedeutet, Websites so schnell wie möglich zu laden, aber auch intuitiv und benutzerfreundlich zu gestalten, damit Nutzer nicht frustriert werden und woanders hingehen.
- **Zugänglichkeit** bedeutet, dass Ihre Websites von möglichst vielen verschiedenen Menschen verwendet werden können (verwandte Konzepte sind Vielfalt und Inklusion sowie inklusives Design). Dazu gehören Menschen mit Sehbehinderungen, Hörbehinderungen, kognitiven Behinderungen oder körperlichen Behinderungen. Aber es geht über Menschen mit Behinderungen hinaus – wie wäre es mit jungen oder alten Menschen, Menschen aus verschiedenen Kulturen, Menschen, die mobile Geräte verwenden, oder Menschen mit unzuverlässigen oder langsamen Netzwerkverbindungen?
- **Internationalisierung** bedeutet, Websites für Menschen aus verschiedenen Kulturen nutzbar zu machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen (wie das Anpassen Ihres Layouts, damit es auch für von rechts nach links verlaufende oder vertikale Sprachen funktioniert), und menschliche (wie das Verwenden von einfachem, nicht umgangssprachlichem Englisch, sodass Menschen, die Ihre Sprache als zweite oder dritte Sprache haben, Ihr Text besser verstehen können).
- **Datenschutz & Sicherheit**. Diese beiden Konzepte sind miteinander verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen es zu ermöglichen, ihr Geschäft privat zu erledigen und sie nicht auszuspionieren oder mehr Daten von ihnen zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website auf eine sichere Weise zu gestalten, sodass böswillige Nutzer keine Informationen darauf von Ihnen oder Ihren Nutzern stehlen können.

## Siehe auch

- [Geschichte des World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [Wie funktioniert das Internet?](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
