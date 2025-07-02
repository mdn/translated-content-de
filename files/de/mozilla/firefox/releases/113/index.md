---
title: Firefox 113 für Entwickler
slug: Mozilla/Firefox/Releases/113
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 113, die Entwickler betreffen. Firefox 113 wurde am 9. Mai 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die funktionalen Notationen [`color()`](/de/docs/Web/CSS/color_value/color), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color-mix()`](/de/docs/Web/CSS/color_value/color-mix) werden jetzt unterstützt, zusammen mit der Eigenschaft [`forced-color-adjust`](/de/docs/Web/CSS/forced-color-adjust).
  Für weitere Informationen zu den funktionalen Notationen siehe die [CSS-Farbwertdokumentation](/de/docs/Web/CSS/color_value).
  ([Firefox Bug 1352753](https://bugzil.la/1352753), [Firefox Bug 1813497](https://bugzil.la/1813497), [Firefox Bug 1818819](https://bugzil.la/1818819), [Firefox Bug 1824526](https://bugzil.la/1824526)).
- Mit der [`:nth-child of <selector>` Syntax](/de/docs/Web/CSS/:nth-child#the_of_selector_syntax) können Sie eine Gruppe von Kindern basierend auf der `An+B`-Regel anvisieren, die auch einem definierten Selektor entspricht.
  Siehe ([Firefox Bug 1808229](https://bugzil.la/1808229)) für weitere Details.
- Die [`scripting`](/de/docs/Web/CSS/@media/scripting) Medienfunktion wird jetzt unterstützt. Siehe ([Firefox Bug 1166581](https://bugzil.la/1166581)) für weitere Details.
- Die [`content`](/de/docs/Web/CSS/content) Eigenschaft unterstützt jetzt alle Bildtypen, einschließlich `<gradient>`, `image-set()` und `url()`. Siehe ([Firefox Bug 1684958](https://bugzil.la/1684958)) für weitere Details. Es gibt derzeit ein Problem mit den `::before` und `::after` Pseudo-Selektoren, die dazu führt, dass sie keine `<gradient>`s darstellen. Siehe ([Firefox Bug 1832901](https://bugzil.la/1832901)) für weitere Details.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset) und [`OffscreenCanvasRenderingContext2D.reset()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.reset) werden jetzt unterstützt und können verwendet werden, um den zugehörigen Rendering-Kontext in seinen Standardzustand zurückzusetzen.
  ([Firefox Bug 1709347](https://bugzil.la/1709347)).
- Die [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) wird jetzt unterstützt.
  Die von dieser API bereitgestellten Schnittstellen werden verwendet, um Daten mithilfe der `gzip`- und `deflate`-Formate zu komprimieren und zu dekomprimieren ([Firefox Bug 1823619](https://bugzil.la/1823619)).
- Die veraltete und nicht standardisierte Eigenschaft `mozImageSmoothingEnabled` ist jetzt deaktiviert.
  Siehe die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) Eigenschaft für Glättungen in skalierten Bildern ([Firefox Bug 1822955](https://bugzil.la/1822955)).

#### Medien, WebRTC und Web Audio

- Der [AV1-Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) ist jetzt auf Android aktiviert. Wenn das Gerät dies unterstützt, wird hardwarebeschleunigtes Decoding verwendet ([Firefox Bug 1672276](https://bugzil.la/1672276)).
- Die folgenden WebRTC-Methoden, -Eigenschaften und -Dictionaries werden jetzt unterstützt: [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static), [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static), [`RTCRtpSender.setStreams()`](/de/docs/Web/API/RTCRtpSender/setStreams), [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) & [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp), [`RTCMediaSourceStats`](/de/docs/Web/API/RTCMediaSourceStats), [`RTCPeerConnection.connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) und [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats).
  Die zugehörigen Bugberichte sind, jeweils: [Firefox Bug 1531460](https://bugzil.la/1531460), [Firefox Bug 1531461](https://bugzil.la/1531461), [Firefox Bug 1510802](https://bugzil.la/1510802), [Firefox Bug 1278299](https://bugzil.la/1278299), [Firefox Bug 1804678](https://bugzil.la/1804678), [Firefox Bug 1265827](https://bugzil.la/1265827) und [Firefox Bug 1531087](https://bugzil.la/1531087).

#### Entfernungen

- Das veraltete und nicht standardisierte Attribut `CanvasRenderingContext2D.mozTextStyle` wurde dauerhaft entfernt. Es war zuvor hinter einer Einstellung verborgen. ([Firefox Bug 1294362](https://bugzil.la/1294362)).
- Die veralteten und nicht standardisierten Attribute `mozRTCPeerConnection`, `mozRTCIceCandidate` und `mozRTCSessionDescription` wurden dauerhaft entfernt ([Firefox Bug 1531812](https://bugzil.la/1531812)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das Serialisieren von `Node`-Objekten innerhalb eines Shadow DOM und die `shadowRoot`-Eigenschaft auf `Node`-Objekten hinzugefügt ([Firefox Bug 1802137](https://bugzil.la/1802137)).
- Unterstützung für zwischengespeicherte Antworten für die Ereignisse `network.responseStarted` und `network.responseCompleted` hinzugefügt ([Firefox Bug 1806802](https://bugzil.la/1806802) und [Firefox Bug 1806794](https://bugzil.la/1806794)).
- Ein Problem behoben, bei dem die Ereignisse `browsingContext.domContentLoaded` und `browsingContext.load` fehlten, wenn Navigierungen mit `document.open()` und `document.close()` verwendet wurden ([Firefox Bug 1822772](https://bugzil.la/1822772)).
- Ein Problem behoben, bei dem der Befehl `script.callFunction` einen `invalid argument`-Fehler warf, wenn ein unbekanntes Objekt als Argument übergeben wurde, anstatt des erwarteten `no such handle`-Fehlers ([Firefox Bug 1821039](https://bugzil.la/1821039)).

#### Marionette

- Die Fähigkeit `moz:useNonSpecCompliantPointerOrigin` ist jetzt veraltet und wird vollständig in Firefox 116 entfernt ([Firefox Bug 1824911](https://bugzil.la/1824911)).
- Die Befehle `WebDriver:FindElementFromShadowRoot` und `WebDriver:FindElementsFromShadowRoot` wurden implementiert ([Firefox Bug 1700095](https://bugzil.la/1700095)).
- Die Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` wurden implementiert ([Firefox Bug 1585622](https://bugzil.la/1585622)).
- Unterstützung für den Parameter `background` des Befehls `WebDriver:Print` hinzugefügt ([Firefox Bug 1783086](https://bugzil.la/1783086)).
- Unterstützung für den Parameter `orientation` des Befehls `WebDriver:Print` hinzugefügt ([Firefox Bug 1791819](https://bugzil.la/1791819)).
- Ein Problem mit `DOMTokenList`-Instanzen behoben, die jetzt als Sammlungen statt als willkürliche Objekte zurückgegeben werden ([Firefox Bug 1823464](https://bugzil.la/1823464)).

## Änderungen für Add-on-Entwickler

- Wenn eine Erweiterung mehrere Listener für dasselbe Ereignis registriert, werden jetzt alle Event-Listener aufgerufen, wenn die Ereignisseite aufwacht, statt nur der erste ([Firefox Bug 1798655](https://bugzil.la/1798655)).
- Die Unterstützung für die {{WebExtAPIRef("declarativeNetRequest")}} API ist jetzt verfügbar ([Firefox Bug 1782685](https://bugzil.la/1782685)).
- Der `gecko_android` Unterschlüssel wurde dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel hinzugefügt. Dieser Unter-Schlüssel ermöglicht es einer Erweiterung, den Bereich der kompatiblen Firefox für Android-Versionen anzugeben ([Firefox Bug 1824237](https://bugzil.la/1824237)).

## Sonstige

- Unterstützung für animierte [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) (AV1 Image Format-Dateien) Bilder.
  Zuvor wurden sie als Standbilder angezeigt, ohne dass Webseiten dies erkennen und auf ein anderes Format zurückgreifen konnten.
  ([Firefox Bug 1825580](https://bugzil.la/1825580)).

## Ältere Versionen

{{Firefox_for_developers}}
