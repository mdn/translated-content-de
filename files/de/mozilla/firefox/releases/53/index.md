---
title: Firefox 53 für Entwickler
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 53 wurde am 19. April 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Web-Entwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Vermeidung von Scroll-Latenz bei Markierungswerkzeugen durch APZ ([Firefox Bug 1312103](https://bugzil.la/1312103)).
- Eine Option wurde hinzugefügt, um den [vollständigen CSS-Pfad eines Elements zu kopieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) ([Firefox Bug 1323700](https://bugzil.la/1323700)).
- DevTools-Unterstützung für css-color-4 ([Firefox Bug 1310681](https://bugzil.la/1310681)).
- Markup-Ansicht: Ein visueller Hinweis zwischen Öffnungs- und Schließ-Tags eines eingeklappten Knotens wurde hinzugefügt ([Firefox Bug 1323193](https://bugzil.la/1323193)).

### CSS

#### Neue Funktionen

- Die `mask-*` Langhand-Eigenschaften (siehe [CSS Masks](/de/docs/Web/CSS/CSS_masking)) werden vollständig unterstützt und sind standardmäßig verfügbar (siehe [Firefox Bug 1251161](https://bugzil.la/1251161)).
- Die {{cssxref("caret-color")}} Eigenschaft wurde hinzugefügt ([Firefox Bug 1063162](https://bugzil.la/1063162)).
- Die {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} Kurzformen wurden implementiert ([Firefox Bug 1319958](https://bugzil.la/1319958)).
- Der `flow-root` Wert wurde zur {{cssxref("display")}} Eigenschaft hinzugefügt ([Firefox Bug 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} akzeptiert nun {{cssxref("&lt;length&gt;")}} Werte ([Firefox Bug 943918](https://bugzil.la/943918)) und ist jetzt animierbar ([Firefox Bug 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}:luminance funktioniert nicht bei Farbverlaufs-Masken ([Firefox Bug 1346265](https://bugzil.la/1346265)).
- \[css-grid] FR-Einheit in {{cssxref("grid-template-rows")}} füllt den Ansichtsbereich nicht ([Firefox Bug 1346699](https://bugzil.la/1346699)).
- Flex-Elemente werden nicht nach "order" sortiert, wenn sie von einem abspos-Geschwister getrennt werden ([Firefox Bug 1345873](https://bugzil.la/1345873)).

#### Andere Änderungen

- Mask Langhand-Eigenschaften sind auf SVG-Elementen aktiviert ([Firefox Bug 1319667](https://bugzil.la/1319667)).
- \[css-grid] Behoben: `align-self`/`justify-self:stretch`/`normal` funktioniert nicht bei `<table>` Grid-Elementen ([Firefox Bug 1316051](https://bugzil.la/1316051)).
- Behoben: `clip-path: circle()` mit großer Referenzbox und Prozent-Radius wird nicht korrekt gerendert ([Firefox Bug 1324713](https://bugzil.la/1324713)).
- Beim Anwenden eines {{cssxref("text-transform")}} Werts von `uppercase` auf griechischen Text wird der Akzent auf dem disjunktiven Eta (ή) nicht mehr entfernt (siehe [Firefox Bug 1322989](https://bugzil.la/1322989)).
- Die Verfügbarkeit des `contents` Werts der {{cssxref("display")}} Eigenschaft wurde durch die `layout.css.display-contents.enabled` Voreinstellung gesteuert. In Firefox 53 wurde diese Voreinstellung vollständig entfernt, sodass der Wert immer verfügbar ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1295788](https://bugzil.la/1295788)).

### JavaScript

- ECMAScript 2015 Semantiken für die {{jsxref("Function.name")}} Eigenschaften wurden implementiert. Dies umfasst abgeleitete Namen bei anonymen Funktionen (`var foo = function() {}`) ([Firefox Bug 883377](https://bugzil.la/883377)).
- ECMAScript 2015 Semantiken für das Schließen von Iteratoren wurden implementiert. Dies betrifft zum Beispiel die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife ([Firefox Bug 1147371](https://bugzil.la/1147371)).
- Der [Template Literal Revision Vorschlag](https://tc39.es/proposal-template-literal-revision/), der [Beschränkungen von Escape-Sequenzen in getaggten Vorlagenliteralen lockert](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences), wurde implementiert ([Firefox Bug 1317375](https://bugzil.la/1317375)).
- Die statische `length` Eigenschaft von {{jsxref("TypedArray")}} Objekten wurde gemäß ES2016 von 3 auf 0 geändert ([Firefox Bug 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} kann jetzt in {{jsxref("DataView")}} Objekten verwendet werden ([Firefox Bug 1246597](https://bugzil.la/1246597)).
- In früheren Versionen der Spezifikation mussten {{jsxref("SharedArrayBuffer")}} Objekte explizit während des [strukturierten Klonens](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übertragen werden. In der neuen Spezifikation sind sie keine [übertragbaren Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) mehr und müssen daher nicht mehr in der Übertragungsliste sein. Das neue Verhalten stellte früher nur eine Konsolenwarnung dar, wird jetzt aber einen Fehler werfen ([Firefox Bug 1302037](https://bugzil.la/1302037)).
- Die Länge von {{jsxref("ArrayBuffer")}} ist jetzt auf {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) begrenzt ([Firefox Bug 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} und andere Prototypen von nativen Error-Objekten wie {{jsxref("RangeError")}} usw. sind jetzt gewöhnliche Objekte anstatt richtige Error-Objekte. (Insbesondere ist `Object.prototype.toString.call(Error.prototype)` jetzt `"[object Object]"` statt `"[object Error]"`.) ([Firefox Bug 1213341](https://bugzil.la/1213341)).

### Events

- CSS-Übergänge: Die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) und [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) wurden implementiert (siehe [Firefox Bug 1264125](https://bugzil.la/1264125) und [Firefox Bug 1287983](https://bugzil.la/1287983)).
- Der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent/CompositionEvent) Konstruktor wurde implementiert (siehe [Firefox Bug 1002256](https://bugzil.la/1002256)).
- Die [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) und [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) Aliase von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX)/[`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) wurden implementiert (siehe [Firefox Bug 424390](https://bugzil.la/424390)).
- Das [`auxclick`](/de/docs/Web/API/Element/auxclick_event) Ereignis und der entsprechende Ereignishandler wurden implementiert (siehe [Firefox Bug 1304044](https://bugzil.la/1304044)).
- Das [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) Ereignis wird jetzt ausgelöst, nachdem ein [Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.

### DOM

- Die [`pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname) und [`search`](/de/docs/Web/API/HTMLAnchorElement/search) Eigenschaften von Links (wie bei den Interfaces von {{HTMLElement("a")}} und {{HTMLELement("link")}} Elementen) gaben zuvor die falschen Teile der URL zurück. Bei einer URL von `http://z.com/x?a=true&b=false` würde `pathname` beispielsweise `"/x?a=true&b=false"` und `search` `""` zurückgeben, anstatt `"/x"` und `"?a=true&b=false"`. Dies wurde nun behoben ([Firefox Bug 1310483](https://bugzil.la/1310483)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor akzeptiert jetzt als Init-Objekt einen String oder eine Sequenz von Strings ([Firefox Bug 1330678](https://bugzil.la/1330678)).
- Die [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) Methode der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert (siehe [Firefox Bug 1321623](https://bugzil.la/1321623)).
- Die ["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) Ergänzung zu `file`-Typ {{htmlelement("input")}} `values` wurde in Gecko implementiert und bietet damit Parität mit anderen Browsern (siehe [Firefox Bug 1274596](https://bugzil.la/1274596)).
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) wurde implementiert und ersetzt die veraltete `Node.rootNode` Eigenschaft ([Firefox Bug 1269155](https://bugzil.la/1269155)).
- Eigene Eigenschaften von [`Plugin`](/de/docs/Web/API/Plugin) und [`PluginArray`](/de/docs/Web/API/PluginArray) Objekten sind nicht mehr aufzählbar ([Firefox Bug 1270366](https://bugzil.la/1270366)).
- Benannte Eigenschaften von [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) Objekten sind nicht mehr aufzählbar ([Firefox Bug 1270364](https://bugzil.la/1270364)).
- Die [Permissions API](/de/docs/Web/API/Permissions_API) verfügt jetzt über einen neuen Berechtigungsnamen — `persistent-storage` — sobald eine [`Permissions.query()`](/de/docs/Web/API/Permissions/query) durchgeführt wird (siehe [Firefox Bug 1270038](https://bugzil.la/1270038)). Dies ermöglicht einer Origin, eine persistente Box (d.h. [persistent storage](https://storage.spec.whatwg.org/#persistence)) für ihren Speicher zu verwenden, gemäß der [Storage API](https://storage.spec.whatwg.org/).
- Die [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) Eigenschaft wurde implementiert ([Firefox Bug 1313420](https://bugzil.la/1313420)).

### Worker und Service Worker

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) ist jetzt in Workern verfügbar (siehe [Firefox Bug 1323172](https://bugzil.la/1323172)).
- [Server-sent Events](/de/docs/Web/API/Server-sent_events) können jetzt in Workern verwendet werden (siehe [Firefox Bug 1267903](https://bugzil.la/1267903)).
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) kann jetzt asynchron aufgerufen werden (siehe [Firefox Bug 1263304](https://bugzil.la/1263304)).

### WebGL

- Die [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) WebGL-Erweiterung wurde implementiert ([Firefox Bug 1250077](https://bugzil.la/1250077)).
- Die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung ist jetzt standardmäßig aktiviert ([Firefox Bug 1336645](https://bugzil.la/1336645)).

### Audio, Video und Medien

#### Allgemein

- Ab **Firefox 53 für Android** wird das Dekodieren von Medien aus Leistungsgründen auf Systemen mit mehreren Kernen out-of-process durchgeführt ([Firefox Bug 1333323](https://bugzil.la/1333323)).

#### Medien-Elemente

- Die [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) Methode, die zum Starten der Wiedergabe von Medien in einem beliebigen Medienelement verwendet wird, gibt jetzt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Wiedergabe startet, und abgelehnt wird, wenn ein Fehler auftritt ([Firefox Bug 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Das [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) Interface wurde hinzugefügt, und die [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) Interfaces basieren jetzt darauf ([Firefox Bug 1324568](https://bugzil.la/1324568)).
- Alle verschiedenen Audionodetypen haben nun Konstruktoren erhalten ([Firefox Bug 1322883](https://bugzil.la/1322883)).

#### WebRTC

- Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Methoden [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) und [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) geben jetzt ein {{jsxref("Promise")}} zurück, das ein Objekt zurückgibt, das dem `RTCSessionDescriptionInit` Wörterbuch entspricht, anstatt direkt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurückzugeben. Bestehender Code wird weiterhin funktionieren, aber neuer Code kann einfacher geschrieben werden.
- Ähnlich akzeptieren die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Methoden [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) jetzt als Eingabe ein Objekt, das dem Wörterbuch `RTCSessionDescriptionInit` entspricht. Bestehender Code funktioniert weiterhin, kann aber [vereinfacht werden](/de/docs/Web/API/RTCPeerConnection/setLocalDescription#about_the_session_description_parameter).
- [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) akzeptiert jetzt ein Initialisierungsobjekt als Eingabe. Dies ist kompatibel mit bestehendem Code, erlaubt jedoch das Schreiben von neuem Code, der in Kombination mit den oben genannten Änderungen etwas einfacher ist ([Firefox Bug 1263312](https://bugzil.la/1263312)).
- {{Glossary("DTMF", "DTMF")}} Unterstützung ist jetzt standardmäßig mit [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) aktiviert. Siehe [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF) für weitere Informationen darüber, wie dies funktioniert.

### HTTP/Netzwerk

- Gecko hat jetzt eine Voreinstellung in `about:config`, die es Benutzern erlaubt, ihre Standard-{{HTTPHeader("Referrer-Policy")}} — `network.http.referer.userControlPolicy` — festzulegen ([Firefox Bug 1304623](https://bugzil.la/1304623)). Mögliche Werte sind:
  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (Standard)

- Die Unterstützung für Next Protocol Negotiation (NPN) wurde zugunsten der [Application-Layer Protocol Negotiation](https://de.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) entfernt — siehe [Firefox Bug 1248198](https://bugzil.la/1248198).
- Der {{httpheader("Large-Allocation")}} HTTP-Header ist jetzt standardmäßig verfügbar und nicht mehr hinter einer Voreinstellung verborgen ([Firefox Bug 1331083](https://bugzil.la/1331083)).

### SVG

- Teilweise implementiertes [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) Interface ([Firefox Bug 1239100](https://bugzil.la/1239100)).

## Entfernung aus der Webplattform

### HTML/XML

- Die `dom.details_element.enabled` Voreinstellung — die die Aktivierung/Deaktivierung der Unterstützung für {{htmlelement("details")}} und {{htmlelement("summary")}} Elemente in Firefox steuerte — wurde aus `about:config` entfernt. Diese Elemente (zuerst standardmäßig in Firefox 49 aktiviert) können nicht mehr deaktiviert werden. Siehe [Firefox Bug 1271549](https://bugzil.la/1271549).
- Das `mozapp` Attribut des {{htmlelement("iframe")}} Elements /[`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Interfaces wurde entfernt — dies wurde verwendet, um eine Firefox OS App in einem mozilla-präfixierten Browser-API `<iframe>` einzubetten ([Firefox Bug 1310845](https://bugzil.la/1310845)).
- Die `HTMLIFrameElement.setInputMethodActive()` Methode und das `InputMethod` Interface (verwendet zur Einrichtung und Verwaltung von IMEs in Firefox OS Apps) wurden entfernt ([Firefox Bug 1313169](https://bugzil.la/1313169)).

### CSS

- Entfernte `-moz` vorgefixte Variante der {{cssxref(":dir", ":dir()")}} Pseudoklasse ([Firefox Bug 1270406](https://bugzil.la/1270406)).
- Die `-moz` vorgefixte Version von {{cssxref("text-align-last")}} wurde entfernt ([Firefox Bug 1276808](https://bugzil.la/1276808)).
- Entfernte `-moz` vorgefixte Variante der {{cssxref("calc", "calc()")}} Methode ([Firefox Bug 1331296](https://bugzil.la/1331296)).
- Das proprietäre `-moz-samplesize` Medienfragment (zusätzlich zur Unterstützung der Bereitstellung herunterskalierter Bilder an Geräte mit niedrigem Speicher bei Firefox OS; siehe [Firefox Bug 854795](https://bugzil.la/854795)) wurde entfernt ([Firefox Bug 1311246](https://bugzil.la/1311246)).

### JavaScript

- Die nicht standardkonforme {{jsxref("ArrayBuffer.slice()")}} Methode wurde entfernt (aber die standardisierte Version {{jsxref("ArrayBuffer.prototype.slice()")}} bleibt erhalten, siehe [Firefox Bug 1313112](https://bugzil.la/1313112)).

### APIs

- Die Wi-Fi Information API, die Speaker Manager API, die Tethering API und die Settings API wurden von der Plattform entfernt (siehe [Firefox Bug 1313788](https://bugzil.la/1313788), [Firefox Bug 1317853](https://bugzil.la/1317853), [Firefox Bug 1313789](https://bugzil.la/1313789), und [Firefox Bug 1313155](https://bugzil.la/1313155) jeweils).

### Sonstiges

- Der `legacycaller` wurde aus den [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement) und [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Interfaces entfernt ([Firefox Bug 909656](https://bugzil.la/909656)).

## Änderungen für Add-on und Mozilla Entwickler

### WebExtensions

Neue APIs:

- [`browsingData`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

Erweiterte APIs:

- [`storage.sync`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- `page_action`, `browser_action`, `password`, `tab` [Kontexttypen](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType) in [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [`webRequest.onBeforeRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) unterstützt jetzt `requestBody`
- [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) unterstützt jetzt `cssOrigin`, was es ermöglicht, Benutzer-Stylesheets einzufügen.

### JavaScript-Code-Module

- Die asynchronen [AddonManager APIs](/de/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager) unterstützen jetzt {{jsxref("Promise", "Promises")}} sowie Rückrufe ([Firefox Bug 987512](https://bugzil.la/987512)).

## Ältere Versionen

{{Firefox_for_developers}}
