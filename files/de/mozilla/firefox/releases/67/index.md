---
title: Firefox 67 Versionshinweise für Entwickler
short-title: Firefox 67
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 67, die für Entwickler relevant sind. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Debugger-Updates:
  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den spezifischen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger unterbrechen soll ([Firefox-Bug 1528417](https://bugzil.la/1528417)).
  - [Log-Punkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es, während der Codeausführung spezifische Informationen an die Konsole auszugeben, ohne die Ausführung zu unterbrechen und ohne den Code ändern zu müssen.
  - Die [Scope-Mapping-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) erlaubt es Ihnen, die Variablen aus der Originalquelle einzusehen.
  - Sie können [Worker-Threads debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) direkt im Debugger.

- [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Updates:
  - Navigieren Sie mit der Tastatur durch Details in der Konsole ([Firefox-Bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K leert nun den Inhalt der Konsole auf macOS ([Firefox-Bug 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole leert, wird auch der Cache der Fehlermeldungen geleert ([Firefox-Bug 717611](https://bugzil.la/717611)).
  - Der Benutzer kann bestehende Module in die aktuelle Seite importieren ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
  - Ein neuer Kontextmenüpunkt erlaubt dem Benutzer, den Befehl **Link-Adresse kopieren** zu verwenden ([Firefox-Bug 1457111](https://bugzil.la/1457111)).
  - Das Klicken auf einen Link in der Konsole bewirkt das gleiche Verhalten wie in einem Inhaltsfenster ([Firefox-Bug 1466040](https://bugzil.la/1466040)).
  - Das Klicken auf den Quelllink für eine Codedatei im Konsolenpanel navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox-Bug 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer den Inhalt der Konsole gefiltert hat, wird ein Symbol hinzugefügt, um den Filter im Textfeld zu löschen ([Firefox-Bug 1525821](https://bugzil.la/1525821)).

- Verbesserungen im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):
  - Das [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Panel des Netzwerk-Monitors zeigt nun eine Benachrichtigung für Ressourcen an, die zu einem bekannten Tracker gehören ([Firefox-Bug 1485416](https://bugzil.la/1485416)).
  - In den [Anforderungslisten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerk-Monitor können Sie die sichtbaren Spalten und die Sortierung der Spalten steuern. Das Kontextmenü umfasst jetzt einen Befehl, um die Sortierparameter der Liste auf die Standardeinstellungen zurückzusetzen ([Firefox-Bug 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerk-Monitor an Ihren Workflow anpassen ([Firefox-Bug 1358414](https://bugzil.la/1358414)).

#### Entfernungen

- Die folgenden Entwicklerwerkzeug-Panels wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):
  - Canvas-Debugger ([Firefox-Bug 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox-Bug 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox-Bug 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge sind veraltet (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):
  - WebIDE ([Firefox-Bug 1539462](https://bugzil.la/1539462)).
  - Connect… Seite ([Firefox-Bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` werden keine zuvor gespeicherten Passwörter mehr automatisch ausfüllen ([Firefox-Bug 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}} Schlüsselwort wurde implementiert ([Firefox-Bug 1215878](https://bugzil.la/1215878)).
- Der `break-word` Wert der {{cssxref("word-break")}} Eigenschaft wird nun unterstützt ([Firefox-Bug 1296042](https://bugzil.la/1296042)).
- Die [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Medienfunktion wird nun unterstützt ([Firefox-Bug 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s größer als 32px sind nun nicht mehr erlaubt, um potenzielle Malware-Nutzung von großen Zeigern zu verhindern ([Firefox-Bug 1445844](https://bugzil.la/1445844)).

#### Entfernungen

- Die Verwendung der proprietären `-moz-binding` Eigenschaft ist nun auf Chrome- und UA-Stylesheets beschränkt ([Firefox-Bug 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und ist standardmäßig aktiviert ([Firefox-Bug 1435829](https://bugzil.la/1435829), [Firefox-Bug 1531830](https://bugzil.la/1531830)).
- Unterstützung für den dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) Vorschlag ist nun standardmäßig verfügbar ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
- Der [Hashbang-Parser](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) Vorschlag ist nun implementiert ([Firefox-Bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist nun `""` ([Firefox-Bug 1508996](https://bugzil.la/1508996)).
- Benutzeraktionen werden nun bei abgelehnten sowie erfüllten Aufrufen von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) bewahrt ([Firefox-Bug 1522912](https://bugzil.la/1522912)).

#### DOM Ereignisse

- CSS-Übergangs- ([Firefox-Bug 1530239](https://bugzil.la/1530239)) und Animations- ([Firefox-Bug 1531605](https://bugzil.la/1531605)) Ereignisse werden nun bei deaktivierten (z.B. Formular-) Elementen ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox-Bug 998941](https://bugzil.la/998941)).
- Der Wert `insertFromPasteAsQuotation` von [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wird jetzt unterstützt ([Firefox-Bug 1532527](https://bugzil.la/1532527)).

#### Worker/Service Worker

- Strikte MIME-Typ-Prüfungen werden jetzt bei Skripten, die durch [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden, durchgesetzt ([Firefox-Bug 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1 Video Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) wird nun unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist nun der Standard-Mediendekoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe z.B. [Firefox-Bug 1533742](https://bugzil.la/1533742) und [Firefox-Bug 1535038](https://bugzil.la/1535038)).
- Das Aufrufen von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne die Angabe von Streams, zu denen der neue Track hinzugefügt werden soll, funktioniert jetzt wie erwartet: Es wird ein streamloser Track zur Verbindung hinzugefügt. Jeder Peer ist verantwortlich für die Verwaltung der Zuordnung zwischen dem Track und einem Stream auf seiner Seite ([Firefox-Bug 1231414](https://bugzil.la/1231414)).
- Die Eigenschaft [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId) ist jetzt implementiert ([Firefox-Bug 1213453](https://bugzil.la/1213453)). Obwohl sie seit Firefox 39 existiert, hat sie tatsächlich keine zusammengehörigen Geräte zu den gleichen Gruppen-IDs zusammengefasst.
- Die Eigenschaft [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) ist nun implementiert ([Firefox-Bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um `auto` als Standard für die Eigenschaft [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) des [`VTTCue`](/de/docs/Web/API/VTTCue) Objekts korrekt zu verwenden, anstatt `center`. Dies führt dazu, dass die Ausrichtung der Cue-Box mit der Ausrichtung des Texts innerhalb übereinstimmt ([Firefox-Bug 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung wurde standardmäßig aktiviert ([Firefox-Bug 1535808](https://bugzil.la/1535808)).

#### Entfernungen

- Die veralteten `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS`, und `ShadowRoot.getElementsByClassName` Eigenschaften (Teil von Shadow DOM v0) wurden entfernt ([Firefox-Bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList), und die `ontouch*` Ereignishandler-Eigenschaften wurden auf Desktops deaktiviert, um die Webkompatibilität auf Websites zu verbessern, bei denen die Unterstützung von Touch für die mobile Erkennung verwendet wird ([Firefox-Bug 1412485](https://bugzil.la/1412485)). In solchen Fällen wurde bei Websites beobachtet, dass sie sich auf Touchscreen-Laptops falsch oder unerwartet verhalten.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind nun nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1429432](https://bugzil.la/1429432)).
- Firefox blockiert nun das Laden externer Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox-Bug 1527882](https://bugzil.la/1527882)).

### WebDriver Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde konform zur [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) gemacht ([Firefox-Bug 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird nicht mehr aufgrund von Inkonsistenzen zwischen Plattformen bezüglich des `focus` Ereignisses zeitüberschreiten ([Firefox-Bug 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox-Bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt als Teil des Fähigkeitenobjekts die `BuildID`-Zeichenkette von Firefox zurück ([Firefox-Bug 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on Entwickler

### API-Änderungen

- Die Verwendung der Methode `proxy.settings.set()`, um {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Werte zu ändern, wird eine Ausnahme auslösen, es sei denn, der Erweiterung wurde vom Benutzer der Zugriff auf private Fenster gewährt ([Firefox-Bug 1525447](https://bugzil.la/1525447)).

### Manifeständerungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Fenstern oder Tabs ([Firefox-Bug 1511636](https://bugzil.la/1511636)).
- Die Einstellung `toolbar_field_highlight` steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox-Bug 1450114](https://bugzil.la/1450114)).
- Die Einstellung `toolbar_field_highlight_text` steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox-Bug 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 67: Dark Mode CSS, WebRender, und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)
