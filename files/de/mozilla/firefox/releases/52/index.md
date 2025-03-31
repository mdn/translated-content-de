---
title: Firefox 52 für Entwickler
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [Komplett überarbeiteter Responsiver Design-Modus, einschließlich Auswahl des User-Agent und Drosselung des Netzwerks.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt jetzt Zeitfunktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält jetzt einen CSS-Grid-Inspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt jetzt den Status des Service Workers an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor bietet eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt nur aus Leerzeichen bestehende Textknoten an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle zwischen Firefox 51 und Firefox 52 behobenen devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der Link-Typ `rel="noopener"` wurde implementiert (siehe [Firefox Fehler 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- {{cssxref(":focus-within")}} Pseudoklasse hinzugefügt ([Firefox Fehler 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und `columnset`-Layout innerhalb von `<button>`-Elementen hinzugefügt ([Firefox Fehler 984869](https://bugzil.la/984869)).
- Implementiert die Interpolation zwischen numerischen Farbwerten und [currentcolor](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox Fehler 1299741](https://bugzil.la/1299741)).
- Implementiert Flexbox-Layout für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` ([Firefox Fehler 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Antialiasing in CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} hinzugefügt ([Firefox Fehler 1305259](https://bugzil.la/1305259)).
- Implementiert die Segmentbruchtransformationen von CSS Text 3 ([Firefox Fehler 1081858](https://bugzil.la/1081858)).
- Grundform-Clipping (wie über die Eigenschaft {{cssxref("clip-path")}} angewendet) kann jetzt auf SVG-Inhalte angewendet werden ([Firefox Fehler 1246741](https://bugzil.la/1246741)).
- Implementiert Flexbox-Layout für {{cssxref("align-self")}}|{{cssxref("justify-self")}}: \[ first | last ]? baseline ([Firefox Fehler 1221524](https://bugzil.la/1221524)).
- Die {{cssxref("touch-action")}}-Eigenschaft ist nun standardmäßig auf allen Plattformen aktiviert. (Für die ganze Geschichte lesen Sie [Absicht, Mail zu versenden #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [Absicht, Mail zu versenden #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}} Behandlung & Einzeilen-Anpassung sollten von {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Zeilen ([Firefox Fehler 1090031](https://bugzil.la/1090031)).
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations) können jetzt verwendet werden, um nicht interpolierte Eigenschaften zu animieren (siehe [Firefox Fehler 1064937](https://bugzil.la/1064937)).
- Geändert von `baseline|last-baseline` zu `[ first | last ]? baseline` ([Firefox Fehler 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist `start` für die Block-Achse ([Firefox Fehler 1221565](https://bugzil.la/1221565)).
- Dehnen von flexiblen Tracks mit einer unbestimmten Länge des umgebenden Blocks respektiert nun die minimale/maximale Größe([Firefox Fehler 1309407](https://bugzil.la/1309407)).
- Die Anfangswerte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden zu `0% 0%` bzw. `repeat` geändert ([Firefox Fehler 1308963](https://bugzil.la/1308963)).
- Es gab eine Reihe von Änderungen zu CSS {{cssxref("&lt;color&gt;")}} Werten (siehe [Firefox Fehler 1295456](https://bugzil.la/1295456)):

  - `rgba()` und `hsla()` wurden jetzt als Aliase von `rgb()` und `hsl()` neu definiert; beide akzeptieren dieselbe Parametersyntax.
  - `rgb(`) und `hsl()` akzeptieren jetzt einen optionalen Alphawert, z.B. `rgb(255, 0, 0, 0.5)`.
  - Farbfunktionsparameter können nun durch Leerzeichen statt durch Kommas getrennt werden, z.B. `rgb(255 0 0 / 0.5)`.
  - Alphawerte können jetzt auch als Prozentsätze angegeben werden, z.B. `rgb(255 0 0 / 50%)`.
  - Der Farbtonkomponente in `hsl()` Farben kann jetzt auch als Winkel sowie als Zahl angegeben werden, z.B. `hsl(120deg, 60%, 70%)`.

- Firefox' Implementierung von kinderindizierten Pseudoklassen (wie {{cssxref(":nth-child")}}, {{cssxref(":first-child")}} und dergleichen) wurde aktualisiert, um mit der CSS-Selektoren Level 4-Spezifikation übereinzustimmen: Diese Pseudoklassen passen jetzt auf die entsprechenden Geschwisterelemente anstelle der Kinder ihres übergeordneten Elements. Dies erlaubt die Verwendung dieser Pseudoklassen, wenn es kein übergeordnetes Element gibt oder das übergeordnete Element kein [`Element`](/de/docs/Web/API/Element) ist ([Firefox Fehler 1300374](https://bugzil.la/1300374).

#### CSS Grids

- [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) sind implementiert.

#### Änderungen und Entfernen

- Unpräfixierte Multi-Column-Eigenschaften (und für jetzt die `-moz`-präfixten Versionen als Aliase hinzugefügt) ([Firefox Fehler 1300895](https://bugzil.la/1300895)).
- Aufhören, abspos-Kinder eines flexiblen Containers in anonymen Flex-Elementen zu verpacken ([Firefox Fehler 1269045](https://bugzil.la/1269045)).
- Grundlinien der Grid-Container implementiert ([Firefox Fehler 1151204](https://bugzil.la/1151204)).
- Entfernt `<flex>` Min-Größenanpassung aus dem Stilsystem ([Firefox Fehler 1305244](https://bugzil.la/1305244)).
- Präferenz `layout.css.masking.enabled` entfernt ([Firefox Fehler 1308239](https://bugzil.la/1308239)).
- Die proprietären `-moz-images-in-menus` und `-moz-images-in-buttons` [Medientypen](/de/docs/Web/CSS/@media#media_features) wurden entfernt (siehe [Firefox Fehler 1302157](https://bugzil.la/1302157)).
- Entfernt `-moz-use-text-color` Wert von Farbeigenschaften; verwenden Sie [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) stattdessen ([Firefox Fehler 1306214](https://bugzil.la/1306214)).
- \[css-grid] 'max-width' auf Grid-Element führt zu Textüberlauf ([Firefox Fehler 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für die `async` Funktionen wurde hinzugefügt. Dies fügt die {{jsxref("Statements/async_function", "async function")}} Deklaration, den {{jsxref("Operators/async_function", "async function")}} Ausdruck und das {{jsxref("Operators/await", "await")}} Stichwort hinzu ([Firefox Fehler 1185106](https://bugzil.la/1185106)).
- ES2017 [nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen implementiert ([Firefox Fehler 1303788](https://bugzil.la/1303788)).
- Implementiert {{jsxref("Functions/rest_parameters", "Rest-Parameter-Destrukturierung", "#Destructuring_rest_parameters", 1)}} ([Firefox Fehler 1243717](https://bugzil.la/1243717)).
- Der {{jsxref("Operators", "Exponentialoperator (**)", "#Exponentiation_(**)", 1)}} ist jetzt standardmäßig aktiviert ([Firefox Fehler 1291212](https://bugzil.la/1291212)).
- Sie können jetzt [IANA Zeitzonennamen](https://www.iana.org/time-zones) in der `timeZone` Option von datumsbezogenen APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox Fehler 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernen

- [Array-Dekonstruktion](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) wirft jetzt einen {{jsxref("SyntaxError")}}, wenn eine Dekonstruktion mit Rest und nachgestelltem Komma verwendet wird ([Firefox Fehler 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__` Eigenschaften sind jetzt in [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) erlaubt ([Firefox Fehler 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die Intl-API-Parameter `locales` und `options` zu unterstützen ([Firefox Fehler 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}}-Konstruktoren akzeptieren jetzt [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue typisierte Arrays zu erstellen ([Firefox Fehler 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} erfordern nun, dass ihre `this` Werte gültige Typisierte Array-Konstruktoren sind ([Firefox Fehler 1122396](https://bugzil.la/1122396)).
- Die nicht-standardisierte Methode {{jsxref("ArrayBuffer.slice()")}} (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) wird als veraltet betrachtet und gibt nun eine Warnung aus, wenn sie verwendet wird ([Firefox Fehler 1316913](https://bugzil.la/1316913)).
- [Unicode Codepunkt-Escapes](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können nun auch als Identifikatoren verwendet werden (z.B. `let \u{61} = 123`, siehe [Firefox Fehler 1314037](https://bugzil.la/1314037)).
- Zur Übereinstimmung mit ES2015 werfen `\u2e2f` und `ⸯ` nun einen Fehler, wenn sie als Identifikator verwendet werden, für Details siehe [Firefox Fehler 917436](https://bugzil.la/917436) und [Firefox Fehler 1197230](https://bugzil.la/1197230).

### WebAssembly

- Unterstützung für [WebAssembly](/de/docs/WebAssembly) wurde zu Gecko hinzugefügt.

### DOM

- Die [Selection API](/de/docs/Web/API/Selection) wurde vollständig ausgeliefert, einschließlich der neuen Ereignisse [`selectstart`](/de/docs/Web/API/Node/selectstart_event) und [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) ([Firefox Fehler 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft [`Event.composed`](/de/docs/Web/API/Event/composed) wird jetzt unterstützt; dieser boolesche Wert zeigt an, ob das Ereignis durch den Schattenbaum in das Standard-DOM blubbern kann ([Firefox Fehler 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente, sowie die {{SVGElement("svg")}} und {{MathMLElement("math")}} Elemente, können durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) in den Vollbildmodus versetzt werden ([Firefox Fehler 1305928](https://bugzil.la/1305928)).
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events) wurden auf Windows-Desktop-Plattformen wieder aktiviert — siehe [Firefox Fehler 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, weil sie eine Reihe von großen Sites kaputt machten; siehe [Firefox Fehler 888304](https://bugzil.la/888304).)
- Die [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event) Ereignisse sind jetzt implementiert ([Firefox Fehler 687787](https://bugzil.la/687787)).
- Die [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) Eigenschaft wurde implementiert (siehe [Firefox Fehler 1269052](https://bugzil.la/1269052)).
- Das [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest) Installations-Ereignis wurde umbenannt in [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event), um Verwechslungen mit dem Installations-Ereignis des Service Workers zu vermeiden (siehe [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)). Siehe [Firefox Fehler 1309099](https://bugzil.la/1309099) für weitere Details zu dieser Aktualisierung.
- Die [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) Eigenschaft der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt ein eingefrorenes Array von Zeichenfolgen anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurück (siehe [Firefox Fehler 1298243](https://bugzil.la/1298243)).
- Die `loadstart` und `loadend` Ereignisse werden jetzt auf {{htmlelement("img")}} Elementen ausgelöst (siehe [Firefox Fehler 1264769](https://bugzil.la/1264769)).
- Die [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) der [Notifications API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox Fehler 862395](https://bugzil.la/862395).)
- Die Methode [`Window.open()`](/de/docs/Web/API/Window/open) hat jetzt ein `noopener` [Fenstermerkmal](/de/docs/Web/API/Window/open#window_functionality_features) verfügbar (siehe [Firefox Fehler 1267339](https://bugzil.la/1267339)), das die Funktionalität des `rel="noopener"` [Link-Typs](/de/docs/Web/HTML/Attributes/rel) widerspiegelt.
- Die Methode [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get) der [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox Fehler 1275838](https://bugzil.la/1275838)).
- [Pointer-Ereignis](/de/docs/Web/API/Pointer_events) [`width`](/de/docs/Web/API/PointerEvent/width) und [`height`](/de/docs/Web/API/PointerEvent/height) Eigenschaften haben jetzt standardmäßig einen Wert von 1 (siehe [Firefox Fehler 1304315](https://bugzil.la/1304315)).
- Die [Datei- und Verzeichniseinträge-API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde aktualisiert, um Änderungen in der [neuesten Spezifikation](https://wicg.github.io/entries-api/) zu enthalten (siehe [Firefox Fehler 1284987](https://bugzil.la/1284987) für die genauen Details).
- Die [`cancelBubble`](/de/docs/Web/API/Event/cancelBubble) Eigenschaft, die auf [`UIEvent`](/de/docs/Web/API/UIEvent) definiert war, wird jetzt auf der [`Event`](/de/docs/Web/API/Event) Schnittstelle stattdessen definiert. Siehe [Firefox Fehler 1298970](https://bugzil.la/1298970) für weitere Details.

#### Änderungen und Entfernen

- Die Firefox OS-APIs, die sich mit der Verwaltung von Telefongesprächen befassen (Contacts, MobileConnection, Icc, usw.), wurden entfernt ([Firefox Fehler 1311206](https://bugzil.la/1311206)).
- Die Firefox OS `Identity` Schnittstelle wurde entfernt ([Firefox Fehler 1309030](https://bugzil.la/1309030)).
- Die Firefox OS Mailbox API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox Fehler 1309723](https://bugzil.la/1309723)).
- Die Firefox OS Zellen-Rundfunk API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox Fehler 1306772](https://bugzil.la/1306772)).
- Die Firefox OS TV-Rundfunkbezogenen APIs wurden entfernt ([Firefox Fehler 1306778](https://bugzil.la/1306778)).
- Die Firefox OS FM Radio API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox Fehler 1306779](https://bugzil.la/1306779)).

### Service Workers und Fetch

- Die `Headers.getAll()` Methode wurde entfernt, und [`Headers.get()`](/de/docs/Web/API/Headers/get) ruft jetzt alle Werte des angegebenen Headers ab, nicht nur den ersten (siehe [Firefox Fehler 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Fetch API-Spezifikationen.

### Web Audio API

- Die [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Schnittstelle wurde hinzugefügt; sie stellt eine Audioquelle dar, die immer einen Strom von Proben ausgibt, die alle denselben Wert haben. Siehe [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) für ein Beispiel, das zeigt, wie dies verwendet werden kann, um einige komplexe Audioflüsse zu vereinfachen.

### WebRTC

- Wenn eine ICE-Verbindung vorübergehend unterbrochen ist, wird die Eigenschaft [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) jetzt auf `"disconnected"` gesetzt; dies zeigt einen vorübergehenden Fehler an, der sich möglicherweise kurzfristig selbst beheben kann, wobei die Verbindung danach wieder in den Zustand `"connected"` zurückkehrt ([Firefox Fehler 852665](https://bugzil.la/852665)).
- Das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis und sein entsprechender Handler, die in Firefox 51 standardmäßig auf Mac nur implementiert, aber deaktiviert waren, wurden auf Windows und Linux implementiert und sind nun standardmäßig auf allen Plattformen aktiviert.
- Die [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) Eigenschaft wird jetzt unterstützt. Diese schreibgeschützte boolesche Eigenschaft zeigt an, ob mindestens ein Track im Stream derzeit abgespielt wird.
- Vor Firefox 52 konnte die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) nur lokale Tracks stoppen (d.h. Tracks, die durch [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden). Jetzt können verschiedene Tracks gestoppt werden, einschließlich derjenigen, die mit einem {{Glossary("WebRTC", "WebRTC")}}-Verbindung, [Web Audio API](/de/docs/Web/API/Web_Audio_API) Stream oder [`CanvasCaptureMediaStream`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) assoziiert sind.
- Früher würde das wiederholte Ändern des [`mode`](/de/docs/Web/API/TextTrack/mode) eines [`TextTrack`](/de/docs/Web/API/TextTrack) während eines einzigen Durchgangs durch die Firefox-Ereignisschleife dazu führen, dass mehrere [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignisse an die durch das übergeordnete Medienelement spezifizierte [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) [`TextTrackList`](/de/docs/Web/API/TextTrackList) gesendet werden. Jetzt werden diese Änderungen in ein einziges Ereignis konsolidiert ([Firefox Fehler 882674](https://bugzil.la/882674)).

### Audio/Video/Medien

- Die in [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) spezifizierten [`MediaError`](/de/docs/Web/API/MediaError) Objekte, wenn ein Fehler bei der Behandlung eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements auftritt, enthalten jetzt eine [`message`](/de/docs/Web/API/MediaError/message) Eigenschaft, die eine spezifische Beschreibung des aufgetretenen Fehlers bietet. Diese Zeichenkette bietet Details, die auf diesen genauen Fehlerfall zugeschnitten sind, und gibt Einblicke, warum etwas schiefgelaufen ist ([Firefox Fehler 1299072](https://bugzil.la/1299072)). Dieses Feld war in Firefox Nightly Builds seit Firefox 51 enthalten, ist aber jetzt in allen Builds, bis hin zu den Release-Versionen, verfügbar.

### Andere APIs

- Die Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter), die in Firefox 50 hinzugefügt, aber immer einen Fehler zurückgab, wurde entfernt ([Firefox Fehler 1315185](https://bugzil.la/1315185)).
- Die proprietären `Apps installation/management APIs` von Firefox OS wurden von der Plattform entfernt (siehe [Firefox Fehler 1261019](https://bugzil.la/1261019)).
- Die proprietäre `Web Telephony API` von Firefox OS wurde von der Plattform entfernt (siehe [Firefox Fehler 1309719](https://bugzil.la/1309719)).
- Die proprietäre `Web Bluetooth API` von Firefox OS wurde von der Plattform entfernt (siehe [Firefox Fehler 1310020](https://bugzil.la/1310020)).
- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) ist jetzt nur für Chrome/privilegierten Code verfügbar (siehe [Firefox Fehler 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde in [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) umbenannt (siehe [Firefox Fehler 1304767](https://bugzil.la/1304767)).
- Die `mozDash` und `mozDashOffset` Mitglieder wurden aus [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) entfernt (siehe [Firefox Fehler 931389](https://bugzil.la/931389)).

### HTTP

- Der {{HTTPHeader("Referrer-Policy")}} Header unterstützt jetzt die Direktiven `same-origin`, `strict-origin` und `strict-origin-when-cross-origin` ([Firefox Fehler 1276836](https://bugzil.la/1276836)).
- Der [`'strict-dynamic'` Quell-Ausdruck](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#strict-dynamic) wird jetzt für {{HTTPHeader("Content-Security-Policy")}} Direktiven unterstützt, wie {{CSP("script-src")}} ([Firefox Fehler 1299483](https://bugzil.la/1299483)).
- Unsichere Seiten (`http:`) können keine [Cookies setzen](/de/docs/Web/HTTP/Guides/Cookies) mehr mit der Anweisung "secure" gemäß der [Strict Secure Cookies-Spezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox Fehler 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2 Header-Komprimierungsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox Fehler 1296280](https://bugzil.la/1296280)).
- Der {{HTTPHeader("Large-Allocation")}} Header wurde hinzugefügt ([Firefox Fehler 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente werden jetzt mit der [`XMLDocument`](/de/docs/Web/API/XMLDocument) Schnittstelle anstelle von `SVGDocument` dargestellt. Dies ist eine Änderung, die in der SVG 2-Spezifikation vorgenommen wurde.

### Sicherheit

- Wenn Login-Seiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password) Feld enthalten) so erstellt werden, dass sie unsicher übermittelt würden, zeigt Firefox eine Warnmeldung unterhalb des Passwortfelds an, um Benutzer zu warnen ([Firefox Fehler 1319119](https://bugzil.la/1319119)). Auto-Ausfüllen ist auch auf unsicheren Anmeldeformularen deaktiviert ([Firefox Fehler 1217152](https://bugzil.la/1217152)). Siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords) für mehr Details.
- Unterstützung für SHA-1 SSL Zertifikate wurde entfernt; das Navigieren zu einer sicheren Seite, die ein SHA-1 Zertifikat verwendet, führt nun zu einem `Untrusted Connection` Fehler ([Firefox Fehler 1330043](https://bugzil.la/1330043)).

## Plugins

Alle NPAPI-Plugins werden nicht mehr unterstützt, mit Ausnahme von Flash. Auch die Nutzung von Flash soll in Zukunft schrittweise eingestellt werden.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) Ereignisse
- [Asynchrone Ereignislistener in webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) Ereignisse
- `_execute_browser_action` und `_execute_page_action` im [Befehlen des Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im `content_scripts` des Manifests

### Schnittstellen

- Die Methode `nsIDroppedLinkHandler.dropLinks` und das Interface `nsIDroppedLinkItem` wurden hinzugefügt, um das Ablegen mehrerer Elemente zu behandeln ([Firefox Fehler 92737](https://bugzil.la/92737)).

### XUL

- Die Methodenüberladung `tabbrowser.loadTabs(uris, params)` wurde hinzugefügt ([Firefox Fehler 92737](https://bugzil.la/92737)).
- Die Funktionssignatur von `browser.droppedLinkHandler` wurde geändert ([Firefox Fehler 92737](https://bugzil.la/92737)).

## Ältere Versionen

{{Firefox_for_developers}}
