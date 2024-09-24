---
title: Das Web und Webstandards
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{learnsidebar}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web — wie es entstanden ist, was Webstandardtechnologien sind, wie sie zusammenarbeiten, warum "Webentwickler" ein großartiger Beruf ist und welche Best Practices Sie im Laufe des Kurses lernen werden.

## Kurze Geschichte des Webs

Wir halten dies sehr kurz, da es viele (ausführlichere) Berichte über die Geschichte des Webs gibt, auf die wir später verlinken werden (versuchen Sie auch, in Ihrer bevorzugten Suchmaschine nach "Geschichte des Webs" zu suchen und zu sehen, was Sie finden, wenn Sie mehr Details wünschen).

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des Webs betrachtet werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung des [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) Protokollstapels aufwies. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb Tim Berners-Lee (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knotenpunkten enthielt. Klingt bekannt?

Springen wir vor ins Jahr 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen zusammen bildeten den Hintergrund dafür, wie das Web funktionieren sollte. Sie erzeugten ausreichend Interesse, um TimBLs Chefs zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu schaffen.

Ende 1990 hatte TimBL alles geschaffen, was nötig war, um die erste Version des Webs zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen HTTP-Server und einige Webseiten zum Betrachten.

In den folgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. OK, das ist eine sehr einfache Zusammenfassung dessen, was passiert ist, aber wir haben Ihnen ein kurzes Resümee versprochen.

Ein letzter wichtiger Datenpunkt: 1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter vieler verschiedener Technologieunternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologiespezifikationen zu arbeiten. Danach folgten andere Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript), und das Web begann, mehr wie das Web auszusehen, das wir heute kennen.

## Webstandards

**Webstandards** sind die Technologien, die wir nutzen, um Websites zu erstellen. Diese Standards existieren als lange technische Dokumente, die Spezifikationen genannt werden und genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie die Technologien genutzt werden (deshalb gibt es Websites wie MDN Web Docs), sondern sollen von Softwareingenieuren genutzt werden, um diese Technologien zu implementieren (in der Regel in Webbrowsern).

