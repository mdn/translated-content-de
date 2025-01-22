---
title: Das Modell der Webstandards
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 2aa9885b10c19fe6b5a311457977905bf99c76b9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web und Webstandards – wie sie entstanden sind, was Webstandardtechnologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis Ihres Computerbetriebssystems, von Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Webstandards und die Grundprinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsorganisationen arbeiten – zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Erstellung von Standards.</li>
          <li>Die wichtigsten Webstandardtechnologien und wie sie zusammenarbeiten.</li>
          <li>Best Practices im Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

In den späten 1960er Jahren entwickelte das US-amerikanische Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** angesehen werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) arbeitete und die erste Implementierung der [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) Protokollsuite enthielt. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knoten enthielt. Kommt Ihnen das bekannt vor?

Schnell vorwärts nach 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen zusammen lieferten den Hintergrund dafür, wie das Web funktionieren würde. Sie erhielten eine beträchtliche Menge an Interesse, genug, um die Vorgesetzten von TimBL zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu erstellen.

Bis 1990-91 hatte TimBL alle erforderlichen Dinge geschaffen, um die erste Version des **World Wide Web** (allgemein als das **Web** bezeichnet) zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen Webserver und einige Webseiten zum Anschauen.

> [!NOTE]
> Menschen verwenden manchmal "das Web" und "das Internet" austauschbar, aber sie sind unterschiedliche Dinge. Das Internet ist die Infrastruktur, die es ermöglicht, Informationen weltweit zwischen verschiedenen Servern und Clients zu transportieren, während das Web ein System ist, das auf dem Internet aufgebaut ist. Das Web definiert Arten von Informationen (Inhalt und Code), die über das Internet transportiert und Kommunikationsprotokolle verwaltet werden.

1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter aus vielen verschiedenen Unternehmen zusammenbringt, um an der Erstellung von Webtechnologien zusammenzuarbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung bestehender Webtechnologien wie HTML und HTTP und der Erstellung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). CSS und JavaScript waren insbesondere entscheidend dafür, dem Web Stil und Interaktivität zu verleihen, sodass es mehr wie das Web aussieht, das wir heute kennen.

In den darauf folgenden Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. Andere Standardisierungsorganisationen tauchten ebenfalls auf, um verschiedene Aspekte von Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie daran interessiert sind, eine detailliertere Darstellung der Webgeschichte zu lesen, versuchen Sie, nach "history of the web" in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) zu suchen und sehen, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir verwenden, um Websites zu erstellen. Diese Standards existieren als lange technische Dokumente, genannt Spezifikationen, die genau beschreiben, wie die Technologie funktionieren soll. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die Technologien, die sie beschreiben, verwendet (daher haben wir Websites wie die MDN Web Docs). Stattdessen sind sie für Software-Ingenieure gedacht, um diese Technologien zu implementieren (in der Regel in Webbrowsern).

### Standardisierungsorganisationen und Prozesse

Webstandards werden von Standardisierungsorganisationen erstellt – Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und zu vereinbaren, wie die Technologien so funktionieren sollten, dass alle ihre Anwendungsfälle erfüllt werden.

Das W3C ist die bekannteste Standardisierungsorganisation im Webbereich, aber es gibt auch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente, ihre zugehörigen APIs und andere umliegende Technologien) implementiert werden sollte.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken, wie WebGL.

