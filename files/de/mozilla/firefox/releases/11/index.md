---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die behobenen Schlüsselprobleme in dieser Version sowie Links zu ausführlicheren Dokumentationen sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` auf den {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) Eigenschaft wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Nutzung der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Attribute `responseType` und `withCredentials` bei synchronen Anfragen wurde entfernt. Ein Versuch, diese zu verwenden, wirft nun eine `NS_ERROR_DOM_INVALID_ACCESS_ERR` Ausnahme. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät zu vibrieren, wo unterstützt; dies ist als `mozVibrate()` in Gecko implementiert.
- `navigator.mozApps` gibt ein [`Apps`](/de/docs/DOM/Apps) Objekt zurück, das Sie zur Installation und Verwaltung von [Open-Web-Anwendungen](/de/docs/Web/Progressive_web_apps) verwenden können.
- `MozBeforePaint` Ereignisse werden nicht mehr ausgelöst. Verbraucher von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die diese verwendet haben, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung zum Abbrechen von Animations-Frame-Anfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt eine Anforderungs-ID zurück, die Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event) Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent`, und `MouseEvent`) aus den DOM4-Spezifikationen werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) Eigenschaften auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt jetzt das zuvor im Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) Methode des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Form ohne Argumente mehr. Diese Form wurde selten genutzt und wird wahrscheinlich nicht Teil des Standards.
- SVG als Bild kann nun in ein Canvas gezeichnet werden, ohne [das Canvas zu beeinträchtigen](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- Die nicht-standardisierte `countryCode` Eigenschaft der `GeoPositionAddress` Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden beim Folgen eines Links die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt gesetzten Werte auf der neuen Seite beibehalten. Jetzt wird ein neues `navigator` Objekt für die neue Seite erstellt. Dies lässt Firefox so wie alle anderen Browser funktionieren.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Conditional Rules](/de/docs/CSS/CSS3#conditional_rules) werden jetzt besser unterstützt: geschachtelte Anweisungen können nun zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) DOM-Schnittstelle unterstützt jetzt die `getElementById` Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API unterstützt jetzt binäre Nachrichten (siehe [Firefox Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde ohne Präfix implementiert (Siehe [Firefox Bug 666349](https://bugzil.la/666349) und [Firefox Bug 695635](https://bugzil.la/695635)).
- Zuvor waren Nachrichten, die in Firefox über WebSockets gesendet und empfangen wurden, auf 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherbeschränkungen sie daran hindern können, so groß zu sein, unterstützt Firefox es).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory/cmp) wurde hinzugefügt.
- Ein [IndexedDB Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch einer der folgenden Typen sein: Date, Arrays und Float (und nicht nur String und Integer).
- Ab jetzt werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage platziert wird; zum Beispiel:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Objektstore den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die `autoIncrement` Zähler der Objektstore über alle Objektstores einer Datenbank geteilt, während laut Spezifikation jeder Objektstore einen separaten Zähler haben sollte. Dies ist jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu erstellen.
- Es ist jetzt möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex` Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event) Ereignis wird jetzt propagiert; zusätzlich wurde ein `onabort` Handler hinzugefügt.
- IndexedDB kann jetzt zum Speichern von Dateien/Blobs verwendet werden.
- IndexedDB unterstützt jetzt komplexe Key-Pfade, z.B. `foo.bar` um die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektstore](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung von Anführungszeichen als Delimiter für {{rfc(2231)}} und {{rfc(5987)}} entfernt hatte, wurde rückgängig gemacht, da dies einige Seiten, darunter Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt einen Identifikator, der [dem Server angibt, ob der zugreifende Firefox ein Telefon oder ein Tablet ist](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwickler-Tools

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), falls Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu komponieren.
- Die [Quellcode-Anzeige](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat jetzt einen neuen, optionalen Parameter, um die Zeicheninterpretation beim Lesen des Eingabestreams zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen benutzerfreundlichen Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwickler-Tools verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory` Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Handling-Funktionalitäten für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport` Schnittstelle unterstützt jetzt das Hinzufügen einer Textplakette zum App-Icon im Dock mit seinem neuen `badgeText` Attribut.
- In der `nsINavHistoryResultObserver` Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstelle der veralteten `containerOpened()` und `containerClosed()` Methoden.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Änderungen im Bezug auf Themes

- Die Datei `omni.jar` heißt nun [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung, in Millisekunden, zwischen dem Beginn des Hoverns des Mauszeigers und der Anzeige eines Tooltips an.

### Änderungen am Build-System

- Die `--enable-tracejit` Build-Option wurde entfernt.

### Sonstige Änderungen

- Add-ons, die seit längerer Zeit nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; dies betrifft aktuell Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
