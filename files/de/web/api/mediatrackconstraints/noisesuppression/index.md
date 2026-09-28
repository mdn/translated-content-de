---
title: "MediaTrackConstraints: Eigenschaft noiseSuppression"
short-title: noiseSuppression
slug: Web/API/MediaTrackConstraints/noiseSuppression
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`noiseSuppression`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`noiseSuppression`](/de/docs/Web/API/MediaTrackSettings/noiseSuppression) beschreibt.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`noiseSuppression`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#noisesuppression) prüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser Einschränkungen ignorieren, die sie nicht kennen.

Rauschunterdrückung wird üblicherweise von Mikrofonen bereitgestellt, kann aber auch von anderen Eingabequellen bereitgestellt werden.

## Wert

Wenn der Wert einfach `true` oder `false` ist, versucht der User Agent, Medien mit entsprechend aktivierter oder deaktivierter Rauschunterdrückung abzurufen, sofern dies möglich ist. Schlägt das fehl, führt es nicht zu einem Fehler. Wird der Wert stattdessen als Objekt mit einem Feld `exact` angegeben, legt dessen boolescher Wert eine zwingende Einstellung für die Rauschunterdrückung fest. Kann diese nicht erfüllt werden, führt die Anfrage zu einem Fehler.

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
