---
title: Tipps zum Erstellen von schnell ladenden HTML-Seiten
slug: Learn_web_development/Howto/Solve_HTML_problems/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 41adb01a2f16adcbd9565bd185d2c66697a03018
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine reaktionsschnellere Seite für Ihre Besucher, sondern verringert auch die Belastung Ihrer Webserver und Internetverbindungen. Dies kann entscheidend für Websites mit hohem Volumen oder solchen sein, die aufgrund ungewöhnlicher Umstände wie Eilmeldungen einen Besucheranstieg erfahren.

Die Optimierung der Ladeleistung einer Seite ist nicht nur für Inhalte, die von Schmalband- oder Mobilgerätbesuchern angesehen werden, entscheidend. Sie ist ebenso wichtig für Breitbandinhalte und kann zu dramatischen Verbesserungen sogar für Ihre Besucher mit den schnellsten Verbindungen führen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist mit Abstand der wichtigste Faktor für die Ladeleistung einer Seite.

Durch die Reduzierung des Seitengewichts durch das Entfernen unnötiger Leerzeichen und Kommentare, gemeinhin als Minimierung bekannt, und indem Sie eingebettete Skripte und CSS in externe Dateien verschieben, kann die Download-Performance verbessert werden, ohne dass große Änderungen in der Seitenstruktur erforderlich sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können führende Leerzeichen und zusätzliche leere Zeilen aus validem HTML-Quellcode automatisch entfernen. Andere Tools können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder den Quellcode verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der erforderlichen [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite und senkt dadurch die Zeit, die für das Senden dieser Anfragen und den Erhalt ihrer Antworten benötigt wird.

Je nach Cache-Einstellungen eines Browsers kann dieser für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Headers/If-Modified-Since)-Header versenden, um zu fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit, die mit der Abfrage der letzten Änderungszeit der referenzierten Dateien verbracht wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit jeder dieser Dateien überprüfen muss, bevor er die Seite rendert.

Wenn Sie Hintergrundbilder häufig in Ihrem CSS verwenden, können Sie die Anzahl der erforderlichen HTTP-Abfragen reduzieren, indem Sie die Bilder zu einem Bildsprite kombinieren. Dann wenden Sie lediglich dasselbe Bild jedes Mal an, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und funktioniert nicht für jede Nutzung eines Hintergrundbildes. Die Reduzierung der HTTP-Anfragen und das Caching eines einzelnen Bildes können jedoch dazu beitragen, die Ladezeit der Seite zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu verringern. Mit steigender Entfernung zwischen dem Ursprung Ihres Servers und dem Besucher steigen die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und es hat einen Besucher aus Indien; die Ladezeit der Seite wird für den Besucher aus Indien viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Distanz zwischen dem Benutzer und Ihrer Website zu verringern. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie den Besuchern über den dem Benutzer am nächsten gelegenen Netzwerk-Knoten, wodurch die [Latenz](/de/docs/Web/Performance/Understanding_latency) verringert wird.

Weiterführende Literatur:

