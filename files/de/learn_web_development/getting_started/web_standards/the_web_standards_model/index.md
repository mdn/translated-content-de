---
title: Das Modell der Webstandards
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 90e419a0ec9741f35bc564beb90e74210bc4c97a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Dieser Artikel bietet nützliche Hintergrundinformationen über das Web und Webstandards — wie sie entstanden sind, was Webstandard-Technologien sind und wie sie zusammenarbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computer-Betriebssystems, der Webbrowser und der Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Webstandards und die grundlegenden Prinzipien, auf denen sie basieren.</li>
          <li>Wie Standardisierungsorganisationen arbeiten — beispielsweise das <a href="https://www.w3.org/">W3C</a>, <a href="https://whatwg.org/">WHATWG</a>, <a href="https://tc39.es/">TC39</a> und die <a href="https://www.khronos.org/">Khronos Group</a>; der Prozess der Standarderstellung.</li>
          <li>Die wichtigsten Webstandard-Technologien und wie sie zusammenarbeiten.</li>
          <li>Server-seitige (dynamische) gegenüber client-seitigen (statischen) Dateien.</li>
          <li>Best Practices für das Web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Kurze Geschichte des Web

In den späten 1960er Jahren entwickelte das US-Militär ein Kommunikationsnetzwerk namens {{Glossary("Arpanet", "ARPANET")}}. Dies kann als Vorläufer des **Internets** angesehen werden, da es auf [Paketvermittlung](https://en.wikipedia.org/wiki/Packet_switching) basierte und die erste Implementierung der [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite)-Protokollfamilie enthielt. Diese beiden Technologien bilden die Grundlage der Infrastruktur, auf der das Internet aufgebaut ist.

1980 schrieb [Tim Berners-Lee](https://de.wikipedia.org/wiki/Tim_Berners-Lee) (oft „TimBL“ genannt) ein Notizbuchprogramm namens ENQUIRE, das das Konzept der Verlinkung zwischen Knotenpunkten enthielt. Klingt bekannt?

Springen wir ins Jahr 1989: TimBL schrieb [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) und HyperText bei CERN; diese beiden Publikationen legten die Grundlagen dafür, wie das Web funktionieren würde. Sie erhielten eine beachtliche Resonanz, genug, um TimBLs Vorgesetzte davon zu überzeugen, ihn ein globales Hypertext-System entwickeln zu lassen.

Bis 1990-91 hatte TimBL alles geschaffen, was notwendig war, um die erste Version des **World Wide Web** (allgemein als **Web** bezeichnet) zu betreiben — [HTTP](/de/docs/Web/HTTP), [HTML](/de/docs/Web/HTML), den ersten Webbrowser namens [WorldWideWeb](https://de.wikipedia.org/wiki/WorldWideWeb), einen Webserver und einige Webseiten zum Anschauen.

> [!NOTE]
> Menschen verwenden manchmal „das Web“ und „das Internet“ synonym, aber sie sind unterschiedliche Dinge. Das Internet ist die Infrastruktur, die den Transport von Informationen weltweit zwischen verschiedenen Servern und Clients ermöglicht, während das Web ein darauf aufgesetztes System ist. Das Web definiert Arten von Informationen (Inhalte und Code), die über das Internet transportiert werden, sowie Kommunikationsprotokolle zur Verwaltung dieses Transports.

1994 gründete TimBL das [World Wide Web Consortium](https://de.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), eine Organisation, die Vertreter vieler verschiedener Unternehmen zusammenbringt, um an der Erstellung von Webtechnologien zusammenzuarbeiten. Das W3C arbeitete an der Standardisierung und Verbesserung bestehender Webtechnologien wie HTML und HTTP sowie an der Entwicklung neuer Technologien wie [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript). Insbesondere CSS und JavaScript waren entscheidend, um dem Web Styling und Interaktivität zu verleihen und es so aussehen zu lassen wie das heutige Web.

In den darauf folgenden Jahren erlebte das Web ein enormes Wachstum, es wurden zahlreiche Browser veröffentlicht, tausende von Webservern eingerichtet und Millionen von Webseiten erstellt. Weitere Standardisierungsorganisationen tauchten auf, um verschiedene Aspekte der Webtechnologien zu standardisieren.

> [!NOTE]
> Wenn Sie sich für eine detailliertere Beschreibung der Webhistorie interessieren, suchen Sie in Ihrer bevorzugten [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) nach „Geschichte des Webs“ und sehen Sie, was Sie finden können.

## Webstandards

**Webstandards** sind die Technologien, die wir verwenden, um Websites zu erstellen. Diese Standards existieren in Form von langen technischen Dokumenten, die Spezifikationen genannt werden und genau beschreiben, wie die Technologie funktionieren soll. Diese Dokumente sind nicht sehr nützlich, um zu lernen, wie man die beschriebenen Technologien anwendet (aus diesem Grund gibt es Seiten wie MDN Web Docs). Stattdessen sollen sie von Softwareingenieuren genutzt werden, um diese Technologien zu implementieren (in der Regel in Webbrowsern).

### Standardisierungsgremien und Prozesse

Webstandards werden von Standardisierungsgremien erstellt — Institutionen, die Gruppen von Personen aus verschiedenen Technologieunternehmen einladen, sich zusammenzufinden, um sich darauf zu einigen, wie die Technologien am besten gestaltet werden, um all ihre Anwendungsfälle abzudecken.

Das W3C ist das bekannteste Gremium für Webstandards, aber es gibt noch andere. Zum Beispiel:

- [WHATWG](https://whatwg.org/) pflegt den [HTML Living Standard](https://html.spec.whatwg.org/multipage/), der genau beschreibt, wie HTML (alle HTML-Elemente, deren zugehörige APIs und andere umgebende Technologien) implementiert werden soll.
- [TC39](https://tc39.es/) und [ECMA](https://ecma-international.org/) spezifizieren und veröffentlichen den Standard für ECMAScript, auf dem modernes JavaScript basiert.
- [Khronos](https://www.khronos.org/) veröffentlicht Technologien für 3D-Grafiken, wie z. B. WebGL.

Die vollständigen Prozesse, mit denen Standards erstellt werden, können tief und komplex sein. Wenn Sie jedoch keine eigenen Webtechnologie-Features erstellen möchten, müssen Sie das meiste davon nicht verstehen. Wenn Sie zur Diskussion über neue Technologien beitragen und Feedback geben möchten, müssen Sie sich in der Regel in die entsprechende Mailingliste oder einen anderen Diskussionsmechanismus eintragen. Standarddiskussionen finden öffentlich statt, daher der Begriff [„Offene Standards“](#open_standards).

Für den Moment geben wir Ihnen ein allgemeines, oberflächliches Verständnis davon, wie Standardisierungsprozesse funktionieren:

1. Jemand erkennt die Notwendigkeit eines neuen Web-Standard-Features, das das Leben der Entwickler erleichtert. Beispielsweise gibt es vielleicht ein häufig verwendetes Muster in Web-Oberflächen, dessen Umsetzung jedoch aufwendig ist. Ein dediziertes CSS-Feature würde dies erheblich vereinfachen. Diese Person kann jeder sein — ein einzelner Entwickler oder ein Ingenieur, der für ein großes Technologieunternehmen arbeitet.
2. Die Person bespricht dieses Feature mit anderen Entwicklern, Browser-Ingenieuren usw. und beginnt, Interesse an der Implementierung des Features zu wecken. In der Regel schreiben sie ein Erläuterungsdokument, das den Bedarf an dem Feature sowie dessen Funktionsweise erklärt, und ein Code-Demo, das zeigt, wie das Feature in Aktion aussehen würde.
3. Wenn ausreichendes Interesse an dem Feature besteht, wird es formell in der relevanten Arbeitsgruppe des Standardisierungsgremiums besprochen. Beispielsweise werden CSS-Features in der Regel von der [CSS-Arbeitsgruppe](https://www.w3.org/groups/wg/css/) (WG) diskutiert (siehe auch die [Wikipedia-Seite der CSS-Arbeitsgruppe](https://en.wikipedia.org/wiki/CSS_Working_Group) für weitere Beschreibungen und Historie). Bevor eine neue Webtechnologie akzeptiert wird, muss sie gründlich bewertet werden, um sicherzustellen, dass sie gut für das Web ist — beispielsweise keine Sicherheitsprobleme verursacht, [barrierefrei und interoperabel](#barrierefrei_und_interoperabel) mit anderen Webtechnologien ist und nicht auf Patenten basiert.
4. Um das Feature zu testen, passieren mehrere Dinge. Diese Punkte können alle parallel zu Punkt 3 oder sogar davor auftreten (Browser-Anbieter implementieren manchmal proprietäre/nicht standardisierte Features und versuchen, diese anschließend zu standardisieren):

   1. Ein oder mehrere Browser-Hersteller implementieren eine experimentelle Version des neuen Features, das häufig standardmäßig deaktiviert ist, aber von Personen aktiviert werden kann, die es testen und Feedback geben möchten.
   2. Ein Mitglied der Arbeitsgruppe fügt es einer Technologiespezifikation hinzu, damit Browser-Hersteller es einheitlich implementieren können.
   3. Sie suchen außerdem Feedback von anderen Browser-Herstellern, um herauszufinden, welche Probleme sie mit dem Vorschlag haben und wie wahrscheinlich es ist, dass sie es implementieren. Diese heißen "Standards Positionen". Siehe beispielsweise [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Beteiligte Personen schreiben zudem eine umfangreiche Testsuite, um zu zeigen, dass das Feature wie beschrieben funktioniert.

5. Wenn schließlich alles in Ordnung ist, wird das Feature in allen Browsern implementiert und kann beim Erstellen von Webseiten genutzt werden.

> [!NOTE]
> Es ist durchaus möglich, dass die Personen, die das Feature vorschlagen, es in einen Browser implementieren, die Spezifikation erstellen, Tests schreiben und Feedback dafür einholen, dieselben Personen sind.

Weitere Informationen zu bestimmten Prozessen von Standardisierungsgremien finden Sie beispielsweise hier:

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG — Working Mode](https://whatwg.org/working-mode)
- [The TC39 Process](https://tc39.es/process-document/)

## Zentrale Prinzipien der Webstandards

Die zentralen Prinzipien des Web, die das Web zu einer einzigartigen und spannenden Branche machen, sind wie folgt:

- Offen für Beiträge und Nutzung und daher nicht durch Patente belastet oder von einer einzelnen privaten Organisation kontrolliert.
- Barrierefrei und interoperabel.
- Sie brechen das Web nicht.

Schauen wir uns diese Punkte etwas genauer an.

### "Offene" Standards

Einer der Schlüsselaspekte von Webstandards, den TimBL und das W3C von Anfang an vereinbarten, ist, dass das Web (und Web-Technologien) **offen** sein sollten. Das bedeutet, dass sie frei sind für Beiträge und Nutzung und nicht durch Patente/Lizenzen belastet sind. Dies ist wichtig — wenn eine Webtechnologie darauf basiert, dass patentierte/lizenzierte Technologien funktionieren, kann der Patentinhaber/Anbieter Browser-Herstellern möglicherweise hohe Summen berechnen, die Kosten würden dann an die Browser-Benutzer weitergegeben.

Darüber hinaus bedeutet die Tatsache, dass Webtechnologien offen, in Zusammenarbeit zwischen vielen verschiedenen Unternehmen geschaffen werden, dass kein einziges Unternehmen die Kontrolle über sie erhält, was eine wirklich gute Sache ist. Man würde nicht wollen, dass ein einziges Unternehmen plötzlich entscheidet, das gesamte Web hinter eine Bezahlschranke zu stellen, eine neue Version von HTML zu veröffentlichen, die jeder kaufen muss, um weiterhin Websites zu erstellen, oder noch schlimmer: dass sie das Interesse verlieren und es einfach abschalten.

Offene Standards erlauben es, dass das Web eine frei verfügbare öffentliche Ressource bleibt, an der jeder mitarbeiten und die jeder für die Erstellung von Webseiten kostenlos nutzen kann.

### Barrierefrei und interoperabel

Das Web und Webbrowser sind grundsätzlich so gestaltet, dass Webinhalte für Menschen mit Behinderungen **barrierefrei** sind. Es war ursprünglich als großer Gleichmacher gedacht, der es Menschen ermöglicht, unabhängig von ihren Umständen auf Informationen zuzugreifen. Das bedeutet zum Beispiel:

- Personen, die keine Maus oder kein Zeigegerät verwenden können, können die Tastatur zur Navigation im Web verwenden.
- Personen mit Sehbehinderung können Inhalte vergrößern oder ein Programm namens **Screenreader** nutzen, um Inhalte vorzulesen und Steuerelemente so zu beschreiben, dass sie verständlich sind.

> [!NOTE]
> Im weiteren Verlauf des Lernpfads erfahren Sie mehr über [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility).

Zusätzlich sollen Webtechnologien **interoperabel** sein. Da Webtechnologien gemäß veröffentlichter Standards implementiert werden, sollten Browser die gleiche Darstellung für dieselbe Eingabe liefern (z. B. HTML-, CSS- oder JS-Code) — mit anderen Worten: eine Website sollte in mehreren Browsern konsistent funktionieren.

### Brechen Sie nicht das Web

Ein weiterer Begriff, den Sie in Verbindung mit offenen Webstandards hören werden, ist „das Web nicht brechen“. Die Idee dahinter ist, dass jede neue Webtechnologie abwärtskompatibel sein sollte mit dem, was vorher war, sodass bestehende Webseiten weiterhin auf die gleiche Weise funktionieren wie zuvor.

Browseranbieter sollten in der Lage sein, neue Webtechnologien zu implementieren, ohne eine Änderung in der Darstellung oder Funktionalität auszulösen, die Benutzer dazu veranlassen könnte, zu denken, dass eine Webseite defekt ist und einen anderen Browser auszuprobieren.

## Überblick über moderne Webtechnologien

Es gibt eine Reihe von Technologien, die Sie lernen müssen, wenn Sie ein Front-End-Webentwickler werden möchten. In diesem Abschnitt beschreiben wir diese kurz.

### HTML, CSS und JavaScript

[HTML](/de/docs/Web/HTML), [CSS](/de/docs/Web/CSS) und [JavaScript](/de/docs/Web/JavaScript) sind die drei Haupttechnologien, die Sie zum Erstellen einer Website verwenden werden.

- HTML ist für die Struktur und Semantik (Bedeutung).
- CSS ist für Styling und Layout.
- JavaScript und APIs sind für die Steuerung dynamischen Verhaltens.

#### HTML

Die **HyperText Markup Language**, oder **HTML**, ist eine Auszeichnungssprache, die aus verschiedenen Elementen besteht, mit denen Sie Inhalte umschließen (auszeichnen) können, um ihnen Bedeutung (Semantik) und Struktur zu geben. Einfaches HTML sieht wie folgt aus:

```html
<h1>This is a top-level heading</h1>

<p>This is a paragraph of text.</p>

<img src="cat.jpg" alt="A picture of my cat" />
```

Wenn wir eine Hausbau-Analogie verwenden, wäre HTML wie die Fundamente und Wände des Hauses, die ihm Struktur geben und es zusammenhalten.

#### CSS

**Cascading Style Sheets (CSS)** ist eine regelbasierte Sprache, die für das Anwenden von Stilen auf HTML verwendet wird — zum Beispiel das Setzen von Text- und Hintergrundfarben, das Hinzufügen von Rahmen, das Animieren von Elementen oder das Layout einer Seite. Ein einfacher CSS-Code würde alle HTML-Absätze rot machen:

```css
p {
  color: red;
}
```

In der Hausanalogie ist CSS wie die Farbe, die Tapete, Teppiche und Bilder, die das Haus ansprechend aussehen lassen.

#### JavaScript (und APIs)

**JavaScript** ist die Programmiersprache, die wir verwenden, um Interaktivität auf Websites hinzuzufügen, von dynamischen Stilwechseln bis hin zum Abrufen von Updates vom Server oder komplexen 3D-Grafiken. Der folgende einfache JavaScript-Code speichert eine Referenz auf einen Absatz im Speicher und verändert den darin befindlichen Text:

```js
let pElem = document.querySelector("p");
pElem.textContent = "We changed the text!";
```

Sie werden auch den Begriff **APIs** im Zusammenhang mit JavaScript hören. API steht für **Application Programming Interface**. Allgemein gesagt ist eine API ein Code-Teil, der es ermöglicht, andere komplexere Stücke von Code oder Funktionen auf Ihrem Computer (wie Hardwaregeräte wie Ihre Webcam oder Ihr Mikrofon) auf kontrollierte Weise zu steuern.

Zum Beispiel: Ihre eigene Schnittstelle zur Kommunikation mit Ihrer Webcam und zum Erfassen eines Videostreams zu schreiben, wäre komplex, aber die JavaScript-Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia#examples) erlaubt Ihnen, dies recht einfach zu tun, da sie die ganze harte Arbeit im Hintergrund übernimmt.

Der einfache Codeschnipsel oben verwendet auch eine API. [`querySelector()`](/de/docs/Web/API/Document/querySelector) und [`textContent`](/de/docs/Web/API/Node/textContent) sind beide Teile der [Document Object Model (DOM)](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)-API, die es Ihnen erlaubt, Web-Dokumente mit JavaScript zu manipulieren.

In der Hausanalogie sind JavaScript und APIs wie der Herd, Fernseher, die Mikrowelle oder der Haartrockner — die Dinge, die Ihrem Zuhause nützliche Funktionen verleihen.

### Andere Webtechnologien

Es gibt andere Technologien, die im Web verwendet werden, zum Beispiel:

- [HTTP](/de/docs/Web/HTTP) für die Kommunikation zwischen Clients und Servern, wie zuvor erwähnt.
- [SVG](/de/docs/Web/SVG) für die Erstellung und Manipulation von Vektorgrafiken.
- [MathML](/de/docs/Web/MathML) für die Beschreibung mathematischer Formeln.

HTML, CSS und JavaScript sind jedoch mit Abstand die wichtigsten Technologien, die es zu lernen gilt, und daher konzentrieren wir uns in unserem Lernpfad hauptsächlich auf diese.

## Tools

Sobald Sie die Standard- und grundlegenden Technologien, mit denen Webseiten erstellt werden (wie HTML, CSS und JavaScript), kennengelernt haben, werden Sie bald auf verschiedene Werkzeuge stoßen, die Ihre Arbeit erleichtern oder effizienter machen können. Beispiele beinhalten:

- [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), die in modernen Browsern enthalten sind und zum Debuggen Ihres Codes verwendet werden können.
- [Testtools](/de/docs/Learn_web_development/Extensions/Testing), die verwendet werden können, um Tests durchzuführen, um zu zeigen, ob Ihr Code wie vorgesehen funktioniert.
- [Frameworks und Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries), die auf JavaScript aufbauen und es ermöglichen, bestimmte Arten von Websites schneller und effektiver zu erstellen.
- So genannte **Linters** und **Formatter**, die eine Reihe von Regeln für die Codierweise anwenden, Ihren Code untersuchen und ihn aktualisieren, um diesen Regeln zu entsprechen. Prettier, das Sie [bereits früher im Kurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) getroffen haben, ist ein Beispiel für einen Formatter.

## Serverseitige Sprachen und Frameworks

HTML, CSS und JavaScript sind Front-End- (oder Client-seitige) Sprachen und werden von dem Browser ausgeführt, um eine Website-Oberfläche zu erstellen, die Ihre Nutzer verwenden können.

Eine andere Klasse von Sprachen, Back-End- (oder Server-seitige) Sprachen genannt, wird auf dem Server ausgeführt, bevor das Ergebnis an den Browser gesendet wird, um angezeigt zu werden. Ein typischer Anwendungsfall einer Server-seitigen Sprache ist das Abrufen von Daten aus einer Datenbank, das Generieren von HTML mit diesen Daten und das Senden des HTMLs an den Browser zur Anzeige.

Beispielhafte serverseitige Frameworks und Sprachen umfassen ASP.NET (C#), Django (Python), Laravel (PHP) und Next.js (JavaScript).

Diese Technologien gelten nicht als "Webstandards" — sie werden von Organisationen außerhalb der Standardisierungsprozesse von Organisationen wie dem W3C und WHATWG entwickelt — obwohl einige von ihnen ähnlich offene Prozesse haben.

### Statisches vs. dynamisches Verhalten

Eine andere Möglichkeit, Client-seitige und Server-seitige Sprachen zu beschreiben, ist **statisch** und **dynamisch**:

- Eine einfache HTML-Datei wird auf dem Server gespeichert. Wenn sie angefordert wird, wird sie unverändert an den Client geliefert und vom Browser angezeigt. Da sie sich nicht ändert, wird sie als „statisch“ bezeichnet.
- Wenn serverseitiger Code (z. B. ein Python-Skript oder eine ASP.NET-Seite) HTML mit Daten generiert und dieses HTML an den Client zurückschickt, ändern sich die Inhalte des HTMLs je nachdem, was der serverseitige Code macht. Daher wird dies als „dynamisch“ bezeichnet.

Die Konzepte von statischem und dynamischem Code überlappen sich häufig. Server-seitige Sprachen definieren normalerweise die HTML-Strukturen innerhalb einer Template-Datei, die zum Großteil statisches HTML enthalten, mit einigen speziellen, dynamischen Abschnitten, die je nach einzufügenden Daten variieren.

## Best Practices im Web

Wir haben kurz die Technologien besprochen, die Sie verwenden werden, um Webseiten zu erstellen. Lassen Sie uns jetzt die Best Practices betrachten, die Webentwickler in der Regel anwenden, um sicherzustellen, dass ihre Webseiten von möglichst vielen Menschen genutzt werden können.

Beim Entwickeln von Webseiten kommt die größte Unsicherheit von der Tatsache, dass Sie nicht wissen, welche Kombination aus Technologien Ihre Nutzer verwenden werden, um Ihre Webseite anzusehen:

- Nutzer 1 könnte sie auf einem iPhone mit einem kleinen, schmalen Bildschirm ansehen.
- Nutzer 2 könnte sie auf einem Windows-Laptop mit angeschlossenem Breitbildmonitor ansehen.
- Nutzer 3 könnte sehbehindert sein und einen Screenreader zum Lesen und Interagieren mit der Webseite nutzen.
- Nutzer 4 könnte einen sehr alten Desktop-Computer nutzen, der keine modernen Browser ausführen kann.

Da Sie nicht genau wissen, welche Technologien Ihre Nutzer verwenden, müssen Sie defensiv entwerfen — machen Sie Ihre Webseite so flexibel wie möglich, damit alle oben genannten Nutzer sie nutzen können, auch wenn sie möglicherweise nicht alle dieselbe Erfahrung machen.

Die folgenden Konzepte repräsentieren Best Practices, an die sich Ihre Webseiten idealerweise halten sollten, und Sie werden diesen Konzepten irgendwann in Ihren Studien begegnen. Machen Sie sich darüber derzeit keine großen Sorgen. In den meisten Teilen des Kurses versuchen wir, diese implizit zu lehren, indem wir Beispiele für HTML, CSS, und JavaScript verwenden, die, wenn möglich, den Best Practices entsprechen. Später in Ihrer Lernreise werden Sie wahrscheinlich explizit in diesen Bereichen unterrichtet.

- **Progressive Enhancement**
  - : Erstellen einer minimalen Erfahrung, die die grundlegende Funktionalität für alle Nutzer bereitstellt, und eine bessere Erfahrung sowie andere Verbesserungen für Browser, die diese unterstützen, ermöglicht. Progressive Enhancement wird oft als unwichtig angesehen, da Browser heutzutage neue Features konsistenter unterstützen und Menschen tendenziell schnellere Internetverbindungen mit höheren Datenlimits haben. Ziehen Sie jedoch Beispiele wie die Reduzierung von Deko-Elementen für ein reibungsloseres mobiles Erlebnis oder einen niedrigeren Datenverbrauch in Betracht, oder die Bereitstellung einer leichteren, datensparenden Erfahrung für Nutzer, die pro Megabyte zahlen oder eingeschränkte Datenzugänge haben.
- **Cross-Browser-Kompatibilität**
  - : Sicherstellen, dass Ihre Webseite auf möglichst vielen Geräten funktioniert. Dazu gehört die Nutzung von Technologien, die von allen Browsern unterstützt werden, das Bereitstellen besserer Erlebnisse für Browser, die diese unterstützen (Progressive Enhancement), und/oder das Schreiben von Code, der in älteren Browsern auf eine einfachere, aber dennoch nutzbare Erfahrung zurückfällt (als **Graceful Degradation** bezeichnet). Außerdem sind Tests erforderlich, um zu sehen, ob etwas in bestimmten Browsern nicht funktioniert, und dann mehr Arbeit, um diese Fehler zu beheben.
- **Trennung der Ebenen**
  - : Content (HTML), Stile (CSS) und Verhalten (JavaScript) in verschiedenen Dateien statt alles zusammen an einem Ort zu schreiben. Dies hat viele Vorteile, darunter bessere Codeverwaltung und -verständlichkeit sowie ein erleichtertes Arbeiten in Teams. In der Realität ist die Trennung nicht immer ganz klar möglich. Es ist ein Ideal, das man anstreben sollte, anstatt eine absolute Vorgabe.
- **Responsive Webdesign**
  - : Funktionalität und Layouts flexibel machen, damit sie sich automatisch an verschiedene Browser anpassen können. Ein offensichtliches Beispiel wäre eine Webseite, die in einem Breitbild-Browser auf dem Desktop anders dargestellt wird als in einem kompakteren, einspaltigen Layout auf mobilen Browsern. Passen Sie jetzt die Breite Ihres Browserfensters an und sehen Sie, was mit dem Layout der Seite passiert.
- **Performance**
  - : Webseiten so schnell wie möglich laden lassen, aber auch intuitiv und einfach zu bedienen machen, damit Nutzer nicht frustriert werden und zu einer anderen Seite wechseln.
- **Internationalisierung**
  - : Webseiten für Menschen aus verschiedenen Kulturen, die andere Sprachen sprechen als Sie selbst, nutzbar machen. Dazu gehören technische Überlegungen (z. B. das Ändern Ihres Layouts, damit es auch für Rechts-nach-Links- oder Oben-nach-Unten-Sprachen geeignet ist) sowie menschliche Betrachtungen (z. B. die Verwendung einfacher, nicht-umgangssprachlicher Sprache, damit verschiedene Kulturen Ihre Texte besser verstehen können).
- **Datenschutz** und **Sicherheit**
  - : Diese beiden Konzepte sind miteinander verwandt, jedoch unterschiedlich. Datenschutz bezieht sich darauf, Menschen zu erlauben, ihre Angelegenheiten privat zu regeln, ohne sie auszuspionieren oder mehr Daten zu sammeln, als Sie wirklich benötigen. Sicherheit bezieht sich darauf, Ihre Webseite so zu konstruieren, dass böswillige Nutzer keine Informationen von Ihnen oder Ihren Nutzern stehlen können.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
