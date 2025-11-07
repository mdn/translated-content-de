---
title: Firefox 52 Versionshinweise für Entwickler
short-title: Firefox 52
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- [Vollständig überarbeiteter Modus für Responsive Design, einschließlich UA-Auswahl und Netzwerkdrosselung.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt jetzt Zeitfunktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält jetzt einen CSS-Grid-Inspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt jetzt den Status von Service Workern an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor enthält eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt ausschließlich aus Leerzeichen bestehende Textknoten an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle behobenen Devtools-Bugs zwischen Firefox 51 und Firefox 52](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der Linktyp `rel="noopener"` wurde implementiert (siehe [Firefox-Bug 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- Die {{cssxref(":focus-within")}} Pseudo-Klasse wurde hinzugefügt ([Firefox-Bug 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und Spaltensets innerhalb von {{HTMLElement("button")}}-Elementen hinzugefügt ([Firefox-Bug 984869](https://bugzil.la/984869)).
- Interpolation zwischen numerischen Farben und [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) implementiert ([Firefox-Bug 1299741](https://bugzil.la/1299741)).
- Flexbox-Layout für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` implementiert ([Firefox-Bug 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Antialiasing bei CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} hinzugefügt ([Firefox-Bug 1305259](https://bugzil.la/1305259)).
- CSS-Text-3-Segmentbruch-Regeln für die Transformation von Unterbrechungen implementiert ([Firefox-Bug 1081858](https://bugzil.la/1081858)).
- Basisschnittform-Clipping (wie durch die {{cssxref("clip-path")}}-Eigenschaft angewendet) kann jetzt auf SVG-Inhalte angewendet werden ([Firefox-Bug 1246741](https://bugzil.la/1246741)).
- Flexbox-Layout für {{cssxref("align-self")}} und {{cssxref("justify-self")}} implementiert ([Firefox-Bug 1221524](https://bugzil.la/1221524)).
- Die {{cssxref("touch-action")}}-Eigenschaft ist jetzt standardmäßig auf allen Plattformen aktiviert. (Für die komplette Geschichte siehe [Intent-to-ship-Mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [Intent-to-ship-Mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}} Handhabung & Single-line-sizing sollten von {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Zeilen ([Firefox-Bug 1090031](https://bugzil.la/1090031)).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) können jetzt verwendet werden, um nicht interpolierte Eigenschaften zu animieren (siehe [Firefox-Bug 1064937](https://bugzil.la/1064937)).
- Änderungen bei `baseline|last-baseline` auf `[first | last]? baseline` ([Firefox-Bug 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist `start` der Blockachse ([Firefox-Bug 1221565](https://bugzil.la/1221565)).
- Das Strecken flexibler Spuren mit undefiniertem Inhalt lässt jetzt die Min-/Max-Größe zu ([Firefox-Bug 1309407](https://bugzil.la/1309407)).
- Die Anfangswerte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden auf `0% 0%` bzw. `repeat` geändert ([Firefox-Bug 1308963](https://bugzil.la/1308963)).
- Es wurden einige Änderungen an den {{cssxref("&lt;color&gt;")}}-Werten durchgeführt (siehe [Firefox-Bug 1295456](https://bugzil.la/1295456)):
  - `rgba()` und `hsla()` wurden jetzt als Aliase von `rgb()` und `hsl()` neu definiert; beide akzeptieren die gleiche Parameter-Syntax.
  - `rgb(`) und `hsl()` akzeptieren jetzt einen optionalen Alphawert, z. B. `rgb(255, 0, 0, 0.5)`.
  - Farb-Funktionen akzeptieren jetzt durch Leerzeichen getrennte Parameter anstelle von Kommata, z. B. `rgb(255 0 0 / 0.5)`.
  - Alphawerte können jetzt als Prozentsätze sowie als Zahlen angegeben werden, z. B. `rgb(255 0 0 / 50%)`.
  - Die Farbkomponente in `hsl()`-Farben kann jetzt als Winkel sowie als Zahl angegeben werden, z. B. `hsl(120deg, 60%, 70%)`.

- Firefox' Implementierung von kindindexierten Pseudoklassen (wie {{cssxref(":nth-child")}}, {{cssxref(":first-child")}}, und so weiter) wurde aktualisiert, um der CSS Selectors Level 4-Spezifikation zu entsprechen: Diese Pseudoklassen stimmen jetzt mit den entsprechenden Geschwisterelementen überein, anstatt mit den Kindern ihres Elternelements. Dies ermöglicht die Verwendung dieser Pseudoklassen, wenn kein Elternteil vorhanden ist oder das Elternteil kein [`Element`](/de/docs/Web/API/Element) ist ([Firefox-Bug 1300374](https://bugzil.la/1300374).

#### CSS Grids

- [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) sind implementiert.

#### Änderungen und Entfernungen

- Ungeprefixed Mehrspalteneigenschaften (und vorläufig wieder `-moz`-geprefixte Versionen als Aliase hinzugefügt) ([Firefox-Bug 1300895](https://bugzil.la/1300895)).
- Beendetes Umwickeln von abspos-Kindern des Flex-Containers in anonyme Flex-Items ([Firefox-Bug 1269045](https://bugzil.la/1269045)).
- Implementierte Rastercontainer-Baselines ([Firefox-Bug 1151204](https://bugzil.la/1151204)).
- Entfernt `<flex>` Größenbegrenzungen aus dem Stilsystem ([Firefox-Bug 1305244](https://bugzil.la/1305244)).
- Entfernen Sie die Einstellung `layout.css.masking.enabled` ([Firefox-Bug 1308239](https://bugzil.la/1308239)).
- Die proprietären Medientypen `-moz-images-in-menus` und `-moz-images-in-buttons` wurden entfernt (siehe [Firefox-Bug 1302157](https://bugzil.la/1302157)).
- Entfernen Sie den `-moz-use-text-color`-Wert aus den Farbeigenschaften; Verwenden Sie stattdessen [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) ([Firefox-Bug 1306214](https://bugzil.la/1306214)).
- \[css-grid] 'max-width' auf Rasterelement verursacht Textüberlauf ([Firefox-Bug 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für asynchrone Funktionen wurde hinzugefügt. Dies fügt die Deklaration {{jsxref("Statements/async_function", "async function")}}, den Ausdruck {{jsxref("Operators/async_function", "async function")}} und das Schlüsselwort {{jsxref("Operators/await", "await")}} hinzu ([Firefox-Bug 1185106](https://bugzil.la/1185106)).
- ES2017 [letzte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen implementiert ([Firefox-Bug 1303788](https://bugzil.la/1303788)).
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) implementiert ([Firefox-Bug 1243717](https://bugzil.la/1243717)).
- Der [Potenzierungsoperator (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1291212](https://bugzil.la/1291212)).
- Sie können nun [IANA-Zeitzonennamen](https://www.iana.org/time-zones) in der `timeZone`-Option von datumsbezogenen APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox-Bug 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernungen

- [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) löst jetzt einen {{jsxref("SyntaxError")}} aus, wenn die Destrukturierung mit Rest-Element und folgendem Komma verwendet wird ([Firefox-Bug 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__`-Eigenschaften sind jetzt in der [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) erlaubt ([Firefox-Bug 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die Intl-API-Parameter `locales` und `options` zu unterstützen ([Firefox-Bug 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}} Konstruktoren akzeptieren jetzt [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue typisierte Arrays zu erstellen ([Firefox-Bug 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} erfordern nun, dass ihre `this`-Werte gültige Typisierte Array-Konstruktoren sind ([Firefox-Bug 1122396](https://bugzil.la/1122396)).
- Die nicht-standardmäßige Methode {{jsxref("ArrayBuffer.slice()")}} (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) ist veraltet und zeigt nun eine Warnung an, wenn sie verwendet wird ([Firefox-Bug 1316913](https://bugzil.la/1316913)).
- [Unicode-Codestrecken](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können jetzt auch als Bezeichner verwendet werden (z. B. `let \u{61} = 123`, siehe [Firefox-Bug 1314037](https://bugzil.la/1314037)).
- Zur Einhaltung von ES2015 werfen `\u2e2f` und `ⸯ` jetzt einen Fehler, wenn sie als Bezeichner verwendet werden, Einzelheiten siehe [Firefox-Bug 917436](https://bugzil.la/917436) und [Firefox-Bug 1197230](https://bugzil.la/1197230).

### WebAssembly

- Unterstützung für [WebAssembly](/de/docs/WebAssembly) wurde zu Gecko hinzugefügt.

### DOM

- Die [Selection API](/de/docs/Web/API/Selection) ist vollständig ausgeliefert, einschließlich der neuen [`selectstart`](/de/docs/Web/API/Node/selectstart_event) und [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) Ereignisse ([Firefox-Bug 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft [`Event.composed`](/de/docs/Web/API/Event/composed) wird jetzt unterstützt; dieser boolesche Wert zeigt an, ob das Ereignis durch den Schattenbaum in die Standard-DOM strömen kann ([Firefox-Bug 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente sowie die {{SVGElement("svg")}} und {{MathMLElement("math")}}-Elemente können durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) in den Vollbildmodus versetzt werden ([Firefox-Bug 1305928](https://bugzil.la/1305928)).
- [Touch-Events](/de/docs/Web/API/Touch_events) wurden auf Windows-Desktop-Plattformen wieder aktiviert — siehe [Firefox-Bug 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, da sie mehrere wichtige Websites beeinträchtigten; siehe [Firefox-Bug 888304](https://bugzil.la/888304).)
- Die Ereignisse [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event) sind jetzt implementiert ([Firefox-Bug 687787](https://bugzil.la/687787)).
- Die Eigenschaft [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) wurde implementiert (siehe [Firefox-Bug 1269052](https://bugzil.la/1269052)).
- Das [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest) Installationsereignis wurde zu [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) umbenannt, um Verwechslungen mit dem Service-Worker-Installationsereignis zu vermeiden (siehe [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)). Weitere Details zu diesem Update finden Sie in [Firefox-Bug 1309099](https://bugzil.la/1309099).
- Die Eigenschaft [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) der [Drag and drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt ein eingefrorenes Array von Zeichenfolgen zurück, anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) (siehe [Firefox-Bug 1298243](https://bugzil.la/1298243)).
- Die Ereignisse `loadstart` und `loadend` werden jetzt bei {{htmlelement("img")}}-Elementen ausgelöst (siehe [Firefox-Bug 1264769](https://bugzil.la/1264769)).
- Die [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) der [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox-Bug 862395](https://bugzil.la/862395).)
- Die Methode [`Window.open()`](/de/docs/Web/API/Window/open) hat jetzt das `noopener` [Fenster-Feature](/de/docs/Web/API/Window/open#noopener) verfügbar (siehe [Firefox-Bug 1267339](https://bugzil.la/1267339)), das die Funktionalität des `rel="noopener"` [Link-Typs](/de/docs/Web/HTML/Reference/Attributes/rel) widerspiegelt.
- Die Methode [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get) der [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox-Bug 1275838](https://bugzil.la/1275838)).
- Die [Pointer Event](/de/docs/Web/API/Pointer_events)-Eigenschaften [`width`](/de/docs/Web/API/PointerEvent/width) und [`height`](/de/docs/Web/API/PointerEvent/height) haben jetzt standardmäßig den Wert 1 (siehe [Firefox-Bug 1304315](https://bugzil.la/1304315)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde aktualisiert, um Änderungen in der [neuesten Spezifikation](https://wicg.github.io/entries-api/) zu berücksichtigen (siehe [Firefox-Bug 1284987](https://bugzil.la/1284987) für die genauen Details).
- Die Eigenschaft [`cancelBubble`](/de/docs/Web/API/Event/cancelBubble), die auf [`UIEvent`](/de/docs/Web/API/UIEvent) definiert war, ist jetzt auf der [`Event`](/de/docs/Web/API/Event) Schnittstelle definiert. Weitere Details finden Sie in [Firefox-Bug 1298970](https://bugzil.la/1298970).

#### Änderungen und Entfernungen

- Die Firefox OS-APIs, die mit dem Verwalten von Telefonanrufen zu tun haben (Kontakte, MobileConnection, Icc, etc.), wurden entfernt ([Firefox-Bug 1311206](https://bugzil.la/1311206)).
- Die Firefox OS-Identitätsschnittstelle wurde entfernt ([Firefox-Bug 1309030](https://bugzil.la/1309030)).
- Die Firefox OS-Mailbox-API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox-Bug 1309723](https://bugzil.la/1309723)).
- Die Firefox OS Cell Broadcast-API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox-Bug 1306772](https://bugzil.la/1306772)).
- Die Firefox OS-TV-Übertragungs-APIs wurden entfernt ([Firefox-Bug 1306778](https://bugzil.la/1306778)).
- Die Firefox OS-Funkradio-API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox-Bug 1306779](https://bugzil.la/1306779)).

### Service Workers und Fetch

- Die Methode `Headers.getAll()` wurde entfernt und [`Headers.get()`](/de/docs/Web/API/Headers/get) ruft jetzt alle Werte des angegebenen Headers ab, nicht nur den ersten (siehe [Firefox-Bug 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Aktualisierungen der Fetch-API-Spezifikation.

### Web Audio API

- Die Schnittstelle [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) wurde hinzugefügt; sie repräsentiert eine Audioquelle, die immer einen Strom von Samples ausgibt, die alle denselben Wert haben. Ein Beispiel, wie dies zur Vereinfachung komplexer Audioflüsse verwendet werden kann, finden Sie unter [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

### WebRTC

- Wenn eine ICE-Verbindung vorübergehend unterbrochen wird, wird die Eigenschaft [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) jetzt auf `"disconnected"` gesetzt; dies weist auf einen vorübergehenden Fehler hin, der sich möglicherweise bald selbst behebt, wonach die Verbindung wieder in den `"connected"`-Zustand zurückkehrt ([Firefox-Bug 852665](https://bugzil.la/852665)).
- Das `MediaDevices`-Ereignis [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) und der zugehörige Handler, die in Firefox 51 implementiert, aber standardmäßig nur auf Mac deaktiviert wurden, wurden auf Windows und Linux implementiert und sind nun standardmäßig auf allen Plattformen aktiviert.
- Die Eigenschaft [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) wird jetzt unterstützt. Diese schreibgeschützte boolesche Eigenschaft gibt an, ob mindestens ein Track im Stream momentan abgespielt wird.
- Vor Firefox 52 konnte die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) nur lokale Tracks stoppen (das heißt, Tracks, die durch [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden). Jetzt können verschiedene Tracks gestoppt werden, einschließlich solcher auf einem [`MediaStream`](/de/docs/Web/API/MediaStream), das mit einer {{Glossary("WebRTC", "WebRTC")}}-Verbindung, einem [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Stream oder einem [`CanvasCaptureMediaStream`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) verbunden ist.
- Vorher führte das wiederholte Ändern des [`TextTrack`]-[`modus`](/de/docs/Web/API/TextTrack/mode) während eines Durchlaufs durch die Firefox-Ereignisschleife zu mehreren [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignissen, die an die durch die übergeordnete Medienelementeigenschaft [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) angegebene [`TextTrackList`](/de/docs/Web/API/TextTrackList) übermittelt wurden. Jetzt werden diese Änderungen in einem Ereignis zusammengefasst ([Firefox-Bug 882674](https://bugzil.la/882674)).

### Audio/Video/Media

- Die [`MediaError`](/de/docs/Web/API/MediaError)-Objekte, die in [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) angegeben sind, wenn ein Fehler bei der Verarbeitung eines {{HTMLElement("audio")}} oder {{HTMLElement("video")}}-Elements auftritt, enthalten jetzt eine [`message`](/de/docs/Web/API/MediaError/message)-Eigenschaft, die eine spezifische Beschreibung des aufgetretenen Fehlers enthält. Diese Zeichenkette bietet spezifische Details zu diesem genauen Fehlerereignis, was Aufschluss darüber gibt, warum etwas schiefgelaufen ist ([Firefox-Bug 1299072](https://bugzil.la/1299072)). Dieses Feld war seit Firefox 51 in Firefox Nightly-Builds enthalten, ist jetzt jedoch in allen Builds bis hin zur Veröffentlichung verfügbar.

### Andere APIs

- Die Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter), die in Firefox 50 hinzugefügt wurde (aber immer einen Fehler zurückgab), wurde entfernt ([Firefox-Bug 1315185](https://bugzil.la/1315185)).
- Die proprietären Firefox OS `Apps Installations-/Verwaltungs-APIs` wurden aus der Plattform entfernt (siehe [Firefox-Bug 1261019](https://bugzil.la/1261019)).
- Die proprietäre Firefox OS `Web-Telefonie-API` wurde von der Plattform entfernt (siehe [Firefox-Bug 1309719](https://bugzil.la/1309719)).
- Die proprietäre Firefox OS `Web-Bluetooth-API` wurde von der Plattform entfernt (siehe [Firefox-Bug 1310020](https://bugzil.la/1310020)).
- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) ist jetzt nur noch für Chrome/privilegierten Code verfügbar (siehe [Firefox-Bug 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde in [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) umbenannt (siehe [Firefox-Bug 1304767](https://bugzil.la/1304767)).
- Die Mitglieder `mozDash` und `mozDashOffset` wurden aus [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) entfernt (siehe [Firefox-Bug 931389](https://bugzil.la/931389)).

### HTTP

- Der {{HTTPHeader("Referrer-Policy")}}-Header unterstützt jetzt die Direktiven `same-origin`, `strict-origin` und `strict-origin-when-cross-origin` ([Firefox-Bug 1276836](https://bugzil.la/1276836)).
- Der [`'strict-dynamic'` Quellenausdruck](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#strict-dynamic) wird nun für {{HTTPHeader("Content-Security-Policy")}}-Direktiven wie {{CSP("script-src")}} unterstützt ([Firefox-Bug 1299483](https://bugzil.la/1299483)).
- Unsichere Seiten (`http:`) können keine [Cookies setzen](/de/docs/Web/HTTP/Guides/Cookies) mehr mit der "secure"-Direktive gemäß der [Strict Secure Cookies-Spezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox-Bug 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2-Headerkomprimierungsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox-Bug 1296280](https://bugzil.la/1296280)).
- Der `Large-Allocation`-Header wurde hinzugefügt ([Firefox-Bug 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente werden jetzt mithilfe der [`XMLDocument`](/de/docs/Web/API/XMLDocument)-Schnittstelle anstelle von SVGDocument dargestellt. Dies ist eine Änderung, die in der SVG 2-Spezifikation vorgenommen wurde.

### Sicherheit

- Wenn Anmeldeseiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)-Feld enthalten) erstellt werden, sodass sie unsicher übertragen werden, zeigt Firefox eine kontextsensitive Warnmeldung unterhalb des Passwortfeldes an, um Benutzer zu warnen ([Firefox-Bug 1319119](https://bugzil.la/1319119)). Die automatische Vervollständigung ist auch bei unsicheren Anmeldeformularen deaktiviert ([Firefox-Bug 1217152](https://bugzil.la/1217152)). Weitere Informationen finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Die Unterstützung für SHA-1 SSL-Zertifikate wurde entfernt; das Navigieren zu einer sicheren Seite, die ein SHA-1-Zertifikat verwendet, führt jetzt zu einem `Untrusted Connection`-Fehler ([Firefox-Bug 1330043](https://bugzil.la/1330043)).

## Plugins

Alle NPAPI-Plugin-Unterstützungen außer Flash wurden eingestellt. Auch die Nutzung von Flash soll in Zukunft eingestellt werden.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) Ereignisse
- [asynchrone Ereignis-Listener in webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) Ereignisse
- `_execute_browser_action` und `_execute_page_action` im [commands manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im content_scripts manifest key

### Schnittstellen

- Die Methode `nsIDroppedLinkHandler.dropLinks` und die Schnittstelle `nsIDroppedLinkItem` wurden hinzugefügt, um das Ablegen mehrerer Elemente zu behandeln ([Firefox-Bug 92737](https://bugzil.la/92737)).

### XUL

- Die Überladung der Methode `tabbrowser.loadTabs(uris, params)` wurde hinzugefügt ([Firefox-Bug 92737](https://bugzil.la/92737)).
- Die Funktionssignatur `browser.droppedLinkHandler` wurde geändert ([Firefox-Bug 92737](https://bugzil.la/92737)).
