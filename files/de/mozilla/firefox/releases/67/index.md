---
title: Firefox 67 für Entwickler
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 67, die Entwickler betreffen. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Debugger-Updates:

  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den spezifischen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger stoppen soll ([Firefox Fehler 1528417](https://bugzil.la/1528417)).
  - [Log-Punkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es, bestimmte Informationen in der Konsole während der Code-Ausführung zu protokollieren, ohne die Ausführung zu unterbrechen und ohne den Code ändern zu müssen.
  - Die [Scopes-Mapper-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) erlaubt es, die Variablen aus der ursprünglichen Quelle zu sehen.
  - Sie können [Worker-Threads debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) direkt im Debugger.

- [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Updates:

  - Navigieren Sie mit der Tastatur durch Details in der Konsole ([Firefox Fehler 1424159](https://bugzil.la/1424159)).
  - Cmd + K löscht nun die Konsole von ihren Inhalten auf macOS ([Firefox Fehler 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole leert, wird auch der Fehlernachrichten-Cache geleert ([Firefox Fehler 717611](https://bugzil.la/717611)).
  - Der Benutzer kann bestehende Module auf der aktuellen Seite mittels import einfügen ([Firefox Fehler 1517546](https://bugzil.la/1517546)).
  - Ein neuer Kontextmenüpunkt erlaubt es dem Benutzer, den Befehl **Linkadresse kopieren** zu verwenden ([Firefox Fehler 1457111](https://bugzil.la/1457111)).
  - Das Klicken auf einen Link in der Konsole verursacht dasselbe Verhalten wie in einem Inhaltsfenster ([Firefox Fehler 1466040](https://bugzil.la/1466040)).
  - Das Klicken auf den Quellenlink für eine Code-Datei im Konsolenpanel navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox Fehler 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer die Inhalte der Konsole gefiltert hat, wird ein Symbol im Filter-Textfeld hinzugefügt, um den Filter zu löschen ([Firefox Fehler 1525821](https://bugzil.la/1525821)).

- [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Verbesserungen:

  - Das [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Panel des Netzwerkmonitors zeigt jetzt eine Benachrichtigung für Ressourcen an, die zu einem bekannten Tracker gehören ([Firefox Fehler 1485416](https://bugzil.la/1485416)).
  - Im Netzwerkmonitor [Anforderungs-Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie die sichtbaren Spalten und die Spaltensortierung steuern. Das Kontextmenü beinhaltet nun einen Befehl, um die Liste auf die Standard-Sortierparameter zurückzusetzen ([Firefox Fehler 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor an Ihren Arbeitsablauf anpassen ([Firefox Fehler 1358414](https://bugzil.la/1358414)).

#### Entfernung

- Die folgenden Entwicklerwerkzeuge-Panels wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - Canvas Debugger ([Firefox Fehler 1403938](https://bugzil.la/1403938)).
  - Shader Editor ([Firefox Fehler 1342237](https://bugzil.la/1342237)).
  - WebAudio Editor ([Firefox Fehler 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge wurden als veraltet markiert (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - WebIDE ([Firefox Fehler 1539462](https://bugzil.la/1539462)).
  - Connect... Seite ([Firefox Fehler 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` werden nicht mehr mit zuvor gespeicherten Passwörtern automatisch ausgefüllt ([Firefox Fehler 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox Fehler 1215878](https://bugzil.la/1215878)).
- Der `break-word` Wert der {{cssxref("word-break")}}-Eigenschaft wird jetzt unterstützt ([Firefox Fehler 1296042](https://bugzil.la/1296042)).
- Die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienfunktion wird jetzt unterstützt ([Firefox Fehler 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}-Icons, die größer als 32px sind, sind jetzt verboten, um potenziellen Missbrauch durch Malware zu verhindern ([Firefox Fehler 1445844](https://bugzil.la/1445844)).

#### Entfernung

- Die Verwendung der proprietären `-moz-binding` Eigenschaft ist jetzt auf Chrome und UA-Stylesheets beschränkt ([Firefox Fehler 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und ist standardmäßig aktiviert ([Firefox Fehler 1435829](https://bugzil.la/1435829), [Firefox Fehler 1531830](https://bugzil.la/1531830)).
- Unterstützung für den Vorschlag des dynamischen Moduls {{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} ist jetzt standardmäßig verfügbar ([Firefox Fehler 1517546](https://bugzil.la/1517546)).
- Der [Hashbang-Grammar](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) Vorschlag ist jetzt implementiert ([Firefox Fehler 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox Fehler 1508996](https://bugzil.la/1508996)).
- Nutzeraktionen werden jetzt bei abgelehnten oder erfüllten Aufrufen von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) beibehalten ([Firefox Fehler 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Übergänge ([Firefox Fehler 1530239](https://bugzil.la/1530239)) und Animation ([Firefox Fehler 1531605](https://bugzil.la/1531605)) Ereignisse werden nun bei deaktivierten (z.B. Formular-)Elementen ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox Fehler 998941](https://bugzil.la/998941)).
- Der `insertFromPasteAsQuotation` [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) Wert wird jetzt unterstützt ([Firefox Fehler 1532527](https://bugzil.la/1532527)).

#### Worker/Service Worker

- Strikte MIME-Typ Prüfungen werden jetzt auf Skripten erzwungen, die von [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert wurden ([Firefox Fehler 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1 Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) wird jetzt unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist jetzt der Standard-Media-Decoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe z.B. [Firefox Fehler 1533742](https://bugzil.la/1533742) und [Firefox Fehler 1535038](https://bugzil.la/1535038)).
- Der Aufruf von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Angabe von Streams, zu denen der neue Track hinzugefügt werden soll, funktioniert nun wie erwartet: Es wird ein Streamloser Track zur Verbindung hinzugefügt. Jeder Peer ist verantwortlich für das Management der Zuordnung zwischen dem Track und jedem Stream auf seiner Seite ([Firefox Fehler 1231414](https://bugzil.la/1231414)).
- Die [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId) Eigenschaft ist jetzt implementiert ([Firefox Fehler 1213453](https://bugzil.la/1213453)). Obwohl sie bereits seit Firefox 39 in Firefox existiert, wurden damit nicht tatsächlich verwandte Geräte zu denselben Gruppen-IDs zusammengefasst.
- Die [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) Eigenschaft ist jetzt implementiert ([Firefox Fehler 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um korrekt `auto` als Standard für die [`VTTCue`](/de/docs/Web/API/VTTCue) Objekt-Eigenschaft [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) zu verwenden, anstatt `center`. Dies führt dazu, dass die Ausrichtung der Cue-Box der Ausrichtung des Textes darin entspricht ([Firefox Fehler 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung wurde standardmäßig aktiviert ([Firefox Fehler 1535808](https://bugzil.la/1535808)).

#### Entfernung

- Die veralteten `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` Eigenschaften (Teil von Shadow DOM v0) wurden entfernt ([Firefox Fehler 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList), und die `ontouch*` Ereignishandler-Eigenschaften wurden auf dem Desktop deaktiviert, um die Web-Kompatibilität auf Websites zu verbessern, auf denen Touch-Unterstützung zur mobilen Erkennung verwendet wird ([Firefox Fehler 1412485](https://bugzil.la/1412485)). In solchen Fällen verhielten sich Websites falsch oder unerwartet auf Laptops mit Touchscreen.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur noch in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden von externen Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox Fehler 1527882](https://bugzil.la/1527882)).

### WebDriver Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde konform mit der [WebDriver Spezifikation](https://w3c.github.io/webdriver/) gemacht ([Firefox Fehler 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird nicht mehr aufgrund von Inkonsistenzen zwischen Plattformen bezüglich des `focus` Events time-outen ([Firefox Fehler 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox Fehler 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt Firefox's `BuildID`-String als Teil des Fähigkeiten-Objekts zurück ([Firefox Fehler 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Verwendung der Methode `proxy.settings.set()`, um {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Werte zu ändern, wird eine Ausnahme auslösen, es sei denn, die Erweiterung wurde vom Benutzer mit Zugriff auf private Fenster versehen ([Firefox Fehler 1525447](https://bugzil.la/1525447)).

### Manifeständerungen

- Ein neuer Schlüssel im Manifest, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browsing-Fenstern oder -Tabs ([Firefox Fehler 1511636](https://bugzil.la/1511636)).
- Die Einstellung `toolbar_field_highlight` steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox Fehler 1450114](https://bugzil.la/1450114)).
- Die Einstellung `toolbar_field_highlight_text` steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox Fehler 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 67: Dark Mode CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
