---
title: "MediaTrackSettings: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaTrackSettings/groupId
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`groupId`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Dictionaries ist eine sitzungsübergreifend eindeutige
Zeichenkette, die die Gruppe von Geräten identifiziert, welche die Quelle für den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält. Dies ermöglicht es Ihnen herauszufinden, welcher Wert ausgewählt wurde, um den angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) Eigenschaft beschrieben, die Sie beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) angegeben haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) prüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die sie nicht kennen.

Da {{Glossary("RTP", "RTP")}} diese Informationen nicht enthält, werden Spuren, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Eine Zeichenkette, deren Wert eine sitzungsübergreifend eindeutige Kennung für eine Gruppe von Geräten ist, welche die Quelle der Inhalte der Spur enthält. Zwei Geräte teilen sich die gleiche Gruppen-ID, wenn sie zum selben physischen Hardwaregerät gehören. Zum Beispiel hat ein Headset zwei Geräte: ein Mikrofon, das als Quelle für Audiotracks dienen kann, und einen Lautsprecher, der als Audioausgabe dienen kann.

Die Gruppen-ID ist nicht über mehrere Sitzungssitzungen hinweg nutzbar. Sie kann jedoch verwendet werden, um sicherzustellen, dass Audioeingabe und -ausgabe beide mit demselben Headset durchgeführt werden, oder um sicherzustellen, dass die eingebaute Kamera und das Mikrofon eines Telefons für Videokonferenzen genutzt werden.

Der tatsächliche Wert der Zeichenkette wird von der Quelle des Tracks bestimmt, und es gibt keine Garantie, welche Form sie annehmen wird, obwohl die Spezifikation empfiehlt, dass sie eine GUID ist.

Da diese Eigenschaft zwischen Sitzungssitzungen nicht stabil bleibt, ist ihre Nützlichkeit beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) im Allgemeinen darauf beschränkt, sicherzustellen, dass Aufgaben, die während derselben Sitzungssitzung ausgeführt werden, Geräte aus derselben Gruppe verwenden (oder dass sie keine Geräte aus derselben Gruppe verwenden). Es gibt keine Situation, in der die `groupId`-Eigenschaft beim Aufrufen von `applyConstraints()` nützlich ist, da der Wert nicht geändert werden kann.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackSettings.deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
- [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
