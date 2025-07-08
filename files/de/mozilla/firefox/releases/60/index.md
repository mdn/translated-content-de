---
title: Firefox 60 für Entwickler
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 60, die Entwickler betreffen werden. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt in Firefox für Android in Version 60

[Firewalls neuer paralleler CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) – auch bekannt als **Quantum CSS** oder **Stylo** –, die [zuerst standardmäßig in Firefox 57 für Desktop aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), wurde nun in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklertools

- In der CSS-Panelregelansicht (siehe [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) wurden die Tastenkombinationen für präzise Wertänderungen (Erhöhen/Verringern um 0,1) von `Alt` + `Up`/`Down` auf `Ctrl` + `Up`/`Down` auf Linux und Windows geändert, um Konflikte mit standardmäßigen OS-Level-Tastenkombinationen zu vermeiden (siehe [Firefox-Fehler 1413314](https://bugzil.la/1413314)).
- Ebenfalls in der CSS-Panelregelansicht werden [CSS-Variablennamen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) nun automatisch vervollständigt ([Firefox-Fehler 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, werden alle Variablen, die Sie in Ihrem CSS deklariert haben, in einer Autovervollständigungsliste angezeigt.
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein _Reload when…_-Dropdown hinzugefügt, das es Benutzern ermöglicht, das automatische Neuladen von Seiten zu aktivieren oder zu deaktivieren, wenn die Touch-Simulation umgeschaltet oder der simulierte User-Agent geändert wird. Weitere Details finden Sie unter [Seitenladeverhalten steuern](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) ([Firefox-Fehler 1428816](https://bugzil.la/1428816)).
- Die `view_source.tab`-Präferenz wurde entfernt, sodass Sie den Modus [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) nicht mehr zwischen Erscheinen in einem neuen Tab oder einem neuen Fenster umschalten können. Quelltexte werden ab sofort immer in neuen Tabs angezeigt ([Firefox-Fehler 1418403](https://bugzil.la/1418403)).

### HTML

Das Drücken der Eingabetaste in `designMode` und `contenteditable` fügt nun `<div>`-Elemente ein, wenn die Einfügemarke in einem Inline-Element oder Textknoten ist, der ein Kind eines Block-Level-Bearbeitungshosts ist – anstatt `<br>`-Elemente einzufügen, wie es früher der Fall war. Wenn Sie das alte Verhalten in Ihrer App verwenden möchten, können Sie es mit `document.execCommand()` tun ([Firefox-Fehler 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden gemäß der neuesten [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/)-Spezifikation aktualisiert ([Firefox-Fehler 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox-Fehler 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015-Module wurden standardmäßig aktiviert ([Firefox-Fehler 1438139](https://bugzil.la/1438139)). Weitere Informationen finden Sie unter [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) oder konsultieren Sie die MDN-Referenzdokumente:
  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Reference/Elements/script/type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Reference/Elements/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde erneut hinzugefügt ([Firefox-Fehler 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine benutzerdefinierte Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox-Fehler 1432542](https://bugzil.la/1432542)).

#### DOM

- Im [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das Dictionary-Objekt `MakePublicKeyCredentialOptions` in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox vorgenommen ([Firefox-Fehler 1436473](https://bugzil.la/1436473)).
- Die Präferenz `dom.workers.enabled` wurde entfernt, was bedeutet, dass Worker nicht mehr deaktiviert werden können ([Firefox-Fehler 1434934](https://bugzil.la/1434934)).
- Die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft wird jetzt auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle und nicht mehr auf der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle implementiert ([Firefox-Fehler 1276438](https://bugzil.la/1276438)).
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist jetzt in Workern verfügbar ([Firefox-Fehler 1425458](https://bugzil.la/1425458)).
- Die Methode [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords) wurde implementiert ([Firefox-Fehler 1436692](https://bugzil.la/1436692)).
- Das [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)-Attribut von Interpunktionstasten wird selbst dann ungleich null, wenn das aktive Tastaturlayout keine ASCII-Zeichen erzeugt. Weitere Details finden Sie in [diesen Notizen](/de/docs/Web/API/KeyboardEvent/keyCode#printable_keys_in_standard_position). Bitte verwenden Sie `KeyboardEvent.keyCode` nicht in neuen Anwendungen – verwenden Sie stattdessen [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) oder [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code).
- Die Methode [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate) wurde implementiert ([Firefox-Fehler 1436659](https://bugzil.la/1436659)).
- Neue Regeln zur Bestimmung der [keyCode-Werte von Interpunktionstasten](/de/docs/Web/API/KeyboardEvent/keyCode#printable_keys_in_standard_position) wurden eingeführt ([Firefox-Fehler 1036008](https://bugzil.la/1036008)).
- Die Gecko-exklusive Objektoption `storage` der Methode [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) wurde als veraltet gekennzeichnet ([Firefox-Fehler 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können jetzt innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Code verwendet werden ([Firefox-Fehler 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Medien und WebRTC

- Bei der Aufnahme oder Freigabe von Medien, die mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurden, wird jetzt beim Stummschalten der Kamera durch Festlegen der entsprechenden Spur des [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft auf `false` die "in Gebrauch"-Anzeigeleuchte der Kamera ausgeschaltet, um dem Benutzer das Erkennen zu erleichtern, dass die Kamera nicht verwendet wird ([Firefox-Fehler 1299515](https://bugzil.la/1299515)). Weitere Details finden Sie unter [Benutzer-Privatsphäre](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy). Siehe auch [diesen Blogbeitrag](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Das Entfernen einer Spur von einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mithilfe von [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) entfernt nicht mehr die [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) der Spur aus der Liste der Absender der Peer-Verbindung, wie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldet ([Firefox-Fehler 1290949](https://bugzil.la/1290949)).
- Die Zeitstempel der Objekte `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` wurden zuvor basierend auf den von {{jsxref("Date.getTime()")}} zurückgegebenen Werten gemeldet. In Firefox 60 wurden diese korrigiert, um die [Performance Timing API](/de/docs/Web/API/Performance_API) korrekt zu verwenden ([Firefox-Fehler 1433576](https://bugzil.la/1433576)).
- Gemäß der Spezifikation wirft der Konstruktor [`ConvolverNode()`](/de/docs/Web/API/ConvolverNode/ConvolverNode) nun einen `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException), wenn der referenzierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) nicht 1, 2 oder 4 Kanäle hat ([Firefox-Fehler 1443228](https://bugzil.la/1443228)).
- Der veraltete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Ereignishandler [`RTCPeerConnection.onremovestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) wurde entfernt; by now you should be using [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse ([Firefox-Fehler 1442385](https://bugzil.la/1442385)).
- Der primäre Name für [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist jetzt tatsächlich `RTCDataChannel`, anstatt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox-Fehler 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die `privacy.resistFingerprinting`-Präferenz auf `true` gesetzt ist, wird die [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info) WebGL-Erweiterung deaktiviert ([Firefox-Fehler 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite`-Cookies werden jetzt unterstützt ([Firefox-Fehler 795346](https://bugzil.la/795346)). Weitere Informationen finden Sie unter {{HTTPHeader("Set-Cookie")}}.

### Sicherheit

Der {{httpheader("X-Content-Type-Options")}}-Header, wenn auf `no-sniff` gesetzt, folgt jetzt der Spezifikation für JavaScript-MIME-Typen. Insbesondere sind `text/json` und `application/json` keine gültigen Werte mehr ([Firefox-Fehler 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Fetches, die Anmeldeinformationen enthalten, können jetzt Verbindungen mit Fetches teilen, die keine Anmeldeinformationen enthalten. Wenn beispielsweise dieselbe Quelle einige Web-Schriftarten sowie einige authentifizierte Benutzerdaten von demselben CDN anfordert, könnten beide eine Verbindung teilen, was möglicherweise zu einer schnelleren Abwicklung führt ([Firefox-Fehler 1363284](https://bugzil.la/1363284)).

## Entfernungen aus der Webplattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären Werte `enabled` und `disabled` der Eigenschaft {{cssxref("-moz-user-input")}} sind nicht mehr verfügbar ([Firefox-Fehler 1405087](https://bugzil.la/1405087)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden vollständig aus der Plattform entfernt ([Firefox-Fehler 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht standardmäßige [expression closure](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Syntax wurde entfernt ([Firefox-Fehler 1426519](https://bugzil.la/1426519)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

Theme API:

- headerURL ist jetzt optional
- Beim Erstellen eines Browser-[Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird jeglicher {{cssxref("text-shadow")}}, der auf den Kopfzeilentext angewendet wird, entfernt, wenn keine `headerURL` angegeben ist (siehe [Firefox-Fehler 1404688](https://bugzil.la/1404688)).
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
