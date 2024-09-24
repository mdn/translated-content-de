---
title: "MediaTrackSettings: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackSettings/echoCancellation
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`echoCancellation`**-Attribut des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist ein Boolean-Wert, der angibt, ob die Echokompensation für einen Audiotrack aktiviert ist oder nicht. Dies ermöglicht es Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft gerecht zu werden, wie im {{domxref("MediaTrackConstraints.echoCancellation")}}-Attribut beschrieben, das Sie beim Aufruf von entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} bereitgestellt haben.

Echokompensation ist eine Funktion, die versucht, Echogeräusche in einer Zweiwege-Audioverbindung zu verhindern, indem versucht wird, das Übersprechen zwischen dem Ausgabegerät des Benutzers und dessen Eingabegerät zu reduzieren oder zu eliminieren. Zum Beispiel könnte es einen Filter anwenden, der den auf den Lautsprechern erzeugten Ton negiert, um zu verhindern, dass dieser in die vom Mikrofon erzeugte Eingabespur aufgenommen wird.

Wenn nötig, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.echoCancellation")}} prüfen, wie er von einem Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht nötig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da das {{Glossary("RTP")}} diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verbunden sind, diese Eigenschaft niemals einschließen.

## Wert

Ein Boolean-Wert, der `true` ist, wenn der Track die Funktionalität der Echokompensation aktiviert hat, oder `false`, wenn die Echokompensation deaktiviert ist.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.echoCancellation")}}
- {{domxref("MediaTrackSettings")}}
