---
title: InputDeviceInfo
slug: Web/API/InputDeviceInfo
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`InputDeviceInfo`**-Schnittstelle der {{domxref("Media Capture and Streams API", "", "", "nocode")}} bietet Zugang zu den Fähigkeiten des Eingabegeräts, das sie repräsentiert.

`InputDeviceInfo`-Objekte werden von {{domxref("MediaDevices.enumerateDevices()")}} zurückgegeben, wenn das zurückgegebene Gerät ein Audio- oder Videoeingabegerät ist.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, {{DOMxRef("MediaDeviceInfo")}}._

## Instanzmethoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, {{DOMxRef("MediaDeviceInfo")}}._

- {{domxref("InputDeviceInfo.getCapabilities()")}}
  - : Gibt ein `MediaTrackCapabilities`-Objekt zurück, das die primäre Audio- oder Video-Spur eines Geräts `MediaStream` beschreibt.

## Beispiele

Das folgende Beispiel ruft alle Mediengeräte mit {{domxref("MediaDevices.enumerateDevices()")}} ab. Wenn eines der Geräte Eingabegeräte ist, dann wird `console.log(device)` ein `InputDeviceInfo`-Objekt in die Konsole ausgeben.

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device); // An InputDeviceInfo object if the device is an input device, otherwise a MediaDeviceInfo object.
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
