---
title: "MediaTrackConstraints: Eigenschaft aspectRatio"
short-title: aspectRatio
slug: Web/API/MediaTrackConstraints/aspectRatio
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`aspectRatio`**-Attribut des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die gewünschten oder erforderlichen Einschränkungen beschreibt, die auf den Wert der
{{domxref("MediaTrackSettings.aspectRatio", "aspectRatio")}}-Einschränkungs-Eigenschaft angewendet werden.

Falls erforderlich, können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.aspectRatio")}} überprüfen, wie er von einem Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen nicht bekannt sind.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der akzeptable oder erforderliche Wert(e) für das
Seitenverhältnis eines Videotracks beschreibt. Der Wert ist die Breite geteilt durch die Höhe und wird auf zehn Dezimalstellen gerundet. Zum Beispiel kann das standardmäßige High-Definition-Video-Seitenverhältnis von 16:9 als 1920/1080 oder 1.7777777778 berechnet werden.

Wenn dieser Wert eine Zahl ist, versucht der User-Agent, Medien zu beschaffen, deren Seitenverhältnis dieser Zahl so nahe wie möglich kommt, gegeben den Möglichkeiten der Hardware und den angegebenen anderen Einschränkungen. Andernfalls wird der Wert dieses
[`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den User-Agent bei dem Bestreben leiten, eine
exakte Übereinstimmung mit dem erforderlichen Seitenverhältnis (wenn `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen bestmöglichen Wert zu erzielen.

## Beispiele

Siehe das [Beispiel für Einschränkungs-Übungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
