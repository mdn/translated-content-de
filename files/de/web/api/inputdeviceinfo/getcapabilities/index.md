---
title: "InputDeviceInfo: Methode getCapabilities()"
short-title: getCapabilities()
slug: Web/API/InputDeviceInfo/getCapabilities
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`getCapabilities()`** Methode des {{domxref("InputDeviceInfo")}} Interfaces gibt ein `MediaTrackCapabilities` Objekt zurück, das die primäre Audio- oder Videospur des Geräts in dessen {{domxref("MediaStream")}} beschreibt.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities` Objekt, das den Wert oder Wertebereich angibt, der für jede der vom Benutzeragenten unterstützten beschränkbaren Eigenschaften unterstützt wird, und folgende Mitglieder enthält:

- `deviceId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) Objekt, das die Geräte-ID enthält.
- `groupId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) Objekt, das eine Gruppen-ID enthält.
- `autoGainControl`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean) Objekt, das angibt, ob die Quelle automatische Verstärkungsregelung durchführen kann.
    Wenn das Merkmal von einem Skript gesteuert werden kann, gibt die Quelle sowohl "true" als auch "false" als mögliche Werte zurück.
- `channelCount`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) mit der Kanalanzahl oder einem Bereich von Kanalanzahlen.
- `echoCancellation`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean) Objekt, das angibt, ob die Quelle Echo-Unterdrückung durchführen kann.
    Wenn das Merkmal von einem Skript gesteuert werden kann, gibt die Quelle sowohl "true" als auch "false" als mögliche Werte zurück.
- `latency`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) mit der Latenzzeit oder einem Bereich von Latenzen.
- `noiseSuppression`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean) Objekt, das angibt, ob die Quelle Rauschunterdrückung durchführen kann.
    Wenn das Merkmal von einem Skript gesteuert werden kann, gibt die Quelle sowohl "true" als auch "false" als mögliche Werte zurück.
- `sampleRate`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) mit der Abtastrate oder einem Bereich von Abtastraten.
- `sampleSize`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) mit der Abtastgröße oder einem Bereich von Abtastgrößen.
- `aspectRatio`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) mit dem Video {{glossary("Seitenverhältnis")}} (Breite in Pixel geteilt durch Höhe in Pixel) oder einem Bereich von Seitenverhältnissen.
- `facingMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) Objekt, das den Modus der Kameraausrichtung enthält. Eine Kamera kann mehrere Ausrichtungen melden, zum Beispiel "left" und "user".
- `frameRate`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble) mit der Bildrate oder einem Bereich von Bildraten, die akzeptabel sind.
- `height`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) mit der Videohöhe oder einem Bereich von Höhen in Pixel.
- `width`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) mit der Videobreite oder einem Bereich von Breiten in Pixel.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring) Objekt, das den Modus oder ein Array von Modi enthält, die der Benutzeragent verwenden kann, um die Auflösung der Videospur abzuleiten.

> [!NOTE]
> Wenn der Benutzer keine Berechtigung zur Nutzung des Eingabegeräts erteilt hat, wird ein leeres Objekt zurückgegeben.

## Beispiele

Im folgenden Beispiel bitten wir um Erlaubnis, Audio- und Videogeräte mit {{domxref("mediaDevices.getUserMedia()")}} zu nutzen, da wir zur Verwendung von `getCapabilities()` die Erlaubnis benötigen, auf die Geräte zuzugreifen.

Wenn `device` ein `InputDeviceInfo` Objekt ist, gibt `getCapabilities()` ein Objekt mit Mitgliedern zurück, die seine Fähigkeiten darstellen. Ein Videostream wird beispielsweise keine automatischen Eigenschaften wie `noiseSuppression` enthalten.

```js
// Erlaubnis erhalten, auf Audio- oder Videogeräte zuzugreifen
navigator.mediaDevices.getUserMedia({ audio: true, video: true });

navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.getCapabilities()); // ein MediaTrackCapabilities Objekt.
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaStreamTrack.getCapabilities()")}}, das ebenfalls ein `MediaTrackCapabilities` Objekt zurückgibt.
