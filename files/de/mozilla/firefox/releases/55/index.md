---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen von Filterung von Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Bug 1041895](https://bugzil.la/1041895), [Firefox Bug 1354508](https://bugzil.la/1354508), [Firefox Bug 1354507](https://bugzil.la/1354507)) und durch Verwendung von regulären Ausdrücken ([Firefox Bug 1354495](https://bugzil.la/1354495)).
- Möglichkeit, Spalten im [Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) anzuzeigen und auszublenden ([Firefox Bug 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten ([Firefox Bug 1356869](https://bugzil.la/1356869)) zum Netzwerk-Monitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird nun unterstützt (vorherige Versionen unterstützten den veralteten `X-SourceMap` Header, siehe [Firefox Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden nun {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox auf den neuesten Stand mit anderen modernen Browsern zu bringen ([Firefox Bug 1297414](https://bugzil.la/1297414)). Siehe [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) für weitere Details.
- `dom.forms.datetime` ist standardmäßig in Nightly aktiviert ([Firefox Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die Eigenschaft {{cssxref("transform-box")}} ist jetzt standardmäßig verfügbar ([Firefox Bug 1208550](https://bugzil.la/1208550)).
- Die `frames()` Timing-Funktion wurde implementiert ([Firefox Bug 1248340](https://bugzil.la/1248340)).
- Die Eigenschaft {{cssxref("text-justify")}} wurde implementiert ([Firefox Bug 1343512](https://bugzil.la/1343512), [Firefox Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die vollständige Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte `inline-start` und `inline-end` der Eigenschaften {{cssxref("float")}} / {{cssxref("clear")}}, die vorher implementiert, aber in den Release-Kanälen deaktiviert waren, sind jetzt standardmäßig in allen Kanälen verfügbar ([Firefox Bug 1253919](https://bugzil.la/1253919)).
- Die `layout.css.variables.enabled`-Einstellung wurde vollständig entfernt, was bedeutet, dass das [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Feature jetzt immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1312328](https://bugzil.la/1312328)).
- Das proprietäre `-moz-context-properties` wurde implementiert ([Firefox Bug 1058040](https://bugzil.la/1058040)).
- Der Winkelwert Null (0) ohne Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}} Pseudoelement wird nun unterstützt; es stimmt mit Textmarkierungen überein, die in einem Medienelement präsentiert werden ([Firefox Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{ SVGAttr("fr") }}-Attribut wurde implementiert ([Firefox Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Siehe [Ein Vorgeschmack auf Javascripts neue Parallelprimitiven](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Rest-Operator (`...`) wird nun in [Objekt-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt, und der Spread-Operator (`...`) funktioniert jetzt in [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (ECMAScript Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden nun unterstützt ([Firefox Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprachkennzeichen für gebietsspezifische Fallzuordnungen anzugeben ([Firefox Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt nun die Option `caseFirst` ([Firefox Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet nun das Standardgebietsschema des Browsers anstelle des Standardgebietsschemas des Betriebssystems, wenn keine Gebietsschema-Einstellung angegeben wird ([Firefox Bug 1346674](https://bugzil.la/1346674)).
- [Vorlagenaufrufstellenobjekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm kanonisiert, basierend auf ihrer Liste der Rohstrings ([Firefox Bug 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, usw.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die typisierte Arrays mit der Länge Null zurückgeben ([Firefox Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [API für die kooperative Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden sollen, wenn der Browser feststellt, dass vor dem nächsten Neuzeichnen freie Zeit verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und ist in Nightly unter macOS verfügbar). Diese API stellt virtuelle Realitätsgeräte – beispielsweise head-mounted Displays wie Oculus Rift oder HTC Vive – Web-Apps zur Verfügung und ermöglicht es Entwicklern, Positions- und Bewegungsinformationen des Displays in Bewegungen in einer 3D-Szene zu übersetzen und Inhalte in solchen Displays darzustellen.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen des Schnittpunkts eines Ziel-Elements mit einem Vorfahren-Element oder mit dem Ansichtsfenster eines top-level Dokuments asynchron zu beobachten — wurde hinzugefügt ([Firefox Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) des [`Window`](/de/docs/Web/API/Window) (sowie deren Aliase `pageXOffset` und `pageYOffset`) sind jetzt Unterpixel-genau. Anstelle einer ganzen Zahl geben diese jetzt einen Gleitkommawert zurück, der die Scrollposition auf Unterpixel-genauen Displays genauer beschreibt ([Firefox Bug 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie {{jsxref("Math.round()")}} verwenden, um sie in ganze Zahlen zu konvertieren.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen. Siehe [Firefox Bug 1354441](https://bugzil.la/1354441), sowie [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, trimmen nun automatisch Leerzeichen und entfernen doppelte Token ([Firefox Bug 869788](https://bugzil.la/869788), siehe auch [Trimming von Leerzeichen und Entfernung von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt dynamisch mit JavaScript geändert werden, nachdem das äquivalente HTML erstellt wurde ([Firefox Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann keine `DOMString` mehr als seine Basis (2. Parameter) akzeptieren — er akzeptiert nur `USVString`. Es kann weiterhin ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt für die Basis verwendet werden, das sich in das `href`-Attribut des Objekts umwandelt ([Firefox Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die vom [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)-Methode unterstützten Ereignistypen wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin)-Eigenschaft ist jetzt vom Typ `USVString`, nicht `DOMString`, und die [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source)-Eigenschaft verwendet nun einen `MessageEventSource`-Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) ([Firefox Bug 1311324](https://bugzil.la/1311324)).
- Die Geste "Pinch-to-Zoom" wurde nun auf das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis plus die `Strg`-Taste abgebildet. Diese Abbildung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoom-Funktionalitäten mit der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu implementieren (Mausrad + `Strg` zoomt üblicherweise) ([Firefox Bug 1052253](https://bugzil.la/1052253)).

#### Selection API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, um die Fokussierung von Editierhosts mit anderen Browsern abzugleichen, wenn die Auswahl in diese bewegt wird ([Firefox Bug 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Selection-API in Bezug auf Änderungen der Editierhost-Fokussierung](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für mehr Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige kürzliche spezifikationsbedingte Änderungen widerzuspiegeln ([Firefox Bug 1359371](https://bugzil.la/1359371)):

  - Die `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) sind jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase für [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, um die Kompatibilität mit dem Web und die Parität mit WebKit/Blink sicherzustellen ([Firefox Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window`-Kontexten verfügbar gemacht ([Firefox Bug 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können jetzt mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout),
  [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen nun einem Mindestintervall-Drosselung für Tracking-Skripte in Hintergrund-Tabs — siehe [Drosselung von Tracking-Timeout-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox Bug 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- Nachrichten, die an Service-Worker-Kontexte gesendet werden (z. B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden nun durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt, um Konsistenz mit anderen Web-Messaging-Funktionen zu gewährleisten.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert nun {{jsxref("ArrayBuffer")}}s und Base64-codierte Strings als `applicationServerKey`-Werte ([Firefox Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht-standardmäßiger Konstruktor (der einen String-Enum-Wert akzeptierte, der den Zweck angibt, für den der Kontext verwendet werden würde) für die [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle verursachte Fehler, wenn der `options`-Parameter bereitgestellt wurde. Wir haben den nicht-standardmäßigen Konstruktor entfernt. Beachten Sie jedoch, dass der `options`-Parameter derzeit in Firefox nicht unterstützt wird und ignoriert wird ([Firefox Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) liefert jetzt einen Stereo-Audiostream standardmäßig, wenn das Quellgerät Stereo-Sound bereitstellt; die Unterstützung für gezielt monomatischen Eingang wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf dem Desktop; mobiler Firefox unterstützt derzeit keine Stereo-Audioeingangsquellen ([Firefox Bug 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [Medienfähigkeit-, Einschränkungen- und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` entsprechen jetzt der Spezifikation; früher waren sie `moz`-geprägt ([Firefox Bug 1366415](https://bugzil.la/1366415)).
- Wenn mit einem leeren Einschränkungssatz aufgerufen, gab `getUserMedia()` fälschlicherweise `NotSupportedError` statt `TypeError` zurück. Dies wurde behoben ([Firefox Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCInboundRTPStreamStats`-Dictionary-Feld, früher `mozRtt` genannt, wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zusätzlich wurde sein Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen doppelt genauen Gleitkommawert, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (gemäß dem in {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus). ([Firefox Bug 1344970](https://bugzil.la/1344970)). Es sollte jedoch darauf hingewiesen werden, dass _diese Eigenschaft bald_ zu einem anderen Dictionary (`RTCRemoteInboundRTPStreamStats`) verschoben wird ([Firefox Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Dictionary enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese geben Niedriglevel-Informationen zurück, die verwendet werden können, um zu bestimmen, wie zuverlässig die Verbindung ist ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Dictionary enthält jetzt das Feld `framesEncoded`, das die Anzahl der Frames meldet, die erfolgreich für den Stream codiert wurden; mit diesen Informationen können Sie die Bildrate berechnen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Einstellmöglichkeit](https://bugzil.la/1265755#c36), um die Hardware-Videocodierung zu aktivieren, um die Leistung von Videoanrufen zu verbessern und die Akkulaufzeit zu verlängern. Wird standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert ([Firefox Bug 1265755](https://bugzil.la/1265755)).

#### API für verschlüsselte Medienerweiterungen

- Firefox erlaubt derzeit die Verwendung von verschlüsselten Medienerweiterungen in unsicheren Kontexten, obwohl dies in der Spezifikation nicht zugelassen ist. Dies wird in naher Zukunft geändert, und ab Firefox 55 werden Deprecation-Warnungen auf die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox Bug 1361000](https://bugzil.la/1361000)).
- Derzeit erfordert Firefox nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im Parameter `suggestedConfigurations` enthalten ist, der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung an die Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben ist, ohne unterstützte Codecs anzugeben. Bald wird das Nicht-Einschließen einer gültigen Konfiguration für Audio und/oder Video eine Ausnahme auslösen ([Firefox Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)-Erweiterung ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar ([Firefox Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1268804](https://bugzil.la/1268804)).
- Das Laden von gemischten Inhalten ist nun auf `localhost` erlaubt ([Firefox Bug 903966](https://bugzil.la/903966)).
- Das Laden von remote JAR-Dateien wurde erneut deaktiviert ([Firefox Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "klick-zum-Aktivieren" ([Firefox Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Benutzer von Nightly in Kraft gesetzt, und 50 % der Beta-Benutzer. Für die Release-Version von Firefox 55 ist geplant, dies für 5 % der Benutzer 2 Wochen nach der Veröffentlichung, für 25 % der Benutzer 4 Wochen nach der Veröffentlichung und für 100 % der Benutzer 6 Wochen nach der Veröffentlichung zu aktivieren ([Firefox Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von einem anderen URL-Schema als `http://` und `https://` geladen werden ([Firefox Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann jetzt im sogenannten Headless-Modus mit dem `-headless`-Flag ausgeführt werden (siehe [Firefox Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Web-Plattform

### HTML

- Das Attribut `xml:base` kann nicht mehr verwendet werden, um die Basis-URL für Pfade festzulegen, die im [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut erscheinen, zum Beispiel

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Bug 1350521](https://bugzil.la/1350521)).

- Das [`scoped`](/de/docs/Web/HTML/Element/style#scoped)-Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einer Einstellung (`layout.css.scoped-style.enabled`) versteckt, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributs des {{htmlelement("meta")}}-Elements wurde aus Gecko entfernt. Kein anderer moderner Browser unterstützt es und es verursachte Kompatibilitätsprobleme ([Firefox Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element` Pseudo-Klasse wurde entfernt ([Firefox Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration` Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde von keinem anderen Browser außer Firefox unterstützt und war nie vollständig implementiert, außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern in Einklang zu stehen.
- Die proprietäre Firefox OS Device Storage API wurde von der Plattform entfernt ([Firefox Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht standardmäßigen [`Window.find()`](/de/docs/Web/API/Window/find)-Methode (der angegeben werden konnte, um ein Suchdialog im Browser zu öffnen) wurde entfernt ([Firefox Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Bug 1270740](https://bugzil.la/1270740)).
- Die nicht standardmäßigen, Mozilla-spezifischen, WebRTC Angeboten Optionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Dictionary entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Bug 1196974](https://bugzil.la/1196974)).
- Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden aus der SVG2-Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>`-Attribut ([Firefox Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on und Mozilla-Entwickler

### WebExtensions

- [Die `command` Eigenschaft von contextMenus.create() ermöglicht Ihnen, Browser-Aktions-Popups, Page-Aktions-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Der chrome_settings_overrides Schlüssel ermöglicht Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die `browser_style`-Eigenschaft ermöglicht Ihnen, browserartige Stile für [Browser-Aktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionenseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu haben.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
