---
title: Firefox 49 für Entwickler
short-title: Firefox 49
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

- In der Konsole protokollierte JavaScript-Fehler bieten jetzt einen [\[Mehr erfahren\]](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) Link für zusätzliche Debugging-Hilfe ([Firefox-Bug 1179876](https://bugzil.la/1179876)).
- CSS Autovervollständigung: Mehr Vorschläge im Autovervollständigungs-Popup anzeigen ([Firefox-Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor zeigt nun [Informationen zur Animationsleistung](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den Entwicklertools an ([Firefox-Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um es übersichtlicher und benutzerfreundlicher zu gestalten ([Firefox-Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die `#RRGGBBAA` und `#RGBA` Syntax für Farbwerte ([Firefox-Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklertools zeigen keine selbstschließenden Tags (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}) mehr als ob sie einen Schlusstag auf HTML-Seiten hätten; das Verhalten auf XHTML-Seiten bleibt unverändert ([Firefox-Bug 820926](https://bugzil.la/820926)).
- Verbesserungen bei der Barrierefreiheit!
  - Die Werkzeugleiste stellt besser sicher, dass die Tastaturfokussierung sichtbarer ist ([Firefox-Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheits-Labels wurden zu nicht markierten Steuerelementen hinzugefügt ([Firefox-Bug 1242715](https://bugzil.la/1242715)).
  - Richtige Baumansichtssemantik und Tastaturnavigation wurden zur Markup-Ansicht des Inspektors hinzugefügt ([Firefox-Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Ursache-Spalte, die angibt, was jede bestimmte Netzwerkanfrage verursacht hat ([Firefox-Bug 1134073](https://bugzil.la/1134073)).
- Auf der _about:debugging_ Add-Ons-Seite ist die Schaltfläche Neu laden nur für temporäre Add-Ons aktiviert. Für alle anderen Add-Ons wird sie deaktiviert ([Firefox-Bug 1273184](https://bugzil.la/1273184)).
- Auf der _about:debugging_ Workers-Seite wird im Abschnitt Service Workers eine Warnmeldung angezeigt, wenn [Service Workers mit der aktuellen Browserkonfiguration nicht kompatibel sind](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) ([Firefox-Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ bietet jetzt eine [neue Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debuggbaren Tabs in der aktuellen Firefox-Instanz bereitstellt ([Firefox-Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Cache deaktivieren_ in den [Erweiterten Einstellungen der Werkzeugleiste](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in HTTP-Cache deaktivieren umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) ([Bug 1253018]).
- Der [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) ermöglicht nun das Löschen von IndexedDB-Datenbanken über ihre eigenen Kontextmenüs ([Firefox-Bug 1205123](https://bugzil.la/1205123)) und zeigt Warnmeldungen an, falls die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (zum Beispiel, wenn noch aktive Verbindungen bestehen) ([Firefox-Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente hinzugefügt ([Firefox-Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut des {{HTMLElement("input")}} Elements verwendet jetzt das `'u'`-Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox-Bug 1227906](https://bugzil.la/1227906)).
- Um einer Spezifikationsänderung zu entsprechen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind) Attributs des {{HTMLElement('track')}} Elements jetzt wie `"metadata"` behandelt anstelle von `"subtitles"` ([Firefox-Bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut des {{HTMLElement("iframe")}} Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox-Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata-API wurden entfernt ([Firefox-Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) Attribut des {{HTMLElement("a")}} Elements unterstützt jetzt die Werte `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox-Bug 1178337](https://bugzil.la/1178337)).
- Das `form`-Inhaltsattribut des {{HTMLElement("label")}} Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft existiert immer noch, gibt jedoch jetzt das Formular zurück, mit dem das Steuerelement des Labels assoziiert ist, sofern ein solches Steuerelement existiert (und wenn dieses Steuerelement mit einem Formular verbunden ist) ([Firefox-Bug 1268852](https://bugzil.la/1268852)).

### CSS

- Unterstützung für {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} hinzugefügt, die es ermöglichen, die horizontalen und vertikalen Offsets, an denen ein Hintergrundbild gezeichnet wird, separat anzugeben; diese sind Bestandteile von {{cssxref("background-position")}} ([Firefox-Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die `round` und `space` Schlüsselwörter in {{cssxref("background-repeat")}} hinzugefügt ([Firefox-Bug 548372](https://bugzil.la/548372)).
- Auf {{cssxref("background-clip")}} ist das Schlüsselwort `text` jetzt standardmäßig aktiviert ([Firefox-Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alphakanal unter Verwendung von 4- und 8-stelligen CSS-Hex-[Farb](/de/docs/Web/CSS/color_value)werten (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox-Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde ohne Präfix eingeführt ([Firefox-Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}} Werten interpolieren ([Firefox-Bug 1110460](https://bugzil.la/1110460)).
- Die [`q` Längeneinheit](/de/docs/Web/CSS/length#q) wurde hinzugefügt ([Firefox-Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde ohne Präfix eingeführt ([Firefox-Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, das `word-wrap` ersetzt, das immer noch als alternativer Name unterstützt wird ([Firefox-Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) Implementierung wurde verbessert:
  - Implementiert {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox-Bug 1266268](https://bugzil.la/1266268)).
  - Grid-Layout-Unterstützung für {{cssxref("align-self")}}, {{cssxref("justify-self")}} Werte `baseline` und `last-baseline` (alias "Baseline-Selbstausrichtung") implementiert ([Firefox-Bug 1221525](https://bugzil.la/1221525)).
  - Implementierte Baseline-Inhaltsausrichtung für Grid-Items ([Firefox-Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS Masks](/de/docs/Web/CSS/CSS_masking) Implementierung wurde verbessert:
  - Die {{cssxref("mask-origin")}} Eigenschaft verwendet jetzt `border-box` anstelle von `padding-box` als Anfangswert, um der Spezifikation zu entsprechen ([Firefox-Bug 1258286](https://bugzil.la/1258286)).
  - Die {{cssxref("mask-repeat")}} Eigenschaft unterstützt jetzt die Werte `space` und `round` ([Firefox-Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert wurde, behoben ([Firefox-Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenz, die {{cssxref("text-emphasis")}} steuert, wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox-Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Traps wurden implementiert ([Firefox-Bug 888969](https://bugzil.la/888969)).
- Die ES2015 Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split), sowie der [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) Getter wurden implementiert ([Firefox-Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht-standardmäßige `flags` Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox-Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der {{jsxref("Date.parse()")}} Methode bei der Analyse von zweistelligen Jahreszahlen wurde geändert, um interoperabler mit dem Google Chrome-Browser zu sein ([Firefox-Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox-Bug 1257849](https://bugzil.la/1257849)).
- Die [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) Methode wurde hinzugefügt ([Firefox-Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'` Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktors ignoriert ([Firefox-Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) für URLs mit dem `blob:` Schema zurückgegebene Wert ist nicht mehr fälschlicherweise `null`, sondern stattdessen der Ursprung der URL, die durch Entfernen des führenden `blob:` gebildet wird ([Firefox-Bug 1270451](https://bugzil.la/1270451)).
- Im Vorabrendering-Modus gibt die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) Eigenschaft jetzt `'prerender'` zurück ([Firefox-Bug 1069772](https://bugzil.la/1069772)).
- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox-Bug 911477](https://bugzil.la/911477)).
- Die `TouchList.identifiedTouch()` Methode wurde entfernt ([Firefox-Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist das `scrollbars` [`Window`](/de/docs/Web/API/Window) Feature aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit war es zwar dringend empfohlen, es zu aktivieren, aber es war nicht der Standard ([Firefox-Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht-standardmäßige_ [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) Methode wurde hinzugefügt, die es ermöglicht, Frame für Frame durch Videoinhalte zu springen ([Firefox-Bug 1235301](https://bugzil.la/1235301)). Während Sie ermutigt werden, mit dieser Methode zu experimentieren, um uns zu helfen, ihre Nützlichkeit zu verstehen, _verwenden Sie sie nicht in Produktionscode!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) Eigenschaft gibt jetzt das Formular zurück, mit dem das Steuerelement des Labels assoziiert ist, wenn ein solches Steuerelement existiert (und wenn dieses Steuerelement mit einem Formular verbunden ist). Zuvor wurden Labels direkt über diese Eigenschaft mit Formularen assoziiert ([Firefox-Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions` hinzugefügt ([Firefox-Bug 1266164](https://bugzil.la/1266164) und [Firefox-Bug 1266066](https://bugzil.la/1266066)).
- Die Audio-Lautstärke-bezogenen Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"` und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Das bringt Firefox in Einklang mit dem neuesten Entwurf der UI-Events-Spezifikation ([Firefox-Bug 1272578](https://bugzil.la/1272578)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Schlüsselcodes.
- Die vorher als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichneten Schlüssel haben jetzt offizielle Namen in der UI Events Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox-Bug 1272599](https://bugzil.la/1272599)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Schlüsselcodes.
- Die Schlüsselwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und ungenutzt waren ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Schlüsselwerte und die entsprechenden Schlüsselcodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese veralteten Modifikatortasten zu repräsentieren ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Zwei Schlüsselwerte für Multimedia-Nummernblocktasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Schlüsselwerte wurden für Audiosteuerungstasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"` und `"AudioTrebleUp"` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Schlüsselwerte wurden für diese Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp` und `MicrophoneVolumeMute` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Spracherkennunggeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode` und `VoiceDial` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Anwendungsschlüsselwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer` und `DVR` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Der Schlüsselwert `MediaSelect` wurde durch den standardmäßigen `LaunchMediaPlayer` Schlüsselwert ersetzt ([Firefox-Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Mediaplayer-Schlüsselwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut` und `NavigatePrevious` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) Eigenschaft, die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Präferenz aktiviert werden ([Firefox-Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) Erweiterung wurde implementiert ([Firefox-Bug 1129332](https://bugzil.la/1129332)).
- Das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event) Ereignis, das gesendet wird, wenn ein Versuch zur Erstellung eines WebGL-Kontextes fehlschlägt, wurde implementiert ([Firefox-Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schief gelaufen ist, sowohl für das Debugging als auch für das Produktions-Fehler-Handling.

#### IndexedDB

- Sie können nun IndexedDB-Indizes umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).
- Sie können auch nun [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).

#### Service Workers und verwandtes

- Das [Fetch API](/de/docs/Web/API/Fetch_API)'s [`Response`](/de/docs/Web/API/Response) Objekt implementiert jetzt die [`redirected`](/de/docs/Web/API/Response/redirected) Eigenschaft, die anzeigt, ob die Antwort für eine umgeleitete Anfrage ist. Bitte beachten Sie die sicherheitsrelevanten Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox-Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den `PermissionDescriptor` Dictionary Type 'push' (im spec als `PushPermissionDescriptor` bezeichnet) nicht mehr; dies liegt daran, dass Firefox stattdessen ein Quotensystem zur Steuerung des `userVisibleOnly` Status verwendet und einen Fehler auslöste, wenn es auf eine `PushPermissionDescriptor` Instanz stieß ([Firefox-Bug 1266821](https://bugzil.la/1266821)). Mit diesem entfernten Dictionary ignoriert Firefox es jetzt.

#### Medienströme

- In der Vergangenheit konnte ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, in Fällen, in denen der Benutzer nur eine der beiden Hardwaretypen zur Verfügung hatte, erfolgreich sein. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)).
- In vorherigen Firefox-Versionen konnte ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, erfolgreich sein, selbst wenn der Benutzer den Zugriff auf eines, aber nicht beide der passenden Geräte verweigerte. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)). Dies beinhaltet auch kleine Änderungen an der Benutzeroberfläche, um die Optionen "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer um Berechtigungen gebeten wird.
- Die [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) Methode wurde implementiert ([Firefox-Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) Methode wurde aktualisiert, um es zu ermöglichen, dass Tracks, die keine Komponenten der angegebenen Streams sind, der Verbindung hinzugefügt werden. Stattdessen werden die Streams verwendet, um Tracks am empfangenden Ende der Verbindung zu gruppieren ([Firefox-Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig auf Nightly aktiviert. Sie ist nicht standardmäßig in anderen Firefox 49 Versionen verfügbar ([Firefox-Bug 1271487](https://bugzil.la/1271487)).

#### Weitere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, wenn die Präferenz `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox-Bug 669259](https://bugzil.la/669259)).
- Die ausschließlich für Firefox OS verfügbare Data Store API wurde entfernt ([Firefox-Bug 1261009](https://bugzil.la/1261009)).
- Die Event-Handler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden aus [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die mit Präfixen versehenen Versionen dieser Event-Handler wurden jedoch aus Kompatibilitätsgründen dort belassen ([Firefox-Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` steht ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete `Document.mozFullScreen` Eigenschaft wurde ohne Präfix zu [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) geändert [Firefox-Bug 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies standardmäßig nicht aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` steht ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) führen jetzt keine Ausnahme mehr aus, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist ein No-Op ([Firefox-Bug 1269798](https://bugzil.la/1269798)).
- Jede Art von Daten kann jetzt aus der Zwischenablage abgerufen werden, indem [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) verwendet wird: zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox-Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation komplett neu geschrieben wurde ([Firefox-Bug 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) Eigenschaft jetzt ein `PositionAlign` Enum anstelle eines `Align` Enums zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachausgabeteil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_API) ist jetzt standardmäßig in Nightly verfügbar (aber nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) Event-Handler werden jetzt für [Web Manifeste](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox-Bug 1265279](https://bugzil.la/1265279)).
- Bei der Verwendung der [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) Methode der [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Dictionary-Objekt als dritten Parameter einschließen, das einen einzelnen Parameter enthält — `{disableNormalization: true}` ([Firefox-Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting` Enum gemäß Spezifikation zurück; zuvor gab es ein `AlignSetting` Enum zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachausgabeteil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine leere Timeline ([Firefox-Bug 1096776](https://bugzil.la/1096776)).
- Die [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox-Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente entfernt ([Firefox-Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die nicht notwendig für die einwandfreie Funktion von Websites sind. Dieses Verhalten, das durch die Präferenz `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, trägt dazu bei, die Leistung von Websites und Firefox im Allgemeinen zu verbessern, ohne die Benutzerfreundlichkeit von Websites erheblich zu beeinträchtigen. Es trägt auch zur Stabilität des Surferlebnisses bei, indem es eine Hauptursache für Abstürze beseitigt. Zu den blockierten Flash-Modulen gehören mehrere, die nur für Fingerprinting-Zwecke verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in Zukunft kann es auf mehr Arten von geblockten Modulen erweitert werden. Siehe [Firefox-Bug 1275591](https://bugzil.la/1275591) für Details.

Dies markiert den nächsten Schritt auf dem Weg in eine pluginfreie Zukunft. HTML ist sehr nah an dem Punkt, an dem Plugins nicht mehr benötigt werden, um die Arbeit zu erledigen.

## HTTP

- Das [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Direktive wurde implementiert ([Firefox-Bug 1267474](https://bugzil.la/1267474)). Weitere Informationen finden Sie auch in diesem [Blogpost](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html).
- Das `require-sri-for` {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox-Bug 1265318](https://bugzil.la/1265318)).

## Netzwerke

- Die Implementierung der [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange` und `timeRange` "umgekehrte Bereiche", zum Beispiel wird `weekdayRange("SAT", "MON")` als `true` bewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox-Bug 1251332](https://bugzil.la/1251332)).

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

- Die folgenden Eigenschaften entsprechen der äquivalenten präfixierten Eigenschaft:
  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:
  - Die folgenden Funktionen entsprechen ihren unpräfixierten Äquivalenten: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in einen regulären Gradient umgewandelt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:
  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und entsprechen keinem unpräfixierten Äquivalent):
  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix` Schnittstelle ist ein Alias für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Media Query Features wurden implementiert:
  - `-webkit-min-device-pixel-ratio` als Alias für [`min-resolution`](/de/docs/Web/CSS/@media/resolution) mit demselben Wert (in `dppx`), allerdings ist dieses Feature [standardmäßig deaktiviert](https://bugzil.la/1237720) (hinter der about:config Präferenz `layout.css.prefixes.device-pixel-ratio-webkit`).
  - `-webkit-max-device-pixel-ratio` als Alias für [`max-resolution`](/de/docs/Web/CSS/@media/resolution) mit demselben Wert (in `dppx`); dieses Feature ist ebenfalls standardmäßig deaktiviert, hinter derselben about:config Präferenz.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d) wird immer übereinstimmen und angeben, dass 3D-Transformationen unterstützt werden.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf die Browser-Historie, wobei Methoden zum Durchsuchen der Historie, zum Abrufen von Informationen über zuvor besuchte Seiten sowie zum Hinzufügen und Entfernen von Historieneinträgen verfügbar sind.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde zur Tabs-API hinzugefügt. Diese Methode ermöglicht es Ihnen, CSS zu entfernen, das zuvor durch Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, der nur in Code funktioniert, der in XBL oder in Firefox's Chrome ausgeführt wird, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird ([Firefox-Bug 1274520](https://bugzil.la/1274520)).

### weiteres

_Keine Änderung._
