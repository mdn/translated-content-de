---
title: "MediaTrackSettings: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackSettings/echoCancellation
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`echoCancellation`**-Attribut des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist ein boolescher Wert, der angibt, ob die Echounterdrückung bei einer Audiospur aktiviert ist oder nicht. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft einzuhalten, wie in der [`MediaTrackConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)-Eigenschaft beschrieben, die Sie beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben haben.

Echounterdrückung ist eine Funktion, die versucht, Echoeffekte in einer Zwei-Wege-Audioverbindung zu verhindern, indem sie versucht, Übersprechen zwischen dem Ausgabegerät und dem Eingabegerät des Benutzers zu reduzieren oder zu beseitigen. Zum Beispiel könnte ein Filter angewendet werden, der verhindert, dass der auf den Lautsprechern erzeugte Ton in die von dem Mikrofon erzeugte Eingabespur aufgenommen wird.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Informationen nicht umfasst, werden Spuren, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft niemals umfassen.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Spur über eine aktivierte Echounterdrückungsfunktionalität verfügt, oder `false`, wenn die Echounterdrückung deaktiviert ist.

## Beispiele

Siehe das Beispiel im [Constraint-Übungsleitfaden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackConstraints/echoCancellation)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
