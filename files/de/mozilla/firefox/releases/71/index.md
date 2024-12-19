---
title: Firefox 71 für Entwickler
slug: Mozilla/Firefox/Releases/71
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 71, die Entwickler betreffen werden. Firefox 71 wurde am 3. Dezember 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

[Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Der [Multi-Line-Modus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) der Konsole ist jetzt standardmäßig verfügbar.
- Die Konfigurationseinstellungen der Konsole sind jetzt in einem neuen [Toolbar-Einstellungsmenü](https://firefox-source-docs.mozilla.org/devtools-user/web_console/ui_tour/index.html#toolbar) zusammengefasst ([Firefox-Bug 1523868](https://bugzil.la/1523868)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- Die [Inline-Variablenvorschau](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html#inline-variable-preview) wurde aktiviert ([Firefox-Bug 1576679](https://bugzil.la/1576679)).
- [Protokollierung bei Ereignissen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#logging-on-events) ist jetzt verfügbar ([Firefox-Bug 1110276](https://bugzil.la/1110276)), ebenso wie die Möglichkeit, nach [Ereignistypen zu filtern](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#filter-by-event-type).
- Das neue [unterbrochene Overlay](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html#pause-on-breakpoints-overlay) des Debuggers kann jetzt über das `devtools.debugger.features.overlay` pref deaktiviert werden ([Firefox-Bug 1579768](https://bugzil.la/1579768)).
- Es gibt neue [Tastenkombinationen](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html) zum Öffnen des Debuggers: `Ctrl` + `Shift` + `Z` auf Linux/Windows und `Cmd` + `Opt` + `Z` auf macOS ([Firefox-Bug 1583042](https://bugzil.la/1583042)).
- Das Anhalten an [DOM-Mutations-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) erwähnt jetzt den DOM-Knoten, der den Breakpoint hat, und, falls verfügbar, den hinzugefügten/entfernten Kindknoten ([Firefox-Bug 1576145](https://bugzil.la/1576145)).
- Positionen in [schön gedruckten Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/pretty-print_a_minified_file/index.html) sind jetzt nach dem Schön-Drucken und beim Springen zur Quelle aus dem [Ereignislistener-Tooltip](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html) des Inspectors korrekt ([Firefox-Bug 1500222](https://bugzil.la/1500222)).

[Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Der [Websockets-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1573805](https://bugzil.la/1573805)).
- Sie können jetzt eine [Volltextsuche](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#search-in-requests) von Anforderungs-/Antwortkörpern, Headern und Cookies durchführen.
- Sie können jetzt Muster eingeben, um [spezifische URLs zu blockieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls).
- Die Registerkarte [Timings](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#timings) zeigt jetzt Timing-Daten, die in der {{httpheader("Server-Timing")}}-Header gesendet werden ([Firefox-Bug 1403051](https://bugzil.la/1403051)).

[Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Farbfelder werden jetzt neben CSS-Variablendefinitionen angezeigt, die Farbwerte haben ([Firefox-Bug 1456167](https://bugzil.la/1456167)).
- {{cssxref(":visited")}}-Stile werden jetzt in der CSS-Regel-Ansicht angezeigt ([Firefox-Bug 713106](https://bugzil.la/713106)).

### CSS

- Der [Subgrid-Wert](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) aus CSS Grid Level 2 wurde zu {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} hinzugefügt ([Firefox-Bug 1580894](https://bugzil.la/1580894)).
- Unterstützung für die {{cssxref("column-span")}}-Eigenschaft im [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) wurde hinzugefügt ([Firefox-Bug 1426010](https://bugzil.la/1426010)).
- Unterstützung für den `path()`-Wert von {{cssxref("clip-path")}} wurde hinzugefügt ([Firefox-Bug 1488530](https://bugzil.la/1488530)).
- Die `height` und `width` HTML-Attribute des {{htmlelement("img")}}-Elements wurden auf eine interne {{cssxref("aspect-ratio")}}-Eigenschaft abgebildet ([Firefox-Bug 1585637](https://bugzil.la/1585637)). [Siehe den Leitfaden zu diesem Feature auf MDN](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images).

#### Entfernungen

- CSS Radial Gradients akzeptieren keine negativen Radien mehr ([Firefox-Bug 1583736](https://bugzil.la/1583736)).

### JavaScript

- Die {{jsxref("Promise.allSettled()")}}-Methode wird jetzt unterstützt ([Firefox-Bug 1549176](https://bugzil.la/1549176)). Diese Methode ermöglicht es Ihnen, einfach zu warten, bis jedes Promise in einer Menge von Promises entweder erfüllt oder abgelehnt wird, bevor weiterer Code ausgeführt wird.

#### Entfernungen

- Die nicht standardmäßigen generischen Array-Methoden wurden in Firefox 71 entfernt ([Firefox-Bug 1222547](https://bugzil.la/1222547)). Sie wurden erstmals in Firefox 1.5 eingeführt und ab Firefox 68 als veraltet markiert. Wenn Ihr Anwendungsfall darin besteht, generische Arrays auf array-ähnlichen Objekten zu verwenden, können Sie Ihr Objekt mit [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) in ein richtiges Array umwandeln und dann Standard-Array-Methoden verwenden.

### MathML

- [MathML-Elemente](/de/docs/Web/MathML/Element) implementieren jetzt eine MathML-DOM und ihre Klasse ist [`MathMLElement`](/de/docs/Web/API/MathMLElement). Mit einem ordnungsgemäßen MathML-DOM können Sie beispielsweise `mathmlEl.style` oder globale Ereignishandler verwenden. Vor dieser Änderung implementierten MathML-Elemente nur die [`Element`](/de/docs/Web/API/Element)-Klasse ([Firefox-Bug 1571487](https://bugzil.la/1571487)).

### APIs

#### Neue APIs

Die [Media Session API](/de/docs/Web/API/Media_Session_API) ist jetzt teilweise implementiert. Diese API bietet einen standardisierten Mechanismus, damit Ihr Inhalt dem zugrundeliegenden Betriebssystem Informationen über den Zustand der abgespielten Medien mitteilen kann. Dazu gehören Metadaten wie Künstler, Album und Trackname sowie möglicherweise Albumcover ([Firefox-Bug 1580602](https://bugzil.la/1580602)).

Die API bietet auch eine Möglichkeit, Benachrichtigungen zu erhalten, wenn die Mediensteuerungen des Geräts (wie Wiedergabe-, Pause- und Suchschaltflächen) vom Benutzer aktiviert werden. Zu diesem Zweck ist die [`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle jetzt teilweise implementiert, mit Unterstützung für das Setzen und Abrufen der Metadaten des derzeit abgespielten Mediums und für die [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler)-Methode. Um auf die `MediaSession` API zuzugreifen, verwenden Sie die [`navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Eigenschaft.

#### DOM

- Der [`StaticRange()`](/de/docs/Web/API/StaticRange/StaticRange)-Konstruktor wird jetzt unterstützt ([Firefox-Bug 1575980](https://bugzil.la/1575980)).
- Die MathML [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle wurde implementiert ([Firefox-Bug 1571487](https://bugzil.la/1571487)).

#### Medien, Web Audio und WebRTC

- Die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle implementiert jetzt die [`audioBitsPerSecond`](/de/docs/Web/API/MediaRecorder/audioBitsPerSecond) und [`videoBitsPerSecond`](/de/docs/Web/API/MediaRecorder/videoBitsPerSecond)-Eigenschaften ([Firefox-Bug 1514158](https://bugzil.la/1514158)).

#### Canvas und WebGL

- Die [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2) und [`OES_fbo_render_mipmap`](/de/docs/Web/API/OES_fbo_render_mipmap) WebGL-Erweiterungen werden jetzt standardmäßig bereitgestellt ([Firefox-Bug 1584277](https://bugzil.la/1584277), [Firefox-Bug 1583878](https://bugzil.la/1583878)).

#### Entfernungen

Die folgenden nicht standardmäßigen [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Mitglieder wurden entfernt ([Firefox-Bug 1345192](https://bugzil.la/1345192)):

- `DataTransfer.mozItemCount`
- `DataTransfer.mozClearDataAt()`
- `DataTransfer.mozGetDataAt()`
- `DataTransfer.mozSetDataAt()`
- `DataTransfer.mozTypesAt()`

### WebDriver-Konformität (Marionette)

- Sowohl die `WebDriver:TakeScreenshot`- als auch die `WebDriver:TakeElementScreenshot`-Befehle wurden aktualisiert, um die Einstellung des unhandled prompt behavior zu respektieren ([Firefox-Bug 1584927](https://bugzil.la/1584927)).
- Der Befehl `Marionette:Quit` wurde aktualisiert, um auch das Beenden oder Neustarten anderer Gecko-angetriebener Anwendungen außer Firefox zu ermöglichen ([Firefox-Bug 1298921](https://bugzil.la/1298921)).
- Für GeckoView-basierte Browser auf Android wird der zurückgegebene `browserName` in den Sitzungskapazitäten jetzt immer `firefox` sein ([Firefox-Bug 1587364](https://bugzil.la/1587364)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("downloads.download")}} identifiziert und meldet jetzt die folgenden HTTP-Antwortcodes als Fehler:

  - 404 führt zu `SERVER_BAD_CONTENT`
  - 403 führt zu `SERVER_FORBIDDEN`
  - 402 und Proxy 407 führen zu `SERVER_UNAUTHORIZED`
  - Alles über 400 führt zu `SERVER_FAILED` ([Firefox-Bug 1576333](https://bugzil.la/1576333))

- {{WebExtAPIRef("downloads.download")}} enthält jetzt die optionale `options`-Parameter-Eigenschaft `allowHttpErrors`. Wenn auf `true` gesetzt, ermöglicht Ihnen dieses `boolean`-Flag, einen Download nach Auftreten eines HTTP-Fehlers fortzusetzen. Wenn `false`, wird ein Download abgebrochen, wenn ein HTTP-Fehler auftritt. Standardwert: `false`. ([Firefox-Bug 1578955](https://bugzil.la/1578955))

#### Entfernungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden entfernt ([Firefox-Bug 1443259](https://bugzil.la/1443259)). {{WebExtAPIRef("proxy.onRequest")}} sollte jetzt verwendet werden, um die Proxying von Anfragen zu behandeln.

## Siehe auch

- Hacks-Release-Post: [Firefox 71: A year-end arrival](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/)

## Ältere Versionen

{{Firefox_for_developers}}
