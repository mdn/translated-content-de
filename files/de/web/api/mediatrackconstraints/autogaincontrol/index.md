---
title: "MediaTrackConstraints: Eigenschaft autoGainControl"
short-title: autoGainControl
slug: Web/API/MediaTrackConstraints/autoGainControl
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`autoGainControl`**-Attribut des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.autoGainControl", "autoGainControl")}}-eigenschaft anwendbar sind.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.autoGainControl")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen ignorieren.

Automatische Verstärkungsregelung ist typischerweise eine Funktion, die von Mikrofonen bereitgestellt wird, obwohl sie auch von anderen Eingabequellen bereitgestellt werden kann.

## Wert

Wenn dieser Wert ein einfaches `true` oder `false` ist, versucht der Benutzeragent, Medien mit aktivierter oder deaktivierter automatischer Verstärkungsregelung bereitzustellen, sofern möglich, wird jedoch nicht fehlschlagen, wenn dies nicht möglich ist. Wenn der Wert stattdessen als Objekt mit einem `exact`-Feld angegeben ist, gibt der boolesche Wert dieses Feldes eine erforderliche Einstellung für die automatische Verstärkungsregelung an; kann diese nicht erfüllt werden, führt die Anfrage zu einem Fehler.

## Beispiele

Siehe das [Constraint-Übungsbeispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
