---
title: "MediaTrackConstraints: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackConstraints/frameRate
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`frameRate`**-Eigenschaftsmerkmal des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die angeforderten oder zwingenden Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.frameRate", "frameRate")}}-Einstellungseigenschaft angewendet werden.

Falls erforderlich, können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.frameRate")}} prüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Typischerweise ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, mit denen sie nicht vertraut sind.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die akzeptablen oder erforderlichen Wert(e) für die Bildrate einer Video-Track in Bildern pro Sekunde beschreibt.

Wenn dieser Wert eine Zahl ist, wird der User-Agent versuchen, Medien zu erhalten, deren Bildrate so nah wie möglich an dieser Zahl liegt, unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen. Andernfalls wird der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den User-Agent bei seinen Bemühungen leiten, eine genaue Übereinstimmung mit der erforderlichen Bildrate (falls `exact` angegeben ist oder sowohl `min` als auch `max` bereitgestellt werden und denselben Wert haben) oder einen möglichst besten Wert zu bieten.

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
