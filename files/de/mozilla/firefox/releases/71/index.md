---
title: Firefox 71 Versionshinweise für Entwickler
short-title: Firefox 71
slug: Mozilla/Firefox/Releases/71
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 71, die Entwickler betreffen werden. Firefox 71 wurde am 3. Dezember 2019 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

[Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Der [Mehrzeilenmodus der Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) ist jetzt standardmäßig verfügbar.
- Die Konfigurationseinstellungen der Konsole sind jetzt in einem neuen [Werkzeugleisten-Einstellungsmenü](https://firefox-source-docs.mozilla.org/devtools-user/web_console/ui_tour/index.html#toolbar) kombiniert ([Firefox-Bug 1523868](https://bugzil.la/1523868)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- Die [Vorschau von Inline-Variablen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html#inline-variable-preview) ist jetzt aktiviert ([Firefox-Bug 1576679](https://bugzil.la/1576679)).
- [Protokollierung bei Ereignissen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#logging-on-events) ist jetzt verfügbar ([Firefox-Bug 1110276](https://bugzil.la/1110276)), ebenso wie die Fähigkeit, [nach Ereignistyp zu filtern](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#filter-by-event-type).
- Die neue Debugger-[Pausenüberlagerung](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html#pause-on-breakpoints-overlay) kann jetzt mithilfe der Einstellung `devtools.debugger.features.overlay` deaktiviert werden ([Firefox-Bug 1579768](https://bugzil.la/1579768)).
- Neue [Tastaturkürzel](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html) für das Öffnen des Debuggers: `Ctrl` + `Shift` + `Z` auf Linux/Windows und `Cmd` + `Opt` + `Z` auf macOS ([Firefox-Bug 1583042](https://bugzil.la/1583042)).
- Beim Anhalten an einem [DOM-Mutations-Breakpoint](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) wird jetzt der DOM-Knoten erwähnt, der den Breakpoint hat, und, falls verfügbar, der Kindknoten, der hinzugefügt/entfernt wurde ([Firefox-Bug 1576145](https://bugzil.la/1576145)).
- Positionen in [schön gedruckten Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/pretty-print_a_minified_file/index.html) sind jetzt nach dem Schön-Drucken und beim Springen zur Quelle vom [Tooltip des Ereignis-Listeners](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html) des Inspektors korrekt ([Firefox-Bug 1500222](https://bugzil.la/1500222)).

[Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Der [Web-Sockets-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1573805](https://bugzil.la/1573805)).
- Sie können jetzt eine [Volltextsuche](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#search-in-requests) von Anfrage-/Antwortkörpern, Headern und Cookies durchführen.
- Sie können jetzt Muster eingeben, um [bestimmte URLs zu blockieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls).
- Der [Zeitplan-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#timings) zeigt jetzt Zeitdaten an, die im {{httpheader("Server-Timing")}}-Header gesendet werden ([Firefox-Bug 1403051](https://bugzil.la/1403051)).

[Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Farbproben werden jetzt neben CSS-Variablendefinitionen angezeigt, die Farbwerte haben ([Firefox-Bug 1456167](https://bugzil.la/1456167)).
- {{cssxref(":visited")}}-Stile werden jetzt in der CSS-Regelnansicht angezeigt ([Firefox-Bug 713106](https://bugzil.la/713106)).

### CSS

- Der [Subgrid-Wert](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) von CSS Grid Level 2 wurde zu {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} hinzugefügt ([Firefox-Bug 1580894](https://bugzil.la/1580894)).
- Unterstützung für die {{cssxref("column-span")}}-Eigenschaft im [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) hinzugefügt ([Firefox-Bug 1426010](https://bugzil.la/1426010)).
- Unterstützung für den `path()`-Wert von {{cssxref("clip-path")}} hinzugefügt ([Firefox-Bug 1488530](https://bugzil.la/1488530)).
- Die `height`- und `width`-HTML-Attribute auf dem {{htmlelement("img")}}-Element werden einer internen {{cssxref("aspect-ratio")}}-Eigenschaft zugeordnet ([Firefox-Bug 1585637](https://bugzil.la/1585637)). [Sehen Sie den Leitfaden zu dieser Funktion auf MDN](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images).

#### Entfernungen

- CSS Radialverläufe akzeptieren keine negativen Radien mehr ([Firefox-Bug 1583736](https://bugzil.la/1583736)).

### JavaScript

- Die {{jsxref("Promise.allSettled()")}}-Methode wird jetzt unterstützt ([Firefox-Bug 1549176](https://bugzil.la/1549176)). Diese Methode ermöglicht es Ihnen, einfach darauf zu warten, dass jedes Promise in einem Set von Promises entweder erfüllt oder abgelehnt wird, bevor weiterer Code ausgeführt wird.

#### Entfernungen

- Die nicht standardmäßigen Array generischen Methoden wurden in Firefox 71 entfernt ([Firefox-Bug 1222547](https://bugzil.la/1222547)). Sie wurden erstmals in Firefox 1.5 eingeführt und ab Firefox 68 veraltet. Wenn Ihr Anwendungsfall darin besteht, Array-Generika auf array-ähnlichen Objekten zu verwenden, können Sie Ihr Objekt mit [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) in ein richtiges Array umwandeln und dann Standard-Array-Methoden verwenden.

### MathML

- [MathML-Elemente](/de/docs/Web/MathML/Reference/Element) implementieren jetzt ein MathML-DOM und deren Klasse ist [`MathMLElement`](/de/docs/Web/API/MathMLElement). Mit einem ordnungsgemäßen MathML-DOM können Sie jetzt beispielsweise `mathmlEl.style` oder globale Ereignishandler verwenden. Vor dieser Änderung implementierten MathML-Elemente nur die [`Element`](/de/docs/Web/API/Element)-Klasse ([Firefox-Bug 1571487](https://bugzil.la/1571487)).

### APIs

#### Neue APIs

Die [Media Session API](/de/docs/Web/API/Media_Session_API) ist jetzt teilweise implementiert. Diese API bietet einen standardisierten Mechanismus, damit Ihre Inhalte dem zugrunde liegenden Betriebssystem Informationen über den Status der Medien, die abgespielt werden, mitteilen können. Dazu gehören Metadaten wie Künstler, Album und Trackname sowie eventuell Albumcover ([Firefox-Bug 1580602](https://bugzil.la/1580602)).

Die API bietet auch eine Möglichkeit, Benachrichtigungen zu erhalten, wenn die Mediensteuerungen des Geräts (wie Wiedergabe-, Pause- und Suchknöpfe) vom Benutzer aktiviert werden. Zu diesem Zweck ist die [`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle jetzt teilweise implementiert, mit Unterstützung für das Setzen und Abrufen der Metadaten der aktuell abgespielten Medien und für die Methode [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler). Um auf die `MediaSession`-API zuzugreifen, nutzen Sie die [`navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession)-Eigenschaft.

#### DOM

- Der [`StaticRange()`](/de/docs/Web/API/StaticRange/StaticRange)-Konstruktor wird jetzt unterstützt ([Firefox-Bug 1575980](https://bugzil.la/1575980)).
- Die MathML [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle wurde implementiert ([Firefox-Bug 1571487](https://bugzil.la/1571487)).

#### Medien, Web Audio und WebRTC

- Die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle implementiert jetzt die Eigenschaften [`audioBitsPerSecond`](/de/docs/Web/API/MediaRecorder/audioBitsPerSecond) und [`videoBitsPerSecond`](/de/docs/Web/API/MediaRecorder/videoBitsPerSecond) ([Firefox-Bug 1514158](https://bugzil.la/1514158)).

#### Canvas und WebGL

- Die WebGL-Erweiterungen [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2) und [`OES_fbo_render_mipmap`](/de/docs/Web/API/OES_fbo_render_mipmap) werden jetzt standardmäßig angezeigt ([Firefox-Bug 1584277](https://bugzil.la/1584277), [Firefox-Bug 1583878](https://bugzil.la/1583878)).

#### Entfernungen

Die folgenden nicht standardmäßigen [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Mitglieder wurden entfernt ([Firefox-Bug 1345192](https://bugzil.la/1345192)):

- `DataTransfer.mozItemCount`
- `DataTransfer.mozClearDataAt()`
- `DataTransfer.mozGetDataAt()`
- `DataTransfer.mozSetDataAt()`
- `DataTransfer.mozTypesAt()`

### WebDriver-Konformität (Marionette)

- Sowohl die `WebDriver:TakeScreenshot`- als auch die `WebDriver:TakeElementScreenshot`-Befehle wurden aktualisiert, um die Einstellung des Verhaltens unbehandelter Eingabeaufforderungen zu beachten ([Firefox-Bug 1584927](https://bugzil.la/1584927)).
- Der Befehl `Marionette:Quit` wurde aktualisiert, um auch das Beenden oder Neustarten anderer Gecko-gesteuerter Anwendungen neben Firefox zu ermöglichen ([Firefox-Bug 1298921](https://bugzil.la/1298921)).
- Für GeckoView-basierte Browser auf Android wird der zurückgegebene `browserName` in den Sitzungsfähigkeiten jetzt immer `firefox` sein ([Firefox-Bug 1587364](https://bugzil.la/1587364)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("downloads.download")}} identifiziert und meldet jetzt die folgenden HTTP-Antwortcodes als Fehler:
  - 404 mit Rückgabe `SERVER_BAD_CONTENT`
  - 403 mit Rückgabe `SERVER_FORBIDDEN`
  - 402 und Proxy 407 mit Rückgabe `SERVER_UNAUTHORIZED`
  - Alles andere über 400 mit Rückgabe `SERVER_FAILED` ([Firefox-Bug 1576333](https://bugzil.la/1576333))

- {{WebExtAPIRef("downloads.download")}} enthält jetzt die optionale `options`-Parameter-Eigenschaft `allowHttpErrors`. Wenn `true` festgelegt ist, ermöglicht dieser `boolean`-Schalter das Fortsetzen eines Downloads nach einem HTTP-Fehler. Wenn `false` festgelegt ist, wird ein Download abgebrochen, wenn ein HTTP-Fehler auftritt. Standardwert: `false`. ([Firefox-Bug 1578955](https://bugzil.la/1578955))

#### Entfernungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden entfernt ([Firefox-Bug 1443259](https://bugzil.la/1443259)). {{WebExtAPIRef("proxy.onRequest")}} sollte jetzt verwendet werden, um die Weiterleitung von Anfragen zu verwalten.

## Siehe auch

- Hacks Release-Beitrag: [Firefox 71: Eine Ankunft zum Jahresende](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/)
