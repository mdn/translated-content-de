---
title: Das Webstandards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: c7f9d9087cccd99d4e72cdf5488b7a4bc6963740
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen zum Web und zu Webstandards – wie sie entstanden sind, was Webstandards-Technologien sind und wie sie zusammenarbeiten.

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
          <li>Webstandards und die grundlegenden Prinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsorganisationen funktionieren – zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Erstellung von Standards.</li>
          <li>Die wichtigsten Webstandards-Technologien und wie sie zusammenarbeiten.</li>
          <li>Serverseitige (dynamische) versus clientseitige (statische) Dateien.</li>
          <li>Bewährte Praktiken im Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** angesehen werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) funktionierte und die erste Implementierung des [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollstapels beinhaltete. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

Im Jahr 1980 schrieb [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept der Links zwischen verschiedenen Knoten enthielt. Kommt Ihnen das bekannt vor?

Schnell vorwärts ins Jahr 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und Hypertext bei CERN; diese beiden Veröffentlichungen zusammen boten den Hintergrund dafür, wie das Web funktionieren würde. Sie erhielten ein erhebliches Interesse, genug um TimBLs Vorgesetzte davon zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu erstellen.

Bis 1990-91 hatte TimBL alles erstellt, was nötig war, um die erste Version des **World Wide Web** (allgemein als **Web** bezeichnet) zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen Webserver und einige Webseiten zum Anschauen.

> [!NOTE]
> Die Leute verwenden manchmal "das Web" und "das Internet" austauschbar, aber sie sind unterschiedliche Dinge. Das Internet ist die Infrastruktur, die den Transport von Informationen weltweit zwischen verschiedenen Servern und Clients ermöglicht, während das Web ein System ist, das auf dem Internet aufgebaut ist. Das Web definiert Arten von Informationen (Inhalte und Code), die über das Internet transportiert werden, und Kommunikationsprotokolle zur Verwaltung dieses Transports.

Im Jahr 1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter vieler verschiedener Unternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologien zu arbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung bestehender Webtechnologien wie HTML und HTTP sowie an der Schaffung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). Besonders CSS und JavaScript waren entscheidend dafür, dem Web Styling und Interaktivität zu geben und es so aussehen zu lassen wie das Web, das wir heute kennen.

In den nächsten Jahren explodierte das Web, mit der Veröffentlichung mehrerer Browser, der Einrichtung von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. Auch andere Standardisierungsorganisationen erschienen, um verschiedene Aspekte der Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie an einer detaillierteren Darstellung der Geschichte des Webs interessiert sind, versuchen Sie, nach "Geschichte des Webs" in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) zu suchen und sehen Sie, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau beschreiben, wie die Technologie funktionieren soll. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb gibt es Seiten wie MDN Web Docs). Sie sind vielmehr für Softwareingenieure gedacht, um diese Technologien zu implementieren (in der Regel in Webbrowsern).

### Standardisierungsorganisationen und Prozesse

Webstandards werden von Standardisierungsorganisationen erstellt – Institutionen, die Gruppen von Menschen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darüber zu einigen, wie die Technologien am besten funktionieren sollten, um alle ihre Anwendungsfälle zu erfüllen.

Das W3C ist die bekannteste Standardisierungsorganisation für das Web, aber es gibt weitere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs sowie andere umgebende Technologien) implementiert werden sollten.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken wie WebGL.

