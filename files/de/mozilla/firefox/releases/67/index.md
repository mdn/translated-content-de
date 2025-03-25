---
title: Firefox 67 für Entwickler
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 67, die Entwickler betreffen werden. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Debugger-Updates:

  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den genauen Punkt (oder Spalte) in einer Codezeile auszuwählen, an dem der Debugger unterbrechen soll ([Firefox-Bug 1528417](https://bugzil.la/1528417)).
  - [Protokollpunkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es Ihnen, spezifische Informationen während der Codeausführung ohne Unterbrechung der Ausführung in die Konsole zu loggen und ohne den Code ändern zu müssen.
  - Die [Scope-Mapping-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) ermöglicht es Ihnen, die Variablen aus dem ursprünglichen Quellcode anzuzeigen.
  - Sie können [Worker-Threads debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) direkt im Debugger.

- Aktualisierungen der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

  - Navigieren Sie Details in der Konsole mit der Tastatur ([Firefox-Bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K löscht jetzt den Inhalt der Konsole auf macOS ([Firefox-Bug 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole leert, wird auch der Fehlernachrichten-Cache gelöscht ([Firefox-Bug 717611](https://bugzil.la/717611)).
  - Der Benutzer kann vorhandene Module auf der aktuellen Seite mit `import` importieren ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
  - Ein neues Kontextmenüelement ermöglicht dem Benutzer den Befehl **Link-Adresse kopieren** zu verwenden ([Firefox-Bug 1457111](https://bugzil.la/1457111)).
  - Das Klicken auf einen Link in der Konsole verursacht dasselbe Verhalten, das es in einem Inhaltsfenster hervorrufen würde ([Firefox-Bug 1466040](https://bugzil.la/1466040)).
  - Das Klicken auf den Quelllink für eine Datei im Konsolenpanel navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox-Bug 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer den Inhalt der Konsole gefiltert hat, wird ein Symbol zum Textfeld für den Filter hinzugefügt, um den Filter zu löschen ([Firefox-Bug 1525821](https://bugzil.la/1525821)).

- Verbesserungen im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

  - Das [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Panel des Netzwerkmonitors zeigt jetzt eine Benachrichtigung für Ressourcen an, die zu einem bekannten Tracker gehören ([Firefox-Bug 1485416](https://bugzil.la/1485416)).
  - Im Netzwerkmonitor [Anfrage-Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie die sichtbaren Spalten und die Spaltensortierung kontrollieren. Das Kontextmenü enthält jetzt einen Befehl, um die Listensortierungsparameter auf den Standard zurückzusetzen ([Firefox-Bug 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor ändern, um Ihren Arbeitsablauf anzupassen ([Firefox-Bug 1358414](https://bugzil.la/1358414)).

#### Entfernungen

- Die folgenden Developer-Tools-Panels wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - Canvas-Debugger ([Firefox-Bug 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox-Bug 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox-Bug 1403944](https://bugzil.la/1403944)).

- Die folgenden Developer-Tools wurden eingestellt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - WebIDE ([Firefox-Bug 1539462](https://bugzil.la/1539462)).
  - Connect…-Seite ([Firefox-Bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` darauf werden gespeicherte Passwörter nicht mehr automatisch auffüllen ([Firefox-Bug 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox-Bug 1215878](https://bugzil.la/1215878)).
- Der `break-word`-Wert der {{cssxref("word-break")}}-Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1296042](https://bugzil.la/1296042)).
- Das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienfeature wird jetzt unterstützt ([Firefox-Bug 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s, die größer als 32px sind, sind jetzt nicht mehr erlaubt, um potenzielle Malware-Verwendungen großer Cursor zu minimieren ([Firefox-Bug 1445844](https://bugzil.la/1445844)).

#### Entfernungen

- Die Verwendung der proprietären `-moz-binding`-Eigenschaft ist jetzt auf Chrome- und UA-Stylesheets beschränkt ([Firefox-Bug 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und ist standardmäßig aktiviert ([Firefox-Bug 1435829](https://bugzil.la/1435829), [Firefox-Bug 1531830](https://bugzil.la/1531830)).
- Unterstützung für den dynamischen Modul-{{jsxref("Statements/import", "import()", "#Dynamic_Imports")}}-Vorschlag ist jetzt standardmäßig verfügbar ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
- Der [Hashbang-Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments)-Vorschlag ist jetzt implementiert ([Firefox-Bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox-Bug 1508996](https://bugzil.la/1508996)).
- Benutzeraktionen werden jetzt bei abgelehnten Aufrufen von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) sowie bei erfüllten Aufrufen beibehalten ([Firefox-Bug 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Übergangs-([Firefox-Bug 1530239](https://bugzil.la/1530239)) und Animationsereignisse ([Firefox-Bug 1531605](https://bugzil.la/1531605)) werden jetzt bei deaktivierten (z. B. Formular-)Elementen ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox-Bug 998941](https://bugzil.la/998941)).
- Der Wert `insertFromPasteAsQuotation` für den [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wird jetzt unterstützt ([Firefox-Bug 1532527](https://bugzil.la/1532527)).

#### Arbeiter/Servicearbeiter

- Strikte MIME-Typ-Prüfungen werden jetzt bei Skripten erzwungen, die durch [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden ([Firefox-Bug 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1-Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) wird jetzt auf Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist jetzt der Standard-Mediendekoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe zum Beispiel [Firefox-Bug 1533742](https://bugzil.la/1533742) und [Firefox-Bug 1535038](https://bugzil.la/1535038)).
- Das Aufrufen von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Angabe von Streams, zu denen der neue Track hinzugefügt werden soll, funktioniert jetzt wie erwartet: Es wird ein streamloser Track zur Verbindung hinzugefügt. Jeder Peer ist dafür verantwortlich, die Zuordnung zwischen dem Track und einem Stream auf seiner Seite zu verwalten ([Firefox-Bug 1231414](https://bugzil.la/1231414)).
- Die Eigenschaft [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId) ist jetzt implementiert ([Firefox-Bug 1213453](https://bugzil.la/1213453)). Während sie seit Firefox 39 in Firefox existiert, hat sie nicht tatsächlich verwandte Geräte zu denselben Gruppen-IDs zusammengefasst.
- Die Eigenschaft [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) ist jetzt implementiert ([Firefox-Bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um `auto` korrekt als Standard für die Eigentum [`VTTCue`](/de/docs/Web/API/VTTCue) des [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)-Objekts zu verwenden, anstelle von `center`. Dies führt dazu, dass die Ausrichtung des Cue-Boxes mit der Ausrichtung des Textes darin übereinstimmt ([Firefox-Bug 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung ist standardmäßig aktiviert ([Firefox-Bug 1535808](https://bugzil.la/1535808)).

#### Entfernungen

- Die veralteten Eigenschaften `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` (Teil von Shadow DOM v0) wurden entfernt ([Firefox-Bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) und die `ontouch*`-Ereignishandler-Eigenschaften wurden auf dem Desktop deaktiviert, um die Web-Kompatibilität auf Websites zu verbessern, bei denen Touch-Unterstützung zur mobilen Erkennung verwendet wird ([Firefox-Bug 1412485](https://bugzil.la/1412485)). In solchen Fällen wurde beobachtet, dass sich Websites auf Laptops mit Touchscreen falsch oder unerwartet verhalten.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden externer Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox-Bug 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` entspricht jetzt der [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) ([Firefox-Bug 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird nicht mehr aufgrund von Inkonsistenzen zwischen Plattformen in Bezug auf das `focus`-Ereignis zeitüberschreiten ([Firefox-Bug 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox-Bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt den `BuildID`-String von Firefox als Teil des Fähigkeitenobjekts zurück ([Firefox-Bug 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Verwendung der Methode `proxy.settings.set()`, um {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Werte zu ändern, wird eine Ausnahme werfen, es sei denn, die Erweiterung wurde vom Benutzer für den Zugriff auf private Fenster berechtigt ([Firefox-Bug 1525447](https://bugzil.la/1525447)).

### Manifest-Änderungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browserfenstern oder -tabs ([Firefox-Bug 1511636](https://bugzil.la/1511636)).
- Die Einstellung `toolbar_field_highlight` steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox-Bug 1450114](https://bugzil.la/1450114)).
- Die Einstellung `toolbar_field_highlight_text` steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox-Bug 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks Release-Beitrag: [Firefox 67: Dark Mode CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
