---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet die wesentlichen Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Entwickler von Firefox und Gecko sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- In die Konsole protokollierte JavaScript-Fehler bieten jetzt einen \[Learn more\] Link zur zusätzlichen Hilfe bei der Fehlersuche ([Firefox Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: Zeigt mehr Vorschläge im Autovervollständigungspopup an ([Firefox Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor zeigt jetzt [Animationsleistungsinformationen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den Entwickler-Tools an ([Firefox Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspectors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde umorganisiert, um es sauberer und benutzerfreundlicher zu gestalten ([Firefox Bug 1211613](https://bugzil.la/1211613)).
- Der Inspector unterstützt jetzt die Syntax `#RRGGBBAA` und `#RGBA` für Farbwerte ([Firefox Bug 1271191](https://bugzil.la/1271191)).
- Die Entwickler-Tools zeigen auf HTML-Seiten keine selbstschließenden Tags (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}), die ein schließendes Tag haben, mehr an; das Verhalten bleibt für XHTML-Seiten unverändert ([Firefox Bug 820926](https://bugzil.la/820926)).
- Verbesserungen der Barrierefreiheit!

  - Der Werkzeugkasten sorgt dafür, dass die Tastaturfokussierung besser sichtbar ist ([Firefox Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitsetiketten wurden zu nicht beschrifteten Steuerelementen hinzugefügt ([Firefox Bug 1242715](https://bugzil.la/1242715)).
  - Dem Markup-View des Inspectors wurden richtige Baumansichtssemantiken und Tastaturnavigation hinzugefügt ([Firefox Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Ursache-Spalte, die angibt, wodurch jede einzelne Netzwerk-Anfrage verursacht wurde ([Firefox Bug 1134073](https://bugzil.la/1134073)).
- Auf der Seite _about:debugging_ Add-ons ist die Schaltfläche Laden nur für temporäre Add-ons verfügbar. Sie wird für alle anderen Add-ons deaktiviert ([Firefox Bug 1273184](https://bugzil.la/1273184)).
- Auf der Seite _about:debugging_ Workers wird im Abschnitt Service-Arbeiter eine Warnmeldung angezeigt, wenn [Service-Arbeiter mit der aktuellen Browserkonfiguration nicht kompatibel](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) sind ([Firefox Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Seite mit Tabs](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debuggbaren Tabs in der aktuellen Firefox-Instanz bereitstellt ([Firefox Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Disable Cache_ in den [Toolbox Advanced settings](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in Disable HTTP Cache umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache-API](/de/docs/Web/API/Cache) (Bug 1253018).
- Mit dem [Storage Inspector können IndexedDB-Datenbanken jetzt über ihre eigenen Kontextmenüs gelöscht](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) werden ([Firefox Bug 1205123](https://bugzil.la/1205123)), und es werden Warnmeldungen angezeigt, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (zum Beispiel, wenn noch aktive Verbindungen bestehen) ([Firefox Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}}- und {{HTMLElement("summary")}}-Elemente hinzugefügt ([Firefox Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut des {{HTMLElement("input")}}-Elements verwendet jetzt den `'u'` Parameter in der zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox Bug 1227906](https://bugzil.la/1227906)).
- Um einer Spezifikationsänderung zu entsprechen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) Attributs des {{HTMLElement("track")}}-Elements jetzt wie `"metadata"` anstelle von `"subtitles"` behandelt ([Firefox Bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut des {{HTMLElement("iframe")}}-Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata-API wurden entfernt ([Firefox Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attribut des {{HTMLElement("a")}}-Elements unterstützt jetzt die Werte `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox Bug 1178337](https://bugzil.la/1178337)).
- Das [`form`](/de/docs/Web/HTML/Reference/Elements/label#form) Inhaltselement des {{HTMLElement("label")}}-Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft existiert weiterhin, gibt aber nun das Formular zurück, mit dem das Kontrollkästchen des Labels verknüpft ist, sofern ein solches Kontrollkästchen existiert (und wenn dieses Kontrollkästchen mit einem Formular verknüpft ist) ([Firefox Bug 1268852](https://bugzil.la/1268852)).

### CSS

- {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} hinzugefügt, die es ermöglichen, die horizontalen und vertikalen Versatzwerte, an denen ein Hintergrundbild gezeichnet werden soll, separat anzugeben; diese sind Bestandteile von {{cssxref("background-position")}} ([Firefox Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die Keywords `round` und `space` bei {{cssxref("background-repeat")}} hinzugefügt ([Firefox Bug 548372](https://bugzil.la/548372)).
- Bei {{cssxref("background-clip")}} ist das Schlüsselwort `text` jetzt standardmäßig aktiviert ([Firefox Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Farbangabe mit einem Alphakanal unter Verwendung von 4- und 8-stelligen CSS-Hex-[Farbwerten](/de/docs/Web/CSS/color_value) hinzugefügt (#RRGGBBAA und #RGBA) ([Firefox Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde unprefixiert ([Firefox Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}}, können nun Interpolationen zwischen {{cssxref("&lt;basic-shape&gt;")}} Werten durchgeführt werden ([Firefox Bug 1110460](https://bugzil.la/1110460)).
- Die [`q` Längeneinheit](/de/docs/Web/CSS/length#q) hinzugefügt ([Firefox Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde unprefixiert ([Firefox Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, das `word-wrap` ersetzt, das weiterhin als alternativer Name unterstützt wird ([Firefox Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS-Grids](/de/docs/Web/CSS/CSS_grid_layout)-Implementierung wurde verbessert:

  - {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` implementiert ([Firefox Bug 1266268](https://bugzil.la/1266268)).
  - Unterstützung für Grid-Layout für {{cssxref("align")}}, {{cssxref("justify-self")}}`:baseline` and `last-baseline` (auch bekannt als "Baseline-Selbstausrichtung") implementiert ([Firefox Bug 1221525](https://bugzil.la/1221525)).
  - Baseline-Inhaltsausrichtung von Grid-Items implementiert ([Firefox Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS-Masks](/de/docs/Web/CSS/CSS_masking)-Implementierung wurde verbessert:

  - Die {{cssxref("mask-origin")}} Eigenschaft verwendet jetzt `border-box` statt `padding-box` als Anfangswert, um die Spezifikation zu erfüllen ([Firefox Bug 1258286](https://bugzil.la/1258286)).
  - Die {{cssxref("mask-repeat")}} Eigenschaft unterstützt jetzt die Werte `space` und `round` ([Firefox Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem wurde behoben, das verhinderte, dass das {{cssxref("mask-position")}} Attribut animiert wird ([Firefox Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenzsteuerung für {{cssxref("text-emphasis")}} wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Traps wurden implementiert ([Firefox Bug 888969](https://bugzil.la/888969)).
- Die ES2015 Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search), und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split), sowie der [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) Getter wurden implementiert ([Firefox Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardisierte `flags` Argument von `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der {{jsxref("Date.parse()")}} Methode beim Parsen von zweistelligen Jahreszahlen wurde geändert, um besser mit dem Google Chrome-Browser interoperabel zu sein ([Firefox Bug 1265136](https://bugzil.la/1265136)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'` Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktors ignoriert ([Firefox Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) für URLs mit dem `blob:` Schema zurückgegebene Wert ist nicht mehr fälschlicherweise `null`, sondern stattdessen der Ursprung der URL gebildet, indem das führende `blob:` entfernt wird ([Firefox Bug 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) Eigenschaft jetzt `'prerender'` zurück ([Firefox Bug 1069772](https://bugzil.la/1069772)).
- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox Bug 911477](https://bugzil.la/911477)).
- Die `TouchList.identifiedTouch()` Methode wurde entfernt ([Firefox Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist das `scrollbars` [`Window`](/de/docs/Web/API/Window) Feature aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit war es zwar stark empfohlen, es zu aktivieren, aber es war nicht standardmäßig gesetzt ([Firefox Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht-standardisierte_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame), die es ermöglicht, das Video Bild für Bild zu durchsuchen, wurde hinzugefügt ([Firefox Bug 1235301](https://bugzil.la/1235301)). Obwohl Sie ermutigt werden, mit dieser Methode zu experimentieren, um uns zu helfen, zu verstehen, wie nützlich sie ist, _verwenden Sie sie nicht in Produktionscode!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft gibt nun das Formular zurück, mit dem das Kontrollkästchen des Labels verbunden ist, falls ein solches Kontrollkästchen existiert (und wenn dieses Kontrollkästchen mit einem Formular verbunden ist). Zuvor waren Labels über diese Eigenschaft direkt mit Formularen verbunden ([Firefox Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder einen {{jsxref("Boolean")}} oder eine `EventListenerOptions`, wurde hinzugefügt ([Firefox Bug 1266164](https://bugzil.la/1266164) und [Firefox Bug 1266066](https://bugzil.la/1266066)).
- Die Lautstärkebezogenen Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"` und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Übereinstimmung mit dem neuesten Entwurf der UI Events Spezifikation ([Firefox Bug 1272578](https://bugzil.la/1272578)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tasten, die zuvor als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI Events-Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox Bug 1272599](https://bugzil.la/1272599)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tastenwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und unbenutzt waren ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Tastenwerte und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifizierertasten darzustellen ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Zwei Tastenwerte für Multimedia-Numpad-Tasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastenwerte wurden für Audiokontrolltasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, und `"AudioTrebleUp"` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Tastenwerte wurden für diese Mikrofonkontrolltasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp` und `MicrophoneVolumeMute` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Neue Tastenwerte wurden hinzugefügt, um Spracherkennungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode` und `VoiceDial` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungstastenwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, und `DVR` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Der Tastenwert `MediaSelect` wurde durch den Standardtastenwert `LaunchMediaPlayer` ersetzt ([Firefox Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Tastenwerte für Mediaplayer wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, und `NavigatePrevious` ([Firefox Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) Eigenschaft, die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Voreinstellung aktiviert werden ([Firefox Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) Erweiterung wurde implementiert ([Firefox Bug 1129332](https://bugzil.la/1129332)).
- Das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event) Ereignis, das gesendet wird, wenn ein Versuch, einen WebGL-Kontext zu erstellen, fehlschlägt, wurde implementiert ([Firefox Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgegangen ist, sowohl zur Fehlersuche als auch zur Produktionsfehlerbehandlung.

#### IndexedDB

- Es ist jetzt möglich, IndexedDB-Indizes umzubenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).
- Sie können jetzt auch [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).

#### Service Workers und verwandte

- Das [`redirected`](/de/docs/Web/API/Response/redirected) Attribut des [Fetch API](/de/docs/Web/API/Fetch_API) [`Response`](/de/docs/Web/API/Response) Objekts, das anzeigt, ob die Antwort für eine umgeleitete Anfrage ist, wurde jetzt implementiert. Bitte beachten Sie die sicherheitsrelevanten Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den 'push' `PermissionDescriptor` Wörterbuchtyp (in der Spezifikation als `PushPermissionDescriptor` bezeichnet) nicht mehr; dies liegt daran, dass Firefox stattdessen auf ein Kontingentsystem zur Steuerung der `userVisibleOnly`-Einstellung setzt und einen Fehler auslöste, wenn es auf eine `PushPermissionDescriptor`-Instanz stieß ([Firefox Bug 1266821](https://bugzil.la/1266821)). Mit diesem entfernten Wörterbuch ignoriert Firefox es jetzt.

#### Media Streams

- In der Vergangenheit war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, auch dann erfolgreich war, wenn der Benutzer nur eine der beiden Hardwarearten verfügbar hatte. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, auch dann erfolgreich war, wenn der Benutzer nur für eine der passenden Geräte Zugang gewährt, aber nicht für beide. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)). Dies umfasst auch kleinere Benutzeroberflächenänderungen, um die Optionen zum Auswählen von "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer nach Berechtigungen gefragt wird.
- Die [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) Methode wurde implementiert ([Firefox Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) Methode wurde aktualisiert, um es zu ermöglichen, dass Tracks, die nicht Teil der angegebenen Streams sind, zur Verbindung hinzugefügt werden können. Stattdessen werden die Streams verwendet, um Tracks am empfangenden Ende der Verbindung zu gruppieren ([Firefox Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig in Nightly aktiviert. In anderen Versionen von Firefox 49 ist sie standardmäßig nicht verfügbar ([Firefox Bug 1271487](https://bugzil.la/1271487)).

#### Andere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, wenn die Einstellung `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox Bug 669259](https://bugzil.la/669259)).
- Die Firefox OS-Only Data Store API wurde entfernt ([Firefox Bug 1261009](https://bugzil.la/1261009)).
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Ereignishandler `Document.onfullscreenchange` und `Document.onfullscreenerror` wurden von [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die angegebenen Versionen dieser Ereignishandler wurden jedoch dort aus Kompatibilitätsgründen beibehalten ([Firefox Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` ([Firefox Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete `Document.mozFullScreen` Eigenschaft wurde auf [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) ([Firefox Bug 1269157](https://bugzil.la/1269157)) unprefixiert. Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` ([Firefox Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützte Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist ein No-Op ([Firefox Bug 1269798](https://bugzil.la/1269798)).
- Jede Art von Daten kann jetzt aus der Zwischenablage mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abgerufen werden: vorher wurden nur Daten bestimmter MIME-Typen unterstützt ([Firefox Bug 860857](https://bugzil.la/860857)).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation komplett neu geschrieben wurde ([Firefox Bug 1271846](https://bugzil.la/1271846)).
- Um die Spezifikation zu erfüllen, gibt die [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) Eigenschaft jetzt ein `PositionAlign` Enum anstelle eines `Align` Enum zurück ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der sprachsyntheseteil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist jetzt standardmäßig in Nightly verfügbar (wenn auch nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) Ereignishandler werden nun für [Web Manifests](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox Bug 1265279](https://bugzil.la/1265279)).
- Wenn Sie die [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) Methode der [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwenden, können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Wörterbuchobjekt als dritten Parameter einfügen, das einen einzigen Parameter enthält — `{disableNormalization: true}` ([Firefox Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting` Enum gemäß Spezifikation zurück; zuvor wurde ein `AlignSetting` Enum zurückgegeben ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsyntheseteil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null-Timeline ([Firefox Bug 1096776](https://bugzil.la/1096776)).
- Die [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente wurde entfernt ([Firefox Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für das ordnungsgemäße Funktionieren von Websites nicht erforderlich sind. Dieses Verhalten, das durch die Voreinstellung `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, hilft, die Leistung von Websites und Firefox im Allgemeinen zu verbessern, ohne einen wesentlichen Einfluss auf die Benutzerfreundlichkeit von Websites zu haben. Es trägt auch zur Stabilität des Surferlebnisses bei, indem eine Hauptursache für Abstürze beseitigt wird. Die blockierten Flash-Module umfassen mehrere, die nur zu Fingerabdruckzwecken verwendet werden, sowie eine Anzahl von "Supercookie"-Modulen, und in Zukunft kann das Spektrum der blockierten Module erweitert werden. Weitere Informationen finden Sie unter [Firefox Bug 1275591](https://bugzil.la/1275591).

Dies markiert den nächsten Schritt auf dem Weg zu einer zukunft ohne Plugins. HTML ist dem Punkt, an dem Plugins nicht mehr benötigt werden, sehr nahe.

## HTTP

- Das [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Direktive wurde implementiert ([Firefox Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogartikel](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Das {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox Bug 1265318](https://bugzil.la/1265318)).

## Networking

- Die [Proxy Auto-Configuration (PAC)](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) Implementierung wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange` und `timeRange` "umgekehrte Bereiche", zum Beispiel wird `weekdayRange("SAT", "MON")` als `wahr` ausgewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft, die angibt, ob ein Kontext in der Lage ist, Funktionen zu verwenden, die [sichere Kontexte erfordern](/de/docs/Web/Security/Secure_Contexts), wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit bestehenden Inhalten zu verbessern, akzeptiert Firefox jetzt einige WebKit-präfixierte Eigenschaften und Attribute.

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

- Die folgenden Eigenschaften werden auf die entsprechende präfixierte Eigenschaft abgebildet:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:

  - Die folgenden Funktionen werden auf ihre unprefixierten Gegenstücke abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in ein reguläres Gradienten übersetzt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und nicht auf ein unprefixiertes Gegenstück abgebildet):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die Schnittstelle `WebKitCSSMatrix` ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Medienabfrage-Funktionen wurden implementiert:

  - `-webkit-min-device-pixel-ratio` als Alias von [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx)`, obwohl diese Funktion [standardmäßig deaktiviert](https://bugzil.la/1237720) ist (hinter about:config-pref `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als Alias von [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx`); diese Funktion ist ebenfalls standardmäßig deaktiviert, hinter demselben about:config-pref.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d) immer übereinstimmend, um anzugeben, dass 3D-Transformations-Unterstützung vorhanden ist.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf, mit Methoden zum Suchen im Verlauf, zum Abrufen von Informationen über zuvor besuchte Seiten sowie zum Hinzufügen und Entfernen von Verlaufs-Einträgen.
- Der {{WebExtAPIRef("tabs.removeCSS()")}} Methode zur Tabs-API hinzugefügt. Diese Methode ermöglicht es Ihnen, CSS zu entfernen, das zuvor durch Aufrufen von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), ist der Wert `mozSystemGroup`, der nur in im XBL oder im Firefox-Chrome ausgeführtem Code aktiv ist, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox Bug 1274520](https://bugzil.la/1274520))

### Andere

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
