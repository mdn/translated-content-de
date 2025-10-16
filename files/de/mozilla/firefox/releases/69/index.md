---
title: Firefox 69 Versionshinweise für Entwickler
short-title: Firefox 69
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 69, die Entwickler betreffen werden. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger

- [Event-Listener-Breakpoint](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen zu diagnostizieren, welche Code eine Seite als Reaktion auf Browserevents ausführt. Sie können spezifische Typen wie `click` oder `keydown` auswählen oder ganze Kategorien von Events, wie alle Mausklickereignisse. ([Firefox-Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können jetzt über die Option _Datei herunterladen_ im Kontextmenü gespeichert werden ([Firefox-Bug 888161](https://bugzil.la/888161)).
- Im Quellenlistenbereich des Debuggers werden geladene Erweiterungen mit ihrem Namen anstatt nur mit ihrem {{Glossary("UUID", "UUID")}} aufgelistet ([Firefox-Bug 1486416](https://bugzil.la/1486416)), was es wesentlich einfacher macht, den zu debuggenden Erweiterungscode zu finden.
- Der Debugger lädt nun signifikant schneller durch Lazy-Loading-Skripte ([Firefox-Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- [Browserkonsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html)-Nachrichten von [Tracking-Schutzfehlern](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert, um Rauschen durch wiederholte blockierte Ressourcen und Speicherzugriffe zu reduzieren ([Firefox-Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können durch Speichern in eine Datei oder Kopieren in die Zwischenablage über ein neues Kontextmenüelement _Sichtbare Nachrichten exportieren nach_ geteilt werden ([Firefox-Bug 1517728](https://bugzil.la/1517728)).
- Die Symbolleiste der Konsole reduziert nun responsiv ihre Höhe zu einer einzelnen Zeile, um vertikalen Platz zu sparen ([Firefox-Bug 972530](https://bugzil.la/972530)).
- Nachrichten von Inhalten können nun in der Konsole verborgen werden, um sich auf Protokolle der Firefox-UI zu konzentrieren ([Firefox-Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Mixed Content](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden nun im Netzwerkpanel angezeigt, mit Details zum Grund ([Firefox-Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerkpanel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox-Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie über ein Element im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) schweben, enthält die angezeigte Infobar nun die Information, dass ein Element ein Flex-Container oder Flex-Item ist ([Firefox-Bug 1521188](https://bugzil.la/1521188)).
- Beim Inspizieren einer Seite, die ein Gitter mit einem Subgrid enthält, werden die Overlay-Linien des übergeordneten Grids angezeigt, wenn die Linien des Subgrids angezeigt werden; wenn das Overlay-Kontrollkästchen des übergeordneten Grids nicht ausgewählt ist, sind seine Linien transluzent ([Firefox-Bug 1550519](https://bugzil.la/1550519)).

#### Remote-Debugging

- Für unsere mobilen Webentwickler haben wir das Remote-Debugging von der alten WebIDE in ein neu gestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert und das Debugging-Erlebnis von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB erheblich verbessert ([Firefox-Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der DevTools-Panel wurde geändert, um ihre Beliebtheit widerzuspiegeln ([Firefox-Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich enger an die Spezifikation anzupassen, lädt der mit einem {{HTMLElement("track")}}-Element verknüpfte Text-Track die WebVTT-Datei mit den Text-Hinweisen nicht mehr, wenn das Element im Standard-`disabled`-[`mode`](/de/docs/Web/API/TextTrack/mode) erstellt wird. Um auf die Hinweise zuzugreifen oder sie zu manipulieren, wenn der `mode` `disabled` ist, ändern Sie den `mode` auf `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox-Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML-`<keygen>`-Element wurde aus Firefox entfernt. Es wurde vor einiger Zeit depreziert und seine Funktion wird im Allgemeinen von anderen Technologien übernommen ([Firefox-Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces`-Wert der {{cssxref("white-space")}}-Eigenschaft implementiert ([Firefox-Bug 1351432](https://bugzil.la/1351432)).
- Die Geometrieattribute von SVG (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können nun auch als CSS-Eigenschaften definiert werden ([Firefox-Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}}-Selektor — verwendet, um die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigten Bildunterschriften ("cues") zu gestalten — erzwingt nun die Einschränkungen, welche CSS-Eigenschaften innerhalb von Cues verwendet werden können, gemäß der Spezifikation ([Firefox-Bug 1321488](https://bugzil.la/1321488)).
- Wir haben gemäß der Spezifikation die Eigenschaften eingeschränkt, die auf {{cssxref("::marker")}} anwendbar sind ([Firefox-Bug 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}} und {{cssxref("overflow-inline")}} Eigenschaften wurden implementiert ([Firefox-Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, die Unterstützung eines Selektors bei der Verwendung von CSS-Feature Queries ({{cssxref("@supports")}}) mit der `selector()`-Methode zu testen ([Firefox-Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}}-Eigenschaft — die angibt, ob der Benutzer in der Lage ist, Text im betroffenen Element auszuwählen — wurde ohne Präfix implementiert ([Firefox-Bug 1492739](https://bugzil.la/1492739)).
- Wir haben das lokalspezifische Groß-/Kleinschreibverhalten für Litauisch implementiert ([Firefox-Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel zu sehen ist](/de/docs/Web/CSS/text-transform#example_using_lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}}-Eigenschaft des CSS-Text implementiert ([Firefox-Bug 1011369](https://bugzil.la/1011369) und [Firefox-Bug 1531715](https://bugzil.la/1531715)).
- Die Eigenschaft {{cssxref("contain")}} — die es Entwicklern ermöglicht zu definieren, dass ein Element und seine Inhalte größtenteils vom Rest des DOM-Baums unabhängig sind — wurde implementiert [Firefox-Bug 1487493](https://bugzil.la/1487493).

### SVG

- Wir haben Unterstützung für gzip-komprimierten SVG-in-OpenType hinzugefügt ([Firefox-Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox-Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox-Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Promise-Zurückweisungsevents [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise-Zurückweisungsevents](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Platzhalterwert `*` für Anfragen ohne Anmeldedaten ([Firefox-Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch auf Firefox 68 ESR angewendet.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox-Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox-Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden jetzt in Workern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Die `pageX` und `pageY` Eigenschaften wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um die Spezifikation besser einzuhalten ([Firefox-Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften sind nicht mehr in den Schnittstellen [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) verfügbar, die alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind jetzt implementiert ([Firefox-Bug 1557121](https://bugzil.la/1557121)).
- `DOMMatrixReadOnly.fromMatrix()` wurde implementiert ([Firefox-Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen nun die sechs-Parameter-Version der [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)-Methode ([Firefox-Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX) und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind nun alle optional, gemäß der Spezifikation ([Firefox-Bug 1397949](https://bugzil.la/1397949)).
- Die [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) Eigenschaften enthüllen nicht mehr, ob ein Benutzer eine 32-Bit-Version von Firefox auf einem 64-Bit-Betriebssystem verwendet ([Firefox-Bug 1559747](https://bugzil.la/1559747)). Sie geben nun `Linux x86_64` anstatt `Linux i686 on x86_64`, und `Win64` anstatt `WOW64` an.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden zu [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine wesentliche Auswirkung auf Ihre Arbeit haben. Insbesondere die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) wurden verschoben. Ebenso die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedene Eigenschaften ([Firefox-Bug 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox-Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Zur verbesserten Benutzersicherheit und im Einklang mit den neuesten Versionen der Spezifikation [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) ist die Eigenschaft [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) usw. zu verwenden, stellen Sie sicher, dass Ihre Inhalte über {{Glossary("HTTPS", "HTTPS")}} geladen werden ([Firefox-Bug 1528031](https://bugzil.la/1528031)).
- Die `value`-Eigenschaft der Web-Audio-API [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) gibt jetzt den tatsächlichen Wert der Eigenschaft zu der aktuellen Zeit unter Berücksichtigung aller geplanten oder abgestuften Wertänderungen zurück. Bisher gab Firefox nur den zuletzt explizit gesetzten Wert zurück (wie bei der Verwendung des `value`-Setzers) ([Firefox-Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue, lexikografische Anordnung für Tracks zu verwenden. Bisher lag die Sortierung der Tracks im Ermessen des Browsers und konnte sich sogar willkürlich ändern. Darüber hinaus wirft der Versuch, einen `MediaStreamAudioSourceNode` mit einem Stream zu erstellen, der keine Audio-Tracks enthält, jetzt eine `InvalidStateError` Ausnahme ([Firefox-Bug 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) sind jetzt als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekts enthalten, das von Aufrufen von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox-Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die `DOMMatrix.scaleNonUniformSelf()`-Methode wurde entfernt ([Firefox-Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Andere

- Marionette behandelt jetzt dynamisch das Öffnen und Schließen von Modaldialogen und Benutzeraufforderungen ([Firefox-Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere offene Aufforderungen behandelt werden ([Firefox-Bug 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Pushfunktionen sind jetzt standardmäßig deaktiviert, um die Entfernung von DOM-Teilen und zusätzliche Benachrichtigungen zu vermeiden ([Firefox-Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrund-Tabs, wenn Firefox in eine niedrigeren Speicherzustand gerät, ist jetzt deaktiviert — dies wirkt sich negativ aus, wenn beim Tabwechsel automatisiert wird ([Firefox-Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist nun standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hat jetzt neue verfügbare Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox-Bug 1547669](https://bugzil.la/1547669)).

### Andere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen außer denen, die auf einer weißen Liste stehen, zu blockieren ([Firefox-Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks-Release-Post: [Firefox 69 — eine Geschichte über Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)
