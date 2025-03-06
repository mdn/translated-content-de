---
title: Das Webstandards-Modell
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: f7d13fbba7757c38330a0771c9b7fc81bcbe08f7
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet einige nützliche Hintergrundinformationen über das Web und Webstandards — wie sie entstanden sind, was Webstandards-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Ihrem Computerbetriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Webstandards und die zentralen Prinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsgremien arbeiten — zum Beispiel das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Erstellung von Standards.</li>
          <li>Die wichtigsten Webstandards-Technologien und wie sie zusammenarbeiten.</li>
          <li>Serverseitige (dynamische) vs. clientseitige (statische) Dateien.</li>
          <li>Web-Best Practices.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Webs

In den späten 1960er Jahren entwickelte das amerikanische Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** betrachtet werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung der [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollfamilie aufwies. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

Im Jahr 1980 schrieb [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) (oft als TimBL bezeichnet) ein Notizbuchprogramm namens ENQUIRE, das das Konzept von Links zwischen verschiedenen Knoten beinhaltete. Klingt vertraut?

Schnell vorwärts bis 1989, und TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText bei CERN; diese beiden Publikationen zusammen stellten den Hintergrund bereit, wie das Web funktionieren würde. Sie erhielten eine beträchtliche Menge an Interesse, genug, um TimBL's Chefs zu überzeugen, ihm zu erlauben, ein globales Hypertextsystem zu schaffen.

Bis 1990-91 hatte TimBL alles erschaffen, was benötigt wurde, um die erste Version des **World Wide Web** (allgemein als das **Web** bezeichnet) zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser, der [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) genannt wurde, einen Webserver und einige Webseiten zum Anschauen.

> [!NOTE]
> Menschen verwenden manchmal "das Web" und "das Internet" austauschbar, aber sie sind verschiedene Dinge. Das Internet ist die Infrastruktur, die es ermöglicht, Information auf der ganzen Welt zwischen verschiedenen Servern und Clients zu transportieren, während das Web ein auf dem Internet aufgebautes System ist. Das Web definiert Arten von Informationen (Inhalt und Code), die über das Internet und Kommunikationsprotokolle transportiert werden, um diesen Transport zu verwalten.

1994 gründete TimBL das [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter aus vielen verschiedenen Unternehmen zusammenbringt, um gemeinsam an der Erstellung von Webtechnologien zu arbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung bestehender Webtechnologien wie HTML und HTTP und an der Schaffung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). Insbesondere CSS und JavaScript waren entscheidend dafür, dem Web Stil und Interaktivität zu verleihen, wodurch es mehr wie das Web aussieht, das wir heute kennen.

In den folgenden Jahren explodierte das Web, mit der Veröffentlichung von mehreren Browsern, der Einrichtung von tausenden Webservern und der Erstellung von Millionen von Webseiten. Andere Standardisierungsorganisationen tauchten ebenfalls auf, um verschiedene Aspekte der Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie an einem detaillierteren Bericht über die Geschichte des Webs interessiert sind, versuchen Sie, nach "Geschichte des Webs" in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) zu suchen und sehen Sie, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir zum Erstellen von Websites verwenden. Diese Standards existieren als lange technische Dokumente, genannt Spezifikationen, die genau beschreiben, wie die Technologie funktionieren sollte. Diese Dokumente sind nicht sehr hilfreich, um zu lernen, wie man die beschriebenen Technologien verwendet (deshalb gibt es Seiten wie MDN Web Docs). Stattdessen sollen sie von Softwareingenieuren genutzt werden, um diese Technologien zu implementieren (normalerweise in Webbrowsern).

### Standardisierungsgremien und Prozesse

Webstandards werden von Standardisierungsgremien erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, zusammenzukommen und sich darauf zu einigen, wie die Technologien am besten funktionieren sollten, um alle ihre Anwendungsfälle zu erfüllen.

Das W3C ist das bekannteste Webstandards-Gremium, aber es gibt auch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente und deren zugehörige APIs und andere umgebende Technologien) implementiert werden sollte.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken, wie WebGL.

