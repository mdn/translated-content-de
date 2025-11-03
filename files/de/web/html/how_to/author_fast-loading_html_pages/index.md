---
title: Optimieren von schnell ladenden HTML-Seiten
slug: Web/HTML/How_to/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Eine optimierte Webseite sorgt nicht nur für eine reaktionsschnellere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und der Internetverbindung. Dies kann entscheidend für stark frequentierte Seiten oder Seiten mit Verkehrsspitzen aufgrund außergewöhnlicher Umstände wie aktuellen Nachrichtenereignissen sein. Dieser Artikel beschreibt, wie Sie die Ladezeiten von Seiten anhand von allgemeinem Wissen und Experimenten verbessern können.

Die Optimierung der Ladeleistung von Seiten ist nicht nur für Inhalte gedacht, die von Narrowband-Dial-Up- oder mobilen Besuchern angesehen werden, sondern ebenso wichtig für Breitbandinhalte und kann sogar bei Besuchern mit der schnellsten Verbindung zu dramatischen Verbesserungen führen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist mit Abstand der wichtigste Faktor für die Ladeleistung einer Seite.

Durch die Reduzierung des Seitengewichts durch die Eliminierung unnötiger Leerzeichen und Kommentare, allgemein bekannt als Minimierung, und durch das Verschieben von Inline-Script und CSS in externe Dateien, kann die Download-Leistung mit minimalem Bedarf für andere Änderungen in der Seitenstruktur verbessert werden.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quellcode entfernen. Andere Tools können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder durch Obfuskation und Ersetzen langer Bezeichner durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der benötigten [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite und damit die Zeit, die für das Senden dieser Anfragen und den Empfang ihrer Antworten benötigt wird.

Abhängig von den Cache-Einstellungen eines Browsers kann es für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header senden, um zu fragen, ob die Datei seit dem letzten Herunterladen geändert wurde. Zu viel Zeit mit der Abfrage der letzten Änderungszeit der referenzierten Dateien kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit jeder dieser Dateien überprüfen muss, bevor die Seite gerendert wird.

Wenn Sie in Ihrem CSS viele Hintergrundbilder verwenden, können Sie die Anzahl der benötigten HTTP-Abfragen reduzieren, indem Sie die Bilder in einem einzigen Bildsprite kombinieren. Dann wenden Sie dasselbe Bild jedes Mal an, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und wird nicht für jede Verwendung eines Hintergrundbildes funktionieren. Dennoch können weniger HTTP-Anfragen und das Caching eines einzelnen Bildes dazu beitragen, die Seitenladezeit zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu reduzieren. Je größer die Distanz zwischen Ihrem Serverursprung und dem Besucher ist, desto länger werden die Ladezeiten sein. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und ein Besucher kommt aus Indien; dann wird die Seitenladezeit für den indischen Besucher wesentlich höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Distanz zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie den Besuchern über den netznächsten Knotenpunkt, wodurch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) verringert wird.

Weiterführende Literatur:

