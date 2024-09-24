---
title: Firefox 69 für Entwickler
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 69, die Entwickler betreffen. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) lassen Sie diagnostizieren, welchen Code eine Seite als Reaktion auf Browserevents ausführt. Sie können spezifische Typen wie `click` oder `keydown` auswählen oder ganze Kategorien von Events, wie alle Maus-Eingabe-Events. ([Firefox-Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Quellenlistenfenster](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können jetzt über die Kontextmenüoption _Datei herunterladen_ gespeichert werden ([Firefox-Bug 888161](https://bugzil.la/888161)).
- Im Quellenlistenfenster des Debuggers werden geladene Erweiterungen mit ihrem Namen aufgelistet, anstatt nur ihrer {{Glossary("UUID")}} ([Firefox-Bug 1486416](https://bugzil.la/1486416)), was es viel einfacher macht, den Code der gewünschten Erweiterung zu finden.
- Der Debugger lädt jetzt deutlich schneller durch das Lazy-Loading von Skripten ([Firefox-Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) Meldungen von [Tracking-Schutzfehlern](/de/docs/Web/Privacy/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/CORS/Errors) werden automatisch gruppiert, um das Rauschen von wiederholt blockierten Ressourcen und Speicherzugriffen zu reduzieren ([Firefox-Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können gespeichert oder in die Zwischenablage kopiert werden, indem Sie die neue Kontextmenüoption _Export visible messages to_ verwenden ([Firefox-Bug 1517728](https://bugzil.la/1517728)).
- Die Werkzeugleiste der Konsole reduziert nun responsiv ihre Höhe auf eine einzelne Zeile, um vertikalen Platz zu sparen ([Firefox-Bug 972530](https://bugzil.la/972530)).
- Meldungen vom Inhalt können jetzt in der Konsole ausgeblendet werden, um sich auf Protokolle der Firefox-UI zu konzentrieren ([Firefox-Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/CSP) oder [Mixed Content](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden jetzt im Netzwerk-Panel angezeigt, mit Details zum Grund ([Firefox-Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox-Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie mit dem Mauszeiger über ein Element im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) fahren, zeigt die Infobar jetzt an, dass ein Element ein Flex-Container oder Flex-Item ist ([Firefox-Bug 1521188](https://bugzil.la/1521188)).
- Wenn eine Seite inspiziert wird, die ein Raster mit einem Unterraster enthält, werden die Überlagerungslinien des Elterngitters angezeigt, wann immer die Linien des Unterrasters angezeigt werden; wenn das Kontrollkästchen für die Überlagerung des Elterngitters nicht ausgewählt ist, werden dessen Linien durchscheinend ([Firefox-Bug 1550519](https://bugzil.la/1550519)).

#### Fern-Fehlersuche

- Für unsere mobilen Webentwickler haben wir die Fern-Fehlersuche von der alten WebIDE in ein neu gestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, was das Debuggen von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten per USB erheblich verbessert ([Firefox-Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Anordnung des DevTools-Panels wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox-Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich enger an die Spezifikation anzunähern, lädt die mit einem {{HTMLElement("track")}} Element verknüpfte Textspur die WebVTT-Datei mit den Text-Hinweisen nicht mehr, wenn das Element in seinem standardmäßigen `disabled` {{domxref("TextTrack.mode", "Modus")}} erstellt wird. Um auf die Hinweise zuzugreifen oder sie zu manipulieren, ändern Sie den `Modus` entweder in `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox-Bug 1550633](https://bugzil.la/1550633)).

#### Entfernen

- Das HTML `<keygen>` Element wurde aus Firefox entfernt. Es wurde bereits vor einiger Zeit als veraltet erklärt, und sein Zweck wurde im Allgemeinen von anderen Technologien ersetzt ([Firefox-Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces` Wert der {{cssxref("white-space")}} Eigenschaft implementiert ([Firefox-Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrie-Attribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können jetzt auch als CSS-Eigenschaften definiert werden ([Firefox-Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}} Selektor — der verwendet wird, um die Untertitel ("Cues"), die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden, zu stylen — erzwingt jetzt die Einschränkungen, welche CSS-Eigenschaften innerhalb von Cues verwendet werden dürfen, gemäß der Spezifikation ([Firefox-Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften, die auf {{cssxref("::marker")}} angewendet werden dürfen, gemäß der Spezifikation eingeschränkt ([Firefox-Bug 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}} und {{cssxref("overflow-inline")}} Eigenschaften wurden implementiert ([Firefox-Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Fähigkeit hinzugefügt, die Unterstützung eines Selektors zu testen, wenn CSS-Feature-Abfragen ({{cssxref("@supports")}}) verwendet werden, mit der `selector()` Methode ([Firefox-Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}} Eigenschaft — die spezifiziert, ob der Benutzer den Text im betroffenen Element auswählen kann oder nicht — wurde ohne Präfix implementiert ([Firefox-Bug 1492739](https://bugzil.la/1492739)).
- Wir haben lokalspezifisches Verhalten bei der Kleinschreibung für Litauisch implementiert ([Firefox-Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel gesehen](/de/docs/Web/CSS/text-transform#lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}} Eigenschaft von CSS Text implementiert ([Firefox-Bug 1011369](https://bugzil.la/1011369) und [Firefox-Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}} Eigenschaft — die es Entwicklern ermöglicht zu definieren, dass ein Element und dessen Inhalt weitgehend unabhängig vom Rest des DOM-Baums sind — wurde implementiert ([Firefox-Bug 1487493](https://bugzil.la/1487493)).

### SVG

- Wir haben Unterstützung für gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox-Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden {{domxref("SVGGeometryElement.isPointInFill()")}} und {{domxref("SVGGeometryElement.isPointInStroke()")}} wurden implementiert ([Firefox-Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Public class fields](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox-Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Promise-Ablehnungsereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie sie funktionieren, siehe [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}, und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Platzhalterwert "`*`" für Anfragen ohne Anmeldedaten ([Firefox-Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch auf Firefox 68 ESR angewendet.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox-Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ({{domxref("queueMicrotask()")}}) wurde implementiert ([Firefox-Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die {{domxref("DOMMatrix")}}, {{domxref("DOMPoint")}}, und verwandte Objekte werden jetzt in Workern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Die `pageX` und `pageY` Eigenschaften wurden von {{domxref("UIEvent")}} zu {{domxref("MouseEvent")}} verschoben, um der Spezifikation besser zu entsprechen ([Firefox-Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht mehr den {{domxref("CompositionEvent")}}, {{domxref("FocusEvent")}}, {{domxref("InputEvent")}}, {{domxref("KeyboardEvent")}}, und {{domxref("TouchEvent")}} Schnittstellen angezeigt, die alle von `UIEvent` erben.
- Die Methoden {{domxref("Blob.text()")}}, {{domxref("Blob.arrayBuffer()")}}, und {{domxref("Blob.stream()")}} sind jetzt implementiert ([Firefox-Bug 1557121](https://bugzil.la/1557121)).
- {{domxref("DOMMatrix.fromMatrix()")}} wurde implementiert ([Firefox-Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die sechs-Parameter-Version der {{domxref("DOMMatrix.scale()")}} Methode ([Firefox-Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für {{domxref("DOMMatrix.translate()")}}, {{domxref("DOMMatrix.skewX()")}}, und {{domxref("DOMMatrix.skewY()")}} sind jetzt gemäß der Spezifikation alle optional ([Firefox-Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften {{domxref("Navigator.userAgent")}}, {{domxref("Navigator.platform")}}, und {{domxref("Navigator.oscpu")}} geben nicht mehr preis, ob ein Benutzer 32-Bit Firefox auf einem 64-Bit Betriebssystem ausführt ([Firefox-Bug 1559747](https://bugzil.la/1559747)). Sie geben jetzt `Linux x86_64` statt `Linux i686 on x86_64` an und `Win64` statt `WOW64`.
- Die verbleibenden Methoden von {{domxref("HTMLDocument")}} wurden nach {{domxref("Document")}} verschoben. Dies sollte in den meisten Fällen keinen spürbaren Einfluss auf Ihre Arbeit haben. Insbesondere die {{domxref("document.close", "close()")}}, {{domxref("document.open", "open()")}}, und {{domxref("document.write", "write()")}} Methoden wurden verschoben. Ebenso die verschiedenen editorbezogenen Methoden, einschließlich {{domxref("document.execCommand", "execCommand()")}} sowie verschiedene Eigenschaften ([Firefox-Bug 1549560](https://bugzil.la/1549560)).
- Wir haben {{domxref("AbstractRange")}} und {{domxref("StaticRange")}} implementiert ([Firefox-Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Für verbesserte Benutzerfreundlichkeit und im Einklang mit den neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) Spezifikation, ist die {{domxref("navigator.mediaDevices")}} Eigenschaft nicht mehr vorhanden, wenn der Kontext unsicher ist. Um {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}, und so weiter zu verwenden, stellen Sie sicher, dass Ihre Inhalte mit {{Glossary("HTTPS")}} geladen werden ([Firefox-Bug 1528031](https://bugzil.la/1528031)).
- Die {{domxref("AudioParam.value")}} Eigenschaft der Web Audio API gibt jetzt den tatsächlichen Wert der Eigenschaft zu der aktuellen Zeit zurück, wobei alle geplanten oder abgestuften Wertänderungen berücksichtigt werden. Bisher gab Firefox nur den zuletzt explizit gesetzten Wert zurück (wie durch Verwenden des `value`-Setters) ([Firefox-Bug 893020](https://bugzil.la/893020)).
- Wir haben {{domxref("MediaStreamAudioSourceNode")}} aktualisiert, um die neue, lexikographische, Reihenfolge für Spuren zu verwenden. Zuvor war die Spurordnung dem einzelnen Browser überlassen und konnte sogar willkürlich ändern. Darüber hinaus löst das Erstellen eines `MediaStreamAudioSourceNode` unter Verwendung eines Streams, der keine Audiotitel enthält, jetzt eine `InvalidStateError` Ausnahme aus ([Firefox-Bug 1553215](https://bugzil.la/1553215)).
- Die {{domxref("MediaTrackSettings.facingMode", "facingMode")}}, {{domxref("MediaTrackSettings.deviceId", "deviceId")}}, und {{domxref("MediaTrackSettings.groupId", "groupId")}} Einstellungen sind jetzt als Mitglieder des {{domxref("MediaTrackSettings")}} Objekts enthalten, das durch Aufrufe von {{domxref("MediaStreamTrack.getSettings()")}} zurückgegeben wird ([Firefox-Bug 1537986](https://bugzil.la/1537986)).

#### Entfernen

- Die Methode {{domxref("DOMMatrix.scaleNonUniformSelf()")}} wurde entfernt ([Firefox-Bug 1560119](https://bugzil.la/1560119)).

### WebDriver Konformität (Marionette)

#### Sonstiges

- Marionette handhabt jetzt dynamisch das Öffnen und Schließen von modalen Dialogen und Benutzeraufforderungen ([Firefox-Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere offene Aufforderungen behandelt werden ([Firefox-Bug 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Push-Funktionen sind jetzt standardmäßig deaktiviert, um das Entfernen von Teilen des DOM und zusätzliche Benachrichtigungen zu vermeiden ([Firefox-Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrund-Tabs, wenn Firefox auf eine Niederspeichersituation trifft, ist jetzt deaktiviert — dies interagiert schlecht mit der Automatisierung beim Wechsel zwischen Tabs ([Firefox-Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Die [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) Methode hat jetzt neue verfügbare Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox-Bug 1547669](https://bugzil.la/1547669)).

### Weitere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen außer denen auf der Whitelist zu sperren ([Firefox-Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 69 — Eine Geschichte von Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## Ältere Versionen

{{Firefox_for_developers}}
