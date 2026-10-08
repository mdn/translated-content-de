---
title: "MediaTrackConstraints: Eigenschaft groupId"
short-title: groupId
slug: Web/API/MediaTrackConstraints/groupId
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`groupId`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die gewünschten oder verpflichtenden Einschränkungen für den Wert der einschränkbaren Eigenschaft [`groupId`](/de/docs/Web/API/MediaStreamTrack/getSettings#groupid) beschreibt.

Bei Bedarf können Sie prüfen, ob diese Einschränkung unterstützt wird. Prüfen Sie dazu den Wert von [`groupId`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#groupid), den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist das jedoch nicht nötig, da Browser unbekannte Einschränkungen ignorieren.

## Wert

Ein auf [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) basierendes Objekt, das eine oder mehrere zulässige, bevorzugte und/oder exakte (verpflichtende) Gruppen-IDs angibt, die für die Quelle der Medieninhalte infrage kommen.

Gruppen-IDs sind für einen bestimmten Origin während einer einzelnen Browsersitzung eindeutig. Alle Medienquellen, die vom selben physischen Gerät stammen, haben dieselbe Gruppen-ID. Beispielsweise hätten das Mikrofon und der Lautsprecher desselben Headsets dieselbe Gruppen-ID. So können Sie anhand der Gruppen-ID sicherstellen, dass sich das Audioausgabe- und das Eingabegerät am selben Headset befinden: Dazu könnten Sie die Gruppen-ID des Eingabegeräts abrufen und sie bei der Anforderung eines Ausgabegeräts angeben.

Der Wert von `groupId` wird jedoch von der Quelle der Track-Inhalte bestimmt. Die Spezifikation schreibt dafür kein bestimmtes Format vor, empfiehlt aber eine Art GUID. Das bedeutet, dass ein bestimmter Track beim Aufruf von [`getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) nur einen Wert für `groupId` zurückgibt. Beachten Sie außerdem, dass sich dieser Wert mit jeder Browsersitzung ändert.

Deshalb ist die Gruppen-ID bei einem Aufruf von [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) nicht nützlich, da nur ein Wert möglich ist. Ebenso können Sie sie bei einem Aufruf von `getUserMedia()` nicht verwenden, um sicherzustellen, dass über mehrere Browsersitzungen hinweg dieselbe Gruppe verwendet wird.

## Beispiele

Sehen Sie sich das Beispiel [Constraint exerciser](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an.

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
