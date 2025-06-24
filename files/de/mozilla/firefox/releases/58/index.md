---
title: Firefox 58 für Entwickler
slug: Mozilla/Firefox/Releases/58
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 58, die Entwickler betreffen werden. Firefox 58 wurde am 23. Januar 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Der [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) wurde standardmäßig für Formen, die über {{cssxref("clip-path")}} erzeugt werden, aktiviert ([Firefox Bug 1405339](https://bugzil.la/1405339)).
- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hat jetzt einen Button, um die [Aufzeichnung des Netzwerkverkehrs zu pausieren/wiederzugeben](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#pausing-and-resume-network-traffic-recording) ([Firefox Bug 1005755](https://bugzil.la/1005755)).
- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ist der "Flash"-Filter-Button nicht mehr verfügbar, und Flash-Anfragen sind im "Others"-Filter enthalten ([Firefox Bug 1413540](https://bugzil.la/1413540)).
- Der Code für den alten Modus für responsives Design (standardmäßig aktiviert vor Firefox 52) wurde aus den DevTools entfernt ([Firefox Bug 1305777](https://bugzil.la/1305777)). Siehe [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) für Informationen über die neuen Werkzeuge.
- Die Option, MDN-Dokumentationen aus dem CSS-Panel des Seiteninspektors einzusehen, wurde entfernt ([Firefox Bug 1382171](https://bugzil.la/1382171)) (seit Version 55 deaktiviert, [Firefox Bug 1352801](https://bugzil.la/1352801)).

### HTML

_Keine Änderungen._

### CSS

- Der {{cssxref("@font-face/font-display", "font-display")}} Descriptor ist jetzt standardmäßig auf allen Plattformen verfügbar ([Firefox Bug 1317445](https://bugzil.la/1317445)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Methode {{jsxref("Promise.prototype.finally()")}} wurde implementiert ([Firefox Bug 1019116](https://bugzil.la/1019116)).
- Das Objekt {{jsxref("Intl/PluralRules", "Intl.PluralRules")}} wurde implementiert ([Firefox Bug 1403318](https://bugzil.la/1403318)).
- Die Methode {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} wurde implementiert ([Firefox Bug 1403319](https://bugzil.la/1403319)).
- Das Objekt {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} unterstützt jetzt die Option `hourCycle` und den Sprach-Tag `hc` ([Firefox Bug 1386146](https://bugzil.la/1386146)).
- Der [optionale Catch-Bindungs-Vorschlag](https://github.com/tc39/proposal-optional-catch-binding) wurde implementiert ([Firefox Bug 1380881](https://bugzil.la/1380881)).

### APIs

#### Neue APIs

- Die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) API wurde implementiert ([Firefox Bug 1263722](https://bugzil.la/1263722)).
  - Gecko hat auch eine Voreinstellung erhalten, um die Schnittstelle bei Bedarf zu deaktivieren — `dom.enable_performance_navigation_timing`, standardmäßig `true` ([Firefox Bug 1403926](https://bugzil.la/1403926)).

#### DOM

- Fehler, die über Fehlerobjekte in bestimmten APIs gemeldet werden — beispielsweise in der `error`-Eigenschaft von [`FileReader`](/de/docs/Web/API/FileReader), [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), und wenn Anfragen über bestimmte Methoden von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) nicht erfolgreich sind — werden jetzt durch [`DOMException`](/de/docs/Web/API/DOMException)-Instanzen repräsentiert. [`DOMError`](/de/docs/Web/API/DOMError) ist veraltet und wurde aus der DOM4-Spezifikation entfernt ([Firefox Bug 1120178](https://bugzil.la/1120178)).
- Die [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) Eigenschaft wird jetzt unterstützt ([Firefox Bug 1191943](https://bugzil.la/1191943)).
- Budget-basierte Hintergrund-Timeout-Drosselung wurde implementiert — siehe [Richtlinien zur Unterstützung der Leistung von Hintergrundseiten](/de/docs/Web/API/Page_Visibility_API#policies_in_place_to_aid_background_page_performance) für weitere Details ([Firefox Bug 1377766](https://bugzil.la/1377766)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Medien und WebRTC

- Die vorfixierte Version der [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) wurde entfernt; stellen Sie sicher, dass der Code aktualisiert wird, um den Standard `srcObject` anstelle von `mozSrcObject` zu verwenden ([Firefox Bug 1183495](https://bugzil.la/1183495)).
- Das Verwenden von [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack), um Tracks zu einem Stream hinzuzufügen, der mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde, und dann versuchen, den resultierenden Stream aufzuzeichnen, funktioniert nun erwartungsgemäß. Zuvor wurden nur die ursprünglich im Stream enthaltenen Tracks, die von `getUserMedia()` zurückgegeben wurden, im aufgezeichneten Medium enthalten ([Firefox Bug 1296531](https://bugzil.la/1296531)).
- Die [WebVTT](/de/docs/Web/API/WebVTT_API)-[`VTTRegion`](/de/docs/Web/API/VTTRegion)-Schnittstelle wurde immer beim Interpretieren von WebVTT-Dateien erstellt, aber die resultierenden Regionen wurden zuvor nicht verwendet. Ab Firefox 58 werden sie genutzt, wenn Sie die Voreinstellung `media.webvtt.regions.enabled` aktivieren, indem Sie ihren Wert auf `true` setzen.

#### Canvas und WebGL

- Unterstützung für vorfixierte WebGL-Erweiterungen wurde entfernt ([Firefox Bug 1403413](https://bugzil.la/1403413)):
  - Für `MOZ_WEBGL_compressed_texture_atc` verwenden Sie stattdessen `WEBGL_compressed_texture_atc`.
  - Für `MOZ_WEBGL_compressed_texture_pvrtc` verwenden Sie stattdessen [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc).
  - Für `MOZ_WEBGL_compressed_texture_s3tc` verwenden Sie stattdessen [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc).
  - Für `MOZ_WEBGL_depth_texture` verwenden Sie stattdessen [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture).
  - Für `MOZ_WEBGL_lose_context` verwenden Sie stattdessen [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context).

### HTTP

- [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) wird in {{httpheader("Content-Security-Policy-Report-Only")}} nicht mehr ignoriert ([Firefox Bug 1380755](https://bugzil.la/1380755)).
- Firefox implementiert jetzt einen TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten der Voreinstellung `network.http.tls-handshake-timeout` in about:config geändert werden ([Firefox Bug 1393691](https://bugzil.la/1393691)).
- Die [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) CSP-Direktive wurde implementiert ([Firefox Bug 1302667](https://bugzil.la/1302667)).
- Der [425: Too Early](/de/docs/Web/HTTP/Reference/Status/425) Statuscode und der zugehörige {{httpheader("Early-Data")}} Request-Header werden jetzt unterstützt ([Firefox Bug 1406908](https://bugzil.la/1406908)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

- "Zum Startbildschirm hinzufügen" wird jetzt in Firefox für Android unterstützt, Teil der [Progressive Web Apps](/de/docs/Web/Progressive_web_apps)-Bemühung ([Firefox Bug 1212648](https://bugzil.la/1212648)).
- [WebAssembly](/de/docs/WebAssembly) verfügt jetzt über einen gestuften Compiler, der Ladezeitoptimierungen bietet ([Firefox Bug 1277562](https://bugzil.la/1277562)), und neue Streaming-APIs — [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) [Firefox Bug 1347644](https://bugzil.la/1347644).

## Entfernt aus der Webplattform

### HTML

- Sie können kein {{htmlelement("a")}}-Element mehr in einem {{htmlelement("map")}}-Element verschachteln, um einen Hotspot-Bereich zu erstellen — ein {{htmlelement("area")}}-Element muss stattdessen verwendet werden ([Firefox Bug 1317937](https://bugzil.la/1317937)).

### CSS

- Die folgenden proprietären Mozilla-Systemmetrik-Pseudoklassen sind nicht mehr für Webinhalte verfügbar ([Firefox Bug 1396066](https://bugzil.la/1396066)):

  - `:-moz-system-metric(images-in-menus)`
  - `:-moz-system-metric(mac-graphite-theme)`
  - `:-moz-system-metric(scrollbar-end-backward)`
  - `:-moz-system-metric(scrollbar-end-forward)`
  - `:-moz-system-metric(scrollbar-start-backward)`
  - `:-moz-system-metric(scrollbar-start-forward)`
  - `:-moz-system-metric(scrollbar-thumb-proportional)`
  - `:-moz-system-metric(touch-enabled)`
  - `:-moz-system-metric(windows-default-theme)`

- Die folgenden proprietären Mozilla-Medienmerkmale sind nicht mehr für Webinhalte verfügbar ([Firefox Bug 1396066](https://bugzil.la/1396066)):

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

- Die proprietäre Mozilla-`:-moz-styleeditor-transitioning`-Pseudoklasse ist nicht mehr für Webinhalte verfügbar ([Firefox Bug 1396099](https://bugzil.la/1396099)).

### JavaScript

- Die nicht standardisierte Methode [`Date.prototype.toLocaleFormat()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#date_2) wurde entfernt ([Firefox Bug 818634](https://bugzil.la/818634)).
- Die nicht standardisierten und veralteten Methoden [`Object.prototype.watch()` and `Object.prototype.unwatch()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#object_2) wurden entfernt und funktionieren nicht mehr ([Firefox Bug 638054](https://bugzil.la/638054)). Erwägen Sie stattdessen die Verwendung von [Settern und Gettern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) oder [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy).
- Das [veraltete Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator), das `StopIteration`-Objekt, die [veralteten Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und die nicht standardisierte Methode `Function.prototype.isGenerator()` wurden entfernt. Verwenden Sie die ES2015 [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und standardkonforme [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) stattdessen ([Firefox Bug 1083482](https://bugzil.la/1083482), [Firefox Bug 1413867](https://bugzil.la/1413867), [Firefox Bug 1119777](https://bugzil.la/1119777)).
- Die nicht standardisierten [Array Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und [Generator Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) wurden entfernt ([Firefox Bug 1414340](https://bugzil.la/1414340)).

### APIs

- Die proprietären Werte `moz-blob` und `moz-chunked-text` der [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType)-Eigenschaft wurden in Firefox 58 vollständig entfernt ([Firefox Bug 1397145](https://bugzil.la/1397145), [Firefox Bug 1397151](https://bugzil.la/1397151), [Firefox Bug 1120171](https://bugzil.la/1120171)).
- Die `dom.abortController.enabled` und `dom.abortController.fetch.enabled` Voreinstellungen, die die Exponierung der [Abort-API-Funktionalität](/de/docs/Web/API/Fetch_API#aborting_a_fetch) steuerten, wurden entfernt, da diese Funktionen jetzt standardmäßig aktiviert sind ([Firefox Bug 1402317](https://bugzil.la/1402317)).
- Die proprietäre `mozSrcObject`-Eigenschaft wurde in Firefox 58 entfernt ([Firefox Bug 1183495](https://bugzil.la/1183495)). Verwenden Sie stattdessen die standardisierte [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft.

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [browserSettings](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [browserSettings.webNotificationsDisabled](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled) wurde implementiert (Bug 1364942)

- [browsingData](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [browsingData.localStorage](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage) unterstützt jetzt das Löschen von localStorage nach Host (Bug 1388428)

- [pkcs11](/de/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11)-API zur Verwaltung von Sicherheitsgeräten (Bug 1357391)
- privacy

  - First-Party-Isolation kann jetzt durch firstPartyIsolate umgeschaltet werden (Bug 1409045)
  - Resist Fingerprinting Pref kann jetzt durch resistFingerprinting umgeschaltet werden (Bug [1397611)](https://bugzil.la/1397611)

- tabs

  - [`tabs.discard`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard) wurde implementiert (Bug 1322485)
  - Eigenschaften isArticle, isInReaderMode von Tab implementiert (Bug 1381992)
  - [`toggleReaderMode()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)-Methode implementiert (Bug 1381992)
  - openInReaderMode-Option von tabs.created implementiert (Bug 1408993)
  - tabs.onUpdated benachrichtigt jetzt beim Betreten/Verlassen des Lesemodus (Bug 1402921)

- theme

  - [`getCurrent()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/getCurrent)-Methode zum Abrufen der aktuellen Theme-Eigenschaften (Bug [1349944](https://bugzil.la/1349944))
  - onUpdated-Methode zum Empfangen von WebExtension-Theme-Updates (Bug [1349944](https://bugzil.la/1349944))
  - colors.bookmark_text wird jetzt als Alias von colors.toolbar_text unterstützt (Bug [1412595](https://bugzil.la/1412595))
  - colors.toolbar_top_separator, colors.toolbar_bottom_separator und colors.toolbar_vertical_separator implementiert (Bug [1347190)](https://bugzil.la/1347190)

- webRequest
  - [webRequest.onBeforeRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) umfasst jetzt einen "frameAncestors"-Parameter

## Ältere Versionen

{{Firefox_for_developers}}
