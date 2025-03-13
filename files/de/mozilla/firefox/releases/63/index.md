---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der Reiter "Fonts" im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Anzeigen und Bearbeiten der Schriftarteneinstellungen auf Ihrer Seite erleichtert. Siehe [Edit fonts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) für Details.
- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Infoleiste auf der Seite angezeigt ([Firefox Fehler 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt direkt nach der Konsolenausgabe angezeigt ([Firefox Fehler 1136299](https://bugzil.la/1136299)).
- Ein neues Symbol wurde zum Inhalt des [Network Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wann eine URL zu einem bekannten Tracker gehört — siehe [Sicherheitssymbole](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Fehler 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons auf der `about:debugging`-Seite nicht aufgeführt werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Fehler 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht und wir haben die Option hinzugefügt, das Ansichtsfenster links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox Fehler 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox Fehler 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernung

- Unterstützung für den `sidebar`-Link-Typ (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox Fehler 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die Pseudo-Klasse {{CSSxRef(":defined")}} wurde hinzugefügt ([Firefox Fehler 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde in [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox Fehler 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-präfixierter Pixel-Dichte @media queries](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) erneut aktiviert ([Firefox Fehler 1444139](https://bugzil.la/1444139)).
- Unterstützung für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die Eigenschaft {{CSSxRef("justify-content")}} hinzugefügt ([Firefox Fehler 1472843](https://bugzil.la/1472843)).
- Die `path()` Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox Fehler 1429298](https://bugzil.la/1429298)).
- Syntax-Verbesserungen aus der Media Queries Level 4 Spezifikation implementiert](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax_improvements_in_level_4) ([Firefox Fehler 1422225](https://bugzil.la/1422225)).
- Umbenennung der `offset-*` Eigenschaften in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox Fehler 1464782](https://bugzil.la/1464782)).
- Unterstützung für das [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienmerkmal hinzugefügt ([Firefox Fehler 1365045](https://bugzil.la/1365045), [Firefox Fehler 1475462](https://bugzil.la/1475462)).
- Flussbezogene Werte (`block`, `inline`) für die {{CSSxRef("resize")}} Eigenschaft hinzugefügt ([Firefox Fehler 1464786](https://bugzil.la/1464786)).
- Implementierte Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} ([Firefox Fehler 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo zutreffend) sind jetzt animierbar ([Firefox Fehler 1309752](https://bugzil.la/1309752)).

#### Entfernung

- Entfernung von `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end`; diese wurden wie oben beschrieben in `inset-*` umbenannt ([Firefox Fehler 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}} Eigenschaft wurde implementiert ([Firefox Fehler 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}} Methode wurde hinzugefügt ([Firefox Fehler 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt deutlich verbessert. Angenommen, `x` ist undefiniert und Sie versuchen auf `x.y` zuzugreifen, so gibt die Konsole nun anstelle von "TypeError: x is undefined" die beschreibendere Nachricht "x is undefined; can't access its "y" property" zurück ([x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type)) ([Firefox Fehler 1259822](https://bugzil.la/1259822)).

#### Entfernung

- Experimentelle Unterstützung für die WebAssembly Module IndexedDB Serialisierung wurde entfernt ([Firefox Fehler 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die APIs Shadow DOM ([Firefox Fehler 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Fehler 1471948](https://bugzil.la/1471948)) sind jetzt standardmäßig aktiviert; siehe [Web components](/de/docs/Web/API/Web_components) für mehr Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox Fehler 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und ist standardmäßig für alle Kanäle aktiviert ([Firefox Fehler 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); im Gegensatz zu Chrome ist `readText()` jedoch nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Schnittstelle wird jetzt unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox Fehler 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox Fehler 1476158](https://bugzil.la/1476158)):

  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die den `Animation`-Objekten `ready` und `finished` {{JSxRef("Promise")}}s spezifizieren.
  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaft [`effect`](/de/docs/Web/API/Animation/effect).
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die Methode [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) wurde implementiert ([Firefox Fehler 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte, [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird jetzt zu Kompatibilitätszwecken unterstützt ([Firefox Fehler 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Webkompatibilität zu verbessern, nun da sie Standard geworden ist ([Firefox Fehler 218415](https://bugzil.la/218415)). Aufgrund einiger Kompatibilitätsprobleme im Web (z.B. [Firefox Fehler 1479964](https://bugzil.la/1479964)) wurde diese jedoch in anderen als Nightly-Versionen schnell deaktiviert und hinter der `dom.window.event.enabled` Präferenz versteckt ([Firefox Fehler 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, selbst wenn es auf einem 64-Bit-Windows läuft ([Firefox Fehler 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 führten Links, die neue Fenster öffnen und `rel="noopener"` hatten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem aktivierten [`noopener`](/de/docs/Web/API/Window/open) Fenstermerkmal dazu, dass alle Fenstermerkmale standardmäßig deaktiviert waren, sodass Sie explizit alle gewünschten Standardmerkmale erneut aktivieren mussten. Jetzt haben diese Fenster denselben Satz von Merkmalen wie jedes andere Fenster, und Sie müssen alle, die Sie nicht wollen, explizit deaktivieren ([Firefox Fehler 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Handhabung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr`-Modifikator-Taste zuweist, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox Fehler 900750](https://bugzil.la/900750)).

#### Media, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, auch innerhalb desselben Inhaltsprozesses ([Firefox Fehler 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21 Datenformat für die Daten zu unterstützen, zusätzlich zum zuvor unterstützten älteren sctp-sdp-05 Format.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Knotentyp der Web Audio API hat jetzt eine Standardkanalanzahl von 2 statt 1, um die Spezifikation zu erfüllen ([Firefox Fehler 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen darauf basierenden Knotentypen) wirft jetzt die korrekte Ausnahme, wenn ein negativer Wert für die Knotenstartzeit angegeben wird. Dieser Fehler ist `RangeError` ([Firefox Fehler 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal erlaubten Werte für ein [`AudioParam`](/de/docs/Web/API/AudioParam) Objekt's [`value`](/de/docs/Web/API/AudioParam/value) wurden auf den minimalen negativen einfache Präzisions Fließkommawert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximalen positiven einfache Präzisions Fließkommawert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox Fehler 1476695](https://bugzil.la/1476695)).
- Die Methode [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType), die es ermöglicht, während eines aktiven Streams Codecs zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox Fehler 1481166](https://bugzil.la/1481166)).
- Die Methode [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde aktualisiert, um korrekt ein Array von Fließkommawerten zu akzeptieren, um die Werte des Parameters anzugeben, die sich im Laufe der Zeit ändern sollen. Zuvor wurde ein {{jsxref("Float32Array")}} benötigt ([Firefox Fehler 1421091](https://bugzil.la/1421091)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde auch aktualisiert, um korrekt einen `TypeError` zurückzugeben, wenn ein nicht endlicher Wert im `values` Array gefunden wird ([Firefox Fehler 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass der Wert des Parameters am Ende der angepassten Wertkurve auf den letzten Wert in der Liste der überzogenen Werte gesetzt wird, wenn die Dauer abläuft ([Firefox Fehler 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats` Wörterbuch wurde in `RTCRtpStreamStats` umbenannt, um mit anderen WebRTC Wörterbüchern und der Spezifikation konsistent zu sein ([Firefox Fehler 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `kind` Eigenschaft des `RTCRtpStreamStats` Wörterbuchs wurde hinzugefügt ([Firefox Fehler 1481851](https://bugzil.la/1481851)).
- Das `isRemote` Attribut des `RTCRtpStreamStats` Wörterbuchs ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird nun in der Konsole ausgegeben, wenn auf dieses Attribut zugegriffen wird. Siehe [diesen Blogbeitrag auf dem Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox Fehler 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS ermöglicht dies nicht leistungsintensive WebGL-Anwendungen und Applets, die leistungsarme GPU anstelle der leistungsstarken GPU in Multi-GPU-Systemen anzufordern ([Firefox Fehler 1349799](https://bugzil.la/1349799)).

#### Entfernung

- Die veralteten und nicht standardisierten, nur in Firefox verfügbaren Methoden [`Window.back()`](/de/docs/Web/API/Window/back) und [`Window.forward()`](/de/docs/Web/API/Window/forward) wurden entfernt. Bitte verwenden Sie die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) stattdessen ([Firefox Fehler 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Instanzen nicht mehr verfügbar, da sie potenziell zu Speicherlecks führen konnten ([Firefox Fehler 1264182](https://bugzil.la/1264182)).
- Da es ohnehin in der Spezifikation veraltet war, wurde die eingeschränkte Unterstützung für Doppler-Effekte auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener) Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, ebenso wie die `PannerNode` Methode `setVelocity()` ([Firefox Fehler 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}} Header ist implementiert und nicht länger hinter einer Präferenz versteckt ([Firefox Fehler 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Website-Symbole (Favicons) unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), sofern eine für die Website konfiguriert ist ([Firefox Fehler 1297156](https://bugzil.la/1297156)).
- Das CSP `script-src` Direktive's `'report-sample'` Ausdruck wird nun bei der Erstellung von Verletzungsberichten berücksichtigt. Diese Anweisung gibt an, dass ein kurzer Ausschnitt der Verletzungsstelle im Bericht enthalten sein sollte. Zuvor schloss Firefox immer diesen Ausschnitt ein ([Firefox Fehler 1473218](https://bugzil.la/1473218)).
- Firefox verwendet nun NSS 3.39 ([Firefox Fehler 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt jetzt eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities) in der `WebDriver:NewSession` Antwort zurück, die wahr ist, wenn das Browserfenster verschoben und in der Größe verändert werden kann, was z.B. für Firefox zutrifft, aber nicht für Mobilanwendungen ([Firefox Fehler 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Fähigkeit hinzugefügt, die es ermöglicht, ein bestimmtes [Prompt-Verhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation zu definieren ([Firefox Fehler 1264259](https://bugzil.la/1264259)).
- Die Behandlung von Benutzeraufforderungen wurde zu den `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` Befehlen hinzugefügt ([Firefox Fehler 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das `WebDriver:` Präfix wurden entfernt ([Firefox Fehler 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver-Spezifikation definiert ([Firefox Fehler 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokus-bezogene Ereignisse fehlten bei der Elementinteraktion, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox Fehler 1398111](https://bugzil.la/1398111)).
- Die Durchführung einer `pointerDown` und `pointerUp` Aktion in einer nachfolgenden Aktionssequenz konnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurücksetzte ([Firefox Fehler 1422583](https://bugzil.la/1422583)).
- Wiederholtes Ausführen von `pause` Aktionen konnte zu einem unendlichen Hang führen ([Firefox Fehler 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementesammlung von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursachen konnte ([Firefox Fehler 1447977](https://bugzil.la/1447977)).
- Um eine Race-Bedingung zu verhindern, warten sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert` Befehle nun, bis die Benutzeraufforderung geschlossen wurde ([Firefox Fehler 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, die vom Frame-Script ausgegeben wurden, waren nicht länger durch `MarionettePrefs.logLevel` eingeschränkt, sondern protokollierten alles ([Firefox Fehler 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` löste einen Fehler aus, wenn ein Screenshot eines Fensters aufgenommen wurde, das größer als 32767 Pixel in Breite oder Höhe war ([Firefox Fehler 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardwert der Benutzeraufforderung nicht, wenn der Text zum Senden eine leere Zeichenfolge ist ([Firefox Fehler 1486485](https://bugzil.la/1486485)).

### Sonstiges

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragstypen im angegebenen Array von beobachtenden Eintragstypen gefunden werden, oder wenn das Array leer oder fehlt. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox Fehler 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox Fehler 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-On-Entwickler

### API-Änderungen

#### Theming

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Abzeichen wird jetzt automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox Fehler 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels sind jetzt optional ([Firefox Fehler 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browseraktionen-Abzeichen abzurufen und einzustellen ([Firefox Fehler 1424620](https://bugzil.la/1424620)).
- Der `colors` Schlüssel des Themas in `manifest.json` unterstützt jetzt die Eigenschaft `ntp_text`, um die Textfarbe in einem neuen Tab und die Eigenschaft `ntp_background`, um die Farbe eines neuen Tabs festzulegen ([Firefox Fehler 1347204](https://bugzil.la/1347204)).
- Themes können jetzt die Farben für Seitenleisten, wie die Lesezeichen-Seitenleiste, definieren ([Firefox Fehler 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:

  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} erlaubt Web-Erweiterungen, signierte Browser-Themen zu installieren und zu aktivieren ([Firefox Fehler 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Fehler 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition von experimentellen [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Benutzeroberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht Ihnen, die Liste der installierten Suchmaschinen abzurufen und Suchvorgänge mit ihnen auszuführen ([Firefox Fehler 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter, der es Ihnen ermöglicht, verschiedene Optionen für die zurückgegebene Liste von Sites festzulegen ([Firefox Fehler 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Multi-Select ([Firefox Fehler 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — welches standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt wird, verhindert es, dass das zurückgegebene `windows.Window` Objekt mit einer Liste von Tabs belegt wird, um die Leistung zu verbessern ([Firefox Fehler 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs, indem Sie `highlighted: true` im `updateProperties` Parameter einschließen ([Firefox Fehler 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs, ohne den fokussierten Tab zu ändern, indem sowohl `highlighted: true` als auch `active: false` im `updateProperties` Parameter enthalten sind ([Firefox Fehler 1486050](https://bugzil.la/1486050)).
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Fehler 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft gibt jetzt korrekt an, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind und {{WebExtAPIRef("tabs.highlight")}} unterstützt das Ändern des hervorgehobenen Status mehrerer Tabs ([Firefox Fehler 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im `filter` Objekt, das in {{WebExtAPIRef("tabs.onUpdated")}} übergeben wurde, wurde in `isArticle` umbenannt. Der alte Name bleibt erhalten, ist jedoch veraltet. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox Fehler 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}} Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention`-Eigenschaft des `changeInfo`-Objekts erregt ([Firefox Fehler 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, das durch den `targetElementId` Parameter referenziert wird, das das angeklickte Element identifiziert. Wenn die `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox Fehler 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüelemente zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüelementen zu wechseln ([Firefox Fehler 1482529](https://bugzil.la/1482529)).
- Mit {{WebExtAPIRef("menus")}} erstellte Elemente unterstützen jetzt Zugriffstasten ([Firefox Fehler 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL Schema, sogar solche, die normalerweise in einem Übereinstimmungsmuster nicht erlaubt sind ([Firefox Fehler 1280370](https://bugzil.la/1280370)).
- Wenn ein Kontextmenüelement für Tabs angeklickt wird, wird die ["activeTab" Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, selbst wenn es sich nicht um den aktuell aktiven Tab handelt ([Firefox Fehler 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Fehler 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht jetzt das Filtern von spekulativen Verbindungen ([Firefox Fehler 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName`, und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox Fehler 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Status des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Aufzählung definiert die SameSite-Statuswerte ([Firefox Fehler 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs stimmen jetzt explizit mit dem "data" URL Schema überein ([Firefox Fehler 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
