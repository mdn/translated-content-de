---
title: Firefox 11 für Entwickler
short-title: Firefox 11
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und wichtigsten behobenen Fehler in dieser Version, sowie Links zu detaillierter Dokumentation für sowohl Web- als auch Add-on-Entwickler.

## Änderungen für Web-Entwickler

### HTML

- Die Attribute `muted` und `loop` auf den {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) Eigenschaft wird jetzt auf HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der `responseType`- und `withCredentials`-Attribute von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bei synchronen Anfragen wurde entfernt. Der Versuch, dies zu tun, löst eine `NS_ERROR_DOM_INVALID_ACCESS_ERR` Ausnahme aus. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät vibrieren zu lassen, wo dies unterstützt wird; dies ist in Gecko als `mozVibrate()` implementiert.
- `navigator.mozApps` gibt ein `Apps`-Objekt zurück, das Sie zur Installation und Verwaltung von [Open Web-Anwendungen](/de/docs/Web/Progressive_web_apps) verwenden können.
- `MozBeforePaint`-Ereignisse werden nicht länger ausgelöst. Konsumenten von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die diese nutzten, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung zum Abbrechen von Animationsframe-Anfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt nun einen Anfrage-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere in den DOM4-Spezifikationen eingeführte [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`) werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist standardmäßig aktiviert.
- Unterstützung für die [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) Eigenschaften auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt jetzt das vorherige Vollbild-Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine argumentfreie Form mehr. Diese Form wurde nicht viel genutzt und wird wahrscheinlich kein Teil des Standards werden.
- SVG-als-Bild kann jetzt ohne [Verfälschung des Canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases) in ein Canvas gezeichnet werden.
- Die nicht standardmäßige `countryCode`-Eigenschaft der `GeoPositionAddress`-Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt gesetzten Werte von der neuen Seite beibehalten, als der Benutzer einem Link folgte. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dadurch verhält sich Firefox wie alle anderen Browser.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) Eigenschaft wird nun unterstützt.
- [CSS3](/de/docs/Web/CSS) [Bedingte Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können nun zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden (siehe [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS-At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) DOM-Schnittstelle unterstützt jetzt die Methode `getElementById`.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API unterstützt jetzt binäre Nachrichten (siehe [Firefox-Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde unpräfixiert (siehe [Firefox-Bug 666349](https://bugzil.la/666349) und [Firefox-Bug 695635](https://bugzil.la/695635)).
- Zuvor waren Nachrichten, die mit WebSockets in Firefox gesendet und empfangen wurden, auf 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherbeschränkungen sie daran hindern könnten, so groß zu sein, unterstützt Firefox es).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory/cmp) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch einer der folgenden Typen sein: Datum, Arrays und Float (und nicht nur String und Integer).
- Ab jetzt werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; zum Beispiel betrachten Sie dies:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement)-Zähler der Objektspeicher über alle Objektspeicher einer bestimmten Datenbank hinweg geteilt, während laut Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies wurde jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu [erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist jetzt möglich, einen Mehrfacheintragsindex zu erstellen (siehe [`IDBObjectStore.createIndex` Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters)).
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis blubbert jetzt; zusätzlich wurde ein `onabort` Handler hinzugefügt.
- IndexedDB kann jetzt verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox-Bug 694138](https://bugzil.la/694138)).

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde zurückgenommen, da dies einige Seiten, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt einen Identifikator, der [dem Server mitteilt, ob es sich bei dem zugreifenden Firefox um ein Telefon oder ein Tablet handelt](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators).

### Entwicklertools

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freiformweise Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu erstellen.
- Die [Quellcode anzeigen-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Codemodule

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter zur Konfiguration der Zeichensatzinterpretation beim Lesen des Eingabestreams.

#### Neue JavaScript-Codemodule

- [`source-editor.jsm`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen komfortablen, einfach zu verwendenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der im _Scratchpad_ und anderen Entwicklertools verwendet wird, die in Firefox integriert sind.

### Schnittstellenänderungen

- Die `mozIAsyncHistory`-Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport`-Schnittstelle unterstützt jetzt das Hinzufügen eines Textabzeichens zum App-Symbol im Dock über ihr neues `badgeText` Attribut.
- In der `nsINavHistoryResultObserver`-Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` statt der veralteten `containerOpened()` und `containerClosed()` Methoden implementieren.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die Datei `omni.jar` heißt jetzt [`omni.ja`](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).

### Präferenzänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Beginn des Schwebens des Mauszeigers und der Anzeige eines Tooltips.

### Änderungen des Build-Systems

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Weitere Änderungen

- Add-ons, die seit langer Zeit nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; dies betrifft derzeit Add-ons, die eine `maxVersion` von 4.0 angeben.
