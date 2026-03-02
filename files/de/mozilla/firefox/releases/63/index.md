---
title: Firefox 63 Versionshinweise für Entwickler
short-title: Firefox 63
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwickler-Tools

- Der Reiter "Fonts" im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Anzeigen und Bearbeiten der Einstellungen der Schriftarten auf Ihrer Seite erleichtert. Siehe [Edit fonts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) für Details.
- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) schweben, wird das Element [hervorgehoben und seine Rolle und sein Name](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) auf einer Informationsleiste auf der Seite angezeigt ([Firefox-Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt unmittelbar nach der Konsolenausgabe angezeigt ([Firefox-Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Symbol wurde dem Inhalt im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wann eine URL zu einem bekannten Tracker gehört — siehe [security icons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der `about:debugging`-Seite angezeigt werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox-Bug 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, das Ansichtsfenster links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox-Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox-Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernungen

- Unterstützung für den `sidebar`-Linktyp (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox-Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}}-Pseudoklasse wurde hinzugefügt ([Firefox-Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#the_gap_properties) hinzugefügt ([Firefox-Bug 1398483](https://bugzil.la/1398483)).
- Wiederaktive Unterstützung für [webkit-prefixed pixel-density @media queries](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio) ([Firefox-Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung für die [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) (Flexbox)-Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}}-Eigenschaft wurde hinzugefügt ([Firefox-Bug 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox-Bug 1429298](https://bugzil.la/1429298)).
- Syntaxverbesserungen aus der Media Queries Level 4-Spezifikation, insbesondere [verschachtelte boolesche Ausdrücke](/de/docs/Web/CSS/Guides/Media_queries/Using#creating_complex_media_queries) und die [Bereichssyntax](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) wurden implementiert ([Firefox-Bug 1422225](https://bugzil.la/1422225)).
- `offset-*`-Eigenschaften wurden zu {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} umbenannt ([Firefox-Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)-Medieneigenschaft hinzugefügt ([Firefox-Bug 1365045](https://bugzil.la/1365045), [Firefox-Bug 1475462](https://bugzil.la/1475462)).
- Flussverwandte Werte (`block`, `inline`) für die {{CSSxRef("resize")}}-Eigenschaft wurden hinzugefügt ([Firefox-Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} implementiert ([Firefox-Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) (wo zutreffend) sind jetzt animierbar ([Firefox-Bug 1309752](https://bugzil.la/1309752)).

#### Entfernungen

- `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden, wie oben beschrieben, zu `inset-*` umbenannt ([Firefox-Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}} Methode wurde hinzugefügt ([Firefox-Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt erheblich verbessert. Im Fall, dass `x` undefiniert ist und Sie versuchen, auf `x.y` zuzugreifen, gibt die Konsole jetzt anstelle von "TypeError: x is undefined" die aussagekräftigere Beschreibung [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) aus ([Firefox-Bug 1259822](https://bugzil.la/1259822)).

#### Entfernungen

- Experimentelle Unterstützung der WebAssembly Module IndexedDB-Serialisierung wurde entfernt ([Firefox-Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox-Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox-Bug 1471948](https://bugzil.la/1471948)) APIs sind standardmäßig aktiviert; siehe [Web components](/de/docs/Web/API/Web_components) für weitere Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox-Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox-Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); im Gegensatz zu Chrome ist `readText()` jedoch nur in [Browser-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle wird jetzt unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox-Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox-Bug 1476158](https://bugzil.la/1476158)):
  - Die [`Animation`](/de/docs/Web/API/Animation)-Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `ready` und `finished` {{JSxRef("Promise")}}s des `Animation`-Objekts spezifizieren.
  - Die [`Animation`](/de/docs/Web/API/Animation)-Objekteigenschaft [`effect`](/de/docs/Web/API/Animation/effect).
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)-Methode wurde implementiert ([Firefox-Bug 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte [`Event.returnValue`](/de/docs/Web/API/Event/returnValue)-Eigenschaft wird jetzt aus Kompatibilitätsgründen unterstützt ([Firefox-Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event)-Eigenschaft implementiert, um die Web-Kompatibilität zu verbessern, jetzt da sie standardisiert wurde ([Firefox-Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Web-Kompatibilitätsprobleme (z.B. [Firefox-Bug 1479964](https://bugzil.la/1479964)) wurde diese jedoch schnell in Nicht-Nightly-Kanälen deaktiviert und hinter der `dom.window.event.enabled`-Einstellung versteckt ([Firefox-Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox in Einklang mit Edge und Chrome zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform)-Eigenschaft nun `"Win32"` zurück, auch wenn es auf einem 64-Bit-Windows ausgeführt wird ([Firefox-Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 hatten Links, die neue Fenster öffneten, die `rel="noopener"` hatten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit aktiviertem [`noopener`](/de/docs/Web/API/Window/open) Fenstermerkmal, standardmäßig alle Fenstermerkmale deaktiviert, sodass Sie alle gewünschten Standardmerkmale explizit wieder aktivieren mussten. Jetzt haben diese Fenster denselben Satz von Merkmalen aktiviert wie jedes andere Fenster, und Sie müssen explizit deaktivieren, welche Sie nicht möchten ([Firefox-Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Das Handling der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr`-Modifikatortaste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` angegeben. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox-Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, selbst innerhalb desselben Inhaltsprozesses ([Firefox-Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21-Datenformat für die Daten zusätzlich zu dem zuvor unterstützten sctp-sdp-05-Format zu unterstützen.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Knotentyp für die Web Audio API hat jetzt eine Standardkanalanzahl von 2 statt 1, um die Spezifikation zu erfüllen ([Firefox-Bug 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und in der Erweiterung alle anderen Knotentypen, die darauf basieren) werfen jetzt die richtige Ausnahme, wenn ein negativer Wert für die Startzeit des Knotens angegeben wird. Dieser Fehler ist ein `RangeError` ([Firefox-Bug 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal zulässigen Werte für die [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekteigenschaft [`value`](/de/docs/Web/API/AudioParam/value) wurden auf den minimalen negativen Einzelpräzisions-Floating-Point-Wert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximalen positiven Einzelpräzisions-Floating-Point-Wert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox-Bug 1476695](https://bugzil.la/1476695)).
- Die [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType)-Methode, die es Ihnen erlaubt, während eines aktiven Streams die Codecs zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox-Bug 1481166](https://bugzil.la/1481166)).
- Die [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime)-Methode wurde aktualisiert, um korrekt ein Array von Gleitkommazahlen zu akzeptieren, um die Werte des Parameters über die Zeit zu ändern. Zuvor erforderte sie eine {{jsxref("Float32Array")}} ([Firefox-Bug 1421091](https://bugzil.la/1421091)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde auch aktualisiert, um korrekt einen `TypeError` zurückzugeben, wenn ein nicht-endlicher Wert im `values`-Array gefunden wird ([Firefox-Bug 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter das Folgen der angegebenen Wertkurve nach Ablauf der Dauer beendet, der Wert des Parameters auf den letzten Wert in der Liste der zu krümmenden Werte gesetzt wird ([Firefox-Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats`-Wörterbuch wurde aus Konsistenzgründen mit anderen WebRTC-Wörterbüchern und der Spezifikation in `RTCRtpStreamStats` umbenannt ([Firefox-Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `kind`-Eigenschaft des `RTCRtpStreamStats`-Wörterbuchs hinzugefügt ([Firefox-Bug 1481851](https://bugzil.la/1481851)).
- Die `isRemote`-Eigenschaft des `RTCRtpStreamStats`-Wörterbuchs ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in die Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Weitere Informationen hierzu finden Sie in [diesem Blogbeitrag auf dem Advancing WebRTC-Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) ([Firefox-Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS ermöglicht dies WebGL nicht-leistungs-kritischen Anwendungen und Applets, die Low-Power-GPU anstelle der High-Power-GPU in Multi-GPU-Systemen anzufordern ([Firefox-Bug 1349799](https://bugzil.la/1349799)).

#### Entfernungen

- Die veralteten und nicht standardisierten Firefox-spezifischen Methoden `Window.back()` und `Window.forward()` wurden entfernt. Bitte verwenden Sie stattdessen die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox-Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind nicht mehr auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen verfügbar, da sie die Möglichkeit für Speicherlecks einführten ([Firefox-Bug 1264182](https://bugzil.la/1264182)).
- Da es ohnehin in der Spezifikation veraltet war, wurde die eingeschränkte Unterstützung von Dopplereffekten auf [`PannerNode`](/de/docs/Web/API/PannerNode) vom Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener)-Eigenschaften `dopplerFactor` und `speedOfSound` wurden zusammen mit der `PannerNode`-Methode `setVelocity()` entfernt ([Firefox-Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}}-Header wird implementiert und ist nicht mehr hinter einer Voreinstellung versteckt ([Firefox-Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Site-Favicons unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), wenn eine für die Site konfiguriert ist ([Firefox-Bug 1297156](https://bugzil.la/1297156)).
- Das `'report-sample'`-Ausdruck des CSP `script-src`-Direktivs wird jetzt beim Generieren von Verstoßmeldungen erkannt. Diese Direktive gibt an, dass eine kurze Probe, wo der Verstoß auftrat, in den Bericht aufgenommen werden sollte. Zuvor enthielt Firefox immer dieses Sample ([Firefox-Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox-Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt jetzt eine `setWindowRect` [Capability](/de/docs/Web/WebDriver/Reference/Capabilities) in der `WebDriver:NewSession`-Antwort zurück, die wahr ist, wenn das Browserfenster neu positioniert und in der Größe verändert werden kann, was z.B. für Firefox, aber nicht für mobile Anwendungen der Fall ist ([Firefox-Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Capability wurde hinzugefügt, die es erlaubt, ein bestimmtes [Eingabeaufforderungsverhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation zu definieren ([Firefox-Bug 1264259](https://bugzil.la/1264259)).
- Die Behandlung von Benutzeraufforderungen wurde zu den Befehlen `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` hinzugefügt ([Firefox-Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `WebDriver:` wurden entfernt ([Firefox-Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession`-Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver-Spezifikation definiert ([Firefox-Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Auf Ereignisse bezogene Fokussierung fehlte bei der Interaktion mit Elementen, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox-Bug 1398111](https://bugzil.la/1398111)).
- Das Ausführen von `pointerDown` und `pointerUp`-Aktionen in einer nachfolgenden Aktionssequenz konnte einen Doppelklick auslösen, weil `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurückgesetzt hat ([Firefox-Bug 1422583](https://bugzil.la/1422583)).
- Mehrfaches Ausführen von `pause`-Aktionen konnte ein unendliches Hängenbleiben verursachen ([Firefox-Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementesammlung von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursachen würde ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Um eine Race Condition zu verhindern, warten jetzt sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert`-Befehle, bis die Benutzeraufforderung geschlossen wurde ([Firefox-Bug 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, die vom Frame-Skript erzeugt wurden, waren nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern loggten alles ([Firefox-Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` erzeugte einen Fehler, wenn ein Screenshot von einem Fenster gemacht wurde, das größer als 32767 Pixel in Breite oder Höhe war ([Firefox-Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardwert der Benutzeraufforderung nicht, wenn der zu sendende Text eine leere Zeichenkette ist ([Firefox-Bug 1486485](https://bugzil.la/1486485)).

### Weitere

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragstypen im angegebenen Array von beobachtbaren Eintragstypen gefunden werden oder wenn das Array leer oder fehlend ist. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox-Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias von `application/x-suggestions+json` ([Firefox-Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Themeing

- Die Standard-Textfarbe für {{WebExtAPIRef("browserAction")}}-Badges wird jetzt automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox-Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels sind jetzt optional ([Firefox-Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browseraktion-Badges zu abrufen und einzustellen ([Firefox-Bug 1424620](https://bugzil.la/1424620)).
- Der `colors` Schlüssel im `manifest.json` unterstützt jetzt die `ntp_text` Eigenschaft, um die Textfarbe in einem neuen Tab festzulegen, und die `ntp_background` Eigenschaft, um die Farbe eines neuen Tabs festzulegen ([Firefox-Bug 1347204](https://bugzil.la/1347204)).
- Themes können jetzt die Farben für Seitenleisten definieren, wie z.B. die Lesezeichen-Seitenleiste ([Firefox-Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften sind:
  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} erlaubt es Web-Erweiterungen, signierte Browser-Themen zu installieren und zu aktivieren ([Firefox-Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox-Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition experimenteller [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht es Ihnen, die Liste der installierten Suchmaschinen abzurufen und Suchvorgänge mit ihnen durchzuführen ([Firefox-Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter entgegen, der es Ihnen ermöglicht, verschiedene Optionen für die zurückgegebene Liste von Websites festzulegen ([Firefox-Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt die Mehrfachauswahl ([Firefox-Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt ist, wird das zurückgegebene `windows.Window`-Objekt nicht mit einer Liste von Tabs gefüllt, um die Leistung zu verbessern ([Firefox-Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswählungsstatus eines Tabs, indem `highlighted: true` im Parameter `updateProperties` eingeschlossen wird ([Firefox-Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswählungsstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox-Bug 1486050](https://bugzil.la/1486050)), indem sowohl `highlighted: true` als auch `active: false` im `updateProperties`-Parameter eingeschlossen wird.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox-Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}}-Eigenschaft spiegelt jetzt ordnungsgemäß wider, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind und {{WebExtAPIRef("tabs.highlight")}} unterstützt die Änderung des hervorgehobenen Status mehrerer Tabs ([Firefox-Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle`-Eigenschaft im `filter`-Objekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name wird beibehalten, aber als veraltet angesehen. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox-Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}}-Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention`-Eigenschaft des `changeInfo`-Objekts auf sich zieht ([Firefox-Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, auf das durch den `targetElementId` Parameter verwiesen wird, der das angeklickte Element identifiziert. Wenn die `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox-Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüpunkte zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüpunkten umzuschalten ([Firefox-Bug 1482529](https://bugzil.la/1482529)).
- Von der {{WebExtAPIRef("menus")}} API erstellte Elemente unterstützen jetzt Zugriffstasten ([Firefox-Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns`-Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch die, die normalerweise nicht in einem Übereinstimmungsmuster erlaubt sind ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Eintrag im Tab-Kontextmenü angeklickt wird, wird die ["activeTab" permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, auch wenn es sich nicht um den aktuell aktiven Tab handelt ([Firefox-Bug 1446956](https://bugzil.la/1446956)).

#### Weitere

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox-Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox-Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName`, und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox-Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Zustand des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}}-Enumeration definiert SameSite-Zustandswerte ([Firefox-Bug 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs explizit passen jetzt zum "data"-URL-Schema ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
