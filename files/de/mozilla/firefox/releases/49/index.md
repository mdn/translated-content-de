---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: 25544baf59024e6b33879f4b303acf4539a94415
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- In die Konsole geloggte JavaScript-Fehler [bieten nun einen \[Erfahren Sie mehr\]-Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debugging-Hilfe ([Firefox bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: Mehr Vorschläge im Autovervollständigung-Popup anzeigen ([Firefox bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor zeigt jetzt [Informationen zur Animationsleistung](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den DevTools an ([Firefox bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um es übersichtlicher und benutzerfreundlicher zu gestalten ([Firefox bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt `#RRGGBBAA` und `#RGBA` Syntax für Farbwerte ([Firefox bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklertools zeigen keine selbstschließenden Tags mehr (wie {{HTMLElement("br")}} und {{HTMLElement("img")}}) als hätten sie ein Schlusstag auf HTML-Seiten an; das Verhalten bleibt für XHTML-Seiten unverändert ([Firefox bug 820926](https://bugzil.la/820926)).
- Verbesserungen der Barrierefreiheit!

  - Das Werkzeugkasten sorgt besser dafür, dass der Tastaturfokus sichtbarer ist ([Firefox bug 1242851](https://bugzil.la/1242851)).
  - Zugänglichkeits-Labels wurden zu nicht gekennzeichneten Steuerelementen hinzugefügt ([Firefox bug 1242715](https://bugzil.la/1242715)).
  - Semantiken für Baumansichten und Tastaturnavigation wurden zur Markup-Ansicht des Inspektors hinzugefügt ([Firefox bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun eine Spalte "Ursache", die einen Hinweis darauf gibt, was jede einzelne Netzwerkanfrage verursacht hat ([Firefox bug 1134073](https://bugzil.la/1134073)).
- Auf der _about:debugging_-Add-ons-Seite ist die Schaltfläche Neu laden nur für temporäre Add-ons aktiviert. Für alle anderen Add-ons wird sie deaktiviert ([Firefox bug 1273184](https://bugzil.la/1273184)).
- Auf der _about:debugging_-Workers-Seite wird im Abschnitt Service Workers eine Warnmeldung angezeigt, wenn [Service Worker mit der aktuellen Browserkonfiguration nicht kompatibel sind](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) ([Firefox bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Registerkarte Tabs](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller debugbaren Registerkarten in der aktuellen Firefox-Instanz bereitstellt ([Firefox bug 1266128](https://bugzil.la/1266128)).
- Die Option _Cache deaktivieren_ in den [Toolbox Advanced-Einstellungen](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in HTTP-Cache deaktivieren umbenannt, um klarzustellen, dass dies den HTTP-Cache und nicht [Service Worker](/de/docs/Web/API/Service_Worker_API)/die [Cache-API](/de/docs/Web/API/Cache) betrifft ([Bug 1253018](https://bugzil.la/1253018)).
- Der [Storage Inspector ermöglicht jetzt das Löschen von IndexedDB-Datenbanken](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über ihre eigenen Kontextmenüs ([Firefox bug 1205123](https://bugzil.la/1205123)) und zeigt Warnmeldungen an, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (beispielsweise, wenn noch aktive Verbindungen bestehen) ([Firefox bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}} und {{HTMLElement("summary")}} Elemente hinzugefügt ([Firefox bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut des {{HTMLElement("input")}}-Elements verwendet nun den `'u'` Parameter im zugrunde liegenden JavaScript {{jsxref("RegExp")}} ([Firefox bug 1227906](https://bugzil.la/1227906)).
- Um einer Spezifikationsänderung zu entsprechen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attributs des {{HTMLElement('track')}}-Elements jetzt wie `"metadata"` anstatt wie `"subtitles"` behandelt ([Firefox bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}} Elements unterstützt jetzt die `'allow-popups-to-escape-sandbox'` und `'allow-modals'` Werte ([Firefox bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata-API wurden entfernt ([Firefox bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-Attribut des {{HTMLElement("a")}}-Elements unterstützt jetzt `'no-referrer-when-downgrade`' und `'origin-when-cross-origin'` ([Firefox bug 1178337](https://bugzil.la/1178337)).
- Das [`form`](/de/docs/Web/HTML/Element/label#form)-Inhaltsattribut des {{HTMLElement("label")}}-Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft existiert weiterhin, gibt jetzt aber das Formular zurück, mit dem das Steuerelement des Labels assoziiert ist, wenn es ein Steuerelement gibt (und wenn dieses Steuerelement mit einem Formular assoziiert ist) ([Firefox bug 1268852](https://bugzil.la/1268852)).

### CSS

- {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} hinzugefügt, die es ermöglichen, die horizontalen und vertikalen Offsets, bei denen ein Hintergrundbild gezeichnet wird, separat anzugeben; diese sind Komponenten von {{cssxref("background-position")}} ([Firefox bug 550426](https://bugzil.la/550426)).
- Unterstützung für die `round` und `space` Schlüsselwörter zu {{cssxref("background-repeat")}} hinzugefügt ([Firefox bug 548372](https://bugzil.la/548372)).
- Bei {{cssxref("background-clip")}} ist das Schlüsselwort `text` jetzt standardmäßig aktiviert ([Firefox bug 1264905](https://bugzil.la/1264905)).
- Unterstützung hinzugefügt, um Farben mit einem Alphakanal unter Verwendung von 4- und 8-stelligen CSS-Hex-[Farbwerten](/de/docs/Web/CSS/color_value) (#RRGGBBAA und #RGBA) anzugeben ([Firefox bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde unpräfixiert ([Firefox bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir jetzt zwischen {{cssxref("&lt;basic-shape&gt;")}}-Werten interpolieren ([Firefox bug 1110460](https://bugzil.la/1110460)).
- Die [`q`-Längeneinheit](/de/docs/Web/CSS/length#q) hinzugefügt ([Firefox bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde unpräfixiert ([Firefox bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, als Ersatz für `word-wrap`, das weiterhin als Alternativname unterstützt wird ([Firefox bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout)-Implementierung wurde verbessert:

  - Implementierte {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` ([Firefox bug 1266268](https://bugzil.la/1266268)).
  - Implementierte Gitterlayout-Unterstützung für {{cssxref("align")}}, {{cssxref("justify-self")}}`:baseline` und `last-baseline` (auch bekannt als "Baseline-Selbstausrichtung") ([Firefox bug 1221525](https://bugzil.la/1221525)).
  - Implementierte Baseline-Inhalt-Ausrichtung für Gitterelemente ([Firefox bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS Masks](/de/docs/Web/CSS/CSS_masking)-Implementierung wurde verbessert:

  - Die {{cssxref("mask-origin")}}-Eigenschaft verwendet jetzt `border-box` anstelle von `padding-box` als Anfangswert, um der Spezifikation zu entsprechen ([Firefox bug 1258286](https://bugzil.la/1258286)).
  - Die {{cssxref("mask-repeat")}}-Eigenschaft unterstützt jetzt die Werte `space` und `round` ([Firefox bug 1258626](https://bugzil.la/1258626)).
  - Behoben: Ein Problem, das verhinderte, dass das {{cssxref("mask-position")}}-Attribut animiert wird ([Firefox bug 1273804](https://bugzil.la/1273804)).

- Die Einstellung zur Steuerung von {{cssxref("text-emphasis")}} wurde entfernt, so dass die Unterstützung dieser Eigenschaft nicht mehr deaktiviert werden kann ([Firefox bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} Fallen wurden implementiert ([Firefox bug 888969](https://bugzil.la/888969)).
- Die ES2015 [`RegExp.prototype[Symbol.match]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match), [`RegExp.prototype[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace), [`RegExp.prototype[Symbol.search]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search), und [`RegExp.prototype[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) Methoden, und [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) Getter wurden implementiert ([Firefox bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardmäßige `flags` Argument von `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der {{jsxref("Date.parse()")}} Methode beim Parsen von zweistelligen Jahren wurde geändert, um besser mit dem Google Chrome Browser interoperabel zu sein ([Firefox bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox bug 1257849](https://bugzil.la/1257849)).
- Die [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace)-Methode wurde hinzugefügt ([Firefox bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'` Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams) Konstruktors ignoriert ([Firefox bug 1268361](https://bugzil.la/1268361)).
- Der Wert, der durch [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin), und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) für URLs mit dem `blob:`-Schema zurückgegeben wird, ist nicht mehr fälschlicherweise `null`, sondern ist jetzt der Ursprung der URL, die durch Entfernen des führenden `blob:` gebildet wurde ([Firefox bug 1270451](https://bugzil.la/1270451)).
- Im Prerendering-Modus gibt die Eigenschaft [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) jetzt `'prerender'` zurück ([Firefox bug 1069772](https://bugzil.la/1069772)).
- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) wurde implementiert ([Firefox bug 1162772](https://bugzil.la/1162772)).
- Die DOM4 Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist die `scrollbars` [`Window`](/de/docs/Web/API/Window)-Funktion beim Aufruf von [`Window.open()`](/de/docs/Web/API/Window/open) aktiviert. In der Vergangenheit wurde die Aktivierung zwar dringend empfohlen, war aber nicht der Standard ([Firefox bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht standardmäßige_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde hinzugefügt, die es ermöglicht, frameweise durch Videoinhalte zu navigieren ([Firefox bug 1235301](https://bugzil.la/1235301)). Während Sie ermutigt werden, mit dieser Methode zu experimentieren, um zu verstehen, wie nützlich sie ist, _vermeiden Sie es, sie in Produktionscode zu verwenden_.
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft gibt jetzt das Formular zurück, mit dem das Steuerelement des Labels verknüpft ist, wenn es ein Steuerelement gibt (und wenn dieses Steuerelement mit einem Formular verknüpft ist). Zuvor waren Labels über diese Eigenschaft direkt mit Formularen verknüpft ([Firefox bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions` wurde hinzugefügt ([Firefox bug 1266164](https://bugzil.la/1266164) und [Firefox bug 1266066](https://bugzil.la/1266066)).
- Die Audio-Lautstärkenwerte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"`, und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Übereinstimmung mit dem neuesten Entwurf der UI-Events-Spezifikation ([Firefox bug 1272578](https://bugzil.la/1272578)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste verfügbarer Tastencodes.
- Die Tasten, die zuvor als `"MozHomeScreen"`, `"MozCameraFocusAdjust"`, und `"MozPhoneCall"` bezeichnet wurden, haben jetzt offizielle Namen in der UI-Events-Spezifikation: `"GoHome"`, `"CameraFocus"`, und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox bug 1272599](https://bugzil.la/1272599)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste verfügbarer Tastencodes.
- Die Schlüsselwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und unbenutzt waren ([Firefox bug 1232919](https://bugzil.la/1232919)).
- Schlüsselwerte und die entsprechenden Tastencodes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifikatorschlüssel darzustellen ([Firefox bug 1232919](https://bugzil.la/1232919)).
- Zwei Schlüsselwerte für Multimedia-Zifferntasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Schlüsselwerte wurden für Audiosteuerschlüssel hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, und `"AudioTrebleUp"` ([Firefox bug 123919](https://bugzil.la/123919)).
- Schlüsselwerte wurden für diese Mikrofonsteuerungstasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp`, und `MicrophoneVolumeMute` ([Firefox bug 123919](https://bugzil.la/123919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Sprachsteuerungsgeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um spezielle Tasten auf Telefonen zu unterstützen: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode`, und `VoiceDial` ([Firefox bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungsschlüsselwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox bug 1232919](https://bugzil.la/1232919)).
- Neue Schlüsselwerte wurden hinzugefügt, um Fernsehgeräte zu unterstützen: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, und `DVR` ([Firefox bug 1232919](https://bugzil.la/1232919)).
- Der Schlüsselwert `MediaSelect` wurde durch den Standard-`LaunchMediaPlayer`-Schlüsselwert ersetzt ([Firefox bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Medienschlüsselwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, und `NavigatePrevious` ([Firefox bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) Eigenschaft, die Unterstützung für das Hinzufügen von Filtern zu einem Canvas bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Präferenz aktiviert werden ([Firefox bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) Erweiterung wurde implementiert ([Firefox bug 1129332](https://bugzil.la/1129332)).
- Das [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event) Ereignis, das gesendet wird, wenn ein WebGL-Kontext-Erstellungsversuch fehlschlägt, wurde implementiert ([Firefox bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schief gelaufen ist, sowohl für das Debuggen als auch für die Produktionsfehlerbehandlung.

#### IndexedDB

- Sie können jetzt IndexedDB-Indexe umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox bug 1118028](https://bugzil.la/1118028)).
- Sie können jetzt auch [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name) Eigenschaft ist nicht mehr schreibgeschützt ([Firefox bug 1118028](https://bugzil.la/1118028)).

#### Service Worker und verwandte

- Das [`Response`](/de/docs/Web/API/Response) Objekt der [Fetch-API](/de/docs/Web/API/Fetch_API) implementiert jetzt die [`redirected`](/de/docs/Web/API/Response/redirected) Eigenschaft, die angibt, ob die Antwort auf eine weitergeleitete Anfrage erfolgt ist oder nicht. Bitte überprüfen Sie die sicherheitsbezogenen Hinweise in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox den 'push'-`PermissionDescriptor`-Wörterbuchtyp (im Standard als `PushPermissionDescriptor` bezeichnet) nicht mehr; dies liegt daran, dass Firefox stattdessen auf ein Quotasystem zum Steuern des `userVisibleOnly`-Status angewiesen ist und einen Fehler auslöste, wenn es auf eine `PushPermissionDescriptor`-Instanz stieß ([Firefox bug 1266821](https://bugzil.la/1266821)). Mit diesem entfernten Wörterbuch ignoriert Firefox es jetzt.

#### Medienströme

- In der Vergangenheit war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, erfolgreich war, wenn der Benutzer nur eine der beiden Hardwaretypen zur Verfügung hatte. Dies wurde behoben ([Firefox bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anforderte, erfolgreich war, selbst wenn der Benutzer den Zugriff auf eines, aber nicht beide der passenden Geräte verweigerte. Dies wurde behoben ([Firefox bug 802326](https://bugzil.la/802326)). Dies beinhaltet geringfügige Benutzeroberflächenänderungen, um die Optionen "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer um Berechtigungen gebeten wird.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um es zu ermöglichen, dass Tracks, die nicht Komponenten der angegebenen Streams sind, zur Verbindung hinzugefügt werden können. Stattdessen werden die Streams verwendet, um Tracks am empfangenden Ende der Verbindung zu gruppieren ([Firefox bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig in Nightly aktiviert. Sie ist nicht standardmäßig in anderen Versionen von Firefox 49 verfügbar ([Firefox bug 1271487](https://bugzil.la/1271487)).

#### Sonstiges

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, wenn die Präferenz `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox bug 669259](https://bugzil.la/669259)).
- Die nur für Firefox OS verfügbare Data Store API wurde entfernt ([Firefox bug 1261009](https://bugzil.la/1261009)).
- Die Ereignishandler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden von [`Element`](/de/docs/Web/API/Element) entfernt, da sie dort nie ausgelöst wurden; die mit Präfix versehenen Versionen dieser Ereignishandler wurden jedoch aus Kompatibilitätsgründen dort belassen ([Firefox bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der `full-screen-api.unprefix.enabled`-Präferenz steht ([Firefox bug 1268749](https://bugzil.la/1268749)).
- Die veraltete `Document.mozFullScreen`-Eigenschaft wurde in [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) unpräfixiert [Firefox bug 1269157](https://bugzil.la/1269157). Beachten Sie, dass dies noch nicht standardmäßig aktiviert ist, sondern hinter der `full-screen-api.unprefix.enabled`-Präferenz steht ([Firefox bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) werfen keine Ausnahme mehr, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist ein No-Op ([Firefox bug 1269798](https://bugzil.la/1269798)).
- Jede Art von Daten kann jetzt aus der Zwischenablage mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) abgerufen werden: zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation vollständig neu geschrieben wurde ([Firefox bug 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) Eigenschaft jetzt ein `PositionAlign`-Enum anstelle eines `Align`-Enums zurück ([Firefox bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsynthese-Teil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist jetzt standardmäßig in Nightly verfügbar (jedoch nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event) Ereignishandler werden jetzt für [Web Manifests](/de/docs/Web/Manifest) unterstützt ([Firefox bug 1265279](https://bugzil.la/1265279)).
- Bei Verwendung der Methode [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie jetzt angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Wörterbuchobjekt als drittes Parameter einschließen, welches einen einzelnen Parameter enthält — `{disableNormalization: true}` ([Firefox bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting` Enum gemäß Spezifikation zurück; zuvor gab es ein `AlignSetting` Enum zurück ([Firefox bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsynthese-Teil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox bug 1268633](https://bugzil.la/1268633)).
- Der [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null Zeitleiste ([Firefox bug 1096776](https://bugzil.la/1096776)).
- Die [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Eigenschaft [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderungen._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>` Elemente entfernt ([Firefox bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderungen._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für ein gutes Funktionieren von Websites nicht notwendig sind. Dieses Verhalten, das durch die Präferenz `browser.safebrowsing.blockedURIs.enabled` gesteuert wird, trägt dazu bei, die Leistung von Websites und Firefox im Allgemeinen zu verbessern, ohne die Benutzerfreundlichkeit der Websites erheblich zu beeinträchtigen. Es trägt auch dazu bei, die Stabilität des Browsing-Erlebnisses zu verbessern, indem eine Hauptursache für Abstürze eliminiert wird. Zu den blockierten Flash-Modulen gehören mehrere, die nur zu Fingerabdruckzwecken verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in Zukunft kann dies um weitere Arten von blockierten Modulen erweitert werden. Weitere Details finden Sie im [Firefox bug 1275591](https://bugzil.la/1275591).

Dies markiert den nächsten Schritt auf dem Weg zu einer zukunft ohne Plugins. HTML ist sehr nah an dem Punkt, an dem Plugins nicht mehr notwendig sein werden, um die Arbeit zu erledigen.

## HTTP

- Die [`Cache-Control: immutable`](/de/docs/Web/HTTP/Headers/Cache-Control) Direktive wurde implementiert ([Firefox bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blog-Beitrag](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Die {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox bug 1265318](https://bugzil.la/1265318)).

## Netzwerk

- Die Implementierung der [Proxy Auto-Configuration (PAC)](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) wurde aktualisiert. `weekdayRange`, `dateRange` und `timeRange` unterstützen jetzt "umgekehrte Bereiche", zum Beispiel wird `weekdayRange("SAT", "MON")` als `true` ausgewertet, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) Eigenschaft, die anzeigt, ob ein Kontext in der Lage ist, Funktionen zu verwenden, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox bug 1162772](https://bugzil.la/1162772)).

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

- Die folgenden Eigenschaften werden auf die äquivalente präfixierte Eigenschaft abgebildet:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}} Werte:

  - Die folgenden Funktionen werden auf ihre nicht prefixierten Äquivalente abgebildet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in ein reguläres Gradient umgewandelt)

- Die folgenden {{cssxref("display")}} Werte werden übersetzt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und werden nicht in ein nicht prefixed Pendant abgebildet):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix` Schnittstelle ist ein Alias von [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- Die folgenden Media Query Features wurden implementiert:

  - `-webkit-min-device-pixel-ratio` als Alias von [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit dem gleichen Wert (in `dppx`), obwohl dieses Feature [standardmäßig deaktiviert](https://bugzil.la/1237720) ist (hinter der about:config Präferenz `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` als Alias von [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx`); dieses Feature ist ebenfalls standardmäßig deaktiviert, hinter derselben about:config Präferenz.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d) passt immer, was 3D-Transform-Unterstützung anzeigt.

## Änderungen für Add-on und Mozilla Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf, mit Methoden zur Suche im Verlauf, Abrufen von Informationen über bereits besuchte Seiten sowie zum Hinzufügen und Entfernen von Verlaufseinträgen.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde der tabs API hinzugefügt. Diese Methode erlaubt das Entfernen von CSS, das zuvor durch den Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), der Wert `mozSystemGroup`, der nur im Code läuft, der in XBL oder im Firefox Chrome aktiv ist, ist ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird ([Firefox bug 1274520](https://bugzil.la/1274520)).

### Sonstiges

_Keine Änderungen._

## Ältere Versionen

{{Firefox_for_developers}}
