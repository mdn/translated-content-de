---
title: "Profiler: Konstruktor Profiler()"
short-title: Profiler()
slug: Web/API/Profiler/Profiler
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("JS Self-Profiling API")}}{{SeeCompatTable}}

Der Konstruktor **`Profiler()`** erstellt ein neues [`Profiler`](/de/docs/Web/API/Profiler)-Objekt.

Nach der Erstellung beginnt der neue Profiler, Samples zu erfassen.

## Syntax

```js-nolint
new Profiler(options)
```

### Parameter

- `options`
  - : Optionen für diesen Profiler. Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `maxBufferSize`
      - : Eine Zahl, die die maximale Anzahl der zu erfassenden Samples angibt. Sobald diese Anzahl erreicht ist, löst der Browser beim Profiler das Ereignis [`samplebufferfull`](/de/docs/Web/API/Profiler/samplebufferfull_event) aus. Danach werden keine weiteren Samples erfasst.
    - `sampleInterval`
      - : Das Zeitintervall zwischen den Samples in Millisekunden.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die Option `sampleInterval` kleiner als null ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht mit einer [Dokumentrichtlinie](https://wicg.github.io/document-policy/) ausgeliefert wurde, die den Konfigurationspunkt `"js-profiling"` enthält.

## Beispiele

Dieses Beispiel erstellt einen Profiler, der bis zu 1000 Samples im Abstand von jeweils 10 Millisekunden erfasst.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 1000 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
