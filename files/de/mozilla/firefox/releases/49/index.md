---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerversionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- JavaScript-Fehler, die in die Konsole protokolliert werden, bieten jetzt einen \[Learn more\]-Link für zusätzliche Debugging-Hilfe ([Firefox Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: zeigt mehr Vorschläge im Autovervollständigungs-Popup an ([Firefox Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor [zeigt nun Leistungsdaten zu Animationen an](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den DevTools ([Firefox Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um übersichtlicher und einfacher zu bedienen zu sein ([Firefox Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die Syntax `#RRGGBBAA` und `#RGBA` für Farbwerte ([Firefox Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklertools zeigen selbstschließende Tags (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}) auf HTML-Seiten nicht mehr als hätten sie ein Schließtag an; das Verhalten bleibt für XHTML-Seiten unverändert ([Firefox Bug 820926](https://bugzil.la/820926)).
- Verbesserungen der Barrierefreiheit!

  - Die Werkzeugleiste stellt den Tastaturfokus besser sichtbar dar ([Firefox Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitsetiketten wurden zu nicht etikettierten Steuerelementen hinzugefügt ([Firefox Bug 1242715](https://bugzil.la/1242715)).
  - Echte Baumansicht-Standards und Tastaturnavigation zum Markierungsansicht des Inspektors hinzugefügt ([Firefox Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Spalte „Ursache“, die anzeigt, was jede spezielle Netzwerkanfrage verursacht hat ([Firefox Bug 1134073](https://bugzil.la/1134073)).
- Auf der Add-ons-Seite _about:debugging_ ist die Schaltfläche „Neu laden“ nur für temporäre Add-ons aktiviert. Für alle anderen Add-ons wird sie deaktiviert sein ([Firefox Bug 1273184](https://bugzil.la/1273184)).
- Auf der Seite _about:debugging_ Arbeiter wird im Abschnitt Service Worker eine Warnmeldung angezeigt, wenn [Service Worker inkompatibel](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) mit der aktuellen Browser-Konfiguration sind ([Firefox Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Tab-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debuggierbaren Tabs in der aktuellen Firefox-Instanz bereitstellt ([Firefox Bug 1266128](https://bugzil.la/1266128)).
- Die Option „Cache deaktivieren“ in den [Erweiterten Einstellungen der Werkzeugleiste](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in „HTTP-Cache deaktivieren“ umbenannt, um klarer zu machen, dass dies den HTTP-Cache betrifft und nicht [Service Worker](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) (Bug(1253018)).
- Der [Speicher-Inspektor erlaubt es jetzt, IndexedDB-Datenbanken zu löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über ihre eigenen Kontextmenüs ([Firefox Bug 1205123](https://bugzil.la/1205123)) und zeigt Warnmeldungen an, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (wenn zum Beispiel noch aktive Verbindungen bestehen) ([Firefox Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}}- und {{HTMLElement("summary")}}-Elemente hinzugefügt ([Firefox Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut des {{HTMLElement("input")}} Elements verwendet jetzt den `'u'`-Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox Bug 1227906](https://bugzil.la/1227906)).
- Um einer Spezifikationsänderung zu entsprechen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attributs des {{HTMLElement('track')}}-Elements jetzt wie `"metadata"` anstatt wie `"subtitles"` behandelt ([Firefox Bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}} Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox Bug 1190641](https://bugzil.la/1190641)).
- Die Unterstützung für Microdata-Attribute und die Microdata-API wurde entfernt ([Firefox Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-Attribut im {{HTMLElement("a")}} Element unterstützt jetzt die Werte `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox Bug 1178337](https://bugzil.la/1178337)).
- Das [`form`](/de/docs/Web/HTML/Reference/Elements/label#form)-Inhaltsattribut des {{HTMLElement("label")}} wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft existiert weiterhin, gibt jetzt aber das Formular zurück, dem das Steuerelement des Labels zugeordnet ist, falls ein solches Steuerelement existiert (und wenn dieses Steuerelement mit einem Formular verbunden ist) ([Firefox Bug 1268852](https://bugzil.la/1268852)).

### CSS

- {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} hinzugefügt, die es erlauben, separat die horizontalen und vertikalen Versätze anzugeben, bei denen ein Hintergrundbild gezeichnet werden soll; dies sind Komponenten von {{cssxref("background-position")}} ([Firefox Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die `round` und `space` Schlüsselwörter zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox Bug 548372](https://bugzil.la/548372)).
- Bei {{cssxref("background-clip")}} ist das Schlüsselwort `text` nun standardmäßig aktiviert ([Firefox Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alphakanal unter Verwendung von 4- und 8-stelligen CSS-Hex [color](/de/docs/Web/CSS/color_value)-Werten (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde unpräfixiert ([Firefox Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}} Werten interpolieren ([Firefox Bug 1110460](https://bugzil.la/1110460)).
- Die [`q` Längeneinheit](/de/docs/Web/CSS/length#q) hinzugefügt ([Firefox Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde unpräfixiert ([Firefox Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, das `word-wrap` ersetzt, das weiterhin als alternativer Name unterstützt wird ([Firefox Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout) Implementierung wurde verbessert:

  - Implementiert {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox Bug 1266268](https://bugzil.la/1266268)).
  - Unterstützung für Grid-Layout der Werte `baseline` und `last-baseline` (alias "Baseline-Selbstausrichtung") für {{cssxref("align-self")}}, {{cssxref("justify-self")}} Implementiert ([Firefox Bug 1221525](https://bugzil.la/1221525)).
  - Implementierter Grid-Element-Baseline-Inhaltsausrichtung ([Firefox Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS Masks](/de/docs/Web/CSS/CSS_masking) Implementierung wurde verbessert:

  - Die {{cssxref("mask-origin")}} Eigenschaft verwendet jetzt `border-box` als Standardwert statt `padding-box`, um der Spezifikation zu entsprechen ([Firefox Bug 1258286](https://bugzil.la/1258286)).
  - Die {{cssxref("mask-repeat")}} Eigenschaft unterstützt jetzt die Werte `space` und `round` ([Firefox Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem behoben, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert werden konnte ([Firefox Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenz zur Steuerung von {{cssxref("text-emphasis")}} wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Traps wurden implementiert ([Firefox Bug 888969](https://bugzil.la/888969)).
- Die ES2015 Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search), und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split), und der Getter [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) wurden implementiert ([Firefox Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht-standardisierte `flags` Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der Methode {{jsxref("Date.parse()")}} beim Parsen von zweistelligen Jahreszahlen wurde geändert, um besser mit dem Google Chrome Browser interoperable zu sein ([Firefox Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox Bug 1224186](https://bugzil.la/1224186)).
- Einleitende `'?'` Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktors ignoriert ([Firefox Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) für URLs mit dem `blob:` Schema zurückgegebene Wert ist nicht mehr fälschlicherweise `null`, sondern stattdessen der Ursprung der URL, der durch Entfernen des führenden `blob:` gebildet wird ([Firefox Bug 1270451](https://bugzil.la/1270451)).
- Im Vorabrendermodus gibt die Eigenschaft [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) jetzt `'prerender'` zurück ([Firefox Bug 1069772](https://bugzil.la/1069772)).
- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox Bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist die `scrollbars` [`Window`](/de/docs/Web/API/Window) Funktion aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit war es zwar stark empfohlen, sie zu aktivieren, jedoch war sie nicht standardmäßig aktiviert ([Firefox Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht-standardisierte_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) hinzugefügt, mit der Sie Frame-für-Frame durch Videoinhalte navigieren können ([Firefox Bug 1235301](https://bugzil.la/1235301)). Es wird empfohlen, mit dieser Methode zu experimentieren, um uns zu helfen, zu verstehen, wie nützlich sie ist, _nutzen Sie sie jedoch nicht in Produktivcode!_
- Die Eigenschaft [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) gibt jetzt das Formular zurück, dem das Steuerelement des Labels zugeordnet ist, falls ein solches Steuerelement existiert (und wenn dieses mit einem Formular verbunden ist). Zuvor waren Labels direkt mit Formularen über diese Eigenschaft verbunden ([Firefox Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions`, wurde hinzugefügt ([Firefox Bug 1266164](https://bugzil.la/1266164) und [Firefox Bug 1266066](https://bugzil.la/1266066)).
- Die lautstärkebezogenen Audiowerte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"`, und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Übereinstimmung mit dem neuesten Entwurf der UI-Events-Spezifikation ([Firefox Bug 1272578](https://bugzil.la/1272578)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste verfügbarer Tastencodes.
- Die Tasten, die zuvor als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI-Events-Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox Bug 1272599](https://bugzil.la/1272599)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste verfügbarer Tastencodes.
- Die Schlüsselwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und unbenutzt waren ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Schlüsselwerte und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese veralteten Modifikatortasten darzustellen ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Zwei Schlüsselwerte für Multimedia-Numpad-Tasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastenwerte wurden für die Audiosteuerungstasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, und `"AudioTrebleUp"` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Tastenwerte wurden für diese Mikrofonkontrolltasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp`, und `MicrophoneVolumeMute` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Neue Tastenwerte wurden hinzugefügt, um Sprachsteuerungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode`, und `VoiceDial` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungstastendrücke wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Fernsehgeräten zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, und `DVR` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Der Schlüsselwert `MediaSelect` wurde durch den standardmäßigen `LaunchMediaPlayer`-Schlüsselwert ersetzt ([Firefox Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Medienplayer-Schlüsselwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, und `NavigatePrevious` ([Firefox Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) Eigenschaft, die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Voreinstellung aktiviert werden ([Firefox Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext)-Erweiterung wurde implementiert ([Firefox Bug 1129332](https://bugzil.la/1129332)).
- Das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event) Ereignis, das gesendet wird, wenn ein WebGL-Kontext-Erstellungsversuch fehlschlägt, wurde implementiert ([Firefox Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgegangen ist, sowohl zum Debuggen als auch zur Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).
- Sie können jetzt auch [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).

#### Service Worker und verwandtes

- Das [Fetch API](/de/docs/Web/API/Fetch_API)'s [`Response`](/de/docs/Web/API/Response)-Objekt implementiert jetzt die Eigenschaft [`redirected`](/de/docs/Web/API/Response/redirected), die anzeigt, ob die Antwort für eine Anfrage, die umgeleitet wurde, ist. Bitte überprüfen Sie die sicherheitsrelevanten Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den 'push' `PermissionDescriptor` Dictionary-Typ nicht mehr (im Spec als `PushPermissionDescriptor` bezeichnet); Dies liegt daran, dass Firefox stattdessen ein Quotensystem zur Steuerung des `userVisibleOnly` Status verwendet hat und einen Fehler geworfen hat, wenn es auf eine `PushPermissionDescriptor` Instanz gestoßen ist ([Firefox Bug 1266821](https://bugzil.la/1266821)). Mit diesem entfernten Dictionary ignoriert Firefox es nun.

#### Mediastreams

- In der Vergangenheit war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, in Fällen erfolgreich war, in denen der Benutzer nur eine der beiden Arten von Hardware verfügbar hatte. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich war, auch wenn der Benutzer den Zugriff auf eines der Geräte verweigert hatte. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)). Dies beinhaltet auch kleine Änderungen an der Benutzeroberfläche, um die Optionen zum Wählen von "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer um Berechtigungen gebeten wird.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um Tracks zu erlauben, die keine Komponenten der angegebenen Streams sind, der Verbindung hinzugefügt zu werden. Stattdessen werden die Streams verwendet, um Tracks am empfangenden Ende der Verbindung zu gruppieren ([Firefox Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die API [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ist jetzt standardmäßig in Nightly aktiviert. Sie ist in anderen Versionen von Firefox 49 nicht standardmäßig verfügbar ([Firefox Bug 1271487](https://bugzil.la/1271487)).

#### Weitere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Einstellung `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox Bug 669259](https://bugzil.la/669259)).
- Die ausschließlich Firefox OS betreffende Data Store API wurde entfernt ([Firefox Bug 1261009](https://bugzil.la/1261009)).
- Die Event-Handler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden aus [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die mit Präfixen versehenen Versionen dieser Event-Handler sind jedoch aus Kompatibilitätsgründen erhalten ([Firefox Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern sich hinter der Einstellung `full-screen-api.unprefix.enabled` verbirgt ([Firefox Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete Eigenschaft `Document.mozFullScreen` wurde unpräfixiert zu [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) [Firefox Bug 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern sich hinter der Einstellung `full-screen-api.unprefix.enabled` verbirgt ([Firefox Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, falls ein Versuch unternommen wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist eine No-Op ([Firefox Bug 1269798](https://bugzil.la/1269798)).
- Alle Arten von Daten können jetzt mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) aus der Zwischenablage abgerufen werden: zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung des Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da das Spezifikationsdokument komplett umgeschrieben wurde ([Firefox Bug 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die Eigenschaft [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt ein `PositionAlign` Enum zurück statt eines `Align` Enums ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der sprachsynthesierende Teil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist jetzt standardmäßig in Nightly verfügbar (jedoch nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event)-Ereignishandler werden jetzt für [Web Manifeste](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox Bug 1265279](https://bugzil.la/1265279)).
- Bei Verwendung der Methode [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Dictionary-Objekt als drittes Parameter angeben, das eine einzige Einstellung enthält — `{disableNormalization: true}` ([Firefox Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting` Enum gemäß der Spezifikation zurück; zuvor gab es ein `AlignSetting` Enum zurück ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsyntheseteil der Web Speech API ist jetzt in allen Desktop-Browsern standardmäßig aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor der [Web Animationen API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null-Zeitleiste ([Firefox Bug 1096776](https://bugzil.la/1096776)).
- Die Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) von [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) wird jetzt in Firefox unterstützt, wenn Sie [Web Animationen](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente entfernt ([Firefox Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die nicht notwendig sind, damit Websites gut funktionieren. Dieses Verhalten, das durch die Präferenz `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, trägt zur Verbesserung der Leistung von Websites und Firefox im Allgemeinen bei, ohne signifikante Auswirkungen auf die Benutzbarkeit von Websites zu haben. Es trägt auch zur Verbesserung der Stabilität des Browsing-Erlebnisses bei, indem eine Hauptursache für Abstürze beseitigt wird. Zu den blockierten Flash-Modulen gehören einige, die nur für Fingerabdruck-Zwecke verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in Zukunft könnten weitere Typen von blockierten Modulen hinzugefügt werden. Siehe [Firefox Bug 1275591](https://bugzil.la/1275591) für Details.

Dies markiert den nächsten Schritt auf dem Weg zu einer pluginfreien Zukunft. HTML steht kurz davor, der einzige Weg zu sein, um die Arbeit zu erledigen, ohne dass Plugins benötigt werden.

## HTTP

- Die [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Direktive wurde implementiert ([Firefox Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogbeitrag](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für mehr Informationen.
- Die {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox Bug 1265318](https://bugzil.la/1265318)).

## Netzwerk

- Die [Proxy Auto-Configuration (PAC)](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) Implementierung wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange`, und `timeRange` "umgekehrte Bereiche", zum Beispiel wird `weekdayRange("SAT", "MON")` als `true` ausgewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext), die anzeigt, ob ein Kontext in der Lage ist, Funktionen zu verwenden, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit vorhandenen Inhalten zu verbessern, akzeptiert Firefox jetzt einige mit WebKit präfixierte Eigenschaften und Attribute.

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

- Die folgenden Eigenschaften werden auf die entsprechende mit Präfix versehene Eigenschaft gemappt:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:

  - Die folgenden Funktionen werden auf ihre unpräfigierten Entsprechungen abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in ein reguläres Gradient übersetzt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und nicht auf eine unpräfixelte Entsprechung abgebildet):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix` Schnittstelle ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Mediaquery-Funktionen wurden implementiert:

  - `-webkit-min-device-pixel-ratio` als Alias von [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx)`, obwohl diese Funktion [standardmäßig deaktiviert](https://bugzil.la/1237720) ist (hinter der about:config Voreinstellung `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als Alias von [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx`); diese Funktion ist ebenfalls standardmäßig deaktiviert, hinter derselben about:config Voreinstellung.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d) immer übereinstimmend, was die Unterstützung von 3D-Transformationen anzeigt.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf die Browserverlauf, mit Methoden, die zum Durchsuchen des Verlaufs, zum Abrufen von Informationen über zuvor besuchte Seiten und zum Hinzufügen und Entfernen von Verlauseinträgen verfügbar sind.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} in der Tabs-API hinzugefügt. Mit dieser Methode können Sie zuvor durch Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügtes CSS entfernen.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, der nur im Code aktiv ist, der in XBL oder in Firefox's Chrome läuft, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox Bug 1274520](https://bugzil.la/1274520))

### Weitere

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
