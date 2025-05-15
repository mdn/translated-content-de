---
title: Erstellen Sie schnell ladende HTML-Seiten
slug: Web/HTML/How_to/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: f08eb478696946da474cf5c5ecdead4f5955f1b4
---

{{HTMLSidebar}}

Eine optimierte Webseite bietet nicht nur eine reaktionsfähigere Seite für Ihre Besucher, sondern reduziert auch die Last auf Ihren Webservern und Ihrer Internetverbindung. Dies kann entscheidend für stark frequentierte Seiten oder Seiten sein, die durch außergewöhnliche Umstände wie aktuelle Nachrichten einen Anstieg des Verkehrsaufkommens verzeichnen.
Dieser Artikel beschreibt, wie die Ladezeiten von Seiten basierend auf allgemeinem Wissen und Experimenten verbessert werden können.

Die Optimierung der Ladeleistung der Seite ist nicht nur für Inhalte gedacht, die von Narrowband-Wähl- oder Mobilgeräten angesehen werden. Sie ist genauso wichtig für Breitbandinhalte und kann zu dramatischen Verbesserungen selbst für Ihre Besucher mit den schnellsten Verbindungen führen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist bei weitem der wichtigste Faktor für die Ladeleistung von Seiten.

Die Reduzierung des Seitengewichts durch die Eliminierung von überflüssigen Leerzeichen und Kommentaren, bekannt als Minimierung, und durch das Verschieben von Inline-Skripten und CSS in externe Dateien kann die Download-Leistung verbessern, mit minimalem Bedarf an weiteren Änderungen der Seitenstruktur.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und überflüssige Leerzeichen aus dem gültigen HTML-Quellcode entfernen. Andere Tools können JavaScript "komprimieren", indem sie den Quelltext neu formatieren oder den Quelltext verschleiern und lange Kennungen durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Die Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der erforderlichen [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite und reduziert somit die Zeit für das Senden dieser Anfragen und für den Empfang ihrer Antworten.

Abhängig von den Cache-Einstellungen eines Browsers kann er für jede referenzierte Datei eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header senden und fragen, ob die Datei seit dem letzten Herunterladen geändert wurde. Zu viel Zeit mit der Abfrage der letzten Änderung der referenzierten Dateien zu verbringen, kann die anfängliche Anzeige der Webseite verzögern, da der Browser den Änderungszeitpunkt jeder dieser Dateien überprüfen muss, bevor er die Seite anzeigt.

Wenn Sie in Ihrem CSS häufig Hintergrundbilder verwenden, können Sie die Anzahl der erforderlichen HTTP-Abfragen reduzieren, indem Sie die Bilder in einem sogenannten Bildsprite kombinieren. Dann wenden Sie einfach dasselbe Bild jedes Mal an, wenn Sie es für einen Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Dimensionen haben, und wird nicht für jede Verwendung eines Hintergrundbildes funktionieren. Dennoch können die geringere Anzahl von HTTP-Anfragen und das Caching eines einzigen Bildes dazu beitragen, die Ladezeit der Seite zu reduzieren.

### Verwenden Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Entfernung zwischen Ihrem Server und Ihrem Besucher zu reduzieren. Je größer die Entfernung zwischen Ihrem Server-Ursprung und dem Besucher ist, desto größer werden die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den USA und er hat einen Besucher aus Indien; die Ladezeit der Seite wird für den indischen Besucher im Vergleich zu einem Besucher aus den USA viel höher sein.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, die zusammenarbeiten, um die Entfernung zwischen dem Benutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie den Besuchern über den dem Benutzer am nächsten gelegenen Netzwerkknoten aus, wodurch die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency) reduziert wird.

Weiterführende Literatur:

- [Verständnis von CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie die Anzahl der Domain-Lookups

Da jede separate Domain Zeit in einem DNS-Lookup kostet, wird die Ladezeit der Seite mit der Anzahl der in CSS-Links und JavaScript- und Bildquellen enthaltenen separaten Domains wachsen.

Dies ist möglicherweise nicht immer praktisch; dennoch sollten Sie immer darauf achten, nur die minimal notwendige Anzahl unterschiedlicher Domains auf Ihren Seiten zu verwenden.

### Cachen Sie wiederverwendeten Inhalt

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden, und zwar mit geeigneten Ablaufzeiten.

Achten Sie insbesondere auf den `Last-Modified`-Header. Er ermöglicht ein effizientes Seiten-Caching; durch diesen Header werden dem Benutzeragenten Informationen über die Datei übermittelt, die er laden möchte, wie z. B. wann sie zuletzt geändert wurde. Die meisten Webserver fügen statischen Seiten (z. B. `.html`, `.css`) automatisch den `Last-Modified`-Header hinzu, basierend auf dem im Dateisystem gespeicherten Datum der letzten Änderung. Bei dynamischen Seiten (z. B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Insbesondere für Seiten, die dynamisch generiert werden, ist ein wenig Recherche zu diesem Thema von Vorteil. Es kann etwas aufwendig sein, spart jedoch viele Seitenanfragen auf Seiten, die normalerweise nicht zwischengespeichert werden könnten.

Weiterführende Informationen:

1. [HTTP conditional Get für RSS Hacker](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag in der Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Optimale Reihenfolge der Komponenten auf der Seite

Laden Sie die Seiteninhalte zuerst herunter, zusammen mit allen CSS- oder JavaScript-Dateien, die für die anfängliche Anzeige erforderlich sein könnten, sodass der Benutzer die schnellste scheinbare Reaktion während des Seitenladens erhält. Diese Inhalte sind typischerweise Text und können daher beim Transport von Textkompression profitieren, wodurch dem Benutzer eine noch schnellere Reaktion geboten wird.

Alle dynamischen Funktionen, die das vollständige Laden der Seite erfordern, bevor sie verwendet werden können, sollten zunächst deaktiviert und dann erst aktiviert werden, nachdem die Seite geladen ist. Dadurch wird das JavaScript nach den Seiteninhalten geladen, was das Gesamtbild des Seitenladevorgangs verbessert.

### Reduzieren Sie die Anzahl von Inline-Skripten

Inline-Skripte können für das Laden der Seite kostspielig sein, da der Parser davon ausgehen muss, dass ein Inline-Skript die Seitenstruktur ändern könnte, während das Parsen im Gange ist. Die allgemeine Reduzierung der Nutzung von Inline-Skripten und die Reduzierung der Verwendung von `document.write()`, um Inhalte auszugeben, kann das gesamte Laden der Seite verbessern. Verwenden Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstatt `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Der Einsatz von modernem CSS reduziert die Menge an Markup, kann den Bedarf an (Füll-)Bildern in Bezug auf das Layout verringern und kann sehr oft Bilder von stilisiertem Text ersetzen – die "kosten" viel mehr als der entsprechende Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser bei der Analyse von HTML keine Fehlerkorrektur vornehmen (dies ist abgesehen vom philosophischen Thema, ob Formatvariationen in Benutzereingaben erlaubt und dann programmgesteuert "korrigiert" oder normalisiert werden sollen, oder ob stattdessen ein strenges, kein-Toleranz-Eingabeformat durchgesetzt werden sollte).

Zudem ermöglicht gültiges Markup die freie Verwendung anderer Tools, die Ihre Webseiten _vorverarbeiten_ können. Beispielsweise kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es wird jedoch sich weigern, auf einer Seite mit schwerwiegenden Markup-Fehlern zu laufen.

### Teilen Sie Ihre Inhalte in Abschnitte auf

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Layouts, die [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) verwenden, sollten stattdessen verwendet werden.

Tabellen gelten immer noch als gültiges Markup, sollten jedoch zum Anzeigen tabellarischer Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller darzustellen, sollten Sie das Schachteln Ihrer Tabellen vermeiden.

Anstatt tief geschachtelte Tabellen wie diese zu verwenden:

```html
<table>
  <table>
    <table>
      …
    </table>
  </table>
</table>
```

verwenden Sie nicht geschachtelte Tabellen oder `divs` wie in

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

### Minimieren und komprimieren Sie SVG-Assets

SVGs, die von den meisten Zeichenanwendungen erstellt werden, enthalten oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um für SVG-Assets gzip-Komprimierung anzuwenden.

### Minimieren und komprimieren Sie Ihre Bilder

Große Bilder führen dazu, dass Ihre Seite mehr Zeit zum Laden benötigt. Ziehen Sie in Betracht, Ihre Bilder zu komprimieren, bevor Sie sie auf Ihrer Seite hinzufügen, indem Sie Komprimierungsfunktionen in Bildbearbeitungstools wie Photoshop verwenden oder ein spezielles Tool wie [JPEG komprimieren](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/) nutzen.

### Legen Sie Größen für Bilder und Tabellen fest

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, kann er eine Webseite anzeigen, ohne den Inhalt neu zu laden. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch lästige Änderungen im Layout der Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder, wann immer möglich, angegeben werden.

Tabellen sollten die CSS-Selektor-Eigenschaften-Kombination verwenden:

```css
table-layout: fixed;
```

und die Breiten der Spalten mithilfe der [`<col>`](/de/docs/Web/HTML/Reference/Elements/col)- und der [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup)-Elemente festlegen.

### Verwenden Sie das Lazy-Loading für Bilder

Standardmäßig werden Bilder **eagerly** geladen; das heißt, das Bild wird abgerufen und gerendert, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy-Loading von Bildern weist den Browser an, das Laden der Bilder zu verschieben, bis sie benötigt werden, um den {{Glossary("visual_viewport", "Visual Viewport")}} zu zeichnen.

Um ein Bild für das Lazy-Loading zu markieren, geben Sie sein [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut mit einem Wert von `lazy` an. Mit dieser Einstellung wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass lazy-geladene Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können feststellen, ob ein gegebenes Bild geladen ist, indem Sie überprüfen, ob der Wert seiner Booleschen [`complete`](/de/docs/Web/API/HTMLImageElement/complete)-Eigenschaft `true` ist.

### Wählen Sie Ihre Anforderungen an den Benutzeragenten weise

Um die größten Verbesserungen im Design der Seite zu erzielen, stellen Sie sicher, dass angemessene Anforderungen an Benutzeragenten für Projekte angegeben werden. Verlangen Sie nicht, dass Ihre Inhalte in allen Browsern pixelgenau erscheinen, insbesondere nicht in veralteten Browsern.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen auf der Betrachtung moderner Browser basieren, die die relevanten Standards unterstützen. Dazu können aktuelle Versionen von Firefox, Google Chrome, Opera und Safari gehören.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind, die für jeden Benutzeragenten gelten und auf jede Webseite angewendet werden können, unabhängig von den Browserunterstützungsanforderungen.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie sowohl mit den [async](/de/docs/Web/HTML/Reference/Elements/script#attributes)- als auch mit den [defer](/de/docs/Web/HTML/Reference/Elements/script#attributes)-Attributen kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Skriptelemente haben.

Damit kann die Seite das Rendern stoppen, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, das nach den Skriptelementen kommt, die diese Attribute nicht haben.

> [!NOTE]
> Auch wenn diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sich ihrer bedienen, aber nicht annehmen, dass sie in allen Browsern funktionieren. Wenn Sie bereits alle JavaScript-Best Practices einhalten, besteht kein Bedarf, Ihren Code zu ändern.

## Beispielseite Struktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während nicht zusammenhängende CSS in separaten Dateien zur Wartung bleiben.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die während des Ladens der Seite **erforderlich** sind, aber kein interaktionsbezogenes JavaScript, das erst nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während nicht zusammenhängendes JavaScript in separaten Dateien zur Wartung bleibt.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbare Seiteninhalte in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf den vollständigen Download der Seite warten zu müssen.

    - `{{htmlelement('script')}}`

      Alle Skripte, die für Interaktivität verwendet werden. Interaktionsskripte können in der Regel erst nach dem vollständigen Laden der Seite und nach der Initialisierung aller erforderlichen Objekte ausgeführt werden. Diese Skripte vor den Inhalten der Seite zu laden, ist nicht nötig. Das verlangsamt nur das anfängliche Erscheinungsbild des Seitenladens.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während nicht zusammenhängendes JavaScript in separaten Dateien zur Wartung bleibt.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Lernen Sie die Leistung](https://web.dev/learn/performance) über web.dev (2023)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
