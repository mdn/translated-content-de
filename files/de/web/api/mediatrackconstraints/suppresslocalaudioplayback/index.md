---
title: "MediaTrackConstraints: Eigenschaft suppressLocalAudioPlayback"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die Eigenschaft **`suppressLocalAudioPlayback`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaStreamTrack/getSettings#suppresslocalaudioplayback) beschreibt. Diese Eigenschaft steuert, ob der Ton eines Tabs weiterhin über die lokalen Lautsprecher der nutzenden Person wiedergegeben wird, während der Tab aufgezeichnet wird.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#suppresslocalaudioplayback) abfragen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Wert.

Wenn dieser Wert einfach `true` oder `false` ist, versucht der User Agent, Medien mit entsprechend aktivierter oder deaktivierter lokaler Audiowiedergabe zu erhalten, sofern dies möglich ist. Schlägt dies fehl, führt es jedoch nicht zu einem Fehler.

Wird der Wert als `ideal` angegeben, kennzeichnet der boolesche Wert dieses Feldes eine ideale Einstellung für die Unterdrückung der lokalen Audiowiedergabe. Kann diese Einstellung nicht erfüllt werden, führt die Anfrage zu einem Fehler.

## Beispiele

```js
let isLocalAudioSuppressed = displayStream
  .getVideoTracks()[0]
  .getSettings().suppressLocalAudioPlayback;
```

Das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) zeigt, wie Einschränkungen für Medientracks verwendet werden.

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
