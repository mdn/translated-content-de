---
title: Firefox 51 für Entwickler
slug: Mozilla/Firefox/Releases/51
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 51 wurde am 24. Januar 2017 veröffentlicht. In diesem Artikel sind wichtige Änderungen aufgeführt, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler von Nutzen sind.

## Änderungen für Webentwickler

### HTML

- {{HTMLElement("hr")}}-Elemente können jetzt als Trennzeichen in {{HTMLElement("menu")}}-Elementen verwendet werden ([Firefox Bug 870388](https://bugzil.la/870388)).
- Die `selectionStart`- und `selectionEnd`-Attribute der Elemente {{HTMLElement("input")}} und {{HTMLElement("textarea")}} geben jetzt korrekt die aktuelle Position des Texteinfügecursors zurück, wenn keine Auswahl getroffen wurde, anstatt 0 zurückzugeben ([Firefox Bug 1287655](https://bugzil.la/1287655)).

### CSS

- Implementiert {{cssxref(":indeterminate")}} für \<input type="radio"> ([Firefox Bug 885359](https://bugzil.la/885359)).
- Implementiert {{cssxref(":placeholder-shown")}} für `<input type="text">` ([Firefox Bug 1069015](https://bugzil.la/1069015)).
- Das {{cssxref("::placeholder")}} Pseudo-Element ist jetzt ohne Präfix ([Firefox Bug 1069012](https://bugzil.la/1069012)).
- Der {{cssxref(":valid")}} CSS-Pseudoklasse, die zuvor gültige {{HTMLElement("form")}}-Elemente nicht korrekt erkannte, wurde behoben ([Firefox Bug 1285425](https://bugzil.la/1285425)).
- Der `plaintext`-Wert von {{cssxref("unicode-bidi")}} funktioniert jetzt auch mit vertikalen Schreibmodi ([Firefox Bug 1302734](https://bugzil.la/1302734)).
- Die Werte `fill-box` und `stroke-box` von {{cssxref("clip-path")}} werden jetzt ordnungsgemäß unterstützt; zuvor waren sie Aliase von `border-box` ([Firefox Bug 1289011](https://bugzil.la/1289011)).
- Die Höhe der Flex-Linie in einzeiligen Auto-Höhen-Flex-Containern mit max-Höhe wird jetzt begrenzt (Klemmen gestreckter Flex-Elemente) (Spezifikationsänderung) ([Firefox Bug 1000957](https://bugzil.la/1000957)).

### JavaScript

- Die ES2015-Eigenschaft {{jsxref("Symbol.toStringTag")}} wurde implementiert ([Firefox Bug 1114580](https://bugzil.la/1114580)).
- Die ES2015-Methoden {{jsxref("TypedArray.prototype.toString()")}} und {{jsxref("TypedArray.prototype.toLocaleString()")}} wurden implementiert ([Firefox Bug 1121938](https://bugzil.la/1121938)).
- Die Methode {{jsxref("Intl/DateTimeFormat/formatToParts", "DateTimeFormat.prototype.formatToParts()")}} ist jetzt verfügbar ([Firefox Bug 1289340](https://bugzil.la/1289340)).
- {{jsxref("Statements/const", "const")}} und {{jsxref("Statements/let", "let")}} sind jetzt vollständig ES2015-konform ([Firefox Bug 950547](https://bugzil.la/950547)).
- Die Verwendung von {{jsxref("Statements/const", "const")}} in [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen hat jetzt für jede Iteration eine neue Bindung und löst keinen {{jsxref("SyntaxError")}} mehr aus ([Firefox Bug 1101653](https://bugzil.la/1101653)).
- Die veraltete [for each...in](/de/docs/Web/JavaScript/Reference/Statements/for_each...in)-Schleife zeigt jetzt eine [Warnmeldung in der Konsole](/de/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) an ([Firefox Bug 1293205](https://bugzil.la/1293205)). Bitte migrieren Sie Ihren Code zur Verwendung der standardisierten [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife.
- [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) können kein [Label](/de/docs/Web/JavaScript/Reference/Statements/label) mehr haben, und "`let`" als Label-Name ist jetzt verboten ([Firefox Bug 1288459](https://bugzil.la/1288459)).
- Veraltete [Legacy-Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) werfen jetzt Fehler, wenn sie in [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) verwendet werden ([Firefox Bug 1199296](https://bugzil.la/1199296)).
- Die Methode `next()` des [Iteratorprotokolls](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) wirft jetzt einen {{jsxref("TypeError")}}, wenn der zurückgegebene Wert kein Objekt ist ([Firefox Bug 1016936](https://bugzil.la/1016936)).
- Pseudoklasse-Selektoren mit Kind-Index sollten ohne übergeordnetes Element passen ([Firefox Bug 1300374](https://bugzil.la/1300374)).

### Entwicklerwerkzeuge

- [Netzwerkmonitor zeigt jetzt einen "Blockiert"-Status für Netzwerkanforderungen an.](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timings)
- [Alle zwischen Firefox 50 und Firefox 51 behobenen Devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263768&resolution=FIXED&classification=Client%20Software&chfieldto=2016-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2016-08-01&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### WebGL

- [WebGL 2](/de/docs/Web/API/WebGL_API) ist jetzt standardmäßig aktiviert. Siehe [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) für einige Demos.

  - WebGL 2 bietet das Interface {{domxref("WebGL2RenderingContext")}}, das OpenGL ES 3.0 auf das {{HTMLElement("canvas")}}-Element bringt.
  - Neue Funktionen umfassen:

    - [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
    - [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
    - [Uniform Pufferobjekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
    - [Sync-Objekte](/de/docs/Web/API/WebGLSync),
    - [Abfrageobjekte](/de/docs/Web/API/WebGLQuery),
    - [Transform-Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
    - Hochgestufte Erweiterungen, die nun Kernbestandteil von WebGL 2 sind: [Vertex Array Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [Mehrfache Renderziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragmenttiefe](/de/docs/Web/API/EXT_frag_depth).

- Die Erweiterung `WEBGL_compressed_texture_es3` (implementiert in Firefox 46) wurde in {{domxref("WEBGL_compressed_texture_etc")}} umbenannt ([Firefox Bug 1316778](https://bugzil.la/1316778)) und ist standardmäßig in WebGL 2-Kontexten nicht mehr enthalten ([Firefox Bug 1306174](https://bugzil.la/1306174)).
- Die Erweiterung {{domxref("EXT_disjoint_timer_query")}} wurde aktualisiert, um {{domxref("WebGLQuery")}}-Objekte anstelle von `WebGLTimerQuery`-Objekten zu verwenden ([Firefox Bug 1308057](https://bugzil.la/1308057)).
- Die Erweiterung {{domxref("OES_vertex_array_object")}} verwendet jetzt das WebGL 2 {{domxref("WebGLVertexArrayObject")}}-Objekt anstelle ihres eigenen `WebGLVertexArrayObjectOES`-Objekts ([Firefox Bug 1318523](https://bugzil.la/1318523)).
- Sie können jetzt {{domxref("ImageBitmap")}}-Objekte als Quellen für Texturbilder in Methoden wie {{domxref("WebGLRenderingContext.texImage2D()")}}, {{domxref("WebGLRenderingContext.texSubImage2D()")}}, {{domxref("WebGL2RenderingContext.texImage3D()")}} oder {{domxref("WebGL2RenderingContext.texSubImage3D()")}} verwenden ([Firefox Bug 1324924](https://bugzil.la/1324924)).

### IndexedDB v2

- Die Implementierung von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Version 2 ist jetzt abgeschlossen:

  - Unterstützung für die neue Methode {{domxref("IDBObjectStore.getKey()")}} wurde hinzugefügt ([Firefox Bug 1271506](https://bugzil.la/1271506)).
  - Unterstützung für die Methode {{domxref("IDBCursor.continuePrimaryKey()")}} wurde hinzugefügt ([Firefox Bug 1271505](https://bugzil.la/1271505)).
  - Binäre Schlüssel werden jetzt unterstützt ([Firefox Bug 1271500](https://bugzil.la/1271500)).
  - Siehe auch ["What's new in IndexedDB 2.0?" – Mozilla hacks](https://hacks.mozilla.org/2016/10/whats-new-in-indexeddb-2-0/)

### Canvas

- Die nicht-standardisierte Methode `CanvasRenderingContext2D.mozFillRule()` wurde entfernt; die Füllregel kann mit einem Parameter der standardisierten Methode {{domxref("CanvasRenderingContext2D.fill()")}} definiert werden ([Firefox Bug 826619](https://bugzil.la/826619)).
- Die {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} wurde ohne Präfix ([Firefox Bug 768072](https://bugzil.la/768072)).

### SVG

- Das {{SVGAttr("tabindex")}}-Attribut wurde hinzugefügt ([Firefox Bug 778654](https://bugzil.la/778654)).
- Das {{SVGAttr("href")}}-Attribut wurde hinzugefügt, wodurch {{SVGAttr("xlink:href")}} obsolet wird ([Firefox Bug 1245751](https://bugzil.la/1245751)).
- Sie können jetzt benutzerdefinierte Datenattribute an SVG-Elementen über die {{domxref("HTMLElement.dataset")}}-Eigenschaft und die {{SVGAttr("data-*")}} Menge von SVG-Attributen verwenden ([Firefox Bug 921834](https://bugzil.la/921834)).
- CSS-Animationen, die in einem SVG-Bild verwendet werden, das in einem {{HTMLElement("img")}}-Element präsentiert wird, funktionieren jetzt wieder; dies war ein alter Regressionsfehler ([Firefox Bug 1190881](https://bugzil.la/1190881)).

### Web Workers

- Der nicht-standardisierte und veraltete {{domxref("DedicatedWorkerGlobalScope.close")}}-Ereignishandler und die Verwendung des `close`-Ereignisses in {{domxref("Worker")}} wurden aus Firefox entfernt.

### Netzwerk

- Skripte, die mit einem `image/*`, `video/*`, `audio/*` oder `text/csv` MIME-Typ bereitgestellt werden, werden nun blockiert und nicht geladen oder ausgeführt, wenn sie mithilfe von {{HTMLElement("script")}} deklariert oder über {{domxref("Worker.importScripts()")}}, {{domxref("Worker.Worker","Worker()")}}, {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} geladen werden ([Firefox Bug 1229267](https://bugzil.la/1229267) und [Firefox Bug 1288361](https://bugzil.la/1288361)).
- Die Unterstützung für SHA-1-Zertifikate von öffentlich anerkannten Zertifizierungsstellen wurde entfernt ([Firefox Bug 1302140](https://bugzil.la/1302140)). Siehe auch [Phasing Out SHA-1 on the Public Web](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/) für weitere Informationen.
- Neue WoSign- und StartCom-Zertifikate werden nicht mehr akzeptiert ([Firefox Bug 1309707](https://bugzil.la/1309707)), siehe [Distrusting New WoSign and StartCom Certificates](https://blog.mozilla.org/security/2016/10/24/distrusting-new-wosign-and-startcom-certificates/) für weitere Informationen.
- Die Funktion `FindProxyForURL(url, host)` in der [PAC](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>)-Datei entfernt jetzt Pfade und Abfragen von https\:// URLs, um Informationslecks zu vermeiden (siehe [Firefox Bug 1255474](https://bugzil.la/1255474) und [CVE-2017-5384](https://nvd.nist.gov/vuln/detail/CVE-2017-5384)).

### XHR

- Die Eigenschaft {{domxref("XMLHttpRequest.responseXML")}} gibt nicht mehr ein unvollständiges {{domxref("Document")}} mit einem \<parsererror>-Knoten an der Spitze zurück, wenn ein Parser-Fehler beim Interpretieren der empfangenen Daten auftritt. Stattdessen gibt sie korrekt `null` zurück ([Firefox Bug 289714](https://bugzil.la/289714)).
- Um der neuesten Spezifikation zu entsprechen, wird eine {{domxref("XMLHttpRequest")}} ohne ein gesetztes {{HTTPHeader("Accept")}}-Header mit {{domxref("XMLHttpRequest.setRequestHeader()", "setRequestHeader()")}} jetzt mit einem solchen Header gesendet, dessen Wert auf `*/*` gesetzt ist ([Firefox Bug 918752](https://bugzil.la/918752)).
- {{domxref("XMLHttpRequest.open()")}} wurde so korrigiert, dass, wenn weggelassen, die Parameter `username` und `password` jetzt standardmäßig `null` sind, wie in der Spezifikation beschrieben ([Firefox Bug 933759](https://bugzil.la/933759)).

### WebRTC

- Die Methode {{domxref("RTCPeerConnection.removeStream()")}} wurde entfernt. Sie wurde bereits in Firefox 22 veraltet und hat seit langem einen `NotSupportedError`-{{domxref("DOMException")}} geworfen. Sie müssen stattdessen {{domxref("RTCPeerConnection.removeTrack()")}} verwenden, für jeden Track im Stream.
- WebRTC unterstützt jetzt standardmäßig den VP9-Codec. Als er in Firefox 46 hinzugefügt wurde, war VP9 standardmäßig deaktiviert, wurde aber als bevorzugter Codec verwendet, wenn aktiviert; aufgrund seines aktuellen CPU-Nutzungsgrades wurde er jedoch zur zweiten Wahl (nach VP8) gemacht.
- Die Methode {{domxref("HTMLMediaElement.captureStream()")}}, die einen {{domxref("MediaStream")}} zurückgibt, der den Inhalt des angegebenen {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elements enthält. Es ist erwähnenswert, dass dies immer noch als `mozCaptureStream()` präfixiert ist und nicht genau der Spezifikation entspricht.

### Audio/Video

- Unterstützung für FLAC hinzugefügt ([FLAC-Codec](https://xiph.org/flac/index.html)) sowohl in FLAC- als auch in Ogg-Containern ([Firefox Bug 1195723](https://bugzil.la/1195723)). Unterstützte FLAC-MIME-Typen sind: `audio/flac` und `audio/x-flac`. Für FLAC in Ogg werden die MIME-Typen `audio/ogg; codecs=flac` und `video/ogg; codecs=flac` unterstützt.
- Unterstützung für FLAC in MP4 (sowohl mit als auch ohne MSE) hinzugefügt ([Firefox Bug 1303888](https://bugzil.la/1303888)).
- Drosselung in Hintergrund-Tabs von Timern, die mit {{domxref("setInterval()")}} und {{domxref("setTimeout()")}} erstellt wurden, wurde in Firefox 50 so geändert, dass sie nicht mehr auftritt, wenn ein [Web Audio API](/de/docs/Web/API/Web_Audio_API) {{domxref("AudioContext")}} aktiv Ton abspielt. Dies löste jedoch nicht alle Szenarien, in denen timing-sensitives Audiowiedergabe (wie Musik-Player, die einzelne Noten mithilfe von Timern erzeugen) ordnungsgemäß funktionieren konnte. Aus diesem Grund drosselt Firefox 51 keine Hintergrund-Tabs mehr, die ein {{domxref("AudioContext")}} haben, selbst wenn es derzeit keinen Ton abspielt.

### DOM

- {{domxref("DOMImplementation.hasFeature()")}} gibt jetzt in allen Fällen `true` zurück ([Firefox Bug 984778](https://bugzil.la/984778)).
- Die Eigenschaften `selectionStart` und `selectionEnd` von {{domxref("HTMLInputElement")}} und {{domxref("HTMLTextAreaElement")}} geben jetzt korrekt die aktuelle Position des Texteinfügecursors zurück, wenn keine Auswahl getroffen wurde, anstatt 0 zurückzugeben ([Firefox Bug 1287655](https://bugzil.la/1287655)).
- Die Schnittstelle {{domxref("HTMLImageElement")}} und das entsprechende {{HTMLElement("img")}}-Element unterstützen jetzt den event handler `onerror` und senden {{domxref("HTMLElement/error_event", "error")}}-Ereignisse an das Element, wann immer [Fehler beim Laden oder Interpretieren von Bildern auftreten](/de/docs/Web/API/HTMLImageElement#errors).
- Sie können jetzt die Wirkung einer Web-{{domxref("Animation")}} ändern, indem Sie den Wert ihrer {{domxref("Animation.effect", "effect")}}-Eigenschaft festlegen. Bisher war diese Eigenschaft schreibgeschützt ([Firefox Bug 1049975](https://bugzil.la/1049975)).
- Die Berechtigungen API Methode {{domxref("Permissions.revoke()")}} wurde hinter eine Präferenz `dom.permissions.revoke.enable` gesetzt und standardmäßig deaktiviert, da ihr Design und selbst ihre Existenz in der [Web Application Security Working Group](https://www.w3.org/2011/webappsec/) diskutiert wird.
- Die {{domxref("Navigator.storage")}}-Eigenschaft und die Methode {{domxref("StorageManager.estimate()")}} der [Storage API](/de/docs/Web/API/Storage_API) wurden zusammen mit dem erforderlichen Unterstützungscode implementiert. Funktionen zur Persistenz von Speichereinheiten sind noch nicht implementiert. Siehe [Firefox Bug 1267941](https://bugzil.la/1267941).
- Aus Datenschutzgründen werden sowohl {{domxref("BatteryManager.chargingTime")}} als auch {{domxref("BatteryManager.dischargingTime")}} jetzt auf die nächsten 15 Minuten gerundet ([Firefox Bug 1292655](https://bugzil.la/1292655)).

### Ereignisse

- Firefox unterstützt jetzt die Event-Handler {{domxref("Element.onanimationstart", "onanimationstart")}}, {{domxref("Element.onanimationiteration", "onanimationiteration")}}, und {{domxref("Element.onanimationstart", "onanimationstart")}}, zusätzlich zur Unterstützung der entsprechenden Events mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} ([Firefox Bug 911987](https://bugzil.la/911987)).
- Firefox unterstützt jetzt den Event-Handler {{domxref("Element.transitionend_event", "ontransitionend")}} ([Firefox Bug 911987](https://bugzil.la/911987)).

### Sicherheit

- Wenn Login-Seiten (d. h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password)-Feld enthalten) so erstellt werden, dass sie unsicher übermittelt würden, zeigt Firefox ein durchgestrichenes Schloss-Symbol in der Adressleiste an, um die Nutzer zu warnen ([Firefox Bug 1319119](https://bugzil.la/1319119)). Siehe [Insecure passwords](/de/docs/Web/Security/Insecure_passwords) für weitere Details.

### Entfernungen

- Die nicht standardisierte [Simple Push API](/de/docs/Archive/Firefox_OS/API/Simple_Push_API), die hauptsächlich für die Verwendung mit Firefox OS vorgesehen war und jetzt durch die [W3C Push API](/de/docs/Web/API/Push_API) ersetzt wurde, wurde vollständig aus Gecko entfernt ([Firefox Bug 1296579](https://bugzil.la/1296579)).
- Die nicht standardisierte [Alarms API](/de/docs/Archive/Firefox_OS/API/Alarm_API), hauptsächlich zur Verwendung mit Firefox OS vorgesehen, wurde vollständig aus Gecko entfernt ([Firefox Bug 1300884](https://bugzil.la/1300884)).
- Die Unterstützung für Präfixe in der [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde entfernt ([Firefox Bug 812701](https://bugzil.la/812701)).

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

- Neue APIs:

  - {{WebExtAPIRef("idle.queryState()")}} ([Firefox Bug 1299846](https://bugzil.la/1299846))
  - {{WebExtAPIRef("idle.onStateChanged")}} ([Firefox Bug 1299775](https://bugzil.la/1299775))
  - {{WebExtAPIRef("management.getSelf()")}} ([Firefox Bug 1283116](https://bugzil.la/1283116))
  - {{WebExtAPIRef("management.uninstallSelf()")}} ([Firefox Bug 1220136](https://bugzil.la/1220136))
  - {{WebExtAPIRef("runtime.getBrowserInfo()")}} ([Firefox Bug 1268399](https://bugzil.la/1268399))
  - {{WebExtAPIRef("runtime.reload()")}} und {{WebExtAPIRef("runtime.onUpdateAvailable()")}} ([Firefox Bug 1279012](https://bugzil.la/1279012))

- Sie können jetzt [eine Web-Erweiterung in einem Legacy-Add-On-Typ einbetten](/de/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions) ([Firefox Bug 1252215](https://bugzil.la/1252215)).
- [Zwischenablagezugriff](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) wird jetzt unterstützt ([Firefox Bug 1197451](https://bugzil.la/1197451))
- Die Argumente, die an den Callback von {{WebExtAPIRef("tabs.executeScript()")}} übergeben werden, wurden korrigiert ([Firefox Bug 1290157](https://bugzil.la/1290157))
- [localStorage](/de/docs/Web/API/Window/localStorage) wird jetzt gelöscht, wenn eine Web-Erweiterung deinstalliert wird ([Firefox Bug 1213990](https://bugzil.la/1213990))
- Ein geänderter {{HTTPHeader("Content-Type")}} Header in Web-Erweiterungen wird jetzt berücksichtigt ([Firefox Bug 1304331](https://bugzil.la/1304331))

### Andere

- Die [`multiprocessCompatible`-Eigenschaft von `install.rdf`](/de/docs/Mozilla/Add-ons/Install_Manifests#multiprocesscompatible) muss jetzt explizit auf `false` gesetzt werden, um zu verhindern, dass der Multiprozessbetrieb in Firefox aktiviert wird, wenn das Add-on installiert wird.
- Die Mozilla-spezifische [Social API](/de/docs/Mozilla/Projects/Social_API) wurde erheblich geändert (größtenteils durch Entfernen von APIs, die nicht mehr verwendet werden), wie folgt:

  - Die Schnittstelle {{domxref("MozSocial")}} und die sie unterstützende Eigenschaft {{domxref("navigator.mozSocial")}} wurden entfernt.
  - Die [Social Bookmarks API](/de/docs/Mozilla/Projects/Social_API/Bookmarks) wurde entfernt.
  - Die Social-Chat-Funktionalität wurde entfernt.
  - Die Social Status API wurde entfernt.
  - Alle [sozialen Widgets](/de/docs/Mozilla/Projects/Social_API/Widgets), außer dem Share-Panel, wurden entfernt. Dazu gehören die soziale Seitenleiste, Flyover-Panels und ähnliche.
  - Alle unterstützenden Benutzeroberflächenfunktionen und Funktionalitäten für die entfernten APIs wurden ebenfalls entfernt.
  - [Social Service Provider Manifest](/de/docs/Mozilla/Projects/Social_API/Manifest)-Eigenschaften, die die entfernte Funktionalität unterstützen, werden nicht mehr unterstützt.

- Wenn ein Add-on `mimeTypes.rdf` verwendet, um eine Dateierweiterung-zu-MIME-Typ-Zuordnung bereitzustellen, muss es jetzt einen Eintrag in der Kategorie `"ext-to-type-mapping"` registrieren ([Firefox Bug 306471](https://bugzil.la/306471)).
- Die [Browser API](/de/docs/Mozilla/Gecko/Chrome/API/Browser_API) enthält jetzt ein `Detail`-Objekt im Event-Objekt des [`mozbrowserlocationchange`](/de/docs/Web/Events/mozbrowserlocationchange)-Events, das die Eigenschaften `canGoForward`/`canGoBack` enthält, um den Back/Forward-Status des mozBrowsers synchron abzurufen ([Firefox Bug 1279635](https://bugzil.la/1279635)).

## Ältere Versionen

{{Firefox_for_developers}}
