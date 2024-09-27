---
title: Firefox 71 für Entwickler
slug: Mozilla/Firefox/Releases/71
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 71, die Entwickler betreffen. Firefox 71 wurde am 3. Dezember 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

[Konsolen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Der [Mehrzeilenmodus](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) der Konsole ist nun standardmäßig verfügbar.
- Konfigurationseinstellungen der Konsole sind nun in einem neuen [Einstellungsmenü der Toolbar](https://firefox-source-docs.mozilla.org/devtools-user/web_console/ui_tour/index.html#toolbar) zusammengeführt ([Firefox Fehler 1523868](https://bugzil.la/1523868)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- Die [Inline-Variablen-Vorschau](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html#inline-variable-preview) wurde aktiviert ([Firefox Fehler 1576679](https://bugzil.la/1576679)).
- [Ereignisprotokollierung](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#logging-on-events) ist jetzt verfügbar ([Firefox Fehler 1110276](https://bugzil.la/1110276)), ebenso wie die Möglichkeit, nach Ereignistyp zu [filtern](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#filter-by-event-type).
- Der neue Debugger-[Pausen-Overlay](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html#pause-on-breakpoints-overlay) kann nun mit der Einstellung `devtools.debugger.features.overlay` deaktiviert werden ([Firefox Fehler 1579768](https://bugzil.la/1579768)).
- Neue [Tastenkombinationen](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html) wurden hinzugefügt, um den Debugger zu öffnen: `Ctrl` + `Shift` + `Z` auf Linux/Windows und `Cmd` + `Opt` + `Z` auf macOS ([Firefox Fehler 1583042](https://bugzil.la/1583042)).
- Beim Pausieren an [DOM-Mutations-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) wird nun der DOM-Knoten erwähnt, der den Breakpoint hat, sowie, falls verfügbar, der hinzugefügte/entfernte Kindknoten ([Firefox Fehler 1576145](https://bugzil.la/1576145)).
- Positionen in [Schön gedruckten Quellen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/pretty-print_a_minified_file/index.html) sind jetzt nach dem Schön­drucken und beim Springen zur Quelle vom Ereignishörer-Tooltip des Inspektors korrekt ([Firefox Fehler 1500222](https://bugzil.la/1500222)).

[Netzwerk Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Der [WebSockets-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1573805](https://bugzil.la/1573805)).
- Es ist nun möglich, eine [Volltextsuche](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#search-in-requests) in Anforderungs-/Antwortkörpern, Headern und Cookies durchzuführen.
- Sie können jetzt Muster eingeben, um das Laden spezifischer URLs zu [blockieren](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls).
- Der [Timings-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#timings) zeigt nun Timing-Daten an, die im {{httpheader("Server-Timing")}}-Header gesendet werden ([Firefox Fehler 1403051](https://bugzil.la/1403051)).

[Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Farbproben werden nun neben CSS-Variablendefinitionen angezeigt, die Farbwerte aufweisen ([Firefox Fehler 1456167](https://bugzil.la/1456167)).
- {{cssxref(":visited")}}-Stile werden jetzt in der CSS-Regelansicht gezeigt ([Firefox Fehler 713106](https://bugzil.la/713106)).

### CSS

- Der Wert [subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) aus CSS Grid Level 2 wurde zu {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} hinzugefügt ([Firefox Fehler 1580894](https://bugzil.la/1580894)).
- Unterstützung für die {{cssxref("column-span")}}-Eigenschaft im [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) wurde hinzugefügt ([Firefox Fehler 1426010](https://bugzil.la/1426010)).
- Unterstützung für den `path()`-Wert von {{cssxref("clip-path")}} wurde hinzugefügt ([Firefox Fehler 1488530](https://bugzil.la/1488530)).
- Die `height`- und `width`-HTML-Attribute im {{htmlelement("img")}}-Element wurden zu einer internen {{cssxref("aspect-ratio")}}-Eigenschaft abgebildet ([Firefox Fehler 1585637](https://bugzil.la/1585637)). [Sehen Sie sich den Leitfaden zu diesem Feature auf MDN an](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images).

#### Entfernungen

- CSS Radialverläufe akzeptieren keine negativen Radien mehr ([Firefox Fehler 1583736](https://bugzil.la/1583736)).

### JavaScript

- Die {{jsxref("Promise.allSettled()")}}-Methode wird jetzt unterstützt ([Firefox Fehler 1549176](https://bugzil.la/1549176)). Diese Methode ermöglicht es Ihnen, einfach zu warten, bis jedes Versprechen in einem Satz von Versprechen entweder erfüllt oder abgelehnt wurde, bevor weiterer Code ausgeführt wird.

#### Entfernungen

- Die nicht-standardmäßigen generischen Array-Methoden wurden in Firefox 71 entfernt ([Firefox Fehler 1222547](https://bugzil.la/1222547)). Sie wurden erstmals in Firefox 1.5 eingeführt und ab Firefox 68 als veraltet markiert. Wenn Ihr Anwendungsfall darin besteht, generische Arrays auf objektsähnlichen Array-Strukturen zu verwenden, können Sie Ihr Objekt mit [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) in ein richtiges Array konvertieren und dann standardmäßige Array-Methoden verwenden.

### MathML

- [MathML-Elemente](/de/docs/Web/MathML/Element) implementieren nun ein MathML DOM und ihre Klasse ist [`MathMLElement`](/de/docs/Web/API/MathMLElement). Mit einem richtigen MathML DOM können Sie nun `mathmlEl.style` oder globale Ereignishand­ler verwenden, zum Beispiel. Vor dieser Änderung implementierten MathML-Elemente nur die Klasse [`Element`](/de/docs/Web/API/Element) ([Firefox Fehler 1571487](https://bugzil.la/1571487)).

### APIs

#### Neue APIs

Die [Media Session API](/de/docs/Web/API/Media_Session_API) ist nun teilweise implementiert. Diese API bietet einen standardisierten Mechanismus, mit dem Ihre Inhalte dem zugrunde liegenden Betriebssystem Informationen über den Zustand der abgespielten Medien mitteilen können. Dazu gehören Metadaten wie Künstler, Album und Titelname sowie möglicherweise Albumcover ([Firefox Fehler 1580602](https://bugzil.la/1580602)).

Die API bietet auch eine Möglichkeit, Benachrichtigungen zu erhalten, wenn die Mediensteuerungen des Geräts (wie Wiedergabe-, Pause- und Suchschaltflächen) vom Benutzer aktiviert werden. Zu diesem Zweck ist die [`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle nun teilweise implementiert und unterstützt die Einstellung und das Abrufen der Metadaten der aktuell abgespielten Medien sowie die Methode [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler). Um auf die `MediaSession`-API zuzugreifen, verwenden Sie die Eigenschaft [`navigator.mediaSession`](/de/docs/Web/API/Navigator/mediaSession).

#### DOM

- Der [`StaticRange()`](/de/docs/Web/API/StaticRange/StaticRange)-Konstruktor wird nun unterstützt ([Firefox Fehler 1575980](https://bugzil.la/1575980)).
- Die MathML-[`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle wurde implementiert ([Firefox Fehler 1571487](https://bugzil.la/1571487)).

#### Medien, Web Audio und WebRTC

- Die [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle implementiert nun die Eigenschaften [`audioBitsPerSecond`](/de/docs/Web/API/MediaRecorder/audioBitsPerSecond) und [`videoBitsPerSecond`](/de/docs/Web/API/MediaRecorder/videoBitsPerSecond) ([Firefox Fehler 1514158](https://bugzil.la/1514158)).

#### Canvas und WebGL

- Die WebGL-Erweiterungen [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2) und [`OES_fbo_render_mipmap`](/de/docs/Web/API/OES_fbo_render_mipmap) sind jetzt standardmäßig verfügbar ([Firefox Fehler 1584277](https://bugzil.la/1584277), [Firefox Fehler 1583878](https://bugzil.la/1583878)).

#### Entfernungen

Die folgenden nicht-standardmäßigen Mitglieder von [`DataTransfer`](/de/docs/Web/API/DataTransfer) wurden entfernt ([Firefox Fehler 1345192](https://bugzil.la/1345192)):

- `DataTransfer.mozItemCount`
- `DataTransfer.mozClearDataAt()`
- `DataTransfer.mozGetDataAt()`
- `DataTransfer.mozSetDataAt()`
- `DataTransfer.mozTypesAt()`

### WebDriver-Konformität (Marionette)

- Sowohl die Befehle `WebDriver:TakeScreenshot` als auch `WebDriver:TakeElementScreenshot` wurden aktualisiert, um die Einstellung des nicht behandelten Prompt-Verhaltens zu respektieren ([Firefox Fehler 1584927](https://bugzil.la/1584927)).
- Der Befehl `Marionette:Quit` wurde so aktualisiert, dass nun auch das Beenden oder Neustarten anderer Gecko-gesteuerter Anwendungen neben Firefox möglich ist ([Firefox Fehler 1298921](https://bugzil.la/1298921)).
- Für GeckoView-basierte Browser auf Android wird der zurückgegebene `browserName` in den Sitzungsfähigkeiten nun immer `firefox` sein ([Firefox Fehler 1587364](https://bugzil.la/1587364)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- {{WebExtAPIRef("downloads.download")}} identifiziert und meldet jetzt als Fehler die folgenden HTTP-Antwortcodes:

  - 404 gibt `SERVER_BAD_CONTENT` zurück
  - 403 gibt `SERVER_FORBIDDEN` zurück
  - 402 und Proxy 407 geben `SERVER_UNAUTHORIZED` zurück
  - Alles andere über 400 gibt `SERVER_FAILED` zurück ([Firefox Fehler 1576333](https://bugzil.la/1576333))

- {{WebExtAPIRef("downloads.download")}} enthält jetzt die optionale `options`-Parameter­eigenschaft `allowHttpErrors`. Wenn auf `true` gesetzt, ermöglicht dieses `boolean`-Flag das Fortsetzen eines Downloads nach Auftreten eines HTTP-Fehlers. Wenn auf `false` gesetzt, wird ein Download beim Auftreten eines HTTP-Fehlers abgebrochen. Standardwert: `false`. ([Firefox Fehler 1578955](https://bugzil.la/1578955))

#### Entfernungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden entfernt ([Firefox Fehler 1443259](https://bugzil.la/1443259)). {{WebExtAPIRef("proxy.onRequest")}} sollte nun verwendet werden, um die Proxying von Anfragen zu verwalten.

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 71: A year-end arrival](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/)

## Ältere Versionen

{{Firefox_for_developers}}
