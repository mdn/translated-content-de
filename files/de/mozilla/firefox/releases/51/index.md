---
title: Firefox 51 für Entwickler
slug: Mozilla/Firefox/Releases/51
l10n:
  sourceCommit: 4163a227e2c4b42139056a3474b146fe90876cbf
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 51 wurde am 24. Januar 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente können jetzt als Trennzeichen in {{HTMLElement("menu")}}-Elementen verwendet werden ([Firefox-Bug 870388](https://bugzil.la/870388)).
- Die `selectionStart` und `selectionEnd` Attribute der {{HTMLElement("input")}} und {{HTMLElement("textarea")}} Elemente geben jetzt korrekt die aktuelle Position des Texteingabecursors zurück, wenn keine Auswahl vorhanden ist, anstatt 0 zurückzugeben ([Firefox-Bug 1287655](https://bugzil.la/1287655)).

### CSS

- {{cssxref(":indeterminate")}} wurde für `<input type="radio">` implementiert ([Firefox-Bug 885359](https://bugzil.la/885359)).
- {{cssxref(":placeholder-shown")}} wurde für `<input type="text">` implementiert ([Firefox-Bug 1069015](https://bugzil.la/1069015)).
- Das {{cssxref("::placeholder")}} Pseudo-Element ist nun unverändert ([Firefox-Bug 1069012](https://bugzil.la/1069012)).
- Die {{cssxref(":valid")}} CSS-Pseudoklasse, die keine gültigen {{HTMLElement("form")}}-Elemente übereinstimmte, wurde behoben ([Firefox-Bug 1285425](https://bugzil.la/1285425)).
- Der `plaintext`-Wert von {{cssxref("unicode-bidi")}} funktioniert jetzt auch mit vertikalen Schreibmodi ([Firefox-Bug 1302734](https://bugzil.la/1302734)).
- Die Werte `fill-box` und `stroke-box` von {{cssxref("clip-path")}} werden nun ordnungsgemäß unterstützt; zuvor waren sie Aliase von `border-box` ([Firefox-Bug 1289011](https://bugzil.la/1289011)).
- Die Höhe der Flex-Linie wird geklämmt (gestreckte Flex-Elemente in einem einzeiligen Auto-Höhen-Flex-Container mit max-height), was eine Spezifikationsänderung darstellt ([Firefox-Bug 1000957](https://bugzil.la/1000957)).

### JavaScript

- Die ES2015 {{jsxref("Symbol.toStringTag")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1114580](https://bugzil.la/1114580)).
- Die ES2015-Methoden {{jsxref("TypedArray.prototype.toString()")}} und {{jsxref("TypedArray.prototype.toLocaleString()")}} wurden implementiert ([Firefox-Bug 1121938](https://bugzil.la/1121938)).
- Die Methode {{jsxref("Intl/DateTimeFormat/formatToParts", "DateTimeFormat.prototype.formatToParts()")}} ist jetzt verfügbar ([Firefox-Bug 1289340](https://bugzil.la/1289340)).
- {{jsxref("Statements/const", "const")}} und {{jsxref("Statements/let", "let")}} sind jetzt vollständig ES2015-konform ([Firefox-Bug 950547](https://bugzil.la/950547)).
- Die Verwendung von {{jsxref("Statements/const", "const")}} in [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen hat jetzt bei jeder Iteration eine frische Bindung und wirft nicht mehr einen {{jsxref("SyntaxError")}} ([Firefox-Bug 1101653](https://bugzil.la/1101653)).
- Die veraltete [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Schleife zeigt jetzt eine Warnung in der Konsole an ([Firefox-Bug 1293205](https://bugzil.la/1293205)). Bitte migrieren Sie Ihren Code zur standardisierten [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife.
- [Generatordefinitionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können kein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) mehr haben, und "`let`" als Labelname ist jetzt verboten ([Firefox-Bug 1288459](https://bugzil.la/1288459)).
- Veraltete [Legacy-Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) werfen nun eine Ausnahme, wenn sie in [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) verwendet werden ([Firefox-Bug 1199296](https://bugzil.la/1199296)).
- Die `next()`-Methode des [Iterator-Protokolls](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) wirft nun einen {{jsxref("TypeError")}}, wenn der zurückgegebene Wert kein Objekt ist ([Firefox-Bug 1016936](https://bugzil.la/1016936)).
- Pseudo-Klassen-Selektoren mit Kind-Index sollten ohne übergeordnetes Element übereinstimmen ([Firefox-Bug 1300374](https://bugzil.la/1300374)).

### Entwicklerwerkzeuge

- [Der Netzwerkmonitor zeigt jetzt einen "Blocked"-Status für Netzwerk-Anfragen an.](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timings)
- [Alle zwischen Firefox 50 und Firefox 51 behobenen Devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263768&resolution=FIXED&classification=Client%20Software&chfieldto=2016-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2016-08-01&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### WebGL

- [WebGL 2](/de/docs/Web/API/WebGL_API) ist jetzt standardmäßig aktiviert. Siehe [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) für einige Demos.

  - WebGL 2 bietet die [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Schnittstelle, welche OpenGL ES 3.0 auf das {{HTMLElement("canvas")}}-Element bringt.
  - Neue Funktionen umfassen:

    - [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
    - [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
    - [Uniform-Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
    - [Sync-Objekte](/de/docs/Web/API/WebGLSync),
    - [Query-Objekte](/de/docs/Web/API/WebGLQuery),
    - [Transform-Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
    - Beförderte Erweiterungen, die jetzt Kern von WebGL 2 sind: [Vertex-Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [Mehrfach-Render-Ziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragment-Tiefe](/de/docs/Web/API/EXT_frag_depth).

- Die `WEBGL_compressed_texture_es3`-Erweiterung (implementiert in Firefox 46) wurde in [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) umbenannt ([Firefox-Bug 1316778](https://bugzil.la/1316778)) und wird standardmäßig nicht mehr in WebGL 2-Kontexten aufgenommen ([Firefox-Bug 1306174](https://bugzil.la/1306174)).
- Die [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)-Erweiterung wurde aktualisiert, um [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekte anstelle von `WebGLTimerQuery`-Objekten zu nutzen ([Firefox-Bug 1308057](https://bugzil.la/1308057)).
- Die [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object)-Erweiterung verwendet jetzt das WebGL 2 [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)-Objekt anstelle ihres eigenen `WebGLVertexArrayObjectOES`-Objekts ([Firefox-Bug 1318523](https://bugzil.la/1318523)).
- Sie können jetzt [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekte als Quellen für Texturbilder in Methoden wie [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D), [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D), [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D) oder [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D) verwenden ([Firefox-Bug 1324924](https://bugzil.la/1324924)).

### IndexedDB v2

- Die Implementierung der [IndexedDB](/de/docs/Web/API/IndexedDB_API) Version 2 ist nun abgeschlossen:

  - Unterstützung für die neue Methode [`IDBObjectStore.getKey()`](/de/docs/Web/API/IDBObjectStore/getKey) wurde hinzugefügt ([Firefox-Bug 1271506](https://bugzil.la/1271506)).
  - Unterstützung für die Methode [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey) wurde hinzugefügt ([Firefox-Bug 1271505](https://bugzil.la/1271505)).
  - Binäre Schlüssel werden jetzt unterstützt ([Firefox-Bug 1271500](https://bugzil.la/1271500)).
  - Siehe auch ["Was ist neu in IndexedDB 2.0?" – Mozilla Hacks](https://hacks.mozilla.org/2016/10/whats-new-in-indexeddb-2-0/).

### Canvas

- Die nicht-standardisierte Methode `CanvasRenderingContext2D.mozFillRule()` wurde entfernt; die Füllregel kann mit einem Parameter der Standardmethode [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) definiert werden ([Firefox-Bug 826619](https://bugzil.la/826619)).
- Die Eigenschaft [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) ist nun unverändert ([Firefox-Bug 768072](https://bugzil.la/768072)).

### SVG

- Das Attribut {{SVGAttr("tabindex")}} wurde hinzugefügt ([Firefox-Bug 778654](https://bugzil.la/778654)).
- Das Attribut {{SVGAttr("href")}} wurde hinzugefügt, wodurch {{SVGAttr("xlink:href")}} obsolet wird ([Firefox-Bug 1245751](https://bugzil.la/1245751)).
- Sie können jetzt benutzerdefinierte Datenattribute auf SVG-Elementen über die [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft und die {{SVGAttr("data-*")}}-Attributgruppe verwenden ([Firefox-Bug 921834](https://bugzil.la/921834)).
- CSS-Animationen, die in einem SVG-Bild verwendet werden, das in einem {{HTMLElement("img")}}-Element dargestellt wird, funktionieren jetzt wieder; dies war ein alter Regression ([Firefox-Bug 1190881](https://bugzil.la/1190881)).

### Web Worker

- Der nicht-standardisierte und veraltete `onclose`-Ereignis-Handler und die [`Worker`](/de/docs/Web/API/Worker)-Verwendung des `close`-Ereignisses wurden aus Firefox entfernt.

### Netzwerke

- Skripte, die mit einem `image/*`, `video/*`, `audio/*` oder `text/csv` MIME-Typ geliefert werden, werden jetzt blockiert und nicht geladen oder ausgeführt. Dies geschieht, wenn sie mit {{HTMLElement("script")}} deklariert sind, oder über [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts), [`Worker()`](/de/docs/Web/API/Worker/Worker), [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) geladen werden ([Firefox-Bug 1229267](https://bugzil.la/1229267) und [Firefox-Bug 1288361](https://bugzil.la/1288361)).
- Unterstützung für SHA-1-Zertifikate von öffentlich vertrauenswürdigen Zertifizierungsstellen wurde entfernt ([Firefox-Bug 1302140](https://bugzil.la/1302140)). Siehe auch [Phasing Out SHA-1 on the Public Web](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/) für weitere Informationen.
- Neue WoSign- und StartCom-Zertifikate werden nicht mehr akzeptiert ([Firefox-Bug 1309707](https://bugzil.la/1309707)), siehe [Distrusting New WoSign and StartCom Certificates](https://blog.mozilla.org/security/2016/10/24/distrusting-new-wosign-and-startcom-certificates/) für weitere Informationen.
- Die [PAC](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>)-Funktion `FindProxyForURL(url, host)` entfernt jetzt Pfade und Abfragen von https\:// URLs, um Informationslecks zu vermeiden (siehe [Firefox-Bug 1255474](https://bugzil.la/1255474) und [CVE-2017-5384](https://nvd.nist.gov/vuln/detail/CVE-2017-5384)).

### XHR

- Die [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft gibt bei einem Analysefehler nicht mehr ein teilweises [`Document`](/de/docs/Web/API/Document) mit einem \<parsererror>-Knoten an der Spitze zurück. Stattdessen wird korrekt `null` zurückgegeben ([Firefox-Bug 289714](https://bugzil.la/289714)).
- Um der neuesten Spezifikation zu entsprechen, wird ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ohne ein mit [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetztes {{HTTPHeader("Accept")}}-Header jetzt mit einem solchen Header gesendet, wobei dessen Wert auf `*/*` gesetzt ist ([Firefox-Bug 918752](https://bugzil.la/918752)).
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) wurde behoben, sodass die `username` und `password` Parameter jetzt gemäß der Spezifikation standardmäßig auf `null` gesetzt werden, wenn sie weggelassen werden ([Firefox-Bug 933759](https://bugzil.la/933759)).

### WebRTC

- Die Methode [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) wurde entfernt. Sie war seit Firefox 22 veraltet und hat seit langem einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Sie müssen stattdessen für jeden Track auf dem Stream [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.
- WebRTC unterstützt jetzt standardmäßig den VP9-Codec. Als VP9 in Firefox 46 hinzugefügt wurde, war er standardmäßig deaktiviert, wurde jedoch bei Aktivierung als bevorzugter Codec verwendet; er wurde jedoch an die zweite Stelle (nach VP8) verschoben, aufgrund seines aktuellen CPU-Nutzungslevels.
- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream), die einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit den Inhalten des spezifizierten {{HTMLElement("video")}} oder {{HTMLElement("audio")}} zurückgibt. Es ist erwähnenswert, dass dies immer noch mit `mozCaptureStream()` vorangestellt ist und dass es noch nicht genau der Spezifikation entspricht.

### Audio/Video

- Unterstützung für FLAC wurde hinzugefügt ([FLAC-Codec](https://xiph.org/flac/index.html)) sowohl in FLAC- als auch in Ogg-Containern ([Firefox-Bug 1195723](https://bugzil.la/1195723)). Unterstützte FLAC-MIME-Typen sind: `audio/flac` und `audio/x-flac`. Für FLAC in Ogg sind unterstützte MIME-Typen: `audio/ogg; codecs=flac` und `video/ogg; codecs=flac`.
- Unterstützung für FLAC in MP4 wurde hinzugefügt (sowohl mit als auch ohne MSE) ([Firefox-Bug 1303888](https://bugzil.la/1303888)).
- Die Drosselung in Hintergrund-Tabs von Timern, die mit [`setInterval()`](/de/docs/Web/API/SetInterval) und [`setTimeout()`](/de/docs/Web/API/SetTimeout) erstellt wurden, wurde in Firefox 50 geändert, sodass dies nicht mehr auftritt, wenn ein [Web Audio API](/de/docs/Web/API/Web_Audio_API)-[`AudioContext`](/de/docs/Web/API/AudioContext) aktiv Sound abspielt. Allerdings hat dies nicht alle Szenarien gelöst, in denen timing-sensitive Audio-Wiedergabe (z. B. Musik-Player, die einzelne Noten mit Timern generieren) möglicherweise nicht richtig funktionieren kann. Aus diesem Grund drosselt Firefox 51 Hintergrund-Tabs nicht mehr, die einen [`AudioContext`](/de/docs/Web/API/AudioContext) haben, selbst wenn er momentan keinen Sound abspielt.

### DOM

- [`DOMImplementation.hasFeature()`](/de/docs/Web/API/DOMImplementation/hasFeature) gibt jetzt in allen Fällen `true` zurück ([Firefox-Bug 984778](https://bugzil.la/984778)).
- Die Eigenschaften `selectionStart` und `selectionEnd` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) und [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) geben jetzt korrekt die aktuelle Position des Texteingabecursors zurück, wenn keine Auswahl vorhanden ist, anstatt 0 zurückzugeben ([Firefox-Bug 1287655](https://bugzil.la/1287655)).
- Die Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) und das entsprechende {{HTMLElement("img")}}-Element unterstützen jetzt den `onerror`-Event-Handler und senden [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignisse an das Element, wann immer [Fehler auftreten beim Versuch, Bilder zu laden oder zu interpretieren](/de/docs/Web/API/HTMLImageElement#errors).
- Sie können nun den Effekt einer Web-[`Animation`](/de/docs/Web/API/Animation) ändern, indem Sie den Wert ihrer [`effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft setzen. Zuvor war diese Eigenschaft schreibgeschützt ([Firefox-Bug 1049975](https://bugzil.la/1049975)).
- Die Permissions API-Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) wurde hinter eine Präferenz (`dom.permissions.revoke.enable`) gesetzt und standardmäßig deaktiviert, da ihr Design und sogar ihre Existenz in der [Web Application Security Working Group](https://www.w3.org/2011/webappsec/) diskutiert werden.
- Die [`Navigator.storage`](/de/docs/Web/API/Navigator/storage)-Eigenschaft und die Methode [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate) der [Storage API](/de/docs/Web/API/Storage_API) wurden zusammen mit dem benötigten unterstützenden Code implementiert. Funktionen zur Persistenz von Speichereinheiten sind noch nicht implementiert. Siehe [Firefox-Bug 1267941](https://bugzil.la/1267941).
- Aus Datenschutzgründen werden sowohl [`BatteryManager.chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime) als auch [`BatteryManager.dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime) jetzt auf nächste 15 Minuten gerundet ([Firefox-Bug 1292655](https://bugzil.la/1292655)).

### Ereignisse

- Firefox unterstützt jetzt die [`onanimationstart`](/de/docs/Web/API/Element/animationstart_event), [`onanimationiteration`](/de/docs/Web/API/Element/animationiteration_event) und [`onanimationend`](/de/docs/Web/API/Element/animationend_event) Event-Handler, zusätzlich zur Unterstützung der entsprechenden Events mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ([Firefox-Bug 911987](https://bugzil.la/911987)).
- Firefox unterstützt jetzt den [`ontransitionend`](/de/docs/Web/API/Element/transitionend_event) Event-Handler ([Firefox-Bug 911987](https://bugzil.la/911987)).

### Sicherheit

- Wenn Login-Seiten (d. h., solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password)-Feld enthalten) erstellt werden, sodass sie unsicher übermittelt würden, zeigt Firefox ein durchgestrichenes Schlosssymbol in der Adressleiste an, um die Benutzer zu warnen ([Firefox-Bug 1319119](https://bugzil.la/1319119)). Siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords) für weitere Details.

### Entfernungen

- Die nicht-standardisierte [Simple Push API](/de/docs/Archive/Firefox_OS/API/Simple_Push_API), hauptsächlich für die Verwendung mit Firefox OS bestimmt und jetzt durch die [W3C Push API](/de/docs/Web/API/Push_API) ersetzt, wurde vollständig aus Gecko entfernt ([Firefox-Bug 1296579](https://bugzil.la/1296579)).
- Die nicht-standardisierte [Alarms API](/de/docs/Archive/Firefox_OS/API/Alarm_API), hauptsächlich für die Verwendung mit Firefox OS bestimmt, wurde vollständig aus Gecko entfernt ([Firefox-Bug 1300884](https://bugzil.la/1300884)).
- Unterstützung für Präfixe in der [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde entfernt ([Firefox-Bug 812701](https://bugzil.la/812701)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Neue APIs:

  - {{WebExtAPIRef("idle.queryState()")}} ([Firefox-Bug 1299846](https://bugzil.la/1299846))
  - {{WebExtAPIRef("idle.onStateChanged")}} ([Firefox-Bug 1299775](https://bugzil.la/1299775))
  - {{WebExtAPIRef("management.getSelf()")}} ([Firefox-Bug 1283116](https://bugzil.la/1283116))
  - {{WebExtAPIRef("management.uninstallSelf()")}} ([Firefox-Bug 1220136](https://bugzil.la/1220136))
  - {{WebExtAPIRef("runtime.getBrowserInfo()")}} ([Firefox-Bug 1268399](https://bugzil.la/1268399))
  - {{WebExtAPIRef("runtime.reload()")}} und {{WebExtAPIRef("runtime.onUpdateAvailable()")}} ([Firefox-Bug 1279012](https://bugzil.la/1279012))

- Sie können jetzt [eine WebExtension in einem Legacy-Add-on-Typ einbetten](/de/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions) ([Firefox-Bug 1252215](https://bugzil.la/1252215)).
- [Zwischenablage-Zugriff](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) wird jetzt unterstützt ([Firefox-Bug 1197451](https://bugzil.la/1197451))
- Die Argumente, die an den Callback von {{WebExtAPIRef("tabs.executeScript()")}} übergeben werden, wurden korrigiert ([Firefox-Bug 1290157](https://bugzil.la/1290157))
- [localStorage](/de/docs/Web/API/Window/localStorage) wird jetzt gelöscht, wenn eine WebExtension deinstalliert wird ([Firefox-Bug 1213990](https://bugzil.la/1213990))
- Ein geänderter {{HTTPHeader("Content-Type")}}-Header in Web Extensions wird jetzt berücksichtigt ([Firefox-Bug 1304331](https://bugzil.la/1304331))

### Sonstiges

- Die [`multiprocessCompatible`-Eigenschaft von `install.rdf`](/de/docs/Mozilla/Add-ons/Install_Manifests#multiprocesscompatible) muss jetzt explizit auf `false` gesetzt werden, um zu verhindern, dass Multiprozess in Firefox aktiviert wird, wenn das Add-on installiert ist.
- Die Mozilla-spezifische [Social API](/de/docs/Mozilla/Projects/Social_API) wurde erheblich verändert (hauptsächlich um APIs zu entfernen, die nicht mehr verwendet werden), wie folgt:

  - Die [`MozSocial`](/de/docs/Web/API/MozSocial)-Schnittstelle und die [`navigator.mozSocial`](/de/docs/Web/API/Navigator/mozSocial)-Eigenschaft, welche sie unterstützt, wurde entfernt.
  - Die [Social Bookmarks API](/de/docs/Mozilla/Projects/Social_API/Bookmarks) wurde entfernt.
  - Die Social-Chat-Funktionalität wurde entfernt.
  - Die Social-Status-API wurde entfernt.
  - Alle [Social-Widgets](/de/docs/Mozilla/Projects/Social_API/Widgets), außer dem Share-Panel, wurden entfernt. Dies umfasst die Social-Sidebar, Flyover-Panels und so weiter.
  - Alle unterstützenden Benutzeroberflächenmerkmale und Funktionalitäten für die entfernten APIs wurden ebenfalls entfernt.
  - [Social-Service-Provider-Manifest](/de/docs/Mozilla/Projects/Social_API/Manifest)-Eigenschaften, die die entfernte Funktionalität unterstützen, werden nicht mehr unterstützt.

- Wenn ein Add-on `mimeTypes.rdf` verwendet, um eine Zuordnung von Dateierweiterungen zu MIME-Typen bereitzustellen, muss es jetzt einen Eintrag in der Kategorie `"ext-to-type-mapping"` registrieren ([Firefox-Bug 306471](https://bugzil.la/306471)).
- Die [Browser-API](/de/docs/Mozilla/Gecko/Chrome/API/Browser_API) umfasst jetzt ein `detail`-Objekt auf dem Ereignisobjekt des [`mozbrowserlocationchange`](/de/docs/Web/Events/mozbrowserlocationchange)-Ereignisses, das `canGoForward`/`canGoBack`-Eigenschaften enthält, die es ermöglichen, den Vor- und Zurück-Status des mozBrowser synchron abzurufen ([Firefox-Bug 1279635](https://bugzil.la/1279635)).

## Ältere Versionen

{{Firefox_for_developers}}
