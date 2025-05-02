---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die [Accessibility-Info-Leiste](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert, um Informationen über das Farbkontrastverhältnis von Text oder Bildern auf der Seite einzuschließen ([Firefox Bug 1473037](https://bugzil.la/1473037)).
- Die Auswahl von Geräten im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird jetzt zwischen den Sitzungen gespeichert ([Firefox Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die potenziell von der [Tracking-Protection](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden nun im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erhielt Verbesserungen beim Eingeben und Bewerten von Code:

  - Die [Autocomplete-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke ist jetzt nicht mehr case-sensitiv ([Firefox Bug 672733](https://bugzil.la/672733)).
  - Sie können nun durch den [Verlauf der Konsolenausdrücke](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) mit einer bash-ähnlichen Rückwärtssuche blättern ([Firefox Bug 1024913](https://bugzil.la/1024913)).
  - [Bewerteter Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole wird nun sowohl im Eingabe- als auch im Ausgabe-Bereich syntax-hervorgehoben ([Firefox Bug 1463669](https://bugzil.la/1463669)).

- Das Durchlaufen im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde ebenfalls verbessert:

  - [Das Verlassen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) einer Funktion im Debugger überspringt jetzt den Rückgabewert ([Firefox Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die Developer Tools GCLI wurde entfernt ([Firefox Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Spezifikationsfunktionalität von [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) wurde standardmäßig aktiviert ([Firefox Bug 1492012](https://bugzil.la/1492012)).
- Medien-Interaktionsmerkmale implementiert, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer) ([Firefox Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox Bug 1483111](https://bugzil.la/1483111).
- Das Medienmerkmal [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird jetzt in Firefox für Android unterstützt ([Firefox Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}}-Werte unterstützen jetzt Syntax für Farbunterbrechungen an mehreren Positionen, z. B. `gelb 25%, gelb 50%` kann jetzt als `gelb 25% 50%` geschrieben werden ([Firefox Bug 1352643](https://bugzil.la/1352643)).
- Die {{cssxref("text-transform")}}-Eigenschaft akzeptiert jetzt den Wert `full-size-kana` ([Firefox Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung für {{cssxref("appearance", "-webkit-appearance")}} hinzugefügt, um damit verbundene Webkompatibilitätsprobleme zu entschärfen ([Firefox Bug 1368555](https://bugzil.la/1368555)).
- Im Zusammenhang mit dem vorherigen Update haben wir auch die meisten Firefox-spezifischen `-moz-appearance`-Werte entfernt ([Firefox Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt auf {{htmlelement("legend")}}-Elementen unterstützt ([Firefox Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie sie in {{cssxref("offset-path")}} verwendet werden, sind jetzt animierbar ([Firefox Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder -gruppe ein mit `-webkit-`-gekennzeichnetes Pseudoelement enthält, macht dieses Pseudoelement sie nicht mehr ungültig (siehe [Firefox Bug 1424106](https://bugzil.la/1424106) für weitere Details und [Firefox Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieser Funktion).

#### Entfernungen

- Die nicht standardmäßigen `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}}-Werte wurden aus Webinhalten ausgeblendet ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardmäßige `::-moz-tree` [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wurde aus Webinhalten ausgeblendet ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled`-Voreinstellung wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Bug 1408841](https://bugzil.la/1408841)).
- Eine vorherige Änderung – zum Austauschen der Werte der 2-Werte {{cssxref("overflow")}}-Syntax, damit der Block zuerst und inline als zweites angegeben wird ([Firefox Bug 1481866](https://bugzil.la/1481866)) – wurde zurückgesetzt ([Firefox Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für den Grund.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} ungültige Unicode-Zeichenfolgen zurückgibt ([Firefox Bug 1469021](https://bugzil.la/1469021)).
- Proxied Funktionen können jetzt mit {{jsxref("Function.prototype.toString")}} verwendet werden ([Firefox Bug 1440468](https://bugzil.la/1440468)).
- Im [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird ein getipptes 0 verwendet, wenn kein Wert angegeben ist. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) wurden implementiert:

  - Die API ist jetzt ohne Präfix ([Firefox Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben beide jetzt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Modusänderung abgeschlossen ist ([Firefox Bug 1188256](https://bugzil.la/1188256) und [Firefox Bug 1491212](https://bugzil.la/1491212)).
  - Bisher wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, sodass das Element das Ereignis zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR-API](/de/docs/Web/API/WebVR_API) (1.1) ist jetzt auf macOS wieder aktiviert ([Firefox Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden implementiert, als Aliase von [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) ([Firefox Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt gemäß Spezifikation alle Header-Namen in Kleinbuchstaben zurück ([Firefox Bug 1398718](https://bugzil.la/1398718)).
- Die veraltete `HTMLAllCollection`-Schnittstelle wurde gemäß der aktuellen [Spezifikationsaktualisierungen](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt einen festen Zeitstempel aus Datenschutzgründen zurück ([Firefox Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Funktion-Befehle wurden standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Workers

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihres zulässigen Bereichs gesetzt werden ([Firefox Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters` Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, aktualisierten sich vorher nicht, wenn die Änderungen während eines Anrufs vorgenommen wurden. Sie werden jetzt live aktualisiert, ohne dass eine Neuverhandlung erforderlich ist ([Firefox Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert – dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, das jetzt als veraltet gilt ([Firefox Bug 1435789](https://bugzil.la/1435789)).
- Die automatische Lautstärkeregelung (AGC) ist jetzt standardmäßig aktiviert; dies kann mit der Voreinstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Webkompatibilitätsprobleme zu beheben, wurde hinter einer Voreinstellung (`dom.window.event.enabled`) platziert und ist in Freigabeversionen derzeit standardmäßig deaktiviert, aufgrund anderer entdeckter Probleme ([Firefox Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63 Release-Zyklus gemacht wurde, aber wir erwähnen es hier aus Sicherheitsgründen.
- Die `LocalMediaStream`-Schnittstelle und ihre `stop()`-Methode wurden entfernt ([Firefox Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Abschaffung von `LocalMediaStream` nicht mehr verfügbar. Lesen Sie im Abschnitt [Ein Videostream stoppen](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream) nach, wie ein kompletter Stream gestoppt werden kann.
- Die `AudioStreamTrack`- und `VideoStreamTrack`-Schnittstellen wurden entfernt, da beide seit einiger Zeit als veraltet gelten ([Firefox Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert; Spuren werden jetzt durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft identifiziert, z. B. `audio` oder `video`.

### Sicherheit

- Der Symantec CA-Distrust-Plan wurde implementiert (siehe [Firefox Bug 1409257](https://bugzil.la/1409257); siehe auch die Diskussion über [Mozilla's Plan für Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) für weitere Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um Ressourcen zu regeln, die über Stylesheets abgerufen werden ([Firefox Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Die veralteten Befehl-Endpunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox Bug 1504478](https://bugzil.la/1504478), [Firefox Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Vom `WebDriver:PerformActions` synthetisierte `Shift`-Tastenereignisse resultierten nicht in großgeschriebenen Buchstaben ([Firefox Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Hängen führen, wenn der zugrunde liegende Inhaltsprozess der Registerkarte während der Navigation mehrmals geändert wurde ([Firefox Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und Reduzierung des Speicherverbrauchs von Firefox ist die Standardseite, die für einen neuen Tab oder ein neues Fenster geladen wird, nicht mehr `about:newtab`, sondern `about:blank` ([Firefox Bug 1506643](https://bugzil.la/1506643)).
- Das Einführungsfenster für Inhaltsblocker, das auf verschiedenen Webseiten angezeigt wurde und das Interaktionen mit Elementen scheitern ließ, ist jetzt standardmäßig deaktiviert ([Firefox Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, {{WebExtAPIRef("menus.overrideContext()")}}, kann vom `contextmenu`-DOM-Ereignis aus aufgerufen werden, um ein benutzerdefiniertes Kontextmenü in Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle Standard-Menüpunkte von Firefox auszublenden, um eine benutzerdefinierte Kontextmenüoberfläche bereitzustellen. Dieses Kontextmenü kann aus mehreren obersten Menüeinträgen der Erweiterung bestehen und optional Registerkarten- oder Lesezeichen-Kontextmenüeinträge von anderen Erweiterungen enthalten. Weitere Details finden Sie in [diesem Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

  - {{WebExtAPIRef("menus.overrideContext()")}} wurde implementiert in ([Firefox Bug 1280347](https://bugzil.la/1280347)).
  - Die `showDefaults: false`-Option, die verwendet werden kann, um die Standardkontextmenüoptionen auszublenden, wurde implementiert in ([Firefox Bug 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` können jetzt verwendet werden, um eine `moz-extension://`-Dokument-URL zu übereinstimmen, selbst wenn {{WebExtAPIRef("menus.overrideContext()")}} verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüeinträge auf bestimmte Dokumente zu beschränken ([Firefox Bug 1498896](https://bugzil.la/1498896)).

- Sie können nun einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue `viewTypes`-Eigenschaft in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Symbol eines vorhandenen Menüeintrags zu aktualisieren ([Firefox Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welche Maustaste verwendet wurde, wenn auf einen Menüpunkt geklickt wurde — dies kann über die neue `button`-Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} herausgefunden werden ([Firefox Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die Methode {{WebExtAPIRef("windows.create()")}} hat jetzt eine neue verfügbare Option — `cookieStoreId`, die die `CookieStoreId` angibt, die für alle Tabs verwendet werden soll, die geöffnet werden, wenn das Fenster geöffnet wird ([Firefox Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}}-Eigenschaft `cookieConfig` ist ein Objekt, das eine `behavior`-Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert annehmen, `reject_trackers`, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox Bug 1398734](https://bugzil.la/1398734)).

### Manifeständerungen

- Die neue `pinned`-Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Manifests ermöglicht es Erweiterungen zu steuern, ob ihre Page-Aktionen beim Installieren an die Adressleiste angeheftet werden sollen oder nicht ([Firefox Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifests unter Windows wird zuerst der 32-bit Registrierungsansichts ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) nach Registrierungsschlüsseln überprüft, gefolgt von der "nativen" Registrierungsansicht; Sie sollten diejenige verwenden, die für Ihre Anwendung geeignet ist ([Firefox Bug 1494709](https://bugzil.la/1494709)).
- Das [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)-Feld `search_provider` objekt kann jetzt neue Eigenschaften beinhalten — `suggest_url` und `suggest_url_post_params` ([Firefox Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks Release-Beitrag: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
