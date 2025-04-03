---
title: Firefox 52 für Entwickler
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [Vollständig überarbeiteter Responsive Design Modus, einschließlich UA-Auswahl und Netzwerk-Drosselung.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt jetzt Zeitfunktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält jetzt einen CSS-Grid-Inspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt jetzt den Status von Service Workern an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor bietet eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt Textknoten an, die nur aus Leerzeichen bestehen.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle behobenen Devtools-Fehler zwischen Firefox 51 und Firefox 52](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der `rel="noopener"` [Linktyp](/de/docs/Web/HTML/Attributes/rel) wurde implementiert (siehe [Firefox-Fehler 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- Die {{cssxref(":focus-within")}} Pseudoklasse wurde hinzugefügt ([Firefox-Fehler 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und columnset Layout innerhalb von {{HTMLElement("button")}} Elementen hinzugefügt ([Firefox-Fehler 984869](https://bugzil.la/984869)).
- Implementierte Interpolation zwischen numerischer Farbe und [currentcolor](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox-Fehler 1299741](https://bugzil.la/1299741)).
- Implementiertes Flexbox-Layout für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` ([Firefox-Fehler 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Antialiasing in CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} hinzugefügt ([Firefox-Fehler 1305259](https://bugzil.la/1305259)).
- Implementierte CSS Text 3 Segmentumbruch-Transformationsregeln ([Firefox-Fehler 1081858](https://bugzil.la/1081858)).
- Basisformenschnitte (wie durch die {{cssxref("clip-path")}}-Eigenschaft angewendet) können nun auf SVG-Inhalte angewendet werden ([Firefox-Fehler 1246741](https://bugzil.la/1246741)).
- Implementiertes Flexbox-Layout für {{cssxref("align-self")}}|{{cssxref("justify-self")}}: \[ first | last ]? baseline ([Firefox-Fehler 1221524](https://bugzil.la/1221524)).
- Die {{cssxref("touch-action")}}-Eigenschaft ist jetzt standardmäßig auf allen Plattformen aktiviert. (Für die vollständige Geschichte, siehe [Intent-to-Ship Mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [Intent-to-Ship Mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}} Verwaltung & Single-Line-Sizing sollten von {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Zeilen ([Firefox-Fehler 1090031](https://bugzil.la/1090031)).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) können jetzt verwendet werden, um nicht interpolierte Eigenschaften zu animieren (siehe [Firefox-Fehler 1064937](https://bugzil.la/1064937)).
- Geändert `baseline|last-baseline` zu `[ first | last ]? baseline` ([Firefox-Fehler 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist `start` für die Blockachse ([Firefox-Fehler 1221565](https://bugzil.la/1221565)).
- Das Strecken flexibler Spuren mit einer unbestimmten Länge des enthaltenden Blocks respektiert jetzt die Mindest-/Maximalgröße ([Firefox-Fehler 1309407](https://bugzil.la/1309407)).
- Die Anfangswerte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden auf `0% 0%` bzw. `repeat` geändert ([Firefox-Fehler 1308963](https://bugzil.la/1308963)).
- Es gab eine Reihe von Änderungen an CSS {{cssxref("&lt;color&gt;")}} Werten (siehe [Firefox-Fehler 1295456](https://bugzil.la/1295456)):

  - `rgba()` und `hsla()` wurden jetzt als Aliase von `rgb()` und `hsl()` neu definiert; beide akzeptieren die gleiche Parameter-Syntax.
  - `rgb(`) und `hsl()` akzeptieren jetzt einen optionalen Alphawert, z.B. `rgb(255, 0, 0, 0.5)`.
  - Farb-Funktionen akzeptieren jetzt anstelle von Kommata auch durch Leerzeichen getrennte Parameter, z.B. `rgb(255 0 0 / 0.5)`.
  - Alphawerte können jetzt als Prozentsätze und als Zahlen angegeben werden, z.B. `rgb(255 0 0 / 50%)`.
  - Die Farbton-Komponente in `hsl()`-Farben kann jetzt als Winkel sowie als Zahl angegeben werden, z.B. `hsl(120deg, 60%, 70%)`.

- Firefox' Implementierung von kindindizierten Pseudoklassen (wie {{cssxref(":nth-child")}}, {{cssxref(":first-child")}}, usw.) wurde aktualisiert, um der CSS Selektoren Level 4 Spezifikation zu entsprechen: diese Pseudoklassen stimmen jetzt mit den entsprechenden Geschwisterelementen überein und nicht mit den Kindern ihres Elternelements. Dies ermöglicht die Nutzung dieser Pseudoklassen, wenn es kein Elternelement gibt oder das Elternelement kein [`Element`](/de/docs/Web/API/Element) ist ([Firefox-Fehler 1300374](https://bugzil.la/1300374)).

#### CSS Grids

- [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) sind implementiert.

#### Änderungen und Entfernungen

- Unpräfixierte Mehrspaltige Eigenschaften (und zurückgefügte `-moz`-präfixierte Versionen als Aliase, vorerst) ([Firefox-Fehler 1300895](https://bugzil.la/1300895)).
- Beendete das Einwickeln von abspos-Kindern eines Flex-Containers in anonymen Flex-Elementen ([Firefox-Fehler 1269045](https://bugzil.la/1269045)).
- Implementierte Baselines für Grid-Container ([Firefox-Fehler 1151204](https://bugzil.la/1151204)).
- Entfernte `<flex>` Min-Größenanpassungen vom Stil-System ([Firefox-Fehler 1305244](https://bugzil.la/1305244)).
- Entfernen der Präferenz `layout.css.masking.enabled` ([Firefox-Fehler 1308239](https://bugzil.la/1308239)).
- Die proprietären `-moz-images-in-menus` und `-moz-images-in-buttons` [Medientypen](/de/docs/Web/CSS/@media#media_features) wurden entfernt (siehe [Firefox-Fehler 1302157](https://bugzil.la/1302157)).
- Entfernte `-moz-use-text-color` Wert aus Farbeigenschaften; verwenden Sie stattdessen [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox-Fehler 1306214](https://bugzil.la/1306214)).
- [css-grid] `max-width` auf Gitterelement gesetzt, verursacht Überlauf von Text ([Firefox-Fehler 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für `async` Funktionen wurde hinzugefügt. Dies fügt die {{jsxref("Statements/async_function", "async function")}} Deklaration, den {{jsxref("Operators/async_function", "async function")}} Ausdruck und das {{jsxref("Operators/await", "await")}} Schlüsselwort hinzu ([Firefox-Fehler 1185106](https://bugzil.la/1185106)).
- Implementierte ES2017 [nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen ([Firefox-Fehler 1303788](https://bugzil.la/1303788)).
- Implementierte {{jsxref("Functions/rest_parameters", "rest-Parameter Destrukturierung", "#Destructuring_rest_parameters", 1)}} ([Firefox-Fehler 1243717](https://bugzil.la/1243717)).
- Der {{jsxref("Operators", "Exponentiation Operator (**)", "#Exponentiation_(**)", 1)}} ist jetzt standardmäßig aktiviert ([Firefox-Fehler 1291212](https://bugzil.la/1291212)).
- Sie können jetzt [IANA-Zeitzonennamen](https://www.iana.org/time-zones) in der `timeZone` Option von Datums-bezogenen APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox-Fehler 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernungen

- [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) löst jetzt einen {{jsxref("SyntaxError")}} aus, wenn Destrukturierungsrest mit nachgestelltem Komma verwendet wird ([Firefox-Fehler 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__` Eigenschaften sind nun in [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) erlaubt ([Firefox-Fehler 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die Intl API-Parameter `locales` und `options` zu unterstützen ([Firefox-Fehler 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}} Konstruktoren akzeptieren jetzt [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue typisierte Arrays zu erstellen ([Firefox-Fehler 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} erfordern jetzt, dass ihre `this`-Werte gültige Typed Array-Konstruktoren sind ([Firefox-Fehler 1122396](https://bugzil.la/1122396)).
- Die nicht standardisierte {{jsxref("ArrayBuffer.slice()")}} Methode (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) ist veraltet und zeigt jetzt eine Warnung an, wenn sie verwendet wird ([Firefox-Fehler 1316913](https://bugzil.la/1316913)).
- [Unicode Codepunkt-Fluchtsequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können jetzt auch als Identifikatoren verwendet werden (z.B. `let \u{61} = 123`, siehe [Firefox-Fehler 1314037](https://bugzil.la/1314037)).
- Um mit ES2015 konform zu sein, werfen `\u2e2f` und `ⸯ` jetzt Fehler bei Nutzung als Identifikator, für Details siehe [Firefox-Fehler 917436](https://bugzil.la/917436) und [Firefox-Fehler 1197230](https://bugzil.la/1197230).

### WebAssembly

- Unterstützung für [WebAssembly](/de/docs/WebAssembly) wurde zu Gecko hinzugefügt.

### DOM

- Die [Selection API](/de/docs/Web/API/Selection) wurde vollständig geliefert, einschließlich der neuen Ereignisse [`selectstart`](/de/docs/Web/API/Node/selectstart_event) und [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) ([Firefox-Fehler 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft [`Event.composed`](/de/docs/Web/API/Event/composed) wird jetzt unterstützt; Dieser boolesche Wert gibt an, ob das Ereignis durch das Shadow Root in das standardmäßige DOM verblasen kann oder nicht ([Firefox-Fehler 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente sowie die {{SVGElement("svg")}} und {{MathMLElement("math")}} Elemente können durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) in den Vollbildmodus versetzt werden ([Firefox-Fehler 1305928](https://bugzil.la/1305928)).
- [Touch-Events](/de/docs/Web/API/Touch_events) wurden auf Windows-Desktopplattformen wieder aktiviert — siehe [Firefox-Fehler 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, da sie eine Reihe von größeren Seiten beeinträchtigten; siehe [Firefox-Fehler 888304](https://bugzil.la/888304)).
- Die [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event) Ereignisse sind jetzt implementiert ([Firefox-Fehler 687787](https://bugzil.la/687787)).
- Die [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) Eigenschaft wurde implementiert (siehe [Firefox-Fehler 1269052](https://bugzil.la/1269052)).
- Das [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest) Installationsereignis wurde in [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) umbenannt, um Verwechslungen mit dem Service Worker Installationsereignis zu vermeiden (siehe [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)). Siehe [Firefox-Fehler 1309099](https://bugzil.la/1309099) für weitere Details zu diesem Update.
- Die [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) Eigenschaft des [Drag & Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt ein gefrorenes Array von Strings anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurück (siehe [Firefox-Fehler 1298243](https://bugzil.la/1298243)).
- Die `loadstart` und `loadend` Ereignisse werden jetzt auf {{htmlelement("img")}} Elementen ausgelöst (siehe [Firefox-Fehler 1264769](https://bugzil.la/1264769)).
- Die [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) der [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox-Fehler 862395](https://bugzil.la/862395)).
- Die [`Window.open()`](/de/docs/Web/API/Window/open) Methode hat jetzt ein `noopener` [Fensterfeature](/de/docs/Web/API/Window/open#window_functionality_features) (siehe [Firefox-Fehler 1267339](https://bugzil.la/1267339)), welches die Funktionalität des `rel="noopener"` [Linktyps](/de/docs/Web/HTML/Attributes/rel) spiegelt.
- Die [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get) Methode des [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox-Fehler 1275838](https://bugzil.la/1275838)).
- [Pointer Event](/de/docs/Web/API/Pointer_events) [`width`](/de/docs/Web/API/PointerEvent/width) und [`height`](/de/docs/Web/API/PointerEvent/height) Eigenschaften haben jetzt standardmäßig den Wert 1 (siehe [Firefox-Fehler 1304315](https://bugzil.la/1304315)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde aktualisiert, um Änderungen in der [neuesten Spezifikation](https://wicg.github.io/entries-api/) zu berücksichtigen (siehe [Firefox-Fehler 1284987](https://bugzil.la/1284987) für die genauen Details).
- Die [`cancelBubble`](/de/docs/Web/API/Event/cancelBubble) Eigenschaft, die auf [`UIEvent`](/de/docs/Web/API/UIEvent) definiert war, ist jetzt auf der [`Event`](/de/docs/Web/API/Event) Schnittstelle definiert. Siehe [Firefox-Fehler 1298970](https://bugzil.la/1298970) für mehr Details.

#### Änderungen und Entfernungen

- Die Firefox OS APIs, die sich mit der Verwaltung von Telefonanrufen (Kontakte, MobileConnection, Icc usw.) befassen, wurden entfernt ([Firefox-Fehler 1311206](https://bugzil.la/1311206)).
- Die Firefox OS `Identity` Schnittstelle wurde entfernt ([Firefox-Fehler 1309030](https://bugzil.la/1309030)).
- Die Firefox OS Voicemail-API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox-Fehler 1309723](https://bugzil.la/1309723)).
- Die Firefox OS Cell Broadcast API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox-Fehler 1306772](https://bugzil.la/1306772)).
- Die Firefox OS TV Broadcast-bezogenen APIs wurden entfernt ([Firefox-Fehler 1306778](https://bugzil.la/1306778)).
- Die Firefox OS FM Radio API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox-Fehler 1306779](https://bugzil.la/1306779)).

### Service Workers und Fetch

- Die `Headers.getAll()` Methode wurde entfernt, und [`Headers.get()`](/de/docs/Web/API/Headers/get) ruft jetzt alle Werte des spezifizierten Headers ab, nicht nur den ersten (siehe [Firefox-Fehler 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Aktualisierungen der Fetch API-Spezifikation.

### Web Audio API

- Die [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Schnittstelle wurde hinzugefügt; sie stellt eine Audioquelle dar, die immer einen Stream von Proben ausgibt, die alle denselben Wert haben. Siehe [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) für ein Beispiel, das zeigt, wie dies verwendet werden kann, um einige komplexe Audioflüsse zu vereinfachen.

### WebRTC

- Wenn eine ICE-Verbindung vorübergehend unterbrochen ist, wird die [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) Eigenschaft jetzt auf `"disconnected"` gesetzt; dies zeigt einen vorübergehenden Fehler an, der sich kurzfristig selbst beheben kann, wobei die Verbindung anschließend in den Zustand `"connected"` zurückkehrt ([Firefox-Fehler 852665](https://bugzil.la/852665)).
- Das `MediaDevices` [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis und sein entsprechender Handler, die in Firefox 51 implementiert, aber standardmäßig nur auf Mac deaktiviert waren, wurden auf Windows und Linux umgesetzt und sind nun standardmäßig auf allen Plattformen aktiviert.
- Die [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) Eigenschaft wird jetzt unterstützt. Diese schreibgeschützte Boolean-Eigenschaft gibt an, ob mindestens ein Track im Stream derzeit abgespielt wird.
- Vor Firefox 52 konnte die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) Methode nur lokale Tracks stoppen (das heißt, Tracks die über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogen wurden). Jetzt können verschiedene Tracks gestoppt werden, einschließlich solcher auf einem [`MediaStream`](/de/docs/Web/API/MediaStream) verbunden mit einer {{Glossary("WebRTC", "WebRTC")}} Verbindung, [Web Audio API](/de/docs/Web/API/Web_Audio_API) Stream oder [`CanvasCaptureMediaStream`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack).
- Zuvor führte das wiederholte Ändern des [`TextTrack`](/de/docs/Web/API/TextTrack) [`mode`](/de/docs/Web/API/TextTrack/mode) während eines einzigen Durchlaufs durch die Firefox-Ereignisschleife dazu, dass mehrere [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignisse an die [`TextTrackList`](/de/docs/Web/API/TextTrackList) übermittelt wurden, die durch die `textTracks` Eigenschaft des übergeordneten Medienelements angegeben ist. Jetzt werden diese Änderungen in ein Ereignis zusammengefasst ([Firefox-Fehler 882674](https://bugzil.la/882674)).

### Audio/Video/Medien

- Die [`MediaError`](/de/docs/Web/API/MediaError) Objekte, die in [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) angegeben sind, wenn ein Fehler beim Umgang mit einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element auftritt, enthalten jetzt eine [`message`](/de/docs/Web/API/MediaError/message) Eigenschaft, die eine spezifische Beschreibung des aufgetretenen Fehlers bietet. Dieser String bietet Details, die genau bei diesem Fehlerereignis auftreten, und bietet Einblicke, warum etwas schiefgelaufen ist ([Firefox-Fehler 1299072](https://bugzil.la/1299072)). Dieses Feld war in Firefox Nightly Builds seit Firefox 51 enthalten, ist jetzt aber in allen Builds verfügbar, bis hin zu offiziellen Veröffentlichungen.

### Andere APIs

- Die Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter), die in Firefox 50 hinzugefügt (aber immer mit einem Fehler zurückgegeben) wurde, wurde entfernt ([Firefox-Fehler 1315185](https://bugzil.la/1315185)).
- Die proprietären Firefox OS `Apps Installation-/Verwaltungs-APIs` wurden von der Plattform entfernt (siehe [Firefox-Fehler 1261019](https://bugzil.la/1261019)).
- Die proprietäre Firefox OS `Web-Telefonie-API` wurde von der Plattform entfernt (siehe [Firefox-Fehler 1309719](https://bugzil.la/1309719)).
- Die proprietäre Firefox OS `Web-Bluetooth-API` wurde von der Plattform entfernt (siehe [Firefox-Fehler 1310020](https://bugzil.la/1310020)).
- Die [Batteriestatus-API](/de/docs/Web/API/Battery_Status_API) ist jetzt nur noch für Chrome-/Privilegierten-Code verfügbar (siehe [Firefox-Fehler 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde in [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) umbenannt (siehe [Firefox-Fehler 1304767](https://bugzil.la/1304767)).
- Die `mozDash` und `mozDashOffset` Mitglieder wurden aus [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) entfernt (siehe [Firefox-Fehler 931389](https://bugzil.la/931389)).

### HTTP

- Der {{HTTPHeader("Referrer-Policy")}} Header unterstützt jetzt die Direktiven `same-origin`, `strict-origin` und `strict-origin-when-cross-origin` ([Firefox-Fehler 1276836](https://bugzil.la/1276836)).
- Der [`'strict-dynamic'` Quellenausdruck](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#strict-dynamic) wird jetzt für {{HTTPHeader("Content-Security-Policy")}} Direktiven unterstützt, wie {{CSP("script-src")}} ([Firefox-Fehler 1299483](https://bugzil.la/1299483)).
- Unsichere Seiten (`http:`) können keine [Cookies setzen](/de/docs/Web/HTTP/Guides/Cookies) mehr mit der "sicheren" Direktive gemäß der [Strict Secure Cookies Spezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox-Fehler 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2 Header-Kompressionsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox-Fehler 1296280](https://bugzil.la/1296280)).
- Der {{HTTPHeader("Large-Allocation")}} Header wurde hinzugefügt ([Firefox-Fehler 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente werden jetzt mithilfe der [`XMLDocument`](/de/docs/Web/API/XMLDocument) Schnittstelle statt SVGDocument dargestellt. Diese Änderung wurde in der SVG 2 Spezifikation vorgenommen.

### Sicherheit

- Wenn Anmeldeseiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password) Feld enthalten) so erstellt werden, dass sie unsicher übertragen werden würden, zeigt Firefox eine Warnmeldung im Kontext unter dem Passwortfeld an, um die Benutzer zu warnen ([Firefox-Fehler 1319119](https://bugzil.la/1319119)). Auch Autofill ist bei unsicheren Anmeldeformularen deaktiviert ([Firefox-Fehler 1217152](https://bugzil.la/1217152)). Siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords) für weitere Details.
- Unterstützung für SHA-1 SSL-Zertifikate wurde entfernt; das Navigieren zu einer sicheren Seite, die ein SHA-1 Zertifikat verwendet, führt jetzt zu einem `Untrusted Connection` Fehler ([Firefox-Fehler 1330043](https://bugzil.la/1330043)).

## Plugins

Die Unterstützung für alle NPAPI-Plugins außer Flash wurde eingestellt. Auch die Nutzung von Flash soll in naher Zukunft schrittweise eingestellt werden.

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) Ereignisse
- [asynchrone Ereignislistener in webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) Ereignisse
- `_execute_browser_action` und `_execute_page_action` im [Befehlsschlüssel-Erklärungsdokument](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im content_scripts Manifest-Schlüssel

### Schnittstellen

- Die `nsIDroppedLinkHandler.dropLinks` Methode und das `nsIDroppedLinkItem` Interface wurden hinzugefügt, um das Ablegen mehrerer Elemente zu handhaben ([Firefox-Fehler 92737](https://bugzil.la/92737)).

### XUL

- Die `tabbrowser.loadTabs(uris, params)` Methode wurde überladen hinzugefügt ([Firefox-Fehler 92737](https://bugzil.la/92737)).
- Die `browser.droppedLinkHandler` Funktionssignatur wurde geändert ([Firefox-Fehler 92737](https://bugzil.la/92737)).

## Frühere Versionen

{{Firefox_for_developers}}
