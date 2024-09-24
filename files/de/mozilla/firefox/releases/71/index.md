---
title: Firefox 71 für Entwickler
slug: Mozilla/Firefox/Releases/71
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 71, die Entwickler betreffen werden. Firefox 71 wurde am 3. Dezember 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

[Konsolen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Der [Mehrzeilenmodus der Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) ist nun standardmäßig verfügbar.
- Die Konfigurationsoptionen der Konsole sind nun in einem neuen [Einstellungsmenü in der Symbolleiste](https://firefox-source-docs.mozilla.org/devtools-user/web_console/ui_tour/index.html#toolbar) zusammengefasst ([Firefox-Bug 1523868](https://bugzil.la/1523868)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- [Inline-Variablenvorschau](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html#inline-variable-preview) wurde aktiviert ([Firefox-Bug 1576679](https://bugzil.la/1576679)).
- [Protokollierung bei Ereignissen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#logging-on-events) ist jetzt verfügbar ([Firefox-Bug 1110276](https://bugzil.la/1110276)), ebenso wie die Möglichkeit, nach Ereignistyp zu [filtern](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#filter-by-event-type).
- Die neue Debugger-Overlay-Anzeige bei [Unterbrechungen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html#pause-on-breakpoints-overlay) kann nun über die Voreinstellung `devtools.debugger.features.overlay` deaktiviert werden ([Firefox-Bug 1579768](https://bugzil.la/1579768)).
- Es gibt neue [Tastenkombinationen](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html) zum Öffnen des Debuggers: `Ctrl` + `Shift` + `Z` auf Linux/Windows und `Cmd` + `Opt` + `Z` auf macOS ([Firefox-Bug 1583042](https://bugzil.la/1583042)).
- Pausieren bei einem [DOM-Mutations-Breakpoint](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) zeigt jetzt den DOM-Knoten an, der den Breakpoint hat, und, falls verfügbar, das Kind-Element, das hinzugefügt/entfernt wurde ([Firefox-Bug 1576145](https://bugzil.la/1576145)).
- Positionen in [schön gedruckten Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/pretty-print_a_minified_file/index.html) sind nun korrekt nach dem Schön-Drucken und beim Springen zur Quelle vom Ereignislisten-Tooltip des Inspektors ([Firefox-Bug 1500222](https://bugzil.la/1500222)).

[Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Der [WebSockets-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1573805](https://bugzil.la/1573805)).
- Sie können jetzt eine [Volltextsuche](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#search-in-requests) in Anfragetexten/-antworten, Headern und Cookies durchführen.
- Sie können jetzt Muster eingeben, um das [Laden bestimmter URLs zu blockieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls).
- Der [Tab "Timings"](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#timings) zeigt jetzt Timing-Daten, die im {{httpheader("Server-Timing")}}-Header gesendet werden, an ([Firefox-Bug 1403051](https://bugzil.la/1403051)).

[Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Farbmuster werden jetzt neben CSS-Variablen-Definitionen angezeigt, die Farbwerte besitzen ([Firefox-Bug 1456167](https://bugzil.la/1456167)).
- {{cssxref(":visited")}}-Stile werden jetzt in der CSS-Regelansicht angezeigt ([Firefox-Bug 713106](https://bugzil.la/713106)).

### CSS

- Der [Subgrid-Wert](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) aus CSS Grid Level 2 wurde zu {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} hinzugefügt ([Firefox-Bug 1580894](https://bugzil.la/1580894)).
- Unterstützung für die {{cssxref("column-span")}}-Eigenschaft im [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) hinzugefügt ([Firefox-Bug 1426010](https://bugzil.la/1426010)).
- Unterstützung für den `path()`-Wert von {{cssxref("clip-path")}} hinzugefügt ([Firefox-Bug 1488530](https://bugzil.la/1488530)).
- Die `height`- und `width`-HTML-Attribute des {{htmlelement("img")}}-Elements werden auf eine interne {{cssxref("aspect-ratio")}}-Eigenschaft abgebildet ([Firefox-Bug 1585637](https://bugzil.la/1585637)). [Siehe den Leitfaden zu diesem Feature auf MDN](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images).

#### Entfernung

- CSS-Gradienten mit negativen Radien werden nicht mehr akzeptiert ([Firefox-Bug 1583736](https://bugzil.la/1583736)).

### JavaScript

- Die Methode {{jsxref("Promise.allSettled()")}} wird jetzt unterstützt ([Firefox-Bug 1549176](https://bugzil.la/1549176)). Diese Methode ermöglicht es Ihnen, einfach zu warten, bis jedes Promise in einem Set entweder erfüllt oder abgelehnt wurde, bevor weiterer Code ausgeführt wird.

#### Entfernung

- Die nicht-standardisierten Array-generischen Methoden wurden in Firefox 71 entfernt ([Firefox-Bug 1222547](https://bugzil.la/1222547)). Sie wurden erstmals in Firefox 1.5 eingeführt und ab Firefox 68 als veraltet markiert. Wenn Sie Array-Generika auf arrayähnlichen Objekten verwenden möchten, können Sie Ihr Objekt in ein richtiges Array umwandeln, indem Sie [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) verwenden und dann die Standard-Array-Methoden einsetzen.

### MathML

- [MathML-Elemente](/de/docs/Web/MathML/Element) implementieren jetzt ein MathML-DOM und ihre Klasse ist {{domxref("MathMLElement")}}. Mit einem richtigen MathML-DOM können Sie jetzt zum Beispiel `mathmlEl.style` oder globale Ereignishandler verwenden. Vor dieser Änderung implementierten MathML-Elemente nur die {{domxref("Element")}}-Klasse ([Firefox-Bug 1571487](https://bugzil.la/1571487)).

### APIs

#### Neue APIs

Die [Media Session API](/de/docs/Web/API/Media_Session_API) ist nun teilweise implementiert. Diese API bietet einen standardisierten Mechanismus, damit Ihre Inhalte dem zugrunde liegenden Betriebssystem Informationen über den Zustand der abgespielten Medien mitteilen können. Dazu gehören Metadaten wie Künstler, Album und Titelname sowie möglicherweise Albumcover ([Firefox-Bug 1580602](https://bugzil.la/1580602)).

Die API bietet auch eine Möglichkeit, Benachrichtigungen zu erhalten, wenn die Mediensteuerungen des Geräts (wie Wiedergabe-, Pause- und Suchknöpfe) durch den Benutzer aktiviert werden. Zu diesem Zweck ist die Schnittstelle {{domxref("MediaSession")}} nun teilweise implementiert, mit Unterstützung für das Setzen und Abrufen von Metadaten der aktuell abgespielten Medien sowie für die Methode {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}. Um auf die `MediaSession`-API zuzugreifen, verwenden Sie die Eigenschaft {{domxref("navigator.mediaSession")}}.

#### DOM

- Der Konstruktor {{domxref("StaticRange.StaticRange()", "StaticRange()")}} wird jetzt unterstützt ([Firefox-Bug 1575980](https://bugzil.la/1575980)).
- Die MathML-{{domxref("MathMLElement")}}-Schnittstelle wurde implementiert ([Firefox-Bug 1571487](https://bugzil.la/1571487)).

#### Medien, Web Audio und WebRTC

- Die Schnittstelle {{domxref("MediaRecorder")}} implementiert jetzt die Eigenschaften {{domxref("MediaRecorder.audioBitsPerSecond", "audioBitsPerSecond")}} und {{domxref("MediaRecorder.videoBitsPerSecond", "videoBitsPerSecond")}} ([Firefox-Bug 1514158](https://bugzil.la/1514158)).

#### Canvas und WebGL

- Die WebGL-Erweiterungen {{domxref("OVR_multiview2")}} und {{domxref("OES_fbo_render_mipmap")}} sind jetzt standardmäßig freigegeben ([Firefox-Bug 1584277](https://bugzil.la/1584277), [Firefox-Bug 1583878](https://bugzil.la/1583878)).

#### Entfernung

Die folgenden nicht-standardisierten Mitglieder von {{domxref("DataTransfer")}} wurden entfernt ([Firefox-Bug 1345192](https://bugzil.la/1345192)):

- `DataTransfer.mozItemCount`
- `DataTransfer.mozClearDataAt()`
- `DataTransfer.mozGetDataAt()`
- `DataTransfer.mozSetDataAt()`
- `DataTransfer.mozTypesAt()`

### WebDriver-Konformität (Marionette)

- Sowohl die Befehle `WebDriver:TakeScreenshot` als auch `WebDriver:TakeElementScreenshot` wurden aktualisiert, um die Einstellung des Verhaltens bei unbehandelten Aufforderungen zu berücksichtigen ([Firefox-Bug 1584927](https://bugzil.la/1584927)).
- Der Befehl `Marionette:Quit` wurde aktualisiert, um auch das Beenden oder Neustarten anderer Gecko-gesteuerter Anwendungen neben Firefox zu ermöglichen ([Firefox-Bug 1298921](https://bugzil.la/1298921)).
- Für GeckoView-basierte Browser auf Android wird der zurückgegebene `browserName` in den Sitzungsfähigkeiten nun immer `firefox` sein ([Firefox-Bug 1587364](https://bugzil.la/1587364)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("downloads.download")}} identifiziert und meldet nun die folgenden HTTP-Antwortcodes als Fehler:

  - 404 gibt `SERVER_BAD_CONTENT` zurück
  - 403 gibt `SERVER_FORBIDDEN` zurück
  - 402 und Proxy 407 geben `SERVER_UNAUTHORIZED` zurück
  - Alles über 400 gibt `SERVER_FAILED` zurück ([Firefox-Bug 1576333](https://bugzil.la/1576333))

- {{WebExtAPIRef("downloads.download")}} enthält jetzt die optionale Eigenschaft `allowHttpErrors` des `options`-Parameters. Wenn auf `true` gesetzt, ermöglicht dieses `boolean`-Flag das Fortsetzen eines Downloads nach Auftreten eines HTTP-Fehlers. Wenn auf `false` gesetzt, wird ein Download bei Auftreten eines HTTP-Fehlers abgebrochen. Standardwert: `false`. ([Firefox-Bug 1578955](https://bugzil.la/1578955))

#### Entfernung

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden entfernt ([Firefox-Bug 1443259](https://bugzil.la/1443259)). {{WebExtAPIRef("proxy.onRequest")}} sollte jetzt verwendet werden, um die Proxy-Anfragen zu bearbeiten.

## Siehe auch

- Hacks Release-Post: [Firefox 71: Ein Ankunft zum Jahresende](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/)

## Ältere Versionen

{{Firefox_for_developers}}
