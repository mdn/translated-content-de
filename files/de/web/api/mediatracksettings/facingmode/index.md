---
title: "MediaTrackSettings: facingMode-Eigenschaft"
short-title: facingMode
slug: Web/API/MediaTrackSettings/facingMode
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`facingMode`**-Attribut des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Wörterbuchs ist ein String, der angibt, in welche Richtung die Kamera, die die Video-Spur repräsentiert, derzeit zeigt. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) Eigenschaft beschrieben, die Sie bei einem Aufruf von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Bei Bedarf können Sie bestimmen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.facingMode`](/de/docs/Web/API/MediaTrackSupportedConstraints/facingMode) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht erforderlich, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Ein String, dessen Wert einer der Strings in
[`VideoFacingModeEnum`](#videofacingmodeenum) ist.

### VideoFacingModeEnum

Die folgenden Strings sind zulässige Werte für den facing mode. Diese können separate Kameras darstellen oder Richtungen, in die eine verstellbare Kamera gerichtet werden kann.

- `"user"`
  - : Die Videoquelle zeigt zum Benutzer; dies umfasst beispielsweise die nach vorne gerichtete Kamera auf einem Smartphone.
- `"environment"`
  - : Die Videoquelle zeigt vom Benutzer weg und betrachtet somit dessen Umgebung. Dies ist die Rückkamera auf einem Smartphone.
- `"left"`
  - : Die Videoquelle zeigt zum Benutzer, aber nach links, wie eine Kamera, die auf den Benutzer zielt, jedoch über dessen linke Schulter.
- `"right"`
  - : Die Videoquelle zeigt zum Benutzer, aber nach rechts, wie eine Kamera, die auf den Benutzer zielt, jedoch über dessen rechte Schulter.

## Beispiele

Siehe das Beispiel im [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
