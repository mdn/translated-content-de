---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{FirefoxSidebar}}

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel enthält Informationen zu den neuen Funktionen und wesentlichen behobenen Fehlern in dieser Version sowie Links zu detaillierteren Dokumentationen für Webentwickler und Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` bei den {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die Eigenschaft [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) wird jetzt für HTML-Elemente unterstützt.
- [HTML-Parsing im `XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) wird unterstützt.
- Die Unterstützung der Attribute `responseType` und `withCredentials` von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bei synchronen Anfragen wurde entfernt. Der Versuch, dies zu verwenden, führt zu einer Ausnahme des Typs `NS_ERROR_DOM_INVALID_ACCESS_ERR`. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht das Vibrieren des Geräts, falls unterstützt; diese wurde als `mozVibrate()` in Gecko implementiert.
- `navigator.mozApps` gibt ein [`Apps`](/de/docs/DOM/Apps)-Objekt zurück, das verwendet werden kann, um [offene Webanwendungen](/de/docs/Web/Progressive_web_apps) zu installieren und zu verwalten.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Nutzer von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) sollten stattdessen eine Callback-Funktion übergeben.
- Die Unterstützung für das Abbrechen von Animationsframe-Anfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt eine Anforderungs-ID zurück, die an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben werden kann, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in den DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist nun standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das vorherige Vollbild-Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullScreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Version mehr ohne Argument. Diese Form wurde kaum verwendet und ist unwahrscheinlich, Teil des Standards zu werden.
- SVG als Bild kann nun in ein Canvas gezeichnet werden, ohne [das Canvas zu verunreinigen](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Die nicht standardisierte Eigenschaft `countryCode` der `GeoPositionAddress`-Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/CORS).
- Früher wurden beim Befolgen eines Links die Werte des [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekts in der neuen Seite beibehalten. Jetzt wird für die neue Seite ein neues `navigator`-Objekt erstellt, wodurch sich Firefox wie alle anderen Browser verhält.

### CSS

- Die Eigenschaft [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) wird nun unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Bedingungsregeln](/de/docs/CSS/CSS3#conditional_rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können jetzt in [@media](/de/docs/Web/CSS/@media) und [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden (siehe [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS-At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderungen._

### SVG

- Die DOM-Schnittstelle [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) unterstützt nun die Methode `getElementById`.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt binäre Nachrichten (siehe [Firefox-Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde unprefixed (siehe [Firefox-Bug 666349](https://bugzil.la/666349) und [Firefox-Bug 695635](https://bugzil.la/695635)).
- Zuvor waren Nachrichten, die mit WebSockets in Firefox gesendet und empfangen wurden, auf 16 MB begrenzt; jetzt können sie bis zu 2 GB groß sein (obwohl dies möglicherweise durch Speicherkapazitätsbeschränkungen begrenzt wird).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch Typen wie Date, Arrays und Float (und nicht nur String und Integer) annehmen.
- Transaktionen werden jetzt beim Erstellen der Transaktion gestartet, nicht mehr erst, wenn die erste Anfrage gestellt wird. Zum Beispiel:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Object Store den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden Auto-Increment-Zähler für Objekt-Stores in einer Datenbank gemeinsam genutzt. Dies wurde nun geändert, sodass gemäß Spezifikation jeder Objekt-Store einen separaten Zähler hat.
- Es ist nun möglich, einen Index mit einem leeren `keyPath` [zu erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist nun möglich, einen Multi-Entry-Index zu erstellen (siehe [Parameter von `IDBObjectStore.createIndex`](/de/docs/Web/API/IDBObjectStore/createIndex#parameters)).
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis wird jetzt weitergereicht; zudem wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann nun zur Speicherung von Dateien/Blobs verwendet werden.
- IndexedDB unterstützt nun komplexe Key Paths, z.B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB akzeptiert nun Arrays als `keyPath`, wenn ein [Object Store](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox-Bug 694138](https://bugzil.la/694138)).

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung von Anführungszeichen als Begrenzungszeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da dies einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt ein Kennzeichen, das [es dem Server ermöglicht zu erkennen, ob Firefox, der die Anfrage schickt, auf einem Telefon oder Tablet läuft](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), sofern Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine flexible Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zusammenzustellen.
- Die Funktion [Quellcode anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter, mit dem die Zeichensatzinterpretation beim Lesen des Eingabestreams konfiguriert werden kann.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen praktischen, einfach zu verwendenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der auch in _Scratchpad_ und anderen Entwicklungswerkzeugen integriert ist.

### Schnittstellenänderungen

- Die Schnittstelle `mozIAsyncHistory` hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die Schnittstelle `nsIMacDockSupport` unterstützt jetzt das Hinzufügen eines Text-Badges zum Anwendungssymbol im Dock mit ihrem neuen Attribut `badgeText`.
- In der Schnittstelle `nsINavHistoryResultObserver` müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` statt der veralteten Methoden `containerOpened()` und `containerClosed()` implementieren.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [Bug 707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Änderungen am Design

- Die Datei `omni.jar` heißt jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, bis ein Tooltip angezeigt wird, nachdem der Mauszeiger zu schweben beginnt.

### Änderungen am Build-System

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Sonstige Änderungen

- Add-ons, die seit langer Zeit nicht aktualisiert wurden, gelten nicht mehr standardmäßig als kompatibel; dies betrifft aktuell Add-ons, bei denen die `maxVersion` auf 4.0 gesetzt ist.

## Siehe auch

{{Firefox_for_developers}}
