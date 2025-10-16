---
title: Firefox 53 Versionshinweise für Entwickler
short-title: Firefox 53
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 53 wurde am 19. April 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Vermeidung von Scroll-Latenz bei Hervorhebungen durch APZ ([Firefox Fehler 1312103](https://bugzil.la/1312103)).
- Hinzufügen einer Option zum [Kopieren des vollständigen CSS-Pfads](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) eines Elements ([Firefox Fehler 1323700](https://bugzil.la/1323700)).
- DevTools-Unterstützung für css-color-4 ([Firefox Fehler 1310681](https://bugzil.la/1310681)).
- Markup-Ansicht: Hinzufügen eines visuellen Hinweises zwischen öffnenden und schließenden Tags eines zusammengeklappten Knotens ([Firefox Fehler 1323193](https://bugzil.la/1323193)).

### CSS

#### Neue Funktionen

- Die `mask-*` Langformen-Eigenschaften (siehe [CSS Masks](/de/docs/Web/CSS/CSS_masking)) werden alle unterstützt und sind standardmäßig verfügbar (siehe [Firefox Fehler 1251161](https://bugzil.la/1251161)).
- Die {{cssxref("caret-color")}} Eigenschaft wurde hinzugefügt ([Firefox Fehler 1063162](https://bugzil.la/1063162)).
- Die Kurzformen {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} wurden implementiert ([Firefox Fehler 1319958](https://bugzil.la/1319958)).
- Der Wert `flow-root` wurde zur {{cssxref("display")}} Eigenschaft hinzugefügt ([Firefox Fehler 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} akzeptiert jetzt {{cssxref("&lt;length&gt;")}} Werte ([Firefox Fehler 943918](https://bugzil.la/943918)) und ist jetzt animierbar ([Firefox Fehler 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}:luminance funktioniert nicht auf Gradientenmasken ([Firefox Fehler 1346265](https://bugzil.la/1346265)).
- \[css-grid] FR-Einheit in {{cssxref("grid-template-rows")}} füllt nicht das Ansichtsfenster ([Firefox Fehler 1346699](https://bugzil.la/1346699)).
- Flex-Elemente werden nicht gemäß "order" sortiert, wenn sie durch ein absolut positioniertes Geschwisterelement getrennt sind ([Firefox Fehler 1345873](https://bugzil.la/1345873)).

#### Weitere Änderungen

- Aktivieren von Masken-Langformen auf SVG-Elementen ([Firefox Fehler 1319667](https://bugzil.la/1319667)).
- \[css-grid] Behoben: `align-self`/`justify-self:stretch`/`normal` funktioniert nicht auf `<table>` Grid-Elementen ([Firefox Fehler 1316051](https://bugzil.la/1316051)).
- Behoben: `clip-path: circle()` mit großem Referenzrahmen und Prozentualradius rendert nicht korrekt ([Firefox Fehler 1324713](https://bugzil.la/1324713)).
- Beim Anwenden eines {{cssxref("text-transform")}} Wertes von `uppercase` auf griechischen Text wird der Akzent auf dem disjunktiven Eta (ή) nicht mehr entfernt (siehe [Firefox Fehler 1322989](https://bugzil.la/1322989)).
- Die Verfügbarkeit des `contents` Wertes der {{cssxref("display")}} Eigenschaft wurde über die Voreinstellung `layout.css.display-contents.enabled` gesteuert. In Firefox 53 wurde diese Voreinstellung vollständig entfernt, sodass der Wert immer verfügbar ist und nicht mehr deaktiviert werden kann ([Firefox Fehler 1295788](https://bugzil.la/1295788)).

### JavaScript

- ECMAScript 2015 Semantiken für die {{jsxref("Function.name")}} Eigenschaften wurden implementiert. Dies umfasst abgeleitete Namen bei anonymen Funktionen (`var foo = function() {}`) ([Firefox Fehler 883377](https://bugzil.la/883377)).
- ECMAScript 2015 Semantiken für das Schließen von Iteratoren wurden implementiert. Dies betrifft beispielsweise die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife ([Firefox Fehler 1147371](https://bugzil.la/1147371)).
- Der [Template Literal Revision proposal](https://tc39.es/proposal-template-literal-revision/), der [Beschränkungen der Escape-Sequenzen auf getaggten Template-Literalen aufhebt](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences), wurde implementiert ([Firefox Fehler 1317375](https://bugzil.la/1317375)).
- Die statische `length` Eigenschaft von {{jsxref("TypedArray")}} Objekten wurde gemäß ES2016 von 3 auf 0 geändert ([Firefox Fehler 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} kann jetzt in {{jsxref("DataView")}} Objekten verwendet werden ([Firefox Fehler 1246597](https://bugzil.la/1246597)).
- In früheren Versionen der Spezifikation mussten {{jsxref("SharedArrayBuffer")}} Objekte während des [strukturierten Klonens](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) explizit übertragen werden. In der neuen Spezifikation sind sie keine [transferierbaren Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) mehr und dürfen daher nicht in der Transferliste enthalten sein. Das neue Verhalten zeigte zuvor nur eine Konsolenwarnung an, wird jetzt aber einen Fehler auslösen ([Firefox Fehler 1302037](https://bugzil.la/1302037)).
- Die {{jsxref("ArrayBuffer")}} Länge ist jetzt auf {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) begrenzt ([Firefox Fehler 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} und andere Prototypen nativer Fehlerobjekte wie {{jsxref("RangeError")}} usw. sind jetzt gewöhnliche Objekte anstelle von richtigen Fehlerobjekten. (Insbesondere `Object.prototype.toString.call(Error.prototype)` ist jetzt `"[object Object]"` anstelle von `"[object Error]"`.) ([Firefox Fehler 1213341](https://bugzil.la/1213341)).

### Ereignisse

- CSS-Übergänge: Die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) und [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) wurden implementiert (siehe [Firefox Fehler 1264125](https://bugzil.la/1264125) und [Firefox Fehler 1287983](https://bugzil.la/1287983)).
- Der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent/CompositionEvent) Konstruktor wurde implementiert (siehe [Firefox Fehler 1002256](https://bugzil.la/1002256)).
- Die Aliase [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) und [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX)/[`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) wurden implementiert (siehe [Firefox Fehler 424390](https://bugzil.la/424390)).
- Das [`auxclick`](/de/docs/Web/API/Element/auxclick_event) Ereignis und der entsprechende Ereignishandler wurden implementiert (siehe [Firefox Fehler 1304044](https://bugzil.la/1304044)).
- Das [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) Ereignis wird jetzt ausgelöst, nachdem ein [Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.

### DOM

- Die Eigenschaften [`pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname) und [`search`](/de/docs/Web/API/HTMLAnchorElement/search) von Links (wie für die Schnittstellen von {{HTMLElement("a")}} und {{HTMLELement("link")}} Elementen) gaben zuvor die falschen Teile der URL zurück. Zum Beispiel würde für eine URL von `http://z.com/x?a=true&b=false` `pathname` `"/x?a=true&b=false"` zurückgeben und `search` `""`, anstatt `"/x"` und `"?a=true&b=false"` respektive. Dies wurde jetzt behoben ([Firefox Fehler 1310483](https://bugzil.la/1310483)).
- Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert jetzt einen String oder eine Sequenz von Strings als Initialisierungsobjekt ([Firefox Fehler 1330678](https://bugzil.la/1330678)).
- Die Methode [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert (siehe [Firefox Fehler 1321623](https://bugzil.la/1321623)).
- Die ["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) Ergänzung zu `file` Typ {{htmlelement("input")}} `Werte` wurde in Gecko implementiert und bietet Parität mit anderen Browsern (siehe [Firefox Fehler 1274596](https://bugzil.la/1274596)).
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) wurde implementiert und ersetzt die veraltete `Node.rootNode` Eigenschaft ([Firefox Fehler 1269155](https://bugzil.la/1269155)).
- Eigene Eigenschaften von [`Plugin`](/de/docs/Web/API/Plugin) und [`PluginArray`](/de/docs/Web/API/PluginArray) Objekten sind nicht mehr aufzählbar ([Firefox Fehler 1270366](https://bugzil.la/1270366)).
- Benannte Eigenschaften von [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) Objekten sind nicht mehr aufzählbar ([Firefox Fehler 1270364](https://bugzil.la/1270364)).
- Die [Permissions API](/de/docs/Web/API/Permissions_API) hat jetzt einen neuen Berechtigungsnamen verfügbar — `persistent-storage` — wie bei einem [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet (siehe [Firefox Fehler 1270038](https://bugzil.la/1270038)). Dies ermöglicht es einem Ursprung, eine persistente Box (d.h. [persistente Speicherung](https://storage.spec.whatwg.org/#persistence)) für seine Speicherung zu verwenden, gemäß der [Storage API](https://storage.spec.whatwg.org/).
- Die Eigenschaft [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) wurde implementiert ([Firefox Fehler 1313420](https://bugzil.la/1313420)).

### Arbeiter und Service Workers

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) ist jetzt in Arbeitern verfügbar (siehe [Firefox Fehler 1323172](https://bugzil.la/1323172)).
- [Server-sent events](/de/docs/Web/API/Server-sent_events) können jetzt in Arbeitern verwendet werden (siehe [Firefox Fehler 1267903](https://bugzil.la/1267903)).
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) kann jetzt asynchron aufgerufen werden (siehe [Firefox Fehler 1263304](https://bugzil.la/1263304)).

### WebGL

- Die WebGL-Erweiterung [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) wurde implementiert ([Firefox Fehler 1250077](https://bugzil.la/1250077)).
- Die WebGL-Erweiterung [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1336645](https://bugzil.la/1336645)).

### Audio, Video und Medien

#### Allgemein

- Beginnend mit **Firefox 53 für Android** wird das Decodieren von Medien out-of-process durchgeführt, um die Leistung auf Mehrkernsystemen zu verbessern ([Firefox Fehler 1333323](https://bugzil.la/1333323)).

#### Medienelemente

- Die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), die zur Wiedergabe von Medien in jedem Medienelement verwendet wird, gibt jetzt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Wiedergabe beginnt, und verworfen wird, wenn ein Fehler auftritt ([Firefox Fehler 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Die [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) Schnittstelle wurde hinzugefügt, und die Schnittstellen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) basieren jetzt darauf ([Firefox Fehler 1324568](https://bugzil.la/1324568)).
- Alle verschiedenen Audio-Knotentypen haben Konstruktoren hinzugefügt bekommen ([Firefox Fehler 1322883](https://bugzil.la/1322883)).

#### WebRTC

- Die Methoden [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) und [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geben jetzt ein {{jsxref("Promise")}} zurück, das ein Objekt zurückgibt, das dem `RTCSessionDescriptionInit` Wörterbuch entspricht, anstatt direkt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurückzugeben. Bestehender Code wird weiterhin funktionieren, aber neuer Code kann einfacher geschrieben werden.
- Ebenso akzeptieren die Methoden [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) jetzt als Eingabe ein Objekt, das dem Wörterbuch `RTCSessionDescriptionInit` entspricht. Bestehender Code wird weiterhin funktionieren, kann jedoch vereinfacht werden.
- [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) akzeptiert jetzt als Eingabe ein Initialisierungsobjekt. Dies ist kompatibel mit bestehendem Code, ermöglicht jedoch das Schreiben von neuem Code, der mit den oben genannten Änderungen etwas einfacher ist ([Firefox Fehler 1263312](https://bugzil.la/1263312)).
- {{Glossary("DTMF", "DTMF")}} Unterstützung ist jetzt standardmäßig aktiviert, indem [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) verwendet wird. Weitere Informationen zur Funktionsweise finden Sie unter [Using DTMF with WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF).

### HTTP/Netzwerk

- Gecko hat jetzt eine Voreinstellung in `about:config` verfügbar, die es Benutzern ermöglicht, ihre Standard-{{HTTPHeader("Referrer-Policy")}} zu setzen — `network.http.referer.userControlPolicy` ([Firefox Fehler 1304623](https://bugzil.la/1304623)). Mögliche Werte sind:
  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (der Standard)

- Die Unterstützung für das Next Protocol Negotiation (NPN) wurde zugunsten des [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) entfernt — siehe [Firefox Fehler 1248198](https://bugzil.la/1248198).
- Der `Large-Allocation` HTTP-Header ist jetzt standardmäßig verfügbar und wird nicht mehr hinter einer Voreinstellung verborgen ([Firefox Fehler 1331083](https://bugzil.la/1331083)).

### SVG

- Die Schnittstelle [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) wurde teilweise implementiert ([Firefox Fehler 1239100](https://bugzil.la/1239100)).

## Entfernungen von der Webplattform

### HTML/XML

- Die Voreinstellung `dom.details_element.enabled` — die das Aktivieren/Deaktivieren der Unterstützung für die Elemente {{htmlelement("details")}} und {{htmlelement("summary")}} in Firefox steuerte — wurde jetzt aus `about:config` entfernt. Diese Elemente (die erstmals standardmäßig in Firefox 49 aktiviert wurden) können nicht mehr deaktiviert werden. Siehe [Firefox Fehler 1271549](https://bugzil.la/1271549).
- Das `mozapp` Attribut des {{htmlelement("iframe")}} Elements/der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Schnittstelle wurde entfernt — dies wurde verwendet, um eine Firefox OS App in einem mozilla-präfixierten Browser-API `<iframe>` einzubetten ([Firefox Fehler 1310845](https://bugzil.la/1310845)).
- Die Methode `HTMLIFrameElement.setInputMethodActive()` und die Schnittstelle `InputMethod` (verwendet, um IMEs auf Firefox OS Apps einzustellen und zu verwalten) wurden entfernt ([Firefox Fehler 1313169](https://bugzil.la/1313169)).

### CSS

- Entfernt `-moz` präfixierte Variante der {{cssxref(":dir", ":dir()")}} Pseudoklasse ([Firefox Fehler 1270406](https://bugzil.la/1270406)).
- Die `-moz` präfixierte Version von {{cssxref("text-align-last")}} wurde entfernt ([Firefox Fehler 1276808](https://bugzil.la/1276808)).
- Entfernt `-moz` präfixierte Variante der {{cssxref("calc", "calc()")}} Methode ([Firefox Fehler 1331296](https://bugzil.la/1331296)).
- Das proprietäre `-moz-samplesize` Medienfragment (hinzugefügt, um die Lieferung von heruntergesampelten Bildern an gering speicherfähige Firefox OS Geräte zu unterstützen; siehe [Firefox Fehler 854795](https://bugzil.la/854795)) wurde entfernt ([Firefox Fehler 1311246](https://bugzil.la/1311246)).

### JavaScript

- Die nicht standardisierte Methode {{jsxref("ArrayBuffer.slice()")}} wurde entfernt (aber die standardisierte Version {{jsxref("ArrayBuffer.prototype.slice()")}} bleibt erhalten, siehe [Firefox Fehler 1313112](https://bugzil.la/1313112)).

### APIs

- Die Wi-Fi Information API, Speaker Manager API, und Tethering API und die Settings API wurden von der Plattform entfernt (siehe [Firefox Fehler 1313788](https://bugzil.la/1313788), [Firefox Fehler 1317853](https://bugzil.la/1317853), [Firefox Fehler 1313789](https://bugzil.la/1313789) und [Firefox Fehler 1313155](https://bugzil.la/1313155) respektive).

### Sonstiges

- Der `legacycaller` wurde von den Schnittstellen [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement) und [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) entfernt ([Firefox Fehler 909656](https://bugzil.la/909656)).

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
- [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) unterstützt jetzt `cssOrigin`, sodass Sie Benutzer-Stylesheets einfügen können.

### JavaScript-Code-Module

- Die asynchronen [AddonManager APIs](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) unterstützen jetzt sowohl {{jsxref("Promise", "Promises")}} als auch Rückrufe ([Firefox Fehler 987512](https://bugzil.la/987512)).
