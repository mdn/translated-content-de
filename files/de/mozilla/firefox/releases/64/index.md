---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen werden. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Die [Accessibility-Infoleiste](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert, um Informationen über das Farbkontrastverhältnis von Texten oder Bildern auf der Seite einzuschließen ([Firefox Bug 1473037](https://bugzil.la/1473037)).
- Die Gerätauswahl im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird jetzt zwischen den Sitzungen gespeichert ([Firefox Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die potenziell von [Tracking Protection](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden jetzt im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) hat Verbesserungen beim Eingeben und Auswerten von Code erhalten:

  - [Autocomplete](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke ist jetzt nicht mehr case-sensitiv ([Firefox Bug 672733](https://bugzil.la/672733)).
  - Sie können jetzt mit einer bash-ähnlichen Rückwärtssuche durch den [Verlauf der Konsolenausdrücke](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) navigieren ([Firefox Bug 1024913](https://bugzil.la/1024913)).
  - [Ausgewerteter Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole wird jetzt sowohl in der Eingabe als auch in der Ausgabe syntaxhervorgehoben ([Firefox Bug 1463669](https://bugzil.la/1463669)).

- Schritte im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) haben ebenfalls einige Verbesserungen erhalten:

  - Beim [Aussteigen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) aus einer Funktion im Debugger wird jetzt der Rückgabewert übersprungen ([Firefox Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die GCLI Entwickler-Tools wurden entfernt ([Firefox Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Funktionalität der [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) Spezifikation ist nun standardmäßig aktiviert ([Firefox Bug 1492012](https://bugzil.la/1492012)).
- Umgesetzte Interaktions-Media-Features, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer) ([Firefox Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover), siehe [Firefox Bug 1483111](https://bugzil.la/1483111).
- Das [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Feature wird jetzt in Firefox für Android unterstützt ([Firefox Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}}-Werte unterstützen jetzt die Syntax für Multipositions-Farbstopps, z.B. `yellow 25%, yellow 50%` kann jetzt als `yellow 25% 50%` geschrieben werden ([Firefox Bug 1352643](https://bugzil.la/1352643)).
- Die Eigenschaft {{cssxref("text-transform")}} akzeptiert jetzt den Wert `full-size-kana` ([Firefox Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung für {{cssxref("appearance", "-webkit-appearance")}} wurde hinzugefügt, um damit verbundene Web-Kompatibilitätsprobleme zu lindern ([Firefox Bug 1368555](https://bugzil.la/1368555)).
- In enger Verbindung mit dem obigen Update haben wir auch die meisten Firefox-spezifischen `-moz-appearance`-Werte entfernt ([Firefox Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt für {{htmlelement("legend")}}-Elemente unterstützt ([Firefox Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie sie in {{cssxref("offset-path")}} verwendet werden können, sind jetzt animierbar ([Firefox Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder -gruppe ein `-webkit-`-präfixiertes Pseudo-Element enthält, wird dieses Pseudo-Element die Kette nicht länger ungültig machen (siehe [Firefox Bug 1424106](https://bugzil.la/1424106) für Details, und [Firefox Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieser Funktion).

#### Entfernungen

- Die nicht standardmäßigen `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}}-Werte wurden aus Web-Inhalten ausgeblendet ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardmäßige `::-moz-tree` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde aus Web-Inhalten ausgeblendet ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Die Voreinstellung `layout.css.filters.enabled` wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Bug 1408841](https://bugzil.la/1408841)).
- Eine frühere Änderung — um die Werte der 2-Wert {{cssxref("overflow")}}-Syntax zu vertauschen, sodass Block zuerst und Inline zweiter angegeben wird ([Firefox Bug 1481866](https://bugzil.la/1481866)) — wurde zurückgesetzt ([Firefox Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14), um zu verstehen, warum.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39-Vorschlag [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) wurde umgesetzt, um zu verhindern, dass {{jsxref("JSON.stringify")}} fehlerhaft formatierte Unicode-Strings zurückgibt ([Firefox Bug 1469021](https://bugzil.la/1469021)).
- Proxiet-Funktionen können jetzt an {{jsxref("Function.prototype.toString")}}`.call()` übergeben werden ([Firefox Bug 1440468](https://bugzil.la/1440468)).
- Im [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird, wenn kein Wert angegeben ist, ein typisierter 0-Wert verwendet. Dies wird durch den [`DefaultValue`-Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) wurden umgesetzt:

  - Die API ist nun ohne Präfix ([Firefox Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Moduswechsel abgeschlossen ist ([Firefox Bug 1188256](https://bugzil.la/1188256) und [Firefox Bug 1491212](https://bugzil.la/1491212)).
  - Zuvor wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) und anschließend an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, sodass jetzt das Element das Ereignis zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR-API](/de/docs/Web/API/WebVR_API) (1.1) ist jetzt auf macOS wieder aktiviert ([Firefox Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden implementiert und sind Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) ([Firefox Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt alle Header-Namen in Kleinbuchstaben zurück, gemäß der Spezifikation ([Firefox Bug 1398718](https://bugzil.la/1398718)).
- Das veraltete `HTMLAllCollection`-Interface wurde gemäß den letzten [Spezifikationsänderungen](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt einen festen Zeitstempel als Datenschutzmaßnahme zurück ([Firefox Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Feature-Befehle wurden standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Workers

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters`-Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, wurden früher nicht aktualisiert, wenn die Änderungen während eines Anrufs vorgenommen wurden. Sie werden jetzt live ohne Neuverhandlungen aktualisiert ([Firefox Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, das jetzt veraltet ist ([Firefox Bug 1435789](https://bugzil.la/1435789)).
- Automatische Verstärkungsregelung (AGC) ist jetzt standardmäßig aktiviert; dies kann mithilfe der Voreinstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die Eigenschaft [`Window.event`](/de/docs/Web/API/Window/event), die in Firefox 63 zur Unterstützung von Web-Kompatibilitätsproblemen hinzugefügt wurde, wurde hinter einer Voreinstellung (`dom.window.event.enabled`) abgelegt und ist jetzt in Release-Versionen standardmäßig deaktiviert wegen anderer festgestellter Probleme ([Firefox Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Veröffentlichungszyklus von Firefox 63 gemacht wurde, aber wir erwähnen es hier nur zur Sicherheit.
- Das `LocalMediaStream`-Interface und seine `stop()`-Methode wurden entfernt ([Firefox Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Außerkraftsetzung von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Stopping a video stream](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie man einen gesamten Stream stoppt.
- Die `AudioStreamTrack`- und `VideoStreamTrack`-Interfaces wurden entfernt, da beide seit einiger Zeit veraltet sind ([Firefox Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert; Tracks werden jetzt anhand des Werts ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft identifiziert, z. B. `audio` oder `video`.

### Sicherheit

- Der Symantec CA Misstrauensplan wurde umgesetzt (siehe [Firefox Bug 1409257](https://bugzil.la/1409257); siehe auch die Diskussion [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) für weitere Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um Ressourcen zu regeln, die über Stylesheets abgerufen werden ([Firefox Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox Bug 1504478](https://bugzil.la/1504478), [Firefox Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Synthesizerte `Shift`-Tasteereignisse über `WebDriver:PerformActions` führten nicht zu Großbuchstaben ([Firefox Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Hängen führen, wenn der zugrunde liegende Inhaltsprozess des Tabs während dieser Navigation mehrfach geändert wurde ([Firefox Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und um den Speicherbedarf von Firefox zu verringern, ist die Standardseite, die für einen neuen Tab oder ein neues Fenster geladen wird, nicht mehr `about:newtab`, sondern `about:blank` ([Firefox Bug 1506643](https://bugzil.la/1506643)).
- Das Content-Blocking-Einführungspanel, das auf verschiedenen Webseiten angezeigt wurde und dazu führte, dass Elementinteraktionen fehlschlugen, ist jetzt standardmäßig deaktiviert ([Firefox Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, `{{WebExtAPIRef("menus.overrideContext()")}}`, kann vom `contextmenu`-DOM-Ereignis aus aufgerufen werden, um ein benutzerdefiniertes Kontextmenü auf Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle Standardmenüeinträge von Firefox auszublenden, um eine benutzerdefinierte Kontextmenü-Benutzeroberfläche bereitzustellen. Dieses Kontextmenü kann aus mehreren obersten Menüeinträgen der Erweiterung bestehen und optional Tab- oder Lesezeichenkontextmenüeinträge anderer Erweiterungen enthalten. Siehe [diesen Blogpost](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) für mehr Details.

  - `{{WebExtAPIRef("menus.overrideContext()")}}` wurde in ([Firefox Bug 1280347](https://bugzil.la/1280347)) implementiert.
  - Die Option `showDefaults: false`, die verwendet werden kann, um die Standardkontextmenüoptionen auszublenden, wurde in ([Firefox Bug 1367160](https://bugzil.la/1367160)) implementiert.
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://`-Dokumenten-URL zu matchen, auch wenn `{{WebExtAPIRef("menus.overrideContext()")}}` verwendet wird. So kann sie zuverlässig genutzt werden, um benutzerdefinierte Menüpunkte auf bestimmte Dokumente zu beschränken ([Firefox Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue Eigenschaft `viewTypes` in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Icon eines bestehenden Menüeintrags zu aktualisieren ([Firefox Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welche Maustaste benutzt wurde, als ein Menüeintrag angeklickt wurde — dies kann über die neue `button` Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} herausgefunden werden ([Firefox Bug 1469148](https://bugzil.la/1469148)).

#### Windows

- Die Methode {{WebExtAPIRef("windows.create()")}} hat jetzt eine neue verfügbare Option — `cookieStoreId` — die die `CookieStoreId` angibt, die für alle Tabs verwendet werden soll, die beim Öffnen des Fensters erstellt werden ([Firefox Bug 1393570](https://bugzil.la/1393570)).

#### Privatsphäre

- Die {{WebExtAPIRef("privacy.websites")}}-Eigenschaft `cookieConfig` ist ein Objekt, das eine `behavior`-Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert annehmen, `reject_trackers`, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue `pinned`-Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Seitenaktionen bei der Installation an die Adressleiste angeheftet werden sollen oder nicht ([Firefox Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifesten unter Windows wird zuerst die 32-Bit-Registry-Ansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) auf Registrierungsschlüssel überprüft, gefolgt von der "nativen" Registry-Ansicht; Sie sollten diejenige verwenden, die für Ihre Anwendung angemessen ist ([Firefox Bug 1494709](https://bugzil.la/1494709)).
- Das [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) Feld `search_provider` kann jetzt neue Eigenschaften enthalten — `suggest_url` und `suggest_url_post_params` ([Firefox Bug 1486819](https://bugzil.la/1486819)) sowie `search_url_post_params`.

## Siehe auch

- Hacks Release Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
