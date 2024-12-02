---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Der Reiter Schriftarten im [Seitensinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält nun einen Editor, der es erleichtert, die Einstellungen der Schriftarten auf Ihrer Seite anzuzeigen und zu bearbeiten. Siehe [Schriftarten bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) für Details.
- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist nun standardmäßig aktiviert ([Firefox Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird nun unmittelbar nach der Konsolenausgabe angezeigt ([Firefox Bug 1136299](https://bugzil.la/1136299)).
- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) wurde ein neues Icon hinzugefügt, das anzeigt, wenn eine URL zu einem bekannten Tracker gehört — siehe [Sicherheitsicons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons auf der `about:debugging`-Seite nicht gelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Bug 1425347](https://bugzil.la/1425347)).
- Die Werkzeugleiste im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, den Ansichtsbereich links auszurichten.
- Der Seitensinspektor enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernung

- Die Unterstützung für den `sidebar`-Verknüpfungstyp (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}} Pseudoklasse wurde hinzugefügt ([Firefox Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox Bug 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-präfixierte Pixel-Dichte @media Abfragen](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) wurde erneut aktiviert ([Firefox Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung hinzugefügt für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}} Eigenschaft ([Firefox Bug 1472843](https://bugzil.la/1472843)).
- Die `path()` Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox Bug 1429298](https://bugzil.la/1429298)).
- Verbesserte Syntax aus der Media Queries Level 4 Spezifikation implementiert ([Firefox Bug 1422225](https://bugzil.la/1422225)).
- Umbenennung der `offset-*` Eigenschaften zu {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} wurde umgesetzt ([Firefox Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienfunktion hinzugefügt ([Firefox Bug 1365045](https://bugzil.la/1365045), [Firefox Bug 1475462](https://bugzil.la/1475462)).
- Hinzufügen von flussrelativen Werten (`block`, `inline`) für die {{CSSxRef("resize")}} Eigenschaft ([Firefox Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` und `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} implementiert ([Firefox Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo zutreffend) sind nun animierbar ([Firefox Bug 1309752](https://bugzil.la/1309752)).

#### Entfernung

- Entfernung von `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end`; diese wurden zu `inset-*` umbenannt, wie oben beschrieben ([Firefox Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}} Eigenschaft wurde implementiert ([Firefox Bug 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}} Methode wurde hinzugefügt ([Firefox Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung nun viel aussagekräftiger. Im Falle, dass `x` undefiniert ist und Sie versuchen, `x.y` zuzugreifen, gibt die Konsole nun statt "TypeError: x is undefined" die genauere [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) Nachricht zurück ([Firefox Bug 1259822](https://bugzil.la/1259822)).

#### Entfernung

- Experimentelle Unterstützung für die WebAssembly-Modul-IndexedDB-Serialisierung wurde entfernt ([Firefox Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow-DOM ([Firefox Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Bug 1471948](https://bugzil.la/1471948)) APIs wurden standardmäßig aktiviert; siehe [Webkomponenten](/de/docs/Web/API/Web_components) für mehr Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); allerdings ist `readText()` im Gegensatz zu Chrome nur in [Browser-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Schnittstelle wird nun unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox Bug 1476158](https://bugzil.la/1476158)):

  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), welche die `Animation` Objekt - `ready` und `finished` {{JSxRef("Promise")}}s spezifizieren.
  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaft [`effect`](/de/docs/Web/API/Animation/effect).
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) Methode wurde implementiert ([Firefox Bug 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht-standardisierte [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird nun aus Kompatibilitätsgründen unterstützt ([Firefox Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Web-Kompatibilität zu verbessern, da sie nun standardisiert ist ([Firefox Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Web-Kompatibilitätsprobleme (z.B. [Firefox Bug 1479964](https://bugzil.la/1479964)) wurde dies jedoch schnell in Nicht-Nightly-Kanälen deaktiviert, versteckt hinter der `dom.window.event.enabled` Voreinstellung ([Firefox Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox in Einklang mit Edge und Chrome zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, auch wenn sie auf einem 64-Bit-Windows läuft ([Firefox Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 öffneten Links, die neue Fenster mit `rel="noopener"` öffneten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem aktivierten [`noopener`](/de/docs/Web/API/Window/open) Fenstermerkmal standardmäßig alle Fenstermerkmale, sodass Sie explizit jede gewünschte Standardfunktion erneut aktivieren mussten. Jetzt haben diese Fenster denselben Satz von Merkmalen aktiviert wie jedes andere Fenster, und Sie müssen explizit diejenigen deaktivieren, die Sie nicht wollen ([Firefox Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Handhabung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr`-Modifikatortaste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, auch im selben Inhaltsprozess ([Firefox Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21 Datenformat für die Daten zu unterstützen, zusätzlich zum älteren sctp-sdp-05 Format, das zuvor unterstützt wurde.
- Der Knoten-Typ [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) für die Web Audio API hat jetzt eine Standardkanalanzahl von 2 anstelle von 1, um der Spezifikation zu entsprechen ([Firefox Bug 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen darauf basierenden Knotentypen) erzeugen nun die korrekte Ausnahme, wenn ein negativer Wert für die Startzeit des Knotens angegeben wird. Dieser Fehler ist ein `RangeError` ([Firefox Bug 1413284](https://bugzil.la/1413284)).
- Die minimalen und maximal erlaubten Werte für das [`AudioParam`](/de/docs/Web/API/AudioParam) Objekt [`value`](/de/docs/Web/API/AudioParam/value) wurden auf den minimal negativen Einzelpräzisions-Gleitkommawert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximal positiven Einzelpräzisions-Gleitkommawert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox Bug 1476695](https://bugzil.la/1476695)).
- Die [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType) Methode, die es Ihnen ermöglicht, Codecs während eines aktiven Streams zu wechseln, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox Bug 1481166](https://bugzil.la/1481166)).
- Die [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) Methode wurde aktualisiert, um korrekt ein Array von Gleitkommawerten zu akzeptieren, um die Werte für den Parameter anzugeben, die sich im Laufe der Zeit ändern. Zuvor erforderte sie einen {{jsxref("Float32Array")}} ([Firefox Bug 1421091](https://bugzil.la/1421091)).
- `AudioParam.setValueCurveAtTime()` wurde auch aktualisiert, um korrekt einen ordentlichen `TypeError` zurückzugeben, wenn ein nicht-endlicher Wert im `values` Array gefunden wird ([Firefox Bug 1472095](https://bugzil.la/1472095)).
- Zudem wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter aufhört, der spezifizierten Wertkurve nach der Ablaufdurchlaufzeit zu folgen, der Wert des Parameters auf den letzten Wert in der Liste der Wertdurchlaufkurve gesetzt wird ([Firefox Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats` Wörterbuch wurde aus Konsistenzgründen mit anderen WebRTC-Wörterbüchern und der Spezifikation in `RTCRtpStreamStats` umbenannt ([Firefox Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `RTCRtpStreamStats`-Eigenschaft `kind` wurde hinzugefügt ([Firefox Bug 1481851](https://bugzil.la/1481851)).
- Die `isRemote` Eigenschaft des `RTCRtpStreamStats` Wörterbuchs ist veraltet und wird in Firefox 65 entfernt werden. Eine Warnung wird nun in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Siehe [diesen Blogbeitrag im Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS erlaubt dies nicht-leistungsbezogenen WebGL-Anwendungen und Applets, die Low-Power-GPU anstatt der High-Power-GPU in Multi-GPU-Systemen anzufordern ([Firefox Bug 1349799](https://bugzil.la/1349799)).

#### Entfernung

- Die veralteten und nicht standardisierten Firefox-Methoden [`Window.back()`](/de/docs/Web/API/Window/back) und [`Window.forward()`](/de/docs/Web/API/Window/forward) wurden entfernt. Bitte verwenden Sie stattdessen die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Instanzen nicht mehr verfügbar, da sie ein Potenzial für Speicherlecks eingeführt haben ([Firefox Bug 1264182](https://bugzil.la/1264182)).
- Da es in der Spezifikation ohnehin als veraltet eingestuft wurde, wurde die begrenzte Unterstützung von Doppler-Effekten auf [`PannerNode`](/de/docs/Web/API/PannerNode) von der Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener) Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, zusammen mit der `setVelocity()` Methode des `PannerNode` ([Firefox Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}} Header ist implementiert und nicht länger hinter einer Voreinstellung versteckt ([Firefox Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Website-Favicons unterliegen nun der [Content Security Policy](/de/docs/Web/HTTP/CSP), falls eine für die Website konfiguriert ist ([Firefox Bug 1297156](https://bugzil.la/1297156)).
- Das `script-src`-Direktiv der CSP erkennt nun den Ausdruck `'report-sample'`, wenn Verstöße gemeldet werden. Diese Richtlinie gibt an, dass eine kurze Probe von der Stelle, an der der Verstoß aufgetreten ist, im Bericht enthalten sein soll. Zuvor enthielt Firefox immer diese Probe ([Firefox Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet nun NSS 3.39 ([Firefox Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt nun eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Capabilities) in der `WebDriver:NewSession` Antwort zurück, die wahr ist, wenn das Browserfenster neu positioniert und in der Größe verändert werden kann, was z.B. für Firefox aber nicht für mobile Anwendungen zutrifft ([Firefox Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Fähigkeit wurde hinzugefügt, die es ermöglicht, ein spezifisches [Benutzereingabeverhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation zu definieren ([Firefox Bug 1264259](https://bugzil.la/1264259)).
- Die Behandlung von Benutzereingaben wurde zu den `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` Befehlen hinzugefügt ([Firefox Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das `WebDriver:` Präfix wurden entfernt ([Firefox Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` gemäß der WebDriver-Spezifikation zurück ([Firefox Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Zuordnung von Fokuseröffenlichen Ereignissen fehlte bei der Interaktion mit Elementen, wenn Firefox nicht als oberste Anwendung lief ([Firefox Bug 1398111](https://bugzil.la/1398111)).
- Das Ausführen einer `pointerDown` und `pointerUp` Aktion in einer nachfolgenden Aktionssequenz könnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurücksetzte ([Firefox Bug 1422583](https://bugzil.la/1422583)).
- Das wiederholte Ausführen von `pause` Aktionen könnte einen endlosen Hänger verursachen ([Firefox Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementesammlung von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zirkulären Verweissfehler verursachen würde ([Firefox Bug 1447977](https://bugzil.la/1447977)).
- Um eine Renne zu verhindern, warten nun sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert` Befehle, bis die Benutzereingabe geschlossen wurde ([Firefox Bug 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, wie sie vom Frame-Skript emittiert wurden, waren nicht länger auf `MarionettePrefs.logLevel` beschränkt, sondern protokollierten alles ([Firefox Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` erzeugte einen Fehler, wenn ein Bildschirmfoto von einem Fenster gemacht wurde, das größer als 32.767 Pixel in Breite oder Höhe war ([Firefox Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte nicht den standardmäßigen Benutzereingabewert, wenn der zu sendende Text eine leere Zeichenfolge ist ([Firefox Bug 1486485](https://bugzil.la/1486485)).

### Sonstiges

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragsarten im angegebenen Array der zu beobachtenden Eintragsarten gefunden werden oder wenn das Array leer oder fehlend ist. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/OpenSearch) akzeptiert Firefox nun `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Theming

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Badges wird jetzt automatisch auf schwarz oder weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifesteintrags sind jetzt optional ([Firefox Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browseraktionsbadges abzurufen und zu setzen ([Firefox Bug 1424620](https://bugzil.la/1424620)).
- Der `colors` Schlüssel im `manifest.json` unterstützt jetzt die `ntp_text` Eigenschaft, um die Textfarbe in einem neuen Tab zu setzen, und die `ntp_background` Eigenschaft, um die Farbe eines neuen Tabs zu setzen ([Firefox Bug 1347204](https://bugzil.la/1347204)).
- Themes können nun die Farben für Seitenleisten definieren, wie zum Beispiel die Lesezeichenseitenleiste ([Firefox Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften sind:

  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht es Web-Erweiterungen, signierte Browserthemen zu installieren und zu aktivieren ([Firefox Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition von experimentellen [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} AP[I](/de/docs/Mozilla/Add-ons/WebExtensions/API/search) ermöglicht es Ihnen, die Liste der installierten Suchmaschinen abzurufen und mit ihnen zu suchen ([Firefox Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter, mit dem Sie verschiedene Optionen für die zurückgegebene Liste der Sites festlegen können ([Firefox Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt die Mehrfachauswahl ([Firefox Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt wird, wird das zurückgegebene `windows.Window` Objekt nicht mit einer Liste von Tabs gefüllt, um die Leistung zu verbessern ([Firefox Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlstatus eines Tabs durch das Einschließen von `highlighted: true` im `updateProperties` Parameter ([Firefox Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox Bug 1486050](https://bugzil.la/1486050)), indem sowohl `highlighted: true` als auch `active: false` im `updateProperties` Parameter eingeschlossen wird.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft reflektiert nun ordnungsgemäß, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind, und {{WebExtAPIRef("tabs.highlight")}} unterstützt die Änderung des Hervorhebungsstatus von mehreren Tabs ([Firefox Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle`-Eigenschaft im `filter` Objekt, das in {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name bleibt bestehen, ist aber veraltet. Diese Änderung wurde in Firefox 62 rückportiert ([Firefox Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}} Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention` Eigenschaft des `changeInfo` Objekts anzieht ([Firefox Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, das durch den `targetElementId` Parameter referenziert wird, der das angeklickte Element identifiziert. Wenn der `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht Ihnen jetzt unsichtbare Menüeinträge zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüeinträgen umzuschalten ([Firefox Bug 1482529](https://bugzil.la/1482529)).
- Elemente, die mit der {{WebExtAPIRef("menus")}} API erstellt wurden, unterstützen jetzt Zugriffstasten ([Firefox Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch solche, die normalerweise nicht in einem Übereinstimmungsmuster erlaubt sind ([Firefox Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Tab-Kontextmenüeintrag angeklickt wird, wird die ["activeTab"-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, auch wenn das nicht der aktuell aktive Tab ist ([Firefox Bug 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, auf spekulative Verbindungen zu filtern ([Firefox Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde in Firefox 62 rückportiert ([Firefox Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Zustand des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Enumeration definiert SameSite Zustandswerte ([Firefox Bug 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs stimmen nun ausdrücklich mit dem "data" URL-Schema überein ([Firefox Bug 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
