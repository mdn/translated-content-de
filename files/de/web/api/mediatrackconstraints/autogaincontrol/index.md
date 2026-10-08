---
title: "MediaTrackConstraints: autoGainControl-Eigenschaft"
short-title: autoGainControl
slug: Web/API/MediaTrackConstraints/autoGainControl
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`autoGainControl`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die gewünschten oder zwingend erforderlichen Einschränkungen für den Wert der anpassbaren Eigenschaft [`autoGainControl`](/de/docs/Web/API/MediaStreamTrack/getSettings#autogaincontrol) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`autoGainControl`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#autogaincontrol) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

Die automatische Verstärkungsregelung ist typischerweise eine Funktion von Mikrofonen, kann aber auch von anderen Eingabequellen bereitgestellt werden.

## Wert

Wenn dieser Wert ein einfaches `true` oder `false` ist, versucht der User Agent, nach Möglichkeit Medien mit aktivierter beziehungsweise deaktivierter automatischer Verstärkungsregelung zu erhalten. Falls dies nicht möglich ist, schlägt die Anfrage jedoch nicht fehl. Wird der Wert stattdessen als Objekt mit einem `exact`-Feld angegeben, legt dessen boolescher Wert fest, ob die automatische Verstärkungsregelung zwingend aktiviert oder deaktiviert sein muss. Kann diese Anforderung nicht erfüllt werden, führt die Anfrage zu einem Fehler.

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
