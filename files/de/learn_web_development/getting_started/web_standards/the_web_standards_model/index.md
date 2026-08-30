---
title: Das Webstandards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 077d3774b2de6f345b8552fe59ff9deb8b67ebd5
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web und Webstandards — wie sie entstanden sind, was Webstandard-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, Webbrowser und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Webstandards und die Schlüsselprinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsgremien arbeiten — zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Standarderstellung.</li>
          <li>Die wichtigsten Webstandard-Technologien und wie sie zusammenarbeiten.</li>
          <li>Serverseitige (dynamische) versus clientseitige (statische) Dateien.</li>
          <li>Beste Praktiken für das Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

Ende der 1960er Jahre entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dieses kann als Vorläufer des **Internets** betrachtet werden, da es auf [Paketvermittlung](https://de.wikipedia.org/wiki/Paketvermittlung) basierte und die erste Implementierung des [TCP/IP](https://de.wikipedia.org/wiki/Internetprotokollfamilie) Protokollstapels aufwies. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb [Tim Berners-Lee](https://de.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuch-Programm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knotenpunkten aufwies. Klingt bekannt?

Springen Sie weiter ins Jahr 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText bei CERN; diese beiden Veröffentlichungen lieferten zusammen den Hintergrund dafür, wie das Web funktionieren würde. Sie erhielten eine erhebliche Menge an Interesse, genug, um TimBL's Vorgesetzte zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu erstellen.

Bis 1990-91 hatte TimBL alle notwendigen Dinge geschaffen, um die erste Version des **World Wide Web** (allgemein als das **Web** bezeichnet) zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser namens [WorldWideWeb](https://de.wikipedia.org/wiki/WorldWideWeb), einen Webserver und einige Webseiten zur Ansicht.

> [!NOTE]
> Manchmal verwenden Menschen "das Web" und "das Internet" synonym, aber sie sind unterschiedliche Dinge. Das Internet ist die Infrastruktur, die den Informationsaustausch weltweit zwischen verschiedenen Servern und Clients ermöglicht, während das Web ein darauf aufbauendes System ist. Das Web definiert Arten von Informationen (Inhalt und Code), die über das Internet transportiert werden, und Kommunikationsprotokolle, um diesen Transport zu verwalten.

1994 gründete TimBL das [World Wide Web Consortium](https://de.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter vieler verschiedener Unternehmen zusammenbringt, um gemeinsam an der Schaffung von Webtechnologien zu arbeiten. Das W3C arbeitete daran, bestehende Webtechnologien wie HTML und HTTP zu standardisieren und zu verbessern und neue Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) zu schaffen. Insbesondere CSS und JavaScript waren entscheidend, um dem Web Stil und Interaktivität zu verleihen und es mehr wie das Web aussehen zu lassen, das wir heute kennen.

In den folgenden Jahren explodierte das Web, mit der Freigabe mehrerer Browser, der Einrichtung tausender Webserver und der Erstellung von Millionen von Webseiten. Andere Standardisierungsorganisationen traten ebenfalls auf, um verschiedene Aspekte von Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie daran interessiert sind, einen detaillierteren Bericht über die Webgeschichte zu lesen, versuchen Sie in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) nach "Geschichte des Internets" zu suchen und sehen Sie, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, die "Spezifikationen" genannt werden und genau darlegen, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (dafür gibt es Websites wie die MDN Web Docs). Stattdessen sind sie für Softwareingenieure gedacht, um diese Technologien zu implementieren (in der Regel in Webbrowsern).

### Standardisierungsgremien und -prozesse

Webstandards werden von Standardisierungsgremien erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darauf zu einigen, wie die Technologien am besten funktionieren sollen, um all ihre Anwendungsfälle zu erfüllen.

Das W3C ist das bekannteste Webstandardisierungsgremium, aber es gibt noch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs und andere umgebende Technologien) implementiert werden sollte.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem moderne JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken wie WebGL.

Die vollständigen Prozesse, durch die Standards erstellt werden, können tief und komplex sein. Allerdings benötigen Sie, sofern Sie nicht selbst Webtechnologiefunktionen erstellen möchten, die meisten davon nicht zu verstehen. Wenn Sie an der Diskussion über neue Technologien teilnehmen und Feedback geben möchten, ist es normalerweise eine Frage des Beitritts zur jeweiligen Mailingliste oder eines anderen Diskussionsmechanismus. Standarddiskussionen werden öffentlich geführt, daher der Begriff ["Offene" Standards](#open_standards).

Für jetzt geben wir Ihnen ein allgemeines, hohes Verständnis dafür, wie Standardprozesse funktionieren:

1. Jemand bemerkt die Notwendigkeit einer neuen Webstandardfunktion, die das Leben der Entwickler erleichtern wird. Zum Beispiel gibt es vielleicht ein verbreitetes Muster, das häufig in Webbenutzeroberflächen verwendet wird, dessen Implementierung jedoch mühsam ist. Eine dedizierte CSS-Funktion würde es viel einfacher machen. Jemand könnte ein einzelner Entwickler sein oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Die Person diskutiert diese Funktion mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt Interesse an der Implementierung der Funktion zu wecken. Normalerweise schreiben sie ein erläuterndes Dokument, das die Notwendigkeit der Funktion und wie sie funktionieren wird, erklärt, sowie eine Code-Demo, die zeigt, wie die Funktion in Aktion aussehen würde.
3. Wenn genug Interesse an der Funktion besteht, wird sie offiziell in der entsprechenden Arbeitsgruppe des Standardisierungsgremiums diskutiert. Zum Beispiel werden CSS-Funktionen in der Regel von der [CSS Working Group](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [Wikipedia-Seite der CSS Working Group](https://de.wikipedia.org/wiki/CSS_Working_Group) für eine etwas ausführlichere Beschreibung und Geschichte). Bevor eine neue Webtechnologie akzeptiert wird, muss sie gründlich evaluiert werden, um sicherzustellen, dass sie für das Web gut ist — zum Beispiel, dass sie keine Sicherheitsprobleme einführt, sie [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien ist und keinen Patenten unterliegt.
4. Um die Funktion zu beweisen, passieren mehrere Dinge. Diese Punkte können alle zur selben Zeit wie Punkt 3 passieren oder sogar vorher (Browseranbieter implementieren manchmal proprietäre/nicht-standardisierte Funktionen und versuchen dann, sie im Nachhinein zu standardisieren):
   1. Ein oder mehrere Browseranbieter werden eine experimentelle Version der neuen Funktion implementieren, die oft standardmäßig deaktiviert ist, aber von Personen, die sie testen und Feedback geben möchten, aktiviert werden kann.
   2. Ein Mitglied der Arbeitsgruppe wird es auch zu einer Technologiespezifikation hinzufügen, damit Browseranbieter es konsistent implementieren können.
   3. Sie werden auch Feedback von anderen Browser-Anbietern einholen, um zu sehen, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich es ist, dass sie ihn umsetzen. Diese werden Standards-Positionen genannt. Siehe zum Beispiel [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Personen werden auch eine umfangreiche Testreihe schreiben, um zu demonstrieren, dass die Funktion wie beschrieben funktioniert.

5. Letztendlich, wenn alles gut läuft, wird die Funktion in allen Browsern implementiert und kann beim Erstellen von Websites verwendet werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die die Funktion vorschlagen, sie in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu sammeln, dieselbe Person/dieselben Personen sind.

Weitere Informationen über spezifische Prozesse von Standardisierungsgremien finden Sie z.B. hier:

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG — Working Mode](https://whatwg.org/working-mode)
- [The TC39 Process](https://tc39.es/process-document/)

## Webstandards-Schlüsselprinzipien

Die Schlüsselprinzipien des Webs, die das Web zu einer einzigartigen und aufregenden Branche machen, in die man einsteigen kann, sind die folgenden:

- Offen für Beitrag und Nutzung und daher nicht durch Patente belastet oder von einem einzigen privaten Unternehmen kontrolliert.
- Zugänglich und interoperabel.
- Sie zerstören das Web nicht.

Schauen wir uns jedes dieser Prinzipien etwas genauer an.

### "Offene" Standards

Eines der Schlüsselelemente von Webstandards, auf denen sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) **offen** sein sollten. Das bedeutet, dass sie frei sind, sowohl dazu beizutragen als auch sie zu nutzen, und nicht durch Patente/Lizenzen belastet sind. Das ist wichtig — wenn eine Webtechnologie auf patentierten/lizenzierten Technologien basiert, könnte der Patent-/Inhaber den implementierenden Browser-Anbietern möglicherweise große Beträge berechnen, und diese Kosten würden dann auf die Browser-Benutzer übertragen.

Darüber hinaus bedeutet "offen", dass Webtechnologien in Zusammenarbeit vieler verschiedener Unternehmen offen erstellt werden, wodurch keine einzige Firma die Kontrolle hat, was eine wirklich gute Sache ist. Sie möchten nicht, dass ein einziges Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stecken oder eine neue Version von HTML zu veröffentlichen, die jeder kaufen muss, um weiter Websites zu erstellen, oder schlimmer noch, entscheidet, dass es nicht mehr interessiert ist und es einfach abschaltet.

Offene Standards ermöglichen es, dass das Web eine frei verfügbare öffentliche Ressource bleibt, bei der jeder kostenlos den Code schreiben kann, um eine Website zu erstellen, und jeder kann zum Standardisierungsprozess beitragen.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundsätzlich darauf ausgelegt, dass Webinhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als großer Gleichmacher gedacht, der es Menschen unabhängig von ihren Umständen ermöglicht, Informationen zu erhalten. Das bedeutet zum Beispiel:

- Menschen, die keine Maus oder Zeigegeräte verwenden können, können die Tastatur nutzen, um im Web zu navigieren.
- Sehbehinderte Menschen können Inhalte vergrößern oder ein Programm namens **Screenreader** verwenden, um Inhalte vorzulesen und Steuerelemente auf eine Weise zu beschreiben, die für sie sinnvoll ist.

> [!NOTE]
> Sie werden in dem Lernpfad später mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erfahren.

Darüber hinaus sind Webtechnologien so konzipiert, dass sie **interoperabel** sind. Da Webtechnologien nach veröffentlichten Standards implementiert werden, sollten Browser die gleiche gerenderte Ausgabe für eine gegebene Eingabe (z.B. HTML-, CSS- oder JS-Code) bieten — mit anderen Worten, eine Website sollte konsistent über mehrere Browser hinweg funktionieren.

### Die Webkompatibilität nicht brechen

Ein weiterer Satz, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist "die Webkompatibilität nicht brechen". Die Idee dahinter ist, dass jede neue Webtechnologie rückwärtskompatibel mit dem sein sollte, was vorher war, damit bestehende Websites weiterhin auf die gleiche Weise funktionieren wie bisher.

Browser-Anbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne Unterschiede in der Darstellung oder Funktionalität zu verursachen, die dazu führen würden, dass ihre Nutzer denken, eine Website sei fehlerhaft und einen anderen Browser ausprobieren.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen müssen, wenn Sie ein Frontend-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie zum Erstellen einer Website verwenden. Sie haben diese im [vorherigen Modul](/de/docs/Learn_web_development/Getting_started/Your_first_website) kennengelernt, aber um es nochmal kurz zusammenzufassen:

- Hypertext Markup Language oder **HTML** ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte umschließen (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu verleihen. Im Vergleich zum Hausbau wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.
- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Ihren HTML-Elementen Stil zu verleihen — zum Beispiel das Setzen von Text- und Hintergrundfarben, Hinzufügen von Rahmen, Animationseffekten oder das Layout einer Seite auf bestimmte Weise. Im Hausvergleich ist CSS wie die Farbe, Tapeten, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.
- **JavaScript** ist die Programmiersprache, die wir verwenden, um Websites interaktiv zu machen, von dynamischen Stilwechseln über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken.
  - Außerdem werden Sie den Begriff **API** zusammen mit JavaScript hören, der für **Application Programming Interface** steht. Eine JavaScript-API ist eine auf JavaScript aufbauende Funktionalität, die es Ihnen ermöglicht, andere, komplexere Codeteile oder andere Funktionalitäten auf Ihrem Computer (wie Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf eine handhabbare Weise zu steuern.
  - Im Hausvergleich ist JavaScript wie Herd, Fernseher, Mikrowelle oder Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionen verleihen.

### Andere Webtechnologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie bereits erwähnt.
- [SVG](/de/docs/Web/SVG) zur Erstellung und Manipulation von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

HTML, CSS und JavaScript sind jedoch bei weitem die wichtigsten Technologien, die gelernt werden müssen, weshalb wir uns in unserem Lernpfad hauptsächlich auf diese konzentrieren werden.

## Werkzeuge

Sobald Sie die grundlegenden, standardmäßigen Technologien gelernt haben, die zum Erstellen von Webseiten verwendet werden (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die verwendet werden können, um Ihre Arbeit leichter und effizienter zu gestalten. Beispiele umfassen:

- [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die verwendet werden können, um Ihren Code zu debuggen.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), mit denen Tests durchgeführt werden können, um zu zeigen, ob sich Ihr Code so verhält, wie Sie es beabsichtigt haben.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- Sogenannte **Linters** und **Formatter**, die eine Reihe von Regeln für den Programmierstil nehmen, sich Ihren Code ansehen und Ihren Code aktualisieren, um diesen Regeln zu folgen. Prettier, das Sie [früher im Kurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) kennengelernt haben, ist ein Beispiel für einen Formatter.

## Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Front-End zu erzeugen, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als Backend- (oder serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis an den Browser zur Anzeige gesendet wird. Eine typische Verwendung für eine serverseitige Sprache ist es, einige Daten aus einer Datenbank zu holen, einige HTML-Inhalte zu generieren, die die Daten enthalten, und dann das HTML an den Browser zu senden, um es dem Benutzer anzuzeigen.

Beispiele für serverseitige Frameworks und Sprachen sind ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien werden nicht als "Webstandards" angesehen — sie werden von Organisationen entwickelt, die außerhalb der Standardisierungsprozesse von Organisationen wie dem W3C und WHATWG stehen — obwohl einige von ihnen Prozesse haben, die ähnlich offen sind.

### Statisch versus dynamisch

Eine andere Art, wie clientseitige und serverseitige Sprachen oft beschrieben werden, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Wenn sie angefordert wird, wird sie unverändert an den Client geliefert und vom Browser gerendert. Da sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Serverseitiger Code (wie ein Python-Skript oder eine ASP.NET-Seite) generiert HTML-Inhalte, die je nach übergebenen Daten variieren, und gibt dann das HTML an den Client zurück. Daher wird er als "dynamisch" bezeichnet. Zum Beispiel kann dieselbe Wettervorhersageseite unterschiedliche Daten anzeigen, abhängig davon, ob das Wetter sonnig oder regnerisch ist, wo sich der Benutzer befindet und welche Präferenzen er hat (einige Benutzer möchten eventuell Pollenwert und Luftfeuchtigkeit sehen, während andere diese Daten möglicherweise nicht interessieren und sie über ihre Präferenzen ausblenden wollen).

Es gibt oft eine gewisse Überschneidung zwischen den Konzepten von statischem und dynamischem Code. Serverseitige Sprachen definieren in der Regel HTML-Strukturen in einer Vorlagendatei, die oft hauptsächlich aus statischem HTML besteht, mit einigen speziellen dynamischen Abschnitten, die sich ändern je nachdem, welche Daten eingefügt werden müssen.

## Beste Praktiken für das Web

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden. Lassen Sie uns nun über die besten Praktiken sprechen, die Webentwickler in der Regel anwenden, um sicherzustellen, dass ihre Websites von möglichst vielen Menschen genutzt werden können.

Beim Webentwickeln ist die Hauptursache für Unsicherheit die Tatsache, dass Sie nicht wissen, welche Technologie-Kombination jeder Benutzer zum Anzeigen Ihrer Website verwenden wird:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm ansehen.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbildmonitor ansehen.
- Benutzer 3 könnte visuell eingeschränkt sein und einen Screenreader verwenden, um die Webseite zu lesen und mit ihr zu interagieren.
- Benutzer 4 könnte einen wirklich alten Desktop-Computer verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Benutzer sie nutzen können, selbst wenn sie möglicherweise nicht alle dieselbe Erfahrung machen.

Sie werden im Laufe Ihrer Studien auf die unten stehenden Konzepte stoßen, die bewährte Praktiken darstellen, an die Ihre Websites idealerweise halten sollten. Machen Sie sich darüber vorerst keine großen Gedanken. Im weiteren Verlauf des Kurses versuchen wir, diese implizit zu lehren, das heißt, wenn wir Ihnen HTML, CSS und JavaScript beibringen, werden unsere Beispiele möglichst den bewährten Praktiken folgen. Im weiteren Verlauf Ihrer Lernreise werden Sie wahrscheinlich auf explizite Belehrungen in diesen Bereichen stoßen.

- **Progressive Verbesserung**
  - : Schaffung einer minimalen Erfahrung, die die wesentlichen Funktionen für alle Benutzer bereitstellt, und darauf aufbauend eine bessere Erfahrung und andere Verbesserungen in Browsern, die diese unterstützen können. Progressive Verbesserung wird oft als unwichtig angesehen, weil Browser heutzutage neue Funktionen konsistenter unterstützen und Menschen tendenziell schnellere Internetverbindungen mit höheren Datenverbrauchslimits haben. Dennoch sollte man an Beispiele wie die Reduzierung von Dekorationen denken, um eine mobile Erfahrung flüssiger zu gestalten und Daten zu sparen, oder an die Bereitstellung einer leichteren, datenarmen Erfahrung für Benutzer, die pro Megabyte zahlen oder eine begrenzte Verbindung haben.
- **Cross-Browser-Kompatibilität**
  - : Versuche sicherzustellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dazu gehört die Verwendung von Technologien, die alle Browser unterstützen, bessere Erlebnisse für Browser zu bieten, die diese handhaben können (progressive Verbesserung), und/oder den Code so zu schreiben, dass er auf eine einfachere, aber dennoch verwendbare Erfahrung in älteren Browsern zurückfällt (als **graceful degradation** bezeichnet). Es erfordert auch Tests, um zu sehen, ob in bestimmten Browsern etwas fehlschlägt, und dann weitere Arbeit, um diese Fehler zu beheben.
- **Trennen der Schichten**
  - : Ihr Inhalt (HTML), Styling (CSS) und Verhalten (JavaScript) in verschiedenen Code-Dateien zu speichern, anstatt sie alle an derselben Stelle zu bündeln. Dies ist aus vielen Gründen eine gute Idee, einschließlich der Verwaltung und Verständlichkeit von Code sowie Teamarbeit/Aufgabentrennung. In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, das man anstreben sollte, wo es möglich ist, aber kein absolutes.
- **Responsives Webdesign**
  - : Ihre Funktionalitäten und Layouts flexibel zu gestalten, sodass sie automatisch an verschiedene Browser angepasst werden können. Ein offensichtliches Beispiel ist eine Website, die in einem Breitbildbrowser auf dem Desktop in einer bestimmten Weise aufgebaut ist, aber in einem kompakteren Einkolumnenlayout in mobilen Telefonbrowsern erscheint. Versuchen Sie jetzt die Breite Ihres Browserfensters zu ändern und sehen Sie, was mit dem Website-Layout passiert.
- **Leistung**
  - : Websites so schnell wie möglich laden zu lassen, aber sie auch intuitiv und einfach zu verwenden, damit Benutzer nicht frustriert sind und woanders hingehen.
- **Internationalisierung**
  - : Websites für Menschen unterschiedlicher Kulturen, die andere Sprachen als Ihre eigene sprechen, nutzbar zu machen. Es gibt hier technische Überlegungen (wie das Anpassen Ihres Layouts, so dass es auch für von rechts nach links geschriebene oder von oben nach unten geschriebene Sprachen gut funktioniert), und menschliche (wie die Verwendung von einfachem, nicht umgangssprachlichem Sprachgebrauch, damit vielfältige Kulturen wahrscheinlicher Ihren Text verstehen).
- **Privatsphäre** und **Sicherheit**
  - : Diese beiden Konzepte stehen in Zusammenhang, unterscheiden sich jedoch. Privatsphäre bezieht sich darauf, Menschen ihre Angelegenheiten privat erledigen zu lassen, ohne sie auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website sicher zu erstellen, damit böswillige Benutzer keine darauf enthaltenen Informationen von Ihnen oder Ihren Benutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
