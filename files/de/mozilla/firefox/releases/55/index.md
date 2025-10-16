---
title: Firefox 55 Versionshinweise für Entwickler
short-title: Firefox 55
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Filterung von Netzwerkanforderungen nach Spaltenwerten und anderen Eigenschaften hinzugefügt ([Firefox-Bug 1041895](https://bugzil.la/1041895), [Firefox-Bug 1354508](https://bugzil.la/1354508), [Firefox-Bug 1354507](https://bugzil.la/1354507)) und durch die Verwendung regulärer Ausdrücke ([Firefox-Bug 1354495](https://bugzil.la/1354495)).
- Möglichkeit hinzugefügt, Spalten im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ein- und auszublenden ([Firefox-Bug 862855](https://bugzil.la/862855)).
- Remote-IP ([Firefox-Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox-Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox-Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten zum Netzwerk-Monitor hinzugefügt ([Firefox-Bug 1356869](https://bugzil.la/1356869)).
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird nun unterstützt (vorherige Versionen unterstützten den veralteten `X-SourceMap`-Header, siehe [Firefox-Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist, verwenden jetzt `{{htmlelement("div")}}`-Elemente, um verschiedene Textzeilen zu trennen, um Firefox eine Parität mit anderen modernen Browsern zu ermöglichen ([Firefox-Bug 1297414](https://bugzil.la/1297414)).
- Aktivierung von `dom.forms.datetime` standardmäßig in Nightly ([Firefox-Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die Eigenschaft {{cssxref("transform-box")}} ist jetzt standardmäßig sichtbar ([Firefox-Bug 1208550](https://bugzil.la/1208550)).
- Die `frames()` Timing-Funktion wurde implementiert ([Firefox-Bug 1248340](https://bugzil.la/1248340)).
- Die Eigenschaft {{cssxref("text-justify")}} wurde implementiert ([Firefox-Bug 1343512](https://bugzil.la/1343512), [Firefox-Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die vollständige Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox-Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte von {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` — die vorher implementiert, aber in Freigabekanälen deaktiviert waren, sind jetzt standardmäßig in allen Kanälen verfügbar ([Firefox-Bug 1253919](https://bugzil.la/1253919)).
- Die Präferenz `layout.css.variables.enabled` wurde vollständig entfernt, was bedeutet, dass die [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) Funktion immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox-Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre `-moz-context-properties`-Eigenschaft wurde implementiert ([Firefox-Bug 1058040](https://bugzil.la/1058040)).
- Ein Null (0) Winkelwert ohne Grad-Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox-Bug 1363292](https://bugzil.la/1363292)).
- Das pseudo-Element {{cssxref("::cue")}} wird jetzt unterstützt; es stimmt mit Texthinweisen überein, die innerhalb eines Medienelements präsentiert werden ([Firefox-Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das Attribut {{ SVGAttr("fr") }} des {{svgelement("radialGradient")}}-Elements wurde implementiert ([Firefox-Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Siehe [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Restoperator (`...`) wird jetzt in [Objekt-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript-Vorschlag: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox-Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox-Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprach-Tag für sprachspezifische Groß-/Kleinschreibungen anzugeben ([Firefox-Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt jetzt die `caseFirst`-Option ([Firefox-Bug 866473](https://bugzil.la/866473)).
- Die [Intl-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standard-Spracheinstellung des Browsers anstelle der Standard-Spracheinstellung des Betriebssystems, wenn keine Spracheinstellung angegeben ist ([Firefox-Bug 1346674](https://bugzil.la/1346674)).
- [Template Call Sites-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm kanonisiert, basierend auf ihrer Liste roher Zeichenfolgen ([Firefox-Bug 1108941](https://bugzil.la/1108941)).
- Die Konstruktoren von {{jsxref("TypedArray")}} (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, usw.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die null-längen Typed Arrays zurückgeben ([Firefox-Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Präferenz verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden, wenn der Browser feststellt, dass vor dem nächsten Repaint Zeit verfügbar ist, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungsprobleme zu verursachen ([Firefox-Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig auf Windows aktiviert (und ist auf macOS in Nightly verfügbar). Diese API macht virtuelle Reality-Geräte — zum Beispiel Head-Mounted Displays wie Oculus Rift oder HTC Vive — für Webanwendungen zugänglich und ermöglicht es Entwicklern, Positions- und Bewegungsinformationen vom Display in Bewegungen innerhalb einer 3D-Szene zu übersetzen und Inhalte in solchen Displays zu präsentieren.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, Änderungen im Schnittpunkt eines Ziel-Elements mit einem Vorfahren-Element oder mit einem Top-Level-Dokumenten-{{Glossary("Viewport", "Viewport")}} asynchron zu beobachten — wurde hinzugefügt ([Firefox-Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) von [`Window`](/de/docs/Web/API/Window) (sowie ihre Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixelgenau zu sein. Sie geben jetzt einen Gleitkommawert zurück, der die Scrollposition auf subpixelgenauen Displays genauer beschreibt ([Firefox-Bug 1151421](https://bugzil.la/1151421)). Bei Bedarf können Sie {{jsxref("Math.round()")}} verwenden, um sie in ganze Zahlen umzuwandeln.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um dem neuesten Standard zu entsprechen. Siehe [Firefox-Bug 1354441](https://bugzil.la/1354441), und auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listenwert ändern, trimmen jetzt automatisch Leerzeichen und entfernen doppelte Token ([Firefox-Bug 869788](https://bugzil.la/869788), siehe auch [Trimming of whitespace and removal of duplicates](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt dynamisch mit JavaScript geändert werden, nachdem das entsprechende HTML erstellt wurde ([Firefox-Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL) Konstruktor kann keinen `DOMString` mehr als Basis (2. Parameter) akzeptieren — er akzeptiert nur einen `USVString`. Er kann jedoch weiterhin ein bestehendes [`URL`](/de/docs/Web/API/URL)-Objekt als Grundlage verwenden, das sich zum `href`-Attribut des Objekts in Zeichen verwandelt ([Firefox-Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützten Ereignistypen wurden gemäß dem neuesten DOM-Standard aktualisiert ([Firefox-Bug 1251198](https://bugzil.la/1251198)).
- Der Eigenschaftswert [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist jetzt vom Typ `USVString`, nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) nimmt jetzt einen `MessageEventSource`-Wert (der ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann) ([Firefox-Bug 1311324](https://bugzil.la/1311324)).
- Die Pinch-to-Zoom-Geste wurde nun auf das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis sowie die `Ctrl`-Taste abgebildet. Diese Zuordnung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoom-Funktionalität mit der Pinch-to-Zoom-Geste auf mobilen Bildschirmen/Trackpads zu implementieren (Mousewheel + `Ctrl` zoomt üblicherweise) ([Firefox-Bug 1052253](https://bugzil.la/1052253)).

#### Auswahl-API

- Die [Auswahl-API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie in Bezug darauf, wie Bearbeitungshosts den Fokus erhalten, wenn die Auswahl sich in ihnen bewegt, mit anderen Browsern vergleichbar ist ([Firefox-Bug 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Auswahl-API in Bezug auf die Fokusänderungen von Bearbeitungshosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection)-API wurde aktualisiert, um einige der jüngsten Änderungen des Standards widerzuspiegeln ([Firefox-Bug 1359371](https://bugzil.la/1359371)):
  - Der `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist jetzt nullbar.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Auch in der [`Selection`](/de/docs/Web/API/Selection)-API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Web-Kompatibilität und Parität mit WebKit/Blink ([Firefox-Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage-API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window`-Kontexten zur Verfügung gestellt ([Firefox-Bug 1286717](https://bugzil.la/1286717)).

#### Worker

- Worker und Shared Worker können jetzt mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox-Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen jetzt einem minimalen Intervall-Drosseln für Tracking-Skripts in Hintergrund-Registerkarten — siehe [Drosselung von Tracking-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_scripts) ([Firefox-Bug 1355311](https://bugzil.la/1355311)).

#### Service Worker/Push

- Nachrichten, die an Service Worker-Kontexte gesendet werden (z. B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt, um konsistent mit anderen Web-Messaging-Funktionen zu sein.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert jetzt {{jsxref("ArrayBuffer")}}s und Base64-kodierte Zeichenfolgen als `applicationServerKey`-Werte ([Firefox-Bug 1337348](https://bugzil.la/1337348)).

#### Web-Audio-API

- Ein nicht standardisierter Konstruktor (der einen String-Enum-Wert akzeptierte, der den Verwendungszweck des Kontexts angab) für die [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle verursachte Fehler, wenn der `options`-Parameter bereitgestellt wurde. Wir haben den nicht standardisierten Konstruktor entfernt. Bitte beachten Sie jedoch, dass der `options`-Parameter noch nicht in Firefox unterstützt wird und derzeit ignoriert wird ([Firefox-Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) liefert jetzt standardmäßig einen Stereo-Audio-Stream, wenn das Quellgerät Stereo-Sound bereitstellt; Unterstützung zum spezifischen Anfordern der Mono-Eingabe wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) verfügbar sein. Dies funktioniert derzeit nur auf dem Desktop; Mobile Firefox unterstützt derzeit keine Stereo-Audio-Eingangsquellen ([Firefox-Bug 971528](https://bugzil.la/971528)).
- Die `getUserMedia()` [Medienfähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` entsprechen jetzt der Spezifikation; früher waren sie mit `moz`-Präfix versehen ([Firefox-Bug 1366415](https://bugzil.la/1366415)).
- Bei Aufrufen mit einem leeren Einschränkungsset gab `getUserMedia()` fälschlicherweise `NotSupportedError` statt `TypeError` zurück. Dies wurde behoben ([Firefox-Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das früher als `mozRtt` bezeichnete Feld `RTCInboundRTPStreamStats` wurde in `roundTripTime` umbenannt, um mit der Spezifikation übereinzustimmen; zudem wurde sein Verhalten angepasst, um dem Standard zu entsprechen: Es enthält einen Gleitkomma-Doppelpräzisions-Wert, der basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht die Round-Trip-Zeit schätzt, gemessen in Sekunden (folgt dem Algorithmus im {{RFC(3550, "", "6.4.1")}}). ([Firefox-Bug 1344970](https://bugzil.la/1344970)). Bitte beachten Sie jedoch, dass sich _diese Eigenschaft bald_ in ein anderes Wörterbuch (`RTCRemoteInboundRTPStreamStats`) verschieben wird ([Firefox-Bug 1380555](https://bugzil.la/1380555)).
- Das Wörterbuch `RTCRTPStreamStats` enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese liefern Informationen auf niedriger Ebene, die zur Bestimmung der Zuverlässigkeit der Verbindung verwendet werden können ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Das Wörterbuch `RTCOutboundRTPStreamStats` enthält jetzt das Feld `framesEncoded`, das die Anzahl der erfolgreich für den Stream kodierten Frames angibt; mit dieser Information können Sie die Bildrate berechnen ([Firefox-Bug 1348657](https://bugzil.la/1348657)).
- Unter Android gibt es jetzt eine [Präferenz](https://bugzil.la/1265755#c36), um die Hardware-Video-Codierung zu aktivieren, um die Leistung von Videoanrufen zu verbessern und den Akku zu schonen. Um in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) standardmäßig aktiviert zu werden ([Firefox-Bug 1265755](https://bugzil.la/1265755)).

#### API für verschlüsselte Medienerweiterungen

- Firefox erlaubt derzeit die Verwendung von verschlüsselten Medienerweiterungen in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Deprecation-Warnungen im [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies geschieht. ([Firefox-Bug 1361000](https://bugzil.la/1361000)).
- Firefox erfordert derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der an [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation forciert. Ab Firefox 55 wird eine Warnung im Webkonsole ausgegeben, wenn jede Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs zu spezifizieren. Bald wird das Fehlen einer gültigen Konfiguration für eines oder mehrere der Audio- und Videoelemente eine Ausnahme auslösen [Firefox-Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die Erweiterung [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) ist jetzt in [WebGL](/de/docs/Web/API/WebGL_API)- und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten verfügbar ([Firefox-Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation-API](/de/docs/Web/API/Geolocation_API) ist jetzt nur noch in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist jetzt nur noch in [sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1268804](https://bugzil.la/1268804)).
- Das Laden gemischter Inhalte ist nun auf localhost erlaubt ([Firefox-Bug 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde erneut deaktiviert ([Firefox-Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "click-to-activate" ([Firefox-Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50% der Beta-Nutzer wirksam. Für die Firefox 55 Freigabeversion ist geplant, dies für 5% der Nutzer 2 Wochen nach Freigabe, für 25% der Nutzer 4 Wochen nach Freigabe und für 100% der Nutzer 6 Wochen nach Freigabe zu aktivieren ([Firefox-Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von einem URL-Schema außer `http://` und `https://` geladen werden ([Firefox-Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox unter Linux kann jetzt im Headless-Modus mit dem `-headless`-Flag ausgeführt werden (siehe [Firefox-Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen von der Webplattform

### HTML

- Das `xml:base` Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade festzulegen, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut erscheinen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox-Bug 1350521](https://bugzil.la/1350521)).

- Das `scoped`-Attribut des {{htmlelement("style")}}-Elements ist in Inhaltsdokumenten in Firefox 55+ hinter einer Präferenz (`layout.css.scoped-style.enabled`) versteckt, da es von keinem anderen Browser unterstützt wird.
- Unterstützung für den obskuren `MSThemeCompatible` Wert des {{htmlelement("meta")}}-Elements [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attributs wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt es, und es verursachte Kompatibilitätsprobleme ([Firefox-Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element` Pseudoklasse wurde entfernt ([Firefox-Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration` Wert von {{cssxref("text-decoration-line")}} wurde entfernt ([Firefox-Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die Eigenschaft `UIEvent.isChar` wurde nie von einem anderen Browser als Firefox unterstützt und nie vollständig implementiert außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um sich mit anderen Browsern abzugleichen.
- Die proprietäre Firefox OS Device Storage API wurde von der Plattform entfernt ([Firefox-Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog` Parameter der nicht standardisierten [`Window.find()`](/de/docs/Web/API/Window/find) Methode (die angegeben werden konnte, um im Browser einen "Find"-Dialog zu öffnen) wurde entfernt ([Firefox-Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox-Bug 1270740](https://bugzil.la/1270740)).
- Die nicht standardisierten, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions` Wörterbuch entfernt und werden nicht mehr von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) unterstützt ([Firefox-Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox-Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die Schnittstellen `SVGZoomEvent` und `SVGZoomEvents` wurden aus der SVG2-Spezifikation und Gecko entfernt, zusammen mit dem `onzoom <svg>` Attribut ([Firefox-Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s command property enables you to open browser action popups, page action popups, and sidebars from the context menu.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides key enables you to override the browser's homepage.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- browser_style property enables you to have browser-like styling for [browser action popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action), and [options pages](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui).
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)
