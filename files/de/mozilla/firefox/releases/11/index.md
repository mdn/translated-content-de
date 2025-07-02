---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu ausführlicherer Dokumentation für Webentwickler und Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` an {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) Eigenschaft wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Unterstützung für die Verwendung der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` und `withCredentials` Attribute bei synchronen Anfragen wurde entfernt. Der Versuch führt zu einer `NS_ERROR_DOM_INVALID_ACCESS_ERR` Ausnahme. Diese Änderung wurde zur Standardisierung an das W3C vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät vibrieren zu lassen, wo es unterstützt wird; dies wird in Gecko als `mozVibrate()` implementiert.
- `navigator.mozApps` gibt ein [`Apps`](/de/docs/DOM/Apps) Objekt zurück, mit dem Sie [offene Webanwendungen](/de/docs/Web/Progressive_web_apps) installieren und verwalten können.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Nutzer sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung zum Abbrechen von Animations-Frame-Anfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt einen Anfrage-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event) Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in den DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) Eigenschaften auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Der Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das zuvor im Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt nicht mehr die Form ohne Argumente. Diese Form wurde nicht viel verwendet und wird vermutlich kein Standard.
- SVG als Bild kann nun ohne [Verunreinigung der Leinwand](/de/docs/Web/HTML/How_to/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f) in eine Leinwand gezeichnet werden.
- Die nicht standardmäßige `countryCode` Eigenschaft der `GeoPositionAddress` Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden beim Folgen eines Links die Werte, die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt gesetzt wurden, von der neuen Seite beibehalten. Jetzt wird ein neues `navigator` Objekt für die neue Seite erstellt. Dadurch verhält sich Firefox wie alle anderen Browser.

### CSS

- die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Bedingte Regeln](/de/docs/CSS/CSS3#conditional_rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können jetzt zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) DOM-Schnittstelle unterstützt jetzt die `getElementById` Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API unterstützt jetzt binäre Nachrichten (siehe [Firefox Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde unpräfixiert (siehe [Firefox Bug 666349](https://bugzil.la/666349) und [Firefox Bug 695635](https://bugzil.la/695635)).
- Bisher waren die in Firefox über WebSockets gesendeten und empfangenen Nachrichten auf 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherkapazitätsbeschränkungen dies möglicherweise verhindern, unterstützt Firefox es).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann ebenfalls von einem der folgenden Typen sein: Date, Arrays und Float (und nicht nur String und Integer).
- Ab sofort werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; zum Beispiel:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nachdem der Code ausgeführt wurde, sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden Objektspeicher [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement) Zähler über alle Objektspeicher für eine gegebene Datenbank hinweg geteilt, während laut Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies ist jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu [erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist jetzt möglich, einen Mehrfacheintrag-Index zu erstellen (siehe [`IDBObjectStore.createIndex` Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event) Ereignis wird jetzt weitergegeben; zusätzlich wurde ein `onabort` Handler hinzugefügt.
- IndexedDB kann jetzt verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox Bug 694138](https://bugzil.la/694138)).

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da dies einige Seiten wie Outlook Web Access beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt einen Bezeichner, der [dem Server mitteilt, ob der zugreifende Firefox ein Telefon oder ein Tablet ist](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stile in Echtzeit zu bearbeiten und zu verfassen.
- Die [View Source Funktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter zur Konfiguration der Zeichensatzinterpretation beim Lesen des Eingabestroms.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen praktischen, einfach zu bedienenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory` Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport` Schnittstelle unterstützt jetzt das Hinzufügen eines Textabzeichens zum Anwendungsicon im Dock über ihr neues `badgeText` Attribut.
- In der `nsINavHistoryResultObserver` Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` anstelle der veralteten `containerOpened()` und `containerClosed()` Methoden implementieren.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die `omni.jar` Datei heißt jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Präferenzänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Beginn des Überfahrens des Mauszeigers und der Anzeige eines Tooltips.

### Änderungen im Build-System

- Die `--enable-tracejit` Build-Option wurde entfernt.

### Andere Änderungen

- Add-ons, die lange nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; dies betrifft derzeit Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
