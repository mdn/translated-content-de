---
title: Firefox 11 für Entwickler
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Firefox 11 wurde am 13. März 2012 veröffentlicht. Dieser Artikel bietet Informationen zu den neuen Funktionen und behobenen Hauptfehlern in dieser Version sowie Links zu detaillierteren Dokumentationen für sowohl Web- als auch Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Die Attribute `muted` und `loop` auf den {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wurden implementiert.

### DOM

- Die Eigenschaft [`element.outerHTML`](/de/docs/Web/API/Element/outerHTML) wird jetzt bei HTML-Elementen unterstützt.
- [`XMLHttpRequest` unterstützt HTML-Parsing](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest).
- Unterstützung für die Verwendung der Attribute `responseType` und `withCredentials` von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) bei synchronen Anfragen wurde entfernt. Der Versuch, dies zu tun, wirft eine `NS_ERROR_DOM_INVALID_ACCESS_ERR` Ausnahme. Diese Änderung wurde der W3C zur Standardisierung vorgeschlagen.
- Die neue Methode [`navigator.mozVibrate()`](/de/docs/Web/API/Navigator/vibrate) ermöglicht, das Gerät vibrieren zu lassen, wo dies unterstützt wird; dies ist in Gecko als `mozVibrate()` implementiert.
- `navigator.mozApps` gibt ein [`Apps`](/de/docs/DOM/Apps) Objekt zurück, das Sie zur Installation und Verwaltung von [offenen Webanwendungen](/de/docs/Web/Progressive_web_apps) verwenden können.
- `MozBeforePaint` Ereignisse werden nicht mehr erzeugt. Nutzer von [`mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) sollten stattdessen eine Callback-Funktion übergeben.
- Unterstützung zum Abbrechen von Animations-Frame-Anfragen wurde hinzugefügt; [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) gibt nun einen Anfrage-ID-Wert zurück, den Sie an [`window.mozCancelAnimationFrame()`](/de/docs/Web/API/Window/cancelAnimationFrame) übergeben können, um die Anfrage abzubrechen.
- Mehrere [`Event`](/de/docs/Web/API/Event) Konstruktoren (`Event`, HTML-Ereignisse, `UIEvent` und `MouseEvent`), die in DOM4 Spezifikationen eingeführt wurden, werden nun unterstützt.
- Die [Battery API](/de/docs/Web/API/Battery_Status_API) ist jetzt standardmäßig aktiviert.
- Unterstützung für die [`defaultMuted`](/de/docs/Web/API/HTMLMediaElement), [`loop`](/de/docs/Web/API/HTMLMediaElement) und [`muted`](/de/docs/Web/API/HTMLMediaElement) Eigenschaften auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) wurde hinzugefügt.
- Der Aufruf von [`Document/exitFullscreen`](/de/docs/Web/API/Document/exitFullscreen) stellt nun das zuvor im Vollbild angezeigte Element wieder her, wenn ein anderes Element im Vollbildmodus war, als die Methode [`Element/requestFullScreen`](/de/docs/Web/API/Element/requestFullscreen) des aktuellen Elements aufgerufen wurde.
- Die Methode [`window.mozRequestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) unterstützt nicht mehr eine Form ohne Argumente. Diese Form wurde kaum genutzt und wird wahrscheinlich nicht Teil des Standards.
- SVG-als-Bild kann nun in eine Leinwand gezeichnet werden, ohne [die Leinwand zu verunreinigen](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Die nicht standardisierte `countryCode` Eigenschaft der `GeoPositionAddress` Schnittstelle wurde entfernt; siehe `nsIDOMGeoPositionAddress`.
- [Server-sent events](/de/docs/Web/API/Server-sent_events) unterstützen nun [CORS](/de/docs/Web/HTTP/Guides/CORS).
- Bisher wurden beim Folgen eines Links die auf dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt gesetzten Werte von der neuen Seite übernommen. Jetzt wird ein neues `navigator` Objekt für die neue Seite erstellt. Dies macht Firefox mit allen anderen Browsern konsistent.

### CSS

- Die [`text-size-adjust`](/de/docs/Web/CSS/text-size-adjust) Eigenschaft wird nun unterstützt.
- [CSS3](/de/docs/CSS/CSS3) [Bedingte Regeln](/de/docs/CSS/CSS3#conditional_rules) werden nun besser unterstützt: Verschachtelte Anweisungen können nun zu [@media](/de/docs/Web/CSS/@media), [@-moz-document](/de/docs/Web/CSS/@document) hinzugefügt werden. (Siehe [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) und [CSS at-regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)).

### JavaScript

_Keine Änderung._

### SVG

- Die [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) DOM-Schnittstelle unterstützt jetzt die `getElementById` Methode.

### WebSocket

- Die [WebSocket](/de/docs/Web/API/WebSockets_API) API unterstützt jetzt Binärnachrichten (siehe [Firefox-Bug 676439](https://bugzil.la/676439)).
- Sowohl das Protokoll als auch die API wurden auf den neuesten Entwurf der Spezifikation aktualisiert und die API ist jetzt ohne Präfix (siehe [Firefox-Bug 666349](https://bugzil.la/666349) und [Firefox-Bug 695635](https://bugzil.la/695635)).
- Bisher waren die über WebSockets in Firefox gesendeten und empfangenen Nachrichten in ihrer Größe auf 16 MB begrenzt; sie können jetzt bis zu 2 GB groß sein (obwohl Speicherbegrenzungen möglicherweise verhindern, dass sie so groß werden, unterstützt Firefox dies).

### IndexedDB

- Die Unterstützung für [IDBFactory.cmp()](/de/docs/Web/API/IDBFactory#cmp%28%29) wurde hinzugefügt.
- Ein [IndexedDB-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key) kann nun auch einer der folgenden Typen sein: Datum, Arrays und Float (und nicht nur String und Integer).
- Ab jetzt werden Transaktionen gestartet, wenn die Transaktion erstellt wird, nicht wenn die erste Anfrage gestellt wird; betrachten Sie zum Beispiel folgendes:

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  Nach der Ausführung des Codes sollte der Objektspeicher den Wert "2" enthalten, da `trans2` nach `trans1` ausgeführt werden sollte.

- Vor Firefox 11 wurden Objektspeicher [`autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement) Zähler über alle Objektspeicher einer bestimmten Datenbank hinweg geteilt, während gemäß Spezifikation jeder Objektspeicher einen separaten Zähler haben sollte. Dies ist nun behoben.
- Es ist jetzt möglich, einen Index mit einem leeren `keyPath` zu erstellen.
- Es ist jetzt möglich, einen Multi-Entry-Index zu erstellen (siehe [`IDBObjectStore.createIndex` Parameter](/de/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- Das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event) Ereignis kann nun "bubblen"; zusätzlich wurde ein `onabort` Handler hinzugefügt.
- IndexedDB kann nun verwendet werden, um Dateien/Blobs zu speichern.
- IndexedDB unterstützt jetzt komplexe Schlüsselpfade, z.B. `foo.bar`, um auf die Eigenschaft `bar` von der Eigenschaft `foo` zuzugreifen.
- IndexedDB kann nun ein Array als `keyPath` akzeptieren, wenn ein [Objektspeicher](/de/docs/Web/API/IDBDatabase/createObjectStore) oder ein [Index](/de/docs/Web/API/IDBObjectStore/createIndex) erstellt wird ([Firefox-Bug 694138](https://bugzil.la/694138).)

### Netzwerk

- Die Änderung in Firefox 8, die die Unterstützung für Anführungszeichen als Trennzeichen für {{rfc(2231)}} und {{rfc(5987)}} entfernte, wurde rückgängig gemacht, da dies einige Websites, einschließlich Outlook Web Access, beeinträchtigte.
- Der User-Agent-String in HTTP-Headers beinhaltet nun einen Identifikator, der [dem Server anzeigt, ob der Zugriff auf den Firefox von einem Telefon oder Tablet](/de/docs/Gecko_user_agent_string_reference#mobile_and_tablet_indicators) erfolgt.

### Entwicklerwerkzeuge

- Der [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) bietet nun eine [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html), wenn Ihr System [WebGL](/de/docs/Web/API/WebGL_API) unterstützt.
- Der neue [Stil-Editor](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) bietet eine freie Möglichkeit, CSS-Stylesheets in Echtzeit zu bearbeiten und zu erstellen.
- Die [Quellcode-Anzeige](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) verwendet nun den neuen HTML5-Parser anstelle des alten HTML-Parsers.

## Änderungen für Mozilla- und Add-on-Entwickler

### JavaScript-Code-Module

#### NetUtil.jsm

- `readInputStreamToString()` hat einen neuen optionalen Parameter, um die Zeichensatzinterpretation beim Lesen des Eingabestroms zu konfigurieren.

#### Neue JavaScript-Code-Module

- [`source-editor.jsm`](/de/docs/JavaScript_code_modules/source-editor.jsm)
  - : Bietet einen praktischen, benutzerfreundlichen Quellcode-Editor, den Sie in Ihren Add-ons verwenden können. Dies ist derselbe Editor, der von _Scratchpad_ und anderen in Firefox integrierten Entwicklerwerkzeugen verwendet wird.

### Schnittstellenänderungen

- Die `mozIAsyncHistory` Schnittstelle hat eine neue Methode `mozIAsyncHistory.isURIVisited()`, um zu überprüfen, ob eine URI besucht wurde.
- Eine neue Schnittstelle `mozIVisitStatusCallback` wurde hinzugefügt, um die Callback-Verarbeitung für `mozIAsyncHistory.isURIVisited()` bereitzustellen.
- Die `nsIMacDockSupport` Schnittstelle unterstützt jetzt das Hinzufügen eines Textabzeichens zum Anwendungsicon im Dock mit ihrem neuen `badgeText` Attribut.
- In der `nsINavHistoryResultObserver` Schnittstelle müssen Sie jetzt `nsINavHistoryResultObserver.containerStateChanged()` implementieren, anstatt der veralteten `containerOpened()` und `containerClosed()` Methoden.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICharsetResolver`
- `nsIDOMNSElement`, siehe [Bug707576](https://bugzil.la/707576), verwenden Sie stattdessen `nsIDOMElement`.

### Änderungen an Themen

- Die Datei `omni.jar` heißt jetzt [`omni.ja`](</de/docs/Mozilla/About_omni.ja_(formerly_omni.jar)>).

### Einstellungsänderungen

- `ui.tooltipDelay`
  - : Gibt die Verzögerung in Millisekunden an, zwischen dem Beginn des Schwebens des Mauszeigers und der Anzeige eines Tooltips.

### Build-Systemänderungen

- Die Build-Option `--enable-tracejit` wurde entfernt.

### Sonstige Änderungen

- Add-ons, die schon lange nicht mehr aktualisiert wurden, werden nicht mehr standardmäßig als kompatibel angenommen; derzeit betrifft dies Add-ons, die eine `maxVersion` von 4.0 angeben.

## Siehe auch

{{Firefox_for_developers}}
