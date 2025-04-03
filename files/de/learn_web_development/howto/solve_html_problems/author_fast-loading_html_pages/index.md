---
title: Tipps zur Erstellung schnell ladender HTML-Seiten
slug: Learn_web_development/Howto/Solve_HTML_problems/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Diese Tipps basieren auf allgemeinem Wissen und Experimenten.

Eine optimierte Webseite bietet nicht nur eine reaktionsschnellere Seite für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und die Internetverbindung. Dies kann entscheidend für stark frequentierte Seiten oder Seiten sein, die aufgrund ungewöhnlicher Umstände wie aktuellen Nachrichten hohe Zugriffe verzeichnen.

Die Optimierung der Ladeleistung der Seite ist nicht nur für Inhalte wichtig, die von Schmalband- oder mobilen Geräten aus angesehen werden. Sie ist genauso wichtig für Breitbandinhalte und kann selbst für Ihre Besucher mit den schnellsten Verbindungen drastische Verbesserungen mit sich bringen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist bei weitem der wichtigste Faktor für die Ladeleistung der Seite.

Durch die Eliminierung unnötiger Leerzeichen und Kommentare, allgemein als Minimierung bekannt, und durch das Verschieben von Inline-Skripten und CSS in externe Dateien, kann die Download-Leistung verbessert werden, mit minimalem Bedarf an weiteren Änderungen an der Seitenstruktur.

Werkzeuge wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quellcode entfernen. Andere Werkzeuge können JavaScript "komprimieren", indem sie den Quellcode umformatieren oder den Quellcode verschleiern und lange Bezeichner durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Durch die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien wird die Anzahl der erforderlichen [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite verringert, wodurch die Zeit für das Senden dieser Anfragen und das Empfangen ihrer Antworten reduziert wird.

Abhängig von den Cache-Einstellungen eines Browsers kann dieser eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header für jede referenzierte Datei senden, um zu fragen, ob die Datei seit dem letzten Herunterladen geändert wurde. Zu viel Zeit, die mit der Abfrage der letzten Änderungszeit der referenzierten Dateien verbracht wird, kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit für jede dieser Dateien überprüfen muss, bevor er die Seite rendert.

Wenn Sie häufig Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der benötigten HTTP-Abfragen reduzieren, indem Sie die Bilder zu einem einzigen Bild kombinieren, bekannt als Image-Sprite. Dann wenden Sie einfach das gleiche Bild jedes Mal an, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Abmessungen haben, und funktioniert nicht für jede Verwendung eines Hintergrundbildes. Dennoch können weniger HTTP-Anfragen und das Caching eines einzigen Bildes dazu beitragen, die Ladezeit der Seite zu verkürzen.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu reduzieren. Da die Distanz zwischen Ihrem Server-Ursprung und dem Besucher zunimmt, werden die Ladezeiten zunehmen. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und hat einen Besucher aus Indien; die Ladezeit der Seite wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Distanz zwischen dem Benutzer und Ihrer Webseite zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Webseite und liefern sie über den dem Benutzer am nächsten gelegenen Netzwerkknoten, wodurch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) verringert wird.

Weiterführende Lektüre:

- [Verständnis von CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domänenabfragen

Da jede separate Domäne Zeit für eine DNS-Abfrage kostet, wird die Ladezeit der Seite mit der Anzahl der in CSS-Links und JavaScript- und Bild-Srcs erscheinenden separaten Domänen wachsen.

Dies ist vielleicht nicht immer praktisch; jedoch sollten Sie stets darauf achten, nur die minimal notwendige Anzahl an verschiedenen Domänen auf Ihren Seiten zu verwenden.

### Verwenden Sie zwischengespeicherte Inhalte erneut

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden, und zwar mit angemessenen Ablaufzeiten.

Achten Sie besonders auf den `Last-Modified`-Header. Er ermöglicht ein effizientes Zwischenspeichern von Seiten; durch diesen Header werden dem Benutzer-Agenten Informationen übermittelt über die Datei, die er laden möchte, wie zum Beispiel, wann sie zuletzt geändert wurde. Die meisten Webserver hängen automatisch den `Last-Modified`-Header an statische Seiten (z.B. `.html`, `.css`) an, basierend auf dem im Dateisystem gespeicherten letzten Änderungsdatum. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) kann dies natürlich nicht gemacht werden, und der Header wird nicht gesendet.

Für Seiten, die dynamisch erzeugt werden, ist daher einige Recherche zu diesem Thema von Vorteil. Es kann etwas aufwändig sein, aber es wird viele Anfragen auf Seiten sparen, die normalerweise nicht zwischenspeicherbar wären.

Weitere Informationen:

