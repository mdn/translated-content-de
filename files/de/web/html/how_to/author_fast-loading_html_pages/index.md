---
title: Autor schneller ladende HTML-Seiten
slug: Web/HTML/How_to/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Eine optimierte Webseite bietet nicht nur eine reaktionsschnellere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend für stark frequentierte Seiten sein oder für Seiten, die aufgrund ungewöhnlicher Umstände wie aktuellen Nachrichtensensationen einen Traffic-Spitzenwert erleben.
Dieser Artikel beschreibt, wie Sie die Ladezeiten von Seiten basierend auf allgemeinem Wissen und Experimenten verbessern können.

Die Optimierung der Ladeleistung der Seite ist nicht nur für Inhalte wichtig, die von Narrowband- oder Mobilgerät-Besuchern angezeigt werden sollen. Es ist ebenso wichtig für Breitbandinhalte und kann selbst für Ihre Besucher mit den schnellsten Verbindungen zu dramatischen Verbesserungen führen.

## Tipps

### Seitengröße reduzieren

Die Seitengröße ist bei weitem der wichtigste Faktor für die Ladeleistung einer Seite.

Die Reduzierung der Seitengröße durch die Beseitigung unnötiger Leerzeichen und Kommentare, allgemein als Minimierung bekannt, und durch Verschieben von Inline-Skripten und CSS in externe Dateien kann die Download-Leistung verbessern, ohne dass andere Änderungen an der Seitenstruktur erforderlich sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quelltext entfernen. Andere Tools können JavaScript "komprimieren", indem sie die Quelle umformatieren oder die Quelle obfuskieren und lange Bezeichner durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Die Reduzierung der Anzahl von Dateien, die in einer Webseite referenziert werden, verringert die Anzahl der [HTTP](/de-DE/docs/Web/HTTP)-Verbindungen, die zum Herunterladen einer Seite erforderlich sind, und verringert somit die Zeit, die für diese Anfragen benötigt wird, sowie die Zeit für den Erhalt der Antworten.

