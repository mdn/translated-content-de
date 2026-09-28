---
title: "MediaTrackSettings: Eigenschaft noiseSuppression"
short-title: noiseSuppression
slug: Web/API/MediaTrackSettings/noiseSuppression
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`noiseSuppression`** des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionarys ist ein boolescher Wert, der angibt, ob die Rauschunterdrückung für eine Audiospur aktiviert ist. Damit können Sie feststellen, welcher Wert ausgewählt wurde, um die von Ihnen festgelegten Constraints für diese Eigenschaft zu erfüllen. Diese Constraints haben Sie über die Eigenschaft [`MediaTrackConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression) angegeben, als Sie [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) aufgerufen haben.

Die Rauschunterdrückung filtert das Audiosignal automatisch, um Hintergrundgeräusche, durch Geräte verursachtes Brummen und Ähnliches zu entfernen, bevor das Signal an Ihren Code übergeben wird. Diese Funktion wird üblicherweise bei Mikrofonen eingesetzt, könnte technisch gesehen aber auch für andere Eingabequellen bereitgestellt werden.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird, indem Sie den Wert von [`noiseSuppression`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#noisesuppression) untersuchen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser ihnen unbekannte Constraints ignorieren.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Rauschunterdrückung für die Eingabespur aktiviert ist, oder `false`, wenn AGC deaktiviert ist.

## Beispiele

Siehe das Beispiel zum [Ausprobieren von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.noiseSuppression`](/de/docs/Web/API/MediaTrackConstraints/noiseSuppression)