Zum Beispiel beschreibt der [HTML Living Standard](https://html.spec.whatwg.org/multipage/) genau, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs und andere umgebende Technologien) implementiert werden sollte.

Webstandards werden von Standardisierungsorganisationen erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich auf die beste Arbeitsweise der Technologien zu einigen, um alle ihre Anwendungsfälle zu erfüllen. Der W3C ist die bekannteste Webstandardsorganisation, aber es gibt auch andere wie die [WHATWG](https://whatwg.org/) (die die Living Standards für die HTML-Sprache verwalten), [ECMA](https://ecma-international.org/) (die den Standard für ECMAScript veröffentlichen, auf dem JavaScript basiert), [Khronos](https://www.khronos.org/) (die Technologien für 3D-Grafiken veröffentlichen, wie WebGL) und andere.

### „Offene“ Standards

Ein zentraler Aspekt der Webstandards, auf den sich TimBL und das W3C von Anfang an einigten, ist, dass das Web (und Webtechnologien) sowohl kostenfrei nutzbar als auch beitragbar sein sollte und nicht durch Patente/Lizenzen belastet werden darf. Jeder kann also den Code schreiben, um eine Website kostenlos zu erstellen, und jeder kann zum Prozess der Standardserstellung beitragen, in dem die Spezifikationen geschrieben werden.

Da Webtechnologien offen in Zusammenarbeit vieler verschiedener Unternehmen erstellt werden, bedeutet dies, dass kein einzelnes Unternehmen die Kontrolle über sie erlangt, was sehr gut ist. Sie würden nicht wollen, dass ein einzelnes Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stellen, oder eine neue Version von HTML herausbringt, die jeder kaufen muss, um weiter Websites zu erstellen, oder noch schlimmer, einfach entscheidet, dass sie kein Interesse mehr haben und es einfach abschalten.

Dies ermöglicht es dem Web, eine frei zugängliche öffentliche Ressource zu bleiben.

### Brechen Sie das Web nicht

Ein weiterer Ausdruck, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist „brechen Sie das Web nicht“ — die Idee ist, dass jede neue Webtechnologie, die eingeführt wird, sowohl rückwärtskompatibel mit dem sein sollte, was davor kam (d. h. alte Websites sollten weiterhin funktionieren), als auch vorwärtskompatibel (zukünftige Technologien wiederum kompatibel mit dem sind, was wir derzeit haben). Während Sie die hier präsentierten Lernmaterialien durcharbeiten, werden Sie beginnen zu verstehen, wie dies durch einige sehr clevere Design- und Implementierungsarbeiten möglich gemacht wird.

## Ein Webentwickler sein ist gut

Die Webindustrie ist ein sehr attraktiver Markt, wenn Sie auf der Suche nach einem Job sind. Kürzlich veröffentlichte Zahlen besagen, dass es derzeit weltweit etwa 19 Millionen Webentwickler gibt, und dass sich diese Zahl im nächsten Jahrzehnt mehr als verdoppeln wird. Gleichzeitig gibt es einen Mangel an Fachkräften in der Branche — was ist also ein besserer Zeitpunkt, um Webentwicklung zu lernen?

Es ist jedoch nicht alles Spaß und Spiel — das Erstellen von Websites ist eine kompliziertere Angelegenheit als früher, und Sie müssen Zeit damit verbringen, alle verschiedenen Technologien zu studieren, die Sie verwenden müssen, alle Techniken und Best Practices, die Sie kennen müssen, und alle typischen Muster, die Sie umsetzen werden. Es wird ein paar Monate dauern, bis Sie wirklich hineinkommen, und dann müssen Sie weiter lernen, damit Ihr Wissen auf dem neuesten Stand bleibt mit all den neuen Tools und Funktionen, die auf der Webplattform erscheinen, und kontinuierlich üben und Ihre Fähigkeiten verfeinern.

_Das Einzige, was konstant ist, ist der Wandel._

Klingt das schwierig? Keine Sorge — wir beabsichtigen, Ihnen alles zu bieten, was Sie wissen müssen, um anzufangen, und mit der Zeit wird es einfacher. Sobald Sie den ständigen Wandel und die Unsicherheit des Webs akzeptieren, werden Sie anfangen, es zu genießen. Als Teil der Web-Community werden Sie ein ganzes Netzwerk von Kontakten und nützliches Material haben, das Ihnen hilft, und Sie werden beginnen, die kreativen Möglichkeiten zu genießen, die es bietet.

Sie sind jetzt ein digitaler Kreativer. Genießen Sie die Erfahrung und das Potenzial, damit Ihren Lebensunterhalt zu verdienen.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen müssen, wenn Sie ein Front-End-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben. Für eine detailliertere Erklärung, wie einige von ihnen zusammenarbeiten, lesen Sie unseren Artikel [Wie das Web funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

### Browser

Sie lesen wahrscheinlich gerade diesen Text in einem Webbrowser (es sei denn, Sie haben ihn ausgedruckt oder verwenden unterstützende Technologie wie einen Bildschirmleser, um ihn sich vorlesen zu lassen). Webbrowser sind Softwareprogramme, die Menschen verwenden, um das Web zu nutzen, und umfassen [Firefox](https://www.mozilla.org/en-US/firefox/), [Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Safari](https://www.apple.com/safari/) und [Edge](https://www.microsoft.com/en-us/edge).

### HTTP

Das Hypertext Transfer Protocol, oder [HTTP](/de/docs/Web/HTTP), ist ein Nachrichtenprotokoll, das es Webbrowsern ermöglicht, mit Webservern zu kommunizieren (wo Websites gespeichert sind). Ein typisches Gespräch verläuft etwa so:

```plain
"Hello web server. Can you give me the files I need to render bbc.co.uk"?

"Sure thing web browser — here you go"

[Downloads files and renders web page]
```

Die tatsächliche Syntax für HTTP-Nachrichten (genannt Anfragen und Antworten) ist nicht besonders menschenlesbar, aber das gibt Ihnen die grundlegende Idee.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie verwenden werden, um eine Website zu erstellen:

- HyperText Markup Language, oder **HTML**, ist eine Markup-Sprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte umwickeln (markieren) können, um ihnen Bedeutung (Semantik) und Struktur zu verleihen. Einfaches HTML sieht so aus:

  ```html
  <h1>This is a top-level heading</h1>

  <p>This is a paragraph of text.</p>

  <img src="cat.jpg" alt="A picture of my cat" />
  ```

  Wenn wir eine Hausbau-Analogie anwenden, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.

- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stile auf Ihr HTML anzuwenden — zum Beispiel das Setzen von Text- und Hintergrundfarben, das Hinzufügen von Rändern, das Animieren von Objekten oder das Layout einer Seite auf eine bestimmte Weise. Ein einfaches Beispiel: Der folgende Code würde unseren HTML-Absatz rot färben:

  ```css
  p {
    color: red;
  }
  ```

  In der Hausanalogie wäre CSS wie die Farbe, Tapeten, Teppiche und Gemälde, die verwendet werden, um das Haus schön aussehen zu lassen.

- **JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischem Stilwechsel bis zum Abrufen von Updates vom Server, bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript speichert eine Referenz zu unserem Absatz im Speicher und ändert den darin enthaltenen Text:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "We changed the text!";
  ```

  In der Hausanalogie ist JavaScript wie der Herd, Fernseher, Mikrowelle oder Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionalität verleihen.

### Werkzeuge

Sobald Sie die "rohen" Technologien gelernt haben, mit denen Sie Webseiten erstellen können (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die Ihnen helfen können, Ihre Arbeit einfacher oder effizienter zu gestalten. Beispiele umfassen:

- Die [Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die verwendet werden können, um Ihren Code zu debuggen.
- [Testwerkzeuge](/de/docs/Learn/Tools_and_testing/Cross_browser_testing), die verwendet werden können, um Tests durchzuführen, um zu zeigen, ob sich Ihr Code so verhält, wie Sie es beabsichtigt haben.
- Bibliotheken und Frameworks, die auf JavaScript basieren und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- Sogenannte "Linters", die eine Reihe von Regeln aufnehmen, Ihren Code durchsuchen und Stellen hervorheben, an denen Sie die Regeln nicht richtig befolgt haben.
- Minifizierer, die den gesamten Leerraum aus Ihren Code-Dateien entfernen, damit sie kleiner sind und daher schneller vom Server heruntergeladen werden.

### Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder Client-seitige) Sprachen, das heißt, sie werden vom Browser ausgeführt, um ein Website-Frontend zu erzeugen, das Ihre Benutzer nutzen können.

Es gibt eine andere Klasse von Sprachen, die Backend- (oder Serverseitige) Sprachen genannt werden, das heißt, sie werden auf dem Server ausgeführt, bevor das Ergebnis dann an den Browser gesendet wird, um es anzuzeigen. Eine typische Verwendung für eine serverseitige Sprache besteht darin, Daten aus einer Datenbank abzurufen und HTML zu generieren, das die Daten enthält, bevor das HTML dann zum Browser zum Anzeigen an den Benutzer gesendet wird.

Beispiele für serverseitige Frameworks sind ASP.NET (in C#), Django (in Python), Laravel (in PHP) und Next.js (in JavaScript).

## Beste Webpraktiken

Wir haben kurz über die Technologien gesprochen, die Sie verwenden werden, um Websites zu erstellen. Lassen Sie uns nun die Best Practices diskutieren, die Sie anwenden sollten, um sicherzustellen, dass Sie diese Technologien auf die beste Weise nutzen, die Sie können.

Beim Webentwicklung ist die Hauptursache für Unsicherheit die Tatsache, dass Sie nicht wissen, welche Kombination von Technologien jeder Nutzer verwenden wird, um Ihre Website anzusehen:

- Nutzer 1 sieht sie möglicherweise auf einem iPhone mit einem kleinen, schmalen Bildschirm an.
- Nutzer 2 sieht sie möglicherweise auf einem Windows-Laptop mit angeschlossenem Breitbildmonitor.
- Nutzer 3 ist möglicherweise blind und verwendet einen Bildschirmleser, um die Webseite vorzulesen.
- Nutzer 4 nutzt möglicherweise einen wirklich alten Desktop-Rechner, der moderne Browser nicht ausführen kann.

Da Sie nicht genau wissen, welche Technologien Ihre Nutzer verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Website so flexibel wie möglich, damit all die oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle die gleiche Erfahrung machen. Kurz gesagt, wir versuchen, das Web so gut wie möglich für alle zugänglich zu machen.

Sie werden im Laufe Ihres Studiums auf die folgenden Konzepte stoßen.

- **Browser-Kompatibilität** ist die Praxis, sicherzustellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dazu gehört die Verwendung von Technologien, die von allen Browsern unterstützt werden, das Bereitstellen besserer Erlebnisse für Browser, die sie bewältigen können (progressive Verbesserung), und/oder das Schreiben von Code, der zu einer einfacheren, aber dennoch benutzbaren Erfahrung in älteren Browsern zurückfällt (gleitende Verschlechterung). Es beinhaltet auch viel Testen, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Responsive Webdesign** ist die Praxis, Ihre Funktionalität und Layouts flexibel zu gestalten, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die in einem Browser am Desktop auf eine Weise gestaltet ist, aber in einem kompakteren, einspaltigen Layout auf mobilen Telefonbrowsern dargestellt wird. Versuchen Sie, die Breite Ihres Browserfensters jetzt anzupassen, und sehen Sie, was passiert.
- **Performance** bedeutet, Websites so schnell wie möglich laden zu lassen, aber auch intuitiv und benutzerfreundlich zu gestalten, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Barrierefreiheit** bedeutet, Ihre Websites benutzbar für möglichst viele verschiedene Arten von Menschen zu machen (verwandte Konzepte sind Vielfalt und Inklusion sowie inklusives Design). Dazu gehören Menschen mit Sehbehinderungen, Hörbehinderungen, kognitiven Behinderungen oder körperlichen Behinderungen. Es geht auch über Menschen mit Behinderungen hinaus — wie wäre es mit jungen oder alten Menschen, Menschen aus verschiedenen Kulturen, Menschen, die mobile Geräte verwenden, oder Menschen mit zuverlässigen oder langsamen Netzwerkverbindungen?
- **Internationalisierung** bedeutet, Websites benutzbar für Menschen aus verschiedenen Kulturen zu machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen (wie das Ändern Ihres Layouts, damit es für von rechts nach links oder sogar vertikale Sprachen immer noch gut funktioniert) und menschliche (wie die Verwendung einfacher, nicht umgangssprachlicher Sprache, damit Menschen, die Ihre Sprache als zweite oder dritte Sprache haben, eher in der Lage sind, Ihren Text zu verstehen).
- **Datenschutz & Sicherheit**. Diese beiden Konzepte sind verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen zu erlauben, ihrem Geschäft privat nachzugehen und sie nicht auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie absolut benötigen. Sicherheit bezieht sich darauf, Ihre Website so zu konstruieren, dass böswillige Benutzer keine Informationen darauf von Ihnen oder Ihren Benutzern stehlen können.

## Siehe auch

- [Geschichte des World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [Wie funktioniert das Internet?](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
