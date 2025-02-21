---
title: Firefox 69 für Entwickler
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 69, die Entwickler betreffen werden. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- Mit [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) können Sie feststellen, welcher Code von einer Seite in Reaktion auf Browserevents ausgeführt wird. Sie können spezifische Typen auswählen, wie `click` oder `keydown`, oder ganze Kategorien von Events, wie alle Maus-Eingabeevents. ([Firefox-Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Quelllistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können jetzt über die Kontextmenüoption _Datei herunterladen_ gespeichert werden ([Firefox-Bug 888161](https://bugzil.la/888161)).
- Geladene Erweiterungen werden im Quelllistenbereich des Debuggers mit ihrem Namen anstelle nur ihrer {{Glossary("UUID", "UUID")}} aufgelistet ([Firefox-Bug 1486416](https://bugzil.la/1486416)), was das Auffinden des zu debuggenden Erweiterungscodes erleichtert.
- Der Debugger lädt jetzt deutlich schneller durch Lazy Loading von Skripten ([Firefox-Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- Nachrichten von [Tracking-Schutz-Fehlern](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/CORS/Errors) werden in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) automatisch gruppiert, um die Störung durch wiederholt blockierte Ressourcen und Speicherzugriffe zu reduzieren ([Firefox-Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können durch das Speichern in eine Datei oder das Kopieren in die Zwischenablage über einen neuen Kontextmenüeintrag _Exportiere sichtbare Nachrichten nach_ geteilt werden ([Firefox-Bug 1517728](https://bugzil.la/1517728)).
- Die Werkzeugleiste der Konsole reduziert nun ihre Höhe responsiv in eine einzelne Zeile, um vertikalen Platz zu sparen ([Firefox-Bug 972530](https://bugzil.la/972530)).
- Nachrichten aus dem Inhalt können nun in der Konsole ausgeblendet werden, um sich auf Protokolle aus der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox-Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die wegen [CSP](/de/docs/Web/HTTP/CSP) oder [Mixed Content](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden jetzt im Netzwerk-Panel angezeigt, mit Details zu den Gründen ([Firefox-Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox-Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie in den [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) über ein Element fahren, wird in der Infobar nun auch angezeigt, dass ein Element ein Flex-Container oder Flex-Item ist ([Firefox-Bug 1521188](https://bugzil.la/1521188)).
- Beim Untersuchen einer Seite, die ein Raster mit einem Subgrid enthält, werden die Overlay-Linien des übergeordneten Gitters angezeigt, wann immer die Linien des Subgrids angezeigt werden; wenn das Kontrollkästchen des übergeordneten Rasters nicht ausgewählt ist, sind dessen Linien durchscheinend ([Firefox-Bug 1550519](https://bugzil.la/1550519)).

#### Fern-Debugging

- Für unsere mobilen Webentwickler haben wir das Fern-Debugging vom alten WebIDE in ein neu gestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, was das Debugging von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB deutlich verbessert ([Firefox-Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der DevTools-Panel wurde basierend auf ihrer Beliebtheit geändert ([Firefox-Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich stärker an die Spezifikation anzupassen, lädt der mit einem {{HTMLElement("track")}}-Element assoziierte Texttrack die WebVTT-Datei mit den Text-Hinweisen nicht mehr, wenn das Element im Standard-`disabled`-[`mode`](/de/docs/Web/API/TextTrack/mode) erstellt wird. Um auf die Hinweise zuzugreifen oder sie zu manipulieren, wenn der `mode` `disabled` ist, ändern Sie den `mode` auf `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox-Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML-`<keygen>`-Element wurde aus Firefox entfernt. Es wurde vor einiger Zeit als veraltet erklärt, und seine Funktionalität wird allgemein durch andere Technologien ersetzt ([Firefox-Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces`-Wert der {{cssxref("white-space")}}-Eigenschaft implementiert ([Firefox-Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können jetzt auch als CSS-Eigenschaften definiert werden ([Firefox-Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}}-Selektor — verwendet, um die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigten Beschriftungen ("Cues") zu stylen — setzt nun die Einschränkungen durch, welche CSS-Eigenschaften innerhalb von Cues verwendet werden dürfen, gemäß der Spezifikation ([Firefox-Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften eingeschränkt, die auf {{cssxref("::marker")}} angewendet werden dürfen, gemäß der Spezifikation ([Firefox-Bug 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}}- und {{cssxref("overflow-inline")}}-Eigenschaften wurden implementiert ([Firefox-Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, die Unterstützung eines Selektors beim Verwenden von CSS-Feature-Queries ({{cssxref("@supports")}}) mit der Methode `selector()` zu testen ([Firefox-Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}}-Eigenschaft — die festlegt, ob der Benutzer in der Lage ist, Text im betroffenen Element auszuwählen oder nicht — wurde unverändert (unprefixed) übernommen ([Firefox-Bug 1492739](https://bugzil.la/1492739)).
- Wir haben lokalspezifisches Fallunterscheidungsverhalten für Litauisch implementiert ([Firefox-Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel zu sehen](/de/docs/Web/CSS/text-transform#lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}}-Eigenschaft von CSS Text implementiert ([Firefox-Bug 1011369](https://bugzil.la/1011369) und [Firefox-Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}}-Eigenschaft — die es Entwicklern erlaubt, zu definieren, dass ein Element und seine Inhalte weitgehend unabhängig vom restlichen DOM-Baum sind — wurde implementiert ([Firefox-Bug 1487493](https://bugzil.la/1487493)).

### SVG

- Wir haben Unterstützung für gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox-Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox-Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Public class fields](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox-Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Class fields](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Promise-Zurückweisungsereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind nun standardmäßig aktiviert ([Firefox-Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise rejection events](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Platzhalterwert "`*`" für Anfragen ohne Anmeldeinformationen ([Firefox-Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch in Firefox 68 ESR übernommen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox-Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox-Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden jetzt in Workern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Die Eigenschaften `pageX` und `pageY` wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um besser mit der Spezifikation übereinzustimmen ([Firefox-Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht mehr für die [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) Schnittstellen bereitgestellt, die alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind nun implementiert ([Firefox-Bug 1557121](https://bugzil.la/1557121)).
- [`DOMMatrixReadOnly.fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix) wurde implementiert ([Firefox-Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die Version mit sechs Parametern der Methode [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) ([Firefox-Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX) und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind jetzt alle optional, wie in der Spezifikation festgelegt ([Firefox-Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) offenbaren nicht mehr, ob ein Benutzer 32-Bit-Firefox auf einem 64-Bit-Betriebssystem verwendet ([Firefox-Bug 1559747](https://bugzil.la/1559747)). Sie geben jetzt `Linux x86_64` anstelle von `Linux i686 on x86_64` und `Win64` anstelle von `WOW64` aus.
- Die restlichen Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden nach [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine nennenswerten Auswirkungen auf Ihre Arbeit haben. Insbesondere wurden die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) verschoben. Auch die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedene Eigenschaften ([Firefox-Bug 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox-Bug 1444847](https://bugzil.la/1444847)).

#### Media, Web Audio und WebRTC

- Zur Verbesserung der Benutzersicherheit und im Einklang mit den neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) Spezifikation ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und ähnliche Funktionen zu nutzen, stellen Sie sicher, dass Ihre Inhalte über {{Glossary("HTTPS", "HTTPS")}} geladen werden ([Firefox-Bug 1528031](https://bugzil.la/1528031)).
- Die [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) Eigenschaft der Web Audio API gibt jetzt den tatsächlichen Wert der Eigenschaft zur aktuellen Zeit zurück, unter Berücksichtigung aller geplanten oder abgestuften Wertänderungen. Zuvor gab Firefox nur den zuletzt explizit gesetzten Wert zurück (wie durch Verwendung des `value`-Setzers) ([Firefox-Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue, lexikale, Reihenfolge für Tracks zu verwenden. Zuvor war die Track-Reihenfolge dem individuellen Browser überlassen und konnte sogar beliebig ändern. Zudem wirft der Versuch, einen `MediaStreamAudioSourceNode` mit einem Stream ohne Audiotracks zu erstellen, jetzt eine `InvalidStateError`-Ausnahme ([Firefox-Bug 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) sind jetzt als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Objekts enthalten, das durch Aufrufe von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox-Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox-Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Sonstiges

- Marionette handhabt nun das Öffnen und Schließen von modalen Dialogen und Benutzeraufforderungen dynamisch ([Firefox-Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere geöffnete Aufforderungen gehandhabt werden ([Firefox-Bug 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Push-Funktionen sind jetzt standardmäßig deaktiviert, um das Entfernen von Teilen des DOM und zusätzliche Benachrichtigungen zu vermeiden ([Firefox-Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrund-Tabs, wenn Firefox in einen Zustand mit wenig Speicher gerät, ist jetzt deaktiviert — dies interagiert schlecht mit der Automatisierung, wenn zwischen Tabs gewechselt wird ([Firefox-Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist nun standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hat jetzt neue verfügbare Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox-Bug 1547669](https://bugzil.la/1547669)).

### Weitere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen auf die schwarze Liste zu setzen, außer denen, die auf die weiße Liste gesetzt wurden ([Firefox-Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks Release Beitrag: [Firefox 69 — a tale of Resize Observer, microtasks, CSS, and DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## Ältere Versionen

{{Firefox_for_developers}}
