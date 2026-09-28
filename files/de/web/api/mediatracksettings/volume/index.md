---
title: "MediaTrackSettings: volume-Eigenschaft"
short-title: volume
slug: Web/API/MediaTrackSettings/volume
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}{{Non-standard_Header}}

Die **`volume`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Dictionaries ist eine Gleitkommazahl mit doppelter Genauigkeit. Sie gibt die Lautstärke des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) in seiner aktuellen Konfiguration als Wert zwischen 0.0 (Stille) und 1.0 (maximal vom Gerät unterstützte Lautstärke) an. Damit können Sie feststellen, welcher Wert gewählt wurde, um die von Ihnen angegebenen Constraints für diese Eigenschaft einzuhalten. Diese Constraints haben Sie über die Eigenschaft [`MediaTrackConstraints.volume`](/de/docs/Web/API/MediaTrackConstraints/volume) beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird, indem Sie den Wert von [`volume`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#volume) betrachten, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser ihnen unbekannte Constraints ignorieren.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die Lautstärke des Audio-Tracks in seiner aktuellen Konfiguration als Wert zwischen 0.0 und 1.0 angibt.

## Beispiele

Siehe das Beispiel zum [Testen von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.volume`](/de/docs/Web/API/MediaTrackConstraints/volume)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
