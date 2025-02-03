---
title: Firefox 67 für Entwickler
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 67, die Entwickler betreffen werden. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Aktualisierungen des Debuggers:

  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) erlauben es Ihnen, den spezifischen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger unterbrechen soll ([Firefox-Bug 1528417](https://bugzil.la/1528417)).
  - [Log-Punkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es Ihnen, während der Codeausführung spezifische Informationen in der Konsole zu protokollieren, ohne die Ausführung zu unterbrechen und ohne den Code ändern zu müssen.
  - Die [Map Scopes-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) ermöglicht es Ihnen, die Variablen aus der Originalquelle zu sehen.
  - Sie können Worker-Threads direkt im Debugger [debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads).

- Aktualisierungen der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

  - Navigieren Sie mit der Tastatur durch Details in der Konsole ([Firefox-Bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K wird jetzt auf macOS den Inhalt der Konsole löschen ([Firefox-Bug 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole löscht, wird auch der Cache für Fehlermeldungen gelöscht ([Firefox-Bug 717611](https://bugzil.la/717611)).
  - Der Benutzer kann vorhandene Module auf die aktuelle Seite mithilfe von `import` importieren ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
  - Ein neuer Kontextmenüpunkt erlaubt dem Benutzer, den Befehl **Link-Adresse kopieren** zu verwenden ([Firefox-Bug 1457111](https://bugzil.la/1457111)).
  - Ein Klick auf einen Link in der Konsole bewirkt dasselbe Verhalten, das er in einem Inhaltsfenster hätte ([Firefox-Bug 1466040](https://bugzil.la/1466040)).
  - Ein Klick auf den Quellcode-Link einer Code-Datei im Konsolen-Panel navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox-Bug 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer den Inhalt der Konsole gefiltert hat, wird ein Symbol dem Filter-Textfeld hinzugefügt, um den Filter zu löschen ([Firefox-Bug 1525821](https://bugzil.la/1525821)).

- Verbesserungen des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

  - Das [Header-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers) des Netzwerkmonitors wird nun eine Benachrichtigung für Ressourcen anzeigen, die zu einem bekannten Tracker gehören ([Firefox-Bug 1485416](https://bugzil.la/1485416)).
  - In den [Anfragen-Spalten des Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie die sichtbaren Spalten und die Spaltensortierung kontrollieren. Das Kontextmenü enthält jetzt einen Befehl, um die Listensortierparameter auf die Standardeinstellungen zurückzusetzen ([Firefox-Bug 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor ändern, um Ihren Arbeitsablauf anzupassen ([Firefox-Bug 1358414](https://bugzil.la/1358414)).

#### Entfernungen

- Die folgenden Entwicklungswerkzeuge wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - Canvas-Debugger ([Firefox-Bug 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox-Bug 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox-Bug 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklungswerkzeuge wurden veraltet (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - WebIDE ([Firefox-Bug 1539462](https://bugzil.la/1539462)).
  - Connect… Seite ([Firefox-Bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` werden keine zuvor gespeicherten Passwörter mehr automatisch ausfüllen ([Firefox-Bug 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox-Bug 1215878](https://bugzil.la/1215878)).
- Der `break-word`-Wert der {{cssxref("word-break")}}-Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1296042](https://bugzil.la/1296042)).
- Die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienabfrage wird jetzt unterstützt ([Firefox-Bug 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s, die größer als 32px sind, sind jetzt unzulässig, um potenziellem Missbrauch durch Malware mit großen Cursoren entgegenzuwirken ([Firefox-Bug 1445844](https://bugzil.la/1445844)).

#### Entfernungen

- Die Verwendung der proprietären `-moz-binding`-Eigenschaft ist nun auf Chrome- und UA-Stylesheets beschränkt ([Firefox-Bug 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und standardmäßig aktiviert ([Firefox-Bug 1435829](https://bugzil.la/1435829), [Firefox-Bug 1531830](https://bugzil.la/1531830)).
- Die Unterstützung für den Vorschlag der dynamischen Modulimporte {{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} ist nun standardmäßig verfügbar ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
- Der [Hashbang-Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments)-Vorschlag ist nun implementiert ([Firefox-Bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox-Bug 1508996](https://bugzil.la/1508996)).
- Benutzergesten werden jetzt bei abgelehnten Aufrufen von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) ebenso wie bei erfüllten Aufrufen beibehalten ([Firefox-Bug 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Übergangs- ([Firefox-Bug 1530239](https://bugzil.la/1530239)) und Animationsereignisse ([Firefox-Bug 1531605](https://bugzil.la/1531605)) werden jetzt für deaktivierte (z.B. Formular-) Elemente ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox-Bug 998941](https://bugzil.la/998941)).
- Der `insertFromPasteAsQuotation` [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType)-Wert wird jetzt unterstützt ([Firefox-Bug 1532527](https://bugzil.la/1532527)).

#### Worker/Service Worker

- Strikte MIME-Typ-Prüfungen werden jetzt bei Skripten erzwungen, die durch [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden ([Firefox-Bug 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1-Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) wird jetzt unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist nun der Standard-Mediendekoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe zum Beispiel [Firefox-Bug 1533742](https://bugzil.la/1533742) und [Firefox-Bug 1535038](https://bugzil.la/1535038)).
- Das Aufrufen von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Spezifizierung von Streams, denen der neue Track hinzugefügt werden soll, funktioniert nun wie erwartet: Es fügt einen Stream-losen Track zur Verbindung hinzu. Jeder Peer ist dafür verantwortlich, die Zuordnung zwischen dem Track und einem Stream auf seiner Seite zu verwalten ([Firefox-Bug 1231414](https://bugzil.la/1231414)).
- Die [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId)-Eigenschaft ist jetzt implementiert ([Firefox-Bug 1213453](https://bugzil.la/1213453)). Obwohl sie in Firefox seit Version 39 existiert, hat sie bisher keine zusammengehörigen Geräte in dieselben Gruppen-IDs gruppiert.
- Die [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)-Eigenschaft ist jetzt implementiert ([Firefox-Bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um `auto` als Standard für die [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekt- [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)-Eigenschaft korrekt zu verwenden, anstatt `center`. Dies bewirkt, dass die Ausrichtung des Cue-Feldes der Textausrichtung in ihm entspricht ([Firefox-Bug 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung wurde standardmäßig aktiviert ([Firefox-Bug 1535808](https://bugzil.la/1535808)).

#### Entfernungen

- Die veralteten `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` Eigenschaften (Teil von Shadow DOM v0) wurden entfernt ([Firefox-Bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) und die `ontouch*`-Ereignishandler-Eigenschaften wurden auf Desktops deaktiviert, um die Web-Kompatibilität auf Websites zu verbessern, auf denen Unterstützung für Touch-Geräte zur Mobilgeräteerkennung genutzt wird ([Firefox-Bug 1412485](https://bugzil.la/1412485)). In solchen Fällen haben sich Websites oft auf Touchscreen-Laptops inkorrekt oder unerwartet verhalten.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur noch in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden von externen Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox-Bug 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde konform zur [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) gemacht ([Firefox-Bug 1502360](https://bugzil.la/1502360)).

#### Bugfixes

- `WebDriver:NewWindow` wird nicht mehr wegen Inkonsistenzen zwischen Plattformen hinsichtlich des `focus`-Ereignisses in den Timeout gehen ([Firefox-Bug 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox-Bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt den `BuildID`-String von Firefox als Teil des Capabilities-Objekts zurück ([Firefox-Bug 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Verwendung der `proxy.settings.set()`-Methode zur Änderung von `{{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}`-Werten wird eine Ausnahme werfen, es sei denn, die Erweiterung wurde ausdrücklich von den Benutzern für den Zugriff auf private Fenster freigegeben ([Firefox-Bug 1525447](https://bugzil.la/1525447)).

### Manifeständerungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browsing-Fenstern oder -Tabs ([Firefox-Bug 1511636](https://bugzil.la/1511636)).
- Die `toolbar_field_highlight`-Einstellung steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl eines Textes in der URL-Leiste anzuzeigen ([Firefox-Bug 1450114](https://bugzil.la/1450114)).
- Die `toolbar_field_highlight_text`-Einstellung steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl eines Textes in der URL-Leiste anzuzeigen ([Firefox-Bug 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 67: Dunkelmodus-CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
