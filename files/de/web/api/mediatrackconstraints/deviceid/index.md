---
title: "MediaTrackConstraints: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackConstraints/deviceId
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`deviceId`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`deviceId`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#deviceid) untersuchen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, diese Eigenschaft nie auf.

## Wert

Ein auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) basierendes Objekt, das eine oder mehrere akzeptable, bevorzugte und/oder exakte (zwingende) Geräte-IDs angibt, die als Quelle für Medieninhalte infrage kommen.

Geräte-IDs sind für einen bestimmten Origin eindeutig und bleiben über Browsersitzungen hinweg für denselben Origin gleich. Der Wert von `deviceId` wird jedoch durch die Quelle des Track-Inhalts bestimmt. Die Spezifikation schreibt dafür kein bestimmtes Format vor (empfohlen wird allerdings eine Art GUID). Das bedeutet, dass ein bestimmter Track bei einem Aufruf von [`getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) nur einen Wert für `deviceId` zurückgibt.

Deshalb ist die Geräte-ID bei einem Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) nicht nützlich, da nur ein Wert möglich ist. Sie können eine `deviceId` jedoch speichern und damit sicherstellen, dass Sie bei mehreren Aufrufen von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) dieselbe Quelle erhalten.

> [!NOTE]
> Eine Ausnahme von der Regel, dass Geräte-IDs über Browsersitzungen hinweg gleich bleiben, ist der private Modus: Er verwendet eine andere ID, die sich mit jeder Browsersitzung ändert.

## Beispiele

Siehe das Beispiel zum [Ausprobieren von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
