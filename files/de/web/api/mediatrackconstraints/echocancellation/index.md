---
title: "MediaTrackConstraints: echoCancellation-Eigenschaft"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`echoCancellation`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die angeforderten oder obligatorischen Einschränkungen beschreibt, die dem Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)-Einschränkbare Eigenschaft auferlegt werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht erforderlich, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Da [RTP](/de/docs/Glossary/RTP) diese Informationen nicht enthält, werden Spuren im Zusammenhang mit einer [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) diese Eigenschaft niemals enthalten.

## Wert

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der Benutzeragent versuchen, Medien mit aktivierter oder deaktivierter Echounterdrückung wie spezifiziert zu erhalten, wenn möglich, aber er wird nicht fehlschlagen, wenn dies nicht möglich ist. Wenn stattdessen der Wert als ein Objekt mit einem `exact`-Feld angegeben wird, gibt der Boolean-Wert dieses Feldes eine erforderliche Einstellung für die Echounterdrückungsfunktion an; wenn diese nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das Beispiel im [Constraint Übungsleitfaden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