Die vollständigen Prozesse, durch die Standards erstellt werden, können tiefgehend und komplex sein. Aber, es sei denn, Sie möchten Ihre eigenen Webtechnologie-Funktionen erstellen, müssen Sie die meisten davon nicht verstehen. Wenn Sie an der Diskussion über neue Technologien teilnehmen und Feedback geben möchten, ist es meist eine Frage des Beitritts zu der relevanten Mailingliste oder einem anderen Diskussionsmechanismus. Standarddiskussionen werden öffentlich geführt, daher der Begriff ["Offene" Standards](#open_standards).

Für den Moment geben wir Ihnen ein allgemeines, hohes Verständnis davon, wie Standardprozesse funktionieren:

1. Jemand merkt den Bedarf an einer neuen Webstandardfunktion, die das Leben von Entwicklern erleichtern wird. Zum Beispiel gibt es möglicherweise ein häufig verwendetes Muster in Webbenutzeroberflächen, das schwer zu implementieren ist. Eine spezielle CSS-Funktion würde es viel einfacher machen. Die Person könnte jede/r sein – ein/e einzelne/r Entwickler/in oder ein/e Ingenieur/in, die/der für ein großes Technologieunternehmen arbeitet.
2. Die Person diskutiert diese Funktion mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt, Interesse an der Implementierung der Funktion zu wecken. In der Regel schreiben sie ein Erläuterungsdokument, das den Bedarf für die Funktion und deren Funktion erklärt, und eine Code-Demo, die zeigt, wie die Funktion in Aktion aussehen würde.
3. Wenn genügend Interesse an der Funktion besteht, wird sie formell innerhalb der relevanten Arbeitsgruppe der Standardisierungsorganisation diskutiert. Zum Beispiel werden CSS-Funktionen in der Regel von der [CSS-Arbeitsgruppe](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [CSS Working Group Wikipedia-Seite](https://en.wikipedia.org/wiki/CSS_Working_Group) für eine etwas detailliertere Beschreibung und Geschichte). Bevor eine neue Webtechnologie akzeptiert wird, muss sie rigoros evaluiert werden, um sicherzustellen, dass sie gut für das Web ist – zum Beispiel, dass sie keine Sicherheitsprobleme einführt, sie [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien ist und sie nicht von Patenten abhängt.
4. Um die Funktion zu beweisen, passiert folgendes. Diese Punkte können alle zur gleichen Zeit wie Punkt 3 geschehen oder sogar vorher (Browseranbieter implementieren manchmal proprietäre/nicht standardisierte Funktionen und versuchen dann, sie nachträglich zu standardisieren):

   1. Ein oder mehrere Browseranbieter implementieren eine experimentelle Version der neuen Funktion, oft standardmäßig deaktiviert, aber die von Personen, die sie testen und Feedback geben möchten, aktiviert werden kann.
   2. Ein Mitglied der Arbeitsgruppe fügt es auch einer Technologiespezifikation hinzu, damit Browseranbieter es konsistent implementieren können.
   3. Sie holen auch Rückmeldungen von anderen Browseranbietern ein, um festzustellen, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich sie ihn implementieren werden. Diese werden als Standardspositionen bezeichnet. Siehe zum Beispiel die [Mozilla Standards-Positionen](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Personen schreiben auch eine umfangreiche Testsuite, um zu demonstrieren, dass die Funktion wie beschrieben funktioniert.

5. Schließlich, wenn alles gut läuft, wird die Funktion in allen Browsern implementiert und kann beim Erstellen von Websites verwendet werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die die Funktion vorschlagen, sie in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu sammeln, dieselben Person/Personen sind.

Sie können mehr Informationen zu spezifischen Standardisierungsprozessen finden. Siehe zum Beispiel:

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG — Arbeitsmodus](https://whatwg.org/working-mode)
- [Der TC39-Prozess](https://tc39.es/process-document/)

## Wichtige Prinzipien von Webstandards

Die wesentlichen Prinzipien des Webs, die das Web zu einer einzigartigen und aufregenden Branche machen, in der man sich engagieren kann, sind folgende:

- Offen für Beiträge und Nutzung und daher nicht durch Patente belastet oder von einem einzigen privaten Unternehmen kontrolliert.
- Zugänglich und interoperabel.
- Sie zerstören das Web nicht.

Schauen wir uns jedes dieser Prinzipien etwas genauer an.

### "Offene" Standards

Eines der Schlüsselelemente von Webstandards, über das sich TimBL und das W3C von Anfang an einig waren, ist, dass das Web (und Webtechnologien) **offen** sein sollten. Das bedeutet, dass sie sowohl zur Beitragsleistung als auch zur Nutzung frei zugänglich sind und nicht durch Patente oder Lizenzen belastet sind. Dies ist wichtig – wenn eine Webtechnologie auf patentrechtlich geschützte Technologien angewiesen ist, kann der Patentinhaber große Geldbeträge von den umsetzenden Browseranbietern verlangen, und diese Kosten würden dann an die Browsernutzer weitergegeben.

Darüber hinaus bedeutet die Tatsache, dass Webtechnologien offen in Zusammenarbeit zwischen vielen verschiedenen Unternehmen erstellt werden, dass kein einzelnes Unternehmen sie kontrollieren kann, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einzelnes Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stellen, eine neue Version von HTML herauszubringen, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder schlimmer noch, zu entscheiden, dass es nicht mehr interessiert ist und es einfach abschaltet.

Offene Standards ermöglichen es dem Web, eine frei verfügbare öffentliche Ressource zu bleiben, in der jeder den Code für den Aufbau einer Website kostenlos schreiben kann, und jeder zur Erstellung von Standards beitragen kann.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundlegend so konzipiert, dass Webinhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als großer Ausgleich angesehen, der es Menschen ermöglicht, Informationen unabhängig von ihren Umständen zuzugreifen. Dies bedeutet zum Beispiel, dass:

- Menschen, die keine Maus oder ein anderes Zeigegerät verwenden können, die Tastatur zur Navigation durch das Web verwenden können.
- Menschen mit Sehbehinderungen Inhalte vergrößern oder ein Programm namens **Bildschirmleser** verwenden können, um Inhalte vorzulesen und Bedienelemente in einer sinnvollen Weise zu beschreiben.

> [!NOTE]
> Sie werden später im Lernpfad mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erfahren.

Darüber hinaus sind Webtechnologien **interoperabel** gedacht. Da Webtechnologien nach veröffentlichten Standards implementiert werden, sollte der Browser dieselbe gerenderte Ausgabe für einen gegebenen Input (zum Beispiel HTML-, CSS- oder JS-Code) liefern — mit anderen Worten, eine Website sollte über mehrere Browser hinweg konsistent funktionieren.

### Das Web nicht kaputt machen

Ein weiterer Satz, den Sie in Bezug auf offene Webstandards hören werden, ist "das Web nicht kaputt machen". Die Idee dahinter ist, dass jede neue Webtechnologie rückwärtskompatibel zu dem sein sollte, was vorher war, damit bestehende Websites weiterhin auf die gleiche Weise funktionieren wie zuvor.

Browservendoren sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne dabei eine Render- oder Funktionsänderung zu verursachen, die dazu führen würde, dass ihre Benutzer denken, eine Website sei kaputt, und stattdessen versuchen, einen anderen Browser zu verwenden.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die man lernen sollte, wenn man ein Front-End-Webentwickler werden möchte. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie verwenden werden, um eine Website zu erstellen.

- HTML ist für die Struktur und Semantik (Bedeutung).
- CSS ist für die Gestaltung und das Layout.
- JavaScript und APIs sind für die Steuerung dynamischen Verhaltens.

#### HTML

HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte umwickeln (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu verleihen. Einfaches HTML sieht folgendermaßen aus:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

Wenn wir eine Hausbau-Analogie annehmen würden, wäre HTML wie das Fundament und die Wände des Hauses, die ihm Struktur verleihen und es zusammenhalten.

#### CSS

Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Stile auf Ihr HTML anzuwenden – zum Beispiel, um Text- und Hintergrundfarben festzulegen, Rahmen hinzuzufügen, Dinge zu animieren oder eine Seite in einer bestimmten Weise zu layouten. Zum Beispiel würde der folgende Code alle HTML-Absätze rot färben:

```css
p {
  color: red;
}
```

In der Haus-Analogie ist CSS wie die Farbe, Tapete, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.

#### JavaScript (und APIs)

**JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Webseiten hinzuzufügen, von dynamischem Stilwechsel über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript speichert eine Referenz auf einen Absatz im Speicher und ändert den darin enthaltenen Text:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

Sie werden auch den Begriff **APIs** zusammen mit JavaScript hören. API steht für **Application Programming Interface**. Im Allgemeinen ist eine API ein Stück Code, das es Ihnen ermöglicht, andere komplexere Teile von Code oder andere Funktionen auf Ihrem Computer (wie Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf eine überschaubare Weise zu steuern.

Zum Beispiel, selbst eine Schnittstelle schreiben, um mit Ihrer Webcam zu kommunizieren und einen Videostream daraus zu erfassen, aber die JavaScript-Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia#examples) ermöglicht es Ihnen, dies ziemlich einfach zu tun. Es erledigt die ganze harte Arbeit für Sie im Hintergrund, sodass Sie das Rad nicht jedes Mal neu erfinden müssen.

Das einfache Code-Snippet oben verwendet ebenfalls eine API. [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`textContent`](/de/docs/Web/API/Node/textContent) sind beide Teile der [Document Object Model (DOM)](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) API-Familie, die es Ihnen ermöglicht, mit JavaScript Webdokumente zu manipulieren.

In der Haus-Analogie ist JavaScript wie der Herd, Fernseher, die Mikrowelle oder der Haartrockner – die Dinge, die Ihrem Haus nützliche Funktionen verleihen.

### Andere Webtechnologien

Es gibt weitere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie bereits erwähnt.
- [SVG](/de/docs/Web/SVG) zur Erstellung und Manipulation von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

HTML, CSS und JavaScript sind jedoch bei weitem die wichtigsten Technologien zum Lernen, daher konzentrieren wir uns in unserem Lernpfad hauptsächlich auf diese.

### Werkzeuge

Sobald Sie die "rohen" Technologien gelernt haben, mit denen Sie Webseiten erstellen können (wie HTML, CSS und JavaScript), werden Sie bald auf verschiedene Werkzeuge stoßen, die verwendet werden können, um Ihre Arbeit zu erleichtern oder effizienter zu gestalten. Beispiele beinhalten:

- Die [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die verwendet werden können, um Ihren Code zu debuggen.
- [Testing-Tools](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests durchzuführen, um zu zeigen, ob Ihr Code sich wie beabsichtigt verhält.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und Ihnen ermöglichen, bestimmte Arten von Webseiten viel schneller und effektiver zu erstellen.
- So genannte **Linters** und **Formatter**, die einen Satz von Regeln für den Codierstil nehmen, Ihren Code betrachten und Ihren Code so aktualisieren, dass er diesen Regeln entspricht. Prettier, das Sie [früher im Kurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) kennengelernt haben, ist ein Beispiel für einen Formatter.

### Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Frontend zu erzeugen, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die Backend- (oder serverseitige) Sprachen genannt werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann an den Browser gesendet wird, um angezeigt zu werden. Eine typische Verwendung für eine serverseitige Sprache ist es, einige Daten aus einer Datenbank abzurufen, etwas HTML zu generieren, um die Daten zu enthalten, und dann das HTML an den Browser zu senden, um es dem Benutzer anzuzeigen.

Beispiel-Frameworks auf Serverseite sind ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

## Web-Best Practices

Wir haben kurz über die Technologien gesprochen, die Sie verwenden werden, um Websites zu erstellen. Nun lassen Sie uns die besten Praktiken besprechen, die Webentwickler im Allgemeinen anwenden, um sicherzustellen, dass ihre Websites von möglichst vielen Menschen verwendet werden können.

Beim Webentwicklung ist die größte Ursache für Unsicherheit der Tatsache geschuldet, dass Sie nicht wissen, welche Kombination von Technologie jeder Benutzer verwenden wird, um Ihre Website zu betrachten:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm ansehen.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbildmonitor ansehen.
- Benutzer 3 könnte sehbehindert sein und einen Bildschirmleser verwenden, um die Webseite zu lesen und mit ihr zu interagieren.
- Benutzer 4 könnte einen wirklich alten Desktop-Rechner verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv designen - machen Sie Ihre Website so flexibel wie möglich, sodass alle oben genannten Benutzer sie nutzen können, auch wenn sie nicht alle dieselbe Erfahrung machen.

Im Laufe Ihrer Studien werden Sie auf die unten genannten Konzepte stoßen, die Best Practices darstellen, die Ihre Websites idealerweise einhalten sollten. Machen Sie sich vorerst keine großen Sorgen darüber. Während des größten Teils des Kurses versuchen wir, diese implizit zu lehren, was bedeutet, dass wenn wir Ihnen HTML, CSS und JavaScript beibringen, unsere Beispiele, soweit möglich, den Best Practices folgen werden. Später in Ihrem Lernpfad werden Sie wahrscheinlich explizite Lehren in diesen Bereichen erkunden.

- **Progressive Enhancement**
  - : Eine minimale Erfahrung zu schaffen, die die wesentliche Funktionalität allen Benutzern bereitstellt, und in Browsern, die sie unterstützen können, eine bessere Erfahrung und andere Verbesserungen hinzuzufügen. Progressive Enhancement wird oft als unwichtig angesehen, da Browser heutzutage neue Funktionen konsistenter unterstützen und die Menschen dazu neigen, schnellere Internetverbindungen mit höheren Datenverbrauchsgrenzen zu haben. Berücksichtigen Sie jedoch Beispiele wie das Kürzen von Dekorationen, um eine mobile Erfahrung flüssiger zu gestalten und Daten zu sparen, oder das Bereitstellen einer leichten, bandbreitengeringen Erfahrung für Benutzer, die nach Megabyte zahlen oder begrenzte Verbindungen haben.
- **Cross-Browser-Kompatibilität**
  - : Versuchen, sicherzustellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dazu gehört die Verwendung von Technologien, die alle Browser unterstützen, bessere Erfahrungen für Browser zu bieten, die damit umgehen können (Progressive Enhancement), und/oder Code so zu schreiben, dass er in älteren Browsern zu einer einfacheren, aber dennoch nutzbaren Erfahrung zurückfällt (genannt **Graceful Degradation**). Es erfordert auch Tests, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann weitere Arbeit, um diese Fehler zu beheben.
- **Trennung der Schichten**
  - : Ihr Inhalt (HTML), Stil (CSS) und Verhalten (JavaScript) in verschiedenen Code-Dateien abzulegen, anstatt sie alle an einem Ort zu vermischen. Dies ist eine gute Idee aus vielen Gründen, einschließlich der Codeverwaltung und des Verständnisses sowie der Teamarbeit/Rollenaufteilung. In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, auf das man soweit möglich abzielen sollte, anstatt eines Absoluten.
- **Responsive Webdesign**
  - : Ihre Funktionalität und Layouts flexibel gestalten, sodass sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die auf einem Breitbildbrowser auf dem Desktop auf eine Art angeordnet ist, aber auf mobilen Telefonbrowsern als kompakteres, einspaltiges Layout angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters anzupassen und beobachten Sie, was mit dem Seitenlayout passiert.
- **Leistung**
  - : Websites so schnell wie möglich zu laden, aber auch intuitiv und einfach zu bedienen zu machen, sodass Benutzer nicht frustriert sind und woanders hingehen.
- **Internationalisierung**
  - : Websites für Menschen aus verschiedenen Kulturen nutzbar zu machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen hier (wie zum Beispiel Anpassung Ihres Layouts, sodass es auch bei rechts-nach-links- oder oben-nach-unten-Sprachen funktioniert), und menschliche (wie zum Beispiel die Verwendung einfacher, nicht-umgangssprachlicher Sprache, sodass vielfältige Kulturen eher in der Lage sind, Ihren Text zu verstehen).
- **Privatsphäre** & **Sicherheit**
  - : Diese beiden Konzepte sind verwandt, aber unterschiedlich. Privatsphäre bezieht sich darauf, Menschen zu ermöglichen, ihre Geschäfte privat zu erledigen und sie nicht auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie absolut benötigen. Sicherheit bezieht sich darauf, Ihre Webseite so zu konstruieren, dass böswillige Benutzer keine Informationen stehlen können, die darauf von Ihnen oder Ihren Benutzern enthalten sind.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
