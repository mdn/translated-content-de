---
title: "MediaTrackConstraints: Eigenschaft echoCancellation"
short-title: echoCancellation
slug: Web/API/MediaTrackConstraints/echoCancellation
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`echoCancellation`**-Eigenschaftslexikon [der `MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die angeforderten oder zwingenden Einschränkungen beschreibt, die für den Wert der [`echoCancellation`](/de/docs/Web/API/MediaTrackSettings/echoCancellation)-einstellbaren Eigenschaft festgelegt sind.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.echoCancellation`](/de/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation) überprüfen, wie er von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Typischerweise ist dies jedoch unnötig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

Da [RTP](/de/docs/Glossary/RTP) diese Informationen nicht enthält, werden Tracks, die mit einer [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, diese Eigenschaft niemals enthalten.

## Wert

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der Benutzeragent versuchen, Medien mit aktivierter oder deaktivierter Echokompensation entsprechend der Spezifikation zu erhalten, falls möglich, aber nicht fehlschlagen, wenn dies nicht möglich ist. Wenn der Wert stattdessen als Objekt mit einem `exact`-Feld angegeben wird, gibt der boolesche Wert dieses Feldes eine erforderliche Einstellung für das Echounterdrückungsmerkmal an; wenn dies nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
