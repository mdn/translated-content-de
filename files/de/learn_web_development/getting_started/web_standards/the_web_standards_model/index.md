---
title: Das Web-Standards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen zum Web und zu den Webstandards — wie sie entstanden sind, was Webstandard-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Webstandards und die wesentlichen Grundprinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsorganisationen arbeiten — zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Erstellung von Standards.</li>
          <li>Die wichtigsten Webstandard-Technologien und wie sie zusammenarbeiten.</li>
          <li>Serverseitige (dynamische) versus clientseitige (statische) Dateien.</li>
          <li>Web-Best-Practices.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurzer Überblick über die Geschichte des Webs

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** betrachtet werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung der [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollfamilie bot. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knotenpunkten beinhaltete. Kommt Ihnen das bekannt vor?

Spulen wir vor ins Jahr 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText bei CERN; diese beiden Veröffentlichungen zusammen boten den Hintergrund dafür, wie das Web funktionieren sollte. Sie erhielten ein erhebliches Interesse, genug, um TimBLs Vorgesetzte zu überzeugen, ihm die Erlaubnis zu geben, ein globales Hypertext-System zu schaffen.

Bis 1990-91 hatte TimBL alles Notwendige geschaffen, um die erste Version des **World Wide Web** betreiben zu können (allgemein als das **Web** bezeichnet) — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) hieß, einen Webserver und einige Webseiten zum Anschauen.

> [!NOTE]
> Menschen verwenden manchmal "das Web" und "das Internet" austauschbar, aber es sind verschiedene Dinge. Das Internet ist die Infrastruktur, die es ermöglicht, Informationen weltweit zwischen verschiedenen Servern und Clients zu transportieren, während das Web ein System ist, das auf dem Internet aufbaut. Das Web definiert die Arten von Informationen (Inhalt und Code), die über das Internet transportiert werden, sowie Kommunikationsprotokolle zur Verwaltung dieses Transports.

1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter von vielen verschiedenen Unternehmen zusammenbringt, um gemeinsam an der Schaffung von Webtechnologien zu arbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung der bestehenden Webtechnologien wie HTML und HTTP und der Schaffung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). CSS und JavaScript waren besonders wichtig, um dem Web Styling und Interaktivität zu verleihen, wodurch es mehr so aussieht wie das Web, das wir heute kennen.

In den folgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung tausender Webserver und der Erstellung von Millionen von Webseiten. Andere Standardisierungsorganisationen erschienen ebenfalls, um verschiedene Aspekte von Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie daran interessiert sind, einen detaillierteren Bericht über die Webgeschichte zu lesen, versuchen Sie, in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) nach "Geschichte des Webs" zu suchen und sehen Sie, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir nutzen, um Websites zu erstellen. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die Technologien benutzt, die sie beschreiben (deshalb gibt es Seiten wie die MDN Web Docs). Stattdessen sind sie dafür gedacht, von Software-Ingenieuren verwendet zu werden, um diese Technologien zu implementieren, meist in Webbrowsern.

### Standardisierungsorganisationen und Prozesse

Webstandards werden von Standardisierungsorganisationen erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, um zusammenzuarbeiten und zu vereinbaren, wie die Technologien im besten Sinne funktionieren sollten, um alle ihre Anwendungsfälle zu erfüllen.

Das W3C ist die bekannteste Webstandard-Organisation, aber es gibt auch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente, ihre zugehörigen APIs und andere umgebende Technologien) implementiert werden sollten.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafik, wie WebGL.

