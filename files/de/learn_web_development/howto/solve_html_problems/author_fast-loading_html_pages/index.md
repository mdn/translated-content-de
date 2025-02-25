---
title: Tipps zum Erstellen schnell ladender HTML-Seiten
slug: Learn_web_development/Howto/Solve_HTML_problems/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine reaktionsschnellere Nutzung für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann für stark frequentierte Webseiten oder Webseiten, deren Besuchsaufkommen aufgrund ungewöhnlicher Umstände wie z. B. bei aktuellen Nachrichten erhöht ist, entscheidend sein.

Die Optimierung der Ladeleistung von Seiten ist nicht nur für Inhalte wichtig, die von einer Schmalband- oder Mobilgerät-Verbindung betrachtet werden. Es ist genauso wichtig für Breitbandinhalte und kann selbst für Ihre Besucher mit den schnellsten Verbindungen zu erheblichen Verbesserungen führen.

## Tipps

### Seitengröße reduzieren

Die Seitengröße ist bei weitem der wichtigste Faktor für die Ladeleistung einer Seite.

Die Reduzierung der Seitengröße durch das Entfernen unnötiger Leerzeichen und Kommentare, allgemein als Minimierung bekannt, und das Verschieben von Inline-Skripten und CSS in externe Dateien kann die Download-Performance mit minimalem Bedarf an Änderungen in der Seitenstruktur verbessern.

Werkzeuge wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quellcode entfernen. Andere Werkzeuge können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder obfuskieren und lange Bezeichner durch kürzere Versionen ersetzen.

### Anzahl der Dateien minimieren

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der [HTTP](/de/docs/Web/HTTP)-Verbindungen, die zum Herunterladen einer Seite erforderlich sind, was wiederum die Zeit für das Senden dieser Anfragen und den Empfang ihrer Antworten reduziert.

Abhängig von den Cache-Einstellungen eines Browsers kann er eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Headers/If-Modified-Since)-Header für jede referenzierte Datei senden und fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit, die mit der Überprüfung der letzten Änderung von referenzierten Dateien verbracht wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit dieser Dateien prüfen muss, bevor er die Seite rendert.

Wenn Sie in Ihrem CSS häufig Hintergrundbilder verwenden, können Sie die Anzahl der notwendigen HTTP-Abfragen reduzieren, indem Sie die Bilder zu einer sogenannten Bild-Sprite kombinieren. Dann verwenden Sie jedes Mal dasselbe Bild für einen Hintergrund und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und eignet sich nicht für jede Verwendung eines Hintergrundbildes. Allerdings können weniger HTTP-Anfragen und das Cachen eines einzelnen Bildes helfen, die Ladezeit der Seite zu reduzieren.

### Nutzen Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu reduzieren. Je größer die Distanz zwischen Ihrem ursprünglichen Server und dem Besucher ist, desto länger werden die Ladezeiten sein. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und ein Besucher kommt aus Indien; die Ladezeit der Seite wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Distanz zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und stellen sie Besuchern über den netzwerknahest gelegenen Knoten zur Verfügung, wodurch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [Understanding CDNs](https://www.imperva.com/Learn_web_development/Extensions/Performance/what-is-cdn-how-it-works/)

### Domain-Abfragen reduzieren

Da jede separate Domain Zeit in einer DNS-Abfrage kostet, wächst die Ladezeit der Seite mit der Anzahl der unterschiedlichen Domains, die in CSS-Links und JavaScript- und Bild-Quellen erscheinen.

Dies mag nicht immer praktikabel sein; jedoch sollten Sie stets darauf achten, nur die notwendige Mindestanzahl von verschiedenen Domains in Ihren Seiten zu verwenden.

### Wiederverwendete Inhalte cachen

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden, und zwar mit entsprechenden Ablaufzeiten.

Achten Sie insbesondere auf den `Last-Modified`-Header. Er ermöglicht ein effizientes Seiten-Caching; durch diesen Header wird dem Benutzeragenten Informationen über die Datei bereitgestellt, die er laden möchte, wie z. B. wann sie zuletzt geändert wurde. Die meisten Webserver fügen automatisch den `Last-Modified`-Header zu statischen Seiten (z. B. `.html`, `.css`) hinzu, basierend auf dem im Dateisystem gespeicherten letzten Änderungsdatum. Bei dynamischen Seiten (z. B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Insbesondere für Seiten, die dynamisch generiert werden, ist eine kleine Recherche zu diesem Thema von Vorteil. Es kann etwas aufwendig sein, aber es wird viele Seitenanfragen auf Seiten einsparen, die normalerweise nicht cachefähig wären.

Mehr Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Komponenten der Seite optimal anordnen

Laden Sie zuerst die Seiteninhalte herunter, zusammen mit allen CSS- oder JavaScript-Dateien, die für die anfängliche Anzeige erforderlich sein könnten, damit der Benutzer während des Ladens der Seite die schnellste scheinbare Antwort erhält. Dieser Inhalt ist typischerweise Text und kann daher von Textkomprimierung während der Übertragung profitieren, was dem Benutzer eine noch schnellere Antwort bietet.

Alle dynamischen Funktionen, die auf ein vollständig geladenes Dokument angewiesen sind, sollten zunächst deaktiviert werden und erst aktiviert werden, nachdem die Seite geladen wurde. Dadurch wird das Laden von JavaScript nach den Seiteninhalten aufgeschoben, was das allgemeine Erscheinungsbild des Seitenladens verbessert.

### Anzahl der Inline-Skripte reduzieren

Inline-Skripte können teuer für das Laden einer Seite sein, da der Parser annehmen muss, dass ein Inline-Skript die Seitenstruktur während des Parsens ändern könnte. Die Verwendung von Inline-Skripten im Allgemeinen zu reduzieren, und speziell die Verwendung von `document.write()`, um Inhalte auszugeben, kann das Gesamtladen der Seite verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstatt `document.write()`.

### Moderne CSS verwenden und gültiges Markup nutzen

Der Einsatz moderner CSS reduziert die Menge an Markup, kann den Bedarf an (Spacer-)Bildern in Bezug auf das Layout reduzieren und sehr oft Bilder mit stilisiertem Text ersetzen, die „mehr kosten“ als der gleichwertige Text- und CSS-Einsatz.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser keine Fehlerkorrekturen durchführen, wenn sie das HTML parsen (abgesehen von der philosophischen Frage, ob Formatvariationen in Benutzereingaben zugelassen und dann programmgesteuert „korrigiert“ oder normalisiert werden sollen; oder ob stattdessen ein striktes, rigoroses Eingabeformat durchgesetzt wird).

Darüber hinaus ermöglicht gültiges Markup die freie Verwendung anderer Werkzeuge, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es wird jedoch bei schweren Markup-Fehlern nicht ausgeführt.

### Teilen Sie Ihre Inhalte in Blöcke auf

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Layouts, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) nutzen, sollten stattdessen verwendet werden.

