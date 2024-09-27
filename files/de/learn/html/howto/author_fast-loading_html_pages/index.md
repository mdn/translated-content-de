---
title: Tipps zum Erstellen von schnell ladenden HTML-Seiten
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Diese Tipps basieren auf allgemein bekanntem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine reaktionsfreudigere Seite für Ihre Besucher, sondern verringert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend für Seiten mit hohem Aufkommen oder für Seiten sein, die durch ungewöhnliche Umstände, wie z. B. aktuelle Nachrichten, eine Spitzenlast im Verkehr haben.

Die Optimierung der Seitenladeleistung ist nicht nur für Inhalte wichtig, die von Narrowband- oder mobilen Besuchern angeschaut werden. Sie ist ebenso wichtig für Breitband-Inhalte und kann selbst für Ihre Besucher mit den schnellsten Verbindungen zu erheblichen Verbesserungen führen.

## Tipps

### Seitengewicht reduzieren

Das Seitengewicht ist bei weitem der wichtigste Faktor für die Seitenladeleistung.

Die Reduzierung des Seitengewichts durch die Beseitigung unnötiger Leerzeichen und Kommentare, allgemein bekannt als Minimierung, und durch das Verschieben von eingebetteten Skripten und CSS in externe Dateien kann die Download-Leistung verbessern, ohne dass wesentliche Änderungen an der Seitenstruktur erforderlich sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus validem HTML-Quellcode entfernen. Andere Werkzeuge können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder den Quellcode verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Anzahl der Dateien minimieren

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der erforderlichen [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite, wodurch die Zeit für diese Anfragen gesendet und ihre Antworten empfangen werden können, reduziert wird.

Abhängig von den Cache-Einstellungen eines Browsers kann dieser eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Headers/If-Modified-Since)-Header für jede referenzierte Datei senden und fragen, ob die Datei seit der letzten Herunterladung geändert wurde. Zu viel Zeit mit der Abfrage des letzten Änderungsdatums der referenzierten Dateien kann die anfängliche Anzeige der Webseite verzögern, da der Browser das Änderungsdatum jeder dieser Dateien überprüfen muss, bevor er die Seite rendert.

