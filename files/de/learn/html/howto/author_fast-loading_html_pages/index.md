---
title: Tipps zur Erstellung von schnell ladenden HTML-Seiten
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite sorgt nicht nur für eine reaktionsschnellere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend für Seiten mit hohem Volumen sein oder für Seiten, die aufgrund ungewöhnlicher Umstände, wie etwa aktuelle Nachrichten, einen Traffic-Anstieg erleben.

Die Optimierung der Ladeleistung einer Seite ist nicht nur für Inhalte wichtig, die von Schmalband- oder Mobilgerätenutzern angesehen werden. Sie ist ebenso wichtig für Breitband-Inhalte und kann zu dramatischen Verbesserungen führen, selbst für Besucher mit den schnellsten Verbindungen.

## Tipps

### Seitengröße reduzieren

Die Seitengröße ist bei weitem der wichtigste Faktor für die Ladeleistung einer Seite.

Durch das Reduzieren der Seitengröße, indem unnötige Leerzeichen und Kommentare entfernt werden, bekannt als Minimierung, und indem Inline-Skripte und CSS in externe Dateien verschoben werden, kann die Download-Leistung verbessert werden, bei minimalem Bedarf an Änderungen der Seitenstruktur.

Werkzeuge wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quellcode entfernen. Andere Werkzeuge können JavaScript "komprimieren", indem der Quellcode neu formatiert oder der Quellcode verschleiert wird und lange Bezeichner durch kürzere Versionen ersetzt werden.

### Anzahl der Dateien minimieren

Das Reduzieren der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der [HTTP](/de/docs/Web/HTTP)-Verbindungen, die zum Herunterladen einer Seite erforderlich sind. Dadurch wird die Zeit verkürzt, die für das Senden dieser Anfragen und das Empfangen ihrer Antworten benötigt wird.

Abhängig von den Cache-Einstellungen eines Browsers kann dieser eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Headers/If-Modified-Since)-Header für jede referenzierte Datei senden und fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit, die mit dem Abfragen der letzten Änderung der referenzierten Dateien verbracht wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit jeder dieser Dateien überprüfen muss, bevor er die Seite rendert.

