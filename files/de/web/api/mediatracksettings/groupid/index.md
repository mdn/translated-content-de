---
title: "MediaTrackSettings: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaTrackSettings/groupId
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`groupId`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist ein während der Browsersitzung eindeutiger String, der die Gerätegruppe identifiziert, die die Quelle für den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) beschrieben, die Sie bei einem Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) angegeben haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Informationen nicht enthält, werden mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbundene Tracks diese Eigenschaft niemals enthalten.

## Wert

Ein String, dessen Wert ein während der Browsersitzung eindeutiger Bezeichner für eine Gruppe von Geräten ist, die die Quelle des Track-Inhalts umfasst. Zwei Geräte teilen dieselbe Gruppen-ID, wenn sie zum selben physischen Hardwaregerät gehören. Beispielsweise hat ein Headset zwei Geräte: ein Mikrofon, das als Quelle für Audiotracks dienen kann, und einen Lautsprecher, der als Ausgabe für Audio dienen kann.

Die Gruppen-ID ist nicht über mehrere Browsersitzungen hinweg nutzbar. Sie kann jedoch verwendet werden, um sicherzustellen, dass Audioeingabe und -ausgabe beide auf demselben Headset erfolgen, oder um sicherzustellen, dass die eingebaute Kamera und das Mikrofon eines Telefons für Videokonferenzen verwendet werden.

Der tatsächliche Wert des Strings wird jedoch durch die Quelle des Tracks bestimmt, und es gibt keine Garantie, welche Form er annehmen wird, obwohl die Spezifikation empfiehlt, dass es sich um eine GUID handelt.

Da diese Eigenschaft nicht stabil über Browsersitzungen hinweg ist, ist ihre Nützlichkeit beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) im Allgemeinen darauf beschränkt, sicherzustellen, dass Aufgaben, die während derselben Browsersitzung durchgeführt werden, Geräte aus derselben Gruppe verwenden (oder dass sie keine Geräte aus derselben Gruppe verwenden). Es gibt keine Situation, in der die groupId beim Aufruf von `applyConstraints()` nützlich wäre, da der Wert nicht geändert werden kann.

## Beispiele

Siehe das [Beispiel zum Ausprobieren von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
