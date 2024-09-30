---
title: Tipps zur Erstellung von schnell ladenden HTML-Seiten
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine reaktionsschnellere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und der Internetverbindung. Dies kann entscheidend für Seiten mit hohem Verkehrsaufkommen oder für Seiten sein, die aufgrund ungewöhnlicher Umstände, wie z. B. aktuellen Nachrichten, einen Anstieg des Datenverkehrs verzeichnen.

Die Optimierung der Ladeleistung von Seiten ist nicht nur für Inhalte gedacht, die von Narrowband-Dial-Up- oder mobilen Geräten besucht werden. Sie ist ebenso wichtig für Breitbandinhalte und kann selbst bei den schnellsten Verbindungen Ihrer Besucher zu enormen Verbesserungen führen.

## Tipps

### Seitengewicht reduzieren

Das Seitengewicht ist mit Abstand der wichtigste Faktor bei der Seitenladeleistung.

Das Reduzieren des Seitengewichts durch das Entfernen von unnötigen Leerzeichen und Kommentaren, allgemein bekannt als Minimierung, sowie durch das Verschieben von Inline-Skripten und CSS in externe Dateien, kann die Download-Leistung verbessern, ohne dass andere Änderungen in der Seitenstruktur nötig sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Code entfernen. Andere Tools können JavaScript "komprimieren", indem sie die Formatierung des Codes ändern oder den Code verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Anzahl der Dateien minimieren

Das Reduzieren der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der erforderlichen [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite, wodurch die Zeit für das Senden dieser Anfragen und das Empfangen ihrer Antworten verkürzt wird.

Je nach Cache-Einstellungen eines Browsers kann es für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Headers/If-Modified-Since)-Header senden, um zu fragen, ob die Datei seit dem letzten Herunterladen geändert wurde. Zu viel Zeit beim Abfragen der letzten Änderungszeit der referenzierten Dateien kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit für jede dieser Dateien überprüfen muss, bevor er die Seite rendert.

Wenn Sie in Ihrem CSS viele Hintergrundbilder verwenden, können Sie die Anzahl der benötigten HTTP-Abfragen reduzieren, indem Sie die Bilder zu einem zusammenfügen, einem sogenannten Image Sprite. Dann verwenden Sie einfach dasselbe Bild jedes Mal, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben werden, und funktioniert nicht bei jeder Verwendung eines Hintergrundbildes. Dennoch können die geringeren HTTP-Anfragen und das einmalige Caching des Bildes helfen, die Seitenladezeit zu reduzieren.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu verringern. Da die Distanz zwischen dem Ursprungsserver und dem Besucher zunimmt, steigen auch die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und er hat einen Besucher aus Indien; die Seitenladezeit wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Nutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie an Besucher über den dem Nutzer am nächsten gelegenen Netzwerk-Knoten, wodurch die [Latenz](/de/docs/Web/Performance/Understanding_latency) verringert wird.

Weiterführende Literatur:

