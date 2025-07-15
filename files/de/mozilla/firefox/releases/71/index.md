---
title: Firefox 71 für Entwickler
short-title: Firefox 71
slug: Mozilla/Firefox/Releases/71
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 71, die Entwickler betreffen. Firefox 71 wurde am 3. Dezember 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

[Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Der [Mehrzeilenmodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) der Konsole ist jetzt standardmäßig verfügbar.
- Konsolenkonfigurationsoptionen sind nun in einem neuen [Symbolleisteneinstellungsmenü](https://firefox-source-docs.mozilla.org/devtools-user/web_console/ui_tour/index.html#toolbar) zusammengefasst ([Firefox Fehler 1523868](https://bugzil.la/1523868)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- Die [Inline-Variablenvorschau](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html#inline-variable-preview) wurde aktiviert ([Firefox Fehler 1576679](https://bugzil.la/1576679)).
- [Protokollierung bei Ereignissen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#logging-on-events) ist jetzt verfügbar ([Firefox Fehler 1110276](https://bugzil.la/1110276)), ebenso wie die Möglichkeit, [nach Ereignistypen zu filtern](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#filter-by-event-type).
- Das neue Debugger-[Pausen-Overlay](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html#pause-on-breakpoints-overlay) kann nun mittels der Einstellung `devtools.debugger.features.overlay` deaktiviert werden ([Firefox Fehler 1579768](https://bugzil.la/1579768)).
- Es gibt neue [Tastenkombinationen](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html) zum Öffnen des Debuggers: `Ctrl` + `Shift` + `Z` unter Linux/Windows und `Cmd` + `Opt` + `Z` unter macOS ([Firefox Fehler 1583042](https://bugzil.la/1583042)).
- Beim Anhalten an [DOM-Mutation-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) wird jetzt der DOM-Knoten mit dem Breakpoint sowie gegebenenfalls das hinzugefügte/entfernte Kind erwähnt ([Firefox Fehler 1576145](https://bugzil.la/1576145)).
- Orte in [schön gedruckten Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/pretty-print_a_minified_file/index.html) sind nach dem Formatieren und beim Springen zur Quelle vom Inspektor-Tooltip für [Ereignislistener](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html) nun korrekt ([Firefox Fehler 1500222](https://bugzil.la/1500222)).

[Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Der [Websockets-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1573805](https://bugzil.la/1573805)).
- Sie können nun eine [Volltextsuche](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#search-in-requests) in Anfragen-/Antwortinhalten, Headern und Cookies durchführen.
- Es ist nun möglich, Muster einzugeben, um das Laden spezifischer URLs zu [blockieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls).
- Der [Zeitplanungstabs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#timings) zeigt nun Timing-Daten an, die im {{httpheader("Server-Timing")}}-Header gesendet werden ([Firefox Fehler 1403051](https://bugzil.la/1403051)).

[Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Farbkästchen werden nun neben CSS-Variablendefinitionen angezeigt, die Farbwerte haben ([Firefox Fehler 1456167](https://bugzil.la/1456167)).
- {{cssxref(":visited")}}-Stile werden jetzt in der CSS-Regelansicht angezeigt ([Firefox Fehler 713106](https://bugzil.la/713106)).

### CSS

- Der Wert [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) aus CSS Grid Level 2 wurde zu {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} hinzugefügt ([Firefox Fehler 1580894](https://bugzil.la/1580894)).
- Unterstützung für die Eigenschaft {{cssxref("column-span")}} im [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) hinzugefügt ([Firefox Fehler 1426010](https://bugzil.la/1426010)).
- Unterstützung für den `path()`-Wert von {{cssxref("clip-path")}} hinzugefügt ([Firefox Fehler 1488530](https://bugzil.la/1488530)).
- Die HTML-Attribute `height` und `width` des {{htmlelement("img")}}-Elements wurden auf eine interne {{cssxref("aspect-ratio")}}-Eigenschaft abgebildet ([Firefox Fehler 1585637](https://bugzil.la/1585637)). [Sehen Sie den Leitfaden zu diesem Feature auf MDN](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images).

#### Entfernungen

- CSS-Radialverläufe akzeptieren keine negativen Radien mehr ([Firefox Fehler 1583736](https://bugzil.la/1583736)).

### JavaScript

- Die Methode {{jsxref("Promise.allSettled()")}} wird jetzt unterstützt ([Firefox Fehler 1549176](https://bugzil.la/1549176)). Diese Methode ermöglicht es Ihnen, einfach zu warten, bis jedes Promise in einem Set von Promises entweder erfüllt oder abgelehnt ist, bevor weiterer Code ausgeführt wird.

#### Entfernungen

- Die nicht standardkonformen generischen Array-Methoden wurden in Firefox 71 entfernt ([Firefox Fehler 1222547](https://bugzil.la/1222547)). Sie wurden erstmals in Firefox 1.5 eingeführt und seit Firefox 68 als veraltet markiert. Wenn Ihr Anwendungsfall darin besteht, generische Arrays auf array-ähnliche Objekte anzuwenden, können Sie Ihr Objekt in ein richtiges Array umwandeln, indem Sie [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden und dann die standardisierten Array-Methoden nutzen.

### MathML

- [MathML-Elemente](/de/docs/Web/MathML/Reference/Element) implementieren nun ein MathML-DOM und ihre Klasse ist [`MathMLElement`](/de/docs/Web/API/MathMLElement). Mit einem ordnungsgemäßen MathML-DOM können Sie nun `mathmlEl.style` oder globale Ereignishandler verwenden. Vor dieser Änderung implementierten MathML-Elemente nur die [`Element`](/de/docs/Web/API/Element)-Klasse ([Firefox Fehler 1571487](https://bugzil.la/1571487)).

### APIs

#### Neue APIs

Die [Media Session API](/de/docs/Web/API/Media_Session_API) ist nun teilweise implementiert. Diese API bietet einen standardisierten Mechanismus, mit dem Ihre Inhalte dem zugrunde liegenden Betriebssystem Informationen über den Zustand der Medien, die es abspielt, mitteilen können. Dazu gehören Metadaten wie Künstler, Album und Titel sowie möglicherweise Albumcover ([Firefox Fehler 1580602](https://bugzil.la/1580602)).

Die API bietet auch eine Möglichkeit, Benachrichtigungen zu erhalten, wenn die Mediensteuerungen des Geräts (wie Wiedergabe-, Pause- und Suchknöpfe) vom Benutzer aktiviert werden. Zu diesem Zweck ist die [`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle jetzt teilweise implementiert, mit Unterstützung für das Setzen und Abrufen der Metadaten der aktuell abgespielten Medien und für die Methode [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler). Um auf die `MediaSession`-API zuzugreifen, verwenden Sie die Eigenschaft [`navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession).

#### DOM

- Der [`StaticRange()`](/de/docs/Web/API/StaticRange/StaticRange)-Konstruktor wird jetzt unterstützt ([Firefox Fehler 1575980](https://bugzil.la/1575980)).
- Die MathML-[`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle wurde implementiert ([Firefox Fehler 1571487](https://bugzil.la/1571487)).

#### Medien, Web Audio und WebRTC

- Die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle implementiert nun die Eigenschaften [`audioBitsPerSecond`](/de/docs/Web/API/MediaRecorder/audioBitsPerSecond) und [`videoBitsPerSecond`](/de/docs/Web/API/MediaRecorder/videoBitsPerSecond) ([Firefox Fehler 1514158](https://bugzil.la/1514158)).

#### Canvas und WebGL

- Die WebGL-Erweiterungen [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2) und [`OES_fbo_render_mipmap`](/de/docs/Web/API/OES_fbo_render_mipmap) sind jetzt standardmäßig verfügbar ([Firefox Fehler 1584277](https://bugzil.la/1584277), [Firefox Fehler 1583878](https://bugzil.la/1583878)).

#### Entfernungen

Die folgenden nicht standardmäßigen [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Mitglieder wurden entfernt ([Firefox Fehler 1345192](https://bugzil.la/1345192)):

- `DataTransfer.mozItemCount`
- `DataTransfer.mozClearDataAt()`
- `DataTransfer.mozGetDataAt()`
- `DataTransfer.mozSetDataAt()`
- `DataTransfer.mozTypesAt()`

### WebDriver-Konformität (Marionette)

- Die Befehle `WebDriver:TakeScreenshot` und `WebDriver:TakeElementScreenshot` wurden aktualisiert, um das Verhaltenseinstellungen für unbehandelte Eingabeaufforderungen zu respektieren ([Firefox Fehler 1584927](https://bugzil.la/1584927)).
- Der Befehl `Marionette:Quit` wurde aktualisiert, um auch das Beenden oder Neustarten anderer von Gecko betriebener Anwendungen neben Firefox zu ermöglichen ([Firefox Fehler 1298921](https://bugzil.la/1298921)).
- Für auf GeckoView basierende Browser auf Android wird der zurückgegebene `browserName` in den Sitzungsfähigkeiten nun immer `firefox` sein ([Firefox Fehler 1587364](https://bugzil.la/1587364)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("downloads.download")}} identifiziert und meldet jetzt folgende HTTP-Antwortcodes als Fehler:
  - 404 gibt `SERVER_BAD_CONTENT` zurück
  - 403 gibt `SERVER_FORBIDDEN` zurück
  - 402 und Proxy 407 gibt `SERVER_UNAUTHORIZED` zurück
  - Alles andere über 400 gibt `SERVER_FAILED` zurück ([Firefox Fehler 1576333](https://bugzil.la/1576333))

- {{WebExtAPIRef("downloads.download")}} umfasst nun die optionale `options`-Parameter-Eigenschaft `allowHttpErrors`. Wenn auf `true` gesetzt, ermöglicht dieser `boolean`-Schalter einen Download fortzusetzen, nachdem ein HTTP-Fehler aufgetreten ist. Wenn auf `false` gesetzt, wird ein Download abgebrochen, wenn ein HTTP-Fehler auftritt. Standardwert: `false`. ([Firefox Fehler 1578955](https://bugzil.la/1578955))

#### Entfernungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden entfernt ([Firefox Fehler 1443259](https://bugzil.la/1443259)). {{WebExtAPIRef("proxy.onRequest")}} sollte jetzt verwendet werden, um die Proxy-Behandlung von Anfragen zu übernehmen.

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 71: A year-end arrival](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/)
