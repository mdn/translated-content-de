---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- JavaScript-Fehler, die in die Konsole protokolliert werden, bieten jetzt einen \[Learn more\] Link für zusätzliche Debug-Hilfe ([Firefox Bug 1179876](https://bugzil.la/1179876)).
- CSS Autovervollständigung: zeigt mehr Vorschläge im Autovervollständigung-Popup an ([Firefox Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor zeigt jetzt Animationsleistungsinformationen in den DevTools an ([Firefox Bug 1254408](https://bugzil.la/1254408)).
- Das Kontextmenü des Inspektors wurde neu organisiert, um es sauberer und benutzerfreundlicher zu gestalten ([Firefox Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die `#RRGGBBAA` und `#RGBA` Syntax für Farbwerte ([Firefox Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklertools zeigen keine Selbstschlusstags (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}) mehr an, als hätten sie ein Schlusstag auf HTML-Seiten; das Verhalten für XHTML-Seiten bleibt unverändert ([Firefox Bug 820926](https://bugzil.la/820926)).
- Verbesserungen zur Barrierefreiheit!

  - Das Werkzeugkasten-Fokussystem stellt sicher, dass die Tastaturfokussierung sichtbarer ist ([Firefox Bug 1242851](https://bugzil.la/1242851)).
  - Es wurden Barrierefreiheitsbezeichnungen für unbeschriftete Steuerelemente hinzugefügt ([Firefox Bug 1242715](https://bugzil.la/1242715)).
  - Zum Markup-Ansichtsbaum des Inspektors wurden semantische Beschreibungen und Tastaturnavigation hinzugefügt ([Firefox Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun eine Ursache-Spalte, die einen Hinweis darauf gibt, was jede spezielle Netzwerkanfrage verursacht hat ([Firefox Bug 1134073](https://bugzil.la/1134073)).
- Auf der _about:debugging_ Add-ons-Seite ist die Neuladen-Schaltfläche nur für temporäre Add-ons aktiviert. Sie wird für alle anderen Add-ons deaktiviert ([Firefox Bug 1273184](https://bugzil.la/1273184)).
- Auf der _about:debugging_ Workers-Seite wird eine Warnmeldung im Service Workers-Bereich angezeigt, wenn Service Workers mit der aktuellen Browserkonfiguration inkompatibel sind ([Firefox Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine neue [Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs) verfügbar, die eine vollständige Liste aller im aktuellen Firefox-Exemplar geöffneten Debug-Registerkarten bereitstellt ([Firefox Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Disable Cache_ in den [Toolbox Advanced settings](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in Disable HTTP Cache umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) (Bug 1253018).
- Der [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) erlaubt jetzt das Löschen von IndexedDB-Datenbanken über ihr eigenes Kontextmenü ([Firefox Bug 1205123](https://bugzil.la/1205123)), und wird Warnmeldungen anzeigen, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (z. B. wenn noch aktive Verbindungen bestehen) ([Firefox Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente hinzugefügt ([Firefox Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut des {{HTMLElement("input")}} Elements verwendet nun den `'u'` Parameter im darunterliegenden JavaScript {{jsxref("RegExp")}} ([Firefox Bug 1227906](https://bugzil.la/1227906)).
- Um eine Spezifikationsänderung widerzuspiegeln, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Element/track#kind) Attributs des {{HTMLElement('track')}} Elements jetzt wie `"metadata"` und nicht wie `"subtitles"` behandelt ([Firefox Bug 1269712](https://bugzil.la/1269712)).
- Das {{HTMLElement("iframe")}} Element [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut unterstützt nun die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata-API wurden entfernt ([Firefox Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) Attribut auf dem {{HTMLElement("a")}} Element unterstützt nun die Werte `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox Bug 1178337](https://bugzil.la/1178337)).
- Das [`form`](/de/docs/Web/HTML/Element/label#form) Inhaltsattribut des {{HTMLElement("label")}} Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft existiert noch, gibt jetzt jedoch das Formular zurück, mit dem das Steuerelement des Labels verbunden ist, falls es ein Steuerelement gibt (und falls dieses Steuerelement mit einem Formular verbunden ist) ([Firefox Bug 1268852](https://bugzil.la/1268852)).

### CSS

- Hinzugefügt {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es erlauben, die horizontalen und vertikalen Versätze, bei denen ein Hintergrundbild gezeichnet wird, separat anzugeben; diese sind Komponenten von {{cssxref("background-position")}} ([Firefox Bug 550426](https://bugzil.la/550426)).
- Support für die Keywords `round` und `space` zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox Bug 548372](https://bugzil.la/548372)).
- Bei {{cssxref("background-clip")}} ist das Keyword `text` nun standardmäßig aktiviert ([Firefox Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Farbangabe mit einem Alpha-Kanal unter Verwendung von 4- und 8-stelligen CSS-Hex-[color](/de/docs/Web/CSS/color_value)-Werten (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde ohne Präfix aktiviert ([Firefox Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}} Werten interpolieren ([Firefox Bug 1110460](https://bugzil.la/1110460)).
- Die `q` Längeneinheit wurde hinzugefügt ([Firefox Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde ohne Präfix aktiviert ([Firefox Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt und ersetzte `word-wrap`, das weiterhin als alternativer Name unterstützt wird ([Firefox Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle Implementierung von [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) wurde verbessert:

  - Implementierte {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox Bug 1266268](https://bugzil.la/1266268)).
  - Implementierte Grid-Layout-Unterstützung für {{cssxref("align")}}, {{cssxref("justify-self")}}`:baseline` und `last-baseline` (auch bekannt als "baseline self-alignment") ([Firefox Bug 1221525](https://bugzil.la/1221525)).
  - Implementierte Basislinieninhalt-Ausrichtung für Grid-Items ([Firefox Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle Implementierung von [CSS Masks](/de/docs/Web/CSS/CSS_masking) wurde verbessert:

  - Die Eigenschaft {{cssxref("mask-origin")}} verwendet nun `border-box` anstelle von `padding-box` als Initialwert, um der Spezifikation zu entsprechen ([Firefox Bug 1258286](https://bugzil.la/1258286)).
  - Die Eigenschaft {{cssxref("mask-repeat")}} unterstützt nun die Werte `space` und `round` ([Firefox Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem behoben, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert wird ([Firefox Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenz zur Steuerung von {{cssxref("text-emphasis")}} wurde entfernt, so dass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Fallen wurden implementiert ([Firefox Bug 888969](https://bugzil.la/888969)).
- Die ES2015 Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search), und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split), sowie der Getter [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) wurden implementiert ([Firefox Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardisierte `flags` Argument von `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der {{jsxref("Date.parse()")}} Methode beim Parsen von zweistelligen Jahren wurde geändert, um mit dem Google Chrome-Browser kompatibler zu sein ([Firefox Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'` Zeichen in der URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktorparameter werden jetzt ignoriert ([Firefox Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin), und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) zurückgegebene Wert für URL mit dem `blob:` Schema ist nicht mehr fälschlicherweise `null`, sondern stattdessen der Ursprung der URL, gebildet durch das Entfernen des führenden `blob:` ([Firefox Bug 1270451](https://bugzil.la/1270451)).
- Im Vorbereitungsmodus gibt die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) Eigenschaft jetzt `'prerender'` zurück ([Firefox Bug 1069772](https://bugzil.la/1069772)).
- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox Bug 911477](https://bugzil.la/911477)).
- Die `TouchList.identifiedTouch()` Methode wurde entfernt ([Firefox Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist die `scrollbars` [`Window`](/de/docs/Web/API/Window) Funktion aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit wurde zwar dringend empfohlen, diese zu aktivieren, es war jedoch nicht standardmäßig so eingestellt ([Firefox Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht standardisierte_ [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) Methode wurde hinzugefügt, die es ermöglicht, Bild für Bild durch Videoinhalte zu navigieren ([Firefox Bug 1235301](https://bugzil.la/1235301)). Während Sie ermutigt werden, mit dieser Methode zu experimentieren, um uns zu helfen, wie nützlich sie ist, _verwenden Sie sie nicht im Produktivcode!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft gibt jetzt das Formular zurück, mit dem das Steuerelement des Labels verbunden ist, falls es ein Steuerelement gibt (und falls dieses Steuerelement mit einem Formular verbunden ist). Zuvor waren Labels über diese Eigenschaft direkt mit Formularen verbunden ([Firefox Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wurde hinzugefügt, entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions` ([Firefox Bug 1266164](https://bugzil.la/1266164) und [Firefox Bug 1266066](https://bugzil.la/1266066)).
- Die audio-volumenbezogenen Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"`, und `"VolumeMute"` ist jetzt `"AudioVolumeMute".` Dies bringt Firefox in Übereinstimmung mit dem neuesten Entwurf der UI-Events-Spezifikation ([Firefox Bug 1272578](https://bugzil.la/1272578)). Siehe [Code values for keyboard events](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tasten, die bisher als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben nun offiziell Namen in der UI-Events-Spezifikation: `"GoHome"`, `"CameraFocus"`, und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox Bug 1272599](https://bugzil.la/1272599)). Siehe [Code values for keyboard events](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tastenwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und ungenutzt waren ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Die Schlüsselwerte und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese veralteten Modifikatortasten darzustellen ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Zwei Schlüsselwerte für Multimedia-Zifferntasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Schlüsselwerte wurden für Audiosteuerungstasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, und `"AudioTrebleUp"` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Schlüsselwerte wurden für folgende Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp`, und `MicrophoneVolumeMute` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Spracherkennungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode`, und `VoiceDial` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungsschlüsselwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, und `DVR` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Der Schlüsselwert `MediaSelect` wurde durch den Standard `LaunchMediaPlayer` Schlüsselwert ersetzt ([Firefox Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Mediaplayer-Schlüsselwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, und `NavigatePrevious` ([Firefox Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) Eigenschaft, die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist nun standardmäßig aktiviert und muss nicht mehr mittels einer Voreinstellung aktiviert werden ([Firefox Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) Erweiterung wurde implementiert ([Firefox Bug 1129332](https://bugzil.la/1129332)).
- Das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event) Ereignis, das gesendet wird, wenn ein WebGL-Kontext-Erstellungsversuch fehlschlägt, wurde implementiert ([Firefox Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgelaufen ist, sowohl zum Debuggen als auch zur Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) Eigenschaft ist nicht länger schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).
- Sie können jetzt auch [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) Eigenschaft ist nicht länger schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).

#### Service Workers und verwandte

- Das [`Response`](/de/docs/Web/API/Response) Objekt der [Fetch API](/de/docs/Web/API/Fetch_API) implementiert jetzt die [`redirected`](/de/docs/Web/API/Response/redirected) Eigenschaft, die angibt, ob die Antwort für eine umgeleitete Anfrage ist. Bitte überprüfen Sie die sicherheitsrelevanten Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den 'push' `PermissionDescriptor` Wörterbuchtyp (im Standard als `PushPermissionDescriptor` bezeichnet) nicht mehr; Dies liegt daran, dass Firefox vielmehr ein Quotasystem zur Steuerung des `userVisibleOnly`-Status verwendet und einen Fehler geworfen hat, wenn es auf eine `PushPermissionDescriptor` Instanz gestoßen ist ([Firefox Bug 1266821](https://bugzil.la/1266821)). Mit dem Entfernen dieses Wörterbuchs ignoriert Firefox dieses nun.

#### Mediastreams

- In der Vergangenheit war es möglich, dass eine Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich war, auch wenn der Benutzer nur eine der beiden Hardwaretypen hat. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfragt, erfolgreich war, auch wenn der Benutzer nur auf eines der Geräte, aber nicht beide, Zugriff gewährt hat. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)). Dies beinhaltet auch geringfügige Benutzeroberflächenänderungen, um die Optionen "Kein Audio" oder "Kein Video" bei der Berechtigungsabfrage des Benutzers zu entfernen.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um Tracks zuzulassen, die keine Komponenten der angegebenen Streams sind, um der Verbindung hinzugefügt zu werden. Stattdessen werden die Streams verwendet, um Tracks auf der Empfängerseite der Verbindung zu gruppieren ([Firefox Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig in Nightly aktiviert. Sie ist in anderen Versionen von Firefox 49 nicht standardmäßig verfügbar ([Firefox Bug 1271487](https://bugzil.la/1271487)).

#### Andere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Präferenz `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox Bug 669259](https://bugzil.la/669259)).
- Die nur in Firefox OS verfügbare Data Store API wurde entfernt ([Firefox Bug 1261009](https://bugzil.la/1261009)).
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Ereignishandler `Document.onfullscreenchange` und `Document.onfullscreenerror` wurden aus [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die mit einem Präfix versehenen Versionen dieser Ereignishandler wurden jedoch zur Kompatibilitätszwecken beibehalten ([Firefox Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der `full-screen-api.unprefix.enabled` Präferenz ([Firefox Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete `Document.mozFullScreen` Eigenschaft wurde ohne Präfix als [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) [Firefox Bug 1269157](https://bugzil.la/1269157) unbenannt. Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der `full-screen-api.unprefix.enabled` Präferenz ([Firefox Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, wenn versucht wird, ihre Werte zu ändern; Stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist ein No-Op ([Firefox Bug 1269798](https://bugzil.la/1269798)).
- Mit `DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) können nun alle Arten von Daten aus der Zwischenablage abgerufen werden: zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation vollständig neu geschrieben wurde ([Firefox Bug 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) Eigenschaft jetzt ein `PositionAlign` Enum zurück anstelle eines `Align` Enums ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der sprachsynthese Teil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist nun standardmäßig in Nightly verfügbar (jedoch nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) Ereignishandler werden nun für [Web Manifests](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox Bug 1265279](https://bugzil.la/1265279)).
- Bei der Verwendung der [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) Methode der [Web Audio API](/de/docs/Web/API/Web_Audio_API) kann nun festgelegt werden, ob die resultierende periodische Welle normalisiert werden soll, indem ein Wörterbuchobjekt als dritter Parameter übergeben wird, das einen einzigen Parameter enthält — `{disableNormalization: true}` ([Firefox Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting` Enum gemäß der Spezifikation zurück; zuvor wurde ein `AlignSetting` Enum zurückgegeben ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsyntheseteil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert nun eine null-Zeitleiste ([Firefox Bug 1096776](https://bugzil.la/1096776)).
- Die [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderungen._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente entfernt ([Firefox Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderungen._

### Plugins und Flash

Beginnend mit Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die nicht erforderlich sind, damit Websites gut funktionieren. Dieses Verhalten, das durch die Präferenz `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, trägt dazu bei, die Leistung von Websites und Firefox im Allgemeinen zu verbessern, ohne erhebliche Auswirkungen auf die Benutzerfreundlichkeit von Websites zu haben. Es trägt auch zur Stabilität des Surf-Erlebnisses bei, indem es eine Hauptursache für Abstürze eliminiert. Die gesperrten Flash-Module umfassen mehrere, die nur zum Fingerabdruckzwecken verwendet werden, sowie eine Reihe von "Supercookie"-Modulen und könnten in Zukunft erweitert werden, um mehr Arten von gesperrten Modulen zu umfassen. Siehe [Firefox Bug 1275591](https://bugzil.la/1275591) für Details.

Dies markiert den nächsten Schritt auf dem Weg zu einer pluginfreien Zukunft. HTML ist sehr nahe an dem Punkt, an dem Plugins nicht mehr benötigt werden, um die Aufgabe zu erledigen.

## HTTP

- Der [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Direktive wurde implementiert ([Firefox Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blog Post](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Die {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox Bug 1265318](https://bugzil.la/1265318)).

## Netzwerk

- Die [Proxy Auto-Configuration (PAC)](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) Implementierung wurde aktualisiert. Nun unterstützen `weekdayRange`, `dateRange` und `timeRange` "umgekehrte Bereiche", beispielsweise wird `weekdayRange("SAT", "MON")` als `true` ausgewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft, die angibt, ob ein Kontext in der Lage ist, Funktionen zu nutzen, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit vorhandenen Inhalten zu verbessern, akzeptiert Firefox nun einige WebKit-präfixierte Eigenschaften und Attribute.

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

- Die folgenden Eigenschaften werden auf die entsprechenden Eigenschaften mit Präfix gemappt:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:

  - Die folgenden Funktionen werden auf ihre unpräfixierten Entsprechungen abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in einen regulären Verlauf übersetzt).

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und werden nicht auf eine nicht präfixierte Entsprechung gemappt):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix` Schnittstelle ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).
- Die folgenden Medieneigenschaften wurden implementiert:

  - `-webkit-min-device-pixel-ratio` als ein Alias von [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit dem gleichen Wert (in `dppx)`, obwohl diese Funktion standardmäßig [deaktiviert](https://bugzil.la/1237720) ist (hinter der about:config Präferenz `layout.css.prefixes.device-pixel-ratio-webkit`).
  - `-webkit-max-device-pixel-ratio` als ein Alias von [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit dem gleichen Wert (in `dppx`); auch diese Funktion ist standardmäßig deaktiviert, hinter der gleichen about:config Präferenz.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d), immer passend, zeigt Unterstützung für 3D-Transformationen an.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für das {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies ermöglicht den Zugriff auf den Browser-Verlauf, mit Methoden zum Durchsuchen des Verlaufs, zum Abrufen von Informationen über zuvor besuchte Seiten und zum Hinzufügen und Entfernen von Verlaufs-Einträgen.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde zur Tabs-API hinzugefügt. Diese Methode erlaubt es, CSS zu entfernen, das zuvor durch den Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, der nur in Code aktiv ist, der in XBL oder in Firefox's Chrome läuft, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox Bug 1274520](https://bugzil.la/1274520))

### Andere

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
