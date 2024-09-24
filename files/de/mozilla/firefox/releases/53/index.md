---
title: Firefox 53 für Entwickler
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 53 wurde am 19. April 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Vermeidung von Scroll-Latenzen bei Hervorhebungen durch APZ ([Firefox-Bug 1312103](https://bugzil.la/1312103)).
- Hinzufügen einer Option zum [Kopieren des vollständigen CSS-Pfads](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) eines Elements ([Firefox-Bug 1323700](https://bugzil.la/1323700)).
- Unterstützung von Devtools für css-color-4 ([Firefox-Bug 1310681](https://bugzil.la/1310681)).
- Markup-Ansicht: Visueller Hinweis zwischen öffnenden und schließenden Tags eines reduzierten Knotens hinzufügen ([Firefox-Bug 1323193](https://bugzil.la/1323193)).

### CSS

#### Neue Funktionen

- Die `mask-*` Langform-Eigenschaften (siehe [CSS Masks](/de/docs/Web/CSS/CSS_masking)) werden jetzt alle unterstützt und sind standardmäßig verfügbar (siehe [Firefox-Bug 1251161](https://bugzil.la/1251161)).
- Die Eigenschaft {{cssxref("caret-color")}} wurde hinzugefügt ([Firefox-Bug 1063162](https://bugzil.la/1063162)).
- Die Kurzformen {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} wurden implementiert ([Firefox-Bug 1319958](https://bugzil.la/1319958)).
- Der `flow-root` Wert wurde zur {{cssxref("display")}} Eigenschaft hinzugefügt ([Firefox-Bug 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} akzeptiert jetzt {{cssxref("&lt;length&gt;")}} Werte ([Firefox-Bug 943918](https://bugzil.la/943918)) und ist jetzt animierbar ([Firefox-Bug 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}:luminance funktioniert nicht bei Verlaufsmasken ([Firefox-Bug 1346265](https://bugzil.la/1346265)).
- \[css-grid] FR Einheit in {{cssxref("grid-template-rows")}} füllt nicht das Ansichtsfenster ([Firefox-Bug 1346699](https://bugzil.la/1346699)).
- Flex-Elemente werden nicht gemäß der "order"-Reihenfolge sortiert, wenn sie durch ein abspos-Geschwisterteil getrennt sind ([Firefox-Bug 1345873](https://bugzil.la/1345873)).

#### Weitere Änderungen

- Aktivieren der Masken-Langformen bei SVG-Elementen ([Firefox-Bug 1319667](https://bugzil.la/1319667)).
- \[css-grid] Behoben: `align-self`/`justify-self:stretch`/`normal` funktioniert nicht bei `<table>` Rasterelementen ([Firefox-Bug 1316051](https://bugzil.la/1316051)).
- Behoben: `clip-path: circle()` mit großem Referenzrahmen und prozentualem Radius wird nicht korrekt gerendert ([Firefox-Bug 1324713](https://bugzil.la/1324713)).
- Bei Anwendung eines {{cssxref("text-transform")}} Wertes von `uppercase` auf griechischen Text wird der Akzent auf dem disjunktiven Eta (ή) nicht mehr entfernt (siehe [Firefox-Bug 1322989](https://bugzil.la/1322989)).
- Die Verfügbarkeit des `contents` Wertes von {{cssxref("display")}} wurde durch die `layout.css.display-contents.enabled` Voreinstellung gesteuert. In Firefox 53 wurde diese Voreinstellung vollständig entfernt, sodass der Wert immer verfügbar ist und nicht mehr deaktiviert werden kann ([Firefox-Bug 1295788](https://bugzil.la/1295788)).

### JavaScript

- ECMAScript 2015 Semantik für die {{jsxref("Function.name")}} Eigenschaften wurde implementiert. Dies schließt abgeleitete Namen bei anonymen Funktionen ein (`var foo = function() {}`) ([Firefox-Bug 883377](https://bugzil.la/883377)).
- ECMAScript 2015 Semantik für das Schließen von Iteratoren wurde implementiert. Dies wirkt sich beispielsweise auf die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife aus ([Firefox-Bug 1147371](https://bugzil.la/1147371)).
- Der [Template Literal Revision proposal](https://tc39.es/proposal-template-literal-revision/), der [Beschränkungen für Escape-Sequenzen in getaggten Template-Literalen lockert](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences), wurde implementiert ([Firefox-Bug 1317375](https://bugzil.la/1317375)).
- Die statische `length` Eigenschaft von {{jsxref("TypedArray")}} Objekten wurde entsprechend ES2016 von 3 auf 0 geändert ([Firefox-Bug 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} kann jetzt in {{jsxref("DataView")}} Objekten verwendet werden ([Firefox-Bug 1246597](https://bugzil.la/1246597)).
- In früheren Versionen der Spezifikation mussten {{jsxref("SharedArrayBuffer")}} Objekte explizit während des [structural cloning](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) übertragen werden. In der neuen Spezifikation sind sie keine [transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) mehr und dürfen daher nicht in der Transferliste sein. Das neue Verhalten zeigt bisher nur eine Konsolenwarnung, wird jetzt aber einen Fehler auslösen ([Firefox-Bug 1302037](https://bugzil.la/1302037)).
- Die Länge von {{jsxref("ArrayBuffer")}} ist jetzt auf {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) begrenzt ([Firefox-Bug 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} und andere native Fehlermuster wie {{jsxref("RangeError")}} usw. sind jetzt normale Objekte anstelle von richtigen Fehlerobjekten. (Insbesondere ist `Object.prototype.toString.call(Error.prototype)` jetzt `"[object Object]"` statt `"[object Error]"`.) ([Firefox-Bug 1213341](https://bugzil.la/1213341)).

### Ereignisse

- CSS-Übergänge: Die {{domxref("Element/transitionstart_event", "transitionstart")}}, {{domxref("Element/transitionrun_event", "transitionrun")}}, und {{domxref("Element/transitioncancel_event", "transitioncancel")}} Ereignisse wurden implementiert (siehe [Firefox-Bug 1264125](https://bugzil.la/1264125) und [Firefox-Bug 1287983](https://bugzil.la/1287983)).
- Der {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent")}} Konstruktor wurde implementiert (siehe [Firefox-Bug 1002256](https://bugzil.la/1002256)).
- Die {{domxref("MouseEvent.x")}} und {{domxref("MouseEvent.y")}} Aliase von {{domxref("MouseEvent.clientX")}}/{{domxref("MouseEvent.clientY")}} wurden implementiert (siehe [Firefox-Bug 424390](https://bugzil.la/424390)).
- Das {{domxref("Element/auxclick_event", "auxclick")}} Ereignis und der entsprechende Ereignishandler wurden implementiert (siehe [Firefox-Bug 1304044](https://bugzil.la/1304044)).
- Das {{domxref("Element/transitioncancel_event", "transitioncancel")}} Ereignis wird jetzt ausgelöst, nachdem ein [Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.

### DOM

- Die {{domxref("HTMLAnchorElement/pathname", "pathname")}} und {{domxref("HTMLAnchorElement/search", "search")}} Eigenschaften von Links (wie für {{HTMLElement("a")}} und {{HTMLELement("link")}} Element-Schnittstellen vorher die falschen Teile der URL zurückgaben. Beispielsweise würde bei einer URL `http://z.com/x?a=true&b=false` `pathname` "`/x?a=true&b=false"` zurückgeben und `search` "", anstatt "`/x`" und "`?a=true&b=false"` entsprechend. Dies wurde nun behoben ([Firefox-Bug 1310483](https://bugzil.la/1310483)).
- Der {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} Konstruktor akzeptiert jetzt einen String oder eine Sequenz von Strings als Init-Objekt ([Firefox-Bug 1330678](https://bugzil.la/1330678)).
- Die {{domxref("Selection.setBaseAndExtent()")}} Methode der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert (siehe [Firefox-Bug 1321623](https://bugzil.la/1321623)).
- Die ["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) Ergänzung zu `file` Typ {{htmlelement("input")}} `values` wurde in Gecko implementiert, um Parität mit anderen Browsern zu erreichen (siehe [Firefox-Bug 1274596](https://bugzil.la/1274596)).
- {{domxref("Node.getRootNode()")}} wurde implementiert und ersetzt die veraltete `Node.rootNode` Eigenschaft ([Firefox-Bug 1269155](https://bugzil.la/1269155)).
- Eigene Eigenschaften von {{domxref("Plugin")}} und {{domxref("PluginArray")}} Objekten sind nicht mehr aufzählbar ([Firefox-Bug 1270366](https://bugzil.la/1270366)).
- Benannte Eigenschaften von {{domxref("MimeTypeArray")}} Objekten sind nicht mehr aufzählbar ([Firefox-Bug 1270364](https://bugzil.la/1270364)).
- Die [Permissions API](/de/docs/Web/API/Permissions_API) hat jetzt einen neuen Berechtigungsnamen verfügbar — `persistent-storage` — wie bei der Verwendung von {{domxref("Permissions.query()")}} (siehe [Firefox-Bug 1270038](https://bugzil.la/1270038)). Dies erlaubt einem Origin das Verwenden eines persistenten Kastens (d.h. [persistent storage](https://storage.spec.whatwg.org/#persistence)) für seinen Speicher, gemäß der [Storage API](https://storage.spec.whatwg.org/).
- Die {{domxref("Performance.timeOrigin")}} Eigenschaft wurde implementiert ([Firefox-Bug 1313420](https://bugzil.la/1313420)).

### Workers und Service-Workers

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) ist jetzt in Workers verfügbar (siehe [Firefox-Bug 1323172](https://bugzil.la/1323172)).
- [Server-sent events](/de/docs/Web/API/Server-sent_events) können jetzt in Workers verwendet werden (siehe [Firefox-Bug 1267903](https://bugzil.la/1267903)).
- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}} kann jetzt asynchron aufgerufen werden (siehe [Firefox-Bug 1263304](https://bugzil.la/1263304)).

### WebGL

- Die {{domxref("WEBGL_compressed_texture_astc")}} WebGL-Erweiterung wurde implementiert ([Firefox-Bug 1250077](https://bugzil.la/1250077)).
- Die {{domxref("WEBGL_debug_renderer_info")}} WebGL-Erweiterung ist jetzt standardmäßig aktiviert ([Firefox-Bug 1336645](https://bugzil.la/1336645)).

### Audio, Video und Medien

#### Allgemeines

- Beginnend mit **Firefox 53 für Android** wird das Decodieren von Medien für verbesserte Leistung auf Multikernsystemen aus-Prozess durchgeführt ([Firefox-Bug 1333323](https://bugzil.la/1333323)).

#### Medienelemente

- Die Methode {{domxref("HTMLMediaElement.play()")}}, die verwendet wird, um die Wiedergabe von Medien in einem beliebigen Medium zu beginnen, gibt jetzt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Wiedergabe beginnt, und abgelehnt wird, wenn ein Fehler auftritt ([Firefox-Bug 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- Das {{domxref("AudioScheduledSourceNode")}} Interface wurde hinzugefügt und die {{domxref("AudioBufferSourceNode")}}, {{domxref("ConstantSourceNode")}} und {{domxref("OscillatorNode")}} Interfaces basieren jetzt darauf ([Firefox-Bug 1324568](https://bugzil.la/1324568)).
- Alle verschiedenen Audio-Knotentypen haben jetzt Konstruktoren ([Firefox-Bug 1322883](https://bugzil.la/1322883)).

#### WebRTC

- Die {{domxref("RTCPeerConnection")}} Methoden {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} und {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} geben jetzt ein {{jsxref("Promise")}} zurück, das ein Objekt zurückgibt, das dem `RTCSessionDescriptionInit`-Wörterbuch entspricht, anstatt ein {{domxref("RTCSessionDescription")}} direkt zurückzugeben. Bestehender Code wird weiterhin funktionieren, aber neuer Code kann einfacher geschrieben werden.
- Ebenso akzeptieren die {{domxref("RTCPeerConnection")}} Methoden {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} und {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} jetzt als Eingabe ein Objekt, das dem Wörterbuch `RTCSessionDescriptionInit` entspricht. Bestehender Code funktioniert weiterhin, kann aber [vereinfacht werden](/de/docs/Web/API/RTCPeerConnection/setLocalDescription#about_the_session_description_parameter).
- {{domxref("RTCPeerConnection.addIceCandidate()")}} akzeptiert jetzt als Eingabe ein Initialisierungsobjekt. Dies ist mit bestehendem Code kompatibel, ermöglicht es jedoch, neuen Code etwas einfacher zu schreiben, wenn er zusammen mit den oben aufgeführten Änderungen verwendet wird ([Firefox-Bug 1263312](https://bugzil.la/1263312)).
- {{Glossary("DTMF")}} Unterstützung ist jetzt standardmäßig mit {{domxref("RTCDTMFSender")}} aktiviert. Siehe [Using DTMF with WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF) für weitere Informationen darüber, wie dies funktioniert.

### HTTP/Netzwerk

- Gecko hat jetzt eine Voreinstellung in `about:config`, die es Benutzern erlaubt, ihre Standard-{{HTTPHeader("Referrer-Policy")}} zu setzen — `network.http.referer.userControlPolicy` ([Firefox-Bug 1304623](https://bugzil.la/1304623)). Mögliche Werte sind:

  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (die Standardvorgabe)

- Die Unterstützung für das Next Protocol Negotiation (NPN) wurde zugunsten des [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) entfernt — siehe [Firefox-Bug 1248198](https://bugzil.la/1248198).
- Der {{httpheader("Large-Allocation")}} HTTP-Header ist jetzt standardmäßig verfügbar und nicht mehr hinter einer Voreinstellung verborgen ([Firefox-Bug 1331083](https://bugzil.la/1331083)).

### SVG

- Teilweise implementiertes {{domxref("SVGGeometryElement")}} Interface ([Firefox-Bug 1239100](https://bugzil.la/1239100)).

## Entfernt aus der Webplattform

### HTML/XML

- Die `dom.details_element.enabled` Voreinstellung — die das Aktivieren/Deaktivieren der Unterstützung für {{htmlelement("details")}} und {{htmlelement("summary")}} Elemente in Firefox steuerte — wurde nun aus `about:config` entfernt. Diese Elemente (zum ersten Mal standardmäßig in Firefox 49 aktiviert) können nicht mehr deaktiviert werden. Siehe [Firefox-Bug 1271549](https://bugzil.la/1271549).
- Das `mozapp` Attribut des {{htmlelement("iframe")}} Elements /{{domxref("HTMLIFrameElement")}} Interface wurde entfernt — dieses wurde verwendet, um eine Firefox OS App in einem mozilla-präfixierten Browser-API `<iframe>` einzubetten ([Firefox-Bug 1310845](https://bugzil.la/1310845)).
- Die `HTMLIFrameElement.setInputMethodActive()` Methode und das `InputMethod` Interface (verwendet zur Einstellung und Verwaltung von IMEs in Firefox OS Apps) wurde entfernt ([Firefox-Bug 1313169](https://bugzil.la/1313169)).

### CSS

- Entfernt: `-moz` Präfixvariante der {{cssxref(":dir", ":dir()")}} Pseudoklasse ([Firefox-Bug 1270406](https://bugzil.la/1270406)).
- Die `-moz` präfixierte Version von {{cssxref("text-align-last")}} wurde entfernt ([Firefox-Bug 1276808](https://bugzil.la/1276808)).
- Entfernt: `-moz` Präfixvariante der {{cssxref("calc", "calc()")}} Methode ([Firefox-Bug 1331296](https://bugzil.la/1331296)).
- Das proprietäre `-moz-samplesize` Medienfragment (hinzugefügt zur Unterstützung der Lieferung von heruntergesampelten Bildern an speicherschwache Firefox OS Geräte; siehe [Firefox-Bug 854795](https://bugzil.la/854795)) wurde entfernt ([Firefox-Bug 1311246](https://bugzil.la/1311246)).

### JavaScript

- Die nicht standardisierte {{jsxref("ArrayBuffer.slice()")}} Methode wurde entfernt (aber die standardisierte Version {{jsxref("ArrayBuffer.prototype.slice()")}} bleibt erhalten, siehe [Firefox-Bug 1313112](https://bugzil.la/1313112)).

### APIs

- Die Wi-Fi Information API, die Speaker Manager API, und die Tethering API, und die Settings API] wurden aus der Plattform entfernt (siehe [Firefox-Bug 1313788](https://bugzil.la/1313788), [Firefox-Bug 1317853](https://bugzil.la/1317853), [Firefox-Bug 1313789](https://bugzil.la/1313789), und [Firefox-Bug 1313155](https://bugzil.la/1313155) entsprechend).

### Sonstiges

- Der `legacycaller` wurde aus den Schnittstellen {{domxref("HTMLEmbedElement")}} und {{domxref("HTMLObjectElement")}} entfernt ([Firefox-Bug 909656](https://bugzil.la/909656)).

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

- Die asynchronen [AddonManager APIs](/de/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager) unterstützen jetzt {{jsxref("Promise", "Promises")}} sowie Callbacks ([Firefox-Bug 987512](https://bugzil.la/987512).

## Ältere Versionen

{{Firefox_for_developers}}
