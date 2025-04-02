---
title: Firefox 60 für Entwickler
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 60, die Entwickler betreffen werden. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt in Firefox für Android in Version 60

[Firefoxs neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** —, die [zuerst standardmäßig in Firefox 57 für Desktop aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), wurde nun in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- In der CSS-Ansicht der Regelansicht (siehe [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) haben sich die Tastenkombinationen für präzise Wertinkremente (Erhöhung/Verringerung um 0.1) von `Alt` + `Up`/`Down` zu `Ctrl` + `Up`/`Down` auf Linux und Windows geändert, um Konflikte mit standardmäßigen OS-Level-Tastenkombinationen zu vermeiden (siehe [Firefox-Bug 1413314](https://bugzil.la/1413314)).
- Ebenfalls in der CSS-Ansicht der Regelansicht werden [CSS-Variablennamen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) nun automatisch vervollständigt ([Firefox-Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, erscheinen alle Variablen, die Sie in Ihrem CSS deklariert haben, in einer Autovervollständigungsliste.
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein _Neuladen, wenn..._-Dropdown hinzugefügt, um es Nutzern zu ermöglichen, das automatische Neuladen der Seite zu aktivieren/deaktivieren, wenn die Touch-Simulation umgeschaltet wird oder der simulierte User-Agent geändert wird. Details dazu finden Sie in der [Steuerung des Page-Reload-Verhaltens](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) ([Firefox-Bug 1428816](https://bugzil.la/1428816)).
- Die `view_source.tab`-Einstellung wurde entfernt, sodass Sie den [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html)-Modus nicht mehr zwischen neuem Tab und neuem Fenster umschalten können. Quellen werden jetzt immer in neuen Tabs angezeigt ([Firefox-Bug 1418403](https://bugzil.la/1418403)).

### HTML

Beim Drücken der Enter-Taste in `designMode` und `contenteditable` werden jetzt `<div>`-Elemente eingefügt, wenn der Cursor in einem Inline-Element oder Textknoten ist, der ein Kind eines Block-Level-Bearbeitungshosts ist — anstelle der früher eingefügten `<br>`-Elemente. Wenn Sie in Ihrer Anwendung das alte Verhalten verwenden möchten, können Sie dies mit `document.execCommand()` tun. Details finden Sie unter [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) (siehe auch [Firefox-Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden gemäß der neuesten [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) Spezifikation aktualisiert ([Firefox-Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox-Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015-Module wurden standardmäßig aktiviert ([Firefox-Bug 1438139](https://bugzil.la/1438139)). Weitere Informationen finden Sie unter [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES-Module: Eine cartoonartige Vertiefung](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), oder konsultieren Sie die MDN-Referenzdokumente:

  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Element/script/type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Element/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde erneut hinzugefügt ([Firefox-Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine benutzerdefinierte Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox-Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- In der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das Wörterbuchobjekt `MakePublicKeyCredentialOptions` in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox vorgenommen ([Firefox-Bug 1436473](https://bugzil.la/1436473)).
- Die Voreinstellung `dom.workers.enabled` wurde entfernt, was bedeutet, dass Worker nicht mehr deaktiviert werden können ([Firefox-Bug 1434934](https://bugzil.la/1434934)).
- Die Eigenschaft [`body`](/de/docs/Web/API/Document/body) ist jetzt in der [`Document`](/de/docs/Web/API/Document) Schnittstelle implementiert und nicht mehr in der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle ([Firefox-Bug 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist jetzt in Workern verfügbar ([Firefox-Bug 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox-Bug 1436692](https://bugzil.la/1436692)).
- Das Attribut [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) von Satzzeichen-Tasten wird selbst dann ungleich Null, wenn das aktive Tastaturlayout keine ASCII-Zeichen erzeugt. Weitere Details finden Sie in [diesen Notizen](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout). Bitte verwenden Sie `KeyboardEvent.keyCode` in neuen Anwendungen **nicht** — verwenden Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox-Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln zur Bestimmung der [keyCode-Werte von Satzzeichenschlüsseln](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout) wurden aufgenommen ([Firefox-Bug 1036008](https://bugzil.la/1036008)).
- Die Gecko-exklusive Optionsobjekt `storage` Option der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) (siehe [Experimentelles Gecko-Optionsobjekt](/de/docs/Web/API/IDBFactory/open#experimental_gecko_options_object)) wurde als veraltet markiert ([Firefox-Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können jetzt innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Code verwendet werden ([Firefox-Bug 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

_Keine Änderungen._

#### Medien und WebRTC

- Beim Aufzeichnen oder Teilen von Medien, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfasst wurden, bewirkt das Stummschalten der Kamera durch Setzen der entsprechenden Spur-Eigenschaft [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) auf `false` jetzt, dass das "In Betrieb"-Anzeigeleuchte der Kamera ausgeschaltet wird, um dem Benutzer leichter zu zeigen, dass die Kamera nicht in Betrieb ist ([Firefox-Bug 1299515](https://bugzil.la/1299515)). Weitere Details finden Sie unter [Benutzersicherheit](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy). Siehe auch [diesen Blogbeitrag](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Beim Entfernen einer Spur von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch Verwendung von [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) wird der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) der Spur nicht mehr aus der Senderliste der Peer-Verbindung entfernt, wie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet ([Firefox-Bug 1290949](https://bugzil.la/1290949)).
- Die Zeitstempel der Objekte `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` wurden bisher basierend auf Werten berichtet, die von {{jsxref("Date.getTime()")}} zurückgegeben wurden. In Firefox 60 wurden diese behoben, um korrekt die [Performance Timing API](/de/docs/Web/API/Performance_API) zu verwenden ([Firefox-Bug 1433576](https://bugzil.la/1433576)).
- Laut Spezifikation wirft der Konstruktor [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode) nun eine `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht über 1, 2 oder 4 Kanäle verfügt ([Firefox-Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Ereignishandler [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) wurde entfernt; Sie sollten jetzt [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisse anstelle dessen verwenden ([Firefox-Bug 1442385](https://bugzil.la/1442385)).
- Der primäre Name für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist jetzt tatsächlich `RTCDataChannel`, anstatt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox-Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die `privacy.resistFingerprinting` Einstellung auf `true` gesetzt ist, wird die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung von nun an deaktiviert sein ([Firefox-Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite` Cookies werden jetzt unterstützt ([Firefox-Bug 795346](https://bugzil.la/795346)). Weitere Informationen finden Sie unter {{HTTPHeader("Set-Cookie")}}.

### Sicherheit

Der Header {{httpheader("X-Content-Type-Options")}}, wenn auf `no-sniff` gesetzt, befolgt nun die Spezifikation für JavaScript-MIME-Typen. Insbesondere sind `text/json` und `application/json` keine gültigen Werte mehr ([Firefox-Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Fetches, die Anmeldedaten enthalten, können jetzt Verbindungen mit Fetches teilen, die keine Anmeldedaten enthalten. Wenn z. B. dieselbe Quelle einige Web-Fonts sowie einige berechtigte Benutzerdaten vom selben CDN anfordert, können beide eine Verbindung teilen, was zu einer schnelleren Reaktionszeit führen könnte ([Firefox-Bug 1363284](https://bugzil.la/1363284)).

## Entfernt aus der Webplattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären Werte `enabled` und `disabled` der {{cssxref("-moz-user-input")}} Eigenschaft sind nicht mehr verfügbar ([Firefox-Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden vollständig aus der Plattform entfernt ([Firefox-Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht standardisierte [expression closure](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Syntax wurde entfernt ([Firefox-Bug 1426519](https://bugzil.la/1426519)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-ons und Mozilla-Entwickler

### WebExtensions

Theme-API:

- headerURL ist jetzt optional
- Beim Erstellen eines Browser [Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird jeglicher {{cssxref("text-shadow")}}, der auf den Header-Text angewendet wird, entfernt, wenn keine `headerURL` angegeben ist (siehe [Firefox-Bug 1404688](https://bugzil.la/1404688)).
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

## Ältere Versionen

{{Firefox_for_developers}}