Je nach den Cache-Einstellungen eines Browsers kann er eine Anfrage mit dem [`If-Modified-Since`](/de-DE/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header für jede referenzierte Datei senden, um festzustellen, ob die Datei seit dem letzten Herunterladen geändert wurde. Zu viel Zeit, die für die Abfrage der letzten Änderung der referenzierten Dateien aufgewendet wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit für jede dieser Dateien überprüfen muss, bevor er die Seite darstellt.

Wenn Sie häufig Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der benötigten HTTP-suche reduzieren, indem Sie die Bilder zu einem Sprite zusammenfassen. Dann verwenden Sie einfach dasselbe Bild jedes Mal, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und funktioniert nicht für jede Verwendung eines Hintergrundbilds. Die geringere Anzahl an HTTP-Anfragen und das Cachen eines einzelnen Bildes können jedoch helfen, die Seitenladezeit zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu verringern. Wenn der Abstand zwischen Ihrem Server-Ursprung und dem Besucher größer wird, steigen die Ladezeiten. Angenommen, Ihr Webserver befindet sich in den Vereinigten Staaten und es gibt einen Besucher aus Indien; die Seitenladezeit wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Distanz zwischen dem Benutzer und Ihrer Webseite zu verkürzen. CDN speichern zwischengespeicherte Versionen Ihrer Webseite und liefern sie über den dem Benutzer am nächsten gelegenen Netzwerkknoten aus, wodurch die [Latenz](/de-DE/docs/Web/Performance/Guides/Understanding_latency) verringert wird.

Weiterführende Literatur:

- [Understanding CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domain-Abfragen

Da jede separate Domain Zeit für eine DNS-Abfrage kostet, steigt die Seitenladezeit mit der Anzahl der verschiedenen Domains, die in CSS-Link(s) und JavaScript- und Bild-src(s) erscheinen.

Dies ist möglicherweise nicht immer praktikabel; dennoch sollten Sie darauf achten, nur die erforderliche Mindestanzahl unterschiedlicher Domains auf Ihren Seiten zu verwenden.

### Zwischenspeichern von wiederverwendeten Inhalten

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden, und zwar mit geeigneten Ablaufzeiten.

Besonders Augenmerk sollte auf den `Last-Modified`-Header gelegt werden. Er ermöglicht ein effizientes Seiten-Caching; durch diesen Header werden dem User-Agent Informationen übermittelt, wann die Datei, die er laden möchte, zuletzt geändert wurde. Die meisten Webserver hängen den `Last-Modified`-Header automatisch an statische Seiten (z. B. `.html`, `.css`) an, basierend auf dem im Dateisystem gespeicherten Änderungsdatum. Bei dynamischen Seiten (z. B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Insbesondere für Seiten, die dynamisch generiert werden, ist es von Vorteil, sich mit diesem Thema näher zu befassen. Es kann etwas aufwendig sein, aber es wird viele Seitenanfragen auf Seiten sparen, die normalerweise nicht cachefähig wären.

Weitere Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag on Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Optimale Anordnung der Komponenten der Seite

Laden Sie den Seiteninhalt zuerst herunter, zusammen mit allen CSS- oder JavaScript-Dateien, die für die anfängliche Anzeige erforderlich sein könnten, damit der Benutzer während des Seitenladens die schnellstmögliche Antwort erhält. Dieser Inhalt ist typischerweise Text und kann daher von einer Textkompression während der Übertragung profitieren, was eine noch schnellere Antwort für den Benutzer bietet.

Alle dynamischen Funktionen, die erfordern, dass die Seite komplett geladen ist, bevor sie verwendet werden, sollten zunächst deaktiviert und erst nach dem Laden der Seite aktiviert werden. Dies führt dazu, dass das JavaScript nach den Seiteninhalten geladen wird, was das Gesamtbild der Seitenladezeit verbessert.

### Verringern Sie die Anzahl der Inline-Skripte

Inline-Skripte können für das Seitenladen teuer sein, da der Parser annehmen muss, dass ein Inline-Skript die Seitenstruktur während des Parsens ändern könnte. Reduzieren Sie generell die Verwendung von Inline-Skripten und insbesondere die Verwendung von `document.write()`, um Inhalte auszugeben, um das allgemeine Seitenladen zu verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de-DE/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstatt `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Der Einsatz moderner CSS reduziert die Menge an Markup, kann den Bedarf an Bildern zur (Spacer-)Gestaltung verringern und sehr oft stilisierte Textbilder ersetzen, die viel mehr kosten als der äquivalente Text und CSS.

Die Verwendung von gültigem Markup hat noch andere Vorteile. Erstens müssen Browser beim Parsen des HTML keine Fehlerkorrektur mehr vornehmen (abgesehen von der philosophischen Frage, ob man Formatabweichungen bei Benutzereingaben zulassen und dann programmgesteuert "korrigieren" oder normalisieren sollte; oder ob man stattdessen ein striktes, nicht-tolerantes Eingabeformat erzwingen sollte).

Außerdem ermöglicht gültiges Markup die freie Verwendung anderer Werkzeuge, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen. Allerdings wird es sich weigern, auf einer Seite mit schwerwiegenden Markup-Fehlern zu laufen.

### Strukturieren Sie Ihre Inhalte

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Layouts mit [Floats](/de-DE/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de-DE/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de-DE/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de-DE/docs/Learn_web_development/Core/CSS_layout/Grids) sollten stattdessen verwendet werden.

Tabellen werden immer noch als gültiges Markup angesehen, sollten aber zur Darstellung tabellarischer Daten verwendet werden. Um dem Browser das schnellere Rendern Ihrer Seite zu erleichtern, sollten Sie das schachteln Ihrer Tabellen vermeiden.

Anstatt tief verschachtelte Tabellen zu verwenden wie in:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

verwenden Sie nicht geschachtelte Tabellen oder Divs wie in

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

Siehe auch: [CSS flexible Box-Layout](/de-DE/docs/Web/CSS/CSS_flexible_box_layout) und [CSS Grid-Layout](/de-DE/docs/Web/CSS/CSS_grid_layout)-Module.

### Minimieren und komprimieren Sie SVG-Assets

Von den meisten Zeichenanwendungen erzeugte SVG enthalten oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server und wenden Sie gzip-Komprimierung für SVG-Assets an.

### Minimieren und komprimieren Sie Ihre Bilder

Große Bilder führen dazu, dass Ihre Seite mehr Zeit zum Laden benötigt. Überlegen Sie, Ihre Bilder zu komprimieren, bevor Sie sie auf Ihre Seite hinzufügen, indem Sie die in Bildbearbeitungstools wie Photoshop integrierten Komprimierungsfunktionen oder spezielle Tools wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) verwenden.

### Geben Sie Größen für Bilder und Tabellen an

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, kann er eine Webseite anzeigen, ohne den Inhalt neu anzuordnen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch störende Änderungen im Layout einer Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder, wann immer möglich, angegeben werden.

Tabellen sollten die CSS-Selektor-Eigenschaften-Kombination verwenden:

```css
table-layout: fixed;
```

und sollten die Breiten der Spalten mit den [`<col>`](/de-DE/docs/Web/HTML/Reference/Elements/col) und den [`<colgroup>`](/de-DE/docs/Web/HTML/Reference/Elements/colgroup)-Elementen spezifizieren.

### Verwenden Sie Lazy-Loading für Bilder

Standardmäßig werden Bilder **eifrig** geladen; d.h. das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wurde. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de-DE/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy-Loading von Bildern weist den Browser an, mit dem Laden von Bildern so lange zu warten, bis sie zum Zeichnen des {{Glossary("visual_viewport", "visuellen Ansichtsbereichs")}} benötigt werden.

Um ein Bild für Lazy-Loading zu markieren, geben Sie seinem [`loading`](/de-DE/docs/Web/HTML/Reference/Elements/img#loading)-Attribut den Wert `lazy` an. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass verzögert geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie prüfen, ob der Wert seiner booleschen [`complete`](/de-DE/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie Ihre User-Agent-Anforderungen weise

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass für Projekte angemessene User-Agent-Anforderungen festgelegt werden. Fordern Sie nicht, dass Ihr Inhalt in allen Browsern pixelgenau erscheint, insbesondere nicht in älteren Browser-Versionen.

Idealerweise sollten sich Ihre grundlegenden Mindestanforderungen auf moderne Browser stützen, die die relevanten Standards unterstützen. Dies kann aktuelle Versionen von Firefox, Google Chrome, Opera und Safari umfassen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind, die für alle User-Agents gelten und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen an die Browser-Unterstützung.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie mit den [async](/de-DE/docs/Web/HTML/Reference/Elements/script#attributes) und [defer](/de-DE/docs/Web/HTML/Reference/Elements/script#attributes)-Attributen kompatibel sind, und verwenden Sie [async](/de-DE/docs/Web/HTML/Reference/Elements/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Skript-Elemente haben.

Damit kann die Seite aufhören zu rendern, während JavaScript noch geladen wird. Andernfalls rendert der Browser nichts, was sich nach den Skriptelementen befindet, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute beim ersten Laden einer Seite viel helfen, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript Best Practices befolgen, besteht keine Notwendigkeit, Ihren Code zu ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`
  - `{{htmlelement('head')}}`
    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während sie nicht verwandte CSS in separaten Dateien für die Wartung aufbewahren.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die während des Ladens der Seite erforderlich **sind**, jedoch kein Interaktions-zugehöriges JavaScript, das erst nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während sie nicht verwandtes JavaScript in separaten Dateien für die Wartung aufbewahren.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbarer Seiteninhalt in kleinen Blöcken (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne darauf warten zu müssen, dass die vollständige Seite heruntergeladen wird.
    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Durchführung von Interaktivität verwendet werden. Interaktionsskripte können in der Regel nur ausgeführt werden, nachdem die Seite vollständig geladen ist und alle erforderlichen Objekte initialisiert wurden. Es gibt keinen Grund, diese Skripte vor dem Seiteninhalt zu laden. Das verlangsamt nur das anfängliche Erscheinungsbild des Seitenladevorgangs.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während sie nicht verwandtes JavaScript in separaten Dateien für die Wartung aufbewahren.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Learn performance](https://web.dev/learn/performance) über web.dev (2023)
- Werkzeuge zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
