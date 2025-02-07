---
title: "DevicePosture: type-Eigenschaft"
short-title: type
slug: Web/API/DevicePosture/type
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

Die schreibgeschützte **`type`**-Eigenschaft der [`DevicePosture`](/de/docs/Web/API/DevicePosture)-Schnittstelle gibt die aktuelle Haltung des Geräts zurück.

## Wert

Ein String, der die aktuelle Haltung des Geräts darstellt. Der Wert kann einer der folgenden sein:

- `continuous`
  - : Gibt eine flache Bildschirmhaltung an — dies kann ein faltbares Gerät in flachgenutztem Zustand, ein nahtlos gebogener Bildschirm oder ein standardmäßiger Desktop-, Laptop-, Tablet- oder Mobilbildschirm sein.
- `folded`
  - : Gibt eine gefaltete Bildschirmhaltung an — dies kann ein faltbares Gerät sein, das in einer Buch- oder Laptop-Haltung verwendet wird.

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
- [Origin Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
