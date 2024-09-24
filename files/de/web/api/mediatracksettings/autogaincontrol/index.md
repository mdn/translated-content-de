---
title: "MediaTrackSettings: Eigenschaft autoGainControl"
short-title: autoGainControl
slug: Web/API/MediaTrackSettings/autoGainControl
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`autoGainControl`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs ist ein Boolean-Wert, dessen Wert angibt, ob die automatische Verstärkungsregelung (AGC) bei einer Audioträgerspur aktiviert ist oder nicht. Dies ermöglicht es Ihnen festzustellen, welcher Wert ausgewählt wurde, um die von Ihnen angegebenen Einschränkungen für den Wert dieser Eigenschaft zu erfüllen, wie in der von Ihnen bereitgestellten {{domxref("MediaTrackConstraints.autoGainControl")}}-Eigenschaft beschrieben, als Sie entweder {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} oder {{domxref("MediaStreamTrack.applyConstraints()")}} aufgerufen haben.

Die automatische Verstärkungsregelung ist eine Funktion, bei der eine Klangquelle automatisch Änderungen der Lautstärke ihres Quellmediums verwaltet, um ein gleichmäßiges Gesamtlautstärkeniveau aufrechtzuerhalten. Diese Funktion wird typischerweise bei Mikrofonen verwendet, kann aber auch von anderen Eingabequellen bereitgestellt werden.

Falls erforderlich, können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.autoGainControl")}} überprüfen, der durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Ein Boolean-Wert, der `true` ist, wenn die Spur mit automatischer Verstärkungsregelung aktiviert ist, oder `false`, wenn AGC deaktiviert ist.

## Beispiele

Siehe das [Constraint-Beispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.autoGainControl")}}
- {{domxref("MediaTrackSupportedConstraints")}}
