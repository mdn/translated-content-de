---
title: Das Webstandards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, entschuldigen Sie bitte! Wir arbeiten hart daran, den MDN Learn Web Development-Bereich zu verbessern, und werden bald die als unvollständig ("TODO") markierten Bereiche fertigstellen.

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web und Webstandards — wie sie entstanden sind, was Webstandard-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computer-Betriebssystems, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie Standards-Gremien arbeiten — zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a>, und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Standarderstellung.</li>
          <li>Der Lebenszyklus von Webstandards-Features.</li>
          <li>Die grundlegenden Prinzipien, auf denen Webstandards basieren.</li>
          <li>Die wichtigsten Webstandard-Technologien und wie sie zusammenarbeiten.</li>
          <li>Best Practices im Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

Wir halten das sehr kurz, da es viele (detailliertere) Berichte über die Geschichte des Webs gibt, die wir später verlinken werden (suchen Sie auch in Ihrer bevorzugten Suchmaschine nach "history of the web", wenn Sie mehr Details erfahren möchten).

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des Webs angesehen werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung des [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) Protokollfamilie aufwies. Diese beiden Technologien bilden die Basis der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb Tim Berners-Lee (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knoten enthielt. Klingt bekannt?

Schnell vorwärts ins Jahr 1989 schrieb TimBL [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen lieferten zusammen den Hintergrund dafür, wie das Web funktionieren würde. Sie stießen auf ein beträchtliches Interesse, genug, um TimBLs Vorgesetzte davon zu überzeugen, ihm zu erlauben, ein globales Hypertextsystem zu erstellen.

Bis Ende 1990 hatte TimBL alles geschaffen, was benötigt wurde, um die erste Version des Webs zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen HTTP-Server und einige Webseiten, die angeschaut werden konnten.

In den folgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. Gut, das ist eine sehr einfache Zusammenfassung dessen, was passiert ist, aber wir haben ja eine kurze Zusammenfassung versprochen.

Ein weiterer wichtiger Datenpunkt, den wir teilen möchten: 1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter vieler verschiedener Technologieunternehmen zusammenbringt, die gemeinsam an der Erstellung von Webtechnologie-Spezifikationen arbeiten. Danach folgten weitere Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript), und das Web begann, mehr wie das Web zu wirken, das wir heute kennen.

## Webstandards

**Webstandards** sind die Technologien, die wir zur Erstellung von Websites verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb gibt es Seiten wie die MDN Web Docs), sondern sie sind dazu gedacht, von Software-Ingenieuren verwendet zu werden, um diese Technologien zu implementieren (meist in Webbrowsern).

