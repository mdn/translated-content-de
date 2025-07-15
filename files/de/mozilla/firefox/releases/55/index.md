---
title: Firefox 55 für Entwickler
short-title: Firefox 55
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen der Filterung von Netzwerkanfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Fehler 1041895](https://bugzil.la/1041895), [Firefox Fehler 1354508](https://bugzil.la/1354508), [Firefox Fehler 1354507](https://bugzil.la/1354507)) und durch die Verwendung regulärer Ausdrücke ([Firefox Fehler 1354495](https://bugzil.la/1354495)).
- Möglichkeit zum Ein- und Ausblenden von Spalten innerhalb des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt ([Firefox Fehler 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox Fehler 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Fehler 1345489](https://bugzil.la/1345489)), Schema ([Firefox Fehler 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten ([Firefox Fehler 1356869](https://bugzil.la/1356869)) zum Netzwerkmonitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap` Header, siehe [Firefox Fehler 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden nun {{htmlelement("div")}}-Elemente, um unterschiedliche Textzeilen zu trennen und Firefox somit mit anderen modernen Browsern gleichzustellen ([Firefox Fehler 1297414](https://bugzil.la/1297414)).
- `dom.forms.datetime` ist standardmäßig in Nightly aktiviert ([Firefox Fehler 1366188](https://bugzil.la/1366188)).

### CSS

- Die {{cssxref("transform-box")}}-Eigenschaft ist standardmäßig verfügbar ([Firefox Fehler 1208550](https://bugzil.la/1208550)).
- Die `frames()`-Timing-Funktion wurde implementiert ([Firefox Fehler 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}}-Eigenschaft wurde implementiert ([Firefox Fehler 1343512](https://bugzil.la/1343512), [Firefox Fehler 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Klemmlänge in {{cssxref("repeat", "repeat()")}} ([Firefox Fehler 1359060](https://bugzil.la/1359060)).
- Die logischen Werte für {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` — die zuvor implementiert, aber in den Veröffentlichungskanälen deaktiviert waren, sind jetzt in allen Kanälen standardmäßig verfügbar ([Firefox Fehler 1253919](https://bugzil.la/1253919)).
- Die Einstellung `layout.css.variables.enabled` wurde vollständig entfernt, was bedeutet, dass die [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)-Funktion immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Fehler 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties`-Eigenschaft wurde implementiert ([Firefox Fehler 1058040](https://bugzil.la/1058040)).
- Null (0) Winkelwert ohne Grad-Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Fehler 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudoelement wird jetzt unterstützt; es wird auf Textanweisungen angewendet, die innerhalb eines Medienelements präsentiert werden ([Firefox Fehler 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{ SVGAttr("fr") }}-Attribut wurde implementiert ([Firefox Fehler 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Sehen Sie sich [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics an.
- Der Rest-Operator (`...`) wird jetzt in [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (ECMAScript Vorschlag Stufe 3: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Fehler 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Fehler 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprach-Tag für lokalspezifische Groß- und Kleinschreibungen anzugeben ([Firefox Fehler 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt jetzt die Option `caseFirst` ([Firefox Fehler 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet nun die Standardsprache des Browsers anstelle der des Betriebssystems, wenn keine Spracheinstellungen angegeben sind ([Firefox Fehler 1346674](https://bugzil.la/1346674)).
- [Vorlagenaufrufstellen-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm kanonisiert, basierend auf ihrer Liste von Rohzeichenfolgen ([Firefox Fehler 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}} usw.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die typisierte Arrays mit null Länge zurückgeben ([Firefox Fehler 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist nun standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden, wenn der Browser feststellt, dass vor dem nächsten Neuzeichnen freie Zeit verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox Fehler 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig auf Windows aktiviert (und ist auf macOS in Nightly verfügbar). Diese API macht virtuelle Realität Geräte wie z.B. Head-Mounted Displays wie das Oculus Rift oder HTC Vive für Web-Apps zugänglich und ermöglicht es Entwicklern, Positions- und Bewegungsinformationen vom Display in Bewegungen um eine 3D-Szene zu übersetzen und Inhalte in solchen Displays darzustellen.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Veränderungen im Schnittpunkt eines Ziel-Elements mit einem Vorfahrenelement oder mit dem obersten Dokument-Viewport asynchron zu beobachten — wurde hinzugefügt ([Firefox Fehler 1321865](https://bugzil.la/1321865)).

#### DOM

- Die Eigenschaften des [`Window`](/de/docs/Web/API/Window) [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie deren Aliasse `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixelgenau zu sein. Anstatt einen ganzzahligen Wert zurückzugeben, geben diese nun einen Gleitkommawert zurück, der die Scroll-Position auf subpixelgenauen Displays genauer beschreibt ([Firefox Fehler 1151421](https://bugzil.la/1151421)). Falls notwendig, können Sie {{jsxref("Math.round()")}} verwenden, um sie in Ganzzahlen umzuwandeln.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere zugehörige Funktionen) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen. Siehe [Firefox Fehler 1354441](https://bugzil.la/1354441), und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, trimmen nun automatisch Leerzeichen und entfernen doppelte Tokens ([Firefox Fehler 869788](https://bugzil.la/869788), siehe auch [Trimmings von Leerzeichen und Entfernen von Dubletten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt dynamisch mit JavaScript geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox Fehler 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann nun keine `DOMString` als Basis (2. Parameter) mehr akzeptieren — er akzeptiert nur noch einen `USVString`. Er kann jedoch weiterhin ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwenden, welches sich selbst in das `href`-Attribut des Objekts umwandelt ([Firefox Fehler 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützten Ereignistypen wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox Fehler 1251198](https://bugzil.la/1251198)).
- Der Eigenschaftswert von [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist nun vom Typ `USVString`, nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) akzeptiert jetzt einen `MessageEventSource`-Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann) ([Firefox Fehler 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun auf das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis plus die + `Ctrl`-Taste abgebildet. Diese Abbildung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoom-Funktionen unter Verwendung der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu implementieren (Mausrad + `Ctrl` zoomt häufig) ([Firefox Fehler 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, damit sie mit anderen Browsern in Bezug auf die Art und Weise, wie Editierhosts den Fokus erhalten, wenn die Auswahl in sie hinein verschoben wird, übereinstimmt ([Firefox Fehler 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Selection-API in Bezug auf Änderungen der Editing-Host-Fokus](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige kürzliche Spezifikationsänderungen zu übernehmen ([Firefox Fehler 1359371](https://bugzil.la/1359371)):
  - Der `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullbar.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Auch in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Kompatibilitätsgründen mit dem Web und aus Gründen der WebKit/Blink-Parität ([Firefox Fehler 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und für `Window`-Kontexte zugänglich gemacht ([Firefox Fehler 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können nun mit einer identifizierenden `name` Eigenschaft erstellt werden. Sehen Sie die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox Fehler 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen nun der Minimalintervall-Drosselung für Tracking-Skripte in Hintergrund-Tabs — siehe [Drosselung von Tracking-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_scripts) ([Firefox Fehler 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- Nachrichten, die an Service-Worker-Kontexte gesendet werden (z. B. als Ereignisobjekte von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte repräsentiert, um Konsistenz mit anderen Web-Messaging-Funktionen zu gewährleisten.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert jetzt {{jsxref("ArrayBuffer")}}s und Base64-codierte Zeichenfolgen als `applicationServerKey`-Werte ([Firefox Fehler 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardmäßiger Konstruktor (der einen Zeichenfolgen-Enum-Wert akzeptierte, der den Verwendungszweck angibt) für die [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle verursachte Fehler, wenn der `options`-Parameter angegeben wurde. Wir haben den nicht standardmäßigen Konstruktor entfernt. Beachten Sie jedoch, dass der `options`-Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Fehler 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) stellt jetzt standardmäßig einen Stereo-Audiostream bereit, wenn das Quellgerät Stereo-Sound bietet; die Unterstützung, um speziell Mono-Eingaben anzufordern, wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf Desktops; mobiles Firefox unterstützt derzeit keine Stereo-Audioeingangsquellen ([Firefox Fehler 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [Medienfähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` stimmen nun mit der Spezifikation überein; früher waren sie `moz`-geprägt ([Firefox Fehler 1366415](https://bugzil.la/1366415)).
- Wenn `getUserMedia()` mit einem leeren Einschränkungssatz aufgerufen wurde, wurde fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurückgegeben. Dies wurde behoben ([Firefox Fehler 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Das ehemals `mozRtt` genannte Feld des `RTCInboundRTPStreamStats`-Dictionaries wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zudem wurde sein Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen doppeltgenauen Fließkommawert, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (nach dem Algorithmus beschrieben in {{RFC(3550, "", "6.4.1")}}). ([Firefox Fehler 1344970](https://bugzil.la/1344970)). Beachten Sie jedoch, dass _diese Eigenschaft bald in ein anderes Dictionary_ (`RTCRemoteInboundRTPStreamStats`) verschoben wird ([Firefox Fehler 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Dictionary umfasst jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern niedrigstufige Informationen, die zur Bestimmung der Zuverlässigkeit der Verbindung verwendet werden können ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Dictionary umfasst jetzt das Feld `framesEncoded`, das die Anzahl der Frames berichtet, die erfolgreich für den Stream codiert wurden; mit diesen Informationen können Sie die Bildrate berechnen ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Voreinstellung](https://bugzil.la/1265755#c36), um die Hardware-Video-Codierung zu aktivieren, um die Videokonferenzleistung zu verbessern und die Batterie zu schonen. Soll in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) standardmäßig aktiviert werden ([Firefox Fehler 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox erlaubt derzeit die Nutzung von Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Warnmeldungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox Fehler 1361000](https://bugzil.la/1361000)).
- Firefox verlangt derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung an die Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration ohne Angabe unterstützter Codecs angegeben wird. Bald wird das Fehlen einer gültigen Konfiguration für eines oder mehrerer Audio- und Videokonfigurationen eine Ausnahme auslösen ([Firefox Fehler 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) Erweiterung ist nun für [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar ([Firefox Fehler 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1268804](https://bugzil.la/1268804)).
- Das Laden von gemischten Inhalten ist jetzt auf localhost erlaubt ([Firefox Fehler 903966](https://bugzil.la/903966)).
- Das Laden von entfernten JAR-Dateien wurde erneut deaktiviert ([Firefox Fehler 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "klick-aktiviert" ([Firefox Fehler 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50 % der Beta-Nutzer umgesetzt. Bei der Veröffentlichung von Firefox 55 ist geplant, dies 2 Wochen nach der Veröffentlichung für 5 % der Nutzer zu aktivieren, 4 Wochen nach der Veröffentlichung für 25 % der Nutzer und 6 Wochen nach der Veröffentlichung für 100 % der Nutzer ([Firefox Fehler 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von einer beliebigen URL-Schema außer `http://` und `https://` geladen werden ([Firefox Fehler 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann jetzt im Headless-Modus mit dem `-headless`-Flag ausgeführt werden (siehe [Firefox Fehler 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Webplattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade im [:style](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut festzulegen, zum Beispiel –

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Fehler 1350521](https://bugzil.la/1350521)).

- Das `scoped`-Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einer Voreinstellung (`layout.css.scoped-style.enabled`) versteckt, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des {{htmlelement("meta")}}-Elements [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt diesen Wert, und er verursachte Kompatibilitätsprobleme ([Firefox Fehler 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element` Pseudo-Klasse wurde entfernt ([Firefox Fehler 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration` Wert der {{cssxref("text-decoration-line")}}-Eigenschaft wurde entfernt ([Firefox Fehler 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar` Eigenschaft wurde von keinem anderen als Firefox-Browser unterstützt, und sie wurde außer auf macOS nie vollständig implementiert. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern gleichzuziehen.
- Die proprietäre Firefox OS Device Storage API wurde aus der Plattform entfernt ([Firefox Fehler 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog` Parameter der nicht-standardmäßigen [`Window.find()`](/de/docs/Web/API/Window/find) Methode (die angegeben werden konnte, um ein "Find"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox Fehler 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Fehler 1270740](https://bugzil.la/1270740)).
- Die nicht-standardmäßigen, Mozilla-spezifischen, WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Dictionary entfernt und werden nicht mehr von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) unterstützt ([Firefox Fehler 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Fehler 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden aus der SVG2-Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>` Attribut ([Firefox Fehler 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s command property ermöglicht es Ihnen, Browser-Aktion-Popups, Seiten-Aktion-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides Schlüssel ermöglicht es Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- browser_style Eigenschaften ermöglicht es Ihnen, browser-ähnliche Styles für [Browser Aktion-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Seitenbereich](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionen-Seiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu haben.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)
