---
title: "Firefox 69: Versionshinweise für Entwickler"
short-title: Firefox 69
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

Dieser Artikel informiert über die Änderungen in Firefox 69, die Entwickler betreffen. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- Mit [Haltepunkten für Event Listener](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) können Sie feststellen, welchen Code eine Seite als Reaktion auf Browserereignisse ausführt. Sie können bestimmte Ereignistypen wie `click` oder `keydown` oder ganze Ereigniskategorien wie alle Mauseingabeereignisse auswählen ([Firefox-Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die in der [Quellliste](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können jetzt über die Kontextmenüoption _Datei herunterladen_ gespeichert werden ([Firefox-Bug 888161](https://bugzil.la/888161)).
- In der Quellliste des Debuggers werden geladene Erweiterungen jetzt mit ihrem Namen statt nur mit ihrer {{Glossary("UUID", "UUID")}} aufgeführt ([Firefox-Bug 1486416](https://bugzil.la/1486416)). Dadurch lässt sich der zu debuggende Erweiterungscode wesentlich leichter finden.
- Dank verzögertem Laden von Skripten lädt der Debugger jetzt deutlich schneller ([Firefox-Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- Meldungen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu [Fehlern des Tracking-Schutzes](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert. So verursachen wiederholt blockierte Ressourcen und Speicherzugriffe weniger Meldungen ([Firefox-Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolleinträge in der Konsole können über die neue Kontextmenüoption _Sichtbare Meldungen exportieren nach_ in einer Datei gespeichert oder in die Zwischenablage kopiert werden ([Firefox-Bug 1517728](https://bugzil.la/1517728)).
- Die Symbolleiste der Konsole wird jetzt bei wenig Platz auf eine einzige Zeile reduziert, um vertikalen Platz zu sparen ([Firefox-Bug 972530](https://bugzil.la/972530)).
- Meldungen aus Webinhalten können jetzt in der Konsole ausgeblendet werden, um sich auf Protokolleinträge der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox-Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [gemischten Inhalten](/de/docs/Web/Security/Defenses/Mixed_content) blockiert wurden, werden jetzt mit Angaben zum Grund im Netzwerk-Panel angezeigt ([Firefox-Bug 1556451](https://bugzil.la/1556451)).
- Im Netzwerk-Panel kann eine neue, optionale Spalte _URL_ aktiviert werden, die die vollständige URL von Ressourcen anzeigt ([Firefox-Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) den Mauszeiger über ein Element bewegen, zeigt die eingeblendete Informationsleiste jetzt auch an, ob das Element ein Flex-Container oder ein Flex-Item ist ([Firefox-Bug 1521188](https://bugzil.la/1521188)).
- Bei der Untersuchung einer Seite mit einem Grid, das ein Subgrid enthält, werden die Overlay-Linien des übergeordneten Grids immer angezeigt, wenn die Linien des Subgrids angezeigt werden. Ist das Kontrollkästchen für das Overlay des übergeordneten Grids nicht aktiviert, erscheinen dessen Linien halbtransparent ([Firefox-Bug 1550519](https://bugzil.la/1550519)).

#### Remote-Debugging

- Für Entwickler mobiler Webanwendungen haben wir das Remote-Debugging aus der alten WebIDE in das neu gestaltete [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) verlagert. Dadurch lässt sich [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB wesentlich besser debuggen ([Firefox-Bug 1462208](https://bugzil.la/1462208)).

#### Allgemeines

- Die Reihenfolge der DevTools-Panels wurde an ihre Beliebtheit angepasst ([Firefox-Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um der Spezifikation besser zu entsprechen, lädt der einem {{HTMLElement("track")}}-Element zugeordnete Text-Track die WebVTT-Datei mit den Text-Cues nicht mehr, wenn das Element mit dem standardmäßigen [`mode`](/de/docs/Web/API/TextTrack/mode)-Wert `disabled` erstellt wird. Um bei `disabled` auf die Cues zuzugreifen oder sie zu bearbeiten, ändern Sie `mode` auf `started` oder `hidden`. Dadurch wird das Laden der WebVTT-Daten ausgelöst ([Firefox-Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML-Element `<keygen>` wurde aus Firefox entfernt. Es war bereits seit einiger Zeit veraltet; seine Funktion wurde weitgehend durch andere Technologien ersetzt ([Firefox-Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Der Wert `break-spaces` für die Eigenschaft {{cssxref("white-space")}} wurde implementiert ([Firefox-Bug 1351432](https://bugzil.la/1351432)).
- SVG-Geometrieattribute wie {{SVGAttr("width")}} und {{SVGAttr("height")}} können jetzt auch als CSS-Eigenschaften definiert werden ([Firefox-Bug 1383650](https://bugzil.la/1383650)).
- Der Selektor {{cssxref("::cue")}}, mit dem die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigten Untertitel („Cues“) gestaltet werden, setzt jetzt gemäß der Spezifikation die Beschränkungen für CSS-Eigenschaften innerhalb von Cues durch ([Firefox-Bug 1321488](https://bugzil.la/1321488)).
- Die Eigenschaften, die auf {{cssxref("::marker")}} angewendet werden können, wurden gemäß der Spezifikation eingeschränkt ([Firefox-Bug 1552578](https://bugzil.la/1552578)).
- Die Eigenschaften {{cssxref("overflow-block")}} und {{cssxref("overflow-inline")}} wurden implementiert ([Firefox-Bug 1470695](https://bugzil.la/1470695)).
- Mit der Methode `selector()` kann jetzt in CSS Feature Queries ({{cssxref("@supports")}}) geprüft werden, ob ein Selektor unterstützt wird ([Firefox-Bug 1513643](https://bugzil.la/1513643)).
- Die Eigenschaft {{cssxref("user-select")}}, die festlegt, ob Benutzer Text im betreffenden Element auswählen können, kann jetzt ohne Präfix verwendet werden ([Firefox-Bug 1492739](https://bugzil.la/1492739)).
- Gebietsschemaspezifische Regeln für die Groß- und Kleinschreibung im Litauischen wurden implementiert ([Firefox-Bug 1322992](https://bugzil.la/1322992)), [wie dieses Beispiel zeigt](/de/docs/Web/CSS/Reference/Properties/text-transform#example_using_lowercase_lithuanian).
- Die CSS-Text-Eigenschaft {{cssxref("line-break")}} wurde implementiert ([Firefox-Bug 1011369](https://bugzil.la/1011369) und [Firefox-Bug 1531715](https://bugzil.la/1531715)).
- Die Eigenschaft {{cssxref("contain")}}, mit der Entwickler festlegen können, dass ein Element und sein Inhalt weitgehend unabhängig vom übrigen DOM-Baum sind, wurde implementiert ([Firefox-Bug 1487493](https://bugzil.la/1487493)).

### SVG

- Unterstützung für gzip-komprimiertes SVG-in-OpenType wurde hinzugefügt ([Firefox-Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox-Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox-Bug 1555464](https://bugzil.la/1555464)). Weitere Informationen finden Sie unter [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).
- Die Ereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) für abgelehnte Promises sind jetzt standardmäßig aktiviert ([Firefox-Bug 1362272](https://bugzil.la/1362272)). Weitere Informationen zu ihrer Funktionsweise finden Sie unter [Ereignisse bei abgelehnten Promises](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt bei Anfragen ohne Anmeldedaten den Platzhalterwert `*` ([Firefox-Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch in Firefox 68 ESR übernommen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox-Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox-Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und zugehörige Objekte werden jetzt in Workern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Die Eigenschaften `pageX` und `pageY` wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) nach [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um der Spezifikation besser zu entsprechen ([Firefox-Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften sind für die Interfaces [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent), die alle von `UIEvent` erben, nicht mehr verfügbar.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) wurden implementiert ([Firefox-Bug 1557121](https://bugzil.la/1557121)).
- `DOMMatrixReadOnly.fromMatrix()` wurde implementiert ([Firefox-Bug 1560462](https://bugzil.la/1560462)).
- Die Version der Methode [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) mit sechs Parametern wird jetzt unterstützt ([Firefox-Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente von [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX) und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind jetzt gemäß der Spezifikation allesamt optional ([Firefox-Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) geben nicht mehr preis, ob ein Benutzer die 32-Bit-Version von Firefox auf einem 64-Bit-Betriebssystem ausführt ([Firefox-Bug 1559747](https://bugzil.la/1559747)). Sie melden jetzt `Linux x86_64` statt `Linux i686 on x86_64` und `Win64` statt `WOW64`.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden nach [`Document`](/de/docs/Web/API/Document) verschoben. In den meisten Fällen dürfte sich das nicht merklich auf Ihre Arbeit auswirken. Insbesondere wurden die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) verschoben. Dasselbe gilt für verschiedene editorbezogene Methoden, darunter [`execCommand()`](/de/docs/Web/API/Document/execCommand), sowie für verschiedene Eigenschaften ([Firefox-Bug 1549560](https://bugzil.la/1549560)).
- [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) wurden implementiert ([Firefox-Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Um die Sicherheit der Benutzer zu verbessern und den neuesten Versionen der Spezifikation [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) zu entsprechen, ist die Eigenschaft [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) in unsicheren Kontexten nicht mehr vorhanden. Stellen Sie sicher, dass Ihre Inhalte über {{Glossary("HTTPS", "HTTPS")}} geladen werden, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und ähnliche Methoden verwenden möchten ([Firefox-Bug 1528031](https://bugzil.la/1528031)).
- Die Eigenschaft [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) der Web Audio API gibt jetzt den tatsächlichen Wert der Eigenschaft zum aktuellen Zeitpunkt zurück und berücksichtigt dabei alle geplanten oder schrittweisen Wertänderungen. Zuvor gab Firefox nur den zuletzt ausdrücklich festgelegten Wert zurück, etwa einen über den `value`-Setter gesetzten Wert ([Firefox-Bug 893020](https://bugzil.la/893020)).
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) verwendet jetzt die neue lexikografische Reihenfolge für Tracks. Zuvor hing die Reihenfolge vom jeweiligen Browser ab und konnte sich sogar willkürlich ändern. Außerdem löst der Versuch, einen `MediaStreamAudioSourceNode` mit einem Stream ohne Audio-Tracks zu erstellen, jetzt eine `InvalidStateError`-Ausnahme aus ([Firefox-Bug 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaStreamTrack/getSettings#facingmode), [`deviceId`](/de/docs/Web/API/MediaStreamTrack/getSettings#deviceid) und [`groupId`](/de/docs/Web/API/MediaStreamTrack/getSettings#groupid) sind jetzt als Eigenschaften des Objekts enthalten, das Aufrufe von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgeben ([Firefox-Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox-Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Sonstiges

- Marionette verarbeitet das Öffnen und Schließen modaler Dialoge und Benutzerabfragen jetzt dynamisch ([Firefox-Bug 1477977](https://bugzil.la/1477977)). Dadurch können auch mehrere gleichzeitig geöffnete Abfragen verarbeitet werden ([Firefox-Bug 1487358](https://bugzil.la/1487358)).
- Der Tracking-Schutz und die DOM-Push-Funktionen sind jetzt standardmäßig deaktiviert, um das Entfernen von Teilen des DOM und zusätzliche Benachrichtigungen zu vermeiden ([Firefox-Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrund-Tabs bei knappem Arbeitsspeicher ist jetzt deaktiviert, da es die Automatisierung beim Wechsel zwischen Tabs erheblich beeinträchtigt ([Firefox-Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Für die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) stehen jetzt die neuen Optionen `includePinned` und `includeSearchShortcuts` zur Verfügung ([Firefox-Bug 1547669](https://bugzil.la/1547669)).

### Weitere Änderungen

- Mit neuen [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) können alle Erweiterungen außer den ausdrücklich zugelassenen blockiert werden ([Firefox-Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Beitrag zur Veröffentlichung auf Hacks: [Firefox 69 – eine Geschichte über Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)
