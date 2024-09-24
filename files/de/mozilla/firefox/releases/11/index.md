---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wichtigsten behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen für Webentwickler und Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` bei den {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wurden implementiert.

### DOM

- Die {{domxref("element.outerHTML")}}-Eigenschaft wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Die Unterstützung für die Verwendung der Attribute `responseType` und `withCredentials` des {{domxref("XMLHttpRequest")}} bei synchronen Anfragen wurde entfernt. Ein solcher Versuch löst jetzt eine `NS_ERROR_DOM_INVALID_ACCESS_ERR`-Ausnahme aus. Diese Änderung wurde der W3C zur Standardisierung vorgeschlagen.
- Die neue Methode {{domxref("window.navigator.mozVibrate()")}} ermöglicht es, das Gerät vibrieren zu lassen, wo dies unterstützt wird; dies ist in Gecko als `mozVibrate()` implementiert.
- {{domxref("window.navigator.mozApps")}} gibt ein [`Apps`](/de/docs/DOM/Apps)-Objekt zurück, das Sie verwenden können, um [Open-Web-Anwendungen](/de/docs/Web/Progressive_web_apps) zu installieren und zu verwalten.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. Verbraucher von {{domxref("window.requestAnimationFrame", "mozRequestAnimationFrame()")}}, die diese verwendet haben, sollten stattdessen eine Callback-Funktion übergeben.
- Die Unterstützung zum Abbrechen von Animationsbildanforderungen wurde hinzugefügt; {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} gibt jetzt einen Anforderungs-ID-Wert zurück, den Sie an {{domxref("window.cancelAnimationFrame", "window.mozCancelAnimationFrame()")}} übergeben können, um die Anforderung abzubrechen.
- Mehrere {{domxref("Event")}}-Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in den DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die {{domxref("window.navigator.mozBattery", "Battery API")}} ist jetzt standardmäßig aktiviert.
- Die Unterstützung für die Eigenschaften [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Der Aufruf von {{domxref("Document/exitFullscreen")}} stellt jetzt das zuvor im Vollbildmodus befindliche Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die {{domxref("Element/requestFullScreen")}}-Methode des aktuellen Elements aufgerufen wurde.
- Die Methode {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} unterstützt nicht mehr eine Form ohne Argumente. Diese Form wurde nicht viel genutzt und wird wahrscheinlich nicht Teil des Standards.
- SVG als Bild kann jetzt in ein Canvas gezeichnet werden, ohne [das Canvas zu kontaminieren](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Die nicht standardisierte `countryCode`-Eigenschaft des `GeoPositionAddress`-Interfaces wurde entfernt; sehen Sie `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/CORS).
- In der Vergangenheit wurden beim Folgen eines Links die auf dem {{domxref("window.navigator")}}-Objekt gesetzten Werte auf der neuen Seite beibehalten. Jetzt wird ein neues `navigator`-Objekt für die neue Seite erstellt. Dies bringt Firefox dazu, sich wie alle anderen Browser zu verhalten.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust)-Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Conditional Rules](/de/docs/CSS/CSS3#conditional_rules) werden jetzt besser unterstützt: verschachtelte Anweisungen können zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS-Syntax](/de/docs/Web/CSS/Syntax) und [CSS-at-Rules](/de/docs/Web/CSS/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Das {{domxref("SVGSVGElement")}}-DOM-Interface unterstützt jetzt die Methode `getElementById`.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API)-API unterstützt jetzt binäre Nachrichten (siehe [Firefox Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde ohne Präfix implementiert (siehe [Firefox Bug 666349](https://bugzil.la/666349) und [Firefox Bug 695635](https://bugzil.la/695635)).
- Bisher waren Nachrichten, die mit WebSockets in Firefox gesendet und empfangen wurden, auf eine Größe von 16 MB begrenzt; sie können nun bis zu 2 GB betragen (obwohl Speicherkapazitätsbeschränkungen dies möglicherweise verhindern, unterstützt Firefox dies).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann jetzt auch vom Typ Datum, Arrays und Float sein (und nicht nur String und Integer).
- Ab jetzt werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anforderung platziert wird; zum Beispiel betrachten Sie dies:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nachdem der Code ausgeführt wurde, sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die {{domxref("IDBObjectStore.autoIncrement","autoIncrement")}}-Zähler des Objektspeichers über alle Objektspeicher für eine gegebene Datenbank hinweg geteilt, wohingegen gemäß Spec jeder Objektspeicher einen separaten Zähler haben sollte. Dies ist nun behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` [zu erstellen](/de/docs/Web/API/IDBObjectStore/createIndex).
- Es ist jetzt möglich, einen Mehrfacheintrag-Index zu erstellen (siehe [`IDBObjectStore.createIndex`-Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das {{domxref("IDBTransaction/abort_event", "abort")}}-Ereignis wird jetzt weitergegeben; zusätzlich wurde ein `onabort`-Handler hinzugefügt.
- IndexedDB kann nun verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar` zum Zugriff auf Eigenschaft `bar` der Eigenschaft `foo`.
- IndexedDB kann nun ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernt hat, wurde rückgängig gemacht, da dies einige Seiten, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headern enthält jetzt eine Kennung, die [dem Server mitteilt, ob der zugreifende Firefox ein Telefon oder ein Tablet ist](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine flexible Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu erstellen.
- Die [Quellansichtsfunktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter, um die Zeichensatzinterpretation beim Lesen des Eingabestreams zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen komfortablen, einfach zu bedienenden Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist der gleiche Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory`-Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu prüfen, ob ein URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Handling-Funktionalität für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die Schnittstelle `nsIMacDockSupport` unterstützt jetzt das Hinzufügen eines Textabzeichens zum Anwendungssymbol im Dock mit ihrem neuen `badgeText`-Attribut.
- In der Schnittstelle `nsINavHistoryResultObserver` müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstelle der veralteten `containerOpened()`- und `containerClosed()`-Methoden.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die Datei `omni.jar` heißt nun [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Präferenzänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden zwischen dem Beginn des Mauszeigers über einem Objekt und der Anzeige eines Tooltips an.

### Änderungen im Build-System

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Weitere Änderungen

- Add-ons, die lange nicht aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angenommen; dies betrifft derzeit Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
