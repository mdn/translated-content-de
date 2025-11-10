---
title: "DevicePosture: change-Ereignis"
short-title: change
slug: Web/API/DevicePosture/change_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

Das **`change`**-Ereignis des [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Interface wird ausgelöst, wenn sich die Haltung des Geräts ändert, zum Beispiel wenn ein faltbares Gerät von der Haltung `folded` zu `continuous` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

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

- CSS {{cssxref("@media/device-posture", "device-posture")}} `@media`-Feature
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Origin-Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
