---
title: Firefox 113 für Entwickler
slug: Mozilla/Firefox/Releases/113
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 113, die Entwickler betreffen. Firefox 113 wurde am 9. Mai 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die funktionalen Notationen [`color()`](/de/docs/Web/CSS/color_value/color), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color-mix()`](/de/docs/Web/CSS/color_value/color-mix) werden nun unterstützt, zusammen mit der Eigenschaft [`forced-color-adjust`](/de/docs/Web/CSS/forced-color-adjust).
  Für weitere Informationen zu den funktionalen Notationen siehe die [CSS-Farbwert](/de/docs/Web/CSS/color_value) Dokumentation.
  ([Firefox-Bug 1352753](https://bugzil.la/1352753), [Firefox-Bug 1813497](https://bugzil.la/1813497), [Firefox-Bug 1818819](https://bugzil.la/1818819), [Firefox-Bug 1824526](https://bugzil.la/1824526)).
- Die Syntax [`:nth-child of <selector>`](/de/docs/Web/CSS/:nth-child#the_of_selector_syntax) ermöglicht es, eine Gruppe von Kindern basierend auf der `An+B` Regel anzusprechen, die auch einem definierten Selektor entspricht.
  Siehe ([Firefox-Bug 1808229](https://bugzil.la/1808229)) für weitere Details.
- Das Medienmerkmal [`scripting`](/de/docs/Web/CSS/@media/scripting) wird nun unterstützt. Siehe ([Firefox-Bug 1166581](https://bugzil.la/1166581)) für weitere Details.
- Die Eigenschaft [`content`](/de/docs/Web/CSS/content) unterstützt nun alle Bildtypen einschließlich `<gradient>`, `image-set()` und `url()`. Siehe ([Firefox-Bug 1684958](https://bugzil.la/1684958)) für weitere Details. Derzeit gibt es ein Problem mit den `::before` und `::after` Pseudo-Selektoren, das bedeutet, dass sie `<gradient>` nicht darstellen. Siehe ([Firefox-Bug 1832901](https://bugzil.la/1832901)) für weitere Details.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset) und [`OffscreenCanvasRenderingContext2D.reset()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.reset) werden nun unterstützt und können verwendet werden, um den zugehörigen Rendering-Kontext in seinen Standardzustand zurückzusetzen.
  ([Firefox-Bug 1709347](https://bugzil.la/1709347)).
- Die [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) wird nun unterstützt.
  Die durch diese API bereitgestellten Schnittstellen werden verwendet, um Daten mit den Formaten `gzip` und `deflate` zu komprimieren und zu dekomprimieren ([Firefox-Bug 1823619](https://bugzil.la/1823619)).
- Die veraltete und nicht-standardisierte `mozImageSmoothingEnabled` Eigenschaft ist jetzt deaktiviert.
  Siehe die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) Eigenschaft für das Glätten in skalierten Bildern ([Firefox-Bug 1822955](https://bugzil.la/1822955)).

#### Medien, WebRTC und Web Audio

- Der [AV1 Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) ist nun auf Android aktiviert. Hardwarebeschleunigtes Dekodieren wird verwendet, wenn es vom Gerät unterstützt wird ([Firefox-Bug 1672276](https://bugzil.la/1672276)).
- Die folgenden WebRTC-Methoden, -Eigenschaften und -Dictionaries werden nun unterstützt: [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static), [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static), [`RTCRtpSender.setStreams()`](/de/docs/Web/API/RTCRtpSender/setStreams), [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) & [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp), [`RTCMediaSourceStats`](/de/docs/Web/API/RTCMediaSourceStats), [`RTCPeerConnection.connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) und [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats).
  Die entsprechenden Bug-Reports sind jeweils: [Firefox-Bug 1531460](https://bugzil.la/1531460), [Firefox-Bug 1531461](https://bugzil.la/1531461), [Firefox-Bug 1510802](https://bugzil.la/1510802), [Firefox-Bug 1278299](https://bugzil.la/1278299), [Firefox-Bug 1804678](https://bugzil.la/1804678), [Firefox-Bug 1265827](https://bugzil.la/1265827) und [Firefox-Bug 1531087](https://bugzil.la/1531087).

#### Entfernungen

- Das veraltete und nicht-standardisierte `CanvasRenderingContext2D.mozTextStyle` Attribut wurde dauerhaft entfernt. Dieses war zuvor hinter einer Präferenz versteckt. ([Firefox-Bug 1294362](https://bugzil.la/1294362)).
- Die veralteten und nicht-standardisierten Attribute `mozRTCPeerConnection`, `mozRTCIceCandidate` und `mozRTCSessionDescription` wurden dauerhaft entfernt ([Firefox-Bug 1531812](https://bugzil.la/1531812)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für die Serialisierung von `Node` Objekten innerhalb eines Shadow DOM und die `shadowRoot` Eigenschaft auf `Node` Objekten hinzugefügt ([Firefox-Bug 1802137](https://bugzil.la/1802137)).
- Unterstützung für zwischengespeicherte Antworten für die `network.responseStarted` und `network.responseCompleted` Ereignisse hinzugefügt ([Firefox-Bug 1806802](https://bugzil.la/1806802) und [Firefox-Bug 1806794](https://bugzil.la/1806794)).
- Ein Problem wurde behoben, bei dem die `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse für Navigationsvorgänge mit `document.open()` und `document.close()` fehlten ([Firefox-Bug 1822772](https://bugzil.la/1822772)).
- Ein Problem wurde behoben, bei dem der `script.callFunction` Befehl einen `invalid argument` Fehler auslöste, wenn ein unbekanntes Objekt als Argument übergeben wurde, anstatt des erwarteten `no such handle` Fehlers ([Firefox-Bug 1821039](https://bugzil.la/1821039)).

#### Marionette

- Die `moz:useNonSpecCompliantPointerOrigin` Fähigkeit ist nun veraltet und wird in Firefox 116 vollständig entfernt ([Firefox-Bug 1824911](https://bugzil.la/1824911)).
- Die Befehle `WebDriver:FindElementFromShadowRoot` und `WebDriver:FindElementsFromShadowRoot` wurden implementiert ([Firefox-Bug 1700095](https://bugzil.la/1700095)).
- Die Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` wurden implementiert ([Firefox-Bug 1585622](https://bugzil.la/1585622)).
- Unterstützung für den `background` Parameter des `WebDriver:Print` Befehls hinzugefügt ([Firefox-Bug 1783086](https://bugzil.la/1783086)).
- Unterstützung für den `orientation` Parameter des `WebDriver:Print` Befehls hinzugefügt ([Firefox-Bug 1791819](https://bugzil.la/1791819)).
- Ein Problem mit `DOMTokenList` Instanzen wurde behoben, die nun als Sammlungen anstelle von willkürlichen Objekten zurückgegeben werden ([Firefox-Bug 1823464](https://bugzil.la/1823464)).

## Änderungen für Add-on-Entwickler

- Wenn eine Erweiterung mehrere Listener für dasselbe Ereignis registriert, werden alle Event-Listener aufgerufen, wenn die Event-Seite aufwacht, anstatt nur der erste ([Firefox-Bug 1798655](https://bugzil.la/1798655)).
- Unterstützung wird nun für die {{WebExtAPIRef("declarativeNetRequest")}} API bereitgestellt ([Firefox-Bug 1782685](https://bugzil.la/1782685)).
- Der `gecko_android` Unterschlüssel wurde zum [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel hinzugefügt. Dieser Unterschlüssel ermöglicht es einer Erweiterung, den Bereich von Firefox für Android-Versionen anzugeben, mit dem es kompatibel ist ([Firefox-Bug 1824237](https://bugzil.la/1824237)).

## Sonstiges

- Unterstützung für animierte [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) (AV1 Image Format Dateien) Bilder.
  Zuvor wurden sie als Standbilder angezeigt, ohne dass Webseiten dies erkennen und auf ein anderes Format zurückgreifen konnten.
  ([Firefox-Bug 1825580](https://bugzil.la/1825580)).

## Ältere Versionen

{{Firefox_for_developers}}
