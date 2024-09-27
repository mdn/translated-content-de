---
title: Firefox 69 für Entwickler
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 69, die Entwickler betreffen. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen, zu diagnostizieren, welchen Code eine Seite als Reaktion auf Browserevents ausführt. Sie können spezifische Typen wie `click` oder `keydown` auswählen oder ganze Kategorien von Events, wie alle Maus-Input-Events. ([Firefox-Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Source-List-Panel](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können nun über die Kontextmenüoption _Datei herunterladen_ gespeichert werden ([Firefox-Bug 888161](https://bugzil.la/888161)).
- Im Source-List-Panel des Debuggers werden geladene Erweiterungen nun mit ihrem Namen anstelle nur ihrer [UUID](/de/docs/Glossary/UUID) aufgelistet ([Firefox-Bug 1486416](https://bugzil.la/1486416)), was es deutlich einfacher macht, den zu debuggenden Erweiterungscode zu finden.
- Der Debugger lädt jetzt durch Lazy-Loading von Skripten erheblich schneller ([Firefox-Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- [Browserkonsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) Nachrichten von [Tracking-Schutz-Fehlern](/de/docs/Web/Privacy/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/CORS/Errors) werden automatisch gruppiert, um Störungen durch wiederholt blockierte Ressourcen und Speicherzugriffe zu reduzieren ([Firefox-Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Logs in der Konsole können durch Speichern in eine Datei oder Kopieren in die Zwischenablage über einen neuen _Sichtbare Nachrichten exportieren nach_ Kontextmenüpunkt geteilt werden ([Firefox-Bug 1517728](https://bugzil.la/1517728)).
- Die Werkzeugleiste der Konsole reduziert nun responsiv ihre Höhe auf eine einzige Zeile, um vertikalen Platz zu sparen ([Firefox-Bug 972530](https://bugzil.la/972530)).
- Nachrichten aus Inhalten können nun in der Konsole ausgeblendet werden, um sich auf Logs aus der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox-Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/CSP) oder [Mixed Content](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden nun im Netzwerk-Panel angezeigt, mit Details über den Grund ([Firefox-Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox-Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie über ein Element im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) fahren, zeigt die Infobar, die erscheint, nun an, ob ein Element ein Flex-Container oder Flex-Item ist ([Firefox-Bug 1521188](https://bugzil.la/1521188)).
- Beim Untersuchen einer Seite mit einem Raster mit einem Unterraster werden die Überlagerungslinien des übergeordneten Rasters immer angezeigt, wenn die Linien des Unterrasters angezeigt werden; wenn das Kontrollkästchen des übergeordneten Rasters nicht ausgewählt ist, sind dessen Linien durchsichtig ([Firefox-Bug 1550519](https://bugzil.la/1550519)).

#### Remote-Debugging

- Für unsere mobilen Webentwickler haben wir das Remote-Debugging von der alten WebIDE in eine neu gestaltete [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, was die Erfahrung beim Debuggen von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB erheblich verbessert ([Firefox-Bug 1462208](https://bugzil.la/1462208)).

#### Allgemeines

- Die Reihenfolge der DevTools-Panels wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox-Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich näher an die Spezifikation anzunähern, wird die Textspur, die mit einem {{HTMLElement("track")}}-Element verknüpft ist, nun nicht mehr geladen, wenn das Element im standardmäßigen `disabled`-[`mode`](/de/docs/Web/API/TextTrack/mode) erstellt wird. Um auf die Cues zuzugreifen oder diese zu manipulieren, wenn der `mode` auf `disabled` steht, ändern Sie den `mode` entweder auf `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox-Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML-`<keygen>`-Element wurde aus Firefox entfernt. Es war schon seit einiger Zeit als veraltet markiert, und seine Funktion wurde weitgehend durch andere Technologien ersetzt ([Firefox-Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces`-Wert der {{cssxref("white-space")}}-Eigenschaft implementiert ([Firefox-Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können jetzt auch als CSS-Eigenschaften definiert werden ([Firefox-Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}}-Selektor — verwendet, um die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigten Untertitel ("Cues") zu stylen — erzwingt jetzt die Einschränkungen, welche CSS-Eigenschaften innerhalb von Cues verwendet werden dürfen, gemäß der Spezifikation ([Firefox-Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften eingeschränkt, die auf {{cssxref("::marker")}} angewendet werden dürfen, gemäß der Spezifikation ([Firefox-Bug 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}}- und {{cssxref("overflow-inline")}}-Eigenschaften wurden implementiert ([Firefox-Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, Unterstützung für einen Selektor bei Verwendung von CSS-Feature-Abfragen ({{cssxref("@supports")}}) mit der `selector()`-Methode zu testen ([Firefox-Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}}-Eigenschaft — die festlegt, ob der Benutzer den Text im betroffenen Element auswählen kann oder nicht — wurde unprefixed ([Firefox-Bug 1492739](https://bugzil.la/1492739)).
- Wir haben lokalspezifisches Verhalten zur Schreibweise für Litauisch implementiert ([Firefox-Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel gezeigt](/de/docs/Web/CSS/text-transform#lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}}-Eigenschaft von CSS Text implementiert ([Firefox-Bug 1011369](https://bugzil.la/1011369) und [Firefox-Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}}-Eigenschaft — die es Entwicklern ermöglicht, zu definieren, dass ein Element und sein Inhalt weitgehend unabhängig vom Rest des DOM-Baums sind — wurde implementiert ([Firefox-Bug 1487493](https://bugzil.la/1487493)).

### SVG

- Wir haben Unterstützung für gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox-Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox-Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox-Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Ereignisse zur Behandlung abgelehnter Versprechen [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise-Rejection-Ereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Platzhalterwert "`*`" für Anfragen ohne Anmeldedaten ([Firefox-Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch auf Firefox 68 ESR übertragen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox-Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox-Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden nun in Workern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Die `pageX`- und `pageY`-Eigenschaften wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um die Spezifikationskonformität zu verbessern ([Firefox-Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht mehr in den [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) Schnittstellen bereitgestellt, die alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind jetzt implementiert ([Firefox-Bug 1557121](https://bugzil.la/1557121)).
- [`DOMMatrix.fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix) wurde implementiert ([Firefox-Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die sechsparmetrige Version der [`DOMMatrix.scale()`](/de/docs/Web/API/DOMMatrix/scale) Methode ([Firefox-Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrix.translate()`](/de/docs/Web/API/DOMMatrix/translate), [`DOMMatrix.skewX()`](/de/docs/Web/API/DOMMatrix/skewX) und [`DOMMatrix.skewY()`](/de/docs/Web/API/DOMMatrix/skewY) sind jetzt alle optional, gemäß der Spezifikation ([Firefox-Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) geben nicht mehr preis, ob ein Benutzer eine 32-Bit-Firefox-Version auf einem 64-Bit-Betriebssystem verwendet ([Firefox-Bug 1559747](https://bugzil.la/1559747)). Sie geben jetzt `Linux x86_64` statt `Linux i686 on x86_64` und `Win64` statt `WOW64` aus.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden auf [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keinen nennenswerten Einfluss auf Ihre Arbeit haben. Insbesondere wurden die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) verschoben. Auch die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedener Eigenschaften ([Firefox-Bug 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox-Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Zum besseren Schutz der Benutzersicherheit und in Übereinstimmung mit den neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) Spezifikation ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und dergleichen zu verwenden, stellen Sie sicher, dass Ihre Inhalte über [HTTPS](/de/docs/Glossary/HTTPS) geladen werden ([Firefox-Bug 1528031](https://bugzil.la/1528031)).
- Die `value`-Eigenschaft der Web Audio API's [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) gibt nun den tatsächlichen Wert der Eigenschaft zur aktuellen Zeit zurück, wobei alle geplanten oder abgestuften Wertänderungen berücksichtigt werden. Bisher gab Firefox nur den letzten explizit gesetzten Wert (zum Beispiel durch den `value`-Setter) zurück ([Firefox-Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue lexikographische Reihenfolge für Tracks zu verwenden. Zuvor war die Track-Reihenfolge dem einzelnen Browser überlassen und konnte sich sogar willkürlich ändern. Außerdem wird beim Versuch, eine `MediaStreamAudioSourceNode` mit einem Stream ohne Audio-Tracks zu erstellen, jetzt eine `InvalidStateError`-Ausnahme ausgelöst ([Firefox-Bug 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) werden nun als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Objekts eingeschlossen, das durch Aufrufe von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox-Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode [`DOMMatrix.scaleNonUniformSelf()`](/de/docs/Web/API/DOMMatrix/scaleNonUniformSelf) wurde entfernt ([Firefox-Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Andere

- Marionette handhabt jetzt dynamisch das Öffnen und Schließen von Modaldialogen und Benutzereingabeaufforderungen ([Firefox-Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere offene Eingabeaufforderungen bearbeitet werden ([Firefox-Bug 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Push-Funktionen sind standardmäßig deaktiviert, um die Entfernung von DOM-Teilen und zusätzliche Benachrichtigungen zu vermeiden ([Firefox-Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrundtabs, wenn Firefox auf einen niedrigen Speicherzustand trifft, ist jetzt deaktiviert — dies interagiert schlecht mit Automatisierung beim Wechseln zwischen Tabs ([Firefox-Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hat jetzt neue Optionen verfügbar — `includePinned` und `includeSearchShortcuts` ([Firefox-Bug 1547669](https://bugzil.la/1547669)).

### Andere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen außer denen, die auf eine weiße Liste gesetzt wurden, zu sperren ([Firefox-Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 69 — eine Geschichte von Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## Ältere Versionen

{{Firefox_for_developers}}
