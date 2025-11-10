---
title: Firefox 51 Versionshinweise für Entwickler
short-title: Firefox 51
slug: Mozilla/Firefox/Releases/51
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/).
Firefox 51 wurde am 24. Januar 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente können nun als Trennlinien in {{HTMLElement("menu")}}-Elementen verwendet werden ([Firefox-Fehler 870388](https://bugzil.la/870388)).
- Die `selectionStart`- und `selectionEnd`-Attribute der {{HTMLElement("input")}}- und {{HTMLElement("textarea")}}-Elemente geben nun korrekt die aktuelle Position des Texteingabecursors zurück, wenn keine Auswahl vorhanden ist, anstatt 0 zurückzugeben ([Firefox-Fehler 1287655](https://bugzil.la/1287655)).

### CSS

- {{cssxref(":indeterminate")}} für \<input type="radio"> wurde implementiert ([Firefox-Fehler 885359](https://bugzil.la/885359)).
- {{cssxref(":placeholder-shown")}} für `<input type="text">` wurde implementiert ([Firefox-Fehler 1069015](https://bugzil.la/1069015)).
- Das {{cssxref("::placeholder")}} Pseudo-Element ist jetzt ohne Präfix ([Firefox-Fehler 1069012](https://bugzil.la/1069012)).
- Die {{cssxref(":valid")}} CSS-Pseudoklasse, die nicht mit gültigen {{HTMLElement("form")}}-Elementen übereinstimmte, wurde korrigiert ([Firefox-Fehler 1285425](https://bugzil.la/1285425)).
- Der `plaintext`-Wert von {{cssxref("unicode-bidi")}} funktioniert jetzt auch mit vertikalen Schreibrichtungen ([Firefox-Fehler 1302734](https://bugzil.la/1302734)).
- Die `fill-box`- und `stroke-box`-Werte von {{cssxref("clip-path")}} werden jetzt ordnungsgemäß unterstützt; sie waren zuvor Aliase von `border-box` ([Firefox-Fehler 1289011](https://bugzil.la/1289011)).
- Die Höhe der Flex-Linie wird beschränkt (gespannte Flex-Items beschränkend) in einem einzeiligen Flex-Container mit automatischer Höhe und max-height (Spezifikationsänderung) ([Firefox-Fehler 1000957](https://bugzil.la/1000957)).

### JavaScript

- Die ES2015 {{jsxref("Symbol.toStringTag")}}-Eigenschaft wurde implementiert ([Firefox-Fehler 1114580](https://bugzil.la/1114580)).
- Die ES2015-Methoden {{jsxref("TypedArray.prototype.toString()")}} und {{jsxref("TypedArray.prototype.toLocaleString()")}} wurden implementiert ([Firefox-Fehler 1121938](https://bugzil.la/1121938)).
- Die Methode {{jsxref("Intl/DateTimeFormat/formatToParts", "DateTimeFormat.prototype.formatToParts()")}} ist jetzt verfügbar ([Firefox-Fehler 1289340](https://bugzil.la/1289340)).
- {{jsxref("Statements/const", "const")}} und {{jsxref("Statements/let", "let")}} sind jetzt vollständig ES2015-konform ([Firefox-Fehler 950547](https://bugzil.la/950547)).
- Die Verwendung von {{jsxref("Statements/const", "const")}} in [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen hat jetzt bei jeder Iteration eine neue Bindung und löst keinen {{jsxref("SyntaxError")}} mehr aus ([Firefox-Fehler 1101653](https://bugzil.la/1101653)).
- Die veraltete [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Schleife zeigt jetzt eine Warnung in der Konsole an ([Firefox-Fehler 1293205](https://bugzil.la/1293205)). Bitte migrieren Sie Ihren Code zur standardisierten [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife.
- [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können kein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) mehr haben und `let` als Label-Name ist jetzt unzulässig ([Firefox-Fehler 1288459](https://bugzil.la/1288459)).
- Veraltete [Legacy-Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) werfen jetzt einen Fehler, wenn sie in [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) verwendet werden ([Firefox-Fehler 1199296](https://bugzil.la/1199296)).
- Die `next()`-Methode des [Iterator-Protokolls](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) wird jetzt einen {{jsxref("TypeError")}} auslösen, wenn der zurückgegebene Wert kein Objekt ist ([Firefox-Fehler 1016936](https://bugzil.la/1016936)).
- Kinderindizierte Pseudoklassen-Selektoren sollten ohne Elternteil übereinstimmen ([Firefox-Fehler 1300374](https://bugzil.la/1300374)).

### Entwicklertools

- [Der Netzwerkmonitor zeigt jetzt einen "Blockiert"-Status für Netzwerkrequests an.](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timings)
- [Alle zwischen Firefox 50 und Firefox 51 behobenen Devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263768&resolution=FIXED&classification=Client%20Software&chfieldto=2016-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2016-08-01&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### WebGL

- [WebGL 2](/de/docs/Web/API/WebGL_API) ist jetzt standardmäßig aktiviert. Siehe [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) für einige Demos.
  - WebGL 2 stellt das [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Interface zur Verfügung, das OpenGL ES 3.0 auf das {{HTMLElement("canvas")}}-Element bringt.
  - Neue Funktionen beinhalten:
    - [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
    - [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
    - [Uniform Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
    - [Sync-Objekte](/de/docs/Web/API/WebGLSync),
    - [Query-Objekte](/de/docs/Web/API/WebGLQuery),
    - [Transform Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
    - Vorgeschlagene Erweiterungen, die jetzt ein Kernstück von WebGL 2 sind: [Vertex Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [Mehrere Render-Ziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragment-Tiefe](/de/docs/Web/API/EXT_frag_depth).

- Die `WEBGL_compressed_texture_es3`-Erweiterung (implementiert in Firefox 46) wurde in [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) umbenannt ([Firefox-Fehler 1316778](https://bugzil.la/1316778)) und ist in WebGL 2-Kontexten standardmäßig nicht mehr enthalten ([Firefox-Fehler 1306174](https://bugzil.la/1306174)).
- Die [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)-Erweiterung wurde aktualisiert, um [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekte anstelle von `WebGLTimerQuery`-Objekten zu verwenden ([Firefox-Fehler 1308057](https://bugzil.la/1308057)).
- Die [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object)-Erweiterung verwendet jetzt das WebGL 2 [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt anstelle ihres eigenen `WebGLVertexArrayObjectOES`-Objekts ([Firefox-Fehler 1318523](https://bugzil.la/1318523)).
- Sie können jetzt [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekte als Quellen für Texturbilder in Methoden wie [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D), [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D), [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D) oder [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D) verwenden ([Firefox-Fehler 1324924](https://bugzil.la/1324924)).

### IndexedDB v2

- Die Implementierung von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Version 2 ist jetzt abgeschlossen:
  - Unterstützung für die neue [`IDBObjectStore.getKey()`](/de/docs/Web/API/IDBObjectStore/getKey)-Methode wurde hinzugefügt ([Firefox-Fehler 1271506](https://bugzil.la/1271506)).
  - Unterstützung für die [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey)-Methode wurde hinzugefügt ([Firefox-Fehler 1271505](https://bugzil.la/1271505)).
  - Binärschlüssel werden jetzt unterstützt ([Firefox-Fehler 1271500](https://bugzil.la/1271500)).
  - Siehe auch ["What's new in IndexedDB 2.0?" – Mozilla hacks](https://hacks.mozilla.org/2016/10/whats-new-in-indexeddb-2-0/)

### Canvas

- Die nicht standardisierte `CanvasRenderingContext2D.mozFillRule()`-Methode wurde entfernt; die Füllregel kann mithilfe eines Parameters der standardmäßigen [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)-Methode definiert werden ([Firefox-Fehler 826619](https://bugzil.la/826619)).
- Die [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)-Eigenschaft ist jetzt unverändert ([Firefox-Fehler 768072](https://bugzil.la/768072)).

### SVG

- Das {{SVGAttr("tabindex")}}-Attribut wurde hinzugefügt ([Firefox-Fehler 778654](https://bugzil.la/778654)).
- Das {{SVGAttr("href")}}-Attribut wurde hinzugefügt, wodurch {{SVGAttr("xlink:href")}} obsolet wird ([Firefox-Fehler 1245751](https://bugzil.la/1245751)).
- Sie können jetzt benutzerdefinierte Datenattribute auf SVG-Elementen durch Verwendung der [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft und der {{SVGAttr("data-*")}}-Reihe von SVG-Attributen verwenden ([Firefox-Fehler 921834](https://bugzil.la/921834)).
- CSS-Animationen, die in einem SVG-Bild verwendet werden, das in einem {{HTMLElement("img")}}-Element dargestellt wird, funktionieren jetzt wieder; dies war eine alte Regression ([Firefox-Fehler 1190881](https://bugzil.la/1190881)).

### Web Workers

- Der nicht standardisierte und veraltete `onclose`-Ereignishandler und die Verwendung des `close`-Ereignisses in [`Worker`](/de/docs/Web/API/Worker) wurden aus Firefox entfernt.

### Netzwerk

- Skripte, die mit einem `image/*`, `video/*`, `audio/*` oder `text/csv` MIME-Typ bereitgestellt werden, werden jetzt blockiert und nicht geladen oder ausgeführt. Dies erfolgt, wenn sie mit {{HTMLElement("script")}} deklariert oder über [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts), [`Worker()`](/de/docs/Web/API/Worker/Worker), [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) geladen werden ([Firefox-Fehler 1229267](https://bugzil.la/1229267) und [Firefox-Fehler 1288361](https://bugzil.la/1288361)).
- Unterstützung für SHA-1-Zertifikate von öffentlich vertrauenswürdigen Zertifizierungsstellen wurde entfernt ([Firefox-Fehler 1302140](https://bugzil.la/1302140)). Siehe auch [Phasing Out SHA-1 on the Public Web](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/) für weitere Informationen.
- Neue WoSign- und StartCom-Zertifikate werden nicht mehr akzeptiert ([Firefox-Fehler 1309707](https://bugzil.la/1309707)), siehe [Distrusting New WoSign and StartCom Certificates](https://blog.mozilla.org/security/2016/10/24/distrusting-new-wosign-and-startcom-certificates/) für weitere Informationen.
- Die [PAC](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) Funktion `FindProxyForURL(url, host)` entfernt jetzt Pfade und Abfragen von https\:// URLs, um Informationslecks zu vermeiden (siehe [Firefox-Fehler 1255474](https://bugzil.la/1255474) und [CVE-2017-5384](https://nvd.nist.gov/vuln/detail/CVE-2017-5384)).

### XHR

- Die [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft gibt nicht mehr ein Teil-`[Document`](/de/docs/Web/API/Document) mit einem \<parsererror>-Knoten oben zurück, wenn ein Parse-Fehler bei dem Versuch auftritt, die empfangenen Daten zu interpretieren. Stattdessen gibt sie korrekt `null` zurück ([Firefox-Fehler 289714](https://bugzil.la/289714)).
- Um die neueste Spezifikation zu erfüllen, wird eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ohne ein mit [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetztes {{HTTPHeader("Accept")}}-Header jetzt mit einem solchen Header gesendet, dessen Wert auf `*/*` gesetzt ist ([Firefox-Fehler 918752](https://bugzil.la/918752)).
- Fixed [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open), sodass die `username`- und `password`-Parameter, wenn sie weggelassen werden, jetzt standardmäßig auf `null` gesetzt werden, gemäß der Spezifikation ([Firefox-Fehler 933759](https://bugzil.la/933759)).

### WebRTC

- Die Methode [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) wurde entfernt. Sie wurde bereits in Firefox 22 veraltet und hat seit langem eine `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Sie müssen stattdessen für jeden Track im Stream [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.
- WebRTC unterstützt jetzt standardmäßig den VP9-Codec. Als er in Firefox 46 hinzugefügt wurde, war VP9 standardmäßig deaktiviert, aber wenn er aktiviert war, war er der bevorzugte Codec; jedoch wurde er aufgrund seines aktuellen CPU-Nutzungsgrades als zweite Wahl (nach VP8) verschoben.
- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream), die einen [`MediaStream`](/de/docs/Web/API/MediaStream) enthält, der den Inhalt des angegebenen {{HTMLElement("video")}} oder {{HTMLElement("audio")}} zurückgibt. Es ist bemerkenswert, dass dies immer noch als `mozCaptureStream()` präfixiert ist und noch nicht genau der Spezifikation entspricht.

### Audio/Video

- Unterstützung für FLAC wurde hinzugefügt ([FLAC-Codec](https://xiph.org/flac/index.html)) sowohl in FLAC- als auch in Ogg-Containern ([Firefox-Fehler 1195723](https://bugzil.la/1195723)). Unterstützte FLAC-MIME-Typen sind: `audio/flac` und `audio/x-flac`. Für FLAC in Ogg sind unterstützte MIME-Typen: `audio/ogg; codecs=flac`, und `video/ogg; codecs=flac`.
- Unterstützung für FLAC in MP4 (sowohl mit als auch ohne MSE) wurde hinzugefügt ([Firefox-Fehler 1303888](https://bugzil.la/1303888)).
- Das Throttling von Timern, die von [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval), [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) erstellt wurden, in Hintergrund-Tabs wurde in Firefox 50 so geändert, dass es nicht mehr auftritt, wenn ein [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`AudioContext`](/de/docs/Web/API/AudioContext) aktiv Ton spielt. Dies löste jedoch nicht alle Szenarien, in denen Timing-sensible Audiowiedergabe (wie Musikplayer, die einzelne Noten mit Timern erzeugen) nicht richtig funktionieren konnte. Aus diesem Grund werden Hintergrund-Tabs in Firefox 51, die ein [`AudioContext`](/de/docs/Web/API/AudioContext) haben, nicht mehr gedrosselt, auch wenn es gerade keinen Ton spielt.

### DOM

- Die [`DOMImplementation.hasFeature()`](/de/docs/Web/API/DOMImplementation/hasFeature) gibt jetzt immer `true` zurück ([Firefox-Fehler 984778](https://bugzil.la/984778)).
- Die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)- und [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Eigenschaften `selectionStart` und `selectionEnd` geben nun korrekt die aktuelle Position des Texteingabecursors zurück, wenn keine Auswahl vorhanden ist, anstatt 0 zurückzugeben ([Firefox-Fehler 1287655](https://bugzil.la/1287655)).
- Das [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interface und das entsprechende {{HTMLElement("img")}}-Element unterstützen jetzt den `onerror`-Ereignishandler und senden [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignisse an das Element, wann immer [Fehler beim Laden oder Interpretieren von Bildern auftreten](/de/docs/Web/API/HTMLImageElement#errors).
- Sie können nun den Effekt einer Web-[`Animation`](/de/docs/Web/API/Animation) ändern, indem Sie den Wert ihrer [`effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft festlegen. Bisher war diese Eigenschaft schreibgeschützt ([Firefox-Fehler 1049975](https://bugzil.la/1049975)).
- Die Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) der Berechtigungs-API wurde hinter einer Präferenz (`dom.permissions.revoke.enable`) platziert und standardmäßig deaktiviert, da ihr Design und sogar ihre Existenz in der [Web Application Security Working Group](https://www.w3.org/2011/webappsec/) diskutiert werden.
- Die [`Navigator.storage`](/de/docs/Web/API/Navigator/storage)-Eigenschaft der [Storage API](/de/docs/Web/API/Storage_API) und die Methode [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate) wurden zusammen mit dem erforderlichen unterstützenden Code implementiert. Speicherpersistenzfunktionen sind noch nicht implementiert. Siehe [Firefox-Fehler 1267941](https://bugzil.la/1267941).
- Aus Datenschutzgründen werden sowohl [`BatteryManager.chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime) als auch [`BatteryManager.dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime) jetzt auf die nächste Viertelstunde gerundet ([Firefox-Fehler 1292655](https://bugzil.la/1292655)).

### Ereignisse

- Firefox unterstützt jetzt die [`onanimationstart`](/de/docs/Web/API/Element/animationstart_event), [`onanimationiteration`](/de/docs/Web/API/Element/animationiteration_event) und [`onanimationend`](/de/docs/Web/API/Element/animationend_event) Ereignishandler, zusätzlich zur Unterstützung der entsprechenden Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ([Firefox-Fehler 911987](https://bugzil.la/911987)).
- Firefox unterstützt jetzt den [`ontransitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignishandler ([Firefox-Fehler 911987](https://bugzil.la/911987)).

### Sicherheit

- Wenn Anmeldeseiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)-Feld enthalten) so erstellt werden, dass sie unsicher übermittelt werden würden, zeigt Firefox ein durchgestrichenes Schloss-Symbol in der Adressleiste an, um Benutzer zu warnen ([Firefox-Fehler 1319119](https://bugzil.la/1319119)). Siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords) für weitere Details.

### Entfernungen

- Die nicht standardisierte Simple Push API, die hauptsächlich für die Verwendung mit Firefox OS gedacht war und jetzt von der [W3C Push API](/de/docs/Web/API/Push_API) überholt wurde, wurde vollständig aus Gecko entfernt ([Firefox-Fehler 1296579](https://bugzil.la/1296579)).
- Die nicht standardisierte Wecker-API, die hauptsächlich für die Verwendung mit Firefox OS gedacht war, wurde vollständig aus Gecko entfernt ([Firefox-Fehler 1300884](https://bugzil.la/1300884)).
- Unterstützung für Präfixe in der [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde entfernt ([Firefox-Fehler 812701](https://bugzil.la/812701)).

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

- Neue APIs:
  - {{WebExtAPIRef("idle.queryState()")}} ([Firefox-Fehler 1299846](https://bugzil.la/1299846))
  - {{WebExtAPIRef("idle.onStateChanged")}} ([Firefox-Fehler 1299775](https://bugzil.la/1299775))
  - {{WebExtAPIRef("management.getSelf()")}} ([Firefox-Fehler 1283116](https://bugzil.la/1283116))
  - {{WebExtAPIRef("management.uninstallSelf()")}} ([Firefox-Fehler 1220136](https://bugzil.la/1220136))
  - {{WebExtAPIRef("runtime.getBrowserInfo()")}} ([Firefox-Fehler 1268399](https://bugzil.la/1268399))
  - {{WebExtAPIRef("runtime.reload()")}} und {{WebExtAPIRef("runtime.onUpdateAvailable()")}} ([Firefox-Fehler 1279012](https://bugzil.la/1279012))

- Sie können jetzt [eine WebExtension in einem Legacy-Add-On-Typ einbetten](https://web.archive.org/web/20210528055219/https://developer.mozilla.org/de/docs/Archive/Add-ons/Embedded_WebExtensions) ([Firefox-Fehler 1252215](https://bugzil.la/1252215)).
- [Zwischenablagezugriff](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) wird jetzt unterstützt ([Firefox-Fehler 1197451](https://bugzil.la/1197451))
- Die an den Callback von {{WebExtAPIRef("tabs.executeScript()")}} übergebenen Argumente wurden korrigiert ([Firefox-Fehler 1290157](https://bugzil.la/1290157))
- [localStorage](/de/docs/Web/API/Window/localStorage) wird jetzt geleert, wenn eine WebExtension deinstalliert wird ([Firefox-Fehler 1213990](https://bugzil.la/1213990))
- Ein geänderter {{HTTPHeader("Content-Type")}}-Header in Web Extensions wird jetzt berücksichtigt ([Firefox-Fehler 1304331](https://bugzil.la/1304331))

### Sonstiges

- Die [`multiprocessCompatible`-Eigenschaft von `install.rdf`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#multiprocesscompatible) muss jetzt explizit auf `false` gesetzt werden, um zu verhindern, dass Multiprocess in Firefox aktiviert wird, wenn das Add-On installiert wird.
- Die Mozilla-spezifische Social API wurde grundlegend geändert (hauptsächlich um nicht mehr verwendete APIs zu entfernen), wie folgt:
  - Das `MozSocial`-Interface und die `Navigator.mozSocial`-Eigenschaft, die es unterstützt, wurden entfernt.
  - Die Social Bookmarks API wurde entfernt.
  - Die Social-Chat-Funktionalität wurde entfernt.
  - Die Social Status API wurde entfernt.
  - Alle sozialen Widgets, außer dem Share-Panel, wurden entfernt. Dazu gehören die soziale Seitenleiste, Flyover-Panels usw.
  - Alle unterstützenden Benutzeroberflächenmerkmale und Funktionen für die entfernten APIs wurden ebenfalls entfernt.
  - Soziale Service-Provider Manifest-Eigenschaften, die die entfernten Funktionalitäten unterstützen, werden nicht mehr unterstützt.

- Wenn ein Add-On `mimeTypes.rdf` verwendet, um eine Dateierweiterung zu MIME-Typ-Zuordnung bereitzustellen, muss es jetzt einen Eintrag in der Kategorie `"ext-to-type-mapping"` registrieren ([Firefox-Fehler 306471](https://bugzil.la/306471)).
- Die [Browser API](https://web.archive.org/web/20210124171655/https://developer.mozilla.org/de/docs/Mozilla/Gecko/Chrome/API/Browser_API) enthält jetzt ein `detail`-Objekt auf dem Ereignisobjekt des `mozbrowserlocationchange`-Ereignisses, das `canGoForward`/`canGoBack`-Eigenschaften enthält und das Abrufen des Vorwärts-/Rückwärts-Status des mozBrowsers synchron ermöglicht ([Firefox-Fehler 1279635](https://bugzil.la/1279635)).
