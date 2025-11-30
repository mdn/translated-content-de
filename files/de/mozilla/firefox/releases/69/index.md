---
title: Firefox 69 Versionshinweise für Entwickler
short-title: Firefox 69
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 69, die Entwickler betreffen. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen zu diagnostizieren, welcher Code eine Seite als Reaktion auf Browserevents ausführt. Sie können spezifische Typen wählen, wie `click` oder `keydown`, oder ganze Kategorien von Ereignissen, wie alle Maus-Eingabeveranstaltungen. ([Firefox Fehler 1526082](https://bugzil.la/1526082)).
- Skripte, die in der [Quelltextlistenansicht](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können jetzt über die _Datei herunterladen_ Kontextmenüoption gespeichert werden ([Firefox Fehler 888161](https://bugzil.la/888161)).
- In der Quelltextlistenansicht des Debuggers werden geladene Erweiterungen mit ihrem Namen, anstatt nur ihrer [UUID](/de/docs/Garber/UUID) ([Firefox Fehler 1486416](https://bugzil.la/1486416)) aufgelistet, was es deutlich einfacher macht, den Erweiterungscode zu finden, den Sie debuggen möchten.
- Der Debugger lädt jetzt signifikant schneller durch das verzögerte Laden von Skripten ([Firefox Fehler 1527488](https://bugzil.la/1527488)).

#### Konsole

- [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) Nachrichten von [Tracking-Schutzfehlern](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert, um das Rauschen durch wiederholt blockierte Ressourcen und Speicherzugriffe zu reduzieren ([Firefox Fehler 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können durch Speichern in einer Datei oder Kopieren in die Zwischenablage über ein neues Kontextmenüelement _Export visible messages to_ geteilt werden ([Firefox Fehler 1517728](https://bugzil.la/1517728)).
- Die Werkzeugleiste der Konsole reduziert jetzt responsiv ihre Höhe in eine einzelne Zeile, um vertikalen Platz zu sparen ([Firefox Fehler 972530](https://bugzil.la/972530)).
- Nachrichten aus Inhalten können jetzt in der Konsole ausgeblendet werden, um sich auf Protokolle aus der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox Fehler 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content) blockiert wurden, werden jetzt im Netzwerk-Panel mit Details zum Grund angezeigt ([Firefox Fehler 1556451](https://bugzil.la/1556451)).
- Eine neue optional aktivierbare _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox Fehler 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie über ein Element im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) schweben, zeigt die erscheinende Infobar jetzt an, dass ein Element ein Flex-Container oder Flex-Element ist ([Firefox Fehler 1521188](https://bugzil.la/1521188)).
- Beim Inspektieren einer Seite, die ein Raster mit einem Unterraster enthält, werden die Überlagerungs-Linien des Elterngrids angezeigt, wann immer die Linien des Unterrasters angezeigt werden; wenn das Überlagerungskontrollkästchen des Elterraster deaktiviert ist, sind seine Linien durchscheinend ([Firefox Fehler 1550519](https://bugzil.la/1550519)).

#### Remote-Debugging

- Für unsere mobilen Webentwickler haben wir das Remote-Debugging vom alten WebIDE in ein neu gestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, was die Erfahrung, [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB zu debuggen, erheblich verbessert ([Firefox Fehler 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der DevTools-Panels wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox Fehler 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich näher an der Spezifikation zu orientieren, lädt die Textspur, die einem {{HTMLElement("track")}}-Element zugeordnet ist, die WebVTT-Datei mit den Text-Cues nicht mehr, wenn das Element in seinem standardmäßig `disabled` [`mode`](/de/docs/Web/API/TextTrack/mode) erstellt wird. Um auf die Cues zuzugreifen oder diese zu manipulieren, wenn der `mode` `disabled` ist, ändern Sie den `mode` entweder in `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox Fehler 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML-Element `<keygen>` wurde aus Firefox entfernt. Es wurde schon vor einiger Zeit veraltet, und sein Zweck wurde allgemein durch andere Technologien ersetzt ([Firefox Fehler 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces` Wert der {{cssxref("white-space")}} Eigenschaft implementiert ([Firefox Fehler 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können jetzt auch als CSS-Eigenschaften definiert werden ([Firefox Fehler 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}} Selektor — der verwendet wird, um die Beschriftungen ("Cues") zu stylen, die durch [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden — setzt jetzt die Einschränkungen durch, welche CSS-Eigenschaften innerhalb von Cues verwendet werden dürfen, gemäß der Spezifikation ([Firefox Fehler 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften, die auf {{cssxref("::marker")}} angewendet werden dürfen, gemäß der Spezifikation eingeschränkt ([Firefox Fehler 1552578](https://bugzil.la/1552578)).
- Die Eigenschaften {{cssxref("overflow-block")}} und {{cssxref("overflow-inline")}} wurden implementiert ([Firefox Fehler 1470695](https://bugzil.la/1470695)).
- Wir haben die Fähigkeit hinzugefügt, die Unterstützung eines Selektors bei der Verwendung von CSS-Feature-Abfragen ({{cssxref("@supports")}}) mit der `selector()` Methode zu testen ([Firefox Fehler 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}} Eigenschaft — die angibt, ob der Benutzer in der Lage ist, Text im betroffenen Element auszuwählen oder nicht — wurde nun ohne Präfix implementiert ([Firefox Fehler 1492739](https://bugzil.la/1492739)).
- Wir haben lokalspezifisches Groß- und Kleinschreibverhalten für Litauisch implementiert ([Firefox Fehler 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel gezeigt](/de/docs/Web/CSS/Reference/Properties/text-transform#example_using_lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}} Eigenschaft von CSS Text implementiert ([Firefox Fehler 1011369](https://bugzil.la/1011369) und [Firefox Fehler 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}} Eigenschaft — die es Entwicklern ermöglicht, zu spezifizieren, dass ein Element und seine Inhalte größtenteils unabhängig vom Rest des DOM-Baums sind — wurde implementiert ([Firefox Fehler 1487493](https://bugzil.la/1487493)).

### SVG

- Wir haben die Unterstützung für gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox Fehler 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox Fehler 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox Fehler 1555464](https://bugzil.la/1555464)). Siehe auch [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.
- Die Promise-Zurückweisungsereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind jetzt standardmäßig aktiviert ([Firefox Fehler 1362272](https://bugzil.la/1362272)). Um mehr darüber zu erfahren, wie diese funktionieren, siehe [Promise-Zurückweisungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Wildcard-Wert `*` für Anfragen ohne Anmeldedaten ([Firefox Fehler 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch in Firefox 68 ESR übertragen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox Fehler 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox Fehler 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden jetzt in Workern unterstützt ([Firefox Fehler 1420580](https://bugzil.la/1420580)).
- Die Eigenschaften `pageX` und `pageY` wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um besser mit der Spezifikation übereinzustimmen ([Firefox Fehler 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht mehr für die Schnittstellen [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent), die alle von `UIEvent` erben, bereitgestellt.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind jetzt implementiert ([Firefox Fehler 1557121](https://bugzil.la/1557121)).
- `DOMMatrixReadOnly.fromMatrix()` wurde implementiert ([Firefox Fehler 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die sech Parameter Version der [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) Methode ([Firefox Fehler 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX) und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind jetzt alle optional, gemäß der Spezifikation ([Firefox Fehler 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) offenbaren nicht mehr, ob ein Benutzer 32-Bit-Firefox auf einem 64-Bit-OS verwendet ([Firefox Fehler 1559747](https://bugzil.la/1559747)). Sie geben nun `Linux x86_64` statt `Linux i686 on x86_64` und `Win64` statt `WOW64` an.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden auf [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine merklichen Auswirkungen auf Ihre Arbeit haben. Insbesondere die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) wurden verschoben. Ebenso die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedene Eigenschaften ([Firefox Fehler 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox Fehler 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Zur Verbesserung der Benutzersicherheit und im Einklang mit den neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) Spezifikation wird die Eigenschaft [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) nicht mehr bereitgestellt, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und so weiter zu verwenden, stellen Sie sicher, dass Ihre Inhalte mithilfe von {{Glossary("HTTPS", "HTTPS")}} geladen werden ([Firefox Fehler 1528031](https://bugzil.la/1528031)).
- Die Eigenschaft [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) der Web Audio API gibt jetzt den tatsächlichen Wert der Eigenschaft zu der aktuellen Zeit zurück, wobei alle geplanten oder graduierten Wertänderungen berücksichtigt werden. Zuvor gab Firefox nur den zuletzt explizit gesetzten Wert zurück (wie durch Verwendung des `value` Setters) ([Firefox Fehler 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue, lexikographische, Sortierung für Tracks zu verwenden. Zuvor war die Track-Sortierung dem einzelnen Browser überlassen und konnte sich sogar willkürlich ändern. Zusätzlich löst das Erstellen eines `MediaStreamAudioSourceNode` mit einem Stream, der keine Audio-Tracks hat, jetzt eine `InvalidStateError` Ausnahme aus ([Firefox Fehler 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) sind jetzt als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Objekts enthalten, das durch Aufrufe an [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox Fehler 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox Fehler 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Andere

- Marionette behandelt jetzt das Öffnen und Schließen von Modaldialogen und Benutzereingabeaufforderungen dynamisch ([Firefox Fehler 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere geöffnete Aufforderungen behandelt werden ([Firefox Fehler 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Push-Features sind jetzt standardmäßig deaktiviert, um das Entfernen von Teilen des DOMs und zusätzliche Benachrichtigungen zu vermeiden ([Firefox Fehler 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrund-Tabs, wenn Firefox auf ein Speichermangelzustand stößt, ist jetzt deaktiviert — dies wirkt sich schlecht auf die Automatisierung beim Wechseln zwischen Tabs aus ([Firefox Fehler 1553748](https://bugzil.la/1553748)).

## Änderungen für Erweiterungsentwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) bietet jetzt neue Optionen an — `includePinned` und `includeSearchShortcuts` ([Firefox Fehler 1547669](https://bugzil.la/1547669)).

### Weitere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen außer denen, die auf der Whitelist stehen, zu blockieren ([Firefox Fehler 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks Veröffentlichungsartikel: [Firefox 69 — eine Geschichte von Resize Observer, Microtasks, CSS, und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)
