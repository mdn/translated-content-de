---
title: "MediaTrackConstraints: Eigenschaft suppressLocalAudioPlayback"
short-title: suppressLocalAudioPlayback
slug: Web/API/MediaTrackConstraints/suppressLocalAudioPlayback
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die Eigenschaft **`suppressLocalAudioPlayback`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der die gewünschten oder zwingenden Constraints für den Wert der konfigurierbaren Eigenschaft [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaTrackSettings/suppressLocalAudioPlayback) beschreibt. Diese Eigenschaft steuert, ob der Ton eines Tabs weiterhin über die lokalen Lautsprecher wiedergegeben wird, während der Tab erfasst wird.

Bei Bedarf können Sie prüfen, ob dieser Constraint unterstützt wird, indem Sie den Wert von [`suppressLocalAudioPlayback`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#suppresslocalaudioplayback) auswerten, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser unbekannte Constraints ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Wert.

Wenn dieser Wert einfach `true` oder `false` ist, versucht der User Agent, Medien mit entsprechend aktivierter oder deaktivierter lokaler Audiowiedergabe abzurufen, sofern dies möglich ist. Falls das nicht möglich ist, schlägt die Anfrage jedoch nicht fehl.

Wenn der Wert als `ideal` angegeben wird, legt der boolesche Wert dieses Feldes die ideale Einstellung für die Unterdrückung der lokalen Audiowiedergabe fest. Kann diese Einstellung nicht erfüllt werden, führt die Anfrage zu einem Fehler.

## Beispiele

```js
let isLocalAudioSuppressed = displayStream
  .getVideoTracks()[0]
  .getSettings().suppressLocalAudioPlayback;
```

Das Beispiel [Constraint-Tester](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) zeigt, wie Constraints für Medientracks verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Funktionen, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
