---
title: "Navigator: devicePosture-Eigenschaft"
short-title: devicePosture
slug: Web/API/Navigator/devicePosture
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{APIRef("WebdevicePosture API")}}{{SeeCompatTable}}

Die schreibgeschützte **`Navigator.devicePosture`**-Eigenschaft gibt das [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Objekt des Browsers zurück. Dieses ermöglicht es Entwicklern, die aktuelle Haltung des Geräts abzufragen (also ob der Viewport flach oder gefaltet ist) und Code entsprechend auf Haltungsänderungen zu reagieren.

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
- CSS {{cssxref("@media/device-posture", "device-posture")}}-`@media`-Feature