Wenn Sie viele Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der notwendigen HTTP-Abfragen reduzieren, indem Sie die Bilder in einem sogenannten Bildsprite kombinieren. Dann wenden Sie einfach bei jedem Bedarf dasselbe Bild für einen Hintergrund an und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und wird nicht für jede Verwendung eines Hintergrundbildes funktionieren. Dennoch können die weniger HTTP-Anfragen und das Caching eines einzelnen Bildes helfen, die Seitenladezeit zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Entfernung zwischen Ihrem Server und Ihrem Besucher zu verringern. Je weiter die Entfernung zwischen Ihrem Ursprungsserver und dem Besucher ist, desto länger werden die Ladezeiten sein. Angenommen, Ihr Webserver befindet sich in den Vereinigten Staaten und es gibt einen Besucher aus Indien; die Seitenladezeit wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Benutzer und Ihrer Webseite zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Webseite und liefern sie den Besuchern über den Netzknoten, der dem Benutzer am nächsten ist, wodurch die [Latenz](/de/docs/Web/Performance/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [Understanding CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Domain-Lookups reduzieren

Da jede separate Domain Zeit in einem DNS-Lookup kostet, wird die Seitenladezeit zusammen mit der Anzahl der in CSS-Links(s) sowie JavaScript- und Bild-src(es) erscheinenden separaten Domains ansteigen.

Es ist nicht immer praktisch; dennoch sollten Sie immer darauf achten, nur die minimal notwendige Anzahl an verschiedenen Domains in Ihren Seiten zu verwenden.

### Wiederverwendeten Inhalt zwischenspeichern

Stellen Sie sicher, dass jeder Inhalt, der zwischengespeichert werden kann, auch zwischengespeichert wird und mit geeigneten Ablaufzeiten.

Insbesondere beachten Sie den `Last-Modified`-Header. Er ermöglicht eine effiziente Seitencache; anhand dieses Headers werden dem Benutzeragent Informationen über die Datei übermittelt, die er laden möchte, z.B. wann sie zuletzt geändert wurde. Die meisten Webserver fügen statischen Seiten (z.B. `.html`, `.css`) automatisch den `Last-Modified`-Header hinzu, basierend auf dem im Dateisystem gespeicherten letzten Änderungsdatum. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Daher ist für Seiten, die dynamisch generiert werden, ein wenig Forschung zu diesem Thema vorteilhaft. Es kann etwas komplex sein, aber es spart viele Anfragen bei Seiten, die normalerweise nicht cachefähig wären.

Mehr Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Optimale Reihenfolge der Komponenten der Seite

Laden Sie zuerst den Seiteninhalt herunter, zusammen mit jeglichem CSS oder JavaScript, das für die anfängliche Anzeige erforderlich sein könnte, damit der Benutzer die schnellste scheinbare Antwort während des Seitenladens erhält. Dieser Inhalt ist in der Regel Text und kann somit von Textkompression beim Transport profitieren, was dem Benutzer eine noch schnellere Antwort bietet.

Alle dynamischen Funktionen, die ein vollständiges Laden der Seite erfordern, bevor sie verwendet werden können, sollten zunächst deaktiviert und dann erst nach dem Laden der Seite aktiviert werden. Dadurch wird das JavaScript nach dem Seiteninhalt geladen, was das Gesamterscheinungsbild des Seitenladens verbessert.

### Anzahl der eingebetteten Skripte reduzieren

Eingebettete Skripte können für das Laden der Seite teuer sein, da der Parser davon ausgehen muss, dass ein eingebettetes Skript die Seitenstruktur während des Parsing-Vorgangs ändern könnte. Die Reduzierung der Verwendung von eingebetteten Skripten im Allgemeinen und die Verringerung der Verwendung von `document.write()`, um Inhalte auszugeben, im Besonderen kann das Gesamtladen der Seite verbessern. Verwenden Sie [DOM-APIs, um Seiteninhalte zu manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents), anstatt `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Die Verwendung von modernem CSS reduziert die Menge des Markups, kann die Notwendigkeit von (Platzhalter-)Bildern in Bezug auf Layouts verringern und kann sehr oft stilisierte Textbilder ersetzen, die "mehr kosten" als der äquivalente Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser keinen Fehlerkorrekturprozess während des Parsens von HTML durchführen (dies ist abgesehen von der philosophischen Frage, ob man Formatvariationen in Benutzereingaben zulassen und dann programmatisch "korrigieren" oder normalisieren sollte; oder ob man stattdessen ein striktes, intolerantes Eingabeformat durchsetzen sollte).

Darüber hinaus ermöglicht gültiges Markup die freie Verwendung anderer Tools, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es wird jedoch die Ausführung auf einer Seite mit schweren Markup-Fehlern verweigern.

### Inhalt in Abschnitte unterteilen

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Stattdessen sollten Layouts mit [Floats](/de/docs/Learn/CSS/CSS_layout/Floats), [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning), [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn/CSS/CSS_layout/Grids) verwendet werden.

Tabellen gelten zwar immer noch als gültiges Markup, sollten aber zur Anzeige tabellarischer Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie das Verschachteln Ihrer Tabellen vermeiden.

Anstatt tief verschachtelte Tabellen wie in:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

zu verwenden, sollten Sie nicht-verschachtelte Tabellen oder Divs wie in

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

verwenden.

Siehe auch: [CSS flexible box layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS grid layout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### SVG-Assets optimieren und komprimieren

Von den meisten Zeichenanwendungen erzeugtes SVG enthält häufig unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server und wenden Sie gzip-Kompression für SVG-Assets an.

### Bilder minimieren und komprimieren

Große Bilder verlangsamen das Laden Ihrer Seite. Ziehen Sie in Betracht, Ihre Bilder zu komprimieren, bevor Sie sie zu Ihrer Seite hinzufügen, indem Sie die Komprimierungsfunktionen verwenden, die in Bildbearbeitungswerkzeuge wie Photoshop integriert sind, oder ein spezialisiertes Tool wie [Compress Jpeg](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) verwenden.

### Größen für Bilder und Tabellen angeben

Wenn der Browser die Höhe und/oder Breite Ihrer Bilder und Tabellen sofort bestimmen kann, wird er in der Lage sein, eine Webseite anzuzeigen, ohne den Inhalt erneut verteilen zu müssen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout einer Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder, wann immer möglich, angegeben werden.

Tabellen sollten die CSS-Selektor: Eigenschaft-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten der Spalten mit den [`<col>`](/de/docs/Web/HTML/Element/col) und den [`<colgroup>`](/de/docs/Web/HTML/Element/colgroup) Elementen angeben.

### Lazy Loading für Bilder verwenden

Standardmäßig werden Bilder **begierig** geladen; das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle begierig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy Loading von Bildern weist den Browser an, das Laden von Bildern zurückzustellen, bis sie benötigt werden, um das [visuelle Viewport](/de/docs/Glossary/visual_viewport) zu zeichnen.

Um ein Bild für das Lazy Loading zu markieren, geben Sie sein [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut mit einem Wert von `lazy` an. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass lazily-geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie überprüfen, ob der Wert seiner Boolean[`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Benutzeragent-Anforderungen sorgfältig auswählen

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass vernünftige Benutzeragent-Anforderungen für Projekte angegeben sind. Fordern Sie nicht, dass Ihre Inhalte in allen Browsern pixelgenau erscheinen, insbesondere nicht in älteren Browser-Versionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann aktuelle Versionen von Firefox, Google Chrome, Opera und Safari umfassen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind, der auf jeden Benutzeragent anwendbar ist, und auf jede Webseite angewendet werden kann, unabhängig von Browser-Unterstützung-Anforderungen.

### Async und Defer, wenn möglich, verwenden

Machen Sie die JavaScript-Skripte so, dass sie mit sowohl dem [async](/de/docs/Web/HTML/Element/script#attributes)- als auch dem [defer](/de/docs/Web/HTML/Element/script#attributes)-Attribut kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes), wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite das Rendern stoppen, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, das nach den Skriptelementen kommt, die diese Attribute nicht haben.

Hinweis: Obwohl diese Attribute beim ersten Mal, wenn eine Seite geladen wird, sehr helfen, sollten Sie sie verwenden, jedoch nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle besten Praktiken für JavaScript befolgen, besteht keine Notwendigkeit, Ihren Code zu ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammengehörige CSS in separaten Dateien für die Wartung behalten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien, die während des Ladevorgangs der Seite **erforderlich** sind, jedoch nicht interaktionsbezogene JavaScript, die erst nach dem Laden der Seite ausgeführt werden können.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammengehörige JavaScript in separaten Dateien für die Wartung behalten.

  - `{{htmlelement('body')}}`

    Für Benutzer sichtbare Seiteninhalte in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf den vollständigen Download der Seite warten zu müssen.

    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Durchführung von Interaktivität verwendet werden. Interaktionsskripte können normalerweise erst nach dem vollständigen Laden der Seite und der Initialisierung aller notwendigen Objekte ausgeführt werden. Es ist nicht nötig, diese Skripte vor dem Seiteninhalt zu laden. Das verlangsamt nur das anfängliche Erscheinen des Seitenladens.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammengehörige JavaScript in separaten Dateien für die Wartung behalten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- Die ausgezeichneten und sehr vollständigen [Best Practices for Speeding Up Your Website](https://developer.yahoo.com/performance/rules.html) (Yahoo!)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed)
