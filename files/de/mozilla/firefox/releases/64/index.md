---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die [Accessibility Info-Bar](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde verbessert und enthält nun Informationen über das Farbkontrastverhältnis von Text oder Bildern auf der Seite ([Firefox Bug 1473037](https://bugzil.la/1473037)).
- Die Geräteauswahl im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird nun zwischen Sitzungen gespeichert ([Firefox Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die potenziell von der [Tracking Protection](/de/docs/Web/Privacy/Firefox_tracking_protection) betroffen sind, werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) hat Verbesserungen beim Eingeben und Auswerten von Code erhalten:

  - Die [Autovervollständigung](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke ist nun nicht mehr auf Groß-/Kleinschreibung angewiesen ([Firefox Bug 672733](https://bugzil.la/672733)).
  - Sie können jetzt durch den [Konsolenausdrucksverlauf](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) mit bash-ähnlicher Rückwärtssuche durchgehen ([Firefox Bug 1024913](https://bugzil.la/1024913)).
  - [Ausgewerteter Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole wird jetzt sowohl im Eingabe- als auch im Ausgabebereich syntaxhervorgehoben ([Firefox Bug 1463669](https://bugzil.la/1463669)).

- Das Schrittverhalten im [JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde ebenfalls verbessert:

  - [Aus einer Funktion heraustreten](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) im Debugger überspringt nun den Rückgabewert ([Firefox Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die GCLI der Entwicklerwerkzeuge wurde entfernt ([Firefox Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Spezifikationsfunktionalität von [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) wurde standardmäßig aktiviert ([Firefox Bug 1492012](https://bugzil.la/1492012)).
- Interaktions-Medienfunktionen wie [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer) wurden implementiert ([Firefox Bug 1035774](https://bugzil.la/1035774)). Für die Implementierungen von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox Bug 1483111](https://bugzil.la/1483111).
- Die Medienfunktion [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird jetzt in Firefox für Android unterstützt ([Firefox Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} Werte unterstützen jetzt Multi-Positions-Farbstoppsyntax, z. B. kann `yellow 25%, yellow 50%` nun als `yellow 25% 50%` geschrieben werden ([Firefox Bug 1352643](https://bugzil.la/1352643)).
- Die Eigenschaft {{cssxref("text-transform")}} akzeptiert nun den Wert `full-size-kana` ([Firefox Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung für {{cssxref("appearance", "-webkit-appearance")}} wurde hinzugefügt, um damit verbundene Webkompatibilitätsprobleme zu lindern ([Firefox Bug 1368555](https://bugzil.la/1368555)).
- Im Zusammenhang mit dem obigen Update haben wir auch die meisten Firefox-spezifischen `-moz-appearance` Werte entfernt ([Firefox Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt auf {{htmlelement("legend")}} Elementen unterstützt ([Firefox Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie sie in {{cssxref("offset-path")}} verwendet werden können, sind jetzt animierbar ([Firefox Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder Gruppe ein `-webkit-`präfixiertes Pseudo-Element enthält, wird dieses Pseudo-Element die Kette nicht mehr ungültig machen. (Siehe [Firefox Bug 1424106](https://bugzil.la/1424106) für die Details und [Firefox Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieser Funktion).

#### Entfernungen

- Die nicht standardmäßigen `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}} Werte wurden aus Webinhalten entfernt ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardmäßige `::-moz-tree` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde aus Webinhalten entfernt ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled` Voreinstellung wurde entfernt; [CSS Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Bug 1408841](https://bugzil.la/1408841)).
- Eine frühere Änderung - das Vertauschen der Werte der 2-Werte-{{cssxref("overflow")}}-Syntax, sodass Block zuerst und Inline an zweiter Stelle angegeben wird ([Firefox Bug 1481866](https://bugzil.la/1481866)) - wurde zurückgesetzt ([Firefox Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für den Grund.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} schlecht formatierte Unicode-Strings zurückgibt ([Firefox Bug 1469021](https://bugzil.la/1469021)).
- Proxied-Funktionen können jetzt an {{jsxref("Function.prototype.toString")}}`.call()` übergeben werden ([Firefox Bug 1440468](https://bugzil.la/1440468)).
- Im Konstruktor [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global) wird, wenn kein Wert angegeben wird, ein typisierte 0-Wert verwendet. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden implementiert:

  - Die API ist nun ohne Präfix ([Firefox Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Moduswechsel abgeschlossen ist ([Firefox Bug 1188256](https://bugzil.la/1188256) und [Firefox Bug 1491212](https://bugzil.la/1491212)).
  - Zuvor wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Events zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, sodass das Element das Event zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist nun auf macOS reaktiviert ([Firefox Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden als Aliase von [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) implementiert ([Firefox Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt alle Headernamen in Kleinbuchstaben zurück, entsprechend der Spezifikation ([Firefox Bug 1398718](https://bugzil.la/1398718)).
- Die Legacy-`HTMLAllCollection` Schnittstelle wurde gemäß den jüngsten [Spezifikationsaktualisierungen](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt einen festen Zeitstempel als Datenschutzmaßnahme zurück ([Firefox Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Funktionen wurden standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Workers

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters` Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, aktualisierten sich früher nicht, wenn die Änderungen während eines Anrufs vorgenommen wurden. Sie werden jetzt live aktualisiert, ohne Neuverhandlung ([Firefox Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, die nun veraltet ist ([Firefox Bug 1435789](https://bugzil.la/1435789)).
- Die automatische Verstärkungsregelung (AGC) ist nun standardmäßig aktiviert; dies kann mit der Einstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Webkompatibilitätsprobleme zu beheben, wurde hinter einer Voreinstellung (`dom.window.event.enabled`) versteckt und in Freigabeverionen vorerst deaktiviert, da andere Probleme aufgetaucht sind ([Firefox Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63-Freigabezyklus geschah, aber wir erwähnen es hier nur zur Sicherheit.
- Die `LocalMediaStream` Schnittstelle und ihre `stop()` Methode wurden entfernt ([Firefox Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Abwertung von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Ein Video-Stream stoppen](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie Sie einen gesamten Stream stoppen können.
- Die `AudioStreamTrack` und `VideoStreamTrack` Schnittstellen wurden entfernt, da beide seit einiger Zeit veraltet sind ([Firefox Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert; Spuren werden jetzt anhand des Wertes ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft identifiziert, z. B. `audio` oder `video`.

### Sicherheit

- Der Symantec CA Distrust-Plan wurde implementiert (siehe [Firefox Bug 1409257](https://bugzil.la/1409257); siehe auch die [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) Diskussion für weitere Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um Ressourcen zu regulieren, die über Stylesheets abgerufen werden ([Firefox Bug 1330487](https://bugzil.la/1330487)) — für weitere Informationen siehe [Integration mit CSS](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_css).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox Bug 1504478](https://bugzil.la/1504478), [Firefox Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Durch synthetisierte `Shift` Tastenevents mit `WebDriver:PerformActions` wurden keine Großbuchstaben erzeugt ([Firefox Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Hängen führen, wenn der zugrunde liegende Inhaltprozess des Tabs während dieser Navigation mehrmals geändert wird ([Firefox Bug 1504807](https://bugzil.la/1504807)).
- Um die Leistung zu verbessern und den Speicherbedarf von Firefox zu reduzieren, ist die Standardseite, die für einen neuen Tab oder ein neues Fenster geladen wird, nicht mehr `about:newtab`, sondern `about:blank` ([Firefox Bug 1506643](https://bugzil.la/1506643)).
- Das Einführungsfeld für Inhaltsblockierung, das auf verschiedenen Webseiten angezeigt wurde und zu fehlerhaften Elementeinteraktionen führte, ist jetzt standardmäßig deaktiviert ([Firefox Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, `{{WebExtAPIRef("menus.overrideContext()")}}`, kann aus dem DOM-Ereignis `contextmenu` aufgerufen werden, um ein benutzerdefiniertes Kontextmenü auf Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle standardmäßigen Firefox-Menüelemente zu verbergen, um eine benutzerdefinierte Kontextmenü-Benutzeroberfläche bereitzustellen. Dieses Kontextmenü kann aus mehreren obersten Menüeinträgen der Erweiterung bestehen und kann optional Registerkarten- oder Lesezeichen-Kontextmenüeinträge von anderen Erweiterungen enthalten. Siehe [diesen Blogeintrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) für weitere Details.

  - `{{WebExtAPIRef("menus.overrideContext()")}}` wurde in ([Firefox Bug 1280347](https://bugzil.la/1280347)) implementiert.
  - Die Option `showDefaults: false`, die verwendet werden kann, um die standardmäßigen Kontextmenüoptionen zu verbergen, wurde in ([Firefox Bug 1367160](https://bugzil.la/1367160)) implementiert.
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://` Dokument-URL zu entsprechen, selbst wenn `{{WebExtAPIRef("menus.overrideContext()")}}` verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüeinträge auf bestimmte Dokumente zu beschränken ([Firefox Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue Eigenschaft `viewTypes` in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Symbol eines vorhandenen Menüelements zu aktualisieren ([Firefox Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welche Maustaste verwendet wurde, als ein Menüelement angeklickt wurde — dies kann mit der neuen `button`-Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} ermittelt werden ([Firefox Bug 1469148](https://bugzil.la/1469148)).

#### Windows

- Die Methode {{WebExtAPIRef("windows.create()")}} hat jetzt eine neue verfügbare Option — `cookieStoreId` —, die angibt, welche `CookieStoreId` für alle Tabs verwendet werden soll, die beim Öffnen des Fensters erstellt wurden ([Firefox Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die Eigenschaft `cookieConfig` von {{WebExtAPIRef("privacy.websites")}} ist ein Objekt, das eine `behavior`-Eigenschaft akzeptieren kann — diese Eigenschaft kann nun einen neuen Wert annehmen, `reject_trackers`, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue `pinned`-Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Seitenaktionen beim Installieren an die Adressleiste angeheftet werden sollen oder nicht ([Firefox Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifests auf Windows wird zuerst die 32-Bit-Registrierungsansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) für Registrierungsschlüssel geprüft, gefolgt von der "nativen" Registrierungsansicht; Sie sollten diejenige verwenden, die für Ihre Anwendung geeignet ist ([Firefox Bug 1494709](https://bugzil.la/1494709)).
- Das `chrome_settings_overrides` Feld des [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) Feld kann jetzt neue Eigenschaften enthalten — `suggest_url` und `suggest_url_post_params` ([Firefox Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
