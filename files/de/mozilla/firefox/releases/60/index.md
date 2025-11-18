---
title: Firefox 60 Versionshinweise für Entwickler
short-title: Firefox 60
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 60, die Entwickler betreffen werden. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt zu Firefox für Android in Version 60

[Firefox's neuer paralleler CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — welche [zuerst standardmäßig in Firefox 57 für den Desktop aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), ist jetzt auch in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Im CSS-Bereich im Regel-Ansichtsmodus (siehe [Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)), wurden die Tastenkombinationen für präzise Wertinkremente (Erhöhung/Verminderung um 0,1) von `Alt` + `Up`/`Down` zu `Ctrl` + `Up`/`Down` auf Linux und Windows geändert, um Konflikte mit standardmäßigen Betriebssystem-Shortcuts zu vermeiden (siehe [Firefox-Bug 1413314](https://bugzil.la/1413314)).
- Ebenfalls im CSS-Bereich im Regel-Ansichtsmodus, werden [CSS-Variablennamen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) jetzt automatisch vervollständigt ([Firefox-Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, erscheinen alle Variablen, die Sie in Ihrem CSS deklariert haben, in einer Autovervollständigungsliste.
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein Dropdown-Menü _Reload when…_ hinzugefügt, mit dem Benutzer automatische Seitenneuladen aktivieren/deaktivieren können, wenn die Touch-Simulation umgeschaltet wird oder der simulierte User-Agent geändert wird. Siehe [Steuern des Seiten-Neuladeverhaltens](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) für weitere Details ([Firefox-Bug 1428816](https://bugzil.la/1428816)).
- Die Präferenz `view_source.tab` wurde entfernt, sodass Sie den [View Source](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) Modus nicht mehr zwischen dem Erscheinen in einem neuen Tab oder einem neuen Fenster umschalten können. Quellseiten werden ab jetzt immer in neuen Tabs angezeigt ([Firefox-Bug 1418403](https://bugzil.la/1418403)).

### HTML

Wenn die Eingabetaste in `designMode` und `contenteditable` gedrückt wird, fügt sie jetzt `<div>` Elemente ein, wenn der Cursor sich in einem Inline-Element oder einem Textknoten befindet, der ein Kind eines Blockelement-Bearbeitungs-Hosts ist — anstatt `<br>` Elemente wie bisher einzufügen. Wenn Sie das alte Verhalten in Ihrer Anwendung verwenden möchten, können Sie dies mit `document.execCommand()` tun ([Firefox-Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}}, und {{cssxref("place-content")}} wurden entsprechend der neuesten [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) Spezifikation aktualisiert ([Firefox-Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox-Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015 Module wurden standardmäßig aktiviert ([Firefox-Bug 1438139](https://bugzil.la/1438139)). Siehe [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) für mehr Informationen oder konsultieren Sie die MDN-Referenzdokumente:
  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Reference/Elements/script/type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Reference/Elements/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde wieder hinzugefügt ([Firefox-Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine benutzerdefinierte Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox-Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- Im Rahmen der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das Dictionary-Objekt `MakePublicKeyCredentialOptions` in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox umgesetzt ([Firefox-Bug 1436473](https://bugzil.la/1436473)).
- Die Präferenz `dom.workers.enabled` wurde entfernt, d.h. dass Worker nicht mehr deaktiviert werden können ([Firefox-Bug 1434934](https://bugzil.la/1434934)).
- Die [`body`](/de/docs/Web/API/Document/body) Eigenschaft ist jetzt auf dem [`Document`](/de/docs/Web/API/Document) Interface anstelle des [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface implementiert ([Firefox-Bug 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist jetzt in Workern verfügbar ([Firefox-Bug 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox-Bug 1436692](https://bugzil.la/1436692)).
- Das Attribut [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) von Interpunktionstasten wird jetzt non-zero, selbst wenn das aktive Tastaturlayout keine ASCII-Zeichen produziert. Siehe [diese Notizen für mehr Details](/de/docs/Web/API/KeyboardEvent/keyCode#printable_keys_in_standard_position). Bitte verwenden Sie `KeyboardEvent.keyCode` **nicht** in neuen Anwendungen — verwenden Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox-Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln wurden aufgenommen, um [keyCode-Werte von Interpunktionstasten](/de/docs/Web/API/KeyboardEvent/keyCode#printable_keys_in_standard_position) zu bestimmen ([Firefox-Bug 1036008](https://bugzil.la/1036008)).
- Die Gecko-exklusive Options-Objekt `storage` Option der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) wurde als veraltet erklärt ([Firefox-Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können jetzt innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Code verwendet werden ([Firefox-Bug 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Medien und WebRTC

- Beim Aufnehmen oder Teilen von Medien, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfasst wurden, schaltet das Stummschalten der Kamera durch Setzen der Eigenschaft [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) des entsprechenden Tracks auf `false` nun die Anzeigeleuchte "in Verwendung" der Kamera aus, um dem Benutzer anzuzeigen, dass die Kamera nicht in Verwendung ist ([Firefox-Bug 1299515](https://bugzil.la/1299515)). Siehe [Benutzerdatenschutz](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy) für weitere Details. Siehe auch [diesen Blog-Post](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Das Entfernen eines Tracks von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) entfernt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) des Tracks nicht mehr aus der Senderliste der Peer-Verbindung, wie sie durch [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet wird ([Firefox-Bug 1290949](https://bugzil.la/1290949)).
- Die Zeitstempel der `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` Objekte wurden zuvor basierend auf von {{jsxref("Date.getTime()")}} zurückgegebenen Werten gemeldet. In Firefox 60 wurden diese korrigiert, um korrekt die [Performance Timing API](/de/docs/Web/API/Performance_API) zu verwenden ([Firefox-Bug 1433576](https://bugzil.la/1433576)).
- Wie in der Spezifikation, löst der [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode) Konstruktor jetzt einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) aus, wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht 1, 2 oder 4 Kanäle hat ([Firefox-Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Event-Handler [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) wurde entfernt; inzwischen sollten Sie stattdessen [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisse verwenden ([Firefox-Bug 1442385](https://bugzil.la/1442385)).
- Der primäre Name für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist jetzt in der Tat `RTCDataChannel`, anstatt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox-Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die Präferenz `privacy.resistFingerprinting` auf `true` gesetzt ist, wird die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung ab jetzt deaktiviert ([Firefox-Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite`-Cookies werden jetzt unterstützt ([Firefox-Bug 795346](https://bugzil.la/795346)). Siehe {{HTTPHeader("Set-Cookie")}} für mehr Informationen.

### Sicherheit

Der {{httpheader("X-Content-Type-Options")}} Header, wenn auf `no-sniff` gesetzt, folgt jetzt der Spezifikation für JavaScript-MIME-Typen. Insbesondere sind `text/json` und `application/json` keine gültigen Werte mehr ([Firefox-Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Fetches, die Anmeldedaten enthalten, können jetzt Verbindungen mit Fetches teilen, die keine Anmeldedaten enthalten. Wenn zum Beispiel die gleiche Herkunft einige Webfonts sowie einige authentifizierte Benutzerdaten vom gleichen CDN anfordert, könnten beide eine Verbindung teilen, was möglicherweise zu einer schnelleren Ausgabe führt ([Firefox-Bug 1363284](https://bugzil.la/1363284)).

## Entfernung aus der Webplattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären Werte `enabled` und `disabled` der {{cssxref("-moz-user-input")}} Eigenschaft sind nicht mehr verfügbar ([Firefox-Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden vollständig von der Plattform entfernt ([Firefox-Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht-standardmäßige [expression closure](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Syntax wurde entfernt ([Firefox-Bug 1426519](https://bugzil.la/1426519)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

Theme-API:

- `headerURL` ist jetzt optional
- Beim Erstellen eines Browser-[Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird jeder auf den Header-Text angewendete {{cssxref("text-shadow")}} entfernt, wenn kein `headerURL` angegeben ist (siehe [Firefox-Bug 1404688](https://bugzil.la/1404688)).
- Neue Eigenschaften werden unterstützt:
  - **tab_line**
  - **tab_selected**
  - **popup**
  - **popup_border**
  - **popup_text**
  - **tab_loading**
  - **icons**
  - **icons_attention**
  - **frame_inactive**
  - **button_background_active**
  - **button_background_hover**
