---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen der Filterung von Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox-Bug 1041895](https://bugzil.la/1041895), [Firefox-Bug 1354508](https://bugzil.la/1354508), [Firefox-Bug 1354507](https://bugzil.la/1354507)) und mittels regulärer Ausdrücke ([Firefox-Bug 1354495](https://bugzil.la/1354495)).
- Es ist nun möglich, Spalten im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ein- und auszublenden ([Firefox-Bug 862855](https://bugzil.la/862855)).
- Hinzufügung von Remote-IP ([Firefox-Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox-Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox-Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten ([Firefox-Bug 1356869](https://bugzil.la/1356869)) zum Netzwerkmonitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird nun unterstützt (vorherige Versionen unterstützten den veralteten `X-SourceMap`-Header, siehe [Firefox-Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist, verwenden nun {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox an andere moderne Browser anzugleichen ([Firefox-Bug 1297414](https://bugzil.la/1297414)).
- Aktivierung von `dom.forms.datetime` standardmäßig in Nightly ([Firefox-Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die Eigenschaft {{cssxref("transform-box")}} wird standardmäßig freigegeben ([Firefox-Bug 1208550](https://bugzil.la/1208550)).
- Implementierung der `frames()`-Timing-Funktion ([Firefox-Bug 1248340](https://bugzil.la/1248340)).
- Implementierung der Eigenschaft {{cssxref("text-justify")}} ([Firefox-Bug 1343512](https://bugzil.la/1343512), [Firefox-Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Spannweite in {{cssxref("repeat", "repeat()")}} ([Firefox-Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` — die zuvor implementiert, aber in Release-Kanälen ausgeschaltet waren, sind jetzt standardmäßig in allen Kanälen verfügbar ([Firefox-Bug 1253919](https://bugzil.la/1253919)).
- Die Präferenz `layout.css.variables.enabled` wurde vollständig entfernt, d.h. die [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Funktion ist jetzt immer aktiviert und kann nicht mehr deaktiviert werden ([Firefox-Bug 1312328](https://bugzil.la/1312328)).
- Implementierung der proprietären Eigenschaft `-moz-context-properties` ([Firefox-Bug 1058040](https://bugzil.la/1058040)).
- Der Nullwinkelwert (0) ohne Grad-Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox-Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}} Pseudoelement wird jetzt unterstützt; es stimmt mit Textmarken überein, die innerhalb eines Medienelements präsentiert werden ([Firefox-Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{ SVGAttr("fr") }} Attribut wurde implementiert ([Firefox-Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Lesen Sie [Ein Vorgeschmack auf die neuen Parallel-Primitiven von JavaScript](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Rest-Operator (`...`) wird nun in [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox-Bug 1339395](https://bugzil.la/1339395)).
- [Async-Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox-Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter zur Angabe eines Sprachcodes für lokalspezifische Groß-/Kleinschreibungen ([Firefox-Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt jetzt die `caseFirst`-Option ([Firefox-Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standard-Lokale des Browsers anstelle der Standard-Lokale des Betriebssystems, wenn keine Lokaleinstellung angegeben ist ([Firefox-Bug 1346674](https://bugzil.la/1346674)).
- [Vorlage-Aufrufstellen-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm standardisiert, basierend auf ihrer Liste roher Strings ([Firefox-Bug 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}} Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, etc.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die null-lange typisierte Arrays zurückgeben ([Firefox-Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Präferenz verfügbar war. Diese API ermöglicht es, Aufgaben zu planen, die ausgeführt werden sollen, wenn der Browser feststellt, dass vor dem nächsten Neuzeichnen freie Zeit verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungslücken zu verursachen ([Firefox-Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und ist auf macOS in Nightly verfügbar). Diese API stellt virtuelle Realität Geräte — zum Beispiel Head-Mounted Displays wie Oculus Rift oder HTC Vive — Webanwendungen zur Verfügung und ermöglicht Entwicklern, Positions- und Bewegungsinformationen vom Display in Bewegungen in einer 3D-Szene zu übersetzen und Inhalte in solchen Displays zu präsentieren.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen im Schnittpunkt eines Zielelements mit einem Vorfahr-Element oder mit dem {{Glossary("Viewport", "Viewport")}} eines Dokuments oberster Ebene asynchron zu beobachten — wurde hinzugefügt ([Firefox-Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window) Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie deren Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um Unterpixel-genauen Anzeigen gerecht zu werden. Anstelle der Rückgabe eines Ganzzahlwertes geben diese nun einen Gleitkommawert zurück, der die Scrollposition auf unterpixel-genauen Displays genauer beschreibt ([Firefox-Bug 1151421](https://bugzil.la/1151421)). Falls nötig, können Sie {{jsxref("Math.round()")}} verwenden, um sie in Ganzzahlen zu konvertieren.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um den neuesten Spezifikationen zu entsprechen. Siehe [Firefox-Bug 1354441](https://bugzil.la/1354441), und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, trimmen nun automatisch Leerzeichen und entfernen doppelte Token ([Firefox-Bug 869788](https://bugzil.la/869788), siehe auch [Trimmen von Leerzeichen und Entfernen von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt dynamisch mit JavaScript geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox-Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL) Konstruktor kann keinen `DOMString` als Basis (zweiter Parameter) mehr akzeptieren — er akzeptiert nur `USVString`. Er kann immer noch ein bestehendes [`URL`](/de/docs/Web/API/URL) Objekt als Basis nutzen, das sich als `href`-Attribut des Objekts in einen String umwandelt ([Firefox-Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die Ereignistypen, die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützt werden, wurden entsprechend der neuesten DOM-Spezifikationen aktualisiert ([Firefox-Bug 1251198](https://bugzil.la/1251198)).
- Der Eigenschaftswert [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist jetzt vom Typ `USVString`, nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) nimmt jetzt einen `MessageEventSource` Wert an (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort), oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann) ([Firefox-Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun auf das [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis plus die `Ctrl`-Taste abgebildet. Diese Zuordnung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoom-Funktionen mit der Pinch-to-Zoom-Geste auf Mobilbildschirmen/Trackpads zu implementieren (Mausrad + `Ctrl` zoomt normalerweise) ([Firefox-Bug 1052253](https://bugzil.la/1052253)).

#### Selection-API

- Die [Selection-API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie in Bezug auf die Art und Weise, wie Editier-Hosts den Fokus erhalten, wenn die Auswahl in sie hinein bewegt wird, in Einklang mit anderen Browsern steht ([Firefox-Bug 1318312](https://bugzil.la/1318312)). Weitere Details finden Sie unter [Verhalten der Selection-API in Bezug auf Fokusänderungen bei Editier-Hosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes).
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige der neuesten Spezifikationsänderungen zu widerspiegeln ([Firefox-Bug 1359371](https://bugzil.la/1359371)):
  - Die Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) haben jetzt einen optionalen `offset`-Parameter.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist nun nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist nun optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase für [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Webkompatibilität und für WebKit/Blink-Paritätsgründe ([Firefox-Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage-API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window`-Kontexten zur Verfügung gestellt ([Firefox-Bug 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können jetzt mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), und die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox-Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen jetzt einem minimalen Intervall-Throttling für Tracking-Skripte in Hintergrund-Tabs — siehe [Drosselung von Tracking-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_scripts) ([Firefox-Bug 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- An Service Worker-Kontexte gesendete Nachrichten (z.B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) sind jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent) Objekte repräsentiert, um Konsistenz mit anderen Web-Messaging-Funktionen herzustellen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert nun {{jsxref("ArrayBuffer")}}s und Base64-codierte Strings als `applicationServerKey`-Werte ([Firefox-Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht-standardmäßiger Konstruktor (der einen String-Enum-Wert akzeptierte, der den Verwendungszweck des Kontexts angab) für die Schnittstelle [`AudioContext`](/de/docs/Web/API/AudioContext) verursachte Fehler, wenn der `options`-Parameter bereitgestellt wurde. Wir haben den nicht-standardmäßigen Konstruktor entfernt. Beachten Sie jedoch bitte, dass der `options`-Parameter noch nicht in Firefox unterstützt wird und derzeit ignoriert wird ([Firefox-Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) stellt jetzt standardmäßig einen Stereo-Audiostream bereit, wenn das Quellgerät Stereo-Sound liefert; Unterstützung für speziell Mono-Input wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf dem Desktop; Mobile Firefox unterstützt derzeit keine Stereo-Audio-Eingabequellen ([Firefox-Bug 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [Medienfähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` entsprechen nun der Spezifikation; sie waren früher `moz`-gekennzeichnet ([Firefox-Bug 1366415](https://bugzil.la/1366415)).
- Wenn `getUserMedia()` mit einem leeren Einschränkungsatz aufgerufen wurde, wurde fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurückgegeben. Dies wurde behoben ([Firefox-Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount`, und `firCount` ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das Wörterbuchfeld `RTCInboundRTPStreamStats`, das früher `mozRtt` genannt wurde, wurde zu `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; außerdem wurde sein Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen Gleitkommawert mit doppelter Genauigkeit, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP Receiver Report schätzt, gemessen in Sekunden (nach dem in beschriebenen Algorithmus {{RFC(3550, "", "6.4.1")}}). ([Firefox-Bug 1344970](https://bugzil.la/1344970)). Bitte beachten Sie jedoch, dass _diese Eigenschaft bald_ zu einem anderen Wörterbuch (`RTCRemoteInboundRTPStreamStats`) verschoben wird ([Firefox-Bug 1380555](https://bugzil.la/1380555)).
- Das Wörterbuch `RTCRTPStreamStats` enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern niedrigstufige Informationen, die verwendet werden können, um zu bestimmen, wie zuverlässig die Verbindung ist ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das Wörterbuch `RTCOutboundRTPStreamStats` enthält jetzt das Feld `framesEncoded`, das die Anzahl der Frames berichtet, die erfolgreich für den Stream kodiert wurden; mit dieser Information können Sie die Bildrate berechnen ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Präferenz](https://bugzil.la/1265755#c36), um die Hardware-Video-Kodierung einzuschalten, um die Leistung von Videoanrufen zu verbessern und den Akku zu schonen. Es soll standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert werden ([Firefox-Bug 1265755](https://bugzil.la/1265755)).

#### API für verschlüsselte Medienerweiterungen

- Firefox erlaubt derzeit die Verwendung von verschlüsselten Medienerweiterungen in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Deprecation-Warnungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox-Bug 1361000](https://bugzil.la/1361000)).
- Firefox verlangt derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities` Objekt im `suggestedConfigurations`-Parameter enthalten ist, der in [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung in der Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs anzugeben. Bald wird das Fehlen einer gültigen Konfiguration für eines oder mehrere von Audio und Video eine Ausnahme auslösen [Firefox-Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) ist jetzt in [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexten verfügbar ([Firefox-Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1268804](https://bugzil.la/1268804)).
- Das Laden von gemischten Inhalten ist jetzt auf localhost erlaubt ([Firefox-Bug 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde wieder deaktiviert ([Firefox-Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte werden jetzt "zum Aktivieren anklicken" ([Firefox-Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Benutzer von Nightly und 50 % der Beta-Benutzer umgesetzt. Für die Firefox 55-Version ist geplant, dies für 5 % der Benutzer 2 Wochen nach der Veröffentlichung, 25 % der Benutzer 4 Wochen nach der Veröffentlichung und 100 % der Benutzer 6 Wochen nach der Veröffentlichung einzuführen ([Firefox-Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr aus beliebigen URL-Schemata geladen werden, außer `http://` und `https://` ([Firefox-Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann nun im Headless-Modus mit dem Flag `-headless` ausgeführt werden (siehe [Firefox-Bug 1356681](https://bugzil.la/1356681)).

## Entfernen von der Webplattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade zu setzen, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut erscheinen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox-Bug 1350521](https://bugzil.la/1350521)).

- Das [`scoped`](/de/docs/Web/HTML/Reference/Elements/style#scoped) Attribut des {{htmlelement("style")}} Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einer Präferenz (`layout.css.scoped-style.enabled`) versteckt, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible` Wert des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attributs des {{htmlelement("meta")}} Elements wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt es und es verursachte Kompatibilitätsprobleme ([Firefox-Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element` Pseudoklasse wurde entfernt ([Firefox-Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration` Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox-Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar` Eigenschaft wurde von keinem anderen Browser außer Firefox unterstützt, und sie wurde nie vollständig implementiert außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern übereinzustimmen.
- Die proprietäre Firefox OS Gerät Speichern API wurde von der Plattform entfernt ([Firefox-Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog` Parameter der nicht-standardisierten [`Window.find()`](/de/docs/Web/API/Window/find) Methode (die verwendet werden konnte, um einen "Suchen"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox-Bug 1348409](https://bugzil.la/1348409)).
- Die `HTMLFormElement.requestAutoComplete()` Methode wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox-Bug 1270740](https://bugzil.la/1270740)).
- Die nicht-standardisierten, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions` Wörterbuch entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox-Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox-Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden aus der SVG2-Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>` Attribut ([Firefox-Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s command-Eigenschaft ermöglicht es Ihnen, Browser-Aktions-Popups, Seitenaktions-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Die chrome_settings_overrides Schlüssel ermöglicht es Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die browser_style Eigenschaft ermöglicht es Ihnen, browserähnliches Styling für [Browser-Aktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action), und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu haben.
- [Berechtigungs-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
