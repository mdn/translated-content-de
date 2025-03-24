---
title: "Profiler: Profiler()-Konstruktor"
short-title: Profiler()
slug: Web/API/Profiler/Profiler
l10n:
  sourceCommit: f06910b17bbf44908adc559a9b7b95bd70ae88cf
---

{{APIRef("JS Self-Profiling API")}}{{SeeCompatTable}}

Der **`Profiler()`**-Konstruktor erstellt ein neues [`Profiler`](/de/docs/Web/API/Profiler)-Objekt.

Sobald der Profiler erstellt ist, beginnt er mit der Sammlung von Proben.

## Syntax

```js-nolint
new Profiler(options)
```

### Parameter

- `options`

  - : Optionen für diesen Profiler. Dies ist ein Objekt mit den folgenden Eigenschaften:

    - `maxBufferSize`
      - : Eine Zahl, die die maximale Anzahl von zu entnehmenden Proben angibt. Sobald diese Zahl erreicht ist, löst der Browser das [`samplebufferfull`](/de/docs/Web/API/Profiler/samplebufferfull_event)-Ereignis am Profiler aus und es werden keine weiteren Proben aufgezeichnet.
    - `sampleInterval`
      - : Das Zeitintervall zwischen den Proben in Millisekunden.

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `sampleInterval`-Option kleiner als Null ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht mit einer [Document Policy](https://wicg.github.io/document-policy/) ausgeliefert wurde, die den Konfigurationspunkt `"js-profiling"` enthält.

## Beispiele

Dieses Beispiel erstellt einen Profiler, der bis zu 1000 Proben nimmt und alle 10 Millisekunden eine Probe entnimmt.

```js
const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 1000 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
