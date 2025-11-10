---
title: "Navigator: devicePosture-Eigenschaft"
short-title: devicePosture
slug: Web/API/Navigator/devicePosture
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

Die schreibgeschützte **`Navigator.devicePosture`**-Eigenschaft gibt das [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Objekt des Browsers zurück, das es Entwicklern ermöglicht, die aktuelle Haltung des Geräts abzufragen (das heißt, ob das Viewport in einem flachen oder gefalteten Zustand ist) und Code als Reaktion auf Haltungsänderungen auszuführen.

## Wert

Ein [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Objekt.

## Beispiele

```js
const postureOutput = document.getElementById("currentPosture");

function reportPostureOutput() {
  // type property returns "continuous" or "folded"
  postureOutput.textContent = `Device posture: ${navigator.devicePosture.type}`;
}

navigator.devicePosture.addEventListener("change", reportPostureOutput);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
- [`devicePosture.type`](/de/docs/Web/API/DevicePosture/type)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- CSS {{cssxref("@media/device-posture", "device-posture")}} `@media`-Funktion
