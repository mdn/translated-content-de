---
title: Firefox 63 für Entwickler
short-title: Firefox 63
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 63, die Entwickler betreffen werden. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwickler-Tools

- Der Schriftarten-Tab im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) umfasst jetzt einen Editor, mit dem es einfach ist, die Einstellungen der Schriftarten auf Ihrer Seite anzusehen und zu bearbeiten. Details finden Sie unter [Schriftarten bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html).
- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie über ein Objekt im [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird nun direkt nach der Konsolenausgabe angezeigt ([Firefox Bug 1136299](https://bugzil.la/1136299)).
- Im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) wurde ein neues Symbol zu den Inhalten hinzugefügt, das anzeigt, wenn eine URL zu einem bekannten Tracker gehört—siehe [Sicherheitssymbole](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons auf der `about:debugging`-Seite nicht aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Bug 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, das Ansichtsfenster links auszurichten.
- Der Page Inspector enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element ([Firefox Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das `decoding`-Attribut des {{HTMLElement("img")}}-Elements wurde hinzugefügt ([Firefox Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernung

- Unterstützung für den `sidebar`-Linktyp (`rel="sidebar"`) wurde entfernt. Wenn ein Ankertag dieses Attribut enthält, wird es ignoriert ([Firefox Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}}-Pseudoklasse wurde hinzugefügt ([Firefox Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurde dem [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox Bug 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-präfixierte Pixel-Density @media-Anfragen](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) erneut aktiviert ([Firefox Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}}, sowie die {{CSSxRef("justify-content")}}-Eigenschaft wurde hinzugefügt ([Firefox Bug 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox Bug 1429298](https://bugzil.la/1429298)).
- Syntaxverbesserungen aus der Media Queries Level 4 Spezifikation wurden implementiert, insbesondere [verschachtelte boolesche Ausdrücke](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#creating_complex_media_queries) und die [Bereichssyntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) ([Firefox Bug 1422225](https://bugzil.la/1422225)).
- `offset-*`-Eigenschaften wurden umbenannt zu {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} ([Firefox Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Feature wurde hinzugefügt ([Firefox Bug 1365045](https://bugzil.la/1365045), [Firefox Bug 1475462](https://bugzil.la/1475462)).
- Flussrelativwerte (`block`, `inline`) für die {{CSSxRef("resize")}}-Eigenschaft wurden hinzugefügt ([Firefox Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für die `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} wurde implementiert ([Firefox Bug 1297774](https://bugzil.la/1297774)).
- Die [logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values), wo sinnvoll, sind jetzt animierbar ([Firefox Bug 1309752](https://bugzil.la/1309752)).

#### Entfernung

- `offset-block-start`, `offset-block-end`, `offset-inline-start` und `offset-inline-end` wurden entfernt; diese wurden wie oben beschrieben zu `inset-*` umbenannt ([Firefox Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Die {{JSxRef("Symbol.prototype.description")}} Eigenschaft wurde implementiert ([Firefox Bug 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}} Methode wurde hinzugefügt ([Firefox Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt erheblich verbessert. Betrachten Sie den Fall, in dem `x` undefiniert ist und Sie versuchen, auf `x.y` zuzugreifen. Anstelle von "TypeError: x is undefined" gibt die Konsole nun die beschreibendere Meldung [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) zurück ([Firefox Bug 1259822](https://bugzil.la/1259822)).

#### Entfernung

- Experimentelle WebAssembly Module IndexedDB Serialisierungsunterstützung wurde entfernt ([Firefox Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Bug 1471948](https://bugzil.la/1471948)) APIs sind standardmäßig aktiviert; Weitere Informationen finden Sie unter [Webkomponenten](/de/docs/Web/API/Web_components).
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); jedoch, im Gegensatz zu Chrome, ist `readText()` nur in [Browser-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Schnittstelle wird jetzt unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox Bug 1476158](https://bugzil.la/1476158)):
  - Die [`Animation`](/de/docs/Web/API/Animation) Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `ready` und `finished` {{JSxRef("Promise")}} des `Animation`-Objekts angeben.
  - Die [`Animation`](/de/docs/Web/API/Animation) Objekteigenschaft [`effect`](/de/docs/Web/API/Animation/effect).
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute) Methode wurde implementiert ([Firefox Bug 1469592](https://bugzil.la/1469592)).
- Die vorher historisch nicht standardisierte [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird jetzt aus Kompatibilitätsgründen unterstützt ([Firefox Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Webkompatibilität zu verbessern, da sie jetzt standardisiert ist ([Firefox Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Webkompatibilitätsprobleme (z. B. [Firefox Bug 1479964](https://bugzil.la/1479964)) wurde diese jedoch schnell in nicht-Nightly Channels deaktiviert, hinter der `dom.window.event.enabled` Voreinstellung verborgen ([Firefox Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, auch wenn sie auf einem 64-Bit-Windows ausgeführt wird ([Firefox Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 haben Links, die neue Fenster öffnen, die `rel="noopener"` hatten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit aktiviertem [`noopener`](/de/docs/Web/API/Window/open) Fenstereigenschaft standardmäßig alle Fensterfunktionen deaktiviert, sodass Sie explizit jede Standardfunktion, die Sie wollten, neu aktivieren mussten. Jetzt haben diese Fenster denselben Satz von Funktionen aktiviert wie jedes andere Fenster, und Sie müssen explizit alle deaktivieren, die Sie nicht benötigen ([Firefox Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Die Handhabung der `Alt` Taste _auf der rechten Seite_ der Tastatur wurde in Windows verbessert. Wenn das aktuelle Tastaturlayout des Benutzers die `Alt` Taste der `AltGr` Modifikatortaste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` angegeben. Dieses Verhalten entspricht dem Verhalten, das kürzlich in Chrome eingeführt wurde ([Firefox Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Der Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, auch innerhalb desselben Inhaltsprozesses ([Firefox Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21-Datenformat für die Daten zu unterstützen, zusätzlich zu dem zuvor unterstützten äteren sctp-sdp-05-Format.
- Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) Knotentyp für die Web Audio API hat jetzt eine Standardkanalanzahl von 2 anstelle von 1, um die Spezifikation zu erfüllen ([Firefox Bug 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen Knotentypen, die darauf basieren) werfen jetzt die richtige Ausnahme, wenn ein negativer Wert für die Knotenstartzeit angegeben wird. Dieser Fehler ist ein `RangeError` ([Firefox Bug 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal zugelassenen Werte für das [`AudioParam`](/de/docs/Web/API/AudioParam) Objekt `value` wurden auf den minimalen negativen Einzelpräzisionswert (-340,282,346,638,528,859,811,704,183,484,516,925,440) und auf den maximal positiven Einzelpräzisionswert (+340,282,346,638,528,859,811,704,183,484,516,925,440) geändert ([Firefox Bug 1476695](https://bugzil.la/1476695)).
- Die [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType) Methode, die es Ihnen ermöglicht, die Codecs während eines aktiven Streams zu ändern, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox Bug 1481166](https://bugzil.la/1481166)).
- Die [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) Methode wurde aktualisiert, um korrekt ein Array von Gleitkommazahlen zu akzeptieren, um die Werte des Parameters anzugeben, die sich im Laufe der Zeit ändern sollen. Zuvor erforderte dies ein {{jsxref("Float32Array")}} ([Firefox Bug 1421091](https://bugzil.la/1421091)).
- Die `AudioParam.setValueCurveAtTime()` Methode wurde ebenfalls aktualisiert, um bei einem nicht-finiten Wert im `values` Array einen geeigneten `TypeError` zurückzugeben ([Firefox Bug 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter aufhört, der angegebenen Wertekurve zu folgen, der Wert des Parameters auf den letzten Wert in der Werteliste eingestellt wird ([Firefox Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats` Wörterbuch wurde in `RTCRtpStreamStats` umbenannt, um mit anderen WebRTC Wörterbüchern und der Spezifikation konsistent zu sein ([Firefox Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `RTCRtpStreamStats` Wörterbuch-Eigenschaft `kind` wurde hinzugefügt ([Firefox Bug 1481851](https://bugzil.la/1481851)).
- Die `RTCRtpStreamStats` Wörterbuch-Eigenschaft `isRemote` ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole angezeigt, wenn auf diese Eigenschaft zugegriffen wird. Details finden Sie in [diesem Blog-Beitrag auf dem Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) ([Firefox Bug 1393306](https://bugzil.la/1393306)).

#### Canvas and WebGL

- Ein neuer `powerPreference` Kontext-Attribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS ermöglicht dies WebGL-nicht-performanzkritischen Anwendungen und Applets, die Niedrigleistungs-GPU anstelle der Hochleistungs-GPU in Multi-GPU Systemen anzufordern ([Firefox Bug 1349799](https://bugzil.la/1349799)).

#### Entfernung

- Die veralteten und nicht standardisierten Firefox-spezifischen Methoden `Window.back()` und `Window.forward()` wurden entfernt. Bitte verwenden Sie die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) stattdessen ([Firefox Bug 1479486](https://bugzil.la/1479486)).
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) Methoden sind auf [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Instanzen nicht mehr verfügbar, da sie das Risiko von Speicherlecks mit sich brachten ([Firefox Bug 1264182](https://bugzil.la/1264182)).
- Da es ohnehin in der Spezifikation veraltet war, wurde die begrenzte Unterstützung für Doppler-Effekte bei der [`PannerNode`](/de/docs/Web/API/PannerNode) vom Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener) Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, zusammen mit der `PannerNode` Methode `setVelocity()` ([Firefox Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}} Header wurde implementiert und ist nicht mehr hinter einer Voreinstellung verborgen ([Firefox Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Website-Favicons unterliegen jetzt der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), wenn eine für die Site konfiguriert ist ([Firefox Bug 1297156](https://bugzil.la/1297156)).
- Die CSP `script-src` Direktive's `'report-sample'` Ausdruck wird jetzt erkannt bei der Erstellung von Verletzungsberichten. Diese Direktive gibt an, dass ein kurzer Ausschnitt von dem Ort, an dem die Verletzung aufgetreten ist, im Bericht enthalten sein sollte. Früher hat Firefox diesen Ausschnitt immer enthalten ([Firefox Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet nun NSS 3.39 ([Firefox Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Marionette gibt nun eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities) in der `WebDriver:NewSession` Antwort zurück, was den Empfang und die Größenänderung des Browserfensters ermöglicht, was z.B. für Firefox, aber nicht für Anwendungen auf Mobilgeräten gilt ([Firefox Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior` Fähigkeit wurde hinzugefügt, die es ermöglicht, ein spezifisches [Promptverhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) gemäß der WebDriver-Spezifikation zu definieren ([Firefox Bug 1264259](https://bugzil.la/1264259)).
- Handhabung von Benutzervorgaben wurde zu den `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` Befehlen hinzugefügt ([Firefox Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehl-Endpunkte ohne das `WebDriver:`-Präfix wurden entfernt ([Firefox Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession` Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver-Spezifikation definiert ([Firefox Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokusbezogene Ereignisse fehlten auf Elementeinteraktionen, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox Bug 1398111](https://bugzil.la/1398111)).
- Eine `pointerDown` und `pointerUp` Aktion in einer aufeinanderfolgenden Aktionssequenz auszuführen, konnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurücksetzte ([Firefox Bug 1422583](https://bugzil.la/1422583)).
- Wiederholte Ausführung von `pause`-Aktionen konnte zu einem unbegrenzten Blockieren führen ([Firefox Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementensammlung von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen Fehler mit zyklischem Bezug verursachen konnte ([Firefox Bug 1447977](https://bugzil.la/1447977)).
- Um eine Race-Condition zu verhindern, warten die `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` Befehle jetzt, bis die Benutzeranfrage geschlossen wurde ([Firefox Bug 1479368](https://bugzil.la/1479368)).
- Logeinträge, die vom Frame-Script ausgegeben wurden, waren nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern es wurde alles protokolliert ([Firefox Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` verursachte einen Fehler, wenn ein Screenshot eines Fensters gemacht wurde, das größer als 32767 Pixel in der Breite oder Höhe war ([Firefox Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetzte den Standardwert des Benutzeraufforderung nicht, wenn der zu sendende Text eine leere Zeichenfolge war ([Firefox Bug 1486485](https://bugzil.la/1486485)).

### Sonstiges

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragsarten im angegebenen Array zu beobachtender Eintragsarten gefunden werden oder wenn das Array leer oder nicht vorhanden ist. Vorher warf Firefox fälschlicherweise einen `TypeError` ([Firefox Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox nun `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Gestaltung

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Abzeichen wird jetzt automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast mit dem Hintergrund zu maximieren ([Firefox Bug 1474110](https://bugzil.la/1474110)).
- Die Eigenschaften `accentcolor` und `textcolor` des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels sind jetzt optional ([Firefox Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen Ihnen, die Textfarbe von Browser-Aktionsabzeichen abzurufen und festzulegen ([Firefox Bug 1424620](https://bugzil.la/1424620)).
- Der `colors` Schlüssel im `manifest.json` unterstützt jetzt die `ntp_text` Eigenschaft, um die Textfarbe in einem neuen Tab festzulegen, und die `ntp_background` Eigenschaft, um die Farbe eines neuen Tabs festzulegen ([Firefox Bug 1347204](https://bugzil.la/1347204)).
- Themes können jetzt die Farben für Seitenleisten definieren, zum Beispiel die Lesezeichen-Seitenleiste ([Firefox Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:
  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht Web-Erweiterungen die Installation und Aktivierung signierter Browser-Themes ([Firefox Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition experimenteller [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüssel-Eigenschaften für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht Ihnen, die Liste der installierten Suchmaschinen abzurufen und mit diesen zu suchen ([Firefox Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} akzeptiert jetzt einen `options` Parameter, mit dem Sie verschiedene Optionen für die zurückgegebene Listeneinstellungen festlegen können ([Firefox Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Multi-Select ([Firefox Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo` Objekt — `populate` — das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt wird, wird das zurückgegebene `windows.Window` Objekt nicht mit einer Liste von Tabs gefüllt, um die Leistung zu verbessern ([Firefox Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs, indem `highlighted: true` im `updateProperties` Parameter enthalten ist ([Firefox Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox Bug 1486050](https://bugzil.la/1486050)), indem sowohl `highlighted: true` als auch `active: false` im `updateProperties` Parameter enthalten sind.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}} Eigenschaft spiegelt jetzt korrekt wider, welche Registerkarten in einem Browserfenster ausgewählt (hervorgehoben) sind, und {{WebExtAPIRef("tabs.highlight")}} unterstützt das Ändern des Hervorhebungsstatus mehrerer Registerkarten ([Firefox Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle` Eigenschaft im `filter` Objekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name wird beibehalten, ist jedoch veraltet. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef("tabs.onUpdated")}} Ereignis kann verwendet werden, um zu verfolgen, wenn ein Tab die Aufmerksamkeit des Benutzers mit der `attention` Eigenschaft des `changeInfo` Objekts erregt ([Firefox Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}} API hinzugefügt. Die Methode gibt das Element zurück, das vom `targetElementId` Parameter referenziert wird, der das angeklickte Element identifiziert. Wenn das `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüeinträge zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüeinträgen umzuschalten ([Firefox Bug 1482529](https://bugzil.la/1482529)).
- Elemente, die mit der {{WebExtAPIRef("menus")}} API erstellt werden, unterstützen jetzt Zugriffstasten ([Firefox Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns` Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, selbst diejenigen, die normalerweise in einem Matchmuster nicht erlaubt sind ([Firefox Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Tab-Kontextmenüelement angeklickt wird, wird die ["activeTab"-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, auch wenn dies nicht der aktuell aktive Tab ist ([Firefox Bug 1446956](https://bugzil.la/1446956)).

#### Sonstiges

- {{WebExtAPIRef("commands.onCommand")}} wird nun als [Benutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}} API ermöglicht es Ihnen jetzt, nach spekulativen Verbindungen zu filtern ([Firefox Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName` und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 übertragen ([Firefox Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} umfasst jetzt eine Eigenschaft, die den SameSite-Status des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}} Enumeration definiert SameSite-Statuswerte ([Firefox Bug 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs passen nun explizit das "data" URL-Schema an ([Firefox Bug 1280370](https://bugzil.la/1280370)).
