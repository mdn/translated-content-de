---
title: "Profiler: Profiler() Konstruktor"
short-title: Profiler()
slug: Web/API/Profiler/Profiler
l10n:
  sourceCommit: 49f36838f402e87204234c21fa8a98002c7e7a42
---

{{APIRef("JS Self-Profiling API")}}

Der **`Profiler()`** Konstruktor erstellt ein neues [`Profiler`](/de/docs/Web/API/Profiler) Objekt.

Nach der Erstellung beginnt der neue Profiler mit der Datensammlung von Samples.

## Syntax

```js-nolint
new Profiler(options)
```

### Parameter

- `options`

  - : Optionen für diesen Profiler. Dies ist ein Objekt, das die folgenden Eigenschaften enthält:

    - `maxBufferSize`
      - : Eine Zahl, die angibt, wie viele Samples maximal genommen werden. Sobald diese Anzahl erreicht ist, wird das [`samplebufferfull`](/de/docs/Web/API/Profiler/samplebufferfull_event) Ereignis im Profiler ausgelöst, und es werden keine weiteren Samples aufgezeichnet.
    - `sampleInterval`
      - : Das Zeitintervall zwischen den Samples in Millisekunden.

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `sampleInterval` Option kleiner als null ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht mit einer [Dokumentenrichtlinie](https://wicg.github.io/document-policy/) bereitgestellt wurde, die den Konfigurationspunkt `"js-profiling"` enthält.

## Beispiele

Dieses Beispiel erstellt einen Profiler, der bis zu 1000 Samples nimmt, wobei alle 10 Millisekunden gesampelt wird.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 1000 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
