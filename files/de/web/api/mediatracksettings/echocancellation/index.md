---
title: "MediaTrackSettings: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackSettings/echoCancellation
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`echoCancellation`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist ein Boolescher Wert, der angibt, ob Echo-Unterdrückung auf einer Audiospur aktiviert ist. Dies lässt Sie feststellen, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie im [`MediaTrackConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation) beschriebenen Parameter, den Sie bei Aufrufen von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben haben.

Echo-Unterdrückung ist eine Funktion, die versucht, Echo-Effekte in einer bidirektionalen Audioverbindung zu verhindern, indem sie versucht, das Übersprechen zwischen dem Ausgabegerät des Benutzers und dem Eingabegerät zu reduzieren oder zu eliminieren. Beispielsweise könnte sie einen Filter anwenden, der das auf den Lautsprechern erzeugte Geräusch negiert, damit es nicht in die vom Mikrofon erzeugte Eingabespur aufgenommen wird.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Typischerweise ist dies jedoch unnötig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht einschließt, werden Spuren, die mit einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert sind, diese Eigenschaft niemals enthalten.

## Wert

Ein Boolescher Wert, der `true` ist, wenn die Spur Echo-Unterdrückungsfunktionen aktiviert hat, oder `false`, wenn die Echo-Unterdrückung deaktiviert ist.

## Beispiele

Siehe das [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
