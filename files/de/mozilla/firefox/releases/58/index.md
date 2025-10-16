---
title: Firefox 58 Versionshinweise für Entwickler
short-title: Firefox 58
slug: Mozilla/Firefox/Releases/58
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 58, die Entwickler betreffen werden. Firefox 58 wurde am 23. Januar 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) wurde standardmäßig für Formen aktiviert, die über {{cssxref("clip-path")}} generiert werden ([Firefox-Bug 1405339](https://bugzil.la/1405339)).
- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) hat jetzt eine Schaltfläche zum [Pausieren/Wiedergeben der Aufzeichnung des Netzwerkverkehrs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#pausing-and-resume-network-traffic-recording) ([Firefox-Bug 1005755](https://bugzil.la/1005755)).
- Im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ist die "Flash"-Filter-Schaltfläche nicht mehr verfügbar, und Flash-Anfragen werden im "Andere"-Filter enthalten ([Firefox-Bug 1413540](https://bugzil.la/1413540)).
- Der Code für den alten Modus des responsiven Designs (standardmäßig in Firefox 52 und früher aktiviert) wurde nun aus den Entwicklertools entfernt ([Firefox-Bug 1305777](https://bugzil.la/1305777)). Siehe [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) für Informationen zu den neuen Tools.
- Die Möglichkeit, MDN-Dokumente aus dem CSS-Bereich des Seiteninspektors heraus anzusehen, wurde entfernt ([Firefox-Bug 1382171](https://bugzil.la/1382171)) (war seit Version 55 deaktiviert, [Firefox-Bug 1352801](https://bugzil.la/1352801)).

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
- Das Objekt {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} unterstützt nun die Option `hourCycle` und das Sprach-Tag `hc` ([Firefox-Bug 1386146](https://bugzil.la/1386146)).
- Der [Vorschlag für die optionale Catch-Bindung](https://github.com/tc39/proposal-optional-catch-binding) wurde implementiert ([Firefox-Bug 1380881](https://bugzil.la/1380881)).

### APIs

#### Neue APIs

- Die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) API wurde implementiert ([Firefox-Bug 1263722](https://bugzil.la/1263722)).
  - Gecko wurde auch eine Präferenz hinzugefügt, mit der die Schnittstelle bei Bedarf deaktiviert werden kann — `dom.enable_performance_navigation_timing`, standardmäßig auf `true` gesetzt ([Firefox-Bug 1403926](https://bugzil.la/1403926)).

#### DOM

- Fehler, die über Fehlerobjekte in bestimmten APIs gemeldet werden — zum Beispiel in der `error` Eigenschaft von [`FileReader`](/de/docs/Web/API/FileReader), [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), sowie bei Anfragen, die über bestimmte Methoden von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erfolglos verlaufen — werden jetzt durch [`DOMException`](/de/docs/Web/API/DOMException) Instanzen dargestellt. [`DOMError`](/de/docs/Web/API/DOMError) ist jetzt veraltet und wurde aus der DOM4-Spezifikation entfernt ([Firefox-Bug 1120178](https://bugzil.la/1120178)).
- Die [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) Eigenschaft wird jetzt unterstützt ([Firefox-Bug 1191943](https://bugzil.la/1191943)).
- Ein budgetbasiertes Hintergrundzeitlimit-Drosselungs-Feature wurde implementiert — siehe [Richtlinien zur Unterstützung der Leistung von Hintergrundseiten](/de/docs/Web/API/Page_Visibility_API#policies_in_place_to_aid_background_page_performance) für weitere Details ([Firefox-Bug 1377766](https://bugzil.la/1377766)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Medien und WebRTC

- Die mit Präfix versehene Version von [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) wurde entfernt; stellen Sie sicher, dass der Code auf die Standard-`srcObject` anstelle von `mozSrcObject` aktualisiert wird ([Firefox-Bug 1183495](https://bugzil.la/1183495)).
- Das Hinzufügen von Tracks zu einem Stream, der mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde, mittels [`MediaStream.addTrack()`](/de/docs/Web/API/MediaStream/addTrack) und anschließendem Versuch, den resultierenden Stream aufzuzeichnen, funktioniert jetzt wie erwartet. Zuvor wurden nur die ursprünglich im Stream enthaltenen Tracks, die von `getUserMedia()` zurückgegeben wurden, in das aufgezeichnete Medium aufgenommen ([Firefox-Bug 1296531](https://bugzil.la/1296531)).
- Die [WebVTT](/de/docs/Web/API/WebVTT_API) [`VTTRegion`](/de/docs/Web/API/VTTRegion) Schnittstelle wurde immer beim Interpretieren von WebVTT-Dateien erstellt, aber die resultierenden Regionen wurden bisher nicht genutzt. Ab Firefox 58 werden sie genutzt, wenn Sie die Präferenz `media.webvtt.regions.enabled` aktivieren, indem Sie ihren Wert auf `true` setzen.

#### Canvas und WebGL

- Unterstützung für WebGL-Erweiterungen mit Präfix wurde entfernt ([Firefox-Bug 1403413](https://bugzil.la/1403413)):
  - Verwenden Sie `WEBGL_compressed_texture_atc` anstelle von `MOZ_WEBGL_compressed_texture_atc`.
  - Verwenden Sie [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc) anstelle von `MOZ_WEBGL_compressed_texture_pvrtc`.
  - Verwenden Sie [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc) anstelle von `MOZ_WEBGL_compressed_texture_s3tc`.
  - Verwenden Sie [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) anstelle von `MOZ_WEBGL_depth_texture`.
  - Verwenden Sie [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context) anstelle von `MOZ_WEBGL_lose_context`.

### HTTP

- [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) wird in {{httpheader("Content-Security-Policy-Report-Only")}} nicht mehr ignoriert ([Firefox-Bug 1380755](https://bugzil.la/1380755)).
- Firefox implementiert jetzt ein TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten der Präferenz `network.http.tls-handshake-timeout` in about:config variiert werden ([Firefox-Bug 1393691](https://bugzil.la/1393691)).
- Die [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) CSP-Direktive wurde implementiert ([Firefox-Bug 1302667](https://bugzil.la/1302667)).
- Der [425: Too Early](/de/docs/Web/HTTP/Reference/Status/425) Statuscode und der damit verbundene {{httpheader("Early-Data")}} Request Header werden jetzt unterstützt ([Firefox-Bug 1406908](https://bugzil.la/1406908)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### Sonstiges

- "Zum Startbildschirm hinzufügen" wird jetzt in Firefox für Android unterstützt, Teil der [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) Bemühungen ([Firefox-Bug 1212648](https://bugzil.la/1212648)).
- [WebAssembly](/de/docs/WebAssembly) hat jetzt einen geschichteten Compiler, der Optimierungen der Ladezeit bereitstellt ([Firefox-Bug 1277562](https://bugzil.la/1277562)), und neue Streaming-APIs — [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) [Firefox-Bug 1347644](https://bugzil.la/1347644).

## Entfernungen aus der Web-Plattform

### HTML

- Sie können kein {{htmlelement("a")}} Element mehr innerhalb eines {{htmlelement("map")}} Elements verschachteln, um einen Hotspot-Bereich zu erstellen — stattdessen muss ein {{htmlelement("area")}} Element verwendet werden ([Firefox-Bug 1317937](https://bugzil.la/1317937)).

### CSS

- Die folgenden proprietären Mozilla-Systemmetriken-Pseudoklassen sind für Webinhalte nicht mehr verfügbar ([Firefox-Bug 1396066](https://bugzil.la/1396066)):
  - `:-moz-system-metric(images-in-menus)`
  - `:-moz-system-metric(mac-graphite-theme)`
  - `:-moz-system-metric(scrollbar-end-backward)`
  - `:-moz-system-metric(scrollbar-end-forward)`
  - `:-moz-system-metric(scrollbar-start-backward)`
  - `:-moz-system-metric(scrollbar-start-forward)`
  - `:-moz-system-metric(scrollbar-thumb-proportional)`
  - `:-moz-system-metric(touch-enabled)`
  - `:-moz-system-metric(windows-default-theme)`

- Die folgenden proprietären Mozilla-Medienmerkmale sind für Webinhalte nicht mehr verfügbar ([Firefox-Bug 1396066](https://bugzil.la/1396066)):
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

- Die proprietäre Mozilla-Pseudoklasse `:-moz-styleeditor-transitioning` ist für Webinhalte nicht mehr verfügbar ([Firefox-Bug 1396099](https://bugzil.la/1396099)).

### JavaScript

- Die nicht standardisierte Methode [`Date.prototype.toLocaleFormat()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#date_2) wurde entfernt ([Firefox-Bug 818634](https://bugzil.la/818634)).
- Die nicht standardisierten und veralteten Methoden [`Object.prototype.watch()` und `Object.prototype.unwatch()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#object_2) wurden entfernt und funktionieren nicht mehr ([Firefox-Bug 638054](https://bugzil.la/638054)). Erwägen Sie stattdessen die Verwendung von [Settern und Gettern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) oder [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy).
- Das [veraltete Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator), das `StopIteration` Objekt, die [veralteten Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und die nicht standardisierte Methode `Function.prototype.isGenerator()` wurden entfernt. Verwenden Sie die ES2015 [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und standardkonforme [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) ([Firefox-Bug 1083482](https://bugzil.la/1083482), [Firefox-Bug 1413867](https://bugzil.la/1413867), [Firefox-Bug 1119777](https://bugzil.la/1119777)).
- Die nicht standardisierten [Array-Komprehensionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) und [Generator-Komprehensionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) wurden entfernt ([Firefox-Bug 1414340](https://bugzil.la/1414340)).

### APIs

- Die proprietären `moz-blob` und `moz-chunked-text` Werte der [`XMLHttpRequest.responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) Eigenschaft wurden vollständig in Firefox 58 entfernt ([Firefox-Bug 1397145](https://bugzil.la/1397145), [Firefox-Bug 1397151](https://bugzil.la/1397151), [Firefox-Bug 1120171](https://bugzil.la/1120171)).
- Die `dom.abortController.enabled` und `dom.abortController.fetch.enabled` Präferenzen, die die Sichtbarkeit der [Abort API Funktionalität](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request) steuerten, wurden jetzt entfernt, da diese Funktionen standardmäßig aktiviert sind ([Firefox-Bug 1402317](https://bugzil.la/1402317)).
- Die proprietäre `mozSrcObject` Eigenschaft wurde in Firefox 58 entfernt ([Firefox-Bug 1183495](https://bugzil.la/1183495)). Verwenden Sie stattdessen die Standard-Eigenschaft [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject).

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
  - Die Isolation der ersten Partei kann jetzt über firstPartyIsolate umgeschaltet werden (Bug 1409045)
  - Die Präferenz zum Widerstand gegen Fingerabdrücke kann jetzt über resistFingerprinting umgeschaltet werden (Bug [1397611)](https://bugzil.la/1397611)

- tabs
  - [`tabs.discard`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard) wurde implementiert (Bug 1322485)
  - isArticle, isInReaderMode Eigenschaften von Tab implementiert (Bug 1381992)
  - [`toggleReaderMode()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) Methode implementiert (Bug 1381992)
  - openInReaderMode Option von tabs.created implementiert (Bug 1408993)
  - tabs.onUpdated benachrichtigt jetzt beim Ein-/Austreten des Lesemodus (Bug 1402921)

- theme
  - [`getCurrent()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/getCurrent) Methode zum Abrufen der aktuellen Theme-Eigenschaften (Bug [1349944](https://bugzil.la/1349944))
  - onUpdated Methode zum Empfangen von WebExtension Theme-Updates (Bug [1349944](https://bugzil.la/1349944))
  - colors.bookmark_text wird jetzt als Alias für colors.toolbar_text unterstützt (Bug [1412595](https://bugzil.la/1412595))
  - colors.toolbar_top_separator, colors.toolbar_bottom_separator und colors.toolbar_vertical_separator implementiert (Bug [1347190)](https://bugzil.la/1347190)

- webRequest
  - [webRequest.onBeforeRequest](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) enthält jetzt einen "frameAncestors"-Parameter
