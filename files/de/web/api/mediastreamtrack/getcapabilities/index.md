---
title: "MediaStreamTrack: Methode getCapabilities()"
short-title: getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("Media Capture and Streams")}}

Die **`getCapabilities()`**-Methode des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces gibt ein `MediaTrackCapabilities`-Objekt zurück, das die Werte oder den Wertebereich spezifiziert, die jede einschränkbare Eigenschaft basierend auf der Plattform und dem {{Glossary("user_agent", "User-Agent")}} hat.

Sobald Sie wissen, was die Fähigkeiten des Browsers sind, kann Ihr Skript [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) verwenden, um zu verlangen, dass der Track so konfiguriert wird, dass er den idealen oder akzeptablen Einstellungen entspricht. Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details, wie man mit einschränkbaren Eigenschaften arbeitet.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities`-Objekt, das den Wert oder Wertebereich angibt, der für jede der vom User-Agent unterstützten einschränkbaren Eigenschaften unterstützt wird und die folgenden Elemente enthält:

- `deviceId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das die Geräte-ID enthält.
- `groupId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das eine Gruppen-ID enthält.
- `autoGainControl`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das meldet, ob die Quelle eine automatische Verstärkungsregelung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, wird die Quelle sowohl true als auch false als mögliche Werte melden.
- `channelCount`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Kanalanzahl oder den Bereich der Kanalanzahlen enthält.
- `echoCancellation`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das meldet, ob die Quelle eine Echounterdrückung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, wird die Quelle sowohl true als auch false als mögliche Werte melden.
- `latency`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die Latenz oder den Bereich der Latenzen enthält.
- `noiseSuppression`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das meldet, ob die Quelle eine Geräuschunterdrückung durchführen kann.
    Wenn die Funktion durch ein Skript gesteuert werden kann, wird die Quelle sowohl true als auch false als mögliche Werte melden.
- `sampleRate`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Abtastrate oder den Bereich der Abtastraten enthält.
- `sampleSize`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Abtastgröße oder den Bereich der Abtastgrößen enthält.
- `aspectRatio`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das das Video-{{Glossary("aspect_ratio", "Seitenverhältnis")}} (Breite in Pixel geteilt durch Höhe in Pixel) oder den Bereich der Seitenverhältnisse enthält.
- `facingMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Kameramodus beschreibt. Eine Kamera kann mehrere Modi melden, zum Beispiel "left" und "user".
- `frameRate`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die Bildwiederholrate oder den Bereich der akzeptablen Bildwiederholraten enthält.
- `height`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Videohöhe oder den Bereich der Höhen in Pixeln enthält.
- `width`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Videobreite oder den Bereich der Breiten in Pixeln enthält.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Modus oder ein Array von Modi enthält, die der UA verwenden kann, um die Auflösung des Videotracks abzuleiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InputDeviceInfo.getCapabilities()`](/de/docs/Web/API/InputDeviceInfo/getCapabilities), welche ebenfalls ein `MediaTrackCapabilities`-Objekt zurückgibt.
