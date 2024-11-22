---
title: Firefox 53 für Entwickler
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Firefox 53 wurde am 19. April 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

- Vermeidung von Scrollverzögerungen bei Markierungen durch APZ ([Firefox-Bug 1312103](https://bugzil.la/1312103)).
- Option zum [Kopieren des vollständigen CSS-Pfads](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) eines Elements hinzugefügt ([Firefox-Bug 1323700](https://bugzil.la/1323700)).
- DevTools-Unterstützung für css-color-4 ([Firefox-Bug 1310681](https://bugzil.la/1310681)).
- Markup-Ansicht: Ein visueller Hinweis zwischen öffnenden und schließenden Tags eines eingeklappten Knotens wurde hinzugefügt ([Firefox-Bug 1323193](https://bugzil.la/1323193)).

### CSS

#### Neue Funktionen

- Die `mask-*` Langform-Eigenschaften (siehe [CSS Masks](/de/docs/Web/CSS/CSS_masking)) werden nun unterstützt und sind standardmäßig verfügbar (siehe [Firefox-Bug 1251161](https://bugzil.la/1251161)).
- Die {{cssxref("caret-color")}} Eigenschaft wurde hinzugefügt ([Firefox-Bug 1063162](https://bugzil.la/1063162)).
- Implementierung der Kurzformen {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} ([Firefox-Bug 1319958](https://bugzil.la/1319958)).
- Der `flow-root` Wert wurde zur {{cssxref("display")}} Eigenschaft hinzugefügt ([Firefox-Bug 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} akzeptiert nun {{cssxref("&lt;length&gt;")}} Werte ([Firefox-Bug 943918](https://bugzil.la/943918)) und ist jetzt animierbar ([Firefox-Bug 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}:luminance funktioniert nicht bei Gradientenmasken ([Firefox-Bug 1346265](https://bugzil.la/1346265)).
- \[css-grid] FR-Einheit in {{cssxref("grid-template-rows")}} füllt den Viewport nicht ([Firefox-Bug 1346699](https://bugzil.la/1346699)).
- Flex-Elemente werden nicht nach "order" sortiert, wenn sie durch ein abspos-Geschwister getrennt sind ([Firefox-Bug 1345873](https://bugzil.la/1345873)).

#### Weitere Änderungen

- Aktivierung der Masken-Langformen auf SVG-Elementen ([Firefox-Bug 1319667](https://bugzil.la/1319667)).
- \[css-grid] Behoben: `align-self`/`justify-self:stretch`/`normal` funktioniert nicht bei `<table>`-Gitterelementen ([Firefox-Bug 1316051](https://bugzil.la/1316051)).
- Behoben: `clip-path: circle()` mit großer Referenzbox und prozentualem Radius rendert nicht korrekt ([Firefox-Bug 1324713](https://bugzil.la/1324713).
- Beim Anwenden eines {{cssxref("text-transform")}} Wertes von `uppercase` auf griechischen Text wird der Akzent auf dem disjunktiven Eta (ή) nicht mehr entfernt (siehe [Firefox-Bug 1322989](https://bugzil.la/1322989)).
- Die Verfügbarkeit des `contents` Wertes von {{cssxref("display")}} wurde durch die `layout.css.display-contents.enabled` Präferenz gesteuert. In Firefox 53 wurde diese Präferenz vollständig entfernt, sodass der Wert immer verfügbar ist und nicht mehr deaktiviert werden kann ([Firefox-Bug 1295788](https://bugzil.la/1295788)).

### JavaScript

- ECMAScript 2015-Semantik für die {{jsxref("Function.name")}} Eigenschaften wurden implementiert. Dies schließt abgeleitete Namen bei anonymen Funktionen ein (`var foo = function() {}`) ([Firefox-Bug 883377](https://bugzil.la/883377)).
- ECMAScript 2015-Semantik für das Schließen von Iteratoren wurde implementiert. Dies betrifft z.B. die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife ([Firefox-Bug 1147371](https://bugzil.la/1147371)).
- Der [Template Literal Revision Vorschlag](https://tc39.es/proposal-template-literal-revision/), der [Einschränkungen beim Escape-Sequenzen bei getaggten Template-Literalen aufhebt](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences), wurde implementiert ([Firefox-Bug 1317375](https://bugzil.la/1317375)).
- Die statische `length` Eigenschaft von {{jsxref("TypedArray")}} Objekten wurde von 3 auf 0 gemäß ES2016 geändert ([Firefox-Bug 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} kann jetzt in {{jsxref("DataView")}} Objekten verwendet werden ([Firefox-Bug 1246597](https://bugzil.la/1246597)).
- In früheren Versionen der Spezifikation mussten {{jsxref("SharedArrayBuffer")}} Objekte während [strukturellem Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) ausdrücklich übertragen werden. In der neuen Spezifikation sind sie keine [übertragbaren Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) mehr und dürfen somit nicht mehr auf der Transferliste erscheinen. Das neue Verhalten gab bisher nur eine Konsolenwarnung aus, wird jetzt jedoch einen Fehler auslösen ([Firefox-Bug 1302037](https://bugzil.la/1302037)).
- Die Länge von {{jsxref("ArrayBuffer")}} ist nun auf {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) begrenzt ([Firefox-Bug 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} und andere native Error-Objektprototypen wie {{jsxref("RangeError")}} usw. sind nun gewöhnliche Objekte anstelle von echten Error-Objekten. (Insbesondere ist `Object.prototype.toString.call(Error.prototype)` jetzt `"[object Object]"` anstelle von `"[object Error]"`.) ([Firefox-Bug 1213341](https://bugzil.la/1213341)).

### Ereignisse

- CSS-Übergänge: Die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) und [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) wurden implementiert (siehe [Firefox-Bug 1264125](https://bugzil.la/1264125) und [Firefox-Bug 1287983](https://bugzil.la/1287983)).
- Der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent/CompositionEvent) Konstruktor wurde implementiert (siehe [Firefox-Bug 1002256](https://bugzil.la/1002256)).
- Die Aliase [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) und [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX)/[`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) wurden implementiert (siehe [Firefox-Bug 424390](https://bugzil.la/424390)).
- Das [`auxclick`](/de/docs/Web/API/Element/auxclick_event) Ereignis und der entsprechende Ereignishandler wurden implementiert (siehe [Firefox-Bug 1304044](https://bugzil.la/1304044)).
- Das [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) Ereignis wird jetzt ausgelöst, nachdem ein [Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wird.

### DOM

- Die [`pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname) und [`search`](/de/docs/Web/API/HTMLAnchorElement/search) Eigenschaften von Links (wie für {{HTMLElement("a")}} und {{HTMLELement("link")}} Elemente) gaben zuvor die falschen Teile der URL zurück. Beispielsweise gab für eine URL wie `http://z.com/x?a=true&b=false` `pathname` "`/x?a=true&b=false"` zurück und `search` "", anstatt "`/x`" und "`?a=true&b=false"` korrekt auszugeben. Dies wurde nun behoben ([Firefox-Bug 1310483](https://bugzil.la/1310483)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor akzeptiert jetzt eine Zeichenkette oder eine Sequenz von Zeichenketten als Initiierungsobjekt ([Firefox-Bug 1330678](https://bugzil.la/1330678)).
- Die Methode [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert (siehe [Firefox-Bug 1321623](https://bugzil.la/1321623)).
- Die "fakepath"-Hinzufügung zum `file`-Typ {{htmlelement("input")}} `Werte` wurde in Gecko implementiert, um gleichwertig mit anderen Browsern zu sein (siehe [Firefox-Bug 1274596](https://bugzil.la/1274596)).
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) wurde implementiert und ersetzt die veraltete `Node.rootNode` Eigenschaft ([Firefox-Bug 1269155](https://bugzil.la/1269155)).
- Eigene Eigenschaften von [`Plugin`](/de/docs/Web/API/Plugin) und [`PluginArray`](/de/docs/Web/API/PluginArray) Objekten sind nicht mehr aufzählbar ([Firefox-Bug 1270366](https://bugzil.la/1270366)).
- Benannte Eigenschaften von [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) Objekten sind nicht mehr aufzählbar ([Firefox-Bug 1270364](https://bugzil.la/1270364)).
- Die [Permissions API](/de/docs/Web/API/Permissions_API) hat jetzt einen neuen Berechtigungsnamen verfügbar — `persistent-storage` — wie verwendet bei [`Permissions.query()`](/de/docs/Web/API/Permissions/query) (siehe [Firefox-Bug 1270038](https://bugzil.la/1270038)). Dies ermöglicht es einem Ursprung, einen persistenten Speicherbereich (d.h. [persistenten Speicher](https://storage.spec.whatwg.org/#persistence)) für seinen Speicher zu nutzen, gemäß der [Storage API](https://storage.spec.whatwg.org/).
- Die [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) Eigenschaft wurde implementiert ([Firefox-Bug 1313420](https://bugzil.la/1313420)).

### Arbeiter und Service-Arbeiter

- Die [Netzwerk-Informations-API](/de/docs/Web/API/Network_Information_API) ist jetzt in Arbeitern verfügbar (siehe [Firefox-Bug 1323172](https://bugzil.la/1323172)).
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events) können jetzt in Arbeitern genutzt werden (siehe [Firefox-Bug 1267903](https://bugzil.la/1267903)).
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) kann jetzt asynchron aufgerufen werden (siehe [Firefox-Bug 1263304](https://bugzil.la/1263304)).

### WebGL

- Die [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) WebGL-Erweiterung wurde implementiert ([Firefox-Bug 1250077](https://bugzil.la/1250077)).
- Die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung ist jetzt standardmäßig aktiviert ([Firefox-Bug 1336645](https://bugzil.la/1336645)).

### Audio, Video und Medien

#### Allgemein

- Beginnend mit **Firefox 53 für Android** wird die Dekodierung von Medien zum besseren Nutzen von Mehrkernsystemen außerhalb des Prozesses gehandhabt ([Firefox-Bug 1333323](https://bugzil.la/1333323)).

#### Medienelemente

- Die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), die zur Wiedergabe von Medien in einem Medienelement verwendet wird, gibt jetzt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Wiedergabe beginnt, und abgelehnt wird, wenn ein Fehler auftritt ([Firefox-Bug 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Das Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) wurde hinzugefügt und die Interfaces [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) basieren nun darauf ([Firefox-Bug 1324568](https://bugzil.la/1324568)).
- Alle verschiedenen Audio-Knotentypen haben nun Konstruktoren erhalten ([Firefox-Bug 1322883](https://bugzil.la/1322883)).

#### WebRTC

- Die Methoden [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) und [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geben jetzt ein {{jsxref("Promise")}} zurück, das ein Objekt konform mit dem `RTCSessionDescriptionInit` Wörterbuch zurückgibt, anstatt direkt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurückzugeben. Bestehender Code wird weiterhin funktionieren, aber neuer Code kann einfacher geschrieben werden.
- In ähnlicher Weise akzeptieren die Methoden [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) jetzt als Eingabe ein Objekt konform mit dem Wörterbuch `RTCSessionDescriptionInit`. Bestehender Code funktioniert weiterhin, kann aber [vereinfacht werden](/de/docs/Web/API/RTCPeerConnection/setLocalDescription#about_the_session_description_parameter).
- [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) akzeptiert nun als Eingabe ein Initialisierungsobjekt. Dies ist kompatibel mit bestehendem Code, ermöglicht aber neuen Code, der zusammen mit den oben genannten Änderungen geschrieben wird, etwas einfacher zu sein ([Firefox-Bug 1263312](https://bugzil.la/1263312)).
- {{Glossary("DTMF", "DTMF")}}-Unterstützung ist jetzt standardmäßig mit [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) aktiviert. Weitere Informationen zum Funktionsumfang finden Sie unter [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF).

### HTTP/Netzwerk

- Für Gecko ist jetzt eine Voreinstellung in `about:config` verfügbar, die es Benutzern ermöglicht, ihre Standard-{{HTTPHeader("Referrer-Policy")}}-Richtlinie festzulegen — `network.http.referer.userControlPolicy` ([Firefox-Bug 1304623](https://bugzil.la/1304623)). Mögliche Werte sind:

  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (Standard)

- Unterstützung für Next Protocol Negotiation (NPN) wurde zugunsten von [Application-Layer Protocol Negotiation](https://de.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) entfernt — siehe [Firefox-Bug 1248198](https://bugzil.la/1248198).
- Der {{httpheader("Large-Allocation")}} HTTP-Header ist jetzt standardmäßig verfügbar und nicht mehr hinter einer Voreinstellung versteckt ([Firefox-Bug 1331083](https://bugzil.la/1331083)).

### SVG

- Teilweise implementierte [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) Schnittstelle ([Firefox-Bug 1239100](https://bugzil.la/1239100)).

## Entfernungen von der Webplattform

### HTML/XML

- Die Präferenz `dom.details_element.enabled` — die das Aktivieren/Deaktivieren der Unterstützung von {{htmlelement("details")}} und {{htmlelement("summary")}} Elementen in Firefox kontrollierte — wurde jetzt aus `about:config` entfernt. Diese Elemente (erstmals standardmäßig aktiviert in Firefox 49) können nicht mehr deaktiviert werden. Siehe [Firefox-Bug 1271549](https://bugzil.la/1271549).
- Das `mozapp` Attribut des {{htmlelement("iframe")}} Elements/[`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Schnittstellen wurde entfernt — dieses diente dazu, eine Firefox OS App in ein Mozilla-präfixiertes `<iframe>` des Browser-API einzubetten ([Firefox-Bug 1310845](https://bugzil.la/1310845)).
- Die Methode `HTMLIFrameElement.setInputMethodActive()` und die `InputMethod` Schnittstelle (zur Verwaltung von IMEs auf Firefox OS Apps) wurden entfernt ([Firefox-Bug 1313169](https://bugzil.la/1313169)).

### CSS

- Entfernt `-moz` Präfixvariante der {{cssxref(":dir", ":dir()")}} Pseudoklasse ([Firefox-Bug 1270406](https://bugzil.la/1270406)).
- Die `-moz` Präfixvariante von {{cssxref("text-align-last")}} wurde entfernt ([Firefox-Bug 1276808](https://bugzil.la/1276808)).
- Entfernt `-moz` Präfixvariante der {{cssxref("calc", "calc()")}} Methode ([Firefox-Bug 1331296](https://bugzil.la/1331296)).
- Der proprietäre `-moz-samplesize` Medien-Fragment (hinzugefügt zur Unterstützung der Bereitstellung heruntergesampleter Bilder an speicherschwache Firefox OS-Geräte; siehe [Firefox-Bug 854795](https://bugzil.la/854795)) wurde entfernt ([Firefox-Bug 1311246](https://bugzil.la/1311246)).

### JavaScript

- Die nicht-standardisierte {{jsxref("ArrayBuffer.slice()")}} Methode wurde entfernt (aber die standardisierte Version {{jsxref("ArrayBuffer.prototype.slice()")}} bleibt erhalten, siehe [Firefox-Bug 1313112](https://bugzil.la/1313112)).

### APIs

- Die Wi-Fi-Informations-API, die Lautsprecher-Manager-API, die Tethering-API und die Einstellungen-API wurden aus der Plattform entfernt (siehe [Firefox-Bug 1313788](https://bugzil.la/1313788), [Firefox-Bug 1317853](https://bugzil.la/1317853), [Firefox-Bug 1313789](https://bugzil.la/1313789) und [Firefox-Bug 1313155](https://bugzil.la/1313155)).

### Sonstiges

- Der `legacycaller` wurde aus den [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement) und [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Schnittstellen entfernt ([Firefox-Bug 909656](https://bugzil.la/909656)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`browsingData`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

Erweiterte APIs:

- [`storage.sync`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- `page_action`, `browser_action`, `password`, `tab` [Kontexttypen](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType) in [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [`webRequest.onBeforeRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) unterstützt nun `requestBody`
- [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) unterstützt jetzt `cssOrigin`, wodurch Sie Benutzerstilblätter einfügen können.

### JavaScript-Code-Module

- Die asynchronen [AddonManager-APIs](/de/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager) unterstützen jetzt {{jsxref("Promise", "Promises")}} sowie Rückrufe ([Firefox-Bug 987512](https://bugzil.la/987512).

## Ältere Versionen

{{Firefox_for_developers}}
