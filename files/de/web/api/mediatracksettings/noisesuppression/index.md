---
title: "MediaTrackSettings: noiseSuppression-Eigenschaft"
short-title: noiseSuppression
slug: Web/API/MediaTrackSettings/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`noiseSuppression`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist ein Boolean-Wert, der angibt, ob die Rauschunterdrückungstechnologie bei einem Audiotrack aktiviert ist oder nicht. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um Ihren angegebenen Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie im [`MediaTrackConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)-Eigenschaft beschrieben, die Sie beim Aufruf von entweder [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) bereitgestellt haben.

Die Rauschunterdrückung filtert automatisch den Ton, um Hintergrundgeräusche, Brummen durch Geräte und Ähnliches aus dem Ton zu entfernen, bevor er an Ihren Code geliefert wird. Diese Funktion wird typischerweise bei Mikrofonen verwendet, obwohl es technisch möglich ist, dass sie auch von anderen Eingabequellen bereitgestellt werden könnte.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein Boolean-Wert, der `true` ist, wenn der Eingabetrack die Rauschunterdrückung aktiviert hat oder `false`, wenn AGC deaktiviert ist.

## Beispiele

Siehe das Beispiel des [Constraints-Testers](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
