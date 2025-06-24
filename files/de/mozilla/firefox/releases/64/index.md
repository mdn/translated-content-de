---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen werden. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die [Zugänglichkeits-Infobar](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert und enthält nun Informationen über das Farbkontrastverhältnis von Texten oder Bildern auf der Seite ([Firefox Bug 1473037](https://bugzil.la/1473037)).
- Die Geräteliste vom [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird jetzt zwischen Sitzungen gespeichert ([Firefox Bug 1248619](https://bugzil.la/1248619)).
- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) werden nun Ressourcen angezeigt, die potenziell von der [Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Die [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erhielt Verbesserungen beim Eingeben und Auswerten von Code:

  - Die [Autovervollständigung](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke ist nun nicht mehr auf Groß- und Kleinschreibung angewiesen ([Firefox Bug 672733](https://bugzil.la/672733)).
  - Sie können nun mit einer bash-ähnlichen Rückwärtssuche durch den [Konsolenausdrucksverlauf](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) navigieren ([Firefox Bug 1024913](https://bugzil.la/1024913)).
  - Ausgewerteter Code in der Konsole wird nun sowohl im Eingabe- als auch im Ausgabeabschnitt farblich hervorgehoben ([Firefox Bug 1463669](https://bugzil.la/1463669)).

- Auch beim [JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) gab es einige Verbesserungen beim Step-Durchlauf:
  - Das [Schrittweise Verlassen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) einer Funktion im Debugger überspringt nun den Rückgabewert ([Firefox Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die Developer Tools GCLI wurde entfernt ([Firefox Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Spezifikationsfunktionalität von [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) wurde standardmäßig aktiviert ([Firefox Bug 1492012](https://bugzil.la/1492012)).
- Implementierung von Interaktions-Medien-Features, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer) ([Firefox Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover), siehe [Firefox Bug 1483111](https://bugzil.la/1483111).
- Das [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medien-Feature wird nun in Firefox für Android unterstützt ([Firefox Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} Werte unterstützen jetzt die Syntax für Farbstopps mit mehreren Positionen, z.B. kann `yellow 25%, yellow 50%` jetzt als `yellow 25% 50%` geschrieben werden ([Firefox Bug 1352643](https://bugzil.la/1352643)).
- Die {{cssxref("text-transform")}} Eigenschaft akzeptiert nun den Wert `full-size-kana` ([Firefox Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung für {{cssxref("appearance", "-webkit-appearance")}} wurde hinzugefügt, um webkompatibilitätsbezogene Probleme zu lindern ([Firefox Bug 1368555](https://bugzil.la/1368555)).
- In enger Beziehung zu der obigen Aktualisierung haben wir auch die meisten Firefox-spezifischen `-moz-appearance` Werte entfernt ([Firefox Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird nun auf {{htmlelement("legend")}} Elementen unterstützt ([Firefox Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, die in {{cssxref("offset-path")}} verwendbar sind, können nun animiert werden ([Firefox Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder -gruppe ein `-webkit-`-präfix für Pseudo-Elemente enthält, macht dieses die Selektorkette nicht mehr ungültig (siehe [Firefox Bug 1424106](https://bugzil.la/1424106) für die Details und [Firefox Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieser Funktion).

#### Entfernungen

- Die nicht standardmäßigen `-moz-box` und `-moz-inline-box` {{cssxref("display")}} Werte wurden aus Webinhalten verborgen ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardmäßige `::-moz-tree` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde aus Webinhalten verborgen ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled` Präferenz wurde entfernt; [CSS Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Bug 1408841](https://bugzil.la/1408841)).
- Eine vorherige Änderung, um die Werte der zweistufigen {{cssxref("overflow")}} Syntax zu tauschen, sodass zuerst block und dann inline angegeben wird ([Firefox Bug 1481866](https://bugzil.la/1481866)), wurde rückgängig gemacht ([Firefox Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für den Grund.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} fehlerhafte Unicode-Strings zurückgibt ([Firefox Bug 1469021](https://bugzil.la/1469021)).
- Proxy-Funktionen können nun mit {{jsxref("Function.prototype.toString")}} verwendet werden ([Firefox Bug 1440468](https://bugzil.la/1440468)).
- Im [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird, wenn kein Wert angegeben ist, ein typisierter Nullwert verwendet. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden implementiert:

  - Die API ist jetzt unpräfixiert ([Firefox Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Modusänderung abgeschlossen ist ([Firefox Bug 1188256](https://bugzil.la/1188256) und [Firefox Bug 1491212](https://bugzil.la/1491212)).
  - Früher wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Veranstaltungen zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, sodass das Element das Ereignis zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist jetzt unter macOS wieder aktiviert ([Firefox Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden implementiert, als Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) ([Firefox Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt nun Header-Namen alle in Kleinbuchstaben zurück, gemäß Spezifikation ([Firefox Bug 1398718](https://bugzil.la/1398718)).
- Die alte Schnittstelle `HTMLAllCollection` wurde gemäß den aktuellen [Spezifikationsaktualisierungen](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt aus Datenschutzgründen einen festen Zeitstempel zurück ([Firefox Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Funktion-Befehle sind standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641):
  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service-Arbeiter

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters` Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, aktualisierten sich bisher nicht, wenn die Änderungen während eines Gesprächs vorgenommen wurden. Sie werden jetzt live aktualisiert, ohne Neuverhandlung ([Firefox Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, die nun veraltet ist ([Firefox Bug 1435789](https://bugzil.la/1435789)).
- Automatische Verstärkungsregelung (AGC) ist jetzt standardmäßig aktiviert; dies kann über die Präferenz `media.getusermedia.agc_enabled` geändert werden ([Firefox Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Webkompatibilitätsprobleme zu beheben, wurde hinter eine Präferenz (`dom.window.event.enabled`) gestellt und ist in Veröffentlichungsversionen derzeit standardmäßig deaktiviert, da andere Probleme aufgetreten sind ([Firefox Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Veröffentlichungszyklus von Firefox 63 erfolgte, aber wir erwähnen es hier zur Sicherheit.
- Die `LocalMediaStream` Schnittstelle und ihre `stop()` Methode wurden entfernt ([Firefox Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Abschaffung von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Stoppen eines Videostreams](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie ein ganzer Stream gestoppt werden kann.
- Die `AudioStreamTrack` und `VideoStreamTrack` Schnittstellen wurden entfernt, da beide seit einiger Zeit veraltet sind ([Firefox Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert; Spuren werden nun durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft identifiziert, wie `audio` oder `video`.

### Sicherheit

- Der Symantec CA Misstrauensplan wurde umgesetzt (siehe [Firefox Bug 1409257](https://bugzil.la/1409257); siehe auch die [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) Diskussion für weitere Details).
- {{httpheader("Referrer-Policy")}} kann nun verwendet werden, um Ressourcen, die über Stylesheets abgerufen werden, zu steuern ([Firefox Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox Bug 1504478](https://bugzil.la/1504478), [Firefox Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerkorrekturen

- Erzeugte `Shift`-Tastereignisse durch Verwendung von `WebDriver:PerformActions` führten nicht zu großen Buchstaben ([Firefox Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte ein endloses Einfrieren verursachen, wenn der zugrundeliegende Inhaltprozess des Tabs während dieser Navigation mehrfach geändert wird ([Firefox Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und zur Verringerung des Speicherbedarfs von Firefox wird die standardmäßig zu ladende Seite für einen neuen Tab oder ein neues Fenster jetzt `about:blank` statt `about:newtab` sein ([Firefox Bug 1506643](https://bugzil.la/1506643)).
- Das Einleitungsfeld zur Inhaltsblockierung, das auf verschiedenen Webseiten angezeigt wurde und zu fehlerhaften Elementinteraktionen führte, ist jetzt standardmäßig deaktiviert ([Firefox Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, {{WebExtAPIRef("menus.overrideContext()")}}, kann vom `contextmenu` DOM-Ereignis aus aufgerufen werden, um ein benutzerdefiniertes Kontextmenü in Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle standardmäßigen Firefox-Menüelemente zu verbergen, um eine benutzerdefinierte Kontextmenü-Oberfläche bereitzustellen. Dieses Kontextmenü kann aus mehreren obersten Menüeinträgen der Erweiterung bestehen und optional Tabulator- oder Lesezeichen-Kontextmenüeinträge anderer Erweiterungen enthalten. Für weitere Details siehe [diesen Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

  - {{WebExtAPIRef("menus.overrideContext()")}} wurde in ([Firefox Bug 1280347](https://bugzil.la/1280347)) implementiert.
  - Die Option `showDefaults: false`, die verwendet werden kann, um die Standardkontextmenüoptionen zu verbergen, wurde in ([Firefox Bug 1367160](https://bugzil.la/1367160)) implementiert.
  - `documentURLPatterns` kann nun verwendet werden, um eine `moz-extension://` Dokument-URL zu filtern, selbst wenn {{WebExtAPIRef("menus.overrideContext()")}} verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüpunkte auf bestimmte Dokumente zu beschränken ([Firefox Bug 1498896](https://bugzil.la/1498896)).

- Sie können nun einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue Eigenschaft `viewTypes` in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann nun verwendet werden, um das Symbol eines vorhandenen Menüelements zu aktualisieren ([Firefox Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können nun erkennen, welche Maustaste verwendet wurde, als ein Menüelement angeklickt wurde — dies kann durch die neue `button` Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} herausgefunden werden ([Firefox Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die {{WebExtAPIRef("windows.create()")}} Methode hat nun eine neue verfügbare Option — `cookieStoreId` — die die `CookieStoreId` angibt, die für alle Tabs verwendet wird, die beim Öffnen des Fensters erstellt wurden ([Firefox Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft ist ein Objekt, das eine `behavior` Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert annehmen, `reject_trackers`, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` Methode wird nun unterstützt ([Firefox Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue `pinned` Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Seitenaktionen bei der Installation an die Adressleiste angeheftet werden sollen oder nicht ([Firefox Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifesten unter Windows wird zuerst die 32-Bit-Registrierungsansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) nach Registrierungsschlüsseln durchsucht, gefolgt von der "nativen" Registrierungsansicht; Sie sollten die für Ihre Anwendung geeignete verwenden ([Firefox Bug 1494709](https://bugzil.la/1494709)).
- Das [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) Feld `search_provider` Objekt kann jetzt neue Eigenschaften beinhalten — `suggest_url` und `suggest_url_post_params` ([Firefox Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks Release Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
