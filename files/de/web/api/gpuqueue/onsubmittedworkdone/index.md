---
title: "GPUQueue: Methode onSubmittedWorkDone()"
short-title: onSubmittedWorkDone()
slug: Web/API/GPUQueue/onSubmittedWorkDone
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`onSubmittedWorkDone()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle an die GPU über diese `GPUQueue` übermittelten Arbeiten zu dem Zeitpunkt, an dem die Methode aufgerufen wird, verarbeitet wurden.

Dies umfasst den Abschluss aller [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync)-Aufrufe, die auf `GPUBuffer`s gemacht wurden, die in an die Warteschlange übermittelten Befehlen verwendet werden, bevor `onSubmittedWorkDone()` aufgerufen wird.

> [!NOTE] In den meisten Fällen müssen Sie `onSubmittedWorkDone()` _nicht_ aufrufen. Sie müssen es **_nicht_** zum Mapping eines Puffers aufrufen. `mapAsync` garantiert, dass Arbeiten, die an die Warteschlange übermittelt wurden, bevor `mapAsync` aufgerufen wird, vor der Rückkehr von `mapAsync` ausgeführt werden (siehe [WebGPU-Spezifikation: Abschnitt 5.2](https://www.w3.org/TR/webgpu/#buffer-mapping))

Die zwei Anwendungsfälle für `onSubmittedWorkDone`

1. Warten auf mehrere Pufferzuordnungen (langsam)

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

   Der Grund, warum die zweite Methode langsam ist, liegt darin, dass die Implementierung möglicherweise die Puffer zuordnen kann, bevor alle übermittelten Arbeiten abgeschlossen sind.
   Wenn zum Beispiel alle Puffer fertig verwendet wurden, aber mehr Arbeit (unabhängig von den Puffern) bereits übermittelt wurde, dann
   werden Sie mit der zweiten Methode länger warten als mit der ersten.

2. Drosseln der Arbeit

   Wenn Sie schwere Berechnungsarbeit leisten und zu viel Arbeit auf einmal übermitteln, kann der Browser Ihre Arbeit abbrechen.
   Sie können die Arbeit drosseln, indem Sie neue Arbeit nur dann übermitteln, wenn die bereits übermittelte Arbeit abgeschlossen ist.

## Syntax

```js-nolint
device.queue.onSubmittedWorkDone()
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
