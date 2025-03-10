---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen werden. Firefox 64 wurde am 11. Dezember 2018 freigegeben.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Die [Barrierefreiheits-Infobar](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde verbessert, um Informationen über das Farbkontrastverhältnis von Texten oder Bildern auf der Seite einzuschließen ([Firefox Bug 1473037](https://bugzil.la/1473037)).
- Die Gerätauswahl im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird nun zwischen den Sitzungen gespeichert ([Firefox Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die potenziell von der [Verfolgungsschutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) hat Verbesserungen beim Eingeben und Auswerten von Code erhalten:

  - [Autocomplete](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Ausdrücke in der Konsole ist nun nicht mehr abhängig von der Groß- und Kleinschreibung ([Firefox Bug 672733](https://bugzil.la/672733)).
  - Sie können jetzt durch die [Konsole-Ausdrucks-Historie](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) mit bash-ähnlicher Rückwärtssuche navigieren ([Firefox Bug 1024913](https://bugzil.la/1024913)).
  - [Ausgewerteter Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole wird jetzt sowohl im Input als auch im Output farblich hervorgehoben ([Firefox Bug 1463669](https://bugzil.la/1463669)).

- Auch das Durchlaufen im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde verbessert:

  - Das [Heraustreten](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) aus einer Funktion im Debugger überspringt jetzt den Rückgabewert ([Firefox Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die Entwicklerwerkzeuge GCLI wurde entfernt ([Firefox Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Spezifikationsfunktionalität von [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) wurde standardmäßig aktiviert ([Firefox Bug 1492012](https://bugzil.la/1492012)).
- Medienfunktionen für Interaktion, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer), wurden implementiert ([Firefox Bug 1035774](https://bugzil.la/1035774)). Zur Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox Bug 1483111](https://bugzil.la/1483111).
- Die Medienfunktion [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird jetzt in Firefox für Android unterstützt ([Firefox Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} Werte unterstützen nun die Syntax für mehrere Farbpositions-Stops, z.B. kann `yellow 25%, yellow 50%` jetzt als `yellow 25% 50%` geschrieben werden ([Firefox Bug 1352643](https://bugzil.la/1352643)).
- Die {{cssxref("text-transform")}} Eigenschaft akzeptiert jetzt den Wert `full-size-kana` ([Firefox Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung hinzugefügt für {{cssxref("appearance", "-webkit-appearance")}}, um damit verbundene Webkompatibilitätsprobleme zu lindern ([Firefox Bug 1368555](https://bugzil.la/1368555)).
- In enger Verbindung mit dem obigen Update haben wir die meisten Firefox-spezifischen `-moz-appearance` Werte entfernt ([Firefox Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt auf {{htmlelement("legend")}} Elementen unterstützt ([Firefox Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie sie in {{cssxref("offset-path")}} verwendet werden können, sind jetzt animierbar ([Firefox Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorenkette oder -gruppe ein `-webkit-`-präfixiertes Pseudoelement einschließt, macht dieses Pseudoelement es nicht mehr ungültig (siehe [Firefox Bug 1424106](https://bugzil.la/1424106) für die Details und [Firefox Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieser Funktion).

#### Entfernungen

- Die nicht standardisierten `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}} Werte wurden aus Webinhalten ausgeblendet ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardisierte `::-moz-tree` [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wurde aus Webinhalten ausgeblendet ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled` Einstellung wurde entfernt; [CSS Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Bug 1408841](https://bugzil.la/1408841)).
- Eine frühere Änderung — zum Vertauschen der Werte der 2-Wert {{cssxref("overflow")}} Syntax, sodass der Block zuerst und der Inline-Wert an zweiter Stelle angegeben wird ([Firefox Bug 1481866](https://bugzil.la/1481866)) — wurde zurückgesetzt ([Firefox Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für den Grund.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} ungültig formatierte Unicode-Zeichenketten zurückgibt ([Firefox Bug 1469021](https://bugzil.la/1469021)).
- Proxied Funktionen können nun an {{jsxref("Function.prototype.toString")}}`.call()` übergeben werden ([Firefox Bug 1440468](https://bugzil.la/1440468)).
- Im [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird ein typisiertes 0-Wert verwendet, wenn kein Wert angegeben ist. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden implementiert:

  - Die API ist jetzt unprefixed verfügbar ([Firefox Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben nun beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Moduswechsel abgeschlossen ist ([Firefox Bug 1188256](https://bugzil.la/1188256) und [Firefox Bug 1491212](https://bugzil.la/1491212)).
  - Früher wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) gesendet, dann an das [`Element`](/de/docs/Web/API/Element). Dies wurde so geändert, dass das Element zuerst das Ereignis erhält. Dies entspricht der neuesten Spezifikation und dem Verhalten von Google Chrome ([Firefox Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist nun wieder auf macOS aktiviert ([Firefox Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden als Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) implementiert ([Firefox Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt Headernamen alle in Kleinbuchstaben zurück, gemäß der Spezifikation ([Firefox Bug 1398718](https://bugzil.la/1398718)).
- Das alte `HTMLAllCollection` Interface wurde gemäß den aktuellen [Spezifikationsänderungen](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt zur Wahrung der Privatsphäre einen festen Zeitstempel zurück ([Firefox Bug 583181](https://bugzil.la/583181)).
- Folgende [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Funktionsbefehle wurden standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Worker

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox Bug 1263734](https://bugzil.la/1263734)).

#### Media, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen nun korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox Bug 1487963](https://bugzil.la/1487963)).
- Die `RTCRtpEncodingParameters` Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, aktualisieren sich nun während eines Anrufs ohne Neuverhandlung live ([Firefox Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, die nun veraltet ist ([Firefox Bug 1435789](https://bugzil.la/1435789)).
- Automatic Gain Control (AGC) ist jetzt standardmäßig aktiviert; dies kann über die Einstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Webkompatibilitätsprobleme zu beheben, wurde hinter eine Einstellung (`dom.window.event.enabled`) gestellt und standardmäßig in Freigabeversionen deaktiviert, da andere Probleme aufgedeckt wurden ([Firefox Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63 Freigabezyklus geschah, wir erwähnen es hier nur der Vollständigkeit halber.
- Das `LocalMediaStream` Interface und seine `stop()`-Methode wurden entfernt ([Firefox Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Abschaffung von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Ein Video-Stream stoppen](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie Sie einen ganzen Stream stoppen können.
- Die `AudioStreamTrack` und `VideoStreamTrack` Interfaces wurden entfernt, da beide seit einiger Zeit veraltet sind ([Firefox Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert; Tracks werden nun durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft identifiziert, wie `audio` oder `video`.

### Sicherheit

- Der Symantec CA Distrust-Plan wurde implementiert (siehe [Firefox Bug 1409257](https://bugzil.la/1409257); siehe auch die [Mozilla's Plan für Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) Diskussion für weitere Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um Ressourcen zu steuern, die über Stylesheets abgerufen werden ([Firefox Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehls-Endpunkte ohne `Marionette:`, `L10n:` oder `Addon:` Präfix (einschließlich `singeTap`) wurden entfernt ([Firefox Bug 1504478](https://bugzil.la/1504478), [Firefox Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Vom `WebDriver:PerformActions` synthetisierte `Shift`-Tastenevents führten nicht zu Großbuchstaben ([Firefox Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` könnte zu einem endlosen Hängen führen, wenn der zugrunde liegende Inhaltsprozess der Registerkarte während dieser Navigation mehrfach geändert wird ([Firefox Bug 1504807](https://bugzil.la/1504807)).
- Um die Leistung zu verbessern und den Speicherbedarf von Firefox zu reduzieren, wird standardmäßig nicht länger `about:newtab`, sondern `about:blank` geladen, wenn ein neues Tab oder Fenster geöffnet wird ([Firefox Bug 1506643](https://bugzil.la/1506643)).
- Das Einführungsfenster für Inhaltsblockierung, das auf verschiedenen Webseiten angezeigt wurde und dazu führte, dass Element-Interaktionen fehlschlugen, ist jetzt standardmäßig deaktiviert ([Firefox Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, `{{WebExtAPIRef("menus.overrideContext()")}}`, kann aus dem `contextmenu` DOM-Ereignis aufgerufen werden, um ein benutzerdefiniertes Kontextmenü auf Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle Standard-Firefox-Menüelemente auszublenden zugunsten einer benutzerdefinierten Kontextmenü-Benutzeroberfläche. Dieses Kontextmenü kann aus mehreren Menüelementen auf oberster Ebene von der Erweiterung bestehen und kann optional Registerkarten- oder Lesezeichen-Kontextmenüelemente von anderen Erweiterungen einschließen. Weitere Details finden Sie in [diesem Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

  - `{{WebExtAPIRef("menus.overrideContext()")}}` wurde in ([Firefox Bug 1280347](https://bugzil.la/1280347)) implementiert.
  - Die `showDefaults: false` Option, die verwendet werden kann, um die Standard-Kontextmenüoptionen auszublenden, wurde in ([Firefox Bug 1367160](https://bugzil.la/1367160)) implementiert.
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://` Dokument-URL zuzuordnen, auch wenn `{{WebExtAPIRef("menus.overrideContext()")}}` verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüelemente auf bestimmte Dokumente zu beschränken ([Firefox Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue `viewTypes` Eigenschaft in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Icon eines vorhandenen Menüeintrags zu aktualisieren ([Firefox Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welcher Maustaste verwendet wurde, als ein Menüeintrag geklickt wurde — dies kann mit der neuen `button` Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} herausgefunden werden ([Firefox Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die Methode {{WebExtAPIRef("windows.create()")}} hat jetzt eine neue Option — `cookieStoreId` — die die `CookieStoreId` angibt, die für alle beim Öffnen des Fensters erstellten Tabs verwendet werden soll ([Firefox Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft ist ein Objekt, das eine `behavior` Eigenschaft annehmen kann — diese Eigenschaft kann jetzt einen neuen Wert annehmen, `reject_trackers`, was die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements)`Sidebar.setPage()` wird jetzt unterstützt ([Firefox Bug 1398734](https://bugzil.la/1398734)).

### Manifeständerungen

- Die neue `pinned` Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Page Actions bei der Installation an die Adressleiste angepinnt sein sollen oder nicht ([Firefox Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifesten unter Windows wird zuerst die 32-Bit-Registrierungsansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) nach Registrierungsschlüsseln durchsucht, gefolgt von der "nativen" Registrierungsansicht; Sie sollten verwenden, was auch immer für Ihre Anwendung geeignet ist ([Firefox Bug 1494709](https://bugzil.la/1494709)).
- Das [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) Felds `search_provider` Objekt kann nun neue Eigenschaften enthalten — `suggest_url` und `suggest_url_post_params` ([Firefox Bug 1486819](https://bugzil.la/1486819)) und `search_url_post_params`.

## Siehe auch

- Hacks Release Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
