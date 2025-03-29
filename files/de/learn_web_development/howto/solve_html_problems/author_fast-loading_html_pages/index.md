---
title: Tipps zum Erstellen von schnell ladenden HTML-Seiten
slug: Learn_web_development/Howto/Solve_HTML_problems/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine schnellere Reaktion für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend für Websites mit hohem Volumen oder für solche sein, die aufgrund ungewöhnlicher Umstände wie aktuellen Nachrichten einen Anstieg des Datenverkehrs erleben.

Die Optimierung der Ladeleistung ist nicht nur für Inhalte wichtig, die von Besuchern mit Schmalband- oder Mobilgeräten betrachtet werden. Sie ist genauso wichtig für Breitbandinhalte und kann selbst für Besucher mit den schnellsten Verbindungen zu dramatischen Verbesserungen führen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist bei weitem der wichtigste Faktor für die Ladeleistung einer Seite.

Das Reduzieren des Seitengewichts durch die Beseitigung unnötiger Leerzeichen und Kommentare, allgemein als Minimierung bekannt, und durch das Verschieben von Inline-Skript und CSS in externe Dateien kann die Download-Leistung verbessern, ohne dass große Änderungen an der Seitenstruktur erforderlich sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Code automatisch entfernen. Andere Werkzeuge können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder durch Obfuskieren des Quellcodes und Ersetzen langer Bezeichner durch kürzere Versionen.

### Minimieren Sie die Anzahl der Dateien

Das Reduzieren der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der [HTTP](/de/docs/Web/HTTP)-Verbindungen, die zum Herunterladen einer Seite erforderlich sind, und damit die Zeit, die zum Senden dieser Anfragen und Empfangen ihrer Antworten benötigt wird.

Je nach Cache-Einstellungen eines Browsers kann dieser für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header senden und fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit, die für das Abfragen der letzten Änderungszeit der referenzierten Dateien aufgewendet wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit für jede dieser Dateien prüfen muss, bevor er die Seite rendert.

