---
title: Firefox 67 für Entwickler
slug: Mozilla/Firefox/Releases/67
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 67, die Entwickler betreffen werden. Firefox 67 wurde am 21. Mai 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Debugger-Aktualisierungen:
  - [Spalten-Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html) ermöglichen es Ihnen, einen bestimmten Punkt (oder Spalte) in einer Codezeile auszuwählen, an dem der Debugger anhalten soll ([Firefox Fehler 1528417](https://bugzil.la/1528417)).
  - [Logpunkte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_a_logpoint/index.html) ermöglichen es Ihnen, spezifische Informationen an die Konsole zu protokollieren während der Codeausführung, ohne die Ausführung zu pausieren und ohne den Code ändern zu müssen.
  - Die [map scopes-Funktion](https://firefox-source-docs.mozilla.org/devtools-user/debugger/using_the_debugger_map_scopes_feature/index.html) ermöglicht es Ihnen, die Variablen aus dem Originalquellcode anzuzeigen.
  - Sie können [Worker-Threads debuggen](/de/docs/Web/API/Web_Workers_API/Using_web_workers#debugging_worker_threads) direkt im Debugger.

- Aktualisierungen der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):
  - Navigieren Sie Details in der Konsole mit der Tastatur ([Firefox Fehler 1424159](https://bugzil.la/1424159)).
  - Cmd + K wird jetzt die Konsole unter macOS leeren ([Firefox Fehler 1532939](https://bugzil.la/1532939)).
  - Wenn der Benutzer die Konsole leert, wird auch der Cache der Fehlermeldungen geleert ([Firefox Fehler 717611](https://bugzil.la/717611)).
  - Der Benutzer kann bestehende Module in die aktuelle Seite mit import importieren ([Firefox Fehler 1517546](https://bugzil.la/1517546)).
  - Ein neuer Kontextmenüpunkt ermöglicht es dem Benutzer, den Befehl **Linkadresse kopieren** zu verwenden ([Firefox Fehler 1457111](https://bugzil.la/1457111)).
  - Ein Klick auf einen Link in der Konsole verursacht dasselbe Verhalten wie im Inhaltsfenster ([Firefox Fehler 1466040](https://bugzil.la/1466040)).
  - Ein Klick auf den Quelllink für eine Datei im Konsolenbereich navigiert zum Debugger, wenn der Debugger die Datei kennt ([Firefox Fehler 1447244](https://bugzil.la/1447244)).
  - Wenn der Benutzer den Inhalt der Konsole gefiltert hat, wird ein Icon zum Filtertextfeld hinzugefügt, um den Filter zu löschen ([Firefox Fehler 1525821](https://bugzil.la/1525821)).

- Verbesserungen am [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):
  - Das [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Panel des Netzwerkmonitors wird nun eine Benachrichtigung für Ressourcen anzeigen, die zu einem bekannten Tracker gehören ([Firefox Fehler 1485416](https://bugzil.la/1485416)).
  - In den [Anforderungsspalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) des Netzwerkmonitors können Sie die sichtbaren Spalten und die Sortierung der Spalten steuern. Das Kontextmenü enthält jetzt einen Befehl, um die Sortierparameter der Liste auf die Standardeinstellungen zurückzusetzen ([Firefox Fehler 1454962](https://bugzil.la/1454962)).
  - Sie können die [Breite der Spalten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#network-request-columns) im Netzwerkmonitor an Ihren Arbeitsablauf anpassen ([Firefox Fehler 1358414](https://bugzil.la/1358414)).

#### Entferntes

- Die folgenden Entwicklerwerkzeug-Panels wurden entfernt (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):
  - Canvas-Debugger ([Firefox Fehler 1403938](https://bugzil.la/1403938)).
  - Shader-Editor ([Firefox Fehler 1342237](https://bugzil.la/1342237)).
  - WebAudio-Editor ([Firefox Fehler 1403944](https://bugzil.la/1403944)).

- Die folgenden Entwicklerwerkzeuge sind veraltet (siehe [Veraltete Werkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/deprecated_tools/index.html) für Details):
  - WebIDE ([Firefox Fehler 1539462](https://bugzil.la/1539462)).
  - Connect… Seite ([Firefox Fehler 1539462](https://bugzil.la/1539462)).

### HTML

- {{htmlelement("input")}}-Elemente mit `autocomplete="new-password"` werden keine zuvor gespeicherten Passwörter mehr automatisch ausfüllen ([Firefox Fehler 1119063](https://bugzil.la/1119063)).

### CSS

- Das {{cssxref("revert")}}-Schlüsselwort wurde implementiert ([Firefox Fehler 1215878](https://bugzil.la/1215878)).
- Der `break-word`-Wert der {{cssxref("word-break")}}-Eigenschaft wird nun unterstützt ([Firefox Fehler 1296042](https://bugzil.la/1296042)).
- Das [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienmerkmal wird jetzt unterstützt ([Firefox Fehler 1494034](https://bugzil.la/1494034)).
- Benutzerdefinierte {{cssxref("cursor")}}s, die größer als 32px sind, werden nun nicht mehr erlaubt, um potenzielle Malware-Nutzungen von großen Cursoren zu verringern ([Firefox Fehler 1445844](https://bugzil.la/1445844)).

#### Entferntes

- Die Verwendung der proprietären `-moz-binding`-Eigenschaft ist jetzt auf Chrome und UA-Stylesheets beschränkt ([Firefox Fehler 1523712](https://bugzil.la/1523712)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("String.prototype.matchAll")}} wurde implementiert und standardmäßig aktiviert ([Firefox Fehler 1435829](https://bugzil.la/1435829), [Firefox Fehler 1531830](https://bugzil.la/1531830)).
- Unterstützung für den dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) Vorschlag ist jetzt standardmäßig verfügbar ([Firefox Fehler 1517546](https://bugzil.la/1517546)).
- Der [hashbang-Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) Vorschlag ist jetzt implementiert ([Firefox Fehler 1519097](https://bugzil.la/1519097)).

### APIs

#### DOM

- Der Standardwert für [`Response.statusText`](/de/docs/Web/API/Response/statusText) ist jetzt `""` ([Firefox Fehler 1508996](https://bugzil.la/1508996)).
- Benutzerinteraktionen werden jetzt für abgelehnte Aufrufe von [`Document.requestStorageAccess`](/de/docs/Web/API/Document/requestStorageAccess) sowie für erfolgreiche Aufrufe beibehalten ([Firefox Fehler 1522912](https://bugzil.la/1522912)).

#### DOM-Ereignisse

- CSS-Übergangs- ([Firefox Fehler 1530239](https://bugzil.la/1530239)) und Animationsereignisse ([Firefox Fehler 1531605](https://bugzil.la/1531605)) treten jetzt auf deaktivierten (z. B. Formular-) Elementen auf.
- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) und [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) wurden implementiert ([Firefox Fehler 998941](https://bugzil.la/998941)).
- Der `insertFromPasteAsQuotation`-Wert von [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wird jetzt unterstützt ([Firefox Fehler 1532527](https://bugzil.la/1532527)).

#### Worker/Service Worker

- Strenge MIME-Typ-Prüfungen werden jetzt bei Scripts durchgesetzt, die von [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden ([Firefox Fehler 1514680](https://bugzil.la/1514680)).

#### Medien, Web Audio und WebRTC

- Der [AV1-Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) wird jetzt unter Linux unterstützt.
- [dav1d](https://code.videolan.org/videolan/dav1d) ist jetzt der Standard-Mediendecoder für [AV1](https://aomediacodec.github.io/av1-spec/av1-spec.pdf) (siehe zum Beispiel [Firefox Fehler 1533742](https://bugzil.la/1533742) und [Firefox Fehler 1535038](https://bugzil.la/1535038)).
- Ein Aufruf von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ohne Angabe von Streams funktioniert jetzt wie erwartet: es fügt eine streamlose Spur zur Verbindung hinzu. Jeder Peer ist verantwortlich für die Verwaltung der Zuordnung zwischen der Spur und jedem Stream an seinem Ende ([Firefox Fehler 1231414](https://bugzil.la/1231414)).
- Die [`MediaDeviceInfo.groupId`](/de/docs/Web/API/MediaDeviceInfo/groupId)-Eigenschaft ist jetzt implementiert ([Firefox Fehler 1213453](https://bugzil.la/1213453)). Obwohl sie seit Firefox 39 existiert, hat sie tatsächlich nicht verwandte Geräte zu denselben Gruppen-IDs zusammengefasst.
- Die [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)-Eigenschaft ist jetzt implementiert ([Firefox Fehler 1490658](https://bugzil.la/1490658)).
- [WebVTT](/de/docs/Web/API/WebVTT_API) wurde revidiert, um `auto` korrekt als Standardwert für die [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekteigenschaft [`positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) zu verwenden, anstelle von `center`. Dies bewirkt, dass sich die Ausrichtung des Cue-Kastens an der Ausrichtung des darin enthaltenen Textes ausrichtet ([Firefox Fehler 1528420](https://bugzil.la/1528420)).

#### Canvas und WebGL

- Die [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) WebGL-Erweiterung ist jetzt standardmäßig aktiviert ([Firefox Fehler 1535808](https://bugzil.la/1535808)).

#### Entferntes

- Die veralteten Eigenschaften `ShadowRoot.getElementsByTagName`, `ShadowRoot.getElementsByTagNameNS` und `ShadowRoot.getElementsByClassName` (Teil von Shadow DOM v0) wurden entfernt ([Firefox Fehler 1535438](https://bugzil.la/1535438)).
- [`document.createEvent("TouchEvent")`](/de/docs/Web/API/Document/createEvent), [`document.createTouch()`](/de/docs/Web/API/Document/createTouch), [`document.createTouchList()`](/de/docs/Web/API/Document/createTouchList), und die `ontouch*`-Ereignishandler-Eigenschaften wurden deaktiviert auf Desktop, um die Web-Kompatibilität auf Websites zu verbessern, auf denen der Touch-Support für die mobile Erkennung verwendet wird ([Firefox Fehler 1412485](https://bugzil.la/1412485)). In solchen Fällen wurde beobachtet, dass Websites auf Touchscreen-Laptops inkorrekt oder unerwartet funktionieren.

### Sicherheit

- [Benachrichtigungen](/de/docs/Web/API/Notifications_API) sind jetzt nur noch in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ([Firefox Fehler 1429432](https://bugzil.la/1429432)).
- Firefox blockiert jetzt das Laden von externen Protokoll-URLs in {{htmlelement("iframe")}}s ([Firefox Fehler 1527882](https://bugzil.la/1527882)).

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:SendAlertText` wurde konform zur [WebDriver-Spezifikation](https://w3c.github.io/webdriver/) gemacht ([Firefox Fehler 1502360](https://bugzil.la/1502360)).

#### Fehlerbehebungen

- `WebDriver:NewWindow` wird nicht mehr wegen Inkonsistenzen zwischen Plattformen bezüglich des `focus`-Ereignisses in die Zeitüberschreitung laufen ([Firefox Fehler 1523234](https://bugzil.la/1523234)).

#### Weitere

- Sowohl `WebDriver:ExecuteScript` als auch `WebDriver:ExecuteAsyncScript` verwenden jetzt intern `Promises` ([Firefox Fehler 1398095](https://bugzil.la/1398095)).
- `WebDriver:NewSession` gibt die `BuildID`-Zeichenkette von Firefox als Teil des Fähigkeitenobjekts zurück ([Firefox Fehler 1525829](https://bugzil.la/1525829)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Verwendung der Methode `proxy.settings.set()`, um die Werte von {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} zu ändern, wirft eine Ausnahme, es sei denn, der Erweiterung wurde vom Benutzer Zugriff auf das private Fenster gewährt ([Firefox Fehler 1525447](https://bugzil.la/1525447)).

### Manifest-Änderungen

- Ein neuer Manifest-Schlüssel, [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito), definiert das Verhalten einer Erweiterung in privaten Browsing-Fenstern oder -Tabs ([Firefox Fehler 1511636](https://bugzil.la/1511636)).
- Die Einstellung `toolbar_field_highlight` steuert die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox Fehler 1450114](https://bugzil.la/1450114)).
- Die Einstellung `toolbar_field_highlight_text` steuert die Textfarbe, die verwendet wird, um die aktuelle Auswahl von Text in der URL-Leiste anzuzeigen ([Firefox Fehler 1450114](https://bugzil.la/1450114)).

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 67: Dark Mode CSS, WebRender und mehr](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/)

## Ältere Versionen

{{Firefox_for_developers}}
