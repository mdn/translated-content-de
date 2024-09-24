---
title: "MediaTrackConstraints: noiseSuppression-Eigenschaft"
short-title: noiseSuppression
slug: Web/API/MediaTrackConstraints/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`noiseSuppression`**-Eigenschafts des {{domxref("MediaTrackConstraints")}}-Dictionaries ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die angeforderten oder zwingenden Einschränkungen für den Wert der beschränkbaren Eigenschaft {{domxref("MediaTrackSettings.noiseSuppression","noiseSuppression")}} beschreibt.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.noiseSuppression")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser jede Einschränkung ignorieren, mit der sie nicht vertraut sind.

Rauschunterdrückung wird typischerweise von Mikrofonen bereitgestellt, obwohl sie auch von anderen Eingangsquellen bereitgestellt werden kann.

## Wert

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der Benutzeragent versuchen, Medien mit aktivierter oder deaktivierter Rauschunterdrückung gemäß der Spezifikation zu erhalten, falls möglich, jedoch nicht fehlschlagen, wenn dies nicht umgesetzt werden kann. Wenn der Wert stattdessen als Objekt mit einem `exact`-Feld angegeben ist, zeigt der boolesche Wert dieses Feldes eine erforderliche Einstellung für die Rauschunterdrückungsfunktion an; wenn dies nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das [Constraint-Übungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