- [Verständnis von CDNs](https://www.imperva.com/Learn_web_development/Extensions/Performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domainabfragen

Da jede separate Domain Zeit für eine DNS-Abfrage kostet, wächst die Ladezeit der Seite mit der Anzahl der unterschiedlichen Domains, die in CSS-Links und JavaScript- sowie Bildquellen erscheinen.

Dies ist möglicherweise nicht immer praktikabel; Sie sollten jedoch immer darauf achten, in Ihren Seiten nur die unbedingt erforderliche Anzahl verschiedener Domains zu verwenden.

### Wiederverwendete Inhalte zwischenspeichern

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden und dies mit angemessenen Ablaufzeiten.

Achten Sie insbesondere auf den `Last-Modified`-Header. Er ermöglicht ein effizientes Seitencaching; durch diesen Header werden dem Benutzeragenten Informationen über die Datei, die er laden möchte, übermittelt, wie z.B. wann sie zuletzt geändert wurde. Die meisten Webserver fügen statischen Seiten (z.B. `.html`, `.css`) automatisch den `Last-Modified`-Header basierend auf dem letzten im Dateisystem gespeicherten Änderungsdatum hinzu. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Daher ist insbesondere für Seiten, die dynamisch generiert werden, eine kleine Recherche zu diesem Thema von Vorteil. Es kann etwas aufwendig sein, spart jedoch viel bei Seitenanfragen, die normalerweise nicht zwischengespeichert werden könnten.

Weitere Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Komponenten der Seite optimal anordnen

Laden Sie zuerst die Seiteninhalte herunter, zusammen mit allen CSS- oder JavaScript-Dateien, die für die anfängliche Anzeige erforderlich sind, damit der Benutzer die schnellstmögliche Reaktion während des Seitenladens erhält. Dieser Inhalt ist typischerweise Text und kann daher von einer Textkompression während der Übertragung profitieren, was dem Benutzer eine noch schnellere Antwort bietet.

Alle dynamischen Funktionen, die erfordern, dass die Seite vollständig geladen ist, bevor sie verwendet werden, sollten zunächst deaktiviert und erst nach dem Laden der Seite aktiviert werden. Dies führt dazu, dass JavaScript nach den Seiteninhalten geladen wird, was das Gesamtbild des Seitenladens verbessert.

### Reduzieren Sie die Anzahl der eingebetteten Skripte

Eingebettete Skripte können beim Laden der Seite teuer sein, da der Parser annehmen muss, dass ein eingebettetes Skript die Seitenstruktur während des Parsens ändern könnte. Die allgemeine Reduzierung der Nutzung eingebetteter Skripte und insbesondere die Reduzierung der Verwendung von `document.write()`, um Inhalte auszugeben, kann das gesamte Seitenladen verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting) anstelle von `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Der Einsatz moderner CSS-Techniken reduziert die Menge an Markup, kann den Bedarf an (Platzhalter-)Bildern in Bezug auf das Layout verringern und sehr häufig Bilder von stilisiertem Text ersetzen, die "mehr kosten" als der entsprechende Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser keine Fehlerkorrektur bei der Analyse des HTML durchführen (abgesehen von der philosophischen Frage, ob Formatabweichungen bei Benutzereingaben zugelassen und dann programmgesteuert "korrigiert" oder normalisiert werden sollen oder ob stattdessen ein striktes, nicht tolerantes Eingabeformat durchgesetzt werden soll).

Darüber hinaus ermöglicht gültiges Markup die freie Nutzung anderer Tools, die Ihre Webseiten _vorverarbeiten_ können. Beispielsweise kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale Endtags entfernen; jedoch wird es die Ausführung auf einer Seite mit schwerwiegenden Markup-Fehlern verweigern.

### Strukturieren Sie Ihre Inhalte

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Layouts mit Hilfe von [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) sollten stattdessen verwendet werden.

Tabellen werden weiterhin als gültiges Markup betrachtet, sollten jedoch für die Anzeige tabellarischer Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie das Verschachteln von Tabellen vermeiden.

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

Siehe auch: [CSS Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### Minimieren und komprimieren Sie SVG-Elemente

Von den meisten Zeichenanwendungen erzeugte SVGs enthalten oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um Gzip-Komprimierung für SVG-Elemente anzuwenden.

### Minimieren und komprimieren Sie Ihre Bilder

Große Bilder führen dazu, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder vor dem Hinzufügen zur Seite zu komprimieren, indem Sie Komprimierungsfunktionen verwenden, die in Bildbearbeitungswerkzeuge wie Photoshop integriert sind, oder indem Sie ein spezialisiertes Tool wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) verwenden.

### Spezifizieren Sie Größen für Bilder und Tabellen

Wenn der Browser die Höhe und/oder Breite Ihrer Bilder und Tabellen sofort bestimmen kann, kann er eine Webseite anzeigen, ohne den Inhalt erneut aufzufüllen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout einer Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder, wann immer möglich, spezifiziert werden.

Tabellen sollten die CSS-Selektor: Eigenschaftskombination verwenden:

```css
table-layout: fixed;
```

und sollten Breiten der Spalten mit den [`<col>`](/de/docs/Web/HTML/Element/col) und den [`<colgroup>`](/de/docs/Web/HTML/Element/colgroup) Elementen spezifizieren.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eifrig** geladen; das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy Loading von Bildern signalisiert dem Browser, die Bilder erst dann zu laden, wenn sie benötigt werden, um das {{Glossary("visual_viewport", "visuelle Ansichtsfenster")}} zu zeichnen.

Um ein Bild für Lazy Loading zu markieren, geben Sie das [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut mit dem Wert `lazy` an. Mit dieser Einstellung wird das Bild nur dann geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass lazy-geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie prüfen, ob der Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie Ihre Anforderungen an den Benutzeragenten weise

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass vernünftige Anforderungen an den Benutzeragenten für Projekte festgelegt werden. Verlangen Sie nicht, dass Ihr Inhalt in allen Browsern pixelgenau aussieht, besonders nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Überlegung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann neuere Versionen von Firefox, Google Chrome, Opera und Safari umfassen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps allgemeine Techniken sind, die für jeden Benutzeragenten gelten und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen an den Browser-Support.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie sowohl mit dem [async](/de/docs/Web/HTML/Element/script#attributes) als auch dem [defer](/de/docs/Web/HTML/Element/script#attributes) Attribut kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann die Seitendarstellung gestoppt werden, während JavaScript noch geladen wird. Andernfalls rendert der Browser nichts, was nach den Skriptelementen kommt, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best-Practices befolgen, müssen Sie Ihren Code nicht ändern.

## Beispielstruktur der Seite

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien erforderlich für das Erscheinungsbild der Seite. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängende CSS in separaten Dateien zur Wartung behalten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite erforderlich sind, aber nicht JavaScript, das nur nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien zur Wartung behalten.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbare Seiteninhalte in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das vollständige Herunterladen der Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Durchführung von Interaktivität verwendet werden. Interaktionsskripte können in der Regel erst ausgeführt werden, nachdem die Seite vollständig geladen ist und alle notwendigen Objekte initialisiert wurden. Es besteht keine Notwendigkeit, diese Skripte vor den Seiteninhalten zu laden. Das würde nur das anfängliche Erscheinungsbild des Seitenladens verlangsamen.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien zur Wartung behalten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Leistung lernen](https://web.dev/learn/performance) über web.dev (2023)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
