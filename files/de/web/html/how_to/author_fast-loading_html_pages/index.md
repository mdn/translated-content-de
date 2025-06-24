---
title: Erstellen Sie schnell ladende HTML-Seiten
slug: Web/HTML/How_to/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Eine optimierte Webseite bietet nicht nur eine reaktionsschnellere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend sein für stark frequentierte Seiten oder Seiten, die aufgrund außergewöhnlicher Umstände wie Eilmeldungen einen Anstieg des Datenverkehrs verzeichnen. Dieser Artikel beschreibt, wie Sie die Ladezeiten von Seiten basierend auf allgemeinem Wissen und Experimenten verbessern können.

Die Optimierung der Seitenladeleistung ist nicht nur für Inhalte wichtig, die von Narrowband-Dial-Up- oder mobilen Geräten angesehen werden. Sie ist genauso wichtig für Inhalte im Breitbandbereich und kann selbst für Ihre Besucher mit den schnellsten Verbindungen dramatische Verbesserungen bringen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist bei weitem der wichtigste Faktor für die Leistungsfähigkeit beim Laden von Seiten.

Die Reduzierung des Seitengewichts durch das Entfernen von unnötigen Leerzeichen und Kommentaren, allgemein bekannt als Minimierung, sowie durch das Verschieben von Inline-Skripten und CSS in externe Dateien kann die Download-Leistung verbessern, ohne dass wesentliche Änderungen an der Seitenstruktur erforderlich sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus validen HTML-Quellcodes entfernen. Andere Tools können JavaScript komprimieren, indem sie den Quellcode neu formatieren oder den Quellcode verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Die Reduzierung der Anzahl der Dateien, die auf einer Webseite referenziert werden, verringert die Anzahl der [HTTP](/de/docs/Web/HTTP)-Verbindungen, die zum Herunterladen einer Seite erforderlich sind, wodurch die Zeit für das Senden dieser Anfragen und den Empfang ihrer Antworten verkürzt wird.

Je nach Cache-Einstellungen des Browsers kann dieser für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header senden und fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit, die für die Abfrage der letzten Änderungszeit der referenzierten Dateien aufgewendet wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit jeder dieser Dateien überprüfen muss, bevor die Seite gerendert werden kann.

Wenn Sie in Ihrem CSS häufig Hintergrundbilder verwenden, können Sie die Anzahl der benötigten HTTP-Anfragen reduzieren, indem Sie die Bilder zu einem Bildsprite kombinieren. Dann verwenden Sie einfach dasselbe Bild jedes Mal, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und funktioniert nicht für jede Verwendung eines Hintergrundbildes. Jedoch können die reduzierte Anzahl von HTTP-Anfragen und das Caching eines einzigen Bildes helfen, die Ladezeit der Seite zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu verringern. Da die Entfernung zwischen Ihrem Ursprungsserver und dem Besucher zunimmt, steigen die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und er hat einen Besucher aus Indien; die Seitenladezeit wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern diese den Besuchern über den Netzwerkknoten, der dem Benutzer am nächsten ist, wodurch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [Understanding CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie die Anzahl der Domain-Lookups

Da jede separate Domain Zeit in einem DNS-Lookup kostet, wachsen die Seitenladezeiten proportional zur Anzahl der separaten Domains, die in CSS-Links und JavaScript- und Bild-Quellen erscheinen.

Dies ist möglicherweise nicht immer praktikabel; dennoch sollten Sie stets darauf achten, in Ihren Seiten nur die unbedingt notwendige Anzahl verschiedener Domains zu verwenden.

### Cachen Sie wiederverwendete Inhalte

Stellen Sie sicher, dass alle Inhalte, die gecacht werden können, mit entsprechenden Ablaufzeiten gecacht werden.

Achten Sie insbesondere auf den `Last-Modified`-Header. Er ermöglicht ein effizientes Cachen von Seiten; über diesen Header werden dem User-Agent Informationen über die Datei, die geladen werden soll, übermittelt, z. B. wann sie zuletzt geändert wurde. Die meisten Webserver hängen den `Last-Modified`-Header automatisch an statische Seiten (z. B. `.html`, `.css`) an, basierend auf dem zuletzt geänderten Datum, das im Dateisystem gespeichert ist. Bei dynamischen Seiten (z. B. `.php`, `.aspx`) ist dies natürlich nicht möglich und der Header wird nicht gesendet.

Daher ist es besonders für Seiten, die dynamisch generiert werden, vorteilhaft, sich mit diesem Thema zu befassen. Es kann etwas kompliziert sein, aber es wird eine Menge bei Seitenanfragen sparen, die normalerweise nicht cachebar wären.

Weitere Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Ordnen Sie die Komponenten der Seite optimal an

Laden Sie die Seiteninhalte zuerst herunter, zusammen mit jedem CSS oder JavaScript, das für die anfängliche Anzeige erforderlich sein könnte, sodass der Benutzer die schnellstmögliche sichtbare Reaktion während des Ladens der Seite erhält. Diese Inhalte sind typischerweise Text und können daher von der Textkompression beim Übertragen profitieren, was dem Benutzer eine noch schnellere Reaktion bietet.

Alle dynamischen Funktionen, die erfordern, dass die Seite vollständig geladen ist, bevor sie verwendet werden können, sollten zunächst deaktiviert und dann erst aktiviert werden, nachdem die Seite geladen wurde. Dadurch wird das JavaScript erst nach den Seiteninhalten geladen, was das gesamte Erscheinungsbild des Seitenladevorgangs verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können teuer sein, wenn es um das Laden von Seiten geht, da der Parser davon ausgehen muss, dass ein Inline-Skript die Seitenstruktur während des Parsings ändern könnte. Die Reduzierung der Verwendung von Inline-Skripten im Allgemeinen und der Nutzung von `document.write()` im Besonderen zur Ausgabe von Inhalten kann das gesamte Laden der Seite verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstatt `document.write()`.

### Verwenden Sie moderne CSS und gültigen Markup

Der Einsatz moderner CSS reduziert die Anzahl der Markups, kann den Bedarf an (Platzhalter-)Bildern in Bezug auf das Layout verringern und kann sehr oft Bilder von stilisiertem Text ersetzen — das "kosten" viel mehr als der entsprechende Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser keine Fehlerkorrektur durchführen, wenn sie das HTML parsen (dies ist abgesehen von der philosophischen Frage, ob Formatabweichungen in Benutzereingaben zugelassen und dann programmatisch "korrigiert" oder normalisiert werden sollten oder ob stattdessen ein striktes, fehlerfreies Eingabeformat erzwungen werden sollte).

Darüber hinaus ermöglicht gültiger Markup die freie Verwendung anderer Tools, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; jedoch wird es sich weigern, auf einer Seite mit schwerwiegenden Markup-Fehlern zu laufen.

### Teilen Sie Ihre Inhalte in Abschnitte

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Layouts, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) nutzen, sollten stattdessen verwendet werden.

