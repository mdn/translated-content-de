---
title: Firefox 60 Versionshinweise für Entwickler
short-title: Firefox 60
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 60, die Entwickler betreffen werden. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt in Firefox für Android in 60

[Firefox' neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — die [zuerst standardmäßig in Firefox 57 für Desktop aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), wurde nun in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- In der CSS-Pane-Regelansicht (siehe [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) wurden die Tastenkombinationen für präzise Wertinkremente (Erhöhung/Verringerung um 0,1) von `Alt` + `Up`/`Down` in `Ctrl` + `Up`/`Down` auf Linux und Windows geändert, um Kollisionen mit standardmäßigen OS-Level-Shortcuts zu vermeiden (siehe [Firefox Bug 1413314](https://bugzil.la/1413314)).
- Ebenfalls in der CSS-Pane-Regelansicht werden [CSS-Variablennamen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) jetzt automatisch vervollständigt ([Firefox Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, erscheinen alle Variablen, die Sie in Ihrem CSS deklariert haben, in einer Autovervollständigungs-Liste.
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein Dropdown _Reload when…_ hinzugefügt, das es Benutzern ermöglicht, das automatische Neuladen von Seiten zu aktivieren/deaktivieren, wenn die Touch-Simulation umgeschaltet wird oder wenn der simulierte User-Agent geändert wird. Weitere Details finden Sie unter [Steuerung des Seitenladeverhaltens](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) ([Firefox Bug 1428816](https://bugzil.la/1428816)).
- Die `view_source.tab`-Präferenz wurde entfernt, sodass Sie [Ansicht Quelle](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) nicht mehr zwischen dem Erscheinungsbild in einem neuen Tab oder neuem Fenster umschalten können. Quellseiten werden ab jetzt immer in neuen Tabs angezeigt ([Firefox Bug 1418403](https://bugzil.la/1418403)).

### HTML

Das Drücken der Eingabetaste in `designMode` und `contenteditable` fügt nun `<div>`-Elemente ein, wenn der Cursor in einem Inline-Element oder Textknoten ist, das ein Kind eines Block-Level-Bearbeitungshosts ist — anstatt `<br>`-Elemente einzufügen, wie es bisher der Fall war. Wenn Sie das alte Verhalten in Ihrer App verwenden möchten, können Sie dies mit `document.execCommand()` tun ([Firefox Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden gemäß der neuesten [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) Spezifikation aktualisiert ([Firefox Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015-Module wurden standardmäßig aktiviert ([Firefox Bug 1438139](https://bugzil.la/1438139)). Weitere Informationen finden Sie in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), oder konsultieren Sie die MDN-Referenzdokumentation:
  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Reference/Elements/script/type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Reference/Elements/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Aussagen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde erneut hinzugefügt ([Firefox Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine benutzerdefinierte Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- In der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das Wörterbuch-Objekt `MakePublicKeyCredentialOptions` in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox vorgenommen ([Firefox Bug 1436473](https://bugzil.la/1436473)).
- Die Präferenz `dom.workers.enabled` wurde entfernt, was bedeutet, dass Worker nicht mehr deaktiviert werden können, da ([Firefox Bug 1434934](https://bugzil.la/1434934)).
- Die [`body`](/de/docs/Web/API/Document/body) Eigenschaft wird nun in der [`Document`](/de/docs/Web/API/Document) Schnittstelle implementiert, anstatt in der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle ([Firefox Bug 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist jetzt in Workern verfügbar ([Firefox Bug 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox Bug 1436692](https://bugzil.la/1436692)).
- Das Attribut [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) der Interpunktionstaste wird ungleich null, auch wenn das aktive Tastaturlayout keine ASCII-Zeichen erzeugt. Siehe [diese Notizen für weitere Details](/de/docs/Web/API/KeyboardEvent/keyCode#printable_keys_in_standard_position). Bitte verwenden Sie `KeyboardEvent.keyCode` **nicht** in neuen Anwendungen — verwenden Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln wurden zur Bestimmung der [Schlüsselcodes von Interpunktionsschlüsseln](/de/docs/Web/API/KeyboardEvent/keyCode#printable_keys_in_standard_position) hinzugefügt ([Firefox Bug 1036008](https://bugzil.la/1036008)).
- Die Gecko-eigene Objektoption `storage` der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) wurde als veraltet markiert ([Firefox Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können nun innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Code verwendet werden ([Firefox Bug 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Medien und WebRTC

- Bei der Aufzeichnung oder Freigabe von Medien, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erlangt wurden, schaltet das Stummschalten der Kamera durch Setzen der Eigenschaft [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) der entsprechenden Spur auf `false` nun die "in use"-Anzeigeleuchte der Kamera aus, um dem Benutzer leichter zu zeigen, dass die Kamera nicht in Gebrauch ist ([Firefox Bug 1299515](https://bugzil.la/1299515)). Siehe [Benutzerprivatsphäre](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy) für weitere Details. Siehe auch [diesen Blog-Post](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Das Entfernen eines Tracks von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) entfernt nicht länger den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) des Tracks aus der Senderliste der Peer-Verbindung, wie es von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldet wird ([Firefox Bug 1290949](https://bugzil.la/1290949)).
- Die Zeitstempel der Objekte `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` wurden zuvor basierend auf Werten gemeldet, die von {{jsxref("Date.getTime()")}} zurückgegeben wurden. In Firefox 60 wurden diese korrigiert, um stattdessen die [Performance Timing API](/de/docs/Web/API/Performance_API) korrekt zu verwenden ([Firefox Bug 1433576](https://bugzil.la/1433576)).
- Gemäß der Spezifikation wirft der Konstruktor [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode) nun einen `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException), wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht über 1, 2 oder 4 Kanäle verfügt ([Firefox Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Ereignishandler [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) wurde entfernt; mittlerweile sollten Sie stattdessen [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse verwenden ([Firefox Bug 1442385](https://bugzil.la/1442385)).
- Der primäre Name für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist nun tatsächlich `RTCDataChannel`, anstatt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die Präferenz `privacy.resistFingerprinting` auf `true` gesetzt ist, wird die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info)-WebGL-Erweiterung ab jetzt deaktiviert ([Firefox Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite`-Cookies werden jetzt unterstützt ([Firefox Bug 795346](https://bugzil.la/795346)). Siehe {{HTTPHeader("Set-Cookie")}} für weitere Informationen.

### Sicherheit

Der {{httpheader("X-Content-Type-Options")}}-Header, wenn auf `no-sniff` gesetzt, folgt nun der Spezifikation für JavaScript MIME-Typen. Insbesondere `text/json` und `application/json` sind nicht länger gültige Werte ([Firefox Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Abfragen, die Anmeldeinformationen enthalten, können nun Verbindungen mit Abfragen teilen, die keine Anmeldeinformationen enthalten. Beispielsweise, wenn Anfragen der gleichen Herkunft einige Web-Schriften sowie einige mit Anmeldedaten versehene Benutzerdaten vom gleichen CDN anfordern, könnten beide eine Verbindung teilen, was möglicherweise zu einer schnelleren Abwicklung führt ([Firefox Bug 1363284](https://bugzil.la/1363284)).

## Entfernungen von der Webplattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären `{{cssxref("-moz-user-input")}}`-Eigenschaftswerte `enabled` und `disabled` sind nicht mehr verfügbar ([Firefox Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden komplett von der Plattform entfernt ([Firefox Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht-standardmäßige [expression closure](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Syntax wurde entfernt ([Firefox Bug 1426519](https://bugzil.la/1426519)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Theme-API:

- `headerURL` ist nun optional
- Beim Erstellen eines Browser-[Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird ein eventuell angewendeter {{cssxref("text-shadow")}} auf den Header-Text entfernt, wenn kein `headerURL` angegeben ist (siehe [Firefox Bug 1404688](https://bugzil.la/1404688)).
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
