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

  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, den genauen Punkt (oder die Spalte) in einer Codezeile auszuwählen, an dem der Debugger anhalten soll ([Firefox bug 1528417](https://bugzil.la/1528417)).
  - [Logpunkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es Ihnen, spezifische Informationen während der Code-Ausführung in die Konsole zu loggen, ohne die Ausführung zu unterbrechen und ohne den Code ändern zu müssen.
  - Das [Scoping-Feature](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) ermöglicht es Ihnen, die Variablen aus der Originalquelle zu sehen.
  - Sie können Worker-Threads direkt im Debugger [debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads).

- [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Updates:

  - Navigieren Sie Details in der Konsole mit der Tastatur ([Firefox bug 1424159](https://bugzil.la/1424159)).
  - Cmd + K wird jetzt den Inhalt der Konsole auf macOS leeren ([Firefox bug 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole leert, wird auch der Cache der Fehlermeldungen geleert ([Firefox bug 717611](https://bugzil.la/717611)).
  - Der Benutzer kann vorhandene Module in die aktuelle Seite importieren, indem er import verwendet ([Firefox bug 1517546](https://bugzil.la/1517546)).
  - Ein neuer Kontextmenüpunkt erlaubt dem Benutzer, den Befehl **Linkadresse kopieren** zu verwenden ([Firefox bug 1457111](https://bugzil.la/1457111)).
  - Ein Klick auf einen Link in der Konsole verursacht das gleiche Verhalten wie in einem Inhaltsfenster ([Firefox bug 1466040](https://bugzil.la/1466040)).
  - Ein Klick auf den Quelllink für eine Code-Datei im Konsolenfeld navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox bug 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer den Inhalt der Konsole gefiltert hat, wird ein Symbol zur Textfilterbox hinzugefügt, um den Filter zu löschen ([Firefox bug 1525821](https://bugzil.la/1525821)).

- Verbesserungen beim [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

  - Das [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Paneel des Netzwerkmonitors zeigt jetzt eine Benachrichtigung für Ressourcen an, die zu einem bekannten Tracker gehören ([Firefox bug 1485416](https://bugzil.la/1485416)).
  - In den Netzwerkmonitor [Anfrage-Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) können Sie die sichtbaren Spalten und die Spaltensortierung steuern. Das Kontextmenü enthält jetzt einen Befehl, um die Listen-Sortierparameter auf den Standard zurückzusetzen ([Firefox bug 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor ändern, um Ihrem Arbeitsablauf gerecht zu werden ([Firefox bug 1358414](https://bugzil.la/1358414)).

#### Entfernt

- Die folgenden Entwicklerwerkzeug-Paneele wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - Canvas-Debugger ([Firefox bug 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox bug 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox bug 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge sind veraltet (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):

  - WebIDE ([Firefox bug 1539462](https://bugzil.la/1539462)).
  - Verbindungsseite… ([Firefox bug 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` darauf gesetzt, werden keine vorher gespeicherten Passwörter mehr automatisch ausfüllen ([Firefox bug 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlagwort wurde implementiert ([Firefox bug 1215878](https://bugzil.la/1215878)).
- Der `break-word`-Wert der {{cssxref("word-break")}}-Eigenschaft wird jetzt unterstützt ([Firefox bug 1296042](https://bugzil.la/1296042)).
- Die [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medieneigenschaft wird jetzt unterstützt ([Firefox bug 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s von mehr als 32px Größe sind jetzt nicht mehr erlaubt, um potenzielle Malware-Nutzungen großer Cursor zu verhindern ([Firefox bug 1445844](https://bugzil.la/1445844)).

#### Entfernt

- Die Verwendung der proprietären `-moz-binding`-Eigenschaft ist jetzt auf Chrome- und UA-Stylesheets beschränkt ([Firefox bug 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und ist standardmäßig aktiviert ([Firefox bug 1435829](https://bugzil.la/1435829), [Firefox bug 1531830](https://bugzil.la/1531830)).
- Die Unterstützung für den Vorschlag der dynamischen Modul-{{jsxref("Statements/import", "import()", "#Dynamic_Imports")}} ist jetzt standardmäßig verfügbar ([Firefox bug 1517546](https://bugzil.la/1517546)).
- Die [Hashbang-Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) wird jetzt umgesetzt ([Firefox bug 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für {{domxref("Response.statusText")}} ist jetzt `""` ([Firefox bug 1508996](https://bugzil.la/1508996)).
- Benutzeraktionen werden für abgelehnte sowie erfüllte Anrufe bei {{domxref("Document.requestStorageAccess")}} beibehalten ([Firefox bug 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Übergänge ([Firefox bug 1530239](https://bugzil.la/1530239)) und Animationsereignisse ([Firefox bug 1531605](https://bugzil.la/1531605)) werden jetzt bei deaktivierten (z. B. Formular-)Elementen ausgelöst.
- {{domxref("InputEvent.data")}} und {{domxref("InputEvent.dataTransfer")}} wurden implementiert ([Firefox bug 998941](https://bugzil.la/998941)).
- Der `insertFromPasteAsQuotation`-Wert von {{domxref("InputEvent.inputType")}} wird jetzt unterstützt ([Firefox bug 1532527](https://bugzil.la/1532527)).

#### Worker/Service-Worker

- Strenge MIME-Type-Überprüfungen werden jetzt auf von {{domxref("WorkerGlobalScope.importScripts()")}} importierte Skripte angewendet ([Firefox bug 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1-Videocodec](/de/docs/Web/Media/Formats/Video_codecs#av1) wird jetzt unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist jetzt der Standard-Mediendekoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe zum Beispiel [Firefox bug 1533742](https://bugzil.la/1533742) und [Firefox bug 1535038](https://bugzil.la/1535038)).
- Das Aufrufen von {{domxref("RTCPeerConnection.addTrack()")}} ohne Angabe von Streams, denen der neue Track hinzugefügt werden soll, funktioniert jetzt wie erwartet: Es fügt einen streamlosen Track zur Verbindung hinzu. Jede Partei ist dafür verantwortlich, die Zuordnung zwischen dem Track und einem Stream auf ihrer Seite zu verwalten ([Firefox bug 1231414](https://bugzil.la/1231414)).
- Die {{domxref("MediaDeviceInfo.groupId")}}-Eigenschaft ist jetzt implementiert ([Firefox bug 1213453](https://bugzil.la/1213453)). Obwohl sie seit Firefox 39 in Firefox existierte, führte sie nicht tatsächlich zusammengehörige Geräte in die gleichen Gruppen-IDs zusammen.
- Die {{domxref("RTCIceCandidate.usernameFragment")}}-Eigenschaft ist jetzt implementiert ([Firefox bug 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde überarbeitet, um `auto` korrekt als Standard für die {{domxref("VTTCue")}}-Objekteigenschaft {{domxref("VTTCue.positionAlign", "positionAlign")}} zu verwenden, anstatt `center`. Dadurch entspricht die Ausrichtung des Cue-Box der Ausrichtung des darin enthaltenen Textes ([Firefox bug 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung ist jetzt standardmäßig aktiviert ([Firefox bug 1535808](https://bugzil.la/1535808)).

#### Entfernt

- Die veralteten Eigenschaften `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` (Teil von Shadow DOM v0) wurden entfernt ([Firefox bug 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), {{domxref("document.createTouch()")}}, {{domxref("document.createTouchList()")}} und die `ontouch*`-Ereignishandler-Eigenschaften wurden auf dem Desktop deaktiviert, um die Web-Kompatibilität auf Websites zu verbessern, bei denen Touch-Unterstützung für die mobile Erkennung verwendet wird ([Firefox bug 1412485](https://bugzil.la/1412485)). In solchen Fällen wurde beobachtet, dass Websites sich auf Touchscreen-Laptops inkorrekt oder unerwartet verhalten.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) stehen jetzt nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) zur Verfügung ([Firefox bug 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden von externen Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox bug 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde konform zur [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) gemacht ([Firefox bug 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird nicht mehr aufgrund von Inkonsistenzen zwischen Plattformen bezüglich des `focus`-Ereignisses zeitlich überschreiten ([Firefox bug 1523234](https://bugzil.la/1523234)).

#### Sonstiges

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox bug 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt den `BuildID`-String von Firefox als Teil des Fähigkeiten-Objekts zurück ([Firefox bug 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Beim Verwenden der Methode `proxy.settings.set()`, um `{{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}`-Werte zu ändern, wird eine Ausnahme ausgelöst, es sei denn, die Erweiterung wurde vom Benutzer zum Zugriff auf private Fenster autorisiert ([Firefox bug 1525447](https://bugzil.la/1525447)).

### Manifest-Änderungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browserfenstern oder -Tabs ([Firefox bug 1511636](https://bugzil.la/1511636)).
- Die Einstellung `toolbar_field_highlight` steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox bug 1450114](https://bugzil.la/1450114)).
- Die Einstellung `toolbar_field_highlight_text` steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox bug 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks-Release-Beitrag: [Firefox 67: Dark Mode CSS, WebRender, und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
