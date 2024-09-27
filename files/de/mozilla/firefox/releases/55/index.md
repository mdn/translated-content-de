---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen einer Filterung der Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Bug 1041895](https://bugzil.la/1041895), [Firefox Bug 1354508](https://bugzil.la/1354508), [Firefox Bug 1354507](https://bugzil.la/1354507)) und durch reguläre Ausdrücke ([Firefox Bug 1354495](https://bugzil.la/1354495)).
- Es ist nun möglich, Spalten im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) anzuzeigen und auszublenden ([Firefox Bug 862855](https://bugzil.la/862855)).
- Hinzufügen der Spalten für Remote-IP ([Firefox Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies ([Firefox Bug 1356869](https://bugzil.la/1356869)) in den Network Monitor.
- Der HTTP-Header {{HTTPHeader("SourceMap")}} wird jetzt unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap` Header, siehe [Firefox Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) auf `true` gesetzt ist, verwenden nun {{htmlelement("div")}}-Elemente, um unterschiedliche Textzeilen zu trennen und Firefox auf den Stand anderer moderner Browser zu bringen ([Firefox Bug 1297414](https://bugzil.la/1297414)). Siehe [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) für weitere Details.
- `dom.forms.datetime` wird in Nightly standardmäßig aktiviert ([Firefox Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die Eigenschaft {{cssxref("transform-box")}} ist jetzt standardmäßig verfügbar ([Firefox Bug 1208550](https://bugzil.la/1208550)).
- Die `frames()` Timing-Funktion wurde implementiert ([Firefox Bug 1248340](https://bugzil.la/1248340)).
- Die Eigenschaft {{cssxref("text-justify")}} wurde implementiert ([Firefox Bug 1343512](https://bugzil.la/1343512), [Firefox Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Klemmgröße in {{cssxref("repeat", "repeat()")}} ([Firefox Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte `inline-start` und `inline-end` für {{cssxref("float")}} / {{cssxref("clear")}}, die zuvor implementiert, aber in den Release-Kanälen abgeschaltet waren, sind jetzt standardmäßig in allen Kanälen verfügbar ([Firefox Bug 1253919](https://bugzil.la/1253919)).
- Die Präferenz `layout.css.variables.enabled` wurde komplett entfernt, was bedeutet, dass die [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties)-Funktionalität immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre Eigenschaft `-moz-context-properties` wurde implementiert ([Firefox Bug 1058040](https://bugzil.la/1058040)).
- Der Winkelwert 0 ohne Gradangabe wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}} Pseudo-Element wird jetzt unterstützt; es passt auf Text-Cues, die innerhalb eines Medienelements präsentiert werden ([Firefox Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das Attribut {{ SVGAttr("fr") }} des {{svgelement("radialGradient")}}-Elements wurde implementiert ([Firefox Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Siehe [Ein Vorgeschmack auf JavaScripts neue parallele Primitiven](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Rest-Operator (`...`) wird jetzt in [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) unterstützt und der Spread-Operator (`...`) funktioniert nun in [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (ECMAScript Stage 3 Vorschlag: [Objekte Rest/Spread Eigenschaften](https://github.com/tc39/proposal-object-rest-spread), [Firefox Bug 1339395](https://bugzil.la/1339395)).
- [Async-Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprachkennzeichen für lokalspezifische Fallanpassungen anzugeben ([Firefox Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt jetzt die Option `caseFirst` ([Firefox Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standardsprache des Browsers anstelle der des Betriebssystems, wenn keine Spracheinstellung vorgegeben ist ([Firefox Bug 1346674](https://bugzil.la/1346674)).
- [Template-Call-Sites-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm kanonisiert, basierend auf ihrer Liste von Rohzeichenfolgen ([Firefox Bug 1108941](https://bugzil.la/1108941)).
- Die Konstruktoren von {{jsxref("TypedArray")}} (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, etc.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die null-langen typisierten Arrays zurückgeben ([Firefox Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Präferenz verfügbar war. Diese API ermöglicht es, Aufgaben einzuplanen, die ausgeführt werden, wenn der Browser feststellt, dass vor dem nächsten Repaint Zeit zur Verfügung steht, damit Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungsprobleme zu verursachen ([Firefox Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und in Nightly auf macOS verfügbar). Diese API ermöglicht es, virtuelle Realitätsgeräte — wie zum Beispiel Head-Mounted-Displays wie Oculus Rift oder HTC Vive — für Webanwendungen zugänglich zu machen, indem Entwickler die Position und Bewegungsinformationen vom Display in Bewegungen innerhalb einer 3D-Szene übersetzen und Inhalte auf diesen Displays präsentieren können.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen im Schnittpunkt eines Ziel-Elements mit einem übergeordneten Element oder mit dem [Viewport](/de/docs/Glossary/Viewport) eines Dokuments oberster Ebene asynchron zu beobachten — wurde hinzugefügt ([Firefox Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window) Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie ihre Aliasse `pageXOffset` und `pageYOffset`) wurden aktualisiert, um präzise auf Subpixel-Ebene zu sein. Anstatt eines ganzen Werts geben diese jetzt einen Fließkommawert zurück, der die Scrollposition auf Displays mit Subpixel-Genauigkeit genauer beschreibt ([Firefox Bug 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie {{jsxref("Math.round()")}} verwenden, um sie in ganze Zahlen umzuwandeln.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen. Siehe [Firefox Bug 1354441](https://bugzil.la/1354441) und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Wert der Liste ändern, entfernen jetzt automatisch Leerzeichen und doppelte Token ([Firefox Bug 869788](https://bugzil.la/869788), siehe auch [Entfernen von Leerzeichen und Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt dynamisch mit JavaScript geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL) Konstruktor kann keinen `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur noch einen `USVString`. Er kann nach wie vor ein bestehendes [`URL`](/de/docs/Web/API/URL) Objekt als Basis verwenden, das sich in das `href`-Attribut des Objekts umwandelt ([Firefox Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die Ereignistypen, die durch die Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützt werden, wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist jetzt vom Typ `USVString`, nicht `DOMString` und die [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) Eigenschaft akzeptiert nun einen `MessageEventSource` Wert (der ein [WindowProxy](/de/docs/Glossary/WindowProxy), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann) ([Firefox Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste ist jetzt dem [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis plus der `Ctrl`-Taste zugeordnet. Diese Zuordnung wurde implementiert, um Entwicklern die Implementierung einer einfachen Zoomfunktionalität mit der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu ermöglichen (Mausrad + `Ctrl` zoomt oft) ([Firefox Bug 1052253](https://bugzil.la/1052253)).

#### Selection API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie mit anderen Browsern in Bezug auf die Art und Weise, wie Editierbereiche den Fokus erhalten, wenn die Auswahl in sie hineinbewegt wird, übereinstimmt ([Firefox Bug 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Selection API in Bezug auf die Fokusänderungen des Editierbereichs](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige kürzliche Änderungen der Spezifikation nachzuvollziehen ([Firefox Bug 1359371](https://bugzil.la/1359371)):

  - Die `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) sind jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Außerdem wurden die Methoden `Selection.empty()` und `Selection.setPosition()` in der [`Selection`](/de/docs/Web/API/Selection) API als Aliasse für [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Webkompatibilität und für die Parität mit WebKit/Blink ([Firefox Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window`-Kontexten freigegeben ([Firefox Bug 1286717](https://bugzil.la/1286717)).

#### Worker

- `Worker` und Shared Worker können nun mit einer identifizierenden `name` Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), sowie die Interfaces [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox Bug 1364297](https://bugzil.la/1364297)).
- [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval) unterliegen jetzt einem Mindestintervall-Throttling für Tracking-Skripte in Hintergrund-Tabs — siehe [Throttling von Tracking-Timeout-Skripten](/de/docs/Web/API/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox Bug 1355311](https://bugzil.la/1355311)).

#### Service Worker/Push

- Nachrichten, die an Service-Worker-Kontexte gesendet werden (z. B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt, um Konsistenz mit anderen Web-Messaging-Funktionen herzustellen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert nun {{jsxref("ArrayBuffer")}}s und Base64-verschlüsselte Zeichenfolgen als `applicationServerKey`-Werte ([Firefox Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardisierter Konstruktor (der einen String-Enum-Wert akzeptierte, der den Zweck anzeigte, für den der Kontext verwendet werden würde) für die Schnittstelle [`AudioContext`](/de/docs/Web/API/AudioContext) verursachte Fehler, wenn der Parameter `options` angegeben wurde. Wir haben den nicht standardisierten Konstruktor entfernt. Beachten Sie jedoch bitte, dass der Parameter `options` in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) stellt jetzt standardmäßig einen Stereo-Audiostream bereit, wenn das Quell-Gerät Stereo-Sound bietet; die Unterstützung zur spezifischen Anforderung von Mono-Eingaben wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf dem Desktop; Mobile Firefox unterstützt derzeit keine Stereo-Audio-Eingangsquellen ([Firefox Bug 971528](https://bugzil.la/971528)).
- `getUserMedia()` [Mediakapazitäten, -einschränkungen und -einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` stimmen jetzt mit der Spezifikation überein; zuvor waren sie `moz`-präfixiert ([Firefox Bug 1366415](https://bugzil.la/1366415)).
- Wenn `getUserMedia()` mit einem leeren Einschränkungsset aufgerufen wurde, wurde fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurückgegeben. Dies wurde behoben ([Firefox Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das ursprünglich `mozRtt` genannte Feld des `RTCInboundRTPStreamStats`-Dictionaries wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zusätzlich wurde sein Verhalten zur Übereinstimmung mit dem Standard angepasst: Es enthält einen Double-Precision-Floating-Point-Wert, der die Round-Trip-Zeit basierend auf den RTCP-Timestamps im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (gemäß dem Algorithmus beschrieben in {{RFC(3550, "", "6.4.1")}}). ([Firefox Bug 1344970](https://bugzil.la/1344970)). Beachten Sie jedoch, dass _diese Eigenschaft bald_ in ein anderes Dictionary (`RTCRemoteInboundRTPStreamStats`) verschoben wird ([Firefox Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Dictionary enthält jetzt die Felder `firCount`, `pliCount`, und `nackCount`. Diese liefern Low-Level-Informationen zur Bestimmung der Zuverlässigkeit der Verbindung ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Dictionary enthält jetzt das Feld `framesEncoded`, welches die Anzahl der erfolgreich für den Stream codierten Frames angibt; mit diesen Informationen können Sie die Framerate berechnen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Präferenz](https://bugzil.la/1265755#c36), um die Hardwarevideo-Codierung zu aktivieren, um die Leistung von Videoanrufen zu verbessern und den Akku zu schonen. Diese wird standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert ([Firefox Bug 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox erlaubt derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht gestattet ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Abklingwarnungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox Bug 1361000](https://bugzil.la/1361000)).
- Firefox verlangt derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation jedoch vorschreibt. Ab Firefox 55 wird eine Warnung in der Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration ohne die Angabe unterstützter Codecs angegeben wird. Bald wird das Nichthinzufügen einer gültigen Konfiguration für eines oder mehrerer von Audio und Video eine Ausnahme auslösen ([Firefox Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) ist jetzt in [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexten verfügbar ([Firefox Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1268804](https://bugzil.la/1268804)).
- Das Laden gemischter Inhalte ist jetzt auf localhost erlaubt ([Firefox Bug 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde erneut deaktiviert ([Firefox Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte müssen jetzt "klicken um zu aktivieren" ([Firefox Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Benutzer von Nightly und 50% der Beta-Benutzer wirksam. Für die Firefox 55-Release-Version soll dies für 5% der Benutzer 2 Wochen nach der Freigabe, für 25% der Benutzer 4 Wochen nach der Freigabe und für 100% der Benutzer 6 Wochen nach der Freigabe aktiviert werden ([Firefox Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von einem beliebigen URL-Schema mit Ausnahme von `http://` und `https://` geladen werden ([Firefox Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox auf Linux kann jetzt unter Verwendung des `-headless`-Flags im Kopfmodus ausgeführt werden (siehe [Firefox Bug 1356681](https://bugzil.la/1356681)).

## Entfernung aus der Web-Plattform

### HTML

- Das `xml:base` Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade zu setzen, die im [`style`](/de/docs/Web/HTML/Global_attributes#style) Attribut erscheinen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Bug 1350521](https://bugzil.la/1350521)).

- Das [`scoped`](/de/docs/Web/HTML/Element/style#scoped) Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten hinter einer Einstellung (`layout.css.scoped-style.enabled`) versteckt in Firefox 55+, da kein anderer Browser es unterstützt.
- Die Unterstützung für den obskuren `MSThemeCompatible` Wert des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attributs des {{htmlelement("meta")}}-Elements wurde aus Gecko entfernt. Keine anderen modernen Browser unterstützen es, und es verursachte Kompatibilitätsprobleme ([Firefox Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre Pseudo-Klasse `:-moz-bound-element` wurde entfernt ([Firefox Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre Wert `-moz-anchor-decoration` von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar` Eigenschaft wurde von keinem anderen Browser außer Firefox unterstützt und wurde nie vollständig implementiert außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern gleichzuziehen.
- Die proprietäre Firefox OS-Gerätespeicher-API wurde aus der Plattform entfernt ([Firefox Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog` Parameter der nicht standardmäßigen [`Window.find()`](/de/docs/Web/API/Window/find) Methode (der angegeben werden konnte, um einen "Suchen"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Bug 1270740](https://bugzil.la/1270740)).
- Die nicht standardmäßigen, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Dictionary entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden aus der SVG2 Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>` Attribut ([Firefox Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s command property enables you to open browser action popups, page action popups, and sidebars from the context menu.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides key enables you to override the browser's homepage.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die `browser_style`-Eigenschaft ermöglicht es Ihnen, browserähnliches Styling für [Browser Action Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action), und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu haben.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
