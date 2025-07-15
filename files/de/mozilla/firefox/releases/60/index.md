---
title: Firefox 60 für Entwickler
short-title: Firefox 60
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 60, die Entwickler betreffen werden. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt zu Firefox für Android in Version 60

[Firefox' neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) – auch bekannt als **Quantum CSS** oder **Stylo** – die [zuerst in Firefox 57 für Desktop standardmäßig aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), wurde jetzt in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- In der CSS-Pane-Regelansicht (siehe [Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) haben sich die Tastenkombinationen für präzise Werteänderungen (Erhöhung/Verringerung um 0,1) von `Alt` + `Up`/`Down` auf `Ctrl` + `Up`/`Down` auf Linux und Windows geändert, um Konflikte mit den Standard-OS-Ebene-Kürzeln zu vermeiden (siehe [Firefox Bug 1413314](https://bugzil.la/1413314)).
- Auch in der CSS-Pane-Regelansicht werden [CSS-Variablennamen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) jetzt automatisch vervollständigt ([Firefox Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, erscheinen alle Variablen, die Sie in Ihrem CSS deklariert haben, in einer Autovervollständigungsliste.
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein _Neuladen bei…_ Dropdown-Menü hinzugefügt, das Benutzern ermöglicht, das automatische Seiten-Reload aktivieren/deaktivieren, wenn die Touch-Simulation umgeschaltet oder der simulierte User-Agent geändert wird. Weitere Details finden Sie unter [Kontrolle des Seiten-Reload-Verhaltens](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) ([Firefox Bug 1428816](https://bugzil.la/1428816)).
- Die `view_source.tab`-Einstellung wurde entfernt, sodass Sie den [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html)-Modus nicht mehr umschalten können, um in einem neuen Tab oder Fenster zu erscheinen. Seitenquellen erscheinen von nun an immer in neuen Tabs ([Firefox Bug 1418403](https://bugzil.la/1418403)).

### HTML

Durch Drücken der Eingabetaste in `designMode` und `contenteditable` werden jetzt `<div>`-Elemente eingefügt, wenn der Cursor in einem Inline-Element oder Textknoten steht, das ein Kind eines Block-level-Bearbeitungshosts ist – anstatt `<br>`-Elemente wie bisher einzufügen. Wenn Sie das alte Verhalten in Ihrer App verwenden möchten, können Sie dies mit `document.execCommand()` tun ([Firefox Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden gemäß dem neuesten [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) Spezifikation aktualisiert ([Firefox Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015-Module wurden standardmäßig aktiviert ([Firefox Bug 1438139](https://bugzil.la/1438139)). Weitere Informationen finden Sie unter [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), oder konsultieren Sie die MDN-Referenzdokumentation:
  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Reference/Elements/script/type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Reference/Elements/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde erneut hinzugefügt ([Firefox Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine eigene Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- In der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das Dictionary-Objekt `MakePublicKeyCredentialOptions` in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox vorgenommen ([Firefox Bug 1436473](https://bugzil.la/1436473)).
- Die Einstellung `dom.workers.enabled` wurde entfernt, was bedeutet, dass Worker nicht mehr deaktiviert werden können ([Firefox Bug 1434934](https://bugzil.la/1434934)).
- Die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft ist jetzt auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle implementiert, anstatt auf der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle ([Firefox Bug 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist jetzt in Workern verfügbar ([Firefox Bug 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox Bug 1436692](https://bugzil.la/1436692)).
- Die Attribut des [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) für Zeichensetzungs-Tasten wird nun ungleich null, auch wenn das aktive Tastaturlayout keine ASCII-Zeichen produziert. Weitere Details finden Sie in [diesen Notizen](/de/docs/Web/API/KeyboardEvent/keyCode#printable_keys_in_standard_position). Bitte verwenden Sie **nicht** `KeyboardEvent.keyCode` in neuen Anwendungen – verwenden Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln zur Bestimmung der [keyCode-Werte von Zeichensetzungstasten](/de/docs/Web/API/KeyboardEvent/keyCode#printable_keys_in_standard_position) wurden hinzugefügt ([Firefox Bug 1036008](https://bugzil.la/1036008)).
- Die ausschließlich Gecko-spezifische Optionsobjekt-Option `storage` der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) wurde als veraltet markiert ([Firefox Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können jetzt im [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Code verwendet werden ([Firefox Bug 1193394](https://bugzil.la/1193394)).

#### DOM Events

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Media und WebRTC

- Beim Aufzeichnen oder Teilen von Medien, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden, wird das Indikatorlicht "in Benutzung" der Kamera ausgeschaltet, wenn die Kamera durch Setzen der entsprechenden Spur der Eigenschaft [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) auf `false` stummgeschaltet wird, um dem Benutzer zu helfen, leichter zu erkennen, dass die Kamera nicht in Benutzung ist ([Firefox Bug 1299515](https://bugzil.la/1299515)). Weitere Informationen finden Sie unter [Benutzerdatenschutz](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy). Siehe auch [diesen Blogbeitrag](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Das Entfernen einer Spur von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) entfernt nicht mehr den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) der Spur aus der Liste der Sender der Peer-Verbindung, wie sie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldet wird ([Firefox Bug 1290949](https://bugzil.la/1290949)).
- Die `RTCRtpContributingSource`- und `RTCRtpSynchronizationSource`-Objekte verwendeten bisher Werte, die von {{jsxref("Date.getTime()")}} zurückgegeben wurden. In Firefox 60 wurden diese korrigiert, um stattdessen korrekt die [Performance Timing API](/de/docs/Web/API/Performance_API) zu verwenden ([Firefox Bug 1433576](https://bugzil.la/1433576)).
- Gemäß der Spezifikation löst der Konstruktor [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode) jetzt einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) aus, wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht 1, 2 oder 4 Kanäle hat ([Firefox Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete Eventhandler [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde entfernt; stattdessen sollten jetzt [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisse verwendet werden ([Firefox Bug 1442385](https://bugzil.la/1442385)).
- Der primäre Name für die Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist jetzt tatsächlich `RTCDataChannel` und nicht mehr ein Alias für `DataChannel`. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die `privacy.resistFingerprinting`-Einstellung auf `true` gesetzt ist, wird die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung zukünftig deaktiviert ([Firefox Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite`-Cookies werden jetzt unterstützt ([Firefox Bug 795346](https://bugzil.la/795346)). Siehe {{HTTPHeader("Set-Cookie")}} für weitere Informationen.

### Sicherheit

Der {{httpheader("X-Content-Type-Options")}}-Header, wenn auf `no-sniff` gesetzt, folgt jetzt der Spezifikation für JavaScript MIME-Typen. Insbesondere `text/json` und `application/json` sind keine gültigen Werte mehr ([Firefox Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Abfragen, die Anmeldeinformationen enthalten, können jetzt Verbindungen mit Abfragen teilen, die keine Anmeldeinformationen enthalten. Zum Beispiel, wenn die gleiche Herkunft einige Webfonts wie auch einige abgerufene Benutzerdaten von demselben CDN anfordert, könnten beide eine Verbindung teilen, was möglicherweise zu einer schnelleren Bearbeitung führt ([Firefox Bug 1363284](https://bugzil.la/1363284)).

## Entfernungen aus der Webplattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären Werte `enabled` und `disabled` der Eigenschaft {{cssxref("-moz-user-input")}} sind nicht mehr verfügbar ([Firefox Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden vollständig aus der Plattform entfernt ([Firefox Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht-standardisierte Syntax der [Expression Closures](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde entfernt ([Firefox Bug 1426519](https://bugzil.la/1426519)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Theme-API:

- headerURL ist jetzt optional
- Beim Erstellen eines Browser-[Themas](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird jeglicher angewandter {{cssxref("text-shadow")}} auf den Header-Text entfernt, wenn keine `headerURL` angegeben ist (siehe [Firefox Bug 1404688](https://bugzil.la/1404688)).
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
