---
title: "MediaTrackConstraints: autoGainControl-Eigenschaft"
short-title: autoGainControl
slug: Web/API/MediaTrackConstraints/autoGainControl
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Das **`autoGainControl`**-Attribut des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das die gewünschten oder zwingenden Einschränkungen beschreibt, die auf den Wert der [`autoGainControl`](/de/docs/Web/API/MediaTrackSettings/autoGainControl) einschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.autoGainControl`](/de/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

Die automatische Verstärkungsregelung ist typischerweise eine Funktion, die von Mikrofonen bereitgestellt wird, obwohl sie auch von anderen Eingabequellen bereitgestellt werden kann.

## Wert

Wenn dieser Wert ein einfaches `true` oder `false` ist, wird der Benutzeragent versuchen, Medien mit aktivierter oder deaktivierter automatischer Verstärkungsregelung gemäß der Angabe zu erhalten, wenn möglich, aber nicht fehlschlagen, wenn dies nicht möglich ist. Wenn stattdessen der Wert als Objekt mit einem `exact`-Feld angegeben wird, zeigt der Boolesche Wert dieses Feldes eine erforderliche Einstellung für das automatische Verstärkungsregelungs-Feature an; falls diese nicht erfüllt werden kann, wird die Anfrage zu einem Fehler führen.

## Beispiele

Siehe das Beispiel [Constraint-Übung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
