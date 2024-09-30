---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und wichtige behobene Fehler in diesem Release sowie Links zu ausführlicheren Dokumentationen für Webentwickler und Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` auf den {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung der Verwendung der Attribute `responseType` und `withCredentials` von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bei synchronen Anfragen wurde entfernt. Ein Versuch, dies zu tun, wirft eine `NS_ERROR_DOM_INVALID_ACCESS_ERR`-Ausnahme. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`window.navigator.mozVibrate()`](/de/docs/Web/API/Window/navigator/mozVibrate) ermöglicht es, ein Gerät vibrieren zu lassen, sofern unterstützt; dies ist als `mozVibrate()` in Gecko implementiert.
- [`window.navigator.mozApps`](/de/docs/Web/API/Window/navigator/mozApps) gibt ein [`Apps`](/de/docs/DOM/Apps)-Objekt zurück, das Sie zur Installation und Verwaltung von [offenen Webanwendungen](/de/docs/Web/Progressive_web_apps) verwenden können.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Konsumenten von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die diese nutzten, sollten stattdessen eine Rückruffunktion übergeben.
- Unterstützung für das Abbrechen von Anfragen für Animationsrahmen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt einen Anforderungs-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die [`Battery API`](/de/docs/Web/API/Window/navigator/mozBattery) ist jetzt standardmäßig aktiviert.
- Die Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Der Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das zuvor in Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullScreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Argumentlose Form mehr. Diese Form wurde kaum genutzt und wird wahrscheinlich kein Teil des Standards.
- SVG-als-Bild kann jetzt in ein Canvas gezeichnet werden, ohne das [Canvas zu verfremden](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Die nicht standardmäßige `countryCode`-Eigenschaft der `GeoPositionAddress`-Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/CORS).
- In der Vergangenheit wurden beim Befolgen eines Links die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt gesetzten Werte von der neuen Seite beibehalten. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dies lässt Firefox wie alle anderen Browser verhalten.

### CSS

- die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust)-Eigenschaft wird jetzt unterstützt
- [CSS3](/de/docs/CSS/CSS3) [Conditional Rules](/de/docs/CSS/CSS3#conditional_rules) sind nun besser unterstützt: verschachtelte Anweisungen können jetzt zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/Syntax) und [CSS at-rules](/de/docs/Web/CSS/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Das [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-DOM-Interface unterstützt nun die `getElementById`-Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt Binärnachrichten (siehe [Firefox-Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde ohne Präfix bereitgestellt (siehe [Firefox-Bug 666349](https://bugzil.la/666349) und [Firefox-Bug 695635](https://bugzil.la/695635)).
- Zuvor waren die in Firefox mittels WebSockets gesendeten und empfangenen Nachrichten auf 16 MB Größe beschränkt; sie dürfen jetzt bis zu 2 GB groß sein (obwohl Speicherplatzbeschränkungen sie daran hindern können, so groß zu werden, unterstützt Firefox dies).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch von einem der folgenden Typen sein: Datum, Arrays und Fließkommazahlen (und nicht nur String und Integer).
- Ab jetzt werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; betrachten Sie zum Beispiel Folgendes:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Objektspeicher den Wert „2“ enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement)-Zähler des Objektspeichers in einer Datenbank über alle Objektspeicher hinweg geteilt, wohingegen laut Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies ist nun behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` [zu erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist jetzt möglich, einen Multi-Entry-Index zu erstellen (siehe die [`IDBObjectStore.createIndex` Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das Ereignis [`abort`](/de/docs/Web/API/IDBTransaction/abort_event) blubbert jetzt; zusätzlich wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann jetzt verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar` zum Zugriff auf die Eigenschaft `bar` der Eigenschaft `foo`.
- IndexedDB kann jetzt ein Array als `keyPath` beim Erstellen eines [Objektspeichers](/de/docs/Web/API/IDBDatabase/createObjectStore) oder eines [Index](/de/docs/Web/API/IDBObjectStore/createIndex) akzeptieren ([Firefox-Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Delimiter für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da dies einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt einen Identifikator, der [dem Server mitteilt, ob der zugreifende Firefox ein Telefon oder ein Tablet ist](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), falls Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stilblätter in Echtzeit zu bearbeiten und zu erstellen.
- Die [Quelltextansicht-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen optionalen Parameter, um die Zeichensatzinterpretation beim Lesen des Eingabestreams zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen komfortablen, einfach zu bedienenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory`-Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu prüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Funktionen für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport`-Schnittstelle unterstützt jetzt die Hinzufügung eines Textabzeichens zum Anwendungs-Icon im Dock mit ihrem neuen `badgeText`-Attribut.
- In der `nsINavHistoryResultObserver`-Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstelle der veralteten Methoden `containerOpened()` und `containerClosed()`.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Änderungen im Zusammenhang mit Themes

- Die Datei `omni.jar` wird jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>) genannt.

### Änderungen bei den Einstellungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden zwischen dem Beginn des Hoverns des Mauszeigers und der Anzeige eines Tooltips an.

### Änderungen im Build-System

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Sonstige Änderungen

- Add-ons, die lange nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angenommen; derzeit betrifft dies Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
