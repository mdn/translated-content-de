---
title: Autorenschnelle HTML-Seiten
slug: Web/HTML/How_to/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur Ihren Besuchern eine reaktionsschnellere Seite, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend sein für Websites mit hohem Volumen oder solche, die aufgrund ungewöhnlicher Umstände wie aktuellen Nachrichtenereignissen plötzlich einen Anstieg des Datenverkehrs verzeichnen.

Die Optimierung der Ladeleistung von Seiten ist nicht nur für Inhalte wichtig, die von Narrowband-Modems oder mobilen Geräten angesehen werden. Sie ist ebenso wichtig für Breitbandinhalte und kann zu dramatischen Verbesserungen führen, selbst für Besucher mit den schnellsten Verbindungen.

## Tipps

### Seitengröße reduzieren

Die Seitengröße ist bei Weitem der wichtigste Faktor für die Ladeleistung einer Seite.

Die Reduzierung der Seitengröße durch das Eliminieren von unnötigem Leerraum und Kommentaren, allgemein bekannt als Minimierung, und durch das Verschieben von Inline-Scripts und CSS in externe Dateien kann die Download-Leistung verbessern, ohne dass wesentliche Änderungen an der Seitenstruktur erforderlich sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quellcode automatisch entfernen. Andere Tools können JavaScript „komprimieren“, indem sie den Quellcode neu formatieren oder den Quellcode verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Anzahl der Dateien minimieren

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der [HTTP](/de/docs/Web/HTTP)-Verbindungen, die zum Herunterladen einer Seite erforderlich sind, und damit die Zeit, die zum Senden dieser Anfragen und zum Empfangen der Antworten benötigt wird.

Abhängig von den Cache-Einstellungen eines Browsers kann es für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header senden und fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit, die mit der Abfrage der letzten Änderungszeit der referenzierten Dateien verbracht wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit jeder dieser Dateien überprüfen muss, bevor die Seite gerendert wird.

