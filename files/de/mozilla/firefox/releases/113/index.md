---
title: Firefox 113 für Entwickler
slug: Mozilla/Firefox/Releases/113
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 113, die Entwickler betreffen. Firefox 113 wurde am 09. Mai 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die funktionalen Notationen [`color()`](/de/docs/Web/CSS/color_value/color), [`lab()`](/de/docs/Web/CSS/color_value/lab), [`lch()`](/de/docs/Web/CSS/color_value/lch), [`oklab()`](/de/docs/Web/CSS/color_value/oklab), [`oklch()`](/de/docs/Web/CSS/color_value/oklch) und [`color-mix()`](/de/docs/Web/CSS/color_value/color-mix) werden nun unterstützt, zusammen mit der Eigenschaft [`forced-color-adjust`](/de/docs/Web/CSS/forced-color-adjust).
  Für mehr Informationen über die funktionalen Notationen, siehe die [CSS-Farbwert](/de/docs/Web/CSS/color_value) Dokumentation.
  ([Firefox-Bug 1352753](https://bugzil.la/1352753), [Firefox-Bug 1813497](https://bugzil.la/1813497), [Firefox-Bug 1818819](https://bugzil.la/1818819), [Firefox-Bug 1824526](https://bugzil.la/1824526)).
- Die [`:nth-child of <selector>` Syntax](/de/docs/Web/CSS/:nth-child#the_of_selector_syntax) erlaubt es Ihnen, eine Gruppe von Kindern basierend auf der `An+B` Regel anzusprechen, die auch einen definierten Selektor trifft.
  Siehe ([Firefox-Bug 1808229](https://bugzil.la/1808229)) für mehr Details.
- Die [`scripting`](/de/docs/Web/CSS/@media/scripting) Media-Feature wird jetzt unterstützt. Siehe ([Firefox-Bug 1166581](https://bugzil.la/1166581)) für mehr Details.
- Die [`content`](/de/docs/Web/CSS/content) Eigenschaft unterstützt jetzt alle Bildtypen, einschließlich `<gradient>`, `image-set()` und `url()`. Siehe ([Firefox-Bug 1684958](https://bugzil.la/1684958)) für mehr Details. Momentan gibt es ein Problem mit den `::before` und `::after` Pseudo-Selektoren, wodurch `<gradient>`s nicht dargestellt werden. Siehe ([Firefox-Bug 1832901](https://bugzil.la/1832901)) für mehr Details.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset) und [`OffscreenCanvasRenderingContext2D.reset()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.reset) werden jetzt unterstützt und können genutzt werden, um den zugehörigen Rendering-Kontext auf seinen Standardzustand zurückzusetzen.
  ([Firefox-Bug 1709347](https://bugzil.la/1709347)).
- Die [Compression Streams API](/de/docs/Web/API/Compression_Streams_API) wird jetzt unterstützt.
  Die von dieser API bereitgestellten Schnittstellen werden verwendet, um Daten im `gzip`- und `deflate`-Format zu komprimieren und zu dekomprimieren ([Firefox-Bug 1823619](https://bugzil.la/1823619)).
- Die veraltete und nicht-standardisierte `mozImageSmoothingEnabled` Eigenschaft ist nun deaktiviert.
  Siehe die [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) Eigenschaft für Glättung in skalierten Bildern ([Firefox-Bug 1822955](https://bugzil.la/1822955)).

#### Medien, WebRTC und Web Audio

- Der [AV1-Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) ist jetzt auf Android aktiviert. Hardwarebeschleunigtes Dekodieren wird verwendet, wenn es vom Gerät unterstützt wird ([Firefox-Bug 1672276](https://bugzil.la/1672276)).
- Die folgenden WebRTC-Methoden, -Eigenschaften und -Dictionaries werden jetzt unterstützt: [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static), [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static), [`RTCRtpSender.setStreams()`](/de/docs/Web/API/RTCRtpSender/setStreams), [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) & [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp), [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) & [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats), [`RTCPeerConnection.connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) und [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats).
  Die entsprechenden Fehlerberichte sind: [Firefox-Bug 1531460](https://bugzil.la/1531460), [Firefox-Bug 1531461](https://bugzil.la/1531461), [Firefox-Bug 1510802](https://bugzil.la/1510802), [Firefox-Bug 1278299](https://bugzil.la/1278299), [Firefox-Bug 1804678](https://bugzil.la/1804678), [Firefox-Bug 1265827](https://bugzil.la/1265827) und [Firefox-Bug 1531087](https://bugzil.la/1531087).

#### Entfernungen

- Das veraltete und nicht-standardisierte `CanvasRenderingContext2D.mozTextStyle` Attribut wurde dauerhaft entfernt. Dies war zuvor hinter einer Einstellung verborgen. ([Firefox-Bug 1294362](https://bugzil.la/1294362)).
- Die veralteten und nicht-standardisierten Attribute `mozRTCPeerConnection`, `mozRTCIceCandidate` und `mozRTCSessionDescription` wurden dauerhaft entfernt ([Firefox-Bug 1531812](https://bugzil.la/1531812)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das Serialisieren von `Node` Objekten innerhalb eines Shadow DOM und die `shadowRoot` Eigenschaft auf `Node` Objekten hinzugefügt ([Firefox-Bug 1802137](https://bugzil.la/1802137)).
- Unterstützung für zwischengespeicherte Antworten für die `network.responseStarted` und `network.responseCompleted` Ereignisse hinzugefügt ([Firefox-Bug 1806802](https://bugzil.la/1806802) und [Firefox-Bug 1806794](https://bugzil.la/1806794)).
- Ein Problem behoben, bei dem die `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse fehlten bei Navigationen, die `document.open()` und `document.close()` verwendeten ([Firefox-Bug 1822772](https://bugzil.la/1822772)).
- Ein Problem behoben, bei dem der `script.callFunction` Befehl einen `invalid argument` Fehler warf, wenn ein unbekanntes Objekt als Argument übergeben wurde, statt des erwarteten `no such handle` Fehlers ([Firefox-Bug 1821039](https://bugzil.la/1821039)).

#### Marionette

- Die Fähigkeit `moz:useNonSpecCompliantPointerOrigin` ist jetzt veraltet und wird in Firefox 116 vollständig entfernt ([Firefox-Bug 1824911](https://bugzil.la/1824911)).
- Die Befehle `WebDriver:FindElementFromShadowRoot` und `WebDriver:FindElementsFromShadowRoot` wurden implementiert ([Firefox-Bug 1700095](https://bugzil.la/1700095)).
- Die Befehle `WebDriver:GetComputedLabel` und `WebDriver:GetComputedRole` wurden implementiert ([Firefox-Bug 1585622](https://bugzil.la/1585622)).
- Unterstützung für den `background` Parameter des `WebDriver:Print` Befehls hinzugefügt ([Firefox-Bug 1783086](https://bugzil.la/1783086)).
- Unterstützung für den `orientation` Parameter des `WebDriver:Print` Befehls hinzugefügt ([Firefox-Bug 1791819](https://bugzil.la/1791819)).
- Ein Problem mit `DOMTokenList` Instanzen behoben, die jetzt als Sammlungen statt als beliebige Objekte zurückgegeben werden ([Firefox-Bug 1823464](https://bugzil.la/1823464)).

## Änderungen für Add-on-Entwickler

- Wenn eine Erweiterung mehrere Listener für dasselbe Ereignis registriert, werden alle Event-Listener aufgerufen, wenn die Ereignisseite aufwacht, anstatt nur den ersten ([Firefox-Bug 1798655](https://bugzil.la/1798655)).
- Unterstützung ist jetzt für die {{WebExtAPIRef("declarativeNetRequest")}} API vorhanden ([Firefox-Bug 1782685](https://bugzil.la/1782685)).
- Der `gecko_android` Unterschlüssel wurde zum [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel hinzugefügt. Dieser Unterschlüssel ermöglicht es einer Erweiterung, den Bereich der Firefox für Android Versionen anzugeben, mit denen sie kompatibel ist ([Firefox-Bug 1824237](https://bugzil.la/1824237)).

## Sonstiges

- Unterstützung für animierte [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) (AV1 Bildformat Dateien) Bilder.
  Zuvor wurden sie als Standbilder angezeigt, ohne dass Webseiten dies erkennen und auf ein anderes Format zurückgreifen konnten.
  ([Firefox-Bug 1825580](https://bugzil.la/1825580)).

## Ältere Versionen

{{Firefox_for_developers}}
