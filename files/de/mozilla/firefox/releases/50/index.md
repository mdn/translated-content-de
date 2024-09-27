---
title: Firefox 50 für Entwickler
slug: Mozilla/Firefox/Releases/50
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwickler-Features von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 50 wurde am 15. November 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Der Standardstil von {{HTMLElement("bdo")}} setzt jetzt {{cssxref("unicode-bidi")}} mit dem Wert `isolate-override` ([Firefox-Bug 1249497](https://bugzil.la/1249497)).
- Das Setzen des [`src`](/de/docs/Web/HTML/Element/track#src)-Attributs des {{HTMLElement("track")}}-Elements funktioniert jetzt korrekt ([Firefox-Bug 1281418](https://bugzil.la/1281418)).
- Das `referrerpolicy`-Attribut auf {{HTMLElement("area")}}, {{HTMLElement("a")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}} und {{HTMLElement("link")}} ist nun standardmäßig verfügbar ([Firefox-Bug 1223838](https://bugzil.la/1223838), [Firefox-Bug 1264165](https://bugzil.la/1264165)).

### CSS

- Ecken mit Border-Radius und gestrichelten und gepunkteten Stilen werden nun mit dem angegebenen Stil anstelle eines durchgehenden Stils gerendert ([Firefox-Bug 382721](https://bugzil.la/382721)).
- Der nicht-standardisierte `:-moz-full-screen-ancestor` Pseudo-Klassen-Selektor wurde entfernt ([Firefox-Bug 1199529](https://bugzil.la/1199529)).
- Die {{cssxref("box-sizing")}}`: padding-box` wurde entfernt, da sie nicht mehr Teil der Spezifikation ist und Firefox der einzige große Browser war, der sie implementierte ([Firefox-Bug 1166728](https://bugzil.la/1166728)).
- Die drei Werte `isolate`, `isolate-override` und `plaintext` der {{cssxref("unicode-bidi")}}-Eigenschaft wurden ent-prefixed ([Firefox-Bug 1141895](https://bugzil.la/1141895)).
- Im Quirks-Modus erbt das Aufzählungszeichen eines Listenelements jetzt die Größe der Liste, wie im Standardmodus ([Firefox-Bug 648331](https://bugzil.la/648331)).
- Die {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}} Pseudo-Klassen haben das Verhalten geändert, um keine deaktivierten oder schreibgeschützten Eingaben zu matchen ([Firefox-Bug 1264157](https://bugzil.la/1264157)).
- Die {{cssxref(":any-link")}} Pseudo-Klasse ist jetzt unprefixed ([Firefox-Bug 843579](https://bugzil.la/843579)).
- Der `space` Wert für {{cssxref("border-image-repeat")}} wurde implementiert ([Firefox-Bug 720531](https://bugzil.la/720531)).

### JavaScript

- Die ES2015 {{jsxref("Symbol.hasInstance")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1054906](https://bugzil.la/1054906)).
- Die ES2017 {{jsxref("Object.getOwnPropertyDescriptors()")}}-Methode wurde implementiert ([Firefox-Bug 1245024](https://bugzil.la/1245024)).
- Das Verhalten von \W in {{jsxref("RegExp")}} mit Unicode- und IgnoreCase-Flags wurde geändert, um dem aktuellen Entwurf der Spezifikation zu entsprechen. Jetzt matched es nicht mehr mit K, S, k, s, und KELVIN SIGN (U+212A) sowie LATIN SMALL LETTER LONG S (U+017F) ([Firefox-Bug 1281739](https://bugzil.la/1281739)).

### Entwickler-Tools

- [Die Webkonsole versteht jetzt Quellkarten.](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#source-maps)
- [Der Speicherinspektor ermöglicht jetzt das Löschen einzelner Elemente aus IndexedDB-Objektspeichern.](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb)
- [Das Speicher-Tool ist standardmäßig aktiviert.](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Die Box-Modell-Ansicht wurde in die berechnete Ansicht verschoben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#computed-view)
- [Die Webkonsole zeigt jetzt Stack-Traces für XHR oder Fetch() Netzwerk-Anfragen an.](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details)

[Alle zwischen Firefox 49 und Firefox 50 behobenen Devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263766&chfield=resolution&chfieldfrom=2016-06-06&chfieldvalue=FIXED&resolution=FIXED&classification=Client%20Software&chfieldto=2016-08-01&query_format=advanced&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### HTTP

- Der experimentelle (und veraltete) [SPDY](https://en.wikipedia.org/wiki/SPDY) 3.1 ist jetzt standardmäßig deaktiviert [Firefox-Bug 1287132](https://bugzil.la/1287132).
- Unterstützung für {{HTTPHeader("X-Content-Type-Options")}} wurde hinzugefügt ([Firefox-Bug 471020](https://bugzil.la/471020)).
- Die Cookie-Präfixe `__Host-` und `__Secure-` wurden implementiert. Siehe {{HTTPHeader("Set-Cookie")}} und [Firefox-Bug 1283368](https://bugzil.la/1283368).
- Der {{HTTPHeader("Referrer-Policy")}}-Header wurde implementiert [Firefox-Bug 1264164](https://bugzil.la/1264164).

### Sicherheit

- Das [`ping`](/de/docs/Web/HTML/Element/a#ping)-Attribut des {{htmlelement("a")}}-Elements beachtet nun die [`connect-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#connect-src) [CSP 1.1 Richtlinie](/de/docs/Web/HTTP/Headers/Content-Security-Policy) ([Firefox-Bug 1100181](https://bugzil.la/1100181)).
- Unterstützung für die [`sandbox`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#sandbox) [CSP](/de/docs/Web/HTTP/CSP) Direktive wurde hinzugefügt ([Firefox-Bug 671389](https://bugzil.la/671389)).
- Es ist jetzt möglich, eine [Content Security Policy für Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy) zu setzen ([Firefox-Bug 959388](https://bugzil.la/959388)).
- Die Methode [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) wirft keine Ausnahme mehr, wenn die Beacon-Daten aufgrund einer [Content Security Policy](/de/docs/Web/HTTP/CSP)-Einschränkung nicht gesendet werden konnten; stattdessen wird `false` wie erwartet zurückgegeben ([Firefox-Bug 1234813](https://bugzil.la/1234813)).
- Die Unterstützung für RC4-Verschlüsselung wurde in Firefox 36 veraltet und in Firefox 44 standardmäßig deaktiviert. Die einjährige Schonfrist ist abgelaufen, daher entfernt Firefox 50 jegliche Unterstützung für RC4 (Google Chrome entfernte die Unterstützung für RC4 im August 2016). Ab sofort meldet Firefox bei RC4-Verschlüsselung einen `SSL_ERROR_NO_CYPHER_OVERLAP`-Fehler.

### Netzwerk

- Wenn während einer asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ein Fehler aufgetreten ist, gibt die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) jetzt eine leere Zeichenkette zurück ([Firefox-Bug 1286744](https://bugzil.la/1286744)).
- Anstelle eines `NetworkError` löst eine asynchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), die wegen CORS oder anderen Netzwerkeinschränkungen fehlschlägt, jetzt einen [`error`](/de/docs/Web/API/XMLHttpRequest/error_event) aus, der wie jeder andere Fehler abgefangen werden kann ([Firefox-Bug 709991](https://bugzil.la/709991)).
- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben jetzt standardmäßig auch leere Header zurück. Dies kann über die Präferenz `network.http.keep_empty_response_headers_as_empty_string` gesteuert werden ([Firefox-Bug 918721](https://bugzil.la/918721)).
- Die Option `only-if-cached` wurde zu [`Request.cache`](/de/docs/Web/API/Request/cache) hinzugefügt ([Firefox-Bug 1272436](https://bugzil.la/1272436)).

### DOM

- Die `once`-Option für [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird jetzt unterstützt ([Firefox-Bug 1287706](https://bugzil.la/1287706)).
- Die Schnittstelle [`NodeList`](/de/docs/Web/API/NodeList) ist jetzt iterierbar und die Methoden [`forEach()`](/de/docs/Web/API/NodeList/forEach), [`values()`](/de/docs/Web/API/NodeList/values), [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries) und [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys) sind jetzt verfügbar ([Firefox-Bug 1290636](https://bugzil.la/1290636)).
- Die Schnittstelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ist jetzt iterierbar und die Methoden [`forEach()`](/de/docs/Web/API/DOMTokenList/forEach), [`values()`](/de/docs/Web/API/DOMTokenList/values), [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries) und [`DOMTokenList.keys()`](/de/docs/Web/API/DOMTokenList/keys) sind jetzt verfügbar ([Firefox-Bug 1290636](https://bugzil.la/1290636)).
- Die Methoden [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) haben jetzt einen optionalen `options`-Parameter für das Erstellen von [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) ([Firefox-Bug 1276579](https://bugzil.la/1276579)).

### SVG

- Das `allowReorder`-Attribut wurde entfernt und das Verhalten, das es einstellte, ist jetzt der Standard für SVG {{SVGElement("switch")}}-Elemente ([Firefox-Bug 1279690](https://bugzil.la/1279690)).
- Das `defer`-Schlüsselwort für das {{SVGAttr("preserveAspectRatio")}}-Attribut auf SVG {{SVGElement("image")}}-Elementen wurde entfernt, um der neuesten SVG2-Spezifikation zu entsprechen ([Firefox-Bug 1280425](https://bugzil.la/1280425)).

### Drag and Drop API

- Die [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items)-Eigenschaft wurde implementiert, um Zugriff auf mehrere Elemente zu ermöglichen, die mit der HTML-Drag-and-Drop-API gezogen und verschoben werden. Dazu wurden die Schnittstellen [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) ebenfalls unterstützt ([Firefox-Bug 906420](https://bugzil.la/906420)). Diese ist standardmäßig aktiviert.
- Die alten, obsoleten Firefox-spezifischen Drag-and-Drop-API-Ereignisse `dragdrop` und `draggesture` werden nicht mehr unterstützt. Aktualisieren Sie bitte jeglichen Code, der diese noch verwendet, um die [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) zu nutzen ([Firefox-Bug 1162050](https://bugzil.la/1162050)).

### Pointer Lock API

- Die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) ist nun unprefixed ([Firefox-Bug 991899](https://bugzil.la/991899)).
- Vor Firefox 50 forderte [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) die Erlaubnis mit einem Doorhanger an, und der Zeiger-Sperre wurde erst aktiviert, wenn die Benutzererlaubnis erteilt wurde. Ab Firefox 50 funktioniert die Zeiger-Sperre wie die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API): Sie wird sofort gewährt, aber eine Benachrichtigung wird angezeigt, die dem Benutzer erklärt, wie er sie verlassen kann ([Firefox-Bug 1273351](https://bugzil.la/1273351)).

### IndexedDB

- Ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis wird nun an das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt gesendet, wenn die entsprechende Datenbank unerwartet geschlossen wird ([Firefox-Bug 1151017](https://bugzil.la/1151017)).

### Service Workers

- Die Methode [`WindowClient.navigate()`](/de/docs/Web/API/WindowClient/navigate) wurde implementiert. Diese Methode ermöglicht es Ihnen, eine angegebene URL in einem Client-Fenster zu öffnen, das vom Service-Arbeiter kontrolliert wird ([Firefox-Bug 1218148](https://bugzil.la/1218148)).

### WebGL

- Die [`EXT_shader_texture_lod`](/de/docs/Web/API/EXT_shader_texture_lod) WebGL-Erweiterung wurde implementiert ([Firefox-Bug 1111689](https://bugzil.la/1111689)).
- Die texImage-Methoden wurden für [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) aktualisiert, um PBOs (`PIXEL_UNPACK_BUFFER`) zu implementieren ([Firefox-Bug 1280499](https://bugzil.la/1280499)).

### WebRTC

- Das Hinzufügen eines Tracks zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) erzeugt jetzt das [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event)-Ereignis, wie in der Spezifikation beschrieben. Das Ereignis ist vom Typ [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent) und wird auf dem Stream ausgelöst, zu dem der Track hinzugefügt wurde. Sie können entweder [`MediaStream.addEventListener('addtrack', ...)`](/de/docs/Web/API/EventTarget/addEventListener) oder die Eigenschaft `onaddtrack` verwenden, um `"addtrack"`-Ereignisse zu behandeln.
- Die Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) unterstützt jetzt das [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)-Ereignis und dessen Ereignishandler.
- Firefox unterstützt jetzt die Eigenschaft [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState), die angibt, ob der Track aktiv oder dauerhaft beendet ist.
- Die Methoden [`getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) und [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle wurden implementiert; diese ermöglichen es, den zuletzt angewendeten Satz von benutzerdefinierten Eigenschaftseinschränkungen und die tatsächlichen Werte aller beschränkbaren Eigenschaften des Tracks zu erhalten. Auch die zugehörigen Datentypen wurden dokumentiert.
- Die `RTCDataChannel.stream`-Eigenschaft wurde entfernt. Diese wurde in [Firefox 24](/de/docs/Mozilla/Firefox/Releases/24) durch [`RTCDataChannel.id`](/de/docs/Web/API/RTCDataChannel/id) ersetzt, wurde jedoch zur Rückwärtskompatibilität unterstützt. Bitte aktualisieren Sie Ihren Code, um die `id`-Eigenschaft zu verwenden, falls Sie dies noch nicht getan haben.

### Web Audio API

- Die Schnittstelle [`PannerNode`](/de/docs/Web/API/PannerNode) unterstützt jetzt die Eigenschaften für den 3D-kartesischen Raum für die Position ([`PannerNode.positionX`](/de/docs/Web/API/PannerNode/positionX), [`PannerNode.positionY`](/de/docs/Web/API/PannerNode/positionY) und [`PannerNode.positionZ`](/de/docs/Web/API/PannerNode/positionZ)) und die Ausrichtung ([`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`PannerNode.orientationY`](/de/docs/Web/API/PannerNode/orientationY), [`PannerNode.orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)) einer Audioquelle.
- Die Schnittstelle [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode), die einen allgemeinen [Infinite Impulse Response](https://de.wikipedia.org/wiki/Infinite_Impulse_Response) (IIR)-Filter implementiert, wurde umgesetzt.
- Drosselung in Hintergrundtabs von Timern, die durch [`setInterval()`](/de/docs/Web/API/SetInterval) und [`setTimeout()`](/de/docs/Web/API/SetTimeout) erstellt wurden, tritt nicht mehr auf, wenn ein [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`AudioContext`](/de/docs/Web/API/AudioContext) aktiv Sound abspielt. Dies soll helfen, Probleme mit zeitlich empfindlicher Audiowiedergabe (wie Musikplayer, die einzelne Noten mit Timern erzeugen) im Hintergrund zu vermeiden ([Firefox-Bug 1181073](https://bugzil.la/1181073)).

### Audio/Video

- Das `AlignSetting`-Enum (das mögliche Werte für [`VTTCue.align`](/de/docs/Web/API/VTTCue/align) repräsentiert) beinhaltete zuvor fälschlicherweise den Wert `"middle"` statt `"center"`. Dies wurde korrigiert ([Firefox-Bug 1276130](https://bugzil.la/1276130)).
- Die nicht-standardisierte und experimentelle Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) springt nun asynchron zum nächsten Frame in den Medien anstatt synchron und gibt ein {{jsxref("Promise")}} zurück, das sich erfüllt, sobald der Sprung abgeschlossen ist.
- Die Implementierung von [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) wurde korrigiert, um zu erlauben, dass {{HTMLElement("track")}}-Elemente Ressourcen laden, auch wenn sie sich nicht in einem Dokument befinden ([Firefox-Bug 871747](https://bugzil.la/871747)).

### Battery API

- Die `Navigator.battery`-Eigenschaft, die seit Firefox 43 veraltet ist, ist jetzt obsolet und wurde entfernt. Verwenden Sie die Methode [`navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery), um ein Battery-{{jsxref("Promise")}} zu erhalten, das sich erfüllt, wenn der [`BatteryManager`](/de/docs/Web/API/BatteryManager) zur Verfügung steht; der [`BatteryManager`](/de/docs/Web/API/BatteryManager) wird in den Fulfillment-Handler des Promises übergeben ([Firefox-Bug 12593355](https://bugzil.la/12593355)).

### Dateien und Verzeichnisse

- Ein Teil der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde implementiert, um die Kompatibilität mit Websites zu verbessern, die zuvor nur mit Google Chrome kompatibel waren ([Firefox-Bug 1265767](https://bugzil.la/1265767)).

  - Die asynchronen API-Schnittstellen wurden implementiert, mit dem Vorbehalt, dass nur das Lesen von Dateien unterstützt wird; beispielsweise ist die [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter)-Methode eine No-Op.
  - Diese Schnittstellen wurden implementiert:

    - [`FileSystem`](/de/docs/Web/API/FileSystem)
    - [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) (nur Eigenschaften; die Methoden wurden nicht implementiert)
    - [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) (außer für [`createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter))
    - [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) (außer für [`removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively))
    - [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)

  - [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) sowie das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory) Attribut des {{HTMLElement("input")}}-Elements wurden implementiert; dies ermöglicht Ihnen, eine Dateieingabe so zu konfigurieren, dass Verzeichnisse anstelle von Dateien akzeptiert werden ([Firefox-Bug 1258489](https://bugzil.la/1258489)).
  - [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) wurde implementiert; dies gibt ein Array von [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-basierten Objekten zurück, die die ausgewählten Elemente darstellen.
  - [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) wurde implementiert; dies enthält den Pfad der Datei relativ zum Stamm des enthaltenden [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry), das unter den Elementen in der Liste war, die von [`HTMLInputElement.webkitGetEntries()`](/de/docs/Web/API/HTMLInputElement/webkitGetEntries) zurückgegeben wurde.
  - Siehe [Unterstützung der File and Directory Entries API in Firefox](/de/docs/Web/API/File_and_Directory_Entries_API/Firefox_support) für Details darüber, was wir in dieser API unterstützen und was nicht.
  - Diese APIs sind jetzt standardmäßig aktiviert; einige waren zuvor verfügbar, aber nur hinter einer Präferenz ([Firefox-Bug 1288683](https://bugzil.la/1288683)).

- Wir haben [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry) als Teil der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) implementiert; dies ermöglicht Ihnen, ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zu erhalten, das eine abgelegte Datei darstellt ([Firefox-Bug 1289255](https://bugzil.la/1289255)). Dies ist standardmäßig aktiviert.
- Die `HTMLInputElement.directory`-Eigenschaft, Teil des [Directory Upload API](https://wicg.github.io/directory-upload/proposal.html)-Vorschlags, wurde in `allowdirs` umbenannt ([Firefox-Bug 1288681](https://bugzil.la/1288681)). Diese Eigenschaft ist hinter einer Präferenz verborgen.

## Ältere Versionen

{{Firefox_for_developers}}
