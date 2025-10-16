---
title: Firefox 49 Versionshinweise für Entwickler
short-title: Firefox 49
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- JavaScript-Fehler, die in die Konsole protokolliert werden, bieten [jetzt einen \[Learn more\] Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debugging-Hilfe ([Firefox-Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: mehr Vorschläge im Autovervollständigung-Popup anzeigen ([Firefox-Bug 1260419](https://bugzil.la/1260419)).
- Der Animations-Inspektor zeigt jetzt [Animation Performance Informationen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den Entwicklerwerkzeugen an ([Firefox-Bug 1254408](https://bugzil.la/1254408)).
- Das [Inspektor-Kontextmenü](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde für eine bessere Übersichtlichkeit und Benutzerfreundlichkeit neu organisiert ([Firefox-Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die Syntax `#RRGGBBAA` und `#RGBA` für Farbwerte ([Firefox-Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklerwerkzeuge zeigen keine selbstschließenden Tags (wie {{HTMLElement("br")}} und {{HTMLElement("img")}} mehr an, als ob sie ein Schlusstag auf HTML-Seiten hätten; das Verhalten bleibt für XHTML-Seiten unverändert ([Firefox-Bug 820926](https://bugzil.la/820926)).
- Barrierefreiheitsverbesserungen!
  - Der Werkzeugkasten sorgt besser dafür, dass der Tastaturfokus besser sichtbar ist ([Firefox-Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitsbeschriftungen wurden zu unbeschrifteten Steuerelementen hinzugefügt ([Firefox-Bug 1242715](https://bugzil.la/1242715)).
  - Es wurden ordnungsgemäße Baumansichten und Tastaturnavigation zur Markup-Ansicht des Inspektors hinzugefügt ([Firefox-Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Ursache-Spalte an, die angibt, was jede spezielle Netzwerkabfrage verursacht hat ([Firefox-Bug 1134073](https://bugzil.la/1134073)).
- Auf der Seite _about:debugging_ für Add-ons ist die Schaltfläche "Neu laden" nur für temporäre Add-ons aktiviert. Sie wird für alle anderen Add-ons deaktiviert ([Firefox-Bug 1273184](https://bugzil.la/1273184)).
- Auf der Seite _about:debugging_ für Worker wird in dem Abschnitt zu Service Workern eine Warnmeldung angezeigt, wenn [Service Worker mit der aktuellen Browserkonfiguration inkompatibel](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) sind ([Firefox-Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debuggbaren Tabs zeigt, die in der aktuellen Firefox-Instanz geöffnet sind ([Firefox-Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Cache deaktivieren_ in den [Erweiterten Einstellungen des Werkzeugkastens](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in HTTP-Cache deaktivieren umbenannt, um zu verdeutlichen, dass dies den HTTP-Cache betrifft und nicht [Service Worker](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) (bug 1253018).
- Der [Storage-Inspector erlaubt nun das Löschen von IndexedDB-Datenbanken](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über ihre eigenen Kontextmenüs ([Firefox-Bug 1205123](https://bugzil.la/1205123)), und wird Warnmeldungen anzeigen, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (zum Beispiel, wenn es noch aktive Verbindungen gibt) ([Firefox-Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente hinzugefügt ([Firefox-Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut des {{HTMLElement("input")}} Elements verwendet jetzt den `'u'` Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox-Bug 1227906](https://bugzil.la/1227906)).
- Um eine Spezifikationsänderung zu befolgen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) Attributs des {{HTMLElement('track')}} Elements jetzt wie `"metadata"` anstatt `"subtitles"` behandelt ([Firefox-Bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut des {{HTMLElement("iframe")}} Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox-Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Mikrodatumsattribute und die Microdata API wurde entfernt ([Firefox-Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attribut auf dem {{HTMLElement("a")}} Element unterstützt jetzt `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox-Bug 1178337](https://bugzil.la/1178337)).
- Das `form` Inhaltsattribut des {{HTMLElement("label")}} Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft existiert noch, gibt aber jetzt das Formular zurück, mit dem das Steuerungselement des Labels assoziiert ist, wenn es ein Steuerungselement gibt (und wenn dieses Steuerungselement mit einem Formular assoziiert ist) ([Firefox-Bug 1268852](https://bugzil.la/1268852)).

### CSS

- Hinzugefügt wurden {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es ermöglichen, die horizontalen und vertikalen Offsets getrennt anzugeben, an denen ein Hintergrundbild gezeichnet wird; dies sind Komponenten von {{cssxref("background-position")}} ([Firefox-Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die Keywords `round` und `space` zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox-Bug 548372](https://bugzil.la/548372)).
- Bei {{cssxref("background-clip")}} ist das Keyword `text` jetzt standardmäßig aktiviert ([Firefox-Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung zum Spezifizieren von Farben mit einem Alphakanal unter Verwendung von 4- und 8-stelligen CSS-Hex [color](/de/docs/Web/CSS/color_value) Werten (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox-Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde ohne Präfix implementiert ([Firefox-Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}}, können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}} Werten interpolieren ([Firefox-Bug 1110460](https://bugzil.la/1110460)).
- Die [`q` Längeneinheit](/de/docs/Web/CSS/length#q) hinzugefügt ([Firefox-Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde ohne Präfix implementiert ([Firefox-Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, das `word-wrap` ersetzt, das weiterhin als alternativer Name unterstützt wird ([Firefox-Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) Implementierung wurde verbessert:
  - Implementiert {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox-Bug 1266268](https://bugzil.la/1266268)).
  - Unterstützung für Gitterlayout für {{cssxref("align-self")}}, {{cssxref("justify-self")}} Werte `baseline` und `last-baseline` (auch bekannt als "Baseline-Selbstausrichtung") implementiert ([Firefox-Bug 1221525](https://bugzil.la/1221525)).
  - Implementiert Basislinieninhalt-Ausrichtung für Gitterelemente ([Firefox-Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS Masks](/de/docs/Web/CSS/CSS_masking) Implementierung wurde verbessert:
  - Die Eigenschaft {{cssxref("mask-origin")}} verwendet jetzt `border-box` anstelle von `padding-box` als Initialwert, um der Spezifikation zu entsprechen ([Firefox-Bug 1258286](https://bugzil.la/1258286)).
  - Die Eigenschaft {{cssxref("mask-repeat")}} unterstützt jetzt die Werte `space` und `round` ([Firefox-Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem behoben, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert werden konnte ([Firefox-Bug 1273804](https://bugzil.la/1273804)).

- Die Einstellung, die die {{cssxref("text-emphasis")}} Eigenschaft kontrolliert, wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox-Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Traps wurden implementiert ([Firefox-Bug 888969](https://bugzil.la/888969)).
- Die ES2015 [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search), und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) Methoden, und [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) Getter wurden implementiert ([Firefox-Bug 887016](https://bugzil.la/887016)).
- Der veraltete, nicht-standardmäßige `flags` Parameter von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox-Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der {{jsxref("Date.parse()")}} Methode beim Parsen zweistelliger Jahre wurde geändert, um besser mit dem Google Chrome Browser interoperabel zu sein ([Firefox-Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox-Bug 1257849](https://bugzil.la/1257849)).
- Die [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) Methode wurde hinzugefügt ([Firefox-Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'` Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktors ignoriert ([Firefox-Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin), und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) bereits für URL mit dem `blob:` Schema zurückgegebene Wert ist nicht länger fälschlicherweise `null`, sondern stattdessen der Herkunft der URL, gebildet durch das Entfernen des `blob:` Präfix ([Firefox-Bug 1270451](https://bugzil.la/1270451)).
- Im Vorbereitungsmodus gibt die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) Eigenschaft jetzt `'prerender'` zurück ([Firefox-Bug 1069772](https://bugzil.la/1069772)).
- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox-Bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox-Bug 1188539](https://bugzil.la/1188539)).
- In der Standardeinstellung ist das [`scrollbars`](/de/docs/Web/API/Window) Merkmal aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit wurde zwar dringend empfohlen, es zu aktivieren, es war jedoch nicht standardmäßig aktiviert ([Firefox-Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht standardisierte_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame), die es ermöglicht, frameweise durch Videoinhalte zu navigieren, hinzugefügt ([Firefox-Bug 1235301](https://bugzil.la/1235301)). Sie sind ermutigt, mit dieser Methode zu experimentieren, um zu verstehen, wie nützlich sie ist, _aber verwenden Sie sie nicht in Produktionscode!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft gibt jetzt das Formular zurück, mit dem das Steuerungselement des Labels assoziiert ist, wenn es ein Steuerungselement gibt (und wenn dieses Steuerungselement mit einem Formular assoziiert ist). Früher wurden Labels direkt mit Formularen über diese Eigenschaft assoziiert ([Firefox-Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), der entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions` sein kann, wurde hinzugefügt ([Firefox-Bug 1266164](https://bugzil.la/1266164) und [Firefox-Bug 1266066](https://bugzil.la/1266066)).
- Die audio-Lautstärken-bezogenen Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"`, und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Einklang mit dem neuesten Entwurf der UI Events Spezifikation ([Firefox-Bug 1272578](https://bugzil.la/1272578)). Siehe [Codewerte für Tastaturevents](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tasten, die früher als `"MozHomeScreen"`, `"MozCameraFocusAdjust"`, und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI Events Spezifikation: `"GoHome"`, `"CameraFocus"`, und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox-Bug 1272599](https://bugzil.la/1272599)). Siehe [Codewerte für Tastaturevents](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tastenwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und ungenutzt waren ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Tastenwerte und die entsprechenden Tastencodes für `"Hyper"` und `"Super"` wurden hinzugefügt, um diese veralteten Modifikator-Tasten darzustellen ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Zwei Tastenwerte für Multimedia-Zahlenblocktasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastenwerte wurden für Audiokontrolltasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, und `"AudioTrebleUp"` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Tastenwerte wurden für diese Mikrofon/ Audiokontrolltasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp`, und `MicrophoneVolumeMute` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Neue Tastenwerte wurden hinzugefügt, um die Unterstützung von Spracherkennungsgeräten zu erweitern: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode`, und `VoiceDial` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungstastenwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, und `DVR` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Der Tastenwert `MediaSelect` wurde durch den Standardtastenwert `LaunchMediaPlayer` ersetzt ([Firefox-Bug 1272592](https://bugzil.la/1272592)).
- Weitere Mediaplayer-Tastenwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, und `NavigatePrevious` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) Eigenschaft, die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Einstellung aktiviert werden ([Firefox-Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) für [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) wurde implementiert ([Firefox-Bug 1129332](https://bugzil.la/1129332)).
- Das Event [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event), das gesendet wird, wenn ein Versuch, einen WebGL-Kontext zu erstellen, fehlschlägt, wurde implementiert ([Firefox-Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dieses, um zu verstehen, was schiefgelaufen ist, sowohl zum Debuggen als auch für die Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).
- Sie können auch jetzt [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).

#### Service Worker und Verwandtes

- Das [`Redirected`]-Eigenschaft der [Fetch API](/de/docs/Web/API/Fetch_API)'s [`Response`](/de/docs/Web/API/Response) Objekt implementiert jetzt die [`redirected`](/de/docs/Web/API/Response/redirected) Eigenschaft, die angibt, ob die Antwort für eine Weiterleitungseingabe war oder nicht. Bitte lesen Sie die sicherheitsrelevanten Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox-Bug 1243792](https://bugzil.la/1243792)).
- In der [Berechtigungen API](/de/docs/Web/API/Permissions_API), unterstützt Firefox nicht mehr den 'push' `PermissionDescriptor` Wörterbuchtyp (als `PushPermissionDescriptor` im Spezifikation bezeichnet); dies liegt daran, dass Firefox stattdessen ein Quotensystem zur Kontrolle des `userVisibleOnly` Status verwendet und einen Fehler auslöste, wenn es auf eine `PushPermissionDescriptor` Instanz traf ([Firefox-Bug 1266821](https://bugzil.la/1266821)). Mit dem Entfernen dieses Wörterbuchs ignoriert Firefox es jetzt.

#### Mediastreams

- In der Vergangenheit konnte ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, auch dann erfolgreich sein, wenn der Benutzer nur eine der beiden Hardware-Typen zur Verfügung hatte. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, auch dann erfolgreich war, wenn der Benutzer den Zugriff auf ein, aber nicht beide, der passenden Geräte verweigerte. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)). Dies beinhaltet auch kleine Änderungen in der Benutzeroberfläche, um die Optionen "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer nach Berechtigungen gefragt wird.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox-Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um es zu ermöglichen, Tracks hinzuzufügen, die keine Komponenten der angegebenen Streams sind. Stattdessen werden die Streams verwendet, um Tracks am empfangsseitigen Ende der Verbindung zu gruppieren ([Firefox-Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig in Nightly aktiviert. Sie ist in anderen Versionen von Firefox 49 nicht standardmäßig verfügbar ([Firefox-Bug 1271487](https://bugzil.la/1271487)).

#### Andere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Einstellung `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox-Bug 669259](https://bugzil.la/669259)).
- Die nur in Firefox OS verfügbare Data Store API wurde entfernt ([Firefox-Bug 1261009](https://bugzil.la/1261009)).
- Die Ereignishandler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden von [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die mit Präfix versehene Version dieser Ereignishandler wurde dort jedoch aus Kompatibilitätsgründen beibehalten ([Firefox-Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern sich hinter der Einstellung `full-screen-api.unprefix.enabled` befindet ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die obsolete Eigenschaft `Document.mozFullScreen` wurde ohne Präfix umbenannt zu [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) [Firefox-Bug 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern sich hinter der Einstellung `full-screen-api.unprefix.enabled` befindet ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert leise ignoriert und die Setter-Funktion ist eine No-Operation ([Firefox-Bug 1269798](https://bugzil.la/1269798)).
- Jede Art von Daten kann jetzt mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) aus der Zwischenablage abgerufen werden: früher wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox-Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den zwei Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation komplett neu geschrieben wurde ([Firefox-Bug 1271846](https://bugzil.la/1271846)).
- Um die Spezifikation zu erfüllen, gibt die [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) Eigenschaft jetzt ein `PositionAlign` Enum anstelle eines `Align` Enums zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Teil der Sprachsynthese der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_API) ist jetzt standardmäßig in Nightly verfügbar (aber nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis und die [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) Ereignishandler werden jetzt für [Web Manifeste](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox-Bug 1265279](https://bugzil.la/1265279)).
- Bei Verwendung der Methode [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) der [Web Audio API](/de/docs/Web/API/Web_Audio_API), können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Wörterbuchobjekt als dritter Parameter einschließen, das einen einzigen Parameter umfasst — `{disableNormalization: true}` ([Firefox-Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting` Enum gemäß der Spezifikation zurück; zuvor gab es ein `AlignSetting` Enum zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Teil der Sprachsynthese der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null Zeitleiste ([Firefox-Bug 1096776](https://bugzil.la/1096776)).
- Die [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox-Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente entfernt ([Firefox-Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Beginnend mit Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für das gute Funktionieren von Websites nicht erforderlich sind. Dieses Verhalten, gesteuert durch die Einstellung `browser.safebrowsing.blockedURIs.enabled`, trägt zur Verbesserung der Leistung von Websites und Firefox im Allgemeinen bei, ohne die Benutzerfreundlichkeit der Website wesentlich zu beeinträchtigen. Es trägt auch zur Stabilität des Browsing-Erlebnisses bei, indem es eine Hauptursache für Abstürze eliminiert. Die blockierten Flash-Module umfassen mehrere, die nur für Fingerprinting-Zwecke verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in Zukunft kann diese möglicherweise erweitert werden, um mehr Arten von blockierten Modulen einzuschließen. Siehe [Firefox-Bug 1275591](https://bugzil.la/1275591) für Details.

Dies markiert den nächsten Schritt auf dem Weg zu einer zukunft ohne Plug-ins. HTML ist sehr nah an dem Punkt, an dem Plug-ins nicht mehr benötigt werden, um die Arbeit zu erledigen.

## HTTP

- Die [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Direktive wurde implementiert ([Firefox-Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogpost](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Der `require-sri-for` {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox-Bug 1265318](https://bugzil.la/1265318)).

## Netzwerke

- Die [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) Implementierung wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange`, und `timeRange` "umgekehrte Bereiche", zum Beispiel, `weekdayRange("SAT", "MON")` wird werten `true`, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox-Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft, die angibt, ob ein Kontext in der Lage ist, Funktionen zu verwenden, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit vorhandenen Inhalten zu verbessern, akzeptiert Firefox jetzt einige WebKit-präfixierte Eigenschaften und Attribute.

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

- Die folgenden Eigenschaften werden auf die gleichwertige Attribute gemappt:
  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:
  - Die folgenden Funktionen werden auf ihre unpräfigierten Äquivalente gemappt: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Der veraltete `-webkit-gradient` wird unterstützt (und in einen regulären Verlauf übersetzt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:
  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und nicht auf ein unpräfigiertes Äquivalent gemappt):
  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix` Schnittstelle ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Medienabfrage-Features wurden implementiert:
  - `-webkit-min-device-pixel-ratio` als Alias von [`min-resolution`](/de/docs/Web/CSS/@media/resolution) mit demselben Wert (in `dppx)`, obwohl diese Funktion [standardmäßig deaktiviert ist](https://bugzil.la/1237720) (hinter `about:config` Einstellung `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als Alias von [`max-resolution`](/de/docs/Web/CSS/@media/resolution) mit demselben Wert (in `dppx`); diese Funktion ist ebenfalls standardmäßig deaktiviert, hinter derselben `about:config` Einstellung.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d) immer übereinstimmend, was Unterstützung für 3D-Transformationen anzeigt.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf, mit Methoden, die für die Suche im Verlauf, die Ermittlung von Informationen über zuvor besuchte Seiten und das Hinzufügen und Entfernen von Verlaufs-Einträgen verfügbar sind.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde zur Tabs-API hinzugefügt. Diese Methode ermöglicht es Ihnen, CSS zu entfernen, das zuvor durch den Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, der nur im Code läuft in XBL oder in Firefox's Chrome aktiv ist, ein {{jsxref("Boolean")}}, das angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox-Bug 1274520](https://bugzil.la/1274520))

### Sonstiges

_Keine Änderung._
