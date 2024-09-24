---
title: "MediaTrackConstraints: groupId-Eigenschaft"
short-title: groupId
slug: Web/API/MediaTrackConstraints/groupId
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`groupId`**-Eigenschaft des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.groupId", "groupId")}}-eigenen Einschränkungseigenschaft gelegt werden.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.groupId")}} überprüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle Einschränkungen ignorieren, die ihnen nicht bekannt sind.

## Wert

Ein Objekt basierend auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das einen oder mehrere akzeptable, ideale und/oder genaue (obligatorische) Gruppen-IDs angibt, die als Quelle von Medieninhalt akzeptabel sind.

Gruppen-IDs sind für eine gegebene Herkunft während einer einzelnen Browsersitzung eindeutig und werden von allen Medienquellen geteilt, die von demselben physischen Gerät stammen. Zum Beispiel würden das Mikrofon und der Lautsprecher desselben Headsets eine Gruppen-ID teilen. Dies ermöglicht es, die Gruppen-ID zu verwenden, um sicherzustellen, dass die Audio- und Eingabegeräte auf demselben Headset sind, indem man die Gruppen-ID des Eingabegeräts abruft und angibt, wenn man nach einem Ausgabegerät fragt.

Der Wert der `groupId` wird jedoch durch die Quelle des Inhalts der Spur bestimmt, und es gibt kein bestimmtes Format, das von der Spezifikation vorgeschrieben ist (obwohl eine Art GUID empfohlen wird). Das bedeutet, dass ein gegebener Track nur einen Wert für die `groupId` zurückgibt, wenn Sie {{domxref("MediaStreamTrack.getCapabilities", "getCapabilities()")}} aufrufen, und bedenken Sie, dass sich dieser Wert für jede Browsersitzung ändert.

Aufgrund dessen gibt es keinen Nutzen für die Gruppen-ID bei einem Aufruf von {{domxref("MediaStreamTrack.applyConstraints()")}}, da es nur einen möglichen Wert gibt, und Sie sie nicht verwenden können, um sicherzustellen, dass dieselbe Gruppe in mehreren Browsersitzungen bei einem Aufruf von `getUserMedia()` verwendet wird.

## Beispiele

Siehe das [Constraint-Übungstool](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel.

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
