---
title: Das Web-Standards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web und Webstandards — wie sie entstanden sind, was Webstandards-Technologien sind und wie sie zusammenarbeiten.

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
          <li>Webstandards und die grundlegenden Prinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsgremien arbeiten — zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Standarderstellung.</li>
          <li>Die wichtigsten Webstandards-Technologien und wie sie zusammenarbeiten.</li>
          <li>Serverseitige (dynamische) versus clientseitige (statische) Dateien.</li>
          <li>Beste Praktiken im Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** angesehen werden, da es auf [Paketvermittlung](https://de.wikipedia.org/wiki/Paketvermittlung) basierte und die erste Implementierung des Protokollsatzes [TCP/IP](https://de.wikipedia.org/wiki/Internetprotokollfamilie) umfasste. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet basiert.

Im Jahr 1980 schrieb [Tim Berners-Lee](https://de.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knoten enthielt. Kommt Ihnen das bekannt vor?

Im Jahr 1989 schrieb TimBL [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText am CERN; diese beiden Veröffentlichungen zusammen lieferten den Hintergrund, wie das Web funktionieren würde. Sie erhielten ein erhebliches Maß an Interesse, genug, um TimBLs Vorgesetzte zu überzeugen, ihm zu erlauben, ein globales Hypertext-System zu erstellen.

Bis 1990-91 hatte TimBL alle notwendigen Dinge geschaffen, um die erste Version des **World Wide Web** zum Laufen zu bringen (allgemein als **Web** bezeichnet) — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://de.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen Webserver und einige Webseiten zum Anschauen.

> [!NOTE]
> Menschen verwenden manchmal "das Web" und "das Internet" synonym, aber sie sind unterschiedliche Dinge. Das Internet ist die Infrastruktur, die es ermöglicht, Informationen zwischen verschiedenen Servern und Clients weltweit zu transportieren, während das Web ein System ist, das auf dem Internet aufgebaut ist. Das Web definiert Arten von Informationen (Inhalt und Code), die über das Internet und Kommunikationsprotokolle transportiert werden, um diesen Transport zu verwalten.

Im Jahr 1994 gründete TimBL das [World Wide Web Consortium](https://de.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter aus vielen verschiedenen Unternehmen zusammenbringt, um gemeinsam an der Schaffung von Webtechnologien zu arbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung bestehender Webtechnologien wie HTML und HTTP und der Schaffung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). Insbesondere CSS und JavaScript waren entscheidend dafür, dem Web Stil und Interaktivität zu verleihen und es so aussehen zu lassen, wie das Web, das wir heute kennen.

In den folgenden Jahren explodierte das Web mit der Veröffentlichung mehrerer Browser, der Einrichtung von Tausenden von Webservern und der Erstellung von Millionen von Webseiten. Andere Standardisierungsorganisationen tauchten ebenfalls auf, um verschiedene Aspekte von Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie daran interessiert sind, eine detailliertere Darstellung der Webgeschichte zu lesen, versuchen Sie, in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) nach "Geschichte des Webs" zu suchen und sehen Sie, was Sie finden können.

## Web-Standards

**Web-Standards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, sogenannte Spezifikationen, die genau darlegen, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb gibt es Websites wie MDN Web Docs). Stattdessen sollen sie von Softwareentwicklern verwendet werden, um diese Technologien zu implementieren (normalerweise in Webbrowsern).

### Standardisierungsgremien und -prozesse

Web-Standards werden von Standardisierungsgremien erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darauf zu einigen, wie die Technologien am besten funktionieren sollten, um alle ihre Anwendungsfälle zu erfüllen.

Das W3C ist das bekannteste Web-Standards-Gremium, aber es gibt noch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente und ihre zugehörigen APIs sowie andere umgebende Technologien) implementiert werden sollte.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken, wie WebGL.

Die gesamten Prozesse, durch die Standards erstellt werden, können tief und komplex werden. Allerdings, es sei denn, Sie möchten Ihre eigenen Web-Technologie-Funktionen erstellen, müssen Sie das meiste davon nicht verstehen. Wenn Sie an der Diskussion über neue Technologien teilnehmen und Feedback geben möchten, ist es in der Regel eine Frage des Beitritts zur entsprechenden Mailingliste oder eines anderen Diskussionsmechanismus. Standarddiskussionen werden öffentlich geführt, daher der Begriff ["Offene" Standards](#open_standards).

Für den Moment werden wir Ihnen ein allgemeines, übergeordnetes Verständnis dafür geben, wie Standardsprozesse funktionieren:

1. Jemand bemerkt den Bedarf an einem neuen Web-Standard-Feature, das das Leben der Entwickler einfacher machen wird. Zum Beispiel gibt es vielleicht ein häufig verwendetes Muster in Web-Benutzeroberflächen, das schwer zu implementieren ist. Eine spezielle CSS-Funktion würde es viel einfacher machen. Der "jemand" könnte jeder sein — ein einzelner Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Die Person diskutiert dieses Feature mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt, Interesse an der Umsetzung des Features zu wecken. Normalerweise schreiben sie ein erklärendes Dokument, das den Bedarf für das Feature und seine Funktionsweise erklärt, und eine Code-Demo, die zeigt, wie das Feature in Aktion aussehen würde.
3. Wenn genügend Interesse besteht, wird das Feature formal in der entsprechenden Arbeitsgruppe des Standardisierungsgremiums diskutiert. Zum Beispiel werden CSS-Features in der Regel von der [CSS-Arbeitsgruppe](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [Wikipedia-Seite der CSS-Arbeitsgruppe](https://de.wikipedia.org/wiki/CSS-Arbeitsgruppe) für eine etwas ausführlichere Beschreibung und Geschichte). Bevor eine neue Webtechnologie angenommen wird, muss sie gründlich geprüft werden, um sicherzustellen, dass sie gut für das Web ist – zum Beispiel darf sie keine Sicherheitsprobleme einführen, muss [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien sein und darf nicht auf Patenten basieren.
4. Um das Feature zu beweisen, passieren verschiedene Dinge. Diese Punkte können gleichzeitig mit Punkt 3 oder sogar davor geschehen (Browseranbieter implementieren manchmal proprietäre/nicht standardisierte Features und versuchen dann, sie später zu standardisieren):

   1. Ein oder mehrere Browseranbieter implementieren eine experimentelle Version des neuen Features, oft standardmäßig deaktiviert, aber die von Personen aktiviert werden kann, die es testen und Feedback geben möchten.
   2. Ein Mitglied der Arbeitsgruppe fügt es auch einer Technologiespezifikation hinzu, damit Browseranbieter es einheitlich implementieren können.
   3. Sie werden auch Feedback von anderen Browseranbietern einholen, um zu sehen, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich es ist, dass sie ihn implementieren. Diese werden als Standards-Positionen bezeichnet. Siehe beispielsweise [Mozilla Standards-Positionen](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Personen schreiben auch eine umfangreiche Testsuite, um zu demonstrieren, dass das Feature wie beschrieben funktioniert.

5. Schließlich, wenn alles gut geht, wird das Feature in allen Browsern implementiert und kann bei der Erstellung von Websites verwendet werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die das Feature vorschlagen, es in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dazu sammeln, dieselbe Person bzw. dieselben Personen sind.

Sie können mehr Informationen über spezifische Standards-Gremien-Prozesse finden. Siehe zum Beispiel:

- [W3C Prozessdokument](https://www.w3.org/policies/process/)
- [WHATWG — Arbeitsmodus](https://whatwg.org/working-mode)
- [Der TC39 Prozess](https://tc39.es/process-document/)

## Wichtige Prinzipien von Web-Standards

Die zentralen Prinzipien des Webs, die das Web zu einer einzigartigen und spannenden Branche machen, in der man sich engagieren kann, sind wie folgt:

- Offen für Beitrag und Nutzung, und daher nicht durch Patente belastet oder von einer einzelnen privaten Einrichtung kontrolliert.
- Zugänglich und interoperabel.
- Sie brechen das Web nicht.

Schauen wir uns jedes dieser Prinzipien ein wenig genauer an.

### "Offene" Standards

Eines der zentralen Merkmale von Web-Standards, auf das sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Web-Technologien) **offen** sein sollten. Das bedeutet, dass sie sowohl zum Beitrag als auch zur Nutzung frei sind und nicht durch Patente/Lizenzen belastet werden. Das ist wichtig — wenn eine Web-Technologie auf patentierten/lizenzierten Technologien basiert, um zu funktionieren, kann der Patentinhaber die implementierenden Browseranbieter potenziell hohe Beträge in Rechnung stellen, und diese Kosten würden dann an die Nutzer der Browser weitergegeben werden.

Darüber hinaus, da Web-Technologien offen in Zusammenarbeit zwischen vielen verschiedenen Unternehmen erstellt werden, bedeutet es, dass kein einzelnes Unternehmen sie kontrollieren kann, was eine wirklich gute Sache ist. Sie würden nicht wollen, dass ein einzelnes Unternehmen plötzlich beschließt, das gesamte Web hinter eine Bezahlschranke zu stellen, eine neue Version von HTML zu veröffentlichen, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder schlimmer noch, dass sie das Interesse verlieren und es einfach abschalten.

Offene Standards ermöglichen es, dass das Web eine frei verfügbare öffentliche Ressource bleibt, in der jeder den Code schreiben kann, um kostenlos eine Website zu erstellen, und jeder kann zum Prozess der Erstellung von Standards beitragen.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundlegend so konzipiert, dass Web-Inhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als ein großer Gleichmacher betrachtet, der es Menschen ermöglicht, unabhängig von ihren Umständen auf Informationen zuzugreifen. Das bedeutet, dass beispielsweise:

- Menschen, die keine Maus oder ein Zeigegerät verwenden können, die Tastatur verwenden können, um im Web zu navigieren.
- Menschen, die sehbehindert sind, Inhalte vergrößern oder ein Programm namens **Screenreader** verwenden können, um Inhalte laut vorzulesen und Steuerelemente auf eine verständliche Weise zu beschreiben.

> [!NOTE]
> Sie werden später im Lernpfad mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) lernen.

Darüber hinaus sollen Web-Technologien **interoperabel** sein. Da Web-Technologien gemäß veröffentlichter Standards implementiert werden, sollten Browser die gleiche gerenderte Ausgabe für eine bestimmte Eingabe (zum Beispiel HTML-, CSS- oder JS-Code) bereitstellen – mit anderen Worten, eine Website sollte in mehreren Browsern einheitlich funktionieren.

### Das Web nicht brechen

Ein weiterer Satz, den Sie bei offenen Webstandards hören werden, ist "das Web nicht brechen". Die Idee dahinter ist, dass jede neue Webtechnologie rückwärtskompatibel mit dem sein sollte, was davor kam, damit bestehende Websites weiterhin auf die gleiche Weise funktionieren, wie sie es zuvor taten.

Webbrowser-Anbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne eine Änderung beim Rendern oder bei der Funktionalität zu verursachen, die dazu führen würde, dass ihre Benutzer denken, eine Website sei kaputt und daraufhin einen anderen Browser ausprobieren.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen müssen, wenn Sie ein Front-End-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie zum Erstellen einer Website verwenden.

- HTML ist für die Struktur und Semantik (Bedeutung).
- CSS ist für das Styling und Layout.
- JavaScript und APIs sind für die Steuerung des dynamischen Verhaltens.

#### HTML

HyperText Markup Language oder **HTML** ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, in die Sie Inhalte einwickeln (markieren) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht wie folgt aus:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

Wenn wir ein Hausbau-Analogie verwenden würden, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.

#### CSS

Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Styles auf Ihr HTML anzuwenden — zum Beispiel, um Text- und Hintergrundfarben festzulegen, Ränder hinzuzufügen, Dinge zu animieren oder eine Seite auf eine bestimmte Weise zu layouten. Als einfaches Beispiel würde der folgende Code alle HTML-Absätze rot färben:

```css
p {
  color: red;
}
```

In der Haus-Analogie ist CSS wie die Farbe, Tapete, Teppiche und Bilder, die Sie verwenden, um das Haus schön aussehen zu lassen.

#### JavaScript (und APIs)

**JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität in Webseiten hinzuzufügen, von dynamischem Style-Wechsel, über Abrufen von Aktualisierungen vom Server bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript speichert eine Referenz zu einem Absatz im Speicher und ändert den Text darin:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

Sie werden auch den Begriff **APIs** zusammen mit JavaScript hören. API steht für **Application Programming Interface**. In allgemeinen Worten ist eine API ein Kodeteil, der Ihnen ermöglicht, andere, komplexere Kodeteile oder andere Funktionen auf Ihrem Computer (wie Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf eine handhabbare Weise zu steuern.

Beispielsweise wäre es ziemlich schwierig, Ihre eigene Schnittstelle zu schreiben, um mit Ihrer Webcam zu kommunizieren und einen Videostream davon zu erfassen, aber die JavaScript-Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia#examples) ermöglicht es Ihnen, dies ziemlich einfach zu tun. Sie übernimmt all die harte Arbeit hinter den Kulissen, sodass Sie das Rad nicht jedes Mal neu erfinden müssen.

Das einfache Codebeispiel oben verwendet auch eine API. [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`textContent`](/de/docs/Web/API/Node/textContent) sind beide Teil der API-Familie des [Document Object Model (DOM)](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), die es Ihnen ermöglicht, mit JavaScript Webdokumente zu manipulieren.

In der Haus-Analogie ist JavaScript wie der Herd, Fernseher, die Mikrowelle oder der Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionalität verleihen.

### Andere Web-Technologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie bereits erwähnt.
- [SVG](/de/docs/Web/SVG) zum Erstellen und Manipulieren von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

Allerdings sind HTML, CSS und JavaScript bei weitem die wichtigsten Technologien zum Lernen, sodass wir uns in unserem Lernpfad hauptsächlich auf diese konzentrieren werden.

## Tools

Sobald Sie die standardmäßigen, grundlegenden Technologien zum Erstellen von Webseiten (wie HTML, CSS und JavaScript) gelernt haben, werden Ihnen bald verschiedene Tools begegnen, die Ihnen die Arbeit erleichtern oder effizienter gestalten können. Beispiele sind:

- [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) in modernen Browsern, die zum Debuggen Ihres Codes verwendet werden können.
- [Test-Tools](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests durchzuführen, die zeigen, ob Ihr Code so funktioniert, wie Sie es beabsichtigt haben.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufgebaut sind und es Ihnen ermöglichen, bestimmte Arten von Websites viel schneller und effektiver zu erstellen.
- So genannte **Linter** und **Formatter**, die ein Regelwerk für den Kodierungsstil nehmen, Ihren Code betrachten und Ihren Code aktualisieren, um diesen Regeln zu entsprechen. Prettier, den Sie [bereits früher im Kurs kennengelernt haben](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions), ist ein Beispiel für einen Formatter.

## Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Front-End- (oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um ein Website-Front-End zu produzieren, das Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als back-end (oder serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann zum Anzeigen an den Browser gesendet wird. Eine typische Verwendung für eine serverseitige Sprache besteht darin, einige Daten aus einer Datenbank zu extrahieren, etwas HTML zu generieren, das die Daten enthält, und dann das HTML zum Anzeigen an den Browser zu senden.

Beispielhafte serverseitige Frameworks und Sprachen umfassen ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien werden nicht als "Webstandards" betrachtet — sie werden von Organisationen entwickelt, die außerhalb der Webstandardsprozesse von Organisationen wie dem W3C und WHATWG arbeiten — obwohl einige von ihnen Prozesse haben, die ähnlich offen sind.

### Statisch versus dynamisch

Eine andere Art, wie clientseitige und serverseitige Sprachen oft beschrieben werden, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Wenn sie angefordert wird, wird sie unverändert an den Client geliefert und vom Browser gerendert. Da sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Wenn serverseitiger Code (zum Beispiel ein Python-Skript oder eine ASP.NET-Seite) etwas HTML mit Daten generiert und dieses HTML an den Client zurücksendet, ändern sich die Inhalte des HTML je nachdem, was der serverseitige Code tut. Daher wird sie als "dynamisch" bezeichnet.

Es gibt oft eine gewisse Überschneidung zwischen den Konzepten von statischem und dynamischem Code. Serverseitige Sprachen definieren HTML-Strukturen normalerweise innerhalb einer Vorlagendatei, die in der Regel hauptsächlich statisches HTML mit einigen speziellen dynamischen Abschnitten enthält, die sich ändern, je nachdem, welche Daten eingefügt werden müssen.

## Beste Praktiken im Web

Wir haben kurz über die Technologien gesprochen, die Sie verwenden werden, um Websites zu erstellen. Jetzt lassen Sie uns die besten Praktiken diskutieren, die Webentwickler im Allgemeinen anwenden, um sicherzustellen, dass ihre Websites von möglichst vielen Menschen genutzt werden können.

Beim Web-Development kommt die Hauptursache für Unsicherheiten daher, dass Sie nicht wissen, welche Kombination aus Technologie jeder Benutzer verwenden wird, um Ihre Website zu betrachten:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm betrachten.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem Breitbildmonitor betrachten.
- Benutzer 3 könnte sehbehindert sein und einen Screenreader verwenden, um die Webseite zu lesen und mit ihr zu interagieren.
- Benutzer 4 könnte eine wirklich alte Desktop-Maschine verwenden, die keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — gestalten Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle das gleiche Erlebnis haben.

Sie werden im Laufe Ihres Studiums auf die folgenden Konzepte stoßen, die Best Practices darstellen, denen Ihre Websites idealerweise entsprechen sollten. Machen Sie sich jetzt noch keine großen Sorgen über diese. In den meisten Teilen des Kurses versuchen wir, diese implizit zu lehren, was bedeutet, dass, wenn wir Ihnen HTML, CSS und JavaScript beibringen, unsere Beispiele nach Möglichkeit den Best Practices folgen werden. Später in Ihrem Lernprozess werden Sie wahrscheinlich explizit in diesen Bereichen lehren.

- **Progressive Verbesserung**
  - : Eine minimale Erfahrung schaffen, die die wesentliche Funktionalität für alle Benutzer bietet, und eine bessere Erfahrung und andere Verbesserungen in Browsern hinzufügen, die diese unterstützen können. Progressive Verbesserung wird oft als unwichtig angesehen, da Browser heutzutage dazu neigen, neue Features konsistenter zu unterstützen, und die Menschen dazu neigen, schnellere Internetverbindungen mit höheren Limits für die Datennutzung zu haben. Berücksichtigen Sie jedoch Beispiele wie das Reduzieren von Verzierungen, um eine mobile Erfahrung zu vereinfachen und Daten zu sparen, oder das Bereitstellen einer leichteren, bandbreitenarmen Erfahrung für Benutzer, die pro Megabyte zahlen oder beschränkte Verbindungen haben.
- **Cross-Browser-Kompatibilität**
  - : Versuchen, sicherzustellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dies schließt die Verwendung von Technologien ein, die alle Browser unterstützen, das Bereitstellen besserer Erlebnisse für Browser, die diese handhaben können (progressive Verbesserung), und/oder das Schreiben von Code, damit er in älteren Browsern auf eine einfachere, aber dennoch nutzbare Erfahrung zurückfällt (als **Gnadenvolle Degradation** bezeichnet). Es erfordert auch Tests, um zu sehen, ob etwas in bestimmten Browsern fehlschlägt, und dann weitere Arbeiten, um diese Fehler zu beheben.
- **Separierung der Schichten**
  - : Das Trennen von Inhalt (HTML), Styling (CSS) und Verhalten (JavaScript) in verschiedene Coddateien, anstatt alles an derselben Stelle zusammenzuführen. Dies ist aus vielen Gründen eine gute Idee, einschließlich der Codeverwaltung und des Verständnisses sowie der Teamarbeit/Trennung der Rollen. In der Realität ist die Trennung nicht immer eindeutig. Es ist ein Ideal, auf das man, wo möglich, hinarbeiten sollte, anstatt ein absolutes.
- **Responsive Webdesign**
  - : Ihre Funktionalitäten und Layouts flexibel gestalten, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die in einem Breitbild-Browser auf dem Desktop auf eine Weise angeordnet ist, aber als kompakteres, einspaltiges Layout auf mobilen Browsern angezeigt wird. Versuchen Sie jetzt, die Breite Ihres Browserfensters anzupassen und zu sehen, was mit dem Seitenlayout passiert.
- **Performance**
  - : Webseiten so schnell wie möglich laden lassen, aber auch sie intuitiv und einfach zu bedienen machen, damit Benutzer nicht frustriert sind und woanders hingehen.
- **Internationalisierung**
  - : Webseiten für Menschen aus verschiedenen Kulturen nutzbar machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen (wie das Ändern Ihres Layouts, damit es auch für rechts-nach-links- oder oben-nach-unten-Sprachen funktioniert) und menschliche (wie die Verwendung einfacher, nicht-umgangssprachlicher Sprache, sodass verschiedene Kulturen Ihren Text eher verstehen können).
- **Privatsphäre** & **Sicherheit**
  - : Diese beiden Konzepte sind verwandt, aber unterschiedlich. Privatsphäre bezieht sich darauf, Menschen zu ermöglichen, ihrer Tätigkeit privat nachzugehen, ohne sie auszuspionieren oder mehr Daten von ihnen zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website so zu konstruieren, dass böswillige Benutzer keine Informationen von Ihnen oder Ihren Benutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
