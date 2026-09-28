---
title: "MediaTrackSettings: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackSettings/echoCancellation
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die **`echoCancellation`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionary ist ein boolescher Wert, der angibt, ob die Echounterdrückung für einen Audiotrack aktiviert ist. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen festgelegten Constraints für diese Eigenschaft zu erfüllen. Diese Constraints geben Sie über die Eigenschaft [`MediaTrackConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation) an, wenn Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufrufen.

Die Echounterdrückung versucht, Echos bei einer bidirektionalen Audioverbindung zu verhindern, indem sie Übersprechen zwischen dem Ausgabegerät und dem Eingabegerät der Benutzerin oder des Benutzers reduziert oder beseitigt. Beispielsweise kann ein Filter dafür sorgen, dass der von den Lautsprechern ausgegebene Ton nicht in den vom Mikrofon erzeugten Eingabetrack gelangt.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird, indem Sie den Wert von [`echoCancellation`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#echocancellation) auswerten, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser unbekannte Constraints ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, diese Eigenschaft niemals auf.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Echounterdrückung für den Track aktiviert ist, oder `false`, wenn sie deaktiviert ist.

## Beispiele

Siehe das Beispiel zum [Ausprobieren von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, Constraints und Settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
