---
title: Firefox 69 für Entwickler
short-title: Firefox 69
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 69, die Entwickler betreffen werden. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) helfen Ihnen zu diagnostizieren, welcher Code von einer Seite als Reaktion auf Browserevents ausgeführt wird. Sie können spezifische Typen wie `click` oder `keydown` oder ganze Kategorien von Events auswählen, wie alle Maus-Eingabe-Events. ([Firefox Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die in der [Quellenliste](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können jetzt über die Option _Datei herunterladen_ im Kontextmenü gespeichert werden ([Firefox Bug 888161](https://bugzil.la/888161)).
- Im Quelllistenbereich des Debuggers werden geladene Erweiterungen jetzt mit ihrem Namen anstelle ihrer {{Glossary("UUID", "UUID")}} aufgeführt ([Firefox Bug 1486416](https://bugzil.la/1486416)), was es wesentlich einfacher macht, den zu debuggenden Erweiterungscode zu finden.
- Der Debugger lädt jetzt signifikant schneller durch das Lazy-Loading von Skripten ([Firefox Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html)-Nachrichten von [Tracking-Schutzfehlern](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert, um die Geräuschentwicklung von wiederholt blockierten Ressourcen und Speicherzugriffen zu reduzieren ([Firefox Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können durch Speichern in einer Datei oder Kopieren in die Zwischenablage über einen neuen _Sichtbare Nachrichten exportieren nach_-Kontextmenüeintrag geteilt werden ([Firefox Bug 1517728](https://bugzil.la/1517728)).
- Die Toolbar der Konsole reduziert ihre Höhe jetzt reaktionsschnell auf eine einzelne Zeile, um vertikalen Platz zu sparen ([Firefox Bug 972530](https://bugzil.la/972530)).
- Nachrichten aus dem Inhalt können jetzt in der Konsole ausgeblendet werden, um sich auf Protokolle aus der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die wegen [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Gemischtem Inhalt](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden jetzt im Netzwerk-Panel angezeigt, mit Details zum Grund ([Firefox Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox Bug 1341155](https://bugzil.la/1341155)).

#### Inspector

- Wenn Sie mit der Maus über ein Element im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) fahren, zeigt die erscheinende Infobar jetzt an, dass ein Element ein Flex-Container oder Flex-Item ist ([Firefox Bug 1521188](https://bugzil.la/1521188)).
- Wenn Sie eine Seite inspizieren, die ein Raster mit einem Unterraster enthält, werden die Overlay-Linien des Elternrasters angezeigt, sobald die Linien des Unterrasters angezeigt werden; Wenn das Overlay-Kontrollkästchen des Elternrasters abgewählt ist, sind seine Linien transluzent ([Firefox Bug 1550519](https://bugzil.la/1550519)).

#### Fern-Debugging

- Für unsere mobilen Webentwickler haben wir das Fern-Debugging vom alten WebIDE in ein neu gestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, wodurch das Debuggen von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB erheblich verbessert wird ([Firefox Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der DevTools-Panels wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich näher an die Spezifikation zu halten, lädt das Text-Track, das mit einem {{HTMLElement("track")}}-Element verbunden ist, die WebVTT-Datei mit den Text-Hinweisen nicht mehr, wenn das Element im Standard-`disabled` [`mode`](/de/docs/Web/API/TextTrack/mode) erstellt wird. Um auf die Hinweise zuzugreifen oder sie zu manipulieren, wenn der `mode` auf `disabled` gesetzt ist, ändern Sie den `mode` zu `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox Bug 1550633](https://bugzil.la/1550633)).

#### Entfernung

- Das HTML-Element `<keygen>` wurde aus Firefox entfernt. Es wurde schon vor einiger Zeit depreziert, und sein Zweck wurde allgemein durch andere Technologien ersetzt ([Firefox Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces`-Wert der {{cssxref("white-space")}}-Eigenschaft implementiert ([Firefox Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können nun auch als CSS-Eigenschaften definiert werden ([Firefox Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}}-Selektor – der verwendet wird, um die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigten Untertitel ("cues") zu stylen – erzwingt jetzt die Einschränkungen bezüglich der CSS-Eigenschaften, die innerhalb von Cues verwendet werden dürfen, gemäß der Spezifikation ([Firefox Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften eingeschränkt, die auf {{cssxref("::marker")}} anwendbar sind, entsprechend der Spezifikation ([Firefox Bug 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}}- und {{cssxref("overflow-inline")}}-Eigenschaften wurden implementiert ([Firefox Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, die Unterstützung eines Selektors mithilfe von CSS-Feature-Queries ({{cssxref("@supports")}}) mit der Methode `selector()` zu testen ([Firefox Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}}-Eigenschaft — die angibt, ob der Benutzer Text im betroffenen Element auswählen kann oder nicht — wurde ohne Präfix implementiert ([Firefox Bug 1492739](https://bugzil.la/1492739)).
- Wir haben localespezifisches Groß- und Kleinschreibverhalten für Litauisch implementiert ([Firefox Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel zu sehen](/de/docs/Web/CSS/text-transform#example_using_lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}}-Eigenschaft von CSS Text implementiert ([Firefox Bug 1011369](https://bugzil.la/1011369) und [Firefox Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}}-Eigenschaft — die Entwicklern ermöglicht, zu definieren, dass ein Element und dessen Inhalte größtenteils unabhängig vom Rest des DOM-Baums sind — wurde implementiert [Firefox Bug 1487493](https://bugzil.la/1487493).

### SVG

- Wir haben Unterstützung für gzip-komprimierte SVG-in-OpenType hinzugefügt ([Firefox Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Public class fields](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Class fields](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Promise-Zurückweisung-Events [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind jetzt standardmäßig aktiviert ([Firefox Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise rejection events](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}, und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Platzhalterwert `*` für Anfragen ohne Anmeldeinformationen ([Firefox Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch auf Firefox 68 ESR übertragen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint), und verwandte Objekte werden jetzt in Arbeitern unterstützt ([Firefox Bug 1420580](https://bugzil.la/1420580)).
- Die Eigenschaften `pageX` und `pageY` wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um die Konformität zur Spezifikation zu verbessern ([Firefox Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht länger den Schnittstellen [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) bereitgestellt, die alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer), und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind jetzt implementiert ([Firefox Bug 1557121](https://bugzil.la/1557121)).
- `DOMMatrixReadOnly.fromMatrix()` wurde implementiert ([Firefox Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die sechs-Parameter-Version der [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) Methode ([Firefox Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX), und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind jetzt alle optional, gemäß Spezifikation ([Firefox Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform), und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) enthüllen nicht mehr, ob ein Benutzer 32-Bit Firefox auf einem 64-Bit Betriebssystem nutzt ([Firefox Bug 1559747](https://bugzil.la/1559747)). Sie sagen nun `Linux x86_64` anstelle von `Linux i686 on x86_64` und `Win64` statt `WOW64`.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden auf [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine nennenswerten Auswirkungen auf Ihre Arbeit haben. Insbesondere wurden die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open), und [`write()`](/de/docs/Web/API/Document/write) verschoben. Auch die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedene Eigenschaften ([Firefox Bug 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Zur Verbesserung der Benutzersicherheit und im Einklang mit den neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API)-Spezifikation ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und dergleichen zu verwenden, stellen Sie sicher, dass Ihr Inhalt über {{Glossary("HTTPS", "HTTPS")}} geladen wird ([Firefox Bug 1528031](https://bugzil.la/1528031)).
- Die [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft der Web Audio API gibt jetzt den tatsächlichen Wert der Eigenschaft zur aktuellen Zeit zurück, wobei alle geplanten oder abgestuften Wertänderungen berücksichtigt werden. Zuvor gab Firefox nur den zuletzt explizit gesetzten Wert zurück (durch Verwenden des `value`-Setters) ([Firefox Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue, lexikographische Reihenfolge für Tracks zu verwenden. Zuvor war die Track-Reihenfolge dem einzelnen Browser überlassen und könnte sich sogar willkürlich ändern. Außerdem wirft der Versuch, einen `MediaStreamAudioSourceNode` mit einem Stream zu erstellen, der keine Audio-Tracks enthält, jetzt einen `InvalidStateError`-Ausnahmefehler ([Firefox Bug 1553215](https://bugzil.la/1553215)).
- Die [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode)-, [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)- und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)-Einstellungen sind jetzt als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekts enthalten, das von Aufrufen von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox Bug 1537986](https://bugzil.la/1537986)).

#### Entfernung

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Sonstiges

- Marionette behandelt jetzt dynamisch das Öffnen und Schließen von Modaldialogen und Benutzeraufforderungen ([Firefox Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere geöffnete Eingabeaufforderungen behandelt werden ([Firefox Bug 1487358](https://bugzil.la/1487358)).
- Der Tracking-Schutz und die DOM-Push-Funktionen sind jetzt standardmäßig deaktiviert, um das Entfernen von Teilen des DOM und zusätzliche Benachrichtigungen zu vermeiden ([Firefox Bug 1542244](https://bugzil.la/1542244)).
- Automatisches Entladen von Hintergrund-Tabs bei geringem Arbeitsspeicher ist jetzt deaktiviert – dies wirkt sich schlecht auf die Automatisierung beim Wechseln zwischen Tabs aus ([Firefox Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) verfügt jetzt über neue Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox Bug 1547669](https://bugzil.la/1547669)).

### Sonstige Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen zu sperren, außer denen, die auf die Whitelist gesetzt wurden ([Firefox Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks Release-Beitrag: [Firefox 69 — eine Geschichte von Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)
