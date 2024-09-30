---
title: Firefox 60 für Entwickler
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über Veränderungen in Firefox 60, die Entwickler betreffen werden. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt in Firefox für Android ab Version 60

[Firefox's neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — die [zuerst in Firefox 57 für Desktop standardmäßig aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), wurde jetzt in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklertools

- In der CSS-Pane-Regelsicht (siehe [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) wurden die Tastenkürzel für präzise Wertänderungen (erhöhen/verringern um 0,1) von `Alt` + `Up`/`Down` zu `Ctrl` + `Up`/`Down` auf Linux und Windows geändert, um Kollisionen mit den standardmäßigen Betriebssystem-Tastenkombinationen zu vermeiden (siehe [Firefox Bug 1413314](https://bugzil.la/1413314)).
- Ebenfalls in der CSS-Pane-Regelsicht werden nun [CSS-Variablennamen](/de/docs/Web/CSS/Using_CSS_custom_properties) automatisch vervollständigt ([Firefox Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, erscheinen alle Variablen, die Sie in Ihrem CSS definiert haben, in einer Autovervollständigungsliste.
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein _Neuladen bei..._ Dropdown hinzugefügt, um es den Nutzern zu ermöglichen, automatisches Neuladen der Seite beim Umschalten der Touch-Simulation oder beim Ändern des simulierten User-Agents zu aktivieren bzw. zu deaktivieren. Siehe [Steuerung des Seitenneuladens](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) für mehr Details ([Firefox Bug 1428816](https://bugzil.la/1428816)).
- Die `view_source.tab`-Präferenz wurde entfernt, wodurch der [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html)-Modus nicht mehr zwischen neuer Registerkarte und neuem Fenster umgeschaltet werden kann. Quelltexte erscheinen ab sofort immer in neuen Tabs ([Firefox Bug 1418403](https://bugzil.la/1418403)).

### HTML

Das Drücken der Enter-Taste in `designMode` und `contenteditable` fügt nun `<div>`-Elemente ein, wenn sich die Einfügemarke in einem Inline-Element oder Textknoten befindet, welcher ein Kind eines Block-Editing-Hosts ist — anstatt wie bisher `<br>`-Elemente einzufügen. Wenn Sie das alte Verhalten in Ihrer Anwendung verwenden möchten, können Sie dies mit `document.execCommand()` umsetzen. Siehe [Unterschiede in der Markup-Erzeugung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) für weitere Details (siehe auch [Firefox Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden gemäß der neuesten [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) Spezifikation aktualisiert ([Firefox Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015 Module sind standardmäßig aktiviert ([Firefox Bug 1438139](https://bugzil.la/1438139)). Siehe [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) für weitere Informationen oder konsultieren Sie die MDN-Referenzdokumente:

  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Element/script#type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Element/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde erneut hinzugefügt ([Firefox Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine eigene Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- In der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das Wörterbuch-Objekt `MakePublicKeyCredentialOptions` in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox umgesetzt ([Firefox Bug 1436473](https://bugzil.la/1436473)).
- Die Präferenz `dom.workers.enabled` wurde entfernt, was bedeutet, dass Worker nicht mehr deaktiviert werden können ([Firefox Bug 1434934](https://bugzil.la/1434934)).
- Die [`body`](/de/docs/Web/API/Document/body) Eigenschaft wird nun auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle umgesetzt, statt auf der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle ([Firefox Bug 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist nun in Workern verfügbar ([Firefox Bug 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox Bug 1436692](https://bugzil.la/1436692)).
- Das Attribut [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) der Zeichensetzungstasten wird nicht mehr null, selbst wenn das aktive Tastaturlayout keine ASCII-Zeichen erzeugt. Siehe [diese Notizen für weitere Details](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout). Bitte verwenden Sie `KeyboardEvent.keyCode` nicht in neuen Anwendungen — verwenden Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln zur Bestimmung der [keyCode-Werte von Zeichensetzungstasten](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout) wurden eingeführt ([Firefox Bug 1036008](https://bugzil.la/1036008)).
- Die Gecko-exklusive Optionsobjekt-`storage`-Option der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) (siehe [Experimentelles Gecko-Optionsobjekt](/de/docs/Web/API/IDBFactory/open#experimental_gecko_options_object)) wurde als veraltet markiert ([Firefox Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können jetzt innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Code verwendet werden ([Firefox Bug 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service-Arbeiter

_Keine Änderungen._

#### Medien und WebRTC

- Wenn Medien aufgezeichnet oder geteilt werden, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfasst wurden, wird das Kamera-Anzeigelicht für "in Benutzung" nun abgeschaltet, wenn die Kamera durch Setzen der [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft der entsprechenden Spur auf `false` stummgeschaltet wird, um dem Nutzer einfacher zu zeigen, dass die Kamera nicht in Benutzung ist ([Firefox Bug 1299515](https://bugzil.la/1299515)). Siehe [Datenschutz der Benutzer](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy) für mehr Details. Siehe auch [diesen Blogbeitrag](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Ein Track wird aus einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) nun nicht mehr vollständig entfernt, wenn er mit [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) entfernt wird. Die [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) des Tracks bleiben in der von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldeten Liste der Sender der Peer-Verbindung enthalten ([Firefox Bug 1290949](https://bugzil.la/1290949)).
- Die `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` Objekte verwendeten zuvor Zeitstempel, die auf Werten basierten, welche von {{jsxref("Date.getTime()")}} zurückgegeben werden. In Firefox 60 wurden diese auf die korrekte Nutzung der [Performance Timing API](/de/docs/Web/API/Performance_API) umgestellt ([Firefox Bug 1433576](https://bugzil.la/1433576)).
- Gemäß der Spezifikation gibt der Konstruktor [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode) nun einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) aus, wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht 1, 2 oder 4 Kanäle hat ([Firefox Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) Ereignishandler wurde entfernt; mittlerweile sollten Sie stattdessen [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisse verwenden ([Firefox Bug 1442385](https://bugzil.la/1442385)).
- Der Hauptname für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist jetzt tatsächlich `RTCDataChannel`, anstatt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die `privacy.resistFingerprinting` Präferenz auf `true` gesetzt ist, wird die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung von nun an deaktiviert ([Firefox Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite` Cookies werden jetzt unterstützt ([Firefox Bug 795346](https://bugzil.la/795346)). Siehe {{HTTPHeader("Set-Cookie")}} für mehr Informationen.

### Sicherheit

Der {{httpheader("X-Content-Type-Options")}} Header, wenn auf `no-sniff` gesetzt, folgt nun der Spezifikation für JavaScript MIME-Typen. Insbesondere sind `text/json` und `application/json` keine gültigen Werte mehr ([Firefox Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Abfragen, die Anmeldedaten enthalten, können jetzt Verbindungen mit Abfragen teilen, die keine Anmeldedaten enthalten. Zum Beispiel, wenn dieselbe Herkunft sowohl einige Webfont-Anfragen als auch einige Anfragen mit Anmeldedaten vom selben CDN stellt, könnten beide eine Verbindung teilen, was potenziell zu einer schnelleren Antwort führen könnte ([Firefox Bug 1363284](https://bugzil.la/1363284)).

## Entfernungen aus der Web-Plattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären {{cssxref("-moz-user-input")}} Eigenschaftswerte `enabled` und `disabled` sind nicht mehr verfügbar ([Firefox Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden vollständig aus der Plattform entfernt ([Firefox Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht-standardmäßige [Ausdrucksschließung](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Syntax wurde entfernt ([Firefox Bug 1426519](https://bugzil.la/1426519)).

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
- Beim Erstellen eines Browser [Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird ein eventuell angewendeter {{cssxref("text-shadow")}} auf den Header-Text entfernt, wenn keine `headerURL` angegeben ist (siehe [Firefox Bug 1404688](https://bugzil.la/1404688)).
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
