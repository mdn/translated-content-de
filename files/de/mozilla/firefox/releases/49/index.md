---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

[Um die neuesten Funktionen für Entwickler von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Entwickler von Firefox und Gecko sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklertools

- In die Konsole geloggte JavaScript-Fehler bieten [jetzt einen \[Learn more\] Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debugging-Hilfe ([Firefox-Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: Zeigt mehr Vorschläge im Autovervollständigungs-Popup an ([Firefox-Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor [zeigt jetzt Leistungsinformationen für Animationen an](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den DevTools ([Firefox-Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um es sauberer und einfacher zu benutzen ([Firefox-Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die `#RRGGBBAA` und `#RGBA` Syntax für Farbwerte ([Firefox-Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklertools zeigen selbstschließende Tags (wie {{HTMLElement("br")}} und {{HTMLElement("img")}} nicht mehr an, als hätten sie ein Abschlusstags auf HTML-Seiten; das Verhalten bleibt für XHTML-Seiten unverändert ([Firefox-Bug 820926](https://bugzil.la/820926)).
- Barrierefreiheit-Verbesserungen!
  - Die Toolbox sorgt besser dafür, dass der Tastaturfokus sichtbarer ist ([Firefox-Bug 1242851](https://bugzil.la/1242851)).
  - Bedienungshilfen-Etiketten wurden zu ungelabelten Bedienelementen hinzugefügt ([Firefox-Bug 1242715](https://bugzil.la/1242715)).
  - Semantik und Tastaturnavigation für die Baumansicht des Markierungsansicht des Inspektors wurden hinzugefügt ([Firefox-Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine "Ursache"-Spalte, die einen Hinweis darauf bietet, was jede bestimmte Netzwerkanforderung ausgelöst hat ([Firefox-Bug 1134073](https://bugzil.la/1134073)).
- Auf der Add-ons-Seite in _about:debugging_ ist die Schaltfläche "Neu laden" nur für temporäre Add-ons aktiviert. Sie wird für alle anderen Add-ons deaktiviert ([Firefox-Bug 1273184](https://bugzil.la/1273184)).
- Auf der _about:debugging_ Arbeiter-Seite wird eine Warnmeldung im Abschnitt Service Workers angezeigt, wenn [Service Workers mit der aktuellen Browserkonfiguration inkompatibel](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) sind ([Firefox-Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ verfügt jetzt über eine [neue Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debugbaren Tabs in der aktuellen Firefox-Instanz bereitstellt ([Firefox-Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Cache deaktivieren_ in den [erweiterten Einstellungen der Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in HTTP-Cache deaktivieren umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache-API](/de/docs/Web/API/Cache) (Bug 1253018).
- Der [Speicherinspektor erlaubt jetzt das Löschen von IndexedDB-Datenbanken](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über ihre eigenen Kontextmenüs ([Firefox-Bug 1205123](https://bugzil.la/1205123)) und zeigt Warnmeldungen an, wenn der IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (wenn zum Beispiel noch aktive Verbindungen bestehen) ([Firefox-Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente hinzugefügt ([Firefox-Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut des {{HTMLElement("input")}} Elements verwendet jetzt den `'u'` Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox-Bug 1227906](https://bugzil.la/1227906)).
- Gemäß einer Spezifikationsänderung wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) Attributs des {{HTMLElement('track')}} Elements jetzt wie `"metadata"` statt `"subtitles"` behandelt ([Firefox-Bug 1269712](https://bugzil.la/1269712)).
- Das Attribut [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) des {{HTMLElement("iframe")}} Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox-Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata-API wurde entfernt ([Firefox-Bug 909633](https://bugzil.la/909633)).
- Das Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) auf dem {{HTMLElement("a")}} Element unterstützt jetzt die Werte `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox-Bug 1178337](https://bugzil.la/1178337)).
- Das `form` Inhaltsattribut des {{HTMLElement("label")}} Elements wurde entfernt. Die Eigenschaft [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) existiert weiterhin, gibt nun aber das Formular zurück, mit dem das Steuerungselement des Labels verbunden ist, falls ein Steuerungselement existiert (und falls dieses Steuerungselement einem Formular zugeordnet ist) ([Firefox-Bug 1268852](https://bugzil.la/1268852)).

### CSS

- {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} hinzugefügt, die es ermöglichen, die horizontalen und vertikalen Versätze, an denen ein Hintergrundbild gezeichnet werden soll, separat anzugeben; diese sind Komponenten von {{cssxref("background-position")}} ([Firefox-Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die Schlüsselwörter `round` und `space` zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox-Bug 548372](https://bugzil.la/548372)).
- Bei {{cssxref("background-clip")}} ist das Schlüsselwort `text` jetzt standardmäßig aktiviert ([Firefox-Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alphakanal unter Verwendung von 4- und 8-stelligen CSS-Hexadecimalfarbwerten (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox-Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde ohne Präfix freigegeben ([Firefox-Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}} Werten interpolieren ([Firefox-Bug 1110460](https://bugzil.la/1110460)).
- Die [`q` Längeneinheit](/de/docs/Web/CSS/length#q) hinzugefügt ([Firefox-Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde ohne Präfix freigegeben ([Firefox-Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, ersetzt `word-wrap`, das weiterhin als alternativer Name unterstützt wird ([Firefox-Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle Implementierung von [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) wurde verbessert:
  - Implementiert {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox-Bug 1266268](https://bugzil.la/1266268)).
  - Implementiert Unterstützung des Grid-Layouts für die Werte `baseline` und `last-baseline` (auch bekannt als "baseline self-alignment") bei {{cssxref("align-self")}} und {{cssxref("justify-self")}} ([Firefox-Bug 1221525](https://bugzil.la/1221525)).
  - Implementiert Ausrichtung des Basislinienelements von Gitterelementen ([Firefox-Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle Implementierung von [CSS-Masken](/de/docs/Web/CSS/CSS_masking) wurde verbessert:
  - Die Eigenschaft {{cssxref("mask-origin")}} verwendet jetzt `border-box` statt `padding-box` als Anfangswert, um der Spezifikation zu entsprechen ([Firefox-Bug 1258286](https://bugzil.la/1258286)).
  - Die Eigenschaft {{cssxref("mask-repeat")}} unterstützt jetzt die Werte `space` und `round` ([Firefox-Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem, dass das Attribut {{cssxref("mask-position")}} daran hinderte, animiert zu werden, wurde behoben ([Firefox-Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenzsteuerung von {{cssxref("text-emphasis")}} wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox-Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Fallen wurden implementiert ([Firefox-Bug 888969](https://bugzil.la/888969)).
- Die ES2015 Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search), und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) sowie der Getter [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) wurden implementiert ([Firefox-Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardisierte `flags` Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox-Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der {{jsxref("Date.parse()")}} Methode beim Parsen von zweistelligen Jahren wurde angepasst, um besser mit dem Google Chrome Browser interoperabel zu sein ([Firefox-Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox-Bug 1257849](https://bugzil.la/1257849)).
- Die [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) Methode wurde hinzugefügt ([Firefox-Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'` Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktors ignoriert ([Firefox-Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin), und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) zurückgegebene Wert für URLs, die das `blob:` Schema verwenden, ist nicht mehr fälschlicherweise `null`, sondern stattdessen der Ursprung der URL, die durch Entfernen des führenden `blob:` gebildet wird ([Firefox-Bug 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die Eigenschaft [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) jetzt `'prerender'` zurück ([Firefox-Bug 1069772](https://bugzil.la/1069772)).
- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox-Bug 911477](https://bugzil.la/911477)).
- Die `TouchList.identifiedTouch()` Methode wurde entfernt ([Firefox-Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist das `scrollbars` [`Window`](/de/docs/Web/API/Window) Feature aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit war es zwar dringend empfohlen, es zu aktivieren, war aber nicht der Standardwert ([Firefox-Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht standardisierte_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde hinzugefügt, die Frame-für-Frame-Durchsicht im Videoinhalt ermöglicht ([Firefox-Bug 1235301](https://bugzil.la/1235301)). Obwohl Sie dazu ermutigt werden, mit dieser Methode zu experimentieren, um zu helfen, wie nützlich sie ist, _verwenden Sie sie nicht in Produktionscode!_
- Die Eigenschaft [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) gibt jetzt das Formular zurück, mit dem das Steuerungselement des Labels verbunden ist, falls ein Steuerungselement existiert (und falls dieses Steuerungselement einem Formular zugeordnet ist). Zuvor waren Labels direkt mit Formularen über diese Eigenschaft verbunden ([Firefox-Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions`, wurde hinzugefügt ([Firefox-Bug 1266164](https://bugzil.la/1266164) und [Firefox-Bug 1266066](https://bugzil.la/1266066)).
- Die Audiolautstärke-bezogenen Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"`, und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Einklang mit dem neuesten Entwurf der UI-Events-Spezifikation ([Firefox-Bug 1272578](https://bugzil.la/1272578)). Siehe [Code-Werte für Tastaturevents](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Key-Codes.
- Die Tasten, die zuvor als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI-Events-Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox-Bug 1272599](https://bugzil.la/1272599)). Siehe [Code-Werte für Tastaturevents](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Key-Codes.
- Die Schlüsselwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und ungenutzt waren ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Schlüsselwerte und die entsprechenden Schlüsselcodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifikatortasten darzustellen ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Zwei Schlüsselwerte für Multimediatasten des numerischen Tastenfelds wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Schlüsselwerte wurden für Audiokontrolltasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, und `"AudioTrebleUp"` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Schlüsselwerte wurden für diese Mikrofon-Steuertasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp`, und `MicrophoneVolumeMute` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Sprachsteuerungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um spezielle Tasten an Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode`, und `VoiceDial` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungsschlüsselwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Fernsehgeräten zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, und `DVR` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Der Schlüsselwert `MediaSelect` wurde durch den standardmäßigen 'LaunchMediaPlayer'-Schlüsselwert ersetzt ([Firefox-Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Mediaplayer-Schlüsselwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, und `NavigatePrevious` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die Eigenschaft [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter), die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Präferenz aktiviert werden ([Firefox-Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) Erweiterung wurde implementiert ([Firefox-Bug 1129332](https://bugzil.la/1129332)).
- Das Ereignis [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event), das gesendet wird, wenn ein WebGL-Kontext-Erstellungsversuch fehlschlägt, wurde implementiert ([Firefox-Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgegangen ist, sowohl für das Debugging als auch die Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die Eigenschaft [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).
- Sie können jetzt auch [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die Eigenschaft [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).

#### Service Workers und verwandte

- Das [Fetch-API](/de/docs/Web/API/Fetch_API)'s [`Response`](/de/docs/Web/API/Response) Objekt implementiert jetzt die Eigenschaft [`redirected`](/de/docs/Web/API/Response/redirected), die anzeigt, ob die Antwort für eine Anfrage, die umgeleitet wurde, ist. Bitte überprüfen Sie die sicherheitsbezogenen Hinweise in der Dokumentation vor der Verwendung dieser Eigenschaft ([Firefox-Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions-API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den 'push' `PermissionDescriptor` Wörterbuchtyp (in der Spezifikation als `PushPermissionDescriptor` bezeichnet) nicht mehr; dies liegt daran, dass Firefox stattdessen auf ein Quoten-System zur Kontrolle des `userVisibleOnly`-Status verlässt und einen Fehler auslöste, wenn es auf eine `PushPermissionDescriptor`-Instanz traf ([Firefox-Bug 1266821](https://bugzil.la/1266821)). Mit diesem entfernten Wörterbuch ignoriert Firefox es jetzt.

#### Medienstreams

- In der Vergangenheit war es möglich, dass ein Anruf an [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich ist, selbst wenn der Nutzer nur eine der beiden Hardwarearten verfügbar hat. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Anruf an [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich ist, auch wenn der Nutzer den Zugriff auf eines, aber nicht beide der passenden Geräte verweigerte. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)). Dies betrifft auch kleine Änderungen der Benutzeroberfläche, um die Optionen "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer um Berechtigungen gefragt wird.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox-Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um die Hinzufügung von Tracks zu erlauben, die keine Komponenten der angegebenen Streams sind, die Verbindung hinzugefügt. Stattdessen werden die Streams verwendet, um Tracks am Empfangsende der Verbindung zu gruppieren ([Firefox-Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig in Nightly aktiviert. Sie ist standardmäßig in anderen Versionen von Firefox 49 nicht verfügbar ([Firefox-Bug 1271487](https://bugzil.la/1271487)).

#### Andere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Präferenz `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox-Bug 669259](https://bugzil.la/669259)).
- Die ausschließlich für Firefox OS bestehende Data Store API wurde entfernt ([Firefox-Bug 1261009](https://bugzil.la/1261009)).
- Die Ereignishandler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) wurden von [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die mit Präfix versehenen Versionen dieser Ereignishandler wurden aus Kompatibilitätsgründen jedoch beibehalten ([Firefox-Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` versteckt ist ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete Eigenschaft `Document.mozFullScreen` wurde ohne Präfix zu [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) umbenannt [Firefox-Bug 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` versteckt ist ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) lösen keine Ausnahme mehr aus, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist eine No-Op ([Firefox-Bug 1269798](https://bugzil.la/1269798)).
- Jede Art von Daten kann jetzt von der Zwischenablage mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abgerufen werden: Zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox-Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, die aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming` bestand, wurde entfernt, da die Spezifikation vollständig neu geschrieben wurde ([Firefox-Bug 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die Eigenschaft [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt ein `PositionAlign` enum zurück, anstatt eines `Align` enums ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsynthese-Teil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_API) ist jetzt standardmäßig in Nightly verfügbar (jedoch nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis und der Ereignishandler [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) werden jetzt für [Web-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox-Bug 1265279](https://bugzil.la/1265279)).
- Beim Verwenden der [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) Methode der [Web Audio API](/de/docs/Web/API/Web_Audio_API), können Sie jetzt spezifizieren, ob die resultierende periodische Welle normalisiert werden soll, indem ein Wörterbuchobjekt als dritter Parameter eingeschlossen wird, das einen einzigen Parameter enthält — `{disableNormalization: true}` ([Firefox-Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT-API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting`-Enum zurück, wie in der Spezifikation beschrieben; vorher gab sie ein `AlignSetting`-Enum zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsyntheseteil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine Null-Zeitleiste ([Firefox-Bug 1096776](https://bugzil.la/1096776)).
- Die [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox-Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente entfernt ([Firefox-Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die nicht zwingend erforderlich sind, damit Seiten gut funktionieren. Dieses Verhalten, das durch die Präferenz `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, trägt zur Verbesserung der Leistung von Websites und Firefox im Allgemeinen bei, ohne dass die Benutzerfreundlichkeit von Websites erheblich beeinträchtigt wird. Es trägt auch zur Stabilitätsverbesserung des Surferlebnisses bei, indem eine Hauptursache für Abstürze beseitigt wird. Die blockierten Flash-Module umfassen mehrere, die nur für Fingerprinting-Zwecke verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in Zukunft kann die Liste der blockierten Module erweitert werden. Siehe [Firefox-Bug 1275591](https://bugzil.la/1275591) für Details.

Dies markiert den nächsten Schritt auf dem Weg zu einer pluginfreien Zukunft. HTML ist sehr nah am Punkt, an dem Plugins nicht mehr benötigt werden, um Aufgaben zu erledigen.

## HTTP

- Die [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Direktive wurde implementiert ([Firefox-Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogbeitrag](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Der `require-sri-for` {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox-Bug 1265318](https://bugzil.la/1265318)).

## Netzwerk

- Die Implementierung der [Proxy-Auto-Konfiguration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange`, und `timeRange` "umgekehrte Bereiche", zum Beispiel wird `weekdayRange("SAT", "MON")` als `true` bewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox-Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext), welche anzeigt, ob ein Kontext in der Lage ist, Funktionen zu verwenden, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit vorhandenen Inhalten zu verbessern, akzeptiert Firefox jetzt einige mit WebKit präfixierte Eigenschaften und Attribute.

- Die folgenden Eigenschaften funktionieren jetzt auch mit `-webkit` Präfix:
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

- Die folgenden Eigenschaften werden auf die äquivalente mit Präfix versehene Eigenschaft abgebildet:
  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:
  - Die folgenden Funktionen werden auf ihre nicht präfixierten Äquivalente abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in einen normalen Gradienten übersetzt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:
  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und nicht auf ein unpräfixiertes Äquivalent abgebildet):
  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix` Schnittstelle ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Media-Query-Features wurden implementiert:
  - `-webkit-min-device-pixel-ratio` als ein Alias von [`min-resolution`](/de/docs/Web/CSS/@media/resolution) mit dem gleichen Wert (in `dppx)`, obwohl dieses Feature [standardmäßig deaktiviert ist](https://bugzil.la/1237720) (hinter der "about:config"-Präferenz `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als ein Alias von [`max-resolution`](/de/docs/Web/CSS/@media/resolution) mit demselben Wert (in `dppx`); dieses Feature ist ebenfalls standardmäßig deaktiviert, hinter derselben "about:config"-Präferenz.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d), das immer übereinstimmt, was auf 3D-Transformationsunterstützung hinweist.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für das {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf, mit Methoden verfügbar für die Durchsuchung des Verlaufs, das Abrufen von Informationen über vorher besuchte Seiten und das Hinzufügen und Entfernen von Verlaufseinträgen.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} zur Tabs-API hinzugefügt. Diese Methode erlaubt es, zuvor durch Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} injiziertes CSS zu entfernen.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, der nur im Code läuft, der in XBL oder in Chrome von Firefox ausgeführt wird, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox-Bug 1274520](https://bugzil.la/1274520))

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
