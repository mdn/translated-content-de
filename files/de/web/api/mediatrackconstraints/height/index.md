---
title: "MediaTrackConstraints: height-Eigenschaft"
short-title: height
slug: Web/API/MediaTrackConstraints/height
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`height`**-Attribut des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die geforderten oder zwingenden Einschränkungen beschreibt, die dem Wert der beschränkbaren Eigenschaft {{domxref("MediaTrackSettings.height", "height")}} auferlegt werden.

Falls nötig, können Sie überprüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.height")}} prüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Wenn dieser Wert eine Zahl ist, wird der Benutzeragent versuchen, Medien zu beziehen, deren Höhe so nah wie möglich an dieser Zahl liegt, basierend auf den Fähigkeiten der Hardware und den anderen festgelegten Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) den Benutzeragenten bei seinen Bemühungen leiten, eine exakte Übereinstimmung mit der geforderten Höhe bereitzustellen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und den gleichen Wert haben) oder einen bestmöglichen Wert zu erreichen.

## Beispiele

Siehe das Beispiel [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
