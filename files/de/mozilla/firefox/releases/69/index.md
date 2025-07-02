---
title: Firefox 69 für Entwickler
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 69, die Entwickler betreffen werden. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen, zu diagnostizieren, welchen Code eine Seite als Reaktion auf Browserevents ausführt. Sie können spezifische Typen wählen, wie `click` oder `keydown`, oder ganze Kategorien von Events, wie alle Maus-Eingabereignisse. ([Firefox Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können jetzt über die Kontextmenüoption _Download file_ gespeichert werden ([Firefox Bug 888161](https://bugzil.la/888161)).
- Im Quellenlistenbereich des Debuggers werden geladene Erweiterungen nun mit ihrem Namen statt nur mit der {{Glossary("UUID", "UUID")}} aufgelistet ([Firefox Bug 1486416](https://bugzil.la/1486416)), was es wesentlich einfacher macht, den zu debuggenden Erweiterungscode zu finden.
- Der Debugger wird nun signifikant schneller durch das verzögerte Laden von Skripten ([Firefox Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- Meldungen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von [Tracking-Schutzfehlern](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert, um die Störung durch wiederholte blockierte Ressourcen und Speicherzugriffe zu reduzieren ([Firefox Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können geteilt werden, indem sie in einer Datei gespeichert oder über einen neuen _Export visible messages to_ Kontextmenüeintrag in die Zwischenablage kopiert werden ([Firefox Bug 1517728](https://bugzil.la/1517728)).
- Die Werkzeugleiste der Konsole reduziert jetzt reaktionsschnell ihre Höhe auf eine einzelne Zeile, um vertikalen Platz zu sparen ([Firefox Bug 972530](https://bugzil.la/972530)).
- Meldungen aus Inhalten können jetzt in der Konsole ausgeblendet werden, um sich auf Protokolle der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die wegen [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [gemischtem Inhalt](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden jetzt im Netzwerk-Panel angezeigt, mit Details zu den Gründen ([Firefox Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_ Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie über ein Element im [Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) schweben, enthält die erscheinende Infobar jetzt die Information, ob ein Element ein Flex-Container oder Flex-Item ist ([Firefox Bug 1521188](https://bugzil.la/1521188)).
- Beim Inspizieren einer Seite, die ein Raster mit einem Unterraster enthält, werden die Überlagerungslinien des übergeordneten Rasters angezeigt, wenn die Linien des Unterrasters angezeigt werden; wenn das Kontrollkästchen des übergeordneten Rasters nicht ausgewählt ist, sind seine Linien transluzent ([Firefox Bug 1550519](https://bugzil.la/1550519)).

#### Remote-Debugging

- Für unsere mobilen Webentwickler haben wir das Remote-Debugging vom alten WebIDE in ein neu gestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, wodurch die Erfahrung beim Debuggen von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB wesentlich verbessert wurde ([Firefox Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der DevTools-Panels wurde geändert, um die Popularität widerzuspiegeln ([Firefox Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich stärker an die Spezifikation anzupassen, lädt die mit einem {{HTMLElement("track")}} Element verknüpfte Textspur die WebVTT-Datei mit den Text-Cues nicht mehr, wenn das Element im Standardmodus `disabled` erstellt wird. Um auf die Cues zuzugreifen oder sie zu manipulieren, wenn der `mode` `disabled` ist, ändern Sie den `mode` auf entweder `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML `<keygen>` Element wurde aus Firefox entfernt. Es wurde vor einiger Zeit als veraltet markiert, und sein Zweck wurde im Allgemeinen durch andere Technologien ersetzt ([Firefox Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces` Wert der {{cssxref("white-space")}} Eigenschaft implementiert ([Firefox Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können nun auch als CSS-Eigenschaften definiert werden ([Firefox Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}} Selektor — verwendet, um die Untertitel ("Cues") zu gestalten, die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden — erzwingt nun die Einschränkungen, welche CSS-Eigenschaften innerhalb von Cues verwendet werden dürfen, gemäß der Spezifikation ([Firefox Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften eingeschränkt, die auf {{cssxref("::marker")}} anwendbar sind, gemäß der Spezifikation ([Firefox Bug 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}} und {{cssxref("overflow-inline")}} Eigenschaften wurden implementiert ([Firefox Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, die Unterstützung eines Selektors mit CSS-Feature-Abfragen ({{cssxref("@supports")}}) mithilfe der `selector()` Methode zu testen ([Firefox Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}} Eigenschaft — die angibt, ob der Benutzer in der Lage ist, Text im betroffenen Element auszuwählen oder nicht — wurde ohne Präfix implementiert ([Firefox Bug 1492739](https://bugzil.la/1492739)).
- Lokalspezifisches Groß-/Kleinschreibverhalten für Litauisch wurde implementiert ([Firefox Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel zu sehen](/de/docs/Web/CSS/text-transform#lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}} Eigenschaft von CSS Text implementiert ([Firefox Bug 1011369](https://bugzil.la/1011369) und [Firefox Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}} Eigenschaft — mit der Entwickler definieren können, dass ein Element und dessen Inhalte größtenteils unabhängig vom Rest des DOM-Baums sind — wurde implementiert ([Firefox Bug 1487493](https://bugzil.la/1487493)).

### SVG

- Unterstützung für gzip-komprimiertes SVG-in-OpenType wurde hinzugefügt ([Firefox Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Public class fields](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Klasseneigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Promise-Ablehnungsereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind nun standardmäßig aktiviert ([Firefox Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Platzhalterwert `*` für Anfragen ohne Anmeldedaten ([Firefox Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch auf Firefox 68 ESR übertragen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden jetzt in Workern unterstützt ([Firefox Bug 1420580](https://bugzil.la/1420580)).
- Die Eigenschaften `pageX` und `pageY` wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um die Spezifikation besser einzuhalten ([Firefox Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht mehr an die [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) Schnittstellen weitergereicht, die alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) wurden implementiert ([Firefox Bug 1557121](https://bugzil.la/1557121)).
- [`DOMMatrixReadOnly.fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix) wurde implementiert ([Firefox Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen nun die sechs-Parameter-Version der [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) Methode ([Firefox Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX) und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind nun alle optional, gemäß der Spezifikation ([Firefox Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) zeigen nicht mehr an, ob ein Benutzer eine 32-Bit-Version von Firefox auf einem 64-Bit-Betriebssystem ausführt ([Firefox Bug 1559747](https://bugzil.la/1559747)). Sie zeigen nun `Linux x86_64` statt `Linux i686 on x86_64`, und `Win64` statt `WOW64`.
- Die restlichen Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden zu [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine nennenswerten Auswirkungen auf Ihre Arbeit haben. Im Besonderen wurden die [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) Methoden verschoben. Auch die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedene Eigenschaften ([Firefox Bug 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Für eine verbesserte Benutzersicherheit und im Einklang mit den neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) Spezifikation ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und so weiter zu verwenden, stellen Sie sicher, dass Ihr Inhalt über {{Glossary("HTTPS", "HTTPS")}} geladen wird ([Firefox Bug 1528031](https://bugzil.la/1528031)).
- Die `value` Eigenschaft von Web Audio API's [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) gibt jetzt den tatsächlichen Wert der Eigenschaft zur aktuellen Zeit zurück, unter Berücksichtigung aller geplanten oder abgestuften Wertänderungen. Zuvor gab Firefox nur den zuletzt explizit gesetzten Wert zurück (wie durch Verwendung des `value` Setters) ([Firefox Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue lexikografische Reihenfolge der Spuren zu verwenden. Zuvor war die Reihenfolge der Spuren dem einzelnen Browser überlassen und konnte sogar willkürlich geändert werden. Außerdem wirft der Versuch, einen `MediaStreamAudioSourceNode` mit einem Stream zu erstellen, der keine Audio-Tracks enthält, jetzt einen `InvalidStateError` Ausnahmefehler ([Firefox Bug 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) sind nun als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Objekts enthalten, das von Aufrufen von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Andere

- Marionette behandelt nun dynamisch das Öffnen und Schließen von modalen Dialogen und Benutzeraufforderungen ([Firefox Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere offene Aufforderungen gehandhabt werden ([Firefox Bug 1487358](https://bugzil.la/1487358)).
- Der Tracking-Schutz- und DOM-Push-Funktionen sind nun standardmäßig deaktiviert, um die Entfernung von Teilen des DOMs und zusätzliche Benachrichtigungen zu vermeiden ([Firefox Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrund-Tabs, wenn Firefox in einen Niedrigspeicherzustand gerät, ist nun deaktiviert — dies wird bei der Automatisierung beim Wechseln zwischen Tabs schlecht behandelt ([Firefox Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist nun standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hat nun neue verfügbare Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox Bug 1547669](https://bugzil.la/1547669)).

### Weitere Änderungen

- Es gibt nun [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen zu sperren, außer denen, die auf die Whitelist gesetzt wurden ([Firefox Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks Release-Post: [Firefox 69 — eine Geschichte von Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## Ältere Versionen

{{Firefox_for_developers}}
