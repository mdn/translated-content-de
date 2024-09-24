---
title: Firefox 60 für Entwickler
slug: Mozilla/Firefox/Releases/60
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 60, die sich auf Entwickler auswirken. Firefox 60 wurde am 9. Mai 2018 veröffentlicht.

## Stylo kommt mit Version 60 zu Firefox für Android

[Firefox's neuer paralleler CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** —, die [ab Firefox 57 auf dem Desktop standardmäßig aktiviert wurde](/de/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), wurde jetzt auch in Firefox für Android aktiviert.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- In der CSS-Ansicht des Regelbereichs (siehe [CSS untersuchen und bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)) haben sich die Tastenkombinationen für präzise Wertanpassungen (Erhöhen/Verringern um 0,1) von `Alt` + `Up`/`Down` zu `Ctrl` + `Up`/`Down` unter Linux und Windows geändert, um Konflikte mit den standardmäßigen Betriebssystem-Tastenkürzeln zu vermeiden (siehe [Firefox Bug 1413314](https://bugzil.la/1413314)).
- Ebenfalls in der CSS-Ansicht des Regelbereichs, werden [CSS-Variablennamen](/de/docs/Web/CSS/Using_CSS_custom_properties) jetzt automatisch vervollständigt ([Firefox Bug 1422635](https://bugzil.la/1422635)). Wenn Sie `var(` in einen Eigenschaftswert eingeben und dann einen Bindestrich (`-`) tippen, erscheinen alle Variablen, die Sie in Ihrem CSS deklariert haben, in einer Autovervollständigungsliste.
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde ein _Neu laden bei…_-Dropdown hinzugefügt, das es Benutzern ermöglicht, automatische Seitenneuladungen zu aktivieren/deaktivieren, wenn die Touch-Simulation umgeschaltet oder ein simuliertes User-Agent geändert wird. Weitere Details finden Sie unter [Seitenladeverhalten steuern](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) ([Firefox Bug 1428816](https://bugzil.la/1428816)).
- Die `view_source.tab`-Präferenz wurde entfernt, sodass Sie den [Quelltextanzeige](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) Modus nicht mehr zwischen der Anzeige in einem neuen Tab oder einem neuen Fenster umschalten können. Quelltexte werden ab sofort immer in neuen Tabs angezeigt ([Firefox Bug 1418403](https://bugzil.la/1418403)).

### HTML

Das Drücken der Eingabetaste im `designMode` und `contenteditable` fügt jetzt `<div>`-Elemente ein, wenn der Caret in einem Inline-Element oder Textknoten ist, das ein Kind eines Blocklevel-Bearbeitungshosts ist — anstatt `<br>`-Elemente einzufügen, wie es früher der Fall war. Wenn Sie das alte Verhalten in Ihrer App verwenden möchten, können Sie dies mit `document.execCommand()` tun. Weitere Details finden Sie unter [Unterschiede bei der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation) (siehe auch [Firefox Bug 1430551](https://bugzil.la/1430551)).

### CSS

- Die Werte der Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} wurden gemäß der neuesten [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) Spezifikation aktualisiert ([Firefox Bug 1430817](https://bugzil.la/1430817)).
- Die Eigenschaft {{cssxref("paint-order")}} wurde implementiert ([Firefox Bug 1426146](https://bugzil.la/1426146)).

### SVG

_Keine Änderungen._

### JavaScript

- ECMAScript 2015 Module wurden standardmäßig aktiviert ([Firefox Bug 1438139](https://bugzil.la/1438139)). Weitere Informationen finden Sie unter [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) und [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) oder konsultieren Sie die MDN-Referenzdokumente:

  - [`<script src="main.js" type="module">`](/de/docs/Web/HTML/Element/script#type) und [`<script nomodule src="fallback.js">`](/de/docs/Web/HTML/Element/script#nomodule)
  - [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisungen.

- Die Methode {{jsxref("Array.prototype.values()")}} wurde erneut hinzugefügt ([Firefox Bug 1420101](https://bugzil.la/1420101)). Stellen Sie sicher, dass Ihr Code keine benutzerdefinierte Implementierung dieser Methode enthält.

### APIs

#### Neue APIs

- Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde aktiviert ([Firefox Bug 1432542](https://bugzil.la/1432542)).

#### DOM

- In der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wurde das Wörterbuchobjekt `MakePublicKeyCredentialOptions` in `PublicKeyCredentialCreationOptions` umbenannt; diese Änderung wurde in Firefox vorgenommen ([Firefox Bug 1436473](https://bugzil.la/1436473)).
- Die Präferenz `dom.workers.enabled` wurde entfernt, was bedeutet, dass Worker nicht mehr deaktiviert werden können ([Firefox Bug 1434934](https://bugzil.la/1434934)).
- Die Eigenschaft {{domxref("Document.body","body")}} ist nun auf der {{domxref("Document")}}-Schnittstelle implementiert, anstatt auf der {{domxref("HTMLDocument")}}-Schnittstelle ([Firefox Bug 1276438](https://bugzil.la/1276438)).
- {{domxref("PerformanceResourceTiming")}} ist jetzt in Workern verfügbar ([Firefox Bug 1425458](https://bugzil.la/1425458)).
- Die Methode {{domxref("PerformanceObserver.takeRecords()")}} wurde implementiert ([Firefox Bug 1436692](https://bugzil.la/1436692)).
- Das Attribut {{domxref("KeyboardEvent.keyCode")}} von interpunktierenden Tasten wird auch dann ungleich null, wenn das aktive Tastaturlayout keine ASCII-Zeichen produziert. Weitere Details finden Sie in [diesen Notizen](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout). Bitte verwenden Sie `KeyboardEvent.keyCode` nicht in neuen Anwendungen — verwenden Sie stattdessen {{domxref("KeyboardEvent.key")}} oder {{domxref("KeyboardEvent.code")}}.
- Die Methode {{domxref("Animation.updatePlaybackRate()")}} wurde implementiert ([Firefox Bug 1436659](https://bugzil.la/1436659)).
- Neue Regeln zur Bestimmung von [keyCode-Werten von Interpunktionstasten](/de/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout) ([Firefox Bug 1036008](https://bugzil.la/1036008)) wurden aufgenommen.
- Die Gecko-exklusive Optionsobjektoption `storage` der {{domxref("IDBFactory.open()")}} Methode (siehe [Experimentelles Gecko-Optionsobjekt](/de/docs/Web/API/IDBFactory/open#experimental_gecko_options_object)) wurde als veraltet erklärt ([Firefox Bug 1442560](https://bugzil.la/1442560)).
- [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) können nun innerhalb von [IndexedDB](/de/docs/Web/API/IndexedDB_API) Code verwendet werden ([Firefox Bug 1193394](https://bugzil.la/1193394)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Media und WebRTC

- Beim Aufzeichnen oder Freigeben von Medien, die mit {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} erhalten wurden, schaltet das Stummschalten der Kamera durch Setzen der entsprechenden {{domxref("MediaStreamTrack.enabled")}} Track-Eigenschaft auf `false` jetzt das "in Gebrauch"-Indikatorlicht der Kamera aus, um dem Benutzer leichter zu zeigen, dass die Kamera nicht verwendet wird ([Firefox Bug 1299515](https://bugzil.la/1299515)). Weitere Details siehe [Benutzerprivatsphäre](/de/docs/Web/API/MediaDevices/getUserMedia#user_privacy). Siehe auch [diesen Blogpost](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Das Entfernen eines Tracks von einer {{domxref("RTCPeerConnection")}} mit {{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}} entfernt nicht mehr den {{domxref("RTCRtpSender")}} des Tracks aus der Liste der Sender der Peer-Verbindung, die von {{domxref("RTCPeerConnection.getSenders", "getSenders()")}} gemeldet wird ([Firefox Bug 1290949](https://bugzil.la/1290949)).
- Die Zeitstempel der Objekte `RTCRtpContributingSource` und `RTCRtpSynchronizationSource` wurden bisher basierend auf Werten von {{jsxref("Date.getTime()")}} gemeldet. In Firefox 60 wurden diese korrigiert, um korrekt die [Performance Timing API](/de/docs/Web/API/Performance_API) zu verwenden ([Firefox Bug 1433576](https://bugzil.la/1433576)).
- Wie in der Spezifikation festgelegt, wirft der {{domxref("ConvolverNode.ConvolverNode","ConvolverNode()")}} Konstruktor jetzt einen `NotSupportedError` {{domxref("DOMException")}}, wenn der referenzierte {{domxref("AudioBuffer")}} keine 1, 2 oder 4 Kanäle hat ([Firefox Bug 1443228](https://bugzil.la/1443228)).
- Der veraltete {{domxref("RTCPeerConnection")}} Ereignis-Handler {{domxref("RTCPeerConnection.removestream_event", "RTCPeerConnection.onremovestream")}} wurde entfernt; inzwischen sollten Sie {{domxref("MediaStream/removetrack_event", "removetrack")}}-Ereignisse verwenden ([Firefox Bug 1442385](https://bugzil.la/1442385)).
- Der primäre Name für {{domxref("RTCDataChannel")}} ist jetzt tatsächlich `RTCDataChannel`, anstatt ein Alias für `DataChannel` zu sein. Der Name `DataChannel` wird nicht mehr unterstützt ([Firefox Bug 1173851](https://bugzil.la/1173851)).

#### Canvas und WebGL

- Wenn die `privacy.resistFingerprinting`-Präferenz auf `true` gesetzt ist, wird die {{domxref("WEBGL_debug_renderer_info")}} WebGL-Erweiterung von nun an deaktiviert ([Firefox Bug 1337157](https://bugzil.la/1337157)).

### CSSOM

_Keine Änderungen._

### HTTP

- `SameSite`-Cookies werden jetzt unterstützt ([Firefox Bug 795346](https://bugzil.la/795346)). Weitere Informationen finden Sie unter {{HTTPHeader("Set-Cookie")}}.

### Sicherheit

Der {{httpheader("X-Content-Type-Options")}} Header, wenn auf `no-sniff` gesetzt, folgt nun der Spezifikation für JavaScript MIME-Typen. Insbesondere sind `text/json` und `application/json` keine gültigen Werte mehr ([Firefox Bug 1431095](https://bugzil.la/1431095)).

### Plugins

_Keine Änderungen._

### Sonstiges

Abfragen, die Anmeldeinformationen enthalten, können jetzt Verbindungen mit Abfragen teilen, die keine Anmeldeinformationen enthalten. Beispielsweise könnten Anfragen derselben Herkunft, die Webfonts sowie authentifizierte Benutzerdaten vom selben CDN anfordern, eine Verbindung teilen, was potenziell zu einer schnelleren Abwicklung führt ([Firefox Bug 1363284](https://bugzil.la/1363284)).

## Entfernungen aus der Web-Plattform

### HTML

_Keine Änderungen._

### CSS

- Die proprietären `enabled` und `disabled` Werte der {{cssxref("-moz-user-input")}} Eigenschaft sind nicht mehr verfügbar ([Firefox Bug 1405087](https://bugzil.la/1405087)).
- Die proprietären `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` Eigenschaften wurden vollständig aus der Plattform entfernt ([Firefox Bug 1429723](https://bugzil.la/1429723)).

### JavaScript

Die nicht standardisierte [Expression-Closure](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Syntax wurde entfernt ([Firefox Bug 1426519](https://bugzil.la/1426519)).

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
- Beim Erstellen eines Browser-[Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) wird jeder angewendete {{cssxref("text-shadow")}} auf den Kopfzeilentext entfernt, wenn keine `headerURL` angegeben ist (siehe [Firefox Bug 1404688](https://bugzil.la/1404688)).
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
