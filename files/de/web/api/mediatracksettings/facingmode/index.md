---
title: "MediaTrackSettings: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackSettings/facingMode
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`facingMode`**-Eigenschafts des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Wörterbuchs ist eine Zeichenkette, die die Richtung angibt, in die die Kamera, die die Videospur produziert, dargestellt durch die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) aktuell zeigt. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie in der [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) Eigenschaft beschrieben, die Sie beim Aufrufen von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.facingMode`](/de/docs/Web/API/MediaTrackSupportedConstraints/facingMode) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Information nicht enthält, werden Spuren, die mit einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Eine Zeichenkette, deren Wert einer der Werte in [`VideoFacingModeEnum`](#videofacingmodeenum) ist.

### VideoFacingModeEnum

Die folgenden Zeichenketten sind erlaubte Werte für den Facing-Modus. Diese können separate Kameras darstellen oder Richtungen, in die eine verstellbare Kamera gerichtet werden kann.

- `"user"`
  - : Die Videoquelle ist dem Benutzer zugewandt; dies umfasst zum Beispiel die Frontkamera eines Smartphones.
- `"environment"`
  - : Die Videoquelle ist vom Benutzer weggerichtet und zeigt ihre Umgebung. Dies ist die Rückkamera eines Smartphones.
- `"left"`
  - : Die Videoquelle ist dem Benutzer zugewandt, jedoch zu ihrer linken Seite, wie eine Kamera, die auf den Benutzer gerichtet ist, jedoch über ihre linke Schulter.
- `"right"`
  - : Die Videoquelle ist dem Benutzer zugewandt, jedoch zu ihrer rechten Seite, wie eine Kamera, die auf den Benutzer gerichtet ist, jedoch über ihre rechte Schulter.

## Beispiele

Siehe das [Beispiel zum Constraint-Übungswerkzeug](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
