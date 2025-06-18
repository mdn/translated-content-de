---
title: "GPUBuffer: mapAsync() Methode"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapAsync()`** Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Schnittstelle ordnet den angegebenen Bereich des `GPUBuffer` zu. Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Inhalt des `GPUBuffer` bereit ist, zugegriffen zu werden. Solange der `GPUBuffer` zugeordnet ist, kann er in keinen GPU-Befehlen verwendet werden.

Sobald der Puffer erfolgreich zugeordnet wurde (dies kann über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden), geben Aufrufe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) ein {{jsxref("ArrayBuffer")}} zurück, das die aktuellen Werte des `GPUBuffer` enthält, die nach Bedarf von JavaScript gelesen und aktualisiert werden können.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten abgeschlossen haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn aufzuheben, damit er wieder auf die GPU zugreifen kann.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameter

- `mode`

  - : Ein {{Glossary("bitwise_flags", "bitweises Flag")}}, das angibt, ob der `GPUBuffer` zum Lesen oder Schreiben zugeordnet ist. Mögliche Werte sind:

    - `GPUMapMode.READ`

      - : Der `GPUBuffer` ist zum Lesen zugeordnet. Werte können gelesen werden, aber alle Änderungen, die am {{jsxref("ArrayBuffer")}} vorgenommen werden, das von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegeben wird, werden verworfen, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Die Zuordnung im Lesemodus kann nur bei `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_READ` eingestellt haben (d.h. bei der Erstellung mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)).

    - `GPUMapMode.WRITE`

      - : Der `GPUBuffer` ist zum Schreiben zugeordnet. Werte können gelesen und aktualisiert werden – alle Änderungen, die am {{jsxref("ArrayBuffer")}} vorgenommen werden, das von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegeben wird, werden im `GPUBuffer` gespeichert, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Die Zuordnung im Schreibmodus kann nur bei `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_WRITE` eingestellt haben (d.h. bei der Erstellung mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)).

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des Puffers bis zum Beginn des Bereichs darstellt, der zugeordnet werden soll. Wenn `offset` weggelassen wird, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des Bereichs darstellt, der zugeordnet werden soll. Wenn `size` weggelassen wird, erstreckt sich der zugeordnete Bereich bis zum Ende des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu {{jsxref("Undefined")}} auflöst, wenn der Inhalt des `GPUBuffer` bereit ist, darauf zugegriffen zu werden.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`mapAsync()`** aufgerufen wird, andernfalls wird ein `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, das Promise wird abgelehnt und ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) wird generiert:

- `offset` ist ein Vielfaches von 8.
- Der gesamte Bereich, der zugeordnet werden soll (`size` falls angegeben oder [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset` falls nicht), ist ein Vielfaches von 4.
- Der gesamte Bereich, der zugeordnet werden soll, liegt innerhalb der Grenzen des `GPUBuffer`.
- Wenn der Modus `GPUMapMode.READ` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_READ`.
- Wenn der Modus `GPUMapMode.WRITE` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_WRITE`.

## Beispiele

Sehen Sie sich die [Hauptseite `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
