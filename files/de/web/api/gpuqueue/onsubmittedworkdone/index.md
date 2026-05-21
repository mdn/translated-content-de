---
title: "GPUQueue: Methode onSubmittedWorkDone()"
short-title: onSubmittedWorkDone()
slug: Web/API/GPUQueue/onSubmittedWorkDone
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`onSubmittedWorkDone()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle Arbeiten, die der GPU über diese `GPUQueue` zum Zeitpunkt des Aufrufs der Methode zugewiesen wurden, verarbeitet sind.

Dies schließt den Abschluss aller [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync)-Aufrufe ein, die an `GPUBuffer`-Objekten vorgenommen wurden, die in der Warteschlange vor dem Aufruf von `onSubmittedWorkDone()` verwendet werden.

> [!NOTE]
> In den meisten Fällen müssen Sie `onSubmittedWorkDone()` _nicht_ aufrufen. Sie müssen es **_nicht_** für das Mapping eines Puffers aufrufen. `mapAsync` garantiert, dass die Arbeit, die vor dem Aufruf von `mapAsync` in die Warteschlange eingereiht wird, vor der Rückgabe von `mapAsync` abgeschlossen wird (siehe [WebGPU-Spezifikation](https://gpuweb.github.io/gpuweb/#buffer-mapping)).

Die zwei Anwendungsfälle für `onSubmittedWorkDone`

1. Warten auf mehrere Puffer-Zuweisungen (langsam)

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

   Der Grund, warum die zweite Methode langsam ist, liegt darin, dass die Implementierung möglicherweise die Puffer zuweisen kann, bevor alle eingereichten Arbeiten abgeschlossen sind. Beispielsweise, wenn alle Puffer fertig verwendet werden, aber mehr Arbeit (unabhängig von den Puffern) bereits eingereicht ist, dann werden Sie mit der zweiten Methode länger warten als mit der ersten.

2. Arbeit drosseln

   Wenn Sie schwere Berechnungen durchführen und zu viel Arbeit auf einmal einreichen, kann der Browser Ihre Arbeit beenden. Sie können die Arbeit drosseln, indem Sie erst dann mehr Arbeit einreichen, wenn die bereits eingereichte Arbeit abgeschlossen ist.

## Syntax

```js-nolint
onSubmittedWorkDone()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} aufgelöst wird.

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
