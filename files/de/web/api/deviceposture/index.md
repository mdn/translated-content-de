---
title: DevicePosture
slug: Web/API/DevicePosture
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

Die **`DevicePosture`**-Schnittstelle der [Device Posture API](/de/docs/Web/API/Device_Posture_API) repräsentiert die Haltung des Geräts, das heißt, ob die Ansicht in einem flachen oder gefalteten Zustand ist.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`type`](/de/docs/Web/API/DevicePosture/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die aktuelle Haltung des Geräts zurück.

## Ereignisse

- [`change`](/de/docs/Web/API/DevicePosture/change_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die Haltung des Geräts ändert.

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
- [Herkunftstest für faltbare APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
