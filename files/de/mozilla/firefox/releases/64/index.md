---
title: Firefox 64 Versionshinweise für Entwickler
short-title: Firefox 64
slug: Mozilla/Firefox/Releases/64
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 64, die Entwickler betreffen werden. Firefox 64 wurde am 11. Dezember 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die [Zugänglichkeits-Infoleiste](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting-of-ui-items) wurde verbessert, um Informationen über das Farbkontrastverhältnis von Texten oder Bildern auf der Seite zu enthalten ([Firefox-Bug 1473037](https://bugzil.la/1473037)).
- Die Gerätauswahl im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wird jetzt zwischen den Sitzungen gespeichert ([Firefox-Bug 1248619](https://bugzil.la/1248619)).
- Ressourcen, die potenziell von der [Tracking Protection](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) betroffen sind, werden jetzt im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt ([Firefox-Bug 1333994](https://bugzil.la/1333994)).
- Die [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erhielt Verbesserungen beim Eingeben und Auswerten von Code:
  - [Autocomplete](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#autocomplete) für Konsolenausdrücke ist jetzt nicht mehr case-sensitiv ([Firefox-Bug 672733](https://bugzil.la/672733)).
  - Sie können jetzt mit einer bash-ähnlichen Rückwärtssuche durch die [Konsolenausdrucks-Historie](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#command-history) navigieren ([Firefox-Bug 1024913](https://bugzil.la/1024913)).
  - [Ausgewerteter Code](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html) in der Konsole wird nun in Eingabe und Ausgabe farblich hervorgehoben ([Firefox-Bug 1463669](https://bugzil.la/1463669)).

- Auch das Durchsteppen im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde verbessert:
  - [Stepping out](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html) einer Funktion im Debugger überspringt nun den Rückgabewert ([Firefox-Bug 923975](https://bugzil.la/923975)).

#### Entfernungen

- Die Entwicklerwerkzeuge GCLI wurden entfernt ([Firefox-Bug 1429421](https://bugzil.la/1429421)).

### HTML

_Keine Änderungen._

### CSS

- Die Spezifikationsfunktionalität von [CSS Scrollbars](/de/docs/Web/CSS/CSS_scrollbars_styling) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1492012](https://bugzil.la/1492012)).
- Implementierte Interaktionsmedienfunktionen, einschließlich [`pointer:coarse`](/de/docs/Web/CSS/@media/pointer) ([Firefox-Bug 1035774](https://bugzil.la/1035774)). Für die Implementierung von [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer) und [`any-hover`](/de/docs/Web/CSS/@media/any-hover) siehe [Firefox-Bug 1483111](https://bugzil.la/1483111).
- Die Medienfunktion [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) wird jetzt in Firefox für Android unterstützt ([Firefox-Bug 1478505](https://bugzil.la/1478505)).
- CSS {{cssxref("&lt;gradient&gt;")}}-Werte unterstützen jetzt die Syntax mehrerer Positionen für Farb-Stopps, z.B. kann `yellow 25%, yellow 50%` jetzt als `yellow 25% 50%` geschrieben werden ([Firefox-Bug 1352643](https://bugzil.la/1352643)).
- Die Eigenschaft {{cssxref("text-transform")}} akzeptiert jetzt den Wert `full-size-kana` ([Firefox-Bug 1498148](https://bugzil.la/1498148)).
- Unterstützung für {{cssxref("appearance", "-webkit-appearance")}} wurde hinzugefügt, um damit verbundene Webkompatibilitätsprobleme zu mildern ([Firefox-Bug 1368555](https://bugzil.la/1368555)).
- Eng damit verbunden haben wir auch die meisten der Firefox-spezifischen `-moz-appearance`-Werte entfernt ([Firefox-Bug 1496720](https://bugzil.la/1496720)).
- {{cssxref("display")}}: `list-item` wird nun auf {{htmlelement("legend")}}-Elementen unterstützt ([Firefox-Bug 1486602](https://bugzil.la/1486602)).
- SVG-`path()`s, wie in {{cssxref("offset-path")}} verwendbar, sind jetzt animierbar ([Firefox-Bug 1486094](https://bugzil.la/1486094)).
- Wenn eine Selektorkette oder Gruppe ein `-webkit-`-präfixiertes Pseudoelement enthält, macht dieses Pseudoelement sie nicht mehr ungültig (siehe [Firefox-Bug 1424106](https://bugzil.la/1424106) für Einzelheiten und [Firefox-Bug 1486325](https://bugzil.la/1486325) zum Aktivieren dieser Funktion).

#### Entfernungen

- Die nicht standardmäßigen `-moz-box` und `-moz-inline-box` {{CSSxRef("display")}} Werte wurden aus Web-Inhalten entfernt ([Firefox-Bug 1496961](https://bugzil.la/1496961)).
- Das nicht standardmäßige `::-moz-tree` [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wurde aus Web-Inhalten entfernt ([Firefox-Bug 1496961](https://bugzil.la/1496961)).
- Die Einstellung `layout.css.filters.enabled` wurde entfernt; [CSS-Filter](/de/docs/Web/CSS/CSS_filter_effects) können nicht mehr deaktiviert werden ([Firefox-Bug 1408841](https://bugzil.la/1408841)).
- Eine vorherige Änderung — um die Werte der 2-Werte-{{cssxref("overflow")}}-Syntax zu tauschen, so dass Block zuerst und Inline zweiter spezifiziert wird ([Firefox-Bug 1481866](https://bugzil.la/1481866)) — wurde rückgängig gemacht ([Firefox-Bug 1492567](https://bugzil.la/1492567)). Siehe [Bug 1481866 Kommentar 14](https://bugzil.la/1481866#c14) für den Grund.

### SVG

_Keine Änderungen._

### JavaScript

- Der TC39 [Well-formed JSON.stringify](https://github.com/tc39/proposal-well-formed-stringify)-Vorschlag wurde implementiert, um zu verhindern, dass {{jsxref("JSON.stringify")}} fehlerhaft formatierte Unicode-Strings zurückgibt ([Firefox-Bug 1469021](https://bugzil.la/1469021)).
- Proxied-Methoden können jetzt mit {{jsxref("Function.prototype.toString")}} verwendet werden ([Firefox-Bug 1440468](https://bugzil.la/1440468)).
- Im [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor wird jetzt, wenn kein Wert angegeben ist, ein typisierter 0-Wert verwendet. Dies wird durch den [`DefaultValue`-Algorithmus](https://webassembly.github.io/spec/js-api/#defaultvalue) spezifiziert ([Firefox-Bug 1490286](https://bugzil.la/1490286)).

### APIs

#### DOM

- Eine Vielzahl von Änderungen im Zusammenhang mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurde implementiert:
  - Die API ist jetzt unverändert ([Firefox-Bug 1269276](https://bugzil.la/1269276)).
  - Die Methoden [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) und [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) geben jetzt beide ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Modusänderung abgeschlossen ist ([Firefox-Bug 1188256](https://bugzil.la/1188256) und [Firefox-Bug 1491212](https://bugzil.la/1491212)).
  - Zuvor wurden [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) und [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignisse zuerst an das [`Document`](/de/docs/Web/API/Document) und dann an das [`Element`](/de/docs/Web/API/Element) gesendet. Dies wurde umgekehrt, sodass das Element das Ereignis zuerst erhält. Dies entspricht der neuesten Spezifikation sowie dem Verhalten von Google Chrome ([Firefox-Bug 1375319](https://bugzil.la/1375319)).

- Die [WebVR API](/de/docs/Web/API/WebVR_API) (1.1) ist jetzt unter macOS wieder aktiviert ([Firefox-Bug 1476091](https://bugzil.la/1476091)).
- [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft) und [`Window.screenTop`](/de/docs/Web/API/Window/screenTop) wurden als Aliase von [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) implementiert ([Firefox-Bug 1498860](https://bugzil.la/1498860)).
- Die Methode [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) gibt jetzt gemäß der Spezifikation alle Headernamen in Kleinbuchstaben zurück ([Firefox-Bug 1398718](https://bugzil.la/1398718)).
- Das veraltete `HTMLAllCollection`-Interface wurde gemäß neuesten [Spezifikationsaktualisierungen](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection) aktualisiert ([Firefox-Bug 1398354](https://bugzil.la/1398354)).
- [`Navigator.buildID`](/de/docs/Web/API/Navigator/buildID) gibt jetzt als Datenschutzmaßnahme einen festen Zeitstempel zurück ([Firefox-Bug 583181](https://bugzil.la/583181)).
- Die folgenden [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)-UI-Funktionsbefehle wurden standardmäßig deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)):
  - `enableObjectResizing`
  - `enableInlineTableEditing`
  - `enableAbsolutePositionEditor`

#### Service Worker

- Die Methode [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages) wurde implementiert ([Firefox-Bug 1263734](https://bugzil.la/1263734)).

#### Medien, Web Audio und WebRTC

- Die Eigenschaften [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor) und [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) werfen jetzt korrekt Ausnahmen, wenn sie auf Werte außerhalb ihrer akzeptierten Bereiche gesetzt werden ([Firefox-Bug 1487963](https://bugzil.la/1487963)).
- `RTCRtpEncodingParameters`-Einstellungen, die über [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) geändert wurden, wurden bisher bei Änderungen während eines Anrufs nicht aktualisiert. Sie werden jetzt live aktualisiert, ohne dass eine Neuverhandlung erforderlich ist ([Firefox-Bug 1253499](https://bugzil.la/1253499)).
- [`RTCIceCandidateStats.relayProtocol`](/de/docs/Web/API/RTCIceCandidateStats/relayProtocol) wurde implementiert — dies ist die standardisierte Version von `RTCIceCandidateStats.mozLocalTransport`, die jetzt veraltet ist ([Firefox-Bug 1435789](https://bugzil.la/1435789)).
- Automatische Verstärkungsregelung (AGC) ist jetzt standardmäßig aktiviert; dies kann mit der Einstellung `media.getusermedia.agc_enabled` geändert werden ([Firefox-Bug 1496714](https://bugzil.la/1496714)).

#### Entfernungen

- Die [`Window.event`](/de/docs/Web/API/Window/event)-Eigenschaft, die in Firefox 63 hinzugefügt wurde, um Webkompatibilitätsprobleme zu beheben, wurde hinter einem Pref (`dom.window.event.enabled`) platziert und in den Release-Versionen standardmäßig deaktiviert, da andere Probleme entdeckt wurden ([Firefox-Bug 1493869](https://bugzil.la/1493869)). Beachten Sie, dass dies tatsächlich spät im Firefox 63-Zyklus getan wurde, aber wir erwähnen es hier nur für den Fall.
- Die `LocalMediaStream`-Schnittstelle und ihre `stop()`-Methode wurden entfernt ([Firefox-Bug 1258143](https://bugzil.la/1258143)). Diese Methode ist mit der Ausmusterung von `LocalMediaStream` nicht mehr verfügbar. Siehe den Abschnitt [Ein Video-Stream stoppen](/de/docs/Web/API/MediaStreamTrack/stop#stopping_a_video_stream), um zu erfahren, wie Sie einen gesamten Stream stoppen.
- Die `AudioStreamTrack` und `VideoStreamTrack`-Schnittstellen wurden entfernt, da beide seit einiger Zeit veraltet sind ([Firefox-Bug 1377146](https://bugzil.la/1377146)). Ihre Funktionalität wurde in [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) integriert; Spuren werden jetzt durch den Wert ihrer [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft identifiziert, wie `audio` oder `video`.

### Sicherheit

- Der Symantec CA Distrust Plan wurde implementiert (siehe [Firefox-Bug 1409257](https://bugzil.la/1409257); siehe auch die Diskussion über [Mozillas Plan für Symantec-Wurzeln](https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion) für weitere Details).
- {{httpheader("Referrer-Policy")}} kann jetzt verwendet werden, um Ressourcen zu steuern, die über Stylesheets abgerufen werden ([Firefox-Bug 1330487](https://bugzil.la/1330487)) — siehe [Integration mit CSS](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_css) für weitere Informationen.

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- Veraltete Befehlsendpunkte ohne das Präfix `Marionette:`, `L10n:` oder `Addon:` (einschließlich `singeTap`) wurden entfernt ([Firefox-Bug 1504478](https://bugzil.la/1504478), [Firefox-Bug 1504940](https://bugzil.la/1504940)).

#### Fehlerbehebungen

- Bei der Verwendung von `WebDriver:PerformActions` erzeugte `Shift`-Tastenevents führten nicht zu Großbuchstaben ([Firefox-Bug 1405370](https://bugzil.la/1405370)).
- `WebDriver:Navigate` konnte zu einem unendlichen Hängenbleiben führen, wenn sich der zugrunde liegende Inhaltsprozess der Registerkarte während dieser Navigation mehrmals änderte ([Firefox-Bug 1504807](https://bugzil.la/1504807)).
- Zur Verbesserung der Leistung und zur Reduzierung des Speicherverbrauchs von Firefox wird die Standardseite, die für ein neues Tab oder Fenster geladen wird, nicht mehr `about:newtab`, sondern `about:blank` sein ([Firefox-Bug 1506643](https://bugzil.la/1506643)).
- Das Content-Blocking-Einführungspanel, das auf verschiedenen Webseiten angezeigt wurde und dazu führte, dass Interaktionen mit Elementen fehlschlugen, ist jetzt standardmäßig deaktiviert ([Firefox-Bug 1488826](https://bugzil.la/1488826)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Eine neue API, {{WebExtAPIRef("menus.overrideContext()")}}, kann über das `contextmenu`-DOM-Ereignis aufgerufen werden, um ein benutzerdefiniertes Kontextmenü auf Erweiterungsseiten festzulegen. Diese API erlaubt es Erweiterungen, alle Standard-Firefox-Menüelemente zugunsten einer benutzerdefinierten Kontextmenü-UI auszublenden. Dieses Kontextmenü kann aus mehreren obersten Menüelementen der Erweiterung bestehen und optional Tab- oder Lesezeichen-Kontextmenüelemente anderer Erweiterungen enthalten. Siehe [diesen Blogpost](https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm) für weitere Details.
  - {{WebExtAPIRef("menus.overrideContext()")}} wurde implementiert in ([Firefox-Bug 1280347](https://bugzil.la/1280347)).
  - Die `showDefaults: false`-Option, die zum Ausblenden der Standard-Kontextmenüoptionen verwendet werden kann, wurde implementiert in ([Firefox-Bug 1367160](https://bugzil.la/1367160)).
  - `documentURLPatterns` kann jetzt verwendet werden, um eine `moz-extension://`-Dokument-URL abzugleichen, selbst wenn {{WebExtAPIRef("menus.overrideContext()")}} verwendet wird. Auf diese Weise kann es zuverlässig verwendet werden, um benutzerdefinierte Menüelemente auf bestimmte Dokumente zu beschränken ([Firefox-Bug 1498896](https://bugzil.la/1498896)).

- Sie können jetzt einschränken, wo Kontextmenüs in einem Add-on erscheinen können, indem Sie die neue Eigenschaft `viewTypes` in {{WebExtAPIRef("menus.create()")}} und {{WebExtAPIRef("menus.update()")}} verwenden ([Firefox-Bug 1416839](https://bugzil.la/1416839)).
- {{WebExtAPIRef("menus.update()")}} kann jetzt verwendet werden, um das Symbol eines vorhandenen Menüelements zu aktualisieren ([Firefox-Bug 1414566](https://bugzil.la/1414566)).
- Erweiterungen können jetzt erkennen, welche Maustaste verwendet wurde, wenn ein Menüelement angeklickt wurde — dies kann durch die neue Eigenschaft `button` von {{WebExtAPIRef("menus.OnClickData")}} ermittelt werden ([Firefox-Bug 1469148](https://bugzil.la/1469148)).

#### Fenster

- Die {{WebExtAPIRef("windows.create()")}}-Methode hat jetzt eine neue verfügbare Option — `cookieStoreId` — die die `CookieStoreId` angibt, die für alle Tabs verwendet wird, die beim Öffnen des Fensters erstellt werden ([Firefox-Bug 1393570](https://bugzil.la/1393570)).

#### Privatsphäre

- Die {{WebExtAPIRef("privacy.websites")}} `cookieConfig`-Eigenschaft ist ein Objekt, das eine `behavior`-Eigenschaft akzeptieren kann — diese Eigenschaft kann jetzt einen neuen Wert annehmen, `reject_trackers`, der die Erweiterung anweist, Tracking-Cookies abzulehnen ([Firefox-Bug 1493057](https://bugzil.la/1493057)).

#### devtools.panels API

- Die Methode [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements) `Sidebar.setPage()` wird jetzt unterstützt ([Firefox-Bug 1398734](https://bugzil.la/1398734)).

### Manifest-Änderungen

- Die neue `pinned`-Eigenschaft des [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Manifests ermöglicht es Erweiterungen zu steuern, ob ihre Seitenelemente bei der Installation an die Adressleiste angeheftet werden sollen oder nicht ([Firefox-Bug 1494135](https://bugzil.la/1494135)).
- In nativen Manifesten unter Windows wird zuerst die 32-Bit-Registrierung ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) nach Registrierungsschlüsseln durchsucht, gefolgt von der "nativen" Registrierung; verwenden Sie diejenige, die für Ihre Anwendung geeignet ist ([Firefox-Bug 1494709](https://bugzil.la/1494709)).
- Das Feld [`chrome_settings_overrides`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) des Manifests `search_provider` kann jetzt neue Eigenschaften enthalten — `suggest_url` und `suggest_url_post_params` ([Firefox-Bug 1486819](https://bugzil.la/1486819)) und `search_url_post_params`.

## Siehe auch

- Hacks Release Post: [Firefox 64 Released](https://hacks.mozilla.org/2018/12/firefox-64-released/)
