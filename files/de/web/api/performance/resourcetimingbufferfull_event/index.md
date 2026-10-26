---
title: "Performance: resourcetimingbufferfull-Ereignis"
short-title: resourcetimingbufferfull
slug: Web/API/Performance/resourcetimingbufferfull_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das Ereignis `resourcetimingbufferfull` wird ausgelöst, wenn der [Puffer für Ressourcen-Timing](/de/docs/Web/API/Performance/setResourceTimingBufferSize) des Browsers voll ist.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("resourcetimingbufferfull", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onresourcetimingbufferfull = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Puffergröße erhöhen, wenn der Puffer voll ist

Das folgende Beispiel überwacht das Ereignis `resourcetimingbufferfull` und erhöht die Puffergröße mit der Methode [`setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize).

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
