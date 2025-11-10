---
title: Bitweise Flags
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Bitweise Flags** sind Mengen von Variablen, üblicherweise einfache Zahlenwerte, die verwendet werden können, um bestimmte Nutzungen oder Funktionen einer Methode oder einer anderen Code-Struktur zu aktivieren oder zu deaktivieren. Sie tun dies schnell und effizient, weil sie auf der Bit-Ebene arbeiten. Verwandte Flags in derselben Gruppe erhalten in der Regel komplementäre Werte, die verschiedene Bit-Positionen in einem einzelnen Wert (z. B. Hexadezimal) darstellen, sodass mehrere Flageinstellungen durch einen einzigen Wert dargestellt werden können.

Zum Beispiel wird im [WebGPU API](/de/docs/Web/API/WebGPU_API) ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objektinstanz mithilfe der [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)-Methode erstellt. Wenn Sie diese Methode aufrufen, definieren Sie eine `usage`-Eigenschaft im Descriptor, die ein oder mehrere Flags enthält, die verschiedene erlaubte Nutzungen dieses Buffers ermöglichen.

```js
const descriptor = {
  usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE,
};
```

Diese Werte werden innerhalb desselben Namensraums definiert, und jeder hat einen Hexadezimalwert:

| Nutzungs-Flag                  | Hexadezimale Darstellung | Dezimaläquivalent |
| ------------------------------ | ------------------------ | ----------------- |
| `GPUBufferUsage.MAP_READ`      | 0x0001                   | 1                 |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002                   | 2                 |
| `GPUBufferUsage.COPY_SRC`      | 0x0004                   | 4                 |
| `GPUBufferUsage.COPY_DST`      | 0x0008                   | 8                 |
| `GPUBufferUsage.INDEX`         | 0x0010                   | 16                |
| `GPUBufferUsage.VERTEX`        | 0x0020                   | 32                |
| `GPUBufferUsage.UNIFORM`       | 0x0040                   | 64                |
| `GPUBufferUsage.STORAGE`       | 0x0080                   | 128               |
| `GPUBufferUsage.INDIRECT`      | 0x0100                   | 256               |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200                   | 512               |

Wenn Sie die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage)-Eigenschaft abfragen, erhalten Sie eine einzelne Dezimalzahl zurück, die die Summe der verschiedenen Dezimalwerte für die unterschiedlichen Nutzungs-Flags darstellt. Im obigen Beispiel würde das Abfragen von `GPUBuffer.usage` für den `GPUBuffer`, der mit der zuvor angegebenen Nutzung erstellt wurde, Folgendes zurückgeben:

- Dezimaläquivalent von `GPUBufferUsage.COPY_SRC`, 4
- Hinzufügen von `GPUBufferUsage.MAP_WRITE`'s Dezimaläquivalent, 2
- Ergibt 6.

Aufgrund der gewählten Werte für die verschiedenen Flags ist jede Kombination von Werten eindeutig, so dass das Programm auf einen Blick erkennen kann, welche Flags aus einem einzigen Wert gesetzt sind. Darüber hinaus können Sie leicht testen, welche Flags im kombinierten Wert gesetzt sind, indem Sie den bitweisen Und-Operator verwenden:

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // Buffer has MAP_WRITE usage
}
```

## Siehe auch

- [Bitwise Flags are Beautiful, and Here's Why](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [Bitweiser Operation](https://en.wikipedia.org/wiki/Bitwise_operation) auf Wikipedia