Tabellen sind noch gültiges Markup, sollten jedoch zur Darstellung von Tabelle-Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie auf verschachtelte Tabellen verzichten.

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

Siehe auch: [CSS Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### Komprimieren und minimieren Sie SVG-Assets

SVG, das von den meisten Zeichenanwendungen erzeugt wird, enthält oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um SVG-Assets mit gzip-Komprimierung zu komprimieren.

### Bilder minimieren und komprimieren

Große Bilder führen dazu, dass Ihre Seite länger zum Laden braucht. Ziehen Sie in Betracht, Ihre Bilder vor dem Hinzufügen auf Ihre Seite zu komprimieren, indem Sie in Bildbearbeitungstools wie Photoshop eingebaute Komprimierungsfunktionen verwenden oder spezielle Tools wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) nutzen.

### Größen für Bilder und Tabellen angeben

Wenn der Browser die Höhe und/oder Breite Ihrer Bilder und Tabellen sofort bestimmen kann, wird er in der Lage sein, eine Webseite anzuzeigen, ohne den Inhalt neu zu ordnen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch lästige Änderungen im Layout einer Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder, wann immer möglich, angegeben werden.

Tabellen sollten die CSS Selektor-Eigenschaft-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten der Spalten mithilfe der [`<col>`](/de/docs/Web/HTML/Element/col) und [`<colgroup>`](/de/docs/Web/HTML/Element/colgroup) Elemente spezifizieren.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eagerly** geladen, d. h. das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle eagerly geladenen Bilder werden gerendert, bevor das `load`-Ereignis des Fensters gesendet wird. Wenn Bilder im Lazy-Loading-Verfahren geladen werden, teilt dies dem Browser mit, dass er das Laden von Bildern aufschieben soll, bis sie benötigt werden, um das {{Glossary("visual_viewport", "visuelle Viewport")}} zu zeichnen.

Um ein Bild für Lazy Loading zu kennzeichnen, geben Sie sein [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut mit dem Wert `lazy` an. Mit dieser Einstellung wird das Bild nur dann geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass lazily geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen wurde, indem Sie überprüfen, ob der Wert seiner Booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie die Anforderungen an den User-Agent mit Bedacht

Um die größten Verbesserungen im Seitendesign zu erreichen, sollten Sie sicherstellen, dass für Projekte vernünftige User-Agent-Anforderungen festgelegt sind. Fordern Sie nicht, dass Ihre Inhalte in allen Browsern pixelgenau erscheinen, insbesondere nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Überlegung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann aktuelle Versionen von Firefox, Google Chrome, Opera und Safari umfassen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gängige gesunde Techniken sind, die auf jeden Benutzeragenten anwendbar sind und auf jede Webseite, unabhängig von den Anforderungen an die Browser-Unterstützung.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie sowohl mit dem [async](/de/docs/Web/HTML/Element/script#attributes)- als auch mit dem [defer](/de/docs/Web/HTML/Element/script#attributes)-Attribut kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes), wann immer es möglich ist, besonders wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite aufhören zu rendern, während JavaScript noch lädt. Ansonsten wird der Browser nichts rendern, was nach den Skriptelementen kommt, die diese Attribute nicht haben.

Hinweis: Obwohl diese Attribute sehr hilfreich sind, wenn eine Seite zum ersten Mal geladen wird, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best Practices befolgen, müssen Sie Ihren Code nicht ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite benötigt werden. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes CSS in separate Dateien für die Wartung halten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite benötigt werden, jedoch nicht JavaScript für Interaktionen, die nur nach dem Laden der Seite ausgeführt werden können.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängende JavaScript-Dateien für die Wartung getrennt halten.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbare Seiteninhalte in kleinen Blöcken (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das Herunterladen der vollständigen Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die verwendet werden, um Interaktivität zu ermöglichen. Interaktionsskripte können normalerweise nur ausgeführt werden, nachdem die Seite vollständig geladen wurde und alle notwendigen Objekte initialisiert sind. Es gibt keinen Grund, diese Skripte vor dem Laden der Seiteninhalte zu laden. Das würde nur die anfängliche Anzeige der Seite verlangsamen.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht zusammenhängende JavaScript-Dateien für die Wartung getrennt halten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Einführung in Performance](https://web.dev/learn/performance) über web.dev (2023)
- Werkzeuge zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
