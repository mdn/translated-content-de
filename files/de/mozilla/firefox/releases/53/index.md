---
title: "Firefox 53: Versionshinweise für Entwickler"
short-title: Firefox 53
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: bce3c7c8ee532a9f4026ace7be8ac20deb71834a
---

Firefox 53 wurde am 19. April 2017 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Scroll-Verzögerungen bei von APZ bereitgestellten Hervorhebungen wurden vermieden ([Firefox-Bug 1312103](https://bugzil.la/1312103)).
- Eine Option zum [Kopieren des vollständigen CSS-Pfads](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) eines Elements wurde hinzugefügt ([Firefox-Bug 1323700](https://bugzil.la/1323700)).
- DevTools unterstützen jetzt css-color-4 ([Firefox-Bug 1310681](https://bugzil.la/1310681)).
- Markup-Ansicht: Zwischen dem öffnenden und dem schließenden Tag eines eingeklappten Knotens wurde ein visueller Hinweis hinzugefügt ([Firefox-Bug 1323193](https://bugzil.la/1323193)).

### CSS

#### Neue Funktionen

- Die einzelnen `mask-*`-Eigenschaften (siehe [CSS-Masken](/de/docs/Web/CSS/Guides/Masking)) werden alle unterstützt und sind standardmäßig verfügbar (siehe [Firefox-Bug 1251161](https://bugzil.la/1251161)).
- Die Eigenschaft {{cssxref("caret-color")}} wurde hinzugefügt ([Firefox-Bug 1063162](https://bugzil.la/1063162)).
- Die Kurzschreibweisen {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} wurden implementiert ([Firefox-Bug 1319958](https://bugzil.la/1319958)).
- Der Wert `flow-root` wurde für die Eigenschaft {{cssxref("display")}} hinzugefügt ([Firefox-Bug 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} akzeptiert jetzt {{cssxref("&lt;length&gt;")}}-Werte ([Firefox-Bug 943918](https://bugzil.la/943918)) und kann jetzt animiert werden ([Firefox-Bug 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}: `luminance` funktioniert nicht bei Verlaufsmasken ([Firefox-Bug 1346265](https://bugzil.la/1346265)).
- \[css-grid] Die FR-Einheit in {{cssxref("grid-template-rows")}} füllt den Viewport nicht aus ([Firefox-Bug 1346699](https://bugzil.la/1346699)).
- Flex-Items werden nicht entsprechend `order` sortiert, wenn ein absolut positioniertes Geschwisterelement zwischen ihnen liegt ([Firefox-Bug 1345873](https://bugzil.la/1345873)).

#### Weitere Änderungen

- Die einzelnen Maskeneigenschaften wurden für SVG-Elemente aktiviert ([Firefox-Bug 1319667](https://bugzil.la/1319667)).
- \[css-grid] Behoben: `align-self`/`justify-self:stretch`/`normal` funktioniert nicht bei `<table>`-Grid-Items ([Firefox-Bug 1316051](https://bugzil.la/1316051)).
- Behoben: `clip-path: circle()` wird bei einer großen Referenzbox und einem prozentualen Radius nicht korrekt gerendert ([Firefox-Bug 1324713](https://bugzil.la/1324713)).
- Wenn der Wert `uppercase` von {{cssxref("text-transform")}} auf griechischen Text angewendet wird, bleibt der Akzent auf dem disjunktiven Eta (ή) jetzt erhalten (siehe [Firefox-Bug 1322989](https://bugzil.la/1322989)).
- Die Verfügbarkeit des Werts `contents` für {{cssxref("display")}} wurde über die Einstellung `layout.css.display-contents.enabled` gesteuert. In Firefox 53 wurde diese Einstellung vollständig entfernt. Der Wert ist daher immer verfügbar und kann nicht mehr deaktiviert werden ([Firefox-Bug 1295788](https://bugzil.la/1295788)).

### JavaScript

- Die ECMAScript-2015-Semantik für die Eigenschaften {{jsxref("Function.name")}} wurde implementiert. Dazu gehören abgeleitete Namen für anonyme Funktionen (`var foo = function() {}`) ([Firefox-Bug 883377](https://bugzil.la/883377)).
- Die ECMAScript-2015-Semantik für das Schließen von Iteratoren wurde implementiert. Dies betrifft beispielsweise die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife ([Firefox-Bug 1147371](https://bugzil.la/1147371)).
- Der [Vorschlag zur Überarbeitung von Template-Literalen](https://tc39.es/proposal-template-literal-revision/), der [Beschränkungen für Escape-Sequenzen in Tagged Template Literals aufhebt](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences), wurde implementiert ([Firefox-Bug 1317375](https://bugzil.la/1317375)).
- Die statische Eigenschaft `length` von {{jsxref("TypedArray")}}-Objekten wurde gemäß ES2016 von 3 auf 0 geändert ([Firefox-Bug 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} kann jetzt in {{jsxref("DataView")}}-Objekten verwendet werden ([Firefox-Bug 1246597](https://bugzil.la/1246597)).
- In früheren Versionen der Spezifikation mussten {{jsxref("SharedArrayBuffer")}}-Objekte beim [strukturierten Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) ausdrücklich übertragen werden. In der neuen Spezifikation sind sie keine [übertragbaren Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) mehr und dürfen daher nicht in der Übertragungsliste stehen. Das neue Verhalten führte bisher lediglich zu einer Warnung in der Konsole, löst jetzt aber einen Fehler aus ([Firefox-Bug 1302037](https://bugzil.la/1302037)).
- Die Länge von {{jsxref("ArrayBuffer")}} ist jetzt auf {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) begrenzt ([Firefox-Bug 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} und die Prototypen anderer nativer Fehlerobjekte wie {{jsxref("RangeError")}} sind jetzt gewöhnliche Objekte statt tatsächlicher Error-Objekte. (Insbesondere ergibt `Object.prototype.toString.call(Error.prototype)` jetzt `"[object Object]"` statt `"[object Error]"`.) ([Firefox-Bug 1213341](https://bugzil.la/1213341)).

### Events

- CSS-Transitions: Die Events [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) und [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) wurden implementiert (siehe [Firefox-Bug 1264125](https://bugzil.la/1264125) und [Firefox-Bug 1287983](https://bugzil.la/1287983)).
- Der Konstruktor [`CompositionEvent`](/de/docs/Web/API/CompositionEvent/CompositionEvent) wurde implementiert (siehe [Firefox-Bug 1002256](https://bugzil.la/1002256)).
- Die Aliase [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) und [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) für [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX) beziehungsweise [`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) wurden implementiert (siehe [Firefox-Bug 424390](https://bugzil.la/424390)).
- Das Event [`auxclick`](/de/docs/Web/API/Element/auxclick_event) und der zugehörige Event-Handler wurden implementiert (siehe [Firefox-Bug 1304044](https://bugzil.la/1304044)).
- Das Event [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) wird jetzt ausgelöst, nachdem eine [Transition](/de/docs/Web/CSS/Guides/Transitions) abgebrochen wurde.

### DOM

- Die Eigenschaften [`pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname) und [`search`](/de/docs/Web/API/HTMLAnchorElement/search) von Links (etwa in den Interfaces der Elemente {{HTMLElement("a")}} und {{HTMLELement("link")}}) gaben zuvor die falschen Teile der URL zurück. Für die URL `http://z.com/x?a=true&b=false` gab `pathname` beispielsweise `"/x?a=true&b=false"` und `search` den Wert `""` zurück, statt `"/x"` beziehungsweise `"?a=true&b=false"`. Dies wurde behoben ([Firefox-Bug 1310483](https://bugzil.la/1310483)).
- Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert jetzt einen String oder eine Folge von Strings als Initialisierungsobjekt ([Firefox-Bug 1330678](https://bugzil.la/1330678)).
- Die Methode [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert (siehe [Firefox-Bug 1321623](https://bugzil.la/1321623)).
- Der Zusatz [„fakepath“](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) zu den `values` von {{htmlelement("input")}}-Elementen des Typs `file` wurde in Gecko implementiert. Das Verhalten entspricht damit dem anderer Browser (siehe [Firefox-Bug 1274596](https://bugzil.la/1274596)).
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) wurde implementiert und ersetzt die veraltete Eigenschaft `Node.rootNode` ([Firefox-Bug 1269155](https://bugzil.la/1269155)).
- Eigene Eigenschaften von [`Plugin`](/de/docs/Web/API/Plugin)- und [`PluginArray`](/de/docs/Web/API/PluginArray)-Objekten sind nicht mehr aufzählbar ([Firefox-Bug 1270366](https://bugzil.la/1270366)).
- Benannte Eigenschaften von [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)-Objekten sind nicht mehr aufzählbar ([Firefox-Bug 1270364](https://bugzil.la/1270364)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) steht jetzt der neue Berechtigungsname `persistent-storage` für Abfragen mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) zur Verfügung (siehe [Firefox-Bug 1270038](https://bugzil.la/1270038)). Damit kann ein Origin gemäß der [Storage API](https://storage.spec.whatwg.org/) einen persistenten Speicherbereich (also [persistenten Speicher](https://storage.spec.whatwg.org/#persistence)) verwenden.
- Die Eigenschaft [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) wurde implementiert ([Firefox-Bug 1313420](https://bugzil.la/1313420)).

### Worker und Service Worker

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) ist jetzt in Workern verfügbar (siehe [Firefox-Bug 1323172](https://bugzil.la/1323172)).
- [Server-sent Events](/de/docs/Web/API/Server-sent_events) können jetzt in Workern verwendet werden (siehe [Firefox-Bug 1267903](https://bugzil.la/1267903)).
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) kann jetzt asynchron aufgerufen werden (siehe [Firefox-Bug 1263304](https://bugzil.la/1263304)).

### WebGL

- Die WebGL-Erweiterung [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) wurde implementiert ([Firefox-Bug 1250077](https://bugzil.la/1250077)).
- Die WebGL-Erweiterung [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1336645](https://bugzil.la/1336645)).

### Audio, Video und Medien

#### Allgemein

- Ab **Firefox 53 für Android** erfolgt die Dekodierung von Medien in einem separaten Prozess, um die Leistung auf Mehrkernsystemen zu verbessern ([Firefox-Bug 1333323](https://bugzil.la/1333323)).

#### Medienelemente

- Die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), mit der die Wiedergabe von Medien in einem Medienelement gestartet wird, gibt jetzt eine {{jsxref("Promise")}} zurück. Sie wird erfüllt, sobald die Wiedergabe beginnt, und bei einem Fehler zurückgewiesen ([Firefox-Bug 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Das Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) wurde hinzugefügt. Die Interfaces [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) basieren jetzt darauf ([Firefox-Bug 1324568](https://bugzil.la/1324568)).
- Für alle verschiedenen Typen von Audio-Nodes wurden Konstruktoren hinzugefügt ([Firefox-Bug 1322883](https://bugzil.la/1322883)).

#### WebRTC

- Die Methoden [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) und [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geben jetzt eine {{jsxref("Promise")}} zurück, die ein dem Dictionary `RTCSessionDescriptionInit` entsprechendes Objekt liefert, statt direkt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurückzugeben. Bestehender Code funktioniert weiterhin; neuer Code lässt sich jedoch einfacher schreiben.
- Ebenso akzeptieren die Methoden [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) jetzt ein Objekt als Eingabe, das dem Dictionary `RTCSessionDescriptionInit` entspricht. Bestehender Code funktioniert weiterhin, kann aber vereinfacht werden.
- [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) akzeptiert jetzt ein Initialisierungsobjekt als Eingabe. Dies ist mit bestehendem Code kompatibel, ermöglicht aber zusammen mit den oben genannten Änderungen etwas einfacheren neuen Code ([Firefox-Bug 1263312](https://bugzil.la/1263312)).
- Die Unterstützung für {{Glossary("DTMF", "DTMF")}} über [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) ist jetzt standardmäßig aktiviert. Weitere Informationen zur Funktionsweise finden Sie unter [DTMF mit WebRTC verwenden](/de/docs/Web/API/WebRTC_API/Using_DTMF).

### HTTP/Netzwerk

- In Gecko steht jetzt eine Einstellung in `about:config` zur Verfügung, mit der Benutzer ihre standardmäßige {{HTTPHeader("Referrer-Policy")}} festlegen können: `network.http.referer.userControlPolicy` ([Firefox-Bug 1304623](https://bugzil.la/1304623)). Mögliche Werte sind:
  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (Standardwert)

- Die Unterstützung für Next Protocol Negotiation (NPN) wurde zugunsten von [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) entfernt – siehe [Firefox-Bug 1248198](https://bugzil.la/1248198).
- Der HTTP-Header `Large-Allocation` ist jetzt standardmäßig verfügbar und nicht mehr durch eine Einstellung deaktiviert ([Firefox-Bug 1331083](https://bugzil.la/1331083)).

### SVG

- Das Interface [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) wurde teilweise implementiert ([Firefox-Bug 1239100](https://bugzil.la/1239100)).

## Entfernungen von der Webplattform

### HTML/XML

- Die Einstellung `dom.details_element.enabled`, mit der sich die Unterstützung für die Elemente {{htmlelement("details")}} und {{htmlelement("summary")}} in Firefox aktivieren oder deaktivieren ließ, wurde aus `about:config` entfernt. Diese Elemente, die erstmals in Firefox 49 standardmäßig aktiviert wurden, können nicht mehr deaktiviert werden. Siehe [Firefox-Bug 1271549](https://bugzil.la/1271549).
- Das Attribut `mozapp` des Elements {{htmlelement("iframe")}} beziehungsweise des Interfaces [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) wurde entfernt. Es diente dazu, eine Firefox-OS-App in ein `<iframe>` der mit einem Mozilla-Präfix versehenen Browser API einzubetten ([Firefox-Bug 1310845](https://bugzil.la/1310845)).
- Die Methode `HTMLIFrameElement.setInputMethodActive()` und das Interface `InputMethod`, die zum Festlegen und Verwalten von IMEs in Firefox-OS-Apps verwendet wurden, wurden entfernt ([Firefox-Bug 1313169](https://bugzil.la/1313169)).

### CSS

- Die mit `-moz` präfixierte Variante der Pseudoklasse {{cssxref(":dir", ":dir()")}} wurde entfernt ([Firefox-Bug 1270406](https://bugzil.la/1270406)).
- Die mit `-moz` präfixierte Version von {{cssxref("text-align-last")}} wurde entfernt ([Firefox-Bug 1276808](https://bugzil.la/1276808)).
- Die mit `-moz` präfixierte Variante der Funktion {{cssxref("calc", "calc()")}} wurde entfernt ([Firefox-Bug 1331296](https://bugzil.la/1331296)).
- Das proprietäre Medienfragment `-moz-samplesize` wurde entfernt ([Firefox-Bug 1311246](https://bugzil.la/1311246)). Es war hinzugefügt worden, um die Bereitstellung heruntergerechneter Bilder an Firefox-OS-Geräte mit wenig Arbeitsspeicher zu erleichtern (siehe [Firefox-Bug 854795](https://bugzil.la/854795)).

### JavaScript

- Die nicht standardisierte Methode {{jsxref("ArrayBuffer.slice()")}} wurde entfernt. Die standardisierte Version {{jsxref("ArrayBuffer.prototype.slice()")}} bleibt erhalten (siehe [Firefox-Bug 1313112](https://bugzil.la/1313112)).

### APIs

- Die Wi-Fi Information API, Speaker Manager API, Tethering API und Settings API wurden von der Plattform entfernt (siehe [Firefox-Bug 1313788](https://bugzil.la/1313788), [Firefox-Bug 1317853](https://bugzil.la/1317853), [Firefox-Bug 1313789](https://bugzil.la/1313789) beziehungsweise [Firefox-Bug 1313155](https://bugzil.la/1313155)).

### Sonstiges

- `legacycaller` wurde aus den Interfaces [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement) und [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) entfernt ([Firefox-Bug 909656](https://bugzil.la/909656)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`browsingData`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

Erweiterte APIs:

- [`storage.sync`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- `page_action`, `browser_action`, `password` und `tab` als [Kontexttypen](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType) in [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [`webRequest.onBeforeRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) unterstützt jetzt `requestBody`
- [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) unterstützt jetzt `cssOrigin`, sodass Sie Benutzer-Stylesheets einfügen können.

### JavaScript-Code-Module

- Die asynchronen [AddonManager APIs](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) unterstützen jetzt neben Callbacks auch {{jsxref("Promise", "Promises")}} ([Firefox-Bug 987512](https://bugzil.la/987512)).