Wenn Sie viele Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der benötigten HTTP-Lookups reduzieren, indem Sie die Bilder in einem sogenannten Image-Sprite kombinieren. Sie wenden dann jedes Mal, wenn Sie es als Hintergrund benötigen, dasselbe Bild an und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Dimensionen haben, und wird nicht für jede Verwendung eines Hintergrundbildes funktionieren. Weniger HTTP-Anfragen und die Zwischenspeicherung eines einzigen Bildes können jedoch dazu beitragen, die Ladezeit der Seite zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu reduzieren. Je größer die Distanz zwischen Ihrem Ursprungsserver und dem Besucher ist, desto länger werden die Ladezeiten. Angenommen, Ihr Webserver befindet sich in den USA und hat einen Besucher aus Indien; die Ladezeit der Seite wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie den Besuchern über den Netzwerk-Knoten aus, der dem Benutzer am nächsten ist, wodurch die [Latenz](https://www.w3.org/TR/css-flexbox-1/) reduziert wird.

Weiterführende Literatur:

- [Verständnis von CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domain-Lookups

Da jede separate Domain Zeit für einen DNS-Lookup benötigt, wächst die Seitenladezeit mit der Anzahl der unterschiedlichen Domains, die in CSS-Links und JavaScript und Bildquellen erscheinen.

Dies ist möglicherweise nicht immer praktisch; jedoch sollten Sie immer darauf achten, nur die minimale notwendige Anzahl unterschiedlicher Domains auf Ihren Seiten zu verwenden.

### Zwischenspeichern von wiederverwendetem Inhalt

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, zwischengespeichert werden, und zwar mit angemessenen Ablaufzeiten.

Achten Sie besonders auf den `Last-Modified`-Header. Er ermöglicht eine effiziente Seitencodierung; über diesen Header werden dem Benutzeragenten Informationen über die Datei, die er laden möchte, vermittelt, wie z.B. wann sie zuletzt geändert wurde. Die meisten Webserver fügen automatisch den `Last-Modified`-Header zu statischen Seiten (z.B. `.html`, `.css`) hinzu, basierend auf dem im Dateisystem gespeicherten letzten Änderungsdatum. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) ist das natürlich nicht möglich, und der Header wird nicht gesendet.

Insbesondere für Seiten, die dynamisch generiert werden, ist eine kleine Recherche zu diesem Thema vorteilhaft. Es kann etwas komplex sein, aber es wird viele Anfragen für Seiten einsparen, die normalerweise nicht cachefähig wären.

Weitere Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Nicht geändert](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Komponenten der Seite optimal anordnen

Laden Sie Seiteninhalte zuerst herunter, zusammen mit allen CSS- oder JavaScript-Dateien, die für die anfängliche Anzeige benötigt werden, damit der Nutzer die schnellste wahrnehmbare Reaktion während des Ladens der Seite erhält. Diese Inhalte sind in der Regel Text und können daher von einer Textkomprimierung während der Übertragung profitieren, was eine noch schnellere Reaktion ermöglicht.

Alle dynamischen Funktionen, die das vollständige Laden der Seite erfordern, sollten zunächst deaktiviert werden und dann nur aktiviert werden, nachdem die Seite geladen wurde. Dadurch wird das JavaScript nach den Seiteninhalten geladen, was das Gesamtbild der Seitenladung verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können teuer für das Laden der Seite sein, da der Parser annehmen muss, dass ein Inline-Skript die Seitenstruktur während des Parsens ändern könnte. Die Reduzierung der Verwendung von Inline-Skripten im Allgemeinen und insbesondere die Reduzierung der Verwendung von `document.write()` zur Ausgabe von Inhalten kann das gesamte Laden der Seite verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) anstelle von `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Die Verwendung von modernem CSS reduziert die Menge an Markup, kann die Notwendigkeit von (Abstandshalter-)Bildern im Hinblick auf das Layout verringern und kann sehr oft Bilder von stilisiertem Text ersetzen — die viel mehr "kosten" als der entsprechende Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser keine Fehlerkorrektur beim Parsen des HTMLs vornehmen (das ist vom philosophischen Standpunkt der Frage, ob man Formatabweichungen bei Benutzereingaben zulassen und dann programmatisch "korrigieren" oder normalisieren sollte, abgesehen; oder ob man stattdessen ein strenges, toleranzfreies Eingabeformat durchsetzen sollte).

Darüber hinaus ermöglicht gültiges Markup die freie Verwendung anderer Tools, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; allerdings wird es sich weigern, auf einer Seite mit schwerwiegenden Markup-Fehlern ausgeführt zu werden.

### Segmentieren Sie Ihren Inhalt

Tabellen für Layouts sind eine veraltete Methode und sollten nicht mehr verwendet werden. Sie sollten Layouts nutzen, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) verwenden.

Tabellen werden immer noch als gültiges Markup betrachtet, sollten aber zur Darstellung von tabellarischen Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller darzustellen, sollten Sie vermeiden, Ihre Tabellen tief zu verschachteln.

Statt Tabellen tief zu verschachteln wie in:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

verwenden Sie nicht-verschachtelte Tabellen oder Divs wie in

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

### Minifizieren und komprimieren Sie SVG-Assets

SVGs, die von den meisten Zeichenanwendungen erstellt werden, enthalten oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server so, dass SVG-Assets mit gzip-Kompression komprimiert werden.

### Minifizieren und komprimieren Sie Ihre Bilder

Große Bilder lassen Ihre Seite mehr Zeit für das Laden in Anspruch nehmen. Überlegen Sie, Ihre Bilder vor dem Hinzufügen zu Ihrer Seite zu komprimieren, indem Sie Kompressionsfunktionen verwenden, die in Bildbearbeitungstools wie Photoshop eingebaut sind, oder ein spezielles Tool wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/).

### Geben Sie die Größen für Bilder und Tabellen an

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, kann er eine Webseite anzeigen, ohne dass der Inhalt neu angeordnet werden muss. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout einer Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder angegeben werden, wann immer dies möglich ist.

Tabellen sollten die CSS-Selektor: Eigenschaftskombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten der Spalten mit den [`<col>`](/de/docs/Web/HTML/Element/col) und [`<colgroup>`](/de/docs/Web/HTML/Element/colgroup)-Elementen spezifizieren.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eagerly** geladen; das heißt, das Bild wird abgefragt und dargestellt, sobald es im HTML verarbeitet ist. Alle eagerly geladenen Bilder werden gerendert, bevor das `load`-Ereignis des Fensters gesendet wird. Das Umschalten auf Lazy Loading von Bildern teilt dem Browser mit, dass er das Laden von Bildern verschieben soll, bis sie benötigt werden, um den {{Glossary("visual_viewport", "visuellen Viewport")}} zu zeichnen.

Um ein Bild für Lazy Loading zu markieren, geben Sie seinem [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut den Wert `lazy`. Damit wird das Bild nur dann geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass Lazy-Loaded-Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie überprüfen, ob der Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie Ihre Anforderungen an die Benutzeragenten weise

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass vernünftige Anforderungen an die Benutzeragenten für Projekte festgelegt werden. Erfordern Sie nicht, dass Ihr Inhalt in allen Browsern pixelgenau erscheint, insbesondere nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann aktuelle Versionen von Firefox, Google Chrome, Opera und Safari einschließen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind, die auf jeden Benutzeragenten anwendbar sind und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen an die Browserunterstützung.

### Verwenden Sie, wenn möglich, Async und Defer

Machen Sie die JavaScript-Skripte so, dass sie sowohl mit den [async](/de/docs/Web/HTML/Element/script#attributes) als auch mit den [defer](/de/docs/Web/HTML/Element/script#attributes)-Attributen kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes), wann immer möglich, besonders wenn Sie mehrere Skriptelemente haben.

Damit kann das Rendern der Seite aufhören, während JavaScript noch geladen wird. Andernfalls rendert der Browser nichts, was sich nach den Skriptelementen befindet, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite sehr helfen, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best Practices befolgen, müssen Sie Ihren Code nicht ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Aussehen der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes CSS in separaten Dateien zur Wartung halten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite erforderlich sind, aber nicht JavaScript, das erst nach dem Laden der Seite für Interaktionen ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien zur Wartung halten.

  - `{{htmlelement('body')}}`

    Sichtbarer Seiteninhalt für den Benutzer in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf den vollständigen Download der Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Interaktivität verwendet werden. Interaktionsskripte können typischerweise erst ausgeführt werden, nachdem die Seite vollständig geladen und alle notwendigen Objekte initialisiert wurden. Es gibt keine Notwendigkeit, diese Skripte vor dem Seiteninhalt zu laden. Das verlangsamt nur das anfängliche Erscheinen der Seitenladung.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien zur Wartung halten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Lernen Sie Leistung](https://web.dev/learn/performance) über web.dev (2023)
- Werkzeuge zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
