---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen zu den neuen Funktionen und behobenen wesentlichen Fehlern in dieser Version sowie Links zu detaillierteren Dokumentationen sowohl für Webentwickler als auch für Add-On-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` in den {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) Eigenschaft wird jetzt in HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Attribute `responseType` und `withCredentials` bei der Durchführung von synchronen Anfragen wurde entfernt. Ein Versuch, dies zu tun, wirft eine `NS_ERROR_DOM_INVALID_ACCESS_ERR` Ausnahme. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät zu vibrieren, wo dies unterstützt wird; dies ist in Gecko als `mozVibrate()` implementiert.
- `navigator.mozApps` gibt ein `Apps`-Objekt zurück, das Sie zum Installieren und Verwalten von [offenen Webanwendungen](/de/docs/Web/Progressive_web_apps) verwenden können.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Verbraucher von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die diese verwendet haben, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung zum Abbrechen von Animationsfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt eine Anfrage-ID zurück, die Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event) Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in DOM4-Spezifikationen eingeführt wurden, werden nun unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das zuvor im Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) Methode des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Form ohne Argumente mehr. Diese Form wurde nur selten verwendet und wird wahrscheinlich nicht Teil des Standards.
- SVG als Bild kann jetzt ohne [Verunreinigung der Leinwand](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases) auf eine Leinwand gezeichnet werden.
- Die nicht standardmäßige Eigenschaft `countryCode` der `GeoPositionAddress` Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent Events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden beim Folgen eines Links die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt gesetzten Werte von der neuen Seite beibehalten. Jetzt wird ein neues `navigator` Objekt für die neue Seite erstellt. Somit verhält sich Firefox wie alle anderen Browser.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/Web/CSS) [Conditional Rules](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) werden jetzt besser unterstützt: geschachtelte Anweisungen können jetzt zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) DOM-Schnittstelle unterstützt jetzt die Methode `getElementById`.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API unterstützt jetzt binäre Nachrichten (siehe [Firefox Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert, und die API wurde ohne Präfix versehen (siehe [Firefox Bug 666349](https://bugzil.la/666349) und [Firefox Bug 695635](https://bugzil.la/695635)).
- Zuvor waren Nachrichten, die mit WebSockets in Firefox gesendet und empfangen wurden, auf 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherbeschränkungen möglicherweise verhindern, dass sie so groß werden, unterstützt Firefox dies).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory/cmp) wurde hinzugefügt.
- Ein [IndexedDB Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann nun auch von folgenden Typen sein: Date, Arrays und Float (und nicht nur String und Integer).
- Ab sofort werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; zum Beispiel betrachten Sie:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach dem Ausführen des Codes sollte der Objektstore den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement) Zähler von Objektstores für eine gegebene Datenbank gemeinsam genutzt, während laut Spezifikation jeder Objektstore einen separaten Zähler haben sollte. Dies ist nun behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu [erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist jetzt möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex` Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event) Ereignis bubblet jetzt; zusätzlich wurde ein `onabort` Handler hinzugefügt.
- IndexedDB kann jetzt verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe key paths, z.B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektstore](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da diese einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält nun einen Indikator, der [dem Server anzeigt, ob der Firefox, der darauf zugreift, ein Telefon oder ein Tablet ist](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet nun eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), falls Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS Stylesheets in Echtzeit zu editieren und zu erstellen.
- Die [Ansicht Quelltext-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-On-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter, um die Zeicheninterpretation beim Lesen des Eingabestroms zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen bequemen, einfach zu bedienenden Quellcode-Editor, den Sie in Ihren Add-Ons verwenden können. Dies ist derselbe Editor, der in _Scratchpad_ und anderen Entwicklerwerkzeugen integriert in Firefox verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory` Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport` Schnittstelle unterstützt jetzt das Hinzufügen eines Text-Badges zum Anwendungsicon im Dock über ihr neues `badgeText` Attribut.
- In der `nsINavHistoryResultObserver` Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstelle der veralteten Methoden `containerOpened()` und `containerClosed()`.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Änderungen im Zusammenhang mit dem Thema

- Die Datei `omni.jar` wird jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>) genannt.

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Zeitpunkt, an dem der Mauszeiger beginnt zu schweben, und dem Anzeigebeginn eines Tooltips.

### Build-System-Änderungen

- Die `--enable-tracejit` Build-Option wurde entfernt.

### Sonstige Änderungen

- Add-Ons, die seit langem nicht mehr aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; dies betrifft derzeit Add-Ons, die eine `maxVersion` von 4.0 anzeigen.

## Siehe auch

{{Firefox_for_developers}}
