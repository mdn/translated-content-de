---
title: Firefox 60 für Entwickler
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 60, die Entwickler betreffen. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt in Firefox für Android ab Version 60

[Die neue parallele CSS-Engine von Firefox](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — wurde nun in Firefox für Android aktiviert, nachdem sie [zuerst standardmäßig in Firefox 57 für den Desktop aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum).

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- In der CSS-Regelansicht des CSS-Bereichs (siehe [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) wurden die Tastenkombinationen für präzise Werteinkrementierung (Erhöhung/Verringerung um 0,1) auf Linux und Windows von `Alt` + `Pfeil hoch`/`Pfeil runter` zu `Ctrl` + `Pfeil hoch`/`Pfeil runter` geändert, um Konflikte mit den standardmäßigen Betriebssystem-Tastenkombinationen zu vermeiden (siehe [Firefox Bug 1413314](https://bugzil.la/1413314)).
- Ebenfalls in der CSS-Regelansicht werden [CSS-Variablennamen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) nun automatisch vervollständigt ([Firefox Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann ein Minuszeichen (`-`) eintippen, erscheinen alle Variablen, die Sie in Ihrem CSS deklariert haben, in einer Auto-Vervollständigungsliste.
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein Dropdown-Menü _Neuladen bei..._ hinzugefügt, mit dem Benutzer das automatische Neuladen der Seite aktivieren/deaktivieren können, wenn die Touch-Simulation umgeschaltet oder der simulierte User-Agent geändert wird. Weitere Details finden Sie unter [Seiten-Neuladeverhalten steuern](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) ([Firefox Bug 1428816](https://bugzil.la/1428816)).
- Die `view_source.tab`-Präferenz wurde entfernt, sodass der [Quelltextansichtsmodus](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) nicht mehr zwischen einem neuen Tab oder einem neuen Fenster umgeschaltet werden kann. Quelltexte werden ab sofort immer in neuen Tabs angezeigt ([Firefox Bug 1418403](https://bugzil.la/1418403)).

### HTML

Das Drücken der Enter-Taste in `designMode` und `contenteditable` fügt jetzt `<div>`-Elemente ein, wenn sich der Cursor in einem Inline-Element oder Textknoten befindet, der ein Kindknoten eines Block-Level-Bearbeitungs-Hosts ist — statt `<br>`-Elemente wie bisher einzufügen. Wenn Sie das alte Verhalten in Ihrer App verwenden möchten, können Sie dies mit `document.execCommand()` erreichen. Weitere Details finden Sie unter [Unterschiede in der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) (siehe auch [Firefox Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden entsprechend der neuesten Spezifikation des [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) aktualisiert ([Firefox Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015-Module wurden standardmäßig aktiviert ([Firefox Bug 1438139](https://bugzil.la/1438139)). Weitere Informationen finden Sie unter [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) oder konsultieren Sie die Referenzdokumentation auf MDN:

  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Element/script#type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Element/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde erneut hinzugefügt ([Firefox Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine eigene Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- In der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das `MakePublicKeyCredentialOptions`-Dictionary-Objekt in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox vorgenommen ([Firefox Bug 1436473](https://bugzil.la/1436473)).
- Die Präferenz `dom.workers.enabled` wurde entfernt, was bedeutet, dass Worker nicht mehr deaktiviert werden können ([Firefox Bug 1434934](https://bugzil.la/1434934)).
- Die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft wird jetzt auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle implementiert, statt auf der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle ([Firefox Bug 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist jetzt in Workern verfügbar ([Firefox Bug 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox Bug 1436692](https://bugzil.la/1436692)).
- Attributwerte von Satzzeichen-Tasten in [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) werden jetzt auch dann korrekt zurückgegeben, wenn das aktive Tastaturlayout keine ASCII-Zeichen produziert. Weitere Details finden Sie in [diesen Anmerkungen](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout). Bitte verwenden Sie `KeyboardEvent.keyCode` **nicht** in neuen Anwendungen — verwenden Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln wurden zur Bestimmung der [keyCode-Werte von Satzzeichentasten](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout) hinzugefügt ([Firefox Bug 1036008](https://bugzil.la/1036008)).
- Die Gecko-spezifische `storage`-Option des Objekts `options` in der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) (siehe [Experimentelle Gecko-Optionen](/de/docs/Web/API/IDBFactory/open#experimental_gecko_options_object)) wurde als veraltet gekennzeichnet ([Firefox Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können jetzt innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Code verwendet werden ([Firefox Bug 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Medien und WebRTC

- Das Stummschalten der Kamera durch Setzen der Eigenschaft [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) auf `false` beim Aufnehmen oder Teilen von Medien über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) deaktiviert jetzt das Kamera-"in Benutzung"-Licht, um dem Nutzer besser anzuzeigen, dass die Kamera nicht in Gebrauch ist ([Firefox Bug 1299515](https://bugzil.la/1299515)). Weitere Details finden Sie unter [Benutzerdatenschutz](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy). Siehe auch [diesen Blogbeitrag](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Ein Track, der von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) entfernt wird, entfernt jetzt nicht den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) des Tracks aus der Liste der Sender der Peer-Verbindung, die von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldet wird ([Firefox Bug 1290949](https://bugzil.la/1290949)).
- Die Zeitstempel der Objekte `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` wurden zuvor basierend auf den Werten von {{jsxref("Date.getTime()")}} gemeldet. In Firefox 60 wurde dies korrigiert, um stattdessen die [Performance Timing API](/de/docs/Web/API/Performance_API) korrekt zu verwenden ([Firefox Bug 1433576](https://bugzil.la/1433576)).
- Gemäß Spezifikation löst der Konstruktor [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode) nun einen Fehler `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) aus, wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht 1, 2 oder 4 Kanäle hat ([Firefox Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete Event-Handler [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) für [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde entfernt; verwenden Sie stattdessen [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Events ([Firefox Bug 1442385](https://bugzil.la/1442385)).
- Der primäre Name für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist jetzt tatsächlich `RTCDataChannel`, anstatt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die Präferenz `privacy.resistFingerprinting` auf `true` gesetzt ist, wird die WebGL-Erweiterung [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) deaktiviert ([Firefox Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite`-Cookies werden jetzt unterstützt ([Firefox Bug 795346](https://bugzil.la/795346)). Siehe {{HTTPHeader("Set-Cookie")}} für weitere Informationen.

### Sicherheit

Der Header {{httpheader("X-Content-Type-Options")}}, wenn er auf `no-sniff` gesetzt ist, folgt nun der Spezifikation für JavaScript-MIME-Typen. Insbesondere sind `text/json` und `application/json` keine gültigen Werte mehr ([Firefox Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Weitere Änderungen

Fetch-Anfragen, die Anmeldeinformationen enthalten, können nun Verbindungen mit Fetch-Anfragen ohne Anmeldeinformationen teilen. Zum Beispiel könnten Anfragen aus derselben Quelle für einige Webschriften sowie einige credentialisierte Benutzerdaten vom selben CDN dieselbe Verbindung nutzen, was möglicherweise zu einer schnelleren Verarbeitung führt ([Firefox Bug 1363284](https://bugzil.la/1363284)).

## Entfernungen aus der Webplattform

### HTML

_Keine Änderungen._

### CSS

- Die Werte `enabled` und `disabled` der proprietären Eigenschaft {{cssxref("-moz-user-input")}} sind nicht mehr verfügbar ([Firefox Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden vollständig aus der Plattform entfernt ([Firefox Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht standardisierte Syntax [expression closure](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde entfernt ([Firefox Bug 1426519](https://bugzil.la/1426519)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Weitere Änderungen

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

Theme-API:

- `headerURL` ist jetzt optional.
- Beim Erstellen eines Browser-[Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird jeglicher {{cssxref("text-shadow")}}, der auf den Header-Text angewendet wurde, entfernt, wenn kein `headerURL` angegeben ist (siehe [Firefox Bug 1404688](https://bugzil.la/1404688)).
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
