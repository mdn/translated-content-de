---
title: "MediaTrackSettings: frameRate-Eigenschaft"
short-title: frameRate
slug: Web/API/MediaTrackSettings/frameRate
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`frameRate`** des Dictionaries [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) ist eine Gleitkommazahl mit doppelter Genauigkeit. Sie gibt die Bildrate des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) in Bildern pro Sekunde gemäß seiner aktuellen Konfiguration an. So können Sie feststellen, welcher Wert gewählt wurde, um die von Ihnen vorgegebenen Einschränkungen für diese Eigenschaft zu erfüllen. Diese haben Sie über die Eigenschaft [`MediaTrackConstraints.frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate) beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben.

Falls erforderlich, können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`frameRate`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#framerate) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die aktuell konfigurierte Bildrate des Tracks in Bildern pro Sekunde angibt.

## Beispiele

Siehe das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Funktionen, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.frameRate`](/de/docs/Web/API/MediaTrackConstraints/frameRate)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
