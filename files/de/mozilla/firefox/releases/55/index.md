---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Hinzugefügt: Filterung von Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Bug 1041895](https://bugzil.la/1041895), [Firefox Bug 1354508](https://bugzil.la/1354508), [Firefox Bug 1354507](https://bugzil.la/1354507)) und durch die Verwendung von regulären Ausdrücken ([Firefox Bug 1354495](https://bugzil.la/1354495)).
- Die Möglichkeit, Spalten innerhalb des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) anzuzeigen und auszublenden, wurde eingeführt ([Firefox Bug 862855](https://bugzil.la/862855)).
- Remote-IP ([Firefox Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox Bug 1356867](https://bugzil.la/1356867)), Cookies und gesetzte Cookies-Spalten ([Firefox Bug 1356869](https://bugzil.la/1356869)) wurden zum Netzwerkmonitor hinzugefügt.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap`-Header, siehe [Firefox Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden nun {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen und Firefox mit anderen modernen Browsern gleichzusetzen ([Firefox Bug 1297414](https://bugzil.la/1297414)).
- Standardmäßig `dom.forms.datetime` in Nightly aktiviert ([Firefox Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die {{cssxref("transform-box")}}-Eigenschaft wurde standardmäßig verfügbar gemacht ([Firefox Bug 1208550](https://bugzil.la/1208550)).
- Die Timing-Funktion `frames()` wurde implementiert ([Firefox Bug 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}}-Eigenschaft wurde implementiert ([Firefox Bug 1343512](https://bugzil.la/1343512), [Firefox Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die vollständige Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte von {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` — die zuvor implementiert, aber in Veröffentlichungs-Kanälen deaktiviert waren, sind jetzt in allen Kanälen standardmäßig verfügbar ([Firefox Bug 1253919](https://bugzil.la/1253919)).
- Die `layout.css.variables.enabled`-Einstellung wurde vollständig entfernt, was bedeutet, dass die [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Funktionalität jederzeit aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties`-Eigenschaft wurde implementiert ([Firefox Bug 1058040](https://bugzil.la/1058040)).
- Der Winkelwert null (0) ohne Gradmaß wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudo-Element wird jetzt unterstützt; es wird auf Text-Cues angewendet, die innerhalb eines Medien-Elements dargestellt werden ([Firefox Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}}-Attribut {{SVGAttr("fr")}} wurde implementiert ([Firefox Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Lesen Sie [Ein Vorgeschmack auf die neuen parallelen Primitive von JavaScript](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Restoperator (`...`) wird jetzt bei [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt optional einen `locale`-Parameter, um ein Sprach-Tag für länderspezifische Groß- und Kleinschreibung anzugeben ([Firefox Bug 1318403](https://bugzil.la/1318403)).
- Das {{jsxref("Intl/Collator", "Intl.Collator")}}-Objekt unterstützt jetzt die `caseFirst`-Option ([Firefox Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standard-Lokale des Browsers anstelle der des Betriebssystems, wenn keine Lokaleinstellung bereitgestellt wird ([Firefox Bug 1346674](https://bugzil.la/1346674)).
- [Template-Callsite-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm, basierend auf ihrer Liste roher Zeichenfolgen, kanonisiert ([Firefox Bug 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, usw.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoraufrufe ohne Argumente, die zero-length typisierte Arrays zurückgeben ([Firefox Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Präferenz verfügbar war. Diese API ermöglicht es, Aufgaben zu planen, die ausgeführt werden, wenn der Browser der Meinung ist, dass freie Zeit vor dem nächsten Repainting verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig auf Windows aktiviert (und ist auf macOS in Nightly verfügbar). Diese API stellt Virtual-Reality-Geräte wie Head-Mounted Displays, z.B. Oculus Rift oder HTC Vive, Web-Apps zur Verfügung und ermöglicht Entwicklern, Positions- und Bewegungsinformationen von der Anzeige in Bewegungen durch eine 3D-Szene zu übersetzen und Inhalte auf solchen Displays darzustellen.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — bietet eine Möglichkeit, Änderungen im Schnittbereich eines Ziel-Elements mit einem Vorfahren-Element oder einem Top-Level-Dokumenten-{{Glossary("Viewport", "viewport")}} asynchron zu beobachten — wurde hinzugefügt ([Firefox Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) von [`Window`](/de/docs/Web/API/Window) (sowie deren Aliase `pageXOffset` und `pageYOffset`) wurden auf Sub-Pixel-Genauigkeit aktualisiert. Anstatt eine Ganzzahl zurückzugeben, geben diese jetzt einen Gleitkommawert zurück, der die Scroll-Position auf Bildschirmen mit Sub-Pixel-Genauigkeit genauer beschreibt ([Firefox Bug 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie {{jsxref("Math.round()")}} verwenden, um sie in Ganzzahlen zu konvertieren.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um mit der neuesten Spezifikation übereinzustimmen. Siehe [Firefox Bug 1354441](https://bugzil.la/1354441) und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, trimmen jetzt automatisch Leerzeichen und entfernen doppelte Token ([Firefox Bug 869788](https://bugzil.la/869788), siehe auch [Trimming von Leerzeichen und Entfernung von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt nach der Erstellung des entsprechenden HTMLs dynamisch mit JavaScript geändert werden ([Firefox Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL) Konstruktor kann keinen `DOMString` mehr als Basis (2. Parameter) akzeptieren — es wird nur noch ein `USVString` akzeptiert. Er kann weiterhin ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwenden, das sich selbst zu dem `href`-Attribut des Objekts konvertiert ([Firefox Bug 1368950](https://bugzil.la/1368950)).

#### DOM Events

- Die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützten Ereignistypen wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox Bug 1251198](https://bugzil.la/1251198)).
- Der Eigenschaftswert [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist jetzt von Typ `USVString`, nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) nimmt jetzt einen `MessageEventSource`-Wert an (dies kann ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein) ([Firefox Bug 1311324](https://bugzil.la/1311324)).
- Die Geste zum Zoomen mit zwei Fingern wurde jetzt dem `wheel`-Ereignis plus der `Ctrl`-Taste zugeordnet. Diese Zuordnung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoomfunktionen mit der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu implementieren (Mausrad + `Ctrl` vergrößert üblicherweise) ([Firefox Bug 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Auswahl-API](/de/docs/Web/API/Selection) wurde aktualisiert, damit sie in Bezug auf die Fokussierung von Editier-Hosts bei Bewegung der Auswahl zu anderen Browsern passt ([Firefox Bug 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Auswahl-API in Bezug auf die Änderung des Fokus von Editier-Hosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für mehr Details.
- Die [`Selection`](/de/docs/Web/API/Selection)-API wurde aktualisiert, um einigen kürzlich erfolgten Spezifikationsänderungen zu entsprechen ([Firefox Bug 1359371](https://bugzil.la/1359371)):
  - Der Parameter `offset` der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der Parameter `node` der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullable.
  - Der Parameter `partialContainment` der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection)-API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase für [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Web-Kompatibilitäts- und WebKit/Blink-Paritäts-Gründen ([Firefox Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und für `Window`-Kontexte freigegeben ([Firefox Bug 1286717](https://bugzil.la/1286717)).

#### Worker

- Worker und Shared Worker können jetzt mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ([Firefox Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen jetzt einem minimalen Intervall-Drosseln für Tracking-Skripte in Hintergrund-Tabs — siehe [Drosseln von Tracking-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_scripts) ([Firefox Bug 1355311](https://bugzil.la/1355311)).

#### Service Worker/Push

- Nachrichten, die an Service Worker-Kontexte gesendet werden (z.B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte repräsentiert, um Konsistenz mit anderen Web-Messaging-Funktionen herzustellen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert jetzt {{jsxref("ArrayBuffer")}}s und Base64-kodierte Zeichenfolgen als `applicationServerKey`-Werte ([Firefox Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardmäßiger Konstruktor (der einen Zeichenfolgen-Enum-Wert akzeptierte, der den Zweck angibt, für den der Kontext verwendet werden würde) für die Schnittstelle [`AudioContext`](/de/docs/Web/API/AudioContext) verursachte Fehler, wenn der `options`-Parameter bereitgestellt wurde. Wir haben den nicht standardmäßigen Konstruktor entfernt. Beachten Sie jedoch, dass der `options`-Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) stellt jetzt standardmäßig einen Stereo-Audio-Stream bereit, wenn das Quellgerät Stereo-Sound liefert; die Unterstützung, speziell Mono-Eingang anzufordern, wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) verfügbar sein. Dies funktioniert derzeit nur auf dem Desktop; mobiles Firefox unterstützt derzeit keine Stereo-Audioquellen ([Firefox Bug 971528](https://bugzil.la/971528)).
- Die [medialen Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` von `getUserMedia()` entsprechen jetzt der Spezifikation; sie waren früher `moz`-präfixiert ([Firefox Bug 1366415](https://bugzil.la/1366415)).
- Bei Aufruf mit einem leeren Einschränkungssatz gab `getUserMedia()` fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurück. Dies wurde behoben ([Firefox Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das Dictionary-Feld `RTCInboundRTPStreamStats`, ehemals `mozRtt` genannt, wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; außerdem wurde sein Verhalten angepasst, um der Standard zu entsprechen: Es enthält einen Doppelpräzisions-Gleitkommawert, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Rezeptor-Bericht schätzt, gemessen in Sekunden (nach dem im {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus). ([Firefox Bug 1344970](https://bugzil.la/1344970)). Beachten Sie jedoch, dass _dieses Feld bald_ in ein anderes Dictionary (`RTCRemoteInboundRTPStreamStats`) verschoben wird ([Firefox Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Dictionary enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern niedrigschwellige Informationen, die verwendet werden können, um zu bestimmen, wie zuverlässig die Verbindung ist ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Dictionary enthält jetzt das Feld `framesEncoded`, das die Anzahl der Frames meldet, die erfolgreich für den Stream codiert wurden; mit diesen Informationen können Sie die Bildrate berechnen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Pref](https://bugzil.la/1265755#c36), um die Hardware-Video-Codierung zu aktivieren, um die Leistung von Videoanrufen zu verbessern und den Akku zu schonen. Dies wird standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert ([Firefox Bug 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox erlaubt derzeit die Verwendung der Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Deprecation-Warnungen in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox Bug 1361000](https://bugzil.la/1361000)).
- Firefox erfordert derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im Parameter `suggestedConfigurations` enthalten sein muss, der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, wie es die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung an die Web-Konsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs zu spezifizieren. Schon bald wird die Nichteinschließung einer gültigen Konfiguration für eines oder mehrere von Audio und Video eine Ausnahme auslösen ([Firefox Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die [\`WEBGL_compressed_texture_s3tc_srgb\`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)-Erweiterung ist jetzt in [WebGL](/de/docs/Web/API/WebGL_API)- und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten verfügbar ([Firefox Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1268804](https://bugzil.la/1268804)).
- Das Laden von gemischtem Inhalt ist jetzt auf localhost erlaubt ([Firefox Bug 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde erneut deaktiviert ([Firefox Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalt ist jetzt "Click-to-Activate" ([Firefox Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50% der Beta-Nutzer wirksam. Für die Firefox 55-Veröffentlichungsversion ist geplant, dies 2 Wochen nach der Veröffentlichung für 5% der Nutzer, 4 Wochen nach der Veröffentlichung für 25% der Nutzer und 6 Wochen nach der Veröffentlichung für 100% der Nutzer zu aktivieren ([Firefox Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von jedem URL-Schema außer `http://` und `https://` geladen werden ([Firefox Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox auf Linux kann jetzt im Headless-Modus mit dem `-headless`-Flag ausgeführt werden (siehe [Firefox Bug 1356681](https://bugzil.la/1356681)).

## Entfernt aus der Web-Plattform

### HTML

- Das Attribut `xml:base` kann nicht mehr verwendet werden, um die Basis-URL für Pfade im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut festzulegen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Bug 1350521](https://bugzil.la/1350521)).

- Das {{htmlelement("style")}}-Element-Attribut `scoped` wurde in Inhaltsdokumenten ab Firefox 55+ hinter einer Pref (`layout.css.scoped-style.enabled`) versteckt, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des {{htmlelement("meta")}}-Element-Attributs [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt dies, und es verursachte Kompatibilitätsprobleme ([Firefox Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre Pseudo-Klasse `:-moz-bound-element` wurde entfernt ([Firefox Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration`-Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde von keinem anderen Browser als Firefox unterstützt und war niemals vollständig implementiert, außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern übereinzustimmen.
- Die proprietäre Firefox OS Device Storage API wurde aus der Plattform entfernt ([Firefox Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht-standardmäßigen Methode [`Window.find()`](/de/docs/Web/API/Window/find) (der angegeben werden konnte, um ein "Suchen"-Dialogfeld im Browser zu öffnen) wurde entfernt ([Firefox Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Bug 1270740](https://bugzil.la/1270740)).
- Die nicht-standardmäßigen, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Dictionary entfernt und werden nicht mehr von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) unterstützt ([Firefox Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent`- und `SVGZoomEvents`-Schnittstellen wurden aus der SVG2-Spezifikation und aus Gecko entfernt, zusammen mit dem `onzoom <svg>`-Attribut ([Firefox Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s command-Eigenschaft ermöglicht es, Popups für Browseraktionen, Seitenaktionen und Seitenleisten aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Das `chrome_settings_overrides`-Schlüsselwort ermöglicht es, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die Eigenschaft `browser_style` ermöglicht browserähnliches Styling für [Browser-Aktion-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui).
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
