---
title: Schnelle HTML-Seiten erstellen
slug: Web/HTML/How_to/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Eine optimierte Webseite bietet nicht nur eine reaktionsschnellere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend für stark frequentierte Seiten sein oder für Seiten, die aufgrund ungewöhnlicher Umstände, wie z.B. bei Eilmeldungen, einen plötzlichen Anstieg des Traffics erfahren.
Dieser Artikel beschreibt, wie Sie die Ladezeiten von Seiten basierend auf allgemeinem Wissen und Experimenten verbessern können.

Die Optimierung der Seitenladeleistung ist nicht nur für Inhalte, die von Schmalband-Dial-up- oder mobilen Gerätbesuchern betrachtet werden, wichtig. Sie ist genauso wichtig für Breitbandinhalte und kann selbst für Ihre Besucher mit den schnellsten Verbindungen zu dramatischen Verbesserungen führen.

## Tipps

### Seitengewicht reduzieren

Das Seitengewicht ist bei weitem der wichtigste Faktor für die Seitenladeleistung.

Die Reduzierung des Seitengewichts durch das Entfernen von unnötigen Leerzeichen und Kommentaren, allgemein bekannt als Minimierung, und durch das Verschieben von Inline-Skript und CSS in externe Dateien kann die Download-Leistung verbessern, ohne dass andere Änderungen an der Seitenstruktur erforderlich sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können automatisch vorangestellte Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quellcode entfernen. Andere Tools können JavaScript „komprimieren“, indem sie den Quellcode neu formatieren oder den Quellcode verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Anzahl der Dateien minimieren

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der [HTTP](/de/docs/Web/HTTP)-Verbindungen, die erforderlich sind, um eine Seite herunterzuladen, und reduziert dadurch die Zeit für das Senden dieser Anfragen und den Erhalt ihrer Antworten.

Je nach Cache-Einstellungen eines Browsers kann dieser eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header für jede referenzierte Datei senden, um zu fragen, ob die Datei seit dem letzten Herunterladen geändert wurde. Zu viel Zeit, die mit der Abfrage der letzten Änderungszeit der referenzierten Dateien verbracht wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeiten jeder dieser Dateien prüfen muss, bevor er die Seite rendert.

Wenn Sie häufig Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der erforderlichen HTTP-Lookups reduzieren, indem Sie die Bilder zu einem zusammengefügten Bild (Sprite) kombinieren. Dann verwenden Sie dasselbe Bild jedes Mal, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen mit begrenzten Dimensionen und eignet sich nicht für jede Verwendung eines Hintergrundbildes. Weniger HTTP-Anfragen und das Caching eines einzelnen Bildes können jedoch dazu beitragen, die Seitenladezeit zu verkürzen.

### Ein Content Delivery Network (CDN) verwenden

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu reduzieren. Da die Entfernung zwischen dem Ursprungsserver und dem Besucher zunimmt, erhöhen sich die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und ein Besucher aus Indien greift darauf zu; die Seitenladezeit wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Nutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie den Besuchern über den dem Nutzer am nächsten gelegenen Netzwerkknoten, wodurch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [Understanding CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Domain-Lookups reduzieren

Da jede separate Domain Zeit für einen DNS-Lookup benötigt, erhöht sich die Seitenladezeit mit der Anzahl der unterschiedlichen Domains, die in CSS-Links und JavaScript- und Image-Srces erscheinen.

Dies ist möglicherweise nicht immer praktisch; Sie sollten jedoch darauf achten, nur die unbedingt erforderliche Anzahl unterschiedlicher Domains in Ihren Seiten zu verwenden.

### Wiederverwendete Inhalte cachen

Stellen Sie sicher, dass alle Inhalte, die gecacht werden können, auch gecacht werden und mit geeigneten Ablaufzeiten versehen sind.

Besonders beachten Sie den `Last-Modified`-Header. Er ermöglicht ein effizientes Seiten-Caching, indem Informationen zum gewünschten Laden an den Benutzeragenten übermittelt werden, etwa wann die Datei zuletzt geändert wurde. Die meisten Webserver fügen den `Last-Modified`-Header automatisch zu statischen Seiten (z.B. `.html`, `.css`) hinzu, basierend auf dem im Dateisystem gespeicherten Änderungsdatum. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Insbesondere für Seiten, die dynamisch generiert werden, ist eine kleine Recherche zu diesem Thema vorteilhaft. Es kann etwas aufwendig sein, aber es spart viele Seitenanfragen bei Seiten, die normalerweise nicht cachefähig wären.

Weitere Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Komponenten der Seite optimal anordnen

Laden Sie die Seiteninhalte zuerst herunter, zusammen mit allen CSS- oder JavaScript-Dateien, die für die erste Anzeige erforderlich sind, damit der Nutzer die schnellste scheinbare Reaktion während des Seitenladens erhält. Diese Inhalte sind typischerweise Texte und können daher von einer Textkompression während der Übertragung profitieren, was eine noch schnellere Reaktion für den Nutzer bedeutet.

Alle dynamischen Funktionen, die erfordern, dass die Seite vollständig geladen ist, bevor sie verwendet werden können, sollten zunächst deaktiviert werden und erst nach dem Laden der Seite aktiviert werden. Dies führt dazu, dass das JavaScript nach den Seiteninhalten geladen wird, was das Gesamtbild des Seitenladens verbessert.

### Anzahl der Inline-Skripte reduzieren

Inline-Skripte können die Seitenladezeit teuer machen, da der Parser annehmen muss, dass ein Inline-Skript die Seitenstruktur während des Parsens ändern könnte. Die Reduzierung der Verwendung von Inline-Skripten im Allgemeinen und der Verwendung von `document.write()` zum Ausgeben von Inhalten im Besonderen kann die Gesamtseitenladezeit verbessern. Verwenden Sie [DOM-APIs, um Seiteninhalte zu manipulieren](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstatt `document.write()`.

### Moderne CSS und gültiges Markup verwenden

Die Verwendung von modernem CSS reduziert die Menge des Markups, kann den Bedarf an (Platzhalter-) Bildern in Bezug auf das Layout reduzieren und kann sehr oft Bilder von stilisiertem Text ersetzen — die „mehr kosten“ als der entsprechende Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser keine Fehlerkorrektur beim Parsen des HTML durchführen (dies abgesehen von der philosophischen Frage, ob Formatvariationen bei Benutzereingaben zugelassen und dann programmgesteuert „korrigiert“ oder normalisiert werden sollen; oder ob stattdessen ein striktes, intolerantes Eingabeformat erzwungen werden soll).

Darüber hinaus ermöglicht gültiges Markup die freie Verwendung anderer Tools, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es verweigert jedoch das Ausführen auf einer Seite mit schwerwiegenden Markup-Fehlern.

### Teilen Sie Ihre Inhalte

Tabellen für Layouts sind eine althergebrachte Methode, die nicht mehr verwendet werden sollte. Layouts, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) verwenden, sollten stattdessen genutzt werden.

Tabellen werden noch als gültiges Markup angesehen, sollten jedoch zum Anzeigen von tabellarischen Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie CSS-Methoden wie [flexible Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) anstelle der Verschachtelung von Tabellen verwenden.

### SVG-Assets minimieren und komprimieren

SVG, das von den meisten Zeichenanwendungen erstellt wird, enthält oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server so, dass sie gzip-Kompression für SVG-Assets anwenden.

### Bilder minimieren und komprimieren

Große Bilder führen dazu, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder vor dem Hinzufügen zu Ihrer Seite zu komprimieren, indem Sie Kompressionstools verwenden, die in Bildbearbeitungswerkzeuge wie Photoshop integriert sind, oder ein spezialisiertes Tool wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/).

