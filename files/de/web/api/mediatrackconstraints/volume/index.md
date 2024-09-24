---
title: "MediaTrackConstraints: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackConstraints/volume
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`volume`**-Attribut des {{domxref("MediaTrackConstraints")}}-Dictionaries ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der eingeschränkten Eigenschaft {{domxref("MediaTrackSettings.volume", "volume")}} angewendet werden sollen.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.volume")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das den akzeptablen oder erforderlichen Wert(e) für die Lautstärke einer Audio-Spur beschreibt, in einem linearen Maßstab, bei dem 0.0 Stille bedeutet und 1.0 die höchste unterstützte Lautstärke ist.

Wenn dieser Wert eine Zahl ist, versucht der User-Agent, Medien zu erhalten, deren Lautstärke so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Fähigkeiten der Hardware und der anderen angegebenen Einschränkungen. Andernfalls steuert der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den User-Agenten in seinen Bemühungen, eine genaue Übereinstimmung mit der erforderlichen Lautstärke bereitzustellen (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen möglichst besten Wert.

Ein gesetzter Einschränkungssatz, der nur Werte außerhalb des Bereichs von 0.0 bis 1.0 zulässt, kann nicht erfüllt werden und führt zum Scheitern.

## Beispiele

Siehe das [Beispiel für den Einschränkungs-Tester](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
