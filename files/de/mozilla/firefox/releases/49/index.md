---
title: Firefox 49 Versionshinweise für Entwickler
short-title: Firefox 49
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

[Um die neuesten Entwickler-Funktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Entwickler von Firefox und Gecko sowie für Add-On-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

- JavaScript-Fehler, die in die Konsole protokolliert werden, enthalten [nun einen \[Learn more\]-Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debug-Hilfe ([Firefox Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: Zeigt mehr Vorschläge im Autovervollständigung-Popup an ([Firefox Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor zeigt jetzt [Informationen zur Animationsleistung](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in DevTools an ([Firefox Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um übersichtlicher und einfacher zu bedienen zu sein ([Firefox Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die `#RRGGBBAA`- und `#RGBA`-Syntax für Farbwerte ([Firefox Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklertools zeigen keine selbstschließenden Tags (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}) mehr so an, als ob sie ein schließendes Tag auf HTML-Seiten hätten; das Verhalten für XHTML-Seiten bleibt unverändert ([Firefox Bug 820926](https://bugzil.la/820926)).
- Verbesserungen der Barrierefreiheit!
  - Das Toolbox-Design sorgt dafür, dass die Tastaturfokussierung besser sichtbar ist ([Firefox Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitslabels wurden zu unlabeled Kontrollen hinzugefügt ([Firefox Bug 1242715](https://bugzil.la/1242715)).
  - Semantiken von Baumansichten und Tastaturnavigation zur Markup-Ansicht des Inspektors hinzugefügt ([Firefox Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun eine "Ursache"-Spalte an, die einen Hinweis darauf gibt, was jede bestimmte Netzwerkanfrage verursacht hat ([Firefox Bug 1134073](https://bugzil.la/1134073)).
- Auf der Add-ons-Seite unter _about:debugging_ ist der Neuladen-Button nur für temporäre Add-ons aktiviert. Er wird für alle anderen Add-ons deaktiviert ([Firefox Bug 1273184](https://bugzil.la/1273184)).
- Auf der Arbeiter-Seite unter _about:debugging_ wird eine Warnmeldung im Abschnitt Service Workers angezeigt, wenn [Service Worker nicht kompatibel sind](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) mit der aktuellen Browser-Konfiguration ([Firefox Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debugfähigen Tabs in der aktuellen Firefox-Instanz anzeigt ([Firefox Bug 1266128](https://bugzil.la/1266128)).
- Die Option _Cache deaktivieren_ in den [Toolbox Advanced Settings](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in HTTP-Cache deaktivieren umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API) oder die [Cache API](/de/docs/Web/API/Cache) (Bug(1253018)).
- Der [Speicher-Inspektor erlaubt es nun, IndexedDB-Datenbanken zu löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über deren eigene Kontextmenüs ([Firefox Bug 1205123](https://bugzil.la/1205123)) und zeigt Warnmeldungen an, wenn eine IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (zum Beispiel, wenn es noch aktive Verbindungen gibt) ([Firefox Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die Elemente {{HTMLElement("details")}} und {{HTMLElement("summary")}} hinzugefügt ([Firefox Bug 1226455](https://bugzil.la/1226455)).
- Das Attribute [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) des {{HTMLElement("input")}}-Elements verwendet jetzt den `'u'` Parameter im zugrunde liegenden JavaScript-{{jsxref("RegExp")}} ([Firefox Bug 1227906](https://bugzil.la/1227906)).
- Um eine Abänderung der Spezifikationen zu treffen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Reference/Elements/track#kind)-Attributs des {{HTMLElement('track')}}-Elements nun wie `"metadata"` anstelle von `"subtitles"` behandelt ([Firefox Bug 1269712](https://bugzil.la/1269712)).
- Das Attribut [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) des {{HTMLElement("iframe")}}-Elements unterstützt nun die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Mikrodata-Attribute und die Microdata-API wurden entfernt ([Firefox Bug 909633](https://bugzil.la/909633)).
- Das `referrerpolicy`-Attribut des {{HTMLElement("a")}}-Elements unterstützt nun die Werte `'no-referrer-when-downgrade'` und `'origin-when-cross-origin'` ([Firefox Bug 1178337](https://bugzil.la/1178337)).
- Das Inhalt-Attribut `form` des {{HTMLElement("label")}}-Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft existiert weiterhin, gibt jetzt aber das Formular zurück, mit dem das Kontrollkästchen des Labels assoziiert ist, falls ein Kontrollkästchen vorhanden ist (und falls dieses Kontrollkästchen einem Formular zugeordnet ist) ([Firefox Bug 1268852](https://bugzil.la/1268852)).

### CSS

- Hinzugefügt {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es ermöglichen, die horizontalen und vertikalen Offsets separat anzugeben, an denen ein Hintergrundbild gezeichnet werden soll; diese sind Komponenten von {{cssxref("background-position")}} ([Firefox Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die Schlüsselwörter `round` und `space` in {{cssxref("background-repeat")}} hinzugefügt ([Firefox Bug 548372](https://bugzil.la/548372)).
- Auf {{cssxref("background-clip")}} ist das Schlüsselwort `text` nun standardmäßig aktiviert ([Firefox Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alpha-Kanal mithilfe von 4- und 8-stelligen CSS-Hex-Farbwerten (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} ist nun ohne Präfix verfügbar ([Firefox Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}}, können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}}-Werten interpolieren ([Firefox Bug 1110460](https://bugzil.la/1110460)).
- Die [`q`-Längeneinheit](/de/docs/Web/CSS/Reference/Values/length#q) wurde hinzugefügt ([Firefox Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} ist nun ohne Präfix ([Firefox Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, das `word-wrap` ersetzt, das weiterhin als alternativer Name unterstützt wird ([Firefox Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle Implementierung von [CSS Grids](/de/docs/Web/CSS/Guides/Grid_layout) wurde verbessert:
  - Implementiert {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox Bug 1266268](https://bugzil.la/1266268)).
  - Implementierte Unterstützung für Grid-Layout für die `baseline` und `last-baseline` (auch bekannt als "baseline self-alignment") Werte der Eigenschaft {{cssxref("align-self")}}, {{cssxref("justify-self")}} ([Firefox Bug 1221525](https://bugzil.la/1221525)).
  - Implementierte Grundlinien-Inhaltsausrichtung von Grid-Items ([Firefox Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle Implementierung von [CSS Masks](/de/docs/Web/CSS/Guides/Masking) wurde verbessert:
  - Die Eigenschaft {{cssxref("mask-origin")}} verwendet nun `border-box` anstelle von `padding-box` als Initialwert, um die Spezifikationen zu erfüllen ([Firefox Bug 1258286](https://bugzil.la/1258286)).
  - Die Eigenschaft {{cssxref("mask-repeat")}} unterstützt nun die Werte `space` und `round` ([Firefox Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem, das die Animation des Attributs {{cssxref("mask-position")}} verhinderte, wurde behoben ([Firefox Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenz zur Steuerung von {{cssxref("text-emphasis")}} wurde entfernt, sodass die Unterstützung für diese Eigenschaft nicht mehr deaktiviert werden kann ([Firefox Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015-{{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}-{{jsxref("Proxy")}}-Traps wurden implementiert ([Firefox Bug 888969](https://bugzil.la/888969)).
- Die ES2015-Methoden [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search) und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split), sowie der Getter [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) wurden implementiert ([Firefox Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardisierte `flags`-Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der Methode {{jsxref("Date.parse()")}} beim Parsen von zweistelligen Jahren wurde geändert, um mehr Interoperabilität mit dem Google Chrome-Browser zu erzielen ([Firefox Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML-DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox Bug 1224186](https://bugzil.la/1224186)).
- Einleitende `'?'`-Zeichen werden nun im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)-Konstruktors ignoriert ([Firefox Bug 1268361](https://bugzil.la/1268361)).
- Der Wert, der von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) für URLs unter Nutzung des `blob:`-Schemas zurückgegeben wird, ist nicht mehr fälschlicherweise `null`, sondern entspricht stattdessen dem Ursprung der URL, die durch Entfernen des führenden `blob:` gebildet wird ([Firefox Bug 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)-Eigenschaft jetzt `'prerender'` zurück ([Firefox Bug 1069772](https://bugzil.la/1069772)).
- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4-Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox Bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist das [`Window`](/de/docs/Web/API/Window)-Feature `scrollbars` beim Aufruf von [`Window.open()`](/de/docs/Web/API/Window/open) aktiviert. In der Vergangenheit wurde dringend empfohlen, es zu aktivieren, es war jedoch nicht standardmäßig ([Firefox Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht standardmäßige_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde hinzugefügt, die das framesteuere Weise Durchsuchen von Videoinhalten ermöglicht ([Firefox Bug 1235301](https://bugzil.la/1235301)). Es wird empfohlen, diese Methode zu testen, um besser zu verstehen, wie nützlich sie ist. Verwenden Sie sie jedoch _nicht_ in Produktionscode!
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft gibt jetzt das Formular zurück, mit dem das Kontrollkästchen des Labels assoziiert ist, falls ein Kontrollkästchen vorhanden ist (und falls dieses Kontrollkästchen einem Formular zugeordnet ist). Früher wurden Labels direkt mit Formularen über diese Eigenschaft assoziiert ([Firefox Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions`, wurde hinzugefügt ([Firefox Bug 1266164](https://bugzil.la/1266164) und [Firefox Bug 1266066](https://bugzil.la/1266066)).
- Die auf Lautstärke bezogenen Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"` und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Einklang mit dem neuesten Entwurf der UI Events-Spezifikation ([Firefox Bug 1272578](https://bugzil.la/1272578)). Siehe [Code-Werte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste verfügbarer Tastencodes.
- Die Tasten, die zuvor als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI Events-Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox Bug 1272599](https://bugzil.la/1272599)). Siehe [Code-Werte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste verfügbarer Tastencodes.
- Die Tastencodes `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und ungenutzt waren ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Tastencodes und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifier-Tasten darzustellen ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Zwei Tastenwerte für Multimedia-Nummernblock-Tasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastenwerte wurden für Audiosteuerungstasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"` und `"AudioTrebleUp"` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Tastenwerte wurden für diese Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp` und `MicrophoneVolumeMute` ([Firefox Bug 123919](https://bugzil.la/123919)).
- Neue Tastenwerte wurden hinzugefügt, um Sprachsteuerungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode` und `VoiceDial` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungstastenwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer` und `DVR` ([Firefox Bug 1232919](https://bugzil.la/1232919)).
- Der Tastenwert `MediaSelect` wurde durch den Standard-Tastenwert `LaunchMediaPlayer` ersetzt ([Firefox Bug 1272592](https://bugzil.la/1272592)).
- Weitere Medienplayer-Tastenwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut` und `NavigatePrevious` ([Firefox Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die Eigenschaft [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter), die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist nun standardmäßig aktiviert und muss nicht mehr mit einer Präferenz aktiviert werden ([Firefox Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) für [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) wurde implementiert ([Firefox Bug 1129332](https://bugzil.la/1129332)).
- Das Ereignis [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event), das gesendet wird, wenn ein Versuch zur Erstellung eines WebGL-Kontextes fehlschlägt, wurde implementiert ([Firefox Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schiefgelaufen ist, sowohl für Debugging-Zwecke als auch für die Behandlung von Produktfehlern.

#### IndexedDB

- IndexedDB-Indizes können jetzt umbenannt werden; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name)-Eigenschaft ist nicht mehr schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).
- Ebenso können jetzt auch [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenannt werden; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name)-Eigenschaft ist nicht mehr schreibgeschützt ([Firefox Bug 1118028](https://bugzil.la/1118028)).

#### Service Worker und verwandte

- Das [`Response`](/de/docs/Web/API/Response)-Objekt der [Fetch API](/de/docs/Web/API/Fetch_API) implementiert jetzt die Eigenschaft [`redirected`](/de/docs/Web/API/Response/redirected), die angibt, ob die Antwort für eine umgeleitete Anfrage ist. Bitte überprüfen Sie die sicherheitsrelevanten Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox nicht mehr den 'push' `PermissionDescriptor`-Dictionary-Typ (in der Spezifikation als `PushPermissionDescriptor` bezeichnet); das liegt daran, dass Firefox stattdessen auf einem Quote-System zur Steuerung des `userVisibleOnly`-Status basiert und es zu einem Fehler führte, wenn es auf eine `PushPermissionDescriptor`-Instanz stieß ([Firefox Bug 1266821](https://bugzil.la/1266821)). Mit dem Entfernen dieses Dictionarys ignoriert Firefox es nun.

#### Media Streams

- Früher war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, in Fällen erfolgreich war, in denen der Benutzer nur eine der beiden Typen von Hardware zur Verfügung hatte. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, erfolgreich war, obwohl der Benutzer den Zugriff auf eines, aber nicht beide der passenden Geräte verweigerte. Dies wurde behoben ([Firefox Bug 802326](https://bugzil.la/802326)). Dies beinhaltet auch kleinere Benutzeroberflächenänderungen, um die Optionen "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer nach Berechtigungen gefragt wird.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um es zu ermöglichen, Tracks hinzuzufügen, die nicht Bestandteil der angegebenen Streams sind, die zur Verbindung hinzugefügt werden. Stattdessen werden die Streams verwendet, um die Tracks am empfangenden Ende der Verbindung zu gruppieren ([Firefox Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die API [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ist nun standardmäßig in Nightly aktiviert. Sie ist in anderen Versionen von Firefox 49 nicht standardmäßig verfügbar ([Firefox Bug 1271487](https://bugzil.la/1271487)).

#### Sonstige

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, wenn die Präferenz `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox Bug 669259](https://bugzil.la/669259)).
- Die nur in Firefox OS verfügbare Data-Store-API wurde entfernt ([Firefox Bug 1261009](https://bugzil.la/1261009)).
- Die Event-Handler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden von [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; jedoch wurden die präfixierten Versionen dieser Event-Handler zur Kompatibilität belassen ([Firefox Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies nicht standardmäßig aktiviert ist, sondern hinter der `full-screen-api.unprefix.enabled`-Präferenz ([Firefox Bug 1268749](https://bugzil.la/1268749)) verborgen ist.
- Die veraltete Eigenschaft `Document.mozFullScreen` wurde zu [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) ohne Präfix geändert [Firefox Bug 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies nicht standardmäßig aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` ([Firefox Bug 1268749](https://bugzil.la/1268749)) versteckt ist.
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen nicht mehr eine Ausnahme, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist eine No-Op ([Firefox Bug 1269798](https://bugzil.la/1269798)).
- Jegliche Art von Daten kann nun mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) aus der Zwischenablage abgerufen werden: Früher wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den zwei Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation komplett neu geschrieben wurde ([Firefox Bug 1271846](https://bugzil.la/1271846)).
- Um mit der Spezifikation zu übereinstimmen, gibt die Eigenschaft [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) nun ein `PositionAlign`-Enum anstelle eines `Align`-Enums zurück ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsynthese-Teil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist nun standardmäßig aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_API) ist nun standardmäßig in Nightly verfügbar (allerdings nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) Ereignis-Handler werden nun für [Web Manifests](/de/docs/Web/Progressive_web_apps/Manifest) unterstützt ([Firefox Bug 1265279](https://bugzil.la/1265279)).
- Bei der Verwendung der Methode [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist es nun möglich anzugeben, ob die resultierende periodische Welle normalisiert werden soll, indem ein Dictionary-Objekt als dritter Parameter angegeben wird, das einen einzelnen Parameter enthält — `{disableNormalization: true}` ([Firefox Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT-API gibt[`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) nun korrekt ein `PositionAlignSetting`-Enum entsprechend der Spezifikation zurück; zuvor gab es ein `AlignSetting`-Enum zurück ([Firefox Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsynthese-Teil der Web Speech API ist nun standardmäßig in allen Desktop-Browsern aktiviert ([Firefox Bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null-Zeitachse ([Firefox Bug 1096776](https://bugzil.la/1096776)).
- Die Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) von [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) wird in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten Elemente `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` wurde entfernt ([Firefox Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für die ordnungsgemäße Funktion von Websites nicht erforderlich sind. Dieses Verhalten, das durch die Präferenz `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, trägt dazu bei, die Leistung von Websites und allgemein von Firefox zu verbessern, ohne einen wesentlichen Einfluss auf die Benutzerfreundlichkeit der Websites zu haben. Es trägt auch dazu bei, die Stabilität des Browser-Erlebnisses zu verbessern, indem eine Hauptursache für Abstürze eliminiert wird. Die blockierten Flash-Module umfassen mehrere Module, die nur zu Fingerabdruckzwecken verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in der Zukunft könnte die Liste der blockierten Module erweitert werden. Details hierzu finden Sie im [Firefox Bug 1275591](https://bugzil.la/1275591).

Dies ist der nächste Schritt auf der Reise in eine plugin-freie Zukunft. HTML ist inzwischen so weit fortgeschritten, dass Plugins in Zukunft nicht mehr benötigt werden, um Aufgaben zu erledigen.

## HTTP

- Die Direktive [`Cache-Control: immutable`](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) wurde implementiert ([Firefox Bug 1267474](https://bugzil.la/1267474)). Weitere Informationen finden Sie auch in diesem [Blogbeitrag](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html).
- Der `require-sri-for` {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox Bug 1265318](https://bugzil.la/1265318)).

## Netzwerk

- Die Implementierung der [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) wurde aktualisiert. Nun unterstützen `weekdayRange`, `dateRange` und `timeRange` "umgekehrte Bereiche", zum Beispiel wird `weekdayRange("SAT", "MON")` `true` auswerten, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext), die angibt, ob ein Kontext in der Lage ist, Funktionen zu nutzen, die [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) erfordern, wurde implementiert ([Firefox Bug 1162772](https://bugzil.la/1162772)).

## Kompatibilität

Um die Kompatibilität mit vorhandenen Inhalten zu verbessern, akzeptiert Firefox nun einige WebKit-präfixierte Eigenschaften und Attribute.

- Die folgenden Eigenschaften funktionieren jetzt auch mit `-webkit`-Präfix:
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

- Die folgenden Eigenschaften werden auf die äquivalente Eigenschaft mit Präfix abgebildet:
  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}}-Werte:
  - Die folgenden Funktionen werden auf ihre nicht-präfixierten Äquivalente abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()` und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und zu einem regulären Verlauf umgewandelt).

- Die folgenden {{cssxref("display")}}-Werte werden umgewandelt:
  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und werden nicht zu einem nicht-präfixierten Äquivalent zugeordnet):
  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die Schnittstelle `WebKitCSSMatrix` ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).
- Die folgenden Media-Query-Features wurden implementiert:
  - `-webkit-min-device-pixel-ratio` als Alias von [`min-resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) mit dem gleichen Wert (in `dppx`), obwohl dieses Feature [standardmäßig deaktiviert](https://bugzil.la/1237720) ist (hinter about:config Pref `layout.css.prefixes.device-pixel-ratio-webkit`).
  - `-webkit-max-device-pixel-ratio` als Alias von [`max-resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) mit dem gleichen Wert (in `dppx`); dieses Feature ist ebenfalls standardmäßig deaktiviert, hinter der gleichen about:config Pref.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d), immer übereinstimmend, was die Unterstützung von 3D-Transformationen anzeigt.

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Diese bietet Zugriff auf den Browserverlauf mit Methoden, die für die Suche im Verlauf, das Abrufen von Informationen über zuvor besuchte Seiten und das Hinzufügen und Entfernen von Verlaufs-Einträgen zur Verfügung stehen.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde zur Tabs-API hinzugefügt. Diese Methode ermöglicht das Entfernen von CSS, das zuvor durch Aufrufen von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, der nur in Code aktiv ist, der in XBL oder im Firefox-Chrome ausgeführt wird, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird. ([Firefox Bug 1274520](https://bugzil.la/1274520))

### Sonstige

_Keine Änderung._
