---
title: Firefox 69 für Entwickler
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 69, die Entwickler betreffen werden. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen, den Code zu diagnostizieren, den eine Seite als Antwort auf Browserevents ausführt. Sie können spezifische Typen auswählen, wie `click` oder `keydown`, oder ganze Kategorien von Events, wie alle Maus-Eingabereignisse. ([Firefox Fehler 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Quellenlistenfenster](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können nun über die _Download-Datei_-Option im Kontextmenü gespeichert werden ([Firefox Fehler 888161](https://bugzil.la/888161)).
- Im Quellenlistenfenster des Debuggers werden geladene Erweiterungen nun mit ihren Namen angezeigt, anstatt nur mit ihrer {{Glossary("UUID", "UUID")}} ([Firefox Fehler 1486416](https://bugzil.la/1486416)), was es wesentlich einfacher macht, den zu debuggenden Erweiterungscode zu finden.
- Der Debugger lädt nun durch Lazy-Loading-Skripte erheblich schneller ([Firefox Fehler 1527488](https://bugzil.la/1527488)).

#### Konsole

- Nachrichten von [Tracking-Schutz-Fehlern](/de/docs/Web/Privacy/Firefox_tracking_protection), [CSP-Fehlern](/de/docs/Web/HTTP/CSP) und [CORS-Fehlern](/de/docs/Web/HTTP/CORS/Errors) in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) werden automatisch gruppiert, um Lärm durch wiederholt blockierte Ressourcen und Speichervorgänge zu reduzieren ([Firefox Fehler 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Protokolle in der Konsole können geteilt werden, indem sie in eine Datei gespeichert oder in die Zwischenablage kopiert werden, über ein neues Kontextmenü-Element _Exportiere sichtbare Nachrichten nach_ ([Firefox Fehler 1517728](https://bugzil.la/1517728)).
- Die Werkzeugleiste der Konsole reduziert jetzt ihre Höhe responsiv auf eine einzelne Zeile, um vertikalen Platz zu sparen ([Firefox Fehler 972530](https://bugzil.la/972530)).
- Nachrichten aus Inhalten können jetzt in der Konsole ausgeblendet werden, um sich auf Protokolle der Firefox-UI zu konzentrieren ([Firefox Fehler 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/CSP) oder [Mixed Content](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden nun im Netzwerk-Panel angezeigt, mit Details zum Grund ([Firefox Fehler 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox Fehler 1341155](https://bugzil.la/1341155)).

#### Inspektor

- Wenn Sie in den [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) über ein Element fahren, zeigt die Infobar jetzt an, dass ein Element ein Flex-Container oder Flex-Element ist ([Firefox Fehler 1521188](https://bugzil.la/1521188)).
- Beim Inspizieren einer Seite mit einem Raster mit einem Unterraster werden die Überlagerungslinien des Elternraster angezeigt, wann immer die Linien des Unterraster angezeigt werden; wenn das Überlagerungs-Kontrollkästchen des Elternraster nicht ausgewählt ist, sind dessen Linien durchsichtig ([Firefox Fehler 1550519](https://bugzil.la/1550519)).

#### Fern-Entwicklung

- Für unsere mobilen Webentwickler haben wir das Fern-Debugging von der alten WebIDE in ein neu gestaltetes [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) migriert, was das Debugging von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten per USB erheblich verbessert ([Firefox Fehler 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge des DevTools-Panels wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox Fehler 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich stärker an die Spezifikation zu halten, lädt das Text-Track, das mit einem {{HTMLElement("track")}}-Element verknüpft ist, die WebVTT-Datei, die die Text-Cues enthält, nicht mehr, wenn das Element in seinem Standard-`disabled`-[`mode`](/de/docs/Web/API/TextTrack/mode) erstellt wird. Um auf die Cues zuzugreifen oder diese zu manipulieren, wenn der `mode` auf `disabled` gesetzt ist, ändern Sie den `mode` auf entweder `started` oder `hidden`; dies wird das Laden der WebVTT-Daten auslösen ([Firefox Fehler 1550633](https://bugzil.la/1550633)).

#### Entfernung

- Das HTML-Element `<keygen>` wurde aus Firefox entfernt. Es wurde schon vor einiger Zeit als veraltet markiert, und sein Zweck ist weitgehend von anderen Technologien ersetzt worden ([Firefox Fehler 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den Wert `break-spaces` der {{cssxref("white-space")}}-Eigenschaft implementiert ([Firefox Fehler 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können nun auch als CSS-Eigenschaften definiert werden ([Firefox Fehler 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}}-Selektor — verwendet zum Stylen der von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigten Untertitel ("Cues") — erzwingt nun die Einschränkungen bezüglich der CSS-Eigenschaften, die innerhalb von Cues verwendet werden dürfen, gemäß der Spezifikation ([Firefox Fehler 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften beschränkt, die auf {{cssxref("::marker")}} anwendbar sind, gemäß der Spezifikation ([Firefox Fehler 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}}- und {{cssxref("overflow-inline")}}-Eigenschaften wurden implementiert ([Firefox Fehler 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, die Unterstützung eines Selektors zu testen, wenn CSS-Feature-Anfragen ({{cssxref("@supports")}}) verwendet werden, mit der `selector()`-Methode ([Firefox Fehler 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}}-Eigenschaft — die angibt, ob der Benutzer Text des betroffenen Elements auswählen kann oder nicht — wurde unverändert implementiert ([Firefox Fehler 1492739](https://bugzil.la/1492739)).
- Wir haben das lokale, spezifische Umwandlungsverhalten für Litauisch implementiert ([Firefox Fehler 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel zu sehen](/de/docs/Web/CSS/text-transform#lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}}-Eigenschaft von CSS-Text implementiert ([Firefox Fehler 1011369](https://bugzil.la/1011369) und [Firefox Fehler 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}}-Eigenschaft — die es Entwicklern ermöglicht, zu definieren, dass ein Element und sein Inhalt weitgehend unabhängig vom Rest des DOM-Baums sind — wurde implementiert ([Firefox Fehler 1487493](https://bugzil.la/1487493)).

### SVG

- Wir haben die Unterstützung für Gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox Fehler 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox Fehler 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Öffentliche Klasseneigenschaften](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox Fehler 1555464](https://bugzil.la/1555464)). Weitere Informationen finden Sie unter [Klasseneigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).
- Die Promise-Rejections-Ereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind jetzt standardmäßig aktiviert ([Firefox Fehler 1362272](https://bugzil.la/1362272)). Um mehr darüber zu lernen, wie diese funktionieren, sehen Sie sich die [Promise-Rejections-Ereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events) an.

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}, und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Platzhalterwert "`*`" für Anfragen ohne Anmeldedaten ([Firefox Fehler 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch für Firefox 68 ESR übernommen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox Fehler 1543839](https://bugzil.la/1543839)).
- Die Microtask API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox Fehler 1480236](https://bugzil.la/1480236)).

#### DOM

- Die Objekte [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint), und verwandte Objekte werden jetzt in Web-Workern unterstützt ([Firefox Fehler 1420580](https://bugzil.la/1420580)).
- Die `pageX`- und `pageY`-Eigenschaften wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um eine bessere Spezifikationskonformität zu erreichen ([Firefox Fehler 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht mehr für die [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) Schnittstellen bereitgestellt, die alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer), und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind jetzt implementiert ([Firefox Fehler 1557121](https://bugzil.la/1557121)).
- [`DOMMatrix.fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix) wurde implementiert ([Firefox Fehler 1560462](https://bugzil.la/1560462)).
- Wir unterstützen jetzt die Version der Methode [`DOMMatrix.scale()`](/de/docs/Web/API/DOMMatrix/scale) mit sechs Parametern ([Firefox Fehler 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrix.translate()`](/de/docs/Web/API/DOMMatrix/translate), [`DOMMatrix.skewX()`](/de/docs/Web/API/DOMMatrix/skewX), und [`DOMMatrix.skewY()`](/de/docs/Web/API/DOMMatrix/skewY) sind jetzt alle optional, gemäß der Spezifikation ([Firefox Fehler 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform), und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) offenbaren nicht mehr, ob ein Benutzer ein 32-Bit-Firefox auf einem 64-Bit-OS ausführt ([Firefox Fehler 1559747](https://bugzil.la/1559747)). Stattdessen wird nun `Linux x86_64` anstelle von `Linux i686 on x86_64` und `Win64` anstatt `WOW64` gesagt.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden zu [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine spürbare Auswirkung auf Ihre Arbeit haben. Insbesondere wurden die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open), und [`write()`](/de/docs/Web/API/Document/write) verschoben. Ebenso die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedene Eigenschaften ([Firefox Fehler 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox Fehler 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Zur Verbesserung der Benutzersicherheit und im Einklang mit den neuesten Versionen der [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API)-Spezifikation ist die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und so weiter zu verwenden, muss Ihr Inhalt über {{Glossary("HTTPS", "HTTPS")}} geladen werden ([Firefox Fehler 1528031](https://bugzil.la/1528031)).
- Die [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft der Web Audio API gibt jetzt den tatsächlichen Wert der Eigenschaft zum aktuellen Zeitpunkt zurück, wobei alle geplanten oder abgestuften Wertänderungen berücksichtigt werden. Zuvor gab Firefox nur den zuletzt explizit festgelegten Wert zurück (wie durch die Verwendung des `value`-Setters) ([Firefox Fehler 893020](https://bugzil.la/893020)).
- Wir haben den [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue, lexikographische, Reihenfolge für Tracks zu verwenden. Zuvor war die Track-Reihenfolge dem einzelnen Browser überlassen und konnte sich sogar willkürlich ändern. Zudem wirft der Versuch, einen `MediaStreamAudioSourceNode` mit einem Stream zu erstellen, der keine Audiotracks hat, nun eine `InvalidStateError`-Ausnahme ([Firefox Fehler 1553215](https://bugzil.la/1553215)).
- Die Einstellungen [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId), und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) sind nun in die [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objektmitglieder einbezogen, die durch Aufrufe von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben werden ([Firefox Fehler 1537986](https://bugzil.la/1537986)).

#### Entfernen

- Die Methode [`DOMMatrix.scaleNonUniformSelf()`](/de/docs/Web/API/DOMMatrix/scaleNonUniformSelf) wurde entfernt ([Firefox Fehler 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Sonstiges

- Marionette handhabt jetzt dynamisch das Öffnen und Schließen von modalen Dialogen und Benutzeraufforderungen ([Firefox Fehler 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere offene Aufforderungen behandelt werden ([Firefox Fehler 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Push-Funktionen sind jetzt standardmäßig deaktiviert, um die Entfernung von Teilen des DOM und zusätzliche Benachrichtigungen zu vermeiden ([Firefox Fehler 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrundtabs, wenn Firefox auf eine Niedrigspeicherbedingung stößt, ist jetzt deaktiviert — dies interagiert schlecht mit der Automatisierung beim Umschalten zwischen Tabs ([Firefox Fehler 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) verfügt jetzt über neue Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox Fehler 1547669](https://bugzil.la/1547669)).

### Weitere Änderungen

- Es gibt jetzt [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen außer denen, die auf die Whitelist gesetzt wurden, zu sperren ([Firefox Fehler 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 69 — eine Geschichte von Resize Observer, Microtasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## Ältere Versionen

{{Firefox_for_developers}}
