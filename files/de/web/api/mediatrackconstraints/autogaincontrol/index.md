---
title: "MediaTrackConstraints: Eigenschaft autoGainControl"
short-title: autoGainControl
slug: Web/API/MediaTrackConstraints/autoGainControl
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`autoGainControl`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionarys ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die gewünschten oder zwingend erforderlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`autoGainControl`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#autogaincontrol) auswerten, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

Die automatische Verstärkungsregelung ist typischerweise eine Funktion von Mikrofonen, kann aber auch von anderen Eingabequellen bereitgestellt werden.

## Wert

Wenn der Wert einfach `true` oder `false` ist, versucht der User Agent, Medien mit entsprechend aktivierter oder deaktivierter automatischer Verstärkungsregelung abzurufen, sofern dies möglich ist. Schlägt dies fehl, führt es jedoch nicht zu einem Fehler. Wird der Wert stattdessen als Objekt mit einem `exact`-Feld angegeben, legt dessen boolescher Wert eine zwingend erforderliche Einstellung für die automatische Verstärkungsregelung fest. Kann diese Anforderung nicht erfüllt werden, führt die Anfrage zu einem Fehler.

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
