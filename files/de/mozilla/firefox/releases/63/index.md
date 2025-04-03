---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Fonts-Tab im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Anzeigen und Bearbeiten der Einstellungen der Schriftarten auf Ihrer Seite erleichtert. Details finden Sie unter [Schriftarten bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) schweben, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox-Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt direkt nach der Konsolenausgabe angezeigt ([Firefox-Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Icon wurde im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wann eine URL zu einem bekannten Tracker gehört — siehe [Sicherheitsicons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der `about:debugging`-Seite aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox-Bug 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste des [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und es wurde die Option hinzugefügt, das Ansichtsfenster links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox-Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox-Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernungen

- Die Unterstützung für den `sidebar`-Linktyp (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox-Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die Pseudoklasse {{CSSxRef(":defined")}} wurde hinzugefügt ([Firefox-Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox-Bug 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-angepasste Pixel-Dichte @media Queries](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) wurde wieder aktiviert ([Firefox-Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung hinzugefügt für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}} und {{CSSxRef("align-items")}} sowie die Eigenschaft {{CSSxRef("justify-content")}} ([Firefox-Bug 1472843](https://bugzil.la/1472843)).
- Implementierung der `path()` Funktion für {{CSSxRef("offset-path")}} ([Firefox-Bug 1429298](https://bugzil.la/1429298)).
- [Syntaxverbesserungen aus der Media Queries Level 4 Spezifikation](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax_improvements_in_level_4) wurden implementiert ([Firefox-Bug 1422225](https://bugzil.la/1422225)).
- `offset-*` Eigenschaften wurden umbenannt in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}} und {{CSSxRef("inset-inline-end")}} ([Firefox-Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienfunktion wurde hinzugefügt ([Firefox-Bug 1365045](https://bugzil.la/1365045), [Firefox-Bug 1475462](https://bugzil.la/1475462)).
- Für die {{CSSxRef("resize")}} Eigenschaft wurden flussrelative Werte (`block`, `inline`) hinzugefügt ([Firefox-Bug 1464786](https://bugzil.la/1464786)).
- Implementierung des Flexbox-Layouts für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}} und {{CSSxRef("justify-content")}} ([Firefox-Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo zutreffend) sind jetzt animierbar ([Firefox-Bug 1309752](https://bugzil.la/1309752)).

#### Entfernungen

- `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end` wurden entfernt; diese wurden umbenannt in `inset-*`, wie oben beschrieben ([Firefox-Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Eigenschaft {{JSxRef("Symbol.prototype.description")}} wurde implementiert ([Firefox-Bug 1472170](https://bugzil.la/1472170)).
- Die Methode {{JSxRef("Object.fromEntries()")}} wurde hinzugefügt ([Firefox-Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt deutlich verbessert. Betrachten Sie den Fall, in dem `x` undefiniert ist und Sie versuchen, auf `x.y` zuzugreifen. Anstelle von "TypeError: x is undefined" gibt die Konsole jetzt die detailliertere [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) zurück ([Firefox-Bug 1259822](https://bugzil.la/1259822)).

#### Entfernungen

- Experimentelle Unterstützung für die Serialisierung von WebAssembly-Module in IndexedDB wurde entfernt ([Firefox-Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox-Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox-Bug 1471948](https://bugzil.la/1471948)) APIs wurden standardmäßig aktiviert. Siehe [Web Components](/de/docs/Web/API/Web_components) für mehr Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox-Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox-Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); jedoch ist `readText()` im Gegensatz zu Chrome nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die Schnittstelle [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) wird jetzt unterstützt. Sie ermöglicht es, Ereignisse zu senden, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox-Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox-Bug 1476158](https://bugzil.la/1476158)):

  - Die Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished) der [`Animation`](/de/docs/Web/API/Animation), die `ready` und `finished` {{JSxRef("Promise")}}s des `Animation`-Objekts angeben.
  - Die [`effect`](/de/docs/Web/API/Animation/effect) Eigenschaft des [`Animation`](/de/docs/Web/API/Animation) Objekts.
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die Methode [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) wurde implementiert ([Firefox-Bug 1469592](https://bugzil.la/1469592)).
- Die historische, vorher nicht standardisierte, Eigenschaft [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) wird jetzt aus Kompatibilitätsgründen unterstützt ([Firefox-Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Web-Kompatibilität zu verbessern, da sie jetzt standardisiert wurde ([Firefox-Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Webkompatibilitätsprobleme (z.B. [Firefox-Bug 1479964](https://bugzil.la/1479964)) wurde dies jedoch schnell in Nicht-Nightly-Kanälen deaktiviert, versteckt hinter der `dom.window.event.enabled` Voreinstellung ([Firefox-Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, selbst wenn sie auf 64-Bit-Windows läuft ([Firefox-Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 hatten Links, die neue Fenster mit `rel="noopener"` öffneten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem Fensterfeature [`noopener`](/de/docs/Web/API/Window/open) standardmäßig alle Fensterfeatures deaktiviert, sodass Sie alle gewünschten Standardfeatures explizit wieder aktivieren mussten. Jetzt haben diese Fenster das gleiche Set an aktivierten Features wie jedes andere Fenster, und Sie müssen explizit jede deaktivieren, die Sie nicht wünschen ([Firefox-Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Handhabung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr` Modifikatortaste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Diese Verhaltensweise entspricht der jüngst in Chrome eingeführten ([Firefox-Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, selbst innerhalb desselben Inhaltsprozesses ([Firefox-Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21-Datenformat neben dem zuvor unterstützten älteren sctp-sdp-05-Datenformat zu unterstützen.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Knotentyp für die Web Audio API hat jetzt eine Standardkanalanzahl von 2 statt 1, um der Spezifikation zu entsprechen ([Firefox-Bug 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen Knotentypen darauf basierend) werfen jetzt die korrekte Ausnahme, wenn ein negativer Wert für die Startzeit des Knotens angegeben wird. Dieser Fehler ist `RangeError` ([Firefox-Bug 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal zulässigen Werte für den [`value`](/de/docs/Web/API/AudioParam/value) eines [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts wurden auf den minimalen negativen Einzelpräzisions-Gleitkommawert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximalen positiven Einzelpräzisions-Gleitkommawert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox-Bug 1476695](https://bugzil.la/1476695)).
- Die Methode [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType), die es Ihnen ermöglicht, die Codecs während eines aktiven Streams zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox-Bug 1481166](https://bugzil.la/1481166)).
- Die Methode [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde aktualisiert, um korrekt ein Array von Gleitkommawerten zu akzeptieren, um die Werte des Parameters zu ändern. Zuvor erforderte es ein {{jsxref("Float32Array")}} ([Firefox-Bug 1421091](https://bugzil.la/1421091)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde auch aktualisiert, um einen ordnungsgemäßen `TypeError` zurückzugeben, wenn ein nicht-finitiver Wert in der `values`-Array gefunden wird ([Firefox-Bug 1472095](https://bugzil.la/1472095)).
- Zusätzlich wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter dem angegebenen Werteverlauf nach Ablauf der Dauer folgt, der Wert des Parameters auf den letzten Wert in der Liste der zu durchlaufenden Werte gesetzt wird ([Firefox-Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats`-Wörterbuch wurde in `RTCRtpStreamStats` umbenannt, um Konsistenz mit anderen WebRTC-Wörterbüchern und der Spezifikation zu gewährleisten ([Firefox-Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für das `kind`-Eigenschaft des `RTCRtpStreamStats` Wörterbuchs wurde hinzugefügt ([Firefox-Bug 1481851](https://bugzil.la/1481851)).
- Die `isRemote`-Eigenschaft des `RTCRtpStreamStats` Wörterbuchs ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird nun in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Weitere Informationen finden Sie [in diesem Blogbeitrag auf dem Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) ([Firefox-Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Unter macOS ermöglicht dies WebGL-nicht-leistungsintensiven Anwendungen und Applets, die Low-Power-GPU anstelle der High-Power-GPU in Multi-GPU-Systemen anzufordern ([Firefox-Bug 1349799](https://bugzil.la/1349799)).

#### Entfernungen

- Die veralteten und nicht-standardmäßigen, Firefox-eigenen Methoden [`Window.back()`](/de/docs/Web/API/Window/back) und [`Window.forward()`](/de/docs/Web/API/Window/forward) wurden entfernt. Bitte verwenden Sie die [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) Methoden stattdessen ([Firefox-Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen nicht mehr verfügbar, da sie das Potenzial für Speicherlecks hatten ([Firefox-Bug 1264182](https://bugzil.la/1264182)).
- Da es ohnehin in der Spezifikation veraltet war, wurde die begrenzte Unterstützung für Doppler-Effekte auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener) Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, zusammen mit der `PannerNode` Methode `setVelocity()` ([Firefox-Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}} Header ist implementiert und nicht länger hinter einer Voreinstellung versteckt ([Firefox-Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Site-Favicons sind jetzt Gegenstand der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), wenn eine für die Seite konfiguriert ist ([Firefox-Bug 1297156](https://bugzil.la/1297156)).
- CSP `script-src` Direktive `'report-sample'` Ausdruck wird jetzt erkannt, wenn Verletzungsberichte erstellt werden. Diese Direktive gibt an, dass eine kurze Probe der Stelle, an der die Verletzung aufgetreten ist, in den Bericht aufgenommen werden sollte. Zuvor hat Firefox diese Probe immer einbezogen ([Firefox-Bug 1473218](https://bugzil.la/1473218)).
- Firefox nutzt jetzt NSS 3.39 ([Firefox-Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt nun eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities) in der `WebDriver:NewSession` Antwort zurück, die true ist, wenn das Browser-Fenster repositioniert und die Größe geändert werden kann, was z.B. bei Firefox, aber nicht bei mobilen Anwendungen der Fall ist ([Firefox-Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Funktion wurde hinzugefügt, die ein bestimmtes [Eingabeaufforderungsverhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation ermöglicht ([Firefox-Bug 1264259](https://bugzil.la/1264259)).
- Die Bearbeitung von Benutzeraufforderungen wurde den `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` Kommandos hinzugefügt ([Firefox-Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlspunkte ohne das `WebDriver:` Präfix wurden entfernt ([Firefox-Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver-Spezifikation definiert ([Firefox-Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokus-bezogene Ereignisse fehlten bei Elementinteraktionen, wenn Firefox nicht als oberstes Fenster ausgeführt wurde ([Firefox-Bug 1398111](https://bugzil.la/1398111)).
- Das Ausführen einer `pointerDown` und `pointerUp` Aktion in einer nachfolgenden Aktionssequenz konnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurücksetzte ([Firefox-Bug 1422583](https://bugzil.la/1422583)).
- Mehrfaches Ausführen von `pause` Aktionen konnte zu einer unendlichen Hänge führen ([Firefox-Bug 1447449](https://bugzil.la/1447449)).
- Ein Bug wurde behoben, bei dem das Zurückgeben einer Elementkollektion von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursachen konnte ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Um eine Wettlaufsituation zu vermeiden, warten die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` jetzt, bis die Benutzeraufforderung geschlossen wurde ([Firefox-Bug 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, die vom Frame-Skript ausgegeben wurden, waren nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern protokollierten alles ([Firefox-Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` löste einen Fehler aus, wenn ein Screenshot eines Fensters gemacht wurde, das breiter oder höher als 32767 Pixel war ([Firefox-Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` hat den Standardwert der Benutzeraufforderung nicht ersetzt, wenn der zu sendende Text eine leere Zeichenfolge war ([Firefox-Bug 1486485](https://bugzil.la/1486485)).

### Andere

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragstypen in dem angegebenen Array von zu beobachtenden Eintragstypen gefunden werden, oder wenn das Array leer oder fehlend ist. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox-Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox-Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Thematisierung

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Badges wird jetzt automatisch auf schwarz oder weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox-Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels sind jetzt optional ([Firefox-Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browseraktionsabzeichen abzurufen und zu setzen ([Firefox-Bug 1424620](https://bugzil.la/1424620)).
- Der `colors` Schlüssel des Themas in `manifest.json` unterstützt jetzt die Eigenschaft `ntp_text`, um die Textfarbe in einem neuen Tab zu setzen, und die Eigenschaft `ntp_background`, um die Farbe eines neuen Tabs zu setzen ([Firefox-Bug 1347204](https://bugzil.la/1347204)).
- Themen können jetzt die Farben für Sidebars definieren, wie z.B. die Lesezeichen-Sidebar ([Firefox-Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:

  - `sidebar`: Die Hintergrundfarbe für Sidebars.
  - `sidebar_text`: Die Textfarbe für Sidebars.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Sidebar.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Sidebar.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht es Web-Erweiterungen, signierte Browserthemen zu installieren und zu aktivieren ([Firefox-Bug 1369209](https://bugzil.la/1369209)).
- Der Manifestspeicherplatz [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox-Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition experimenteller [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht es Ihnen, die Liste der installierten Suchmaschinen abzurufen und mit ihnen Suchvorgänge durchzuführen ([Firefox-Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter entgegen, mit dem Sie verschiedene Optionen für die zurückgegebene Liste der Webseiten festlegen können ([Firefox-Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt nun Multi-Select ([Firefox-Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo`-Objekt — `populate` —, das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt wird, wird das zurückgegebene `windows.Window`-Objekt nicht mit einer Liste der Tabs gefüllt, um die Leistung zu verbessern ([Firefox-Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlsstatus eines Tabs durch Einfügen von `highlighted: true` im `updateProperties` Param ([Firefox-Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlsstatus eines Tabs ohne Änderung des fokussierten Tabs ([Firefox-Bug 1486050](https://bugzil.la/1486050)) durch Einfügen von sowohl `highlighted: true` als auch `active: false` im `updateProperties` Param.
- {{WebExtAPIRef("tabs.query")}} liefert jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten, wenn mehrere Tabs ausgewählt sind ([Firefox-Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft widerspiegelt jetzt korrekt, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind, und {{WebExtAPIRef("tabs.highlight")}} unterstützt die Änderung des Status mehrerer Tabs ([Firefox-Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im `filter` Objekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name bleibt erhalten, ist jedoch veraltet. Diese Änderung wurde auf Firefox 62 überführt ([Firefox-Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}} Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention` Eigenschaft des `changeInfo` Objekts auf sich zieht ([Firefox-Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, das durch den `targetElementId` Parameter referenziert wird, der das angeklickte Element identifiziert. Wenn `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox-Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es jetzt, unsichtbare Menüeinträge zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es, die Sichtbarkeit von Menüeinträgen zu ändern ([Firefox-Bug 1482529](https://bugzil.la/1482529)).
- Elemente, die mit der {{WebExtAPIRef("menus")}} API erstellt wurden, unterstützen jetzt Zugriffstasten ([Firefox-Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch solche, die normalerweise nicht in einem Übereinstimmungsmuster erlaubt sind ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Tab-Kontext-Menüelement angeklickt wird, wird die ["activeTab" Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab erteilt, selbst wenn es nicht der aktuell aktive Tab ist ([Firefox-Bug 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox-Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es jetzt, nach spekulativen Verbindungen zu filtern ([Firefox-Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 überführt ([Firefox-Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Status des Cookies anzeigt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Aufzählung definiert Werte des SameSite-Status ([Firefox-Bug 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs passen jetzt explizit zum "data" URL-Schema ([Firefox-Bug 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
