---
title: Das Web und Webstandards
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{learnsidebar}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web – wie es entstanden ist, was Webstandard-Technologien sind, wie sie zusammenarbeiten, warum "Webentwickler" eine großartige Berufswahl ist und welche Art von Best Practices Sie im Verlauf des Kurses kennenlernen werden.

## Kurze Geschichte des Webs

Wir halten dies sehr kurz, da es viele (detailliertere) Berichte über die Geschichte des Webs gibt, auf die wir später verlinken werden (versuchen Sie auch, in Ihrer bevorzugten Suchmaschine nach "Geschichte des Webs" zu suchen, wenn Sie an mehr Details interessiert sind).

Ende der 1960er Jahre entwickelte das US-Militär ein Kommunikationsnetzwerk namens [ARPANET](/de/docs/Glossary/Arpanet). Dies kann als Vorläufer des Webs betrachtet werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung der [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollsuite beinhaltete. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb Tim Berners-Lee (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knotenpunkten enthielt. Klingt bekannt?

Schnell vorwärts ins Jahr 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen boten zusammen den Hintergrund dafür, wie das Web funktionieren würde. Sie erhielten ein beträchtliches Interesse, genug, um TimBLs Vorgesetzte zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu entwickeln.

Ende 1990 hatte TimBL alles geschaffen, was nötig war, um die erste Version des Web zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen HTTP-Server und einige Webseiten zum Ansehen.

In den folgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, dem Einrichten Tausender von Webservern und der Erstellung von Millionen von Webseiten. Okay, das ist eine sehr einfache Zusammenfassung dessen, was passiert ist, aber wir haben Ihnen eine kurze Zusammenfassung versprochen.

Ein weiterer signifikanter Datenpunkt, den es zu teilen gilt, ist, dass TimBL 1994 das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) gründete, eine Organisation, die Vertreter vieler verschiedener Technologieunternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologie-Spezifikationen zu arbeiten. Danach folgten andere Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript), und das Web begann mehr so auszusehen, wie wir es heute kennen.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die Technologien verwendet, die sie beschreiben (deshalb haben wir Seiten wie MDN Web Docs), sondern sollen stattdessen von Software-Ingenieuren verwendet werden, um diese Technologien zu implementieren (in der Regel in Webbrowsern).