### Größen für Bilder und Tabellen angeben

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, wird er eine Webseite anzeigen können, ohne den Inhalt neu zu verflüssigen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch unangenehme Änderungen im Layout der Seite, wenn die Seite vollständig geladen ist. Aus diesem Grund sollten `height` und `width` für Bilder angegeben werden, wann immer möglich.

Tabellen sollten die CSS-Selektor-Eigenschafts-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breite der Spalten mit den [`<col>`](/de/docs/Web/HTML/Reference/Elements/col) und den [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup)-Elementen spezifizieren.

### Lazy Loading für Bilder verwenden

Standardmäßig werden Bilder **eifrig** geladen; das bedeutet, dass das Bild so schnell wie möglich abgerufen und gerendert wird, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Wenn Sie das Lazy Loading von Bildern aktivieren, teilt das dem Browser mit, dass er mit dem Laden von Bildern warten soll, bis sie benötigt werden, um den {{Glossary("visual_viewport", "visuellen Viewport")}} zu zeichnen.

Um ein Bild für Lazy Loading zu markieren, geben Sie sein [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut mit dem Wert `lazy` an. Damit wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass Lazy-Load-Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie prüfen, ob der Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie Ihre Anforderungen an den User-Agent mit Bedacht

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass vernünftige Anforderungen an den User-Agent für Projekte festgelegt werden. Verlangen Sie nicht, dass Ihre Inhalte in allen Browsern pixelgenau angezeigt werden, insbesondere nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dazu können aktuelle Versionen von Firefox, Google Chrome, Opera und Safari gehören.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps weitsichtige Techniken sind, die auf jeden User-Agent angewendet werden können und auf jede Webseite anwendbar sind, unabhängig von den Anforderungen an die Browserunterstützung.

### Verwenden Sie async und defer, wenn möglich

Machen Sie die JavaScript-Skripte so, dass sie mit den [async](/de/docs/Web/HTML/Reference/Elements/script#attributes)- und [defer](/de/docs/Web/HTML/Reference/Elements/script#attributes)-Attributen kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Reference/Elements/script#attributes), wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite mit dem Rendern aufhören, während JavaScript noch geladen wird. Andernfalls rendert der Browser nichts, was nach den Skriptelementen steht, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite viel helfen, sollten Sie sie verwenden, jedoch nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle bewährten Methoden für JavaScript befolgen, besteht keine Notwendigkeit, Ihren Code zu ändern.

## Beispielhafter Seitenaufbau

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Aussehen der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes CSS in separaten Dateien für die Wartung belassen.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite erforderlich sind, jedoch kein interaktionsbezogenes JavaScript, das erst nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien für die Wartung belassen.

  - `{{htmlelement('body')}}`

    Für den Nutzer sichtbare Seiteninhalte in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das vollständige Herunterladen der Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die für Interaktivität verwendet werden. Interaktionsskripte können typischerweise erst ausgeführt werden, nachdem die Seite vollständig geladen und alle notwendigen Objekte initialisiert wurden. Es besteht keine Notwendigkeit, diese Skripte vor den Seiteninhalten zu laden. Das würde nur das anfängliche Erscheinen der Seitenladezeit verlangsamen.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien für die Wartung belassen.

## Siehe auch

- Buch: ["Speed Up Your Site" by Andy King](https://www.websiteoptimization.com/)
- [Leistungslernen](https://web.dev/learn/performance) über web.dev (2023)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
