---
title: Tipps zur Erstellung von schnell ladenden HTML-Seiten
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine reaktionsfähigere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und der Internetverbindung. Dies kann besonders wichtig für stark frequentierte Seiten oder Seiten sein, die aufgrund ungewöhnlicher Umstände, wie z.B. aktuellen Nachrichten, einen Anstieg des Datenverkehrs erleben.

Die Optimierung der Ladeleistung von Seiten ist nicht nur für Inhalte gedacht, die von Schmalband- oder Mobilgerätenutzern betrachtet werden. Es ist ebenso wichtig für Breitbandinhalte und kann selbst für Besucher mit den schnellsten Verbindungen zu drastischen Verbesserungen führen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist mit Abstand der wichtigste Faktor bei der Ladeleistung von Seiten.

Durch die Beseitigung von unnötigem Leerraum und Kommentaren, allgemein bekannt als Minimierung, und durch das Verschieben von inline Script und CSS in externe Dateien kann die Download-Performance verbessert werden, ohne dass größere Änderungen an der Seitenstruktur erforderlich sind.

Werkzeuge wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus einer gültigen HTML-Quelle entfernen. Andere Werkzeuge können JavaScript „komprimieren“, indem sie die Quelle umformatieren oder durch Verschleierung der Quelle und Ersetzung langer Bezeichner durch kürzere Versionen.

### Minimieren Sie die Anzahl der Dateien

Das Reduzieren der Anzahl der Dateien, die in einer Webseite referenziert werden, verringert die Anzahl der erforderlichen [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite und verkürzt somit die Zeit, die für das Senden dieser Anfragen und das Empfangen der Antworten benötigt wird.

Abhängig von den Cache-Einstellungen eines Browsers kann dieser für jede referenzierte Datei eine Anforderung mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Headers/If-Modified-Since)-Header senden und fragen, ob die Datei seit dem letzten Herunterladen geändert wurde. Zu viel Zeit, die mit der Abfrage der letzten Änderung der referenzierten Dateien verbracht wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit dieser Dateien überprüfen muss, bevor er die Seite rendert.

Wenn Sie viele Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der erforderlichen HTTP-Abfragen reduzieren, indem Sie die Bilder zu einem Bildsprite kombinieren. Dann wenden Sie das gleiche Bild jedes Mal, wenn Sie es für einen Hintergrund benötigen, an und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Dimensionen haben, und funktioniert nicht für jede Nutzung eines Hintergrundbildes. Die reduzierte Anzahl an HTTP-Anfragen und das Caching eines einzigen Bildes können jedoch helfen, die Ladezeit der Seite zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu verkleinern. Da die Distanz zwischen Ihrem Server-Ursprung und dem Besucher steigt, nehmen die Ladezeiten zu. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und hat einen Besucher aus Indien; die Ladezeit der Seite wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Distanz zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern diese über den dem Nutzer am nächsten gelegenen Netzwerkknoten aus, wodurch die [Latenz](/de/docs/Web/Performance/Understanding_latency) verringert wird.

Weiterführende Literatur:

- [CDNs verstehen](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domain-Lookups

Da jede separate Domain Zeit für einen DNS-Lookup kostet, wächst die Ladezeit der Seite mit der Anzahl der verschiedenen Domains, die in CSS-Links und JavaScript- und Bildquellen erscheinen.

Dies mag nicht immer praktisch sein; dennoch sollten Sie stets darauf achten, nur die minimal notwendige Anzahl verschiedener Domains in Ihren Seiten zu verwenden.

### Cachen Sie wiederverwendete Inhalte

Stellen Sie sicher, dass jegliche Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden, und das mit angemessenen Ablaufzeiten.

Achten Sie besonders auf den `Last-Modified`-Header. Er ermöglicht ein effizientes Seitencaching; über diesen Header werden dem Benutzeragenten Informationen zur gewünschten Datei mitgeteilt, beispielsweise wann sie zuletzt geändert wurde. Die meisten Webserver hängen den `Last-Modified`-Header automatisch an statische Seiten (z.B. `.html`, `.css`) an, basierend auf dem im Dateisystem gespeicherten letzten Änderungsdatum. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) kann dies jedoch nicht erfolgen und der Header wird nicht gesendet.

Für dynamisch generierte Seiten ist eine kleine Recherche zu diesem Thema sinnvoll. Es kann zwar etwas kompliziert sein, spart jedoch viel bei Seitenanfragen auf Seiten, die normalerweise nicht cachefähig wären.

Weitere Informationen:

1. [HTTP Conditional Get für RSS Hacker](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Ordnen Sie die Komponenten der Seite optimal an

Laden Sie zuerst die Seiteninhalte herunter, zusammen mit jeglichem CSS oder JavaScript, das für die anfängliche Anzeige benötigt wird, sodass der Benutzer die schnellstmögliche Antwort während des Seitenladens erhält. Diese Inhalte sind typischerweise Text und können daher von der Textkompression während der Übertragung profitieren, was eine noch schnellere Antwort für den Benutzer bietet.

Jegliche dynamischen Funktionen, die erfordern, dass die Seite vollständig geladen ist, bevor sie genutzt werden können, sollten zunächst deaktiviert und erst nach dem Laden der Seite aktiviert werden. Dadurch wird das JavaScript nach den Seiteninhalten geladen, was das allgemeine Erscheinungsbild des Seitenladens verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können für das Seitenladen kostspielig sein, da der Parser davon ausgehen muss, dass ein Inline-Skript die Seitenstruktur während des Parsens ändern könnte. Die allgemeine Reduzierung von Inline-Skripten und insbesondere die Vermeidung der Nutzung von `document.write()`, um Inhalte auszugeben, kann das gesamte Seitenladen verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) anstelle von `document.write()`.