1. [HTTP Conditional Get für RSS-Hacker](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Ordnen Sie die Komponenten der Seite optimal

Laden Sie zuerst die Seiteninhalte zusammen mit CSS oder JavaScript, die für die anfängliche Anzeige erforderlich sein können, damit der Benutzer die schnellstmögliche Rückmeldung während des Ladens der Seite erhält. Diese Inhalte sind typischerweise Text und können daher von einer Textkompression während der Übertragung profitieren, was eine noch schnellere Rückmeldung für den Benutzer bietet.

Alle dynamischen Funktionen, die erfordern, dass die Seite vollständig geladen ist, bevor sie verwendet werden, sollten zunächst deaktiviert und erst nach dem Laden der Seite aktiviert werden. Dies bewirkt, dass das JavaScript nach den Seiteninhalten geladen wird, was das Gesamterscheinungsbild des Seitenladens verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können teuer für das Seitenladen sein, da der Parser annehmen muss, dass ein Inline-Skript die Seitenstruktur ändern könnte, während das Parsen im Gange ist. Eine allgemeine Reduzierung der Verwendung von Inline-Skripten und der besonderen Reduzierung der Verwendung von `document.write()` zur Ausgabe von Inhalten kann das allgemeine Laden einer Seite verbessern. Verwenden Sie [DOM APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstatt `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Der Einsatz moderner CSS reduziert die Menge an Markup, kann den Bedarf an Leerbildern in Bezug auf Layout reduzieren und kann oft Bilder von stilisiertem Text ersetzen, die "mehr kosten" als der entsprechende Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens, Browser müssen keine Fehlerkorrektur durchführen, wenn sie das HTML parsen (dies abgesehen von der philosophischen Frage, ob Formatvariationen in Benutzereingaben zugelassen und dann programmgesteuert "korrigiert" oder normalisiert werden sollen, oder ob stattdessen ein striktes, nicht tolerantes Eingabeformat durchgesetzt werden soll).

Darüber hinaus ermöglicht gültiges Markup die freie Verwendung anderer Werkzeuge, die Ihre Webseiten vorverarbeiten können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es wird jedoch die Verarbeitung einer Seite mit ernsthaften Markup-Fehlern verweigern.

### Teilen Sie Ihre Inhalte auf

Die Verwendung von Tabellen für Layouts ist eine veraltete Methode, die nicht mehr verwendet werden sollte. Layouts, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) nutzen, sollten stattdessen verwendet werden.

Tabellen sind immer noch als gültiges Markup anerkannt, sollten aber zur Anzeige tabellarischer Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie das Verschachteln Ihrer Tabellen vermeiden.

Statt tief verschachtelter Tabellen wie in:

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

### Minifizieren und komprimieren Sie SVG-Ressourcen

Von den meisten Zeichenanwendungen erstellte SVGs enthalten oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um gzip-Kompression für SVG-Ressourcen anzuwenden.

### Minifizieren und komprimieren Sie Ihre Bilder

Große Bilder verursachen, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder zu komprimieren, bevor Sie sie zu Ihrer Seite hinzufügen, indem Sie die Kompressionsfunktionen verwenden, die in Bildbearbeitungsprogramme wie Photoshop integriert sind, oder ein spezialisiertes Werkzeug wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/).

### Geben Sie Größen für Bilder und Tabellen an

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, kann er eine Webseite anzeigen, ohne den Inhalt neu fließen lassen zu müssen. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert störende Änderungen im Layout einer Seite, wenn die Seite vollständig geladen ist. Aus diesem Grund sollten `height` und `width` für Bilder immer angegeben werden, wenn möglich.

Tabellen sollten die Kombination aus CSS-Selektor und Eigenschaft verwenden:

```css
table-layout: fixed;
```

und sollten Breiten von Spalten mit den `<col>`- und `<colgroup>`-Elementen angeben.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eifrig** geladen; das heißt, das Bild wird geladen und gerendert, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das `load`-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy Loading von Bildern weist den Browser an, das Laden von Bildern hinauszuzögern, bis sie benötigt werden, um den {{Glossary("visual_viewport", "visuellen Ansichtsbereich")}} zu zeichnen.

Um ein Bild für das Lazy Loading zu kennzeichnen, geben Sie sein `loading`-Attribut mit dem Wert `lazy` an. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass lazy-geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein bestimmtes Bild geladen ist, indem Sie überprüfen, ob der Wert seiner booleschen `complete`-Eigenschaft `true` ist.

### Wählen Sie Ihre User-Agent-Anforderungen weise

Um die größte Verbesserung im Seitendesign zu erreichen, stellen Sie sicher, dass vernünftige User-Agent-Anforderungen für Projekte festgelegt sind. Verlangen Sie nicht, dass Ihre Inhalte in allen Browsern pixelgenau aussehen, besonders nicht in älteren Browser-Versionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Berücksichtigung moderner Browser basieren, die die relevanten Standards unterstützen. Dazu können aktuelle Versionen von Firefox, Google Chrome, Opera und Safari gehören.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstandstechniken sind, die auf jeden User-Agent angewendet werden können und auf jede Webseite angewendet werden können, unabhängig von den Browser-Support-Anforderungen.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie mit den Attributen [async](/de/docs/Web/HTML/Element/script#attributes) und [defer](/de/docs/Web/HTML/Element/script#attributes) kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Element/script#attributes), wann immer möglich, besonders wenn Sie mehrere Script-Elemente haben.

Damit kann die Seite aufhören zu rendern, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, das nach den Script-Elementen kommt, die diese Attribute nicht haben.

Hinweis: Auch wenn diese Attribute helfen, wenn eine Seite das erste Mal geladen wird, sollten Sie sie verwenden, aber nicht annehmen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best Practices befolgen, besteht keine Notwendigkeit, Ihren Code zu ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes CSS in separaten Dateien zur Wartung halten.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite erforderlich sind, jedoch nicht JavaScript zur Interaktion, das erst ausgeführt werden kann, nachdem die Seite geladen ist.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes JavaScript in separaten Dateien zur Wartung halten.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbare Seiteninhalte in kleinen Blöcken (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das vollständige Herunterladen der Seite zu warten.

    - `{{htmlelement('script')}}`

      Alle Skripte, die für die Interaktivität verwendet werden. Interaktionsskripte können typischerweise erst ausgeführt werden, nachdem die Seite vollständig geladen ist und alle notwendigen Objekte initialisiert wurden. Es besteht keine Notwendigkeit, diese Skripte vor den Seiteninhalten zu laden. Das würde nur das anfängliche Erscheinen des Seitenladens verlangsamen.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während Sie nicht verwandtes JavaScript in separaten Dateien zur Wartung halten.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Leistungslernen](https://web.dev/learn/performance) via web.dev (2023)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
