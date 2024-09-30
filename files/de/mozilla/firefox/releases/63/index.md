---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 63, die Entwickler betreffen. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Tab "Schriftarten" im [Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Anzeigen und Bearbeiten der Einstellungen der Schriften auf Ihrer Seite erleichtert. Weitere Details finden Sie unter [Schriften bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Barrierefreiheit-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie mit der Maus über ein Objekt im [Barrierefreiheit-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox-Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt direkt nach der Konsolenausgabe angezeigt ([Firefox-Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Symbol wurde den Inhalten im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wenn eine URL zu einem bekannten Tracker gehört — siehe [Sicherheitssymbole](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der Seite `about:debugging` aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox-Bug 1425347](https://bugzil.la/1425347)).
- Die Werkzeugleiste des [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, das Viewport links auszurichten.
- Der Seiteninspektor enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox-Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Die Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox-Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernungen

- Die Unterstützung für den `sidebar`-Link-Typ (`rel="sidebar"`) wurde entfernt. Wenn ein `anchor`-Tag dieses Attribut enthält, wird es ignoriert ([Firefox-Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Die Unterstützung für die {{CSSxRef(":defined")}} Pseudoklasse wurde hinzugefügt ([Firefox-Bug 1331334](https://bugzil.la/1331334)).
- Unterstützungen für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurden im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox-Bug 1398483](https://bugzil.la/1398483)).
- Die Unterstützung für webkit-präfixierte Pixel-Dichte @media-Abfragen wurde wieder aktiviert ([Firefox-Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung hinzugefügt für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}} Eigenschaft ([Firefox-Bug 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox-Bug 1429298](https://bugzil.la/1429298)).
- [Syntax-Verbesserungen aus der Media Queries Level 4-Spezifikation](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax_improvements_in_level_4) wurden implementiert ([Firefox-Bug 1422225](https://bugzil.la/1422225)).
- Umbenennung der `offset-*` Eigenschaften in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox-Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienfunktion hinzugefügt ([Firefox-Bug 1365045](https://bugzil.la/1365045), [Firefox-Bug 1475462](https://bugzil.la/1475462)).
- Fluss-relative Werte (`block`, `inline`) für die {{CSSxRef("resize")}}-Eigenschaft wurden hinzugefügt ([Firefox-Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für die Werte `safe` & `unsafe` in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} implementiert ([Firefox-Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo zutreffend) sind jetzt animierbar ([Firefox-Bug 1309752](https://bugzil.la/1309752)).

#### Entfernungen

- `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden wie oben beschrieben in `inset-*` umbenannt ([Firefox-Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}}-Methode wurde hinzugefügt ([Firefox-Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt erheblich verbessert. Angenommen, `x` ist undefiniert und Sie versuchen, auf `x.y` zuzugreifen, anstatt "TypeError: x is undefined" gibt die Konsole jetzt die ausführlichere Meldung zurück, dass [x undefiniert ist und die "y"-Eigenschaft nicht zugegriffen werden kann](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) ([Firefox-Bug 1259822](https://bugzil.la/1259822)).

#### Entfernungen

- Die experimentelle Unterstützung für die Serialisierung von WebAssembly Module IndexedDB wurde entfernt ([Firefox-Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox-Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox-Bug 1471948](https://bugzil.la/1471948)) APIs sind standardmäßig aktiviert; Siehe [Web Components](/de/docs/Web/API/Web_components) für weitere Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox-Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und ist standardmäßig für alle Kanäle aktiviert ([Firefox-Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); jedoch ist `readText()` im Gegensatz zu Chrome nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Das [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interface wird jetzt unterstützt. Es ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox-Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) sind jetzt standardmäßig aktiviert (siehe [Firefox-Bug 1476158](https://bugzil.la/1476158)):

  - Die [`Animation`](/de/docs/Web/API/Animation)-Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `ready`- und `finished`-{{JSxRef("Promise")}}s des `Animation`-Objekts angeben.
  - Die [`effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Objekts.
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die Methode [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) wurde implementiert ([Firefox-Bug 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte [`Event.returnValue`](/de/docs/Web/API/Event/returnValue)-Eigenschaft wird jetzt aus Kompatibilitätsgründen unterstützt ([Firefox-Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event)-Eigenschaft implementiert, um die Webkompatibilität zu verbessern, jetzt da sie Standard geworden ist ([Firefox-Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Kompatibilitätsprobleme im Web (z.B. [Firefox-Bug 1479964](https://bugzil.la/1479964)) wurde diese jedoch schnell in Nicht-Nightly-Kanälen deaktiviert und hinter dem `dom.window.event.enabled`-Pref versteckt ([Firefox-Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform)-Eigenschaft jetzt `"Win32"` zurück, selbst wenn sie auf 64-Bit-Windows ausgeführt wird ([Firefox-Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 öffneten Links, die neue Fenster mit `rel="noopener"` öffneten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem aktivierten [`noopener`](/de/docs/Web/API/Window/open) Fenster-Feature standardmäßig alle Fenster-Features deaktiviert, sodass Sie explizit alle Standard-Features, die Sie wollten, wieder aktivieren mussten. Jetzt haben diese Fenster denselben Satz an aktivierten Features wie jedes andere Fenster, und Sie müssen explizit alle deaktivieren, die Sie nicht wollen ([Firefox-Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Das Handling der rechten `Alt`-Taste auf der Tastatur wurde in Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr`-Modifikatortaste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt mit `"AltGraph"` angegeben. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox-Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, sogar innerhalb desselben Inhaltsprozesses ([Firefox-Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21 Datenformat neben dem zuvor unterstützten sctp-sdp-05 Format zu unterstützen.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Knotentyp der Web Audio API hat jetzt eine Standardkanalanzahl von 2 anstatt 1, um der Spezifikation zu entsprechen ([Firefox-Bug 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen darauf basierenden Knotentypen) werfen jetzt die korrekte Ausnahme, wenn ein negativer Wert für die Knotestartzeit angegeben wird. Dieser Fehler ist ein `RangeError` ([Firefox-Bug 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal zulässigen Werte für das [`value`](/de/docs/Web/API/AudioParam/value)-Objekt eines [`AudioParam`](/de/docs/Web/API/AudioParam) wurden auf den minimalen negativen Einzelpräzisions-Gleitkommawert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximalen positiven Einzelpräzisions-Gleitkommawert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox-Bug 1476695](https://bugzil.la/1476695)).
- Die Methode [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType), die es ermöglicht, die Codecs während eines aktiven Streams zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox-Bug 1481166](https://bugzil.la/1481166)).
- Die Methode [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde aktualisiert, um korrekt ein Array von Gleitkommawerten für die Änderung der Parameterwerte über die Zeit zu akzeptieren. Zuvor erforderte es ein {{jsxref("Float32Array")}} ([Firefox-Bug 1421091](https://bugzil.la/1421091)).
- Die Methode `setValueCurveAtTime()` wurde auch so aktualisiert, dass ein korrekter `TypeError` zurückgegeben wird, wenn ein nicht endlich definierter Wert in dem `values`-Array gefunden wird ([Firefox-Bug 1472095](https://bugzil.la/1472095)).
- Zusätzlich wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass der Parameterwert am Ende der Kurve nach Ablauf der Dauer auf den letzten Wert in der Liste der zu krümmenden Werte eingestellt wird ([Firefox-Bug 1308436](https://bugzil.la/1308436)).
- Das Wörterbuch `RTCRTPStreamStats` wurde für Konsistenz mit anderen WebRTC-Wörterbüchern und der Spezifikation in [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats) umbenannt ([Firefox-Bug 1480498](https://bugzil.la/1480498)).
- Die Unterstützung für die `kind`-Eigenschaft des `RTCRtpStreamStats`-Wörterbuchs wurde hinzugefügt ([Firefox-Bug 1481851](https://bugzil.la/1481851)).
- Die `RTCRtpStreamStats`-Eigenschaft `isRemote` ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird nun in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Siehe [diesen Blog-Post auf dem Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox-Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference`-Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS ermöglicht dies nicht performance-kritischen WebGL-Anwendungen und Applets, die stromsparende GPU anstelle der leistungsstarken GPU in Multi-GPU-Systemen anzufordern ([Firefox-Bug 1349799](https://bugzil.la/1349799)).

#### Entfernungen

- Die veralteten und nicht standardisierten, nur in Firefox vorhandenen Methoden [`Window.back()`](/de/docs/Web/API/Window/back) und [`Window.forward()`](/de/docs/Web/API/Window/forward) wurden entfernt. Bitte verwenden Sie stattdessen die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox-Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind in [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen nicht mehr verfügbar, da sie potenziell zu Speicherlecks führen konnten ([Firefox-Bug 1264182](https://bugzil.la/1264182)).
- Da es ohnehin in der Spezifikation veraltet war, wurde die eingeschränkte Unterstützung für Doppler-Effekte auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die Eigenschaften `dopplerFactor` und `speedOfSound` von [`AudioListener`](/de/docs/Web/API/AudioListener) sowie die Methode `setVelocity()` von `PannerNode` wurden entfernt ([Firefox-Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Die {{HTTPHeader("Clear-Site-Data")}}-Header ist implementiert und nicht mehr hinter einer Voreinstellung versteckt ([Firefox-Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Website-Favicons unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/CSP), wenn eine für die Seite konfiguriert ist ([Firefox-Bug 1297156](https://bugzil.la/1297156)).
- Die `script-src`-Direktive von CSP erkennt jetzt den `'report-sample'`-Ausdruck bei der Erstellung von Verstoßberichten. Diese Direktive gibt an, dass ein kurzer Beispielcode, wo der Verstoß aufgetreten ist, im Bericht enthalten sein sollte. Bisher hat Firefox dieses Beispiel immer eingeschlossen ([Firefox-Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox-Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt jetzt eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Capabilities) in der Antwort auf `WebDriver:NewSession` zurück, die angibt, ob das Browserfenster verschoben und in der Größe geändert werden kann, was z.B. für Firefox, aber nicht für mobile Anwendungen der Fall ist ([Firefox-Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior`-Fähigkeit hinzugefügt, die es ermöglicht, ein spezifisches [Eingabeaufforderung-Verhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation zu definieren ([Firefox-Bug 1264259](https://bugzil.la/1264259)).
- Das Handling von Benutzereingabeaufforderungen wurde den Befehlen `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` hinzugefügt ([Firefox-Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `WebDriver:` wurden entfernt ([Firefox-Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession`-Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` gemäß der WebDriver-Spezifikation zurück ([Firefox-Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokus-bezogene Ereignisse fehlten bei der Interaktion mit Elementen, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox-Bug 1398111](https://bugzil.la/1398111)).
- Das Ausführen von `pointerDown` und `pointerUp` Aktionen in einer nachfolgenden Aktionssequenz konnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurückgesetzt hat ([Firefox-Bug 1422583](https://bugzil.la/1422583)).
- Wiederholtes Ausführen von `pause`-Aktionen konnte ein unendliches Hängenbleiben verursachen ([Firefox-Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementensammlung von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursachen würde ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Zur Vermeidung eines Race-Conditions warten nun sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert`-Befehle, bis die Benutzereingabeaufforderung geschlossen wurde ([Firefox-Bug 1479368](https://bugzil.la/1479368)).
- Logeinträge, wie sie vom Frame-Skript ausgegeben wurden, waren nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern loggten alles ([Firefox-Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` erzeugte einen Fehler beim Aufnehmen eines Screenshots eines Fensters, das größer als 32767 Pixel in Breite oder Höhe ist ([Firefox-Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` hat den Standardwert der Benutzereingabeaufforderung nicht ersetzt, wenn der text to send eine leere Zeichenfolge ist ([Firefox-Bug 1486485](https://bugzil.la/1486485)).

### Andere

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragstypen im angegebenen Array von zu beobachtenden Eintragstypen gefunden werden oder wenn das Array leer oder fehlen ist. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox-Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox-Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Themen

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}}-Abzeichen wird jetzt automatisch auf schwarz oder weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox-Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor`- und `textcolor`-Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels sind jetzt optional ([Firefox-Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browser-Aktionsabzeichen abzurufen und festzulegen ([Firefox-Bug 1424620](https://bugzil.la/1424620)).
- Der `thema`-Schlüssel `colors` in `manifest.json` unterstützt jetzt die Eigenschaft `ntp_text`, um die Textfarbe in einem neuen Tab festzulegen, und die Eigenschaft `ntp_background`, um die Farbe eines neuen Tabs festzulegen ([Firefox-Bug 1347204](https://bugzil.la/1347204)).
- Themen können nun die Farben für Sidebars festlegen, wie z.B. die Lesezeichen-Sidebar ([Firefox-Bug 1418602](https://bugzil.la/1418602)). Zu den relevanten Eigenschaften gehören:

  - `sidebar`: Die Hintergrundfarbe für Sidebars.
  - `sidebar_text`: Die Textfarbe für Sidebars.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Sidebar.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Sidebar.

- Die Methode {{WebExtAPIRef("management.install()")}} erlaubt es Web-Erweiterungen, signierte Browser-Themen zu installieren und zu aktivieren ([Firefox-Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox-Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition experimenteller [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Schlüsseleigenschaften für die Firefox-Schnittstelle.

#### Suche

- Die neue {{WebExtAPIRef("search")}} AP[I](/de/docs/Mozilla/Add-ons/WebExtensions/API/search) ermöglicht es Ihnen, die Liste der installierten Suchmaschinen zu ermitteln und mit ihnen zu suchen ([Firefox-Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options`-Parameter entgegen, mit dem Sie verschiedene Optionen für die zurückgegebene Liste von Websites festlegen können ([Firefox-Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Mehrfachauswahl ([Firefox-Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo`-Objekt — `populate` — das standardmäßig auf `true` steht. Wenn es auf `false` gesetzt ist, wird dadurch verhindert, dass das zurückgegebene `windows.Window`-Objekt mit einer Liste von Tabs gefüllt wird, um die Leistung zu verbessern ([Firefox-Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlsstatus eines Tabs durch Hinzufügen von `highlighted: true` im `updateProperties`-Parameter ([Firefox-Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlsstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox-Bug 1486050](https://bugzil.la/1486050)) durch Hinzufügen von `highlighted: true` und `active: false` im `updateProperties`-Parameter.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox-Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}}-Eigenschaft reflektiert jetzt korrekt, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind, und {{WebExtAPIRef("tabs.highlight")}} unterstützt die Änderung des Hervorhebungsstatus mehrerer Tabs ([Firefox-Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle`-Eigenschaft im `filter`-Objekt, das in {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name wird beibehalten, aber veraltet. Diese Änderung wurde in Firefox 62 übernommen ([Firefox-Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}} Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention`-Eigenschaft des `changeInfo`-Objekts erregt ([Firefox-Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}}-API hinzugefügt. Die Methode gibt das Element zurück, auf das der `targetElementId`-Parameter verweist, der das angeklickte Element identifiziert. Wenn der `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox-Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüelemente zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüpunkten zu ändern ([Firefox-Bug 1482529](https://bugzil.la/1482529)).
- Mit der {{WebExtAPIRef("menus")}}-API erstellte Elemente unterstützen jetzt Zugriffstasten ([Firefox-Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns`-Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch solche, die in einem Vergleichsmuster normalerweise nicht erlaubt sind ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Kontextmenüelement eines Tabs angeklickt wird, wird jetzt für diesen Tab die ["activeTab"-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) gewährt, auch wenn es sich nicht um den derzeit aktiven Tab handelt ([Firefox-Bug 1446956](https://bugzil.la/1446956)).

#### Andere

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox-Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}}-API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox-Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde in Firefox 62 übernommen ([Firefox-Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Status des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}}-Enumeration definiert SameSite-Statuswerte ([Firefox-Bug 1351663](https://bugzil.la/1351663)).
- Vergleichsmuster für URLs stimmen jetzt ausdrücklich mit dem "data"-URL-Schema überein ([Firefox-Bug 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
