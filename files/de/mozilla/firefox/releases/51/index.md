---
title: "Firefox 51: Versionshinweise für Entwickler"
short-title: Firefox 51
slug: Mozilla/Firefox/Releases/51
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/).
Firefox 51 wurde am 24. Januar 2017 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [Der Netzwerkmonitor zeigt jetzt einen Status „Blocked“ für Netzwerkanfragen an.](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timings)
- [Alle zwischen Firefox 50 und Firefox 51 behobenen DevTools-Fehler](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263768&resolution=FIXED&classification=Client%20Software&chfieldto=2016-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2016-08-01&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### HTML

- {{HTMLElement("hr")}}-Elemente können jetzt als Trennzeichen in {{HTMLElement("menu")}}-Elementen verwendet werden ([Firefox-Bug 870388](https://bugzil.la/870388)).
- Die Attribute `selectionStart` und `selectionEnd` der Elemente {{HTMLElement("input")}} und {{HTMLElement("textarea")}} geben jetzt bei fehlender Auswahl korrekt die aktuelle Position des Texteingabecursors zurück, anstatt 0 zurückzugeben ([Firefox-Bug 1287655](https://bugzil.la/1287655)).

### CSS

- {{cssxref(":indeterminate")}} für \<input type="radio"> implementiert ([Firefox-Bug 885359](https://bugzil.la/885359)).
- {{cssxref(":placeholder-shown")}} für `<input type="text">` implementiert ([Firefox-Bug 1069015](https://bugzil.la/1069015)).
- Das Pseudoelement {{cssxref("::placeholder")}} ist jetzt ohne Präfix verfügbar ([Firefox-Bug 1069012](https://bugzil.la/1069012)).
- Die CSS-Pseudoklasse {{cssxref(":valid")}} wurde korrigiert, die nicht mit gültigen {{HTMLElement("form")}}-Elementen übereinstimmte ([Firefox-Bug 1285425](https://bugzil.la/1285425)).
- Der Wert `plaintext` von {{cssxref("unicode-bidi")}} funktioniert jetzt auch mit vertikalen Schreibrichtungen ([Firefox-Bug 1302734](https://bugzil.la/1302734)).
- Die Werte `fill-box` und `stroke-box` von {{cssxref("clip-path")}} werden jetzt korrekt unterstützt; zuvor waren sie Aliase für `border-box` ([Firefox-Bug 1289011](https://bugzil.la/1289011)).
- Die Höhe von Flex-Zeilen wird in einzeiligen Flex-Containern mit automatischer Höhe und `max-height` begrenzt, wodurch gestreckte Flex-Elemente begrenzt werden (Spezifikationsänderung) ([Firefox-Bug 1000957](https://bugzil.la/1000957)).

### JavaScript

- Die ES2015-Eigenschaft {{jsxref("Symbol.toStringTag")}} wurde implementiert ([Firefox-Bug 1114580](https://bugzil.la/1114580)).
- Die ES2015-Methoden {{jsxref("TypedArray.prototype.toString()")}} und {{jsxref("TypedArray.prototype.toLocaleString()")}} wurden implementiert ([Firefox-Bug 1121938](https://bugzil.la/1121938)).
- Die Methode {{jsxref("Intl/DateTimeFormat/formatToParts", "DateTimeFormat.prototype.formatToParts()")}} ist jetzt verfügbar ([Firefox-Bug 1289340](https://bugzil.la/1289340)).
- {{jsxref("Statements/const", "const")}} und {{jsxref("Statements/let", "let")}} entsprechen jetzt vollständig ES2015 ([Firefox-Bug 950547](https://bugzil.la/950547)).
- Die Verwendung von {{jsxref("Statements/const", "const")}} in [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen verfügt jetzt für jede Iteration über eine neue Bindung und löst keinen {{jsxref("SyntaxError")}} mehr aus ([Firefox-Bug 1101653](https://bugzil.la/1101653)).
- Die veraltete [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Schleife zeigt jetzt eine Warnung in der Konsole an ([Firefox-Bug 1293205](https://bugzil.la/1293205)). Migrieren Sie Ihren Code bitte zur standardisierten [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife.
- [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können nicht mehr über ein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) verfügen, und `let` ist jetzt als Labelname nicht zulässig ([Firefox-Bug 1288459](https://bugzil.la/1288459)).
- Veraltete [Legacy-Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) lösen jetzt bei Verwendung in [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) einen Fehler aus ([Firefox-Bug 1199296](https://bugzil.la/1199296)).
- Die Methode `next()` des [Iterator-Protokolls](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) löst jetzt einen {{jsxref("TypeError")}} aus, wenn der zurückgegebene Wert kein Objekt ist ([Firefox-Bug 1016936](https://bugzil.la/1016936)).
- Pseudoklassen-Selektoren mit Kindindex sollten auch ohne Elternelement übereinstimmen ([Firefox-Bug 1300374](https://bugzil.la/1300374)).

### WebGL

- [WebGL 2](/de/docs/Web/API/WebGL_API) ist jetzt standardmäßig aktiviert. Einige Demos finden Sie unter [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/).
  - WebGL 2 stellt die Schnittstelle [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) bereit, die OpenGL ES 3.0 zum {{HTMLElement("canvas")}}-Element bringt.
  - Neue Funktionen umfassen:
    - [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
    - [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
    - [Uniform-Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
    - [Sync-Objekte](/de/docs/Web/API/WebGLSync),
    - [Query-Objekte](/de/docs/Web/API/WebGLQuery),
    - [Transform-Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
    - Erweiterungen, die jetzt Bestandteil von WebGL 2 sind: [Vertex-Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [mehrere Render-Ziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragmenttiefe](/de/docs/Web/API/EXT_frag_depth).

- Die Erweiterung `WEBGL_compressed_texture_es3` (in Firefox 46 implementiert) wurde in [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) umbenannt ([Firefox-Bug 1316778](https://bugzil.la/1316778)) und ist in WebGL-2-Kontexten nicht mehr standardmäßig enthalten ([Firefox-Bug 1306174](https://bugzil.la/1306174)).
- Die Erweiterung [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query) wurde aktualisiert, sodass sie [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekte anstelle von `WebGLTimerQuery`-Objekten verwendet ([Firefox-Bug 1308057](https://bugzil.la/1308057)).
- Die Erweiterung [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object) verwendet jetzt das WebGL-2-Objekt [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) anstelle ihres eigenen `WebGLVertexArrayObjectOES`-Objekts ([Firefox-Bug 1318523](https://bugzil.la/1318523)).
- Sie können jetzt [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekte als Quellen für Texturbilder in Methoden wie [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D), [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D), [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D) oder [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D) verwenden ([Firefox-Bug 1324924](https://bugzil.la/1324924)).

### IndexedDB v2

- Die Implementierung von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Version 2 ist jetzt vollständig:
  - Unterstützung für die neue Methode [`IDBObjectStore.getKey()`](/de/docs/Web/API/IDBObjectStore/getKey) wurde hinzugefügt ([Firefox-Bug 1271506](https://bugzil.la/1271506)).
  - Unterstützung für die Methode [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey) wurde hinzugefügt ([Firefox-Bug 1271505](https://bugzil.la/1271505)).
  - Binäre Schlüssel werden jetzt unterstützt ([Firefox-Bug 1271500](https://bugzil.la/1271500)).
  - Siehe auch [„What's new in IndexedDB 2.0?“ – Mozilla hacks](https://hacks.mozilla.org/2016/10/whats-new-in-indexeddb-2-0/)

### Canvas

- Die nicht standardisierte Methode `CanvasRenderingContext2D.mozFillRule()` wurde entfernt; die Füllregel kann mithilfe eines Parameters der Standardmethode [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) festgelegt werden ([Firefox-Bug 826619](https://bugzil.la/826619)).
- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) ist jetzt ohne Präfix verfügbar ([Firefox-Bug 768072](https://bugzil.la/768072))

### SVG

- Das Attribut {{SVGAttr("tabindex")}} wurde hinzugefügt ([Firefox-Bug 778654](https://bugzil.la/778654)).
- Das Attribut {{SVGAttr("href")}} wurde hinzugefügt, wodurch {{SVGAttr("xlink:href")}} obsolet wird ([Firefox-Bug 1245751](https://bugzil.la/1245751)).
- Sie können jetzt benutzerdefinierte Datenattribute auf SVG-Elementen über die Eigenschaft [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und den Satz von SVG-Attributen {{SVGAttr("data-*")}} verwenden ([Firefox-Bug 921834](https://bugzil.la/921834)).
- CSS-Animationen, die in einem SVG-Bild verwendet werden, das in einem {{HTMLElement("img")}}-Element dargestellt wird, funktionieren jetzt wieder; dies war eine frühere Regression ([Firefox-Bug 1190881](https://bugzil.la/1190881)).

### Web Workers

- Der nicht standardisierte und veraltete `onclose`-Event-Handler sowie die Verwendung des `close`-Ereignisses durch [`Worker`](/de/docs/Web/API/Worker) wurden aus Firefox entfernt.

### Netzwerk

- Skripte, die mit einem MIME-Typ `image/*`, `video/*`, `audio/*` oder `text/csv` bereitgestellt werden, werden jetzt blockiert und weder geladen noch ausgeführt. Dies geschieht, wenn sie mit {{HTMLElement("script")}} deklariert oder über [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts), [`Worker()`](/de/docs/Web/API/Worker/Worker) oder [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) geladen werden ([Firefox-Bug 1229267](https://bugzil.la/1229267) und [Firefox-Bug 1288361](https://bugzil.la/1288361)).
- Die Unterstützung für SHA-1-Zertifikate von öffentlich vertrauenswürdigen Zertifizierungsstellen wurde entfernt ([Firefox-Bug 1302140](https://bugzil.la/1302140)). Weitere Informationen finden Sie unter [Phasing Out SHA-1 on the Public Web](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/).
- Neue WoSign- und StartCom-Zertifikate werden nicht mehr akzeptiert ([Firefox-Bug 1309707](https://bugzil.la/1309707)); weitere Informationen finden Sie unter [Distrusting New WoSign and StartCom Certificates](https://blog.mozilla.org/security/2016/10/24/distrusting-new-wosign-and-startcom-certificates/).
- Die [PAC](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)-Funktion `FindProxyForURL(url, host)` entfernt jetzt Pfade und Abfragen aus https\://-URLs, um Informationslecks zu vermeiden (siehe [Firefox-Bug 1255474](https://bugzil.la/1255474) und [CVE-2017-5384](https://nvd.nist.gov/vuln/detail/cve-2017-5384)).

### XHR

- Die Eigenschaft [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) gibt bei einem Parse-Fehler beim Interpretieren der empfangenen Daten nicht mehr ein unvollständiges [`Document`](/de/docs/Web/API/Document) zurück, an dessen Anfang sich ein \<parsererror>-Knoten befindet. Stattdessen gibt sie jetzt korrekt `null` zurück ([Firefox-Bug 289714](https://bugzil.la/289714)).
- Um der neuesten Spezifikation zu entsprechen, wird ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ohne einen mit [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetzten {{HTTPHeader("Accept")}}-Header jetzt mit einem solchen Header gesendet, dessen Wert auf `*/*` gesetzt ist ([Firefox-Bug 918752](https://bugzil.la/918752)).
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) wurde korrigiert, sodass die Parameter `username` und `password` bei Auslassung gemäß Spezifikation jetzt standardmäßig `null` entsprechen ([Firefox-Bug 933759](https://bugzil.la/933759)).

### WebRTC

- Die Methode [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) wurde entfernt. Sie war bereits in Firefox 22 veraltet und löste seit Langem eine `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) aus. Verwenden Sie stattdessen für jeden Track des Streams [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack).
- WebRTC unterstützt jetzt standardmäßig den VP9-Codec. Als VP9 in Firefox 46 hinzugefügt wurde, war es standardmäßig deaktiviert, bei Aktivierung jedoch der bevorzugte Codec. Aufgrund seiner derzeitigen CPU-Auslastung wurde es jedoch zur zweiten Wahl nach VP8.
- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream), die einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurückgibt, der den Inhalt des angegebenen {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elements enthält. Beachten Sie, dass sie weiterhin das Präfix `mozCaptureStream()` besitzt und noch nicht exakt der Spezifikation entspricht.

### Audio/Video

- FLAC-Unterstützung ([FLAC-Codec](https://xiph.org/flac/index.html)) wurde sowohl in FLAC- als auch in Ogg-Containern hinzugefügt ([Firefox-Bug 1195723](https://bugzil.la/1195723)). Unterstützte FLAC-MIME-Typen sind: `audio/flac` und `audio/x-flac`. Für FLAC in Ogg sind die unterstützten MIME-Typen: `audio/ogg; codecs=flac` und `video/ogg; codecs=flac`.
- Unterstützung für FLAC in MP4 wurde hinzugefügt, sowohl mit als auch ohne MSE ([Firefox-Bug 1303888](https://bugzil.la/1303888)).
- Die Drosselung in Hintergrund-Tabs von Timern, die durch [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval), [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) erstellt werden, wurde in Firefox 50 so geändert, dass sie nicht mehr erfolgt, wenn ein [`AudioContext`](/de/docs/Web/API/AudioContext) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) aktiv Ton wiedergibt. Dadurch wurden jedoch nicht alle Szenarien behoben, in denen zeitkritische Audiowiedergabe – etwa Musikplayer, die einzelne Noten mithilfe von Timern erzeugen – nicht ordnungsgemäß funktionieren konnte. Deshalb drosselt Firefox 51 Hintergrund-Tabs mit einem [`AudioContext`](/de/docs/Web/API/AudioContext) nicht mehr, selbst wenn dieser derzeit keinen Ton wiedergibt.

### DOM

- [`DOMImplementation.hasFeature()`](/de/docs/Web/API/DOMImplementation/hasFeature) gibt jetzt in allen Fällen `true` zurück ([Firefox-Bug 984778](https://bugzil.la/984778)).
- Die Eigenschaften `selectionStart` und `selectionEnd` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) und [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) geben jetzt bei fehlender Auswahl korrekt die aktuelle Position des Texteingabecursors zurück, anstatt 0 zurückzugeben ([Firefox-Bug 1287655](https://bugzil.la/1287655)).
- Die Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und das entsprechende {{HTMLElement("img")}}-Element unterstützen jetzt den `onerror`-Event-Handler und senden [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignisse an das Element, wenn beim [Laden oder Interpretieren von Bildern Fehler auftreten](/de/docs/Web/API/HTMLImageElement#errors).
- Sie können jetzt den Effekt einer Web-[`Animation`](/de/docs/Web/API/Animation) ändern, indem Sie den Wert ihrer Eigenschaft [`effect`](/de/docs/Web/API/Animation/effect) setzen. Zuvor war diese Eigenschaft schreibgeschützt ([Firefox-Bug 1049975](https://bugzil.la/1049975)).
- Die Permissions-API-Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) wurde hinter eine Präferenz (`dom.permissions.revoke.enable`) gestellt und ist standardmäßig deaktiviert, da ihr Design und selbst ihre Existenz in der [Web Application Security Working Group](https://www.w3.org/2011/webappsec/) diskutiert werden.
- Die Eigenschaft [`Navigator.storage`](/de/docs/Web/API/Navigator/storage) und die Methode [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API) wurden zusammen mit dem erforderlichen unterstützenden Code implementiert. Funktionen zur Persistenz von Speichereinheiten sind noch nicht implementiert. Siehe [Firefox-Bug 1267941](https://bugzil.la/1267941).
- Aus Datenschutzgründen runden sowohl [`BatteryManager.chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime) als auch [`BatteryManager.dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime) den zurückgegebenen Wert jetzt auf die nächsten 15 Minuten ([Firefox-Bug 1292655](https://bugzil.la/1292655)).

### Ereignisse

- Firefox unterstützt jetzt die Event-Handler [`onanimationstart`](/de/docs/Web/API/Element/animationstart_event), [`onanimationiteration`](/de/docs/Web/API/Element/animationiteration_event) und [`onanimationend`](/de/docs/Web/API/Element/animationend_event), zusätzlich zur Unterstützung der entsprechenden Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ([Firefox-Bug 911987](https://bugzil.la/911987)).
- Firefox unterstützt jetzt den Event-Handler [`ontransitionend`](/de/docs/Web/API/Element/transitionend_event) ([Firefox-Bug 911987](https://bugzil.la/911987)).

### Sicherheit

- Wenn Anmeldeseiten – also Seiten mit einem Feld [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password) – so erstellt werden, dass sie unsicher übermittelt würden, zeigt Firefox in der Adressleiste ein durchgestrichenes Schlosssymbol an, um Benutzer zu warnen ([Firefox-Bug 1319119](https://bugzil.la/1319119)).

### Entfernt

- Die nicht standardisierte Simple Push API, die hauptsächlich für Firefox OS vorgesehen war und mittlerweile durch die [W3C Push API](/de/docs/Web/API/Push_API) ersetzt wurde, wurde vollständig aus Gecko entfernt ([Firefox-Bug 1296579](https://bugzil.la/1296579)).
- Die nicht standardisierte Alarms API, die hauptsächlich für Firefox OS vorgesehen war, wurde vollständig aus Gecko entfernt ([Firefox-Bug 1300884](https://bugzil.la/1300884)).
- Die Unterstützung für Präfixe in der [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde entfernt ([Firefox-Bug 812701](https://bugzil.la/812701)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Neue APIs:
  - {{WebExtAPIRef("idle.queryState()")}} ([Firefox-Bug 1299846](https://bugzil.la/1299846))
  - {{WebExtAPIRef("idle.onStateChanged")}} ([Firefox-Bug 1299775](https://bugzil.la/1299775))
  - {{WebExtAPIRef("management.getSelf()")}} ([Firefox-Bug 1283116](https://bugzil.la/1283116))
  - {{WebExtAPIRef("management.uninstallSelf()")}} ([Firefox-Bug 1220136](https://bugzil.la/1220136))
  - {{WebExtAPIRef("runtime.getBrowserInfo()")}} ([Firefox-Bug 1268399](https://bugzil.la/1268399))
  - {{WebExtAPIRef("runtime.reload()")}} und {{WebExtAPIRef("runtime.onUpdateAvailable()")}} ([Firefox-Bug 1279012](https://bugzil.la/1279012))

- Sie können jetzt [eine WebExtension in einen Legacy-Add-on-Typ einbetten](https://web.archive.org/web/20210528055219/https://developer.mozilla.org/de/docs/Archive/Add-ons/Embedded_WebExtensions) ([Firefox-Bug 1252215](https://bugzil.la/1252215)).
- [Zugriff auf die Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) wird jetzt unterstützt ([Firefox-Bug 1197451](https://bugzil.la/1197451))
- Die an den Callback von {{WebExtAPIRef("tabs.executeScript()")}} übergebenen Argumente wurden korrigiert ([Firefox-Bug 1290157](https://bugzil.la/1290157))
- [localStorage](/de/docs/Web/API/Window/localStorage) wird jetzt gelöscht, wenn eine WebExtension deinstalliert wird ([Firefox-Bug 1213990](https://bugzil.la/1213990))
- Ein geänderter {{HTTPHeader("Content-Type")}}-Header in WebExtensions wird jetzt berücksichtigt ([Firefox-Bug 1304331](https://bugzil.la/1304331))

### Sonstiges

- Die [`multiprocessCompatible`-Eigenschaft von `install.rdf`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#multiprocesscompatible) muss jetzt explizit auf `false` gesetzt werden, damit beim Installieren des Add-ons Multiprocess nicht in Firefox aktiviert wird.
- Die Mozilla-spezifische Social API wurde erheblich geändert, hauptsächlich um nicht mehr verwendete APIs zu entfernen:
  - Die Schnittstelle `MozSocial` und die sie unterstützende Eigenschaft `Navigator.mozSocial` wurden entfernt.
  - Die Social Bookmarks API wurde entfernt.
  - Die Social-Chat-Funktionalität wurde entfernt.
  - Die Social Status API wurde entfernt.
  - Alle Social-Widgets mit Ausnahme des Share-Panels wurden entfernt. Dies umfasst die soziale Seitenleiste, Flyover-Panels und weitere Komponenten.
  - Alle unterstützenden Benutzeroberflächenfunktionen und Funktionalitäten für die entfernten APIs wurden ebenfalls entfernt.
  - Manifest-Eigenschaften von Social-Service-Anbietern, die die entfernte Funktionalität unterstützen, werden nicht mehr unterstützt.

- Wenn ein Add-on `mimeTypes.rdf` verwendet, um eine Zuordnung von Dateierweiterungen zu MIME-Typen bereitzustellen, muss es jetzt einen Eintrag in der Kategorie `"ext-to-type-mapping"` registrieren ([Firefox-Bug 306471](https://bugzil.la/306471)).
- Die [Browser API](https://web.archive.org/web/20210124171655/https://developer.mozilla.org/de/docs/Mozilla/Gecko/Chrome/API/Browser_API) enthält jetzt ein `detail`-Objekt im Ereignisobjekt des `mozbrowserlocationchange`-Ereignisses, das die Eigenschaften `canGoForward`/`canGoBack` enthält und damit das synchrone Abrufen des Zurück-/Vorwärtsstatus von mozBrowser ermöglicht ([Firefox-Bug 1279635](https://bugzil.la/1279635)).
