---
title: Das Web-Standards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet nützliche Hintergrundinformationen über das Web und Web-Standards — wie sie entstanden sind, was Web-Standardtechnologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Web-Standards und die grundlegenden Prinzipien, auf denen sie basieren.</li>
          <li>Wie Normungsgremien arbeiten — zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a>, und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Normenerstellung.</li>
          <li>Die wichtigsten Web-Standardtechnologien und wie sie zusammenarbeiten.</li>
          <li>Serverseitige (dynamische) versus clientseitige (statische) Dateien.</li>
          <li>Web-Best-Practices.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetz namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** angesehen werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung des [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) Protokollstapels beinhaltete. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knotenpunkten beinhaltete. Kommt Ihnen das bekannt vor?

Schneller Vorlauf ins Jahr 1989: TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen bildeten zusammen die Grundlage dafür, wie das Web funktionieren würde. Sie erhielten eine beträchtliche Menge an Interesse, genug, um TimBL's Vorgesetzte zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu schaffen.

Bis 1990-91 hatte TimBL alle erforderlichen Dinge geschaffen, um die erste Version des **World Wide Web** (allgemein als **Web** bezeichnet) zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), der erste Webbrowser namens [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb), ein Webserver und einige Webseiten zum Ansehen.

> [!NOTE]
> Menschen verwenden manchmal "das Web" und "das Internet" austauschbar, aber sie sind unterschiedliche Dinge. Das Internet ist die Infrastruktur, die es ermöglicht, Informationen weltweit zwischen verschiedenen Servern und Clients zu transportieren, während das Web ein auf dem Internet aufgebautes System ist. Das Web definiert Arten von Informationen (Inhalte und Code), die über das Internet transportiert werden und Kommunikationsprotokolle zur Verwaltung dieses Transports.

1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter vieler verschiedener Unternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologien zu arbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung bestehender Webtechnologien wie HTML und HTTP und an der Schaffung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). Insbesondere CSS und JavaScript waren entscheidend dafür, dem Web Stil und Interaktivität zu verleihen und es mehr wie das Web aussehen zu lassen, das wir heute kennen.

In den darauf folgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. Weitere Normungsgremien entstanden ebenfalls, um verschiedene Aspekte der Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie daran interessiert sind, einen detaillierteren Bericht über die Web-Geschichte zu lesen, versuchen Sie, nach "history of the web" in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) zu suchen und sehen, was Sie finden können.

## Web-Standards

**Web-Standards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht besonders nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb gibt es Websites wie MDN Web Docs). Vielmehr sind sie dazu gedacht, von Software-Ingenieuren genutzt zu werden, um diese Technologien zu implementieren (normalerweise in Webbrowsern).

### Normungsgremien und Prozesse

Web-Standards werden von Normungsgremien erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darüber zu einigen, wie die Technologien auf die bestmögliche Weise arbeiten sollten, um alle ihre Anwendungsfälle zu erfüllen.

Das W3C ist das bekannteste Web-Standardisierungsgremium, aber es gibt auch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs sowie andere umgebende Technologien) umgesetzt werden sollte.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken, wie WebGL.

