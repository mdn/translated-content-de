---
title: "MediaTrackConstraints: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackConstraints/deviceId
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`deviceId`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)-eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.deviceId`](/de/docs/Web/API/MediaTrackSupportedConstraints/deviceId) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

Da [RTP](/de/docs/Glossary/RTP) diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziiert sind, diese Eigenschaft niemals enthalten.

## Wert

Ein Objekt basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das eine oder mehrere akzeptable, ideale und/oder exakte (obligatorische) Geräte-IDs angibt, die als Quelle für Mediainhalte akzeptabel sind.

Geräte-IDs sind für einen bestimmten Ursprung eindeutig und bleiben über Browsing-Sessions auf demselben Ursprung hinweg gleich. Der Wert von `deviceId` wird jedoch durch die Quelle des Inhalts des Tracks bestimmt, und es gibt kein bestimmtes Format, das durch die Spezifikation vorgeschrieben ist (obwohl eine Art GUID empfohlen wird). Das bedeutet, dass ein bestimmter Track nur einen Wert für das `deviceId` zurückgibt, wenn Sie [`getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen.

Aus diesem Grund ist das `deviceId` bei einem Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) nutzlos, da es nur einen möglichen Wert gibt; Sie können jedoch ein `deviceId` aufzeichnen und verwenden, um sicherzustellen, dass Sie bei mehreren Aufrufen von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) dieselbe Quelle erhalten.

> [!NOTE]
> Eine Ausnahme von der Regel, dass Geräte-IDs über Browsing-Sessions hinweg gleich bleiben: Im privaten Browsing-Modus wird eine andere ID verwendet, die sich in jeder Browsing-Session ändert.

## Beispiele

Siehe das Beispiel des [Constraint-Übersetzers](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
