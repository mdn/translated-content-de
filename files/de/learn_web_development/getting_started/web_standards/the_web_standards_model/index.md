---
title: Das Modell der Webstandards
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 03482f82cba9c871042bbf4972b754f65eb3cb90
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen zum Web und zu Webstandards — wie sie entstanden sind, was Webstandard-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Webstandards und die zentralen Prinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsorganisationen arbeiten — zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Standarderstellung.</li>
          <li>Die wichtigsten Webstandard-Technologien und wie sie zusammenarbeiten.</li>
          <li>Serverseitige (dynamische) versus clientseitige (statische) Dateien.</li>
          <li>Best Practices für das Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

Ende der 1960er Jahre entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** betrachtet werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung der [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) Protokollsuite beinhaltete. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knotenpunkten enthielt. Klingt vertraut?

Springen wir ins Jahr 1989, als TimBL [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText bei CERN schrieb; diese beiden Veröffentlichungen zusammen bildeten den Hintergrund dafür, wie das Web funktionieren würde. Sie erhielten ein beträchtliches Maß an Interesse, genug, um TimBLs Vorgesetzte davon zu überzeugen, ihm zu erlauben, ein globales Hypertextsystem zu schaffen.

Bis 1990-91 hatte TimBL alles geschaffen, was notwendig war, um die erste Version des **World Wide Web** (allgemein als das **Netz** bezeichnet) zu betreiben – [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen Webserver und einige Webseiten zum Ansehen.

> [!NOTE]
> Menschen verwenden manchmal "das Netz" und "das Internet" synonym, aber es sind unterschiedliche Dinge. Das Internet ist die Infrastruktur, die es ermöglicht, Informationen weltweit zwischen verschiedenen Servern und Clients zu transportieren, während das Netz ein darauf aufbauendes System ist. Das Netz definiert Arten von Informationen (Inhalte und Code), die über das Internet transportiert werden, und Kommunikationsprotokolle, um diesen Transport zu verwalten.

1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter vieler verschiedener Unternehmen zusammenbringt, um gemeinsam an der Schaffung von Webtechnologien zu arbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung vorhandener Webtechnologien wie HTML und HTTP und der Schaffung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). CSS und JavaScript waren insbesondere entscheidend, um dem Web Styling und Interaktivität zu verleihen und es so aussehen zu lassen wie das Web, das wir heute kennen.

In den folgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, dem Einrichten tausender Webserver und der Erstellung von Millionen von Webseiten. Andere Standardisierungsorganisationen erschienen ebenfalls, um verschiedene Aspekte der Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie interessiert sind, eine detailliertere Darstellung der Webgeschichte zu lesen, versuchen Sie, nach "Geschichte des Webs" in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) zu suchen und zu sehen, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Webseiten verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau detaillieren, wie die Technologie funktionieren soll. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb haben wir Seiten wie MDN Web Docs). Stattdessen sind sie dafür gedacht, von Software-Ingenieuren verwendet zu werden, um diese Technologien zu implementieren (normalerweise in Webbrowsern).

### Standardisierungsgremien und Prozesse

Webstandards werden von Standardisierungsgremien erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und zu vereinbaren, wie die Technologien am besten funktionieren sollten, um all ihre Anwendungsfälle zu erfüllen.

Das W3C ist das bekannteste Webstandard-Gremium, aber es gibt auch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs und andere umgebende Technologien) implementiert werden sollte.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken, wie zum Beispiel WebGL.

