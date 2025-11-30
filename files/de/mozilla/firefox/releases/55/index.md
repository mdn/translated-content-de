---
title: Firefox 55 Versionshinweise für Entwickler
short-title: Firefox 55
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Hinzufügen der Filterung von Netzwerk-Anfragen nach Spaltenwerten und anderen Eigenschaften ([Firefox Bug 1041895](https://bugzil.la/1041895), [Firefox Bug 1354508](https://bugzil.la/1354508), [Firefox Bug 1354507](https://bugzil.la/1354507)) und durch reguläre Ausdrücke ([Firefox Bug 1354495](https://bugzil.la/1354495)).
- Möglichkeit zum Anzeigen und Verstecken von Spalten im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt ([Firefox Bug 862855](https://bugzil.la/862855)).
- Remote-IP ([Firefox Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies-Spalten zum Netzwerkmonitor hinzugefügt ([Firefox Bug 1356869](https://bugzil.la/1356869)).
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (vorherige Versionen unterstützten den veralteten `X-SourceMap`-Header, siehe [Firefox Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden jetzt {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox auf Augenhöhe mit anderen modernen Browsern zu bringen ([Firefox Bug 1297414](https://bugzil.la/1297414)).
- `dom.forms.datetime` ist jetzt standardmäßig in Nightly aktiviert ([Firefox Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Das {{cssxref("transform-box")}}-Eigenschaft ist jetzt standardmäßig verfügbar ([Firefox Bug 1208550](https://bugzil.la/1208550)).
- Die `frames()`-Zeitfunktion wurde implementiert ([Firefox Bug 1248340](https://bugzil.la/1248340)).
- Die {{cssxref("text-justify")}}-Eigenschaft wurde implementiert ([Firefox Bug 1343512](https://bugzil.la/1343512), [Firefox Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die volle Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte von {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` — die zuvor implementiert, aber in Release-Kanälen abgeschaltet waren, sind jetzt in allen Kanälen standardmäßig verfügbar ([Firefox Bug 1253919](https://bugzil.la/1253919)).
- Die Einstellung `layout.css.variables.enabled` wurde vollständig entfernt, was bedeutet, dass die Funktion [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox Bug 1312328](https://bugzil.la/1312328)).
- Die proprietäre Eigenschaft `-moz-context-properties` wurde implementiert ([Firefox Bug 1058040](https://bugzil.la/1058040)).
- Ein Null (0) Winkelwert ohne Gradenheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}} Pseudo-Element wird jetzt unterstützt; es entspricht den Textmarkierungen, die innerhalb eines Medienelements präsentiert werden ([Firefox Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das {{svgelement("radialGradient")}} {{ SVGAttr("fr") }} Attribut wurde implementiert ([Firefox Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die {{jsxref("SharedArrayBuffer")}}- und {{jsxref("Atomics")}}-Objekte sind jetzt standardmäßig aktiviert. Siehe [Ein Vorgeschmack auf die neuen parallelen Primitiven von JavaScript](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in die gemeinsame Nutzung von JavaScript-Speicher und Atomics.
- Der Rest-Operator (`...`) wird jetzt in [Objektzerlegung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) unterstützt, und der Spread-Operator (`...`) funktioniert nun in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stufe 3 ECMAScript-Vorschlag: [Objekt-Rest/Spread-Eigenschaften](https://github.com/tc39/proposal-object-rest-spread), [Firefox Bug 1339395](https://bugzil.la/1339395)).
- [Asynchrone Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter zur Angabe eines Sprachcodes für lokalspezifische Groß-/Kleinschreibungsmappings ([Firefox Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt jetzt die `caseFirst`-Option ([Firefox Bug 866473](https://bugzil.la/866473)).
- Die [Intl-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standard-Lokale des Browsers statt der des Betriebssystems, wenn keine Lokaleinstellung angegeben wird ([Firefox Bug 1346674](https://bugzil.la/1346674)).
- [Template-Call-Sites-Objekte](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt pro Realm kanonisiert, basierend auf ihrer Liste von Rohstrings ([Firefox Bug 1108941](https://bugzil.la/1108941)).
- Die Konstruktoren von {{jsxref("TypedArray")}} (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}} usw.) wurden auf ES2017 aktualisiert. Sie verwenden jetzt die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, die null lange typisierte Arrays zurückgeben ([Firefox Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [API zur kollaborativen Planung von Hintergrundaufgaben](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 über eine Einstellung verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden, wenn der Browser feststellt, dass freie Zeit verfügbar ist, bevor der nächste Neuzeichenvorgang stattfindet, sodass Ihr Code diese Zeit nutzen kann, ohne sichtbare Leistungseinbußen zu verursachen ([Firefox Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist jetzt standardmäßig auf Windows aktiviert (und auf macOS in Nightly verfügbar). Diese API gibt Web-Apps Zugriff auf Virtual-Reality-Geräte — beispielsweise Head-Mounted-Displays wie Oculus Rift oder HTC Vive — und ermöglicht es Entwicklern, Positions- und Bewegungsinformationen vom Display in Bewegungen in einer 3D-Szene zu übersetzen und Inhalte in solche Displays zu präsentieren.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die eine Möglichkeit bietet, asynchron Änderungen an der Schnittmenge eines Ziel-Elements mit einem Vorfahren-Element oder mit dem {{Glossary("Viewport", "Viewport")}} eines Dokuments auf oberster Ebene zu beobachten — wurde hinzugefügt ([Firefox Bug 1321865](https://bugzil.la/1321865)).

#### DOM

- Die [`Window`](/de/docs/Web/API/Window) Eigenschaften [`scrollX`](/de/docs/Web/API/Window/scrollX) und [`scrollY`](/de/docs/Web/API/Window/scrollY) (sowie ihre Aliase `pageXOffset` und `pageYOffset`) wurden aktualisiert, um subpixelgenau zu sein. Statt eines ganzzahligen Werts geben diese jetzt einen Fließkomma-Wert zurück, der die Scrollposition auf subpixelgenauen Bildschirmen genauer beschreibt ([Firefox Bug 1151421](https://bugzil.la/1151421)). Falls erforderlich, können Sie {{jsxref("Math.round()")}} verwenden, um sie in Ganzzahlen zu konvertieren.
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) (und andere verwandte Funktionen) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen. Siehe [Firefox Bug 1354441](https://bugzil.la/1354441) und besuchen Sie auch [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) und [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent).
- Methoden der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die den Listwert ändern, trimmen jetzt automatisch Leerzeichen und entfernen doppelte Token ([Firefox Bug 869788](https://bugzil.la/869788), siehe auch [Trimming von Leerzeichen und Entfernen von Duplikaten](/de/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- Die `maxLength`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) kann jetzt nach Erstellen des entsprechenden HTML-Dokuments dynamisch mit JavaScript geändert werden ([Firefox Bug 1352799](https://bugzil.la/1352799)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor kann keinen `DOMString` mehr als Basis (2. Parameter) akzeptieren — es wird nur noch ein `USVString` akzeptiert. Er kann jedoch weiterhin ein existierendes [`URL`](/de/docs/Web/API/URL)-Objekt als Basis verwenden, welches sich selbst zu dem `href`-Attribut des Objekts konvertiert ([Firefox Bug 1368950](https://bugzil.la/1368950)).

#### DOM-Ereignisse

- Die Ereignistypen, die von der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) unterstützt werden, wurden gemäß der neuesten DOM-Spezifikation aktualisiert ([Firefox Bug 1251198](https://bugzil.la/1251198)).
- Der Wert der Eigenschaft [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) ist jetzt vom Typ `USVString`, nicht `DOMString`, und die Eigenschaft [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) nimmt nun einen `MessageEventSource`-Wert an (dies kann ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein) ([Firefox Bug 1311324](https://bugzil.la/1311324)).
- Die Geste zum Zoomen durch Zusammendrücken wurde jetzt dem [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis plus der `Ctrl`-Taste zugeordnet. Diese Zuordnung wurde implementiert, um Entwicklern zu ermöglichen, einfache Zoomfunktionen mithilfe der Pinch-to-Zoom-Geste auf Mobilbildschirmen/Trackpads zu implementieren (Mausrad + `Ctrl` zoomt gewöhnlich) ([Firefox Bug 1052253](https://bugzil.la/1052253)).

#### Selection API

- Die [Selection API](/de/docs/Web/API/Selection) wurde aktualisiert, sodass sie in Bezug auf die Fokussierung von Bearbeitungs-Hosts, wenn die Auswahl in ihnen verschoben wird, mit anderen Browsern gleichwertig ist ([Firefox Bug 1318312](https://bugzil.la/1318312)). Siehe [Verhalten der Selection API in Bezug auf Änderungen des Fokus des Bearbeitungshosts](/de/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) für weitere Details.
- Die [`Selection`](/de/docs/Web/API/Selection) API wurde aktualisiert, um einige jüngste Spezifikationsänderungen zu berücksichtigen ([Firefox Bug 1359371](https://bugzil.la/1359371)):
  - Der `offset`-Parameter der Methoden [`collapse()`](/de/docs/Web/API/Selection/collapse) und [`extend()`](/de/docs/Web/API/Selection/extend) ist jetzt optional.
  - Der `node`-Parameter der Methode [`collapse()`](/de/docs/Web/API/Selection/collapse) ist nun nullable.
  - Der `partialContainment`-Parameter der Methode [`containsNode()`](/de/docs/Web/API/Selection/containsNode) ist jetzt optional.
  - Die Methode [`deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument) wurde hinzugefügt.

- Auch innerhalb der [`Selection`](/de/docs/Web/API/Selection) API wurden `Selection.empty()` und `Selection.setPosition()` als Aliase von [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) und [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) hinzugefügt, aus Gründen der Web-Kompatibilität und um Parität mit WebKit/Blink zu erreichen ([Firefox Bug 1359387](https://bugzil.la/1359387)).
- Die Methoden [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) und [`StorageManager.persisted()`](/de/docs/Web/API/StorageManager/persisted) der [Storage API](/de/docs/Web/API/Storage_API) wurden implementiert und in `Window`-Kontexten verfügbar gemacht ([Firefox Bug 1286717](https://bugzil.la/1286717)).

#### Workers

- Workers und geteilte Workers können nun mit einer identifizierenden `name`-Eigenschaft erstellt werden. Siehe die Konstruktoren [`Worker()`](/de/docs/Web/API/Worker/Worker) und [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker) sowie die Schnittstellen [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope). ([Firefox Bug 1364297](https://bugzil.la/1364297)).
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) unterliegen jetzt Mindestintervall-Drosselung für Tracking-Skripte in Hintergrund-Tabs — siehe [Drosselung von Tracking-Skripten](/de/docs/Web/API/Window/setTimeout#throttling_of_tracking_scripts) ([Firefox Bug 1355311](https://bugzil.la/1355311)).

#### Service Worker/Push

- Nachrichten, die an Service-Worker-Kontexte gesendet werden (z. B. als Ereignisobjekt von [`onmessage`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)), werden jetzt durch [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekte dargestellt, um Konsistenz mit anderen Web-Messaging-Funktionen zu gewährleisten.
- Die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) akzeptiert nun {{jsxref("ArrayBuffer")}}s und Base64-kodierte Strings als `applicationServerKey`-Werte ([Firefox Bug 1337348](https://bugzil.la/1337348)).

#### Web Audio API

- Ein nicht-standardmäßiger Konstruktor (der einen String-Enum-Wert akzeptierte, der angab, zu welchem Zweck der Kontext verwendet werden sollte) für die [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle verursachte Fehler, als der `options`-Parameter bereitgestellt wurde. Wir haben den nicht-standardmäßigen Konstruktor entfernt. Bitte beachten Sie jedoch, dass der `options`-Parameter in Firefox noch nicht unterstützt wird und derzeit ignoriert wird ([Firefox Bug 1361475](https://bugzil.la/1361475)).

#### WebRTC

- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) stellt nun standardmäßig einen Stereo-Audiostream bereit, wenn das Quellgerät Stereo-Sound liefert; Unterstützung zur gezielten Anforderung von Mono-Eingang wird in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) kommen. Dies funktioniert derzeit nur auf dem Desktop; mobil unterstützt Firefox derzeit keine Stereo-Audioeingabegeräte ([Firefox Bug 971528](https://bugzil.la/971528)).
- Die [Mediafähigkeiten, Beschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) `autoGainControl` und `noiseSuppression` von `getUserMedia()` entsprechen jetzt der Spezifikation; früher waren sie mit `moz`-Präfix versehen ([Firefox Bug 1366415](https://bugzil.la/1366415)).
- Wenn `getUserMedia()` mit einem leeren Constraints-Set aufgerufen wurde, wurde fälschlicherweise `NotSupportedError` statt `TypeError` zurückgegeben. Dies wurde behoben ([Firefox Bug 1349480](https://bugzil.la/1349480)).
- Die folgenden neuen WebRTC-Statistiken sind verfügbar: `framesEncoded`, `pliCount`, `nackCount` und `firCount` ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das ehemals `mozRtt` genannte Feld des `RTCInboundRTPStreamStats`-Dictionaries wurde in `roundTripTime` umbenannt, um der Spezifikation zu entsprechen; außerdem wurde sein Verhalten an die Standards angepasst: es enthält einen doppelt genauen Fließkommawert, der die Round-Trip-Zeit basierend auf den RTCP-Zeitstempeln im RTCP-Empfängerbericht schätzt, gemessen in Sekunden (laut dem in {{RFC(3550, "", "6.4.1")}} beschriebenen Algorithmus). ([Firefox Bug 1344970](https://bugzil.la/1344970)). Allerdings sei darauf hingewiesen, dass _diese Eigenschaft bald_ zu einem anderen Dictionary (`RTCRemoteInboundRTPStreamStats`) bewegt wird ([Firefox Bug 1380555](https://bugzil.la/1380555)).
- Das `RTCRTPStreamStats`-Dictionary enthält jetzt die Felder `firCount`, `pliCount` und `nackCount`. Diese geben niedrigstufige Informationen zurück, die verwendet werden können, um zu bestimmen, wie zuverlässig die Verbindung ist ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Das `RTCOutboundRTPStreamStats`-Dictionary enthält jetzt das Feld `framesEncoded`, das die Anzahl der erfolgreich für den Stream kodierten Frames meldet; mit diesen Informationen können Sie die Bildrate berechnen ([Firefox Bug 1348657](https://bugzil.la/1348657)).
- Auf Android gibt es jetzt eine [Pref](https://bugzil.la/1265755#c36), um Hardware-Video-Encoding zu aktivieren, um die Videoanrufleistung zu verbessern und Energie zu sparen. Um standardmäßig in [Firefox 56](/de/docs/Mozilla/Firefox/Releases/56) aktiviert zu werden ([Firefox Bug 1265755](https://bugzil.la/1265755)).

#### Verschlüsselte Medienerweiterungen API

- Firefox erlaubt derzeit die Verwendung von verschlüsselten Medienerweiterungen in unsicheren Kontexten, obwohl dies in der Spezifikation nicht erlaubt ist. Dies wird sich in naher Zukunft ändern, und ab Firefox 55 werden Deprecation-Warnungen in die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgegeben, wenn dies erfolgt. ([Firefox Bug 1361000](https://bugzil.la/1361000)).
- Firefox verlangt derzeit nicht, dass mindestens ein `MediaKeySystemCapabilities`-Objekt im `suggestedConfigurations`-Parameter enthalten ist, der in [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) übergeben wird, was die Spezifikation vorschreibt. Ab Firefox 55 wird eine Warnung in die Web-Konsole ausgegeben, wenn eine Audio- oder Videokonfiguration angegeben wird, ohne unterstützte Codecs anzugeben. Bald wird das Fehlen einer gültigen Konfiguration für eines oder mehrere von Audio und Video eine Ausnahme auslösen ([Firefox Bug 1368683](https://bugzil.la/1368683)).

#### WebGL

- Die [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)-Erweiterung ist jetzt für [WebGL](/de/docs/Web/API/WebGL_API)- und [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar ([Firefox Bug 1325113](https://bugzil.la/1325113)).

### Sicherheit

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) ist nun nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ([Firefox Bug 1072859](https://bugzil.la/1072859)).
- Die [Storage API](/de/docs/Web/API/Storage_API) ist nun nur in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ([Firefox Bug 1268804](https://bugzil.la/1268804)).
- Das Laden von Mixed Content ist jetzt auf localhost erlaubt ([Firefox Bug 903966](https://bugzil.la/903966)).
- Das Laden von Remote-JAR-Dateien wurde erneut deaktiviert ([Firefox Bug 1329336](https://bugzil.la/1329336)).

### Plugins

- Flash-Inhalte sind jetzt "Click-to-Activate" ([Firefox Bug 1317856](https://bugzil.la/1317856)). Dies wurde sofort für alle Nutzer von Nightly und 50% der Beta-Nutzer in Kraft gesetzt. Für die Freigabeversion von Firefox 55 ist geplant, dies 2 Wochen nach der Veröffentlichung für 5% der Nutzer zu aktivieren, 4 Wochen nach der Veröffentlichung für 25% der Nutzer und 6 Wochen nach der Veröffentlichung für 100% der Nutzer ([Firefox Bug 1365714](https://bugzil.la/1365714)).
- Flash und andere Plugins können nicht mehr von einem anderen URL-Schema außer `http://` und `https://` geladen werden ([Firefox Bug 1335475](https://bugzil.la/1335475)).

### Sonstiges

- Firefox auf Linux kann jetzt im Kopflos-Modus mit der `-headless`-Flagge ausgeführt werden (siehe [Firefox Bug 1356681](https://bugzil.la/1356681)).

## Entfernungen aus der Webplattform

### HTML

- Das `xml:base`-Attribut kann nicht mehr verwendet werden, um die Basis-URL für Pfade im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut festzulegen, zum Beispiel —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ([Firefox Bug 1350521](https://bugzil.la/1350521)).

- Das `scoped`-Attribut des {{htmlelement("style")}}-Elements wurde in Inhaltsdokumenten in Firefox 55+ hinter einer Einstellung (`layout.css.scoped-style.enabled`) versteckt, da es von keinem anderen Browser unterstützt wird.
- Die Unterstützung für den obskuren `MSThemeCompatible`-Wert des [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attributs des {{htmlelement("meta")}}-Elements wurde aus Firefox entfernt. Kein anderer moderner Browser unterstützt es und es verursachte Kompatibilitätsprobleme ([Firefox Bug 966240](https://bugzil.la/966240)).

### CSS

- Die proprietäre `:-moz-bound-element`-Pseudo-Klasse wurde entfernt ([Firefox Bug 1350147](https://bugzil.la/1350147)).
- Der proprietäre `-moz-anchor-decoration`-Wert der {{cssxref("text-decoration-line")}}-Eigenschaft wurde entfernt ([Firefox Bug 1355734](https://bugzil.la/1355734)).

### APIs

- Die `UIEvent.isChar`-Eigenschaft wurde außer vom Firefox-Browser von keinem anderen Browser unterstützt und war nie vollständig implementiert außer auf macOS. Aus diesem Grund wurde sie in Firefox 55 entfernt, um mit anderen Browsern in Einklang zu stehen.
- Die proprietäre Firefox-OS-Device-Storage-API wurde aus der Plattform entfernt ([Firefox Bug 1299500](https://bugzil.la/1299500)).
- Der `aShowDialog`-Parameter der nicht-standardmäßigen [`Window.find()`](/de/docs/Web/API/Window/find)-Methode (der angegeben werden konnte, um ein "Suchen"-Dialog im Browser zu öffnen) wurde entfernt ([Firefox Bug 1348409](https://bugzil.la/1348409)).
- Die Methode `HTMLFormElement.requestAutoComplete()` wurde entfernt (siehe [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)) ([Firefox Bug 1270740](https://bugzil.la/1270740)).
- Die nicht-standardmäßigen, Mozilla-spezifischen WebRTC-Angebotsoptionen `mozDontOfferDataChannel` und `mozBundleOnly` wurden aus dem `RTCOfferOptions` Dictionary entfernt und werden von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) nicht mehr unterstützt ([Firefox Bug 1196974](https://bugzil.la/1196974)).
- Die Unterstützung für die proprietäre Firefox-OS `Audio Channels API` wurde aus [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) und [`AudioContext`](/de/docs/Web/API/AudioContext) entfernt ([Firefox Bug 1358061](https://bugzil.la/1358061)).

### SVG

- Die `SVGZoomEvent`- und `SVGZoomEvents`-Schnittstellen wurden aus dem SVG2-Spezifikationsentwurf und Gecko entfernt, zusammen mit dem `onzoom <svg>`-Attribut ([Firefox Bug 1314388](https://bugzil.la/1314388)).

## Änderungen für Add-On und Mozilla-Entwickler

### WebExtensions

- [contextMenus.create()'s Befehlseigenschaft ermöglicht es Ihnen, Browser-Aktions-Popups, Seiten-Aktions-Popups und Sidebars aus dem Kontextmenü zu öffnen.](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides key ermöglicht es Ihnen, die Homepage des Browsers zu überschreiben.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- Die browser_style-Eigenschaft ermöglicht es Ihnen, eine browserähnliche Gestaltung für [Browser-Aktions-Popups](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [Sidebars](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) zu haben.
- [permissions API](/de/docs/Mozilla/Add-ons/WebExtensions/API/permissions)
