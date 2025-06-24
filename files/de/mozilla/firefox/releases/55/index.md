---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen von Filterung von Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Bug 1041895](https://bugzil.la/1041895), [Firefox Bug 1354508](https://bugzil.la/1354508), [Firefox Bug 1354507](https://bugzil.la/1354507)) und durch Verwendung von regulären Ausdrücken ([Firefox Bug 1354495](https://bugzil.la/1354495)).
- Möglichkeit, Spalten im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ein- und auszublenden ([Firefox Bug 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten ([Firefox Bug 1356869](https://bugzil.la/1356869)) zum Netzwerk-Monitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird nun unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap` Header, siehe [Firefox Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden nun {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox mit anderen modernen Browsern gleichzustellen ([Firefox Bug 1297414](https://bugzil.la/1297414)). Siehe [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable#differences_in_markup_generation) für weitere Details.
- Aktivierung von `dom.forms.datetime` standardmäßig in Nightly ([Firefox Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Das {{cssxref("transform-box")}}-Eigenschaft wurde standardmäßig freigegeben ([Firefox Bug 1208550](https://bugzil.la/1208550)).
- Die `frames()`-Timing-Funktion wurde implementiert ([Firefox Bug 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}}-Eigenschaft wurde implementiert ([Firefox Bug 1343512](https://bugzil.la/1343512), [Firefox Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die vollständige Clamp-Größe in {{cssxref("repeat", "repeat()")}} ([Firefox Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte `inline-start` und `inline-end` für {{cssxref("float")}} / {{cssxref("clear")}}, die zuvor implementiert, aber in Release-Kanälen deaktiviert waren, sind nun standardmäßig in allen Kanälen verfügbar ([Firefox Bug 1253919](https://bugzil.la/1253919)).
- Die Einstellung `layout.css.variables.enabled` wurde vollständig entfernt, was bedeutet, dass die Funktion [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties`-Eigenschaft wurde implementiert ([Firefox Bug 1058040](https://bugzil.la/1058040)).
- Null (0) Winkelwert ohne Maßeinheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudoelement wird jetzt unterstützt; es stimmt mit Text-Cues innerhalb eines Medienelements überein ([Firefox Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{SVGAttr("fr")}}-Attribut wurde implementiert ([Firefox Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Siehe [Eine Kostprobe von JavaScripts neuen parallelen Primitiven](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScripts geteilten Speicher und Atomics.
- Der Restoperator (`...`) wird jetzt in [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spreizoperator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (ECMAScript-Vorschlag Stufe 3: [Objektrest/-spreiz-Eigenschaften](https://github.com/tc39/proposal-object-rest-spread), [Firefox Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprach-Tag für locale-spezifische Groß- und Kleinschreibung anzugeben ([Firefox Bug 1318403](https://bugzil.la/1318403)).
- Das {{jsxref("Intl/Collator", "Intl.Collator")}}-Objekt unterstützt jetzt die Option `caseFirst` ([Firefox Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standardeinstellung des Browsers anstelle der des Betriebssystems, wenn keine Locale-Einstellung angegeben wird ([Firefox Bug 1346674](https://bugzil.la/1346674)).
- [Template Call Sites-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) sind jetzt pro Realm kanonisiert, basierend auf ihrer Liste von Rohzeichenfolgen ([Firefox Bug 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, etc.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die null-längige typisierte Arrays zurückgeben ([Firefox Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder die `requestIdleCallback` API) ist nun standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht es, Aufgaben zu planen, die ausgeführt werden sollen, wenn der Browser entscheidet, dass genügend Zeit vor dem nächsten Neuzeichnen vorhanden ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und ist unter Nightly auf macOS verfügbar). Diese API stellt Virtual-Reality-Geräte - beispielsweise Head-Mounted Displays wie Oculus Rift oder HTC Vive - Web-Apps zur Verfügung, wodurch Entwickler Positions- und Bewegungsinformationen vom Display in Bewegungen in einem 3D-Szenario umsetzen und Inhalte in solche Displays präsentieren können.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen der Schnittmenge eines Zielelements mit einem Vorfahr-Element oder mit dem {{Glossary("Viewport", "Ansichtsfenster")}} eines Top-Level-Dokuments asynchron zu beobachten — wurde hinzugefügt ([Firefox Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window)-Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie ihre Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixelgenau zu sein. Anstelle einer Ganzzahl geben diese nun einen Gleitkommawert zurück, der die Scrollposition auf subpixel-genauen Displays genauer beschreibt ([Firefox Bug 1151421](https://bugzil.la/1151421)). Falls erforderlich, können Sie {{jsxref("Math.round()")}} verwenden, um sie in Ganzzahlen umzuwandeln.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um dem neuesten Spezifikationsstand zu entsprechen. Siehe [Firefox Bug 1354441](https://bugzil.la/1354441) und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listwert ändern, trimmen nun automatisch Leerzeichen und entfernen doppelte Token ([Firefox Bug 869788](https://bugzil.la/869788), siehe auch [Trimmen von Leerzeichen und Entfernung von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann nun dynamisch mit JavaScript geändert werden, nachdem das äquivalente HTML erstellt wurde ([Firefox Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann keinen `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur einen `USVString`. Es kann jedoch immer noch ein existierendes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwendet werden, welches sich zu dem `href`-Attribut des Objekts stringifiziert ([Firefox Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützten Ereignistypen wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist nun vom Typ `USVString`, nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) nimmt nun einen `MessageEventSource`-Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann) ([Firefox Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun auf das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis plus die + `Ctrl`-Taste abgebildet. Diese Abbildung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoom-Funktionalität mit der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Touchpads zu implementieren (Mausrad + `Ctrl` zoomt normalerweise) ([Firefox Bug 1052253](https://bugzil.la/1052253)).

#### Selection-API

- Die [Selection-API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie hinsichtlich der Fokussierung von Editier-Hosts, wenn sich die Auswahl in ihnen bewegt, mit anderen Browsern gleichwertig ist ([Firefox Bug 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Selection-API hinsichtlich Änderungen der Fokussierung von Editier-Hosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection)-API wurde aktualisiert, um einigen kürzlichen Spezifikationsänderungen zu entsprechen ([Firefox Bug 1359371](https://bugzil.la/1359371)):

  - Die Parameter `offset` der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) sind jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection)-API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase für [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Webkompatibilität und der Gleichwertigkeit mit WebKit/Blink ([Firefox Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage-API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window`-Kontexte aufgenommen ([Firefox Bug 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können jetzt mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen jetzt einer Mindestintervall-Drosselung für Tracking-Skripte in Hintergrundregisterkarten — siehe [Drosselung von Tracking-Timeout-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox Bug 1355311](https://bugzil.la/1355311)).

#### Service Worker/Push

- Nachrichten, die an Service Worker-Kontexte gesendet werden (z.B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event), werden nun durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte repräsentiert, um der Konsistenz mit anderen Web-Messaging-Funktionen Rechnung zu tragen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert nun {{jsxref("ArrayBuffer")}}s und Base64-kodierte Zeichenfolgen als `applicationServerKey`-Werte ([Firefox Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht-standardmäßiger Konstruktor (der einen Zeichenfolgen-Enum-Wert akzeptierte, der den Zweck angab, für den der Kontext verwendet werden würde) für die Schnittstelle [`AudioContext`](/de/docs/Web/API/AudioContext) verursachte Fehler, wenn der `options`-Parameter bereitgestellt wurde. Wir haben den nicht-standardmäßigen Konstruktor entfernt. Bitte beachten Sie jedoch, dass der `options`-Parameter noch nicht in Firefox unterstützt wird und derzeit ignoriert wird ([Firefox Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet nun standardmäßig einen Stereo-Audiostream, wenn das Quellgerät Stereo-Sound liefert. Unterstützung für die spezifische Anforderung von Mono-Eingaben wird ab [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) verfügbar sein. Dies funktioniert derzeit nur auf dem Desktop; mobiles Firefox unterstützt derzeit keine Stereo-Audioeingabequellen ([Firefox Bug 971528](https://bugzil.la/971528)).
- Die `getUserMedia()`-Medieneigenschaften, -beschränkungen und -einstellungen `autoGainControl` und `noiseSuppression` entsprechen jetzt der Spezifikation; früher waren sie `moz`-geprefixed ([Firefox Bug 1366415](https://bugzil.la/1366415)).
- Bei Aufruf mit einem leeren Constraints-Set gab `getUserMedia()` irrtümlicherweise `NotSupportedError` statt `TypeError` zurück. Dies wurde behoben ([Firefox Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCInboundRTPStreamStats`-Wörterbuchfeld, das früher `mozRtt` genannt wurde, wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zudem wurde sein Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen Gleitkommawert mit doppelter Genauigkeit, der die Rundlaufzeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (gemäß dem Algorithmus beschrieben in {{RFC(3550, "", "6.4.1")}}). ([Firefox Bug 1344970](https://bugzil.la/1344970)). Bitte beachten Sie jedoch, dass _diese Eigenschaft bald_ in ein anderes Wörterbuch (`RTCRemoteInboundRTPStreamStats`) verschoben wird ([Firefox Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Wörterbuch enthält nun die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern niedrigstufige Informationen, die verwendet werden können, um die Zuverlässigkeit der Verbindung zu bestimmen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Wörterbuch enthält nun das Feld `framesEncoded`, das die Anzahl der erfolgreich kodierten Frames für den Stream angibt; mit diesen Informationen können Sie die Bildrate berechnen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Einstellung](https://bugzil.la/1265755#c36), um die Hardware-Videokodierung zu aktivieren, um die Leistung von Videoanrufen zu verbessern und den Akku zu schonen. Um standardmäßig aktiviert zu werden in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) ([Firefox Bug 1265755](https://bugzil.la/1265755)).

#### Verschlüsselte Medienerweiterungen API

- Firefox erlaubt derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Deprecation-Warnungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox Bug 1361000](https://bugzil.la/1361000)).
- Firefox verlangt derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der in [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung in der Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs anzugeben. Bald wird es eine Ausnahme auslösen, wenn keine gültige Konfiguration für ein oder mehrere auditive und visuelle Elemente enthalten ist ([Firefox Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) ist nun für [WebGL](/de/docs/Web/API/WebGL_API)- und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar ([Firefox Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation-API](/de/docs/Web/API/Geolocation_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage-API](/de/docs/Web/API/Storage_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1268804](https://bugzil.la/1268804)).
- Das Laden von gemischten Inhalten ist jetzt auf `localhost` erlaubt ([Firefox Bug 903966](https://bugzil.la/903966)).
- Das Laden von JAR-Dateien von entfernten Standorten wurde erneut deaktiviert ([Firefox Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt „klick-zum-Aktivieren“ ([Firefox Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly umgesetzt und für 50 % der Beta-Nutzer. Für die Freigabeversion von Firefox 55 ist geplant, dies für 5 % der Nutzer 2 Wochen nach der Veröffentlichung zu aktivieren, für 25 % der Nutzer 4 Wochen nach der Veröffentlichung und für 100 % der Nutzer 6 Wochen nach der Veröffentlichung ([Firefox Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von jedem URL-Schema außer `http://` und `https://` geladen werden ([Firefox Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann jetzt im Kopflos-Modus mit dem `-headless`-Flag betrieben werden (siehe [Firefox Bug 1356681](https://bugzil.la/1356681)).

## Entfernung von der Webplattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade zu setzen, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut erscheinen, z.B. —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Bug 1350521](https://bugzil.la/1350521)).

- Das [`scoped`](/de/docs/Web/HTML/Reference/Elements/style#scoped)-Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einer Voreinstellung (`layout.css.scoped-style.enabled`) versteckt, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den seltenen `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attributs des {{htmlelement("meta")}}-Elements wurde aus Gecko entfernt. Keine anderen modernen Browser unterstützen ihn und er verursachte Kompatibilitätsprobleme ([Firefox Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element`-Pseudoklasse wurde entfernt ([Firefox Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration`-Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde von keinem anderen Browser außer Firefox unterstützt und war nie vollständig implementiert, außer unter macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern übereinzustimmen.
- Die proprietäre Firefox OS Device Storage API wurde von der Plattform entfernt ([Firefox Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht-Standard-[`Window.find()`](/de/docs/Web/API/Window/find)-Methode (die angegeben werden konnte, um einen "Suchen"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Bug 1270740](https://bugzil.la/1270740)).
- Die nicht-standardisierten, Mozilla-spezifischen WebRTC Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Wörterbuch entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde sowohl aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) als auch aus [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden sowohl aus der SVG2-Spezifikation als auch aus Gecko entfernt, ebenso wie das `onzoom <svg>`-Attribut ([Firefox Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()-Befehlseigenschaft ermöglicht es Ihnen, Browseraktions-Popups, Page-Aktions-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Der Schlüssel chrome_settings_overrides ermöglicht es Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die Eigenschaft browser_style ermöglicht es Ihnen, browserähnliches Styling für [Browseraktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu haben.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
