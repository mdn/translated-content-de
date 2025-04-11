---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen der Filterung von Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox-Bug 1041895](https://bugzil.la/1041895), [Firefox-Bug 1354508](https://bugzil.la/1354508), [Firefox-Bug 1354507](https://bugzil.la/1354507)) sowie unter Verwendung von regulären Ausdrücken ([Firefox-Bug 1354495](https://bugzil.la/1354495)).
- Es ist jetzt möglich, Spalten im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ein- und auszublenden ([Firefox-Bug 862855](https://bugzil.la/862855)).
- Hinzufügung von Remote-IP ([Firefox-Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox-Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox-Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten ([Firefox-Bug 1356869](https://bugzil.la/1356869)) zum Netzwerk-Monitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap`-Header, siehe [Firefox-Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden nun {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox mit anderen modernen Browsern gleichzustellen ([Firefox-Bug 1297414](https://bugzil.la/1297414)). Weitere Informationen finden Sie unter [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable#differences_in_markup_generation).
- `dom.forms.datetime` ist nun standardmäßig in Nightly aktiviert ([Firefox-Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die {{cssxref("transform-box")}}-Eigenschaft ist nun standardmäßig verfügbar ([Firefox-Bug 1208550](https://bugzil.la/1208550)).
- Die `frames()`-Timing-Funktion wurde implementiert ([Firefox-Bug 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1343512](https://bugzil.la/1343512), [Firefox-Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die vollständige Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox-Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` —, die zuvor implementiert waren, aber in Release-Kanälen deaktiviert waren, sind jetzt standardmäßig in allen Kanälen verfügbar ([Firefox-Bug 1253919](https://bugzil.la/1253919)).
- Die Einstellung `layout.css.variables.enabled` wurde vollständig entfernt, was bedeutet, dass die Funktion [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) jetzt immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox-Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties`-Eigenschaft wurde implementiert ([Firefox-Bug 1058040](https://bugzil.la/1058040)).
- Ein Winkelwert von Null (0) ohne Grad-Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox-Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudoelement wird jetzt unterstützt; es trifft auf Text-Cues zu, die innerhalb eines Medienelements angezeigt werden ([Firefox-Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}}-Attribut {{SVGAttr("fr")}} wurde implementiert ([Firefox-Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Sehen Sie sich [Eine Einführung in JavaScripts neue parallele Primitiven](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) an für eine Einführung in JavaScripts geteilten Speicher und Atomics.
- Der Rest-Operator (`...`) wird jetzt bei der [Objektdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert jetzt bei [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Eigenschaften](https://github.com/tc39/proposal-object-rest-spread), [Firefox-Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox-Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt ein optionales `locale`-Parameter zur Angabe eines Sprachcodes für lokalspezifische Umwandlungen ([Firefox-Bug 1318403](https://bugzil.la/1318403)).
- Das {{jsxref("Intl/Collator", "Intl.Collator")}}-Objekt unterstützt jetzt die Option `caseFirst` ([Firefox-Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet nun die Standard-Lokalisierung des Browsers anstelle der des Betriebssystems, wenn keine Lokalisierung angegeben wird ([Firefox-Bug 1346674](https://bugzil.la/1346674)).
- [Template-Aufrufstellenobjekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden nun pro Realm basierend auf ihrer Liste roher Zeichenfolgen kanonisiert ([Firefox-Bug 1108941](https://bugzil.la/1108941)).
- Die Konstruktoren von {{jsxref("TypedArray")}} (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, usw.) wurden auf ES2017 aktualisiert. Sie verwenden nun die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die null-lange getypte Arrays zurückgeben ([Firefox-Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder die `requestIdleCallback` API) ist nun standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht es, Aufgaben auszuführen, wenn der Browser feststellt, dass vor dem nächsten Repaint freie Zeit verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox-Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und auf macOS in Nightly verfügbar). Diese API ermöglicht es, Virtual-Reality-Geräte — wie z.B. Head-Mounted Displays wie das Oculus Rift oder HTC Vive — in Webanwendungen zu verwenden, sodass Entwickler Positions- und Bewegungsinformationen vom Display in Bewegungen durch eine 3D-Szene übersetzen können und Inhalte in solchen Displays präsentieren können.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen am Schnittpunkt eines Zielelements mit einem Vorfahr-Element oder mit einem obersten Dokumenten-{{Glossary("Viewport", "Ansichtsfenster")}} asynchron zu überwachen — wurde hinzugefügt ([Firefox-Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window)-Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie ihre Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixial präzise zu sein. Anstelle eines Integers geben diese nun einen Gleitkommawert zurück, der die Scrollposition auf subpixial-präzisen Displays genauer beschreibt ([Firefox-Bug 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie {{jsxref("Math.round()")}} verwenden, um sie in ganze Zahlen zu konvertieren.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen. Siehe [Firefox-Bug 1354441](https://bugzil.la/1354441) und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) sowie [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert modifizieren, trimmen jetzt automatisch Leerzeichen und entfernen doppelte Tokens ([Firefox-Bug 869788](https://bugzil.la/869788), siehe auch [Trimming von Leerzeichen und Entfernen von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt mit JavaScript dynamisch verändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox-Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann kein `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur noch ein `USVString`. Er kann immer noch ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwenden, welches sich in das Attribut `href` des Objekts umwandelt ([Firefox-Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die Ereignistypen, die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützt werden, wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox-Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist jetzt vom Typ `USVString`, nicht `DOMString`; und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) akzeptiert nun einen `MessageEventSource`-Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann) ([Firefox-Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis plus der + `Strg`-Taste zugeordnet. Diese Zuordnung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoom-Funktionalitäten unter Verwendung der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads (Mausrad + `Strg` zoomt normalerweise) zu implementieren ([Firefox-Bug 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Auswahl-API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie in Bezug auf die Fokussierung von Bearbeitungskontexten beim Verschieben der Auswahl mit anderen Browsern gleichwertig ist ([Firefox-Bug 1318312](https://bugzil.la/1318312)). Weitere Details finden Sie unter [Verhalten der Auswahl-API in Bezug auf Fokusänderungen des Bearbeitungskontexts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes).
- Die [`Selection`](/de/docs/Web/API/Selection)-API wurde aktualisiert, um einige aktuelle Spezifikationsänderungen zu übernehmen ([Firefox-Bug 1359371](https://bugzil.la/1359371)):

  - Der `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection)-API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase für [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Web-Kompatibilität und der Parität mit WebKit/Blink ([Firefox-Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage-API](/de/docs/Web/API/Storage_API) wurden implementiert und sind nun in `Window`-Kontexten verfügbar ([Firefox-Bug 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können nun mit einer identifizierenden `name` Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox-Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen nun einem Mindestintervall-Throttling für Tracking-Skripte in Hintergrund-Tabs — siehe [Throttling von Tracking-Timeout-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox-Bug 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- Nachrichten, die an Service-Worker-Kontexte gesendet werden (z. B. als das Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent) Objekte repräsentiert, um Konsistenz mit anderen Web-Messaging-Funktionen sicherzustellen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert jetzt {{jsxref("ArrayBuffer")}}s und Base64-kodierte Zeichenfolgen als `applicationServerKey`-Werte ([Firefox-Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardmäßiger Konstruktor (der einen String-Enum-Wert akzeptierte, der den Zweck angab, für den der Kontext verwendet werden würde) für die Schnittstelle [`AudioContext`](/de/docs/Web/API/AudioContext) verursachte Fehler, wenn der `options`-Parameter bereitgestellt wurde. Wir haben den nicht standardmäßigen Konstruktor entfernt. Bitte beachten Sie jedoch, dass der `options`-Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox-Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) liefert nun standardmäßig einen Stereo-Audiostream, wenn das Quelldevise Stereo-Sound bereitstellt; die Unterstützung für spezifische Anfragen für Mono-Eingang wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) verfügbar sein. Dies funktioniert derzeit nur auf dem Desktop; mobiler Firefox unterstützt derzeit keine Stereo-Audio-Eingangsquellen ([Firefox-Bug 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [media capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` stimmen nun mit der Spezifikation überein; zuvor waren sie mit `moz`-Präfix ([Firefox-Bug 1366415](https://bugzil.la/1366415)).
- Bei einem Aufruf mit einem leeren Constraints-Set gab `getUserMedia()` fälschlicherweise `NotSupportedError` statt `TypeError` zurück. Dies wurde behoben ([Firefox-Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das Feld des `RTCInboundRTPStreamStats`-Dictionary, das früher `mozRtt` genannt wurde, wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zusätzlich wurde das Verhalten angepasst, um dem Standard zu entsprechen: es enthält einen Gleitkommawert mit doppelter Genauigkeit, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (nach dem in {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus) ([Firefox-Bug 1344970](https://bugzil.la/1344970)). Bitte beachten Sie jedoch, dass _diese Eigenschaft bald in ein anderes Dictionary (`RTCRemoteInboundRTPStreamStats`) verschoben wird_ ([Firefox-Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Dictionary enthält nun die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern Informationen auf niedriger Ebene, die genutzt werden können, um zu bestimmen, wie zuverlässig die Verbindung ist ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Dictionary enthält nun das Feld `framesEncoded`, das die Anzahl an Frames meldet, die erfolgreich für den Stream kodiert wurden; mit dieser Information können Sie die Bildrate berechnen ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Pref](https://bugzil.la/1265755#c36), um Hardware-Videokodierung zu aktivieren und so die Leistung bei Videoanrufen zu verbessern und den Akku zu schonen. Diese wird standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert ([Firefox-Bug 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox ermöglicht derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Deprecation-Warnungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht ([Firefox-Bug 1361000](https://bugzil.la/1361000)).
- Firefox setzt derzeit nicht voraus, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, obwohl dies in der Spezifikation vorgeschrieben ist. Ab Firefox 55 wird eine Warnung in der Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs anzugeben. Bald wird das Fehlen einer gültigen Konfiguration für eines oder mehrere von Audio und Video eine Ausnahme auslösen ([Firefox-Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) ist nun für [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar ([Firefox-Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1268804](https://bugzil.la/1268804)).
- Das Laden gemischter Inhalte ist nun auf Localhost erlaubt ([Firefox-Bug 903966](https://bugzil.la/903966)).
- Das Laden von JAR-Dateien aus der Ferne ist erneut deaktiviert worden ([Firefox-Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "Klick-zum-Aktivieren" ([Firefox-Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50% der Beta-Nutzer umgesetzt. Für die Firefox 55 Release-Version ist geplant, dies für 5% der Benutzer zwei Wochen nach der Veröffentlichung, 25% der Benutzer vier Wochen nach der Veröffentlichung und 100% der Benutzer sechs Wochen nach der Veröffentlichung zu aktivieren ([Firefox-Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von einer anderen URL-Schema als `http://` und `https://` geladen werden ([Firefox-Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann nun im "Headless"-Modus ausgeführt werden, indem das `-headless`-Flag verwendet wird (siehe [Firefox-Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Web-Plattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr zur Festlegung der Basis-URL für Pfade verwendet werden, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut angegeben sind, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox-Bug 1350521](https://bugzil.la/1350521)).

- Das [`scoped`](/de/docs/Web/HTML/Reference/Elements/style#scoped)-Attribut des {{htmlelement("style")}} Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einem Pref (`layout.css.scoped-style.enabled`) verborgen, da keine anderen Browser es unterstützen.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attributs des {{htmlelement("meta")}} Elements wurde aus Gecko entfernt. Kein anderer moderner Browser unterstützt es und es verursachte Kompatibilitätsprobleme ([Firefox-Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element` Pseudo-Klasse wurde entfernt ([Firefox-Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration` Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox-Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde von keinem anderen Browser außer Firefox unterstützt und war nie vollständig implementiert, außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern zusammenzupassen.
- Die proprietäre Firefox OS Device Storage API wurde aus der Plattform entfernt ([Firefox-Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht standardmäßigen [`Window.find()`](/de/docs/Web/API/Window/find)-Methode (der angegeben werden konnte, um einen "Finden"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox-Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox-Bug 1270740](https://bugzil.la/1270740)).
- Die nicht standardmäßigen, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Dictionary entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox-Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre `Audio Channels API` von Firefox OS wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox-Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die Schnittstellen `SVGZoomEvent` und `SVGZoomEvents` wurden aus der SVG2-Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>`-Attribut ([Firefox-Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'-Befehleigenschaft ermöglicht es, Browser-Action-Popups, Seiten-Aktions-Popups und Seitenleisten im Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides-Schlüssel ermöglicht es, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die browser_style-Eigenschaft ermöglicht es, browserähnliche Stile für [Browser-Action-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu nutzen.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