Die vollständigen Prozesse, durch die Standards erstellt werden, können tief und komplex sein. Sie müssen jedoch nicht den Großteil davon verstehen, es sei denn, Sie möchten eigene Funktionen für Webtechnologien erstellen. Wenn Sie an der Diskussion über neue Technologien teilnehmen und Feedback geben möchten, geht es in der Regel darum, sich in die entsprechende Mailingliste oder einen anderen Diskussionsmechanismus einzutragen. Standarddiskussionen werden öffentlich geführt, daher der Begriff ["Offene" Standards](#open_standards).

Für jetzt geben wir Ihnen ein allgemeines, hohes Verständnis dafür, wie Standardisierungsprozesse funktionieren:

1. Jemand bemerkt den Bedarf an einer neuen Web-Standard-Funktion, die das Leben der Entwickler erleichtern würde. Zum Beispiel gibt es vielleicht ein häufig verwendetes Muster in Web-Benutzeroberflächen, das schwer umzusetzen ist. Eine dedizierte CSS-Funktion würde es viel einfacher machen. Jemand kann jeder sein — ein individueller Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Die Person bespricht diese Funktion mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt, Interesse an der Implementierung der Funktion zu wecken. In der Regel schreiben sie ein Erklärungsdokument, das den Bedarf für die Funktion erklärt und wie sie funktionieren wird, sowie eine Code-Demo, die zeigt, wie die Funktion in Aktion aussehen würde.
3. Wenn genug Interesse an der Funktion besteht, wird sie formell in der relevanten Arbeitsgruppe des Standardisierungsgremiums diskutiert. Zum Beispiel werden CSS-Funktionen normalerweise von der [CSS-Arbeitsgruppe](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [CSS-Arbeitsgruppe Wikipedia-Seite](https://en.wikipedia.org/wiki/CSS_Working_Group) für weitere Beschreibung und Geschichte). Bevor eine neue Webtechnologie akzeptiert wird, muss sie rigoros evaluiert werden, um sicherzustellen, dass sie gut für das Web ist — zum Beispiel, dass sie keine Sicherheitsprobleme einführt, sie [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien ist und sie nicht auf Patenten basiert.
4. Um die Funktion zu beweisen, geschieht Folgendes. Diese Punkte können gleichzeitig wie Punkt 3 geschehen oder sogar vorher (Browser-Anbieter implementieren manchmal proprietäre/nicht-standardmäßige Funktionen und versuchen dann, sie nachträglich zu standardisieren):

   1. Ein oder mehrere Browser-Anbieter implementieren eine experimentelle Version der neuen Funktion, oft standardmäßig deaktiviert, aber die von Personen getestet werden kann, die Feedback geben möchten.
   2. Ein Mitglied der Arbeitsgruppe wird es auch einer Technologiespezifikation hinzufügen, damit Browser-Anbieter es konsistent implementieren können.
   3. Sie werden auch Feedback von anderen Browser-Anbietern einholen, um zu sehen, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich es ist, dass sie ihn implementieren. Diese werden als Standards Positionen bezeichnet. Siehe zum Beispiel [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Personen werden auch eine umfangreiche Testreihe schreiben, um zu zeigen, dass die Funktion wie beschrieben funktioniert.

5. Schließlich, wenn alles gut geht, wird die Funktion in allen Browsern implementiert und kann bei der Erstellung von Websites verwendet werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die die Funktion vorschlagen, sie in einen Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu sammeln, dieselbe Personengruppe ist.

Sie finden weitere Informationen zu spezifischen Prozessen der Normungsgremien. Siehe zum Beispiel:

- [W3C-Prozessdokument](https://www.w3.org/policies/process/)
- [WHATWG — Arbeitsmodus](https://whatwg.org/working-mode)
- [Der TC39-Prozess](https://tc39.es/process-document/)

## Schlüsselprinzipien der Web-Standards

Die Schlüsselprinzipien des Webs, die das Web zu einer einzigartigen und aufregenden Branche machen, an der man beteiligt sein kann, sind die folgenden:

- Offen für Beitrag und Nutzung und daher nicht durch Patente belastet oder von einer einzigen privaten Instanz kontrolliert.
- Zugänglich und interoperabel.
- Sie brechen das Web nicht.

Schauen wir uns jeden dieser Punkte etwas detaillierter an.

### "Offene" Standards

Eines der zentralen Elemente von Web-Standards, auf das sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Web-Technologien) **offen** sein sollten. Das bedeutet, dass sie kostenlos zum Beitragen und Nutzen sind und nicht durch Patente/Lizenzen belastet sind. Das ist wichtig — wenn eine Web-Technologie auf patentierten/lizenzierten Technologien basiert, kann der Patent/Inhaber potenziell große Geldbeträge von den implementierenden Browser-Herstellern verlangen, und diese Kosten würden dann an die Browser-Nutzer weitergegeben.

Darüber hinaus bedeutet das, wenn Web-Technologien offen und in Zusammenarbeit zwischen vielen verschiedenen Unternehmen geschaffen werden, dass kein einzelnes Unternehmen sie kontrollieren kann, was eine wirklich gute Sache ist. Niemand möchte, dass ein einziges Unternehmen plötzlich entscheidet, das gesamte Web hinter einer Paywall zu verstecken oder eine neue Version von HTML herauszubringen, die alle kaufen müssen, um weiterhin Websites zu erstellen, oder noch schlimmer, zu entscheiden, dass sie nicht mehr interessiert sind und es einfach abschalten.

Offene Standards ermöglichen es, dass das Web eine frei verfügbare öffentliche Ressource bleibt, wo jeder den Code schreiben kann, um eine Website kostenlos zu erstellen, und jeder am Standardisierungsprozess teilnehmen kann.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundsätzlich darauf ausgelegt, dass Webinhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als großer Ausgleich gedacht, der es Menschen ermöglicht, unabhängig von den Umständen auf Informationen zuzugreifen. Das bedeutet zum Beispiel:

- Menschen, die nicht in der Lage sind, eine Maus oder ein Zeigegerät zu verwenden, können die Tastatur zur Navigation im Web verwenden.
- Menschen, die sehbehindert sind, können Inhalte vergrößern oder ein Programm namens **Screenreader** verwenden, um sich Inhalte vorlesen zu lassen und Steuerungen auf eine für sie sinnvolle Weise zu beschreiben.

> [!NOTE]
> Sie werden später im Lernpfad mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erfahren.

Darüber hinaus sind Web-Technologien darauf ausgelegt, **interoperabel** zu sein. Da Web-Technologien gemäß veröffentlichten Standards implementiert werden, sollten Browser für eine gegebene Eingabe (zum Beispiel HTML, CSS oder JS-Code) die gleiche Ausgabe anzeigen — mit anderen Worten, eine Website sollte über mehrere Browser hinweg konsistent funktionieren.

### Brechen Sie das Web nicht

Ein weiterer Ausdruck, den Sie im Zusammenhang mit offenen Web-Standards hören werden, ist "breche das Web nicht". Die Idee dahinter ist, dass jede neue Web-Technologie abwärtskompatibel mit dem, was vorher war, sein sollte, damit vorhandene Websites weiterhin auf die gleiche Weise funktionieren wie zuvor.

Webbrowser-Anbieter sollten in der Lage sein, neue Web-Technologien zu implementieren, ohne zu einer Rendering- oder Funktionsänderung zu führen, die dazu führen würde, dass ihre Nutzer denken, eine Website sei defekt und einen anderen Browser versuchen als Folge davon.

## Überblick über moderne Web-Technologien

Wenn Sie Frontend-Webentwickler werden möchten, gibt es eine Reihe von Technologien zu lernen. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie zum Erstellen einer Website verwenden. Sie haben sie im [vorherigen Modul](/de/docs/Learn_web_development/Getting_started/Your_first_website) kennengelernt, aber zur Wiederholung:

- HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, in die Sie Inhalte einbetten (markieren) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Wenn wir eine Hausbau-Analogie annehmen, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.
- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die zum Anwenden von Stilen auf Ihr HTML verwendet wird — zum Beispiel, um Text- und Hintergrundfarben festzulegen, Ränder hinzuzufügen, Dinge zu animieren oder eine Seite auf eine bestimmte Weise zu layouten. In der Hausanalogie ist CSS wie die Farbe, die Tapete, die Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.
- **JavaScript** ist die Programmiersprache, die wir verwenden, um Websites Interaktivität hinzuzufügen, von dynamischem Stilwechsel bis hin zum Abrufen von Updates vom Server, bis hin zu komplexer 3D-Grafik.
  - Sie werden auch den Begriff **API** zusammen mit JavaScript hören, was für **Application Programming Interface** steht. Eine JavaScript-API ist eine auf JavaScript aufgebaute Funktionalität, die es Ihnen ermöglicht, andere komplexere Code-Bits oder andere Funktionen auf Ihrem Computer (wie Hardware-Geräte, z.B. Ihre Webcam oder Ihr Mikrofon) auf eine verständliche Weise zu steuern.
  - In der Haus-Analogie ist JavaScript wie der Herd, der Fernseher, die Mikrowelle oder der Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionalität verleihen.

### Andere Webtechnologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) zur Kommunikation zwischen Clients und Servern, wie bereits erwähnt.
- [SVG](/de/docs/Web/SVG) zur Erstellung und Manipulation von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

HTML, CSS und JavaScript sind jedoch mit Abstand die wichtigsten Technologien, die man lernen sollte. Daher werden wir uns in unserem Lernpfad hauptsächlich auf diese konzentrieren.

## Werkzeuge

Sobald Sie die Standard-Grundlagentechnologien gelernt haben, um Webseiten zu erstellen (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Tools stoßen, die Ihre Arbeit erleichtern oder effizienter machen können. Beispiele beinhalten:

- [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die zum Debuggen Ihres Codes verwendet werden können.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests durchzuführen, um zu zeigen, ob Ihr Code wie beabsichtigt funktioniert.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte **Linters** und **Formatter**, die eine Reihe von Regeln für den Kodierstil nehmen, Ihren Code überprüfen und ihn so aktualisieren, dass er diesen Regeln folgt. Prettier, das Sie [früher im Kurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) kennengelernt haben, ist ein Beispiel für einen Formatter.

## Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder Client-seitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Frontend zu erzeugen, das Ihre Nutzer verwenden können.

Es gibt eine weitere Klasse von Sprachen, die als Backend- (oder Serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann zum Anzeigen an den Browser gesendet wird. Eine typische Verwendung für eine Serverseitige Sprache besteht darin, einige Daten aus einer Datenbank zu holen, etwas HTML zu generieren, das die Daten enthält, und das HTML dann an den Browser zu senden, um es dem Benutzer anzuzeigen.

Beispiele für serverseitige Frameworks und Sprachen sind ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien gelten nicht als "Webstandards" — sie werden von Organisationen außerhalb der Standardisierungsprozesse von Organisationen wie dem W3C und WHATWG entwickelt — obwohl einige von ihnen ähnliche offene Prozesse haben werden.

### Statisch versus dynamisch

Eine andere Art, clientseitige und serverseitige Sprachen zu beschreiben, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Bei Anforderung wird sie unverändert an den Client geliefert und vom Browser gerendert. Da sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Wenn serverseitiger Code (zum Beispiel ein Python-Skript oder eine ASP.NET-Seite) etwas HTML generiert, das Daten enthält, und dieses HTML an den Client zurückgeschickt wird, ändern sich die Inhalte des HTML abhängig davon, was der serverseitige Code tut. Es wird daher als "dynamisch" bezeichnet.

Es gibt oft eine gewisse Überlappung zwischen den Konzepten von statischem und dynamischem Code. Serverseitige Sprachen definieren in der Regel HTML-Strukturen innerhalb einer Template-Datei, die tendenziell größtenteils aus statischem HTML bestehen, mit einigen speziellen dynamischen Abschnitten, die sich ändern, je nachdem, welche Daten eingefügt werden müssen.

## Web-Best-Practices

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden werden. Nun lassen Sie uns die Best-Practices besprechen, die Webentwickler im Allgemeinen befolgen, um sicherzustellen, dass ihre Websites für möglichst viele Menschen nutzbar sind.

Beim Web-Development ist die Hauptursache der Unsicherheit die Tatsache, dass Sie nicht wissen, welche Technologiekombination jeder Benutzer verwenden wird, um Ihre Website anzusehen:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm betrachten.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem angeschlossenen Breitbildmonitor ansehen.
- Benutzer 3 könnte sehbehindert sein und einen Screenreader verwenden, um die Webseite zu lesen und mit ihr zu interagieren.
- Benutzer 4 könnte einen wirklich alten Desktop-Computer verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht wissen, was Ihre Nutzer genau verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Website so flexibel wie möglich, sodass alle oben genannten Nutzer sie nutzen können, auch wenn sie möglicherweise nicht alle dieselbe Erfahrung machen.

Sie werden im Laufe Ihres Studiums auf die folgenden Konzepte stoßen, die Best-Practices darstellen, an die sich Ihre Websites idealerweise halten sollten. Machen Sie sich darüber zunächst keine allzu großen Sorgen. Im Großteil des Kurses versuchen wir, diese implizit zu lehren, was bedeutet, dass unsere Beispiele, wenn wir Ihnen HTML, CSS und JavaScript beibringen, wo möglich den Best-Practices folgen. Später in Ihrem Lernprozess werden Sie wahrscheinlich explizite Lehren in diesen Bereichen erkunden.

- **Progressive Verbesserung**
  - : Erstellung eines minimalen Erlebnisses, das die wesentliche Funktionalität für alle Nutzer bietet, und Layern eines besseren Erlebnisses und weiterer Verbesserungen in Browsern, die sie unterstützen können. Progressive Verbesserung wird oft als unwichtig angesehen, da Browser heutzutage neue Features konsistenter unterstützen und die Menschen dazu neigen, schnellere Internetverbindungen mit höheren Datenlimits zu haben. Berücksichtigen Sie jedoch Beispiele wie das Reduzieren von Dekoration, um ein mobiles Erlebnis reibungsloser zu gestalten und Daten zu sparen, oder das Bereitstellen eines leichteren, datenarmen Erlebnisses für Nutzer, die pro Megabyte zahlen oder begrenzte Verbindungen haben.
- **Kompatibilität über verschiedene Browser hinweg**
  - : Den Versuch, sicherzustellen, dass Ihre Webseite auf so vielen Geräten wie möglich funktioniert. Dies umfasst die Verwendung von Technologien, die von allen Browsern unterstützt werden, das Bereitstellen besserer Erlebnisse für Browser, die damit umgehen können (progressive Verbesserung) und/oder das Schreiben von Code so, dass er in älteren Browsern auf eine einfachere, aber dennoch brauchbare Erfahrung zurückfällt (sogenannte **gerade noch ausreichende Abwärtskompatibilität**). Es erfordert auch Tests, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann weiteren Arbeitsaufwand, um diese Fehler zu beheben.
- **Trennung der Ebenen**
  - : Platzieren Sie Ihr Inhalt (HTML), Styling (CSS) und Verhalten (JavaScript) in unterschiedlichen Code-Dateien, anstatt alles zusammen am selben Ort zu bündeln. Dies ist aus vielen Gründen eine gute Idee, unter anderem für die Kodierungsverwaltung, das Verständnis und Teamarbeit/Trennung der Rollen. In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, auf das man hinarbeiten sollte, wo möglich, nicht absolut.
- **Responsive Webdesign**
  - : Machen Sie Ihre Funktionalität und Layouts flexibel, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die auf einem großen Breitbildbrowser am Desktop auf eine bestimmte Art gestaltet ist, aber auf mobilen Browsern als kompakteres, einspaltiges Layout angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters anzupassen und sehen, was mit dem Seitenlayout passiert.
- **Performance**
  - : Websites so schnell wie möglich laden zu lassen, aber auch intuitiv und einfach zu bedienen zu machen, sodass die Benutzer nicht frustriert werden und woanders hingehen.
- **Internationalisierung**
  - : Websites benutzbar machen für Menschen aus verschiedenen Kulturen, die andere Sprachen als Sie selbst sprechen. Hier gibt es technische Überlegungen (wie zum Beispiel, Ihr Layout so zu ändern, dass es auch für von rechts nach links oder von oben nach unten geschriebene Sprachen funktioniert) und menschliche Überlegungen (wie zum Beispiel das Verwenden einfacher, nicht umgangssprachlicher Sprache, damit verschiedene Kulturen Ihren Text eher verstehen).
- **Privatsphäre** & **Sicherheit**
  - : Diese beiden Konzepte sind verwandt, jedoch unterschiedlich. Privatsphäre bezieht sich darauf, den Menschen zu erlauben, ihre Geschäfte privat zu erledigen, ohne sie auszuspionieren oder mehr Daten von ihnen zu sammeln, als Sie absolut benötigen. Sicherheit bezieht sich darauf, Ihre Website so zu konstruieren, dass bösartige Benutzer keine Informationen daraus von Ihnen oder Ihren Benutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
