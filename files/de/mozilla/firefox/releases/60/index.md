---
title: Firefox 60 für Entwickler
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 60, die Entwickler betreffen werden. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt mit Version 60 zu Firefox für Android

[Die neue parallele CSS-Engine von Firefox](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — die [zuerst standardmäßig in Firefox 57 für den Desktop aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), wurde nun in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklertools

- Im CSS-Panel-Regeln-Ansicht (siehe [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) haben sich die Tastenkombinationen für präzise Wertänderungen (Erhöhen/Verringern um 0,1) von `Alt` + `Pfeil oben`/`Pfeil unten` zu `Strg` + `Pfeil oben`/`Pfeil unten` auf Linux und Windows geändert, um Konflikte mit den Standardkürzeln auf Betriebssystemebene zu vermeiden (siehe [Firefox Bug 1413314](https://bugzil.la/1413314)).
- Ebenfalls im CSS-Panel-Regeln-Ansicht werden [CSS-Variablennamen](/de/docs/Web/CSS/Using_CSS_custom_properties) nun automatisch vervollständigt ([Firefox Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, erscheinen alle in Ihrem CSS deklarierten Variablen in einer Autovervollständigungsliste.
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein _Neuladen wenn…_-Dropdown hinzugefügt, um Benutzern die Möglichkeit zu geben, das automatische Neuladen der Seite zu aktivieren/deaktivieren, wenn die Berührungssimulation umgeschaltet wird oder der simulierte Benutzeragent geändert wird. Weitere Einzelheiten finden Sie unter [Steuerung des Seitenneuladeverhaltens](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) ([Firefox Bug 1428816](https://bugzil.la/1428816)).
- Die `view_source.tab`-Präferenz wurde entfernt, sodass Sie den [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html)-Modus nicht mehr zwischen der Darstellung in einem neuen Tab oder einem neuen Fenster umschalten können. Quelltexte werden ab sofort immer in neuen Tabs angezeigt ([Firefox Bug 1418403](https://bugzil.la/1418403)).

### HTML

Das Drücken der Enter-Taste in `designMode` und `contenteditable` fügt nun `<div>`-Elemente ein, wenn sich der Cursor in einem Inline-Element oder Textknoten befindet, der ein Kind eines Block-Ebene-Bearbeitungs-Hosts ist — anstatt `<br>`-Elemente wie früher. Wenn Sie das alte Verhalten in Ihrer Anwendung verwenden möchten, können Sie dies mit `document.execCommand()` erreichen. Weitere Details finden Sie unter [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) (siehe auch [Firefox Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden gemäß der neuesten Spezifikation des [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) aktualisiert ([Firefox Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015 Module wurden standardmäßig aktiviert ([Firefox Bug 1438139](https://bugzil.la/1438139)). Siehe [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES-Module: Ein Cartoon-Tiefenblick](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) für mehr Informationen oder konsultieren Sie die MDN-Referenzdokumente:

  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Element/script#type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Element/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde wieder hinzugefügt ([Firefox Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine benutzerdefinierte Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- Im [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das Wörterbuchobjekt `MakePublicKeyCredentialOptions` in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox umgesetzt ([Firefox Bug 1436473](https://bugzil.la/1436473)).
- Die Präferenz `dom.workers.enabled` wurde entfernt, was bedeutet, dass Worker seitdem nicht mehr deaktiviert werden können ([Firefox Bug 1434934](https://bugzil.la/1434934)).
- Die [`body`](/de/docs/Web/API/Document/body) Eigenschaft wird nun auf dem [`Document`](/de/docs/Web/API/Document) Interface und nicht mehr auf dem [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface implementiert ([Firefox Bug 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist jetzt in Workern verfügbar ([Firefox Bug 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox Bug 1436692](https://bugzil.la/1436692)).
- Das Attribut [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) von Interpunktionstasten wird jetzt auch dann ein Nicht-Nullwert, wenn das aktive Tastaturlayout keine ASCII-Zeichen erzeugt. Weitere Details finden Sie in [diesen Notizen](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout). Bitte verwenden Sie `KeyboardEvent.keyCode` **nicht** in neuen Anwendungen — verwenden Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln wurden eingeführt, um die [keyCode-Werte von Interpunktionstasten](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout) zu bestimmen ([Firefox Bug 1036008](https://bugzil.la/1036008)).
- Die Gecko-exklusive Optionsobjekt `storage`-Option der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) (siehe [Experimentelles Gecko-Optionsobjekt](/de/docs/Web/API/IDBFactory/open#experimental_gecko_options_object)) wurde als veraltet markiert ([Firefox Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können nun innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Code verwendet werden ([Firefox Bug 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Media und WebRTC

- Wenn Medien mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgenommen oder geteilt werden und die Kamera durch Setzen der entsprechenden Track-Eigenschaft [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) auf `false` stummgeschaltet wird, erlischt nun die "in Verwendung"-Anzeigeleuchte der Kamera, um dem Benutzer zu zeigen, dass die Kamera nicht in Gebrauch ist ([Firefox Bug 1299515](https://bugzil.la/1299515)). Weitere Details finden Sie unter [Benutzerprivatsphäre](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy). Siehe auch [dieser Blogbeitrag](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Das Entfernen eines Tracks von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) entfernt nicht mehr den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) des Tracks aus der Senderliste der Peer-Verbindung, wie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet wird ([Firefox Bug 1290949](https://bugzil.la/1290949)).
- Die `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` Objekte hatten bisher Zeitstempel basierend auf Werten zurückgegeben, die von {{jsxref("Date.getTime()")}} geliefert wurden. In Firefox 60 wurden diese korrigiert, um stattdessen korrekt die [Performance Timing API](/de/docs/Web/API/Performance_API) zu verwenden ([Firefox Bug 1433576](https://bugzil.la/1433576)).
- Dem Standard entsprechend wirft der [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode) Konstruktor jetzt eine `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht 1, 2 oder 4 Kanäle hat ([Firefox Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Ereignishandler [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) wurde entfernt; mittlerweile sollten Sie stattdessen [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisse verwenden ([Firefox Bug 1442385](https://bugzil.la/1442385)).
- Der primäre Name für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist jetzt in der Tat `RTCDataChannel`, statt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die Präferenz `privacy.resistFingerprinting` auf `true` gesetzt ist, wird die WebGL-Erweiterung [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) ab sofort deaktiviert ([Firefox Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite` Cookies werden jetzt unterstützt ([Firefox Bug 795346](https://bugzil.la/795346)). Siehe {{HTTPHeader("Set-Cookie")}} für weitere Informationen.

### Sicherheit

Der {{httpheader("X-Content-Type-Options")}} Header, wenn auf `no-sniff` gesetzt, folgt nun der Spezifikation für JavaScript MIME-Typen. Insbesondere sind `text/json` und `application/json` keine gültigen Werte mehr ([Firefox Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Abfragen, die Anmeldeinformationen enthalten, können jetzt Verbindungen mit Abfragen teilen, die keine Anmeldeinformationen enthalten. Wenn beispielsweise derselbe Ursprung einige Webfonts sowie einige authentifizierte Benutzerdaten von demselben CDN anfordert, könnten beide eine Verbindung teilen, was möglicherweise zu einer schnelleren Reaktionszeit führt ([Firefox Bug 1363284](https://bugzil.la/1363284)).

## Entfernungen aus der Web-Plattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären `{{cssxref("-moz-user-input")}}` Eigenschaften `enabled` und `disabled` sind nicht mehr verfügbar ([Firefox Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` Eigenschaften wurden vollständig aus der Plattform entfernt ([Firefox Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht-standardisierte [Expression Closure](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Syntax wurde entfernt ([Firefox Bug 1426519](https://bugzil.la/1426519)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Theme API:

- `headerURL` ist nun optional
- Beim Erstellen eines Browser [Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird jeder angewendete {{cssxref("text-shadow")}} auf den Header-Text entfernt, wenn keine `headerURL` angegeben ist (siehe [Firefox Bug 1404688](https://bugzil.la/1404688)).
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
