---
title: Das Webstandards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: fd2083c0166280bd96e1ab5f0a96fc8f90ceb3eb
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web und Webstandards — wie sie entstanden sind, was Webstandards-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in Ihrem Computerbetriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Webstandards und die grundlegenden Prinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsorganisationen arbeiten — zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Erstellung von Standards.</li>
          <li>Die wichtigsten Webstandards-Technologien und wie sie zusammenarbeiten.</li>
          <li>Server-seitige (dynamische) versus client-seitige (statische) Dateien.</li>
          <li>Best Practices im Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dieses kann als Vorläufer des **Internets** angesehen werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung des [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollstapels enthielt. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Verknüpfungen zwischen verschiedenen Knoten enthielt. Kommt Ihnen das bekannt vor?

Schnell vorwärts zu 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und Hypertext am CERN; diese beiden Veröffentlichungen zusammen lieferten den Hintergrund dafür, wie das Web funktionieren würde. Sie erhielten ein beträchtliches Interesse, genug, um TimBLs Vorgesetzte zu überzeugen, ihm die Erlaubnis zu geben, ein globales Hypertext-System zu schaffen.

Bis 1990-91 hatte TimBL alles geschaffen, was benötigt wurde, um die erste Version des **World Wide Web** (allgemein als **Web** bezeichnet) auszuführen — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, ein Webserver und einige Webseiten zum Anschauen.

> [!NOTE]
> Menschen verwenden manchmal "das Web" und "das Internet" austauschbar, aber sie sind verschiedene Dinge. Das Internet ist die Infrastruktur, die den Transport von Informationen weltweit zwischen verschiedenen Servern und Clients ermöglicht, während das Web ein darauf aufgebautes System ist. Das Web definiert Arten von Informationen (Inhalt und Code), die über das Internet transportiert werden, und Kommunikationsprotokolle, um diesen Transport zu verwalten.

1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter vieler verschiedener Unternehmen zusammenbringt, um bei der Schaffung von Webtechnologien zusammenzuarbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung bestehender Webtechnologien wie HTML und HTTP und der Schaffung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). Insbesondere CSS und JavaScript waren entscheidend, um dem Web Styling und Interaktivität zu verleihen und es mehr wie das Web aussehen zu lassen, das wir heute kennen.

In den darauf folgenden Jahren explodierte das Web mit der Veröffentlichung mehrerer Browser, dem Einrichten von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. Andere Standardisierungsorganisationen tauchten ebenfalls auf, um verschiedene Aspekte von Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie daran interessiert sind, einen detaillierteren Bericht über die Geschichte des Webs zu lesen, versuchen Sie, in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) nach "Geschichte des Webs" zu suchen und zu sehen, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, genannt Spezifikationen, die genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien benutzt (deshalb gibt es Seiten wie MDN Web Docs). Stattdessen sind sie dazu gedacht, von Software-Ingenieuren verwendet zu werden, um diese Technologien zu implementieren (normalerweise in Webbrowsern).

### Standardisierungsorganisationen und Prozesse

Webstandards werden von Standardisierungsorganisationen geschaffen — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und zu vereinbaren, wie die Technologien am besten funktionieren sollten, um all ihre Anwendungsfälle zu erfüllen.

Das W3C ist die bekannteste Webstandardisierungsorganisation, aber es gibt noch andere, zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs sowie andere umgebende Technologien) implementiert werden sollten.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken, wie WebGL.

