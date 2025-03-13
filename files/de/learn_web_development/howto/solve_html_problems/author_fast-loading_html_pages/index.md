---
title: Tipps zum Erstellen von schnell ladenden HTML-Seiten
slug: Learn_web_development/Howto/Solve_HTML_problems/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite sorgt nicht nur für eine reaktionsfähigere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend sein für Seiten mit hohem Volumen oder Seiten, die aufgrund von außergewöhnlichen Umständen wie aktuellen Nachrichten eine plötzliche Zunahme des Traffics verzeichnen.

Die Optimierung der Seitenladeleistung ist nicht nur für Inhalte wichtig, die von Narrowband-Dial-up- oder Mobilgerät-Besuchern betrachtet werden. Sie ist ebenso wichtig für Breitbandinhalte und kann selbst für Ihre Besucher mit den schnellsten Verbindungen dramatische Verbesserungen bringen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist bei weitem der wichtigste Faktor für die Seitenladeleistung.

Durch die Reduzierung des Seitengewichts durch Eliminierung unnötiger Leerzeichen und Kommentare, allgemein bekannt als Minimierung, und durch das Verschieben inline eingebetteter Skripte und CSS in externe Dateien kann die Download-Leistung verbessert werden, ohne dass wesentliche Änderungen in der Seitenstruktur erforderlich sind.

Werkzeuge wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche leere Zeilen aus dem gültigen HTML-Quellcode entfernen. Andere Werkzeuge können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder den Quellcode verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Wenn Sie die Anzahl der Dateien reduzieren, die auf einer Webseite referenziert werden, verringern Sie die Anzahl der [HTTP](/de/docs/Web/HTTP)-Verbindungen, die erforderlich sind, um eine Seite herunterzuladen, und reduzieren somit die Zeit, die benötigt wird, um diese Anfragen zu senden und ihre Antworten zu erhalten.

Abhängig von den Cache-Einstellungen eines Browsers kann es eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header für jede referenzierte Datei senden und fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit, die auf das Abfragen der letzten Änderungszeit der referenzierten Dateien verwendet wird, kann die initiale Anzeige der Webseite verzögern, da der Browser die Änderungszeit für jede dieser Dateien prüfen muss, bevor er die Seite rendert.

Wenn Sie viele Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der erforderlichen HTTP-Abfragen reduzieren, indem Sie die Bilder in einem einzigen Bildspritzer zusammenfassen. Dann verwenden Sie dasselbe Bild jedes Mal, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und ist nicht für jede Verwendung eines Hintergrundbildes geeignet. Dennoch können weniger HTTP-Anfragen und das Caching eines einzigen Bildes die Seitenladezeit reduzieren.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu verringern. Da der Abstand zwischen Ihrem Serverursprung und dem Besucher zunimmt, werden die Ladezeiten zunehmen. Nehmen wir an, Ihr Website-Server befindet sich in den USA und es gibt einen Besucher aus Indien; die Seitenladezeit wird für den indischen Besucher viel höher sein im Vergleich zu einem Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie über den nächstgelegenen Netzwerk-Knoten zum Benutzer aus, wodurch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) reduziert wird.

Weiterführende Lektüre:

