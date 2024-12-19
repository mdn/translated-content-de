---
title: Tipps zur Erstellung von schnell ladenden HTML-Seiten
slug: Learn_web_development/Howto/Solve_HTML_problems/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine reaktionsschnellere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann für stark frequentierte Websites oder solche, die aufgrund ungewöhnlicher Umstände wie aktueller Nachrichten einen Anstieg des Traffics erfahren, entscheidend sein.

Die Optimierung der Ladeleistung von Seiten ist nicht nur für Inhalte wichtig, die von Narrowband-Dial-up- oder mobilen Geräten angezeigt werden. Es ist ebenso wichtig für Breitbandinhalte und kann sogar für Ihre Besucher mit den schnellsten Verbindungen zu dramatischen Verbesserungen führen.

## Tipps

### Seitengröße reduzieren

Die Seitengröße ist mit Abstand der wichtigste Faktor für die Seitenladeleistung.

Die Reduzierung der Seitengröße durch die Eliminierung unnötiger Leerzeichen und Kommentare, allgemein bekannt als Minimierung, und durch das Verschieben von Inline-Skripten und CSS in externe Dateien kann die Download-Leistung verbessern, ohne dass wesentliche Änderungen an der Seitenstruktur erforderlich sind.

Werkzeuge wie [HTML Tidy](https://www.html-tidy.org/) können führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quellcode automatisch entfernen. Andere Werkzeuge können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder obfuskieren und lange Bezeichner durch kürzere Versionen ersetzen.

### Anzahl der Dateien minimieren

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der [HTTP](/de/docs/Web/HTTP)-Verbindungen, die zum Herunterladen einer Seite erforderlich sind, wodurch die Zeit für das Senden dieser Anfragen und Empfang ihrer Antworten reduziert wird.

Abhängig von den Cache-Einstellungen eines Browsers kann er für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Headers/If-Modified-Since)-Header senden, um zu fragen, ob die Datei seit dem letzten Herunterladen geändert wurde. Zu viel Zeit, die für die Abfrage der letzten Änderungszeit der referenzierten Dateien aufgebracht wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser das Änderungsdatum jeder dieser Dateien überprüfen muss, bevor er die Seite rendert.

Wenn Sie Hintergrundbilder häufig in Ihrem CSS verwenden, können Sie die Anzahl der erforderlichen HTTP-Lookups reduzieren, indem Sie die Bilder in einem einzigen Bildsprite kombinieren. Dann wenden Sie einfach dasselbe Bild jedes Mal an, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten bei Elementen mit begrenzten Abmessungen und funktioniert nicht für jede Verwendung eines Hintergrundbildes. Dennoch können weniger HTTP-Anfragen und einzelnes Bild-Caching helfen, die Seitenladezeit zu reduzieren.

### Nutzen Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN eine Möglichkeit, die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu reduzieren. Da die Entfernung zwischen Ihrem Server-Ursprung und dem Besucher zunimmt, steigen die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und ein Besucher kommt aus Indien; die Seitenladezeit wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Distanz zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und servieren sie den Besuchern über den Netzwerkknoten, der dem Benutzer am nächsten ist, wodurch [Latenz](/de/docs/Web/Performance/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [Verständnis von CDNs](https://www.imperva.com/Learn_web_development/Extensions/Performance/what-is-cdn-how-it-works/)

### Domain-Lookups reduzieren

Da jede separate Domain Zeit in einem DNS-Lookup kostet, wächst die Seitenladezeit mit der Anzahl separater Domains, die in CSS-Link(s) und JavaScript- und Bild-src(s) erscheinen.

Dies ist möglicherweise nicht immer praktikabel; dennoch sollten Sie stets darauf achten, nur die minimal notwendige Anzahl verschiedener Domänen in Ihren Seiten zu verwenden.

### Wiederverwendete Inhalte cachen

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, mit angemessenen Ablaufzeiten gecacht werden.

