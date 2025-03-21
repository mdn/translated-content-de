---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten Fehlerbehebungen in dieser Version sowie Links zu detaillierteren Dokumentationen sowohl für Webentwickler als auch für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` auf den {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft wird nun auf HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType`- und `withCredentials`-Attribute bei der Durchführung synchroner Anfragen wurde entfernt. Der Versuch, dies zu tun, löst eine `NS_ERROR_DOM_INVALID_ACCESS_ERR`-Ausnahme aus. Diese Änderung wurde zur Standardisierung an die W3C vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) erlaubt es, das Gerät vibrieren zu lassen, wo dies unterstützt wird; dies wird als `mozVibrate()` auf Gecko implementiert.
- `navigator.mozApps` gibt ein [`Apps`](/de/docs/DOM/Apps)-Objekt zurück, das Sie verwenden können, um [offene Webanwendungen](/de/docs/Web/Progressive_web_apps) zu installieren und zu verwalten.
- `MozBeforePaint`-Events werden nicht mehr ausgelöst. Konsumenten von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die diese verwendeten, sollten stattdessen eine Rückruffunktion übergeben.
- Die Unterstützung zum Abbrechen von Anfragen für Animationsrahmen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt einen Anfragen-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere in den DOM4-Spezifikationen eingeführte [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Events, `UIEvent` und `MouseEvent`) werden jetzt unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Die Unterstützung für die [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement)-Eigenschaften auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das vorher vollbild ausgeführte Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt keine Argument-freie Form mehr. Diese Form wurde kaum verwendet und wird wahrscheinlich nicht Teil des Standards.
- SVG-als-Bild kann jetzt ohne [Verunreinigung der Leinwand](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f) in eine Leinwand gezeichnet werden.
- Die nicht-standardisierte `countryCode`-Eigenschaft der `GeoPositionAddress`-Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- Früher wurden, wenn der Benutzer einem Link folgte, die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt gesetzten Werte von der neuen Seite beibehalten. Jetzt wird für die neue Seite ein neues `navigator`-Objekt erstellt. Dies verleiht Firefox das gleiche Verhalten wie alle anderen Browser.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust)-Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Conditional Rules](/de/docs/CSS/CSS3#conditional_rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können nun zu [@media](/de/docs/Web/CSS/@media) und [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-DOM-Schnittstelle unterstützt jetzt die Methode `getElementById`.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt binäre Nachrichten (siehe [Firefox bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde ohne Präfix verwendet (siehe [Firefox bug 666349](https://bugzil.la/666349) und [Firefox bug 695635](https://bugzil.la/695635)).
- Zuvor waren Nachrichten, die mit WebSockets in Firefox gesendet und empfangen wurden, auf eine Größe von 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherbeschränkungen möglicherweise verhindern, dass sie so groß sind, unterstützt Firefox es).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch einer der folgenden Typen sein: Datum, Arrays und Float (und nicht nur String und Integer).
- Ab jetzt werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; beispielsweise:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nachdem der Code ausgeführt wurde, sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement)-Zähler für Objektspeicher über alle Objektspeicher einer Datenbank hinweg geteilt, während gemäß Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies ist jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` [zu erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist nun möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex` parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters)).
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis löst nun eine Blasenbildung aus; zusätzlich wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann nun verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt nun komplexe Schlüsselpfade, z. B. `foo.bar`, um die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann nun ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox bug 694138](https://bugzil.la/694138)).

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Begrenzer für {{rfc(2231)}} und {{rfc(5987)}} entfernt hat, wurde rückgängig gemacht, da dies einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt einen Identifikator, der [den Server darüber informiert, ob es sich bei dem zugreifenden Firefox um ein Telefon oder ein Tablet handelt](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu komponieren.
- Die [View Source-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter, um die Zeichensatz-Interpretation beim Lesen des Eingabestreams zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen bequemen, einfach zu bedienenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist der gleiche Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory`-Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Handling-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport`-Schnittstelle unterstützt jetzt das Hinzufügen eines Text-Badges zum Anwendungssymbol im Dock unter Verwendung ihres neuen `badgeText`-Attributs.
- In der `nsINavHistoryResultObserver`-Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstatt der veralteten Methoden `containerOpened()` und `containerClosed()`.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Theme-bezogene Änderungen

- Die `omni.jar`-Datei wird jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>) genannt.

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Beginn des Hoverns des Mauszeigers und der Anzeige eines Tooltips.

### Buildsystem-Änderungen

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Andere Änderungen

- Add-ons, die seit langer Zeit nicht mehr aktualisiert wurden, gelten jetzt nicht mehr standardmäßig als kompatibel; dies betrifft derzeit Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
