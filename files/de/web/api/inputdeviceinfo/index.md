---
title: InputDeviceInfo
slug: Web/API/InputDeviceInfo
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`InputDeviceInfo`**-Schnittstelle der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) ermöglicht den Zugriff auf die Fähigkeiten des Eingabegeräts, das sie repräsentiert.

`InputDeviceInfo`-Objekte werden von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben, wenn das zurückgegebene Gerät ein Audio- oder Videoeingabegerät ist.

{{InheritanceDiagram}}

## Instanz Eigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)._

## Instanzmethoden

_Erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)._

- [`InputDeviceInfo.getCapabilities()`](/de/docs/Web/API/InputDeviceInfo/getCapabilities)
  - : Gibt ein `MediaTrackCapabilities`-Objekt zurück, das die primäre Audio- oder Videospur eines Geräts im `MediaStream` beschreibt.

## Beispiele

Das folgende Beispiel ruft alle Mediengeräte mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) ab. Wenn eines der Geräte ein Eingabegerät ist, wird `console.log(device)` ein `InputDeviceInfo`-Objekt in die Konsole ausgeben.

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device); // an InputDeviceInfo object if the device is an input device, otherwise a MediaDeviceInfo object.
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
