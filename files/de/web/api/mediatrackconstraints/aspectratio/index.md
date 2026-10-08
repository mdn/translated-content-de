---
title: "MediaTrackConstraints: Eigenschaft aspectRatio"
short-title: aspectRatio
slug: Web/API/MediaTrackConstraints/aspectRatio
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`aspectRatio`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der die gewünschten oder verbindlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`aspectRatio`](/de/docs/Web/API/MediaStreamTrack/getSettings#aspectratio) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`aspectRatio`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#aspectratio) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), der den akzeptablen oder erforderlichen Wert beziehungsweise Werte für das {{Glossary("aspect_ratio", "Seitenverhältnis")}} einer Videospur beschreibt. Der Wert ergibt sich aus der Breite geteilt durch die Höhe und wird auf zehn Dezimalstellen gerundet. Das Standardseitenverhältnis von 16:9 für hochauflösendes Video lässt sich beispielsweise als 1920/1080 beziehungsweise 1,7777777778 berechnen.

Wenn dieser Wert eine Zahl ist, versucht der User Agent, unter Berücksichtigung der Hardwarefähigkeiten und der anderen angegebenen Einschränkungen Medien mit einem Seitenverhältnis zu erhalten, das dieser Zahl möglichst nahekommt. Andernfalls leitet der Wert dieses [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) den User Agent bei dem Versuch, das erforderliche Seitenverhältnis exakt zu erreichen (wenn `exact` angegeben ist oder wenn sowohl `min` als auch `max` angegeben sind und denselben Wert haben) oder einen möglichst passenden Wert bereitzustellen.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
