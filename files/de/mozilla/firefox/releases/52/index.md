---
title: Firefox 52 für Entwickler
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{FirefoxSidebar}}

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [Vollständig überarbeiteter Modus für responsives Design, einschließlich UA-Auswahl und Netzwerkdrosselung.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt nun Zeitfunktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält nun einen CSS-Grid-Inspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt jetzt den Status des Service Workers an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor bietet eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt nur aus Leerzeichen bestehende Textknoten an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle behobenen DevTools-Fehler zwischen Firefox 51 und Firefox 52](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der `rel="noopener"` [Link-Typ](/de/docs/Web/HTML/Attributes/rel) wurde implementiert (siehe [Firefox-Bug 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- Die Pseudo-Klasse {{cssxref(":focus-within")}} wurde hinzugefügt ([Firefox-Bug 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und columnset layout innerhalb von {{HTMLElement("button")}} Elementen hinzugefügt ([Firefox-Bug 984869](https://bugzil.la/984869)).
- Implementierung von Interpolation zwischen numerischen Farb- und [currentcolor](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox-Bug 1299741](https://bugzil.la/1299741)).
- Implementierung des Flexbox-Layouts für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` ([Firefox-Bug 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Antialiasing in CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} hinzugefügt ([Firefox-Bug 1305259](https://bugzil.la/1305259)).
- Implementierung von Segmentbruch-Transformationsregeln von CSS Text 3 ([Firefox-Bug 1081858](https://bugzil.la/1081858)).
- Grundform-Zuschneidung (wie über die {{cssxref("clip-path")}} Eigenschaft angewendet) kann nun auf SVG-Inhalte angewendet werden ([Firefox-Bug 1246741](https://bugzil.la/1246741)).
- Implementiertes Flexbox-Layout für {{cssxref("align-self")}}|{{cssxref("justify-self")}}: \[ first | last ]? baseline ([Firefox-Bug 1221524](https://bugzil.la/1221524)).
- Die {{cssxref("touch-action")}} Eigenschaft ist nun standardmäßig auf allen Plattformen aktiviert. (Weitere Informationen finden Sie in [mail #1 zur Versandabsicht](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [mail #2 zur Versandabsicht](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}} Handhabung & Single-Line-Sizing sollten von {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Zeilen ([Firefox-Bug 1090031](https://bugzil.la/1090031)).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) können jetzt verwendet werden, um nicht interpolierte Eigenschaften zu animieren (siehe [Firefox-Bug 1064937](https://bugzil.la/1064937)).
- Geändert von `baseline|last-baseline` zu `[ first | last ]? baseline` ([Firefox-Bug 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist `start` für die Blockachse ([Firefox-Bug 1221565](https://bugzil.la/1221565)).
- Das Strecken von flexiblen Spuren mit einer unbestimmten Länge des Containing Blocks respektiert jetzt die min/max Größe ([Firefox-Bug 1309407](https://bugzil.la/1309407)).
- Die Anfangswerte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden auf `0% 0%` bzw. `repeat` geändert ([Firefox-Bug 1308963](https://bugzil.la/1308963)).
- Es gab eine Reihe von Änderungen bei den CSS {{cssxref("&lt;color&gt;")}} Werten (siehe [Firefox-Bug 1295456](https://bugzil.la/1295456)):

  - `rgba()` und `hsla()` wurden nun als Aliase von `rgb()` und `hsl()` neu definiert; beide akzeptieren die gleiche Parameter-Syntax.
  - `rgb(`) und `hsl()` akzeptieren nun einen optionalen Alpha-Wert, z.B. `rgb(255, 0, 0, 0.5)`.
  - Farbfunktionen akzeptieren nun durch Leerzeichen getrennte Parameter anstelle von Kommata, z.B. `rgb(255 0 0 / 0.5)`.
  - Alpha-Werte können nun als Prozentsätze sowie als Zahlen angegeben werden, z.B. `rgb(255 0 0 / 50%)`.
  - Die Farbkomponente in `hsl()`-Farben kann nun als Winkel sowie als Zahl angegeben werden, z.B. `hsl(120deg, 60%, 70%)`.

- Firefox' Implementierung von kinderindizierten Pseudo-Klassen (z. B. {{cssxref(":nth-child")}}, {{cssxref(":first-child")}} usw.) wurde aktualisiert, um der CSS-Selektoren-Spezifikation der Stufe 4 zu entsprechen: Diese Pseudo-Klassen passen nun zu den entsprechenden Geschwister-Elementen anstatt zu den Kindern des übergeordneten Elements. Dies erlaubt die Verwendung dieser Pseudo-Klassen, wenn es kein Eltern-Element gibt oder das Übergeordnete kein [`Element`](/de/docs/Web/API/Element) ist ([Firefox-Bug 1300374](https://bugzil.la/1300374)).

#### CSS Grids

- [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) sind implementiert.

#### Änderungen und Entfernungen

- Unpräfixierte Multispalten-Eigenschaften (und fügte vorerst `-moz`-präfixierte Versionen als Aliase hinzu) ([Firefox-Bug 1300895](https://bugzil.la/1300895)).
- Stoppte das Umwickeln von abspos Kindelementen eines Flex-Containers in anonyme Flex-Elemente ([Firefox-Bug 1269045](https://bugzil.la/1269045)).
- Implementierte Basislinien für Grid-Container ([Firefox-Bug 1151204](https://bugzil.la/1151204)).
- Entfernt `<flex>` Min-Größe aus dem Stilsystem ([Firefox-Bug 1305244](https://bugzil.la/1305244)).
- Die Präferenz `layout.css.masking.enabled` wurde entfernt ([Firefox-Bug 1308239](https://bugzil.la/1308239)).
- Die proprietären `-moz-images-in-menus` und `-moz-images-in-buttons` [Medientypen](/de/docs/Web/CSS/@media#media_features) wurden entfernt (siehe [Firefox-Bug 1302157](https://bugzil.la/1302157)).
- Der `-moz-use-text-color` Wert aus Farbeigenschaften wurde entfernt; verwenden Sie stattdessen [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox-Bug 1306214](https://bugzil.la/1306214)).
- \[css-grid] 'max-width', das auf ein Grid-Element gesetzt ist, verursacht Textüberlauf ([Firefox-Bug 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für die `async` Funktionen wurde hinzugefügt. Dies fügt die {{jsxref("Statements/async_function", "async function")}} Deklaration, {{jsxref("Operators/async_function", "async function")}} Ausdruck und das {{jsxref("Operators/await", "await")}} Schlüsselwort hinzu ([Firefox-Bug 1185106](https://bugzil.la/1185106)).
- ES2017 [nachfolgende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen implementiert ([Firefox-Bug 1303788](https://bugzil.la/1303788)).
- Implementiertes {{jsxref("Functions/rest_parameters", "Restparameter-Destructuring", "#Destructuring_rest_parameters", 1)}} ([Firefox-Bug 1243717](https://bugzil.la/1243717)).
- Der {{jsxref("Operators", "Exponentierungsoperator (**)", "#Exponentiation_(**)", 1)}} ist nun standardmäßig aktiviert ([Firefox-Bug 1291212](https://bugzil.la/1291212)).
- Sie können jetzt [IANA-Zeitzonennamen](https://www.iana.org/time-zones) in der `timeZone` Option von datumsbezogenen APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox-Bug 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernungen

- [Array Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) wirft nun einen {{jsxref("SyntaxError")}}, wenn Destructuring Rest mit nachfolgendem Komma verwendet wird ([Firefox-Bug 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__` Eigenschaften sind nun in [Objekt Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) erlaubt ([Firefox-Bug 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die `Intl` API Parameter "`locales`" und "`options`" zu unterstützen ([Firefox-Bug 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}} Konstruktoren akzeptieren nun [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue typisierte Arrays zu erstellen ([Firefox-Bug 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} erfordern nun, dass ihre `this` Werte gültige getypte Array-Konstruktoren sind ([Firefox-Bug 1122396](https://bugzil.la/1122396)).
- Die nicht standardisierte {{jsxref("ArrayBuffer.slice()")}} Methode (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) ist veraltet und zeigt nun eine Warnung bei Verwendung ([Firefox-Bug 1316913](https://bugzil.la/1316913)).
- [Unicode-Codepunkt-Entitäten](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können nun auch als Bezeichner verwendet werden (z.B. "`let \u{61} = 123`", siehe [Firefox-Bug 1314037](https://bugzil.la/1314037)).
- Um mit ES2015 übereinzustimmen, werfen `\u2e2f` und `ⸯ` nun Fehler, wenn sie als Bezeichner verwendet werden, Einzelheiten siehe [Firefox-Bug 917436](https://bugzil.la/917436) und [Firefox-Bug 1197230](https://bugzil.la/1197230).

### WebAssembly

- Unterstützung für [WebAssembly](/de/docs/WebAssembly) wurde zu Gecko hinzugefügt.

### DOM

- Die [Selection API](/de/docs/Web/API/Selection) wurde vollständig eingeführt, einschließlich der neuen [`selectstart`](/de/docs/Web/API/Node/selectstart_event) und [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) Events ([Firefox-Bug 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft [`Event.composed`](/de/docs/Web/API/Event/composed) wird jetzt unterstützt; dieser boolesche Wert zeigt an, ob das Event durch den Schattenstamm in den Standard-DOM blubbern kann ([Firefox-Bug 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente sowie die {{SVGElement("svg")}} und {{MathMLElement("math")}} Elemente können durch den Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) in den Vollbildmodus versetzt werden ([Firefox-Bug 1305928](https://bugzil.la/1305928)).
- [Touch-Events](/de/docs/Web/API/Touch_events) wurden auf Windows-Desktop-Plattformen wieder aktiviert — siehe [Firefox-Bug 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, da sie eine Reihe wichtiger Websites beeinträchtigten; siehe [Firefox-Bug 888304](https://bugzil.la/888304).)
- Die [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event) Events sind jetzt implementiert ([Firefox-Bug 687787](https://bugzil.la/687787)).
- Die [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) Eigenschaft wurde implementiert (siehe [Firefox-Bug 1269052](https://bugzil.la/1269052)).
- Das [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest) `install` Event wurde in [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) umbenannt, um Verwechslungen mit dem Service Worker `install` Event zu vermeiden (siehe [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)). Siehe [Firefox-Bug 1309099](https://bugzil.la/1309099) für weitere Details zu diesem Update.
- Die [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) Eigenschaft der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt ein eingefrorenes Array aus Strings anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurück (siehe [Firefox-Bug 1298243](https://bugzil.la/1298243)).
- Die `loadstart` und `loadend` Events werden jetzt auf {{htmlelement("img")}} Elementen ausgelöst (siehe [Firefox-Bug 1264769](https://bugzil.la/1264769)).
- Die [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) der [Notifications API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox-Bug 862395](https://bugzil.la/862395).)
- Die [`Window.open()`](/de/docs/Web/API/Window/open) Methode hat nun ein `noopener` [Fensterfeature](/de/docs/Web/API/Window/open#window_functionality_features) verfügbar (siehe [Firefox-Bug 1267339](https://bugzil.la/1267339)), das die Funktionalität des `rel="noopener"` [Link-Typs](/de/docs/Web/HTML/Attributes/rel) widerspiegelt.
- Die [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get) Methode der [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox-Bug 1275838](https://bugzil.la/1275838)).
- Die [Pointer Event](/de/docs/Web/API/Pointer_events) [`width`](/de/docs/Web/API/PointerEvent/width) und [`height`](/de/docs/Web/API/PointerEvent/height) Eigenschaften haben jetzt standardmäßig den Wert 1 (siehe [Firefox-Bug 1304315](https://bugzil.la/1304315)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde aktualisiert, um Änderungen in der [neuesten Spezifikation](https://wicg.github.io/entries-api/) zu berücksichtigen (siehe [Firefox-Bug 1284987](https://bugzil.la/1284987) für die genauen Details).
- Die [`cancelBubble`](/de/docs/Web/API/Event/cancelBubble) Eigenschaft, die auf [`UIEvent`](/de/docs/Web/API/UIEvent) definiert war, wird nun stattdessen auf der [`Event`](/de/docs/Web/API/Event) Schnittstelle definiert. Siehe [Firefox-Bug 1298970](https://bugzil.la/1298970) für weitere Details.

#### Änderungen und Entfernungen

- Die Firefox OS APIs, die sich mit der Verwaltung von Telefonanrufen (Kontakte, MobileConnection, Icc, usw.) befassen, wurden entfernt ([Firefox-Bug 1311206](https://bugzil.la/1311206)).
- Die Firefox OS `Identity` Schnittstelle wurde entfernt ([Firefox-Bug 1309030](https://bugzil.la/1309030)).
- Die Firefox OS Voicemail API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox-Bug 1309723](https://bugzil.la/1309723)).
- Die Firefox OS Cell Broadcast API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox-Bug 1306772](https://bugzil.la/1306772)).
- Die Firefox OS TV Rundfunk-bezogenen APIs wurden entfernt ([Firefox-Bug 1306778](https://bugzil.la/1306778)).
- Die Firefox OS FM-Radio-API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox-Bug 1306779](https://bugzil.la/1306779)).

### Service Workers und Fetch

- Die `Headers.getAll()` Methode wurde entfernt, und [`Headers.get()`](/de/docs/Web/API/Headers/get) ruft jetzt alle Werte des angegebenen Headers ab, nicht nur den ersten (siehe [Firefox-Bug 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Fetch API-Spezifikations-Updates.

### Web Audio API

- Das [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Interface wurde hinzugefügt; es repräsentiert eine Audioquelle, die immer einen Stream von Samples ausgibt, die alle denselben Wert haben. Siehe [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) für ein Beispiel, das zeigt, wie dies zur Vereinfachung einiger komplexer Audioabläufe verwendet werden kann.

### WebRTC

- Wenn eine ICE-Verbindung vorübergehend unterbrochen ist, wird die [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) Eigenschaft nun auf `"disconnected"` gesetzt; dies weist auf einen vorübergehenden Fehler hin, der sich möglicherweise in Kürze von selbst behebt, wobei die Verbindung anschließend in den `"connected"` Zustand zurückkehrt ([Firefox-Bug 852665](https://bugzil.la/852665)).
- Das `MediaDevices` [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Event und sein entsprechender Handler, die in Firefox 51 auf Macs implementiert, aber standardmäßig deaktiviert waren, wurden auf Windows und Linux implementiert und sind jetzt standardmäßig auf allen Plattformen aktiviert.
- Die [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) Eigenschaft wird jetzt unterstützt. Diese schreibgeschützte boolesche Eigenschaft gibt an, ob mindestens ein Track im Stream derzeit abgespielt wird.
- Vor Firefox 52 konnte die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) Methode nur lokale Tracks stoppen (d.h. Tracks, die über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden). Nun können verschiedene Arten von Tracks gestoppt werden, einschließlich derer auf einem [`MediaStream`](/de/docs/Web/API/MediaStream), der mit einer {{Glossary("WebRTC", "WebRTC")}} Verbindung, einem [Web Audio API](/de/docs/Web/API/Web_Audio_API) Stream oder einem [`CanvasCaptureMediaStream`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) verbunden ist.
- Vorher führte das wiederholte Ändern des [`TextTrack`](/de/docs/Web/API/TextTrack) [`mode`](/de/docs/Web/API/TextTrack/mode) während eines einzigen Durchlaufs durch die Firefox-Ereignisschleife dazu, dass mehrere [`change`](/de/docs/Web/API/HTMLElement/change_event) Events an die [`TextTrackList`](/de/docs/Web/API/TextTrackList) gesendet wurden, die durch die `textTracks`-Eigenschaft des übergeordneten Medienobjekts angegeben wird. Jetzt werden diese Änderungen in ein einziges Ereignis zusammengefasst ([Firefox-Bug 882674](https://bugzil.la/882674)).

### Audio/Video/Media

- Die [`MediaError`](/de/docs/Web/API/MediaError) Objekte, die in [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) angegeben werden, wenn ein Fehler beim Umgang mit einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element auftritt, enthalten nun eine [`message`](/de/docs/Web/API/MediaError/message) Eigenschaft, die eine spezifische Beschreibung des aufgetretenen Fehlers bietet. Diese Zeichenkette bietet Einzelheiten zu diesem genauen Fehler, wodurch Einblick in die Ursache des Fehlers gewährt wird ([Firefox-Bug 1299072](https://bugzil.la/1299072)). Diese Funktion war seit Firefox 51 in den Nightly-Builds von Firefox enthalten, ist nun jedoch in allen Builds verfügbar, einschließlich der Release-Version.

### Andere APIs

- Die Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter), die in Firefox 50 hinzugefügt wurde (aber immer einen Fehler zurückgab), wurde entfernt ([Firefox-Bug 1315185](https://bugzil.la/1315185).
- Die proprietären Firefox OS `Apps installation/management APIs` wurden aus der Plattform entfernt (siehe [Firefox-Bug 1261019](https://bugzil.la/1261019)).
- Die proprietäre Firefox OS `Web Telephony API` wurde aus der Plattform entfernt (siehe [Firefox-Bug 1309719](https://bugzil.la/1309719)).
- Die proprietäre Firefox OS `Web Bluetooth API` wurde aus der Plattform entfernt (siehe [Firefox-Bug 1310020](https://bugzil.la/1310020)).
- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) ist jetzt nur noch für Chrome/vorhandenen Code verfügbar (siehe [Firefox-Bug 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde zu [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) umbenannt (siehe [Firefox-Bug 1304767](https://bugzil.la/1304767)).
- Die Mitglieder `mozDash` und `mozDashOffset` wurden aus [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) entfernt (siehe [Firefox-Bug 931389](https://bugzil.la/931389)).

### HTTP

- Der {{HTTPHeader("Referrer-Policy")}} Header unterstützt jetzt die Direktiven `same-origin`, `strict-origin` und `strict-origin-when-cross-origin` ([Firefox-Bug 1276836](https://bugzil.la/1276836)).
- Der [`'strict-dynamic'` Quellausdruck](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) wird nun für {{HTTPHeader("Content-Security-Policy")}} Direktiven, wie z.B. {{CSP("script-src")}}, unterstützt ([Firefox-Bug 1299483](https://bugzil.la/1299483)).
- Unsichere Seiten (`http:`) können keine [Cookies](/de/docs/Web/HTTP/Cookies) mehr mit der Direktive "secure" setzen, gemäß der [Strict Secure Cookies Specification](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox-Bug 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2 Header Kompressionsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox-Bug 1296280](https://bugzil.la/1296280)).
- Der {{HTTPHeader("Large-Allocation")}} Header wurde hinzugefügt ([Firefox-Bug 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente werden jetzt mit dem [`XMLDocument`](/de/docs/Web/API/XMLDocument) Interface anstelle von SVGDocument dargestellt. Dies ist eine Änderung, die in der SVG 2-Spezifikation vorgenommen wurde.

### Sicherheit

- Wenn Anmeldeseiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password) Feld enthalten) so gestaltet sind, dass sie unsicher eingereicht würden, zeigt Firefox eine kontextbezogene Warnmeldung unter dem Passwortfeld an, um Benutzer zu warnen ([Firefox-Bug 1319119](https://bugzil.la/1319119)). Die automatische Ausfüllfunktion ist auch in unsicheren Anmeldeformularen deaktiviert ([Firefox-Bug 1217152](https://bugzil.la/1217152)). Siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords) für weitere Details.
- Unterstützung für SHA-1 SSL-Zertifikate wurde entfernt; das Navigieren zu einer sicheren Seite, die ein SHA-1 Zertifikat verwendet, führt nun zu einem `Nicht vertrauenswürdige Verbindung` Fehler ([Firefox-Bug 1330043](https://bugzil.la/1330043)).

## Plugins

Alle NPAPI-Plugin-Unterstützungen außer Flash wurden eingestellt. Auch die Nutzung von Flash soll zukünftig eingestellt werden.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) Ereignisse
- [asynchrone Ereignis-Listener im webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) Ereignisse
- `_execute_browser_action` und `_execute_page_action` im [commands Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im content_scripts Manifest-Schlüssel

### Schnittstellen

- Die `nsIDroppedLinkHandler.dropLinks` Methode und das `nsIDroppedLinkItem` Interface wurden hinzugefügt, um das Ablegen von mehreren Elementen zu handhaben ([Firefox-Bug 92737](https://bugzil.la/92737)).

### XUL

- Die `tabbrowser.loadTabs(uris, params)` Methodensignatur wurde überladen ([Firefox-Bug 92737](https://bugzil.la/92737)).
- Die `browser.droppedLinkHandler` Funktionssignatur wurde geändert ([Firefox-Bug 92737](https://bugzil.la/92737)).

## Ältere Versionen

{{Firefox_for_developers}}
