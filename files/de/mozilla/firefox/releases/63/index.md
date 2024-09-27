---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die für Entwickler relevant sind. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Schriftarten-Tab im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Ansehen und Bearbeiten der Schriftarteneinstellungen Ihrer Seite erleichtert. Details finden Sie unter [Schriftarten bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1482454](https://bugzil.la/1482454)).
- Wenn Sie mit der Maus über ein Objekt im [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox Fehler 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt direkt nach der Konsolenausgabe angezeigt ([Firefox Fehler 1136299](https://bugzil.la/1136299)).
- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) wurde ein neues Symbol hinzugefügt, um anzuzeigen, wann eine URL zu einem bekannten Tracker gehört — siehe [Sicherheitssymbole](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Fehler 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Addons nicht auf der `about:debugging`-Seite aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Fehler 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste des [Responsive Design Modes](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, das Ansichtsfenster linksbündig auszurichten.
- Der Seiteninspektor enthält einen [Link zur Klassen-Definition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox Fehler 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox Fehler 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernt

- Die Unterstützung für den `sidebar`-Link-Typ (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox Fehler 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}} Pseudo-Klasse wurde hinzugefügt ([Firefox Fehler 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox Fehler 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-vorfixierte Pixeldichte @media-Abfragen](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) wurde wieder aktiviert ([Firefox Fehler 1444139](https://bugzil.la/1444139)).
- Unterstützung für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}} Eigenschaft wurde hinzugefügt ([Firefox Fehler 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox Fehler 1429298](https://bugzil.la/1429298)).
- [Syntax-Verbesserungen aus der Media Queries Level 4 Spezifikation](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax_improvements_in_level_4) wurden implementiert ([Firefox Fehler 1422225](https://bugzil.la/1422225)).
- Umbenennung von `offset-*` -Eigenschaften in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox Fehler 1464782](https://bugzil.la/1464782)).
- Unterstützung für das [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Feature hinzugefügt ([Firefox Fehler 1365045](https://bugzil.la/1365045), [Firefox Fehler 1475462](https://bugzil.la/1475462)).
- Fließrichtung-relative Werte (`block`, `inline`) für die {{CSSxRef("resize")}}-Eigenschaft wurden hinzugefügt ([Firefox Fehler 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} wurde implementiert ([Firefox Fehler 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo angebracht) sind jetzt animierbar ([Firefox Fehler 1309752](https://bugzil.la/1309752)).

#### Entfernt

- Entfernt `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end`; diese wurden wie oben beschrieben in `inset-*` umbenannt ([Firefox Fehler 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Eigenschaft {{JSxRef("Symbol.prototype.description")}} wurde implementiert ([Firefox Fehler 1472170](https://bugzil.la/1472170)).
- Die Methode {{JSxRef("Object.fromEntries()")}} wurde hinzugefügt ([Firefox Fehler 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt viel verbessert. Im Fall, dass `x` nicht definiert ist und Sie versuchen, auf `x.y` zuzugreifen, gibt die Konsole jetzt statt "TypeError: x ist undefiniert" die aussagekräftigere Meldung [x ist undefined; kann auf seine "y"-Eigenschaft nicht zugreifen](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) zurück ([Firefox Fehler 1259822](https://bugzil.la/1259822)).

#### Entfernt

- Experimentelle Unterstützung der WebAssembly Modul IndexedDB Serialisierung wurde entfernt ([Firefox Fehler 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox Fehler 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Fehler 1471948](https://bugzil.la/1471948)) APIs wurden standardmäßig aktiviert; siehe [Web-Komponenten](/de/docs/Web/API/Web_components) für weitere Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox Fehler 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und für alle Kanäle standardmäßig aktiviert ([Firefox Fehler 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); jedoch ist `readText()` im Gegensatz zu Chrome nur in [Browser-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Schnittstelle wird jetzt unterstützt. Sie erlaubt das Senden von Ereignissen, wenn gegen die {{HTTPHeader("Content-Security-Policy")}} verstoßen wird ([Firefox Fehler 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox Fehler 1476158](https://bugzil.la/1476158)):

  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `Promise`s des `Animation` Objekts angeben.
  - Die [`Animation`](/de/docs/Web/API/Animation) Objekteigenschaft [`effect`](/de/docs/Web/API/Animation/effect).
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die Methode [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) wurde implementiert ([Firefox Fehler 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte, [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird jetzt zu Kompatibilitätszwecken unterstützt ([Firefox Fehler 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Webkompatibilität zu verbessern, da sie jetzt standardisiert ist ([Firefox Fehler 218415](https://bugzil.la/218415)). Aufgrund einiger Kompatibilitätsprobleme im Web (z.B. [Firefox Fehler 1479964](https://bugzil.la/1479964)) wurde dies jedoch schnell in Nicht-Nightly-Kanälen deaktiviert und hinter dem `dom.window.event.enabled`-Preference versteckt ([Firefox Fehler 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, auch wenn sie auf einem 64-Bit-Windows-Betriebssystem ausgeführt wird ([Firefox Fehler 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 öffneten Links, die neue Fenster öffneten und `rel="noopener"` besaßen, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit der aktivierten [`noopener`](/de/docs/Web/API/Window/open) Fensterfunktion standardmäßig alle Fensterfunktionen deaktiviert, sodass Sie explizit alle Standardfunktionen, die Sie wollten, wieder aktivieren mussten. Jetzt haben diese Fenster den gleichen Satz von Funktionen aktiviert wie jedes andere Fenster, und Sie müssen explizit alle deaktivieren, die Sie nicht möchten ([Firefox Fehler 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Handhabung der `Alt` Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt` Taste der `AltGr` Modifier-Taste zuweist, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` angegeben. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox Fehler 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, selbst wenn dieser im selben Inhaltsprozess stattfindet ([Firefox Fehler 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21 Datenformat für Daten zu unterstützen, zusätzlich zu dem älteren sctp-sdp-05 Format, das zuvor unterstützt wurde.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Knotentyp für die Web Audio API hat jetzt eine Standardkanalanzahl von 2 statt 1, um der Spezifikation zu entsprechen ([Firefox Fehler 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen Knotentypen, die darauf basieren) werfen jetzt die korrekte Ausnahme, wenn ein negativer Wert für die Startzeit des Knotens angegeben wird. Dieser Fehler ist `RangeError` ([Firefox Fehler 1413284](https://bugzil.la/1413284)).
- Die minimalen und maximalen erlaubten Werte für das [`AudioParam`](/de/docs/Web/API/AudioParam) Objekt [`value`](/de/docs/Web/API/AudioParam/value) wurden auf den minimalen negativen Single-Precision Fließkommawert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximalen positiven Single-Precision Fließkommawert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox Fehler 1476695](https://bugzil.la/1476695)).
- Die Methode [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType), die es ermöglicht, Codecs während eines aktiven Streams zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox Fehler 1481166](https://bugzil.la/1481166)).
- Die [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) Methode wurde aktualisiert, um korrekt ein Array von Fließkommawerten zu akzeptieren, das die Werte des Parameters angibt, die sich im Laufe der Zeit ändern sollen. Zuvor erforderte sie ein {{jsxref("Float32Array")}} ([Firefox Fehler 1421091](https://bugzil.la/1421091)).
- Die Methode [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde auch aktualisiert, um korrekt einen passenden `TypeError` zurückzugeben, wenn ein nicht-finitiver Wert im `values`-Array gefunden wird ([Firefox Fehler 1472095](https://bugzil.la/1472095)).
- Zusätzlich wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter den angegebenen Werteverlauf nach Ablauf der Dauer beendet, der Wert des Parameters auf den letzten Wert in der Liste der zu kurvenden Werte gesetzt wird ([Firefox Fehler 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats` Wörterbuch wurde zu [`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats) umbenannt, um Konsistenz mit anderen WebRTC-Wörterbüchern und der Spezifikation zu erreichen ([Firefox Fehler 1480498](https://bugzil.la/1480498)).
- Unterstützung für das `RTCRtpStreamStats` Wörterbuchs [`kind`](/de/docs/Web/API/RTCRtpStreamStats/kind) Eigenschaft wurde hinzugefügt ([Firefox Fehler 1481851](https://bugzil.la/1481851)).
- Die `RTCRtpStreamStats` Wörterbuch `isRemote`-Eigenschaft ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Siehe [diesen Blogbeitrag im Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox Fehler 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS erlaubt dies WebGL-nicht-leistungskritischen Anwendungen und Applets, die Low-Power-GPU anstelle der High-Power-GPU in Multi-GPU-Systemen anzufordern ([Firefox Fehler 1349799](https://bugzil.la/1349799)).

#### Entfernt

- Die veralteten und nicht standardisierten, nur in Firefox vorhandenen Methoden [`Window.back()`](/de/docs/Web/API/Window/back) und [`Window.forward()`](/de/docs/Web/API/Window/forward) wurden entfernt. Bitte verwenden Sie die [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) Methoden stattdessen ([Firefox Fehler 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Instanzen nicht mehr verfügbar, da sie potenziell Speicherspeicherlecks verursachen könnten ([Firefox Fehler 1264182](https://bugzil.la/1264182)).
- Da er ohnehin in der Spezifikation veraltet war, wurde die eingeschränkte Unterstützung von Doppler-Effekten auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Auch die [`AudioListener`](/de/docs/Web/API/AudioListener) Eigenschaften `dopplerFactor` und `speedOfSound` sowie die `PannerNode` Methode `setVelocity()` wurden entfernt ([Firefox Fehler 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}} Header ist implementiert und nicht mehr hinter einem Präferenz versteckt ([Firefox Fehler 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Seitensymbole (Favicons) unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/CSP), wenn eine für die Seite konfiguriert ist ([Firefox Fehler 1297156](https://bugzil.la/1297156)).
- Die CSP `script-src` Direktive `'report-sample'` Ausdruck wird jetzt bei der Generierung von Verletzungsberichten erkannt. Diese Direktive gibt an, dass ein kurzer Ausschnitt der Verletzungsstelle im Bericht enthalten sein sollte. Bisher hat Firefox diesen Auszug immer einbezogen ([Firefox Fehler 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox Fehler 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt jetzt eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Capabilities) in der `WebDriver:NewSession` Antwort zurück, die angibt, ob das Browserfenster verschoben und in der Größe geändert werden kann, was z.B. für Firefox, aber nicht für mobile Anwendungen der Fall ist ([Firefox Fehler 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Fähigkeit hinzugefügt, die es ermöglicht, ein spezifisches [Eingabeverhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation zu definieren ([Firefox Fehler 1264259](https://bugzil.la/1264259)).
- Das Handling von Benutzereingaben wurde zu den `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` Befehlen hinzugefügt ([Firefox Fehler 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehls-Endpunkte ohne das Präfix `WebDriver:` wurden entfernt ([Firefox Fehler 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` wie in der WebDriver-Spezifikation definiert ([Firefox Fehler 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Schwerpunktbezogene Ereignisse fehlten bei der Interaktion mit Elementen, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox Fehler 1398111](https://bugzil.la/1398111)).
- Das Ausführen einer `pointerDown` und `pointerUp` Aktion in einer nachfolgenden Aktionssequenz konnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurückgesetzt hatte ([Firefox Fehler 1422583](https://bugzil.la/1422583)).
- Wiederholtes Ausführen von `pause` Aktionen konnte ein unendliches Hängenbleiben verursachen ([Firefox Fehler 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementesammlung von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursachen könnte ([Firefox Fehler 1447977](https://bugzil.la/1447977)).
- Um eine Wettkampfbedingung zu verhindern, warten jetzt sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert` Befehle, bis die Benutzereingabe geschlossen ist ([Firefox Fehler 1479368](https://bugzil.la/1479368)).
- Die von dem Frame-Skript ausgegebenen Protokolleinträge waren nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern alles wurde protokolliert ([Firefox Fehler 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` löste einen Fehler aus, wenn versucht wurde, einen Screenshot eines Fensters zu machen, das breiter oder höher als 32767 Pixel ist ([Firefox Fehler 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardwert der Benutzereingabe nicht, wenn der zu sendende Text eine leere Zeichenkette war ([Firefox Fehler 1486485](https://bugzil.la/1486485)).

### Sonstiges

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, es tut jetzt nichts, wenn keine gültigen Eintragstypen in dem angegebenen Array der zu beobachtenden Eintragstypen gefunden werden oder wenn das Array leer oder fehlt. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox Fehler 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/OpenSearch), akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox Fehler 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Theming

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Badges wird jetzt automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox Fehler 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifests sind jetzt optional ([Firefox Fehler 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen Ihnen, die Textfarbe von Browser-Aktionsbadges abzurufen und festzulegen ([Firefox Fehler 1424620](https://bugzil.la/1424620)).
- Der `theme` Schlüssel in `manifest.json` unterstützt nun die `ntp_text` Eigenschaft, um die Textfarbe in einem neuen Tab festzulegen, und die `ntp_background` Eigenschaft, um die Farbe eines neuen Tabs zu setzen ([Firefox Fehler 1347204](https://bugzil.la/1347204)).
- Themes können jetzt die Farben für Seitenleisten, wie die Lesezeichen-Seitenleiste, definieren ([Firefox Fehler 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:

  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht Web-Erweiterungen die Installation und Aktivierung von signierten Browser-Themes ([Firefox Fehler 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Fehler 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition von experimentellen [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} AP[I](/de/docs/Mozilla/Add-ons/WebExtensions/API/search) ermöglicht Ihnen, die Liste der installierten Suchmaschinen abzurufen und Suchvorgänge mit ihnen durchzuführen ([Firefox Fehler 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} akzeptiert jetzt einen `options` Parameter, der es Ihnen ermöglicht, verschiedene Optionen für die zurückgegebene Liste von Websites festzulegen ([Firefox Fehler 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Multi-Select ([Firefox Fehler 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt wird, wird das zurückgegebene `windows.Window` Objekt nicht mit einer Liste von Tabs gefüllt, um die Leistung zu verbessern ([Firefox Fehler 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlstatus eines Tabs, indem `highlighted: true` im `updateProperties` Parameter enthalten ist ([Firefox Fehler 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlstatus eines Tabs, ohne die Fokussierung des Tabs zu ändern ([Firefox Fehler 1486050](https://bugzil.la/1486050)) indem sowohl `highlighted: true` als auch `active: false` im `updateProperties` Parameter enthalten sind.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Fehler 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft reflektiert jetzt korrekt, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind und {{WebExtAPIRef("tabs.highlight")}} unterstützt die Änderung des hervorgehobenen Status mehrerer Tabs ([Firefox Fehler 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im `filter` Objekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name bleibt erhalten, ist jedoch veraltet. Diese Änderung wurde in Firefox 62 übernommen ([Firefox Fehler 1461695](https://bugzil.la/1461695)).
- Die {{WebExtAPIRef('tabs.onUpdated')}} Veranstaltung kann genutzt werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers durch das `attention`-Feld des `changeInfo` Objekts auf sich zieht ([Firefox Fehler 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, auf das durch den `targetElementId` Parameter referenziert wird, der das geklickte Element identifiziert. Wenn `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox Fehler 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen nun unsichtbare Menüelemente zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menu-Elementen umzuschalten ([Firefox Fehler 1482529](https://bugzil.la/1482529)).
- Mit der {{WebExtAPIRef("menus")}} API erstellte Elemente unterstützen jetzt Zugangsschlüssel ([Firefox Fehler 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, selbst diejenigen, die normalerweise in einem Schema nicht erlaubt sind ([Firefox Fehler 1280370](https://bugzil.la/1280370)).
- Wenn ein Menüelement im Tab-Kontextmenü geklickt wird, wird die ["activeTab" Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) nun für diesen Tab gewährt, auch wenn dies nicht der aktuell aktive Tab ist ([Firefox Fehler 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Fehler 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht Ihnen jetzt das Filtern für spekulative Verbindungen ([Firefox Fehler 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName`, und `signatureSchemeName`. Diese Änderung wurde in Firefox 62 übernommen ([Firefox Fehler 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Zustand des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Enumeration definiert SameSite-Zustandswerte ([Firefox Fehler 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs passen jetzt explizit zum "data" URL-Schema ([Firefox Fehler 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
