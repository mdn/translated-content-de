---
title: Firefox 67 für Entwickler
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 67, die Entwickler betreffen werden. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Debugger-Aktualisierungen:
  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den spezifischen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger stoppen soll ([Firefox-Bug 1528417](https://bugzil.la/1528417)).
  - [Logpunkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es Ihnen, spezifische Informationen während der Codeausführung in die Konsole zu protokollieren, ohne die Ausführung zu pausieren und ohne den Code ändern zu müssen.
  - Die [Scoping-Mapping-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) erlaubt es Ihnen, die Variablen aus der Originalquelle zu sehen.
  - Sie können direkt im Debugger [Worker-Threads debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads).

- Aktualisierungen der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):
  - Details in der Konsole mit der Tastatur navigieren ([Firefox-Bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K löscht nun den Inhalt der Konsole auf macOS ([Firefox-Bug 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole löscht, wird auch der Cache der Fehlermeldungen geleert ([Firefox-Bug 717611](https://bugzil.la/717611)).
  - Der Benutzer kann vorhandene Module in die aktuelle Seite importieren ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
  - Ein neues Kontextmenüelement erlaubt es dem Benutzer, den Befehl **Linkadresse kopieren** zu verwenden ([Firefox-Bug 1457111](https://bugzil.la/1457111)).
  - Ein Klick auf einen Link in der Konsole führt zu demselben Verhalten wie in einem Inhaltsfenster ([Firefox-Bug 1466040](https://bugzil.la/1466040)).
  - Ein Klick auf den Quelllink für eine .js-Datei im Konsolenbereich navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox-Bug 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer die Inhalte der Konsole gefiltert hat, wird ein Symbol zum Textfeld des Filters hinzugefügt, um den Filter zu löschen ([Firefox-Bug 1525821](https://bugzil.la/1525821)).

- Erweiterungen des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):
  - Das [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Panel des Netzwerkmonitors zeigt jetzt eine Benachrichtigung für Ressourcen an, die zu einem bekannten Tracker gehören ([Firefox-Bug 1485416](https://bugzil.la/1485416)).
  - In den [Anforderungslisten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) des Netzwerkmonitors können Sie die sichtbaren Spalten und die Spaltensortierung steuern. Das Kontextmenü enthält jetzt einen Befehl, um die Sortierungsparameter der Liste auf die Standardeinstellungen zurückzusetzen ([Firefox-Bug 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor an Ihre Arbeitsweise anpassen ([Firefox-Bug 1358414](https://bugzil.la/1358414)).

#### Entfernungen

- Die folgenden Entwicklerwerkzeuge-Panels wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):
  - Canvas-Debugger ([Firefox-Bug 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox-Bug 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox-Bug 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge sind nun veraltet (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):
  - WebIDE ([Firefox-Bug 1539462](https://bugzil.la/1539462)).
  - Connect… Seite ([Firefox-Bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` darauf wird kein zuvor gespeichertes Passwort mehr automatisch ausgefüllt ([Firefox-Bug 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox-Bug 1215878](https://bugzil.la/1215878)).
- Der `break-word`-Wert der {{cssxref("word-break")}} Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1296042](https://bugzil.la/1296042)).
- Die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienfunktion wird jetzt unterstützt ([Firefox-Bug 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s, die größer als 32px sind, sind jetzt unzulässig, um potenzielle Malware-Nutzungen großer Cursor zu mildern ([Firefox-Bug 1445844](https://bugzil.la/1445844)).

#### Entfernungen

- Die Nutzung der proprietären `-moz-binding` Eigenschaft ist jetzt auf Chrome und UA-Stylesheets beschränkt ([Firefox-Bug 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und standardmäßig aktiviert ([Firefox-Bug 1435829](https://bugzil.la/1435829), [Firefox-Bug 1531830](https://bugzil.la/1531830)).
- Die Unterstützung für den Vorschlag zur dynamischen Modul-{{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} Funktionalität ist jetzt standardmäßig verfügbar ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
- Die [Hashbang-Syntax](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) wurde implementiert ([Firefox-Bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox-Bug 1508996](https://bugzil.la/1508996)).
- Benutzergesten werden jetzt für abgelehnte und erfüllte Aufrufe von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) beibehalten ([Firefox-Bug 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Transition-([Firefox-Bug 1530239](https://bugzil.la/1530239)) und Animation-([Firefox-Bug 1531605](https://bugzil.la/1531605)) Ereignisse werden jetzt auf deaktivierten (z.B. Formular-) Elementen ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox-Bug 998941](https://bugzil.la/998941)).
- Der `insertFromPasteAsQuotation` [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) Wert wird jetzt unterstützt ([Firefox-Bug 1532527](https://bugzil.la/1532527)).

#### Worker/Service Worker

- Strenge MIME-Typ-Prüfungen werden jetzt für von [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importierte Skripte durchgesetzt ([Firefox-Bug 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1-Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) wird jetzt unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist jetzt der Standard-Medien-Decoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe z.B. [Firefox-Bug 1533742](https://bugzil.la/1533742) und [Firefox-Bug 1535038](https://bugzil.la/1535038)).
- Ein Aufruf von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Angabe von Streams, zu denen der neue Track hinzugefügt werden soll, funktioniert jetzt wie erwartet: Es wird ein streamloser Track zur Verbindung hinzugefügt. Jeder Partner ist dafür verantwortlich, die Verbindung zwischen dem Track und einem Stream auf seiner Seite zu verwalten ([Firefox-Bug 1231414](https://bugzil.la/1231414)).
- Die [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId) Eigenschaft ist jetzt implementiert ([Firefox-Bug 1213453](https://bugzil.la/1213453)). Obwohl sie seit Firefox 39 existiert, hat sie nicht tatsächlich verwandte Geräte in denselben Gruppen-IDs zusammengefasst.
- Die [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) Eigenschaft ist jetzt implementiert ([Firefox-Bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um korrekt `auto` als Standard für die [`VTTCue`](/de/docs/Web/API/VTTCue) Objekt [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) Eigenschaft statt `center` zu verwenden. Dies führt dazu, dass die Ausrichtung des Cue-Blocks mit der Ausrichtung des darin enthaltenen Textes übereinstimmt ([Firefox-Bug 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung ist standardmäßig aktiviert ([Firefox-Bug 1535808](https://bugzil.la/1535808)).

#### Entfernungen

- Die veralteten Eigenschaften `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` (Teil von Shadow DOM v0) wurden entfernt ([Firefox-Bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) und die `ontouch*` Ereignishandler-Eigenschaften wurden auf Desktops deaktiviert, um die Web-Kompatibilität auf Websites zu verbessern, die Touch-Unterstützung zur Mobilgeräteerkennung verwenden ([Firefox-Bug 1412485](https://bugzil.la/1412485)). In solchen Fällen wurde beobachtet, dass Webseiten auf Touchscreen-Laptops falsch oder unerwartet funktionieren.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden von externen Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox-Bug 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde an die [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) angepasst ([Firefox-Bug 1502360](https://bugzil.la/1502360)).

#### Bugfixes

- `WebDriver:NewWindow` wird nicht mehr aufgrund von Inkonsistenzen zwischen den Plattformen bezüglich des `focus`-Ereignisses zeitlich überschreiten ([Firefox-Bug 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox-Bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt die `BuildID`-Zeichenkette von Firefox als Teil des Fähigkeitenobjekts zurück ([Firefox-Bug 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Verwendung der `proxy.settings.set()` Methode, um {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Werte zu ändern, wird eine Ausnahme auslösen, es sei denn, die Erweiterung wurde vom Benutzer für den privaten Fensterzugriff freigegeben ([Firefox-Bug 1525447](https://bugzil.la/1525447)).

### Manifeständerungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browserfenstern oder Tabs ([Firefox-Bug 1511636](https://bugzil.la/1511636)).
- Die `toolbar_field_highlight` Einstellung steuert die Hintergrundfarbe, die zur Anzeige der aktuellen Textauswahl in der URL-Leiste verwendet wird ([Firefox-Bug 1450114](https://bugzil.la/1450114)).
- Die `toolbar_field_highlight_text` Einstellung steuert die Textfarbe, die zur Anzeige der aktuellen Textauswahl in der URL-Leiste verwendet wird ([Firefox-Bug 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks Release-Bericht: [Firefox 67: Dunkles Modus-CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
