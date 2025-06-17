---
title: Das Webstandards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web und Webstandards – wie sie entstanden sind, was Webstandards-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, Webbrowsern und Web-Technologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Webstandards und die grundlegenden Prinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsgremien arbeiten – zum Beispiel der <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Erstellung von Standards.</li>
          <li>Die wichtigsten Webstandards-Technologien und wie sie zusammenarbeiten.</li>
          <li>Serverseitige (dynamische) versus clientseitige (statische) Dateien.</li>
          <li>Beste Praktiken für das Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

In den späten 1960er-Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** angesehen werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung der [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollsuite aufwies. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

Im Jahr 1980 schrieb [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (häufig als TimBL bezeichnet) ein Programm namens ENQUIRE, das das Konzept von Verknüpfungen zwischen verschiedenen Knotenpunkten einführte. Klingt vertraut?

Schnell vorwärts zum Jahr 1989, als TimBL [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN schrieb; diese beiden Veröffentlichungen zusammen boten den Hintergrund dafür, wie das Web funktionieren würde. Sie erregten genügend Interesse, um TimBLs Vorgesetzte davon zu überzeugen, ihm die Erlaubnis zu geben, ein globales Hypertext-System zu schaffen.

Bis 1990-91 hatte TimBL alles erstellt, was benötigt wurde, um die erste Version des **World Wide Web** (allgemein als **Web** bezeichnet) zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen Webserver und einige Webseiten, die man sich anschauen konnte.

> [!NOTE]
> Leute verwenden manchmal "das Web" und "das Internet" austauschbar, aber sie sind unterschiedliche Dinge. Das Internet ist die Infrastruktur, die es ermöglicht, Informationen weltweit zwischen verschiedenen Servern und Clients zu transportieren, während das Web ein auf dem Internet aufgebautes System ist. Das Web definiert Arten von Informationen (Inhalt und Code), die über das Internet transportiert werden, sowie Kommunikationsprotokolle zur Verwaltung dieses Transports.

Im Jahr 1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter von vielen verschiedenen Unternehmen zusammenbringt, um gemeinsam an der Schaffung von Webtechnologien zu arbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung bestehender Webtechnologien wie HTML und HTTP und an der Schaffung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). CSS und JavaScript waren besonders wichtig, um dem Web Stil und Interaktivität zu verleihen und es so aussehen zu lassen, wie wir es heute kennen.

In den folgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. Andere Normungsorganisationen entstanden ebenfalls, um verschiedene Aspekte von Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie an einem detaillierteren Bericht über die Web-Geschichte interessiert sind, suchen Sie nach "Geschichte des Web" in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) und sehen Sie, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, die Spezifikationen genannt werden und genau beschreiben, wie die Technologie funktionieren soll. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb gibt es Seiten wie die MDN Web Docs). Stattdessen sollen sie von Softwareingenieuren verwendet werden, um diese Technologien zu implementieren (in der Regel in Webbrowsern).

### Standardisierungsgremien und Prozesse

Webstandards werden von Standardisierungsgremien erstellt — Institutionen, die Gruppen von Menschen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und zu vereinbaren, wie die Technologien im besten Fall funktionieren sollten, um all ihre Anwendungsfälle zu erfüllen.

Das W3C ist das bekannteste Webstandards-Gremium, aber es gibt noch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente und deren zugehörige APIs sowie andere umgebende Technologien) implementiert werden sollen.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) publiziert Technologien für 3D-Grafiken, wie z.B. WebGL.

