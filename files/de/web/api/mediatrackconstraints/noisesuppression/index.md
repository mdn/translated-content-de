---
title: "MediaTrackConstraints: Eigenschaft noiseSuppression"
short-title: noiseSuppression
slug: Web/API/MediaTrackConstraints/noiseSuppression
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`noiseSuppression`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die gewünschten oder erforderlichen Einschränkungen für den Wert der einschränkbaren Eigenschaft [`noiseSuppression`](/de/docs/Web/API/MediaStreamTrack/getSettings#noisesuppression) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird. Überprüfen Sie dazu den Wert von [`noiseSuppression`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#noisesuppression), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

Rauschunterdrückung wird üblicherweise von Mikrofonen bereitgestellt, kann aber auch von anderen Eingabequellen bereitgestellt werden.

## Wert

Wenn der Wert einfach `true` oder `false` ist, versucht der User Agent, Medien mit entsprechend aktivierter oder deaktivierter Rauschunterdrückung zu erhalten, sofern dies möglich ist. Falls dies nicht möglich ist, schlägt die Anfrage nicht fehl. Wird der Wert stattdessen als Objekt mit einem Feld `exact` angegeben, legt dessen boolescher Wert eine erforderliche Einstellung für die Rauschunterdrückung fest. Kann diese Anforderung nicht erfüllt werden, führt die Anfrage zu einem Fehler.

## Beispiele

Sehen Sie sich das Beispiel zum [Testen von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

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
