---
title: "InputDeviceInfo: getCapabilities()-Methode"
short-title: getCapabilities()
slug: Web/API/InputDeviceInfo/getCapabilities
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`getCapabilities()`**-Methode der [`InputDeviceInfo`](/de/docs/Web/API/InputDeviceInfo)-Schnittstelle gibt ein `MediaTrackCapabilities`-Objekt zurück, das die primäre Audio- oder Videospur des Geräts im [`MediaStream`](/de/docs/Web/API/MediaStream) beschreibt.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities`-Objekt, das den Wert oder den Wertebereich angibt, der für jede der vom Benutzeragenten unterstützten Einschränkungs-Eigenschaften unterstützt wird und die folgenden Mitglieder enthält:

- `deviceId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das die Geräte-ID enthält.
- `groupId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das eine Gruppen-ID enthält.
- `autoGainControl`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle automatische Verstärkungsregelung durchführen kann. Wenn das Feature durch ein Skript steuerbar ist, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `channelCount`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong) mit der Kanalanzahl oder dem Bereich der Kanalanzahlen.
- `echoCancellation`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle Echokompensation durchführen kann. Wenn das Feature durch ein Skript steuerbar ist, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `latency`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die Latenz oder den Bereich der Latenzen enthält.
- `noiseSuppression`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle Rauschunterdrückung durchführen kann. Wenn das Feature durch ein Skript steuerbar ist, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `sampleRate`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Abtastrate oder den Bereich der Abtastraten enthält.
- `sampleSize`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Abtastgröße oder den Bereich der Abtastgrößen enthält.
- `aspectRatio`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das das Video-[Seitenverhältnis](/de/docs/Glossary/aspect_ratio) (Breite in Pixel geteilt durch Höhe in Pixel) oder den Bereich der Seitenverhältnisse enthält.
- `facingMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Kameramodus enthält. Eine Kamera kann mehrere Ausrichtungen melden, zum Beispiel "left" und "user".
- `frameRate`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble), das die Bildrate oder den Bereich der akzeptablen Bildraten enthält.
- `height`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Videohöhe oder den Bereich der Höhen in Pixel enthält.
- `width`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong), das die Videobreite oder den Bereich der Breiten in Pixel enthält.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Modus oder eine Reihe von Modi enthält, die der Benutzeragent verwenden kann, um die Auflösung der Videospur abzuleiten.

> [!NOTE]
> Wenn der Benutzer keine Erlaubnis zum Zugriff auf das Eingabegerät erteilt hat, wird ein leeres Objekt zurückgegeben.

## Beispiele

Im folgenden Beispiel bitten wir um Erlaubnis, auf Audio- und Videogeräte mit [`mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zuzugreifen, da wir zum Verwenden von `getCapabilities()` die Erlaubnis benötigen, auf die Geräte zuzugreifen.

Wenn `device` ein `InputDeviceInfo`-Objekt ist, wird `getCapabilities()` ein Objekt mit Mitgliedern zurückgeben, die seine Fähigkeiten darstellen. Ein Videostream wird beispielsweise keine automatischen Eigenschaften wie `noiseSuppression` enthalten.

```js
// Get permission to access audio or video devices
navigator.mediaDevices.getUserMedia({ audio: true, video: true });

navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.getCapabilities()); // a MediaTrackCapabilities object.
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities), das ebenfalls ein `MediaTrackCapabilities`-Objekt zurückgibt.
