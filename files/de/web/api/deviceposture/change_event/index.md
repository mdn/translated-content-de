---
title: "DevicePosture: change-Ereignis"
short-title: change
slug: Web/API/DevicePosture/change_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

Das **`change`**-Ereignis der [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Schnittstelle wird ausgelöst, wenn sich die Haltung des Geräts ändert, beispielsweise wenn ein faltbares Gerät von der Haltung `folded` zur Haltung `continuous` wechselt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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

- Das CSS-`@media`-Merkmal {{cssxref("@media/device-posture", "device-posture")}}
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Origin-Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
