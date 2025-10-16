---
title: Firefox 11 Versionshinweise für Entwickler
short-title: Firefox 11
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen für Web-Entwickler und Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` auf den {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaft wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Attribute `responseType` und `withCredentials` bei synchronen Anfragen wurde entfernt. Der Versuch, dies zu tun, löst eine `NS_ERROR_DOM_INVALID_ACCESS_ERR`-Ausnahme aus. Diese Änderung wurde zur Standardisierung an das W3C vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht es, das Gerät bei unterstütztem Browser zu vibrieren; dies wird als `mozVibrate()` in Gecko implementiert.
- `navigator.mozApps` gibt ein `Apps`-Objekt zurück, das Sie verwenden können, um [offene Webanwendungen](/de/docs/Web/Progressive_web_apps) zu installieren und zu verwalten.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Verbraucher, die diese verwendet haben, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung für das Abbrechen von Animationsbildanforderungen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt einen Anforderungs-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anforderung abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event)-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in den DOM4-Spezifikationen eingeführt wurden, werden nun unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Der Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das zuvor im Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die `requestFullScreen`-Methode des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt nicht mehr die Argumentlose Form. Diese Form wurde nicht häufig verwendet und wird wahrscheinlich nicht Teil des Standards.
- SVG-als-Bild kann jetzt in ein Canvas gezeichnet werden, ohne das [Canvas zu verunreinigen](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- Die nicht standardisierte `countryCode`-Eigenschaft der `GeoPositionAddress`-Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/Guides/CORS).
- In der Vergangenheit wurden beim Folgen eines Links die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt gesetzten Werte durch die neue Seite beibehalten. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dies lässt Firefox wie alle anderen Browser verhalten.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust)-Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/Web/CSS) [Conditional Rules](/de/docs/Web/CSS/CSS_syntax/At-rule#block_at-rules) werden jetzt besser unterstützt: geschachtelte Anweisungen können nun zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-DOM-Schnittstelle unterstützt jetzt die `getElementById`-Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt binäre Nachrichten (siehe [Firefox-Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde nicht mehr vorangestellt (siehe [Firefox-Bug 666349](https://bugzil.la/666349) und [Firefox-Bug 695635](https://bugzil.la/695635)).
- Bisher waren die mit WebSockets in Firefox gesendeten und empfangenen Nachrichten auf 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherplatzbeschränkungen dies verhindern können, unterstützt Firefox es).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory/cmp) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann auch vom Typ Date, Arrays und Float sein (und nicht nur String und Integer).
- Ab jetzt werden Transaktionen beim Erstellen der Transaktion gestartet, nicht wenn die erste Anfrage gestellt wird; zum Beispiel:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden soll.

- Vor Firefox 11 wurden die `autoIncrement`-Zähler des Objektspeichers über alle Objektspeicher einer bestimmten Datenbank hinweg geteilt, während laut Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies ist jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu [erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist jetzt möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex`-Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis blubbert jetzt; zusätzlich wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann jetzt zum Speichern von Dateien/Blobs verwendet werden.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z. B. `foo.bar`, um auf die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` beim Erstellen eines [Objektspeichers](/de/docs/Web/API/IDBDatabase/createObjectStore) oder eines [Indexes](/de/docs/Web/API/IDBObjectStore/createIndex) akzeptieren ([Firefox-Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernt hat, wurde rückgängig gemacht, da dies einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt einen Indikator, der dem Server mitteilt, ob es sich bei dem zugreifenden Firefox um ein Telefon oder ein Tablet handelt.

### Entwicklerwerkzeuge

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freiformige Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu erstellen.
- Die [Quelltextanzeige](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter zur Konfiguration der Zeichensatzinterpretation beim Lesen des Eingabestreams.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen praktischen, benutzerfreundlichen Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory`-Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Funktionalität für Rückrufbehandlung für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport`-Schnittstelle unterstützt jetzt das Hinzufügen eines Textabzeichens zum Anwendungssymbol im Dock mithilfe ihres neuen `badgeText`-Attributs.
- In der `nsINavHistoryResultObserver`-Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` anstelle der veralteten Methoden `containerOpened()` und `containerClosed()` implementieren.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die `omni.jar`-Datei wird jetzt [`omni.ja`](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29) genannt.

### Veränderung der Voreinstellungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Beginn des Hoverns des Mauszeigers und der Anzeige eines Tooltips.

### Änderungen im Build-System

- Die `--enable-tracejit`-Build-Option wurde entfernt.

### Andere Änderungen

- Add-ons, die lange nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; dies betrifft derzeit Add-ons, die eine `maxVersion` von 4.0 angeben.
