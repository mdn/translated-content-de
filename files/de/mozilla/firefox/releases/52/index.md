---
title: Firefox 52 Versionshinweise für Entwickler
short-title: Firefox 52
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: cc7f29133a331628d623e8cd705394b538d4368c
---

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- [Vollständig überarbeiteter Responsiver Design-Modus, einschließlich UA-Auswahl und Netzwerkdrosselung.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt jetzt Timing-Funktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält jetzt einen CSS-Rasterinspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt jetzt den Status des Service Workers an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor bietet eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt Textknoten an, die nur aus Leerzeichen bestehen.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle Devtools-Bugs zwischen Firefox 51 und Firefox 52 behoben](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der `rel="noopener"` [Link-Typ](/de/docs/Web/HTML/Reference/Attributes/rel) wurde implementiert (siehe [Firefox Bug 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- Hinzugefügt: {{cssxref(":focus-within")}} Pseudo-Klasse ([Firefox Bug 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und columnset-Layout innerhalb von {{HTMLElement("button")}} Elementen hinzugefügt ([Firefox Bug 984869](https://bugzil.la/984869)).
- Implementierte Interpolation zwischen numerischen Farben und [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) ([Firefox Bug 1299741](https://bugzil.la/1299741)).
- Implementierte Flexbox-Layout für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` ([Firefox Bug 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Antialiasing in CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} hinzugefügt ([Firefox Bug 1305259](https://bugzil.la/1305259)).
- Implementierte CSS Text 3-Segmentbruch-Transformationsregeln ([Firefox Bug 1081858](https://bugzil.la/1081858)).
- Basisformen-Clipping (wie angewendet über die {{cssxref("clip-path")}} Eigenschaft) kann nun auf SVG-Inhalte angewendet werden ([Firefox Bug 1246741](https://bugzil.la/1246741)).
- Implementierte Flexbox-Layout für {{cssxref("align-self")}} und {{cssxref("justify-self")}} ([Firefox Bug 1221524](https://bugzil.la/1221524)).
- Die {{cssxref("touch-action")}} Eigenschaft ist jetzt standardmäßig auf allen Plattformen aktiviert. (Für die gesamte Geschichte siehe [intent to ship mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [intent to ship mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}} Handhabung & Einzeilengröße sollte von {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Zeilen ([Firefox Bug 1090031](https://bugzil.la/1090031)).
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) können jetzt verwendet werden, um nicht-interpolierte Eigenschaften zu animieren (siehe [Firefox Bug 1064937](https://bugzil.la/1064937)).
- Geändert `baseline|last-baseline` zu `[ first | last ]? baseline` ([Firefox Bug 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist `start` für die Block-Achse ([Firefox Bug 1221565](https://bugzil.la/1221565)).
- Dehnende flexible Spuren mit unbestimmter Containing-Block-Länge achten jetzt auf die Min/Max-Größe ([Firefox Bug 1309407](https://bugzil.la/1309407)).
- Die Anfangswerte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden jeweils auf `0% 0%` und `repeat` geändert ([Firefox Bug 1308963](https://bugzil.la/1308963)).
- Es gab eine Reihe von Änderungen an CSS {{cssxref("&lt;color&gt;")}} Werten (siehe [Firefox Bug 1295456](https://bugzil.la/1295456)):
  - `rgba()` und `hsla()` wurden jetzt als Alias von `rgb()` und `hsl()` neu definiert; beide akzeptieren den gleichen Parametersyntax.
  - `rgb(`) und `hsl()` akzeptieren jetzt einen optionalen Alphawert, z.B. `rgb(255, 0, 0, 0.5)`.
  - Farbfunktionsparameter können nun durch Leerzeichen getrennt sein anstatt durch Kommas, z.B. `rgb(255 0 0 / 0.5)`.
  - Alphawerte können nun sowohl als Prozentsätze als auch als Zahlen angegeben werden, z.B. `rgb(255 0 0 / 50%)`.
  - Der Farbton in `hsl()` Farben kann jetzt als Winkel sowie als Zahl angegeben werden, z.B. `hsl(120deg, 60%, 70%)`.

- Die Implementierung von Firefox für kinderindizierte Pseudo-Klassen (wie {{cssxref(":nth-child")}}, {{cssxref(":first-child")}} und so weiter) wurde aktualisiert, um der Spezifikation der CSS-Selektoren Level 4 zu entsprechen: Diese Pseudo-Klassen passen jetzt zu den entsprechenden Geschwisterelementen anstatt zu den Kindern ihres Elternelements. Dies ermöglicht die Verwendung dieser Pseudo-Klassen, wenn kein übergeordnetes Element vorhanden ist oder das übergeordnete Element kein [`Element`](/de/docs/Web/API/Element) ist ([Firefox Bug 1300374](https://bugzil.la/1300374).

#### CSS Grids

- [CSS Grids](/de/docs/Web/CSS/Guides/Grid_layout) sind implementiert.

#### Änderungen und Entfernungen

- Unprefixed Multi-Column-Eigenschaften (und die `-moz`-präfixierten Versionen vorübergehend als Aliase hinzugefügt) ([Firefox Bug 1300895](https://bugzil.la/1300895)).
- Stoppen des Verpackens von abspos-Kindern eines Flex-Containers in anonyme Flex-Items ([Firefox Bug 1269045](https://bugzil.la/1269045)).
- Implementierte Grundlinien von Grid-Containern ([Firefox Bug 1151204](https://bugzil.la/1151204)).
- Entfernt `<flex>` Mindestgröße aus dem Stilsystem ([Firefox Bug 1305244](https://bugzil.la/1305244)).
- Entfernen Sie die Voreinstellung `layout.css.masking.enabled` ([Firefox Bug 1308239](https://bugzil.la/1308239)).
- Die proprietären `-moz-images-in-menus` und `-moz-images-in-buttons` [Medientypen](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wurden entfernt (siehe [Firefox Bug 1302157](https://bugzil.la/1302157)).
- Entfernt den `-moz-use-text-color` Wert aus Farbeigenschaften; verwenden Sie stattdessen [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) ([Firefox Bug 1306214](https://bugzil.la/1306214)).
- \[css-grid] 'max-width', das auf Rasterelement gesetzt ist, verursacht Textüberlauf ([Firefox Bug 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für asynchrone Funktionen wurde hinzugefügt. Dies umfasst die Deklaration {{jsxref("Statements/async_function", "async function")}}, den Ausdruck {{jsxref("Operators/async_function", "async function")}} und das Schlüsselwort {{jsxref("Operators/await", "await")}} ([Firefox Bug 1185106](https://bugzil.la/1185106)).
- Implementiert ES2017 [nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen ([Firefox Bug 1303788](https://bugzil.la/1303788)).
- Implementiert [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ([Firefox Bug 1243717](https://bugzil.la/1243717)).
- Der [Exponentialoperator (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) ist jetzt standardmäßig aktiviert ([Firefox Bug 1291212](https://bugzil.la/1291212)).
- Sie können jetzt [IANA-Zeitzonennamen](https://www.iana.org/time-zones) in der `timeZone`-Option von datumsbezogenen APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox Bug 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernungen

- [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) wirft jetzt einen {{jsxref("SyntaxError")}}, wenn bei der Destrukturierung von rest mit nachgestelltem Komma verwendet wird ([Firefox Bug 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__`-Eigenschaften sind jetzt in der [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) erlaubt ([Firefox Bug 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die Intl-API-Parameter `locales` und `options` zu unterstützen ([Firefox Bug 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}} Konstruktoren akzeptieren jetzt [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue Typ-Arrays zu erstellen ([Firefox Bug 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} erfordern jetzt, dass ihre `this`-Werte gültige Typ-Array-Konstruktoren sind ([Firefox Bug 1122396](https://bugzil.la/1122396)).
- Die nicht standardmäßige {{jsxref("ArrayBuffer.slice()")}} Methode (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) ist veraltet und zeigt jetzt eine Warnung an, wenn sie verwendet wird ([Firefox Bug 1316913](https://bugzil.la/1316913)).
- [Unicode-Codepunkt-Escapes](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können jetzt auch als Bezeichner verwendet werden (z.B. `let \u{61} = 123`, siehe [Firefox Bug 1314037](https://bugzil.la/1314037)).
- Um mit ES2015 konform zu sein, `\u2e2f` und `ⸯ` werfen jetzt eine Fehlermeldung, wenn sie als Bezeichner verwendet werden, Details finden Sie in [Firefox Bug 917436](https://bugzil.la/917436) und [Firefox Bug 1197230](https://bugzil.la/1197230).

### WebAssembly

- Unterstützung für [WebAssembly](/de/docs/WebAssembly) wurde in Gecko hinzugefügt.

### DOM

- Die [Selektions-API](/de/docs/Web/API/Selection) wurde vollständig ausgeliefert, einschließlich der neuen [`selectstart`](/de/docs/Web/API/Node/selectstart_event) und [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) Ereignisse ([Firefox Bug 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft [`Event.composed`](/de/docs/Web/API/Event/composed) wird jetzt unterstützt; dieser boolesche Wert gibt an, ob das Ereignis durch den Shadow-Root in den Standard-DOM bubbling kann ([Firefox Bug 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente sowie die Elemente {{SVGElement("svg")}} und {{MathMLElement("math")}} können in den Vollbildmodus versetzt werden, indem [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird ([Firefox Bug 1305928](https://bugzil.la/1305928)).
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events) wurden auf Windows-Plattformen auf dem Desktop wieder aktiviert — siehe [Firefox Bug 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, da sie eine Reihe bedeutender Websites beeinträchtigten; siehe [Firefox Bug 888304](https://bugzil.la/888304).)
- Die [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event) Ereignisse sind jetzt implementiert ([Firefox Bug 687787](https://bugzil.la/687787)).
- Die [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) Eigenschaft wurde implementiert (siehe [Firefox Bug 1269052](https://bugzil.la/1269052)).
- Das [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest) Installationsereignis wurde in [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) umbenannt, um Verwechslungen mit dem Service Worker-Installationsereignis zu vermeiden (siehe [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)). Siehe [Firefox Bug 1309099](https://bugzil.la/1309099) für mehr Details zu diesem Update.
- Die [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) Eigenschaft der [Drag and drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt ein eingefrorenes Array von Strings anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurück (siehe [Firefox Bug 1298243](https://bugzil.la/1298243)).
- Die `loadstart` und `loadend` Ereignisse werden jetzt auf {{htmlelement("img")}} Elementen ausgelöst (siehe [Firefox Bug 1264769](https://bugzil.la/1264769)).
- Die [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) der [Notifications API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox Bug 862395](https://bugzil.la/862395).)
- Die [`Window.open()`](/de/docs/Web/API/Window/open) Methode hat jetzt ein `noopener` [Fenster-Feature](/de/docs/Web/API/Window/open#noopener) verfügbar (siehe [Firefox Bug 1267339](https://bugzil.la/1267339)), das die Funktionalität des `rel="noopener"` [Link-Typs](/de/docs/Web/HTML/Reference/Attributes/rel) widerspiegelt.
- Die [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get) Methode der [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox Bug 1275838](https://bugzil.la/1275838)).
- [Pointer Event](/de/docs/Web/API/Pointer_events) [`width`](/de/docs/Web/API/PointerEvent/width) und [`height`](/de/docs/Web/API/PointerEvent/height) Eigenschaften haben jetzt einen Standardwert von 1 (siehe [Firefox Bug 1304315](https://bugzil.la/1304315)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde aktualisiert, um Änderungen in der [neuesten Spezifikation](https://wicg.github.io/entries-api/) zu berücksichtigen (siehe [Firefox Bug 1284987](https://bugzil.la/1284987) für die exakten Details).
- Die [`cancelBubble`](/de/docs/Web/API/Event/cancelBubble) Eigenschaft, die auf [`UIEvent`](/de/docs/Web/API/UIEvent) definiert war, ist jetzt auf der [`Event`](/de/docs/Web/API/Event) Schnittstelle definiert. Siehe [Firefox Bug 1298970](https://bugzil.la/1298970) für mehr Details.

#### Änderungen und Entfernungen

- Die Firefox OS-APIs zur Verwaltung von Telefonanrufen (Kontakte, MobileConnection, Icc, etc.) wurden entfernt ([Firefox Bug 1311206](https://bugzil.la/1311206)).
- Die Firefox OS-`Identity`-Schnittstelle wurde entfernt ([Firefox Bug 1309030](https://bugzil.la/1309030)).
- Die Firefox OS Voicemail API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox Bug 1309723](https://bugzil.la/1309723)).
- Die Firefox OS Zell-Broadcast-API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox Bug 1306772](https://bugzil.la/1306772)).
- Die Firefox OS TV-Broadcast-bezogenen APIs wurden entfernt ([Firefox Bug 1306778](https://bugzil.la/1306778)).
- Die Firefox OS FM-Radio-API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox Bug 1306779](https://bugzil.la/1306779)).

### Service Worker und Fetch

- Die `Headers.getAll()` Methode wurde entfernt und [`Headers.get()`](/de/docs/Web/API/Headers/get) ruft jetzt alle Werte des angegebenen Headers ab, nicht nur den ersten (siehe [Firefox Bug 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Fetch API Spezifikationsaktualisierungen.

### Web Audio API

- Die [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Schnittstelle wurde hinzugefügt; sie stellt eine Audioquelle dar, die immer einen Stream von Samples ausgibt, die alle denselben Wert haben. Siehe [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) für ein Beispiel, das zeigt, wie diese verwendet werden kann, um einige komplexe Audioflüsse zu vereinfachen.

### WebRTC

- Wenn eine ICE-Verbindung vorübergehend gestört ist, wird die [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) Eigenschaft jetzt auf `"disconnected"` gesetzt; dies zeigt einen transitorischen Fehler an, der sich möglicherweise bald selbst behebt, wobei die Verbindung anschließend in den `"connected"`-Status zurückkehrt ([Firefox Bug 852665](https://bugzil.la/852665)).
- Das `MediaDevices` [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis und sein entsprechender Handler, die in Firefox 51 auf dem Mac implementiert, aber standardmäßig deaktiviert waren, sind jetzt auf Windows und Linux implementiert und auf allen Plattformen standardmäßig aktiviert.
- Die [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) Eigenschaft wird jetzt unterstützt. Diese schreibgeschützte boolesche Eigenschaft zeigt an, ob auf dem Stream mindestens ein Track derzeit abgespielt wird.
- Vor Firefox 52 konnte die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) Methode nur lokale Tracks stoppen (d.h. Tracks, die über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden). Jetzt können verschiedene Tracks gestoppt werden, einschließlich derer auf einem [`MediaStream`](/de/docs/Web/API/MediaStream), das mit einer {{Glossary("WebRTC", "WebRTC")}}-Verbindung, einem [Web Audio API](/de/docs/Web/API/Web_Audio_API) Stream oder einem [`CanvasCaptureMediaStream`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) verbunden ist.
- Zuvor würde das mehrfache Ändern des [`TextTrack`](/de/docs/Web/API/TextTrack) [`mode`](/de/docs/Web/API/TextTrack/mode) während einer einzigen Schleife durch das Firefox-Ereignis viele [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignisse an die [`TextTrackList`](/de/docs/Web/API/TextTrackList) liefern, die von der `textTracks`-Eigenschaft des Medien-Parents angegeben wird. Jetzt werden diese Änderungen in ein Ereignis zusammengefasst ([Firefox Bug 882674](https://bugzil.la/882674)).

### Audio/Video/Media

- Die [`MediaError`](/de/docs/Web/API/MediaError) Objekte, die in [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) angegeben sind, wenn ein Fehler bei der Handhabung eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Elements auftritt, enthalten jetzt eine [`message`](/de/docs/Web/API/MediaError/message) Eigenschaft, die eine spezifische Beschreibung des aufgetretenen Fehlers bietet. Dieser String bietet Details, die speziell für diesen genauen Fehlerfall sind und Einblicke bieten, warum etwas schief gelaufen ist ([Firefox Bug 1299072](https://bugzil.la/1299072)). Dieses Feld wurde in den nächtlichen Builds von Firefox seit Firefox 51 integriert, ist jedoch jetzt in allen Builds verfügbar, bis hin zu den Release-Builds.

### Andere APIs

- Die Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter), die in Firefox 50 hinzugefügt, aber immer einen Fehler zurückgegeben hat, wurde entfernt ([Firefox Bug 1315185](https://bugzil.la/1315185)).
- Die proprietären `Apps installation/management APIs` von Firefox OS wurden von der Plattform entfernt (siehe [Firefox Bug 1261019](https://bugzil.la/1261019)).
- Die proprietäre `Web Telephony API` von Firefox OS wurde von der Plattform entfernt (siehe [Firefox Bug 1309719](https://bugzil.la/1309719)).
- Die proprietäre `Web Bluetooth API` von Firefox OS wurde von der Plattform entfernt (siehe [Firefox Bug 1310020](https://bugzil.la/1310020)).
- Die [API zum Batteriestatus](/de/docs/Web/API/Battery_Status_API) ist jetzt nur noch für Chrome/privilegierten Code verfügbar (siehe [Firefox Bug 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde in [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) umbenannt (siehe [Firefox Bug 1304767](https://bugzil.la/1304767)).
- Die `mozDash` und `mozDashOffset` Mitglieder wurden aus [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) entfernt (siehe [Firefox Bug 931389](https://bugzil.la/931389)).

### HTTP

- Der {{HTTPHeader("Referrer-Policy")}} Header unterstützt jetzt die Direktiven `same-origin`, `strict-origin`, und `strict-origin-when-cross-origin` ([Firefox Bug 1276836](https://bugzil.la/1276836)).
- Der [`'strict-dynamic'` Quellenausdruck](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#strict-dynamic) wird jetzt für {{HTTPHeader("Content-Security-Policy")}} Direktiven unterstützt, wie z.B. {{CSP("script-src")}} ([Firefox Bug 1299483](https://bugzil.la/1299483)).
- Unsichere Webseiten (`http:`) können keine [Cookies setzen](/de/docs/Web/HTTP/Guides/Cookies) mehr mit der "secure" Direktive gemäß der [Strict Secure Cookies-Spezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox Bug 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2 Header-Komprimierungsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox Bug 1296280](https://bugzil.la/1296280)).
- Der `Large-Allocation` Header wurde hinzugefügt ([Firefox Bug 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente sind jetzt unter Verwendung der [`XMLDocument`](/de/docs/Web/API/XMLDocument) Schnittstelle anstelle von SVGDocument darstellbar. Dies ist eine Änderung, die in der SVG 2-Spezifikation vorgenommen wurde.

### Sicherheit

- Wenn Anmeldeformulare (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password) Feld enthalten) erstellt werden, sodass sie unsicher übermittelt werden würden, zeigt Firefox eine Warnmeldung im Kontext unter dem Passwortfeld an, um Benutzer zu warnen ([Firefox Bug 1319119](https://bugzil.la/1319119)). Autofill ist ebenfalls auf unsicheren Anmeldeformularen deaktiviert ([Firefox Bug 1217152](https://bugzil.la/1217152)).
- Unterstützung für SHA-1 SSL-Zertifikate wurde entfernt; das Navigieren zu einer sicheren Seite, die ein SHA-1-Zertifikat verwendet, führt jetzt zu einem `Untrusted Connection`-Fehler ([Firefox Bug 1330043](https://bugzil.la/1330043)).

## Plugins

Alle NPAPI-Plugin-Unterstützung außer Flash wurde eingestellt. Auch die Nutzung von Flash soll künftig auslaufen.

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) Ereignisse
- [Asynchrone Ereignis-Listener in webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) Ereignisse
- `_execute_browser_action` und `_execute_page_action` im [commands manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im content_scripts manifest key

### Schnittstellen

- Die Methode `nsIDroppedLinkHandler.dropLinks` und die Schnittstelle `nsIDroppedLinkItem` wurden hinzugefügt, um das Ablegen mehrerer Elemente zu handhaben ([Firefox Bug 92737](https://bugzil.la/92737)).

### XUL

- Eine Überladung der Methode `tabbrowser.loadTabs(uris, params)` wurde hinzugefügt ([Firefox Bug 92737](https://bugzil.la/92737)).
- Die Funktionssignatur von `browser.droppedLinkHandler` wurde geändert ([Firefox Bug 92737](https://bugzil.la/92737)).
