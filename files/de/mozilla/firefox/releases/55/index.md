---
title: Firefox 55 Versionshinweise für Entwickler
short-title: Firefox 55
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen der Filterung von Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Bug 1041895](https://bugzil.la/1041895), [Firefox Bug 1354508](https://bugzil.la/1354508), [Firefox Bug 1354507](https://bugzil.la/1354507)) und durch die Verwendung von regulären Ausdrücken ([Firefox Bug 1354495](https://bugzil.la/1354495)).
- Ermöglichen, Spalten im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) anzuzeigen und auszublenden ([Firefox Bug 862855](https://bugzil.la/862855)).
- Hinzufügen von Remote-IP ([Firefox Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten ([Firefox Bug 1356869](https://bugzil.la/1356869)) zum Network Monitor.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird nun unterstützt (vorherige Versionen unterstützten den veralteten `X-SourceMap` Header, siehe [Firefox Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden nun {{htmlelement("div")}} -Elemente, um verschiedene Textzeilen zu trennen und Firefox damit an andere moderne Browser anzugleichen ([Firefox Bug 1297414](https://bugzil.la/1297414)).
- Aktivierung von `dom.forms.datetime` standardmäßig in Nightly ([Firefox Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die {{cssxref("transform-box")}} Eigenschaft ist jetzt standardmäßig verfügbar ([Firefox Bug 1208550](https://bugzil.la/1208550)).
- Die `frames()` Timing-Funktion wurde implementiert ([Firefox Bug 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}} Eigenschaft wurde implementiert ([Firefox Bug 1343512](https://bugzil.la/1343512), [Firefox Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte `inline-start` und `inline-end` für {{cssxref("float")}} / {{cssxref("clear")}}, die zuvor implementiert, aber in den Release-Kanälen deaktiviert waren, sind nun standardmäßig in allen Kanälen verfügbar ([Firefox Bug 1253919](https://bugzil.la/1253919)).
- Die Einstellung `layout.css.variables.enabled` wurde vollständig entfernt, was bedeutet, dass die [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)-Funktion immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties` Eigenschaft wurde implementiert ([Firefox Bug 1058040](https://bugzil.la/1058040)).
- Ein Winkelwert von Null (0) ohne Grad-Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}} Pseudoelement wird jetzt unterstützt; es stimmt zu den im Medienelement präsentierten Text-Cues überein ([Firefox Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{ SVGAttr("fr") }} Attribut wurde implementiert ([Firefox Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} Objekte sind jetzt standardmäßig aktiviert. Weitere Informationen über das neue Kommunikationsverfahren in JavaScript Shared Memory und Atomics finden Sie in [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/).
- Der Rest-Operator (`...`) wird jetzt im [Objektdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert nun in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden nun unterstützt ([Firefox Bug 1353693](https://bugzil.la/1353693)).
- Die {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} Methoden unterstützen jetzt einen optionalen `locale` Parameter, um ein Sprach-Tag für sprachenspezifische Groß-/Kleinschreibwandlungen anzugeben ([Firefox Bug 1318403](https://bugzil.la/1318403)).
- Das {{jsxref("Intl/Collator", "Intl.Collator")}} Objekt unterstützt jetzt die Option `caseFirst` ([Firefox Bug 866473](https://bugzil.la/866473)).
- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet nun, wenn keine Locale-Einstellung angegeben ist, die Standard-Locale des Browsers anstelle der des Betriebssystems ([Firefox Bug 1346674](https://bugzil.la/1346674)).
- [Template Call Site Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm kanonisiert, basierend auf ihrer Liste von Rohstrings ([Firefox Bug 1108941](https://bugzil.la/1108941)).
- {{jsxref("TypedArray")}} Konstruktoren (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}} usw.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex` Operation und erlauben Konstruktoren ohne Argumente, die null-längige typisierte Arrays zurückgeben ([Firefox Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist nun standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Einstellung verfügbar war. Diese API ermöglicht es, Aufgaben zu planen, die ausgeführt werden, wenn der Browser feststellt, dass vor dem nächsten Repaint Zeit verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungsprobleme zu verursachen ([Firefox Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig auf Windows aktiviert (und auf macOS in Nightly verfügbar). Diese API macht Virtual-Reality-Geräte – beispielsweise Head-Mounted-Displays wie Oculus Rift oder HTC Vive – für Web-Apps zugänglich und ermöglicht Entwicklern, Positions- und Bewegungsinformationen vom Display in Bewegungen durch eine 3D-Szene zu übersetzen und Inhalte auf solchen Displays zu präsentieren.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API), die eine Möglichkeit bietet, Änderungen im Schnittbereich eines Ziel-Elements mit einem Vorfahren oder mit dem Viewport eines Top-Level-Dokuments asynchron zu beobachten, wurde hinzugefügt ([Firefox Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window) Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie ihre Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixelgenau zu sein. Anstelle eines ganzzahligen Wertes geben diese nun einen Gleitkommawert zurück, der die Scrollposition auf subpixelgenauen Displays genauer beschreibt ([Firefox Bug 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie {{jsxref("Math.round()")}} verwenden, um sie in ganze Zahlen zu konvertieren.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen. Siehe [Firefox Bug 1354441](https://bugzil.la/1354441), und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, trimmen nun automatisch Leerzeichen und entfernen doppelte Tokens ([Firefox Bug 869788](https://bugzil.la/869788), siehe auch [Trimming of whitespace and removal of duplicates](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt dynamisch mit JavaScript geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL) Konstruktor kann kein `DOMString` mehr als Basis (2. Parameter) akzeptieren – es wird nur noch ein `USVString` akzeptiert. Es kann immer noch ein existierendes [`URL`](/de/docs/Web/API/URL) Objekt als Basis verwenden, das sich zu dem `href` Attribut des Objekts zu einem String wandelt ([Firefox Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützten Ereignistypen wurden entsprechend der neuesten DOM-Spezifikation aktualisiert ([Firefox Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) Eigenschaft ist nun vom Typ `USVString`, nicht `DOMString`, und die [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) Eigenschaft nimmt jetzt einen `MessageEventSource` Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann) ([Firefox Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde jetzt mit dem [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis und der + `Ctrl`-Taste verbunden. Diese Zuordnung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoom-Funktionen mit der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu implementieren (Mousewheel + `Ctrl` zoomt typischerweise) ([Firefox Bug 1052253](https://bugzil.la/1052253)).

#### Selection API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie nun Parität mit anderen Browsern aufweist, in Bezug auf, wie Bearbeitungs-Hosts fokussiert werden, wenn die Auswahl innerhalb dieser verschoben wird ([Firefox Bug 1318312](https://bugzil.la/1318312)). Siehe [Behavior of Selection API in terms of editing host focus changes](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige Änderungen in der neuesten Spezifikation zu berücksichtigen ([Firefox Bug 1359371](https://bugzil.la/1359371)):
  - Die Parameter `offset` der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) sind nun optional.
  - Der Parameter `node` der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist nun nullable.
  - Der Parameter `partialContainment` der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/en-US.docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Ebenfalls in der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, um die Webkompatibilität zu verbessern und Parität zu WebKit/Blink herzustellen ([Firefox Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window` Kontexten verfügbar gemacht ([Firefox Bug 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und Shared Workers können nun mit einer unterscheidenden `name` Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen nun einem Mindestintervall Drosselung für Tracking-Skripte in Hintergrund-Tabs — siehe [Throttling of tracking scripts](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_scripts) ([Firefox Bug 1355311](https://bugzil.la/1355311)).

#### Service Workers/Push

- Nachrichten, die an Service-Worker-Kontexte gesendet werden (z.B. als Ereignis-Objekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden nun durch [`MessageEvent`](/de/docs/Web/API/MessageEvent) Objekte dargestellt, um eine Konsistenz mit anderen Webmessaging-Funktionen zu erzielen.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert nun {{jsxref("ArrayBuffer")}}s und Base64-kodierte Strings als `applicationServerKey` Werte ([Firefox Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht standardmäßiger Konstruktor (der einen String-Enum-Wert akzeptierte, der den Zweck angibt, für den der Kontext verwendet werden sollte) für das [`AudioContext`](/de/docs/Web/API/AudioContext) Interface verursachte Fehler, wenn der `options` Parameter angegeben wurde. Wir haben den nicht standardmäßigen Konstruktor entfernt. Beachten Sie jedoch bitte, dass der `options` Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) liefert nun standardmäßig einen Stereo-Audiostream, wenn das Quellgerät Stereo-Ton bereitstellt; die Unterstützung, ausdrücklich Mono-Eingang anzufordern, kommt in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56). Dies funktioniert derzeit nur auf dem Desktop; mobile Firefox-Versionen unterstützen derzeit keine Stereo-Audioeingangsquellen ([Firefox Bug 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [Medienfähigkeiten, -einschränkungen und -einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` entsprechen nun der Spezifikation; zuvor waren sie `moz`-präfixiert ([Firefox Bug 1366415](https://bugzil.la/1366415)).
- Beim Aufruf mit einem leeren Einschränkungs-Set gab `getUserMedia()` fälschlicherweise `NotSupportedError` anstelle von `TypeError` zurück. Dies wurde behoben ([Firefox Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCInboundRTPStreamStats` Wörterbuchfeld, das zuvor `mozRtt` genannt wurde, wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; zusätzlich wurde sein Verhalten angepasst, um dem Standard zu entsprechen: es enthält einen Gleitkommawert mit doppelter Präzision, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (nach dem Algorithmus beschrieben in {{RFC(3550, "", "6.4.1")}}). ([Firefox Bug 1344970](https://bugzil.la/1344970)). Beachten Sie jedoch, dass _diese Eigenschaft bald in ein anderes Wörterbuch (`RTCRemoteInboundRTPStreamStats`) verschoben_ wird ([Firefox Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats` Wörterbuch enthält nun die Felder `firCount`, `pliCount` und `nackCount`. Diese geben Informationen auf niedriger Ebene zurück, die verwendet werden können, um festzustellen, wie zuverlässig die Verbindung ist ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats` Wörterbuch enthält nun das Feld `framesEncoded`, das die Anzahl der Frames meldet, die für den Stream erfolgreich kodiert wurden; mit diesen Informationen können Sie die Bildrate berechnen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Pref](https://bugzil.la/1265755#c36), um die Hardware-Video-Codierung zu aktivieren, um die Leistung von Videoanrufen zu verbessern und die Akkulaufzeit zu verlängern. In [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) wird sie standardmäßig aktiviert sein ([Firefox Bug 1265755](https://bugzil.la/1265755)).

#### Encrypted Media Extensions API

- Firefox erlaubt derzeit die Verwendung von Encrypted Media Extensions in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Warnungen in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht ([Firefox Bug 1361000](https://bugzil.la/1361000)).
- Firefox erfordert derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities` Objekt im `suggestedConfigurations` Parameter enthalten ist, das an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation verlangt. Ab Firefox 55 wird eine Warnung in der Webkonsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs anzugeben. Bald wird das Versäumnis, eine gültige Konfiguration für eines oder mehrere von Audio und Video anzugeben, eine Ausnahme auslösen ([Firefox Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) Erweiterung ist nun für [WebGL](/de/docs/Web/API/WebGL_API) und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar ([Firefox Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ([Firefox Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ([Firefox Bug 1268804](https://bugzil.la/1268804)).
- Das Laden von gemischten Inhalten ist jetzt auf localhost erlaubt ([Firefox Bug 903966](https://bugzil.la/903966)).
- Das Laden von entfernten JAR-Dateien wurde erneut deaktiviert ([Firefox Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "click-to-activate" ([Firefox Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nightly-Nutzer und 50% der Beta-Nutzer umgesetzt. Für die Firefox 55 Freigabeversion wird geplant, diese Funktion für 5% der Nutzer 2 Wochen nach der Freigabe zu aktivieren, für 25% der Nutzer 4 Wochen nach der Freigabe und für 100% der Nutzer 6 Wochen nach der Freigabe ([Firefox Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr aus einer anderen URL-Schema als `http://` und `https://` geladen werden ([Firefox Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann jetzt im headless Modus mit dem `-headless` Flag ausgeführt werden (siehe [Firefox Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Webplattform

### HTML

- Das `xml:base` Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade festzulegen, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut erscheinen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Bug 1350521](https://bugzil.la/1350521)).

- Das `scoped` Attribut des {{htmlelement("style")}} Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einem Pref (`layout.css.scoped-style.enabled`) versteckt, da es in keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible` Wert des {{htmlelement("meta")}} Elements in dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt es und es verursachte Kompatibilitätsprobleme ([Firefox Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element` Pseudo-Klasse wurde entfernt ([Firefox Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration` Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die Eigenschaft `UIEvent.isChar` wurde nur von Firefox unterstützt und war niemals vollständig implementiert, außer auf macOS. Daher wurde sie in Firefox 55 entfernt, um mit anderen Browsern in Einklang zu kommen.
- Die proprietäre Firefox OS Device Storage API wurde aus der Plattform entfernt ([Firefox Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog` Parameter der nicht standardmäßigen [`Window.find()`](/de/docs/Web/API/Window/find) Methode (der angegeben werden konnte, um ein "Finden"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Bug 1270740](https://bugzil.la/1270740)).
- Die nicht standardmäßigen, Mozilla-spezifischen WebRTC-Offer-Optionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions` Wörterbuch entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent` und `SVGZoomEvents` Schnittstellen wurden aus der SVG2 Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>` Attribut ([Firefox Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s command property enables you to open browser action popups, page action popups, and sidebars from the context menu.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [Der chrome_settings_overrides Schlüssel ermöglicht es Ihnen, die Startseite des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die browser_style-Eigenschaft ermöglicht es Ihnen, browserähnliche Stilierung für [Browser-Aktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu verwenden.
- [Berechtigungen API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)
