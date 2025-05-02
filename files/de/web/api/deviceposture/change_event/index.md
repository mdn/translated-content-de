---
title: "DevicePosture: change Ereignis"
short-title: change
slug: Web/API/DevicePosture/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Das **`change`** Ereignis der [`DevicePosture`](/de/docs/Web/API/DevicePosture) Schnittstelle wird ausgelöst, wenn sich die Haltung des Geräts ändert, zum Beispiel wenn ein faltbares Gerät von der Haltung `folded` zu `continuous` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

- CSS {{cssxref("@media/device-posture", "device-posture")}} `@media` Funktion
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
