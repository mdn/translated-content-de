---
title: "Profiler: Profiler() Konstruktor"
short-title: Profiler()
slug: Web/API/Profiler/Profiler
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("JS Self-Profiling API")}}{{SeeCompatTable}}

Der **`Profiler()`** Konstruktor erstellt ein neues [`Profiler`](/de/docs/Web/API/Profiler)-Objekt.

Sobald es erstellt ist, beginnt der neue Profiler mit der Sammlung von Proben.

## Syntax

```js-nolint
new Profiler(options)
```

### Parameter

- `options`
  - : Optionen für diesen Profiler. Dies ist ein Objekt, das die folgenden Eigenschaften enthält:
    - `maxBufferSize`
      - : Eine Zahl, die die maximale Anzahl von Proben angibt, die genommen werden sollen. Sobald diese Zahl erreicht ist, löst der Browser das [`samplebufferfull`](/de/docs/Web/API/Profiler/samplebufferfull_event)-Ereignis beim Profiler aus, und es werden keine weiteren Proben aufgezeichnet.
    - `sampleInterval`
      - : Das Zeitintervall zwischen den Proben, in Millisekunden.

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `sampleInterval`-Option kleiner als null ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht mit einer [document policy](https://wicg.github.io/document-policy/) bereitgestellt wurde, die den Konfigurationspunkt `"js-profiling"` enthielt.

## Beispiele

Dieses Beispiel erstellt einen Profiler, der bis zu 1000 Proben aufnehmen wird und alle 10 Millisekunden eine Probe entnimmt.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 1000 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
