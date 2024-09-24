---
title: "GPUBuffer: mapAsync()-Methode"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`mapAsync()`**-Methode der {{domxref("GPUBuffer")}}-Schnittstelle mappt den angegebenen Bereich des `GPUBuffer`. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, darauf zuzugreifen. Solange der `GPUBuffer` gemappt ist, kann er in keine GPU-Befehle verwendet werden.

Sobald der Puffer erfolgreich gemappt wurde (was über {{domxref("GPUBuffer.mapState")}} überprüft werden kann), geben Aufrufe von {{domxref("GPUBuffer.getMappedRange()")}} ein {{jsxref("ArrayBuffer")}} zurück, das die aktuellen Werte des `GPUBuffer` enthält, um sie von JavaScript entsprechend zu lesen und zu aktualisieren.

Wenn Sie mit den `GPUBuffer`-Werten fertig sind, rufen Sie {{domxref("GPUBuffer.unmap()")}} auf, um ihn zu entmappen, damit er wieder für die GPU zugänglich ist.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameter

- `mode`

  - : Ein {{glossary("bitwise flags", "bitweise Flag")}}, das angibt, ob der `GPUBuffer` zum Lesen oder Schreiben gemappt ist. Mögliche Werte sind:

    - `GPUMapMode.READ`

      - : Der `GPUBuffer` ist zum Lesen gemappt. Werte können gelesen werden, aber alle Änderungen, die am von {{domxref("GPUBuffer.getMappedRange()")}} zurückgegebenen {{jsxref("ArrayBuffer")}} vorgenommen werden, werden verworfen, sobald {{domxref("GPUBuffer.unmap()")}} aufgerufen wird.

        Mapping im Lesemodus kann nur bei `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_READ` gesetzt haben (d.h. bei der Erstellung mit {{domxref("GPUDevice.createBuffer()")}}).

    - `GPUMapMode.WRITE`

      - : Der `GPUBuffer` ist zum Schreiben gemappt. Werte können gelesen und aktualisiert werden – alle Änderungen, die am von {{domxref("GPUBuffer.getMappedRange()")}} zurückgegebenen {{jsxref("ArrayBuffer")}} vorgenommen werden, werden im `GPUBuffer` gespeichert, sobald {{domxref("GPUBuffer.unmap()")}} aufgerufen wird.

        Mapping im Schreibmodus kann nur bei `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_WRITE` gesetzt haben (d.h. bei der Erstellung mit {{domxref("GPUDevice.createBuffer()")}}).

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des Puffers zum Anfang des zu mappenden Bereichs darstellt. Wenn `offset` weggelassen wird, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zu mappenden Bereichs darstellt. Wenn `size` weggelassen wird, erstreckt sich der gemappte Bereich bis zum Ende des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich in {{jsxref("Undefined")}} auflöst, wenn der Inhalt des `GPUBuffer` bereit ist, darauf zuzugreifen.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`mapSync()`** aufgerufen wird. Andernfalls wird ein `OperationError` {{domxref("DOMException")}} ausgelöst, das Versprechen wird zurückgewiesen und ein {{domxref("GPUValidationError")}} generiert:

- `offset` ist ein Vielfaches von 8.
- Der gesamte zu mappende Bereich (`size`, wenn angegeben, oder {{domxref("GPUBuffer.size")}} - `offset`, wenn nicht) ist ein Vielfaches von 4.
- Der gesamte zu mappende Bereich liegt innerhalb der Grenzen des `GPUBuffer`.
- Wenn der Modus `GPUMapMode.READ` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_READ`.
- Wenn der Modus `GPUMapMode.WRITE` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_WRITE`.

## Beispiele

Für ein Beispiel siehe die [Hauptseite von `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
