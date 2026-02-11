---
title: Firefox 63 Versionshinweise für Entwickler
short-title: Firefox 63
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Reiter "Schriften" im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) beinhaltet jetzt einen Editor, der es einfach macht, die Einstellungen der Schriftarten auf Ihrer Seite anzusehen und zu bearbeiten. Weitere Informationen finden Sie unter [Schriften bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Barrierefreiheit-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Barrierefreiheit-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, [wird das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle sowie sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt unmittelbar nach der Konsolenausgabe angezeigt ([Firefox Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Icon wurde zu den Inhalten im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wenn eine URL zu einem bekannten Tracker gehört — siehe [Sicherheitsicons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der `about:debugging` Seite aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Bug 1425347](https://bugzil.la/1425347)).
- Die Werkzeugleiste im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht und wir haben die Möglichkeit hinzugefügt, den Viewport linksbündig auszurichten.
- Der Seiteninspektor enthält nun einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element ([Firefox Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding` Attribut des {{HTMLElement("img")}} Elements wurde hinzugefügt ([Firefox Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernungen

- Unterstützung für den Link-Typ `sidebar` (`rel="sidebar"`) wurde entfernt. Wenn ein Ankertag dieses Attribut enthält, wird es ignoriert ([Firefox Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}} Pseudo-Klasse wurde hinzugefügt ([Firefox Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox#the_gap_properties) hinzugefügt ([Firefox Bug 1398483](https://bugzil.la/1398483)).
- Wieder aktivierte Unterstützung für [webkit-präfixierte Dichte-Medienabfragen](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio) ([Firefox Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung für die [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) (Flexbox)-Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}} Eigenschaft wurde hinzugefügt ([Firefox Bug 1472843](https://bugzil.la/1472843)).
- Die `path()` Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox Bug 1429298](https://bugzil.la/1429298)).
- Syntaxverbesserungen der Media Queries Level 4 Spezifikation wurden implementiert, insbesondere [verschachtelte boolesche Ausdrücke](/de/docs/Web/CSS/Guides/Media_queries/Using#creating_complex_media_queries) und die [Bereichs-Syntax](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) ([Firefox Bug 1422225](https://bugzil.la/1422225)).
- `offset-*` Eigenschaften wurden umbenannt zu {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für die Medienfunktion [prefers-reduced-motion](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) wurde hinzugefügt ([Firefox Bug 1365045](https://bugzil.la/1365045), [Firefox Bug 1475462](https://bugzil.la/1475462)).
- Flussrelative Werte (`block`, `inline`) für die {{CSSxRef("resize")}} Eigenschaft wurden hinzugefügt ([Firefox Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} wurde implementiert ([Firefox Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) (wo zutreffend) sind jetzt animierbar ([Firefox Bug 1309752](https://bugzil.la/1309752)).

#### Entfernungen

- `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden zu `inset-*` umbenannt, wie oben beschrieben ([Firefox Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}} Eigenschaft wurde implementiert ([Firefox Bug 1472170](https://bugzil.la/1472170)).
- Die Methode {{JSxRef("Object.fromEntries()")}} wurde hinzugefügt ([Firefox Bug 1469019](https://bugzil.la/1469019)).
- Bei dem Versuch, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt wesentlich verbessert. In dem Fall, dass `x` undefiniert ist und Sie versuchen, auf `x.y` zuzugreifen, gibt die Konsole nun nicht mehr "TypeError: x ist undefined" aus, sondern stattdessen die detailliertere Meldung [x ist undefined; kann nicht auf seine "y" Eigenschaft zugreifen](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) ([Firefox Bug 1259822](https://bugzil.la/1259822)).

#### Entfernungen

- Experimentelle Unterstützung für die WebAssembly Modul IndexedDB Serialisierung wurde entfernt ([Firefox Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Bug 1471948](https://bugzil.la/1471948)) APIs sind standardmäßig aktiviert; siehe [Web-Komponenten](/de/docs/Web/API/Web_components) für Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig in allen Kanälen aktiviert ([Firefox Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); allerdings ist `readText()` im Gegensatz zu Chrome nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Schnittstelle wird nun unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) sind standardmäßig aktiviert (siehe [Firefox Bug 1476158](https://bugzil.la/1476158)):
  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `ready` und `finished` {{JSxRef("Promise")}}s des `Animation`-Objekts spezifizieren.
  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaft [`effect`](/de/docs/Web/API/Animation/effect).
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die Methode [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) wurde implementiert ([Firefox Bug 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht-standardisierte, [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird jetzt zu Kompatibilitätszwecken unterstützt ([Firefox Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Web-Kompatibilität zu verbessern, jetzt da sie zum Standard geworden ist ([Firefox Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Web-Kompatibilitätsprobleme (z.B. [Firefox Bug 1479964](https://bugzil.la/1479964)) wurde dies jedoch schnell in Nicht-Nightly-Kanälen deaktiviert und hinter der `dom.window.event.enabled` Voreinstellung versteckt ([Firefox Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, auch wenn sie auf einem 64-Bit-Windows ausgeführt wird ([Firefox Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 öffneten Links, die neue Fenster öffnen und `rel="noopener"` hatten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem aktivierten [`noopener`](/de/docs/Web/API/Window/open) Fenstermerkmal standardmäßig alle Fensterfunktionen deaktiviert, sodass Sie alle Standardfunktionen, die Sie wollten, explizit erneut aktivieren mussten. Jetzt haben diese Fenster denselben Satz von aktivierten Funktionen wie jedes andere Fenster, und Sie müssen explizit die ausschalten, die Sie nicht möchten ([Firefox Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Handhabung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr`-Modifikator-Taste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Der Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, selbst innerhalb desselben Inhaltsprozesses ([Firefox Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21 Datenformat für die Daten zusätzlich zu dem zuvor unterstützten älteren sctp-sdp-05 Format zu unterstützen.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Knoten für die Web Audio API hat jetzt eine standardmäßige Kanalanzahl von 2 statt 1, um mit der Spezifikation übereinzustimmen ([Firefox Bug 1413283](https://bugzil.la/1413283)).
- Das [Web Audio API](/de/docs/Web/API/Web_Audio_API) Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und in der Folge alle anderen darauf basierenden Knotentypen) löst jetzt die richtige Ausnahme aus, wenn ein negativer Wert für die Startzeit des Knotens angegeben wird. Dieser Fehler ist ein `RangeError` ([Firefox Bug 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal erlaubten Werte für das [`AudioParam`](/de/docs/Web/API/AudioParam) Objekt's [`value`](/de/docs/Web/API/AudioParam/value) wurden auf den minimalen negativen Fließkommawert mit Einzelpräzision (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximalen positiven Fließkommawert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox Bug 1476695](https://bugzil.la/1476695)).
- Die Methode [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType), die Ihnen ermöglicht, Codecs während eines aktiven Streams zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox Bug 1481166](https://bugzil.la/1481166)).
- Die Methode [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde aktualisiert, um korrekt ein Array von Fließkommazahlen zu akzeptieren, das die Werte des Parameters angibt, die im Laufe der Zeit geändert werden sollen. Zuvor erforderte sie ein {{jsxref("Float32Array")}} ([Firefox Bug 1421091](https://bugzil.la/1421091)).
- `AudioParam.setValueCurveAtTime()` wurde auch aktualisiert, um korrekt einen `TypeError` zurückzugeben, wenn ein nicht-finitiver Wert in dem `values` Array gefunden wird ([Firefox Bug 1472095](https://bugzil.la/1472095)).
- Zusätzlich wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter aufhört, der angegebenen Wertkurve zu folgen, nachdem die Dauer abgelaufen ist, der Wert des Parameters auf den letzten Wert in der Liste der Werte, die gekrümmt werden sollen, gesetzt wird ([Firefox Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats` Dictionary wurde zu `RTCRtpStreamStats` umbenannt, um konsistent mit anderen WebRTC Dictionaries und der Spezifikation zu sein ([Firefox Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `kind` Eigenschaft des `RTCRtpStreamStats` Dictionaries wurde hinzugefügt ([Firefox Bug 1481851](https://bugzil.la/1481851)).
- Die `isRemote` Eigenschaft des `RTCRtpStreamStats` Dictionaries ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Details finden Sie in [diesem Blogbeitrag auf dem Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) ([Firefox Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS ermöglicht dies WebGL-Anwendungen und -Applets, die nicht auf hohe Leistung abzielen, die Verwendung der stromsparenden GPU anstelle der hochleistungsfähigen GPU in Multi-GPU-Systemen anzufordern ([Firefox Bug 1349799](https://bugzil.la/1349799)).

#### Entfernungen

- Die veralteten und nicht standardisierten, nur in Firefox verfügbaren Methoden `Window.back()` und `Window.forward()` wurden entfernt. Bitte verwenden Sie stattdessen die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind nicht länger auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Instanzen verfügbar, da sie das Potenzial hatten, zu Speicherausnutzung zu führen ([Firefox Bug 1264182](https://bugzil.la/1264182)).
- Da sie in der Spezifikation sowieso nicht mehr unterstützt wird, wurde die begrenzte Unterstützung für Doppler-Effekte auf [`PannerNode`](/de/docs/Web/API/PannerNode) vom Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener) Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, zusammen mit der `PannerNode` Methode `setVelocity()` ([Firefox Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}} Header wurde implementiert und ist nicht länger hinter einer Präferenz versteckt ([Firefox Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Seitenfavicon-Icons unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), wenn eine für die Seite konfiguriert ist ([Firefox Bug 1297156](https://bugzil.la/1297156)).
- Das CSP `script-src` Richtliniendirektiv `'report-sample'` wird jetzt bei der Erstellung von Verletzungsberichten erkannt. Dieses Direktive zeigt an, dass eine kurze Probe des Ortes, an dem die Verletzung aufgetreten ist, im Bericht enthalten sein sollte. Bisher hat Firefox immer diese Probe enthalten ([Firefox Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt jetzt eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Reference/Classic/Capabilities) in der `WebDriver:NewSession`-Antwort zurück, die wahr ist, wenn das Browserfenster verschoben und in der Größe angepasst werden kann, was z.B. für Firefox, aber nicht für mobile Anwendungen der Fall ist ([Firefox Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Fähigkeit wurde hinzugefügt, die es ermöglicht, ein bestimmtes [Prompt-Verhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation zu definieren ([Firefox Bug 1264259](https://bugzil.la/1264259)).
- Die Behandlung von Benutzereingabeaufforderungen wurde zu den `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` Befehlen hinzugefügt ([Firefox Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das `WebDriver:`-Präfix wurden entfernt ([Firefox Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver Spezifikation definiert ([Firefox Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Beim Element-Interaktion fehlten fokusbezogene Ereignisse, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox Bug 1398111](https://bugzil.la/1398111)).
- Das Ausführen von `pointerDown` und `pointerUp` Aktionen in einer nachfolgenden Aktionsabfolge konnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurückgesetzt hat ([Firefox Bug 1422583](https://bugzil.la/1422583)).
- Das wiederholte Ausführen von `pause` Aktionen konnte zu einer endlosen Blockade führen ([Firefox Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementkollektion von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursachte ([Firefox Bug 1447977](https://bugzil.la/1447977)).
- Um Rennbedingungen zu vermeiden, warten sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert` Befehle jetzt, bis die Benutzereingabeaufforderung geschlossen wurde ([Firefox Bug 1479368](https://bugzil.la/1479368)).
- Die von der Frame-Skript emittierten Log-Einträge waren nicht länger durch `MarionettePrefs.logLevel` begrenzt sondern protokollierten alles ([Firefox Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` erzeugte einen Fehler beim Erstellen eines Screenshots eines Fensters, das größer als 32767 Pixel in Breite oder Höhe war ([Firefox Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardbenutzereingabewert nicht, wenn der zu sendende Text eine leere Zeichenkette war ([Firefox Bug 1486485](https://bugzil.la/1486485)).

### Sonstiges

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragstypen im angegebenen Array von zu beobachtenden Eintragstypen gefunden werden oder wenn das Array leer oder fehlt. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias von `application/x-suggestions+json` ([Firefox Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Gestaltung

- Die standardmäßige Textfarbe für {{WebExtAPIRef("browserAction")}} Badges wird jetzt automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit dem Hintergrund maximal zu erhöhen ([Firefox Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Keys sind jetzt optional ([Firefox Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browser-Aktions-Badges abzurufen und zu setzen ([Firefox Bug 1424620](https://bugzil.la/1424620)).
- Der `colors` Key des Themas in `manifest.json` unterstützt jetzt die `ntp_text` Eigenschaft, um die Textfarbe auf einer neuen Seite festzulegen, und die `ntp_background` Eigenschaft, um die Farbe einer neuen Seite festzulegen ([Firefox Bug 1347204](https://bugzil.la/1347204)).
- Themen können jetzt die Farben für Seitenleisten definieren, wie z.B. die Lesezeichen-Seitenleiste ([Firefox Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften sind:
  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht es Web-Erweiterungen, signierte Browser-Themen zu installieren und zu aktivieren ([Firefox Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Keys [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Bug 1472740](https://bugzil.la/1472740)). Dieser Key ermöglicht die Definition von experimentellen [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Key-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht es Ihnen, die Liste der installierten Suchmaschinen abzurufen und mit ihnen Suchen durchzuführen ([Firefox Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter entgegen, der es Ihnen ermöglicht, verschiedene Optionen für die zurückgegebene Liste der Sites festzulegen ([Firefox Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt die Mehrfachauswahl ([Firefox Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} beinhaltet jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — welches standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt wird, wird das zurückgegebene `windows.Window` Objekt nicht mit einer Liste von Tabs gefüllt, um die Leistung zu verbessern ([Firefox Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt nun die Änderung des Auswahlstatus eines Tabs, indem `highlighted: true` im `updateProperties` Parameter enthalten ist ([Firefox Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox Bug 1486050](https://bugzil.la/1486050)), indem sowohl `highlighted: true` als auch `active: false` im `updateProperties` Parameter enthalten sind.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft reflektiert nun korrekt, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind und {{WebExtAPIRef("tabs.highlight")}} unterstützt das Ändern des Hervorhebungsstatus von mehreren Tabs ([Firefox Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im `filter` Objekt, das in {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name wird beibehalten, ist jedoch veraltet. Diese Änderung wurde auf Firefox 62 aufgestuft ([Firefox Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}} Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention` Eigenschaft des `changeInfo` Objekts auf sich zieht ([Firefox Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, auf das der `targetElementId` Parameter verweist, der das angeklickte Element identifiziert. Ist der `targetElementId` nicht mehr gültig, gibt die Methode null zurück ([Firefox Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüpunkte zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüeinträgen zu wechseln ([Firefox Bug 1482529](https://bugzil.la/1482529)).
- Mit der {{WebExtAPIRef("menus")}} API erstellte Elemente unterstützen jetzt Zugriffstasten ([Firefox Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, sogar solche, die normalerweise in einem Übereinstimmungsmuster nicht erlaubt sind ([Firefox Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Tab-Kontextmenüpunkt angeklickt wird, wird die ["activeTab" Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, selbst wenn das nicht der aktuell aktive Tab ist ([Firefox Bug 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName`, und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 aufgestuft ([Firefox Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} umfasst jetzt eine Eigenschaft, die den SameSite-Status des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Enumeration definiert SameSite-Statuswerte ([Firefox Bug 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs stimmen jetzt explizit mit dem "data" URL-Schema überein ([Firefox Bug 1280370](https://bugzil.la/1280370)).
