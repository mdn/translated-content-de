---
title: Tipps zur Erstellung von schnell ladenden HTML-Seiten
slug: Learn_web_development/Howto/Solve_HTML_problems/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Diese Tipps basieren auf allgemeinen Kenntnissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine reaktionsfreudigere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend für Websites mit hohem Volumen oder Websites mit einem plötzlichen Anstieg des Verkehrsaufkommens aufgrund ungewöhnlicher Umstände, wie z. B. Eilmeldungen, sein.

Die Optimierung der Seitenladeleistung ist nicht nur für Inhalte wichtig, die von Schmalband- oder mobilen Besuchern angesehen werden. Sie ist ebenso wichtig für Breitband-Inhalte und kann zu dramatischen Verbesserungen führen, selbst für Ihre Besucher mit den schnellsten Verbindungen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist mit Abstand der wichtigste Faktor für die Ladeleistung der Seite.

Durch die Reduzierung des Seitengewichts durch Eliminierung unnötiger Leerzeichen und Kommentare, allgemein als Minimierung bekannt, und durch Auslagern von Inline-Skripten und CSS in externe Dateien, kann die Download-Leistung verbessert werden, ohne dass große Änderungen an der Seitenstruktur erforderlich sind.

Werkzeuge wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus einer gültigen HTML-Quelle entfernen. Andere Werkzeuge können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder den Quelltext verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der benötigten [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite, wodurch die Zeit für das Senden dieser Anfragen und das Empfangen der Antworten reduziert wird.

Je nach Cache-Einstellungen eines Browsers kann dieser für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header senden und fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit, die für die Abfrage der letzten Änderungszeit der referenzierten Dateien aufgewendet wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit für jede dieser Dateien prüfen muss, bevor er die Seite rendert.

Wenn Sie viele Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der benötigten HTTP-Abfragen reduzieren, indem Sie die Bilder zu einem zusammenfassen, bekannt als ein Bildsprite. Dann wenden Sie einfach jedes Mal dasselbe Bild an, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und wird nicht für jede Verwendung eines Hintergrundbildes funktionieren. Allerdings können die reduzierte Anzahl der HTTP-Anfragen und das Cachen eines einzelnen Bildes dazu beitragen, die Ladezeit der Seite zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu verringern. Je größer der Abstand zwischen Ihrem Ursprungsserver und dem Besucher, desto länger werden die Ladezeiten sein. Angenommen, Ihr Webserver befindet sich in den Vereinigten Staaten und es gibt einen Besucher aus Indien; die Ladezeit der Seite wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie an Besucher über den Netzwerk-Knoten, der dem Benutzer am nächsten liegt, sodass die [Latenzzeit](/de/docs/Web/Performance/Guides/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [CDNs verstehen](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domain-Lookups

Da jede separate Domain Zeit für einen DNS-Lookup kostet, verlängert sich die Ladezeit der Seite mit der Anzahl der unterschiedlichen Domains, die in CSS-Link(s) und JavaScript- und Bild-src(s) erscheinen.

Dies ist nicht immer praktikabel; dennoch sollten Sie immer darauf achten, nur die unbedingt notwendige Anzahl an unterschiedlichen Domains in Ihren Seiten zu verwenden.

### Cache von wiederverwendeten Inhalten

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch gecacht werden und mit entsprechenden Ablaufzeiten versehen sind.

Besondere Aufmerksamkeit erfordert der `Last-Modified`-Header. Er ermöglicht ein effizientes Seitencaching; mithilfe dieses Headers werden dem Benutzeragenten Informationen über die Datei, die geladen werden soll, mitgeteilt, z. B. wann sie zuletzt geändert wurde. Die meisten Webserver fügen den `Last-Modified`-Header automatisch an statische Seiten (z. B. `.html`, `.css`) an, basierend auf dem letzten Änderungsdatum im Dateisystem. Bei dynamischen Seiten (z. B. `.php`, `.aspx`) kann dies natürlich nicht geschehen, und der Header wird nicht gesendet.

Für dynamisch generierte Seiten ist daher ein wenig Recherche zu diesem Thema vorteilhaft. Es kann etwas aufwendig sein, aber es erspart viele Seitenanfragen, die normalerweise nicht cachefähig wären.

Weitere Informationen:

1. [HTTP Conditional Get für RSS Hacker](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Optimale Reihenfolge der Komponenten der Seite

Laden Sie die Seiteninhalte zuerst herunter, zusammen mit allen CSS oder JavaScript, die für die anfängliche Anzeige benötigt werden, damit der Benutzer die schnellste wahrnehmbare Antwort während des Ladens der Seite erhält. Diese Inhalte sind typischerweise Texte und können daher von einer Textkomprimierung während der Übertragung profitieren, was dem Benutzer eine noch schnellere Antwort liefert.

Alle dynamischen Funktionen, die das komplette Laden der Seite erfordern, bevor sie verwendet werden können, sollten zunächst deaktiviert und erst nach dem Laden der Seite aktiviert werden. Dadurch wird das JavaScript nach den Seiteninhalten geladen, was das Gesamtbild der Seitenladezeit verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können das Laden der Seite erschweren, da der Parser davon ausgehen muss, dass ein Inline-Skript die Seitenstruktur während des Parsens verändern könnte. Die allgemeine Reduzierung der Verwendung von Inline-Skripten und insbesondere die Reduzierung der Verwendung von `document.write()`, um Inhalte auszugeben, kann das Laden der Seite insgesamt verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) anstelle von `document.write()`.

### Verwenden Sie moderne CSS und valides Markup

Die Verwendung moderner CSS reduziert die Menge an Markup, kann den Bedarf an (Abstandshalter-) Bildern im Layout reduzieren und kann häufig Bilder von stilisiertem Text ersetzen — die viel mehr "kosten" als der entsprechende Text und CSS.

Die Verwendung von validem Markup bietet weitere Vorteile. Zunächst müssen Browser keine Fehlerkorrekturen beim Parsen der HTML durchführen (abgesehen von der philosophischen Frage, ob Formatabweichungen in Benutzer-Eingaben zugelassen und dann programmgesteuert "korrigiert" oder normalisiert werden sollen, oder ob stattdessen ein strenges, nicht tolerantes Eingabeformat durchgesetzt werden soll).

Darüber hinaus ermöglicht valides Markup die freie Nutzung anderer Werkzeuge, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es läuft jedoch nicht auf einer Seite mit schwerwiegenden Markup-Fehlern.

### Teilen Sie Ihren Inhalt auf

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Stattdessen sollten Layouts verwendet werden, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) nutzen.

Tabellen werden nach wie vor als valides Markup angesehen, sollten aber zur Anzeige von Tabellendaten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie das Verschachteln Ihrer Tabellen vermeiden.

Verwenden Sie anstelle tief verschachtelter Tabellen, wie in:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

nicht verschachtelte Tabellen oder Divs wie in

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

Siehe auch: [CSS flexible Box-Layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS Grid-Layout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### SVG-Dateien minifizieren und komprimieren

SVG, das von den meisten Zeichenanwendungen erzeugt wird, enthält oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um Gzip-Komprimierung für SVG-Dateien anzuwenden.

### Ihre Bilder minifizieren und komprimieren

Große Bilder führen dazu, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder vor dem Hinzufügen zur Seite zu komprimieren, indem Sie die in Bildbearbeitungsprogrammen wie Photoshop integrierten Komprimierungsfunktionen oder ein spezielles Tool wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) verwenden.

### Größen für Bilder und Tabellen angeben

Wenn der Browser die Höhe und/oder Breite Ihrer Bilder und Tabellen sofort bestimmen kann, kann er eine Webseite anzeigen, ohne den Inhalt umzufließen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout einer Seite, wenn die Seite vollständig geladen ist. Aus diesem Grund sollten `height` und `width` für Bilder, wann immer möglich, angegeben werden.

Tabellen sollten die CSS-Selektor-Attributkombination verwenden:

```css
table-layout: fixed;
```

und die Breite der Spalten sollten mithilfe der [`<col>`](/de/docs/Web/HTML/Reference/Elements/col) und der [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup)-Elemente spezifiziert werden.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eagerly** geladen, das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy Loading von Bildern sagt dem Browser, dass er das Laden von Bildern zurückstellen soll, bis sie benötigt werden, um den {{Glossary("visual_viewport", "visuellen Viewport")}} zu zeichnen.

Um ein Bild für das Lazy Loading zu markieren, geben Sie sein [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut mit einem Wert von `lazy` an. Damit wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass bei Lazy Loading Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können prüfen, ob ein bestimmtes Bild geladen ist, indem Sie den Wert seiner Boolean-Eigenschaft [`complete`](/de/docs/Web/API/HTMLImageElement/complete) auf `true` überprüfen.

### Wählen Sie Ihre User-Agent-Anforderungen weise

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass angemessene User-Agent-Anforderungen für Projekte festgelegt werden. Verlangen Sie nicht, dass Ihre Inhalte in allen Browsern pixelgenau angezeigt werden, insbesondere nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dazu können aktuelle Versionen von Firefox, Google Chrome, Opera und Safari zählen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps allgemeine Techniken sind, die für jeden Benutzeragenten gelten und auf jede Webseite angewendet werden können, unabhängig von den Browser-Support-Anforderungen.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie mit den Attributen [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) und [defer](/de/docs/Web/HTML/Reference/Elements/script#attributes) kompatibel sind und verwenden Sie [async](/de/docs/Web/HTML/Reference/Elements/script#attributes), wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite das Rendern stoppen, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendert, das nach den Skriptelementen kommt, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite viel helfen, sollten Sie sie verwenden, jedoch nicht davon ausgehen, dass sie in allen Browsern funktionieren werden. Wenn Sie bereits alle JavaScript-Best Practices befolgen, müssen Sie Ihren Code nicht ändern.

## Beispielhafte Seitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Aussehen der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes CSS in separaten Dateien für die Wartung halten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während des Ladens der Seite benötigt** werden, aber nicht Interaktions-bezogene JavaScript, das erst nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes JavaScript in separaten Dateien für die Wartung halten.

  - `{{htmlelement('body')}}`

    Sichtbare Benutzerinhalte in kleinen Abschnitten (`{{htmlelement('header')}}`/`{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das vollständige Herunterladen der Seite warten zu müssen.

    - `{{htmlelement('script')}}`

      Alle Skripte, die für interaktive Funktionen verwendet werden. Interaktionsskripte können typischerweise erst ausgeführt werden, nachdem die Seite vollständig geladen ist und alle notwendigen Objekte initialisiert wurden. Es besteht keine Notwendigkeit, diese Skripte vor den Seiteninhalten zu laden. Das verlangsamt nur das anfängliche Erscheinungsbild des Seiten-Ladevorgangs.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes JavaScript in separaten Dateien für die Wartung halten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Leistung lernen](https://web.dev/learn/performance) über web.dev (2023)
- Werkzeuge zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
