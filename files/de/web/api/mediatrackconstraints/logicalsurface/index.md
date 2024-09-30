---
title: "MediaTrackConstraints: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackConstraints/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das die angeforderten oder zwingenden Einschränkungen beschreibt, die dem Wert der [`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface) beschränkbaren Eigenschaft auferlegt werden.

Dies wird verwendet, um anzugeben, ob [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) dem Benutzer die Auswahl von Anzeigeflächen ermöglichen soll, die nicht unbedingt vollständig auf dem Bildschirm sichtbar sind, wie zum Beispiel verdeckte Fenster oder der gesamte Inhalt von Fenstern, die groß genug sind, um das Scrollen zu erfordern, um ihren gesamten Inhalt zu sehen.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.logicalSurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface) überprüfen, der durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das `true` ist, wenn logische Flächen unter den für den Benutzer verfügbaren Auswahlmöglichkeiten erlaubt sein sollen.

Siehe [wie Einschränkungen definiert sind](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

## Anwendungshinweise

Sie können die vom User-Agent ausgewählte Einstellung überprüfen, nachdem das Anzeigemedium durch [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) erstellt wurde, indem Sie [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) auf dem Video-`MediaStreamTrack` des Anzeigemediums aufrufen und dann den Wert des zurückgegebenen [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekts 
[`logicalSurface`](/de/docs/Web/API/MediaTrackSettings/logicalSurface) überprüfen.

Wenn Ihr App beispielsweise wissen muss, ob die ausgewählte Anzeigefläche eine logische ist:

```js
let isLogicalSurface = displayStream
  .getVideoTracks()[0]
  .getSettings().logicalSurface;
```

Ist `isLogicalSurface` nach diesem Code `true`, wenn die im Stream enthaltene Anzeigefläche eine logische Oberfläche ist, also eine, die möglicherweise nicht vollständig auf dem Bildschirm ist oder sogar vollständig außerhalb des Bildschirms liegt.

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
