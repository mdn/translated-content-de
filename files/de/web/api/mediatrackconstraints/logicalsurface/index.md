---
title: "MediaTrackConstraints: Eigenschaft logicalSurface"
short-title: logicalSurface
slug: Web/API/MediaTrackConstraints/logicalSurface
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`logicalSurface`** des Dictionaries [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die gewünschten oder zwingenden Constraints für den Wert der einschränkbaren Eigenschaft [`logicalSurface`](/de/docs/Web/API/MediaStreamTrack/getSettings#logicalsurface) beschreibt.

Damit wird festgelegt, ob [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Benutzern erlauben soll, Anzeigeflächen auszuwählen, die nicht unbedingt vollständig auf dem Bildschirm sichtbar sind. Dazu gehören verdeckte Fenster oder der gesamte Inhalt von Fenstern, die so groß sind, dass man scrollen muss, um ihren vollständigen Inhalt zu sehen.

Bei Bedarf können Sie prüfen, ob dieser Constraint unterstützt wird, indem Sie den Wert von [`logicalSurface`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#logicalsurface) überprüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. In der Regel ist dies jedoch nicht nötig, da Browser unbekannte Constraints ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der `true` ist, wenn logische Anzeigeflächen zu den Auswahlmöglichkeiten für Benutzer gehören sollen.

Siehe [wie Constraints definiert werden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

## Hinweise zur Verwendung

Nachdem [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) das Anzeigemedium erstellt hat, können Sie die vom User Agent gewählte Einstellung überprüfen: Rufen Sie dazu [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) für den Video-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) des Anzeigemediums auf und prüfen Sie anschließend den Wert der Eigenschaft [`logicalSurface`](/de/docs/Web/API/MediaStreamTrack/getSettings#logicalsurface).

Wenn Ihre Anwendung beispielsweise wissen muss, ob die ausgewählte Anzeigefläche eine logische Anzeigefläche ist:

```js
let isLogicalSurface = displayStream
  .getVideoTracks()[0]
  .getSettings().logicalSurface;
```

Nach Ausführung dieses Codes ist `isLogicalSurface` `true`, wenn die im Stream enthaltene Anzeigefläche eine logische Anzeigefläche ist. Das bedeutet, dass sie möglicherweise nicht vollständig oder sogar überhaupt nicht auf dem Bildschirm sichtbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Funktionen, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
