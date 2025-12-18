---
title: Firefox 53 Versionshinweise für Entwickler
short-title: Firefox 53
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 53 wurde am 19. April 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Erweiterungsentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Vermeidung von Scrollverzögerungen bei Hervorhebern durch APZ ([Firefox Fehler 1312103](https://bugzil.la/1312103)).
- Hinzufügen der Option, den [vollständigen CSS-Pfad](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) eines Elements zu kopieren ([Firefox Fehler 1323700](https://bugzil.la/1323700)).
- DevTools-Unterstützung für css-color-4 ([Firefox Fehler 1310681](https://bugzil.la/1310681)).
- Markup-Ansicht: Visueller Hinweis zwischen öffnenden und schließenden Tags eines zusammengeklappten Knotens hinzugefügt ([Firefox Fehler 1323193](https://bugzil.la/1323193)).

### CSS

#### Neue Funktionen

- Die `mask-*` Langform-Eigenschaften (siehe [CSS Masks](/de/docs/Web/CSS/Guides/Masking)) werden vollständig unterstützt und sind standardmäßig verfügbar (siehe [Firefox Fehler 1251161](https://bugzil.la/1251161)).
- Die {{cssxref("caret-color")}} Eigenschaft wurde hinzugefügt ([Firefox Fehler 1063162](https://bugzil.la/1063162)).
- Implementierung der {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} Kurzschreibweisen ([Firefox Fehler 1319958](https://bugzil.la/1319958)).
- Der `flow-root` Wert wurde zur {{cssxref("display")}} Eigenschaft hinzugefügt ([Firefox Fehler 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} akzeptiert jetzt {{cssxref("&lt;length&gt;")}} Werte ([Firefox Fehler 943918](https://bugzil.la/943918)) und ist jetzt animierbar ([Firefox Fehler 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}:luminance funktioniert nicht bei Gradientenmasken ([Firefox Fehler 1346265](https://bugzil.la/1346265)).
- [css-grid] FR-Einheit in {{cssxref("grid-template-rows")}} füllt den Viewport nicht ([Firefox Fehler 1346699](https://bugzil.la/1346699)).
- Flex-Elemente werden nicht nach "order" sortiert, wenn sie durch ein abspos-Geschwister getrennt sind ([Firefox Fehler 1345873](https://bugzil.la/1345873)).

#### Andere Änderungen

- Aktivierung von Masken-Langformen auf SVG-Elementen ([Firefox Fehler 1319667](https://bugzil.la/1319667)).
- [css-grid] Behoben: `align-self`/`justify-self:stretch`/`normal` funktioniert nicht auf `<table>` Gitter-Elementen ([Firefox Fehler 1316051](https://bugzil.la/1316051)).
- Behoben: `clip-path: circle()` mit großem Referenzrahmen und Prozentsatz-Radius wird nicht korrekt dargestellt ([Firefox Fehler 1324713](https://bugzil.la/1324713)).
- Bei Anwendung eines {{cssxref("text-transform")}} Wertes von `uppercase` auf griechischen Text wird der Akzent auf dem disjunktiven Eta (ή) nicht mehr entfernt (siehe [Firefox Fehler 1322989](https://bugzil.la/1322989)).
- Die Verfügbarkeit des `contents` Wertes von {{cssxref("display")}} wurde durch die `layout.css.display-contents.enabled`-Einstellung gesteuert. In Firefox 53 wurde diese Einstellung vollständig entfernt, sodass der Wert immer verfügbar ist und nicht mehr deaktiviert werden kann ([Firefox Fehler 1295788](https://bugzil.la/1295788)).

### JavaScript

- Die ECMAScript 2015-Semantik für die {{jsxref("Function.name")}} Eigenschaften wurden implementiert. Dazu gehören abgeleitete Namen für anonyme Funktionen (`var foo = function() {}`) ([Firefox Fehler 883377](https://bugzil.la/883377)).
- Die ECMAScript 2015-Semantik zum Schließen von Iteratoren wurde implementiert. Dies betrifft z. B. die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife ([Firefox Fehler 1147371](https://bugzil.la/1147371)).
- Der [Template Literal Revision Vorschlag](https://tc39.es/proposal-template-literal-revision/), der [Einschränkungen für Escape-Sequenzen in markierten Template Literalen aufhebt](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences), wurde implementiert ([Firefox Fehler 1317375](https://bugzil.la/1317375)).
- Die statische `length` Eigenschaft von {{jsxref("TypedArray")}} Objekten wurde gemäß ES2016 von 3 auf 0 geändert ([Firefox Fehler 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} kann nun in {{jsxref("DataView")}} Objekten verwendet werden ([Firefox Fehler 1246597](https://bugzil.la/1246597)).
- In früheren Versionen der Spezifikation mussten {{jsxref("SharedArrayBuffer")}} Objekte beim [strukturierten Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) explizit übertragen werden. In der neuen Spezifikation sind sie keine [übertragbaren Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) mehr und dürfen daher nicht auf der Übertragungsliste stehen. Das neue Verhalten, das bisher nur eine Konsolenwarnung ausgab, wird jetzt einen Fehler werfen ([Firefox Fehler 1302037](https://bugzil.la/1302037)).
- Die {{jsxref("ArrayBuffer")}} Länge ist jetzt auf {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) begrenzt ([Firefox Fehler 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} und andere native Error-Objektprototypen wie {{jsxref("RangeError")}} sind jetzt gewöhnliche Objekte anstelle von richtigen Error-Objekten. (Insbesondere ist `Object.prototype.toString.call(Error.prototype)` jetzt `"[object Object]"` anstatt `"[object Error]"`.) ([Firefox Fehler 1213341](https://bugzil.la/1213341)).

### Events

- CSS-Übergänge: Die [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) und [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) Ereignisse wurden implementiert (siehe [Firefox Fehler 1264125](https://bugzil.la/1264125) und [Firefox Fehler 1287983](https://bugzil.la/1287983)).
- Der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent/CompositionEvent) Konstruktor wurde implementiert (siehe [Firefox Fehler 1002256](https://bugzil.la/1002256)).
- Die [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) und [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) Aliase von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX)/[`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) wurden implementiert (siehe [Firefox Fehler 424390](https://bugzil.la/424390)).
- Das [`auxclick`](/de/docs/Web/API/Element/auxclick_event) Ereignis und der entsprechende Ereignishandler wurden implementiert (siehe [Firefox Fehler 1304044](https://bugzil.la/1304044)).
- Das [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) Ereignis wird jetzt ausgelöst, nachdem ein [Übergang](/de/docs/Web/CSS/Guides/Transitions) abgebrochen wurde.

### DOM

- Die [`pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname) und [`search`](/de/docs/Web/API/HTMLAnchorElement/search) Eigenschaften von Links (wie z.B. für {{HTMLElement("a")}} und {{HTMLELement("link")}} Elemente) gaben zuvor die falschen Teile der URL zurück. Beispielsweise würde für die URL `http://z.com/x?a=true&b=false` `pathname` `"/x?a=true&b=false"` zurückgeben und `search` würde `""` anstatt `"/x"` und `"?a=true&b=false"` liefern. Dies wurde nun behoben ([Firefox Fehler 1310483](https://bugzil.la/1310483)).
- Der [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktor akzeptiert jetzt eine Zeichenfolge oder eine Folge von Zeichenfolgen als Init-Objekt ([Firefox Fehler 1330678](https://bugzil.la/1330678)).
- Die [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) Methode der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert (siehe [Firefox Fehler 1321623](https://bugzil.la/1321623)).
- Die ["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) Erweiterung zu `file` Typ {{htmlelement("input")}} `values` wurde in Gecko implementiert und erreicht somit Gleichwertigkeit mit anderen Browsern (siehe [Firefox Fehler 1274596](https://bugzil.la/1274596)).
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) wurde implementiert und ersetzt die veraltete `Node.rootNode` Eigenschaft ([Firefox Fehler 1269155](https://bugzil.la/1269155)).
- Eigene Eigenschaften von [`Plugin`](/de/docs/Web/API/Plugin) und [`PluginArray`](/de/docs/Web/API/PluginArray) Objekten sind nicht mehr aufzählbar ([Firefox Fehler 1270366](https://bugzil.la/1270366)).
- Benannte Eigenschaften von [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) Objekten sind nicht mehr aufzählbar ([Firefox Fehler 1270364](https://bugzil.la/1270364)).
- Die [Permissions API](/de/docs/Web/API/Permissions_API) hat jetzt einen neuen Berechtigungsnamen verfügbar — `persistent-storage` — wie beim Erstellen einer [`Permissions.query()`](/de/docs/Web/API/Permissions/query) (siehe [Firefox Fehler 1270038](https://bugzil.la/1270038)). Dadurch kann ein Ursprung ein dauerhaftes Box-Modell (d.h. [persistenter Speicher](https://storage.spec.whatwg.org/#persistence)) für seinen Speicher verwenden, gemäß der [Storage API](https://storage.spec.whatwg.org/).
- Die [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) Eigenschaft wurde implementiert ([Firefox Fehler 1313420](https://bugzil.la/1313420)).

### Worker und Service Workers

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) ist jetzt in Workern verfügbar (siehe [Firefox Fehler 1323172](https://bugzil.la/1323172)).
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events) können jetzt in Workern verwendet werden (siehe [Firefox Fehler 1267903](https://bugzil.la/1267903)).
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) kann nun asynchron aufgerufen werden (siehe [Firefox Fehler 1263304](https://bugzil.la/1263304)).

### WebGL

- Die [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) WebGL-Erweiterung wurde implementiert ([Firefox Fehler 1250077](https://bugzil.la/1250077)).
- Die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung ist jetzt standardmäßig aktiviert ([Firefox Fehler 1336645](https://bugzil.la/1336645)).

### Audio, Video und Medien

#### Allgemein

- Ab **Firefox 53 für Android** wird die Decodierung von Medien zur besseren Leistung auf Mehrkernsystemen out-of-process durchgeführt ([Firefox Fehler 1333323](https://bugzil.la/1333323)).

#### Medienelemente

- Die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), die verwendet wird, um die Wiedergabe von Medien in einem Medienelement zu starten, gibt jetzt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Wiedergabe beginnt und abgelehnt wird, wenn ein Fehler auftritt ([Firefox Fehler 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Das [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) Interface wurde hinzugefügt und die Interfaces [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) basieren jetzt darauf ([Firefox Fehler 1324568](https://bugzil.la/1324568)).
- Alle verschiedenen Audio-Knotentypen haben Konstruktoren hinzugefügt bekommen ([Firefox Fehler 1322883](https://bugzil.la/1322883)).

#### WebRTC

- Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Methoden [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) und [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) geben jetzt ein {{jsxref("Promise")}} zurück, das ein Objekt konform mit dem `RTCSessionDescriptionInit` Wörterbuch statt direkt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurückgibt. Vorhandener Code wird weiterhin funktionieren, aber neuer Code kann einfacher geschrieben werden.
- Ebenso akzeptieren die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Methoden [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) jetzt als Eingabe ein Objekt, das mit dem `RTCSessionDescriptionInit` Wörterbuch übereinstimmt. Vorhandener Code funktioniert weiterhin, kann aber vereinfacht werden.
- [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) akzeptiert jetzt als Eingabe ein Initialisierungsobjekt. Dies ist mit vorhandenen Code kompatibel, ermöglicht jedoch, dass neuer Code in Kombination mit den oben aufgeführten Änderungen etwas einfacher geschrieben wird ([Firefox Fehler 1263312](https://bugzil.la/1263312)).
- {{Glossary("DTMF", "DTMF")}} Unterstützung ist jetzt standardmäßig mit [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) aktiviert. Weitere Informationen dazu, wie dies funktioniert, finden Sie unter [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF).

### HTTP/Netzwerk

- Gecko hat jetzt eine Einstellung in `about:config`, um Benutzern zu ermöglichen, ihre Standard-{{HTTPHeader("Referrer-Policy")}} festzulegen — `network.http.referer.userControlPolicy` ([Firefox Fehler 1304623](https://bugzil.la/1304623)). Mögliche Werte sind:
  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (der Standard)

- Unterstützung für Next Protocol Negotiation (NPN) wurde zugunsten der [Application-Layer Protocol Negotiation](https://de.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) entfernt — siehe [Firefox Fehler 1248198](https://bugzil.la/1248198).
- Der HTTP-Header `Large-Allocation` ist jetzt standardmäßig verfügbar und nicht mehr hinter einer Einstellung versteckt ([Firefox Fehler 1331083](https://bugzil.la/1331083)).

### SVG

- Teilweise implementiert die [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) Schnittstelle ([Firefox Fehler 1239100](https://bugzil.la/1239100)).

## Entfernt aus der Webplattform

### HTML/XML

- Die `dom.details_element.enabled` Einstellung — die Unterstützung für {{htmlelement("details")}} und {{htmlelement("summary")}} Elemente in Firefox aktivierte/deaktivierte — wurde jetzt aus `about:config` entfernt. Diese Elemente (zuerst standardmäßig in Firefox 49 aktiviert) können nicht mehr deaktiviert werden. Siehe [Firefox Fehler 1271549](https://bugzil.la/1271549).
- Das `mozapp` Attribut des {{htmlelement("iframe")}} Elements /[`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Schnittstelle wurde entfernt — dies wurde verwendet, um eine Firefox OS-App in ein Mozilla-präfix `<iframe>` des Browser-APIs einzubetten ([Firefox Fehler 1310845](https://bugzil.la/1310845)).
- Die `HTMLIFrameElement.setInputMethodActive()` Methode und das `InputMethod` Interface (verwendet, um IMEs auf Firefox OS-Apps einzustellen und zu verwalten) wurden entfernt ([Firefox Fehler 1313169](https://bugzil.la/1313169)).

### CSS

- Der `-moz`-präfixierte Variante der {{cssxref(":dir", ":dir()")}} Pseudoklasse wurde entfernt ([Firefox Fehler 1270406](https://bugzil.la/1270406)).
- Die `-moz`-präfixierte Version von {{cssxref("text-align-last")}} wurde entfernt ([Firefox Fehler 1276808](https://bugzil.la/1276808)).
- Der `-moz`-präfixierte Variante der {{cssxref("calc", "calc()")}} Methode wurde entfernt ([Firefox Fehler 1331296](https://bugzil.la/1331296)).
- Das proprietäre `-moz-samplesize` Medienfragment (hinzugefügt, um die Lieferung von heruntergesampelten Bildern an Firefox OS-Geräte mit wenig Speicher zu unterstützen; siehe [Firefox Fehler 854795](https://bugzil.la/854795)) wurde entfernt ([Firefox Fehler 1311246](https://bugzil.la/1311246)).

### JavaScript

- Die nicht standardisierte {{jsxref("ArrayBuffer.slice()")}} Methode wurde entfernt (aber die standardisierte Version {{jsxref("ArrayBuffer.prototype.slice()")}} bleibt erhalten, siehe [Firefox Fehler 1313112](https://bugzil.la/1313112)).

### APIs

- Die Wi-Fi-Informations-API, Speaker Manager API, Tethering API und Settings API wurden aus der Plattform entfernt (siehe [Firefox Fehler 1313788](https://bugzil.la/1313788), [Firefox Fehler 1317853](https://bugzil.la/1317853), [Firefox Fehler 1313789](https://bugzil.la/1313789) und [Firefox Fehler 1313155](https://bugzil.la/1313155) entsprechend).

### Sonstiges

- Das `legacycaller` wurde von den Schnittstellen [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement) und [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) entfernt ([Firefox Fehler 909656](https://bugzil.la/909656)).

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
- [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) unterstützt nun `cssOrigin`, was es Ihnen ermöglicht, Benutzer-Stylesheets einzufügen.

### JavaScript-Code-Module

- Die asynchronen [AddonManager-APIs](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) unterstützen nun {{jsxref("Promise", "Promises")}} sowie Callback-Funktionen ([Firefox Fehler 987512](https://bugzil.la/987512)).
