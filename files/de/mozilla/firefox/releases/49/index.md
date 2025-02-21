---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{FirefoxSidebar}}

[Um die neuesten Entwickler-Features von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklertools

- JavaScript-Fehler, die in die Konsole protokolliert werden, [bieten jetzt einen \[Weitere Informationen\]-Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debugging-Hilfe ([Firefox-Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: Zeigt mehr Vorschläge im Autovervollständigung-Popup an ([Firefox-Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor [zeigt jetzt Leistungsinformationen zu Animationen an](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den DevTools ([Firefox-Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um übersichtlicher und benutzerfreundlicher zu sein ([Firefox-Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt nun die Syntax `#RRGGBBAA` und `#RGBA` für Farbwerte ([Firefox-Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklertools zeigen keine selbstschließenden Tags mehr an (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}, als ob sie ein Schlusstag auf HTML-Seiten hätten; das Verhalten bleibt für XHTML-Seiten unverändert ([Firefox-Bug 820926](https://bugzil.la/820926)).
- Barrierefreiheitsverbesserungen!

  - Die Werkzeugleiste sorgt besser dafür, dass der Tastaturfokus sichtbarer ist ([Firefox-Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitsbeschriftungen wurden zu unbeschrifteten Steuerelementen hinzugefügt ([Firefox-Bug 1242715](https://bugzil.la/1242715)).
  - Es wurden Semantiken der richtigen Baumansicht und Tastaturnavigation zur Markup-Ansicht des Inspektors hinzugefügt ([Firefox-Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Spalte "Ursache", die angibt, was jede bestimmte Netzwerkanforderung verursacht hat ([Firefox-Bug 1134073](https://bugzil.la/1134073)).
- Auf der _about:debugging_-Add-ons-Seite ist die Schaltfläche Neu laden nur für temporäre Add-ons aktiviert. Für alle anderen Add-ons wird sie deaktiviert ([Firefox-Bug 1273184](https://bugzil.la/1273184)).
- Auf der _about:debugging_-Workers-Seite wird eine Warnmeldung im Abschnitt „Service Workers“ angezeigt, wenn [Service Workers mit der aktuellen Browser-Konfiguration inkompatibel sind](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) ([Firefox-Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debuggbaren Tabs in der aktuellen Firefox-Instanz bereitstellt ([Firefox-Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Cache deaktivieren_ in den [erweiterten Einstellungen der Werkzeugleiste](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in „HTTP-Cache deaktivieren“ umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) (Bug 1253018).
- Der [Speicherinspektor erlaubt nun das Löschen von IndexedDB-Datenbanken](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über ihre eigenen Kontextmenüs ([Firefox-Bug 1205123](https://bugzil.la/1205123)), und es werden Warnmeldungen angezeigt, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (wenn es zum Beispiel noch aktive Verbindungen gibt) ([Firefox-Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die Elemente {{HTMLElement("details")}} und {{HTMLElement("summary")}} hinzugefügt ([Firefox-Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut des {{HTMLElement("input")}}-Elements verwendet jetzt den `'u'`-Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox-Bug 1227906](https://bugzil.la/1227906)).
- Um eine Änderung der Spezifikation zu berücksichtigen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attributs des {{HTMLElement('track')}}-Elements jetzt wie `"metadata"` und nicht mehr wie `"subtitles"` behandelt ([Firefox-Bug 1269712](https://bugzil.la/1269712)).
- Das `sandbox`-Attribut des {{HTMLElement("iframe")}}-Elements unterstützt nun die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox-Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Mikrodateneigenschaften und die Microdata-API wurde entfernt ([Firefox-Bug 909633](https://bugzil.la/909633)).
- Das `referrerpolicy`-Attribut des {{HTMLElement("a")}}-Elements unterstützt jetzt die Werte `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox-Bug 1178337](https://bugzil.la/1178337)).
- Das [`form`](/de/docs/Web/HTML/Element/label#form)-Inhaltsattribut des {{HTMLElement("label")}}-Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft existiert weiterhin, gibt nun jedoch das Formular zurück, mit dem das Steuerungselement des Labels verknüpft ist, falls ein solches existiert (und dieses Steuerungselement mit einem Formular verknüpft ist) ([Firefox-Bug 1268852](https://bugzil.la/1268852)).

### CSS

- {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} hinzugefügt, um die horizontalen und vertikalen Versätze anzugeben, an denen ein Hintergrundbild gezeichnet werden soll; diese sind Komponenten von {{cssxref("background-position")}} ([Firefox-Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die `round`- und `space`-Schlüsselwörter zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox-Bug 548372](https://bugzil.la/548372)).
- Bei {{cssxref("background-clip")}} ist das Schlüsselwort `text` jetzt standardmäßig aktiviert ([Firefox-Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alphakanal mit Hilfe von 4- und 8-stelligen CSS-Hexadecimalwerten (Farbwerten) (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox-Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde unpr

äfixed ([Firefox-Bug 859301](https://bugzil.la/859301)).

- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}}-Werten interpolieren ([Firefox-Bug 1110460](https://bugzil.la/1110460)).
- Die [`q` Längeneinheit](/de/docs/Web/CSS/length#q) wurde hinzugefügt ([Firefox-Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde unpr

äfixed ([Firefox-Bug 1039541](https://bugzil.la/1039541)).

- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, das weiterhin als alternativer Name `word-wrap` unterstützt wird ([Firefox-Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout)-Implementierung wurde verbessert:

  - Implementiert {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox-Bug 1266268](https://bugzil.la/1266268)).
  - Implementierte Grid-Layout-Unterstützung für {{cssxref("align")}}, {{cssxref("justify-self")}}: `baseline` und `last-baseline` (auch bekannt als "Baseline-Selbstausrichtung") ([Firefox-Bug 1221525](https://bugzil.la/1221525)).
  - Implementierte Baseline-Inhaltsausrichtung von Grid-Items ([Firefox-Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS Masks](/de/docs/Web/CSS/CSS_masking)-Implementierung wurde verbessert:

  - Die {{cssxref("mask-origin")}}-Eigenschaft verwendet jetzt `border-box` anstelle von `padding-box` als Anfangswert, um der Spezifikation zu entsprechen ([Firefox-Bug 1258286](https://bugzil.la/1258286)).
  - Die {{cssxref("mask-repeat")}}-Eigenschaft unterstützt jetzt die Werte `space` und `round` ([Firefox-Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert wurde, wurde behoben ([Firefox-Bug 1273804](https://bugzil.la/1273804)).

- Die Einstellung zur Steuerung von {{cssxref("text-emphasis")}} wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox-Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}- und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}-{{jsxref("Proxy")}}-Fallen wurden implementiert ([Firefox-Bug 888969](https://bugzil.la/888969)).
- Die ES2015-Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) sowie der Getter [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) wurden implementiert ([Firefox-Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardisierte `flags`-Argument von `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox-Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der Methode {{jsxref("Date.parse()")}} beim Parsen zweistelliger Jahre wurde geändert, um besser mit dem Google Chrome-Browser interoperabel zu sein ([Firefox-Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox-Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox-Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'`-Zeichen werden jetzt im Parameter des Konstruktors [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) ignoriert ([Firefox-Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) zurückgegebene Wert für URLs, die das `blob:`-Schema verwenden, ist nicht mehr fälschlicherweise `null`, sondern stattdessen der Ursprung der URL, der durch Entfernen des führenden `blob:` gebildet wird ([Firefox-Bug 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die Eigenschaft [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) jetzt `'prerender'` zurück ([Firefox-Bug 1069772](https://bugzil.la/1069772)).
- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4-Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox-Bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox-Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist das `scrollbars`-Feature von [`Window`](/de/docs/Web/API/Window) aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit war empfohlen worden, dies zu aktivieren, aber es war nicht die Standardeinstellung ([Firefox-Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht standardisierte_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde hinzugefügt, die das frameweise Durchgehen von Videoinhalten ermöglicht ([Firefox-Bug 1235301](https://bugzil.la/1235301)). Obwohl Sie dazu ermutigt werden, mit dieser Methode zu experimentieren, um uns zu helfen, zu verstehen, wie nützlich sie ist, _verwenden Sie sie nicht in Produktion!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft gibt nun das Formular zurück, mit dem das Steuerungselement des Labels verknüpft ist, falls ein solches existiert (und dieses Steuerungselement mit einem Formular verknüpft ist). Zuvor wurden Label direkt mit Formularen durch diese Eigenschaft verknüpft ([Firefox-Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder eine `EventListenerOptions` wurde hinzugefügt ([Firefox-Bug 1266164](https://bugzil.la/1266164) und [Firefox-Bug 1266066](https://bugzil.la/1266066)).
- Die audiospezifischen Lautstärke-Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"` und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Übereinstimmung mit dem neuesten Entwurf der UI-Events-Spezifikation ([Firefox-Bug 1272578](https://bugzil.la/1272578)). Siehe [Code-Werte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste verfügbarer Tastencodes.
- Die Tasten, die bisher als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben nun offizielle Namen in der UI-Events-Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox-Bug 1272599](https://bugzil.la/1272599)). Siehe [Code-Werte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste verfügbarer Tastencodes.
- Die Tastenwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und ungenutzt waren ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Tastenwerte und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifikatortasten darzustellen ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Zwei Tastenwerte für Multimedia-Zehnertastatur-Tasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastenwerte wurden für Audiosteuerungstasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"` und `"AudioTrebleUp"` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Tastenwerte wurden für diese Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp` und `MicrophoneVolumeMute` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Neue Tastenwerte wurden hinzugefügt, um Spracherkennungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode` und `VoiceDial` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungstastenwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer` und `DVR` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Der Tastenwert `MediaSelect` wurde durch den standardmäßigen `LaunchMediaPlayer`-Tastenwert ersetzt ([Firefox-Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Media Player-Tastenwerte wurden ebenfalls hinzugefügt. Diese sind: `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut` und `NavigatePrevious` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die Eigenschaft [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter), die Unterstützung für das Hinzufügen von Filtern zu einer Leinwand bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Einstellung aktiviert werden ([Firefox-Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) wurde implementiert ([Firefox-Bug 1129332](https://bugzil.la/1129332)).
- Das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)-Ereignis, das gesendet wird, wenn ein Versuch zur Erstellung eines WebGL-Kontexts fehlschlägt, wurde implementiert ([Firefox-Bug 1271478](https://bugzil.la/1271478)). Nutzen Sie dies, um besser zu verstehen, was schief gelaufen ist, sowohl zum Debuggen als auch zur Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name)-Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).
- Sie können auch jetzt [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name)-Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).

#### Service Workers und verwandtes

- Das Objekt [`Response`](/de/docs/Web/API/Response) der [Fetch API](/de/docs/Web/API/Fetch_API) implementiert jetzt die [`redirected`](/de/docs/Web/API/Response/redirected)-Eigenschaft, die angibt, ob die Antwort zu einer Anforderung gehört, die umgeleitet wurde. Bitte lesen Sie die sicherheitsrelevanten Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox-Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) wird der 'push' `PermissionDescriptor`-Dictionary-Typ (im Standard als `PushPermissionDescriptor` bezeichnet) von Firefox nicht mehr unterstützt; dies liegt daran, dass Firefox ein Quota-System verwendet, um den `userVisibleOnly`-Status stattdessen zu kontrollieren, und es zu einem Fehler kam, wenn es auf eine `PushPermissionDescriptor`-Instanz stieß ([Firefox-Bug 1266821](https://bugzil.la/1266821)). Mit diesem entfernten Dictionary ignoriert Firefox es jetzt.

#### Media Streams

- In der Vergangenheit war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich war, auch wenn der Benutzer nur eine der beiden Hardwarearten zur Verfügung hat. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich war, obwohl der Benutzer den Zugriff auf eines, aber nicht beide, der übereinstimmenden Geräte verweigerte. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)). Dies beinhaltete auch Änderungen der Benutzeroberfläche, um die Optionen "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer um Berechtigungen angefordert wird.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox-Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um es zu ermöglichen, dass Tracks, die keine Komponenten der angegebenen Streams sind, zur Verbindung hinzugefügt werden können. Stattdessen werden die Streams verwendet, um Tracks auf der Empfangsseite der Verbindung zu gruppieren ([Firefox-Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-API ist jetzt standardmäßig in Nightly aktiviert. Sie ist standardmäßig in anderen Versionen von Firefox 49 nicht verfügbar ([Firefox-Bug 1271487](https://bugzil.la/1271487)).

#### Andere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Einstellung `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox-Bug 669259](https://bugzil.la/669259)).
- Die ausschließlich für Firefox OS verfügbare Data Store API wurde entfernt ([Firefox-Bug 1261009](https://bugzil.la/1261009)).
- Die Event-Handler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden aus dem [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie aufgerufen wurden; die vorfixierten Versionen dieser Event-Handler wurden jedoch aus Kompatibilitätsgründen beibehalten ([Firefox-Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der `full-screen-api.unprefix.enabled`-Einstellung ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete `Document.mozFullScreen`-Eigenschaft wurde auf [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) [Firefox-Bug 1269157](https://bugzil.la/1269157) umbenannt. Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der `full-screen-api.unprefix.enabled`-Einstellung ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, wenn versucht wird, ihren Wert zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist eine No-Op-Funktion ([Firefox-Bug 1269798](https://bugzil.la/1269798)).
- Jede Art von Daten kann jetzt aus der Zwischenablage mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abgerufen werden: früher wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox-Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation vollständig überarbeitet wurde ([Firefox-Bug 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die Eigenschaft [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt ein `PositionAlign`-Enum anstelle eines `Align`-Enums zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachausgabeteil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist jetzt standardmäßig in Nightly verfügbar (aber nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event)-Event-Handler werden jetzt für [Web Manifeste](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox-Bug 1265279](https://bugzil.la/1265279)).
- Bei der Verwendung der Methode [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Dictionary-Objekt als dritten Parameter einschließen, das einen einzigen Parameter enthält — `{disableNormalization: true}` ([Firefox-Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT-API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting`-Enum gemäß Spezifikation zurück; vorher gab sie ein `AlignSetting`-Enum zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachausgabeteil der Web Speech API ist jetzt in allen Desktop-Browsern standardmäßig aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Der Konstruktor [`Animation()`](/de/docs/Web/API/Animation/Animation) der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null Timeline ([Firefox-Bug 1096776](https://bugzil.la/1096776)).
- Die Eigenschaft [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox-Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten Elemente `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` wurde entfernt ([Firefox-Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für das ordnungsgemäße Funktionieren von Websites nicht erforderlich sind. Dieses Verhalten, das durch die Einstellung `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, trägt dazu bei, die Leistung von Websites und Firefox im Allgemeinen zu verbessern, ohne die Benutzerfreundlichkeit der Website wesentlich zu beeinträchtigen. Es hilft auch, die Stabilität des Browsererlebnisses zu verbessern, indem eine Hauptursache für Abstürze beseitigt wird. Zu den blockierten Flash-Modulen gehören mehrere, die nur für Fingerprinting-Zwecke verwendet werden, sowie eine Reihe von „Supercookie“-Modulen, und in Zukunft kann die Anzahl der blockierten Module erweitert werden. Für Details siehe [Firefox-Bug 1275591](https://bugzil.la/1275591).

Dies markiert den nächsten Schritt auf dem Weg zu einer pluginfreien Zukunft. HTML ist sehr nahe an dem Punkt, an dem Plugins nicht mehr benötigt werden, um die Aufgabe zu erfüllen.

## HTTP

- Die [`Cache-Control: immutable`](/de/docs/Web/HTTP/Headers/Cache-Control)-Direktive wurde implementiert ([Firefox-Bug 1267474](https://bugzil.la/1267474)). Lesen Sie auch diesen [Blogpost](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Die {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox-Bug 1265318](https://bugzil.la/1265318)).

## Networking

- Die [Proxy Auto-Configuration (PAC)](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>)-Implementierung wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange` und `timeRange` "umgekehrte Bereiche", z. B. wird `weekdayRange("SAT", "MON")` als `true` ausgewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox-Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext)-Eigenschaft, die anzeigt, ob ein Kontext in der Lage ist, Funktionen zu verwenden, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit vorhandenen Inhalten zu verbessern, akzeptiert Firefox nun einige mit WebKit vorfixierte Eigenschaften und Attribute.

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

- Die folgenden Eigenschaften werden auf die entsprechende vorfixierte Eigenschaft abgebildet:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}}-Werte:

  - Die folgenden Funktionen werden auf ihre unprefixed Äquivalente abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()` und `-webkit-repeating-radial-gradient()`.
  - Der veraltete `-webkit-gradient` wird unterstützt (und zu einem regulären Gradient übersetzt)

- Die folgenden {{cssxref("display")}}-Werte werden übersetzt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und nicht auf ein unprefixed Äquivalent abgebildet):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix`-Schnittstelle ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Medienabfrage-Features wurden implementiert:

  - `-webkit-min-device-pixel-ratio` als Alias für [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx`), obwohl dieses Feature [standardmäßig deaktiviert] ist(https://bugzil.la/1237720) (hinter about:config pref `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als Alias für [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx`); dieses Feature ist ebenfalls standardmäßig deaktiviert, hinter demselben about:config pref.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d) immer übereinstimmend, was anzeigt, dass 3D-Transformationsunterstützung vorhanden ist.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für den {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf, mit Methoden zum Suchen im Verlauf, Abrufen von Informationen über vorher besuchte Seiten und Hinzufügen sowie Entfernen von Verlaufseinträgen.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde zur Tabs-API hinzugefügt. Mit dieser Methode können Sie CSS entfernen, das zuvor durch Aufrufen von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, aktiv nur in Code, der in XBL oder in Firefox's Chrome ausgeführt wird, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox-Bug 1274520](https://bugzil.la/1274520))

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
