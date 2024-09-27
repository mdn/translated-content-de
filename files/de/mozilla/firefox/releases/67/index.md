---
title: Firefox 67 für Entwickler
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 67, die Entwickler betreffen werden. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Debugger Updates:

  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den spezifischen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger anhalten soll ([Firefox Fehler 1528417](https://bugzil.la/1528417)).
  - [Protokollierungspunkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es, spezifische Informationen während der Codeausführung in die Konsole zu protokollieren, ohne die Ausführung zu pausieren und ohne Änderungen im Code.
  - Die [Scope-Map-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) ermöglicht es Ihnen, die Variablen aus der Originalquelle zu betrachten.
  - Sie können [Worker-Threads debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) direkt im Debugger.

- Aktualisierungen der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

  - Navigieren Sie über die Tastatur durch die Konsole ([Firefox Fehler 1424159](https://bugzil.la/1424159)).
  - Cmd + K wird nun den Inhalt der Konsole auf macOS löschen ([Firefox Fehler 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole löscht, wird auch der Fehlermeldungspuffer gelöscht ([Firefox Fehler 717611](https://bugzil.la/717611)).
  - Der Benutzer kann bestehende Module in die aktuelle Seite mit `import` einfügen ([Firefox Fehler 1517546](https://bugzil.la/1517546)).
  - Ein neues Kontextmenüelement ermöglicht dem Benutzer, den **Link-Adresse kopieren**-Befehl zu verwenden ([Firefox Fehler 1457111](https://bugzil.la/1457111)).
  - Ein Klick auf einen Link in der Konsole verursacht dasselbe Verhalten, das er in einem Inhaltsfenster hätte ([Firefox Fehler 1466040](https://bugzil.la/1466040)).
  - Ein Klick auf den Quelllink einer Datei im Konsolenfeld navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox Fehler 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer den Inhalt der Konsole gefiltert hat, wird dem Filtertextfeld ein Symbol zum Löschen des Filters hinzugefügt ([Firefox Fehler 1525821](https://bugzil.la/1525821)).

- Verbesserungen des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

  - Das [Kopfzeilen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Panel des Netzwerkmonitors zeigt nun eine Benachrichtigung für Ressourcen an, die zu einem bekannten Tracker gehören ([Firefox Fehler 1485416](https://bugzil.la/1485416)).
  - In den [Anforderungsspalt](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) des Netzwerkmonitors können Sie die sichtbaren Spalten und die Spaltensortierung steuern. Das Kontextmenü enthält nun einen Befehl, um die Liste der Sortierparameter auf die Standardeinstellungen zurückzusetzen ([Firefox Fehler 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor ändern, um Ihren Arbeitsablauf anzupassen ([Firefox Fehler 1358414](https://bugzil.la/1358414)).

#### Entfernungen

- Die folgenden Entwicklerwerkzeug-Panels wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - Canvas-Debugger ([Firefox Fehler 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox Fehler 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox Fehler 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge wurden veraltet (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - WebIDE ([Firefox Fehler 1539462](https://bugzil.la/1539462)).
  - Connect… Seite ([Firefox Fehler 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` darauf werden keine zuvor gespeicherten Passwörter mehr automatisch ausfüllen ([Firefox Fehler 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox Fehler 1215878](https://bugzil.la/1215878)).
- Der `break-word`-Wert der {{cssxref("word-break")}}-Eigenschaft wird jetzt unterstützt ([Firefox Fehler 1296042](https://bugzil.la/1296042)).
- Die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienfunktion wird jetzt unterstützt ([Firefox Fehler 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s, die größer als 32px sind, sind jetzt nicht mehr erlaubt, um potenzielle Malware-Verwendungen von großen Cursorn zu mindern ([Firefox Fehler 1445844](https://bugzil.la/1445844)).

#### Entfernungen

- Die Verwendung der proprietären `-moz-binding`-Eigenschaft ist jetzt auf Chrome und UA-Stilvorlagen beschränkt ([Firefox Fehler 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und ist standardmäßig aktiviert ([Firefox Fehler 1435829](https://bugzil.la/1435829), [Firefox Fehler 1531830](https://bugzil.la/1531830)).
- Unterstützung für den Vorschlag zum dynamischen Modul {{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} ist jetzt standardmäßig verfügbar ([Firefox Fehler 1517546](https://bugzil.la/1517546)).
- Der [Hashbang-Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments)-Vorschlag ist jetzt implementiert ([Firefox Fehler 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox Fehler 1508996](https://bugzil.la/1508996)).
- Benutzeraktionen werden jetzt für abgelehnte und erfüllte Aufrufe von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) beibehalten ([Firefox Fehler 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Übergangs- ([Firefox Fehler 1530239](https://bugzil.la/1530239)) und Animations- ([Firefox Fehler 1531605](https://bugzil.la/1531605))ereignisse werden jetzt auch für deaktivierte (z.B. Formular-) Elemente ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox Fehler 998941](https://bugzil.la/998941)).
- Der `insertFromPasteAsQuotation` [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType)-Wert wird jetzt unterstützt ([Firefox Fehler 1532527](https://bugzil.la/1532527)).

#### Worker/Service Worker

- Strenge MIME-Typ-Prüfungen werden jetzt für Skripte erzwungen, die von [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden ([Firefox Fehler 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1 Video-Codec](/de/docs/Web/Media/Formats/Video_codecs#av1) wird nun unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist jetzt der Standardmediendekoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe beispielsweise [Firefox Fehler 1533742](https://bugzil.la/1533742) und [Firefox Fehler 1535038](https://bugzil.la/1535038)).
- Das Aufrufen von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Angabe von Streams zur Hinzufügung des neuen Tracks funktioniert nun wie erwartet: Es fügt einen streamlosen Track zur Verbindung hinzu. Jeder Peer ist verantwortlich für das Management der Zuordnung zwischen dem Track und jeglichem Stream auf seiner Seite ([Firefox Fehler 1231414](https://bugzil.la/1231414)).
- Die [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId)-Eigenschaft ist jetzt implementiert ([Firefox Fehler 1213453](https://bugzil.la/1213453)). Obwohl sie seit Firefox 39 existiert, wurden verwandte Geräte nicht tatsächlich in dieselben Gruppen-IDs zusammengefasst.
- Die [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)-Eigenschaft ist jetzt implementiert ([Firefox Fehler 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um `auto` korrekt als Standard für die [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekteigenschaft [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) zu verwenden, anstatt `center`. Dies bewirkt, dass die Ausrichtung des Cue-Feldes der Ausrichtung des darin enthaltenen Textes entspricht ([Firefox Fehler 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung wurde standardmäßig aktiviert ([Firefox Fehler 1535808](https://bugzil.la/1535808)).

#### Entfernungen

- Die veralteten Eigenschaften `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` (Teil von Shadow DOM v0) wurden entfernt ([Firefox Fehler 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) sowie die `ontouch*`-Ereignishandler-Eigenschaften wurden auf dem Desktop deaktiviert, um die Web-Kompatibilität auf Webseiten zu verbessern, auf denen Touch-Unterstützung zur mobilen Erkennung verwendet wird ([Firefox Fehler 1412485](https://bugzil.la/1412485)). In solchen Fällen wurde auf Berührungsbildschirmlaptops festgestellt, dass Webseiten sich fälschlicherweise oder unerwartet verhalten.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur noch in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1429432](https://bugzil.la/1429432)).
- Firefox blockiert nun das Laden von externen Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox Fehler 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde konform zur [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) gemacht ([Firefox Fehler 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird nicht mehr wegen Inkonsistenzen zwischen den Plattformen hinsichtlich des `focus`-Ereignisses timeouten ([Firefox Fehler 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` nutzen jetzt `Promises` intern ([Firefox Fehler 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt die `BuildID`-Zeichenkette von Firefox als Teil des Fähigkeitencodecnästígts-Objekts zurück ([Firefox Fehler 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Verwendung der Methode `proxy.settings.set()`, um `{{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}`-Werte zu ändern, wird eine Ausnahme auslösen, es sei denn, die Erweiterung wurde vom Benutzer für den Zugriff auf private Fenster freigegeben ([Firefox Fehler 1525447](https://bugzil.la/1525447)).

### Manifest-Änderungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browserfenstern oder -tabs ([Firefox Fehler 1511636](https://bugzil.la/1511636)).
- Die Einstellung `toolbar_field_highlight` steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox Fehler 1450114](https://bugzil.la/1450114)).
- Die Einstellung `toolbar_field_highlight_text` steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox Fehler 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 67: Dunkler Modus CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
