---
title: "GPUQueue: onSubmittedWorkDone() Methode"
short-title: onSubmittedWorkDone()
slug: Web/API/GPUQueue/onSubmittedWorkDone
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`onSubmittedWorkDone()`** Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle Arbeiten, die zu diesem Zeitpunkt über diese `GPUQueue` an die GPU übermittelt wurden, verarbeitet wurden.

Dies schließt den Abschluss aller [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) Aufrufe ein, die auf `GPUBuffer`-Objekten gemacht wurden, die in den an die Warteschlange übermittelten Befehlen verwendet wurden, bevor `onSubmittedWorkDone()` aufgerufen wird.

> [!NOTE]
> In den meisten Fällen ist es **_nicht_** erforderlich, `onSubmittedWorkDone()` aufzurufen. Sie müssen dies **_nicht_** tun, um einen Puffer zuzuordnen. `mapAsync` garantiert, dass Arbeiten, die der Warteschlange vor dem Aufruf von `mapAsync` übermittelt wurden, vor der Rückgabe von `mapAsync` abgeschlossen sind (siehe [WebGPU-Spezifikation: Abschnitt 5.2](https://www.w3.org/TR/webgpu/#buffer-mapping)).

Die zwei Anwendungsfälle für `onSubmittedWorkDone`:

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
   Zum Beispiel, wenn alle Puffer nicht mehr verwendet werden, aber weitere Arbeiten (die nicht mit den Puffern zusammenhängen) bereits übermittelt wurden, dann werden Sie mit der zweiten Methode länger warten als mit der ersten.

2. Drosseln der Arbeit

   Wenn Sie schwere Rechenaufgaben erledigen und zu viel Arbeit auf einmal übermitteln, kann der Browser Ihre Arbeit beenden.
   Sie können die Arbeit drosseln, indem Sie nur mehr Arbeit einreichen, wenn die bereits übermittelte Arbeit erledigt ist.

## Syntax

```js-nolint
onSubmittedWorkDone()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("Undefined")}} auflöst.

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