- [Verständnis von CDNs](https://www.imperva.com/Learn_web_development/Extensions/Performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domain-Lookups

Da jede separate Domain Zeit für einen DNS-Lookup kostet, wird die Seitenladezeit zusammen mit der Anzahl der unterschiedlichen Domains wachsen, die in CSS-Links und JavaScript und Bild-URLs erscheinen.

Dies ist möglicherweise nicht immer praktikabel; dennoch sollten Sie immer darauf achten, nur die unbedingt notwendige Anzahl unterschiedlicher Domains in Ihren Seiten zu verwenden.

### Cachen Sie wiederverwendete Inhalte

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden und mit angemessenen Ablaufzeiten.

Achten Sie besonders auf den `Last-Modified`-Header. Dieser ermöglicht ein effizientes Seiten-Caching; durch diesen Header werden der Benutzeragent Informationen über die Datei, die er laden möchte, übermittelt, z.B. wann sie zuletzt geändert wurde. Die meisten Webserver hängen automatisch den `Last-Modified`-Header an statische Seiten (z.B. `.html`, `.css`) an, basierend auf dem im Dateisystem gespeicherten letzten Änderungsdatum. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Daher ist es besonders bei Seiten, die dynamisch generiert werden, von Vorteil, ein wenig zu diesem Thema zu recherchieren. Es kann etwas aufwendig sein, aber es spart viele Seitenanfragen bei Seiten, die normalerweise nicht cachefähig wären.

Mehr Informationen:

1. [HTTP Conditional Get für RSS Hacker](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Optimale Reihenfolge der Komponenten der Seite

Laden Sie zuerst die Seiteninhalte herunter, zusammen mit allen CSS- oder JavaScript-Dateien, die für die anfängliche Darstellung erforderlich sind, damit der Benutzer die schnellste wahrgenommene Reaktion während des Seitenladens erhält. Diese Inhalte sind typischerweise Text und können daher von einer Textkompression während des Transports profitieren, was eine noch schnellere Reaktion für den Benutzer ermöglicht.

Dynamische Funktionen, die erfordern, dass die Seite vollständig geladen ist, bevor sie verwendet werden, sollten initial deaktiviert werden und erst aktiviert werden, nachdem die Seite geladen wurde. Dies bewirkt, dass das JavaScript nach den Seiteninhalten geladen wird, was das Gesamtbild des Seitenladens verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können für das Laden der Seite teuer sein, da der Parser annehmen muss, dass ein Inline-Skript die Seitenstruktur während des Parsens modifizieren könnte. Die Reduzierung der Verwendung von Inline-Skripten im Allgemeinen und insbesondere des Einsatzes von `document.write()` zur Ausgabe von Inhalten kann das gesamte Seitenladen verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstatt `document.write()`.

### Verwenden Sie moderne CSS und gültige Auszeichnung

Der Einsatz moderner CSS reduziert die Menge an Markup, kann den Bedarf an (Platzhalter-)Bildern in Bezug auf das Layout reduzieren und kann sehr oft Bilder von stilisiertem Text ersetzen — die viel "teurer" sind als der entsprechende Text-und-CSS.

Die Verwendung gültiger Auszeichnung hat weitere Vorteile. Erstens, es gibt Browsern keinen Bedarf zur Fehlerkorrektur beim Parsen des HTML (abgesehen von der philosophischen Frage, ob Formatvariationen in Benutzereingaben erlaubt werden und dann programmatisch "korrigiert" oder normalisiert werden sollen; oder ob stattdessen ein striktes, Toleranz-gegen-Null-Eingabeformat durchgesetzt werden soll).

Zudem erlaubt gültige Auszeichnung die freie Nutzung anderer Werkzeuge, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es wird jedoch nicht auf einer Seite mit schweren Markup-Fehlern ausgeführt.

### Teilen Sie Ihre Inhalte auf

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Stattdessen sollten Layouts mit [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) verwendet werden.

Tabellen werden weiterhin als gültige Auszeichnung betrachtet, sollten jedoch zur Anzeige von tabellarischen Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie das Verschachteln Ihrer Tabellen vermeiden.

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

Siehe auch: [CSS Flexbox-Layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS Gitterlayout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### Minifizieren und komprimieren Sie SVG-Ressourcen

Von den meisten Zeichnungsanwendungen erzeugte SVGs enthalten oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um Gzip-Komprimierung für SVG-Ressourcen anzuwenden.

### Minifizieren und komprimieren Sie Ihre Bilder

Große Bilder führen dazu, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder zu komprimieren, bevor Sie sie Ihrer Seite hinzufügen, indem Sie Kompressionsfunktionen in Bildbearbeitungswerkzeugen wie Photoshop nutzen oder ein spezielles Tool wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) verwenden.

### Geben Sie Größen für Bilder und Tabellen an

Wenn der Browser die Höhe und/oder Breite Ihrer Bilder und Tabellen sofort bestimmen kann, kann er eine Webseite anzeigen, ohne den Inhalt neu anordnen zu müssen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch unerwünschte Änderungen im Layout einer Seite, wenn das Laden abgeschlossen ist. Aus diesem Grund sollten `height` und `width` wann immer möglich für Bilder angegeben werden.

Tabellen sollten die CSS-Selektor-Eigenschaft-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten Breiten von Spalten unter Verwendung der [`<col>`](/de/docs/Web/HTML/Element/col) und der [`<colgroup>`](/de/docs/Web/HTML/Element/colgroup) Elemente angeben.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eifrig** geladen; das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy Loading von Bildern weist den Browser an, das Laden von Bildern so lange aufzuschieben, bis sie kurz davorstehen, im {{Glossary("visual_viewport", "visuellen Ansichtsfenster")}} benötigt zu werden.

Um ein Bild für Lazy Loading zu kennzeichnen, geben Sie sein [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut mit einem Wert von `lazy` an. Damit wird das Bild nur dann geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass lazyladende Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie prüfen, ob der Wert der Boolean-Eigenschaft [`complete`](/de/docs/Web/API/HTMLImageElement/complete) `true` ist.

### Wählen Sie Ihre Anforderungen an den Benutzeragenten mit Bedacht aus

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass vernünftige Anforderungen an den Benutzeragenten für Projekte festgelegt sind. Fordern Sie nicht, dass Ihr Inhalt in allen Browsern pixelgenau erscheint, insbesondere nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann neuere Versionen von Firefox, Google Chrome, Opera und Safari umfassen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind, die für jeden Benutzeragenten gelten und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen an die Browserunterstützung.

### Verwenden Sie async und defer, wenn möglich

Machen Sie die JavaScript-Skripte so, dass sie mit den Attributen [async](/de/docs/Web/HTML/Element/script#attributes) und [defer](/de/docs/Web/HTML/Element/script#attributes) kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite das Rendern stoppen, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, das nach den Skriptelementen liegt, die diese Attribute nicht haben.

> [!NOTE]
> Auch wenn diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle Best Practices für JavaScript befolgen, müssen Sie Ihren Code nicht ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Aussehen der Seite erforderlich sind. Verringern Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandte CSS in separaten Dateien zur Wartung halten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite erforderlich sind, jedoch keine interaktionsbezogenen JavaScripts, die erst nach dem Laden der Seite ausgeführt werden können.

      Verringern Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandte JavaScripts in separaten Dateien zur Wartung halten.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbare Seiteninhalte in kleinen Stücken (`{{htmlelement('header')}}`/`{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf den vollständigen Download der Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die für die Durchführung von Interaktivität verwendet werden. Interaktive Skripte können typischerweise erst ausgeführt werden, nachdem die Seite vollständig geladen ist und alle notwendigen Objekte initialisiert wurden. Es besteht keine Notwendigkeit, diese Skripte vor den Seiteninhalten zu laden. Das würde nur das initiale Erscheinungsbild der Seite verlangsamen.

      Verringern Sie die Anzahl der Dateien zur Leistung, während Sie nicht verwandte JavaScripts in separaten Dateien zur Wartung halten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Lernen Sie Leistung](https://web.dev/learn/performance) über web.dev (2023)
- Werkzeuge zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
