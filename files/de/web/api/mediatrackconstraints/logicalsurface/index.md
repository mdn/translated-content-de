---
title: "MediaTrackConstraints: logicalSurface Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackConstraints/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`** Eigenschaft des {{domxref("MediaTrackConstraints")}} Verzeichnisses ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das die angeforderten oder verpflichtenden Einschränkungen beschreibt, die auf den Wert der {{domxref("MediaTrackSettings.logicalSurface","logicalSurface")}} einschränkbaren Eigenschaft angewendet werden.

Diese wird verwendet, um anzugeben, ob {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} dem Benutzer erlauben sollte, Anzeigeflächen auszuwählen, die nicht unbedingt vollständig auf dem Bildschirm sichtbar sind, z. B. verdeckte Fenster oder der gesamte Inhalt von Fenstern, die so groß sind, dass zum Ansehen des gesamten Inhalts gescrollt werden muss.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.logicalSurface")}} prüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. Normalerweise ist dies jedoch nicht notwendig, da Browser unbekannte Einschränkungen einfach ignorieren.

## Wert

Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean), das `true` ist, wenn logische Oberflächen zu den Auswahlmöglichkeiten gehören sollen, die dem Benutzer zur Verfügung stehen.

Siehe [wie Einschränkungen definiert sind](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

## Verwendungshinweise

Sie können die vom Benutzeragenten ausgewählte Einstellung überprüfen, nachdem das Anzeigemedium durch {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} erstellt wurde, indem Sie {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} auf dem Video-{{domxref("MediaStreamTrack")}} des Anzeigemediums aufrufen und dann den Wert des zurückgegebenen {{domxref("MediaTrackSettings")}} Objekts überprüfen. Insbesondere das {{domxref("MediaTrackSettings.logicalSurface", "logicalSurface")}} Objekt.

Zum Beispiel, wenn Ihre App wissen muss, ob die ausgewählte Anzeigefläche eine logische ist:

```js
let isLogicalSurface = displayStream
  .getVideoTracks()[0]
  .getSettings().logicalSurface;
```

Nach diesem Code ist `isLogicalSurface` `true`, wenn die Anzeigefläche, die im Stream enthalten ist, eine logische Fläche ist; das heißt, eine, die möglicherweise nicht vollständig auf dem Bildschirm ist oder sogar vollständig außerhalb des Bildschirms sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
