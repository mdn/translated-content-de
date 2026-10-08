---
title: Versionshinweise zu Firefox 52 für Entwickler
short-title: Firefox 52
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [Der Modus „Responsives Design“ wurde vollständig überarbeitet, einschließlich der Auswahl des User Agents und der Netzwerkdrosselung.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt jetzt Timing-Funktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält jetzt einen CSS-Grid-Inspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt jetzt den Status von Service Workern an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor bietet eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt Textknoten an, die nur aus Leerraum bestehen.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle zwischen Firefox 51 und Firefox 52 behobenen Fehler in den Entwicklerwerkzeugen](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der [Linktyp](/de/docs/Web/HTML/Reference/Attributes/rel) `rel="noopener"` wurde implementiert (siehe [Firefox-Fehler 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- Die Pseudoklasse {{cssxref(":focus-within")}} wurde hinzugefügt ([Firefox-Fehler 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und ein Columnset-Layout innerhalb von {{HTMLElement("button")}}-Elementen wurde hinzugefügt ([Firefox-Fehler 984869](https://bugzil.la/984869)).
- Die Interpolation zwischen numerischen Farbwerten und [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) wurde implementiert ([Firefox-Fehler 1299741](https://bugzil.la/1299741)).
- Das Flexbox-Layout für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` wurde implementiert ([Firefox-Fehler 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Antialiasing bei CSS-{{cssxref("mask")}} und CSS-{{cssxref("clip-path")}} wurde hinzugefügt ([Firefox-Fehler 1305259](https://bugzil.la/1305259)).
- Die Regeln zur Umwandlung von Segmentumbrüchen aus CSS Text 3 wurden implementiert ([Firefox-Fehler 1081858](https://bugzil.la/1081858)).
- Das Beschneiden mit Grundformen (angewendet über die Eigenschaft {{cssxref("clip-path")}}) kann jetzt auch auf SVG-Inhalte angewendet werden ([Firefox-Fehler 1246741](https://bugzil.la/1246741)).
- Das Flexbox-Layout für {{cssxref("align-self")}} und {{cssxref("justify-self")}} wurde implementiert ([Firefox-Fehler 1221524](https://bugzil.la/1221524)).
- Die Eigenschaft {{cssxref("touch-action")}} ist jetzt auf allen Plattformen standardmäßig aktiviert. (Weitere Hintergründe finden Sie in [der ersten Ankündigung zur Einführung](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [der zweiten Ankündigung zur Einführung](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Die Verarbeitung von {{cssxref("align-content")}} und die Größenberechnung bei einzeiligen Flexbox-Layouts sollten von {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Zeilen ([Firefox-Fehler 1090031](https://bugzil.la/1090031)).
- Mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) können jetzt auch nicht interpolierbare Eigenschaften animiert werden (siehe [Firefox-Fehler 1064937](https://bugzil.la/1064937)).
- `baseline|last-baseline` wurde in `[ first | last ]? baseline` geändert ([Firefox-Fehler 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist auf der Blockachse `start` ([Firefox-Fehler 1221565](https://bugzil.la/1221565)).
- Beim Strecken flexibler Spuren mit einer unbestimmten Länge des umgebenden Blocks werden jetzt die Mindest- und Höchstgrößen berücksichtigt ([Firefox-Fehler 1309407](https://bugzil.la/1309407)).
- Die Anfangswerte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden in `0% 0%` beziehungsweise `repeat` geändert ([Firefox-Fehler 1308963](https://bugzil.la/1308963)).
- An CSS-{{cssxref("&lt;color&gt;")}}-Werten wurden mehrere Änderungen vorgenommen (siehe [Firefox-Fehler 1295456](https://bugzil.la/1295456)):
  - `rgba()` und `hsla()` wurden als Aliase von `rgb()` und `hsl()` neu definiert; beide akzeptieren dieselbe Parametersyntax.
  - `rgb()` und `hsl()` akzeptieren jetzt einen optionalen Alphawert, beispielsweise `rgb(255, 0, 0, 0.5)`.
  - Farbfunktionen akzeptieren jetzt durch Leerzeichen statt durch Kommas getrennte Parameter, beispielsweise `rgb(255 0 0 / 0.5)`.
  - Alphawerte können jetzt sowohl als Prozentwerte als auch als Zahlen angegeben werden, beispielsweise `rgb(255 0 0 / 50%)`.
  - Die Farbtonkomponente von `hsl()`-Farben kann jetzt sowohl als Winkel als auch als Zahl angegeben werden, beispielsweise `hsl(120deg, 60%, 70%)`.

- Die Firefox-Implementierung von Pseudoklassen, die sich auf die Position unter Geschwisterelementen beziehen (wie {{cssxref(":nth-child")}}, {{cssxref(":first-child")}} usw.), wurde an die Spezifikation CSS Selectors Level 4 angepasst: Diese Pseudoklassen stimmen jetzt mit den entsprechenden Geschwisterelementen überein, statt mit den Kindern ihres Elternelements. Dadurch können sie auch verwendet werden, wenn kein Elternelement vorhanden ist oder der Elternknoten kein [`Element`](/de/docs/Web/API/Element) ist ([Firefox-Fehler 1300374](https://bugzil.la/1300374)).

#### CSS-Grids

- [CSS-Grids](/de/docs/Web/CSS/Guides/Grid_layout) wurden implementiert.

#### Änderungen und Entfernungen

- Mehrspalten-Eigenschaften sind jetzt ohne Präfix verfügbar; Varianten mit dem Präfix `-moz` wurden vorerst als Aliase wieder hinzugefügt ([Firefox-Fehler 1300895](https://bugzil.la/1300895)).
- Absolut positionierte Kindelemente von Flex-Containern werden nicht mehr in anonyme Flex-Elemente eingeschlossen ([Firefox-Fehler 1269045](https://bugzil.la/1269045)).
- Grundlinien für Grid-Container wurden implementiert ([Firefox-Fehler 1151204](https://bugzil.la/1151204)).
- Die Mindestgrößenberechnung für `<flex>` wurde aus dem Stilsystem entfernt ([Firefox-Fehler 1305244](https://bugzil.la/1305244)).
- Die Einstellung `layout.css.masking.enabled` wurde entfernt ([Firefox-Fehler 1308239](https://bugzil.la/1308239)).
- Die proprietären [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) `-moz-images-in-menus` und `-moz-images-in-buttons` wurden entfernt (siehe [Firefox-Fehler 1302157](https://bugzil.la/1302157)).
- Der Wert `-moz-use-text-color` wurde aus Farbeigenschaften entfernt; verwenden Sie stattdessen [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) ([Firefox-Fehler 1306214](https://bugzil.la/1306214)).
- \[css-grid] Ein auf einem Grid-Element gesetztes `max-width` führt dazu, dass Text überläuft ([Firefox-Fehler 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für asynchrone Funktionen wurde hinzugefügt. Dazu gehören die Deklaration {{jsxref("Statements/async_function", "async function")}}, der Ausdruck {{jsxref("Operators/async_function", "async function")}} und das Schlüsselwort {{jsxref("Operators/await", "await")}} ([Firefox-Fehler 1185106](https://bugzil.la/1185106)).
- ES2017-[Abschlusskommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen wurden implementiert ([Firefox-Fehler 1303788](https://bugzil.la/1303788)).
- [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde implementiert ([Firefox-Fehler 1243717](https://bugzil.la/1243717)).
- Der [Potenzierungsoperator (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) ist jetzt standardmäßig aktiviert ([Firefox-Fehler 1291212](https://bugzil.la/1291212)).
- Sie können jetzt [IANA-Zeitzonennamen](https://www.iana.org/time-zones) in der Option `timeZone` datumsbezogener APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox-Fehler 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernungen

- Bei der [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) wird jetzt ein {{jsxref("SyntaxError")}} ausgelöst, wenn auf ein Rest-Element ein Abschlusskomma folgt ([Firefox-Fehler 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__`-Eigenschaften sind bei der [Objekt-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) jetzt zulässig ([Firefox-Fehler 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die Intl-API-Parameter `locales` und `options` zu unterstützen ([Firefox-Fehler 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}}-Konstruktoren akzeptieren jetzt [iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue typisierte Arrays zu erstellen ([Firefox-Fehler 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}} und {{jsxref("TypedArray.prototype.subarray()")}} setzen jetzt voraus, dass ihre `this`-Werte gültige Typed-Array-Konstruktoren sind ([Firefox-Fehler 1122396](https://bugzil.la/1122396)).
- Die nicht standardisierte Methode {{jsxref("ArrayBuffer.slice()")}} (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) ist veraltet und gibt bei Verwendung jetzt eine Warnung aus ([Firefox-Fehler 1316913](https://bugzil.la/1316913)).
- [Escape-Sequenzen für Unicode-Codepunkte](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können jetzt auch als Bezeichner verwendet werden (z. B. `let \u{61} = 123`; siehe [Firefox-Fehler 1314037](https://bugzil.la/1314037)).
- Um ES2015 zu entsprechen, lösen `\u2e2f` und `ⸯ` bei Verwendung als Bezeichner jetzt einen Fehler aus. Einzelheiten finden Sie unter [Firefox-Fehler 917436](https://bugzil.la/917436) und [Firefox-Fehler 1197230](https://bugzil.la/1197230).

### WebAssembly

- Gecko unterstützt jetzt [WebAssembly](/de/docs/WebAssembly).

### DOM

- Die [Selection API](/de/docs/Web/API/Selection) ist jetzt vollständig verfügbar, einschließlich der neuen Ereignisse [`selectstart`](/de/docs/Web/API/Node/selectstart_event) und [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) ([Firefox-Fehler 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft [`Event.composed`](/de/docs/Web/API/Event/composed) wird jetzt unterstützt. Dieser boolesche Wert gibt an, ob das Ereignis von der Shadow Root aus in das reguläre DOM aufsteigen kann ([Firefox-Fehler 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente sowie die Elemente {{SVGElement("svg")}} und {{MathMLElement("math")}} können durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) in den Vollbildmodus versetzt werden ([Firefox-Fehler 1305928](https://bugzil.la/1305928)).
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events) wurden auf Windows-Desktopplattformen wieder aktiviert – siehe [Firefox-Fehler 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, weil sie mehrere große Websites beeinträchtigten; siehe [Firefox-Fehler 888304](https://bugzil.la/888304).)
- Die Ereignisse [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event) wurden implementiert ([Firefox-Fehler 687787](https://bugzil.la/687787)).
- Die Eigenschaft [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) wurde implementiert (siehe [Firefox-Fehler 1269052](https://bugzil.la/1269052)).
- Das install-Ereignis des [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest) wurde in [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) umbenannt, um Verwechslungen mit dem install-Ereignis von Service Workern zu vermeiden (siehe [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)). Weitere Einzelheiten zu dieser Änderung finden Sie unter [Firefox-Fehler 1309099](https://bugzil.la/1309099).
- Die Eigenschaft [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) der [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt statt einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) ein eingefrorenes Array von Zeichenfolgen zurück (siehe [Firefox-Fehler 1298243](https://bugzil.la/1298243)).
- Die Ereignisse `loadstart` und `loadend` werden jetzt für {{htmlelement("img")}}-Elemente ausgelöst (siehe [Firefox-Fehler 1264769](https://bugzil.la/1264769)).
- [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) aus der [Notifications API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox-Fehler 862395](https://bugzil.la/862395)).
- Für die Methode [`Window.open()`](/de/docs/Web/API/Window/open) ist jetzt das [Fenstermerkmal](/de/docs/Web/API/Window/open#noopener) `noopener` verfügbar (siehe [Firefox-Fehler 1267339](https://bugzil.la/1267339)). Es bietet dieselbe Funktion wie der [Linktyp](/de/docs/Web/HTML/Reference/Attributes/rel) `rel="noopener"`.
- Die Methode [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get) der [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox-Fehler 1275838](https://bugzil.la/1275838)).
- Die Eigenschaften [`width`](/de/docs/Web/API/PointerEvent/width) und [`height`](/de/docs/Web/API/PointerEvent/height) von [Pointer Events](/de/docs/Web/API/Pointer_events) haben jetzt standardmäßig den Wert 1 (siehe [Firefox-Fehler 1304315](https://bugzil.la/1304315)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde entsprechend den Änderungen in der [neuesten Spezifikation](https://wicg.github.io/entries-api/) aktualisiert (Einzelheiten finden Sie unter [Firefox-Fehler 1284987](https://bugzil.la/1284987)).
- Die Eigenschaft [`cancelBubble`](/de/docs/Web/API/Event/cancelBubble), die bisher auf [`UIEvent`](/de/docs/Web/API/UIEvent) definiert war, ist jetzt stattdessen auf dem Interface [`Event`](/de/docs/Web/API/Event) definiert. Weitere Einzelheiten finden Sie unter [Firefox-Fehler 1298970](https://bugzil.la/1298970).

#### Änderungen und Entfernungen

- Die Firefox-OS-APIs zur Verwaltung von Telefonanrufen (Contacts, MobileConnection, Icc usw.) wurden entfernt ([Firefox-Fehler 1311206](https://bugzil.la/1311206)).
- Das Firefox-OS-Interface `Identity` wurde entfernt ([Firefox-Fehler 1309030](https://bugzil.la/1309030)).
- Die Firefox-OS-Voicemail-API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox-Fehler 1309723](https://bugzil.la/1309723)).
- Die Firefox-OS-Cell-Broadcast-API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox-Fehler 1306772](https://bugzil.la/1306772)).
- Die Firefox-OS-APIs für Fernsehausstrahlungen wurden entfernt ([Firefox-Fehler 1306778](https://bugzil.la/1306778)).
- Die Firefox-OS-FM-Radio-API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox-Fehler 1306779](https://bugzil.la/1306779)).

### Service Worker und Fetch

- Die Methode `Headers.getAll()` wurde entfernt. [`Headers.get()`](/de/docs/Web/API/Headers/get) ruft jetzt alle Werte des angegebenen Headers ab, nicht nur den ersten (siehe [Firefox-Fehler 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Änderungen an der Fetch-API-Spezifikation.

### Web Audio API

- Das Interface [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) wurde hinzugefügt. Es stellt eine Audioquelle dar, die kontinuierlich einen Strom von Samples mit jeweils demselben Wert ausgibt. Ein Beispiel dafür, wie sich damit komplexe Audioabläufe vereinfachen lassen, finden Sie unter [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

### WebRTC

- Wenn eine ICE-Verbindung vorübergehend unterbrochen wird, erhält die Eigenschaft [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) jetzt den Wert `"disconnected"`. Dieser Wert kennzeichnet einen vorübergehenden Ausfall, der sich möglicherweise bald von selbst behebt; anschließend kehrt die Verbindung in den Zustand `"connected"` zurück ([Firefox-Fehler 852665](https://bugzil.la/852665)).
- Das `MediaDevices`-Ereignis [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) und der zugehörige Handler waren in Firefox 51 nur auf dem Mac implementiert und standardmäßig deaktiviert. Sie wurden jetzt auch unter Windows und Linux implementiert und sind auf allen Plattformen standardmäßig aktiviert.
- Die Eigenschaft [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) wird jetzt unterstützt. Diese schreibgeschützte boolesche Eigenschaft gibt an, ob derzeit mindestens ein Track des Streams wiedergegeben wird.
- Vor Firefox 52 konnte die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) nur lokale Tracks stoppen, also Tracks, die über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogen wurden. Jetzt können verschiedene Tracks gestoppt werden, darunter auch solche eines [`MediaStream`](/de/docs/Web/API/MediaStream), der mit einer {{Glossary("WebRTC", "WebRTC")}}-Verbindung, einem Stream der [Web Audio API](/de/docs/Web/API/Web_Audio_API) oder einem [`CanvasCaptureMediaStream`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) verknüpft ist.
- Wurde zuvor die Eigenschaft [`mode`](/de/docs/Web/API/TextTrack/mode) eines [`TextTrack`](/de/docs/Web/API/TextTrack) während eines einzigen Durchlaufs der Firefox-Ereignisschleife mehrfach geändert, wurden mehrere [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse an die [`TextTrackList`](/de/docs/Web/API/TextTrackList) übermittelt, die durch die Eigenschaft [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) des übergeordneten Medienelements angegeben wird. Diese Änderungen werden jetzt zu einem einzigen Ereignis zusammengefasst ([Firefox-Fehler 882674](https://bugzil.la/882674)).

### Audio/Video/Medien

- Die [`MediaError`](/de/docs/Web/API/MediaError)-Objekte, die bei einem Fehler bei der Verarbeitung eines {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements in [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) angegeben werden, enthalten jetzt eine Eigenschaft [`message`](/de/docs/Web/API/MediaError/message). Sie liefert eine konkrete Beschreibung des aufgetretenen Fehlers. Diese Zeichenfolge enthält Details zum jeweiligen Fehlerfall und hilft dabei, dessen Ursache zu verstehen ([Firefox-Fehler 1299072](https://bugzil.la/1299072)). Das Feld war seit Firefox 51 in den Nightly-Builds enthalten und ist jetzt in allen Builds bis hin zur Release-Version verfügbar.

### Weitere APIs

- Die in Firefox 50 hinzugefügte Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter), die allerdings immer einen Fehler zurückgab, wurde entfernt ([Firefox-Fehler 1315185](https://bugzil.la/1315185)).
- Die proprietären Firefox-OS-`Apps installation/management APIs` wurden von der Plattform entfernt (siehe [Firefox-Fehler 1261019](https://bugzil.la/1261019)).
- Die proprietäre Firefox-OS-`Web Telephony API` wurde von der Plattform entfernt (siehe [Firefox-Fehler 1309719](https://bugzil.la/1309719)).
- Die proprietäre Firefox-OS-`Web Bluetooth API` wurde von der Plattform entfernt (siehe [Firefox-Fehler 1310020](https://bugzil.la/1310020)).
- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) ist jetzt nur noch für Chrome-Code beziehungsweise privilegierten Code verfügbar (siehe [Firefox-Fehler 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde in [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) umbenannt (siehe [Firefox-Fehler 1304767](https://bugzil.la/1304767)).
- Die Member `mozDash` und `mozDashOffset` wurden aus [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) entfernt (siehe [Firefox-Fehler 931389](https://bugzil.la/931389)).

### HTTP

- Der Header {{HTTPHeader("Referrer-Policy")}} unterstützt jetzt die Direktiven `same-origin`, `strict-origin` und `strict-origin-when-cross-origin` ([Firefox-Fehler 1276836](https://bugzil.la/1276836)).
- Der [Quellausdruck `'strict-dynamic'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#strict-dynamic) wird jetzt für {{HTTPHeader("Content-Security-Policy")}}-Direktiven wie {{CSP("script-src")}} unterstützt ([Firefox-Fehler 1299483](https://bugzil.la/1299483)).
- Unsichere Websites (`http:`) können gemäß der [Strict-Secure-Cookies-Spezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) keine [Cookies](/de/docs/Web/HTTP/Guides/Cookies) mehr mit der Direktive „secure“ setzen ([Firefox-Fehler 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2-Header-Komprimierungsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox-Fehler 1296280](https://bugzil.la/1296280)).
- Der Header `Large-Allocation` wurde hinzugefügt ([Firefox-Fehler 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente werden jetzt durch das Interface [`XMLDocument`](/de/docs/Web/API/XMLDocument) statt durch SVGDocument repräsentiert. Diese Änderung wurde in der SVG-2-Spezifikation vorgenommen.

### Sicherheit

- Wenn Anmeldeseiten, also Seiten mit einem [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)-Feld, so gestaltet sind, dass die Formulardaten unsicher übermittelt würden, zeigt Firefox unter dem Passwortfeld eine kontextbezogene Warnung für Benutzer an ([Firefox-Fehler 1319119](https://bugzil.la/1319119)). Bei unsicheren Anmeldeformularen ist außerdem das automatische Ausfüllen deaktiviert ([Firefox-Fehler 1217152](https://bugzil.la/1217152)).
- Die Unterstützung für SHA-1-SSL-Zertifikate wurde entfernt. Beim Aufruf einer sicheren Seite, die ein SHA-1-Zertifikat verwendet, wird jetzt der Fehler `Untrusted Connection` angezeigt ([Firefox-Fehler 1330043](https://bugzil.la/1330043)).

## Plugins

Die Unterstützung für alle NPAPI-Plugins außer Flash wurde eingestellt. Auch die Nutzung von Flash soll künftig schrittweise eingestellt werden.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- Ereignisse [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup)
- [asynchrone Ereignis-Listener in webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- Ereignisse [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated) und [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged)
- `_execute_browser_action` und `_execute_page_action` im [Manifest-Schlüssel commands](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im Manifest-Schlüssel content_scripts

### Interfaces

- Die Methode `nsIDroppedLinkHandler.dropLinks` und das Interface `nsIDroppedLinkItem` wurden hinzugefügt, um das Ablegen mehrerer Elemente zu verarbeiten ([Firefox-Fehler 92737](https://bugzil.la/92737)).

### XUL

- Eine Überladung der Methode `tabbrowser.loadTabs(uris, params)` wurde hinzugefügt ([Firefox-Fehler 92737](https://bugzil.la/92737)).
- Die Signatur der Funktion `browser.droppedLinkHandler` wurde geändert ([Firefox-Fehler 92737](https://bugzil.la/92737)).
