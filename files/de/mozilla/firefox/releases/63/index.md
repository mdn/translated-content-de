---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 736d0c4af2efd02a33edf96c185a242aaed4f344
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die Entwickler betreffen. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der Fonts-Tab im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Anzeigen und Bearbeiten der Einstellungen der Schriftarten auf Ihrer Seite erleichtert. Weitere Einzelheiten finden Sie unter [Edit fonts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Accessibility inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) schweben, [wird das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox Fehler 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt unmittelbar nach der Konsolenausgabe angezeigt ([Firefox Fehler 1136299](https://bugzil.la/1136299)).
- Ein neues Icon wurde dem Inhalt im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wann eine URL zu einem bekannten Tracker gehört – siehe [Sicherheits-Icons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Fehler 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der `about:debugging`-Seite gelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Fehler 1425347](https://bugzil.la/1425347)).
- Die Werkzeugleiste des [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, den Viewport links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element ([Firefox Fehler 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox Fehler 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernt

- Unterstützung für den `sidebar`-Verknüpfungstyp (`rel="sidebar"`) wurde entfernt. Wenn ein Ankertag dieses Attribut enthält, wird es ignoriert ([Firefox Fehler 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}}-Pseudoklasse wurde hinzugefügt ([Firefox Fehler 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox Fehler 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-prefixed pixel-density @media-Abfragen](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) wurde wieder aktiviert ([Firefox Fehler 1444139](https://bugzil.la/1444139)).
- Unterstützung für die Eigenschaften des [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Layouts {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie für die Eigenschaft {{CSSxRef("justify-content")}} wurde hinzugefügt ([Firefox Fehler 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox Fehler 1429298](https://bugzil.la/1429298)).
- Implementiert [Syntax-Verbesserungen aus der Media Queries Level 4 Spezifikation](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax_improvements_in_level_4) ([Firefox Fehler 1422225](https://bugzil.la/1422225)).
- Die `offset-*`-Eigenschaften wurden umbenannt in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox Fehler 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion)-Medienfunktion wurde hinzugefügt ([Firefox Fehler 1365045](https://bugzil.la/1365045), [Firefox Fehler 1475462](https://bugzil.la/1475462)).
- Flussrelativierte Werte (`block`, `inline`) für die {{CSSxRef("resize")}}-Eigenschaft wurden hinzugefügt ([Firefox Fehler 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} wurde implementiert ([Firefox Fehler 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo zutreffend) sind jetzt animierbar ([Firefox Fehler 1309752](https://bugzil.la/1309752)).

#### Entfernt

- Die `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden wie oben beschrieben in `inset-*` umbenannt ([Firefox Fehler 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}}-Eigenschaft wurde implementiert ([Firefox Fehler 1472170](https://bugzil.la/1472170)).
- Die Methode {{JSxRef("Object.fromEntries()")}} wurde hinzugefügt ([Firefox Fehler 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt wesentlich verbessert. Wenn `x` undefiniert ist und Sie versuchen, auf `x.y` zuzugreifen, statt "TypeError: x ist undefiniert" gibt die Konsole nun das beschreibendere [x ist undefiniert; kann nicht auf seine "y"-Eigenschaft zugreifen](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) zurück ([Firefox Fehler 1259822](https://bugzil.la/1259822)).

#### Entfernt

- Die experimentelle Unterstützung für WebAssembly-Modul-IndexedDB-Serialisierung wurde entfernt ([Firefox Fehler 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox Fehler 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Fehler 1471948](https://bugzil.la/1471948)) APIs wurden standardmäßig aktiviert; Weitere Details finden Sie unter [Webkomponenten](/de/docs/Web/API/Web_components).
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox Fehler 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox Fehler 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); jedoch, im Gegensatz zu Chrome, ist `readText()` nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die Schnittstelle [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) wird nun unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox Fehler 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox Fehler 1476158](https://bugzil.la/1476158)):

  - Die [`Animation`](/de/docs/Web/API/Animation)-Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `Animation`-Objekt-`ready` und `finished` {{JSxRef("Promise")}}s spezifizieren.
  - Die [`Animation`](/de/docs/Web/API/Animation)-Objekt-`effect`-Eigenschaft.
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die Methode [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) wurde implementiert ([Firefox Fehler 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte, [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird nun aus Kompatibilitätsgründen unterstützt ([Firefox Fehler 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event)-Eigenschaft implementiert, um die Webkompatibilität zu verbessern, jetzt, da sie zu einem Standard geworden ist ([Firefox Fehler 218415](https://bugzil.la/218415)). Aufgrund einiger Webkompatibilitätsprobleme (z.B. [Firefox Fehler 1479964](https://bugzil.la/1479964)) wurde dies jedoch schnell in Nicht-Nightly-Kanälen deaktiviert, hinter der `dom.window.event.enabled`-Voreinstellung versteckt ([Firefox Fehler 1493869](https://bugzil.la/1493869)).
- Um Firefox in Einklang mit Edge und Chrome zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, auch wenn sie auf 64-Bit-Windows ausgeführt wird ([Firefox Fehler 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 hatten Links, die neue Fenster öffneten und `rel="noopener"` hatten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem [`noopener`](/de/docs/Web/API/Window/open) Fensterfeature aktiviert, standardmäßig alle Fensterfunktionen deaktiviert, so dass Sie alle standardmäßigen Funktionen, die Sie wollten, explizit wieder aktivieren mussten. Jetzt haben diese Fenster denselben Satz von Funktionen aktiviert wie jedes andere Fenster, und Sie müssen explizit ausschalten, welche Sie nicht möchten ([Firefox Fehler 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Behandlung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr`-Modifikatortaste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox Fehler 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, auch innerhalb desselben Inhaltsprozesses ([Firefox Fehler 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21-Datenformat für die Daten zusätzlich zu dem zuvor unterstützten sctp-sdp-05-Format zu unterstützen.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Knotentyp für Web Audio API hat jetzt eine Standardkanalzahl von 2 statt 1, um die Spezifikation zu erfüllen ([Firefox Fehler 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen darauf basierenden Knotentypen) wirft nun die korrekte Ausnahme, wenn ein negativer Wert für die Startzeit des Knotens angegeben wird. Dieser Fehler ist `RangeError` ([Firefox Fehler 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal erlaubten Werte für den [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekt`wert` wurden auf den minimal negativen Einzelpräzisions-Gleitkommawert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximal positiven Einzelpräzisions-Gleitkommawert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox Fehler 1476695](https://bugzil.la/1476695)).
- Die Methode [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType), die es ermöglicht, Codecs während eines aktiven Streams zu wechseln, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox Fehler 1481166](https://bugzil.la/1481166)).
- Die Methode [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde aktualisiert, um korrekt ein Array von Gleitkommawerten zu akzeptieren, um die sich im Laufe der Zeit ändernden Parameterwerte anzugeben. Zuvor wurde ein {{jsxref("Float32Array")}} benötigt ([Firefox Fehler 1421091](https://bugzil.la/1421091)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde ebenfalls aktualisiert, um korrekt einen richtigen `TypeError` zurückzugeben, wenn ein nicht-finiter Wert in dem `Werte`-Array gefunden wird ([Firefox Fehler 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter dem angegebenen Wertverlauf folgt und die Dauer abgelaufen ist, der Parameterwert auf den letzten Wert in der Liste der zu gebogenen Werte gesetzt wird ([Firefox Fehler 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats`-Wörterbuch wurde in `RTCRtpStreamStats` umbenannt, um Konsistenz mit anderen WebRTC-Wörterbüchern und der Spezifikation zu gewährleisten ([Firefox Fehler 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `RTCRtpStreamStats`-Dictionary-Eigenschaft `kind` wurde hinzugefügt ([Firefox Fehler 1481851](https://bugzil.la/1481851)).
- Die `RTCRtpStreamStats`-Dictionary-Eigenschaft `isRemote` ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Siehe [diesen Blogbeitrag auf dem Advancing WebRTC-Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox Fehler 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference`-Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS erlaubt dies WebGL-Anwendungen und Applets, die nicht leistungsintensiv sind, die anspruchslose GPU anstelle der leistungsstarken GPU in Multi-GPU-Systemen anzufordern ([Firefox Fehler 1349799](https://bugzil.la/1349799)).

#### Entfernt

- Die veralteten und nicht standardisierten, nur in Firefox vorhandenen Methoden `Window.back()` und `Window.forward()` wurden entfernt. Bitte verwenden Sie stattdessen die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox Fehler 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind nicht mehr auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen verfügbar, da sie potenziell Speicherlecks begünstigten ([Firefox Fehler 1264182](https://bugzil.la/1264182)).
- Da es in der Spezifikation sowieso veraltet war, wurde die begrenzte Unterstützung für Dopplereffekte auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener)-Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, zusammen mit der `PannerNode`-Methode `setVelocity()` ([Firefox Fehler 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}}-Header ist implementiert und nicht mehr hinter einer Voreinstellung erhöht ([Firefox Fehler 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Website-Favicons unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), wenn für die Site eine konfiguriert ist ([Firefox Fehler 1297156](https://bugzil.la/1297156)).
- Die CSP `script-src`-Direktive `'report-sample'` wird jetzt erkannt, wenn Verstöße gemeldet werden. Diese Direktive zeigt an, dass ein kurzes Beispiel dafür, wo der Verstoß aufgetreten ist, in den Bericht aufgenommen werden soll. Zuvor hat Firefox dieses Beispiel immer enthalten ([Firefox Fehler 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox Fehler 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt jetzt eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities) in der `WebDriver:NewSession`-Antwort zurück, die `true` ist, wenn das Browserfenster neu positioniert und in der Größe verändert werden kann, was z.B. für Firefox, aber nicht für mobile Anwendungen der Fall ist ([Firefox Fehler 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Funktion wurde hinzugefügt, die eine spezielle [Eingabeaufforderung](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver Spezifikation ermöglicht ([Firefox Fehler 1264259](https://bugzil.la/1264259)).
- Die Behandlung von Benutzeraufforderungen wurde zu den `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` Befehlen hinzugefügt ([Firefox Fehler 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Befehlsendpunkte ohne das Präfix `WebDriver:` wurden entfernt ([Firefox Fehler 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession`-Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver Spezifikation definiert ([Firefox Fehler 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokusbezogene Ereignisse fehlten bei der Elementinteraktion, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox Fehler 1398111](https://bugzil.la/1398111)).
- Das Ausführen von `pointerDown` und `pointerUp` Aktionen in einer anschließenden Aktionssequenz könnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurücksetzte ([Firefox Fehler 1422583](https://bugzil.la/1422583)).
- Wiederholtes Ausführen von `pause` Aktionen könnte ein unendliches Hängenbleiben verursachen ([Firefox Fehler 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementkollektion von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` zu einem zyklischen Referenzfehler führen würde ([Firefox Fehler 1447977](https://bugzil.la/1447977)).
- Um eine Race-Bedingung zu vermeiden, warten sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert` Befehle jetzt, bis die Benutzeraufforderung geschlossen wurde ([Firefox Fehler 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, wie vom Framescript ausgegeben, waren nicht mehr auf `MarionettePrefs.logLevel` begrenzt, sondern haben alles protokolliert ([Firefox Fehler 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` hat einen Fehler ausgegeben, wenn versucht wurde, einen Screenshot eines Fensters zu machen, das breiter oder höher als 32767 Pixel war ([Firefox Fehler 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardwert der Benutzeraufforderung nicht, wenn der zu sendende Text leer war ([Firefox Fehler 1486485](https://bugzil.la/1486485)).

### Weitere

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, so dass nichts getan wird, wenn keine gültigen Eintragstypen in dem angegebenen Array von zu beobachtenden Eintragstypen gefunden werden oder wenn das Array leer oder fehlt. Zuvor hat Firefox fälschlicherweise einen `TypeError` geworfen ([Firefox Fehler 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias von `application/x-suggestions+json` ([Firefox Fehler 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Themengestaltung

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Abzeichen wird jetzt automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox Fehler 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifests sind jetzt optional ([Firefox Fehler 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe der Browseraktionenabzeichen zu erhalten und zu setzen ([Firefox Fehler 1424620](https://bugzil.la/1424620)).
- Der Farbe Thema Schlüssel in `manifest.json` unterstützt jetzt die `ntp_text` Eigenschaft, um die Textfarbe in einem neuen Tab festzulegen, und die `ntp_background` Eigenschaft, um die Farbe eines neuen Tabs festzulegen ([Firefox Fehler 1347204](https://bugzil.la/1347204)).
- Themes können jetzt die Farben für die Seitenleisten definieren, wie die Lesezeichen-Seitenleiste ([Firefox Fehler 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:

  - `sidebar`: Die Hintergrundfarbe für die Seitenleisten.
  - `sidebar_text`: Die Textfarbe für die Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht es Webextensions, signierte Browser-Themes zu installieren und zu aktivieren ([Firefox Fehler 1369209](https://bugzil.la/1369209)).
- Der Manifests-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Fehler 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition experimenteller [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssleigenschaften für die Firefox-Schnittstelle.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht es Ihnen, die Liste der installierten Suchmaschinen abzurufen und Suchvorgänge mit ihnen auszuführen ([Firefox Fehler 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter entgegen, mit dem Sie verschiedene Optionen für die zurückgegebene Liste von Websites festlegen können ([Firefox Fehler 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Multi-Select ([Firefox Fehler 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — welches standardmäßig auf `true` gesetzt ist. Das Setzen auf `false` verhindert, dass das zurückgegebene `windows.Window`-Objekt mit einer Liste von Tabs gefüllt wird, um die Leistung zu verbessern ([Firefox Fehler 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt nun das Ändern des Auswahlstatus eines Tabs, indem `highlighted: true` im `updateProperties` Parameter enthalten ist ([Firefox Fehler 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt nun das Ändern des Auswahlstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox Fehler 1486050](https://bugzil.la/1486050)) indem sowohl `highlighted: true` als auch `active: false` im `updateProperties` Parameter enthalten sind.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Fehler 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}}-Eigenschaft spiegelt jetzt richtig wider, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind und {{WebExtAPIRef("tabs.highlight")}} unterstützt das Ändern des Hervorhebungsstatus mehrerer Tabs ([Firefox Fehler 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im `filter` Objekt, das in {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name bleibt erhalten, ist jedoch veraltet. Diese Änderung wurde auf Firefox 62 erweitert ([Firefox Fehler 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}}-Event kann verwendet werden, um zu verfolgen, wenn ein Tab die Aufmerksamkeit des Benutzers mit der `attention`-Eigenschaft des `changeInfo`-Objekts auf sich zieht ([Firefox Fehler 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}}-API hinzugefügt. Die Methode gibt das durch den `targetElementId` Parameter referenzierte Element zurück, das das angeklickte Element identifiziert. Wenn der `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox Fehler 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht jetzt das Erstellen unsichtbarer Menüpunkte, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit des Menüpunktes umzuschalten ([Firefox Fehler 1482529](https://bugzil.la/1482529)).
- Mit der {{WebExtAPIRef("menus")}} API erstellte Elemente unterstützen jetzt Zugriffstasten ([Firefox Fehler 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch solche, die normalerweise nicht in einem Übereinstimmungsmuster erlaubt sind ([Firefox Fehler 1280370](https://bugzil.la/1280370)).
- Wenn ein Menüpunkt im Tab-Kontextmenü angeklickt wird, wird die ["activeTab"-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, selbst wenn dies nicht der aktuell aktive Tab ist ([Firefox Fehler 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Fehler 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox Fehler 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName`, und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 erweitert ([Firefox Fehler 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Status des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Enumeration definiert SameSite-Statuswerte ([Firefox Fehler 1351663](https://bugzil.la/1351663)).
- Abgleichsmuster für URLs stimmen jetzt ausdrücklich mit dem "data" URL-Schema überein ([Firefox Fehler 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
