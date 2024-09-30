---
title: Firefox 58 für Entwickler
slug: Mozilla/Firefox/Releases/58
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 58, die Entwickler betreffen werden. Firefox 58 wurde am 23. Januar 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Der [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) ist nun standardmäßig für Formen aktiviert, die über {{cssxref("clip-path")}} erstellt wurden ([Firefox-Bug 1405339](https://bugzil.la/1405339)).
- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) verfügt jetzt über einen Button zum [Pausieren/Wiedergeben der Aufzeichnung des Netzwerkverkehrs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#pausing-and-resume-network-traffic-recording) ([Firefox-Bug 1005755](https://bugzil.la/1005755)).
- Im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ist der "Flash"-Filter-Button nicht länger verfügbar, und Flash-Anfragen sind im "Others"-Filter enthalten ([Firefox-Bug 1413540](https://bugzil.la/1413540)).
- Der Code für den alten Responsive Design Mode (standardmäßig aktiviert vor Firefox 52) wurde jetzt aus den Devtools entfernt ([Firefox-Bug 1305777](https://bugzil.la/1305777)). Informationen zu den neuen Tools finden Sie unter [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html).
- Die Option zum Anzeigen von MDN-Dokumenten aus dem CSS-Bereich des Seiteninspektors wurde entfernt ([Firefox-Bug 1382171](https://bugzil.la/1382171)) (seit Version 55 deaktiviert, [Firefox-Bug 1352801](https://bugzil.la/1352801)).

### HTML

_Keine Änderungen._

### CSS

- Der {{cssxref("@font-face/font-display", "font-display")}} Deskriptor ist nun standardmäßig auf allen Plattformen verfügbar ([Firefox-Bug 1317445](https://bugzil.la/1317445)).

### SVG

_Keine Änderungen._

### JavaScript

- Die Methode {{jsxref("Promise.prototype.finally()")}} wurde implementiert ([Firefox-Bug 1019116](https://bugzil.la/1019116)).
- Das Objekt {{jsxref("Intl/PluralRules", "Intl.PluralRules")}} wurde implementiert ([Firefox-Bug 1403318](https://bugzil.la/1403318)).
- Die Methode {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} wurde implementiert ([Firefox-Bug 1403319](https://bugzil.la/1403319)).
- Das Objekt {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} unterstützt jetzt die Option `hourCycle` und den `hc` Sprach-Tag ([Firefox-Bug 1386146](https://bugzil.la/1386146)).
- Der [optionale Catch-Bindungs-Vorschlag](https://github.com/tc39/proposal-optional-catch-binding) wurde implementiert ([Firefox-Bug 1380881](https://bugzil.la/1380881)).

### APIs

#### Neue APIs

- Die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) API wurde implementiert ([Firefox-Bug 1263722](https://bugzil.la/1263722)).

  - Gecko hat auch eine Voreinstellung erhalten, die verwendet werden kann, um die Schnittstelle bei Bedarf zu deaktivieren — `dom.enable_performance_navigation_timing`, standardmäßig auf `true` eingestellt ([Firefox-Bug 1403926](https://bugzil.la/1403926)).

#### DOM

- Fehler, die über Error-Objekte in bestimmten APIs gemeldet werden — zum Beispiel in der `error` Eigenschaft von [`FileReader`](/de/docs/Web/API/FileReader), [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), und wenn Anfragen über bestimmte Methoden von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) nicht erfolgreich sind — werden nun durch [`DOMException`](/de/docs/Web/API/DOMException) Instanzen repräsentiert. [`DOMError`](/de/docs/Web/API/DOMError) ist nun veraltet und wurde aus der DOM4-Spezifikation entfernt ([Firefox-Bug 1120178](https://bugzil.la/1120178)).
- Die [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1191943](https://bugzil.la/1191943)).
- Budget-basierte Hintergrundzeitüberschreitungsdrosselung wurde implementiert — siehe [Richtlinien zur Unterstützung der Seitenleistung im Hintergrund](/de/docs/Web/API/Page_Visibility_API#policies_in_place_to_aid_background_page_performance) für weitere Details ([Firefox-Bug 1377766](https://bugzil.la/1377766)).

#### DOM-Events

_Keine Änderungen._

#### Medien und WebRTC

- Die mit einem Präfix versehene Version von [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) wurde entfernt; Stellen Sie sicher, dass der Code auf das Standard-`srcObject` und nicht auf `mozSrcObject` aktualisiert wird ([Firefox-Bug 1183495](https://bugzil.la/1183495)).
- Die Verwendung von [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack), um Tracks zu einem Stream hinzuzufügen, der mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde, und dann versucht, den resultierenden Stream aufzuzeichnen, funktioniert jetzt wie erwartet. Bisher wurden nur die ursprünglich im Stream enthaltenen Tracks, die von `getUserMedia()` zurückgegeben wurden, in die aufgezeichneten Medien einbezogen ([Firefox-Bug 1296531](https://bugzil.la/1296531)).
- Die [WebVTT](/de/docs/Web/API/WebVTT_API) [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Schnittstelle wurde immer beim Interpretieren von WebVTT-Dateien erstellt, aber die resultierenden Regionen wurden bisher nicht verwendet. Ab Firefox 58 werden sie verwendet, wenn Sie die Voreinstellung `media.webvtt.regions.enabled` durch Setzen ihres Wertes auf `true` aktivieren.

#### Canvas und WebGL

- Unterstützung für WebGL-Erweiterungen mit Präfix wurde entfernt ([Firefox-Bug 1403413](https://bugzil.la/1403413)):

  - Für `MOZ_WEBGL_compressed_texture_atc` verwenden Sie stattdessen `WEBGL_compressed_texture_atc`.
  - Für `MOZ_WEBGL_compressed_texture_pvrtc` verwenden Sie stattdessen [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc).
  - Für `MOZ_WEBGL_compressed_texture_s3tc` verwenden Sie stattdessen [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc).
  - Für `MOZ_WEBGL_depth_texture` verwenden Sie stattdessen [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture).
  - Für `MOZ_WEBGL_lose_context` verwenden Sie stattdessen [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context).

### HTTP

- [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) wird in {{httpheader("Content-Security-Policy-Report-Only")}} nicht mehr ignoriert ([Firefox-Bug 1380755](https://bugzil.la/1380755)).
- Firefox implementiert jetzt einen TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann variiert werden, indem die Voreinstellung `network.http.tls-handshake-timeout` in about:config bearbeitet wird ([Firefox-Bug 1393691](https://bugzil.la/1393691)).
- Die [`worker-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src) CSP-Direktive wurde implementiert ([Firefox-Bug 1302667](https://bugzil.la/1302667)).
- Der [425: Too Early](/de/docs/Web/HTTP/Status/425) Statuscode und der zugehörige {{httpheader("Early-Data")}} Anfrage-Header werden jetzt unterstützt ([Firefox-Bug 1406908](https://bugzil.la/1406908)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

- „Zum Startbildschirm hinzufügen“ wird jetzt in Firefox für Android unterstützt, als Teil der Bemühungen um [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) ([Firefox-Bug 1212648](https://bugzil.la/1212648)).
- [WebAssembly](/de/docs/WebAssembly) verfügt nun über einen mehrstufigen Compiler, der Ladezeitoptimierungen bietet ([Firefox-Bug 1277562](https://bugzil.la/1277562)), und neue Streaming-APIs — [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und [`WebAssembly.installStreaming()`](/de/docs/WebAssembly/JavaScript_interface/installStreaming) [Firefox-Bug 1347644](https://bugzil.la/1347644).

## Entfernungen aus der Web-Plattform

### HTML

- Sie können kein {{htmlelement("a")}}-Element mehr innerhalb eines {{htmlelement("map")}}-Elements verschachteln, um eine Hotspot-Region zu erstellen. Ein {{htmlelement("area")}}-Element muss stattdessen verwendet werden ([Firefox-Bug 1317937](https://bugzil.la/1317937)).

### CSS

- Die folgenden proprietären Mozilla Pseudoklassen für Systemmetriken sind für Webinhalte nicht mehr verfügbar ([Firefox-Bug 1396066](https://bugzil.la/1396066)):

  - `:-moz-system-metric(images-in-menus)`
  - `:-moz-system-metric(mac-graphite-theme)`
  - `:-moz-system-metric(scrollbar-end-backward)`
  - `:-moz-system-metric(scrollbar-end-forward)`
  - `:-moz-system-metric(scrollbar-start-backward)`
  - `:-moz-system-metric(scrollbar-start-forward)`
  - `:-moz-system-metric(scrollbar-thumb-proportional)`
  - `:-moz-system-metric(touch-enabled)`
  - `:-moz-system-metric(windows-default-theme)`

- Die folgenden proprietären Mozilla Medienmerkmale sind für Webinhalte nicht mehr verfügbar ([Firefox-Bug 1396066](https://bugzil.la/1396066)):

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

- Die proprietäre Mozilla Pseudoklasse `:-moz-styleeditor-transitioning` ist für Webinhalte nicht mehr verfügbar ([Firefox-Bug 1396099](https://bugzil.la/1396099)).

### JavaScript

- Die nicht standardisierte Methode [`Date.prototype.toLocaleFormat()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#date_2) wurde entfernt ([Firefox-Bug 818634](https://bugzil.la/818634)).
- Die nicht standardisierten und veralteten Methoden {{jsxref("Object.prototype.watch()")}} und {{jsxref("Object.prototype.unwatch", "unwatch()")}} wurden entfernt und funktionieren nicht mehr ([Firefox-Bug 638054](https://bugzil.la/638054)). Erwägen Sie, stattdessen [Setter und Getter](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) oder [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) zu verwenden.
- Das [Legacy-Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator), das [`StopIteration`](/de/docs/Archive/Web/StopIteration)-Objekt, die [Legacy-Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und die nicht standardisierte Methode {{jsxref("Function.prototype.isGenerator()")}} wurden entfernt. Verwenden Sie stattdessen die ES2015 [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und standardskonforme [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) ([Firefox-Bug 1083482](https://bugzil.la/1083482), [Firefox-Bug 1413867](https://bugzil.la/1413867), [Firefox-Bug 1119777](https://bugzil.la/1119777)).
- Die nicht standardisierten [Array-Komprehensionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und [Generator-Komprehensionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) wurden entfernt ([Firefox-Bug 1414340](https://bugzil.la/1414340)).

### APIs

- Die proprietären `moz-blob` und `moz-chunked-text` Werte der Eigenschaft [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) wurden in Firefox 58 vollständig entfernt ([Firefox-Bug 1397145](https://bugzil.la/1397145), [Firefox-Bug 1397151](https://bugzil.la/1397151), [Firefox-Bug 1120171](https://bugzil.la/1120171)).
- Die `dom.abortController.enabled` und `dom.abortController.fetch.enabled` Voreinstellungen, die die Sichtbarkeit der [Abort API-Funktionalität](/de/docs/Web/API/Fetch_API#aborting_a_fetch) steuerten, wurden entfernt, da diese Funktionen jetzt standardmäßig aktiviert sind ([Firefox-Bug 1402317](https://bugzil.la/1402317)).
- Die proprietäre `mozSrcObject`-Eigenschaft wurde in Firefox 58 entfernt ([Firefox-Bug 1183495](https://bugzil.la/1183495)). Verwenden Sie stattdessen die standardisierte Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject).

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

  - Die First-Party-Isolierung kann jetzt über `firstPartyIsolate` umgeschaltet werden (Bug 1409045)
  - Das `resist fingerprinting` Pref kann jetzt über `resistFingerprinting` umgeschaltet werden (Bug [1397611)](https://bugzil.la/1397611)

- tabs

  - [tabs.discard](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard) wurde implementiert (Bug 1322485)
  - isArticle und isInReaderMode Eigenschaften von Tab implementiert (Bug 1381992)
  - [toggleReaderMode](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)() Methode implementiert (Bug 1381992)
  - openInReaderMode Option von tabs.created implementiert (Bug 1408993)
  - tabs.onUpdated benachrichtigt jetzt beim Betreten/Verlassen des Lese-Modus (Bug 1402921)

- theme

  - [getCurrent](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/getCurrent)() Methode zum Abrufen der aktuellen Themeneigenschaften (Bug [1349944](https://bugzil.la/1349944))
  - onUpdated-Methode, um WebExtension-Themenaktualisierungen zu empfangen (Bug [1349944](https://bugzil.la/1349944))
  - colors.bookmark_text wird jetzt als Alias für colors.toolbar_text unterstützt (Bug [1412595](https://bugzil.la/1412595))
  - colors.toolbar_top_separator, colors.toolbar_bottom_separator und colors.toolbar_vertical_separator implementiert (Bug [1347190)](https://bugzil.la/1347190)

- webRequest

  - [webRequest.onBeforeRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) enthält jetzt einen "frameAncestors"-Parameter

## Ältere Versionen

{{Firefox_for_developers}}
