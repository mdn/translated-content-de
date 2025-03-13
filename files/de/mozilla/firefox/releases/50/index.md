---
title: Firefox 50 für Entwickler
slug: Mozilla/Firefox/Releases/50
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 50 wurde am 15. November 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Der Standardstil von {{HTMLElement("bdo")}} setzt nun {{cssxref("unicode-bidi")}} auf den Wert `isolate-override` ([Firefox Fehler 1249497](https://bugzil.la/1249497)).
- Das Setzen des [`src`](/de/docs/Web/HTML/Element/track#src)-Attributs des {{HTMLElement("track")}}-Elements funktioniert jetzt korrekt ([Firefox Fehler 1281418](https://bugzil.la/1281418)).
- Das `referrerpolicy`-Attribut an den {{HTMLElement("area")}}, {{HTMLElement("a")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}} und {{HTMLElement("link")}} Elementen ist jetzt standardmäßig verfügbar ([Firefox Fehler 1223838](https://bugzil.la/1223838), [Firefox Fehler 1264165](https://bugzil.la/1264165)).

### CSS

- Ecken mit border-radius und gestrichelten sowie gepunkteten Stilen werden jetzt mit dem angegebenen Stil anstelle eines festen Stils gerendert ([Firefox Fehler 382721](https://bugzil.la/382721)).
- Der nicht standardisierte Pseudoklassenselektor `:-moz-full-screen-ancestor` wurde entfernt ([Firefox Fehler 1199529](https://bugzil.la/1199529)).
- Die {{cssxref("box-sizing")}}`: padding-box` wurde entfernt, da sie nicht mehr Teil der Spezifikation ist und Firefox der einzige große Browser war, der sie implementiert hatte ([Firefox Fehler 1166728](https://bugzil.la/1166728)).
- Die drei Werte `isolate`, `isolate-override` und `plaintext` der {{cssxref("unicode-bidi")}}-Eigenschaft sind nun unpräfixiert ([Firefox Fehler 1141895](https://bugzil.la/1141895)).
- Im Quirks-Modus erbt das Aufzählungszeichen eines Listenelements jetzt die Größe der Liste, wie im Standardmodus ([Firefox Fehler 648331](https://bugzil.la/648331)).
- Die Pseudoklassen {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}} wurden geändert, sodass sie nicht mehr auf deaktivierte oder nur-lesbare Eingaben angewendet werden ([Firefox Fehler 1264157](https://bugzil.la/1264157)).
- Die Pseudoklasse {{cssxref(":any-link")}} ist nun unpräfixiert ([Firefox Fehler 843579](https://bugzil.la/843579)).
- Der `space`-Wert für {{cssxref("border-image-repeat")}} wurde implementiert ([Firefox Fehler 720531](https://bugzil.la/720531)).

### JavaScript

- Die ES2015-Eigenschaft {{jsxref("Symbol.hasInstance")}} wurde implementiert ([Firefox Fehler 1054906](https://bugzil.la/1054906)).
- Die ES2017-Methode {{jsxref("Object.getOwnPropertyDescriptors()")}} wurde implementiert ([Firefox Fehler 1245024](https://bugzil.la/1245024)).
- Das Verhalten von \W in {{jsxref("RegExp")}} mit den Unicode- und ignoreCase-Flags wurde geändert, um mit dem neuesten Entwurf der Spezifikation übereinzustimmen. Jetzt stimmt es nicht mehr mit K, S, k, s und dem KELVIN-ZEICHEN (U+212A) sowie dem LATIN KLEINBUCHSTABEN LANGES S (U+017F) überein ([Firefox Fehler 1281739](https://bugzil.la/1281739)).

### Entwicklerwerkzeuge

- [Die Webkonsole versteht jetzt Quellkarten.](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#source-maps)
- [Der Speicherinspektor ermöglicht jetzt das Löschen einzelner Elemente aus IndexedDB-Objektspeichern.](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb)
- [Das Speichertool ist standardmäßig aktiviert.](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Das Boxmodellansicht wurde in die Berechneten Ansicht verschoben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#computed-view)
- [Die Webkonsole zeigt jetzt Stapelverfolgungen für XHR- oder Fetch()-Netzwerkanfragen an.](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details)

[Alle Devtools-Fehler, die zwischen Firefox 49 und Firefox 50 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263766&chfield=resolution&chfieldfrom=2016-06-06&chfieldvalue=FIXED&resolution=FIXED&classification=Client%20Software&chfieldto=2016-08-01&query_format=advanced&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### HTTP

- Der experimentelle (und veraltete) [SPDY](https://en.wikipedia.org/wiki/SPDY) 3.1 ist jetzt standardmäßig deaktiviert [Firefox Fehler 1287132](https://bugzil.la/1287132).
- Unterstützung für {{HTTPHeader("X-Content-Type-Options")}} wurde hinzugefügt ([Firefox Fehler 471020](https://bugzil.la/471020)).
- Die Cookie-Präfixe `__Host-` und `__Secure-` wurden implementiert. Siehe {{HTTPHeader("Set-Cookie")}} und [Firefox Fehler 1283368](https://bugzil.la/1283368).
- Der {{HTTPHeader("Referrer-Policy")}}-Header wurde implementiert [Firefox Fehler 1264164](https://bugzil.la/1264164).

### Sicherheit

- Das [`ping`](/de/docs/Web/HTML/Element/a#ping) Attribut des {{htmlelement("a")}} Elements beachtet jetzt die [`connect-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#connect-src) [CSP 1.1 Richtliniendirektive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) ([Firefox Fehler 1100181](https://bugzil.la/1100181)).
- Unterstützung für die [`sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#sandbox) [CSP](/de/docs/Web/HTTP/Guides/CSP) Direktive wurde hinzugefügt ([Firefox Fehler 671389](https://bugzil.la/671389)).
- Es ist nun möglich, eine [Inhalts-Sicherheitsrichtlinie für Worker festzulegen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy) ([Firefox Fehler 959388](https://bugzil.la/959388)).
- Die Methode [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) löst keine Ausnahme mehr aus, wenn die Beacon-Daten aufgrund einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)-Einschränkung nicht gesendet werden konnten; stattdessen wird `false` zurückgegeben, wie erwartet ([Firefox Fehler 1234813](https://bugzil.la/1234813)).
- Die Unterstützung für RC4-Verschlüsselung wurde in Firefox 36 abgelehnt und in Firefox 44 standardmäßig deaktiviert. Die einjährige Schonfrist ist vorbei, daher entfernt Firefox 50 jegliche Unterstützung für RC4 (Google Chrome entfernte die Unterstützung für RC4 im August 2016). Jedes Mal, wenn Firefox auf RC4-Verschlüsselung trifft, wird ein `SSL_ERROR_NO_CYPHER_OVERLAP`-Fehler gemeldet.

### Netzwerke

- Wenn während einer asynchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ein Fehler aufgetreten ist, gibt die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) jetzt einen leeren String zurück ([Firefox Fehler 1286744](https://bugzil.la/1286744)).
- Anstelle eines `NetworkError` löst ein asynchrones [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), das aufgrund von CORS oder anderen Netzwerkeinschränkungen fehlschlägt, jetzt einen [`error`](/de/docs/Web/API/XMLHttpRequest/error_event) aus, der wie jeder andere Fehler abgefangen werden kann ([Firefox Fehler 709991](https://bugzil.la/709991)).
- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben jetzt auch standardmäßig leere Header zurück. Dies kann über die Einstellung `network.http.keep_empty_response_headers_as_empty_string` gesteuert werden ([Firefox Fehler 918721](https://bugzil.la/918721)).
- Die `only-if-cached`-Option wurde zu [`Request.cache`](/de/docs/Web/API/Request/cache) hinzugefügt ([Firefox Fehler 1272436](https://bugzil.la/1272436)).

### DOM

- Die `once`-Option für [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird jetzt unterstützt ([Firefox Fehler 1287706](https://bugzil.la/1287706)).
- Die Schnittstelle [`NodeList`](/de/docs/Web/API/NodeList) ist jetzt iterierbar und die Methoden [`forEach()`](/de/docs/Web/API/NodeList/forEach), [`values()`](/de/docs/Web/API/NodeList/values), [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries) und [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys) sind jetzt verfügbar ([Firefox Fehler 1290636](https://bugzil.la/1290636)).
- Die Schnittstelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ist jetzt iterierbar und die Methoden [`forEach()`](/de/docs/Web/API/DOMTokenList/forEach), [`values()`](/de/docs/Web/API/DOMTokenList/values), [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries) und [`DOMTokenList.keys()`](/de/docs/Web/API/DOMTokenList/keys) sind jetzt verfügbar ([Firefox Fehler 1290636](https://bugzil.la/1290636)).
- Die Methoden [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) haben jetzt einen optionalen `options`-Parameter zum Erstellen von [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) ([Firefox Fehler 1276579](https://bugzil.la/1276579)).

### SVG

- Das `allowReorder`-Attribut wurde entfernt und das Verhalten, das es festlegte, ist jetzt der Standard für SVG {{SVGElement("switch")}}-Elemente ([Firefox Fehler 1279690](https://bugzil.la/1279690)).
- Das `defer`-Schlüsselwort für das {{SVGAttr("preserveAspectRatio")}}-Attribut an SVG {{SVGElement("image")}} Elementen wurde entfernt, um der neuesten SVG2-Spezifikation zu entsprechen ([Firefox Fehler 1280425](https://bugzil.la/1280425)).

### Drag and Drop API

- Die [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) Eigenschaft wurde implementiert, die den Zugriff auf mehrere Elemente ermöglicht, die mittels der HTML Drag and Drop API gezogen und fallen gelassen werden. Dafür werden auch die Schnittstellen [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) und [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList) jetzt unterstützt ([Firefox Fehler 906420](https://bugzil.la/906420)). Dies ist standardmäßig aktiviert.
- Die alten, veralteten Firefox-spezifischen Drag-and-Drop-API-Ereignisse `dragdrop` und `draggesture` werden nicht mehr unterstützt. Stellen Sie sicher, dass Sie jeden Code, der diese noch verwendet, auf die Verwendung der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) aktualisieren ([Firefox Fehler 1162050](https://bugzil.la/1162050)).

### Pointer Lock API

- Die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) ist jetzt unpräfixiert ([Firefox Fehler 991899](https://bugzil.la/991899)).
- Vor Firefox 50 fragte [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) um Erlaubnis mit einem Türhänger, und der Pointer Lock wurde nicht aktiviert, bis der Benutzer die Erlaubnis erteilte. Ab Firefox 50 ist Pointer Lock wie die [Fullscreen API](/de/docs/Web/API/Fullscreen_API): Es wird sofort gewährt, aber eine Benachrichtigung wird angezeigt, die erklärt, wie der Benutzer es verlassen kann ([Firefox Fehler 1273351](https://bugzil.la/1273351)).

### IndexedDB

- Ein [`close`](/de/docs/Web/API/IDBDatabase/close_event)-Ereignis wird jetzt an das [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt gesendet, wenn die entsprechende Datenbank unerwartet geschlossen wird ([Firefox Fehler 1151017](https://bugzil.la/1151017)).

### Service Workers

- Die Methode [`WindowClient.navigate()`](/de/docs/Web/API/WindowClient/navigate) wurde implementiert. Diese Methode ermöglicht es Ihnen, eine angegebene URL in einem Clientfenster zu öffnen, das von dem Service Worker kontrolliert wird ([Firefox Fehler 1218148](https://bugzil.la/1218148)).

### WebGL

- Die [`EXT_shader_texture_lod`](/de/docs/Web/API/EXT_shader_texture_lod) WebGL-Erweiterung wurde implementiert ([Firefox Fehler 1111689](https://bugzil.la/1111689)).
- Die texImage-Methoden wurden für [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) aktualisiert, um PBOs (`PIXEL_UNPACK_BUFFER`) zu implementieren ([Firefox Fehler 1280499](https://bugzil.la/1280499)).

### WebRTC

- Das Hinzufügen eines Tracks zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) generiert jetzt das [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event) Ereignis, wie in der Spezifikation beschrieben. Das Ereignis ist vom Typ [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent) und wird auf dem Stream ausgelöst, zu dem der Track hinzugefügt wurde. Sie können entweder [`MediaStream.addEventListener('addtrack', ...)`](/de/docs/Web/API/EventTarget/addEventListener) oder die `onaddtrack`-Eigenschaft verwenden, um `"addtrack"`-Ereignisse zu bearbeiten.
- Die Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) unterstützt jetzt das [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event) Ereignis und dessen Ereignisbehandler.
- Firefox unterstützt jetzt die [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState)-Eigenschaft, die angibt, ob der Track live oder dauerhaft beendet ist.
- Die Methoden [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints) und [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) wurden implementiert; diese ermöglichen es Ihnen, die zuletzt angewendete Reihe von benutzerdefinierten Eigenkontraints und die tatsächlichen Werte aller constratbaren Eigenschaften des Tracks zu erhalten. Die begleitenden Datentypen wurden ebenfalls dokumentiert.
- Die `RTCDataChannel.stream` Eigenschaft wurde entfernt. Diese wurde in [Firefox 24](/de/docs/Mozilla/Firefox/Releases/24) durch [`RTCDataChannel.id`](/de/docs/Web/API/RTCDataChannel/id) ersetzt, aber aus Gründen der Rückwärtskompatibilität unterstützt. Bitte aktualisieren Sie Ihren Code, um die `id`-Eigenschaft zu verwenden, wenn Sie dies noch nicht getan haben.

### Web Audio API

- Die Schnittstelle [`PannerNode`](/de/docs/Web/API/PannerNode) unterstützt jetzt die 3D-Kartesischen-Raum-Eigenschaften für die Position ([`PannerNode.positionX`](/de/docs/Web/API/PannerNode/positionX), [`PannerNode.positionY`](/de/docs/Web/API/PannerNode/positionY) und [`PannerNode.positionZ`](/de/docs/Web/API/PannerNode/positionZ)) und die Richtung ([`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX), [`PannerNode.orientationY`](/de/docs/Web/API/PannerNode/orientationY), [`PannerNode.orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)) einer Audioquelle.
- Die Schnittstelle [`IIRFilterNode`](/de/docs/Web/API/IIRFilterNode), die einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter implementiert, wurde implementiert.
- Das Drosseln in Hintergrund-Tabs von Timern, die durch [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval), [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) erstellt wurden, erfolgt nicht mehr, wenn eine [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`AudioContext`](/de/docs/Web/API/AudioContext) aktiv Sound abspielt. Dies sollte helfen, Probleme mit zeitlich empfindlicher Audiowiedergabe (wie Musikplayern, die einzelne Noten mit Timern generieren) im Hintergrund zu vermeiden ([Firefox Fehler 1181073](https://bugzil.la/1181073)).

### Audio/Video

- Das `AlignSetting`-Enum (repräsentiert mögliche Werte für [`VTTCue.align`](/de/docs/Web/API/VTTCue/align)) enthielt fälschlicherweise zuvor den Wert `"middle"` anstelle von `"center"`. Dies wurde korrigiert ([Firefox Fehler 1276130](https://bugzil.la/1276130)).
- Die nicht standardisierte und experimentelle Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) sucht jetzt asynchron zum nächsten Frame in den Medien und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald das Suchen abgeschlossen ist.
- Die Implementierung von [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) wurde korrigiert, um {{HTMLElement("track")}}-Elementen das Laden von Ressourcen zu ermöglichen, auch wenn sie sich nicht in einem Dokument befinden ([Firefox Fehler 871747](https://bugzil.la/871747)).

### Akku-API

- Die `Navigator.battery` Eigenschaft, die seit Firefox 43 veraltet war, ist jetzt obsolet und wurde entfernt. Verwenden Sie stattdessen die [`navigator.getBattery()`](/de/docs/Web/API/Navigator/getBattery)-Methode, um ein Akku-{{jsxref("Promise")}} zu erhalten, das erfüllt wird, wenn der [`BatteryManager`](/de/docs/Web/API/BatteryManager) zur Verwendung bereit ist; der [`BatteryManager`](/de/docs/Web/API/BatteryManager) wird dem Erfüllungs-Handler für das Promise übergeben ([Firefox Fehler 12593355](https://bugzil.la/12593355)).

### Dateien und Verzeichnisse

- Ein Teilbereich der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde implementiert, um die Kompatibilität mit Websites zu verbessern, die zuvor nur mit Google Chrome kompatibel waren ([Firefox Fehler 1265767](https://bugzil.la/1265767)).

  - Die asynchronen API-Schnittstellen wurden implementiert, mit dem Vorbehalt, dass nur das Lesen von Dateien unterstützt wird; zum Beispiel ist die Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter) eine No-Op.
  - Diese Schnittstellen wurden implementiert:

    - [`FileSystem`](/de/docs/Web/API/FileSystem)
    - [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) (nur Eigenschaften; die Methoden wurden nicht implementiert)
    - [`FileSystemFileEntry`](/de/docs/Web/API/FileSystemFileEntry) (außer [`createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter))
    - [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry) (außer [`removeRecursively()`](/de/docs/Web/API/FileSystemDirectoryEntry/removeRecursively))
    - [`FileSystemDirectoryReader`](/de/docs/Web/API/FileSystemDirectoryReader)

  - [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) sowie das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut des {{HTMLElement("input")}}-Elements wurden implementiert; dies ermöglicht es Ihnen, eine Datei-Eingabe so zu konfigurieren, dass Verzeichnisse anstelle von Dateien akzeptiert werden ([Firefox Fehler 1258489](https://bugzil.la/1258489)).
  - [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) wurde implementiert; dies gibt ein Array von [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry)-basierten Objekten zurück, die die ausgewählten Elemente darstellen.
  - [`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath) wurde implementiert; dies enthält den Pfad der Datei relativ zur Wurzel des enthaltenden [`FileSystemDirectoryEntry`](/de/docs/Web/API/FileSystemDirectoryEntry), das sich unter den Elementen der Liste befindet, die von [`HTMLInputElement.webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) zurückgegeben wird.
  - Diese APIs sind jetzt standardmäßig aktiviert; einige waren zuvor verfügbar, aber nur hinter einer Einstellung ([Firefox Fehler 1288683](https://bugzil.la/1288683)).

- Wir haben [`DataTransferItem.webkitGetAsEntry()`](/de/docs/Web/API/DataTransferItem/webkitGetAsEntry) als Teil der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) implementiert; dies ermöglicht es Ihnen, ein [`FileSystemEntry`](/de/docs/Web/API/FileSystemEntry) zu erhalten, das eine abgelegte Datei darstellt ([Firefox Fehler 1289255](https://bugzil.la/1289255)). Dies ist standardmäßig aktiviert.
- Die `HTMLInputElement.directory`-Eigenschaft, die Teil des [Directory Upload API](https://wicg.github.io/directory-upload/proposal.html)-Vorschlags war, wurde in `allowdirs` umbenannt ([Firefox Fehler 1288681](https://bugzil.la/1288681)). Diese Eigenschaft ist hinter einer Einstellung verborgen.

## Ältere Versionen

{{Firefox_for_developers}}