Zum Beispiel beschreibt der [HTML Living Standard](https://html.spec.whatwg.org/multipage/) genau, wie HTML (alle HTML-Elemente, und ihre zugehörigen APIs und andere umliegende Technologien) implementiert werden sollte.

Webstandards werden von Normungsorganisationen erstellt – Institutionen, die Gruppen von Menschen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darauf zu einigen, wie die Technologien am besten arbeiten sollten, um alle ihre Anwendungsfälle zu erfüllen. Das W3C ist die bekannteste Normungsorganisation für Webstandards, aber es gibt auch andere wie die [WHATWG](https://whatwg.org/) (die die Living Standards für die HTML-Sprache pflegen), [ECMA](https://ecma-international.org/) (die den Standard für ECMAScript veröffentlichen, auf dem JavaScript basiert), [Khronos](https://www.khronos.org/) (die Technologien für 3D-Grafik wie WebGL veröffentlichen) und andere.

### "Offene" Standards

Ein Schlüsselmerkmal der Webstandards, auf das sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) sowohl zur Mitwirkung als auch zur Nutzung frei sein sollten und nicht durch Patente/Lizenzen belastet werden sollten. Daher kann jeder den Code zum Erstellen einer Webseite kostenlos schreiben, und jeder kann zum Standardisierungsprozess beitragen, bei dem die Spezifikationen geschrieben werden.

Da Webtechnologien offen in Zusammenarbeit zwischen vielen verschiedenen Unternehmen erstellt werden, bedeutet dies, dass kein Unternehmen die Kontrolle über sie hat, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einziges Unternehmen plötzlich beschließt, das gesamte Web hinter eine Bezahlschranke zu stellen oder eine neue Version von HTML herauszubringen, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder schlimmer noch, einfach entscheidet, dass es nicht mehr interessiert ist und es einfach abschaltet.

Dies ermöglicht es, dass das Web ein frei zugängliches öffentliches Gut bleibt.

### Das Web nicht zerstören

Ein weiterer Satz, den Sie in Bezug auf offene Webstandards hören werden, ist "das Web nicht zerstören" — die Idee ist, dass jede neue Webtechnologie, die eingeführt wird, rückwärtskompatibel mit dem sein sollte, was davor war (d. h. alte Websites werden weiterhin funktionieren) und vorwärtskompatibel (zukünftige Technologien wiederum werden mit dem kompatibel sein, was wir derzeit haben). Während Sie die hier präsentierten Lernmaterialien durchgehen, werden Sie anfangen zu verstehen, wie dies durch sehr cleveres Design und Implementierungsarbeit möglich gemacht wird.

## Ein Webentwickler zu sein ist gut

Die Webbranche ist ein sehr attraktiver Markt, wenn Sie auf der Suche nach einem Job sind. Kürzlich veröffentlichte Zahlen zeigen, dass derzeit weltweit etwa 19 Millionen Webentwickler tätig sind, und diese Zahl sich in den nächsten zehn Jahren mehr als verdoppeln wird. Gleichzeitig gibt es einen Fachkräftemangel in der Branche – was könnte also eine bessere Zeit sein, um Webentwicklung zu lernen?

Es ist jedoch nicht alles Spaß und Spiel – das Erstellen von Websites ist ein komplizierteres Unterfangen als früher, und Sie müssen einige Zeit darauf verwenden, all die verschiedenen Technologien, die Sie verwenden müssen, zu studieren, alle Techniken und Best Practices, die Sie kennen müssen, und alle typischen Muster, die Sie implementieren sollen. Es wird einige Monate dauern, bis Sie wirklich in die Materie eintauchen, und dann müssen Sie kontinuierlich weiterlernen, damit Ihr Wissen mit all den neuen Tools und Funktionen, die auf der Webplattform erscheinen, auf dem neuesten Stand bleibt, und Ihr Handwerk weiter üben und verfeinern.

_Das einzig Beständige ist der Wandel._

Klingt das schwierig? Keine Sorge – wir haben das Ziel, Ihnen alles zu geben, was Sie brauchen, um zu starten, und es wird einfacher. Sobald Sie den ständigen Wechsel und die Unsicherheit des Webs umarmen, werden Sie anfangen, sich daran zu erfreuen. Als Teil der Web-Community haben Sie ein ganzes Netzwerk von Kontakten und nützliche Materialien, die Ihnen helfen, und Sie werden beginnen, die kreativen Möglichkeiten, die es bietet, zu schätzen.

Sie sind jetzt ein digitaler Kreativer. Genießen Sie die Erfahrung und das Potenzial, damit Ihren Lebensunterhalt zu verdienen.

## Überblick über moderne Webtechnologien

Es gibt eine Anzahl von Technologien, die Sie lernen müssen, wenn Sie ein Front-End-Webentwickler werden wollen. In diesem Abschnitt beschreiben wir sie kurz. Für eine detailliertere Erklärung, wie einige von ihnen zusammenarbeiten, lesen Sie unseren Artikel [Wie das Web funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Browser

Sie lesen diese Worte wahrscheinlich gerade in einem Webbrowser (es sei denn, Sie haben sie ausgedruckt oder verwenden Assistenztechnologie, wie einen Screenreader, um sie Ihnen vorzulesen). Webbrowser sind die Softwareprogramme, die Menschen verwenden, um im Web zu surfen, und umfassen [Firefox](https://www.mozilla.org/en-US/firefox/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/) und [Edge](https://www.microsoft.com/en-us/edge).

### HTTP

Hypertext Transfer Protocol, oder [HTTP](/de/docs/Web/HTTP/Basics_of_HTTP), ist ein Nachrichtenprotokoll, das es Webbrowsern ermöglicht, mit Webservern (wo Websites gespeichert sind) zu kommunizieren. Eine typische Konversation sieht ungefähr so aus:

```plain
"Hello web server. Can you give me the files I need to render bbc.co.uk"?

"Sure thing web browser — here you go"

[Downloads files and renders web page]
```

Die eigentliche Syntax für HTTP-Nachrichten (sogenannte Anfragen und Antworten) ist nicht sehr menschenlesbar, aber dies gibt Ihnen die grundlegende Idee.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die Haupttechnologien, die Sie zum Erstellen einer Website verwenden werden:

- HyperText Markup Language, oder **HTML**, ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, in die Sie Inhalte einwickeln (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht so aus:

  ```html
  <h1>This is a top-level heading</h1>

  <p>This is a paragraph of text.</p>

  <img src="cat.jpg" alt="A picture of my cat" />
  ```

  Wenn wir eine Hausbau-Analogie verwenden, wäre HTML wie das Fundament und die Wände des Hauses, die ihm Struktur verleihen und es zusammenhalten.

- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stile auf Ihr HTML anzuwenden – zum Beispiel, um Text- und Hintergrundfarben festzulegen, Ränder hinzuzufügen, Dinge zu animieren oder eine Seite auf eine bestimmte Weise anzuordnen. Als einfaches Beispiel würde der folgende Code unseren HTML-Absatz rot färben:

  ```css
  p {
    color: red;
  }
  ```

  In der Hausanalogie ist CSS wie die Farbe, Tapeten, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.

- **JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischem Stilwechsel über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript speichert eine Referenz auf unseren Absatz im Speicher und ändert den Text darin:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "We changed the text!";
  ```

  In der Hausanalogie ist JavaScript wie der Herd, Fernseher, Mikrowelle oder Föhn – die Dinge, die Ihrem Haus nützliche Funktionalität verleihen.

### Werkzeuge

Sobald Sie die "rohen" Technologien gelernt haben, die verwendet werden können, um Webseiten zu erstellen (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die verwendet werden können, um Ihre Arbeit einfacher oder effizienter zu gestalten. Beispiele umfassen:

- Die [Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die verwendet werden können, um Ihren Code zu debuggen.
- [Testwerkzeuge](/de/docs/Learn/Tools_and_testing/Cross_browser_testing), die verwendet werden können, um Tests durchzuführen, die zeigen, ob Ihr Code wie beabsichtigt funktioniert.
- Bibliotheken und Frameworks, die auf JavaScript aufbauen und Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte "Linters", die ein Regelwerk nehmen, Ihren Code betrachten und Stellen hervorheben, an denen Sie die Regeln nicht korrekt befolgt haben.
- Minifier, die alle Leerzeichen aus Ihren Code-Dateien entfernen, damit sie kleiner sind und daher schneller vom Server heruntergeladen werden können.

### Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Front-End-(oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Frontend zu produzieren, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die Back-End- (oder serverseitige) Sprachen genannt werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann an den Browser gesendet wird, um es anzuzeigen. Eine typische Verwendung für eine serverseitige Sprache ist das Abrufen von Daten aus einer Datenbank und das Generieren von HTML, um die Daten zu enthalten, bevor das HTML dann an den Browser gesendet wird, um es dem Benutzer anzuzeigen.

Beispiel für serverseitige Frameworks sind ASP.NET (in C#), Django (in Python), Laravel (in PHP) und Next.js (in JavaScript).

## Beste Praktiken im Web

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden werden. Lassen Sie uns nun über die Best Practices sprechen, die Sie anwenden sollten, um sicherzustellen, dass Sie diese Technologien auf die bestmögliche Weise nutzen.

Bei der Webentwicklung kommt die Hauptursache für Unsicherheit daher, dass Sie nicht wissen, welche Kombination von Technologien jeder Benutzer verwenden wird, um Ihre Website zu betrachten:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm betrachten.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem angeschlossenen Breitbildmonitor betrachten.
- Benutzer 3 könnte blind sein und einen Screenreader verwenden, um sich die Webseite vorlesen zu lassen.
- Benutzer 4 könnte einen wirklich alten Desktop-Computer verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten – machen Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle dasselbe Erlebnis erhalten. Kurz gesagt, wir versuchen, das Web für alle so weit wie möglich zugänglich zu machen.

Sie werden auf die folgenden Konzepte an einem bestimmten Punkt in Ihrem Studium stoßen.

- **Cross-Browser-Kompatibilität** ist die Praxis, sicherzustellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dies umfasst die Verwendung von Technologien, die alle Browser unterstützen, das Bereitstellen besserer Erfahrungen für Browser, die damit umgehen können (progressive Verbesserung) und/oder das Schreiben von Code, der auf eine einfachere, aber dennoch nutzbare Erfahrung in älteren Browsern zurückfällt (graceful degradation). Es beinhaltet auch viel Testen, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Responsives Webdesign** ist die Praxis, Ihre Funktionalität und Layouts so flexibel zu gestalten, dass sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die in einem Breitbildbrowser auf dem Desktop auf eine Weise angeordnet ist, aber in Mobiltelefon-Browsern als kompakteres, einspaltiges Layout angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters anzupassen, und sehen Sie, was passiert.
- **Performance** bedeutet, Websites so schnell wie möglich laden zu lassen, aber auch intuitiv und einfach zu bedienen, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Barrierefreiheit** bedeutet, Ihre Websites für möglichst viele verschiedene Arten von Menschen nutzbar zu machen (verwandte Konzepte sind Vielfalt und Inklusion sowie inklusives Design). Dies umfasst Menschen mit Sehbehinderungen, Hörbehinderungen, kognitiven Beeinträchtigungen oder körperlichen Behinderungen. Es geht auch über Menschen mit Behinderungen hinaus – wie wäre es mit jungen oder alten Menschen, Menschen aus verschiedenen Kulturen, Menschen, die mobile Geräte verwenden, oder Menschen mit unzuverlässigen oder langsamen Netzwerkverbindungen?
- **Internationalisierung** bedeutet, Websites für Menschen nutzbar zu machen, die aus verschiedenen Kulturen stammen und andere Sprachen sprechen als Sie. Hier gibt es technische Überlegungen (z. B. das Ändern Ihres Layouts, sodass es auch für Rechts-nach-Links- oder sogar vertikale Sprachen funktioniert) und menschliche Überlegungen (z. B. die Verwendung einfacher, nicht umgangssprachlicher Sprache, damit Menschen, die Ihre Sprache als zweite oder dritte Sprache haben, eher in der Lage sind, Ihren Text zu verstehen).
- **Datenschutz & Sicherheit**. Diese beiden Konzepte sind verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen zu ermöglichen, ihre Geschäfte privat zu erledigen und sie nicht auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website auf eine sichere Weise zu konstruieren, damit böswillige Benutzer keine Informationen darauf von Ihnen oder Ihren Benutzern stehlen können.

## Siehe auch

- [Geschichte des World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [Wie funktioniert das Internet?](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
