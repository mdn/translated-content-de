---
title: Firefox 52 für Entwickler
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{FirefoxSidebar}}

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklertools

- [Vollständig überarbeiteter Modus für responsives Design, einschließlich UA-Auswahl und Netzwerklimitierung.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt nun Zeitfunktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält nun einen CSS-Grid-Inspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt nun Service-Worker-Status an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor bietet eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt nun Textknoten an, die nur aus Leerzeichen bestehen.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle in Firefox 51 bis Firefox 52 behobenen Entwicklertools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der `rel="noopener"` [Linktyp](/de/docs/Web/HTML/Attributes/rel) wurde implementiert (siehe [Firefox-Bug 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- Die Pseudo-Klasse {{cssxref(":focus-within")}} wurde hinzugefügt ([Firefox-Bug 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und Spaltenlayout innerhalb von {{HTMLElement("button")}}-Elementen wurde hinzugefügt ([Firefox-Bug 984869](https://bugzil.la/984869)).
- Implementierte Interpolation zwischen numerischen Farbwerten und [currentcolor](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox-Bug 1299741](https://bugzil.la/1299741)).
- Implementierte Flexbox-Layout für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` ([Firefox-Bug 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Kantenglättung in CSS-{{cssxref("mask")}} / {{cssxref("clip-path")}} wurde hinzugefügt ([Firefox-Bug 1305259](https://bugzil.la/1305259)).
- CSS Text 3 Segment-Break-Transformationsregeln wurden implementiert ([Firefox-Bug 1081858](https://bugzil.la/1081858)).
- Grundform-Clipping (wie über die {{cssxref("clip-path")}}-Eigenschaft angewendet) kann nun auf SVG-Inhalte angewendet werden ([Firefox-Bug 1246741](https://bugzil.la/1246741)).
- Implementiertes Flexbox-Layout für {{cssxref("align-self")}}|{{cssxref("justify-self")}}: \[ first | last ]? baseline ([Firefox-Bug 1221524](https://bugzil.la/1221524)).
- Die {{cssxref("touch-action")}}-Eigenschaft ist jetzt standardmäßig auf allen Plattformen aktiviert. (Für die vollständige Geschichte siehe [intent to ship mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [intent to ship mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}}-Handhabung & Einzel-Zeilen-Größen sollten von {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Zeilen ([Firefox-Bug 1090031](https://bugzil.la/1090031)).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) können nun verwendet werden, um nicht interpolierte Eigenschaften zu animieren (siehe [Firefox-Bug 1064937](https://bugzil.la/1064937)).
- Geändert `baseline|last-baseline` zu `[ first | last ]? baseline` ([Firefox-Bug 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist `start` für die Block-Achse ([Firefox-Bug 1221565](https://bugzil.la/1221565)).
- Flexiblen Spuren mit unbegrenzter enthaltender Blocklänge nun die minimale/maximale Größe ([Firefox-Bug 1309407](https://bugzil.la/1309407)) respektieren.
- Die Anfangswerte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden auf `0% 0%` bzw. `repeat` geändert ([Firefox-Bug 1308963](https://bugzil.la/1308963)).
- Es gab einige Änderungen an CSS-{{cssxref("&lt;color&gt;")}}-Werten (siehe [Firefox-Bug 1295456](https://bugzil.la/1295456)):

  - `rgba()` und `hsla()` wurden jetzt als Aliase von `rgb()` und `hsl()` neu definiert; beide akzeptieren die gleiche Parametersyntax.
  - `rgb(`) und `hsl()` akzeptieren jetzt einen optionalen Alphawert, z.B. `rgb(255, 0, 0, 0.5)`.
  - Farbwerte akzeptieren jetzt leerzeichengetrennte Parameter anstelle von Kommas, z.B. `rgb(255 0 0 / 0.5)`.
  - Alphawerte können jetzt als Prozentangaben sowie Zahlen angegeben werden, z.B. `rgb(255 0 0 / 50%)`.
  - Die Farbkomponente in `hsl()`-Farbwerten kann jetzt als Winkel sowie als Zahl angegeben werden, z.B. `hsl(120deg, 60%, 70%)`.

- Firefoxs Implementierung von pseudo-elementiertem kindindexierten Selektoren (wie {{cssxref(":nth-child")}}, {{cssxref(":first-child")}} usw.) wurde aktualisiert, um der CSS-Selektoren-Level-4-Spezifikation zu entsprechen: diese Pseudo-Klassen passen jetzt zu den entsprechenden Geschwistern anstatt zu den Kindern des Elternelements. Dies ermöglicht die Verwendung dieser Pseudo-Klassen, wenn kein Elternelement vorhanden ist oder das Elternelement kein [`Element`](/de/docs/Web/API/Element) ist ([Firefox-Bug 1300374](https://bugzil.la/1300374).

#### CSS-Grids

- [CSS-Grids](/de/docs/Web/CSS/CSS_grid_layout) sind implementiert.

#### Änderungen und Entfernungen

- Unpräfixierte Multi-Column-Eigenschaften (und `-moz`-präfixierte Versionen als Aliase, vorerst) hinzugefügt ([Firefox-Bug 1300895](https://bugzil.la/1300895)).
- Aufhörendes Einbetten von Positionierungs-Kindern in anonymen Flexobjekten ([Firefox-Bug 1269045](https://bugzil.la/1269045)).
- Implementierte Grid-Container-Basislinien ([Firefox-Bug 1151204](https://bugzil.la/1151204)).
- Entfernte `<flex>` Min-Größeneinstellung aus dem Stilsystem ([Firefox-Bug 1305244](https://bugzil.la/1305244)).
- Entfernte Voreinstellung `layout.css.masking.enabled` ([Firefox-Bug 1308239](https://bugzil.la/1308239)).
- Die proprietären Medientypen `-moz-images-in-menus` und `-moz-images-in-buttons` wurden entfernt (siehe [Firefox-Bug 1302157](https://bugzil.la/1302157)).
- Entfernte `-moz-use-text-color` Wert aus Farbeigenschaften; Verwenden Sie stattdessen [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox-Bug 1306214](https://bugzil.la/1306214)).
- \[css-grid] 'max-width' auf Rasterelement gesetzt verursacht Überlauf von Text ([Firefox-Bug 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für async-Funktionen wurde hinzugefügt. Dies fügt die Deklaration von {{jsxref("Statements/async_function", "async function")}}, den Ausdruck {{jsxref("Operators/async_function", "async function")}} und das Schlüsselwort {{jsxref("Operators/await", "await")}} hinzu ([Firefox-Bug 1185106](https://bugzil.la/1185106)).
- Implementierte ES2017 [nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen ([Firefox-Bug 1303788](https://bugzil.la/1303788)).
- Implementierte {{jsxref("Functions/rest_parameters", "Rest-Parameter-Destrukturierung", "#Destructuring_rest_parameters", 1)}} ([Firefox-Bug 1243717](https://bugzil.la/1243717)).
- Der {{jsxref("Operators", "Potenzierungsoperator (**)", "#Exponentiation_(**)", 1)}} ist jetzt standardmäßig aktiviert ([Firefox-Bug 1291212](https://bugzil.la/1291212)).
- Sie können jetzt [IANA-Zeitzonennamen](https://www.iana.org/time-zones) in der `timeZone`-Option von datumsbezogenen APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox-Bug 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernungen

- [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring) wirft jetzt einen {{jsxref("SyntaxError")}}, wenn destrukturierte Rest-Parameter mit nachgestelltem Komma verwendet werden ([Firefox-Bug 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__`-Eigenschaften sind jetzt in der [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) erlaubt ([Firefox-Bug 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die Intl-API-Parameter "`locales`" und "`options`" zu unterstützen ([Firefox-Bug 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}}-Konstruktoren akzeptieren jetzt [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue Typisierte Arrays zu erstellen ([Firefox-Bug 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} erfordern jetzt, dass ihre `this`-Werte gültige Typisierte Array-Konstruktoren sind ([Firefox-Bug 1122396](https://bugzil.la/1122396)).
- Die nicht standardmäßige Methode {{jsxref("ArrayBuffer.slice()")}} (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) ist veraltet und zeigt jetzt eine Warnung bei Verwendung an ([Firefox-Bug 1316913](https://bugzil.la/1316913)).
- [Unicode-Codepunkt-Escapes](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können jetzt auch als Bezeichner verwendet werden (z.B. "`let \u{61} = 123`", siehe [Firefox-Bug 1314037](https://bugzil.la/1314037)).
- Zur Einhaltung von ES2015 werfen `\u2e2f` und `ⸯ` jetzt einen Fehler, wenn sie als Bezeichner verwendet werden, für Details siehe [Firefox-Bug 917436](https://bugzil.la/917436) und [Firefox-Bug 1197230](https://bugzil.la/1197230).

### WebAssembly

- Unterstützung für [WebAssembly](/de/docs/WebAssembly) wurde zu Gecko hinzugefügt.

### DOM

- Die [Selection API](/de/docs/Web/API/Selection) wurde vollständig eingeführt, einschließlich der neuen Ereignisse [`selectstart`](/de/docs/Web/API/Node/selectstart_event) und [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) ([Firefox-Bug 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft [`Event.composed`](/de/docs/Web/API/Event/composed) wird nun unterstützt; dieser Boolean-Wert gibt an, ob das Ereignis durch den Shadow-Root in den Standard-DOM blubbern kann ([Firefox-Bug 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente sowie die Elemente {{SVGElement("svg")}} und {{MathMLElement("math")}} können in den Vollbildmodus versetzt werden, indem [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird ([Firefox-Bug 1305928](https://bugzil.la/1305928)).
- [Touch Events](/de/docs/Web/API/Touch_events) wurden auf Windows-Desktopplattformen wieder aktiviert — siehe [Firefox-Bug 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, weil sie eine Reihe wichtiger Webseiten unterbrachen; siehe [Firefox-Bug 888304](https://bugzil.la/888304).)
- Die Ereignisse [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event) sind nun implementiert ([Firefox-Bug 687787](https://bugzil.la/687787)).
- Die Eigenschaft [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) wurde implementiert (siehe [Firefox-Bug 1269052](https://bugzil.la/1269052)).
- Das [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest)-Installationsereignis wurde umbenannt in [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event), um Verwechslungen mit dem Service Worker-Installationsereignis zu vermeiden (siehe [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)). Siehe [Firefox-Bug 1309099](https://bugzil.la/1309099) für weitere Details zu diesem Update.
- Die Eigenschaft [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt ein gefrorenes Array von Strings zurück statt einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) (siehe [Firefox-Bug 1298243](https://bugzil.la/1298243)).
- Die Ereignisse `loadstart` und `loadend` werden jetzt auf {{htmlelement("img")}}-Elementen ausgelöst (siehe [Firefox-Bug 1264769](https://bugzil.la/1264769)).
- Die Eigenschaft [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) der [Notifications API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox-Bug 862395](https://bugzil.la/862395).)
- Die Methode [`Window.open()`](/de/docs/Web/API/Window/open) hat jetzt ein `noopener` [Window-Feature](/de/docs/Web/API/Window/open#window_functionality_features) verfügbar (siehe [Firefox-Bug 1267339](https://bugzil.la/1267339)), die die Funktionalität des `rel="noopener"` [Linktyps](/de/docs/Web/HTML/Attributes/rel) widerspiegelt.
- Die Methode [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get) der [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox-Bug 1275838](https://bugzil.la/1275838)).
- Die Eigenschaften [Pointer Event](/de/docs/Web/API/Pointer_events) [`width`](/de/docs/Web/API/PointerEvent/width) und [`height`](/de/docs/Web/API/PointerEvent/height) haben jetzt einen Standardwert von 1 (siehe [Firefox-Bug 1304315](https://bugzil.la/1304315)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde aktualisiert, um Änderungen in der [neuesten Spezifikation](https://wicg.github.io/entries-api/) einzubeziehen (siehe [Firefox-Bug 1284987](https://bugzil.la/1284987) für die genauen Details).
- Die Eigenschaft [`cancelBubble`](/de/docs/Web/API/Event/cancelBubble), die auf [`UIEvent`](/de/docs/Web/API/UIEvent) definiert war, wird jetzt stattdessen auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle definiert. Siehe [Firefox-Bug 1298970](https://bugzil.la/1298970) für weitere Details.

#### Änderungen und Entfernungen

- Die Firefox-OS-APIs, die sich mit dem Verwalten von Telefonanrufen befassen (Contacts, MobileConnection, Icc usw.) wurden entfernt ([Firefox-Bug 1311206](https://bugzil.la/1311206)).
- Die Firefox-OS `Identity`-Schnittstelle wurde entfernt ([Firefox-Bug 1309030](https://bugzil.la/1309030)).
- Die Firefox-OS-Mailbox-API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox-Bug 1309723](https://bugzil.la/1309723)).
- Die Firefox-OS-Cell-Broadcast-API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox-Bug 1306772](https://bugzil.la/1306772)).
- Die TV-Übertragungs-bezogenen APIs in Firefox OS wurden entfernt ([Firefox-Bug 1306778](https://bugzil.la/1306778)).
- Die Firefox OS FM-Radio-API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox-Bug 1306779](https://bugzil.la/1306779)).

### Service Worker und Fetch

- Die Methode `Headers.getAll()` wurde entfernt, und [`Headers.get()`](/de/docs/Web/API/Headers/get) ruft nun alle Werte des angegebenen Headers ab, nicht nur den ersten (siehe [Firefox-Bug 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Fetch-API-Spezifikations-Updates.

### Web Audio API

- Die Schnittstelle [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) wurde hinzugefügt; sie stellt eine Audioquelle dar, die immer einen Strom von Samples ausgibt, die alle denselben Wert haben. Sehen Sie unter [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) nach einem Beispiel, das zeigt, wie dies verwendet werden kann, um einige komplexe Audioflüsse zu vereinfachen.

### WebRTC

- Bei einer vorübergehenden Unterbrechung einer ICE-Verbindung wird jetzt die Eigenschaft [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) auf `"disconnected"` gesetzt; dies zeigt einen vorübergehenden Fehler an, der sich möglicherweise selbst behebt und die Verbindung anschließend in den `"connected"`-Zustand zurückkehrt ([Firefox-Bug 852665](https://bugzil.la/852665)).
- Das `MediaDevices`-Ereignis [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) und der entsprechende Handler, die in Firefox 51 nur auf dem Mac implementiert, aber standardmäßig deaktiviert waren, wurden nun unter Windows und Linux implementiert und sind jetzt auf allen Plattformen standardmäßig aktiviert.
- Die Eigenschaft [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) wird nun unterstützt. Dieser read-only Boolean-Wert gibt an, ob mindestens ein Track im Stream derzeit abgespielt wird.
- Vor Firefox 52 konnte die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) nur lokale Tracks stoppen (d. h. Tracks, die über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden). Jetzt können verschiedene Tracks gestoppt werden, einschließlich derjenigen auf einem [`MediaStream`](/de/docs/Web/API/MediaStream), der mit einer {{Glossary("WebRTC", "WebRTC")}}-Verbindung, einem [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Stream oder einem [`CanvasCaptureMediaStream`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) verbunden ist.
- Zuvor führte das wiederholte Ändern eines [`TextTrack`]-[`mode`-Werts](/de/docs/Web/API/TextTrack/mode) während eines einzelnen Durchlaufs durch die Firefox-Ereignisschleife, dazu, dass mehrere [`change`-Ereignisse](/de/docs/Web/API/HTMLElement/change_event) an die vom übergeordneten Medienelement angegebene [`textTracks`-Eigenschaft](/de/docs/Web/API/HTMLMediaElement/textTracks) gesendet wurden. Jetzt werden diese Änderungen in einem Ereignis konsolidiert ([Firefox-Bug 882674](https://bugzil.la/882674)).

### Audio/Video/Medien

- Die [`MediaError`]-Objekte](/de/docs/Web/API/MediaError), die in [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) angegeben werden, wenn ein Fehler beim Verarbeiten eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements auftritt, enthalten jetzt eine [`message`](/de/docs/Web/API/MediaError/message)-Eigenschaft, die eine spezifische Beschreibung des aufgetretenen Fehlers liefert. Diese Zeichenkette bietet Einsichten für diesen genauen Fehler, warum etwas schiefgegangen ist ([Firefox-Bug 1299072](https://bugzil.la/1299072)). Dieses Feld war in Nightly-Builds von Firefox seit Firefox 51 enthalten, ist jetzt jedoch in allen Builds, einschließlich der Veröffentlichung, verfügbar.

### Andere APIs

- Die Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter), die in Firefox 50 hinzugefügt wurde (aber immer einen Fehler zurückgab), wurde entfernt ([Firefox-Bug 1315185](https://bugzil.la/1315185)).
- Die proprietären `Apps-Installations-/Verwaltungs-APIs` von Firefox OS wurden aus der Plattform entfernt (siehe [Firefox-Bug 1261019](https://bugzil.la/1261019)).
- Die proprietäre Firefox OS `Web-Telephony-API` wurde aus der Plattform entfernt (siehe [Firefox-Bug 1309719](https://bugzil.la/1309719)).
- Die proprietäre Firefox OS `Web-Bluetooth-API` wurde aus der Plattform entfernt (siehe [Firefox-Bug 1310020](https://bugzil.la/1310020)).
- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) ist jetzt nur noch für Chrome-privilegierten Code verfügbar (siehe [Firefox-Bug 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde umbenannt in [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) (siehe [Firefox-Bug 1304767](https://bugzil.la/1304767)).
- Die `mozDash`- und `mozDashOffset`-Mitglieder wurden aus [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) entfernt (siehe [Firefox-Bug 931389](https://bugzil.la/931389)).

### HTTP

- Der {{HTTPHeader("Referrer-Policy")}}-Header unterstützt jetzt die Direktiven `same-origin`, `strict-origin` und `strict-origin-when-cross-origin` ([Firefox-Bug 1276836](https://bugzil.la/1276836)).
- Der [`'strict-dynamic'`-Source-Ausdruck](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) wird jetzt für {{HTTPHeader("Content-Security-Policy")}}-Direktiven unterstützt, wie zum Beispiel {{CSP("script-src")}} ([Firefox-Bug 1299483](https://bugzil.la/1299483)).
- Unsichere Seiten (`http:`) können keine [Cookies setzen](/de/docs/Web/HTTP/Cookies), die die Direktive "secure" enthalten, gemäß der [Strict Secure Cookies-Spezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox-Bug 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2-Header-Komprimierungsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox-Bug 1296280](https://bugzil.la/1296280)).
- Der {{HTTPHeader("Large-Allocation")}}-Header wurde hinzugefügt ([Firefox-Bug 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente werden jetzt mithilfe der [`XMLDocument`](/de/docs/Web/API/XMLDocument)-Schnittstelle anstelle von SVGDocument dargestellt. Dies ist eine Änderung in der SVG-2-Spezifikation.

### Sicherheit

- Wenn Anmeldeseiten (d.h. Seiten, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password)-Feld enthalten) so erstellt werden, dass sie unsicher gesendet werden, zeigt Firefox eine Kontext-Warnmeldung unterhalb des Passwortfeldes an, um die Nutzer zu warnen ([Firefox-Bug 1319119](https://bugzil.la/1319119)). Die Autoausfüllung ist auch auf unsicheren Anmeldeformularen deaktiviert ([Firefox-Bug 1217152](https://bugzil.la/1217152)). Siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords) für weitere Details.
- Die Unterstützung für SHA-1-SSL-Zertifikate wurde entfernt; das Navigieren zu einer sicheren Seite, die ein SHA-1-Zertifikat verwendet, führt jetzt zu einem `Nicht vertrauenswürdige Verbindung`-Fehler ([Firefox-Bug 1330043](https://bugzil.la/1330043)).

## Plugins

Die Unterstützung für alle NPAPI-Plugins außer Flash wurde eingestellt. Auch die Nutzung von Flash soll in Zukunft schrittweise eingestellt werden.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- Ereignisse [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup)
- [Asynchrone Ereignis-Listener in webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- Ereignisse [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged)
- `_execute_browser_action` und `_execute_page_action` im [Befehle Manifests-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im `content_scripts`-Manifests-Schlüssel

### Schnittstellen

- Methode `nsIDroppedLinkHandler.dropLinks` und Schnittstelle `nsIDroppedLinkItem` wurden hinzugefügt, um das Ablegen mehrerer Elemente zu handhaben ([Firefox-Bug 92737](https://bugzil.la/92737)).

### XUL

- Überladung der Methode `tabbrowser.loadTabs(uris, params)` wurde hinzugefügt ([Firefox-Bug 92737](https://bugzil.la/92737)).
- Funktionssignatur von `browser.droppedLinkHandler` wurde geändert ([Firefox-Bug 92737](https://bugzil.la/92737)).

## Ältere Versionen

{{Firefox_for_developers}}