Die vollständigen Prozesse, durch die Standards erstellt werden, können tief und komplex sein. Es sei denn, Sie möchten Ihre eigenen Webtechnologiefunktionen erstellen, müssen Sie den Großteil davon nicht verstehen. Wenn Sie zur Diskussion über neue Technologien beitragen und Feedback geben möchten, ist es in der Regel eine Frage des Beitritts zur relevanten Mailingliste oder einem anderen Diskussionsmechanismus. Standards-Diskussionen werden öffentlich geführt, daher der Begriff ["Offene" Standards](#open_standards).

Zunächst geben wir Ihnen ein allgemeines, hochrangiges Verständnis davon, wie Standardprozesse funktionieren:

1. Jemand bemerkt den Bedarf für eine neue Webstandard-Funktion, die das Leben von Entwicklern erleichtern wird. Beispielsweise gibt es vielleicht ein häufig verwendetes Muster in Webbenutzeroberflächen, das jedoch lästig zu implementieren ist. Eine spezielle CSS-Funktion würde es viel einfacher machen. Der "Jemand" könnte jeder sein — ein einzelner Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Die Person diskutiert diese Funktion mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt, Interesse an der Implementierung der Funktion zu wecken. In der Regel schreiben sie ein erklärendes Dokument, das den Bedarf der Funktion und deren Funktionsweise erklärt, und ein Code-Demo, das zeigt, wie die Funktion in Aktion aussehen würde.
3. Wenn genügend Interesse an der Funktion besteht, wird sie formell innerhalb der zuständigen Standardisierungsgremien-Arbeitsgruppe diskutiert. Zum Beispiel werden CSS-Funktionen in der Regel von der [CSS Working Group](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [CSS Working Group Wikipedia-Seite](https://en.wikipedia.org/wiki/CSS_Working_Group) für eine etwas detailliertere Beschreibung und Geschichte). Bevor eine neue Webtechnologie akzeptiert wird, muss sie gründlich evaluiert werden, um sicherzustellen, dass sie gut für das Web ist — zum Beispiel, dass sie keine Sicherheitsprobleme einführt, dass sie [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien ist und dass sie nicht auf Patenten basiert.
4. Um die Funktion zu beweisen, passieren mehrere Dinge. Diese Punkte können gleichzeitig mit Punkt 3 oder sogar davor geschehen (Browser-Anbieter implementieren manchmal proprietäre/nicht-standardisierte Funktionen und versuchen dann, sie im Nachhinein zu standardisieren):

   1. Ein oder mehrere Browser-Anbieter werden eine experimentelle Version der neuen Funktion implementieren, die oft standardmäßig deaktiviert ist, aber von Menschen aktiviert werden kann, die sie testen und Feedback geben möchten.
   2. Ein Mitglied der Arbeitsgruppe wird sie auch zu einer Technologiespezifikation hinzufügen, damit Browser-Anbieter sie einheitlich implementieren können.
   3. Man wird auch Feedback von anderen Browser-Anbietern suchen, um zu sehen, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich sie ihn implementieren werden. Diese werden als Standardpositionen bezeichnet. Siehe beispielsweise [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Personen werden auch eine umfangreiche Testreihe schreiben, um zu demonstrieren, dass die Funktion wie beschrieben funktioniert.

5. Schließlich, wenn alles gut geht, wird die Funktion in allen Browsern implementiert und kann bei der Erstellung von Websites verwendet werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die die Funktion vorschlagen, sie in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu sammeln, dieselben Personen sind.

Sie finden weitere Informationen zu spezifischen Standardisierungsprozessen. Siehe beispielsweise:

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG — Working Mode](https://whatwg.org/working-mode)
- [The TC39 Process](https://tc39.es/process-document/)

## Grundprinzipien der Webstandards

Die wichtigsten Grundprinzipien des Webs, die das Web zu einer einzigartigen und spannenden Branche machen, in der man tätig sein kann, sind folgende:

- Offen zum Mitwirken und Nutzen und daher nicht durch Patente belastet oder von einer einzelnen privaten Einheit kontrolliert.
- Zugänglich und interoperabel.
- Sie brechen das Web nicht.

Schauen wir uns jedes dieser Prinzipien etwas genauer an.

### "Offene" Standards

Eines der wichtigsten Merkmale von Webstandards, auf das TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) **offen** sein sollten. Das bedeutet, dass sie kostenlos sowohl mitgestaltet als auch genutzt werden können und nicht durch Patente/Lizenzen belastet sind. Das ist wichtig — wenn eine Webtechnologie auf patentierten/lizenzierten Technologien beruht, kann der Patentinhaber/Lizenzgeber den Implementierern der Browser potenziell hohe Geldbeträge berechnen, und diese Kosten würden dann an die Browserbenutzer weitergegeben werden.

Darüber hinaus bedeutet das offene Schaffen von Webtechnologien in Zusammenarbeit zwischen vielen verschiedenen Unternehmen, dass kein einzelnes Unternehmen die Kontrolle darüber hat, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einzelnes Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu setzen, oder eine neue Version von HTML herausbringt, die alle kaufen müssen, um weiterhin Websites erstellen zu können, oder schlimmer noch, dass es sein Interesse verliert und es einfach abschaltet.

Offene Standards ermöglichen es dem Web, eine frei verfügbare öffentliche Ressource zu bleiben, in der jeder den Code zum Erstellen einer Website kostenlos schreiben und jeder am Prozess der Standarderstellung mitwirken kann.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundsätzlich darauf ausgelegt, dass Webinhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als großer Gleichmacher konzipiert, der es Menschen ermöglicht, unabhängig von ihren Umständen auf Informationen zuzugreifen. Das bedeutet beispielsweise:

- Menschen, die keine Maus oder ein Zeigegerät verwenden können, können die Tastatur nutzen, um im Web zu navigieren.
- Menschen mit Sehbehinderungen können Inhalte vergrößern oder ein Programm verwenden, das als **Screenreader** bezeichnet wird, um Inhalte vorzulesen und Bedienelemente in einer für sie verständlichen Weise zu beschreiben.

> [!NOTE]
> Sie werden später in Ihrem Lernprozess mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erfahren.

Darüber hinaus sind Webtechnologien darauf ausgelegt, **interoperabel** zu sein. Da Webtechnologien gemäß veröffentlichten Standards implementiert werden, sollten Browser für eine gegebene Eingabe (zum Beispiel HTML-, CSS- oder JS-Code) die gleiche Ausgabe rendern — mit anderen Worten, eine Website sollte über mehrere Browser hinweg konsistent funktionieren.

### Das Web nicht brechen

Ein weiterer Ausdruck, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist "das Web nicht brechen". Die Idee dahinter ist, dass jede neue Webtechnologie rückwärtskompatibel mit dem sein sollte, was zuvor vorhanden war, sodass vorhandene Websites weiterhin genauso funktionieren, wie sie es zuvor taten.

Browser-Anbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne eine Änderung im Rendering oder in der Funktionalität zu verursachen, die dazu führen würde, dass ihre Nutzer denken, dass eine Website nicht mehr richtig funktioniert, und sie deshalb einen anderen Browser ausprobieren.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen müssen, wenn Sie ein Frontend-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie verwenden werden, um eine Website zu erstellen. Sie haben diese bereits im [vorherigen Modul](/de/docs/Learn_web_development/Getting_started/Your_first_website) kennengelernt, aber zur Wiederholung:

- HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte umschließen (markieren) können, um ihnen Bedeutung (Semantik) und Struktur zu verleihen. Wenn wir eine Hausbau-Analogie anwenden, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.
- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stile auf Ihr HTML anzuwenden — zum Beispiel das Setzen von Text- und Hintergrundfarben, das Hinzufügen von Rahmen, das Animieren von Dingen oder das Layout einer Seite auf eine bestimmte Weise. In der Hausanalogie ist CSS wie die Farbe, Tapete, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.
- **JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischem Stilwechsel über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken.
  - Sie werden den Begriff **API** zusammen mit JavaScript hören, der für **Application Programming Interface** steht. Eine JavaScript-API ist eine Funktionalität, die auf JavaScript aufbaut und es Ihnen ermöglicht, andere, komplexere Codeteile oder andere Funktionalitäten auf Ihrem Computer (z.B. Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf eine überschaubare Weise zu steuern.
  - In der Hausanalogie ist JavaScript wie der Herd, der Fernseher, die Mikrowelle oder der Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionen verleihen.

### Andere Webtechnologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie bereits erwähnt.
- [SVG](/de/docs/Web/SVG) zur Erstellung und Manipulation von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

HTML, CSS und JavaScript sind jedoch bei weitem die wichtigsten Technologien, die man lernen sollte, daher konzentrieren wir uns in unserem Lernweg hauptsächlich auf diese.

## Werkzeuge

Sobald Sie die Standard- und Grundlagen-Technologien zum Erstellen von Webseiten (wie HTML, CSS und JavaScript) gelernt haben, werden Sie bald auf verschiedene Werkzeuge stoßen, die verwendet werden können, um Ihre Arbeit einfacher oder effizienter zu machen. Beispiele sind:

- [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die zur Fehlersuche in Ihrem Code verwendet werden können.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests durchzuführen, die zeigen, ob Ihr Code wie beabsichtigt funktioniert.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- Sogenannte **Linters** und **Formatter**, die eine Reihe von Regeln für den Codierstil nehmen, Ihren Code überprüfen und Ihren Code aktualisieren, um diesen Regeln zu folgen. Prettier, das Sie [früher im Kurs kennengelernt haben](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions), ist ein Beispiel für einen Formatter.

## Server-seitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Frontend zu produzieren, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als Backend- (oder serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis an den Browser gesendet wird, um es anzuzeigen. Eine typische Verwendung für eine serverseitige Sprache besteht darin, einige Daten aus einer Datenbank zu holen, etwas HTML zu generieren, das die Daten enthält, und dann das HTML an den Browser zu senden, damit der Benutzer es anzeigen kann.

Beispiele für serverseitige Frameworks und Sprachen sind ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien werden nicht als "Webstandards" betrachtet — sie werden von Organisationen außerhalb der Webstandards-Prozesse von Organisationen wie dem W3C und WHATWG entwickelt — obwohl einige von ihnen ähnliche offene Prozesse haben.

### Statisch versus dynamisch

Eine andere Möglichkeit, clientseitige und serverseitige Sprachen zu beschreiben, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Bei Anforderung wird sie dem Client unverändert geliefert und vom Browser gerendert. Da sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Wenn serverseitiger Code (zum Beispiel ein Python-Skript oder eine ASP.NET-Seite) HTML generiert, das Daten enthält, und dieses HTML an den Client zurückgibt, ändern sich die Inhalte des HTML je nachdem, was der serverseitige Code tut. Es wird daher als "dynamisch" bezeichnet.

Es gibt oft eine gewisse Überschneidung zwischen den Konzepten von statischem und dynamischem Code. Serverseitige Sprachen definieren normalerweise HTML-Strukturen innerhalb einer Vorlagendatei, die meist statisches HTML mit einigen speziellen dynamischen Abschnitten umfasst, die sich je nach den einzufügenden Daten ändern.

## Beste Praktiken für das Web

Wir haben kurz über die Technologien gesprochen, die Sie verwenden werden, um Websites zu erstellen. Lassen Sie uns nun über die besten Praktiken sprechen, die Webentwickler im Allgemeinen anwenden, um sicherzustellen, dass ihre Websites für möglichst viele Menschen nutzbar sind.

Beim Webentwicklung kommt die Hauptursache der Unsicherheit daher, dass Sie nicht wissen, welche Technologie-Kombination jeder Benutzer verwenden wird, um Ihre Website anzusehen:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm betrachten.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbild-Monitor betrachten.
- Benutzer 3 könnte sehbehindert sein und einen Screenreader verwenden, um die Webseite zu lesen und zu interagieren.
- Benutzer 4 könnte einen sehr alten Desktop-Computer verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Website so flexibel wie möglich, so dass alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle das gleiche Erlebnis haben.

Sie werden im Laufe Ihres Studiums auf die folgenden Konzepte stoßen, die die besten Praktiken darstellen, an die sich Ihre Websites idealerweise halten sollten. Machen Sie sich darüber vorerst keine allzu großen Sorgen. Während des Großteils des Kurses versuchen wir, Ihnen diese implizit beizubringen, was bedeutet, dass unsere Beispiele beim Lehren von HTML, CSS und JavaScript, wo möglich, den besten Praktiken folgen werden. Später in Ihrem Lernprozess werden Sie vermutlich explizit in diesen Bereichen unterrichtet.

- **Progressive Enhancement**
  - : Erstellung eines minimalen Erlebnisses, das allen Benutzern die wesentliche Funktionalität bietet, und das Hinzufügen eines besseren Erlebnisses und anderer Verbesserungen in Browsern, die sie unterstützen können. Progressive Enhancement wird oft als unwichtig angesehen, da Browser heutzutage neue Funktionen konsistenter unterstützen und die Leute in der Regel schnellere Internetverbindungen mit höheren Datenverbrauchsgrenzen haben. Erwägen Sie jedoch Beispiele wie das Reduzieren von Dekorationen, um ein reibungsloses mobiles Erlebnis zu bieten und Daten zu sparen, oder das Anbieten eines leichten, datenarmen Erlebnisses für Benutzer, die pro Megabyte zahlen oder eine gemessene Verbindung haben.
- **Browserübergreifende Kompatibilität**
  - : Der Versuch, sicherzustellen, dass Ihre Webseite auf so vielen Geräten wie möglich funktioniert. Dies umfasst die Verwendung von Technologien, die alle Browser unterstützen, die Bereitstellung besserer Erlebnisse für Browser, die sie verarbeiten können (progressive Enhancement) und/oder die Erstellung von Code, der auf eine einfachere, aber trotzdem nutzbare Erfahrung in älteren Browsern zurückfällt (als **graceful degradation** bezeichnet). Erfordert auch das Testen, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Trennung der Schichten**
  - : Das Platzieren von Inhalt (HTML), Stil (CSS) und Verhalten (JavaScript) in verschiedenen Dateiabschnitten, anstatt sie alle zusammen im selben Ort unterzubringen. Dies ist aus vielen Gründen eine gute Idee, einschließlich Codeverwaltung und -verständlichkeit sowie Teamarbeit/Trennung der Rollen. In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, für das man, wenn möglich, anstreben sollte, anstatt ein absolutes.
- **Responsive Webdesign**
  - : Das Flexibel machen Ihrer Funktionalität und Layouts, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offenkundiges Beispiel ist eine Website, die in einem Breitbildbrowser auf dem Desktop auf eine Weise gestaltet ist, sich aber als ein kompakteres, einspaltiges Layout auf Mobiltelefonbrowsern darstellt. Versuchen Sie, jetzt die Breite Ihres Browserfensters zu ändern, und sehen Sie, was mit dem Site-Layout passiert.
- **Leistung**
  - : Das Optimieren von Websites, damit sie so schnell wie möglich laden, gleichzeitig jedoch intuitiv und einfach zu verwenden sind, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Internationalisierung**
  - : Websites für Menschen aus verschiedenen Kulturen nutzbar machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen (wie das Anpassen Ihres Layouts, damit es immer noch gut für von rechts nach links oder von oben nach unten geschriebene Sprachen funktioniert) und menschliche Überlegungen (wie die Verwendung einfacher, nicht umgangssprachlicher Sprache, damit verschiedene Kulturen Ihre Texte besser verstehen können).
- **Datenschutz** & **Sicherheit**
  - : Diese beiden Konzepte sind verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen zu ermöglichen, ihr Geschäft privat fortzusetzen und sie nicht auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie absolut benötigen. Sicherheit bezieht sich darauf, Ihre Website so sicher zu konstruieren, dass böswillige Benutzer keine Informationen, die darauf enthalten sind, von Ihnen oder Ihren Benutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
