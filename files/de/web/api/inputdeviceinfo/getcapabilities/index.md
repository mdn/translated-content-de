---
title: "InputDeviceInfo: Methode getCapabilities()"
short-title: getCapabilities()
slug: Web/API/InputDeviceInfo/getCapabilities
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`getCapabilities()`**-Methode des [`InputDeviceInfo`](/de/docs/Web/API/InputDeviceInfo)-Interfaces gibt ein `MediaTrackCapabilities`-Objekt zurück, das die primäre Audio- oder Videospur des Geräts im [`MediaStream`](/de/docs/Web/API/MediaStream) beschreibt.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities`-Objekt, das den Wert oder Wertebereich angibt, die für jede von der Benutzeroberfläche unterstützte einschränkbare Eigenschaft unterstützt werden. Es enthält die folgenden Mitglieder:

- `deviceId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das die Geräte-ID enthält.
- `groupId`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das eine Gruppen-ID enthält.
- `autoGainControl`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle eine automatische Verstärkungsregelung durchführen kann.
    Wenn das Feature durch ein Skript gesteuert werden kann, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `channelCount`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Kanalanzahl oder den Bereich der Kanalanzahlen enthält.
- `echoCancellation`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle eine Echounterdrückung durchführen kann.
    Wenn das Feature durch ein Skript gesteuert werden kann, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `latency`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble)-Objekt, das die Latenz oder den Bereich der Latenzen enthält.
- `noiseSuppression`
  - : Ein [`ConstrainBoolean`](/de/docs/Web/API/MediaTrackConstraints#constrainboolean)-Objekt, das angibt, ob die Quelle eine Rauschunterdrückung durchführen kann.
    Wenn das Feature durch ein Skript gesteuert werden kann, wird die Quelle sowohl `true` als auch `false` als mögliche Werte melden.
- `sampleRate`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Abtastrate oder den Bereich der Abtastraten enthält.
- `sampleSize`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Abtastgröße oder den Bereich der Abtastgrößen enthält.
- `aspectRatio`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble)-Objekt, das das Video- [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) (Breite in Pixel geteilt durch Höhe in Pixel) oder den Bereich der Seitenverhältnisse enthält.
- `facingMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Kamerablickmodus enthält. Eine Kamera kann mehrere Ausrichtungen melden, zum Beispiel "left" und "user".
- `frameRate`
  - : Ein [`ConstrainDouble`](/de/docs/Web/API/MediaTrackConstraints#constraindouble)-Objekt, das die Bildrate oder den Bereich der akzeptablen Bildraten enthält.
- `height`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Videohöhe oder den Bereich der Höhen in Pixel enthält.
- `width`
  - : Ein [`ConstrainULong`](/de/docs/Web/API/MediaTrackConstraints#constrainulong)-Objekt, das die Videobreite oder den Bereich der Breiten in Pixel enthält.
- `resizeMode`
  - : Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring)-Objekt, das den Modus oder ein Array von Modi enthält, die die Benutzeroberfläche verwenden kann, um die Auflösung der Videospur abzuleiten.

> [!NOTE]
> Wenn der Benutzer keine Berechtigung zum Zugriff auf das Eingabegerät erteilt hat, wird ein leeres Objekt zurückgegeben.

## Beispiele

Im folgenden Beispiel fragen wir um Erlaubnis zum Zugriff auf Audio- und Videogeräte mit [`mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), da wir zur Verwendung von `getCapabilities()` die Erlaubnis zum Zugriff auf die Geräte benötigen.

Wenn `device` ein `InputDeviceInfo`-Objekt ist, gibt `getCapabilities()` ein Objekt mit Mitgliedern zurück, die seine Fähigkeiten repräsentieren. Ein Videostream wird zum Beispiel keine automatischen Eigenschaften wie `noiseSuppression` enthalten.

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
