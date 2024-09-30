---
title: "MediaTrackConstraints: noiseSuppression-Eigenschaft"
short-title: noiseSuppression
slug: Web/API/MediaTrackConstraints/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`noiseSuppression`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die geforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression)-Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression) prüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

Rauschunterdrückung wird normalerweise von Mikrofonen bereitgestellt, obwohl sie auch von anderen Eingabequellen bereitgestellt werden kann.

## Wert

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der User-Agent versuchen, Medien mit aktivierter oder deaktivierter Rauschunterdrückung gemäß den Angaben zu beziehen, falls möglich, aber er wird nicht fehlschlagen, wenn dies nicht möglich ist. Wenn der Wert stattdessen als Objekt mit einem `exact`-Feld angegeben ist, gibt der Boolesche Wert dieses Feldes eine erforderliche Einstellung für das Rauschunterdrückungs-Feature an; wenn dies nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Eigenschaften, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
