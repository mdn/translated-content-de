---
title: Firefox 60 für Entwickler
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 60, die Entwickler betreffen werden. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt in Firefox für Android in Version 60

[Firefox's neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — die [zuerst standardmäßig in Firefox 57 für den Desktop aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), wurde nun in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- In der CSS-Paneel-Regelansicht (siehe [Untersuchen und Bearbeiten von CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) wurden die Tastenkombinationen für präzise Wertänderungen (Erhöhung/Verringerung um 0,1) von `Alt` + `Up`/`Down` zu `Ctrl` + `Up`/`Down` auf Linux und Windows geändert, um Konflikte mit den Standardeinstellungen auf Betriebssystemebene zu vermeiden (siehe [Firefox-Bug 1413314](https://bugzil.la/1413314)).
- Ebenfalls in der CSS-Paneel-Regelansicht werden [CSS-Variablennamen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) nun automatisch vervollständigt ([Firefox-Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, erscheinen alle in Ihrem CSS deklarierten Variablen in einer Autovervollständigungsliste.
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein _Neuladen wenn..._-Dropdown hinzugefügt, um Benutzern zu ermöglichen, das automatische Neuladen der Seite zu aktivieren/deaktivieren, wenn die Touch-Simulation umgeschaltet wird oder der simulierte User-Agent geändert wird. Weitere Details finden Sie unter [Steuerung des Neuladeverhaltens der Seite](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) ([Firefox-Bug 1428816](https://bugzil.la/1428816)).
- Die Einstellung `view_source.tab` wurde entfernt, sodass Sie den Modus [Seitenquelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) nicht mehr zwischen einem neuen Tab oder einem neuen Fenster umschalten können. Seitenquellen werden ab jetzt immer in neuen Tabs angezeigt ([Firefox-Bug 1418403](https://bugzil.la/1418403)).

### HTML

Das Drücken der Enter-Taste in `designMode` und `contenteditable` fügt jetzt `<div>`-Elemente ein, wenn der Cursor in einem Inline-Element oder Textknoten steht, der ein Kind eines Block-Editierhosts ist — anstatt `<br>`-Elemente wie bisher. Wenn Sie in Ihrer App das alte Verhalten verwenden möchten, können Sie dies mit `document.execCommand()` tun. Weitere Einzelheiten finden Sie unter [Unterschiede in der Markierungserzeugung](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable#differences_in_markup_generation) (siehe auch [Firefox-Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden gemäß der neuesten [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) Spezifikation aktualisiert ([Firefox-Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox-Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015-Module wurden standardmäßig aktiviert ([Firefox-Bug 1438139](https://bugzil.la/1438139)). Für weitere Informationen siehe [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), oder konsultieren Sie die MDN-Referenzdokumente:

  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Reference/Elements/script/type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Reference/Elements/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde erneut hinzugefügt ([Firefox-Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine benutzerdefinierte Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox-Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- Im [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das `MakePublicKeyCredentialOptions` Wörterbuchobjekt in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox vorgenommen ([Firefox-Bug 1436473](https://bugzil.la/1436473)).
- Die `dom.workers.enabled` Voreinstellung wurde entfernt, was bedeutet, dass Worker nicht mehr deaktiviert werden können ([Firefox-Bug 1434934](https://bugzil.la/1434934)).
- Die [`body`](/de/docs/Web/API/Document/body) Eigenschaft ist jetzt auf dem [`Document`](/de/docs/Web/API/Document) Interface, anstatt dem [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface implementiert ([Firefox-Bug 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist jetzt in Worker verfügbar ([Firefox-Bug 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox-Bug 1436692](https://bugzil.la/1436692)).
- Das Attribut [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) von Interpunktionsschlüsseln wird jetzt auf non-zero gesetzt, selbst wenn das aktive Tastaturlayout keine ASCII-Zeichen erzeugt. Siehe [diese Notizen für mehr Details](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout). Bitte verwenden Sie `KeyboardEvent.keyCode` **nicht** in neuen Anwendungen — nutzen Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox-Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln für die Bestimmung von [keyCode-Werten von Interpunktionsschlüsseln](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout) wurden aufgenommen ([Firefox-Bug 1036008](https://bugzil.la/1036008)).
- Die Gecko-exklusive Optionen-Objekt `storage` Option der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) (siehe [Experimentelles Gecko-Optionen-Objekt](/de/docs/Web/API/IDBFactory/open#experimental_gecko_options_object)) ist veraltet ([Firefox-Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können jetzt innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Code verwendet werden ([Firefox-Bug 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Medien und WebRTC

- Beim Aufzeichnen oder Teilen von Medien, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfasst wurden, wird das Kamera-"in Verwendung"-Anzeigelicht nun ausgeschaltet, wenn die Kamera durch Setzen der `MediaStreamTrack.enabled`-Eigenschaft des entsprechenden Tracks auf `false` stummgeschaltet wird, damit der Benutzer leichter erkennen kann, dass die Kamera nicht aktiv ist ([Firefox-Bug 1299515](https://bugzil.la/1299515)). Weitere Details finden Sie unter [Datenschutz der Benutzer](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy). Siehe auch [diesen Blogpost](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Das Entfernen eines Tracks von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mittels [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) entfernt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) des Tracks nicht mehr aus der Liste der Sender, wie sie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldet wird ([Firefox-Bug 1290949](https://bugzil.la/1290949)).
- Die Zeitstempel der Objekte `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` wurden bisher basierend auf Werten gemeldet, die von {{jsxref("Date.getTime()")}} zurückgegeben wurden. In Firefox 60 wurden diese Korrekturen vorgenommen, um korrekt die [Performance Timing API](/de/docs/Web/API/Performance_API) zu verwenden ([Firefox-Bug 1433576](https://bugzil.la/1433576)).
- Wie in der Spezifikation festgelegt, wirft der [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode)-Konstruktor jetzt einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht 1, 2 oder 4 Kanäle aufweist ([Firefox-Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Ereignishandler [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) wurde entfernt; mittlerweile sollten Sie [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse verwenden ([Firefox-Bug 1442385](https://bugzil.la/1442385)).
- Der primäre Name für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist jetzt tatsächlich `RTCDataChannel`, anstatt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox-Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die Voreinstellung `privacy.resistFingerprinting` auf `true` gesetzt ist, wird die WebGL-Erweiterung [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) deaktiviert ([Firefox-Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite`-Cookies werden jetzt unterstützt ([Firefox-Bug 795346](https://bugzil.la/795346)). Weitere Informationen finden Sie unter {{HTTPHeader("Set-Cookie")}}.

### Sicherheit

Der {{httpheader("X-Content-Type-Options")}}-Header folgt jetzt bei Einstellung auf `no-sniff` der Spezifikation für JavaScript-MIME-Typen. Insbesondere sind `text/json` und `application/json` keine gültigen Werte mehr ([Firefox-Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Abrufe, die Anmeldeinformationen enthalten, können nun Verbindungen mit Abrufen teilen, die keine Anmeldeinformationen enthalten. Beispielsweise könnten Anfragen der gleichen Herkunft für einige Web-Fonts sowie einige berechtigte Benutzerdaten von demselben CDN eine Verbindung teilen, was zu einer schnelleren Bearbeitung führen könnte ([Firefox-Bug 1363284](https://bugzil.la/1363284)).

## Entfernungen aus der Webplattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären Werte `enabled` und `disabled` der Eigenschaft {{cssxref("-moz-user-input")}} sind nicht mehr verfügbar ([Firefox-Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden vollständig aus der Plattform entfernt ([Firefox-Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht standardisierte Syntax [Expression Closure](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde entfernt ([Firefox-Bug 1426519](https://bugzil.la/1426519)).

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
- Beim Erstellen eines Browser-[Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird jeglicher angewandter {{cssxref("text-shadow")}} des Headertextes entfernt, wenn keine `headerURL` angegeben ist (siehe [Firefox-Bug 1404688](https://bugzil.la/1404688)).
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
