---
title: Firefox 51 für Entwickler
slug: Mozilla/Firefox/Releases/51
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 51 wurde am 24. Januar 2017 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente können jetzt als Trenner in {{HTMLElement("menu")}}-Elementen verwendet werden ([Firefox Fehler 870388](https://bugzil.la/870388)).
- Die Attribute `selectionStart` und `selectionEnd` der Elemente {{HTMLElement("input")}} und {{HTMLElement("textarea")}} geben nun korrekt die aktuelle Position des Texteingabecursors zurück, wenn keine Auswahl vorhanden ist, anstatt 0 zurückzugeben ([Firefox Fehler 1287655](https://bugzil.la/1287655)).

### CSS

- Implementiert {{cssxref(":indeterminate")}} für \<input type="radio"> ([Firefox Fehler 885359](https://bugzil.la/885359)).
- Implementiert {{cssxref(":placeholder-shown")}} für `<input type="text">` ([Firefox Fehler 1069015](https://bugzil.la/1069015)).
- Das {{cssxref("::placeholder")}} Pseudo-Element ist jetzt ohne Präfix ([Firefox Fehler 1069012](https://bugzil.la/1069012)).
- Die {{cssxref(":valid")}} CSS-Pseudoklasse, die keine gültigen {{HTMLElement("form")}}-Elemente erkannte, wurde behoben ([Firefox Fehler 1285425](https://bugzil.la/1285425)).
- Der `plaintext`-Wert von {{cssxref("unicode-bidi")}} funktioniert jetzt auch bei vertikalen Schreibrichtungen ([Firefox Fehler 1302734](https://bugzil.la/1302734)).
- Die Werte `fill-box` und `stroke-box` von {{cssxref("clip-path")}} werden nun korrekt unterstützt; früher waren sie Aliasnamen von `border-box` ([Firefox Fehler 1289011](https://bugzil.la/1289011)).
- Die Höhe der Flex-Linie in einem einzeiligen Auto-Höhen-flex-Container mit max-height wird jetzt geklammert (Spec-Änderung) ([Firefox Fehler 1000957](https://bugzil.la/1000957)).

### JavaScript

- Die ES2015-Eigenschaft {{jsxref("Symbol.toStringTag")}} wurde implementiert ([Firefox Fehler 1114580](https://bugzil.la/1114580)).
- Die ES2015-Methoden {{jsxref("TypedArray.prototype.toString()")}} und {{jsxref("TypedArray.prototype.toLocaleString()")}} wurden implementiert ([Firefox Fehler 1121938](https://bugzil.la/1121938)).
- Die Methode {{jsxref("Intl/DateTimeFormat/formatToParts", "DateTimeFormat.prototype.formatToParts()")}} ist jetzt verfügbar ([Firefox Fehler 1289340](https://bugzil.la/1289340)).
- {{jsxref("Statements/const", "const")}} und {{jsxref("Statements/let", "let")}} sind jetzt vollständig ES2015-konform ([Firefox Fehler 950547](https://bugzil.la/950547)).
- Verwenden von {{jsxref("Statements/const", "const")}} in [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen hat jetzt eine neue Bindung für jede Iteration und wirft keinen {{jsxref("SyntaxError")}} mehr ([Firefox Fehler 1101653](https://bugzil.la/1101653)).
- Die veraltete [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Schleife zeigt jetzt eine Warnung in der Konsole an ([Firefox Fehler 1293205](https://bugzil.la/1293205)). Bitte migrieren Sie Ihren Code zur standardisierten [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife.
- [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können kein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) mehr haben und `let` als Labelname ist jetzt nicht mehr erlaubt ([Firefox Fehler 1288459](https://bugzil.la/1288459)).
- Veraltete [Legacy-Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) werfen jetzt Fehler bei Verwendung in [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) ([Firefox Fehler 1199296](https://bugzil.la/1199296)).
- Die `next()`-Methode des [Iterator-Protokolls](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) wird jetzt einen {{jsxref("TypeError")}} auslösen, wenn der zurückgegebene Wert kein Objekt ist ([Firefox Fehler 1016936](https://bugzil.la/1016936)).
- Pseudoklassen-Selektoren, die nach Kind-Indizes auswählen, sollten ohne Elternteil übereinstimmen ([Firefox Fehler 1300374](https://bugzil.la/1300374)).

### Entwicklerwerkzeuge

- [Network Monitor zeigt jetzt einen „Gesperrt“-Status für Netzwerkanfragen an.](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timings)
- [Alle zwischen Firefox 50 und Firefox 51 behobenen Entwicklerwerkzeuge-Fehler](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263768&resolution=FIXED&classification=Client%20Software&chfieldto=2016-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2016-08-01&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### WebGL

- [WebGL 2](/de/docs/Web/API/WebGL_API) ist jetzt standardmäßig aktiviert. Siehe [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) für einige Demos.

  - WebGL 2 bietet die [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Schnittstelle, die OpenGL ES 3.0 für das {{HTMLElement("canvas")}}-Element bringt.
  - Neue Funktionen umfassen:

    - [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
    - [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
    - [Uniform Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
    - [Sync-Objekte](/de/docs/Web/API/WebGLSync),
    - [Query-Objekte](/de/docs/Web/API/WebGLQuery),
    - [Transform Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
    - Hervorgehobene Erweiterungen, die jetzt Kern von WebGL 2 sind: [Vertex Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [mehrere Ziel-Renderes](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragmenttiefe](/de/docs/Web/API/EXT_frag_depth).

- Die `WEBGL_compressed_texture_es3`-Erweiterung (implementiert in Firefox 46) wurde in [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) umbenannt ([Firefox Fehler 1316778](https://bugzil.la/1316778)) und ist standardmäßig nicht mehr in WebGL 2-Kontexten enthalten ([Firefox Fehler 1306174](https://bugzil.la/1306174)).
- Die [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)-Erweiterung wurde aktualisiert, um [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekte anstelle von `WebGLTimerQuery`-Objekten zu verwenden ([Firefox Fehler 1308057](https://bugzil.la/1308057)).
- Die [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object)-Erweiterung verwendet nun das WebGL 2 [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt anstelle ihres eigenen `WebGLVertexArrayObjectOES`-Objekts ([Firefox Fehler 1318523](https://bugzil.la/1318523)).
- Sie können jetzt [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekte als Quellen für Texturbilder in Methoden wie [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D), [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D), [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D), oder [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D) verwenden ([Firefox Fehler 1324924](https://bugzil.la/1324924)).

### IndexedDB v2

- Die Implementierung von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Version 2 ist nun abgeschlossen:

  - Unterstützung für die neue Methode [`IDBObjectStore.getKey()`](/de/docs/Web/API/IDBObjectStore/getKey) wurde hinzugefügt ([Firefox Fehler 1271506](https://bugzil.la/1271506)).
  - Unterstützung für die Methode [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey) wurde hinzugefügt ([Firefox Fehler 1271505](https://bugzil.la/1271505)).
  - Binärschlüssel werden jetzt unterstützt ([Firefox Fehler 1271500](https://bugzil.la/1271500)).
  - Siehe auch ["What's new in IndexedDB 2.0?" – Mozilla Hacks](https://hacks.mozilla.org/2016/10/whats-new-in-indexeddb-2-0/)

### Canvas

- Die nicht standardisierte Methode `CanvasRenderingContext2D.mozFillRule()` wurde entfernt; die Füllregel kann mit einem Parameter der Standardmethode [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) definiert werden ([Firefox Fehler 826619](https://bugzil.la/826619)).
- Die [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) wurde unpräfixiert ([Firefox Fehler 768072](https://bugzil.la/768072))

### SVG

- Attribut {{SVGAttr("tabindex")}} hinzugefügt ([Firefox Fehler 778654](https://bugzil.la/778654)).
- Attribut {{SVGAttr("href")}} hinzugefügt, was {{SVGAttr("xlink:href")}} obsolet macht ([Firefox Fehler 1245751](https://bugzil.la/1245751)).
- Sie können jetzt benutzerdefinierte Dateneigenschaften auf SVG-Elementen über die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft und den {{SVGAttr("data-*")}} Satz von SVG-Attributen verwenden ([Firefox Fehler 921834](https://bugzil.la/921834)).
- CSS-Animationen, die in einem SVG-Bild verwendet werden, das in einem {{HTMLElement("img")}}-Element angezeigt wird, funktionieren jetzt wieder; dies war ein alter Regression ([Firefox Fehler 1190881](https://bugzil.la/1190881)).

### Web Workers

- Der nicht standardisierte und obsolet `onclose` Event-Handler und die Verwendung des `close`-Events von [`Worker`](/de/docs/Web/API/Worker) wurden aus Firefox entfernt.

### Netzwerken

- Skripte, die mit einem `image/*`, `video/*`, `audio/*` oder `text/csv` MIME-Typ bereitgestellt werden, werden jetzt blockiert und nicht geladen oder ausgeführt. Dies geschieht, wenn sie mit {{HTMLElement("script")}} deklariert oder mit [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts), [`Worker()`](/de/docs/Web/API/Worker/Worker), [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) geladen werden ([Firefox Fehler 1229267](https://bugzil.la/1229267) und [Firefox Fehler 1288361](https://bugzil.la/1288361)).
- Unterstützung für SHA-1-Zertifikate von öffentlich vertrauten Zertifizierungsstellen wurde entfernt ([Firefox Fehler 1302140](https://bugzil.la/1302140)). Siehe auch [Phasing Out SHA-1 on the Public Web](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/) für weitere Informationen.
- Neue WoSign- und StartCom-Zertifikate werden nicht mehr akzeptiert ([Firefox Fehler 1309707](https://bugzil.la/1309707)), siehe [Distrusting New WoSign and StartCom Certificates](https://blog.mozilla.org/security/2016/10/24/distrusting-new-wosign-and-startcom-certificates/) für weitere Informationen.
- Die [PAC](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)-Funktion `FindProxyForURL(url, host)` entfernt jetzt Pfade und Abfragen von https\:// URLs, um Informationslecks zu vermeiden (siehe [Firefox Fehler 1255474](https://bugzil.la/1255474) und [CVE-2017-5384](https://nvd.nist.gov/vuln/detail/CVE-2017-5384)).

### XHR

- Die [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft gibt im Falle eines Parserfehlers beim Versuch, die empfangenen Daten zu interpretieren, nicht mehr ein unvollständiges [`Document`](/de/docs/Web/API/Document) mit einem \<parsererror>-Knoten an der Spitze zurück. Stattdessen gibt sie korrekt `null` zurück ([Firefox Fehler 289714](https://bugzil.la/289714)).
- Um die neueste Spezifikation zu erfüllen, wird ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ohne ein mit [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetztes {{HTTPHeader("Accept")}}-Header jetzt mit einem solchen Header gesendet, wobei sein Wert auf `*/*` gesetzt ist ([Firefox Fehler 918752](https://bugzil.la/918752)).
- Behoben: [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) setzt die Parameter `username` und `password` nun standardmäßig auf `null`, wenn sie weggelassen werden, gemäß Spezifikation ([Firefox Fehler 933759](https://bugzil.la/933759)).

### WebRTC

- Die Methode [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) wurde entfernt. Sie war seit Firefox 22 veraltet und hat seit langem eine `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) geworfen. Sie müssen stattdessen [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) für jeden Track im Stream verwenden.
- WebRTC unterstützt jetzt standardmäßig den VP9-Codec. Als er in Firefox 46 hinzugefügt wurde, war VP9 standardmäßig deaktiviert, war jedoch bei Aktivierung der bevorzugte Codec; er wurde jedoch aufgrund seiner aktuellen CPU-Nutzung auf die zweite Wahl (nach VP8) verschoben.
- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream), die einen [`MediaStream`](/de/docs/Web/API/MediaStream) enthält, der den Inhalt des angegebenen {{HTMLElement("video")}} oder {{HTMLElement("audio")}} zurückgibt. Es ist erwähnenswert, dass dies immer noch als `mozCaptureStream()` vorfixiert ist und noch nicht genau mit der Spezifikation übereinstimmt.

### Audio/Video

- FLAC-Unterstützung hinzugefügt ([FLAC-Codec](https://xiph.org/flac/index.html)) sowohl in FLAC als auch in Ogg-Containern ([Firefox Fehler 1195723](https://bugzil.la/1195723)). Unterstützte FLAC-MIME-Typen sind: `audio/flac` und `audio/x-flac`. Für FLAC in Ogg sind unterstützte MIME-Typen: `audio/ogg; codecs=flac`, und `video/ogg; codecs=flac`.
- Unterstützung für FLAC in MP4 (sowohl mit als auch ohne MSE) hinzugefügt ([Firefox Fehler 1303888](https://bugzil.la/1303888)).
- Die Drosselung in Hintergrund-Tabs von Timern, die durch [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval), [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) erstellt wurden, wurde in Firefox 50 geändert, um nicht mehr zu erfolgen, wenn eine [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`AudioContext`](/de/docs/Web/API/AudioContext) aktiv Ton abspielt. Dies löste jedoch nicht alle Szenarien, in denen timing-sensitives Audio-Playback (wie Musikplayer, die einzelne Noten generieren) nicht richtig funktionieren konnte. Aus diesem Grund drosselt Firefox 51 keine Hintergrund-Tabs mehr, die eine [`AudioContext`](/de/docs/Web/API/AudioContext) haben, selbst wenn sie aktuell keinen Ton abspielen.

### DOM

- Die [`DOMImplementation.hasFeature()`](/de/docs/Web/API/DOMImplementation/hasFeature) gibt jetzt in allen Fällen `true` zurück ([Firefox Fehler 984778](https://bugzil.la/984778)).
- Die Eigenschaften `selectionStart` und `selectionEnd` der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) und [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) geben nun korrekt die aktuelle Position des Texteingabecursors zurück, wenn keine Auswahl vorhanden ist, anstatt 0 zurückzugeben ([Firefox Fehler 1287655](https://bugzil.la/1287655)).
- Die Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und das entsprechende {{HTMLElement("img")}}-Element unterstützen jetzt den `onerror`-Event-Handler und senden [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignisse an das Element, wann immer [beim Laden oder Interpretieren von Bildern Fehler auftreten](/de/docs/Web/API/HTMLImageElement#errors).
- Sie können die Wirkung einer Web-Animation [`Animation`](/de/docs/Web/API/Animation) nun ändern, indem Sie den Wert ihrer [`effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft festlegen. Diese Eigenschaft war zuvor schreibgeschützt ([Firefox Fehler 1049975](https://bugzil.la/1049975)).
- Die Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) der Permissions API wurde hinter einer Einstellung (`dom.permissions.revoke.enable`) platziert und standardmäßig deaktiviert, da ihr Design und sogar ihr Bestehen in der [Web Application Security Working Group](https://www.w3.org/2011/webappsec/) diskutiert werden.
- Die [`Navigator.storage`](/de/docs/Web/API/Navigator/storage)-Eigenschaft der [Storage API](/de/docs/Web/API/Storage_API) und die Methode [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate) wurden zusammen mit dem nötigen unterstützenden Code implementiert. Persistenzeigenschaften für Speichereinheiten sind noch nicht implementiert. Siehe [Firefox Fehler 1267941](https://bugzil.la/1267941).
- Aus Datenschutzgründen runden sowohl [`BatteryManager.chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime) als auch [`BatteryManager.dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime) den zurückgegebenen Wert nun auf die nächsten 15 Minuten ([Firefox Fehler 1292655](https://bugzil.la/1292655)).

### Events

- Firefox unterstützt jetzt die Event-Handler [`onanimationstart`](/de/docs/Web/API/Element/animationstart_event), [`onanimationiteration`](/de/docs/Web/API/Element/animationiteration_event) und [`onanimationend`](/de/docs/Web/API/Element/animationend_event) zusätzlich zur Unterstützung der entsprechenden Events mittels [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ([Firefox Fehler 911987](https://bugzil.la/911987)).
- Firefox unterstützt jetzt den [`ontransitionend`](/de/docs/Web/API/Element/transitionend_event)-Event-Handler ([Firefox Fehler 911987](https://bugzil.la/911987)).

### Sicherheit

- Wenn Login-Seiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password)-Feld enthalten) so erstellt werden, dass sie unsicher übermittelt werden würden, zeigt Firefox ein durchgestrichenes Schloss-Symbol in der Adressleiste an, um Benutzer zu warnen ([Firefox Fehler 1319119](https://bugzil.la/1319119)). Siehe [Insecure passwords](/de/docs/Web/Security/Insecure_passwords) für weitere Details.

### Entfernungen

- Die nicht standardisierte Simple Push API, hauptsächlich für die Verwendung mit Firefox OS gedacht und nun durch die [W3C Push API](/de/docs/Web/API/Push_API) ersetzt, wurde komplett aus Gecko entfernt ([Firefox Fehler 1296579](https://bugzil.la/1296579)).
- Die nicht standardisierte Alarms API, hauptsächlich zur Verwendung mit Firefox OS gedacht, wurde komplett aus Gecko entfernt ([Firefox Fehler 1300884](https://bugzil.la/1300884)).
- Unterstützung für Präfixe in der [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde entfernt ([Firefox Fehler 812701](https://bugzil.la/812701)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Neue APIs:

  - {{WebExtAPIRef("idle.queryState()")}} ([Firefox Fehler 1299846](https://bugzil.la/1299846))
  - {{WebExtAPIRef("idle.onStateChanged")}} ([Firefox Fehler 1299775](https://bugzil.la/1299775))
  - {{WebExtAPIRef("management.getSelf()")}} ([Firefox Fehler 1283116](https://bugzil.la/1283116))
  - {{WebExtAPIRef("management.uninstallSelf()")}} ([Firefox Fehler 1220136](https://bugzil.la/1220136))
  - {{WebExtAPIRef("runtime.getBrowserInfo()")}} ([Firefox Fehler 1268399](https://bugzil.la/1268399))
  - {{WebExtAPIRef("runtime.reload()")}} und {{WebExtAPIRef("runtime.onUpdateAvailable()")}} ([Firefox Fehler 1279012](https://bugzil.la/1279012))

- Sie können jetzt [eine WebExtension in einem Legacy-Add-on-Typ einbetten](/de/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions) ([Firefox Fehler 1252215](https://bugzil.la/1252215)).
- [Zwischenablagezugriff](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) wird jetzt unterstützt ([Firefox Fehler 1197451](https://bugzil.la/1197451))
- Die an den Rückruf übergebenen Argumente von {{WebExtAPIRef("tabs.executeScript()")}} wurden behoben ([Firefox Fehler 1290157](https://bugzil.la/1290157))
- [localStorage](/de/docs/Web/API/Window/localStorage) wird jetzt gelöscht, wenn eine WebExtension deinstalliert wird ([Firefox Fehler 1213990](https://bugzil.la/1213990))
- Ein geänderter {{HTTPHeader("Content-Type")}} Header in Web Extensions wird jetzt berücksichtigt ([Firefox Fehler 1304331](https://bugzil.la/1304331))

### Sonstiges

- Die `multiprocessCompatible`-Eigenschaft von `install.rdf` muss jetzt explizit auf `false` gesetzt werden, um zu verhindern, dass Multiprozess in Firefox aktiviert wird, wenn das Add-on installiert wird.
- Die Mozilla-spezifische Social API wurde erheblich geändert (hauptsächlich um nicht mehr verwendete APIs zu entfernen), wie folgt:

  - Die `MozSocial`-Schnittstelle und die unterstützende `Navigator.mozSocial`-Eigenschaft wurden entfernt.
  - Die Social Bookmarks API wurde entfernt.
  - Die Social-Chat-Funktionalität wurde entfernt.
  - Die Social Status API wurde entfernt.
  - Alle sozialen Widgets, außer dem Panel „Teilen“, wurden entfernt. Dazu gehören die soziale Seitenleiste, Fly-Over-Panels usw.
  - Alle unterstützenden Benutzeroberflächenmerkmale und Funktionalitäten für die entfernten APIs wurden ebenfalls entfernt.
  - Soziale Dienstleistungsanbieter-Manifest-Eigenschaften, die die entfernte Funktionalität unterstützen, werden nicht mehr unterstützt.

- Wenn ein Add-on `mimeTypes.rdf` verwendet, um eine Dateiendung einer MIME-Typ-Zuordnung bereitzustellen, muss es jetzt einen Eintrag in der Kategorie `"ext-to-type-mapping"` registrieren ([Firefox Fehler 306471](https://bugzil.la/306471)).
- Die [Browser API](/de/docs/Mozilla/Gecko/Chrome/API/Browser_API) enthält nun ein `detail`-Objekt im Event-Objekt des [`mozbrowserlocationchange`](/de/docs/Web/Events/mozbrowserlocationchange)-Events, das `canGoForward`/`canGoBack`-Eigenschaften enthält und den Abruf des Vorwärts-/Rückwärtsstatus des mozBrowsers synchron erlaubt ([Firefox Fehler 1279635](https://bugzil.la/1279635)).

## Ältere Versionen

{{Firefox_for_developers}}