Wenn Sie häufig Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der erforderlichen HTTP-Abfragen reduzieren, indem Sie die Bilder zu einem Bildsprite kombinieren. Dann wenden Sie einfach dasselbe Bild jedes Mal an, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Dimensionen haben, und funktioniert nicht für jede Verwendung eines Hintergrundbildes. Dennoch können die geringeren HTTP-Anfragen und die Caching-Funktionalität eines einzelnen Bildes die Ladezeit der Seite reduzieren.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Entfernung zwischen Ihrem Server und Ihrem Besucher zu verringern. Je größer die Entfernung zwischen Ihrem Server-Ursprung und dem Besucher, desto länger dauern die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und es gibt einen Besucher aus Indien; die Ladezeit der Seite wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Nutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie den Besuchern über den Netzwerkknoten, der dem Nutzer am nächsten liegt, wodurch die [Latenz](/de/docs/Web/Performance/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [Understanding CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Domain-Abfragen reduzieren

Da jede separate Domain Zeit in einer DNS-Abfrage kostet, steigt die Ladezeit der Seite mit der Anzahl der separaten Domains, die in CSS-Link(s) und JavaScript- und Bild-src(s) erscheinen.

Dies ist vielleicht nicht immer praktikabel; dennoch sollten Sie stets darauf achten, nur die unbedingt erforderliche Anzahl verschiedener Domains in Ihren Seiten zu verwenden.

### Wiederverwendete Inhalte zwischenspeichern

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, zwischengespeichert werden, und zwar mit angemessenen Ablaufzeiten.

Achten Sie insbesondere auf den `Last-Modified`-Header. Er ermöglicht eine effiziente Seitenzwischenspeicherung; durch diesen Header werden dem User-Agent Informationen über die Datei mitgeteilt, die er laden möchte, wie zum Beispiel, wann sie zuletzt geändert wurde. Die meisten Webserver fügen den `Last-Modified`-Header automatisch bei statischen Seiten (z.B. `.html`, `.css`) hinzu, basierend auf dem in der Datei enthaltenen Datum der letzten Änderung. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Gerade bei dynamisch generierten Seiten ist es daher von Vorteil, sich ein wenig in dieses Thema einzulesen. Es kann etwas aufwendig sein, spart jedoch viele Seitenanfragen bei Seiten, die normalerweise nicht zwischengespeichert werden können.

Weitere Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Komponenten der Seite optimal anordnen

Laden Sie zuerst den Seiteninhalt herunter, zusammen mit allen CSS oder JavaScript, die für die anfängliche Anzeige erforderlich sein könnten, damit der Benutzer die schnellste scheinbare Reaktion während des Seitenladens erhält. Dieser Inhalt ist in der Regel Text und kann daher von der Textkomprimierung während der Übertragung profitieren, wodurch dem Benutzer eine noch schnellere Antwort geboten wird.

Alle dynamischen Funktionen, die erfordern, dass die Seite vollständig geladen ist, bevor sie genutzt werden können, sollten zunächst deaktiviert und erst aktiviert werden, nachdem die Seite geladen ist. Dies führt dazu, dass das JavaScript nach dem Seiteninhalt geladen wird, was das gesamte Erscheinungsbild der Seitenladezeit verbessert.

### Anzahl der Inline-Skripte reduzieren

Inline-Skripte können das Laden der Seite verlangsamen, da der Parser davon ausgehen muss, dass ein Inline-Skript die Seitenstruktur während des Parsens ändern könnte. Das Reduzieren der Verwendung von Inline-Skripten im Allgemeinen und von `document.write()` zum Ausgeben von Inhalten im Besonderen kann das Laden der Seite insgesamt verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents), anstatt `document.write()`.

### Moderne CSS und gültiges Markup verwenden

Die Verwendung moderner CSS reduziert die Menge des Markups, kann den Bedarf an (Platzhalter-) Bildern im Hinblick auf das Layout verringern und kann oft Bilder von stilisiertem Text ersetzen — die viel mehr "kosten" als der entsprechende Text und CSS.

Darüber hinaus hat die Verwendung von gültigem Markup weitere Vorteile. Erstens müssen Browser keinen Fehlerkorrekturvorgang durchführen, wenn sie das HTML parsen (abgesehen von der philosophischen Frage, ob man Formatvariationen in Benutzereingaben zulassen und dann programmatisch "korrigieren" oder normalisieren sollte, oder ob man stattdessen ein strenges, toleranzloses Eingabeformat durchsetzen sollte).

Zudem erlaubt gültiges Markup die freie Nutzung anderer Werkzeuge, die Ihre Webseiten _vorverarbeiten_ können. Beispielsweise kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen, jedoch wird es sich weigern, auf einer Seite mit ernsthaften Markup-Fehlern auszuführen.

### Inhalte aufteilen

Tabellen für Layouts sind eine veraltete Methode und sollten nicht mehr verwendet werden. Layouts, die [Floats](/de/docs/Learn/CSS/CSS_layout/Floats), [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning), [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn/CSS/CSS_layout/Grids) nutzen, sollten stattdessen verwendet werden.

Tabellen gelten nach wie vor als gültiges Markup, sollten jedoch zur Darstellung tabellarischer Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie das Verschachteln von Tabellen vermeiden.

Anstatt Tabellen tief zu verschachteln wie in:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

verwenden Sie nicht verschachtelte Tabellen oder Divs wie in:

```html
<table>
  …
</table>
<table>
  …
</table>
<table>
  …
</table>
```

Siehe auch: [CSS flexible Box-Layout](https://www.w3.org/TR/css-flexbox-1/)- und [CSS Grid-Layouter](https://www.w3.org/TR/css-grid-1/)-Spezifikationen.

### SVG-Assets minimieren und komprimieren

SVG-Dateien, die von den meisten Zeichenanwendungen erzeugt werden, enthalten oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server und wenden Sie Gzip-Komprimierung für SVG-Assets an.

### Bilder minifizieren und komprimieren

Große Bilder sorgen dafür, dass Ihre Seite mehr Zeit benötigte, um zu laden. Erwägen Sie es, Ihre Bilder zu komprimieren, bevor Sie sie Ihrer Seite hinzufügen, indem Sie die Kompressionsfunktionen von Bildbearbeitungswerkzeugen wie Photoshop nutzen oder ein spezialisiertes Tool wie [Compress Jpeg](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) verwenden.

### Größen für Bilder und Tabellen angeben

Wenn der Browser die Höhe und/oder Breite Ihrer Bilder und Tabellen sofort feststellen kann, kann er eine Webseite anzeigen, ohne den Inhalt neu zu gestalten zu müssen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout einer Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder, wann immer möglich, angegeben werden.

Tabellen sollten die CSS-Selektor-Eigenschaften-Kombination verwenden:

```css
table-layout: fixed;
```

und die Breiten von Spalten mit den [`<col>`](/de/docs/Web/HTML/Element/col) und den [`<colgroup>`](/de/docs/Web/HTML/Element/colgroup)-Elementen festlegen.

### Lazy Loading für Bilder verwenden

Standardmäßig werden Bilder **eifrig** geladen; das bedeutet, dass das Bild abgerufen und gerendert wird, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden angezeigt, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Bei der Umstellung auf Lazy Loading von Bildern weist der Browser an, Bilder erst dann zu laden, wenn sie erforderlich sind, um den {{Glossary("visual viewport")}} darzustellen.

Um ein Bild für Lazy Loading zu markieren, geben Sie seinem [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut den Wert `lazy`. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass Lazy-geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein Bild geladen ist, indem Sie überprüfen, ob der Wert seiner Boolean {{domxref("HTMLImageElement.complete", "complete")}}-Eigenschaft `true` ist.

### Wählen Sie Ihre Benutzer-Agent-Anforderungen mit Bedacht

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass vernünftige Benutzer-Agent-Anforderungen für Projekte festgelegt sind. Verlangen Sie nicht, dass Ihr Inhalt in allen Browsern pixelgenau erscheint, insbesondere nicht in älteren Browsern.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann aktuelle Versionen von Firefox, Google Chrome, Opera und Safari einschließen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind, die auf jeden Benutzeragenten anwendbar sind und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen an die Browserunterstützung.

### Nutzen von async und defer, wenn möglich

Machen Sie die JavaScript-Skripte so kompatibel, dass sie sowohl mit den [async](/de/docs/Web/HTML/Element/script#attributes)- als auch mit den [defer](/de/docs/Web/HTML/Element/script#attributes)-Attributen funktionieren, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes) wann immer möglich, besonders wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite das Rendern stoppen, während das JavaScript noch geladen wird. Andernfalls rendert der Browser nichts, was sich nach den Skriptelementen befindet, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, jedoch nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best Practices befolgen, besteht kein Bedarf, Ihren Code zu ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Seitenlayout erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammengehöriges CSS in getrennten Dateien für die Wartung belassen.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die beim Laden der Seite **erforderlich** sind, jedoch keine interaktionsbezogenen JavaScripts, die erst nach dem Laden der Seite ausgeführt werden können.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammengehöriges JavaScript in getrennten Dateien für die Wartung belassen.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbarer Seiteninhalt in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf den vollständigen Download der Seite warten zu müssen.

    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Durchführung von Interaktionen verwendet werden. Interaktionsskripte können normalerweise erst ausgeführt werden, nachdem die Seite vollständig geladen ist und alle notwendigen Objekte initialisiert wurden. Es ist nicht notwendig, diese Skripte vor dem Seiteninhalt zu laden, das verlangsamt nur das anfängliche Erscheinungsbild der Seitenladung.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammengehöriges JavaScript in getrennten Dateien für die Wartung belassen.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- Die ausgezeichneten und sehr vollständigen [Best Practices for Speeding Up Your Website](https://developer.yahoo.com/performance/rules.html) (Yahoo!)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed)
