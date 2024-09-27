---
title: "MediaTrackConstraints: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaTrackConstraints/groupId
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`groupId`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die gewünschten oder zwingenden Einschränkungen beschreibt, die auf den Wert der [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId)-einschränkbaren Eigenschaft angewendet werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.groupId`](/de/docs/Web/API/MediaTrackSupportedConstraints/groupId) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. Typischerweise ist das jedoch nicht notwendig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein Objekt basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das eine oder mehrere akzeptable, ideale und/oder genaue (obligatorisch) Gruppen-IDs spezifiziert, die als Quelle von Medieninhalten akzeptabel sind.

Gruppen-IDs sind für einen bestimmten Ursprung während einer einzelnen Browsersitzung einzigartig und werden von allen Medienquellen geteilt, die vom gleichen physischen Gerät stammen. Zum Beispiel würden das Mikrofon und die Lautsprecher auf demselben Headset eine Gruppen-ID teilen. Dadurch ist es möglich, die Gruppen-ID zu verwenden, um sicherzustellen, dass die Audio-Eingabegeräte am gleichen Headset sind, indem man die Gruppen-ID des Eingabegeräts abruft und diese beim Anfordern eines Ausgabegeräts angibt, möglicherweise.

Jedoch wird der Wert der `groupId` durch die Quelle des Inhalts des Track bestimmt, und es gibt kein spezifisches Format, das durch die Spezifikation vorgeschrieben ist (obwohl eine Art GUID empfohlen wird). Das bedeutet, dass ein gegebener Track nur einen Wert für die `groupId` zurückgeben wird, wenn Sie [`getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) aufrufen, und beachten Sie, dass sich dieser Wert bei jeder Browsersitzung ändert.

Aufgrund dessen gibt es keinen Nutzen für die Gruppen-ID beim Aufrufen von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints), da es nur einen möglichen Wert gibt, und Sie können ihn nicht verwenden, um sicherzustellen, dass dieselbe Gruppe über mehrere Browsersitzungen hinweg verwendet wird, wenn Sie `getUserMedia()` aufrufen.

## Beispiele

Siehe das Beispiel [Constraint Exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

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
