---
title: Firefox 55 Versionshinweise für Entwickler
short-title: Firefox 55
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Hinzufügen von Filtern für Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Fehler 1041895](https://bugzil.la/1041895), [Firefox Fehler 1354508](https://bugzil.la/1354508), [Firefox Fehler 1354507](https://bugzil.la/1354507)) und durch die Verwendung von regulären Ausdrücken ([Firefox Fehler 1354495](https://bugzil.la/1354495)).
- Möglichkeit hinzugefügt, Spalten im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) anzuzeigen und auszublenden ([Firefox Fehler 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox Fehler 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Fehler 1345489](https://bugzil.la/1345489)), Schema ([Firefox Fehler 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten ([Firefox Fehler 1356869](https://bugzil.la/1356869)) zum Network Monitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap`-Header, siehe [Firefox Fehler 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist, verwenden jetzt {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox im Einklang mit anderen modernen Browsern zu bringen ([Firefox Fehler 1297414](https://bugzil.la/1297414)).
- `dom.forms.datetime` ist standardmäßig in Nightly aktiviert ([Firefox Fehler 1366188](https://bugzil.la/1366188)).

### CSS

- Die {{cssxref("transform-box")}}-Eigenschaft ist standardmäßig verfügbar ([Firefox Fehler 1208550](https://bugzil.la/1208550)).
- Die `frames()`-Timing-Funktion wurde implementiert ([Firefox Fehler 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}}-Eigenschaft wurde implementiert ([Firefox Fehler 1343512](https://bugzil.la/1343512), [Firefox Fehler 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox Fehler 1359060](https://bugzil.la/1359060)).
- Die logischen Werte {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` — die zuvor implementiert, aber in Release-Kanälen deaktiviert waren, sind jetzt standardmäßig in allen Kanälen verfügbar ([Firefox Fehler 1253919](https://bugzil.la/1253919)).
- Die `layout.css.variables.enabled`-Einstellung wurde vollständig entfernt, was bedeutet, dass das [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)-Feature immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Fehler 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties`-Eigenschaft wurde implementiert ([Firefox Fehler 1058040](https://bugzil.la/1058040)).
- Null (0) Winkelwert ohne Grad Maß wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Fehler 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}}-Pseudo-Element wird jetzt unterstützt; es passt auf Text-Hinweise innerhalb eines Medienelements ([Firefox Fehler 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{ SVGAttr("fr") }} Attribut wurde implementiert ([Firefox Fehler 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} Objekte sind jetzt standardmäßig aktiviert. Sehen Sie [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Restoperator (`...`) wird jetzt in [Destrukturierung von Objekten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Fehler 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Fehler 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprach-Tag für lokalspezifische Fallabbildungen anzugeben ([Firefox Fehler 1318403](https://bugzil.la/1318403)).
- Das {{jsxref("Intl/Collator", "Intl.Collator")}} Objekt unterstützt jetzt die `caseFirst` Option ([Firefox Fehler 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standardsprache des Browsers anstelle der des Betriebssystems, wenn keine Spracheinstellung angegeben ist ([Firefox Fehler 1346674](https://bugzil.la/1346674)).
- [Template call sites objects](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm basierend auf ihrer Liste roher Strings normalisiert ([Firefox Fehler 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}}-Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, etc.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die Arrays mit Länge null zurückgeben ([Firefox Fehler 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist nun standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Präferenz verfügbar war. Diese API ermöglicht es, Aufgaben so zu terminieren, dass sie ausgeführt werden, wenn der Browser feststellt, dass vor dem nächsten Neuzeichnen Zeit verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox Fehler 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist nun standardmäßig auf Windows aktiviert (und ist auf macOS in Nightly verfügbar). Diese API stellt Virtual-Reality-Geräte — zum Beispiel Headsets wie Oculus Rift oder HTC Vive — Web-Apps zur Verfügung, sodass Entwickler Positions- und Bewegungsinformationen vom Display in Bewegungen durch eine 3D-Szene übersetzen und Inhalte in solche Displays präsentieren können.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen bei der Schnittmenge eines Ziel-Elements mit einem Vorfahr-Element oder dem höchsten Dokument-Viewport asynchron zu beobachten — wurde hinzugefügt ([Firefox Fehler 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window) Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie deren Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixelgenaue Anzeigen zu unterstützen. Anstatt einen ganzzahligen Wert zurückzugeben, geben sie jetzt einen Gleitkommawert zurück, der die Scrollposition auf subpixelgenauen Anzeigen genauer beschreibt ([Firefox Fehler 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie {{jsxref("Math.round()")}} verwenden, um diese in Ganzzahlen umzuwandeln.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen. Siehe [Firefox Fehler 1354441](https://bugzil.la/1354441) und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listwert ändern, trimmen jetzt automatisch Leerzeichen und entfernen doppelte Tokens ([Firefox Fehler 869788](https://bugzil.la/869788), siehe auch [Trimming of whitespace and removal of duplicates](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt dynamisch mit JavaScript verändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox Fehler 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann kein `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur noch ein `USVString`. Er kann weiterhin ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwenden, das sich in das `href`-Attribut des Objekts konvertiert ([Firefox Fehler 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)-Methode unterstützten Ereignistypen wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox Fehler 1251198](https://bugzil.la/1251198)).
- Der Wert der [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin)-Eigenschaft ist nun vom Typ `USVString`, nicht `DOMString`, und die [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source)-Eigenschaft nimmt nun einen `MessageEventSource`-Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) ([Firefox Fehler 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis plus der `Ctrl`-Taste zugeordnet. Diese Zuordnung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoom-Funktionen mithilfe der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads (Mausrad + `Ctrl` zoomt normalerweise) zu implementieren ([Firefox Fehler 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, um mit anderen Browsern hinsichtlich der Fokussierung von Bearbeitungshosts gleichzuziehen, wenn sich die Auswahl in ihnen bewegt ([Firefox Fehler 1318312](https://bugzil.la/1318312)). Siehe [Behavior of Selection API in terms of editing host focus changes](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde angepasst, um einige kürzlich erfolgte Änderungen in der Spezifikation widerzuspiegeln ([Firefox Fehler 1359371](https://bugzil.la/1359371)):
  - Der `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, um Web-Kompatibilität und Gleichheit mit WebKit/Blink zu erreichen ([Firefox Fehler 1359387](https://bugzil.la/1359387)).
- Die [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted)-Methoden der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window` Kontexten verfügbar gemacht ([Firefox Fehler 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können jetzt mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) ([Firefox Fehler 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen nun einer Mindestintervall-Drosselung für Tracking-Skripte in Hintergrund-Tabs — siehe [Throttling of tracking scripts](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_scripts) ([Firefox Fehler 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- Nachrichten, die an Service Worker Kontexte gesendet werden (z.B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt, um Konsistenz mit anderen Web-Messaging-Funktionen zu gewährleisten.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert nun {{jsxref("ArrayBuffer")}}s und Base64-kodierte Zeichenfolgen als `applicationServerKey` Werte ([Firefox Fehler 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht-standardisierter Konstruktor (der einen String-Enum-Wert akzeptierte, der den Zweck angab, für den der Kontext verwendet werden würde) für die [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle verursachte Fehler, wenn der `options`-Parameter angegeben wurde. Wir haben den nicht-standardisierten Konstruktor entfernt. Bitte beachten Sie jedoch, dass der `options`-Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Fehler 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) stellt jetzt standardmäßig einen Stereo-Audio-Stream bereit, wenn das Quellgerät Stereo-Sound liefert; die Unterstützung, speziell Mono-Eingaben anzufordern, wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf dem Desktop; mobile Firefox unterstützt derzeit keine Stereo-Audio-Eingabequellen ([Firefox Fehler 971528](https://bugzil.la/971528)).
- Die [Medienfähigkeiten, Beschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` von `getUserMedia()` entsprechen jetzt der Spezifikation; früher waren sie mit `moz`-Präfix ([Firefox Fehler 1366415](https://bugzil.la/1366415)).
- Wenn `getUserMedia()` mit einem leeren Kontraints-Set aufgerufen wurde, gab es fälschlicherweise `NotSupportedError` statt `TypeError` zurück. Dies wurde behoben ([Firefox Fehler 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Das früher `mozRtt` genannte Feld im `RTCInboundRTPStreamStats`-Dictionary wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zusätzlich wurde sein Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen Double-Precision-Gleitkommawert, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (gemäß dem in {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus). ([Firefox Fehler 1344970](https://bugzil.la/1344970)). Bitte beachten Sie jedoch, dass _dieses Feld bald_ zu einem anderen Dictionary (`RTCRemoteInboundRTPStreamStats`) wechselt ([Firefox Fehler 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Dictionary enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese geben niedrigrangige Informationen zurück, die verwendet werden können, um zu bestimmen, wie zuverlässig die Verbindung ist ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Dictionary enthält jetzt das Feld `framesEncoded`, das die Anzahl der erfolgreich für den Stream kodierten Frames berichtet; mit diesen Informationen können Sie die Bildrate berechnen ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es nun eine [Einstellung](https://bugzil.la/1265755#c36), um die Hardware-Videokodierung zu aktivieren und so die Leistung von Videogesprächen zu verbessern und den Akku zu schonen. Dies soll standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert werden ([Firefox Fehler 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox erlaubt derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Abwertungswarnungen in die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies der Fall ist. ([Firefox Fehler 1361000](https://bugzil.la/1361000)).
- Firefox verlangt derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation jedoch erfordert. Ab Firefox 55 wird eine Warnung in der Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs anzugeben. Bald wird das Fehlen einer gültigen Konfiguration für eines oder beide, Audio und Video, eine Ausnahme auslösen [Firefox Fehler 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)-Erweiterung ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar ([Firefox Fehler 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ([Firefox Fehler 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch für [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ([Firefox Fehler 1268804](https://bugzil.la/1268804)).
- Das Laden von gemischten Inhalten ist jetzt auf localhost erlaubt ([Firefox Fehler 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde erneut deaktiviert ([Firefox Fehler 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "Click-to-Activate" ([Firefox Fehler 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50% der Beta-Nutzer umgesetzt. Für die Firefox 55 Release-Version ist geplant, dies für 5% der Nutzer 2 Wochen nach der Veröffentlichung, 25% der Nutzer 4 Wochen nach der Veröffentlichung und 100% der Nutzer 6 Wochen nach der Veröffentlichung zu aktivieren ([Firefox Fehler 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von einem anderen URL-Schema geladen werden, außer von `http://` und `https://` ([Firefox Fehler 1335475](https://bugzil.la/1335475)).

### Anderes

- Firefox auf Linux kann jetzt im Headless-Modus mit dem `-headless`-Flag ausgeführt werden (siehe [Firefox Fehler 1356681](https://bugzil.la/1356681)).

## Entfernung aus der Web-Plattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade festzulegen, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut erscheinen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Fehler 1350521](https://bugzil.la/1350521)).

- Das `scoped`-Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter eine Präferenz (`layout.css.scoped-style.enabled`) gesetzt, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des `http-equiv`-Attributs des {{htmlelement("meta")}}-Elements wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt es, und es verursachte Kompatibilitätsprobleme ([Firefox Fehler 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element`-Pseudosklasse wurde entfernt ([Firefox Fehler 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration`-Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Fehler 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde von keinem anderen Browser als Firefox unterstützt und wurde nur auf macOS vollständig implementiert. Aus diesem Grund wurde sie in Firefox 55 entfernt, um sich an anderen Browsern auszurichten.
- Die proprietäre Device Storage API von Firefox OS wurde aus der Plattform entfernt ([Firefox Fehler 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht standardmäßigen [`Window.find()`](/de/docs/Web/API/Window/find)-Methode (die angegeben werden konnte, um einen "Finden"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox Fehler 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Fehler 1270740](https://bugzil.la/1270740)).
- Die Mozilla-spezifischen WebRTC-Offer-Optionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions`-Dictionary entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Fehler 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Fehler 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden aus der SVG2-Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>`-Attribut ([Firefox Fehler 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Mit der `command`-Eigenschaft von contextMenus.create() können Sie Browser-Aktions-Popups, Seitenaktions-Popups und Sidebars aus dem Kontextmenü öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Mit der `chrome_settings_overrides`-Eigenschaft können Sie die Homepage des Browsers überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die `browser_style`-Eigenschaft ermöglicht es Ihnen, browserähnliches Styling für [Browser-Aktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action), und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu haben.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)
