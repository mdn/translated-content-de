---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{FirefoxSidebar}}

[Um die neuesten Entwickler-Features von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- JavaScript-Fehler, die in die Konsole protokolliert werden, bieten nun einen \[Learn more\]-Link für zusätzliche Debugging-Hilfe ([Firefox Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: Mehr Vorschläge im Autovervollständigungspopup anzeigen ([Firefox Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor zeigt jetzt Animationsleistungsinformationen in den DevTools an ([Firefox Bug 1254408](https://bugzil.la/1254408)).
- Das Kontextmenü des Inspektors wurde neu organisiert, um es übersichtlicher und benutzerfreundlicher zu gestalten ([Firefox Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die `#RRGGBBAA`- und `#RGBA`-Syntax für Farbwerte ([Firefox Bug 1271191](https://bugzil.la/1271191)).
- Die Developer-Tools zeigen keine selbstschließenden Tags mehr als ob sie einen Abschlusstag auf HTML-Seiten hätten; das Verhalten bleibt bei XHTML-Seiten unverändert ([Firefox Bug 820926](https://bugzil.la/820926)).
- Verbesserungen der Barrierefreiheit!

  - Die Werkzeugleiste sorgt dafür, dass der Tastaturfokus besser sichtbar ist ([Firefox Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitsetiketten wurden zu unetikettierten Steuerelementen hinzugefügt ([Firefox Bug 1242715](https://bugzil.la/1242715)).
  - Semantiken für Baumansichten und Tastaturnavigation wurden zur Markup-Ansicht des Inspektors hinzugefügt ([Firefox Bug 1242694](https://bugzil.la/1242694)).

- Der Netzwerkmonitor zeigt jetzt eine Ursache-Spalte, die angibt, was jede einzelne Netzwerk-Anfrage verursacht hat ([Firefox Bug 1134073](https://bugzil.la/1134073)).
- Auf der _about:debugging_ Add-ons-Seite ist die Schaltfläche Neu laden nur für temporäre Add-ons aktiviert. Sie wird für alle anderen Add-ons deaktiviert ([Firefox Bug 1273184](https://bugzil.la/1273184)).
- Auf der _about:debugging_ Workers-Seite wird eine Warnmeldung im Abschnitt Service Workers angezeigt, falls Service Workers mit der aktuellen Browserkonfiguration inkompatibel sind ([Firefox Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine neue Tabs-Seite, die eine vollständige Liste aller debuggbaren Tabs im aktuellen Firefox-Instanz bietet ([Firefox Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Cache deaktivieren_ in den erweiterten Einstellungen der Toolbox wurde in HTTP-Cache deaktivieren umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) (Bug(1253018)).
- Der Storage Inspector ermöglicht jetzt das Löschen von IndexedDB-Datenbanken über ihre eigenen Kontextmenüs ([Firefox Bug 1205123](https://bugzil.la/1205123)), und wird Warnmeldungen anzeigen, falls die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (zum Beispiel wenn noch aktive Verbindungen bestehen) ([Firefox Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}}- und {{HTMLElement("summary")}}-Elemente wurde hinzugefügt ([Firefox Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut des {{HTMLElement("input")}}-Elements verwendet jetzt den `'u'`-Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox Bug 1227906](https://bugzil.la/1227906)).
- Um eine Änderung in der Spezifikation zu berücksichtigen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attributs des {{HTMLElement('track')}}-Elements jetzt als `"metadata"` statt als `"subtitles"` behandelt ([Firefox Bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}}-Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata API wurde entfernt ([Firefox Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-Attribut des {{HTMLElement("a")}}-Elements unterstützt jetzt die Werte `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox Bug 1178337](https://bugzil.la/1178337)).
- Das [`form`](/de/docs/Web/HTML/Reference/Elements/label#form)-Attribut des {{HTMLElement("label")}}-Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft existiert noch, gibt aber jetzt das Formular zurück, mit dem das Steuerelement des Etiketts verknüpft ist, falls ein solches Steuerelement vorhanden ist (und wenn dieses Steuerelement mit einem Formular verknüpft ist) ([Firefox Bug 1268852](https://bugzil.la/1268852)).

### CSS

- Unterstützung für {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es ermöglichen, die horizontalen und vertikalen Versatzwerte für ein Hintergrundbild getrennt anzugeben. Diese sind Komponenten von {{cssxref("background-position")}} ([Firefox Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die `round`- und `space`-Schlüsselwörter von {{cssxref("background-repeat")}} wurde hinzugefügt ([Firefox Bug 548372](https://bugzil.la/548372)).
- Auf {{cssxref("background-clip")}} ist das Schlüsselwort `text` jetzt standardmäßig aktiviert ([Firefox Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alphakanal unter Verwendung von 4- und 8-stelligen CSS-Hex-[Farb](/de/docs/Web/CSS/color_value)-Werten (#RRGGBBAA und #RGBA) wurde hinzugefügt ([Firefox Bug 567283](https://bugzil.la/567283)).
- Die Pseudo-Klasse {{cssxref(":dir")}} wurde ohne Präfix hinzugefügt ([Firefox Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}}-Werten interpolieren ([Firefox Bug 1110460](https://bugzil.la/1110460)).
- Die [`q`-Längeneinheit](/de/docs/Web/CSS/length#q) wurde hinzugefügt ([Firefox Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde ohne Präfix hinzugefügt ([Firefox Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}}, das `word-wrap` ersetzt, das weiterhin als alternativer Name unterstützt wird ([Firefox Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout)-Implementierung wurde verbessert:

  - Implementiert {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox Bug 1266268](https://bugzil.la/1266268)).
  - Unterstützt jetzt auch die `align-self`-, `justify-self`-Werte `baseline` und `last-baseline` (aka "Baseline-Selbstausrichtung") im Grid-Layout ([Firefox Bug 1221525](https://bugzil.la/1221525)).
  - Verbesserte Grid-Elemente zur Baseline-Inhaltsausrichtung ([Firefox Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS Masks](/de/docs/Web/CSS/CSS_masking)-Implementierung wurde verbessert:

  - Die Eigenschaft {{cssxref("mask-origin")}} verwendet jetzt `border-box` anstelle von `padding-box` als Anfangswert, um die Spezifikation zu erfüllen ([Firefox Bug 1258286](https://bugzil.la/1258286)).
  - Die Eigenschaft {{cssxref("mask-repeat")}} unterstützt jetzt die Werte `space` und `round` ([Firefox Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem wurde behoben, das das Animieren des Attributs {{cssxref("mask-position")}} verhinderte ([Firefox Bug 1273804](https://bugzil.la/1273804)).

- Die Einstellung, die {{cssxref("text-emphasis")}} steuert, wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}- und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}-{{jsxref("Proxy")}}-Traps wurden implementiert ([Firefox Bug 888969](https://bugzil.la/888969)).
- Die ES2015-Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) sowie der Getter [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) wurden implementiert ([Firefox Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardisierte `flags`-Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der Methode {{jsxref("Date.parse()")}} beim Parsen von zweistelligen Jahreszahlen wurde geändert, um besser mit dem Google Chrome-Browser kompatibel zu sein ([Firefox Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox Bug 1224186](https://bugzil.la/1224186)).
- Vorangestellte `'?'`-Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)-Konstruktors ignoriert ([Firefox Bug 1268361](https://bugzil.la/1268361)).
- Der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) für URLs mit dem `blob:`-Schema zurückgegebene Wert ist nicht länger fälschlicherweise `null`, sondern stattdessen der Ursprung der URL, die durch Entfernen des führenden `blob:` gebildet wird ([Firefox Bug 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft jetzt `'prerender'` zurück ([Firefox Bug 1069772](https://bugzil.la/1069772)).
- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext)-Eigenschaft wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4-Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox Bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig wird die `scrollbars`-Eigenschaft von [`Window`](/de/docs/Web/API/Window) aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit wurde dringend empfohlen, sie zu aktivieren, aber es war nicht der Standard ([Firefox Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht standardisierte_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame), die es ermöglicht, bildweise durch Videoinhalte zu suchen, wurde hinzugefügt ([Firefox Bug 1235301](https://bugzil.la/1235301)). Sie sind ermutigt, mit dieser Methode zu experimentieren, um besser zu verstehen, wie nützlich sie ist, _aber verwenden Sie sie nicht in Produktionscode!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft gibt jetzt das Formular zurück, mit dem das Steuerelement des Etiketts verknüpft ist, falls ein solches Steuerelement vorhanden ist (und wenn dieses Steuerelement mit einem Formular verknüpft ist). Früher wurden Etiketten direkt mit Formularen verknüpft, indem diese Eigenschaft verwendet wurde ([Firefox Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder eine `EventListenerOptions`, wurde hinzugefügt ([Firefox Bug 1266164](https://bugzil.la/1266164) und [Firefox Bug 1266066](https://bugzil.la/1266066)).
- Die Audio-Lautstärke-bezogenen Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"` und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Einklang mit der neuesten Version der UI Events-Spezifikation ([Firefox Bug 1272578](https://bugzil.la/1272578)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Schlüssel, die zuvor als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI Events-Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox Bug 1272599](https://bugzil.la/1272599)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tastencodes.
- Die Tastaturwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und unbenutzt waren ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Key-Werte und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifikatortasten darzustellen ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Zwei Key-Werte für Multimedia-Zahlenfeldtasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastaturwerte wurden für Audiosteuerungstasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"` und `"AudioTrebleUp"` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Key-Werte wurden für diese Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp` und `MicrophoneVolumeMute` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Neue Key-Werte wurden hinzugefügt, um Spracherkennungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Key-Werte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode` und `VoiceDial` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungswerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Key-Werte wurden hinzugefügt, um Fernsehergeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer` und `DVR` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Der Key-Wert `MediaSelect` wurde durch den Standard-Key-Wert `LaunchMediaPlayer` ersetzt ([Firefox Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Media-Player-Keyboard-Werte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut` und `NavigatePrevious` ([Firefox Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die Eigenschaft [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter), die Unterstützung für das Hinzufügen von Filtern auf einer Leinwand bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr mit einer Einstellung aktiviert werden ([Firefox Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext)-Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) wurde implementiert ([Firefox Bug 1129332](https://bugzil.la/1129332)).
- Das Event [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event), das gesendet wird, wenn ein Versuch zur Erstellung eines WebGL-Kontextes fehlschlägt, wurde implementiert ([Firefox-Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgelaufen ist, sowohl für das Debuggen als auch zur Fehlerbehebung im Produktionsumfeld.

#### IndexedDB

- Es ist jetzt möglich, IndexedDB-Indizes umzubenennen; die Eigenschaft [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) ist nicht mehr schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).
- Sie können jetzt auch [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die Eigenschaft [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) ist nicht mehr schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).

#### Service Workers und verwandte

- Das [`redirected`](/de/docs/Web/API/Response/redirected)-Eigentum des [Fetch API](/de/docs/Web/API/Fetch_API)'s [`Response`](/de/docs/Web/API/Response)-Objekts wurde implementiert, das angibt, ob die Antwort auf eine zugehörige Anfrage weitergeleitet wurde. Bitte überprüfen Sie die Sicherheitsanmerkungen in der Dokumentation, bevor Sie auf diese Eigenschaft zugreifen ([Firefox Bug 1243792](https://bugzil.la/1243792)).
- Im [Permissions API](/de/docs/Web/API/Permissions_API) wird der `PushPermissionDescriptor`-Typ nicht mehr unterstützt. Firefox stützt sich stattdessen auf ein Quotensystem zur Kontrolle des `userVisibleOnly`-Status und warf einen Fehler, wenn es auf eine `PushPermissionDescriptor`-Instanz stieß ([Firefox Bug 1266821](https://bugzil.la/1266821)). Mit der Entfernung dieses Wörterbuchs ignoriert Firefox es jetzt.

#### Media Streams

- In der Vergangenheit war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, selbst dann erfolgreich sein würde, wenn der Benutzer nur eine der beiden Gerätearten verfügbar hatte. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox konnte ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, selbst dann erfolgreich sein, wenn der Benutzer den Zugriff auf ein Gerät, aber nicht beide, verweigerte. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)). Dazu gehören auch kleinere Änderungen an der Benutzeroberfläche, um die Optionen für "Kein Audio" oder "Kein Video" bei der Aufforderung zur Berechtigungsauswahl zu entfernen.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um Tracks zu ermöglichen, die nicht Bestandteil der angegebenen Streams sind, der Verbindung hinzugefügt zu werden. Stattdessen werden die Streams verwendet, um Tracks auf der empfangenden Seite der Verbindung zu gruppieren ([Firefox Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-API ist nun standardmäßig in Nightly aktiviert. Sie ist standardmäßig in anderen Versionen von Firefox 49 nicht verfügbar ([Firefox Bug 1271487](https://bugzil.la/1271487)).

#### Andere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Einstellung `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox Bug 669259](https://bugzil.la/669259)).
- Die ausschließlich für Firefox OS verfügbare Data Store API wurde entfernt ([Firefox Bug 1261009](https://bugzil.la/1261009)).
- Die Ereignishandler `Document.onfullscreenchange` und `Document.onfullscreenerror` des [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden vom [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die mit Präfix versehenen Versionen dieser Ereignishandler wurden dort jedoch aus Kompatibilitätsgründen beibehalten ([Firefox Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies nicht standardmäßig aktiviert ist, sondern hinter der Einstellung `full-screen-api.unprefix.enabled` ist ([Firefox Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete Eigenschaft `Document.mozFullScreen` wurde zu [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) ohne Präfix angepasst ([Firefox Bug 1269157](https://bugzil.la/1269157)). Beachten Sie, dass dies nicht standardmäßig aktiviert ist, sondern hinter der Einstellung `full-screen-api.unprefix.enabled` ist ([Firefox Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, wenn ein Versuch unternommen wird, ihre Werte zu ändern; stattdessen wird der neue Wert still ignoriert und die Setter-Funktion ist ein No-Op ([Firefox Bug 1269798](https://bugzil.la/1269798)).
- Es können jetzt alle Arten von Daten aus der Zwischenablage mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abgerufen werden: zuvor wurden nur bestimmte MIME-Typen unterstützt ([Firefox Bug 860857](https://bugzil.la/860857)).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation vollständig neu geschrieben wurde ([Firefox Bug 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)-Eigenschaft jetzt ein `PositionAlign`-Enum anstelle eines `Align`-Enums zurück ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der sprachsynthetische Teil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist jetzt standardmäßig in Nightly verfügbar (aber nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event)-Ereignishandler werden jetzt für [Web-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox Bug 1265279](https://bugzil.la/1265279)).
- Beim Verwenden der Methode [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Dictionary-Objekt als drittes Argument einfügen, das eine einzige Eigenschaft enthält — `{disableNormalization: true}` ([Firefox Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting`-Enum gemäß der Spezifikation zurück; zuvor gab es ein `AlignSetting`-Enum zurück ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsynthese-Teil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine Timeline mit Nuոl ([Firefox Bug 1096776](https://bugzil.la/1096776)).
- Die [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>`-Elemente wurde entfernt ([Firefox Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für das ordnungsgemäße Funktionieren von Websites nicht erforderlich sind. Dieses Verhalten, das durch die Einstellung `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, verbessert die Leistung von Websites und Firefox im Allgemeinen ohne signifikante Auswirkungen auf die Benutzerfreundlichkeit der Websites. Es verbessert auch die Stabilität des Browsererlebnisses, indem eine Hauptursache für Abstürze beseitigt wird. Die blockierten Flash-Module umfassen mehrere, die nur zu Fingerabdruckzwecken verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in Zukunft kann dies erweitert werden, um weitere blockierte Module einzuschließen. Einzelheiten siehe [Firefox Bug 1275591](https://bugzil.la/1275591).

Dies markiert den nächsten Schritt auf dem Weg in eine plugin-freie Zukunft. HTML steht kurz davor, den Punkt zu erreichen, an dem Plugins nicht mehr benötigt werden, um die erforderlichen Aufgaben zu erledigen.

## HTTP

- Der [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header wurde implementiert ([Firefox Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogbeitrag](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Die {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox Bug 1265318](https://bugzil.la/1265318)).

## Networking

- Die Implementierung der [Proxy Auto-Configuration (PAC)](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange` und `timeRange` "umgekehrte Bereiche", beispielsweise wird `weekdayRange("SAT", "MON")` als `true` bewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext)-Eigenschaft, die anzeigt, ob ein Kontext in der Lage ist, Funktionen zu verwenden, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit bestehenden Inhalten zu verbessern, akzeptiert Firefox jetzt einige mit `-webkit` präfixierte Eigenschaften und Attribute.

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

- Die folgenden Eigenschaften werden auf die entsprechende mit Präfix versehene Eigenschaft abgebildet:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}}-Werte:

  - Die folgenden Funktionen werden auf ihre unpräfixierten Entsprechungen abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()` und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in einen regulären Verlauf übersetzt)

- Die folgenden {{cssxref("display")}}-Werte werden umgewandelt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und nicht auf eine unpräfixierte Entsprechung abgebildet):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix`-Schnittstelle ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Media-Query-Features wurden implementiert:

  - `-webkit-min-device-pixel-ratio` als Alias von [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx)`, obwohl dieses Feature [standardmäßig deaktiviert ist](https://bugzil.la/1237720) (hinter der about:config-Einstellung `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als Alias von [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx`); auch dieses Feature ist standardmäßig deaktiviert, hinter derselben about:config-Einstellung.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d) immer übereinstimmend, was auf Unterstützung für 3D-Transformationen hinweist.

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für das {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf, mit verfügbaren Methoden zum Durchsuchen des Verlaufs, zum Abrufen von Informationen zu zuvor besuchten Seiten und zum Hinzufügen und Entfernen von Verlaufs-Einträgen.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde zur Tabs-API hinzugefügt. Diese Methode ermöglicht das Entfernen von CSS, das zuvor durch Aufrufen von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, nur aktiv in Code, der in XBL oder in Firefox's Chrome ausgeführt wird, ein {{jsxref("Boolean")}}, der angibt, ob der Listener der Systemgruppe hinzugefügt wird. ([Firefox Bug 1274520](https://bugzil.la/1274520))

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
