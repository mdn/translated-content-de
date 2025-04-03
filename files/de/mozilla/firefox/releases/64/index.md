---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen werden. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die [Barrierefreiheits-Infobar](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert, um Informationen über das Farbkontrastverhältnis von Text oder Bildern auf der Seite anzuzeigen ([Firefox Bug 1473037](https://bugzil.la/1473037)).
- Die Geräteauswahl im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird nun zwischen Sitzungen gespeichert ([Firefox Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die potenziell von [Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) hat Verbesserungen beim Eingeben und Auswerten von Code erhalten:

  - Die [Autovervollständigung](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsole-Ausdrücke ist jetzt nicht mehr groß-/kleinschreibungsabhängig ([Firefox Bug 672733](https://bugzil.la/672733)).
  - Sie können jetzt durch die [Konsole-Ausdruckshistorie](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) mit einer bash-artigen Rückwärtssuche navigieren ([Firefox Bug 1024913](https://bugzil.la/1024913)).
  - [Ausgewerteter Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole wird nun sowohl im Eingabefeld als auch im Ausgabefeld syntaxgehöht ([Firefox Bug 1463669](https://bugzil.la/1463669)).

- Das Debuggen im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde ebenfalls verbessert:

  - Das [Verlassen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) einer Funktion im Debugger überspringt jetzt den Rückgabewert ([Firefox Bug 923975](https://bugzil.la/923975)).

#### Entfernte Funktionen

- Die Entwicklerwerkzeuge GCLI wurden entfernt ([Firefox Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) Spezifikation ist jetzt standardmäßig aktiviert ([Firefox Bug 1492012](https://bugzil.la/1492012)).
- Die Interaktions-Media-Features, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer), wurden implementiert ([Firefox Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox Bug 1483111](https://bugzil.la/1483111).
- Das [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Feature wird nun in Firefox für Android unterstützt ([Firefox Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}} Werte unterstützen jetzt die Syntax für Mehrfach-Positionierungsfarbstopps, z.B. kann `yellow 25%, yellow 50%` jetzt als `yellow 25% 50%` geschrieben werden ([Firefox Bug 1352643](https://bugzil.la/1352643)).
- Die {{cssxref("text-transform")}} Eigenschaft akzeptiert nun den Wert `full-size-kana` ([Firefox Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung hinzugefügt für {{cssxref("appearance", "-webkit-appearance")}}, um damit verbundene Webkompatibilitätsprobleme zu mildern ([Firefox Bug 1368555](https://bugzil.la/1368555)).
- Eng verbunden mit dem obigen Update, haben wir auch die meisten Firefox-spezifischen `-moz-appearance` Werte entfernt ([Firefox Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt auf {{htmlelement("legend")}} Elementen unterstützt ([Firefox Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie sie in {{cssxref("offset-path")}} verwendet werden, sind jetzt animierbar ([Firefox Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder Gruppe ein `-webkit-`-präfixiertes Pseudo-Element einschließt, entwertet dieses Pseudo-Element die Kette oder Gruppe nicht mehr (siehe [Firefox Bug 1424106](https://bugzil.la/1424106) für Details, und [Firefox Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieser Funktion).

#### Entfernte Funktionen

- Die nicht-standardisierten `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}} Werte wurden aus Webinhalten ausgeblendet ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Das nicht-standardisierte `::-moz-tree` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde aus Webinhalten ausgeblendet ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled` Einstellung wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Bug 1408841](https://bugzil.la/1408841)).
- Eine vorherige Änderung — die Werte der 2-Werte {{cssxref("overflow")}} Syntax zu tauschen, so dass der Block zuerst und der Inline-Zweite angegeben wird ([Firefox Bug 1481866](https://bugzil.la/1481866)) — wurde rückgängig gemacht ([Firefox Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für die Begründung.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Gut-geformte JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) Vorschlag wurde umgesetzt, um zu verhindern, dass {{jsxref("JSON.stringify")}} falsch-geformte Unicode-Zeichenketten zurückgibt ([Firefox Bug 1469021](https://bugzil.la/1469021)).
- Proxied-Funktionen können jetzt an {{jsxref("Function.prototype.toString")}}`.call()` übergeben werden ([Firefox Bug 1440468](https://bugzil.la/1440468)).
- In dem [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird bei keiner angegebenen Wert ein typisierter 0-Wert verwendet. Dies wird durch den [`DefaultValue` Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden umgesetzt:

  - Die API ist nun ohne Präfix ([Firefox Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Modiwechsel abgeschlossen ist ([Firefox Bug 1188256](https://bugzil.la/1188256) und [Firefox Bug 1491212](https://bugzil.la/1491212)).
  - Zuvor wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgedreht, damit das Element zuerst das Ereignis erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist jetzt wieder in macOS aktiviert ([Firefox Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden implementiert, als Aliase für [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) ([Firefox Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt nun Header-Namen alle in Kleinbuchstaben zurück, gemäß Spezifikation ([Firefox Bug 1398718](https://bugzil.la/1398718)).
- Das veraltete `HTMLAllCollection` Interface wurde gemäß den letzten [Spezifikations-Updates](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt einen festen Zeitstempel als Maßnahme zum Schutz der Privatsphäre zurück ([Firefox Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) UI-Funktionsbefehle wurden standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Workers

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihres akzeptierten Bereichs gesetzt werden ([Firefox Bug 1487963](https://bugzil.la/1487963)).
- Einstellungen des `RTCRtpEncodingParameters`, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, aktualisierten sich bisher nicht, wenn Änderungen während eines Anrufs vorgenommen wurden. Sie werden jetzt live aktualisiert, ohne Neuverhandlung ([Firefox Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, welche nun veraltet ist ([Firefox Bug 1435789](https://bugzil.la/1435789)).
- Automatische Lautstärkeanpassung (AGC) ist jetzt standardmäßig aktiviert; dies kann über die Einstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox Bug 1496714](https://bugzil.la/1496714)).

#### Entfernte Funktionen

- Die [`Window.event`](/de/docs/Web/API/Window/event) Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Webkompatibilitätsprobleme zu lösen, wurde hinter einer Einstellungsoption (`dom.window.event.enabled`) versteckt und in Release-Versionen vorerst standardmäßig deaktiviert, aufgrund anderer aufgedeckter Probleme ([Firefox Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63 Release-Zyklus geschehen ist, aber wir erwähnen es hier aus Sicherheitsgründen.
- Das `LocalMediaStream` Interface und seine `stop()` Methode wurden entfernt ([Firefox Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Veraltung von `LocalMediaStream` nicht mehr verfügbar. Sehen Sie sich den Abschnitt [Beenden eines Videostreams](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream) an, um zu erfahren, wie man einen gesamten Stream stoppt.
- Die Interfaces `AudioStreamTrack` und `VideoStreamTrack` wurden entfernt, da beide seit einiger Zeit veraltet sind ([Firefox Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert; Tracks werden jetzt durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Eigenschaft, wie `audio` oder `video`, identifiziert.

### Sicherheit

- Der Symantec CA Distrust Plan wurde umgesetzt (siehe [Firefox Bug 1409257](https://bugzil.la/1409257); siehe auch die [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) Diskussion für mehr Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um über Stylesheets abgerufene Ressourcen zu steuern ([Firefox Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Abgeleitete Befehls-Endpunkte ohne das Präfix `Marionette:`, `L10n:`, oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox Bug 1504478](https://bugzil.la/1504478), [Firefox Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Synthesizierte `Shift`-Tastendrücke mittels `WebDriver:PerformActions` ergaben keine großgeschriebenen Buchstaben ([Firefox Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` könnte einen unendlichen Stillstand verursachen, wenn sich der zugrundeliegende Inhalt des Tabs während der Navigation mehrfach änderte ([Firefox Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und zur Reduzierung des Speicherbedarfs von Firefox ist die Standardseite, die für einen neuen Tab oder ein neues Fenster geladen wird, nicht mehr `about:newtab`, sondern `about:blank` ([Firefox Bug 1506643](https://bugzil.la/1506643)).
- Das Inhaltsblockierungs-Einführungsfeld, das auf verschiedenen Webseiten angezeigt wurde und Elementinteraktionen zum Scheitern brachte, ist jetzt standardmäßig deaktiviert ([Firefox Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, {{WebExtAPIRef("menus.overrideContext()")}}, kann vom `contextmenu` DOM-Ereignis aufgerufen werden, um ein benutzerdefiniertes Kontextmenü auf Erweiterungsseiten einzustellen. Diese API ermöglicht es Erweiterungen, alle Standard-Firefox-Menüelemente auszublenden, um eine benutzerdefinierte Kontextmenü-Benutzeroberfläche bereitzustellen. Dieses Kontextmenü kann aus mehreren übergeordneten Menüelementen der Erweiterung bestehen und kann optional auch Tab- oder Lesezeichen-Kontextmenüelemente aus anderen Erweiterungen einschließen. Weitere Details finden Sie in [diesem Blogbeitrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

  - {{WebExtAPIRef("menus.overrideContext()")}} wurde implementiert in ([Firefox Bug 1280347](https://bugzil.la/1280347)).
  - Die `showDefaults: false` Option, die verwendet werden kann, um die Standard-Kontextmenüoptionen auszublenden, wurde implementiert in ([Firefox Bug 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` kann jetzt verwendet werden, um ein `moz-extension://` Dokument-URL zu matchen, auch wenn {{WebExtAPIRef("menus.overrideContext()")}} verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüelemente auf bestimmte Dokumente zu beschränken ([Firefox Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue `viewTypes` Eigenschaft in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Icon eines bestehenden Menüelements zu aktualisieren ([Firefox Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welcher Mausbutton verwendet wurde, als ein Menüelement geklickt wurde — dies kann über die neue `button` Eigenschaft von {{WebExtAPIRef("menus.OnClickData")}} abgerufen werden ([Firefox Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die Methode {{WebExtAPIRef("windows.create()")}} hat jetzt eine neue verfügbare Option — `cookieStoreId` — die den `CookieStoreId` angibt, der für alle Tabs verwendet werden soll, die beim Öffnen des Fensters erstellt wurden ([Firefox Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}} `cookieConfig` Eigenschaft ist ein Objekt, das eine `behavior` Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert übernehmen, `reject_trackers`, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) Methode `Sidebar.setPage()` wird jetzt unterstützt ([Firefox Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue `pinned` Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssels ermöglicht es Erweiterungen, zu steuern, ob ihre Seitenaktionen bei der Installation an die Adressleiste angeheftet werden sollen oder nicht ([Firefox Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifests auf Windows wird zuerst die 32-Bit-Registry-Ansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) für Registry-Schlüssel überprüft, gefolgt von der "nativen" Registry-Ansicht; Sie sollten diejenige verwenden, die für Ihre Anwendung angemessen ist ([Firefox Bug 1494709](https://bugzil.la/1494709)).
- Das Feld [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) `search_provider` Objekt kann jetzt neue Eigenschaften enthalten — `suggest_url` und `suggest_url_post_params` ([Firefox Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks-Release-Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
