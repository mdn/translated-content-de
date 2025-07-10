---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten Fehlerbehebungen in dieser Version sowie Links zu ausführlicherer Dokumentation sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` an den {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die Eigenschaft [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt das Parsen von HTML](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der Attribute `responseType` und `withCredentials` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bei synchronen Anfragen wurde entfernt. Ein entsprechender Versuch führt zu einer `NS_ERROR_DOM_INVALID_ACCESS_ERR`-Ausnahme. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät bei unterstützter Hardware zum Vibrieren zu bringen; dies ist in Gecko als `mozVibrate()` implementiert.
- `navigator.mozApps` gibt ein `Apps`-Objekt zurück, mit dem Sie [offene Webanwendungen](/de/docs/Web/Progressive_web_apps) installieren und verwalten können.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Benutzer von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) sollten stattdessen eine Rückruffunktion übergeben.
- Die Unterstützung zum Abbrechen von Anfragen für Animationsrahmen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt nun eine Anforderungs-ID zurück, die Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in den DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das vorherige im Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen)-Methode des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Argumentfreie Form mehr. Diese Form wurde nicht oft verwendet und wird wahrscheinlich nicht Teil des Standards.
- SVG als Bild kann nun in ein Canvas gezeichnet werden, ohne [das Canvas zu verunreinigen](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- Die nicht standardisierte Eigenschaft `countryCode` des `GeoPositionAddress`-Interfaces wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden beim Folgen eines Links die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt festgelegten Werte von der neuen Seite übernommen. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dadurch verhält sich Firefox wie alle anderen Browser.

### CSS

- Die Eigenschaft [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) wird jetzt unterstützt.
- [CSS3](/de/docs/Web/CSS) [Bedingte Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können nun zu [@media](/de/docs/Web/CSS/@media) und [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Das [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) DOM-Interface unterstützt nun die `getElementById`-Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt Binärnachrichten (siehe [Firefox Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde unpräfigiert (siehe [Firefox Bug 666349](https://bugzil.la/666349) und [Firefox Bug 695635](https://bugzil.la/695635)).
- Bisher waren über WebSockets in Firefox gesendete und empfangene Nachrichten auf 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherbeschränkungen verhindern können, dass sie so groß werden, unterstützt Firefox es).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory/cmp) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann nun auch einen der folgenden Typen haben: Datum, Arrays und Float (und nicht nur String und Integer).
- Von nun an werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; betrachten Sie zum Beispiel Folgendes:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nachdem der Code ausgeführt wurde, sollte der Objekt-Speicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden Objekt-Speicher-`autoIncrement`-Zähler für eine gegebene Datenbank zwischen allen Objekt-Speichern geteilt, wohingegen jeder Objekt-Speicher laut Spezifikation einen separaten Zähler haben sollte. Dies ist jetzt behoben.
- Es ist nun möglich, einen Index mit einem leeren `keyPath` [zu erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist nun möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex`-Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis bubblet jetzt; zusätzlich wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann nun zum Speichern von Dateien/Blobs verwendet werden.
- IndexedDB unterstützt nun komplexe Schlüsselpfade, z. B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann nun ein Array als `keyPath` bei der Erstellung eines [Objekt-Speichers](/de/docs/Web/API/IDBDatabase/createObjectStore) oder eines [Index](/de/docs/Web/API/IDBObjectStore/createIndex) akzeptieren ([Firefox Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernt hat, wurde zurückgenommen, da dies einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält nun einen Identifikator, der [dem Server mitteilt, ob der zugreifende Firefox ein Telefon oder ein Tablet ist](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet nun eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu erstellen.
- Die [Quellansicht-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter zur Konfiguration der Zeichensatzinterpretation beim Lesen des Eingabestreams.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen praktischen, einfach zu bedienenden Quelltext-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist der gleiche Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory`-Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die Schnittstelle `nsIMacDockSupport` unterstützt jetzt das Hinzufügen eines Textabzeichens zum Anwendungsicon im Dock über ihr neues `badgeText`-Attribut.
- In der Schnittstelle `nsINavHistoryResultObserver` müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` anstelle der veralteten `containerOpened()` und `containerClosed()` Methoden implementieren.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Änderungen im Theme-Bereich

- Die Datei `omni.jar` heißt jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Bestimmt die Verzögerung in Millisekunden zwischen dem Beginn des Hoverns des Mauszeigers und der Anzeige eines Tooltips.

### Änderungen im Build-System

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Sonstige Änderungen

- Add-ons, die seit langer Zeit nicht mehr aktualisiert wurden, werden standardmäßig nicht mehr als kompatibel angenommen; derzeit sind dies Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
