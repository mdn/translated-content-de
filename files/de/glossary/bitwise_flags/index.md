---
title: Bitweise Flags
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{GlossarySidebar}}

**Bitweise Flags** sind Mengen von Variablen, in der Regel einfache Zahlenwerte, die verwendet werden können, um bestimmte Verwendungen oder Funktionen einer Methode oder einer anderen Code-Struktur ein- oder auszuschalten. Sie können dies schnell und effizient tun, da sie auf Bit-Ebene operieren. Verwandte Flags in derselben Gruppe werden im Allgemeinen mit komplementären Werten versehen, die unterschiedliche Bitpositionen in einem einzelnen Wert (z.B. hexadezimal) repräsentieren, sodass mehrere Flag-Einstellungen durch einen einzigen Wert dargestellt werden können.

Zum Beispiel wird in der [WebGPU API](/de/docs/Web/API/WebGPU_API) eine [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objektinstanz mit der [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)-Methode erstellt. Wenn Sie diese Methode aufrufen, definieren Sie eine `usage`-Eigenschaft im Deskriptor, die ein oder mehrere Flags enthält, die verschiedene erlaubte Verwendungen dieses Puffers aktivieren.

```js
const descriptor = {
  usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE,
};
```

Diese Werte werden im selben Namespace definiert, und jeder hat einen hexadezimalen Wert:

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

Wenn Sie die Eigenschaft [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) abfragen, erhalten Sie eine einzelne Dezimalzahl zurück, die die Summe der verschiedenen Dezimalwerte für die verschiedenen Nutzungs-Flags darstellt. Zurückkehrend zu dem obigen Beispiel, würde das Abfragen von `GPUBuffer.usage` für den `GPUBuffer`, der mit der zuvor spezifizierten Nutzung erstellt wurde, Folgendes zurückgeben:

- Dezimaläquivalent von `GPUBufferUsage.COPY_SRC`, 4
- Addiere das Dezimaläquivalent von `GPUBufferUsage.MAP_WRITE`, 2
- Ergibt 6.

Aufgrund der gewählten Werte für die verschiedenen Flags ist jede Kombination von Werten einzigartig, sodass das Programm auf einen Blick erkennen kann, welche Flags aus einem einzigen Wert gesetzt sind. Darüber hinaus können Sie einfach testen, welche Flags im kombinierten Wert gesetzt sind, indem Sie den bitweisen Und-Operator verwenden:

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // Buffer has MAP_WRITE usage
}
```

## Siehe auch

- [Bitwise Flags are Beautiful, and Here's Why](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- [Bitweise Operation](https://en.wikipedia.org/wiki/Bitwise_operation) auf Wikipedia
