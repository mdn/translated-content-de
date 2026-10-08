---
title: "Firefox 55: Versionshinweise für Entwickler"
short-title: Firefox 55
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Netzwerk-Anfragen können jetzt nach Spaltenwerten und anderen Eigenschaften ([Firefox-Bug 1041895](https://bugzil.la/1041895), [Firefox-Bug 1354508](https://bugzil.la/1354508), [Firefox-Bug 1354507](https://bugzil.la/1354507)) sowie mithilfe regulärer Ausdrücke ([Firefox-Bug 1354495](https://bugzil.la/1354495)) gefiltert werden.
- Spalten im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) können jetzt ein- und ausgeblendet werden ([Firefox-Bug 862855](https://bugzil.la/862855)).
- Dem Netzwerkmonitor wurden Spalten für die Remote-IP-Adresse ([Firefox-Bug 1344523](https://bugzil.la/1344523)), das Protokoll ([Firefox-Bug 1345489](https://bugzil.la/1345489)), das Schema ([Firefox-Bug 1356867](https://bugzil.la/1356867)) sowie Cookies und gesetzte Cookies ([Firefox-Bug 1356869](https://bugzil.la/1356869)) hinzugefügt.
- Der HTTP-Header {{HTTPHeader("SourceMap")}} wird jetzt unterstützt. Frühere Versionen unterstützten den veralteten Header `X-SourceMap` (siehe [Firefox-Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist, verwenden jetzt {{htmlelement("div")}}-Elemente, um Textzeilen voneinander zu trennen. Damit verhält sich Firefox wie andere moderne Browser ([Firefox-Bug 1297414](https://bugzil.la/1297414)).
- `dom.forms.datetime` ist in Nightly standardmäßig aktiviert ([Firefox-Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die Eigenschaft {{cssxref("transform-box")}} ist standardmäßig verfügbar ([Firefox-Bug 1208550](https://bugzil.la/1208550)).
- Die Timing-Funktion `frames()` wurde implementiert ([Firefox-Bug 1248340](https://bugzil.la/1248340)).
- Die Eigenschaft {{cssxref("text-justify")}} wurde implementiert ([Firefox-Bug 1343512](https://bugzil.la/1343512), [Firefox-Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert in {{cssxref("repeat", "repeat()")}} unerwartet Platz für die vollständige Begrenzungsgröße ([Firefox-Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte `inline-start` und `inline-end` für {{cssxref("float")}} und {{cssxref("clear")}} waren zuvor implementiert, in den Release-Kanälen jedoch per Voreinstellung deaktiviert. Sie sind jetzt in allen Kanälen standardmäßig verfügbar ([Firefox-Bug 1253919](https://bugzil.la/1253919)).
- Die Voreinstellung `layout.css.variables.enabled` wurde vollständig entfernt. [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) sind damit dauerhaft aktiviert und können nicht mehr deaktiviert werden ([Firefox-Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre Eigenschaft `-moz-context-properties` wurde implementiert ([Firefox-Bug 1058040](https://bugzil.la/1058040)).
- Der Winkelwert Null (0) ohne Gradeinheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox-Bug 1363292](https://bugzil.la/1363292)).
- Das Pseudoelement {{cssxref("::cue")}} wird jetzt unterstützt. Es erfasst Text-Cues, die innerhalb eines Medienelements angezeigt werden ([Firefox-Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das Attribut {{ SVGAttr("fr") }} des Elements {{svgelement("radialGradient")}} wurde implementiert ([Firefox-Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Eine Einführung in gemeinsam genutzten Speicher und Atomics in JavaScript finden Sie unter [Ein Einblick in die neuen Parallelitätsprimitive von JavaScript](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/).
- Der Rest-Operator (`...`) wird jetzt bei der [Destrukturierung von Objekten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt, und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (ECMAScript-Vorschlag der Stufe 3: [Rest-/Spread-Eigenschaften für Objekte](https://github.com/tc39/proposal-object-rest-spread), [Firefox-Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox-Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen Parameter `locale`, mit dem sich ein Sprach-Tag für gebietsschemaspezifische Groß- und Kleinschreibung angeben lässt ([Firefox-Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt jetzt die Option `caseFirst` ([Firefox-Bug 866473](https://bugzil.la/866473)).
- Wenn kein Gebietsschema angegeben wird, verwendet die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) jetzt das Standardgebietsschema des Browsers statt des Betriebssystems ([Firefox-Bug 1346674](https://bugzil.la/1346674)).
- [Template-Call-Site-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm anhand ihrer Liste unverarbeiteter Zeichenfolgen kanonisiert ([Firefox-Bug 1108941](https://bugzil.la/1108941)).
- Die Konstruktoren von {{jsxref("TypedArray")}} (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}} usw.) wurden an ES2017 angepasst. Sie verwenden jetzt die Operation `ToIndex` und lassen Aufrufe ohne Argumente zu, die typisierte Arrays der Länge null zurückgeben ([Firefox-Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [API zur kooperativen Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API) (auch als **Background Tasks API** oder `requestIdleCallback`-API bezeichnet) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 über eine Voreinstellung verfügbar war. Mit dieser API können Sie Aufgaben für Zeiträume einplanen, in denen der Browser vor dem nächsten Neuzeichnen freie Kapazität feststellt. So kann Ihr Code diese Zeit nutzen, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox-Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist unter Windows jetzt standardmäßig aktiviert (und unter macOS in Nightly verfügbar). Diese API macht Virtual-Reality-Geräte – beispielsweise Head-Mounted Displays wie Oculus Rift oder HTC Vive – für Webanwendungen zugänglich. Entwickler können dadurch Positions- und Bewegungsdaten des Displays in Bewegungen innerhalb einer 3D-Szene umsetzen und Inhalte auf solchen Displays darstellen.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) wurde hinzugefügt. Sie ermöglicht es, Änderungen am Schnittbereich eines Zielelements mit einem übergeordneten Element oder mit dem {{Glossary("Viewport", "Viewport")}} eines Dokuments auf oberster Ebene asynchron zu beobachten ([Firefox-Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) von [`Window`](/de/docs/Web/API/Window) sowie ihre Aliase `pageXOffset` und `pageYOffset` wurden für eine Genauigkeit auf Subpixel-Ebene aktualisiert. Statt einer Ganzzahl geben sie jetzt einen Gleitkommawert zurück, der die Scrollposition auf Displays mit Subpixel-Genauigkeit präziser beschreibt ([Firefox-Bug 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie die Werte mit {{jsxref("Math.round()")}} in Ganzzahlen umwandeln.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und weitere damit zusammenhängende Funktionen wurden an die aktuelle Spezifikation angepasst. Siehe [Firefox-Bug 1354441](https://bugzil.la/1354441) sowie [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden von [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, entfernen jetzt automatisch führende und nachgestellte Leerzeichen sowie doppelte Tokens ([Firefox-Bug 869788](https://bugzil.la/869788); siehe auch [Entfernen von Leerzeichen und Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die Eigenschaft `maxLength` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt mit JavaScript dynamisch geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox-Bug 1352799](https://bugzil.la/1352799)).
- Der Konstruktor [`URL()`](/de/docs/Web/API/URL/URL) akzeptiert als Basis (zweiten Parameter) keinen `DOMString` mehr, sondern nur noch einen `USVString`. Ein vorhandenes [`URL`](/de/docs/Web/API/URL)-Objekt kann weiterhin als Basis verwendet werden; es wird dabei in den Wert seines `href`-Attributs umgewandelt ([Firefox-Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützten Ereignistypen wurden gemäß der aktuellen DOM-Spezifikation aktualisiert ([Firefox-Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) hat jetzt den Typ `USVString` statt `DOMString`. Die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) nimmt jetzt einen Wert vom Typ `MessageEventSource` an. Dabei kann es sich um ein {{Glossary("WindowProxy", "WindowProxy")}}-, [`MessagePort`](/de/docs/Web/API/MessagePort)- oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt handeln ([Firefox-Bug 1311324](https://bugzil.la/1311324)).
- Die Zwei-Finger-Zoomgeste wird jetzt dem Ereignis [`wheel`](/de/docs/Web/API/Element/wheel_event) in Verbindung mit der Taste `Ctrl` zugeordnet. Dadurch können Entwickler eine einfache Zoomfunktion für Zwei-Finger-Gesten auf mobilen Bildschirmen und Trackpads implementieren. Das Mausrad in Verbindung mit `Ctrl` wird bereits häufig zum Zoomen verwendet ([Firefox-Bug 1052253](https://bugzil.la/1052253)).

#### Selection API

- Die [Selection API](/de/docs/Web/API/Selection) wurde so aktualisiert, dass sie sich beim Fokussieren bearbeitbarer Bereiche, in die eine Auswahl verschoben wird, wie andere Browser verhält ([Firefox-Bug 1318312](https://bugzil.la/1318312)). Weitere Informationen finden Sie unter [Verhalten der Selection API bei Fokusänderungen in bearbeitbaren Bereichen](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes).
- Die API [`Selection`](/de/docs/Web/API/Selection) wurde an einige neuere Änderungen der Spezifikation angepasst ([Firefox-Bug 1359371](https://bugzil.la/1359371)):
  - Der Parameter `offset` der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der Parameter `node` der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) kann jetzt `null` sein.
  - Der Parameter `partialContainment` der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der API [`Selection`](/de/docs/Web/API/Selection) wurden `Selection.empty()` und `Selection.setPosition()` als Aliase für [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) beziehungsweise [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, um die Webkompatibilität und die Übereinstimmung mit WebKit/Blink zu verbessern ([Firefox-Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und für `Window`-Kontexte verfügbar gemacht ([Firefox-Bug 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können jetzt mit einer identifizierenden Eigenschaft `name` erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ([Firefox-Bug 1364297](https://bugzil.la/1364297)).
- Für [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) gelten jetzt Mindestintervalle zur Drosselung von Tracking-Skripten in Hintergrund-Tabs – siehe [Drosselung von Tracking-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_scripts) ([Firefox-Bug 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- Nachrichten, die an Service-Worker-Kontexte gesendet werden, etwa als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt. Dies sorgt für Konsistenz mit anderen Web-Messaging-Funktionen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert jetzt {{jsxref("ArrayBuffer")}}-Objekte und Base64-kodierte Zeichenfolgen als Werte für `applicationServerKey` ([Firefox-Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardisierter Konstruktor für die Schnittstelle [`AudioContext`](/de/docs/Web/API/AudioContext), der einen String-Enum-Wert für den Verwendungszweck des Kontexts akzeptierte, führte zu Fehlern, wenn der Parameter `options` angegeben wurde. Dieser Konstruktor wurde entfernt. Beachten Sie jedoch, dass der Parameter `options` in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox-Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) liefert jetzt standardmäßig einen Stereo-Audiostream, wenn das Quellgerät Stereoton bereitstellt. Die Möglichkeit, ausdrücklich eine Mono-Eingabe anzufordern, wird mit [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) eingeführt. Derzeit funktioniert dies nur auf Desktop-Geräten; Firefox für Mobilgeräte unterstützt momentan keine Stereo-Audioeingabequellen ([Firefox-Bug 971528](https://bugzil.la/971528)).
- Die [Medienfunktionen, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` von `getUserMedia()` entsprechen jetzt der Spezifikation. Zuvor hatten sie das Präfix `moz` ([Firefox-Bug 1366415](https://bugzil.la/1366415)).
- Bei einem Aufruf mit einer leeren Menge von Constraints gab `getUserMedia()` fälschlicherweise `NotSupportedError` statt `TypeError` zurück. Dies wurde behoben ([Firefox-Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das bisher `mozRtt` genannte Feld des Dictionaries `RTCInboundRTPStreamStats` wurde gemäß der Spezifikation in `roundTripTime` umbenannt. Außerdem wurde sein Verhalten an den Standard angepasst: Es enthält einen Gleitkommawert mit doppelter Genauigkeit, der die Umlaufzeit anhand der RTCP-Zeitstempel im RTCP Receiver Report schätzt. Der Wert wird in Sekunden gemessen und folgt dem in {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus ([Firefox-Bug 1344970](https://bugzil.la/1344970)). Beachten Sie jedoch, dass _diese Eigenschaft_ demnächst in ein anderes Dictionary (`RTCRemoteInboundRTPStreamStats`) _verschoben wird_ ([Firefox-Bug 1380555](https://bugzil.la/1380555)).
- Das Dictionary `RTCRTPStreamStats` enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Sie liefern technische Detailinformationen, anhand derer sich die Zuverlässigkeit der Verbindung beurteilen lässt ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das Dictionary `RTCOutboundRTPStreamStats` enthält jetzt das Feld `framesEncoded`. Es gibt an, wie viele Frames für den Stream erfolgreich kodiert wurden; anhand dieser Information können Sie die Bildrate berechnen ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Unter Android gibt es jetzt eine [Voreinstellung](https://bugzil.la/1265755#c36), mit der sich Hardware-Videokodierung aktivieren lässt, um die Leistung bei Videoanrufen zu verbessern und den Akku zu schonen. Sie soll in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) standardmäßig aktiviert werden ([Firefox-Bug 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox erlaubt derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexten, obwohl die Spezifikation dies nicht zulässt. Dies wird sich in naher Zukunft ändern. Ab Firefox 55 wird bei einer solchen Verwendung eine Warnung zur bevorstehenden Einstellung in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben ([Firefox-Bug 1361000](https://bugzil.la/1361000)).
- Firefox verlangt derzeit nicht, dass der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergebene Parameter `suggestedConfigurations` mindestens ein `MediaKeySystemCapabilities`-Objekt enthält, obwohl die Spezifikation dies vorschreibt. Ab Firefox 55 wird in der Webkonsole eine Warnung ausgegeben, wenn eine Audio- oder Videokonfiguration ohne Angabe unterstützter Codecs festgelegt wird. Künftig wird eine Ausnahme ausgelöst, wenn für Audio oder Video keine gültige Konfiguration angegeben wird ([Firefox-Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API)- und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar ([Firefox-Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ([Firefox-Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ([Firefox-Bug 1268804](https://bugzil.la/1268804)).
- Das Laden gemischter Inhalte auf localhost ist jetzt zulässig ([Firefox-Bug 903966](https://bugzil.la/903966)).
- Das Laden entfernter JAR-Dateien wurde erneut deaktiviert ([Firefox-Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte werden jetzt erst nach einem Klick aktiviert ([Firefox-Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nightly-Nutzer und für 50 % der Beta-Nutzer eingeführt. Für die Release-Version von Firefox 55 ist geplant, die Funktion zwei Wochen nach der Veröffentlichung für 5 % der Nutzer, nach vier Wochen für 25 % und nach sechs Wochen für 100 % der Nutzer zu aktivieren ([Firefox-Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nur noch über die URL-Schemas `http://` und `https://` geladen werden ([Firefox-Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann jetzt mit dem Flag `-headless` im Headless-Modus ausgeführt werden (siehe [Firefox-Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen von der Webplattform

### HTML

- Mit dem Attribut `xml:base` lässt sich die Basis-URL für Pfade im Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) nicht mehr festlegen, beispielsweise:

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox-Bug 1350521](https://bugzil.la/1350521)).

- Das Attribut `scoped` des Elements {{htmlelement("style")}} ist in Inhaltsdokumenten ab Firefox 55 nur noch über die Voreinstellung `layout.css.scoped-style.enabled` verfügbar, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den wenig verbreiteten Wert `MSThemeCompatible` des Attributs [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) des Elements {{htmlelement("meta")}} wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt ihn, und er verursachte Kompatibilitätsprobleme ([Firefox-Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre Pseudoklasse `:-moz-bound-element` wurde entfernt ([Firefox-Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre Wert `-moz-anchor-decoration` für {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox-Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die Eigenschaft `UIEvent.isChar` wurde von keinem anderen Browser als Firefox unterstützt und war, außer unter macOS, nie vollständig implementiert. Deshalb wurde sie in Firefox 55 entfernt, um das Verhalten an andere Browser anzugleichen.
- Die proprietäre Device Storage API von Firefox OS wurde von der Plattform entfernt ([Firefox-Bug 1299500](https://bugzil.la/1299500)).
- Der Parameter `aShowDialog` der nicht standardisierten Methode [`Window.find()`](/de/docs/Web/API/Window/find), mit dem sich ein Suchdialog im Browser öffnen ließ, wurde entfernt ([Firefox-Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox-Bug 1270740](https://bugzil.la/1270740)).
- Die nicht standardisierten, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem Dictionary `RTCOfferOptions` entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox-Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre `Audio Channels API` von Firefox OS wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox-Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die Schnittstellen `SVGZoomEvent` und `SVGZoomEvents` sowie das Attribut `onzoom <svg>` wurden aus der SVG2-Spezifikation und aus Gecko entfernt ([Firefox-Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Mit der Eigenschaft `command` von `contextMenus.create()` können Sie Browser-Action-Pop-ups, Page-Action-Pop-ups und Seitenleisten über das Kontextmenü öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Mit dem Schlüssel `chrome_settings_overrides` können Sie die Startseite des Browsers überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Mit der Eigenschaft `browser_style` können Sie [Browser-Action-Pop-ups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Seitenleisten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) im Stil des Browsers gestalten.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)
