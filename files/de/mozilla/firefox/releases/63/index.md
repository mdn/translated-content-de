---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die Entwickler betreffen. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Tab "Fonts" im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der es erleichtert, die Einstellungen der Schriften auf Ihrer Seite zu sehen und zu bearbeiten. Weitere Informationen finden Sie unter [Schriften bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1482454](https://bugzil.la/1482454)).
- Wenn Sie mit der Maus über ein Objekt im [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox Fehler 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt unmittelbar nach der Konsolenausgabe angezeigt ([Firefox Fehler 1136299](https://bugzil.la/1136299)).
- Ein neues Icon wurde im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wenn eine URL zu einem bekannten Tracker gehört — siehe [Sicherheits-Icons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Fehler 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-Ons nicht auf der `about:debugging` Seite aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Fehler 1425347](https://bugzil.la/1425347)).
- Die Werkzeugleiste im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, das Ansichtsfenster links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox Fehler 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox Fehler 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernungen

- Unterstützung für den `sidebar`-Link-Typ (`rel="sidebar"`) wurde entfernt. Wenn ein Ankertag dieses Attribut enthält, wird es ignoriert ([Firefox Fehler 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}} Pseudo-Klasse wurde hinzugefügt ([Firefox Fehler 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox Fehler 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-präfixierte Pixel-Dichte @media-Anfragen](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) wurde wieder aktiviert ([Firefox Fehler 1444139](https://bugzil.la/1444139)).
- Unterstützung für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox)-Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}}, sowie die {{CSSxRef("justify-content")}} Eigenschaft wurde hinzugefügt ([Firefox Fehler 1472843](https://bugzil.la/1472843)).
- Implementierung der `path()`-Funktion für {{CSSxRef("offset-path")}} ([Firefox Fehler 1429298](https://bugzil.la/1429298)).
- Implementierung der [Syntax-Verbesserungen aus der Media Queries Level 4 Spezifikation](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax_improvements_in_level_4) ([Firefox Fehler 1422225](https://bugzil.la/1422225)).
- Umbenennung der `offset-*` Eigenschaften in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox Fehler 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Feature hinzugefügt ([Firefox Fehler 1365045](https://bugzil.la/1365045), [Firefox Fehler 1475462](https://bugzil.la/1475462)).
- Hinzufügung von flussrelative Werte (`block`, `inline`) für die {{CSSxRef("resize")}} Eigenschaft ([Firefox Fehler 1464786](https://bugzil.la/1464786)).
- Implementierung des Flexbox-Layouts für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} ([Firefox Fehler 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo anwendbar) sind jetzt animierbar ([Firefox Fehler 1309752](https://bugzil.la/1309752)).

#### Entfernungen

- `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden in `inset-*` umbenannt, wie oben beschrieben ([Firefox Fehler 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}} Eigenschaft wurde implementiert ([Firefox Fehler 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}} Methode wurde hinzugefügt ([Firefox Fehler 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist jetzt die Fehlermeldung deutlich verbessert. Im Beispiel, wenn `x` undefiniert ist und Sie versuchen `x.y` zuzugreifen, gibt die Konsole nun die ausführlichere [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) aus anstelle von "TypeError: x is undefined" ([Firefox Fehler 1259822](https://bugzil.la/1259822)).

#### Entfernungen

- Experimentelle Unterstützung der WebAssembly Modul IndexedDB Serialisierung wurde entfernt ([Firefox Fehler 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox Fehler 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Fehler 1471948](https://bugzil.la/1471948)) APIs sind standardmäßig aktiviert; siehe [Web Components](/de/docs/Web/API/Web_components) für weitere Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox Fehler 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox Fehler 1461465](https://bugzil.la/1461465)). Wie bei Chrome, implementiert Firefox derzeit nur die [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText) Methoden; jedoch ist `readText()` im Gegensatz zu Chrome nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Schnittstelle wird jetzt unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox Fehler 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) sind jetzt standardmäßig aktiviert (siehe [Firefox Fehler 1476158](https://bugzil.la/1476158)):

  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `ready` und `finished` {{JSxRef("Promise")}}s des `Animation`-Objekts spezifizieren.
  - Die [`Animation`](/de/docs/Web/API/Animation) Objekt [`effect`](/de/docs/Web/API/Animation/effect) Eigenschaft.
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) Methode wurde implementiert ([Firefox Fehler 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht-standardisierte, [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird jetzt aus Kompatibilitätsgründen unterstützt ([Firefox Fehler 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Webkompatibilität zu verbessern, da sie jetzt standardisiert ist ([Firefox Fehler 218415](https://bugzil.la/218415)). Aufgrund einiger Webkompatibilitätsprobleme (z.B. [Firefox Fehler 1479964](https://bugzil.la/1479964)) wurde dies jedoch schnell in Nicht-Nightly-Kanälen deaktiviert und hinter der `dom.window.event.enabled` Voreinstellung versteckt ([Firefox Fehler 1493869](https://bugzil.la/1493869)).
- Um Firefox in Einklang mit Edge und Chrome zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, auch wenn es auf einem 64-Bit Windows ausgeführt wird ([Firefox Fehler 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 hatten Links, die neue Fenster öffneten und `rel="noopener"` hatten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit aktiviertem [`noopener`](/de/docs/Web/API/Window/open) Fenster-Feature standardmäßig alle Fenster-Features deaktiviert, so dass Sie alle Standard-Features, die Sie wünschen, explizit erneut aktivieren mussten. Jetzt haben diese Fenster den gleichen Satz an aktivierten Features wie jedes andere Fenster, und Sie müssen alle deaktivieren, die Sie nicht wünschen ([Firefox Fehler 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Handhabung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste auf die `AltGr` Modifikatortaste abbildet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem kürzlich eingeführten Verhalten in Chrome ([Firefox Fehler 900750](https://bugzil.la/900750)).

#### Media, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, sogar innerhalb desselben Inhaltsprozesses ([Firefox Fehler 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21 Datenformat zusätzlich zum zuvor unterstützten älteren sctp-sdp-05 Format zu unterstützen.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Knotentyp für die Web Audio API hat jetzt eine Standardkanalanzahl von 2 anstelle von 1, um der Spezifikation zu entsprechen ([Firefox Fehler 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen Knotentypen, die darauf basieren) werfen jetzt die richtige Ausnahme, wenn ein negativer Wert für die Knotenstartzeit angegeben wird. Dieser Fehler ist `RangeError` ([Firefox Fehler 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal erlaubten Werte für ein [`AudioParam`](/de/docs/Web/API/AudioParam) Objekt [`value`](/de/docs/Web/API/AudioParam/value) wurden geändert auf den minimalen negativen Einzelpräzisions-Fließkomma-Wert (-340.282.346.638.528.859.811.704.183.484.516.925.440) und den maximalen positiven Einzelpräzisions-Fließkomma-Wert (+340.282.346.638.528.859.811.704.183.484.516.925.440) ([Firefox Fehler 1476695](https://bugzil.la/1476695)).
- Die [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType) Methode, die es Ihnen erlaubt, Codecs während eines aktiven Streams zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox Fehler 1481166](https://bugzil.la/1481166)).
- Die [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) Methode wurde aktualisiert, um korrekt ein Array von Fließkommawerten zu akzeptieren, um die Werte des Parameters zu kennzeichnen, die sich im Laufe der Zeit ändern sollen. Zuvor erforderte sie ein {{jsxref("Float32Array")}} ([Firefox Fehler 1421091](https://bugzil.la/1421091)).
- `AudioParam.setValueCurveAtTime()` wurde auch aktualisiert, um korrekt einen `TypeError` zurückzugeben, wenn ein nicht-finitiver Wert im `values` Array gefunden wird ([Firefox Fehler 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter das folgende des spezifizierten Werteverlaufs nach Ablauf der Dauer beendet, der Wert des Parameters auf den letzten Wert in der Liste der Werte gesetzt wird, durch die gekrümmt werden soll ([Firefox Fehler 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats` Dictionary wurde in `RTCRtpStreamStats` umbenannt, um Konsistenz mit anderen WebRTC Dictionaries und der Spezifikation zu erreichen ([Firefox Fehler 1480498](https://bugzil.la/1480498)).
- Unterstützung für das `RTCRtpStreamStats` Dictionary `kind` Eigenschaft wurde hinzugefügt ([Firefox Fehler 1481851](https://bugzil.la/1481851)).
- Die `RTCRtpStreamStats` Dictionary `isRemote` Eigenschaft ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Siehe [diesen Blogbeitrag auf dem Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox Fehler 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS ermöglicht dies WebGL nicht-leistungsintensive Anwendungen und Applets die Low-Power-GPU anstelle der High-Power-GPU in Multi-GPU-Systemen anzufordern ([Firefox Fehler 1349799](https://bugzil.la/1349799)).

#### Entfernungen

- Die veralteten und nicht-standardisierten, nur in Firefox vorhandenen Methoden [`Window.back()`](/de/docs/Web/API/Window/back) und [`Window.forward()`](/de/docs/Web/API/Window/forward) wurden entfernt. Bitte verwenden Sie stattdessen die [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) Methoden ([Firefox Fehler 1479486](https://bugzil.la/1479486)).
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) Methoden sind nicht länger auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Instanzen verfügbar, da das Potenzial für Speicherlecks besteht ([Firefox Fehler 1264182](https://bugzil.la/1264182)).
- Da es in der Spezifikation ohnehin als veraltet markiert war, wurde die begrenzte Unterstützung für den Dopplereffekt auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener) Eigenschaften `dopplerFactor` und `speedOfSound` sowie die `PannerNode` Methode `setVelocity()` wurden entfernt ([Firefox Fehler 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}} Header ist implementiert und nicht mehr hinter einer Voreinstellung ([Firefox Fehler 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Seiten-Favicons unterliegen nun der [Content Security Policy](/de/docs/Web/HTTP/CSP), wenn eine für die Seite konfiguriert ist ([Firefox Fehler 1297156](https://bugzil.la/1297156)).
- Das CSP `script-src` Direktiven `'report-sample'` Ausdrücke werden jetzt erkannt, wenn Verletzungsberichte erzeugt werden. Diese Direktive gibt an, dass eine kurze Probe der Stelle, an der die Verletzung aufgetreten ist, in den Bericht aufgenommen werden soll. Zuvor hat Firefox immer diese Probe eingeschlossen ([Firefox Fehler 1473218](https://bugzil.la/1473218)).
- Firefox nutzt nun NSS 3.39 ([Firefox Fehler 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt jetzt eine `setWindowRect` [fähig](/de/docs/Web/WebDriver/Reference/Capabilities) in der `WebDriver:NewSession` Antwort zurück, die angibt, ob das Browserfenster positioniert und in der Größe verändert werden kann, was z.B. für Firefox der Fall ist, aber nicht für mobile Anwendungen ([Firefox Fehler 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Fähigkeit hinzugefügt, die es ermöglicht, ein spezielles [Prompt-Verhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation zu definieren ([Firefox Fehler 1264259](https://bugzil.la/1264259)).
- Die Handhabung von Benutzereingabeaufforderungen wurde zu den `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` Befehlen hinzugefügt ([Firefox Fehler 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne den `WebDriver:` Präfix wurden entfernt ([Firefox Fehler 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver-Spezifikation definiert ([Firefox Fehler 1470646](https://bugzil.la/1470646)).

#### Fehlerkorrekturen

- Fokusbezogene Ereignisse fehlten bei der Elementinteraktion, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox Fehler 1398111](https://bugzil.la/1398111)).
- Das Ausführen einer `pointerDown` und `pointerUp` Aktion in einer nachfolgenden Aktionssequenz könnte einen Doppelklick auslösen, weil `WebDriver:ReleaseActions` den Doppelklickzähler nicht zurückgesetzt hat ([Firefox Fehler 1422583](https://bugzil.la/1422583)).
- Das wiederholte Ausführen von `pause` Aktionen könnte zu einem unendlichen Hängen führen ([Firefox Fehler 1447449](https://bugzil.la/1447449)).
- Ein Bug wurde behoben, bei dem das Zurückgeben einer Elementesammlung von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler auslösen würde ([Firefox Fehler 1447977](https://bugzil.la/1447977)).
- Um eine Rennbedingung zu verhindern, warten jetzt sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert` Befehle, bis die Benutzereingabeaufforderung geschlossen wurde ([Firefox Fehler 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, die vom Rahmenskript gesendet wurden, waren nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern protokollierten alles ([Firefox Fehler 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` löste einen Fehler aus, wenn ein Screenshot von einem Fenster gemacht wurde, das größer als 32767 Pixel in der Breite oder Höhe war ([Firefox Fehler 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte nicht den Standardbenutzereingabetext, wenn der zu sendende Text eine leere Zeichenkette war ([Firefox Fehler 1486485](https://bugzil.la/1486485)).

### Andere

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragstypen in dem angegebenen Array der zu beobachtenden Eintragstypen gefunden werden, oder wenn das Array leer oder fehlt. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox Fehler 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox Fehler 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-On-Entwickler

### API-Änderungen

#### Theming

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Badges wird jetzt automatisch auf schwarz oder weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox Fehler 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels sind jetzt optional ([Firefox Fehler 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browseraktions-Badges zu bekommen und zu setzen ([Firefox Fehler 1424620](https://bugzil.la/1424620)).
- Der `colors` Schlüssel im `manifest.json` unterstützt jetzt die Eigenschaft `ntp_text`, um die Textfarbe in einem neuen Tab zu setzen, und die Eigenschaft `ntp_background`, um die Farbe eines neuen Tabs zu setzen ([Firefox Fehler 1347204](https://bugzil.la/1347204)).
- Themes können jetzt die Farben für Seitenleisten definieren, wie die Lesezeichen-Seitenleiste ([Firefox Fehler 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:

  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht es Web-Erweiterungen, signierte Browser-Themes zu installieren und zu aktivieren ([Firefox Fehler 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Fehler 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition von experimentellen [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Benutzeroberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} AP[I](/de/docs/Mozilla/Add-ons/WebExtensions/API/search) ermöglicht Ihnen, die Liste der installierten Suchmaschinen abzurufen und mit ihnen zu suchen ([Firefox Fehler 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter an, der Ihnen ermöglicht, verschiedene Optionen für die zurückgegebene Liste von Seiten zu setzen ([Firefox Fehler 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Multi-Select ([Firefox Fehler 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt wird, wird verhindert, dass das zurückgegebene `windows.Window` Objekt mit einer Liste von Tabs gefüllt wird, um die Leistung zu verbessern ([Firefox Fehler 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs durch Einschließen von `highlighted: true` im Parameter `updateProperties` ([Firefox Fehler 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs ohne Ändern des fokussierten Tabs ([Firefox Fehler 1486050](https://bugzil.la/1486050)) durch Einschließen von sowohl `highlighted: true` als auch `active: false` im Parameter `updateProperties`.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Fehler 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft spiegelt jetzt korrekt wider, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind und {{WebExtAPIRef("tabs.highlight")}} unterstützt das Ändern des Hervorhebungsstatus mehrerer Tabs ([Firefox Fehler 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im Filterobjekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name wird beibehalten, ist aber veraltet. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox Fehler 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}} Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention` Eigenschaft des `changeInfo` Objekts auf sich zieht ([Firefox Fehler 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, auf das durch den `targetElementId` Parameter verwiesen wird, der das angeklickte Element identifiziert. Wenn der `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox Fehler 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüelemente zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüelementen umzuschalten ([Firefox Fehler 1482529](https://bugzil.la/1482529)).
- Elemente, die mit der {{WebExtApiRef("menus")}} API erstellt wurden, unterstützen jetzt Zugangstasten ([Firefox Fehler 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, sogar jene, die normalerweise nicht in einem Übereinstimmungsmuster erlaubt sind ([Firefox Fehler 1280370](https://bugzil.la/1280370)).
- Wenn ein Tab-Kontextmenüelement angeklickt wird, wird die [„activeTab“-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, selbst wenn dies nicht der aktuell aktive Tab ist ([Firefox Fehler 1446956](https://bugzil.la/1446956)).

#### Andere

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Fehler 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox Fehler 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox Fehler 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Zustand des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Enumeration definiert SameSite-Zustandswerte ([Firefox Fehler 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs stimmen jetzt explizit mit dem „data“ URL-Schema überein ([Firefox Fehler 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
