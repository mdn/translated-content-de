---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Fonts-Tab im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der es einfach macht, die Einstellungen der Schriftarten auf Ihrer Seite anzusehen und zu bearbeiten. Siehe [Edit fonts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) für Details.
- Der [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird nun direkt nach der Konsolenausgabe angezeigt ([Firefox Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Icon wurde im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wenn eine URL zu einem bekannten Tracker gehört — siehe [Sicherheits-Icons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der `about:debugging`-Seite aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Bug 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht und wir haben die Option hinzugefügt, das Ansichtsfenster links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das Attribut `decoding` des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox Bug 1416328](https://bugzil.la/1416328)); siehe auch {{DOMxRef("HTMLImageElement.decoding")}}.

#### Entfernungen

- Unterstützung für den `sidebar`-Link-Typ (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}} Pseudo-Klasse wurde hinzugefügt ([Firefox Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox Bug 1398483](https://bugzil.la/1398483)).
- Unterstützung für die [webkit-gekennzeichneten Pixel-Dichte @media Abfragen](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) wurde wieder aktiviert ([Firefox Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}} Eigenschaft wurde hinzugefügt ([Firefox Bug 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox Bug 1429298](https://bugzil.la/1429298)).
- Syntax-Verbesserungen aus der Media Queries Level 4-Spezifikation wurden implementiert ([Firefox Bug 1422225](https://bugzil.la/1422225)).
- Die `offset-*` Eigenschaften wurden in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} umbenannt ([Firefox Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Funktion wurde hinzugefügt ([Firefox Bug 1365045](https://bugzil.la/1365045), [Firefox Bug 1475462](https://bugzil.la/1475462)).
- Flow-Relative Werte (`block`, `inline`) für die {{CSSxRef("resize")}} Eigenschaft wurden hinzugefügt ([Firefox Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} wurde implementiert ([Firefox Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo zutreffend) sind nun animierbar ([Firefox Bug 1309752](https://bugzil.la/1309752)).

#### Entfernungen

- `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden in `inset-*` umbenannt, wie oben beschrieben ([Firefox Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}} Eigenschaft wurde implementiert ([Firefox Bug 1472170](https://bugzil.la/1472170)).
- Die Methode {{JSxRef("Object.fromEntries()")}} wurde hinzugefügt ([Firefox Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt erheblich verbessert. Im Fall, dass `x` undefiniert ist und Sie versuchen, auf `x.y` zuzugreifen, liefert die Konsole jetzt die beschreibendere [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) ([Firefox Bug 1259822](https://bugzil.la/1259822)).

#### Entfernungen

- Experimentelle WebAssembly-Modul IndexedDB-Serialisierungsunterstützung wurde entfernt ([Firefox Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Bug 1471948](https://bugzil.la/1471948)) APIs sind jetzt standardmäßig aktiviert; siehe [Web components](/de/docs/Web/API/Web_components) für weitere Details.
- Die {{domxref("Media_Capabilities_API", "Media Capabilities API", "", "1")}} wurde implementiert ([Firefox Bug 1409664](https://bugzil.la/1409664)).
- Die {{domxref("Clipboard", "Async Clipboard API", "", "1")}} wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome, implementiert Firefox derzeit nur die Methoden {{domxref("Clipboard.writeText", "writeText()")}} und {{domxref("Clipboard.readText", "readText()")}}; jedoch, im Gegensatz zu Chrome, ist `readText()` nur in [Browser-Add-ons](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die Schnittstelle {{DOMxRef("SecurityPolicyViolationEvent")}} wird nun unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der {{domxref("Web_Animations_API", "Web Animations API", "", "1")}} wurden standardmäßig aktiviert (siehe [Firefox Bug 1476158](https://bugzil.la/1476158)):

  - Die {{DOMxRef("Animation")}} Eigenschaften {{DOMxRef("Animation.ready", "ready")}} und {{DOMxRef("Animation.finished", "finished")}}, spezifizieren die `Animation` Objekte `ready` und `finished` {{JSxRef("Promise")}}s.
  - Die {{DOMxRef("Animation")}} Objekt Eigenschaft {{DOMxRef("Animation.effect", "effect")}}.
  - Die Schnittstellen {{DOMxRef("KeyframeEffect")}} und {{DOMxRef("AnimationEffect")}}.

- Die Methode {{DOMxRef("Element.toggleAttribute()")}} wurde implementiert ([Firefox Bug 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte, {{DOMxRef("Event.returnValue")}} Eigenschaft wird nun aus Kompatibilitätsgründen unterstützt ([Firefox Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die {{DOMxRef("Window.event")}} Eigenschaft implementiert, um die Web-Kompatibilität zu verbessern, jetzt, da sie standardisiert wurde ([Firefox Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Web-Kompatibilitätsprobleme (z.B. [Firefox Bug 1479964](https://bugzil.la/1479964)) wurde dies jedoch schnell in Nicht-Nightly-Kanälen deaktiviert und hinter der `dom.window.event.enabled` Präferenz versteckt ([Firefox Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die {{DOMxRef("Navigator/platform", "navigator.platform")}} Eigenschaft jetzt `"Win32"` zurück, auch wenn sie auf einem 64-Bit-Windows ausgeführt wird ([Firefox Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 hatten Links, die neue Fenster mit `rel="noopener"`-Attribut öffneten, ebenso wie Aufrufe von {{DOMxRef("Window.open()")}} mit dem [`noopener`](/de/docs/Web/API/Window/open) Fenster-Feature, standardmäßig alle deaktivierten Fenster-Features, sodass Sie alle gewünschten Standard-Features explizit wieder aktivieren mussten. Jetzt haben diese Fenster die gleiche Anzahl aktivierter Features wie jedes andere Fenster, und Sie müssen explizit diejenigen deaktivieren, die Sie nicht möchten ([Firefox Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Handhabung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde unter Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste zum `AltGr`-Modifier ummappt, wird der Wert von {{DOMxRef("KeyboardEvent.key")}} jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem Verhalten, das kürzlich in Chrome eingeführt wurde ([Firefox Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, auch innerhalb desselben Inhaltsprozesses ([Firefox Bug 1404977](https://bugzil.la/1404977)).
- {{DOMxRef("RTCDataChannel")}} wurde aktualisiert, um das sctp-sdp-21 Datenformat für die Daten zu unterstützen, zusätzlich zum älteren sctp-sdp-05 Format, das zuvor unterstützt wurde.
- Der {{DOMxRef("ConstantSourceNode")}} Knotentyp des Web Audio API hat jetzt eine Standardkanalanzahl von 2 statt 1, um der Spezifikation zu entsprechen ([Firefox Bug 1413283](https://bugzil.la/1413283)).
- Die {{domxref("Web_Audio_API", "Web Audio API", "", "1")}} Schnittstelle {{DOMxRef("AudioScheduledSourceNode")}} (und damit alle anderen darauf basierenden Knotentypen) löst jetzt die korrekte Ausnahme aus, wenn ein negativer Wert für die Startzeit des Knotens angegeben wird. Dieser Fehler ist ein `RangeError` ([Firefox Bug 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal erlaubten Werte für ein {{DOMxRef("AudioParam")}} Objekt's {{DOMxRef("AudioParam.value", "value")}} wurden auf den minimal negativen Einzelpräzisions-Gleitkommawert (-340.282.346.638.528.859.811.704.183.484.516.925.440) und den maximal positiven Einzelpräzisions-Gleitkommawert (+340.282.346.638.528.859.811.704.183.484.516.925.440) geändert ([Firefox Bug 1476695](https://bugzil.la/1476695)).
- Die Methode {{DOMxRef("SourceBuffer.changeType")}}, die es ermöglicht, während eines aktiven Streams Codecs zu wechseln, wurde standardmäßig aktiviert. Dies ist Teil der {{domxref("Media_Source_Extensions_API", "Media Source Extensions API", "", "1")}} ([Firefox Bug 1481166](https://bugzil.la/1481166)).
- Die Methode {{DOMxRef("AudioParam.setValueCurveAtTime()")}} wurde aktualisiert, um korrekt ein Array von Gleitkommawerten zu akzeptieren, das die Werte des Parameters angibt, die sich im Laufe der Zeit ändern sollen. Zuvor war ein {{jsxref("Float32Array")}} erforderlich ([Firefox Bug 1421091](https://bugzil.la/1421091)).
- {{DOMxRef("AudioParam.setValueCurveAtTime()")}} wurde auch aktualisiert, um korrekt ein `TypeError` auszulösen, wenn ein nicht endlicher Wert im `values`-Array gefunden wird ([Firefox Bug 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass nach dem Ende der angegebenen Wertkurve beim Parameter nach Ablauf der Dauer der Wert des Parameters auf den letzten Wert in der Werteliste festgelegt ist ([Firefox Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats` Dictionary wurde in {{DOMxRef("RTCRtpStreamStats")}} umbenannt, um Konsistenz mit anderen WebRTC Dictionaries und der Spezifikation zu gewährleisten ([Firefox Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `RTCRtpStreamStats` Dictionary's {{DOMxRef("RTCRtpStreamStats.kind", "kind")}} Eigenschaft wurde hinzugefügt ([Firefox Bug 1481851](https://bugzil.la/1481851)).
- Die `isRemote` Eigenschaft des `RTCRtpStreamStats` Dictionarys ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Siehe [diesen Blog-Post im Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference` Kontextattribut wurde zu {{DOMxRef("HTMLCanvasElement.getContext()")}} hinzugefügt. Auf macOS ermöglicht dies WebGL nicht-performancekritischen Anwendungen und Applets, die Low-Power GPU statt der High-Power GPU in Multi-GPU-Systemen anzufordern ([Firefox Bug 1349799](https://bugzil.la/1349799)).

#### Entfernungen

- Die obsoleten und nicht standardisierten nur in Firefox verfügbaren Methoden {{DOMxRef("Window.back()")}} und {{DOMxRef("Window.forward()")}} wurden entfernt. Bitte verwenden Sie stattdessen die {{DOMxRef("History.back", "window.history.back()")}} und {{DOMxRef("History.forward", "window.history.forward()")}} Methoden ([Firefox Bug 1479486](https://bugzil.la/1479486)).
- Die {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und {{DOMxRef("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} Methoden sind aufgrund des Potenzials, Speicherlecks einzuführen, nicht mehr auf {{DOMxRef("ServiceWorker")}} Instanzen verfügbar ([Firefox Bug 1264182](https://bugzil.la/1264182)).
- Da es in der Spezifikation ohnehin als veraltet markiert war, wurde die begrenzte Unterstützung für Doppler-Effekte auf {{DOMxRef("PannerNode")}} aus dem Web Audio API entfernt. Die {{DOMxRef("AudioListener")}} Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, zusammen mit der `PannerNode` Methode `setVelocity()` ([Firefox Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}} Header wurde implementiert und ist nicht mehr hinter einer Präferenz verborgen ([Firefox Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Website-Favicons unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/CSP), wenn eine für die Seite konfiguriert ist ([Firefox Bug 1297156](https://bugzil.la/1297156)).
- Die CSP `script-src` Direktive `'report-sample'` Ausdruck wird jetzt beim Generieren von Verletzungsberichten erkannt. Diese Direktive gibt an, dass eine kurze Probe der Verletzungsstelle im Bericht enthalten sein soll. Bisher hat Firefox diese Probe immer aufgenommen ([Firefox Bug 1473218](https://bugzil.la/1473218)).
- Firefox nutzt jetzt NSS 3.39 ([Firefox Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt jetzt eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Capabilities) in der `WebDriver:NewSession` Antwort zurück, die `true` ist, wenn das Browserfenster neu positioniert und die Größe verändert werden kann, was z.B. für Firefox, aber nicht für mobile Anwendungen der Fall ist ([Firefox Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Fähigkeit, die es ermöglicht, ein bestimmtes [Promptverhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver Spezifikation zu definieren, wurde hinzugefügt ([Firefox Bug 1264259](https://bugzil.la/1264259)).
- Die Handhabung von Benutzereingaben wurde zu den Befehlen `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` hinzugefügt ([Firefox Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehls-Endpunkte ohne das Präfix `WebDriver:` wurden entfernt ([Firefox Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Strings (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver Spezifikation definiert ([Firefox Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokusbezogene Ereignisse fehlten bei der Elementinteraktion, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox Bug 1398111](https://bugzil.la/1398111)).
- Durchführen einer `pointerDown` und `pointerUp` Aktion in einer nachfolgenden Aktionsequenz konnte einen Doppelklick auslösen, weil `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurückgesetzt hat ([Firefox Bug 1422583](https://bugzil.la/1422583)).
- Wiederholt `pause` Aktionen auszuführen, konnte einen unendlichen Stillstand verursachen ([Firefox Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementkollektion von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursacht hat ([Firefox Bug 1447977](https://bugzil.la/1447977)).
- Um einen Wettlaufzustand zu verhindern, warten sowohl die `WebDriver:AcceptAlert` als auch die `WebDriver:DismissAlert` Befehle jetzt, bis die Benutzereingabe geschlossen wurde ([Firefox Bug 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, die vom Frame-Skript ausgegeben wurden, waren nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern haben alles protokolliert ([Firefox Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` erzeugte einen Fehler, wenn ein Screenshot eines Fensters gemacht wurde, das breiter oder höher als 32767 Pixel war ([Firefox Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardwert der Benutzereingabe nicht, wenn der zu sendende Text ein leerer String ist ([Firefox Bug 1486485](https://bugzil.la/1486485)).

### Sonstige

- Das Verhalten von {{DOMxRef("PerformanceObserver.observe()")}} wurde korrigiert, sodass nichts passiert, wenn keine gültigen Eintragsarten im angegebenen Array von zu beobachtenden Eintragsarten gefunden werden oder wenn das Array leer oder fehlt. Zuvor hat Firefox fälschlicherweise einen `TypeError` ausgelöst ([Firefox Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias von `application/x-suggestions+json` ([Firefox Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Theming

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Badges wird jetzt automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`thema`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifests sind jetzt optional ([Firefox Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browser-Aktions-Badges zu erhalten und festzulegen ([Firefox Bug 1424620](https://bugzil.la/1424620)).
- Der Thema `colors` Schlüssel in `manifest.json` unterstützt jetzt die `ntp_text` Eigenschaft, um die Textfarbe in einem neuen Tab festzulegen, und die `ntp_background` Eigenschaft, um die Farbe eines neuen Tabs festzulegen ([Firefox Bug 1347204](https://bugzil.la/1347204)).
- Themen können jetzt die Farben für Seitenleisten definieren, z. B. die Lesezeichen-Seitenleiste ([Firefox Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:

  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} erlaubt Web-Erweiterungen, signierte Browser-Themen zu installieren und zu aktivieren ([Firefox Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition experimenteller [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht es Ihnen, die Liste der installierten Suchmaschinen abzurufen und Suchvorgänge mit ihnen durchzuführen ([Firefox Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options` Parameter an, der es Ihnen ermöglicht, verschiedene Optionen für die zurückgegebene Seitenliste festzulegen ([Firefox Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Multi-Select ([Firefox Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — das standardmäßig `true` ist. Wenn es auf `false` gesetzt wird, wird verhindert, dass das zurückgegebene `windows.Window` Objekt mit einer Liste von Tabs gefüllt wird, um die Leistung zu verbessern ([Firefox Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Selektionsstatus eines Tabs, indem `highlighted: true` im `updateProperties` Parameter enthalten ist ([Firefox Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Selektionsstatus eines Tabs ohne die Änderung des fokussierten Tabs ([Firefox Bug 1486050](https://bugzil.la/1486050)) durch gleichzeitiges Einbeziehen von `highlighted: true` und `active: false` im `updateProperties` Parameter.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft reflektiert jetzt korrekt, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind und {{WebExtAPIRef("tabs.highlight")}} unterstützt die Änderung des hervorgehobenen Status mehrerer Tabs ([Firefox Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im `filter` Objekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name wird beibehalten, ist jedoch veraltet. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}} Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention` Eigenschaft des `changeInfo` Objekts auf sich zieht ([Firefox Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- Zu der {{WebExtApiRef("menus.getTargetElement()")}} Methode wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, das durch den `targetElementId` Parameter identifiziert wird, der das angeklickte Element identifiziert. Wenn der `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüelemente zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es, die Sichtbarkeit von Menüelementen umzuschalten ([Firefox Bug 1482529](https://bugzil.la/1482529)).
- Mit der {{WebExtAPIRef("menus")}} API erstellte Einträge unterstützen jetzt Zugriffstasten ([Firefox Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch solche, die normalerweise in einem Mustermatch nicht erlaubt sind ([Firefox Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Tab-Kontextmenüelement angeklickt wird, wird die ["activeTab"-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab erteilt, auch wenn es sich nicht um den derzeit aktiven Tab handelt ([Firefox Bug 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Status des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Enumeration definiert die Werte des SameSite-Status ([Firefox Bug 1351663](https://bugzil.la/1351663)).
- URL-Muster für URLs passen jetzt explizit das "data" URL-Schema an ([Firefox Bug 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
