---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Hinzufügen von Filtern für Netzwerkanfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Bug 1041895](https://bugzil.la/1041895), [Firefox Bug 1354508](https://bugzil.la/1354508), [Firefox Bug 1354507](https://bugzil.la/1354507)) und durch die Verwendung von regulären Ausdrücken ([Firefox Bug 1354495](https://bugzil.la/1354495)).
- Möglichkeit, Spalten im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) anzuzeigen und auszublenden ([Firefox Bug 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox Bug 1356867](https://bugzil.la/1356867)), Cookie- und Set-Cookie-Spalten ([Firefox Bug 1356869](https://bugzil.la/1356869)) zum Netzwerk-Monitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap` Header, siehe [Firefox Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, auf denen `contenteditable` auf `true` gesetzt wurde, verwenden nun {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen und Firefox mit anderen modernen Browsern auf eine Linie zu bringen ([Firefox Bug 1297414](https://bugzil.la/1297414)). Siehe [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable#differences_in_markup_generation) für weitere Details.
- Aktivierung von `dom.forms.datetime` standardmäßig in Nightly ([Firefox Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Freigabe der {{cssxref("transform-box")}}-Eigenschaft standardmäßig ([Firefox Bug 1208550](https://bugzil.la/1208550)).
- Implementierung der `frames()` Timing-Funktion ([Firefox Bug 1248340](https://bugzil.la/1248340)).
- Implementierung der {{cssxref("text-justify")}}-Eigenschaft ([Firefox Bug 1343512](https://bugzil.la/1343512), [Firefox Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Klammerzelle in {{cssxref("repeat", "repeat()")}} ([Firefox Bug 1359060](https://bugzil.la/1359060)).
- Die {{cssxref("float")}} / {{cssxref("clear")}}-logischen Werte — `inline-start` und `inline-end` — die zuvor implementiert, aber in den Release-Kanälen deaktiviert waren, sind nun standardmäßig in allen Kanälen verfügbar ([Firefox Bug 1253919](https://bugzil.la/1253919)).
- Die `layout.css.variables.enabled`-Einstellung wurde vollständig entfernt, was bedeutet, dass die [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Funktion immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1312328](https://bugzil.la/1312328)).
- Implementierung der proprietären `-moz-context-properties`-Eigenschaft ([Firefox Bug 1058040](https://bugzil.la/1058040)).
- Ein Null-Winkelwert ohne Maßeinheit wird nicht korrekt in {{cssxref("gradient/linear-gradient")}} interpretiert ([Firefox Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudoelement wird jetzt unterstützt; es wird für Textanzeigehinweise verwendet, die innerhalb eines Medienelements präsentiert werden ([Firefox Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{ SVGAttr("fr") }}-Attribut wurde implementiert ([Firefox Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Siehe [Ein Vorgeschmack auf die neuen Parallelprimitiven von JavaScript](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in das JavaScript Shared Memory und Atomics.
- Der Rest-Operator (`...`) wird jetzt in [Objekt-Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert nun in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen nun einen optionalen `locale`-Parameter, um ein Sprach-Tag für lokalisierungsspezifische Fallunterscheidungen anzugeben ([Firefox Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt nun die Option `caseFirst` ([Firefox Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet nun die Standard-Locale des Browsers anstelle der Standard-Locale des Betriebssystems, wenn keine Locale-Einstellung bereitgestellt wird ([Firefox Bug 1346674](https://bugzil.la/1346674)).
- Die [Template Call-Sites-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm kanonisiert, basierend auf ihrer Liste roher Zeichenfolgen ([Firefox Bug 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}} usw.) wurden auf ES2017 aktualisiert. Sie verwenden nun die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die Arrays mit null Länge zurückgeben ([Firefox Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Zugangsgerechteit für Hintergrundaufgaben API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder die `requestIdleCallback`-API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden, wenn der Browser ermittelt, dass es vor dem nächsten Neuzeichnen freie Zeit gibt, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungsprobleme zu verursachen ([Firefox Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und ist auf macOS in Nightly verfügbar). Diese API ermöglicht es, virtuelle Realität Geräte — wie z. B. Head-Mounted-Displays wie Oculus Rift oder HTC Vive — zu Web-Apps freizulegen, Entwicklern die Möglichkeit gibt, Positions- und Bewegungsinformationen vom Display in eine Bewegung in einer 3D-Szene zu übersetzen, und Inhalte für solche Displays zu präsentieren.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen im Schnitt von einem Zielelement mit einem Vorfahrelement oder mit dem {{Glossary("Viewport", "Viewport")}} eines Dokuments der obersten Ebene zu beobachten — wurde hinzugefügt ([Firefox Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window)-Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie ihre Aliase `pageXOffset` und `pageYOffset` wurden aktualisiert für Subpixel-Genauigkeit. Anstatt einen Ganzzahlwert zurückzugeben, geben sie jetzt einen Fließkommawert zurück, der die Scrollposition auf subpixelgenauen Displays genauer beschreibt ([Firefox Bug 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie {{jsxref("Math.round()")}} verwenden, um sie in Ganzzahlen zu konvertieren.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen. Siehe [Firefox Bug 1354441](https://bugzil.la/1354441) und sehen Sie auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, kürzen jetzt automatisch Leerzeichen und entfernen doppelte Token ([Firefox Bug 869788](https://bugzil.la/869788), siehe auch [Trimming of whitespace and removal of duplicates](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann nun dynamisch mit JavaScript geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann keinen `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur einen `USVString`. Er kann weiterhin ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwenden, das sich als `href`-Attribut des Objekts selbst in einen String konvertiert ([Firefox Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützten Ereignistypen wurden entsprechend der neuesten DOM-Spezifikation aktualisiert ([Firefox Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist nun vom Typ `USVString`, nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) nimmt jetzt einen `MessageEventSource`-Wert an (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) ([Firefox Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis zusammen mit der `Strg`-Taste zugeordnet. Diese Zuordnung wurde implementiert, um es Entwicklern zu ermöglichen, einfache Zoomfunktionen mithilfe der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu implementieren (Mausrad + `Strg` zoomt üblicherweise) ([Firefox Bug 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie in Bezug auf die Art und Weise, wie Bearbeitungs-Hosts fokussiert werden, wenn die Auswahl in sie verschoben wird, mit anderen Browsern gleichwertig ist ([Firefox Bug 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Selection API in Bezug auf Änderungen des Bearbeitungshostfokus](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige jüngste Änderungen der Spezifikation anzupassen ([Firefox Bug 1359371](https://bugzil.la/1359371)):
  - Die `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) sind jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Webkompatibilität und der Parität mit WebKit/Blink ([Firefox Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und sind in `Window`-Kontexten verfügbar ([Firefox Bug 1286717](https://bugzil.la/1286717)).

#### Workers

- Arbeiter und gemeinsam genutzte Arbeiter können jetzt mit einer `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ([Firefox Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen jetzt einer Mindestintervall-Drosselung für Tracking-Skripte in Hintergrund-Tabs — siehe [Drosselung von Tracking-Timeout-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox Bug 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- Nachrichten, die an Serviceworker-Kontexte gesendet werden (z. B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt, um Konsistenz mit anderen Web-Messaging-Funktionen zu schaffen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert jetzt {{jsxref("ArrayBuffer")}} und Base64-kodierte Zeichenfolgen als `applicationServerKey`-Werte ([Firefox Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardmäßiger Konstruktor (der einen Zeichenfolgen-Enum-Wert akzeptierte, der den Zweck angab, für den der Kontext verwendet werden sollte) für die [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle verursachte Fehler, wenn der `options`-Parameter angegeben war. Wir haben den nicht standardmäßigen Konstruktor entfernt. Beachten Sie jedoch bitte, dass der `options`-Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet jetzt standardmäßig einen Stereo-Audiostream, wenn das Quellgerät Stereoton bereitstellt; die Unterstützung für die spezifische Anforderung von Mono-Eingang wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf dem Desktop; mobiles Firefox unterstützt derzeit keine Stereo-Audioeingangsquellen ([Firefox Bug 971528](https://bugzil.la/971528)).
- Die [Medienfähigkeiten, -zwänge und -einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` von `getUserMedia()` entsprechen jetzt der Spezifikation; früher waren sie mit `moz`-Präfix versehen ([Firefox Bug 1366415](https://bugzil.la/1366415)).
- Wenn `getUserMedia()` mit einem leeren Zwngssatz aufgerufen wurde, gab es fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurück. Dies wurde behoben ([Firefox Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das früher als `mozRtt` bezeichnete Feld im `RTCInboundRTPStreamStats` Wörterbuch wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; außerdem wurde das Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen doppelt-genauen Fließkommawert, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (dem Algorithmus folgend, beschrieben in {{RFC(3550, "", "6.4.1")}}). ([Firefox Bug 1344970](https://bugzil.la/1344970)). Beachten Sie jedoch bitte, dass _diese Eigenschaft bald in ein anderes Wörterbuch (`RTCRemoteInboundRTPStreamStats`) verschoben wird_ ([Firefox Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Wörterbuch enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern Niedriglevel-Informationen, die verwendet werden können, um zu bestimmen, wie zuverlässig die Verbindung ist ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Wörterbuch enthält jetzt das Feld `framesEncoded`, das die Anzahl der Frames meldet, die für den Stream erfolgreich kodiert wurden; mit dieser Information können Sie die Bildfrequenz berechnen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt einen [pref](https://bugzil.la/1265755#c36), um die Hardware-Videokodierung zur Verbesserung der Videoanrufleistung und zum Energiesparen zu aktivieren. Dies soll standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert werden ([Firefox Bug 1265755](https://bugzil.la/1265755)).

#### Verschlüsselte Medienerweiterungen API

- Firefox erlaubt derzeit, dass verschlüsselte Medienerweiterungen in unsicheren Kontexten verwendet werden, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Absetzungswarnungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox Bug 1361000](https://bugzil.la/1361000)).
- Firefox verlangt derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt in den `suggestedConfigurations`-Parameter, der in [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, enthalten ist, was die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung in der Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs zu spezifizieren. Bald wird das Versäumnis, eine gültige Konfiguration für ein oder mehrere Audio- und Videoformate einzuschließen, eine Ausnahme auslösen ([Firefox Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)-Erweiterung ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar ([Firefox Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1268804](https://bugzil.la/1268804)).
- Das Laden gemischter Inhalte ist jetzt auf Localhost erlaubt ([Firefox Bug 903966](https://bugzil.la/903966)).
- Das Laden von Remote-Archivdateien (JAR) wurde erneut deaktiviert ([Firefox Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "klicken-um-zu-aktivieren" ([Firefox Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50% der Beta-Nutzer umgesetzt. Für die Firefox 55 Release-Version ist geplant, dies für 5% der Nutzer 2 Wochen nach dem Release, für 25% der Nutzer 4 Wochen nach dem Release und für 100% der Nutzer 6 Wochen nach dem Release zu aktivieren ([Firefox Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr aus irgendeiner URL außer `http://` und `https://` geladen werden ([Firefox Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann jetzt im Headless-Modus mit dem Flag `-headless` betrieben werden (siehe [Firefox Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Webplattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr dazu verwendet werden, die Basis-URL für im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut erscheinende Pfade zu setzen, beispielsweise —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Bug 1350521](https://bugzil.la/1350521)).

- Das [`style`](/de/docs/Web/HTML/Reference/Elements/style#scoped)-Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einem Pref (`layout.css.scoped-style.enabled`) ausgeblendet, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attributs des {{htmlelement("meta")}}-Elements wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt es, und es verursachte Kompatibilitätsprobleme ([Firefox Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element`-Pseudoklasse wurde entfernt ([Firefox Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration`-Wert der {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde bisher von keinem Browser außer Firefox unterstützt und war niemals vollständig implementiert, außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern in Einklang zu stehen.
- Die proprietäre Firefox OS Device Storage API wurde aus der Plattform entfernt ([Firefox Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht standardisierten [`Window.find()`](/de/docs/Web/API/Window/find)-Methode (der angegeben werden konnte, um ein "Find"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox Bug 1348409](https://bugzil.la/1348409)).
- Die `HTMLFormElement.requestAutoComplete()`-Methode wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Bug 1270740](https://bugzil.la/1270740)).
- Die nicht standardisierten, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Wörterbuch entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden aus der SVG2 Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>`-Attribut ([Firefox Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [`contextMenus.create()`'s Befehls-Eigenschaft ermöglicht Ihnen, Browseraktionen-Popups, Seitenaktionen-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [Proxy-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides Schlüssel ermöglicht es Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- `browser_style`-Eigenschaft ermöglicht es Ihnen, Browser-ähnliches Styling für [Browseraktionen-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu erhalten.
- [Berechtigungen-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
