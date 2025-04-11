---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` bei {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Unterstützung für die Verwendung der Attribute [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` und `withCredentials` bei synchronen Anfragen wurde entfernt. Der Versuch, dies zu tun, wirft eine `NS_ERROR_DOM_INVALID_ACCESS_ERR`-Ausnahme. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät vibrieren zu lassen, sofern unterstützt; dies ist in Gecko als `mozVibrate()` implementiert.
- `navigator.mozApps` gibt ein [`Apps`](/de/docs/DOM/Apps)-Objekt zurück, das Sie zum Installieren und Verwalten von [Open-Web-Anwendungen](/de/docs/Web/Progressive_web_apps) verwenden können.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Verbraucher, die diese verwendeten, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung zum Abbrechen von Animationsrasteranforderungen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt einen Anforderungs-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anforderung abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) bei [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt jetzt das zuvor im Vollbildmodus befindliche Element wieder her, falls ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Form ohne Argument mehr. Diese Form wurde kaum verwendet und wird wahrscheinlich nicht Teil des Standards.
- SVG als Bild kann nun ohne [tainting the canvas](/de/docs/Web/HTML/How_to/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f) in eine Leinwand gezeichnet werden.
- Die nicht standardisierte Eigenschaft `countryCode` der Schnittstelle `GeoPositionAddress` wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events) unterstützen nun [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt gesetzten Werte zur neuen Seite beibehalten, wenn der Benutzer einem Link folgte. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dies macht Firefox verhalten wie alle anderen Browser.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust)-Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Conditional Rules](/de/docs/CSS/CSS3#conditional_rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können jetzt zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-DOM-Schnittstelle unterstützt nun die Methode `getElementById`.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt binäre Nachrichten (siehe [Firefox-Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert, und die API wurde ohne Präfix versehen (siehe [Firefox-Bug 666349](https://bugzil.la/666349) und [Firefox-Bug 695635](https://bugzil.la/695635)).
- Bisher waren mit WebSockets in Firefox gesendete und empfangene Nachrichten auf eine Größe von 16 MB beschränkt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherbeschränkungen sie daran hindern können, so groß zu werden, unterstützt Firefox dies).

### IndexedDB

- Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann auch einer der folgenden Typen sein: Date, Arrays und Float (und nicht nur String und Integer).
- Künftig werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; zum Beispiel:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach dem Ausführen des Codes sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden `autoIncrement`-Zähler für Objektspeicher in einer Datenbank gemeinsam genutzt, während gemäß Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies wurde jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu [erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist jetzt möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex`-Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis wird jetzt propagiert; zusätzlich wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann jetzt verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar` zum Zugriff auf die Eigenschaft `bar` der Eigenschaft `foo`.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox-Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da dies einige Websites, einschließlich Outlook Web Access, beschädigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt einen Identifikator, der [dem Server mitteilt, ob der zugreifende Firefox auf einem Telefon oder einem Tablet läuft](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine Freiformmethode zum Bearbeiten und Erstellen von CSS-Stilen in Echtzeit.
- Die [Quelltextanzeige](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter, um die Zeichensatzinterpretation beim Lesen des Eingabestreams zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen benutzerfreundlichen Editor für Quellcode, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory`-Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Handling-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport`-Schnittstelle unterstützt jetzt das Hinzufügen eines Text-Abzeichens zum Anwendungs-Icon im Dock mit ihrem neuen `badgeText`-Attribut.
- In der `nsINavHistoryResultObserver`-Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren anstelle der veralteten Methoden `containerOpened()` und `containerClosed()`.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [Bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die Datei `omni.jar` wird jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>) genannt.

### Präferenzänderungen

- `ui.tooltipDelay`
  - : Bestimmt die Verzögerung in Millisekunden zwischen dem Beginn des Hoverns des Mauszeigers und dem Anzeigen eines Tooltips.

### Änderungen im Build-System

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Andere Änderungen

- Add-ons, die seit langer Zeit nicht mehr aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; dies betrifft derzeit Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
