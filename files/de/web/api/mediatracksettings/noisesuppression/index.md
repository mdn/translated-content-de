---
title: "MediaTrackSettings: noiseSuppression-Eigenschaft"
short-title: noiseSuppression
slug: Web/API/MediaTrackSettings/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuch
enthält die **`noiseSuppression`**-Eigenschaft, die einen Boolean-Wert darstellt. Dieser Wert gibt an, ob die Rauschunterdrückungstechnologie bei einer Audio-Spur aktiviert ist oder nicht. Auf diese Weise können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie im Abschnitt zur [`MediaTrackConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)-Eigenschaft beschrieben, den Sie beim Aufruf entweder von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Die Rauschunterdrückung filtert automatisch das Audio, um Hintergrundgeräusche, Brummen durch Geräte und Ähnliches aus dem Klang zu entfernen, bevor es an Ihren Code geliefert wird. Diese Funktion wird typischerweise bei Mikrofonen verwendet, obwohl sie technisch gesehen auch von anderen Eingabequellen bereitgestellt werden könnte.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen nicht bekannt sind.

## Wert

Ein Boolean-Wert, der `true` ist, wenn die Eingabespur mit aktivierter Rauschunterdrückung vorliegt, oder `false`, wenn AGC deaktiviert ist.

## Beispiele

Siehe das [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
