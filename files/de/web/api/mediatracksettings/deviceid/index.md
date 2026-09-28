---
title: "MediaTrackSettings: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackSettings/deviceId
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`deviceId`** des Dictionaries [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) ist eine Zeichenfolge, die die Quelle des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) für den Origin der Browsersitzung eindeutig identifiziert. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen angegebenen Einschränkungen für diese Eigenschaft zu erfüllen. Diese Einschränkungen haben Sie über die Eigenschaft [`MediaTrackConstraints.deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) angegeben.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird: Überprüfen Sie dazu den Wert von [`deviceId`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#deviceid), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht erforderlich, da Browser unbekannte Einschränkungen ignorieren.

Da {{Glossary("RTP", "RTP")}} diese Information nicht enthält, ist diese Eigenschaft bei Tracks, die einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zugeordnet sind, niemals vorhanden.

## Wert

Eine Zeichenfolge, deren Wert die Quelle des Tracks für einen Origin eindeutig identifiziert. Diese ID bleibt über mehrere Browsersitzungen desselben Origins hinweg gültig und ist für alle anderen Origins garantiert verschieden. Sie können sie daher beispielsweise verwenden, um in mehreren Sitzungen dieselbe Quelle anzufordern.

Der tatsächliche Wert der Zeichenfolge wird jedoch von der Quelle des Tracks bestimmt. Es gibt keine Garantie für sein Format, obwohl die Spezifikation eine GUID empfiehlt.

Da jeder Quelle genau eine ID zugeordnet ist, haben alle Tracks mit derselben Quelle für einen bestimmten Origin dieselbe ID. Deshalb gibt [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) für `deviceId` immer genau einen Wert zurück. Die Geräte-ID ist somit nicht hilfreich, wenn Sie Einschränkungen durch einen Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) ändern möchten.

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
- [`MediaTrackSettings.groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)
- [`MediaTrackConstraints.deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