- [Verständnis von CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie die Domainabfragen

Da jede separate Domain Zeit bei einer DNS-Abfrage kostet, wird die Seitenladezeit mit der Anzahl separater Domains, die in CSS-Link(s) und JavaScript- und Bild-src(s) erscheinen, steigen.

Dies ist nicht immer praktisch; Sie sollten jedoch immer darauf achten, nur die minimal notwendige Anzahl verschiedener Domains in Ihren Seiten zu verwenden.

### Wiederverwendbare Inhalte cachen

Stellen Sie sicher, dass alle Inhalte, die gecacht werden können, auch tatsächlich gecacht werden und mit angemessenen Ablaufzeiten.

Insbesondere sollten Sie auf den `Last-Modified`-Header achten. Er erlaubt ein effizientes Seiten-Caching; durch diesen Header wird dem Benutzeragenten mitgeteilt, wann die Datei, die er laden möchte, zuletzt geändert wurde. Die meisten Webserver fügen automatisch den `Last-Modified`-Header zu statischen Seiten (z.B. `.html`, `.css`) auf Basis des zuletzt auf dem Dateisystem gespeicherten Änderungsdatums hinzu. Bei dynamischen Seiten (zum Beispiel `.php`, `.aspx`) ist das natürlich nicht möglich und der Header wird nicht gesendet.

Insbesondere für dynamisch erzeugte Seiten lohnt sich daher eine kleine Recherche zu diesem Thema. Es kann etwas aufwendig sein, wird aber viele Seitenanfragen bei solchen Seiten einsparen, die normalerweise nicht cache-fähig wären.

Weitere Informationen:

1. [HTTP Conditional Get für RSS-Hacker](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Nicht geändert](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Komponenten der Seite optimal anordnen

Laden Sie den Seiteninhalt zuerst herunter, zusammen mit dem CSS oder JavaScript, das für die anfängliche Anzeige erforderlich ist, damit der Benutzer die schnellste sichtbare Antwort während des Seitenladens erhält. Dieser Inhalt ist typischerweise Text, der daher von einer Textkomprimierung während der Übertragung profitieren kann, wodurch eine noch schnellere Reaktion für den Benutzer erreicht wird.

Alle dynamischen Funktionen, die erfordern, dass die Seite vor der Verwendung vollständig geladen ist, sollten zunächst deaktiviert und erst nach dem Laden der Seite aktiviert werden. Dadurch wird das JavaScript nach den Seitenelementen geladen, was das Gesamterscheinungsbild der Seitenladung verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können teuer für das Laden von Seiten sein, da der Parser davon ausgehen muss, dass ein Inline-Skript die Seitenstruktur ändern könnte, während das Parsen im Gange ist. Generell die Verwendung von Inline-Skripten zu reduzieren und insbesondere die Verwendung von `document.write()` zur Ausgabe von Inhalten zu vermeiden, kann das gesamte Laden von Seiten verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) anstelle von `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Der Einsatz moderner CSS reduziert die Menge des Markups, kann das Bedürfnis nach (Platzhalter-)Bildern in Bezug auf das Layout reduzieren und sehr oft Bilder von stilisiertem Text ersetzen — was viel mehr "kostet" als der äquivalente Text und CSS.

Die Verwendung von gültigem Markup hat andere Vorteile. Erstens müssen Browser keine Fehlerkorrektur durchführen, wenn sie das HTML parsen (abgesehen von der philosophischen Frage, ob man Formatvariationen in Benutzereingaben zulässt und dann programmatisch "korrigiert" oder normalisiert, oder ob man stattdessen ein striktes, nicht tolerantes Eingabeformat durchsetzt).

Darüber hinaus ermöglicht gültiges Markup die freie Verwendung anderer Tools, die Ihre Webseiten _vorverarbeiten_ können. Beispielsweise kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es wird sich jedoch weigern, auf einer Seite mit schwerwiegenden Markup-Fehlern zu laufen.

### Strukturieren Sie Ihre Inhalte

Tabellen für Layouts sind eine alte Methode, die nicht mehr verwendet werden sollte. Stattdessen sollten Layouts, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) verwenden, eingesetzt werden.

Tabellen gelten immer noch als gültiges Markup, sollten jedoch zur Darstellung von Tabellendaten verwendet werden. Um das Browser-Rendering Ihrer Seite zu beschleunigen, sollten Sie CSS-Methoden wie das [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und das [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) anstelle von verschachtelten Tabellen verwenden.

### SVG-Assets minimieren und komprimieren

Durch die meisten Zeichenanwendungen erstellte SVGs enthalten häufig unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um gzip-Kompression für SVG-Assets anzuwenden.

### Bilder minimieren und komprimieren

Große Bilder führen dazu, dass Ihre Seite mehr Ladezeit benötigt. Ziehen Sie in Betracht, Ihre Bilder zu komprimieren, bevor Sie sie auf Ihrer Seite hinzufügen, indem Sie Komprimierungsfunktionen verwenden, die in Bildbearbeitungswerkzeuge wie Photoshop integriert sind, oder mithilfe eines spezialisierten Tools wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/).

### Größen für Bilder und Tabellen angeben

Kann der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen, kann er eine Webseite anzeigen, ohne den Inhalt neu zu formatieren. Dadurch wird nicht nur die Anzeige der Seite beschleunigt, sondern es wird verhindert, dass sich das Layout der Seite ändert, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder immer angegeben werden, wann immer möglich.

Tabellen sollten die folgende CSS-Selektor-Eigenschaft-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten der Spalten unter Verwendung der [`<col>`](/de/docs/Web/HTML/Reference/Elements/col) und der [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup) Elemente angeben.

### Verwendung von Lazy Loading für Bilder

Standardmäßig werden Bilder **gierig** geladen; das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle gierig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Um auf Lazy Loading von Bildern umzuschalten, weisen Sie dem `loading`-Attribut des Bildes den Wert `lazy` zu. Damit wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Bitte beachten Sie, dass lazyload-Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie prüfen, ob der Wert seiner Booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie Ihre Benutzeragentenanforderungen mit Bedacht

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass angemessene Benutzeragentenanforderungen für Projekte spezifiziert sind. Erfordern Sie nicht, dass Ihr Inhalt in allen Browsern pixelgenau erscheint, vor allem nicht in älteren Browsern.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Betrachtung moderner Browser basieren, die die relevanten Standards unterstützen. Dazu können die aktuellen Versionen von Firefox, Google Chrome, Opera und Safari gehören.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gängige Techniken sind, die auf jeden Benutzeragenten angewendet werden können und auf jede Webseite anwendbar sind, unabhängig von den Browserunterstützungsanforderungen.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie mit den [async](/de/docs/Web/HTML/Reference/Elements/script#attributes)- und [defer](/de/docs/Web/HTML/Reference/Elements/script#attributes)-Attributen kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite das Rendern stoppen, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, was sich hinter den Skriptelementen befindet, die nicht diese Attribute haben.

Beachten Sie: Auch wenn diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits allen JavaScript-Best-Practices folgen, besteht kein Bedarf, Ihren Code zu ändern.

## Beispiel für die Seitenstruktur

- `{{htmlelement('html')}}`
  - `{{htmlelement('head')}}`
    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes CSS in separaten Dateien zur Wartung belassen.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien, die während des Ladevorgangs der Seite **erforderlich** sind, aber keine interaktionsbezogenen JavaScripts, die erst nach dem Laden der Seite ausgeführt werden können.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien zur Wartung belassen.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbarer Seiteninhalt in kleinen Teilen (`{{htmlelement('header')}}`/`{{htmlelement('main')}}`/`{{htmlelement('table')}}`), die angezeigt werden können, ohne darauf warten zu müssen, dass die gesamte Seite heruntergeladen wird.
    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Interaktivität verwendet werden. Interaktionsskripte können in der Regel erst ausgeführt werden, nachdem die Seite vollständig geladen ist und alle notwendigen Objekte initialisiert wurden. Es gibt keinen Grund, diese Skripte vor dem Seiteninhalt zu laden. Dies verlangsamt nur das anfängliche Erscheinungsbild des Seitenladevorgangs.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien zur Wartung belassen.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Lernen Sie Performance](https://web.dev/learn/performance) über web.dev (2023)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