Die vollständigen Prozesse, durch die Standards geschaffen werden, können tief und komplex werden. Sie müssen jedoch nicht die meisten davon verstehen, es sei denn, Sie möchten Ihre eigenen Webtechnologie-Funktionen erstellen. Wenn Sie zur Diskussion über neue Technologien beitragen und Feedback geben möchten, ist es normalerweise eine Frage des Beitritts zur entsprechenden Mailingliste oder einem anderen Diskussionsmechanismus. Standards-Diskussionen werden öffentlich durchgeführt, daher der Begriff ["Offene" Standards](#open_standards).

Für den Moment geben wir Ihnen ein allgemeines, hohes Verständnis davon, wie Standardprozesse funktionieren:

1. Jemand bemerkt das Bedürfnis nach einer neuen Webstandard-Funktion, die das Leben der Entwickler erleichtern wird. Vielleicht gibt es zum Beispiel ein häufiges Muster, das häufig in Webbenutzeroberflächen verwendet wird, aber es ist umständlich zu implementieren. Eine dedizierte CSS-Funktion würde es viel einfacher machen. Der Jemand könnte jeder sein — ein einzelner Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Die Person diskutiert diese Funktion mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt, Interesse an der Implementierung der Funktion zu wecken. In der Regel schreiben sie ein Erläuterungsdokument, das das Bedürfnis nach der Funktion und deren Funktionsweise erklärt, sowie ein Code-Demo, das zeigt, wie die Funktion in Aktion aussehen würde.
3. Wenn genügend Interesse an der Funktion besteht, wird sie formell in der entsprechenden Standardisierungsarbeitsgruppe des Körpers diskutiert. Zum Beispiel werden CSS-Funktionen in der Regel von der [CSS-Arbeitsgruppe](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [CSS-Arbeitsgruppe wikipedia-Seite](https://en.wikipedia.org/wiki/CSS_Working_Group) für eine weitergehende Beschreibung und Geschichte). Bevor eine neue Webtechnologie akzeptiert wird, muss sie gründlich bewertet werden, um sicherzustellen, dass sie gut für das Web ist — zum Beispiel darf sie keine Sicherheitsprobleme verursachen, sie muss [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien sein und sie darf nicht auf Patenten basieren.
4. Zur Bewältigung der Funktion passieren mehrere Dinge. Diese Punkte können gleichzeitig mit Punkt 3 oder sogar davor geschehen (Browser-Anbieter implementieren manchmal proprietäre/nichtstandardisierte Funktionen und versuchen dann, sie danach zu standardisieren):
   1. Einer oder mehrere Browser-Hersteller implementieren eine experimentelle Version der neuen Funktion, oft standardmäßig deaktiviert, die jedoch von Personen aktiviert werden kann, die sie testen und Feedback geben möchten.
   2. Ein Mitglied der Arbeitsgruppe fügt sie auch einer Technologiespezifikation hinzu, damit Browser-Hersteller sie konsistent implementieren können.
   3. Sie werden auch das Feedback von anderen Browser-Herstellern einholen, um herauszufinden, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich sie es umsetzen werden. Diese werden als Standards-Positionen bezeichnet. Siehe zum Beispiel [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Einzelpersonen schreiben auch eine umfangreiche Testsuite, um zu demonstrieren, dass die Funktion wie beschrieben funktioniert.

5. Letztendlich, wenn alles gut läuft, wird die Funktion über alle Browser hinweg implementiert und kann beim Erstellen von Websites verwendet werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die die Funktion vorschlagen, sie in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu sammeln, dieselbe Person oder Personen sind.

Sie können weitere Informationen zu spezifischen Standardisierungskörperprozessen finden. Siehe zum Beispiel:

- [W3C-Prozessdokument](https://www.w3.org/policies/process/)
- [WHATWG – Arbeitsmodus](https://whatwg.org/working-mode)
- [Der TC39-Prozess](https://tc39.es/process-document/)

## Grundprinzipien der Webstandards

Die wesentlichen Grundprinzipien des Webs, die das Web zu einer einzigartigen und spannenden Branche machen, in der man sich engagieren kann, sind die folgenden:

- Offen für Beiträge und Nutzung, und daher nicht durch Patente belastet oder von einem einzigen privaten Unternehmen kontrolliert.
- Zugänglich und interoperabel.
- Sie brechen das Web nicht.

Lassen Sie uns jeden dieser Punkte etwas detaillierter betrachten.

### "Offene" Standards

Einer der entscheidenden Aspekte von Webstandards, auf den sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) **offen** sein sollten. Dies bedeutet, dass sie sowohl für Beiträge als auch zur Nutzung frei sind und nicht durch Patente/Lizenzen belastet sind. Das ist wichtig — wenn eine Webtechnologie auf patentierten/lizensierten Technologien basiert, um zu funktionieren, kann der Patent-/Inhaber den Browser-Herstellern möglicherweise große Summen abverlangen, die dann an die Browser-Benutzer weitergegeben würden.

Darüber hinaus bedeutet die Tatsache, dass Webtechnologien offen entwickelt werden, in Zusammenarbeit zwischen vielen verschiedenen Unternehmen, dass kein einziges Unternehmen sie kontrollieren kann, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einziges Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stellen, oder eine neue Version von HTML veröffentlicht, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder schlimmer noch, dass es entscheidet, es sei nicht mehr interessiert und einfach abschaltet.

Offene Standards ermöglichen es, das Web als frei verfügbares öffentliches Gut zu erhalten, wo jeder den Code schreiben kann, um eine Website kostenlos zu erstellen, und jeder kann zum Standardisierungsprozess beitragen.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundsätzlich so konzipiert, dass Webinhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als großer Ausgleich angesehen, um Menschen unabhängig von ihren Umständen Zugang zu Informationen zu ermöglichen. Dies bedeutet, zum Beispiel:

- Menschen, die keine Maus oder ein Zeigegerät verwenden können, können die Tastatur zur Navigation im Web verwenden.
- Menschen mit Sehbehinderungen können Inhalte vergrößern oder ein sogenanntes **Screenreader**-Programm verwenden, um Inhalte vorzulesen und Steuerelemente auf eine Weise zu beschreiben, die Sinn ergibt.

> [!NOTE]
> Sie werden später im Lernpfad mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erfahren.

Darüber hinaus sollen Webtechnologien **interoperabel** sein. Da Webtechnologien gemäß veröffentlichten Standards implementiert werden, sollten Browser für eine gegebene Eingabe (z. B. HTML, CSS oder JS-Code) dasselbe Ausgabeergebnis liefern — mit anderen Worten, eine Website sollte über mehrere Browser hinweg konsistent funktionieren.

### Brechen Sie das Web nicht

Ein weiterer Satz, den Sie in Bezug auf offene Webstandards hören werden, ist "breche das Web nicht". Die Idee dahinter ist, dass jede neue Webtechnologie abwärtskompatibel mit dem sein sollte, was vorher war, sodass bestehende Websites weiterhin genauso funktionieren wie zuvor.

Webbrowser-Anbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne Unterschiede in der Darstellung oder Funktionalität zu verursachen, die ihre Benutzer denken lassen, dass eine Website defekt ist und daher einen anderen Browser verwenden.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen sollten, wenn Sie Front-End-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie zum Erstellen einer Website verwenden werden. Sie haben diese im [vorherigen Modul](/de/docs/Learn_web_development/Getting_started/Your_first_website) kennengelernt, aber zur Wiederholung:

- HyperText Markup Language oder **HTML**, ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte umgeben (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu verleihen. Wenn wir eine Hausbau-Analogie übernehmen, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.
- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die zum Anwenden von Stilen auf Ihr HTML verwendet wird — zum Beispiel das Festlegen von Text- und Hintergrundfarben, das Hinzufügen von Rahmen, das Animieren von Dingen oder das Layout einer Seite auf eine bestimmte Weise. In der Hausanalogie ist CSS wie die Farbe, Tapete, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.
- **JavaScript** ist die Programmiersprache, die wir verwenden, um Websites Interaktivität hinzuzufügen, von dynamischem Stilwechseln bis hin zum Abrufen von Updates vom Server, bis hin zu komplexer 3D-Grafik.
  - Sie werden auch den Begriff **API** zusammen mit JavaScript hören, was für **Application Programming Interface** steht. Eine JavaScript-API ist eine Funktionalität, die auf JavaScript aufbaut und Ihnen ermöglicht, andere komplexere Code-Bereiche oder andere Funktionalitäten auf Ihrem Computer (wie Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf eine verwaltbare Weise zu steuern.
  - In der Hausanalogie ist JavaScript wie der Herd, Fernseher, die Mikrowelle oder der Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionen verleihen.

### Andere Webtechnologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie bereits erwähnt.
- [SVG](/de/docs/Web/SVG) zur Erstellung und Manipulation von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

HTML, CSS und JavaScript sind jedoch bei weitem die wichtigsten Technologien, die Sie lernen sollten, daher werden wir uns in unserem Lernpfad hauptsächlich auf diese konzentrieren.

## Werkzeuge

Sobald Sie die grundlegenden, geschützten Technologien zum Erstellen von Webseiten (wie HTML, CSS und JavaScript) kennen gelernt haben, werden Sie bald auf verschiedene Werkzeuge stoßen, die Ihnen Ihre Arbeit erleichtern oder effizienter machen können. Beispiele sind:

- [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die zum Debuggen Ihres Codes verwendet werden können.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests auszuführen, um zu zeigen, ob Ihr Code so funktioniert, wie Sie es beabsichtigt haben.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- Sogenannte **Linter** und **Formatter**, die eine Reihe von Regeln für den Codierungsstil nehmen, Ihren Code anschauen und Ihren Code so aktualisieren, dass er diesen Regeln folgt. Prettier, welches Sie [früher im Kurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) kennengelernt haben, ist ein Beispiel für einen Formatter.

## Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Front-End- (oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um eine Website-Front-End zu erzeugen, die Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die Back-End- (oder serverseitige) Sprachen genannt werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann an den Browser gesendet wird, um es anzuzeigen. Eine typische Verwendung einer serverseitigen Sprache besteht darin, einige Daten aus einer Datenbank abzurufen, einige HTML zu generieren, um die Daten zu enthalten, und dann das HTML an den Browser zu senden, um es dem Benutzer anzuzeigen.

Beispielhafte serverseitige Frameworks und Sprachen sind ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien werden nicht als "Webstandards" angesehen — sie werden von Organisationen außerhalb der Standardisierungsprozesse von Organisationen wie dem W3C und WHATWG entwickelt — obwohl einige von ihnen ähnliche offene Prozesse haben.

### Statisch versus dynamisch

Eine andere Art, wie clientseitige und serverseitige Sprachen oft beschrieben werden, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Wenn sie angefordert wird, wird sie unverändert an den Client geliefert und vom Browser gerendert. Da sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Wenn serverseitiger Code (zum Beispiel ein Python-Skript oder eine ASP.NET-Seite) einige HTML-Daten generiert und das HTML an den Client zurückgibt, ändern sich die Inhalte des HTML je nachdem, was der serverseitige Code tut. Es wird daher als "dynamisch" bezeichnet.

Es gibt oft eine gewisse Überschneidung zwischen den Konzepten von statischem und dynamischem Code. In der Regel definieren serverseitige Sprachen HTML-Strukturen in einer Vorlagendatei, die dazu neigen, größtenteils statisches HTML mit einigen speziellen dynamischen Abschnitten zu enthalten, die sich je nachdem, welche Daten eingefügt werden müssen, ändern.

## Web-Best-Practices

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden werden. Lassen Sie uns nun die besten Praktiken diskutieren, die Webentwickler im Allgemeinen anwenden, um sicherzustellen, dass ihre Websites von möglichst vielen Menschen genutzt werden können.

Bei der Webentwicklung ist die Hauptursache für Unsicherheiten die Tatsache, dass Sie nicht genau wissen, welche Kombination aus Technologie jeder Benutzer verwenden wird, um Ihre Website zu betrachten:

- Benutzer 1 schaut es sich vielleicht auf einem iPhone an, mit einem kleinen, schmalen Bildschirm.
- Benutzer 2 sieht es sich vielleicht auf einem Windows-Laptop mit einem Widescreen-Monitor an.
- Benutzer 3 ist möglicherweise sehbehindert und verwendet einen Screenreader, um die Webseite zu lesen und mit ihr zu interagieren.
- Benutzer 4 verwendet möglicherweise eine wirklich alte Desktop-Maschine, die keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle das gleiche Erlebnis haben.

Während Ihres Studiums werden Sie auf die unten stehenden Konzepte stoßen, die beste Praktiken darstellen, denen Ihre Websites idealerweise entsprechen sollten. Machen Sie sich noch nicht zu viele Sorgen darüber. Im Laufe des Kurses versuchen wir, diese implizit zu lehren, was bedeutet, dass wir Ihnen beim Lehren von HTML, CSS und JavaScript zeigen, wie man konsequent die besten Praktiken befolgt. Später auf Ihrer Lernreise werden Sie wahrscheinlich auch explizite Lehren in diesen Bereichen erkunden.

- **Progressive Verbesserung**
  - : Schaffen Sie ein minimales Erlebnis, das die wesentlichen Funktionen für alle Benutzer bietet, und schichten Sie ein besseres Erlebnis und andere Verbesserungen in Browsern ein, die sie unterstützen können. Progressive Verbesserung wird oft als unwichtig angesehen, weil Browser heutzutage tendenziell neue Funktionen konsistenter unterstützen und Menschen tendenziell schnellere Internetverbindungen mit höheren Nutzungsbegrenzungen haben. Denken Sie jedoch an Beispiele wie das Reduzieren der Dekoration, um ein reibungsloses mobiles Erlebnis zu ermöglichen und Daten zu sparen oder ein leichteres, wenig Bandbreite erforderndes Erlebnis für Benutzer anzubieten, die nach Megabyte bezahlen oder gemessene Verbindungen haben.
- **Cross-Browser-Kompatibilität**
  - : Versuchen Sie, sicherzustellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dies umfasst die Verwendung von Technologien, die alle Browser unterstützen, das Anbieten besserer Erlebnisse für Browser, die sie verarbeiten können (progressive Verbesserung) und/oder das Schreiben von Code, der bei älteren Browsern zu einem einfacheren, aber dennoch nutzbaren Erlebnis zurückfällt (genannt **graceful degradation**). Es erfordert auch Tests, um zu sehen, ob in bestimmten Browsern etwas fehlschlägt, und dann weitere Arbeiten, um diese Fehler zu beheben.
- **Trennen der Ebenen**
  - : Legen Sie Ihren Inhalt (HTML), das Styling (CSS) und das Verhalten (JavaScript) in verschiedenen Code-Dateien ab, anstatt sie alle an einem Ort zusammenzufassen. Dies ist aus vielen Gründen eine gute Idee, einschließlich des Code-Managements und der Code-Verständlichkeit sowie der Teamarbeit/Rollentrennung. In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, auf das man hinarbeiten sollte, wo immer es möglich ist, und nicht eine absolute.
- **Responsive Webdesign**
  - : Machen Sie Ihre Funktionalitäten und Layouts flexibel, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die auf einem Breitbild-Browser auf dem Desktop in einer bestimmten Weise angezeigt wird, aber auf mobilen Browsern als kompakteres, einspaltiges Layout dargestellt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters anzupassen, und sehen Sie, was mit dem Layout der Seite geschieht.
- **Performance**
  - : Websites so schnell wie möglich laden lassen, aber auch sie intuitiv und einfach zu bedienen machen, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Internationalisierung**
  - : Websites für Menschen aus verschiedenen Kulturen nutzbar machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen (z. B. das Ändern Ihres Layouts, damit es immer noch für von rechts nach links oder von oben nach unten geschriebene Sprachen funktioniert) und menschliche (z. B. die Verwendung von einfacher, nicht umgangssprachlicher Sprache, damit verschiedene Kulturen Ihre Texte eher verstehen können).
- **Datenschutz** & **Sicherheit**
  - : Diese beiden Konzepte stehen im Zusammenhang, sind jedoch unterschiedlich. Datenschutz bezieht sich darauf, Menschen zu erlauben, ihre Geschäfte privat abzuwickeln, sie nicht auszuspähen oder mehr Daten zu sammeln, als Sie absolut benötigen. Sicherheit bezieht sich darauf, Ihre Website auf sichere Weise zu erstellen, sodass böswillige Benutzer keine Informationen, die auf ihr enthalten sind, von Ihnen oder Ihren Benutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
