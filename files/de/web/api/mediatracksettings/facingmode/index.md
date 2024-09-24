---
title: "MediaTrackSettings: Eigenschaft facingMode"
short-title: facingMode
slug: Web/API/MediaTrackSettings/facingMode
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`facingMode`**-Attribut des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist ein String, der angibt, in welche Richtung die Kamera zeigt, die den Videostream der durch das {{domxref("MediaStreamTrack")}} repräsentierten Videospur erzeugt. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im Attribut {{domxref("MediaTrackConstraints.facingMode")}} beschrieben, das Sie beim Aufruf von entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} bereitgestellt haben.

Falls erforderlich, können Sie überprüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.facingMode")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle Einschränkungen, die sie nicht kennen, ignorieren.

Da {{Glossary("RTP")}} diese Information nicht enthält, werden Spuren, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} assoziiert sind, diese Eigenschaft niemals enthalten.

## Wert

Ein String, dessen Wert einer der Strings im
[`VideoFacingModeEnum`](#videofacingmodeenum) ist.

### VideoFacingModeEnum

Die folgenden Strings sind zulässige Werte für den Facing-Modus. Diese können separate Kameras darstellen oder Richtungen, in die eine verstellbare Kamera ausgerichtet werden kann.

- `"user"`
  - : Die Videoquelle zeigt zum Benutzer; dazu gehört zum Beispiel die Frontkamera eines Smartphones.
- `"environment"`
  - : Die Videoquelle weist vom Benutzer weg und zeigt somit auf dessen Umgebung. Dies ist die Rückkamera eines Smartphones.
- `"left"`
  - : Die Videoquelle zeigt zum Benutzer, jedoch zu dessen linker Seite, wie etwa eine Kamera, die auf den Benutzer, aber über seine linke Schulter ausgerichtet ist.
- `"right"`
  - : Die Videoquelle zeigt zum Benutzer, jedoch zu dessen rechter Seite, wie etwa eine Kamera, die auf den Benutzer, aber über seine rechte Schulter ausgerichtet ist.

## Beispiele

Siehe das Beispiel [Constraint Übungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.facingMode")}}
- {{domxref("MediaTrackSettings")}}
