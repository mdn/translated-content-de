---
title: Firefox 53 für Entwickler
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Firefox 53 wurde am 19. April 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Vermeidung von Scrolllatenz bei Overlays durch APZ ([Firefox-Bug 1312103](https://bugzil.la/1312103)).
- Hinzufügung einer Option zum [Kopieren des vollständigen CSS-Pfads](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) eines Elements ([Firefox-Bug 1323700](https://bugzil.la/1323700)).
- DevTools-Unterstützung für css-color-4 ([Firefox-Bug 1310681](https://bugzil.la/1310681)).
- Markup-Ansicht: Visueller Hinweis zwischen öffnenden und schließenden Tags eines zugeklappten Knotens hinzugefügt ([Firefox-Bug 1323193](https://bugzil.la/1323193)).

### CSS

#### Neue Funktionen

- Die `mask-*` Langschreibweisen (siehe [CSS Masks](/de/docs/Web/CSS/CSS_masking)) werden alle unterstützt und sind standardmäßig verfügbar (siehe [Firefox-Bug 1251161](https://bugzil.la/1251161)).
- Die {{cssxref("caret-color")}} Eigenschaft wurde hinzugefügt ([Firefox-Bug 1063162](https://bugzil.la/1063162)).
- Implementierung der {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} Kurzformen ([Firefox-Bug 1319958](https://bugzil.la/1319958)).
- Der Wert `flow-root` wurde zur {{cssxref("display")}} Eigenschaft hinzugefügt ([Firefox-Bug 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} akzeptiert jetzt {{cssxref("&lt;length&gt;")}}-Werte ([Firefox-Bug 943918](https://bugzil.la/943918)) und ist nun animierbar ([Firefox-Bug 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}:luminance funktioniert nicht bei Verlaufsmasken ([Firefox-Bug 1346265](https://bugzil.la/1346265)).
- \[css-grid] FR-Einheit in {{cssxref("grid-template-rows")}} füllt nicht den Viewport aus ([Firefox-Bug 1346699](https://bugzil.la/1346699)).
- Flex-Elemente werden nicht nach "order" sortiert, wenn sie durch ein abspos-Geschwister getrennt sind ([Firefox-Bug 1345873](https://bugzil.la/1345873)).

#### Sonstige Änderungen

- Aktivierung der Maskenlangschreibweisen auf SVG-Elementen ([Firefox-Bug 1319667](https://bugzil.la/1319667)).
- \[css-grid] Behoben: `align-self`/`justify-self:stretch`/`normal` funktioniert nicht auf `<table>` Grid-Items ([Firefox-Bug 1316051](https://bugzil.la/1316051)).
- Behoben: `clip-path: circle()` mit großem Referenzrahmen und prozentualem Radius wird nicht korrekt wiedergegeben ([Firefox-Bug 1324713](https://bugzil.la/1324713)).
- Bei der Anwendung eines {{cssxref("text-transform")}} Wertes von `uppercase` auf griechischen Text wird der Akzent auf dem disjunktiven Eta (ή) nicht mehr entfernt (siehe [Firefox-Bug 1322989](https://bugzil.la/1322989)).
- Die Verfügbarkeit des `contents` Werts der {{cssxref("display")}} Eigenschaft wurde durch die `layout.css.display-contents.enabled` Einstellung kontrolliert. In Firefox 53 wurde diese Einstellung vollständig entfernt, sodass der Wert immer verfügbar ist und nicht mehr deaktiviert werden kann ([Firefox-Bug 1295788](https://bugzil.la/1295788)).

### JavaScript

- Die ECMAScript 2015-Semantik für die {{jsxref("Function.name")}} Eigenschaften wurde implementiert. Dies schließt abgeleitete Namen auf anonymen Funktionen ein (`var foo = function() {}`) ([Firefox-Bug 883377](https://bugzil.la/883377)).
- ECMAScript 2015-Semantik für das Schließen von Iteratoren wurde implementiert. Dies betrifft z.B. die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife ([Firefox-Bug 1147371](https://bugzil.la/1147371)).
- Der [Template Literal Revision proposal](https://tc39.es/proposal-template-literal-revision/), der [Escape-Sequenz-Beschränkungen bei getaggten Template-Literalen aufhebt](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences), wurde implementiert ([Firefox-Bug 1317375](https://bugzil.la/1317375)).
- Die statische `length` Eigenschaft von {{jsxref("TypedArray")}} Objekten wurde gemäß ES2016 von 3 auf 0 geändert ([Firefox-Bug 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} kann jetzt in {{jsxref("DataView")}} Objekten verwendet werden ([Firefox-Bug 1246597](https://bugzil.la/1246597)).
- In früheren Versionen der Spezifikation mussten {{jsxref("SharedArrayBuffer")}} Objekte beim [strukturierten Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) explizit übertragen werden. In der neuen Spezifikation sind sie keine [übertragbaren Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) mehr und dürfen daher nicht mehr auf der Transferliste stehen. Das neue Verhalten führte bisher nur zu einer Konsolenwarnung, wird jetzt jedoch einen Fehler auslösen ([Firefox-Bug 1302037](https://bugzil.la/1302037)).
- Die Länge von {{jsxref("ArrayBuffer")}} ist jetzt auf {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) begrenzt ([Firefox-Bug 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} und andere native Fehlerobjekt-Prototypen wie {{jsxref("RangeError")}} usw. sind jetzt gewöhnliche Objekte anstelle von richtigen Fehlerobjekten. (Insbesondere ist `Object.prototype.toString.call(Error.prototype)` jetzt `"[object Object]"` anstelle von `"[object Error]"`.) ([Firefox-Bug 1213341](https://bugzil.la/1213341)).

### Ereignisse

- CSS-Übergänge: Die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) und [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) wurden implementiert (siehe [Firefox-Bug 1264125](https://bugzil.la/1264125) und [Firefox-Bug 1287983](https://bugzil.la/1287983)).
- Der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent/CompositionEvent) Konstruktor wurde implementiert (siehe [Firefox-Bug 1002256](https://bugzil.la/1002256)).
- Die Aliasnamen [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) und [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX)/[`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) wurden implementiert (siehe [Firefox-Bug 424390](https://bugzil.la/424390)).
- Das [`auxclick`](/de/docs/Web/API/Element/auxclick_event) Ereignis und der entsprechende Ereignishandler wurden implementiert (siehe [Firefox-Bug 1304044](https://bugzil.la/1304044)).
- Das [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) Ereignis wird jetzt ausgelöst, nachdem ein [Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.

### DOM

- Die Eigenschaften [`pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname) und [`search`](/de/docs/Web/API/HTMLAnchorElement/search) von Links (wie die Schnittstellen von {{HTMLElement("a")}} und {{HTMLELement("link")}}) gaben zuvor die falschen Teile der URL zurück. Bei einer URL wie `http://z.com/x?a=true&b=false` hätte `pathname` `"/x?a=true&b=false"` und `search` `""` zurückgegeben anstelle von `"/x"` und `"?a=true&b=false"`. Dies wurde nun behoben ([Firefox-Bug 1310483](https://bugzil.la/1310483)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor akzeptiert jetzt einen String oder eine Folge von Strings als Init-Objekt ([Firefox-Bug 1330678](https://bugzil.la/1330678)).
- Die Methode [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) der [Selection API](/de/docs/Web/API/Selection) wurde jetzt implementiert (siehe [Firefox-Bug 1321623](https://bugzil.la/1321623)).
- Die sogenannte ["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) Ergänzung zu `file` Typ {{htmlelement("input")}} `values` wurde in Gecko implementiert, um die Kompatibilität mit anderen Browsern zu gewährleisten (siehe [Firefox-Bug 1274596](https://bugzil.la/1274596)).
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) wurde implementiert und ersetzt die veraltete `Node.rootNode` Eigenschaft ([Firefox-Bug 1269155](https://bugzil.la/1269155)).
- Eigene Eigenschaften der [`Plugin`](/de/docs/Web/API/Plugin) und [`PluginArray`](/de/docs/Web/API/PluginArray) Objekte sind nicht mehr auflistbar ([Firefox-Bug 1270366](https://bugzil.la/1270366)).
- Benannte Eigenschaften der [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) Objekte sind nicht mehr auflistbar ([Firefox-Bug 1270364](https://bugzil.la/1270364)).
- Die [Permissions API](/de/docs/Web/API/Permissions_API) verfügt jetzt über einen neuen Berechtigungsnamen — `persistent-storage` — der bei einer [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet wird (siehe [Firefox-Bug 1270038](https://bugzil.la/1270038)). Dadurch kann ein Ursprung eine dauerhafte Box (d.h. [dauerhafter Speicher](https://storage.spec.whatwg.org/#persistence)) für seinen Speicher verwenden, gemäß der [Speicher-API](https://storage.spec.whatwg.org/).
- Die [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) Eigenschaft wurde implementiert ([Firefox-Bug 1313420](https://bugzil.la/1313420)).

### Workers und Service-Worker

- Die [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API) ist jetzt in Workern verfügbar (siehe [Firefox-Bug 1323172](https://bugzil.la/1323172)).
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events) können jetzt in Workern verwendet werden (siehe [Firefox-Bug 1267903](https://bugzil.la/1267903)).
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) kann jetzt asynchron aufgerufen werden (siehe [Firefox-Bug 1263304](https://bugzil.la/1263304)).

### WebGL

- Die [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) WebGL-Erweiterung wurde implementiert ([Firefox-Bug 1250077](https://bugzil.la/1250077)).
- Die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung ist jetzt standardmäßig aktiviert ([Firefox-Bug 1336645](https://bugzil.la/1336645)).

### Audio, Video und Medien

#### Allgemein

- Beginnend mit **Firefox 53 für Android** wird das Decodieren von Medien für eine verbesserte Leistung auf Multi-Core-Systemen außerprozessgeführt ([Firefox-Bug 1333323](https://bugzil.la/1333323)).

#### Medienelemente

- Die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), die zum Starten der Wiedergabe von Medien in jedem Medienelement verwendet wird, gibt jetzt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Wiedergabe beginnt und abgelehnt wird, wenn ein Fehler auftritt ([Firefox-Bug 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Die Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) wurde hinzugefügt und die Schnittstellen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) basieren jetzt darauf ([Firefox-Bug 1324568](https://bugzil.la/1324568)).
- Für alle verschiedenen Audionodetypen wurden Konstruktoren hinzugefügt ([Firefox-Bug 1322883](https://bugzil.la/1322883)).

#### WebRTC

- Die Methoden [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) und [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle geben jetzt ein {{jsxref("Promise")}} zurück, das ein Objekt zurückgibt, das dem `RTCSessionDescriptionInit` Wörterbuch entspricht, anstelle eines direkten [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription). Existierender Code wird weiterhin funktionieren, aber neuer Code kann einfacher geschrieben werden.
- Ebenso akzeptieren die Methoden [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle jetzt als Eingabe ein Objekt, das dem `RTCSessionDescriptionInit` Wörterbuch entspricht. Bestehender Code bleibt weiterhin funktionsfähig, kann jedoch vereinfacht werden.
- [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) akzeptiert jetzt als Eingabe ein Initialisierungsobjekt. Dies ist mit bestehendem Code kompatibel, ermöglicht jedoch, dass neuer Code etwas einfacher geschrieben werden kann, wenn er in Kombination mit den oben aufgeführten Änderungen verwendet wird ([Firefox-Bug 1263312](https://bugzil.la/1263312)).
- {{Glossary("DTMF", "DTMF")}} Unterstützung ist jetzt standardmäßig mit [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) aktiviert. Weitere Informationen zur Funktionsweise finden Sie unter [DTMF mit WebRTC verwenden](/de/docs/Web/API/WebRTC_API/Using_DTMF).

### HTTP/Netzwerk

- In Gecko ist jetzt eine Einstellung in `about:config` verfügbar, mit der Benutzer ihre Standard {{HTTPHeader("Referrer-Policy")}} festlegen können — `network.http.referer.userControlPolicy` ([Firefox-Bug 1304623](https://bugzil.la/1304623)). Mögliche Werte sind:
  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (der Standard)

- Unterstützung für Next Protocol Negotiation (NPN) wurde zugunsten der [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) entfernt — siehe [Firefox-Bug 1248198](https://bugzil.la/1248198).
- Der `Large-Allocation` HTTP-Header ist jetzt standardmäßig verfügbar und nicht mehr hinter einer Einstellung versteckt ([Firefox-Bug 1331083](https://bugzil.la/1331083)).

### SVG

- Teilweise implementierte [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) Schnittstelle ([Firefox-Bug 1239100](https://bugzil.la/1239100)).

## Entfernungen aus der Webplattform

### HTML/XML

- Die `dom.details_element.enabled` Einstellung — die die Aktivierung/Deaktivierung der {{htmlelement("details")}} und {{htmlelement("summary")}} Unterstützung in Firefox kontrollierte — wurde nun aus `about:config` entfernt. Diese Elemente (die erstmals standardmäßig in Firefox 49 aktiviert wurden) können nicht mehr deaktiviert werden. Siehe [Firefox-Bug 1271549](https://bugzil.la/1271549).
- Das `mozapp` Attribut des {{htmlelement("iframe")}} Elements /[`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) wurde entfernt — dies wurde verwendet, um eine Firefox OS-App in einem Mozilla-präfixierten Browser-API-`<iframe>` einzubetten ([Firefox-Bug 1310845](https://bugzil.la/1310845)).
- Die Methode `HTMLIFrameElement.setInputMethodActive()` und das `InputMethod` Interface (verwendet, um IMEs auf Firefox OS-Apps zu setzen und zu verwalten) wurden entfernt ([Firefox-Bug 1313169](https://bugzil.la/1313169)).

### CSS

- Entfernte `-moz` präfixierte Variante der {{cssxref(":dir", ":dir()")}} Pseudoklasse ([Firefox-Bug 1270406](https://bugzil.la/1270406)).
- Die `-moz` präfixierte Version von {{cssxref("text-align-last")}} wurde entfernt ([Firefox-Bug 1276808](https://bugzil.la/1276808)).
- Entfernte `-moz` präfixierte Variante der {{cssxref("calc", "calc()")}} Methode ([Firefox-Bug 1331296](https://bugzil.la/1331296)).
- Das proprietäre `-moz-samplesize` Medienfragment (hinzugefügt, um die Lieferung von heruntergesampelten Bildern an Firefox OS-Geräte mit geringem Speicher zu unterstützen; siehe [Firefox-Bug 854795](https://bugzil.la/854795)) wurde entfernt ([Firefox-Bug 1311246](https://bugzil.la/1311246)).

### JavaScript

- Die nicht-standardisierte {{jsxref("ArrayBuffer.slice()")}} Methode wurde entfernt (aber die standardisierte Version {{jsxref("ArrayBuffer.prototype.slice()")}} bleibt erhalten, siehe [Firefox-Bug 1313112](https://bugzil.la/1313112)).

### APIs

- Die Wi-Fi-Informations-API, die Speaker Manager API, die Tethering API und die Settings API wurden aus der Plattform entfernt (siehe [Firefox-Bug 1313788](https://bugzil.la/1313788), [Firefox-Bug 1317853](https://bugzil.la/1317853), [Firefox-Bug 1313789](https://bugzil.la/1313789) und [Firefox-Bug 1313155](https://bugzil.la/1313155) jeweils).

### Sonstiges

- Der `legacycaller` wurde aus den Schnittstellen [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement) und [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) entfernt ([Firefox-Bug 909656](https://bugzil.la/909656)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`browsingData`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

Erweiterte APIs:

- [`storage.sync`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- `page_action`, `browser_action`, `password`, `tab` [Kontexttypen](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType) in [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [`webRequest.onBeforeRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) unterstützt jetzt `requestBody`
- [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) unterstützt jetzt `cssOrigin`, wodurch Sie Benutzer-Stylesheets einfügen können.

### JavaScript-Code-Module

- Die asynchronen [AddonManager-APIs](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) unterstützen jetzt {{jsxref("Promise", "Promises")}} sowie Rückrufe ([Firefox-Bug 987512](https://bugzil.la/987512).

## Ältere Versionen

{{Firefox_for_developers}}
