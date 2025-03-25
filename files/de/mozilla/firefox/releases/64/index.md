---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die [Accessibility-Infoleiste](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert und enthält nun Informationen zum Farbkontrastverhältnis von Texten oder Bildern auf der Seite ([Firefox-Bug 1473037](https://bugzil.la/1473037)).
- Die Geräteeinstellungen im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) werden nun zwischen Sitzungen gespeichert ([Firefox-Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die möglicherweise von [Tracking Protection](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wurde verbessert, insbesondere beim Eingeben und Evaluieren von Code:

  - Die [Autocomplete](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsoleingaben ist nun nicht mehr groß-/kleinschreibungssensitiv ([Firefox-Bug 672733](https://bugzil.la/672733)).
  - Sie können nun durch die [History der Konsoleingaben](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) mit einer bash-ähnlichen Rückwärtssuche navigieren ([Firefox-Bug 1024913](https://bugzil.la/1024913)).
  - Ausgewerteter Code in der Konsole wird nun sowohl im Eingabe- als auch im Ausgabebereich syntaxhervorgehoben dargestellt ([Firefox-Bug 1463669](https://bugzil.la/1463669)).

- Auch das Schrittverhalten im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde verbessert:

  - Das [Heraustreten](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) aus einer Funktion im Debugger überspringt nun den Rückgabewert ([Firefox-Bug 923975](https://bugzil.la/923975)).

#### Entfernt

- Die Entwicklerwerkzeuge GCLI wurden entfernt ([Firefox-Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Funktionalität der [CSS-Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling)-Spezifikation wurde standardmäßig aktiviert ([Firefox-Bug 1492012](https://bugzil.la/1492012)).
- Interaktions-Media-Features, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer), wurden implementiert ([Firefox-Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox-Bug 1483111](https://bugzil.la/1483111).
- Das Media-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird nun in Firefox für Android unterstützt ([Firefox-Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}}-Werte unterstützen jetzt die Syntax für Farbstopps mit mehreren Positionen, z.B. kann `yellow 25%, yellow 50%` nun als `yellow 25% 50%` geschrieben werden ([Firefox-Bug 1352643](https://bugzil.la/1352643)).
- Die {{cssxref("text-transform")}}-Eigenschaft akzeptiert nun den Wert `full-size-kana` ([Firefox-Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung für {{cssxref("appearance", "-webkit-appearance")}} wurde hinzugefügt, um damit verbundenen Web-Kompatibilitätsproblemen entgegenzuwirken ([Firefox-Bug 1368555](https://bugzil.la/1368555)).
- Eng verbunden mit dem oben genannten Update haben wir auch die meisten der Firefox-spezifischen `-moz-appearance`-Werte entfernt ([Firefox-Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt auf {{htmlelement("legend")}}-Elementen unterstützt ([Firefox-Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie in {{cssxref("offset-path")}} verwendbar, sind nun animierbar ([Firefox-Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder -gruppe ein `-webkit-`-präfixiertes Pseudoelement einschließt, invalidiert dieses Pseudoelement sie nicht mehr (für Details siehe [Firefox-Bug 1424106](https://bugzil.la/1424106) und zur Aktivierung dieses Features [Firefox-Bug 1486325](https://bugzil.la/1486325)).

#### Entfernt

- Die nicht-standardisierten `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}}-Werte wurden aus Webinhalten ausgeblendet ([Firefox-Bug 1496961](https://bugzil.la/1496961)).
- Das nicht-standardisierte `::-moz-tree` [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wurde aus Webinhalten ausgeblendet ([Firefox-Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled`-Einstellung wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox-Bug 1408841](https://bugzil.la/1408841)).
- Eine frühere Änderung — um die Werte der 2-Wert-{{cssxref("overflow")}}-Syntax zu tauschen, damit Block zuerst und Inline zweitens angegeben wird ([Firefox-Bug 1481866](https://bugzil.la/1481866)) — wurde zurückgenommen ([Firefox-Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für Details.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} fehlerhaft Unicode-Zeichenketten zurückgibt ([Firefox-Bug 1469021](https://bugzil.la/1469021)).
- Proxied-Funktionen können nun zu {{jsxref("Function.prototype.toString")}}`.call()` übergeben werden ([Firefox-Bug 1440468](https://bugzil.la/1440468)).
- Im Konstruktor [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) wird, wenn kein Wert angegeben ist, ein getippter 0-Wert verwendet. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox-Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen, die mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) in Zusammenhang stehen, wurden umgesetzt:

  - Die API wurde ohne Präfix bereitgestellt ([Firefox-Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Moduswechsel abgeschlossen ist ([Firefox-Bug 1188256](https://bugzil.la/1188256) und [Firefox-Bug 1491212](https://bugzil.la/1491212)).
  - Vorher wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) gesendet, dann an das [`Element`](/de/docs/Web/API/Element). Dies wurde umgekehrt, sodass das Element zuerst das Ereignis erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox-Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist nun auf macOS wieder aktiviert ([Firefox-Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden implementiert, als Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) ([Firefox-Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt nun Header-Namen vollständig in Kleinbuchstaben zurück, gemäß Spezifikation ([Firefox-Bug 1398718](https://bugzil.la/1398718)).
- Das Legacy-Interface `HTMLAllCollection` wurde gemäß aktuellen [Spezifikations-Updates](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox-Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt nun aus Datenschutzgründen einen festen Zeitstempel zurück ([Firefox-Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Befehlskommandos wurden standardmäßig deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Workers

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox-Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen nun korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox-Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters`-Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, aktualisierten sich früher nicht, wenn die Änderungen während eines Anrufs vorgenommen wurden. Sie werden jetzt live aktualisiert, ohne Neuverhandlung ([Firefox-Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, die nun als veraltet gekennzeichnet ist ([Firefox-Bug 1435789](https://bugzil.la/1435789)).
- Die automatische Verstärkungsregelung (AGC) ist jetzt standardmäßig aktiviert; dies kann mit der Einstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox-Bug 1496714](https://bugzil.la/1496714)).

#### Entfernt

- Die Eigenschaft [`Window.event`](/de/docs/Web/API/Window/event), die in Firefox 63 hinzugefügt wurde, um Kompatibilitätsprobleme mit Webinhalten zu lösen, wurde hinter einer Voreinstellung (`dom.window.event.enabled`) platziert und ist in den freigegebenen Versionen vorerst deaktiviert, aufgrund anderer Probleme, die aufgetreten sind ([Firefox-Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63-Veröffentlichungszyklus geschah, aber wir erwähnen es hier nur für den Fall.
- Das `LocalMediaStream`-Interface und seine `stop()`-Methode wurden entfernt ([Firefox-Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Veraltung von `LocalMediaStream` nicht mehr verfügbar. Lesen Sie den [Abschnitt zum Beenden eines Videostreams](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie Sie einen gesamten Stream beenden können.
- Die Schnittstellen `AudioStreamTrack` und `VideoStreamTrack` wurden entfernt, da beide seit einiger Zeit veraltet sind ([Firefox-Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalitäten wurden in {{MediaStreamTrack}} integriert; Spuren werden jetzt durch den Wert ihrer {{kind}}-Eigenschaft identifiziert, wie `audio` oder `video`.

### Sicherheit

- Der Symantec CA Distrust Plan wurde implementiert (siehe [Firefox-Bug 1409257](https://bugzil.la/1409257); siehe auch die Diskussion [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) für mehr Details).
- {{httpheader("Referrer-Policy")}} kann nun verwendet werden, um über Stylesheets geladene Ressourcen zu regeln ([Firefox-Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Kommandopunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox-Bug 1504478](https://bugzil.la/1504478), [Firefox-Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Synthesierte `Shift`-Tastenereignisse durch die Nutzung von `WebDriver:PerformActions` führten nicht zu Großbuchstaben ([Firefox-Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Stillstand führen, wenn der zugrundeliegende Inhaltsprozess des Tabs während der Navigation mehrfach geändert wurde ([Firefox-Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und zur Reduzierung der Speicherauslastung von Firefox ist die standardmäßig geladene Seite für einen neuen Tab oder ein neues Fenster nicht mehr `about:newtab`, sondern `about:blank` ([Firefox-Bug 1506643](https://bugzil.la/1506643)).
- Das Content-Blocking-Einführungsfenster, das auf verschiedenen Webseiten angezeigt wurde und dazu führte, dass Elementinteraktionen fehlschlugen, ist jetzt standardmäßig deaktiviert ([Firefox-Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, {{WebExtAPIRef("menus.overrideContext()")}}, kann vom `contextmenu` DOM-Ereignis aufgerufen werden, um ein benutzerdefiniertes Kontextmenü in Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle standardmäßigen Firefox-Menüeinträge auszublenden und stattdessen eine benutzerdefinierte Kontextmenü-Oberfläche anzubieten. Dieses Kontextmenü kann aus mehreren obersten Menüpunkten der Erweiterung bestehen und optional Registerkarten- oder Lesezeichen-Kontextmenüpunkte anderer Erweiterungen enthalten. Weitere Details finden Sie in [diesem Blogpost](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

  - {{WebExtAPIRef("menus.overrideContext()")}} wurde implementiert in ([Firefox-Bug 1280347](https://bugzil.la/1280347)).
  - Die Option `showDefaults: false`, die verwendet werden kann, um die Standard-Kontextmenüoptionen auszublenden, wurde implementiert in ([Firefox-Bug 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` können jetzt verwendet werden, um eine `moz-extension://` Dokument-URL zu matchen, selbst wenn {{WebExtAPIRef("menus.overrideContext()")}} verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüeinträge auf bestimmte Dokumente zu beschränken ([Firefox-Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue `viewTypes`-Eigenschaft in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox-Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Icon eines vorhandenen Menüeintrags zu aktualisieren ([Firefox-Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welche Maustaste verwendet wurde, als ein Menüeintrag angeklickt wurde — dies kann mit der neuen `button`-Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} herausgefunden werden ([Firefox-Bug 1469148](https://bugzil.la/1469148)).

#### Windows

- Die Methode {{WebExtAPIRef("windows.create()")}} hat jetzt eine neue verfügbare Option — `cookieStoreId` — die die `CookieStoreId` spezifiziert, die für alle Tabs verwendet werden soll, die beim Öffnen des Fensters erstellt werden ([Firefox-Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}} `cookieConfig`-Eigenschaft ist ein Objekt, das eine `behavior`-Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert annehmen, `reject_trackers`, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox-Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox-Bug 1398734](https://bugzil.la/1398734)).

### Manifeständerungen

- Die neue `pinned`-Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Seitenaktionen beim Installieren an die Adressleiste angepinnt werden sollen oder nicht ([Firefox-Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifests unter Windows wird die 32-Bit-Registry-Ansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) zuerst nach Registry-Schlüsseln durchsucht, gefolgt von der "nativ"-Registry-Ansicht; Sie sollten die für Ihre Anwendung passende verwenden ([Firefox-Bug 1494709](https://bugzil.la/1494709)).
- Das Objekt `search_provider` des Felds [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) kann nun neue Eigenschaften beinhalten — `suggest_url` und `suggest_url_post_params` ([Firefox-Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks Releases Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
