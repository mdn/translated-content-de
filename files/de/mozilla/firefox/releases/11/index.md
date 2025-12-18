---
title: Firefox 11 Versionshinweise für Entwickler
short-title: Firefox 11
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und wichtige behobene Fehler in dieser Version sowie Links zu ausführlicherer Dokumentation sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` bei den {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die Eigenschaft [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt jetzt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der Attribute `responseType` und `withCredentials` von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bei synchronen Anfragen wurde entfernt. Der Versuch, dies zu tun, löst eine `NS_ERROR_DOM_INVALID_ACCESS_ERR`-Ausnahme aus. Diese Änderung wurde zur Standardisierung an das W3C vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät zu vibrieren, wo dies unterstützt wird; dies wird in Gecko als `mozVibrate()` implementiert.
- `navigator.mozApps` gibt ein `Apps`-Objekt zurück, mit dem Sie [offene Web-Anwendungen](/de/docs/Web/Progressive_web_apps) installieren und verwalten können.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Verbraucher von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) sollten stattdessen eine Rückruffunktion übergeben.
- Unterstützung zum Abbrechen von Animationsrahmenanforderungen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt eine Anforderungs-ID zurück, die Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anforderung abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Events, `UIEvent` und `MouseEvent`), die in DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt jetzt das vorher im Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Variante ohne Argumente mehr. Diese Form wurde nicht viel verwendet und wird wahrscheinlich kein Teil des Standards.
- SVG-als-Bild kann jetzt in eine Leinwand gezeichnet werden, ohne [die Leinwand zu verfälschen](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- Die nicht-standardisierte Eigenschaft `countryCode` des `GeoPositionAddress`-Interface wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden, wenn der Benutzer einem Link folgte, die am [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt gesetzten Werte an die neue Seite übergeben. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dies lässt Firefox wie alle anderen Browser verhalten.

### CSS

- Die Eigenschaft [`text-size-adjust`](/de/docs/Web/CSS/Reference/Properties/text-size-adjust) wird jetzt unterstützt.
- [CSS3](/de/docs/Web/CSS) [Bedingte Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules#block_at-rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können jetzt zu [@media](/de/docs/Web/CSS/Reference/At-rules/@media), [@-moz-document](/de/docs/Web/CSS/Reference/At-rules/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) und [CSS at-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)).

### JavaScript

_Keine Änderung._

### SVG

- Das [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-DOM-Interface unterstützt jetzt die Methode `getElementById`.

### WebSocket

- [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt Binärnachrichten (siehe [Firefox Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde unpräfixiert (siehe [Firefox Bug 666349](https://bugzil.la/666349) und [Firefox Bug 695635](https://bugzil.la/695635)).
- Bisher waren über WebSockets in Firefox gesendete und empfangene Nachrichten auf 16 MB beschränkt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherbeschränkungen dies möglicherweise verhindern, unterstützt Firefox dies).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory/cmp) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch von einem der folgenden Typen sein: Date, Arrays und Float (und nicht nur String und Integer).
- Ab jetzt werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; zum Beispiel:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden Zähler von [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement)-Objektspeichern für eine gegebene Datenbank gemeinsam genutzt, gemäß der Spezifikation sollte jedoch jeder Objektspeicher einen separaten Zähler haben. Dies ist jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu [erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist jetzt möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex`-Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis blubbert jetzt; zusätzlich wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann jetzt Dateien/Blobs speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung von Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da dies einige Seiten unterbrach, einschließlich Outlook Web Access.
- Der User-Agent-String in HTTP-Headern enthält jetzt ein Kennzeichen, das [dem Server mitteilt, ob das zugreifende Firefox ein Telefon oder ein Tablet ist](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators).

### Entwicklertools

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stilblätter in Echtzeit zu bearbeiten und zu erstellen.
- Die [Quellansichtsfunktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter zur Konfiguration der Zeichensatzinterpretation beim Lesen des Eingabestroms.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen praktischen, einfach zu verwendenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklertools verwendet wird.

### Schnittstellenänderungen

- Das `mozIAsyncHistory`-Interface hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Ein neues Interface `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Das `nsIMacDockSupport`-Interface unterstützt jetzt das Hinzufügen eines Textabzeichens zum Anwendungs-Symbol im Dock unter Verwendung seines neuen `badgeText`-Attributs.
- Im `nsINavHistoryResultObserver`-Interface müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstatt der veralteten Methoden `containerOpened()` und `containerClosed()`.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die Datei `omni.jar` wird jetzt [`omni.ja`](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29) genannt.

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Cursor-Hover und der Anzeige eines Tooltips.

### Buildsystem-Änderungen

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Sonstige Änderungen

- Add-ons, die seit langer Zeit nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angenommen; dies betrifft derzeit Add-ons, die eine `maxVersion` von 4.0 angeben.
