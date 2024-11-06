---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel gibt Informationen über die neuen Funktionen und wesentlichen Fehlerbehebungen in dieser Version sowie Links zu detaillierterer Dokumentation für Web-Entwickler und Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente wurden implementiert.

### DOM

- Die Eigenschaft [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) wird nun bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der Attribute `responseType` und `withCredentials` von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bei synchronen Anfragen wurde entfernt. Ein Versuch, dies zu tun, wirft eine Ausnahme `NS_ERROR_DOM_INVALID_ACCESS_ERR`. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht das Vibrieren des Geräts, wenn unterstützt; dies ist als `mozVibrate()` auf Gecko implementiert.
- `navigator.mozApps` gibt ein [`Apps`](/de/docs/DOM/Apps)-Objekt zurück, das Sie verwenden können, um [offene Webanwendungen](/de/docs/Web/Progressive_web_apps) zu installieren und zu verwalten.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Verbraucher von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die diese genutzt haben, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung für das Abbrechen von Anfragen für Animationsrahmen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt nun einen Anforderungs-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in den DOM4-Spezifikationen eingeführt wurden, werden nun unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Durch den Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) wird nun das vorherige Vollbildelement wiederhergestellt, wenn sich ein anderes Element im Vollbildmodus befand, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullScreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Argument-lose Form mehr. Diese Form wurde kaum genutzt und wird wahrscheinlich nicht Teil des Standards.
- SVG-als-Bild kann nun in ein Canvas gezeichnet werden, ohne [das Canvas zu verfälschen](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Die nicht standardisierte Eigenschaft `countryCode` des `GeoPositionAddress`-Interfaces wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen nun [CORS](/de/docs/Web/HTTP/CORS).
- In der Vergangenheit wurden beim Folgen eines Links die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt gesetzten Werte auf der neuen Seite beibehalten. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dies macht Firefox mit allen anderen Browsern gleichwertig.

### CSS

- Die Eigenschaft [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) wird jetzt unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Conditional Rules](/de/docs/CSS/CSS3#conditional_rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können jetzt zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/Syntax) und [CSS At-Regeln](/de/docs/Web/CSS/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Das [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-DOM-Interface unterstützt nun die Methode `getElementById`.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt nun binäre Nachrichten (siehe [Firefox-Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde nicht mehr mit Präfix versehen (siehe [Firefox-Bug 666349](https://bugzil.la/666349) und [Firefox-Bug 695635](https://bugzil.la/695635)).
- Bisher waren die mit WebSockets in Firefox gesendeten und empfangenen Nachrichten auf eine Größe von 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Einschränkungen der Speicherkapazität ihre tatsächliche Größe begrenzen können, unterstützt Firefox dies).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch einer der folgenden Typen sein: Date, Arrays und Float (und nicht nur String und Integer).
- Ab sofort werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; zum Beispiel betrachte dies:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die `autoIncrement`-Zähler der Objektspeicher über alle Objektspeicher einer Datenbank hinweg geteilt, während laut Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies ist jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu erstellen.
- Es ist jetzt möglich, einen Mehrfacheintrag-Index zu erstellen (siehe [`IDBObjectStore.createIndex`-Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters)).
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis ist jetzt aufsteigend; zudem wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann jetzt Dateien/Blobs speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` bei der Erstellung eines [Objektspeichers](/de/docs/Web/API/IDBDatabase/createObjectStore) oder eines [Indexes](/de/docs/Web/API/IDBObjectStore/createIndex) akzeptieren ([Firefox-Bug 694138](https://bugzil.la/694138)).

### Netzwerk

- Die Änderung in Firefox 8, die den Support für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da dies einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält nun einen Identifikator, der [den Server darüber informiert, ob es sich bei dem zugreifenden Firefox um ein Telefon oder ein Tablet handelt](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwickler-Tools

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Form zum Bearbeiten und Erstellen von CSS-Stilblättern in Echtzeit.
- Die [Quellcode-Anzeige](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter zur Konfiguration der Zeichensatzinterpretation beim Lesen des Eingabestreams.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen komfortablen, einfach zu bedienenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwickler-Tools verwendet wird.

### Interface-Änderungen

- Das Interface `mozIAsyncHistory` hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu prüfen, ob eine URI besucht wurde.
- Ein neues Interface `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Das Interface `nsIMacDockSupport` unterstützt jetzt das Hinzufügen eines Text-Badge zu dem App-Icon im Dock mittels seines neuen Attributs `badgeText`.
- Im Interface `nsINavHistoryResultObserver` müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstelle der veralteten Methoden `containerOpened()` und `containerClosed()`.

#### Entfernte Interfaces

Die folgenden Interfaces waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die Datei `omni.jar` wird nun [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>) genannt.

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Beginn des Schwebens des Mauszeigers und der Anzeige eines Tooltips.

### Änderungen am Build-System

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Sonstige Änderungen

- Add-ons, die seit langer Zeit nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; dies betrifft derzeit Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
