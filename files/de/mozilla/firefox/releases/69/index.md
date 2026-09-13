---
title: Firefox 69 Versionshinweise für Entwickler
short-title: Firefox 69
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 69, die Entwickler betreffen werden. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen zu diagnostizieren, welcher Code auf einer Seite in Reaktion auf Browserevents ausgeführt wird. Sie können bestimmte Typen wie `click` oder `keydown` auswählen oder ganze Kategorien von Events, wie alle Maus-Eingabe-Events. ([Firefox-Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Quelllistenbereich des Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) angezeigt werden, können jetzt über die Kontextmenüoption _Datei herunterladen_ gespeichert werden ([Firefox-Bug 888161](https://bugzil.la/888161)).
- Im Quelllistenbereich des Debuggers werden geladene Erweiterungen mit ihrem Namen statt nur ihrer {{Glossary("UUID", "UUID")}} aufgelistet ([Firefox-Bug 1486416](https://bugzil.la/1486416)), was es erheblich erleichtert, den Erweiterungscode zu finden, den Sie debuggen möchten.
- Der Debugger lädt jetzt signifikant schneller durch Lazy-Loading von Skripten ([Firefox-Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) Nachrichten von [Tracking-Schutz-Fehlern](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert, um Rauschen von wiederholt blockierten Ressourcen und Speicherzugriffen zu reduzieren ([Firefox-Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können durch Speichern in eine Datei oder Kopieren in die Zwischenablage mithilfe eines neuen Kontextmenüeintrags _Exportieren sichtbare Nachrichten in_ geteilt werden ([Firefox-Bug 1517728](https://bugzil.la/1517728)).
- Die Werkzeugleiste der Konsole reduziert jetzt reaktiv ihre Höhe auf eine einzige Reihe, um vertikalen Platz zu sparen ([Firefox-Bug 972530](https://bugzil.la/972530)).
- Nachrichten aus Inhalten können jetzt in der Konsole ausgeblendet werden, um sich auf Protokolle der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox-Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [gemischten Inhalten](/de/docs/Web/Security/Defenses/Mixed_content) blockiert wurden, werden jetzt im Netzwerkbereich angezeigt, mit Details zum Grund ([Firefox-Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerkbereich kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox-Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) über ein Element fahren, zeigt die erscheinende Infobar jetzt an, ob ein Element ein Flex-Container oder ein Flex-Item ist ([Firefox-Bug 1521188](https://bugzil.la/1521188)).
- Beim Inspizieren einer Seite mit einem Raster, das ein Subgrid enthält, werden die Überlagerungslinien des übergeordneten Rasters angezeigt, wann immer die Linien des Subgrids angezeigt werden; wenn das Überlagerungskontrollkästchen des übergeordneten Rasters nicht ausgewählt ist, dann sind seine Linien durchscheinend ([Firefox-Bug 1550519](https://bugzil.la/1550519)).

#### Fern-Debugging

- Für unsere mobilen Webentwickler haben wir das Fern-Debugging von der alten WebIDE in ein neu gestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, was das Debugging-Erlebnis von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB wesentlich verbessert ([Firefox-Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der DevTools-Panels wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox-Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich stärker an der Spezifikation zu orientieren, lädt die Textspur, die einem {{HTMLElement("track")}}-Element zugeordnet ist, die WebVTT-Datei mit den Text-Inhalten nicht mehr, wenn das Element in seinem Standardzustand `disabled` erstellt wird. Um auf die Inhalte zuzugreifen oder sie zu manipulieren, wenn der `mode` `disabled` ist, ändern Sie den `mode` auf entweder `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox-Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML-Element `<keygen>` wurde aus Firefox entfernt. Es wurde schon vor einiger Zeit als veraltet markiert und sein Zweck wurde generell durch andere Technologien ersetzt ([Firefox-Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces` Wert der {{cssxref("white-space")}} Eigenschaft implementiert ([Firefox-Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können jetzt auch als CSS-Eigenschaften definiert werden ([Firefox-Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}} Selektor — der zum Stylen der von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigten Untertitel ("cues") verwendet wird — erzwingt jetzt die Begrenzungen, welche CSS-Eigenschaften innerhalb der Untertitel verwendet werden dürfen, gemäß der Spezifikation ([Firefox-Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften eingeschränkt, die auf {{cssxref("::marker")}} anwendbar sein dürfen, gemäß der Spezifikation ([Firefox-Bug 1552578](https://bugzil.la/1552578))
- Die {{cssxref("overflow-block")}} und {{cssxref("overflow-inline")}} Eigenschaften wurden implementiert ([Firefox-Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Fähigkeit hinzugefügt, die Unterstützung eines Selektors mithilfe von CSS-Feature-Abfragen ({{cssxref("@supports")}}) mit der `selector()` Methode zu testen ([Firefox-Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}} Eigenschaft — die angibt, ob der Benutzer in der Lage ist, Texte im betroffenen Element auszuwählen oder nicht — wurde nicht mehr vorangestellt ([Firefox-Bug 1492739](https://bugzil.la/1492739)).
- Wir haben lokalspezifisches Groß- und Kleinschreibverhalten für Litauisch implementiert ([Firefox-Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel zu sehen](/de/docs/Web/CSS/Reference/Properties/text-transform#example_using_lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}} Eigenschaft von CSS Text implementiert ([Firefox-Bug 1011369](https://bugzil.la/1011369) und [Firefox-Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}} Eigenschaft — die es Entwicklern ermöglicht zu definieren, dass ein Element und seine Inhalte weitgehend unabhängig vom Rest des DOM-Baums sind — wurde implementiert ([Firefox-Bug 1487493](https://bugzil.la/1487493)).

### SVG

- Wir haben Unterstützung für gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox-Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox-Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Public class fields](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox-Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Class fields](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Promise-Ablehnungs-Events [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise rejection events](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}, und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Sternwert `*` für Anfragen ohne Anmeldedaten ([Firefox-Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch auf Firefox 68 ESR hochgestuft.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox-Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox-Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden jetzt in Arbeitern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Die `pageX` und `pageY` Eigenschaften wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um die Spezifikation besser einzuhalten ([Firefox-Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden jetzt in den [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent), und [`TouchEvent`](/de/docs/Web/API/TouchEvent) Schnittstellen, die alle von `UIEvent` erben, nicht mehr offengelegt.
- Die [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer), und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) Methoden sind jetzt implementiert ([Firefox-Bug 1557121](https://bugzil.la/1557121)).
- `DOMMatrixReadOnly.fromMatrix()` wurde implementiert ([Firefox-Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die sechst-parametrige Version der [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) Methode ([Firefox-Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX), und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind jetzt alle optional, wie in der Spezifikation festgelegt ([Firefox-Bug 1397949](https://bugzil.la/1397949)).
- Die [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform), und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) Eigenschaften zeigen nicht mehr an, ob ein Benutzer 32-Bit Firefox auf einem 64-Bit-Betriebssystem benutzt ([Firefox-Bug 1559747](https://bugzil.la/1559747)). Sie sagen jetzt `Linux x86_64` statt `Linux i686 on x86_64` und `Win64` statt `WOW64`.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden zu [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine spürbaren Auswirkungen auf Ihre Arbeit haben. Insbesondere die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) wurden verschoben. Ebenso die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) und verschiedene Eigenschaften ([Firefox-Bug 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox-Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Zur Verbesserung der Benutzersicherheit und in Übereinstimmung mit den neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) Spezifikation ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und so weiter zu verwenden, stellen Sie sicher, dass Ihre Inhalte über {{Glossary("HTTPS", "HTTPS")}} geladen werden ([Firefox-Bug 1528031](https://bugzil.la/1528031)).
- Die Web Audio API-Eigenschaft [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) gibt jetzt den tatsächlichen Wert der Eigenschaft zum aktuellen Zeitpunkt zurück, unter Berücksichtigung aller geplanten oder abgestuften Wertänderungen. Früher gab Firefox nur den zuletzt explizit gesetzten Wert zurück (wie durch den `value` Setter) ([Firefox-Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue, lexikographische, Sortierung für Tracks zu verwenden. Früher war die Track-Sortierung dem einzelnen Browser überlassen und konnte sogar willkürlich geändert werden. Außerdem wirft das Erstellen eines `MediaStreamAudioSourceNode` mit einem Stream, der keine Audiotracks hat, jetzt eine `InvalidStateError` Ausnahme ([Firefox-Bug 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) sind jetzt als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Objekts enthalten, das durch Aufrufe von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox-Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox-Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Sonstiges

- Marionette verarbeitet jetzt dynamisch das Öffnen und Schließen von Modaldialogen und Benutzeraufforderungen ([Firefox-Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere offene Aufforderungen bearbeitet werden ([Firefox-Bug 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Push-Funktionen sind jetzt standardmäßig deaktiviert, um die Entfernung von Teilen des DOMs und zusätzliche Benachrichtigungen zu vermeiden ([Firefox-Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrund-Tabs, wenn Firefox auf einen niedrigen Speicherzustand trifft, ist jetzt deaktiviert — dies stört die Automatisierung beim Wechseln zwischen Tabs erheblich ([Firefox-Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hat jetzt neue verfügbare Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox-Bug 1547669](https://bugzil.la/1547669)).

### Weitere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen außer denjenigen, die auf die Whitelist gesetzt wurden, zu sperren ([Firefox-Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 69 — eine Geschichte von Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)
