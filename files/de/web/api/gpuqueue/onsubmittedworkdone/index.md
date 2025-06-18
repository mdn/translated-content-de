---
title: "GPUQueue: onSubmittedWorkDone() Methode"
short-title: onSubmittedWorkDone()
slug: Web/API/GPUQueue/onSubmittedWorkDone
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`onSubmittedWorkDone()`** Methode des [`GPUQueue`](/de/docs/Web/API/GPUQueue) Interface gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle Arbeiten, die über diese `GPUQueue` an die GPU übergeben wurden, zu dem Zeitpunkt, an dem die Methode aufgerufen wird, verarbeitet wurden.

Dies schließt den Abschluss aller [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) Aufrufe ein, die auf `GPUBuffer`s durchgeführt wurden, die in Befehlen verwendet wurden, die an die Queue übergeben wurden, bevor `onSubmittedWorkDone()` aufgerufen wird.

> [!NOTE]
> In den meisten Fällen müssen Sie `onSubmittedWorkDone()` _nicht_ aufrufen. Sie müssen es **_nicht_** für das Mapping eines Buffers aufrufen. `mapAsync` garantiert, dass die Arbeit, die vor dem Aufruf von `mapAsync` an die Queue übergeben wurde, bevor `mapAsync` zurückkehrt, abgeschlossen ist (siehe [WebGPU-Spezifikation](https://gpuweb.github.io/gpuweb/#buffer-mapping)).

Die zwei Anwendungsfälle für `onSubmittedWorkDone`

1. Warten auf mehrere Buffer-Mappings (langsam)

   ```js
   // good
   await Promise.all([
     buffer1.mapAsync(),
     buffer2.mapAsync(),
     buffer3.mapAsync(),
   ]);
   data1 = buffer1.getMappedRange();
   data2 = buffer2.getMappedRange();
   data3 = buffer3.getMappedRange();
   ```

   ```js
   // works but slow
   buffer1.mapAsync();
   buffer2.mapAsync();
   buffer3.mapAsync();
   await device.queue.onSubmittedWorkDone();
   data1 = buffer1.getMappedRange();
   data2 = buffer2.getMappedRange();
   data3 = buffer3.getMappedRange();
   ```

   Der Grund, warum die zweite Methode langsam ist, liegt darin, dass die Implementierung möglicherweise in der Lage ist, die Buffer zu mappen, bevor alle eingereichten Arbeiten abgeschlossen sind. Zum Beispiel, wenn alle Buffer beendet sind, aber mehr Arbeit (nicht in Zusammenhang mit den Buffern) bereits eingereicht wurde, dann werden Sie mit der zweiten Methode länger warten als mit der ersten.

2. Drosselung der Arbeit

   Wenn Sie schwere Rechenarbeiten durchführen und zu viel Arbeit auf einmal einreichen, kann der Browser Ihre Arbeit beenden. Sie können die Arbeit drosseln, indem Sie nur dann mehr Arbeit einreichen, wenn die bereits eingereichte Arbeit abgeschlossen ist.

## Syntax

```js-nolint
onSubmittedWorkDone()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("Undefined")}} aufgelöst wird.

## Beispiele

```js
device.queue.submit([commandEncoder.finish()]);
device.queue.onSubmittedWorkDone().then(() => {
  console.log("All submitted commands processed.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
