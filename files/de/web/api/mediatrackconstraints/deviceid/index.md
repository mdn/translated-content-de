---
title: "MediaTrackConstraints: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackConstraints/deviceId
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`deviceId`**-Eigenschaftswörterbuch von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId) beschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.deviceId`](/de/docs/Web/API/MediaTrackSupportedConstraints/deviceId) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

Da [RTP](/de/docs/Glossary/RTP) diese Informationen nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Ein Objekt basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das eine oder mehrere akzeptable, ideale und/oder genaue (zwingende) Geräte-IDs angibt, die als Quelle für Medieninhalte akzeptabel sind.

Geräte-IDs sind für einen bestimmten Ursprung eindeutig und sind garantiert in derselben Weise über Browsersitzungen hinweg auf demselben Ursprung gleich. Der Wert des `deviceId` wird jedoch durch die Quelle des Inhalts des Tracks bestimmt, und es gibt kein bestimmtes Format, das von der Spezifikation vorgeschrieben wird (obwohl eine Art GUID empfohlen wird). Das bedeutet, dass ein bestimmter Track nur einen Wert für das `deviceId` zurückgibt, wenn Sie [`getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen.

Aus diesem Grund gibt es keinen Nutzen für die Geräte-ID beim Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints), da es nur einen möglichen Wert gibt; Sie können jedoch ein `deviceId` aufzeichnen und verwenden, um sicherzustellen, dass Sie dieselbe Quelle für mehrere Aufrufe von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten.

> [!NOTE]
> Eine Ausnahme von der Regel, dass Geräte-IDs über Browsersitzungen hinweg gleich sind: Der private Browsing-Modus verwendet eine andere ID und ändert sie in jeder Browsersitzung.

## Beispiele

Siehe das Beispiel [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
