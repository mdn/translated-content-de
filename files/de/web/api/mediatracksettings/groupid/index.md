---
title: "MediaTrackSettings: Eigenschaft groupId"
short-title: groupId
slug: Web/API/MediaTrackSettings/groupId
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`groupId`** des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionaries ist eine innerhalb einer Browsersitzung eindeutige Zeichenfolge. Sie identifiziert die Gerätegruppe, zu der die Quelle des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gehört. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen für diese Eigenschaft angegebenen Constraints zu erfüllen. Diese sind in der Eigenschaft [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId) beschrieben, die Sie beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) angegeben haben.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird, indem Sie den Wert von [`groupId`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#groupid) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser unbekannte Constraints ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, weisen Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, diese Eigenschaft nie auf.

## Wert

Eine Zeichenfolge, deren Wert eine innerhalb einer Browsersitzung eindeutige Kennung für eine Gerätegruppe ist, zu der die Quelle des Track-Inhalts gehört. Zwei Geräte haben dieselbe Gruppen-ID, wenn sie zum selben physischen Gerät gehören. Ein Headset umfasst beispielsweise zwei Geräte: ein Mikrofon, das als Quelle für Audio-Tracks dienen kann, und einen Lautsprecher, der Audio ausgeben kann.

Die Gruppen-ID kann nicht über mehrere Browsersitzungen hinweg verwendet werden. Sie kann jedoch beispielsweise dazu dienen, sicherzustellen, dass Audioeingabe und -ausgabe über dasselbe Headset erfolgen oder dass bei einer Videokonferenz die integrierte Kamera und das integrierte Mikrofon eines Smartphones verwendet werden.

Der tatsächliche Wert der Zeichenfolge wird von der Quelle des Tracks bestimmt. Es gibt keine Garantie dafür, welches Format er hat, auch wenn die Spezifikation eine GUID empfiehlt.

Da diese Eigenschaft nicht über Browsersitzungen hinweg stabil ist, beschränkt sich ihr Nutzen bei Aufrufen von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) im Allgemeinen darauf, sicherzustellen, dass Aufgaben innerhalb derselben Browsersitzung Geräte aus derselben Gruppe verwenden – oder gerade nicht. Beim Aufruf von `applyConstraints()` ist die groupId nicht nützlich, da sich ihr Wert nicht ändern lässt.

## Beispiele

Sehen Sie sich das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, Constraints und Settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackSettings.deviceId`](/de/docs/Web/API/MediaTrackSettings/deviceId)
- [`MediaTrackConstraints.groupId`](/de/docs/Web/API/MediaTrackConstraints/groupId)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
