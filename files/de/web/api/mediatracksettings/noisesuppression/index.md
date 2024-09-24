---
title: "MediaTrackSettings: noiseSuppression-Eigenschaft"
short-title: noiseSuppression
slug: Web/API/MediaTrackSettings/noiseSuppression
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`noiseSuppression`**-Attribut des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist ein boolescher Wert, der angibt, ob die Rauschunterdrückungstechnologie bei einem Audiotrack aktiviert ist oder nicht. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um den von Ihnen festgelegten Einschränkungen für den Wert dieser Eigenschaft zu entsprechen, wie in der von Ihnen bereitgestellten {{domxref("MediaTrackConstraints.noiseSuppression")}}-Eigenschaft beschrieben, wenn Sie entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} aufrufen.

Die Rauschunterdrückung filtert das Audio automatisch, um Hintergrundgeräusche, Brummen durch Geräte und Ähnliches aus dem Ton zu entfernen, bevor er an Ihren Code geliefert wird. Diese Funktion wird typischerweise bei Mikrofonen eingesetzt, auch wenn sie technisch gesehen auch durch andere Eingabequellen bereitgestellt werden könnte.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.noiseSuppression")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch unnötig, da Browser Einschränkungen ignorieren, mit denen sie nicht vertraut sind.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Rauschunterdrückung für den Eingabetrack aktiviert ist, oder `false`, wenn AGC deaktiviert ist.

## Beispiele

Siehe das [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.noiseSuppression")}}
- {{domxref("MediaTrackSupportedConstraints")}}
