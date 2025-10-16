---
title: Firefox 63 Versionshinweise für Entwickler
short-title: Firefox 63
slug: Mozilla/Firefox/Releases/63
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 63, die sich auf Entwickler auswirken. Firefox 63 wurde am 23. Oktober 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Der Font-Tab im [Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) enthält jetzt einen Editor, der es einfach macht, die Einstellungen der Fonts auf Ihrer Seite anzuzeigen und zu bearbeiten. Siehe [Edit fonts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) für Details.
- Der [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) ist jetzt standardmäßig aktiviert ([Firefox Bug 1482454](https://bugzil.la/1482454)).
- Wenn Sie mit der Maus über ein Objekt im [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) fahren, wird [das Element hervorgehoben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) und seine Rolle und sein Name werden in einer Informationsleiste auf der Seite angezeigt ([Firefox Bug 1473030](https://bugzil.la/1473030)).
- Die Befehlszeile in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wird jetzt direkt nach der Konsolenausgabe angezeigt ([Firefox Bug 1136299](https://bugzil.la/1136299)).
- Ein neues Symbol wurde zum Inhalt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hinzugefügt, um anzuzeigen, wann eine URL zu einem bekannten Tracker gehört — siehe [security icons](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-monitor-request-list-security-icons) ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Der Standardwert von `devtools.aboutdebugging.showSystemAddons` ist jetzt `false`, was bedeutet, dass System-Add-ons nicht auf der `about:debugging`-Seite aufgelistet werden. Sie können die Einstellungen ändern, indem Sie zu `about:config` navigieren ([Firefox Bug 1425347](https://bugzil.la/1425347)).
- Die Symbolleiste des [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde vereinfacht, und wir haben die Option hinzugefügt, das Ansichtsfenster linksbündig auszurichten.
- Der Seiteninspektor enthält einen [Link zur Klassendefinition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom-element-definition) für ein benutzerdefiniertes Element ([Firefox Bug 1443923](https://bugzil.la/1443923)).

### HTML

- Unterstützung für das {{HTMLElement("img")}}-Elementattribut `decoding` wurde hinzugefügt ([Firefox Bug 1416328](https://bugzil.la/1416328)); siehe auch [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

#### Entfernungen

- Unterstützung für den `sidebar` Linktyp (`rel="sidebar"`) wurde entfernt. Wenn ein Anker-Tag dieses Attribut enthält, wird es ignoriert ([Firefox Bug 1452645](https://bugzil.la/1452645)).

### CSS

- Unterstützung für die {{CSSxRef(":defined")}} Pseudo-Klasse wurde hinzugefügt ([Firefox Bug 1331334](https://bugzil.la/1331334)).
- Unterstützung für {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}} und {{CSSxRef("gap")}} wurden im [Flexbox-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#the_gap_properties) hinzugefügt ([Firefox Bug 1398483](https://bugzil.la/1398483)).
- Unterstützung für [webkit-präfixierte Pixel-Dichte @media-Abfragen](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) wurde wieder aktiviert ([Firefox Bug 1444139](https://bugzil.la/1444139)).
- Unterstützung hinzugefügt für die [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (Flexbox) Eigenschaften {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("align-items")}} sowie die {{CSSxRef("justify-content")}}-Eigenschaft ([Firefox Bug 1472843](https://bugzil.la/1472843)).
- Die `path()`-Funktion für {{CSSxRef("offset-path")}} wurde implementiert ([Firefox Bug 1429298](https://bugzil.la/1429298)).
- Syntaxverbesserungen der Media Queries Level 4 Spezifikation wurden implementiert, insbesondere [verschachtelte Boolesche Ausdrücke](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#creating_complex_media_queries) und die [Bereichssyntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) ([Firefox Bug 1422225](https://bugzil.la/1422225)).
- `offset-*`-Eigenschaften wurden in {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, und {{CSSxRef("inset-inline-end")}} umbenannt ([Firefox Bug 1464782](https://bugzil.la/1464782)).
- Unterstützung für die [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienfunktion hinzugefügt ([Firefox Bug 1365045](https://bugzil.la/1365045), [Firefox Bug 1475462](https://bugzil.la/1475462)).
- Fluss-relativ Werte (`block`, `inline`) für die {{CSSxRef("resize")}}-Eigenschaft hinzugefügt ([Firefox Bug 1464786](https://bugzil.la/1464786)).
- Flexbox-Layout für `safe` & `unsafe` Werte in {{CSSxRef("align-self")}}, {{CSSxRef("align-content")}}, und {{CSSxRef("justify-content")}} implementiert ([Firefox Bug 1297774](https://bugzil.la/1297774)).
- Die [Logischen Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) (wo angebracht) sind jetzt animierbar ([Firefox Bug 1309752](https://bugzil.la/1309752)).

#### Entfernungen

- `offset-block-start`, `offset-block-end`, `offset-inline-start`, und `offset-inline-end` wurden entfernt; diese wurden in `inset-*` umbenannt, wie oben beschrieben ([Firefox Bug 1464782](https://bugzil.la/1464782)).

### SVG

_Keine Änderungen._

### JavaScript

- Das {{JSxRef("Symbol.prototype.description")}}-Eigenschaft wurde implementiert ([Firefox Bug 1472170](https://bugzil.la/1472170)).
- Die {{JSxRef("Object.fromEntries()")}}-Methode wurde hinzugefügt ([Firefox Bug 1469019](https://bugzil.la/1469019)).
- Wenn Sie versuchen, auf eine Eigenschaft eines undefinierten Objekts zuzugreifen, ist die Fehlermeldung jetzt erheblich verbessert. Betrachtet man den Fall, wo `x` undefiniert ist und man versucht, auf `x.y` zuzugreifen, gibt die Konsole jetzt anstelle von "TypeError: x is undefined" die detailliertere Meldung [x is undefined; can't access its "y" property](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) zurück ([Firefox Bug 1259822](https://bugzil.la/1259822)).

#### Entfernungen

- Experimentelle Unterstützung für die Serialisierung von WebAssembly-Modulen in IndexedDB wurde entfernt ([Firefox Bug 1469395](https://bugzil.la/1469395)).

### APIs

#### Neue APIs

- Die Shadow DOM ([Firefox Bug 1471947](https://bugzil.la/1471947)) und Custom Elements ([Firefox Bug 1471948](https://bugzil.la/1471948)) APIs wurden standardmäßig aktiviert; siehe [Web components](/de/docs/Web/API/Web_components) für mehr Details.
- Die [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API) wurde implementiert ([Firefox Bug 1409664](https://bugzil.la/1409664)).
- Die [Async Clipboard API](/de/docs/Web/API/Clipboard) wurde implementiert und standardmäßig für alle Kanäle aktiviert ([Firefox Bug 1461465](https://bugzil.la/1461465)). Wie bei Chrome implementiert Firefox derzeit nur die Methoden [`writeText()`](/de/docs/Web/API/Clipboard/writeText) und [`readText()`](/de/docs/Web/API/Clipboard/readText); allerdings ist `readText()` im Gegensatz zu Chrome nur in [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) verfügbar.
- Die [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent) Schnittstelle wird jetzt unterstützt. Sie ermöglicht das Senden von Ereignissen, wenn die {{HTTPHeader("Content-Security-Policy")}} verletzt wird ([Firefox Bug 1472661](https://bugzil.la/1472661)).

#### DOM

- Die folgenden Teile der [Web Animations API](/de/docs/Web/API/Web_Animations_API) wurden standardmäßig aktiviert (siehe [Firefox Bug 1476158](https://bugzil.la/1476158)):
  - Die [`Animation`](/de/docs/Web/API/Animation)-Eigenschaften [`ready`](/de/docs/Web/API/Animation/ready) und [`finished`](/de/docs/Web/API/Animation/finished), die die `ready` und `finished` {{JSxRef("Promise")}}-Objekte der `Animation`-Objekte angeben.
  - Die [`Animation`](/de/docs/Web/API/Animation)-Eigenschaft [`effect`](/de/docs/Web/API/Animation/effect).
  - Die Schnittstellen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) und [`AnimationEffect`](/de/docs/Web/API/AnimationEffect).

- Die [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)-Methode wurde implementiert ([Firefox Bug 1469592](https://bugzil.la/1469592)).
- Die historisch, zuvor nicht-standardisierte [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) Eigenschaft wird jetzt aus Kompatibilitätsgründen unterstützt ([Firefox Bug 1452569](https://bugzil.la/1452569)).
- Wir haben die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft implementiert, um die Web-Kompatibilität zu verbessern, da sie jetzt Standard ~f geworden ist ([Firefox Bug 218415](https://bugzil.la/218415)). Aufgrund einiger Web-Kompatibilitätsprobleme (z.B. [Firefox Bug 1479964](https://bugzil.la/1479964)) wurde dies jedoch schnell in Nicht-Nightly-Kanälen deaktiviert, versteckt hinter dem `dom.window.event.enabled` Pref ([Firefox Bug 1493869](https://bugzil.la/1493869)).
- Um Firefox mit Edge und Chrome in Einklang zu bringen, gibt die [`navigator.platform`](/de/docs/Web/API/Navigator/platform) Eigenschaft jetzt `"Win32"` zurück, selbst wenn es auf 64-Bit-Windows ausgeführt wird ([Firefox Bug 1472618](https://bugzil.la/1472618)).
- Vor Firefox 63 führten Links, die neue Fenster öffneten und `rel="noopener"` hatten, sowie Aufrufe von [`Window.open()`](/de/docs/Web/API/Window/open) mit dem aktivierten [`noopener`](/de/docs/Web/API/Window/open) Fensterfeature standardmäßig dazu, dass alle Fensterfunktionen deaktiviert waren, sodass Sie alle gewünschten Standardfunktionen explizit neu aktivieren mussten. Diese Fenster haben jetzt die gleiche Menge an Funktionalitäten wie jedes andere Fenster, und Sie müssen explizit deaktivieren, was Sie nicht möchten ([Firefox Bug 1419960](https://bugzil.la/1419960)).

#### DOM-Ereignisse

- Auf Windows wurde die Behandlung der `Alt`-Taste _auf der rechten Seite_ der Tastatur verbessert. Wenn das aktuelle Tastaturlayout des Nutzers die `Alt`-Taste der `AltGr`-Modifikatortaste zuordnet, wird der Wert von [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) jetzt als `"AltGraph"` gemeldet. Dieses Verhalten entspricht dem kürzlich in Chrome eingeführten Verhalten ([Firefox Bug 900750](https://bugzil.la/900750)).

#### Medien, Web Audio und WebRTC

- Mikrofonzugriff funktioniert jetzt gleichzeitig in mehreren Tabs, auch innerhalb desselben Inhaltsprozesses ([Firefox Bug 1404977](https://bugzil.la/1404977)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) wurde aktualisiert, um das sctp-sdp-21-Datenformat für die Daten zu unterstützen, zusätzlich zum zuvor unterstützten älteren sctp-sdp-05-Format.
- Der Knotentyp [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) für die Web Audio API hat jetzt eine Standardkanalanzahl von 2 statt 1, um der Spezifikation zu entsprechen ([Firefox Bug 1413283](https://bugzil.la/1413283)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Schnittstelle [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) (und damit alle anderen darauf basierenden Knotentypen) wirft jetzt die richtige Ausnahme, wenn ein negativer Wert als Knotenstartzeit angegeben wird. Dieser Fehler ist ein `RangeError` ([Firefox Bug 1413284](https://bugzil.la/1413284)).
- Die minimal und maximal zugelassenen Werte für das [`AudioParam`](/de/docs/Web/API/AudioParam) Objekt [`value`](/de/docs/Web/API/AudioParam/value) wurden auf den minimalen negativen Einzelpräzisions-Floating-Point-Wert (-340.282.346.638.528.859.811.704.183.484.516.925.440) und den maximal positiven Einzelpräzisions-Floating-Point-Wert (+340.282.346.638.528.859.811.704.183.484.516.925.440) geändert ([Firefox Bug 1476695](https://bugzil.la/1476695)).
- Die [`SourceBuffer.changeType`](/de/docs/Web/API/SourceBuffer/changeType)-Methode, die es ermöglicht, während eines aktiven Streams Codecs zu wechseln, wurde standardmäßig aktiviert. Dies ist Teil der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ([Firefox Bug 1481166](https://bugzil.la/1481166)).
- Die Methode [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime) wurde aktualisiert, um korrekt ein Array von Float-Werten zu akzeptieren, um die Werte des Parameters anzugeben, die mit der Zeit geändert werden sollen. Zuvor erforderte sie ein {{jsxref("Float32Array")}} ([Firefox Bug 1421091](https://bugzil.la/1421091)).
- `AudioParam.setValueCurveAtTime()` wurde ebenfalls aktualisiert, um korrekt einen ordnungsgemäßen `TypeError` zurückzugeben, wenn in dem `values`-Array ein nicht-endlicher Wert gefunden wird ([Firefox Bug 1472095](https://bugzil.la/1472095)).
- Darüber hinaus wurde `setValueCurveAtTime()` aktualisiert, um sicherzustellen, dass, wenn der Parameter das Verfolgen der angegebenen Wertkurve nach dem Ablauf der Dauer beendet, der Wert des Parameters auf den letzten Wert in der Liste der zu kurvenden Werte gesetzt wird ([Firefox Bug 1308436](https://bugzil.la/1308436)).
- Das `RTCRTPStreamStats`-Wörterbuch wurde in `RTCRtpStreamStats` umbenannt, um sie mit anderen WebRTC-Wörterbüchern und der Spezifikation konsistent zu halten ([Firefox Bug 1480498](https://bugzil.la/1480498)).
- Unterstützung für die `RTCRtpStreamStats` Wörterbuch-`kind`-Eigenschaft wurde hinzugefügt ([Firefox Bug 1481851](https://bugzil.la/1481851)).
- Die `RTCRtpStreamStats`-Wörterbuch-`isRemote`-Eigenschaft ist veraltet und wird in Firefox 65 entfernt. Eine Warnung wird jetzt in der Konsole ausgegeben, wenn auf diese Eigenschaft zugegriffen wird. Siehe [diesen Blogbeitrag auf dem Advancing WebRTC Blog](https://blog.mozilla.org/webrtc/getstats-isremote-65/) für Details ([Firefox Bug 1393306](https://bugzil.la/1393306)).

#### Canvas und WebGL

- Ein neues `powerPreference`-Kontextattribut wurde zu [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt. Auf macOS können damit nicht performancekritische WebGL-Anwendungen und Applets die schwach leistungsfähige GPU anstelle der leistungsstarken GPU in Mehr-GPU-Systemen anfordern ([Firefox Bug 1349799](https://bugzil.la/1349799)).

#### Entfernungen

- Die veralteten und nicht-standardisierten Firefox-spezifischen Methoden `Window.back()` und `Window.forward()` wurden entfernt. Bitte verwenden Sie stattdessen die Methoden [`window.history.back()`](/de/docs/Web/API/History/back) und [`window.history.forward()`](/de/docs/Web/API/History/forward) ([Firefox Bug 1479486](https://bugzil.la/1479486)).
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind in [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Instanzen nicht mehr verfügbar, da sie potenzielle Speicherlecks verursachten ([Firefox Bug 1264182](https://bugzil.la/1264182)).
- Da es in der Spezifikation ohnehin als veraltet galt, wurde die eingeschränkte Unterstützung für Doppler-Effekte auf [`PannerNode`](/de/docs/Web/API/PannerNode) aus der Web Audio API entfernt. Die [`AudioListener`](/de/docs/Web/API/AudioListener)-Eigenschaften `dopplerFactor` und `speedOfSound` wurden entfernt, ebenso die `PannerNode`-Methode `setVelocity()` ([Firefox Bug 1148354](https://bugzil.la/1148354)).

### CSSOM

_Keine Änderungen._

### HTTP

- Der {{HTTPHeader("Clear-Site-Data")}}-Header ist implementiert und nicht mehr hinter einer Einstellung verborgen ([Firefox Bug 1470111](https://bugzil.la/1470111)).

### Sicherheit

- Site-Favicons unterliegen jetzt [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), wenn eine für die Site konfiguriert ist ([Firefox Bug 1297156](https://bugzil.la/1297156)).
- Das `'report-sample'`-Ausdrucksdirektiv der CSP `script-src` wird jetzt beim Generieren von Verstoßmeldungen erkannt. Dieses Direktive gibt an, dass ein kurzer Musterabschnitt, wo der Verstoß aufgetreten ist, in die Meldung aufgenommen werden soll. Zuvor hatte Firefox dieses Muster immer aufgenommen ([Firefox Bug 1473218](https://bugzil.la/1473218)).
- Firefox verwendet jetzt NSS 3.39 ([Firefox Bug 1470914](https://bugzil.la/1470914)).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Features

- Marionette gibt jetzt eine `setWindowRect` [Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities) in der `WebDriver:NewSession`-Antwort zurück, die wahr ist, wenn das Browserfenster verschoben und in der Größe geändert werden kann, was z.B. für Firefox, aber nicht für mobile Anwendungen der Fall ist ([Firefox Bug 1470659](https://bugzil.la/1470659)).
- Unterstützung für die `unhandledPromptBehavior`-Fähigkeit hinzugefügt, die es ermöglicht, ein spezifisches [Prompt-Verhalten](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) der WebDriver-Spezifikation zu definieren ([Firefox Bug 1264259](https://bugzil.la/1264259)).
- Die Behandlung von Benutzereingabeaufforderungen wurde zu den Befehlen `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` hinzugefügt ([Firefox Bug 1439995](https://bugzil.la/1439995)).

#### API-Änderungen

- Veraltete Befehlspunkte ohne das `WebDriver:`-Präfix wurden entfernt ([Firefox Bug 1451725](https://bugzil.la/1451725)).
- Der `WebDriver:NewSession`-Befehl gibt empfohlene Zeichenfolgen (`linux`, `mac`, `windows`) für `platformName` zurück, wie in der WebDriver-Spezifikation definiert ([Firefox Bug 1470646](https://bugzil.la/1470646)).

#### Fehlerbehebungen

- Fokusbezogene Ereignisse fehlten bei der Elementinteraktion, wenn Firefox nicht als oberste Anwendung ausgeführt wurde ([Firefox Bug 1398111](https://bugzil.la/1398111)).
- Das Ausführen einer `pointerDown`- und `pointerUp`-Aktion in einer nachfolgenden Aktionssequenz konnte einen Doppelklick auslösen, da `WebDriver:ReleaseActions` den Doppelklick-Tracker nicht zurücksetzte ([Firefox Bug 1422583](https://bugzil.la/1422583)).
- Wiederholtes Ausführen von `pause`-Aktionen konnte zu einem unendlichen Hängen führen ([Firefox Bug 1447449](https://bugzil.la/1447449)).
- Ein Fehler wurde behoben, bei dem das Zurückgeben einer Elementkollektion von `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` einen zyklischen Referenzfehler verursachte ([Firefox Bug 1447977](https://bugzil.la/1447977)).
- Um ein Rennen zu verhindern, warten sowohl die `WebDriver:AcceptAlert`- als auch die `WebDriver:DismissAlert`-Befehle nun, bis die Benutzereingabeaufforderung geschlossen wurde ([Firefox Bug 1479368](https://bugzil.la/1479368)).
- Protokolleinträge, die vom Rahmenscript gesendet wurden, wurden nicht mehr durch `MarionettePrefs.logLevel` begrenzt, sondern alles wurde protokolliert ([Firefox Bug 1482829](https://bugzil.la/1482829)).
- `WebDriver:TakeScreenshot` gab einen Fehler aus, wenn ein Screenshot eines Fensters größer als 32767 Pixel Breite oder Höhe aufgenommen wurde ([Firefox Bug 1485730](https://bugzil.la/1485730)).
- `WebDriver:SendAlertText` ersetze den Standardwert der Benutzereingabeaufforderung nicht, wenn der zu sendende Text eine leere Zeichenfolge ist ([Firefox Bug 1486485](https://bugzil.la/1486485)).

### Andere

- Das Verhalten von [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe) wurde korrigiert, um nichts zu tun, wenn keine gültigen Eintragstypen im angegebenen Array von zu beobachtenden Eintragstypen gefunden wurden oder wenn das Array leer ist oder fehlt. Zuvor warf Firefox fälschlicherweise einen `TypeError` aus ([Firefox Bug 1403027](https://bugzil.la/1403027)).
- In [OpenSearch](/de/docs/Web/XML/Guides/OpenSearch) akzeptiert Firefox jetzt `application/json` als Such-URL-Typ, als Alias für `application/x-suggestions+json` ([Firefox Bug 1425827](https://bugzil.la/1425827)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Theming

- Die Standardtextfarbe für {{WebExtAPIRef("browserAction")}} Badges wird jetzt automatisch auf schwarz oder weiß gesetzt, um den Kontrast zum Hintergrund zu maximieren ([Firefox Bug 1474110](https://bugzil.la/1474110)).
- Die `accentcolor` und `textcolor` Eigenschaften des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels sind jetzt optional ([Firefox Bug 1413144](https://bugzil.la/1413144)).
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} und {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} ermöglichen es Ihnen, die Textfarbe von Browseraktions-Badges abzurufen und einzustellen ([Firefox Bug 1424620](https://bugzil.la/1424620)).
- Der `theme colors` Schlüssel in `manifest.json` unterstützt jetzt die `ntp_text`-Eigenschaft zur Einstellung der Textfarbe in einem neuen Tab und die `ntp_background`-Eigenschaft zur Einstellung der Farbe eines neuen Tabs ([Firefox Bug 1347204](https://bugzil.la/1347204)).
- Themes können jetzt die Farben für Seitenleisten definieren, wie die Lesezeichen-Sidebar ([Firefox Bug 1418602](https://bugzil.la/1418602)). Die relevanten Eigenschaften umfassen:
  - `sidebar`: Die Hintergrundfarbe für Seitenleisten.
  - `sidebar_text`: Die Textfarbe für Seitenleisten.
  - `sidebar_highlight`: Die Hintergrundfarbe eines ausgewählten Elements in einer Seitenleiste.
  - `sidebar_highlight_text`: Die Textfarbe eines ausgewählten Elements in einer Seitenleiste.

- Die Methode {{WebExtAPIRef("management.install()")}} ermöglicht es Web-Erweiterungen, signierte Browser-Themes zu installieren und zu aktivieren ([Firefox Bug 1369209](https://bugzil.la/1369209)).
- Der Manifest-Schlüssel [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) wurde eingeführt ([Firefox Bug 1472740](https://bugzil.la/1472740)). Dieser Schlüssel ermöglicht die Definition von experimentellen [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Schlüsseln für die Firefox-Oberfläche.

#### Suche

- Die neue {{WebExtAPIRef("search")}} API ermöglicht es Ihnen, die Liste der installierten Suchmaschinen abzurufen und mit ihnen zu suchen ([Firefox Bug 1352598](https://bugzil.la/1352598)).
- {{WebExtAPIRef("topSites.get()")}} nimmt jetzt einen `options`-Parameter entgegen, der Ihnen ermöglicht, verschiedene Optionen für die Liste der zurückgegebenen Sites festzulegen ([Firefox Bug 1445836](https://bugzil.la/1445836)).

#### Tabs

- {{WebExtAPIRef("tabs.onHighlighted")}} unterstützt jetzt Multi-Select ([Firefox Bug 1474440](https://bugzil.la/1474440)).
- {{WebExtAPIRef("tabs.highlight")}} enthält jetzt ein optionales Feld im `highlightInfo`-Objekt — `populate` — das standardmäßig auf `true` gesetzt ist. Wenn es auf `false` gesetzt ist, wird das zurückgegebene `windows.Window`-Objekt nicht mit einer Liste von Tabs gefüllt, um die Leistung zu verbessern ([Firefox Bug 1489814](https://bugzil.la/1489814)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs durch Einschließen von `highlighted: true` im `updateProperties`-Parameter ([Firefox Bug 1479129](https://bugzil.la/1479129)).
- {{WebExtAPIRef("tabs.update")}} unterstützt jetzt das Ändern des Auswahlstatus eines Tabs, ohne den fokussierten Tab zu ändern ([Firefox Bug 1486050](https://bugzil.la/1486050)) durch Einschließen von sowohl `highlighted: true` als auch `active: false` im `updateProperties`-Parameter.
- {{WebExtAPIRef("tabs.query")}} gibt jetzt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, wenn mehrere Tabs ausgewählt sind ([Firefox Bug 1465170](https://bugzil.la/1465170)).
- Die {{WebExtAPIRef("tabs.Tab")}}-Eigenschaft spiegelt jetzt korrekt wider, welche Tabs in einem Browserfenster ausgewählt (hervorgehoben) sind, und {{WebExtAPIRef("tabs.highlight")}} unterstützt das Ändern des hervorgehobenen Status mehrerer Tabs ([Firefox Bug 1464862](https://bugzil.la/1464862)).
- Die `isarticle`-Eigenschaft im `filter`-Objekt, das an {{WebExtAPIRef("tabs.onUpdated")}} übergeben wird, wurde in `isArticle` umbenannt. Der alte Name bleibt erhalten, ist aber veraltet. Diese Änderung wurde auf Firefox 62 hochgezogen ([Firefox Bug 1461695](https://bugzil.la/1461695)).
- Das {{WebExtAPIRef('tabs.onUpdated')}}-Ereignis kann verwendet werden, um zu verfolgen, wenn ein Tab die Aufmerksamkeit des Nutzers mit der `attention`-Eigenschaft des `changeInfo`-Objekts lenkt ([Firefox Bug 1396684](https://bugzil.la/1396684)).

#### Menüs

- {{WebExtApiRef("menus.getTargetElement()")}} wurde zur {{WebExtApiRef("menus")}}-API hinzugefügt. Die Methode gibt das Element zurück, das durch den `targetElementId`-Parameter referenziert wird, der das angeklickte Element identifiziert. Wenn der `targetElementId` nicht mehr gültig ist, gibt die Methode null zurück ([Firefox Bug 1325814](https://bugzil.la/1325814)).
- {{WebExtAPIRef("menus.create()")}} ermöglicht es Ihnen jetzt, unsichtbare Menüpunkte zu erstellen, und {{WebExtAPIRef("menus.update()")}} ermöglicht es Ihnen, die Sichtbarkeit von Menüpunkten umzuschalten ([Firefox Bug 1482529](https://bugzil.la/1482529)).
- Mit der {{WebExtAPIRef("menus")}}-API erstellte Einträge unterstützen jetzt Zugriffstasten ([Firefox Bug 1320462](https://bugzil.la/1320462)).
- Der `targetUrlPatterns`-Parameter von {{WebExtApiRef("menus.create()")}} und {{WebExtApiRef("menus.update()")}} unterstützt jetzt jedes URL-Schema, auch die, die normalerweise in einem Übereinstimmungsmuster nicht erlaubt sind ([Firefox Bug 1280370](https://bugzil.la/1280370)).
- Wenn ein Tabellenkontextmenüpunkt angeklickt wird, wird die ["activeTab"-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) jetzt für diesen Tab gewährt, selbst wenn es nicht der aktuell aktive Tab ist ([Firefox Bug 1446956](https://bugzil.la/1446956)).

#### Andere

- {{WebExtAPIRef("commands.onCommand")}} wird jetzt als [Nutzereingabe](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) behandelt ([Firefox Bug 1408129](https://bugzil.la/1408129)).
- Die {{WebExtAPIRef("webRequest")}}-API ermöglicht es Ihnen jetzt, für spekulative Verbindungen zu filtern ([Firefox Bug 1479565](https://bugzil.la/1479565)).
- {{WebExtAPIRef("webRequest.SecurityInfo")}} fügt zwei neue Eigenschaften hinzu, `keaGroupName`, und `signatureSchemeName`. Diese Änderung wurde auf Firefox 62 hochgezogen ([Firefox Bug 1471959](https://bugzil.la/1471959)).
- {{WebExtAPIRef("cookies.Cookie")}} enthält jetzt eine Eigenschaft, die den SameSite-Zustand des Cookies angibt. Die {{WebExtAPIRef("cookies.SameSiteStatus")}}-Enumeration definiert den SameSite-Zustand ([Firefox Bug 1351663](https://bugzil.la/1351663)).
- Übereinstimmungsmuster für URLs stimmen jetzt explizit mit dem "data"-URL-Schema überein ([Firefox Bug 1280370](https://bugzil.la/1280370)).
