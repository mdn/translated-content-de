---
title: "MediaTrackSettings: autoGainControl-Eigenschaft"
short-title: autoGainControl
slug: Web/API/MediaTrackSettings/autoGainControl
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`autoGainControl`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionaries ist ein Boolescher Wert, der angibt, ob die automatische Verstärkungsregelung (AGC) bei einer Audiospur aktiviert ist oder nicht. Dies ermöglicht es Ihnen, zu überprüfen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im Abschnitt [`MediaTrackConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl) beschrieben, den Sie beim Aufrufen von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Die automatische Verstärkungsregelung ist eine Funktion, bei der eine Tonquelle automatisch Änderungen in der Lautstärke des Quellmediums verwaltet, um ein gleichmäßiges Gesamtlautstärkeniveau aufrechtzuerhalten. Diese Funktion wird typischerweise bei Mikrofonen verwendet, kann jedoch auch von anderen Eingabequellen bereitgestellt werden.

Bei Bedarf können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl) prüfen, wie er von einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht nötig, da Browser alle Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Ein Boolescher Wert, der `true` ist, wenn die Spur die automatische Verstärkungsregelung aktiviert hat, oder `false`, wenn AGC deaktiviert ist.

## Beispiele

Siehe das Beispiel im [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
