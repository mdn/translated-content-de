---
title: "MediaTrackSettings: autoGainControl-Eigenschaft"
short-title: autoGainControl
slug: Web/API/MediaTrackSettings/autoGainControl
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`autoGainControl`** des Dictionaries [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) ist ein boolescher Wert. Er gibt an, ob die automatische Verstärkungsregelung (Automatic Gain Control, AGC) für eine Audiospur aktiviert ist. So können Sie feststellen, welcher Wert gewählt wurde, um die von Ihnen festgelegten Constraints für diese Eigenschaft einzuhalten. Diese Constraints haben Sie über die Eigenschaft [`MediaTrackConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl) beim Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) oder [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) angegeben.

Die automatische Verstärkungsregelung ist eine Funktion, bei der Änderungen der Lautstärke eines Audioeingangssignals automatisch ausgeglichen werden, um eine gleichmäßige Gesamtlautstärke zu erhalten. Sie wird üblicherweise bei Mikrofonen eingesetzt, kann aber auch von anderen Eingabequellen bereitgestellt werden.

Bei Bedarf können Sie prüfen, ob dieses Constraint unterstützt wird. Sehen Sie dazu nach, welchen Wert [`autoGainControl`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#autogaincontrol) bei einem Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser unbekannte Constraints ignorieren.

## Wert

Ein boolescher Wert, der `true` ist, wenn die automatische Verstärkungsregelung für die Spur aktiviert ist, oder `false`, wenn AGC deaktiviert ist.

## Beispiele

Siehe das Beispiel zum [Testen von Constraints](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackConstraints/autoGainControl)
