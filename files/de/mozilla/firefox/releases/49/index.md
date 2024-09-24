---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklertools

- JavaScript-Fehler, die in der Konsole protokolliert werden, [bieten jetzt einen \[Mehr erfahren\]-Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debugging-Hilfe ([Firefox Fehler 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: mehr Vorschläge im Popup zur Autovervollständigung anzeigen ([Firefox Fehler 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor zeigt jetzt [Informationen zur Animationsperformance](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den Entwicklertools an ([Firefox Fehler 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um übersichtlicher und benutzerfreundlicher zu sein ([Firefox Fehler 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die `#RRGGBBAA` und `#RGBA` Syntax für Farbwerte ([Firefox Fehler 1271191](https://bugzil.la/1271191)).
- Die Entwicklertools zeigen keine selbstschließenden Tags mehr an (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}), als ob sie einen Schlusstag auf HTML-Seiten hätten; das Verhalten bleibt für XHTML-Seiten unverändert ([Firefox Fehler 820926](https://bugzil.la/820926)).
- Verbesserungen in der Barrierefreiheit!

  - Das Werkzeugfenster sorgt besser dafür, dass die Tastaturfokussierung sichtbarer ist ([Firefox Fehler 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitsetiketten wurden zu nicht etikettierten Steuerelementen hinzugefügt ([Firefox Fehler 1242715](https://bugzil.la/1242715)).
  - Semantiken und Tastaturnavigation für die Baumansicht im Markup-Viewer des Inspektors wurden hinzugefügt ([Firefox Fehler 1242694](https://bugzil.la/1242694)).

- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Ursache-Spalte an, die einen Hinweis darauf gibt, was jede einzelne Netzwerkanfrage verursacht hat ([Firefox Fehler 1134073](https://bugzil.la/1134073)).
- Auf der Add-ons-Seite _about:debugging_ ist die Schaltfläche "Neu laden" nur für temporäre Add-ons aktiviert. Sie wird für alle anderen Add-ons deaktiviert ([Firefox Fehler 1273184](https://bugzil.la/1273184)).
- Auf der Workers-Seite _about:debugging_ wird eine Warnmeldung im Bereich Dienstmitarbeiter angezeigt, wenn [Dienstmitarbeiter nicht kompatibel](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) mit der aktuellen Browserkonfiguration sind ([Firefox Fehler 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Tab-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller im aktuellen Firefox-Instanz geöffneten, debugbaren Tabs bietet ([Firefox Fehler 1266128](https://bugzil.la/1266128)).
- Die _Cache deaktivieren_-Option in den [Erweiterten Einstellungen der Werkzeugleiste](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in _HTTP-Cache deaktivieren_ umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) (Bug 1253018).
- Der [Storage Inspector erlaubt nun die Löschung von IndexedDB-Datenbanken](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über deren eigene Kontextmenüs ([Firefox Fehler 1205123](https://bugzil.la/1205123)), und wird Warnmeldungen anzeigen, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (wenn es zum Beispiel noch aktive Verbindungen gibt) ([Firefox Fehler 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente hinzugefügt ([Firefox Fehler 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut des {{HTMLElement("input")}} Elements verwendet jetzt den `'u'` Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox Fehler 1227906](https://bugzil.la/1227906)).
- Um einer Spezifikationsänderung zu entsprechen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attributs des {{HTMLElement('track')}} Elements jetzt wie `"metadata"` statt `"subtitles"` behandelt ([Firefox Fehler 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}} Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox Fehler 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata-API wurde entfernt ([Firefox Fehler 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-Attribut am {{HTMLElement("a")}} Element unterstützt jetzt `'no-referrer-when-downgrade`' und `'origin-when-cross-origin'` ([Firefox Fehler 1178337](https://bugzil.la/1178337)).
- Das [`form`](/de/docs/Web/HTML/Element/label#form)-Inhaltsattribut des {{HTMLElement("label")}} Elements wurde entfernt. Die {{domxref("HTMLLabelElement.form")}}-Eigenschaft existiert weiterhin, gibt aber jetzt das Formular zurück, mit dem das Steuerelement des Labels verknüpft ist, falls ein Steuerelement vorhanden ist (und falls dieses Steuerelement mit einem Formular verknüpft ist) ([Firefox Fehler 1268852](https://bugzil.la/1268852)).

### CSS

- {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} hinzugefügt, die es ermöglichen, die horizontalen und vertikalen Offsets, an denen ein Hintergrundbild gezeichnet wird, separat zu spezifizieren; diese sind Komponenten von {{cssxref("background-position")}} ([Firefox Fehler 550426](https://bugzil.la/550426)).
- Unterstützung für die `round` und `space` Schlüsselwörter zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox Fehler 548372](https://bugzil.la/548372)).
- Im {{cssxref("background-clip")}} wurde das Schlüsselwort `text` jetzt standardmäßig aktiviert ([Firefox Fehler 1264905](https://bugzil.la/1264905)).
- Unterstützung für Farben mit einem Alphakanal in 4- und 8-stelligen CSS-Hex-[Farb](/de/docs/Web/CSS/color_value)werten hinzugefügt (#RRGGBBAA und #RGBA) ([Firefox Fehler 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde entprefixt ([Firefox Fehler 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}}, können wir nun zwischen {{cssxref("&lt;basic-shape&gt;")}} Werten interpolieren ([Firefox Fehler 1110460](https://bugzil.la/1110460)).
- Der [`q`-Längeneinheit](/de/docs/Web/CSS/length#q) wurde hinzugefügt ([Firefox Fehler 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde entprefixt ([Firefox Fehler 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, die `word-wrap` ersetzt, das weiterhin als alternativer Name unterstützt wird ([Firefox Fehler 955857](https://bugzil.la/955857)).
- Unsere experimentelle Implementierung von [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) wurde verbessert:

  - {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` implementiert ([Firefox Fehler 1266268](https://bugzil.la/1266268)).
  - Rasterlayout-Unterstützung für {{cssxref("align")}}, {{cssxref("justify-self")}}`:baseline` und `last-baseline` (aka "baseline self-alignment") implementiert ([Firefox Fehler 1221525](https://bugzil.la/1221525)).
  - Raster-Element-Basisinhalt-Ausrichtung implementiert ([Firefox Fehler 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle Implementierung von [CSS Masks](/de/docs/Web/CSS/CSS_masking) wurde verbessert:

  - Die Eigenschaft {{cssxref("mask-origin")}} verwendet jetzt `border-box` statt `padding-box` als anfänglichen Wert, um der Spezifikation zu entsprechen ([Firefox Fehler 1258286](https://bugzil.la/1258286)).
  - Die Eigenschaft {{cssxref("mask-repeat")}} unterstützt jetzt die Werte `space` und `round` ([Firefox Fehler 1258626](https://bugzil.la/1258626)).
  - Ein Problem behoben, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert wurde ([Firefox Fehler 1273804](https://bugzil.la/1273804)).

- Die Präferenz zur Steuerung von {{cssxref("text-emphasis")}} wurde entfernt, sodass die Unterstützung dieser Eigenschaft nicht mehr deaktiviert werden kann ([Firefox Fehler 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Traps wurden implementiert ([Firefox Fehler 888969](https://bugzil.la/888969)).
- Die ES2015 {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}, {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}, {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}} und {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}} Methoden und {{jsxref("RegExp.@@species", "RegExp[@@species]")}} Getter wurden implementiert ([Firefox Fehler 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardisierte `flags`-Argument von `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox Fehler 1108382](https://bugzil.la/1108382)).
- Das Verhalten der Methode {{jsxref("Date.parse()")}}, wenn 2-stellige Jahre geparst werden, wurde geändert, um mehr interoperabel mit dem Google Chrome-Browser zu sein ([Firefox Fehler 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode {{domxref("DOMTokenList.supports()")}} wurde hinzugefügt ([Firefox Fehler 1257849](https://bugzil.la/1257849)).
- Die Methode {{domxref("DOMTokenList.replace()")}} wurde hinzugefügt ([Firefox Fehler 1224186](https://bugzil.la/1224186)).
- Führende `'?'`-Zeichen werden jetzt im Parameter des {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} Konstruktors ignoriert ([Firefox Fehler 1268361](https://bugzil.la/1268361)).
- Der Wert, der von {{domxref("URL.origin")}}, {{domxref("HTMLAnchorElement/origin", "HTMLAnchorElement.origin")}} und {{domxref("HTMLAnchorElement/origin", "HTMLAreaElement.origin")}} für URLs mit dem `blob:`-Scheme zurückgegeben wird, ist nicht länger fälschlicherweise `null`, sondern ist stattdessen der Ursprung der URL, die durch Entfernen des führenden `blob:` gebildet wird ([Firefox Fehler 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die {{domxref('Document.visibilityState')}}-Eigenschaft jetzt `'prerender'` zurück ([Firefox Fehler 1069772](https://bugzil.la/1069772)).
- Die {{domxref("Window.isSecureContext")}}-Eigenschaft wurde implementiert ([Firefox Fehler 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden {{domxref("Element.before")}}, {{domxref("Element.after")}}, {{domxref("Element.replaceWith")}}, {{domxref("Element.append")}} und {{domxref("Element.prepend")}} wurden implementiert ([Firefox Fehler 911477](https://bugzil.la/911477)).
- Die `TouchList.identifiedTouch()` Methode wurde entfernt ([Firefox Fehler 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist das `scrollbars`-Feature des {{domxref("Window")}} aktiv, wenn {{domxref("Window.open()")}} aufgerufen wird. In der Vergangenheit wurde es dringend empfohlen, es zu aktivieren, es war jedoch nicht standardmäßig aktiviert ([Firefox Fehler 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht standardisierte_ Methode {{domxref("HTMLMediaElement.seekToNextFrame()")}}, die es ermöglicht, frameweise durch Videoinhalte zu suchen, wurde hinzugefügt ([Firefox Fehler 1235301](https://bugzil.la/1235301)). Obwohl es empfohlen wird, mit dieser Methode zu experimentieren, um uns zu helfen, wie nützlich sie ist, _verwenden Sie sie nicht im Produktivcode!_
- Die Eigenschaft {{domxref("HTMLLabelElement.form")}} gibt jetzt das Formular zurück, mit dem das Steuerelement des Labels verknüpft ist, falls es ein Steuerelement gibt (und falls dieses Steuerelement mit einem Formular verknüpft ist). Früher wurden Labels mit Formularen direkt über diese Eigenschaft verknüpft ([Firefox Fehler 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von {{domxref("EventTarget.addEventListener()")}}, entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions` wurde hinzugefügt ([Firefox Fehler 1266164](https://bugzil.la/1266164) und [Firefox Fehler 1266066](https://bugzil.la/1266066)).
- Die audiolautstärkenbezogenen Werte für {{domxref("KeyboardEvent.key")}} wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"`, und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Einklang mit dem neuesten Entwurf der UI Events Spezifikation ([Firefox Fehler 1272578](https://bugzil.la/1272578)). Siehe [Code-Werte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tasten, die früher als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI Events Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox Fehler 1272599](https://bugzil.la/1272599)). Siehe [Code-Werte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tastencodes `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und unbenutzt waren ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Tastencodes und die entsprechenden Tastenwerte `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifikatortasten darzustellen ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Zwei Tastencodes für multimediale Ziffernblocktasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastencodes wurden für Audiosteuerungstasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"` und `"AudioTrebleUp"` ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Tastencodes wurden für diese Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp` und `MicrophoneVolumeMute` ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Neue Tastencodes wurden hinzugefügt, um Spracherkennungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Neue Tastencodes wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode` und `VoiceDial` ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungs-Tastencodes wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Neue Tastencodes wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer` und `DVR` ([Firefox Fehler 1232919](https://bugzil.la/1232919)).
- Der Tastencode `MediaSelect` wurde durch den Standard- `LaunchMediaPlayer`-Tastencode ersetzt ([Firefox Fehler 1272592](https://bugzil.la/1272592)).
- Zusätzliche Mediaplayer-Tastencodes wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut` und `NavigatePrevious` ([Firefox Fehler 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die Eigenschaft {{domxref("CanvasRenderingContext2D.filter")}}, die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Voreinstellung aktiviert werden ([Firefox Fehler 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die {{domxref("EXT_color_buffer_float")}}-Erweiterung für {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} wurde implementiert ([Firefox Fehler 1129332](https://bugzil.la/1129332)).
- Das {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}}-Ereignis, das gesendet wird, wenn ein WebGL-Kontext-Erstellungsversuch fehlschlägt, wurde implementiert ([Firefox Fehler 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgelaufen ist, sowohl zum Debuggen als auch zur Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die {{domxref("IDBIndex.name")}}-Eigenschaft ist nicht mehr nur lesbar ([Firefox Fehler 1118028](https://bugzil.la/1118028)).
- Sie können jetzt auch {{domxref("IDBObjectStore")}}s umbenennen; die {{domxref("IDBObjectStore.name")}}-Eigenschaft ist nicht mehr nur lesbar ([Firefox Fehler 1118028](https://bugzil.la/1118028)).

#### Service Workers und verwandte

- Das [Fetch API](/de/docs/Web/API/Fetch_API) {{domxref("Response")}}-Objekt implementiert jetzt die {{domxref("Response.redirected", "redirected")}}-Eigenschaft, die angibt, ob die Antwort für eine Anfrage erfolgt ist, die umgeleitet wurde. Bitte überprüfen Sie die sicherheitsbezogenen Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox Fehler 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den 'push' `PermissionDescriptor` Dictionary-Typ (im Spec als `PushPermissionDescriptor` bezeichnet) nicht mehr; dies liegt daran, dass Firefox stattdessen ein Quotensystem für die Steuerung des `userVisibleOnly` Status verwendet und einen Fehler ausgegeben wurde, als ein `PushPermissionDescriptor`-Instanz auftrat ([Firefox Fehler 1266821](https://bugzil.la/1266821)). Mit dem Entfernen dieses Dictionary ignoriert Firefox es jetzt.

#### Mediastreams

- In der Vergangenheit war es möglich, dass ein Aufruf von {{domxref("MediaDevices.getUserMedia()")}}, der sowohl Audio als auch Video anfordert, in Fällen, in denen der Benutzer nur eine der beiden Hardwaretypen zur Verfügung hat, erfolgreich war. Dies wurde behoben ([Firefox Fehler 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von {{domxref("MediaDevices.getUserMedia()")}}, der sowohl Audio als auch Video anfordert, erfolgreich war, obwohl der Benutzer den Zugriff auf eines, aber nicht beide der entsprechenden Geräte verweigert hat. Dies wurde behoben ([Firefox Fehler 802326](https://bugzil.la/802326)). Dies beinhaltet auch kleine Änderungen an der Benutzeroberfläche, um die Optionen zum Auswählen von "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer um Erlaubnis gebeten wird.
- Die Methode {{domxref("MediaStream.getTrackById()")}} wurde implementiert ([Firefox Fehler 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode {{domxref("RTCPeerConnection.addTrack()")}} wurde aktualisiert, um es zu ermöglichen, dass Spuren, die keine Komponenten der angegebenen Streams sind, zur Verbindung hinzugefügt werden. Stattdessen werden die Streams verwendet, um Tracks am empfangenden Ende der Verbindung zu gruppieren ([Firefox Fehler 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die {{domxref("PerformanceObserver")}} API ist jetzt standardmäßig in Nightly aktiviert. In anderen Versionen von Firefox 49 ist sie nicht standardmäßig verfügbar ([Firefox Fehler 1271487](https://bugzil.la/1271487)).

#### Andere

- {{domxref("XMLHttpRequest.getResponseHeader()")}} und {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} geben leere Header zurück, wenn die Einstellung `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox Fehler 669259](https://bugzil.la/669259)).
- Die Firefox-OS-exklusive Data Store API wurde entfernt ([Firefox Fehler 1261009](https://bugzil.la/1261009)).
- Die Event-Handler des [Fullscreen API](/de/docs/Web/API/Fullscreen_API) `Document.onfullscreenchange` und `Document.onfullscreenerror` wurden aus {{domxref("Element")}} entfernt, da sie dort nie ausgelöst wurden; die mit Präfixen versehenen Versionen dieser Event-Handler wurden jedoch aus Kompatibilitätsgründen dort behalten ([Firefox Fehler 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern sich hinter der Einstellung `full-screen-api.unprefix.enabled` befindet ([Firefox Fehler 1268749](https://bugzil.la/1268749)).
- Die veraltete Eigenschaft `Document.mozFullScreen` wurde in {{domxref("Document.fullscreen")}} geändert [Firefox Fehler 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern sich hinter der Einstellung `full-screen-api.unprefix.enabled` befindet ([Firefox Fehler 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften {{domxref("Document/fullscreenElement", "Document.fullscreenElement")}} und {{domxref("Document.fullscreenEnabled")}} führen keine Ausnahme mehr aus, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist ein No-Op ([Firefox Fehler 1269798](https://bugzil.la/1269798)).
- Jegliche Art von Daten kann jetzt über {{domxref("DataTransfer.getData()")}} aus der Zwischenablage abgerufen werden: zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox Fehler 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation komplett umgeschrieben wurde ([Firefox Fehler 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die Eigenschaft {{domxref("VTTCue.positionAlign")}} jetzt ein `PositionAlign`-Enum statt einem `Align`-Enum zurück ([Firefox Fehler 1276129](https://bugzil.la/1276129)).
- Der Sprachausgabeteil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist jetzt standardmäßig in Nightly verfügbar (aber nicht in Aurora, Beta oder Release).
- Das {{domxref("ServiceWorkerGlobalScope.install_event", "install")}}-Ereignis und der {{domxref("Window.appinstalled_event", "Window.oninstall")}} Event-Handler werden jetzt für [Web Manifests](/de/docs/Web/Manifest) unterstützt ([Firefox Fehler 1265279](https://bugzil.la/1265279)).
- Bei der Verwendung der Methode {{domxref("BaseAudioContext/createPeriodicWave", "AudioContext.createPeriodicWave()")}} der [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Dictionary-Objekt als dritten Parameter einschließen, das einen einzigen Parameter enthält — `{disableNormalization: true}` ([Firefox Fehler 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt {{domxref("VTTCue.positionAlign")}} jetzt korrekt ein `PositionAlignSetting`-Enum gemäß der Spezifikation zurück; zuvor gab es ein `AlignSetting`-Enum zurück ([Firefox Fehler 1276129](https://bugzil.la/1276129)).
- Der Sprachausgabeteil der Web Speech API ist jetzt in allen Desktop-Browsern standardmäßig aktiviert ([Firefox Fehler 1268633](https://bugzil.la/1268633)).
- Der {{domxref("Animation.Animation()", "Animation()")}} Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null-Zeitachse ([Firefox Fehler 1096776](https://bugzil.la/1096776)).
- Die {{domxref("KeyframeEffect")}}-Eigenschaft {{domxref("KeyframeEffect.target", "target")}} wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox Fehler 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente entfernt ([Firefox Fehler 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für die Funktionalität von Websites nicht notwendig sind. Dieses Verhalten, das durch die Voreinstellung `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, hilft, die Leistung von Websites und Firefox im Allgemeinen zu verbessern, ohne signifikante Auswirkungen auf die Nutzbarkeit von Websites zu haben. Es trägt auch zur Stabilität des Surferlebnisses bei, indem eine Hauptursache für Abstürze eliminiert wird. Die blockierten Flash-Module umfassen mehrere, die nur für Fingerabdrücke verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in Zukunft kann die Liste der blockierten Module erweitert werden. Weitere Details finden Sie im [Firefox Fehler 1275591](https://bugzil.la/1275591).

Dies markiert den nächsten Schritt auf dem Weg in eine plugin-freie Zukunft. HTML ist sehr nahe daran, den Punkt zu erreichen, an dem Plugins nicht mehr benötigt werden, um die Arbeit zu erledigen.

## HTTP

- Die [`Cache-Control: immutable`](/de/docs/Web/HTTP/Headers/Cache-Control) Direktive wurde implementiert ([Firefox Fehler 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogbeitrag](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Die {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox Fehler 1265318](https://bugzil.la/1265318)).

## Netzwerk

- Die [Proxy Auto-Konfigurationsdatei (PAC)](/de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file) Implementierung wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange` und `timeRange` "umgekehrte Bereiche", zum Beispiel wertet `weekdayRange("SAT", "MON")` `true` aus, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox Fehler 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die {{domxref("Window.isSecureContext")}}-Eigenschaft, die angibt, ob ein Kontext in der Lage ist, Features zu nutzen, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox Fehler 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit vorhandenen Inhalten zu verbessern, akzeptiert Firefox jetzt einige WebKit-angepasste Eigenschaften und Attribute.

- Die folgenden Eigenschaften funktionieren jetzt auch mit `-webkit`-Präfix:

  - `-webkit-align-items`
  - `-webkit-align-content`
  - `-webkit-align-self`
  - `-webkit-animation`
  - `-webkit-animation-delay`
  - `-webkit-animation-direction`
  - `-webkit-animation-duration`
  - `-webkit-animation-fill-mode`
  - `-webkit-animation-iteration-count`
  - `-webkit-animation-name`
  - `-webkit-animation-play-state`
  - `-webkit-animation-timing-function`
  - `-webkit-backface-visibility`
  - `-webkit-background-clip`
  - `-webkit-background-origin`
  - `-webkit-background-size`
  - `-webkit-border-bottom-left-radius`
  - `-webkit-border-bottom-right-radius`
  - `-webkit-border-image`
  - `-webkit-border-top-left-radius`
  - `-webkit-border-top-right-radius`
  - `-webkit-border-radius`
  - `-webkit-box-shadow`
  - `-webkit-filter`
  - `-webkit-flex`
  - `-webkit-flex-basis`
  - `-webkit-flex-direction`
  - `-webkit-flex-flow`
  - `-webkit-flex-grow`
  - `-webkit-flex-shrink`
  - `-webkit-flex-wrap`
  - `-webkit-justify-content`
  - `-webkit-order`
  - `-webkit-perspective`
  - `-webkit-perspective-origin`
  - `-webkit-text-size-adjust`
  - `-webkit-transform`
  - `-webkit-transform-origin`
  - `-webkit-transform-style`
  - `-webkit-transition`
  - `-webkit-transition-delay`
  - `-webkit-transition-duration`
  - `-webkit-transition-property`
  - `-webkit-transition-timing-function`
  - `-webkit-user-select`

- Die folgenden Eigenschaften werden auf die entsprechende präfixierte Eigenschaft abgebildet:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:

  - Die folgenden Funktionen werden auf ihre unpräfixierten Entsprechungen abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in einen regulären Verlauf übersetzt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und werden nicht auf eine unpräfixierte Entsprechung abgebildet):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die Schnittstelle `WebKitCSSMatrix` ist ein Alias von {{domxref("DOMMatrix")}}
- Die folgenden Medieneigenschaften wurden implementiert:

  - `-webkit-min-device-pixel-ratio` als Alias von [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit dem gleichen Wert (in `dppx)`, obwohl diese Funktion [standardmäßig deaktiviert](https://bugzil.la/1237720) ist (hinter about:config Pref `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als Alias von [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx`); diese Funktion ist auch standardmäßig deaktiviert, hinter dem selben about:config Pref.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d) matcht immer, was die Unterstützung von 3D-Transformation anzeigt.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf mit verfügbaren Methoden zum Suchen in der Chronik, Abrufen von Informationen über zuvor besuchte Seiten und Hinzufügen und Entfernen von Chronikeinträgen.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde der Tabs-API hinzugefügt. Diese Methode erlaubt es Ihnen, CSS zu entfernen, das zuvor durch den Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In {{domxref("EventTarget.addEventListener()")}}, ist der Wert `mozSystemGroup`, der nur im Code aktiv, der in XBL oder im Chrome von Firefox ausgeführt wird, ein {{jsxref("Boolean")}}, das angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox Fehler 1274520](https://bugzil.la/1274520))

### Andere

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
