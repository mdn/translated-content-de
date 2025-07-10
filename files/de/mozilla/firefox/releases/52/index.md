---
title: Firefox 52 für Entwickler
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Entwickler von Firefox und Gecko sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- [Völlig überarbeitetes Responsive Design Mode, einschließlich UA-Auswahl und Netzwerkdrosselung.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt jetzt Timing-Funktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält jetzt einen CSS-Grid-Inspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt jetzt den Status von Service Workern an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor bietet eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt Textknoten, die nur aus Leerzeichen bestehen, an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle Devtools-Bugs, die zwischen Firefox 51 und 52 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der `rel="noopener"` [Link-Typ](/de/docs/Web/HTML/Reference/Attributes/rel) wurde implementiert (siehe [Firefox-Bug 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- Die Pseudoklasse {{cssxref(":focus-within")}} wurde hinzugefügt ([Firefox-Bug 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und Columnset-Layout innerhalb von {{HTMLElement("button")}}-Elementen hinzugefügt ([Firefox-Bug 984869](https://bugzil.la/984869)).
- Implementierte Interpolation zwischen numerischen Farben und [currentcolor](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox-Bug 1299741](https://bugzil.la/1299741)).
- Implementiertes Flexbox-Layout für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` ([Firefox-Bug 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Antialiasing in CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} hinzugefügt ([Firefox-Bug 1305259](https://bugzil.la/1305259)).
- CSS Text 3 Segmentbruch-Transformationsregeln implementiert ([Firefox-Bug 1081858](https://bugzil.la/1081858)).
- Basisform-Clipping (wie über die {{cssxref("clip-path")}}-Eigenschaft angewendet) kann jetzt auf SVG-Inhalte angewendet werden ([Firefox-Bug 1246741](https://bugzil.la/1246741)).
- Flexbox-Layout für {{cssxref("align-self")}} und {{cssxref("justify-self")}} implementiert ([Firefox-Bug 1221524](https://bugzil.la/1221524)).
- Die {{cssxref("touch-action")}}-Eigenschaft ist jetzt standardmäßig auf allen Plattformen aktiviert. (Für die gesamte Geschichte, siehe [intent to ship mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [intent to ship mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox-{{cssxref("align-content")}}-Verarbeitung & Einzelzeilengrößen sollten von {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Zeilen ([Firefox-Bug 1090031](https://bugzil.la/1090031)).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) können jetzt verwendet werden, um nicht interpolierte Eigenschaften zu animieren (siehe [Firefox-Bug 1064937](https://bugzil.la/1064937)).
- Geändert `baseline|last-baseline` zu `[ first | last ]? baseline` ([Firefox-Bug 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist `start` für die Blockachse ([Firefox-Bug 1221565](https://bugzil.la/1221565)).
- Flexible Tracks mit einer unbestimmten Containerblocklänge werden jetzt unter Berücksichtigung der Min/Max-Größe gestreckt ([Firefox-Bug 1309407](https://bugzil.la/1309407)).
- Die anfänglichen Werte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden auf `0% 0%` und `repeat` geändert ([Firefox-Bug 1308963](https://bugzil.la/1308963)).
- Es gab eine Reihe von Änderungen an CSS-{{cssxref("&lt;color&gt;")}}-Werten (siehe [Firefox-Bug 1295456](https://bugzil.la/1295456)):
  - `rgba()` und `hsla()` sind nun als Aliase von `rgb()` und `hsl()` neu definiert; beide akzeptieren denselben Parametersyntax.
  - `rgb(`) und `hsl()` akzeptieren nun einen optionalen Alpha-Wert, z.B. `rgb(255, 0, 0, 0.5)`.
  - Farbfunktionsparameter können jetzt durch Leerzeichen getrennt werden anstelle von Kommas, z.B. `rgb(255 0 0 / 0.5)`.
  - Alpha-Werte können nun als Prozentsatz sowie in Zahlen angegeben werden, z.B. `rgb(255 0 0 / 50%)`.
  - Die Farbtonkomponente in `hsl()`-Farben kann nun auch als Winkel anstelle einer Zahl angegeben werden, z.B. `hsl(120deg, 60%, 70%)`.

- Firefox' Implementierung von kindindexierten Pseudoklassen (wie {{cssxref(":nth-child")}}, {{cssxref(":first-child")}}, usw.) wurde aktualisiert, um der CSS-Selektoren-Level-4-Spezifikation zu entsprechen: Diese Pseudoklassen passen jetzt zu den entsprechenden Nachbarelementen anstatt zu den Kindern ihres Elternelements. Dadurch können diese Pseudoklassen auch verwendet werden, wenn kein Elternteil vorhanden ist oder das Elternteil kein [`Element`](/de/docs/Web/API/Element) ist ([Firefox-Bug 1300374](https://bugzil.la/1300374).

#### CSS Grids

- [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) sind implementiert.

#### Änderungen und Entfernungen

- Ungeprefixten Mehrspalten-Eigenschaften (und `-moz`-prefix Versionen vorübergehend als Aliase hinzugefügt) ([Firefox-Bug 1300895](https://bugzil.la/1300895)).
- Beenden des Umbruchs von abspos-Kindern des Flexcontainers in anonyme Flexelemente ([Firefox-Bug 1269045](https://bugzil.la/1269045)).
- Implementierte Baselines für Grid-Container ([Firefox-Bug 1151204](https://bugzil.la/1151204)).
- Entfernte `<flex>` Min-Größenbestimmung aus dem Stil-System ([Firefox-Bug 1305244](https://bugzil.la/1305244)).
- Entfernte Präferenz `layout.css.masking.enabled` ([Firefox-Bug 1308239](https://bugzil.la/1308239)).
- Die proprietären `-moz-images-in-menus` und `-moz-images-in-buttons` [Media-Typen](/de/docs/Web/CSS/@media#media_features) wurden entfernt (siehe [Firefox-Bug 1302157](https://bugzil.la/1302157)).
- Entfernte `-moz-use-text-color` Wert aus Farbeigenschaften; verwenden Sie stattdessen [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox-Bug 1306214](https://bugzil.la/1306214)).
- \[css-grid] 'max-width', das auf Grid-Element gesetzt wurde, lässt Text überlaufen ([Firefox-Bug 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für asynchrone Funktionen wurde hinzugefügt. Dazu gehören {{jsxref("Statements/async_function", "async function")}} Deklaration, {{jsxref("Operators/async_function", "async function")}} Ausdruck und das {{jsxref("Operators/await", "await")}} Schlüsselwort ([Firefox-Bug 1185106](https://bugzil.la/1185106)).
- ES2017 [nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen wurden implementiert ([Firefox-Bug 1303788](https://bugzil.la/1303788)).
- Implementierte [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) ([Firefox-Bug 1243717](https://bugzil.la/1243717)).
- Der [Potenzierungsoperator (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1291212](https://bugzil.la/1291212)).
- Sie können jetzt [IANA-Zeitzonennamen](https://www.iana.org/time-zones) in der `timeZone`-Option von datumsbezogenen APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox-Bug 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernungen

- [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) löst jetzt einen {{jsxref("SyntaxError")}} aus, wenn Rest-Destrukturierung mit nachgestelltem Komma verwendet wird ([Firefox-Bug 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__`-Eigenschaften sind jetzt bei [Objekt-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) erlaubt ([Firefox-Bug 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die Intl-API-Parameter `locales` und `options` zu unterstützen ([Firefox-Bug 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}}-Konstruktoren akzeptieren jetzt [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue Typed-Arrays zu erstellen ([Firefox-Bug 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} erfordern jetzt, dass ihre `this`-Werte gültige Typed Array-Konstruktoren sind ([Firefox-Bug 1122396](https://bugzil.la/1122396)).
- Die nicht standardisierte {{jsxref("ArrayBuffer.slice()")}}-Methode (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) ist veraltet und zeigt nun eine Warnung an, wenn sie verwendet wird ([Firefox-Bug 1316913](https://bugzil.la/1316913)).
- [Unicode-Codepunkt-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können jetzt auch als Identifikatoren verwendet werden (z.B. `let \u{61} = 123`, siehe [Firefox-Bug 1314037](https://bugzil.la/1314037)).
- Um mit ES2015 konform zu sein, werfen `\u2e2f` und `ⸯ` jetzt Fehler, wenn sie als Identifikatoren verwendet werden. Details siehe [Firefox-Bug 917436](https://bugzil.la/917436) und [Firefox-Bug 1197230](https://bugzil.la/1197230).

### WebAssembly

- Unterstützung für [WebAssembly](/de/docs/WebAssembly) wurde zu Gecko hinzugefügt.

### DOM

- Die [Selection API](/de/docs/Web/API/Selection) ist vollständig verfügbar, einschließlich der neuen [`selectstart`](/de/docs/Web/API/Node/selectstart_event) und [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) Ereignisse ([Firefox-Bug 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft [`Event.composed`](/de/docs/Web/API/Event/composed) wird jetzt unterstützt; dieser boolesche Wert gibt an, ob das Ereignis durch den Shadow Root in das Standard-DOM blubbern kann oder nicht ([Firefox-Bug 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente, sowie die {{SVGElement("svg")}}- und {{MathMLElement("math")}}-Elemente, können in den Vollbildmodus geschaltet werden, indem [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufgerufen wird ([Firefox-Bug 1305928](https://bugzil.la/1305928)).
- [Touch-Events](/de/docs/Web/API/Touch_events) sind auf Windows-Desktop-Plattformen wieder aktiviert — siehe [Firefox-Bug 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, da sie eine Reihe wichtiger Websites beeinträchtigten; siehe [Firefox-Bug 888304](https://bugzil.la/888304).)
- Die [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event) Ereignisse sind jetzt implementiert ([Firefox-Bug 687787](https://bugzil.la/687787)).
- Die [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext)-Eigenschaft wurde implementiert (siehe [Firefox-Bug 1269052](https://bugzil.la/1269052)).
- Das Installationsereignis des [Web App Manifests](/de/docs/Web/Progressive_web_apps/Manifest) wurde zu [`appinstalled`](/de/docs/Web/API/Window/appinstalled_event) umbenannt, um Verwechslungen mit dem Installationsereignis des Service Workers zu vermeiden (siehe [`oninstall`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)). Siehe [Firefox-Bug 1309099](https://bugzil.la/1309099) für weitere Details zu diesem Update.
- Die [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types)-Eigenschaft der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt ein eingefrorenes Array von Strings anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurück (siehe [Firefox-Bug 1298243](https://bugzil.la/1298243)).
- Die `loadstart`- und `loadend`-Ereignisse werden jetzt auf {{htmlelement("img")}}-Elementen ausgelöst (siehe [Firefox-Bug 1264769](https://bugzil.la/1264769)).
- Die [`Notification.requireInteraction`](/de/docs/Web/API/Notification/requireInteraction) des [Notifications API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox-Bug 862395](https://bugzil.la/862395).)
- Die [`Window.open()`](/de/docs/Web/API/Window/open)-Methode hat jetzt eine `noopener` [Fensterfunktion](/de/docs/Web/API/Window/open#noopener) zur Verfügung (siehe [Firefox-Bug 1267339](https://bugzil.la/1267339)), was die Funktionalität des `rel="noopener"` [Link-Typs](/de/docs/Web/HTML/Reference/Attributes/rel) widerspiegelt.
- Die [`CustomElementRegistry.get()`](/de/docs/Web/API/CustomElementRegistry/get)-Methode der [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox-Bug 1275838](https://bugzil.la/1275838)).
- Die [Pointer Event](/de/docs/Web/API/Pointer_events) [`width`](/de/docs/Web/API/PointerEvent/width) und [`height`](/de/docs/Web/API/PointerEvent/height)-Eigenschaften haben jetzt standardmäßig einen Wert von 1 (siehe [Firefox-Bug 1304315](https://bugzil.la/1304315)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde aktualisiert, um Änderungen gemäß der [aktuellsten Spezifikation](https://wicg.github.io/entries-api/) zu enthalten (siehe [Firefox-Bug 1284987](https://bugzil.la/1284987) für die genauen Details).
- Die [`cancelBubble`](/de/docs/Web/API/Event/cancelBubble)-Eigenschaft, die auf [`UIEvent`](/de/docs/Web/API/UIEvent) definiert war, ist jetzt auf dem [`Event`](/de/docs/Web/API/Event)-Interface definiert. Weitere Details siehe [Firefox-Bug 1298970](https://bugzil.la/1298970).

#### Änderungen und Entfernungen

- Die Firefox OS APIs, die sich mit der Verwaltung von Telefongesprächen befassen (Kontakte, MobileConnection, Icc, usw.), wurden entfernt ([Firefox-Bug 1311206](https://bugzil.la/1311206)).
- Die Firefox OS `Identity`-Schnittstelle wurde entfernt ([Firefox-Bug 1309030](https://bugzil.la/1309030)).
- Die Firefox OS Voicemail API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox-Bug 1309723](https://bugzil.la/1309723)).
- Die Firefox OS Cell Broadcast API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox-Bug 1306772](https://bugzil.la/1306772)).
- Die Firefox OS TV-Übertragung APIs wurden entfernt ([Firefox-Bug 1306778](https://bugzil.la/1306778)).
- Die Firefox OS FM-Radio API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox-Bug 1306779](https://bugzil.la/1306779)).

### Service Worker und Fetch

- Die `Headers.getAll()`-Methode wurde entfernt, und [`Headers.get()`](/de/docs/Web/API/Headers/get) ruft jetzt alle Werte der angegebenen Kopfzeile ab, nicht nur den ersten (siehe [Firefox-Bug 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Fetch API-Spezifikationsupdates.

### Web Audio API

- Das Interface [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) wurde hinzugefügt; es repräsentiert eine Audioquelle, die immer einen Strom von Samples ausgibt, die alle den gleichen Wert haben. Siehe [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) für ein Beispiel, das zeigt, wie dies verwendet werden kann, um einige komplexe Audioabläufe zu vereinfachen.

### WebRTC

- Wenn eine ICE-Verbindung vorübergehend unterbrochen ist, wird die Eigenschaft [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) jetzt auf `"disconnected"` gesetzt; dies weist auf einen vorübergehenden Ausfall hin, der sich möglicherweise in Kürze von selbst löst, und die Verbindung kehrt danach in den Zustand `"connected"` zurück ([Firefox-Bug 852665](https://bugzil.la/852665)).
- Das `MediaDevices` [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)-Ereignis und sein entsprechender Handler, der nur auf Mac in Firefox 51 implementiert, aber standardmäßig deaktiviert war, wurden unter Windows und Linux implementiert und sind jetzt standardmäßig auf allen Plattformen aktiviert.
- Die [`MediaStream.active`](/de/docs/Web/API/MediaStream/active)-Eigenschaft wird jetzt unterstützt. Diese schreibgeschützte boolesche Eigenschaft gibt an, ob mindestens ein Track im Stream aktuell abgespielt wird.
- Vor Firefox 52 konnte die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) nur lokale Tracks (das heißt Tracks, die über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden) stoppen. Jetzt können eine Vielzahl von Tracks gestoppt werden, einschließlich derjenigen auf einem [`MediaStream`](/de/docs/Web/API/MediaStream), die mit einer {{Glossary("WebRTC", "WebRTC")}}-Verbindung, einem [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Stream oder einem [`CanvasCaptureMediaStream`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) verbunden sind.
- Bisher führte das oftmalige Ändern des [`TextTrack`](/de/docs/Web/API/TextTrack)-[`mode`](/de/docs/Web/API/TextTrack/mode) während eines einzelnen Durchlaufs durch die Firefox-Ereignisschleife dazu, dass mehrere [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse an die durch die übergeordnete Media-Element-Eigenschaft [`textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) angegebene [`TextTrackList`](/de/docs/Web/API/TextTrackList) geliefert wurden. Nun werden diese Änderungen in einem Ereignis zusammengefasst ([Firefox-Bug 882674](https://bugzil.la/882674)).

### Audio/Video/Medien

- Die [`MediaError`](/de/docs/Web/API/MediaError)-Objekte, die in [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error) angegeben werden, wenn ein Fehler beim Umgang mit einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element auftritt, enthalten jetzt eine [`message`](/de/docs/Web/API/MediaError/message)-Eigenschaft, die eine spezifische Beschreibung des aufgetretenen Fehlers liefert. Diese Zeichenkette bietet Einzelheiten zu diesem genauen Fehlerereignis und gibt Einblicke, warum es nicht funktioniert hat ([Firefox-Bug 1299072](https://bugzil.la/1299072)). Dieses Feld wurde in Firefox Nightly-Builds seit Firefox 51 aufgenommen, ist aber jetzt in allen Builds, einschließlich Release, verfügbar.

### Andere APIs

- Die Methode [`FileSystemFileEntry.createWriter()`](/de/docs/Web/API/FileSystemFileEntry/createWriter), die in Firefox 50 hinzugefügt wurde (aber immer einen Fehler zurückgab), wurde entfernt ([Firefox-Bug 1315185](https://bugzil.la/1315185).
- Die proprietären Firefox OS `Apps Installations-/Verwaltungs-APIs` wurden von der Plattform entfernt (siehe [Firefox-Bug 1261019](https://bugzil.la/1261019)).
- Die proprietäre Firefox OS `Web-Telefonie-API` wurde von der Plattform entfernt (siehe [Firefox-Bug 1309719](https://bugzil.la/1309719)).
- Die proprietäre Firefox OS `Web-Bluetooth-API` wurde von der Plattform entfernt (siehe [Firefox-Bug 1310020](https://bugzil.la/1310020)).
- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) ist jetzt nur noch für Chrome/Berechtigte Codes verfügbar (siehe [Firefox-Bug 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde in [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) umbenannt (siehe [Firefox-Bug 1304767](https://bugzil.la/1304767)).
- Die `mozDash`- und `mozDashOffset`-Mitglieder wurden aus dem [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) entfernt (siehe [Firefox-Bug 931389](https://bugzil.la/931389)).

### HTTP

- Der {{HTTPHeader("Referrer-Policy")}}-Header unterstützt jetzt die Direktiven `same-origin`, `strict-origin` und `strict-origin-when-cross-origin` ([Firefox-Bug 1276836](https://bugzil.la/1276836)).
- Der [`'strict-dynamic'`-Quellenausdruck](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#strict-dynamic) wird jetzt für {{HTTPHeader("Content-Security-Policy")}}-Direktiven, wie {{CSP("script-src")}}, unterstützt ([Firefox-Bug 1299483](https://bugzil.la/1299483)).
- Unsichere Seiten (`http:`) können keine [Cookies setzen](/de/docs/Web/HTTP/Guides/Cookies) mehr mit der "secure"-Direktive gemäß der [Strict Secure Cookies Spezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox-Bug 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2-Headerkompressionsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox-Bug 1296280](https://bugzil.la/1296280)).
- Der `Large-Allocation`-Header wurde hinzugefügt ([Firefox-Bug 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente werden jetzt mithilfe des [`XMLDocument`](/de/docs/Web/API/XMLDocument)-Interfaces anstelle von SVGDocument dargestellt. Dies ist eine Änderung, die in der SVG-2-Spezifikation vorgenommen wurde.

### Sicherheit

- Wenn Anmeldeseiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password)-Feld enthalten) erstellt werden, sodass sie unsicher übermittelt würden, zeigt Firefox eine kontextbezogene Warnmeldung unterhalb des Passwortfelds an, um die Benutzer zu warnen ([Firefox-Bug 1319119](https://bugzil.la/1319119)). Auch die Auto-Ausfüllfunktion ist bei unsicheren Anmeldeformularen deaktiviert ([Firefox-Bug 1217152](https://bugzil.la/1217152)). Siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords) für weitere Einzelheiten.
- Unterstützung für SHA-1-SSL-Zertifikate wurde entfernt; das Navigieren zu einer sicheren Seite, die ein SHA-1-Zertifikat verwendet, führt nun zu einem `Nicht vertrauenswürdige Verbindung`-Fehler ([Firefox-Bug 1330043](https://bugzil.la/1330043)).

## Plugins

Alle NPAPI-Plugin-Unterstützung außer Flash wurde eingestellt. Auch bei Flash wird in Zukunft die Nutzung verringert.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox`-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup)-Ereignisse
- [asynchrone Ereignis-Listener in webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged)-Ereignisse
- `_execute_browser_action` und `_execute_page_action` im [Befehle Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im Content-Skripte Manifest-Schlüssel

### Schnittstellen

- Die Methode `nsIDroppedLinkHandler.dropLinks` und die Schnittstelle `nsIDroppedLinkItem` wurden hinzugefügt, um das Ablegen mehrerer Elemente zu handhaben ([Firefox-Bug 92737](https://bugzil.la/92737)).

### XUL

- Überladung der Methode `tabbrowser.loadTabs(uris, params)` wurde hinzugefügt ([Firefox-Bug 92737](https://bugzil.la/92737)).
- Die Signatur der Funktion `browser.droppedLinkHandler` wurde geändert ([Firefox-Bug 92737](https://bugzil.la/92737)).

## Ältere Versionen

{{Firefox_for_developers}}
