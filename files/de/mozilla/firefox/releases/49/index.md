---
title: Firefox 49 Versionshinweise für Entwickler
short-title: Firefox 49
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Entwickler von Firefox und Gecko sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- JavaScript-Fehler, die in die Konsole geloggt werden, [bieten jetzt einen \[Learn more\]-Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debug-Hilfe an ([Firefox-Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: Mehr Vorschläge im Autovervollständigung-Popup anzeigen ([Firefox-Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor [zeigt jetzt Animationsleistungsinformationen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in DevTools an ([Firefox-Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um klarer und benutzerfreundlicher zu sein ([Firefox-Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die Syntax `#RRGGBBAA` und `#RGBA` für Farbwerte ([Firefox-Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklerwerkzeuge zeigen keine selbstschließenden Tags mehr an (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}), als ob sie ein schließendes Tag auf HTML-Seiten hätten; das Verhalten bleibt für XHTML-Seiten unverändert ([Firefox-Bug 820926](https://bugzil.la/820926)).
- Verbesserungen der Barrierefreiheit!
  - Die Toolbox stellt besser sicher, dass der Tastaturfokus sichtbarer ist ([Firefox-Bug 1242851](https://bugzil.la/1242851)).
  - Zugänglichkeitsbeschriftungen wurden zu unbeschrifteten Steuerelementen hinzugefügt ([Firefox-Bug 1242715](https://bugzil.la/1242715)).
  - Richtige Baumansichten-Semantik und Tastaturnavigation wurden zur Markup-Ansicht des Inspektors hinzugefügt ([Firefox-Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Spalte "Cause", die angibt, was jede bestimmte Netzwerkanfrage verursacht hat ([Firefox-Bug 1134073](https://bugzil.la/1134073)).
- Auf der Add-ons-Seite _about:debugging_ ist die Schaltfläche "Neu laden" nur für temporäre Add-ons aktiviert. Für alle anderen Add-ons wird sie deaktiviert ([Firefox-Bug 1273184](https://bugzil.la/1273184)).
- Auf der Workers-Seite von _about:debugging_ wird eine Warnmeldung im Bereich Service Workers angezeigt, wenn [Service Worker](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) mit der aktuellen Browserkonfiguration inkompatibel sind ([Firefox-Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt [eine neue Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs) verfügbar, die eine vollständige Liste aller debuggbaren Tabs in der aktuellen Firefox-Instanz bereitstellt ([Firefox-Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Cache deaktivieren_ in den [Toolbox Advanced Einstellungen](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in "Disable HTTP Cache" umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Worker](/de/docs/Web/API/Service_Worker_API)/die [Cache-API](/de/docs/Web/API/Cache) (Bug(1253018)).
- Der [Storage Inspector ermöglicht jetzt das Löschen von IndexedDB-Datenbanken](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über ihre eigenen Kontextmenüs ([Firefox-Bug 1205123](https://bugzil.la/1205123)) und zeigt Warnmeldungen an, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (wenn beispielsweise noch aktive Verbindungen bestehen) ([Firefox-Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente hinzugefügt ([Firefox-Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`]-Attribut(/de/docs/Web/HTML/Reference/Elements/input#pattern) des {{HTMLElement("input")}} Elements verwendet jetzt den `'u'`-Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox-Bug 1227906](https://bugzil.la/1227906)).
- Um eine Änderung in der Spezifikation nachzuvollziehen, wird ein ungültiger Wert des [`kind`]-Attributs(/de/docs/Web/HTML/Reference/Elements/track#kind) des {{HTMLElement('track')}} Elements jetzt wie `"metadata"` statt `"subtitles"` behandelt ([Firefox-Bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`]-Attribut(/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) des {{HTMLElement("iframe")}} Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox-Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Mikrodatensattribute und die Microdata-API wurden entfernt ([Firefox-Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`]-Attribut(/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) auf dem {{HTMLElement("a")}} Element unterstützt jetzt `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox-Bug 1178337](https://bugzil.la/1178337)).
- Das "form" Inhaltsattribut des {{HTMLElement("label")}} Elements wurde entfernt. Die [`HTMLLabelElement.form`]-Eigenschaft(/de/docs/Web/API/HTMLLabelElement/form) existiert noch, gibt jetzt jedoch das Formular zurück, mit dem das Kontrollkästchen der Bezeichnung verknüpft ist, wenn es ein Kontrollkästchen gibt (und wenn dieses Kontrollkästchen mit einem Formular verknüpft ist) ([Firefox-Bug 1268852](https://bugzil.la/1268852)).

### CSS

- {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} hinzugefügt, die es erlauben, die horizontalen und vertikalen Versätze separat anzugeben, an denen ein Hintergrundbild gezeichnet wird; Diese sind Komponenten von {{cssxref("background-position")}} ([Firefox-Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die Schlüsselwörter `round` und `space` zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox-Bug 548372](https://bugzil.la/548372)).
- Bei {{cssxref("background-clip")}} ist das Schlüsselwort `text` jetzt standardmäßig aktiviert ([Firefox-Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alpha-Kanal mit 4- und 8-stelligen CSS-Hex-[Farbwerten](/de/docs/Web/CSS/Reference/Values/color_value) (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox-Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde ent-prefixed ([Firefox-Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}}-Werten interpolieren ([Firefox-Bug 1110460](https://bugzil.la/1110460)).
- Die [`q` Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#q) hinzugefügt ([Firefox-Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde ent-prefixed ([Firefox-Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt und ersetzt `word-wrap`, das weiterhin als alternativer Name unterstützt wird ([Firefox-Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/Guides/Grid_layout) Implementierung wurde verbessert:
  - {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` implementiert ([Firefox-Bug 1266268](https://bugzil.la/1266268)).
  - Grid-Layout-Unterstützung für {{cssxref("align-self")}}, {{cssxref("justify-self")}} Werte `baseline` und `last-baseline` (aka "baseline self-alignment") implementiert ([Firefox-Bug 1221525](https://bugzil.la/1221525)).
  - Basislinienaussrichtung von Grid-Elementen implementiert ([Firefox-Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS-Masken](/de/docs/Web/CSS/Guides/Masking) Implementierung wurde verbessert:
  - Die {{cssxref("mask-origin")}} Eigenschaft verwendet jetzt `border-box` statt `padding-box` als Initialwert, um der Spezifikation zu entsprechen ([Firefox-Bug 1258286](https://bugzil.la/1258286)).
  - Die {{cssxref("mask-repeat")}} Eigenschaft unterstützt nun die Werte `space` und `round` ([Firefox-Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem behoben, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert wurde ([Firefox-Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenzsteuerung für {{cssxref("text-emphasis")}} wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox-Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Traps wurden implementiert ([Firefox-Bug 888969](https://bugzil.la/888969)).
- Die ES2015 Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search), und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) sowie der Getter [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) wurden implementiert ([Firefox-Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardmäßige `flags` Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox-Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der Methode {{jsxref("Date.parse()")}} beim Parsen zweistelliger Jahre wurde geändert, um interoperabler mit dem Google Chrome Browser zu sein ([Firefox-Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox-Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox-Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'`-Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktors ignoriert ([Firefox-Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) zurückgegebene Wert für URLs mit dem `blob:`-Schema ist nicht mehr fälschlicherweise `null`, sondern stattdessen der Ursprung der URL, der durch Entfernen des führenden `blob:` gebildet wird ([Firefox-Bug 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) Eigenschaft jetzt `'prerender'` zurück ([Firefox-Bug 1069772](https://bugzil.la/1069772)).
- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4-Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox-Bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox-Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist das `scrollbars` [`Window`](/de/docs/Web/API/Window) Feature aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit war es zwar stark empfohlen, es zu aktivieren, aber es war nicht der Standard ([Firefox-Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht-standardmäßige_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde hinzugefügt, die es ermöglicht, framegenau durch Videoinhalte zu navigieren ([Firefox-Bug 1235301](https://bugzil.la/1235301)). Während Sie ermutigt werden, mit dieser Methode zu experimentieren, um uns zu helfen zu verstehen, wie nützlich sie ist, _verwenden Sie sie nicht in Produktionscode!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft gibt jetzt das Formular zurück, mit dem das Kontrollkästchen des Labels verknüpft ist, wenn ein Kontrollkästchen vorhanden ist (und wenn dieses Kontrollkästchen mit einem Formular verknüpft ist). Zuvor waren Labels direkt über diese Eigenschaft mit Formularen verknüpft ([Firefox-Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions` wurde hinzugefügt ([Firefox-Bug 1266164](https://bugzil.la/1266164) und [Firefox-Bug 1266066](https://bugzil.la/1266066)).
- Die mit Audio-Lautstärke zusammenhängenden Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"` und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Einklang mit dem neuesten Entwurf der UI-Events-Spezifikation ([Firefox-Bug 1272578](https://bugzil.la/1272578)). Sehen Sie sich [Code-Werte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes an.
- Die Tasten, die zuvor als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI-Events-Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox-Bug 1272599](https://bugzil.la/1272599)). Sehen Sie sich [Code-Werte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes an.
- Die Tastenwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und unbenutzt waren ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Tastenwerte und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifiziertasten darzustellen ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Zwei Tastenwerte für Multimedia-Ziffernblock-Tasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastenwerte wurden für Audiosteuerungstasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"` und `"AudioTrebleUp"` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Tastenwerte wurden für diese Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp` und `MicrophoneVolumeMute` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Neue Tastenwerte wurden hinzugefügt, um Spracherkennungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode` und `VoiceDial` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungstastenwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer` und `DVR` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Der Tastenwert `MediaSelect` wurde durch den Standard-Tastenwert `LaunchMediaPlayer` ersetzt ([Firefox-Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Mediaplayer-Tastenwerte wurden ebenfalls hinzugefügt. Dazu gehören `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut` und `NavigatePrevious` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die Eigenschaft [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter), die Unterstützung für das Hinzufügen von Filtern zu einer Leinwand bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Voreinstellung aktiviert werden ([Firefox-Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) Erweiterung wurde implementiert ([Firefox-Bug 1129332](https://bugzil.la/1129332)).
- Das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event) Ereignis, das gesendet wird, wenn ein WebGL-Kontext-Erstellungsversuch fehlschlägt, wurde implementiert ([Firefox-Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgegangen ist, sowohl zum Debuggen als auch für die Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).
- Sie können auch jetzt [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).

#### Service Worker und verwandtes

- Das Objekt [`Response`](/de/docs/Web/API/Response) der [Fetch-API](/de/docs/Web/API/Fetch_API) implementiert jetzt die Eigenschaft [`redirected`](/de/docs/Web/API/Response/redirected), die angibt, ob die Antwort für eine Anfrage ist, die umgeleitet wurde oder nicht. Bitte lesen Sie die sicherheitsbezogenen Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox-Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions-API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den 'push' `PermissionDescriptor` Dictionary-Typ (in der Spezifikation als `PushPermissionDescriptor` bezeichnet) nicht mehr; das liegt daran, dass Firefox stattdessen auf ein Quotensystem zur Steuerung des `userVisibleOnly`-Status angewiesen ist und einen Fehler auslöste, wenn es auf eine `PushPermissionDescriptor`-Instanz stieß ([Firefox-Bug 1266821](https://bugzil.la/1266821)). Mit dem Entfernen dieses Dictionarys ignoriert Firefox es jetzt.

#### Medienströme

- In der Vergangenheit war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich war, selbst wenn der Benutzer nur eine der beiden Hardwaretypen verfügbar hatte. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich war, obwohl der Benutzer den Zugriff auf eines der beiden übereinstimmenden Geräte verweigert hat. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)). Dies beinhaltet auch geringfügige Änderungen an der Benutzeroberfläche, um die Optionen "Kein Audio" oder "Kein Video" bei der Berechtigungsanfrage des Benutzers zu entfernen.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox-Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um Tracks zu ermöglichen, die keine Komponenten der angegebenen Streams sind, zur Verbindung hinzugefügt zu werden. Stattdessen werden die Streams verwendet, um Tracks am empfangenden Ende der Verbindung zu gruppieren ([Firefox-Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig in Nightly aktiviert. Sie ist standardmäßig in anderen Versionen von Firefox 49 nicht verfügbar ([Firefox-Bug 1271487](https://bugzil.la/1271487)).

#### Sonstiges

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Präferenz `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox-Bug 669259](https://bugzil.la/669259)).
- Die nur in Firefox OS verfügbare Data Store API wurde entfernt ([Firefox-Bug 1261009](https://bugzil.la/1261009)).
- Die Ereignishandler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) wurden vom [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die prefixed Versionen dieser Ereignishandler wurden jedoch aus Kompatibilitätsgründen dort behalten ([Firefox-Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies standardmäßig noch nicht aktiviert ist, sondern sich hinter der Präferenz `full-screen-api.unprefix.enabled` befindet ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Das veraltete `Document.mozFullScreen` Attribut wurde zu [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) ent-prefixed [Firefox-Bug 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies standardmäßig noch nicht aktiviert ist, sondern sich hinter der Präferenz `full-screen-api.unprefix.enabled` befindet ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert leise ignoriert und die Setter-Funktion ist ein No-Op ([Firefox-Bug 1269798](https://bugzil.la/1269798)).
- Jegliche Art von Daten kann jetzt aus der Zwischenablage mithilfe von [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abgerufen werden: zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox-Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation vollständig umgeschrieben wurde ([Firefox-Bug 1271846](https://bugzil.la/1271846)).
- Um mit der Spezifikation übereinzustimmen, gibt die Eigenschaft [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt ein `PositionAlign`-Enum statt eines `Align`-Enums zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachausgabeteil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_API) ist jetzt standardmäßig in Nightly verfügbar (jedoch nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) Ereignishandler werden jetzt für [Web-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox-Bug 1265279](https://bugzil.la/1265279)).
- Bei der Verwendung der Methode [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie jetzt festlegen, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Dictionary-Objekt als dritten Parameter aufnehmen, das einen einzigen Parameter enthält — `{disableNormalization: true}` ([Firefox-Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT-API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting`-Enum gemäß Spezifikation zurück; zuvor gab es ein `AlignSetting`-Enum zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachausgabeteil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null Zeitachse ([Firefox-Bug 1096776](https://bugzil.la/1096776)).
- Die Eigenschaft [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animationen](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox-Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderungen._

### SVG

- Unterstützung für die veralteten Elemente `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` entfernt ([Firefox-Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderungen._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für die ordnungsgemäße Funktion von Websites nicht erforderlich sind. Dieses Verhalten, das durch die Präferenz `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, trägt dazu bei, die Leistung von Websites und Firefox im Allgemeinen zu verbessern, ohne die Benutzerfreundlichkeit der Website erheblich zu beeinträchtigen. Es trägt auch zur Verbesserung der Stabilität des Surferlebnisses bei, indem eine häufige Absturzursache beseitigt wird. Zu den blockierten Flash-Modulen gehören mehrere, die nur zu Fingerprinting-Zwecken verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und zukünftig kann diese Liste um weitere blockierte Module erweitert werden. Weitere Informationen finden Sie unter [Firefox-Bug 1275591](https://bugzil.la/1275591).

Dies markiert den nächsten Schritt auf dem Weg zu einer pluginfreien Zukunft. HTML ist sehr nah an dem Punkt, an dem Plugins nicht mehr erforderlich sein werden, um die Arbeit zu erledigen.

## HTTP

- Die [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Direktive wurde implementiert ([Firefox-Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogbeitrag](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Die `require-sri-for` {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox-Bug 1265318](https://bugzil.la/1265318)).

## Netzwerke

- Die Implementierung der [Proxy Auto-Konfiguration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange` und `timeRange` "umkehrte Bereiche". Zum Beispiel wird `weekdayRange("SAT", "MON")` `true` auswerten, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox-Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft, die angibt, ob ein Kontext in der Lage ist, Features zu verwenden, die [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) erfordern, wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit bestehenden Inhalten zu verbessern, akzeptiert Firefox jetzt einige mit WebKit prefixte Eigenschaften und Attribute.

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

- Die folgenden Eigenschaften werden der äquivalenten prefixed-Eigenschaft zugeordnet:
  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:
  - Die folgenden Funktionen werden ihren unprefixed-Äquivalenten zugeordnet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in einen regulären Verlauf übersetzt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:
  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und nicht einem unprefixed-Äquivalent zugeordnet):
  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix` Oberfläche ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).
- Die folgenden Medienabfrage-Features wurden implementiert:
  - `-webkit-min-device-pixel-ratio` als Alias für [`min-resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) mit demselben Wert (in `dppx`), obwohl dieses Feature [standardmäßig deaktiviert](https://bugzil.la/1237720) ist (hinter about:config Präferenz `layout.css.prefixes.device-pixel-ratio-webkit`).
  - `-webkit-max-device-pixel-ratio` als Alias für [`max-resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) mit demselben Wert (in `dppx`); dieses Feature ist ebenfalls standardmäßig deaktiviert, hinter derselben about:config Präferenz.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d) immer passend, um 3D-Transform-Unterstützung anzuzeigen.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf mit verfügbaren Methoden zum Durchsuchen des Verlaufs, zum Abrufen von Informationen über zuvor besuchte Seiten sowie zum Hinzufügen und Entfernen von Verlaufs-Einträgen.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} zur Tabs-API hinzugefügt. Diese Methode ermöglicht das Entfernen von CSS, das zuvor durch Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, der nur in Code aktiv ist, der in XBL oder in der Chrome-Umgebung von Firefox läuft, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox-Bug 1274520](https://bugzil.la/1274520))

### Sonstiges

_Keine Änderungen._
