---
title: "MediaTrackConstraints: Eigenschaft groupId"
short-title: groupId
slug: Web/API/MediaTrackConstraints/groupId
l10n:
  sourceCommit: a5b8c78d6a38dda4194bec70cb82e5bf646178e7
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`groupId`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die gewünschten oder zwingenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`groupId`](/de/docs/Web/API/MediaTrackSettings/groupId) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`groupId`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#groupid) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) basierendes Objekt, das eine oder mehrere zulässige, bevorzugte und/oder exakte (zwingende) Gruppen-IDs angibt, die für die Quelle des Medieninhalts infrage kommen.

Gruppen-IDs sind für einen bestimmten Ursprung während einer einzelnen Browsersitzung eindeutig und werden von allen Medienquellen gemeinsam verwendet, die vom selben physischen Gerät stammen. Beispielsweise hätten das Mikrofon und der Lautsprecher desselben Headsets dieselbe Gruppen-ID. Dadurch lässt sich sicherstellen, dass sich Audio- und Eingabegerät am selben Headset befinden: Sie können die Gruppen-ID des Eingabegeräts abrufen und sie bei der Anforderung eines Ausgabegeräts angeben.

Der Wert von `groupId` wird jedoch durch die Quelle des Track-Inhalts bestimmt. Die Spezifikation schreibt dafür kein bestimmtes Format vor, empfiehlt aber eine Art GUID. Das bedeutet, dass ein bestimmter Track bei einem Aufruf von [`getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) nur einen Wert für `groupId` zurückgibt. Beachten Sie außerdem, dass sich dieser Wert mit jeder Browsersitzung ändert.

Deshalb ist die Gruppen-ID beim Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) nicht nützlich, da es nur einen möglichen Wert gibt. Ebenso können Sie damit bei Aufrufen von `getUserMedia()` nicht sicherstellen, dass über mehrere Browsersitzungen hinweg dieselbe Gruppe verwendet wird.

## Beispiele

Siehe das Beispiel zum [Ausprobieren von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
