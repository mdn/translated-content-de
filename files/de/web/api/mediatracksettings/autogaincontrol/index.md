---
title: "MediaTrackSettings: autoGainControl-Eigenschaft"
short-title: autoGainControl
slug: Web/API/MediaTrackSettings/autoGainControl
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`autoGainControl`**-Attribut des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist ein Boolean-Wert, der angibt, ob die automatische Verstärkungsregelung (AGC) auf einem Audiotrack aktiviert ist oder nicht. Auf diese Weise können Sie feststellen, welcher Wert ausgewählt wurde, um den von Ihnen angegebenen Einschränkungen für den Wert dieses Attributs zu entsprechen, wie in der [`MediaTrackConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)-Eigenschaft beschrieben, die Sie beim Aufrufen von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Die automatische Verstärkungsregelung ist eine Funktion, bei der eine Tonquelle automatisch Änderungen der Lautstärke ihres Quellmediums verwaltet, um ein gleichmäßiges Gesamtlärmpegel beizubehalten. Diese Funktion wird typischerweise bei Mikrofonen verwendet, kann jedoch auch von anderen Eingabequellen bereitgestellt werden.

Falls erforderlich, können Sie bestimmen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein Boolean-Wert, der `true` ist, wenn die Spur die automatische Verstärkungsregelung aktiviert hat, oder `false`, wenn AGC deaktiviert ist.

## Beispiele

Siehe das Beispiel [Constraint-Übung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