Zum Beispiel beschreibt die [HTML Living Standard](https://html.spec.whatwg.org/multipage/) genau, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs und andere umgebende Technologien) implementiert werden sollten.

Webstandards werden von Standardisierungsorganisationen erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, sich zusammenzufinden und zu vereinbaren, wie die Technologien in der besten Weise funktionieren sollten, um all ihre Anwendungsfälle zu erfüllen. Das W3C ist das bekannteste Webstandards-Gremium, aber es gibt auch andere wie das [WHATWG](https://whatwg.org/) (die die lebenden Standards für die HTML-Sprache pflegen), [ECMA](https://ecma-international.org/) (die den Standard für ECMAScript veröffentlichen, auf dem JavaScript basiert), [Khronos](https://www.khronos.org/) (die Technologien für 3D-Grafiken veröffentlichen, wie WebGL), und andere.

### Schlüsselprinzipien der Webstandards

Die Grundprinzipien des Webs:

- Offene Teilnahme und Nutzung.
- Nicht durch Patente belastet oder von einer einzigen privaten Einrichtung kontrolliert.
- Zugänglich und interoperabel.
- Sie brechen das Web nicht.

Diese Basis bedeutet, dass das Web eine einzigartige und spannende Branche ist, um daran teilzunehmen.

### "Offene" Standards

Einer der Schlüsselaspekte von Webstandards, auf den sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) kostenfrei sowohl für die Mitwirkung als auch für die Nutzung sein sollten und nicht durch Patente/Lizenzierungen belastet sein sollten. Daher kann jeder den Code zum Erstellen einer Website kostenlos schreiben und jeder kann zum Standardisierungsprozess beitragen, indem die Spezifikationen verfasst werden.

Da Webtechnologien offen und in Zusammenarbeit zwischen vielen verschiedenen Unternehmen entwickelt werden, bedeutet dies, dass kein einzelnes Unternehmen sie kontrollieren kann, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einzelnes Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stellen, oder eine neue Version von HTML herausgibt, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder schlimmer noch, einfach entscheidet, dass es nicht mehr interessiert ist und es einfach abschaltet.

Dies ermöglicht es dem Web, eine frei verfügbare öffentliche Ressource zu bleiben.

### Brechen Sie das Web nicht

Ein weiterer Satz, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist "das Web nicht brechen" — die Idee ist, dass jede neue Webtechnologie, die eingeführt wird, rückwärtskompatibel zu dem sein sollte, was vorherig war (d.h. alte Websites werden weiterhin funktionieren), und vorwärtskompatibel (zukünftige Technologien sind wiederum mit dem, was wir derzeit haben, kompatibel). Wenn Sie durch die hier präsentierten Lernmaterialien gehen, werden Sie anfangen zu verstehen, wie dies möglich wird mit einigen sehr cleveren Design- und Implementierungsarbeiten.

## Standardisierungsorganisationen

[W3C](https://www.w3.org/), [WHATWG](https://whatwg.org/), [TC39](https://tc39.es/), und [Khronos Group](https://www.khronos.org/)

Der vollständige W3C-Standardisierungsprozess ist tiefgehend und akademisch. Für den Moment sollten Sie verstehen, wie verschiedene Einzelpersonen und Unternehmen am Standardisierungsprozess beteiligt sind.

<!-- TODO? @chrisdavidmills -->

## Der Lebenszyklus der Webstandards

Die verschiedenen Reifestufen sind dazu ausgelegt, Probleme (z.B. Interoperabilitätsprobleme, Patentprobleme) auszumerzen.

<!-- TODO? @chrisdavidmills -->

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien zu lernen, wenn Sie ein Front-End-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS), und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie verwenden werden, um eine Website zu erstellen.

- HTML ist für Struktur und Semantik (Bedeutung).
- CSS ist für Stil und Layout.
- JavaScript ist für die Kontrolle des dynamischen Verhaltens.

#### HTML

HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, in die Sie Inhalte einwickeln (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht wie folgt aus:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

Wenn wir eine Hausbau-Analogie übernehmen, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.

#### CSS

Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stile auf Ihr HTML anzuwenden — zum Beispiel, um Text- und Hintergrundfarben festzulegen, Ränder hinzuzufügen, Dinge zu animieren oder eine Seite auf eine bestimmte Weise anzuordnen. Als einfaches Beispiel würde der folgende Code unseren HTML-Absatz rot färben:

```css
p {
  color: red;
}
```

In der Haus-Analogie ist CSS wie die Farbe, Tapete, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.

#### JavaScript

**JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität auf Websites hinzuzufügen, vom dynamischen Stilwechsel, über das Abrufen von Updates vom Server, bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript speichert eine Referenz auf unseren Absatz im Speicher und ändert den darin enthaltenen Text:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

In der Haus-Analogie ist JavaScript wie der Herd, der Fernseher, die Mikrowelle oder der Föhn — die Dinge, die Ihrem Haus nützliche Funktionalität verleihen.

#### Trennung der Ebenen

Die Trennung der Technologieebenen ist sinnvoll aufgrund:

- Codeverwaltung und -verständlichkeit.
- Teamarbeit/Trennung von Rollen.
- Leistung.

In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, auf das man, wo möglich, hinarbeiten sollte, anstatt ein absoluter Standard.

- Ein Hauptbeispiel ist die Verwendung von JavaScript, um das CSS-Styling dynamisch zu aktualisieren, als Reaktion auf App-Zustandsänderungen, Benutzerentscheidungen usw.
- Oft wird dies durch das Ändern der Element.style.x-Eigenschaften gemacht, was dazu führt, dass Inline-CSS in HTML injiziert wird. Eine bessere Strategie ist es, Klassen zu Elementen hinzuzufügen/zu ändern, um Inline-CSS zu vermeiden.
- Noch schwerwiegender sind JavaScript-Frameworks, die verschiedene HTML-in-JavaScript- oder CSS-in-JavaScript-Benutzerdefinierte Syntax verwenden, was zu einer Menge Mischung der Syntaxtypen führt.

### Werkzeuge

Sobald Sie die "rohen" Technologien gelernt haben, die zur Erstellung von Webseiten verwendet werden können (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die genutzt werden können, um Ihre Arbeit einfacher oder effizienter zu machen. Beispiele umfassen:

- Die [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die verwendet werden können, um Ihren Code zu debuggen.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), mit denen Tests durchgeführt werden können, um zu zeigen, ob Ihr Code sich so verhält, wie Sie es beabsichtigt haben.
- Bibliotheken und Frameworks, die auf JavaScript aufgebaut sind und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte "Linters", die eine Reihe von Regeln nehmen, Ihren Code überprüfen und Stellen hervorheben, an denen Sie die Regeln nicht ordnungsgemäß befolgt haben.
- Minifizierer, die alle Leerzeichen aus Ihren Code-Dateien entfernen, damit sie kleiner werden und daher schneller vom Server heruntergeladen werden können.

### Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Front-End- (oder Client-seitige) Sprachen, das heißt, sie werden vom Browser ausgeführt, um ein Front-End zu erzeugen, das Ihre Benutzer nutzen können.

Es gibt eine andere Klasse von Sprachen, die als Back-End- (oder serverseitige) Sprachen bezeichnet werden. Diese werden auf dem Server ausgeführt, bevor das Ergebnis dann an den Browser gesendet wird, um es anzuzeigen. Ein typischer Anwendungsfall für eine serverseitige Sprache ist das Abrufen von Daten aus einer Datenbank und das Generieren von HTML, das diese Daten enthält, bevor das HTML dann an den Browser gesendet wird, um es dem Benutzer anzuzeigen.

Beispiele für serverseitige Frameworks sind ASP.NET (in C#), Django (in Python), Laravel (in PHP) und Next.js (in JavaScript).

## Web Best Practices

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden werden. Jetzt lassen Sie uns über die Best Practices sprechen, die Sie anwenden sollten, um sicherzustellen, dass Sie diese Technologien bestmöglich nutzen.

Beim Webentwicklung ist die Unsicherheit hauptsächlich darauf zurückzuführen, dass Sie nicht wissen, welche Kombination von Technologien jeder Benutzer verwenden wird, um Ihre Website zu betrachten:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm ansehen.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbildmonitor ansehen.
- Benutzer 3 könnte blind sein und einen Screenreader verwenden, um sich die Webseite vorlesen zu lassen.
- Benutzer 4 könnte einen sehr alten Desktop-Computer verwenden, der moderne Browser nicht ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv designen - machen Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle die gleiche Erfahrung machen werden. Kurz gesagt, wir versuchen, das Web für alle so gut wie möglich nutzbar zu machen.

Im Laufe Ihrer Studien werden Sie auf die folgenden Konzepte stoßen.

- **Progressive Enhancement** ist die Praxis, eine minimale Erfahrung zu schaffen, die die wesentliche Funktionalität für alle Benutzer bietet, und in Browsern, die sie unterstützen können, eine bessere Erfahrung und andere Verbesserungen hinzuzufügen. Progressive Enhancement wird oft als unbedeutend angesehen, da Browser heute neue Funktionen konsistenter unterstützen und die Menschen dazu neigen, schnellere Internetverbindungen zu haben. Denken Sie jedoch an Beispiele, die relevant für die heutige Zeit sind — das Reduzieren von Dekorationen, um eine mobile Erfahrung flüssiger zu machen und Daten zu sparen, oder eine einfachere, bandbreitenarme Erfahrung für Benutzer in Entwicklungsländern bereitzustellen, die möglicherweise noch für das Heim-Internet pro Megabyte bezahlen.
- **Cross-Browser-Kompatibilität** ist die Praxis, sicherzustellen, dass Ihre Webseite auf so vielen Geräten wie möglich funktioniert. Dazu gehört unter anderem die Verwendung von Technologien, die alle Browser unterstützen, das Bereitstellen besserer Erfahrungen für Browser, die damit umgehen können (Progressive Enhancement), und/oder das Schreiben von Code, der auf eine einfachere, aber noch benutzbare Erfahrung in älteren Browsern zurückfällt (Graceful Degradation). Es beinhaltet auch viel Testen, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Responsive Webdesign** ist die Praxis, Ihre Funktionalität und Layouts flexibel zu gestalten, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die in einem Breitbildbrowser auf dem Desktop auf eine Weise angeordnet ist, aber in einem kompakteren, einspaltigen Layout auf Mobiltelefonbrowsern angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters zu ändern und sehen Sie, was passiert.
- **Leistung** bedeutet, Websites so schnell wie möglich zu laden, sie aber auch intuitiv und leicht zu nutzen zu machen, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Zugänglichkeit** bedeutet, Ihre Websites für möglichst viele verschiedene Arten von Menschen benutzbar zu machen (verwandte Konzepte sind Vielfalt und Inklusion sowie inklusives Design). Dies schließt Menschen mit Sehbehinderungen, Hörbehinderungen, kognitiven Behinderungen oder körperlichen Behinderungen ein. Es geht auch über Menschen mit Behinderungen hinaus — wie wäre es mit jungen oder alten Menschen, Menschen aus verschiedenen Kulturen, Menschen, die mobile Geräte verwenden, oder Menschen mit unzuverlässigen oder langsamen Netzwerkverbindungen?
- **Internationalisierung** bedeutet, Websites benutzbar zu machen für Menschen aus verschiedenen Kulturen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen (wie z.B. das Ändern Ihres Layouts, damit es auch für Rechts-nach-links- oder sogar vertikale Sprachen gut funktioniert), und menschliche (wie z.B. die Verwendung einfacher, nicht-slanghafter Sprache, damit Menschen, für die Ihre Sprache als zweite oder dritte Sprache gilt, wahrscheinlicher Ihren Text verstehen).
- **Datenschutz & Sicherheit**. Diese beiden Konzepte sind verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen zu erlauben, ihren Geschäften privat nachzugehen, ohne sie auszuspionieren oder mehr Daten zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website auf eine sichere Weise zu konstruieren, damit bösartige Benutzer keine Informationen, die darauf enthalten sind, von Ihnen oder Ihren Benutzern stehlen können.

## Siehe auch

- [Geschichte des World Wide Web](https://de.wikipedia.org/wiki/Geschichte_des_World_Wide_Web)
- [Wie funktioniert das Internet?](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
