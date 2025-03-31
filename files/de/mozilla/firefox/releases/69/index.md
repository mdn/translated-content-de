---
title: Firefox 69 für Entwickler
slug: Mozilla/Firefox/Releases/69
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 69, die Entwickler betreffen werden. Firefox 69 wurde am 3. September 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) ermöglichen es Ihnen, zu diagnostizieren, welchen Code eine Seite als Reaktion auf Browserevents ausführt. Sie können spezifische Typen auswählen, wie `click` oder `keydown`, oder ganze Kategorien von Events, wie alle Maus-Input-Events. ([Firefox Bug 1526082](https://bugzil.la/1526082)).
- Skripte, die im [Source List Pane](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) des Debuggers angezeigt werden, können nun über die Kontextmenüoption _Datei herunterladen_ gespeichert werden ([Firefox Bug 888161](https://bugzil.la/888161)).
- Im Source List Pane des Debuggers werden geladene Erweiterungen mit ihrem Namen anstelle ihrer {{Glossary("UUID", "UUID")}} aufgelistet ([Firefox Bug 1486416](https://bugzil.la/1486416)), was es erheblich erleichtert, den Code der Erweiterung zu finden, die Sie debuggen möchten.
- Der Debugger lädt nun merklich schneller durch Lazy-Loading von Skripten ([Firefox Bug 1527488](https://bugzil.la/1527488)).

#### Konsole

- Nachrichten in der [Browserkonsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) über [Tracking-Schutzfehler](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection), [CSP-Fehler](/de/docs/Web/HTTP/Guides/CSP) und [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors) werden automatisch gruppiert, um das Rauschen von wiederholten blockierten Ressourcen und Speicherzugriffen zu reduzieren ([Firefox Bug 1522396](https://bugzil.la/1522396)).
- Alle sichtbaren Logs in der Konsole können durch Speichern in eine Datei oder Kopieren in die Zwischenablage über einen neuen Kontextmenüpunkt _Sichtbare Nachrichten exportieren nach_ geteilt werden ([Firefox Bug 1517728](https://bugzil.la/1517728)).
- Die Werkzeugleiste der Konsole reduziert ihre Höhe jetzt reaktionsschnell auf eine einzelne Zeile, um vertikalen Platz zu sparen ([Firefox Bug 972530](https://bugzil.la/972530)).
- Nachrichten von Inhalten können in der Konsole ausgeblendet werden, um sich auf Logs der Firefox-Benutzeroberfläche zu konzentrieren ([Firefox Bug 1523842](https://bugzil.la/1523842)).

#### Netzwerk

- Ressourcen, die aufgrund von [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Mixed Content](/de/docs/Web/Security/Mixed_content) blockiert wurden, werden nun im Netzwerk-Panel angezeigt, mit Details zum Grund ([Firefox Bug 1556451](https://bugzil.la/1556451)).
- Eine neue optionale _URL_-Spalte im Netzwerk-Panel kann aktiviert werden, um die vollständige URL für Ressourcen anzuzeigen ([Firefox Bug 1341155](https://bugzil.la/1341155)).

#### Inspector

- Wenn Sie über ein Element im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) fahren, wird in der jetzt erscheinenden Infobar angezeigt, ob ein Element ein Flex-Container oder ein Flex-Item ist ([Firefox Bug 1521188](https://bugzil.la/1521188)).
- Beim Inspizieren einer Seite, die ein Gitter mit einem Untergitter enthält, werden die Überlagerungslinien des übergeordneten Gitters immer angezeigt, wenn die Linien des Untergitters angezeigt werden; wenn das Kontrollkästchen für die Überlagerung des übergeordneten Gitters nicht ausgewählt ist, sind dessen Linien transluzent ([Firefox Bug 1550519](https://bugzil.la/1550519)).

#### Remote-Debugging

- Für unsere mobilen Webentwickler haben wir das Remote-Debugging vom alten WebIDE auf eine neu gestaltete [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) umgestellt, was die Erfahrung des Debuggens von [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) auf entfernten Geräten über USB erheblich verbessert ([Firefox Bug 1462208](https://bugzil.la/1462208)).

#### Allgemein

- Die Reihenfolge der DevTools-Panels wurde geändert, um die Beliebtheit widerzuspiegeln ([Firefox Bug 1558630](https://bugzil.la/1558630)).

### HTML

- Um sich enger an die Spezifikation anzupassen, lädt die dem {{HTMLElement("track")}}-Element zugeordnete Textspur nicht mehr die WebVTT-Datei mit den Text-Hinweisen, wenn das Element in seinem standardmäßigen `disabled`-[`mode`](/de/docs/Web/API/TextTrack/mode) erstellt wird. Um auf die Hinweise zuzugreifen oder sie zu manipulieren, wenn der `mode` auf `disabled` gesetzt ist, ändern Sie den `mode` auf entweder `started` oder `hidden`; dies löst das Laden der WebVTT-Daten aus ([Firefox Bug 1550633](https://bugzil.la/1550633)).

#### Entfernungen

- Das HTML-Element `<keygen>` wurde aus Firefox entfernt. Es wurde bereits vor einiger Zeit als veraltet markiert, und sein Zweck wurde im Allgemeinen durch andere Technologien ersetzt ([Firefox Bug 1315460](https://bugzil.la/1315460)).

### CSS

- Wir haben den `break-spaces`-Wert der {{cssxref("white-space")}}-Eigenschaft implementiert ([Firefox Bug 1351432](https://bugzil.la/1351432)).
- Die SVG-Geometrieattribute (wie {{SVGAttr("width")}} und {{SVGAttr("height")}}) können nun auch als CSS-Eigenschaften definiert werden ([Firefox Bug 1383650](https://bugzil.la/1383650)).
- Der {{cssxref("::cue")}}-Selektor — verwendet, um die Untertitel ("Hinweise") zu stylen, die von [WebVTT](/de/docs/Web/API/WebVTT_API) angezeigt werden — erzwingt nun die Einschränkungen, welche CSS-Eigenschaften innerhalb von Hinweisen verwendet werden dürfen, gemäß der Spezifikation ([Firefox Bug 1321488](https://bugzil.la/1321488)).
- Wir haben die Eigenschaften, die auf {{cssxref("::marker")}} angewendet werden dürfen, gemäß der Spezifikation eingeschränkt ([Firefox Bug 1552578](https://bugzil.la/1552578)).
- Die {{cssxref("overflow-block")}}- und {{cssxref("overflow-inline")}}-Eigenschaften wurden implementiert ([Firefox Bug 1470695](https://bugzil.la/1470695)).
- Wir haben die Möglichkeit hinzugefügt, in CSS-Feature-Queries ({{cssxref("@supports")}}) die Unterstützung eines Selektors mit der `selector()`-Methode zu testen ([Firefox Bug 1513643](https://bugzil.la/1513643)).
- Die {{cssxref("user-select")}}-Eigenschaft — die festlegt, ob der Benutzer den Text im betroffenen Element auswählen kann oder nicht — wurde ohne Präfix implementiert ([Firefox Bug 1492739](https://bugzil.la/1492739)).
- Wir haben das lokal-spezifische Groß- und Kleinschreibverhalten für Litauisch implementiert ([Firefox Bug 1322992](https://bugzil.la/1322992)), [wie in diesem Beispiel zu sehen](/de/docs/Web/CSS/text-transform#lowercase_lithuanian).
- Wir haben die {{cssxref("line-break")}}-Eigenschaft von CSS Text implementiert ([Firefox Bug 1011369](https://bugzil.la/1011369) und [Firefox Bug 1531715](https://bugzil.la/1531715)).
- Die {{cssxref("contain")}}-Eigenschaft — die Entwicklern erlaubt, festzulegen, dass ein Element und seine Inhalte weitgehend unabhängig vom Rest des DOM-Baums sind — wurde implementiert ([Firefox Bug 1487493](https://bugzil.la/1487493)).

### SVG

- Wir haben Unterstützung für gzip-komprimiertes SVG-in-OpenType hinzugefügt ([Firefox Bug 1359240](https://bugzil.la/1359240)).
- Die Methoden [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill) und [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke) wurden implementiert ([Firefox Bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes#field_declarations) sind standardmäßig aktiviert ([Firefox Bug 1555464](https://bugzil.la/1555464)). Weitere Informationen finden Sie unter [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).
- Die Promise-Ablehnungsereignisse [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) und [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event) sind nun standardmäßig aktiviert ([Firefox Bug 1362272](https://bugzil.la/1362272)). Erfahren Sie mehr darüber, wie diese funktionieren, unter [Promise-Ablehnungsereignisse](/de/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- Die HTTP-Header {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}} und {{HTTPHeader("Access-Control-Allow-Headers")}} akzeptieren jetzt einen Wildcard-Wert `*` für Anfragen ohne Anmeldedaten ([Firefox Bug 1309358](https://bugzil.la/1309358)). Diese Änderung wurde auch in Firefox 68 ESR übernommen.

### APIs

#### Neue APIs

- Die [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird standardmäßig unterstützt ([Firefox Bug 1543839](https://bugzil.la/1543839)).
- Die Microtask-API ([`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) und [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)) wurde implementiert ([Firefox Bug 1480236](https://bugzil.la/1480236)).

#### DOM

- Die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMPoint`](/de/docs/Web/API/DOMPoint) und verwandte Objekte werden jetzt in Workern unterstützt ([Firefox Bug 1420580](https://bugzil.la/1420580)).
- Die Eigenschaften `pageX` und `pageY` wurden von [`UIEvent`](/de/docs/Web/API/UIEvent) zu [`MouseEvent`](/de/docs/Web/API/MouseEvent) verschoben, um die Spezifikation besser einzuhalten ([Firefox Bug 1178763](https://bugzil.la/1178763)). Diese Eigenschaften werden nicht mehr den Schnittstellen [`CompositionEvent`](/de/docs/Web/API/CompositionEvent), [`FocusEvent`](/de/docs/Web/API/FocusEvent), [`InputEvent`](/de/docs/Web/API/InputEvent), [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) und [`TouchEvent`](/de/docs/Web/API/TouchEvent) ausgesetzt, die alle von `UIEvent` erben.
- Die Methoden [`Blob.text()`](/de/docs/Web/API/Blob/text), [`Blob.arrayBuffer()`](/de/docs/Web/API/Blob/arrayBuffer) und [`Blob.stream()`](/de/docs/Web/API/Blob/stream) sind jetzt implementiert ([Firefox Bug 1557121](https://bugzil.la/1557121)).
- [`DOMMatrixReadOnly.fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix) wurde implementiert ([Firefox Bug 1560462](https://bugzil.la/1560462)).
- Wir unterstützen nun die sech-Parameter-Version der Methode [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale) ([Firefox Bug 1397945](https://bugzil.la/1397945)).
- Die Argumente für [`DOMMatrixReadOnly.translate()`](/de/docs/Web/API/DOMMatrixReadOnly/translate), [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX) und [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY) sind nun alle optional, gemäß der Spezifikation ([Firefox Bug 1397949](https://bugzil.la/1397949)).
- Die Eigenschaften [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) und [`Navigator.oscpu`](/de/docs/Web/API/Navigator/oscpu) geben nicht mehr preis, ob ein Benutzer 32-Bit-Firefox auf einem 64-Bit-OS ausführt ([Firefox Bug 1559747](https://bugzil.la/1559747)). Sie sagen nun `Linux x86_64` anstelle von `Linux i686 on x86_64`, und `Win64` anstelle von `WOW64`.
- Die verbleibenden Methoden von [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) wurden zu [`Document`](/de/docs/Web/API/Document) verschoben. Dies sollte in den meisten Fällen keine nennenswerte Auswirkung auf Ihre Arbeit haben. Insbesondere wurden die Methoden [`close()`](/de/docs/Web/API/Document/close), [`open()`](/de/docs/Web/API/Document/open) und [`write()`](/de/docs/Web/API/Document/write) verschoben. Auch die verschiedenen editorbezogenen Methoden, einschließlich [`execCommand()`](/de/docs/Web/API/Document/execCommand) sowie verschiedene Eigenschaften ([Firefox Bug 1549560](https://bugzil.la/1549560)).
- Wir haben [`AbstractRange`](/de/docs/Web/API/AbstractRange) und [`StaticRange`](/de/docs/Web/API/StaticRange) implementiert ([Firefox Bug 1444847](https://bugzil.la/1444847)).

#### Medien, Web Audio und WebRTC

- Zur Verbesserung der Benutzersicherheit und im Einklang mit den neuesten Versionen der Spezifikation von [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) ist die Eigenschaft [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) nicht mehr vorhanden, wenn der Kontext unsicher ist. Um [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) und so weiter zu verwenden, stellen Sie sicher, dass Ihre Inhalte über {{Glossary("HTTPS", "HTTPS")}} geladen werden ([Firefox Bug 1528031](https://bugzil.la/1528031)).
- Die `value`-Eigenschaft des Web Audio API's [`AudioParam`](/de/docs/Web/API/AudioParam/value) gibt jetzt den tatsächlichen Wert der Eigenschaft zur aktuellen Zeit zurück, unter Berücksichtigung aller geplanten oder abgestuften Wertänderungen. Vorher gab Firefox nur den zuletzt explizit gesetzten Wert zurück (z.B. über den `value` Setter) ([Firefox Bug 893020](https://bugzil.la/893020)).
- Wir haben [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode) aktualisiert, um die neue lexikographische Reihenfolge für Tracks zu verwenden. Früher war die Track-Reihenfolge jedem Browser überlassen und konnte sogar willkürlich geändert werden. Darüber hinaus wirft der Versuch, einen `MediaStreamAudioSourceNode` mit einem Stream zu erstellen, der keine Audiotracks hat, jetzt eine `InvalidStateError`-Ausnahme ([Firefox Bug 1553215](https://bugzil.la/1553215)).
- Die [`facingMode`](/de/docs/Web/API/MediaTrackSettings/facingMode), [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) und [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) Einstellungen sind nun als Mitglieder des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Objekts enthalten, das durch Aufrufe von [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) zurückgegeben wird ([Firefox Bug 1537986](https://bugzil.la/1537986)).

#### Entfernungen

- Die Methode `DOMMatrix.scaleNonUniformSelf()` wurde entfernt ([Firefox Bug 1560119](https://bugzil.la/1560119)).

### WebDriver-Konformität (Marionette)

#### Sonstiges

- Marionette behandelt jetzt dynamisch das Öffnen und Schließen von Modaldialogen und Benutzeraufforderungen ([Firefox Bug 1477977](https://bugzil.la/1477977)), was auch bedeutet, dass mehrere geöffnete Eingabeaufforderungen behandelt werden ([Firefox Bug 1487358](https://bugzil.la/1487358)).
- Tracking-Schutz und DOM-Push-Funktionen sind jetzt standardmäßig deaktiviert, um die Entfernung von Teilen des DOMs und zusätzliche Benachrichtigungen zu vermeiden ([Firefox Bug 1542244](https://bugzil.la/1542244)).
- Das automatische Entladen von Hintergrund-Tabs, wenn Firefox auf einen Speichermangel trifft, ist jetzt deaktiviert — dies interagiert schlecht mit der Automatisierung beim Wechseln zwischen Tabs ([Firefox Bug 1553748](https://bugzil.la/1553748)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die [UserScripts API](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) ist jetzt standardmäßig aktiviert.
- Die Methode [`topSites.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) hat nun neue verfügbare Optionen — `includePinned` und `includeSearchShortcuts` ([Firefox Bug 1547669](https://bugzil.la/1547669)).

### Andere Änderungen

- Es gibt nun [Gruppenrichtlinienoptionen](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings), um alle Erweiterungen zu sperren, außer denen, die auf die Whitelist gesetzt wurden ([Firefox Bug 1522823](https://bugzil.la/1522823)).

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 69 — eine Geschichte von Resize Observer, Mikrotasks, CSS und DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## Ältere Versionen

{{Firefox_for_developers}}
