---
title: Firefox 67 für Entwickler
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 67, die Entwickler betreffen. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Debugger-Updates:

  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den genauen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger anhalten soll ([Firefox-Bug 1528417](https://bugzil.la/1528417)).
  - [Logpunkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) erlauben es Ihnen, bestimmte Informationen während der Codeausführung in der Konsole zu protokollieren, ohne die Ausführung anzuhalten und ohne den Code ändern zu müssen.
  - Das [Scopes-Mapping-Feature](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) ermöglicht es, die Variablen aus dem ursprünglichen Quellcode anzuzeigen.
  - Sie können [Worker-Threads](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) direkt im Debugger debuggen.

- Aktualisierungen der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

  - Navigieren Sie mit der Tastatur durch Details in der Konsole ([Firefox-Bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K wird jetzt die Konsole auf macOS von ihrem Inhalt befreien ([Firefox-Bug 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole leert, wird auch der Fehlernachrichtencache geleert ([Firefox-Bug 717611](https://bugzil.la/717611)).
  - Der Benutzer kann vorhandene Module in die aktuelle Seite mit `import` einbinden ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
  - Ein neuer Kontextmenübefehl erlaubt es dem Benutzer, den Befehl **Link-Adresse kopieren** zu verwenden ([Firefox-Bug 1457111](https://bugzil.la/1457111)).
  - Das Klicken auf einen Link in der Konsole führt zu demselben Verhalten, das es in einem Inhaltsfenster zeigen würde ([Firefox-Bug 1466040](https://bugzil.la/1466040)).
  - Ein Klick auf den Quelllink für eine Codedatei im Konsolenpanel navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox-Bug 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer die Inhalte der Konsole gefiltert hat, wird ein Symbol hinzugefügt, um den Filter im Filter-Textbox zu leeren ([Firefox-Bug 1525821](https://bugzil.la/1525821)).

- Verbesserungen beim [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

  - Das [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Panel des Netzwerkmonitors wird jetzt eine Benachrichtigung für Ressourcen anzeigen, die zu einem bekannten Tracker gehören ([Firefox-Bug 1485416](https://bugzil.la/1485416)).
  - In den [Anforderungs-Spalten des Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie die sichtbaren Spalten und das Sortieren der Spalten steuern. Das Kontextmenü enthält jetzt einen Befehl, um die Listensortierungsparameter auf die Standardeinstellungen zurückzusetzen ([Firefox-Bug 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor ändern, um sie an Ihren Arbeitsablauf anzupassen ([Firefox-Bug 1358414](https://bugzil.la/1358414)).

#### Entfernungen

- Die folgenden Entwicklerwerkzeuge-Panels wurden entfernt (siehe [Abgekündigte Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - Canvas-Debugger ([Firefox-Bug 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox-Bug 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox-Bug 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge wurden abgekündigt (siehe [Abgekündigte Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - WebIDE ([Firefox-Bug 1539462](https://bugzil.la/1539462)).
  - Connect… Seite ([Firefox-Bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` werden keine zuvor gespeicherten Passwörter mehr automatisch ausfüllen ([Firefox-Bug 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox-Bug 1215878](https://bugzil.la/1215878)).
- Der `break-word`-Wert für die {{cssxref("word-break")}}-Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1296042](https://bugzil.la/1296042)).
- Das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienmerkmal wird jetzt unterstützt ([Firefox-Bug 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s mit einer Größe von mehr als 32px sind jetzt nicht erlaubt, um potenzielle Malware-Verwendungen von großen Cursoren zu verhindern ([Firefox-Bug 1445844](https://bugzil.la/1445844)).

#### Entfernungen

- Die Verwendung der proprietären `-moz-binding`-Eigenschaft ist jetzt auf Chrome- und UA-Stylesheets beschränkt ([Firefox-Bug 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und standardmäßig aktiviert ([Firefox-Bug 1435829](https://bugzil.la/1435829), [Firefox-Bug 1531830](https://bugzil.la/1531830)).
- Unterstützung für den dynamischen Modulvorschlag {{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} ist jetzt standardmäßig verfügbar ([Firefox-Bug 1517546](https://bugzil.la/1517546)).
- Der [Hashbang-Grammatikvorschlag](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) ist jetzt implementiert ([Firefox-Bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox-Bug 1508996](https://bugzil.la/1508996)).
- Benutzeraktionen werden nun für abgelehnte Aufrufe von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) sowie für erfüllte Anrufe beibehalten ([Firefox-Bug 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Transitions- ([Firefox-Bug 1530239](https://bugzil.la/1530239)) und Animationsereignisse ([Firefox-Bug 1531605](https://bugzil.la/1531605)) werden jetzt für deaktivierte (z. B. Formular-) Elemente ausgelöst.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox-Bug 998941](https://bugzil.la/998941)).
- Der Wert `insertFromPasteAsQuotation` für [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wird nun unterstützt ([Firefox-Bug 1532527](https://bugzil.la/1532527)).

#### Worker/Service-Worker

- Strenge MIME-Typ-Kontrollen werden jetzt auf Skripte angewendet, die über [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden ([Firefox-Bug 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio, und WebRTC

- Der [AV1-Video-Codec](/de/docs/Web/Media/Formats/Video_codecs#av1) wird jetzt unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist nun der Standard-Mediendecoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe z. B. [Firefox-Bug 1533742](https://bugzil.la/1533742) und [Firefox-Bug 1535038](https://bugzil.la/1535038)).
- Das Aufrufen von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Angabe von Streams, zu denen der neue Track hinzugefügt werden soll, funktioniert nun wie erwartet: Es wird ein Track ohne Stream zur Verbindung hinzugefügt. Jeder Peer ist verantwortlich für die Verwaltung der Zuordnung zwischen dem Track und einem Stream an seinem Ende ([Firefox-Bug 1231414](https://bugzil.la/1231414)).
- Die Eigenschaft [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId) ist nun implementiert ([Firefox-Bug 1213453](https://bugzil.la/1213453)). Obwohl sie seit Firefox 39 existiert, hat sie nicht wirklich verwandte Geräte in dieselben Gruppen-IDs zusammengeführt.
- Die Eigenschaft [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) ist nun implementiert ([Firefox-Bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um `auto` als Standardwert für die [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekt's [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)-Eigenschaft korrekt zu verwenden, anstatt `center`. Dies führt dazu, dass die Ausrichtung der Cue-Box der Ausrichtung des Textes innerhalb entspricht ([Firefox-Bug 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend)-WebGL-Erweiterung wurde standardmäßig aktiviert ([Firefox-Bug 1535808](https://bugzil.la/1535808)).

#### Entfernungen

- Die veralteten Eigenschaften `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` (Teil von Shadow DOM v0) wurden entfernt ([Firefox-Bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) und die `ontouch*`-Ereignis-Handler-Eigenschaften wurden auf dem Desktop deaktiviert, um die Web-Kompatibilität auf Websites zu verbessern, auf denen Touch-Support für die mobile Erkennung verwendet wird ([Firefox-Bug 1412485](https://bugzil.la/1412485)). In solchen Fällen haben sich Websites fälschlicherweise oder unerwartet auf Touchscreen-Laptops verhalten.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur noch in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox-Bug 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden von externen Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox-Bug 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde konform mit der [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) gemacht ([Firefox-Bug 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird aufgrund von Inkonsistenzen zwischen Plattformen bezüglich des `focus`-Ereignisses nicht mehr in eine Timeout-Situation geraten ([Firefox-Bug 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox-Bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt den `BuildID`-String von Firefox als Teil des Fähigkeitenobjekts zurück ([Firefox-Bug 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Verwendung der Methode `proxy.settings.set()` zur Änderung von `{{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}`-Werten wirft eine Ausnahme, sofern die Erweiterung nicht vom Benutzer Zugriff auf private Fenster erhalten hat ([Firefox-Bug 1525447](https://bugzil.la/1525447)).

### Manifest-Änderungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browsing-Fenstern oder -Tabs ([Firefox-Bug 1511636](https://bugzil.la/1511636)).
- Die `toolbar_field_highlight`-Einstellung steuert die Hintergrundfarbe, die zur Anzeige der aktuellen Auswahl von Text in der URL-Leiste verwendet wird ([Firefox-Bug 1450114](https://bugzil.la/1450114)).
- Die `toolbar_field_highlight_text`-Einstellung steuert die Textfarbe, die zur Anzeige der aktuellen Auswahl von Text in der URL-Leiste verwendet wird ([Firefox-Bug 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks-Release-Post: [Firefox 67: Dark Mode CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
