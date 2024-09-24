---
title: Firefox 52 für Entwickler
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 52 wurde am 7. März 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- [Vollständig überarbeiteter Modus für responsives Design, einschließlich der Auswahl von UA und Netzwerk-Drosselung.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Der Animationsinspektor zeigt jetzt Timing-Funktionen an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [Der Seiteninspektor enthält jetzt einen CSS-Grid-Inspektor.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging zeigt jetzt den Status des Service Workers an.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [Der Seiteninspektor bietet eine einfache Möglichkeit, das ausgewählte Element hervorzuheben.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [Der Seiteninspektor zeigt Textknoten, die nur aus Leerzeichen bestehen, an.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Alle Devtools-Bugs, die zwischen Firefox 51 und Firefox 52 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- Der `rel="noopener"` [Link-Typ](/de/docs/Web/HTML/Attributes/rel) wurde implementiert (siehe [Firefox Bug 1222516](https://bugzil.la/1222516)).

### CSS

#### Neue Funktionen

- Hinzugefügt: {{cssxref(":focus-within")}} Pseudoklasse ([Firefox Bug 1176997](https://bugzil.la/1176997)).
- Unterstützung für `display:flex/grid` und "columnset layout" innerhalb von {{HTMLElement("button")}}-Elementen hinzugefügt ([Firefox Bug 984869](https://bugzil.la/984869)).
- Implementierte Interpolation zwischen numerischen Farben und [currentcolor](/de/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox Bug 1299741](https://bugzil.la/1299741)).
- Flexbox-Layout für `{{cssxref("justify-content")}}: space-evenly` und `{{cssxref("align-content")}}: space-evenly` implementiert ([Firefox Bug 1235922](https://bugzil.la/1235922)).
- Unterstützung für Subpixel-Antialiasing in CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} hinzugefügt ([Firefox Bug 1305259](https://bugzil.la/1305259)).
- Implementierte CSS Text 3 Segment zu Bruchtransformationregeln ([Firefox Bug 1081858](https://bugzil.la/1081858)).
- Basisform-Zuschneiden (wie über die {{cssxref("clip-path")}} Eigenschaft angewendet) kann nun auf SVG-Inhalte angewendet werden ([Firefox Bug 1246741](https://bugzil.la/1246741)).
- Implementierte Flexbox-Layout für {{cssxref("align-self")}}|{{cssxref("justify-self")}}: \[ first | last ]? baseline ([Firefox Bug 1221524](https://bugzil.la/1221524)).
- Die {{cssxref("touch-action")}} Eigenschaft ist jetzt standardmäßig auf allen Plattformen aktiviert. (Für die vollständige Geschichte siehe [intent to ship mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) und [intent to ship mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}} Handling & einzeiliges Sizing sollte vom {{cssxref("flex-wrap")}} abhängen, nicht von der Anzahl der Linien ([Firefox Bug 1090031](https://bugzil.la/1090031)).
- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) können jetzt verwendet werden, um nicht interpolierte Eigenschaften zu animieren (siehe [Firefox Bug 1064937](https://bugzil.la/1064937)).
- Geändert `baseline|last-baseline` zu `[ first | last ]? baseline` ([Firefox Bug 1313254](https://bugzil.la/1313254)).
- Der verwendete Wert für `left`/`right` ist `start` für die Block-Achse ([Firefox Bug 1221565](https://bugzil.la/1221565)).
- Das Strecken von flexiblen Tracks mit einer unbestimmten Länge des enthaltenden Blocks respektiert jetzt die min/max Größe([Firefox Bug 1309407](https://bugzil.la/1309407)).
- Die Anfangswerte von {{cssxref("mask-position")}} und {{cssxref("mask-repeat")}} wurden auf `0% 0%` und `repeat` geändert ([Firefox Bug 1308963](https://bugzil.la/1308963)).
- Es wurden einige Änderungen an CSS {{cssxref("&lt;color&gt;")}} Werten vorgenommen (siehe [Firefox Bug 1295456](https://bugzil.la/1295456)):

  - `rgba()` und `hsla()` wurden nun als Aliase von `rgb()` und `hsl()` definiert; beide akzeptieren die gleiche Parametersyntax.
  - `rgb(`) und `hsl()` akzeptieren nun einen optionalen Alphawert, z.B. `rgb(255, 0, 0, 0.5)`.
  - Farb-Funktionen akzeptieren now space-getrennte Parameter statt Kommas, z.B. `rgb(255 0 0 / 0.5)`.
  - Alphawerte können nun als Prozentsätze sowie als Zahlen angegeben werden, z.B. `rgb(255 0 0 / 50%)`.
  - Die Farbkomponente in `hsl()`-Farben kann nun als Winkel sowie als Zahl angegeben werden, z.B. `hsl(120deg, 60%, 70%)`.

- Die Implementierung von Firefox für kinderindizierte Pseudoklassen (wie z.B. {{cssxref(":nth-child")}}, {{cssxref(":first-child")}}, usw.) wurde aktualisiert, um der CSS Selector Level 4 Spezifikation zu entsprechen: Diese Pseudoklassen passen nun auf die entsprechenden Nachbarelemente statt der Kinder ihres Elternelements. Dies ermöglicht die Verwendung dieser Pseudoklassen, wenn es keinen Elternelement gibt oder das Elternelement kein {{domxref("Element")}} ist ([Firefox Bug 1300374](https://bugzil.la/1300374).

#### CSS Grids

- [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) sind implementiert.

#### Änderungen und Entfernungen

- Unpräfixierte Mehrspalten-Eigenschaften (und fügte vorerst wieder `-moz`-Präfixe als Aliase hinzu) ([Firefox Bug 1300895](https://bugzil.la/1300895)).
- Aufhörung der Umhüllung abspos Kinder des Flexcontainers in anonymen Flexelementen ([Firefox Bug 1269045](https://bugzil.la/1269045)).
- Implementierte Basislinien von Grid-Containern ([Firefox Bug 1151204](https://bugzil.la/1151204)).
- Entfernung des `<flex>` Minimierens aus dem Stil-System ([Firefox Bug 1305244](https://bugzil.la/1305244)).
- Entfernte Präferenz `layout.css.masking.enabled` ([Firefox Bug 1308239](https://bugzil.la/1308239)).
- Die proprietären Medientypen `-moz-images-in-menus` und `-moz-images-in-buttons` wurden entfernt (siehe [Firefox Bug 1302157](https://bugzil.la/1302157)).
- Entfernte `-moz-use-text-color` Wert von Farbeigenschaften; verwenden Sie [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) stattdessen ([Firefox Bug 1306214](https://bugzil.la/1306214)).
- \[css-grid] 'max-width' auf Grid-Item gesetzt verursacht Textüberlauf ([Firefox Bug 1330380](https://bugzil.la/1330380)).

### JavaScript

#### Neue Funktionen

- Unterstützung für die async Funktionen wurde hinzugefügt. Dies umfasst die Deklaration {{jsxref("Statements/async_function", "async function")}}, den Ausdruck {{jsxref("Operators/async_function", "async function")}} und das Schlüsselwort {{jsxref("Operators/await", "await")}} ([Firefox Bug 1185106](https://bugzil.la/1185106)).
- Implementierte ES2017 [nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) in Funktionen ([Firefox Bug 1303788](https://bugzil.la/1303788)).
- Implementierte {{jsxref("Functions/rest_parameters", "Rest-Parameter Destrukturierung", "#Destructuring_rest_parameters", 1)}} ([Firefox Bug 1243717](https://bugzil.la/1243717)).
- Der {{jsxref("Operators", "Exponentiationsoperator (**)", "#Exponentiation_(**)", 1)}} ist jetzt standardmäßig aktiviert ([Firefox Bug 1291212](https://bugzil.la/1291212)).
- Sie können jetzt [IANA-Zeitzonennamen](https://www.iana.org/time-zones) in der `timeZone`-Option von datumsbezogenen APIs wie {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} oder {{jsxref("Date.toLocaleString()")}} verwenden ([Firefox Bug 837961](https://bugzil.la/837961)).

#### Änderungen und Entfernungen

- [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring) verursacht nun einen {{jsxref("SyntaxError")}}, wenn bei Verwendung der Destrukturierung von rest mit nachgestelltem Komma ([Firefox Bug 1041341](https://bugzil.la/1041341)).
- Doppelte `__proto__` Eigenschaften sind jetzt in der [Objekt-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) erlaubt ([Firefox Bug 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} wurde neu implementiert, um die Intl API Parameter "`locales`" und "`options`" zu unterstützen ([Firefox Bug 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}} Konstrukteure akzeptieren jetzt [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), um neue Typed Arrays zu erstellen ([Firefox Bug 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} erfordern jetzt, dass ihre `this`-Werte gültige Typed Array Konstruktoren sind ([Firefox Bug 1122396](https://bugzil.la/1122396)).
- Die nicht-standardmäßige Methode {{jsxref("ArrayBuffer.slice()")}} (nicht {{jsxref("ArrayBuffer.prototype.slice()")}}) ist veraltet und zeigt jetzt eine Warnung, wenn sie verwendet wird ([Firefox Bug 1316913](https://bugzil.la/1316913)).
- [Unicode Codepunkt Fluchten](/de/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) können nun auch als Bezeichner verwendet werden (z.B. "`let \u{61} = 123`", siehe [Firefox Bug 1314037](https://bugzil.la/1314037)).
- Um ES2015 zu entsprechen, führen `\u2e2f` und `ⸯ` jetzt beim Verwenden als Bezeichner zu einer Fehlermeldung, weitere Details siehe [Firefox Bug 917436](https://bugzil.la/917436) und [Firefox Bug 1197230](https://bugzil.la/1197230).

### WebAssembly

- Unterstützung für [WebAssembly](/de/docs/WebAssembly) wurde zu Gecko hinzugefügt.

### DOM

- Die [Selection API](/de/docs/Web/API/Selection) wurde vollständig ausgeliefert, inklusive der neuen {{domxref("Node/selectstart_event", "selectstart")}} und {{domxref("Document/selectionchange_event", "selectionchange")}} Ereignisse ([Firefox Bug 1309612](https://bugzil.la/1309612)).
- Die Eigenschaft {{domxref("Event.composed")}} wird jetzt unterstützt; dieser Boolesche Wert zeigt an, ob das Ereignis durch den Shadow Root in das Standard-DOM blubbern kann ([Firefox Bug 1292063](https://bugzil.la/1292063)).
- Nur HTML-Elemente, sowie die {{SVGElement("svg")}} und {{MathMLElement("math")}} Elemente, können in den Vollbildmodus versetzt werden, indem {{domxref("Element.requestFullscreen()")}} aufgerufen wird ([Firefox Bug 1305928](https://bugzil.la/1305928)).
- [Touch Ereignisse](/de/docs/Web/API/Touch_events) wurden auf Windows Desktop-Plattformen wieder aktiviert — siehe [Firefox Bug 1244402](https://bugzil.la/1244402). (Sie wurden in Firefox 24 deaktiviert, weil sie eine Reihe von Hauptseiten kaputt machten; siehe [Firefox Bug 888304](https://bugzil.la/888304).)
- Die {{domxref("Element/focusin_event", "focusin")}} und {{domxref("Element/focusout_event", "focusout")}} Ereignisse sind jetzt implementiert ([Firefox Bug 687787](https://bugzil.la/687787)).
- Die {{domxref("WorkerGlobalScope.isSecureContext")}} Eigenschaft wurde implementiert (siehe [Firefox Bug 1269052](https://bugzil.la/1269052)).
- Das [Web App Manifest](/de/docs/Web/Manifest) Installationsereignis wurde in {{domxref("Window.appinstalled_event", "appinstalled")}} umbenannt, um Verwechslungen mit dem Installationsereignis des Service Workers zu vermeiden (siehe {{domxref("ServiceWorkerGlobalScope.install_event", "oninstall")}}). Details zu diesem Update finden Sie unter [Firefox Bug 1309099](https://bugzil.la/1309099).
- Die {{domxref("DataTransfer.types")}} Eigenschaft der [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) gibt jetzt ein eingefrorenes Array von Zeichenfolgen statt einer {{domxref("DOMStringList")}} zurück (siehe [Firefox Bug 1298243](https://bugzil.la/1298243)).
- Die `loadstart` und `loadend` Ereignisse werden jetzt auf {{htmlelement("img")}}-Elementen ausgelöst (siehe [Firefox Bug 1264769](https://bugzil.la/1264769)).
- Die {{domxref("Notification.requireInteraction")}} der [Notifications API](/de/docs/Web/API/Notifications_API) wurde implementiert (siehe [Firefox Bug 862395](https://bugzil.la/862395).)
- Die Methode {{domxref("Window.open()")}} hat jetzt ein `noopener` [Fensterfeature](/de/docs/Web/API/Window/open#window_functionality_features) verfügbar (siehe [Firefox Bug 1267339](https://bugzil.la/1267339)), das die Funktionalität des `rel="noopener"` [Link-Typs](/de/docs/Web/HTML/Attributes/rel) widerspiegelt.
- Die Methode {{domxref("CustomElementRegistry.get()")}} der [Web Components API](/de/docs/Web/API/Web_components) wurde implementiert (siehe [Firefox Bug 1275838](https://bugzil.la/1275838)).
- [Pointer Ereignis](/de/docs/Web/API/Pointer_events) {{domxref("PointerEvent.width","width")}} und {{domxref("PointerEvent.height","height")}} Eigenschaften haben jetzt standardmäßig den Wert 1 (siehe [Firefox Bug 1304315](https://bugzil.la/1304315)).
- Die [File and Directory Entries API](/de/docs/Web/API/File_and_Directory_Entries_API) wurde aktualisiert und beinhaltet Änderungen aus der [neuesten Spezifikation](https://wicg.github.io/entries-api/) (siehe [Firefox Bug 1284987](https://bugzil.la/1284987) für die genauen Details).
- Die {{domxref("Event.cancelBubble", "cancelBubble")}} Eigenschaft, die auf {{domxref("UIEvent")}} definiert war, ist jetzt auf der {{domxref("Event")}} Schnittstelle definiert. Siehe [Firefox Bug 1298970](https://bugzil.la/1298970) für weitere Details.

#### Änderungen und Entfernungen

- Die Firefox OS APIs, die sich mit dem Verwalten von Telefonanrufen befassen (Kontakte, MobileConnection, Icc, usw.), wurden entfernt ([Firefox Bug 1311206](https://bugzil.la/1311206)).
- Das Firefox OS `Identity` Interface wurde entfernt ([Firefox Bug 1309030](https://bugzil.la/1309030)).
- Die Firefox OS Voicemail API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) wurde entfernt ([Firefox Bug 1309723](https://bugzil.la/1309723)).
- Die Firefox OS Cell Broadcast API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) wurde entfernt ([Firefox Bug 1306772](https://bugzil.la/1306772)).
- Die Firefox OS TV Broadcast-bezogenen APIs wurden entfernt ([Firefox Bug 1306778](https://bugzil.la/1306778)).
- Die Firefox OS FM Radio API (`FMRadio`, `Navigator.mozFMRadio`) wurde entfernt ([Firefox Bug 1306779](https://bugzil.la/1306779)).

### Service Workers und Fetch

- Die Methode `Headers.getAll()` wurde entfernt, und {{domxref("Headers.get()")}} ruft jetzt alle Werte des angegebenen Headers ab, nicht nur den ersten (siehe [Firefox Bug 1278275](https://bugzil.la/1278275)). Dies entspricht den neuesten Updates der Fetch-API-Spezifikation.

### Web Audio API

- Die Schnittstelle {{domxref("ConstantSourceNode")}} wurde hinzugefügt; sie stellt eine Audioquelle dar, die immer einen Strom von Samples ausgibt, die alle den gleichen Wert haben. Siehe [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) für ein Beispiel, das zeigt, wie dies verwendet werden kann, um einige komplexe Audioflüsse zu vereinfachen.

### WebRTC

- Wenn eine ICE-Verbindung vorübergehend unterbrochen ist, wird die Eigenschaft {{domxref("RTCPeerConnection.iceConnectionState")}} jetzt auf `"disconnected"` gesetzt; dies zeigt einen vorübergehenden Fehler an, der sich möglicherweise bald selbst behebt, wobei die Verbindung danach in den `"connected"` Zustand zurückkehrt ([Firefox Bug 852665](https://bugzil.la/852665)).
- Das `MediaDevices` {{domxref("MediaDevices.devicechange_event", "devicechange")}}-Ereignis und sein entsprechender Handler, die in Firefox 51 implementiert, aber standardmäßig nur auf dem Mac deaktiviert waren, wurden auf Windows und Linux implementiert und sind jetzt standardmäßig auf allen Plattformen aktiviert.
- Die {{domxref("MediaStream.active")}} Eigenschaft wird jetzt unterstützt. Diese schreibgeschützte Boolesche Eigenschaft zeigt an, ob derzeit mindestens ein Track im Stream abgespielt wird.
- Vor Firefox 52 konnte die Methode {{domxref("MediaStreamTrack.stop()")}} nur lokale Tracks (d.h. Tracks, die über {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} erhalten wurden) stoppen. Jetzt können verschiedene Arten von Tracks gestoppt werden, einschließlich derjenigen auf einem {{domxref("MediaStream")}}, das mit einer [WebRTC](/de/docs/Glossary/WebRTC) Verbindung, einem [Web Audio API](/de/docs/Web/API/Web_Audio_API) Strom oder einem {{domxref("CanvasCaptureMediaStreamTrack", "CanvasCaptureMediaStream")}} verbunden ist.
- Früher führte das wiederholte Ändern des {{domxref("TextTrack")}}'s {{domxref("TextTrack.mode", "mode")}} während eines einzigen Durchlaufs durch die Firefox-Ereignisschleife dazu, dass mehrere {{domxref("HTMLElement/change_event", "change")}}-Ereignisse an die {{domxref("TextTrackList")}} geliefert wurden, die von der {{domxref("HTMLMediaElement.textTracks", "textTracks")}} Eigenschaft des übergeordneten Medienelements angegeben wurde. Jetzt werden diese Änderungen in einem einzigen Ereignis konsolidiert ([Firefox Bug 882674](https://bugzil.la/882674)).

### Audio/Video/Media

- Die {{domxref("MediaError")}} Objekte, die in {{domxref("HTMLMediaElement.error")}} angegeben sind, wenn ein Fehler beim Umgang mit einem {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element auftritt, enthalten jetzt eine {{domxref("MediaError.message", "message")}} Eigenschaft, die eine spezifische Beschreibung des aufgetretenen Fehlers bereitstellt. Diese Zeichenfolge bietet Details zu diesem genauen Fehlerereignis und gibt Einblicke, warum etwas schief gelaufen ist ([Firefox Bug 1299072](https://bugzil.la/1299072)). Dieses Feld wurde in Firefox Nightly-Builds seit Firefox 51 aufgenommen, ist jetzt aber in allen Builds, bis hin zum Release, verfügbar.

### Andere APIs

- Die Methode {{domxref("FileSystemFileEntry.createWriter()")}}, die in Firefox 50 hinzugefügt (aber immer einen Fehler zurückgegeben) wurde, wurde entfernt ([Firefox Bug 1315185](https://bugzil.la/1315185).
- Die proprietären Firefox OS `Apps installation/management APIs` wurden aus der Plattform entfernt (siehe [Firefox Bug 1261019](https://bugzil.la/1261019)).
- Die proprietäre Firefox OS `Web Telephony API` wurde aus der Plattform entfernt (siehe [Firefox Bug 1309719](https://bugzil.la/1309719)).
- Die proprietäre Firefox OS `Web Bluetooth API` wurde aus der Plattform entfernt (siehe [Firefox Bug 1310020](https://bugzil.la/1310020)).
- Die [Battery Status API](/de/docs/Web/API/Battery_Status_API) ist jetzt nur für Chrome/privilegierten Code verfügbar (siehe [Firefox Bug 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` wurde in {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} umbenannt (siehe [Firefox Bug 1304767](https://bugzil.la/1304767)).
- Die Mitglieder `mozDash` und `mozDashOffset` wurden aus {{domxref("CanvasRenderingContext2D")}} entfernt (siehe [Firefox Bug 931389](https://bugzil.la/931389)).

### HTTP

- Der {{HTTPHeader("Referrer-Policy")}} Header unterstützt jetzt die Direktiven `same-origin`, `strict-origin` und `strict-origin-when-cross-origin` ([Firefox Bug 1276836](https://bugzil.la/1276836)).
- Der [`'strict-dynamic'` Quellausdruck](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) wird jetzt für {{HTTPHeader("Content-Security-Policy")}} Direktiven unterstützt, wie z.B. {{CSP("script-src")}} ([Firefox Bug 1299483](https://bugzil.la/1299483)).
- Unsichere Seiten (`http:`) können keine [Cookies setzen](/de/docs/Web/HTTP/Cookies) mehr mit der "secure"-Direktive gemäß der [Strict Secure Cookies Spezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox Bug 976073](https://bugzil.la/976073)).
- Die maximale Tabellengröße des HTTP/2 Headerkompressionsformats [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) wurde von 4 KB auf 64 KB erhöht ([Firefox Bug 1296280](https://bugzil.la/1296280)).
- Der {{HTTPHeader("Large-Allocation")}} Header wurde hinzugefügt ([Firefox Bug 1304140](https://bugzil.la/1304140)).

### SVG

- SVG-Dokumente werden jetzt über die {{domxref("XMLDocument")}} Schnittstelle statt SVGDocument dargestellt. Dies ist eine Änderung, die in der SVG 2 Spezifikation vorgenommen wurde.

### Sicherheit

- Wenn Anmeldeseiten (d.h. solche, die ein [`<input type="password">`](/de/docs/Web/HTML/Element/input/password) Feld enthalten) so erstellt werden, dass sie unsicher übermittelt würden, zeigt Firefox eine Warnmeldung im Kontext unterhalb des Passwortfeldes an, um Benutzer zu warnen ([Firefox Bug 1319119](https://bugzil.la/1319119)). Die Autofill-Funktion ist auf unsicheren Anmeldeformularen ebenfalls deaktiviert ([Firefox Bug 1217152](https://bugzil.la/1217152)). Weitere Informationen finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).
- Unterstützung für SHA-1 SSL-Zertifikate wurde entfernt; beim Navigieren zu einer sicheren Seite, die ein SHA-1-Zertifikat verwendet, tritt jetzt ein `Untrusted Connection`-Fehler auf ([Firefox Bug 1330043](https://bugzil.la/1330043)).

## Plugins

Alle NPAPI-Plugin-Unterstützungen außer Flash wurden entfernt. Auch die Nutzung von Flash soll in Zukunft schrittweise eingestellt werden.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Neue APIs:

- [`sessions` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/de/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) und [`runtime.onStartup`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) Ereignisse
- [asynchrone Ereignislistener in webRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) Ereignisse
- `_execute_browser_action` und `_execute_page_action` im [commands Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) im content_scripts Manifest-Schlüssel

### Schnittstellen

- `nsIDroppedLinkHandler.dropLinks` Methode und `nsIDroppedLinkItem` Schnittstelle wurden hinzugefügt, um das Ablegen mehrerer Elemente zu bearbeiten ([Firefox Bug 92737](https://bugzil.la/92737)).

### XUL

- `tabbrowser.loadTabs(uris, params)` Methode Überladung wurde hinzugefügt ([Firefox Bug 92737](https://bugzil.la/92737)).
- `browser.droppedLinkHandler` Funktionssignatur wurde geändert ([Firefox Bug 92737](https://bugzil.la/92737)).

## Ältere Versionen

{{Firefox_for_developers}}
