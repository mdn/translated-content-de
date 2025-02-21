---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 64, die Entwickler beeinflussen werden. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die [Barrierefreiheits-Infoleiste](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert, um Informationen über das Farbkontrastverhältnis von Text oder Bildern auf der Seite einzubeziehen ([Firefox Fehler 1473037](https://bugzil.la/1473037)).
- Die Gerätauswahl im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird jetzt über Sitzungen hinweg gespeichert ([Firefox Fehler 1248619](https://bugzil.la/1248619)).
- Ressourcen, die möglicherweise von [Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden nun im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox Fehler 1333994](https://bugzil.la/1333994)).
- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erhielt Verbesserungen beim Eingeben und Auswerten von Code:

  - Die [Autovervollständigung](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolen-Ausdrücke unterscheidet nun nicht mehr zwischen Groß- und Kleinschreibung ([Firefox Fehler 672733](https://bugzil.la/672733)).
  - Es ist nun möglich, mit einer Bash-ähnlichen Rückwärtssuche durch die [Konsolen-Ausdruckshistorie](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) zu navigieren ([Firefox Fehler 1024913](https://bugzil.la/1024913)).
  - Der [ausgewertete Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole wird jetzt sowohl im Eingabe- als auch im Ausgabeabschnitt syntaxhervorgehoben ([Firefox Fehler 1463669](https://bugzil.la/1463669)).

- Auch das Durchlaufen im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde verbessert:

  - Das [Verlassen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) einer Funktion im Debugger überspringt nun den Rückgabewert ([Firefox Fehler 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die GCLI der Entwicklerwerkzeuge wurde entfernt ([Firefox Fehler 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Funktionalität der [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) Spezifikation ist jetzt standardmäßig aktiviert ([Firefox Fehler 1492012](https://bugzil.la/1492012)).
- Interaktionsmedienspezifikationen wie [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer) wurden implementiert ([Firefox Fehler 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox Fehler 1483111](https://bugzil.la/1483111).
- Die Medienfunktion [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird jetzt in Firefox für Android unterstützt ([Firefox Fehler 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} Werte unterstützen jetzt die Syntax für Mehrfachpositionsfarbstopps, z.B. `yellow 25%, yellow 50%` kann nun als `yellow 25% 50%` geschrieben werden ([Firefox Fehler 1352643](https://bugzil.la/1352643)).
- Die {{cssxref("text-transform")}} Eigenschaft akzeptiert nun den Wert `full-size-kana` ([Firefox Fehler 1498148](https://bugzil.la/1498148)).
- Unterstützung für {{cssxref("appearance", "-webkit-appearance")}} wurde hinzugefügt, um damit verbundene Web-Kompatibilitätsprobleme zu lindern ([Firefox Fehler 1368555](https://bugzil.la/1368555)).
- Eng verbunden mit dem obigen Update haben wir auch die meisten Firefox-spezifischen `-moz-appearance` Werte entfernt ([Firefox Fehler 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt auf {{htmlelement("legend")}} Elementen unterstützt ([Firefox Fehler 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie sie in {{cssxref("offset-path")}} verwendet werden können, sind jetzt animierbar ([Firefox Fehler 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder -gruppe ein `-webkit-`präfixiertes Pseudoelement enthält, macht dieses Pseudoelement diese nicht mehr ungültig (siehe [Firefox Fehler 1424106](https://bugzil.la/1424106) für Details, und [Firefox Fehler 1486325](https://bugzil.la/1486325) für die Aktivierung dieser Funktion).

#### Entfernungen

- Die nicht standardmäßigen `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}} Werte wurden aus Web-Inhalten verborgen ([Firefox Fehler 1496961](https://bugzil.la/1496961)).
- Das nicht standardmäßige `::-moz-tree` [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) wurde aus Web-Inhalten verborgen ([Firefox Fehler 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled` Einstellung wurde entfernt; [CSS Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Fehler 1408841](https://bugzil.la/1408841)).
- Eine frühere Änderung — der Tausch der Werte der 2-Wert {{cssxref("overflow")}} Syntax, sodass Block zuerst und Inline zweitens spezifiziert wird ([Firefox Fehler 1481866](https://bugzil.la/1481866)) — wurde rückgängig gemacht ([Firefox Fehler 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für den Grund.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde umgesetzt, um zu verhindern, dass {{jsxref("JSON.stringify")}} ill-formed Unicode-Zeichenfolgen zurückgibt ([Firefox Fehler 1469021](https://bugzil.la/1469021)).
- Proxied-Funktionen können nun an {{jsxref("Function.prototype.toString")}}`.call()` übergeben werden ([Firefox Fehler 1440468](https://bugzil.la/1440468)).
- Im [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird, wenn kein Wert angegeben ist, ein typisierter 0-Wert verwendet. Dies ist durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Fehler 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen in Bezug auf die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden umgesetzt:

  - Die API ist nun unpräfixiert ([Firefox Fehler 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben nun beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Moduswechsel abgeschlossen ist ([Firefox Fehler 1188256](https://bugzil.la/1188256) und [Firefox Fehler 1491212](https://bugzil.la/1491212)).
  - Zuvor wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, sodass das Element das Ereignis zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox Fehler 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist nun auf macOS wieder aktiviert ([Firefox Fehler 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden implementiert, als Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) ([Firefox Fehler 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt Header-Namen alle in Kleinbuchstaben zurück, wie in der Spezifikation vorgesehen ([Firefox Fehler 1398718](https://bugzil.la/1398718)).
- Das veraltete `HTMLAllCollection` Interface wurde gemäß den neuesten [Spezifikationsupdates](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Fehler 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt nun einen festen Zeitstempel als Datenschutzmaßnahme zurück ([Firefox Fehler 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Funktionsbefehle wurden standardmäßig deaktiviert ([Firefox Fehler 1490641](https://bugzil.la/1490641):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Worker

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox Fehler 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox Fehler 1487963](https://bugzil.la/1487963)).
- Einstellungen von `RTCRtpEncodingParameters`, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, wurden früher nicht aktualisiert, wenn die Änderungen während eines Anrufs vorgenommen wurden. Sie werden jetzt live aktualisiert, ohne erneute Verhandlung ([Firefox Fehler 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, die jetzt als veraltet gilt ([Firefox Fehler 1435789](https://bugzil.la/1435789)).
- Automatische Verstärkungsregelung (AGC) ist jetzt standardmäßig aktiviert; dies kann mit der Einstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox Fehler 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Web-Kompatibilitätsprobleme zu lösen, wurde hinter einer Voreinstellung (`dom.window.event.enabled`) platziert und in Release-Versionen standardmäßig deaktiviert, da andere Probleme aufgetreten sind ([Firefox Fehler 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Release-Zyklus von Firefox 63 geschah, wir es hier jedoch zur Sicherheit erwähnen.
- Das `LocalMediaStream` Interface und seine `stop()` Methode wurden entfernt ([Firefox Fehler 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Veralterung von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Stoppen eines Videostreams](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie ein gesamter Stream gestoppt wird.
- Die Schnittstellen `AudioStreamTrack` und `VideoStreamTrack` wurden entfernt, da beide seit einiger Zeit als veraltet gelten ([Firefox Fehler 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zusammengeführt; Tracks werden jetzt durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft identifiziert, wie `audio` oder `video`.

### Sicherheit

- Der Symantec CA Distrust Plan wurde umgesetzt (siehe [Firefox Fehler 1409257](https://bugzil.la/1409257); siehe auch die [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) Diskussion für weitere Einzelheiten).
- {{httpheader("Referrer-Policy")}} kann nun verwendet werden, um Ressourcen zu verwalten, die über Stylesheets abgerufen werden ([Firefox Fehler 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox Fehler 1504478](https://bugzil.la/1504478), [Firefox Fehler 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Synthesizierte `Shift` Tastenereignisse durch Verwendung von `WebDriver:PerformActions` führten nicht zu Großbuchstaben ([Firefox Fehler 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Stillstand führen, wenn sich der underlying content process des Tabs während dieser Navigation mehrfach änderte ([Firefox Fehler 1504807](https://bugzil.la/1504807)).
- Um die Leistung zu verbessern und den Speicheraufwand von Firefox zu reduzieren, wird die Standardseite, die für einen neuen Tab oder ein neues Fenster geladen wird, nicht mehr `about:newtab`, sondern `about:blank` sein ([Firefox Fehler 1506643](https://bugzil.la/1506643)).
- Das Einführungspanel für die Inhaltsblockierung, das auf verschiedenen Webseiten angezeigt wurde und dazu führte, dass Elementinteraktionen fehlschlugen, ist jetzt standardmäßig deaktiviert ([Firefox Fehler 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, `{{WebExtAPIRef("menus.overrideContext()")}}`, kann vom `contextmenu` DOM-Ereignis aus aufgerufen werden, um ein benutzerdefiniertes Kontextmenü auf Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle Standardmenüeinträge von Firefox zu verbergen und stattdessen ein benutzerdefiniertes Kontextmenü-UI bereitzustellen. Dieses Kontextmenü kann aus mehreren obersten Menüeinträgen der Erweiterung bestehen und optional Registerkarten- oder Lesezeichen-Kontextmenüpunkte von anderen Erweiterungen enthalten. Siehe [diesen Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) für weitere Details.

  - `{{WebExtAPIRef("menus.overrideContext()")}}` wurde implementiert in ([Firefox Fehler 1280347](https://bugzil.la/1280347)).
  - Die Option `showDefaults: false`, die verwendet werden kann, um die Standardkontextmenüoptionen zu verbergen, wurde implementiert in ([Firefox Fehler 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://` Dokument-URL abzugleichen, selbst wenn `{{WebExtAPIRef("menus.overrideContext()")}}` verwendet wird. Auf diese Weise kann es zuverlässig eingesetzt werden, um benutzerdefinierte Menüpunkte auf bestimmte Dokumente zu beschränken ([Firefox Fehler 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue Eigenschaft `viewTypes` in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox Fehler 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann nun verwendet werden, um das Symbol eines vorhandenen Menüpunktes zu aktualisieren ([Firefox Fehler 1414566](https://bugzil.la/1414566)).
- Erweiterungen können nun erkennen, welche Maustaste verwendet wurde, als ein Menüpunkt angeklickt wurde — dies kann mit der neuen Eigenschaft `button` von {{WebExtAPIRef("menus.OnClickData")}} ermittelt werden ([Firefox Fehler 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die Methode {{WebExtAPIRef("windows.create()")}} hat jetzt eine neue verfügbare Option — `cookieStoreId` — die den `CookieStoreId` zum Einsetzen in alle beim Öffnen des Fensters erstellten Tabs angibt ([Firefox Fehler 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft ist ein Objekt, das eine `behavior` Eigenschaft annehmen kann — diese Eigenschaft kann jetzt einen neuen Wert annehmen, `reject_trackers`, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Fehler 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox Fehler 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue `pinned` Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifests ermöglicht es Erweiterungen zu steuern, ob ihre Page-Actions nach der Installation in die Adressleiste fixiert werden sollen oder nicht ([Firefox Fehler 1494135](https://bugzil.la/1494135)).
- In nativen Manifesten auf Windows wird zuerst die 32-Bit-Registry-Ansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) nach Registrierungsschlüsseln durchsucht, gefolgt von der „nativen“ Registry-Ansicht; Sie sollten diejenige verwenden, die für Ihre Anwendung geeignet ist ([Firefox Fehler 1494709](https://bugzil.la/1494709)).
- Das [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) Feld `search_provider` kann nun neue Eigenschaften wie `suggest_url` und `suggest_url_post_params` ([Firefox Fehler 1486819](https://bugzil.la/1486819)) sowie `search_url_post_params` enthalten.

## Siehe auch

- Hacks Release Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
