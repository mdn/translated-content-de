---
title: Firefox 53 Versionshinweise für Entwickler
short-title: Firefox 53
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 53 wurde am 19. April 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Vermeidung von Scrollverzögerungen bei Highlightern durch APZ ([Firefox-Bug 1312103](https://bugzil.la/1312103)).
- Hinzufügung der Option zum [Kopieren des vollständigen CSS-Pfads](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) eines Elements ([Firefox-Bug 1323700](https://bugzil.la/1323700)).
- DevTools-Unterstützung für css-color-4 ([Firefox-Bug 1310681](https://bugzil.la/1310681)).
- Markup-Ansicht: Visueller Hinweis zwischen Öffnungs- und Schlusstag eines zusammengeklappten Knotens hinzugefügt ([Firefox-Bug 1323193](https://bugzil.la/1323193)).

### CSS

#### Neue Funktionen

- Die `mask-*` Langform-Eigenschaften (siehe [CSS Masks](/de/docs/Web/CSS/Guides/Masking)) werden alle unterstützt und sind standardmäßig verfügbar (siehe [Firefox-Bug 1251161](https://bugzil.la/1251161)).
- Eigenschaft {{cssxref("caret-color")}} hinzugefügt ([Firefox-Bug 1063162](https://bugzil.la/1063162)).
- Implementierung der Kurzschreibweisen {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} ([Firefox-Bug 1319958](https://bugzil.la/1319958)).
- Der Wert `flow-root` zur {{cssxref("display")}}-Eigenschaft hinzugefügt ([Firefox-Bug 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} akzeptiert nun {{cssxref("&lt;length&gt;")}}-Werte ([Firefox-Bug 943918](https://bugzil.la/943918)) und ist nun animierbar ([Firefox-Bug 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}:luminance funktioniert nicht bei Verlaufsmaske ([Firefox-Bug 1346265](https://bugzil.la/1346265)).
- \[css-grid] FR-Einheit in {{cssxref("grid-template-rows")}} füllt nicht den Viewport ([Firefox-Bug 1346699](https://bugzil.la/1346699)).
- Flex-Elemente werden nicht nach "order" sortiert, wenn sie durch ein abspos Geschwister getrennt sind ([Firefox-Bug 1345873](https://bugzil.la/1345873)).

#### Weitere Änderungen

- Aktivierung der Masken-Langformen auf SVG-Elementen ([Firefox-Bug 1319667](https://bugzil.la/1319667)).
- \[css-grid] Behoben: `align-self`/`justify-self:stretch`/`normal` funktioniert nicht auf `<table>`-Grid-Elementen ([Firefox-Bug 1316051](https://bugzil.la/1316051)).
- Behoben: `clip-path: circle()` mit großem Referenzrahmen und Prozent-Radius wird nicht korrekt gerendert ([Firefox-Bug 1324713](https://bugzil.la/1324713)).
- Wenn ein {{cssxref("text-transform")}}-Wert von `uppercase` auf griechischen Text angewendet wird, wird der Akzent auf dem disjunktiven Eta (ή) nicht mehr entfernt (siehe [Firefox-Bug 1322989](https://bugzil.la/1322989)).
- Die Verfügbarkeit des `contents`-Wertes von {{cssxref("display")}} wurde über die `layout.css.display-contents.enabled`-Voreinstellung gesteuert. In Firefox 53 wurde diese Voreinstellung vollständig entfernt, sodass der Wert immer verfügbar ist und nicht mehr deaktiviert werden kann ([Firefox-Bug 1295788](https://bugzil.la/1295788)).

### JavaScript

- ECMAScript 2015-Semantiken für die {{jsxref("Function.name")}}-Eigenschaften wurden implementiert. Dies schließt abgeleitete Namen auf anonymen Funktionen ein (`var foo = function() {}`) ([Firefox-Bug 883377](https://bugzil.la/883377)).
- ECMAScript 2015-Semantiken für das Schließen von Iteratoren wurden implementiert. Dies betrifft zum Beispiel die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife ([Firefox-Bug 1147371](https://bugzil.la/1147371)).
- Der [Template Literal Revision proposal](https://tc39.es/proposal-template-literal-revision/), der [Einschränkungen von Escape-Sequenzen auf getaggten Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences) aufhebt, wurde implementiert ([Firefox-Bug 1317375](https://bugzil.la/1317375)).
- Die statische `length`-Eigenschaft von {{jsxref("TypedArray")}}-Objekten wurde in Übereinstimmung mit ES2016 von 3 auf 0 geändert ([Firefox-Bug 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} kann jetzt in {{jsxref("DataView")}}-Objekten verwendet werden ([Firefox-Bug 1246597](https://bugzil.la/1246597)).
- In früheren Versionen der Spezifikation mussten {{jsxref("SharedArrayBuffer")}}-Objekte beim [strukturierten Klonen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) explizit übertragen werden. In der neuen Spezifikation sind sie keine [übertragbaren Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) mehr und dürfen daher nicht mehr in der Übertragungsliste stehen. Das neue Verhalten führte bisher nur zu einer Konsolenwarnung, wird jetzt jedoch einen Fehler auslösen ([Firefox-Bug 1302037](https://bugzil.la/1302037)).
- Die {{jsxref("ArrayBuffer")}}-Länge ist jetzt auf {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) begrenzt ([Firefox-Bug 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} und andere native Fehlerobjektprototypen wie {{jsxref("RangeError")}} usw. sind jetzt gewöhnliche Objekte anstelle von ordnungsgemäßen Fehlerobjekten. (Insbesondere ist `Object.prototype.toString.call(Error.prototype)` jetzt `"[object Object]"` anstelle von `"[object Error]"`.) ([Firefox-Bug 1213341](https://bugzil.la/1213341)).

### Ereignisse

- CSS-Übergänge: Die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) und [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) wurden implementiert (siehe [Firefox-Bug 1264125](https://bugzil.la/1264125) und [Firefox-Bug 1287983](https://bugzil.la/1287983)).
- Der [`CompositionEvent`](/de/docs/Web/API/CompositionEvent/CompositionEvent)-Konstruktor wurde implementiert (siehe [Firefox-Bug 1002256](https://bugzil.la/1002256)).
- Die Alias-Ereignisse [`MouseEvent.x`](/de/docs/Web/API/MouseEvent/x) und [`MouseEvent.y`](/de/docs/Web/API/MouseEvent/y) von [`MouseEvent.clientX`](/de/docs/Web/API/MouseEvent/clientX)/[`MouseEvent.clientY`](/de/docs/Web/API/MouseEvent/clientY) wurden implementiert (siehe [Firefox-Bug 424390](https://bugzil.la/424390)).
- Das [`auxclick`](/de/docs/Web/API/Element/auxclick_event)-Ereignis und der entsprechende Ereignishandler wurden implementiert (siehe [Firefox-Bug 1304044](https://bugzil.la/1304044)).
- Das [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)-Ereignis wird jetzt ausgelöst, nachdem ein [Übergang](/de/docs/Web/CSS/Guides/Transitions) abgebrochen wurde.

### DOM

- Die Eigenschaften [`pathname`](/de/docs/Web/API/HTMLAnchorElement/pathname) und [`search`](/de/docs/Web/API/HTMLAnchorElement/search) von Links (wie für {{HTMLElement("a")}} und {{HTMLELement("link")}}-Elemente) gaben zuvor die falschen Teile der URL zurück. Zum Beispiel würde bei einer URL von `http://z.com/x?a=true&b=false` `pathname` `"/x?a=true&b=false"` und `search` `""` zurückgeben, statt `"/x"` und `"?a=true&b=false"` jeweils. Dies wurde nun behoben ([Firefox-Bug 1310483](https://bugzil.la/1310483)).
- Der Konstruktor [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) akzeptiert jetzt eine Zeichenfolge oder eine Abfolge von Zeichenfolgen als Init-Objekt ([Firefox-Bug 1330678](https://bugzil.la/1330678)).
- Die Methode [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) der [Selection API](/de/docs/Web/API/Selection) ist nun implementiert (siehe [Firefox-Bug 1321623](https://bugzil.la/1321623)).
- Die ["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) Ergänzung zu `file`-Typ-{{htmlelement("input")}}-`values` wurde in Gecko implementiert und sorgt für eine Übereinstimmung mit anderen Browsern (siehe [Firefox-Bug 1274596](https://bugzil.la/1274596)).
- [`Node.getRootNode()`](/de/docs/Web/API/Node/getRootNode) wurde implementiert und ersetzt die veraltete `Node.rootNode`-Eigenschaft ([Firefox-Bug 1269155](https://bugzil.la/1269155)).
- Eigene Eigenschaften von [`Plugin`](/de/docs/Web/API/Plugin) und [`PluginArray`](/de/docs/Web/API/PluginArray) Objekten sind nicht mehr aufzählbar ([Firefox-Bug 1270366](https://bugzil.la/1270366)).
- Benannte Eigenschaften von [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray) Objekten sind nicht mehr aufzählbar ([Firefox-Bug 1270364](https://bugzil.la/1270364)).
- Die [Permissions API](/de/docs/Web/API/Permissions_API) hat jetzt einen neuen Berechtigungsnamen verfügbar — `persistent-storage` — der bei der Durchführung eines [`Permissions.query()`](/de/docs/Web/API/Permissions/query) (siehe [Firefox-Bug 1270038](https://bugzil.la/1270038)) verwendet wird. Dies ermöglicht es einem Ursprung, eine persistente Box (d.h. [persistent storage](https://storage.spec.whatwg.org/#persistence)) für seine Speicherung zu verwenden, wie es die [Storage API](https://storage.spec.whatwg.org/) festlegt.
- Die [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)-Eigenschaft wurde implementiert ([Firefox-Bug 1313420](https://bugzil.la/1313420)).

### Arbeiter und Service-Arbeiter

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) ist nun in Arbeitern verfügbar (siehe [Firefox-Bug 1323172](https://bugzil.la/1323172)).
- [Server-sent events](/de/docs/Web/API/Server-sent_events) können nun in Arbeitern verwendet werden (siehe [Firefox-Bug 1267903](https://bugzil.la/1267903)).
- [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) kann nun asynchron aufgerufen werden (siehe [Firefox-Bug 1263304](https://bugzil.la/1263304)).

### WebGL

- Die [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) WebGL-Erweiterung wurde implementiert ([Firefox-Bug 1250077](https://bugzil.la/1250077)).
- Die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung ist jetzt standardmäßig aktiviert ([Firefox-Bug 1336645](https://bugzil.la/1336645)).

### Audio, Video und Medien

#### Allgemein

- Mit **Firefox 53 für Android** wird das Dekodieren von Medien für eine verbesserte Leistung auf Multikernsystemen out-of-process behandelt ([Firefox-Bug 1333323](https://bugzil.la/1333323)).

#### Medienelemente

- Die Methode [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play), die zur Wiedergabe von Medien in jedem Medienelement verwendet wird, gibt jetzt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Wiedergabe beginnt und abgelehnt wird, wenn ein Fehler auftritt ([Firefox-Bug 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Die Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) wurde hinzugefügt und die Schnittstellen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) basieren jetzt darauf ([Firefox-Bug 1324568](https://bugzil.la/1324568)).
- Allen verschiedenen Audio-Knotentypen wurden Konstruktoren hinzugefügt ([Firefox-Bug 1322883](https://bugzil.la/1322883)).

#### WebRTC

- Die Methoden [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) und [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geben jetzt ein {{jsxref("Promise")}} zurück, das ein Objekt entsprechend dem `RTCSessionDescriptionInit`-Dictionary zurückgibt, anstelle eines direkten [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Rückgabewerts. Bestehender Code funktioniert weiterhin, aber neuer Code kann einfacher geschrieben werden.
- Ebenso nehmen die Methoden [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) jetzt als Eingabe ein Objekt entsprechend dem `RTCSessionDescriptionInit`-Dictionary an. Bestehender Code funktioniert weiterhin, kann aber vereinfacht werden.
- [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) akzeptiert jetzt als Eingabe ein Initialisierungsobjekt. Dies ist mit bestehendem Code kompatibel, ermöglicht jedoch, dass neuer Code etwas einfacher geschrieben werden kann, wenn er zusammen mit den oben aufgeführten Änderungen verwendet wird ([Firefox-Bug 1263312](https://bugzil.la/1263312)).
- {{Glossary("DTMF", "DTMF")}}-Unterstützung ist jetzt standardmäßig mit [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) aktiviert. Weitere Informationen dazu, wie dies funktioniert, finden Sie unter [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF).

### HTTP/Netzwerk

- Gecko hat jetzt eine Voreinstellung in `about:config` verfügbar, um Benutzern zu erlauben, ihre standardmäßige {{HTTPHeader("Referrer-Policy")}} zu setzen — `network.http.referer.userControlPolicy` ([Firefox-Bug 1304623](https://bugzil.la/1304623)). Mögliche Werte sind:

  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (die Standardeinstellung)

- Die Unterstützung für die Next Protocol Negotiation (NPN) wurde zugunsten der [Application-Layer Protocol Negotiation](https://de.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) entfernt — siehe [Firefox-Bug 1248198](https://bugzil.la/1248198).
- Der `Large-Allocation`-HTTP-Header ist jetzt standardmäßig verfügbar und nicht mehr hinter einer Voreinstellung verborgen ([Firefox-Bug 1331083](https://bugzil.la/1331083)).

### SVG

- Teilweise implementiert die [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement) Schnittstelle ([Firefox-Bug 1239100](https://bugzil.la/1239100)).

## Entfernungen aus der Web-Plattform

### HTML/XML

- Die `dom.details_element.enabled`-Voreinstellung — die das Aktivieren/Deaktivieren der Unterstützung von {{htmlelement("details")}} und {{htmlelement("summary")}}-Elementen in Firefox kontrollierte — wurde nun aus `about:config` entfernt. Diese Elemente (zuerst standardmäßig in Firefox 49 aktiviert) können nicht mehr deaktiviert werden. Siehe [Firefox-Bug 1271549](https://bugzil.la/1271549).
- Das `mozapp`-Attribut des {{htmlelement("iframe")}}-Elements /[`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle wurde entfernt — dies wurde verwendet, um eine Firefox-OS-App in einem Mozilla-präfixierten Browser-API `<iframe>` einzubetten ([Firefox-Bug 1310845](https://bugzil.la/1310845)).
- Die Methode `HTMLIFrameElement.setInputMethodActive()` und die `InputMethod`-Schnittstelle (verwendet, um Eingabemethoden-Editoren auf Firefox-OS-Apps zu setzen und zu verwalten) wurde entfernt ([Firefox-Bug 1313169](https://bugzil.la/1313169)).

### CSS

- Entfernt die `-moz`-präfixierte Variante der {{cssxref(":dir", ":dir()")}}-Pseudoklasse ([Firefox-Bug 1270406](https://bugzil.la/1270406)).
- Die `-moz`-präfixierte Version von {{cssxref("text-align-last")}} wurde entfernt ([Firefox-Bug 1276808](https://bugzil.la/1276808)).
- Entfernt die `-moz`-präfixierte Variante der {{cssxref("calc", "calc()")}}-Methode ([Firefox-Bug 1331296](https://bugzil.la/1331296)).
- Der proprietäre `-moz-samplesize`-Medienfragmente (hinzugefügt zur Unterstützung von heruntergesampelten Bildern auf Geräten mit wenig Speicher in Firefox OS; siehe [Firefox-Bug 854795](https://bugzil.la/854795)) wurde entfernt ([Firefox-Bug 1311246](https://bugzil.la/1311246)).

### JavaScript

- Die nicht standardisierte {{jsxref("ArrayBuffer.slice()")}}-Methode wurde entfernt (aber die standardisierte Version {{jsxref("ArrayBuffer.prototype.slice()")}} bleibt erhalten, siehe [Firefox-Bug 1313112](https://bugzil.la/1313112)).

### APIs

- Die Wi-Fi-Informations-API, Lautsprecher-Manager-API, Tethering-API und Einstellungs-API wurden von der Plattform entfernt (siehe [Firefox-Bug 1313788](https://bugzil.la/1313788), [Firefox-Bug 1317853](https://bugzil.la/1317853), [Firefox-Bug 1313789](https://bugzil.la/1313789) und [Firefox-Bug 1313155](https://bugzil.la/1313155)).

### Sonstiges

- Der `legacycaller` wurde aus den [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement) und [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)-Schnittstellen entfernt ([Firefox-Bug 909656](https://bugzil.la/909656)).

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`browsingData`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/de/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

Erweiterte APIs:

- [`storage.sync`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- `page_action`, `browser_action`, `password`, `tab` [Kontexttypen](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType) in [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [`webRequest.onBeforeRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) unterstützt jetzt `requestBody`
- [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) unterstützt jetzt `cssOrigin`, was Ihnen ermöglicht, Benutzerstile einzufügen.

### JavaScript-Code-Module

- Die asynchronen [AddonManager APIs](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) unterstützen jetzt sowohl {{jsxref("Promise", "Promises")}} als auch Rückrufe ([Firefox-Bug 987512](https://bugzil.la/987512)).
