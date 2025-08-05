---
title: "InputDeviceInfo: getCapabilities() Methode"
short-title: getCapabilities()
slug: Web/API/InputDeviceInfo/getCapabilities
l10n:
  sourceCommit: f093b1f6c77c5f8fd86965af97d91f49d6b758d6
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`getCapabilities()`** Methode der [`InputDeviceInfo`](/de/docs/Web/API/InputDeviceInfo) Schnittstelle gibt ein `MediaTrackCapabilities` Objekt zurück, das den primären Audio- oder Videotrack des Geräts innerhalb des [`MediaStream`](/de/docs/Web/API/MediaStream) beschreibt.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities` Objekt, das den Wert oder den Wertebereich beschreibt, der für jede der vom Benutzeragenten unterstützten einschränkbaren Eigenschaften unterstützt wird. Es wird erwartet, dass dieselben Informationen zurückgegeben werden, wie sie durch den Aufruf von `getCapabilities()` auf dem ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) desselben `kind` wie dieses Gerät (Video oder Audio) im `MediaStream`, der von `getUserMedia({ deviceId: deviceInfo.deviceId })` zurückgegeben wird, zurückgegeben werden. Sehen Sie sich [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) für eine Liste der häufig unterstützten Eigenschaften und ihrer Typen an.

> [!NOTE]
> Wenn dem Benutzer nicht die Erlaubnis erteilt wurde, auf das Eingabegerät zuzugreifen, wird ein leeres Objekt zurückgegeben.

## Beispiele

Im folgenden Beispiel bitten wir um Erlaubnis, auf Audio- und Videogeräte mit [`mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zuzugreifen, da wir zur Nutzung von `getCapabilities()` die Erlaubnis zum Zugriff auf die Geräte benötigen.

Wenn `device` ein `InputDeviceInfo` Objekt ist, dann wird `getCapabilities()` ein Objekt mit Elementen zurückgeben, die seine Fähigkeiten repräsentieren. Ein Videostream wird beispielsweise keine automatischen Eigenschaften wie `noiseSuppression` enthalten.

```js
// Get permission to access audio or video devices
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  // Enumerate media devices
  .then(() => navigator.mediaDevices.enumerateDevices())
  .then((devices) => {
    devices.forEach((device) => {
      if (typeof device.getCapabilities === "function") {
        console.log("Capabilities:", device.getCapabilities()); // A MediaTrackCapabilities object.
      } else {
        console.log("Device does not support getCapabilities:", device);
      }
    });
  })
  .catch((mediaError) => {
    console.error("Error accessing media devices:", mediaError);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities), welches ebenfalls ein `MediaTrackCapabilities` Objekt zurückgibt.
