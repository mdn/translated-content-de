---
title: Firefox 58 für Entwickler
slug: Mozilla/Firefox/Releases/58
l10n:
  sourceCommit: 3ace1140e56edf33b97532a0ed1e7366d67a9099
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 58, die Entwickler betreffen. Firefox 58 wurde am 23. Januar 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklertools

- Der [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) ist nun standardmäßig aktiviert für Formen, die über {{cssxref("clip-path")}} erzeugt werden ([Firefox-Bug 1405339](https://bugzil.la/1405339)).
- Der [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hat jetzt einen Button zum [Pause-abspielen von Netzwerkverkehrs-Aufzeichnungen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#pausing-and-resume-network-traffic-recording) ([Firefox-Bug 1005755](https://bugzil.la/1005755)).
- Im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ist der "Flash"-Filter-Button nicht mehr verfügbar, und Flash-Anfragen sind im "Andere"-Filter enthalten ([Firefox-Bug 1413540](https://bugzil.la/1413540)).
- Der Code für den alten Responsive Design Mode (standardmäßig aktiviert vor Firefox 52) wurde jetzt aus den Devtools entfernt ([Firefox-Bug 1305777](https://bugzil.la/1305777)). Siehe [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) für Informationen zu den neuen Werkzeugen.
- Die Option, MDN-Dokumentationen aus dem CSS-Bereich des Seiteninspektors anzusehen, wurde entfernt ([Firefox-Bug 1382171](https://bugzil.la/1382171)) (war seit 55 deaktiviert, [Firefox-Bug 1352801](https://bugzil.la/1352801)).

### HTML

_Keine Änderungen._

### CSS

- Der {{cssxref("@font-face/font-display", "font-display")}} Deskriptor ist jetzt standardmäßig auf allen Plattformen verfügbar ([Firefox-Bug 1317445](https://bugzil.la/1317445)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Methode {{jsxref("Promise.prototype.finally()")}} wurde implementiert ([Firefox-Bug 1019116](https://bugzil.la/1019116)).
- Das Objekt {{jsxref("Intl/PluralRules", "Intl.PluralRules")}} wurde implementiert ([Firefox-Bug 1403318](https://bugzil.la/1403318)).
- Die Methode {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} wurde implementiert ([Firefox-Bug 1403319](https://bugzil.la/1403319)).
- Das Objekt {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} unterstützt jetzt die Option `hourCycle` und den Sprach-Tag `hc` ([Firefox-Bug 1386146](https://bugzil.la/1386146)).
- Der [optionale Catch-Binding-Vorschlag](https://github.com/tc39/proposal-optional-catch-binding) wurde implementiert ([Firefox-Bug 1380881](https://bugzil.la/1380881)).

### APIs

#### Neue APIs

- Die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) API wurde implementiert ([Firefox-Bug 1263722](https://bugzil.la/1263722)).

  - Gecko wurde auch eine Voreinstellung gegeben, die verwendet werden kann, um die Schnittstelle bei Bedarf zu deaktivieren — `dom.enable_performance_navigation_timing`, standardmäßig `true` ([Firefox-Bug 1403926](https://bugzil.la/1403926)).

#### DOM

- Fehler, die über Error-Objekte in bestimmten APIs gemeldet werden — zum Beispiel in der `error`-Eigenschaft von [`FileReader`](/de/docs/Web/API/FileReader), [`IDBRequest`](/de/docs/Web/API/IDBRequest), und [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), sowie bei fehlgeschlagenen Anfragen über bestimmte Methoden von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) — werden jetzt durch [`DOMException`](/de/docs/Web/API/DOMException)-Instanzen dargestellt. [`DOMError`](/de/docs/Web/API/DOMError) ist jetzt veraltet, da es aus der DOM4-Spezifikation entfernt wurde ([Firefox-Bug 1120178](https://bugzil.la/1120178)).
- Die [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart)-Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1191943](https://bugzil.la/1191943)).
- Zeitlimit-Drosselung im Hintergrund basierend auf einem Budget wurde implementiert — siehe [Vorgaben zur Unterstützung der Leistung von Hintergrundseiten](/de/docs/Web/API/Page_Visibility_API#policies_in_place_to_aid_background_page_performance) für mehr Details ([Firefox-Bug 1377766](https://bugzil.la/1377766)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Medien und WebRTC

- Die vorangestellte Version von [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) wurde entfernt; stellen Sie sicher, dass der Code auf den Standard-`srcObject` anstelle von `mozSrcObject` aktualisiert wird ([Firefox-Bug 1183495](https://bugzil.la/1183495)).
- Das Verwenden von [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack), um Tracks zu einem Stream hinzuzufügen, der mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogen wurde, und anschließend der Versuch, den resultierenden Stream aufzuzeichnen, funktioniert nun wie erwartet. Bisher wurden nur die ursprünglich im von `getUserMedia()` zurückgegebenen Stream enthaltenen Tracks in die aufgezeichneten Medien aufgenommen ([Firefox-Bug 1296531](https://bugzil.la/1296531)).
- Die [WebVTT](/de/docs/Web/API/WebVTT_API) [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Schnittstelle wurde immer beim Interpreten von WebVTT-Dateien erstellt, aber die resultierenden Regionen wurden bisher nicht genutzt. Beginnend mit Firefox 58 werden sie das aber, wenn Sie die Voreinstellung `media.webvtt.regions.enabled` aktivieren, indem Sie ihren Wert auf `true` setzen.

#### Canvas und WebGL

- Unterstützung für vorangestellte WebGL-Erweiterungen wurde entfernt ([Firefox-Bug 1403413](https://bugzil.la/1403413)):

  - Für `MOZ_WEBGL_compressed_texture_atc` verwenden Sie stattdessen `WEBGL_compressed_texture_atc`.
  - Für `MOZ_WEBGL_compressed_texture_pvrtc` verwenden Sie stattdessen [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc).
  - Für `MOZ_WEBGL_compressed_texture_s3tc` verwenden Sie stattdessen [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc).
  - Für `MOZ_WEBGL_depth_texture` verwenden Sie stattdessen [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture).
  - Für `MOZ_WEBGL_lose_context` verwenden Sie stattdessen [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context).

### HTTP

- [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) wird in {{httpheader("Content-Security-Policy-Report-Only")}} nicht mehr ignoriert ([Firefox-Bug 1380755](https://bugzil.la/1380755)).
- Firefox implementiert jetzt ein TLS-Handshake-Zeitlimit mit einem Standardwert von 30 Sekunden. Der Zeitlimitwert kann durch Bearbeiten der Voreinstellung `network.http.tls-handshake-timeout` in about:config variiert werden ([Firefox-Bug 1393691](https://bugzil.la/1393691)).
- Die [`worker-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src) CSP-Direktive wurde implementiert ([Firefox-Bug 1302667](https://bugzil.la/1302667)).
- Der [425: Too Early](/de/docs/Web/HTTP/Status/425) Statuscode und der dazugehörige {{httpheader("Early-Data")}} Anforderungsheader werden jetzt unterstützt ([Firefox-Bug 1406908](https://bugzil.la/1406908)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

- "Zum Startbildschirm hinzufügen" wird jetzt in Firefox für Android unterstützt, Teil der [Progressive Web Apps](/de/docs/Web/Progressive_web_apps)-Initiative ([Firefox-Bug 1212648](https://bugzil.la/1212648)).
- [WebAssembly](/de/docs/WebAssembly) verfügt jetzt über einen gestuften Compiler, der Ladezeit-Optimierungen bietet ([Firefox-Bug 1277562](https://bugzil.la/1277562)), und neue Streaming-APIs — [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) [Firefox-Bug 1347644](https://bugzil.la/1347644).

## Entfernungen aus der Web-Plattform

### HTML

- Sie können kein {{htmlelement("a")}} Element mehr innerhalb eines {{htmlelement("map")}} Elements verschachteln, um eine Hotspot-Region zu erstellen — stattdessen muss ein {{htmlelement("area")}} Element verwendet werden ([Firefox-Bug 1317937](https://bugzil.la/1317937)).

### CSS

- Die folgenden proprietären Mozilla-Systemmetrik-Pseudoklassen sind nicht mehr für Webinhalte verfügbar ([Firefox-Bug 1396066](https://bugzil.la/1396066)):

  - `:-moz-system-metric(images-in-menus)`
  - `:-moz-system-metric(mac-graphite-theme)`
  - `:-moz-system-metric(scrollbar-end-backward)`
  - `:-moz-system-metric(scrollbar-end-forward)`
  - `:-moz-system-metric(scrollbar-start-backward)`
  - `:-moz-system-metric(scrollbar-start-forward)`
  - `:-moz-system-metric(scrollbar-thumb-proportional)`
  - `:-moz-system-metric(touch-enabled)`
  - `:-moz-system-metric(windows-default-theme)`

- Die folgenden proprietären Mozilla-Media-Features sind nicht mehr für Webinhalte verfügbar ([Firefox-Bug 1396066](https://bugzil.la/1396066)):

  - `-moz-color-picker-available`
  - `-moz-is-glyph`
  - `-moz-mac-graphite-theme`
  - `-moz-mac-yosemite-theme`
  - `-moz-os-version`
  - `-moz-overlay-scrollbars`
  - `-moz-physical-home-button`
  - `-moz-scrollbar-end-backward`
  - `-moz-scrollbar-end-forward`
  - `-moz-scrollbar-start-backward`
  - `-moz-scrollbar-start-forward`
  - `-moz-scrollbar-thumb-proportional`
  - `-moz-swipe-animation-enabled`
  - `-moz-windows-accent-color-in-titlebar`
  - `-moz-windows-classic`
  - `-moz-windows-compositor`
  - `-moz-windows-default-theme`
  - `-moz-windows-glass`
  - `-moz-windows-theme`

- Die proprietäre Mozilla `:-moz-styleeditor-transitioning` Pseudoklasse ist nicht mehr für Webinhalte verfügbar ([Firefox-Bug 1396099](https://bugzil.la/1396099)).

### JavaScript

- Die nicht standardmäßige [`Date.prototype.toLocaleFormat()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#date_2) Methode wurde entfernt ([Firefox-Bug 818634](https://bugzil.la/818634)).
- Die nicht standardmäßigen und veralteten [`Object.prototype.watch()` und `Object.prototype.unwatch()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#object_2) Methoden wurden entfernt und funktionieren nicht mehr ([Firefox-Bug 638054](https://bugzil.la/638054)). Erwägen Sie stattdessen die Verwendung von [Settern und Gettern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) oder [Proxys](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy).
- Das [veraltete Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator), das `StopIteration` Objekt, die [veralteten Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und die nicht standardmäßige `Function.prototype.isGenerator()` Methode wurden entfernt. Nutzen Sie die ES2015 [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und standardkonforme [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) statt ([Firefox-Bug 1083482](https://bugzil.la/1083482), [Firefox-Bug 1413867](https://bugzil.la/1413867), [Firefox-Bug 1119777](https://bugzil.la/1119777)).
- Die nicht standardmäßigen [Array-Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und [Generator-Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) wurden entfernt ([Firefox-Bug 1414340](https://bugzil.la/1414340)).

### APIs

- Die proprietären `moz-blob` und `moz-chunked-text` Werte der [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) Eigenschaft wurden in Firefox 58 komplett entfernt ([Firefox-Bug 1397145](https://bugzil.la/1397145), [Firefox-Bug 1397151](https://bugzil.la/1397151), [Firefox-Bug 1120171](https://bugzil.la/1120171)).
- Die `dom.abortController.enabled` und `dom.abortController.fetch.enabled` Voreinstellungen, die die Bereitstellung der [Abort API-Funktionalität](/de/docs/Web/API/Fetch_API#aborting_a_fetch) steuerten, wurden jetzt entfernt, da diese Funktionen jetzt standardmäßig aktiviert sind ([Firefox-Bug 1402317](https://bugzil.la/1402317)).
- Die proprietäre `mozSrcObject` Eigenschaft wurde in Firefox 58 entfernt ([Firefox-Bug 1183495](https://bugzil.la/1183495)). Verwenden Sie die standardmäßige [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) Eigenschaft stattdessen.

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [browserSettings](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [browserSettings.webNotificationsDisabled](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled) wurde implementiert (Bug 1364942)

- [browsingData](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [browsingData.localStorage](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage) unterstützt jetzt das Löschen von localStorage nach Host (Bug 1388428)

- [pkcs11](/de/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11) API zur Verwaltung von Sicherheitsgeräten (Bug 1357391)
- privacy

  - Erste Partei Isolation kann jetzt durch `firstPartyIsolate` umgeschaltet werden (Bug 1409045)
  - Die Präferenz zur Fingerabdruck-Resistenz kann jetzt durch `resistFingerprinting` umgeschaltet werden (Bug [1397611](https://bugzil.la/1397611))

- tabs

  - [tabs.discard](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard) wurde implementiert (Bug 1322485)
  - `isArticle`, `isInReaderMode` Eigenschaften von Tab implementiert (Bug 1381992)
  - [toggleReaderMode](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)() Methode implementiert (Bug 1381992)
  - `openInReaderMode` Option für tabs.created implementiert (Bug 1408993)
  - tabs.onUpdated benachrichtigt jetzt beim Betreten/Verlassen des Lesemodus (Bug 1402921)

- theme

  - [getCurrent](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/getCurrent)() Methode zur Abfrage der aktuellen Theme-Eigenschaften (Bug [1349944](https://bugzil.la/1349944))
  - onUpdated-Methode zum Empfangen von WebExtension-Theme-Updates (Bug [1349944](https://bugzil.la/1349944))
  - colors.bookmark_text jetzt unterstützt als Alias von colors.toolbar_text (Bug [1412595](https://bugzil.la/1412595))
  - colors.toolbar_top_separator, colors.toolbar_bottom_separator und colors.toolbar_vertical_separator implementiert (Bug [1347190](https://bugzil.la/1347190))

- webRequest

  - [webRequest.onBeforeRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) enthält jetzt einen "frameAncestors"-Parameter

## Ältere Versionen

{{Firefox_for_developers}}
