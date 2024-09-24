---
title: "MediaTrackSettings: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaTrackSettings/deviceId
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`deviceId`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist ein String, der die Quelle für den entsprechenden {{domxref("MediaStreamTrack")}} für den Ursprung der Browsersitzung eindeutig identifiziert. Dies ermöglicht Ihnen zu bestimmen, welcher Wert ausgewählt wurde, um Ihre angegebenen Einschränkungen für diesen Eigenschaftswert zu erfüllen, wie in der von Ihnen angegebenen {{domxref("MediaTrackConstraints.deviceId")}}-Eigenschaft beschrieben, als Sie {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} aufgerufen haben.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.deviceId")}} prüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Normalerweise ist dies jedoch nicht erforderlich, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

Da {{Glossary("RTP")}} diese Information nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("RTCPeerConnection")}} verbunden sind, diese Eigenschaft nie enthalten.

## Wert

Ein String, dessen Wert ein ursprungs-eindeutiger Bezeichner für die Quelle des Tracks ist. Diese ID ist über mehrere Browsersitzungen für denselben Ursprung gültig und garantiert, dass sie für alle anderen Ursprünge unterschiedlich ist, sodass Sie sie sicher verwenden können, um dieselbe Quelle für mehrere Sitzungen anzufordern.

Der tatsächliche Wert des Strings wird jedoch von der Quelle des Tracks bestimmt und es gibt keine Garantie, welche Form er haben wird, obwohl die Spezifikation empfiehlt, dass es sich um eine GUID handelt.

Da es eine eins-zu-eins-Zuordnung der ID mit jeder Quelle gibt, werden alle Tracks mit derselben Quelle die gleiche ID für einen bestimmten Ursprung teilen, sodass {{domxref("MediaStreamTrack.getCapabilities()")}} immer genau einen Wert für `deviceId` zurückgibt. Das macht die Geräte-ID nicht nützlich für Änderungen an Einschränkungen beim Aufrufen von {{domxref("MediaStreamTrack.applyConstraints()")}}.

> [!NOTE]
> Eine Ausnahme von der Regel, dass Geräte-IDs über Browsersitzungen hinweg gleich sind: Im privaten Browsing-Modus wird eine andere ID verwendet und bei jeder Browsersitzung geändert.

## Beispiele

Siehe das Beispiel [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackSettings.groupId")}}
- {{domxref("MediaTrackConstraints.deviceId")}}
- {{domxref("MediaTrackSettings")}}
