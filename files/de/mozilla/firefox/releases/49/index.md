---
title: Firefox 49 für Entwickler
slug: Mozilla/Firefox/Releases/49
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 49 wurde am 20. September 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- JavaScript-Fehler, die in die Konsole protokolliert werden, [bieten jetzt einen \[Learn more\]-Link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) für zusätzliche Debugging-Hilfe ([Firefox-Bug 1179876](https://bugzil.la/1179876)).
- CSS-Autovervollständigung: mehr Vorschläge im Autovervollständigungspopup anzeigen ([Firefox-Bug 1260419](https://bugzil.la/1260419)).
- Der Animationsinspektor zeigt jetzt [Informationen zur Animationsleistung](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in den DevTools an ([Firefox-Bug 1254408](https://bugzil.la/1254408)).
- Das [Kontextmenü des Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) wurde neu organisiert, um es übersichtlicher und benutzerfreundlicher zu gestalten ([Firefox-Bug 1211613](https://bugzil.la/1211613)).
- Der Inspektor unterstützt jetzt die `#RRGGBBAA`- und `#RGBA`-Syntax für Farbwerte ([Firefox-Bug 1271191](https://bugzil.la/1271191)).
- Die Entwicklerwerkzeuge zeigen keine selbstschließenden Tags (wie `br` und `img`) mehr an, als hätten sie ein abschließendes Tag auf HTML-Seiten; das Verhalten bleibt auf XHTML-Seiten unverändert ([Firefox-Bug 820926](https://bugzil.la/820926)).
- Verbesserungen bei der Barrierefreiheit!

  - Das Werkzeug sorgt besser dafür, dass der Tastaturfokus sichtbarer ist ([Firefox-Bug 1242851](https://bugzil.la/1242851)).
  - Barrierefreiheitslabels wurden zu unlabeled Kontrollen hinzugefügt ([Firefox-Bug 1242715](https://bugzil.la/1242715)).
  - Richtige Baumansicht-Semantiken und Tastaturnavigation zur Markup-Ansicht des Inspektors hinzugefügt ([Firefox-Bug 1242694](https://bugzil.la/1242694)).

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt eine Spalte "Ursache", die angibt, was jede einzelne Netzwerkanfrage verursacht hat ([Firefox-Bug 1134073](https://bugzil.la/1134073)).
- Auf der Add-ons-Seite _about:debugging_ ist die Schaltfläche "Neu laden" nur für temporäre Add-ons aktiviert. Für alle anderen Add-ons wird sie deaktiviert ([Firefox-Bug 1273184](https://bugzil.la/1273184)).
- Auf der Seite _about:debugging_ Arbeiter wird eine Warnmeldung im Abschnitt Service Workers angezeigt, wenn [Service Workers inkompatibel](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) mit der aktuellen Browserkonfiguration sind ([Firefox-Bug 1266415](https://bugzil.la/1266415)).
- _about:debugging_ hat jetzt eine [neue Tabs-Seite](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs), die eine vollständige Liste aller in der aktuellen Firefox-Instanz geöffneten, debugfähigen Tabs bereitstellt ([Firefox-Bug 1266128](https://bugzil.la/1266128)).
- Die Option "_Disable Cache_" in den [Erweiterten Einstellungen des Werkzeugs](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) wurde in "_Disable HTTP Cache_" umbenannt, um klarzustellen, dass dies den HTTP-Cache betrifft, und nicht [Service Workers](/de/docs/Web/API/Service_Worker_API)/die [Cache API](/de/docs/Web/API/Cache) (Bug 1253018).
- Der [Speicher-Inspektor erlaubt es nun IndexedDB-Datenbanken zu löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) über deren eigene Kontextmenüs ([Firefox-Bug 1205123](https://bugzil.la/1205123)) und zeigt Warnmeldungen an, wenn die IndexedDB aus irgendeinem Grund nicht gelöscht werden kann (zum Beispiel, wenn noch aktive Verbindungen bestehen) ([Firefox-Bug 1268460](https://bugzil.la/1268460)).

### HTML

- Unterstützung für die {{HTMLElement("details")}}- und {{HTMLElement("summary")}}-Elemente hinzugefügt ([Firefox-Bug 1226455](https://bugzil.la/1226455)).
- Das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut des {{HTMLElement("input")}}-Elements verwendet nun den `'u'`-Parameter im zugrunde liegenden JavaScript-{{jsxref("RegExp")}} ([Firefox-Bug 1227906](https://bugzil.la/1227906)).
- Um eine Spezifikationsänderung anzupassen, wird ein ungültiger Wert des [`kind`](/de/docs/Web/HTML/Element/track#kind)-Attributs des {{HTMLElement('track')}}-Elements jetzt wie `"metadata"` behandelt anstelle von `"subtitles"` ([Firefox-Bug 1269712](https://bugzil.la/1269712)).
- Das [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}}-Elements unterstützt jetzt die Werte `'allow-popups-to-escape-sandbox'` und `'allow-modals'` ([Firefox-Bug 1190641](https://bugzil.la/1190641)).
- Unterstützung für Microdata-Attribute und die Microdata API wurden entfernt ([Firefox-Bug 909633](https://bugzil.la/909633)).
- Das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-Attribut auf dem {{HTMLElement("a")}}-Element unterstützt jetzt die Werte `'no-referrer-when-downgrade`' und `'origin-when-cross-origin'` ([Firefox-Bug 1178337](https://bugzil.la/1178337)).
- Das [`form`](/de/docs/Web/HTML/Element/label#form)-Inhaltsattribut des {{HTMLElement("label")}}-Elements wurde entfernt. Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft existiert weiterhin, gibt nun jedoch das Formular zurück, dem das Steuerungselement des Labels zugeordnet ist, sofern ein Steuerungselement vorhanden ist (und dieses Steuerungselement einem Formular zugeordnet ist) ([Firefox-Bug 1268852](https://bugzil.la/1268852)).

### CSS

- Hinzugefügte {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}}, die es ermöglichen, die horizontalen und vertikalen Versatzwerte eines Hintergrundbildes getrennt anzugeben; dies sind Komponenten von {{cssxref("background-position")}} ([Firefox-Bug 550426](https://bugzil.la/550426)).
- Unterstützung für die `round`- und `space`-Schlüsselwörter für {{cssxref("background-repeat")}} hinzugefügt ([Firefox-Bug 548372](https://bugzil.la/548372)).
- Auf {{cssxref("background-clip")}} ist das Schlüsselwort `text` nun standardmäßig aktiviert ([Firefox-Bug 1264905](https://bugzil.la/1264905)).
- Unterstützung für die Angabe von Farben mit einem Alphakanal unter Verwendung von 4- und 8-stelligen CSS-Hex-[Farb](/de/docs/Web/CSS/color_value)-Werten (#RRGGBBAA und #RGBA) hinzugefügt ([Firefox-Bug 567283](https://bugzil.la/567283)).
- Die Pseudoklasse {{cssxref(":dir")}} wurde unverändert übernommen ([Firefox-Bug 859301](https://bugzil.la/859301)).
- In unserer experimentellen Implementierung (noch nicht standardmäßig aktiviert) von {{cssxref("clip-path")}} können wir nun zwischen {{cssxref("&lt;basic-shape&gt;")}}-Werten interpolieren ([Firefox-Bug 1110460](https://bugzil.la/1110460)).
- Die [`q`-Längeneinheit](/de/docs/Web/CSS/length#q) hinzugefügt ([Firefox-Bug 1274526](https://bugzil.la/1274526)).
- Die Eigenschaft {{cssxref("text-align-last")}} wurde unverändert übernommen ([Firefox-Bug 1039541](https://bugzil.la/1039541)).
- Unterstützung für {{cssxref("overflow-wrap")}} hinzugefügt, ersetzt `word-wrap`, das weiterhin als alternativer Name unterstützt wird ([Firefox-Bug 955857](https://bugzil.la/955857)).
- Unsere experimentelle [CSS Grids](/de/docs/Web/CSS/CSS_grid_layout)-Implementierung wurde verbessert:

  - {{cssxref("&lt;percentage&gt;")}} für die Eigenschaften `grid-gap`, `grid-row-gap` und `grid-column-gap` implementiert ([Firefox-Bug 1266268](https://bugzil.la/1266268)).
  - Unterstützt jetzt Gitterlayout für {{cssxref("align")}}, {{cssxref("justify-self")}}: `baseline` und `last-baseline` (alias "baseline self-alignment") ([Firefox-Bug 1221525](https://bugzil.la/1221525)).
  - Baseline-Inhaltsausrichtung für Gitterelemente implementiert ([Firefox-Bug 1256429](https://bugzil.la/1256429)).

- Unsere experimentelle [CSS Masks](/de/docs/Web/CSS/CSS_masking)-Implementierung wurde verbessert:

  - Die Eigenschaft {{cssxref("mask-origin")}} verwendet jetzt `border-box` statt `padding-box` als Anfangswert, um der Spezifikation zu entsprechen ([Firefox-Bug 1258286](https://bugzil.la/1258286)).
  - Die Eigenschaft {{cssxref("mask-repeat")}} unterstützt jetzt die Werte `space` und `round` ([Firefox-Bug 1258626](https://bugzil.la/1258626)).
  - Ein Problem behoben, das verhinderte, dass das Attribut {{cssxref("mask-position")}} animiert werden konnte ([Firefox-Bug 1273804](https://bugzil.la/1273804)).

- Die Präferenz zur Steuerung von {{cssxref("text-emphasis")}} wurde entfernt, sodass die Unterstützung dieser Eigenschaft nicht mehr deaktivierbar ist ([Firefox-Bug 1229609](https://bugzil.la/1229609)).

### JavaScript

- Die ES2015-{{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}- und {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}-{{jsxref("Proxy")}}-Fallen wurden implementiert ([Firefox-Bug 888969](https://bugzil.la/888969)).
- Die ES2015-Methoden {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}, {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}, {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}, und {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}} sowie der {{jsxref("RegExp.@@species", "RegExp[@@species]")}}-Getter wurden implementiert ([Firefox-Bug 887016](https://bugzil.la/887016)).
- Das veraltete, nicht standardisierte `flags`-Argument von `String.prototype.` {{jsxref("String.prototype.match", "match")}} / {{jsxref("String.prototype.search", "search")}} / {{jsxref("String.prototype.replace", "replace")}} wurde entfernt ([Firefox-Bug 1108382](https://bugzil.la/1108382)).
- Das Verhalten der {{jsxref("Date.parse()")}}-Methode beim Parsen von 2-stelligen Jahreszahlen wurde geändert, um mehr Interoperabilität mit dem Google Chrome-Browser zu erreichen ([Firefox-Bug 1265136](https://bugzil.la/1265136)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Methode [`DOMTokenList.supports()`](/de/docs/Web/API/DOMTokenList/supports) wurde hinzugefügt ([Firefox-Bug 1257849](https://bugzil.la/1257849)).
- Die Methode [`DOMTokenList.replace()`](/de/docs/Web/API/DOMTokenList/replace) wurde hinzugefügt ([Firefox-Bug 1224186](https://bugzil.la/1224186)).
- Führende `'?'`-Zeichen werden jetzt im Parameter des [`URLSearchParams()`](/de/docs/Web/API/URLSearchParams/URLSearchParams)-Konstruktors ignoriert ([Firefox-Bug 1268361](https://bugzil.la/1268361)).
- Der Rückgabewert von [`URL.origin`](/de/docs/Web/API/URL/origin), [`HTMLAnchorElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin), und [`HTMLAreaElement.origin`](/de/docs/Web/API/HTMLAnchorElement/origin) für URLs mit dem `blob:`-Schema ist nicht mehr fälschlicherweise `null`, sondern ist stattdessen der Ursprung der URL, der durch Entfernen des führenden `blob:` gebildet wird ([Firefox-Bug 1270451](https://bugzil.la/1270451)).
- Im Pre-Rendering-Modus gibt die Eigenschaft [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) nun `'prerender'` zurück ([Firefox-Bug 1069772](https://bugzil.la/1069772)).
- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).
- Die DOM4-Methoden [`Element.before`](/de/docs/Web/API/Element/before), [`Element.after`](/de/docs/Web/API/Element/after), [`Element.replaceWith`](/de/docs/Web/API/Element/replaceWith), [`Element.append`](/de/docs/Web/API/Element/append) und [`Element.prepend`](/de/docs/Web/API/Element/prepend) wurden implementiert ([Firefox-Bug 911477](https://bugzil.la/911477)).
- Die Methode `TouchList.identifiedTouch()` wurde entfernt ([Firefox-Bug 1188539](https://bugzil.la/1188539)).
- Standardmäßig ist das `scrollbars`-Feature des [`Window`](/de/docs/Web/API/Window) aktiviert, wenn [`Window.open()`](/de/docs/Web/API/Window/open) aufgerufen wird. In der Vergangenheit wurde empfohlen, es zu aktivieren, aber es war nicht standardmäßig aktiv ([Firefox-Bug 1257887](https://bugzil.la/1257887)).
- Die _experimentelle_ und _nicht-standardisierte_ Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame), die es ermöglicht, videoinhalt frameweise zu bearbeiten, wurde hinzugefügt ([Firefox-Bug 1235301](https://bugzil.la/1235301)). Sie sind ermutigt, mit dieser Methode zu experimentieren, um uns zu helfen zu verstehen, wie nützlich sie ist, aber _verwenden Sie sie nicht im Produktivcode!_
- Die [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form)-Eigenschaft gibt nun das Formular zurück, dem das Steuerungselement des Labels zugeordnet ist, wenn ein Steuerungselement vorhanden ist (und dieses Steuerungselement einem Formular zugeordnet ist). Früher wurden Labels mit dieser Eigenschaft direkt mit Formularen verbunden ([Firefox-Bug 1268852](https://bugzil.la/1268852)).
- Unterstützung für den dritten Parameter von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), entweder ein {{jsxref("Boolean")}} oder ein `EventListenerOptions` wurde hinzugefügt ([Firefox-Bug 1266164](https://bugzil.la/1266164) und [Firefox-Bug 1266066](https://bugzil.la/1266066)).
- Die Audio-Lautstärke-bezogenen Werte für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) wurden umbenannt. `"VolumeDown"` ist jetzt `"AudioVolumeDown"`, `"VolumeUp"` ist jetzt `"AudioVolumeUp"`, und `"VolumeMute"` ist jetzt `"AudioVolumeMute"`. Dies bringt Firefox in Übereinstimmung mit dem neuesten Entwurf der UI Events Spezifikation ([Firefox-Bug 1272578](https://bugzil.la/1272578)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tasten-Codes.
- Die vorher als `"MozHomeScreen"`, `"MozCameraFocusAdjust"` und `"MozPhoneCall"` bezeichneten Tasten haben jetzt offizielle Namen in der UI Events Spezifikation: `"GoHome"`, `"CameraFocus"` und `"Call"`. Firefox 49 wurde aktualisiert, um die neuen Namen zu verwenden ([Firefox-Bug 1272599](https://bugzil.la/1272599)). Siehe [Codewerte für Tastaturereignisse](/de/docs/Web/API/UI_Events/Keyboard_event_code_values) für eine vollständige Liste der verfügbaren Tasten-Codes.
- Die Tastenwerte `"Separator"` und `"MediaSkip"` wurden entfernt, da sie veraltet und ungenutzt waren ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Tastenwerte und die entsprechenden Tasten-Codes `"Hyper"` und `"Super"` wurden hinzugefügt, um diese Legacy-Modifikator-Tasten darzustellen ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Zwei Tastenwerte für Multimedia-Zahlenblock-Tasten wurden hinzugefügt: `"Key11"` und `"Key12"` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Die folgenden neuen Tastenwerte wurden für Audio-Steuertasten hinzugefügt: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, und `"AudioTrebleUp"` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Tastenwerte wurden für diese Mikrofon-Steuertasten hinzugefügt: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp`, und `MicrophoneVolumeMute` ([Firefox-Bug 123919](https://bugzil.la/123919)).
- Neue Tastenwerte wurden hinzugefügt, um Sprachsteuergeräte zu unterstützen: `SpeechCorrectionList` und `SpeechInputToggle` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden für spezielle Tasten auf Telefonen hinzugefügt: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode`, und `VoiceDial` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Diese neuen Anwendungstastenwerte wurden hinzugefügt: `LaunchContacts` und `LaunchPhone` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Neue Tastenwerte wurden zur Unterstützung von Fernsehgeräten hinzugefügt: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, und `DVR` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).
- Der Tastenwert `MediaSelect` wurde durch den Standard-Tastenwert `LaunchMediaPlayer` ersetzt ([Firefox-Bug 1272592](https://bugzil.la/1272592)).
- Zusätzliche Mediaplayer-Tastenwerte wurden ebenfalls hinzugefügt. Diese sind `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, und `NavigatePrevious` ([Firefox-Bug 1232919](https://bugzil.la/1232919)).

#### Canvas

- Die Eigenschaft [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter), die die Unterstützung für das Hinzufügen von Filtern zu einer Leinwand bietet, ist jetzt standardmäßig aktiviert und muss nicht mehr über eine Präferenz aktiviert werden ([Firefox-Bug 1173545](https://bugzil.la/1173545)).

#### WebGL

- Die Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} wurde implementiert ([Firefox-Bug 1129332](https://bugzil.la/1129332)).
- Das Ereignis [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event), das gesendet wird, wenn ein WebGL-Kontext-Erstellungsversuch fehlschlägt, wurde implementiert ([Firefox-Bug 1271478](https://bugzil.la/1271478)). Verwenden Sie dies, um zu verstehen, was schief gelaufen ist, sowohl zum Debuggen als auch zur Fehlerbehandlung in der Produktion.

#### IndexedDB

- Sie können jetzt IndexedDB-Indizes umbenennen; die [`IDBIndex.name`](/de/docs/Web/API/IDBIndex/name)-Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).
- Sie können auch jetzt [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)s umbenennen; die [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name)-Eigenschaft ist nicht mehr schreibgeschützt ([Firefox-Bug 1118028](https://bugzil.la/1118028)).

#### Service Workers und Verwandte

- Das [Fetch API](/de/docs/Web/API/Fetch_API)-Objekt [`Response`](/de/docs/Web/API/Response) implementiert jetzt die Eigenschaft [`redirected`](/de/docs/Web/API/Response/redirected), die anzeigt, ob die Antwort für eine Anfrage war, die umgeleitet wurde. Bitte überprüfen Sie die sicherheitsrelevanten Bemerkungen in der Dokumentation, bevor Sie diese Eigenschaft verwenden ([Firefox-Bug 1243792](https://bugzil.la/1243792)).
- In der [Permissions API](/de/docs/Web/API/Permissions_API) unterstützt Firefox nicht länger den 'push'-`PermissionDescriptor`-Dictionarytyp (im Spez als `PushPermissionDescriptor` bezeichnet); dies ist, weil Firefox stattdessen auf ein Quotasystem vertraut, um den `userVisibleOnly`-Status zu steuern, und einen Fehler auslöste, wenn es auf eine Instanz von `PushPermissionDescriptor` stieß ([Firefox-Bug 1266821](https://bugzil.la/1266821)). Mit diesem entfernten Dictionary ignoriert Firefox es jetzt.

#### Medienstreams

- In der Vergangenheit war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, in Fällen erfolgreich war, in denen der Benutzer nur einen der beiden Gerätetypen verfügbar hat. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)).
- In früheren Versionen von Firefox war es möglich, dass ein Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), der sowohl Audio als auch Video anfordert, erfolgreich war, selbst wenn der Benutzer dem Zugriff auf eines, aber nicht beide der passenden Geräte verweigerte. Dies wurde behoben ([Firefox-Bug 802326](https://bugzil.la/802326)). Dies betrifft auch kleinere Änderungen in der Benutzeroberfläche, um die Optionen "Kein Audio" oder "Kein Video" zu entfernen, wenn der Benutzer um Erlaubnis gebeten wird.
- Die Methode [`MediaStream.getTrackById()`](/de/docs/Web/API/MediaStream/getTrackById) wurde implementiert ([Firefox-Bug 1208390](https://bugzil.la/1208390)).

#### WebRTC

- Die Methode [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) wurde aktualisiert, um es zu ermöglichen, dass Tracks, die nicht Komponenten der angegebenen Streams sind, zur Verbindung hinzugefügt werden. Stattdessen werden die Streams verwendet, um Tracks am empfangenden Ende der Verbindung zu gruppieren ([Firefox-Bug 1271669](https://bugzil.la/1271669)).

#### Neue APIs

- Die API [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ist nun standardmäßig in Nightly aktiviert. Sie ist nicht standardmäßig in anderen Versionen von Firefox 49 verfügbar ([Firefox-Bug 1271487](https://bugzil.la/1271487)).

#### Andere

- [`XMLHttpRequest.getResponseHeader()`](/de/docs/Web/API/XMLHttpRequest/getResponseHeader) und [`XMLHttpRequest.getAllResponseHeaders()`](/de/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) geben leere Header zurück, falls die Präferenz `network.http.keep_empty_response_headers_as_empty_string` auf `true` gesetzt ist ([Firefox-Bug 669259](https://bugzil.la/669259)).
- Die Datenbank-API nur für Firefox OS wurde entfernt ([Firefox-Bug 1261009](https://bugzil.la/1261009)).
- Die Event-Handler `Document.onfullscreenchange` und `Document.onfullscreenerror` der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden von [`Element`](/de/docs/Web/API/Element) entfernt, da sie nie dort ausgelöst wurden; die vorgefertigten Versionen dieser Event-Handler wurden jedoch aus Kompatibilitätsgründen dort beibehalten ([Firefox-Bug 1270386](https://bugzil.la/1270386)). Beachten Sie, dass dies standardmäßig nicht aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die veraltete Eigenschaft `Document.mozFullScreen` wurde auf [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) unverändert ([Firefox-Bug 1269157](https://bugzil.la/1269157)). Beachten Sie, dass dies standardmäßig nicht aktiviert ist, sondern hinter der Präferenz `full-screen-api.unprefix.enabled` ([Firefox-Bug 1268749](https://bugzil.la/1268749)).
- Die schreibgeschützten Eigenschaften [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) lösen keine Ausnahme mehr aus, wenn versucht wird, ihre Werte zu ändern; stattdessen wird der neue Wert stillschweigend ignoriert und die Setter-Funktion ist ein No-Op ([Firefox-Bug 1269798](https://bugzil.la/1269798)).
- Alle Arten von Daten können nun mit [`DataTransfer.getData()`](/de/docs/Web/API/DataTransfer/getData) aus der Zwischenablage abgerufen werden: zuvor wurden nur Daten bestimmter MIME-Typen unterstützt [Firefox-Bug 860857](https://bugzil.la/860857).
- Unsere Implementierung der Frame Timing API, bestehend aus den beiden Schnittstellen `PerformanceCompositeTiming` und `PerformanceRenderTiming`, wurde entfernt, da die Spezifikation vollständig umgeschrieben wurde ([Firefox-Bug 1271846](https://bugzil.la/1271846)).
- Um der Spezifikation zu entsprechen, gibt die [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign)-Eigenschaft jetzt ein `PositionAlign`-Enum zurück anstelle eines `Align`-Enum ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsyntheseteil der [Web Speech API](/de/docs/Web/API/Web_Speech_API#speech_synthesis) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Die [Performance Timeline API](/de/docs/Web/API/Performance_Timeline) ist jetzt standardmäßig in Nightly verfügbar (jedoch nicht in Aurora, Beta oder Release).
- Das [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis und der [`Window.oninstall`](/de/docs/Web/API/Window/appinstalled_event)-Event-Handler werden jetzt für [Web Manifeste](/de/docs/Web/Manifest) unterstützt ([Firefox-Bug 1265279](https://bugzil.la/1265279)).
- Bei Verwendung der Methode [`AudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) der [Web Audio API](/de/docs/Web/API/Web_Audio_API) können Sie nun angeben, ob die resultierende periodische Welle normalisiert werden soll, indem Sie ein Wörterbuchobjekt als dritten Parameter einschließen, das einen einzigen Parameter enthält — `{disableNormalization: true}` ([Firefox-Bug 1265405](https://bugzil.la/1265405)).
- In der WebVTT API gibt [`VTTCue.positionAlign`](/de/docs/Web/API/VTTCue/positionAlign) jetzt korrekt ein `PositionAlignSetting`-Enum gemäß Spezifikation zurück; zuvor gab sie ein `AlignSetting`-Enum zurück ([Firefox-Bug 1276129](https://bugzil.la/1276129)).
- Der Sprachsyntheseteil der Web Speech API ist jetzt standardmäßig in allen Desktop-Browsern aktiviert ([Firefox-Bug 1268633](https://bugzil.la/1268633)).
- Der Konstruktor [`Animation()`](/de/docs/Web/API/Animation/Animation) der [Web Animations API](/de/docs/Web/API/Web_Animations_API) akzeptiert jetzt eine null-Zeitachse ([Firefox-Bug 1096776](https://bugzil.la/1096776)).
- Die Eigenschaft [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) [`target`](/de/docs/Web/API/KeyframeEffect/target) wird jetzt in Firefox unterstützt, wenn Sie [Web Animations](/de/docs/Web/API/Web_Animations_API) aktiviert haben ([Firefox-Bug 1067769](https://bugzil.la/1067769)).

### MathML

_Keine Änderung._

### SVG

- Unterstützung für die veralteten `<altGlyph>`, `<altGlyphDef>` und `<altGlyphItem>`-Elemente entfernt ([Firefox-Bug 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Keine Änderung._

### Plugins und Flash

Ab Firefox 49 blockiert Firefox standardmäßig bestimmte Arten von Flash-Inhalten, die für die gute Funktion von Websites nicht erforderlich sind. Dieses Verhalten, gesteuert durch die Präferenz `browser.safebrowsing.blockedURIs.enabled`, trägt dazu bei, die Leistung von Websites und Firefox im Allgemeinen zu verbessern, ohne die Benutzerfreundlichkeit der Website wesentlich zu beeinträchtigen. Es hilft auch dabei, die Stabilität des Surferlebnisses zu verbessern, indem eine Hauptursache für Abstürze beseitigt wird. Die blockierten Flash-Module umfassen mehrere, die nur für Fingerprinting-Zwecke verwendet werden, sowie eine Reihe von "Supercookie"-Modulen, und in der Zukunft kann es ausgeweitet werden, um mehr Arten von blockierten Modulen einzuschließen. Siehe [Firefox-Bug 1275591](https://bugzil.la/1275591) für Details.

Dies kennzeichnet den nächsten Schritt auf dem Weg in eine pluginfreie Zukunft. HTML ist sehr nah an dem Punkt, an dem Plugins nicht mehr benötigt werden, um Aufgaben zu erledigen.

## HTTP

- Die Direktive [`Cache-Control: immutable`](/de/docs/Web/HTTP/Headers/Cache-Control) wurde implementiert ([Firefox-Bug 1267474](https://bugzil.la/1267474)). Siehe auch diesen [Blogpost](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) für weitere Informationen.
- Der {{CSP("require-sri-for")}}-{{HTTPHeader("Content-Security-Policy")}} wurde implementiert ([Firefox-Bug 1265318](https://bugzil.la/1265318)).

## Netzwerken

- Die [Proxy-Auto-Konfigurationsdatei (PAC)](</de/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>)-Implementierung wurde aktualisiert. Jetzt unterstützen `weekdayRange`, `dateRange` und `timeRange` "umgekehrte Bereiche", zum Beispiel wird `weekdayRange("SAT", "MON")` `true` auswerten, wenn der aktuelle Tag Samstag, Sonntag oder Montag ist ([Firefox-Bug 1251332](https://bugzil.la/1251332)).

## Sicherheit

- Die Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext), die anzeigt, ob ein Kontext in der Lage ist, Funktionen zu nutzen, die [sichere Kontexte](/de/docs/Web/Security/Secure_Contexts) erfordern, wurde implementiert ([Firefox-Bug 1162772](https://bugzil.la/1162772)).

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

- Die folgenden Eigenschaften werden auf die entsprechenden präfixierten Eigenschaften abgebildet:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- Für {{cssxref("&lt;image&gt;")}}-Werte:

  - Die folgenden Funktionen werden ihren unpräfixierten Entsprechungen zugeordnet: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, und `-webkit-repeating-radial-gradient()`.
  - Das veraltete `-webkit-gradient` wird unterstützt (und in einen regulären Gradienten übersetzt).

- Die folgenden {{cssxref("display")}}-Werte werden übersetzt:

  - `-webkit-box` zu `-moz-box`
  - `-webkit-flex` zu `flex`
  - `-webkit-inline-box` zu `inline-flex`
  - `-webkit-inline-flex` zu `-moz-inline-flex`

- Die folgenden Eigenschaften werden unterstützt (und auf keine unpräfixierte Entsprechung abgebildet):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- Die `WebKitCSSMatrix`-Schnittstelle ist ein Alias für [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).
- Die folgenden Media Query-Features wurden implementiert:

  - `-webkit-min-device-pixel-ratio` als Alias für [`min-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) mit demselben Wert (in `dppx)`, obwohl dieses Feature [standardmäßig deaktiviert ist](https://bugzil.la/1237720) (hinter der about:config-Präferenz `layout.css.prefixes.device-pixel-ratio-webkit`).
  - `-webkit-max-device-pixel-ratio` als Alias für [`max-resolution`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#resolution) des gleichen Wertes (in `dppx`); auch dieses Feature ist standardmäßig deaktiviert, hinter derselben about:config-Präferenz.
  - [`-webkit-transform-3d`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-webkit-transform-3d) immer passend, als Anzeige für 3d-Transformationsunterstützung.

## Änderungen für Add-On- und Mozilla-Entwickler

### WebExtensions

- Unterstützung für die {{WebExtAPIRef("history")}} wurde hinzugefügt. Dies bietet Zugriff auf den Browserverlauf, mit Methoden zur Suche im Verlauf, zum Abrufen von Informationen über zuvor besuchte Seiten und zum Hinzufügen und Entfernen von Verlaufsdaten.
- Die Methode {{WebExtAPIRef("tabs.removeCSS()")}} wurde zur Tabs-API hinzugefügt. Diese Methode ermöglicht es, CSS zu entfernen, das zuvor durch Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

### Schnittstellen

- In [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ist der Wert `mozSystemGroup`, der nur im Code läuft, der in XBL oder im Firefox-Chrome aktiv ist, ein {{jsxref("Boolean")}}, der angibt, ob der Listener zur Systemgruppe hinzugefügt wird ([Firefox-Bug 1274520](https://bugzil.la/1274520)).

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
