---
title: Firefox 50 für Entwickler
slug: Mozilla/Firefox/Releases/50
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 50 wurde am 15. November 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Der Standardstil von {{HTMLElement("bdo")}} setzt nun {{cssxref("unicode-bidi")}} mit dem Wert `isolate-override` ([Firefox-Bug 1249497](https://bugzil.la/1249497)).
- Das Setzen des [`src`](/de/docs/Web/HTML/Element/track#src)-Attributs des {{HTMLElement("track")}}-Elements funktioniert jetzt korrekt ([Firefox-Bug 1281418](https://bugzil.la/1281418)).
- Das `referrerpolicy`-Attribut auf {{HTMLElement("area")}}, {{HTMLElement("a")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}} und {{HTMLElement("link")}}-Elementen ist jetzt standardmäßig verfügbar ([Firefox-Bug 1223838](https://bugzil.la/1223838), [Firefox-Bug 1264165](https://bugzil.la/1264165)).

### CSS

- Abgerundete Ecken mit gestrichelten und gepunkteten Stilen werden nun mit dem angegebenen Stil anstelle eines durchgehenden Stils gerendert ([Firefox-Bug 382721](https://bugzil.la/382721)).
- Der nicht standardisierte `:-moz-full-screen-ancestor` Pseudo-Klasse-Selektor wurde entfernt ([Firefox-Bug 1199529](https://bugzil.la/1199529)).
- Der {{cssxref("box-sizing")}}`: padding-box` wurde entfernt, da er nicht mehr Teil der Spezifikation ist und Firefox der einzige große Browser war, der ihn implementiert hat ([Firefox-Bug 1166728](https://bugzil.la/1166728)).
- Die drei Werte `isolate`, `isolate-override` und `plaintext` der {{cssxref("unicode-bidi")}}-Eigenschaft wurden unpräfigiert ([Firefox-Bug 1141895](https://bugzil.la/1141895)).
- Im Quirks-Modus erbt das Aufzählungszeichen eines Listenelements nun die Größe der Liste, wie im Standardmodus ([Firefox-Bug 648331](https://bugzil.la/648331)).
- Die {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}} Pseudo-Klassen haben ihr Verhalten geändert, um nicht deaktivierte oder schreibgeschützte Eingaben zu umfassen ([Firefox-Bug 1264157](https://bugzil.la/1264157)).
- Die {{cssxref(":any-link")}} Pseudo-Klasse ist jetzt unpräfigiert ([Firefox-Bug 843579](https://bugzil.la/843579)).
- Der `space`-Wert für {{cssxref("border-image-repeat")}} wurde implementiert ([Firefox-Bug 720531](https://bugzil.la/720531)).

### JavaScript

- Die ES2015 {{jsxref("Symbol.hasInstance")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1054906](https://bugzil.la/1054906)).
- Die ES2017-Methode {{jsxref("Object.getOwnPropertyDescriptors()")}} wurde implementiert ([Firefox-Bug 1245024](https://bugzil.la/1245024)).
- Das Verhalten von \W in {{jsxref("RegExp")}} mit Unicode- und IgnoreCase-Flags wurde geändert, um den neuesten Entwurfsspezifikationen zu entsprechen. Jetzt passt es nicht mehr zu K, S, k, s und KELVIN SIGN (U+212A) und LATIN SMALL LETTER LONG S (U+017F) ([Firefox-Bug 1281739](https://bugzil.la/1281739)).

### Entwicklerwerkzeuge

- [Die Web-Konsole versteht jetzt Quellkarten.](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#source-maps)
- [Der Speicherinspektor ermöglicht jetzt das Löschen einzelner Elemente aus IndexedDB-Objektspeichern.](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb)
- [Das Speichertool ist standardmäßig aktiviert.](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Die Box-Modellansicht wurde in die berechnete Ansicht verschoben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#computed-view)
- [Die Web-Konsole zeigt jetzt Stack-Traces für XHR- oder Fetch()-Netzwerkanfragen an.](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details)

[Alle zwischen Firefox 49 und Firefox 50 behobenen Entwicklerwerkzeuge-Bugs](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263766&chfield=resolution&chfieldfrom=2016-06-06&chfieldvalue=FIXED&resolution=FIXED&classification=Client%20Software&chfieldto=2016-08-01&query_format=advanced&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### HTTP

- Das experimentelle (und veraltete) [SPDY](https://en.wikipedia.org/wiki/SPDY) 3.1 ist nun standardmäßig deaktiviert ([Firefox-Bug 1287132](https://bugzil.la/1287132)).
- Unterstützung für {{HTTPHeader("X-Content-Type-Options")}} wurde hinzugefügt ([Firefox-Bug 471020](https://bugzil.la/471020)).
- Die Cookie-Präfixe `__Host-` und `__Secure-` wurden implementiert. Siehe {{HTTPHeader("Set-Cookie")}} und [Firefox-Bug 1283368](https://bugzil.la/1283368).
- Der {{HTTPHeader("Referrer-Policy")}}-Header wurde implementiert ([Firefox-Bug 1264164](https://bugzil.la/1264164)).

### Sicherheit

- Das `ping`-Attribut des {{htmlelement("a")}}-Elements beachtet nun die [`connect-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#connect-src) [CSP 1.1-Policy-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) ([Firefox-Bug 1100181](https://bugzil.la/1100181)).
- Unterstützung für die [`sandbox`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#sandbox) [CSP](/de/docs/Web/HTTP/CSP)-Direktive wurde hinzugefügt ([Firefox-Bug 671389](https://bugzil.la/671389)).
- Es ist jetzt möglich, eine [Content-Security-Policy für Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy) festzulegen ([Firefox-Bug 959388](https://bugzil.la/959388)).
- Die {{domxref("Navigator.sendBeacon()")}}-Methode löst keine Ausnahme mehr aus, wenn die Bakendaten aufgrund einer [Content-Security-Policy](/de/docs/Web/HTTP/CSP)-Einschränkung nicht gesendet werden konnten; stattdessen gibt sie `false` zurück, wie erwartet ([Firefox-Bug 1234813](https://bugzil.la/1234813)).
- Unterstützung für RC4-Verschlüsselung wurde in Firefox 36 veraltet und in Firefox 44 standardmäßig deaktiviert. Die Ein-Jahres-Frist ist abgelaufen, sodass Firefox 50 alle Unterstützung für RC4 entfernt (Google Chrome hat die Unterstützung für RC4 im August 2016 entfernt). Ab jetzt meldet Firefox bei RC4-Verschlüsselung einen `SSL_ERROR_NO_CYPHER_OVERLAP`-Fehler.

### Netzwerk

- Wenn während einer asynchronen {{domxref("XMLHttpRequest")}} ein Fehler aufgetreten ist, gibt die Methode {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} jetzt einen leeren String zurück ([Firefox-Bug 1286744](https://bugzil.la/1286744)).
- Anstatt einen `NetworkError` zurückzugeben, löst eine fehlgeschlagene asynchrone {{domxref("XMLHttpRequest")}} für CORS oder andere Netzwerkeinschränkungen jetzt ein {{domxref("XMLHttpRequest/error_event", "error")}} aus, das wie jeder andere Fehler abgefangen werden kann ([Firefox-Bug 709991](https://bugzil.la/709991)).
- {{domxref("XMLHttpRequest.getResponseHeader()")}} und {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} geben jetzt auch standardmäßig leere Header zurück. Dies kann über die Präferenz `network.http.keep_empty_response_headers_as_empty_string` gesteuert werden ([Firefox-Bug 918721](https://bugzil.la/918721)).
- Die `only-if-cached`-Option wurde zu [`Request.cache`](/de/docs/Web/API/Request/cache) hinzugefügt ([Firefox-Bug 1272436](https://bugzil.la/1272436)).

### DOM

- Die `once`-Option für {{domxref("EventTarget.addEventListener()")}} wird jetzt unterstützt ([Firefox-Bug 1287706](https://bugzil.la/1287706)).
- Die Schnittstelle {{domxref("NodeList")}} ist jetzt iterierbar und die Methoden {{domxref("NodeList.forEach()", "forEach()")}}, {{domxref("NodeList.values()", "values()")}}, {{domxref("NodeList.entries()")}} und {{domxref("NodeList.keys()")}} sind jetzt verfügbar ([Firefox-Bug 1290636](https://bugzil.la/1290636)).
- Die Schnittstelle {{domxref("DOMTokenList")}} ist jetzt iterierbar und die Methoden {{domxref("DOMTokenList.forEach()", "forEach()")}}, {{domxref("DOMTokenList.values()", "values()")}}, {{domxref("DOMTokenList.entries()", "entries()")}} und {{domxref("DOMTokenList.keys()", "keys()")}} sind jetzt verfügbar ([Firefox-Bug 1290636](https://bugzil.la/1290636)).
- Die Methoden {{domxref("Document.createElement()")}} und {{domxref("Document.createElementNS()")}} haben jetzt einen optionalen `options`-Parameter zum Erstellen von [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) ([Firefox-Bug 1276579](https://bugzil.la/1276579)).

### SVG

- Das `allowReorder`-Attribut wurde entfernt und das Verhalten, das es festgelegt hat, ist jetzt der Standard für SVG-{{SVGElement("switch")}}-Elemente ([Firefox-Bug 1279690](https://bugzil.la/1279690)).
- Das `defer`-Schlüsselwort für das {{SVGAttr("preserveAspectRatio")}}-Attribut auf SVG-{{SVGElement("image")}}-Elementen wurde entfernt, um der neuesten SVG2-Spezifikation zu folgen ([Firefox-Bug 1280425](https://bugzil.la/1280425)).

### Drag-and-Drop-API

- Die {{domxref("DataTransfer.items")}}-Eigenschaft wurde implementiert, die den Zugriff auf mehrere Elemente erlaubt, die mit der HTML-Drag-and-Drop-API gezogen und fallengelassen werden. Um dies zu ermöglichen, werden auch die Schnittstellen {{domxref("DataTransferItem")}} und {{domxref("DataTransferItemList")}} jetzt unterstützt ([Firefox-Bug 906420](https://bugzil.la/906420)). Dies ist standardmäßig aktiviert.
- Die alten, veralteten Firefox-spezifischen Drag-and-Drop-API-Ereignisse `dragdrop` und `draggesture` werden nicht mehr unterstützt. Stellen Sie sicher, dass Sie eventuell noch verwendeten Code aktualisieren, um die [HTML-Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) zu verwenden ([Firefox-Bug 1162050](https://bugzil.la/1162050)).

### Pointer Lock API

- Die [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API) ist jetzt unpräfigiert ([Firefox-Bug 991899](https://bugzil.la/991899)).
- Vor Firefox 50 forderte [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) die Erlaubnis mit einem Türhänger an, und der Zeiger-Lock würde erst aktiviert, nachdem der Benutzer die Erlaubnis erteilt hat. Ab Firefox 50 ist der Zeiger-Lock wie die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API): er wird sofort erteilt, aber eine Benachrichtigung wird angezeigt, die dem Benutzer erklärt, wie er ihn verlassen kann ([Firefox-Bug 1273351](https://bugzil.la/1273351)).

### IndexedDB

- Ein {{domxref("IDBDatabase/close_event", "close")}}-Ereignis wird jetzt an das {{domxref("IDBDatabase")}}-Objekt gesendet, wenn die entsprechende Datenbank unerwartet geschlossen wird ([Firefox-Bug 1151017](https://bugzil.la/1151017)).

### Service-Worker

- Die {{domxref("WindowClient.navigate()")}}-Methode wurde implementiert. Diese Methode ermöglicht es, eine angegebene URL in einem Client-Fenster zu öffnen, das von dem Service-Worker gesteuert wird ([Firefox-Bug 1218148](https://bugzil.la/1218148)).

### WebGL

- Die {{domxref("EXT_shader_texture_lod")}} WebGL-Erweiterung wurde implementiert ([Firefox-Bug 1111689](https://bugzil.la/1111689)).
- Die texImage-Methoden wurden für [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) aktualisiert, um PBOs (`PIXEL_UNPACK_BUFFER`) zu implementieren ([Firefox-Bug 1280499](https://bugzil.la/1280499)).

### WebRTC

- Das Hinzufügen eines Tracks zu einem {{domxref("MediaStream")}} löst jetzt das {{domxref("MediaStream/addtrack_event", "addtrack")}}-Ereignis aus, wie in der Spezifikation beschrieben. Das Ereignis ist vom Typ {{domxref("MediaStreamTrackEvent")}} und wird auf dem Stream ausgelöst, zu dem der Track hinzugefügt wurde. Sie können entweder {{domxref("EventTarget.addEventListener", "MediaStream.addEventListener('addtrack', ...)")}} oder die `onaddtrack`-Eigenschaft verwenden, um `"addtrack"`-Ereignisse zu handhaben.
- Die {{domxref("MediaStreamTrack")}}-Schnittstelle unterstützt jetzt das {{domxref("MediaStreamTrack.ended_event", "ended")}}-Ereignis und dessen Ereignis-Handler.
- Firefox unterstützt jetzt die {{domxref("MediaStreamTrack.readyState")}}-Eigenschaft, die angibt, ob der Track live oder dauerhaft beendet ist.
- Die {{domxref("MediaStreamTrack")}}-Methoden {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} und {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} wurden implementiert; diese ermöglichen es, den zuletzt angewendeten Satz maßgeschneiderter Eigenschaftseinschränkungen und die tatsächlichen Werte aller beschreibbaren Eigenschaften des Tracks zu erhalten. Die zugehörigen Datentypen wurden ebenfalls dokumentiert.
- Die `RTCDataChannel.stream`-Eigenschaft wurde entfernt. Dies wurde durch {{domxref("RTCDataChannel.id")}} in [Firefox 24](/de/docs/Mozilla/Firefox/Releases/24) ersetzt, aber aus Gründen der Abwärtskompatibilität unterstützt. Bitte stellen Sie sicher, dass Ihr Code die `id`-Eigenschaft verwendet, falls Sie dies noch nicht getan haben.

### Web Audio API

- Die {{domxref("PannerNode")}}-Schnittstelle unterstützt jetzt die 3D-kartesischen Raumeigenschaften für die Position ({{domxref("PannerNode.positionX")}}, {{domxref("PannerNode.positionY")}} und {{domxref("PannerNode.positionZ")}}) und die Richtwirkung ({{domxref("PannerNode.orientationX")}}, {{domxref("PannerNode.orientationY")}}, {{domxref("PannerNode.orientationZ")}}) einer Audioquelle.
- Die Schnittstelle {{domxref("IIRFilterNode")}}, die einen allgemeinen [Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR)-Filter implementiert, wurde implementiert.
- Die Drosselung in Hintergrund-Tabs von Timern, die mit {{domxref("setInterval()")}} und {{domxref("setTimeout()")}} erstellt wurden, tritt nicht mehr auf, wenn eine [Web Audio API](/de/docs/Web/API/Web_Audio_API) {{domxref("AudioContext")}} aktiv Ton wiedergibt. Dies sollte helfen, Probleme mit zeitempfindlicher Audiowiedergabe (wie Musik-Player, die einzelne Noten mit Timern generieren) im Hintergrund zu vermeiden ([Firefox-Bug 1181073](https://bugzil.la/1181073)).

### Audio/Video

- Das `AlignSetting`-Enum (das mögliche Werte für {{domxref("VTTCue.align")}} darstellt) enthielt fälschlicherweise zuvor den Wert `"middle"` anstelle von `"center"`. Dies wurde korrigiert ([Firefox-Bug 1276130](https://bugzil.la/1276130)).
- Die nicht standardisierte und experimentelle Methode {{domxref("HTMLMediaElement.seekToNextFrame()")}} sucht jetzt asynchron nach dem nächsten Frame im Medium und gibt einen {{jsxref("Promise")}} zurück, der aufgelöst wird, sobald die Suche abgeschlossen ist.
- Die Implementierung von {{domxref("HTMLTrackElement")}} wurde korrigiert, um zuzulassen, dass {{HTMLElement("track")}}-Elemente Ressourcen laden, auch wenn sie sich nicht in einem Dokument befinden ([Firefox-Bug 871747](https://bugzil.la/871747)).

### Batterie-API

- Die `Navigator.battery`-Eigenschaft, die seit Firefox 43 veraltet ist, ist jetzt veraltet und wurde entfernt. Verwenden Sie stattdessen die {{domxref("navigator.getBattery()")}}-Methode, um ein Batterie-{{jsxref("Promise")}} zu erhalten, das aufgelöst wird, wenn der {{domxref("BatteryManager")}} verfügbar ist; der {{domxref("BatteryManager")}} wird an den Erfüllungshandler des Versprechens übergeben ([Firefox-Bug 12593355](https://bugzil.la/12593355)).

### Dateien und Verzeichnisse

- Ein Teil der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde implementiert, um die Kompatibilität mit Websites zu verbessern, die zuvor nur mit Google Chrome kompatibel waren ([Firefox-Bug 1265767](https://bugzil.la/1265767)).

  - Die asynchronen API-Schnittstellen wurden implementiert, mit dem Vorbehalt, dass nur das Lesen von Dateien unterstützt wird; zum Beispiel ist die {{domxref("FileSystemFileEntry.createWriter()")}}-Methode ein No-Op.
  - Diese Schnittstellen wurden implementiert:

    - {{domxref("FileSystem")}}
    - {{domxref("FileSystemEntry")}} (nur Eigenschaften; die Methoden wurden nicht implementiert)
    - {{domxref("FileSystemFileEntry")}} (außer für {{domxref("FileSystemFileEntry.createWriter", "createWriter()")}})
    - {{domxref("FileSystemDirectoryEntry")}} (außer für {{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}})
    - {{domxref("FileSystemDirectoryReader")}}

  - {{domxref("HTMLInputElement.webkitdirectory")}} sowie das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut des {{HTMLElement("input")}}-Elements wurden implementiert; dies ermöglicht es, ein Datei-Input so zu konfigurieren, dass es Verzeichnisse anstelle von Dateien akzeptiert ([Firefox-Bug 1258489](https://bugzil.la/1258489)).
  - {{domxref("HTMLInputElement.webkitEntries")}} wurde implementiert; dies gibt ein Array von {{domxref("FileSystemEntry")}}-basierten Objekten zurück, die die ausgewählten Elemente darstellen.
  - {{domxref("File.webkitRelativePath")}} wurde implementiert; dies enthält den Pfad der Datei relativ zur Wurzel des enthaltenden {{domxref("FileSystemDirectoryEntry")}}, das zu den Elementen in der Liste gehörte, die von {{domxref("HTMLInputElement.webkitGetEntries()")}} zurückgegeben wurde.
  - Siehe [File and Directory Entries API support in Firefox](/de/docs/Web/API/File_and_Directory_Entries_API/Firefox_support) für Details darüber, was wir in dieser API unterstützen und was nicht.
  - Diese APIs sind jetzt standardmäßig aktiviert; einige waren zuvor verfügbar, aber nur hinter einer Präferenz ([Firefox-Bug 1288683](https://bugzil.la/1288683)).

- Wir haben {{domxref("DataTransferItem.webkitGetAsEntry()")}} als Teil der [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) implementiert; dies ermöglicht es Ihnen, eine {{domxref("FileSystemEntry")}} zu erhalten, die eine abgelegte Datei darstellt ([Firefox-Bug 1289255](https://bugzil.la/1289255)). Dies ist standardmäßig aktiviert.
- Die `HTMLInputElement.directory`-Eigenschaft, Teil des [Directory Upload API](https://wicg.github.io/directory-upload/proposal.html)-Vorschlags, wurde in `allowdirs` umbenannt ([Firefox-Bug 1288681](https://bugzil.la/1288681)). Diese Eigenschaft ist hinter einer Präferenz verborgen.

## Ältere Versionen

{{Firefox_for_developers}}
