---
title: Firefox 67 für Entwickler
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 67, die Entwickler betreffen. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Debugger-Aktualisierungen:

  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den spezifischen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger stoppen soll ([Firefox-Bug 1528417](https://bugzil.la/1528417)).
  - [Log-Punkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) erlauben es, während der Codeausführung spezifische Informationen an die Konsole zu protokollieren, ohne die Ausführung zu pausieren und ohne den Code ändern zu müssen.
  - Die Funktion [Scopes abbilden](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) erlaubt es, die Variablen aus dem ursprünglichen Quellcode einzusehen.
  - Sie können [Worker-Threads debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) direkt im Debugger.

- Aktualisierungen der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

  - Navigieren Sie mit der Tastatur durch die Details in der Konsole ([Firefox-Bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K wird nun die Inhalte der Konsole auf macOS leeren ([Firefox-Bug 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole leert, wird auch der Cache der Fehlermeldungen geleert ([Firefox-Bug 717611](https://bugzil.la/717611)).
  - Der Benutzer kann bestehende Module in die aktuelle Seite mit `import` einfügen ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
  - Ein neuer Kontextmenüpunkt ermöglicht es dem Benutzer, den Befehl **Link-Adresse kopieren** zu verwenden ([Firefox-Bug 1457111](https://bugzil.la/1457111)).
  - Ein Klick auf einen Link in der Konsole bewirkt dasselbe Verhalten wie in einem Inhaltsfenster ([Firefox-Bug 1466040](https://bugzil.la/1466040)).
  - Durch Klicken auf den Quell-Link für eine Code-Datei im Konsolenpanel wird zum Debugger navigiert, wenn der Debugger die Datei kennt ([Firefox-Bug 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer die Inhalte der Konsole gefiltert hat, wird ein Icon im Filtertextfeld hinzugefügt, um den Filter zu löschen ([Firefox-Bug 1525821](https://bugzil.la/1525821)).

- Verbesserungen des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):
  - Das [Header-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers) des Netzwerkmonitors zeigt nun eine Benachrichtigung für Ressourcen, die zu einem bekannten Tracker gehören ([Firefox-Bug 1485416](https://bugzil.la/1485416)).
  - In den [Anfragespalten des Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie die sichtbaren Spalten und die Spaltensortierung steuern. Das Kontextmenü enthält nun einen Befehl, um die Sortierparameter auf die Standardwerte zurückzusetzen ([Firefox-Bug 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor an Ihren Arbeitsablauf anpassen ([Firefox-Bug 1358414](https://bugzil.la/1358414)).

#### Entfernt

- Die folgenden Entwicklerwerkzeuge-Panels wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - Canvas-Debugger ([Firefox-Bug 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox-Bug 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox-Bug 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge wurden veraltet (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):
  - WebIDE ([Firefox-Bug 1539462](https://bugzil.la/1539462)).
  - Verbinden... Seite ([Firefox-Bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` darauf werden keine zuvor gespeicherten Passwörter mehr automatisch ausfüllen ([Firefox-Bug 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox-Bug 1215878](https://bugzil.la/1215878)).
- Der `break-word` Wert der {{cssxref("word-break")}}-Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1296042](https://bugzil.la/1296042)).
- Das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Feature wird jetzt unterstützt ([Firefox-Bug 1494034](https://bugzil.la/1494034)).
- Benutzerspezifische {{cssxref("cursor")}}s, die größer als 32px sind, sind nun nicht mehr erlaubt, um potenzielle Malware-Nutzungen großer Cursors zu verhindern ([Firefox-Bug 1445844](https://bugzil.la/1445844)).

#### Entfernt

- Die Nutzung der proprietären `-moz-binding`-Eigenschaft ist jetzt auf Chrome und UA-Stylesheets beschränkt ([Firefox-Bug 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und standardmäßig aktiviert ([Firefox-Bug 1435829](https://bugzil.la/1435829), [Firefox-Bug 1531830](https://bugzil.la/1531830)).
- Unterstützung für den dynamischen Modul-Vorschlag {{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} ist jetzt standardmäßig verfügbar ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
- Der [Hashbang-Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments)-Vorschlag ist jetzt implementiert ([Firefox-Bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox-Bug 1508996](https://bugzil.la/1508996)).
- Benutzeraktionen werden jetzt auch bei abgelehnten Aufrufen von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) beibehalten, ebenso wie bei erfüllten Aufrufen ([Firefox-Bug 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Übergangs- ([Firefox-Bug 1530239](https://bugzil.la/1530239)) und Animations- ([Firefox-Bug 1531605](https://bugzil.la/1531605)) Ereignisse werden nun auf deaktivierten (z.B. Formular-) Elementen ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox-Bug 998941](https://bugzil.la/998941)).
- Der Wert `insertFromPasteAsQuotation` des [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wird jetzt unterstützt ([Firefox-Bug 1532527](https://bugzil.la/1532527)).

#### Worker/Service Worker

- Strikte MIME-Typprüfungen sind jetzt bei Skripten, die durch [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden, erforderlich ([Firefox-Bug 1514680](https://bugzil.la/1514680)).

#### Medien, Web-Audio und WebRTC

- Der [AV1-Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) wird jetzt unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist jetzt der standardmäßige Medien-Decoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe z.B. [Firefox-Bug 1533742](https://bugzil.la/1533742) und [Firefox-Bug 1535038](https://bugzil.la/1535038)).
- Der Aufruf von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Angabe von Streams, zu denen der neue Track hinzugefügt werden soll, funktioniert jetzt wie erwartet: Es fügt einen streamlosen Track zur Verbindung hinzu. Jeder Peer ist dafür verantwortlich, die Verbindung zwischen dem Track und einem beliebigen Stream auf seiner Seite zu verwalten ([Firefox-Bug 1231414](https://bugzil.la/1231414)).
- Die [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId)-Eigenschaft ist jetzt implementiert ([Firefox-Bug 1213453](https://bugzil.la/1213453)). Während sie in Firefox seit Version 39 existiert, hat sie Geräte nicht tatsächlich zu den selben Gruppen-IDs zusammengefasst.
- Die [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)-Eigenschaft ist jetzt implementiert ([Firefox-Bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um korrekt `auto` als Standardwert für die [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekteigenschaft [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) zu verwenden, statt `center`. Dies bewirkt, dass die Ausrichtung des Cue-Kastens der Ausrichtung des darin enthaltenen Textes entspricht ([Firefox-Bug 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung wurde standardmäßig aktiviert ([Firefox-Bug 1535808](https://bugzil.la/1535808)).

#### Entfernt

- Die veralteten Eigenschaften `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` (Teil von Shadow DOM v0) wurden entfernt ([Firefox-Bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) und die `ontouch*`-Ereignis-Handler-Eigenschaften wurden auf Desktop deaktiviert, um die Web-Kompatibilität auf Websites zu verbessern, bei denen Touch-Unterstützung für mobile Erkennung verwendet wird ([Firefox-Bug 1412485](https://bugzil.la/1412485)). In solchen Fällen wurde beobachtet, dass Websites sich auf Touchscreen-Laptops falsch oder unerwartet verhalten.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur noch in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden von URLs mit externen Protokollen in {{htmlelement("iframe")}}s ([Firefox-Bug 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde an die [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) angepasst ([Firefox-Bug 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird nicht mehr aufgrund von Inkonsistenzen über Plattformen hinweg hinsichtlich des `focus`-Ereignisses zeitüberschreiten ([Firefox-Bug 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox-Bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt die `BuildID`-Zeichenkette von Firefox als Teil des capabilities-Objekts zurück ([Firefox-Bug 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Nutzung der Methode `proxy.settings.set()`, um {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Werte zu ändern, wird eine Ausnahme auslösen, sofern die Erweiterung nicht vom Benutzer privaten Fensterzugriff gewährt bekommen hat ([Firefox-Bug 1525447](https://bugzil.la/1525447)).

### Manifest-Änderungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), legt das Verhalten einer Erweiterung in privaten Browserfenstern oder -tabs fest ([Firefox-Bug 1511636](https://bugzil.la/1511636)).
- Die Einstellung `toolbar_field_highlight` steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text im URL-Feld anzuzeigen ([Firefox-Bug 1450114](https://bugzil.la/1450114)).
- Die Einstellung `toolbar_field_highlight_text` steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl von Text im URL-Feld anzuzeigen ([Firefox-Bug 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks Release-Post: [Firefox 67: Dark Mode CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
