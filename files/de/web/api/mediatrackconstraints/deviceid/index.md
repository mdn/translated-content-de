---
title: "MediaTrackConstraints: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackConstraints/deviceId
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die **`deviceId`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`deviceId`](/de/docs/Web/API/MediaStreamTrack/getSettings#deviceid) beschreibt.

Falls erforderlich, können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`deviceId`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#deviceid) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist dies jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft sind, diese Eigenschaft niemals auf.

## Wert

Ein auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) basierendes Objekt, das eine oder mehrere akzeptable, bevorzugte und/oder exakte (zwingende) Geräte-IDs angibt, die als Quelle für Medieninhalte infrage kommen.

Geräte-IDs sind für einen bestimmten Ursprung eindeutig und bleiben über Browsersitzungen hinweg für denselben Ursprung gleich. Der Wert von `deviceId` wird jedoch durch die Quelle des Track-Inhalts bestimmt, und die Spezifikation schreibt kein bestimmtes Format vor (empfiehlt aber eine Art GUID). Das bedeutet, dass ein bestimmter Track beim Aufruf von [`getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) nur einen Wert für `deviceId` zurückgibt.

Deshalb ist die Geräte-ID beim Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) nicht nützlich, da es nur einen möglichen Wert gibt. Sie können eine `deviceId` jedoch speichern und damit sicherstellen, dass Sie bei mehreren Aufrufen von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) dieselbe Quelle erhalten.

> [!NOTE]
> Eine Ausnahme von der Regel, dass Geräte-IDs über Browsersitzungen hinweg gleich bleiben, ist der private Modus: Er verwendet eine andere ID, die sich mit jeder Browsersitzung ändert.

## Beispiele

Sehen Sie sich das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

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
