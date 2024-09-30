---
title: "MediaTrackSettings: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackSettings/deviceId
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`deviceId`**-Attribut des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist ein String, der die Quelle für den entsprechenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) für den Ursprung der Browsersitzung eindeutig identifiziert. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der [`MediaTrackConstraints.deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)-Eigenschaft beschrieben, die Sie beim Aufrufen von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) angegeben haben.

Falls erforderlich, können Sie überprüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.deviceId`](/de/docs/Web/API/MediaTrackSupportedConstraints/deviceId) prüfen, wie er von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Information nicht enthält, werden zu einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gehörende Tracks niemals diese Eigenschaft enthalten.

## Wert

Ein String, dessen Wert ein ursprungs-eindeutiger Identifikator für die Quelle des Tracks ist. Diese ID ist über mehrere Browsersitzungen für den gleichen Ursprung gültig und wird garantiert für alle anderen Ursprünge unterschiedlich sein, sodass Sie sie bedenkenlos verwenden können, um zu verlangen, dass dieselbe Quelle für mehrere Sitzungen verwendet wird.

Der tatsächliche Wert des Strings wird jedoch von der Quelle des Tracks bestimmt, und es gibt keine Garantie, welche Form er annehmen wird, obwohl die Spezifikation empfiehlt, dass es sich um einen GUID handelt.

Da es eine Eins-zu-Eins-Zuordnung von ID mit jeder Quelle gibt, werden alle Tracks mit derselben Quelle für jeden gegebenen Ursprung dieselbe ID teilen, sodass [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) immer genau einen Wert für `deviceId` zurückgibt. Das macht die Geräte-ID nicht nützlich für Änderungen an Einschränkungen, wenn [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen wird.

> [!NOTE]
> Eine Ausnahme von der Regel, dass Geräte-IDs über Browsersitzungen hinweg gleich sind: Der private Modus verwendet eine andere ID und ändert sie jede Browsersitzung.

## Beispiele

Siehe das Beispiel [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
