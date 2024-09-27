---
title: "MediaTrackConstraints: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackConstraints/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Dictionaries ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die angeforderten oder obligatorischen Einschränkungen beschreibt, die auf den Wert der [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface) beschränkbaren Eigenschaft angewendet werden.

Dies wird verwendet, um anzugeben, ob [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) dem Benutzer erlauben sollte, Anzeigeflächen auszuwählen, die nicht unbedingt vollständig auf dem Bildschirm sichtbar sind, wie z. B. verdeckte Fenster oder der gesamte Inhalt von Fenstern, die groß genug sind, um scrollen zu müssen, um ihren gesamten Inhalt zu sehen.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch unnötig, da Browser alle Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), der `true` ist, wenn logische Flächen unter den vom Benutzer verfügbaren Auswahlen zulässig sein sollten.

Siehe [wie Einschränkungen definiert sind](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

## Nutzungshinweise

Sie können die Einstellung überprüfen, die von der Benutzeranwendung ausgewählt wurde, nachdem das Anzeigemedium von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) erstellt wurde, indem Sie [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) auf dem Video [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) des Anzeigemediums aufrufen und dann den Wert des zurückgegebenen [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekts [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface) überprüfen.

Zum Beispiel, wenn Ihre Anwendung wissen muss, ob die ausgewählte Anzeigefläche eine logische ist:

```js
let isLogicalSurface = displayStream
  .getVideoTracks()[0]
  .getSettings().logicalSurface;
```

Nach diesem Code ist `isLogicalSurface` `true`, wenn die im Stream enthaltene Anzeigefläche eine logische Fläche ist; das heißt, eine, die möglicherweise nicht vollständig auf dem Bildschirm ist oder sogar vollständig außerhalb des Bildschirms sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
