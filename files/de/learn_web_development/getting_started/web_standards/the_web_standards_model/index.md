---
title: Das Webstandards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, wir bitten um Entschuldigung! Wir arbeiten hart daran, den MDN-Leitfaden für Webentwicklung zu verbessern, und werden die als unvollständig markierten Bereiche ("TODO") bald abschließen.

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web und Webstandards – wie sie entstanden sind, was Webstandard-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wie Standardorganisationen funktionieren – beispielsweise das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Standarderstellung.</li>
          <li>Der Lebenszyklus von Webstandards-Funktionen.</li>
          <li>Die grundlegenden Prinzipien, auf denen Webstandards basieren.</li>
          <li>Die wichtigsten Webstandards-Technologien und wie sie zusammenarbeiten.</li>
          <li>Beste Praktiken für das Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

Wir halten dies sehr knapp, da es viele (detailliertere) Berichte über die Geschichte des Webs gibt, auf die wir später verlinken werden (versuchen Sie auch, in Ihrer bevorzugten Suchmaschine nach "Geschichte des Webs" zu suchen und sehen Sie, was Sie herausfinden, wenn Sie an weiteren Details interessiert sind).

Ende der 1960er Jahre entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des Webs betrachtet werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) funktionierte und die erste Implementierung der [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollsuite enthielt. Diese beiden Technologien bilden die Basis der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schuf Tim Berners-Lee (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Verbindungen zwischen verschiedenen Knoten enthielt. Klingt vertraut?

Schnell vorgespult ins Jahr 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen zusammen boten den Hintergrund, wie das Web funktionieren würde. Sie erregten eine ganze Menge Interesse, genug, um TimBL's Vorgesetzte zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu erstellen.

Ende 1990 hatte TimBL alle Dinge erstellt, die benötigt wurden, um die erste Version des Webs zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen HTTP-Server und einige Webseiten zum Anschauen.

In den darauffolgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung von tausenden Webservern und der Erstellung von Millionen von Webseiten. OK, das ist eine sehr einfache Zusammenfassung dessen, was passiert ist, aber wir haben Ihnen eine kurze Zusammenfassung versprochen.

Ein letzter wichtiger Datenpunkt, den wir teilen sollten, ist, dass TimBL 1994 das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) gründete, eine Organisation, die Vertreter vieler verschiedener Technologieunternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologie-Spezifikationen zu arbeiten. Danach folgten andere Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript), und das Web begann mehr wie das Web auszusehen, das wir heute kennen.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Webseiten verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau beschreiben, wie die Technologie funktionieren soll. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb haben wir Websites wie MDN Web Docs), sondern sind vielmehr dafür gedacht, von Software-Ingenieuren verwendet zu werden, um diese Technologien zu implementieren (normalerweise in Webbrowsern).

