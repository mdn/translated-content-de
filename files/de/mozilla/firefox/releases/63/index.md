---
title: Firefox 63 für Entwickler
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Schriftarten-Registerkarte im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der das Ansehen und Bearbeiten der Einstellungen der Schriftarten auf Ihrer Seite erleichtert. Weitere Informationen finden Sie unter [Schriftarten bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Barrierefreiheits-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Barrierefreiheits-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items), und seine Rolle sowie sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox-Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt unmittelbar nach der Konsolenausgabe angezeigt ([Firefox-Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Symbol wurde dem Inhalt im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wann eine URL zu einem bekannten Tracker gehört — siehe [Sicherheitssymbole](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der `about:debugging`-Seite aufgeführt werden. Sie können die Einstellungen ändern, indem Sie `about:config` aufrufen ([Firefox-Bug 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste des [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, das Ansichtsfenster linksbündig auszurichten.
- Der Seiteninspektor enthält einen [Link zur Klassen-Definition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element. ([Firefox-Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox-Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernt

- Unterstützung für den `sidebar`-Linktyp (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox-Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}}-Pseudoklasse wurde hinzugefügt ([Firefox-Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox-Bug 1398483](https://bugzil.la/1398483)).
- Wieder unterstützte [webkit-prefixed pixel-density @media queries](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) ([Firefox-Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung hinzugefügt für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}}-Eigenschaft ([Firefox-Bug 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox-Bug 1429298](https://bugzil.la/1429298)).
- Syntax-Verbesserungen aus der Media Queries Level 4 Spezifikation implementiert, insbesondere [verschachtelte boolesche Ausdrücke](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#creating_complex_media_queries) und die [Bereichssyntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) ([Firefox-Bug 1422225](https://bugzil.la/1422225)).
- Umbenennung von `offset-*`-Eigenschaften zu {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox-Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für das Medienmerkmal [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) hinzugefügt ([Firefox-Bug 1365045](https://bugzil.la/1365045), [Firefox-Bug 1475462](https://bugzil.la/1475462)).
- Fluss-relative Werte (`block`, `inline`) für die {{CSSxRef("resize")}}-Eigenschaft hinzugefügt ([Firefox-Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} implementiert ([Firefox-Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) sind jetzt animierbar ([Firefox-Bug 1309752](https://bugzil.la/1309752)).

#### Entfernt

- `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden wie oben beschrieben in `inset-*` umbenannt ([Firefox-Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}}-Methode wurde hinzugefügt ([Firefox-Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt wesentlich verbessert. Im Fall, dass `x` undefiniert ist und Sie versuchen, auf `x.y` zuzugreifen, gibt die Konsole nun die beschreibendere Meldung [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) anstelle von "TypeError: x is undefined" zurück ([Firefox-Bug 1259822](https://bugzil.la/1259822)).

#### Entfernt

- Die experimentelle WebAssembly Modul IndexedDB Serialisierungsunterstützung wurde entfernt ([Firefox-Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox-Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox-Bug 1471948](https://bugzil.la/1471948)) APIs sind standardmäßig aktiviert; siehe [Webkomponenten](/de/docs/Web/API/Web_components) für mehr Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox-Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und ist standardmäßig für alle Kanäle aktiviert ([Firefox-Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); jedoch ist im Gegensatz zu Chrome `readText()` nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle wird jetzt unterstützt. Es erlaubt das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox-Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) sind jetzt standardmäßig aktiviert (siehe [Firefox-Bug 1476158](https://bugzil.la/1476158)):
  - Die [`Animation`](/de/docs/Web/API/Animation)-Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die `ready`- und `finished`-{{JSxRef("Promise")}}s des `Animation`-Objekts spezifizieren.
  - Die [`effect`](/de/docs/Web/API/Animation/effect)-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Objekts.
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)-Methode wurde implementiert ([Firefox-Bug 1469592](https://bugzil.la/1469592)).
- Die historische, zuvor nicht standardisierte [`Event.returnValue`](/de/docs/Web/API/Event/returnValue)-Eigenschaft wird jetzt aus Kompatibilitätsgründen unterstützt ([Firefox-Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event)-Eigenschaft implementiert, um die Webkompatibilität zu verbessern, jetzt, da es zum Standard geworden ist ([Firefox-Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Kompatibilitätsprobleme im Web (z. B. [Firefox-Bug 1479964](https://bugzil.la/1479964)) wurde dies allerdings schnell in nicht-Nightly-Kanälen deaktiviert, versteckt hinter der `dom.window.event.enabled`-Einstellung ([Firefox-Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform)-Eigenschaft jetzt `"Win32"` zurück, auch wenn sie auf einem 64-Bit-Windows läuft ([Firefox-Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 hatten Links, die neue Fenster öffneten und `rel="noopener"` hatten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem aktivierten [`noopener`](/de/docs/Web/API/Window/open)-Fenstermerkmal standardmäßig alle Fenstermerkmale deaktiviert, sodass Sie alle gewünschten Standardmerkmale explizit erneut aktivieren mussten. Nun haben diese Fenster denselben Satz aktivierter Merkmale wie jedes andere Fenster, und Sie müssen explizit alle deaktivieren, die Sie nicht möchten ([Firefox-Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Behandlung der `Alt`-Taste _auf der rechten Seite_ der Tastatur wurde in Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt`-Taste der `AltGr`-Modifikatortaste zuweist, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem, das kürzlich in Chrome eingeführt wurde ([Firefox-Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Der Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, auch innerhalb desselben Inhaltsprozesses ([Firefox-Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um zusätzlich zu dem zuvor unterstützten älteren sctp-sdp-05-Format auch das sctp-sdp-21-Datenformat für die Daten zu unterstützen.
- Der `ConstantSourceNode`-Knotentyp der Web Audio API hat jetzt eine Standardkanalanzahl von 2 statt 1, um der Spezifikation zu entsprechen ([Firefox-Bug 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen darauf basierenden Knotentypen) wirft jetzt die richtige Ausnahme, wenn ein negativer Wert für die Knotenanlaufzeit angegeben wird. Dieser Fehler ist `RangeError` ([Firefox-Bug 1413284](https://bugzil.la/1413284)).
- Die minimalen und maximalen zulässigen Werte für den [`AudioParam`](/de/docs/Web/API/AudioParam)-Objektwert wurden auf den minimal negativen Einzelpräzisions-Gleitkommawert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und den maximal positiven Einzelpräzisions-Gleitkommawert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox-Bug 1476695](https://bugzil.la/1476695)).
- Die [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType)-Methode, die es ermöglicht, während eines aktiven Streams Codecs zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox-Bug 1481166](https://bugzil.la/1481166)).
- Die [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime)-Methode wurde aktualisiert, um korrekt ein Array von Gleitkommawerten zu akzeptieren, das angibt, auf welche Werte der Parameter über die Zeit geändert werden soll. Zuvor wurde eine {{jsxref("Float32Array")}} benötigt ([Firefox-Bug 1421091](https://bugzil.la/1421091)).
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde ebenfalls aktualisiert, um korrekt einen entsprechenden `TypeError` zurückzugeben, wenn ein unendlicher Wert in der `values`-Array gefunden wird ([Firefox-Bug 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` so aktualisiert, dass beim Abschluss des Parameters, der der angegebenen Wertkurve folgt, nach Ablauf der Dauer der Wert des Parameters auf den letzten Wert in der Liste der zu kurvenden Werte eingestellt wird ([Firefox-Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats`-Wörterbuch wurde in `RTCRtpStreamStats` umbenannt, um es mit anderen WebRTC-Wörterbüchern und der Spezifikation konsistent zu machen ([Firefox-Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `kind`-Eigenschaft des `RTCRtpStreamStats`-Wörterbuchs wurde hinzugefügt ([Firefox-Bug 1481851](https://bugzil.la/1481851)).
- Die `isRemote`-Eigenschaft des `RTCRtpStreamStats`-Wörterbuchs ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Siehe [diesen Blogbeitrag im Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox-Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference`-Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Unter macOS erlaubt dies WebGL-Anwendungen und -Applet, die nicht auf Leistung ausgerichtet sind, die Low-Power-GPU anstelle der High-Power-GPU in Multi-GPU-Systemen anzufordern ([Firefox-Bug 1349799](https://bugzil.la/1349799)).

#### Entfernt

- Die veralteten und nicht standardisierten, nur in Firefox existierenden Methoden `Window.back()` und `Window.forward()` wurden entfernt. Bitte verwenden Sie die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox-Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind nicht mehr auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen verfügbar, da sie ein Potenzial für Speicherlecks eingeführt hatten ([Firefox-Bug 1264182](https://bugzil.la/1264182)).
- Da es ohnehin in der Spezifikation veraltet war, wurde die eingeschränkte Unterstützung für Dopplereffekte auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener)-Eigenschaften `dopplerFactor` und `speedOfSound` sowie die `setVelocity()`-Methode von `PannerNode` wurden entfernt ([Firefox-Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}}-Header ist implementiert und nicht mehr hinter einer Einstellung versteckt ([Firefox-Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Website-Favicons unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), sofern eine für die Website konfiguriert ist ([Firefox-Bug 1297156](https://bugzil.la/1297156)).
- CSP `'script-src'` Direktive 'report-sample' Ausdruck wird nun beim Erzeugen von Violationsberichten anerkannt. Diese Direktive gibt an, dass eine kurze Probe, wo die Verletzung aufgetreten ist, im Bericht enthalten sein sollte. Bisher hat Firefox diese Probe immer enthalten ([Firefox-Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox-Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt nun eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities) im `WebDriver:NewSession`-Antwort zurück, die wahr ist, wenn das Browserfenster neu positioniert und in der Größe geändert werden kann, was z. B. bei Firefox der Fall ist, aber nicht bei mobilen Anwendungen ([Firefox-Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Fähigkeit hinzugefügt, die es erlaubt, ein spezifisches [Promptverhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver Spezifikation zu definieren ([Firefox-Bug 1264259](https://bugzil.la/1264259)).
- Die Behandlung von Benutzereingabeaufforderungen wurde zu den Kommandos `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` hinzugefügt ([Firefox-Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne den `WebDriver:`-Präfix wurden entfernt ([Firefox-Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession`-Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver-Spezifikation definiert ([Firefox-Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokus-bezogene Ereignisse fehlten bei der Elementinteraktion, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox-Bug 1398111](https://bugzil.la/1398111)).
- Das Ausführen einer `pointerDown`- und `pointerUp`-Aktion in einer nachfolgenden Aktionssequenz könnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurücksetzte ([Firefox-Bug 1422583](https://bugzil.la/1422583)).
- Das wiederholte Ausführen von `pause`-Aktionen könnte zu einem unendlichen Hängen führen ([Firefox-Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementensammlung von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursachen würde ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Um eine Race-Bedingung zu verhindern, warten die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` jetzt, bis die Benutzereingabeaufforderung geschlossen wurde ([Firefox-Bug 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, die vom Frame-Skript ausgegeben wurden, waren nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern loggten alles ([Firefox-Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` löste einen Fehler aus, wenn ein Screenshot eines Fensters aufgenommen wurde, das breiter oder höher als 32.767 Pixel war ([Firefox-Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardwert der Benutzereingabeaufforderung nicht, wenn der zu sendende Text eine leere Zeichenkette war ([Firefox-Bug 1486485](https://bugzil.la/1486485)).

### Sonstiges

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragstypen im angegebenen Array von Eintragstypen zum Beobachten gefunden werden, oder wenn das Array leer oder fehlend ist. Zuvor warf Firefox fälschlicherweise einen `TypeError` ([Firefox-Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias von `application/x-suggestions+json` ([Firefox-Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Theme

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Badges wird jetzt automatisch auf schwarz oder weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox-Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest Schlüssel sind jetzt optional ([Firefox-Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen Ihnen, die Textfarbe von Browser-Action-Badges zu erhalten und zu setzen ([Firefox-Bug 1424620](https://bugzil.la/1424620)).
- Der Schlüssel `colors` im `manifest.json` für Themes unterstützt nun die `ntp_text` Eigenschaft, um die Textfarbe in einem neuen Tab zu setzen, und die `ntp_background` Eigenschaft, um die Farbe eines neuen Tabs zu setzen ([Firefox-Bug 1347204](https://bugzil.la/1347204)).
- Themes können nun die Farben für Seitenleisten definieren, wie z. B. die Lesezeichen-Seitenleiste ([Firefox-Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:
  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} erlaubt es Web-Erweiterungen, signierte Browser-Themen zu installieren und zu aktivieren ([Firefox-Bug 1369209](https://bugzil.la/1369209)).
- Der [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) Manifest-Schlüssel wurde eingeführt ([Firefox-Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition von experimentellen [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht es Ihnen, die Liste der installierten Suchmaschinen abzurufen und mit ihnen zu suchen ([Firefox-Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen Parameter `options`, der es Ihnen erlaubt, verschiedene Optionen für die zurückgegebene Liste der Webseiten zu setzen ([Firefox-Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Mehrfachauswahlen ([Firefox-Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält nun ein optionales Feld im `highlightInfo`-Objekt — `populate` — das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt wird, wird das zurückgegebene `windows.Window`-Objekt nicht mit einer Liste von Tabs gefüllt, um die Leistung zu verbessern ([Firefox-Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlstatus eines Tabs durch Einfügen von `highlighted: true` in den Parameter `updateProperties` ([Firefox-Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt die Änderung des Auswahlstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox-Bug 1486050](https://bugzil.la/1486050)), indem sowohl `highlighted: true` als auch `active: false` in den Parameter `updateProperties` eingefügt werden.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox-Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}}-Eigenschaft spiegelt jetzt ordnungsgemäß wider, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind, und {{WebExtAPIRef("tabs.highlight")}} unterstützt die Änderung des Hervorhebungsstatus mehrerer Tabs ([Firefox-Bug 1464862](https://bugzil.la/1464862)).
- Die Eigenschaft `isarticle` im `filter`-Objekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name wird beibehalten, ist jedoch veraltet. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox-Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}}-Ereignis kann verwendet werden, um zu verfolgen, wann ein Tab die Aufmerksamkeit des Benutzers mit der `attention`-Eigenschaft des `changeInfo`-Objekts erregt ([Firefox-Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- Hinzugefügt {{WebExtApiRef("menus.getTargetElement()")}} zur {{WebExtApiRef("menus")}} API. Die Methode gibt das durch den Parameter `targetElementId` referenzierte Element zurück, das das angeklickte Element identifiziert. Wenn der `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox-Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüpunkte zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüelementen umschalten ([Firefox-Bug 1482529](https://bugzil.la/1482529)).
- Durch die {{WebExtAPIRef("menus")}} API erstellte Elemente unterstützen jetzt Zugangstasten ([Firefox-Bug 1320462](https://bugzil.la/1320462)).
- Der Parameter `targetUrlPatterns` von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch solche, die normalerweise in einem übereinstimmenden Muster nicht erlaubt sind ([Firefox-Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Tab-Kontextmenüelement angeklickt wird, wird die ["activeTab"-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab vergeben, auch wenn dies nicht der aktuell aktive Tab ist ([Firefox-Bug 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Benutzereingaben](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox-Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox-Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu: `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox-Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Status des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}}-Enumeration definiert SameSite-Statuswerte ([Firefox-Bug 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs stimmen jetzt explizit mit dem "data"-URL-Schema überein ([Firefox-Bug 1280370](https://bugzil.la/1280370)).

## Ältere Versionen

{{Firefox_for_developers}}
