---
title: "GPUQueue: onSubmittedWorkDone() Methode"
short-title: onSubmittedWorkDone()
slug: Web/API/GPUQueue/onSubmittedWorkDone
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`onSubmittedWorkDone()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald alle an die GPU über diese `GPUQueue` gesendeten Aufträge zu dem Zeitpunkt, an dem die Methode aufgerufen wird, verarbeitet wurden.

Dies schließt den Abschluss aller [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync)-Aufrufe ein, die mit `GPUBuffer`-Objekten aufgerufen werden, die in Befehlen verwendet werden, die an die Queue gesendet wurden, bevor `onSubmittedWorkDone()` aufgerufen wird.

> [!NOTE]
> In den meisten Fällen müssen Sie `onSubmittedWorkDone()` _nicht_ aufrufen. Sie müssen es **_nicht_** für das Abbilden eines Puffers aufrufen. `mapAsync` garantiert, dass Aufträge, die vor dem Aufruf von `mapAsync` an die Queue gesendet werden, vor der Rückgabe von `mapAsync` ausgeführt werden (siehe [WebGPU-Spezifikation](https://gpuweb.github.io/gpuweb/#buffer-mapping)).

Die zwei Anwendungsfälle für `onSubmittedWorkDone`

1. Warten auf mehrere Pufferabbildungen (langsam)

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

   Der Grund, warum die zweite Methode langsam ist, ist, dass die Implementierung möglicherweise die Puffer abbilden kann, bevor alle gesendeten Aufträge abgeschlossen sind. Zum Beispiel, wenn alle Puffer nicht mehr verwendet werden, aber mehr Arbeit (nicht in Bezug auf die Puffer) bereits gesendet wurde, dann werden Sie länger mit der zweiten Methode warten, als mit der ersten.

2. Drosselung der Arbeit

   Wenn Sie schwere Berechnungsarbeiten ausführen und zu viel Arbeit auf einmal senden, kann der Browser Ihre Arbeit beenden. Sie können die Arbeit drosseln, indem Sie erst dann mehr Arbeit senden, wenn die bereits gesendete Arbeit abgeschlossen ist.

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
