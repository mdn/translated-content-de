---
title: Firefox 64 Versionshinweise für Entwickler
short-title: Firefox 64
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 64, die Entwickler betreffen werden. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Die [Zugänglichkeit Info-Leiste](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert, um Informationen über das Farbkontrastverhältnis von Texten oder Bildern auf der Seite zu enthalten ([Firefox-Bug 1473037](https://bugzil.la/1473037)).
- Die Geräteauswahl des [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird nun zwischen den Sitzungen gespeichert ([Firefox-Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die potenziell von [Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden nun im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erhielt Verbesserungen beim Eingeben und Auswerten von Code:
  - Die [Autocomplete-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke ist jetzt nicht mehr groß- und kleinschreibungsempfindlich ([Firefox-Bug 672733](https://bugzil.la/672733)).
  - Man kann nun den [Verlauf der Konsolenausdrücke](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) mit einer bash-ähnlichen Rückwärtssuche durchlaufen ([Firefox-Bug 1024913](https://bugzil.la/1024913)).
  - Der [ausgewertete Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole ist nun sowohl im Eingabefeld als auch in der Ausgabe farblich hervorgehoben ([Firefox-Bug 1463669](https://bugzil.la/1463669)).

- Das Arbeiten im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde ebenfalls verbessert:
  - Beim [Aussteigen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) aus einer Funktion im Debugger wird der Rückgabewert nun übersprungen ([Firefox-Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Das Developer Tools GCLI wurde entfernt ([Firefox-Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Funktionalität der [CSS Scrollbars](/de/docs/Web/CSS/Guides/Scrollbars_styling) Spezifikation wurde standardmäßig aktiviert ([Firefox-Bug 1492012](https://bugzil.la/1492012)).
- Interaktive Media-Features implementiert, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/Reference/At-rules/@media/pointer) ([Firefox-Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/Reference/At-rules/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/Reference/At-rules/@media/any-hover) siehe [Firefox-Bug 1483111](https://bugzil.la/1483111).
- Das [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Medienmerkmal wird jetzt in Firefox für Android unterstützt ([Firefox-Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} Werte unterstützen jetzt die Syntax für Mehrere-Positions-Farbstopps, z.B. kann `yellow 25%, yellow 50%` jetzt als `yellow 25% 50%` geschrieben werden ([Firefox-Bug 1352643](https://bugzil.la/1352643)).
- Die Eigenschaft {{cssxref("text-transform")}} akzeptiert jetzt den Wert `full-size-kana` ([Firefox-Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung hinzugefügt für {{cssxref("appearance", "-webkit-appearance")}}, um damit verbundene Web-Kompatibilitätsprobleme zu lindern ([Firefox-Bug 1368555](https://bugzil.la/1368555)).
- Im Zusammenhang mit der obigen Aktualisierung wurden auch die meisten der Firefox-spezifischen `-moz-appearance` Werte entfernt ([Firefox-Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt auf {{htmlelement("legend")}} Elementen unterstützt ([Firefox-Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, die in {{cssxref("offset-path")}} verwendet werden, sind jetzt animierbar ([Firefox-Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorenkette oder Gruppe ein `-webkit-`-präfixiertes Pseudoelement enthält, macht dieses Pseudoelement die Gruppe oder Kette nicht mehr ungültig (siehe [Firefox-Bug 1424106](https://bugzil.la/1424106) für Details und [Firefox-Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieses Merkmals).

#### Entfernungen

- Die nicht-standardmäßigen `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}} Werte wurden aus den Web-Inhalten ausgeblendet ([Firefox-Bug 1496961](https://bugzil.la/1496961)).
- Das nicht-standardmäßige `::-moz-tree` [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wurde aus den Web-Inhalten ausgeblendet ([Firefox-Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled` Präferenz wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/Guides/Filter_effects) können nicht mehr deaktiviert werden ([Firefox-Bug 1408841](https://bugzil.la/1408841)).
- Eine frühere Änderung – das Tauschen der Werte der Zweifachwert-{{cssxref("overflow")}}-Syntax, sodass der Block zuerst und Inline als zweites angegeben wird ([Firefox-Bug 1481866](https://bugzil.la/1481866)) – wurde rückgängig gemacht ([Firefox-Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für die Gründe.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} ungültige Unicode-Strings zurückgibt ([Firefox-Bug 1469021](https://bugzil.la/1469021)).
- Proxied Funktionen können jetzt mit {{jsxref("Function.prototype.toString")}} verwendet werden ([Firefox-Bug 1440468](https://bugzil.la/1440468)).
- Im Konstruktor [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global), wenn kein Wert angegeben wird, wird ein typisierter 0-Wert verwendet. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox-Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden implementiert:
  - Die API ist nun ohne Präfix ([Firefox-Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Moduswechsel abgeschlossen ist ([Firefox-Bug 1188256](https://bugzil.la/1188256) und [Firefox-Bug 1491212](https://bugzil.la/1491212)).
  - Früher wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, sodass das Element zuerst das Ereignis erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox-Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist nun auf macOS wieder aktiviert ([Firefox-Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden implementiert, als Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) ([Firefox-Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt die Header-Namen alle in Kleinbuchstaben zurück, wie es in der Spezifikation vorgesehen ist ([Firefox-Bug 1398718](https://bugzil.la/1398718)).
- Das veraltete `HTMLAllCollection` Interface wurde gemäß den jüngsten [Spezifikationsaktualisierungen](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox-Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt einen festen Zeitstempel als Datenschutzmaßnahme zurück ([Firefox-Bug 583181](https://bugzil.la/583181)).
- Die folgenden `Document.execCommand()` UI Feature-Befehle wurden standardmäßig deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)):
  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Worker

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox-Bug 1263734](https://bugzil.la/1263734)).

#### Media, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb der akzeptierten Bereiche gesetzt werden ([Firefox-Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters` Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert werden, aktualisieren jetzt live, ohne erneute Verhandlung, wenn die Änderungen während eines Anrufs vorgenommen werden ([Firefox-Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert – dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, das nun als veraltet gilt ([Firefox-Bug 1435789](https://bugzil.la/1435789)).
- Automatic Gain Control (AGC) ist jetzt standardmäßig aktiviert; diese Einstellung kann über die Präferenz `media.getusermedia.agc_enabled` geändert werden ([Firefox-Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die Eigenschaft [`Window.event`](/de/docs/Web/API/Window/event), die in Firefox 63 hinzugefügt wurde, um mit Web-Kompatibilitätsproblemen umzugehen, wurde hinter einer Präferenz (`dom.window.event.enabled`) platziert und ist in den Veröffentlichungs-Versionen standardmäßig deaktiviert aufgrund anderer aufgedeckter Probleme ([Firefox-Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63 Veröffentlichungszyklus gemacht wurde, aber wir erwähnen es hier vorsichtshalber.
- Das `LocalMediaStream` Interface und seine `stop()` Methode wurden entfernt ([Firefox-Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Einstellung von `LocalMediaStream` nicht mehr verfügbar. Lesen Sie den Abschnitt [Ein Video-Stream stoppen](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie man einen gesamten Stream stoppt.
- Die `AudioStreamTrack` und `VideoStreamTrack` Interfaces wurden entfernt, da beide seit einiger Zeit als veraltet gelten ([Firefox-Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität ist in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert worden; Tracks werden jetzt durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft identifiziert, wie `audio` oder `video`.

### Sicherheit

- Der Symantec CA Distrust Plan wurde implementiert (siehe [Firefox-Bug 1409257](https://bugzil.la/1409257); siehe auch die Diskussion [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) für mehr Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um Ressourcen, die über Stylesheets abgerufen werden, zu regulieren ([Firefox-Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration with CSS](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehlspunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox-Bug 1504478](https://bugzil.la/1504478), [Firefox-Bug 1504940](https://bugzil.la/1504940)).

#### Bug-Fixes

- Synthesizerte `Shift`-Tast-Ereignisse durch die Verwendung von `WebDriver:PerformActions` führten nicht zu Großbuchstaben ([Firefox-Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Hängen führen, wenn der zugrunde liegende Inhaltsprozess der Registerkarte während dieser Navigation mehrmals geändert wurde ([Firefox-Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und zur Reduzierung des Speicherbedarfs von Firefox ist die Standard-Seite, die für einen neuen Tab oder ein neues Fenster geladen wird, nicht mehr `about:newtab`, sondern `about:blank` ([Firefox-Bug 1506643](https://bugzil.la/1506643)).
- Das Einführungsfenster zur Inhaltsblockierung, das auf verschiedenen Webseiten angezeigt wurde und Interaktionen mit Elementen verhinderte, ist jetzt standardmäßig deaktiviert ([Firefox-Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, {{WebExtAPIRef("menus.overrideContext()")}}, kann vom `contextmenu` DOM-Event aufgerufen werden, um ein benutzerdefiniertes Kontextmenü auf Erweiterungsseiten festzulegen. Diese API erlaubt es Erweiterungen, alle Standardmenüeinträge von Firefox zu verstecken, zugunsten eines benutzerdefinierten Kontextmenü-UI. Dieses Kontextmenü kann aus mehreren obersten Menüeinträgen der Erweiterung bestehen und kann optional Registerkarten- oder Lesezeichen-Kontextmenüeinträge anderer Erweiterungen enthalten. Siehe [diesen Blog-Post](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) für weitere Details.
  - {{WebExtAPIRef("menus.overrideContext()")}} wurde implementiert in ([Firefox-Bug 1280347](https://bugzil.la/1280347)).
  - Die Option `showDefaults: false`, die verwendet werden kann, um die standardmäßigen Kontextmenüoptionen zu verstecken, wurde implementiert in ([Firefox-Bug 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://` Dokument-URL zu matchen, selbst wenn {{WebExtAPIRef("menus.overrideContext()")}} verwendet wird. Dadurch kann es zuverlässig verwendet werden, um benutzerdefinierte Menüeinträge auf bestimmte Dokumente zu beschränken ([Firefox-Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-On angezeigt werden können, indem Sie die neue Eigenschaft `viewTypes` in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox-Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Symbol eines bestehenden Menüeintrags zu aktualisieren ([Firefox-Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welche Maustaste verwendet wurde, wenn ein Menüeintrag angeklickt wurde – dies kann mit der neuen `button` Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} festgestellt werden ([Firefox-Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die Methode {{WebExtAPIRef("windows.create()")}} hat eine neue verfügbare Option — `cookieStoreId` — die das `CookieStoreId` angibt, das für alle Tabs verwendet wird, die beim Öffnen des Fensters erstellt wurden ([Firefox-Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft ist ein Objekt, das eine `behavior` Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert `reject_trackers` annehmen, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox-Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox-Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue `pinned` Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Page-Actions bei der Installation an die Adressleiste angeheftet werden sollen oder nicht ([Firefox-Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifesten unter Windows wird zuerst der 32-Bit-Registry-Ansichtsgegenstand ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) für Registrierungsschlüssel geprüft, gefolgt von der "nativen" Registrierungssicht; Sie sollten den für Ihre Anwendung geeigneten verwenden ([Firefox-Bug 1494709](https://bugzil.la/1494709)).
- Das Feld [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) des `search_provider` Objekts kann jetzt neue Eigenschaften enthalten — `suggest_url` und `suggest_url_post_params` ([Firefox-Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks Release Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)