Wenn Sie Hintergrundbilder häufig in Ihrem CSS verwenden, können Sie die Anzahl der erforderlichen HTTP-Abfragen reduzieren, indem Sie die Bilder zu einem einzigen kombinieren, bekannt als ein Image-Sprite. Dann wenden Sie dasselbe Bild jedes Mal an, wenn Sie es als Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben werden, und eignet sich nicht für jede Verwendung eines Hintergrundbilds. Allerdings können weniger HTTP-Anfragen und eine einzelne Bildzwischenspeicherung helfen, die Ladezeit der Seite zu reduzieren.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu reduzieren. Je größer die Distanz zwischen Ihrem Serverursprung und dem Besucher ist, desto länger sind die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den USA und hat einen Besucher aus Indien; die Ladezeit der Seite wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie Besuchern über den dem Benutzer am nächsten gelegenen Netzwerkknoten, wodurch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [Verständnis von CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Domain-Lookups reduzieren

Da jede separate Domain Zeit für eine DNS-Abfrage kostet, wächst die Ladezeit der Seite mit der Anzahl der verschiedenen Domains in CSS-Links und JavaScript- und Bild-Quellen.

Dies ist möglicherweise nicht immer praktisch; dennoch sollten Sie stets darauf achten, nur die notwendige Mindestanzahl an verschiedenen Domains in Ihren Seiten zu verwenden.

### Wiederverwendeten Inhalt cachen

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden und mit geeigneten Ablaufzeiten versehen sind.

Besonders sollten Sie auf den `Last-Modified`-Header achten. Er ermöglicht ein effizientes Seiten-Caching; durch diesen Header werden dem Benutzeragenten Informationen über die Datei, die er laden möchte, wie beispielsweise der Zeitpunkt der letzten Änderung, übermittelt. Die meisten Webserver hängen automatisch den `Last-Modified`-Header an statische Seiten (z. B. `.html`, `.css`) an, basierend auf dem im Dateisystem gespeicherten Änderungsdatum. Bei dynamischen Seiten (z. B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Daher ist es insbesondere bei Seiten, die dynamisch generiert werden, vorteilhaft, sich in dieses Thema einzulesen. Dies kann zwar teilweise etwas anspruchsvoll sein, wird aber eine Menge an Seitenanfragen auf normalerweise nicht zwischenzuspeichernde Seiten sparen.

Weitere Informationen:

1. [HTTP Conditional Get für RSS-Hacker](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Die Komponenten der Seite optimal anordnen

Laden Sie die Seiteninhalte zuerst herunter sowie alle CSS- oder JavaScript-Dateien, die für die erste Anzeige erforderlich sein könnten, sodass der Benutzer während des Seitenladens die schnellstmögliche Reaktion erhält. Diese Inhalte sind typischerweise Text und können daher von Textkomprimierung beim Transport profitieren, was dem Benutzer eine noch schnellere Reaktion bietet.

Jegliche dynamischen Funktionen, die ein vollständiges Laden der Seite erfordern, bevor sie genutzt werden können, sollten initial deaktiviert werden und erst nach dem Laden der Seite aktiviert werden. Damit wird das JavaScript nach den Seiteninhalten geladen, was die Gesamterscheinung des Seitenladens verbessert.

### Anzahl der Inline-Scripts reduzieren

Inline-Scripts können für das Seitenladen teuer sein, da der Parser annehmen muss, dass ein Inline-Script die Seitenstruktur während des Parsens ändern könnte. Die allgemeine Reduzierung der Verwendung von Inline-Scripts und speziell von `document.write()`, um Inhalte auszugeben, kann das allgemeine Seitenladen verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstatt `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Die Verwendung von modernem CSS reduziert die Menge des Markups, kann die Notwendigkeit für (Spacer-)Bilder im Hinblick auf das Layout verringern und kann sehr oft Bilder von stilisiertem Text ersetzen — die weitaus „teurer“ sind als der äquivalente Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser keine Fehlerkorrekturen vornehmen, wenn sie das HTML parsen (dies ist abgesehen von der philosophischen Frage, ob Formatabweichungen in Benutzereingaben erlaubt und dann programmgesteuert „korrigiert“ oder normalisiert werden sollten, oder ob stattdessen ein striktes, kein-Toleranz-Eingabeformat durchgesetzt werden sollte).

Darüber hinaus ermöglicht gültiges Markup die freie Nutzung anderer Tools, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale Endtags entfernen; es wird jedoch die Verarbeitung einer Seite mit schwerwiegenden Markup-Fehlern verweigern.

### Ihren Inhalt stückeln

Tabellen für Layouts sind eine veraltete Methode und sollten nicht mehr verwendet werden. Stattdessen sollten Layouts verwendet werden, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) nutzen.

Tabellen werden immer noch als gültiges Markup betrachtet, sollten jedoch zur Darstellung tabellarischer Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie es vermeiden, Ihre Tabellen zu verschachteln.

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

verwenden Sie nicht verschachtelte Tabellen oder Divs wie in

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

Siehe auch: [CSS flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### SVG-Daten minimieren und komprimieren

Von den meisten Zeichenanwendungen erzeugte SVG-Daten enthalten häufig unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um Gzip-Komprimierung für SVG-Daten anzuwenden.

### Ihre Bilder minimieren und komprimieren

Große Bilder verursachen, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder zu komprimieren, bevor Sie sie auf Ihre Seite hinzufügen, entweder durch Komprimierungsfunktionen, die in Bildbearbeitungswerkzeugen wie Photoshop eingebaut sind, oder durch die Verwendung eines spezialisierten Tools wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/).

### Größen für Bilder und Tabellen angeben

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen ermitteln kann, wird er in der Lage sein, eine Webseite anzuzeigen, ohne den Inhalt neu zu fließen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch lästige Änderungen im Layout einer Seite, wenn die Seite vollständig geladen ist. Aus diesem Grund sollten `height` und `width` für Bilder angegeben werden, wann immer dies möglich ist.

Tabellen sollten die CSS-Selektor-Eigenschaften-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten die Spaltenbreiten mit den Elementen [`<col>`](/de/docs/Web/HTML/Reference/Elements/col) und [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup) spezifizieren.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eifrig** geladen; das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Durch die Umstellung auf Lazy Loading von Bildern wird dem Browser mitgeteilt, dass er mit dem Laden von Bildern warten soll, bis sie benötigt werden, um den {{Glossary("visual_viewport", "visuellen Viewport")}} zu zeichnen.

Um ein Bild für Lazy Loading zu kennzeichnen, geben Sie sein [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut mit einem Wert von `lazy` an. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass Lazy Loaded-Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie prüfen, ob der Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie Ihre Benutzeragenten-Anforderungen weise

Um die größten Verbesserungen im Seitenentwurf zu erzielen, stellen Sie sicher, dass vernünftige Benutzeragenten-Anforderungen für Projekte festgelegt sind. Erfordern Sie nicht, dass Ihre Inhalte in allen Browsern absolut gleich aussehen, insbesondere nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Betrachtung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann aktuelle Versionen von Firefox, Google Chrome, Opera und Safari umfassen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gängige Vernunfttechniken sind, die auf jeden Benutzeragenten anwendbar sind und auf jede Webseite angewendet werden können, unabhängig von den Browser-Support-Anforderungen.

### Verwenden Sie async und defer, wenn möglich

Stellen Sie die JavaScript-Skripte so her, dass sie mit den Attributen [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) und [defer](/de/docs/Web/HTML/Reference/Elements/script#attributes) kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Script-Elemente haben.

Damit kann die Seite aufhören zu rendern, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, was nach den Script-Elementen kommt, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, nicht jedoch davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best-Practices befolgen, müssen Sie Ihren Code nicht ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Aussehen der Seite benötigt werden. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängende CSS in separaten Dateien für die Wartung behalten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die beim Laden der Seite **erforderlich** sind, jedoch nicht interaktionsbezogenes JavaScript, das erst nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängende JavaScript in separaten Dateien für die Wartung behalten.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbare Seiteninhalte in kleinen Blöcken (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}`/ `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das Herunterladen der gesamten Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Durchführung von Interaktivitäten verwendet werden sollen. Interaktions-Skripte können typischerweise nur ausgeführt werden, nachdem die Seite vollständig geladen ist und alle notwendigen Objekte initialisiert wurden. Es gibt keine Notwendigkeit, diese Skripte vor den Seiteninhalten zu laden. Das verlangsamt nur das anfängliche Erscheinen des Seitenladens.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängende JavaScript in separaten Dateien für die Wartung behalten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Lernen Sie Performance](https://web.dev/learn/performance) über web.dev (2023)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
