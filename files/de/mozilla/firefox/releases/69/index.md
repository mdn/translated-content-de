---
title: Firefox 69 Versionshinweise für Entwickler
short-title: Firefox 69
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 69, die Entwickler betreffen. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwickler-Tools

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen, zu diagnostizieren, welcher Code auf einer Seite als Reaktion auf Browser-Ereignisse ausgeführt wird. Sie können spezifische Typen wie `click` oder `keydown` auswählen oder ganze Kategorien von Ereignissen, wie alle Maus-Eingabeereignisse. ([Firefox-Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Quelllistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können jetzt über die Kontextmenüoption _Datei herunterladen_ gespeichert werden ([Firefox-Bug 888161](https://bugzil.la/888161)).
- Im Quelllistenbereich des Debuggers werden geladene Erweiterungen mit ihrem Namen anstelle nur ihrer {{Glossary("UUID", "UUID")}} aufgelistet ([Firefox-Bug 1486416](https://bugzil.la/1486416)), was die Suche nach dem zu debuggenden Erweiterungscode erheblich erleichtert.
- Der Debugger lädt jetzt dank Lazy-Loading-Skripten erheblich schneller ([Firefox-Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- Nachrichten in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von [Tracking-Schutz-Fehlern](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert, um das Rauschen durch wiederholt blockierte Ressourcen und Speicherzugriffe zu reduzieren ([Firefox-Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können geteilt werden, indem sie in eine Datei gespeichert oder über einen neuen Kontextmenüpunkt _Sichtbare Nachrichten exportieren zu_ in die Zwischenablage kopiert werden ([Firefox-Bug 1517728](https://bugzil.la/1517728)).
- Die Symbolleiste der Konsole reduziert ihre Höhe jetzt reaktionsschnell in eine einzige Zeile, um vertikalen Platz zu sparen ([Firefox-Bug 972530](https://bugzil.la/972530)).
- Nachrichten aus Inhalten können jetzt in der Konsole ausgeblendet werden, um sich auf Logs aus der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox-Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Mixed Content](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden jetzt im Netzwerk-Panel angezeigt, mit Details zum Grund ([Firefox-Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox-Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie in den [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) über ein Element fahren, enthält die erscheinende Infobar jetzt auch die Information, dass ein Element ein Flex-Container oder Flex-Item ist ([Firefox-Bug 1521188](https://bugzil.la/1521188)).
- Beim Inspizieren einer Seite, die ein Raster mit einem Unterraster enthält, werden die Overlay-Linien des übergeordneten Rasters angezeigt, wann immer die Linien des Unterrasters angezeigt werden; wenn das Kontrollkästchen für das Overlay des übergeordneten Rasters abgewählt ist, sind seine Linien durchsichtig ([Firefox-Bug 1550519](https://bugzil.la/1550519)).

#### Remote-Debugging

- Für unsere mobilen Web-Entwickler haben wir das Remote-Debugging vom alten WebIDE in das neu gestaltete [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, wodurch das Debuggen von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf Remote-Geräten über USB erheblich verbessert wurde ([Firefox-Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der Panels in den DevTools wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox-Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um näher an die Spezifikation heranzukommen, wird die Textspur, die mit einem {{HTMLElement("track")}}-Element verbunden ist, die WebVTT-Datei mit den Text-Hinweisen nicht mehr laden, wenn das Element im Standardzustand `disabled` erstellt wird. Um auf die Hinweise zuzugreifen oder sie zu manipulieren, wenn der `mode` `disabled` ist, ändern Sie den `mode` auf entweder `started` oder `hidden`; dies löst das Laden der WebVTT-Daten aus ([Firefox-Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML `<keygen>`-Element wurde aus Firefox entfernt. Es wurde vor einiger Zeit als veraltet markiert, und sein Zweck wurde im Allgemeinen durch andere Technologien ersetzt ([Firefox-Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces`-Wert der {{cssxref("white-space")}}-Eigenschaft implementiert ([Firefox-Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können jetzt auch als CSS-Eigenschaften definiert werden ([Firefox-Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}}-Selektor — der verwendet wird, um die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigten Untertitel ("Cues") zu stylen — erzwingt jetzt die Einschränkungen darüber, welche CSS-Eigenschaften innerhalb von Cues verwendet werden dürfen, gemäß der Spezifikation ([Firefox-Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften, die auf {{cssxref("::marker")}} angewendet werden können, gemäß der Spezifikation eingeschränkt ([Firefox-Bug 1552578](https://bugzil.la/1552578))
- Die {{cssxref("overflow-block")}} und {{cssxref("overflow-inline")}}-Eigenschaften wurden implementiert ([Firefox-Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, Unterstützung für einen Selektor bei der Verwendung von CSS-Feature-Queries ({{cssxref("@supports")}}) mit der `selector()`-Methode zu testen ([Firefox-Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}}-Eigenschaft — die angibt, ob der Benutzer in der Lage ist, Text im betroffenen Element auszuwählen oder nicht — wurde nicht mehr vorangestellt ([Firefox-Bug 1492739](https://bugzil.la/1492739)).
- Wir haben lokalspezifisches Verhalten des Buchstabens für Litauisch implementiert ([Firefox-Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel](/de/docs/Web/CSS/Reference/Properties/text-transform#example_using_lowercase_lithuanian) zu sehen.
- Wir haben die {{cssxref("line-break")}}-Eigenschaft von CSS Text implementiert ([Firefox-Bug 1011369](https://bugzil.la/1011369) und [Firefox-Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}}-Eigenschaft — die es Entwicklern ermöglicht zu definieren, dass ein Element und seine Inhalte größtenteils unabhängig vom Rest des DOM-Baums sind — wurde implementiert [Firefox-Bug 1487493](https://bugzil.la/1487493).

### SVG

- Wir haben Unterstützung für gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox-Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox-Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox-Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Event-Handling-Ereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise Rejection Events](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Platzhalterwert `*` für Anfragen ohne Anmeldeinformationen ([Firefox-Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch in Firefox 68 ESR angehoben.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox-Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox-Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden jetzt in Arbeitern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Die Eigenschaften `pageX` und `pageY` wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um eine bessere Spezifikationskonformität zu erreichen ([Firefox-Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht mehr an die Schnittstellen [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) angeboten, welche alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind jetzt implementiert ([Firefox-Bug 1557121](https://bugzil.la/1557121)).
- `DOMMatrixReadOnly.fromMatrix()` wurde implementiert ([Firefox-Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die sechsparameter Version der Methode [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) ([Firefox-Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX) und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind jetzt alle optional, gemäß der Spezifikation ([Firefox-Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) offenbaren nicht mehr, ob ein Benutzer eine 32-Bit-Version von Firefox auf einem 64-Bit-Betriebssystem ausführt ([Firefox-Bug 1559747](https://bugzil.la/1559747)). Sie zeigen jetzt `Linux x86_64` anstelle von `Linux i686 on x86_64` und `Win64` anstelle von `WOW64` an.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden auf [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine spürbaren Auswirkungen auf Ihre Arbeit haben. Insbesondere wurden die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) verschoben. Auch die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand), sowie verschiedene Eigenschaften ([Firefox-Bug 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox-Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web-Audio und WebRTC

- Um die Sicherheit der Benutzer zu verbessern und in Übereinstimmung mit den neuesten Versionen der [Medienaufnahme und Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) Spezifikation, ist die Eigenschaft [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und dergleichen zu nutzen, stellen Sie sicher, dass Ihr Inhalt mit {{Glossary("HTTPS", "HTTPS")}} geladen wird ([Firefox-Bug 1528031](https://bugzil.la/1528031)).
- Die Eigenschaft [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) der Web-Audio-API gibt jetzt den tatsächlichen Wert der Eigenschaft zur aktuellen Zeit zurück, wobei alle geplanten oder abgestuften Wertänderungen berücksichtigt werden. Zuvor gab Firefox nur den zuletzt explizit gesetzten Wert zurück (wie durch die Verwendung des `value`-Setzers) ([Firefox-Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue, alphabetische Ordnung für Tracks zu verwenden. Zuvor war die Trackreihenfolge den einzelnen Browsern überlassen und konnte sich sogar willkürlich ändern. Zudem wirft der Versuch, einen `MediaStreamAudioSourceNode` mit einem Stream ohne Audiotracks zu erstellen, jetzt eine `InvalidStateError`-Ausnahme ([Firefox-Bug 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) sind jetzt als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Objekts enthalten, das durch Aufrufe an [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox-Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox-Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Kompatibilität (Marionette)

#### Andere

- Marionette verwaltet jetzt dynamisch das Öffnen und Schließen von modalen Dialogen und Benutzereingabeaufforderungen ([Firefox-Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere offene Eingabeaufforderungen verwaltet werden ([Firefox-Bug 1487358](https://bugzil.la/1487358)).
- Der Tracking-Schutz und die DOM-Push-Funktionen sind jetzt standardmäßig deaktiviert, um die Entfernung von Teilen des DOM zu vermeiden und zusätzliche Benachrichtigungen zu vermeiden ([Firefox-Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrundtabs, wenn Firefox eine niedrige Speicherauslastung erkennt, ist jetzt deaktiviert — dies interagiert nämlich schlecht mit der Automatisierung beim Wechseln zwischen Tabs ([Firefox-Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hat jetzt neue Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox-Bug 1547669](https://bugzil.la/1547669)).

### Andere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen außer denen auf der Whitelist zu blockieren ([Firefox-Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 69 — eine Geschichte von Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)
