---
title: Firefox 51 für Entwickler
slug: Mozilla/Firefox/Releases/51
l10n:
  sourceCommit: 83266dac8d670b493141002c825f7fb8876dd29d
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 51 wurde am 24. Januar 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente können jetzt als Trennzeichen in {{HTMLElement("menu")}}-Elementen verwendet werden ([Firefox-Bug 870388](https://bugzil.la/870388)).
- Die `selectionStart` und `selectionEnd` Attribute der {{HTMLElement("input")}} und {{HTMLElement("textarea")}}-Elemente geben nun korrekt die aktuelle Position des Texteingabecursors zurück, wenn keine Auswahl vorhanden ist, anstatt 0 zurückzugeben ([Firefox-Bug 1287655](https://bugzil.la/1287655)).

### CSS

- {{cssxref(":indeterminate")}} für \<input type="radio"> implementiert ([Firefox-Bug 885359](https://bugzil.la/885359)).
- {{cssxref(":placeholder-shown")}} für `<input type="text">` implementiert ([Firefox-Bug 1069015](https://bugzil.la/1069015)).
- Das {{cssxref("::placeholder")}} Pseudoelement ist nun unpräfixiert ([Firefox-Bug 1069012](https://bugzil.la/1069012)).
- Die {{cssxref(":valid")}} CSS-Pseudoklasse, die keine gültigen {{HTMLElement("form")}}-Elemente erkannte, wurde korrigiert ([Firefox-Bug 1285425](https://bugzil.la/1285425)).
- Der `plaintext`-Wert von {{cssxref("unicode-bidi")}} funktioniert jetzt auch mit vertikalen Schreibrichtungen ([Firefox-Bug 1302734](https://bugzil.la/1302734)).
- Die `fill-box` und `stroke-box` Werte von {{cssxref("clip-path")}} werden jetzt richtig unterstützt; zuvor waren sie Aliase von `border-box` ([Firefox-Bug 1289011](https://bugzil.la/1289011)).
- Höhe der Flex-Linie klemmen (klemmen von gestreckten Flex-Elementen), in einzeiligen Auto-Höhen Flex-Containern mit max-height (Spezifikationsänderung) ([Firefox-Bug 1000957](https://bugzil.la/1000957)).

### JavaScript

- Die ES2015 {{jsxref("Symbol.toStringTag")}} Eigenschaft wurde implementiert ([Firefox-Bug 1114580](https://bugzil.la/1114580)).
- Die ES2015 {{jsxref("TypedArray.prototype.toString()")}} und {{jsxref("TypedArray.prototype.toLocaleString()")}} Methoden wurden implementiert ([Firefox-Bug 1121938](https://bugzil.la/1121938)).
- Die {{jsxref("Intl/DateTimeFormat/formatToParts", "DateTimeFormat.prototype.formatToParts()")}} Methode ist jetzt verfügbar ([Firefox-Bug 1289340](https://bugzil.la/1289340)).
- {{jsxref("Statements/const", "const")}} und {{jsxref("Statements/let", "let")}} sind nun vollständig ES2015-konform ([Firefox-Bug 950547](https://bugzil.la/950547)).
- Die Verwendung von {{jsxref("Statements/const", "const")}} in [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen hat jetzt für jede Iteration eine neue Bindung und wirft keinen {{jsxref("SyntaxError")}} mehr ([Firefox-Bug 1101653](https://bugzil.la/1101653)).
- Die veraltete [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Schleife zeigt nun eine Warnung in der Konsole an ([Firefox-Bug 1293205](https://bugzil.la/1293205)). Bitte migrieren Sie Ihren Code zur standardisierten [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife.
- [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können jetzt kein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) mehr haben und "`let`" als Labelname ist nun nicht mehr erlaubt ([Firefox-Bug 1288459](https://bugzil.la/1288459)).
- Veraltete [Legacy-Generator Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) werden jetzt beim Einsatz in [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) einen Fehler werfen ([Firefox-Bug 1199296](https://bugzil.la/1199296)).
- Die `next()` Methode des [Iterator Protokolls](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) wird nun eine {{jsxref("TypeError")}} werfen, wenn der zurückgegebene Wert kein Objekt ist ([Firefox-Bug 1016936](https://bugzil.la/1016936)).
- Kind-indizierte Pseudo-Klassen-Selektoren sollten ohne Elternelement matchen ([Firefox-Bug 1300374](https://bugzil.la/1300374)).

### Entwickler-Tools

- [Der Netzwerk-Monitor zeigt jetzt einen "Blocked"-Status für Netzwerk-Anfragen.](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timings)
- [Alle Developer-Tools-Bugs, die zwischen Firefox 50 und Firefox 51 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263768&resolution=FIXED&classification=Client%20Software&chfieldto=2016-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2016-08-01&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### WebGL

- [WebGL 2](/de/docs/Web/API/WebGL_API) ist jetzt standardmäßig aktiviert. Siehe [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) für einige Demos.

  - WebGL 2 stellt die [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Schnittstelle bereit, die OpenGL ES 3.0 auf das {{HTMLElement("canvas")}} Element bringt.
  - Neue Funktionen umfassen:

    - [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
    - [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
    - [Uniform Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
    - [Sync-Objekte](/de/docs/Web/API/WebGLSync),
    - [Query-Objekte](/de/docs/Web/API/WebGLQuery),
    - [Transform Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
    - Promovierte Erweiterungen, die jetzt Kern von WebGL 2 sind: [Vertex Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instanziierung](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [Mehrere Renderziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragmettiefe](/de/docs/Web/API/EXT_frag_depth).

- Die `WEBGL_compressed_texture_es3` Erweiterung (implementiert in Firefox 46) wurde in [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) umbenannt ([Firefox-Bug 1316778](https://bugzil.la/1316778)) und ist in WebGL 2-Kontexten nicht mehr standardmäßig enthalten ([Firefox-Bug 1306174](https://bugzil.la/1306174)).
- Die [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query) Erweiterung wurde aktualisiert, um [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekte anstelle von `WebGLTimerQuery` Objekten zu verwenden ([Firefox-Bug 1308057](https://bugzil.la/1308057)).
- Die [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object) Erweiterung verwendet jetzt das WebGL 2 [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) Objekt anstelle ihres eigenen `WebGLVertexArrayObjectOES` Objekts ([Firefox-Bug 1318523](https://bugzil.la/1318523)).
- Sie können nun [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) Objekte als Quellen für Texturbilder in Methoden wie [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D), [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D), [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D) oder [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D) verwenden ([Firefox-Bug 1324924](https://bugzil.la/1324924)).

### IndexedDB v2

- Die Implementierung von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Version 2 ist jetzt abgeschlossen:

  - Unterstützung für die neue Methode [`IDBObjectStore.getKey()`](/de/docs/Web/API/IDBObjectStore/getKey) wurde hinzugefügt ([Firefox-Bug 1271506](https://bugzil.la/1271506)).
  - Unterstützung für die Methode [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey) wurde hinzugefügt ([Firefox-Bug 1271505](https://bugzil.la/1271505)).
  - Binärschlüssel werden jetzt unterstützt ([Firefox-Bug 1271500](https://bugzil.la/1271500)).
  - Siehe auch ["Was ist neu in IndexedDB 2.0?" – Mozilla hacks](https://hacks.mozilla.org/2016/10/whats-new-in-indexeddb-2-0/)

### Canvas

- Die nicht standardisierte Methode `CanvasRenderingContext2D.mozFillRule()` wurde entfernt; die Füllregel kann über einen Parameter der standardisierten [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)-Methode definiert werden ([Firefox-Bug 826619](https://bugzil.la/826619)).
- Die [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) wurde unpräfixiert ([Firefox-Bug 768072](https://bugzil.la/768072)).

### SVG

- Das {{SVGAttr("tabindex")}}-Attribut wurde hinzugefügt ([Firefox-Bug 778654](https://bugzil.la/778654)).
- Das {{SVGAttr("href")}}-Attribut wurde hinzugefügt, wodurch {{SVGAttr("xlink:href")}} obsolet wird ([Firefox-Bug 1245751](https://bugzil.la/1245751)).
- Sie können jetzt benutzerdefinierte Datenattribute auf SVG-Elementen mit der [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft und der {{SVGAttr("data-*")}}-Attributgruppe von SVG-Attributen verwenden ([Firefox-Bug 921834](https://bugzil.la/921834)).
- CSS-Animationen, die in einem SVG-Bild verwendet werden, das in einem {{HTMLElement("img")}}-Element dargestellt wird, funktionieren jetzt wieder; dies war ein alter Regression ([Firefox-Bug 1190881](https://bugzil.la/1190881)).

### Web Workers

- Der nicht standardisierte und veraltete `onclose`-Ereignis-Handler und die Verwendung des `close`-Ereignisses durch [`Worker`](/de/docs/Web/API/Worker) wurden aus Firefox entfernt.

### Netzwerke

- Skripte, die mit einem `image/*`, `video/*`, `audio/*` oder `text/csv` MIME-Typ bereitgestellt werden, werden jetzt blockiert und nicht mehr geladen oder ausgeführt, wenn sie über {{HTMLElement("script")}} deklariert sind oder über [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts), [`Worker()`](/de/docs/Web/API/Worker/Worker), [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) geladen werden ([Firefox-Bug 1229267](https://bugzil.la/1229267) und [Firefox-Bug 1288361](https://bugzil.la/1288361)).
- Unterstützung für SHA-1-Zertifikate von öffentlich vertrauenswürdigen Zertifizierungsstellen wurde entfernt ([Firefox-Bug 1302140](https://bugzil.la/1302140)). Siehe auch [Phasing Out SHA-1 on the Public Web](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/) für weitere Informationen.
- Neue WoSign- und StartCom-Zertifikate werden nicht mehr akzeptiert ([Firefox-Bug 1309707](https://bugzil.la/1309707)). Siehe [Distrusting New WoSign and StartCom Certificates](https://blog.mozilla.org/security/2016/10/24/distrusting-new-wosign-and-startcom-certificates/) für weitere Informationen.
- Die [PAC](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) `FindProxyForURL(url, host)`-Funktion entfernt jetzt Pfade und Abfragen von https\://-URLs, um Informationsleckagen zu vermeiden (siehe [Firefox-Bug 1255474](https://bugzil.la/1255474) und [CVE-2017-5384](https://nvd.nist.gov/vuln/detail/CVE-2017-5384)).

### XHR

- Die [`XMLHttpRequest.responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Eigenschaft gibt nicht mehr ein teilweises [`Document`](/de/docs/Web/API/Document) mit einem \<parsererror>-Knoten an der Spitze zurück, wenn ein Analysefehler auftritt, während versucht wird, die empfangenen Daten zu interpretieren. Stattdessen gibt es korrekt `null` zurück ([Firefox-Bug 289714](https://bugzil.la/289714)).
- Um die neueste Spezifikation anzupassen, wird ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ohne ein durch [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetztes {{HTTPHeader("Accept")}}-Header jetzt mit einem solchen Header gesendet, dessen Wert auf `*/*` gesetzt ist ([Firefox-Bug 918752](https://bugzil.la/918752)).
- [`XMLHttpRequest.open()`](/de/docs/Web/API/XMLHttpRequest/open) wurde so korrigiert, dass die `username`- und `password`-Parameter nun standardmäßig auf `null` gesetzt werden, wenn sie weggelassen werden, gemäß der Spezifikation ([Firefox-Bug 933759](https://bugzil.la/933759)).

### WebRTC

- Die Methode [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) wurde entfernt. Sie war bereits seit Firefox 22 veraltet und hat schon lange einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) geworfen. Sie müssen stattdessen für jeden Track im Stream [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.
- WebRTC unterstützt jetzt standardmäßig den VP9-Codec. Als er in Firefox 46 hinzugefügt wurde, war VP9 standardmäßig deaktiviert, war jedoch, wenn aktiviert, der bevorzugte Codec; er wurde jedoch nun zur zweiten Wahl (nach VP8) verschoben, wegen seines derzeitigen CPU-Verbrauchs.
- Die Methode [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream), die einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Inhalt des angegebenen {{HTMLElement("video")}} oder {{HTMLElement("audio")}} zurückgibt. Es ist erwähnenswert, dass sie noch immer als `mozCaptureStream()` präfixiert ist und dass sie noch nicht genau der Spezifikation entspricht.

### Audio/Video

- Unterstützung für FLAC wurde hinzugefügt ([FLAC-Codec](https://xiph.org/flac/index.html)) in sowohl FLAC- als auch Ogg-Containern ([Firefox-Bug 1195723](https://bugzil.la/1195723)). Die unterstützten FLAC-MIME-Typen sind: `audio/flac` und `audio/x-flac`. Für FLAC in Ogg, die unterstützten MIME-Typen sind: `audio/ogg; codecs=flac` und `video/ogg; codecs=flac`.
- Unterstützung für FLAC in MP4 (sowohl mit als auch ohne MSE) wurde hinzugefügt ([Firefox-Bug 1303888](https://bugzil.la/1303888)).
- Die Drosselung von Timern in Hintergrund-Tabs, die durch [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval), [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) erstellt wurden, wurde in Firefox 50 geändert, sodass sie nicht mehr stattfinden, wenn eine [Web Audio API](/de/docs/Web/API/Web_Audio_API) [`AudioContext`](/de/docs/Web/API/AudioContext) aktiv Ton abspielt. Allerdings löste dies nicht alle Szenarien, in denen zeitkritische Audiowiedergabe (wie Musikspieler, die individuelle Noten mit Timern erzeugen) konnten immer noch fehlschlagen. Aus diesem Grund drosselt Firefox 51 nun Hintergrund-Tabs nicht mehr, die eine [`AudioContext`](/de/docs/Web/API/AudioContext) haben, selbst wenn sie gerade keinen Ton abspielt.

### DOM

- Die [`DOMImplementation.hasFeature()`](/de/docs/Web/API/DOMImplementation/hasFeature) gibt jetzt in allen Fällen `true` zurück ([Firefox-Bug 984778](https://bugzil.la/984778)).
- Die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) und [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Eigenschaften `selectionStart` und `selectionEnd` geben jetzt korrekt die aktuelle Position des Texteingabecursors zurück, wenn keine Auswahl vorhanden ist, anstatt 0 zurückzugeben ([Firefox-Bug 1287655](https://bugzil.la/1287655)).
- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle und das entsprechende {{HTMLElement("img")}}-Element unterstützen jetzt den `onerror`-Ereignis-Handler, der [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignisse an das Element sendet, wann immer [Fehler beim Laden oder Interpretieren von Bildern auftreten](/de/docs/Web/API/HTMLImageElement#errors).
- Sie können nun den Effekt einer Web-[`Animation`](/de/docs/Web/API/Animation) ändern, indem Sie den Wert ihrer [`effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft einstellen. Früher war diese Eigenschaft nur lesbar ([Firefox-Bug 1049975](https://bugzil.la/1049975)).
- Die Permissions API Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) wurde hinter eine Präferenz (`dom.permissions.revoke.enable`) gestellt und standardmäßig deaktiviert, da ihr Design und sogar ihre Existenz in der [Web Application Security Working Group](https://www.w3.org/2011/webappsec/) diskutiert werden.
- Die [Storage API](/de/docs/Web/API/Storage_API)'s [`Navigator.storage`](/de/docs/Web/API/Navigator/storage)-Eigenschaft und [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate)-Methode wurden implementiert, zusammen mit dem notwendigen unterstützenden Code. Speicherpersistenz-Funktionen sind noch nicht implementiert. Siehe [Firefox-Bug 1267941](https://bugzil.la/1267941).
- Aus Gründen der Privatsphäre runden sowohl [`BatteryManager.chargingTime`](/de/docs/Web/API/BatteryManager/chargingTime) als auch [`BatteryManager.dischargingTime`](/de/docs/Web/API/BatteryManager/dischargingTime) jetzt den zurückgegebenen Wert auf die nächste 15 Minuten ([Firefox-Bug 1292655](https://bugzil.la/1292655)).

### Ereignisse

- Firefox unterstützt jetzt die [`onanimationstart`](/de/docs/Web/API/Element/animationstart_event), [`onanimationiteration`](/de/docs/Web/API/Element/animationiteration_event) und [`onanimationend`](/de/docs/Web/API/Element/animationend_event) Ereignis-Handler, zusätzlich zur Unterstützung der entsprechenden Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ([Firefox-Bug 911987](https://bugzil.la/911987)).
- Firefox unterstützt jetzt den [`ontransitionend`](/de/docs/Web/API/Element/transitionend_event) Ereignis-Handler ([Firefox-Bug 911987](https://bugzil.la/911987)).

### Sicherheit

- Wenn Login-Seiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password)-Feld enthalten) so erstellt werden, dass sie unsicher übermittelt würden, zeigt Firefox ein durchgestrichenes Schloss-Symbol in der Adressleiste an, um die Benutzer zu warnen ([Firefox-Bug 1319119](https://bugzil.la/1319119)). Siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords) für weitere Details.

### Entfernungen

- Die nicht standardisierte Simple Push API, die hauptsächlich für die Verwendung mit Firefox OS vorgesehen war und jetzt durch die [W3C Push API](/de/docs/Web/API/Push_API) ersetzt wurde, wurde komplett aus Gecko entfernt ([Firefox-Bug 1296579](https://bugzil.la/1296579)).
- Die nicht standardisierte Alarms API, die hauptsächlich für die Verwendung mit Firefox OS vorgesehen war, wurde komplett aus Gecko entfernt ([Firefox-Bug 1300884](https://bugzil.la/1300884)).
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

- Sie können nun [eine WebExtension in einem Legacy-Add-on-Typ einbetten](/de/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions) ([Firefox-Bug 1252215](https://bugzil.la/1252215)).
- [Zwischenablagezugriff](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) wird jetzt unterstützt ([Firefox-Bug 1197451](https://bugzil.la/1197451))
- Die Argumente, die an den Rückruf von {{WebExtAPIRef("tabs.executeScript()")}} übergeben werden, wurden korrigiert ([Firefox-Bug 1290157](https://bugzil.la/1290157))
- [localStorage](/de/docs/Web/API/Window/localStorage) wird jetzt gelöscht, wenn eine WebExtension deinstalliert wird ([Firefox-Bug 1213990](https://bugzil.la/1213990))
- Ein geänderter {{HTTPHeader("Content-Type")}} Header in Web Extensions wird jetzt berücksichtigt ([Firefox-Bug 1304331](https://bugzil.la/1304331))

### Andere

- Die [`multiprocessCompatible`-Eigenschaft von `install.rdf`](/de/docs/Mozilla/Add-ons/Install_Manifests#multiprocesscompatible) muss jetzt ausdrücklich auf `false` gesetzt werden, um zu verhindern, dass Multiprozess aktiviert wird, wenn das Add-on installiert ist.
- Die Mozilla-spezifische Social API wurde erheblich verändert (weitgehend zur Entfernung von APIs, die nicht mehr verwendet werden), wie folgt:

  - Die `MozSocial` Schnittstelle und die `Navigator.mozSocial`-Eigenschaft, die sie unterstützt, wurden entfernt.
  - Die Social Bookmarks API wurde entfernt.
  - Die Social-Chat-Funktionalität wurde entfernt.
  - Die Social Status API wurde entfernt.
  - Alle Social Widgets, mit Ausnahme des Share-Panels, wurden entfernt. Dazu gehören die soziale Seitenleiste, Flyover-Panels und so weiter.
  - Alle unterstützenden Benutzeroberflächenfunktionen und -eigenschaften für die entfernten APIs wurden ebenfalls entfernt.
  - Social-Service-Provider-Manifest-Eigenschaften, die die entfernte Funktionalität unterstützen, werden nicht mehr unterstützt.

- Wenn ein Add-on `mimeTypes.rdf` verwendet, um eine Dateierweiterung-zu-MIME-Typ-Zuordnung bereitzustellen, muss es jetzt einen Eintrag in der `"ext-to-type-mapping"` Kategorie registrieren ([Firefox-Bug 306471](https://bugzil.la/306471)).
- Die [Browser API](/de/docs/Mozilla/Gecko/Chrome/API/Browser_API) enthält jetzt ein `detail`-Objekt in dem Ereignisobjekt des [`mozbrowserlocationchange`](/de/docs/Web/Events/mozbrowserlocationchange) Ereignisses, das `canGoForward`/`canGoBack` Eigenschaften enthält und den Rückwärts-/Vorwärtsstatus des mozBrowsers synchron abrufen lässt ([Firefox-Bug 1279635](https://bugzil.la/1279635)).

## Ältere Versionen

{{Firefox_for_developers}}
