---
title: "Performance: resourcetimingbufferfull Ereignis"
short-title: resourcetimingbufferfull
slug: Web/API/Performance/resourcetimingbufferfull_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das `resourcetimingbufferfull` Ereignis wird ausgelöst, wenn der [Ressourcentimingspeicher](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("resourcetimingbufferfull", (event) => { })

onresourcetimingbufferfull = (event) => { }
```

## Ereignistyp

Ein generisches [`Ereignis`](/de/docs/Web/API/Event).

## Beispiele

### Erhöhung der Größe, wenn der Puffer voll ist

Das folgende Beispiel hört auf das `resourcetimingbufferfull` Ereignis und erhöht die Größe des Puffers mit der Methode [`setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize).

```js
function increaseFilledBufferSize(event) {
  console.log(
    "WARNING: Resource Timing Buffer is FULL! Increasing buffer size to 500.",
  );
  performance.setResourceTimingBufferSize(500);
}

performance.addEventListener(
  "resourcetimingbufferfull",
  increaseFilledBufferSize,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
