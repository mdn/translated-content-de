---
title: Firefox 63 – Versionshinweise für Entwickler
short-title: Firefox 63
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Dieser Artikel informiert über die Änderungen in Firefox 63, die für Entwickler relevant sind. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der Tab „Fonts“ im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, mit dem Sie die Schrifteinstellungen Ihrer Seite einfach anzeigen und bearbeiten können. Weitere Informationen finden Sie unter [Schriftarten bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie im [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) den Mauszeiger über ein Objekt bewegen, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items). Seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox-Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt direkt unter der Konsolenausgabe angezeigt ([Firefox-Bug 1136299](https://bugzil.la/1136299)).
- Im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt ein neues Symbol an, wenn eine URL zu einem bekannten Tracker gehört. Siehe [Sicherheitssymbole](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`. Daher werden System-Add-ons auf der Seite `about:debugging` nicht aufgeführt. Sie können die Einstellung unter `about:config` ändern ([Firefox-Bug 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste des [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht. Außerdem kann der Viewport jetzt linksbündig ausgerichtet werden.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) eines Custom Elements ([Firefox-Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wird jetzt unterstützt ([Firefox-Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernte Funktionen

- Die Unterstützung für den Link-Typ `sidebar` (`rel="sidebar"`) wurde entfernt. Wenn ein Ankerelement dieses Attribut enthält, wird es ignoriert ([Firefox-Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Die Pseudoklasse {{CSSxRef(":defined")}} wird jetzt unterstützt ([Firefox-Bug 1331334](https://bugzil.la/1331334)).
- {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} werden jetzt im [Flexbox-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#the_gap_properties) unterstützt ([Firefox-Bug 1398483](https://bugzil.la/1398483)).
- Die Unterstützung für [Pixel-Density-@media-Abfragen mit WebKit-Präfix](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio) wurde wieder aktiviert ([Firefox-Bug 1444139](https://bugzil.la/1444139)).
- Die Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}} und {{CSSxRef("align-items")}} des [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) (Flexbox) sowie die Eigenschaft {{CSSxRef("justify-content")}} werden jetzt unterstützt ([Firefox-Bug 1472843](https://bugzil.la/1472843)).
- Die Funktion `path()` für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox-Bug 1429298](https://bugzil.la/1429298)).
- Syntaxverbesserungen aus der Spezifikation „Media Queries Level 4“ wurden implementiert, insbesondere [verschachtelte boolesche Ausdrücke](/de/docs/Web/CSS/Guides/Media_queries/Using#creating_complex_media_queries) und die [Bereichssyntax](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) ([Firefox-Bug 1422225](https://bugzil.la/1422225)).
- Die `offset-*`-Eigenschaften wurden in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} und {{CSSxRef("inset-inline-end")}} umbenannt ([Firefox-Bug 1464782](https://bugzil.la/1464782)).
- Das Medienmerkmal [prefers-reduced-motion](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) wird jetzt unterstützt ([Firefox-Bug 1365045](https://bugzil.la/1365045), [Firefox-Bug 1475462](https://bugzil.la/1475462)).
- Für die Eigenschaft {{CSSxRef("resize")}} wurden flussrelative Werte (`block`, `inline`) hinzugefügt ([Firefox-Bug 1464786](https://bugzil.la/1464786)).
- Die Werte `safe` und `unsafe` wurden für {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}} und {{CSSxRef("justify-content")}} im Flexbox-Layout implementiert ([Firefox-Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) sind jetzt animierbar, soweit dies jeweils sinnvoll ist ([Firefox-Bug 1309752](https://bugzil.la/1309752)).

#### Entfernte Funktionen

- `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end` wurden entfernt. Sie wurden, wie oben beschrieben, in `inset-*`-Eigenschaften umbenannt ([Firefox-Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Eigenschaft {{JSxRef("Symbol.prototype.description")}} wurde implementiert ([Firefox-Bug 1472170](https://bugzil.la/1472170)).
- Die Methode {{JSxRef("Object.fromEntries()")}} wurde hinzugefügt ([Firefox-Bug 1469019](https://bugzil.la/1469019)).
- Die Fehlermeldung beim Zugriff auf eine Eigenschaft eines undefinierten Objekts wurde deutlich verbessert. Wenn beispielsweise `x` undefiniert ist und Sie auf `x.y` zugreifen, gibt die Konsole statt „TypeError: x is undefined“ jetzt die aussagekräftigere Meldung [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) aus ([Firefox-Bug 1259822](https://bugzil.la/1259822)).

#### Entfernte Funktionen

- Die experimentelle Unterstützung für die IndexedDB-Serialisierung von WebAssembly-Modulen wurde entfernt ([Firefox-Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die APIs für Shadow DOM ([Firefox-Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox-Bug 1471948](https://bugzil.la/1471948)) sind jetzt standardmäßig aktiviert. Weitere Informationen finden Sie unter [Web Components](/de/docs/Web/API/Web_components).
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox-Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und ist in allen Veröffentlichungskanälen standardmäßig aktiviert ([Firefox-Bug 1461465](https://bugzil.la/1461465)). Wie Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText). Anders als in Chrome ist `readText()` jedoch nur in [Browser-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Das Interface [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) wird jetzt unterstützt. Damit können Ereignisse ausgelöst werden, wenn gegen die {{HTTPHeader("Content-Security-Policy")}} verstoßen wird ([Firefox-Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) sind jetzt standardmäßig aktiviert (siehe [Firefox-Bug 1476158](https://bugzil.la/1476158)):
  - Die Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished) von [`Animation`](/de/docs/Web/API/Animation), die die {{JSxRef("Promise")}}-Objekte `ready` und `finished` des `Animation`-Objekts angeben.
  - Die Eigenschaft [`effect`](/de/docs/Web/API/Animation/effect) des [`Animation`](/de/docs/Web/API/Animation)-Objekts.
  - Die Interfaces [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die Methode [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) wurde implementiert ([Firefox-Bug 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte Eigenschaft [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) wird jetzt aus Kompatibilitätsgründen unterstützt ([Firefox-Bug 1452569](https://bugzil.la/1452569)).
- Die Eigenschaft [`Window.event`](/de/docs/Web/API/Window/event) wurde implementiert, um die Webkompatibilität zu verbessern, nachdem sie standardisiert wurde ([Firefox-Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Webkompatibilitätsprobleme (z. B. [Firefox-Bug 1479964](https://bugzil.la/1479964)) wurde sie in den anderen Veröffentlichungskanälen als Nightly jedoch bald wieder deaktiviert und hinter der Einstellung `dom.window.event.enabled` verborgen ([Firefox-Bug 1493869](https://bugzil.la/1493869)).
- Damit Firefox mit Edge und Chrome übereinstimmt, gibt die Eigenschaft [`navigator.platform`](/de/docs/Web/API/Navigator/platform) jetzt auch unter 64-Bit-Windows `"Win32"` zurück ([Firefox-Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 waren bei neuen Fenstern, die über Links mit `rel="noopener"` oder durch Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit aktiviertem Fenstermerkmal [`noopener`](/de/docs/Web/API/Window/open) geöffnet wurden, standardmäßig alle Fenstermerkmale deaktiviert. Gewünschte Standardmerkmale mussten Sie ausdrücklich wieder aktivieren. Jetzt sind bei diesen Fenstern dieselben Merkmale aktiviert wie bei anderen Fenstern; unerwünschte Merkmale müssen Sie ausdrücklich deaktivieren ([Firefox-Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Verarbeitung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der Modifikatortaste `AltGr` zuordnet, wird als Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox-Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Der Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, auch innerhalb desselben Content-Prozesses ([Firefox-Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert und unterstützt für Daten jetzt neben dem bisher unterstützten älteren Format sctp-sdp-05 auch sctp-sdp-21.
- Der Knotentyp [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) der Web Audio API hat jetzt standardmäßig zwei statt eines Kanals, entsprechend der Spezifikation ([Firefox-Bug 1413283](https://bugzil.la/1413283)).
- Das Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) und damit auch alle darauf basierenden Knotentypen lösen jetzt die korrekte Ausnahme aus, wenn für die Startzeit eines Knotens ein negativer Wert angegeben wird: `RangeError` ([Firefox-Bug 1413284](https://bugzil.la/1413284)).
- Die zulässigen Minimal- und Maximalwerte für die Eigenschaft [`value`](/de/docs/Web/API/AudioParam/value) eines [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts wurden auf den kleinsten negativen beziehungsweise den größten positiven Gleitkommawert mit einfacher Genauigkeit geändert: -340,282,346,638,528,859,811,704,183,484,516,925,440 beziehungsweise +340,282,346,638,528,859,811,704,183,484,516,925,440 ([Firefox-Bug 1476695](https://bugzil.la/1476695)).
- Die Methode [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType), mit der Sie Codecs während eines aktiven Streams wechseln können, ist jetzt standardmäßig aktiviert. Sie ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox-Bug 1481166](https://bugzil.la/1481166)).
- Die Methode [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) akzeptiert jetzt wie vorgesehen ein Array von Gleitkommawerten, das angibt, welche Werte der Parameter im Zeitverlauf annehmen soll. Zuvor war ein {{jsxref("Float32Array")}} erforderlich ([Firefox-Bug 1421091](https://bugzil.la/1421091)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde außerdem aktualisiert und löst jetzt wie vorgesehen einen `TypeError` aus, wenn das Array `values` einen nicht endlichen Wert enthält ([Firefox-Bug 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` so aktualisiert, dass der Parameter nach Ablauf der angegebenen Dauer, wenn die Wertkurve vollständig durchlaufen wurde, auf den letzten Wert der Werteliste gesetzt wird ([Firefox-Bug 1308436](https://bugzil.la/1308436)).
- Das Dictionary `RTCRTPStreamStats` wurde in `RTCRtpStreamStats` umbenannt, um mit anderen WebRTC-Dictionaries und der Spezifikation übereinzustimmen ([Firefox-Bug 1480498](https://bugzil.la/1480498)).
- Die Eigenschaft `kind` des Dictionarys `RTCRtpStreamStats` wird jetzt unterstützt ([Firefox-Bug 1481851](https://bugzil.la/1481851)).
- Die Eigenschaft `isRemote` des Dictionarys `RTCRtpStreamStats` ist veraltet und wird in Firefox 65 entfernt. Beim Zugriff auf diese Eigenschaft wird jetzt eine Warnung in der Konsole ausgegeben. Einzelheiten finden Sie in [diesem Beitrag im Blog „Advancing WebRTC“](https://blog.mozilla.org/webrtc/getstats-isremote-65/) ([Firefox-Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wurde das neue Kontextattribut `powerPreference` hinzugefügt. Damit können WebGL-Anwendungen und -Applets unter macOS, für die die Leistung nicht entscheidend ist, auf Systemen mit mehreren GPUs die energiesparende statt der leistungsstarken GPU anfordern ([Firefox-Bug 1349799](https://bugzil.la/1349799)).

#### Entfernte Funktionen

- Die veralteten, nicht standardisierten und nur in Firefox verfügbaren Methoden `Window.back()` und `Window.forward()` wurden entfernt. Verwenden Sie stattdessen [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox-Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind in [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen nicht mehr verfügbar, da sie Speicherlecks verursachen können ([Firefox-Bug 1264182](https://bugzil.la/1264182)).
- Da sie in der Spezifikation ohnehin als veraltet gekennzeichnet war, wurde die eingeschränkte Unterstützung für Doppler-Effekte bei [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die Eigenschaften `dopplerFactor` und `speedOfSound` von [`AudioListener`](/de/docs/Web/API/AudioListener) sowie die Methode `setVelocity()` von `PannerNode` wurden entfernt ([Firefox-Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der Header {{HTTPHeader("Clear-Site-Data")}} ist implementiert und nicht mehr von einer Einstellung abhängig ([Firefox-Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Favicons von Websites unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), sofern für die Website eine solche konfiguriert ist ([Firefox-Bug 1297156](https://bugzil.la/1297156)).
- Der Ausdruck `'report-sample'` in der CSP-Direktive `script-src` wird jetzt beim Erstellen von Berichten über Verstöße berücksichtigt. Er legt fest, dass der Bericht einen kurzen Ausschnitt der Stelle enthalten soll, an der der Verstoß auftrat. Zuvor fügte Firefox diesen Ausschnitt immer hinzu ([Firefox-Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox-Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt in der Antwort auf `WebDriver:NewSession` jetzt die [Capability](/de/docs/Web/WebDriver/Reference/Capabilities) `setWindowRect` zurück. Ihr Wert ist `true`, wenn sich das Browserfenster verschieben und in der Größe ändern lässt. Das ist beispielsweise bei Firefox der Fall, nicht jedoch bei mobilen Anwendungen ([Firefox-Bug 1470659](https://bugzil.la/1470659)).
- Die Capability `unhandledPromptBehavior` wird jetzt unterstützt. Damit können Sie ein bestimmtes [Verhalten bei Dialogen](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) gemäß der WebDriver-Spezifikation festlegen ([Firefox-Bug 1264259](https://bugzil.la/1264259)).
- Die Verarbeitung von Benutzerdialogen wurde zu den Befehlen `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` hinzugefügt ([Firefox-Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `WebDriver:` wurden entfernt ([Firefox-Bug 1451725](https://bugzil.la/1451725)).
- Der Befehl `WebDriver:NewSession` gibt für `platformName` jetzt die in der WebDriver-Spezifikation empfohlenen Zeichenfolgen (`linux`, `mac`, `windows`) zurück ([Firefox-Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Wenn Firefox nicht die oberste Anwendung war, fehlten bei der Interaktion mit Elementen Fokusereignisse ([Firefox-Bug 1398111](https://bugzil.la/1398111)).
- Das Ausführen von `pointerDown` und `pointerUp` in einer nachfolgenden Aktionssequenz konnte einen Doppelklick auslösen, weil `WebDriver:ReleaseActions` die Doppelklickverfolgung nicht zurücksetzte ([Firefox-Bug 1422583](https://bugzil.la/1422583)).
- Die wiederholte Ausführung von `pause`-Aktionen konnte dazu führen, dass der Vorgang auf unbestimmte Zeit hängen blieb ([Firefox-Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem die Rückgabe einer Elementsammlung aus `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen Fehler wegen einer zyklischen Referenz verursachte ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Um eine Race Condition zu vermeiden, warten die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` jetzt, bis der Benutzerdialog geschlossen wurde ([Firefox-Bug 1479368](https://bugzil.la/1479368)).
- Vom Frame-Skript ausgegebene Log-Einträge wurden nicht mehr durch `MarionettePrefs.logLevel` begrenzt; stattdessen wurde alles protokolliert ([Firefox-Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` löste einen Fehler aus, wenn ein Screenshot eines Fensters mit mehr als 32767 Pixeln Breite oder Höhe aufgenommen wurde ([Firefox-Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardwert eines Benutzerdialogs nicht, wenn der zu sendende Text eine leere Zeichenfolge war ([Firefox-Bug 1486485](https://bugzil.la/1486485)).

### Sonstiges

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert: Die Methode bewirkt jetzt nichts, wenn das angegebene Array der zu beobachtenden Eintragstypen keine gültigen Eintragstypen enthält, leer ist oder fehlt. Zuvor löste Firefox fälschlicherweise einen `TypeError` aus ([Firefox-Bug 1403027](https://bugzil.la/1403027)).
- Bei [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Typ einer Such-URL, als Alias für `application/x-suggestions+json` ([Firefox-Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Themes

- Die Standardtextfarbe für Badges von {{WebExtAPIRef("browserAction")}} wird jetzt automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast zum Hintergrund zu maximieren ([Firefox-Bug 1474110](https://bugzil.la/1474110)).
- Die Eigenschaften `accentcolor` und `textcolor` des Manifest-Schlüssels [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) sind jetzt optional ([Firefox-Bug 1413144](https://bugzil.la/1413144)).
- Mit {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} können Sie die Textfarbe von Browser-Action-Badges abrufen und festlegen ([Firefox-Bug 1424620](https://bugzil.la/1424620)).
- Der Theme-Schlüssel `colors` in `manifest.json` unterstützt jetzt die Eigenschaft `ntp_text` zum Festlegen der Textfarbe eines neuen Tabs und die Eigenschaft `ntp_background` zum Festlegen seiner Hintergrundfarbe ([Firefox-Bug 1347204](https://bugzil.la/1347204)).
- Themes können jetzt die Farben von Seitenleisten festlegen, beispielsweise der Lesezeichen-Seitenleiste ([Firefox-Bug 1418602](https://bugzil.la/1418602)). Dazu gehören die folgenden Eigenschaften:
  - `sidebar`: Die Hintergrundfarbe von Seitenleisten.
  - `sidebar_text`: Die Textfarbe von Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Mit der Methode {{WebExtAPIRef("management.install()")}} können WebExtensions signierte Browser-Themes installieren und aktivieren ([Firefox-Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox-Bug 1472740](https://bugzil.la/1472740)). Damit können experimentelle Eigenschaften für den Schlüssel [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) der Firefox-Oberfläche definiert werden.

#### Suche

- Mit der neuen API {{WebExtAPIRef("search")}} können Sie die Liste der installierten Suchmaschinen abrufen und Suchanfragen mit ihnen durchführen ([Firefox-Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} akzeptiert jetzt den Parameter `options`, mit dem Sie verschiedene Optionen für die zurückgegebene Liste von Websites festlegen können ([Firefox-Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt die Mehrfachauswahl ([Firefox-Bug 1474440](https://bugzil.la/1474440)).
- Das Objekt `highlightInfo` von {{WebExtAPIRef("tabs.highlight")}} enthält jetzt das optionale Feld `populate`, dessen Standardwert `true` ist. Wenn Sie es auf `false` setzen, wird das zurückgegebene `windows.Window`-Objekt aus Leistungsgründen nicht mit einer Liste von Tabs befüllt ([Firefox-Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs, indem Sie `highlighted: true` im Parameter `updateProperties` angeben ([Firefox-Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs, ohne den Tab mit Fokus zu ändern ([Firefox-Bug 1486050](https://bugzil.la/1486050)). Geben Sie dazu sowohl `highlighted: true` als auch `active: false` im Parameter `updateProperties` an.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox-Bug 1465170](https://bugzil.la/1465170)).
- Die Eigenschaft von {{WebExtAPIRef("tabs.Tab")}} gibt jetzt korrekt an, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind. Außerdem unterstützt {{WebExtAPIRef("tabs.highlight")}} jetzt das Ändern des Hervorhebungsstatus mehrerer Tabs ([Firefox-Bug 1464862](https://bugzil.la/1464862)).
- Die Eigenschaft `isarticle` im `filter`-Objekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name bleibt erhalten, ist aber veraltet. Diese Änderung wurde auch in Firefox 62 übernommen ([Firefox-Bug 1461695](https://bugzil.la/1461695)).
- Mit dem Ereignis {{WebExtAPIRef('tabs.onUpdated')}} können Sie anhand der Eigenschaft `attention` des Objekts `changeInfo` verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers auf sich zieht ([Firefox-Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- Die Methode {{WebExtApiRef("menus.getTargetElement()")}} wurde zur API {{WebExtApiRef("menus")}} hinzugefügt. Sie gibt das Element zurück, auf das der Parameter `targetElementId` verweist und das angeklickt wurde. Wenn `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox-Bug 1325814](https://bugzil.la/1325814)).
- Mit {{WebExtAPIRef("menus.create()")}} können Sie jetzt unsichtbare Menüeinträge erstellen. Mit {{WebExtAPIRef("menus.update()")}} können Sie die Sichtbarkeit von Menüeinträgen umschalten ([Firefox-Bug 1482529](https://bugzil.la/1482529)).
- Mit der API {{WebExtAPIRef("menus")}} erstellte Einträge unterstützen jetzt Zugriffstasten ([Firefox-Bug 1320462](https://bugzil.la/1320462)).
- Der Parameter `targetUrlPatterns` von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch wenn es in einem Match-Pattern normalerweise nicht zulässig ist ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
- Wenn Sie auf einen Eintrag im Kontextmenü eines Tabs klicken, wird für diesen Tab jetzt die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) gewährt, auch wenn es nicht der derzeit aktive Tab ist ([Firefox-Bug 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox-Bug 1408129](https://bugzil.la/1408129)).
- Mit der API {{WebExtAPIRef("webRequest")}} können Sie jetzt nach spekulativen Verbindungen filtern ([Firefox-Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} erhält zwei neue Eigenschaften: `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde auch in Firefox 62 übernommen ([Firefox-Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Status des Cookies angibt. Die Enumeration {{WebExtAPIRef("cookies.SameSiteStatus")}} definiert die Werte für den SameSite-Status ([Firefox-Bug 1351663](https://bugzil.la/1351663)).
- Match-Patterns für URLs erfassen jetzt ausdrücklich das URL-Schema „data“ ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
