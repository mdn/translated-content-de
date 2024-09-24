---
title: "GPUQueue: onSubmittedWorkDone()-Methode"
short-title: onSubmittedWorkDone()
slug: Web/API/GPUQueue/onSubmittedWorkDone
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`onSubmittedWorkDone()`**-Methode der {{domxref("GPUQueue")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle über diese `GPUQueue` zum Zeitpunkt des Methodenaufrufs an die GPU übergebenen Arbeiten verarbeitet wurden.

Dies schließt das Abschließen aller {{domxref("GPUBuffer.mapAsync", "mapAsync()")}}-Aufrufe ein, die an `GPUBuffer`s erfolgen, die in die Warteschlange eingesetzte Befehle verwenden, bevor `onSubmittedWorkDone()` aufgerufen wird.

> [!NOTE] In den meisten Fällen müssen Sie `onSubmittedWorkDone()` _nicht_ aufrufen. Sie müssen es **_nicht_** für das Abbilden eines Puffers aufrufen. `mapAsync` garantiert, dass die vor dem Aufruf von `mapAsync` in die Warteschlange gestellten Arbeiten abgeschlossen sind, bevor `mapAsync` zurückkehrt (siehe [WebGPU-Spezifikation: Abschnitt 5.2](https://www.w3.org/TR/webgpu/#buffer-mapping)).

Die zwei Anwendungsfälle für `onSubmittedWorkDone`

1. Warten auf mehrere Pufferabbildungen (langsam)

   ```js
   // gut
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
   // funktioniert, aber langsam
   buffer1.mapAsync();
   buffer2.mapAsync();
   buffer3.mapAsync();
   await device.queue.onSubmittedWorkDone();
   data1 = buffer1.getMappedRange();
   data2 = buffer2.getMappedRange();
   data3 = buffer3.getMappedRange();
   ```

   Der Grund, warum die zweite Methode langsam ist, liegt darin, dass die Implementierung möglicherweise die Puffer abbilden kann, bevor alle übermittelten Arbeiten abgeschlossen sind.
   Wenn zum Beispiel alle Puffer fertig verwendet sind, aber mehr Arbeiten (unabhängig von den Puffern) bereits eingereicht wurden, dann
   warten Sie mit der zweiten Methode länger als mit der ersten.

2. Drosselung der Arbeit

   Wenn Sie schwere Berechnungsarbeiten durchführen und zu viel Arbeit auf einmal einreichen, kann der Browser Ihre Arbeit beenden.
   Sie können die Arbeit drosseln, indem Sie nur mehr Arbeit einreichen, wenn die bereits eingereichte Arbeit erledigt ist.

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
  console.log("Alle übermittelten Befehle verarbeitet.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
