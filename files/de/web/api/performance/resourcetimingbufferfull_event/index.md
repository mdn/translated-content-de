---
title: "Performance: resourcetimingbufferfull Ereignis"
short-title: resourcetimingbufferfull
slug: Web/API/Performance/resourcetimingbufferfull_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Das `resourcetimingbufferfull` Ereignis wird ausgelöst, wenn der [Resource Timing-Puffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resourcetimingbufferfull", (event) => {});

onresourcetimingbufferfull = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Erhöhung der Größe, wenn der Puffer voll ist

Das folgende Beispiel lauscht auf das `resourcetimingbufferfull` Ereignis und erhöht die Puffergröße mittels der [`setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize) Methode.

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
