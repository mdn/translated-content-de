---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die [Accessibility Info-Bar](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert, um Informationen über das Farbkontrastverhältnis von Text oder Bildern auf der Seite anzuzeigen ([Firefox Bug 1473037](https://bugzil.la/1473037)).
- Die Geräteauswahl des [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird nun zwischen den Sitzungen gespeichert ([Firefox Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die möglicherweise von der [Tracking Protection](/de/docs/Web/Privacy/Firefox_tracking_protection) betroffen sind, werden jetzt im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) hat Verbesserungen bezüglich der Eingabe und Auswertung von Code erhalten:

  - Die [Autocomplete](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke ist nun nicht mehr case-sensitiv ([Firefox Bug 672733](https://bugzil.la/672733)).
  - Sie können jetzt die [Konsolenausdruckgeschichte](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) mit einer bash-ähnlichen Rückwärtssuche durchgehen ([Firefox Bug 1024913](https://bugzil.la/1024913)).
  - Im Konsolen-Eingabefeld und im -Ausgabefeld wird jetzt der [bewertete Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) mit Syntax-Hervorhebung dargestellt ([Firefox Bug 1463669](https://bugzil.la/1463669)).

- Auch das Debuggen im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) hat einige Verbesserungen erhalten:

  - Beim [Verlassen einer Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html), während diese im Debugger ist, wird jetzt der Rückgabewert übersprungen ([Firefox Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die Developer Tools GCLI wurde entfernt ([Firefox Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Funktionalitäten der [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) Spezifikation sind nun standardmäßig aktiviert ([Firefox Bug 1492012](https://bugzil.la/1492012)).
- Die Interaktions-Media-Features, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer), wurden implementiert ([Firefox Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox Bug 1483111](https://bugzil.la/1483111).
- Die Medienfunktion [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird nun in Firefox für Android unterstützt ([Firefox Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} Werte unterstützen jetzt die Syntax für mehrfache Farbstopps, z. B. kann `yellow 25%, yellow 50%` nun als `yellow 25% 50%` geschrieben werden ([Firefox Bug 1352643](https://bugzil.la/1352643)).
- Die {{cssxref("text-transform")}} Eigenschaft akzeptiert nun den Wert `full-size-kana` ([Firefox Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung wurde hinzugefügt für {{cssxref("appearance", "-webkit-appearance")}}, um damit verbundene Webkompatibilitätsprobleme zu lindern ([Firefox Bug 1368555](https://bugzil.la/1368555)).
- In engem Zusammenhang mit dem obigen Update haben wir die meisten Firefox-spezifischen `-moz-appearance` Werte entfernt ([Firefox Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird nun auf {{htmlelement("legend")}} Elementen unterstützt ([Firefox Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie sie in {{cssxref("offset-path")}} verwendet werden, sind nun animierbar ([Firefox Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder -gruppe ein `-webkit-`präfixiertes Pseudoelement enthält, macht dieses Pseudoelement es nicht mehr ungültig (für Details siehe [Firefox Bug 1424106](https://bugzil.la/1424106) und für die Aktivierung dieser Funktion sehen Sie [Firefox Bug 1486325](https://bugzil.la/1486325)).

#### Entfernungen

- Die nicht standardmäßigen `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}} Werte wurden aus Webinhalten entfernt ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardmäßige `::-moz-tree` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde aus Webinhalten entfernt ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Die Einstellung `layout.css.filters.enabled` wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Bug 1408841](https://bugzil.la/1408841)).
- Eine frühere Änderung — um die Werte der 2-Werte-{{cssxref("overflow")}} Syntax zu tauschen, sodass der Block zuerst und Inline zuletzt angegeben wird ([Firefox Bug 1481866](https://bugzil.la/1481866)) — wurde rückgängig gemacht ([Firefox Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für die Begründung.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} ungültige Unicode-Strings zurückgibt ([Firefox Bug 1469021](https://bugzil.la/1469021)).
- Proxy-Funktionen können nun an {{jsxref("Function.prototype.toString")}}`.call()` übergeben werden ([Firefox Bug 1440468](https://bugzil.la/1440468)).
- Im [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird, wenn kein Wert angegeben wird, ein typisierter 0-Wert verwendet. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden implementiert:

  - Die API wurde unverändert veröffentlicht ([Firefox Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Modusänderung abgeschlossen ist ([Firefox Bug 1188256](https://bugzil.la/1188256) und [Firefox Bug 1491212](https://bugzil.la/1491212)).
  - Zuvor wurden die [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, sodass das Element das Ereignis zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist jetzt auf macOS wieder aktiviert ([Firefox Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden als Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) implementiert ([Firefox Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt alle Header-Namen in Kleinbuchstaben zurück, entsprechend der Spezifikation ([Firefox Bug 1398718](https://bugzil.la/1398718)).
- Das veraltete `HTMLAllCollection` Interface wurde gemäß den neuesten [Spezifikationsupdates](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt nun aus Datenschutzgründen einen festen Zeitstempel zurück ([Firefox Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Feature-Befehle wurden standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Workers

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor), und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen nun korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters` Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, aktualisierten sich bisher nicht, wenn die Änderungen während eines Anrufs vorgenommen wurden. Sie werden jetzt live aktualisiert, ohne Neuverhandlungen ([Firefox Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, das nun veraltet ist ([Firefox Bug 1435789](https://bugzil.la/1435789)).
- Die automatische Verstärkungsregelung (AGC) ist jetzt standardmäßig aktiviert; dies kann mit der Einstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Webkompatibilitätsprobleme zu lösen, wurde hinter einer Einstellung (`dom.window.event.enabled`) versteckt und ist in den freigegebenen Versionen zunächst deaktiviert, aufgrund anderer entdeckter Probleme ([Firefox Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63-Veröffentlichungszyklus durchgeführt wurde, aber wir erwähnen es hier sicherheitshalber.
- Die `LocalMediaStream` Schnittstelle und ihre `stop()` Methode wurden entfernt ([Firefox Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Außerbetriebnahme von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Stopping a video stream](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie Sie einen gesamten Stream stoppen können.
- Die `AudioStreamTrack` und `VideoStreamTrack` Schnittstellen wurden entfernt, da beide schon seit einiger Zeit veraltet sind ([Firefox Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert; Spuren werden jetzt durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft identifiziert, wie `audio` oder `video`.

### Sicherheit

- Der Symantec CA Misstrauensplan wurde umgesetzt (siehe [Firefox Bug 1409257](https://bugzil.la/1409257); siehe auch die Diskussion [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) für weitere Details).
- {{httpheader("Referrer-Policy")}} kann nun verwendet werden, um Ressourcen zu steuern, die über Stylesheets abgerufen werden ([Firefox Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehlspunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox Bug 1504478](https://bugzil.la/1504478), [Firefox Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Synthesizierte `Shift` Tastendruckereignisse mit `WebDriver:PerformActions` führten nicht zu Großbuchstaben ([Firefox Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Hängenbleiben führen, wenn der zugrunde liegende Inhaltsprozess des Tabs während der Navigation mehrmals geändert wurde ([Firefox Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und zur Reduzierung des Speicherbedarfs von Firefox wird die Standardseite für ein neues Tab oder Fenster nicht mehr `about:newtab`, sondern `about:blank` geladen ([Firefox Bug 1506643](https://bugzil.la/1506643)).
- Das Inhaltsblockierungseinführungspanel, das auf verschiedenen Webseiten angezeigt wurde und zu fehlerhaften Elementeinteraktionen führte, ist jetzt standardmäßig deaktiviert ([Firefox Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, `{{WebExtAPIRef("menus.overrideContext()")}}`, kann aus dem `contextmenu` DOM-Ereignis aufgerufen werden, um ein benutzerdefiniertes Kontextmenü auf Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle standardmäßigen Firefox-Menüpunkte auszublenden, um eine benutzerdefinierte Kontextmenü-UI bereitzustellen. Dieses Kontextmenü kann aus mehreren obersten Menüpunkten der Erweiterung bestehen und kann optional Tab- oder Lesezeichen-Kontextmenüpunkte anderer Erweiterungen enthalten. Weitere Details finden Sie in [diesem Blogpost](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

  - `{{WebExtAPIRef("menus.overrideContext()")}}` wurde implementiert in ([Firefox Bug 1280347](https://bugzil.la/1280347)).
  - Die Option `showDefaults: false`, die zur Ausblendung der standardmäßigen Kontextmenüoptionen verwendet werden kann, wurde implementiert in ([Firefox Bug 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://` Dokument-URL zu matchen, selbst wenn `{{WebExtAPIRef("menus.overrideContext()")}}` verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüpunkte auf bestimmte Dokumente zu beschränken ([Firefox Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt Einschränkungen für das Auftreten von Kontextmenüs in einem Add-on mithilfe der neuen `viewTypes` Eigenschaft in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} festlegen ([Firefox Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Icon eines vorhandenen Menüpunkts zu aktualisieren ([Firefox Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welche Maustaste verwendet wurde, als ein Menüpunkt angeklickt wurde — dies kann über die neue `button` Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} herausgefunden werden ([Firefox Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die {{WebExtAPIRef("windows.create()")}} Methode hat jetzt eine neue verfügbare Option — `cookieStoreId`, die den `CookieStoreId` angibt, der für alle Tabs, die beim Öffnen des Fensters erstellt werden, verwendet werden soll ([Firefox Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}} Eigenschaft `cookieConfig` ist ein Objekt, das eine `behavior` Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert, `reject_trackers`, annehmen, welcher die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) Methode `Sidebar.setPage()` wird jetzt unterstützt ([Firefox Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue `pinned` Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Page Actions bei der Installation an die Adressleiste angeheftet werden sollen oder nicht ([Firefox Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifests auf Windows wird zunächst die 32-Bit-Registry-Ansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) auf Registrierungsschlüssel überprüft, gefolgt von der "nativen" Registrierungsansicht; Sie sollten die für Ihre Anwendung geeignete verwenden ([Firefox Bug 1494709](https://bugzil.la/1494709)).
- Das [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) Feld `search_provider` Objekt kann jetzt neue Eigenschaften beinhalten — `suggest_url` und `suggest_url_post_params` ([Firefox Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
