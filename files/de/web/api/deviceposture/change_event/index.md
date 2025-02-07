---
title: "DevicePosture: change-Event"
short-title: change
slug: Web/API/DevicePosture/change_event
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{APIRef}}{{SeeCompatTable}}

Das **`change`**-Event der [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Schnittstelle wird ausgelöst, wenn sich die Haltung des Geräts ändert, beispielsweise wenn ein klappbares Gerät von einer `folded`-Haltung in eine `continuous`-Haltung übergeht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
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

- CSS {{cssxref("@media/device-posture", "device-posture")}}-`@media`-Feature
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
