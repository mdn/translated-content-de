---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen von Filtern für Netzwerkrequests basierend auf Spaltenwerten und anderen Eigenschaften ([Firefox Fehler 1041895](https://bugzil.la/1041895), [Firefox Fehler 1354508](https://bugzil.la/1354508), [Firefox Fehler 1354507](https://bugzil.la/1354507)) sowie durch Nutzung von regulären Ausdrücken ([Firefox Fehler 1354495](https://bugzil.la/1354495)).
- Es ist nun möglich, Spalten innerhalb des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ein- und auszublenden ([Firefox Fehler 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox Fehler 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Fehler 1345489](https://bugzil.la/1345489)), Schema ([Firefox Fehler 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies Spalten ([Firefox Fehler 1356869](https://bugzil.la/1356869)) zum Netzwerkmonitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird nun unterstützt (frühere Versionen unterstützten den veralteten `X-SourceMap` Header, siehe [Firefox Fehler 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden jetzt {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox auf Augenhöhe mit anderen modernen Browsern zu bringen ([Firefox Fehler 1297414](https://bugzil.la/1297414)). Siehe [Unterschiede bei der Markup-Generierung](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable#differences_in_markup_generation) für weitere Details.
- `dom.forms.datetime` wird standardmäßig in Nightly aktiviert ([Firefox Fehler 1366188](https://bugzil.la/1366188)).

### CSS

- Das {{cssxref("transform-box")}} Attribut ist jetzt standardmäßig verfügbar ([Firefox Fehler 1208550](https://bugzil.la/1208550)).
- Die `frames()`-Timing-Funktion wurde implementiert ([Firefox Fehler 1248340](https://bugzil.la/1248340)).
- Das {{cssxref("text-justify")}} Eigenschaft wurde implementiert ([Firefox Fehler 1343512](https://bugzil.la/1343512), [Firefox Fehler 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet den Platz für die volle Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox Fehler 1359060](https://bugzil.la/1359060)).
- Die logischen Werte `inline-start` und `inline-end` der {{cssxref("float")}} / {{cssxref("clear")}} Eigenschaften — die vorher implementiert, aber in den Release-Kanälen deaktiviert waren — sind jetzt in allen Kanälen standardmäßig verfügbar ([Firefox Fehler 1253919](https://bugzil.la/1253919)).
- Die `layout.css.variables.enabled` Präferenz wurde vollständig entfernt, was bedeutet, dass die [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Funktionalität jederzeit aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Fehler 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties` Eigenschaft wurde implementiert ([Firefox Fehler 1058040](https://bugzil.la/1058040)).
- Null (0) Winkelwert ohne Gradenheit wird in {{cssxref("gradient/linear-gradient")}} nicht richtig interpretiert ([Firefox Fehler 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}} Pseudoelement ist jetzt unterstützt; es wird auf Textmarkierungen angewendet, die innerhalb eines Medienelements präsentiert werden ([Firefox Fehler 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{SVGAttr("fr")}} Attribut wurde implementiert ([Firefox Fehler 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Siehe [Ein Hauch von JavaScripts neuen parallelen Primitiven](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Restoperator (`...`) wird jetzt in [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Fehler 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generatormethoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Fehler 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale` Parameter, um ein Sprachkennzeichen für spezifische Groß- und Kleinschreibungen anzugeben ([Firefox Fehler 1318403](https://bugzil.la/1318403)).
- Das {{jsxref("Intl/Collator", "Intl.Collator")}} Objekt unterstützt jetzt die Option `caseFirst` ([Firefox Fehler 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standard-Locale des Browsers statt der des Betriebssystems, wenn keine Locale-Einstellung bereitgestellt wird ([Firefox Fehler 1346674](https://bugzil.la/1346674)).
- [Template-Knotenstellenobjekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Bereich standardisiert, basierend auf ihrer Liste roher Zeichenfolgen ([Firefox Fehler 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}} Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, etc.) wurden auf ES2017 aktualisiert. Sie verwenden nun die `ToIndex` Operation und erlauben Konstruktoren ohne Argumente, die Arrays mit null Länge zurückgeben ([Firefox Fehler 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Präferenz verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden, wenn der Browser feststellt, dass vor dem nächsten Repaint noch freie Zeit zur Verfügung steht, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox Fehler 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig unter Windows aktiviert (und in Nightly unter macOS verfügbar). Diese API gibt Virtual-Reality-Geräte — beispielsweise Kopfmontierte Displays wie Oculus Rift oder HTC Vive — an Web-Apps frei und ermöglicht es Entwicklern, Positions- und Bewegungsinformationen vom Display in Bewegung in einer 3D-Szene umzuwandeln und Inhalte auf solchen Displays darzustellen.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen im Schnittpunkt eines Zielelements mit einem Vorfahrenelement oder mit dem {{Glossary("Viewport", "viewport")}} eines Dokuments höchsten Levels asynchron zu beobachten — wurde hinzugefügt ([Firefox Fehler 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window) Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie deren Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixel-präzise zu sein. Statt eines Ganzzahlwerts geben diese jetzt einen Gleitkommawert zurück, der die Scrollposition auf subpixel-präzisen Displays genauer beschreibt ([Firefox Fehler 1151421](https://bugzil.la/1151421)). Falls nötig, können Sie mit {{jsxref("Math.round()")}} sie in Ganzzahlen umwandeln.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um dem neuesten Standard zu entsprechen. Siehe [Firefox Fehler 1354441](https://bugzil.la/1354441), und beachten Sie auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, trimmen nun automatisch Leerzeichen und entfernen doppelte Token ([Firefox Fehler 869788](https://bugzil.la/869788), siehe auch [Trimming von Leerzeichen und Entfernen von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt dynamisch mit JavaScript verändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox Fehler 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL) Konstruktor kann keine `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur noch `USVString`. Er kann weiterhin ein bestehendes [`URL`](/de/docs/Web/API/URL) Objekt als Basis verwenden, welches sich in das `href` Attribut des Objekts umwandelt ([Firefox Fehler 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die Ereignistypen, die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützt werden, wurden nach dem neuesten DOM-Standard aktualisiert ([Firefox Fehler 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist nun vom Typ `USVString` anstatt `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) akzeptiert jetzt einen `MessageEventSource`-Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort), oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann) ([Firefox Fehler 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun dem [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis plus der + `Ctrl`-Taste zugeordnet. Diese Zuordnung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoomfunktionen zu implementieren, die mit der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads funktionieren (Mausrad + `Ctrl` zoomt in der Regel) ([Firefox Fehler 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie in Bezug auf den Fokuswechsel bei Bearbeitungshosts mit anderen Browsern gleichzieht, wenn die Auswahl in sie hinein verschoben wird ([Firefox Fehler 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Selection API in Bezug auf Fokus der Bearbeitungshosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige aktuelle Spezifikationsänderungen zu berücksichtigen ([Firefox Fehler 1359371](https://bugzil.la/1359371)):
  - Die Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) haben jetzt einen optionalen `offset`-Parameter.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist nun nullable.
  - Der Parameter `partialContainment` der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Auch in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Web-Kompatibilität und WebKit/Blink Parität ([Firefox Fehler 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und für `Window`-Kontexte freigegeben ([Firefox Fehler 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können jetzt mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox Fehler 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen jetzt einem minimalen Intervallthrottling für Tracking-Skripte in Hintergrund-Tabs — siehe [Throttling von Skripttimeouts](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_timeout_scripts) ([Firefox Fehler 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- Nachrichten, die an Service Worker Kontexte gesendet werden (z. B. als das Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)) werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent) Objekte dargestellt, um Konsistenz mit anderen Web-Messaging-Features zu gewährleisten.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert nun {{jsxref("ArrayBuffer")}}s und Base64-kodierte Strings als `applicationServerKey` Werte ([Firefox Fehler 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardmäßiger Konstruktor (der einen String-Enum-Wert akzeptierte, der den Zweck angibt, für den der Kontext verwendet werden würde) der [`AudioContext`](/de/docs/Web/API/AudioContext) Schnittstelle verursachte Fehler, wenn der `options` Parameter bereitgestellt wurde. Wir haben den nicht standardmäßigen Konstruktor entfernt. Beachten Sie jedoch, dass der `options` Parameter noch nicht in Firefox unterstützt wird und derzeit ignoriert wird ([Firefox Fehler 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) liefert jetzt standardmäßig einen Stereo-Audiostream, wenn das Quellgerät Stereo-Sound bietet; die Unterstützung, um speziell Mono-Eingang anzufordern, wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf dem Desktop; auf mobilen Geräten unterstützt Firefox derzeit keine Stereo-Audioeingangsquellen ([Firefox Fehler 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [Medien-Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` entsprechen jetzt der Spezifikation; früher waren sie `moz`-präfixiert ([Firefox Fehler 1366415](https://bugzil.la/1366415)).
- Bei Aufruf mit einem leeren Einschränkungssatz gab `getUserMedia()` fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurück. Dies wurde behoben ([Firefox Fehler 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount`, und `firCount` ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Das `RTCInboundRTPStreamStats` Wörterbuch Feld, das ehemals `mozRtt` genannt wurde, wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zusätzlich wurde sein Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen doppelgenauen Fließkommawert, der die Round-Trip-Time basierend auf den RTCP-Zeitstempeln im RTCP Receiver Report schätzt, gemessen in Sekunden (nach dem im {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus) ([Firefox Fehler 1344970](https://bugzil.la/1344970)). Bitte beachten Sie jedoch, dass \_diese Eigenschaft bald in ein anderes Wörterbuch verschoben wird (`RTCRemoteInboundRTPStreamStats`) ([Firefox Fehler 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats` Wörterbuch umfasst jetzt die Felder `firCount`, `pliCount`, und `nackCount`. Diese liefern Low-Level-Informationen, die zur Bestimmung der Zuverlässigkeit der Verbindung verwendet werden können ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats` Wörterbuch umfasst nun das Feld `framesEncoded`, das die Anzahl der Frames meldet, die erfolgreich für den Stream kodiert wurden; mit dieser Information kann die Bildrate berechnet werden ([Firefox Fehler 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Präferenz](https://bugzil.la/1265755#c36), um hardwarebeschleunigte Video-Codierung zu aktivieren, um die Videoanrufleistung zu verbessern und den Akku zu schonen. Standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert ([Firefox Fehler 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox erlaubt derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Deprecation-Warnungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox Fehler 1361000](https://bugzil.la/1361000)).
- Firefox erfordert derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities` Objekt im `suggestedConfigurations` Parameter enthalten ist, der in [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung in die Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs anzugeben. Bald wird das Fehlen einer gültigen Konfiguration für mindestens einen der Bereiche Audio und Video eine Ausnahme auslösen ([Firefox Fehler 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) Erweiterung ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar ([Firefox Fehler 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist nun nur für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist nun nur für [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1268804](https://bugzil.la/1268804)).
- Das Laden gemischter Inhalte wird jetzt auf localhost erlaubt ([Firefox Fehler 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde erneut deaktiviert ([Firefox Fehler 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind nun „click-to-activate“ ([Firefox Fehler 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50 % der Beta-Nutzer in Kraft gesetzt. Für die Firefox 55 Release-Version ist der Plan, dies für 5 % der Nutzer 2 Wochen nach Veröffentlichung, 25 % der Nutzer 4 Wochen nach Veröffentlichung und 100 % der Nutzer 6 Wochen nach Veröffentlichung zu aktivieren ([Firefox Fehler 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr aus einem URL-Schema geladen werden, das nicht `http://` oder `https://` ist ([Firefox Fehler 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann nun im Headless-Modus mit dem `-headless` Flag ausgeführt werden (siehe [Firefox Fehler 1356681](https://bugzil.la/1356681)).

## Entfernt aus der Web-Plattform

### HTML

- Das `xml:base` Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade festzulegen, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut erscheinen, z. B. —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Fehler 1350521](https://bugzil.la/1350521)).

- Das Attribut [`scoped`](/de/docs/Web/HTML/Reference/Elements/style#scoped) des {{htmlelement("style")}} Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter eine Präferenz gestellt (`layout.css.scoped-style.enabled`), da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attributs des {{htmlelement("meta")}} Elements wurde aus Firefox entfernt. Keine anderen modernen Browser unterstützen es, und es verursachte Kompatibilitätsprobleme ([Firefox Fehler 966240](https://bugzil.la/966240)).

### CSS

- Der proprietäre `:-moz-bound-element` Pseudo-Klasse wurde entfernt ([Firefox Fehler 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration` Wert der {{cssxref("text-decoration-line")}} Eigenschaft wurde entfernt ([Firefox Fehler 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar` Eigenschaft wurde von keinem Browser außer Firefox unterstützt, und es wurde nie vollständig implementiert, außer unter macOS. Aus diesem Grund wurde sie aus Firefox 55 entfernt, um mit anderen Browsern übereinzustimmen.
- Die proprietäre Firefox OS Device Storage API wurde aus der Plattform entfernt ([Firefox Fehler 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog` Parameter der nicht standardmäßigen [`Window.find()`](/de/docs/Web/API/Window/find) Methode (die verwendet werden konnte, um einen „Suchen“-Dialog im Browser zu öffnen) wurde entfernt ([Firefox Fehler 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Fehler 1270740](https://bugzil.la/1270740)).
- Die nicht standardmäßigen, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions` Wörterbuch entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Fehler 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Fehler 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden aus der SVG2 Spezifikation und aus Gecko entfernt, zusammen mit dem `onzoom <svg>` Attribut ([Firefox Fehler 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Durch die command-Eigenschaft von contextMenus.create() können Sie Browser-Aktions-Popups, Seitenaktions-Popups und Sidebars aus dem Kontextmenü öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Das chrome_settings_overrides-Attribut ermöglicht es Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Durch das browser_style-Attribut können Sie browserähnliches Styling für [Browser-Aktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) verwenden.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Ältere Versionen

{{Firefox_for_developers}}
