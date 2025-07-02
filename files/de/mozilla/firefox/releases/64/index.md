---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen werden. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Die [Accessibility-Info-Leiste](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde verbessert und enthält nun Informationen über das Farbkontrastverhältnis von Text oder Bildern auf der Seite ([Firefox-Bug 1473037](https://bugzil.la/1473037)).
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird die Gerätauswahl jetzt zwischen Sitzungen gespeichert ([Firefox-Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die möglicherweise von [Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden jetzt im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wurde beim Eingeben und Auswerten von Code verbessert:
  - Die [Autovervollständigung](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke unterscheidet jetzt nicht mehr zwischen Groß- und Kleinschreibung ([Firefox-Bug 672733](https://bugzil.la/672733)).
  - Sie können nun mit einer Bash-ähnlichen Rückwärtssuche durch den [Verlaufsverlauf der Konsolenausdrücke](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) navigieren ([Firefox-Bug 1024913](https://bugzil.la/1024913)).
  - Ausgewerteter Code in der Konsole wird jetzt sowohl im Eingabe- als auch im Ausgabebereich syntaxhervorgehoben ([Firefox-Bug 1463669](https://bugzil.la/1463669)).

- Beim Durchschreiten des Codes im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurden ebenfalls Verbesserungen vorgenommen:
  - Beim [Stepping out](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) aus einer Funktion im Debugger wird jetzt der Rückgabewert übersprungen ([Firefox-Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die GCLI der Entwicklertools wurde entfernt ([Firefox-Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Spezifikationsfunktionalität [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) wurde standardmäßig aktiviert ([Firefox-Bug 1492012](https://bugzil.la/1492012)).
- Medienmerkmale der Interaktion implementiert, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer) ([Firefox-Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox-Bug 1483111](https://bugzil.la/1483111).
- Das Medienmerkmal [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird jetzt in Firefox für Android unterstützt ([Firefox-Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} Werte unterstützen jetzt die Syntax für Mehrfachpositionsfarbstopps, z. B. kann `yellow 25%, yellow 50%` jetzt als `yellow 25% 50%` geschrieben werden ([Firefox-Bug 1352643](https://bugzil.la/1352643)).
- Die Eigenschaft {{cssxref("text-transform")}} akzeptiert jetzt den Wert `full-size-kana` ([Firefox-Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung hinzugefügt für {{cssxref("appearance", "-webkit-appearance")}}, um damit verbundene Webkompatibilitätsprobleme zu lindern ([Firefox-Bug 1368555](https://bugzil.la/1368555)).
- Eng verbunden mit der obigen Aktualisierung, haben wir die meisten der Firefox-spezifischen `-moz-appearance` Werte entfernt ([Firefox-Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt bei {{htmlelement("legend")}}-Elementen unterstützt ([Firefox-Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, die bei {{cssxref("offset-path")}} verwendbar sind, sind jetzt animierbar ([Firefox-Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder -gruppe ein `-webkit-`-präfixiertes Pseudo-Element enthält, macht dieses Pseudo-Element dies nicht mehr ungültig (siehe [Firefox-Bug 1424106](https://bugzil.la/1424106) für Details, und [Firefox-Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieser Funktion).

#### Entfernungen

- Die nicht standardisierten `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}} Werte wurden aus Webinhalten entfernt ([Firefox-Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardisierte `::-moz-tree` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde aus Webinhalten entfernt ([Firefox-Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled` Präferenz wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox-Bug 1408841](https://bugzil.la/1408841)).
- Eine vorherige Änderung — um die Werte der 2-Wert {{cssxref("overflow")}}-Syntax so zu tauschen, dass Block zuerst und Inline als zweites angegeben ist ([Firefox-Bug 1481866](https://bugzil.la/1481866)) — wurde rückgängig gemacht ([Firefox-Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für den Grund.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} fehlerhafte Unicode-Zeichenfolgen zurückgibt ([Firefox-Bug 1469021](https://bugzil.la/1469021)).
- Proxyfunktionen können jetzt mit {{jsxref("Function.prototype.toString")}} verwendet werden ([Firefox-Bug 1440468](https://bugzil.la/1440468)).
- Im [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird, wenn kein Wert angegeben ist, ein typisierter 0-Wert verwendet. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox-Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) wurden implementiert:
  - Die API ist nun ohne Präfix ([Firefox-Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Modusänderung abgeschlossen ist ([Firefox-Bug 1188256](https://bugzil.la/1188256) und [Firefox-Bug 1491212](https://bugzil.la/1491212)).
  - Früher wurden die Ereignisse [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, so dass das Element das Ereignis zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox-Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR-API](/de/docs/Web/API/WebVR_API) (1.1) ist jetzt unter macOS wieder aktiviert ([Firefox-Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden implementiert, als Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) ([Firefox-Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt, gemäß Spezifikation, alle Header-Namen in Kleinbuchstaben zurück ([Firefox-Bug 1398718](https://bugzil.la/1398718)).
- Das veraltete `HTMLAllCollection`-Interface wurde entsprechend den aktuellen [Spezifikations-Updates](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox-Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt, als Maßnahme zur Wahrung der Privatsphäre, einen festen Zeitstempel zurück ([Firefox-Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Feature-Befehle wurden standardmäßig deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641):
  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service-Worker

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox-Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio, und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor), und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox-Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters` Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, aktualisierten sich früher nicht, wenn die Änderungen während eines Anrufs gemacht wurden. Sie werden jetzt live aktualisiert, ohne Neuverhandlungen ([Firefox-Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, das jetzt veraltet ist ([Firefox-Bug 1435789](https://bugzil.la/1435789)).
- Automatic Gain Control (AGC) ist jetzt standardmäßig aktiviert; dies kann mithilfe der Präferenz `media.getusermedia.agc_enabled` geändert werden ([Firefox-Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft, die in Firefox 63 zur Unterstützung von Webkompatibilitätsproblemen hinzugefügt wurde, wurde hinter eine Präferenz (`dom.window.event.enabled`) gestellt und in den Release-Versionen vorerst standardmäßig deaktiviert, aufgrund anderer aufgetretener Probleme ([Firefox-Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63-Veröffentlichungszyklus gemacht wurde, aber wir erwähnen es hier, nur um sicherzugehen.
- Das `LocalMediaStream` Interface und seine `stop()` Methode wurden entfernt ([Firefox-Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Abschaffung von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Anhalten eines Videostreams](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie Sie einen kompletten Stream stoppen können.
- Die `AudioStreamTrack` und `VideoStreamTrack` Interfaces wurden entfernt, da beide schon seit einiger Zeit veraltet sind ([Firefox-Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zusammengeführt; Tracks werden jetzt durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft identifiziert, wie `audio` oder `video`.

### Sicherheit

- Der Symantec-CA-Misstrauensplan wurde implementiert (siehe [Firefox-Bug 1409257](https://bugzil.la/1409257); siehe auch die [Mozillas Plan für Symantec-Wurzeln](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) Diskussion für mehr Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um regulierende Ressourcen abzurufen, die über Stylesheets abgerufen wurden ([Firefox-Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) für mehr Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `Marionette:`, `L10n:`, oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox-Bug 1504478](https://bugzil.la/1504478), [Firefox-Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Durch `WebDriver:PerformActions` synthetisierte `Shift`-Key-Ereignisse resultierten nicht in Großbuchstaben ([Firefox-Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` könnte zu einem unendlichen Blockieren führen, wenn der zugrundeliegende Inhaltsprozess des Tabs während der Navigation mehrmals geändert wird ([Firefox-Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und zur Verringerung des Speicherbedarfs von Firefox wird die Standardeite, die für einen neuen Tab oder ein neues Fenster geladen wird, nun nicht mehr `about:newtab` sein, sondern `about:blank` ([Firefox-Bug 1506643](https://bugzil.la/1506643)).
- Das Einführungsfenster zur Inhaltsblockierung, das auf verschiedenen Webseiten angezeigt wurde und dazu führte, dass Elementinteraktionen fehlschlagen, ist jetzt standardmäßig deaktiviert ([Firefox-Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, {{WebExtAPIRef("menus.overrideContext()")}}, kann aus dem `contextmenu` DOM-Ereignis heraus aufgerufen werden, um ein benutzerdefiniertes Kontextmenü in Erweiterungsseiten zu setzen. Diese API erlaubt es Erweiterungen, alle standardmäßigen Firefox-Menüeinträge auszublenden, zugunsten einer benutzerdefinierten Kontextmenü-Benutzeroberfläche. Dieses Kontextmenü kann aus mehreren obersten Menüeinträgen der Erweiterung bestehen und möglicherweise Registerkarten- oder Lesezeichen-Kontextmenüeinträge von anderen Erweiterungen enthalten. Weitere Details siehe [diesen Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).
  - {{WebExtAPIRef("menus.overrideContext()")}} wurde in ([Firefox-Bug 1280347](https://bugzil.la/1280347)) implementiert.
  - Die `showDefaults: false` Option, die verwendet werden kann, um die Standardkontextmenüoptionen zu verbergen, wurde in ([Firefox-Bug 1367160](https://bugzil.la/1367160)) implementiert.
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://` Dokument-URL zu matchen, selbst wenn {{WebExtAPIRef("menus.overrideContext()")}} verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüeinträge auf bestimmte Dokumente zu beschränken ([Firefox-Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, mittels des neuen `viewTypes` Attributs in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} ([Firefox-Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Symbol eines bestehenden Menüeintrags zu aktualisieren ([Firefox-Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welche Maustaste verwendet wurde, als ein Menüeintrag angeklickt wurde – dies kann mithilfe der neuen `button` Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} ermittelt werden ([Firefox-Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die Methode {{WebExtAPIRef("windows.create()")}} hat nun eine neue verfügbare Option — `cookieStoreId` — die den `CookieStoreId` angibt, der für alle Registerkarten verwendet wird, die beim Öffnen des Fensters erstellt wurden ([Firefox-Bug 1393570](https://bugzil.la/1393570)).

#### Privatsphäre

- Das {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Attribut ist ein Objekt, das ein `behavior` Attribut akzeptieren kann – dieses Attribut kann jetzt einen neuen Wert annehmen, `reject_trackers`, was die Erweiterung dazu anweist, Tracking-Cookies abzulehnen ([Firefox-Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox-Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Das neue `pinned` Attribut des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifestschlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Seitenaktionen bei der Installation an die Adressleiste angeheftet werden sollen oder nicht ([Firefox-Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifesten unter Windows wird zuerst die 32-Bit-Registry-Ansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) für die Registrierungsschlüssel überprüft, gefolgt von der "nativen" Registry-Ansicht; Sie sollten die für Ihre Anwendung geeignete verwenden ([Firefox-Bug 1494709](https://bugzil.la/1494709)).
- Das [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) Felds `search_provider` Objekt kann jetzt neue Attribute enthalten — `suggest_url` und `suggest_url_post_params` ([Firefox-Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks Release Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
