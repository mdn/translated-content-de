---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen über die neuen Funktionen und die wesentlichen behobenen Fehler in dieser Version sowie Links zu detaillierteren Dokumentationen für Webentwickler und Erweiterungsentwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` bei {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wurden implementiert.

### DOM

- Die [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) Eigenschaft wird jetzt auf HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Unterstützung für die Verwendung der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) `responseType` und `withCredentials` Attribute bei synchronen Anfragen wurde entfernt. Ein Versuch, dies zu tun, wirft einen `NS_ERROR_DOM_INVALID_ACCESS_ERR` Ausnahmefehler. Diese Änderung wurde zur Standardisierung an das W3C vorgeschlagen.
- Die neue Methode [`window.navigator.mozVibrate()`](/de/docs/Web/API/Window/navigator/mozVibrate) ermöglicht das Vibrieren des Geräts, wo es unterstützt wird; dies ist als `mozVibrate()` auf Gecko implementiert.
- [`window.navigator.mozApps`](/de/docs/Web/API/Window/navigator/mozApps) gibt ein [`Apps`](/de/docs/DOM/Apps) Objekt zurück, das Sie verwenden können, um [Open Web Anwendungen](/de/docs/Web/Progressive_web_apps) zu installieren und zu verwalten.
- `MozBeforePaint`-Ereignisse werden nicht mehr ausgelöst. [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Nutzer, die diese verwendet haben, sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung für das Abbrechen von Animationsrahmenanfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt jetzt eine Anforderungs-ID zurück, die Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anforderung abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event) Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in den DOM4-Spezifikationen eingeführt wurden, werden jetzt unterstützt.
- Die [`Battery API`](/de/docs/Web/API/Window/navigator/mozBattery) ist jetzt standardmäßig aktiviert.
- Unterstützung für die [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) Eigenschaften auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Ein Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt jetzt das vorherige Vollbild-Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullScreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt die argumentfreie Form nicht mehr. Diese Form wurde kaum genutzt und wird wahrscheinlich nicht Bestandteil des Standards.
- SVG-als-Bild kann nun in ein Canvas gezeichnet werden, ohne [das Canvas zu verunreinigen](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Die nicht-standardisierte `countryCode` Eigenschaft der `GeoPositionAddress` Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen jetzt [CORS](/de/docs/Web/HTTP/CORS).
- In der Vergangenheit wurden die Werte, die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt gesetzt wurden, bei einem Link-Following auf die neue Seite übertragen. Jetzt wird für die neue Seite ein neues `navigator` Objekt erstellt. Dies führt dazu, dass sich Firefox wie alle anderen Browser verhält.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) Eigenschaft wird jetzt unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Bedingte Regeln](/de/docs/CSS/CSS3#conditional_rules) werden jetzt besser unterstützt: verschachtelte Anweisungen können nun zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS Syntax](/de/docs/Web/CSS/Syntax) und [CSS at-rules](/de/docs/Web/CSS/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) DOM-Schnittstelle unterstützt jetzt die `getElementById` Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API unterstützt jetzt Binärnachrichten (siehe [Firefox bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API wurde ohne Präfix veröffentlicht (siehe [Firefox bug 666349](https://bugzil.la/666349) und [Firefox bug 695635](https://bugzil.la/695635)).
- Bisher waren Nachrichten, die mit WebSockets in Firefox gesendet und empfangen wurden, auf eine Größe von 16 MB beschränkt; sie können jetzt bis zu 2 GB groß sein (obwohl Einschränkungen der Speicherkapazität möglicherweise verhindern, dass sie so groß sind, unterstützt Firefox es).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann auch einer der folgenden Typen sein: Date, Arrays und Float (und nicht nur String und Integer).
- Von nun an werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; zum Beispiel:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden die [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement) Zähler von Objektspeichern über alle Objektspeicher für eine gegebene Datenbank geteilt, während laut Spezifikation jeder Objektspeicher über einen eigenen Zähler verfügen sollte. Dieses Problem ist jetzt behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu erstellen.
- Es ist jetzt möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex` Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event) Ereignis blubbert jetzt; zudem wurde ein `onabort` Handler hinzugefügt.
- IndexedDB kann jetzt zur Speicherung von Dateien/Blobs verwendet werden.
- IndexedDB unterstützt nun komplexe Schlüsselpfade, z.B. `foo.bar`, um die Eigenschaft `bar` der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann jetzt ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox bug 694138](https://bugzil.la/694138)).

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen in {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da dies einige Seiten, einschließlich Outlook Web Access, störte.
- Der User-Agent-String in HTTP Headern enthält jetzt einen Bezeichner, der [dem Server mitteilt, ob das zugreifende Firefox ein Telefon oder ein Tablet ist](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators).

### Entwicklerwerkzeuge

- Der [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet jetzt eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Style Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu komponieren.
- Die [Quellansicht-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet jetzt den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Erweiterungsentwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen, optionalen Parameter, um die Zeichensatzinterpretation beim Lesen des Eingabestreams zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen bequemen, einfach zu bedienenden Quellcode-Editor, den Sie in Ihren Erweiterungen verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory` Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob ein URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um Callback-Handling-Funktionalitäten für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport` Schnittstelle unterstützt jetzt das Hinzufügen eines Textbadges zum Anwendungsicon im Dock mit dem neuen `badgeText` Attribut.
- In der Schnittstelle `nsINavHistoryResultObserver` müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstelle der veralteten Methoden `containerOpened()` und `containerClosed()`.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Themenbezogene Änderungen

- Die Datei `omni.jar` wird jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>) genannt.

### Präferenzänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, die zwischen dem Beginn des Hoverns des Mauszeigers und der Anzeige eines Tooltips besteht.

### Buildsystem-Änderungen

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Weitere Änderungen

- Add-ons, die seit langer Zeit nicht mehr aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angesehen; derzeit betrifft dies Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
