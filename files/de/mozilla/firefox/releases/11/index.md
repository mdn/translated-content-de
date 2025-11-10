---
title: Firefox 11 Versionshinweise für Entwickler
short-title: Firefox 11
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu ausführlicherer Dokumentation für sowohl Webentwickler als auch Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` auf {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) Eigenschaft wird jetzt auf HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Unterstützung für die Nutzung der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` und `withCredentials` Attribute bei synchronen Anfragen wurde entfernt. Der Versuch dies zu tun, wirft eine `NS_ERROR_DOM_INVALID_ACCESS_ERR` Ausnahme. Diese Änderung wurde dem W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät vibrieren zu lassen, wo unterstützt; dies ist als `mozVibrate()` in Gecko implementiert.
- `navigator.mozApps` gibt ein `Apps`-Objekt zurück, das Sie nutzen können, um [Open-Web-Anwendungen](/de/docs/Web/Progressive_web_apps) zu installieren und zu verwalten.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Verbraucher von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die diese genutzt haben, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung für das Abbrechen von Animationsframe-Anfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt einen Anforderungs-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere Konstruktoren von [`Event`](/de/docs/Web/API/Event) (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in DOM4-Spezifikationen eingeführt wurden, werden nun unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist nun standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das zuvor Vollbild-Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt nicht mehr die Argumentlos-Form. Diese Form wurde kaum verwendet und wird voraussichtlich kein Teil des Standards.
- SVG-als-Bild kann nun in ein Canvas gezeichnet werden, ohne dass [Canvas verfärbt wird](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- Die nicht standardmäßige `countryCode`-Eigenschaft der `GeoPositionAddress`-Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden beim Folgen eines Links die Werte, die im [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt gesetzt wurden, von der neuen Seite übernommen. Jetzt wird ein neues `navigator` Objekt für die neue Seite erstellt. Dadurch verhält sich Firefox wie alle anderen Browser.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/Reference/Properties/text-size-adjust) Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/Web/CSS) [Conditional Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules#block_at-rules) werden jetzt besser unterstützt: Verschachtelte Anweisungen können nun zu [@media](/de/docs/Web/CSS/Reference/At-rules/@media), [@-moz-document](/de/docs/Web/CSS/Reference/At-rules/@document) hinzugefügt werden. (Siehe [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) und [CSS-at-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) DOM-Schnittstelle unterstützt jetzt die `getElementById` Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API unterstützt jetzt binäre Nachrichten (siehe [Firefox Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde entprefixed (siehe [Firefox Bug 666349](https://bugzil.la/666349) und [Firefox Bug 695635](https://bugzil.la/695635)).
- Zuvor waren Nachrichten, die in Firefox mit WebSockets gesendet und empfangen wurden, auf 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speichergrenzen sie daran hindern könnten, so groß zu sein, unterstützt Firefox sie).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory/cmp) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann auch einer der folgenden Typen sein: Datum, Arrays und Float (und nicht nur String und Integer).
- Von nun an werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; betrachten Sie zum Beispiel dies:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nachdem der Code ausgeführt wurde, sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt wird.

- Vor Firefox 11 wurden Objektspeicher [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement) Zähler über alle Objektspeicher für eine gegebene Datenbank hinweg geteilt, während laut Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies ist nun behoben.
- Es ist jetzt möglich, einen Index zu [erstellen](/de/docs/Web/API/IDBObjectStore/createIndex) mit einem leeren `keyPath`.
- Es ist nun möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex` Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event) Ereignis propagiert jetzt; zusätzlich wurde ein `onabort` Handler hinzugefügt.
- IndexedDB kann jetzt verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar` um auf Eigenschaft `bar` von Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Begrenzungszeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernt hat, wurde rückgängig gemacht, da dies einige Seiten, einschließlich Outlook Web Access, unterbrochen hat.
- Der User-Agent-String in HTTP-Headern enthält nun einen Identifikator, der [dem Server mitteilt, ob es sich um ein Telefon oder ein Tablet handelt, das auf Firefox zugreift](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stile in Echtzeit zu bearbeiten und zu erstellen.
- Die [Quelltextanzeige](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter, um die Interpretation des Zeichensatzes während des Lesens des Eingabestreams zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen benutzerfreundlichen Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory` Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu prüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Verarbeitungsfunktionen für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport` Schnittstelle unterstützt jetzt das Hinzufügen eines Textabzeichens zum Anwendungs-Symbol im Dock mithilfe ihres neuen `badgeText` Attributes.
- In der `nsINavHistoryResultObserver` Schnittstelle müssen Sie nun `nsINavHistoryResultObserver.containerStateChanged()` implementieren anstelle der veralteten Methoden `containerOpened()` und `containerClosed()`.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie `nsIDOMElement` stattdessen.

### Themenbezogene Änderungen

- Die `omni.jar` Datei wird jetzt [`omni.ja`](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29) genannt.

### Präferenzänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Anfang der Mauszeigerbewegung über ein Objekt und der Anzeige eines Tooltip.

### Build-System-Änderungen

- Die `--enable-tracejit` Build-Option wurde entfernt.

### Weitere Änderungen

- Add-ons, die lange Zeit nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel betrachtet; derzeit sind dies Add-ons, die eine `maxVersion` von 4.0 angeben.
