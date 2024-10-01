---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Hinzufügen der Filterung von Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox-Bug 1041895](https://bugzil.la/1041895), [Firefox-Bug 1354508](https://bugzil.la/1354508), [Firefox-Bug 1354507](https://bugzil.la/1354507)) und durch die Verwendung regulärer Ausdrücke ([Firefox-Bug 1354495](https://bugzil.la/1354495)).
- Es ist jetzt möglich, Spalten innerhalb des [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) anzuzeigen und auszublenden ([Firefox-Bug 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox-Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox-Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox-Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten ([Firefox-Bug 1356869](https://bugzil.la/1356869)) zum Network Monitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap`-Header, siehe [Firefox-Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) auf `true` gesetzt ist, verwenden nun {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox in Einklang mit anderen modernen Browsern zu bringen ([Firefox-Bug 1297414](https://bugzil.la/1297414)). Weitere Details finden Sie unter [Unterschiede bei der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation).
- `dom.forms.datetime` wird nun standardmäßig in Nightly aktiviert ([Firefox-Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Das {{cssxref("transform-box")}}-Eigenschaft wurde standardmäßig freigelegt ([Firefox-Bug 1208550](https://bugzil.la/1208550)).
- Die `frames()`-Timing-Funktion wurde implementiert ([Firefox-Bug 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1343512](https://bugzil.la/1343512), [Firefox-Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox-Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte von {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` —, die zuvor implementiert, aber in Release-Kanälen deaktiviert waren, sind nun standardmäßig in allen Kanälen verfügbar ([Firefox-Bug 1253919](https://bugzil.la/1253919)).
- Die Einstellung `layout.css.variables.enabled` wurde vollständig entfernt, was bedeutet, dass das [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties)-Feature immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox-Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties`-Eigenschaft wurde implementiert ([Firefox-Bug 1058040](https://bugzil.la/1058040)).
- Der Winkelwert Null (0) ohne Grad-Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox-Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudo-Element wird jetzt unterstützt; es stimmt mit Text-Hinweisen überein, die innerhalb eines Medien-Elements präsentiert werden ([Firefox-Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}}-Attribut {{SVGAttr("fr")}} wurde implementiert ([Firefox-Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Siehe [Ein Vorgeschmack auf die neuen parallelen Primitiven von JavaScript](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Rest-Operator (`...`) wird jetzt in [Objektdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) unterstützt und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (ECMAScript-Vorschlag der Phase 3: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox-Bug 1339395](https://bugzil.la/1339395)).
- [Async-Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox-Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprachkennzeichen für lokalspezifische Zeichentabellen anzugeben ([Firefox-Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt jetzt die `caseFirst`-Option ([Firefox-Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standardlocale des Browsers anstelle der des Betriebssystems, wenn keine Locale-Einstellung angegeben ist ([Firefox-Bug 1346674](https://bugzil.la/1346674)).
- [Template-Call-Sites-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt kanonisiert pro Realm, basierend auf ihrer Liste der rohen Strings ([Firefox-Bug 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, etc.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die null-längen-typisierte Arrays zurückgeben ([Firefox-Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden sollen, wenn der Browser feststellt, dass vor dem nächsten Neuzeichnen freie Zeit zur Verfügung steht, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungsbeeinträchtigungen zu verursachen ([Firefox-Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und auf macOS in Nightly verfügbar). Diese API macht virtuelle Realitätsgeräte – zum Beispiel Head-Mounted Displays wie Oculus Rift oder HTC Vive – für Web-Apps zugänglich, sodass Entwickler Positions- und Bewegungsinformationen vom Display in Bewegungen um eine 3D-Szene übersetzen und Inhalte in solchen Displays präsentieren können.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen der Schnittmenge eines Ziel-Elements mit einem Vorfahren-Element oder mit dem {{Glossary("Viewport", "Viewport")}} eines obersten Dokuments asynchron zu beobachten — wurde hinzugefügt ([Firefox-Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window)-Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie deren Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixelgenau zu sein. Anstelle einer Ganzzahl, geben diese jetzt einen Gleitkommawert zurück, der die Scrollposition auf subpixelgenauen Displays genauer beschreibt ([Firefox-Bug 1151421](https://bugzil.la/1151421)). Falls nötig, können Sie {{jsxref("Math.round()")}} verwenden, um sie in Ganzzahlen umzurechnen.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um dem neuesten Standard zu entsprechen. Siehe [Firefox-Bug 1354441](https://bugzil.la/1354441), und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, trimmen jetzt automatisch Leerzeichen und entfernen doppelte Tokens ([Firefox-Bug 869788](https://bugzil.la/869788), siehe auch [Trimming von Leerzeichen und Entfernen von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt mit JavaScript dynamisch geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox-Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann keinen `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur noch einen `USVString`. Er kann immer noch ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwenden, das sich in das `href`-Attribut des Objekts umwandelt ([Firefox-Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützten Ereignistypen wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox-Bug 1251198](https://bugzil.la/1251198)).
- Der Eigenschaftswert von [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist jetzt vom Typ `USVString`, nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) nimmt jetzt einen `MessageEventSource`-Wert an (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) ([Firefox-Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde jetzt dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis plus der + `Ctrl`-Taste zugeordnet. Diese Zuordnung wurde implementiert, um es Entwicklern zu ermöglichen, einfache Zoom-Funktionen mit der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu implementieren (Mousewheel + `Ctrl` zoomt normalerweise) ([Firefox-Bug 1052253](https://bugzil.la/1052253)).

#### Selektions-API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie mit anderen Browsern gleichgestellt ist, was die Art und Weise betrifft, wie Editier-Hosts den Fokus erhalten, wenn die Auswahl in sie hinein bewegt wird ([Firefox-Bug 1318312](https://bugzil.la/1318312)). Weitere Details finden Sie unter [Verhalten der Selection API in Bezug auf Änderungen des Fokus von Editier-Hosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes).
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige aktuelle Spezifikationsänderungen zu entsprechen ([Firefox-Bug 1359371](https://bugzil.la/1359371)):

  - Der `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Auch in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Web-Kompatibilität und zur Gleichstellung mit WebKit/Blink ([Firefox-Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und sind in `Window`-Kontexten verfügbar ([Firefox-Bug 1286717](https://bugzil.la/1286717)).

#### Worker

- Worker und Shared Worker können jetzt mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ([Firefox-Bug 1364297](https://bugzil.la/1364297)).
- [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval) unterliegen jetzt der Mindestintervall-Drosselung für Tracking-Skripte in Hintergrundtabs — siehe [Drosselung von Tracking-Timeout-Skripten](/de/docs/Web/API/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox-Bug 1355311](https://bugzil.la/1355311)).

#### Service Worker/Push

- Nachrichten, die an Service Worker-Kontexte gesendet werden (z.B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt, um Konsistenz mit anderen Web-Messaging-Funktionen zu erreichen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert jetzt {{jsxref("ArrayBuffer")}}s und Base64-kodierte Strings als `applicationServerKey`-Werte ([Firefox-Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardmäßiger Konstruktor (der einen Zeichenfolgen-Enum-Wert akzeptierte, der den Verwendungszweck des Kontextes angibt) für die [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle verursachte Fehler, wenn der `options`-Parameter angegeben wurde. Wir haben den nicht-standardmäßigen Konstruktor entfernt. Bitte beachten Sie jedoch, dass der `options`-Parameter in Firefox momentan nicht unterstützt wird und ignoriert wird ([Firefox-Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet jetzt standardmäßig einen Stereo-Audio-Stream, wenn das Quellgerät Stereo-Sound bietet; die Unterstützung zur spezifischen Anforderung von Mono-Eingabe kommt in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56). Dies funktioniert derzeit nur auf dem Desktop; mobile Firefox-Versionen unterstützen derzeit keine Stereo-Audioeingangsquellen ([Firefox-Bug 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [Medienfähigkeiten, -beschränkungen und -einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` entsprechen jetzt der Spezifikation; früher waren sie `moz`-gekennzeichnet ([Firefox-Bug 1366415](https://bugzil.la/1366415)).
- Wenn `getUserMedia()` mit einem leeren Constraints-Set aufgerufen wurde, wurde fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurückgegeben. Dies wurde behoben ([Firefox-Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das ehemals `mozRtt` genannte `RTCInboundRTPStreamStats`-Wörterbuchfeld wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zusätzlich wurde das Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen Gleitkommawert, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (dem im {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus folgend). ([Firefox-Bug 1344970](https://bugzil.la/1344970)). Bitte beachten Sie jedoch, dass _diese Eigenschaft bald_ in ein anderes Wörterbuch (`RTCRemoteInboundRTPStreamStats`) verschoben wird ([Firefox-Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Wörterbuch enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese bieten Informationen auf niedriger Ebene, die verwendet werden können, um zu bestimmen, wie zuverlässig die Verbindung ist ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Wörterbuch enthält jetzt das Feld `framesEncoded`, das die Anzahl der Frames angibt, die erfolgreich für den Stream codiert wurden; mit diesen Informationen können Sie die Bildrate berechnen ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Einstellung](https://bugzil.la/1265755#c36), um die Hardware-Videokodierung zu aktivieren, um die Leistung bei Videoanrufen zu verbessern und den Akkuverbrauch zu senken. Diese wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) standardmäßig aktiviert ([Firefox-Bug 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox erlaubt derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und beginnend mit Firefox 55 werden Deprecation-Warnungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox-Bug 1361000](https://bugzil.la/1361000)).
- Firefox erfordert derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt in den `suggestedConfigurations`-Parameter von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) eingeschlossen wird, was die Spezifikation verlangt. Ab Firefox 55 wird eine Warnung an die Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs anzugeben. Bald wird das Fehlen einer gültigen Konfiguration für eines oder mehrere von Audio und Video eine Ausnahme auslösen ([Firefox-Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API)- und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar ([Firefox-Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1268804](https://bugzil.la/1268804)).
- Das Laden gemischter Inhalte ist jetzt auf `localhost` erlaubt ([Firefox-Bug 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde erneut deaktiviert ([Firefox-Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "click-to-activate" ([Firefox-Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50% der Beta-Nutzer umgesetzt. Für die Firefox 55 Release-Version besteht der Plan, dies 2 Wochen nach der Veröffentlichung bei 5% der Nutzer, 4 Wochen nach der Veröffentlichung bei 25% der Nutzer und 6 Wochen nach der Veröffentlichung bei 100% der Nutzer zu aktivieren ([Firefox-Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von anderen URL-Schemata als `http://` und `https://` geladen werden ([Firefox-Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann jetzt im Headless-Modus mit dem `-headless`-Flag ausgeführt werden (siehe [Firefox-Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Webplattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade im [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut festzulegen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox-Bug 1350521](https://bugzil.la/1350521)).

- Das [`scoped`](/de/docs/Web/HTML/Element/style#scoped) Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einer Voreinstellung (`layout.css.scoped-style.enabled`) versteckt, da kein anderer Browser es unterstützt.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributs des {{htmlelement("meta")}}-Elements wurde aus Gecko entfernt. Kein anderer moderner Browser unterstützt es und es verursachte Kompatibilitätsprobleme ([Firefox-Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element`-Pseudo-Klasse wurde entfernt ([Firefox-Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration`-Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox-Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde von keinem anderen Browser außer Firefox unterstützt und war nie vollständig implementiert, außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um sich anderen Browsern anzupassen.
- Die proprietäre Firefox OS Device Storage API wurde von der Plattform entfernt ([Firefox-Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht standardmäßigen Methode [`Window.find()`](/de/docs/Web/API/Window/find) (der angegeben werden konnte, um einen "Find"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox-Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox-Bug 1270740](https://bugzil.la/1270740)).
- Die nicht standardmäßigen, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Wörterbuch entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox-Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox-Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents`-Schnittstellen wurden aus der SVG2-Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>`-Attribut ([Firefox-Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s Befehlseigenschaft ermöglicht es, Browser-Aktions-Popups, Seiten-Aktions-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [Proxy-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Chrome_settings_overrides-Schlüssel ermöglicht das Überschreiben der Startseite des Browsers.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die browser_style-Eigenschaft ermöglicht es, browserähnliches Styling für [Browser-Aktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu haben.
- [Berechtigungs-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
