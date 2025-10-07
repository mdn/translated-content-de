---
title: "InputDeviceInfo: getCapabilities() Methode"
short-title: getCapabilities()
slug: Web/API/InputDeviceInfo/getCapabilities
l10n:
  sourceCommit: 4b73e0c0f68f1fe5462d3475cf46a98b31b25ef4
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`getCapabilities()`** Methode der [`InputDeviceInfo`](/de/docs/Web/API/InputDeviceInfo) Schnittstelle gibt ein `MediaTrackCapabilities` Objekt zurück, das die primäre Audio- oder Videospur des Geräts in einem [`MediaStream`](/de/docs/Web/API/MediaStream) beschreibt.

## Syntax

```js-nolint
getCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein `MediaTrackCapabilities` Objekt, das den Wert oder Bereich von Werten angibt, die für jede der vom User-Agent unterstützten beschränkbaren Eigenschaften unterstützt werden. Es muss identische Informationen zurückgeben wie der Aufruf von `getCapabilities()` auf der ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gleichen Typs (Video oder Audio) in dem `MediaStream`, das durch `getUserMedia({ deviceId: deviceInfo.deviceId })` zurückgegeben wird.

Siehe [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) für eine Liste der häufig unterstützten Eigenschaften und deren Typen.

> [!NOTE]
> Wenn der Benutzer nicht die Erlaubnis zur Nutzung des Eingabegeräts erteilt hat, wird ein leeres Objekt zurückgegeben.

## Beispiele

Im folgenden Beispiel bitten wir um Erlaubnis, auf Audio- und Videogeräte mit [`mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zuzugreifen, da wir zum Verwenden von `getCapabilities()` die Erlaubnis zum Zugriff auf die Geräte benötigen.

Wenn `device` ein `InputDeviceInfo` Objekt ist, gibt `getCapabilities()` ein Objekt mit Mitgliedern zurück, die dessen Fähigkeiten repräsentieren. Ein Videostream wird keine automatischen Eigenschaften wie `noiseSuppression` enthalten, zum Beispiel.

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

- [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities), das ebenfalls ein `MediaTrackCapabilities` Objekt zurückgibt.