Die vollständigen Prozesse, durch die Standards erstellt werden, können tief und komplex werden. Aber es sei denn, Sie möchten Ihre eigenen Webtechnologie-Features erstellen, müssen Sie nicht den Großteil davon verstehen. Wenn Sie zur Diskussion über neue Technologien beitragen und Feedback geben möchten, geht es in der Regel darum, sich an die relevante Mailing-Liste oder einen anderen Diskussionsmechanismus anzuschließen. Standardsdiskussionen werden öffentlich geführt, daher der Begriff ["offene" Standards](#open_standards).

Für den Moment geben wir Ihnen ein allgemeines Verständnis darüber, wie Standardsprozesse funktionieren:

1. Jemand bemerkt den Bedarf an einem neuen Funktionsstandard für das Web, der das Leben der Entwickler einfacher machen wird. Zum Beispiel könnte es ein häufig verwendetes Muster in Web-Benutzeroberflächen geben, das schwierig zu implementieren ist. Eine dedizierte CSS-Funktion würde es viel einfacher machen. Dieser Jemand könnte jeder sein – ein einzelner Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Diese Person diskutiert diese Funktion mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt, Interesse an der Implementierung der Funktion zu wecken. In der Regel schreiben sie ein erklärendes Dokument, das den Bedarf an der Funktion und deren Funktionsweise beschreibt, sowie ein Code-Demo, das zeigt, wie die Funktion in Aktion aussehen würde.
3. Wenn genügend Interesse an der Funktion besteht, wird sie formell in der entsprechenden Arbeitsgruppe der Standardisierungsorganisation diskutiert. Zum Beispiel werden CSS-Features in der Regel von der [CSS-Arbeitsgruppe](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [Wikipedia-Seite der CSS-Arbeitsgruppe](https://en.wikipedia.org/wiki/CSS_Working_Group) für eine etwas detailliertere Beschreibung und Geschichte). Bevor eine neue Webtechnologie akzeptiert wird, muss sie streng bewertet werden, um sicherzustellen, dass sie gut für das Web ist – zum Beispiel, dass sie keine Sicherheitsprobleme einführt, dass sie [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien ist und dass sie nicht auf Patenten basiert.
4. Um die Funktion zu testen, geschehen mehrere Dinge. Diese Punkte können alle gleichzeitig mit Punkt 3 geschehen oder sogar davor (Browseranbieter implementieren manchmal proprietäre/nicht standardisierte Features und versuchen dann, sie nachträglich zu standardisieren):

   1. Ein oder mehrere Browseranbieter implementieren eine experimentelle Version der neuen Funktion, die oft standardmäßig deaktiviert ist, aber von Leuten aktiviert werden kann, die sie testen und Feedback geben möchten.
   2. Ein Mitglied der Arbeitsgruppe wird es auch zu einer Technologiespezifikation hinzufügen, damit Browseranbieter es konsistent implementieren können.
   3. Sie werden auch Feedback von anderen Browseranbietern einholen, um zu sehen, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich es ist, dass sie ihn implementieren. Dies nennt man Standardpositionen. Siehe zum Beispiel [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Personen erstellen auch eine umfassende Testreihe, um zu zeigen, dass die Funktion wie beschrieben funktioniert.

5. Schließlich, wenn alles in Ordnung ist, wird die Funktion in allen Browsern implementiert und kann beim Erstellen von Websites genutzt werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die die Funktion vorschlagen, sie in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu sammeln, dieselbe Person oder dasselbe Team sind.

Weitere Informationen zu den Prozessen spezifischer Standardisierungsorganisationen finden Sie zum Beispiel unter:

- [W3C-Prozessdokument](https://www.w3.org/policies/process/)
- [WHATWG — Arbeitsweise](https://whatwg.org/working-mode)
- [Der TC39-Prozess](https://tc39.es/process-document/)

## Schlüsselprinzipien von Webstandards

Die Schlüsselprinzipien des Webs, die das Web zu einer einzigartigen und spannenden Branche machen, in der man tätig werden kann, sind wie folgt:

- Offen zur Mitwirkung und Nutzung und daher nicht durch Patente belastet oder von einer einzigen privaten Entität kontrolliert.
- Zugänglich und interoperabel.
- Sie brechen das Web nicht.

Schauen wir uns jedes dieser Prinzipien im Detail an.

### "Offene" Standards

Einer der Schlüsselaspekte von Webstandards, auf den sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) **offen** sein sollten. Das bedeutet, dass sie sowohl zum Mitwirken als auch zur Nutzung frei sind und nicht durch Patente/Lizenzen belastet werden. Dies ist wichtig — wenn eine Webtechnologie auf patentierten/lizenzierten Technologien basiert, um zu funktionieren, kann der Patentinhaber/Pateigentümer den umsetzenden Browseranbietern potenziell hohe Geldbeträge berechnen, und diese Kosten würden dann auf die Browserbenutzer übertragen werden.

Darüber hinaus bedeutet es, dass, da Webtechnologien offen unter Zusammenarbeit von vielen verschiedenen Unternehmen erstellt werden, kein einzelnes Unternehmen die Kontrolle über sie hat, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einziges Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stellen, oder eine neue Version von HTML zu veröffentlichen, die alle kaufen müssen, um weiterhin Webseiten zu erstellen, oder schlimmer noch, dass Unternehmen beschließen, dass es nicht mehr interessiert ist und es einfach abschaltet.

Offene Standards ermöglichen es, dass das Web eine frei verfügbare öffentliche Ressource bleibt, in der jeder den Code zum Erstellen einer Website kostenlos schreiben und jeder zum Erstellungsprozess der Standards beitragen kann.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundsätzlich so konzipiert, dass Webinhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als großer Ausgleich gesehen, der es Menschen ermöglicht, Informationen unabhängig von ihren Umständen zuzugreifen. Das bedeutet, zum Beispiel:

- Personen, die keine Maus oder Zeigegerät verwenden können, können die Tastatur nutzen, um im Web zu navigieren.
- Personen mit Sehbehinderungen können Inhalte vergrößern oder ein **Screenreader**-Programm verwenden, um Inhalte vorzulesen und Steuerelemente auf eine Weise zu beschreiben, die für sie sinnvoll ist.

> [!NOTE]
> Sie erfahren später im Lernpfad mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility).

Darüber hinaus sollen Webtechnologien **interoperabel** sein. Weil Webtechnologien gemäß veröffentlichter Standards implementiert werden, sollten Browser bei einer gegebenen Eingabe (zum Beispiel HTML-, CSS- oder JS-Code) die gleiche Wiedergabeergebnisse liefern — mit anderen Worten, eine Webseite sollte konsistent über mehrere Browser hinweg funktionieren.

### Das Web nicht brechen

Ein weiterer Satz, den Sie im Zusammenhang mit offenen Webstandards hören werden, ist "das Web nicht brechen". Die Idee dahinter ist, dass jede neue Webtechnologie abwärtskompatibel mit dem sein sollte, was davor war, damit bestehende Websites weiterhin auf die gleiche Weise funktionieren wie zuvor.

Browseranbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne eine Änderung bei der Wiedergabe oder Funktionalität zu verursachen, die ihre Benutzer dazu veranlassen würde, zu denken, dass eine Website kaputt ist und stattdessen einen anderen Browser zu versuchen.

## Überblick über moderne Webtechnologien

Es gibt eine Vielzahl von Technologien, die man lernen muss, wenn man ein Frontend-Webentwickler werden möchte. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie zur Erstellung einer Website verwenden werden.

- HTML ist für Struktur und Semantik (Bedeutung).
- CSS ist für Styling und Layout.
- JavaScript und APIs sind für die Steuerung des dynamischen Verhaltens.

#### HTML

HyperText Markup Language, oder **HTML**, ist eine Markup-Sprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte umwickeln (markieren) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht folgendermaßen aus:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

Wenn wir eine Hausbau-Analogie verwenden, wäre HTML wie das Fundament und die Wände des Hauses, die ihm Struktur geben und es zusammenhalten.

#### CSS

Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Ihren HTML-Elementen Stile zuzuweisen — zum Beispiel, um Text- und Hintergrundfarben festzulegen, Rahmen hinzuzufügen, Dinge zu animieren oder eine Seite auf eine bestimmte Weise zu layouten. Ein einfaches Beispiel wäre der folgende Code, der alle HTML-Absätze rot färbt:

```css
p {
  color: red;
}
```

In der Hausanalogie ist CSS wie die Farbe, Tapete, Teppiche und Gemälde, die Sie verwenden würden, um das Haus hübsch aussehen zu lassen.

#### JavaScript (und APIs)

**JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischem Stilwechsel über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken. Der folgende einfache JavaScript-Abschnitt speichert eine Referenz auf einen Absatz im Speicher und ändert den darin enthaltenen Text:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

Sie werden auch den Begriff **APIs** zusammen mit JavaScript hören. API steht für **Application Programming Interface**. Allgemein gesagt ist eine API ein Stück Code, der es Ihnen ermöglicht, andere komplexere Codeabschnitte oder andere Funktionen auf Ihrem Rechner (wie Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf eine handhabbare Weise zu steuern.

Zum Beispiel wäre es ziemlich schwierig, ein eigenes Interface zu schreiben, um mit Ihrer Webcam zu kommunizieren und einen Videostream davon zu erfassen, aber die JavaScript-Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia#examples) ermöglicht es Ihnen, dies relativ einfach zu tun. Sie erledigt die ganze harte Arbeit für Sie im Hintergrund, sodass Sie das Rad nicht jedes Mal neu erfinden müssen.

Der oben erwähnte einfache Code-Schnipsel verwendet ebenfalls eine API. Sowohl [`querySelector()`](/de/docs/Web/API/Document/querySelector) als auch [`textContent`](/de/docs/Web/API/Node/textContent) sind Teile der [Document Object Model (DOM)](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)-API-Familie, die es Ihnen ermöglicht, Webdokumente mit JavaScript zu manipulieren.

In der Hausanalogie ist JavaScript wie der Herd, Fernseher, Mikrowelle oder Föhn — die Dinge, die Ihrem Haus nützliche Funktionalität verleihen.

### Andere Webtechnologien

Es gibt weitere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie bereits erwähnt.
- [SVG](/de/docs/Web/SVG) für die Erstellung und Bearbeitung von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

Allerdings sind HTML, CSS und JavaScript bei weitem die wichtigsten Technologien zum Lernen, weshalb wir uns im Lernpfad hauptsächlich auf diese konzentrieren werden.

## Tools

Sobald Sie die Standardtechnologien, die für die Erstellung von Webseiten verwendet werden (wie HTML, CSS und JavaScript), erlernt haben, werden Sie bald auf verschiedene Werkzeuge stoßen, die Ihre Arbeit leichter oder effizienter machen können. Beispiele sind:

- [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die zur Fehlersuche in Ihrem Code verwendet werden können.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), die zum Durchführen von Tests verwendet werden können, um zu zeigen, ob Ihr Code wie vorgesehen funktioniert.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und es ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte **Linters** und **Formatter**, die eine Reihe von Regeln für den Programmierstil nehmen, Ihren Code überprüfen und ihn so aktualisieren, dass er diesen Regeln entspricht. Prettier, das Sie [zu Beginn des Kurses](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) kennengelernt haben, ist ein Beispiel für einen Formatter.

## Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend- (oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Frontend einer Website zu produzieren, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als Backend- (oder serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis an den Browser gesendet wird, um angezeigt zu werden. Eine typische Verwendung für eine serverseitige Sprache besteht darin, einige Daten aus einer Datenbank abzurufen, etwas HTML zu generieren, um die Daten zu beinhalten, und dann das HTML an den Browser zu senden, um es dem Benutzer anzuzeigen.

Beispiele für serverseitige Frameworks und Sprachen umfassen ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien werden nicht als "Webstandards" angesehen – sie werden von Organisationen außerhalb der Standardisierungsprozesse des W3C und der WHATWG entwickelt – obwohl einige von ihnen ähnliche offene Prozesse haben werden.

### Statisch versus dynamisch

Ein weiterer Weg, auf dem clientseitige und serverseitige Sprachen oft beschrieben werden, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Wenn sie angefordert wird, wird sie unverändert an den Client geliefert und vom Browser dargestellt. Da sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Wenn serverseitiger Code (zum Beispiel ein Python-Skript oder eine ASP.NET-Seite) etwas HTML mit Daten generiert und dieses HTML an den Client zurücksendet, ändern sich die Inhalte des HTML je nachdem, was der serverseitige Code tut. Sie wird daher als "dynamisch" bezeichnet.

Es gibt oft ein wenig Überschneidung zwischen den Konzepten von statischem und dynamischem Code. Serverseitige Sprachen definieren in der Regel HTML-Strukturen innerhalb einer Vorlagendatei, die dazu neigen, hauptsächlich statisches HTML mit einigen speziellen dynamischen Abschnitten enthalten, die je nach den einzufügenden Daten verändert werden.

## Bewährte Praktiken im Web

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden werden. Nun lassen Sie sich über die bewährten Praktiken sprechen, die Webentwickler im Allgemeinen anwenden, um sicherzustellen, dass ihre Websites für möglichst viele Menschen nutzbar sind.

Hauptursache der Unsicherheit bei der Webentwicklung ist die Tatsache, dass Sie nicht wissen, welche Kombination von Technologien jeder Benutzer verwenden wird, um Ihre Website anzuzeigen:

- Benutzer 1 könnte sie auf einem iPhone ansehen, mit einem kleinen, schmalen Bildschirm.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbildmonitor betrachten.
- Benutzer 3 könnte sehbehindert sein und einen Screenreader verwenden, um die Webseite zu lesen und mit ihr zu interagieren.
- Benutzer 4 könnte einen wirklich alten Desktop-Rechner benutzen, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten – machen Sie Ihre Website so flexibel wie möglich, sodass alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle dieselbe Erfahrung haben.

Sie werden auf die folgenden Konzepte irgendwann in Ihrem Studium stoßen, die bewährte Praktiken darstellen, denen Ihre Websites idealerweise folgen sollten. Machen Sie sich jetzt darüber nicht allzu viele Sorgen. In den meisten Teilen des Kurses versuchen wir, diese implizit zu lehren, was bedeutet, dass wenn wir Ihnen HTML, CSS und JavaScript beibringen, unsere Beispiele wo möglich den besten Praktiken folgen. Später auf Ihrer Lernreise werden Sie wahrscheinlich explizite Lehrmittel in diesen Bereichen erkunden.

- **Progressive Enhancements**
  - : Schaffung einer minimalen Erfahrung, die allen Benutzern die wesentlichen Funktionen bietet, und besseres Erlebnis und weitere Verbesserungen in Browsern aufzuschichten, die diese unterstützen können. Progressive Enhancement wird oft als unwichtig angesehen, da Browser heutzutage neue Features konsistenter unterstützen und Menschen tendenziell schnellere Internetverbindungen mit höheren Datenvolumenbereichen haben. Trotzdem sollte man Szenarien wie das Reduzieren von Dekorationen, um eine mobile Erfahrung flüssiger zu machen und Daten zu sparen oder eine leichtere, datenärmere Erfahrung für Benutzer, die pro Megabyte zahlen oder gemessene Verbindungen haben, berücksichtigen.
- **Cross-Browser-Kompatibilität**
  - : Sicherstellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dies umfasst die Verwendung von Technologien, die alle Browser unterstützen, ein besseres Erlebnis für Browser bereitzustellen, die damit umgehen können (Progressive Enhancements) oder Code so zu schreiben, dass er in älteren Browsern auf eine einfachere, aber dennoch nutzbare Erfahrung zurückfällt (genannt **Graceful Degradation**). Es erfordert auch Tests, um zu sehen, ob in bestimmten Browsern etwas versagt und wie man diese Fehler beheben kann.
- **Trennung der Schichten**
  - : Platzieren von Inhalten (HTML), Styles (CSS) und Verhalten (JavaScript) in verschiedenen Code-Dateien, anstatt alles zusammen an einem Ort zu bündeln. Dies ist aus mehreren Gründen eine gute Idee, einschließlich Code-Management, Verständnis und Teamarbeit/Rollen-Trennung. In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, das man anstreben sollte, wo möglich, anstatt ein absolutes Ziel.
- **Responsive Webdesign**
  - : Erstellen von flexibler Funktionalität und Layouts, die sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Webseite, die auf einem Breitbild-Monitor anders aussieht als in einem Browser auf einem mobilen Endgerät. Passen Sie jetzt die Breite Ihres Browserfensters an und beobachten Sie, was mit dem Layout der Website passiert.
- **Performance**
  - : Webseiten so schnell wie möglich laden lassen, aber auch sie fehlerfrei und benutzerfreundlich machen, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Internationalisierung**
  - : Websites für Menschen aus verschiedenen Kulturen nutzbar machen, die andere Sprachen als Ihre eigene sprechen. Es gibt sowohl technische Überlegungen (wie das Anpassen Ihres Layouts, sodass es für Rechts-nach-Links- oder Oben-nach-Unten-Sprachen weiterhin funktioniert) als auch menschliche (wie die Verwendung einfacher, nicht slangartiger Sprache, damit verschiedene Kulturen eher Ihre Texte verstehen).
- **Datenschutz** & **Sicherheit**
  - : Diese beiden Konzepte sind verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen ihre Angelegenheiten privat machen zu lassen und sie nicht auszuspähen oder mehr Daten als nötig zu sammeln. Sicherheit bezieht sich darauf, Ihre Website auf eine sichere Weise zu konstruieren, damit böswillige Benutzer keine Informationen darauf stehlen können, weder von Ihnen noch von Ihren Benutzern.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
