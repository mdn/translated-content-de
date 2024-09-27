---
title: "MediaTrackConstraints: noiseSuppression-Eigenschaft"
short-title: noiseSuppression
slug: Web/API/MediaTrackConstraints/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`noiseSuppression`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die angeforderten oder zwingend erforderlichen Einschränkungen beschreibt, die auf den Wert der [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)-eingrenzbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Rauschunterdrückung wird normalerweise von Mikrofonen bereitgestellt, kann jedoch auch von anderen Eingabequellen geliefert werden.

## Wert

Wenn dieser Wert einfach `true` oder `false` ist, wird der User-Agent versuchen, Medien mit aktivierter oder deaktivierter Rauschunterdrückung entsprechend der Spezifikation zu erhalten, soweit dies möglich ist. Falls stattdessen der Wert als Objekt mit einem `exact`-Feld angegeben ist, gibt der Boolean-Wert dieses Feldes eine erforderliche Einstellung für die Rauschunterdrückungsfunktion an; wenn diese nicht erfüllt werden kann, wird die Anfrage mit einem Fehler enden.

## Beispiele

Siehe das Beispiel im [Constraint-Übungsbereich](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
