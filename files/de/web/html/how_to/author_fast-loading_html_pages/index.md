---
title: Autor schnelle ladende HTML-Seiten
slug: Web/HTML/How_to/Author_fast-loading_HTML_pages
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{HTMLSidebar}}

Eine optimierte Webseite sorgt nicht nur für ein reaktionsfähigeres Erlebnis für Ihre Besucher, sondern reduziert auch die Belastung Ihrer Webserver und Internetverbindung. Dies kann entscheidend für hoch frequentierte Seiten oder Seiten sein, die aufgrund ungewöhnlicher Umstände wie aktuellen Nachrichtenmitteilungen einen Anstieg des Datenverkehrs erleben.
Dieser Artikel beschreibt, wie Sie die Ladezeiten von Seiten basierend auf gängigem Wissen und Experimenten verbessern können.

Die Optimierung der Ladeleistung von Seiten ist nicht nur für Inhalte wichtig, die von Besuchern mit Schmalband-Wählverbindung oder mobilen Geräten angezeigt werden. Es ist genauso wichtig für Breitbandinhalte und kann sogar für Besucher mit den schnellsten Verbindungen zu dramatischen Verbesserungen führen.

## Tipps

### Reduzieren Sie das Seitengewicht

Das Seitengewicht ist bei weitem der wichtigste Faktor für die Ladeleistung von Seiten.

Eine Reduzierung des Seitengewichts durch Eliminierung unnötiger Leerzeichen und Kommentare, allgemein bekannt als Minimierung, und durch Verschieben von Inline-Scripten und CSS in externe Dateien kann die Download-Leistung verbessern, ohne dass andere Änderungen an der Seitenstruktur erforderlich sind.

