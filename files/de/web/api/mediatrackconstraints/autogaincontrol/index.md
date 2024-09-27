---
title: "MediaTrackConstraints: autoGainControl-Eigenschaft"
short-title: autoGainControl
slug: Web/API/MediaTrackConstraints/autoGainControl
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`autoGainControl`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die angeforderten oder obligatorischen Einschränkungen für den Wert der [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl) einschränkbaren Eigenschaft beschreibt.

Falls erforderlich, können Sie überprüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl) prüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Dies ist jedoch in der Regel nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

Die automatische Verstärkungsregelung ist typischerweise eine Funktion, die von Mikrofonen bereitgestellt wird, obwohl sie auch von anderen Eingabequellen bereitgestellt werden kann.

## Wert

Wenn dieser Wert einfach `true` oder `false` ist, versucht der User-Agent, Medien mit aktivierter oder deaktivierter automatischer Verstärkungsregelung gemäß der Angabe zu erhalten, wenn möglich, schlägt jedoch nicht fehl, wenn dies nicht machbar ist. Wenn der Wert stattdessen als ein Objekt mit einem `exact`-Feld angegeben wird, gibt der Boolean-Wert dieses Feldes eine erforderliche Einstellung für die Funktion der automatischen Verstärkungsregelung an; wenn dies nicht erfüllt werden kann, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das [Constraint-Beispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
