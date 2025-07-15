---
title: Firefox 67 für Entwickler
short-title: Firefox 67
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 67, die Entwickler betreffen. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Debugger-Aktualisierungen:
  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den genauen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger anhalten soll ([Firefox Bug 1528417](https://bugzil.la/1528417)).
  - [Protokollierungspunkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es Ihnen, spezifische Informationen an die Konsole zu protokollieren, ohne die Ausführung anzuhalten und ohne den Code ändern zu müssen.
  - Die [Scopes-Mapping Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) ermöglicht es Ihnen, die Variablen aus der Originalquelle zu sehen.
  - Sie können [Worker-Threads debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) direkt im Debugger.

- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Updates:
  - Details in der Konsole mit der Tastatur navigieren ([Firefox Bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K leert nun die Konsole unter macOS ([Firefox Bug 1532939](https://bugzil.la/1532939)).
  - Wenn der Nutzer die Konsole löscht, wird auch der Fehlermeldungen-Cache geleert ([Firefox Bug 717611](https://bugzil.la/717611)).
  - Der Nutzer kann vorhandene Module in die aktuelle Seite mithilfe von Import einfügen ([Firefox Bug 1517546](https://bugzil.la/1517546)).
  - Ein neuer Kontextmenüeintrag ermöglicht dem Nutzer den Befehl **Link-Adresse kopieren** zu verwenden ([Firefox Bug 1457111](https://bugzil.la/1457111)).
  - Ein Klick auf einen Link in der Konsole führt zu demselben Verhalten wie in einem Inhaltsfenster ([Firefox Bug 1466040](https://bugzil.la/1466040)).
  - Ein Klick auf den Quellcode-Link für eine Datei im Konsolenfenster navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox Bug 1447244](https://bugzil.la/1447244)).
  - Wenn der Nutzer den Inhalt der Konsole gefiltert hat, wird ein Symbol zum Löschen des Filters im Textfeld des Filters hinzugefügt ([Firefox Bug 1525821](https://bugzil.la/1525821)).

- [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Verbesserungen:
  - Das [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Panel des Netzwerkmonitors zeigt nun eine Benachrichtigung für Ressourcen an, die zu einem bekannten Tracker gehören ([Firefox Bug 1485416](https://bugzil.la/1485416)).
  - In der Liste der [Anforderungs-Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) des Netzwerkmonitors können Sie die sichtbaren Spalten und die Spaltensortierung steuern. Das Kontextmenü enthält jetzt einen Befehl, um die Sortierparameter auf die Standardeinstellungen zurückzusetzen ([Firefox Bug 1454962](https://bugzil.la/1454962)).
  - Sie können die [Spaltenbreite](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor an Ihren Arbeitsablauf anpassen ([Firefox Bug 1358414](https://bugzil.la/1358414)).

#### Entfernungen

- Die folgenden Panels der Entwicklerwerkzeuge wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für weitere Details):
  - Canvas-Debugger ([Firefox Bug 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox Bug 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox Bug 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge sind veraltet (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):
  - WebIDE ([Firefox Bug 1539462](https://bugzil.la/1539462)).
  - Connect… Seite ([Firefox Bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` werden keine zuvor gespeicherten Passwörter mehr automatisch ausfüllen ([Firefox Bug 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox Bug 1215878](https://bugzil.la/1215878)).
- Der `break-word`-Wert der {{cssxref("word-break")}}-Eigenschaft wird jetzt unterstützt ([Firefox Bug 1296042](https://bugzil.la/1296042)).
- Das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienmerkmal wird jetzt unterstützt ([Firefox Bug 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s größer als 32px sind jetzt nicht mehr erlaubt, um potenzielle Malware-Nutzung großer Cursor zu verhindern ([Firefox Bug 1445844](https://bugzil.la/1445844)).

#### Entfernungen

- Die Verwendung der proprietären `-moz-binding`-Eigenschaft ist jetzt auf Chrome und UA-Stylesheets beschränkt ([Firefox Bug 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und standardmäßig aktiviert ([Firefox Bug 1435829](https://bugzil.la/1435829), [Firefox Bug 1531830](https://bugzil.la/1531830)).
- Die Unterstützung für den dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Vorschlag ist jetzt standardmäßig verfügbar ([Firefox Bug 1517546](https://bugzil.la/1517546)).
- Der [Hashbang-Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments)-Vorschlag ist jetzt implementiert ([Firefox Bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox Bug 1508996](https://bugzil.la/1508996)).
- Benutzeraktionen werden jetzt für abgelehnte Aufrufe von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) sowie für erfüllte Aufrufe beibehalten ([Firefox Bug 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Übergangs ([Firefox Bug 1530239](https://bugzil.la/1530239)) und Animation ([Firefox Bug 1531605](https://bugzil.la/1531605)) Ereignisse werden jetzt auf deaktivierten (z. B. Formular-)Elementen ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox Bug 998941](https://bugzil.la/998941)).
- Der Wert `insertFromPasteAsQuotation` von [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wird jetzt unterstützt ([Firefox Bug 1532527](https://bugzil.la/1532527)).

#### Worker/Service Worker

- Strikte MIME-Typ-Kontrollen werden jetzt für Skripte erzwungen, die durch [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden ([Firefox Bug 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1-Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) wird jetzt unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist jetzt der Standard-Mediendekoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe z.B. [Firefox Bug 1533742](https://bugzil.la/1533742) und [Firefox Bug 1535038](https://bugzil.la/1535038)).
- Aufrufe von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Angabe von Streams, zu denen der neue Track hinzugefügt werden soll, funktionieren jetzt wie erwartet: Es wird ein trackloser Track zur Verbindung hinzugefügt. Jeder Peer ist dafür verantwortlich, die Zuordnung zwischen dem Track und einem beliebigen Stream auf seiner Seite zu verwalten ([Firefox Bug 1231414](https://bugzil.la/1231414)).
- Die [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId)-Eigenschaft ist jetzt implementiert ([Firefox Bug 1213453](https://bugzil.la/1213453)). Obwohl sie seit Firefox 39 in Firefox existiert, hat sie die zugehörigen Geräte tatsächlich nicht in dieselben Gruppen-IDs zusammengefasst.
- Die [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)-Eigenschaft ist jetzt implementiert ([Firefox Bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um `auto` korrekt als Standard für die [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekteigenschaft [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) zu verwenden, anstatt `center`. Dadurch entspricht die Ausrichtung des Cue-Boxes der Ausrichtung des darin enthaltenen Textes ([Firefox Bug 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung wurde standardmäßig aktiviert ([Firefox Bug 1535808](https://bugzil.la/1535808)).

#### Entfernungen

- Die veralteten `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` Eigenschaften (Teil von Shadow DOM v0) wurden entfernt ([Firefox Bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) und die `ontouch*` Event-Handler Eigenschaften wurden auf dem Desktop deaktiviert, um die Web-Kompatibilität auf Websites zu verbessern, auf denen der Touch-Support zur mobilen Erkennung verwendet wird ([Firefox Bug 1412485](https://bugzil.la/1412485)). In solchen Fällen wurde beobachtet, dass Websites auf Touchscreen-Laptops falsch oder unerwartet funktionieren.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur noch in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Bug 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden externer Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox Bug 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde konform mit der [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) gemacht ([Firefox Bug 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird nicht mehr wegen Inkonsistenzen zwischen Plattformen bezüglich des `focus`-Events in Zeitüberschreitung geraten ([Firefox Bug 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox Bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt den `BuildID`-String von Firefox als Teil des Fähigkeiten-Objekts zurück ([Firefox Bug 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Verwendung der `proxy.settings.set()`-Methode zum Ändern von {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Werten wird eine Ausnahme auslösen, es sei denn, der Nutzer hat der Erweiterung Zugriff auf private Fenster gewährt ([Firefox Bug 1525447](https://bugzil.la/1525447)).

### Manifest-Änderungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browserfenstern oder -tabs ([Firefox Bug 1511636](https://bugzil.la/1511636)).
- Die Einstellung `toolbar_field_highlight` steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl an Text in der URL-Leiste anzuzeigen ([Firefox Bug 1450114](https://bugzil.la/1450114)).
- Die Einstellung `toolbar_field_highlight_text` steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl an Text in der URL-Leiste anzuzeigen ([Firefox Bug 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks Release-Post: [Firefox 67: Dark Mode CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)