Die vollständigen Prozesse, durch die Standards erstellt werden, können tief und komplex werden. Aber, es sei denn, Sie möchten Ihre eigenen Webtechnologie-Funktionen erstellen, müssen Sie das meiste davon nicht verstehen. Wenn Sie zur Diskussion rund um neue Technologien beitragen und Feedback geben möchten, ist es in der Regel eine Frage des Beitritts zur relevanten Mailingliste oder anderem Diskussionsmechanismus. Standardsdiskussionen werden öffentlich geführt, daher der Begriff ["Offene" Standards](#offenestandards).

Jetzt geben wir Ihnen ein allgemeines, höheres Verständnis davon, wie Standardprozesse funktionieren:

1. Jemand bemerkt den Bedarf an einem neuen Webstandard-Feature, das das Leben der Entwickler erleichtern wird. Zum Beispiel gibt es vielleicht ein gängiges Muster, das häufig in Web-Benutzeroberflächen verwendet wird, aber es ist mühsam zu implementieren. Ein dediziertes CSS-Feature würde es viel einfacher machen. Jemand könnte jeder sein — ein einzelner Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Die Person diskutiert dieses Feature mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt Interesse an der Implementierung des Features zu wecken. In der Regel schreiben sie ein Erklärungsdokument, das den Bedarf für das Feature und seine Funktionsweise erläutert, und ein Code-Demo, das zeigt, wie das Feature in Aktion aussehen würde.
3. Wenn genügend Interesse am Feature besteht, wird es formell in der relevanten Standardisierungsgruppe diskutiert. Zum Beispiel werden CSS-Features in der Regel von der [CSS Working Group](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [CSS Working Group Wikipedia-Seite](https://en.wikipedia.org/wiki/CSS_Working_Group) für eine etwas genauere Beschreibung und Geschichte). Bevor eine neue Webtechnologie akzeptiert wird, muss sie gründlich evaluiert werden, um sicherzustellen, dass sie gut für das Web ist — zum Beispiel keine Sicherheitsprobleme einführt, sie [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien ist und nicht auf Patenten basiert.
4. Um das Feature zu beweisen, passieren mehrere Dinge. Diese Punkte können alle ungefähr zur gleichen Zeit wie Punkt 3, oder sogar vorher passieren (Browseranbieter implementieren manchmal proprietäre/nicht-standardisierte Features und versuchen dann, sie nachträglich zu standardisieren):
   1. Ein oder mehrere Browseranbieter implementieren eine experimentelle Version des neuen Features, häufig standardmäßig deaktiviert, aber die von Personen, die es testen und Feedback geben wollen, aktiviert werden kann.
   2. Ein Mitglied der Arbeitsgruppe fügt es auch zur Technologiespezifikation hinzu, damit Browseranbieter in der Lage sind, es konsistent zu implementieren.
   3. Sie suchen auch Feedback von anderen Browseranbietern, um zu sehen, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich es ist, dass sie es implementieren. Diese werden als Standardpositionen bezeichnet. Siehe zum Beispiel [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Personen schreiben auch eine umfangreiche Suite von Tests, um zu demonstrieren, dass das Feature wie beschrieben funktioniert.

5. Schließlich, wenn alles in Ordnung ist, wird das Feature in allen Browsern implementiert und kann beim Erstellen von Webseiten verwendet werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die das Feature vorschlagen, es in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu sammeln, dieselbe Person/dieselben Personen sind.

Sie können mehr Informationen über spezifische Standardisierungsprozesse finden. Siehe zum Beispiel:

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG — Working Mode](https://whatwg.org/working-mode)
- [The TC39 Process](https://tc39.es/process-document/)

## Schlüsselprinzipien der Webstandards

Die Schlüsselprinzipien des Webs, die das Web zu einer einzigartigen und spannenden Branche machen, in der man sich engagieren kann, sind wie folgt:

- Offen für Beitrag und Nutzung, und daher nicht mit Patenten belastet oder von einer einzelnen privaten Entität kontrolliert.
- Zugänglich und interoperabel.
- Sie zerstören nicht das Web.

Schauen wir uns diese etwas genauer an.

### "Offene" Standards

Ein wesentliches Merkmal der Webstandards, das von TimBL und dem W3C von Anfang an vereinbart wurde, ist, dass das Web (und Webtechnologien) **offen** sein sollten. Das bedeutet, dass sie sowohl zum Beitrag als auch zur Nutzung frei sind und nicht durch Patente/Lizenzen belastet werden. Das ist wichtig — wenn eine Webtechnologie auf patentierten/lizenzierten Technologien basiert, um zu funktionieren, kann der Patent-/Eigentümer dann potenziell große Geldbeträge von Browser-Anbietern verlangen, und diese Kosten würden dann an die Browser-Nutzer weitergegeben.

Da Webtechnologien zudem offen in Zusammenarbeit zwischen vielen unterschiedlichen Unternehmen geschaffen werden, kann kein Unternehmen sie kontrollieren, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einziges Unternehmen plötzlich entscheidet, das ganze Web hinter eine Paywall zu stellen, oder eine neue Version von HTML herausbringt, die jeder kaufen muss, um weiterhin Webseiten zu erstellen, oder noch schlimmer, entscheidet, dass sie nicht mehr interessiert sind und es einfach abschalten.

Offene Standards ermöglichen es, dass das Web ein frei verfügbares öffentliches Gut bleibt, bei dem jeder den Code zum Erstellen einer Website kostenlos schreiben und jeder am Prozess der Standarderstellung teilnehmen kann.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundsätzlich so konzipiert, dass Webinhalte **zugänglich** für Menschen mit Behinderungen sind. Es wurde ursprünglich als großer Ausgleich gedacht, der es Menschen ermöglicht, Informationen unabhängig von den Umständen zu erhalten. Das bedeutet zum Beispiel:

- Menschen, die nicht in der Lage sind, eine Maus oder ein Zeigegerät zu verwenden, können die Tastatur verwenden, um im Web zu navigieren.
- Menschen mit Sehbehinderung können Inhalte vergrößern oder ein Programm namens **Screenreader** verwenden, um sich Inhalte vorlesen zu lassen und Steuerelemente auf eine Weise zu beschreiben, die Sinn ergibt.

> [!NOTE]
> Sie werden später im Lernpfad mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erfahren.

Zusätzlich sollen Webtechnologien **interoperabel** sein. Da Webtechnologien gemäß veröffentlichten Standards implementiert werden, sollten Browser für eine gegebene Eingabe (zum Beispiel HTML, CSS oder JS-Code) die gleiche gerenderte Ausgabe liefern — mit anderen Worten, eine Website sollte konsistent in mehreren Browsern funktionieren.

### Das Web nicht zerstören

Ein weiterer Satz, den Sie in Bezug auf offene Webstandards hören werden, ist "das Web nicht zerstören". Die Idee dahinter ist, dass jede neue Webtechnologie rückwärtskompatibel mit dem sein sollte, was vor ihr war, sodass bestehende Websites weiterhin auf die gleiche Weise funktionieren wie zuvor.

Browser-Anbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne eine Änderung im Rendering oder der Funktionalität zu verursachen, die dazu führen würde, dass ihre Benutzer glauben, eine Website sei kaputt, und einen anderen Browser ausprobieren.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen können, wenn Sie ein Front-End-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie verwenden, um eine Webseite zu erstellen. Sie haben diese im [vorherigen Modul](/de/docs/Learn_web_development/Getting_started/Your_first_website) kennengelernt, aber um es zusammenzufassen:

- HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte einrahmen (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Wenn wir uns eine Hausbau-Analogie vorstellen würden, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.
- Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stile auf Ihr HTML anzuwenden — zum Beispiel, um Text- und Hintergrundfarben festzulegen, Rahmen hinzuzufügen, Dinge zu animieren oder eine Seite auf eine bestimmte Weise zu layouten. In der Hausanalogies ist CSS wie die Farbe, Tapeten, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.
- **JavaScript** ist die Programmiersprache, die wir verwenden, um Websites Interaktivität zu verleihen, vom dynamischen Stilwechsel über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken.
  - Sie werden auch den Begriff **API** im Zusammenhang mit JavaScript hören, der für **Application Programming Interface** steht. Eine JavaScript-API ist eine auf JavaScript aufgebaute Funktionalität, die es Ihnen ermöglicht, andere komplexere Teile des Codes oder andere Funktionalitäten auf Ihrem Computer (wie Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf eine verwaltbare Weise zu steuern.
  - In der Hausanalogie ist JavaScript wie der Herd, Fernseher, Mikrowelle oder Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionalität verleihen.

### Andere Webtechnologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie zuvor erwähnt.
- [SVG](/de/docs/Web/SVG) zum Erstellen und Manipulieren von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

HTML, CSS und JavaScript sind jedoch bei weitem die wichtigsten Technologien, die es zu lernen gilt, daher werden wir uns hauptsächlich auf diese in unserem Lernpfad konzentrieren.

## Tools

Sobald Sie die standardmäßigen, grundlegenden Technologien zum Erstellen von Webseiten (wie HTML, CSS und JavaScript) gelernt haben, werden Sie bald auf verschiedene Tools stoßen, die verwendet werden können, um Ihre Arbeit einfacher oder effizienter zu gestalten. Beispiele beinhalten:

- [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) innerhalb moderner Browser, die verwendet werden können, um Ihren Code zu debuggen.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests auszuführen, die zeigen, ob Ihr Code sich so verhält, wie Sie beabsichtigt haben.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufgebaut sind und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte **Linters** und **Formatter**, die ein Regelset für den Codierungsstil nehmen, Ihren Code ansehen und Ihren Code aktualisieren, um diesen Regeln zu folgen. Prettier, das Sie [bereits früher im Kurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) kennengelernt haben, ist ein Beispiel für einen Formatter.

## Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Front-End- (oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Front-End zu produzieren, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als Back-End- (oder serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann an den Browser gesendet wird, um es anzuzeigen. Eine typische Verwendung für eine serverseitige Sprache ist es, einige Daten aus einer Datenbank zu holen, einige HTML zu generieren, um die Daten zu enthalten, und dann das HTML an den Browser zu senden, um es dem Benutzer anzuzeigen.

Beispiele für serverseitige Frameworks und Sprachen sind ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien werden nicht als "Webstandards" betrachtet — sie werden von Organisationen entwickelt, die außerhalb der Standardisierungsprozesse von Organisationen wie dem W3C und WHATWG liegen —, obwohl einige von ihnen Prozesse haben, die ähnlich offen sind.

### Statisch versus dynamisch

Eine weitere Möglichkeit, wie clientseitige und serverseitige Sprachen oft beschrieben werden, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Bei Anforderung wird sie unverändert an den Client geliefert und vom Browser gerendert. Weil sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Wenn serverseitiger Code (zum Beispiel ein Python-Skript oder eine ASP.NET-Seite) einige Daten in HTML generiert und dieses HTML dann an den Client zurücksendet, ändern sich die Inhalte des HTMLs, abhängig davon, was der serverseitige Code tut. Es wird daher als "dynamisch" bezeichnet.

Es gibt oft eine gewisse Überlappung zwischen den Konzepten von statischem und dynamischem Code. Serverseitige Sprachen definieren normalerweise HTML-Strukturen in einer Vorlagendatei, die dazu neigt, hauptsächlich statisches HTML mit einigen speziellen dynamischen Abschnitten zu sein, die sich abhängig davon ändern, welche Daten eingefügt werden müssen.

## Web-Best Practices

Wir haben kurz über die Technologien gesprochen, die Sie verwenden werden, um Webseiten zu erstellen. Jetzt lassen Sie uns die Best Practices diskutieren, die Webentwickler generell anwenden, um sicherzustellen, dass ihre Webseiten von so vielen Menschen wie möglich genutzt werden können.

Beim Webentwickeln besteht die größte Unsicherheit darin, dass Sie nicht wissen, welche Kombination von Technologien jeder Benutzer verwenden wird, um Ihre Website zu sehen:

- Benutzer 1 schaut möglicherweise auf einem iPhone mit einem kleinen, schmalen Bildschirm darauf.
- Benutzer 2 schaut möglicherweise auf einem Windows-Laptop mit einem Breitbildmonitor darauf.
- Benutzer 3 ist möglicherweise sehbehindert und verwendet einen Screenreader, um die Webseite zu lesen und mit ihr zu interagieren.
- Benutzer 4 verwendet möglicherweise eine wirklich alte Desktop-Maschine, die keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Webseite so flexibel wie möglich, damit all die oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle dasselbe Erlebnis haben.

Sie werden im Laufe Ihrer Studien auf die unten stehenden Konzepte stoßen, die Best Practices darstellen, denen Ihre Websites idealerweise gerecht werden sollten. Machen Sie sich darüber vorerst keine Sorgen. In den meisten Teilen des Kurses versuchen wir, Ihnen diese implizit beizubringen, was bedeutet, dass wir, wenn wir Ihnen HTML, CSS und JavaScript lehren, unsere Beispiele nach Möglichkeit den Best Practices folgen werden. Später in Ihrer Lernerreise werden Sie wahrscheinlich explizite Lehren in diesen Bereichen erkunden.

- **Progressive Enhancement**
  - : Eine minimale Erfahrung zu schaffen, die die wesentlichen Funktionen für alle Benutzer zur Verfügung stellt und in Browsern, die sie unterstützen können, ein besseres Erlebnis und andere Verbesserungen darauf aufschichtet. Progressive Enhancement wird oft als unwichtig angesehen, da Browser heutzutage dazu neigen, neue Features konsistenter zu unterstützen und die Leute tendenziell schnellere Internetverbindungen mit höheren Begrenzungen für die Datennutzung haben. Betrachten Sie jedoch Beispiele wie das Reduzieren von Dekorationen, um eine mobile Erfahrung reibungsloser zu gestalten und Daten zu sparen oder eine leichtere, bandbreitenschonendere Erfahrung für Benutzer anzubieten, die pro Megabyte bezahlen oder eingeschränkte Verbindungen haben.
- **Cross-Browser-Kompatibilität**
  - : Der Versuch, sicherzustellen, dass Ihre Webseite auf so vielen Geräten wie möglich funktioniert. Dies umfasst die Verwendung von Technologien, die alle Browser unterstützen, bessere Erfahrungen für Browser bereitzustellen, die sie verarbeiten können (progressive Enhancement), und/oder Code zu schreiben, der auf eine einfachere, aber immer noch brauchbare Erfahrung in älteren Browsern zurückfällt (genannt **graceful Degradation**). Es erfordert auch Tests, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt und dann mehr Arbeit, um diese Fehler zu beheben.
- **Trennung der Schichten**
  - : Ihre Inhalte (HTML), Stile (CSS) und Verhalten (JavaScript) in verschiedenen Code-Dateien zu setzen, anstatt sie alle zusammen am selben Ort zu bündeln. Dies ist aus vielen Gründen eine gute Idee, einschließlich Codeverwaltung und -verständnis sowie Teamarbeit/Trennung von Rollen. In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, das angestrebt werden sollte, wo es möglich ist, und kein absolut.
- **Responsive Webdesign**
  - : Ihre Funktionalität und Layouts so flexibel zu gestalten, dass sie sich automatisch an unterschiedliche Browser anpassen können. Ein offensichtliches Beispiel ist eine Webseite, die auf einem Breitbild-Monitor auf dem Desktop auf eine bestimmte Weise gestaltet ist, aber in mobilen Browsern als kompakteres, einspaltiges Layout angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters anzupassen, und sehen Sie, was mit dem Layout der Seite passiert.
- **Performance**
  - : Websites so schnell wie möglich laden zu lassen, sie aber auch intuitiv und einfach bedienbar zu machen, damit Benutzer nicht frustriert sind und woanders hingehen.
- **Internationalisierung**
  - : Websites benutzerfreundlich für Menschen aus verschiedenen Kulturen zu machen, die andere Sprachen als Ihre eigene sprechen. Hier gibt es technische Überlegungen (wie zum Beispiel die Anpassung Ihres Layouts, damit es auch für rechts-nach-links- oder von oben nach unten geschriebene Sprachen gut funktioniert) und menschliche Überlegungen (wie die Verwendung einfacher, nicht umgangssprachlicher Sprache, damit verschiedene Kulturen eher in der Lage sind, Ihren Text zu verstehen).
- **Privatsphäre** & **Sicherheit**
  - : Diese beiden Konzepte sind verwandt, aber unterschiedlich. Privatsphäre bezieht sich darauf, Menschen zu erlauben, ihre Geschäfte privat zu erledigen und sie nicht auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website auf eine sichere Weise zu konstruieren, so dass böswillige Benutzer keine Informationen von Ihnen oder Ihren Benutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