### Verwenden Sie modernes CSS und gültiges Markup

Die Verwendung von modernem CSS reduziert die Menge an Markup, kann den Bedarf an (Platzhalter-)Bildern in Bezug auf das Layout verringern und kann sehr oft Bilder von stilisiertem Text ersetzen — die viel mehr "kosten" als der entsprechende Text und CSS.

Die Verwendung von gültigem Markup bietet weitere Vorteile. Erstens müssen Browser keine Fehlerkorrekturen beim Parsen des HTML vornehmen (dies ist abgesehen von der philosophischen Frage, ob es besser ist, Formatvariationen bei Benutzereingaben zuzulassen und diese dann programmatisch zu "korrigieren" oder zu normalisieren, oder ob stattdessen ein strenges, fehlertolerantes Eingabeformat erzwungen werden sollte).

Darüber hinaus ermöglicht gültiges Markup die uneingeschränkte Nutzung anderer Tools, die Ihre Webseiten vorab verarbeiten können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen, aber es wird sich weigern, mit einer Seite zu arbeiten, die ernsthafte Markup-Fehler aufweist.

### Strukturieren Sie Ihre Inhalte in Abschnitte

Layouts mit Tabellen sind eine veraltete Methode und sollten nicht mehr verwendet werden. Layouts unter Verwendung von [Floats](/de/docs/Learn/CSS/CSS_layout/Floats), [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning), [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn/CSS/CSS_layout/Grids) sollten stattdessen verwendet werden.

Tabellen gelten immer noch als gültiges Markup, sollten jedoch zum Anzeigen von tabellarischen Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie das Verschachteln Ihrer Tabellen vermeiden.

Anstatt tief verschachtelte Tabellen zu verwenden:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

verwenden Sie nicht-verschachtelte Tabellen oder divs wie in

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

Siehe auch: [CSS flexible Box layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS grid layout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### SVG-Assets minimieren und komprimieren

Von den meisten Zeichenanwendungen erzeugtes SVG enthält oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um gzip-Kompression für SVG-Assets anzuwenden.

### Ihre Bilder minimieren und komprimieren

Große Bilder verursachen, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder zu komprimieren, bevor Sie sie auf Ihrer Seite hinzufügen, entweder durch Komprimierungsfunktionen in Bildbearbeitungstools wie Photoshop oder durch ein spezialisiertes Tool wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/).

### Größen für Bilder und Tabellen angeben

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, kann er eine Webseite anzeigen, ohne dass der Inhalt neu angeordnet werden muss. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout der Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder, wann immer möglich, angegeben werden.

Tabellen sollten die CSS-Selektor-Eigenschaftskombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten der Spalten mit den `<col>`- und `<colgroup>`-Elementen spezifizieren.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **gierig** geladen; das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle gierig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Event des Fensters gesendet wird. Das Umschalten auf verzögertes Laden von Bildern signalisiert dem Browser, das Laden von Bildern hinauszuschieben, bis sie benötigt werden, um das {{Glossary("visual_viewport", "visuelle Ansichtsfenster")}} zu zeichnen.

Um ein Bild für Lazy Loading zu markieren, spezifizieren Sie sein [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut mit einem Wert von `lazy`. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass verzögert geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Event ausgelöst wird. Sie können prüfen, ob ein bestimmtes Bild geladen ist, indem Sie überprüfen, ob der Wert seiner Boolean-Eigenschaft [`complete`](/de/docs/Web/API/HTMLImageElement/complete) `true` ist.

### Wählen Sie Ihre User-Agent-Anforderungen mit Bedacht

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass vernünftige User-Agent-Anforderungen für Projekte festgelegt sind. Verlangen Sie nicht, dass Ihre Inhalte in allen Browsern pixelgenau erscheinen, vor allem nicht in veralteten Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dazu können aktuelle Versionen von Firefox, Google Chrome, Opera und Safari gehören.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgelisteten Tipps gesunde Menschenverstandstechniken sind, die auf jeden Benutzeragenten zutreffen und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen an die Browserunterstützung.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie sowohl mit den [async](/de/docs/Web/HTML/Element/script#attributes)- als auch den [defer](/de/docs/Web/HTML/Element/script#attributes)-Attributen kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes), wann immer möglich, besonders wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite das Rendern anhalten, während JavaScript noch lädt. Andernfalls rendert der Browser nichts, was nach den Skriptelementen kommt, die nicht diese Attribute haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle bewährten JavaScript-Verfahren befolgen, müssen Sie Ihren Code nicht ändern.

## Beispiel für die Seitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite benötigt werden. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandte CSS in separate Dateien für die Wartung behalten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite benötigt werden, aber kein Interaktions-JavaScript, das erst ausgeführt werden kann, nachdem die Seite geladen ist.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes JavaScript in separate Dateien für die Wartung behalten.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbar Inhalte der Seite in kleinen Blöcken (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne dass die gesamte Seite heruntergeladen werden muss.

    - `{{htmlelement('script')}}`

      Alle Skripte, die für die Interaktivität verwendet werden. Interaktionsskripte können typischerweise erst nach dem vollständigen Laden der Seite und der Initialisierung aller erforderlichen Objekte ausgeführt werden. Es besteht keine Notwendigkeit, diese Skripte vor den Seiteninhalten zu laden. Das verlangsamt nur das anfängliche Erscheinungsbild des Seitenladens.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes JavaScript in separate Dateien für die Wartung behalten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- Die hervorragenden und sehr vollständigen [Best Practices for Speeding Up Your Website](https://developer.yahoo.com/performance/rules.html) (Yahoo!)
- Werkzeuge zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed)