Die vollständigen Prozesse, durch die Standards erstellt werden, können tief und komplex sein. Es sei denn, Sie wollen Ihre eigenen Webtechnologie-Features erstellen, müssen Sie das meiste davon nicht verstehen. Wenn Sie zur Diskussion über neue Technologien beitragen und Feedback geben möchten, besteht dies üblicherweise darin, sich in die entsprechende Mailingliste oder einen anderen Diskussionsmechanismus einzubringen. Standardsdiskussionen werden öffentlich geführt, daher auch der Begriff ["Offene" Standards](#open_standards).

Für den Moment geben wir Ihnen ein allgemeines, hohes Verständnis dafür, wie Standardsprozesse funktionieren:

1. Jemand bemerkt den Bedarf an einem neuen Feature des Webstandards, das das Leben von Entwicklern erleichtern wird. Beispielsweise könnte es ein häufig verwendetes Muster in Web-Benutzeroberflächen geben, dessen Implementierung aber aufwendig ist. Ein dediziertes CSS-Feature würde es viel einfacher machen. Dieser Jemand könnte jeder sein — ein individueller Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Diese Person diskutiert dieses Feature mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt, Interesse an der Implementierung des Features zu wecken. Üblicherweise schreiben sie ein Erklärungsdokument, das den Bedarf für das Feature und dessen Funktionsweise erklärt, und eine Code-Demo, die zeigt, wie das Feature in Aktion aussehen würde.
3. Wenn genug Interesse an dem Feature besteht, wird es formell in der relevanten Arbeitsgruppe des Standardisierungsgremiums diskutiert. Zum Beispiel werden CSS-Features üblicherweise von der [CSS-Arbeitsgruppe](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [CSS-Arbeitsgruppe Wikipedia-Seite](https://en.wikipedia.org/wiki/CSS_Working_Group) für eine genauere Beschreibung und Geschichte). Bevor eine neue Webtechnologie angenommen wird, muss sie gründlich geprüft werden, um sicherzustellen, dass sie dem Web gut tut — zum Beispiel, dass sie keine Sicherheitsprobleme einführt, sie [zugänglich und kompatibel](#zugänglich_und_interoperabel) mit anderen Webtechnologien ist und keine Patente voraussetzt.
4. Um das Feature zu beweisen, passieren mehrere Dinge. Diese Punkte können alle gleichzeitig mit Punkt 3 oder sogar davor passieren (Browseranbieter implementieren manchmal proprietäre/nicht-standardisierte Features und versuchen dann, sie im Nachhinein zu standardisieren):

   1. Einer oder mehrere Browseranbieter implementieren eine experimentelle Version des neuen Features, oft standardmäßig deaktiviert, aber kann von Personen aktiviert werden, die es testen und Feedback geben möchten.
   2. Ein Mitglied der Arbeitsgruppe fügt es auch einer Technologie-Spezifikation hinzu, damit Browseranbieter es konsistent implementieren können.
   3. Sie holen auch Feedback von anderen Browserherstellern ein, um zu sehen, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich es ist, dass sie es implementieren. Dies nennt man Standardpositionen. Sehen Sie sich zum Beispiel die [Mozilla Standards Positionen](https://mozilla.github.io/standards-positions/) an.
   4. Beteiligte Personen schreiben auch eine umfangreiche Testsuite, um zu demonstrieren, dass das Feature wie beschrieben funktioniert.

5. Schließlich wird das Feature, wenn alles gut geht, in allen Browsern implementiert und kann beim Erstellen von Websites genutzt werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die das Feature vorschlagen, es in einem Browser implementieren, die Spezifikation erstellen, Tests schreiben und das Feedback dazu sammeln, dieselben Personen sind.

Sie können mehr Informationen über spezifische Prozesse von Standardisierungsgremien finden. Sehen Sie sich zum Beispiel an:

- [W3C Prozessdokument](https://www.w3.org/policies/process/)
- [WHATWG — Arbeitsmodus](https://whatwg.org/working-mode)
- [Der TC39-Prozess](https://tc39.es/process-document/)

## Schlüsselprinzipien der Webstandards

Die Schlüsselprinzipien des Webs, die das Web zu einer einzigartigen und aufregenden Branche machen, in der man sich engagieren kann, sind wie folgt:

- Offen für Beitragen und Benutzen und daher nicht durch Patente beschränkt oder von einer einzelnen privaten Einheit kontrolliert.
- Zugänglich und interoperabel.
- Sie bringen das Web nicht zum Absturz.

Lassen Sie uns jedes dieser Prinzipien etwas genauer betrachten.

### "Offene" Standards

Eine der Schlüsselaspekte von Webstandards, auf die sich TimBL und das W3C von Anfang an geeinigt haben, ist, dass das Web (und Webtechnologien) **offen** sein sollten. Das bedeutet, dass sie frei zur Mitwirkung und Nutzung sind und nicht durch Patente/Lizenzen eingeschränkt werden. Das ist wichtig — wenn eine Webtechnologie auf patentierte/lizenzierte Technologien angewiesen ist, um zu funktionieren, kann der Patent-/Eigentümer von implementierenden Browseranbietern möglicherweise große Geldmengen verlangen, und diese Kosten würden dann an die Benutzer der Browser weitergegeben.

Darüber hinaus bedeutet die Tatsache, dass Webtechnologien offen in Zusammenarbeit zwischen vielen verschiedenen Unternehmen erstellt werden, dass kein Unternehmen allein die Kontrolle darüber hat, was eine sehr gute Sache ist. Sie würden nicht wollen, dass ein einzelnes Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Paywall zu stellen, eine neue Version von HTML zu veröffentlichen, die jeder kaufen muss, um Websites weiter zu erstellen, oder schlimmer noch, entscheidet, dass es nicht mehr interessiert ist und es einfach abschaltet.

Offene Standards ermöglichen es, dass das Web eine frei verfügbare öffentliche Ressource bleibt, in der jeder den Code kostenlos schreiben kann, um eine Website zu erstellen, und jeder am Standardisierungsprozess teilnehmen kann.

### Zugänglich und interoperabel

Das Web und Webbrowser sind grundsätzlich so konzipiert, dass Webinhalte für Menschen mit Behinderungen **zugänglich** sind. Es wurde ursprünglich als großer Gleichmacher gesehen, der es Menschen ermöglicht, Informationen unabhängig von ihren Umständen zuzugreifen. Das bedeutet beispielsweise:

- Menschen, die keine Maus oder Zeigegerät verwenden können, können die Tastatur nutzen, um im Web zu navigieren.
- Menschen mit Sehbehinderungen können Inhalte vergrößern oder ein Programm namens **Screenreader** verwenden, um sich die Inhalte vorlesen zu lassen und Steuerungen in einer verstandlichen Weise zu beschreiben.

> [!NOTE]
> Sie werden später in Ihrem Lernpfad mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) lernen.

Darüber hinaus sollen Webtechnologien **interoperabel** sein. Da Webtechnologien gemäß veröffentlichten Standards implementiert werden, sollten Browser das gleiche gerenderte Ergebnis für einen gegebenen Input (zum Beispiel HTML, CSS oder JS-Code) bereitstellen — mit anderen Worten, eine Website sollte konsistent über mehrere Browser hinweg funktionieren.

### Das Web nicht zerstören

Ein weiterer Begriff, den Sie in Bezug auf offene Webstandards hören werden, ist "das Web nicht zerstören". Die Idee dahinter ist, dass jede neue Webtechnologie rückwärtskompatibel mit früheren Versionen sein sollte, damit bestehende Websites wie zuvor funktionieren.

Webbrowser-Anbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne eine Änderung im Rendering oder der Funktionalität zu verursachen, die ihre Benutzer dazu bringen würde, zu denken, dass eine Website kaputt ist und daher einen anderen Browser auszuprobieren.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien zu lernen, wenn Sie ein Frontend-Webentwickler werden möchten. In diesem Abschnitt werden wir sie kurz beschreiben.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei wichtigsten Technologien, die Sie verwenden werden, um eine Website zu erstellen.

- HTML ist für die Struktur und Semantik (Bedeutung).
- CSS ist für das Styling und Layout.
- JavaScript und APIs sind für die Steuerung dynamischen Verhaltens.

#### HTML

HyperText Markup Language oder **HTML** ist eine Markup-Sprache, bestehend aus verschiedenen Elementen, in die Sie Inhalte einwickeln (markieren) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht so aus:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

Wenn wir eine Analogie zum Hausbau annehmen, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.

#### CSS

Cascading Style Sheets (**CSS**) ist eine regelbasierte Sprache, die verwendet wird, um Styles auf Ihr HTML anzuwenden — zum Beispiel Text und Hintergrundfarben einstellen, Grenzen hinzufügen, Dinge animieren oder eine Seite auf bestimmte Weise layouten. Als einfaches Beispiel würde der folgende Code alle HTML-Absätze rot färben:

```css
p {
  color: red;
}
```

In der Hausanalogie wäre CSS wie die Farbe, Tapeten, Teppiche und Gemälde, die Sie verwenden würden, um das Haus schön aussehen zu lassen.

#### JavaScript (und APIs)

**JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität zu Websites hinzuzufügen, von dynamischem Stilewechsel über das Abrufen von Updates vom Server bis hin zu komplexen 3D-Grafiken. Das folgende einfache JavaScript speichert eine Referenz auf einen Absatz im Speicher und ändert den Text darin:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

Sie werden auch den Begriff **APIs** zusammen mit JavaScript hören. API steht für **Application Programming Interface**. Im Allgemeinen ist eine API ein Stück Code, das Ihnen erlaubt, andere komplexere Codes oder andere Funktionen auf Ihrem Computer (wie z.B. Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf eine verwaltbare Weise zu steuern.

Zum Beispiel können Sie Ihre eigene Schnittstelle schreiben, um mit Ihrer Webcam zu kommunizieren und einen Videostream davon zu erfassen, aber die JavaScript-Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia#examples) ermöglicht Ihnen dies relativ einfach. Sie erledigt die ganze Arbeit für Sie im Hintergrund, sodass Sie das Rad nicht jedes Mal neu erfinden müssen.

Das einfache Codebeispiel oben verwendet auch eine API. [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`textContent`](/de/docs/Web/API/Node/textContent) sind beide Teile der [Document Object Model (DOM)](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) API-Familie, die es Ihnen ermöglicht, mit JavaScript Webdokumente zu manipulieren.

In der Hausanalogie wäre JavaScript wie der Herd, der Fernseher, die Mikrowelle oder der Haartrockner — die Dinge, die Ihrem Haus nützliche Funktionalitäten verleihen.

### Andere Webtechnologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie weiter oben erwähnt.
- [SVG](/de/docs/Web/SVG) zur Erstellung und Manipulation von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) zur Beschreibung mathematischer Formeln.

Allerdings sind HTML, CSS und JavaScript bei weitem die wichtigsten Technologien, die es zu lernen gilt, daher werden wir uns in unserem Lernpfad hauptsächlich auf diese konzentrieren.

## Werkzeuge

Sobald Sie die grundlegenden, fundamentalen Technologien zur Erstellung von Webseiten (wie HTML, CSS und JavaScript) gelernt haben, werden Sie bald auf verschiedene Werkzeuge stoßen, die verwendet werden können, um Ihre Arbeit einfacher oder effizienter zu machen. Beispiele dafür sind:

- [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) innerhalb moderner Browser, die dazu verwendet werden können, Ihren Code zu debuggen.
- [Testwerkzeuge](/de/docs/Learn_web_development/Extensions/Testing), die dazu verwendet werden können, Tests auszuführen, um zu zeigen, ob Ihr Code sich wie gewünscht verhält.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und es ermöglichen, bestimmte Arten von Websites schneller und effektiver zu erstellen.
- So genannte **Linters** und **Formatter**, die eine Menge von Kodierungsstil-Regeln nehmen, Ihren Code betrachten und Ihren Code aktualisieren, um diesen Regeln zu folgen. Prettier, das Sie [zuvor im Kurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) kennengelernt haben, ist ein Beispiel für einen Formatter.

## Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Frontend-(oder clientseitige) Sprachen, was bedeutet, dass sie vom Browser ausgeführt werden, um eine Webseite zu produzieren, die Ihre Benutzer verwenden können.

Es gibt eine andere Klasse von Sprachen, die als Backend- (oder serverseitige) Sprachen bezeichnet werden, was bedeutet, dass sie auf dem Server ausgeführt werden, bevor das Ergebnis dann an den Browser gesendet wird, um angezeigt zu werden. Eine typische Verwendung für eine serverseitige Sprache besteht darin, Daten aus einer Datenbank abzurufen, einige HTML zu generieren, die die Daten enthalten, und dann das HTML an den Browser zu senden, um es dem Benutzer anzuzeigen.

Beispielhafte serverseitige Frameworks und Sprachen sind ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien werden nicht als "Webstandards" betrachtet — sie werden von Organisationen außerhalb der Standardisierungsprozesse von Organisationen wie dem W3C und WHATWG entwickelt — obwohl einige von ihnen ähnliche offene Prozesse haben werden.

### Statisch vs. dynamisch

Ein anderer Weg, auf dem clientseitige und serverseitige Sprachen oft beschrieben werden, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Bei Anforderung wird sie unverändert an den Client geliefert und vom Browser gerendert. Weil sie sich nicht ändert, wird sie als "statisch" bezeichnet.
- Wenn serverseitiger Code (zum Beispiel ein Python-Skript oder eine ASP.NET-Seite) einige HTML generiert, das Daten enthält, und dieses HTML an den Client zurücksendet, ändern sich die Inhalte des HTML je nachdem, was der serverseitige Code tut. Es wird daher als "dynamisch" bezeichnet.

Es gibt oft eine gewisse Überschneidung zwischen den Konzepten von statischem und dynamischem Code. Serverseitige Sprachen definieren normalerweise HTML-Strukturen innerhalb einer Vorlagendatei, die meist aus statischem HTML bestehen, mit einigen speziellen dynamischen Abschnitten, die je nach dem einzufügenden Dateninhalt variieren.

## Web-Best Practices

Wir haben kurz über die Technologien gesprochen, die Sie zum Erstellen von Websites verwenden werden. Schauen wir uns jetzt die Best Practices an, die Webentwickler im Allgemeinen anwenden, um sicherzustellen, dass ihre Websites für möglichst viele Menschen nutzbar sind.

Beim Webentwickeln ist die Hauptursache für Unsicherheiten, dass Sie nicht wissen, welche Kombination von Technologien jeder Benutzer verwenden wird, um Ihre Website zu betrachten:

- Benutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm anzeigen.
- Benutzer 2 könnte sie auf einem Windows-Laptop mit einem angeschlossenen Breitbildmonitor anzeigen.
- Benutzer 3 könnte sehbehindert sein und einen Screenreader verwenden, um die Webseite zu lesen und damit zu interagieren.
- Benutzer 4 könnte einen wirklich alten Desktop-Computer verwenden, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, was Ihre Benutzer verwenden werden, müssen Sie defensiv gestalten — machen Sie Ihre Website so flexibel wie möglich, damit alle oben genannten Benutzer sie nutzen können, auch wenn sie möglicherweise nicht alle die gleiche Erfahrung machen.

Sie werden während Ihrer Studien irgendwann auf die folgenden Konzepte stoßen, die Best Practices repräsentieren, denen Ihre Websites idealerweise folgen sollten. Machen Sie sich darüber jetzt nicht zu viele Sorgen. Im Verlauf des Kurses versuchen wir, diese implizit zu lehren, indem wir, wenn wir Ihnen HTML, CSS und JavaScript beibringen, unsere Beispiele wo möglich den Best Practices folgen lassen. Später auf Ihrem Lernweg werden Sie wahrscheinlich explizite Lehren in diesen Bereichen erkunden.

- **Progressive Enhancement**
  - : Das Erstellen einer minimalen Erfahrung, die allen Benutzern die wesentliche Funktionalität bietet, und das Schichten einer besseren Erfahrung und anderer Verbesserungen in Browsern, die sie unterstützen können. Progressive Enhancement wird oft als unwichtig angesehen, da Browser inzwischen konsistenter neue Funktionen unterstützen und Menschen tendenziell schnellere Internetverbindungen mit höheren Datenverbrauchslimits haben. Berücksichtigen Sie jedoch Beispiele wie das Kürzen von Dekorationen, um ein flüssigeres mobiles Erlebnis zu schaffen und Daten zu sparen oder eine leichtere, datenreduzierte Erfahrung für Benutzer zu bieten, die pro Megabyte oder mit gemessenen Verbindungen bezahlen.
- **Cross-Browser-Kompatibilität**
  - : Der Versuch sicherzustellen, dass Ihre Webseite auf so vielen Geräten wie möglich funktioniert. Dazu gehört die Nutzung von Technologien, die alle Browser unterstützen, das Anbieten besserer Erlebnisse für Browser, die mit ihnen umgehen können (Progressive Enhancement), und/oder das Schreiben von Code, der auf eine einfachere, aber dennoch nutzbare Erfahrung in älteren Browsern zurückfällt (genannt **Graceful Degradation**). Es erfordert auch Tests, um festzustellen, ob etwas in bestimmten Browsern nicht funktioniert, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Trennen der Ebenen**
  - : Das Platzieren Ihrer Inhalte (HTML), Ihres Stylings (CSS) und Ihres Verhaltens (JavaScript) in verschiedenen Code-Dateien anstatt sie alle am selben Ort zusammenzufügen. Dies ist aus vielen Gründen eine gute Idee, einschließlich der Verwaltung und des Verständnisses von Code sowie der Teamarbeit/Trennung der Rollen. In der Realität ist die Trennung nicht immer klar. Es ist ein Ideal, das man anstreben sollte, wo immer es möglich ist, und kein absolutes.
- **Responsives Webdesign**
  - : Die Flexibilisierung Ihrer Funktionalität und Layouts, sodass sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel ist eine Website, die auf einem Breitbild-Desktop-Browser auf eine Weise layoutet ist, aber in mobilen Browsern in einem kompakteren, einspaltigen Layout angezeigt wird. Versuchen Sie, jetzt die Breite Ihres Browserfensters anzupassen, und sehen Sie, was mit dem Seitenlayout passiert.
- **Leistung**
  - : Webseiten so schnell wie möglich laden lassen, aber sie auch intuitiv und einfach zu bedienen machen, damit Benutzer nicht frustriert werden und woanders hingehen.
- **Internationalisierung**
  - : Websites nutzbar für Menschen aus verschiedenen Kulturen zu machen, die andere Sprachen als Ihre eigene sprechen. Es gibt technische Überlegungen hier (wie das Anpassen Ihres Layouts, damit es auch für rechts-nach-links- oder oben-nach-unten-Sprachen funktioniert), und menschliche (wie das Verwenden einfacher, nicht-slanghaltiger Sprache, damit verschiedene Kulturen Ihren Text besser verstehen können).
- **Datenschutz** & **Sicherheit**
  - : Diese beiden Konzepte sind verwandt, aber unterschiedlich. Datenschutz bezieht sich darauf, Menschen zu ermöglichen, ihre Angelegenheiten privat zu erledigen und sie nicht auszuspionieren oder mehr ihrer Daten zu sammeln, als Sie unbedingt benötigen. Sicherheit bezieht sich darauf, Ihre Website so zu gestalten, dass böswillige Benutzer keine Informationen darauf von Ihnen oder Ihren Benutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_STARTED/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
