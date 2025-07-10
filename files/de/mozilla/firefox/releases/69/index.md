---
title: Firefox 69 für Entwickler
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 69, die Entwickler betreffen. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen herauszufinden, welcher Code einer Seite in Reaktion auf Browserevents ausgeführt wird. Sie können spezifische Typen, wie `click` oder `keydown`, oder ganze Kategorien von Ereignissen auswählen, wie alle Maus-Eingaben. ([Firefox-Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Quellenlistenbereich](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können nun über die Kontextmenüoption _Datei herunterladen_ gespeichert werden ([Firefox-Bug 888161](https://bugzil.la/888161)).
- Im Quellenlistenbereich des Debuggers werden geladene Erweiterungen nun mit ihrem Namen anstatt nur ihrer {{Glossary("UUID", "UUID")}} aufgelistet ([Firefox-Bug 1486416](https://bugzil.la/1486416)), was es viel einfacher macht, den Erweiterungscode zu finden, den Sie debuggen möchten.
- Der Debugger lädt nun deutlich schneller durch Lazy-Loading-Scripts ([Firefox-Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html)-Nachrichten von [Tracking-Schutz-Fehlern](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert, um die Flut an wiederholten blockierten Ressourcen und Speicherzugriffen zu reduzieren ([Firefox-Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können durch Speichern in einer Datei oder durch Kopieren in die Zwischenablage über einen neuen Kontextmenüpunkt _Sichtbare Nachrichten exportieren in_ geteilt werden ([Firefox-Bug 1517728](https://bugzil.la/1517728)).
- Die Symbolleiste der Konsole reduziert nun reaktionsschnell ihre Höhe auf eine einzelne Zeile, um vertikalen Platz zu sparen ([Firefox-Bug 972530](https://bugzil.la/972530)).
- Nachrichten aus dem Inhalt können nun in der Konsole ausgeblendet werden, um sich auf Protokolle der Firefox-Oberfläche zu konzentrieren ([Firefox-Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Mixed Content](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden jetzt im Netzwerk-Panel angezeigt, mit Details zum Grund ([Firefox-Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox-Bug 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie mit der Maus über ein Element im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) fahren, zeigt die Infobar, die erscheint, jetzt an, dass ein Element ein Flex-Container oder Flex-Element ist ([Firefox-Bug 1521188](https://bugzil.la/1521188)).
- Beim Untersuchen einer Seite, die ein Raster mit einem Unterraster enthält, werden die Überlagerungslinien des Elternrasters angezeigt, wann immer die Linien des Unterrasters angezeigt werden; wenn das Überlagerungs-Checkbox des Elternrasters nicht ausgewählt ist, sind seine Linien durchscheinend ([Firefox-Bug 1550519](https://bugzil.la/1550519)).

#### Fern-Debugging

- Für unsere mobilen Webentwickler wurde das Remote-Debugging vom alten WebIDE in ein neugestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, was das Debuggen von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB erheblich verbessert ([Firefox-Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der Registerkarten der Entwicklerwerkzeuge wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox-Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich enger an die Spezifikation anzupassen, lädt die Textspur, die mit einem {{HTMLElement("track")}} Element verbunden ist, die WebVTT-Datei mit den Text-Hinweisen nicht mehr, wenn das Element in seinem standardmäßigen `disabled`-[`modus`](/de/docs/Web/API/TextTrack/mode) erstellt wird. Um auf die Hinweise zuzugreifen oder sie zu manipulieren, wenn der `modus` `disabled` ist, ändern Sie den `modus` auf entweder `started` oder `hidden`; dies löst das Laden der WebVTT-Daten aus ([Firefox-Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML-Element `<keygen>` wurde aus Firefox entfernt. Es wurde vor einiger Zeit abgelehnt, und sein Zweck wurde im Allgemeinen durch andere Technologien ersetzt ([Firefox-Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces`-Wert der {{cssxref("white-space")}}-Eigenschaft implementiert ([Firefox-Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können jetzt auch als CSS-Eigenschaften definiert werden ([Firefox-Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}}-Selektor – verwendet, um die Untertitel ("Hinweise") zu stylen, die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden – setzt jetzt die Einschränkungen durch, welche CSS-Eigenschaften innerhalb von Hinweisen verwendet werden dürfen, gemäß der Spezifikation ([Firefox-Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften, die auf {{cssxref("::marker")}} anwendbar sein können, laut der Spezifikation beschränkt ([Firefox-Bug 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}}- und {{cssxref("overflow-inline")}}-Eigenschaften wurden implementiert ([Firefox-Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, die Unterstützung eines Selektors in CSS-Feature-Abfragen ({{cssxref("@supports")}}) mit der `selector()`-Methode zu testen ([Firefox-Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}}-Eigenschaft – die angibt, ob der Nutzer Text im betroffenen Element auswählen kann oder nicht – wurde ohne Präfixe implementiert ([Firefox-Bug 1492739](https://bugzil.la/1492739)).
- Wir haben lokalspezifische Groß- und Kleinschreibung für Litauisch implementiert ([Firefox-Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel gezeigt](/de/docs/Web/CSS/text-transform#example_using_lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}}-Eigenschaft von CSS Text implementiert ([Firefox-Bug 1011369](https://bugzil.la/1011369) und [Firefox-Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}}-Eigenschaft – die es Entwicklern ermöglicht zu definieren, dass ein Element und seine Inhalte weitgehend unabhängig vom Rest des DOM-Baums sind – wurde implementiert [Firefox-Bug 1487493](https://bugzil.la/1487493).

### SVG

- Wir haben Unterstützung für gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox-Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox-Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox-Bug 1555464](https://bugzil.la/1555464)). Siehe auch [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Promise-Ablehnungsereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind nun standardmäßig aktiviert ([Firefox-Bug 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren nun einen Platzhalterwert `*` für Anfragen ohne Anmeldeinformationen ([Firefox-Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch in Firefox 68 ESR übernommen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox-Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox-Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die Objekte [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden nun in Workern unterstützt ([Firefox-Bug 1420580](https://bugzil.la/1420580)).
- Die Eigenschaften `pageX` und `pageY` wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um die Einhaltung der Spezifikation zu verbessern ([Firefox-Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht länger in den Schnittstellen [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) angezeigt, die alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind jetzt implementiert ([Firefox-Bug 1557121](https://bugzil.la/1557121)).
- [`DOMMatrixReadOnly.fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static) wurde implementiert ([Firefox-Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die Sechs-Parameter-Version der Methode [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) ([Firefox-Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX) und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind nun alle optional, zum Nachkommen der Spezifikation ([Firefox-Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) zeigen nicht länger an, ob ein Nutzer 32-Bit Firefox auf einem 64-Bit-Betriebssystem verwendet ([Firefox-Bug 1559747](https://bugzil.la/1559747)). Sie zeigen jetzt `Linux x86_64` anstelle von `Linux i686 on x86_64` und `Win64` anstelle von `WOW64`.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden zu [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine wesentlichen Auswirkungen auf Ihre Arbeit haben. Insbesondere die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) wurden verschoben. Ebenso wurden die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedene Eigenschaften ([Firefox-Bug 1549560](https://bugzil.la/1549560)) verschoben.
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox-Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Zum Schutz der Benutzersicherheit und zur Anpassung an die neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API)-Spezifikation ist die Eigenschaft [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und ähnliche Funktionen zu verwenden, stellen Sie sicher, dass Ihr Inhalt über {{Glossary("HTTPS", "HTTPS")}} geladen wird ([Firefox-Bug 1528031](https://bugzil.la/1528031)).
- Die Eigenschaft [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) der Web Audio API gibt nun den tatsächlichen Wert der Eigenschaft zum aktuellen Zeitpunkt zurück, wobei alle geplanten oder abgestuften Wertänderungen berücksichtigt werden. Bisher hat Firefox nur den zuletzt explizit gesetzten Wert (wie durch Verwendung des `value`-Setters) zurückgegeben ([Firefox-Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue, lexikographische, Anordnung für Tracks zu verwenden. Zuvor war die Track-Anordnung auf den individuellen Browser beschränkt und konnte sogar willkürlich geändert werden. Außerdem löst das Erstellen eines `MediaStreamAudioSourceNode` unter Verwendung eines Streams, der keine Audiotracks hat, nun eine `InvalidStateError`-Ausnahme aus ([Firefox-Bug 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) sind nun als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekts enthalten, das durch Aufrufe von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox-Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox-Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Sonstiges

- Marionette behandelt nun dynamisch das Öffnen und Schließen von modalen Dialogen und Benutzeraufforderungen ([Firefox-Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere offene Aufforderungen behandelt werden ([Firefox-Bug 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Push-Funktionen sind nun standardmäßig deaktiviert, um das Entfernen von Teilen des DOM und zusätzliche Benachrichtigungen zu vermeiden ([Firefox-Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrundreitern, wenn Firefox in einen Niedrigspeicherzustand gerät, ist nun deaktiviert, da dies bei der Automatisierung beim Wechseln zwischen Tabs schlecht interagiert ([Firefox-Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist nun standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hat jetzt neue Optionen – `includePinned` und `includeSearchShortcuts` ([Firefox-Bug 1547669](https://bugzil.la/1547669)).

### Weitere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen zu blockieren, außer denen, die auf der Whitelist stehen ([Firefox-Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Release-Post von Hacks: [Firefox 69 — eine Geschichte von Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## Ältere Versionen

{{Firefox_for_developers}}
