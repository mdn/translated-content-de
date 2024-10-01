---
title: Das Web und Webstandards
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{learnsidebar}}

Dieser Artikel bietet nützliche Hintergrundinformationen über das Web — wie es entstanden ist, was Webstandard-Technologien sind, wie sie zusammenarbeiten, warum "Webentwickler" ein großartiger Beruf ist und welche Best Practices Sie im Laufe des Kurses kennen lernen werden.

## Kurze Geschichte des Webs

Wir werden dies sehr kurz halten, da es viele (detailliertere) Berichte über die Geschichte des Webs gibt, auf die wir später verweisen werden (versuchen Sie auch, "Geschichte des Webs" in Ihrer bevorzugten Suchmaschine zu suchen, wenn Sie an mehr Details interessiert sind).

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des Webs betrachtet werden, da es auf [Paketvermittlung](https://de.wikipedia.org/wiki/Paketvermittlung) basierte und die erste Implementierung des [TCP/IP](https://de.wikipedia.org/wiki/Internetprotokollfamilie) Protokollstapels aufwies. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

Im Jahr 1980 schrieb Tim Berners-Lee (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knoten aufwies. Klingt vertraut?

Springen Sie zu 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Publikationen zusammen lieferten den Hintergrund dafür, wie das Web funktionieren würde. Sie erhielten beträchtliches Interesse, genug, um TimBLs Vorgesetzte zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu erstellen.

Ende 1990 hatte TimBL alles geschaffen, was für den Betrieb der ersten Version des Webs erforderlich war — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://de.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen HTTP-Server und einige Webseiten, die es zu betrachten galt.

In den nächsten Jahren explodierte das Web, mit der Freigabe mehrerer Browser, der Einrichtung von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. Okay, das ist eine sehr einfache Zusammenfassung dessen, was passiert ist, aber wir haben Ihnen ja eine kurze Zusammenfassung versprochen.

Ein letzter bedeutender Datenpunkt, den es zu teilen gilt, ist, dass TimBL 1994 das [World Wide Web Consortium](https://de.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) gründete, eine Organisation, die Vertreter vieler verschiedener Technologieunternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologie-Spezifikationen zu arbeiten. Danach folgten weitere Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript), und das Web begann, mehr wie das Web auszusehen, das wir heute kennen.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die Technologien verwendet, die sie beschreiben (deshalb haben wir Seiten wie die MDN Web Docs), sondern sind vielmehr dazu gedacht, von Softwareingenieuren zur Implementierung dieser Technologien verwendet zu werden (meistens in Webbrowsern).

Zum Beispiel beschreibt der [HTML Living Standard](https://html.spec.whatwg.org/multipage/) genau, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs und andere umgebende Technologien) implementiert werden sollten.

Webstandards werden von Standardisierungsorganisationen erstellt — Institutionen, die Gruppen von Menschen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darauf zu einigen, wie die Technologien funktionieren sollten, um alle ihre Anwendungsfälle bestmöglich zu erfüllen. Das W3C ist die bekannteste Organisation für Webstandards, aber es gibt auch andere wie die [WHATWG](https://whatwg.org/) (die die lebenden Standards für die HTML-Sprache pflegen), [ECMA](https://ecma-international.org/) (die den Standard für ECMAScript veröffentlichen, auf dem JavaScript basiert), [Khronos](https://www.khronos.org/) (die Technologien für 3D-Grafik, wie etwa WebGL, veröffentlichen) und andere.

### "Offene" Standards

Einer der wichtigsten Aspekte von Webstandards, auf den sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und die Webtechnologien) sowohl frei nutzbar als auch beitragbar sein sollten und nicht durch Patente/Lizenzen belastet sein sollten. Daher kann jeder den Code schreiben, um eine Website kostenlos zu erstellen, und jeder kann zum Standardisierungsprozess beitragen, bei dem die Spezifikationen geschrieben werden.

Weil Webtechnologien offen in Zusammenarbeit zwischen vielen verschiedenen Unternehmen erstellt werden, bedeutet dies, dass kein einzelnes Unternehmen die Kontrolle über sie bekommt, was eine wirklich gute Sache ist. Man würde nicht wollen, dass ein einziges Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stellen oder eine neue Version von HTML herauszubringen, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder, noch schlimmer, einfach entscheidet, dass es nicht mehr interessiert ist, und es einfach abschaltet.

Dies ermöglicht es dem Web, eine frei verfügbare öffentliche Ressource zu bleiben.

### Das Web nicht kaputt machen

Eine weitere Phrase, die Sie in Bezug auf offene Webstandards hören werden, ist "das Web nicht kaputt machen" — die Idee ist, dass jede neue Webtechnologie, die eingeführt wird, abwärtskompatibel mit dem sein sollte, was vorher war (d.h. alte Websites weiterhin funktionieren werden) und vorwärtskompatibel (zukünftige Technologien wiederum kompatibel mit dem sein werden, was wir derzeit haben). Während Sie das hier präsentierte Lernmaterial durchgehen, werden Sie beginnen zu lernen, wie dies mit einigen sehr cleveren Design- und Implementierungsarbeiten möglich gemacht wird.

## Webentwickler zu sein ist gut

Die Webbranche ist ein sehr attraktiver Markt, wenn Sie auf Jobsuche sind. Kürzlich veröffentlichte Zahlen besagen, dass es derzeit etwa 19 Millionen Webentwickler weltweit gibt und diese Zahl sich im nächsten Jahrzehnt mehr als verdoppeln wird. Und zur gleichen Zeit gibt es einen Fachkräftemangel in der Branche — was für eine bessere Zeit, um Webentwicklung zu lernen?

Es ist jedoch nicht alles Spaß und Spiel — das Erstellen von Websites ist inzwischen eine kompliziertere Angelegenheit als früher, und Sie müssen Zeit investieren, um alle verschiedenen Technologien zu studieren, die Sie verwenden müssen, alle Techniken und Best Practices, die Sie kennen müssen, und alle typischen Muster, die Sie implementieren werden. Es wird ein paar Monate dauern, bis Sie wirklich hineinkommen, und dann müssen Sie ständig weiter lernen, damit Ihr Wissen mit allen neuen Werkzeugen und Funktionen auf der Webplattform auf dem neuesten Stand bleibt und Sie Ihre Fähigkeiten weiter üben und verfeinern.

_Das einzige Beständige ist der Wandel._

Klingt das schwer? Keine Sorge — wir sind hier, um Ihnen alles zu geben, was Sie brauchen, um loszulegen, und es wird einfacher werden. Sobald Sie den ständigen Wandel und die Ungewissheit des Webs akzeptieren, werden Sie anfangen, sich zu amüsieren. Als Teil der Web-Community haben Sie ein ganzes Netz von Kontakten und nützlichem Material, das Ihnen helfen wird, und Sie werden die kreativen Möglichkeiten genießen, die es mit sich bringt.

Sie sind jetzt ein digitaler Kreativer. Genießen Sie die Erfahrung und das Potenzial, damit Ihren Lebensunterhalt zu verdienen.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien zu lernen, wenn Sie ein Frontend-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben. Für eine detailliertere Erklärung, wie einige von ihnen zusammenarbeiten, lesen Sie unseren Artikel [Wie das Web funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Browser

Sie lesen diese Zeilen wahrscheinlich gerade in einem Webbrowser (es sei denn, Sie haben es ausgedruckt oder verwenden unterstützende Technologien wie einen Bildschirmleser, um es vorgelesen zu bekommen). Webbrowser sind die Softwareprogramme, die Menschen verwenden, um das Web zu konsumieren, und umfassen [Firefox](https://www.mozilla.org/en-US/firefox/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/) und [Edge](https://www.microsoft.com/en-us/edge).

### HTTP

Das Hypertext-Transfer-Protokoll oder [HTTP](/de/docs/Web/HTTP/Basics_of_HTTP) ist ein Nachrichtenprotokoll, das es Webbrowsern ermöglicht, mit Webservern zu kommunizieren (wo Websites gespeichert sind). Ein typisches Gespräch sieht ungefähr so aus:

```plain
"Hello web server. Can you give me the files I need to render bbc.co.uk"?

"Sure thing web browser — here you go"

[Downloads files and renders web page]
```

Die eigentliche Syntax für HTTP-Nachrichten (genannt Anfragen und Antworten) ist nicht besonders menschlich lesbar, aber dies gibt Ihnen die grundlegende Idee.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, mit denen Sie eine Website erstellen:

- HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, die sich aus verschiedenen Elementen zusammensetzt, in die Sie Inhalte einwickeln (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu verleihen. Einfaches HTML sieht so aus:

  ```html
  <h1>This is a top-level heading</h1>

  <p>This is a paragraph of text.</p>

  <img src="cat.jpg" alt="A picture of my cat" />
  ```

  Wenn wir eine Hausbau-Analogie verwenden, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.

- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stil auf Ihr HTML anzuwenden — zum Beispiel, Text- und Hintergrundfarben einstellen, Rahmen hinzufügen, Dinge animieren, oder eine Seite auf eine bestimmte Weise layouten. Als einfaches Beispiel würde der folgende Code unseren HTML-Absatz rot färben:

  ```css
  p {
    color: red;
  }
  ```

  In der Hausanalogie ist CSS wie die Farbe, Tapeten, Teppiche und Gemälde, die Sie verwenden, um das Haus schön aussehen zu lassen.

- **JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischem Stilwechsel bis hin zu Aktualisierungen vom Server abfragen, bis hin zu komplexer 3D-Grafik. Das folgende einfache JavaScript speichert eine Referenz zu unserem Absatz im Speicher und ändert den Text darin:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "We changed the text!";
  ```

  In der Hausanalogie ist JavaScript wie der Herd, der Fernseher, die Mikrowelle oder der Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionalität verleihen.

### Werkzeuge

Sobald Sie die "rohen" Technologien gelernt haben, mit denen Webseiten erstellt werden können (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die verwendet werden können, um Ihre Arbeit einfacher oder effizienter zu gestalten. Beispiele umfassen:

- Die [Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, mit denen Sie Ihren Code debuggen können.
- [Testwerkzeuge](/de/docs/Learn/Tools_and_testing/Cross_browser_testing), die verwendet werden können, um Tests durchzuführen, um zu zeigen, ob Ihr Code so funktioniert, wie Sie es beabsichtigt haben.
- JavaScript-Bibliotheken und -Frameworks, die es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- Sogenannte "Linters", die eine Reihe von Regeln nehmen, Ihren Code betrachten und dann Orte hervorheben, an denen Sie die Regeln nicht richtig befolgt haben.
- Minifier, die alle Leerzeichen aus Ihren Code-Dateien entfernen, um sie kleiner zu machen, damit sie schneller vom Server heruntergeladen werden.

### Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Frontend zu produzieren, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als Backend- (oder serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann zum Anzeigen an den Browser gesendet wird. Eine typische Verwendung für eine serverside Sprache besteht darin, einige Daten aus einer Datenbank abzurufen und einige HTML-Elemente zu generieren, um diese Daten zu enthalten, bevor dann das HTML an den Browser gesendet wird, um es dem Benutzer anzuzeigen.

Beispiele für serverseitige Frameworks sind ASP.NET (in C#), Django (in Python), Laravel (in PHP) und Next.js (in JavaScript).

## Web-Best-Practices

Wir haben kurz über die Technologien gesprochen, die Sie verwenden werden, um Websites zu erstellen. Nun lassen Sie uns über die Best Practices sprechen, die Sie verwenden sollten, um sicherzustellen, dass Sie diese Technologien bestmöglich nutzen.

Bei der Webentwicklung kommt die Hauptursache für Unsicherheit daher, dass Sie nicht wissen, welche Kombination von Technologien jeder Benutzer verwenden wird, um Ihre Website anzusehen:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm ansehen.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbild-Monitor betrachten.
- Benutzer 3 könnte blind sein und einen Bildschirmleser verwenden, um sich die Webseite vorlesen zu lassen.
- Benutzer 4 könnte einen wirklich alten Desktop-Rechner verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle die gleiche Erfahrung machen. Kurz gesagt, wir versuchen, das Web so gut wie möglich für alle nutzbar zu machen.

Im Laufe Ihrer Studien werden Sie auf die folgenden Konzepte stoßen.

- **Browser-Kompatibilität** ist die Praxis, zu versuchen, Ihre Webseite auf so vielen Geräten wie möglich funktionieren zu lassen. Dazu gehört die Verwendung von Technologien, die von allen Browsern unterstützt werden, bessere Erfahrungen in Browser zu liefern, die sie verarbeiten können (progressive Verbesserung), und/oder Code so zu schreiben, dass es auf eine einfachere, aber immer noch nutzbare Erfahrung in älteren Browsern zurückfallen kann (würdige Degradation). Es beinhaltet auch eine Menge Tests, um zu sehen, ob in bestimmten Browsern etwas fehlschlägt, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Responsive Webdesign** ist die Praxis, Ihre Funktionalitäten und Layouts so flexibel zu gestalten, dass sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die in einem Breitbild-Browser auf dem Desktop auf eine Weise ausgelegt ist, aber als kompakteres, einspaltiges Layout auf mobilen Telefonbrowsern angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters zu ändern und sehen Sie, was passiert.
- **Performance** bedeutet, Websites so schnell wie möglich zu laden, sie aber auch intuitiv und einfach zu bedienen zu machen, damit Benutzer sich nicht frustriert abwenden und woanders hingehen.
- **Barrierefreiheit** bedeutet, Ihre Website für so viele verschiedene Arten von Menschen wie möglich nutzbar zu machen (verwandte Konzepte sind Vielfalt und Inklusion sowie inklusives Design). Das umfasst Menschen mit Sehbehinderungen, Hörproblemen, kognitiven Beeinträchtigungen oder körperlichen Behinderungen. Es geht auch über Menschen mit Behinderungen hinaus — wie wäre es mit jungen oder alten Menschen, Menschen aus verschiedenen Kulturen, Menschen, die mobile Geräte nutzen, oder Menschen mit unsicheren oder langsamen Netzwerkverbindungen?
- **Internationalisierung** bedeutet, Websites für Menschen aus verschiedenen Kulturen, die andere Sprachen als Ihre sprechen, nutzbar zu machen. Es gibt hier technische Überlegungen (wie zum Beispiel Ihr Layout so zu ändern, dass es auch für von rechts nach links oder sogar vertikal verlaufende Sprachen funktioniert) und menschliche (wie zum Beispiel die Verwendung von einfacher, nicht umgangssprachlicher Sprache, damit Menschen, die Ihre Sprache als zweite oder dritte Sprache haben, eher in der Lage sind, Ihren Text zu verstehen).
- **Privatsphäre & Sicherheit**. Diese beiden Konzepte sind ähnlich, aber unterschiedlich. Privatsphäre bedeutet, Menschen die Möglichkeit zu geben, ihre Geschäfte privat zu erledigen und sie nicht auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie unbedingt benötigen. Sicherheit bedeutet, Ihre Website auf eine sichere Weise zu konstruieren, damit böswillige Benutzer keine Informationen darauf von Ihnen oder Ihren Benutzern stehlen können.

## Siehe auch

- [Geschichte des World Wide Web](https://de.wikipedia.org/wiki/Geschichte_des_Internet#World_Wide_Web)
- [Wie funktioniert das Internet?](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