Achten Sie insbesondere auf den `Last-Modified`-Header. Dieser ermöglicht effizientes Seiten-Caching; durch diesen Header werden dem Benutzeragenten Informationen über die Datei mitgeteilt, die er laden möchte, wie z.B. wann sie zuletzt geändert wurde. Die meisten Webserver fügen statischen Seiten (z.B. `.html`, `.css`) basierend auf dem im Dateisystem gespeicherten letzten Änderungsdatum automatisch den `Last-Modified`-Header hinzu. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) kann dies nicht erfolgen, und der Header wird nicht gesendet.

Für Seiten, die dynamisch generiert werden, lohnt sich daher eine kleine Recherche zu diesem Thema. Es kann zwar etwas aufwändig sein, wird jedoch viele Seitenanfragen auf Seiten sparen, die normalerweise nicht cachefähig wären.

Weitere Informationen:

1. [HTTP Conditional Get für RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Komponenten der Seite optimal anordnen

Laden Sie den Seiteninhalt zuerst herunter, zusammen mit allen CSS- oder JavaScript-Dateien, die für die anfängliche Anzeige erforderlich sein könnten, damit der Benutzer während des Ladens der Seite die schnellste offensichtliche Reaktion erhält. Dieser Inhalt ist typischerweise Text und kann daher von der Textkompression beim Transport profitieren, was dem Benutzer eine noch schnellere Reaktion bietet.

Alle dynamischen Funktionen, die erfordern, dass die Seite vollständig geladen wird, bevor sie verwendet werden können, sollten zunächst deaktiviert und erst nach dem Laden der Seite aktiviert werden. Dadurch wird das JavaScript nach dem Seiteninhalt geladen, was das Gesamterscheinungsbild der Seitenladezeit verbessert.

### Anzahl der Inline-Skripte reduzieren

Inline-Skripte können für das Seitenladen kostspielig sein, da der Parser annehmen muss, dass ein Inline-Skript die Seitenstruktur während des laufenden Parsens ändern könnte. Die Reduzierung des Einsatzes von Inline-Skripten im Allgemeinen und die Reduzierung der Verwendung von `document.write()` zur Ausgabe von Inhalten im Besonderen kann das gesamte Seitenladen verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstelle von `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Der Einsatz moderner CSS reduziert die Menge an Markup, kann den Bedarf an (Spacer-)Bildern im Hinblick auf das Layout reduzieren und kann sehr oft Bilder mit stilisiertem Text ersetzen, die viel "kosten" mehr als der gleichwertige Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser beim Parsen des HTML keine Fehlerkorrektur durchführen (abgesehen von der philosophischen Frage, ob Formatabweichungen in Benutzereingaben zulässig sein und dann programmgesteuert korrigiert oder normalisiert werden sollten; oder ob stattdessen ein striktes, kein-tolerantes Eingabeformat durchgesetzt werden sollte).

Validiertes Markup ermöglicht weiterhin die freie Nutzung anderer Werkzeuge, die Ihre Webseiten _vorverarbeiten_ können. Beispielsweise kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale Endtags entfernen; es wird jedoch bei einer Seite mit schwerwiegenden Markup-Fehlern nicht ausgeführt.

### Inhalt in Blöcke aufteilen

Layouts mit [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) verwenden anstelle von Tabellenlayouts als ältere Methode.

Tabellen werden immer noch als gültiges Markup angesehen, sollten jedoch zur Darstellung von Tabellendaten verwendet werden. Um der Browser schneller rendern Ihre Seite, sollten Sie das Verschachteln Ihrer Tabellen vermeiden.

Verwenden Sie statt tief verschachtelten Tabellen wie:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

nicht verschachtelte Tabellen oder DIVs wie in

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

Siehe auch: [CSS flexible box layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS grid layout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### SVG-Assets minimieren und komprimieren

Von den meisten Zeichenanwendungen erstelltes SVG enthält oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server und wenden Sie gzip-Komprimierung für SVG-Assets an.

### Bilder minimieren und komprimieren

Große Bilder verursachen, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder vor dem Hinzufügen zu Ihrer Seite zu komprimieren, indem Sie Komprimierungsfunktionen verwenden, die in Bildbearbeitungswerkzeugen wie Photoshop eingebaut sind, oder verwenden Sie ein spezialisiertes Tool wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/).

### Größen für Bilder und Tabellen angeben

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, wird er in der Lage sein, eine Webseite anzuzeigen, ohne den Inhalt neu zu fließen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout einer Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `Höhe` und `Breite` für Bilder, wann immer möglich, angegeben werden.

Tabellen sollten die CSS-Selektor: Eigenschaftskombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten der Spalten mit den [`<col>`](/de/docs/Web/HTML/Element/col) und den [`<colgroup>`](/de/docs/Web/HTML/Element/colgroup) Elementen angeben.

### Lazy Loading für Bilder verwenden

Standardmäßig werden Bilder **gierig** geladen; das heißt, das Bild wird heruntergeladen und gerendert, sobald es im HTML verarbeitet wird. Alle gierig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Ein Wechsel zum Lazy Loading von Bildern weist den Browser an, das Laden der Bilder aufzuschieben, bis sie benötigt werden, um das {{Glossary("visual_viewport", "visuelle Viewport")}} zu zeichnen.

Um ein Bild für Lazy Loading zu markieren, geben Sie sein [`loading`](/de/docs/Web/HTML/Element/img#loading) Attribut mit einem Wert von `lazy` an. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass Lazy Loaded-Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen wird, indem Sie überprüfen, ob der Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete) Eigenschaft `true` ist.

### Wählen Sie Ihre Benutzeragenten-Anforderungen klug

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass angemessene Benutzeragenten-Anforderungen für Projekte festgelegt sind. Erfordern Sie nicht, dass Ihr Inhalt in allen Browsern pixelgenau erscheint, insbesondere nicht in älteren Browsern.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Betrachtung moderner Browser basieren, die die relevanten Standards unterstützen. Dazu können aktuelle Versionen von Firefox, Google Chrome, Opera und Safari gehören.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps allgemeine Techniken sind, die auf jeden Benutzeragenten angewendet werden können und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen an die Browserunterstützung.

### Verwenden Sie async und defer, wenn möglich

Machen Sie die JavaScript-Skripte so, dass sie mit beiden Attributen [async](/de/docs/Web/HTML/Element/script#attributes) und [defer](/de/docs/Web/HTML/Element/script#attributes) kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes), wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite aufhören zu rendern, während JavaScript noch geladen wird. Andernfalls rendert der Browser nichts, was nach den Skriptelementen liegt, die diese Attribute nicht haben.

Hinweis: Obwohl diese Attribute beim ersten Laden einer Seite viel helfen, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle Best Practices für JavaScript befolgen, müssen Sie Ihren Code nicht ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandte CSS in separaten Dateien für die Wartung halten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die während des Ladens der Seite benötigt werden, jedoch kein interaktionsbezogenes JavaScript, das nur nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes JavaScript in separaten Dateien für die Wartung halten.

  - `{{htmlelement('body')}}`

    Inhalt der sichtbaren Seite in kleinen Blöcken (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das vollständige Herunterladen der Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Durchführung von Interaktivität verwendet werden. Interaktionsskripte können typischerweise erst ausgeführt werden, nachdem die Seite vollständig geladen und alle erforderlichen Objekte initialisiert wurden. Es besteht keine Notwendigkeit, diese Skripte vor dem Seiteninhalt zu laden. Das bremst nur das anfängliche Erscheinungsbild des Seitenladevorgangs.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes JavaScript in separaten Dateien für die Wartung halten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- Die ausgezeichnete und sehr vollständige ["Best Practices for Speeding Up Your Website"](https://developer.yahoo.com/performance/rules.html) (Yahoo!)
- Werkzeuge zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed)
