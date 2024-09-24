---
title: Firefox 64 für Entwickler
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 64, die Entwickler betreffen. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Die [Barrierefreiheits-Infobar](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde erweitert, um Informationen über das Farbkontrastverhältnis von Text oder Bildern auf der Seite zu enthalten ([Firefox Bug 1473037](https://bugzil.la/1473037)).
- Die Gerätauswahl im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird jetzt zwischen den Sitzungen gespeichert ([Firefox Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die möglicherweise von [Tracking-Schutz](/de/docs/Web/Privacy/Firefox_tracking_protection) betroffen sind, werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox Bug 1333994](https://bugzil.la/1333994)).
- Die [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) wurde hinsichtlich der Eingabe und Bewertung von Code verbessert:

  - [Autovervollständigung](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke ist jetzt nicht mehr auf Groß- und Kleinschreibung angewiesen ([Firefox Bug 672733](https://bugzil.la/672733)).
  - Sie können jetzt durch den [Konsolenausdruck-Verlauf](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) mit einer bash-ähnlichen Rückwärtssuche navigieren ([Firefox Bug 1024913](https://bugzil.la/1024913)).
  - [Bewerteter Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole wird nun sowohl im Eingabe- als auch im Ausgabebereich syntaxhervorgehoben ([Firefox Bug 1463669](https://bugzil.la/1463669)).

- Das Durchsteuern im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) hat ebenfalls einige Verbesserungen erfahren:

  - [Aus einer Funktion heraustreten](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) im Debugger überspringt jetzt den Rückgabewert ([Firefox Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die Entwicklertools GCLI wurde entfernt ([Firefox Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Spezifikationsfunktionalität der [CSS-Scrollleisten](/de/docs/Web/CSS/CSS_scrollbars_styling) wurde standardmäßig aktiviert ([Firefox Bug 1492012](https://bugzil.la/1492012)).
- Implementierte Interaktions-Medien-Features, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer) ([Firefox Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox Bug 1483111](https://bugzil.la/1483111).
- Das Medien-Feature [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird jetzt in Firefox für Android unterstützt ([Firefox Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}}-Werte unterstützen jetzt Syntax für mehrfache Farbpositionsstops, z.B. kann `yellow 25%, yellow 50%` jetzt als `yellow 25% 50%` geschrieben werden ([Firefox Bug 1352643](https://bugzil.la/1352643)).
- Die {{cssxref("text-transform")}}-Eigenschaft akzeptiert jetzt den Wert `full-size-kana` ([Firefox Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung für {{cssxref("appearance", "-webkit-appearance")}} wurde hinzugefügt, um damit verbundene Webkompatibilitätsprobleme zu lindern ([Firefox Bug 1368555](https://bugzil.la/1368555)).
- Eng damit verbunden haben wir auch die meisten Firefox-spezifischen `-moz-appearance`-Werte entfernt ([Firefox Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird jetzt auf {{htmlelement("legend")}}-Elementen unterstützt ([Firefox Bug 1486602](https://bugzil.la/1486602)).
- SVG `path()`s, wie sie in {{cssxref("offset-path")}} verwendet werden können, sind jetzt animierbar ([Firefox Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder Gruppe ein `-webkit-`-präfixiertes Pseudoelement umfasst, wird dieses Pseudoelement sie nicht mehr ungültig machen (siehe [Firefox Bug 1424106](https://bugzil.la/1424106) für die Details und [Firefox Bug 1486325](https://bugzil.la/1486325) für die Aktivierung dieses Features).

#### Entfernungen

- Die nicht standardisierten `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}}-Werte wurden vor Webinhalten verborgen ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardisierte `::-moz-tree` [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) wurde vor Webinhalten verborgen ([Firefox Bug 1496961](https://bugzil.la/1496961)).
- Die `layout.css.filters.enabled`-Präferenz wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox Bug 1408841](https://bugzil.la/1408841)).
- Eine vorherige Änderung — um die Werte der zweiwertigen {{cssxref("overflow")}}-Syntax zu tauschen, sodass Block zuerst und Inline danach angegeben wird ([Firefox Bug 1481866](https://bugzil.la/1481866)) — wurde zurückgenommen ([Firefox Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 comment 14](https://bugzil.la/1481866#c14) für die Gründe.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39-Vorschlag [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify) wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} ungültige Unicode-Zeichenketten zurückgibt ([Firefox Bug 1469021](https://bugzil.la/1469021)).
- Proxied-Funktionen können jetzt an {{jsxref("Function.prototype.toString")}}`.call()` übergeben werden ([Firefox Bug 1440468](https://bugzil.la/1440468)).
- Im Konstruktor [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global), wenn kein Wert angegeben wird, wird ein typisierter Wert von 0 verwendet. Dies wird durch den Algorithmus [`DefaultValue`](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Reihe von Änderungen im Zusammenhang mit der {{domxref("Fullscreen_API", "Fullscreen API", "", "1")}} wurde implementiert:

  - Die API ist jetzt nicht mehr mit Präfix versehen ([Firefox Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden {{domxref("Element.requestFullscreen()")}} und {{domxref("Document.exitFullscreen()")}} geben jetzt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Moduswechsel abgeschlossen ist ([Firefox Bug 1188256](https://bugzil.la/1188256) und [Firefox Bug 1491212](https://bugzil.la/1491212)).
  - Zuvor wurden {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} und {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}-Ereignisse zuerst an das {{domxref("Document")}} und dann an das {{domxref("Element")}} gesendet. Dies wurde umgekehrt, sodass nun das Element das Ereignis zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox Bug 1375319](https://bugzil.la/1375319)).

- Die {{domxref("WebVR_API", "WebVR API", "", "1")}} (1.1) ist jetzt auf macOS wieder aktiviert ([Firefox Bug 1476091](https://bugzil.la/1476091)).
- {{domxref("Window.screenLeft")}} und {{domxref("Window.screenTop")}} wurden als Aliase von {{domxref("Window.screenX")}} und {{domxref("Window.screenY")}} implementiert ([Firefox Bug 1498860](https://bugzil.la/1498860)).
- Die Methode {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} gibt jetzt gemäß Spezifikation alle Header-Namen in Kleinbuchstaben zurück ([Firefox Bug 1398718](https://bugzil.la/1398718)).
- Das veraltete `HTMLAllCollection`-Interface wurde gemäß den neuesten [Spezifikationsupdates](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox Bug 1398354](https://bugzil.la/1398354)).
- {{domxref("Navigator.buildID")}} gibt als Datenschutzmaßnahme jetzt einen festen Zeitstempel zurück ([Firefox Bug 583181](https://bugzil.la/583181)).
- Die folgenden UI-Feature-Befehle von {{domxref("Document.execCommand()")}} wurden standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)):

  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Workers

- Die Methode {{domxref("ServiceWorkerContainer.startMessages()")}} wurde implementiert ([Firefox Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften {{domxref("PannerNode.refDistance")}}, {{domxref("PannerNode.maxDistance")}}, {{domxref("PannerNode.rolloffFactor")}} und {{domxref("PannerNode.coneOuterGain")}} werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters`-Einstellungen, die über {{domxref("RTCRtpSender.setParameters()")}} geändert wurden, wurden früher nicht aktualisiert, wenn die Änderungen während eines Anrufs vorgenommen wurden. Sie werden jetzt live aktualisiert, ohne Neuverhandlungen ([Firefox Bug 1253499](https://bugzil.la/1253499)).
- {{domxref("RTCIceCandidateStats.relayProtocol")}} wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, die jetzt als veraltet gilt ([Firefox Bug 1435789](https://bugzil.la/1435789)).
- Die automatische Verstärkungsregelung (Automatic Gain Control, AGC) ist jetzt standardmäßig aktiviert; dies kann über die Präferenz `media.getusermedia.agc_enabled` geändert werden ([Firefox Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die {{domxref("Window.event")}}-Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Webkompatibilitätsprobleme zu beheben, wurde hinter einer Präferenz (`dom.window.event.enabled`) platziert und ist standardmäßig in Release-Versionen deaktiviert, aufgrund anderer aufgetretener Probleme ([Firefox Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63-Release-Zyklus gemacht wurde, aber wir erwähnen es hier nur für den Fall.
- Das `LocalMediaStream`-Interface und dessen `stop()`-Methode wurden entfernt ([Firefox Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Veralterung von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Stoppen eines Videostreams](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie man einen gesamten Stream stoppt.
- Die Interfaces `AudioStreamTrack` und `VideoStreamTrack` wurden entfernt, da beide seit einiger Zeit als veraltet gelten ([Firefox Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in {{domxref("MediaStreamTrack")}} integriert; Tracks werden jetzt durch den Wert ihrer {{domxref("MediaStreamTrack.kind", "kind")}}-Eigenschaft identifiziert, z.B. `audio` oder `video`.

### Sicherheit

- Der Distrust-Plan für Symantec CA wurde umgesetzt (siehe [Firefox Bug 1409257](https://bugzil.la/1409257); siehe auch die Diskussion zu [Mozilla's Plan for Symantec Roots](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) für weitere Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um Ressourcen zu regeln, die über Stylesheets abgerufen werden ([Firefox Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehl-Endpunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox Bug 1504478](https://bugzil.la/1504478), [Firefox Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Synthesizierte `Shift`-Tastenereignisse durch die Nutzung von `WebDriver:PerformActions` führten nicht zu Großbuchstaben ([Firefox Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Hang führen, wenn der zugrunde liegende Inhaltsprozess der Registerkarte während dieser Navigation mehrfach geändert wurde ([Firefox Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und zur Verringerung des Speicherbedarfs von Firefox ist die standardmäßig geladene Seite für einen neuen Tab oder ein neues Fenster nicht mehr `about:newtab` sondern `about:blank` ([Firefox Bug 1506643](https://bugzil.la/1506643)).
- Das Einführungsfenster für Inhaltsblockierung, das auf verschiedenen Webseiten angezeigt wurde und die Interaktion mit Elementen scheitern ließ, ist jetzt standardmäßig deaktiviert ([Firefox Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, `{{WebExtAPIRef("menus.overrideContext()")}}`, kann vom DOM-Event `contextmenu` aufgerufen werden, um ein benutzerdefiniertes Kontextmenü in Erweiterungsseiten festzulegen. Diese API ermöglicht es Erweiterungen, alle Standardmenüpunkte von Firefox auszublenden, um eine benutzerdefinierte Kontextmenü-Benutzeroberfläche bereitzustellen. Dieses Kontextmenü kann aus mehreren obersten Menüelementen der Erweiterung bestehen und optional Registerkarten- oder Lesezeichen-Kontextmenüpunkte anderer Erweiterungen einbeziehen. Weitere Einzelheiten finden Sie in [diesem Blog-Eintrag](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm).

  - `{{WebExtAPIRef("menus.overrideContext()")}}` wurde in ([Firefox Bug 1280347](https://bugzil.la/1280347)) implementiert.
  - Die Option `showDefaults: false`, die verwendet werden kann, um die standardmäßigen Kontextmenüoptionen auszublenden, wurde in ([Firefox Bug 1367160](https://bugzil.la/1367160)) implementiert.
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://` Dokument-URL abzugleichen, selbst wenn `{{WebExtAPIRef("menus.overrideContext()")}}` verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüpunkte auf bestimmte Dokumente zu beschränken ([Firefox Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue Eigenschaft `viewTypes` in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Symbol eines vorhandenen Menüpunktes zu aktualisieren ([Firefox Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welcher Mausklick verwendet wurde, um einen Menüpunkt zu klicken — dies kann durch die neue Eigenschaft `button` von {{WebExtAPIRef("menus.OnClickData")}} festgestellt werden ([Firefox Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die Methode {{WebExtAPIRef("windows.create()")}} verfügt jetzt über eine neue verfügbare Option — `cookieStoreId` —, die den `CookieStoreId` angibt, der für alle beim Öffnen des Fensters erstellten Tabs verwendet wird ([Firefox Bug 1393570](https://bugzil.la/1393570)).

#### Datenschutz

- Die {{WebExtAPIRef("privacy.websites")}}-Eigenschaft `cookieConfig` ist ein Objekt, das eine `behavior`-Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert `reject_trackers` annehmen, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue Eigenschaft `pinned` des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Keys ermöglicht es Erweiterungen zu steuern, ob ihre Page Actions bei der Installation an die Adressleiste angeheftet werden sollen oder nicht ([Firefox Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifesten auf Windows wird zuerst die 32-Bit-Registrierungsansicht ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) für Registrierungsschlüssel überprüft, gefolgt von der "nativen" Registrierungsansicht; Sie sollten den Ihres Anwendungsfalls passenden verwenden ([Firefox Bug 1494709](https://bugzil.la/1494709)).
- Das Feld [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) kann jetzt neue Eigenschaften in das `search_provider`-Objekt einfügen — `suggest_url` und `suggest_url_post_params` ([Firefox Bug 1486819](https://bugzil.la/1486819)), und `search_url_post_params`.

## Siehe auch

- Hacks Release-Artikel: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)

## Ältere Versionen

{{Firefox_for_developers}}