Zum Beispiel beschreibt der [HTML Living Standard](https://html.spec.whatwg.org/multipage/) genau, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs sowie andere umliegende Technologien) implementiert werden sollte.

Webstandards werden von Normungsgremien erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darüber zu einigen, wie die Technologien am besten arbeiten sollten, um alle ihre Anwendungsfälle zu erfüllen. Das W3C ist das bekannteste Webstandard-Gremium, aber es gibt auch andere wie die [WHATWG](https://whatwg.org/) (die die lebenden Standards für die HTML-Sprache pflegen), [ECMA](https://ecma-international.org/) (die den Standard für ECMAScript veröffentlichen, auf dem JavaScript basiert), [Khronos](https://www.khronos.org/) (die Technologien für 3D-Grafiken veröffentlichen, wie WebGL) und andere.

### Schlüsselprinzipien der Webstandards

Die grundlegenden Prinzipien des Webs:

- Offen für Beiträge und Nutzung.
- Nicht durch Patente belastet oder von einem einzigen privaten Unternehmen kontrolliert.
- Zugänglich und interoperabel.
- Sie brechen das Web nicht.

Diese Grundlage bedeutet, dass das Web eine einzigartige und aufregende Branche ist, in die man sich einbringen kann.

### "Offene" Standards

Ein wichtiger Aspekt von Webstandards, auf den sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) frei sein sollten, sowohl um dazu beizutragen als auch um sie zu nutzen, und dass es nicht durch Patente/Lizenzen belastet wird. Daher kann jeder den Code schreiben, um eine Website kostenlos zu erstellen, und jeder kann zum Standardisierungsprozess beitragen, bei dem die Spezifikationen geschrieben werden.

Da Webtechnologien offen und in Zusammenarbeit zwischen vielen verschiedenen Unternehmen geschaffen werden, bedeutet das, dass kein einzelnes Unternehmen diese kontrollieren kann, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einziges Unternehmen plötzlich beschließt, das gesamte Web hinter eine Bezahlschranke zu stellen, oder eine neue Version von HTML zu veröffentlichen, die alle kaufen müssen, um weiterhin Websites zu erstellen, oder noch schlimmer, sie beschließen einfach, dass sie kein Interesse mehr haben und schalten es einfach ab.

Dies ermöglicht es, dass das Web als frei verfügbarer, öffentlicher Ressourcen bleibt.

### Das Web nicht brechen

Ein weiterer Satz, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist "das Web nicht brechen" — die Idee ist, dass jede neue Webtechnologie, die eingeführt wird, rückwärtskompatibel mit dem sein sollte, was vorher war (d.h. alte Webseiten werden weiterhin funktionieren) und vorwärtskompatibel (zukünftige Technologien werden wiederum mit dem, was wir derzeit haben, kompatibel sein). Während Sie die hier präsentierten Lernmaterialien durchgehen, werden Sie lernen, wie dies durch einige sehr clevere Designs und Implementierungsarbeiten möglich gemacht wird.

## Standardisierungsgremien

[W3C](https://www.w3.org/), [WHATWG](https://whatwg.org/), [TC39](https://tc39.es/) und [Khronos Group](https://www.khronos.org/)

Der vollständige Standardsprozess des W3C ist tiefgreifend und akademisch. Für den Moment sollten Sie verstehen, wie verschiedene Einzelpersonen und Unternehmen in den Standardisierungsprozess eingebunden sind.

<!-- TODO? @chrisdavidmills -->

## Der Lebenszyklus der Webstandards

Die verschiedenen Reifegrade sind dazu gedacht, Probleme (z.B. Interoperabilitätsprobleme, Patentprobleme) auszumerzen.

<!-- TODO? @chrisdavidmills -->

## Überblick über moderne Webtechnologien

Es gibt eine Anzahl von Technologien zu lernen, wenn Sie ein Frontend-Webentwickler werden wollen. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie zum Erstellen einer Website verwenden werden.

- HTML ist für Struktur und Semantik (Bedeutung).
- CSS ist für Styling und Layout.
- JavaScript ist für die Steuerung des dynamischen Verhaltens.

#### HTML

HyperText Markup Language, oder **HTML**, ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, die Sie verwenden können, um Inhalt zu umschließen (auszuzeichnen), um ihm Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht so aus:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

Wenn wir eine Hausbau-Analogie übernehmen würden, würde HTML wie das Fundament und die Wände des Hauses sein, die ihm Struktur geben und es zusammenhalten.

#### CSS

Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die zum Anwenden von Styles auf Ihr HTML verwendet wird — beispielsweise Text- und Hintergrundfarben einstellen, Ränder hinzufügen, Dinge animieren oder eine Seite auf bestimmte Weise layouten. Als einfaches Beispiel würde der folgende Code unseren HTML-Absatz rot färben:

```css
p {
  color: red;
}
```

In der Hausanalogie ist CSS wie die Farbe, Tapete, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.

#### JavaScript

**JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischem Style-Switching über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript wird eine Referenz auf unseren Absatz im Speicher speichern und den Text darin ändern:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

In der Hausanalogie ist JavaScript wie der Herd, Fernseher, Mikrowelle oder Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionalität geben.

#### Die Schichten trennen

Die Trennung der Technologieschichten ist eine gute Idee, wegen:

- Codeverwaltung und Verständnis.
- Teamarbeit/Rollenaufteilung.
- Leistung.

In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, auf das man hinarbeiten sollte, wo es möglich ist, anstatt eines Absoluten.

- Ein herausragendes Beispiel ist der Fall, JavaScript zu verwenden, um CSS-Styling dynamisch on-the-fly als Reaktion auf App-Zustandsänderungen oder Benutzerauswahl zu aktualisieren.
- Oft wird dies durch Ändern der `Element.style.x`-Eigenschaften getan, was dazu führt, dass Inline-CSS in HTML injiziert wird. Eine bessere Strategie besteht darin, Klassen auf Elementen hinzuzufügen/zu ändern, um Inline-CSS zu vermeiden.
- Viel gravierender ist der Fall von JavaScript-Frameworks, die verschiedene benutzerdefinierte HTML-in-JavaScript- oder CSS-in-JavaScript-Syntax verwenden, was zu einer Menge Vermischung von Syntax-Typen führt.

### Werkzeuge

Sobald Sie die "rohen" Technologien gelernt haben, die zum Erstellen von Webseiten verwendet werden können (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die verwendet werden können, um Ihre Arbeit einfacher oder effizienter zu machen. Beispiele sind:

- Die [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die zum Debuggen Ihres Codes verwendet werden können.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests durchzuführen, die zeigen, ob Ihr Code sich so verhält, wie Sie es beabsichtigt haben.
- Bibliotheken und Frameworks, die auf JavaScript aufbauen und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte "Linters", die eine Reihe von Regeln nehmen, Ihren Code ansehen und Bereiche hervorheben, in denen Sie die Regeln nicht richtig befolgt haben.
- Minifier, die alle Leerzeichen aus Ihren Code-Dateien entfernen, um sie kleiner zu machen, sodass sie schneller vom Server heruntergeladen werden können.

### Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder Client-seitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um eine Website-Frontend zu erzeugen, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als Backend- (oder Serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann an den Browser gesendet wird, um es anzuzeigen. Eine typische Verwendung für eine serverseitige Sprache besteht darin, einige Daten aus einer Datenbank zu holen und etwas HTML zu erzeugen, das die Daten enthält, bevor das HTML dann an den Browser gesendet wird, um es dem Benutzer anzuzeigen.

Beispiel für serverseitige Frameworks sind ASP.NET (in C#), Django (in Python), Laravel (in PHP) und Next.js (in JavaScript).

## Beste Praktiken für das Web

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden werden. Nun lassen Sie uns über die besten Praktiken sprechen, die Sie anwenden sollten, um sicherzustellen, dass Sie diese Technologien so gut wie möglich nutzen.

Wenn Sie Webentwicklung betreiben, ist die Hauptursache für Unsicherheit die Tatsache, dass Sie nicht wissen, welche Kombination von Technologie jeder Benutzer verwenden wird, um Ihre Website anzuzeigen:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm ansehen.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbildmonitor daran ansehen.
- Benutzer 3 könnte blind sein und einen Screenreader verwenden, um die Webseite an ihn vorzulesen.
- Benutzer 4 könnte einen wirklich alten Desktop-Computer verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — Ihre Website so flexibel wie möglich machen, damit alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle die gleiche Erfahrung machen. Kurz gesagt, wir versuchen, das Web so weit wie möglich für alle zugänglich zu machen.

Sie werden auf die unten stehenden Konzepte irgendwann im Laufe Ihres Studiums stoßen.

- **Progressive Enhancement** ist die Praxis, eine minimale Erfahrung zu schaffen, die allen Benutzern die wesentliche Funktionalität bietet, und in Browsern, die sie unterstützen können, eine bessere Erfahrung und andere Verbesserungen zu schichten. Progressive Enhancement wird oft als unwichtig angesehen, da Browser heutzutage neue Funktionen konsistenter unterstützen und die Leute dazu tendieren, schnellere Internetverbindungen zu haben. Sie sollten jedoch über Beispiele nachdenken, die für die heutige Zeit relevant sind — Dekorationen zu reduzieren, um eine mobile Erfahrung reibungsloser zu gestalten und Daten zu sparen, oder eine einfachere, bandbreitenschonendere Erfahrung für Benutzer in Entwicklungsländern zu bieten, die vielleicht noch das Internet pro Megabyte bezahlen.
- **Browser-Kompatibilität** ist die Praxis, sicherzustellen, dass Ihre Webseite auf so vielen Geräten wie möglich funktioniert. Dazu gehört die Verwendung von Technologien, die alle Browser unterstützen, bessere Erfahrungen in Browsern zu liefern, die damit umgehen können (progressive Enhancement), und/oder Code zu schreiben, der auf eine einfachere, aber immer noch nutzbare Erfahrung in älteren Browsern zurückfällt (geschmeidige Degradation). Es beinhaltet auch viel Testing, um zu sehen, ob in bestimmten Browsern etwas fehlschlägt, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Responsive Webdesign** ist die Praxis, Ihre Funktionalität und Layouts flexibel zu gestalten, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die auf einem Desktop in einem Breitbildbrowser auf eine Weise angeordnet ist, aber als kompakteres, einzelnes Spaltenlayout in mobilen Browsern angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters anzupassen, und sehen Sie, was passiert.
- **Leistung** bedeutet, Websites so schnell wie möglich zum Laden zu bringen, aber auch sie intuitiv und einfach zu verwenden zu gestalten, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Zugänglichkeit** bedeutet, Ihre Websites für so viele verschiedene Arten von Menschen wie möglich nutzbar zu machen (verwandte Konzepte sind Vielfalt und Inklusion sowie inklusives Design). Dazu gehören Menschen mit Sehbehinderungen, Hörbehinderungen, kognitiven Behinderungen oder körperlichen Behinderungen. Es geht darüber hinaus auch um Menschen ohne Behinderungen — wie wäre es mit jungen oder alten Menschen, Menschen aus verschiedenen Kulturen, Menschen, die mobile Geräte verwenden, oder Menschen mit instabilen oder langsamen Netzwerkverbindungen?
- **Internationalisierung** bedeutet, Websites für Menschen nutzbar zu machen, die aus verschiedenen Kulturen stammen und andere Sprachen sprechen als Ihre eigene. Es gibt technische Überlegungen hier (wie etwa, Ihr Layout so anzupassen, dass es für von rechts nach links lesbare oder sogar vertikale Sprachen noch funktioniert) und menschliche Überlegungen (wie etwa, einfache, nicht-umgangssprachliche Sprache zu verwenden, sodass Menschen, für die Ihre Sprache zweite oder dritte Sprache ist, wahrscheinlicher Ihren Text verstehen).
- **Datenschutz & Sicherheit**. Diese beiden Konzepte sind verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen ihre Geschäfte privat erledigen zu lassen, ohne sie auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website auf eine sichere Weise zu konstruieren, sodass böswillige Benutzer nicht in der Lage sind, Informationen darauf von Ihnen oder Ihren Benutzern zu stehlen.

## Siehe auch

- [Geschichte des World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [Wie funktioniert das Internet?](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
