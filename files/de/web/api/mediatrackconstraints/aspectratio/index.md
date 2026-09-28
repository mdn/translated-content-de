---
title: "MediaTrackConstraints: Eigenschaft aspectRatio"
short-title: aspectRatio
slug: Web/API/MediaTrackConstraints/aspectRatio
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`aspectRatio`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die gewünschten oder zwingend erforderlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`aspectRatio`](/de/docs/Web/API/MediaTrackSettings/aspectRatio) beschreibt.

Falls erforderlich, können Sie prüfen, ob diese Einschränkung unterstützt wird. Prüfen Sie dazu den Wert von [`aspectRatio`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#aspectratio), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der den zulässigen oder erforderlichen Wert beziehungsweise Werte für das {{Glossary("aspect_ratio", "Seitenverhältnis")}} einer Videospur beschreibt. Der Wert ergibt sich aus der Breite geteilt durch die Höhe und wird auf zehn Dezimalstellen gerundet. Das Standard-Seitenverhältnis 16:9 für hochauflösende Videos lässt sich beispielsweise als 1920/1080 oder 1,7777777778 berechnen.

Wenn dieser Wert eine Zahl ist, versucht der User Agent, Medien zu beziehen, deren Seitenverhältnis dieser Zahl möglichst nahekommt. Dabei berücksichtigt er die Möglichkeiten der Hardware und die anderen angegebenen Einschränkungen. Andernfalls bestimmt der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), ob der User Agent eine exakte Übereinstimmung mit dem erforderlichen Seitenverhältnis anstrebt (wenn `exact` angegeben ist oder `min` und `max` denselben Wert haben) oder den bestmöglichen Wert.

## Beispiele

Sehen Sie sich das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
