---
title: Firefox 63 Versionshinweise für Entwickler
short-title: Firefox 63
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Schriftarten-Tab im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Anzeigen und Bearbeiten der Einstellungen der Schriftarten auf Ihrer Seite erleichtert. Siehe [Schriftarten bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) für Details.
- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist nun standardmäßig aktiviert ([Firefox-Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, [wird das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox-Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird nun direkt nach der Konsolenausgabe angezeigt ([Firefox-Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Symbol wurde zu den Inhalten im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wann eine URL zu einem bekannten Tracker gehört — siehe [Sicherheitssymbole](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der `about:debugging`-Seite aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox-Bug 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste des [Responsiven Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht und es wurde die Option hinzugefügt, den Viewport links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox-Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox-Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernte Funktionen

- Unterstützung für den `sidebar` Linktyp (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox-Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}} Pseudoklasse wurde hinzugefügt ([Firefox-Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#the_gap_properties) hinzugefügt ([Firefox-Bug 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-präfixierte Pixel-Dichte @media-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio) wieder aktiviert ([Firefox-Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung hinzugefügt für die [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}} Eigenschaft ([Firefox-Bug 1472843](https://bugzil.la/1472843)).
- Die `path()` Funktion für {{CSSxRef("offset-path")}} implementiert ([Firefox-Bug 1429298](https://bugzil.la/1429298)).
- Syntaxverbesserungen aus der Media Queries Level 4 Spezifikation implementiert, insbesondere [verschachtelte boolesche Ausdrücke](/de/docs/Web/CSS/Guides/Media_queries/Using#creating_complex_media_queries) und die [Bereichssyntax](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) ([Firefox-Bug 1422225](https://bugzil.la/1422225)).
- `offset-*` Eigenschaften in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} umbenannt ([Firefox-Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für das [prefers-reduced-motion](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Medieneigenschaft hinzugefügt ([Firefox-Bug 1365045](https://bugzil.la/1365045), [Firefox-Bug 1475462](https://bugzil.la/1475462)).
- Fluss-relative Werte (`block`, `inline`) wurden für die {{CSSxRef("resize")}} Eigenschaft hinzugefügt ([Firefox-Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} implementiert ([Firefox-Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) sind (sofern zutreffend) jetzt animierbar ([Firefox-Bug 1309752](https://bugzil.la/1309752)).

#### Entfernte Funktionen

- `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden in `inset-*` umbenannt, wie oben beschrieben ([Firefox-Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}} Eigenschaft wurde implementiert ([Firefox-Bug 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}} Methode wurde hinzugefügt ([Firefox-Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt viel aussagekräftiger. Wenn `x` undefiniert ist und Sie versuchen, `x.y` zuzugreifen, gibt die Konsole jetzt die beschreibendere Meldung [x ist undefined; kann auf die "y"-Eigenschaft nicht zugreifen](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) ([Firefox-Bug 1259822](https://bugzil.la/1259822)).

#### Entfernte Funktionen

- Die experimentelle Unterstützung für die WebAssembly Module IndexedDB Serialisierung wurde entfernt ([Firefox-Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox-Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox-Bug 1471948](https://bugzil.la/1471948)) APIs wurden standardmäßig aktiviert; siehe [Webkomponenten](/de/docs/Web/API/Web_components) für weitere Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox-Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox-Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); im Gegensatz zu Chrome ist `readText()` jedoch nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Schnittstelle wird jetzt unterstützt. Sie erlaubt das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox-Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox-Bug 1476158](https://bugzil.la/1476158)):
  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `Animation` Objekt `ready` und `finished` {{JSxRef("Promise")}}s spezifizieren.
  - Die [`Animation`](/de/docs/Web/API/Animation) Objekt [`effect`](/de/docs/Web/API/Animation/effect) Eigenschaft.
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) Methode wurde implementiert ([Firefox-Bug 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird nun aus Kompatibilitätsgründen unterstützt ([Firefox-Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Webkompatibilität zu verbessern, da sie nun standardisiert ist ([Firefox-Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Kompatibilitätsprobleme (z. B. [Firefox-Bug 1479964](https://bugzil.la/1479964)) wurde diese jedoch schnell in nicht-Nightly-Kanälen deaktiviert, hinter dem `dom.window.event.enabled` Pref versteckt ([Firefox-Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, auch wenn sie unter einem 64-Bit-Windows ausgeführt wird ([Firefox-Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 öffneten Links, die neue Fenster mit `rel="noopener"` öffneten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem [`noopener`](/de/docs/Web/API/Window/open) Fenster-Feature standardmäßig mit deaktivierten Fenstereigenschaften, sodass Sie jedes gewünschte Standard-Feature explizit wieder aktivieren mussten. Jetzt haben diese Fenster denselben Satz von Features aktiviert wie jedes andere Fenster, und Sie müssen explizit alle deaktivieren, die Sie nicht möchten ([Firefox-Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Verarbeitung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr` Modifikatortaste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem Verhalten, das kürzlich in Chrome eingeführt wurde ([Firefox-Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, sogar innerhalb desselben Inhaltsprozesses ([Firefox-Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21 Datenformat zusätzlich zu dem zuvor unterstützten älteren sctp-sdp-05 Format für die Daten zu unterstützen.
- Der Knoten [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) für die Web Audio API hat jetzt eine Standard-Kanalanzahl von 2 statt 1, um der Spezifikation zu entsprechen ([Firefox-Bug 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und in der Erweiterung alle anderen Knotentypen, die darauf basieren) werfen jetzt die korrekte Ausnahme, wenn ein negativer Wert für die Knotenstartzeit angegeben wird. Dieser Fehler ist `RangeError` ([Firefox-Bug 1413284](https://bugzil.la/1413284)).
- Die minimalen und maximalen zulässigen Werte für das [`AudioParam`](/de/docs/Web/API/AudioParam) Objekt [`value`](/de/docs/Web/API/AudioParam/value) wurden auf den minimalen negativen Gleitkommawert mit einfacher Genauigkeit (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximalen positiven Gleitkommawert mit einfacher Genauigkeit (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox-Bug 1476695](https://bugzil.la/1476695)).
- Die [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType) Methode, die es Ihnen ermöglicht, Codecs während eines aktiven Streams zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox-Bug 1481166](https://bugzil.la/1481166)).
- Die [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) Methode wurde aktualisiert, um korrekt ein Array von Gleitkommawerten zu akzeptieren, um die Werte des Parameters anzugeben, die sich im Laufe der Zeit ändern sollen. Bisher erforderte sie einen {{jsxref("Float32Array")}} ([Firefox-Bug 1421091](https://bugzil.la/1421091)).
- `AudioParam.setValueCurveAtTime()` wurde auch aktualisiert, um eine ordnungsgemäße `TypeError` Ausnahme auszugeben, wenn ein nicht-endlicher Wert in dem `values` Array gefunden wird ([Firefox-Bug 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter nach Ablauf der Dauer der angegebenen Wertkurve folgt, der Wert des Parameters auf den letzten Wert in der Liste der zu durchlaufenden Werte gesetzt wird ([Firefox-Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats` Wörterbuch wurde in `RTCRtpStreamStats` umbenannt, um Konsistenz mit anderen WebRTC-Wörterbüchern und der Spezifikation zu gewährleisten ([Firefox-Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `RTCRtpStreamStats` Wörterbuch `kind` Eigenschaft wurde hinzugefügt ([Firefox-Bug 1481851](https://bugzil.la/1481851)).
- Die `RTCRtpStreamStats` Wörterbuch `isRemote` Eigenschaft ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Details finden Sie [in diesem Blogbeitrag im Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) ([Firefox-Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS ermöglicht dies WebGL-Anwendungen und Applets, die nicht leistungsrelevant sind, die Low-Power-GPU anstelle der High-Power-GPU in Multi-GPU-Systemen anzufordern ([Firefox-Bug 1349799](https://bugzil.la/1349799)).

#### Entfernte Funktionen

- Die veralteten und nicht standardmäßigen, nur in Firefox vorhandenen Methoden `Window.back()` und `Window.forward()` wurden entfernt. Bitte verwenden Sie die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox-Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind aufgrund des von ihnen verursachten Potentials für Speicherlecks bei [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Instanzen nicht mehr verfügbar ([Firefox-Bug 1264182](https://bugzil.la/1264182)).
- Da es in der Spezifikation ohnehin veraltet ist, wurde die begrenzte Unterstützung für Doppler-Effekte auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener) Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, zusammen mit der `PannerNode` Methode `setVelocity()` ([Firefox-Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Die {{HTTPHeader("Clear-Site-Data")}} Kopfzeile ist implementiert und nicht mehr hinter einer Präferenz versteckt ([Firefox-Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Website-Favicons unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), wenn eine für die Seite konfiguriert ist ([Firefox-Bug 1297156](https://bugzil.la/1297156)).
- Die CSP `script-src` Direktive `'report-sample'` Ausdruck wird jetzt erkannt, wenn Verletzungsberichte generiert werden. Diese Direktive gibt an, dass eine kurze Probe, wo die Verletzung aufgetreten ist, im Bericht enthalten sein sollte. Bisher enthielt Firefox diese Probe immer ([Firefox-Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox-Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt einen `setWindowRect` [Capability](/de/docs/Web/WebDriver/Reference/Capabilities) in der `WebDriver:NewSession` Antwort zurück, der wahr ist, wenn das Browserfenster repositioniert und in der Größe geändert werden kann, was z.B. bei Firefox, aber nicht bei mobilen Anwendungen der Fall ist ([Firefox-Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Capability hinzugefügt, die das spezifische [Promptverhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation ermöglicht ([Firefox-Bug 1264259](https://bugzil.la/1264259)).
- Die Verarbeitung von Benutzereingabeaufforderungen wurde zu den Befehlen `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` hinzugefügt ([Firefox-Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne den Präfix `WebDriver:` wurden entfernt ([Firefox-Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver-Spezifikation definiert ([Firefox-Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokus-bezogene Ereignisse fehlten bei der Elementinteraktion, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox-Bug 1398111](https://bugzil.la/1398111)).
- Ausführen von `pointerDown` und `pointerUp` Aktion in einer nachfolgenden Aktionssequenz konnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurücksetzte ([Firefox-Bug 1422583](https://bugzil.la/1422583)).
- Wiederholtes Ausführen von `pause`-Aktionen konnte zu einem unendlichen Hängenbleiben führen ([Firefox-Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementmenge durch `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` zu einem zyklischen Referenzfehler führte ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Um einen Wettlauf zu verhindern, warten sowohl die Befehle `WebDriver:AcceptAlert` als auch `WebDriver:DismissAlert` nun, bis die Benutzereingabeaufforderung geschlossen wurde ([Firefox-Bug 1479368](https://bugzil.la/1479368)).
- Logeinträge, wie sie vom Rahmenskript ausgesendet werden, wurden nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern alles wurde protokolliert ([Firefox-Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` gab einen Fehler zurück, wenn ein Screenshot von einem Fenster gemacht wurde, das größer als 32767 Pixel in Breite oder Höhe ist ([Firefox-Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte nicht den Standardwert der Benutzereingabeaufforderung, wenn der zu sendende Text eine leere Zeichenfolge ist ([Firefox-Bug 1486485](https://bugzil.la/1486485)).

### Sonstiges

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragsarten im angegebenen Array von zu beobachtenden Eintragsarten gefunden werden oder das Array leer oder fehlend ist. Zuvor warf Firefox fälschlicherweise eine `TypeError` ([Firefox-Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox-Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Theming

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Abzeichen wird nun automatisch auf schwarz oder weiß gesetzt, um den Kontrast zum Hintergrund zu maximieren ([Firefox-Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Keys sind jetzt optional ([Firefox-Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browseraktionsabzeichen zu bekommen und zu setzen ([Firefox-Bug 1424620](https://bugzil.la/1424620)).
- Der `colors` Schlüssel im `manifest.json` unterstützt jetzt die `ntp_text` Eigenschaft, um die Textfarbe in einem neuen Tab festzulegen, und die `ntp_background` Eigenschaft, um die Farbe eines neuen Tabs festzulegen ([Firefox-Bug 1347204](https://bugzil.la/1347204)).
- Designs können jetzt die Farben für Seitenleisten definieren, wie z.B. die Lesezeichen-Seitenleiste ([Firefox-Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften sind:
  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht Web-Erweiterungen das Installieren und Aktivieren signierter Browser-Themes ([Firefox-Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox-Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition von experimentellen [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht Ihnen, die Liste der installierten Suchmaschinen abzurufen und mit ihnen zu suchen ([Firefox-Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter, der es Ihnen ermöglicht, verschiedene Optionen für die zurückgegebene Liste der Seiten festzulegen ([Firefox-Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Multi-Select ([Firefox-Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt ist, verhindert es, dass das zurückgegebene `windows.Window` Objekt mit einer Liste von Tabs gefüllt wird, um die Leistung zu verbessern ([Firefox-Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlsstatus eines Tabs, indem `highlighted: true` im `updateProperties` Parameter enthalten ist ([Firefox-Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlsstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox-Bug 1486050](https://bugzil.la/1486050)), indem sowohl `highlighted: true` als auch `active: false` im `updateProperties` Parameter enthalten sind.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox-Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft reflektiert nun korrekt, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind und {{WebExtAPIRef("tabs.highlight")}} unterstützt das Ändern des hervorgehobenen Status mehrerer Tabs ([Firefox-Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im `filter` Objekt, das in {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name wird beibehalten, ist jedoch veraltet. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox-Bug 1461695](https://bugzil.la/1461695)).
- Das Ereignis {{WebExtAPIRef('tabs.onUpdated')}} kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention` Eigenschaft des `changeInfo` Objekts auf sich zieht ([Firefox-Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, das durch den `targetElementId` Parameter identifiziert wird, der das geklickte Element identifiziert. Wenn der `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox-Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüpunkte zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit der Menüeinträge umzuschalten ([Firefox-Bug 1482529](https://bugzil.la/1482529)).
- Mit der {{WebExtAPIRef("menus")}} API erstellte Elemente unterstützen jetzt Zugriffstasten ([Firefox-Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, selbst solche, die normalerweise in einem Abgleichsmuster nicht erlaubt sind ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Tab-Kontextmenüpunkt geklickt wird, wird die ["activeTab" permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, auch wenn das nicht der aktuelle aktive Tab ist ([Firefox-Bug 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox-Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox-Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox-Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Zustand des Cookies angibt. Das {{WebExtAPIRef("cookies.SameSiteStatus")}} Enum definiert SameSite-Zustandswerte ([Firefox-Bug 1351663](https://bugzil.la/1351663)).
- Abgleichsmuster für URLs stimmen jetzt explizit mit dem „data”-URL-Schema überein ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
