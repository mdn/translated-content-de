---
title: "Performance: resourcetimingbufferfull Ereignis"
short-title: resourcetimingbufferfull
slug: Web/API/Performance/resourcetimingbufferfull_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Das `resourcetimingbufferfull`-Ereignis wird ausgelöst, wenn der [Resource Timing Buffer](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resourcetimingbufferfull", (event) => {});

onresourcetimingbufferfull = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

### Größe vergrößern, wenn der Puffer voll ist

Das folgende Beispiel hört auf das `resourcetimingbufferfull`-Ereignis und vergrößert die Puffergröße mit der Methode {{domxref("Performance.setResourceTimingBufferSize", "setResourceTimingBufferSize()")}}.

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

- {{domxref("Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize()")}}