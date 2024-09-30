---
title: "MediaTrackConstraints: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaTrackConstraints/groupId
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`groupId`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das die angeforderten oder verbindlichen Einschränkungen beschreibt, die auf den Wert der [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) beschränkbaren Eigenschaft angewendet werden.

Bei Bedarf können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) prüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen unbekannt sind.

## Wert

Ein Objekt basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das eine oder mehrere akzeptable, ideale und/oder exakte (verbindliche) Gruppen-IDs spezifiziert, die als Quelle für Medieninhalte infrage kommen.

Gruppen-IDs sind für einen bestimmten Ursprung während der Dauer einer einzelnen Browsersitzung eindeutig und werden von allen Medienquellen geteilt, die von demselben physischen Gerät stammen. Zum Beispiel würden das Mikrofon und der Lautsprecher an demselben Headset eine Gruppen-ID teilen. Dies ermöglicht es, die Gruppen-ID zu verwenden, um sicherzustellen, dass die Audio- und Eingabegeräte am selben Headset sind, indem die Gruppen-ID des Eingabegeräts abgerufen und beim Anfordern eines Ausgabegeräts angegeben wird.

Der Wert der `groupId` wird jedoch von der Quelle des Inhalts des Tracks bestimmt, und es gibt kein spezielles Format, das von der Spezifikation vorgeschrieben wird (obwohl eine Art GUID empfohlen wird). Das bedeutet, dass ein gegebener Track nur einen Wert für die `groupId` zurückgibt, wenn Sie [`getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen. Beachten Sie, dass sich dieser Wert mit jeder Browsersitzung ändert.

Aus diesem Grund gibt es keinen Nutzen für die Gruppen-ID beim Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints), da es nur einen möglichen Wert gibt, und Sie können sie nicht verwenden, um sicherzustellen, dass dieselbe Gruppe über mehrere Browsersitzungen hinweg verwendet wird, wenn Sie `getUserMedia()` aufrufen.

## Beispiele

Siehe das Beispiel [Constraint-Übungsprogramm](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