Tools wie [HTML Tidy](https://www.html-tidy.org/) können automatisch führende Leerzeichen und zusätzliche Leerzeilen aus gültigem HTML-Quellcode entfernen. Andere Tools können JavaScript "komprimieren", indem sie den Quellcode neu formatieren oder obfuskieren und lange Bezeichner durch kürzere Versionen ersetzen.

### Minimieren Sie die Anzahl der Dateien

Eine Reduzierung der Anzahl der in einer Webseite referenzierten Dateien verringert die Anzahl der benötigten [HTTP](/de/docs/Web/HTTP)-Verbindungen zum Herunterladen einer Seite und reduziert damit die Zeit, die für das Senden dieser Anfragen und das Empfangen der Antworten benötigt wird.

Abhängig von den Cache-Einstellungen eines Browsers kann dieser eine Anfrage mit dem [`If-Modified-Since`](/de/docs/Web/HTTP/Reference/Headers/If-Modified-Since)-Header für jede referenzierte Datei senden, um zu fragen, ob die Datei seit dem letzten Download geändert wurde. Zu viel Zeit für das Abfragen der letzten Änderungszeit der referenzierten Dateien kann die anfängliche Anzeige der Webseite verzögern, da der Browser die Änderungszeit für jede dieser Dateien überprüfen muss, bevor er die Seite rendert.

Wenn Sie häufig Hintergrundbilder in Ihrem CSS verwenden, können Sie die Anzahl der erforderlichen HTTP-Abfragen reduzieren, indem Sie die Bilder zu einem einzigen Bildsprite zusammenfügen. Dann wenden Sie einfach dasselbe Bild jedes Mal an, wenn Sie es als Hintergrund benötigen, und passen die x/y-Koordinaten entsprechend an. Diese Technik funktioniert am besten mit Elementen, die begrenzte Dimensionen haben werden, und eignet sich nicht für jede Verwendung eines Hintergrundbildes. Dennoch können die geringere Anzahl an HTTP-Anfragen und das einmalige Zwischenspeichern des Bildes dazu beitragen, die Ladezeit der Seite zu verkürzen.

### Nutzen Sie ein Content Delivery Network (CDN)

Für die Zwecke dieses Artikels ist ein CDN ein Mittel, um die physische Distanz zwischen Ihrem Server und Ihrem Besucher zu verringern. Je größer die Entfernung zwischen Ihrem Ursprungsserver und dem Besucher ist, desto länger sind die Ladezeiten. Angenommen, Ihr Website-Server befindet sich in den Vereinigten Staaten und es gibt einen Besucher aus Indien; die Ladezeit der Seite wird für den indischen Besucher viel höher sein als für einen Besucher aus den USA.

Ein CDN ist ein geografisch verteiltes Netzwerk von Servern, das zusammenarbeitet, um die Entfernung zwischen dem Nutzer und Ihrer Website zu verkürzen. CDNs speichern zwischengespeicherte Versionen Ihrer Website und liefern sie über den dem Nutzer am nächsten gelegenen Netzwerkknoten aus und reduzieren so die [Latenz](/de/docs/Web/Performance/Guides/Understanding_latency).

Weiterführende Literatur:

- [Understanding CDNs](https://www.imperva.com/learn/performance/what-is-cdn-how-it-works/)

### Reduzieren Sie Domain-Abfragen

Da jede separate Domain Zeit in einem DNS-Lookup kostet, wächst die Ladezeit der Seite mit der Anzahl der separaten Domains, die in CSS-Links und JavaScript- oder Bildquellen erscheinen.

Dies mag nicht immer praktisch sein; jedoch sollten Sie immer darauf achten, nur die notwendige Mindestanzahl an unterschiedlichen Domains in Ihren Seiten zu verwenden.

### Cache für wiederverwendete Inhalte

Stellen Sie sicher, dass alle Inhalte, die zwischengespeichert werden können, auch zwischengespeichert werden, und dies mit geeigneten Ablaufzeiten.

Achten Sie insbesondere auf den `Last-Modified`-Header. Dieser ermöglicht ein effizientes Seiten-Caching; mittels dieses Headers werden dem User-Agent Informationen über die Datei, die er laden möchte, bereitgestellt, wie z.B. wann sie zuletzt geändert wurde. Die meisten Webserver fügen den `Last-Modified`-Header automatisch statischen Seiten (z.B. `.html`, `.css`) hinzu, basierend auf dem zuletzt im Dateisystem gespeicherten Änderungsdatum. Bei dynamischen Seiten (z.B. `.php`, `.aspx`) ist dies natürlich nicht möglich, und der Header wird nicht gesendet.

Insbesondere für Seiten, die dynamisch generiert werden, ist eine gewisse Recherche zu diesem Thema von Vorteil. Es kann ein wenig anspruchsvoll sein, aber es wird viele Anfragen auf Seiten einsparen, die normalerweise nicht zwischenspeicherbar wären.

Weitere Informationen:

1. [HTTP Conditional Get for RSS Hackers](https://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](https://annevankesteren.nl/2005/05/http-304)
3. [HTTP ETag auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag)
4. [Caching in HTTP](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)

### Ordnen Sie die Komponenten der Seite optimal an

Laden Sie zuerst die Seiteninhalte herunter, zusammen mit jedem CSS oder JavaScript, das möglicherweise für die anfängliche Anzeige erforderlich ist, damit der Benutzer die schnellste sichtbare Antwort während des Seitenladens erhält. Dieser Inhalt ist typischerweise Text und kann daher von der Textkomprimierung während des Transits profitieren, was eine noch schnellere Antwort auf den Benutzer ermöglicht.

Dynamische Funktionen, die erfordern, dass die Seite vollständig geladen ist, bevor sie verwendet werden können, sollten anfänglich deaktiviert und erst nach dem Laden der Seite aktiviert werden. Dies bewirkt, dass JavaScript nach den Seiteninhalten geladen wird, was das gesamte Erscheinungsbild des Seitenladens verbessert.

### Reduzieren Sie die Anzahl der Inline-Skripte

Inline-Skripte können für das Laden von Seiten kostspielig sein, da der Parser annehmen muss, dass ein Inline-Skript die Seitenstruktur während des Parsing-Vorgangs ändern könnte. Eine Reduzierung der Nutzung von Inline-Skripten im Allgemeinen sowie eine Verminderung der Verwendung von `document.write()` zur Ausgabe von Inhalten speziell kann das gesamte Seitenladen verbessern. Nutzen Sie [DOM-APIs zur Manipulation von Seiteninhalten](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting), anstelle von `document.write()`.

### Verwenden Sie moderne CSS und gültiges Markup

Die Verwendung von modernem CSS reduziert die Menge an Markup, kann den Bedarf an (Spacer-)Bildern im Hinblick auf das Layout verringern und kann sehr oft Bilder von stilisiertem Text ersetzen — die viel mehr "kosten" als der entsprechende Text und CSS.

Die Verwendung von gültigem Markup hat weitere Vorteile. Erstens müssen Browser keine Fehlerkorrektur beim Parsen von HTML durchführen (dies ist abgesehen von der philosophischen Frage, ob eine Formatabweichung bei Benutzereingaben erlaubt und dann programmatisch "korrigiert" oder normalisiert werden soll; oder ob stattdessen ein strenges, toleranzfreies Eingabeformat erzwungen werden soll).

Zudem ermöglicht gültiges Markup den freien Einsatz anderer Werkzeuge, die Ihre Webseiten _vorverarbeiten_ können. Zum Beispiel kann [HTML Tidy](https://www.html-tidy.org/) Leerzeichen und optionale End-Tags entfernen; es wird jedoch die Ausführung auf einer Seite mit schwerwiegenden Markup-Fehlern verweigern.

### Teilen Sie Ihren Inhalt in Stücke auf

Tabellen für Layouts sind eine veraltete Methode, die nicht mehr verwendet werden sollte. Layouts sollten stattdessen [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats), [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) oder [Grids](/de/docs/Learn_web_development/Core/CSS_layout/Grids) nutzen.

Tabellen werden immer noch als gültiges Markup betrachtet, sollten jedoch zum Anzeigen tabellarischer Daten verwendet werden. Um dem Browser zu helfen, Ihre Seite schneller zu rendern, sollten Sie das Verschachteln Ihrer Tabellen vermeiden.

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

zu verwenden, nutzen Sie nicht verschachtelte Tabellen oder Divs wie in

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

Siehe auch: [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)-Module.

### Minifizieren und komprimieren Sie SVG-Assets

SVG, das von den meisten Zeichenanwendungen produziert wird, enthält oft unnötige Metadaten, die entfernt werden können. Konfigurieren Sie Ihre Server, um gzip-Kompression für SVG-Assets anzuwenden.

### Minifizieren und komprimieren Sie Ihre Bilder

Große Bilder verursachen, dass Ihre Seite mehr Zeit zum Laden benötigt. Erwägen Sie, Ihre Bilder vor dem Hinzufügen zur Seite zu komprimieren, indem Sie Komprimierungsfunktionen verwenden, die in Bildbearbeitungswerkzeuge wie Photoshop eingebaut sind, oder durch die Nutzung eines spezialisierten Tools wie [Compress JPEG](https://compressjpeg.com/) oder [Tiny PNG](https://tinypng.com/).

### Geben Sie Größen für Bilder und Tabellen an

Wenn der Browser sofort die Höhe und/oder Breite Ihrer Bilder und Tabellen bestimmen kann, kann er eine Webseite anzeigen, ohne dass der Inhalt neu angeordnet werden muss. Dies beschleunigt nicht nur die Anzeige der Seite, sondern verhindert auch ärgerliche Änderungen im Layout einer Seite, wenn das Laden der Seite abgeschlossen ist. Aus diesem Grund sollten `height` und `width` für Bilder immer, wenn möglich, angegeben werden.

Tabellen sollten die Kombination von CSS-Selektor und Eigenschaft verwenden:

```css
table-layout: fixed;
```

und Breiten von Spalten sollten die [`<col>`](/de/docs/Web/HTML/Reference/Elements/col) und die [`<colgroup>`](/de/docs/Web/HTML/Reference/Elements/colgroup)-Elemente angeben.

### Verwenden Sie Lazy Loading für Bilder

Standardmäßig werden Bilder **eifrig** geladen; das bedeutet, dass das Bild abgerufen und gerendert wird, sobald es im HTML verarbeitet wird. Alle eifrig geladenen Bilder werden gerendert, bevor das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters gesendet wird. Der Wechsel zum Lazy Loading von Bildern weist den Browser an, das Laden von Bildern aufzuschieben, bis sie zum Zeichnen des {{Glossary("visual_viewport", "visuellen Viewports")}} benötigt werden.

Um ein Bild für Lazy Loading zu markieren, geben Sie sein [`loading`](/de/docs/Web/HTML/Reference/Elements/img#loading)-Attribut mit einem Wert von `lazy` an. Damit wird das Bild nur geladen, wenn es benötigt wird.

```html
<img src="./images/footerlogo.jpg" loading="lazy" alt="MDN logo" />
```

Beachten Sie, dass Lazy-Loaded-Bilder möglicherweise nicht verfügbar sind, wenn das `load`-Ereignis ausgelöst wird. Sie können prüfen, ob ein bestimmtes Bild geladen ist, indem Sie überprüfen, ob der Wert seiner Boolean-Eigenschaft [`complete`](/de/docs/Web/API/HTMLImageElement/complete) `true` ist.

### Wählen Sie Ihre Anforderungen an den User-Agent mit Bedacht

Um die größten Verbesserungen im Seitendesign zu erzielen, stellen Sie sicher, dass für Projekte angemessene Anforderungen an den User-Agent festgelegt sind. Erfordern Sie nicht, dass Ihr Inhalt in allen Browsern pixelgenau erscheint, insbesondere nicht in älteren Browserversionen.

Idealerweise sollten Ihre grundlegenden Mindestanforderungen basierend auf der Überlegung moderner Browser, die die relevanten Standards unterstützen, basieren. Dies kann die aktuellen Versionen von Firefox, Google Chrome, Opera und Safari einschließen.

Beachten Sie jedoch, dass viele der in diesem Artikel aufgeführten Tipps gesunder Menschenverstand sind, die auf jeden User-Agent anwendbar sind und auf jede Webseite angewendet werden können, unabhängig von den Anforderungen an die Browserunterstützung.

### Verwenden Sie async und defer, wenn möglich

Gestalten Sie die JavaScript-Skripte so, dass sie mit den Attributen [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) und [defer](/de/docs/Web/HTML/Reference/Elements/script#attributes) kompatibel sind, und verwenden Sie [async](/de/docs/Web/HTML/Reference/Elements/script#attributes) wann immer möglich, insbesondere wenn Sie mehrere Script-Elemente haben.

Damit kann die Seite aufhören zu rendern, während JavaScript noch geladen wird. Andernfalls wird der Browser nichts rendern, das sich hinter den Script-Elementen befindet, die diese Attribute nicht besitzen.

> [!NOTE]
> Obwohl diese Attribute beim ersten Laden einer Seite sehr hilfreich sind, sollten Sie sie verwenden, aber nicht davon ausgehen, dass sie in allen Browsern funktionieren werden. Wenn Sie bereits alle JavaScript Best Practices befolgen, besteht kein Grund, Ihren Code zu ändern.

## Beispielseitenstruktur

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      CSS-Dateien, die für das Erscheinungsbild der Seite erforderlich sind. Minimieren Sie die Anzahl der Dateien für die Leistung, während nicht zusammenhängendes CSS in separaten Dateien für die Wartung belassen wird.

    - `{{htmlelement('script')}}`

      JavaScript-Dateien für Funktionen, die **während** des Ladens der Seite erforderlich sind, jedoch nicht für interaktive JavaScript, das erst nach dem Laden der Seite ausgeführt werden kann.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während nicht zusammenhängendes JavaScript in separaten Dateien für die Wartung belassen wird.

  - `{{htmlelement('body')}}`

    Für den Benutzer sichtbare Seiteninhalte in kleinen Abschnitten (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`), die angezeigt werden können, ohne auf das vollständige Herunterladen der Seite warten zu müssen.

    - `{{htmlelement('script')}}`

      Alle Skripte, die zur Ausführung von Interaktivität verwendet werden. Interaktionsskripte können normalerweise erst nach dem vollständigen Laden der Seite und der Initialisierung aller erforderlichen Objekte ausgeführt werden. Diese Skripte müssen nicht vor den Seiteninhalten geladen werden. Das würde nur das anfängliche Erscheinen des Seitenladens verlangsamen.

      Minimieren Sie die Anzahl der Dateien für die Leistung, während nicht zusammenhängendes JavaScript in separaten Dateien für die Wartung belassen wird.

## Siehe auch

- Buch: ["Speed Up Your Site" von Andy King](https://www.websiteoptimization.com/)
- [Learn performance](https://web.dev/learn/performance) über web.dev (2023)
- Tools zur Analyse und Optimierung der Leistung: [Google PageSpeed Tools](https://developers.google.com/speed) und [PageSpeed Insights](https://pagespeed.web.dev/)
