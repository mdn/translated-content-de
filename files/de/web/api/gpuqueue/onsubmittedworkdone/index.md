---
title: "GPUQueue: onSubmittedWorkDone()-Methode"
short-title: onSubmittedWorkDone()
slug: Web/API/GPUQueue/onSubmittedWorkDone
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`onSubmittedWorkDone()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn alle über diese `GPUQueue` an die GPU zum Zeitpunkt des Methodenaufrufs übermittelten Arbeiten verarbeitet wurden.

Dies schließt den Abschluss aller [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync)-Aufrufe auf `GPUBuffer`s ein, die in den an die Warteschlange übermittelten Befehlen verwendet werden, bevor `onSubmittedWorkDone()` aufgerufen wird.

> [!NOTE]
> In den meisten Fällen benötigen Sie keinen Aufruf von `onSubmittedWorkDone()`. Sie müssen es **_nicht_** für die Zuordnung eines Puffers aufrufen. `mapAsync` garantiert, dass Arbeiten, die in die Warteschlange gestellt wurden, bevor `mapAsync` aufgerufen wird, vor der Rückkehr von `mapAsync` abgeschlossen sind (siehe [WebGPU-Spezifikation: Abschnitt 5.2](https://www.w3.org/TR/webgpu/#buffer-mapping))

Die zwei Anwendungsfälle für `onSubmittedWorkDone`

1. Warten auf mehrere Puffer-Zuordnungen (langsam)

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

   Der Grund, warum die zweite Methode langsam ist, ist, dass die Implementierung möglicherweise die Puffer zuordnen kann, bevor alle übermittelten Arbeiten abgeschlossen sind.
   Wenn alle Puffer fertig verwendet sind, aber mehr Arbeiten (die nichts mit den Puffern zu tun haben) bereits übermittelt wurden, müssen Sie mit der zweiten Methode länger warten als mit der ersten.

2. Drosselung von Arbeiten

   Wenn Sie schwere Berechnungen durchführen und zu viele Arbeiten auf einmal übermitteln, kann der Browser Ihre Arbeiten abbrechen.
   Sie können die Arbeiten drosseln, indem Sie nur dann mehr Arbeiten übermitteln, wenn die bereits übermittelten Arbeiten abgeschlossen sind.

## Syntax

```js-nolint
device.queue.onSubmittedWorkDone()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("Undefined")}} erfüllt wird.

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