Tabellen werden immer noch als gültiger Markup betrachtet, sollten jedoch zur Darstellung von tabellarischen Daten verwendet werden. Um dem Browser die schnellere Darstellung Ihrer Seite zu ermöglichen, sollten Sie verhindern, dass Ihre Tabellen verschachtelt werden.

Anstatt Tabellen tief zu verschachteln, wie in:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

verwenden Sie nicht verschachtelte Tabellen oder divs, wie in

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

Weitere Informationen: [CSS flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Module.

### Minifizieren und komprimieren Sie SVG-Assets

SVG, das von den meisten Zeichenanwendungen erzeugt wird, enthält oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, wenden Sie gzip-Komprimierung auf SVG-Assets an.

### Minifizieren und komprimieren Sie Ihre Bilder

Große Bilder verursachen, dass Ihre Seite länger zum Laden braucht. Betrachten Sie die Möglichkeit, Ihre Bilder zu komprimieren, bevor Sie sie auf Ihrer Seite hinzufügen, indem Sie die Komprimierungsfunktionen in Bildbearbeitungstools wie Photoshop verwenden oder ein spezialisiertes Tool wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) verwenden.

### Geben Sie Größen für Bilder und Tabellen an

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, kann er eine Webseite anzeigen, ohne den Inhalt neu anordnen zu müssen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout einer Seite, wenn die Seite fertig geladen ist. Aus diesem Grund sollten `height` und `width` für Bilder angegeben werden, wann immer möglich.

Tabellen sollten die CSS-Selektor: Eigenschafts-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten der Spalten unter Verwendung der [`<col>`](/de/docs/Web/HTML/Reference/Elements/col) und der [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup)-Elemente spezifizieren.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eifrig** geladen; das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Das Umschalten auf Lazy Loading von Bildern weist den Browser an, das Laden von Bildern hinauszuzögern, bis sie benötigt werden, um das {{Glossary("visual_viewport", "visuelle Viewport")}} zu zeichnen.

Um ein Bild für Lazy Loading zu kennzeichnen, geben Sie sein [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut mit dem Wert `lazy` an. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass Lazy-loaded Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie überprüfen, ob der Wert seiner booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie Ihre Anforderungen an Nutzeragenten weise aus

Um die größten Verbesserungen im Seitenentwurf zu erzielen, stellen Sie sicher, dass für Projekte vernünftige Anforderungen an Nutzeragenten festgelegt sind. Verlangen Sie nicht, dass Ihre Inhalte in allen Browsern, insbesondere nicht in älteren Versionen von Browsern, pixelgenau erscheinen.

Idealerweise sollten Ihre Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann aktuelle Versionen von Firefox, Google Chrome, Opera und Safari einschließen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind und auf jede Nutzeragent anwendbar sind und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen der Browserunterstützung.

### Verwenden Sie async und defer, wenn möglich

Machen Sie die JavaScript-Skripte so, dass sie mit den Attributen [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) und [defer](/de/docs/Web/HTML/Reference/Elements/script#attributes) kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Skript-Elemente haben.

Dadurch kann das Rendern der Seite gestoppt werden, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, was sich nach den Skript-Elementen befindet, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best Practices befolgen, besteht keine Notwendigkeit, Ihren Code zu ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Aussehen der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes CSS in separaten Dateien für die Wartung halten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite erforderlich sind, jedoch keine interaktionsbezogenen JavaScripts, die erst nach dem Laden der Seite ausgeführt werden können.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandte JavaScript in separaten Dateien für die Wartung halten.

  - `{{htmlelement('body')}}`

    Sichtbaren Seiteninhalt in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das vollständige Herunterladen der Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die für die Interaktivität verwendet werden sollen. Interaktionsskripte können typischerweise erst ausgeführt werden, nachdem die Seite vollständig geladen ist und alle erforderlichen Objekte initialisiert wurden. Es besteht keine Notwendigkeit, diese Skripte vor den Seiteninhalten zu laden. Das würde nur das anfängliche Erscheinungsbild des Seitenladevorgangs verlangsamen.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandte JavaScript in separaten Dateien für die Wartung halten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Learn performance](https://web.dev/learn/performance) über web.dev (2023)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
