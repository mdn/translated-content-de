---
title: "MediaTrackSettings: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackSettings/deviceId
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`deviceId`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist ein String, der die Quelle für den entsprechenden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) für den Ursprung der Browsersitzung eindeutig identifiziert. Dies ermöglicht Ihnen festzustellen, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie in der [`MediaTrackConstraints.deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)-Eigenschaft beschrieben, die Sie bei einem Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bereitgestellt haben.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.deviceId`](/de/docs/Web/API/MediaTrackSupportedConstraints/deviceId) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Informationen nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Ein String, dessen Wert ein ursprungs-eindeutiger Bezeichner für die Quelle des Tracks ist. Diese ID ist über mehrere Browsersitzungen für den gleichen Ursprung gültig und ist garantiert für alle anderen Ursprünge unterschiedlich, sodass Sie sie sicher verwenden können, um zu verlangen, dass die gleiche Quelle für mehrere Sitzungen verwendet wird.

Der tatsächliche Wert des Strings wird jedoch von der Quelle des Tracks bestimmt, und es gibt keine Garantie, in welcher Form er vorliegen wird, obwohl die Spezifikation empfiehlt, dass es eine GUID ist.

Da es eine Eins-zu-Eins-Zuordnung von ID zu jeder Quelle gibt, werden alle Tracks mit derselben Quelle die gleiche ID für einen bestimmten Ursprung teilen, sodass [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) immer genau einen Wert für `deviceId` zurückgeben wird. Das macht die Geräte-ID nicht nützlich für Änderungen der Einschränkungen beim Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints).

> [!NOTE]
> Eine Ausnahme von der Regel, dass Geräte-IDs über Browsersitzungen hinweg gleich bleiben:
> Im privaten Modus des Browsers wird eine andere ID verwendet, die sich bei jeder Browsersitzung ändert.

## Beispiele

Siehe das Beispiel des [Einschränkungs-Übersetzers](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