- [Verständnis von CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domain-Abfragen

Da jede separate Domain Zeit in einer DNS-Anfrage kostet, wächst die Seitenladezeit mit der Anzahl der separaten Domains, die in CSS-Links und JavaScript- und Bildquellen vorkommen.

Dies ist möglicherweise nicht immer praktikabel. Sie sollten jedoch stets darauf achten, nur die minimal erforderliche Anzahl unterschiedlicher Domains auf Ihren Seiten zu verwenden.

### Wiederverwendete Inhalte cachen

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, zwischengespeichert werden und mit geeigneten Ablaufzeiten versehen sind.

Besonders wichtig ist der `Last-Modified` Header. Er ermöglicht ein effizientes Seiten-Caching; durch diesen Header werden dem User-Agent Informationen über die Datei mitgeteilt, die er laden möchte, wie z. B. der Zeitpunkt der letzten Änderung. Die meisten Webserver hängen das `Last-Modified`-Header-Tag automatisch an statische Seiten (z. B. `.html`, `.css`) an, basierend auf dem im Dateisystem gespeicherten Datum der letzten Änderung. Bei dynamischen Seiten (z. B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Vor allem für Seiten, die dynamisch erzeugt werden, ist eine kleine Recherche zu diesem Thema von Vorteil. Es kann etwas komplizierter sein, spart aber viele Anfragen bei Seiten, die normalerweise nicht cachefähig wären.

Weitere Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://de.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Optimale Reihenfolge der Komponenten auf der Seite

Downloaden Sie die Seiteninhalte zuerst, zusammen mit jedem CSS oder JavaScript, das für die anfängliche Anzeige erforderlich sein könnte, damit der Benutzer die schnellste scheinbare Reaktion während des Seitenladens erhält. Diese Inhalte sind typischerweise Text und können daher während des Transports von Textkomprimierung profitieren, was dem Benutzer eine noch schnellere Reaktion bietet.

Alle dynamischen Funktionen, die erfordern, dass die Seite vor ihrer Verwendung vollständig geladen ist, sollten zunächst deaktiviert und dann erst aktiviert werden, nachdem die Seite geladen ist. Dies wird dazu führen, dass das JavaScript nach den Seiteninhalten geladen wird, was das Gesamtbild des Seitenladens verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können beim Laden der Seite aufwendig sein, da der Parser davon ausgehen muss, dass ein Inline-Skript die Seitenstruktur während des Parsings ändern könnte. Die Reduzierung der Verwendung von Inline-Skripten im Allgemeinen und die Reduzierung der Verwendung von `document.write()` zum Ausgeben von Inhalten im Besonderen kann das allgemeine Seitenladen verbessern. Verwenden Sie [DOM APIs zur Manipulation von Seiteninhalten](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents), anstatt `document.write()`.

### Verwenden Sie moderne CSS und gültigen Markup

Die Verwendung von modernem CSS reduziert die Menge an Markup, kann den Bedarf an (Zwischenraum-) Bildern im Hinblick auf das Layout verringern und kann sehr oft Bilder von stilisiertem Text ersetzen, die viel "kosten" mehr als der entsprechende Text-und-CSS.

Das Verwenden von gültigem Markup hat andere Vorteile. Erstens müssen Browser keine Fehlerkorrekturen beim Parsen des HTML vornehmen (was von der philosophischen Frage abgesehen ist, ob Formatvariationen in Benutzereingaben erlaubt und dann programmatisch "korrigiert" oder normalisiert werden sollten; oder ob stattdessen ein striktes, kompromissloses Eingabeformat durchgesetzt werden sollte).

Darüber hinaus ermöglicht gültiges Markup die freie Verwendung anderer Werkzeuge, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen, weigert sich jedoch, auf einer Seite mit ernsthaften Markup-Fehlern zu laufen.

### Teilen Sie Ihre Inhalte in Abschnitte

Tabellen für Layouts sind eine alte Methode, die nicht mehr verwendet werden sollte. Layouts unter Verwendung von [Floats](/de/docs/Learn/CSS/CSS_layout/Floats), [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning), [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn/CSS/CSS_layout/Grids) sollten stattdessen verwendet werden.

Tabellen gelten immer noch als gültiges Markup, sollten aber zur Darstellung tabellarischer Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie vermeiden, Ihre Tabellen zu schachteln.

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

verwenden Sie nicht verschachtelte Tabellen oder `div`s wie in

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

Siehe auch: [CSS-Flexbox-Layout](https://www.w3.org/TR/css-flexbox-1/) und [CSS-Grid-Layout](https://www.w3.org/TR/css-grid-1/) Spezifikationen.

### SVG-Ressourcen minifizieren und komprimieren

Von den meisten Zeichenanwendungen erzeugte SVGs enthalten oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um SVG-Ressourcen mit gzip-Komprimierung zu versehen.

### Minifizieren und komprimieren Sie Ihre Bilder

Große Bilder führen dazu, dass Ihre Seite mehr Zeit zum Laden benötigt. Überlegen Sie, Ihre Bilder zu komprimieren, bevor Sie sie zu Ihrer Seite hinzufügen, indem Sie Komprimierungsfunktionen nutzen, die in Bildbearbeitungswerkzeuge wie Photoshop eingebaut sind, oder ein spezielles Tool wie [Compress Jpeg](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) verwenden.

### Größen für Bilder und Tabellen angeben

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, wird er in der Lage sein, eine Webseite anzuzeigen, ohne den Inhalt umstrukturieren zu müssen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch ärgerliche Änderungen im Layout einer Seite, wenn die Seite fertig geladen ist. Aus diesem Grund sollte für Bilder die `Höhe` und `Breite` immer angegeben werden, wann immer möglich.

Tabellen sollten die CSS-Selektor-Eigenschaften-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten von Spalten mit den [`<col>`](/de/docs/Web/HTML/Element/col)- und den [`<colgroup>`](/de/docs/Web/HTML/Element/colgroup)-Elementen angeben.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eagerly** geladen; das bedeutet, dass das Bild sofort heruntergeladen wird, sobald es im HTML verarbeitet wird. Alle eagerly geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy Loading von Bildern weist den Browser an, die Bilder erst dann zu laden, wenn sie benötigt werden, um das [visuelle Ansichtsfenster](/de/docs/Glossary/visual_viewport) zu zeichnen.

Um ein Bild für Lazy Loading zu markieren, geben Sie dessen [`loading`](/de/docs/Web/HTML/Element/img#loading)-Attribut mit dem Wert `lazy` an. Damit wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass lazy-geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie prüfen, ob der Wert seiner Boolean-Eigenschaft [`complete`](/de/docs/Web/API/HTMLImageElement/complete) auf `true` steht.

### Wählen Sie Ihre User-Agent-Anforderungen weise

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass vernünftige User-Agent-Anforderungen für Projekte festgelegt sind. Erfordern Sie nicht, dass Ihre Inhalte in allen Browsern pixelgenau erscheinen, insbesondere nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dies kann aktuelle Versionen von Firefox, Google Chrome, Opera und Safari umfassen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind, die auf jeden User-Agent anwendbar sind und auf jede Webseite angewendet werden können, unabhängig von den Browser-Unterstützungsanforderungen.

### Verwenden Sie async und defer, wenn möglich

Machen Sie die JavaScript-Skripte so, dass sie sowohl mit dem [async](/de/docs/Web/HTML/Element/script#attributes)- als auch dem [defer](/de/docs/Web/HTML/Element/script#attributes)-Attribut kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann das Rendering der Seite gestoppt werden, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, was nach den Skriptelementen kommt, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute vor allem beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best-Practices befolgen, brauchen Sie Ihren Code nicht zu ändern.

## Beispielstruktur der Seite

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Aussehen der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien zugunsten der Leistung, während Sie nicht zusammenhängende CSS in separaten Dateien für die Wartung halten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladevorgangs der Seite erforderlich sind, nicht jedoch jegliche interaktionsbezogene JavaScript, die erst nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien zugunsten der Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien für die Wartung halten.

  - `{{htmlelement('body')}}`

    Benutzer sichtbare Seiteninhalte in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die ohne das Warten auf das vollständige Herunterladen der Seite angezeigt werden können.

    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Durchführung von Interaktionen verwendet werden. Interaktionsskripte können normalerweise erst ausgeführt werden, nachdem die Seite vollständig geladen ist und alle notwendigen Objekte initialisiert wurden. Es gibt keinen Grund, diese Skripte vor dem Seiteninhalt zu laden. Das verzögert nur das anfängliche Erscheinen des Seitenladevorgangs.

      Minimieren Sie die Anzahl der Dateien zugunsten der Leistung, während Sie nicht zusammenhängendes JavaScript in separaten Dateien für die Wartung halten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- Die exzellenten und sehr vollständigen [Best Practices for Speeding Up Your Website](https://developer.yahoo.com/performance/rules.html) (Yahoo!)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed)