Die vollständigen Prozesse, durch die Standards erstellt werden, können tief und komplex werden. Es sei denn, Sie wollen Ihre eigenen Webtechnologie-Funktionen erstellen, müssen Sie die meisten davon nicht verstehen. Wenn Sie zur Diskussion über neue Technologien beitragen und Feedback geben möchten, ist es normalerweise eine Frage des Beitritts zur relevanten Mailingliste oder einem anderen Diskussionsmechanismus. Standarddiskussionen werden öffentlich geführt, daher der Begriff ["Offene" Standards](#open_standards).

Für den Anfang geben wir Ihnen ein allgemeines, hochrangiges Verständnis davon, wie die Standardisierungsprozesse funktionieren:

1. Jemand bemerkt die Notwendigkeit einer neuen Webstandardfunktion, die das Leben der Entwickler erleichtert. Zum Beispiel gibt es vielleicht ein häufig verwendetes Muster in Web-Benutzeroberflächen, das eine Herausforderung darstellt, zu implementieren. Eine dedizierte CSS-Funktion würde es viel einfacher machen. Die "jemand" könnte jeder sein — ein individueller Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Die Person diskutiert diese Funktion mit anderen Entwicklern, Browser-Ingenieuren usw., und beginnt Interesse an der Implementierung der Funktion zu wecken. Normalerweise schreiben sie ein Erläuterdokument, das den Bedarf für die Funktion und deren Funktionsweise erklärt, und eine Code-Demo, die zeigt, wie die Funktion in Aktion aussehen würde.
3. Wenn genug Interesse an der Funktion besteht, wird sie formell innerhalb der relevanten Arbeitsgruppe der standardisierenden Organisation diskutiert. Beispielsweise werden CSS-Funktionen normalerweise von der [CSS-Arbeitsgruppe](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [CSS-Arbeitsgruppe Wikipedia-Seite](https://en.wikipedia.org/wiki/CSS_Working_Group) für eine etwas detailliertere Beschreibung und Geschichte). Bevor eine neue Webtechnologie akzeptiert wird, muss sie gründlich bewertet werden, um sicherzustellen, dass sie gut für das Web ist — beispielsweise dürfen keine Sicherheitsprobleme eingeführt werden, sie muss [zugänglich und interoperabel](#zugänglich_und_interoperabel) mit anderen Webtechnologien sein, und sie darf sich nicht auf Patente stützen.
4. Um die Funktion zu erproben, passieren mehrere Dinge. Diese Punkte können alle etwa zur gleichen Zeit wie Punkt 3 oder sogar vorher geschehen (Browser-Anbieter implementieren manchmal propritäre/nicht-standardisierte Funktionen und versuchen dann, sie anschließend zu standardisieren):
   1. Ein oder mehrere Browser-Anbieter implementieren eine experimentelle Version der neuen Funktion, die oft standardmäßig deaktiviert ist, aber von Personen aktiviert werden kann, die sie testen und Feedback geben möchten.
   2. Ein Mitglied der Arbeitsgruppe wird es auch zu einer Technologiespezifikation hinzufügen, damit Browser-Anbieter es konsistent umsetzen können.
   3. Sie werden auch Feedback von anderen Browser-Anbietern einholen, um herauszufinden, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich es ist, dass sie ihn implementieren. Diese werden als Standardpositionen bezeichnet. Siehe beispielsweise [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Beteilige Personen werden außerdem eine umfassende Testsuite schreiben, um zu demonstrieren, dass die Funktion wie beschrieben funktioniert.

5. Schließlich wird, wenn alles in Ordnung ist, die Funktion in allen Browsern implementiert und kann beginnen, bei der Erstellung von Websites verwendet zu werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die die Funktion vorschlagen, sie in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu einholen, dieselben Personen oder Personengruppen sind.

Sie können weitere Informationen zu den spezifischen Prozessen von Standardisierungsorganisationen finden. Siehe zum Beispiel:

- [W3C Prozessdokument](https://www.w3.org/policies/process/)
- [WHATWG — Arbeitsmodus](https://whatwg.org/working-mode)
- [Der TC39-Prozess](https://tc39.es/process-document/)

## Wichtigste Prinzipien der Webstandards

Die Schlüsselprinzipien des Webs, die das Web zu einer einzigartigen und aufregenden Branche machen, mit der man sich beschäftigen kann, sind wie folgt:

- Offen für Beiträge und Nutzung, und daher nicht durch Patente belastet oder von einer einzigen privaten Einheit kontrolliert.
- Zugänglich und interoperabel.
- Sie zerstören nicht das Web.

Schauen wir uns jede dieser Aussagen etwas genauer an.

### "Offene" Standards

Eines der wichtigsten Merkmale von Webstandards, auf die sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) **offen** sein sollten. Das bedeutet, dass sie kostenlos sowohl zur Mitarbeit als auch zur Nutzung sind und nicht durch Patente/Lizenzen eingeschränkt werden. Das ist wichtig — wenn eine Webtechnologie auf patentierten/lizenzierten Technologien beruht, um zu funktionieren, kann der Patentinhaber/ -besitzer potenziell große Summen Geld von implementierenden Browser-Anbietern verlangen, und diese Kosten würden dann an die Browser-Nutzer weitergegeben.

Darüber hinaus bedeutet die Tatsache, dass Webtechnologien offen und in Zusammenarbeit zwischen vielen verschiedenen Unternehmen geschaffen werden, dass kein einziges Unternehmen die Kontrolle erhält, was eine wirklich gute Sache ist. Sie möchten nicht, dass ein einzelnes Unternehmen plötzlich beschließt, das gesamte Web hinter eine Bezahlschranke zu stellen, eine neue Version von HTML herauszugeben, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder schlimmer noch, dass es nicht mehr interessiert ist und es einfach ausschaltet.

Offene Standards ermöglichen es, dass das Web eine frei verfügbare öffentliche Ressource bleibt, bei der jeder den Code kostenlos schreiben kann, um eine Website zu erstellen, und jeder zum Standardschaffungsprozess beitragen kann.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundsätzlich so konzipiert, dass Webinhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als großer Ausgleich gedacht und ermöglicht Menschen den Zugriff auf Informationen, unabhängig von ihren Umständen. Das bedeutet, dass zum Beispiel:

- Menschen, die keine Maus oder Zeigegerät benutzen können, die Tastatur zur Navigation im Web verwenden können.
- Menschen mit Sehproblemen Inhalte vergrößern oder ein Programm namens **Screenreader** verwenden können, um sich Inhalte vorlesen zu lassen und Steuerelemente auf eine für sie verständliche Weise zu beschreiben.

> [!NOTE]
> Sie werden später im Lernpfad mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erfahren.

Darüber hinaus sind Webtechnologien darauf ausgelegt, **interoperabel** zu sein. Da Webtechnologien gemäß veröffentlichter Standards implementiert werden, sollten Browser für eine gegebene Eingabe (zum Beispiel HTML-, CSS- oder JS-Code) dieselbe gerenderte Ausgabe liefern — mit anderen Worten, eine Website sollte konsistent über mehrere Browser hinweg funktionieren.

### Breche das Web nicht

Ein weiterer Ausdruck, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist "Breche das Web nicht". Die Idee dahinter ist, dass jede neue Webtechnologie abwärtskompatibel mit dem sein sollte, was davor war, sodass bestehende Websites weiterhin so funktionieren, wie sie es zuvor taten.

Browser-Anbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne dass es zu Unterschieden in der Darstellung oder Funktionalität kommt, die ihre Benutzer dazu bringen würden, zu denken, dass eine Website kaputt ist und einen anderen Browser auszuprobieren.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen sollten, wenn Sie Front-End-Webentwickler werden möchten. In diesem Abschnitt beschreiben wir sie kurz.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei wichtigsten Technologien, die Sie zum Erstellen einer Website verwenden werden. Diese haben Sie im [vorherigen Modul](/de/docs/Learn_web_development/Getting_started/Your_first_website) kennengelernt, aber zur Wiederholung:

- HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, bestehend aus verschiedenen Elementen, in die Sie Inhalte einbetten (markieren) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Wenn wir eine Hausbau-Analogie annehmen würden, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.
- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stile auf Ihr HTML anzuwenden — beispielsweise Text- und Hintergrundfarben festlegen, Ränder hinzufügen, Dinge animieren oder eine Seite auf eine bestimmte Weise layouten. In der Haus-Analogie ist CSS wie die Farbe, Tapete, Teppiche und Gemälde, die Sie verwenden, um das Haus schön aussehen zu lassen.
- **JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischem Stilwechsel, über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken.
  - Sie werden auch den Begriff **API** zusammen mit JavaScript hören, was für **Application Programming Interface** steht. Eine JavaScript-API ist eine Funktionalität, die auf JavaScript aufbaut und es Ihnen ermöglicht, andere, komplexere Teile von Code oder andere Funktionen auf Ihrem Computer (wie Hardwaregeräte wie Ihre Webcam oder Mikrofon) auf eine verwaltbare Weise zu steuern.
  - In der Haus-Analogie ist JavaScript wie der Herd, TV, Mikrowelle oder Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionalität geben.

### Andere Webtechnologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) zur Kommunikation zwischen Clients und Servern, wie vorher erwähnt.
- [SVG](/de/docs/Web/SVG) zur Erstellung und Manipulation von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

HTML, CSS und JavaScript sind jedoch bei weitem die wichtigsten Technologien, die es zu lernen gilt, daher werden wir uns in unserem Lernpfad hauptsächlich auf diese konzentrieren.

## Werkzeuge

Sobald Sie die standardmäßigen, grundlegenden Technologien zum Erstellen von Webseiten (wie HTML, CSS und JavaScript) kennengelernt haben, stoßen Sie bald auf verschiedene Werkzeuge, die verwendet werden können, um Ihre Arbeit einfacher oder effizienter zu gestalten. Beispiele sind:

- [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die zum Debuggen Ihres Codes verwendet werden können.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests durchzuführen, um zu zeigen, ob Ihr Code so funktioniert, wie Sie es beabsichtigt haben.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und es erlauben, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte **Linters** und **Formatierer**, die ein Set von Regeln für den Programmierstil verwenden, Ihren Code ansehen und Ihren Code aktualisieren, um diesen Regeln zu entsprechen. Prettier, das Sie [früher im Kurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) kennengelernt haben, ist ein Beispiel für einen Formatierer.

## Server-seitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Front-End- (oder Client-seitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Front-End der Website zu produzieren, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als Back-End- (oder Server-seitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann an den Browser gesendet wird, um dort angezeigt zu werden. Eine typische Verwendung für eine serverseitige Sprache ist es, einige Daten aus einer Datenbank abzurufen, etwas HTML zu generieren, das die Daten enthält, und dann das HTML an den Browser zu senden, um es dem Benutzer anzuzeigen.

Beispiele für Server-seitige Frameworks und Sprachen sind ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien werden nicht als "Webstandards" betrachtet — sie werden von Organisationen außerhalb der Webstandards-Prozesse von Organisationen wie dem W3C und WHATWG entwickelt — obwohl einige von ihnen ähnlich offene Prozesse haben werden.

### Statisch versus dynamisch

Eine weitere Möglichkeit, auf Client- und Server-seitige Sprachen zu verweisen, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Beim Anfordern wird sie an den Client geliefert, unverändert, und vom Browser gerendert. Da sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Wenn serverseitiger Code (beispielsweise ein Python-Skript oder eine ASP.NET-Seite) etwas HTML generiert, das Daten enthält und dieses HTML an den Client zurückgibt, ändern sich die Inhalte des HTML, je nachdem, was der serverseitige Code macht. Daher wird er als "dynamisch" bezeichnet.

Es gibt oft eine Überschneidung zwischen den Konzepten des statischen und dynamischen Codes. Server-seitige Sprachen definieren normalerweise HTML-Strukturen innerhalb einer Vorlagendatei, die meist aus statischem HTML besteht, jedoch einige spezielle dynamische Abschnitte enthalten, die sich je nach den einzusetzenden Daten ändern.

## Beste Praktiken im Web

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden. Schauen wir uns nun die besten Praktiken an, die Webentwickler allgemein anwenden, um sicherzustellen, dass ihre Websites für so viele Menschen wie möglich nutzbar sind.

Bei der Webentwicklung rührt die größte Unsicherheit daher, dass Sie nicht wissen, welche Kombination von Technologien jeder Benutzer verwenden wird, um Ihre Website anzusehen:

- Benutzer 1 sieht sie sich möglicherweise auf einem iPhone mit einem kleinen, schmalen Bildschirm an.
- Benutzer 2 sieht sie sich möglicherweise auf einem Windows-Laptop mit einem Breitbildmonitor an.
- Benutzer 3 ist möglicherweise sehbehindert und verwendet einen Screenreader, um die Webseite zu lesen und mit ihr zu interagieren.
- Benutzer 4 verwendet möglicherweise einen wirklich alten Desktop-Computer, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Website so flexibel wie möglich, sodass alle oben genannten Benutzer sie verwenden können, auch wenn sie möglicherweise nicht alle das gleiche Erlebnis haben.

Sie werden im Laufe Ihres Studiums auf die unten genannten Konzepte stoßen, die Best Practices darstellen, die Ihre Websites idealerweise einhalten sollten. Machen Sie sich darüber vorerst nicht zu viele Gedanken. Im Laufe des Kurses versuchen wir, diese implizit zu lehren, was bedeutet, dass wir Ihnen beim Lehren von HTML, CSS und JavaScript Beispiele geben, die nach Möglichkeit den Best Practices folgen. Später in Ihrem Lernweg werden Sie wahrscheinlich eine explizite Beschäftigung mit diesen Bereichen erkunden.

- **Progressive Enhancement**
  - : Entwicklung eines minimalen Erlebnisses, das die wesentlichen Funktionen für alle Benutzer bereitstellt, und Verbesserung der Erfahrung und anderer Erweiterungen in Browsern, die sie unterstützen können. Progressive Enhancement wird oft als unwichtig angesehen, da Browser heutzutage neue Features konsistenter unterstützen und Menschen tendenziell schnellere Internetverbindungen mit höheren Datenlimits haben. Betrachten Sie jedoch Beispiele, wie das Reduzieren von Dekorationen, um ein mobiles Erlebnis zu verbessern und Daten zu sparen, oder das Bereitstellen eines leichteren, bandbreitenarmen Erlebnisses für Benutzer, die pro Megabyte bezahlen oder über verbundene Verbindungen verfügen.
- **Cross-Browser-Kompatibilität**
  - : Sicherstellen, dass Ihre Webseite auf so vielen Geräten wie möglich funktioniert. Dies beinhaltet die Verwendung von Technologien, die alle Browser unterstützen, das Bereitstellen besserer Erfahrungen für Browser, die damit umgehen können (Progressive Enhancement), und/oder das Schreiben von Code, der auf eine einfachere, aber dennoch nutzbare Erfahrung in älteren Browsern zurückfällt (als **graceful degradation** bezeichnet). Es erfordert auch Tests, um zu sehen, ob irgendetwas in bestimmten Browsern fehlschlägt, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Trennung der Ebenen**
  - : Platzieren Sie Ihren Inhalt (HTML), Stil (CSS) und Verhalten (JavaScript) in verschiedenen Codendateien, anstatt sie alle zusammen an einem Ort zu bündeln. Dies ist aus vielen Gründen eine gute Idee, einschließlich Codeverwaltung und Verständlichkeit sowie Teamarbeit/Trennung von Aufgaben. In der Realität ist die Trennung jedoch nicht immer klar. Es ist ein Ideal, auf das man so weit wie möglich hinarbeiten sollte, anstatt ein absolutes.
- **Responsive Webdesign**
  - : Machen Sie Ihre Funktionalitäten und Layouts flexibel, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die auf einem Breitbild-Browser auf dem Desktop auf eine Weise angeordnet ist, aber als kompakteres, einspaltiges Layout auf mobilen Browsern angezeigt wird. Versuchen Sie, die Breite Ihres Browserfensters jetzt anzupassen und sehen Sie, was mit dem Layout der Seite passiert.
- **Performance**
  - : Websites so schnell wie möglich laden lassen, aber auch intuitiv und einfach zu bedienen, sodass Benutzer nicht frustriert werden und woanders hingehen.
- **Internationalisierung**
  - : Websites für Menschen aus verschiedenen Kulturen nutzbar machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen (wie das Anpassen Ihres Layouts, damit es auch für rechts-nach-links oder oben-nach-unten-Sprachen funktioniert) und menschliche Überlegungen (wie die Verwendung einfacher, nicht-slangs Sprache, damit vielfältige Kulturen eher Ihren Text verstehen).
- **Privatsphäre** & **Sicherheit**
  - : Diese beiden Konzepte sind miteinander verwandt, aber unterschiedlich. Privatsphäre bezieht sich darauf, Menschen ihre Geschäfte privat erledigen lassen zu können und sie nicht zu überwachen oder mehr ihrer Daten zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website auf eine sichere Weise zu bauen, sodass böswillige Benutzer keine Informationen darauf von Ihnen oder Ihren Benutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
