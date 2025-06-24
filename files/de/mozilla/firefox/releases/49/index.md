---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- JavaScript-Fehler, die in die Konsole protokolliert werden, bieten [jetzt einen \[Learn more\] Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debugging-Hilfe ([Firefox-Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: Zeigen Sie mehr Vorschläge im Autovervollständigung-Popup an ([Firefox-Bug 1260419](https://bugzil.la/1260419)).
- Der Animation Inspector [zeigt jetzt Leistungsinformationen zur Animation](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den DevTools an ([Firefox-Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspectors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde reorganisiert, um es übersichtlicher und einfacher zu verwenden ([Firefox-Bug 1211613](https://bugzil.la/1211613)).
- Der Inspector unterstützt jetzt `#RRGGBBAA` und `#RGBA` Syntax für Farbwerte ([Firefox-Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklerwerkzeuge zeigen keine selbstschließenden Tags mehr (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}) an, als hätten sie ein End-Tag auf HTML-Seiten; das Verhalten bleibt auf XHTML-Seiten unverändert ([Firefox-Bug 820926](https://bugzil.la/820926)).
- Verbesserungen in der Barrierefreiheit!

  - Das Werkzeugkasten stellt besser sicher, dass der Tastaturfokus sichtbarer ist ([Firefox-Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitsetiketten wurden zu unbeschrifteten Steuerungen hinzugefügt ([Firefox-Bug 1242715](https://bugzil.la/1242715)).
  - Semantiken der Baumansicht und Tastaturnavigation wurden zur Markup-Ansicht des Inspectors hinzugefügt ([Firefox-Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Ursache-Spalte, die anzeigt, was jede konkrete Netzwerk-Anfrage verursacht hat ([Firefox-Bug 1134073](https://bugzil.la/1134073)).
- Auf der _about:debugging_ Add-Ons-Seite ist die Schaltfläche "Neu laden" nur für temporäre Add-ons aktiviert. Sie wird für alle anderen Add-ons deaktiviert ([Firefox-Bug 1273184](https://bugzil.la/1273184)).
- Auf der _about:debugging_ Workers Seite wird im Abschnitt Service Workers eine Warnmeldung angezeigt, wenn [Service Worker nicht kompatibel](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) mit der aktuellen Browser-Konfiguration sind ([Firefox-Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debuggbaren Tabs in der aktuellen Firefox-Instanz bietet ([Firefox-Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Disable Cache_ in den [Toolbox Advanced settings](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in Disable HTTP Cache umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) (Bug(1253018)).
- Der [Speicherinspektor erlaubt jetzt, IndexedDB-Datenbanken zu löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über ihre eigenen Kontextmenüs ([Firefox-Bug 1205123](https://bugzil.la/1205123)), und zeigt Warnmeldungen an, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (zum Beispiel, wenn noch aktive Verbindungen bestehen) ([Firefox-Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Hinzugefügter Support für die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente ([Firefox-Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut des {{HTMLElement("input")}} Elements verwendet jetzt den `'u'` Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox-Bug 1227906](https://bugzil.la/1227906)).
- Um eine Änderung in der Spezifikation nachzuvollziehen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) Attributs des {{HTMLElement('track')}} Elements jetzt wie `"metadata"` anstatt wie `"subtitles"` behandelt ([Firefox-Bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut des {{HTMLElement("iframe")}} Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox-Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata-API wurden entfernt ([Firefox-Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attribut des {{HTMLElement("a")}} Elements unterstützt jetzt `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox-Bug 1178337](https://bugzil.la/1178337)).
- Der [`form`](/de/docs/Web/HTML/Reference/Elements/label#form) Inhalts-Attribut des {{HTMLElement("label")}} Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft existiert weiterhin, gibt aber jetzt das Formular zurück, mit dem das Label-Steuerelement verknüpft ist, falls ein Steuerelement existiert (und falls dieses Steuerelement mit einem Formular verknüpft ist) ([Firefox-Bug 1268852](https://bugzil.la/1268852)).

### CSS

- Hinzugefügte {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, welche es ermöglicht, die horizontalen und vertikalen Versatzwerte, an denen ein Hintergrundbild gezeichnet wird, separat anzugeben; diese sind Komponenten von {{cssxref("background-position")}} ([Firefox-Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die `round` und `space` Schlüsselwörter zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox-Bug 548372](https://bugzil.la/548372)).
- Auf {{cssxref("background-clip")}}, das Schlüsselwort `text` ist jetzt standardmäßig aktiviert ([Firefox-Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alpha-Kanal unter Verwendung von 4- und 8-stelligen CSS-Hex [Farben](/de/docs/Web/CSS/color_value) Werte (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox-Bug 567283](https://bugzil.la/567283)).
- Die Pseudo-Klasse {{cssxref(":dir")}} ist jetzt ohne Präfix ([Firefox-Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}}, können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}} Werten interpolieren ([Firefox-Bug 1110460](https://bugzil.la/1110460)).
- Die [`q` Längeneinheit](/de/docs/Web/CSS/length#q) wurde hinzugefügt ([Firefox-Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} ist jetzt ohne Präfix ([Firefox-Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, ersetzt `word-wrap`, das immer noch als alternativer Name unterstützt wird ([Firefox-Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) Implementierung wurde verbessert:

  - Implementierung von {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` hinzugefügt ([Firefox-Bug 1266268](https://bugzil.la/1266268)).
  - Implementierung von Grid-Layout-Unterstützung für {{cssxref("align-self")}}, {{cssxref("justify-self")}} Werte `baseline` und `last-baseline` (auch bekannt als "baseline self-alignment") hinzugefügt ([Firefox-Bug 1221525](https://bugzil.la/1221525)).
  - Implementierung von Grid-Item-Baseline-Content-Ausrichtung hinzugefügt ([Firefox-Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS Masks](/de/docs/Web/CSS/CSS_masking) Implementierung wurde verbessert:

  - Die Eigenschaft {{cssxref("mask-origin")}} verwendet jetzt `border-box` anstelle von `padding-box` als Anfangswert, um der Spezifikation zu entsprechen ([Firefox-Bug 1258286](https://bugzil.la/1258286)).
  - Die Eigenschaft {{cssxref("mask-repeat")}} unterstützt jetzt die Werte `space` und `round` ([Firefox-Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert wurde, wurde behoben ([Firefox-Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenz, die {{cssxref("text-emphasis")}} steuert, wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox-Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Traps wurden implementiert ([Firefox-Bug 888969](https://bugzil.la/888969)).
- Die ES2015 Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search), und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split), sowie der [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) Getter wurden implementiert ([Firefox-Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardmäßige `flags` Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox-Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der {{jsxref("Date.parse()")}} Methode beim Parsen von zweistelligen Jahren wurde geändert, um interoperabler mit dem Google Chrome-Browser zu sein ([Firefox-Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox-Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox-Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'` Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktors ignoriert ([Firefox-Bug 1268361](https://bugzil.la/1268361)).
- Der Wert, den[`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin), und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) für URLs mit dem `blob:` Schema zurückgeben, ist nicht mehr fälschlicherweise `null`, sondern stattdessen der Ursprung der URL, die durch Entfernen des vorangestellten `blob:` gebildet wird ([Firefox-Bug 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) Eigenschaft jetzt `'prerender'` zurück ([Firefox-Bug 1069772](https://bugzil.la/1069772)).
- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox-Bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox-Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist die `scrollbars` [`Window`](/de/docs/Web/API/Window) Funktion aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit wurde empfohlen, sie zu aktivieren, aber es war nicht der Standard ([Firefox-Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht-standardmäßige_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde hinzugefügt, die es ermöglicht, Frame-für-Frame durch Videoinhalte zu suchen ([Firefox-Bug 1235301](https://bugzil.la/1235301)). Während Sie mit dieser Methode experimentieren sollten, um uns zu helfen, zu verstehen, wie nützlich sie ist, _verwenden Sie sie nicht in Produktivcode!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft gibt jetzt das Formular zurück, mit dem das Label-Steuerelement verknüpft ist, falls ein Steuerelement existiert (und falls dieses Steuerelement mit einem Formular verknüpft ist). Zuvor waren Labels direkt mit Formularen über diese Eigenschaft verknüpft ([Firefox-Bug 1268852](https://bugzil.la/1268852)).
- Die Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions`, wurde hinzugefügt ([Firefox-Bug 1266164](https://bugzil.la/1266164) und [Firefox-Bug 1266066](https://bugzil.la/1266066)).
- Die mit der Audio-Lautstärke zusammenhängenden Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"`, und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Einklang mit dem neuesten Entwurf der UI Events-Spezifikation ([Firefox-Bug 1272578](https://bugzil.la/1272578)). Siehe [Codewerte für Tastaturevents](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tasten, die zuvor als `"MozHomeScreen"`, `"MozCameraFocusAdjust"`, und `"MozPhoneCall"` bekannt waren, haben jetzt offizielle Namen in der UI Events-Spezifikation: `"GoHome"`, `"CameraFocus"`, und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox-Bug 1272599](https://bugzil.la/1272599)). Siehe [Codewerte für Tastaturevents](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tastenwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und unbenutzt waren ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Tastenwerte und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifier-Tasten darzustellen ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Zwei Tastenwerte für Multimedia-Nummerntasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastenwerte wurden für Audiosteuertasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, und `"AudioTrebleUp"` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Tastenwerte wurden für diese Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp`, und `MicrophoneVolumeMute` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Neue Tastenwerte wurden hinzugefügt, um Spracherkennungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode`, und `VoiceDial` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungstastenwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, und `DVR` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Der Tastenwert `MediaSelect` wurde durch den Standard-Tastenwert `LaunchMediaPlayer` ersetzt ([Firefox-Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Mediaplayer-Tastenwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, und `NavigatePrevious` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) Eigenschaft, die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Präferenz aktiviert werden ([Firefox-Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) Erweiterung wurde implementiert ([Firefox-Bug 1129332](https://bugzil.la/1129332)).
- Das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event) Ereignis, das gesendet wird, wenn ein Versuch, einen WebGL-Kontext zu erstellen, fehlschlägt, wurde implementiert ([Firefox-Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgelaufen ist, sowohl für das Debugging als auch für die Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).
- Sie können auch jetzt [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).

#### Service Worker und verwandte

- Das [Fetch API](/de/docs/Web/API/Fetch_API)'s [`Response`](/de/docs/Web/API/Response) Objekt implementiert jetzt die [`redirected`](/de/docs/Web/API/Response/redirected) Eigenschaft, die anzeigt, ob die Antwort für eine Anfrage ist, die weitergeleitet wurde. Bitte lesen Sie die sicherheitsrelevanten Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox-Bug 1243792](https://bugzil.la/1243792)).
- Im [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den 'push' `PermissionDescriptor` Wörterbuchtyp (im Spezifikation als `PushPermissionDescriptor` bezeichnet) nicht mehr; dies liegt daran, dass Firefox stattdessen auf ein Quotensystem zur Kontrolle des `userVisibleOnly` Status setzt und einen Fehler auslöste, wenn er auf eine `PushPermissionDescriptor` Instanz stieß ([Firefox-Bug 1266821](https://bugzil.la/1266821)). Mit diesem entfernten Wörterbuch ignoriert Firefox es jetzt.

#### Media Streams

- In der Vergangenheit war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich ist, wenn der Benutzer nur eine der beiden Arten von Hardware zur Verfügung hat. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich ist, obwohl der Benutzer den Zugriff auf eines, aber nicht beide der passenden Geräte verweigert. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)). Dies beinhaltet auch kleine Änderungen an der Benutzeroberfläche, um die Optionen "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer nach Berechtigungen gefragt wird.
- Die [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) Methode wurde implementiert ([Firefox-Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) Methode wurde aktualisiert, um das Hinzufügen von Spuren zu ermöglichen, die nicht Teil der angegebenen Streams sind, zur Verbindung. Stattdessen werden die Streams verwendet, um Spuren am empfangenden Ende der Verbindung zu gruppieren ([Firefox-Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig in Nightly aktiviert. In anderen Versionen von Firefox 49 ist sie nicht standardmäßig verfügbar ([Firefox-Bug 1271487](https://bugzil.la/1271487)).

#### Andere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Präferenz `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox-Bug 669259](https://bugzil.la/669259)).
- Die ausschließlich für Firefox OS verfügbare Data Store API wurde entfernt ([Firefox-Bug 1261009](https://bugzil.la/1261009)).
- Die Event-Handler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden aus `Element` entfernt, da sie dort nie ausgelöst wurden; die mit Präfix versehenen Versionen dieser Event-Handler wurden jedoch aus Kompatibilitätsgründen dort belassen ([Firefox-Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` liegt ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete `Document.mozFullScreen` Eigenschaft wurde auf `Document.fullscreen` ohne Präfix umgestellt [Firefox-Bug 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` liegt ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist eine No-Op ([Firefox-Bug 1269798](https://bugzil.la/1269798)).
- Jede Art von Daten kann jetzt aus der Zwischenablage mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abgerufen werden: zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox-Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame-Timing-API, die aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming` besteht, wurde entfernt, da die Spezifikation komplett neu geschrieben wurde ([Firefox-Bug 1271846](https://bugzil.la/1271846)).
- Um der Richtlinie zu entsprechen, gibt die [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) Eigenschaft jetzt ein `PositionAlign`-Enum zurück, anstelle eines `Align`-Enums ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsynthese-Teil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist jetzt standardmäßig in Nightly verfügbar (aber nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) Ereignis-Handler werden jetzt für [Web Manifest](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox-Bug 1265279](https://bugzil.la/1265279)).
- Bei der Verwendung der [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) Methode des [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Dictionary-Objekt als dritten Parameter einfügen, das einen einzigen Parameter enthält — `{disableNormalization: true}` ([Firefox-Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting`-Enum gemäß der Spezifikation zurück; zuvor wurde ein `AlignSetting`-Enum zurückgegeben ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsynthese-Teil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine leere Zeitachse ([Firefox-Bug 1096776](https://bugzil.la/1096776)).
- Die [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox-Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderungen._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente entfernt ([Firefox-Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderungen._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die nicht notwendig sind, damit Webseiten gut funktionieren. Dieses Verhalten wird durch die Präferenz `browser.safebrowsing.blockedURIs.enabled` gesteuert und trägt dazu bei, die Leistung der Seiten und von Firefox im Allgemeinen zu verbessern, ohne die Benutzerfreundlichkeit der Seiten wesentlich zu beeinträchtigen. Es trägt auch zur Stabilität des Browser-Erlebnisses bei, indem eine Hauptursache für Abstürze beseitigt wird. Die blockierten Flash-Module beinhalten mehrere, die nur zu Fingerabdruckzwecken verwendet werden, sowie eine Anzahl von "Supercookie"-Modulen, und in Zukunft können weitere Arten von blockierten Modulen hinzugefügt werden. Siehe [Firefox-Bug 1275591](https://bugzil.la/1275591) für Details.

Dies markiert den nächsten Schritt auf dem Weg zu einer pluginfreien Zukunft. HTML ist sehr nah am Punkt, an dem Plugins für die Arbeit nicht mehr benötigt werden.

## HTTP

- Die [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Direktive wurde implementiert ([Firefox-Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogbeitrag](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für mehr Informationen.
- Das {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox-Bug 1265318](https://bugzil.la/1265318)).

## Vernetzung

- Die [Proxy Auto-Configuration (PAC)](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) Implementierung wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange`, und `timeRange` "umgekehrte Bereiche", zum Beispiel wird `weekdayRange("SAT", "MON")` als `true` bewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox-Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft, die angibt, ob ein Kontext in der Lage ist, Funktionen zu verwenden, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit bestehendem Inhalt zu verbessern, akzeptiert Firefox jetzt einige WebKit-präfixierte Eigenschaften und Attribute.

- Die folgenden Eigenschaften funktionieren jetzt auch mit dem Präfix `-webkit`:

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

- Die folgenden Eigenschaften werden auf die äquivalente präfixierte Eigenschaft abgebildet:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:

  - Die folgenden Funktionen werden auf ihre unpräfixierten Äquivalente abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Die veraltete Funktion `-webkit-gradient` wird unterstützt (und in einen regulären Gradienten übersetzt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und werden nicht auf unpräfixierte äquivalente Eigenschaften abgebildet):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix` Schnittstelle ist ein Alias für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Mediaquery-Features wurden implementiert:
  - `-webkit-min-device-pixel-ratio` als Alias von [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit dem gleichen Wert (in `dppx)`, obwohl dieses Feature [standardmäßig deaktiviert ist](https://bugzil.la/1237720) (hinter die about:config Präferenz `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als Alias von [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit dem gleichen Wert (in `dppx`); dieses Feature ist ebenfalls standardmäßig deaktiviert, hinter der gleichen about:config Präferenz.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d) immer übereinstimmend, um Unterstützung für 3D-Transformationen anzuzeigen.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Diese bietet Zugriff auf den Browser-Verlauf, mit Methoden, die für die Suche im Verlauf, das Abrufen von Informationen über zuvor besuchte Seiten und das Hinzufügen und Entfernen von Verlaufs-Einträgen verfügbar sind.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde zur Tabs-API hinzugefügt. Diese Methode ermöglicht es, CSS zu entfernen, das zuvor durch Aufrufen von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), ist der Wert `mozSystemGroup`, der nur in Code ausgeführt wird, der in XBL oder in Firefox's Chrome läuft, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox-Bug 1274520](https://bugzil.la/1274520))

### Andere

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
