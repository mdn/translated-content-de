---
title: Firefox 11 Versionshinweise für Entwickler
short-title: Firefox 11
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu ausführlicheren Dokumentationen für Web-Entwickler und Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` auf {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der `responseType`- und `withCredentials`-Attribute von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bei synchronen Anfragen wurde entfernt. Der Versuch, dies zu tun, wirft eine `NS_ERROR_DOM_INVALID_ACCESS_ERR`-Ausnahme. Diese Änderung wurde beim W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht das Vibrieren des Geräts, wenn unterstützt; dies wird in Gecko als `mozVibrate()` implementiert.
- `navigator.mozApps` gibt ein `Apps`-Objekt zurück, mit dem Sie [Open Web Apps](/de/docs/Web/Progressive_web_apps) installieren und verwalten können.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Verbraucher von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die diese verwendet haben, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung zum Abbrechen von Animationsframe-Anfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt einen Anforderungs-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in den DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Der Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das zuvor im Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt nicht mehr ein Argument mit leerem Wert. Diese Form wurde kaum verwendet und wird wahrscheinlich nicht Teil des Standards.
- SVG-als-Bild kann jetzt in ein Canvas gezeichnet werden, ohne [das Canvas zu verfälschen](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- Die nicht standardisierte `countryCode`-Eigenschaft der `GeoPositionAddress`-Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit, wenn der Benutzer einem Link folgte, wurden die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt gesetzten Werte von der neuen Seite beibehalten. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dies führt dazu, dass sich Firefox wie alle anderen Browser verhält.

### CSS

- die [`text-size-adjust`](/de/docs/Web/CSS/Reference/Properties/text-size-adjust)-Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/Web/CSS) [Bedingte Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) werden jetzt besser unterstützt: verschachtelte Anweisungen können jetzt zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS-At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-DOM-Schnittstelle unterstützt jetzt die `getElementById`-Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt Binärnachrichten (siehe [Firefox Fehler 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde ohne Präfix aktualisiert (siehe [Firefox Fehler 666349](https://bugzil.la/666349) und [Firefox Fehler 695635](https://bugzil.la/695635)).
- Zuvor waren Nachrichten, die mit WebSockets in Firefox gesendet und empfangen wurden, auf eine Größe von 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherkapazitätsbeschränkungen verhindern können, dass sie so groß sind, unterstützt Firefox es).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory/cmp) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch von einem der folgenden Typen sein: Datum, Arrays und Float (und nicht nur Zeichenfolge und Integer).
- Ab jetzt werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; zum Beispiel:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach dem Ausführen des Codes sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement)-Zähler des Objektspeichers auf alle Objektspeicher für eine bestimmte Datenbank verteilt, während gemäß Spezifikation jeder Objektspeicher einen eigenen Zähler haben sollte. Dies ist jetzt behoben.
- Es ist nun möglich, einen Index mit einem leeren `keyPath` zu [erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist nun möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex`-Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis kann jetzt weitergegeben werden; zusätzlich wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann jetzt verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox Fehler 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, bei der die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernt wurde, wurde rückgängig gemacht, da dies einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt einen Bezeichner, der [dem Server mitteilt, ob der zugreifende Firefox ein Telefon oder ein Tablet ist](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) stellt eine freie Möglichkeit bereit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu kompilieren.
- Die Funktion [Seitenquelle anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter zur Konfiguration der Zeichensatzinterpretation beim Lesen des Eingabestreams.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen praktischen, einfach zu bedienenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist der gleiche Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory`-Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport`-Schnittstelle unterstützt jetzt das Hinzufügen eines Text-Badges zum Anwendungsicon im Dock über sein neues `badgeText`-Attribut.
- In der `nsINavHistoryResultObserver`-Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstelle der veralteten `containerOpened()`- und `containerClosed()`-Methoden.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [Fehler707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die Datei `omni.jar` heißt jetzt [`omni.ja`](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Beginn des Hoverns des Mauszeigers und der Anzeige eines Tooltips.

### Änderungen im Build-System

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Weitere Änderungen

- Add-ons, die seit längerer Zeit nicht mehr aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; derzeit betrifft dies Add-ons, die eine `maxVersion` von 4.0 angeben.
