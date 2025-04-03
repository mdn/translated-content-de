---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen von Filtern für Netzwerkanfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Fehler 1041895](https://bugzil.la/1041895), [Firefox Fehler 1354508](https://bugzil.la/1354508), [Firefox Fehler 1354507](https://bugzil.la/1354507)) und mit regulären Ausdrücken ([Firefox Fehler 1354495](https://bugzil.la/1354495)).
- Möglichkeit zum Anzeigen und Ausblenden von Spalten im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt ([Firefox Fehler 862855](https://bugzil.la/862855)).
- Hinzufügen der Spalten für Remote-IP ([Firefox Fehler 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Fehler 1345489](https://bugzil.la/1345489)), Schema ([Firefox Fehler 1356867](https://bugzil.la/1356867)), Cookies und festgelegte Cookies zum Netzwerkmonitor ([Firefox Fehler 1356869](https://bugzil.la/1356869)).
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap`-Header, siehe [Firefox Fehler 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden nun {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen und Firefox mit anderen modernen Browsern gleichzustellen ([Firefox Fehler 1297414](https://bugzil.la/1297414)). Siehe [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) für weitere Details.
- Aktivieren von `dom.forms.datetime` standardmäßig in Nightly ([Firefox Fehler 1366188](https://bugzil.la/1366188)).

### CSS

- Das {{cssxref("transform-box")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox Fehler 1208550](https://bugzil.la/1208550)).
- Die `frames()`-Timing-Funktion wurde implementiert ([Firefox Fehler 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}}-Eigenschaft wurde implementiert ([Firefox Fehler 1343512](https://bugzil.la/1343512), [Firefox Fehler 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die gesamte Klemmen-Größe in {{cssxref("repeat", "repeat()")}} ([Firefox Fehler 1359060](https://bugzil.la/1359060)).
- Die logischen Werte `inline-start` und `inline-end` für {{cssxref("float")}} / {{cssxref("clear")}} – die zuvor implementiert, aber in Release-Kanälen ausgeschaltet waren – sind jetzt standardmäßig in allen Kanälen verfügbar ([Firefox Fehler 1253919](https://bugzil.la/1253919)).
- Die `layout.css.variables.enabled`-Einstellung wurde vollständig entfernt, was bedeutet, dass die [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)-Funktion immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Fehler 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties`-Eigenschaft wurde implementiert ([Firefox Fehler 1058040](https://bugzil.la/1058040)).
- Ein Winkelwert von Null (0) ohne Gradmaß wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Fehler 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudoelement wird jetzt unterstützt; es stimmt mit Text-Cues überein, die innerhalb eines Medienelements präsentiert werden ([Firefox Fehler 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{ SVGAttr("fr") }}-Attribut wurde implementiert ([Firefox Fehler 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die {{jsxref("SharedArrayBuffer")}}- und {{jsxref("Atomics")}}-Objekte sind jetzt standardmäßig aktiviert. Siehe [Eine Kostprobe der neuen parallelen JavaScript-Primitiven](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Rest-Operator (`...`) wird jetzt in [Objekt-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Fehler 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Fehler 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprach-Tag für locale-spezifische Fallunterscheidungen anzugeben ([Firefox Fehler 1318403](https://bugzil.la/1318403)).
- Das {{jsxref("Intl/Collator", "Intl.Collator")}}-Objekt unterstützt jetzt die `caseFirst`-Option ([Firefox Fehler 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standardsprache des Browsers anstelle der Standardsprache des Betriebssystems, wenn keine Spracheinstellung angegeben wird ([Firefox Fehler 1346674](https://bugzil.la/1346674)).
- [Template Call Sites Objects](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm kanonisiert, basierend auf ihrer Liste von Roh-Strings ([Firefox Fehler 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}} usw.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die typisierte Arrays der Länge null zurückgeben ([Firefox Fehler 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht das Planen von Aufgaben, die ausgeführt werden sollen, wenn der Browser feststellt, dass vor dem nächsten Neuzeichnen Zeit frei ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungsunterbrechungen zu verursachen ([Firefox Fehler 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist nun standardmäßig unter Windows aktiviert (und unter macOS in Nightly verfügbar). Diese API stellt virtuelle Realität Geräte — zum Beispiel Head-Mounted Displays wie die Oculus Rift oder HTC Vive — Web-Apps zur Verfügung, wodurch Entwickler Position und Bewegungsinformationen des Displays in Bewegungen innerhalb einer 3D-Szene übersetzen und Inhalte in solche Displays einbringen können.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen in der Überschneidung eines Zielelements mit einem Vorfahrenelement oder mit einem obersten Dokumenten-{{Glossary("Viewport", "viewport")}} asynchron zu beobachten — wurde hinzugefügt ([Firefox Fehler 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window)-Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie ihre Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixelgenaue Werte zurückzugeben. Statt eines Integer-Werts geben diese nun einen Gleitkommawert zurück, der die Scrollposition auf subpixelgenauen Anzeigen genauer beschreibt ([Firefox Fehler 1151421](https://bugzil.la/1151421)). Falls erforderlich, können Sie {{jsxref("Math.round()")}} verwenden, um sie in Integer-Werte umzuwandeln.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um dem neuesten Standard zu entsprechen. Siehe [Firefox Fehler 1354441](https://bugzil.la/1354441) und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert modifizieren, kürzen jetzt automatisch Leerzeichen und entfernen doppelte Tokens ([Firefox Fehler 869788](https://bugzil.la/869788), siehe auch [Trimming of whitespace and removal of duplicates](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann nun dynamisch mit JavaScript geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox Fehler 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann keine `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur `USVString`. Er kann jedoch immer noch ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwenden, welches sich auf das `href`-Attribut des Objekts string-codiert ([Firefox Fehler 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die Ereignistypen, die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützt werden, wurden gemäß dem neuesten DOM-Standard aktualisiert ([Firefox Fehler 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist jetzt vom Typ `USVString` und nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) übernimmt jetzt einen `MessageEventSource`-Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) ([Firefox Fehler 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun dem [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis mit der `Ctrl`- Taste zugewiesen. Diese Zuordnung wurde implementiert, um es Entwicklern zu ermöglichen, mithilfe der Pinch-to-Zoom-Geste auf Mobilbildschirmen/Trackpads einfache Zoom-Funktionalitäten zu implementieren (Mousewheel + `Ctrl` zoomt normalerweise) ([Firefox Fehler 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, um zu erreichen, dass sie mit anderen Browsern übereinstimmt, wie Bearbeitungshosts fokussiert werden, wenn die Auswahl in sie hinein bewegt wird ([Firefox Fehler 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Auswahl-API in Bezug auf Änderungen des Fokus des Bearbeitungshosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige kürzliche Änderungen im Standard zu berücksichtigen ([Firefox Fehler 1359371](https://bugzil.la/1359371)):

  - Der `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullfähig.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase für [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Web-Kompatibilität und der Gleichstellung mit WebKit/Blink ([Firefox Fehler 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und für `Window`-Kontexte freigegeben ([Firefox Fehler 1286717](https://bugzil.la/1286717)).

#### Worker

- Worker und gemeinsame Worker können nun mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox Fehler 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen jetzt der Drosselung des Mindestintervalls für Tracking-Skripte in Hintergrund-Reitern — siehe [Drosselung von Timeout-Tracking-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox Fehler 1355311](https://bugzil.la/1355311)).

#### Service Worker/Push

- Nachrichten, die an Service Worker-Kontexte gesendet werden (z.B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event), werden nun durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt, um Konsistenz mit anderen Webnachrichtenfunktionen zu gewährleisten.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert jetzt {{jsxref("ArrayBuffer")}}s und Base64-codierte Strings als `applicationServerKey`-Werte ([Firefox Fehler 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardmäßiger Konstruktor (der einen String-Enum-Wert akzeptierte, der den Zweck angibt, für den der Kontext verwendet wird) für die Schnittstelle [`AudioContext`](/de/docs/Web/API/AudioContext) verursachte Fehler, wenn der `options`-Parameter bereitgestellt wurde. Wir haben den nicht standardmäßigen Konstruktor entfernt. Bitte beachten Sie jedoch, dass der `options`-Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Fehler 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) liefert jetzt standardmäßig einen Stereo-Audiostream, wenn das Quellgerät Stereo-Ton bietet; Unterstützung für die spezifische Anforderung von Mono-Eingang wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf Desktops; Mobile Firefox-Versionen unterstützen derzeit keine Stereo-Audioeingangsquellen ([Firefox Fehler 971528](https://bugzil.la/971528)).
- Die [Medienfähigkeiten, -einschränkungen und -einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` von `getUserMedia()` entsprechen jetzt der Spezifikation; früher waren sie `moz`-gekennzeichnet ([Firefox Fehler 1366415](https://bugzil.la/1366415)).
- Wenn es mit einem leeren Einschränkungssatz aufgerufen wurde, gab `getUserMedia()` fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurück. Dies wurde behoben ([Firefox Fehler 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Das früher als `mozRtt` bezeichnete Feld im `RTCInboundRTPStreamStats` Dictionary wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; außerdem wurde sein Verhalten an den Standard angepasst: es enthält einen Doppelpräzisions-Gleitkommawert, der die Schleifenlaufzeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (entsprechend dem im {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus). ([Firefox Fehler 1344970](https://bugzil.la/1344970)). Bitte beachten Sie jedoch, dass _diese Eigenschaft bald zu einem anderen Dictionary (`RTCRemoteInboundRTPStreamStats`) verschoben wird_ ([Firefox Fehler 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Dictionary enthält nun die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern Informationen auf niedriger Ebene, die zur Bestimmung der Zuverlässigkeit der Verbindung verwendet werden können ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Dictionary enthält jetzt das Feld `framesEncoded`, das die Anzahl der erfolgreich codierten Frames für den Stream angibt; Mit diesen Informationen können Sie die Bildwiederholrate berechnen ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Einstellung](https://bugzil.la/1265755#c36), um die Hardware-Video-Codierung zu aktivieren, um die Videogesprächsleistung zu verbessern und den Akkuverbrauch zu reduzieren. Diese wird standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert ([Firefox Fehler 1265755](https://bugzil.la/1265755)).

#### API für verschlüsselte Medienerweiterungen

- Firefox erlaubt derzeit verschlüsselte Medienerweiterungen in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden bei diesem Vorgang Deprecation-Warnungen an die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben ([Firefox Fehler 1361000](https://bugzil.la/1361000)).
- Firefox benötigt derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung an die Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration ohne Angabe unterstützter Codecs spezifiziert ist. Bald wird das Fehlen einer gültigen Konfiguration für eines oder mehrere der Audio- und Videokomponenten eine Ausnahme auslösen ([Firefox Fehler 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar ([Firefox Fehler 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1268804](https://bugzil.la/1268804)).
- Das Laden von gemischtem Inhalt auf localhost ist jetzt erlaubt ([Firefox Fehler 903966](https://bugzil.la/903966)).
- Das Laden von entfernten JAR-Dateien wurde erneut deaktiviert ([Firefox Fehler 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "click-to-activate" ([Firefox Fehler 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50% der Beta-Nutzer aktiviert. Für die Firefox 55-Version ist geplant, dies für 5% der Nutzer 2 Wochen nach Veröffentlichung, 25% der Nutzer 4 Wochen nach Veröffentlichung und 100% der Nutzer 6 Wochen nach Veröffentlichung zu aktivieren ([Firefox Fehler 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von jeder URL-Schema außer `http://` und `https://` geladen werden ([Firefox Fehler 1335475](https://bugzil.la/1335475)).

### Andere

- Firefox auf Linux kann nun im Headless-Modus mit dem `-headless`-Flag ausgeführt werden (siehe [Firefox Fehler 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Webplattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr verwendet werden, um die Basis-URL für in dem [`style`](/de/docs/Web/HTML/Global_attributes/style) Attribut erscheinende Pfade festzulegen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Fehler 1350521](https://bugzil.la/1350521)).

- Das [`scoped`](/de/docs/Web/HTML/Element/style#scoped)-Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten hinter einer Einstellung (`layout.css.scoped-style.enabled`) in Firefox 55+ versteckt, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den seltenen `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributs des {{htmlelement("meta")}}-Elements wurde aus Gecko entfernt. Kein anderer moderner Browser unterstützt ihn und er verursachte Kompatibilitätsprobleme ([Firefox Fehler 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element`-Pseudoklasse wurde entfernt ([Firefox Fehler 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration`-Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Fehler 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde von keinem Browser außer Firefox unterstützt und sie war nie vollständig implementiert, außer unter macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern in Einklang zu stehen.
- Die proprietäre Firefox OS Device Storage API wurde aus der Plattform entfernt ([Firefox Fehler 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht-standardisierten [`Window.find()`](/de/docs/Web/API/Window/find)-Methode (die angegeben werden konnte, um ein "Find"-Dialog im Browser zu öffnen), wurde entfernt ([Firefox Fehler 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormlement)) ([Firefox Fehler 1270740](https://bugzil.la/1270740)).
- Die nicht-standardisierten, Mozilla-spezifischen, WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Dictionary entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Fehler 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Fehler 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent`- und `SVGZoomEvents`-Schnittstellen wurden aus der SVG2-Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>`-Attribut ([Firefox Fehler 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s command property ermöglicht es Ihnen, Browser-Aktions-Popups, Seitenaktions-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides Schlüssel ermöglicht es Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die `browser_style`-Eigenschaft ermöglicht es Ihnen, browserähnliche Styles für [Browseraktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu verwenden.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
